export const id = 262;
export const ids = [262];
export const modules = {
  41355: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => dq,
      e: () => xq,
      h: () => mq,
      l: () => cq
    });
    var Yq = gq(37286),
      lq = gq(38677),
      Oq = gq(38671);

    function mq(qq, Eq, gq, Yq) {
      const lq = Oq.w;
      Eq.fill(0), qq.gravity.toArray(Eq, lq.gravity), qq.colorDead.toArray(Eq, lq.colorDead), gq[lq.ramp] = qq.useRampGradients ? 1 : 0;
      const mq = qq.getColorGradients(),
        xq = Wq(qq, mq, "colour", Yq);
      gq[lq.colorCount] = xq;
      for (let Oq = 0; Oq < xq; Oq++) {
        var Aq;
        const qq = mq[Nq(mq, Oq)];
        Eq[lq.colorPositions + Oq] = qq.gradient, qq.color1.toArray(Eq, lq.color1 + 4 * Oq), (null !== (Aq = qq.color2) && void 0 !== Aq ? Aq : qq.color1).toArray(Eq, lq.color2 + 4 * Oq)
      }
      const cq = qq.getVelocityGradients(),
        uq = Wq(qq, cq, "JV", Yq);
      gq[lq.velocityCount] = uq;
      for (let Oq = 0; Oq < uq; Oq++) Hq(Eq, lq.JV + 4 * Oq, cq[Nq(cq, Oq)]);
      const Bq = qq.useRampGradients ? qq.getColorRemapGradients() : null,
        aq = Wq(qq, Bq, "colour remap", Yq);
      gq[lq.remapCount] = aq;
      for (let Oq = 0; Oq < aq; Oq++) Hq(Eq, lq.remap + 4 * Oq, Bq[Nq(Bq, Oq)])
    }

    function xq() {
      return {
        key: [],
        texels: new Uint8Array(4 * Oq.m)
      }
    }
    const Aq = [];

    function cq(qq, Eq) {
      return uq(qq, Aq), !jq(Aq, Eq.key) && (Eq.key.length = 0, Eq.key.push(...Aq), Eq.key.length > 0 && function(qq, Eq) {
        for (let gq = 0; gq < Oq.m; gq++) lq.k.GetCurrentGradient(gq / Oq.m, qq, ((qq, Eq, gq) => {
          Yq.Color3.LerpToRef(qq.color, Eq.color, gq, Bq)
        })), Eq[4 * gq] = 255 * Bq.r, Eq[4 * gq + 1] = 255 * Bq.g, Eq[4 * gq + 2] = 255 * Bq.b, Eq[4 * gq + 3] = 255
      }(qq.getRampGradients(), Eq.texels), !0)
    }

    function uq(qq, Eq) {
      Eq.length = 0;
      const gq = qq.useRampGradients ? qq.getRampGradients() : null;
      if (null !== gq && void 0 !== gq && gq.length) {
        Eq.push(gq.length);
        for (const qq of gq) Eq.push(qq.gradient, qq.color.r, qq.color.g, qq.color.b)
      }
    }
    const Bq = new Yq.Color3;

    function Wq(qq, Eq, gq, Yq) {
      return Eq ? Eq.length > Oq.b ? (Yq(`particleStops:${gq}`, `GPU particles use the first 2 and last ${Oq.b-2} of more than ${Oq.b} ${gq} gradient stops (${qq.name})`), Oq.b) : Eq.length : 0
    }

    function Nq(qq, Eq) {
      return Eq < 2 || qq.length <= Oq.b ? Eq : qq.length - Oq.b + Eq
    }
    const aq = new Float32Array(Oq.r),
      Vq = new Uint32Array(aq.buffer);

    function dq(qq, Eq, gq) {
      return mq(qq, aq, Vq, gq), Eq && jq(Vq, Eq) ? null : Vq.slice()
    }

    function jq(qq, Eq) {
      if (qq.length !== Eq.length) return !1;
      for (let gq = 0; gq < qq.length; gq++)
        if (qq[gq] !== Eq[gq]) return !1;
      return !0
    }

    function Hq(qq, Eq, gq) {
      var Yq;
      qq[Eq] = gq.gradient, qq[Eq + 1] = gq.factor1, qq[Eq + 2] = null !== (Yq = gq.factor2) && void 0 !== Yq ? Yq : gq.factor1
    }
  },
  41352: (qq, Eq, gq) => {
    function Yq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Eq = new Set;
      return (gq, Yq) => {
        Eq.has(gq) || (Eq.add(gq), console.warn(qq + Yq))
      }
    }
    gq.d(Eq, {
      e: () => Yq
    })
  },
  41387: (qq, Eq, gq) => {
    gq.d(Eq, {
      createLiteRendererAsync: () => bA,
      liteBabylonBackend: () => Lq,
      setPipelineFailureHook: () => sl
    });
    var Yq = gq(37286),
      lq = gq(37614),
      Oq = gq(37870),
      mq = gq(37242),
      xq = gq(37877);
    class Aq extends xq.e {
      constructor() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        super(...Eq), this.color = new Yq.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: Eq[0].ZJ().getUniqueId(),
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
          needAlphaBlendingForMesh: qq => qq.visibility < 1 || qq.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const cq = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      uq = qq => 1 << cq.indexOf(qq),
      Bq = uq("VERTEXCOLOR"),
      Wq = uq("INSTANCES"),
      Nq = uq("THIN_INSTANCES"),
      aq = uq("INSTANCESCOLOR"),
      Vq = uq("FOG"),
      dq = uq("LITE_FRONT_LAYER");

    function jq(qq, Eq, gq, Yq) {
      let lq = 0;
      return qq.isVerticesDataPresent("color") && (lq |= Bq), "none" !== Eq && (lq |= Wq), "thin" === Eq && (lq |= Nq, qq.isVerticesDataPresent("instanceColor") && (lq |= aq)), Yq.fogEnabled && qq.applyFog && 0 !== Yq.fogMode && (lq |= Vq), gq >= 1 && (lq |= dq), lq
    }

    function Hq(qq, Eq) {
      qq.updateColor4("color", Eq.color, Eq.alpha)
    }
    var oq = gq(37823),
      Pq = gq(37429),
      Qq = gq(37313),
      yq = gq(37220),
      tq = gq(37815),
      rq = gq(37821),
      vq = gq(37233),
      hq = gq(37240),
      nq = gq(37244);
    const bq = yq.d.GLSL;
    class iq {
      constructor(qq, Eq) {
        this.name = qq, this.PV = Eq, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.MJ = {
          addOnce: qq => {
            this.disposers.push(qq)
          }
        }, this.uniqueId = Eq.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      ZJ() {
        return this.PV
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
      needAlphaBlendingForMesh(qq) {
        return (0, vq.I)(this.model, qq.visibility, qq.hasVertexAlpha)
      }
      needAlphaTestingForMesh(qq) {
        return (0, vq.M)(this.model, qq.visibility, qq.hasVertexAlpha)
      }
      dispose() {
        (0, Pq.n)(this);
        for (const qq of this.disposers.splice(0)) qq()
      }
      get model() {
        return (0, vq.T)(this)
      }
    }
    const Zq = new WeakSet;

    function fq(qq) {
      return Zq.has(qq)
    }

    function Mq(qq) {
      Zq.add(qq)
    }
    const Tq = {
      create: (qq, Eq) => ((0, Qq.t)(qq, new iq(qq.name, Eq)), hq.c.defines()),
      write: () => {},
      addFeature: (qq, Eq) => {
        const gq = qq.mirror;
        Eq.feature === rq.g && Eq.state.dirLightCount > 0 && (qq.disableLighting = !0, (0, vq.Q)(qq)), "BLOXD_LIGHTING" in Eq.defines && (0, Pq.l)(gq), Eq.feature === tq.j && ((0, oq.h)(Eq.state, bq), function(qq, Eq) {
          const gq = qq.ZJ().Ba();
          Eq.textures.forEach(((Yq, lq) => {
            setTimeout((() => {
              var Oq, mq;
              const {
                url: xq
              } = Yq.source;
              gq.atlasArray(xq, null !== (Oq = null === (mq = Eq.sources.pixels) || void 0 === mq ? void 0 : mq[lq]) && void 0 !== Oq ? Oq : null, Eq.sources.layerWidth).then((gq => {
                (0, oq.e)(qq, Eq, lq, gq, gq.layerWidth, gq.layers, bq)
              })).catch((qq => {
                console.error(`Failed to build texture array for atlas ${lq}`, qq)
              }))
            }))
          }))
        }(gq, Eq.state))
      },
      texture: (qq, Eq, gq) => {
        let {
          data: Yq,
          sets: lq
        } = gq;
        var Oq;
        (Mq(qq), Yq) && (qq.uvSet = null !== (Oq = null === lq || void 0 === lq ? void 0 : lq.coordinatesIndex) && void 0 !== Oq ? Oq : 0, (0, Qq.bb)(qq.matrix, null !== lq && void 0 !== lq ? lq : {}))
      },
      cube: Mq,
      canvas: (qq, Eq, gq) => {
        let {
          width: Yq,
          height: lq,
          mipmaps: Oq,
          samplingMode: mq = nq.i.trilinear,
          hasAlpha: xq = !1,
          wrap: Aq = nq.d.clamp
        } = gq;
        const cq = qq.Ba().createCanvas(Yq, lq),
          uq = new nq.l("2d", {
            kind: "canvas",
            width: Yq,
            height: lq,
            canvas: cq
          }, {
            samplingMode: mq,
            wrapU: Aq,
            wrapV: Aq,
            noMipmap: !Oq,
            invertY: !0
          });
        return uq.hasAlpha = xq, Mq(uq), uq
      }
    };
    var zq = gq(37451),
      Sq = gq(37156);
    class pq {
      constructor(qq, Eq, gq) {
        this.engine = qq, this.clearColor = Eq, this.ambientColor = gq, this.onBeforeRenderObservable = new Sq.d, this.onBeforeCameraRenderObservable = new Sq.d, this.onAfterRenderObservable = new Sq.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.xZ = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Ba() {
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
      addPendingData(qq) {
        this.pending.push(qq)
      }
      removePendingData(qq) {
        const Eq = this.pending.indexOf(qq); - 1 !== Eq && this.pending.splice(Eq, 1)
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

    function Gq() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const Lq = {
      sgq: Gq,
      clq: (qq, Eq) => {
        const gq = new pq(qq.engine, Yq.e.FromArray(Eq.clearColor), Yq.Color3.FromArray(Eq.ambientColor));
        (0, mq.e)(Tq, gq), qq.PV = gq,
          function(qq, Eq) {
            const gq = Object.assign((0, zq.e)(qq, "camera"), {
              layerMask: 268435455
            });
            qq.model.nodes.setWorldSource(gq.row, qq.model.view.worldMatrix), qq.camera = Eq.activeCamera = gq
          }(qq, gq), (0, lq.l)(qq, ((qq, Eq, gq) => (0, Oq.h)(qq, Eq, gq, xq.e)))
      },
      Olq: () => {},
      setBabylonFog: () => {},
      Blq: Gq,
      alq: () => {},
      linesFromArrays: (qq, Eq, gq) => (0, Oq.h)(qq, Eq, gq, Aq),
      QV: () => {},
      Nlq: Gq
    };
    var Jq = gq(41459),
      kq = gq(41475);
    class Rq {
      constructor(qq) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const Eq = new Promise((qq => {
          this.refused = qq
        }));
        this.deviceLost = Promise.race([qq, Eq])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(qq) {
        (function(qq) {
          const {
            name: Eq,
            message: gq
          } = null !== qq && void 0 !== qq ? qq : {};
          return "InvalidStateError" === Eq && "string" === typeof gq && gq.startsWith("GPUDevice.")
        })(qq) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: qq.message,
          framesRefused: !0
        }))
      }
    }
    class Uq {
      constructor(qq) {
        this.resources = qq, this.matrixKey = {
          WB: 0
        }, this.attributesKey = {
          WB: 0
        }, this.inputs = Object.create(null);
        for (let Eq = 0; Eq < 4; Eq++) this.inputs[`world${Eq}`] = new Xq(this.matrixKey, 16 * Eq, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(qq, Eq) {
        this.resources.vertexBufferCreated(this.matrixKey, qq, !0), Eq && this.resources.vertexBufferCreated(this.attributesKey, Eq, !0)
      }
    }
    class Fq extends Uq {
      constructor(qq, Eq, gq) {
        super(qq), this.mesh = Eq, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Yq = this.inputs;
        let lq = 0;
        for (const {
            size: mq
          }
          of gq) lq += mq;
        for (const {
            name: mq,
            offset: xq,
            size: Aq,
            type: cq
          }
          of gq) Yq[mq] = new Xq(this.attributesKey, 4 * xq, 4 * lq, Aq, !0, cq);
        this.rowStride = lq, qq.U_.set(Eq, this);
        const Oq = Eq.isVerticesDataPresent;
        Eq.isVerticesDataPresent = (qq, gq) => qq in Yq || Oq.call(Eq, qq, gq)
      }
      attach(qq, Eq) {
        this.matrices = qq, this.attributes = Eq, this.bind(qq, Eq), this.mirror(qq, qq.length, qq.length / 16)
      }
      gqq(qq) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, qq ? 64 * qq : void 0)
      }
      Yqq() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(qq, Eq) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * qq, 16 * Eq)
      }
      attributeRows(qq, Eq) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, qq * this.rowStride, Eq * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(qq, Eq, gq) {
        const Yq = this.mesh._thinInstanceDataStorage;
        Yq.matrixData = qq, Yq.matrixBufferSize = Eq, Yq.worldMatrices = null, Yq.instancesCount = gq
      }
    }
    class sq extends Uq {
      constructor(qq, Eq, gq) {
        var Yq, lq, Oq, mq;
        super(qq), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.interleavedKinds) && void 0 !== Yq ? Yq : null, this.offsets = null !== (lq = null === gq || void 0 === gq ? void 0 : gq.interleavedOffsets) && void 0 !== lq ? lq : [], this.rowStride = null !== (Oq = null === gq || void 0 === gq ? void 0 : gq.interleavedRowStride) && void 0 !== Oq ? Oq : 0, null === (mq = this.layout) || void 0 === mq || mq.forEach(((qq, Eq) => {
          this.inputs[qq] = new Xq(this.attributesKey, 4 * this.offsets[Eq], 4 * this.rowStride, gq.strides[qq])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), qq.batchUploads.set(Eq, this), Eq.MJ.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(qq) {
        const Eq = this.packedBatch;
        return Eq.renderSelf ? 0 === qq ? this.packedSource : Eq.instances[qq - 1] : Eq.instances[qq]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(qq, Eq, gq, Yq) {
        const lq = (Eq.renderSelf ? 1 : 0) + Eq.rows.length;
        if (this.frame = Yq, this.count = lq, this.packedSource = qq, this.packedBatch = Eq, 0 === lq) return;
        if (qq.getWorldMatrix(), 16 * lq > this.matrices.length) {
          let qq = this.matrices.length / 16;
          for (; qq < lq;) qq *= 2;
          this.matrices = new Float32Array(16 * qq), this.attributes &&= new Float32Array(qq * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Oq = 0;
        Eq.renderSelf && this.packRow(Oq++, qq, Eq.row, gq);
        for (let mq = 0; mq < Eq.rows.length; mq++) this.packRow(Oq++, Eq.instances[mq], Eq.rows[mq], gq);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * lq), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, lq * this.rowStride)
      }
      packRow(qq, Eq, gq, Yq) {
        const lq = this.matrices;
        if (gq < 0) lq.set(Eq.getWorldMatrix().m, 16 * qq);
        else
          for (let cq = 0; cq < 16; cq++) lq[16 * qq + cq] = Yq[16 * gq + cq];
        const Oq = this.attributes;
        if (!Oq) return;
        const mq = Eq.uR,
          xq = this.layout;
        for (let cq = 0; cq < xq.length; cq++) {
          var Aq;
          const Eq = null !== (Aq = mq[xq[cq]]) && void 0 !== Aq ? Aq : 0,
            gq = qq * this.rowStride + this.offsets[cq];
          Eq.toArray ? Eq.toArray(Oq, gq) : Eq.copyToArray ? Eq.copyToArray(Oq, gq) : Oq[gq] = Eq
        }
      }
    }
    class Xq {
      constructor(qq, Eq, gq, Yq) {
        let lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = qq, this.byteOffset = Eq, this.byteStride = gq, this.size = Yq, this.instanced = lq, this.type = Oq, this.normalized = mq
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
    const wq = "CANVAS_ALPHA_ONE",
      Kq = `override ${wq}: bool = false;`,
      Cq = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function Iq(qq, Eq, gq) {
      var Yq;
      let lq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Oq = null !== (Yq = Eq._colorFormat) && void 0 !== Yq ? Yq : "bgra8unorm",
        mq = lq ? 15 : 0;
      return gq ? {
        ...qq,
        targets: [{
          format: Oq,
          blend: {
            color: gq,
            alpha: Cq
          },
          writeMask: mq
        }]
      } : {
        ...qq,
        constants: {
          ...qq.constants,
          [wq]: 1
        },
        targets: [{
          format: Oq,
          writeMask: mq
        }]
      }
    }

    function eq(qq, Eq) {
      qq._renderables.push(Eq)
    }

    function Dq(qq) {
      var Eq, gq;
      return null !== (Eq = null === (gq = qq._frameGraph) || void 0 === gq ? void 0 : gq._tasks) && void 0 !== Eq ? Eq : []
    }

    function qE(qq) {
      return qq._currentEncoder
    }

    function EE(qq) {
      return qq.createBindGroupLayout({
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
    const gE = "greater-equal",
      YE = 2e5,
      lE = 1e5,
      OE = new WeakMap;

    function mE(qq, Eq) {
      let gq = OE.get(qq);
      if (!gq) {
        gq = {
          module: qq.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, OE.set(qq, gq)
      }
      const Yq = `${Eq._colorFormat}|${Eq._depthStencilFormat}|${Eq._sampleCount}`;
      let lq = gq.pipelines.get(Yq);
      if (!lq) {
        var Oq;
        const {
          module: mq
        } = gq;
        lq = qq.createRenderPipeline({
          label: `placeholder ${Yq}`,
          layout: qq.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: mq,
            entryPoint: "v"
          },
          fragment: {
            module: mq,
            entryPoint: "f",
            targets: [{
              format: null !== (Oq = Eq._colorFormat) && void 0 !== Oq ? Oq : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: Eq._depthStencilFormat ? {
            format: Eq._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Eq._sampleCount
          }
        }), gq.pipelines.set(Yq, lq)
      }
      return lq
    }

    function xE(qq, Eq, gq) {
      const Yq = Eq.eye,
        lq = Eq.viewMatrix;
      qq[0] = Yq[0] + lq[2] * gq, qq[1] = Yq[1] + lq[6] * gq, qq[2] = Yq[2] + lq[10] * gq
    }
    var AE = gq(37918),
      cE = gq(41352),
      uE = gq(37230);
    const BE = Math.PI,
      WE = BE / 1.95,
      NE = [5e-4 / 94, 125e-7, 5e-4 / 18],
      aE = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((qq => {
        let [Eq, gq] = qq;
        return .434 * BE * Math.pow(2 * BE / Eq, 2) * gq
      }));

    function VE(qq, Eq, gq) {
      const {
        up: Yq,
        mieDirectionalG: lq
      } = qq, Oq = 1 - HE(1 - Math.exp(Eq[1] / 45e4), 0, 1), mq = qq.rayleigh - (1 - Oq), xq = Math.hypot(Eq[0], Eq[1], Eq[2]), Aq = xq > 0 ? 1 / xq : 0, cq = gq.sunDir;
      for (let Nq = 0; Nq < 3; Nq++) cq[Nq] = Eq[Nq] * Aq;
      const uq = cq[0] * Yq[0] + cq[1] * Yq[1] + cq[2] * Yq[2],
        Bq = 1e3 * Math.max(0, 1 - Math.exp(-(WE - Math.acos(HE(uq, -1, 1))) / 1.5));
      gq.sunE = Bq;
      const Wq = .2 * qq.turbidity * 1e-17 * qq.mieCoefficient;
      for (let Nq = 0; Nq < 3; Nq++) {
        const qq = NE[Nq] * mq,
          Eq = aE[Nq] * Wq,
          Yq = Bq / (qq + Eq);
        gq.inScatterR[Nq] = qq * Yq, gq.inScatterM[Nq] = Eq * Yq, gq.extinctionBeta[Nq] = 8400 * qq + 1250 * Eq
      }
      return gq.sunsetMix = HE(Math.pow(1 - uq, 5), 0, 1), gq.sunDiscE = 19e3 * Bq, gq.mieScale = (1 - lq * lq) / (4 * BE), gq.mieBase = 1 + lq * lq, gq.mieSlope = 2 * lq, gq
    }
    const dE = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const jE = 1 / function(qq) {
      const {
        A: Eq,
        B: gq,
        C: Yq,
        D: lq,
        E: Oq,
        F: mq
      } = dE;
      return (qq * (Eq * qq + Yq * gq) + lq * Oq) / (qq * (Eq * qq + gq) + lq * mq) - Oq / mq
    }(1e3);

    function HE(qq, Eq, gq) {
      return Math.min(Math.max(qq, Eq), gq)
    }
    const oE = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function PE(qq, Eq) {
      const gq = new Map(Eq),
        Yq = [],
        lq = [],
        Oq = () => 0 === lq.length || lq[lq.length - 1].active;
      let mq = null;
      const xq = () => {
        const qq = [...gq].filter((qq => {
            let [, Eq] = qq;
            return !0 !== Eq
          })),
          Eq = qq.map((qq => {
            let [Eq] = qq;
            return Eq
          })).join("|");
        mq = qq.length ? new RegExp(`\\b(${Eq})\\b`, "g") : null
      };
      xq();
      for (const Aq of qq.split("\n")) {
        const qq = oE.exec(Aq);
        if (!qq) {
          Oq() && Yq.push(mq ? QE(Aq, mq, gq) : Aq);
          continue
        }
        const Eq = qq[1],
          cq = qq[2].trim();
        if ("ifdef" === Eq || "ifndef" === Eq || "if" === Eq) {
          const qq = Oq(),
            Yq = "if" === Eq ? yE(cq, gq) : gq.has(cq) === ("ifdef" === Eq);
          lq.push({
            active: qq && Yq,
            parentActive: qq,
            taken: Yq
          })
        } else if ("elif" === Eq || "else" === Eq) {
          const qq = lq[lq.length - 1];
          if (!qq) throw new Error(`#${Eq} without #if`);
          const Yq = !qq.taken && ("else" === Eq || yE(cq, gq));
          qq.active = qq.parentActive && Yq, qq.taken = qq.taken || Yq
        } else if ("endif" === Eq) {
          if (!lq.pop()) throw new Error("#endif without #if")
        } else if (Oq()) {
          const [qq, ...Yq] = cq.split(/\s+/);
          "undef" === Eq ? gq.delete(qq) : gq.set(qq, !Yq.length || Yq.join(" ")), xq()
        }
      }
      if (lq.length) throw new Error("Unterminated #if");
      return Yq.join("\n")
    }

    function QE(qq, Eq, gq) {
      return qq.replace(Eq, (qq => {
        const Eq = gq.get(qq);
        return "string" === typeof Eq ? Eq : qq
      }))
    }

    function yE(qq, Eq) {
      var gq;
      const Yq = null !== (gq = qq.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== gq ? gq : [];
      let lq = 0;
      const Oq = () => Yq[lq],
        mq = () => Yq[lq++],
        xq = qq => {
          const gq = /^\d/.test(qq) ? qq : Eq.get(qq);
          return "string" === typeof gq ? parseInt(gq) : Number.NaN
        },
        Aq = () => {
          const qq = mq();
          if ("!" === qq) return !Aq();
          if ("(" === qq) {
            const qq = uq();
            return mq(), qq
          }
          if ("defined" === qq) {
            const qq = "(" === Oq();
            qq && mq();
            const gq = mq();
            return qq && mq(), Eq.has(gq)
          }
          const gq = Oq();
          if ("==" === gq || "!=" === gq || ">" === gq || "<" === gq || ">=" === gq || "<=" === gq) {
            mq();
            const Eq = xq(qq),
              Yq = xq(mq());
            if (Number.isNaN(Eq) || Number.isNaN(Yq)) return !1;
            switch (gq) {
              case "==":
                return Eq === Yq;
              case "!=":
                return Eq !== Yq;
              case ">":
                return Eq > Yq;
              case "<":
                return Eq < Yq;
              case ">=":
                return Eq >= Yq;
              default:
                return Eq <= Yq
            }
          }
          return Eq.has(qq)
        },
        cq = () => {
          let qq = Aq();
          for (;
            "&&" === Oq();) {
            mq();
            const Eq = Aq();
            qq = qq && Eq
          }
          return qq
        },
        uq = () => {
          let qq = cq();
          for (;
            "||" === Oq();) {
            mq();
            const Eq = cq();
            qq = qq || Eq
          }
          return qq
        },
        Bq = uq();
      if (lq !== Yq.length) throw new Error(`Cannot evaluate #if ${qq}`);
      return Bq
    }
    var tE = gq(37228),
      rE = gq(37516),
      vE = gq(37525),
      hE = gq(40622),
      nE = gq(38714);
    const bE = 32,
      iE = [10, 3, 10],
      ZE = [21, 7, 21],
      fE = ZE[0] * ZE[1] * ZE[2],
      ME = 0,
      TE = 1,
      zE = 2,
      SE = 3,
      pE = 64,
      GE = 512,
      LE = 4 * fE,
      JE = 1536,
      kE = LE + fE * JE,
      RE = 1073741824,
      UE = kE + 1;

    function FE(qq, Eq) {
      const gq = qq % Eq;
      return gq < 0 ? gq + Eq : gq
    }

    function sE(qq, Eq, gq) {
      return Yq = FE(qq, ZE[0]), lq = FE(Eq, ZE[1]), Oq = FE(gq, ZE[2]), Yq + ZE[0] * (lq + ZE[1] * Oq);
      var Yq, lq, Oq
    }

    function XE(qq, Eq, gq) {
      return qq + 8 * (Eq + 8 * gq)
    }

    function wE(qq, Eq, gq) {
      return qq + 4 * (Eq + 4 * gq)
    }
    const KE = 65535,
      CE = 0,
      IE = 1,
      eE = 2,
      DE = 3;

    function qg(qq) {
      return Math.ceil(qq * qq / 32)
    }
    const Eg = 8192,
      gg = 1 << 18,
      Yg = 65536,
      lg = 294912,
      Og = 128,
      mg = 4096,
      xg = 16,
      Ag = 16385,
      cg = 81921,
      ug = 147457,
      Bg = 4194304;
    const Wg = [0, 0, 0],
      Ng = [0, 0, 0];

    function ag(qq, Eq, gq, Yq) {
      ! function(qq, Eq, gq) {
        const [Yq, lq, Oq] = [qq[0], qq[1], qq[2]];
        let mq, xq, Aq;
        Math.abs(lq) < .99 ? (mq = Oq, xq = 0, Aq = -Yq) : (mq = -lq, xq = Yq, Aq = 0);
        const cq = Math.hypot(mq, xq, Aq);
        Eq[0] = mq / cq, Eq[1] = xq / cq, Eq[2] = Aq / cq, gq[0] = lq * Eq[2] - Oq * Eq[1], gq[1] = Oq * Eq[0] - Yq * Eq[2], gq[2] = Yq * Eq[1] - lq * Eq[0]
      }(Yq, Wg, Ng);
      const lq = 1 / 32;
      for (const [Oq, mq] of [
          [0, Wg],
          [4, Ng]
        ]) {
        for (let gq = 0; gq < 3; gq++) qq[Eq + Oq + gq] = mq[gq] * lq;
        qq[Eq + Oq + 3] = -(mq[0] * gq[0] + mq[1] * gq[1] + mq[2] * gq[2]) * lq
      }
    }
    class Vg {
      constructor() {
        this.words = new Uint32Array(ug), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      gN(qq, Eq) {
        this.parts = 0, this.refs = 0, this.view = qq, this.viewAt = Eq;
        const gq = qq[Eq + 1] * qq[Eq + 6] - qq[Eq + 2] * qq[Eq + 5],
          Yq = qq[Eq + 2] * qq[Eq + 4] - qq[Eq] * qq[Eq + 6],
          lq = qq[Eq] * qq[Eq + 5] - qq[Eq + 1] * qq[Eq + 4],
          Oq = Math.hypot(gq, Yq, lq) || 1;
        this.light[0] = gq / Oq, this.light[1] = Yq / Oq, this.light[2] = lq / Oq
      }
      add(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= mg || ! function(qq, Eq, gq) {
            const Yq = qq[Eq],
              lq = qq[Eq + 1],
              Oq = qq[Eq + 2],
              mq = qq[Eq + 3],
              xq = qq[Eq + 4],
              Aq = qq[Eq + 5],
              cq = qq[Eq + 6],
              uq = qq[Eq + 7],
              Bq = qq[Eq + 8],
              Wq = qq[Eq + 9],
              Nq = qq[Eq + 10],
              aq = qq[Eq + 11],
              Vq = qq[Eq + 12],
              dq = qq[Eq + 13],
              jq = qq[Eq + 14],
              Hq = qq[Eq + 15],
              oq = Yq * Aq - lq * xq,
              Pq = Yq * cq - Oq * xq,
              Qq = Yq * uq - mq * xq,
              yq = lq * cq - Oq * Aq,
              tq = lq * uq - mq * Aq,
              rq = Oq * uq - mq * cq,
              vq = Bq * dq - Wq * Vq,
              hq = Bq * jq - Nq * Vq,
              nq = Bq * Hq - aq * Vq,
              bq = Wq * jq - Nq * dq,
              iq = Wq * Hq - aq * dq,
              Zq = Nq * Hq - aq * jq,
              fq = oq * Zq - Pq * iq + Qq * bq + yq * nq - tq * hq + rq * vq;
            if (!(Math.abs(fq) > 1e-12)) return !1;
            const Mq = 1 / fq;
            return gq[0] = (Aq * Zq - cq * iq + uq * bq) * Mq, gq[1] = (Oq * iq - lq * Zq - mq * bq) * Mq, gq[2] = (dq * rq - jq * tq + Hq * yq) * Mq, gq[3] = (Nq * tq - Wq * rq - aq * yq) * Mq, gq[4] = (cq * nq - xq * Zq - uq * hq) * Mq, gq[5] = (Yq * Zq - Oq * nq + mq * hq) * Mq, gq[6] = (jq * Qq - Vq * rq - Hq * Pq) * Mq, gq[7] = (Bq * rq - Nq * Qq + aq * Pq) * Mq, gq[8] = (xq * iq - Aq * nq + uq * vq) * Mq, gq[9] = (lq * nq - Yq * iq - mq * vq) * Mq, gq[10] = (Vq * tq - dq * Qq + Hq * oq) * Mq, gq[11] = (Wq * Qq - Bq * tq - aq * oq) * Mq, gq[12] = (Aq * hq - xq * bq - cq * vq) * Mq, gq[13] = (Yq * bq - lq * hq + Oq * vq) * Mq, gq[14] = (dq * Pq - Vq * yq - jq * oq) * Mq, gq[15] = (Bq * yq - Wq * Pq + Nq * oq) * Mq, !0
          }(Eq, gq, this.inverse)) return;
        const {
          view: Yq,
          viewAt: lq
        } = this, Oq = gq;
        let mq = 1 / 0,
          xq = 1 / 0,
          Aq = -1 / 0,
          cq = -1 / 0,
          uq = -1 / 0;
        const [Bq, Wq, Nq] = this.light;
        for (let Qq = 0; Qq < 8; Qq++) {
          const gq = 1 & Qq ? qq.hi[0] : qq.lo[0],
            aq = 2 & Qq ? qq.hi[1] : qq.lo[1],
            Vq = 4 & Qq ? qq.hi[2] : qq.lo[2],
            dq = gq * Eq[Oq] + aq * Eq[Oq + 4] + Vq * Eq[Oq + 8] + Eq[Oq + 12],
            jq = gq * Eq[Oq + 1] + aq * Eq[Oq + 5] + Vq * Eq[Oq + 9] + Eq[Oq + 13],
            Hq = gq * Eq[Oq + 2] + aq * Eq[Oq + 6] + Vq * Eq[Oq + 10] + Eq[Oq + 14],
            oq = Yq[lq] * dq + Yq[lq + 1] * jq + Yq[lq + 2] * Hq + Yq[lq + 3],
            Pq = Yq[lq + 4] * dq + Yq[lq + 5] * jq + Yq[lq + 6] * Hq + Yq[lq + 7];
          mq = Math.min(mq, oq), xq = Math.min(xq, Pq), Aq = Math.max(Aq, oq), cq = Math.max(cq, Pq), uq = Math.max(uq, Bq * dq + Wq * jq + Nq * Hq)
        }
        if (Aq < -1 || cq < -1 || mq >= 1 || xq >= 1) return;
        const aq = this.parts++,
          Vq = this.rects;
        Vq[4 * aq] = dg(mq), Vq[4 * aq + 1] = dg(xq), Vq[4 * aq + 2] = dg(Aq), Vq[4 * aq + 3] = dg(cq);
        const dq = this.inverse,
          {
            cell: jq,
            dims: Hq,
            lo: oq
          } = qq,
          Pq = cg + aq * xg;
        for (let Qq = 0; Qq < 3; Qq++) this.floats[Pq + 4 * Qq] = dq[Qq] / jq, this.floats[Pq + 4 * Qq + 1] = dq[4 + Qq] / jq, this.floats[Pq + 4 * Qq + 2] = dq[8 + Qq] / jq, this.floats[Pq + 4 * Qq + 3] = (dq[12 + Qq] - oq[Qq]) / jq;
        this.words[Pq + 12] = qq.at, this.floats[Pq + 13] = uq + .001 * (1 + Math.abs(uq)), this.words[Pq + 14] = Hq[0] | Hq[1] << 8 | Hq[2] << 16
      }
      finish() {
        const qq = Og,
          {
            counts: Eq,
            rects: gq,
            words: Yq
          } = this;
        Eq.fill(0);
        let lq = 0,
          Oq = 0;
        for (; Oq < this.parts; Oq++) {
          const Yq = 4 * Oq,
            mq = (gq[Yq + 2] - gq[Yq] + 1) * (gq[Yq + 3] - gq[Yq + 1] + 1);
          if (lq + mq > 65536) break;
          lq += mq;
          for (let lq = gq[Yq + 1]; lq <= gq[Yq + 3]; lq++)
            for (let Oq = gq[Yq]; Oq <= gq[Yq + 2]; Oq++) Eq[lq * qq + Oq]++
        }
        let mq = 0;
        for (let Aq = 0; Aq < 16384; Aq++) Yq[Aq] = mq, mq += Eq[Aq], Eq[Aq] = Yq[Aq];
        Yq[16384] = mq;
        for (let Aq = 0; Aq < Oq; Aq++) {
          const lq = 4 * Aq;
          for (let Oq = gq[lq + 1]; Oq <= gq[lq + 3]; Oq++)
            for (let mq = gq[lq]; mq <= gq[lq + 2]; mq++) Yq[Ag + Eq[Oq * qq + mq]++] = Aq
        }
        const xq = this.floats;
        for (let Aq = 0; Aq < 16384; Aq++) {
          const qq = Ag + Yq[Aq],
            Eq = qq + Math.min(Yq[Aq + 1] - Yq[Aq], 64);
          for (let gq = qq + 1; gq < Eq; gq++) {
            const Eq = Yq[gq],
              lq = xq[81934 + Eq * xg];
            let Oq = gq - 1;
            for (; Oq >= qq && xq[81934 + Yq[Oq] * xg] < lq; Oq--) Yq[Oq + 1] = Yq[Oq];
            Yq[Oq + 1] = Eq
          }
        }
        this.refs = lq
      }
    }

    function dg(qq) {
      return Math.min(127, Math.max(0, Math.floor((.5 * qq + .5) * Og)))
    }

    function jg(qq, Eq, gq, Yq, lq) {
      for (let Oq = 0; Oq < 4; Oq++)
        for (let mq = 0; mq < 4; mq++) lq[4 * Oq + mq] = qq[Eq + 4 * Oq] * gq[Yq + mq] + qq[Eq + 4 * Oq + 1] * gq[Yq + 4 + mq] + qq[Eq + 4 * Oq + 2] * gq[Yq + 8 + mq] + qq[Eq + 4 * Oq + 3] * gq[Yq + 12 + mq]
    }

    function Hg(qq, Eq, gq, Yq, lq) {
      const Oq = qq[0] - Eq,
        mq = qq[1] - gq,
        xq = qq[2] - Yq,
        Aq = qq[3] - Eq,
        cq = qq[4] - gq,
        uq = qq[5] - Yq,
        Bq = qq[6] - Eq,
        Wq = qq[7] - gq,
        Nq = qq[8] - Yq;
      if (Math.min(Oq, Aq, Bq) > lq || Math.max(Oq, Aq, Bq) < -lq) return !1;
      if (Math.min(mq, cq, Wq) > lq || Math.max(mq, cq, Wq) < -lq) return !1;
      if (Math.min(xq, uq, Nq) > lq || Math.max(xq, uq, Nq) < -lq) return !1;
      const aq = Aq - Oq,
        Vq = cq - mq,
        dq = uq - xq,
        jq = Bq - Aq,
        Hq = Wq - cq,
        oq = Nq - uq,
        Pq = Vq * oq - dq * Hq,
        Qq = dq * jq - aq * oq,
        yq = aq * Hq - Vq * jq;
      if (Math.abs(Pq * Oq + Qq * mq + yq * xq) > lq * (Math.abs(Pq) + Math.abs(Qq) + Math.abs(yq))) return !1;
      const tq = [aq, Vq, dq, jq, Hq, oq, Oq - Bq, mq - Wq, xq - Nq];
      for (let rq = 0; rq < 3; rq++) {
        const qq = tq[3 * rq],
          Eq = tq[3 * rq + 1],
          gq = tq[3 * rq + 2];
        for (let Yq = 0; Yq < 3; Yq++) {
          const aq = 0 === Yq ? 0 : 1 === Yq ? gq : -Eq,
            Vq = 0 === Yq ? -gq : 1 === Yq ? 0 : qq,
            dq = 0 === Yq ? Eq : 1 === Yq ? -qq : 0,
            jq = aq * Oq + Vq * mq + dq * xq,
            Hq = aq * Aq + Vq * cq + dq * uq,
            oq = aq * Bq + Vq * Wq + dq * Nq,
            Pq = lq * (Math.abs(aq) + Math.abs(Vq) + Math.abs(dq));
          if (Math.min(jq, Hq, oq) > Pq || Math.max(jq, Hq, oq) < -Pq) return !1
        }
      }
      return !0
    }
    const og = new Float32Array(1);
    new Uint32Array(og.buffer);
    var Pg = gq(38718);

    function Qg(qq) {
      const [Eq, gq, Yq] = Pg.r;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${qq.group}) @binding(${qq.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${Eq-1}, ${gq-1}, ${Yq-1});\n}\n`
    }

    function yg(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [lq, Oq, mq] = ZE, [xq, Aq, cq] = iE, uq = Math.log2(bE), Bq = Yq ? "var<private> bloxdSpCrossed: bool;\n" : "", Wq = Yq ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${qq.group}) @binding(${qq.dW}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${qq.group}) @binding(${qq.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${gq?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Bq}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${IE}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${eE}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${gq?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${DE}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${lq}, ${Oq}, ${mq});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${lq} * (s.y + ${Oq} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${xq}, ${Aq}, ${cq}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${uq}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${SE}u) {\n\t\treturn named && state == ${zE}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${LE}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${kE}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${Eq?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${Eq?`\t\tif (exits && step > 0 && step % ${vg} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${uq}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${ME}u || kind == ${TE}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${zE}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${LE}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Wq}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const tg = {
      group: 0,
      uniform: 0,
      dW: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function rg() {
      const qq = tg;
      return `${Qg(qq)}${yg(qq,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Pg.e}>,\n}\n@group(${qq.group}) @binding(${qq.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${qq.group}) @binding(${qq.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Pg.n})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Pg.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Pg.i}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const vg = 2;
    const hg = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function ng(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Yq = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${Eq.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        lq = "trace" === gq || "lit" === gq,
        Oq = "maskEdge" === gq ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        mq = lq ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${Eq.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${Eq.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===gq?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Oq};\n`;
      return `${Yq}${qq.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${lq?function(){const[qq,Eq,gq]=Pg.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${qq}.0, ${Eq}.0, ${gq}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${mq}}\n`:""}${qq.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${Eq.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${Eq.renderOffset});\n}\n`:""}`
    }
    const bg = "bloxdSpOwnTexture";

    function ig(qq) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${qq.texture}) - 1u)))`
    }
    const Zg = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${AE.f.map((qq=>{let[Eq,gq]=qq;return`\tbloxdSpOut.${Eq} = (bloxdSpWord & ${gq}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function fg(qq) {
      return `bloxdSpFlags(${qq})`
    }
    const Mg = `${hE.g}.eyePosition`;

    function Tg(qq, Eq, gq, Yq, lq) {
      const Oq = qq.indexOf(Eq);
      if (Oq < 0 || qq.indexOf(Eq, Oq + 1) >= 0) throw new Error(`Lite's ${lq} program changed at the shader pack ${Yq} hook: ${Oq<0?"no":"more than one"} anchor (lite/${lq}ShaderPack.ts)`);
      return qq.slice(0, Oq) + gq + qq.slice(Oq + Eq.length)
    }

    function zg(qq) {
      return qq.sunShadow || qq.airShadow
    }

    function Sg(qq, Eq) {
      return Eq && zg(qq)
    }
    const pg = {
      group: hE.c,
      ...hE.n
    };

    function Gg(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!zg(qq)) return "";
      if (Eq) {
        const Eq = pg,
          lq = "trace" === gq || "lit" === gq;
        let Oq = "";
        qq.sunShadow && (Oq = lq ? `${yg(Eq,!0,"lit"===gq)}${Yq=Eq,`@group(${Yq.group}) @binding(${Yq.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Yq.group}) @binding(${Yq.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(qq, Eq, gq) {
          const Yq = `@group(${qq}) @binding(${Eq}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return gq ? `${Yq}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${hg}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((qq=>`\t{\n\t\tlet o = vec2i(${qq});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Yq
        }(Eq.group, hE.r, "maskEdge" === gq));
        const mq = {
          shadowDirection: `${hE.g}.shadowDirection`,
          renderOffset: `${hE.g}.renderOffset`,
          eyePosition: `${hE.g}.eyePosition`
        };
        return `${Qg(Eq)}${Oq}${function(qq){const[Eq,gq,Yq]=Pg.r;return`@group(${qq.group}) @binding(${qq.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${qq.group}) @binding(${qq.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${Eq}.0, ${gq}.0, ${Yq}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(Eq)}${ng(qq,mq,gq)}`
      }
      var Yq;
      return `${qq.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${qq.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Lg(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!Eq) return "";
      const Oq = (mq = "fragmentInputs.vPositionW", xq = qq.sunShadow ? {
        normal: gq,
        flags: Yq
      } : null, `\n\tbloxdSpShadowPosition = ${mq};\n${xq?`\tbloxdSpShadowNormal = normalize(${xq.normal});\n\tbloxdSpShadowEmissive = (${xq.flags} & ${AE.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${xq.flags} & ${AE.h}u) != 0u;\n`:""}`);
      var mq, xq;
      return qq.sunShadow && ("mask" === lq || "maskEdge" === lq) ? `${Oq}${Aq="fragmentInputs.position",cq="maskEdge"===lq,`\n\tbloxdSpShadowPixel = vec2i(${Aq}.xy);\n${cq?`\tbloxdSpShadowZ = ${Aq}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Aq}.z), dpdy(${Aq}.z));\n`:""}`}` : Oq;
      var Aq, cq
    }
    const Jg = "bloxdSpTextureRotation",
      kg = "bloxdSpTextureLayers",
      Rg = `@group(${hE.c}) @binding(${hE.v}) var<storage, read> ${kg}: array<u32>;\n`;

    function Ug(qq) {
      return `\tvertexOutputs.vPackTexture = ${kg}[min(u32(${qq}), arrayLength(&${kg}) - 1u)];\n`
    }

    function Fg(qq) {
      return void 0 !== qq.uv
    }

    function sg(qq) {
      if (!qq) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Fg(qq)) return function(qq) {
        const {
          texture: Eq,
          cells: gq,
          layers: Yq
        } = qq, lq = `textureDimensions(${Eq}, bloxdSpLevel)`, Oq = gq ? `max(vec2u(vec2f(${lq}) / ${gq}), vec2u(1u))` : lq, mq = gq ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Oq};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${gq}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${gq}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${Eq}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${lq} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Oq};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${Eq}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let xq;
        if (gq)
          if (1 === Yq.length) xq = `\treturn bloxdSpOwnTexel(${Yq[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const qq = Yq.length - 1;
            xq = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Yq[qq]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let Eq = qq - 1; Eq >= 0; Eq--) xq += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Yq[Eq]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            xq += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else xq = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${qq.id?`var<private> ${bg}: u32;\n`:""}${mq}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${ig(qq)};\n\treturn ${Oq};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${qq.id?bg:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${ig(qq)};\n${xq}}\n`
      }(qq);
      const Eq = qq,
        gq = qq => {
          const gq = qq > 0 ? `bloxdSpLayer - ${Eq.layers*qq}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${qq}, ${Eq.sampler}, bloxdSpTurned, ${gq}, round(bloxdSpMipLevel));`
        };
      let Yq = "";
      for (let Oq = 0; Oq < Eq.count - 1; Oq++) Yq += `\tif (bloxdSpLayer < ${Eq.layers*(Oq+1)}u) {\n\t\t${gq(Oq)}\n\t}\n`;
      const lq = Eq.frame ? `${Eq.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Jg}: u32;\n${Rg}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Jg} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Jg} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Jg} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${lq}${Yq}\t${gq(Eq.count-1)}\n}\n`
    }

    function Xg(qq, Eq, gq) {
      return !!qq.surface && "bloxdDefaultSurface" !== qq.surface && function(qq, Eq) {
        return "liquid" === Eq || !qq
      }(Eq, gq)
    }

    function wg(qq, Eq) {
      return qq.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${Eq.vertexLocalPosition}, ${fg(Eq.vertexFlags)});\n\t\tlet bloxdSpVertex = ${qq.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Kg(qq, Eq, gq, Yq, lq) {
      if (!qq.surface) return "";
      const Oq = (qq, Eq) => `\n\tlet bloxdSpTexelUV = ${qq};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${Eq}) - 1u));`;
      let mq = "",
        xq = "0u, 0u, vec2f(0.0), 0.0";
      const Aq = Yq && Fg(Yq) ? Yq : null,
        cq = Yq && !Fg(Yq) ? Yq : null;
      if (Aq) {
        mq = `${Aq.id?`\n\tlet bloxdSpTexture = ${Aq.id};\n\t${bg} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Aq.uv};${Oq(function(qq,Eq){var gq;return`${null!==(gq=qq.levelUv)&&void 0!==gq?gq:qq.cells?`${Eq} / ${qq.cells}`:Eq} * vec2f(textureDimensions(${qq.texture}))`}(Aq,"bloxdSpUv"),Aq.texture)}`, xq = (Aq.id ? `${bg}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else cq && (mq = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Jg} = bloxdSpTexture >> 16u;${Oq(`fragmentInputs.vMainUV1 * ${(0,tE.ob)(cq.width)}`,"textureAtlas0")}`, xq = `bloxdSpTexture & 0xffffu, ${Jg}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const uq = lq.overlayColour,
        Bq = uq ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Wq = "bloxdDefaultSurface" !== qq.surface || uq ? `\n\tbaseColor = vec4f(${Bq}, baseColor.a);` : "",
        Nq = Xg(qq, Eq, gq) ? `\n\t${lq.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${mq}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${lq.alpha}, ${lq.enchantTier}, ${lq.enchantColour}, ${lq.enchantSpeed}, ${null!==uq&&void 0!==uq?uq:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${lq.normal}, ${lq.localPosition}, ${fg(lq.flags)}, ${xq});\n\tlet bloxdSpSurface = ${qq.surface}(bloxdSpSurfaceIn);${Wq}${Nq}\n`
    }
    const Cg = "bloxdSpLightIn";

    function Ig(qq, Eq, gq, Yq) {
      if (!qq.light) return "";
      const lq = Eq ? `${tE.k}.rgb, ${tE.k}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${tE.g}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Oq,
          diffuse: mq,
          emissive: xq,
          ambient: Aq,
          fogColour: cq,
          fogAlpha: uq,
          normal: Bq
        } = Yq;
      return `\tvar ${Cg} = BloxdLightIn(vec3f(0.0), ${gq?Oq:"0.0"}, ${mq}, ${xq}, ${Aq}, ${lq}, ${cq}, ${uq}, fragmentInputs.vPositionW, ${Bq}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Cg}.litColour = bloxdLitColour(bloxdSpSurface, ${Cg});\n`
    }

    function eg(qq) {
      return qq.light ? `\n\t{\n\t\tlet bloxdSpLight = ${qq.light}(bloxdSpSurface, ${Cg});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Dg = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      qY = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      EY = "\treturn color;\n}",
      gY = {
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
    const YY = Object.freeze({});

    function lY(qq) {
      var Eq;
      return !(null === (Eq = (0, nE.i)(qq)) || void 0 === Eq || !Eq.sceneDepth)
    }

    function OY(qq) {
      const Eq = (0, nE.i)(qq);
      return !!Eq && Xg(Eq.hooks, Eq.strict, Eq.program)
    }

    function mY(qq, Eq, gq, Yq) {
      return Tg(qq, Eq, gq, Yq, "terrain")
    }

    function xY(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Oq = function(qq) {
          return (0, nE.e)(qq.packVariant, qq.liquid ? "liquid" : "terrain")
        }(qq),
        {
          hooks: mq
        } = Oq,
        xq = Sg(Oq, Yq),
        Aq = "edge" === lq ? "maskEdge" : "plain" === lq ? "mask" : "trace",
        cq = wg(mq, gY);
      cq && (Eq = mY(Eq, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${cq}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const uq = "atlas" === qq.texture ? {
          count: qq.atlasCount,
          layers: qq.atlasLayers,
          width: qq.N_,
          sampler: "atlasSampler",
          frame: qq.animated ? gq : null
        } : null,
        Bq = `${Oq.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Lg(Oq,xq,gY.normal,gY.flags,Aq)}${Kg(mq,Oq.strict,Oq.program,uq,gY)}`;
      Bq && (Eq = mY(Eq, Dg, `${Dg.slice(0,-1)}${Bq}`, "surface"));
      const Wq = eg(mq);
      return Wq && (Eq = mY(Eq, qY, `${Ig(mq,qq.lighting,qq.dirLightCount>0,gY)}${qY}`, "light input"), Eq = mY(Eq, EY, `${Wq.slice(1)}${EY}`, "light")), `${(0,hE.B)()}${Oq.sceneDepth?`@group(${hE.c}) @binding(${hE.l}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Mg};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Gg(Oq,xq,Aq)}${sg(uq)}${Zg}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Oq.code}${Eq}`
    }
    const AY = yq.d.WGSL;

    function cY(qq) {
      return void 0 !== qq.packVariant
    }
    const uY = {
        Vlq: 0,
        dlq: 4,
        jlq: 8,
        Hlq: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      BY = uY.aoLevels + 4,
      WY = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      NY = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      aY = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      VY = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      dY = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      jY = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      HY = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      oY = 0,
      PY = 3,
      QY = 4,
      yY = 5,
      tY = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${rE.c}, ${rE.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${rE.c}, ${rE.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      rY = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((qq=>vE.e>>qq&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const vY = {
      SB: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: qq => `animDataPerTex[${qq}]`
    };

    function hY(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vY;
      return `\n\tlet atlasIdxIn = ${qq};\n\tlet animTick = ${gq.SB};\n\tlet animTickStride = ${gq.stride};\n\tlet numAnimTextures = ${gq.count};\n\t${(0,tq.f)(yq.d.WGSL,gq.perTexture)}\n\t${Eq}animLayer;\n`
    }

    function nY(qq) {
      const Eq = (Eq, gq) => {
        const Yq = Eq > 0 ? `fragmentInputs.texAtlasIndex - ${qq.atlasLayers.toFixed(1)} * ${Eq.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${gq?"textureSampleLevel":"textureSample"}(textureAtlas${Eq}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Yq}))${gq?", atlasLod":""})`
      };
      if (1 === qq.atlasCount) return `baseColor = ${Eq(0,!1)};`;
      let gq = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,tE.ob)(qq.N_)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Yq = 0; Yq < qq.atlasCount; Yq++) {
        const lq = qq.atlasLayers * (Yq + 1) - .5;
        gq += `${Yq>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,tE.ob)(lq)}) {\n\t\tbaseColor = ${Eq(Yq,!0)};\n\t}`
      }
      return gq
    }

    function bY(qq) {
      return `terrain-${qq.texture}${"atlas"===qq.texture?qq.atlasCount:""}${qq.animated?"-anim":""}${qq.alphaTest?"-test":""}${qq.lighting?"-lit":""}-dir${qq.dirLightCount}${qq.packed?"-packed":""}${cY(qq)?`-sp${qq.packVariant}`:""}${qq.liquid?"-liquid":""}${qq.resting?"-rest":""}`
    }

    function iY(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Yq = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const gq = "none" !== qq.texture,
          Yq = "atlas" === qq.texture,
          lq = qq.dirLightCount > 0,
          Oq = cY(qq);
        if (qq.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${qq.dirLightCount}`);
        let mq = 1,
          xq = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Yq) {
          qq.animated && (xq += `@group(2) @binding(${mq++}) var<storage, read> animDataPerTex: array<f32>;\n`), xq += `@group(2) @binding(${mq++}) var atlasSampler: sampler;\n`;
          for (let Eq = 0; Eq < qq.atlasCount; Eq++) xq += `@group(2) @binding(${mq++}) var textureAtlas${Eq}: texture_2d_array<f32>;\n`
        } else "single" === qq.texture && (xq += `@group(2) @binding(${mq++}) var diffuseSamplerSampler: sampler;\n`, xq += `@group(2) @binding(${mq++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Aq = function(qq) {
            const Eq = HY,
              gq = "none" !== qq.texture,
              Yq = "atlas" === qq.texture,
              lq = cY(qq);
            return qq.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${gq?"uv: vec2f,":""}\n\t${Yq?"texAtlasIndices: f32,":""}\n\t${qq.lighting?"aPackedLightLevels: f32,":""}\n\t${lq?"blockFlagWords: vec2u,":""}\n}\n${tY}\n${rY}\n${"single"===qq.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${gq?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===qq.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Yq?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${qq.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${lq?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${Eq.position}) position: vec3f,\n\t@location(${Eq.normal}) normal: vec4f,\n\t@location(${Eq.color}) color: vec4f,\n\t${gq?`@location(${Eq.uv}) uv: vec2f,`:""}\n\t${qq.lighting?`@location(${Eq.packedLight}) aPackedLightLevels: f32,`:""}\n\t${lq?`@location(${Eq.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(qq),
          cq = `\n${VY}\n${NY}\n${aY}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${xq}\n${Kq}\n${Aq.declarations}\nstruct Varyings {\n\t${"none"===Eq?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${qq.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${lq?"@location(5) vTerrainLambert: f32,":""}\n\t${gq?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Yq?"@location(7) texAtlasIndex: f32,":""}\n\t${qq.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Oq?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Oq&&Yq?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${qq.resting?"":(0,tE.v)(AY)}\n${jY}\n\n@vertex\nfn mainVertex(${Aq.parameter}) -> Varyings {\n\t${Aq.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Oq?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${AE.c.placed}u;`:""}\n\t${Oq&&Yq?Ug("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${qq.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${gq?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Yq?function(qq){return qq?hY("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(qq.animated):""}\n\t${"single"===qq.texture&&qq.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,tE._)(AY)}\n\t${(0,tE.F)(AY,qq.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${qq.resting?"":dY}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Yq?nY(qq):""}\n\t${"single"===qq.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${gq?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${qq.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${lq?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${wq}));\n\t${cY(qq)?(0,tE.ib)(yq.d.WGSL):(0,tE.R)(AY)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          uq = new Set;
        qq.lighting && uq.add("BLOXD_LIGHTING");
        lq && uq.add("BLOXD_TERRAIN_DIRECTIONAL");
        return PE(cq, new Map([...uq].map((qq => [qq, !0]))))
      }(qq, gq);
      if (!cY(qq)) return Yq;
      const lq = xY(qq, Yq, hY, Eq, gq);
      return "none" === gq ? lq : `${lq}${function(qq){const Eq="none"!==qq.texture&&qq.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${qq.resting?"":dY}\n\t${qq.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Eq&&"atlas"===qq.texture?nY(qq):""}\n\t${Eq&&"single"===qq.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Eq?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${AE.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(qq)}`
    }
    const ZY = new Map([
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

    function fY(qq, Eq) {
      const gq = new Map;
      let Yq = 0;
      const lq = [],
        Oq = [],
        mq = [];
      for (const cq of Eq) {
        var xq, Aq;
        const Eq = null !== (xq = cq.type.trim().split(/\s+/).pop()) && void 0 !== xq ? xq : cq.type,
          uq = ZY.get(Eq);
        if (!uq) throw new Error(`Lite: no uniform layout for ${cq.name}: ${cq.type}`);
        const Bq = null !== (Aq = cq.arraySize) && void 0 !== Aq ? Aq : 0,
          Wq = Bq ? 4 : uq.align;
        Yq = Math.ceil(Yq / Wq) * Wq;
        const Nq = Bq ? 4 * Math.ceil(uq.floats / 4) : uq.floats;
        if (gq.set(cq.name, {
            offset: Yq,
            floats: uq.floats,
            arraySize: Bq,
            stride: Nq
          }), Bq && uq.floats <= 2) {
          const Eq = `${qq}_${mq.length}_strided`;
          Oq.push(`struct ${Eq} {\n\t@size(16) el: ${uq.wgsl},\n}`), mq.push(cq.name), lq.push(`\t@align(16) ${cq.name}: array<${Eq}, ${Bq}>,`)
        } else Bq ? lq.push(`\t@align(16) ${cq.name}: array<${uq.wgsl}, ${Bq}>,`) : lq.push(`\t${cq.name}: ${uq.wgsl},`);
        Yq += Bq ? Nq * Bq : uq.floats
      }
      return {
        slots: gq,
        floats: Math.max(4, 4 * Math.ceil(Yq / 4)),
        wgsl: `${Oq.join("\n")}\nstruct ${qq} {\n${lq.join("\n")}\n}\n`,
        stridedArrays: mq
      }
    }
    const MY = [{
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
      TY = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      zY = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function SY(qq, Eq) {
      return `#if defined(${qq}) && ${qq}DIRECTUV == 0\nvarying v${Eq}UV: vec2f;\n#endif`
    }

    function pY(qq, Eq, gq) {
      return `#if defined(${qq}) && ${qq}DIRECTUV == 0\nif (uniforms.v${Eq}Infos.x==0.)\n{vertexOutputs.v${Eq}UV= (uniforms.${gq}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${Eq}UV= (uniforms.${gq}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function GY(qq, Eq, gq) {
      return `#ifdef ${qq}\n#if ${qq}DIRECTUV == 1\n#define v${Eq}UV vMainUV1\n#elif ${qq}DIRECTUV == 2\n#define v${Eq}UV vMainUV2\n#else\nvarying v${Eq}UV: vec2f;\n#endif\nvar ${gq}SamplerSampler: sampler;\nvar ${gq}Sampler: texture_2d<f32>;\n#endif`
    }
    const LY = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      JY = 256,
      kY = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      RY = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      UY = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      FY = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      sY = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      XY = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      wY = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      KY = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${RY}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${SY("OPACITY","Opacity")}\n${SY("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${wY}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${UY}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${pY("OPACITY","Opacity","opacity")}\n${pY("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${FY}\n#define CUSTOM_VERTEX_MAIN_END\n${sY}\n}\n`;
    const CY = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${GY("OPACITY","Opacity","opacity")}\n${GY("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${wY}\n${XY}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((qq,Eq)=>function(qq){const Eq=`
    frame.lights[LITE_LIGHT$ {
        qq
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      qq
    }\
    nvar diffuse$ {
      qq
    }: vec4f = $ {
      Eq
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      qq
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      Eq
    }.vLightData, diffuse$ {
      qq
    }.rgb, $ {
      Eq
    }.vLightSpecular.rgb, diffuse$ {
      qq
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(Eq))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, IY = /^([gimus]+)!/, eY = new Set;

    function DY(qq) {
      eY.has(qq) || (eY.add(qq), console.warn(`Lite: no place for plugin code at ${qq} in the standard shader: it is left out`))
    }

    function ql(qq, Eq) {
      let gq = qq;
      const Yq = new Map;
      for (const [Oq, mq] of Eq) {
        var lq;
        Yq.set(Oq, `${null!==(lq=Yq.get(Oq))&&void 0!==lq?lq:""}${mq}\n`)
      }
      for (const [Oq, mq] of Yq) {
        if (!Oq.startsWith("!")) {
          const qq = `#define ${Oq}`;
          if (!gq.includes(qq)) {
            DY(Oq);
            continue
          }
          gq = gq.replace(qq, (() => `\n${mq}\n${qq}`));
          continue
        }
        let qq = Oq.substring(1),
          Eq = "g";
        if (qq.startsWith("!")) Eq = "", qq = qq.substring(1);
        else {
          const gq = IY.exec(qq);
          gq && (Eq = gq[1], qq = qq.substring(Eq.length + 1))
        }
        const Yq = new RegExp(qq, Eq.includes("g") ? Eq : `${Eq}g`);
        let lq = Yq.exec(gq);
        for (lq || DY(Oq); lq;) {
          const qq = lq,
            Eq = mq.replace(/\$(\d+)/g, ((Eq, gq) => Number(gq) < qq.length ? qq[Number(gq)] : ""));
          gq = gq.substring(0, qq.index) + Eq + gq.substring(qq.index + qq[0].length), Yq.lastIndex = qq.index + Eq.length, lq = Yq.exec(gq)
        }
      }
      return gq
    }
    const El = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      gl = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      Yl = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function ll(qq) {
      const Eq = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let gq = qq.replace(El, ((qq, gq, Yq, lq, Oq, mq) => ("attribute" === gq ? Eq.attributes.push({
        name: Oq,
        type: mq
      }) : void 0 === gq ? Eq.varyings.push({
        name: Oq,
        type: mq,
        interpolation: ml(mq, Yq, lq)
      }) : Eq.uniforms.push({
        name: Oq,
        type: Ol(mq)
      }), "")));
      return gq = gq.replace(gl, ((qq, gq) => (Eq.samplers.add(gq), ""))), gq = gq.replace(Yl, ((qq, gq, Yq) => (Eq.textures.push({
        name: gq,
        type: Yq
      }), ""))), Eq.body = gq, Eq
    }

    function Ol(qq) {
      const Eq = qq.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        gq = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(Eq);
      if (!gq) throw new Error(`Lite: unsupported uniform type ${qq}`);
      return gq
    }

    function ml(qq, Eq, gq) {
      return void 0 === Eq && void 0 === gq ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(qq.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === Eq ? "@interpolate(flat) " : `@interpolate(${null!==Eq&&void 0!==Eq?Eq:"perspective"}, ${null!==gq&&void 0!==gq?gq:"center"}) `
    }

    function xl(qq) {
      return Bl({
        defines: qq.defines,
        vertex: ql(KY, qq.vertexCode),
        fragment: ql(CY, qq.fragmentCode),
        members: [...MY, ...qq.defines.has("OPACITY") ? TY : [], ...qq.defines.has("EMISSIVE") ? zY : [], ...qq.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function Al(qq) {
      const Eq = qq.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (Eq === qq) throw new Error("Lite: fragment main has no return");
      return Eq
    }
    const cl = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${RY}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${UY}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${FY}\n${sY}\n}\n`,
      ul = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${XY}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Bl(qq) {
      const Eq = qq.defines,
        gq = ll(PE(qq.vertex, Eq)),
        Yq = ll(PE(qq.fragment, Eq)),
        lq = new Map;
      for (const oq of [...gq.varyings, ...Yq.varyings]) lq.has(oq.name) || lq.set(oq.name, oq);
      const Oq = [...lq.values()].map(((qq, Eq) => `\t@location(${Eq}) ${qq.interpolation}${qq.name}: ${qq.type},`)),
        mq = [...qq.members];
      for (const oq of [...gq.uniforms, ...Yq.uniforms]) mq.some((qq => qq.name === oq.name)) || mq.push(oq);
      const xq = fY(qq.structName, mq),
        Aq = [],
        cq = [];
      let uq = 1;
      const Bq = new Set;
      for (const oq of [...gq.textures, ...Yq.textures]) {
        if (Bq.has(oq.name)) continue;
        Bq.add(oq.name);
        const qq = `${oq.name}Sampler`,
          Eq = uq++,
          gq = uq++,
          Yq = oq.type.startsWith("texture_2d_array") ? "2d-array" : oq.type.startsWith("texture_cube") ? "cube" : "2d";
        Aq.push({
          name: oq.name,
          binding: Eq,
          samplerBinding: gq,
          dimension: Yq
        }), cq.push(`@group(2) @binding(${Eq}) var ${oq.name}: ${oq.type};`), cq.push(`@group(2) @binding(${gq}) var ${qq}: sampler;`)
      }
      for (const oq of [...gq.samplers, ...Yq.samplers])
        if (!Bq.has(oq.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${oq} has no texture`);
      const Wq = [VY, kY, xq.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${qq.structName};`, ...cq].join("\n"),
        Nq = gq.attributes,
        aq = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...gq.attributes.map(((qq, Eq) => `\t@location(${Eq}) ${qq.name}: ${qq.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Vq = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Oq, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        dq = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Yq.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Oq, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", Kq, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${wq}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        jq = qq => {
          for (const Eq of xq.stridedArrays) qq = qq.replace(new RegExp(`\\b${Eq}\\s*\\[(.*?)\\]`, "g"), `${Eq}[$1].el`);
          return qq
        };
      return {
        vertex: `${Wq}\n${aq}\n${Vq}\n${jq(gq.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Wq}\n${dq}\n${Al((Hq=jq(Yq.body),Hq.includes("fragmentInputs.position")?Hq.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Hq))}`,
        attributes: Nq,
        material: xq,
        textures: Aq
      };
      var Hq
    }
    const Wl = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      Nl = qq => ({
        name: qq,
        type: "vec3"
      }),
      al = qq => ({
        name: qq,
        type: "float"
      }),
      Vl = fY("EarthSkyUniforms", [Nl("viewFrom"), al("exposureScale"), Nl("zenithOffset"), al("fogOn"), Nl("up"), al("ditherOn"), Nl("sun"), al("turbidity"), Nl("tint"), al("rayleigh"), Nl("sunDir"), al("mieStrength"), Nl("inScatterR"), al("mieFocus"), Nl("inScatterM"), al("sunE"), Nl("extinctionBeta"), al("sunsetMix"), al("mieScale"), al("mieBase"), al("mieSlope"), al("sunDiscE"), al("exposure")]),
      dl = `${VY}\n${kY}\n${Vl.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      jl = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Wl.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Hl = `\n${Kq}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(dE).map((qq=>{let[Eq,gq]=qq;return`const TONE_${Eq}: f32 = ${gq};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${jE};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${wq}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var ol = gq(37131);
    const Pl = new ol.Na,
      Ql = new ol.Na,
      yl = new ol.Quaternion,
      tl = new Float64Array(3),
      rl = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      vl = new Float64Array(16);

    function hl(qq, Eq, gq) {
      const Yq = gq.worldMatrix;
      var lq;
      qq.updateFloat3("viewFrom", Yq[12], Yq[13], Yq[14]), qq.updateFloatsFrom("zenithOffset", Eq.cameraOffset, 0, 3), qq.updateFloatsFrom("up", Eq.up, 0, 3), Eq.luminance > 0 && (qq.updateFloat("exposure", Eq.luminance), qq.updateFloat("exposureScale", (lq = Eq.luminance, Math.log2(2 / Math.pow(lq, 4))))), qq.updateFloat("turbidity", Eq.turbidity), qq.updateFloat("rayleigh", Eq.rayleigh), qq.updateFloat("mieStrength", Eq.mieCoefficient), qq.updateFloat("mieFocus", Eq.mieDirectionalG), qq.updateFloatsFrom("tint", Eq.tint, 0, 3), qq.updateFloat("fogOn", Eq.fog && gq.fogEnabled && 0 !== gq.fogMode ? 1 : 0), qq.updateFloat("ditherOn", Eq.dithering ? 1 : 0);
      const Oq = Eq.sunPosition;
      if (Pl.set(Oq[0], Oq[1], Oq[2]), !Eq.useSunPosition) {
        const qq = Math.PI * (Eq.inclination - .5),
          gq = 2 * Math.PI * (Eq.azimuth - .5);
        Pl.set(Eq.distance * Math.cos(gq) * Math.cos(qq), Eq.distance * Math.sin(-qq), Eq.distance * Math.sin(gq) * Math.cos(qq)), ol.Quaternion.FromUnitVectorsToRef(ol.Na.UpReadOnly, Ql.set(Eq.up[0], Eq.up[1], Eq.up[2]), yl), Pl.rotateByQuaternionToRef(yl, Pl)
      }
      qq.updateVector3("sun", Pl), tl[0] = Pl.x, tl[1] = Pl.y, tl[2] = Pl.z;
      const mq = VE(Eq, tl, rl);
      qq.updateFloatsFrom("sunDir", mq.sunDir, 0, 3), qq.updateFloat("sunE", mq.sunE), qq.updateFloatsFrom("inScatterR", mq.inScatterR, 0, 3), qq.updateFloatsFrom("inScatterM", mq.inScatterM, 0, 3), qq.updateFloatsFrom("extinctionBeta", mq.extinctionBeta, 0, 3), qq.updateFloat("sunsetMix", mq.sunsetMix), qq.updateFloat("sunDiscE", mq.sunDiscE), qq.updateFloat("mieScale", mq.mieScale), qq.updateFloat("mieBase", mq.mieBase), qq.updateFloat("mieSlope", mq.mieSlope)
    }

    function nl(qq, Eq) {
      const gq = vl;
      gq[0] = Eq.far, gq[5] = Eq.far, gq[10] = Eq.far, gq[15] = 1;
      const Yq = qq.infiniteDistance;
      for (let lq = 0; lq < 3; lq++) gq[12 + lq] = qq.position[lq] + (Yq ? Eq.worldMatrix[12 + lq] : 0);
      return vl
    }
    var bl = gq(38684);

    function il(qq) {
      return Math.max(4, 4 * Math.ceil(qq / 4))
    }

    function Zl(qq, Eq, gq, Yq) {
      const lq = qq.createBuffer({
        label: Yq,
        size: il(Eq.byteLength),
        usage: gq,
        mappedAtCreation: !0
      });
      return new Uint8Array(lq.getMappedRange(), 0, Eq.byteLength).set(new Uint8Array(Eq.buffer, Eq.byteOffset, Eq.byteLength)), lq.unmap(), lq
    }

    function fl(qq, Eq) {
      return Math.floor(Math.log2(Math.max(qq, Eq))) + 1
    }

    function Ml(qq, Eq, gq, Yq, lq, Oq) {
      const mq = qq.createTexture({
          label: Oq,
          size: {
            width: gq,
            height: Yq,
            depthOrArrayLayers: lq
          },
          format: "rgba8unorm",
          mipLevelCount: fl(gq, Yq),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        xq = (Eq, gq, Yq, Oq) => {
          qq.queue.writeTexture({
            texture: mq,
            mipLevel: gq
          }, Eq, {
            bytesPerRow: 4 * Yq,
            rowsPerImage: Oq
          }, {
            width: Yq,
            height: Oq,
            depthOrArrayLayers: lq
          })
        };
      xq(Eq, 0, gq, Yq);
      let Aq = 1;
      for (const cq of function*(qq, Eq, gq, Yq) {
          let lq = qq,
            Oq = Eq,
            mq = gq;
          for (; Oq > 1 || mq > 1;) {
            const qq = Math.max(1, Oq >> 1),
              Eq = Math.max(1, mq >> 1),
              gq = new Uint8Array(qq * Eq * Yq * 4),
              xq = 4 * Oq;
            let Aq = 0;
            for (let cq = 0; cq < Yq; cq++) {
              const Yq = cq * xq * mq;
              for (let cq = 0; cq < Eq; cq++) {
                const Eq = Yq + Math.min(2 * cq, mq - 1) * xq,
                  uq = Yq + Math.min(2 * cq + 1, mq - 1) * xq;
                for (let Yq = 0; Yq < qq; Yq++) {
                  const qq = 4 * Math.min(2 * Yq, Oq - 1),
                    mq = 4 * Math.min(2 * Yq + 1, Oq - 1);
                  for (let Yq = 0; Yq < 4; Yq++) gq[Aq++] = lq[Eq + qq + Yq] + lq[Eq + mq + Yq] + lq[uq + qq + Yq] + lq[uq + mq + Yq] + 2 >> 2
                }
              }
            }
            yield {
              data: gq,
              width: qq,
              height: Eq
            }, lq = gq, Oq = qq, mq = Eq
          }
        }(Eq, gq, Yq, lq)) xq(cq.data, Aq++, cq.width, cq.height);
      return mq
    }
    const Tl = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function zl(qq) {
      if (qq.startsWith("data:")) {
        const Eq = qq.search(/[;,]/);
        return `data:${Eq>5?qq.slice(5,Eq):""} URL of ${qq.length} characters`
      }
      return qq.length > 80 ? `${qq.slice(0,80)}...` : qq
    }
    async function Sl(qq) {
      const Eq = await fetch(qq);
      if (!Eq.ok) throw new Error(`${zl(qq)}: ${Eq.status} ${Eq.statusText}`);
      return createImageBitmap(await Eq.blob(), Tl)
    }
    async function pl(qq) {
      const Eq = await Sl(qq),
        gq = new OffscreenCanvas(Eq.width, Eq.height),
        Yq = gq.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Yq) throw new Error("No 2D context to decode an image");
      Yq.drawImage(Eq, 0, 0);
      const {
        data: lq
      } = Yq.getImageData(0, 0, Eq.width, Eq.height);
      return Eq.close(), {
        pixels: new Uint8Array(lq.buffer, lq.byteOffset, lq.byteLength),
        width: gq.width,
        height: gq.height
      }
    }
    const Gl = new WeakMap;

    function Ll(qq, Eq, gq, Yq) {
      var lq;
      const Oq = null !== (lq = Gl.get(qq)) && void 0 !== lq ? lq : new Map;
      Gl.set(qq, Oq);
      let mq = Oq.get(Eq);
      return mq || (mq = (async lq => {
        const Oq = null !== (lq = function(qq, Eq) {
          const gq = qq ? new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength) : null;
          return null !== gq && void 0 !== gq && gq.byteLength && Eq && gq.byteLength % (Eq * Eq * 4) === 0 ? {
            pixels: gq,
            layerWidth: Eq,
            layers: gq.byteLength / (Eq * Eq * 4)
          } : null
        }(gq, Yq)) && void 0 !== lq ? lq : await async function(qq) {
          const {
            pixels: Eq,
            width: gq
          } = await pl(qq);
          return {
            pixels: Eq,
            layerWidth: gq,
            layers: Eq.byteLength / (gq * gq * 4)
          }
        }(Eq), {
          layerWidth: mq,
          layers: xq
        } = Oq;
        return {
          texture: Ml(qq, Oq.pixels, mq, mq, xq, `atlas-${Eq}`),
          layerWidth: mq,
          layers: xq
        }
      })(), Oq.set(Eq, mq), mq.catch((() => {
        Oq.delete(Eq)
      }))), mq
    }
    const Jl = new Map([
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
      kl = new Map([
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

    function Rl(qq) {
      for (const Eq of (0, bl.l)(qq))
        if (!kl.has((0, bl.i)(Eq))) return !1;
      return !0
    }

    function Ul(qq) {
      const Eq = kl.get(qq);
      if (!Eq) return null;
      const [gq, Yq, lq] = Eq;
      return {
        srcFactor: Jl.get(gq),
        dstFactor: Jl.get(Yq),
        operation: lq
      }
    }
    let Fl = null;

    function sl(qq) {
      Fl = qq
    }

    function Xl(qq, Eq, gq) {
      var Yq;
      null === (Yq = Fl) || void 0 === Yq || Yq(qq, Eq, gq, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class wl {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(qq, Eq, gq, Yq, lq) {
        gq !== this.pipeline && (qq.setPipeline(gq), this.pipeline = gq), qq.setBindGroup(1, Yq, [lq]);
        const Oq = Eq.material.bindGroup;
        Oq !== this.materialGroup && (qq.setBindGroup(2, Oq), this.materialGroup = Oq);
        const mq = Eq.program.packGroup;
        mq && mq !== this.packGroup && (qq.setBindGroup(hE.c, mq), this.packGroup = mq);
        const {
          vertexBuffers: xq,
          vertexOffsets: Aq
        } = this;
        for (let cq = 0; cq < Eq.vertexBuffers.length; cq++) xq[cq] === Eq.vertexBuffers[cq] && Aq[cq] === Eq.vertexOffsets[cq] || (qq.setVertexBuffer(cq, Eq.vertexBuffers[cq], Eq.vertexOffsets[cq]), xq[cq] = Eq.vertexBuffers[cq], Aq[cq] = Eq.vertexOffsets[cq]);
        Eq.indexBuffer && Eq.indexBuffer !== this.indexBuffer && (qq.setIndexBuffer(Eq.indexBuffer, Eq.indexFormat), this.indexBuffer = Eq.indexBuffer)
      }
    }
    class Kl {
      constructor(qq, Eq, gq, Yq) {
        this.modelMeshes = qq, this.W4 = Eq, this.maker = gq, this.warnOnce = Yq, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(qq) {
        this.collectGroup(qq, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(qq, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(qq, 1, this.frontDraws, this.frontDraws, !0);
        for (const Eq of this.modelMeshes.groupIds())(Eq < -1 || Eq > 1) && this.warnOnce(`group:${Eq}`, `rendering group ${Eq} is not drawn`);
        for (const Eq of this.W4.groupIds())(Eq < -1 || Eq > 1) && this.warnOnce(`group:${Eq}`, `rendering group ${Eq} is not drawn`);
        this.opaqueDraws.sort(Cl), this.transparentDraws.sort(Il)
      }
      collectGroup(qq, Eq, gq, Yq, lq) {
        const Oq = this.modelMeshes.group(Eq),
          mq = this.W4.group(Eq),
          xq = 0 === Eq ? null === mq || void 0 === mq ? void 0 : mq.opaque : void 0;
        this.collectList(qq, null === Oq || void 0 === Oq ? void 0 : Oq.opaque, xq || null === mq || void 0 === mq ? void 0 : mq.opaque, Eq, !1, gq, lq), xq && (this.W4.drawn += this.maker.bundleDraws(qq, xq, Eq)), this.collectList(qq, null === Oq || void 0 === Oq ? void 0 : Oq.alphaTest, void 0, Eq, !1, gq, lq), this.collectList(qq, null === Oq || void 0 === Oq ? void 0 : Oq.transparent, null === mq || void 0 === mq ? void 0 : mq.transparent, Eq, !0, Yq, lq)
      }
      collectList(qq, Eq, gq, Yq, lq, Oq, mq) {
        var xq;
        const Aq = Oq.length;
        Eq && this.maker.pushDraws(qq, Eq.units, Eq.units.length, Yq, lq, Oq, Eq.rows), gq && (this.W4.drawn += this.maker.pushDraws(qq, gq, gq.length, Yq, lq, Oq));
        const cq = lq ? null === (xq = this.modelMeshes.group(Yq)) || void 0 === xq ? void 0 : xq.text : void 0;
        cq && this.maker.pushDraws(qq, cq.units, cq.units.length, Yq, !0, Oq, cq.rows), mq && el(Oq, Aq)
      }
    }

    function Cl(qq, Eq) {
      return qq.program.id - Eq.program.id || qq.material.owner.uniqueId - Eq.material.owner.uniqueId
    }

    function Il(qq, Eq) {
      return qq.material.owner.uniqueId - Eq.material.owner.uniqueId
    }

    function el(qq, Eq) {
      for (let gq = Eq + 1; gq < qq.length; gq++) {
        const Yq = qq[gq];
        let lq = gq - 1;
        for (; lq >= Eq && Il(qq[lq], Yq) > 0; lq--) qq[lq + 1] = qq[lq];
        qq[lq + 1] = Yq
      }
    }
    const Dl = {};

    function qO(qq) {
      return qq.hasThinInstances ? "thin" : qq.olq || qq._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function EO(qq, Eq, gq) {
      return qq ? (gq._needUVs = !0, qq.optimizeUVAllocation && (0, nq.A)(qq.matrix) ? (gq[`${Eq}DIRECTUV`] = qq.uvSet + 1, gq[`MAINUV${qq.uvSet+1}`] = !0) : gq[`${Eq}DIRECTUV`] = 0, !0) : (gq[`${Eq}DIRECTUV`] = 0, !1)
    }

    function gO(qq) {
      const Eq = new Map;
      for (const gq in qq) {
        if (95 === gq.charCodeAt(0)) continue;
        const Yq = qq[gq],
          lq = typeof Yq;
        "number" === lq || "string" === lq ? Eq.set(gq, String(Yq)) : Yq && "function" !== lq && Eq.set(gq, !0)
      }
      return Eq
    }

    function YO(qq) {
      const Eq = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: gq
        }
        of qq.features)
        for (const qq in gq) Eq[qq] = gq[qq];
      return Eq
    }

    function lO(qq) {
      const Eq = qq.parts.geometry;
      return null !== Eq && void 0 !== Eq && Eq.live ? Eq : null
    }

    function OO(qq) {
      var Eq;
      return null !== (Eq = lO(qq)) && void 0 !== Eq ? Eq : Dl
    }
    class mO {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = qq, this.warnOnce = Eq, this.programWithModel = gq, this.packFailed = Yq, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(qq, Eq, gq, Yq, lq) {
        const Oq = Eq.owner;
        let mq = this.drawStates.get(Eq);
        if (!mq) {
          const qq = Eq.parts.materials[Eq.range];
          if (!qq) return this.warnOnce("model", `${gq.name} on ${Oq.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          mq = {
            defines: YO(qq),
            model: qq,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: lq,
            groupId: Yq,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(Eq, mq)
        }
        if (this.programCurrent(mq, Eq, lq, Yq)) return mq.program;
        const {
          model: xq
        } = mq, Aq = OO(Eq), cq = this.instanceLayout(Oq, lq), uq = this.definesBits(Oq);
        if (!this.prepareModelDefines(qq, Oq, xq, mq.defines, Yq, lq)) return null;
        mq.instancing = lq, mq.groupId = Yq, mq.modelVersion = xq.version, mq.geometry = Aq, mq.instanceLayout = cq, mq.definesBits = uq;
        const Bq = function(qq) {
          let Eq = "";
          for (const [gq, Yq] of qq) Eq += !0 === Yq ? `${gq};` : `${gq}=${Yq};`;
          return Eq
        }(gO(mq.defines));
        return Bq === mq.definesKey && mq.packVariant === this.modelPackVariant && mq.program && !this.packFailed(mq.program) || (mq.definesKey = Bq, mq.packVariant = this.modelPackVariant, mq.program = this.programWithModel(xq, mq.defines, Bq)), mq.program
      }
      programCurrent(qq, Eq, gq, Yq) {
        return null !== qq.program && !this.packFailed(qq.program) && qq.instancing === gq && qq.groupId === Yq && this.definesHold(qq, Eq, gq)
      }
      definesHold(qq, Eq, gq) {
        return qq.modelVersion === qq.model.version && qq.geometry === OO(Eq) && qq.instanceLayout === this.instanceLayout(Eq.owner, gq) && qq.definesBits === this.definesBits(Eq.owner) && qq.packVariant === this.modelPackVariant
      }
      modelPackKind(qq) {
        var Eq;
        return 0 === this.modelPackVariant ? null : null !== (Eq = (0, vq.u)(qq, rq.g.name)) && void 0 !== Eq && Eq.active ? "placed" : qq.item ? "item" : qq.lifeform ? "lifeform" : qq.box ? "box" : null
      }
      instanceLayout(qq, Eq) {
        var gq, Yq, lq;
        return "thin" === Eq ? null !== (lq = this.resources.U_.get(qq)) && void 0 !== lq ? lq : null : "instanced" === Eq && null !== (gq = null === (Yq = qq._userInstancedBuffersStorage) || void 0 === Yq ? void 0 : Yq.interleavedKinds) && void 0 !== gq ? gq : null
      }
      definesBits(qq) {
        const Eq = this.view;
        return (qq.visibility < 1 ? 1 : 0) | (qq.hasVertexAlpha ? 2 : 0) | (qq.applyFog ? 4 : 0) | (qq.useVertexColors ? 8 : 0) | (qq.nonUniformScaling ? 16 : 0) | (Eq.fogEnabled && 0 !== Eq.fogMode ? 32 : 0) | (Eq.lightsEnabled ? 64 : 0) | Eq.lightCount << 7
      }
      prepareLightDefines(qq, Eq, gq) {
        let Yq = 0;
        if (this.view.lightsEnabled && !Eq) {
          const Eq = Math.min(gq, 4);
          for (; Yq < this.view.lightCount && (qq[`LIGHT${Yq}`] = !0, qq[`LITE_LIGHT${Yq}_SLOT`] = Yq, Yq++, qq._needNormals = !0, Yq !== Eq););
        }
        for (let lq = Yq; lq < 4; lq++) qq[`LIGHT${lq}`] = !1, qq[`LITE_LIGHT${lq}_SLOT`] = void 0
      }
      prepareModelDefines(qq, Eq, gq, Yq, lq, Oq) {
        const {
          features: mq
        } = gq;
        Yq._needNormals = !1, Yq._needUVs = !1;
        const xq = this.view;
        this.prepareLightDefines(Yq, gq.disableLighting, gq.maxSimultaneousLights), Yq.MAINUV1 = !1, Yq.MAINUV2 = !1;
        const Aq = gq.diffuseTexture;
        Aq ? (Yq._needUVs = !0, Yq.DIFFUSE = !0, Aq.optimizeUVAllocation && (0, nq.A)(Aq.matrix) ? (Yq.DIFFUSEDIRECTUV = Aq.uvSet + 1, Yq[`MAINUV${Aq.uvSet+1}`] = !0) : Yq.DIFFUSEDIRECTUV = 0, Aq.uvSet > 1 && this.warnOnce(`uvset:${gq.name}`, `${gq.name} samples UV set ${Aq.uvSet+1}, which is not supported`)) : (Yq.DIFFUSE = !1, Yq.DIFFUSEDIRECTUV = 0);
        const cq = gq.opacityTexture,
          uq = gq.emissiveTexture;
        Yq.OPACITY = EO(cq, "OPACITY", Yq), Yq.OPACITYRGB = null !== cq && cq.getAlphaFromRGB, Yq.EMISSIVE = EO(uq, "EMISSIVE", Yq), (cq && cq.uvSet > 1 || uq && uq.uvSet > 1) && this.warnOnce(`uvset:${gq.name}`, `${gq.name} samples a UV set past 2, which is not supported`);
        const Bq = gq.reflectionTexture,
          Wq = null !== Bq;
        if (Wq) {
          if (!this.resources.boundTexture(Bq)) return !1;
          Yq._needNormals = !0
        }
        Yq.REFLECTION = Wq, Yq.REFLECTIONMAP_3D = Wq, Yq.REFLECTIONMAP_SKYBOX = Wq, Yq.REFLECTIONMAP_OPPOSITEZ = Wq && (qq.useRightHandedSystem ? !Bq.invertZ : Bq.invertZ), Yq.ROUGHNESS = Wq && gq.roughness > 0, Yq.REFLECTIONOVERALPHA = Wq && gq.useReflectionOverAlpha, Yq.LITE_REFLECTION_LUMINANCE = Wq && "cube" === Bq.source.kind && Bq.source.luminance, (Eq.skeleton || Eq.morphTargetManager) && this.warnOnce(`skin:${Eq.name}`, `${Eq.name} has bones or morph targets, which are not supported`), Yq.FOG = gq.fogEnabled && Eq.applyFog && xq.fogEnabled && 0 !== xq.fogMode, Yq.NONUNIFORMSCALING = Eq.nonUniformScaling;
        const {
          visibility: Nq,
          hasVertexAlpha: aq
        } = Eq;
        Yq.ALPHATEST = (0, vq.M)(gq, Nq, aq), Yq.ALPHAFROMDIFFUSE = (0, vq._)(gq), Yq.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== gq.transparencyMode, Yq.ALPHABLEND = null === gq.transparencyMode || (0, vq.I)(gq, Nq, aq), Yq.PREMULTIPLYALPHA = 7 === gq.alphaMode || 8 === gq.alphaMode, Yq.EMISSIVEASILLUMINATION = gq.useEmissiveAsIllumination, Yq.LINKEMISSIVEWITHDIFFUSE = gq.linkEmissiveWithDiffuse, Yq.TWOSIDEDLIGHTING = !gq.backFaceCulling && gq.twoSidedLighting, Yq.INSTANCES = "none" !== Oq, Yq.THIN_INSTANCES = "thin" === Oq, Yq.LITE_FRONT_LAYER = lq >= 1;
        for (const {
            feature: tq,
            state: rq,
            active: vq
          }
          of mq) {
          var Vq, dq;
          if (vq) null === (Vq = (dq = (0, uE.k)(tq)).prepareDefinesBeforeAttributes) || void 0 === Vq || Vq.call(dq, rq, Yq, qq, Eq)
        }
        this.modelPackKind(gq) && (Yq._needNormals = !0), Yq.NORMAL = Yq._needNormals && Eq.isVerticesDataPresent("normal"), Yq.UV1 = Yq._needUVs && Eq.isVerticesDataPresent("uv"), Yq.UV2 = Yq._needUVs && Eq.isVerticesDataPresent("uv2");
        const jq = Eq.useVertexColors && Eq.isVerticesDataPresent("color");
        Yq.VERTEXCOLOR = jq, Yq.VERTEXALPHA = Eq.hasVertexAlpha && jq, Yq.INSTANCESCOLOR = "none" !== Oq && Eq.isVerticesDataPresent("instanceColor");
        for (const {
            feature: tq,
            state: rq,
            active: vq
          }
          of mq) {
          var Hq, oq;
          if (vq) null === (Hq = (oq = (0, uE.k)(tq)).prepareDefines) || void 0 === Hq || Hq.call(oq, rq, Yq, qq, Eq, gq)
        }
        const Pq = qq.Ba();
        for (const {
            feature: tq,
            state: rq,
            active: vq
          }
          of mq) {
          var Qq, yq;
          if (vq && !1 === (null === (Qq = (yq = (0, uE.k)(tq)).isReadyForSubMesh) || void 0 === Qq ? void 0 : Qq.call(yq, rq, Yq, qq, Pq))) return !1
        }
        return !0
      }
    }

    function xO(qq, Eq, gq) {
      return qq.codeVersion !== Eq.version && function(qq, Eq) {
        const gq = [],
          Yq = [];
        for (const {
            feature: Wq,
            state: Nq,
            active: aq
          }
          of Eq.features) {
          var lq, Oq, mq, xq;
          if (aq) AO(null === (lq = (Oq = (0, uE.k)(Wq)).getCustomCode) || void 0 === lq ? void 0 : lq.call(Oq, Nq, "vertex", yq.d.WGSL), gq), AO(null === (mq = (xq = (0, uE.k)(Wq)).getCustomCode) || void 0 === mq ? void 0 : mq.call(xq, Nq, "fragment", yq.d.WGSL), Yq)
        }
        const Aq = [];
        for (const {
            feature: Wq,
            state: Nq
          }
          of Eq.features) {
          var cq, uq;
          const qq = null === (cq = (uq = (0, uE.k)(Wq)).getUniforms) || void 0 === cq ? void 0 : cq.call(uq, Nq, yq.d.WGSL);
          for (const Eq of null !== (Bq = null === qq || void 0 === qq ? void 0 : qq.ubo) && void 0 !== Bq ? Bq : []) {
            var Bq;
            Eq.size && Eq.type && Aq.push({
              name: Eq.name,
              type: Eq.type,
              arraySize: Eq.arraySize
            })
          }
        }
        qq.vertexCode = gq, qq.fragmentCode = Yq, qq.pluginUniforms = Aq, qq.codeKey = JSON.stringify([gq, Yq, Aq]), qq.codeVersion = Eq.version
      }(qq, Eq), `${gq}#${qq.codeKey}`
    }

    function AO(qq, Eq) {
      if (qq)
        for (const gq in qq) qq[gq] && Eq.push([gq, qq[gq]])
    }
    const cO = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class uO {
      constructor(qq) {
        this.warnOnce = qq, this.states = new Map
      }
      renderState(qq, Eq, gq, Yq) {
        var lq;
        let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          mq = null !== (lq = qq.sideOrientation) && void 0 !== lq ? lq : Eq.sideOrientation;
        Eq._getWorldMatrixDeterminant() < 0 && (mq = 0 === mq ? 1 : 0);
        const xq = "triangle-list" === Oq,
          Aq = gq ? qq.alphaMode : 0,
          cq = (!gq || (0 === Aq || qq.forceDepthWrite)) && !qq.disableDepthWrite,
          uq = xq && qq.backFaceCulling ? qq.cullBackFaces ? "back" : "front" : "none",
          Bq = xq && 0 !== mq ? "ccw" : "cw",
          Wq = qq.depthFunction,
          Nq = xq ? qq.zOffset : 0,
          aq = xq ? qq.zOffsetUnits : 0,
          Vq = !qq.disableColorWrite;
        return Yq && Yq.alphaMode === Aq && Yq.depthWrite === cq && Yq.depthFunction === Wq && Yq.cullMode === uq && Yq.frontFace === Bq && Yq.zOffset === Nq && Yq.zOffsetUnits === aq && Yq.colourWrite === Vq && Yq.topology === Oq ? Yq : this.stateFor(Aq, cq, Wq, uq, Bq, Nq, aq, Vq, Oq)
      }
      stateFor(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        const cq = `${qq}|${Eq}|${gq}|${Yq}|${lq}|${Oq}|${mq}|${xq}|${Aq}`;
        let uq = this.states.get(cq);
        if (!uq) {
          var Bq;
          const Wq = qq ? Ul(qq) : null;
          qq && !Wq && this.warnOnce(`alpha:${qq}`, `alpha mode ${qq} is not supported`), uq = {
            key: cq,
            alphaMode: qq,
            depthFunction: gq,
            zOffset: Oq,
            zOffsetUnits: mq,
            topology: Aq,
            blend: Wq,
            depthWrite: Eq,
            depthCompare: gq && null !== (Bq = cO.get(gq)) && void 0 !== Bq ? Bq : null,
            cullMode: Yq,
            frontFace: lq,
            depthBias: -mq,
            depthBiasSlopeScale: -Oq,
            colourWrite: xq
          }, this.states.set(cq, uq)
        }
        return uq
      }
    }
    var BO = gq(37437);

    function WO(qq) {
      if (!qq.frozen) return -1;
      let Eq = qq.version;
      for (const {
          feature: gq,
          state: Yq,
          active: lq
        }
        of qq.features) {
        if (!lq || !gq.bind) continue;
        const qq = (0, uE.k)(gq).uniformsVersion;
        if (!qq) return -1;
        Eq += qq(Yq)
      }
      return Eq
    }
    class NO {
      constructor(qq, Eq, gq) {
        this.slots = qq, this.data = Eq, this.textures = gq, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(qq, Eq) {
        this.write4(qq, Eq, 0, 0, 0, 1)
      }
      updateFloat2(qq, Eq, gq) {
        this.write4(qq, Eq, gq, 0, 0, 2)
      }
      updateFloat3(qq, Eq, gq, Yq) {
        this.write4(qq, Eq, gq, Yq, 0, 3)
      }
      updateFloat4(qq, Eq, gq, Yq, lq) {
        this.write4(qq, Eq, gq, Yq, lq, 4)
      }
      updateVector3(qq, Eq) {
        this.write4(qq, Eq.x, Eq.y, Eq.z, 0, 3)
      }
      updateVector4(qq, Eq) {
        this.write4(qq, Eq.x, Eq.y, Eq.z, Eq.w, 4)
      }
      updateColor3(qq, Eq) {
        this.write4(qq, Eq.r, Eq.g, Eq.b, 0, 3)
      }
      updateColor4(qq, Eq, gq) {
        this.write4(qq, Eq.r, Eq.g, Eq.b, gq, 4)
      }
      updateFloatsFrom(qq, Eq, gq, Yq) {
        const lq = this.slots.get(qq);
        if (!lq) return;
        const Oq = this.data,
          mq = lq.offset;
        for (let xq = 0; xq < Yq; xq++) Oq[mq + xq] = Eq[gq + xq]
      }
      updateFloat3TimesFloats(qq, Eq, gq, Yq) {
        const lq = this.slots.get(qq);
        if (!lq) return;
        const Oq = this.data,
          mq = lq.offset;
        Oq[mq] = Eq[gq] * Yq[0], Oq[mq + 1] = Eq[gq + 1] * Yq[1], Oq[mq + 2] = Eq[gq + 2] * Yq[2]
      }
      Eqq(qq, Eq) {
        const gq = this.slots.get(qq);
        gq && this.data.set(Eq.m, gq.offset)
      }
      updateMatrixFloats(qq, Eq) {
        const gq = this.slots.get(qq);
        gq && this.data.set(Eq, gq.offset)
      }
      updateFloatArray(qq, Eq) {
        const gq = this.slots.get(qq);
        if (!gq) return;
        if (!gq.arraySize || gq.stride === gq.floats) return void this.data.set(Eq, gq.offset);
        const Yq = Math.min(Eq.length, gq.floats * gq.arraySize);
        for (let lq = 0; lq < Yq; lq++) this.data[gq.offset + Math.floor(lq / gq.floats) * gq.stride + lq % gq.floats] = Eq[lq]
      }
      updateArray(qq, Eq) {
        this.updateFloatArray(qq, Eq)
      }
      setTexture(qq, Eq) {
        this.textures.set(qq, Eq), this.expected.delete(qq)
      }
      expectTexture(qq) {
        this.textures.set(qq, null), this.expected.add(qq)
      }
      write4(qq, Eq, gq, Yq, lq, Oq) {
        const mq = this.slots.get(qq);
        if (!mq) return;
        const xq = this.data,
          Aq = mq.offset;
        xq[Aq] = Eq, Oq > 1 && (xq[Aq + 1] = gq), Oq > 2 && (xq[Aq + 2] = Yq), Oq > 3 && (xq[Aq + 3] = lq)
      }
    }

    function aO(qq, Eq) {
      const gq = LY,
        Yq = BO.f,
        lq = qq.lights,
        Oq = Math.min(qq.lightCount, 8);
      for (let mq = 0; mq < Oq; mq++) {
        const qq = gq.lights + mq * gq.lightStride,
          Oq = mq * BO.d;
        Eq[qq] = lq[Oq + Yq.vector], Eq[qq + 1] = lq[Oq + Yq.vector + 1], Eq[qq + 2] = lq[Oq + Yq.vector + 2], Eq[qq + 3] = lq[Oq + Yq.kind] === BO.e.directional ? 1 : 0, Eq[qq + 4] = lq[Oq + Yq.diffuse], Eq[qq + 5] = lq[Oq + Yq.diffuse + 1], Eq[qq + 6] = lq[Oq + Yq.diffuse + 2], Eq[qq + 7] = lq[Oq + Yq.range], Eq[qq + 8] = lq[Oq + Yq.specular], Eq[qq + 9] = lq[Oq + Yq.specular + 1], Eq[qq + 10] = lq[Oq + Yq.specular + 2], Eq[qq + 11] = lq[Oq + Yq.range]
      }
      Eq[gq.fogInfos] = qq.fogMode, Eq[gq.fogInfos + 1] = qq.fogStart, Eq[gq.fogInfos + 2] = qq.fogEnd, Eq[gq.fogInfos + 3] = qq.fogDensity, Eq[gq.fogColour] = qq.fogColour[0], Eq[gq.fogColour + 1] = qq.fogColour[1], Eq[gq.fogColour + 2] = qq.fogColour[2], Eq[gq.outputHeight] = qq.renderHeight, Eq[gq.animTick] = qq.animTick, Eq[gq.timeMs] = qq.timeMs
    }
    class VO {
      constructor(qq) {
        this.instancesOf = qq
      }
      refreshModelUniforms(qq, Eq, gq, Yq) {
        const lq = WO(gq);
        if (lq >= 0 && lq === Eq.heldVersion && Eq.textures.get("diffuseSampler") === gq.diffuseTexture && Eq.textures.get("reflectionCubeSampler") === gq.reflectionTexture && Eq.textures.get("opacitySampler") === gq.opacityTexture && Eq.textures.get("emissiveSampler") === gq.emissiveTexture) return !0;
        if (lq < 0)
          for (const Oq of this.instancesOf(gq)) Oq.heldVersion = -1;
        return this.writeModelUniforms(qq, Eq, gq, Yq), Eq.heldVersion = lq, !1
      }
      writeModelUniforms(qq, Eq, gq, Yq) {
        const {
          ubo: lq
        } = Eq, Oq = gq.diffuseTexture, mq = gq.diffuseColor;
        lq.updateFloat4("vDiffuseColor", mq[0], mq[1], mq[2], gq.alpha), Oq && (lq.updateFloat2("vDiffuseInfos", Oq.uvSet, Oq.level), lq.updateMatrixFloats("diffuseMatrix", Oq.matrix)), lq.updateFloat("alphaCutOff", gq.alphaCutOff), lq.updateFloatsFrom("vEmissiveColor", gq.emissiveColor, 0, 3), lq.updateFloat3TimesFloats("vAmbientColor", Yq.ambientColour, 0, gq.ambientColor);
        const xq = gq.specularColor;
        lq.updateFloat4("vSpecularColor", xq[0], xq[1], xq[2], gq.specularPower), lq.setTexture("diffuseSampler", Oq);
        const Aq = gq.opacityTexture;
        Aq && (lq.updateFloat2("vOpacityInfos", Aq.uvSet, Aq.level), lq.updateMatrixFloats("opacityMatrix", Aq.matrix)), lq.setTexture("opacitySampler", Aq);
        const cq = gq.emissiveTexture;
        cq && (lq.updateFloat2("vEmissiveInfos", cq.uvSet, cq.level), lq.updateMatrixFloats("emissiveMatrix", cq.matrix)), lq.setTexture("emissiveSampler", cq);
        const uq = gq.reflectionTexture;
        uq && lq.updateMatrixFloats("reflectionMatrix", uq.matrix), lq.updateFloat2("vReflectionInfos", uq ? uq.level * qq.iblIntensity : 0, gq.roughness), lq.setTexture("reflectionCubeSampler", uq);
        const Bq = qq.Ba();
        for (const {
            feature: aq,
            state: Vq,
            active: dq
          }
          of gq.features) {
          var Wq, Nq;
          if (dq) null === (Wq = (Nq = (0, uE.k)(aq)).bind) || void 0 === Wq || Wq.call(Nq, Vq, lq, qq, Bq)
        }
      }
    }

    function dO(qq) {
      const Eq = qq.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(Eq) ? "u32" : /i32|^vec\di$/.test(Eq) ? "i32" : "f32"
    }

    function jO(qq, Eq) {
      const gq = qq.getSize(),
        Yq = dO(Eq),
        lq = qq => 4 === gq ? `${qq}x4` : 2 === gq ? `${qq}x2` : null;
      if ("f32" === Yq) {
        if (5126 === qq.type) return 1 === gq ? "float32" : gq >= 2 && gq <= 4 ? `float32x${gq}` : null;
        if (!qq.normalized) return null;
        switch (qq.type) {
          case 5121:
            return lq("unorm8");
          case 5120:
            return lq("snorm8");
          case 5123:
            return lq("unorm16");
          case 5122:
            return lq("snorm16")
        }
        return null
      }
      const Oq = "u32" === Yq ? "uint" : "sint";
      switch (qq.type) {
        case 5125:
        case 5124:
          return 1 === gq ? `${Oq}32` : gq <= 4 ? `${Oq}32x${gq}` : null;
        case 5121:
        case 5120:
          return lq(`${Oq}8`);
        case 5123:
        case 5122:
          return lq(`${Oq}16`)
      }
      return null
    }

    function HO(qq) {
      var Eq;
      const gq = /(8|16|32)(?:x(\d))?$/.exec(qq);
      return gq ? Number(gq[1]) / 8 * Number(null !== (Eq = gq[2]) && void 0 !== Eq ? Eq : 1) : 4
    }
    class oO {
      constructor(qq, Eq, gq) {
        this.resources = qq, this.limits = Eq, this.warnOnce = gq, this.layouts = new Map
      }
      resolveInputs(qq, Eq, gq, Yq) {
        const lq = [],
          Oq = gq.program.attributes,
          mq = [];
        for (let uq = 0; uq < Oq.length; uq++) {
          const gq = Oq[uq],
            xq = gq.optional ? null : this.resources.vertexInput(qq, gq.name, Yq);
          if (!xq) {
            const qq = dO(gq.type),
              Eq = "u32" === qq ? "uint32x4" : "i32" === qq ? "sint32x4" : "float32x4";
            mq.push(null);
            const Yq = lq.find((qq => null === qq.data));
            Yq ? Yq.attributes.push({
              shaderLocation: uq,
              offset: 0,
              format: Eq
            }) : lq.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: uq,
                offset: 0,
                format: Eq
              }]
            });
            continue
          }
          const Aq = xq.getBuffer();
          mq.push(xq);
          const cq = jO(xq, gq.type);
          if (!cq) return this.warnOnce(`format:${Eq}:${gq.name}`, `${Eq}'s ${gq.name} (type ${xq.type}, size ${xq.getSize()}) has no WebGPU vertex format`), null;
          const Bq = xq.getIsInstanced() ? "instance" : "vertex",
            Wq = xq.byteStride,
            Nq = HO(cq),
            aq = lq.find((qq => qq.data === Aq && qq.stride === Wq && qq.step === Bq && xq.byteOffset >= qq.base && xq.byteOffset - qq.base + Nq <= Wq));
          aq ? aq.attributes.push({
            shaderLocation: uq,
            offset: xq.byteOffset - aq.base,
            format: cq
          }) : lq.push({
            data: Aq,
            base: xq.byteOffset,
            stride: Wq,
            step: Bq,
            attributes: [{
              shaderLocation: uq,
              offset: 0,
              format: cq
            }]
          })
        }
        if (lq.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Eq}`, `${Eq} needs ${lq.length} vertex buffers`), null;
        let xq = "";
        for (const uq of lq) {
          xq += `${uq.stride}${"instance"===uq.step?"i":"v"}`;
          for (const qq of uq.attributes) xq += `,${qq.shaderLocation}:${qq.offset}:${qq.format}`;
          xq += ";"
        }
        let Aq = this.layouts.get(xq);
        Aq || (Aq = {
          key: xq,
          buffers: lq.map((qq => ({
            arrayStride: qq.stride,
            stepMode: qq.step,
            attributes: qq.attributes
          }))),
          instanceEnds: lq.map((qq => {
            let Eq = -1;
            if ("instance" === qq.step)
              for (const gq of qq.attributes) Eq = Math.max(Eq, gq.offset + HO(gq.format));
            return Eq
          }))
        }, this.layouts.set(xq, Aq));
        const cq = lq.map((qq => qq.base));
        return {
          program: gq,
          sources: mq,
          layout: Aq,
          slotData: lq.map((qq => qq.data)),
          K4: cq,
          buffers: [],
          offsets: cq,
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

    function PO(qq, Eq, gq, Yq) {
      const lq = Eq.program.program.attributes;
      for (let Oq = 0; Oq < lq.length; Oq++) {
        if ((lq[Oq].optional ? null : gq.vertexInput(qq, lq[Oq].name, Yq)) !== Eq.sources[Oq]) return !1
      }
      return !0
    }
    const QO = 64;
    class yO {
      constructor(qq, Eq, gq, Yq) {
        this.device = qq, this.layout = Eq, this.frameBuffer = gq, this.label = Yq, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(qq) {
        if (qq * QO <= this.data.length) return !1;
        let Eq = 2 * this.data.length;
        for (; qq * QO > Eq;) Eq *= 2;
        const gq = new Float32Array(Eq);
        return gq.set(this.data), this.data = gq, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const lq = this.data,
          Oq = qq * QO;
        let mq = lq[Oq + 16] !== gq;
        for (let xq = 0; xq < 16 && !mq; xq++) mq = lq[Oq + xq] !== Eq[Yq + xq];
        if (mq) {
          for (let qq = 0; qq < 16; qq++) lq[Oq + qq] = Eq[Yq + qq];
          lq[Oq + 16] = gq
        }
        return mq
      }
      upload(qq, Eq) {
        this.device.queue.writeBuffer(this.buffer, qq * JY, this.data, qq * QO, (Eq - qq) * QO)
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

    function tO(qq) {
      return qq.gpu[nq.f.lite] ??= qq.materials.map(((Eq, gq) => ({
        parts: qq,
        range: gq,
        owner: qq.owner
      })))
    }

    function rO(qq) {
      var Eq, gq, Yq;
      return null !== (Eq = null !== (gq = null === (Yq = qq.parts.materials[qq.range]) || void 0 === Yq ? void 0 : Yq.mirror) && void 0 !== gq ? gq : qq.owner.material) && void 0 !== Eq ? Eq : null
    }
    const vO = ["opaque", "alphaTest", "transparent", "text"];
    class hO {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, cE.e)("Lite: ")
      }
      attach(qq, Eq) {
        this.model = qq, this.mirror = Eq
      }
      get worlds() {
        return this.model.nodes.kB
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(qq) {
        return this.groups.get(qq)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(qq) {
        for (const [Eq, gq] of this.groups)
          for (const Yq of vO)
            for (const lq of gq[Yq].units) qq(lq.owner, "text" === Yq ? "transparent" : Yq, Eq)
      }
      select(qq, Eq) {
        this.frame++, this.selectedCount = 0;
        for (const xq of this.groups.values())
          for (const qq of vO) xq[qq].units.length = 0, xq[qq].rows.length = 0;
        const {
          model: gq,
          mirror: Yq
        } = this;
        if (!gq || !Yq || !qq) return;
        this.rows.length < gq.nodes.WB && (this.rows = new Int32Array(gq.nodes.WB));
        const lq = this.rows,
          Oq = gq.meshes;
        for (let xq = 0; xq < Oq.looseCount; xq++) {
          const qq = Oq.loose[xq],
            gq = Yq.nodes[qq];
          gq && !gq.isBlocked && gq.isEnabled() && !gq.rc.hasAZeroComponent && Oq.selects(qq, Eq.frustum) && (this.activate(gq, qq), this.selectedCount++)
        }
        const mq = Oq.selectTextPlanes(Eq.frustum, lq);
        for (let xq = 0; xq < mq; xq++) {
          const Eq = lq[xq],
            Oq = Yq.nodes[Eq],
            mq = gq.meshes.parts[Eq];
          if (!Oq.isVisible || !(Oq.visibility > 0) || 0 === (Oq.layerMask & qq.layerMask) || !mq) continue;
          const Aq = this.groupOf(gq.meshes.layer[Eq]).text;
          for (const qq of tO(mq)) Aq.units.push(qq), Aq.rows.push(Eq);
          this.selectedCount++
        }
      }
      instanceBatch(qq) {
        const Eq = this.batchOf(qq);
        return Eq.dispatched || (Eq.dispatched = Eq.renderSelf = !0, Eq.row = this.rowOf(qq)), Eq
      }
      rowOf(qq) {
        return qq.row
      }
      activate(qq, Eq) {
        if (!qq.GJ) {
          const gq = qq;
          if (gq.olq) {
            const qq = this.batchOf(gq);
            qq.dispatched = !0, qq.renderSelf = !0, qq.row = Eq
          }
          return void this.dispatch(gq, Eq, Eq)
        }
        const gq = qq,
          Yq = gq.Plq;
        if (Yq._getWorldMatrixDeterminant() >= 0 !== gq._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Yq.name}`, `A mirrored InstancedMesh of ${Yq.name} is not drawn yet`);
        const lq = this.batchOf(Yq);
        lq.instances.push(gq), lq.rows.push(Eq), lq.dispatched || (lq.dispatched = !0, this.dispatch(Yq, Eq, this.rowOf(Yq)))
      }
      batchOf(qq) {
        let Eq = this.batches.get(qq);
        return Eq || (Eq = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(qq, Eq)), Eq.frame !== this.frame && (Eq.frame = this.frame, Eq.dispatched = !1, Eq.renderSelf = !1, Eq.instances.length = 0, Eq.rows.length = 0), Eq
      }
      dispatch(qq, Eq, gq) {
        const {
          layer: Yq,
          parts: lq
        } = this.model.meshes;
        if (!lq[Eq]) return;
        const Oq = this.groupOf(Yq[Eq]),
          mq = qq;
        for (const xq of tO(lq[Eq])) {
          const qq = rO(xq);
          if (!qq) continue;
          const Eq = qq.needAlphaBlendingForMesh(mq) ? Oq.transparent : qq.needAlphaTestingForMesh(mq) ? Oq.alphaTest : Oq.opaque;
          Eq.units.push(xq), Eq.rows.push(gq)
        }
      }
      groupOf(qq) {
        let Eq = this.groups.get(qq);
        return Eq || (Eq = {
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
        }, this.groups.set(qq, Eq)), Eq
      }
    }
    class nO {
      constructor() {
        this.Fc = new Map, this.enabled = [], this.groups = new Map, this.jN = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(qq) {
        if (this.Fc.has(qq)) return;
        const Eq = {
          mesh: qq,
          observer: qq.onEffectiveEnabledStateChangedObservable.add((qq => {
            this.hG(Eq, qq)
          })),
          index: -1,
          steady: null
        };
        this.Fc.set(qq, Eq), this.hG(Eq, qq.isEnabled())
      }
      remove(qq) {
        const Eq = this.Fc.get(qq);
        Eq && (Eq.observer.remove(!0), this.hG(Eq, !1), this.Fc.delete(qq))
      }
      base(qq) {
        return this.Fc.get(qq)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Fc: this.Fc.size
        }
      }
      forEachSelected(qq) {
        for (const [Eq, gq] of this.groups) {
          for (const Yq of gq.opaque) qq(Yq.owner, "opaque", Eq);
          for (const Yq of gq.transparent) qq(Yq.owner, "transparent", Eq)
        }
        for (const Eq of this.jN) qq(Eq.mesh, "opaque", 0)
      }
      group(qq) {
        return this.groups.get(qq)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(qq, Eq) {
        this.drawn = 0, this.selected = 0, this.jN.length = 0;
        for (const Yq of this.groups.values()) Yq.opaque.length = 0, Yq.transparent.length = 0;
        if (!qq) return;
        const gq = this.enabled;
        for (let Yq = 0; Yq < gq.length; Yq++) {
          const lq = gq[Yq];
          if (lq.steady && Eq(lq, qq)) {
            this.selected++, this.jN.push(lq);
            continue
          }
          const Oq = lq.mesh;
          if (Oq.isBlocked || Oq.rc.hasAZeroComponent) continue;
          if (!Oq.isVisible || Oq.visibility <= 0 || 0 === (Oq.layerMask & qq.layerMask)) continue;
          if (Oq.olq) {
            this.warned.has(Oq.name) || (this.warned.add(Oq.name), console.warn(`Lite: thin instance base ${Oq.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: mq
          } = Oq;
          if (!mq) continue;
          Oq.computeWorldMatrix(), this.selected++;
          const xq = this.listsFor(Oq.renderingGroupId);
          for (const qq of tO(mq)) {
            const Eq = rO(qq);
            Eq && (Eq.needAlphaBlendingForMesh(Oq) ? xq.transparent.push(qq) : xq.opaque.push(qq))
          }
        }
      }
      hG(qq, Eq) {
        if (Eq === qq.index >= 0) return;
        qq.steady = null;
        const gq = this.enabled;
        if (Eq) qq.index = gq.length, gq.push(qq);
        else {
          const Eq = gq.pop();
          Eq !== qq && (gq[qq.index] = Eq, Eq.index = qq.index), qq.index = -1
        }
      }
      listsFor(qq) {
        let Eq = this.groups.get(qq);
        return Eq || (Eq = {
          opaque: [],
          transparent: []
        }, this.groups.set(qq, Eq)), Eq
      }
    }
    var bO = gq(39494);
    class iO {
      constructor() {
        this.bundle = null, this.stale = !0, this.Fc = new Set
      }
    }
    class ZO {
      constructor(qq, Eq, gq) {
        this.device = qq, this.slots = Eq, this.host = gq, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new iO, this.mJ = new iO, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new wl, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(qq) {
          var Eq, gq;
          let Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Eq = null === (gq = globalThis.navigator) || void 0 === gq ? void 0 : gq.userAgent) && void 0 !== Eq ? Eq : "";
          const lq = qq.adapterInfo;
          return "intel" === (null === lq || void 0 === lq ? void 0 : lq.vendor) && "gen-12lp" === lq.architecture && Yq.includes("Windows")
        }(qq), (0, bO.B)(this.direct)
      }
      Qr() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, bO.B)(this.directThisFrame)
      }
      add(qq, Eq, gq, Yq) {
        let lq = this.records.get(qq);
        return lq || (lq = this.createRecord(qq), this.records.set(qq, lq)), lq.recorded && MO(lq, Eq) || (this.bundleOf(lq).stale = !0), this.place(lq, Eq, gq, Yq), lq
      }
      bundleOf(qq) {
        return qq.mJ ? this.mJ : this.main
      }
      addAgain(qq, Eq, gq, Yq) {
        qq.recorded || (this.bundleOf(qq).stale = !0), this.place(qq, Eq, gq, Yq)
      }
      place(qq, Eq, gq, Yq) {
        qq.seen = this.frame, qq.mJ && null === qq.draw && (this.mJ.stale = !0), qq.draw = Eq, this.drawn++, gq && this.slots.write(qq.slot, gq, Yq) && (this.slotsFrom = Math.min(this.slotsFrom, qq.slot), this.slotsTo = Math.max(this.slotsTo, qq.slot));
        const lq = this.args,
          Oq = 5 * qq.slot;
        lq[Oq] === Eq.count && lq[Oq + 1] === Eq.instances && lq[Oq + 2] === Eq.first || (lq[Oq] = Eq.count, lq[Oq + 1] = Eq.instances, lq[Oq + 2] = Eq.first, this.argsDirty = !0, this.mJ.stale ||= qq.mJ)
      }
      Kr() {
        for (const qq of this.records.values()) qq.seen !== this.frame && (qq.draw && (qq.draw = null, this.args[5 * qq.slot + 1] = 0, this.argsDirty = !0, this.mJ.stale ||= qq.mJ), this.frame - qq.seen > 120 && (this.records.delete(qq.unit), this.freeSlots.push(qq.slot), qq.recorded && (this.bundleOf(qq).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(qq) {
        for (const Eq of this.records.values()) Eq.draw && Eq.seen === this.frame && !Eq.mJ && qq(Eq.draw, this.slots.data, Eq.slot * JY / 4)
      }
      resourceDestroyed(qq) {
        this.main.stale ||= this.main.Fc.has(qq), this.mJ.stale ||= this.mJ.Fc.has(qq)
      }
      execute(qq, Eq, gq) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(qq, Eq, gq, "direct"), this.drawn;
        const Yq = this.host.sceneGroup(Eq);
        if (!Yq) return this.main.bundle = null, this.mJ.bundle = null, this.recordedSceneGroup = null, this.encode(qq, Eq, gq, "direct"), this.drawn;
        this.recordedTarget === gq && this.recordedSceneGroup === Yq || (this.recordedTarget = gq, this.recordedSceneGroup = Yq, this.main.stale = !0, this.mJ.stale = !0);
        const lq = this.main,
          Oq = this.mJ;
        let mq = !1;
        !lq.stale && lq.bundle || (lq.bundle = this.record(Eq, gq, Yq, "indirect"), mq = !0);
        const xq = (0, bO.k)();
        return (Oq.stale || this.rangedEpoch !== xq) && (this.rangedEpoch = xq, Oq.bundle = this.drawsRanged() ? this.record(Eq, gq, Yq, "mJ") : this.noRangedBundle(), mq = !0), mq && (this.bundles = Oq.bundle ? [lq.bundle, Oq.bundle] : [lq.bundle]), qq.executeBundles(this.bundles), qq.setBindGroup(0, Yq), this.drawn
      }
      record(qq, Eq, gq, Yq) {
        const lq = this.device.createRenderBundleEncoder({
          label: "mJ" === Yq ? "thin-bases-ranged" : "thin-bases",
          colorFormats: qq._colorFormat ? [qq._colorFormat] : [],
          depthStencilFormat: qq._depthStencilFormat,
          sampleCount: qq._sampleCount
        });
        return lq.setBindGroup(0, gq), this.encode(lq, qq, Eq, Yq), lq.finish()
      }
      noRangedBundle() {
        for (const qq of this.records.values()) qq.mJ && (qq.recorded = !1);
        return this.mJ.Fc.clear(), this.mJ.stale = !1, null
      }
      drawsRanged() {
        for (const qq of this.records.values())
          if (qq.mJ && qq.draw) return !0;
        return !1
      }
      encode(qq, Eq, gq, Yq) {
        const lq = [];
        for (const Aq of this.records.values()) "direct" !== Yq && Aq.mJ !== ("mJ" === Yq) || (Aq.recorded = !1, Aq.draw && lq.push(Aq));
        lq.sort(TO);
        const Oq = "direct" === Yq ? null : "mJ" === Yq ? this.mJ : this.main;
        null === Oq || void 0 === Oq || Oq.Fc.clear(), this.binder.reset();
        let mq = !1;
        for (const Aq of lq) {
          var xq;
          const lq = Aq.draw,
            cq = this.host.pipelineFor(lq, Eq, gq);
          if (!cq) {
            this.host.pipelineCompiling(lq, gq) ? mq = !0 : Oq && this.keep(Aq, lq, Oq.Fc);
            continue
          }
          let uq;
          if (Aq.mJ && "indirect" !== Yq) {
            const qq = Aq.unit.owner;
            uq = "direct" === Yq && (0, bO.p)(qq) || (0, bO.l)(qq) || void 0
          }
          if (Oq && this.keep(Aq, lq, Oq.Fc), 0 === (null === (xq = uq) || void 0 === xq ? void 0 : xq.count)) continue;
          this.binder.bind(qq, lq, cq, this.slots.bindGroup, Aq.slot * JY);
          const Bq = 5 * Aq.slot;
          if ("indirect" === Yq) {
            lq.indexBuffer ? qq.drawIndexedIndirect(this.argsBuffer, 4 * Bq) : qq.drawIndirect(this.argsBuffer, 4 * Bq);
            continue
          }
          const Wq = this.args;
          uq ? fO(qq, null !== lq.indexBuffer, Wq, Bq, uq) : lq.indexBuffer ? qq.drawIndexed(Wq[Bq], Wq[Bq + 1], Wq[Bq + 2], 0, 0) : qq.draw(Wq[Bq], Wq[Bq + 1], Wq[Bq + 2], 0)
        }
        Oq && (Oq.stale = mq)
      }
      keep(qq, Eq, gq) {
        qq.recorded = !0, qq.pipelineKey = Eq.pipelineKey, qq.materialGroup = Eq.material.bindGroup, qq.vertexBuffers.length = 0, qq.vertexBuffers.push(...Eq.vertexBuffers), qq.vertexOffsets = Eq.vertexOffsets, qq.indexBuffer = Eq.indexBuffer, qq.indexFormat = Eq.indexFormat;
        for (const Yq of Eq.vertexBuffers) gq.add(Yq);
        Eq.indexBuffer && gq.add(Eq.indexBuffer), gq.add(Eq.material.buffer);
        for (const Yq of Eq.material.bound) Yq && gq.add(Yq)
      }
      createRecord(qq) {
        let Eq = this.freeSlots.pop();
        return void 0 === Eq && (Eq = this.slotCount++, this.grow()), {
          unit: qq,
          slot: Eq,
          mJ: void 0 !== (0, bO.l)(qq.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.mJ.stale = !0), 5 * this.slotCount > this.args.length) {
          const qq = new Uint32Array(2 * this.args.length);
          qq.set(this.args), this.args = qq, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function fO(qq, Eq, gq, Yq, lq) {
      const Oq = gq[Yq + 1],
        mq = lq.data;
      for (let xq = 0; xq < lq.count; xq++) {
        const lq = Math.min(mq[2 * xq], Oq),
          Aq = Math.min(mq[2 * xq + 1], Oq - lq);
        0 !== Aq && (Eq ? qq.drawIndexed(gq[Yq], Aq, gq[Yq + 2], 0, lq) : qq.draw(gq[Yq], Aq, gq[Yq + 2], lq))
      }
    }

    function MO(qq, Eq) {
      if (qq.pipelineKey !== Eq.pipelineKey || qq.materialGroup !== Eq.material.bindGroup || qq.indexBuffer !== Eq.indexBuffer || qq.indexFormat !== Eq.indexFormat || qq.vertexOffsets !== Eq.vertexOffsets || qq.vertexBuffers.length !== Eq.vertexBuffers.length) return !1;
      for (let gq = 0; gq < qq.vertexBuffers.length; gq++)
        if (qq.vertexBuffers[gq] !== Eq.vertexBuffers[gq]) return !1;
      return !0
    }

    function TO(qq, Eq) {
      return Cl(qq.draw, Eq.draw)
    }
    const zO = new WeakMap,
      SO = {
        depth: !1,
        sunShadow: !1
      };

    function pO(qq, Eq) {
      let gq = zO.get(qq);
      gq || (gq = new Map, zO.set(qq, gq));
      const Yq = `${Eq.depth?"-depth":""}${Eq.sunShadow?"-shadow":""}${Eq.shadowMask?"-mask":""}`;
      let lq = gq.get(Yq);
      if (!lq) {
        const Oq = [{
          binding: hE.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: hE.e
          }
        }, {
          binding: hE.v,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        Eq.depth && Oq.push({
          binding: hE.l,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Eq.sunShadow && Oq.push(... function() {
          const qq = GPUShaderStage.FRAGMENT,
            Eq = hE.n;
          return [{
            binding: Eq.uniform,
            visibility: qq,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: Eq.dW,
            visibility: qq,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Eq.special,
            visibility: qq,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Eq.volume,
            visibility: qq,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: Eq.sampler,
            visibility: qq,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: Eq.entities,
            visibility: qq,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Eq.entityGrids,
            visibility: qq,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), Eq.shadowMask && Oq.push({
          binding: hE.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), lq = qq.createBindGroupLayout({
          label: `${Eq.depth?"terrain-":""}shader-pack-inputs${Yq}`,
          entries: Oq
        }), gq.set(Yq, lq)
      }
      return lq
    }

    function GO(qq) {
      return pO(qq, SO)
    }

    function LO(qq, Eq) {
      if (!Eq) return !1;
      const gq = (0, nE.i)(qq);
      return !!gq && Sg(gq, Eq)
    }

    function JO(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!cY(Eq)) return [];
      return [pO(qq, {
        depth: lY(Eq.packVariant),
        sunShadow: LO(Eq.packVariant, gq),
        shadowMask: Yq
      })]
    }
    class kO {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = qq, this.sunShadow = gq, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(hE.e), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = qq.createBuffer({
          label: "shader-pack-inputs",
          size: hE.e,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Yq = (0, hE.x)(Eq);
        this.textures = qq.createBuffer({
          label: "shader-pack-textures",
          size: Yq.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), qq.queue.writeBuffer(this.textures, 0, Yq), this.bindGroup = qq.createBindGroup({
          label: "shader-pack-inputs",
          layout: GO(qq),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: hE.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: hE.v,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(qq, Eq, gq) {
        (0, hE.D)(this.data, {
          seconds: qq.seconds(),
          lit: gq,
          renderOffset: qq.renderOffset(),
          vqq: qq.vqq(),
          eyePosition: Eq,
          shadowDirection: qq.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Yq = Eq ? this.sunShadow : null;
        if ((Eq || gq) && !Yq) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!qq && !Yq) return this.bindGroup;
        (qq && qq !== this.depthView || gq && gq !== this.maskView) && (this.depthView = null !== qq && void 0 !== qq ? qq : this.depthView, this.maskView = null !== gq && void 0 !== gq ? gq : this.maskView, this.groups.clear());
        const lq = (qq ? 1 : 0) | (Yq ? 2 : 0) | (gq ? 4 : 0);
        let Oq = this.groups.get(lq);
        if (!Oq) {
          const Eq = this.entries();
          qq && Eq.push({
            binding: hE.l,
            resource: qq
          }), Yq && Eq.push(...Yq.entries()), gq && Eq.push({
            binding: hE.r,
            resource: gq
          }), Oq = this.device.createBindGroup({
            label: `${qq||gq?"terrain-":""}shader-pack-inputs${qq?"-depth":""}${Yq?"-shadow":""}${gq?"-mask":""}`,
            layout: pO(this.device, {
              depth: !!qq,
              sunShadow: !!Yq,
              shadowMask: !!gq
            }),
            entries: Eq
          }), this.groups.set(lq, Oq)
        }
        return Oq
      }
      bind(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        qq.setBindGroup(hE.c, this.bindGroupFor(Eq, gq, Yq))
      }
    }

    function RO(qq, Eq, gq) {
      if (qq.gpuVersion === Eq.gpuBuffersVersion) return !0;
      let Yq;
      do {
        if (Yq = Eq.gpuBuffersVersion, !UO(qq, Eq, gq)) return !1
      } while (Eq.gpuBuffersVersion !== Yq);
      return qq.gpuVersion = Yq, qq.fitInstances = 0, !0
    }

    function UO(qq, Eq, gq) {
      let Yq = null;
      for (let Oq = 0; Oq < qq.slotData.length; Oq++) {
        var lq;
        const mq = qq.slotData[Oq],
          xq = mq ? Eq.gpuBuffer(mq) : gq;
        if (!xq) return !1;
        mq && qq.layout.instanceEnds[Oq] < 0 && Eq.cover(mq, Number.POSITIVE_INFINITY), qq.buffers[Oq] = xq;
        const Aq = qq.K4[Oq] + (mq ? Eq.gpuOffset(mq) : 0);
        Aq !== (null !== (lq = Yq) && void 0 !== lq ? lq : qq.offsets)[Oq] && (Yq ??= qq.offsets.slice(), Yq[Oq] = Aq), qq.ends[Oq] = mq ? Eq.gpuEnd(mq) : xq.size
      }
      return Yq && (qq.offsets = Yq), !0
    }

    function FO(qq, Eq, gq, Yq) {
      if (Eq <= qq.fitInstances) return null;
      const {
        layout: lq,
        ends: Oq,
        offsets: mq,
        slotData: xq,
        K4: Aq
      } = qq;
      let cq = !1;
      for (let uq = 0; uq < lq.buffers.length; uq++) {
        const qq = lq.instanceEnds[uq];
        if (qq < 0) continue;
        const Yq = (Eq - 1) * lq.buffers[uq].arrayStride + qq;
        if (Oq[uq] - mq[uq] < Yq) return {
          index: uq,
          needed: Yq
        };
        const Bq = xq[uq];
        Bq && gq.cover(Bq, Aq[uq] + Yq) && (cq = !0)
      }
      return cq && RO(qq, gq, Yq), qq.fitInstances = Eq, null
    }
    var sO = gq(37803),
      XO = gq(37828);
    const wO = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      KO = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      CO = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      IO = `((vertexInputs.aPackedLightLevels >> 16u) | ${AE.c.placed}u)`,
      eO = "u32(vertexInputs.aShaderPackItem.x)",
      DO = `${AE.c.lifeform}u`;

    function qm(qq) {
      return "item" === qq.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Em = "bloxdSpEnchant",
      gm = "floor(finalWorld[3].xyz)";

    function Ym(qq, Eq, gq) {
      return "placed" === Eq.kind && qq.reads[gq].includes("bloxdFragmentBlockPosition")
    }

    function lm(qq, Eq) {
      let [gq, Yq] = qq;
      return gq === Eq.point && Yq === Eq.code
    }

    function Om(qq, Eq) {
      var gq, Yq, lq;
      const Oq = null === (gq = qq.find((qq => qq.texture))) || void 0 === gq ? void 0 : gq.texture,
        mq = null === (Yq = qq.find((qq => qq.enchantTier))) || void 0 === Yq ? void 0 : Yq.enchantTier,
        xq = null === (lq = qq.find((qq => qq.overlay))) || void 0 === lq ? void 0 : lq.overlay,
        Aq = xq ? Eq.filter((qq => lm(qq, xq))).length : 0;
      return xq && 1 === Aq ? {
        texture: Oq,
        overlay: xq,
        enchantTier: mq
      } : {
        texture: Oq,
        enchantTier: mq
      }
    }

    function mm(qq) {
      if ("item" === qq.kind) {
        return {
          vertexFlags: `(${eO} & 0xffffu)`,
          varying: "vPackItem",
          value: eO,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return qq.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: IO,
        varying: "vPackFlags",
        value: IO,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function xm(qq) {
      return "lifeform" === qq.kind ? DO : "0u"
    }

    function Am(qq) {
      return !!qq.BLOXD_PLUGIN_ENCHANTMENT
    }

    function cm(qq, Eq) {
      const {
        enchantTier: gq
      } = Eq;
      return gq && Am(Eq.defines) && "lifeform" === Eq.kind && Vm(qq, "enchantTier") ? gq : null
    }

    function um(qq, Eq) {
      return Am(Eq.defines) && Vm(qq, "enchantSpeed")
    }

    function Bm(qq) {
      const {
        overlay: Eq,
        defines: gq
      } = qq;
      if (!Eq || !gq.DIFFUSE) return null;
      const Yq = gq.VERTEXCOLOR || gq.INSTANCESCOLOR && gq.INSTANCES;
      return `vec4f(${Eq.colour}.rgb * uniforms.vDiffuseInfos.y${Yq?" * fragmentInputs.vColor.rgb":""}, ${Eq.colour}.a)`
    }
    const Wm = "fragmentInputs.vPackTexture";

    function Nm(qq) {
      const {
        atlas: Eq,
        defines: gq,
        texture: Yq
      } = qq;
      if (Eq || !gq.DIFFUSE) return null;
      if (Yq) return {
        texture: "diffuseSampler",
        ...Yq
      };
      const lq = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===gq.DIFFUSEDIRECTUV?"vMainUV1":2===gq.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== qq.kind) return lq;
      if (!gq.BLOXD_PLUGIN_ANIMATED) return {
        ...lq,
        id: Wm
      };
      const Oq = yq.d.WGSL,
        mq = (0, yq.Eb)(Oq, "uAnimStatesNum"),
        xq = (0, yq.cb)(Oq, (0, sO.g)(Oq), mq),
        Aq = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${mq})`,
        layers: [xq],
        uv: `vec2f(${Aq}.x, ${Aq}.y * ${mq} - ${xq})`,
        levelUv: Aq,
        id: Wm
      }
    }

    function am(qq, Eq) {
      return "box" === Eq.kind && !!qq.hooks.surface && null !== Nm(Eq)
    }

    function Vm(qq, Eq) {
      return qq.reads.fragment.includes(Eq)
    }

    function dm(qq) {
      return !!qq.BLOXD_LIGHTING && !qq.BLOXD_UNLIT
    }

    function jm(qq, Eq, gq, Yq) {
      const lq = qq.filter((qq => {
        let [gq, Yq] = qq;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === gq && Yq === Eq
      }));
      if (1 !== lq.length) throw new Error(`A model program for shader packs has ${0===lq.length?"no":"more than one"} ${Yq} code before fog (lite/modelShaderPack.ts)`);
      return qq.map((qq => qq === lq[0] ? [qq[0], gq] : qq))
    }

    function Hm(qq, Eq, gq, Yq) {
      const {
        hooks: lq
      } = qq, {
        kind: Oq,
        defines: mq
      } = Eq, xq = [...gq];
      var Aq;
      Eq.atlas && lq.surface && xq.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Ug("atlasIdxIn")]), "item" === Oq && xq.push(["CUSTOM_VERTEX_DEFINITIONS", (0, yq.g)(yq.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), am(qq, Eq) && xq.push(["CUSTOM_VERTEX_DEFINITIONS", (0, yq.g)(yq.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Aq = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${kg}[min(u32(${Aq}) - 1u, arrayLength(&${kg}) - 1u)], ${Aq} > 0.5);\n`)]);
      const cq = mm(Eq);
      cq && (lq.surface || lq.light) && xq.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${cq.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${cq.varying} = ${cq.value};`]);
      let uq = Yq;
      if (Ym(qq, Eq, "fragment") && (xq.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${gm});`]), uq = [...uq, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Vm(qq, "localPosition") && xq.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${qm(Eq)};`]), Am(mq) && lq.surface) {
        um(qq, Eq) && xq.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const gq = cm(qq, Eq);
        gq && xq.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${gq});`]);
        const Yq = (0, yq.qb)(yq.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        uq = [...jm(uq, (0, XO.i)(yq.d.WGSL), Yq, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, XO.c)(Em)]]
      }
      const {
        overlay: Bq
      } = Eq;
      Bq && Bm(Eq) && lq.surface && (uq = uq.filter((qq => !lm(qq, Bq))));
      const Wq = lq.light ? function(qq) {
        return "placed" === qq.kind ? {
          name: "terrain",
          engine: (0, tE.R)(yq.d.WGSL),
          pack: (0, tE.ib)(yq.d.WGSL)
        } : qq.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, tE.I)(yq.d.WGSL),
          pack: (0, tE.cb)(yq.d.WGSL)
        } : null
      }(Eq) : null;
      if (Wq && (uq = jm(uq, Wq.engine, Wq.pack, `${Wq.name} light`), "placed" !== Oq && dm(mq))) {
        const qq = mq.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, yq.Eb)(yq.d.WGSL, "uEntityLightLevels") : (0, yq.Ib)(yq.d.WGSL, "aLightLevels");
        xq.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${tE.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, tE.gb)(yq.d.WGSL, qq)])
      }
      return {
        vertexCode: xq,
        fragmentCode: uq
      }
    }

    function om(qq, Eq, gq, Yq) {
      return Tg(qq, Eq, gq, Yq, "model")
    }
    const Pm = "\t@builtin(position) position: vec4f,\n";

    function Qm(qq, Eq) {
      const gq = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(qq)[0];
      return `${gq}${Eq}${qq.slice(gq.length)}`
    }

    function ym(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: lq
      } = Eq, Oq = Sg(Eq, Yq), {
        kind: mq,
        defines: xq
      } = gq, Aq = function(qq, Eq) {
        var gq, Yq, lq;
        const {
          defines: Oq
        } = Eq, mq = mm(Eq), xq = !!Oq.FOG, Aq = Am(Oq), cq = null !== (gq = null === mq || void 0 === mq ? void 0 : mq.enchantTier) && void 0 !== gq ? gq : cm(qq, Eq) ? "fragmentInputs.vPackEnchantTier" : "0u", uq = "lifeform" === Eq.kind && !Oq.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Yq = null === mq || void 0 === mq ? void 0 : mq.vertexFlags) && void 0 !== Yq ? Yq : xm(Eq),
          vertexLocalPosition: qm(Eq),
          flags: null !== (lq = null === mq || void 0 === mq ? void 0 : mq.flags) && void 0 !== lq ? lq : xm(Eq),
          normal: "normalW",
          alpha: uq ? "alpha * baseColor.a" : "alpha",
          alphaOut: uq ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: xq ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: xq ? "1.0 - fog" : "0.0",
          enchantTier: cq,
          enchantColour: Aq ? `${Em}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: um(qq, Eq) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Vm(qq, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Bm(Eq)
        }
      }(Eq, gq), cq = qq.textures.filter((qq => /^textureAtlas\d+$/.test(qq.name))).length, uq = gq.atlas && cq > 0 ? {
        count: cq,
        layers: gq.atlas.layers,
        width: gq.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: qq.material.slots.has("uAnimDataPerTex") ? (Eq, gq) => hY(Eq, gq, function(qq) {
          const Eq = qq.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            SB: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: qq => `uniforms.uAnimDataPerTex[${qq}]${Eq}`
          }
        }(qq)) : null
      } : null, Bq = "placed" === mq ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Wq = null !== uq && void 0 !== uq ? uq : Nm(gq), Nq = function(qq, gq) {
        let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,hE.B)()}${Gg(Eq,gq)}${Yq}${sg(qq)}${Zg}${Bq}${Eq.code}`
      };
      let {
        vertex: aq,
        fragment: Vq
      } = qq;
      const dq = wg(lq, Aq);
      if (dq) {
        const qq = Ym(Eq, gq, "vertex") ? `\tbloxdSpCell = ${gm};\n` : "";
        aq = om(aq, wO, `${qq}${dq.slice(1)}${wO}`, "vertex")
      }
      const jq = `${Lg(Eq,Oq,function(qq,Eq){return Eq.TWOSIDEDLIGHTING?qq:`select(-(${qq}), ${qq}, fragmentInputs.frontFacing)`}(Aq.normal,xq),Aq.flags)}${Kg(lq,Eq.strict,Eq.program,Wq,Aq)}`;
      jq && (Vq = om(Vq, KO, `${jq.slice(1)}${KO}`, "surface")), Oq && Eq.sunShadow && !xq.TWOSIDEDLIGHTING && (Vq = om(Vq, Pm, `${Pm}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Hq = eg(lq);
      if (Hq) {
        const qq = Ig(lq, dm(xq), !0, Aq);
        Vq = om(Vq, CO, `${qq}${Hq.slice(1)}${CO}`, "light")
      }
      const oq = am(Eq, gq) ? Rg : "";
      return {
        ...qq,
        vertex: Qm(aq, Nq(uq, !1, oq)),
        fragment: Qm(Vq, Nq(Wq, Oq))
      }
    }
    const tm = {
      name: "earthSky",
      uniqueId: -1
    };
    class rm {
      constructor(qq) {
        this.resources = qq, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const qq of this.instances.values()) qq.released = !0, this.resources.destroyBuffer(qq.buffer);
        this.instances.clear()
      }
    }

    function hm(qq) {
      return qq.failed && null !== qq.packGroup
    }
    class nm {
      constructor(qq, Eq, gq) {
        this.device = qq, this.resources = Eq, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.W4 = new nO, this.modelMeshes = new hO, this.thinBundle = void 0, this.binder = new wl, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new VO((qq => this.modelSlot(qq).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, cE.e)("Lite: "), this.renderStates = new uO(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (qq, Eq) => this.keepSteady(qq, Eq), this.lists = new Kl(this.modelMeshes, this.W4, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new mO(Eq, this.warnOnce, ((qq, Eq, gq) => this.programWithModel(qq, Eq, gq)), hm), this.vertexLayouts = new oO(Eq, qq.limits, this.warnOnce), this.sceneLayout = EE(qq), this.frameLayout = qq.createBindGroupLayout({
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
        }), this.frameBuffer = qq.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new yO(qq, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = qq.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new ZO(qq, new yO(qq, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (qq, Eq, gq) => this.pipelineFor(qq, Eq, gq),
          pipelineCompiling: (qq, Eq) => !qq.program.failed && !1 !== this.pipelines.get(`${qq.pipelineKey}|${Eq}`),
          sceneGroup: qq => {
            const Eq = gq(qq);
            return Eq || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), Eq
          }
        }), Eq.onDestroy = qq => {
          this.thinBundle.resourceDestroyed(qq)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const lq = {
          order: qq,
          isTransparent: Eq,
          _direct: !Eq,
          bind: (qq, Eq) => this.createBinding(lq, Eq, gq, Yq)
        };
        return lq
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(qq, Eq, gq) {
        var Yq;
        let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = Eq, this.drawDefines.view = Eq, this.thinBundle.Qr(), this.writeFrameUniforms();
        const Oq = null !== (Yq = null === lq || void 0 === lq ? void 0 : lq.defineFor("model")) && void 0 !== Yq ? Yq : 0;
        this.drawDefines.modelPackVariant = Oq, lq && 0 !== Oq && (this.packInputs ??= new kO(this.device, lq.textureLayers(), this.sunShadow), this.packInputs.write(lq, Eq.eye, lq.VV())), this.lists.clear(), this.slotCount = 0;
        const mq = qq.activeCamera;
        this.W4.select(mq, this.keepSteadyBase), this.modelMeshes.select(mq, Eq), gq && this.pushEarthSky(gq), this.lists.collect(qq), this.thinBundle.Kr(), this.uploadMeshSlots()
      }
      pushDraws(qq, Eq, gq, Yq, lq, Oq) {
        let mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const xq = Oq.length;
        for (let Aq = 0; Aq < gq; Aq++) {
          const gq = Eq[Aq];
          let xq = this.retainedDraw(qq, gq, Yq, lq);
          if (void 0 === xq && (xq = this.drawFor(qq, gq, Yq, lq), this.retain(gq, xq)), xq) {
            const qq = gq.owner,
              Eq = mq ? mq[Aq] : -1;
            xq.slotOffset = Eq < 0 ? this.writeMeshSlot(qq.getWorldMatrix().m, qq.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[Eq], 16 * Eq), Oq.push(xq)
          }
        }
        return Oq.length - xq
      }
      bundleDraws(qq, Eq, gq) {
        let Yq = 0;
        for (const lq of Eq) {
          let Eq = this.retainedDraw(qq, lq, gq, !1);
          const Oq = void 0 !== Eq;
          if (void 0 === Eq && (Eq = this.drawFor(qq, lq, gq, !1), this.retain(lq, Eq)), Eq) {
            const qq = lq.owner,
              gq = this.thinBundle.add(lq, Eq, qq.getWorldMatrix().m, qq.visibility);
            Oq && this.steadyFrom(lq, Eq, gq), Yq++
          }
        }
        return Yq
      }
      steadyFrom(qq, Eq, gq) {
        const Yq = qq.owner,
          lq = this.W4.base(Yq),
          Oq = Yq.material,
          {
            drawState: mq,
            instance: xq
          } = Eq.inputs.retained;
        if (!lq || !Oq || 1 !== qq.parts.materials.length || rO(qq) !== Oq) return;
        const Aq = lq.steady ??= {
          unit: qq,
          material: Oq,
          visibility: 1,
          draw: Eq,
          record: gq,
          drawState: mq,
          instance: xq,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Aq.unit = qq, Aq.material = Oq, Aq.visibility = Yq.visibility, Aq.draw = Eq, Aq.record = gq, Aq.drawState = mq, Aq.instance = xq, Aq.bindGroup = xq.bindGroup, Aq.gpuVersion = this.resources.gpuBuffersVersion, Aq.fitInstances = Eq.inputs.fitInstances, Aq.worldFlag = Yq.getWorldMatrix().updateFlag, Aq.handedFrame = this.frame
      }
      keepSteady(qq, Eq) {
        const gq = qq.steady;
        if (gq.handedFrame !== this.frame - 1 || (this.frame + gq.phase) % 8 === 0) return !1;
        const Yq = qq.mesh,
          {
            unit: lq,
            draw: Oq,
            instance: mq,
            drawState: xq
          } = gq,
          Aq = Yq.forcedInstanceCount || Yq.o5;
        if (!Yq.isVisible || Yq.olq || Yq.visibility !== gq.visibility || 0 === (Yq.layerMask & Eq.layerMask) || Yq.material !== gq.material || 0 !== Yq.renderingGroupId || Yq.hasVertexAlpha || !this.drawDefines.definesHold(xq, lq, xq.instancing) || gq.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Oq.inputs, lq, xq.instancing, Oq.program) || Oq.program.failed || mq.released || Aq <= 0 || Aq > gq.fitInstances) return !1;
        if (mq.frame !== this.frame && this.bindMaterial(mq, this.modelUniforms.refreshModelUniforms(Yq.ZJ(), mq, mq.model, this.view)), !mq.bindable || mq.bindGroup !== gq.bindGroup) return !1;
        const cq = Yq.computeWorldMatrix(),
          uq = cq.updateFlag !== gq.worldFlag;
        return gq.worldFlag = cq.updateFlag, Oq.instances = Aq, this.thinBundle.addAgain(gq.record, Oq, uq ? cq.m : null, gq.visibility), gq.handedFrame = this.frame, this.W4.drawn++, !0
      }
      retainedDraw(qq, Eq, gq, Yq) {
        const lq = this.inputs.get(Eq),
          Oq = null === lq || void 0 === lq ? void 0 : lq.retained;
        if (!lq || !Oq) return;
        const {
          drawState: mq,
          program: xq,
          instance: Aq,
          instancing: cq
        } = Oq, uq = Eq.owner;
        if (qO(uq) !== cq) return;
        const Bq = this.instanceCount(uq, cq);
        if (Bq <= 0) return null;
        if (Aq.released || xq.failed || mq.program !== xq || !this.drawDefines.programCurrent(mq, Eq, cq, gq) || !this.inputsStamped(lq, Eq, cq, xq) || uq.isUnIndexed !== Oq.unIndexed || this.indexKey(Eq) !== Oq.indexData) return;
        if (Oq.indexBuffer && Oq.gpuVersion !== this.resources.gpuBuffersVersion) {
          const qq = this.resources.gpuBuffer(Oq.indexData);
          if (!qq) return;
          Oq.indexBuffer = qq, Oq.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Wq = !1;
        if (Aq.frame !== this.frame && (Wq = this.modelUniforms.refreshModelUniforms(qq, Aq, Aq.model, this.view)), !this.bindMaterial(Aq, Wq) || !this.withGpuBuffers(lq) || !this.instanceBuffersFit(uq.name, lq, Bq)) return null;
        const Nq = this.makeDraw(xq, lq, this.renderStates.renderState(mq.model, uq, Yq, lq.state), Aq, Bq);
        return this.setRange(Nq, Eq, Oq.indexBuffer, Oq.indexData), Nq
      }
      retain(qq, Eq) {
        const gq = this.drawDefines.drawStates.get(qq);
        if (!Eq || !gq || gq.program !== Eq.program) {
          const Eq = this.inputs.get(qq);
          return void(Eq && (Eq.retained = null))
        }
        const Yq = qq.owner,
          lq = gq.instancing,
          Oq = this.indexKey(qq),
          mq = Eq.inputs.retained;
        mq ? (mq.drawState = gq, mq.instancing = lq, mq.program = Eq.program, mq.instance = Eq.material, mq.indexData = Oq, mq.unIndexed = Yq.isUnIndexed, mq.indexBuffer = Eq.indexBuffer, mq.gpuVersion = this.resources.gpuBuffersVersion) : Eq.inputs.retained = {
          drawState: gq,
          instancing: lq,
          program: Eq.program,
          instance: Eq.material,
          indexData: Oq,
          unIndexed: Yq.isUnIndexed,
          indexBuffer: Eq.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(qq, Eq, gq, Yq) {
        const lq = Eq.owner,
          Oq = rO(Eq);
        if (!Oq) return null;
        const mq = Oq.getClassName();
        let xq = null;
        if (function(qq) {
            return "LinesMesh" === qq.getClassName()
          }(lq)) {
          if (! function(qq) {
              return "ShaderMaterial" === qq.getClassName() && "color" === qq.shaderPath
            }(Oq)) return this.warnOnce(`lines:${mq}`, `A LinesMesh with a ${mq} is not drawn yet (${Oq.name})`), null;
          xq = lq
        } else if ("StandardMaterial" !== mq && "LiteMaterial" !== mq) return this.warnOnce(`class:${mq}`, `${mq} is not drawn yet (${Oq.name})`), null;
        const Aq = qO(lq),
          cq = this.instanceCount(lq, Aq);
        if (cq <= 0) return null;
        const uq = xq ? this.lineProgramFor(lq, gq, Aq) : this.drawDefines.programFor(qq, Eq, Oq, gq, Aq);
        if (!uq || uq.failed) return null;
        const Bq = xq ? null : this.drawDefines.drawStates.get(Eq).model,
          Wq = Bq ? this.modelInstance(Bq, uq) : this.materialInstance(lq, uq);
        let Nq = !1;
        if (Wq.frame !== this.frame && (xq ? Hq(Wq.ubo, xq) : Nq = this.modelUniforms.refreshModelUniforms(qq, Wq, Wq.model, this.view)), !this.bindMaterial(Wq, Nq)) return null;
        const aq = this.meshInputs(Eq, uq, Aq);
        if (!aq || !this.instanceBuffersFit(lq.name, aq, cq)) return null;
        const Vq = this.indexKey(Eq);
        let dq = null;
        if (Vq && !lq.isUnIndexed && (dq = this.resources.gpuBuffer(Vq), !dq)) return null;
        const jq = this.renderStates.renderState(null !== Bq && void 0 !== Bq ? Bq : Oq, lq, Yq, aq.state, xq ? "line-list" : "triangle-list"),
          oq = this.makeDraw(uq, aq, jq, Wq, cq);
        return this.setRange(oq, Eq, dq, Vq), oq
      }
      indexKey(qq) {
        const Eq = lO(qq);
        return Eq ? this.resources.modelIndex(Eq) : null
      }
      setRange(qq, Eq, gq, Yq) {
        gq && (qq.indexBuffer = gq, qq.indexFormat = this.resources.indexFormat(Yq));
        const lq = 4 * Eq.range + (gq ? 0 : 2);
        qq.unit = Eq, qq.first = Eq.parts.zV[lq], qq.count = Eq.parts.zV[lq + 1]
      }
      makeDraw(qq, Eq, gq, Yq, lq) {
        Eq.state !== gq && (Eq.state = gq, Eq.pipelineKey = `${qq.id}|${Eq.layout.key}|${gq.key}`, Eq.pipeline = null);
        const Oq = Eq.draw ??= {
          program: qq,
          inputs: Eq,
          pipelineKey: "",
          layout: Eq.layout,
          state: gq,
          material: Yq,
          slotOffset: 0,
          vertexBuffers: Eq.buffers,
          vertexOffsets: Eq.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: lq,
          unit: null
        };
        return Oq.program = qq, Oq.pipelineKey = Eq.pipelineKey, Oq.state = gq, Oq.material = Yq, Oq.vertexOffsets = Eq.offsets, Oq.indexBuffer = null, Oq.instances = lq, Oq
      }
      instanceCount(qq, Eq) {
        switch (Eq) {
          case "thin":
            return qq.forcedInstanceCount || qq.o5;
          case "instanced":
            return this.prepareInstances(qq);
          case "none":
            return 1
        }
      }
      prepareInstances(qq) {
        const Eq = function(qq, Eq) {
          const gq = Eq._userInstancedBuffersStorage,
            Yq = qq.batchUploads.get(Eq);
          if (Yq) {
            var lq;
            if (Yq.layout === (null !== (lq = null === gq || void 0 === gq ? void 0 : gq.interleavedKinds) && void 0 !== lq ? lq : null)) return Yq;
            Yq.release()
          }
          return new sq(qq, Eq, gq)
        }(this.resources, qq);
        return Eq.frame !== this.frame && Eq.pack(qq, this.modelMeshes.instanceBatch(qq), this.modelMeshes.worlds, this.frame), Eq.count
      }
      programWithModel(qq, Eq, gq) {
        const Yq = this.modelSlot(qq),
          lq = xO(Yq, qq, gq),
          Oq = this.drawDefines.modelPackKind(qq),
          mq = Oq ? function(qq, Eq, gq, Yq) {
            const lq = (0, vq.u)(qq, tq.j.name),
              Oq = [];
            for (const {
                feature: Aq,
                state: cq,
                active: uq
              }
              of qq.features) {
              var mq, xq;
              const qq = uq ? null === (mq = (xq = (0, uE.k)(Aq)).pN) || void 0 === mq ? void 0 : mq.call(xq, cq) : void 0;
              qq && Oq.push(qq)
            }
            return {
              kind: Eq,
              atlas: null !== lq && void 0 !== lq && lq.active ? (0, tq.d)(lq.state) : null,
              defines: gq,
              ...Om(Oq, Yq)
            }
          }(qq, Oq, Eq, Yq.fragmentCode) : null;
        if (mq && function(qq) {
            const Eq = qq.defines;
            return (null === qq.atlas || !!Eq.DIFFUSE && 1 === Eq.DIFFUSEDIRECTUV) && !!Eq.NORMAL && !Eq.REFLECTION && !Eq.EMISSIVEASILLUMINATION && !Eq.LINKEMISSIVEWITHDIFFUSE
          }(mq)) {
          const gq = this.modelPackProgram(qq, Eq, `${lq}#${Oq}#sp${this.drawDefines.modelPackVariant}`, Yq, mq);
          if (gq && !gq.failed) return gq
        }
        const xq = this.programs.get(lq);
        if (xq || this.unbuildable.has(lq)) return null !== xq && void 0 !== xq ? xq : null;
        let Aq;
        try {
          Aq = xl({
            defines: gO(Eq),
            vertexCode: Yq.vertexCode,
            fragmentCode: Yq.fragmentCode,
            pluginUniforms: Yq.pluginUniforms
          })
        } catch (cq) {
          return this.unbuildable.add(lq), this.warnOnce(`build:${lq}`, `could not build a program for ${qq.name}: ${String(cq)}`), null
        }
        return this.createProgram(lq, Aq, "standard")
      }
      modelPackProgram(qq, Eq, gq, Yq, lq) {
        const Oq = this.programs.get(gq);
        if (Oq || this.unbuildable.has(gq)) return null !== Oq && void 0 !== Oq ? Oq : null;
        const mq = this.drawDefines.modelPackVariant;
        let xq;
        try {
          const qq = function(qq) {
              return (0, nE.e)(qq, "model")
            }(mq),
            gq = Hm(qq, lq, Yq.vertexCode, Yq.fragmentCode);
          xq = ym(xl({
            defines: gO(Eq),
            ...gq,
            pluginUniforms: Yq.pluginUniforms
          }), qq, lq, !!this.sunShadow)
        } catch (uq) {
          return this.unbuildable.add(gq), this.warnOnce(`build:${gq}`, `could not build a shader pack program for ${qq.name}, which draws without the pack: ${String(uq)}`), null
        }
        const Aq = LO(mq, !!this.sunShadow),
          cq = {
            group: this.packInputs.bindGroupFor(null, Aq),
            layout: pO(this.device, {
              depth: !1,
              sunShadow: Aq
            })
          };
        return this.createProgram(gq, xq, function(qq) {
          return `standard-sp${qq}`
        }(mq), cq)
      }
      lineProgramFor(qq, Eq, gq) {
        const Yq = jq(qq, gq, Eq, this.view);
        let lq = this.linePrograms.get(Yq);
        var Oq;
        return lq || (lq = this.createProgram(`lines#${Yq}`, (Oq = function(qq) {
          const Eq = new Map;
          for (let gq = 0; gq < cq.length; gq++) qq & 1 << gq && Eq.set(cq[gq], !0);
          return Eq
        }(Yq), Bl({
          defines: Oq,
          vertex: cl,
          fragment: ul,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Yq, lq)), lq
      }
      createProgram(qq, Eq, gq) {
        var Yq;
        let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Oq = this.nextProgramId++,
          mq = `${gq}-${Oq}`,
          xq = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Aq = [{
            binding: 0,
            visibility: xq,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Bq of Eq.textures) Aq.push({
          binding: Bq.binding,
          visibility: xq,
          texture: {
            viewDimension: Bq.dimension
          }
        }), Aq.push({
          binding: Bq.samplerBinding,
          visibility: xq,
          sampler: {}
        });
        const cq = this.device.createBindGroupLayout({
            label: mq,
            entries: Aq
          }),
          uq = {
            key: qq,
            id: Oq,
            kind: gq,
            program: Eq,
            vertex: this.device.createShaderModule({
              label: `${mq}-vertex`,
              code: Eq.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${mq}-fragment`,
              code: Eq.fragment
            }),
            materialLayout: cq,
            pipelineLayout: this.device.createPipelineLayout({
              label: mq,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, cq, ...lq ? [lq.layout] : []]
            }),
            packGroup: null !== (Yq = null === lq || void 0 === lq ? void 0 : lq.group) && void 0 !== Yq ? Yq : null,
            failed: !1
          };
        return this.programs.set(qq, uq), uq
      }
      writeFrameUniforms() {
        const qq = this.frameUniforms;
        aO(this.view, qq), this.device.queue.writeBuffer(this.frameBuffer, 0, qq)
      }
      materialInstance(qq, Eq) {
        let gq = this.materials.get(qq);
        if (!gq) {
          const Eq = new Map;
          this.materials.set(qq, Eq), qq.MJ.addOnce((() => {
            for (const qq of Eq.values()) qq.released = !0, this.resources.destroyBuffer(qq.buffer);
            this.materials.delete(qq)
          })), gq = Eq
        }
        let Yq = gq.get(Eq.key);
        return Yq || (Yq = this.newMaterialInstance(qq, null, Eq), gq.set(Eq.key, Yq)), Yq
      }
      modelInstance(qq, Eq) {
        const gq = this.modelSlot(qq);
        let Yq = gq.instances.get(Eq.key);
        return Yq || (Yq = this.newMaterialInstance(qq, qq, Eq), gq.instances.set(Eq.key, Yq)), Yq
      }
      modelSlot(qq) {
        let Eq = qq.gpu[nq.f.lite];
        return Eq || (Eq = new rm(this.resources), qq.gpu[nq.f.lite] = Eq), Eq
      }
      newMaterialInstance(qq, Eq, gq) {
        const Yq = gq.program.material.floats,
          lq = new Float32Array(Yq),
          Oq = new Map;
        return {
          owner: qq,
          model: Eq,
          program: gq,
          data: lq,
          uploaded: new Float32Array(Yq).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${qq.name}-uniforms`,
            size: Math.max(16, 4 * Yq),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Oq,
          ubo: new NO(gq.program.material.slots, lq, Oq),
          bindGroup: null,
          bound: new Array(2 * gq.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(qq) {
        var Eq;
        const gq = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: dl + jl,
            fragment: dl + Hl,
            attributes: [],
            material: Vl,
            textures: []
          }, "earthSky"),
          Yq = this.earthSkyUniforms ??= this.newMaterialInstance(tm, null, gq);
        this.earthSkyFrom !== qq && (this.earthSkyFrom = qq, Yq.data.fill(0)), hl(Yq.ubo, qq, this.view);
        const lq = this.vertexInputs(gq, tm, "earthSky", gq, null);
        if (gq.failed || !lq || !this.bindMaterial(Yq, !1)) return;
        const Oq = null !== (Eq = lq.state) && void 0 !== Eq ? Eq : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          mq = this.makeDraw(gq, lq, Oq, Yq, 1);
        mq.count = Wl.length;
        const xq = nl(qq, this.view);
        mq.slotOffset = this.writeMeshSlot(xq, 1), this.lists.skyDraws.push(mq)
      }
      uploadIfChanged(qq) {
        const {
          data: Eq,
          uploaded: gq
        } = qq;
        for (let Yq = 0; Yq < Eq.length; Yq++)
          if (Eq[Yq] !== gq[Yq]) return gq.set(Eq), void this.device.queue.writeBuffer(qq.buffer, 0, Eq)
      }
      bindMaterial(qq, Eq) {
        return qq.frame !== this.frame && (qq.frame = this.frame, Eq || this.uploadIfChanged(qq), qq.bindable = this.bindTextures(qq)), qq.bindable
      }
      bindTextures(qq) {
        const {
          program: Eq,
          bound: gq
        } = qq, Yq = Eq.program.textures;
        let lq = !qq.bindGroup,
          Oq = !0;
        for (let mq = 0; mq < Yq.length; mq++) {
          const Eq = qq.textures.get(Yq[mq].name),
            xq = Eq ? this.resources.boundTexture(Eq) : null;
          xq ? gq[2 * mq] === xq.view && gq[2 * mq + 1] === xq.sampler || (gq[2 * mq] = xq.view, gq[2 * mq + 1] = xq.sampler, lq = !0) : (Eq || qq.ubo.expected.has(Yq[mq].name) || this.warnOnce(`texture:${qq.owner.name}:${Yq[mq].name}`, `${qq.owner.name} has no ${Yq[mq].name}`), Oq = !1)
        }
        if (!Oq) return lq && (qq.bindGroup = null), !1;
        if (lq) {
          const lq = [{
            binding: 0,
            resource: {
              buffer: qq.buffer
            }
          }];
          for (let qq = 0; qq < Yq.length; qq++) lq.push({
            binding: Yq[qq].binding,
            resource: gq[2 * qq]
          }), lq.push({
            binding: Yq[qq].samplerBinding,
            resource: gq[2 * qq + 1]
          });
          qq.bindGroup = this.device.createBindGroup({
            label: `${qq.owner.name}-material`,
            layout: Eq.materialLayout,
            entries: lq
          })
        }
        return !0
      }
      writeMeshSlot(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, qq, Eq, gq), this.slotCount++ * JY
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(qq, Eq, gq, Yq, lq) {
        let Oq = this.inputs.get(qq);
        if (!Oq || Oq.program !== Yq || !PO(Eq, Oq, this.resources, lq)) {
          var mq;
          if (Oq = null !== (mq = this.vertexLayouts.resolveInputs(Eq, gq, Yq, lq)) && void 0 !== mq ? mq : void 0, !Oq) return null;
          this.inputs.set(qq, Oq)
        }
        return this.withGpuBuffers(Oq)
      }
      meshInputs(qq, Eq, gq) {
        const Yq = this.inputs.get(qq);
        if (Yq && this.inputsStamped(Yq, qq, gq, Eq)) return this.withGpuBuffers(Yq);
        const lq = qq.owner,
          Oq = lO(qq),
          mq = this.vertexInputs(qq, lq, lq.name, Eq, Oq);
        return mq && (mq.geometry = OO(qq), mq.instanceLayout = this.drawDefines.instanceLayout(lq, gq)), mq
      }
      inputsStamped(qq, Eq, gq, Yq) {
        return function(qq, Eq, gq, Yq) {
          return qq.program === gq && qq.geometry === OO(Eq) && qq.instanceLayout === Yq
        }(qq, Eq, Yq, this.drawDefines.instanceLayout(Eq.owner, gq))
      }
      withGpuBuffers(qq) {
        return RO(qq, this.resources, this.zeroBuffer) ? qq : null
      }
      instanceBuffersFit(qq, Eq, gq) {
        const Yq = FO(Eq, gq, this.resources, this.zeroBuffer);
        if (Yq) {
          const lq = Eq.ends[Yq.index] - Eq.offsets[Yq.index] + Eq.K4[Yq.index];
          return this.warnOnce(`overrun:${qq}`, `${qq} draws ${gq} instances from a ${lq}-byte buffer (${Yq.needed} needed)`), !1
        }
        return !0
      }
      createBinding(qq, Eq, gq, Yq) {
        const lq = `${Eq._colorFormat}|${Eq._depthStencilFormat}|${Eq._depthCompare}|${Eq._sampleCount}`,
          Oq = mE(this.device, Eq);
        if (qq === this.skyLastRenderable) {
          let gq = null;
          return {
            renderable: qq,
            pipeline: Oq,
            draw: qq => gq ? this.drawSky(qq, Eq, lq, gq) : 0,
            update: qq => {
              gq = qq
            }
          }
        }
        return {
          renderable: qq,
          pipeline: Oq,
          draw: qq => (Yq ? Yq.execute(qq, Eq, lq) : 0) + this.drawList(qq, Eq, lq, gq)
        }
      }
      drawSky(qq, Eq, gq, Yq) {
        const lq = this.lists.skyDraws,
          Oq = lq.length > 0;
        if (Oq) {
          var mq;
          const gq = (null !== (mq = Eq._depthCompare) && void 0 !== mq ? mq : gE).startsWith("greater") ? 0 : 1;
          qq.setViewport(0, 0, Yq.targetWidth, Yq.targetHeight, gq, gq)
        }
        const xq = this.drawList(qq, Eq, gq, lq);
        return Oq && qq.setViewport(0, 0, Yq.targetWidth, Yq.targetHeight, 0, 1), xq
      }
      drawList(qq, Eq, gq, Yq) {
        let lq = 0;
        const Oq = this.binder;
        Oq.reset();
        for (const mq of Yq) {
          const Yq = this.pipelineFor(mq, Eq, gq);
          Yq && (Oq.bind(qq, mq, Yq, this.meshSlots.bindGroup, mq.slotOffset), mq.indexBuffer ? qq.drawIndexed(mq.count, mq.instances, mq.first, 0, 0) : qq.draw(mq.count, mq.instances, mq.first, 0), lq++)
        }
        return lq
      }
      pipelineFor(qq, Eq, gq) {
        var Yq, lq;
        if (qq.program.failed) return null;
        const Oq = qq.inputs;
        if (Oq.pipeline && Oq.pipelineTarget === gq) return Oq.pipeline;
        const mq = `${qq.pipelineKey}|${gq}`,
          xq = this.pipelines.get(mq);
        if (void 0 !== xq) return xq && (Oq.pipeline = xq, Oq.pipelineTarget = gq), xq || null;
        this.pipelines.set(mq, null);
        const {
          program: Aq,
          layout: cq,
          state: uq
        } = qq, Bq = {
          label: `standard-${Aq.id}`,
          layout: Aq.pipelineLayout,
          vertex: {
            module: Aq.vertex,
            entryPoint: "main",
            buffers: cq.buffers
          },
          fragment: Iq({
            module: Aq.fragment,
            entryPoint: "main"
          }, Eq, uq.blend, uq.colourWrite),
          depthStencil: Eq._depthStencilFormat ? {
            format: Eq._depthStencilFormat,
            depthCompare: null !== (Yq = null !== (lq = uq.depthCompare) && void 0 !== lq ? lq : Eq._depthCompare) && void 0 !== Yq ? Yq : gE,
            depthWriteEnabled: uq.depthWrite,
            depthBias: uq.depthBias,
            depthBiasSlopeScale: uq.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: Eq._sampleCount
          },
          primitive: {
            topology: uq.topology,
            frontFace: uq.frontFace,
            cullMode: uq.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Bq).then((qq => {
          this.compiling--, this.pipelines.set(mq, qq)
        }), (qq => {
          this.compiling--, this.reportFailure(Aq, mq, qq)
        })), null
      }
      forEachSunShadowCaster(qq) {
        const Eq = this.caster,
          gq = (gq, Yq, lq) => {
            const Oq = gq.unit && function(qq) {
              const Eq = qq.material.model;
              return null !== Eq && (Eq.lifeform || Eq.item) && Eq.castsSunShadow && "triangle-list" === qq.state.topology
            }(gq) ? lO(gq.unit) : null;
            if (!Oq) return;
            const mq = gq.unit.owner;
            switch (Eq.geometry = Oq, Eq.skip = mq.noSunShadowVertices, Eq.indexed = null !== gq.indexBuffer, Eq.first = gq.first, Eq.count = gq.count, Eq.kB = Yq, Eq.worldAt = lq, Eq.instances = null, Eq.instanceCount = 1, Eq.thin = !1, qO(mq)) {
              case "thin": {
                const qq = mq._thinInstanceDataStorage.matrixData;
                if (!qq) return;
                Eq.instances = qq, Eq.instanceCount = Math.min(gq.instances, qq.length / 16), Eq.thin = !0;
                break
              }
              case "instanced": {
                const qq = this.resources.batchUploads.get(mq);
                if (!qq || qq.frame !== this.frame || !this.writeBatchCasters(qq)) return;
                break
              }
            }
            qq(Eq)
          };
        for (const Yq of this.lists.opaqueDraws) gq(Yq, this.meshSlots.data, Yq.slotOffset / 4);
        this.thinBundle.forEachDrawn(gq)
      }
      writeBatchCasters(qq) {
        const {
          caster: Eq
        } = this, gq = qq.packedMatrices, Yq = qq.count;
        Eq.instances = gq, Eq.instanceCount = Yq;
        let lq = -1;
        for (let Oq = 0; Oq < Yq; Oq++) {
          const Eq = bm(qq.packedRowMesh(Oq));
          Eq && lq < 0 ? (this.casterWorlds.length < 16 * Yq && (this.casterWorlds = new Float32Array(gq.length)), this.casterWorlds.set(gq.subarray(0, 16 * Oq)), lq = Oq) : !Eq && lq >= 0 && (this.casterWorlds.set(gq.subarray(16 * Oq, 16 * Oq + 16), 16 * lq), lq++)
        }
        return lq >= 0 && (Eq.instances = this.casterWorlds, Eq.instanceCount = lq), Eq.instanceCount > 0
      }
      async reportFailure(qq, Eq, gq) {
        const Yq = [];
        let lq = !0;
        for (const [Oq, mq] of [
            ["vertex", qq.vertex],
            ["fragment", qq.fragment]
          ]) {
          const qq = await mq.getCompilationInfo();
          for (const Eq of qq.messages) lq &&= "error" !== Eq.type, Yq.push(`${Oq}:${Eq.lineNum}:${Eq.linePos} ${Eq.type}: ${Eq.message}`)
        }
        if (lq && !qq.packGroup) return this.pipelines.set(Eq, !1), console.error(`Lite: pipeline ${Eq} failed`, gq), void Xl("mesh", qq.kind, gq);
        qq.failed || (qq.failed = !0, console.error(`Lite: program ${qq.id} failed`, gq, Yq.join("\n"), {
          program: qq.program,
          key: qq.key
        }), Xl("mesh", qq.kind, gq, lq ? null : Yq[0]))
      }
    }

    function bm(qq) {
      var Eq, gq;
      const Yq = null === (Eq = qq.uR) || void 0 === Eq || null === (gq = Eq.aShaderPackItem) || void 0 === gq ? void 0 : gq.x;
      return void 0 !== Yq && 0 !== (Yq & AE.h)
    }
    var im = gq(41436),
      Zm = gq(41443),
      fm = gq(41450),
      Mm = gq(41394);
    const Tm = [0, 3, 1, 4, 2, 5];

    function zm(qq, Eq, gq, Yq, lq) {
      const Oq = gq[0].width;
      try {
        return lq ? function(qq, Eq, gq) {
          const Yq = (0, Mm.b)(qq, gq, gq, 6);
          for (let lq = 0; lq < 6; lq++)(0, Mm.f)(qq, Yq, lq, Eq[Tm[lq]], {
            invertY: !1
          });
          return Yq.texture
        }(qq, gq, Oq) : function(qq, Eq, gq, Yq) {
          const lq = qq.createTexture({
            label: "sink-cube",
            size: {
              width: gq,
              height: gq,
              depthOrArrayLayers: 6
            },
            format: Yq,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Oq = 0; Oq < 6; Oq++) qq.queue.copyExternalImageToTexture({
            source: Eq[Tm[Oq]]
          }, {
            texture: lq,
            origin: {
              x: 0,
              y: 0,
              z: Oq
            }
          }, {
            width: gq,
            height: gq
          });
          return lq
        }(Eq, gq, Oq, 1 === Yq ? "r8unorm" : "rgba8unorm")
      } finally {
        Sm(gq)
      }
    }

    function Sm(qq) {
      for (const Eq of null !== qq && void 0 !== qq ? qq : []) null === Eq || void 0 === Eq || Eq.close()
    }
    async function pm(qq) {
      const Eq = [],
        gq = [];
      if (await Promise.all(qq.map(((qq, Yq) => (Eq[Yq] = null, qq.then((qq => {
          Eq[Yq] = qq
        }), (qq => {
          gq.push(qq)
        })))))), gq.length > 0) throw Sm(Eq), gq[0];
      return Eq
    }
    class Gm {
      constructor(qq) {
        this.WB = qq, this.starts = [], this.lengths = [], this.used = 0, qq > 0 && (this.starts.push(0), this.lengths.push(qq))
      }
      allocate(qq) {
        const {
          starts: Eq,
          lengths: gq
        } = this;
        for (let Yq = 0; Yq < Eq.length; Yq++) {
          if (gq[Yq] < qq) continue;
          const lq = Eq[Yq];
          return gq[Yq] === qq ? (Eq.splice(Yq, 1), gq.splice(Yq, 1)) : (Eq[Yq] += qq, gq[Yq] -= qq), this.used += qq, lq
        }
        return -1
      }
      free(qq, Eq) {
        this.used -= Eq;
        const gq = Math.min(qq + Eq, this.WB);
        gq > qq && this.release(qq, gq - qq)
      }
      grow(qq) {
        const Eq = this.WB;
        this.WB = qq, this.release(Eq, qq - Eq)
      }
      truncate(qq) {
        const {
          starts: Eq,
          lengths: gq
        } = this;
        for (let Yq = Eq.length - 1; Yq >= 0 && Eq[Yq] + gq[Yq] > qq; Yq--) Eq[Yq] >= qq ? (Eq.splice(Yq, 1), gq.splice(Yq, 1)) : gq[Yq] = qq - Eq[Yq];
        this.WB = qq
      }
      release(qq, Eq) {
        const {
          starts: gq,
          lengths: Yq
        } = this;
        let lq = 0,
          Oq = gq.length;
        for (; lq < Oq;) {
          const Eq = lq + Oq >> 1;
          gq[Eq] < qq ? lq = Eq + 1 : Oq = Eq
        }
        const mq = lq,
          xq = mq > 0 && gq[mq - 1] + Yq[mq - 1] === qq,
          Aq = mq < gq.length && qq + Eq === gq[mq];
        xq && Aq ? (Yq[mq - 1] += Eq + Yq[mq], gq.splice(mq, 1), Yq.splice(mq, 1)) : xq ? Yq[mq - 1] += Eq : Aq ? (gq[mq] = qq, Yq[mq] += Eq) : (gq.splice(mq, 0, qq), Yq.splice(mq, 0, Eq))
      }
    }
    const Lm = 256;
    class Jm {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = qq, this.onReplaced = Eq, this.mergeGap = gq, this.gpu = null, this.bytes = void 0, this.zV = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const lq = Math.max(Lm, Math.ceil(Yq / Lm) * Lm);
        this.bytes = new Uint8Array(lq), this.zV = new Gm(lq / Lm)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(qq) {
        return Math.max(1, Math.ceil(qq / Lm)) * Lm
      }
      allocate(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qq;
        const Yq = Jm.slotBytes(qq),
          lq = Yq / Lm;
        let Oq = this.zV.allocate(lq);
        Oq < 0 && (this.grow(this.zV.WB + lq), Oq = this.zV.allocate(lq));
        const mq = Oq * Lm;
        return this.growTo(mq + Math.max(gq, Yq)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, mq, mq + Yq), Eq && this.bytes.set(new Uint8Array(Eq.buffer, Eq.byteOffset, Math.min(Eq.byteLength, Yq)), mq), this.markDirty(mq, mq + Yq), mq
      }
      growTo(qq) {
        const Eq = Math.ceil(qq / Lm);
        Eq > this.zV.WB && this.grow(Eq)
      }
      free(qq, Eq) {
        this.freed.push(qq, Eq)
      }
      write(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Yq <= 0) return;
        this.bytes.set(new Uint8Array(Eq.buffer, gq, Yq), qq);
        let Oq = qq + Yq;
        if (lq) {
          const Eq = qq + 4 * Math.ceil(Yq / 4);
          this.bytes.fill(0, Oq, Eq), Oq = Eq
        }
        this.markDirty(qq, Oq)
      }
      move(qq, Eq, gq) {
        this.bytes.copyWithin(Eq, qq, qq + gq), this.markDirty(Eq, Eq + gq)
      }
      flush() {
        for (const Eq of this.retired) this.onReplaced(Eq), Eq.destroy();
        this.retired.length = 0;
        const qq = this.dirtyStarts.length;
        if (qq > 0) {
          const {
            dirtyStarts: Eq,
            dirtyEnds: gq,
            order: Yq
          } = this;
          Yq.length = qq;
          for (let xq = 0; xq < qq; xq++) Yq[xq] = xq;
          qq > 1 && Yq.sort(((qq, gq) => Eq[qq] - Eq[gq]));
          const lq = this.mergeGap;
          let Oq = Eq[Yq[0]],
            mq = gq[Yq[0]];
          for (let xq = 1; xq < qq; xq++) {
            const qq = Yq[xq];
            Eq[qq] - mq <= lq ? mq = Math.max(mq, gq[qq]) : (this.send(Oq, mq), Oq = Eq[qq], mq = gq[qq])
          }
          this.send(Oq, mq), Eq.length = 0, gq.length = 0
        }
        this.holding = !1
      }
      Kr() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const qq = this.freed;
        for (let Eq = 0; Eq < qq.length; Eq += 2) this.zV.free(qq[Eq] / Lm, qq[Eq + 1] / Lm);
        qq.length = 0
      }
      send(qq, Eq) {
        this.device.queue.writeBuffer(this.gpu, qq, this.bytes.buffer, qq, Eq - qq);
        for (const gq of this.replaced) {
          const Yq = Math.min(Eq, gq.size);
          Yq > qq && this.device.queue.writeBuffer(gq, qq, this.bytes.buffer, qq, Yq - qq)
        }
      }
      markDirty(qq, Eq) {
        qq &= -4, Eq = Eq + 3 & -4, this.holding ? (this.dirtyStarts.push(qq), this.dirtyEnds.push(Eq)) : this.send(qq, Eq)
      }
      grow(qq) {
        const Eq = this.zV.WB,
          gq = Math.max(2 * Eq, qq),
          Yq = new Uint8Array(gq * Lm);
        Yq.set(this.bytes);
        const lq = this.gpu;
        this.gpu = this.createGpu(Yq.byteLength), this.bytes = Yq, this.zV.grow(gq), lq && (this.replaced.push(lq), this.onReplaced(lq)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Eq * Lm)
      }
      createGpu(qq) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: qq,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function km(qq) {
      return Array.isArray(qq) ? new Float32Array(qq) : qq
    }

    function Rm(qq, Eq, gq, Yq, lq) {
      const Oq = il(lq),
        mq = Math.min(lq, Yq.byteLength);
      if (Oq === mq && Yq.byteOffset % 4 === 0) return void qq.queue.writeBuffer(Eq, gq, Yq.buffer, Yq.byteOffset, Oq);
      const xq = new Uint8Array(Oq);
      xq.set(new Uint8Array(Yq.buffer, Yq.byteOffset, mq)), qq.queue.writeBuffer(Eq, gq, xq)
    }

    function Um(qq, Eq, gq) {
      const Yq = "linear",
        lq = "nearest";
      let Oq = lq,
        mq = lq,
        xq = "nearest",
        Aq = !Eq;
      switch (qq) {
        case 11:
          Oq = Yq, mq = Yq;
          break;
        case 3:
          Oq = Yq, mq = Yq, xq = Eq ? "linear" : "nearest";
          break;
        case 8:
          xq = Eq ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          mq = Yq;
          break;
        case 6:
          mq = Yq, xq = Eq ? "linear" : "nearest";
          break;
        case 7:
          mq = Yq, Aq = !0;
          break;
        case 9:
          Oq = Yq;
          break;
        case 10:
          Oq = Yq, xq = Eq ? "linear" : "nearest";
          break;
        case 2:
          Oq = Yq, mq = Yq, gq > 1 ? (xq = "linear", Aq = !1) : Aq = !0;
          break;
        case 12:
          Oq = Yq, Aq = !0;
          break;
        default:
          Aq = !0
      }
      return gq > 1 && !Aq ? {
        magFilter: Yq,
        minFilter: Yq,
        mipmapFilter: "linear",
        maxAnisotropy: gq
      } : {
        magFilter: Oq,
        minFilter: mq,
        mipmapFilter: xq,
        ...Aq ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Fm(qq) {
      return 0 === qq ? "clamp-to-edge" : 2 === qq ? "mirror-repeat" : "repeat"
    }
    class sm {
      constructor(qq, Eq) {
        let {
          vertexArena: gq = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = qq, this.device = Eq, this.buffers = new WeakMap, this.U_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = gq ? new Jm(Eq, (qq => {
          var Eq;
          null === (Eq = this.onDestroy) || void 0 === Eq || Eq.call(this, qq), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var qq;
        null === (qq = this.arena) || void 0 === qq || qq.flush()
      }
      endUploadFrame() {
        var qq;
        null === (qq = this.arena) || void 0 === qq || qq.Kr()
      }
      vertexBufferCreated(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gq ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(qq);
        const lq = km(Eq);
        qq.WB = lq.byteLength, this.buffers.set(qq, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: gq && null !== this.arena,
          pending: lq,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Yq
        })
      }
      vertexBufferUpdated(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        const lq = this.buffers.get(qq);
        if (!lq) return;
        const Oq = km(Eq),
          mq = void 0 === Yq ? Oq.byteLength : Math.min(Yq, Oq.byteLength);
        this.update(lq, Oq, gq, mq)
      }
      vertexBufferFloatsUpdated(qq, Eq, gq, Yq) {
        const lq = this.buffers.get(qq);
        if (!lq) return;
        const Oq = gq * Float32Array.BYTES_PER_ELEMENT,
          mq = (Yq - gq) * Float32Array.BYTES_PER_ELEMENT;
        lq.slot >= 0 && mq > 0 && Oq + mq <= lq.size ? this.writeSlot(lq, Oq, Eq, Eq.byteOffset + Oq, mq, !1) : lq.gpu && mq > 0 && Oq + mq <= lq.gpu.size ? this.device.queue.writeBuffer(lq.gpu, Oq, Eq.buffer, Eq.byteOffset + Oq, mq) : this.update(lq, Eq.subarray(gq, Yq), Oq, mq)
      }
      indexBufferCreated(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(qq);
        const Yq = function(qq) {
          if (qq instanceof Uint16Array || qq instanceof Uint32Array) return qq;
          for (let Eq = 0; Eq < qq.length; Eq++)
            if (qq[Eq] >= 65535) return new Uint32Array(qq);
          return new Uint16Array(qq)
        }(Eq);
        qq.is32Bits = 4 === Yq.BYTES_PER_ELEMENT, qq.WB = Yq.byteLength, this.buffers.set(qq, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Yq,
          ownsPending: Yq !== Eq,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: gq
        })
      }
      bufferDeleted(qq) {
        const Eq = this.buffers.get(qq);
        null !== Eq && void 0 !== Eq && Eq.gpu ? (this.destroyBuffer(Eq.gpu), this.gpuBuffersVersion++) : Eq && Eq.slot >= 0 && (this.arena.free(Eq.slot, Eq.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(qq)
      }
      update(qq, Eq, gq, Yq) {
        if (qq.slot >= 0) this.updateSlot(qq, Eq, gq, Yq);
        else if (qq.gpu) {
          if (gq + il(Yq) > qq.gpu.size) {
            const Eq = this.device.createBuffer({
                label: qq.label,
                size: il(Math.max(2 * qq.gpu.size, gq + Yq)),
                usage: qq.usage | GPUBufferUsage.COPY_SRC
              }),
              lq = this.device.createCommandEncoder();
            lq.copyBufferToBuffer(qq.gpu, 0, Eq, 0, qq.gpu.size), this.device.queue.submit([lq.finish()]), this.destroyBuffer(qq.gpu), this.gpuBuffersVersion++, qq.gpu = Eq
          }
          Rm(this.device, qq.gpu, gq, Eq, Yq)
        } else {
          const Oq = new Uint8Array(Eq.buffer, Eq.byteOffset, Yq),
            mq = qq.pending;
          if (mq && qq.ownsPending && gq + Yq <= mq.byteLength) new Uint8Array(mq.buffer, mq.byteOffset, mq.byteLength).set(Oq, gq);
          else if (mq && 0 === gq && Yq === mq.byteLength && Eq.byteLength === Yq) qq.pending = Eq, qq.ownsPending = !1;
          else {
            var lq;
            const Eq = new Uint8Array(Math.max(null !== (lq = null === mq || void 0 === mq ? void 0 : mq.byteLength) && void 0 !== lq ? lq : 0, gq + Yq));
            mq && Eq.set(new Uint8Array(mq.buffer, mq.byteOffset, mq.byteLength)), Eq.set(Oq, gq), qq.pending = Eq, qq.ownsPending = !0
          }
        }
      }
      updateSlot(qq, Eq, gq, Yq) {
        const lq = this.arena;
        gq + il(Yq) > qq.size && (qq.size = il(Math.max(2 * qq.size, gq + Yq)), lq.growTo(qq.slot + qq.size), this.gpuBuffersVersion++), 0 === Yq ? this.writeSlot(qq, gq, wm, 0, 4, !1) : this.writeSlot(qq, gq, Eq, Eq.byteOffset, Yq, !0)
      }
      writeSlot(qq, Eq, gq, Yq, lq, Oq) {
        const mq = Eq + (Oq ? il(lq) : lq);
        mq > qq.slotBytes && this.moveSlot(qq, mq), this.arena.write(qq.slot + Eq, gq, Yq, lq, Oq)
      }
      moveSlot(qq, Eq) {
        const gq = this.arena,
          Yq = Jm.slotBytes(Math.max(Eq, Math.min(2 * qq.slotBytes, qq.size))),
          lq = gq.allocate(Yq, null, qq.size);
        gq.move(qq.slot, lq, qq.slotBytes), gq.free(qq.slot, qq.slotBytes), qq.slot = lq, qq.slotBytes = Yq, this.gpuBuffersVersion++
      }
      cover(qq, Eq) {
        const gq = this.buffers.get(qq);
        if (!gq || gq.slot < 0) return !1;
        const Yq = Math.min(Eq, gq.size);
        return !(Yq <= gq.slotBytes) && (this.moveSlot(gq, Yq), !0)
      }
      destroyBuffer(qq) {
        var Eq;
        null === (Eq = this.onDestroy) || void 0 === Eq || Eq.call(this, qq), qq.destroy()
      }
      gpuBuffer(qq) {
        const Eq = this.buffers.get(qq);
        if (!Eq) return null;
        if (Eq.slot >= 0) return this.arena.buffer;
        if (Eq.arena && Eq.pending) {
          const qq = Eq.pending,
            gq = this.arena;
          return Eq.size = il(qq.byteLength), Eq.slotBytes = Jm.slotBytes(function(qq) {
            const Eq = new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength);
            let gq = Eq.length;
            if (qq.byteOffset % 4 === 0) {
              for (; gq % 4 !== 0 && 0 === Eq[gq - 1];) gq--;
              if (gq % 4 === 0) {
                const Eq = new Uint32Array(qq.buffer, qq.byteOffset, gq / 4);
                let Yq = Eq.length;
                for (; Yq > 0 && 0 === Eq[Yq - 1];) Yq--;
                gq = 4 * Yq
              }
            }
            for (; gq > 0 && 0 === Eq[gq - 1];) gq--;
            return gq
          }(qq)), Eq.slot = gq.allocate(Eq.slotBytes, qq, Eq.size), Eq.pending = null, gq.buffer
        }
        if (!Eq.gpu && Eq.pending) {
          const qq = Eq.pending;
          Eq.gpu = this.device.createBuffer({
            label: Eq.label,
            size: il(qq.byteLength),
            usage: Eq.usage
          }), Rm(this.device, Eq.gpu, 0, qq, qq.byteLength), Eq.pending = null
        }
        return Eq.gpu
      }
      gpuOffset(qq) {
        var Eq, gq;
        const Yq = null !== (Eq = null === (gq = this.buffers.get(qq)) || void 0 === gq ? void 0 : gq.slot) && void 0 !== Eq ? Eq : -1;
        return Yq < 0 ? 0 : Yq
      }
      gpuEnd(qq) {
        var Eq, gq;
        const Yq = this.buffers.get(qq);
        return Yq ? Yq.slot >= 0 ? Yq.slot + Yq.size : null !== (Eq = null === (gq = Yq.gpu) || void 0 === gq ? void 0 : gq.size) && void 0 !== Eq ? Eq : 0 : 0
      }
      vertexInput(qq, Eq, gq) {
        var Yq, lq, Oq, mq;
        return null !== (Yq = null !== (lq = gq && this.modelInput(gq, Eq)) && void 0 !== lq ? lq : null === (Oq = null !== (mq = this.U_.get(qq)) && void 0 !== mq ? mq : this.batchUploads.get(qq)) || void 0 === Oq ? void 0 : Oq.inputs[Eq]) && void 0 !== Yq ? Yq : null
      }
      modelInput(qq, Eq) {
        const gq = this.geometrySlot(qq);
        let Yq = gq.inputs.get(Eq);
        if (void 0 === Yq) {
          const lq = qq.vertexAttributes.find((qq => qq.kind === Eq));
          Yq = lq ? new Xq(this.modelKey(gq, lq.data, !1), lq.offset, lq.stride, lq.components, !1, lq.glType, lq.isNormalized) : null, gq.inputs.set(Eq, Yq)
        }
        return Yq
      }
      modelIndex(qq) {
        return qq.indexData && this.modelKey(this.geometrySlot(qq), qq.indexData, !0)
      }
      geometrySlot(qq) {
        let Eq = qq.gpu[nq.f.lite];
        if (!Eq) {
          const gq = new Map,
            Yq = () => {
              for (const qq of gq.values()) this.bufferDeleted(qq)
            },
            lq = qq => {
              const Eq = gq.get(qq);
              Eq && this.vertexBufferUpdated(Eq, qq)
            };
          Eq = {
            keys: gq,
            inputs: new Map,
            release: Yq,
            updated: lq
          }, qq.gpu[nq.f.lite] = Eq
        }
        return Eq
      }
      modelKey(qq, Eq, gq) {
        let Yq = qq.keys.get(Eq);
        if (!Yq) {
          if (gq) {
            const qq = {
              WB: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(qq, Eq, "model-indices"), Yq = qq
          } else Yq = {
            WB: 0
          }, this.vertexBufferCreated(Yq, Eq, !1, "model-vertices");
          qq.keys.set(Eq, Yq)
        }
        return Yq
      }
      indexFormat(qq) {
        return qq.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(qq, Eq) {
        --qq.refs > 0 || (this.releaseTexture(qq), Sm(qq.images), null !== Eq && this.textures.delete(Eq))
      }
      load(qq, Eq) {
        const gq = Eq.decoded = async function(qq) {
          if ("cube" === qq.kind) return async function(qq) {
            if (6 !== qq.length) throw new Error(`${qq.length} files where six faces were expected`);
            const Eq = await pm(qq.map((qq => Sl(qq)))),
              gq = Eq[0].width;
            return pm(Eq.map((async qq => {
              if (qq.width === gq && qq.height === gq) return qq;
              try {
                return await createImageBitmap(qq, {
                  ...Tl,
                  resizeWidth: gq,
                  resizeHeight: gq
                })
              } finally {
                qq.close()
              }
            })))
          }(qq.files);
          if ("data" === qq.kind && qq.data) return [await createImageBitmap(new Blob([qq.data]), Tl)];
          return [await Sl(Xm(qq))]
        }(qq.source).then((qq => {
          0 === Eq.refs ? Sm(qq) : Eq.images = qq
        }));
        this.track(Eq, Xm(qq.source), gq, (() => {
          Eq.wanted && !Eq.failed && Eq.refs > 0 && this.upload(qq, Eq)
        }))
      }
      canvasUpdated(qq, Eq, gq) {
        const {
          state: Yq
        } = this.textureSlot(qq);
        Yq.dynamicSource = {
          invertY: Eq,
          premultiplied: gq
        }, Yq.dynamic && this.pushDynamic(qq.source, Yq)
      }
      async atlasArray(qq, Eq, gq) {
        const Yq = await Ll(this.device, qq, Eq, gq);
        if (!this.atlasBindings.has(Yq)) {
          const qq = (0, im.e)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Yq, {
            view: Yq.texture.createView({
              dimension: "2d-array"
            }),
            sampler: qq
          })
        }
        return Yq
      }
      boundTexture(qq) {
        const Eq = this.atlasBindings.get(qq);
        if (Eq) return Eq;
        const gq = qq;
        if (gq.released) return null;
        const Yq = this.textureSlot(gq, !0),
          {
            state: lq
          } = Yq;
        if (!lq.view && (lq.wanted = !0, lq.loading || lq.failed || this.upload(gq, lq), !lq.view)) return null;
        const Oq = this.chosenSampler(gq, Yq),
          mq = Yq.bound;
        return mq && mq.view === lq.view && mq.sampler === Oq ? mq : (Yq.bound = {
          view: lq.view,
          sampler: Oq
        }, Yq.bound)
      }
      textureLoaded(qq) {
        var Eq, gq;
        return null !== (Eq = null === (gq = qq.gpu[nq.f.lite]) || void 0 === gq ? void 0 : gq.state.decoded) && void 0 !== Eq ? Eq : null
      }
      textureFailed(qq) {
        var Eq;
        return !0 === (null === (Eq = qq.gpu[nq.f.lite]) || void 0 === Eq ? void 0 : Eq.state.failed)
      }
      chosenSampler(qq, Eq) {
        const {
          samplingMode: gq,
          wrapU: Yq,
          wrapV: lq
        } = qq.sampler, Oq = Eq.state.hasMips, mq = function(qq, Eq) {
          const {
            bilinear: gq,
            trilinear: Yq
          } = nq.i;
          return !Eq && qq !== gq || 11 !== qq && qq !== Yq && qq !== gq ? 1 : 4
        }(gq, Oq), xq = Eq.sampler;
        if (xq && xq.samplingMode === gq && xq.hasMips === Oq && xq.anisotropy === mq && xq.wrapU === Yq && xq.wrapV === lq) return xq.sampler;
        const Aq = this.samplerFor(gq, Oq, mq, Yq, lq);
        return Eq.sampler = {
          samplingMode: gq,
          hasMips: Oq,
          anisotropy: mq,
          wrapU: Yq,
          wrapV: lq,
          sampler: Aq
        }, Aq
      }
      releaseTexture(qq) {
        var Eq, gq;
        qq.view && (null === (gq = this.onDestroy) || void 0 === gq || gq.call(this, qq.view));
        null === (Eq = qq.destroy) || void 0 === Eq || Eq.call(qq)
      }
      textureSlot(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = qq.gpu[nq.f.lite];
        if (gq) return gq;
        const Yq = function(qq) {
          let {
            source: Eq,
            sampler: gq
          } = qq;
          return "canvas" === Eq.kind ? null : `${Eq.kind}|${Xm(Eq)}|${gq.noMipmap}|${gq.samplingMode}|${gq.invertY}`
        }(qq);
        let lq = null === Yq ? void 0 : this.textures.get(Yq);
        lq || (lq = {
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
        }, null !== Yq && (this.textures.set(Yq, lq), this.load(qq, lq), Eq && this.firstBindDecodes++)), lq.refs++;
        const Oq = lq,
          mq = {
            state: lq,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(Oq, Yq)
            }
          };
        return qq.gpu[nq.f.lite] = mq, mq
      }
      samplerFor(qq, Eq, gq, Yq, lq) {
        const Oq = `${qq}|${Eq}|${gq}|${Yq}|${lq}`;
        let mq = this.samplers.get(Oq);
        if (!mq) {
          const xq = {
            ...Um(qq, Eq, gq),
            addressModeU: Fm(Yq),
            addressModeV: Fm(lq)
          };
          mq = (0, im.e)(this.engine, xq), this.samplers.set(Oq, mq)
        }
        return mq
      }
      upload(qq, Eq) {
        const {
          source: gq,
          sampler: Yq
        } = qq;
        Eq.hasMips = !Yq.noMipmap, "canvas" === gq.kind ? this.createDynamic(gq, Eq) : "cube" === gq.kind ? this.uploadCube(Eq, gq.luminance) : this.uploadImage(Eq, !0 === Yq.invertY, gq.url)
      }
      uploadImage(qq, Eq, gq) {
        const [Yq] = qq.images;
        qq.images = null;
        const lq = (0, Zm.b)(this.engine, Yq, {
          mipMaps: qq.hasMips,
          invertY: Eq,
          srgb: !1
        }).then((Eq => {
          Yq.close(), 0 !== qq.refs ? (qq.view = Eq.view, qq.destroy = Eq.texture.destroy.bind(Eq.texture)) : Eq.texture.destroy()
        }));
        this.track(qq, gq, lq)
      }
      track(qq, Eq, gq, Yq) {
        qq.loading = !0, this.pending++, gq.catch((gq => {
          qq.failed = !0, console.warn(`Lite: could not load texture ${zl(Eq)}`, gq)
        })).finally((() => {
          qq.loading = !1, this.pending--, null === Yq || void 0 === Yq || Yq()
        }))
      }
      uploadCube(qq, Eq) {
        const gq = qq.images;
        qq.images = null;
        const Yq = zm(this.engine, this.device, gq, (0, nq.u)(Eq), qq.hasMips);
        qq.view = Yq.createView({
          dimension: "cube"
        }), qq.destroy = () => {
          Yq.destroy()
        }
      }
      createDynamic(qq, Eq) {
        const {
          canvas: gq
        } = qq, Yq = (0, fm.c)(this.engine, Math.max(1, gq.width), Math.max(1, gq.height), {
          mipMaps: Eq.hasMips,
          srgb: !1
        });
        Eq.dynamic = Yq, Eq.view = Yq.view, Eq.destroy = () => {
          Yq.texture.destroy()
        }, this.pushDynamic(qq, Eq)
      }
      pushDynamic(qq, Eq) {
        const gq = Eq.dynamicSource,
          Yq = Eq.dynamic,
          {
            canvas: lq
          } = qq;
        if (gq && Yq && 0 !== lq.width && 0 !== lq.height) return lq.width !== Yq.width || lq.height !== Yq.height ? (this.releaseTexture(Eq), Eq.dynamic = null, Eq.view = null, void this.createDynamic(qq, Eq)) : void(0, fm.d)(this.engine, Yq, lq, {
          invertY: gq.invertY,
          premultiplyAlpha: gq.premultiplied
        })
      }
    }

    function Xm(qq) {
      return "cube" === qq.kind ? qq.rootUrl : "canvas" === qq.kind ? "canvas" : qq.url
    }
    const wm = new Uint8Array(4);

    function Km(qq) {
      const Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      qq._colorAttachment.storeOp = qq._targetSignature._sampleCount > 1 ? Eq : "store";
      const gq = qq._renderPassDescriptor.depthStencilAttachment;
      gq && (gq.depthStoreOp = Eq, gq.stencilStoreOp && (gq.stencilStoreOp = Eq))
    }
    var Cm = gq(37767),
      Im = gq(37806),
      em = gq(37472),
      Dm = gq(39500);
    const qx = new Float64Array([1, 1, 1]),
      Ex = new Float64Array([0, 1, 0]),
      gx = new Float64Array(4),
      Yx = new Float32Array(16),
      lx = new Float64Array(3),
      Ox = new Float64Array(4);

    function mx(qq, Eq, gq) {
      qq.fov = Eq.fov, qq.near = Eq.near, qq.far = Eq.far, qq.renderWidth = gq.renderWidth, qq.renderHeight = gq.renderHeight, (0, em.p)(Eq.holderRotation, 0, gx, 0), (0, em.d)(qx, 0, gx, 0, Eq.holderPosition, 0, Yx);
      const Yq = Eq.U3;
      lx[0] = Yq[0], lx[1] = Yq[1], lx[2] = Yq[2] + 1;
      const lq = qq.viewMatrix;
      (0, em.k)(Yq, lx, Ex, lq), (0, em.i)(lq, 0, lq), (0, em.m)(lq, Yx, 0, lq), (0, em.i)(lq, 0, lq);
      const Oq = qq.worldMatrix;
      (0, em.i)(lq, 0, Oq), qq.eye[0] = Oq[12], qq.eye[1] = Oq[13], qq.eye[2] = Oq[14], Ox[0] = qq.fov, Ox[1] = qq.renderWidth / qq.renderHeight, Ox[2] = qq.near, Ox[3] = qq.far, (0, em.n)(Ox, qq.projectionMatrix), (0, em.m)(lq, qq.projectionMatrix, 0, qq.viewProjectionMatrix), (0, Dm.c)(qq.viewProjectionMatrix, qq.frustum)
    }

    function xx(qq, Eq) {
      let gq = qq.frustumPlanes;
      gq || (gq = qq.frustumPlanes = Array.from({
        length: 6
      }, (() => new Cm.d(0, 0, 0, 0))));
      for (let Yq = 0; Yq < 6; Yq++) {
        const qq = gq[Yq].normal;
        qq._x = Eq[4 * Yq], qq._y = Eq[4 * Yq + 1], qq._z = Eq[4 * Yq + 2], qq._isDirty = !0, gq[Yq].d = Eq[4 * Yq + 3]
      }
    }

    function Ax(qq, Eq) {
      const gq = Eq.clearColor;
      qq.clearColour[0] = gq.r, qq.clearColour[1] = gq.g, qq.clearColour[2] = gq.b, qq.clearColour[3] = gq.a;
      const Yq = Eq.ambientColor;
      qq.ambientColour[0] = Yq.r, qq.ambientColour[1] = Yq.g, qq.ambientColour[2] = Yq.b, qq.animationRatio = Eq.animationRatio, qq.frameId = Eq.frameId, qq.version++
    }

    function cx(qq) {
      const Eq = qq.model.view;
      return Eq.animTick = (0, Im.i)(), Eq.timeMs = performance.now(), Ax(Eq, qq.PV), qq.model.update(Eq.frameId), Eq
    }

    function ux(qq) {
      const Eq = qq.PV,
        {
          view: gq,
          o3: Yq
        } = qq.model;
      return mx(gq, Yq, Eq.Ba()), Eq.onBeforeRenderObservable.notifyObservers(Eq), xx(Eq, gq.frustum), Eq.onBeforeCameraRenderObservable.notifyObservers(Eq.activeCamera), cx(qq)
    }
    var Bx = gq(37431),
      Wx = gq(37548),
      Nx = gq(37801);

    function ax(qq) {
      var Eq, gq;
      const Yq = (0, vq.T)(qq);
      if (!Yq || Yq.diffuseTexture && (0, Nx.m)(qq)) return null;
      const lq = null === (Eq = (0, vq.u)(Yq, tq.j.name)) || void 0 === Eq ? void 0 : Eq.state,
        Oq = null === (gq = (0, vq.u)(Yq, sO.e.name)) || void 0 === gq ? void 0 : gq.state,
        mq = new Float32Array(16);
      return function(qq, Eq, gq, Yq) {
        var lq, Oq;
        const mq = WY;
        Yq.set(qq.diffuseColor, mq.diffuse), Yq[mq.diffuse + 3] = qq.alpha, Yq.set(qq.ambientColor, mq.ambientAndCutoff), Yq[mq.ambientAndCutoff + 3] = qq.alphaCutOff, Yq.set(qq.emissiveColor, mq.emissiveAndLevel), Yq[mq.emissiveAndLevel + 3] = null !== (lq = null === (Oq = qq.diffuseTexture) || void 0 === Oq ? void 0 : Oq.level) && void 0 !== lq ? lq : 1, null !== Eq && void 0 !== Eq && Eq.animDataPerTex ? (Yq[mq.anim + 1] = Im.e, Yq[mq.anim + 2] = Eq.animDataPerTex.length / 3 - 1) : gq && (Yq[mq.anim + 1] = gq.numAnimStates, Yq[mq.anim + 2] = gq.ticksPerAnimState)
      }(Yq, lq, Oq, mq), {
        model: Yq,
        atlas: lq,
        texture: lq ? "atlas" : Yq.diffuseTexture ? "single" : "none",
        animated: lq ? !!lq.animDataPerTex : !!Oq,
        liquid: (0, Nx.q)(qq),
        customRenderMat: (0, Nx.m)(qq),
        uniformData: mq
      }
    }
    var Vx = gq(2790);
    class dx {
      constructor(qq) {
        this.units = qq, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var qq;
        this.buffer.destroy(), null === (qq = this.twin) || void 0 === qq || qq.destroy()
      }
    }
    class jx {
      constructor(qq, Eq) {
        this.arena = qq, this.zV = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.zV = new Gm(Eq);
        const gq = new dx(Eq);
        gq.buffer = this.createBuffer(gq, !1), this.backings.push(gq), this.refresh()
      }
      get WB() {
        return this.zV.WB
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
        let qq = 0;
        for (const Eq of this.backings) qq += Eq.units * (this.arena.unitBytes + (Eq.twin ? this.arena.twinUnitBytes : 0));
        return qq
      }
      holds(qq) {
        return qq.start + qq.length <= this.usable
      }
      lost(qq) {
        return this.dropped || qq.start + qq.length > this.WB
      }
      write(qq, Eq) {
        const {
          device: gq,
          unitBytes: Yq
        } = this.arena;
        for (const lq of this.backings) {
          const Oq = (lq.units - qq.start) * Yq;
          Oq > 0 && gq.queue.writeBuffer(lq.buffer, qq.start * Yq, Eq, 0, Math.min(Eq.byteLength, Oq))
        }
      }
      writeLight(qq, Eq) {
        const {
          device: gq,
          twinUnitBytes: Yq,
          verticesPerUnit: lq
        } = this.arena, {
          light: Oq,
          count: mq
        } = this.arena.twinLight(Eq, Math.min(Eq.length, qq.length * lq));
        for (const xq of this.backings) {
          xq.twin || (xq.twin = this.createBuffer(xq, !0));
          const Eq = (xq.units - qq.start) * lq;
          Eq > 0 && gq.queue.writeBuffer(xq.twin, qq.start * Yq, Oq, 0, Math.min(mq, Eq))
        }
      }
      grow(qq) {
        this.arena.assertNotDrawing();
        const {
          device: Eq,
          unitBytes: gq,
          label: Yq
        } = this.arena, lq = this.backings[this.backings.length - 1], Oq = new dx(qq), mq = Eq.createCommandEncoder({
          label: `${Yq}-grow`
        });
        Oq.buffer = this.createBuffer(Oq, !1), mq.copyBufferToBuffer(lq.buffer, 0, Oq.buffer, 0, lq.units * gq), lq.twin && (Oq.twin = this.createBuffer(Oq, !0), mq.copyBufferToBuffer(lq.twin, 0, Oq.twin, 0, lq.units * this.arena.twinUnitBytes)), Eq.queue.submit([mq.finish()]), this.backings.push(Oq), this.zV.grow(qq)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const qq of this.backings) qq.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(qq, Eq) {
        const {
          device: gq,
          unitBytes: Yq,
          twinUnitBytes: lq,
          usage: Oq,
          label: mq
        } = this.arena;
        gq.pushErrorScope("out-of-memory");
        const xq = gq.createBuffer({
          label: Eq ? `${mq}-light` : mq,
          size: qq.units * (Eq ? lq : Yq),
          usage: (Eq ? this.arena.twinUsage : Oq) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, gq.popErrorScope().then((gq => {
          this.arena.awaitingVerdict--, this.settle(qq, Eq, !gq, !0)
        }), (gq => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${mq} buffer, taken as failed: ${String(gq)}`), this.settle(qq, Eq, !1, !1)
        })), xq
      }
      settle(qq, Eq, gq, Yq) {
        const lq = this.backings.indexOf(qq);
        if (!(this.dropped || lq < 0)) {
          if (!gq) {
            if (Yq && this.arena.ranOutOfMemory(qq.units, qq.units * (Eq ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === lq) return void this.drop();
            for (const qq of this.backings.splice(lq)) qq.destroy();
            return this.zV.truncate(this.backings[lq - 1].units), this.growable = !1, void this.promote()
          }
          Eq ? qq.twinReady = !0 : (qq.bufferReady = !0, this.arena.allocatedBuffer(qq.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: qq
        } = this;
        let Eq = 0;
        for (; Eq + 1 < qq.length && qq[Eq].ready && qq[Eq + 1].ready;) Eq++;
        for (const gq of qq.splice(0, Eq)) gq.destroy();
        this.refresh()
      }
      refresh() {
        const qq = this.backings[0];
        this.buffer = qq.buffer, this.twin = qq.twinReady ? qq.twin : null, this.usable = !this.dropped && qq.bufferReady ? qq.units : 0
      }
    }
    class Hx {
      constructor(qq, Eq, gq, Yq) {
        let {
          verticesPerUnit: lq = 1,
          twinUsage: Oq = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = qq, this.unitBytes = Eq, this.usage = gq, this.label = Yq, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, cE.e)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), Eq % 4 !== 0) throw new Error(`${Yq}: ${Eq}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = lq, this.twinUsage = Oq, this.twinValueBytes = lq > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * lq
      }
      twinLight(qq, Eq) {
        if (4 === this.twinValueBytes) return this.widened.length < Eq && (this.widened = new Float32Array(Math.max(Eq, 2 * this.widened.length))), this.widened.set(qq.subarray(0, Eq)), {
          light: this.widened,
          count: Eq
        };
        const gq = Eq % this.verticesPerUnit;
        if (0 === gq) return {
          light: qq,
          count: Eq
        };
        const Yq = Eq - gq + this.verticesPerUnit;
        return this.padded.length < Yq && (this.padded = new Uint16Array(Math.max(Yq, 2 * this.padded.length))), this.padded.set(qq.subarray(0, Eq)), this.padded.fill(0, Eq, Yq), {
          light: this.padded,
          count: Yq
        }
      }
      allocate(qq) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), qq > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const lq of this.pages) {
          const Eq = lq.zV.allocate(qq);
          if (Eq >= 0) return {
            page: lq,
            start: Eq,
            length: qq
          }
        }
        const Eq = this.pages[this.pages.length - 1];
        if (null !== Eq && void 0 !== Eq && Eq.canGrow) {
          const gq = Math.min(this.ceiling, Math.max(2 * Eq.WB, Eq.WB + qq));
          if (gq - Eq.WB >= qq) return Eq.grow(gq), {
            page: Eq,
            start: Eq.zV.allocate(qq),
            length: qq
          }
        }
        Eq && Eq !== this.pages[0] && 0 === Eq.zV.used && Eq.drop();
        const gq = Math.floor(1048576 / this.unitBytes),
          Yq = new jx(this, Math.max(qq, Math.min(this.ceiling, gq)));
        return this.pages.push(Yq), {
          page: Yq,
          start: Yq.zV.allocate(qq),
          length: qq
        }
      }
      free(qq) {
        this.assertNotDrawing();
        const {
          page: Eq
        } = qq;
        Eq.zV.free(qq.start, qq.length), 0 === Eq.zV.used && Eq !== this.pages[0] && Eq !== this.pages[this.pages.length - 1] && Eq.drop()
      }
      remove(qq) {
        const Eq = this.pages.indexOf(qq);
        Eq >= 0 && this.pages.splice(Eq, 1)
      }
      ranOutOfMemory(qq, Eq) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${Eq}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, qq), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, qq) / 2));
        const gq = performance.now();
        gq >= this.shortageUntil && (this.forgetFailedAt = gq + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = gq + 1e3)
      }
      allocatedBuffer(qq) {
        qq >= this.failed && (this.failed = 1 / 0);
        const Eq = Math.min(2 * qq, Math.floor((qq + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, Eq))
      }
      stats() {
        let qq = 0,
          Eq = 0,
          gq = 0,
          Yq = 0;
        for (const lq of this.pages) qq += lq.WB, Eq += lq.zV.used, gq += lq.hasTwin ? lq.WB * this.twinUnitBytes : 0, Yq += lq.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: qq * this.unitBytes,
          usedBytes: Eq * this.unitBytes,
          twinBytes: gq,
          allocatedBytes: Yq
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: qq,
          maxStorageBufferBindingSize: Eq
        } = this.device.limits;
        let gq = Math.floor(Math.min(67108864, qq) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (gq = Math.min(gq, Math.floor(Eq / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (gq = Math.min(gq, Math.floor(Eq / this.twinUnitBytes))), gq
      }
    }
    const ox = 16383;

    function Px(qq, Eq, gq, Yq, lq) {
      let Oq = 0;
      for (let mq = gq; mq < Yq; mq += ox) qq.drawIndexed(6 * Math.min(ox, Yq - mq), 1, 0, Eq + 4 * mq, lq), Oq++;
      return Oq
    }
    class Qx {
      constructor(qq, Eq) {
        this.recordsGroup = Eq, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const gq = rE.e.strideWithoutAtlas;
        this.vertexArena = new Hx(qq, gq, GPUBufferUsage.VERTEX, `terrain-vertices-${gq}`), this.quadArena = new Hx(qq, Wx.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Yq = (0, vE.h)(new Uint16Array(98298), ox);
        this.quadPattern = qq.createBuffer({
          label: "terrain-quad-pattern",
          size: Yq.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), qq.queue.writeBuffer(this.quadPattern, 0, Yq)
      }
      set(qq, Eq) {
        const gq = Eq.packedVertices,
          Yq = gq ? this.quadArena.allocate(qq.faceCount) : this.vertexArena.allocate(qq.vertexCount);
        if (!Yq) return !1;
        qq.vertices = Yq;
        const lq = gq ? new Uint8Array(gq.buffer, gq.byteOffset, gq.byteLength) : new Uint8Array(Eq.vertices);
        return Yq.page.write(Yq, lq), !0
      }
      setLight(qq, Eq) {
        const {
          vertices: gq
        } = qq;
        gq && 0 !== Eq.length && gq.page.live && (Eq.length < qq.vertexCount ? gq.page.arena.warnOnce("shortLight", `a part's ${Eq.length} light values are fewer than its ${qq.vertexCount} vertices, so its light is left as it was`) : (gq.page.writeLight(gq, Eq), qq.lit = !0))
      }
      lightFullSky(qq, Eq) {
        this.fullSky.length < Eq && (this.fullSky = new Uint16Array(Math.max(Eq, 4096)).fill(Vx.h));
        for (const gq of qq) {
          const qq = gq.vertices;
          qq.page.live && (qq.page.writeLight(qq, this.fullSky), gq.lit = !0)
        }
      }
      backed(qq) {
        const {
          vertices: Eq
        } = qq;
        return !!Eq && Eq.page.holds(Eq)
      }
      lost(qq) {
        const {
          vertices: Eq
        } = qq;
        return !!Eq && Eq.page.lost(Eq)
      }
      release(qq) {
        qq.vertices && qq.vertices.page.arena.free(qq.vertices), qq.vertices = null, qq.lit = !1
      }
      setDrawing(qq) {
        this.forgetBound()
      }
      draw(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Eq.faceCount;
        const Oq = Eq.vertices,
          mq = Oq.page,
          xq = gq ? mq.twin : null;
        if (!mq.holds(Oq) || gq && !xq) return 0;
        const {
          verticesPerUnit: Aq
        } = mq.arena;
        let cq = Oq.start * Aq;
        this.boundPattern || (qq.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const uq = Yq + lq;
        if (Aq > 1) return mq.buffer === this.boundRecords && xq === this.boundRecordsLight || (qq.setBindGroup(1, this.recordsGroup(mq.buffer, xq)), this.boundRecords = mq.buffer, this.boundRecordsLight = xq), Px(qq, cq, Yq, uq, Eq.slot);
        mq.buffer !== this.boundVertices && (qq.setVertexBuffer(0, mq.buffer), this.boundVertices = mq.buffer), xq && xq !== this.boundLight && (qq.setVertexBuffer(1, xq), this.boundLight = xq);
        const Bq = Eq.faceCount;
        return uq <= Bq ? Px(qq, cq, Yq, uq, Eq.slot) : Px(qq, cq, Yq, Bq, Eq.slot) + Px(qq, cq, Math.max(Yq, Bq) - Bq, uq - Bq, Eq.slot)
      }
      get buffersAwaitingVerdict() {
        let qq = 0;
        for (const Eq of this.arenas()) qq += Eq.awaitingVerdict;
        return qq
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class yx {
      constructor(qq, Eq, gq, Yq) {
        this.device = qq, this.splitBefore = Eq, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = qq.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const lq = qq.createShaderModule({
          label: "scene-depth-copy",
          code: (Oq = gq._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Oq?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Oq;
        qq.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: lq,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: lq,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((qq => {
          this.pipeline = qq, this.building = !1
        }), (qq => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", qq)
        })), gq._executeWithTransmission = () => this.execute(gq, Yq)
      }
      get compiling() {
        return this.building
      }
      setWanted(qq) {
        this.wanted = qq
      }
      setPlanes(qq, Eq) {
        qq === this.near && Eq === this.far || (this.near = qq, this.far = Eq, this.unproject[0] = qq / (Eq - qq), this.unproject[1] = Eq * qq / (Eq - qq), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.copy) || void 0 === Eq ? void 0 : Eq.view) && void 0 !== qq ? qq : null
      }
      execute(qq, Eq) {
        var gq;
        null === (gq = this.retired) || void 0 === gq || gq.destroy(), this.retired = null;
        const Yq = qE(Eq),
          lq = qq._transparentBindings,
          Oq = this.wanted && this.pipeline ? this.splitIndex(lq) : -1,
          mq = qq._colorAttachment,
          xq = mq.resolveTarget;
        Oq >= 0 && (mq.resolveTarget = void 0, Km(qq, !0));
        let Aq = Yq.beginRenderPass(qq._renderPassDescriptor);
        Aq.setBindGroup(0, qq._sceneBG);
        let cq = this.drawList(Aq, Eq, qq._opaqueBindings, 0, qq._opaqueBindings.length);
        if (cq += this.drawList(Aq, Eq, qq._directBindings, 0, qq._directBindings.length), cq += this.drawList(Aq, Eq, lq, 0, Oq >= 0 ? Oq : lq.length), Aq.end(), Oq < 0) return cq;
        Km(qq);
        const uq = qq._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Bq,
            stencilLoadOp: Wq
          } = uq,
          Nq = mq.loadOp;
        mq.resolveTarget = xq;
        try {
          this.copyDepth(Yq, qq), mq.loadOp = "load", uq.depthLoadOp = "load", Wq && (uq.stencilLoadOp = "load"), Aq = Yq.beginRenderPass(qq._renderPassDescriptor), Aq.setBindGroup(0, qq._sceneBG), cq += this.drawList(Aq, Eq, lq, Oq, lq.length), Aq.end()
        } finally {
          mq.loadOp = Nq, uq.depthLoadOp = Bq, uq.stencilLoadOp = Wq
        }
        return cq
      }
      splitIndex(qq) {
        for (let Eq = 0; Eq < qq.length; Eq++)
          if (qq[Eq].renderable === this.splitBefore) return Eq;
        return -1
      }
      drawList(qq, Eq, gq, Yq, lq) {
        let Oq = null,
          mq = 0;
        for (let xq = Yq; xq < lq; xq++) {
          const Yq = gq[xq],
            lq = Yq.renderable.mesh;
          lq && !1 === lq.visible || (Yq.pipeline !== Oq && (qq.setPipeline(Yq.pipeline), Oq = Yq.pipeline), mq += Yq.draw(qq, Eq))
        }
        return mq
      }
      copyDepth(qq, Eq) {
        var gq, Yq;
        const lq = (null !== (gq = Eq._config.depth) && void 0 !== gq ? gq : Eq._config.rt)._depthTexture,
          Oq = (null === (Yq = this.copy) || void 0 === Yq ? void 0 : Yq.source) === lq ? this.copy : this.remakeCopy(lq),
          mq = qq.beginRenderPass(Oq.pass);
        mq.setPipeline(this.pipeline), mq.setBindGroup(0, Oq.bindGroup), mq.draw(3), mq.end()
      }
      remakeCopy(qq) {
        var Eq, gq;
        this.retired = null !== (Eq = null === (gq = this.copy) || void 0 === gq ? void 0 : gq.texture) && void 0 !== Eq ? Eq : null;
        const Yq = this.device.createTexture({
            label: "scene-depth",
            size: [qq.width, qq.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          lq = Yq.createView(),
          Oq = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: qq.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          mq = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: lq,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: qq,
          texture: Yq,
          view: lq,
          bindGroup: Oq,
          pass: mq
        }, this.copy
      }
    }
    const tx = "rgba8unorm";

    function rx(qq) {
      return qq ? 15 : 1
    }
    class vx {
      constructor(qq, Eq, gq, Yq) {
        this.device = qq, this.terrain = Yq, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Eq._targetSignature._sampleCount > 1, this.cameraBuffer = qq.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = qq.createBindGroupLayout({
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
        const lq = qq.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = qq.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: lq,
          entries: []
        });
        const Oq = qq.createShaderModule({
          label: "sun-shadow-mask",
          code: (mq = this.edge, `${(0,hE.B)()}${Gg({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${mq?hg:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${rx(mq)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${mq?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var mq;
        qq.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: qq.createPipelineLayout({
            bindGroupLayouts: [this.layout, lq, lq, pO(qq, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Oq,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Oq,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((qq => {
          this.pipeline = qq, this.building = !1
        }), (qq => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", qq)
        }));
        const xq = Eq._executeWithTransmission;
        Eq._executeWithTransmission = qq => this.execute(Eq, gq, (() => xq ? xq(qq) : function(qq, Eq) {
          const gq = qE(Eq).beginRenderPass(qq._renderPassDescriptor);
          gq.setBindGroup(0, qq._sceneBG);
          let Yq = hx(gq, Eq, qq._opaqueBindings);
          return Yq += hx(gq, Eq, qq._directBindings), Yq += hx(gq, Eq, qq._transparentBindings), gq.end(), Yq
        }(Eq, gq)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.targets) || void 0 === Eq ? void 0 : Eq.maskView) && void 0 !== qq ? qq : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(qq) {
        ! function(qq, Eq) {
          const gq = qq.worldMatrix,
            Yq = qq.projectionMatrix,
            lq = 1 / Yq[0],
            Oq = 1 / Yq[5],
            mq = qq.far * qq.near / (qq.far - qq.near);
          Eq[0] = qq.eye[0], Eq[1] = qq.eye[1], Eq[2] = qq.eye[2], Eq[3] = 2 ** -23 / mq, Eq[4] = gq[0] * lq, Eq[5] = gq[1] * lq, Eq[6] = gq[2] * lq, Eq[7] = mq, Eq[8] = gq[4] * Oq, Eq[9] = gq[5] * Oq, Eq[10] = gq[6] * Oq, Eq[11] = qq.near / (qq.far - qq.near), Eq[12] = gq[8], Eq[13] = gq[9], Eq[14] = gq[10], Eq[15] = 0
        }(qq, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(qq, Eq, gq) {
        if (this.retire(), !this.terrain.readsMask) return gq();
        const Yq = this.targetsFor(qq),
          lq = qE(Eq),
          Oq = qq._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Yq.prepass.depthStencilAttachment.view = Oq.view);
        const mq = this.terrain.drawPrepass(lq, Yq.prepass, qq._sceneBG);
        if (0 === mq) return gq();
        if (this.trace(lq, Yq), this.edge) return mq + 1 + gq();
        const {
          depthLoadOp: xq,
          stencilLoadOp: Aq
        } = Oq;
        Oq.depthLoadOp = "load", Aq && (Oq.stencilLoadOp = "load");
        try {
          return mq + 1 + gq()
        } finally {
          Oq.depthLoadOp = xq, Oq.stencilLoadOp = Aq
        }
      }
      trace(qq, Eq) {
        const gq = this.terrain.sunShadowGroup(),
          Yq = qq.beginRenderPass(Eq.trace);
        this.pipeline && gq && (Yq.setPipeline(this.pipeline), Yq.setBindGroup(0, Eq.bindGroup), Yq.setBindGroup(1, this.empty), Yq.setBindGroup(2, this.empty), Yq.setBindGroup(3, gq), Yq.draw(3)), Yq.end()
      }
      retire() {
        const qq = this.retired;
        var Eq;
        qq && (qq.mask.destroy(), qq.normals.destroy(), null === (Eq = qq.depth) || void 0 === Eq || Eq.destroy(), this.retired = null)
      }
      targetsFor(qq) {
        var Eq, gq;
        const Yq = (null !== (Eq = qq._config.depth) && void 0 !== Eq ? Eq : qq._config.rt)._depthTexture;
        return (null === (gq = this.targets) || void 0 === gq ? void 0 : gq.source) === Yq ? this.targets : this.remake(qq, Yq)
      }
      remake(qq, Eq) {
        var gq;
        this.retired = this.targets;
        const Yq = [Eq.width, Eq.height],
          lq = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Yq,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Oq = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Yq,
            format: tx,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          mq = null !== (gq = qq._targetSignature._depthStencilFormat) && void 0 !== gq ? gq : Eq.format,
          xq = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Yq,
            format: mq,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Aq = qq._renderPassDescriptor.depthStencilAttachment,
          cq = mq.includes("stencil"),
          uq = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Oq.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: xq ? xq.createView() : Aq.view,
              depthClearValue: Aq.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...cq ? {
                stencilClearValue: Aq.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Bq = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== xq && void 0 !== xq ? xq : Eq).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Oq.createView()
            }]
          }),
          Wq = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: lq.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [rx(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: Eq,
          mask: lq,
          maskView: lq.createView(),
          normals: Oq,
          depth: xq,
          bindGroup: Bq,
          prepass: uq,
          trace: Wq
        }, this.targets
      }
    }

    function hx(qq, Eq, gq) {
      let Yq = null,
        lq = 0;
      for (const Oq of gq) {
        const gq = Oq.renderable.mesh;
        gq && !1 === gq.visible || (Oq.pipeline !== Yq && (qq.setPipeline(Oq.pipeline), Yq = Oq.pipeline), lq += Oq.draw(qq, Eq))
      }
      return lq
    }
    const nx = 6e4,
      bx = {
        status: "ok"
      },
      ix = {
        status: "skipped"
      };
    async function Zx(qq, Eq) {
      const {
        isCancelled: gq
      } = qq;
      if (gq()) return {
        status: "lE"
      };
      const {
        target: Yq
      } = Eq;
      if (!Yq) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const lq = [],
        Oq = Promise.all(Array.from(new Set(qq.materials), (async gq => {
          lq.push(await async function(qq, Eq, gq, Yq) {
            const lq = {
              lighting: qq.lighting,
              dirLightCount: Math.min(qq.dirLightCount, 4),
              pN: qq.runtime
            };
            try {
              const Oq = Eq.material(Yq);
              return Oq && cY(Eq.programKey(Oq, !1, lq)) ? (await Oq.ready, qq.isCancelled() ? bx : Oq.bindGroupLayout ? await async function(qq, Eq, gq, Yq) {
                const {
                  device: lq
                } = qq;
                let Oq, mq;
                lq.pushErrorScope("validation");
                try {
                  Oq = qq.pipelineBuild(Eq, gq, Yq)
                } finally {
                  mq = lq.popErrorScope().catch((() => null))
                }
                const [xq, Aq] = await Promise.all([mq, Oq.built.then((() => null), (qq => null !== qq && void 0 !== qq ? qq : new Error("pipeline failed")))]);
                if (!xq && !Aq) return bx;
                const cq = await fx(Oq.module),
                  uq = cq.length > 0 ? cq.map((qq => `${Oq.name} ${qq.lineNum}:${qq.linePos}: ${qq.message}`)).join("\n") : `${Oq.name}: ${Mx(null!==Aq&&void 0!==Aq?Aq:xq)}`;
                return {
                  status: "failed",
                  material: Eq.model.name,
                  message: uq
                }
              }(Eq, Oq, Eq.programKey(Oq, "none" !== Oq.texture, lq), gq): (console.warn(`Shader pack: skipped the compile check for "${Yq.name}", whose textures failed to load`), ix)) : bx
            } catch (Oq) {
              return {
                status: "failed",
                material: Yq.name,
                message: Mx(Oq)
              }
            }
          }(qq, Eq, Yq, gq))
        }))),
        mq = function(qq, Eq) {
          let gq, Yq, lq = !1;
          const Oq = new Promise((Oq => {
            var mq;
            gq = setTimeout((() => {
              Oq("timeout")
            }), null !== (mq = Eq.timeoutMs) && void 0 !== mq ? mq : nx), Yq = setInterval((() => {
              Eq.isCancelled() && Oq("lE")
            }), 50), qq.lost.then((() => {
              lq = !0, Oq("lost")
            }))
          }));
          return {
            signal: Oq,
            lost: () => lq,
            dispose: () => {
              clearTimeout(gq), clearInterval(Yq)
            }
          }
        }(Eq.device, qq);
      let xq;
      try {
        xq = await Promise.race([Oq.then((() => "done")), mq.signal])
      } finally {
        mq.dispose()
      }
      if ("lE" === xq || gq()) return {
        status: "lE"
      };
      const Aq = lq.find((qq => "failed" === qq.status));
      return Aq && "lost" !== xq && !mq.lost() && await new Promise((qq => {
        setTimeout(qq, 0)
      })), "lost" === xq || mq.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Aq ? {
        status: "failed",
        failure: {
          material: Aq.material,
          message: Aq.message
        }
      } : "timeout" === xq ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(cq=qq.timeoutMs)&&void 0!==cq?cq:nx)/1e3} s`), {
        status: "skipped"
      }) : lq.some((qq => "skipped" === qq.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var cq
    }
    async function fx(qq) {
      if (!qq) return [];
      try {
        return (await qq.getCompilationInfo()).messages.filter((qq => "error" === qq.type))
      } catch {
        return []
      }
    }

    function Mx(qq) {
      var Eq;
      return null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.message) && void 0 !== Eq ? Eq : String(qq)
    }

    function Tx(qq, Eq, gq, Yq) {
      cY(qq) ? fx(gq).then((qq => {
        const [gq] = qq;
        Xl("terrain", Eq, Yq, gq ? `${gq.lineNum}:${gq.linePos} error: ${gq.message}` : null)
      })) : Xl("terrain", Eq, Yq)
    }
    var zx = gq(37557),
      Sx = gq(37562),
      px = gq(37569),
      Gx = gq(2778);

    function Lx(qq, Eq, gq, Yq, lq) {
      const Oq = Math.hypot(gq[0], gq[1], gq[2]);
      if (!(Oq > 0)) return;
      const mq = [gq[0] / Oq, gq[1] / Oq, gq[2] / Oq],
        xq = [Math.floor(Eq[0]), Math.floor(Eq[1]), Math.floor(Eq[2])],
        Aq = [0, 0, 0],
        cq = [1 / 0, 1 / 0, 1 / 0],
        uq = [1 / 0, 1 / 0, 1 / 0];
      for (let Nq = 0; Nq < 3; Nq++) mq[Nq] > 0 ? (Aq[Nq] = 1, cq[Nq] = (xq[Nq] + 1 - Eq[Nq]) / mq[Nq], uq[Nq] = 1 / mq[Nq]) : mq[Nq] < 0 && (Aq[Nq] = -1, cq[Nq] = (xq[Nq] - Eq[Nq]) / mq[Nq], uq[Nq] = -1 / mq[Nq]);
      const {
        Oa: Bq
      } = qq;
      let Wq = qq.mC(xq[0], xq[1], xq[2]);
      for (;;) {
        const Eq = cq[0] < cq[1] ? cq[0] < cq[2] ? 0 : 2 : cq[1] < cq[2] ? 1 : 2;
        if (cq[Eq] > Yq) return;
        const gq = Aq[Eq] > 0 ? xq[Eq] + 1 : xq[Eq];
        xq[Eq] += Aq[Eq], cq[Eq] += uq[Eq];
        const Oq = qq.mC(xq[0], xq[1], xq[2]),
          mq = Oq !== Wq && !(qq.opaque[Wq] && qq.opaque[Oq]);
        if (mq) {
          const Yq = [xq[0], xq[1], xq[2]];
          Yq[Eq] = gq;
          const Oq = Math.floor(Yq[0] / Bq),
            mq = Math.floor(Yq[1] / Bq),
            Aq = Math.floor(Yq[2] / Bq);
          !qq.isDrawn(Oq, mq, Aq) && qq.hasParts(Oq, mq, Aq) && lq.add(`${Oq},${mq},${Aq}`)
        }
        if (mq && qq.occluders[Oq]) return;
        Wq = Oq
      }
    }

    function Jx(qq, Eq) {
      return qq.group - Eq.group || qq.nearest - Eq.nearest
    }
    class kx {
      constructor(qq, Eq) {
        this.device = qq, this.EQ = Eq, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var qq;
        const Eq = null !== (qq = this.free.pop()) && void 0 !== qq ? qq : this.next++;
        if (8 * Eq >= this.data.length) {
          const qq = new Float32Array(2 * this.data.length);
          qq.set(this.data), this.data = qq, this.words = new Uint32Array(qq.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.EQ()
        }
        return Eq
      }
      release(qq) {
        this.free.push(qq)
      }
      set(qq, Eq, gq, Yq, lq) {
        const Oq = 8 * qq + oY;
        this.data[Oq] = Eq, this.data[Oq + 1] = gq, this.data[Oq + 2] = Yq, this.setVisibility(qq, lq)
      }
      setVisibility(qq, Eq) {
        this.data[8 * qq + PY] = Eq, this.markDirty(qq, qq)
      }
      setFaces(qq, Eq, gq) {
        const Yq = 8 * qq;
        this.words[Yq + QY] = Eq, this.words[Yq + yY] = gq, this.markDirty(qq, qq)
      }
      markDirty(qq, Eq) {
        this.dirtyMin = Math.min(this.dirtyMin, qq), this.dirtyMax = Math.max(this.dirtyMax, Eq)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Rx = HY,
      Ux = !0;
    const Fx = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Rx.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      sx = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Xx {
      constructor(qq) {
        this.device = qq, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(BY), this.dirLightUniforms = this.frameUniforms.subarray(uY.dirLights, uY.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, cE.e)(), this.faceGroups = !0, this.visibilityGraph = Ux, this.visCull = Ux, this.visCheck = !1, this.visCullMinDistance = px.f, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Ix, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.pN = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Qx(qq, ((qq, Eq) => this.recordsGroup(qq, Eq))), this.slots = new kx(qq, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = EE(qq), this.frameLayout = qq.createBindGroupLayout({
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
        }), this.frameBuffer = qq.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = qq.createSampler({
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
          bind: (qq, Eq) => this.createBinding(this.opaqueRenderable, Eq, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (qq, Eq) => this.createBinding(this.transparentRenderable, Eq, !0)
        }
      }
      installSceneDepth(qq, Eq) {
        this.sceneDepth = new yx(this.device, this.transparentRenderable, qq, Eq)
      }
      createFrameBindGroup() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== qq && void 0 !== qq ? qq : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== Eq && void 0 !== Eq ? Eq : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(qq, Eq) {
        const gq = null !== Eq && void 0 !== Eq ? Eq : qq;
        let Yq = this.recordsGroups.get(gq);
        return Yq || (Yq = this.createFrameBindGroup(qq, Eq), this.recordsGroups.set(gq, Yq)), Yq
      }
      setChunkMesh(qq, Eq, gq) {
        var Yq;
        let lq = this.chunks.get(qq);
        lq ? this.geometry.release(lq) : (lq = {
          mesh: qq,
          slot: this.slots.allocate(),
          origin: [gq[0], gq[1], gq[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: qq.visibility,
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
        }, this.chunks.set(qq, lq), this.writeSlot(lq)), lq.material = qq.material ? this.materialFor(qq.material) : null, lq.packed = !!Eq.packedVertices, lq.vertexCount = (0, Wx.h)(Eq), lq.faceCount = lq.vertexCount / 4;
        const Oq = null !== (Yq = Eq.faceGroups) && void 0 !== Yq ? Yq : null;
        if (lq.faceGroups = Oq, Oq) {
          const qq = zx.p;
          lq.planePX = Oq[qq], lq.planeNX = Oq[qq + 1], lq.planePY = Oq[qq + 2], lq.planeNY = Oq[qq + 3], lq.planePZ = Oq[qq + 4], lq.planeNZ = Oq[qq + 5]
        }
        this.drawWhole(lq), 0 !== lq.faceCount && (this.geometry.set(lq, Eq) ? (lq.packed && this.slots.setFaces(lq.slot, lq.vertices.start + lq.faceCount, lq.faceCount), Eq.sN && this.setChunkMeshLight(qq, Eq.sN)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${lq.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(qq, Eq) {
        const gq = this.chunks.get(qq);
        gq && this.geometry.setLight(gq, Eq)
      }
      drawStats() {
        let qq = this.transparent.length;
        for (const Eq of this.opaqueBatches) qq += Eq.meshes.length;
        return {
          drawn: qq,
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
      removeChunkMesh(qq) {
        const Eq = this.chunks.get(qq);
        Eq && (this.geometry.release(Eq), this.slots.release(Eq.slot), this.chunks.delete(qq))
      }
      remeshLost(qq, Eq) {
        this.geometry.release(Eq), Eq.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** Eq.lostRemeshes++);
        const gq = qq.kB,
          [Yq, lq, Oq] = gq.ylq(Eq.origin[0], Eq.origin[1], Eq.origin[2]),
          mq = gq.qV.EV(Yq, lq, Oq);
        mq && (mq.ea = !0, mq.OV = !0, gq.Da(mq, !1))
      }
      chooseFaceRanges(qq, Eq, gq) {
        const Yq = this.faceRanges;
        qq.faceMask = gq, qq.rangeCount = (0, Sx.k)(Eq, gq, Yq), qq.first0 = Yq[0], qq.count0 = Yq[1], qq.first1 = Yq[2], qq.count1 = Yq[3]
      }
      drawWhole(qq) {
        qq.faceMask = -1, qq.faceEpoch = -1, qq.rangeCount = 1, qq.first0 = 0, qq.count0 = qq.faceCount
      }
      writeSlot(qq) {
        const [Eq, gq, Yq] = this.originOffset;
        this.slots.set(qq.slot, qq.origin[0] - Eq, qq.origin[1] - gq, qq.origin[2] - Yq, qq.visibility)
      }
      materialFor(qq) {
        const Eq = this.materials.get(qq);
        if (Eq) return Eq;
        const gq = ax(qq);
        if (!gq) return this.warnOnce(`material:${qq.name}`, `Lite terrain cannot draw material "${qq.name}"; its chunks are skipped.`), null;
        const {
          model: Yq,
          atlas: lq,
          texture: Oq,
          animated: mq,
          uniformData: xq
        } = gq, Aq = {
          id: this.materials.size,
          model: Yq,
          texture: Oq,
          animated: mq,
          uniformData: xq,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${qq.name}`,
            size: xq.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: gq.liquid,
          customRenderMat: gq.customRenderMat,
          atlasCount: 0,
          N_: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(qq, Aq), this.device.queue.writeBuffer(Aq.uniformBuffer, 0, xq), Aq.ready = this.createMaterialBindGroup(Aq, lq).catch((Eq => {
          console.error(`Lite terrain failed to load the textures of material "${qq.name}"`, Eq)
        })), Aq
      }
      materialLayout(qq) {
        const Eq = function(qq) {
            const Eq = ["uniforms"];
            if ("atlas" === qq.texture) {
              qq.animated && Eq.push("animData"), Eq.push("sampler");
              for (let gq = 0; gq < qq.atlasCount; gq++) Eq.push("textureArray")
            } else "single" === qq.texture && Eq.push("sampler", "texture");
            return Eq
          }(qq),
          gq = Eq.join(",");
        let Yq = this.materialLayouts.get(gq);
        if (!Yq) {
          const qq = GPUShaderStage.FRAGMENT;
          Yq = this.device.createBindGroupLayout({
            label: `terrain-material-${gq}`,
            entries: Eq.map(((Eq, gq) => {
              switch (Eq) {
                case "uniforms":
                  return {
                    binding: gq, visibility: GPUShaderStage.VERTEX | qq, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: gq, visibility: GPUShaderStage.VERTEX | qq, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: gq, visibility: qq, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: gq, visibility: qq, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: gq, visibility: qq, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(gq, Yq)
        }
        return Yq
      }
      async createMaterialBindGroup(qq, Eq) {
        const gq = [{
          buffer: qq.uniformBuffer
        }];
        if (Eq) {
          const {
            urls: Yq,
            pixels: lq,
            layerWidth: Oq
          } = Eq.sources, mq = await Promise.all(Yq.map(((qq, Eq) => {
            var gq;
            return Ll(this.device, qq, null !== (gq = null === lq || void 0 === lq ? void 0 : lq[Eq]) && void 0 !== gq ? gq : null, Oq)
          })));
          qq.atlasCount = mq.length, qq.N_ = mq[0].layerWidth, qq.atlasLayers = mq[0].layers, Eq.animDataPerTex && gq.push({
            buffer: Zl(this.device, Float32Array.from(Eq.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), gq.push(this.sampler);
          for (const qq of mq) gq.push(qq.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === qq.texture) {
          const {
            url: Eq
          } = qq.model.diffuseTexture.source, {
            pixels: Yq,
            width: lq,
            height: Oq
          } = await pl(Eq);
          gq.push(this.sampler), gq.push(Ml(this.device, Yq, lq, Oq, 1, `terrain-${Eq}`).createView({
            dimension: "2d"
          }))
        }
        const Yq = this.materialLayout(this.programKey(qq, !1));
        qq.bindGroupLayout = Yq, qq.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${qq.model.name}`,
          layout: Yq,
          entries: gq.map(((qq, Eq) => ({
            binding: Eq,
            resource: qq
          })))
        })
      }
      programKey(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Yq = gq ? gq.lighting : this.lighting,
          lq = gq ? gq.pN : this.pN,
          Oq = {
            texture: qq.texture,
            atlasCount: qq.atlasCount,
            N_: qq.N_,
            atlasLayers: qq.atlasLayers,
            animated: qq.animated,
            alphaTest: qq.model.transparencyMode === vq.q.alphaTest,
            lighting: Yq,
            dirLightCount: gq ? gq.dirLightCount : this.dirLightCount,
            packed: Eq
          };
        if (!lq) return Oq;
        const mq = this.shaderPackFields(qq, lq),
          xq = "atlas" === qq.texture && qq.model.transparencyMode === vq.q.opaque && OY(mq.packVariant);
        return {
          ...Oq,
          ...mq,
          alphaTest: Oq.alphaTest || xq
        }
      }
      shaderPackFields(qq, Eq) {
        return qq.customRenderMat ? YY : function(qq, Eq) {
          if (!qq) return YY;
          const gq = qq.defineFor(Eq ? "liquid" : "terrain");
          return 0 === gq ? YY : {
            packVariant: gq,
            liquid: Eq
          }
        }(Eq, qq.liquid)
      }
      isBlended(qq) {
        return qq.model.transparencyMode === vq.q.alphaBlend
      }
      shaderModule(qq, Eq) {
        let gq = this.modules.get(qq);
        return gq || (gq = this.device.createShaderModule({
          label: Eq,
          code: qq
        }), this.modules.set(qq, gq)), gq
      }
      pipelineFor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!qq.bindGroupLayout) return null;
        const lq = this.programKey(qq, Eq);
        if (!Yq) return this.pipelineOf(qq, lq, gq);
        const Oq = {
            ...lq,
            resting: Yq
          },
          mq = this.pipelineId(qq, Oq, gq),
          xq = this.pipelines.get(mq);
        if (xq) return xq;
        const Aq = this.pipelineOf(qq, lq, gq);
        return Aq && void 0 === xq && this.startPipeline(mq, qq, Oq, gq), Aq
      }
      pipelineOf(qq, Eq, gq) {
        const Yq = this.pipelineId(qq, Eq, gq),
          lq = this.pipelines.get(Yq);
        return void 0 !== lq ? lq : (this.startPipeline(Yq, qq, Eq, gq), null)
      }
      pipelineId(qq, Eq, gq) {
        return wx(Eq, this.isBlended(qq), qq.model.backFaceCulling, gq)
      }
      pipelineBuild(qq, Eq, gq) {
        var Yq;
        const lq = this.pipelineId(qq, Eq, gq);
        return null !== (Yq = this.builds.get(lq)) && void 0 !== Yq ? Yq : this.startPipeline(lq, qq, Eq, gq)
      }
      startPipeline(qq, Eq, gq, Yq) {
        var lq;
        this.pipelines.set(qq, null);
        const Oq = bY(gq),
          mq = this.isBlended(Eq),
          xq = this.shadowMask && Yq._depthStencilFormat ? function(qq, Eq, gq, Yq) {
            if (void 0 === qq.packVariant || qq.liquid || Eq) return "none";
            const lq = (0, nE.i)(qq.packVariant);
            return null === lq || void 0 === lq || !lq.sunShadow || !Sg(lq, gq) || lq.discards || qq.alphaTest && OY(qq.packVariant) ? "none" : Yq ? "edge" : "plain"
          }(gq, mq, !!this.sunShadow, Yq._sampleCount > 1) : "none";
        let Aq;
        try {
          Aq = iY(gq, !!this.sunShadow, xq)
        } catch (dq) {
          if (!cY(gq)) throw dq;
          return this.failedPackBuild(qq, gq, Oq, dq)
        }
        const cq = this.shaderModule(Aq, Oq),
          uq = [];
        gq.packed || (uq.push(function(qq, Eq) {
          const gq = [{
            shaderLocation: Rx.position,
            offset: rE.e.fg,
            format: "float32x3"
          }, {
            shaderLocation: Rx.normal,
            offset: rE.e.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Rx.color,
            offset: rE.e.colorOffset,
            format: "unorm8x4"
          }];
          return qq && gq.push({
            shaderLocation: Rx.uv,
            offset: rE.e.uvOffset,
            format: "float32x2"
          }), Eq && gq.push({
            shaderLocation: Rx.blockFlagWords,
            offset: rE.e.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: rE.e.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: gq
          }
        }("none" !== gq.texture, cY(gq))), gq.lighting && uq.push(Fx));
        const Bq = Eq.model.backFaceCulling,
          Wq = {
            label: Oq,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Eq.bindGroupLayout, ...JO(this.device, gq, !!this.sunShadow, "none" !== xq)]
            }),
            vertex: {
              module: cq,
              entryPoint: "mainVertex",
              buffers: uq
            },
            fragment: Iq({
              module: cq,
              entryPoint: "mainFragment"
            }, Yq, mq ? sx : null),
            depthStencil: Yq._depthStencilFormat ? {
              format: Yq._depthStencilFormat,
              depthCompare: null !== (lq = Yq._depthCompare) && void 0 !== lq ? lq : gE,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Yq._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Bq ? "back" : "none"
            }
          },
          Nq = gq.resting ? 0 : 1;
        this.compiling += Nq;
        const aq = "none" === xq ? this.device.createRenderPipelineAsync(Wq) : this.startMaskPipelines(cq, Wq, "edge" === xq);
        aq.then((Eq => {
          this.compiling -= Nq, this.pipelines.set(qq, Eq)
        }), (qq => {
          this.compiling -= Nq, console.error(`Lite terrain pipeline ${Oq} failed`, qq), Tx(gq, Oq, cq, qq)
        }));
        const Vq = {
          name: Oq,
          module: cq,
          built: aq
        };
        return this.builds.set(qq, Vq), Vq
      }
      startMaskPipelines(qq, Eq, gq) {
        const Yq = Eq.depthStencil,
          lq = this.device.createRenderPipelineAsync(gq ? Eq : {
            ...Eq,
            depthStencil: {
              ...Yq,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Oq = this.device.createRenderPipelineAsync({
            ...Eq,
            label: `${Eq.label}-prepass`,
            fragment: {
              module: qq,
              entryPoint: "prepassFragment",
              targets: [{
                format: tx
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([lq, Oq]).then((qq => {
          let [Eq, gq] = qq;
          return this.prepassOf.set(Eq, gq), this.maskPipelines++, Eq
        }))
      }
      failedPackBuild(qq, Eq, gq, Yq) {
        console.error(`Lite terrain pipeline ${gq} failed`, Yq), Tx(Eq, gq, null, Yq);
        const lq = Promise.reject(Yq);
        lq.catch((() => {}));
        const Oq = {
          name: gq,
          module: null,
          built: lq
        };
        return this.builds.set(qq, Oq), Oq
      }
      checkShaderPack(qq) {
        return Zx(qq, {
          device: this.device,
          target: this.target,
          material: qq => this.materialFor(qq),
          programKey: (qq, Eq, gq) => this.programKey(qq, Eq, gq),
          pipelineBuild: (qq, Eq, gq) => this.pipelineBuild(qq, Eq, gq)
        })
      }
      createBinding(qq, Eq, gq) {
        return this.target = Eq, {
          renderable: qq,
          pipeline: mE(this.device, Eq),
          draw: qq => {
            this.geometry.setDrawing(!0);
            try {
              return gq ? this.drawTransparent(qq, Eq) : this.drawOpaque(qq, Eq)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(qq, Eq) {
        var gq, Yq, lq, Oq;
        const {
          wB: mq
        } = qq;
        this.lighting = qq.VV;
        const xq = (0, Bx.w)(Eq);
        this.dirLightCount = Math.min(xq, 4), this.pN = null !== (gq = mq.pN) && void 0 !== gq ? gq : null, xq > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(qq, Eq), this.animateMaterials(Eq.animTick);
        const Aq = mq.BW,
          cq = Aq[0] !== this.originOffset[0] || Aq[1] !== this.originOffset[1] || Aq[2] !== this.originOffset[2];
        cq && (this.originOffset[0] = Aq[0], this.originOffset[1] = Aq[1], this.originOffset[2] = Aq[2]);
        const uq = Eq.eye;
        this.eye[0] = uq[0], this.eye[1] = uq[1], this.eye[2] = uq[2], this.writeShaderPackInputs();
        const Bq = Eq.projectionMatrix,
          Wq = 0 === Bq[15];
        let Nq = 0;
        (cq || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: aq
        } = this;
        xE(this.transparentRenderable._worldCenter, Eq, lE), this.resetBatches(Wq), this.transparent.length = 0, this.unlit.length = 0;
        const Vq = mq.kB.Uqq,
          dq = Vq / 2 * Math.sqrt(3);
        let jq = 0;
        const Hq = !!this.pN && lY(this.pN.defineFor("liquid"));
        let oq = !1;
        const Pq = null !== (Yq = null === (lq = mq.Qv) || void 0 === lq ? void 0 : lq.visibility) && void 0 !== Yq ? Yq : null,
          Qq = this.visCull && Wq && 0 === this.compiling && null !== Pq && mq.kB.pYq[0] >= this.visCullMinDistance ? this.target : null,
          yq = this.visPassable,
          tq = this.visCandidates,
          rq = this.visCandidateBatches;
        yq.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let vq = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let hq = 0;
        const nq = (qq, gq) => {
          if (!gq) return this.transparent.push(qq), void(hq += 2 * qq.faceCount);
          if (null !== qq.faceGroups && gq.faceCull) {
            if (0 === Nq && (Nq = (0, Sx.d)(Bq, Eq.renderWidth, Eq.renderHeight), Nq !== this.faceFocalPx && (this.faceFocalPx = Nq, aq = ++this.faceEpoch)), qq.faceEpoch !== aq) {
              qq.faceEpoch = aq;
              const Eq = Math.sqrt(qq.distance) + dq,
                gq = (0, Sx.g)(qq.planePX, qq.planeNX, qq.planePY, qq.planeNY, qq.planePZ, qq.planeNZ, this.eye[0] - (qq.origin[0] - this.originOffset[0]), this.eye[1] - (qq.origin[1] - this.originOffset[1]), this.eye[2] - (qq.origin[2] - this.originOffset[2]), (0, Sx.e)(Eq, Nq));
              gq !== qq.faceMask && this.chooseFaceRanges(qq, qq.faceGroups, gq)
            }
            if (0 === qq.rangeCount) return
          } else - 1 !== qq.faceMask && this.drawWhole(qq);
          gq.meshes.push(qq), hq += 2 * ((qq.rangeCount > 0 ? qq.count0 : 0) + (qq.rangeCount > 1 ? qq.count1 : 0))
        };
        for (const iq of this.chunks.values()) {
          cq && this.writeSlot(iq);
          const qq = iq.mesh.visibility;
          qq !== iq.visibility && (iq.visibility = qq, this.slots.setVisibility(iq.slot, qq));
          const {
            material: gq
          } = iq;
          this.geometry.lost(iq) && performance.now() >= iq.lostRetryAt && this.remeshLost(mq, iq);
          const Yq = !(null === gq || void 0 === gq || !gq.bindGroup) && this.geometry.backed(iq),
            lq = Yq && this.lighting && !iq.vertices.page.twin;
          if (Qq && (Number.isNaN(iq.key) && (iq.ci = Math.floor(iq.origin[0] / Vq), iq.cj = Math.floor(iq.origin[1] / Vq), iq.ck = Math.floor(iq.origin[2] / Vq), iq.key = (0, Gx.i)(iq.ci, iq.cj, iq.ck)), (!Yq || qq < 1 || lq || !this.batchDraws(gq, iq.packed, Qq)) && this.visSeeThrough(iq, Qq) && yq.add(iq.key)), !Yq) continue;
          lq || (iq.lostRemeshes = 0);
          const Oq = iq.origin[0] - this.originOffset[0],
            xq = iq.origin[1] - this.originOffset[1],
            Aq = iq.origin[2] - this.originOffset[2];
          if (!(0, Dm.b)(Eq.frustum, Oq, xq, Aq, Vq)) continue;
          const uq = Oq + Vq / 2 - this.eye[0],
            Bq = xq + Vq / 2 - this.eye[1],
            Nq = Aq + Vq / 2 - this.eye[2];
          if (iq.distance = uq * uq + Bq * Bq + Nq * Nq, this.lighting && !iq.lit && (jq = Math.max(jq, iq.vertexCount), this.unlit.push(iq)), lq) continue;
          const aq = this.isBlended(gq) ? null : this.batchFor(gq, iq.packed, iq.vertices.page, 1 === qq, Wq);
          Qq ? (tq[vq] = iq, rq[vq++] = aq) : nq(iq, aq)
        }
        const bq = Qq ? this.sweepVisibility(qq, Eq, Pq) : null;
        null === (Oq = (0, bO.q)(mq)) || void 0 === Oq || Oq.update(Eq.frustum, this.originOffset, Vq, bq);
        for (let iq = 0; iq < vq; iq++) {
          const qq = tq[iq];
          !bq || bq.isDrawn(qq.ci, qq.cj, qq.ck) ? nq(qq, rq[iq]) : (this.visCulledParts++, this.visCulledTriangles += 2 * qq.faceCount)
        }
        for (const iq of this.transparent) oq ||= Hq && iq.material.liquid && !iq.material.customRenderMat;
        this.submittedTriangles = hq, bq && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(qq, Eq, bq)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(oq) : oq && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && jq > 0 && this.geometry.lightFullSky(this.unlit, jq);
        for (const iq of this.opaqueBatches) this.chunkSorter.sort(iq.meshes, 1) || iq.meshes.sort(Kx);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Cx)
      }
      sweepVisibility(qq, Eq, gq) {
        const {
          kB: Yq
        } = qq.wB, lq = Yq.Uqq, Oq = this.visPassable, mq = this.eye[0] + this.originOffset[0], xq = this.eye[1] + this.originOffset[1], Aq = this.eye[2] + this.originOffset[2];
        if (!gq.eyeClear(mq, xq, Aq, Eq.near, Eq.projectionMatrix, Yq)) return null;
        const [cq, uq] = Yq.pYq, Bq = gq.update(mq, xq, Aq, lq, cq, uq, Oq);
        return this.visSweeps = gq.sweeps, Bq ? gq : null
      }
      visSeeThrough(qq, Eq) {
        const {
          material: gq
        } = qq;
        return (!gq || !this.isBlended(gq)) && (qq.mesh.visibility < 1 || !(null !== gq && void 0 !== gq && gq.bindGroup) || qq.faceCount > 0 && (!this.geometry.backed(qq) || this.lighting && !qq.vertices.page.twin) || !this.batchDraws(gq, qq.packed, Eq))
      }
      batchDraws(qq, Eq, gq) {
        var Yq;
        const lq = Eq ? 2 : 0;
        if (qq === this.visDrawsMaterial && function(qq, Eq) {
            return 0 !== (qq & 1 << Eq)
          }(this.visDrawsBits, lq)) return 0 !== (this.visDrawsBits & 2 << lq);
        let Oq = null !== (Yq = this.visBatchDraws.get(qq)) && void 0 !== Yq ? Yq : 0;
        if (!(Oq & 1 << lq)) {
          Oq |= 1 << lq | (!!qq.bindGroupLayout && this.canDraw(qq, Eq) && !!this.pipelines.get(this.pipelineId(qq, this.programKey(qq, Eq), gq)) ? 2 << lq : 0), this.visBatchDraws.set(qq, Oq)
        }
        return this.visDrawsMaterial = qq, this.visDrawsBits = Oq, 0 !== (Oq & 2 << lq)
      }
      runVisCheck(qq, Eq, gq) {
        const {
          wB: Yq
        } = qq, {
          kB: lq
        } = Yq, Oq = lq.Uqq, mq = new Set;
        for (const Nq of this.chunks.values()) mq.add(Nq.key);
        const xq = ol.Matrix.FromArray(Eq.viewProjectionMatrix).invert(),
          [Aq, cq, uq] = this.originOffset,
          Bq = new ol.Na,
          Wq = function(qq, Eq, gq, Yq) {
            const lq = new Set;
            for (let Oq = 0; Oq < 27; Oq++)
              for (let mq = 0; mq < 48; mq++) {
                const xq = gq((mq + .5) / 48 * 2 - 1, (Oq + .5) / 27 * 2 - 1);
                Lx(qq, Eq, [xq[0] - Eq[0], xq[1] - Eq[1], xq[2] - Eq[2]], Yq, lq)
              }
            return lq
          }({
            mC: (qq, Eq, gq) => lq.mC(qq, Eq, gq),
            occluders: gq.occluders,
            opaque: gq.opaque,
            Oa: Oq,
            isDrawn: (qq, Eq, Yq) => gq.isDrawn(qq, Eq, Yq),
            hasParts: (qq, Eq, gq) => mq.has((0, Gx.i)(qq, Eq, gq))
          }, [this.eye[0] + Aq, this.eye[1] + cq, this.eye[2] + uq], ((qq, Eq) => (ol.Na.TransformCoordinatesFromFloatsToRef(qq, Eq, .5, xq, Bq), [Bq.x + Aq, Bq.y + cq, Bq.z + uq])), (lq.pYq[0] + 1) * Oq);
        this.visViolations = Wq.size;
        for (const Nq of Wq) this.warnOnce(`vis:${Nq}`, `Lite terrain cave culling skipped chunk ${Nq}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var qq;
        null !== (qq = this.pN) && void 0 !== qq && qq.isRunning() && (this.shaderPackInputs ??= new kO(this.device, this.pN.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.pN, this.eye, this.lighting))
      }
      bindShaderPackInputs(qq, Eq, gq) {
        var Yq, lq, Oq, mq;
        let xq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: Aq
        } = this.shaderPackFields(Eq, gq);
        if (void 0 === Aq) return;
        this.shaderPackInputs || (this.shaderPackInputs = new kO(this.device, gq.textureLayers(), this.sunShadow), this.shaderPackInputs.write(gq, this.eye, this.lighting));
        const cq = lY(Aq) ? null !== (Yq = null === (lq = this.sceneDepth) || void 0 === lq ? void 0 : lq.view) && void 0 !== Yq ? Yq : this.standIn() : null,
          uq = xq ? null !== (Oq = null === (mq = this.shadowMask) || void 0 === mq ? void 0 : mq.view) && void 0 !== Oq ? Oq : this.standIn() : null;
        this.shaderPackInputs.bind(qq, cq, LO(Aq, !!this.sunShadow), uq)
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
        var qq, Eq;
        return null !== (qq = null === (Eq = this.shaderPackInputs) || void 0 === Eq ? void 0 : Eq.bindGroupFor(null, !0)) && void 0 !== qq ? qq : null
      }
      resetBatches(qq) {
        const Eq = this.opaqueBatches;
        let gq = 0;
        for (const Yq of Eq) Yq.meshes.length > 0 && (Yq.meshes.length = 0, Yq.faceCull = this.batchFaceCull(Yq.material, qq), Eq[gq++] = Yq);
        Eq.length = gq
      }
      orderBatches() {
        const qq = this.opaqueBatches;
        for (let Eq = 0; Eq < qq.length; Eq++) {
          const gq = qq[Eq];
          gq.group = Eq;
          for (let Yq = 0; Yq < Eq; Yq++) {
            const Eq = qq[Yq];
            if (Eq.material === gq.material && Eq.packed === gq.packed) {
              gq.group = Eq.group;
              break
            }
          }
          gq.nearest = gq.meshes.length > 0 ? gq.meshes[0].distance : 1 / 0
        }
        qq.sort(Jx)
      }
      batchFor(qq, Eq, gq, Yq, lq) {
        for (const mq of this.opaqueBatches)
          if (mq.material === qq && mq.packed === Eq && mq.page === gq && mq.resting === Yq) return mq;
        const Oq = {
          material: qq,
          packed: Eq,
          page: gq,
          resting: Yq,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(qq, lq)
        };
        return this.opaqueBatches.push(Oq), Oq
      }
      batchFaceCull(qq, Eq) {
        return !(!Eq || !(0, zx.v)(qq.model)) && (!this.pN || ! function(qq) {
          var Eq;
          return !(null === (Eq = (0, nE.i)(qq)) || void 0 === Eq || !Eq.movesVertices)
        }(this.shaderPackFields(qq, this.pN).packVariant))
      }
      writeFrameUniforms(qq, Eq) {
        const gq = this.frameUniforms,
          Yq = uY;
        if ((0, Bx.x)(qq, gq), gq[Yq.fogInfos] = Eq.fogEnabled ? Eq.fogMode : 0, gq[Yq.fogInfos + 1] = Eq.fogStart, gq[Yq.fogInfos + 2] = Eq.fogEnd, gq[Yq.fogInfos + 3] = Eq.fogDensity, gq.set(Eq.fogColour, Yq.fogColour), gq[Yq.outputHeight] = Eq.renderHeight, gq.set(Eq.ambientColour, Yq.sceneAmbient), (0, Bx.u)(Eq, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const Eq = (0, Wx.l)(qq.za, qq.Aa, qq.ca);
          for (let qq = 0; qq < 4; qq++) gq[Yq.aoLevels + qq] = Eq[qq] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, gq)
      }
      animateMaterials(qq) {
        const Eq = WY.anim;
        for (const gq of this.materials.values()) gq.animated && (gq.uniformData[Eq] = qq, this.device.queue.writeBuffer(gq.uniformBuffer, 4 * Eq, gq.uniformData, Eq, 1))
      }
      canDraw(qq, Eq) {
        return !("atlas" === qq.texture && !Eq) || (this.warnOnce(`stride:${qq.id}`, `Lite terrain: material "${qq.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(qq, Eq) {
        let gq = 0;
        qq.setBindGroup(1, this.frameBindGroup);
        for (const Yq of this.opaqueBatches) {
          if (!Yq.meshes.length || !this.canDraw(Yq.material, Yq.packed)) continue;
          const lq = this.pipelineFor(Yq.material, Yq.packed, Eq, Yq.resting);
          lq && (qq.setPipeline(lq), qq.setBindGroup(2, Yq.material.bindGroup), this.pN && this.bindShaderPackInputs(qq, Yq.material, this.pN, this.prepassOf.has(lq)), gq += this.drawBatch(qq, Yq))
        }
        return gq
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(qq, Eq, gq) {
        const Yq = this.target,
          lq = this.pN;
        if (!Yq || !lq || 0 === this.maskPipelines) return 0;
        let Oq = 0,
          mq = null;
        this.geometry.setDrawing(!0);
        try {
          for (const xq of this.opaqueBatches) {
            if (!xq.meshes.length || !this.canDraw(xq.material, xq.packed)) continue;
            const Aq = this.pipelineFor(xq.material, xq.packed, Yq, xq.resting),
              cq = Aq && this.prepassOf.get(Aq);
            cq && (mq || (mq = qq.beginRenderPass(Eq), mq.setBindGroup(0, gq), mq.setBindGroup(1, this.frameBindGroup)), mq.setPipeline(cq), mq.setBindGroup(2, xq.material.bindGroup), this.bindShaderPackInputs(mq, xq.material, lq, !0), Oq += this.drawBatch(mq, xq))
          }
        } finally {
          var xq;
          null === (xq = mq) || void 0 === xq || xq.end(), this.geometry.setDrawing(!1)
        }
        return Oq
      }
      drawBatch(qq, Eq) {
        let gq = 0;
        for (const Yq of Eq.meshes) {
          const {
            rangeCount: Eq
          } = Yq;
          Eq > 0 && (gq += this.geometry.draw(qq, Yq, this.lighting, Yq.first0, Yq.count0), Eq > 1 && (gq += this.geometry.draw(qq, Yq, this.lighting, Yq.first1, Yq.count1)))
        }
        return gq
      }
      drawTransparent(qq, Eq) {
        let gq = 0,
          Yq = null,
          lq = null;
        qq.setBindGroup(1, this.frameBindGroup);
        for (const Oq of this.transparent) {
          const mq = Oq.material;
          if (!this.canDraw(mq, Oq.packed)) continue;
          const xq = this.pipelineFor(mq, Oq.packed, Eq);
          xq && (xq !== Yq && (qq.setPipeline(xq), Yq = xq, this.pN && this.bindShaderPackInputs(qq, mq, this.pN)), mq !== lq && (qq.setBindGroup(2, mq.bindGroup), lq = mq), gq += this.geometry.draw(qq, Oq, this.lighting))
        }
        return gq
      }
    }

    function wx(qq, Eq, gq, Yq) {
      return `${bY(qq)}|${qq.atlasLayers}|${qq.N_}|${Eq}|${gq}|${Yq._colorFormat}|${Yq._depthStencilFormat}|${Yq._sampleCount}`
    }

    function Kx(qq, Eq) {
      return qq.distance - Eq.distance
    }

    function Cx(qq, Eq) {
      return Eq.distance - qq.distance
    }
    class Ix {
      constructor() {
        this.left = []
      }
      sort(qq, Eq) {
        for (let gq = 0; gq < qq.length; gq++) {
          const Eq = qq[gq].distance;
          if (Eq - Eq !== 0) return !1
        }
        return this.sortRange(qq, 0, qq.length, Eq), !0
      }
      sortRange(qq, Eq, gq, Yq) {
        if (gq - Eq <= 16) {
          for (let lq = Eq + 1; lq < gq; lq++) {
            const gq = qq[lq],
              Oq = Yq * gq.distance;
            let mq = lq - 1;
            for (; mq >= Eq && Yq * qq[mq].distance > Oq; mq--) qq[mq + 1] = qq[mq];
            qq[mq + 1] = gq
          }
          return
        }
        const lq = Eq + gq >>> 1;
        if (this.sortRange(qq, Eq, lq, Yq), this.sortRange(qq, lq, gq, Yq), Yq * qq[lq - 1].distance <= Yq * qq[lq].distance) return;
        const {
          left: Oq
        } = this, mq = lq - Eq;
        for (let uq = 0; uq < mq; uq++) Oq[uq] = qq[Eq + uq];
        let xq = 0,
          Aq = lq,
          cq = Eq;
        for (; xq < mq && Aq < gq;) qq[cq++] = Yq * qq[Aq].distance < Yq * Oq[xq].distance ? qq[Aq++] : Oq[xq++];
        for (; xq < mq;) qq[cq++] = Oq[xq++]
      }
    }
    const ex = Math.ceil(102);

    function Dx(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Eq;
      const Oq = Math.min(Eq, gq),
        mq = new Uint32Array(qg(Yq));
      for (let xq = 0; xq < Yq; xq++) {
        const Eq = Math.floor(xq * Oq / Yq),
          gq = Math.max(Eq + 1, Math.floor((xq + 1) * Oq / Yq));
        for (let Aq = 0; Aq < Yq; Aq++) {
          const cq = Math.floor(Aq * Oq / Yq),
            uq = Math.max(cq + 1, Math.floor((Aq + 1) * Oq / Yq));
          let Bq = 0;
          for (let Yq = Eq; Yq < gq; Yq++)
            for (let Eq = cq; Eq < uq; Eq++) qq[Yq * lq + Eq] >= ex && Bq++;
          if (2 * Bq >= (gq - Eq) * (uq - cq)) {
            const qq = Aq + Yq * xq;
            mq[qq >>> 5] |= 1 << (31 & qq)
          }
        }
      }
      return mq
    }

    function qA(qq) {
      return Math.max(1, Math.min(16, qq))
    }
    class EA {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = qq, this.loadTexture = Eq, this.warn = gq, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(qq, Eq) {
        return (qq.Gs !== this.builtVersion || this.blockCaster.length !== Eq) && (this.build(qq, Eq), !0)
      }
      build(qq, Eq) {
        this.builtVersion = qq.Gs;
        const gq = new Uint16Array(Eq),
          Yq = new Map;
        for (let lq = 1; lq < Eq; lq++) {
          const Eq = this.classify(qq, lq, Yq);
          if (null === Eq || Eq === KE) {
            gq[lq] = null === Eq ? 0 : KE;
            continue
          }
          let Oq = this.byKey.get(Eq.key);
          void 0 === Oq && (Oq = this.allocate(Eq), this.byKey.set(Eq.key, Oq)), gq[lq] = Oq
        }
        this.blockCaster = gq, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(qq, Eq) {
        const gq = qq.T_[Eq];
        if ("function" !== typeof gq) return gq;
        try {
          return gq()
        } catch (Yq) {
          return this.warnOnce(`Sun shadows: no caster option for block ${Eq}: ${Yq instanceof Error?Yq.message:String(Yq)}`), null
        }
      }
      classify(qq, Eq, gq) {
        const Yq = this.option(qq, Eq);
        if ("none" === Yq) return null;
        if (Yq && Yq.planes.length > 0) {
          const qq = Yq.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(qq)}`,
            planes: qq
          }
        }
        if (qq.XW[Eq]) return null;
        const lq = qq.KW[Eq] ? qq.Xs(Eq) : null;
        if (lq && lq.length >= 6) {
          const qq = function(qq) {
            const Eq = new Uint32Array(16);
            for (let gq = 0; gq + 6 <= qq.length; gq += 6) {
              const Yq = [0, 1, 2].map((Eq => Math.max(0, Math.ceil(8 * qq[gq + Eq] - .5)))),
                lq = [0, 1, 2].map((Eq => Math.min(7, Math.floor(8 * qq[gq + Eq + 3] - .5))));
              for (let qq = Yq[2]; qq <= lq[2]; qq++)
                for (let gq = Yq[1]; gq <= lq[1]; gq++)
                  for (let Oq = Yq[0]; Oq <= lq[0]; Oq++) {
                    const Yq = Oq + 8 * (gq + 8 * qq);
                    Eq[Yq >>> 5] |= 1 << (31 & Yq)
                  }
            }
            return Eq
          }(lq);
          return function(qq) {
            return qq.every((qq => 4294967295 === qq))
          }(qq) ? KE : qq.every((qq => 0 === qq)) ? null : {
            kind: "shape",
            key: `shape:${qq.join(",")}`,
            mask: qq
          }
        }
        if (qq.pT[Eq] || !qq.Sa[Eq]) return null;
        const Oq = [0, 1, 2, 3, 4, 5].map((Yq => {
          const lq = qq.Ga[6 * Eq + Yq];
          let Oq = gq.get(lq);
          return void 0 === Oq && (Oq = function(qq) {
            if (!qq || qq.Ca) return null;
            const {
              B_: Eq,
              N_: gq,
              A_: Yq
            } = qq;
            if (!Eq || !gq || !(gq > 0) || void 0 === Yq || !(Yq >= 0)) return null;
            const lq = Eq[0],
              Oq = gq * gq * 4;
            if (!lq || lq.byteLength < Oq) return null;
            const mq = Math.floor(lq.byteLength / Oq),
              xq = Eq[Math.floor(Yq / mq)];
            if (!xq) return null;
            const Aq = new Uint8Array(xq.buffer, xq.byteOffset, xq.byteLength),
              cq = Yq % mq * Oq;
            if (cq + Oq > Aq.length) return null;
            const uq = new Uint8Array(gq * gq);
            let Bq = !1;
            for (let Wq = 0; Wq < uq.length; Wq++) uq[Wq] = Aq[cq + 4 * Wq + 3], Bq ||= uq[Wq] < ex;
            return Bq ? {
              alpha: uq,
              width: gq
            } : null
          }(qq.Ka(lq)), gq.set(lq, Oq)), Oq
        }));
        if (Oq.every((qq => null === qq))) return KE;
        const mq = qA(Math.max(...Oq.map((qq => {
            var Eq;
            return null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.width) && void 0 !== Eq ? Eq : 1
          })))),
          xq = new Uint32Array(qg(mq)).fill(4294967295),
          Aq = Oq.map((qq => null === qq ? xq : Dx(qq.alpha, qq.width, qq.width, mq)));
        return {
          kind: "cutout",
          key: `cutout:${mq}:${Aq.map((qq=>qq.join(","))).join("|")}`,
          size: mq,
          faces: Aq
        }
      }
      allocate(qq) {
        if (this.nextCaster >= Eg) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const Eq = this.nextCaster++;
        if (this.writeCaster(Eq, CE, 0, 0, 0), "shape" === qq.kind) {
          const gq = this.allocateMask(qq.mask.length);
          gq >= 0 && (this.sink(gq, qq.mask), this.writeCaster(Eq, IE, gq, 0, 8))
        } else if ("cutout" === qq.kind) {
          const gq = qg(qq.size),
            Yq = this.allocateMask(6 * gq);
          if (Yq >= 0) {
            const lq = new Uint32Array(6 * gq);
            qq.faces.forEach(((qq, Eq) => {
              lq.set(qq, Eq * gq)
            })), this.sink(Yq, lq), this.writeCaster(Eq, DE, Yq, 0, qq.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(Eq, qq.planes).finally((() => {
          this.planesLoading--
        })));
        return Eq
      }
      async loadPlanes(qq, Eq) {
        const gq = await Promise.all(Eq.map((qq => this.texture(qq.texture))));
        if (gq.some((qq => null === qq))) return;
        const Yq = gq,
          lq = qA(Math.max(...Yq.map((qq => Math.min(qq.width, qq.height))))),
          Oq = qg(lq),
          mq = this.allocateMask(Eq.length * (4 + Oq));
        if (mq < 0) return;
        const xq = new Uint32Array(Eq.length * (4 + Oq)),
          Aq = 4 * Eq.length;
        Eq.forEach(((qq, Eq) => {
          const gq = mq + Aq + Eq * Oq;
          xq.set(function(qq, Eq) {
            const [gq, Yq] = qq.tangent, lq = Math.hypot(gq, Yq) || 1, Oq = gq / lq, mq = Yq / lq, xq = qq.centre[0] * mq - qq.centre[1] * Oq, Aq = new Uint32Array(4);
            return new Float32Array(Aq.buffer, 0, 3).set([Oq, mq, xq]), Aq[3] = Eq, Aq
          }(qq, gq), 4 * Eq), xq.set(Dx(Yq[Eq].alpha, Yq[Eq].width, Yq[Eq].height, lq), Aq + Eq * Oq)
        })), this.sink(mq, xq), this.writeCaster(qq, eE, mq, Eq.length, lq)
      }
      texture(qq) {
        let Eq = this.textures.get(qq);
        return Eq || (Eq = this.loadTexture(qq).catch((Eq => (this.warn(`Sun shadows: no mask for ${qq}: ${Eq instanceof Error?Eq.message:String(Eq)}`), null))), this.textures.set(qq, Eq)), Eq
      }
      allocateMask(qq) {
        if (this.nextMaskWord + qq > gg) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const Eq = 32768 + this.nextMaskWord;
        return this.nextMaskWord += qq, Eq
      }
      writeCaster(qq, Eq, gq, Yq, lq) {
        this.sink(0 + 4 * qq, Uint32Array.of(Eq, gq, Yq, lq))
      }
      warnOnce(qq) {
        this.warned.has(qq) || (this.warned.add(qq), this.warn(qq))
      }
    }
    var gA = gq(2755);

    function YA(qq) {
      return !qq.ea && !qq.pM && !qq.va
    }

    function lA() {
      return {
        bricks: new Uint32Array(JE),
        cells: new Uint16Array(32768),
        special: new Uint8Array(GE)
      }
    }
    class OA {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = qq, this.writeVoxels = Eq, this.writePool = gq, this.warn = Yq, this.eyeChunk = null, this.slotChunk = new Array(fE).fill(null), this.slotVersion = new Float64Array(fE).fill(-1), this.slotPool = new Array(fE).fill(null), this.starved = new Uint8Array(fE), this.queue = [], this.queued = new Uint8Array(fE), this.queueSorted = !0, this.freePool = new Uint32Array(Yg), this.freeCount = Yg, this.casterTable = null, this.warnedPool = !1, this.scratch = lA(), this.victimScratch = lA(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * fE), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let lq = 0; lq < Yg; lq++) this.freePool[lq] = 65535 - lq
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Yg - this.freeCount
      }
      chunkAdded(qq) {
        if (null === this.eyeChunk || !this.inRadius(qq.i, qq.j, qq.k)) return;
        const Eq = sE(qq.i, qq.j, qq.k);
        this.slotChunk[Eq] = qq, this.slotVersion[Eq] = -1, this.enqueue(Eq)
      }
      update(qq, Eq, gq) {
        const Yq = this.casters.blockCaster;
        if (Yq !== this.casterTable) {
          this.casterTable = Yq;
          for (let qq = 0; qq < fE; qq++) this.slotVersion[qq] = -1, this.slotChunk[qq] && this.enqueue(qq)
        }
        const lq = Math.floor(qq[0] / 32),
          Oq = Math.floor(qq[1] / 32),
          mq = Math.floor(qq[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== lq || this.eyeChunk[1] !== Oq || this.eyeChunk[2] !== mq) && (this.eyeChunk = [lq, Oq, mq], this.follow(Eq), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let xq = 0; xq < fE; xq++) {
          const qq = this.slotChunk[xq];
          qq && (qq.bM || qq.ba !== this.slotVersion[xq]) && this.enqueue(xq)
        }
        this.drain(gq), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(qq, Eq) {
        this.records.set(Eq, 4 * qq), this.windowTopStale = !0, this.writeVoxels(4 * qq, Eq)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const qq = this.records;
        let Eq = -1 / 0;
        for (let Yq = 0; Yq < qq.length; Yq += 4) {
          const gq = 255 & qq[Yq + 3];
          gq !== zE && gq !== SE || !this.inRadius(qq[Yq], qq[Yq + 1], qq[Yq + 2]) || (Eq = Math.max(Eq, qq[Yq + 1] * bE + (qq[Yq + 3] >>> 8)))
        }
        const gq = Eq === -1 / 0 ? 1 : Eq + RE;
        gq !== this.windowTop[0] && (this.windowTop[0] = gq, this.writeVoxels(kE, this.windowTop))
      }
      follow(qq) {
        const Eq = this.eyeChunk,
          [gq, Yq, lq] = iE;
        for (let mq = -lq; mq <= lq; mq++)
          for (let lq = -Yq; lq <= Yq; lq++)
            for (let Yq = -gq; Yq <= gq; Yq++) {
              var Oq;
              const gq = Eq[0] + Yq,
                xq = Eq[1] + lq,
                Aq = Eq[2] + mq,
                cq = sE(gq, xq, Aq),
                uq = this.slotChunk[cq];
              if (uq && !uq.bM && uq.i === gq && uq.j === xq && uq.k === Aq) continue;
              const Bq = null !== (Oq = qq(gq, xq, Aq)) && void 0 !== Oq ? Oq : null;
              uq && (uq.i !== gq || uq.j !== xq || uq.k !== Aq) && this.slotPool[cq] && (this.release(cq), this.record.fill(0), this.writeRecord(cq, this.record)), this.slotChunk[cq] = Bq, this.slotVersion[cq] = -1, (Bq || uq) && this.enqueue(cq)
            }
      }
      requeueStarved() {
        for (let qq = 0; qq < fE; qq++) this.starved[qq] && this.slotChunk[qq] && this.enqueue(qq)
      }
      enqueue(qq) {
        this.queued[qq] || (this.queued[qq] = 1, this.queue.push(qq), this.queueSorted = !1)
      }
      drain(qq) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const qq = new Map;
          for (const Eq of this.queue) qq.set(Eq, this.slotDistance(Eq));
          this.queue.sort(((Eq, gq) => qq.get(gq) - qq.get(Eq))), this.queueSorted = !0
        }
        const Eq = performance.now();
        let gq = 0;
        const Yq = [];
        for (; this.queue.length > 0 && (0 === gq || performance.now() - Eq < qq);) {
          const qq = this.queue.pop(),
            Eq = this.slotChunk[qq];
          !Eq || Eq.bM || YA(Eq) ? (this.queued[qq] = 0, this.encodeSlot(qq), gq++) : Yq.push(qq)
        }
        for (let lq = Yq.length - 1; lq >= 0; lq--) this.queue.push(Yq[lq])
      }
      slotDistance(qq) {
        const Eq = this.slotChunk[qq],
          gq = this.eyeChunk;
        return Eq ? Math.max(Math.abs(Eq.i - gq[0]), Math.abs(Eq.j - gq[1]), Math.abs(Eq.k - gq[2])) : 0
      }
      inRadius(qq, Eq, gq) {
        const Yq = this.eyeChunk,
          [lq, Oq, mq] = iE;
        return Math.abs(qq - Yq[0]) <= lq && Math.abs(Eq - Yq[1]) <= Oq && Math.abs(gq - Yq[2]) <= mq
      }
      release(qq) {
        const Eq = this.slotPool[qq];
        if (Eq) {
          for (let qq = Eq.length - 1; qq >= 0; qq--) this.freePool[this.freeCount++] = Eq[qq];
          this.slotPool[qq] = null
        }
      }
      encodeSlot(qq) {
        var Eq, gq, Yq, lq, Oq;
        let mq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          xq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Aq = null !== (Eq = null === (gq = this.slotPool[qq]) || void 0 === gq ? void 0 : gq.length) && void 0 !== Eq ? Eq : 0;
        this.release(qq), this.starved[qq] = 0;
        const cq = this.slotChunk[qq],
          uq = this.record;
        if (!cq || cq.bM || !cq.dW) return this.slotChunk[qq] = null, this.slotVersion[qq] = -1, uq.fill(0), this.writeRecord(qq, uq), void(Aq > 0 && this.requeueStarved());
        this.slotVersion[qq] = cq.ba;
        const Bq = this.encodeBricks(cq, qq, mq, xq);
        uq[0] = cq.i, uq[1] = cq.j, uq[2] = cq.k, uq[3] = Bq, this.writeRecord(qq, uq), null === (Yq = this.encoded) || void 0 === Yq || Yq.call(this, cq), xq && (null !== (lq = null === (Oq = this.slotPool[qq]) || void 0 === Oq ? void 0 : Oq.length) && void 0 !== lq ? lq : 0) < Aq && this.requeueStarved()
      }
      encodeBricks(qq, Eq, gq, Yq) {
        if (qq.wN) return TE;
        const lq = this.casters.blockCaster,
          {
            data: Oq,
            stride: mq,
            offset: xq
          } = qq.dW,
          [Aq, cq, uq] = mq,
          Bq = bE,
          {
            bricks: Wq,
            cells: Nq,
            special: aq
          } = gq;
        Wq.fill(0), aq.fill(0);
        let Vq = 0,
          dq = 0,
          jq = 0;
        for (let Hq = 0; Hq < Bq; Hq++) {
          const Eq = Hq >> 2,
            gq = 3 & Hq,
            Yq = qq.NN[Hq],
            mq = Yq === gA.f ? -1 : Yq < lq.length ? lq[Yq] : 0;
          if (0 !== mq)
            for (let qq = 0; qq < Bq; qq++) {
              const Yq = qq >> 2,
                oq = 3 & qq;
              let Pq = xq + qq * Aq + Hq * cq;
              for (let qq = 0; qq < Bq; qq++, Pq += uq) {
                let xq = mq;
                if (xq < 0) {
                  const qq = Oq[Pq];
                  if (xq = qq < lq.length ? lq[qq] : 0, 0 === xq) continue
                }
                const Aq = XE(Yq, Eq, qq >> 2),
                  cq = wE(oq, gq, 3 & qq);
                Wq[3 * Aq + (cq >>> 5)] |= 1 << (31 & cq), Nq[Aq * pE + cq] = xq, Vq++, jq = Hq, xq === KE ? dq++ : aq[Aq] = 1
              }
            }
        }
        return 0 === Vq ? TE : 32768 === dq ? zE | jq << 8 : (this.writePoolEntries(Eq, gq, Yq), this.writeVoxels(LE + Eq * JE, Wq), SE | jq << 8)
      }
      writePoolEntries(qq, Eq, gq) {
        const {
          bricks: Yq,
          cells: lq,
          special: Oq
        } = Eq, mq = this.entry;
        let xq = 0;
        for (let uq = 0; uq < GE; uq++) xq += Oq[uq];
        if (0 === xq) return;
        gq && this.freeCount < xq && this.evictBeyond(qq, xq);
        const Aq = new Uint32Array(gq ? Math.min(xq, this.freeCount) : 0);
        let cq = 0;
        for (let uq = 0; uq < GE; uq++) {
          if (!Oq[uq]) continue;
          const gq = 3 * uq;
          if (cq === Aq.length) {
            this.dropSpecials(Eq, uq), this.starved[qq] = 1;
            continue
          }
          const xq = this.freePool[--this.freeCount];
          Aq[cq++] = xq;
          for (let qq = 0; qq < pE; qq++) {
            const Eq = Yq[gq + (qq >>> 5)] >>> (31 & qq) & 1 ? lq[uq * pE + qq] : 0;
            1 & qq ? mq[qq >> 1] |= Eq << 16 : mq[qq >> 1] = Eq
          }
          Yq[gq + 2] = xq + 1, this.writePool(lg + 32 * xq, mq)
        }
        Aq.length > 0 && (this.slotPool[qq] = Aq)
      }
      evictBeyond(qq, Eq) {
        const gq = this.slotDistance(qq),
          Yq = [];
        for (let lq = 0; lq < fE; lq++) lq !== qq && this.slotPool[lq] && this.slotDistance(lq) > gq && Yq.push(lq);
        Yq.sort(((qq, Eq) => this.slotDistance(Eq) - this.slotDistance(qq)));
        for (const lq of Yq) {
          if (this.freeCount >= Eq) return;
          const qq = this.slotChunk[lq];
          qq && !qq.bM && qq.dW && (qq.ba === this.slotVersion[lq] || YA(qq)) && this.encodeSlot(lq, this.victimScratch, !1)
        }
      }
      dropSpecials(qq, Eq) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const gq = 3 * Eq;
        for (let Yq = 0; Yq < pE; Yq++) qq.cells[Eq * pE + Yq] !== KE && (qq.bricks[gq + (Yq >>> 5)] &= ~(1 << (31 & Yq)))
      }
    }
    var mA = gq(37481);
    class xA {
      constructor(qq) {
        this.device = qq, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Vg, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.kB = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = qq.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = qq.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(qq, Eq, gq) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Yq
        } = this;
        Yq.gN(qq, Eq), gq.forEachSunShadowCaster((qq => {
          this.add(qq)
        })), Yq.finish();
        const lq = 0 === Yq.parts;
        if (lq && this.uploadedEmpty) return;
        this.uploadedEmpty = lq;
        const {
          queue: Oq
        } = this.device, {
          words: mq
        } = Yq;
        Oq.writeBuffer(this.frameBuffer, 0, mq, 0, 16385), Yq.refs > 0 && Oq.writeBuffer(this.frameBuffer, 65540, mq, Ag, Yq.refs), lq || Oq.writeBuffer(this.frameBuffer, 327684, mq, cg, Yq.parts * xg)
      }
      add(qq) {
        const Eq = this.gridFor(qq);
        if (!Eq) return;
        const {
          frame: gq
        } = this, {
          kB: Yq,
          worldAt: lq,
          instances: Oq,
          instanceCount: mq,
          thin: xq
        } = qq;
        if (Oq)
          for (let Aq = 0; Aq < mq; Aq++) xq ? (jg(Oq, 16 * Aq, Yq, lq, this.kB), gq.add(Eq, this.kB)) : gq.add(Eq, Oq, 16 * Aq);
        else gq.add(Eq, Yq, lq)
      }
      gridFor(qq) {
        let {
          geometry: Eq,
          indexed: gq,
          first: Yq,
          count: lq,
          skip: Oq
        } = qq, mq = this.grids.get(Eq);
        mq || (mq = new Map, this.grids.set(Eq, mq));
        const xq = `${gq?Yq:-1-Yq}:${lq}:${null!==Oq&&void 0!==Oq?Oq:""}`;
        let Aq = mq.get(xq);
        if (void 0 !== Aq || this.gridsFull) return Aq;
        const cq = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = cq + 2;
        else if (cq > this.bakeDeadline) return;
        return Aq = this.bake(Eq, gq, Yq, lq, Oq), void 0 !== Aq && mq.set(xq, Aq), Aq
      }
      bake(qq, Eq, gq, Yq, lq) {
        const Oq = qq.vertexAttributes.find((qq => "position" === qq.kind)),
          mq = Oq ? function(qq, Eq, gq, Yq) {
            let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Oq = qq => Eq ? Eq[gq + qq] : gq + qq,
              mq = qq => null !== lq && [0, 1, 2].some((Eq => {
                const gq = Oq(qq + Eq);
                return gq >= lq[0] && gq < lq[1]
              })),
              xq = [1 / 0, 1 / 0, 1 / 0],
              Aq = [-1 / 0, -1 / 0, -1 / 0];
            for (let Hq = 0; Hq + 2 < Yq; Hq += 3)
              if (!mq(Hq))
                for (let Eq = 0; Eq < 3; Eq++) {
                  const gq = Oq(Hq + Eq);
                  for (let Eq = 0; Eq < 3; Eq++) xq[Eq] = Math.min(xq[Eq], qq[3 * gq + Eq]), Aq[Eq] = Math.max(Aq[Eq], qq[3 * gq + Eq])
                }
            const cq = Math.max(Aq[0] - xq[0], Aq[1] - xq[1], Aq[2] - xq[2]);
            if (!(cq > 0)) return null;
            const uq = cq / 64,
              Bq = [0, 0, 0],
              Wq = [0, 0, 0],
              Nq = [0, 0, 0];
            for (let Hq = 0; Hq < 3; Hq++) Bq[Hq] = Math.min(65, Math.ceil((Aq[Hq] - xq[Hq]) / uq) + 1), Wq[Hq] = xq[Hq] - uq / 2, Nq[Hq] = Wq[Hq] + Bq[Hq] * uq;
            const aq = new Uint32Array(Math.ceil(Bq[0] * Bq[1] * Bq[2] / 32)),
              Vq = new Float64Array(9),
              dq = [0, 0, 0],
              jq = [0, 0, 0];
            for (let Hq = 0; Hq + 2 < Yq; Hq += 3)
              if (!mq(Hq)) {
                for (let Eq = 0; Eq < 3; Eq++) {
                  const gq = Oq(Hq + Eq);
                  for (let Yq = 0; Yq < 3; Yq++) Vq[3 * Eq + Yq] = qq[3 * gq + Yq]
                }
                for (let qq = 0; qq < 3; qq++) {
                  const Eq = Math.min(Vq[qq], Vq[3 + qq], Vq[6 + qq]),
                    gq = Math.max(Vq[qq], Vq[3 + qq], Vq[6 + qq]);
                  dq[qq] = Math.max(0, Math.floor((Eq - Wq[qq]) / uq - 1e-6)), jq[qq] = Math.min(Bq[qq] - 1, Math.floor((gq - Wq[qq]) / uq + 1e-6))
                }
                for (let qq = dq[2]; qq <= jq[2]; qq++)
                  for (let Eq = dq[1]; Eq <= jq[1]; Eq++)
                    for (let gq = dq[0]; gq <= jq[0]; gq++)
                      if (Hg(Vq, Wq[0] + (gq + .5) * uq, Wq[1] + (Eq + .5) * uq, Wq[2] + (qq + .5) * uq, uq / 2)) {
                        const Yq = gq + Bq[0] * (Eq + Bq[1] * qq);
                        aq[Yq >>> 5] |= 1 << (31 & Yq)
                      }
              } return {
              words: aq,
              lo: Wq,
              hi: Nq,
              cell: uq,
              dims: Bq
            }
          }((0, mA.j)(Oq, qq.vertexCount), Eq ? qq.indexData : null, gq, Yq, lq) : null;
        if (!mq) return null;
        const {
          words: xq,
          ...Aq
        } = mq;
        if (this.gridTop + xq.length > Bg) return void(this.gridsFull = !0);
        const cq = this.gridTop;
        return this.gridTop += xq.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * cq, xq), {
          ...Aq,
          at: cq
        }
      }
    }
    const AA = Math.cos(1 * Math.PI / 180);

    function cA(qq, Eq) {
      return qq[0] * Eq[0] + qq[1] * Eq[1] + qq[2] * Eq[2] < AA
    }
    async function uA(qq) {
      const {
        pixels: Eq,
        width: gq,
        height: Yq
      } = await pl(qq), lq = new Uint8Array(gq * Yq);
      for (let Oq = 0; Oq < lq.length; Oq++) lq[Oq] = Eq[4 * Oq + 3];
      return {
        width: gq,
        height: Yq,
        alpha: lq
      }
    }
    class BA {
      constructor(qq, Eq) {
        this.device = qq, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Pg.p), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = qq.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = qq.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * UE,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = qq.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [gq, Yq, lq] = Pg.r;
        this.volume = qq.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: gq,
            height: Yq,
            depthOrArrayLayers: lq
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = qq.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = qq.createBuffer({
          label: "sun-shadow-volume-work",
          size: Pg.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = Eq ? new xA(qq) : null, this.entityStandIn = Eq ? null : qq.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var qq, Eq;
        const gq = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || gq.push("Lite sun shadow volume pipeline compiling");
        const Yq = null !== (qq = null === (Eq = this.casters) || void 0 === Eq ? void 0 : Eq.planesLoading) && void 0 !== qq ? qq : 0;
        return Yq > 0 && gq.push(`${Yq} Lite sun shadow plane casters loading their textures`), gq
      }
      entries() {
        var qq, Eq, gq, Yq;
        const lq = hE.n;
        return [{
          binding: lq.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: lq.dW,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: lq.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: lq.volume,
          resource: this.volumeView
        }, {
          binding: lq.sampler,
          resource: this.volumeSampler
        }, {
          binding: lq.entities,
          resource: {
            buffer: null !== (qq = null === (Eq = this.entities) || void 0 === Eq ? void 0 : Eq.frameBuffer) && void 0 !== qq ? qq : this.entityStandIn
          }
        }, {
          binding: lq.entityGrids,
          resource: {
            buffer: null !== (gq = null === (Yq = this.entities) || void 0 === Yq ? void 0 : Yq.gridBuffer) && void 0 !== gq ? gq : this.entityStandIn
          }
        }]
      }
      prepare(qq, Eq, gq) {
        var Yq;
        this.entitiesThisFrame = !1;
        const lq = null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.sunShadowReach()) && void 0 !== Yq ? Yq : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!gq || !lq.sunShadow && !lq.airShadow) return void(this.volumeHolds = null);
        if (qq.kB.Uqq !== bE) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${qq.kB.Uqq}; everything is lit.`)));
        const Oq = this.start(qq);
        this.casters.update(qq.FW, qq.FW.KW.length);
        const mq = qq.BW;
        for (let Wq = 0; Wq < 3; Wq++) this.eye[Wq] = Eq[Wq] + mq[Wq];
        const xq = (0, Pg.z)(this.eye);
        this.staleNear = xq;
        const Aq = qq.kB.qV;
        Oq.update(this.eye, ((qq, Eq, gq) => Aq.EV(qq, Eq, gq)), 1);
        const cq = (0, Pg.u)(gq.vqq()),
          uq = Oq.eyeChunk,
          Bq = this.uniformInts;
        for (let Wq = 0; Wq < 3; Wq++) Bq[Wq] = uq[Wq], Bq[4 + Wq] = xq[Wq];
        this.entitiesThisFrame = null !== this.entities && lq.sunShadow, this.entitiesThisFrame && ag(this.uniformFloats, 8, Eq, cq), null !== this.volumeHolds && (this.castersWritten || cA(cq, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(xq, cq, uq)
      }
      markStale(qq) {
        const Eq = this.staleNear,
          gq = bE,
          Yq = [qq.i * gq, qq.j * gq, qq.k * gq];
        for (let Oq = 0; Oq < 3; Oq++)
          if (Yq[Oq] + gq <= Eq[Oq] - gq || Yq[Oq] >= Eq[Oq] + Pg.r[Oq] + gq) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const lq = this.stale;
        for (let Oq = 0; Oq < lq.length; Oq += 4)
          if (lq[Oq] === qq.i && lq[Oq + 1] === qq.j && lq[Oq + 2] === qq.k) return void(lq[Oq + 3] = this.swept);
        if (16 === lq.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        lq.push(qq.i, qq.j, qq.k, this.swept)
      }
      writeStale() {
        const qq = this.swept,
          Eq = this.stale;
        this.staleAll && qq - this.staleAllSwept >= Pg.j && (this.staleAll = !1, Eq.length = 0);
        let gq = 0;
        for (let lq = 0; lq < Eq.length; lq += 4)
          if (qq - Eq[lq + 3] < Pg.j) {
            for (let qq = 0; qq < 4; qq++) Eq[gq + qq] = Eq[lq + qq];
            gq += 4
          } Eq.length = gq;
        const Yq = this.uniformInts;
        Yq[3] = this.staleAll ? 5 : gq / 4;
        for (let lq = 0; lq < 4; lq++)
          for (let qq = 0; qq < 3; qq++) Yq[16 + 4 * lq + qq] = 4 * lq < gq ? Eq[4 * lq + qq] * bE : 0
      }
      writeUniform() {
        const qq = this.uniformInts;
        let Eq = this.uniformWritten;
        if (Eq) {
          let gq = !0;
          for (let Yq = 0; Yq < qq.length && gq; Yq++) gq = qq[Yq] === Eq[Yq];
          if (gq) return
        }
        Eq ??= this.uniformWritten = new Int32Array(qq.length), Eq.set(qq), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(qq) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, qq)
      }
      computeVolume(qq, Eq, gq) {
        const Yq = this.buildVolumePass();
        if (!Yq) return void(this.volumeHolds = null);
        const lq = (0, Pg.w)(this.volumeHolds, qq);
        this.volumeHolds = qq;
        const Oq = 1 === lq.length && lq[0].size.every(((qq, Eq) => qq === Pg.r[Eq])),
          mq = this.sweptChunk,
          xq = this.sweptLight,
          Aq = Eq[0] !== xq[0] || Eq[1] !== xq[1] || Eq[2] !== xq[2],
          cq = gq[0] !== mq[0] || gq[1] !== mq[1] || gq[2] !== mq[2],
          uq = Aq && cA(Eq, xq);
        if ((Oq || this.written || cq || uq) && (this.fastLeft = Pg.j), Oq || this.written || Aq || cq) {
          this.written = !1;
          for (let qq = 0; qq < 3; qq++) mq[qq] = gq[qq], xq[qq] = Eq[qq];
          this.sweepLeft = Oq ? 0 : Pg.j
        }
        if (Oq ? this.swept += Pg.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, lq.push(...(0, Pg.D)(qq, this.slice)), this.slice = (this.slice + 1) % Pg.j, this.swept++), 0 === lq.length) return;
        const Bq = (0, Pg.E)(this.workData, Eq, lq);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Wq = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Nq = Wq.beginComputePass({
            label: "sun-shadow-volume"
          });
        Nq.setPipeline(Yq.pipeline), Nq.setBindGroup(tg.group, Yq.bindGroup), Nq.dispatchWorkgroups(Math.ceil(Bq / Pg.n)), Nq.end(), this.device.queue.submit([Wq.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const qq = tg,
          Eq = GPUShaderStage.COMPUTE,
          gq = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: qq.uniform,
              visibility: Eq,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: qq.dW,
              visibility: Eq,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: qq.special,
              visibility: Eq,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: qq.work,
              visibility: Eq,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: qq.volume,
              visibility: Eq,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Yq = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: gq,
            entries: [{
              binding: qq.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: qq.dW,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: qq.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: qq.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: qq.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [gq]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: rg()
            }),
            entryPoint: "main"
          }
        }).then((qq => {
          this.volumePass = {
            pipeline: qq,
            bindGroup: Yq
          }
        }), (qq => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(qq)}`)
        })), null
      }
      start(qq) {
        if (this.window) return this.window;
        const Eq = (qq, Eq) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * qq, Eq)
        };
        this.casters = new EA(((qq, gq) => {
          this.castersWritten = !0, Eq(qq, gq)
        }), uA);
        const gq = new OA(this.casters, ((qq, Eq) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * qq, Eq)
        }), Eq);
        return gq.encoded = qq => {
          this.markStale(qq)
        }, qq.kB.on("chunkAdded", (qq => {
          gq.chunkAdded(qq)
        })), this.window = gq, gq
      }
    }
    var WA = gq(38665),
      NA = gq(38671);
    const aA = 0,
      VA = 3,
      dA = 4,
      jA = 5;

    function HA(qq, Eq, gq, Yq) {
      qq.drawOffset(Eq, Yq + aA), Eq[Yq + VA] = qq.drawTime(), gq[Yq + dA] = qq.ring.drawStart(), gq[Yq + jA] = qq.ring.drawCount()
    }
    const oA = `\n${VY}\n\nconst MAX_STOPS = ${NA.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${NA.b/4}>,\n\tcolor1: array<vec4f, ${NA.b}>,\n\tcolor2: array<vec4f, ${NA.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${NA.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${NA.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var PA = gq(41355);
    class QA {
      constructor(qq, Eq, gq, Yq) {
        this.device = qq, this.system = Eq, this.frameIndex = gq, this.bindings = Yq, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, PA.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (qq, Eq) => {
          this.device.queue.writeBuffer(this.ring, qq * NA.f * 4, this.system.ring.records, qq * NA.f, (Eq - qq) * NA.f)
        };
        const {
          name: lq
        } = Eq;
        this.ring = qq.createBuffer({
          label: `particles-${lq}`,
          size: Eq.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = qq.createBuffer({
          label: `particles-uniforms-${lq}`,
          size: 4 * NA.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(qq) {
        const Eq = (0, PA.b)(this.system, this.uniformBits, qq);
        Eq && (this.uniformBits = Eq, this.device.queue.writeBuffer(this.uniforms, 0, Eq))
      }
      bind() {
        const {
          system: qq
        } = this, Eq = this.texture;
        (0, PA.l)(qq, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${qq.name}`,
          size: [NA.m, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * NA.m
        }, [NA.m, 1]));
        const gq = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === Eq.view && this.boundSampler === Eq.sampler && this.boundRamp === gq || (this.boundView = Eq.view, this.boundSampler = Eq.sampler, this.boundRamp = gq, this.bindGroup = this.device.createBindGroup({
          label: `particles-${qq.name}`,
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
            resource: Eq.sampler
          }, {
            binding: 3,
            resource: Eq.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: gq
          }]
        }))
      }
      destroy() {
        var qq;
        this.ring.destroy(), this.uniforms.destroy(), null === (qq = this.ramp) || void 0 === qq || qq.destroy()
      }
    }
    class yA {
      constructor(qq, Eq) {
        this.device = qq, this.resources = Eq, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, cE.e)();
        const gq = qq.createBindGroupLayout({
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
        this.frameLayout = qq.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = qq.createPipelineLayout({
          bindGroupLayouts: [EE(qq), gq, this.frameLayout]
        }), this.module = qq.createShaderModule({
          label: "particles",
          code: oA
        });
        const Yq = qq.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        qq.queue.writeTexture({
          texture: Yq
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: gq,
          rampSampler: qq.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Yq.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (Eq, gq) => (this.bindTarget(gq), {
            renderable: this.renderable,
            pipeline: mE(qq, gq),
            draw: qq => gq === this.preparedTarget ? this.draw(qq) : 0
          })
        }
      }
      get tlq() {
        return this.systems.size
      }
      reset() {
        for (const qq of this.systems.keys()) qq.reset()
      }
      describePendingWork() {
        return (0, WA.g)(this.systems.keys(), "Lite")
      }
      Fk(qq, Eq) {
        const gq = new WA.d(qq, Eq, this);
        return this.systems.set(gq, new QA(this.device, gq, this.allocateFrameIndex(), this.bindings)), gq
      }
      aqq(qq, Eq) {
        for (const gq of this.systems.keys()) gq.aqq(qq, Eq)
      }
      canDraw(qq) {
        const Eq = this.systems.get(qq),
          gq = qq.texture ? this.resources.boundTexture(qq.texture) : null;
        if (!Eq || !gq || !this.targetPipelines) return !1;
        if (Eq.texture = gq, Eq.pipelines.length = 0, !Rl(qq.blendMode)) return this.warnOnce(`blend:${qq.blendMode}`, `particle blend mode ${qq.blendMode} is not drawn (${qq.name})`), !0;
        const Yq = (0, bl.l)(qq.blendMode);
        for (const lq of Yq) {
          const qq = this.pipelineFor(lq);
          if (!1 === qq) return Eq.pipelines.length = 0, !0;
          qq && Eq.pipelines.push(qq)
        }
        return Eq.pipelines.length === Yq.length
      }
      disposeStopped(qq) {
        qq.dispose()
      }
      remove(qq) {
        const Eq = this.systems.get(qq);
        Eq && (this.systems.delete(qq), Eq.destroy(), this.freeFrameIndices.push(Eq.frameIndex))
      }
      prepare(qq) {
        const Eq = qq.animationRatio || 1;
        xE(this.renderable._worldCenter, qq, YE), this.preparedTarget = this.target, this.draws.length = 0;
        let gq = 0;
        for (const Yq of this.systems.values()) {
          const qq = Yq.system;
          if (!qq.animateIfActive(Eq)) continue;
          if (qq.ring.takeUploads(Yq.upload), !qq.hasLiveParticles() || 0 === Yq.pipelines.length) continue;
          Yq.writeUniforms(this.warnOnce), Yq.bind();
          const lq = 64 * Yq.frameIndex;
          Yq.count = qq.ring.drawCount(), HA(qq, this.frameData, this.frameBits, lq), gq = Math.max(gq, lq + 64), this.draws.push(Yq)
        }
        gq > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, gq)
      }
      draw(qq) {
        let Eq = 0,
          gq = null;
        for (const Yq of this.draws) {
          qq.setBindGroup(1, Yq.bindGroup), qq.setBindGroup(2, this.frameBindGroup, [256 * Yq.frameIndex]);
          for (const lq of Yq.pipelines) lq !== gq && (qq.setPipeline(lq), gq = lq), qq.draw(4, Yq.count), Eq++
        }
        return Eq
      }
      bindTarget(qq) {
        this.target = qq;
        const Eq = `${qq._colorFormat}|${qq._depthStencilFormat}|${qq._depthCompare}|${qq._sampleCount}`;
        let gq = this.pipelines.get(Eq);
        gq || (gq = new Map, this.pipelines.set(Eq, gq)), this.targetPipelines = gq
      }
      pipelineFor(qq) {
        var Eq;
        const gq = this.targetPipelines,
          Yq = gq.get(qq);
        if (void 0 !== Yq) return Yq;
        gq.set(qq, null);
        const lq = this.target,
          Oq = qq === bl.d,
          mq = null !== (Eq = lq._depthCompare) && void 0 !== Eq ? Eq : gE;
        return this.device.createRenderPipelineAsync({
          label: `particles-${qq}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: Iq({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Oq ? 1 : 0
            }
          }, lq, Ul((0, bl.i)(qq))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: lq._depthStencilFormat ? {
            format: lq._depthStencilFormat,
            depthCompare: mq,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: lq._sampleCount
          }
        }).then((Eq => {
          gq.set(qq, Eq)
        }), (Eq => {
          gq.set(qq, !1), console.error("Lite particle pipeline failed", Eq), Xl("particles", `blend-${qq}`, Eq)
        })), null
      }
      allocateFrameIndex() {
        const qq = this.freeFrameIndices.pop();
        if (void 0 !== qq) return qq;
        const Eq = this.nextFrameIndex++;
        if (64 * (Eq + 1) > this.frameData.length) {
          const qq = new Float32Array(2 * this.frameData.length);
          qq.set(this.frameData), this.frameData = qq, this.frameBits = new Uint32Array(qq.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return Eq
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
    class tA {
      constructor(qq, Eq, gq, Yq, lq) {
        this.lite = qq, this.canvas = Eq, this.info = gq, this.resources = lq, this.vYq = !1, this.needPOTTextures = !1, this.J_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Eq.width, this.renderHeight = Eq.height, this.caps = {
          maxTextureSize: Yq.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Yq.maxTextureArrayLayers
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
      setSize(qq, Eq) {
        if (this.renderWidth === qq && this.renderHeight === Eq) return !1;
        const gq = this.renderWidth,
          Yq = this.renderHeight;
        this.renderWidth = qq, this.renderHeight = Eq;
        try {
          (0, Jq.r)(this.lite, qq, Eq)
        } catch (lq) {
          if (lq instanceof DOMException && "InvalidStateError" === lq.name) {
            this.renderWidth = gq, this.renderHeight = Yq;
            try {
              (0, Jq.r)(this.lite, gq, Yq)
            } catch {
              this.canvas.width = gq, this.canvas.height = Yq
            }
            return console.warn("WebGPU could not allocate render targets for resize", qq, Eq, lq.message), !1
          }
          throw lq
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
      Qr() {
        const qq = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : qq - this.lastFrameTime, this.lastFrameTime = qq
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(qq, Eq) {
        const gq = document.createElement("canvas");
        return gq.width = qq, gq.height = Eq, gq
      }
      U_(qq, Eq) {
        var gq;
        return null !== (gq = this.resources.U_.get(qq)) && void 0 !== gq ? gq : new Fq(this.resources, qq, Eq)
      }
      atlasArray(qq, Eq, gq) {
        return this.resources.atlasArray(qq, Eq, gq)
      }
    }
    class rA {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(qq) {
        this.fov = qq.fov, this.nearPlane = qq.near, this.farPlane = qq.far;
        const Eq = qq.worldMatrix;
        for (let gq = 0; gq < 16; gq++)
          if (this.worldMatrix[gq] !== Eq[gq]) return this.worldMatrix.set(Eq), void this.worldMatrixVersion++
      }
    }
    class vA {
      constructor(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
        let uq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = qq, this.PV = Eq, this.sceneTask = gq, this.gpuDevice = Yq, this.terrain = lq, this.meshes = Oq, this.particles = mq, this.resources = xq, this.sunShadow = uq, this.cgq = void 0, this.backendName = "WebGPU (Lite)", this.W4 = void 0, this.modelMeshes = void 0, this.camera = new rA, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new Rq(Yq.lost), this.deviceLost = this.refusals.deviceLost, this.cgq = new tA(qq, Aq, cq, Yq.limits, xq), (0, nq.z)({
          Fc: qq => {
            fq(qq) && xq.textureSlot(qq)
          },
          loaded: qq => fq(qq) ? xq.textureLoaded(qq) : null,
          canvasUpdated: (qq, Eq, gq) => {
            fq(qq) && xq.canvasUpdated(qq, Eq, gq)
          }
        }), this.W4 = Oq.W4, this.modelMeshes = Oq.modelMeshes, Eq.camera = this.camera
      }
      get castsEntitySunShadows() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.sunShadow) || void 0 === Eq ? void 0 : Eq.tracesEntities) && void 0 !== qq && qq
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(qq) {
        this.modelMeshes.attach(qq.model, qq.sceneMirror);
        const Eq = qq.PV;
        this.setClearColour(Eq.clearColor.r, Eq.clearColor.g, Eq.clearColor.b), Eq.draw = () => {
          this.drawFrame(qq, Eq)
        }
      }
      render(qq) {
        try {
          this.cgq.Qr(), qq.PV.render()
        } catch (Eq) {
          throw this.refusals.frameFailed(Eq), Eq
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var qq, Eq, gq, Yq;
        const lq = [...this.particles.describePendingWork(), ...null !== (qq = null === (Eq = this.sunShadow) || void 0 === Eq ? void 0 : Eq.describePendingWork()) && void 0 !== qq ? qq : []],
          Oq = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (gq = this.terrain.sceneDepth) && void 0 !== gq && gq.compiling ? 1 : 0) + (null !== (Yq = this.terrain.shadowMask) && void 0 !== Yq && Yq.compiling ? 1 : 0);
        Oq > 0 && lq.push(`${Oq} Lite pipelines compiling`);
        const mq = this.terrain.buffersAwaitingVerdict;
        mq > 0 && lq.push(`${mq} Lite terrain buffers awaiting their out-of-memory verdict`);
        const xq = this.resources.texturesLoading;
        return xq > 0 && lq.push(`${xq} Lite textures loading`), lq
      }
      prepareTexture(qq) {
        return null !== this.resources.boundTexture(qq) || this.resources.textureFailed(qq)
      }
      drawFrame(qq, Eq) {
        var gq, Yq, lq, Oq, mq, xq;
        const Aq = ux(qq);
        this.camera.copyFromView(Aq), this.setClearColour(Aq.clearColour[0], Aq.clearColour[1], Aq.clearColour[2]), null === (gq = this.sunShadow) || void 0 === gq || gq.prepare(qq.wB, Aq.eye, null !== (Yq = qq.wB.pN) && void 0 !== Yq ? Yq : null), this.terrain.prepare(qq, Aq), null === (lq = this.terrain.sceneDepth) || void 0 === lq || lq.setPlanes(Aq.near, Aq.far), null === (Oq = this.terrain.shadowMask) || void 0 === Oq || Oq.prepare(Aq), Km(this.sceneTask), this.meshes.prepare(Eq, Aq, qq.model.earthSky, null !== (mq = qq.wB.pN) && void 0 !== mq ? mq : null), this.particles.prepare(Aq);
        const cq = performance.now();
        this.resources.flushUploads(), null === (xq = this.sunShadow) || void 0 === xq || xq.traceEntities(this.meshes);
        try {
          (0, Jq.o)(this.engine, this.lastFrameTime > 0 ? cq - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = cq
      }
      setClearColour(qq, Eq, gq) {
        const Yq = this.PV.clearColor;
        Yq.r = qq, Yq.g = Eq, Yq.b = gq, Yq.a = 1
      }
    }
    const hA = "WebGPU device lost while Lite was starting";

    function nA(qq, Eq) {
      return "object" === typeof qq && null !== qq ? Object.assign(qq, {
        startStep: Eq
      }) : qq
    }
    async function bA(qq, Eq) {
      const gq = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!gq) throw nA(new Error("No WebGPU adapter"), "no_adapter");
      const Yq = gq.info,
        lq = {
          vendor: (null === Yq || void 0 === Yq ? void 0 : Yq.vendor) || "unknown vendor",
          renderer: (null === Yq || void 0 === Yq ? void 0 : Yq.architecture) || "unknown renderer",
          version: (null === Yq || void 0 === Yq ? void 0 : Yq.description) || "unknown version"
        },
        Oq = function(qq) {
          const Eq = {};
          for (const gq in qq.limits) {
            const Yq = qq.limits[gq];
            "number" === typeof Yq && (Eq[gq] = Yq)
          }
          return Eq
        }(gq);
      let mq;
      qq.style.background = "black";
      try {
        mq = await (0, Jq.f)(qq, {
          msaaSamples: Eq.Rgq ? 4 : 1,
          requiredLimits: Oq,
          alphaMode: "premultiplied"
        })
      } catch (uq) {
        throw nA(uq, "#47" === (null === (xq = uq) || void 0 === xq ? void 0 : xq.message) ? "no_adapter" : "device")
      }
      var xq;
      const Aq = function(qq) {
        return qq._device
      }(mq);
      let cq = null;
      Aq.lost.then((qq => {
        cq = qq, console.error(`WebGPU device lost (${qq.reason}): ${qq.message}`)
      }));
      try {
        const gq = await async function(qq, Eq, gq, Yq, lq, Oq) {
          const mq = (0, kq.c)(qq),
            xq = new sm(qq, Eq),
            Aq = new Xx(Eq),
            cq = new nm(Eq, xq, (qq => function(qq, Eq) {
              for (const Yq of Dq(qq)) {
                var gq;
                if (Yq._targetSignature === Eq) return null !== (gq = Yq._sceneBG) && void 0 !== gq ? gq : null
              }
              return null
            }(mq, qq))),
            uq = new yA(Eq, xq);
          for (const Nq of function(qq, Eq, gq) {
              return [Eq.opaqueRenderable, qq.opaqueRenderable, qq.skyLastRenderable, gq.renderable, Eq.transparentRenderable, qq.transparentRenderable, qq.frontRenderable]
            }(cq, Aq, uq)) eq(mq, Nq);
          const Bq = function(qq) {
            for (const Eq of Dq(qq))
              if ("PV" === Eq.name) return Eq;
            throw new Error("Lite: the scene has no render task named scene")
          }(mq);
          lq && Aq.installSceneDepth(Bq, qq);
          const Wq = Oq ? new BA(Eq, Oq.entities) : null;
          Aq.sunShadow = Wq, Wq && null !== Oq && void 0 !== Oq && Oq.entities && (Aq.shadowMask = new vx(Eq, Bq, qq, Aq));
          return cq.sunShadow = Wq, await (0, kq.g)(mq), new vA(qq, mq, Bq, Eq, Aq, cq, uq, xq, gq, Yq, Wq)
        }(mq, Aq, qq, lq, Eq.sceneDepth, Eq.sunShadow);
        if (null !== cq) {
          const {
            reason: qq,
            message: Eq
          } = cq;
          throw Object.assign(new Error(`${hA} (${qq}): ${Eq}`), {
            fallbackReason: hA
          })
        }
        return gq
      } catch (uq) {
        throw Aq.destroy(), null === cq ? uq : nA(uq, "device")
      }
    }
  },
  40622: (qq, Eq, gq) => {
    gq.d(Eq, {
      B: () => Nq,
      D: () => aq,
      b: () => lq,
      c: () => Yq,
      e: () => Wq,
      g: () => uq,
      j: () => dq,
      l: () => Oq,
      n: () => xq,
      r: () => Aq,
      v: () => mq,
      x: () => Vq
    });
    const Yq = 3,
      lq = 0,
      Oq = 1,
      mq = 2,
      xq = {
        uniform: 3,
        dW: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Aq = 10,
      cq = "BloxdPackInputs",
      uq = "bloxdPackInputs",
      Bq = [{
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
      Wq = 80;

    function Nq() {
      const qq = Bq.map((qq => {
        let {
          name: Eq,
          type: gq
        } = qq;
        return `    ${Eq}: ${gq},\n`
      })).join("");
      return `struct ${cq} {\n${qq}}\n@group(${Yq}) @binding(${lq}) var<uniform> ${uq}: ${cq};\n`
    }

    function aq(qq, Eq) {
      const gq = new DataView(qq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Wq),
        [Yq, lq, Oq, mq, xq, Aq] = Bq;
      gq.setFloat32(Yq.offset, Eq.seconds, !0), gq.setUint32(lq.offset, Eq.lit ? 1 : 0, !0);
      for (let cq = 0; cq < 3; cq++) gq.setInt32(Oq.offset + 4 * cq, Eq.renderOffset[cq], !0), gq.setFloat32(mq.offset + 4 * cq, Eq.vqq[cq], !0), gq.setFloat32(xq.offset + 4 * cq, Eq.eyePosition[cq], !0), gq.setFloat32(Aq.offset + 4 * cq, Eq.shadowDirection[cq], !0)
    }

    function Vq(qq) {
      const Eq = new Uint32Array(Math.max(1, qq.length));
      return qq.forEach(((qq, gq) => {
        let {
          id: Yq,
          rotation: lq
        } = qq;
        Eq[gq] = 65535 & Yq | (3 & lq) << 16
      })), Eq
    }
    const dq = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);