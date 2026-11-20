export const id = 261;
export const ids = [261];
export const modules = {
  41020: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Qb,
      h: () => Ub,
      k: () => Tb,
      l: () => Hb
    });
    var kb = sb(36821),
      Wb = sb(38313),
      ab = sb(38304);

    function Tb(bb, cb, sb, kb) {
      const Wb = ab.t;
      cb.fill(0), bb.gravity.toArray(cb, Wb.gravity), bb.colorDead.toArray(cb, Wb.colorDead), sb[Wb.ramp] = bb.useRampGradients ? 1 : 0;
      const Tb = bb.getColorGradients(),
        Ub = Xb(bb, Tb, "colour", kb);
      sb[Wb.colorCount] = Ub;
      for (let ab = 0; ab < Ub; ab++) {
        var Ib;
        const bb = Tb[nb(Tb, ab)];
        cb[Wb.colorPositions + ab] = bb.gradient, bb.color1.toArray(cb, Wb.color1 + 4 * ab), (null !== (Ib = bb.color2) && void 0 !== Ib ? Ib : bb.color1).toArray(cb, Wb.color2 + 4 * ab)
      }
      const Hb = bb.getVelocityGradients(),
        fb = Xb(bb, Hb, "BQ", kb);
      sb[Wb.velocityCount] = fb;
      for (let ab = 0; ab < fb; ab++) Cb(cb, Wb.BQ + 4 * ab, Hb[nb(Hb, ab)]);
      const Mb = bb.useRampGradients ? bb.getColorRemapGradients() : null,
        mb = Xb(bb, Mb, "colour remap", kb);
      sb[Wb.remapCount] = mb;
      for (let ab = 0; ab < mb; ab++) Cb(cb, Wb.remap + 4 * ab, Mb[nb(Mb, ab)])
    }

    function Ub() {
      return {
        key: [],
        texels: new Uint8Array(4 * ab.m)
      }
    }
    const Ib = [];

    function Hb(bb, cb) {
      return fb(bb, Ib), !eb(Ib, cb.key) && (cb.key.length = 0, cb.key.push(...Ib), cb.key.length > 0 && function(bb, cb) {
        for (let sb = 0; sb < ab.m; sb++) Wb.i.GetCurrentGradient(sb / ab.m, bb, ((bb, cb, sb) => {
          kb.Color3.LerpToRef(bb.color, cb.color, sb, Mb)
        })), cb[4 * sb] = 255 * Mb.r, cb[4 * sb + 1] = 255 * Mb.g, cb[4 * sb + 2] = 255 * Mb.b, cb[4 * sb + 3] = 255
      }(bb.getRampGradients(), cb.texels), !0)
    }

    function fb(bb, cb) {
      cb.length = 0;
      const sb = bb.useRampGradients ? bb.getRampGradients() : null;
      if (null !== sb && void 0 !== sb && sb.length) {
        cb.push(sb.length);
        for (const bb of sb) cb.push(bb.gradient, bb.color.r, bb.color.g, bb.color.b)
      }
    }
    const Mb = new kb.Color3;

    function Xb(bb, cb, sb, kb) {
      return cb ? cb.length > ab.e ? (kb(`particleStops:${sb}`, `GPU particles use the first 2 and last ${ab.e-2} of more than ${ab.e} ${sb} gradient stops (${bb.name})`), ab.e) : cb.length : 0
    }

    function nb(bb, cb) {
      return cb < 2 || bb.length <= ab.e ? cb : bb.length - ab.e + cb
    }
    const mb = new Float32Array(ab.n),
      lb = new Uint32Array(mb.buffer);

    function Qb(bb, cb, sb) {
      return Tb(bb, mb, lb, sb), cb && eb(lb, cb) ? null : lb.slice()
    }

    function eb(bb, cb) {
      if (bb.length !== cb.length) return !1;
      for (let sb = 0; sb < bb.length; sb++)
        if (bb[sb] !== cb[sb]) return !1;
      return !0
    }

    function Cb(bb, cb, sb) {
      var kb;
      bb[cb] = sb.gradient, bb[cb + 1] = sb.factor1, bb[cb + 2] = null !== (kb = sb.factor2) && void 0 !== kb ? kb : sb.factor1
    }
  },
  41011: (bb, cb, sb) => {
    function kb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const cb = new Set;
      return (sb, kb) => {
        cb.has(sb) || (cb.add(sb), console.warn(bb + kb))
      }
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  41049: (bb, cb, sb) => {
    sb.d(cb, {
      createLiteRendererAsync: () => PI,
      liteBabylonBackend: () => zb,
      setPipelineFailureHook: () => vW
    });
    var kb = sb(36821),
      Wb = sb(37153),
      ab = sb(37497),
      Tb = sb(36769),
      Ub = sb(37504);
    class Ib extends Ub.e {
      constructor() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        super(...cb), this.color = new kb.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: cb[0].EY().getUniqueId(),
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
          needAlphaBlendingForMesh: bb => bb.visibility < 1 || bb.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Hb = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      fb = bb => 1 << Hb.indexOf(bb),
      Mb = fb("VERTEXCOLOR"),
      Xb = fb("INSTANCES"),
      nb = fb("THIN_INSTANCES"),
      mb = fb("INSTANCESCOLOR"),
      lb = fb("FOG"),
      Qb = fb("LITE_FRONT_LAYER");

    function eb(bb, cb, sb, kb) {
      let Wb = 0;
      return bb.isVerticesDataPresent("color") && (Wb |= Mb), "none" !== cb && (Wb |= Xb), "thin" === cb && (Wb |= nb, bb.isVerticesDataPresent("instanceColor") && (Wb |= mb)), kb.fogEnabled && bb.applyFog && 0 !== kb.fogMode && (Wb |= lb), sb >= 1 && (Wb |= Qb), Wb
    }

    function Cb(bb, cb) {
      bb.updateColor4("color", cb.color, cb.alpha)
    }
    var Nb = sb(37438),
      Vb = sb(36974),
      Lb = sb(36855),
      ub = sb(36742),
      Yb = sb(37428),
      hb = sb(37435),
      Jb = sb(36758),
      gb = sb(36766),
      Bb = sb(36772);
    const tb = ub.e.GLSL;
    class yb {
      constructor(bb, cb) {
        this.name = bb, this.aQ = cb, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.ZY = {
          addOnce: bb => {
            this.disposers.push(bb)
          }
        }, this.uniqueId = cb.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      EY() {
        return this.aQ
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
      needAlphaBlendingForMesh(bb) {
        return (0, Jb.P)(this.model, bb.visibility, bb.hasVertexAlpha)
      }
      needAlphaTestingForMesh(bb) {
        return (0, Jb.Q)(this.model, bb.visibility, bb.hasVertexAlpha)
      }
      dispose() {
        (0, Vb.h)(this);
        for (const bb of this.disposers.splice(0)) bb()
      }
      get model() {
        return (0, Jb.W)(this)
      }
    }
    const Pb = new WeakSet;

    function Db(bb) {
      return Pb.has(bb)
    }

    function Eb(bb) {
      Pb.add(bb)
    }
    const ib = {
      create: (bb, cb) => ((0, Lb.u)(bb, new yb(bb.name, cb)), gb.d.defines()),
      write: () => {},
      addFeature: (bb, cb) => {
        const sb = bb.mirror;
        cb.feature === hb.j && cb.state.dirLightCount > 0 && (bb.disableLighting = !0, (0, Jb.U)(bb)), "BLOXD_LIGHTING" in cb.defines && (0, Vb.g)(sb), cb.feature === Yb.j && ((0, Nb.h)(cb.state, tb), function(bb, cb) {
          const sb = bb.EY().Sm();
          cb.textures.forEach(((kb, Wb) => {
            setTimeout((() => {
              var ab, Tb;
              const {
                url: Ub
              } = kb.source;
              sb.atlasArray(Ub, null !== (ab = null === (Tb = cb.sources.pixels) || void 0 === Tb ? void 0 : Tb[Wb]) && void 0 !== ab ? ab : null, cb.sources.layerWidth).then((sb => {
                (0, Nb.c)(bb, cb, Wb, sb, sb.layerWidth, sb.layers, tb)
              })).catch((bb => {
                console.error(`Failed to build texture array for atlas ${Wb}`, bb)
              }))
            }))
          }))
        }(sb, cb.state))
      },
      texture: (bb, cb, sb) => {
        let {
          data: kb,
          sets: Wb
        } = sb;
        var ab;
        (Eb(bb), kb) && (bb.uvSet = null !== (ab = null === Wb || void 0 === Wb ? void 0 : Wb.coordinatesIndex) && void 0 !== ab ? ab : 0, (0, Lb.ib)(bb.matrix, null !== Wb && void 0 !== Wb ? Wb : {}))
      },
      cube: Eb,
      canvas: (bb, cb, sb) => {
        let {
          width: kb,
          height: Wb,
          mipmaps: ab,
          samplingMode: Tb = Bb.i.trilinear,
          hasAlpha: Ub = !1,
          wrap: Ib = Bb.c.clamp
        } = sb;
        const Hb = bb.Sm().createCanvas(kb, Wb),
          fb = new Bb.l("2d", {
            kind: "canvas",
            width: kb,
            height: Wb,
            canvas: Hb
          }, {
            samplingMode: Tb,
            wrapU: Ib,
            wrapV: Ib,
            noMipmap: !ab,
            invertY: !0
          });
        return fb.hasAlpha = Ub, Eb(fb), fb
      }
    };
    var Ob = sb(36994),
      Gb = sb(36683);
    class Kb {
      constructor(bb, cb, sb) {
        this.engine = bb, this.clearColor = cb, this.ambientColor = sb, this.onBeforeRenderObservable = new Gb.c, this.onBeforeCameraRenderObservable = new Gb.c, this.onAfterRenderObservable = new Gb.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.mV = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Sm() {
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
      addPendingData(bb) {
        this.pending.push(bb)
      }
      removePendingData(bb) {
        const cb = this.pending.indexOf(bb); - 1 !== cb && this.pending.splice(cb, 1)
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

    function Zb() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const zb = {
      Vkb: Zb,
      Ckb: (bb, cb) => {
        const sb = new Kb(bb.engine, kb.e.FromArray(cb.clearColor), kb.Color3.FromArray(cb.ambientColor));
        (0, Tb.d)(ib, sb), bb.aQ = sb,
          function(bb, cb) {
            const sb = Object.assign((0, Ob.h)(bb, "camera"), {
              layerMask: 268435455
            });
            bb.model.nodes.setWorldSource(sb.row, bb.model.view.worldMatrix), bb.camera = cb.activeCamera = sb
          }(bb, sb), (0, Wb.i)(bb, ((bb, cb, sb) => (0, ab.k)(bb, cb, sb, Ub.e)))
      },
      mkb: () => {},
      setBabylonFog: () => {},
      Lkb: Zb,
      hkb: () => {},
      linesFromArrays: (bb, cb, sb) => (0, ab.k)(bb, cb, sb, Ib),
      TQ: () => {},
      Ykb: Zb
    };
    var qb = sb(41105),
      db = sb(41121);
    class Ab {
      constructor(bb) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const cb = new Promise((bb => {
          this.refused = bb
        }));
        this.deviceLost = Promise.race([bb, cb])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(bb) {
        (function(bb) {
          const {
            name: cb,
            message: sb
          } = null !== bb && void 0 !== bb ? bb : {};
          return "InvalidStateError" === cb && "string" === typeof sb && sb.startsWith("GPUDevice.")
        })(bb) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: bb.message,
          framesRefused: !0
        }))
      }
    }
    class wb {
      constructor(bb) {
        this.resources = bb, this.matrixKey = {
          GM: 0
        }, this.attributesKey = {
          GM: 0
        }, this.inputs = Object.create(null);
        for (let cb = 0; cb < 4; cb++) this.inputs[`world${cb}`] = new Sb(this.matrixKey, 16 * cb, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(bb, cb) {
        this.resources.vertexBufferCreated(this.matrixKey, bb, !0), cb && this.resources.vertexBufferCreated(this.attributesKey, cb, !0)
      }
    }
    class rb extends wb {
      constructor(bb, cb, sb) {
        super(bb), this.mesh = cb, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const kb = this.inputs;
        let Wb = 0;
        for (const {
            size: Tb
          }
          of sb) Wb += Tb;
        for (const {
            name: Tb,
            offset: Ub,
            size: Ib,
            type: Hb
          }
          of sb) kb[Tb] = new Sb(this.attributesKey, 4 * Ub, 4 * Wb, Ib, !0, Hb);
        this.rowStride = Wb, bb.vF.set(cb, this);
        const ab = cb.isVerticesDataPresent;
        cb.isVerticesDataPresent = (bb, sb) => bb in kb || ab.call(cb, bb, sb)
      }
      attach(bb, cb) {
        this.matrices = bb, this.attributes = cb, this.bind(bb, cb), this.mirror(bb, bb.length, bb.length / 16)
      }
      K4(bb) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, bb ? 64 * bb : void 0)
      }
      Z4() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(bb, cb) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * bb, 16 * cb)
      }
      attributeRows(bb, cb) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, bb * this.rowStride, cb * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(bb, cb, sb) {
        const kb = this.mesh._thinInstanceDataStorage;
        kb.matrixData = bb, kb.matrixBufferSize = cb, kb.worldMatrices = null, kb.instancesCount = sb
      }
    }
    class ob extends wb {
      constructor(bb, cb, sb) {
        var kb, Wb, ab, Tb;
        super(bb), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (kb = null === sb || void 0 === sb ? void 0 : sb.interleavedKinds) && void 0 !== kb ? kb : null, this.offsets = null !== (Wb = null === sb || void 0 === sb ? void 0 : sb.interleavedOffsets) && void 0 !== Wb ? Wb : [], this.rowStride = null !== (ab = null === sb || void 0 === sb ? void 0 : sb.interleavedRowStride) && void 0 !== ab ? ab : 0, null === (Tb = this.layout) || void 0 === Tb || Tb.forEach(((bb, cb) => {
          this.inputs[bb] = new Sb(this.attributesKey, 4 * this.offsets[cb], 4 * this.rowStride, sb.strides[bb])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), bb.batchUploads.set(cb, this), cb.ZY.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(bb) {
        const cb = this.packedBatch;
        return cb.renderSelf ? 0 === bb ? this.packedSource : cb.instances[bb - 1] : cb.instances[bb]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(bb, cb, sb, kb) {
        const Wb = (cb.renderSelf ? 1 : 0) + cb.rows.length;
        if (this.frame = kb, this.count = Wb, this.packedSource = bb, this.packedBatch = cb, 0 === Wb) return;
        if (bb.getWorldMatrix(), 16 * Wb > this.matrices.length) {
          let bb = this.matrices.length / 16;
          for (; bb < Wb;) bb *= 2;
          this.matrices = new Float32Array(16 * bb), this.attributes &&= new Float32Array(bb * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let ab = 0;
        cb.renderSelf && this.packRow(ab++, bb, cb.row, sb);
        for (let Tb = 0; Tb < cb.rows.length; Tb++) this.packRow(ab++, cb.instances[Tb], cb.rows[Tb], sb);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Wb), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Wb * this.rowStride)
      }
      packRow(bb, cb, sb, kb) {
        const Wb = this.matrices;
        if (sb < 0) Wb.set(cb.getWorldMatrix().m, 16 * bb);
        else
          for (let Hb = 0; Hb < 16; Hb++) Wb[16 * bb + Hb] = kb[16 * sb + Hb];
        const ab = this.attributes;
        if (!ab) return;
        const Tb = cb.LJ,
          Ub = this.layout;
        for (let Hb = 0; Hb < Ub.length; Hb++) {
          var Ib;
          const cb = null !== (Ib = Tb[Ub[Hb]]) && void 0 !== Ib ? Ib : 0,
            sb = bb * this.rowStride + this.offsets[Hb];
          cb.toArray ? cb.toArray(ab, sb) : cb.copyToArray ? cb.copyToArray(ab, sb) : ab[sb] = cb
        }
      }
    }
    class Sb {
      constructor(bb, cb, sb, kb) {
        let Wb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = bb, this.byteOffset = cb, this.byteStride = sb, this.size = kb, this.instanced = Wb, this.type = ab, this.normalized = Tb
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
    const Rb = "CANVAS_ALPHA_ONE",
      vb = `override ${Rb}: bool = false;`,
      Fb = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function xb(bb, cb, sb) {
      var kb;
      let Wb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ab = null !== (kb = cb._colorFormat) && void 0 !== kb ? kb : "bgra8unorm",
        Tb = Wb ? 15 : 0;
      return sb ? {
        ...bb,
        targets: [{
          format: ab,
          blend: {
            color: sb,
            alpha: Fb
          },
          writeMask: Tb
        }]
      } : {
        ...bb,
        constants: {
          ...bb.constants,
          [Rb]: 1
        },
        targets: [{
          format: ab,
          writeMask: Tb
        }]
      }
    }

    function jb(bb, cb) {
      bb._renderables.push(cb)
    }

    function pb(bb) {
      var cb, sb;
      return null !== (cb = null === (sb = bb._frameGraph) || void 0 === sb ? void 0 : sb._tasks) && void 0 !== cb ? cb : []
    }

    function bc(bb) {
      return bb._currentEncoder
    }

    function cc(bb) {
      return bb.createBindGroupLayout({
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
    const sc = "greater-equal",
      kc = 2e5,
      Wc = 1e5,
      ac = new WeakMap;

    function Tc(bb, cb) {
      let sb = ac.get(bb);
      if (!sb) {
        sb = {
          module: bb.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, ac.set(bb, sb)
      }
      const kb = `${cb._colorFormat}|${cb._depthStencilFormat}|${cb._sampleCount}`;
      let Wb = sb.pipelines.get(kb);
      if (!Wb) {
        var ab;
        const {
          module: Tb
        } = sb;
        Wb = bb.createRenderPipeline({
          label: `placeholder ${kb}`,
          layout: bb.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Tb,
            entryPoint: "v"
          },
          fragment: {
            module: Tb,
            entryPoint: "f",
            targets: [{
              format: null !== (ab = cb._colorFormat) && void 0 !== ab ? ab : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: cb._depthStencilFormat ? {
            format: cb._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: cb._sampleCount
          }
        }), sb.pipelines.set(kb, Wb)
      }
      return Wb
    }

    function Uc(bb, cb, sb) {
      const kb = cb.eye,
        Wb = cb.viewMatrix;
      bb[0] = kb[0] + Wb[2] * sb, bb[1] = kb[1] + Wb[6] * sb, bb[2] = kb[2] + Wb[10] * sb
    }
    var Ic = sb(37540),
      Hc = sb(41011),
      fc = sb(36752);
    const Mc = Math.PI,
      Xc = Mc / 1.95,
      nc = [5e-4 / 94, 125e-7, 5e-4 / 18],
      mc = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((bb => {
        let [cb, sb] = bb;
        return .434 * Mc * Math.pow(2 * Mc / cb, 2) * sb
      }));

    function lc(bb, cb, sb) {
      const {
        up: kb,
        mieDirectionalG: Wb
      } = bb, ab = 1 - Cc(1 - Math.exp(cb[1] / 45e4), 0, 1), Tb = bb.rayleigh - (1 - ab), Ub = Math.hypot(cb[0], cb[1], cb[2]), Ib = Ub > 0 ? 1 / Ub : 0, Hb = sb.sunDir;
      for (let nb = 0; nb < 3; nb++) Hb[nb] = cb[nb] * Ib;
      const fb = Hb[0] * kb[0] + Hb[1] * kb[1] + Hb[2] * kb[2],
        Mb = 1e3 * Math.max(0, 1 - Math.exp(-(Xc - Math.acos(Cc(fb, -1, 1))) / 1.5));
      sb.sunE = Mb;
      const Xb = .2 * bb.turbidity * 1e-17 * bb.mieCoefficient;
      for (let nb = 0; nb < 3; nb++) {
        const bb = nc[nb] * Tb,
          cb = mc[nb] * Xb,
          kb = Mb / (bb + cb);
        sb.inScatterR[nb] = bb * kb, sb.inScatterM[nb] = cb * kb, sb.extinctionBeta[nb] = 8400 * bb + 1250 * cb
      }
      return sb.sunsetMix = Cc(Math.pow(1 - fb, 5), 0, 1), sb.sunDiscE = 19e3 * Mb, sb.mieScale = (1 - Wb * Wb) / (4 * Mc), sb.mieBase = 1 + Wb * Wb, sb.mieSlope = 2 * Wb, sb
    }
    const Qc = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const ec = 1 / function(bb) {
      const {
        A: cb,
        B: sb,
        C: kb,
        D: Wb,
        E: ab,
        F: Tb
      } = Qc;
      return (bb * (cb * bb + kb * sb) + Wb * ab) / (bb * (cb * bb + sb) + Wb * Tb) - ab / Tb
    }(1e3);

    function Cc(bb, cb, sb) {
      return Math.min(Math.max(bb, cb), sb)
    }
    const Nc = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function Vc(bb, cb) {
      const sb = new Map(cb),
        kb = [],
        Wb = [],
        ab = () => 0 === Wb.length || Wb[Wb.length - 1].active;
      let Tb = null;
      const Ub = () => {
        const bb = [...sb].filter((bb => {
            let [, cb] = bb;
            return !0 !== cb
          })),
          cb = bb.map((bb => {
            let [cb] = bb;
            return cb
          })).join("|");
        Tb = bb.length ? new RegExp(`\\b(${cb})\\b`, "g") : null
      };
      Ub();
      for (const Ib of bb.split("\n")) {
        const bb = Nc.exec(Ib);
        if (!bb) {
          ab() && kb.push(Tb ? Lc(Ib, Tb, sb) : Ib);
          continue
        }
        const cb = bb[1],
          Hb = bb[2].trim();
        if ("ifdef" === cb || "ifndef" === cb || "if" === cb) {
          const bb = ab(),
            kb = "if" === cb ? uc(Hb, sb) : sb.has(Hb) === ("ifdef" === cb);
          Wb.push({
            active: bb && kb,
            parentActive: bb,
            taken: kb
          })
        } else if ("elif" === cb || "else" === cb) {
          const bb = Wb[Wb.length - 1];
          if (!bb) throw new Error(`#${cb} without #if`);
          const kb = !bb.taken && ("else" === cb || uc(Hb, sb));
          bb.active = bb.parentActive && kb, bb.taken = bb.taken || kb
        } else if ("endif" === cb) {
          if (!Wb.pop()) throw new Error("#endif without #if")
        } else if (ab()) {
          const [bb, ...kb] = Hb.split(/\s+/);
          "undef" === cb ? sb.delete(bb) : sb.set(bb, !kb.length || kb.join(" ")), Ub()
        }
      }
      if (Wb.length) throw new Error("Unterminated #if");
      return kb.join("\n")
    }

    function Lc(bb, cb, sb) {
      return bb.replace(cb, (bb => {
        const cb = sb.get(bb);
        return "string" === typeof cb ? cb : bb
      }))
    }

    function uc(bb, cb) {
      var sb;
      const kb = null !== (sb = bb.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== sb ? sb : [];
      let Wb = 0;
      const ab = () => kb[Wb],
        Tb = () => kb[Wb++],
        Ub = bb => {
          const sb = /^\d/.test(bb) ? bb : cb.get(bb);
          return "string" === typeof sb ? parseInt(sb) : Number.NaN
        },
        Ib = () => {
          const bb = Tb();
          if ("!" === bb) return !Ib();
          if ("(" === bb) {
            const bb = fb();
            return Tb(), bb
          }
          if ("defined" === bb) {
            const bb = "(" === ab();
            bb && Tb();
            const sb = Tb();
            return bb && Tb(), cb.has(sb)
          }
          const sb = ab();
          if ("==" === sb || "!=" === sb || ">" === sb || "<" === sb || ">=" === sb || "<=" === sb) {
            Tb();
            const cb = Ub(bb),
              kb = Ub(Tb());
            if (Number.isNaN(cb) || Number.isNaN(kb)) return !1;
            switch (sb) {
              case "==":
                return cb === kb;
              case "!=":
                return cb !== kb;
              case ">":
                return cb > kb;
              case "<":
                return cb < kb;
              case ">=":
                return cb >= kb;
              default:
                return cb <= kb
            }
          }
          return cb.has(bb)
        },
        Hb = () => {
          let bb = Ib();
          for (;
            "&&" === ab();) {
            Tb();
            const cb = Ib();
            bb = bb && cb
          }
          return bb
        },
        fb = () => {
          let bb = Hb();
          for (;
            "||" === ab();) {
            Tb();
            const cb = Hb();
            bb = bb || cb
          }
          return bb
        },
        Mb = fb();
      if (Wb !== kb.length) throw new Error(`Cannot evaluate #if ${bb}`);
      return Mb
    }
    var Yc = sb(36749),
      hc = sb(37071),
      Jc = sb(37074),
      gc = sb(40308),
      Bc = sb(38348);
    const tc = 32,
      yc = [10, 3, 10],
      Pc = [21, 7, 21],
      Dc = Pc[0] * Pc[1] * Pc[2],
      Ec = 0,
      ic = 1,
      Oc = 2,
      Gc = 3,
      Kc = 64,
      Zc = 512,
      zc = 4 * Dc,
      qc = 1536,
      dc = zc + Dc * qc,
      Ac = 1073741824,
      wc = dc + 1;

    function rc(bb, cb) {
      const sb = bb % cb;
      return sb < 0 ? sb + cb : sb
    }

    function oc(bb, cb, sb) {
      return kb = rc(bb, Pc[0]), Wb = rc(cb, Pc[1]), ab = rc(sb, Pc[2]), kb + Pc[0] * (Wb + Pc[1] * ab);
      var kb, Wb, ab
    }

    function Sc(bb, cb, sb) {
      return bb + 8 * (cb + 8 * sb)
    }

    function Rc(bb, cb, sb) {
      return bb + 4 * (cb + 4 * sb)
    }
    const vc = 65535,
      Fc = 0,
      xc = 1,
      jc = 2,
      pc = 3;

    function bs(bb) {
      return Math.ceil(bb * bb / 32)
    }
    const cs = 8192,
      ss = 1 << 18,
      ks = 65536,
      Ws = 294912,
      as = 128,
      Ts = 4096,
      Us = 16,
      Is = 16385,
      Hs = 81921,
      fs = 147457,
      Ms = 4194304;
    const Xs = [0, 0, 0],
      ns = [0, 0, 0];

    function ms(bb, cb, sb, kb) {
      ! function(bb, cb, sb) {
        const [kb, Wb, ab] = [bb[0], bb[1], bb[2]];
        let Tb, Ub, Ib;
        Math.abs(Wb) < .99 ? (Tb = ab, Ub = 0, Ib = -kb) : (Tb = -Wb, Ub = kb, Ib = 0);
        const Hb = Math.hypot(Tb, Ub, Ib);
        cb[0] = Tb / Hb, cb[1] = Ub / Hb, cb[2] = Ib / Hb, sb[0] = Wb * cb[2] - ab * cb[1], sb[1] = ab * cb[0] - kb * cb[2], sb[2] = kb * cb[1] - Wb * cb[0]
      }(kb, Xs, ns);
      const Wb = 1 / 32;
      for (const [ab, Tb] of [
          [0, Xs],
          [4, ns]
        ]) {
        for (let sb = 0; sb < 3; sb++) bb[cb + ab + sb] = Tb[sb] * Wb;
        bb[cb + ab + 3] = -(Tb[0] * sb[0] + Tb[1] * sb[1] + Tb[2] * sb[2]) * Wb
      }
    }
    class ls {
      constructor() {
        this.words = new Uint32Array(fs), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Bn(bb, cb) {
        this.parts = 0, this.refs = 0, this.view = bb, this.viewAt = cb;
        const sb = bb[cb + 1] * bb[cb + 6] - bb[cb + 2] * bb[cb + 5],
          kb = bb[cb + 2] * bb[cb + 4] - bb[cb] * bb[cb + 6],
          Wb = bb[cb] * bb[cb + 5] - bb[cb + 1] * bb[cb + 4],
          ab = Math.hypot(sb, kb, Wb) || 1;
        this.light[0] = sb / ab, this.light[1] = kb / ab, this.light[2] = Wb / ab
      }
      add(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= Ts || ! function(bb, cb, sb) {
            const kb = bb[cb],
              Wb = bb[cb + 1],
              ab = bb[cb + 2],
              Tb = bb[cb + 3],
              Ub = bb[cb + 4],
              Ib = bb[cb + 5],
              Hb = bb[cb + 6],
              fb = bb[cb + 7],
              Mb = bb[cb + 8],
              Xb = bb[cb + 9],
              nb = bb[cb + 10],
              mb = bb[cb + 11],
              lb = bb[cb + 12],
              Qb = bb[cb + 13],
              eb = bb[cb + 14],
              Cb = bb[cb + 15],
              Nb = kb * Ib - Wb * Ub,
              Vb = kb * Hb - ab * Ub,
              Lb = kb * fb - Tb * Ub,
              ub = Wb * Hb - ab * Ib,
              Yb = Wb * fb - Tb * Ib,
              hb = ab * fb - Tb * Hb,
              Jb = Mb * Qb - Xb * lb,
              gb = Mb * eb - nb * lb,
              Bb = Mb * Cb - mb * lb,
              tb = Xb * eb - nb * Qb,
              yb = Xb * Cb - mb * Qb,
              Pb = nb * Cb - mb * eb,
              Db = Nb * Pb - Vb * yb + Lb * tb + ub * Bb - Yb * gb + hb * Jb;
            if (!(Math.abs(Db) > 1e-12)) return !1;
            const Eb = 1 / Db;
            return sb[0] = (Ib * Pb - Hb * yb + fb * tb) * Eb, sb[1] = (ab * yb - Wb * Pb - Tb * tb) * Eb, sb[2] = (Qb * hb - eb * Yb + Cb * ub) * Eb, sb[3] = (nb * Yb - Xb * hb - mb * ub) * Eb, sb[4] = (Hb * Bb - Ub * Pb - fb * gb) * Eb, sb[5] = (kb * Pb - ab * Bb + Tb * gb) * Eb, sb[6] = (eb * Lb - lb * hb - Cb * Vb) * Eb, sb[7] = (Mb * hb - nb * Lb + mb * Vb) * Eb, sb[8] = (Ub * yb - Ib * Bb + fb * Jb) * Eb, sb[9] = (Wb * Bb - kb * yb - Tb * Jb) * Eb, sb[10] = (lb * Yb - Qb * Lb + Cb * Nb) * Eb, sb[11] = (Xb * Lb - Mb * Yb - mb * Nb) * Eb, sb[12] = (Ib * gb - Ub * tb - Hb * Jb) * Eb, sb[13] = (kb * tb - Wb * gb + ab * Jb) * Eb, sb[14] = (Qb * Vb - lb * ub - eb * Nb) * Eb, sb[15] = (Mb * ub - Xb * Vb + nb * Nb) * Eb, !0
          }(cb, sb, this.inverse)) return;
        const {
          view: kb,
          viewAt: Wb
        } = this, ab = sb;
        let Tb = 1 / 0,
          Ub = 1 / 0,
          Ib = -1 / 0,
          Hb = -1 / 0,
          fb = -1 / 0;
        const [Mb, Xb, nb] = this.light;
        for (let Lb = 0; Lb < 8; Lb++) {
          const sb = 1 & Lb ? bb.hi[0] : bb.lo[0],
            mb = 2 & Lb ? bb.hi[1] : bb.lo[1],
            lb = 4 & Lb ? bb.hi[2] : bb.lo[2],
            Qb = sb * cb[ab] + mb * cb[ab + 4] + lb * cb[ab + 8] + cb[ab + 12],
            eb = sb * cb[ab + 1] + mb * cb[ab + 5] + lb * cb[ab + 9] + cb[ab + 13],
            Cb = sb * cb[ab + 2] + mb * cb[ab + 6] + lb * cb[ab + 10] + cb[ab + 14],
            Nb = kb[Wb] * Qb + kb[Wb + 1] * eb + kb[Wb + 2] * Cb + kb[Wb + 3],
            Vb = kb[Wb + 4] * Qb + kb[Wb + 5] * eb + kb[Wb + 6] * Cb + kb[Wb + 7];
          Tb = Math.min(Tb, Nb), Ub = Math.min(Ub, Vb), Ib = Math.max(Ib, Nb), Hb = Math.max(Hb, Vb), fb = Math.max(fb, Mb * Qb + Xb * eb + nb * Cb)
        }
        if (Ib < -1 || Hb < -1 || Tb >= 1 || Ub >= 1) return;
        const mb = this.parts++,
          lb = this.rects;
        lb[4 * mb] = Qs(Tb), lb[4 * mb + 1] = Qs(Ub), lb[4 * mb + 2] = Qs(Ib), lb[4 * mb + 3] = Qs(Hb);
        const Qb = this.inverse,
          {
            cell: eb,
            dims: Cb,
            lo: Nb
          } = bb,
          Vb = Hs + mb * Us;
        for (let Lb = 0; Lb < 3; Lb++) this.floats[Vb + 4 * Lb] = Qb[Lb] / eb, this.floats[Vb + 4 * Lb + 1] = Qb[4 + Lb] / eb, this.floats[Vb + 4 * Lb + 2] = Qb[8 + Lb] / eb, this.floats[Vb + 4 * Lb + 3] = (Qb[12 + Lb] - Nb[Lb]) / eb;
        this.words[Vb + 12] = bb.at, this.floats[Vb + 13] = fb + .001 * (1 + Math.abs(fb)), this.words[Vb + 14] = Cb[0] | Cb[1] << 8 | Cb[2] << 16
      }
      finish() {
        const bb = as,
          {
            counts: cb,
            rects: sb,
            words: kb
          } = this;
        cb.fill(0);
        let Wb = 0,
          ab = 0;
        for (; ab < this.parts; ab++) {
          const kb = 4 * ab,
            Tb = (sb[kb + 2] - sb[kb] + 1) * (sb[kb + 3] - sb[kb + 1] + 1);
          if (Wb + Tb > 65536) break;
          Wb += Tb;
          for (let Wb = sb[kb + 1]; Wb <= sb[kb + 3]; Wb++)
            for (let ab = sb[kb]; ab <= sb[kb + 2]; ab++) cb[Wb * bb + ab]++
        }
        let Tb = 0;
        for (let Ib = 0; Ib < 16384; Ib++) kb[Ib] = Tb, Tb += cb[Ib], cb[Ib] = kb[Ib];
        kb[16384] = Tb;
        for (let Ib = 0; Ib < ab; Ib++) {
          const Wb = 4 * Ib;
          for (let ab = sb[Wb + 1]; ab <= sb[Wb + 3]; ab++)
            for (let Tb = sb[Wb]; Tb <= sb[Wb + 2]; Tb++) kb[Is + cb[ab * bb + Tb]++] = Ib
        }
        const Ub = this.floats;
        for (let Ib = 0; Ib < 16384; Ib++) {
          const bb = Is + kb[Ib],
            cb = bb + Math.min(kb[Ib + 1] - kb[Ib], 64);
          for (let sb = bb + 1; sb < cb; sb++) {
            const cb = kb[sb],
              Wb = Ub[81934 + cb * Us];
            let ab = sb - 1;
            for (; ab >= bb && Ub[81934 + kb[ab] * Us] < Wb; ab--) kb[ab + 1] = kb[ab];
            kb[ab + 1] = cb
          }
        }
        this.refs = Wb
      }
    }

    function Qs(bb) {
      return Math.min(127, Math.max(0, Math.floor((.5 * bb + .5) * as)))
    }

    function es(bb, cb, sb, kb, Wb) {
      for (let ab = 0; ab < 4; ab++)
        for (let Tb = 0; Tb < 4; Tb++) Wb[4 * ab + Tb] = bb[cb + 4 * ab] * sb[kb + Tb] + bb[cb + 4 * ab + 1] * sb[kb + 4 + Tb] + bb[cb + 4 * ab + 2] * sb[kb + 8 + Tb] + bb[cb + 4 * ab + 3] * sb[kb + 12 + Tb]
    }

    function Cs(bb, cb, sb, kb, Wb) {
      const ab = bb[0] - cb,
        Tb = bb[1] - sb,
        Ub = bb[2] - kb,
        Ib = bb[3] - cb,
        Hb = bb[4] - sb,
        fb = bb[5] - kb,
        Mb = bb[6] - cb,
        Xb = bb[7] - sb,
        nb = bb[8] - kb;
      if (Math.min(ab, Ib, Mb) > Wb || Math.max(ab, Ib, Mb) < -Wb) return !1;
      if (Math.min(Tb, Hb, Xb) > Wb || Math.max(Tb, Hb, Xb) < -Wb) return !1;
      if (Math.min(Ub, fb, nb) > Wb || Math.max(Ub, fb, nb) < -Wb) return !1;
      const mb = Ib - ab,
        lb = Hb - Tb,
        Qb = fb - Ub,
        eb = Mb - Ib,
        Cb = Xb - Hb,
        Nb = nb - fb,
        Vb = lb * Nb - Qb * Cb,
        Lb = Qb * eb - mb * Nb,
        ub = mb * Cb - lb * eb;
      if (Math.abs(Vb * ab + Lb * Tb + ub * Ub) > Wb * (Math.abs(Vb) + Math.abs(Lb) + Math.abs(ub))) return !1;
      const Yb = [mb, lb, Qb, eb, Cb, Nb, ab - Mb, Tb - Xb, Ub - nb];
      for (let hb = 0; hb < 3; hb++) {
        const bb = Yb[3 * hb],
          cb = Yb[3 * hb + 1],
          sb = Yb[3 * hb + 2];
        for (let kb = 0; kb < 3; kb++) {
          const mb = 0 === kb ? 0 : 1 === kb ? sb : -cb,
            lb = 0 === kb ? -sb : 1 === kb ? 0 : bb,
            Qb = 0 === kb ? cb : 1 === kb ? -bb : 0,
            eb = mb * ab + lb * Tb + Qb * Ub,
            Cb = mb * Ib + lb * Hb + Qb * fb,
            Nb = mb * Mb + lb * Xb + Qb * nb,
            Vb = Wb * (Math.abs(mb) + Math.abs(lb) + Math.abs(Qb));
          if (Math.min(eb, Cb, Nb) > Vb || Math.max(eb, Cb, Nb) < -Vb) return !1
        }
      }
      return !0
    }
    const Ns = new Float32Array(1);
    new Uint32Array(Ns.buffer);
    var Vs = sb(38351);

    function Ls(bb) {
      const [cb, sb, kb] = Vs.r;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${bb.group}) @binding(${bb.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${cb-1}, ${sb-1}, ${kb-1});\n}\n`
    }

    function us(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Wb, ab, Tb] = Pc, [Ub, Ib, Hb] = yc, fb = Math.log2(tc), Mb = kb ? "var<private> bloxdSpCrossed: bool;\n" : "", Xb = kb ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${bb.group}) @binding(${bb.zX}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${bb.group}) @binding(${bb.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${sb?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Mb}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${xc}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${jc}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${sb?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${pc}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Wb}, ${ab}, ${Tb});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Wb} * (s.y + ${ab} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${Ub}, ${Ib}, ${Hb}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${fb}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Gc}u) {\n\t\treturn named && state == ${Oc}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${zc}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${dc}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${cb?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${cb?`\t\tif (exits && step > 0 && step % ${gs} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${fb}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${Ec}u || kind == ${ic}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${Oc}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${zc}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Xb}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Ys = {
      group: 0,
      uniform: 0,
      zX: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function hs() {
      const bb = Ys;
      return `${Ls(bb)}${us(bb,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Vs.c}>,\n}\n@group(${bb.group}) @binding(${bb.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${bb.group}) @binding(${bb.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Vs.l})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Vs.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Vs.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const gs = 2;
    const Bs = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function ts(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const kb = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${cb.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Wb = "trace" === sb || "lit" === sb,
        ab = "maskEdge" === sb ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Tb = Wb ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${cb.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${cb.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===sb?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${ab};\n`;
      return `${kb}${bb.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Wb?function(){const[bb,cb,sb]=Vs.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${bb}.0, ${cb}.0, ${sb}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Tb}}\n`:""}${bb.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${cb.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${cb.renderOffset});\n}\n`:""}`
    }
    const ys = "bloxdSpOwnTexture";

    function Ps(bb) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${bb.texture}) - 1u)))`
    }
    const Ds = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${Ic.f.map((bb=>{let[cb,sb]=bb;return`\tbloxdSpOut.${cb} = (bloxdSpWord & ${sb}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Es(bb) {
      return `bloxdSpFlags(${bb})`
    }
    const is = `${gc.i}.eyePosition`;

    function Os(bb, cb, sb, kb, Wb) {
      const ab = bb.indexOf(cb);
      if (ab < 0 || bb.indexOf(cb, ab + 1) >= 0) throw new Error(`Lite's ${Wb} program changed at the shader pack ${kb} hook: ${ab<0?"no":"more than one"} anchor (lite/${Wb}ShaderPack.ts)`);
      return bb.slice(0, ab) + sb + bb.slice(ab + cb.length)
    }

    function Gs(bb) {
      return bb.sunShadow || bb.airShadow
    }

    function Ks(bb, cb) {
      return cb && Gs(bb)
    }
    const Zs = {
      group: gc.d,
      ...gc.s
    };

    function zs(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!Gs(bb)) return "";
      if (cb) {
        const cb = Zs,
          Wb = "trace" === sb || "lit" === sb;
        let ab = "";
        bb.sunShadow && (ab = Wb ? `${us(cb,!0,"lit"===sb)}${kb=cb,`@group(${kb.group}) @binding(${kb.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${kb.group}) @binding(${kb.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(bb, cb, sb) {
          const kb = `@group(${bb}) @binding(${cb}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return sb ? `${kb}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Bs}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((bb=>`\t{\n\t\tlet o = vec2i(${bb});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : kb
        }(cb.group, gc.w, "maskEdge" === sb));
        const Tb = {
          shadowDirection: `${gc.i}.shadowDirection`,
          renderOffset: `${gc.i}.renderOffset`,
          eyePosition: `${gc.i}.eyePosition`
        };
        return `${Ls(cb)}${ab}${function(bb){const[cb,sb,kb]=Vs.r;return`@group(${bb.group}) @binding(${bb.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${bb.group}) @binding(${bb.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${cb}.0, ${sb}.0, ${kb}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(cb)}${ts(bb,Tb,sb)}`
      }
      var kb;
      return `${bb.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${bb.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function qs(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!cb) return "";
      const ab = (Tb = "fragmentInputs.vPositionW", Ub = bb.sunShadow ? {
        normal: sb,
        flags: kb
      } : null, `\n\tbloxdSpShadowPosition = ${Tb};\n${Ub?`\tbloxdSpShadowNormal = normalize(${Ub.normal});\n\tbloxdSpShadowEmissive = (${Ub.flags} & ${Ic.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${Ub.flags} & ${Ic.h}u) != 0u;\n`:""}`);
      var Tb, Ub;
      return bb.sunShadow && ("mask" === Wb || "maskEdge" === Wb) ? `${ab}${Ib="fragmentInputs.position",Hb="maskEdge"===Wb,`\n\tbloxdSpShadowPixel = vec2i(${Ib}.xy);\n${Hb?`\tbloxdSpShadowZ = ${Ib}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Ib}.z), dpdy(${Ib}.z));\n`:""}`}` : ab;
      var Ib, Hb
    }
    const ds = "bloxdSpTextureRotation",
      As = "bloxdSpTextureLayers",
      ws = `@group(${gc.d}) @binding(${gc.A}) var<storage, read> ${As}: array<u32>;\n`;

    function rs(bb) {
      return `\tvertexOutputs.vPackTexture = ${As}[min(u32(${bb}), arrayLength(&${As}) - 1u)];\n`
    }

    function os(bb) {
      return void 0 !== bb.uv
    }

    function Ss(bb) {
      if (!bb) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (os(bb)) return function(bb) {
        const {
          texture: cb,
          cells: sb,
          layers: kb
        } = bb, Wb = `textureDimensions(${cb}, bloxdSpLevel)`, ab = sb ? `max(vec2u(vec2f(${Wb}) / ${sb}), vec2u(1u))` : Wb, Tb = sb ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${ab};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${sb}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${sb}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${cb}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Wb} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${ab};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${cb}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let Ub;
        if (sb)
          if (1 === kb.length) Ub = `\treturn bloxdSpOwnTexel(${kb[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const bb = kb.length - 1;
            Ub = `\tvar bloxdSpColour = bloxdSpOwnTexel(${kb[bb]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let cb = bb - 1; cb >= 0; cb--) Ub += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${kb[cb]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            Ub += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else Ub = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${bb.id?`var<private> ${ys}: u32;\n`:""}${Tb}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Ps(bb)};\n\treturn ${ab};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${bb.id?ys:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Ps(bb)};\n${Ub}}\n`
      }(bb);
      const cb = bb,
        sb = bb => {
          const sb = bb > 0 ? `bloxdSpLayer - ${cb.layers*bb}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${bb}, ${cb.sampler}, bloxdSpTurned, ${sb}, round(bloxdSpMipLevel));`
        };
      let kb = "";
      for (let ab = 0; ab < cb.count - 1; ab++) kb += `\tif (bloxdSpLayer < ${cb.layers*(ab+1)}u) {\n\t\t${sb(ab)}\n\t}\n`;
      const Wb = cb.frame ? `${cb.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${ds}: u32;\n${ws}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${ds} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${ds} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${ds} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Wb}${kb}\t${sb(cb.count-1)}\n}\n`
    }

    function Rs(bb, cb, sb) {
      return !!bb.surface && "bloxdDefaultSurface" !== bb.surface && function(bb, cb) {
        return "liquid" === cb || !bb
      }(cb, sb)
    }

    function vs(bb, cb) {
      return bb.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${cb.vertexLocalPosition}, ${Es(cb.vertexFlags)});\n\t\tlet bloxdSpVertex = ${bb.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Fs(bb, cb, sb, kb, Wb) {
      if (!bb.surface) return "";
      const ab = (bb, cb) => `\n\tlet bloxdSpTexelUV = ${bb};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${cb}) - 1u));`;
      let Tb = "",
        Ub = "0u, 0u, vec2f(0.0), 0.0";
      const Ib = kb && os(kb) ? kb : null,
        Hb = kb && !os(kb) ? kb : null;
      if (Ib) {
        Tb = `${Ib.id?`\n\tlet bloxdSpTexture = ${Ib.id};\n\t${ys} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Ib.uv};${ab(function(bb,cb){var sb;return`${null!==(sb=bb.levelUv)&&void 0!==sb?sb:bb.cells?`${cb} / ${bb.cells}`:cb} * vec2f(textureDimensions(${bb.texture}))`}(Ib,"bloxdSpUv"),Ib.texture)}`, Ub = (Ib.id ? `${ys}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Hb && (Tb = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${ds} = bloxdSpTexture >> 16u;${ab(`fragmentInputs.vMainUV1 * ${(0,Yc.ib)(Hb.width)}`,"textureAtlas0")}`, Ub = `bloxdSpTexture & 0xffffu, ${ds}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const fb = Wb.overlayColour,
        Mb = fb ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Xb = "bloxdDefaultSurface" !== bb.surface || fb ? `\n\tbaseColor = vec4f(${Mb}, baseColor.a);` : "",
        nb = Rs(bb, cb, sb) ? `\n\t${Wb.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Tb}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Wb.alpha}, ${Wb.enchantTier}, ${Wb.enchantColour}, ${Wb.enchantSpeed}, ${null!==fb&&void 0!==fb?fb:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Wb.normal}, ${Wb.localPosition}, ${Es(Wb.flags)}, ${Ub});\n\tlet bloxdSpSurface = ${bb.surface}(bloxdSpSurfaceIn);${Xb}${nb}\n`
    }
    const xs = "bloxdSpLightIn";

    function ps(bb, cb, sb, kb) {
      if (!bb.light) return "";
      const Wb = cb ? `${Yc.i}.rgb, ${Yc.i}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Yc.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: ab,
          diffuse: Tb,
          emissive: Ub,
          ambient: Ib,
          fogColour: Hb,
          fogAlpha: fb,
          normal: Mb
        } = kb;
      return `\tvar ${xs} = BloxdLightIn(vec3f(0.0), ${sb?ab:"0.0"}, ${Tb}, ${Ub}, ${Ib}, ${Wb}, ${Hb}, ${fb}, fragmentInputs.vPositionW, ${Mb}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${xs}.litColour = bloxdLitColour(bloxdSpSurface, ${xs});\n`
    }

    function bk(bb) {
      return bb.light ? `\n\t{\n\t\tlet bloxdSpLight = ${bb.light}(bloxdSpSurface, ${xs});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const ck = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      sk = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      kk = "\treturn color;\n}",
      Wk = {
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
    const ak = Object.freeze({});

    function Tk(bb) {
      var cb;
      return !(null === (cb = (0, Bc.e)(bb)) || void 0 === cb || !cb.sceneDepth)
    }

    function Uk(bb) {
      const cb = (0, Bc.e)(bb);
      return !!cb && Rs(cb.hooks, cb.strict, cb.program)
    }

    function Ik(bb, cb, sb, kb) {
      return Os(bb, cb, sb, kb, "terrain")
    }

    function Hk(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const ab = function(bb) {
          return (0, Bc.d)(bb.packVariant, bb.liquid ? "liquid" : "terrain")
        }(bb),
        {
          hooks: Tb
        } = ab,
        Ub = Ks(ab, kb),
        Ib = "edge" === Wb ? "maskEdge" : "plain" === Wb ? "mask" : "trace",
        Hb = vs(Tb, Wk);
      Hb && (cb = Ik(cb, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Hb}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const fb = "atlas" === bb.texture ? {
          count: bb.atlasCount,
          layers: bb.atlasLayers,
          width: bb.uR,
          sampler: "atlasSampler",
          frame: bb.animated ? sb : null
        } : null,
        Mb = `${ab.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${qs(ab,Ub,Wk.normal,Wk.flags,Ib)}${Fs(Tb,ab.strict,ab.program,fb,Wk)}`;
      Mb && (cb = Ik(cb, ck, `${ck.slice(0,-1)}${Mb}`, "surface"));
      const Xb = bk(Tb);
      return Xb && (cb = Ik(cb, sk, `${ps(Tb,bb.lighting,bb.dirLightCount>0,Wk)}${sk}`, "light input"), cb = Ik(cb, kk, `${Xb.slice(1)}${kk}`, "light")), `${(0,gc.G)()}${ab.sceneDepth?`@group(${gc.d}) @binding(${gc.p}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${is};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${zs(ab,Ub,Ib)}${Ss(fb)}${Ds}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${ab.code}${cb}`
    }
    const fk = ub.e.WGSL;

    function Mk(bb) {
      return void 0 !== bb.packVariant
    }
    const Xk = {
        Jkb: 0,
        gkb: 4,
        Bkb: 8,
        tkb: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      nk = Xk.aoLevels + 4,
      mk = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      lk = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      Qk = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      ek = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Ck = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      Nk = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      Vk = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      Lk = 0,
      uk = 3,
      Yk = 4,
      hk = 5,
      Jk = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${hc.c}, ${hc.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${hc.c}, ${hc.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      gk = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((bb=>Jc.e>>bb&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const Bk = {
      aX: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: bb => `animDataPerTex[${bb}]`
    };

    function tk(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bk;
      return `\n\tlet atlasIdxIn = ${bb};\n\tlet animTick = ${sb.aX};\n\tlet animTickStride = ${sb.stride};\n\tlet numAnimTextures = ${sb.count};\n\t${(0,Yb.f)(ub.e.WGSL,sb.perTexture)}\n\t${cb}animLayer;\n`
    }

    function yk(bb) {
      const cb = (cb, sb) => {
        const kb = cb > 0 ? `fragmentInputs.texAtlasIndex - ${bb.atlasLayers.toFixed(1)} * ${cb.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${sb?"textureSampleLevel":"textureSample"}(textureAtlas${cb}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${kb}))${sb?", atlasLod":""})`
      };
      if (1 === bb.atlasCount) return `baseColor = ${cb(0,!1)};`;
      let sb = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Yc.ib)(bb.uR)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let kb = 0; kb < bb.atlasCount; kb++) {
        const Wb = bb.atlasLayers * (kb + 1) - .5;
        sb += `${kb>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Yc.ib)(Wb)}) {\n\t\tbaseColor = ${cb(kb,!0)};\n\t}`
      }
      return sb
    }

    function Pk(bb) {
      return `terrain-${bb.texture}${"atlas"===bb.texture?bb.atlasCount:""}${bb.animated?"-anim":""}${bb.alphaTest?"-test":""}${bb.lighting?"-lit":""}-dir${bb.dirLightCount}${bb.packed?"-packed":""}${Mk(bb)?`-sp${bb.packVariant}`:""}${bb.liquid?"-liquid":""}${bb.resting?"-rest":""}`
    }

    function Dk(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const kb = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const sb = "none" !== bb.texture,
          kb = "atlas" === bb.texture,
          Wb = bb.dirLightCount > 0,
          ab = Mk(bb);
        if (bb.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${bb.dirLightCount}`);
        let Tb = 1,
          Ub = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (kb) {
          bb.animated && (Ub += `@group(2) @binding(${Tb++}) var<storage, read> animDataPerTex: array<f32>;\n`), Ub += `@group(2) @binding(${Tb++}) var atlasSampler: sampler;\n`;
          for (let cb = 0; cb < bb.atlasCount; cb++) Ub += `@group(2) @binding(${Tb++}) var textureAtlas${cb}: texture_2d_array<f32>;\n`
        } else "single" === bb.texture && (Ub += `@group(2) @binding(${Tb++}) var diffuseSamplerSampler: sampler;\n`, Ub += `@group(2) @binding(${Tb++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Ib = function(bb) {
            const cb = Vk,
              sb = "none" !== bb.texture,
              kb = "atlas" === bb.texture,
              Wb = Mk(bb);
            return bb.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${sb?"uv: vec2f,":""}\n\t${kb?"texAtlasIndices: f32,":""}\n\t${bb.lighting?"aPackedLightLevels: f32,":""}\n\t${Wb?"blockFlagWords: vec2u,":""}\n}\n${Jk}\n${gk}\n${"single"===bb.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${sb?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===bb.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${kb?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${bb.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Wb?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${cb.position}) position: vec3f,\n\t@location(${cb.normal}) normal: vec4f,\n\t@location(${cb.color}) color: vec4f,\n\t${sb?`@location(${cb.uv}) uv: vec2f,`:""}\n\t${bb.lighting?`@location(${cb.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Wb?`@location(${cb.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(bb),
          Hb = `\n${ek}\n${lk}\n${Qk}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${Ub}\n${vb}\n${Ib.declarations}\nstruct Varyings {\n\t${"none"===cb?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${bb.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Wb?"@location(5) vTerrainLambert: f32,":""}\n\t${sb?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${kb?"@location(7) texAtlasIndex: f32,":""}\n\t${bb.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${ab?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${ab&&kb?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${bb.resting?"":(0,Yc.m)(fk)}\n${Nk}\n\n@vertex\nfn mainVertex(${Ib.parameter}) -> Varyings {\n\t${Ib.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${ab?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${Ic.b.placed}u;`:""}\n\t${ab&&kb?rs("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${bb.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${sb?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${kb?function(bb){return bb?tk("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(bb.animated):""}\n\t${"single"===bb.texture&&bb.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Yc.$)(fk)}\n\t${(0,Yc.F)(fk,bb.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${bb.resting?"":Ck}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${kb?yk(bb):""}\n\t${"single"===bb.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${sb?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${bb.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Wb?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${Rb}));\n\t${Mk(bb)?(0,Yc.db)(ub.e.WGSL):(0,Yc.U)(fk)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          fb = new Set;
        bb.lighting && fb.add("BLOXD_LIGHTING");
        Wb && fb.add("BLOXD_TERRAIN_DIRECTIONAL");
        return Vc(Hb, new Map([...fb].map((bb => [bb, !0]))))
      }(bb, sb);
      if (!Mk(bb)) return kb;
      const Wb = Hk(bb, kb, tk, cb, sb);
      return "none" === sb ? Wb : `${Wb}${function(bb){const cb="none"!==bb.texture&&bb.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${bb.resting?"":Ck}\n\t${bb.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${cb&&"atlas"===bb.texture?yk(bb):""}\n\t${cb&&"single"===bb.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${cb?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${Ic.b.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(bb)}`
    }
    const Ek = new Map([
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

    function ik(bb, cb) {
      const sb = new Map;
      let kb = 0;
      const Wb = [],
        ab = [],
        Tb = [];
      for (const Hb of cb) {
        var Ub, Ib;
        const cb = null !== (Ub = Hb.type.trim().split(/\s+/).pop()) && void 0 !== Ub ? Ub : Hb.type,
          fb = Ek.get(cb);
        if (!fb) throw new Error(`Lite: no uniform layout for ${Hb.name}: ${Hb.type}`);
        const Mb = null !== (Ib = Hb.arraySize) && void 0 !== Ib ? Ib : 0,
          Xb = Mb ? 4 : fb.align;
        kb = Math.ceil(kb / Xb) * Xb;
        const nb = Mb ? 4 * Math.ceil(fb.floats / 4) : fb.floats;
        if (sb.set(Hb.name, {
            offset: kb,
            floats: fb.floats,
            arraySize: Mb,
            stride: nb
          }), Mb && fb.floats <= 2) {
          const cb = `${bb}_${Tb.length}_strided`;
          ab.push(`struct ${cb} {\n\t@size(16) el: ${fb.wgsl},\n}`), Tb.push(Hb.name), Wb.push(`\t@align(16) ${Hb.name}: array<${cb}, ${Mb}>,`)
        } else Mb ? Wb.push(`\t@align(16) ${Hb.name}: array<${fb.wgsl}, ${Mb}>,`) : Wb.push(`\t${Hb.name}: ${fb.wgsl},`);
        kb += Mb ? nb * Mb : fb.floats
      }
      return {
        slots: sb,
        floats: Math.max(4, 4 * Math.ceil(kb / 4)),
        wgsl: `${ab.join("\n")}\nstruct ${bb} {\n${Wb.join("\n")}\n}\n`,
        stridedArrays: Tb
      }
    }
    const Ok = [{
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
      Gk = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      Kk = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function Zk(bb, cb) {
      return `#if defined(${bb}) && ${bb}DIRECTUV == 0\nvarying v${cb}UV: vec2f;\n#endif`
    }

    function zk(bb, cb, sb) {
      return `#if defined(${bb}) && ${bb}DIRECTUV == 0\nif (uniforms.v${cb}Infos.x==0.)\n{vertexOutputs.v${cb}UV= (uniforms.${sb}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${cb}UV= (uniforms.${sb}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function qk(bb, cb, sb) {
      return `#ifdef ${bb}\n#if ${bb}DIRECTUV == 1\n#define v${cb}UV vMainUV1\n#elif ${bb}DIRECTUV == 2\n#define v${cb}UV vMainUV2\n#else\nvarying v${cb}UV: vec2f;\n#endif\nvar ${sb}SamplerSampler: sampler;\nvar ${sb}Sampler: texture_2d<f32>;\n#endif`
    }
    const dk = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      Ak = 256,
      wk = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      rk = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      Sk = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      Rk = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      vk = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      Fk = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      xk = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      jk = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${rk}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${Zk("OPACITY","Opacity")}\n${Zk("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${xk}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${Sk}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${zk("OPACITY","Opacity","opacity")}\n${zk("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Rk}\n#define CUSTOM_VERTEX_MAIN_END\n${vk}\n}\n`;
    const pk = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${qk("OPACITY","Opacity","opacity")}\n${qk("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${xk}\n${Fk}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((bb,cb)=>function(bb){const cb=`
    frame.lights[LITE_LIGHT$ {
        bb
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      bb
    }\
    nvar diffuse$ {
      bb
    }: vec4f = $ {
      cb
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      bb
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      cb
    }.vLightData, diffuse$ {
      bb
    }.rgb, $ {
      cb
    }.vLightSpecular.rgb, diffuse$ {
      bb
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(cb))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, bW = /^([gimus]+)!/, cW = new Set;

    function sW(bb) {
      cW.has(bb) || (cW.add(bb), console.warn(`Lite: no place for plugin code at ${bb} in the standard shader: it is left out`))
    }

    function kW(bb, cb) {
      let sb = bb;
      const kb = new Map;
      for (const [ab, Tb] of cb) {
        var Wb;
        kb.set(ab, `${null!==(Wb=kb.get(ab))&&void 0!==Wb?Wb:""}${Tb}\n`)
      }
      for (const [ab, Tb] of kb) {
        if (!ab.startsWith("!")) {
          const bb = `#define ${ab}`;
          if (!sb.includes(bb)) {
            sW(ab);
            continue
          }
          sb = sb.replace(bb, (() => `\n${Tb}\n${bb}`));
          continue
        }
        let bb = ab.substring(1),
          cb = "g";
        if (bb.startsWith("!")) cb = "", bb = bb.substring(1);
        else {
          const sb = bW.exec(bb);
          sb && (cb = sb[1], bb = bb.substring(cb.length + 1))
        }
        const kb = new RegExp(bb, cb.includes("g") ? cb : `${cb}g`);
        let Wb = kb.exec(sb);
        for (Wb || sW(ab); Wb;) {
          const bb = Wb,
            cb = Tb.replace(/\$(\d+)/g, ((cb, sb) => Number(sb) < bb.length ? bb[Number(sb)] : ""));
          sb = sb.substring(0, bb.index) + cb + sb.substring(bb.index + bb[0].length), kb.lastIndex = bb.index + cb.length, Wb = kb.exec(sb)
        }
      }
      return sb
    }
    const WW = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      aW = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      TW = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function UW(bb) {
      const cb = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let sb = bb.replace(WW, ((bb, sb, kb, Wb, ab, Tb) => ("attribute" === sb ? cb.attributes.push({
        name: ab,
        type: Tb
      }) : void 0 === sb ? cb.varyings.push({
        name: ab,
        type: Tb,
        interpolation: HW(Tb, kb, Wb)
      }) : cb.uniforms.push({
        name: ab,
        type: IW(Tb)
      }), "")));
      return sb = sb.replace(aW, ((bb, sb) => (cb.samplers.add(sb), ""))), sb = sb.replace(TW, ((bb, sb, kb) => (cb.textures.push({
        name: sb,
        type: kb
      }), ""))), cb.body = sb, cb
    }

    function IW(bb) {
      const cb = bb.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        sb = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(cb);
      if (!sb) throw new Error(`Lite: unsupported uniform type ${bb}`);
      return sb
    }

    function HW(bb, cb, sb) {
      return void 0 === cb && void 0 === sb ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(bb.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === cb ? "@interpolate(flat) " : `@interpolate(${null!==cb&&void 0!==cb?cb:"perspective"}, ${null!==sb&&void 0!==sb?sb:"center"}) `
    }

    function fW(bb) {
      return mW({
        defines: bb.defines,
        vertex: kW(jk, bb.vertexCode),
        fragment: kW(pk, bb.fragmentCode),
        members: [...Ok, ...bb.defines.has("OPACITY") ? Gk : [], ...bb.defines.has("EMISSIVE") ? Kk : [], ...bb.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function MW(bb) {
      const cb = bb.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (cb === bb) throw new Error("Lite: fragment main has no return");
      return cb
    }
    const XW = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${rk}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${Sk}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Rk}\n${vk}\n}\n`,
      nW = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${Fk}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function mW(bb) {
      const cb = bb.defines,
        sb = UW(Vc(bb.vertex, cb)),
        kb = UW(Vc(bb.fragment, cb)),
        Wb = new Map;
      for (const Nb of [...sb.varyings, ...kb.varyings]) Wb.has(Nb.name) || Wb.set(Nb.name, Nb);
      const ab = [...Wb.values()].map(((bb, cb) => `\t@location(${cb}) ${bb.interpolation}${bb.name}: ${bb.type},`)),
        Tb = [...bb.members];
      for (const Nb of [...sb.uniforms, ...kb.uniforms]) Tb.some((bb => bb.name === Nb.name)) || Tb.push(Nb);
      const Ub = ik(bb.structName, Tb),
        Ib = [],
        Hb = [];
      let fb = 1;
      const Mb = new Set;
      for (const Nb of [...sb.textures, ...kb.textures]) {
        if (Mb.has(Nb.name)) continue;
        Mb.add(Nb.name);
        const bb = `${Nb.name}Sampler`,
          cb = fb++,
          sb = fb++,
          kb = Nb.type.startsWith("texture_2d_array") ? "2d-array" : Nb.type.startsWith("texture_cube") ? "cube" : "2d";
        Ib.push({
          name: Nb.name,
          binding: cb,
          samplerBinding: sb,
          dimension: kb
        }), Hb.push(`@group(2) @binding(${cb}) var ${Nb.name}: ${Nb.type};`), Hb.push(`@group(2) @binding(${sb}) var ${bb}: sampler;`)
      }
      for (const Nb of [...sb.samplers, ...kb.samplers])
        if (!Mb.has(Nb.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Nb} has no texture`);
      const Xb = [ek, wk, Ub.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${bb.structName};`, ...Hb].join("\n"),
        nb = sb.attributes,
        mb = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...sb.attributes.map(((bb, cb) => `\t@location(${cb}) ${bb.name}: ${bb.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        lb = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...ab, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        Qb = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...kb.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...ab, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", vb, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${Rb}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        eb = bb => {
          for (const cb of Ub.stridedArrays) bb = bb.replace(new RegExp(`\\b${cb}\\s*\\[(.*?)\\]`, "g"), `${cb}[$1].el`);
          return bb
        };
      return {
        vertex: `${Xb}\n${mb}\n${lb}\n${eb(sb.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Xb}\n${Qb}\n${MW((Cb=eb(kb.body),Cb.includes("fragmentInputs.position")?Cb.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Cb))}`,
        attributes: nb,
        material: Ub,
        textures: Ib
      };
      var Cb
    }
    const lW = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      QW = bb => ({
        name: bb,
        type: "vec3"
      }),
      eW = bb => ({
        name: bb,
        type: "float"
      }),
      CW = ik("EarthSkyUniforms", [QW("viewFrom"), eW("exposureScale"), QW("zenithOffset"), eW("fogOn"), QW("up"), eW("ditherOn"), QW("sun"), eW("turbidity"), QW("tint"), eW("rayleigh"), QW("sunDir"), eW("mieStrength"), QW("inScatterR"), eW("mieFocus"), QW("inScatterM"), eW("sunE"), QW("extinctionBeta"), eW("sunsetMix"), eW("mieScale"), eW("mieBase"), eW("mieSlope"), eW("sunDiscE"), eW("exposure")]),
      NW = `${ek}\n${wk}\n${CW.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      VW = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${lW.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      LW = `\n${vb}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Qc).map((bb=>{let[cb,sb]=bb;return`const TONE_${cb}: f32 = ${sb};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${ec};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${Rb}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var uW = sb(36654);
    const YW = new uW.Fm,
      hW = new uW.Fm,
      JW = new uW.Quaternion,
      gW = new Float64Array(3),
      BW = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      tW = new Float64Array(16);

    function yW(bb, cb, sb) {
      const kb = sb.worldMatrix;
      var Wb;
      bb.updateFloat3("viewFrom", kb[12], kb[13], kb[14]), bb.updateFloatsFrom("zenithOffset", cb.cameraOffset, 0, 3), bb.updateFloatsFrom("up", cb.up, 0, 3), cb.luminance > 0 && (bb.updateFloat("exposure", cb.luminance), bb.updateFloat("exposureScale", (Wb = cb.luminance, Math.log2(2 / Math.pow(Wb, 4))))), bb.updateFloat("turbidity", cb.turbidity), bb.updateFloat("rayleigh", cb.rayleigh), bb.updateFloat("mieStrength", cb.mieCoefficient), bb.updateFloat("mieFocus", cb.mieDirectionalG), bb.updateFloatsFrom("tint", cb.tint, 0, 3), bb.updateFloat("fogOn", cb.fog && sb.fogEnabled && 0 !== sb.fogMode ? 1 : 0), bb.updateFloat("ditherOn", cb.dithering ? 1 : 0);
      const ab = cb.sunPosition;
      if (YW.set(ab[0], ab[1], ab[2]), !cb.useSunPosition) {
        const bb = Math.PI * (cb.inclination - .5),
          sb = 2 * Math.PI * (cb.azimuth - .5);
        YW.set(cb.distance * Math.cos(sb) * Math.cos(bb), cb.distance * Math.sin(-bb), cb.distance * Math.sin(sb) * Math.cos(bb)), uW.Quaternion.FromUnitVectorsToRef(uW.Fm.UpReadOnly, hW.set(cb.up[0], cb.up[1], cb.up[2]), JW), YW.rotateByQuaternionToRef(JW, YW)
      }
      bb.updateVector3("sun", YW), gW[0] = YW.x, gW[1] = YW.y, gW[2] = YW.z;
      const Tb = lc(cb, gW, BW);
      bb.updateFloatsFrom("sunDir", Tb.sunDir, 0, 3), bb.updateFloat("sunE", Tb.sunE), bb.updateFloatsFrom("inScatterR", Tb.inScatterR, 0, 3), bb.updateFloatsFrom("inScatterM", Tb.inScatterM, 0, 3), bb.updateFloatsFrom("extinctionBeta", Tb.extinctionBeta, 0, 3), bb.updateFloat("sunsetMix", Tb.sunsetMix), bb.updateFloat("sunDiscE", Tb.sunDiscE), bb.updateFloat("mieScale", Tb.mieScale), bb.updateFloat("mieBase", Tb.mieBase), bb.updateFloat("mieSlope", Tb.mieSlope)
    }

    function PW(bb, cb) {
      const sb = tW;
      sb[0] = cb.far, sb[5] = cb.far, sb[10] = cb.far, sb[15] = 1;
      const kb = bb.infiniteDistance;
      for (let Wb = 0; Wb < 3; Wb++) sb[12 + Wb] = bb.position[Wb] + (kb ? cb.worldMatrix[12 + Wb] : 0);
      return tW
    }
    var DW = sb(38322);

    function EW(bb) {
      return Math.max(4, 4 * Math.ceil(bb / 4))
    }

    function iW(bb, cb, sb, kb) {
      const Wb = bb.createBuffer({
        label: kb,
        size: EW(cb.byteLength),
        usage: sb,
        mappedAtCreation: !0
      });
      return new Uint8Array(Wb.getMappedRange(), 0, cb.byteLength).set(new Uint8Array(cb.buffer, cb.byteOffset, cb.byteLength)), Wb.unmap(), Wb
    }

    function OW(bb, cb) {
      return Math.floor(Math.log2(Math.max(bb, cb))) + 1
    }

    function GW(bb, cb, sb, kb, Wb, ab) {
      const Tb = bb.createTexture({
          label: ab,
          size: {
            width: sb,
            height: kb,
            depthOrArrayLayers: Wb
          },
          format: "rgba8unorm",
          mipLevelCount: OW(sb, kb),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        Ub = (cb, sb, kb, ab) => {
          bb.queue.writeTexture({
            texture: Tb,
            mipLevel: sb
          }, cb, {
            bytesPerRow: 4 * kb,
            rowsPerImage: ab
          }, {
            width: kb,
            height: ab,
            depthOrArrayLayers: Wb
          })
        };
      Ub(cb, 0, sb, kb);
      let Ib = 1;
      for (const Hb of function*(bb, cb, sb, kb) {
          let Wb = bb,
            ab = cb,
            Tb = sb;
          for (; ab > 1 || Tb > 1;) {
            const bb = Math.max(1, ab >> 1),
              cb = Math.max(1, Tb >> 1),
              sb = new Uint8Array(bb * cb * kb * 4),
              Ub = 4 * ab;
            let Ib = 0;
            for (let Hb = 0; Hb < kb; Hb++) {
              const kb = Hb * Ub * Tb;
              for (let Hb = 0; Hb < cb; Hb++) {
                const cb = kb + Math.min(2 * Hb, Tb - 1) * Ub,
                  fb = kb + Math.min(2 * Hb + 1, Tb - 1) * Ub;
                for (let kb = 0; kb < bb; kb++) {
                  const bb = 4 * Math.min(2 * kb, ab - 1),
                    Tb = 4 * Math.min(2 * kb + 1, ab - 1);
                  for (let kb = 0; kb < 4; kb++) sb[Ib++] = Wb[cb + bb + kb] + Wb[cb + Tb + kb] + Wb[fb + bb + kb] + Wb[fb + Tb + kb] + 2 >> 2
                }
              }
            }
            yield {
              data: sb,
              width: bb,
              height: cb
            }, Wb = sb, ab = bb, Tb = cb
          }
        }(cb, sb, kb, Wb)) Ub(Hb.data, Ib++, Hb.width, Hb.height);
      return Tb
    }
    const KW = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function ZW(bb) {
      if (bb.startsWith("data:")) {
        const cb = bb.search(/[;,]/);
        return `data:${cb>5?bb.slice(5,cb):""} URL of ${bb.length} characters`
      }
      return bb.length > 80 ? `${bb.slice(0,80)}...` : bb
    }
    async function zW(bb) {
      const cb = await fetch(bb);
      if (!cb.ok) throw new Error(`${ZW(bb)}: ${cb.status} ${cb.statusText}`);
      return createImageBitmap(await cb.blob(), KW)
    }
    async function qW(bb) {
      const cb = await zW(bb),
        sb = new OffscreenCanvas(cb.width, cb.height),
        kb = sb.getContext("2d", {
          willReadFrequently: !0
        });
      if (!kb) throw new Error("No 2D context to decode an image");
      kb.drawImage(cb, 0, 0);
      const {
        data: Wb
      } = kb.getImageData(0, 0, cb.width, cb.height);
      return cb.close(), {
        pixels: new Uint8Array(Wb.buffer, Wb.byteOffset, Wb.byteLength),
        width: sb.width,
        height: sb.height
      }
    }
    const dW = new WeakMap;

    function AW(bb, cb, sb, kb) {
      var Wb;
      const ab = null !== (Wb = dW.get(bb)) && void 0 !== Wb ? Wb : new Map;
      dW.set(bb, ab);
      let Tb = ab.get(cb);
      return Tb || (Tb = (async Wb => {
        const ab = null !== (Wb = function(bb, cb) {
          const sb = bb ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : null;
          return null !== sb && void 0 !== sb && sb.byteLength && cb && sb.byteLength % (cb * cb * 4) === 0 ? {
            pixels: sb,
            layerWidth: cb,
            layers: sb.byteLength / (cb * cb * 4)
          } : null
        }(sb, kb)) && void 0 !== Wb ? Wb : await async function(bb) {
          const {
            pixels: cb,
            width: sb
          } = await qW(bb);
          return {
            pixels: cb,
            layerWidth: sb,
            layers: cb.byteLength / (sb * sb * 4)
          }
        }(cb), {
          layerWidth: Tb,
          layers: Ub
        } = ab;
        return {
          texture: GW(bb, ab.pixels, Tb, Tb, Ub, `atlas-${cb}`),
          layerWidth: Tb,
          layers: Ub
        }
      })(), ab.set(cb, Tb), Tb.catch((() => {
        ab.delete(cb)
      }))), Tb
    }
    const wW = new Map([
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
      rW = new Map([
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

    function oW(bb) {
      for (const cb of (0, DW.i)(bb))
        if (!rW.has((0, DW.h)(cb))) return !1;
      return !0
    }

    function SW(bb) {
      const cb = rW.get(bb);
      if (!cb) return null;
      const [sb, kb, Wb] = cb;
      return {
        srcFactor: wW.get(sb),
        dstFactor: wW.get(kb),
        operation: Wb
      }
    }
    let RW = null;

    function vW(bb) {
      RW = bb
    }

    function FW(bb, cb, sb) {
      var kb;
      null === (kb = RW) || void 0 === kb || kb(bb, cb, sb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class xW {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(bb, cb, sb, kb, Wb) {
        sb !== this.pipeline && (bb.setPipeline(sb), this.pipeline = sb), bb.setBindGroup(1, kb, [Wb]);
        const ab = cb.material.bindGroup;
        ab !== this.materialGroup && (bb.setBindGroup(2, ab), this.materialGroup = ab);
        const Tb = cb.program.packGroup;
        Tb && Tb !== this.packGroup && (bb.setBindGroup(gc.d, Tb), this.packGroup = Tb);
        const {
          vertexBuffers: Ub,
          vertexOffsets: Ib
        } = this;
        for (let Hb = 0; Hb < cb.vertexBuffers.length; Hb++) Ub[Hb] === cb.vertexBuffers[Hb] && Ib[Hb] === cb.vertexOffsets[Hb] || (bb.setVertexBuffer(Hb, cb.vertexBuffers[Hb], cb.vertexOffsets[Hb]), Ub[Hb] = cb.vertexBuffers[Hb], Ib[Hb] = cb.vertexOffsets[Hb]);
        cb.indexBuffer && cb.indexBuffer !== this.indexBuffer && (bb.setIndexBuffer(cb.indexBuffer, cb.indexFormat), this.indexBuffer = cb.indexBuffer)
      }
    }
    class jW {
      constructor(bb, cb, sb, kb) {
        this.modelMeshes = bb, this.f6 = cb, this.maker = sb, this.warnOnce = kb, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(bb) {
        this.collectGroup(bb, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(bb, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(bb, 1, this.frontDraws, this.frontDraws, !0);
        for (const cb of this.modelMeshes.groupIds())(cb < -1 || cb > 1) && this.warnOnce(`group:${cb}`, `rendering group ${cb} is not drawn`);
        for (const cb of this.f6.groupIds())(cb < -1 || cb > 1) && this.warnOnce(`group:${cb}`, `rendering group ${cb} is not drawn`);
        this.opaqueDraws.sort(pW), this.transparentDraws.sort(ba)
      }
      collectGroup(bb, cb, sb, kb, Wb) {
        const ab = this.modelMeshes.group(cb),
          Tb = this.f6.group(cb),
          Ub = 0 === cb ? null === Tb || void 0 === Tb ? void 0 : Tb.opaque : void 0;
        this.collectList(bb, null === ab || void 0 === ab ? void 0 : ab.opaque, Ub || null === Tb || void 0 === Tb ? void 0 : Tb.opaque, cb, !1, sb, Wb), Ub && (this.f6.drawn += this.maker.bundleDraws(bb, Ub, cb)), this.collectList(bb, null === ab || void 0 === ab ? void 0 : ab.alphaTest, void 0, cb, !1, sb, Wb), this.collectList(bb, null === ab || void 0 === ab ? void 0 : ab.transparent, null === Tb || void 0 === Tb ? void 0 : Tb.transparent, cb, !0, kb, Wb)
      }
      collectList(bb, cb, sb, kb, Wb, ab, Tb) {
        var Ub;
        const Ib = ab.length;
        cb && this.maker.pushDraws(bb, cb.units, cb.units.length, kb, Wb, ab, cb.rows), sb && (this.f6.drawn += this.maker.pushDraws(bb, sb, sb.length, kb, Wb, ab));
        const Hb = Wb ? null === (Ub = this.modelMeshes.group(kb)) || void 0 === Ub ? void 0 : Ub.text : void 0;
        Hb && this.maker.pushDraws(bb, Hb.units, Hb.units.length, kb, !0, ab, Hb.rows), Tb && ca(ab, Ib)
      }
    }

    function pW(bb, cb) {
      return bb.program.id - cb.program.id || bb.material.owner.uniqueId - cb.material.owner.uniqueId
    }

    function ba(bb, cb) {
      return bb.material.owner.uniqueId - cb.material.owner.uniqueId
    }

    function ca(bb, cb) {
      for (let sb = cb + 1; sb < bb.length; sb++) {
        const kb = bb[sb];
        let Wb = sb - 1;
        for (; Wb >= cb && ba(bb[Wb], kb) > 0; Wb--) bb[Wb + 1] = bb[Wb];
        bb[Wb + 1] = kb
      }
    }
    const sa = {};

    function ka(bb) {
      return bb.hasThinInstances ? "thin" : bb.ykb || bb._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Wa(bb, cb, sb) {
      return bb ? (sb._needUVs = !0, bb.optimizeUVAllocation && (0, Bb.H)(bb.matrix) ? (sb[`${cb}DIRECTUV`] = bb.uvSet + 1, sb[`MAINUV${bb.uvSet+1}`] = !0) : sb[`${cb}DIRECTUV`] = 0, !0) : (sb[`${cb}DIRECTUV`] = 0, !1)
    }

    function aa(bb) {
      const cb = new Map;
      for (const sb in bb) {
        if (95 === sb.charCodeAt(0)) continue;
        const kb = bb[sb],
          Wb = typeof kb;
        "number" === Wb || "string" === Wb ? cb.set(sb, String(kb)) : kb && "function" !== Wb && cb.set(sb, !0)
      }
      return cb
    }

    function Ta(bb) {
      const cb = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: sb
        }
        of bb.features)
        for (const bb in sb) cb[bb] = sb[bb];
      return cb
    }

    function Ua(bb) {
      const cb = bb.parts.geometry;
      return null !== cb && void 0 !== cb && cb.live ? cb : null
    }

    function Ia(bb) {
      var cb;
      return null !== (cb = Ua(bb)) && void 0 !== cb ? cb : sa
    }
    class Ha {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = bb, this.warnOnce = cb, this.programWithModel = sb, this.packFailed = kb, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(bb, cb, sb, kb, Wb) {
        const ab = cb.owner;
        let Tb = this.drawStates.get(cb);
        if (!Tb) {
          const bb = cb.parts.materials[cb.range];
          if (!bb) return this.warnOnce("model", `${sb.name} on ${ab.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Tb = {
            defines: Ta(bb),
            model: bb,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Wb,
            groupId: kb,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(cb, Tb)
        }
        if (this.programCurrent(Tb, cb, Wb, kb)) return Tb.program;
        const {
          model: Ub
        } = Tb, Ib = Ia(cb), Hb = this.instanceLayout(ab, Wb), fb = this.definesBits(ab);
        if (!this.prepareModelDefines(bb, ab, Ub, Tb.defines, kb, Wb)) return null;
        Tb.instancing = Wb, Tb.groupId = kb, Tb.modelVersion = Ub.version, Tb.geometry = Ib, Tb.instanceLayout = Hb, Tb.definesBits = fb;
        const Mb = function(bb) {
          let cb = "";
          for (const [sb, kb] of bb) cb += !0 === kb ? `${sb};` : `${sb}=${kb};`;
          return cb
        }(aa(Tb.defines));
        return Mb === Tb.definesKey && Tb.packVariant === this.modelPackVariant && Tb.program && !this.packFailed(Tb.program) || (Tb.definesKey = Mb, Tb.packVariant = this.modelPackVariant, Tb.program = this.programWithModel(Ub, Tb.defines, Mb)), Tb.program
      }
      programCurrent(bb, cb, sb, kb) {
        return null !== bb.program && !this.packFailed(bb.program) && bb.instancing === sb && bb.groupId === kb && this.definesHold(bb, cb, sb)
      }
      definesHold(bb, cb, sb) {
        return bb.modelVersion === bb.model.version && bb.geometry === Ia(cb) && bb.instanceLayout === this.instanceLayout(cb.owner, sb) && bb.definesBits === this.definesBits(cb.owner) && bb.packVariant === this.modelPackVariant
      }
      modelPackKind(bb) {
        var cb;
        return 0 === this.modelPackVariant ? null : null !== (cb = (0, Jb.v)(bb, hb.j.name)) && void 0 !== cb && cb.active ? "placed" : bb.item ? "item" : bb.lifeform ? "lifeform" : bb.box ? "box" : null
      }
      instanceLayout(bb, cb) {
        var sb, kb, Wb;
        return "thin" === cb ? null !== (Wb = this.resources.vF.get(bb)) && void 0 !== Wb ? Wb : null : "instanced" === cb && null !== (sb = null === (kb = bb._userInstancedBuffersStorage) || void 0 === kb ? void 0 : kb.interleavedKinds) && void 0 !== sb ? sb : null
      }
      definesBits(bb) {
        const cb = this.view;
        return (bb.visibility < 1 ? 1 : 0) | (bb.hasVertexAlpha ? 2 : 0) | (bb.applyFog ? 4 : 0) | (bb.useVertexColors ? 8 : 0) | (bb.nonUniformScaling ? 16 : 0) | (cb.fogEnabled && 0 !== cb.fogMode ? 32 : 0) | (cb.lightsEnabled ? 64 : 0) | cb.lightCount << 7
      }
      prepareLightDefines(bb, cb, sb) {
        let kb = 0;
        if (this.view.lightsEnabled && !cb) {
          const cb = Math.min(sb, 4);
          for (; kb < this.view.lightCount && (bb[`LIGHT${kb}`] = !0, bb[`LITE_LIGHT${kb}_SLOT`] = kb, kb++, bb._needNormals = !0, kb !== cb););
        }
        for (let Wb = kb; Wb < 4; Wb++) bb[`LIGHT${Wb}`] = !1, bb[`LITE_LIGHT${Wb}_SLOT`] = void 0
      }
      prepareModelDefines(bb, cb, sb, kb, Wb, ab) {
        const {
          features: Tb
        } = sb;
        kb._needNormals = !1, kb._needUVs = !1;
        const Ub = this.view;
        this.prepareLightDefines(kb, sb.disableLighting, sb.maxSimultaneousLights), kb.MAINUV1 = !1, kb.MAINUV2 = !1;
        const Ib = sb.diffuseTexture;
        Ib ? (kb._needUVs = !0, kb.DIFFUSE = !0, Ib.optimizeUVAllocation && (0, Bb.H)(Ib.matrix) ? (kb.DIFFUSEDIRECTUV = Ib.uvSet + 1, kb[`MAINUV${Ib.uvSet+1}`] = !0) : kb.DIFFUSEDIRECTUV = 0, Ib.uvSet > 1 && this.warnOnce(`uvset:${sb.name}`, `${sb.name} samples UV set ${Ib.uvSet+1}, which is not supported`)) : (kb.DIFFUSE = !1, kb.DIFFUSEDIRECTUV = 0);
        const Hb = sb.opacityTexture,
          fb = sb.emissiveTexture;
        kb.OPACITY = Wa(Hb, "OPACITY", kb), kb.OPACITYRGB = null !== Hb && Hb.getAlphaFromRGB, kb.EMISSIVE = Wa(fb, "EMISSIVE", kb), (Hb && Hb.uvSet > 1 || fb && fb.uvSet > 1) && this.warnOnce(`uvset:${sb.name}`, `${sb.name} samples a UV set past 2, which is not supported`);
        const Mb = sb.reflectionTexture,
          Xb = null !== Mb;
        if (Xb) {
          if (!this.resources.boundTexture(Mb)) return !1;
          kb._needNormals = !0
        }
        kb.REFLECTION = Xb, kb.REFLECTIONMAP_3D = Xb, kb.REFLECTIONMAP_SKYBOX = Xb, kb.REFLECTIONMAP_OPPOSITEZ = Xb && (bb.useRightHandedSystem ? !Mb.invertZ : Mb.invertZ), kb.ROUGHNESS = Xb && sb.roughness > 0, kb.REFLECTIONOVERALPHA = Xb && sb.useReflectionOverAlpha, kb.LITE_REFLECTION_LUMINANCE = Xb && "cube" === Mb.source.kind && Mb.source.luminance, (cb.skeleton || cb.morphTargetManager) && this.warnOnce(`skin:${cb.name}`, `${cb.name} has bones or morph targets, which are not supported`), kb.FOG = sb.fogEnabled && cb.applyFog && Ub.fogEnabled && 0 !== Ub.fogMode, kb.NONUNIFORMSCALING = cb.nonUniformScaling;
        const {
          visibility: nb,
          hasVertexAlpha: mb
        } = cb;
        kb.ALPHATEST = (0, Jb.Q)(sb, nb, mb), kb.ALPHAFROMDIFFUSE = (0, Jb.gb)(sb), kb.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== sb.transparencyMode, kb.ALPHABLEND = null === sb.transparencyMode || (0, Jb.P)(sb, nb, mb), kb.PREMULTIPLYALPHA = 7 === sb.alphaMode || 8 === sb.alphaMode, kb.EMISSIVEASILLUMINATION = sb.useEmissiveAsIllumination, kb.LINKEMISSIVEWITHDIFFUSE = sb.linkEmissiveWithDiffuse, kb.TWOSIDEDLIGHTING = !sb.backFaceCulling && sb.twoSidedLighting, kb.INSTANCES = "none" !== ab, kb.THIN_INSTANCES = "thin" === ab, kb.LITE_FRONT_LAYER = Wb >= 1;
        for (const {
            feature: Yb,
            state: hb,
            active: Jb
          }
          of Tb) {
          var lb, Qb;
          if (Jb) null === (lb = (Qb = (0, fc.g)(Yb)).prepareDefinesBeforeAttributes) || void 0 === lb || lb.call(Qb, hb, kb, bb, cb)
        }
        this.modelPackKind(sb) && (kb._needNormals = !0), kb.NORMAL = kb._needNormals && cb.isVerticesDataPresent("normal"), kb.UV1 = kb._needUVs && cb.isVerticesDataPresent("uv"), kb.UV2 = kb._needUVs && cb.isVerticesDataPresent("uv2");
        const eb = cb.useVertexColors && cb.isVerticesDataPresent("color");
        kb.VERTEXCOLOR = eb, kb.VERTEXALPHA = cb.hasVertexAlpha && eb, kb.INSTANCESCOLOR = "none" !== ab && cb.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Yb,
            state: hb,
            active: Jb
          }
          of Tb) {
          var Cb, Nb;
          if (Jb) null === (Cb = (Nb = (0, fc.g)(Yb)).prepareDefines) || void 0 === Cb || Cb.call(Nb, hb, kb, bb, cb, sb)
        }
        const Vb = bb.Sm();
        for (const {
            feature: Yb,
            state: hb,
            active: Jb
          }
          of Tb) {
          var Lb, ub;
          if (Jb && !1 === (null === (Lb = (ub = (0, fc.g)(Yb)).isReadyForSubMesh) || void 0 === Lb ? void 0 : Lb.call(ub, hb, kb, bb, Vb))) return !1
        }
        return !0
      }
    }

    function fa(bb, cb, sb) {
      return bb.codeVersion !== cb.version && function(bb, cb) {
        const sb = [],
          kb = [];
        for (const {
            feature: Xb,
            state: nb,
            active: mb
          }
          of cb.features) {
          var Wb, ab, Tb, Ub;
          if (mb) Ma(null === (Wb = (ab = (0, fc.g)(Xb)).getCustomCode) || void 0 === Wb ? void 0 : Wb.call(ab, nb, "vertex", ub.e.WGSL), sb), Ma(null === (Tb = (Ub = (0, fc.g)(Xb)).getCustomCode) || void 0 === Tb ? void 0 : Tb.call(Ub, nb, "fragment", ub.e.WGSL), kb)
        }
        const Ib = [];
        for (const {
            feature: Xb,
            state: nb
          }
          of cb.features) {
          var Hb, fb;
          const bb = null === (Hb = (fb = (0, fc.g)(Xb)).getUniforms) || void 0 === Hb ? void 0 : Hb.call(fb, nb, ub.e.WGSL);
          for (const cb of null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.ubo) && void 0 !== Mb ? Mb : []) {
            var Mb;
            cb.size && cb.type && Ib.push({
              name: cb.name,
              type: cb.type,
              arraySize: cb.arraySize
            })
          }
        }
        bb.vertexCode = sb, bb.fragmentCode = kb, bb.pluginUniforms = Ib, bb.codeKey = JSON.stringify([sb, kb, Ib]), bb.codeVersion = cb.version
      }(bb, cb), `${sb}#${bb.codeKey}`
    }

    function Ma(bb, cb) {
      if (bb)
        for (const sb in bb) bb[sb] && cb.push([sb, bb[sb]])
    }
    const Xa = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class na {
      constructor(bb) {
        this.warnOnce = bb, this.states = new Map
      }
      renderState(bb, cb, sb, kb) {
        var Wb;
        let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Tb = null !== (Wb = bb.sideOrientation) && void 0 !== Wb ? Wb : cb.sideOrientation;
        cb._getWorldMatrixDeterminant() < 0 && (Tb = 0 === Tb ? 1 : 0);
        const Ub = "triangle-list" === ab,
          Ib = sb ? bb.alphaMode : 0,
          Hb = (!sb || (0 === Ib || bb.forceDepthWrite)) && !bb.disableDepthWrite,
          fb = Ub && bb.backFaceCulling ? bb.cullBackFaces ? "back" : "front" : "none",
          Mb = Ub && 0 !== Tb ? "ccw" : "cw",
          Xb = bb.depthFunction,
          nb = Ub ? bb.zOffset : 0,
          mb = Ub ? bb.zOffsetUnits : 0,
          lb = !bb.disableColorWrite;
        return kb && kb.alphaMode === Ib && kb.depthWrite === Hb && kb.depthFunction === Xb && kb.cullMode === fb && kb.frontFace === Mb && kb.zOffset === nb && kb.zOffsetUnits === mb && kb.colourWrite === lb && kb.topology === ab ? kb : this.stateFor(Ib, Hb, Xb, fb, Mb, nb, mb, lb, ab)
      }
      stateFor(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        const Hb = `${bb}|${cb}|${sb}|${kb}|${Wb}|${ab}|${Tb}|${Ub}|${Ib}`;
        let fb = this.states.get(Hb);
        if (!fb) {
          var Mb;
          const Xb = bb ? SW(bb) : null;
          bb && !Xb && this.warnOnce(`alpha:${bb}`, `alpha mode ${bb} is not supported`), fb = {
            key: Hb,
            alphaMode: bb,
            depthFunction: sb,
            zOffset: ab,
            zOffsetUnits: Tb,
            topology: Ib,
            blend: Xb,
            depthWrite: cb,
            depthCompare: sb && null !== (Mb = Xa.get(sb)) && void 0 !== Mb ? Mb : null,
            cullMode: kb,
            frontFace: Wb,
            depthBias: -Tb,
            depthBiasSlopeScale: -ab,
            colourWrite: Ub
          }, this.states.set(Hb, fb)
        }
        return fb
      }
    }
    var ma = sb(36982);

    function la(bb) {
      if (!bb.frozen) return -1;
      let cb = bb.version;
      for (const {
          feature: sb,
          state: kb,
          active: Wb
        }
        of bb.features) {
        if (!Wb || !sb.bind) continue;
        const bb = (0, fc.g)(sb).uniformsVersion;
        if (!bb) return -1;
        cb += bb(kb)
      }
      return cb
    }
    class Qa {
      constructor(bb, cb, sb) {
        this.slots = bb, this.data = cb, this.textures = sb, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(bb, cb) {
        this.write4(bb, cb, 0, 0, 0, 1)
      }
      updateFloat2(bb, cb, sb) {
        this.write4(bb, cb, sb, 0, 0, 2)
      }
      updateFloat3(bb, cb, sb, kb) {
        this.write4(bb, cb, sb, kb, 0, 3)
      }
      updateFloat4(bb, cb, sb, kb, Wb) {
        this.write4(bb, cb, sb, kb, Wb, 4)
      }
      updateVector3(bb, cb) {
        this.write4(bb, cb.x, cb.y, cb.z, 0, 3)
      }
      updateVector4(bb, cb) {
        this.write4(bb, cb.x, cb.y, cb.z, cb.w, 4)
      }
      updateColor3(bb, cb) {
        this.write4(bb, cb.r, cb.g, cb.b, 0, 3)
      }
      updateColor4(bb, cb, sb) {
        this.write4(bb, cb.r, cb.g, cb.b, sb, 4)
      }
      updateFloatsFrom(bb, cb, sb, kb) {
        const Wb = this.slots.get(bb);
        if (!Wb) return;
        const ab = this.data,
          Tb = Wb.offset;
        for (let Ub = 0; Ub < kb; Ub++) ab[Tb + Ub] = cb[sb + Ub]
      }
      updateFloat3TimesFloats(bb, cb, sb, kb) {
        const Wb = this.slots.get(bb);
        if (!Wb) return;
        const ab = this.data,
          Tb = Wb.offset;
        ab[Tb] = cb[sb] * kb[0], ab[Tb + 1] = cb[sb + 1] * kb[1], ab[Tb + 2] = cb[sb + 2] * kb[2]
      }
      O4(bb, cb) {
        const sb = this.slots.get(bb);
        sb && this.data.set(cb.m, sb.offset)
      }
      updateMatrixFloats(bb, cb) {
        const sb = this.slots.get(bb);
        sb && this.data.set(cb, sb.offset)
      }
      updateFloatArray(bb, cb) {
        const sb = this.slots.get(bb);
        if (!sb) return;
        if (!sb.arraySize || sb.stride === sb.floats) return void this.data.set(cb, sb.offset);
        const kb = Math.min(cb.length, sb.floats * sb.arraySize);
        for (let Wb = 0; Wb < kb; Wb++) this.data[sb.offset + Math.floor(Wb / sb.floats) * sb.stride + Wb % sb.floats] = cb[Wb]
      }
      updateArray(bb, cb) {
        this.updateFloatArray(bb, cb)
      }
      setTexture(bb, cb) {
        this.textures.set(bb, cb), this.expected.delete(bb)
      }
      expectTexture(bb) {
        this.textures.set(bb, null), this.expected.add(bb)
      }
      write4(bb, cb, sb, kb, Wb, ab) {
        const Tb = this.slots.get(bb);
        if (!Tb) return;
        const Ub = this.data,
          Ib = Tb.offset;
        Ub[Ib] = cb, ab > 1 && (Ub[Ib + 1] = sb), ab > 2 && (Ub[Ib + 2] = kb), ab > 3 && (Ub[Ib + 3] = Wb)
      }
    }

    function ea(bb, cb) {
      const sb = dk,
        kb = ma.j,
        Wb = bb.lights,
        ab = Math.min(bb.lightCount, 8);
      for (let Tb = 0; Tb < ab; Tb++) {
        const bb = sb.lights + Tb * sb.lightStride,
          ab = Tb * ma.b;
        cb[bb] = Wb[ab + kb.vector], cb[bb + 1] = Wb[ab + kb.vector + 1], cb[bb + 2] = Wb[ab + kb.vector + 2], cb[bb + 3] = Wb[ab + kb.kind] === ma.f.directional ? 1 : 0, cb[bb + 4] = Wb[ab + kb.diffuse], cb[bb + 5] = Wb[ab + kb.diffuse + 1], cb[bb + 6] = Wb[ab + kb.diffuse + 2], cb[bb + 7] = Wb[ab + kb.range], cb[bb + 8] = Wb[ab + kb.specular], cb[bb + 9] = Wb[ab + kb.specular + 1], cb[bb + 10] = Wb[ab + kb.specular + 2], cb[bb + 11] = Wb[ab + kb.range]
      }
      cb[sb.fogInfos] = bb.fogMode, cb[sb.fogInfos + 1] = bb.fogStart, cb[sb.fogInfos + 2] = bb.fogEnd, cb[sb.fogInfos + 3] = bb.fogDensity, cb[sb.fogColour] = bb.fogColour[0], cb[sb.fogColour + 1] = bb.fogColour[1], cb[sb.fogColour + 2] = bb.fogColour[2], cb[sb.outputHeight] = bb.renderHeight, cb[sb.animTick] = bb.animTick, cb[sb.timeMs] = bb.timeMs
    }
    class Ca {
      constructor(bb) {
        this.instancesOf = bb
      }
      refreshModelUniforms(bb, cb, sb, kb) {
        const Wb = la(sb);
        if (Wb >= 0 && Wb === cb.heldVersion && cb.textures.get("diffuseSampler") === sb.diffuseTexture && cb.textures.get("reflectionCubeSampler") === sb.reflectionTexture && cb.textures.get("opacitySampler") === sb.opacityTexture && cb.textures.get("emissiveSampler") === sb.emissiveTexture) return !0;
        if (Wb < 0)
          for (const ab of this.instancesOf(sb)) ab.heldVersion = -1;
        return this.writeModelUniforms(bb, cb, sb, kb), cb.heldVersion = Wb, !1
      }
      writeModelUniforms(bb, cb, sb, kb) {
        const {
          ubo: Wb
        } = cb, ab = sb.diffuseTexture, Tb = sb.diffuseColor;
        Wb.updateFloat4("vDiffuseColor", Tb[0], Tb[1], Tb[2], sb.alpha), ab && (Wb.updateFloat2("vDiffuseInfos", ab.uvSet, ab.level), Wb.updateMatrixFloats("diffuseMatrix", ab.matrix)), Wb.updateFloat("alphaCutOff", sb.alphaCutOff), Wb.updateFloatsFrom("vEmissiveColor", sb.emissiveColor, 0, 3), Wb.updateFloat3TimesFloats("vAmbientColor", kb.ambientColour, 0, sb.ambientColor);
        const Ub = sb.specularColor;
        Wb.updateFloat4("vSpecularColor", Ub[0], Ub[1], Ub[2], sb.specularPower), Wb.setTexture("diffuseSampler", ab);
        const Ib = sb.opacityTexture;
        Ib && (Wb.updateFloat2("vOpacityInfos", Ib.uvSet, Ib.level), Wb.updateMatrixFloats("opacityMatrix", Ib.matrix)), Wb.setTexture("opacitySampler", Ib);
        const Hb = sb.emissiveTexture;
        Hb && (Wb.updateFloat2("vEmissiveInfos", Hb.uvSet, Hb.level), Wb.updateMatrixFloats("emissiveMatrix", Hb.matrix)), Wb.setTexture("emissiveSampler", Hb);
        const fb = sb.reflectionTexture;
        fb && Wb.updateMatrixFloats("reflectionMatrix", fb.matrix), Wb.updateFloat2("vReflectionInfos", fb ? fb.level * bb.iblIntensity : 0, sb.roughness), Wb.setTexture("reflectionCubeSampler", fb);
        const Mb = bb.Sm();
        for (const {
            feature: mb,
            state: lb,
            active: Qb
          }
          of sb.features) {
          var Xb, nb;
          if (Qb) null === (Xb = (nb = (0, fc.g)(mb)).bind) || void 0 === Xb || Xb.call(nb, lb, Wb, bb, Mb)
        }
      }
    }

    function Na(bb) {
      const cb = bb.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(cb) ? "u32" : /i32|^vec\di$/.test(cb) ? "i32" : "f32"
    }

    function Va(bb, cb) {
      const sb = bb.getSize(),
        kb = Na(cb),
        Wb = bb => 4 === sb ? `${bb}x4` : 2 === sb ? `${bb}x2` : null;
      if ("f32" === kb) {
        if (5126 === bb.type) return 1 === sb ? "float32" : sb >= 2 && sb <= 4 ? `float32x${sb}` : null;
        if (!bb.normalized) return null;
        switch (bb.type) {
          case 5121:
            return Wb("unorm8");
          case 5120:
            return Wb("snorm8");
          case 5123:
            return Wb("unorm16");
          case 5122:
            return Wb("snorm16")
        }
        return null
      }
      const ab = "u32" === kb ? "uint" : "sint";
      switch (bb.type) {
        case 5125:
        case 5124:
          return 1 === sb ? `${ab}32` : sb <= 4 ? `${ab}32x${sb}` : null;
        case 5121:
        case 5120:
          return Wb(`${ab}8`);
        case 5123:
        case 5122:
          return Wb(`${ab}16`)
      }
      return null
    }

    function La(bb) {
      var cb;
      const sb = /(8|16|32)(?:x(\d))?$/.exec(bb);
      return sb ? Number(sb[1]) / 8 * Number(null !== (cb = sb[2]) && void 0 !== cb ? cb : 1) : 4
    }
    class ua {
      constructor(bb, cb, sb) {
        this.resources = bb, this.limits = cb, this.warnOnce = sb, this.layouts = new Map
      }
      resolveInputs(bb, cb, sb, kb) {
        const Wb = [],
          ab = sb.program.attributes,
          Tb = [];
        for (let fb = 0; fb < ab.length; fb++) {
          const sb = ab[fb],
            Ub = sb.optional ? null : this.resources.vertexInput(bb, sb.name, kb);
          if (!Ub) {
            const bb = Na(sb.type),
              cb = "u32" === bb ? "uint32x4" : "i32" === bb ? "sint32x4" : "float32x4";
            Tb.push(null);
            const kb = Wb.find((bb => null === bb.data));
            kb ? kb.attributes.push({
              shaderLocation: fb,
              offset: 0,
              format: cb
            }) : Wb.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: fb,
                offset: 0,
                format: cb
              }]
            });
            continue
          }
          const Ib = Ub.getBuffer();
          Tb.push(Ub);
          const Hb = Va(Ub, sb.type);
          if (!Hb) return this.warnOnce(`format:${cb}:${sb.name}`, `${cb}'s ${sb.name} (type ${Ub.type}, size ${Ub.getSize()}) has no WebGPU vertex format`), null;
          const Mb = Ub.getIsInstanced() ? "instance" : "vertex",
            Xb = Ub.byteStride,
            nb = La(Hb),
            mb = Wb.find((bb => bb.data === Ib && bb.stride === Xb && bb.step === Mb && Ub.byteOffset >= bb.base && Ub.byteOffset - bb.base + nb <= Xb));
          mb ? mb.attributes.push({
            shaderLocation: fb,
            offset: Ub.byteOffset - mb.base,
            format: Hb
          }) : Wb.push({
            data: Ib,
            base: Ub.byteOffset,
            stride: Xb,
            step: Mb,
            attributes: [{
              shaderLocation: fb,
              offset: 0,
              format: Hb
            }]
          })
        }
        if (Wb.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${cb}`, `${cb} needs ${Wb.length} vertex buffers`), null;
        let Ub = "";
        for (const fb of Wb) {
          Ub += `${fb.stride}${"instance"===fb.step?"i":"v"}`;
          for (const bb of fb.attributes) Ub += `,${bb.shaderLocation}:${bb.offset}:${bb.format}`;
          Ub += ";"
        }
        let Ib = this.layouts.get(Ub);
        Ib || (Ib = {
          key: Ub,
          buffers: Wb.map((bb => ({
            arrayStride: bb.stride,
            stepMode: bb.step,
            attributes: bb.attributes
          }))),
          instanceEnds: Wb.map((bb => {
            let cb = -1;
            if ("instance" === bb.step)
              for (const sb of bb.attributes) cb = Math.max(cb, sb.offset + La(sb.format));
            return cb
          }))
        }, this.layouts.set(Ub, Ib));
        const Hb = Wb.map((bb => bb.base));
        return {
          program: sb,
          sources: Tb,
          layout: Ib,
          slotData: Wb.map((bb => bb.data)),
          Z6: Hb,
          buffers: [],
          offsets: Hb,
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

    function Ya(bb, cb, sb, kb) {
      const Wb = cb.program.program.attributes;
      for (let ab = 0; ab < Wb.length; ab++) {
        if ((Wb[ab].optional ? null : sb.vertexInput(bb, Wb[ab].name, kb)) !== cb.sources[ab]) return !1
      }
      return !0
    }
    const ha = 64;
    class Ja {
      constructor(bb, cb, sb, kb) {
        this.device = bb, this.layout = cb, this.frameBuffer = sb, this.label = kb, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(bb) {
        if (bb * ha <= this.data.length) return !1;
        let cb = 2 * this.data.length;
        for (; bb * ha > cb;) cb *= 2;
        const sb = new Float32Array(cb);
        return sb.set(this.data), this.data = sb, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wb = this.data,
          ab = bb * ha;
        let Tb = Wb[ab + 16] !== sb;
        for (let Ub = 0; Ub < 16 && !Tb; Ub++) Tb = Wb[ab + Ub] !== cb[kb + Ub];
        if (Tb) {
          for (let bb = 0; bb < 16; bb++) Wb[ab + bb] = cb[kb + bb];
          Wb[ab + 16] = sb
        }
        return Tb
      }
      upload(bb, cb) {
        this.device.queue.writeBuffer(this.buffer, bb * Ak, this.data, bb * ha, (cb - bb) * ha)
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

    function ga(bb) {
      return bb.gpu[Bb.g.lite] ??= bb.materials.map(((cb, sb) => ({
        parts: bb,
        range: sb,
        owner: bb.owner
      })))
    }

    function Ba(bb) {
      var cb, sb, kb;
      return null !== (cb = null !== (sb = null === (kb = bb.parts.materials[bb.range]) || void 0 === kb ? void 0 : kb.mirror) && void 0 !== sb ? sb : bb.owner.material) && void 0 !== cb ? cb : null
    }
    const ta = ["opaque", "alphaTest", "transparent", "text"];
    class ya {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Hc.c)("Lite: ")
      }
      attach(bb, cb) {
        this.model = bb, this.mirror = cb
      }
      get worlds() {
        return this.model.nodes.fX
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(bb) {
        return this.groups.get(bb)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(bb) {
        for (const [cb, sb] of this.groups)
          for (const kb of ta)
            for (const Wb of sb[kb].units) bb(Wb.owner, "text" === kb ? "transparent" : kb, cb)
      }
      select(bb, cb) {
        this.frame++, this.selectedCount = 0;
        for (const Ub of this.groups.values())
          for (const bb of ta) Ub[bb].units.length = 0, Ub[bb].rows.length = 0;
        const {
          model: sb,
          mirror: kb
        } = this;
        if (!sb || !kb || !bb) return;
        this.rows.length < sb.nodes.GM && (this.rows = new Int32Array(sb.nodes.GM));
        const Wb = this.rows,
          ab = sb.meshes;
        for (let Ub = 0; Ub < ab.looseCount; Ub++) {
          const bb = ab.loose[Ub],
            sb = kb.nodes[bb];
          sb && !sb.isBlocked && sb.isEnabled() && !sb.bl.hasAZeroComponent && ab.selects(bb, cb.frustum) && (this.activate(sb, bb), this.selectedCount++)
        }
        const Tb = ab.selectTextPlanes(cb.frustum, Wb);
        for (let Ub = 0; Ub < Tb; Ub++) {
          const cb = Wb[Ub],
            ab = kb.nodes[cb],
            Tb = sb.meshes.parts[cb];
          if (!ab.isVisible || !(ab.visibility > 0) || 0 === (ab.layerMask & bb.layerMask) || !Tb) continue;
          const Ib = this.groupOf(sb.meshes.layer[cb]).text;
          for (const bb of ga(Tb)) Ib.units.push(bb), Ib.rows.push(cb);
          this.selectedCount++
        }
      }
      instanceBatch(bb) {
        const cb = this.batchOf(bb);
        return cb.dispatched || (cb.dispatched = cb.renderSelf = !0, cb.row = this.rowOf(bb)), cb
      }
      rowOf(bb) {
        return bb.row
      }
      activate(bb, cb) {
        if (!bb.qY) {
          const sb = bb;
          if (sb.ykb) {
            const bb = this.batchOf(sb);
            bb.dispatched = !0, bb.renderSelf = !0, bb.row = cb
          }
          return void this.dispatch(sb, cb, cb)
        }
        const sb = bb,
          kb = sb.Pkb;
        if (kb._getWorldMatrixDeterminant() >= 0 !== sb._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${kb.name}`, `A mirrored InstancedMesh of ${kb.name} is not drawn yet`);
        const Wb = this.batchOf(kb);
        Wb.instances.push(sb), Wb.rows.push(cb), Wb.dispatched || (Wb.dispatched = !0, this.dispatch(kb, cb, this.rowOf(kb)))
      }
      batchOf(bb) {
        let cb = this.batches.get(bb);
        return cb || (cb = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(bb, cb)), cb.frame !== this.frame && (cb.frame = this.frame, cb.dispatched = !1, cb.renderSelf = !1, cb.instances.length = 0, cb.rows.length = 0), cb
      }
      dispatch(bb, cb, sb) {
        const {
          layer: kb,
          parts: Wb
        } = this.model.meshes;
        if (!Wb[cb]) return;
        const ab = this.groupOf(kb[cb]),
          Tb = bb;
        for (const Ub of ga(Wb[cb])) {
          const bb = Ba(Ub);
          if (!bb) continue;
          const cb = bb.needAlphaBlendingForMesh(Tb) ? ab.transparent : bb.needAlphaTestingForMesh(Tb) ? ab.alphaTest : ab.opaque;
          cb.units.push(Ub), cb.rows.push(sb)
        }
      }
      groupOf(bb) {
        let cb = this.groups.get(bb);
        return cb || (cb = {
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
        }, this.groups.set(bb, cb)), cb
      }
    }
    class Pa {
      constructor() {
        this.qU = new Map, this.enabled = [], this.groups = new Map, this.vn = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(bb) {
        if (this.qU.has(bb)) return;
        const cb = {
          mesh: bb,
          observer: bb.onEffectiveEnabledStateChangedObservable.add((bb => {
            this.GV(cb, bb)
          })),
          index: -1,
          steady: null
        };
        this.qU.set(bb, cb), this.GV(cb, bb.isEnabled())
      }
      remove(bb) {
        const cb = this.qU.get(bb);
        cb && (cb.observer.remove(!0), this.GV(cb, !1), this.qU.delete(bb))
      }
      base(bb) {
        return this.qU.get(bb)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          qU: this.qU.size
        }
      }
      forEachSelected(bb) {
        for (const [cb, sb] of this.groups) {
          for (const kb of sb.opaque) bb(kb.owner, "opaque", cb);
          for (const kb of sb.transparent) bb(kb.owner, "transparent", cb)
        }
        for (const cb of this.vn) bb(cb.mesh, "opaque", 0)
      }
      group(bb) {
        return this.groups.get(bb)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(bb, cb) {
        this.drawn = 0, this.selected = 0, this.vn.length = 0;
        for (const kb of this.groups.values()) kb.opaque.length = 0, kb.transparent.length = 0;
        if (!bb) return;
        const sb = this.enabled;
        for (let kb = 0; kb < sb.length; kb++) {
          const Wb = sb[kb];
          if (Wb.steady && cb(Wb, bb)) {
            this.selected++, this.vn.push(Wb);
            continue
          }
          const ab = Wb.mesh;
          if (ab.isBlocked || ab.bl.hasAZeroComponent) continue;
          if (!ab.isVisible || ab.visibility <= 0 || 0 === (ab.layerMask & bb.layerMask)) continue;
          if (ab.ykb) {
            this.warned.has(ab.name) || (this.warned.add(ab.name), console.warn(`Lite: thin instance base ${ab.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Tb
          } = ab;
          if (!Tb) continue;
          ab.computeWorldMatrix(), this.selected++;
          const Ub = this.listsFor(ab.renderingGroupId);
          for (const bb of ga(Tb)) {
            const cb = Ba(bb);
            cb && (cb.needAlphaBlendingForMesh(ab) ? Ub.transparent.push(bb) : Ub.opaque.push(bb))
          }
        }
      }
      GV(bb, cb) {
        if (cb === bb.index >= 0) return;
        bb.steady = null;
        const sb = this.enabled;
        if (cb) bb.index = sb.length, sb.push(bb);
        else {
          const cb = sb.pop();
          cb !== bb && (sb[bb.index] = cb, cb.index = bb.index), bb.index = -1
        }
      }
      listsFor(bb) {
        let cb = this.groups.get(bb);
        return cb || (cb = {
          opaque: [],
          transparent: []
        }, this.groups.set(bb, cb)), cb
      }
    }
    var Da = sb(39159);
    class Ea {
      constructor() {
        this.bundle = null, this.stale = !0, this.qU = new Set
      }
    }
    class ia {
      constructor(bb, cb, sb) {
        this.device = bb, this.slots = cb, this.host = sb, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Ea, this.RL = new Ea, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new xW, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(bb) {
          var cb, sb;
          let kb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (cb = null === (sb = globalThis.navigator) || void 0 === sb ? void 0 : sb.userAgent) && void 0 !== cb ? cb : "";
          const Wb = bb.adapterInfo;
          return "intel" === (null === Wb || void 0 === Wb ? void 0 : Wb.vendor) && "gen-12lp" === Wb.architecture && kb.includes("Windows")
        }(bb), (0, Da.G)(this.direct)
      }
      vN() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Da.G)(this.directThisFrame)
      }
      add(bb, cb, sb, kb) {
        let Wb = this.records.get(bb);
        return Wb || (Wb = this.createRecord(bb), this.records.set(bb, Wb)), Wb.recorded && Ga(Wb, cb) || (this.bundleOf(Wb).stale = !0), this.place(Wb, cb, sb, kb), Wb
      }
      bundleOf(bb) {
        return bb.RL ? this.RL : this.main
      }
      addAgain(bb, cb, sb, kb) {
        bb.recorded || (this.bundleOf(bb).stale = !0), this.place(bb, cb, sb, kb)
      }
      place(bb, cb, sb, kb) {
        bb.seen = this.frame, bb.RL && null === bb.draw && (this.RL.stale = !0), bb.draw = cb, this.drawn++, sb && this.slots.write(bb.slot, sb, kb) && (this.slotsFrom = Math.min(this.slotsFrom, bb.slot), this.slotsTo = Math.max(this.slotsTo, bb.slot));
        const Wb = this.args,
          ab = 5 * bb.slot;
        Wb[ab] === cb.count && Wb[ab + 1] === cb.instances && Wb[ab + 2] === cb.first || (Wb[ab] = cb.count, Wb[ab + 1] = cb.instances, Wb[ab + 2] = cb.first, this.argsDirty = !0, this.RL.stale ||= bb.RL)
      }
      pN() {
        for (const bb of this.records.values()) bb.seen !== this.frame && (bb.draw && (bb.draw = null, this.args[5 * bb.slot + 1] = 0, this.argsDirty = !0, this.RL.stale ||= bb.RL), this.frame - bb.seen > 120 && (this.records.delete(bb.unit), this.freeSlots.push(bb.slot), bb.recorded && (this.bundleOf(bb).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(bb) {
        for (const cb of this.records.values()) cb.draw && cb.seen === this.frame && !cb.RL && bb(cb.draw, this.slots.data, cb.slot * Ak / 4)
      }
      resourceDestroyed(bb) {
        this.main.stale ||= this.main.qU.has(bb), this.RL.stale ||= this.RL.qU.has(bb)
      }
      execute(bb, cb, sb) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(bb, cb, sb, "direct"), this.drawn;
        const kb = this.host.sceneGroup(cb);
        if (!kb) return this.main.bundle = null, this.RL.bundle = null, this.recordedSceneGroup = null, this.encode(bb, cb, sb, "direct"), this.drawn;
        this.recordedTarget === sb && this.recordedSceneGroup === kb || (this.recordedTarget = sb, this.recordedSceneGroup = kb, this.main.stale = !0, this.RL.stale = !0);
        const Wb = this.main,
          ab = this.RL;
        let Tb = !1;
        !Wb.stale && Wb.bundle || (Wb.bundle = this.record(cb, sb, kb, "indirect"), Tb = !0);
        const Ub = (0, Da.m)();
        return (ab.stale || this.rangedEpoch !== Ub) && (this.rangedEpoch = Ub, ab.bundle = this.drawsRanged() ? this.record(cb, sb, kb, "RL") : this.noRangedBundle(), Tb = !0), Tb && (this.bundles = ab.bundle ? [Wb.bundle, ab.bundle] : [Wb.bundle]), bb.executeBundles(this.bundles), bb.setBindGroup(0, kb), this.drawn
      }
      record(bb, cb, sb, kb) {
        const Wb = this.device.createRenderBundleEncoder({
          label: "RL" === kb ? "thin-bases-ranged" : "thin-bases",
          colorFormats: bb._colorFormat ? [bb._colorFormat] : [],
          depthStencilFormat: bb._depthStencilFormat,
          sampleCount: bb._sampleCount
        });
        return Wb.setBindGroup(0, sb), this.encode(Wb, bb, cb, kb), Wb.finish()
      }
      noRangedBundle() {
        for (const bb of this.records.values()) bb.RL && (bb.recorded = !1);
        return this.RL.qU.clear(), this.RL.stale = !1, null
      }
      drawsRanged() {
        for (const bb of this.records.values())
          if (bb.RL && bb.draw) return !0;
        return !1
      }
      encode(bb, cb, sb, kb) {
        const Wb = [];
        for (const Ib of this.records.values()) "direct" !== kb && Ib.RL !== ("RL" === kb) || (Ib.recorded = !1, Ib.draw && Wb.push(Ib));
        Wb.sort(Ka);
        const ab = "direct" === kb ? null : "RL" === kb ? this.RL : this.main;
        null === ab || void 0 === ab || ab.qU.clear(), this.binder.reset();
        let Tb = !1;
        for (const Ib of Wb) {
          var Ub;
          const Wb = Ib.draw,
            Hb = this.host.pipelineFor(Wb, cb, sb);
          if (!Hb) {
            this.host.pipelineCompiling(Wb, sb) ? Tb = !0 : ab && this.keep(Ib, Wb, ab.qU);
            continue
          }
          let fb;
          if (Ib.RL && "indirect" !== kb) {
            const bb = Ib.unit.owner;
            fb = "direct" === kb && (0, Da.w)(bb) || (0, Da.o)(bb) || void 0
          }
          if (ab && this.keep(Ib, Wb, ab.qU), 0 === (null === (Ub = fb) || void 0 === Ub ? void 0 : Ub.count)) continue;
          this.binder.bind(bb, Wb, Hb, this.slots.bindGroup, Ib.slot * Ak);
          const Mb = 5 * Ib.slot;
          if ("indirect" === kb) {
            Wb.indexBuffer ? bb.drawIndexedIndirect(this.argsBuffer, 4 * Mb) : bb.drawIndirect(this.argsBuffer, 4 * Mb);
            continue
          }
          const Xb = this.args;
          fb ? Oa(bb, null !== Wb.indexBuffer, Xb, Mb, fb) : Wb.indexBuffer ? bb.drawIndexed(Xb[Mb], Xb[Mb + 1], Xb[Mb + 2], 0, 0) : bb.draw(Xb[Mb], Xb[Mb + 1], Xb[Mb + 2], 0)
        }
        ab && (ab.stale = Tb)
      }
      keep(bb, cb, sb) {
        bb.recorded = !0, bb.pipelineKey = cb.pipelineKey, bb.materialGroup = cb.material.bindGroup, bb.vertexBuffers.length = 0, bb.vertexBuffers.push(...cb.vertexBuffers), bb.vertexOffsets = cb.vertexOffsets, bb.indexBuffer = cb.indexBuffer, bb.indexFormat = cb.indexFormat;
        for (const kb of cb.vertexBuffers) sb.add(kb);
        cb.indexBuffer && sb.add(cb.indexBuffer), sb.add(cb.material.buffer);
        for (const kb of cb.material.bound) kb && sb.add(kb)
      }
      createRecord(bb) {
        let cb = this.freeSlots.pop();
        return void 0 === cb && (cb = this.slotCount++, this.grow()), {
          unit: bb,
          slot: cb,
          RL: void 0 !== (0, Da.o)(bb.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.RL.stale = !0), 5 * this.slotCount > this.args.length) {
          const bb = new Uint32Array(2 * this.args.length);
          bb.set(this.args), this.args = bb, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function Oa(bb, cb, sb, kb, Wb) {
      const ab = sb[kb + 1],
        Tb = Wb.data;
      for (let Ub = 0; Ub < Wb.count; Ub++) {
        const Wb = Math.min(Tb[2 * Ub], ab),
          Ib = Math.min(Tb[2 * Ub + 1], ab - Wb);
        0 !== Ib && (cb ? bb.drawIndexed(sb[kb], Ib, sb[kb + 2], 0, Wb) : bb.draw(sb[kb], Ib, sb[kb + 2], Wb))
      }
    }

    function Ga(bb, cb) {
      if (bb.pipelineKey !== cb.pipelineKey || bb.materialGroup !== cb.material.bindGroup || bb.indexBuffer !== cb.indexBuffer || bb.indexFormat !== cb.indexFormat || bb.vertexOffsets !== cb.vertexOffsets || bb.vertexBuffers.length !== cb.vertexBuffers.length) return !1;
      for (let sb = 0; sb < bb.vertexBuffers.length; sb++)
        if (bb.vertexBuffers[sb] !== cb.vertexBuffers[sb]) return !1;
      return !0
    }

    function Ka(bb, cb) {
      return pW(bb.draw, cb.draw)
    }
    const Za = new WeakMap,
      za = {
        depth: !1,
        sunShadow: !1
      };

    function qa(bb, cb) {
      let sb = Za.get(bb);
      sb || (sb = new Map, Za.set(bb, sb));
      const kb = `${cb.depth?"-depth":""}${cb.sunShadow?"-shadow":""}${cb.shadowMask?"-mask":""}`;
      let Wb = sb.get(kb);
      if (!Wb) {
        const ab = [{
          binding: gc.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: gc.h
          }
        }, {
          binding: gc.A,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        cb.depth && ab.push({
          binding: gc.p,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), cb.sunShadow && ab.push(... function() {
          const bb = GPUShaderStage.FRAGMENT,
            cb = gc.s;
          return [{
            binding: cb.uniform,
            visibility: bb,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: cb.zX,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: cb.special,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: cb.volume,
            visibility: bb,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: cb.sampler,
            visibility: bb,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: cb.entities,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: cb.entityGrids,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), cb.shadowMask && ab.push({
          binding: gc.w,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Wb = bb.createBindGroupLayout({
          label: `${cb.depth?"terrain-":""}shader-pack-inputs${kb}`,
          entries: ab
        }), sb.set(kb, Wb)
      }
      return Wb
    }

    function da(bb) {
      return qa(bb, za)
    }

    function Aa(bb, cb) {
      if (!cb) return !1;
      const sb = (0, Bc.e)(bb);
      return !!sb && Ks(sb, cb)
    }

    function wa(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!Mk(cb)) return [];
      return [qa(bb, {
        depth: Tk(cb.packVariant),
        sunShadow: Aa(cb.packVariant, sb),
        shadowMask: kb
      })]
    }
    class ra {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = bb, this.sunShadow = sb, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(gc.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = bb.createBuffer({
          label: "shader-pack-inputs",
          size: gc.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const kb = (0, gc.C)(cb);
        this.textures = bb.createBuffer({
          label: "shader-pack-textures",
          size: kb.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), bb.queue.writeBuffer(this.textures, 0, kb), this.bindGroup = bb.createBindGroup({
          label: "shader-pack-inputs",
          layout: da(bb),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: gc.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: gc.A,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(bb, cb, sb) {
        (0, gc.H)(this.data, {
          seconds: bb.seconds(),
          lit: sb,
          renderOffset: bb.renderOffset(),
          J9: bb.J9(),
          eyePosition: cb,
          shadowDirection: bb.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const kb = cb ? this.sunShadow : null;
        if ((cb || sb) && !kb) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!bb && !kb) return this.bindGroup;
        (bb && bb !== this.depthView || sb && sb !== this.maskView) && (this.depthView = null !== bb && void 0 !== bb ? bb : this.depthView, this.maskView = null !== sb && void 0 !== sb ? sb : this.maskView, this.groups.clear());
        const Wb = (bb ? 1 : 0) | (kb ? 2 : 0) | (sb ? 4 : 0);
        let ab = this.groups.get(Wb);
        if (!ab) {
          const cb = this.entries();
          bb && cb.push({
            binding: gc.p,
            resource: bb
          }), kb && cb.push(...kb.entries()), sb && cb.push({
            binding: gc.w,
            resource: sb
          }), ab = this.device.createBindGroup({
            label: `${bb||sb?"terrain-":""}shader-pack-inputs${bb?"-depth":""}${kb?"-shadow":""}${sb?"-mask":""}`,
            layout: qa(this.device, {
              depth: !!bb,
              sunShadow: !!kb,
              shadowMask: !!sb
            }),
            entries: cb
          }), this.groups.set(Wb, ab)
        }
        return ab
      }
      bind(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        bb.setBindGroup(gc.d, this.bindGroupFor(cb, sb, kb))
      }
    }

    function oa(bb, cb, sb) {
      if (bb.gpuVersion === cb.gpuBuffersVersion) return !0;
      let kb;
      do {
        if (kb = cb.gpuBuffersVersion, !Sa(bb, cb, sb)) return !1
      } while (cb.gpuBuffersVersion !== kb);
      return bb.gpuVersion = kb, bb.fitInstances = 0, !0
    }

    function Sa(bb, cb, sb) {
      let kb = null;
      for (let ab = 0; ab < bb.slotData.length; ab++) {
        var Wb;
        const Tb = bb.slotData[ab],
          Ub = Tb ? cb.gpuBuffer(Tb) : sb;
        if (!Ub) return !1;
        Tb && bb.layout.instanceEnds[ab] < 0 && cb.cover(Tb, Number.POSITIVE_INFINITY), bb.buffers[ab] = Ub;
        const Ib = bb.Z6[ab] + (Tb ? cb.gpuOffset(Tb) : 0);
        Ib !== (null !== (Wb = kb) && void 0 !== Wb ? Wb : bb.offsets)[ab] && (kb ??= bb.offsets.slice(), kb[ab] = Ib), bb.ends[ab] = Tb ? cb.gpuEnd(Tb) : Ub.size
      }
      return kb && (bb.offsets = kb), !0
    }

    function Ra(bb, cb, sb, kb) {
      if (cb <= bb.fitInstances) return null;
      const {
        layout: Wb,
        ends: ab,
        offsets: Tb,
        slotData: Ub,
        Z6: Ib
      } = bb;
      let Hb = !1;
      for (let fb = 0; fb < Wb.buffers.length; fb++) {
        const bb = Wb.instanceEnds[fb];
        if (bb < 0) continue;
        const kb = (cb - 1) * Wb.buffers[fb].arrayStride + bb;
        if (ab[fb] - Tb[fb] < kb) return {
          index: fb,
          needed: kb
        };
        const Mb = Ub[fb];
        Mb && sb.cover(Mb, Ib[fb] + kb) && (Hb = !0)
      }
      return Hb && oa(bb, sb, kb), bb.fitInstances = cb, null
    }
    var va = sb(37415),
      Fa = sb(37441);
    const xa = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      ja = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      pa = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      bT = `((vertexInputs.aPackedLightLevels >> 16u) | ${Ic.b.placed}u)`,
      cT = "u32(vertexInputs.aShaderPackItem.x)",
      sT = `${Ic.b.lifeform}u`;

    function kT(bb) {
      return "item" === bb.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const WT = "bloxdSpEnchant",
      aT = "floor(finalWorld[3].xyz)";

    function TT(bb, cb, sb) {
      return "placed" === cb.kind && bb.reads[sb].includes("bloxdFragmentBlockPosition")
    }

    function UT(bb, cb) {
      let [sb, kb] = bb;
      return sb === cb.point && kb === cb.code
    }

    function IT(bb, cb) {
      var sb, kb, Wb;
      const ab = null === (sb = bb.find((bb => bb.texture))) || void 0 === sb ? void 0 : sb.texture,
        Tb = null === (kb = bb.find((bb => bb.enchantTier))) || void 0 === kb ? void 0 : kb.enchantTier,
        Ub = null === (Wb = bb.find((bb => bb.overlay))) || void 0 === Wb ? void 0 : Wb.overlay,
        Ib = Ub ? cb.filter((bb => UT(bb, Ub))).length : 0;
      return Ub && 1 === Ib ? {
        texture: ab,
        overlay: Ub,
        enchantTier: Tb
      } : {
        texture: ab,
        enchantTier: Tb
      }
    }

    function HT(bb) {
      if ("item" === bb.kind) {
        return {
          vertexFlags: `(${cT} & 0xffffu)`,
          varying: "vPackItem",
          value: cT,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return bb.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: bT,
        varying: "vPackFlags",
        value: bT,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function fT(bb) {
      return "lifeform" === bb.kind ? sT : "0u"
    }

    function MT(bb) {
      return !!bb.BLOXD_PLUGIN_ENCHANTMENT
    }

    function XT(bb, cb) {
      const {
        enchantTier: sb
      } = cb;
      return sb && MT(cb.defines) && "lifeform" === cb.kind && CT(bb, "enchantTier") ? sb : null
    }

    function nT(bb, cb) {
      return MT(cb.defines) && CT(bb, "enchantSpeed")
    }

    function mT(bb) {
      const {
        overlay: cb,
        defines: sb
      } = bb;
      if (!cb || !sb.DIFFUSE) return null;
      const kb = sb.VERTEXCOLOR || sb.INSTANCESCOLOR && sb.INSTANCES;
      return `vec4f(${cb.colour}.rgb * uniforms.vDiffuseInfos.y${kb?" * fragmentInputs.vColor.rgb":""}, ${cb.colour}.a)`
    }
    const lT = "fragmentInputs.vPackTexture";

    function QT(bb) {
      const {
        atlas: cb,
        defines: sb,
        texture: kb
      } = bb;
      if (cb || !sb.DIFFUSE) return null;
      if (kb) return {
        texture: "diffuseSampler",
        ...kb
      };
      const Wb = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===sb.DIFFUSEDIRECTUV?"vMainUV1":2===sb.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== bb.kind) return Wb;
      if (!sb.BLOXD_PLUGIN_ANIMATED) return {
        ...Wb,
        id: lT
      };
      const ab = ub.e.WGSL,
        Tb = (0, ub.sb)(ab, "uAnimStatesNum"),
        Ub = (0, ub.bb)(ab, (0, va.g)(ab), Tb),
        Ib = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Tb})`,
        layers: [Ub],
        uv: `vec2f(${Ib}.x, ${Ib}.y * ${Tb} - ${Ub})`,
        levelUv: Ib,
        id: lT
      }
    }

    function eT(bb, cb) {
      return "box" === cb.kind && !!bb.hooks.surface && null !== QT(cb)
    }

    function CT(bb, cb) {
      return bb.reads.fragment.includes(cb)
    }

    function NT(bb) {
      return !!bb.BLOXD_LIGHTING && !bb.BLOXD_UNLIT
    }

    function VT(bb, cb, sb, kb) {
      const Wb = bb.filter((bb => {
        let [sb, kb] = bb;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === sb && kb === cb
      }));
      if (1 !== Wb.length) throw new Error(`A model program for shader packs has ${0===Wb.length?"no":"more than one"} ${kb} code before fog (lite/modelShaderPack.ts)`);
      return bb.map((bb => bb === Wb[0] ? [bb[0], sb] : bb))
    }

    function LT(bb, cb, sb, kb) {
      const {
        hooks: Wb
      } = bb, {
        kind: ab,
        defines: Tb
      } = cb, Ub = [...sb];
      var Ib;
      cb.atlas && Wb.surface && Ub.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", rs("atlasIdxIn")]), "item" === ab && Ub.push(["CUSTOM_VERTEX_DEFINITIONS", (0, ub.f)(ub.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), eT(bb, cb) && Ub.push(["CUSTOM_VERTEX_DEFINITIONS", (0, ub.f)(ub.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Ib = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${As}[min(u32(${Ib}) - 1u, arrayLength(&${As}) - 1u)], ${Ib} > 0.5);\n`)]);
      const Hb = HT(cb);
      Hb && (Wb.surface || Wb.light) && Ub.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Hb.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Hb.varying} = ${Hb.value};`]);
      let fb = kb;
      if (TT(bb, cb, "fragment") && (Ub.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${aT});`]), fb = [...fb, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), CT(bb, "localPosition") && Ub.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${kT(cb)};`]), MT(Tb) && Wb.surface) {
        nT(bb, cb) && Ub.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const sb = XT(bb, cb);
        sb && Ub.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${sb});`]);
        const kb = (0, ub.kb)(ub.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        fb = [...VT(fb, (0, Fa.e)(ub.e.WGSL), kb, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Fa.b)(WT)]]
      }
      const {
        overlay: Mb
      } = cb;
      Mb && mT(cb) && Wb.surface && (fb = fb.filter((bb => !UT(bb, Mb))));
      const Xb = Wb.light ? function(bb) {
        return "placed" === bb.kind ? {
          name: "terrain",
          engine: (0, Yc.U)(ub.e.WGSL),
          pack: (0, Yc.db)(ub.e.WGSL)
        } : bb.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Yc.J)(ub.e.WGSL),
          pack: (0, Yc.bb)(ub.e.WGSL)
        } : null
      }(cb) : null;
      if (Xb && (fb = VT(fb, Xb.engine, Xb.pack, `${Xb.name} light`), "placed" !== ab && NT(Tb))) {
        const bb = Tb.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, ub.sb)(ub.e.WGSL, "uEntityLightLevels") : (0, ub.Bb)(ub.e.WGSL, "aLightLevels");
        Ub.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Yc.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Yc.cb)(ub.e.WGSL, bb)])
      }
      return {
        vertexCode: Ub,
        fragmentCode: fb
      }
    }

    function uT(bb, cb, sb, kb) {
      return Os(bb, cb, sb, kb, "model")
    }
    const YT = "\t@builtin(position) position: vec4f,\n";

    function hT(bb, cb) {
      const sb = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(bb)[0];
      return `${sb}${cb}${bb.slice(sb.length)}`
    }

    function JT(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Wb
      } = cb, ab = Ks(cb, kb), {
        kind: Tb,
        defines: Ub
      } = sb, Ib = function(bb, cb) {
        var sb, kb, Wb;
        const {
          defines: ab
        } = cb, Tb = HT(cb), Ub = !!ab.FOG, Ib = MT(ab), Hb = null !== (sb = null === Tb || void 0 === Tb ? void 0 : Tb.enchantTier) && void 0 !== sb ? sb : XT(bb, cb) ? "fragmentInputs.vPackEnchantTier" : "0u", fb = "lifeform" === cb.kind && !ab.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (kb = null === Tb || void 0 === Tb ? void 0 : Tb.vertexFlags) && void 0 !== kb ? kb : fT(cb),
          vertexLocalPosition: kT(cb),
          flags: null !== (Wb = null === Tb || void 0 === Tb ? void 0 : Tb.flags) && void 0 !== Wb ? Wb : fT(cb),
          normal: "normalW",
          alpha: fb ? "alpha * baseColor.a" : "alpha",
          alphaOut: fb ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: Ub ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: Ub ? "1.0 - fog" : "0.0",
          enchantTier: Hb,
          enchantColour: Ib ? `${WT}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: nT(bb, cb) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: CT(bb, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: mT(cb)
        }
      }(cb, sb), Hb = bb.textures.filter((bb => /^textureAtlas\d+$/.test(bb.name))).length, fb = sb.atlas && Hb > 0 ? {
        count: Hb,
        layers: sb.atlas.layers,
        width: sb.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: bb.material.slots.has("uAnimDataPerTex") ? (cb, sb) => tk(cb, sb, function(bb) {
          const cb = bb.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            aX: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: bb => `uniforms.uAnimDataPerTex[${bb}]${cb}`
          }
        }(bb)) : null
      } : null, Mb = "placed" === Tb ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Xb = null !== fb && void 0 !== fb ? fb : QT(sb), nb = function(bb, sb) {
        let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,gc.G)()}${zs(cb,sb)}${kb}${Ss(bb)}${Ds}${Mb}${cb.code}`
      };
      let {
        vertex: mb,
        fragment: lb
      } = bb;
      const Qb = vs(Wb, Ib);
      if (Qb) {
        const bb = TT(cb, sb, "vertex") ? `\tbloxdSpCell = ${aT};\n` : "";
        mb = uT(mb, xa, `${bb}${Qb.slice(1)}${xa}`, "vertex")
      }
      const eb = `${qs(cb,ab,function(bb,cb){return cb.TWOSIDEDLIGHTING?bb:`select(-(${bb}), ${bb}, fragmentInputs.frontFacing)`}(Ib.normal,Ub),Ib.flags)}${Fs(Wb,cb.strict,cb.program,Xb,Ib)}`;
      eb && (lb = uT(lb, ja, `${eb.slice(1)}${ja}`, "surface")), ab && cb.sunShadow && !Ub.TWOSIDEDLIGHTING && (lb = uT(lb, YT, `${YT}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Cb = bk(Wb);
      if (Cb) {
        const bb = ps(Wb, NT(Ub), !0, Ib);
        lb = uT(lb, pa, `${bb}${Cb.slice(1)}${pa}`, "light")
      }
      const Nb = eT(cb, sb) ? ws : "";
      return {
        ...bb,
        vertex: hT(mb, nb(fb, !1, Nb)),
        fragment: hT(lb, nb(Xb, ab))
      }
    }
    const gT = {
      name: "earthSky",
      uniqueId: -1
    };
    class BT {
      constructor(bb) {
        this.resources = bb, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const bb of this.instances.values()) bb.released = !0, this.resources.destroyBuffer(bb.buffer);
        this.instances.clear()
      }
    }

    function tT(bb) {
      return bb.failed && null !== bb.packGroup
    }
    class yT {
      constructor(bb, cb, sb) {
        this.device = bb, this.resources = cb, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.f6 = new Pa, this.modelMeshes = new ya, this.thinBundle = void 0, this.binder = new xW, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new Ca((bb => this.modelSlot(bb).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Hc.c)("Lite: "), this.renderStates = new na(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (bb, cb) => this.keepSteady(bb, cb), this.lists = new jW(this.modelMeshes, this.f6, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new Ha(cb, this.warnOnce, ((bb, cb, sb) => this.programWithModel(bb, cb, sb)), tT), this.vertexLayouts = new ua(cb, bb.limits, this.warnOnce), this.sceneLayout = cc(bb), this.frameLayout = bb.createBindGroupLayout({
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
        }), this.frameBuffer = bb.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Ja(bb, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = bb.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new ia(bb, new Ja(bb, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (bb, cb, sb) => this.pipelineFor(bb, cb, sb),
          pipelineCompiling: (bb, cb) => !bb.program.failed && !1 !== this.pipelines.get(`${bb.pipelineKey}|${cb}`),
          sceneGroup: bb => {
            const cb = sb(bb);
            return cb || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), cb
          }
        }), cb.onDestroy = bb => {
          this.thinBundle.resourceDestroyed(bb)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wb = {
          order: bb,
          isTransparent: cb,
          _direct: !cb,
          bind: (bb, cb) => this.createBinding(Wb, cb, sb, kb)
        };
        return Wb
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(bb, cb, sb) {
        var kb;
        let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = cb, this.drawDefines.view = cb, this.thinBundle.vN(), this.writeFrameUniforms();
        const ab = null !== (kb = null === Wb || void 0 === Wb ? void 0 : Wb.defineFor("model")) && void 0 !== kb ? kb : 0;
        this.drawDefines.modelPackVariant = ab, Wb && 0 !== ab && (this.packInputs ??= new ra(this.device, Wb.textureLayers(), this.sunShadow), this.packInputs.write(Wb, cb.eye, Wb.bQ())), this.lists.clear(), this.slotCount = 0;
        const Tb = bb.activeCamera;
        this.f6.select(Tb, this.keepSteadyBase), this.modelMeshes.select(Tb, cb), sb && this.pushEarthSky(sb), this.lists.collect(bb), this.thinBundle.pN(), this.uploadMeshSlots()
      }
      pushDraws(bb, cb, sb, kb, Wb, ab) {
        let Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Ub = ab.length;
        for (let Ib = 0; Ib < sb; Ib++) {
          const sb = cb[Ib];
          let Ub = this.retainedDraw(bb, sb, kb, Wb);
          if (void 0 === Ub && (Ub = this.drawFor(bb, sb, kb, Wb), this.retain(sb, Ub)), Ub) {
            const bb = sb.owner,
              cb = Tb ? Tb[Ib] : -1;
            Ub.slotOffset = cb < 0 ? this.writeMeshSlot(bb.getWorldMatrix().m, bb.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[cb], 16 * cb), ab.push(Ub)
          }
        }
        return ab.length - Ub
      }
      bundleDraws(bb, cb, sb) {
        let kb = 0;
        for (const Wb of cb) {
          let cb = this.retainedDraw(bb, Wb, sb, !1);
          const ab = void 0 !== cb;
          if (void 0 === cb && (cb = this.drawFor(bb, Wb, sb, !1), this.retain(Wb, cb)), cb) {
            const bb = Wb.owner,
              sb = this.thinBundle.add(Wb, cb, bb.getWorldMatrix().m, bb.visibility);
            ab && this.steadyFrom(Wb, cb, sb), kb++
          }
        }
        return kb
      }
      steadyFrom(bb, cb, sb) {
        const kb = bb.owner,
          Wb = this.f6.base(kb),
          ab = kb.material,
          {
            drawState: Tb,
            instance: Ub
          } = cb.inputs.retained;
        if (!Wb || !ab || 1 !== bb.parts.materials.length || Ba(bb) !== ab) return;
        const Ib = Wb.steady ??= {
          unit: bb,
          material: ab,
          visibility: 1,
          draw: cb,
          record: sb,
          drawState: Tb,
          instance: Ub,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Ib.unit = bb, Ib.material = ab, Ib.visibility = kb.visibility, Ib.draw = cb, Ib.record = sb, Ib.drawState = Tb, Ib.instance = Ub, Ib.bindGroup = Ub.bindGroup, Ib.gpuVersion = this.resources.gpuBuffersVersion, Ib.fitInstances = cb.inputs.fitInstances, Ib.worldFlag = kb.getWorldMatrix().updateFlag, Ib.handedFrame = this.frame
      }
      keepSteady(bb, cb) {
        const sb = bb.steady;
        if (sb.handedFrame !== this.frame - 1 || (this.frame + sb.phase) % 8 === 0) return !1;
        const kb = bb.mesh,
          {
            unit: Wb,
            draw: ab,
            instance: Tb,
            drawState: Ub
          } = sb,
          Ib = kb.forcedInstanceCount || kb.W8;
        if (!kb.isVisible || kb.ykb || kb.visibility !== sb.visibility || 0 === (kb.layerMask & cb.layerMask) || kb.material !== sb.material || 0 !== kb.renderingGroupId || kb.hasVertexAlpha || !this.drawDefines.definesHold(Ub, Wb, Ub.instancing) || sb.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(ab.inputs, Wb, Ub.instancing, ab.program) || ab.program.failed || Tb.released || Ib <= 0 || Ib > sb.fitInstances) return !1;
        if (Tb.frame !== this.frame && this.bindMaterial(Tb, this.modelUniforms.refreshModelUniforms(kb.EY(), Tb, Tb.model, this.view)), !Tb.bindable || Tb.bindGroup !== sb.bindGroup) return !1;
        const Hb = kb.computeWorldMatrix(),
          fb = Hb.updateFlag !== sb.worldFlag;
        return sb.worldFlag = Hb.updateFlag, ab.instances = Ib, this.thinBundle.addAgain(sb.record, ab, fb ? Hb.m : null, sb.visibility), sb.handedFrame = this.frame, this.f6.drawn++, !0
      }
      retainedDraw(bb, cb, sb, kb) {
        const Wb = this.inputs.get(cb),
          ab = null === Wb || void 0 === Wb ? void 0 : Wb.retained;
        if (!Wb || !ab) return;
        const {
          drawState: Tb,
          program: Ub,
          instance: Ib,
          instancing: Hb
        } = ab, fb = cb.owner;
        if (ka(fb) !== Hb) return;
        const Mb = this.instanceCount(fb, Hb);
        if (Mb <= 0) return null;
        if (Ib.released || Ub.failed || Tb.program !== Ub || !this.drawDefines.programCurrent(Tb, cb, Hb, sb) || !this.inputsStamped(Wb, cb, Hb, Ub) || fb.isUnIndexed !== ab.unIndexed || this.indexKey(cb) !== ab.indexData) return;
        if (ab.indexBuffer && ab.gpuVersion !== this.resources.gpuBuffersVersion) {
          const bb = this.resources.gpuBuffer(ab.indexData);
          if (!bb) return;
          ab.indexBuffer = bb, ab.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Xb = !1;
        if (Ib.frame !== this.frame && (Xb = this.modelUniforms.refreshModelUniforms(bb, Ib, Ib.model, this.view)), !this.bindMaterial(Ib, Xb) || !this.withGpuBuffers(Wb) || !this.instanceBuffersFit(fb.name, Wb, Mb)) return null;
        const nb = this.makeDraw(Ub, Wb, this.renderStates.renderState(Tb.model, fb, kb, Wb.state), Ib, Mb);
        return this.setRange(nb, cb, ab.indexBuffer, ab.indexData), nb
      }
      retain(bb, cb) {
        const sb = this.drawDefines.drawStates.get(bb);
        if (!cb || !sb || sb.program !== cb.program) {
          const cb = this.inputs.get(bb);
          return void(cb && (cb.retained = null))
        }
        const kb = bb.owner,
          Wb = sb.instancing,
          ab = this.indexKey(bb),
          Tb = cb.inputs.retained;
        Tb ? (Tb.drawState = sb, Tb.instancing = Wb, Tb.program = cb.program, Tb.instance = cb.material, Tb.indexData = ab, Tb.unIndexed = kb.isUnIndexed, Tb.indexBuffer = cb.indexBuffer, Tb.gpuVersion = this.resources.gpuBuffersVersion) : cb.inputs.retained = {
          drawState: sb,
          instancing: Wb,
          program: cb.program,
          instance: cb.material,
          indexData: ab,
          unIndexed: kb.isUnIndexed,
          indexBuffer: cb.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(bb, cb, sb, kb) {
        const Wb = cb.owner,
          ab = Ba(cb);
        if (!ab) return null;
        const Tb = ab.getClassName();
        let Ub = null;
        if (function(bb) {
            return "LinesMesh" === bb.getClassName()
          }(Wb)) {
          if (! function(bb) {
              return "ShaderMaterial" === bb.getClassName() && "color" === bb.shaderPath
            }(ab)) return this.warnOnce(`lines:${Tb}`, `A LinesMesh with a ${Tb} is not drawn yet (${ab.name})`), null;
          Ub = Wb
        } else if ("StandardMaterial" !== Tb && "LiteMaterial" !== Tb) return this.warnOnce(`class:${Tb}`, `${Tb} is not drawn yet (${ab.name})`), null;
        const Ib = ka(Wb),
          Hb = this.instanceCount(Wb, Ib);
        if (Hb <= 0) return null;
        const fb = Ub ? this.lineProgramFor(Wb, sb, Ib) : this.drawDefines.programFor(bb, cb, ab, sb, Ib);
        if (!fb || fb.failed) return null;
        const Mb = Ub ? null : this.drawDefines.drawStates.get(cb).model,
          Xb = Mb ? this.modelInstance(Mb, fb) : this.materialInstance(Wb, fb);
        let nb = !1;
        if (Xb.frame !== this.frame && (Ub ? Cb(Xb.ubo, Ub) : nb = this.modelUniforms.refreshModelUniforms(bb, Xb, Xb.model, this.view)), !this.bindMaterial(Xb, nb)) return null;
        const mb = this.meshInputs(cb, fb, Ib);
        if (!mb || !this.instanceBuffersFit(Wb.name, mb, Hb)) return null;
        const lb = this.indexKey(cb);
        let Qb = null;
        if (lb && !Wb.isUnIndexed && (Qb = this.resources.gpuBuffer(lb), !Qb)) return null;
        const eb = this.renderStates.renderState(null !== Mb && void 0 !== Mb ? Mb : ab, Wb, kb, mb.state, Ub ? "line-list" : "triangle-list"),
          Nb = this.makeDraw(fb, mb, eb, Xb, Hb);
        return this.setRange(Nb, cb, Qb, lb), Nb
      }
      indexKey(bb) {
        const cb = Ua(bb);
        return cb ? this.resources.modelIndex(cb) : null
      }
      setRange(bb, cb, sb, kb) {
        sb && (bb.indexBuffer = sb, bb.indexFormat = this.resources.indexFormat(kb));
        const Wb = 4 * cb.range + (sb ? 0 : 2);
        bb.unit = cb, bb.first = cb.parts.uQ[Wb], bb.count = cb.parts.uQ[Wb + 1]
      }
      makeDraw(bb, cb, sb, kb, Wb) {
        cb.state !== sb && (cb.state = sb, cb.pipelineKey = `${bb.id}|${cb.layout.key}|${sb.key}`, cb.pipeline = null);
        const ab = cb.draw ??= {
          program: bb,
          inputs: cb,
          pipelineKey: "",
          layout: cb.layout,
          state: sb,
          material: kb,
          slotOffset: 0,
          vertexBuffers: cb.buffers,
          vertexOffsets: cb.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Wb,
          unit: null
        };
        return ab.program = bb, ab.pipelineKey = cb.pipelineKey, ab.state = sb, ab.material = kb, ab.vertexOffsets = cb.offsets, ab.indexBuffer = null, ab.instances = Wb, ab
      }
      instanceCount(bb, cb) {
        switch (cb) {
          case "thin":
            return bb.forcedInstanceCount || bb.W8;
          case "instanced":
            return this.prepareInstances(bb);
          case "none":
            return 1
        }
      }
      prepareInstances(bb) {
        const cb = function(bb, cb) {
          const sb = cb._userInstancedBuffersStorage,
            kb = bb.batchUploads.get(cb);
          if (kb) {
            var Wb;
            if (kb.layout === (null !== (Wb = null === sb || void 0 === sb ? void 0 : sb.interleavedKinds) && void 0 !== Wb ? Wb : null)) return kb;
            kb.release()
          }
          return new ob(bb, cb, sb)
        }(this.resources, bb);
        return cb.frame !== this.frame && cb.pack(bb, this.modelMeshes.instanceBatch(bb), this.modelMeshes.worlds, this.frame), cb.count
      }
      programWithModel(bb, cb, sb) {
        const kb = this.modelSlot(bb),
          Wb = fa(kb, bb, sb),
          ab = this.drawDefines.modelPackKind(bb),
          Tb = ab ? function(bb, cb, sb, kb) {
            const Wb = (0, Jb.v)(bb, Yb.j.name),
              ab = [];
            for (const {
                feature: Ib,
                state: Hb,
                active: fb
              }
              of bb.features) {
              var Tb, Ub;
              const bb = fb ? null === (Tb = (Ub = (0, fc.g)(Ib)).Qm) || void 0 === Tb ? void 0 : Tb.call(Ub, Hb) : void 0;
              bb && ab.push(bb)
            }
            return {
              kind: cb,
              atlas: null !== Wb && void 0 !== Wb && Wb.active ? (0, Yb.e)(Wb.state) : null,
              defines: sb,
              ...IT(ab, kb)
            }
          }(bb, ab, cb, kb.fragmentCode) : null;
        if (Tb && function(bb) {
            const cb = bb.defines;
            return (null === bb.atlas || !!cb.DIFFUSE && 1 === cb.DIFFUSEDIRECTUV) && !!cb.NORMAL && !cb.REFLECTION && !cb.EMISSIVEASILLUMINATION && !cb.LINKEMISSIVEWITHDIFFUSE
          }(Tb)) {
          const sb = this.modelPackProgram(bb, cb, `${Wb}#${ab}#sp${this.drawDefines.modelPackVariant}`, kb, Tb);
          if (sb && !sb.failed) return sb
        }
        const Ub = this.programs.get(Wb);
        if (Ub || this.unbuildable.has(Wb)) return null !== Ub && void 0 !== Ub ? Ub : null;
        let Ib;
        try {
          Ib = fW({
            defines: aa(cb),
            vertexCode: kb.vertexCode,
            fragmentCode: kb.fragmentCode,
            pluginUniforms: kb.pluginUniforms
          })
        } catch (Hb) {
          return this.unbuildable.add(Wb), this.warnOnce(`build:${Wb}`, `could not build a program for ${bb.name}: ${String(Hb)}`), null
        }
        return this.createProgram(Wb, Ib, "standard")
      }
      modelPackProgram(bb, cb, sb, kb, Wb) {
        const ab = this.programs.get(sb);
        if (ab || this.unbuildable.has(sb)) return null !== ab && void 0 !== ab ? ab : null;
        const Tb = this.drawDefines.modelPackVariant;
        let Ub;
        try {
          const bb = function(bb) {
              return (0, Bc.d)(bb, "model")
            }(Tb),
            sb = LT(bb, Wb, kb.vertexCode, kb.fragmentCode);
          Ub = JT(fW({
            defines: aa(cb),
            ...sb,
            pluginUniforms: kb.pluginUniforms
          }), bb, Wb, !!this.sunShadow)
        } catch (fb) {
          return this.unbuildable.add(sb), this.warnOnce(`build:${sb}`, `could not build a shader pack program for ${bb.name}, which draws without the pack: ${String(fb)}`), null
        }
        const Ib = Aa(Tb, !!this.sunShadow),
          Hb = {
            group: this.packInputs.bindGroupFor(null, Ib),
            layout: qa(this.device, {
              depth: !1,
              sunShadow: Ib
            })
          };
        return this.createProgram(sb, Ub, function(bb) {
          return `standard-sp${bb}`
        }(Tb), Hb)
      }
      lineProgramFor(bb, cb, sb) {
        const kb = eb(bb, sb, cb, this.view);
        let Wb = this.linePrograms.get(kb);
        var ab;
        return Wb || (Wb = this.createProgram(`lines#${kb}`, (ab = function(bb) {
          const cb = new Map;
          for (let sb = 0; sb < Hb.length; sb++) bb & 1 << sb && cb.set(Hb[sb], !0);
          return cb
        }(kb), mW({
          defines: ab,
          vertex: XW,
          fragment: nW,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(kb, Wb)), Wb
      }
      createProgram(bb, cb, sb) {
        var kb;
        let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const ab = this.nextProgramId++,
          Tb = `${sb}-${ab}`,
          Ub = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Ib = [{
            binding: 0,
            visibility: Ub,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Mb of cb.textures) Ib.push({
          binding: Mb.binding,
          visibility: Ub,
          texture: {
            viewDimension: Mb.dimension
          }
        }), Ib.push({
          binding: Mb.samplerBinding,
          visibility: Ub,
          sampler: {}
        });
        const Hb = this.device.createBindGroupLayout({
            label: Tb,
            entries: Ib
          }),
          fb = {
            key: bb,
            id: ab,
            kind: sb,
            program: cb,
            vertex: this.device.createShaderModule({
              label: `${Tb}-vertex`,
              code: cb.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Tb}-fragment`,
              code: cb.fragment
            }),
            materialLayout: Hb,
            pipelineLayout: this.device.createPipelineLayout({
              label: Tb,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Hb, ...Wb ? [Wb.layout] : []]
            }),
            packGroup: null !== (kb = null === Wb || void 0 === Wb ? void 0 : Wb.group) && void 0 !== kb ? kb : null,
            failed: !1
          };
        return this.programs.set(bb, fb), fb
      }
      writeFrameUniforms() {
        const bb = this.frameUniforms;
        ea(this.view, bb), this.device.queue.writeBuffer(this.frameBuffer, 0, bb)
      }
      materialInstance(bb, cb) {
        let sb = this.materials.get(bb);
        if (!sb) {
          const cb = new Map;
          this.materials.set(bb, cb), bb.ZY.addOnce((() => {
            for (const bb of cb.values()) bb.released = !0, this.resources.destroyBuffer(bb.buffer);
            this.materials.delete(bb)
          })), sb = cb
        }
        let kb = sb.get(cb.key);
        return kb || (kb = this.newMaterialInstance(bb, null, cb), sb.set(cb.key, kb)), kb
      }
      modelInstance(bb, cb) {
        const sb = this.modelSlot(bb);
        let kb = sb.instances.get(cb.key);
        return kb || (kb = this.newMaterialInstance(bb, bb, cb), sb.instances.set(cb.key, kb)), kb
      }
      modelSlot(bb) {
        let cb = bb.gpu[Bb.g.lite];
        return cb || (cb = new BT(this.resources), bb.gpu[Bb.g.lite] = cb), cb
      }
      newMaterialInstance(bb, cb, sb) {
        const kb = sb.program.material.floats,
          Wb = new Float32Array(kb),
          ab = new Map;
        return {
          owner: bb,
          model: cb,
          program: sb,
          data: Wb,
          uploaded: new Float32Array(kb).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${bb.name}-uniforms`,
            size: Math.max(16, 4 * kb),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: ab,
          ubo: new Qa(sb.program.material.slots, Wb, ab),
          bindGroup: null,
          bound: new Array(2 * sb.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(bb) {
        var cb;
        const sb = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: NW + VW,
            fragment: NW + LW,
            attributes: [],
            material: CW,
            textures: []
          }, "earthSky"),
          kb = this.earthSkyUniforms ??= this.newMaterialInstance(gT, null, sb);
        this.earthSkyFrom !== bb && (this.earthSkyFrom = bb, kb.data.fill(0)), yW(kb.ubo, bb, this.view);
        const Wb = this.vertexInputs(sb, gT, "earthSky", sb, null);
        if (sb.failed || !Wb || !this.bindMaterial(kb, !1)) return;
        const ab = null !== (cb = Wb.state) && void 0 !== cb ? cb : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Tb = this.makeDraw(sb, Wb, ab, kb, 1);
        Tb.count = lW.length;
        const Ub = PW(bb, this.view);
        Tb.slotOffset = this.writeMeshSlot(Ub, 1), this.lists.skyDraws.push(Tb)
      }
      uploadIfChanged(bb) {
        const {
          data: cb,
          uploaded: sb
        } = bb;
        for (let kb = 0; kb < cb.length; kb++)
          if (cb[kb] !== sb[kb]) return sb.set(cb), void this.device.queue.writeBuffer(bb.buffer, 0, cb)
      }
      bindMaterial(bb, cb) {
        return bb.frame !== this.frame && (bb.frame = this.frame, cb || this.uploadIfChanged(bb), bb.bindable = this.bindTextures(bb)), bb.bindable
      }
      bindTextures(bb) {
        const {
          program: cb,
          bound: sb
        } = bb, kb = cb.program.textures;
        let Wb = !bb.bindGroup,
          ab = !0;
        for (let Tb = 0; Tb < kb.length; Tb++) {
          const cb = bb.textures.get(kb[Tb].name),
            Ub = cb ? this.resources.boundTexture(cb) : null;
          Ub ? sb[2 * Tb] === Ub.view && sb[2 * Tb + 1] === Ub.sampler || (sb[2 * Tb] = Ub.view, sb[2 * Tb + 1] = Ub.sampler, Wb = !0) : (cb || bb.ubo.expected.has(kb[Tb].name) || this.warnOnce(`texture:${bb.owner.name}:${kb[Tb].name}`, `${bb.owner.name} has no ${kb[Tb].name}`), ab = !1)
        }
        if (!ab) return Wb && (bb.bindGroup = null), !1;
        if (Wb) {
          const Wb = [{
            binding: 0,
            resource: {
              buffer: bb.buffer
            }
          }];
          for (let bb = 0; bb < kb.length; bb++) Wb.push({
            binding: kb[bb].binding,
            resource: sb[2 * bb]
          }), Wb.push({
            binding: kb[bb].samplerBinding,
            resource: sb[2 * bb + 1]
          });
          bb.bindGroup = this.device.createBindGroup({
            label: `${bb.owner.name}-material`,
            layout: cb.materialLayout,
            entries: Wb
          })
        }
        return !0
      }
      writeMeshSlot(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, bb, cb, sb), this.slotCount++ * Ak
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(bb, cb, sb, kb, Wb) {
        let ab = this.inputs.get(bb);
        if (!ab || ab.program !== kb || !Ya(cb, ab, this.resources, Wb)) {
          var Tb;
          if (ab = null !== (Tb = this.vertexLayouts.resolveInputs(cb, sb, kb, Wb)) && void 0 !== Tb ? Tb : void 0, !ab) return null;
          this.inputs.set(bb, ab)
        }
        return this.withGpuBuffers(ab)
      }
      meshInputs(bb, cb, sb) {
        const kb = this.inputs.get(bb);
        if (kb && this.inputsStamped(kb, bb, sb, cb)) return this.withGpuBuffers(kb);
        const Wb = bb.owner,
          ab = Ua(bb),
          Tb = this.vertexInputs(bb, Wb, Wb.name, cb, ab);
        return Tb && (Tb.geometry = Ia(bb), Tb.instanceLayout = this.drawDefines.instanceLayout(Wb, sb)), Tb
      }
      inputsStamped(bb, cb, sb, kb) {
        return function(bb, cb, sb, kb) {
          return bb.program === sb && bb.geometry === Ia(cb) && bb.instanceLayout === kb
        }(bb, cb, kb, this.drawDefines.instanceLayout(cb.owner, sb))
      }
      withGpuBuffers(bb) {
        return oa(bb, this.resources, this.zeroBuffer) ? bb : null
      }
      instanceBuffersFit(bb, cb, sb) {
        const kb = Ra(cb, sb, this.resources, this.zeroBuffer);
        if (kb) {
          const Wb = cb.ends[kb.index] - cb.offsets[kb.index] + cb.Z6[kb.index];
          return this.warnOnce(`overrun:${bb}`, `${bb} draws ${sb} instances from a ${Wb}-byte buffer (${kb.needed} needed)`), !1
        }
        return !0
      }
      createBinding(bb, cb, sb, kb) {
        const Wb = `${cb._colorFormat}|${cb._depthStencilFormat}|${cb._depthCompare}|${cb._sampleCount}`,
          ab = Tc(this.device, cb);
        if (bb === this.skyLastRenderable) {
          let sb = null;
          return {
            renderable: bb,
            pipeline: ab,
            draw: bb => sb ? this.drawSky(bb, cb, Wb, sb) : 0,
            update: bb => {
              sb = bb
            }
          }
        }
        return {
          renderable: bb,
          pipeline: ab,
          draw: bb => (kb ? kb.execute(bb, cb, Wb) : 0) + this.drawList(bb, cb, Wb, sb)
        }
      }
      drawSky(bb, cb, sb, kb) {
        const Wb = this.lists.skyDraws,
          ab = Wb.length > 0;
        if (ab) {
          var Tb;
          const sb = (null !== (Tb = cb._depthCompare) && void 0 !== Tb ? Tb : sc).startsWith("greater") ? 0 : 1;
          bb.setViewport(0, 0, kb.targetWidth, kb.targetHeight, sb, sb)
        }
        const Ub = this.drawList(bb, cb, sb, Wb);
        return ab && bb.setViewport(0, 0, kb.targetWidth, kb.targetHeight, 0, 1), Ub
      }
      drawList(bb, cb, sb, kb) {
        let Wb = 0;
        const ab = this.binder;
        ab.reset();
        for (const Tb of kb) {
          const kb = this.pipelineFor(Tb, cb, sb);
          kb && (ab.bind(bb, Tb, kb, this.meshSlots.bindGroup, Tb.slotOffset), Tb.indexBuffer ? bb.drawIndexed(Tb.count, Tb.instances, Tb.first, 0, 0) : bb.draw(Tb.count, Tb.instances, Tb.first, 0), Wb++)
        }
        return Wb
      }
      pipelineFor(bb, cb, sb) {
        var kb, Wb;
        if (bb.program.failed) return null;
        const ab = bb.inputs;
        if (ab.pipeline && ab.pipelineTarget === sb) return ab.pipeline;
        const Tb = `${bb.pipelineKey}|${sb}`,
          Ub = this.pipelines.get(Tb);
        if (void 0 !== Ub) return Ub && (ab.pipeline = Ub, ab.pipelineTarget = sb), Ub || null;
        this.pipelines.set(Tb, null);
        const {
          program: Ib,
          layout: Hb,
          state: fb
        } = bb, Mb = {
          label: `standard-${Ib.id}`,
          layout: Ib.pipelineLayout,
          vertex: {
            module: Ib.vertex,
            entryPoint: "main",
            buffers: Hb.buffers
          },
          fragment: xb({
            module: Ib.fragment,
            entryPoint: "main"
          }, cb, fb.blend, fb.colourWrite),
          depthStencil: cb._depthStencilFormat ? {
            format: cb._depthStencilFormat,
            depthCompare: null !== (kb = null !== (Wb = fb.depthCompare) && void 0 !== Wb ? Wb : cb._depthCompare) && void 0 !== kb ? kb : sc,
            depthWriteEnabled: fb.depthWrite,
            depthBias: fb.depthBias,
            depthBiasSlopeScale: fb.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: cb._sampleCount
          },
          primitive: {
            topology: fb.topology,
            frontFace: fb.frontFace,
            cullMode: fb.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Mb).then((bb => {
          this.compiling--, this.pipelines.set(Tb, bb)
        }), (bb => {
          this.compiling--, this.reportFailure(Ib, Tb, bb)
        })), null
      }
      forEachSunShadowCaster(bb) {
        const cb = this.caster,
          sb = (sb, kb, Wb) => {
            const ab = sb.unit && function(bb) {
              const cb = bb.material.model;
              return null !== cb && (cb.lifeform || cb.item) && cb.castsSunShadow && "triangle-list" === bb.state.topology
            }(sb) ? Ua(sb.unit) : null;
            if (!ab) return;
            const Tb = sb.unit.owner;
            switch (cb.geometry = ab, cb.skip = Tb.noSunShadowVertices, cb.indexed = null !== sb.indexBuffer, cb.first = sb.first, cb.count = sb.count, cb.fX = kb, cb.worldAt = Wb, cb.instances = null, cb.instanceCount = 1, cb.thin = !1, ka(Tb)) {
              case "thin": {
                const bb = Tb._thinInstanceDataStorage.matrixData;
                if (!bb) return;
                cb.instances = bb, cb.instanceCount = Math.min(sb.instances, bb.length / 16), cb.thin = !0;
                break
              }
              case "instanced": {
                const bb = this.resources.batchUploads.get(Tb);
                if (!bb || bb.frame !== this.frame || !this.writeBatchCasters(bb)) return;
                break
              }
            }
            bb(cb)
          };
        for (const kb of this.lists.opaqueDraws) sb(kb, this.meshSlots.data, kb.slotOffset / 4);
        this.thinBundle.forEachDrawn(sb)
      }
      writeBatchCasters(bb) {
        const {
          caster: cb
        } = this, sb = bb.packedMatrices, kb = bb.count;
        cb.instances = sb, cb.instanceCount = kb;
        let Wb = -1;
        for (let ab = 0; ab < kb; ab++) {
          const cb = PT(bb.packedRowMesh(ab));
          cb && Wb < 0 ? (this.casterWorlds.length < 16 * kb && (this.casterWorlds = new Float32Array(sb.length)), this.casterWorlds.set(sb.subarray(0, 16 * ab)), Wb = ab) : !cb && Wb >= 0 && (this.casterWorlds.set(sb.subarray(16 * ab, 16 * ab + 16), 16 * Wb), Wb++)
        }
        return Wb >= 0 && (cb.instances = this.casterWorlds, cb.instanceCount = Wb), cb.instanceCount > 0
      }
      async reportFailure(bb, cb, sb) {
        const kb = [];
        let Wb = !0;
        for (const [ab, Tb] of [
            ["vertex", bb.vertex],
            ["fragment", bb.fragment]
          ]) {
          const bb = await Tb.getCompilationInfo();
          for (const cb of bb.messages) Wb &&= "error" !== cb.type, kb.push(`${ab}:${cb.lineNum}:${cb.linePos} ${cb.type}: ${cb.message}`)
        }
        if (Wb && !bb.packGroup) return this.pipelines.set(cb, !1), console.error(`Lite: pipeline ${cb} failed`, sb), void FW("mesh", bb.kind, sb);
        bb.failed || (bb.failed = !0, console.error(`Lite: program ${bb.id} failed`, sb, kb.join("\n"), {
          program: bb.program,
          key: bb.key
        }), FW("mesh", bb.kind, sb, Wb ? null : kb[0]))
      }
    }

    function PT(bb) {
      var cb, sb;
      const kb = null === (cb = bb.LJ) || void 0 === cb || null === (sb = cb.aShaderPackItem) || void 0 === sb ? void 0 : sb.x;
      return void 0 !== kb && 0 !== (kb & Ic.h)
    }
    var DT = sb(41097),
      ET = sb(41099),
      iT = sb(41102),
      OT = sb(41058);
    const GT = [0, 3, 1, 4, 2, 5];

    function KT(bb, cb, sb, kb, Wb) {
      const ab = sb[0].width;
      try {
        return Wb ? function(bb, cb, sb) {
          const kb = (0, OT.d)(bb, sb, sb, 6);
          for (let Wb = 0; Wb < 6; Wb++)(0, OT.e)(bb, kb, Wb, cb[GT[Wb]], {
            invertY: !1
          });
          return kb.texture
        }(bb, sb, ab) : function(bb, cb, sb, kb) {
          const Wb = bb.createTexture({
            label: "sink-cube",
            size: {
              width: sb,
              height: sb,
              depthOrArrayLayers: 6
            },
            format: kb,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let ab = 0; ab < 6; ab++) bb.queue.copyExternalImageToTexture({
            source: cb[GT[ab]]
          }, {
            texture: Wb,
            origin: {
              x: 0,
              y: 0,
              z: ab
            }
          }, {
            width: sb,
            height: sb
          });
          return Wb
        }(cb, sb, ab, 1 === kb ? "r8unorm" : "rgba8unorm")
      } finally {
        ZT(sb)
      }
    }

    function ZT(bb) {
      for (const cb of null !== bb && void 0 !== bb ? bb : []) null === cb || void 0 === cb || cb.close()
    }
    async function zT(bb) {
      const cb = [],
        sb = [];
      if (await Promise.all(bb.map(((bb, kb) => (cb[kb] = null, bb.then((bb => {
          cb[kb] = bb
        }), (bb => {
          sb.push(bb)
        })))))), sb.length > 0) throw ZT(cb), sb[0];
      return cb
    }
    class qT {
      constructor(bb) {
        this.GM = bb, this.starts = [], this.lengths = [], this.used = 0, bb > 0 && (this.starts.push(0), this.lengths.push(bb))
      }
      allocate(bb) {
        const {
          starts: cb,
          lengths: sb
        } = this;
        for (let kb = 0; kb < cb.length; kb++) {
          if (sb[kb] < bb) continue;
          const Wb = cb[kb];
          return sb[kb] === bb ? (cb.splice(kb, 1), sb.splice(kb, 1)) : (cb[kb] += bb, sb[kb] -= bb), this.used += bb, Wb
        }
        return -1
      }
      free(bb, cb) {
        this.used -= cb;
        const sb = Math.min(bb + cb, this.GM);
        sb > bb && this.release(bb, sb - bb)
      }
      grow(bb) {
        const cb = this.GM;
        this.GM = bb, this.release(cb, bb - cb)
      }
      truncate(bb) {
        const {
          starts: cb,
          lengths: sb
        } = this;
        for (let kb = cb.length - 1; kb >= 0 && cb[kb] + sb[kb] > bb; kb--) cb[kb] >= bb ? (cb.splice(kb, 1), sb.splice(kb, 1)) : sb[kb] = bb - cb[kb];
        this.GM = bb
      }
      release(bb, cb) {
        const {
          starts: sb,
          lengths: kb
        } = this;
        let Wb = 0,
          ab = sb.length;
        for (; Wb < ab;) {
          const cb = Wb + ab >> 1;
          sb[cb] < bb ? Wb = cb + 1 : ab = cb
        }
        const Tb = Wb,
          Ub = Tb > 0 && sb[Tb - 1] + kb[Tb - 1] === bb,
          Ib = Tb < sb.length && bb + cb === sb[Tb];
        Ub && Ib ? (kb[Tb - 1] += cb + kb[Tb], sb.splice(Tb, 1), kb.splice(Tb, 1)) : Ub ? kb[Tb - 1] += cb : Ib ? (sb[Tb] = bb, kb[Tb] += cb) : (sb.splice(Tb, 0, bb), kb.splice(Tb, 0, cb))
      }
    }
    const dT = 256;
    class AT {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = bb, this.onReplaced = cb, this.mergeGap = sb, this.gpu = null, this.bytes = void 0, this.uQ = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Wb = Math.max(dT, Math.ceil(kb / dT) * dT);
        this.bytes = new Uint8Array(Wb), this.uQ = new qT(Wb / dT)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(bb) {
        return Math.max(1, Math.ceil(bb / dT)) * dT
      }
      allocate(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb;
        const kb = AT.slotBytes(bb),
          Wb = kb / dT;
        let ab = this.uQ.allocate(Wb);
        ab < 0 && (this.grow(this.uQ.GM + Wb), ab = this.uQ.allocate(Wb));
        const Tb = ab * dT;
        return this.growTo(Tb + Math.max(sb, kb)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Tb, Tb + kb), cb && this.bytes.set(new Uint8Array(cb.buffer, cb.byteOffset, Math.min(cb.byteLength, kb)), Tb), this.markDirty(Tb, Tb + kb), Tb
      }
      growTo(bb) {
        const cb = Math.ceil(bb / dT);
        cb > this.uQ.GM && this.grow(cb)
      }
      free(bb, cb) {
        this.freed.push(bb, cb)
      }
      write(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (kb <= 0) return;
        this.bytes.set(new Uint8Array(cb.buffer, sb, kb), bb);
        let ab = bb + kb;
        if (Wb) {
          const cb = bb + 4 * Math.ceil(kb / 4);
          this.bytes.fill(0, ab, cb), ab = cb
        }
        this.markDirty(bb, ab)
      }
      move(bb, cb, sb) {
        this.bytes.copyWithin(cb, bb, bb + sb), this.markDirty(cb, cb + sb)
      }
      flush() {
        for (const cb of this.retired) this.onReplaced(cb), cb.destroy();
        this.retired.length = 0;
        const bb = this.dirtyStarts.length;
        if (bb > 0) {
          const {
            dirtyStarts: cb,
            dirtyEnds: sb,
            order: kb
          } = this;
          kb.length = bb;
          for (let Ub = 0; Ub < bb; Ub++) kb[Ub] = Ub;
          bb > 1 && kb.sort(((bb, sb) => cb[bb] - cb[sb]));
          const Wb = this.mergeGap;
          let ab = cb[kb[0]],
            Tb = sb[kb[0]];
          for (let Ub = 1; Ub < bb; Ub++) {
            const bb = kb[Ub];
            cb[bb] - Tb <= Wb ? Tb = Math.max(Tb, sb[bb]) : (this.send(ab, Tb), ab = cb[bb], Tb = sb[bb])
          }
          this.send(ab, Tb), cb.length = 0, sb.length = 0
        }
        this.holding = !1
      }
      pN() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const bb = this.freed;
        for (let cb = 0; cb < bb.length; cb += 2) this.uQ.free(bb[cb] / dT, bb[cb + 1] / dT);
        bb.length = 0
      }
      send(bb, cb) {
        this.device.queue.writeBuffer(this.gpu, bb, this.bytes.buffer, bb, cb - bb);
        for (const sb of this.replaced) {
          const kb = Math.min(cb, sb.size);
          kb > bb && this.device.queue.writeBuffer(sb, bb, this.bytes.buffer, bb, kb - bb)
        }
      }
      markDirty(bb, cb) {
        bb &= -4, cb = cb + 3 & -4, this.holding ? (this.dirtyStarts.push(bb), this.dirtyEnds.push(cb)) : this.send(bb, cb)
      }
      grow(bb) {
        const cb = this.uQ.GM,
          sb = Math.max(2 * cb, bb),
          kb = new Uint8Array(sb * dT);
        kb.set(this.bytes);
        const Wb = this.gpu;
        this.gpu = this.createGpu(kb.byteLength), this.bytes = kb, this.uQ.grow(sb), Wb && (this.replaced.push(Wb), this.onReplaced(Wb)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, cb * dT)
      }
      createGpu(bb) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: bb,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function wT(bb) {
      return Array.isArray(bb) ? new Float32Array(bb) : bb
    }

    function rT(bb, cb, sb, kb, Wb) {
      const ab = EW(Wb),
        Tb = Math.min(Wb, kb.byteLength);
      if (ab === Tb && kb.byteOffset % 4 === 0) return void bb.queue.writeBuffer(cb, sb, kb.buffer, kb.byteOffset, ab);
      const Ub = new Uint8Array(ab);
      Ub.set(new Uint8Array(kb.buffer, kb.byteOffset, Tb)), bb.queue.writeBuffer(cb, sb, Ub)
    }

    function oT(bb, cb, sb) {
      const kb = "linear",
        Wb = "nearest";
      let ab = Wb,
        Tb = Wb,
        Ub = "nearest",
        Ib = !cb;
      switch (bb) {
        case 11:
          ab = kb, Tb = kb;
          break;
        case 3:
          ab = kb, Tb = kb, Ub = cb ? "linear" : "nearest";
          break;
        case 8:
          Ub = cb ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Tb = kb;
          break;
        case 6:
          Tb = kb, Ub = cb ? "linear" : "nearest";
          break;
        case 7:
          Tb = kb, Ib = !0;
          break;
        case 9:
          ab = kb;
          break;
        case 10:
          ab = kb, Ub = cb ? "linear" : "nearest";
          break;
        case 2:
          ab = kb, Tb = kb, sb > 1 ? (Ub = "linear", Ib = !1) : Ib = !0;
          break;
        case 12:
          ab = kb, Ib = !0;
          break;
        default:
          Ib = !0
      }
      return sb > 1 && !Ib ? {
        magFilter: kb,
        minFilter: kb,
        mipmapFilter: "linear",
        maxAnisotropy: sb
      } : {
        magFilter: ab,
        minFilter: Tb,
        mipmapFilter: Ub,
        ...Ib ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function ST(bb) {
      return 0 === bb ? "clamp-to-edge" : 2 === bb ? "mirror-repeat" : "repeat"
    }
    class RT {
      constructor(bb, cb) {
        let {
          vertexArena: sb = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = bb, this.device = cb, this.buffers = new WeakMap, this.vF = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = sb ? new AT(cb, (bb => {
          var cb;
          null === (cb = this.onDestroy) || void 0 === cb || cb.call(this, bb), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var bb;
        null === (bb = this.arena) || void 0 === bb || bb.flush()
      }
      endUploadFrame() {
        var bb;
        null === (bb = this.arena) || void 0 === bb || bb.pN()
      }
      vertexBufferCreated(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sb ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(bb);
        const Wb = wT(cb);
        bb.GM = Wb.byteLength, this.buffers.set(bb, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: sb && null !== this.arena,
          pending: Wb,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: kb
        })
      }
      vertexBufferUpdated(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        const Wb = this.buffers.get(bb);
        if (!Wb) return;
        const ab = wT(cb),
          Tb = void 0 === kb ? ab.byteLength : Math.min(kb, ab.byteLength);
        this.update(Wb, ab, sb, Tb)
      }
      vertexBufferFloatsUpdated(bb, cb, sb, kb) {
        const Wb = this.buffers.get(bb);
        if (!Wb) return;
        const ab = sb * Float32Array.BYTES_PER_ELEMENT,
          Tb = (kb - sb) * Float32Array.BYTES_PER_ELEMENT;
        Wb.slot >= 0 && Tb > 0 && ab + Tb <= Wb.size ? this.writeSlot(Wb, ab, cb, cb.byteOffset + ab, Tb, !1) : Wb.gpu && Tb > 0 && ab + Tb <= Wb.gpu.size ? this.device.queue.writeBuffer(Wb.gpu, ab, cb.buffer, cb.byteOffset + ab, Tb) : this.update(Wb, cb.subarray(sb, kb), ab, Tb)
      }
      indexBufferCreated(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(bb);
        const kb = function(bb) {
          if (bb instanceof Uint16Array || bb instanceof Uint32Array) return bb;
          for (let cb = 0; cb < bb.length; cb++)
            if (bb[cb] >= 65535) return new Uint32Array(bb);
          return new Uint16Array(bb)
        }(cb);
        bb.is32Bits = 4 === kb.BYTES_PER_ELEMENT, bb.GM = kb.byteLength, this.buffers.set(bb, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: kb,
          ownsPending: kb !== cb,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: sb
        })
      }
      bufferDeleted(bb) {
        const cb = this.buffers.get(bb);
        null !== cb && void 0 !== cb && cb.gpu ? (this.destroyBuffer(cb.gpu), this.gpuBuffersVersion++) : cb && cb.slot >= 0 && (this.arena.free(cb.slot, cb.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(bb)
      }
      update(bb, cb, sb, kb) {
        if (bb.slot >= 0) this.updateSlot(bb, cb, sb, kb);
        else if (bb.gpu) {
          if (sb + EW(kb) > bb.gpu.size) {
            const cb = this.device.createBuffer({
                label: bb.label,
                size: EW(Math.max(2 * bb.gpu.size, sb + kb)),
                usage: bb.usage | GPUBufferUsage.COPY_SRC
              }),
              Wb = this.device.createCommandEncoder();
            Wb.copyBufferToBuffer(bb.gpu, 0, cb, 0, bb.gpu.size), this.device.queue.submit([Wb.finish()]), this.destroyBuffer(bb.gpu), this.gpuBuffersVersion++, bb.gpu = cb
          }
          rT(this.device, bb.gpu, sb, cb, kb)
        } else {
          const ab = new Uint8Array(cb.buffer, cb.byteOffset, kb),
            Tb = bb.pending;
          if (Tb && bb.ownsPending && sb + kb <= Tb.byteLength) new Uint8Array(Tb.buffer, Tb.byteOffset, Tb.byteLength).set(ab, sb);
          else if (Tb && 0 === sb && kb === Tb.byteLength && cb.byteLength === kb) bb.pending = cb, bb.ownsPending = !1;
          else {
            var Wb;
            const cb = new Uint8Array(Math.max(null !== (Wb = null === Tb || void 0 === Tb ? void 0 : Tb.byteLength) && void 0 !== Wb ? Wb : 0, sb + kb));
            Tb && cb.set(new Uint8Array(Tb.buffer, Tb.byteOffset, Tb.byteLength)), cb.set(ab, sb), bb.pending = cb, bb.ownsPending = !0
          }
        }
      }
      updateSlot(bb, cb, sb, kb) {
        const Wb = this.arena;
        sb + EW(kb) > bb.size && (bb.size = EW(Math.max(2 * bb.size, sb + kb)), Wb.growTo(bb.slot + bb.size), this.gpuBuffersVersion++), 0 === kb ? this.writeSlot(bb, sb, FT, 0, 4, !1) : this.writeSlot(bb, sb, cb, cb.byteOffset, kb, !0)
      }
      writeSlot(bb, cb, sb, kb, Wb, ab) {
        const Tb = cb + (ab ? EW(Wb) : Wb);
        Tb > bb.slotBytes && this.moveSlot(bb, Tb), this.arena.write(bb.slot + cb, sb, kb, Wb, ab)
      }
      moveSlot(bb, cb) {
        const sb = this.arena,
          kb = AT.slotBytes(Math.max(cb, Math.min(2 * bb.slotBytes, bb.size))),
          Wb = sb.allocate(kb, null, bb.size);
        sb.move(bb.slot, Wb, bb.slotBytes), sb.free(bb.slot, bb.slotBytes), bb.slot = Wb, bb.slotBytes = kb, this.gpuBuffersVersion++
      }
      cover(bb, cb) {
        const sb = this.buffers.get(bb);
        if (!sb || sb.slot < 0) return !1;
        const kb = Math.min(cb, sb.size);
        return !(kb <= sb.slotBytes) && (this.moveSlot(sb, kb), !0)
      }
      destroyBuffer(bb) {
        var cb;
        null === (cb = this.onDestroy) || void 0 === cb || cb.call(this, bb), bb.destroy()
      }
      gpuBuffer(bb) {
        const cb = this.buffers.get(bb);
        if (!cb) return null;
        if (cb.slot >= 0) return this.arena.buffer;
        if (cb.arena && cb.pending) {
          const bb = cb.pending,
            sb = this.arena;
          return cb.size = EW(bb.byteLength), cb.slotBytes = AT.slotBytes(function(bb) {
            const cb = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength);
            let sb = cb.length;
            if (bb.byteOffset % 4 === 0) {
              for (; sb % 4 !== 0 && 0 === cb[sb - 1];) sb--;
              if (sb % 4 === 0) {
                const cb = new Uint32Array(bb.buffer, bb.byteOffset, sb / 4);
                let kb = cb.length;
                for (; kb > 0 && 0 === cb[kb - 1];) kb--;
                sb = 4 * kb
              }
            }
            for (; sb > 0 && 0 === cb[sb - 1];) sb--;
            return sb
          }(bb)), cb.slot = sb.allocate(cb.slotBytes, bb, cb.size), cb.pending = null, sb.buffer
        }
        if (!cb.gpu && cb.pending) {
          const bb = cb.pending;
          cb.gpu = this.device.createBuffer({
            label: cb.label,
            size: EW(bb.byteLength),
            usage: cb.usage
          }), rT(this.device, cb.gpu, 0, bb, bb.byteLength), cb.pending = null
        }
        return cb.gpu
      }
      gpuOffset(bb) {
        var cb, sb;
        const kb = null !== (cb = null === (sb = this.buffers.get(bb)) || void 0 === sb ? void 0 : sb.slot) && void 0 !== cb ? cb : -1;
        return kb < 0 ? 0 : kb
      }
      gpuEnd(bb) {
        var cb, sb;
        const kb = this.buffers.get(bb);
        return kb ? kb.slot >= 0 ? kb.slot + kb.size : null !== (cb = null === (sb = kb.gpu) || void 0 === sb ? void 0 : sb.size) && void 0 !== cb ? cb : 0 : 0
      }
      vertexInput(bb, cb, sb) {
        var kb, Wb, ab, Tb;
        return null !== (kb = null !== (Wb = sb && this.modelInput(sb, cb)) && void 0 !== Wb ? Wb : null === (ab = null !== (Tb = this.vF.get(bb)) && void 0 !== Tb ? Tb : this.batchUploads.get(bb)) || void 0 === ab ? void 0 : ab.inputs[cb]) && void 0 !== kb ? kb : null
      }
      modelInput(bb, cb) {
        const sb = this.geometrySlot(bb);
        let kb = sb.inputs.get(cb);
        if (void 0 === kb) {
          const Wb = bb.vertexAttributes.find((bb => bb.kind === cb));
          kb = Wb ? new Sb(this.modelKey(sb, Wb.data, !1), Wb.offset, Wb.stride, Wb.components, !1, Wb.glType, Wb.isNormalized) : null, sb.inputs.set(cb, kb)
        }
        return kb
      }
      modelIndex(bb) {
        return bb.indexData && this.modelKey(this.geometrySlot(bb), bb.indexData, !0)
      }
      geometrySlot(bb) {
        let cb = bb.gpu[Bb.g.lite];
        if (!cb) {
          const sb = new Map,
            kb = () => {
              for (const bb of sb.values()) this.bufferDeleted(bb)
            },
            Wb = bb => {
              const cb = sb.get(bb);
              cb && this.vertexBufferUpdated(cb, bb)
            };
          cb = {
            keys: sb,
            inputs: new Map,
            release: kb,
            updated: Wb
          }, bb.gpu[Bb.g.lite] = cb
        }
        return cb
      }
      modelKey(bb, cb, sb) {
        let kb = bb.keys.get(cb);
        if (!kb) {
          if (sb) {
            const bb = {
              GM: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(bb, cb, "model-indices"), kb = bb
          } else kb = {
            GM: 0
          }, this.vertexBufferCreated(kb, cb, !1, "model-vertices");
          bb.keys.set(cb, kb)
        }
        return kb
      }
      indexFormat(bb) {
        return bb.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(bb, cb) {
        --bb.refs > 0 || (this.releaseTexture(bb), ZT(bb.images), null !== cb && this.textures.delete(cb))
      }
      load(bb, cb) {
        const sb = cb.decoded = async function(bb) {
          if ("cube" === bb.kind) return async function(bb) {
            if (6 !== bb.length) throw new Error(`${bb.length} files where six faces were expected`);
            const cb = await zT(bb.map((bb => zW(bb)))),
              sb = cb[0].width;
            return zT(cb.map((async bb => {
              if (bb.width === sb && bb.height === sb) return bb;
              try {
                return await createImageBitmap(bb, {
                  ...KW,
                  resizeWidth: sb,
                  resizeHeight: sb
                })
              } finally {
                bb.close()
              }
            })))
          }(bb.files);
          if ("data" === bb.kind && bb.data) return [await createImageBitmap(new Blob([bb.data]), KW)];
          return [await zW(vT(bb))]
        }(bb.source).then((bb => {
          0 === cb.refs ? ZT(bb) : cb.images = bb
        }));
        this.track(cb, vT(bb.source), sb, (() => {
          cb.wanted && !cb.failed && cb.refs > 0 && this.upload(bb, cb)
        }))
      }
      canvasUpdated(bb, cb, sb) {
        const {
          state: kb
        } = this.textureSlot(bb);
        kb.dynamicSource = {
          invertY: cb,
          premultiplied: sb
        }, kb.dynamic && this.pushDynamic(bb.source, kb)
      }
      async atlasArray(bb, cb, sb) {
        const kb = await AW(this.device, bb, cb, sb);
        if (!this.atlasBindings.has(kb)) {
          const bb = (0, DT.b)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(kb, {
            view: kb.texture.createView({
              dimension: "2d-array"
            }),
            sampler: bb
          })
        }
        return kb
      }
      boundTexture(bb) {
        const cb = this.atlasBindings.get(bb);
        if (cb) return cb;
        const sb = bb;
        if (sb.released) return null;
        const kb = this.textureSlot(sb, !0),
          {
            state: Wb
          } = kb;
        if (!Wb.view && (Wb.wanted = !0, Wb.loading || Wb.failed || this.upload(sb, Wb), !Wb.view)) return null;
        const ab = this.chosenSampler(sb, kb),
          Tb = kb.bound;
        return Tb && Tb.view === Wb.view && Tb.sampler === ab ? Tb : (kb.bound = {
          view: Wb.view,
          sampler: ab
        }, kb.bound)
      }
      textureLoaded(bb) {
        var cb, sb;
        return null !== (cb = null === (sb = bb.gpu[Bb.g.lite]) || void 0 === sb ? void 0 : sb.state.decoded) && void 0 !== cb ? cb : null
      }
      textureFailed(bb) {
        var cb;
        return !0 === (null === (cb = bb.gpu[Bb.g.lite]) || void 0 === cb ? void 0 : cb.state.failed)
      }
      chosenSampler(bb, cb) {
        const {
          samplingMode: sb,
          wrapU: kb,
          wrapV: Wb
        } = bb.sampler, ab = cb.state.hasMips, Tb = function(bb, cb) {
          const {
            bilinear: sb,
            trilinear: kb
          } = Bb.i;
          return !cb && bb !== sb || 11 !== bb && bb !== kb && bb !== sb ? 1 : 4
        }(sb, ab), Ub = cb.sampler;
        if (Ub && Ub.samplingMode === sb && Ub.hasMips === ab && Ub.anisotropy === Tb && Ub.wrapU === kb && Ub.wrapV === Wb) return Ub.sampler;
        const Ib = this.samplerFor(sb, ab, Tb, kb, Wb);
        return cb.sampler = {
          samplingMode: sb,
          hasMips: ab,
          anisotropy: Tb,
          wrapU: kb,
          wrapV: Wb,
          sampler: Ib
        }, Ib
      }
      releaseTexture(bb) {
        var cb, sb;
        bb.view && (null === (sb = this.onDestroy) || void 0 === sb || sb.call(this, bb.view));
        null === (cb = bb.destroy) || void 0 === cb || cb.call(bb)
      }
      textureSlot(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = bb.gpu[Bb.g.lite];
        if (sb) return sb;
        const kb = function(bb) {
          let {
            source: cb,
            sampler: sb
          } = bb;
          return "canvas" === cb.kind ? null : `${cb.kind}|${vT(cb)}|${sb.noMipmap}|${sb.samplingMode}|${sb.invertY}`
        }(bb);
        let Wb = null === kb ? void 0 : this.textures.get(kb);
        Wb || (Wb = {
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
        }, null !== kb && (this.textures.set(kb, Wb), this.load(bb, Wb), cb && this.firstBindDecodes++)), Wb.refs++;
        const ab = Wb,
          Tb = {
            state: Wb,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(ab, kb)
            }
          };
        return bb.gpu[Bb.g.lite] = Tb, Tb
      }
      samplerFor(bb, cb, sb, kb, Wb) {
        const ab = `${bb}|${cb}|${sb}|${kb}|${Wb}`;
        let Tb = this.samplers.get(ab);
        if (!Tb) {
          const Ub = {
            ...oT(bb, cb, sb),
            addressModeU: ST(kb),
            addressModeV: ST(Wb)
          };
          Tb = (0, DT.b)(this.engine, Ub), this.samplers.set(ab, Tb)
        }
        return Tb
      }
      upload(bb, cb) {
        const {
          source: sb,
          sampler: kb
        } = bb;
        cb.hasMips = !kb.noMipmap, "canvas" === sb.kind ? this.createDynamic(sb, cb) : "cube" === sb.kind ? this.uploadCube(cb, sb.luminance) : this.uploadImage(cb, !0 === kb.invertY, sb.url)
      }
      uploadImage(bb, cb, sb) {
        const [kb] = bb.images;
        bb.images = null;
        const Wb = (0, ET.c)(this.engine, kb, {
          mipMaps: bb.hasMips,
          invertY: cb,
          srgb: !1
        }).then((cb => {
          kb.close(), 0 !== bb.refs ? (bb.view = cb.view, bb.destroy = cb.texture.destroy.bind(cb.texture)) : cb.texture.destroy()
        }));
        this.track(bb, sb, Wb)
      }
      track(bb, cb, sb, kb) {
        bb.loading = !0, this.pending++, sb.catch((sb => {
          bb.failed = !0, console.warn(`Lite: could not load texture ${ZW(cb)}`, sb)
        })).finally((() => {
          bb.loading = !1, this.pending--, null === kb || void 0 === kb || kb()
        }))
      }
      uploadCube(bb, cb) {
        const sb = bb.images;
        bb.images = null;
        const kb = KT(this.engine, this.device, sb, (0, Bb.y)(cb), bb.hasMips);
        bb.view = kb.createView({
          dimension: "cube"
        }), bb.destroy = () => {
          kb.destroy()
        }
      }
      createDynamic(bb, cb) {
        const {
          canvas: sb
        } = bb, kb = (0, iT.d)(this.engine, Math.max(1, sb.width), Math.max(1, sb.height), {
          mipMaps: cb.hasMips,
          srgb: !1
        });
        cb.dynamic = kb, cb.view = kb.view, cb.destroy = () => {
          kb.texture.destroy()
        }, this.pushDynamic(bb, cb)
      }
      pushDynamic(bb, cb) {
        const sb = cb.dynamicSource,
          kb = cb.dynamic,
          {
            canvas: Wb
          } = bb;
        if (sb && kb && 0 !== Wb.width && 0 !== Wb.height) return Wb.width !== kb.width || Wb.height !== kb.height ? (this.releaseTexture(cb), cb.dynamic = null, cb.view = null, void this.createDynamic(bb, cb)) : void(0, iT.g)(this.engine, kb, Wb, {
          invertY: sb.invertY,
          premultiplyAlpha: sb.premultiplied
        })
      }
    }

    function vT(bb) {
      return "cube" === bb.kind ? bb.rootUrl : "canvas" === bb.kind ? "canvas" : bb.url
    }
    const FT = new Uint8Array(4);

    function xT(bb) {
      const cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      bb._colorAttachment.storeOp = bb._targetSignature._sampleCount > 1 ? cb : "store";
      const sb = bb._renderPassDescriptor.depthStencilAttachment;
      sb && (sb.depthStoreOp = cb, sb.stencilStoreOp && (sb.stencilStoreOp = cb))
    }
    var jT = sb(37368),
      pT = sb(37422),
      bU = sb(37021),
      cU = sb(39168);
    const sU = new Float64Array([1, 1, 1]),
      kU = new Float64Array([0, 1, 0]),
      WU = new Float64Array(4),
      aU = new Float32Array(16),
      TU = new Float64Array(3),
      UU = new Float64Array(4);

    function IU(bb, cb, sb) {
      bb.fov = cb.fov, bb.near = cb.near, bb.far = cb.far, bb.renderWidth = sb.renderWidth, bb.renderHeight = sb.renderHeight, (0, bU.s)(cb.holderRotation, 0, WU, 0), (0, bU.d)(sU, 0, WU, 0, cb.holderPosition, 0, aU);
      const kb = cb.Iw;
      TU[0] = kb[0], TU[1] = kb[1], TU[2] = kb[2] + 1;
      const Wb = bb.viewMatrix;
      (0, bU.l)(kb, TU, kU, Wb), (0, bU.i)(Wb, 0, Wb), (0, bU.p)(Wb, aU, 0, Wb), (0, bU.i)(Wb, 0, Wb);
      const ab = bb.worldMatrix;
      (0, bU.i)(Wb, 0, ab), bb.eye[0] = ab[12], bb.eye[1] = ab[13], bb.eye[2] = ab[14], UU[0] = bb.fov, UU[1] = bb.renderWidth / bb.renderHeight, UU[2] = bb.near, UU[3] = bb.far, (0, bU.q)(UU, bb.projectionMatrix), (0, bU.p)(Wb, bb.projectionMatrix, 0, bb.viewProjectionMatrix), (0, cU.e)(bb.viewProjectionMatrix, bb.frustum)
    }

    function HU(bb, cb) {
      let sb = bb.frustumPlanes;
      sb || (sb = bb.frustumPlanes = Array.from({
        length: 6
      }, (() => new jT.c(0, 0, 0, 0))));
      for (let kb = 0; kb < 6; kb++) {
        const bb = sb[kb].normal;
        bb._x = cb[4 * kb], bb._y = cb[4 * kb + 1], bb._z = cb[4 * kb + 2], bb._isDirty = !0, sb[kb].d = cb[4 * kb + 3]
      }
    }

    function fU(bb, cb) {
      const sb = cb.clearColor;
      bb.clearColour[0] = sb.r, bb.clearColour[1] = sb.g, bb.clearColour[2] = sb.b, bb.clearColour[3] = sb.a;
      const kb = cb.ambientColor;
      bb.ambientColour[0] = kb.r, bb.ambientColour[1] = kb.g, bb.ambientColour[2] = kb.b, bb.animationRatio = cb.animationRatio, bb.frameId = cb.frameId, bb.version++
    }

    function MU(bb) {
      const cb = bb.model.view;
      return cb.animTick = (0, pT.d)(), cb.timeMs = performance.now(), fU(cb, bb.aQ), bb.model.update(cb.frameId), cb
    }

    function XU(bb) {
      const cb = bb.aQ,
        {
          view: sb,
          rA: kb
        } = bb.model;
      return IU(sb, kb, cb.Sm()), cb.onBeforeRenderObservable.notifyObservers(cb), HU(cb, sb.frustum), cb.onBeforeCameraRenderObservable.notifyObservers(cb.activeCamera), MU(bb)
    }
    var nU = sb(36978),
      mU = sb(37093),
      lU = sb(37407);

    function QU(bb) {
      var cb, sb;
      const kb = (0, Jb.W)(bb);
      if (!kb || kb.diffuseTexture && (0, lU.g)(bb)) return null;
      const Wb = null === (cb = (0, Jb.v)(kb, Yb.j.name)) || void 0 === cb ? void 0 : cb.state,
        ab = null === (sb = (0, Jb.v)(kb, va.e.name)) || void 0 === sb ? void 0 : sb.state,
        Tb = new Float32Array(16);
      return function(bb, cb, sb, kb) {
        var Wb, ab;
        const Tb = mk;
        kb.set(bb.diffuseColor, Tb.diffuse), kb[Tb.diffuse + 3] = bb.alpha, kb.set(bb.ambientColor, Tb.ambientAndCutoff), kb[Tb.ambientAndCutoff + 3] = bb.alphaCutOff, kb.set(bb.emissiveColor, Tb.emissiveAndLevel), kb[Tb.emissiveAndLevel + 3] = null !== (Wb = null === (ab = bb.diffuseTexture) || void 0 === ab ? void 0 : ab.level) && void 0 !== Wb ? Wb : 1, null !== cb && void 0 !== cb && cb.animDataPerTex ? (kb[Tb.anim + 1] = pT.b, kb[Tb.anim + 2] = cb.animDataPerTex.length / 3 - 1) : sb && (kb[Tb.anim + 1] = sb.numAnimStates, kb[Tb.anim + 2] = sb.ticksPerAnimState)
      }(kb, Wb, ab, Tb), {
        model: kb,
        atlas: Wb,
        texture: Wb ? "atlas" : kb.diffuseTexture ? "single" : "none",
        animated: Wb ? !!Wb.animDataPerTex : !!ab,
        liquid: (0, lU.h)(bb),
        customRenderMat: (0, lU.g)(bb),
        uniformData: Tb
      }
    }
    var eU = sb(36964);
    class CU {
      constructor(bb) {
        this.units = bb, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var bb;
        this.buffer.destroy(), null === (bb = this.twin) || void 0 === bb || bb.destroy()
      }
    }
    class NU {
      constructor(bb, cb) {
        this.arena = bb, this.uQ = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.uQ = new qT(cb);
        const sb = new CU(cb);
        sb.buffer = this.createBuffer(sb, !1), this.backings.push(sb), this.refresh()
      }
      get GM() {
        return this.uQ.GM
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
        let bb = 0;
        for (const cb of this.backings) bb += cb.units * (this.arena.unitBytes + (cb.twin ? this.arena.twinUnitBytes : 0));
        return bb
      }
      holds(bb) {
        return bb.start + bb.length <= this.usable
      }
      lost(bb) {
        return this.dropped || bb.start + bb.length > this.GM
      }
      write(bb, cb) {
        const {
          device: sb,
          unitBytes: kb
        } = this.arena;
        for (const Wb of this.backings) {
          const ab = (Wb.units - bb.start) * kb;
          ab > 0 && sb.queue.writeBuffer(Wb.buffer, bb.start * kb, cb, 0, Math.min(cb.byteLength, ab))
        }
      }
      writeLight(bb, cb) {
        const {
          device: sb,
          twinUnitBytes: kb,
          verticesPerUnit: Wb
        } = this.arena, {
          light: ab,
          count: Tb
        } = this.arena.twinLight(cb, Math.min(cb.length, bb.length * Wb));
        for (const Ub of this.backings) {
          Ub.twin || (Ub.twin = this.createBuffer(Ub, !0));
          const cb = (Ub.units - bb.start) * Wb;
          cb > 0 && sb.queue.writeBuffer(Ub.twin, bb.start * kb, ab, 0, Math.min(Tb, cb))
        }
      }
      grow(bb) {
        this.arena.assertNotDrawing();
        const {
          device: cb,
          unitBytes: sb,
          label: kb
        } = this.arena, Wb = this.backings[this.backings.length - 1], ab = new CU(bb), Tb = cb.createCommandEncoder({
          label: `${kb}-grow`
        });
        ab.buffer = this.createBuffer(ab, !1), Tb.copyBufferToBuffer(Wb.buffer, 0, ab.buffer, 0, Wb.units * sb), Wb.twin && (ab.twin = this.createBuffer(ab, !0), Tb.copyBufferToBuffer(Wb.twin, 0, ab.twin, 0, Wb.units * this.arena.twinUnitBytes)), cb.queue.submit([Tb.finish()]), this.backings.push(ab), this.uQ.grow(bb)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const bb of this.backings) bb.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(bb, cb) {
        const {
          device: sb,
          unitBytes: kb,
          twinUnitBytes: Wb,
          usage: ab,
          label: Tb
        } = this.arena;
        sb.pushErrorScope("out-of-memory");
        const Ub = sb.createBuffer({
          label: cb ? `${Tb}-light` : Tb,
          size: bb.units * (cb ? Wb : kb),
          usage: (cb ? this.arena.twinUsage : ab) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, sb.popErrorScope().then((sb => {
          this.arena.awaitingVerdict--, this.settle(bb, cb, !sb, !0)
        }), (sb => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Tb} buffer, taken as failed: ${String(sb)}`), this.settle(bb, cb, !1, !1)
        })), Ub
      }
      settle(bb, cb, sb, kb) {
        const Wb = this.backings.indexOf(bb);
        if (!(this.dropped || Wb < 0)) {
          if (!sb) {
            if (kb && this.arena.ranOutOfMemory(bb.units, bb.units * (cb ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Wb) return void this.drop();
            for (const bb of this.backings.splice(Wb)) bb.destroy();
            return this.uQ.truncate(this.backings[Wb - 1].units), this.growable = !1, void this.promote()
          }
          cb ? bb.twinReady = !0 : (bb.bufferReady = !0, this.arena.allocatedBuffer(bb.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: bb
        } = this;
        let cb = 0;
        for (; cb + 1 < bb.length && bb[cb].ready && bb[cb + 1].ready;) cb++;
        for (const sb of bb.splice(0, cb)) sb.destroy();
        this.refresh()
      }
      refresh() {
        const bb = this.backings[0];
        this.buffer = bb.buffer, this.twin = bb.twinReady ? bb.twin : null, this.usable = !this.dropped && bb.bufferReady ? bb.units : 0
      }
    }
    class VU {
      constructor(bb, cb, sb, kb) {
        let {
          verticesPerUnit: Wb = 1,
          twinUsage: ab = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = bb, this.unitBytes = cb, this.usage = sb, this.label = kb, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Hc.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), cb % 4 !== 0) throw new Error(`${kb}: ${cb}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Wb, this.twinUsage = ab, this.twinValueBytes = Wb > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Wb
      }
      twinLight(bb, cb) {
        if (4 === this.twinValueBytes) return this.widened.length < cb && (this.widened = new Float32Array(Math.max(cb, 2 * this.widened.length))), this.widened.set(bb.subarray(0, cb)), {
          light: this.widened,
          count: cb
        };
        const sb = cb % this.verticesPerUnit;
        if (0 === sb) return {
          light: bb,
          count: cb
        };
        const kb = cb - sb + this.verticesPerUnit;
        return this.padded.length < kb && (this.padded = new Uint16Array(Math.max(kb, 2 * this.padded.length))), this.padded.set(bb.subarray(0, cb)), this.padded.fill(0, cb, kb), {
          light: this.padded,
          count: kb
        }
      }
      allocate(bb) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), bb > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Wb of this.pages) {
          const cb = Wb.uQ.allocate(bb);
          if (cb >= 0) return {
            page: Wb,
            start: cb,
            length: bb
          }
        }
        const cb = this.pages[this.pages.length - 1];
        if (null !== cb && void 0 !== cb && cb.canGrow) {
          const sb = Math.min(this.ceiling, Math.max(2 * cb.GM, cb.GM + bb));
          if (sb - cb.GM >= bb) return cb.grow(sb), {
            page: cb,
            start: cb.uQ.allocate(bb),
            length: bb
          }
        }
        cb && cb !== this.pages[0] && 0 === cb.uQ.used && cb.drop();
        const sb = Math.floor(1048576 / this.unitBytes),
          kb = new NU(this, Math.max(bb, Math.min(this.ceiling, sb)));
        return this.pages.push(kb), {
          page: kb,
          start: kb.uQ.allocate(bb),
          length: bb
        }
      }
      free(bb) {
        this.assertNotDrawing();
        const {
          page: cb
        } = bb;
        cb.uQ.free(bb.start, bb.length), 0 === cb.uQ.used && cb !== this.pages[0] && cb !== this.pages[this.pages.length - 1] && cb.drop()
      }
      remove(bb) {
        const cb = this.pages.indexOf(bb);
        cb >= 0 && this.pages.splice(cb, 1)
      }
      ranOutOfMemory(bb, cb) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${cb}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, bb), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, bb) / 2));
        const sb = performance.now();
        sb >= this.shortageUntil && (this.forgetFailedAt = sb + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = sb + 1e3)
      }
      allocatedBuffer(bb) {
        bb >= this.failed && (this.failed = 1 / 0);
        const cb = Math.min(2 * bb, Math.floor((bb + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, cb))
      }
      stats() {
        let bb = 0,
          cb = 0,
          sb = 0,
          kb = 0;
        for (const Wb of this.pages) bb += Wb.GM, cb += Wb.uQ.used, sb += Wb.hasTwin ? Wb.GM * this.twinUnitBytes : 0, kb += Wb.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: bb * this.unitBytes,
          usedBytes: cb * this.unitBytes,
          twinBytes: sb,
          allocatedBytes: kb
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: bb,
          maxStorageBufferBindingSize: cb
        } = this.device.limits;
        let sb = Math.floor(Math.min(67108864, bb) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (sb = Math.min(sb, Math.floor(cb / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (sb = Math.min(sb, Math.floor(cb / this.twinUnitBytes))), sb
      }
    }
    const LU = 16383;

    function uU(bb, cb, sb, kb, Wb) {
      let ab = 0;
      for (let Tb = sb; Tb < kb; Tb += LU) bb.drawIndexed(6 * Math.min(LU, kb - Tb), 1, 0, cb + 4 * Tb, Wb), ab++;
      return ab
    }
    class YU {
      constructor(bb, cb) {
        this.recordsGroup = cb, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const sb = hc.d.strideWithoutAtlas;
        this.vertexArena = new VU(bb, sb, GPUBufferUsage.VERTEX, `terrain-vertices-${sb}`), this.quadArena = new VU(bb, mU.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const kb = (0, Jc.h)(new Uint16Array(98298), LU);
        this.quadPattern = bb.createBuffer({
          label: "terrain-quad-pattern",
          size: kb.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), bb.queue.writeBuffer(this.quadPattern, 0, kb)
      }
      set(bb, cb) {
        const sb = cb.packedVertices,
          kb = sb ? this.quadArena.allocate(bb.faceCount) : this.vertexArena.allocate(bb.vertexCount);
        if (!kb) return !1;
        bb.vertices = kb;
        const Wb = sb ? new Uint8Array(sb.buffer, sb.byteOffset, sb.byteLength) : new Uint8Array(cb.vertices);
        return kb.page.write(kb, Wb), !0
      }
      setLight(bb, cb) {
        const {
          vertices: sb
        } = bb;
        sb && 0 !== cb.length && sb.page.live && (cb.length < bb.vertexCount ? sb.page.arena.warnOnce("shortLight", `a part's ${cb.length} light values are fewer than its ${bb.vertexCount} vertices, so its light is left as it was`) : (sb.page.writeLight(sb, cb), bb.lit = !0))
      }
      lightFullSky(bb, cb) {
        this.fullSky.length < cb && (this.fullSky = new Uint16Array(Math.max(cb, 4096)).fill(eU.j));
        for (const sb of bb) {
          const bb = sb.vertices;
          bb.page.live && (bb.page.writeLight(bb, this.fullSky), sb.lit = !0)
        }
      }
      backed(bb) {
        const {
          vertices: cb
        } = bb;
        return !!cb && cb.page.holds(cb)
      }
      lost(bb) {
        const {
          vertices: cb
        } = bb;
        return !!cb && cb.page.lost(cb)
      }
      release(bb) {
        bb.vertices && bb.vertices.page.arena.free(bb.vertices), bb.vertices = null, bb.lit = !1
      }
      setDrawing(bb) {
        this.forgetBound()
      }
      draw(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : cb.faceCount;
        const ab = cb.vertices,
          Tb = ab.page,
          Ub = sb ? Tb.twin : null;
        if (!Tb.holds(ab) || sb && !Ub) return 0;
        const {
          verticesPerUnit: Ib
        } = Tb.arena;
        let Hb = ab.start * Ib;
        this.boundPattern || (bb.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const fb = kb + Wb;
        if (Ib > 1) return Tb.buffer === this.boundRecords && Ub === this.boundRecordsLight || (bb.setBindGroup(1, this.recordsGroup(Tb.buffer, Ub)), this.boundRecords = Tb.buffer, this.boundRecordsLight = Ub), uU(bb, Hb, kb, fb, cb.slot);
        Tb.buffer !== this.boundVertices && (bb.setVertexBuffer(0, Tb.buffer), this.boundVertices = Tb.buffer), Ub && Ub !== this.boundLight && (bb.setVertexBuffer(1, Ub), this.boundLight = Ub);
        const Mb = cb.faceCount;
        return fb <= Mb ? uU(bb, Hb, kb, fb, cb.slot) : uU(bb, Hb, kb, Mb, cb.slot) + uU(bb, Hb, Math.max(kb, Mb) - Mb, fb - Mb, cb.slot)
      }
      get buffersAwaitingVerdict() {
        let bb = 0;
        for (const cb of this.arenas()) bb += cb.awaitingVerdict;
        return bb
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class hU {
      constructor(bb, cb, sb, kb) {
        this.device = bb, this.splitBefore = cb, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = bb.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Wb = bb.createShaderModule({
          label: "scene-depth-copy",
          code: (ab = sb._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${ab?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var ab;
        bb.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Wb,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Wb,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((bb => {
          this.pipeline = bb, this.building = !1
        }), (bb => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", bb)
        })), sb._executeWithTransmission = () => this.execute(sb, kb)
      }
      get compiling() {
        return this.building
      }
      setWanted(bb) {
        this.wanted = bb
      }
      setPlanes(bb, cb) {
        bb === this.near && cb === this.far || (this.near = bb, this.far = cb, this.unproject[0] = bb / (cb - bb), this.unproject[1] = cb * bb / (cb - bb), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var bb, cb;
        return null !== (bb = null === (cb = this.copy) || void 0 === cb ? void 0 : cb.view) && void 0 !== bb ? bb : null
      }
      execute(bb, cb) {
        var sb;
        null === (sb = this.retired) || void 0 === sb || sb.destroy(), this.retired = null;
        const kb = bc(cb),
          Wb = bb._transparentBindings,
          ab = this.wanted && this.pipeline ? this.splitIndex(Wb) : -1,
          Tb = bb._colorAttachment,
          Ub = Tb.resolveTarget;
        ab >= 0 && (Tb.resolveTarget = void 0, xT(bb, !0));
        let Ib = kb.beginRenderPass(bb._renderPassDescriptor);
        Ib.setBindGroup(0, bb._sceneBG);
        let Hb = this.drawList(Ib, cb, bb._opaqueBindings, 0, bb._opaqueBindings.length);
        if (Hb += this.drawList(Ib, cb, bb._directBindings, 0, bb._directBindings.length), Hb += this.drawList(Ib, cb, Wb, 0, ab >= 0 ? ab : Wb.length), Ib.end(), ab < 0) return Hb;
        xT(bb);
        const fb = bb._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Mb,
            stencilLoadOp: Xb
          } = fb,
          nb = Tb.loadOp;
        Tb.resolveTarget = Ub;
        try {
          this.copyDepth(kb, bb), Tb.loadOp = "load", fb.depthLoadOp = "load", Xb && (fb.stencilLoadOp = "load"), Ib = kb.beginRenderPass(bb._renderPassDescriptor), Ib.setBindGroup(0, bb._sceneBG), Hb += this.drawList(Ib, cb, Wb, ab, Wb.length), Ib.end()
        } finally {
          Tb.loadOp = nb, fb.depthLoadOp = Mb, fb.stencilLoadOp = Xb
        }
        return Hb
      }
      splitIndex(bb) {
        for (let cb = 0; cb < bb.length; cb++)
          if (bb[cb].renderable === this.splitBefore) return cb;
        return -1
      }
      drawList(bb, cb, sb, kb, Wb) {
        let ab = null,
          Tb = 0;
        for (let Ub = kb; Ub < Wb; Ub++) {
          const kb = sb[Ub],
            Wb = kb.renderable.mesh;
          Wb && !1 === Wb.visible || (kb.pipeline !== ab && (bb.setPipeline(kb.pipeline), ab = kb.pipeline), Tb += kb.draw(bb, cb))
        }
        return Tb
      }
      copyDepth(bb, cb) {
        var sb, kb;
        const Wb = (null !== (sb = cb._config.depth) && void 0 !== sb ? sb : cb._config.rt)._depthTexture,
          ab = (null === (kb = this.copy) || void 0 === kb ? void 0 : kb.source) === Wb ? this.copy : this.remakeCopy(Wb),
          Tb = bb.beginRenderPass(ab.pass);
        Tb.setPipeline(this.pipeline), Tb.setBindGroup(0, ab.bindGroup), Tb.draw(3), Tb.end()
      }
      remakeCopy(bb) {
        var cb, sb;
        this.retired = null !== (cb = null === (sb = this.copy) || void 0 === sb ? void 0 : sb.texture) && void 0 !== cb ? cb : null;
        const kb = this.device.createTexture({
            label: "scene-depth",
            size: [bb.width, bb.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Wb = kb.createView(),
          ab = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: bb.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          Tb = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Wb,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: bb,
          texture: kb,
          view: Wb,
          bindGroup: ab,
          pass: Tb
        }, this.copy
      }
    }
    const JU = "rgba8unorm";

    function gU(bb) {
      return bb ? 15 : 1
    }
    class BU {
      constructor(bb, cb, sb, kb) {
        this.device = bb, this.terrain = kb, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = cb._targetSignature._sampleCount > 1, this.cameraBuffer = bb.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = bb.createBindGroupLayout({
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
        const Wb = bb.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = bb.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Wb,
          entries: []
        });
        const ab = bb.createShaderModule({
          label: "sun-shadow-mask",
          code: (Tb = this.edge, `${(0,gc.G)()}${zs({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Tb?Bs:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${gU(Tb)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Tb?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Tb;
        bb.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: bb.createPipelineLayout({
            bindGroupLayouts: [this.layout, Wb, Wb, qa(bb, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: ab,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: ab,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((bb => {
          this.pipeline = bb, this.building = !1
        }), (bb => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", bb)
        }));
        const Ub = cb._executeWithTransmission;
        cb._executeWithTransmission = bb => this.execute(cb, sb, (() => Ub ? Ub(bb) : function(bb, cb) {
          const sb = bc(cb).beginRenderPass(bb._renderPassDescriptor);
          sb.setBindGroup(0, bb._sceneBG);
          let kb = tU(sb, cb, bb._opaqueBindings);
          return kb += tU(sb, cb, bb._directBindings), kb += tU(sb, cb, bb._transparentBindings), sb.end(), kb
        }(cb, sb)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var bb, cb;
        return null !== (bb = null === (cb = this.targets) || void 0 === cb ? void 0 : cb.maskView) && void 0 !== bb ? bb : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(bb) {
        ! function(bb, cb) {
          const sb = bb.worldMatrix,
            kb = bb.projectionMatrix,
            Wb = 1 / kb[0],
            ab = 1 / kb[5],
            Tb = bb.far * bb.near / (bb.far - bb.near);
          cb[0] = bb.eye[0], cb[1] = bb.eye[1], cb[2] = bb.eye[2], cb[3] = 2 ** -23 / Tb, cb[4] = sb[0] * Wb, cb[5] = sb[1] * Wb, cb[6] = sb[2] * Wb, cb[7] = Tb, cb[8] = sb[4] * ab, cb[9] = sb[5] * ab, cb[10] = sb[6] * ab, cb[11] = bb.near / (bb.far - bb.near), cb[12] = sb[8], cb[13] = sb[9], cb[14] = sb[10], cb[15] = 0
        }(bb, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(bb, cb, sb) {
        if (this.retire(), !this.terrain.readsMask) return sb();
        const kb = this.targetsFor(bb),
          Wb = bc(cb),
          ab = bb._renderPassDescriptor.depthStencilAttachment;
        this.edge || (kb.prepass.depthStencilAttachment.view = ab.view);
        const Tb = this.terrain.drawPrepass(Wb, kb.prepass, bb._sceneBG);
        if (0 === Tb) return sb();
        if (this.trace(Wb, kb), this.edge) return Tb + 1 + sb();
        const {
          depthLoadOp: Ub,
          stencilLoadOp: Ib
        } = ab;
        ab.depthLoadOp = "load", Ib && (ab.stencilLoadOp = "load");
        try {
          return Tb + 1 + sb()
        } finally {
          ab.depthLoadOp = Ub, ab.stencilLoadOp = Ib
        }
      }
      trace(bb, cb) {
        const sb = this.terrain.sunShadowGroup(),
          kb = bb.beginRenderPass(cb.trace);
        this.pipeline && sb && (kb.setPipeline(this.pipeline), kb.setBindGroup(0, cb.bindGroup), kb.setBindGroup(1, this.empty), kb.setBindGroup(2, this.empty), kb.setBindGroup(3, sb), kb.draw(3)), kb.end()
      }
      retire() {
        const bb = this.retired;
        var cb;
        bb && (bb.mask.destroy(), bb.normals.destroy(), null === (cb = bb.depth) || void 0 === cb || cb.destroy(), this.retired = null)
      }
      targetsFor(bb) {
        var cb, sb;
        const kb = (null !== (cb = bb._config.depth) && void 0 !== cb ? cb : bb._config.rt)._depthTexture;
        return (null === (sb = this.targets) || void 0 === sb ? void 0 : sb.source) === kb ? this.targets : this.remake(bb, kb)
      }
      remake(bb, cb) {
        var sb;
        this.retired = this.targets;
        const kb = [cb.width, cb.height],
          Wb = this.device.createTexture({
            label: "sun-shadow-mask",
            size: kb,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          ab = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: kb,
            format: JU,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Tb = null !== (sb = bb._targetSignature._depthStencilFormat) && void 0 !== sb ? sb : cb.format,
          Ub = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: kb,
            format: Tb,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Ib = bb._renderPassDescriptor.depthStencilAttachment,
          Hb = Tb.includes("stencil"),
          fb = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: ab.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: Ub ? Ub.createView() : Ib.view,
              depthClearValue: Ib.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Hb ? {
                stencilClearValue: Ib.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Mb = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== Ub && void 0 !== Ub ? Ub : cb).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: ab.createView()
            }]
          }),
          Xb = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Wb.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [gU(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: cb,
          mask: Wb,
          maskView: Wb.createView(),
          normals: ab,
          depth: Ub,
          bindGroup: Mb,
          prepass: fb,
          trace: Xb
        }, this.targets
      }
    }

    function tU(bb, cb, sb) {
      let kb = null,
        Wb = 0;
      for (const ab of sb) {
        const sb = ab.renderable.mesh;
        sb && !1 === sb.visible || (ab.pipeline !== kb && (bb.setPipeline(ab.pipeline), kb = ab.pipeline), Wb += ab.draw(bb, cb))
      }
      return Wb
    }
    const yU = 6e4,
      PU = {
        status: "ok"
      },
      DU = {
        status: "skipped"
      };
    async function EU(bb, cb) {
      const {
        isCancelled: sb
      } = bb;
      if (sb()) return {
        status: "Gs"
      };
      const {
        target: kb
      } = cb;
      if (!kb) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Wb = [],
        ab = Promise.all(Array.from(new Set(bb.materials), (async sb => {
          Wb.push(await async function(bb, cb, sb, kb) {
            const Wb = {
              lighting: bb.lighting,
              dirLightCount: Math.min(bb.dirLightCount, 4),
              Qm: bb.runtime
            };
            try {
              const ab = cb.material(kb);
              return ab && Mk(cb.programKey(ab, !1, Wb)) ? (await ab.ready, bb.isCancelled() ? PU : ab.bindGroupLayout ? await async function(bb, cb, sb, kb) {
                const {
                  device: Wb
                } = bb;
                let ab, Tb;
                Wb.pushErrorScope("validation");
                try {
                  ab = bb.pipelineBuild(cb, sb, kb)
                } finally {
                  Tb = Wb.popErrorScope().catch((() => null))
                }
                const [Ub, Ib] = await Promise.all([Tb, ab.built.then((() => null), (bb => null !== bb && void 0 !== bb ? bb : new Error("pipeline failed")))]);
                if (!Ub && !Ib) return PU;
                const Hb = await iU(ab.module),
                  fb = Hb.length > 0 ? Hb.map((bb => `${ab.name} ${bb.lineNum}:${bb.linePos}: ${bb.message}`)).join("\n") : `${ab.name}: ${OU(null!==Ib&&void 0!==Ib?Ib:Ub)}`;
                return {
                  status: "failed",
                  material: cb.model.name,
                  message: fb
                }
              }(cb, ab, cb.programKey(ab, "none" !== ab.texture, Wb), sb): (console.warn(`Shader pack: skipped the compile check for "${kb.name}", whose textures failed to load`), DU)) : PU
            } catch (ab) {
              return {
                status: "failed",
                material: kb.name,
                message: OU(ab)
              }
            }
          }(bb, cb, kb, sb))
        }))),
        Tb = function(bb, cb) {
          let sb, kb, Wb = !1;
          const ab = new Promise((ab => {
            var Tb;
            sb = setTimeout((() => {
              ab("timeout")
            }), null !== (Tb = cb.timeoutMs) && void 0 !== Tb ? Tb : yU), kb = setInterval((() => {
              cb.isCancelled() && ab("Gs")
            }), 50), bb.lost.then((() => {
              Wb = !0, ab("lost")
            }))
          }));
          return {
            signal: ab,
            lost: () => Wb,
            dispose: () => {
              clearTimeout(sb), clearInterval(kb)
            }
          }
        }(cb.device, bb);
      let Ub;
      try {
        Ub = await Promise.race([ab.then((() => "done")), Tb.signal])
      } finally {
        Tb.dispose()
      }
      if ("Gs" === Ub || sb()) return {
        status: "Gs"
      };
      const Ib = Wb.find((bb => "failed" === bb.status));
      return Ib && "lost" !== Ub && !Tb.lost() && await new Promise((bb => {
        setTimeout(bb, 0)
      })), "lost" === Ub || Tb.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Ib ? {
        status: "failed",
        failure: {
          material: Ib.material,
          message: Ib.message
        }
      } : "timeout" === Ub ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Hb=bb.timeoutMs)&&void 0!==Hb?Hb:yU)/1e3} s`), {
        status: "skipped"
      }) : Wb.some((bb => "skipped" === bb.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Hb
    }
    async function iU(bb) {
      if (!bb) return [];
      try {
        return (await bb.getCompilationInfo()).messages.filter((bb => "error" === bb.type))
      } catch {
        return []
      }
    }

    function OU(bb) {
      var cb;
      return null !== (cb = null === bb || void 0 === bb ? void 0 : bb.message) && void 0 !== cb ? cb : String(bb)
    }

    function GU(bb, cb, sb, kb) {
      Mk(bb) ? iU(sb).then((bb => {
        const [sb] = bb;
        FW("terrain", cb, kb, sb ? `${sb.lineNum}:${sb.linePos} error: ${sb.message}` : null)
      })) : FW("terrain", cb, kb)
    }
    var KU = sb(37100),
      ZU = sb(37104),
      zU = sb(37115),
      qU = sb(37048);

    function dU(bb, cb, sb, kb, Wb) {
      const ab = Math.hypot(sb[0], sb[1], sb[2]);
      if (!(ab > 0)) return;
      const Tb = [sb[0] / ab, sb[1] / ab, sb[2] / ab],
        Ub = [Math.floor(cb[0]), Math.floor(cb[1]), Math.floor(cb[2])],
        Ib = [0, 0, 0],
        Hb = [1 / 0, 1 / 0, 1 / 0],
        fb = [1 / 0, 1 / 0, 1 / 0];
      for (let nb = 0; nb < 3; nb++) Tb[nb] > 0 ? (Ib[nb] = 1, Hb[nb] = (Ub[nb] + 1 - cb[nb]) / Tb[nb], fb[nb] = 1 / Tb[nb]) : Tb[nb] < 0 && (Ib[nb] = -1, Hb[nb] = (Ub[nb] - cb[nb]) / Tb[nb], fb[nb] = -1 / Tb[nb]);
      const {
        qm: Mb
      } = bb;
      let Xb = bb.hG(Ub[0], Ub[1], Ub[2]);
      for (;;) {
        const cb = Hb[0] < Hb[1] ? Hb[0] < Hb[2] ? 0 : 2 : Hb[1] < Hb[2] ? 1 : 2;
        if (Hb[cb] > kb) return;
        const sb = Ib[cb] > 0 ? Ub[cb] + 1 : Ub[cb];
        Ub[cb] += Ib[cb], Hb[cb] += fb[cb];
        const ab = bb.hG(Ub[0], Ub[1], Ub[2]),
          Tb = ab !== Xb && !(bb.opaque[Xb] && bb.opaque[ab]);
        if (Tb) {
          const kb = [Ub[0], Ub[1], Ub[2]];
          kb[cb] = sb;
          const ab = Math.floor(kb[0] / Mb),
            Tb = Math.floor(kb[1] / Mb),
            Ib = Math.floor(kb[2] / Mb);
          !bb.isDrawn(ab, Tb, Ib) && bb.hasParts(ab, Tb, Ib) && Wb.add(`${ab},${Tb},${Ib}`)
        }
        if (Tb && bb.occluders[ab]) return;
        Xb = ab
      }
    }

    function AU(bb, cb) {
      return bb.group - cb.group || bb.nearest - cb.nearest
    }
    class wU {
      constructor(bb, cb) {
        this.device = bb, this.pC = cb, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var bb;
        const cb = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.next++;
        if (8 * cb >= this.data.length) {
          const bb = new Float32Array(2 * this.data.length);
          bb.set(this.data), this.data = bb, this.words = new Uint32Array(bb.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.pC()
        }
        return cb
      }
      release(bb) {
        this.free.push(bb)
      }
      set(bb, cb, sb, kb, Wb) {
        const ab = 8 * bb + Lk;
        this.data[ab] = cb, this.data[ab + 1] = sb, this.data[ab + 2] = kb, this.setVisibility(bb, Wb)
      }
      setVisibility(bb, cb) {
        this.data[8 * bb + uk] = cb, this.markDirty(bb, bb)
      }
      setFaces(bb, cb, sb) {
        const kb = 8 * bb;
        this.words[kb + Yk] = cb, this.words[kb + hk] = sb, this.markDirty(bb, bb)
      }
      markDirty(bb, cb) {
        this.dirtyMin = Math.min(this.dirtyMin, bb), this.dirtyMax = Math.max(this.dirtyMax, cb)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const rU = Vk,
      oU = !0;
    const SU = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: rU.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      RU = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class vU {
      constructor(bb) {
        this.device = bb, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(nk), this.dirLightUniforms = this.frameUniforms.subarray(Xk.dirLights, Xk.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Hc.c)(), this.faceGroups = !0, this.visibilityGraph = oU, this.visCull = oU, this.visCheck = !1, this.visCullMinDistance = zU.f, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new pU, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Qm = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new YU(bb, ((bb, cb) => this.recordsGroup(bb, cb))), this.slots = new wU(bb, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = cc(bb), this.frameLayout = bb.createBindGroupLayout({
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
        }), this.frameBuffer = bb.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = bb.createSampler({
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
          bind: (bb, cb) => this.createBinding(this.opaqueRenderable, cb, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (bb, cb) => this.createBinding(this.transparentRenderable, cb, !0)
        }
      }
      installSceneDepth(bb, cb) {
        this.sceneDepth = new hU(this.device, this.transparentRenderable, bb, cb)
      }
      createFrameBindGroup() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== bb && void 0 !== bb ? bb : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== cb && void 0 !== cb ? cb : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(bb, cb) {
        const sb = null !== cb && void 0 !== cb ? cb : bb;
        let kb = this.recordsGroups.get(sb);
        return kb || (kb = this.createFrameBindGroup(bb, cb), this.recordsGroups.set(sb, kb)), kb
      }
      setChunkMesh(bb, cb, sb) {
        var kb;
        let Wb = this.chunks.get(bb);
        Wb ? this.geometry.release(Wb) : (Wb = {
          mesh: bb,
          slot: this.slots.allocate(),
          origin: [sb[0], sb[1], sb[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: bb.visibility,
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
        }, this.chunks.set(bb, Wb), this.writeSlot(Wb)), Wb.material = bb.material ? this.materialFor(bb.material) : null, Wb.packed = !!cb.packedVertices, Wb.vertexCount = (0, mU.h)(cb), Wb.faceCount = Wb.vertexCount / 4;
        const ab = null !== (kb = cb.faceGroups) && void 0 !== kb ? kb : null;
        if (Wb.faceGroups = ab, ab) {
          const bb = KU.i;
          Wb.planePX = ab[bb], Wb.planeNX = ab[bb + 1], Wb.planePY = ab[bb + 2], Wb.planeNY = ab[bb + 3], Wb.planePZ = ab[bb + 4], Wb.planeNZ = ab[bb + 5]
        }
        this.drawWhole(Wb), 0 !== Wb.faceCount && (this.geometry.set(Wb, cb) ? (Wb.packed && this.slots.setFaces(Wb.slot, Wb.vertices.start + Wb.faceCount, Wb.faceCount), cb.Jm && this.setChunkMeshLight(bb, cb.Jm)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Wb.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(bb, cb) {
        const sb = this.chunks.get(bb);
        sb && this.geometry.setLight(sb, cb)
      }
      drawStats() {
        let bb = this.transparent.length;
        for (const cb of this.opaqueBatches) bb += cb.meshes.length;
        return {
          drawn: bb,
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
      removeChunkMesh(bb) {
        const cb = this.chunks.get(bb);
        cb && (this.geometry.release(cb), this.slots.release(cb.slot), this.chunks.delete(bb))
      }
      remeshLost(bb, cb) {
        this.geometry.release(cb), cb.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** cb.lostRemeshes++);
        const sb = bb.fX,
          [kb, Wb, ab] = sb.Ekb(cb.origin[0], cb.origin[1], cb.origin[2]),
          Tb = sb.Gl.Kl(kb, Wb, ab);
        Tb && (Tb.il = !0, Tb.Al = !0, sb.Ol(Tb, !1))
      }
      chooseFaceRanges(bb, cb, sb) {
        const kb = this.faceRanges;
        bb.faceMask = sb, bb.rangeCount = (0, ZU.m)(cb, sb, kb), bb.first0 = kb[0], bb.count0 = kb[1], bb.first1 = kb[2], bb.count1 = kb[3]
      }
      drawWhole(bb) {
        bb.faceMask = -1, bb.faceEpoch = -1, bb.rangeCount = 1, bb.first0 = 0, bb.count0 = bb.faceCount
      }
      writeSlot(bb) {
        const [cb, sb, kb] = this.originOffset;
        this.slots.set(bb.slot, bb.origin[0] - cb, bb.origin[1] - sb, bb.origin[2] - kb, bb.visibility)
      }
      materialFor(bb) {
        const cb = this.materials.get(bb);
        if (cb) return cb;
        const sb = QU(bb);
        if (!sb) return this.warnOnce(`material:${bb.name}`, `Lite terrain cannot draw material "${bb.name}"; its chunks are skipped.`), null;
        const {
          model: kb,
          atlas: Wb,
          texture: ab,
          animated: Tb,
          uniformData: Ub
        } = sb, Ib = {
          id: this.materials.size,
          model: kb,
          texture: ab,
          animated: Tb,
          uniformData: Ub,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${bb.name}`,
            size: Ub.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: sb.liquid,
          customRenderMat: sb.customRenderMat,
          atlasCount: 0,
          uR: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(bb, Ib), this.device.queue.writeBuffer(Ib.uniformBuffer, 0, Ub), Ib.ready = this.createMaterialBindGroup(Ib, Wb).catch((cb => {
          console.error(`Lite terrain failed to load the textures of material "${bb.name}"`, cb)
        })), Ib
      }
      materialLayout(bb) {
        const cb = function(bb) {
            const cb = ["uniforms"];
            if ("atlas" === bb.texture) {
              bb.animated && cb.push("animData"), cb.push("sampler");
              for (let sb = 0; sb < bb.atlasCount; sb++) cb.push("textureArray")
            } else "single" === bb.texture && cb.push("sampler", "texture");
            return cb
          }(bb),
          sb = cb.join(",");
        let kb = this.materialLayouts.get(sb);
        if (!kb) {
          const bb = GPUShaderStage.FRAGMENT;
          kb = this.device.createBindGroupLayout({
            label: `terrain-material-${sb}`,
            entries: cb.map(((cb, sb) => {
              switch (cb) {
                case "uniforms":
                  return {
                    binding: sb, visibility: GPUShaderStage.VERTEX | bb, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: sb, visibility: GPUShaderStage.VERTEX | bb, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: sb, visibility: bb, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: sb, visibility: bb, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: sb, visibility: bb, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(sb, kb)
        }
        return kb
      }
      async createMaterialBindGroup(bb, cb) {
        const sb = [{
          buffer: bb.uniformBuffer
        }];
        if (cb) {
          const {
            urls: kb,
            pixels: Wb,
            layerWidth: ab
          } = cb.sources, Tb = await Promise.all(kb.map(((bb, cb) => {
            var sb;
            return AW(this.device, bb, null !== (sb = null === Wb || void 0 === Wb ? void 0 : Wb[cb]) && void 0 !== sb ? sb : null, ab)
          })));
          bb.atlasCount = Tb.length, bb.uR = Tb[0].layerWidth, bb.atlasLayers = Tb[0].layers, cb.animDataPerTex && sb.push({
            buffer: iW(this.device, Float32Array.from(cb.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), sb.push(this.sampler);
          for (const bb of Tb) sb.push(bb.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === bb.texture) {
          const {
            url: cb
          } = bb.model.diffuseTexture.source, {
            pixels: kb,
            width: Wb,
            height: ab
          } = await qW(cb);
          sb.push(this.sampler), sb.push(GW(this.device, kb, Wb, ab, 1, `terrain-${cb}`).createView({
            dimension: "2d"
          }))
        }
        const kb = this.materialLayout(this.programKey(bb, !1));
        bb.bindGroupLayout = kb, bb.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${bb.model.name}`,
          layout: kb,
          entries: sb.map(((bb, cb) => ({
            binding: cb,
            resource: bb
          })))
        })
      }
      programKey(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const kb = sb ? sb.lighting : this.lighting,
          Wb = sb ? sb.Qm : this.Qm,
          ab = {
            texture: bb.texture,
            atlasCount: bb.atlasCount,
            uR: bb.uR,
            atlasLayers: bb.atlasLayers,
            animated: bb.animated,
            alphaTest: bb.model.transparencyMode === Jb.m.alphaTest,
            lighting: kb,
            dirLightCount: sb ? sb.dirLightCount : this.dirLightCount,
            packed: cb
          };
        if (!Wb) return ab;
        const Tb = this.shaderPackFields(bb, Wb),
          Ub = "atlas" === bb.texture && bb.model.transparencyMode === Jb.m.opaque && Uk(Tb.packVariant);
        return {
          ...ab,
          ...Tb,
          alphaTest: ab.alphaTest || Ub
        }
      }
      shaderPackFields(bb, cb) {
        return bb.customRenderMat ? ak : function(bb, cb) {
          if (!bb) return ak;
          const sb = bb.defineFor(cb ? "liquid" : "terrain");
          return 0 === sb ? ak : {
            packVariant: sb,
            liquid: cb
          }
        }(cb, bb.liquid)
      }
      isBlended(bb) {
        return bb.model.transparencyMode === Jb.m.alphaBlend
      }
      shaderModule(bb, cb) {
        let sb = this.modules.get(bb);
        return sb || (sb = this.device.createShaderModule({
          label: cb,
          code: bb
        }), this.modules.set(bb, sb)), sb
      }
      pipelineFor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!bb.bindGroupLayout) return null;
        const Wb = this.programKey(bb, cb);
        if (!kb) return this.pipelineOf(bb, Wb, sb);
        const ab = {
            ...Wb,
            resting: kb
          },
          Tb = this.pipelineId(bb, ab, sb),
          Ub = this.pipelines.get(Tb);
        if (Ub) return Ub;
        const Ib = this.pipelineOf(bb, Wb, sb);
        return Ib && void 0 === Ub && this.startPipeline(Tb, bb, ab, sb), Ib
      }
      pipelineOf(bb, cb, sb) {
        const kb = this.pipelineId(bb, cb, sb),
          Wb = this.pipelines.get(kb);
        return void 0 !== Wb ? Wb : (this.startPipeline(kb, bb, cb, sb), null)
      }
      pipelineId(bb, cb, sb) {
        return FU(cb, this.isBlended(bb), bb.model.backFaceCulling, sb)
      }
      pipelineBuild(bb, cb, sb) {
        var kb;
        const Wb = this.pipelineId(bb, cb, sb);
        return null !== (kb = this.builds.get(Wb)) && void 0 !== kb ? kb : this.startPipeline(Wb, bb, cb, sb)
      }
      startPipeline(bb, cb, sb, kb) {
        var Wb;
        this.pipelines.set(bb, null);
        const ab = Pk(sb),
          Tb = this.isBlended(cb),
          Ub = this.shadowMask && kb._depthStencilFormat ? function(bb, cb, sb, kb) {
            if (void 0 === bb.packVariant || bb.liquid || cb) return "none";
            const Wb = (0, Bc.e)(bb.packVariant);
            return null === Wb || void 0 === Wb || !Wb.sunShadow || !Ks(Wb, sb) || Wb.discards || bb.alphaTest && Uk(bb.packVariant) ? "none" : kb ? "edge" : "plain"
          }(sb, Tb, !!this.sunShadow, kb._sampleCount > 1) : "none";
        let Ib;
        try {
          Ib = Dk(sb, !!this.sunShadow, Ub)
        } catch (Qb) {
          if (!Mk(sb)) throw Qb;
          return this.failedPackBuild(bb, sb, ab, Qb)
        }
        const Hb = this.shaderModule(Ib, ab),
          fb = [];
        sb.packed || (fb.push(function(bb, cb) {
          const sb = [{
            shaderLocation: rU.position,
            offset: hc.d.hc,
            format: "float32x3"
          }, {
            shaderLocation: rU.normal,
            offset: hc.d.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: rU.color,
            offset: hc.d.colorOffset,
            format: "unorm8x4"
          }];
          return bb && sb.push({
            shaderLocation: rU.uv,
            offset: hc.d.uvOffset,
            format: "float32x2"
          }), cb && sb.push({
            shaderLocation: rU.blockFlagWords,
            offset: hc.d.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: hc.d.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: sb
          }
        }("none" !== sb.texture, Mk(sb))), sb.lighting && fb.push(SU));
        const Mb = cb.model.backFaceCulling,
          Xb = {
            label: ab,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, cb.bindGroupLayout, ...wa(this.device, sb, !!this.sunShadow, "none" !== Ub)]
            }),
            vertex: {
              module: Hb,
              entryPoint: "mainVertex",
              buffers: fb
            },
            fragment: xb({
              module: Hb,
              entryPoint: "mainFragment"
            }, kb, Tb ? RU : null),
            depthStencil: kb._depthStencilFormat ? {
              format: kb._depthStencilFormat,
              depthCompare: null !== (Wb = kb._depthCompare) && void 0 !== Wb ? Wb : sc,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: kb._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Mb ? "back" : "none"
            }
          },
          nb = sb.resting ? 0 : 1;
        this.compiling += nb;
        const mb = "none" === Ub ? this.device.createRenderPipelineAsync(Xb) : this.startMaskPipelines(Hb, Xb, "edge" === Ub);
        mb.then((cb => {
          this.compiling -= nb, this.pipelines.set(bb, cb)
        }), (bb => {
          this.compiling -= nb, console.error(`Lite terrain pipeline ${ab} failed`, bb), GU(sb, ab, Hb, bb)
        }));
        const lb = {
          name: ab,
          module: Hb,
          built: mb
        };
        return this.builds.set(bb, lb), lb
      }
      startMaskPipelines(bb, cb, sb) {
        const kb = cb.depthStencil,
          Wb = this.device.createRenderPipelineAsync(sb ? cb : {
            ...cb,
            depthStencil: {
              ...kb,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          ab = this.device.createRenderPipelineAsync({
            ...cb,
            label: `${cb.label}-prepass`,
            fragment: {
              module: bb,
              entryPoint: "prepassFragment",
              targets: [{
                format: JU
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Wb, ab]).then((bb => {
          let [cb, sb] = bb;
          return this.prepassOf.set(cb, sb), this.maskPipelines++, cb
        }))
      }
      failedPackBuild(bb, cb, sb, kb) {
        console.error(`Lite terrain pipeline ${sb} failed`, kb), GU(cb, sb, null, kb);
        const Wb = Promise.reject(kb);
        Wb.catch((() => {}));
        const ab = {
          name: sb,
          module: null,
          built: Wb
        };
        return this.builds.set(bb, ab), ab
      }
      checkShaderPack(bb) {
        return EU(bb, {
          device: this.device,
          target: this.target,
          material: bb => this.materialFor(bb),
          programKey: (bb, cb, sb) => this.programKey(bb, cb, sb),
          pipelineBuild: (bb, cb, sb) => this.pipelineBuild(bb, cb, sb)
        })
      }
      createBinding(bb, cb, sb) {
        return this.target = cb, {
          renderable: bb,
          pipeline: Tc(this.device, cb),
          draw: bb => {
            this.geometry.setDrawing(!0);
            try {
              return sb ? this.drawTransparent(bb, cb) : this.drawOpaque(bb, cb)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(bb, cb) {
        var sb, kb, Wb, ab;
        const {
          eX: Tb
        } = bb;
        this.lighting = bb.bQ;
        const Ub = (0, nU.s)(cb);
        this.dirLightCount = Math.min(Ub, 4), this.Qm = null !== (sb = Tb.Qm) && void 0 !== sb ? sb : null, Ub > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(bb, cb), this.animateMaterials(cb.animTick);
        const Ib = Tb.iX,
          Hb = Ib[0] !== this.originOffset[0] || Ib[1] !== this.originOffset[1] || Ib[2] !== this.originOffset[2];
        Hb && (this.originOffset[0] = Ib[0], this.originOffset[1] = Ib[1], this.originOffset[2] = Ib[2]);
        const fb = cb.eye;
        this.eye[0] = fb[0], this.eye[1] = fb[1], this.eye[2] = fb[2], this.writeShaderPackInputs();
        const Mb = cb.projectionMatrix,
          Xb = 0 === Mb[15];
        let nb = 0;
        (Hb || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: mb
        } = this;
        Uc(this.transparentRenderable._worldCenter, cb, Wc), this.resetBatches(Xb), this.transparent.length = 0, this.unlit.length = 0;
        const lb = Tb.fX.h_,
          Qb = lb / 2 * Math.sqrt(3);
        let eb = 0;
        const Cb = !!this.Qm && Tk(this.Qm.defineFor("liquid"));
        let Nb = !1;
        const Vb = null !== (kb = null === (Wb = Tb.HV) || void 0 === Wb ? void 0 : Wb.visibility) && void 0 !== kb ? kb : null,
          Lb = this.visCull && Xb && 0 === this.compiling && null !== Vb && Tb.fX.osb[0] >= this.visCullMinDistance ? this.target : null,
          ub = this.visPassable,
          Yb = this.visCandidates,
          hb = this.visCandidateBatches;
        ub.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let Jb = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let gb = 0;
        const Bb = (bb, sb) => {
          if (!sb) return this.transparent.push(bb), void(gb += 2 * bb.faceCount);
          if (null !== bb.faceGroups && sb.faceCull) {
            if (0 === nb && (nb = (0, ZU.d)(Mb, cb.renderWidth, cb.renderHeight), nb !== this.faceFocalPx && (this.faceFocalPx = nb, mb = ++this.faceEpoch)), bb.faceEpoch !== mb) {
              bb.faceEpoch = mb;
              const cb = Math.sqrt(bb.distance) + Qb,
                sb = (0, ZU.j)(bb.planePX, bb.planeNX, bb.planePY, bb.planeNY, bb.planePZ, bb.planeNZ, this.eye[0] - (bb.origin[0] - this.originOffset[0]), this.eye[1] - (bb.origin[1] - this.originOffset[1]), this.eye[2] - (bb.origin[2] - this.originOffset[2]), (0, ZU.f)(cb, nb));
              sb !== bb.faceMask && this.chooseFaceRanges(bb, bb.faceGroups, sb)
            }
            if (0 === bb.rangeCount) return
          } else - 1 !== bb.faceMask && this.drawWhole(bb);
          sb.meshes.push(bb), gb += 2 * ((bb.rangeCount > 0 ? bb.count0 : 0) + (bb.rangeCount > 1 ? bb.count1 : 0))
        };
        for (const yb of this.chunks.values()) {
          Hb && this.writeSlot(yb);
          const bb = yb.mesh.visibility;
          bb !== yb.visibility && (yb.visibility = bb, this.slots.setVisibility(yb.slot, bb));
          const {
            material: sb
          } = yb;
          this.geometry.lost(yb) && performance.now() >= yb.lostRetryAt && this.remeshLost(Tb, yb);
          const kb = !(null === sb || void 0 === sb || !sb.bindGroup) && this.geometry.backed(yb),
            Wb = kb && this.lighting && !yb.vertices.page.twin;
          if (Lb && (Number.isNaN(yb.key) && (yb.ci = Math.floor(yb.origin[0] / lb), yb.cj = Math.floor(yb.origin[1] / lb), yb.ck = Math.floor(yb.origin[2] / lb), yb.key = (0, qU.g)(yb.ci, yb.cj, yb.ck)), (!kb || bb < 1 || Wb || !this.batchDraws(sb, yb.packed, Lb)) && this.visSeeThrough(yb, Lb) && ub.add(yb.key)), !kb) continue;
          Wb || (yb.lostRemeshes = 0);
          const ab = yb.origin[0] - this.originOffset[0],
            Ub = yb.origin[1] - this.originOffset[1],
            Ib = yb.origin[2] - this.originOffset[2];
          if (!(0, cU.c)(cb.frustum, ab, Ub, Ib, lb)) continue;
          const fb = ab + lb / 2 - this.eye[0],
            Mb = Ub + lb / 2 - this.eye[1],
            nb = Ib + lb / 2 - this.eye[2];
          if (yb.distance = fb * fb + Mb * Mb + nb * nb, this.lighting && !yb.lit && (eb = Math.max(eb, yb.vertexCount), this.unlit.push(yb)), Wb) continue;
          const mb = this.isBlended(sb) ? null : this.batchFor(sb, yb.packed, yb.vertices.page, 1 === bb, Xb);
          Lb ? (Yb[Jb] = yb, hb[Jb++] = mb) : Bb(yb, mb)
        }
        const tb = Lb ? this.sweepVisibility(bb, cb, Vb) : null;
        null === (ab = (0, Da.z)(Tb)) || void 0 === ab || ab.update(cb.frustum, this.originOffset, lb, tb);
        for (let yb = 0; yb < Jb; yb++) {
          const bb = Yb[yb];
          !tb || tb.isDrawn(bb.ci, bb.cj, bb.ck) ? Bb(bb, hb[yb]) : (this.visCulledParts++, this.visCulledTriangles += 2 * bb.faceCount)
        }
        for (const yb of this.transparent) Nb ||= Cb && yb.material.liquid && !yb.material.customRenderMat;
        this.submittedTriangles = gb, tb && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(bb, cb, tb)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Nb) : Nb && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && eb > 0 && this.geometry.lightFullSky(this.unlit, eb);
        for (const yb of this.opaqueBatches) this.chunkSorter.sort(yb.meshes, 1) || yb.meshes.sort(xU);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(jU)
      }
      sweepVisibility(bb, cb, sb) {
        const {
          fX: kb
        } = bb.eX, Wb = kb.h_, ab = this.visPassable, Tb = this.eye[0] + this.originOffset[0], Ub = this.eye[1] + this.originOffset[1], Ib = this.eye[2] + this.originOffset[2];
        if (!sb.eyeClear(Tb, Ub, Ib, cb.near, cb.projectionMatrix, kb)) return null;
        const [Hb, fb] = kb.osb, Mb = sb.update(Tb, Ub, Ib, Wb, Hb, fb, ab);
        return this.visSweeps = sb.sweeps, Mb ? sb : null
      }
      visSeeThrough(bb, cb) {
        const {
          material: sb
        } = bb;
        return (!sb || !this.isBlended(sb)) && (bb.mesh.visibility < 1 || !(null !== sb && void 0 !== sb && sb.bindGroup) || bb.faceCount > 0 && (!this.geometry.backed(bb) || this.lighting && !bb.vertices.page.twin) || !this.batchDraws(sb, bb.packed, cb))
      }
      batchDraws(bb, cb, sb) {
        var kb;
        const Wb = cb ? 2 : 0;
        if (bb === this.visDrawsMaterial && function(bb, cb) {
            return 0 !== (bb & 1 << cb)
          }(this.visDrawsBits, Wb)) return 0 !== (this.visDrawsBits & 2 << Wb);
        let ab = null !== (kb = this.visBatchDraws.get(bb)) && void 0 !== kb ? kb : 0;
        if (!(ab & 1 << Wb)) {
          ab |= 1 << Wb | (!!bb.bindGroupLayout && this.canDraw(bb, cb) && !!this.pipelines.get(this.pipelineId(bb, this.programKey(bb, cb), sb)) ? 2 << Wb : 0), this.visBatchDraws.set(bb, ab)
        }
        return this.visDrawsMaterial = bb, this.visDrawsBits = ab, 0 !== (ab & 2 << Wb)
      }
      runVisCheck(bb, cb, sb) {
        const {
          eX: kb
        } = bb, {
          fX: Wb
        } = kb, ab = Wb.h_, Tb = new Set;
        for (const nb of this.chunks.values()) Tb.add(nb.key);
        const Ub = uW.Matrix.FromArray(cb.viewProjectionMatrix).invert(),
          [Ib, Hb, fb] = this.originOffset,
          Mb = new uW.Fm,
          Xb = function(bb, cb, sb, kb) {
            const Wb = new Set;
            for (let ab = 0; ab < 27; ab++)
              for (let Tb = 0; Tb < 48; Tb++) {
                const Ub = sb((Tb + .5) / 48 * 2 - 1, (ab + .5) / 27 * 2 - 1);
                dU(bb, cb, [Ub[0] - cb[0], Ub[1] - cb[1], Ub[2] - cb[2]], kb, Wb)
              }
            return Wb
          }({
            hG: (bb, cb, sb) => Wb.hG(bb, cb, sb),
            occluders: sb.occluders,
            opaque: sb.opaque,
            qm: ab,
            isDrawn: (bb, cb, kb) => sb.isDrawn(bb, cb, kb),
            hasParts: (bb, cb, sb) => Tb.has((0, qU.g)(bb, cb, sb))
          }, [this.eye[0] + Ib, this.eye[1] + Hb, this.eye[2] + fb], ((bb, cb) => (uW.Fm.TransformCoordinatesFromFloatsToRef(bb, cb, .5, Ub, Mb), [Mb.x + Ib, Mb.y + Hb, Mb.z + fb])), (Wb.osb[0] + 1) * ab);
        this.visViolations = Xb.size;
        for (const nb of Xb) this.warnOnce(`vis:${nb}`, `Lite terrain cave culling skipped chunk ${nb}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var bb;
        null !== (bb = this.Qm) && void 0 !== bb && bb.isRunning() && (this.shaderPackInputs ??= new ra(this.device, this.Qm.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Qm, this.eye, this.lighting))
      }
      bindShaderPackInputs(bb, cb, sb) {
        var kb, Wb, ab, Tb;
        let Ub = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: Ib
        } = this.shaderPackFields(cb, sb);
        if (void 0 === Ib) return;
        this.shaderPackInputs || (this.shaderPackInputs = new ra(this.device, sb.textureLayers(), this.sunShadow), this.shaderPackInputs.write(sb, this.eye, this.lighting));
        const Hb = Tk(Ib) ? null !== (kb = null === (Wb = this.sceneDepth) || void 0 === Wb ? void 0 : Wb.view) && void 0 !== kb ? kb : this.standIn() : null,
          fb = Ub ? null !== (ab = null === (Tb = this.shadowMask) || void 0 === Tb ? void 0 : Tb.view) && void 0 !== ab ? ab : this.standIn() : null;
        this.shaderPackInputs.bind(bb, Hb, Aa(Ib, !!this.sunShadow), fb)
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
        var bb, cb;
        return null !== (bb = null === (cb = this.shaderPackInputs) || void 0 === cb ? void 0 : cb.bindGroupFor(null, !0)) && void 0 !== bb ? bb : null
      }
      resetBatches(bb) {
        const cb = this.opaqueBatches;
        let sb = 0;
        for (const kb of cb) kb.meshes.length > 0 && (kb.meshes.length = 0, kb.faceCull = this.batchFaceCull(kb.material, bb), cb[sb++] = kb);
        cb.length = sb
      }
      orderBatches() {
        const bb = this.opaqueBatches;
        for (let cb = 0; cb < bb.length; cb++) {
          const sb = bb[cb];
          sb.group = cb;
          for (let kb = 0; kb < cb; kb++) {
            const cb = bb[kb];
            if (cb.material === sb.material && cb.packed === sb.packed) {
              sb.group = cb.group;
              break
            }
          }
          sb.nearest = sb.meshes.length > 0 ? sb.meshes[0].distance : 1 / 0
        }
        bb.sort(AU)
      }
      batchFor(bb, cb, sb, kb, Wb) {
        for (const Tb of this.opaqueBatches)
          if (Tb.material === bb && Tb.packed === cb && Tb.page === sb && Tb.resting === kb) return Tb;
        const ab = {
          material: bb,
          packed: cb,
          page: sb,
          resting: kb,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(bb, Wb)
        };
        return this.opaqueBatches.push(ab), ab
      }
      batchFaceCull(bb, cb) {
        return !(!cb || !(0, KU.n)(bb.model)) && (!this.Qm || ! function(bb) {
          var cb;
          return !(null === (cb = (0, Bc.e)(bb)) || void 0 === cb || !cb.movesVertices)
        }(this.shaderPackFields(bb, this.Qm).packVariant))
      }
      writeFrameUniforms(bb, cb) {
        const sb = this.frameUniforms,
          kb = Xk;
        if ((0, nU.u)(bb, sb), sb[kb.fogInfos] = cb.fogEnabled ? cb.fogMode : 0, sb[kb.fogInfos + 1] = cb.fogStart, sb[kb.fogInfos + 2] = cb.fogEnd, sb[kb.fogInfos + 3] = cb.fogDensity, sb.set(cb.fogColour, kb.fogColour), sb[kb.outputHeight] = cb.renderHeight, sb.set(cb.ambientColour, kb.sceneAmbient), (0, nU.q)(cb, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const cb = (0, mU.j)(bb.Vl, bb.wm, bb.rm);
          for (let bb = 0; bb < 4; bb++) sb[kb.aoLevels + bb] = cb[bb] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, sb)
      }
      animateMaterials(bb) {
        const cb = mk.anim;
        for (const sb of this.materials.values()) sb.animated && (sb.uniformData[cb] = bb, this.device.queue.writeBuffer(sb.uniformBuffer, 4 * cb, sb.uniformData, cb, 1))
      }
      canDraw(bb, cb) {
        return !("atlas" === bb.texture && !cb) || (this.warnOnce(`stride:${bb.id}`, `Lite terrain: material "${bb.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(bb, cb) {
        let sb = 0;
        bb.setBindGroup(1, this.frameBindGroup);
        for (const kb of this.opaqueBatches) {
          if (!kb.meshes.length || !this.canDraw(kb.material, kb.packed)) continue;
          const Wb = this.pipelineFor(kb.material, kb.packed, cb, kb.resting);
          Wb && (bb.setPipeline(Wb), bb.setBindGroup(2, kb.material.bindGroup), this.Qm && this.bindShaderPackInputs(bb, kb.material, this.Qm, this.prepassOf.has(Wb)), sb += this.drawBatch(bb, kb))
        }
        return sb
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(bb, cb, sb) {
        const kb = this.target,
          Wb = this.Qm;
        if (!kb || !Wb || 0 === this.maskPipelines) return 0;
        let ab = 0,
          Tb = null;
        this.geometry.setDrawing(!0);
        try {
          for (const Ub of this.opaqueBatches) {
            if (!Ub.meshes.length || !this.canDraw(Ub.material, Ub.packed)) continue;
            const Ib = this.pipelineFor(Ub.material, Ub.packed, kb, Ub.resting),
              Hb = Ib && this.prepassOf.get(Ib);
            Hb && (Tb || (Tb = bb.beginRenderPass(cb), Tb.setBindGroup(0, sb), Tb.setBindGroup(1, this.frameBindGroup)), Tb.setPipeline(Hb), Tb.setBindGroup(2, Ub.material.bindGroup), this.bindShaderPackInputs(Tb, Ub.material, Wb, !0), ab += this.drawBatch(Tb, Ub))
          }
        } finally {
          var Ub;
          null === (Ub = Tb) || void 0 === Ub || Ub.end(), this.geometry.setDrawing(!1)
        }
        return ab
      }
      drawBatch(bb, cb) {
        let sb = 0;
        for (const kb of cb.meshes) {
          const {
            rangeCount: cb
          } = kb;
          cb > 0 && (sb += this.geometry.draw(bb, kb, this.lighting, kb.first0, kb.count0), cb > 1 && (sb += this.geometry.draw(bb, kb, this.lighting, kb.first1, kb.count1)))
        }
        return sb
      }
      drawTransparent(bb, cb) {
        let sb = 0,
          kb = null,
          Wb = null;
        bb.setBindGroup(1, this.frameBindGroup);
        for (const ab of this.transparent) {
          const Tb = ab.material;
          if (!this.canDraw(Tb, ab.packed)) continue;
          const Ub = this.pipelineFor(Tb, ab.packed, cb);
          Ub && (Ub !== kb && (bb.setPipeline(Ub), kb = Ub, this.Qm && this.bindShaderPackInputs(bb, Tb, this.Qm)), Tb !== Wb && (bb.setBindGroup(2, Tb.bindGroup), Wb = Tb), sb += this.geometry.draw(bb, ab, this.lighting))
        }
        return sb
      }
    }

    function FU(bb, cb, sb, kb) {
      return `${Pk(bb)}|${bb.atlasLayers}|${bb.uR}|${cb}|${sb}|${kb._colorFormat}|${kb._depthStencilFormat}|${kb._sampleCount}`
    }

    function xU(bb, cb) {
      return bb.distance - cb.distance
    }

    function jU(bb, cb) {
      return cb.distance - bb.distance
    }
    class pU {
      constructor() {
        this.left = []
      }
      sort(bb, cb) {
        for (let sb = 0; sb < bb.length; sb++) {
          const cb = bb[sb].distance;
          if (cb - cb !== 0) return !1
        }
        return this.sortRange(bb, 0, bb.length, cb), !0
      }
      sortRange(bb, cb, sb, kb) {
        if (sb - cb <= 16) {
          for (let Wb = cb + 1; Wb < sb; Wb++) {
            const sb = bb[Wb],
              ab = kb * sb.distance;
            let Tb = Wb - 1;
            for (; Tb >= cb && kb * bb[Tb].distance > ab; Tb--) bb[Tb + 1] = bb[Tb];
            bb[Tb + 1] = sb
          }
          return
        }
        const Wb = cb + sb >>> 1;
        if (this.sortRange(bb, cb, Wb, kb), this.sortRange(bb, Wb, sb, kb), kb * bb[Wb - 1].distance <= kb * bb[Wb].distance) return;
        const {
          left: ab
        } = this, Tb = Wb - cb;
        for (let fb = 0; fb < Tb; fb++) ab[fb] = bb[cb + fb];
        let Ub = 0,
          Ib = Wb,
          Hb = cb;
        for (; Ub < Tb && Ib < sb;) bb[Hb++] = kb * bb[Ib].distance < kb * ab[Ub].distance ? bb[Ib++] : ab[Ub++];
        for (; Ub < Tb;) bb[Hb++] = ab[Ub++]
      }
    }
    const bI = Math.ceil(102);

    function cI(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : cb;
      const ab = Math.min(cb, sb),
        Tb = new Uint32Array(bs(kb));
      for (let Ub = 0; Ub < kb; Ub++) {
        const cb = Math.floor(Ub * ab / kb),
          sb = Math.max(cb + 1, Math.floor((Ub + 1) * ab / kb));
        for (let Ib = 0; Ib < kb; Ib++) {
          const Hb = Math.floor(Ib * ab / kb),
            fb = Math.max(Hb + 1, Math.floor((Ib + 1) * ab / kb));
          let Mb = 0;
          for (let kb = cb; kb < sb; kb++)
            for (let cb = Hb; cb < fb; cb++) bb[kb * Wb + cb] >= bI && Mb++;
          if (2 * Mb >= (sb - cb) * (fb - Hb)) {
            const bb = Ib + kb * Ub;
            Tb[bb >>> 5] |= 1 << (31 & bb)
          }
        }
      }
      return Tb
    }

    function sI(bb) {
      return Math.max(1, Math.min(16, bb))
    }
    class kI {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = bb, this.loadTexture = cb, this.warn = sb, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(bb, cb) {
        return (bb.nD !== this.builtVersion || this.blockCaster.length !== cb) && (this.build(bb, cb), !0)
      }
      build(bb, cb) {
        this.builtVersion = bb.nD;
        const sb = new Uint16Array(cb),
          kb = new Map;
        for (let Wb = 1; Wb < cb; Wb++) {
          const cb = this.classify(bb, Wb, kb);
          if (null === cb || cb === vc) {
            sb[Wb] = null === cb ? 0 : vc;
            continue
          }
          let ab = this.byKey.get(cb.key);
          void 0 === ab && (ab = this.allocate(cb), this.byKey.set(cb.key, ab)), sb[Wb] = ab
        }
        this.blockCaster = sb, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(bb, cb) {
        const sb = bb.lF[cb];
        if ("function" !== typeof sb) return sb;
        try {
          return sb()
        } catch (kb) {
          return this.warnOnce(`Sun shadows: no caster option for block ${cb}: ${kb instanceof Error?kb.message:String(kb)}`), null
        }
      }
      classify(bb, cb, sb) {
        const kb = this.option(bb, cb);
        if ("none" === kb) return null;
        if (kb && kb.planes.length > 0) {
          const bb = kb.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(bb)}`,
            planes: bb
          }
        }
        if (bb.Cn[cb]) return null;
        const Wb = bb.Vn[cb] ? bb.lD(cb) : null;
        if (Wb && Wb.length >= 6) {
          const bb = function(bb) {
            const cb = new Uint32Array(16);
            for (let sb = 0; sb + 6 <= bb.length; sb += 6) {
              const kb = [0, 1, 2].map((cb => Math.max(0, Math.ceil(8 * bb[sb + cb] - .5)))),
                Wb = [0, 1, 2].map((cb => Math.min(7, Math.floor(8 * bb[sb + cb + 3] - .5))));
              for (let bb = kb[2]; bb <= Wb[2]; bb++)
                for (let sb = kb[1]; sb <= Wb[1]; sb++)
                  for (let ab = kb[0]; ab <= Wb[0]; ab++) {
                    const kb = ab + 8 * (sb + 8 * bb);
                    cb[kb >>> 5] |= 1 << (31 & kb)
                  }
            }
            return cb
          }(Wb);
          return function(bb) {
            return bb.every((bb => 4294967295 === bb))
          }(bb) ? vc : bb.every((bb => 0 === bb)) ? null : {
            kind: "shape",
            key: `shape:${bb.join(",")}`,
            mask: bb
          }
        }
        if (bb.rD[cb] || !bb.Ll[cb]) return null;
        const ab = [0, 1, 2, 3, 4, 5].map((kb => {
          const Wb = bb.ul[6 * cb + kb];
          let ab = sb.get(Wb);
          return void 0 === ab && (ab = function(bb) {
            if (!bb || bb.Dl) return null;
            const {
              fR: cb,
              uR: sb,
              kR: kb
            } = bb;
            if (!cb || !sb || !(sb > 0) || void 0 === kb || !(kb >= 0)) return null;
            const Wb = cb[0],
              ab = sb * sb * 4;
            if (!Wb || Wb.byteLength < ab) return null;
            const Tb = Math.floor(Wb.byteLength / ab),
              Ub = cb[Math.floor(kb / Tb)];
            if (!Ub) return null;
            const Ib = new Uint8Array(Ub.buffer, Ub.byteOffset, Ub.byteLength),
              Hb = kb % Tb * ab;
            if (Hb + ab > Ib.length) return null;
            const fb = new Uint8Array(sb * sb);
            let Mb = !1;
            for (let Xb = 0; Xb < fb.length; Xb++) fb[Xb] = Ib[Hb + 4 * Xb + 3], Mb ||= fb[Xb] < bI;
            return Mb ? {
              alpha: fb,
              width: sb
            } : null
          }(bb.Pl(Wb)), sb.set(Wb, ab)), ab
        }));
        if (ab.every((bb => null === bb))) return vc;
        const Tb = sI(Math.max(...ab.map((bb => {
            var cb;
            return null !== (cb = null === bb || void 0 === bb ? void 0 : bb.width) && void 0 !== cb ? cb : 1
          })))),
          Ub = new Uint32Array(bs(Tb)).fill(4294967295),
          Ib = ab.map((bb => null === bb ? Ub : cI(bb.alpha, bb.width, bb.width, Tb)));
        return {
          kind: "cutout",
          key: `cutout:${Tb}:${Ib.map((bb=>bb.join(","))).join("|")}`,
          size: Tb,
          faces: Ib
        }
      }
      allocate(bb) {
        if (this.nextCaster >= cs) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const cb = this.nextCaster++;
        if (this.writeCaster(cb, Fc, 0, 0, 0), "shape" === bb.kind) {
          const sb = this.allocateMask(bb.mask.length);
          sb >= 0 && (this.sink(sb, bb.mask), this.writeCaster(cb, xc, sb, 0, 8))
        } else if ("cutout" === bb.kind) {
          const sb = bs(bb.size),
            kb = this.allocateMask(6 * sb);
          if (kb >= 0) {
            const Wb = new Uint32Array(6 * sb);
            bb.faces.forEach(((bb, cb) => {
              Wb.set(bb, cb * sb)
            })), this.sink(kb, Wb), this.writeCaster(cb, pc, kb, 0, bb.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(cb, bb.planes).finally((() => {
          this.planesLoading--
        })));
        return cb
      }
      async loadPlanes(bb, cb) {
        const sb = await Promise.all(cb.map((bb => this.texture(bb.texture))));
        if (sb.some((bb => null === bb))) return;
        const kb = sb,
          Wb = sI(Math.max(...kb.map((bb => Math.min(bb.width, bb.height))))),
          ab = bs(Wb),
          Tb = this.allocateMask(cb.length * (4 + ab));
        if (Tb < 0) return;
        const Ub = new Uint32Array(cb.length * (4 + ab)),
          Ib = 4 * cb.length;
        cb.forEach(((bb, cb) => {
          const sb = Tb + Ib + cb * ab;
          Ub.set(function(bb, cb) {
            const [sb, kb] = bb.tangent, Wb = Math.hypot(sb, kb) || 1, ab = sb / Wb, Tb = kb / Wb, Ub = bb.centre[0] * Tb - bb.centre[1] * ab, Ib = new Uint32Array(4);
            return new Float32Array(Ib.buffer, 0, 3).set([ab, Tb, Ub]), Ib[3] = cb, Ib
          }(bb, sb), 4 * cb), Ub.set(cI(kb[cb].alpha, kb[cb].width, kb[cb].height, Wb), Ib + cb * ab)
        })), this.sink(Tb, Ub), this.writeCaster(bb, jc, Tb, cb.length, Wb)
      }
      texture(bb) {
        let cb = this.textures.get(bb);
        return cb || (cb = this.loadTexture(bb).catch((cb => (this.warn(`Sun shadows: no mask for ${bb}: ${cb instanceof Error?cb.message:String(cb)}`), null))), this.textures.set(bb, cb)), cb
      }
      allocateMask(bb) {
        if (this.nextMaskWord + bb > ss) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const cb = 32768 + this.nextMaskWord;
        return this.nextMaskWord += bb, cb
      }
      writeCaster(bb, cb, sb, kb, Wb) {
        this.sink(0 + 4 * bb, Uint32Array.of(cb, sb, kb, Wb))
      }
      warnOnce(bb) {
        this.warned.has(bb) || (this.warned.add(bb), this.warn(bb))
      }
    }
    var WI = sb(37300);

    function aI(bb) {
      return !bb.il && !bb.ikb && !bb.Hl
    }

    function TI() {
      return {
        bricks: new Uint32Array(qc),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Zc)
      }
    }
    class UI {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = bb, this.writeVoxels = cb, this.writePool = sb, this.warn = kb, this.eyeChunk = null, this.slotChunk = new Array(Dc).fill(null), this.slotVersion = new Float64Array(Dc).fill(-1), this.slotPool = new Array(Dc).fill(null), this.starved = new Uint8Array(Dc), this.queue = [], this.queued = new Uint8Array(Dc), this.queueSorted = !0, this.freePool = new Uint32Array(ks), this.freeCount = ks, this.casterTable = null, this.warnedPool = !1, this.scratch = TI(), this.victimScratch = TI(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Dc), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Wb = 0; Wb < ks; Wb++) this.freePool[Wb] = 65535 - Wb
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return ks - this.freeCount
      }
      chunkAdded(bb) {
        if (null === this.eyeChunk || !this.inRadius(bb.i, bb.j, bb.k)) return;
        const cb = oc(bb.i, bb.j, bb.k);
        this.slotChunk[cb] = bb, this.slotVersion[cb] = -1, this.enqueue(cb)
      }
      update(bb, cb, sb) {
        const kb = this.casters.blockCaster;
        if (kb !== this.casterTable) {
          this.casterTable = kb;
          for (let bb = 0; bb < Dc; bb++) this.slotVersion[bb] = -1, this.slotChunk[bb] && this.enqueue(bb)
        }
        const Wb = Math.floor(bb[0] / 32),
          ab = Math.floor(bb[1] / 32),
          Tb = Math.floor(bb[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Wb || this.eyeChunk[1] !== ab || this.eyeChunk[2] !== Tb) && (this.eyeChunk = [Wb, ab, Tb], this.follow(cb), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let Ub = 0; Ub < Dc; Ub++) {
          const bb = this.slotChunk[Ub];
          bb && (bb.Scb || bb.Xl !== this.slotVersion[Ub]) && this.enqueue(Ub)
        }
        this.drain(sb), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(bb, cb) {
        this.records.set(cb, 4 * bb), this.windowTopStale = !0, this.writeVoxels(4 * bb, cb)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const bb = this.records;
        let cb = -1 / 0;
        for (let kb = 0; kb < bb.length; kb += 4) {
          const sb = 255 & bb[kb + 3];
          sb !== Oc && sb !== Gc || !this.inRadius(bb[kb], bb[kb + 1], bb[kb + 2]) || (cb = Math.max(cb, bb[kb + 1] * tc + (bb[kb + 3] >>> 8)))
        }
        const sb = cb === -1 / 0 ? 1 : cb + Ac;
        sb !== this.windowTop[0] && (this.windowTop[0] = sb, this.writeVoxels(dc, this.windowTop))
      }
      follow(bb) {
        const cb = this.eyeChunk,
          [sb, kb, Wb] = yc;
        for (let Tb = -Wb; Tb <= Wb; Tb++)
          for (let Wb = -kb; Wb <= kb; Wb++)
            for (let kb = -sb; kb <= sb; kb++) {
              var ab;
              const sb = cb[0] + kb,
                Ub = cb[1] + Wb,
                Ib = cb[2] + Tb,
                Hb = oc(sb, Ub, Ib),
                fb = this.slotChunk[Hb];
              if (fb && !fb.Scb && fb.i === sb && fb.j === Ub && fb.k === Ib) continue;
              const Mb = null !== (ab = bb(sb, Ub, Ib)) && void 0 !== ab ? ab : null;
              fb && (fb.i !== sb || fb.j !== Ub || fb.k !== Ib) && this.slotPool[Hb] && (this.release(Hb), this.record.fill(0), this.writeRecord(Hb, this.record)), this.slotChunk[Hb] = Mb, this.slotVersion[Hb] = -1, (Mb || fb) && this.enqueue(Hb)
            }
      }
      requeueStarved() {
        for (let bb = 0; bb < Dc; bb++) this.starved[bb] && this.slotChunk[bb] && this.enqueue(bb)
      }
      enqueue(bb) {
        this.queued[bb] || (this.queued[bb] = 1, this.queue.push(bb), this.queueSorted = !1)
      }
      drain(bb) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const bb = new Map;
          for (const cb of this.queue) bb.set(cb, this.slotDistance(cb));
          this.queue.sort(((cb, sb) => bb.get(sb) - bb.get(cb))), this.queueSorted = !0
        }
        const cb = performance.now();
        let sb = 0;
        const kb = [];
        for (; this.queue.length > 0 && (0 === sb || performance.now() - cb < bb);) {
          const bb = this.queue.pop(),
            cb = this.slotChunk[bb];
          !cb || cb.Scb || aI(cb) ? (this.queued[bb] = 0, this.encodeSlot(bb), sb++) : kb.push(bb)
        }
        for (let Wb = kb.length - 1; Wb >= 0; Wb--) this.queue.push(kb[Wb])
      }
      slotDistance(bb) {
        const cb = this.slotChunk[bb],
          sb = this.eyeChunk;
        return cb ? Math.max(Math.abs(cb.i - sb[0]), Math.abs(cb.j - sb[1]), Math.abs(cb.k - sb[2])) : 0
      }
      inRadius(bb, cb, sb) {
        const kb = this.eyeChunk,
          [Wb, ab, Tb] = yc;
        return Math.abs(bb - kb[0]) <= Wb && Math.abs(cb - kb[1]) <= ab && Math.abs(sb - kb[2]) <= Tb
      }
      release(bb) {
        const cb = this.slotPool[bb];
        if (cb) {
          for (let bb = cb.length - 1; bb >= 0; bb--) this.freePool[this.freeCount++] = cb[bb];
          this.slotPool[bb] = null
        }
      }
      encodeSlot(bb) {
        var cb, sb, kb, Wb, ab;
        let Tb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Ib = null !== (cb = null === (sb = this.slotPool[bb]) || void 0 === sb ? void 0 : sb.length) && void 0 !== cb ? cb : 0;
        this.release(bb), this.starved[bb] = 0;
        const Hb = this.slotChunk[bb],
          fb = this.record;
        if (!Hb || Hb.Scb || !Hb.zX) return this.slotChunk[bb] = null, this.slotVersion[bb] = -1, fb.fill(0), this.writeRecord(bb, fb), void(Ib > 0 && this.requeueStarved());
        this.slotVersion[bb] = Hb.Xl;
        const Mb = this.encodeBricks(Hb, bb, Tb, Ub);
        fb[0] = Hb.i, fb[1] = Hb.j, fb[2] = Hb.k, fb[3] = Mb, this.writeRecord(bb, fb), null === (kb = this.encoded) || void 0 === kb || kb.call(this, Hb), Ub && (null !== (Wb = null === (ab = this.slotPool[bb]) || void 0 === ab ? void 0 : ab.length) && void 0 !== Wb ? Wb : 0) < Ib && this.requeueStarved()
      }
      encodeBricks(bb, cb, sb, kb) {
        if (bb.Bm) return ic;
        const Wb = this.casters.blockCaster,
          {
            data: ab,
            stride: Tb,
            offset: Ub
          } = bb.zX,
          [Ib, Hb, fb] = Tb,
          Mb = tc,
          {
            bricks: Xb,
            cells: nb,
            special: mb
          } = sb;
        Xb.fill(0), mb.fill(0);
        let lb = 0,
          Qb = 0,
          eb = 0;
        for (let Cb = 0; Cb < Mb; Cb++) {
          const cb = Cb >> 2,
            sb = 3 & Cb,
            kb = bb.dn[Cb],
            Tb = kb === WI.e ? -1 : kb < Wb.length ? Wb[kb] : 0;
          if (0 !== Tb)
            for (let bb = 0; bb < Mb; bb++) {
              const kb = bb >> 2,
                Nb = 3 & bb;
              let Vb = Ub + bb * Ib + Cb * Hb;
              for (let bb = 0; bb < Mb; bb++, Vb += fb) {
                let Ub = Tb;
                if (Ub < 0) {
                  const bb = ab[Vb];
                  if (Ub = bb < Wb.length ? Wb[bb] : 0, 0 === Ub) continue
                }
                const Ib = Sc(kb, cb, bb >> 2),
                  Hb = Rc(Nb, sb, 3 & bb);
                Xb[3 * Ib + (Hb >>> 5)] |= 1 << (31 & Hb), nb[Ib * Kc + Hb] = Ub, lb++, eb = Cb, Ub === vc ? Qb++ : mb[Ib] = 1
              }
            }
        }
        return 0 === lb ? ic : 32768 === Qb ? Oc | eb << 8 : (this.writePoolEntries(cb, sb, kb), this.writeVoxels(zc + cb * qc, Xb), Gc | eb << 8)
      }
      writePoolEntries(bb, cb, sb) {
        const {
          bricks: kb,
          cells: Wb,
          special: ab
        } = cb, Tb = this.entry;
        let Ub = 0;
        for (let fb = 0; fb < Zc; fb++) Ub += ab[fb];
        if (0 === Ub) return;
        sb && this.freeCount < Ub && this.evictBeyond(bb, Ub);
        const Ib = new Uint32Array(sb ? Math.min(Ub, this.freeCount) : 0);
        let Hb = 0;
        for (let fb = 0; fb < Zc; fb++) {
          if (!ab[fb]) continue;
          const sb = 3 * fb;
          if (Hb === Ib.length) {
            this.dropSpecials(cb, fb), this.starved[bb] = 1;
            continue
          }
          const Ub = this.freePool[--this.freeCount];
          Ib[Hb++] = Ub;
          for (let bb = 0; bb < Kc; bb++) {
            const cb = kb[sb + (bb >>> 5)] >>> (31 & bb) & 1 ? Wb[fb * Kc + bb] : 0;
            1 & bb ? Tb[bb >> 1] |= cb << 16 : Tb[bb >> 1] = cb
          }
          kb[sb + 2] = Ub + 1, this.writePool(Ws + 32 * Ub, Tb)
        }
        Ib.length > 0 && (this.slotPool[bb] = Ib)
      }
      evictBeyond(bb, cb) {
        const sb = this.slotDistance(bb),
          kb = [];
        for (let Wb = 0; Wb < Dc; Wb++) Wb !== bb && this.slotPool[Wb] && this.slotDistance(Wb) > sb && kb.push(Wb);
        kb.sort(((bb, cb) => this.slotDistance(cb) - this.slotDistance(bb)));
        for (const Wb of kb) {
          if (this.freeCount >= cb) return;
          const bb = this.slotChunk[Wb];
          bb && !bb.Scb && bb.zX && (bb.Xl === this.slotVersion[Wb] || aI(bb)) && this.encodeSlot(Wb, this.victimScratch, !1)
        }
      }
      dropSpecials(bb, cb) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const sb = 3 * cb;
        for (let kb = 0; kb < Kc; kb++) bb.cells[cb * Kc + kb] !== vc && (bb.bricks[sb + (kb >>> 5)] &= ~(1 << (31 & kb)))
      }
    }
    var II = sb(37029);
    class HI {
      constructor(bb) {
        this.device = bb, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new ls, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.fX = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = bb.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = bb.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(bb, cb, sb) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: kb
        } = this;
        kb.Bn(bb, cb), sb.forEachSunShadowCaster((bb => {
          this.add(bb)
        })), kb.finish();
        const Wb = 0 === kb.parts;
        if (Wb && this.uploadedEmpty) return;
        this.uploadedEmpty = Wb;
        const {
          queue: ab
        } = this.device, {
          words: Tb
        } = kb;
        ab.writeBuffer(this.frameBuffer, 0, Tb, 0, 16385), kb.refs > 0 && ab.writeBuffer(this.frameBuffer, 65540, Tb, Is, kb.refs), Wb || ab.writeBuffer(this.frameBuffer, 327684, Tb, Hs, kb.parts * Us)
      }
      add(bb) {
        const cb = this.gridFor(bb);
        if (!cb) return;
        const {
          frame: sb
        } = this, {
          fX: kb,
          worldAt: Wb,
          instances: ab,
          instanceCount: Tb,
          thin: Ub
        } = bb;
        if (ab)
          for (let Ib = 0; Ib < Tb; Ib++) Ub ? (es(ab, 16 * Ib, kb, Wb, this.fX), sb.add(cb, this.fX)) : sb.add(cb, ab, 16 * Ib);
        else sb.add(cb, kb, Wb)
      }
      gridFor(bb) {
        let {
          geometry: cb,
          indexed: sb,
          first: kb,
          count: Wb,
          skip: ab
        } = bb, Tb = this.grids.get(cb);
        Tb || (Tb = new Map, this.grids.set(cb, Tb));
        const Ub = `${sb?kb:-1-kb}:${Wb}:${null!==ab&&void 0!==ab?ab:""}`;
        let Ib = Tb.get(Ub);
        if (void 0 !== Ib || this.gridsFull) return Ib;
        const Hb = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Hb + 2;
        else if (Hb > this.bakeDeadline) return;
        return Ib = this.bake(cb, sb, kb, Wb, ab), void 0 !== Ib && Tb.set(Ub, Ib), Ib
      }
      bake(bb, cb, sb, kb, Wb) {
        const ab = bb.vertexAttributes.find((bb => "position" === bb.kind)),
          Tb = ab ? function(bb, cb, sb, kb) {
            let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const ab = bb => cb ? cb[sb + bb] : sb + bb,
              Tb = bb => null !== Wb && [0, 1, 2].some((cb => {
                const sb = ab(bb + cb);
                return sb >= Wb[0] && sb < Wb[1]
              })),
              Ub = [1 / 0, 1 / 0, 1 / 0],
              Ib = [-1 / 0, -1 / 0, -1 / 0];
            for (let Cb = 0; Cb + 2 < kb; Cb += 3)
              if (!Tb(Cb))
                for (let cb = 0; cb < 3; cb++) {
                  const sb = ab(Cb + cb);
                  for (let cb = 0; cb < 3; cb++) Ub[cb] = Math.min(Ub[cb], bb[3 * sb + cb]), Ib[cb] = Math.max(Ib[cb], bb[3 * sb + cb])
                }
            const Hb = Math.max(Ib[0] - Ub[0], Ib[1] - Ub[1], Ib[2] - Ub[2]);
            if (!(Hb > 0)) return null;
            const fb = Hb / 64,
              Mb = [0, 0, 0],
              Xb = [0, 0, 0],
              nb = [0, 0, 0];
            for (let Cb = 0; Cb < 3; Cb++) Mb[Cb] = Math.min(65, Math.ceil((Ib[Cb] - Ub[Cb]) / fb) + 1), Xb[Cb] = Ub[Cb] - fb / 2, nb[Cb] = Xb[Cb] + Mb[Cb] * fb;
            const mb = new Uint32Array(Math.ceil(Mb[0] * Mb[1] * Mb[2] / 32)),
              lb = new Float64Array(9),
              Qb = [0, 0, 0],
              eb = [0, 0, 0];
            for (let Cb = 0; Cb + 2 < kb; Cb += 3)
              if (!Tb(Cb)) {
                for (let cb = 0; cb < 3; cb++) {
                  const sb = ab(Cb + cb);
                  for (let kb = 0; kb < 3; kb++) lb[3 * cb + kb] = bb[3 * sb + kb]
                }
                for (let bb = 0; bb < 3; bb++) {
                  const cb = Math.min(lb[bb], lb[3 + bb], lb[6 + bb]),
                    sb = Math.max(lb[bb], lb[3 + bb], lb[6 + bb]);
                  Qb[bb] = Math.max(0, Math.floor((cb - Xb[bb]) / fb - 1e-6)), eb[bb] = Math.min(Mb[bb] - 1, Math.floor((sb - Xb[bb]) / fb + 1e-6))
                }
                for (let bb = Qb[2]; bb <= eb[2]; bb++)
                  for (let cb = Qb[1]; cb <= eb[1]; cb++)
                    for (let sb = Qb[0]; sb <= eb[0]; sb++)
                      if (Cs(lb, Xb[0] + (sb + .5) * fb, Xb[1] + (cb + .5) * fb, Xb[2] + (bb + .5) * fb, fb / 2)) {
                        const kb = sb + Mb[0] * (cb + Mb[1] * bb);
                        mb[kb >>> 5] |= 1 << (31 & kb)
                      }
              } return {
              words: mb,
              lo: Xb,
              hi: nb,
              cell: fb,
              dims: Mb
            }
          }((0, II.h)(ab, bb.vertexCount), cb ? bb.indexData : null, sb, kb, Wb) : null;
        if (!Tb) return null;
        const {
          words: Ub,
          ...Ib
        } = Tb;
        if (this.gridTop + Ub.length > Ms) return void(this.gridsFull = !0);
        const Hb = this.gridTop;
        return this.gridTop += Ub.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Hb, Ub), {
          ...Ib,
          at: Hb
        }
      }
    }
    const fI = Math.cos(1 * Math.PI / 180);

    function MI(bb, cb) {
      return bb[0] * cb[0] + bb[1] * cb[1] + bb[2] * cb[2] < fI
    }
    async function XI(bb) {
      const {
        pixels: cb,
        width: sb,
        height: kb
      } = await qW(bb), Wb = new Uint8Array(sb * kb);
      for (let ab = 0; ab < Wb.length; ab++) Wb[ab] = cb[4 * ab + 3];
      return {
        width: sb,
        height: kb,
        alpha: Wb
      }
    }
    class nI {
      constructor(bb, cb) {
        this.device = bb, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Vs.p), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = bb.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = bb.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * wc,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = bb.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [sb, kb, Wb] = Vs.r;
        this.volume = bb.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: sb,
            height: kb,
            depthOrArrayLayers: Wb
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = bb.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = bb.createBuffer({
          label: "sun-shadow-volume-work",
          size: Vs.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = cb ? new HI(bb) : null, this.entityStandIn = cb ? null : bb.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var bb, cb;
        const sb = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || sb.push("Lite sun shadow volume pipeline compiling");
        const kb = null !== (bb = null === (cb = this.casters) || void 0 === cb ? void 0 : cb.planesLoading) && void 0 !== bb ? bb : 0;
        return kb > 0 && sb.push(`${kb} Lite sun shadow plane casters loading their textures`), sb
      }
      entries() {
        var bb, cb, sb, kb;
        const Wb = gc.s;
        return [{
          binding: Wb.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Wb.zX,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Wb.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Wb.volume,
          resource: this.volumeView
        }, {
          binding: Wb.sampler,
          resource: this.volumeSampler
        }, {
          binding: Wb.entities,
          resource: {
            buffer: null !== (bb = null === (cb = this.entities) || void 0 === cb ? void 0 : cb.frameBuffer) && void 0 !== bb ? bb : this.entityStandIn
          }
        }, {
          binding: Wb.entityGrids,
          resource: {
            buffer: null !== (sb = null === (kb = this.entities) || void 0 === kb ? void 0 : kb.gridBuffer) && void 0 !== sb ? sb : this.entityStandIn
          }
        }]
      }
      prepare(bb, cb, sb) {
        var kb;
        this.entitiesThisFrame = !1;
        const Wb = null !== (kb = null === sb || void 0 === sb ? void 0 : sb.sunShadowReach()) && void 0 !== kb ? kb : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!sb || !Wb.sunShadow && !Wb.airShadow) return void(this.volumeHolds = null);
        if (bb.fX.h_ !== tc) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${bb.fX.h_}; everything is lit.`)));
        const ab = this.start(bb);
        this.casters.update(bb.Qn, bb.Qn.Vn.length);
        const Tb = bb.iX;
        for (let Xb = 0; Xb < 3; Xb++) this.eye[Xb] = cb[Xb] + Tb[Xb];
        const Ub = (0, Vs.w)(this.eye);
        this.staleNear = Ub;
        const Ib = bb.fX.Gl;
        ab.update(this.eye, ((bb, cb, sb) => Ib.Kl(bb, cb, sb)), 1);
        const Hb = (0, Vs.s)(sb.J9()),
          fb = ab.eyeChunk,
          Mb = this.uniformInts;
        for (let Xb = 0; Xb < 3; Xb++) Mb[Xb] = fb[Xb], Mb[4 + Xb] = Ub[Xb];
        this.entitiesThisFrame = null !== this.entities && Wb.sunShadow, this.entitiesThisFrame && ms(this.uniformFloats, 8, cb, Hb), null !== this.volumeHolds && (this.castersWritten || MI(Hb, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(Ub, Hb, fb)
      }
      markStale(bb) {
        const cb = this.staleNear,
          sb = tc,
          kb = [bb.i * sb, bb.j * sb, bb.k * sb];
        for (let ab = 0; ab < 3; ab++)
          if (kb[ab] + sb <= cb[ab] - sb || kb[ab] >= cb[ab] + Vs.r[ab] + sb) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Wb = this.stale;
        for (let ab = 0; ab < Wb.length; ab += 4)
          if (Wb[ab] === bb.i && Wb[ab + 1] === bb.j && Wb[ab + 2] === bb.k) return void(Wb[ab + 3] = this.swept);
        if (16 === Wb.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Wb.push(bb.i, bb.j, bb.k, this.swept)
      }
      writeStale() {
        const bb = this.swept,
          cb = this.stale;
        this.staleAll && bb - this.staleAllSwept >= Vs.h && (this.staleAll = !1, cb.length = 0);
        let sb = 0;
        for (let Wb = 0; Wb < cb.length; Wb += 4)
          if (bb - cb[Wb + 3] < Vs.h) {
            for (let bb = 0; bb < 4; bb++) cb[sb + bb] = cb[Wb + bb];
            sb += 4
          } cb.length = sb;
        const kb = this.uniformInts;
        kb[3] = this.staleAll ? 5 : sb / 4;
        for (let Wb = 0; Wb < 4; Wb++)
          for (let bb = 0; bb < 3; bb++) kb[16 + 4 * Wb + bb] = 4 * Wb < sb ? cb[4 * Wb + bb] * tc : 0
      }
      writeUniform() {
        const bb = this.uniformInts;
        let cb = this.uniformWritten;
        if (cb) {
          let sb = !0;
          for (let kb = 0; kb < bb.length && sb; kb++) sb = bb[kb] === cb[kb];
          if (sb) return
        }
        cb ??= this.uniformWritten = new Int32Array(bb.length), cb.set(bb), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(bb) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, bb)
      }
      computeVolume(bb, cb, sb) {
        const kb = this.buildVolumePass();
        if (!kb) return void(this.volumeHolds = null);
        const Wb = (0, Vs.t)(this.volumeHolds, bb);
        this.volumeHolds = bb;
        const ab = 1 === Wb.length && Wb[0].size.every(((bb, cb) => bb === Vs.r[cb])),
          Tb = this.sweptChunk,
          Ub = this.sweptLight,
          Ib = cb[0] !== Ub[0] || cb[1] !== Ub[1] || cb[2] !== Ub[2],
          Hb = sb[0] !== Tb[0] || sb[1] !== Tb[1] || sb[2] !== Tb[2],
          fb = Ib && MI(cb, Ub);
        if ((ab || this.written || Hb || fb) && (this.fastLeft = Vs.h), ab || this.written || Ib || Hb) {
          this.written = !1;
          for (let bb = 0; bb < 3; bb++) Tb[bb] = sb[bb], Ub[bb] = cb[bb];
          this.sweepLeft = ab ? 0 : Vs.h
        }
        if (ab ? this.swept += Vs.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Wb.push(...(0, Vs.A)(bb, this.slice)), this.slice = (this.slice + 1) % Vs.h, this.swept++), 0 === Wb.length) return;
        const Mb = (0, Vs.D)(this.workData, cb, Wb);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Xb = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          nb = Xb.beginComputePass({
            label: "sun-shadow-volume"
          });
        nb.setPipeline(kb.pipeline), nb.setBindGroup(Ys.group, kb.bindGroup), nb.dispatchWorkgroups(Math.ceil(Mb / Vs.l)), nb.end(), this.device.queue.submit([Xb.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const bb = Ys,
          cb = GPUShaderStage.COMPUTE,
          sb = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: bb.uniform,
              visibility: cb,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: bb.zX,
              visibility: cb,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: bb.special,
              visibility: cb,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: bb.work,
              visibility: cb,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: bb.volume,
              visibility: cb,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          kb = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: sb,
            entries: [{
              binding: bb.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: bb.zX,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: bb.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: bb.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: bb.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [sb]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: hs()
            }),
            entryPoint: "main"
          }
        }).then((bb => {
          this.volumePass = {
            pipeline: bb,
            bindGroup: kb
          }
        }), (bb => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(bb)}`)
        })), null
      }
      start(bb) {
        if (this.window) return this.window;
        const cb = (bb, cb) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * bb, cb)
        };
        this.casters = new kI(((bb, sb) => {
          this.castersWritten = !0, cb(bb, sb)
        }), XI);
        const sb = new UI(this.casters, ((bb, cb) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * bb, cb)
        }), cb);
        return sb.encoded = bb => {
          this.markStale(bb)
        }, bb.fX.on("chunkAdded", (bb => {
          sb.chunkAdded(bb)
        })), this.window = sb, sb
      }
    }
    var mI = sb(38297),
      lI = sb(38304);
    const QI = 0,
      eI = 3,
      CI = 4,
      NI = 5;

    function VI(bb, cb, sb, kb) {
      bb.drawOffset(cb, kb + QI), cb[kb + eI] = bb.drawTime(), sb[kb + CI] = bb.ring.drawStart(), sb[kb + NI] = bb.ring.drawCount()
    }
    const LI = `\n${ek}\n\nconst MAX_STOPS = ${lI.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${lI.e/4}>,\n\tcolor1: array<vec4f, ${lI.e}>,\n\tcolor2: array<vec4f, ${lI.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${lI.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${lI.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var uI = sb(41020);
    class YI {
      constructor(bb, cb, sb, kb) {
        this.device = bb, this.system = cb, this.frameIndex = sb, this.bindings = kb, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, uI.h)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (bb, cb) => {
          this.device.queue.writeBuffer(this.ring, bb * lI.h * 4, this.system.ring.records, bb * lI.h, (cb - bb) * lI.h)
        };
        const {
          name: Wb
        } = cb;
        this.ring = bb.createBuffer({
          label: `particles-${Wb}`,
          size: cb.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = bb.createBuffer({
          label: `particles-uniforms-${Wb}`,
          size: 4 * lI.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(bb) {
        const cb = (0, uI.d)(this.system, this.uniformBits, bb);
        cb && (this.uniformBits = cb, this.device.queue.writeBuffer(this.uniforms, 0, cb))
      }
      bind() {
        const {
          system: bb
        } = this, cb = this.texture;
        (0, uI.l)(bb, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${bb.name}`,
          size: [lI.m, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * lI.m
        }, [lI.m, 1]));
        const sb = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === cb.view && this.boundSampler === cb.sampler && this.boundRamp === sb || (this.boundView = cb.view, this.boundSampler = cb.sampler, this.boundRamp = sb, this.bindGroup = this.device.createBindGroup({
          label: `particles-${bb.name}`,
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
            resource: cb.sampler
          }, {
            binding: 3,
            resource: cb.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: sb
          }]
        }))
      }
      destroy() {
        var bb;
        this.ring.destroy(), this.uniforms.destroy(), null === (bb = this.ramp) || void 0 === bb || bb.destroy()
      }
    }
    class hI {
      constructor(bb, cb) {
        this.device = bb, this.resources = cb, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Hc.c)();
        const sb = bb.createBindGroupLayout({
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
        this.frameLayout = bb.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = bb.createPipelineLayout({
          bindGroupLayouts: [cc(bb), sb, this.frameLayout]
        }), this.module = bb.createShaderModule({
          label: "particles",
          code: LI
        });
        const kb = bb.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        bb.queue.writeTexture({
          texture: kb
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: sb,
          rampSampler: bb.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: kb.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (cb, sb) => (this.bindTarget(sb), {
            renderable: this.renderable,
            pipeline: Tc(bb, sb),
            draw: bb => sb === this.preparedTarget ? this.draw(bb) : 0
          })
        }
      }
      get Okb() {
        return this.systems.size
      }
      reset() {
        for (const bb of this.systems.keys()) bb.reset()
      }
      describePendingWork() {
        return (0, mI.f)(this.systems.keys(), "Lite")
      }
      eJ(bb, cb) {
        const sb = new mI.b(bb, cb, this);
        return this.systems.set(sb, new YI(this.device, sb, this.allocateFrameIndex(), this.bindings)), sb
      }
      o3(bb, cb) {
        for (const sb of this.systems.keys()) sb.o3(bb, cb)
      }
      canDraw(bb) {
        const cb = this.systems.get(bb),
          sb = bb.texture ? this.resources.boundTexture(bb.texture) : null;
        if (!cb || !sb || !this.targetPipelines) return !1;
        if (cb.texture = sb, cb.pipelines.length = 0, !oW(bb.blendMode)) return this.warnOnce(`blend:${bb.blendMode}`, `particle blend mode ${bb.blendMode} is not drawn (${bb.name})`), !0;
        const kb = (0, DW.i)(bb.blendMode);
        for (const Wb of kb) {
          const bb = this.pipelineFor(Wb);
          if (!1 === bb) return cb.pipelines.length = 0, !0;
          bb && cb.pipelines.push(bb)
        }
        return cb.pipelines.length === kb.length
      }
      disposeStopped(bb) {
        bb.dispose()
      }
      remove(bb) {
        const cb = this.systems.get(bb);
        cb && (this.systems.delete(bb), cb.destroy(), this.freeFrameIndices.push(cb.frameIndex))
      }
      prepare(bb) {
        const cb = bb.animationRatio || 1;
        Uc(this.renderable._worldCenter, bb, kc), this.preparedTarget = this.target, this.draws.length = 0;
        let sb = 0;
        for (const kb of this.systems.values()) {
          const bb = kb.system;
          if (!bb.animateIfActive(cb)) continue;
          if (bb.ring.takeUploads(kb.upload), !bb.hasLiveParticles() || 0 === kb.pipelines.length) continue;
          kb.writeUniforms(this.warnOnce), kb.bind();
          const Wb = 64 * kb.frameIndex;
          kb.count = bb.ring.drawCount(), VI(bb, this.frameData, this.frameBits, Wb), sb = Math.max(sb, Wb + 64), this.draws.push(kb)
        }
        sb > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, sb)
      }
      draw(bb) {
        let cb = 0,
          sb = null;
        for (const kb of this.draws) {
          bb.setBindGroup(1, kb.bindGroup), bb.setBindGroup(2, this.frameBindGroup, [256 * kb.frameIndex]);
          for (const Wb of kb.pipelines) Wb !== sb && (bb.setPipeline(Wb), sb = Wb), bb.draw(4, kb.count), cb++
        }
        return cb
      }
      bindTarget(bb) {
        this.target = bb;
        const cb = `${bb._colorFormat}|${bb._depthStencilFormat}|${bb._depthCompare}|${bb._sampleCount}`;
        let sb = this.pipelines.get(cb);
        sb || (sb = new Map, this.pipelines.set(cb, sb)), this.targetPipelines = sb
      }
      pipelineFor(bb) {
        var cb;
        const sb = this.targetPipelines,
          kb = sb.get(bb);
        if (void 0 !== kb) return kb;
        sb.set(bb, null);
        const Wb = this.target,
          ab = bb === DW.c,
          Tb = null !== (cb = Wb._depthCompare) && void 0 !== cb ? cb : sc;
        return this.device.createRenderPipelineAsync({
          label: `particles-${bb}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: xb({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: ab ? 1 : 0
            }
          }, Wb, SW((0, DW.h)(bb))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Wb._depthStencilFormat ? {
            format: Wb._depthStencilFormat,
            depthCompare: Tb,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Wb._sampleCount
          }
        }).then((cb => {
          sb.set(bb, cb)
        }), (cb => {
          sb.set(bb, !1), console.error("Lite particle pipeline failed", cb), FW("particles", `blend-${bb}`, cb)
        })), null
      }
      allocateFrameIndex() {
        const bb = this.freeFrameIndices.pop();
        if (void 0 !== bb) return bb;
        const cb = this.nextFrameIndex++;
        if (64 * (cb + 1) > this.frameData.length) {
          const bb = new Float32Array(2 * this.frameData.length);
          bb.set(this.frameData), this.frameData = bb, this.frameBits = new Uint32Array(bb.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return cb
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
    class JI {
      constructor(bb, cb, sb, kb, Wb) {
        this.lite = bb, this.canvas = cb, this.info = sb, this.resources = Wb, this.Dsb = !1, this.needPOTTextures = !1, this.KF = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = cb.width, this.renderHeight = cb.height, this.caps = {
          maxTextureSize: kb.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: kb.maxTextureArrayLayers
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
      setSize(bb, cb) {
        if (this.renderWidth === bb && this.renderHeight === cb) return !1;
        const sb = this.renderWidth,
          kb = this.renderHeight;
        this.renderWidth = bb, this.renderHeight = cb;
        try {
          (0, qb.p)(this.lite, bb, cb)
        } catch (Wb) {
          if (Wb instanceof DOMException && "InvalidStateError" === Wb.name) {
            this.renderWidth = sb, this.renderHeight = kb;
            try {
              (0, qb.p)(this.lite, sb, kb)
            } catch {
              this.canvas.width = sb, this.canvas.height = kb
            }
            return console.warn("WebGPU could not allocate render targets for resize", bb, cb, Wb.message), !1
          }
          throw Wb
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
      vN() {
        const bb = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : bb - this.lastFrameTime, this.lastFrameTime = bb
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(bb, cb) {
        const sb = document.createElement("canvas");
        return sb.width = bb, sb.height = cb, sb
      }
      vF(bb, cb) {
        var sb;
        return null !== (sb = this.resources.vF.get(bb)) && void 0 !== sb ? sb : new rb(this.resources, bb, cb)
      }
      atlasArray(bb, cb, sb) {
        return this.resources.atlasArray(bb, cb, sb)
      }
    }
    class gI {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(bb) {
        this.fov = bb.fov, this.nearPlane = bb.near, this.farPlane = bb.far;
        const cb = bb.worldMatrix;
        for (let sb = 0; sb < 16; sb++)
          if (this.worldMatrix[sb] !== cb[sb]) return this.worldMatrix.set(cb), void this.worldMatrixVersion++
      }
    }
    class BI {
      constructor(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
        let fb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = bb, this.aQ = cb, this.sceneTask = sb, this.gpuDevice = kb, this.terrain = Wb, this.meshes = ab, this.particles = Tb, this.resources = Ub, this.sunShadow = fb, this.Icb = void 0, this.backendName = "WebGPU (Lite)", this.f6 = void 0, this.modelMeshes = void 0, this.camera = new gI, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new Ab(kb.lost), this.deviceLost = this.refusals.deviceLost, this.Icb = new JI(bb, Ib, Hb, kb.limits, Ub), (0, Bb.F)({
          qU: bb => {
            Db(bb) && Ub.textureSlot(bb)
          },
          loaded: bb => Db(bb) ? Ub.textureLoaded(bb) : null,
          canvasUpdated: (bb, cb, sb) => {
            Db(bb) && Ub.canvasUpdated(bb, cb, sb)
          }
        }), this.f6 = ab.f6, this.modelMeshes = ab.modelMeshes, cb.camera = this.camera
      }
      get castsEntitySunShadows() {
        var bb, cb;
        return null !== (bb = null === (cb = this.sunShadow) || void 0 === cb ? void 0 : cb.tracesEntities) && void 0 !== bb && bb
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(bb) {
        this.modelMeshes.attach(bb.model, bb.sceneMirror);
        const cb = bb.aQ;
        this.setClearColour(cb.clearColor.r, cb.clearColor.g, cb.clearColor.b), cb.draw = () => {
          this.drawFrame(bb, cb)
        }
      }
      render(bb) {
        try {
          this.Icb.vN(), bb.aQ.render()
        } catch (cb) {
          throw this.refusals.frameFailed(cb), cb
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var bb, cb, sb, kb;
        const Wb = [...this.particles.describePendingWork(), ...null !== (bb = null === (cb = this.sunShadow) || void 0 === cb ? void 0 : cb.describePendingWork()) && void 0 !== bb ? bb : []],
          ab = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (sb = this.terrain.sceneDepth) && void 0 !== sb && sb.compiling ? 1 : 0) + (null !== (kb = this.terrain.shadowMask) && void 0 !== kb && kb.compiling ? 1 : 0);
        ab > 0 && Wb.push(`${ab} Lite pipelines compiling`);
        const Tb = this.terrain.buffersAwaitingVerdict;
        Tb > 0 && Wb.push(`${Tb} Lite terrain buffers awaiting their out-of-memory verdict`);
        const Ub = this.resources.texturesLoading;
        return Ub > 0 && Wb.push(`${Ub} Lite textures loading`), Wb
      }
      prepareTexture(bb) {
        return null !== this.resources.boundTexture(bb) || this.resources.textureFailed(bb)
      }
      drawFrame(bb, cb) {
        var sb, kb, Wb, ab, Tb, Ub;
        const Ib = XU(bb);
        this.camera.copyFromView(Ib), this.setClearColour(Ib.clearColour[0], Ib.clearColour[1], Ib.clearColour[2]), null === (sb = this.sunShadow) || void 0 === sb || sb.prepare(bb.eX, Ib.eye, null !== (kb = bb.eX.Qm) && void 0 !== kb ? kb : null), this.terrain.prepare(bb, Ib), null === (Wb = this.terrain.sceneDepth) || void 0 === Wb || Wb.setPlanes(Ib.near, Ib.far), null === (ab = this.terrain.shadowMask) || void 0 === ab || ab.prepare(Ib), xT(this.sceneTask), this.meshes.prepare(cb, Ib, bb.model.earthSky, null !== (Tb = bb.eX.Qm) && void 0 !== Tb ? Tb : null), this.particles.prepare(Ib);
        const Hb = performance.now();
        this.resources.flushUploads(), null === (Ub = this.sunShadow) || void 0 === Ub || Ub.traceEntities(this.meshes);
        try {
          (0, qb.n)(this.engine, this.lastFrameTime > 0 ? Hb - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Hb
      }
      setClearColour(bb, cb, sb) {
        const kb = this.aQ.clearColor;
        kb.r = bb, kb.g = cb, kb.b = sb, kb.a = 1
      }
    }
    const tI = "WebGPU device lost while Lite was starting";

    function yI(bb, cb) {
      return "object" === typeof bb && null !== bb ? Object.assign(bb, {
        startStep: cb
      }) : bb
    }
    async function PI(bb, cb) {
      const sb = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!sb) throw yI(new Error("No WebGPU adapter"), "no_adapter");
      const kb = sb.info,
        Wb = {
          vendor: (null === kb || void 0 === kb ? void 0 : kb.vendor) || "unknown vendor",
          renderer: (null === kb || void 0 === kb ? void 0 : kb.architecture) || "unknown renderer",
          version: (null === kb || void 0 === kb ? void 0 : kb.description) || "unknown version"
        },
        ab = function(bb) {
          const cb = {};
          for (const sb in bb.limits) {
            const kb = bb.limits[sb];
            "number" === typeof kb && (cb[sb] = kb)
          }
          return cb
        }(sb);
      let Tb;
      bb.style.background = "black";
      try {
        Tb = await (0, qb.i)(bb, {
          msaaSamples: cb.dcb ? 4 : 1,
          requiredLimits: ab,
          alphaMode: "premultiplied"
        })
      } catch (fb) {
        throw yI(fb, "#47" === (null === (Ub = fb) || void 0 === Ub ? void 0 : Ub.message) ? "no_adapter" : "device")
      }
      var Ub;
      const Ib = function(bb) {
        return bb._device
      }(Tb);
      let Hb = null;
      Ib.lost.then((bb => {
        Hb = bb, console.error(`WebGPU device lost (${bb.reason}): ${bb.message}`)
      }));
      try {
        const sb = await async function(bb, cb, sb, kb, Wb, ab) {
          const Tb = (0, db.d)(bb),
            Ub = new RT(bb, cb),
            Ib = new vU(cb),
            Hb = new yT(cb, Ub, (bb => function(bb, cb) {
              for (const kb of pb(bb)) {
                var sb;
                if (kb._targetSignature === cb) return null !== (sb = kb._sceneBG) && void 0 !== sb ? sb : null
              }
              return null
            }(Tb, bb))),
            fb = new hI(cb, Ub);
          for (const nb of function(bb, cb, sb) {
              return [cb.opaqueRenderable, bb.opaqueRenderable, bb.skyLastRenderable, sb.renderable, cb.transparentRenderable, bb.transparentRenderable, bb.frontRenderable]
            }(Hb, Ib, fb)) jb(Tb, nb);
          const Mb = function(bb) {
            for (const cb of pb(bb))
              if ("aQ" === cb.name) return cb;
            throw new Error("Lite: the scene has no render task named scene")
          }(Tb);
          Wb && Ib.installSceneDepth(Mb, bb);
          const Xb = ab ? new nI(cb, ab.entities) : null;
          Ib.sunShadow = Xb, Xb && null !== ab && void 0 !== ab && ab.entities && (Ib.shadowMask = new BU(cb, Mb, bb, Ib));
          return Hb.sunShadow = Xb, await (0, db.g)(Tb), new BI(bb, Tb, Mb, cb, Ib, Hb, fb, Ub, sb, kb, Xb)
        }(Tb, Ib, bb, Wb, cb.sceneDepth, cb.sunShadow);
        if (null !== Hb) {
          const {
            reason: bb,
            message: cb
          } = Hb;
          throw Object.assign(new Error(`${tI} (${bb}): ${cb}`), {
            fallbackReason: tI
          })
        }
        return sb
      } catch (fb) {
        throw Ib.destroy(), null === Hb ? fb : yI(fb, "device")
      }
    }
  },
  40308: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => Tb,
      C: () => lb,
      G: () => nb,
      H: () => mb,
      b: () => Wb,
      d: () => kb,
      h: () => Xb,
      i: () => fb,
      l: () => Qb,
      p: () => ab,
      s: () => Ub,
      w: () => Ib
    });
    const kb = 3,
      Wb = 0,
      ab = 1,
      Tb = 2,
      Ub = {
        uniform: 3,
        zX: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Ib = 10,
      Hb = "BloxdPackInputs",
      fb = "bloxdPackInputs",
      Mb = [{
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
      Xb = 80;

    function nb() {
      const bb = Mb.map((bb => {
        let {
          name: cb,
          type: sb
        } = bb;
        return `    ${cb}: ${sb},\n`
      })).join("");
      return `struct ${Hb} {\n${bb}}\n@group(${kb}) @binding(${Wb}) var<uniform> ${fb}: ${Hb};\n`
    }

    function mb(bb, cb) {
      const sb = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Xb),
        [kb, Wb, ab, Tb, Ub, Ib] = Mb;
      sb.setFloat32(kb.offset, cb.seconds, !0), sb.setUint32(Wb.offset, cb.lit ? 1 : 0, !0);
      for (let Hb = 0; Hb < 3; Hb++) sb.setInt32(ab.offset + 4 * Hb, cb.renderOffset[Hb], !0), sb.setFloat32(Tb.offset + 4 * Hb, cb.J9[Hb], !0), sb.setFloat32(Ub.offset + 4 * Hb, cb.eyePosition[Hb], !0), sb.setFloat32(Ib.offset + 4 * Hb, cb.shadowDirection[Hb], !0)
    }

    function lb(bb) {
      const cb = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, sb) => {
        let {
          id: kb,
          rotation: Wb
        } = bb;
        cb[sb] = 65535 & kb | (3 & Wb) << 16
      })), cb
    }
    const Qb = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);