export const id = 261;
export const ids = [261];
export const modules = {
  40743: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => kb,
      f: () => Yb,
      g: () => Eb,
      j: () => eb
    });
    var Ab = Ub(36587),
      Mb = Ub(38015),
      Tb = Ub(38010);

    function Eb(bb, ab, Ub, Ab) {
      const Mb = Tb.s;
      ab.fill(0), bb.gravity.toArray(ab, Mb.gravity), bb.colorDead.toArray(ab, Mb.colorDead), Ub[Mb.ramp] = bb.useRampGradients ? 1 : 0;
      const Eb = bb.getColorGradients(),
        Yb = Pb(bb, Eb, "colour", Ab);
      Ub[Mb.colorCount] = Yb;
      for (let Tb = 0; Tb < Yb; Tb++) {
        var Bb;
        const bb = Eb[Xb(Eb, Tb)];
        ab[Mb.colorPositions + Tb] = bb.gradient, bb.color1.toArray(ab, Mb.color1 + 4 * Tb), (null !== (Bb = bb.color2) && void 0 !== Bb ? Bb : bb.color1).toArray(ab, Mb.color2 + 4 * Tb)
      }
      const eb = bb.getVelocityGradients(),
        vb = Pb(bb, eb, "QR", Ab);
      Ub[Mb.velocityCount] = vb;
      for (let Tb = 0; Tb < vb; Tb++) Zb(ab, Mb.QR + 4 * Tb, eb[Xb(eb, Tb)]);
      const Lb = bb.useRampGradients ? bb.getColorRemapGradients() : null,
        jb = Pb(bb, Lb, "colour remap", Ab);
      Ub[Mb.remapCount] = jb;
      for (let Tb = 0; Tb < jb; Tb++) Zb(ab, Mb.remap + 4 * Tb, Lb[Xb(Lb, Tb)])
    }

    function Yb() {
      return {
        key: [],
        texels: new Uint8Array(4 * Tb.m)
      }
    }
    const Bb = [];

    function eb(bb, ab) {
      return vb(bb, Bb), !yb(Bb, ab.key) && (ab.key.length = 0, ab.key.push(...Bb), ab.key.length > 0 && function(bb, ab) {
        for (let Ub = 0; Ub < Tb.m; Ub++) Mb.g.GetCurrentGradient(Ub / Tb.m, bb, ((bb, ab, Ub) => {
          Ab.Color3.LerpToRef(bb.color, ab.color, Ub, Lb)
        })), ab[4 * Ub] = 255 * Lb.r, ab[4 * Ub + 1] = 255 * Lb.g, ab[4 * Ub + 2] = 255 * Lb.b, ab[4 * Ub + 3] = 255
      }(bb.getRampGradients(), ab.texels), !0)
    }

    function vb(bb, ab) {
      ab.length = 0;
      const Ub = bb.useRampGradients ? bb.getRampGradients() : null;
      if (null !== Ub && void 0 !== Ub && Ub.length) {
        ab.push(Ub.length);
        for (const bb of Ub) ab.push(bb.gradient, bb.color.r, bb.color.g, bb.color.b)
      }
    }
    const Lb = new Ab.Color3;

    function Pb(bb, ab, Ub, Ab) {
      return ab ? ab.length > Tb.c ? (Ab(`particleStops:${Ub}`, `GPU particles use the first 2 and last ${Tb.c-2} of more than ${Tb.c} ${Ub} gradient stops (${bb.name})`), Tb.c) : ab.length : 0
    }

    function Xb(bb, ab) {
      return ab < 2 || bb.length <= Tb.c ? ab : bb.length - Tb.c + ab
    }
    const jb = new Float32Array(Tb.q),
      Rb = new Uint32Array(jb.buffer);

    function kb(bb, ab, Ub) {
      return Eb(bb, jb, Rb, Ub), ab && yb(Rb, ab) ? null : Rb.slice()
    }

    function yb(bb, ab) {
      if (bb.length !== ab.length) return !1;
      for (let Ub = 0; Ub < bb.length; Ub++)
        if (bb[Ub] !== ab[Ub]) return !1;
      return !0
    }

    function Zb(bb, ab, Ub) {
      var Ab;
      bb[ab] = Ub.gradient, bb[ab + 1] = Ub.factor1, bb[ab + 2] = null !== (Ab = Ub.factor2) && void 0 !== Ab ? Ab : Ub.factor1
    }
  },
  40736: (bb, ab, Ub) => {
    function Ab() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const ab = new Set;
      return (Ub, Ab) => {
        ab.has(Ub) || (ab.add(Ub), console.warn(bb + Ab))
      }
    }
    Ub.d(ab, {
      d: () => Ab
    })
  },
  40773: (bb, ab, Ub) => {
    Ub.d(ab, {
      createLiteRendererAsync: () => WB,
      liteBabylonBackend: () => Kb,
      setPipelineFailureHook: () => gM
    });
    var Ab = Ub(36587),
      Mb = Ub(36949),
      Tb = Ub(37245),
      Eb = Ub(36524),
      Yb = Ub(37254);
    class Bb extends Yb.d {
      constructor() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        super(...ab), this.color = new Ab.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: ab[0].oN().getUniqueId(),
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
    const eb = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      vb = bb => 1 << eb.indexOf(bb),
      Lb = vb("VERTEXCOLOR"),
      Pb = vb("INSTANCES"),
      Xb = vb("THIN_INSTANCES"),
      jb = vb("INSTANCESCOLOR"),
      Rb = vb("FOG"),
      kb = vb("LITE_FRONT_LAYER");

    function yb(bb, ab, Ub, Ab) {
      let Mb = 0;
      return bb.isVerticesDataPresent("color") && (Mb |= Lb), "none" !== ab && (Mb |= Pb), "thin" === ab && (Mb |= Xb, bb.isVerticesDataPresent("instanceColor") && (Mb |= jb)), Ab.fogEnabled && bb.applyFog && 0 !== Ab.fogMode && (Mb |= Rb), Ub >= 1 && (Mb |= kb), Mb
    }

    function Zb(bb, ab) {
      bb.updateColor4("color", ab.color, ab.alpha)
    }
    var Db = Ub(37194),
      zb = Ub(36777),
      xb = Ub(36618),
      ib = Ub(36495),
      fb = Ub(37177),
      mb = Ub(37188),
      pb = Ub(36512),
      Nb = Ub(36516),
      Wb = Ub(36533);
    const Hb = ib.d.GLSL;
    class Ib {
      constructor(bb, ab) {
        this.name = bb, this.ZR = ab, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.UW = {
          addOnce: bb => {
            this.disposers.push(bb)
          }
        }, this.uniqueId = ab.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      oN() {
        return this.ZR
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
        return (0, pb.N)(this.model, bb.visibility, bb.hasVertexAlpha)
      }
      needAlphaTestingForMesh(bb) {
        return (0, pb.P)(this.model, bb.visibility, bb.hasVertexAlpha)
      }
      dispose() {
        (0, zb.g)(this);
        for (const bb of this.disposers.splice(0)) bb()
      }
      get model() {
        return (0, pb.W)(this)
      }
    }
    const db = new WeakSet;

    function Fb(bb) {
      return db.has(bb)
    }

    function hb(bb) {
      db.add(bb)
    }
    const Gb = {
      create: (bb, ab) => ((0, xb.q)(bb, new Ib(bb.name, ab)), Nb.b.defines()),
      write: () => {},
      addFeature: (bb, ab) => {
        const Ub = bb.mirror;
        ab.feature === mb.l && ab.state.dirLightCount > 0 && (bb.disableLighting = !0, (0, pb.S)(bb)), "BLOXD_LIGHTING" in ab.defines && (0, zb.f)(Ub), ab.feature === fb.g && ((0, Db.h)(ab.state, Hb), function(bb, ab) {
          const Ub = bb.oN().vj();
          ab.textures.forEach(((Ab, Mb) => {
            setTimeout((() => {
              var Tb, Eb;
              const {
                url: Yb
              } = Ab.source;
              Ub.atlasArray(Yb, null !== (Tb = null === (Eb = ab.sources.pixels) || void 0 === Eb ? void 0 : Eb[Mb]) && void 0 !== Tb ? Tb : null, ab.sources.layerWidth).then((Ub => {
                (0, Db.b)(bb, ab, Mb, Ub, Ub.layerWidth, Ub.layers, Hb)
              })).catch((bb => {
                console.error(`Failed to build texture array for atlas ${Mb}`, bb)
              }))
            }))
          }))
        }(Ub, ab.state))
      },
      texture: (bb, ab, Ub) => {
        let {
          data: Ab,
          sets: Mb
        } = Ub;
        var Tb;
        (hb(bb), Ab) && (bb.uvSet = null !== (Tb = null === Mb || void 0 === Mb ? void 0 : Mb.coordinatesIndex) && void 0 !== Tb ? Tb : 0, (0, xb._)(bb.matrix, null !== Mb && void 0 !== Mb ? Mb : {}))
      },
      cube: hb,
      canvas: (bb, ab, Ub) => {
        let {
          width: Ab,
          height: Mb,
          mipmaps: Tb,
          samplingMode: Eb = Wb.j.trilinear,
          hasAlpha: Yb = !1,
          wrap: Bb = Wb.c.clamp
        } = Ub;
        const eb = bb.vj().createCanvas(Ab, Mb),
          vb = new Wb.n("2d", {
            kind: "canvas",
            width: Ab,
            height: Mb,
            canvas: eb
          }, {
            samplingMode: Eb,
            wrapU: Bb,
            wrapV: Bb,
            noMipmap: !Tb,
            invertY: !0
          });
        return vb.hasAlpha = Yb, hb(vb), vb
      }
    };
    var Qb = Ub(36787),
      qb = Ub(36431);
    class ub {
      constructor(bb, ab, Ub) {
        this.engine = bb, this.clearColor = ab, this.ambientColor = Ub, this.onBeforeRenderObservable = new qb.b, this.onBeforeCameraRenderObservable = new qb.b, this.onAfterRenderObservable = new qb.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.pD = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      vj() {
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
        const ab = this.pending.indexOf(bb); - 1 !== ab && this.pending.splice(ab, 1)
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

    function rb() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const Kb = {
      zAb: rb,
      ZAb: (bb, ab) => {
        const Ub = new ub(bb.engine, Ab.b.FromArray(ab.clearColor), Ab.Color3.FromArray(ab.ambientColor));
        (0, Eb.c)(Gb, Ub), bb.ZR = Ub,
          function(bb, ab) {
            const Ub = Object.assign((0, Qb.k)(bb, "camera"), {
              layerMask: 268435455
            });
            bb.model.nodes.setWorldSource(Ub.row, bb.model.view.worldMatrix), bb.camera = ab.activeCamera = Ub
          }(bb, Ub), (0, Mb.h)(bb, ((bb, ab, Ub) => (0, Tb.g)(bb, ab, Ub, Yb.d)))
      },
      jAb: () => {},
      setBabylonFog: () => {},
      xAb: rb,
      mAb: () => {},
      linesFromArrays: (bb, ab, Ub) => (0, Tb.g)(bb, ab, Ub, Bb),
      DR: () => {},
      fAb: rb
    };
    var ob = Ub(40825),
      lb = Ub(40832);
    class tb {
      constructor(bb) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const ab = new Promise((bb => {
          this.refused = bb
        }));
        this.deviceLost = Promise.race([bb, ab])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(bb) {
        (function(bb) {
          const {
            name: ab,
            message: Ub
          } = null !== bb && void 0 !== bb ? bb : {};
          return "InvalidStateError" === ab && "string" === typeof Ub && Ub.startsWith("GPUDevice.")
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
          PL: 0
        }, this.attributesKey = {
          PL: 0
        }, this.inputs = Object.create(null);
        for (let ab = 0; ab < 4; ab++) this.inputs[`world${ab}`] = new Cb(this.matrixKey, 16 * ab, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(bb, ab) {
        this.resources.vertexBufferCreated(this.matrixKey, bb, !0), ab && this.resources.vertexBufferCreated(this.attributesKey, ab, !0)
      }
    }
    class sb extends wb {
      constructor(bb, ab, Ub) {
        super(bb), this.mesh = ab, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Ab = this.inputs;
        let Mb = 0;
        for (const {
            size: Eb
          }
          of Ub) Mb += Eb;
        for (const {
            name: Eb,
            offset: Yb,
            size: Bb,
            type: eb
          }
          of Ub) Ab[Eb] = new Cb(this.attributesKey, 4 * Yb, 4 * Mb, Bb, !0, eb);
        this.rowStride = Mb, bb.NJ.set(ab, this);
        const Tb = ab.isVerticesDataPresent;
        ab.isVerticesDataPresent = (bb, Ub) => bb in Ab || Tb.call(ab, bb, Ub)
      }
      attach(bb, ab) {
        this.matrices = bb, this.attributes = ab, this.bind(bb, ab), this.mirror(bb, bb.length, bb.length / 16)
      }
      I5(bb) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, bb ? 64 * bb : void 0)
      }
      o5() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(bb, ab) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * bb, 16 * ab)
      }
      attributeRows(bb, ab) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, bb * this.rowStride, ab * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(bb, ab, Ub) {
        const Ab = this.mesh._thinInstanceDataStorage;
        Ab.matrixData = bb, Ab.matrixBufferSize = ab, Ab.worldMatrices = null, Ab.instancesCount = Ub
      }
    }
    class gb extends wb {
      constructor(bb, ab, Ub) {
        var Ab, Mb, Tb, Eb;
        super(bb), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Ab = null === Ub || void 0 === Ub ? void 0 : Ub.interleavedKinds) && void 0 !== Ab ? Ab : null, this.offsets = null !== (Mb = null === Ub || void 0 === Ub ? void 0 : Ub.interleavedOffsets) && void 0 !== Mb ? Mb : [], this.rowStride = null !== (Tb = null === Ub || void 0 === Ub ? void 0 : Ub.interleavedRowStride) && void 0 !== Tb ? Tb : 0, null === (Eb = this.layout) || void 0 === Eb || Eb.forEach(((bb, ab) => {
          this.inputs[bb] = new Cb(this.attributesKey, 4 * this.offsets[ab], 4 * this.rowStride, Ub.strides[bb])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), bb.batchUploads.set(ab, this), ab.UW.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(bb) {
        const ab = this.packedBatch;
        return ab.renderSelf ? 0 === bb ? this.packedSource : ab.instances[bb - 1] : ab.instances[bb]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(bb, ab, Ub, Ab) {
        const Mb = (ab.renderSelf ? 1 : 0) + ab.rows.length;
        if (this.frame = Ab, this.count = Mb, this.packedSource = bb, this.packedBatch = ab, 0 === Mb) return;
        if (bb.getWorldMatrix(), 16 * Mb > this.matrices.length) {
          let bb = this.matrices.length / 16;
          for (; bb < Mb;) bb *= 2;
          this.matrices = new Float32Array(16 * bb), this.attributes &&= new Float32Array(bb * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Tb = 0;
        ab.renderSelf && this.packRow(Tb++, bb, ab.row, Ub);
        for (let Eb = 0; Eb < ab.rows.length; Eb++) this.packRow(Tb++, ab.instances[Eb], ab.rows[Eb], Ub);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Mb), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Mb * this.rowStride)
      }
      packRow(bb, ab, Ub, Ab) {
        const Mb = this.matrices;
        if (Ub < 0) Mb.set(ab.getWorldMatrix().m, 16 * bb);
        else
          for (let eb = 0; eb < 16; eb++) Mb[16 * bb + eb] = Ab[16 * Ub + eb];
        const Tb = this.attributes;
        if (!Tb) return;
        const Eb = ab.YH,
          Yb = this.layout;
        for (let eb = 0; eb < Yb.length; eb++) {
          var Bb;
          const ab = null !== (Bb = Eb[Yb[eb]]) && void 0 !== Bb ? Bb : 0,
            Ub = bb * this.rowStride + this.offsets[eb];
          ab.toArray ? ab.toArray(Tb, Ub) : ab.copyToArray ? ab.copyToArray(Tb, Ub) : Tb[Ub] = ab
        }
      }
    }
    class Cb {
      constructor(bb, ab, Ub, Ab) {
        let Mb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = bb, this.byteOffset = ab, this.byteStride = Ub, this.size = Ab, this.instanced = Mb, this.type = Tb, this.normalized = Eb
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
    const Vb = "CANVAS_ALPHA_ONE",
      Ob = `override ${Vb}: bool = false;`,
      cb = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function Jb(bb, ab, Ub) {
      var Ab;
      let Mb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Tb = null !== (Ab = ab._colorFormat) && void 0 !== Ab ? Ab : "bgra8unorm",
        Eb = Mb ? 15 : 0;
      return Ub ? {
        ...bb,
        targets: [{
          format: Tb,
          blend: {
            color: Ub,
            alpha: cb
          },
          writeMask: Eb
        }]
      } : {
        ...bb,
        constants: {
          ...bb.constants,
          [Vb]: 1
        },
        targets: [{
          format: Tb,
          writeMask: Eb
        }]
      }
    }

    function nb(bb, ab) {
      bb._renderables.push(ab)
    }

    function Sb(bb) {
      var ab, Ub;
      return null !== (ab = null === (Ub = bb._frameGraph) || void 0 === Ub ? void 0 : Ub._tasks) && void 0 !== ab ? ab : []
    }

    function ba(bb) {
      return bb._currentEncoder
    }

    function aa(bb) {
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
    const Ua = "greater-equal",
      Aa = 2e5,
      Ma = 1e5,
      Ta = new WeakMap;

    function Ea(bb, ab) {
      let Ub = Ta.get(bb);
      if (!Ub) {
        Ub = {
          module: bb.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Ta.set(bb, Ub)
      }
      const Ab = `${ab._colorFormat}|${ab._depthStencilFormat}|${ab._sampleCount}`;
      let Mb = Ub.pipelines.get(Ab);
      if (!Mb) {
        var Tb;
        const {
          module: Eb
        } = Ub;
        Mb = bb.createRenderPipeline({
          label: `placeholder ${Ab}`,
          layout: bb.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Eb,
            entryPoint: "v"
          },
          fragment: {
            module: Eb,
            entryPoint: "f",
            targets: [{
              format: null !== (Tb = ab._colorFormat) && void 0 !== Tb ? Tb : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: ab._depthStencilFormat ? {
            format: ab._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: ab._sampleCount
          }
        }), Ub.pipelines.set(Ab, Mb)
      }
      return Mb
    }

    function Ya(bb, ab, Ub) {
      const Ab = ab.eye,
        Mb = ab.viewMatrix;
      bb[0] = Ab[0] + Mb[2] * Ub, bb[1] = Ab[1] + Mb[6] * Ub, bb[2] = Ab[2] + Mb[10] * Ub
    }
    var Ba = Ub(37303),
      ea = Ub(40736),
      va = Ub(36508);
    const La = Math.PI,
      Pa = La / 1.95,
      Xa = [5e-4 / 94, 125e-7, 5e-4 / 18],
      ja = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((bb => {
        let [ab, Ub] = bb;
        return .434 * La * Math.pow(2 * La / ab, 2) * Ub
      }));

    function Ra(bb, ab, Ub) {
      const {
        up: Ab,
        mieDirectionalG: Mb
      } = bb, Tb = 1 - Za(1 - Math.exp(ab[1] / 45e4), 0, 1), Eb = bb.rayleigh - (1 - Tb), Yb = Math.hypot(ab[0], ab[1], ab[2]), Bb = Yb > 0 ? 1 / Yb : 0, eb = Ub.sunDir;
      for (let Xb = 0; Xb < 3; Xb++) eb[Xb] = ab[Xb] * Bb;
      const vb = eb[0] * Ab[0] + eb[1] * Ab[1] + eb[2] * Ab[2],
        Lb = 1e3 * Math.max(0, 1 - Math.exp(-(Pa - Math.acos(Za(vb, -1, 1))) / 1.5));
      Ub.sunE = Lb;
      const Pb = .2 * bb.turbidity * 1e-17 * bb.mieCoefficient;
      for (let Xb = 0; Xb < 3; Xb++) {
        const bb = Xa[Xb] * Eb,
          ab = ja[Xb] * Pb,
          Ab = Lb / (bb + ab);
        Ub.inScatterR[Xb] = bb * Ab, Ub.inScatterM[Xb] = ab * Ab, Ub.extinctionBeta[Xb] = 8400 * bb + 1250 * ab
      }
      return Ub.sunsetMix = Za(Math.pow(1 - vb, 5), 0, 1), Ub.sunDiscE = 19e3 * Lb, Ub.mieScale = (1 - Mb * Mb) / (4 * La), Ub.mieBase = 1 + Mb * Mb, Ub.mieSlope = 2 * Mb, Ub
    }
    const ka = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const ya = 1 / function(bb) {
      const {
        A: ab,
        B: Ub,
        C: Ab,
        D: Mb,
        E: Tb,
        F: Eb
      } = ka;
      return (bb * (ab * bb + Ab * Ub) + Mb * Tb) / (bb * (ab * bb + Ub) + Mb * Eb) - Tb / Eb
    }(1e3);

    function Za(bb, ab, Ub) {
      return Math.min(Math.max(bb, ab), Ub)
    }
    const Da = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function za(bb, ab) {
      const Ub = new Map(ab),
        Ab = [],
        Mb = [],
        Tb = () => 0 === Mb.length || Mb[Mb.length - 1].active;
      let Eb = null;
      const Yb = () => {
        const bb = [...Ub].filter((bb => {
            let [, ab] = bb;
            return !0 !== ab
          })),
          ab = bb.map((bb => {
            let [ab] = bb;
            return ab
          })).join("|");
        Eb = bb.length ? new RegExp(`\\b(${ab})\\b`, "g") : null
      };
      Yb();
      for (const Bb of bb.split("\n")) {
        const bb = Da.exec(Bb);
        if (!bb) {
          Tb() && Ab.push(Eb ? xa(Bb, Eb, Ub) : Bb);
          continue
        }
        const ab = bb[1],
          eb = bb[2].trim();
        if ("ifdef" === ab || "ifndef" === ab || "if" === ab) {
          const bb = Tb(),
            Ab = "if" === ab ? ia(eb, Ub) : Ub.has(eb) === ("ifdef" === ab);
          Mb.push({
            active: bb && Ab,
            parentActive: bb,
            taken: Ab
          })
        } else if ("elif" === ab || "else" === ab) {
          const bb = Mb[Mb.length - 1];
          if (!bb) throw new Error(`#${ab} without #if`);
          const Ab = !bb.taken && ("else" === ab || ia(eb, Ub));
          bb.active = bb.parentActive && Ab, bb.taken = bb.taken || Ab
        } else if ("endif" === ab) {
          if (!Mb.pop()) throw new Error("#endif without #if")
        } else if (Tb()) {
          const [bb, ...Ab] = eb.split(/\s+/);
          "undef" === ab ? Ub.delete(bb) : Ub.set(bb, !Ab.length || Ab.join(" ")), Yb()
        }
      }
      if (Mb.length) throw new Error("Unterminated #if");
      return Ab.join("\n")
    }

    function xa(bb, ab, Ub) {
      return bb.replace(ab, (bb => {
        const ab = Ub.get(bb);
        return "string" === typeof ab ? ab : bb
      }))
    }

    function ia(bb, ab) {
      var Ub;
      const Ab = null !== (Ub = bb.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== Ub ? Ub : [];
      let Mb = 0;
      const Tb = () => Ab[Mb],
        Eb = () => Ab[Mb++],
        Yb = bb => {
          const Ub = /^\d/.test(bb) ? bb : ab.get(bb);
          return "string" === typeof Ub ? parseInt(Ub) : Number.NaN
        },
        Bb = () => {
          const bb = Eb();
          if ("!" === bb) return !Bb();
          if ("(" === bb) {
            const bb = vb();
            return Eb(), bb
          }
          if ("defined" === bb) {
            const bb = "(" === Tb();
            bb && Eb();
            const Ub = Eb();
            return bb && Eb(), ab.has(Ub)
          }
          const Ub = Tb();
          if ("==" === Ub || "!=" === Ub || ">" === Ub || "<" === Ub || ">=" === Ub || "<=" === Ub) {
            Eb();
            const ab = Yb(bb),
              Ab = Yb(Eb());
            if (Number.isNaN(ab) || Number.isNaN(Ab)) return !1;
            switch (Ub) {
              case "==":
                return ab === Ab;
              case "!=":
                return ab !== Ab;
              case ">":
                return ab > Ab;
              case "<":
                return ab < Ab;
              case ">=":
                return ab >= Ab;
              default:
                return ab <= Ab
            }
          }
          return ab.has(bb)
        },
        eb = () => {
          let bb = Bb();
          for (;
            "&&" === Tb();) {
            Eb();
            const ab = Bb();
            bb = bb && ab
          }
          return bb
        },
        vb = () => {
          let bb = eb();
          for (;
            "||" === Tb();) {
            Eb();
            const ab = eb();
            bb = bb || ab
          }
          return bb
        },
        Lb = vb();
      if (Mb !== Ab.length) throw new Error(`Cannot evaluate #if ${bb}`);
      return Lb
    }
    var fa = Ub(36500),
      ma = Ub(36854),
      pa = Ub(36857),
      Na = Ub(40003),
      Wa = Ub(38059);
    const Ha = 32,
      Ia = [10, 3, 10],
      da = [21, 7, 21],
      Fa = da[0] * da[1] * da[2],
      ha = 0,
      Ga = 1,
      Qa = 2,
      qa = 3,
      ua = 64,
      ra = 512,
      Ka = 4 * Fa,
      oa = 1536,
      la = Ka + Fa * oa,
      ta = 1073741824,
      wa = la + 1;

    function sa(bb, ab) {
      const Ub = bb % ab;
      return Ub < 0 ? Ub + ab : Ub
    }

    function ga(bb, ab, Ub) {
      return Ab = sa(bb, da[0]), Mb = sa(ab, da[1]), Tb = sa(Ub, da[2]), Ab + da[0] * (Mb + da[1] * Tb);
      var Ab, Mb, Tb
    }

    function Ca(bb, ab, Ub) {
      return bb + 8 * (ab + 8 * Ub)
    }

    function Va(bb, ab, Ub) {
      return bb + 4 * (ab + 4 * Ub)
    }
    const Oa = 65535,
      ca = 0,
      Ja = 1,
      na = 2,
      Sa = 3;

    function bU(bb) {
      return Math.ceil(bb * bb / 32)
    }
    const aU = 8192,
      UU = 1 << 18,
      AU = 65536,
      MU = 294912,
      TU = 128,
      EU = 4096,
      YU = 16,
      BU = 16385,
      eU = 81921,
      vU = 147457,
      LU = 4194304;
    const PU = [0, 0, 0],
      XU = [0, 0, 0];

    function jU(bb, ab, Ub, Ab) {
      ! function(bb, ab, Ub) {
        const [Ab, Mb, Tb] = [bb[0], bb[1], bb[2]];
        let Eb, Yb, Bb;
        Math.abs(Mb) < .99 ? (Eb = Tb, Yb = 0, Bb = -Ab) : (Eb = -Mb, Yb = Ab, Bb = 0);
        const eb = Math.hypot(Eb, Yb, Bb);
        ab[0] = Eb / eb, ab[1] = Yb / eb, ab[2] = Bb / eb, Ub[0] = Mb * ab[2] - Tb * ab[1], Ub[1] = Tb * ab[0] - Ab * ab[2], Ub[2] = Ab * ab[1] - Mb * ab[0]
      }(Ab, PU, XU);
      const Mb = 1 / 32;
      for (const [Tb, Eb] of [
          [0, PU],
          [4, XU]
        ]) {
        for (let Ub = 0; Ub < 3; Ub++) bb[ab + Tb + Ub] = Eb[Ub] * Mb;
        bb[ab + Tb + 3] = -(Eb[0] * Ub[0] + Eb[1] * Ub[1] + Eb[2] * Ub[2]) * Mb
      }
    }
    class RU {
      constructor() {
        this.words = new Uint32Array(vU), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      bX(bb, ab) {
        this.parts = 0, this.refs = 0, this.view = bb, this.viewAt = ab;
        const Ub = bb[ab + 1] * bb[ab + 6] - bb[ab + 2] * bb[ab + 5],
          Ab = bb[ab + 2] * bb[ab + 4] - bb[ab] * bb[ab + 6],
          Mb = bb[ab] * bb[ab + 5] - bb[ab + 1] * bb[ab + 4],
          Tb = Math.hypot(Ub, Ab, Mb) || 1;
        this.light[0] = Ub / Tb, this.light[1] = Ab / Tb, this.light[2] = Mb / Tb
      }
      add(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= EU || ! function(bb, ab, Ub) {
            const Ab = bb[ab],
              Mb = bb[ab + 1],
              Tb = bb[ab + 2],
              Eb = bb[ab + 3],
              Yb = bb[ab + 4],
              Bb = bb[ab + 5],
              eb = bb[ab + 6],
              vb = bb[ab + 7],
              Lb = bb[ab + 8],
              Pb = bb[ab + 9],
              Xb = bb[ab + 10],
              jb = bb[ab + 11],
              Rb = bb[ab + 12],
              kb = bb[ab + 13],
              yb = bb[ab + 14],
              Zb = bb[ab + 15],
              Db = Ab * Bb - Mb * Yb,
              zb = Ab * eb - Tb * Yb,
              xb = Ab * vb - Eb * Yb,
              ib = Mb * eb - Tb * Bb,
              fb = Mb * vb - Eb * Bb,
              mb = Tb * vb - Eb * eb,
              pb = Lb * kb - Pb * Rb,
              Nb = Lb * yb - Xb * Rb,
              Wb = Lb * Zb - jb * Rb,
              Hb = Pb * yb - Xb * kb,
              Ib = Pb * Zb - jb * kb,
              db = Xb * Zb - jb * yb,
              Fb = Db * db - zb * Ib + xb * Hb + ib * Wb - fb * Nb + mb * pb;
            if (!(Math.abs(Fb) > 1e-12)) return !1;
            const hb = 1 / Fb;
            return Ub[0] = (Bb * db - eb * Ib + vb * Hb) * hb, Ub[1] = (Tb * Ib - Mb * db - Eb * Hb) * hb, Ub[2] = (kb * mb - yb * fb + Zb * ib) * hb, Ub[3] = (Xb * fb - Pb * mb - jb * ib) * hb, Ub[4] = (eb * Wb - Yb * db - vb * Nb) * hb, Ub[5] = (Ab * db - Tb * Wb + Eb * Nb) * hb, Ub[6] = (yb * xb - Rb * mb - Zb * zb) * hb, Ub[7] = (Lb * mb - Xb * xb + jb * zb) * hb, Ub[8] = (Yb * Ib - Bb * Wb + vb * pb) * hb, Ub[9] = (Mb * Wb - Ab * Ib - Eb * pb) * hb, Ub[10] = (Rb * fb - kb * xb + Zb * Db) * hb, Ub[11] = (Pb * xb - Lb * fb - jb * Db) * hb, Ub[12] = (Bb * Nb - Yb * Hb - eb * pb) * hb, Ub[13] = (Ab * Hb - Mb * Nb + Tb * pb) * hb, Ub[14] = (kb * zb - Rb * ib - yb * Db) * hb, Ub[15] = (Lb * ib - Pb * zb + Xb * Db) * hb, !0
          }(ab, Ub, this.inverse)) return;
        const {
          view: Ab,
          viewAt: Mb
        } = this, Tb = Ub;
        let Eb = 1 / 0,
          Yb = 1 / 0,
          Bb = -1 / 0,
          eb = -1 / 0,
          vb = -1 / 0;
        const [Lb, Pb, Xb] = this.light;
        for (let xb = 0; xb < 8; xb++) {
          const Ub = 1 & xb ? bb.hi[0] : bb.lo[0],
            jb = 2 & xb ? bb.hi[1] : bb.lo[1],
            Rb = 4 & xb ? bb.hi[2] : bb.lo[2],
            kb = Ub * ab[Tb] + jb * ab[Tb + 4] + Rb * ab[Tb + 8] + ab[Tb + 12],
            yb = Ub * ab[Tb + 1] + jb * ab[Tb + 5] + Rb * ab[Tb + 9] + ab[Tb + 13],
            Zb = Ub * ab[Tb + 2] + jb * ab[Tb + 6] + Rb * ab[Tb + 10] + ab[Tb + 14],
            Db = Ab[Mb] * kb + Ab[Mb + 1] * yb + Ab[Mb + 2] * Zb + Ab[Mb + 3],
            zb = Ab[Mb + 4] * kb + Ab[Mb + 5] * yb + Ab[Mb + 6] * Zb + Ab[Mb + 7];
          Eb = Math.min(Eb, Db), Yb = Math.min(Yb, zb), Bb = Math.max(Bb, Db), eb = Math.max(eb, zb), vb = Math.max(vb, Lb * kb + Pb * yb + Xb * Zb)
        }
        if (Bb < -1 || eb < -1 || Eb >= 1 || Yb >= 1) return;
        const jb = this.parts++,
          Rb = this.rects;
        Rb[4 * jb] = kU(Eb), Rb[4 * jb + 1] = kU(Yb), Rb[4 * jb + 2] = kU(Bb), Rb[4 * jb + 3] = kU(eb);
        const kb = this.inverse,
          {
            cell: yb,
            dims: Zb,
            lo: Db
          } = bb,
          zb = eU + jb * YU;
        for (let xb = 0; xb < 3; xb++) this.floats[zb + 4 * xb] = kb[xb] / yb, this.floats[zb + 4 * xb + 1] = kb[4 + xb] / yb, this.floats[zb + 4 * xb + 2] = kb[8 + xb] / yb, this.floats[zb + 4 * xb + 3] = (kb[12 + xb] - Db[xb]) / yb;
        this.words[zb + 12] = bb.at, this.floats[zb + 13] = vb + .001 * (1 + Math.abs(vb)), this.words[zb + 14] = Zb[0] | Zb[1] << 8 | Zb[2] << 16
      }
      finish() {
        const bb = TU,
          {
            counts: ab,
            rects: Ub,
            words: Ab
          } = this;
        ab.fill(0);
        let Mb = 0,
          Tb = 0;
        for (; Tb < this.parts; Tb++) {
          const Ab = 4 * Tb,
            Eb = (Ub[Ab + 2] - Ub[Ab] + 1) * (Ub[Ab + 3] - Ub[Ab + 1] + 1);
          if (Mb + Eb > 65536) break;
          Mb += Eb;
          for (let Mb = Ub[Ab + 1]; Mb <= Ub[Ab + 3]; Mb++)
            for (let Tb = Ub[Ab]; Tb <= Ub[Ab + 2]; Tb++) ab[Mb * bb + Tb]++
        }
        let Eb = 0;
        for (let Bb = 0; Bb < 16384; Bb++) Ab[Bb] = Eb, Eb += ab[Bb], ab[Bb] = Ab[Bb];
        Ab[16384] = Eb;
        for (let Bb = 0; Bb < Tb; Bb++) {
          const Mb = 4 * Bb;
          for (let Tb = Ub[Mb + 1]; Tb <= Ub[Mb + 3]; Tb++)
            for (let Eb = Ub[Mb]; Eb <= Ub[Mb + 2]; Eb++) Ab[BU + ab[Tb * bb + Eb]++] = Bb
        }
        const Yb = this.floats;
        for (let Bb = 0; Bb < 16384; Bb++) {
          const bb = BU + Ab[Bb],
            ab = bb + Math.min(Ab[Bb + 1] - Ab[Bb], 64);
          for (let Ub = bb + 1; Ub < ab; Ub++) {
            const ab = Ab[Ub],
              Mb = Yb[81934 + ab * YU];
            let Tb = Ub - 1;
            for (; Tb >= bb && Yb[81934 + Ab[Tb] * YU] < Mb; Tb--) Ab[Tb + 1] = Ab[Tb];
            Ab[Tb + 1] = ab
          }
        }
        this.refs = Mb
      }
    }

    function kU(bb) {
      return Math.min(127, Math.max(0, Math.floor((.5 * bb + .5) * TU)))
    }

    function yU(bb, ab, Ub, Ab, Mb) {
      for (let Tb = 0; Tb < 4; Tb++)
        for (let Eb = 0; Eb < 4; Eb++) Mb[4 * Tb + Eb] = bb[ab + 4 * Tb] * Ub[Ab + Eb] + bb[ab + 4 * Tb + 1] * Ub[Ab + 4 + Eb] + bb[ab + 4 * Tb + 2] * Ub[Ab + 8 + Eb] + bb[ab + 4 * Tb + 3] * Ub[Ab + 12 + Eb]
    }

    function ZU(bb, ab, Ub, Ab, Mb) {
      const Tb = bb[0] - ab,
        Eb = bb[1] - Ub,
        Yb = bb[2] - Ab,
        Bb = bb[3] - ab,
        eb = bb[4] - Ub,
        vb = bb[5] - Ab,
        Lb = bb[6] - ab,
        Pb = bb[7] - Ub,
        Xb = bb[8] - Ab;
      if (Math.min(Tb, Bb, Lb) > Mb || Math.max(Tb, Bb, Lb) < -Mb) return !1;
      if (Math.min(Eb, eb, Pb) > Mb || Math.max(Eb, eb, Pb) < -Mb) return !1;
      if (Math.min(Yb, vb, Xb) > Mb || Math.max(Yb, vb, Xb) < -Mb) return !1;
      const jb = Bb - Tb,
        Rb = eb - Eb,
        kb = vb - Yb,
        yb = Lb - Bb,
        Zb = Pb - eb,
        Db = Xb - vb,
        zb = Rb * Db - kb * Zb,
        xb = kb * yb - jb * Db,
        ib = jb * Zb - Rb * yb;
      if (Math.abs(zb * Tb + xb * Eb + ib * Yb) > Mb * (Math.abs(zb) + Math.abs(xb) + Math.abs(ib))) return !1;
      const fb = [jb, Rb, kb, yb, Zb, Db, Tb - Lb, Eb - Pb, Yb - Xb];
      for (let mb = 0; mb < 3; mb++) {
        const bb = fb[3 * mb],
          ab = fb[3 * mb + 1],
          Ub = fb[3 * mb + 2];
        for (let Ab = 0; Ab < 3; Ab++) {
          const jb = 0 === Ab ? 0 : 1 === Ab ? Ub : -ab,
            Rb = 0 === Ab ? -Ub : 1 === Ab ? 0 : bb,
            kb = 0 === Ab ? ab : 1 === Ab ? -bb : 0,
            yb = jb * Tb + Rb * Eb + kb * Yb,
            Zb = jb * Bb + Rb * eb + kb * vb,
            Db = jb * Lb + Rb * Pb + kb * Xb,
            zb = Mb * (Math.abs(jb) + Math.abs(Rb) + Math.abs(kb));
          if (Math.min(yb, Zb, Db) > zb || Math.max(yb, Zb, Db) < -zb) return !1
        }
      }
      return !0
    }
    const DU = new Float32Array(1);
    new Uint32Array(DU.buffer);
    var zU = Ub(38063);

    function xU(bb) {
      const [ab, Ub, Ab] = zU.r;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${bb.group}) @binding(${bb.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${ab-1}, ${Ub-1}, ${Ab-1});\n}\n`
    }

    function iU(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Mb, Tb, Eb] = da, [Yb, Bb, eb] = Ia, vb = Math.log2(Ha), Lb = Ab ? "var<private> bloxdSpCrossed: bool;\n" : "", Pb = Ab ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${bb.group}) @binding(${bb.RP}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${bb.group}) @binding(${bb.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${Ub?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Lb}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Ja}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${na}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${Ub?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${Sa}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Mb}, ${Tb}, ${Eb});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Mb} * (s.y + ${Tb} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${Yb}, ${Bb}, ${eb}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${vb}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${qa}u) {\n\t\treturn named && state == ${Qa}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${Ka}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${la}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${ab?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${ab?`\t\tif (exits && step > 0 && step % ${pU} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${vb}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${ha}u || kind == ${Ga}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${Qa}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${Ka}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Pb}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const fU = {
      group: 0,
      uniform: 0,
      RP: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function mU() {
      const bb = fU;
      return `${xU(bb)}${iU(bb,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${zU.d}>,\n}\n@group(${bb.group}) @binding(${bb.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${bb.group}) @binding(${bb.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${zU.m})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${zU.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${zU.g}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const pU = 2;
    const NU = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function WU(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Ab = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${ab.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Mb = "trace" === Ub || "lit" === Ub,
        Tb = "maskEdge" === Ub ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Eb = Mb ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${ab.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${ab.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===Ub?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Tb};\n`;
      return `${Ab}${bb.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Mb?function(){const[bb,ab,Ub]=zU.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${bb}.0, ${ab}.0, ${Ub}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Eb}}\n`:""}${bb.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${ab.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${ab.renderOffset});\n}\n`:""}`
    }
    const HU = "bloxdSpOwnTexture";

    function IU(bb) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${bb.texture}) - 1u)))`
    }
    const dU = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${Ba.d.map((bb=>{let[ab,Ub]=bb;return`\tbloxdSpOut.${ab} = (bloxdSpWord & ${Ub}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function FU(bb) {
      return `bloxdSpFlags(${bb})`
    }
    const hU = `${Na.k}.eyePosition`;

    function GU(bb, ab, Ub, Ab, Mb) {
      const Tb = bb.indexOf(ab);
      if (Tb < 0 || bb.indexOf(ab, Tb + 1) >= 0) throw new Error(`Lite's ${Mb} program changed at the shader pack ${Ab} hook: ${Tb<0?"no":"more than one"} anchor (lite/${Mb}ShaderPack.ts)`);
      return bb.slice(0, Tb) + Ub + bb.slice(Tb + ab.length)
    }

    function QU(bb) {
      return bb.sunShadow || bb.airShadow
    }

    function qU(bb, ab) {
      return ab && QU(bb)
    }
    const uU = {
      group: Na.g,
      ...Na.n
    };

    function rU(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!QU(bb)) return "";
      if (ab) {
        const ab = uU,
          Mb = "trace" === Ub || "lit" === Ub;
        let Tb = "";
        bb.sunShadow && (Tb = Mb ? `${iU(ab,!0,"lit"===Ub)}${Ab=ab,`@group(${Ab.group}) @binding(${Ab.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Ab.group}) @binding(${Ab.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(bb, ab, Ub) {
          const Ab = `@group(${bb}) @binding(${ab}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return Ub ? `${Ab}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${NU}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((bb=>`\t{\n\t\tlet o = vec2i(${bb});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Ab
        }(ab.group, Na.q, "maskEdge" === Ub));
        const Eb = {
          shadowDirection: `${Na.k}.shadowDirection`,
          renderOffset: `${Na.k}.renderOffset`,
          eyePosition: `${Na.k}.eyePosition`
        };
        return `${xU(ab)}${Tb}${function(bb){const[ab,Ub,Ab]=zU.r;return`@group(${bb.group}) @binding(${bb.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${bb.group}) @binding(${bb.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${ab}.0, ${Ub}.0, ${Ab}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(ab)}${WU(bb,Eb,Ub)}`
      }
      var Ab;
      return `${bb.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${bb.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function KU(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!ab) return "";
      const Tb = (Eb = "fragmentInputs.vPositionW", Yb = bb.sunShadow ? {
        normal: Ub,
        flags: Ab
      } : null, `\n\tbloxdSpShadowPosition = ${Eb};\n${Yb?`\tbloxdSpShadowNormal = normalize(${Yb.normal});\n\tbloxdSpShadowEmissive = (${Yb.flags} & ${Ba.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${Yb.flags} & ${Ba.g}u) != 0u;\n`:""}`);
      var Eb, Yb;
      return bb.sunShadow && ("mask" === Mb || "maskEdge" === Mb) ? `${Tb}${Bb="fragmentInputs.position",eb="maskEdge"===Mb,`\n\tbloxdSpShadowPixel = vec2i(${Bb}.xy);\n${eb?`\tbloxdSpShadowZ = ${Bb}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Bb}.z), dpdy(${Bb}.z));\n`:""}`}` : Tb;
      var Bb, eb
    }
    const oU = "bloxdSpTextureRotation",
      lU = "bloxdSpTextureLayers",
      tU = `@group(${Na.g}) @binding(${Na.t}) var<storage, read> ${lU}: array<u32>;\n`;

    function wU(bb) {
      return `\tvertexOutputs.vPackTexture = ${lU}[min(u32(${bb}), arrayLength(&${lU}) - 1u)];\n`
    }

    function sU(bb) {
      return void 0 !== bb.uv
    }

    function gU(bb) {
      if (!bb) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (sU(bb)) return function(bb) {
        const {
          texture: ab,
          cells: Ub,
          layers: Ab
        } = bb, Mb = `textureDimensions(${ab}, bloxdSpLevel)`, Tb = Ub ? `max(vec2u(vec2f(${Mb}) / ${Ub}), vec2u(1u))` : Mb, Eb = Ub ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Tb};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${Ub}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${Ub}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${ab}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Mb} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Tb};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${ab}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let Yb;
        if (Ub)
          if (1 === Ab.length) Yb = `\treturn bloxdSpOwnTexel(${Ab[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const bb = Ab.length - 1;
            Yb = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Ab[bb]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let ab = bb - 1; ab >= 0; ab--) Yb += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Ab[ab]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            Yb += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else Yb = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${bb.id?`var<private> ${HU}: u32;\n`:""}${Eb}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${IU(bb)};\n\treturn ${Tb};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${bb.id?HU:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${IU(bb)};\n${Yb}}\n`
      }(bb);
      const ab = bb,
        Ub = bb => {
          const Ub = bb > 0 ? `bloxdSpLayer - ${ab.layers*bb}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${bb}, ${ab.sampler}, bloxdSpTurned, ${Ub}, round(bloxdSpMipLevel));`
        };
      let Ab = "";
      for (let Tb = 0; Tb < ab.count - 1; Tb++) Ab += `\tif (bloxdSpLayer < ${ab.layers*(Tb+1)}u) {\n\t\t${Ub(Tb)}\n\t}\n`;
      const Mb = ab.frame ? `${ab.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${oU}: u32;\n${tU}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${oU} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${oU} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${oU} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Mb}${Ab}\t${Ub(ab.count-1)}\n}\n`
    }

    function CU(bb, ab, Ub) {
      return !!bb.surface && "bloxdDefaultSurface" !== bb.surface && function(bb, ab) {
        return "liquid" === ab || !bb
      }(ab, Ub)
    }

    function VU(bb, ab) {
      return bb.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${ab.vertexLocalPosition}, ${FU(ab.vertexFlags)});\n\t\tlet bloxdSpVertex = ${bb.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function OU(bb, ab, Ub, Ab, Mb) {
      if (!bb.surface) return "";
      const Tb = (bb, ab) => `\n\tlet bloxdSpTexelUV = ${bb};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${ab}) - 1u));`;
      let Eb = "",
        Yb = "0u, 0u, vec2f(0.0), 0.0";
      const Bb = Ab && sU(Ab) ? Ab : null,
        eb = Ab && !sU(Ab) ? Ab : null;
      if (Bb) {
        Eb = `${Bb.id?`\n\tlet bloxdSpTexture = ${Bb.id};\n\t${HU} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Bb.uv};${Tb(function(bb,ab){var Ub;return`${null!==(Ub=bb.levelUv)&&void 0!==Ub?Ub:bb.cells?`${ab} / ${bb.cells}`:ab} * vec2f(textureDimensions(${bb.texture}))`}(Bb,"bloxdSpUv"),Bb.texture)}`, Yb = (Bb.id ? `${HU}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else eb && (Eb = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${oU} = bloxdSpTexture >> 16u;${Tb(`fragmentInputs.vMainUV1 * ${(0,fa.jb)(eb.width)}`,"textureAtlas0")}`, Yb = `bloxdSpTexture & 0xffffu, ${oU}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const vb = Mb.overlayColour,
        Lb = vb ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Pb = "bloxdDefaultSurface" !== bb.surface || vb ? `\n\tbaseColor = vec4f(${Lb}, baseColor.a);` : "",
        Xb = CU(bb, ab, Ub) ? `\n\t${Mb.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Eb}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Mb.alpha}, ${Mb.enchantTier}, ${Mb.enchantColour}, ${Mb.enchantSpeed}, ${null!==vb&&void 0!==vb?vb:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Mb.normal}, ${Mb.localPosition}, ${FU(Mb.flags)}, ${Yb});\n\tlet bloxdSpSurface = ${bb.surface}(bloxdSpSurfaceIn);${Pb}${Xb}\n`
    }
    const cU = "bloxdSpLightIn";

    function JU(bb, ab, Ub, Ab) {
      if (!bb.light) return "";
      const Mb = ab ? `${fa.l}.rgb, ${fa.l}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${fa.i}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Tb,
          diffuse: Eb,
          emissive: Yb,
          ambient: Bb,
          fogColour: eb,
          fogAlpha: vb,
          normal: Lb
        } = Ab;
      return `\tvar ${cU} = BloxdLightIn(vec3f(0.0), ${Ub?Tb:"0.0"}, ${Eb}, ${Yb}, ${Bb}, ${Mb}, ${eb}, ${vb}, fragmentInputs.vPositionW, ${Lb}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${cU}.litColour = bloxdLitColour(bloxdSpSurface, ${cU});\n`
    }

    function nU(bb) {
      return bb.light ? `\n\t{\n\t\tlet bloxdSpLight = ${bb.light}(bloxdSpSurface, ${cU});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const SU = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      bA = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      aA = "\treturn color;\n}",
      UA = {
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
    const AA = Object.freeze({});

    function MA(bb) {
      var ab;
      return !(null === (ab = (0, Wa.g)(bb)) || void 0 === ab || !ab.sceneDepth)
    }

    function TA(bb) {
      const ab = (0, Wa.g)(bb);
      return !!ab && CU(ab.hooks, ab.strict, ab.program)
    }

    function EA(bb, ab, Ub, Ab) {
      return GU(bb, ab, Ub, Ab, "terrain")
    }

    function YA(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Tb = function(bb) {
          return (0, Wa.e)(bb.packVariant, bb.liquid ? "liquid" : "terrain")
        }(bb),
        {
          hooks: Eb
        } = Tb,
        Yb = qU(Tb, Ab),
        Bb = "edge" === Mb ? "maskEdge" : "plain" === Mb ? "mask" : "trace",
        eb = VU(Eb, UA);
      eb && (ab = EA(ab, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${eb}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const vb = "atlas" === bb.texture ? {
          count: bb.atlasCount,
          layers: bb.atlasLayers,
          width: bb.qV,
          sampler: "atlasSampler",
          frame: bb.animated ? Ub : null
        } : null,
        Lb = `${Tb.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${KU(Tb,Yb,UA.normal,UA.flags,Bb)}${OU(Eb,Tb.strict,Tb.program,vb,UA)}`;
      Lb && (ab = EA(ab, SU, `${SU.slice(0,-1)}${Lb}`, "surface"));
      const Pb = nU(Eb);
      return Pb && (ab = EA(ab, bA, `${JU(Eb,bb.lighting,bb.dirLightCount>0,UA)}${bA}`, "light input"), ab = EA(ab, aA, `${Pb.slice(1)}${aA}`, "light")), `${(0,Na.x)()}${Tb.sceneDepth?`@group(${Na.g}) @binding(${Na.m}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${hU};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${rU(Tb,Yb,Bb)}${gU(vb)}${dU}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Tb.code}${ab}`
    }
    const BA = ib.d.WGSL;

    function eA(bb) {
      return void 0 !== bb.packVariant
    }
    const vA = {
        pAb: 0,
        NAb: 4,
        WAb: 8,
        HAb: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      LA = vA.aoLevels + 4,
      PA = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      XA = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      jA = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      RA = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      kA = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      yA = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      ZA = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      DA = 0,
      zA = 3,
      xA = 4,
      iA = 5,
      fA = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${ma.e}, ${ma.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${ma.e}, ${ma.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      mA = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((bb=>pa.c>>bb&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const pA = {
      qL: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: bb => `animDataPerTex[${bb}]`
    };

    function NA(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pA;
      return `\n\tlet atlasIdxIn = ${bb};\n\tlet animTick = ${Ub.qL};\n\tlet animTickStride = ${Ub.stride};\n\tlet numAnimTextures = ${Ub.count};\n\t${(0,fb.c)(ib.d.WGSL,Ub.perTexture)}\n\t${ab}animLayer;\n`
    }

    function WA(bb) {
      const ab = (ab, Ub) => {
        const Ab = ab > 0 ? `fragmentInputs.texAtlasIndex - ${bb.atlasLayers.toFixed(1)} * ${ab.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${Ub?"textureSampleLevel":"textureSample"}(textureAtlas${ab}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Ab}))${Ub?", atlasLod":""})`
      };
      if (1 === bb.atlasCount) return `baseColor = ${ab(0,!1)};`;
      let Ub = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,fa.jb)(bb.qV)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Ab = 0; Ab < bb.atlasCount; Ab++) {
        const Mb = bb.atlasLayers * (Ab + 1) - .5;
        Ub += `${Ab>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,fa.jb)(Mb)}) {\n\t\tbaseColor = ${ab(Ab,!0)};\n\t}`
      }
      return Ub
    }

    function HA(bb) {
      return `terrain-${bb.texture}${"atlas"===bb.texture?bb.atlasCount:""}${bb.animated?"-anim":""}${bb.alphaTest?"-test":""}${bb.lighting?"-lit":""}-dir${bb.dirLightCount}${bb.packed?"-packed":""}${eA(bb)?`-sp${bb.packVariant}`:""}${bb.liquid?"-liquid":""}${bb.resting?"-rest":""}`
    }

    function IA(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Ab = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const Ub = "none" !== bb.texture,
          Ab = "atlas" === bb.texture,
          Mb = bb.dirLightCount > 0,
          Tb = eA(bb);
        if (bb.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${bb.dirLightCount}`);
        let Eb = 1,
          Yb = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Ab) {
          bb.animated && (Yb += `@group(2) @binding(${Eb++}) var<storage, read> animDataPerTex: array<f32>;\n`), Yb += `@group(2) @binding(${Eb++}) var atlasSampler: sampler;\n`;
          for (let ab = 0; ab < bb.atlasCount; ab++) Yb += `@group(2) @binding(${Eb++}) var textureAtlas${ab}: texture_2d_array<f32>;\n`
        } else "single" === bb.texture && (Yb += `@group(2) @binding(${Eb++}) var diffuseSamplerSampler: sampler;\n`, Yb += `@group(2) @binding(${Eb++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Bb = function(bb) {
            const ab = ZA,
              Ub = "none" !== bb.texture,
              Ab = "atlas" === bb.texture,
              Mb = eA(bb);
            return bb.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${Ub?"uv: vec2f,":""}\n\t${Ab?"texAtlasIndices: f32,":""}\n\t${bb.lighting?"aPackedLightLevels: f32,":""}\n\t${Mb?"blockFlagWords: vec2u,":""}\n}\n${fA}\n${mA}\n${"single"===bb.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${Ub?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===bb.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Ab?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${bb.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Mb?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${ab.position}) position: vec3f,\n\t@location(${ab.normal}) normal: vec4f,\n\t@location(${ab.color}) color: vec4f,\n\t${Ub?`@location(${ab.uv}) uv: vec2f,`:""}\n\t${bb.lighting?`@location(${ab.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Mb?`@location(${ab.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(bb),
          eb = `\n${RA}\n${XA}\n${jA}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${Yb}\n${Ob}\n${Bb.declarations}\nstruct Varyings {\n\t${"none"===ab?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${bb.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Mb?"@location(5) vTerrainLambert: f32,":""}\n\t${Ub?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Ab?"@location(7) texAtlasIndex: f32,":""}\n\t${bb.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Tb?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Tb&&Ab?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${bb.resting?"":(0,fa.t)(BA)}\n${yA}\n\n@vertex\nfn mainVertex(${Bb.parameter}) -> Varyings {\n\t${Bb.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Tb?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${Ba.c.placed}u;`:""}\n\t${Tb&&Ab?wU("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${bb.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${Ub?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Ab?function(bb){return bb?NA("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(bb.animated):""}\n\t${"single"===bb.texture&&bb.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,fa.Z)(BA)}\n\t${(0,fa.J)(BA,bb.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${bb.resting?"":kA}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Ab?WA(bb):""}\n\t${"single"===bb.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Ub?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${bb.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Mb?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${Vb}));\n\t${eA(bb)?(0,fa.fb)(ib.d.WGSL):(0,fa.S)(BA)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          vb = new Set;
        bb.lighting && vb.add("BLOXD_LIGHTING");
        Mb && vb.add("BLOXD_TERRAIN_DIRECTIONAL");
        return za(eb, new Map([...vb].map((bb => [bb, !0]))))
      }(bb, Ub);
      if (!eA(bb)) return Ab;
      const Mb = YA(bb, Ab, NA, ab, Ub);
      return "none" === Ub ? Mb : `${Mb}${function(bb){const ab="none"!==bb.texture&&bb.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${bb.resting?"":kA}\n\t${bb.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${ab&&"atlas"===bb.texture?WA(bb):""}\n\t${ab&&"single"===bb.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${ab?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${Ba.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(bb)}`
    }
    const dA = new Map([
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

    function FA(bb, ab) {
      const Ub = new Map;
      let Ab = 0;
      const Mb = [],
        Tb = [],
        Eb = [];
      for (const eb of ab) {
        var Yb, Bb;
        const ab = null !== (Yb = eb.type.trim().split(/\s+/).pop()) && void 0 !== Yb ? Yb : eb.type,
          vb = dA.get(ab);
        if (!vb) throw new Error(`Lite: no uniform layout for ${eb.name}: ${eb.type}`);
        const Lb = null !== (Bb = eb.arraySize) && void 0 !== Bb ? Bb : 0,
          Pb = Lb ? 4 : vb.align;
        Ab = Math.ceil(Ab / Pb) * Pb;
        const Xb = Lb ? 4 * Math.ceil(vb.floats / 4) : vb.floats;
        if (Ub.set(eb.name, {
            offset: Ab,
            floats: vb.floats,
            arraySize: Lb,
            stride: Xb
          }), Lb && vb.floats <= 2) {
          const ab = `${bb}_${Eb.length}_strided`;
          Tb.push(`struct ${ab} {\n\t@size(16) el: ${vb.wgsl},\n}`), Eb.push(eb.name), Mb.push(`\t@align(16) ${eb.name}: array<${ab}, ${Lb}>,`)
        } else Lb ? Mb.push(`\t@align(16) ${eb.name}: array<${vb.wgsl}, ${Lb}>,`) : Mb.push(`\t${eb.name}: ${vb.wgsl},`);
        Ab += Lb ? Xb * Lb : vb.floats
      }
      return {
        slots: Ub,
        floats: Math.max(4, 4 * Math.ceil(Ab / 4)),
        wgsl: `${Tb.join("\n")}\nstruct ${bb} {\n${Mb.join("\n")}\n}\n`,
        stridedArrays: Eb
      }
    }
    const hA = [{
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
      GA = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      QA = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function qA(bb, ab) {
      return `#if defined(${bb}) && ${bb}DIRECTUV == 0\nvarying v${ab}UV: vec2f;\n#endif`
    }

    function uA(bb, ab, Ub) {
      return `#if defined(${bb}) && ${bb}DIRECTUV == 0\nif (uniforms.v${ab}Infos.x==0.)\n{vertexOutputs.v${ab}UV= (uniforms.${Ub}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${ab}UV= (uniforms.${Ub}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function rA(bb, ab, Ub) {
      return `#ifdef ${bb}\n#if ${bb}DIRECTUV == 1\n#define v${ab}UV vMainUV1\n#elif ${bb}DIRECTUV == 2\n#define v${ab}UV vMainUV2\n#else\nvarying v${ab}UV: vec2f;\n#endif\nvar ${Ub}SamplerSampler: sampler;\nvar ${Ub}Sampler: texture_2d<f32>;\n#endif`
    }
    const KA = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      oA = 256,
      lA = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      tA = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      wA = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      sA = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      gA = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      CA = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      VA = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      OA = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${tA}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${qA("OPACITY","Opacity")}\n${qA("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${VA}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${wA}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${uA("OPACITY","Opacity","opacity")}\n${uA("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${sA}\n#define CUSTOM_VERTEX_MAIN_END\n${gA}\n}\n`;
    const cA = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${rA("OPACITY","Opacity","opacity")}\n${rA("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${VA}\n${CA}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((bb,ab)=>function(bb){const ab=`
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
      ab
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      bb
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      ab
    }.vLightData, diffuse$ {
      bb
    }.rgb, $ {
      ab
    }.vLightSpecular.rgb, diffuse$ {
      bb
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(ab))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, JA = /^([gimus]+)!/, nA = new Set;

    function SA(bb) {
      nA.has(bb) || (nA.add(bb), console.warn(`Lite: no place for plugin code at ${bb} in the standard shader: it is left out`))
    }

    function bM(bb, ab) {
      let Ub = bb;
      const Ab = new Map;
      for (const [Tb, Eb] of ab) {
        var Mb;
        Ab.set(Tb, `${null!==(Mb=Ab.get(Tb))&&void 0!==Mb?Mb:""}${Eb}\n`)
      }
      for (const [Tb, Eb] of Ab) {
        if (!Tb.startsWith("!")) {
          const bb = `#define ${Tb}`;
          if (!Ub.includes(bb)) {
            SA(Tb);
            continue
          }
          Ub = Ub.replace(bb, (() => `\n${Eb}\n${bb}`));
          continue
        }
        let bb = Tb.substring(1),
          ab = "g";
        if (bb.startsWith("!")) ab = "", bb = bb.substring(1);
        else {
          const Ub = JA.exec(bb);
          Ub && (ab = Ub[1], bb = bb.substring(ab.length + 1))
        }
        const Ab = new RegExp(bb, ab.includes("g") ? ab : `${ab}g`);
        let Mb = Ab.exec(Ub);
        for (Mb || SA(Tb); Mb;) {
          const bb = Mb,
            ab = Eb.replace(/\$(\d+)/g, ((ab, Ub) => Number(Ub) < bb.length ? bb[Number(Ub)] : ""));
          Ub = Ub.substring(0, bb.index) + ab + Ub.substring(bb.index + bb[0].length), Ab.lastIndex = bb.index + ab.length, Mb = Ab.exec(Ub)
        }
      }
      return Ub
    }
    const aM = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      UM = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      AM = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function MM(bb) {
      const ab = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let Ub = bb.replace(aM, ((bb, Ub, Ab, Mb, Tb, Eb) => ("attribute" === Ub ? ab.attributes.push({
        name: Tb,
        type: Eb
      }) : void 0 === Ub ? ab.varyings.push({
        name: Tb,
        type: Eb,
        interpolation: EM(Eb, Ab, Mb)
      }) : ab.uniforms.push({
        name: Tb,
        type: TM(Eb)
      }), "")));
      return Ub = Ub.replace(UM, ((bb, Ub) => (ab.samplers.add(Ub), ""))), Ub = Ub.replace(AM, ((bb, Ub, Ab) => (ab.textures.push({
        name: Ub,
        type: Ab
      }), ""))), ab.body = Ub, ab
    }

    function TM(bb) {
      const ab = bb.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        Ub = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(ab);
      if (!Ub) throw new Error(`Lite: unsupported uniform type ${bb}`);
      return Ub
    }

    function EM(bb, ab, Ub) {
      return void 0 === ab && void 0 === Ub ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(bb.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === ab ? "@interpolate(flat) " : `@interpolate(${null!==ab&&void 0!==ab?ab:"perspective"}, ${null!==Ub&&void 0!==Ub?Ub:"center"}) `
    }

    function YM(bb) {
      return LM({
        defines: bb.defines,
        vertex: bM(OA, bb.vertexCode),
        fragment: bM(cA, bb.fragmentCode),
        members: [...hA, ...bb.defines.has("OPACITY") ? GA : [], ...bb.defines.has("EMISSIVE") ? QA : [], ...bb.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function BM(bb) {
      const ab = bb.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (ab === bb) throw new Error("Lite: fragment main has no return");
      return ab
    }
    const eM = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${tA}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${wA}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${sA}\n${gA}\n}\n`,
      vM = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${CA}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function LM(bb) {
      const ab = bb.defines,
        Ub = MM(za(bb.vertex, ab)),
        Ab = MM(za(bb.fragment, ab)),
        Mb = new Map;
      for (const Db of [...Ub.varyings, ...Ab.varyings]) Mb.has(Db.name) || Mb.set(Db.name, Db);
      const Tb = [...Mb.values()].map(((bb, ab) => `\t@location(${ab}) ${bb.interpolation}${bb.name}: ${bb.type},`)),
        Eb = [...bb.members];
      for (const Db of [...Ub.uniforms, ...Ab.uniforms]) Eb.some((bb => bb.name === Db.name)) || Eb.push(Db);
      const Yb = FA(bb.structName, Eb),
        Bb = [],
        eb = [];
      let vb = 1;
      const Lb = new Set;
      for (const Db of [...Ub.textures, ...Ab.textures]) {
        if (Lb.has(Db.name)) continue;
        Lb.add(Db.name);
        const bb = `${Db.name}Sampler`,
          ab = vb++,
          Ub = vb++,
          Ab = Db.type.startsWith("texture_2d_array") ? "2d-array" : Db.type.startsWith("texture_cube") ? "cube" : "2d";
        Bb.push({
          name: Db.name,
          binding: ab,
          samplerBinding: Ub,
          dimension: Ab
        }), eb.push(`@group(2) @binding(${ab}) var ${Db.name}: ${Db.type};`), eb.push(`@group(2) @binding(${Ub}) var ${bb}: sampler;`)
      }
      for (const Db of [...Ub.samplers, ...Ab.samplers])
        if (!Lb.has(Db.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Db} has no texture`);
      const Pb = [RA, lA, Yb.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${bb.structName};`, ...eb].join("\n"),
        Xb = Ub.attributes,
        jb = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...Ub.attributes.map(((bb, ab) => `\t@location(${ab}) ${bb.name}: ${bb.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Rb = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Tb, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        kb = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Ab.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Tb, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", Ob, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${Vb}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        yb = bb => {
          for (const ab of Yb.stridedArrays) bb = bb.replace(new RegExp(`\\b${ab}\\s*\\[(.*?)\\]`, "g"), `${ab}[$1].el`);
          return bb
        };
      return {
        vertex: `${Pb}\n${jb}\n${Rb}\n${yb(Ub.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Pb}\n${kb}\n${BM((Zb=yb(Ab.body),Zb.includes("fragmentInputs.position")?Zb.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Zb))}`,
        attributes: Xb,
        material: Yb,
        textures: Bb
      };
      var Zb
    }
    const PM = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      XM = bb => ({
        name: bb,
        type: "vec3"
      }),
      jM = bb => ({
        name: bb,
        type: "float"
      }),
      RM = FA("EarthSkyUniforms", [XM("viewFrom"), jM("exposureScale"), XM("zenithOffset"), jM("fogOn"), XM("up"), jM("ditherOn"), XM("sun"), jM("turbidity"), XM("tint"), jM("rayleigh"), XM("sunDir"), jM("mieStrength"), XM("inScatterR"), jM("mieFocus"), XM("inScatterM"), jM("sunE"), XM("extinctionBeta"), jM("sunsetMix"), jM("mieScale"), jM("mieBase"), jM("mieSlope"), jM("sunDiscE"), jM("exposure")]),
      kM = `${RA}\n${lA}\n${RM.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      yM = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${PM.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      ZM = `\n${Ob}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(ka).map((bb=>{let[ab,Ub]=bb;return`const TONE_${ab}: f32 = ${Ub};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${ya};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${Vb}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var DM = Ub(36392);
    const zM = new DM.Pj,
      xM = new DM.Pj,
      iM = new DM.Quaternion,
      fM = new Float64Array(3),
      mM = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      pM = new Float64Array(16);

    function NM(bb, ab, Ub) {
      const Ab = Ub.worldMatrix;
      var Mb;
      bb.updateFloat3("viewFrom", Ab[12], Ab[13], Ab[14]), bb.updateFloatsFrom("zenithOffset", ab.cameraOffset, 0, 3), bb.updateFloatsFrom("up", ab.up, 0, 3), ab.luminance > 0 && (bb.updateFloat("exposure", ab.luminance), bb.updateFloat("exposureScale", (Mb = ab.luminance, Math.log2(2 / Math.pow(Mb, 4))))), bb.updateFloat("turbidity", ab.turbidity), bb.updateFloat("rayleigh", ab.rayleigh), bb.updateFloat("mieStrength", ab.mieCoefficient), bb.updateFloat("mieFocus", ab.mieDirectionalG), bb.updateFloatsFrom("tint", ab.tint, 0, 3), bb.updateFloat("fogOn", ab.fog && Ub.fogEnabled && 0 !== Ub.fogMode ? 1 : 0), bb.updateFloat("ditherOn", ab.dithering ? 1 : 0);
      const Tb = ab.sunPosition;
      if (zM.set(Tb[0], Tb[1], Tb[2]), !ab.useSunPosition) {
        const bb = Math.PI * (ab.inclination - .5),
          Ub = 2 * Math.PI * (ab.azimuth - .5);
        zM.set(ab.distance * Math.cos(Ub) * Math.cos(bb), ab.distance * Math.sin(-bb), ab.distance * Math.sin(Ub) * Math.cos(bb)), DM.Quaternion.FromUnitVectorsToRef(DM.Pj.UpReadOnly, xM.set(ab.up[0], ab.up[1], ab.up[2]), iM), zM.rotateByQuaternionToRef(iM, zM)
      }
      bb.updateVector3("sun", zM), fM[0] = zM.x, fM[1] = zM.y, fM[2] = zM.z;
      const Eb = Ra(ab, fM, mM);
      bb.updateFloatsFrom("sunDir", Eb.sunDir, 0, 3), bb.updateFloat("sunE", Eb.sunE), bb.updateFloatsFrom("inScatterR", Eb.inScatterR, 0, 3), bb.updateFloatsFrom("inScatterM", Eb.inScatterM, 0, 3), bb.updateFloatsFrom("extinctionBeta", Eb.extinctionBeta, 0, 3), bb.updateFloat("sunsetMix", Eb.sunsetMix), bb.updateFloat("sunDiscE", Eb.sunDiscE), bb.updateFloat("mieScale", Eb.mieScale), bb.updateFloat("mieBase", Eb.mieBase), bb.updateFloat("mieSlope", Eb.mieSlope)
    }

    function WM(bb, ab) {
      const Ub = pM;
      Ub[0] = ab.far, Ub[5] = ab.far, Ub[10] = ab.far, Ub[15] = 1;
      const Ab = bb.infiniteDistance;
      for (let Mb = 0; Mb < 3; Mb++) Ub[12 + Mb] = bb.position[Mb] + (Ab ? ab.worldMatrix[12 + Mb] : 0);
      return pM
    }
    var HM = Ub(38029);

    function IM(bb) {
      return Math.max(4, 4 * Math.ceil(bb / 4))
    }

    function dM(bb, ab, Ub, Ab) {
      const Mb = bb.createBuffer({
        label: Ab,
        size: IM(ab.byteLength),
        usage: Ub,
        mappedAtCreation: !0
      });
      return new Uint8Array(Mb.getMappedRange(), 0, ab.byteLength).set(new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength)), Mb.unmap(), Mb
    }

    function FM(bb, ab) {
      return Math.floor(Math.log2(Math.max(bb, ab))) + 1
    }

    function hM(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = bb.createTexture({
          label: Tb,
          size: {
            width: Ub,
            height: Ab,
            depthOrArrayLayers: Mb
          },
          format: "rgba8unorm",
          mipLevelCount: FM(Ub, Ab),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        Yb = (ab, Ub, Ab, Tb) => {
          bb.queue.writeTexture({
            texture: Eb,
            mipLevel: Ub
          }, ab, {
            bytesPerRow: 4 * Ab,
            rowsPerImage: Tb
          }, {
            width: Ab,
            height: Tb,
            depthOrArrayLayers: Mb
          })
        };
      Yb(ab, 0, Ub, Ab);
      let Bb = 1;
      for (const eb of function*(bb, ab, Ub, Ab) {
          let Mb = bb,
            Tb = ab,
            Eb = Ub;
          for (; Tb > 1 || Eb > 1;) {
            const bb = Math.max(1, Tb >> 1),
              ab = Math.max(1, Eb >> 1),
              Ub = new Uint8Array(bb * ab * Ab * 4),
              Yb = 4 * Tb;
            let Bb = 0;
            for (let eb = 0; eb < Ab; eb++) {
              const Ab = eb * Yb * Eb;
              for (let eb = 0; eb < ab; eb++) {
                const ab = Ab + Math.min(2 * eb, Eb - 1) * Yb,
                  vb = Ab + Math.min(2 * eb + 1, Eb - 1) * Yb;
                for (let Ab = 0; Ab < bb; Ab++) {
                  const bb = 4 * Math.min(2 * Ab, Tb - 1),
                    Eb = 4 * Math.min(2 * Ab + 1, Tb - 1);
                  for (let Ab = 0; Ab < 4; Ab++) Ub[Bb++] = Mb[ab + bb + Ab] + Mb[ab + Eb + Ab] + Mb[vb + bb + Ab] + Mb[vb + Eb + Ab] + 2 >> 2
                }
              }
            }
            yield {
              data: Ub,
              width: bb,
              height: ab
            }, Mb = Ub, Tb = bb, Eb = ab
          }
        }(ab, Ub, Ab, Mb)) Yb(eb.data, Bb++, eb.width, eb.height);
      return Eb
    }
    const GM = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function QM(bb) {
      if (bb.startsWith("data:")) {
        const ab = bb.search(/[;,]/);
        return `data:${ab>5?bb.slice(5,ab):""} URL of ${bb.length} characters`
      }
      return bb.length > 80 ? `${bb.slice(0,80)}...` : bb
    }
    async function qM(bb) {
      const ab = await fetch(bb);
      if (!ab.ok) throw new Error(`${QM(bb)}: ${ab.status} ${ab.statusText}`);
      return createImageBitmap(await ab.blob(), GM)
    }
    async function uM(bb) {
      const ab = await qM(bb),
        Ub = new OffscreenCanvas(ab.width, ab.height),
        Ab = Ub.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Ab) throw new Error("No 2D context to decode an image");
      Ab.drawImage(ab, 0, 0);
      const {
        data: Mb
      } = Ab.getImageData(0, 0, ab.width, ab.height);
      return ab.close(), {
        pixels: new Uint8Array(Mb.buffer, Mb.byteOffset, Mb.byteLength),
        width: Ub.width,
        height: Ub.height
      }
    }
    const rM = new WeakMap;

    function KM(bb, ab, Ub, Ab) {
      var Mb;
      const Tb = null !== (Mb = rM.get(bb)) && void 0 !== Mb ? Mb : new Map;
      rM.set(bb, Tb);
      let Eb = Tb.get(ab);
      return Eb || (Eb = (async Mb => {
        const Tb = null !== (Mb = function(bb, ab) {
          const Ub = bb ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : null;
          return null !== Ub && void 0 !== Ub && Ub.byteLength && ab && Ub.byteLength % (ab * ab * 4) === 0 ? {
            pixels: Ub,
            layerWidth: ab,
            layers: Ub.byteLength / (ab * ab * 4)
          } : null
        }(Ub, Ab)) && void 0 !== Mb ? Mb : await async function(bb) {
          const {
            pixels: ab,
            width: Ub
          } = await uM(bb);
          return {
            pixels: ab,
            layerWidth: Ub,
            layers: ab.byteLength / (Ub * Ub * 4)
          }
        }(ab), {
          layerWidth: Eb,
          layers: Yb
        } = Tb;
        return {
          texture: hM(bb, Tb.pixels, Eb, Eb, Yb, `atlas-${ab}`),
          layerWidth: Eb,
          layers: Yb
        }
      })(), Tb.set(ab, Eb), Eb.catch((() => {
        Tb.delete(ab)
      }))), Eb
    }
    const oM = new Map([
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
      lM = new Map([
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

    function tM(bb) {
      for (const ab of (0, HM.j)(bb))
        if (!lM.has((0, HM.g)(ab))) return !1;
      return !0
    }

    function wM(bb) {
      const ab = lM.get(bb);
      if (!ab) return null;
      const [Ub, Ab, Mb] = ab;
      return {
        srcFactor: oM.get(Ub),
        dstFactor: oM.get(Ab),
        operation: Mb
      }
    }
    let sM = null;

    function gM(bb) {
      sM = bb
    }

    function CM(bb, ab, Ub) {
      var Ab;
      null === (Ab = sM) || void 0 === Ab || Ab(bb, ab, Ub, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class VM {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(bb, ab, Ub, Ab, Mb) {
        Ub !== this.pipeline && (bb.setPipeline(Ub), this.pipeline = Ub), bb.setBindGroup(1, Ab, [Mb]);
        const Tb = ab.material.bindGroup;
        Tb !== this.materialGroup && (bb.setBindGroup(2, Tb), this.materialGroup = Tb);
        const Eb = ab.program.packGroup;
        Eb && Eb !== this.packGroup && (bb.setBindGroup(Na.g, Eb), this.packGroup = Eb);
        const {
          vertexBuffers: Yb,
          vertexOffsets: Bb
        } = this;
        for (let eb = 0; eb < ab.vertexBuffers.length; eb++) Yb[eb] === ab.vertexBuffers[eb] && Bb[eb] === ab.vertexOffsets[eb] || (bb.setVertexBuffer(eb, ab.vertexBuffers[eb], ab.vertexOffsets[eb]), Yb[eb] = ab.vertexBuffers[eb], Bb[eb] = ab.vertexOffsets[eb]);
        ab.indexBuffer && ab.indexBuffer !== this.indexBuffer && (bb.setIndexBuffer(ab.indexBuffer, ab.indexFormat), this.indexBuffer = ab.indexBuffer)
      }
    }
    class OM {
      constructor(bb, ab, Ub, Ab) {
        this.modelMeshes = bb, this.X3 = ab, this.maker = Ub, this.warnOnce = Ab, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(bb) {
        this.collectGroup(bb, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(bb, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(bb, 1, this.frontDraws, this.frontDraws, !0);
        for (const ab of this.modelMeshes.groupIds())(ab < -1 || ab > 1) && this.warnOnce(`group:${ab}`, `rendering group ${ab} is not drawn`);
        for (const ab of this.X3.groupIds())(ab < -1 || ab > 1) && this.warnOnce(`group:${ab}`, `rendering group ${ab} is not drawn`);
        this.opaqueDraws.sort(cM), this.transparentDraws.sort(JM)
      }
      collectGroup(bb, ab, Ub, Ab, Mb) {
        const Tb = this.modelMeshes.group(ab),
          Eb = this.X3.group(ab),
          Yb = 0 === ab ? null === Eb || void 0 === Eb ? void 0 : Eb.opaque : void 0;
        this.collectList(bb, null === Tb || void 0 === Tb ? void 0 : Tb.opaque, Yb || null === Eb || void 0 === Eb ? void 0 : Eb.opaque, ab, !1, Ub, Mb), Yb && (this.X3.drawn += this.maker.bundleDraws(bb, Yb, ab)), this.collectList(bb, null === Tb || void 0 === Tb ? void 0 : Tb.alphaTest, void 0, ab, !1, Ub, Mb), this.collectList(bb, null === Tb || void 0 === Tb ? void 0 : Tb.transparent, null === Eb || void 0 === Eb ? void 0 : Eb.transparent, ab, !0, Ab, Mb)
      }
      collectList(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        var Yb;
        const Bb = Tb.length;
        ab && this.maker.pushDraws(bb, ab.units, ab.units.length, Ab, Mb, Tb, ab.rows), Ub && (this.X3.drawn += this.maker.pushDraws(bb, Ub, Ub.length, Ab, Mb, Tb));
        const eb = Mb ? null === (Yb = this.modelMeshes.group(Ab)) || void 0 === Yb ? void 0 : Yb.text : void 0;
        eb && this.maker.pushDraws(bb, eb.units, eb.units.length, Ab, !0, Tb, eb.rows), Eb && nM(Tb, Bb)
      }
    }

    function cM(bb, ab) {
      return bb.program.id - ab.program.id || bb.material.owner.uniqueId - ab.material.owner.uniqueId
    }

    function JM(bb, ab) {
      return bb.material.owner.uniqueId - ab.material.owner.uniqueId
    }

    function nM(bb, ab) {
      for (let Ub = ab + 1; Ub < bb.length; Ub++) {
        const Ab = bb[Ub];
        let Mb = Ub - 1;
        for (; Mb >= ab && JM(bb[Mb], Ab) > 0; Mb--) bb[Mb + 1] = bb[Mb];
        bb[Mb + 1] = Ab
      }
    }
    const SM = {};

    function bT(bb) {
      return bb.hasThinInstances ? "thin" : bb.IAb || bb._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function aT(bb, ab, Ub) {
      return bb ? (Ub._needUVs = !0, bb.optimizeUVAllocation && (0, Wb.M)(bb.matrix) ? (Ub[`${ab}DIRECTUV`] = bb.uvSet + 1, Ub[`MAINUV${bb.uvSet+1}`] = !0) : Ub[`${ab}DIRECTUV`] = 0, !0) : (Ub[`${ab}DIRECTUV`] = 0, !1)
    }

    function UT(bb) {
      const ab = new Map;
      for (const Ub in bb) {
        if (95 === Ub.charCodeAt(0)) continue;
        const Ab = bb[Ub],
          Mb = typeof Ab;
        "number" === Mb || "string" === Mb ? ab.set(Ub, String(Ab)) : Ab && "function" !== Mb && ab.set(Ub, !0)
      }
      return ab
    }

    function AT(bb) {
      const ab = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: Ub
        }
        of bb.features)
        for (const bb in Ub) ab[bb] = Ub[bb];
      return ab
    }

    function MT(bb) {
      const ab = bb.parts.geometry;
      return null !== ab && void 0 !== ab && ab.live ? ab : null
    }

    function TT(bb) {
      var ab;
      return null !== (ab = MT(bb)) && void 0 !== ab ? ab : SM
    }
    class ET {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = bb, this.warnOnce = ab, this.programWithModel = Ub, this.packFailed = Ab, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(bb, ab, Ub, Ab, Mb) {
        const Tb = ab.owner;
        let Eb = this.drawStates.get(ab);
        if (!Eb) {
          const bb = ab.parts.materials[ab.range];
          if (!bb) return this.warnOnce("model", `${Ub.name} on ${Tb.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Eb = {
            defines: AT(bb),
            model: bb,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Mb,
            groupId: Ab,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(ab, Eb)
        }
        if (this.programCurrent(Eb, ab, Mb, Ab)) return Eb.program;
        const {
          model: Yb
        } = Eb, Bb = TT(ab), eb = this.instanceLayout(Tb, Mb), vb = this.definesBits(Tb);
        if (!this.prepareModelDefines(bb, Tb, Yb, Eb.defines, Ab, Mb)) return null;
        Eb.instancing = Mb, Eb.groupId = Ab, Eb.modelVersion = Yb.version, Eb.geometry = Bb, Eb.instanceLayout = eb, Eb.definesBits = vb;
        const Lb = function(bb) {
          let ab = "";
          for (const [Ub, Ab] of bb) ab += !0 === Ab ? `${Ub};` : `${Ub}=${Ab};`;
          return ab
        }(UT(Eb.defines));
        return Lb === Eb.definesKey && Eb.packVariant === this.modelPackVariant && Eb.program && !this.packFailed(Eb.program) || (Eb.definesKey = Lb, Eb.packVariant = this.modelPackVariant, Eb.program = this.programWithModel(Yb, Eb.defines, Lb)), Eb.program
      }
      programCurrent(bb, ab, Ub, Ab) {
        return null !== bb.program && !this.packFailed(bb.program) && bb.instancing === Ub && bb.groupId === Ab && this.definesHold(bb, ab, Ub)
      }
      definesHold(bb, ab, Ub) {
        return bb.modelVersion === bb.model.version && bb.geometry === TT(ab) && bb.instanceLayout === this.instanceLayout(ab.owner, Ub) && bb.definesBits === this.definesBits(ab.owner) && bb.packVariant === this.modelPackVariant
      }
      modelPackKind(bb) {
        var ab;
        return 0 === this.modelPackVariant ? null : null !== (ab = (0, pb.w)(bb, mb.l.name)) && void 0 !== ab && ab.active ? "placed" : bb.item ? "item" : bb.lifeform ? "lifeform" : bb.box ? "box" : null
      }
      instanceLayout(bb, ab) {
        var Ub, Ab, Mb;
        return "thin" === ab ? null !== (Mb = this.resources.NJ.get(bb)) && void 0 !== Mb ? Mb : null : "instanced" === ab && null !== (Ub = null === (Ab = bb._userInstancedBuffersStorage) || void 0 === Ab ? void 0 : Ab.interleavedKinds) && void 0 !== Ub ? Ub : null
      }
      definesBits(bb) {
        const ab = this.view;
        return (bb.visibility < 1 ? 1 : 0) | (bb.hasVertexAlpha ? 2 : 0) | (bb.applyFog ? 4 : 0) | (bb.useVertexColors ? 8 : 0) | (bb.nonUniformScaling ? 16 : 0) | (ab.fogEnabled && 0 !== ab.fogMode ? 32 : 0) | (ab.lightsEnabled ? 64 : 0) | ab.lightCount << 7
      }
      prepareLightDefines(bb, ab, Ub) {
        let Ab = 0;
        if (this.view.lightsEnabled && !ab) {
          const ab = Math.min(Ub, 4);
          for (; Ab < this.view.lightCount && (bb[`LIGHT${Ab}`] = !0, bb[`LITE_LIGHT${Ab}_SLOT`] = Ab, Ab++, bb._needNormals = !0, Ab !== ab););
        }
        for (let Mb = Ab; Mb < 4; Mb++) bb[`LIGHT${Mb}`] = !1, bb[`LITE_LIGHT${Mb}_SLOT`] = void 0
      }
      prepareModelDefines(bb, ab, Ub, Ab, Mb, Tb) {
        const {
          features: Eb
        } = Ub;
        Ab._needNormals = !1, Ab._needUVs = !1;
        const Yb = this.view;
        this.prepareLightDefines(Ab, Ub.disableLighting, Ub.maxSimultaneousLights), Ab.MAINUV1 = !1, Ab.MAINUV2 = !1;
        const Bb = Ub.diffuseTexture;
        Bb ? (Ab._needUVs = !0, Ab.DIFFUSE = !0, Bb.optimizeUVAllocation && (0, Wb.M)(Bb.matrix) ? (Ab.DIFFUSEDIRECTUV = Bb.uvSet + 1, Ab[`MAINUV${Bb.uvSet+1}`] = !0) : Ab.DIFFUSEDIRECTUV = 0, Bb.uvSet > 1 && this.warnOnce(`uvset:${Ub.name}`, `${Ub.name} samples UV set ${Bb.uvSet+1}, which is not supported`)) : (Ab.DIFFUSE = !1, Ab.DIFFUSEDIRECTUV = 0);
        const eb = Ub.opacityTexture,
          vb = Ub.emissiveTexture;
        Ab.OPACITY = aT(eb, "OPACITY", Ab), Ab.OPACITYRGB = null !== eb && eb.getAlphaFromRGB, Ab.EMISSIVE = aT(vb, "EMISSIVE", Ab), (eb && eb.uvSet > 1 || vb && vb.uvSet > 1) && this.warnOnce(`uvset:${Ub.name}`, `${Ub.name} samples a UV set past 2, which is not supported`);
        const Lb = Ub.reflectionTexture,
          Pb = null !== Lb;
        if (Pb) {
          if (!this.resources.boundTexture(Lb)) return !1;
          Ab._needNormals = !0
        }
        Ab.REFLECTION = Pb, Ab.REFLECTIONMAP_3D = Pb, Ab.REFLECTIONMAP_SKYBOX = Pb, Ab.REFLECTIONMAP_OPPOSITEZ = Pb && (bb.useRightHandedSystem ? !Lb.invertZ : Lb.invertZ), Ab.ROUGHNESS = Pb && Ub.roughness > 0, Ab.REFLECTIONOVERALPHA = Pb && Ub.useReflectionOverAlpha, Ab.LITE_REFLECTION_LUMINANCE = Pb && "cube" === Lb.source.kind && Lb.source.luminance, (ab.skeleton || ab.morphTargetManager) && this.warnOnce(`skin:${ab.name}`, `${ab.name} has bones or morph targets, which are not supported`), Ab.FOG = Ub.fogEnabled && ab.applyFog && Yb.fogEnabled && 0 !== Yb.fogMode, Ab.NONUNIFORMSCALING = ab.nonUniformScaling;
        const {
          visibility: Xb,
          hasVertexAlpha: jb
        } = ab;
        Ab.ALPHATEST = (0, pb.P)(Ub, Xb, jb), Ab.ALPHAFROMDIFFUSE = (0, pb.ab)(Ub), Ab.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== Ub.transparencyMode, Ab.ALPHABLEND = null === Ub.transparencyMode || (0, pb.N)(Ub, Xb, jb), Ab.PREMULTIPLYALPHA = 7 === Ub.alphaMode || 8 === Ub.alphaMode, Ab.EMISSIVEASILLUMINATION = Ub.useEmissiveAsIllumination, Ab.LINKEMISSIVEWITHDIFFUSE = Ub.linkEmissiveWithDiffuse, Ab.TWOSIDEDLIGHTING = !Ub.backFaceCulling && Ub.twoSidedLighting, Ab.INSTANCES = "none" !== Tb, Ab.THIN_INSTANCES = "thin" === Tb, Ab.LITE_FRONT_LAYER = Mb >= 1;
        for (const {
            feature: fb,
            state: mb,
            active: pb
          }
          of Eb) {
          var Rb, kb;
          if (pb) null === (Rb = (kb = (0, va.g)(fb)).prepareDefinesBeforeAttributes) || void 0 === Rb || Rb.call(kb, mb, Ab, bb, ab)
        }
        this.modelPackKind(Ub) && (Ab._needNormals = !0), Ab.NORMAL = Ab._needNormals && ab.isVerticesDataPresent("normal"), Ab.UV1 = Ab._needUVs && ab.isVerticesDataPresent("uv"), Ab.UV2 = Ab._needUVs && ab.isVerticesDataPresent("uv2");
        const yb = ab.useVertexColors && ab.isVerticesDataPresent("color");
        Ab.VERTEXCOLOR = yb, Ab.VERTEXALPHA = ab.hasVertexAlpha && yb, Ab.INSTANCESCOLOR = "none" !== Tb && ab.isVerticesDataPresent("instanceColor");
        for (const {
            feature: fb,
            state: mb,
            active: pb
          }
          of Eb) {
          var Zb, Db;
          if (pb) null === (Zb = (Db = (0, va.g)(fb)).prepareDefines) || void 0 === Zb || Zb.call(Db, mb, Ab, bb, ab, Ub)
        }
        const zb = bb.vj();
        for (const {
            feature: fb,
            state: mb,
            active: pb
          }
          of Eb) {
          var xb, ib;
          if (pb && !1 === (null === (xb = (ib = (0, va.g)(fb)).isReadyForSubMesh) || void 0 === xb ? void 0 : xb.call(ib, mb, Ab, bb, zb))) return !1
        }
        return !0
      }
    }

    function YT(bb, ab, Ub) {
      return bb.codeVersion !== ab.version && function(bb, ab) {
        const Ub = [],
          Ab = [];
        for (const {
            feature: Pb,
            state: Xb,
            active: jb
          }
          of ab.features) {
          var Mb, Tb, Eb, Yb;
          if (jb) BT(null === (Mb = (Tb = (0, va.g)(Pb)).getCustomCode) || void 0 === Mb ? void 0 : Mb.call(Tb, Xb, "vertex", ib.d.WGSL), Ub), BT(null === (Eb = (Yb = (0, va.g)(Pb)).getCustomCode) || void 0 === Eb ? void 0 : Eb.call(Yb, Xb, "fragment", ib.d.WGSL), Ab)
        }
        const Bb = [];
        for (const {
            feature: Pb,
            state: Xb
          }
          of ab.features) {
          var eb, vb;
          const bb = null === (eb = (vb = (0, va.g)(Pb)).getUniforms) || void 0 === eb ? void 0 : eb.call(vb, Xb, ib.d.WGSL);
          for (const ab of null !== (Lb = null === bb || void 0 === bb ? void 0 : bb.ubo) && void 0 !== Lb ? Lb : []) {
            var Lb;
            ab.size && ab.type && Bb.push({
              name: ab.name,
              type: ab.type,
              arraySize: ab.arraySize
            })
          }
        }
        bb.vertexCode = Ub, bb.fragmentCode = Ab, bb.pluginUniforms = Bb, bb.codeKey = JSON.stringify([Ub, Ab, Bb]), bb.codeVersion = ab.version
      }(bb, ab), `${Ub}#${bb.codeKey}`
    }

    function BT(bb, ab) {
      if (bb)
        for (const Ub in bb) bb[Ub] && ab.push([Ub, bb[Ub]])
    }
    const eT = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class vT {
      constructor(bb) {
        this.warnOnce = bb, this.states = new Map
      }
      renderState(bb, ab, Ub, Ab) {
        var Mb;
        let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Eb = null !== (Mb = bb.sideOrientation) && void 0 !== Mb ? Mb : ab.sideOrientation;
        ab._getWorldMatrixDeterminant() < 0 && (Eb = 0 === Eb ? 1 : 0);
        const Yb = "triangle-list" === Tb,
          Bb = Ub ? bb.alphaMode : 0,
          eb = (!Ub || (0 === Bb || bb.forceDepthWrite)) && !bb.disableDepthWrite,
          vb = Yb && bb.backFaceCulling ? bb.cullBackFaces ? "back" : "front" : "none",
          Lb = Yb && 0 !== Eb ? "ccw" : "cw",
          Pb = bb.depthFunction,
          Xb = Yb ? bb.zOffset : 0,
          jb = Yb ? bb.zOffsetUnits : 0,
          Rb = !bb.disableColorWrite;
        return Ab && Ab.alphaMode === Bb && Ab.depthWrite === eb && Ab.depthFunction === Pb && Ab.cullMode === vb && Ab.frontFace === Lb && Ab.zOffset === Xb && Ab.zOffsetUnits === jb && Ab.colourWrite === Rb && Ab.topology === Tb ? Ab : this.stateFor(Bb, eb, Pb, vb, Lb, Xb, jb, Rb, Tb)
      }
      stateFor(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        const eb = `${bb}|${ab}|${Ub}|${Ab}|${Mb}|${Tb}|${Eb}|${Yb}|${Bb}`;
        let vb = this.states.get(eb);
        if (!vb) {
          var Lb;
          const Pb = bb ? wM(bb) : null;
          bb && !Pb && this.warnOnce(`alpha:${bb}`, `alpha mode ${bb} is not supported`), vb = {
            key: eb,
            alphaMode: bb,
            depthFunction: Ub,
            zOffset: Tb,
            zOffsetUnits: Eb,
            topology: Bb,
            blend: Pb,
            depthWrite: ab,
            depthCompare: Ub && null !== (Lb = eT.get(Ub)) && void 0 !== Lb ? Lb : null,
            cullMode: Ab,
            frontFace: Mb,
            depthBias: -Eb,
            depthBiasSlopeScale: -Tb,
            colourWrite: Yb
          }, this.states.set(eb, vb)
        }
        return vb
      }
    }
    var LT = Ub(36783);

    function PT(bb) {
      if (!bb.frozen) return -1;
      let ab = bb.version;
      for (const {
          feature: Ub,
          state: Ab,
          active: Mb
        }
        of bb.features) {
        if (!Mb || !Ub.bind) continue;
        const bb = (0, va.g)(Ub).uniformsVersion;
        if (!bb) return -1;
        ab += bb(Ab)
      }
      return ab
    }
    class XT {
      constructor(bb, ab, Ub) {
        this.slots = bb, this.data = ab, this.textures = Ub, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(bb, ab) {
        this.write4(bb, ab, 0, 0, 0, 1)
      }
      updateFloat2(bb, ab, Ub) {
        this.write4(bb, ab, Ub, 0, 0, 2)
      }
      updateFloat3(bb, ab, Ub, Ab) {
        this.write4(bb, ab, Ub, Ab, 0, 3)
      }
      updateFloat4(bb, ab, Ub, Ab, Mb) {
        this.write4(bb, ab, Ub, Ab, Mb, 4)
      }
      updateVector3(bb, ab) {
        this.write4(bb, ab.x, ab.y, ab.z, 0, 3)
      }
      updateVector4(bb, ab) {
        this.write4(bb, ab.x, ab.y, ab.z, ab.w, 4)
      }
      updateColor3(bb, ab) {
        this.write4(bb, ab.r, ab.g, ab.b, 0, 3)
      }
      updateColor4(bb, ab, Ub) {
        this.write4(bb, ab.r, ab.g, ab.b, Ub, 4)
      }
      updateFloatsFrom(bb, ab, Ub, Ab) {
        const Mb = this.slots.get(bb);
        if (!Mb) return;
        const Tb = this.data,
          Eb = Mb.offset;
        for (let Yb = 0; Yb < Ab; Yb++) Tb[Eb + Yb] = ab[Ub + Yb]
      }
      updateFloat3TimesFloats(bb, ab, Ub, Ab) {
        const Mb = this.slots.get(bb);
        if (!Mb) return;
        const Tb = this.data,
          Eb = Mb.offset;
        Tb[Eb] = ab[Ub] * Ab[0], Tb[Eb + 1] = ab[Ub + 1] * Ab[1], Tb[Eb + 2] = ab[Ub + 2] * Ab[2]
      }
      i5(bb, ab) {
        const Ub = this.slots.get(bb);
        Ub && this.data.set(ab.m, Ub.offset)
      }
      updateMatrixFloats(bb, ab) {
        const Ub = this.slots.get(bb);
        Ub && this.data.set(ab, Ub.offset)
      }
      updateFloatArray(bb, ab) {
        const Ub = this.slots.get(bb);
        if (!Ub) return;
        if (!Ub.arraySize || Ub.stride === Ub.floats) return void this.data.set(ab, Ub.offset);
        const Ab = Math.min(ab.length, Ub.floats * Ub.arraySize);
        for (let Mb = 0; Mb < Ab; Mb++) this.data[Ub.offset + Math.floor(Mb / Ub.floats) * Ub.stride + Mb % Ub.floats] = ab[Mb]
      }
      updateArray(bb, ab) {
        this.updateFloatArray(bb, ab)
      }
      setTexture(bb, ab) {
        this.textures.set(bb, ab), this.expected.delete(bb)
      }
      expectTexture(bb) {
        this.textures.set(bb, null), this.expected.add(bb)
      }
      write4(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = this.slots.get(bb);
        if (!Eb) return;
        const Yb = this.data,
          Bb = Eb.offset;
        Yb[Bb] = ab, Tb > 1 && (Yb[Bb + 1] = Ub), Tb > 2 && (Yb[Bb + 2] = Ab), Tb > 3 && (Yb[Bb + 3] = Mb)
      }
    }

    function jT(bb, ab) {
      const Ub = KA,
        Ab = LT.j,
        Mb = bb.lights,
        Tb = Math.min(bb.lightCount, 8);
      for (let Eb = 0; Eb < Tb; Eb++) {
        const bb = Ub.lights + Eb * Ub.lightStride,
          Tb = Eb * LT.e;
        ab[bb] = Mb[Tb + Ab.vector], ab[bb + 1] = Mb[Tb + Ab.vector + 1], ab[bb + 2] = Mb[Tb + Ab.vector + 2], ab[bb + 3] = Mb[Tb + Ab.kind] === LT.g.directional ? 1 : 0, ab[bb + 4] = Mb[Tb + Ab.diffuse], ab[bb + 5] = Mb[Tb + Ab.diffuse + 1], ab[bb + 6] = Mb[Tb + Ab.diffuse + 2], ab[bb + 7] = Mb[Tb + Ab.range], ab[bb + 8] = Mb[Tb + Ab.specular], ab[bb + 9] = Mb[Tb + Ab.specular + 1], ab[bb + 10] = Mb[Tb + Ab.specular + 2], ab[bb + 11] = Mb[Tb + Ab.range]
      }
      ab[Ub.fogInfos] = bb.fogMode, ab[Ub.fogInfos + 1] = bb.fogStart, ab[Ub.fogInfos + 2] = bb.fogEnd, ab[Ub.fogInfos + 3] = bb.fogDensity, ab[Ub.fogColour] = bb.fogColour[0], ab[Ub.fogColour + 1] = bb.fogColour[1], ab[Ub.fogColour + 2] = bb.fogColour[2], ab[Ub.outputHeight] = bb.renderHeight, ab[Ub.animTick] = bb.animTick, ab[Ub.timeMs] = bb.timeMs
    }
    class RT {
      constructor(bb) {
        this.instancesOf = bb
      }
      refreshModelUniforms(bb, ab, Ub, Ab) {
        const Mb = PT(Ub);
        if (Mb >= 0 && Mb === ab.heldVersion && ab.textures.get("diffuseSampler") === Ub.diffuseTexture && ab.textures.get("reflectionCubeSampler") === Ub.reflectionTexture && ab.textures.get("opacitySampler") === Ub.opacityTexture && ab.textures.get("emissiveSampler") === Ub.emissiveTexture) return !0;
        if (Mb < 0)
          for (const Tb of this.instancesOf(Ub)) Tb.heldVersion = -1;
        return this.writeModelUniforms(bb, ab, Ub, Ab), ab.heldVersion = Mb, !1
      }
      writeModelUniforms(bb, ab, Ub, Ab) {
        const {
          ubo: Mb
        } = ab, Tb = Ub.diffuseTexture, Eb = Ub.diffuseColor;
        Mb.updateFloat4("vDiffuseColor", Eb[0], Eb[1], Eb[2], Ub.alpha), Tb && (Mb.updateFloat2("vDiffuseInfos", Tb.uvSet, Tb.level), Mb.updateMatrixFloats("diffuseMatrix", Tb.matrix)), Mb.updateFloat("alphaCutOff", Ub.alphaCutOff), Mb.updateFloatsFrom("vEmissiveColor", Ub.emissiveColor, 0, 3), Mb.updateFloat3TimesFloats("vAmbientColor", Ab.ambientColour, 0, Ub.ambientColor);
        const Yb = Ub.specularColor;
        Mb.updateFloat4("vSpecularColor", Yb[0], Yb[1], Yb[2], Ub.specularPower), Mb.setTexture("diffuseSampler", Tb);
        const Bb = Ub.opacityTexture;
        Bb && (Mb.updateFloat2("vOpacityInfos", Bb.uvSet, Bb.level), Mb.updateMatrixFloats("opacityMatrix", Bb.matrix)), Mb.setTexture("opacitySampler", Bb);
        const eb = Ub.emissiveTexture;
        eb && (Mb.updateFloat2("vEmissiveInfos", eb.uvSet, eb.level), Mb.updateMatrixFloats("emissiveMatrix", eb.matrix)), Mb.setTexture("emissiveSampler", eb);
        const vb = Ub.reflectionTexture;
        vb && Mb.updateMatrixFloats("reflectionMatrix", vb.matrix), Mb.updateFloat2("vReflectionInfos", vb ? vb.level * bb.iblIntensity : 0, Ub.roughness), Mb.setTexture("reflectionCubeSampler", vb);
        const Lb = bb.vj();
        for (const {
            feature: jb,
            state: Rb,
            active: kb
          }
          of Ub.features) {
          var Pb, Xb;
          if (kb) null === (Pb = (Xb = (0, va.g)(jb)).bind) || void 0 === Pb || Pb.call(Xb, Rb, Mb, bb, Lb)
        }
      }
    }

    function kT(bb) {
      const ab = bb.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(ab) ? "u32" : /i32|^vec\di$/.test(ab) ? "i32" : "f32"
    }

    function yT(bb, ab) {
      const Ub = bb.getSize(),
        Ab = kT(ab),
        Mb = bb => 4 === Ub ? `${bb}x4` : 2 === Ub ? `${bb}x2` : null;
      if ("f32" === Ab) {
        if (5126 === bb.type) return 1 === Ub ? "float32" : Ub >= 2 && Ub <= 4 ? `float32x${Ub}` : null;
        if (!bb.normalized) return null;
        switch (bb.type) {
          case 5121:
            return Mb("unorm8");
          case 5120:
            return Mb("snorm8");
          case 5123:
            return Mb("unorm16");
          case 5122:
            return Mb("snorm16")
        }
        return null
      }
      const Tb = "u32" === Ab ? "uint" : "sint";
      switch (bb.type) {
        case 5125:
        case 5124:
          return 1 === Ub ? `${Tb}32` : Ub <= 4 ? `${Tb}32x${Ub}` : null;
        case 5121:
        case 5120:
          return Mb(`${Tb}8`);
        case 5123:
        case 5122:
          return Mb(`${Tb}16`)
      }
      return null
    }

    function ZT(bb) {
      var ab;
      const Ub = /(8|16|32)(?:x(\d))?$/.exec(bb);
      return Ub ? Number(Ub[1]) / 8 * Number(null !== (ab = Ub[2]) && void 0 !== ab ? ab : 1) : 4
    }
    class DT {
      constructor(bb, ab, Ub) {
        this.resources = bb, this.limits = ab, this.warnOnce = Ub, this.layouts = new Map
      }
      resolveInputs(bb, ab, Ub, Ab) {
        const Mb = [],
          Tb = Ub.program.attributes,
          Eb = [];
        for (let vb = 0; vb < Tb.length; vb++) {
          const Ub = Tb[vb],
            Yb = Ub.optional ? null : this.resources.vertexInput(bb, Ub.name, Ab);
          if (!Yb) {
            const bb = kT(Ub.type),
              ab = "u32" === bb ? "uint32x4" : "i32" === bb ? "sint32x4" : "float32x4";
            Eb.push(null);
            const Ab = Mb.find((bb => null === bb.data));
            Ab ? Ab.attributes.push({
              shaderLocation: vb,
              offset: 0,
              format: ab
            }) : Mb.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: vb,
                offset: 0,
                format: ab
              }]
            });
            continue
          }
          const Bb = Yb.getBuffer();
          Eb.push(Yb);
          const eb = yT(Yb, Ub.type);
          if (!eb) return this.warnOnce(`format:${ab}:${Ub.name}`, `${ab}'s ${Ub.name} (type ${Yb.type}, size ${Yb.getSize()}) has no WebGPU vertex format`), null;
          const Lb = Yb.getIsInstanced() ? "instance" : "vertex",
            Pb = Yb.byteStride,
            Xb = ZT(eb),
            jb = Mb.find((bb => bb.data === Bb && bb.stride === Pb && bb.step === Lb && Yb.byteOffset >= bb.base && Yb.byteOffset - bb.base + Xb <= Pb));
          jb ? jb.attributes.push({
            shaderLocation: vb,
            offset: Yb.byteOffset - jb.base,
            format: eb
          }) : Mb.push({
            data: Bb,
            base: Yb.byteOffset,
            stride: Pb,
            step: Lb,
            attributes: [{
              shaderLocation: vb,
              offset: 0,
              format: eb
            }]
          })
        }
        if (Mb.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${ab}`, `${ab} needs ${Mb.length} vertex buffers`), null;
        let Yb = "";
        for (const vb of Mb) {
          Yb += `${vb.stride}${"instance"===vb.step?"i":"v"}`;
          for (const bb of vb.attributes) Yb += `,${bb.shaderLocation}:${bb.offset}:${bb.format}`;
          Yb += ";"
        }
        let Bb = this.layouts.get(Yb);
        Bb || (Bb = {
          key: Yb,
          buffers: Mb.map((bb => ({
            arrayStride: bb.stride,
            stepMode: bb.step,
            attributes: bb.attributes
          }))),
          instanceEnds: Mb.map((bb => {
            let ab = -1;
            if ("instance" === bb.step)
              for (const Ub of bb.attributes) ab = Math.max(ab, Ub.offset + ZT(Ub.format));
            return ab
          }))
        }, this.layouts.set(Yb, Bb));
        const eb = Mb.map((bb => bb.base));
        return {
          program: Ub,
          sources: Eb,
          layout: Bb,
          slotData: Mb.map((bb => bb.data)),
          o3: eb,
          buffers: [],
          offsets: eb,
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

    function zT(bb, ab, Ub, Ab) {
      const Mb = ab.program.program.attributes;
      for (let Tb = 0; Tb < Mb.length; Tb++) {
        if ((Mb[Tb].optional ? null : Ub.vertexInput(bb, Mb[Tb].name, Ab)) !== ab.sources[Tb]) return !1
      }
      return !0
    }
    const xT = 64;
    class iT {
      constructor(bb, ab, Ub, Ab) {
        this.device = bb, this.layout = ab, this.frameBuffer = Ub, this.label = Ab, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(bb) {
        if (bb * xT <= this.data.length) return !1;
        let ab = 2 * this.data.length;
        for (; bb * xT > ab;) ab *= 2;
        const Ub = new Float32Array(ab);
        return Ub.set(this.data), this.data = Ub, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Mb = this.data,
          Tb = bb * xT;
        let Eb = Mb[Tb + 16] !== Ub;
        for (let Yb = 0; Yb < 16 && !Eb; Yb++) Eb = Mb[Tb + Yb] !== ab[Ab + Yb];
        if (Eb) {
          for (let bb = 0; bb < 16; bb++) Mb[Tb + bb] = ab[Ab + bb];
          Mb[Tb + 16] = Ub
        }
        return Eb
      }
      upload(bb, ab) {
        this.device.queue.writeBuffer(this.buffer, bb * oA, this.data, bb * xT, (ab - bb) * xT)
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

    function fT(bb) {
      return bb.gpu[Wb.g.lite] ??= bb.materials.map(((ab, Ub) => ({
        parts: bb,
        range: Ub,
        owner: bb.owner
      })))
    }

    function mT(bb) {
      var ab, Ub, Ab;
      return null !== (ab = null !== (Ub = null === (Ab = bb.parts.materials[bb.range]) || void 0 === Ab ? void 0 : Ab.mirror) && void 0 !== Ub ? Ub : bb.owner.material) && void 0 !== ab ? ab : null
    }
    const pT = ["opaque", "alphaTest", "transparent", "text"];
    class NT {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, ea.d)("Lite: ")
      }
      attach(bb, ab) {
        this.model = bb, this.mirror = ab
      }
      get worlds() {
        return this.model.nodes.lL
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
        for (const [ab, Ub] of this.groups)
          for (const Ab of pT)
            for (const Mb of Ub[Ab].units) bb(Mb.owner, "text" === Ab ? "transparent" : Ab, ab)
      }
      select(bb, ab) {
        this.frame++, this.selectedCount = 0;
        for (const Yb of this.groups.values())
          for (const bb of pT) Yb[bb].units.length = 0, Yb[bb].rows.length = 0;
        const {
          model: Ub,
          mirror: Ab
        } = this;
        if (!Ub || !Ab || !bb) return;
        this.rows.length < Ub.nodes.PL && (this.rows = new Int32Array(Ub.nodes.PL));
        const Mb = this.rows,
          Tb = Ub.meshes;
        for (let Yb = 0; Yb < Tb.looseCount; Yb++) {
          const bb = Tb.loose[Yb],
            Ub = Ab.nodes[bb];
          Ub && !Ub.isBlocked && Ub.isEnabled() && !Ub.nY.hasAZeroComponent && Tb.selects(bb, ab.frustum) && (this.activate(Ub, bb), this.selectedCount++)
        }
        const Eb = Tb.selectTextPlanes(ab.frustum, Mb);
        for (let Yb = 0; Yb < Eb; Yb++) {
          const ab = Mb[Yb],
            Tb = Ab.nodes[ab],
            Eb = Ub.meshes.parts[ab];
          if (!Tb.isVisible || !(Tb.visibility > 0) || 0 === (Tb.layerMask & bb.layerMask) || !Eb) continue;
          const Bb = this.groupOf(Ub.meshes.layer[ab]).text;
          for (const bb of fT(Eb)) Bb.units.push(bb), Bb.rows.push(ab);
          this.selectedCount++
        }
      }
      instanceBatch(bb) {
        const ab = this.batchOf(bb);
        return ab.dispatched || (ab.dispatched = ab.renderSelf = !0, ab.row = this.rowOf(bb)), ab
      }
      rowOf(bb) {
        return bb.row
      }
      activate(bb, ab) {
        if (!bb.EW) {
          const Ub = bb;
          if (Ub.IAb) {
            const bb = this.batchOf(Ub);
            bb.dispatched = !0, bb.renderSelf = !0, bb.row = ab
          }
          return void this.dispatch(Ub, ab, ab)
        }
        const Ub = bb,
          Ab = Ub.dAb;
        if (Ab._getWorldMatrixDeterminant() >= 0 !== Ub._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Ab.name}`, `A mirrored InstancedMesh of ${Ab.name} is not drawn yet`);
        const Mb = this.batchOf(Ab);
        Mb.instances.push(Ub), Mb.rows.push(ab), Mb.dispatched || (Mb.dispatched = !0, this.dispatch(Ab, ab, this.rowOf(Ab)))
      }
      batchOf(bb) {
        let ab = this.batches.get(bb);
        return ab || (ab = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(bb, ab)), ab.frame !== this.frame && (ab.frame = this.frame, ab.dispatched = !1, ab.renderSelf = !1, ab.instances.length = 0, ab.rows.length = 0), ab
      }
      dispatch(bb, ab, Ub) {
        const {
          layer: Ab,
          parts: Mb
        } = this.model.meshes;
        if (!Mb[ab]) return;
        const Tb = this.groupOf(Ab[ab]),
          Eb = bb;
        for (const Yb of fT(Mb[ab])) {
          const bb = mT(Yb);
          if (!bb) continue;
          const ab = bb.needAlphaBlendingForMesh(Eb) ? Tb.transparent : bb.needAlphaTestingForMesh(Eb) ? Tb.alphaTest : Tb.opaque;
          ab.units.push(Yb), ab.rows.push(Ub)
        }
      }
      groupOf(bb) {
        let ab = this.groups.get(bb);
        return ab || (ab = {
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
        }, this.groups.set(bb, ab)), ab
      }
    }
    class WT {
      constructor() {
        this.PY = new Map, this.enabled = [], this.groups = new Map, this.RX = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(bb) {
        if (this.PY.has(bb)) return;
        const ab = {
          mesh: bb,
          observer: bb.onEffectiveEnabledStateChangedObservable.add((bb => {
            this.Yz(ab, bb)
          })),
          index: -1,
          steady: null
        };
        this.PY.set(bb, ab), this.Yz(ab, bb.isEnabled())
      }
      remove(bb) {
        const ab = this.PY.get(bb);
        ab && (ab.observer.remove(!0), this.Yz(ab, !1), this.PY.delete(bb))
      }
      base(bb) {
        return this.PY.get(bb)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          PY: this.PY.size
        }
      }
      forEachSelected(bb) {
        for (const [ab, Ub] of this.groups) {
          for (const Ab of Ub.opaque) bb(Ab.owner, "opaque", ab);
          for (const Ab of Ub.transparent) bb(Ab.owner, "transparent", ab)
        }
        for (const ab of this.RX) bb(ab.mesh, "opaque", 0)
      }
      group(bb) {
        return this.groups.get(bb)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(bb, ab) {
        this.drawn = 0, this.selected = 0, this.RX.length = 0;
        for (const Ab of this.groups.values()) Ab.opaque.length = 0, Ab.transparent.length = 0;
        if (!bb) return;
        const Ub = this.enabled;
        for (let Ab = 0; Ab < Ub.length; Ab++) {
          const Mb = Ub[Ab];
          if (Mb.steady && ab(Mb, bb)) {
            this.selected++, this.RX.push(Mb);
            continue
          }
          const Tb = Mb.mesh;
          if (Tb.isBlocked || Tb.nY.hasAZeroComponent) continue;
          if (!Tb.isVisible || Tb.visibility <= 0 || 0 === (Tb.layerMask & bb.layerMask)) continue;
          if (Tb.IAb) {
            this.warned.has(Tb.name) || (this.warned.add(Tb.name), console.warn(`Lite: thin instance base ${Tb.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Eb
          } = Tb;
          if (!Eb) continue;
          Tb.computeWorldMatrix(), this.selected++;
          const Yb = this.listsFor(Tb.renderingGroupId);
          for (const bb of fT(Eb)) {
            const ab = mT(bb);
            ab && (ab.needAlphaBlendingForMesh(Tb) ? Yb.transparent.push(bb) : Yb.opaque.push(bb))
          }
        }
      }
      Yz(bb, ab) {
        if (ab === bb.index >= 0) return;
        bb.steady = null;
        const Ub = this.enabled;
        if (ab) bb.index = Ub.length, Ub.push(bb);
        else {
          const ab = Ub.pop();
          ab !== bb && (Ub[bb.index] = ab, ab.index = bb.index), bb.index = -1
        }
      }
      listsFor(bb) {
        let ab = this.groups.get(bb);
        return ab || (ab = {
          opaque: [],
          transparent: []
        }, this.groups.set(bb, ab)), ab
      }
    }
    var HT = Ub(38812);
    class IT {
      constructor() {
        this.bundle = null, this.stale = !0, this.PY = new Set
      }
    }
    class dT {
      constructor(bb, ab, Ub) {
        this.device = bb, this.slots = ab, this.host = Ub, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new IT, this.zp = new IT, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new VM, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(bb) {
          var ab, Ub;
          let Ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ab = null === (Ub = globalThis.navigator) || void 0 === Ub ? void 0 : Ub.userAgent) && void 0 !== ab ? ab : "";
          const Mb = bb.adapterInfo;
          return "intel" === (null === Mb || void 0 === Mb ? void 0 : Mb.vendor) && "gen-12lp" === Mb.architecture && Ab.includes("Windows")
        }(bb), (0, HT.z)(this.direct)
      }
      eD() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, HT.z)(this.directThisFrame)
      }
      add(bb, ab, Ub, Ab) {
        let Mb = this.records.get(bb);
        return Mb || (Mb = this.createRecord(bb), this.records.set(bb, Mb)), Mb.recorded && hT(Mb, ab) || (this.bundleOf(Mb).stale = !0), this.place(Mb, ab, Ub, Ab), Mb
      }
      bundleOf(bb) {
        return bb.zp ? this.zp : this.main
      }
      addAgain(bb, ab, Ub, Ab) {
        bb.recorded || (this.bundleOf(bb).stale = !0), this.place(bb, ab, Ub, Ab)
      }
      place(bb, ab, Ub, Ab) {
        bb.seen = this.frame, bb.zp && null === bb.draw && (this.zp.stale = !0), bb.draw = ab, this.drawn++, Ub && this.slots.write(bb.slot, Ub, Ab) && (this.slotsFrom = Math.min(this.slotsFrom, bb.slot), this.slotsTo = Math.max(this.slotsTo, bb.slot));
        const Mb = this.args,
          Tb = 5 * bb.slot;
        Mb[Tb] === ab.count && Mb[Tb + 1] === ab.instances && Mb[Tb + 2] === ab.first || (Mb[Tb] = ab.count, Mb[Tb + 1] = ab.instances, Mb[Tb + 2] = ab.first, this.argsDirty = !0, this.zp.stale ||= bb.zp)
      }
      PD() {
        for (const bb of this.records.values()) bb.seen !== this.frame && (bb.draw && (bb.draw = null, this.args[5 * bb.slot + 1] = 0, this.argsDirty = !0, this.zp.stale ||= bb.zp), this.frame - bb.seen > 120 && (this.records.delete(bb.unit), this.freeSlots.push(bb.slot), bb.recorded && (this.bundleOf(bb).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(bb) {
        for (const ab of this.records.values()) ab.draw && ab.seen === this.frame && !ab.zp && bb(ab.draw, this.slots.data, ab.slot * oA / 4)
      }
      resourceDestroyed(bb) {
        this.main.stale ||= this.main.PY.has(bb), this.zp.stale ||= this.zp.PY.has(bb)
      }
      execute(bb, ab, Ub) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(bb, ab, Ub, "direct"), this.drawn;
        const Ab = this.host.sceneGroup(ab);
        if (!Ab) return this.main.bundle = null, this.zp.bundle = null, this.recordedSceneGroup = null, this.encode(bb, ab, Ub, "direct"), this.drawn;
        this.recordedTarget === Ub && this.recordedSceneGroup === Ab || (this.recordedTarget = Ub, this.recordedSceneGroup = Ab, this.main.stale = !0, this.zp.stale = !0);
        const Mb = this.main,
          Tb = this.zp;
        let Eb = !1;
        !Mb.stale && Mb.bundle || (Mb.bundle = this.record(ab, Ub, Ab, "indirect"), Eb = !0);
        const Yb = (0, HT.j)();
        return (Tb.stale || this.rangedEpoch !== Yb) && (this.rangedEpoch = Yb, Tb.bundle = this.drawsRanged() ? this.record(ab, Ub, Ab, "zp") : this.noRangedBundle(), Eb = !0), Eb && (this.bundles = Tb.bundle ? [Mb.bundle, Tb.bundle] : [Mb.bundle]), bb.executeBundles(this.bundles), bb.setBindGroup(0, Ab), this.drawn
      }
      record(bb, ab, Ub, Ab) {
        const Mb = this.device.createRenderBundleEncoder({
          label: "zp" === Ab ? "thin-bases-ranged" : "thin-bases",
          colorFormats: bb._colorFormat ? [bb._colorFormat] : [],
          depthStencilFormat: bb._depthStencilFormat,
          sampleCount: bb._sampleCount
        });
        return Mb.setBindGroup(0, Ub), this.encode(Mb, bb, ab, Ab), Mb.finish()
      }
      noRangedBundle() {
        for (const bb of this.records.values()) bb.zp && (bb.recorded = !1);
        return this.zp.PY.clear(), this.zp.stale = !1, null
      }
      drawsRanged() {
        for (const bb of this.records.values())
          if (bb.zp && bb.draw) return !0;
        return !1
      }
      encode(bb, ab, Ub, Ab) {
        const Mb = [];
        for (const Bb of this.records.values()) "direct" !== Ab && Bb.zp !== ("zp" === Ab) || (Bb.recorded = !1, Bb.draw && Mb.push(Bb));
        Mb.sort(GT);
        const Tb = "direct" === Ab ? null : "zp" === Ab ? this.zp : this.main;
        null === Tb || void 0 === Tb || Tb.PY.clear(), this.binder.reset();
        let Eb = !1;
        for (const Bb of Mb) {
          var Yb;
          const Mb = Bb.draw,
            eb = this.host.pipelineFor(Mb, ab, Ub);
          if (!eb) {
            this.host.pipelineCompiling(Mb, Ub) ? Eb = !0 : Tb && this.keep(Bb, Mb, Tb.PY);
            continue
          }
          let vb;
          if (Bb.zp && "indirect" !== Ab) {
            const bb = Bb.unit.owner;
            vb = "direct" === Ab && (0, HT.q)(bb) || (0, HT.m)(bb) || void 0
          }
          if (Tb && this.keep(Bb, Mb, Tb.PY), 0 === (null === (Yb = vb) || void 0 === Yb ? void 0 : Yb.count)) continue;
          this.binder.bind(bb, Mb, eb, this.slots.bindGroup, Bb.slot * oA);
          const Lb = 5 * Bb.slot;
          if ("indirect" === Ab) {
            Mb.indexBuffer ? bb.drawIndexedIndirect(this.argsBuffer, 4 * Lb) : bb.drawIndirect(this.argsBuffer, 4 * Lb);
            continue
          }
          const Pb = this.args;
          vb ? FT(bb, null !== Mb.indexBuffer, Pb, Lb, vb) : Mb.indexBuffer ? bb.drawIndexed(Pb[Lb], Pb[Lb + 1], Pb[Lb + 2], 0, 0) : bb.draw(Pb[Lb], Pb[Lb + 1], Pb[Lb + 2], 0)
        }
        Tb && (Tb.stale = Eb)
      }
      keep(bb, ab, Ub) {
        bb.recorded = !0, bb.pipelineKey = ab.pipelineKey, bb.materialGroup = ab.material.bindGroup, bb.vertexBuffers.length = 0, bb.vertexBuffers.push(...ab.vertexBuffers), bb.vertexOffsets = ab.vertexOffsets, bb.indexBuffer = ab.indexBuffer, bb.indexFormat = ab.indexFormat;
        for (const Ab of ab.vertexBuffers) Ub.add(Ab);
        ab.indexBuffer && Ub.add(ab.indexBuffer), Ub.add(ab.material.buffer);
        for (const Ab of ab.material.bound) Ab && Ub.add(Ab)
      }
      createRecord(bb) {
        let ab = this.freeSlots.pop();
        return void 0 === ab && (ab = this.slotCount++, this.grow()), {
          unit: bb,
          slot: ab,
          zp: void 0 !== (0, HT.m)(bb.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.zp.stale = !0), 5 * this.slotCount > this.args.length) {
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

    function FT(bb, ab, Ub, Ab, Mb) {
      const Tb = Ub[Ab + 1],
        Eb = Mb.data;
      for (let Yb = 0; Yb < Mb.count; Yb++) {
        const Mb = Math.min(Eb[2 * Yb], Tb),
          Bb = Math.min(Eb[2 * Yb + 1], Tb - Mb);
        0 !== Bb && (ab ? bb.drawIndexed(Ub[Ab], Bb, Ub[Ab + 2], 0, Mb) : bb.draw(Ub[Ab], Bb, Ub[Ab + 2], Mb))
      }
    }

    function hT(bb, ab) {
      if (bb.pipelineKey !== ab.pipelineKey || bb.materialGroup !== ab.material.bindGroup || bb.indexBuffer !== ab.indexBuffer || bb.indexFormat !== ab.indexFormat || bb.vertexOffsets !== ab.vertexOffsets || bb.vertexBuffers.length !== ab.vertexBuffers.length) return !1;
      for (let Ub = 0; Ub < bb.vertexBuffers.length; Ub++)
        if (bb.vertexBuffers[Ub] !== ab.vertexBuffers[Ub]) return !1;
      return !0
    }

    function GT(bb, ab) {
      return cM(bb.draw, ab.draw)
    }
    const QT = new WeakMap,
      qT = {
        depth: !1,
        sunShadow: !1
      };

    function uT(bb, ab) {
      let Ub = QT.get(bb);
      Ub || (Ub = new Map, QT.set(bb, Ub));
      const Ab = `${ab.depth?"-depth":""}${ab.sunShadow?"-shadow":""}${ab.shadowMask?"-mask":""}`;
      let Mb = Ub.get(Ab);
      if (!Mb) {
        const Tb = [{
          binding: Na.d,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Na.i
          }
        }, {
          binding: Na.t,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        ab.depth && Tb.push({
          binding: Na.m,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), ab.sunShadow && Tb.push(... function() {
          const bb = GPUShaderStage.FRAGMENT,
            ab = Na.n;
          return [{
            binding: ab.uniform,
            visibility: bb,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: ab.RP,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ab.special,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ab.volume,
            visibility: bb,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: ab.sampler,
            visibility: bb,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: ab.entities,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ab.entityGrids,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), ab.shadowMask && Tb.push({
          binding: Na.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Mb = bb.createBindGroupLayout({
          label: `${ab.depth?"terrain-":""}shader-pack-inputs${Ab}`,
          entries: Tb
        }), Ub.set(Ab, Mb)
      }
      return Mb
    }

    function rT(bb) {
      return uT(bb, qT)
    }

    function KT(bb, ab) {
      if (!ab) return !1;
      const Ub = (0, Wa.g)(bb);
      return !!Ub && qU(Ub, ab)
    }

    function oT(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!eA(ab)) return [];
      return [uT(bb, {
        depth: MA(ab.packVariant),
        sunShadow: KT(ab.packVariant, Ub),
        shadowMask: Ab
      })]
    }
    class lT {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = bb, this.sunShadow = Ub, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Na.i), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = bb.createBuffer({
          label: "shader-pack-inputs",
          size: Na.i,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Ab = (0, Na.v)(ab);
        this.textures = bb.createBuffer({
          label: "shader-pack-textures",
          size: Ab.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), bb.queue.writeBuffer(this.textures, 0, Ab), this.bindGroup = bb.createBindGroup({
          label: "shader-pack-inputs",
          layout: rT(bb),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Na.d,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Na.t,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(bb, ab, Ub) {
        (0, Na.y)(this.data, {
          seconds: bb.seconds(),
          lit: Ub,
          renderOffset: bb.renderOffset(),
          I6: bb.I6(),
          eyePosition: ab,
          shadowDirection: bb.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ab = ab ? this.sunShadow : null;
        if ((ab || Ub) && !Ab) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!bb && !Ab) return this.bindGroup;
        (bb && bb !== this.depthView || Ub && Ub !== this.maskView) && (this.depthView = null !== bb && void 0 !== bb ? bb : this.depthView, this.maskView = null !== Ub && void 0 !== Ub ? Ub : this.maskView, this.groups.clear());
        const Mb = (bb ? 1 : 0) | (Ab ? 2 : 0) | (Ub ? 4 : 0);
        let Tb = this.groups.get(Mb);
        if (!Tb) {
          const ab = this.entries();
          bb && ab.push({
            binding: Na.m,
            resource: bb
          }), Ab && ab.push(...Ab.entries()), Ub && ab.push({
            binding: Na.q,
            resource: Ub
          }), Tb = this.device.createBindGroup({
            label: `${bb||Ub?"terrain-":""}shader-pack-inputs${bb?"-depth":""}${Ab?"-shadow":""}${Ub?"-mask":""}`,
            layout: uT(this.device, {
              depth: !!bb,
              sunShadow: !!Ab,
              shadowMask: !!Ub
            }),
            entries: ab
          }), this.groups.set(Mb, Tb)
        }
        return Tb
      }
      bind(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        bb.setBindGroup(Na.g, this.bindGroupFor(ab, Ub, Ab))
      }
    }

    function tT(bb, ab, Ub) {
      if (bb.gpuVersion === ab.gpuBuffersVersion) return !0;
      let Ab;
      do {
        if (Ab = ab.gpuBuffersVersion, !wT(bb, ab, Ub)) return !1
      } while (ab.gpuBuffersVersion !== Ab);
      return bb.gpuVersion = Ab, bb.fitInstances = 0, !0
    }

    function wT(bb, ab, Ub) {
      let Ab = null;
      for (let Tb = 0; Tb < bb.slotData.length; Tb++) {
        var Mb;
        const Eb = bb.slotData[Tb],
          Yb = Eb ? ab.gpuBuffer(Eb) : Ub;
        if (!Yb) return !1;
        Eb && bb.layout.instanceEnds[Tb] < 0 && ab.cover(Eb, Number.POSITIVE_INFINITY), bb.buffers[Tb] = Yb;
        const Bb = bb.o3[Tb] + (Eb ? ab.gpuOffset(Eb) : 0);
        Bb !== (null !== (Mb = Ab) && void 0 !== Mb ? Mb : bb.offsets)[Tb] && (Ab ??= bb.offsets.slice(), Ab[Tb] = Bb), bb.ends[Tb] = Eb ? ab.gpuEnd(Eb) : Yb.size
      }
      return Ab && (bb.offsets = Ab), !0
    }

    function sT(bb, ab, Ub, Ab) {
      if (ab <= bb.fitInstances) return null;
      const {
        layout: Mb,
        ends: Tb,
        offsets: Eb,
        slotData: Yb,
        o3: Bb
      } = bb;
      let eb = !1;
      for (let vb = 0; vb < Mb.buffers.length; vb++) {
        const bb = Mb.instanceEnds[vb];
        if (bb < 0) continue;
        const Ab = (ab - 1) * Mb.buffers[vb].arrayStride + bb;
        if (Tb[vb] - Eb[vb] < Ab) return {
          index: vb,
          needed: Ab
        };
        const Lb = Yb[vb];
        Lb && Ub.cover(Lb, Bb[vb] + Ab) && (eb = !0)
      }
      return eb && tT(bb, Ub, Ab), bb.fitInstances = ab, null
    }
    var gT = Ub(37166),
      CT = Ub(37202);
    const VT = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      OT = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      cT = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      JT = `((vertexInputs.aPackedLightLevels >> 16u) | ${Ba.c.placed}u)`,
      nT = "u32(vertexInputs.aShaderPackItem.x)",
      ST = `${Ba.c.lifeform}u`;

    function bE(bb) {
      return "item" === bb.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const aE = "bloxdSpEnchant",
      UE = "floor(finalWorld[3].xyz)";

    function AE(bb, ab, Ub) {
      return "placed" === ab.kind && bb.reads[Ub].includes("bloxdFragmentBlockPosition")
    }

    function ME(bb, ab) {
      let [Ub, Ab] = bb;
      return Ub === ab.point && Ab === ab.code
    }

    function TE(bb, ab) {
      var Ub, Ab, Mb;
      const Tb = null === (Ub = bb.find((bb => bb.texture))) || void 0 === Ub ? void 0 : Ub.texture,
        Eb = null === (Ab = bb.find((bb => bb.enchantTier))) || void 0 === Ab ? void 0 : Ab.enchantTier,
        Yb = null === (Mb = bb.find((bb => bb.overlay))) || void 0 === Mb ? void 0 : Mb.overlay,
        Bb = Yb ? ab.filter((bb => ME(bb, Yb))).length : 0;
      return Yb && 1 === Bb ? {
        texture: Tb,
        overlay: Yb,
        enchantTier: Eb
      } : {
        texture: Tb,
        enchantTier: Eb
      }
    }

    function EE(bb) {
      if ("item" === bb.kind) {
        return {
          vertexFlags: `(${nT} & 0xffffu)`,
          varying: "vPackItem",
          value: nT,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return bb.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: JT,
        varying: "vPackFlags",
        value: JT,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function YE(bb) {
      return "lifeform" === bb.kind ? ST : "0u"
    }

    function BE(bb) {
      return !!bb.BLOXD_PLUGIN_ENCHANTMENT
    }

    function eE(bb, ab) {
      const {
        enchantTier: Ub
      } = ab;
      return Ub && BE(ab.defines) && "lifeform" === ab.kind && RE(bb, "enchantTier") ? Ub : null
    }

    function vE(bb, ab) {
      return BE(ab.defines) && RE(bb, "enchantSpeed")
    }

    function LE(bb) {
      const {
        overlay: ab,
        defines: Ub
      } = bb;
      if (!ab || !Ub.DIFFUSE) return null;
      const Ab = Ub.VERTEXCOLOR || Ub.INSTANCESCOLOR && Ub.INSTANCES;
      return `vec4f(${ab.colour}.rgb * uniforms.vDiffuseInfos.y${Ab?" * fragmentInputs.vColor.rgb":""}, ${ab.colour}.a)`
    }
    const PE = "fragmentInputs.vPackTexture";

    function XE(bb) {
      const {
        atlas: ab,
        defines: Ub,
        texture: Ab
      } = bb;
      if (ab || !Ub.DIFFUSE) return null;
      if (Ab) return {
        texture: "diffuseSampler",
        ...Ab
      };
      const Mb = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===Ub.DIFFUSEDIRECTUV?"vMainUV1":2===Ub.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== bb.kind) return Mb;
      if (!Ub.BLOXD_PLUGIN_ANIMATED) return {
        ...Mb,
        id: PE
      };
      const Tb = ib.d.WGSL,
        Eb = (0, ib.Lb)(Tb, "uAnimStatesNum"),
        Yb = (0, ib.hb)(Tb, (0, gT.f)(Tb), Eb),
        Bb = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Eb})`,
        layers: [Yb],
        uv: `vec2f(${Bb}.x, ${Bb}.y * ${Eb} - ${Yb})`,
        levelUv: Bb,
        id: PE
      }
    }

    function jE(bb, ab) {
      return "box" === ab.kind && !!bb.hooks.surface && null !== XE(ab)
    }

    function RE(bb, ab) {
      return bb.reads.fragment.includes(ab)
    }

    function kE(bb) {
      return !!bb.BLOXD_LIGHTING && !bb.BLOXD_UNLIT
    }

    function yE(bb, ab, Ub, Ab) {
      const Mb = bb.filter((bb => {
        let [Ub, Ab] = bb;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === Ub && Ab === ab
      }));
      if (1 !== Mb.length) throw new Error(`A model program for shader packs has ${0===Mb.length?"no":"more than one"} ${Ab} code before fog (lite/modelShaderPack.ts)`);
      return bb.map((bb => bb === Mb[0] ? [bb[0], Ub] : bb))
    }

    function ZE(bb, ab, Ub, Ab) {
      const {
        hooks: Mb
      } = bb, {
        kind: Tb,
        defines: Eb
      } = ab, Yb = [...Ub];
      var Bb;
      ab.atlas && Mb.surface && Yb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", wU("atlasIdxIn")]), "item" === Tb && Yb.push(["CUSTOM_VERTEX_DEFINITIONS", (0, ib.h)(ib.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), jE(bb, ab) && Yb.push(["CUSTOM_VERTEX_DEFINITIONS", (0, ib.h)(ib.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Bb = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${lU}[min(u32(${Bb}) - 1u, arrayLength(&${lU}) - 1u)], ${Bb} > 0.5);\n`)]);
      const eb = EE(ab);
      eb && (Mb.surface || Mb.light) && Yb.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${eb.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${eb.varying} = ${eb.value};`]);
      let vb = Ab;
      if (AE(bb, ab, "fragment") && (Yb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${UE});`]), vb = [...vb, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), RE(bb, "localPosition") && Yb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${bE(ab)};`]), BE(Eb) && Mb.surface) {
        vE(bb, ab) && Yb.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const Ub = eE(bb, ab);
        Ub && Yb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${Ub});`]);
        const Ab = (0, ib.vb)(ib.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        vb = [...yE(vb, (0, CT.h)(ib.d.WGSL), Ab, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, CT.d)(aE)]]
      }
      const {
        overlay: Lb
      } = ab;
      Lb && LE(ab) && Mb.surface && (vb = vb.filter((bb => !ME(bb, Lb))));
      const Pb = Mb.light ? function(bb) {
        return "placed" === bb.kind ? {
          name: "terrain",
          engine: (0, fa.S)(ib.d.WGSL),
          pack: (0, fa.fb)(ib.d.WGSL)
        } : bb.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, fa.K)(ib.d.WGSL),
          pack: (0, fa.bb)(ib.d.WGSL)
        } : null
      }(ab) : null;
      if (Pb && (vb = yE(vb, Pb.engine, Pb.pack, `${Pb.name} light`), "placed" !== Tb && kE(Eb))) {
        const bb = Eb.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, ib.Lb)(ib.d.WGSL, "uEntityLightLevels") : (0, ib.Sb)(ib.d.WGSL, "aLightLevels");
        Yb.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${fa.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, fa.db)(ib.d.WGSL, bb)])
      }
      return {
        vertexCode: Yb,
        fragmentCode: vb
      }
    }

    function DE(bb, ab, Ub, Ab) {
      return GU(bb, ab, Ub, Ab, "model")
    }
    const zE = "\t@builtin(position) position: vec4f,\n";

    function xE(bb, ab) {
      const Ub = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(bb)[0];
      return `${Ub}${ab}${bb.slice(Ub.length)}`
    }

    function iE(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Mb
      } = ab, Tb = qU(ab, Ab), {
        kind: Eb,
        defines: Yb
      } = Ub, Bb = function(bb, ab) {
        var Ub, Ab, Mb;
        const {
          defines: Tb
        } = ab, Eb = EE(ab), Yb = !!Tb.FOG, Bb = BE(Tb), eb = null !== (Ub = null === Eb || void 0 === Eb ? void 0 : Eb.enchantTier) && void 0 !== Ub ? Ub : eE(bb, ab) ? "fragmentInputs.vPackEnchantTier" : "0u", vb = "lifeform" === ab.kind && !Tb.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Ab = null === Eb || void 0 === Eb ? void 0 : Eb.vertexFlags) && void 0 !== Ab ? Ab : YE(ab),
          vertexLocalPosition: bE(ab),
          flags: null !== (Mb = null === Eb || void 0 === Eb ? void 0 : Eb.flags) && void 0 !== Mb ? Mb : YE(ab),
          normal: "normalW",
          alpha: vb ? "alpha * baseColor.a" : "alpha",
          alphaOut: vb ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: Yb ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: Yb ? "1.0 - fog" : "0.0",
          enchantTier: eb,
          enchantColour: Bb ? `${aE}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: vE(bb, ab) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: RE(bb, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: LE(ab)
        }
      }(ab, Ub), eb = bb.textures.filter((bb => /^textureAtlas\d+$/.test(bb.name))).length, vb = Ub.atlas && eb > 0 ? {
        count: eb,
        layers: Ub.atlas.layers,
        width: Ub.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: bb.material.slots.has("uAnimDataPerTex") ? (ab, Ub) => NA(ab, Ub, function(bb) {
          const ab = bb.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            qL: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: bb => `uniforms.uAnimDataPerTex[${bb}]${ab}`
          }
        }(bb)) : null
      } : null, Lb = "placed" === Eb ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Pb = null !== vb && void 0 !== vb ? vb : XE(Ub), Xb = function(bb, Ub) {
        let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Na.x)()}${rU(ab,Ub)}${Ab}${gU(bb)}${dU}${Lb}${ab.code}`
      };
      let {
        vertex: jb,
        fragment: Rb
      } = bb;
      const kb = VU(Mb, Bb);
      if (kb) {
        const bb = AE(ab, Ub, "vertex") ? `\tbloxdSpCell = ${UE};\n` : "";
        jb = DE(jb, VT, `${bb}${kb.slice(1)}${VT}`, "vertex")
      }
      const yb = `${KU(ab,Tb,function(bb,ab){return ab.TWOSIDEDLIGHTING?bb:`select(-(${bb}), ${bb}, fragmentInputs.frontFacing)`}(Bb.normal,Yb),Bb.flags)}${OU(Mb,ab.strict,ab.program,Pb,Bb)}`;
      yb && (Rb = DE(Rb, OT, `${yb.slice(1)}${OT}`, "surface")), Tb && ab.sunShadow && !Yb.TWOSIDEDLIGHTING && (Rb = DE(Rb, zE, `${zE}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Zb = nU(Mb);
      if (Zb) {
        const bb = JU(Mb, kE(Yb), !0, Bb);
        Rb = DE(Rb, cT, `${bb}${Zb.slice(1)}${cT}`, "light")
      }
      const Db = jE(ab, Ub) ? tU : "";
      return {
        ...bb,
        vertex: xE(jb, Xb(vb, !1, Db)),
        fragment: xE(Rb, Xb(Pb, Tb))
      }
    }
    const fE = {
      name: "earthSky",
      uniqueId: -1
    };
    class mE {
      constructor(bb) {
        this.resources = bb, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const bb of this.instances.values()) bb.released = !0, this.resources.destroyBuffer(bb.buffer);
        this.instances.clear()
      }
    }

    function pE(bb) {
      return bb.failed && null !== bb.packGroup
    }
    class NE {
      constructor(bb, ab, Ub) {
        this.device = bb, this.resources = ab, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.X3 = new WT, this.modelMeshes = new NT, this.thinBundle = void 0, this.binder = new VM, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new RT((bb => this.modelSlot(bb).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, ea.d)("Lite: "), this.renderStates = new vT(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (bb, ab) => this.keepSteady(bb, ab), this.lists = new OM(this.modelMeshes, this.X3, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new ET(ab, this.warnOnce, ((bb, ab, Ub) => this.programWithModel(bb, ab, Ub)), pE), this.vertexLayouts = new DT(ab, bb.limits, this.warnOnce), this.sceneLayout = aa(bb), this.frameLayout = bb.createBindGroupLayout({
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
        }), this.meshSlots = new iT(bb, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = bb.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new dT(bb, new iT(bb, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (bb, ab, Ub) => this.pipelineFor(bb, ab, Ub),
          pipelineCompiling: (bb, ab) => !bb.program.failed && !1 !== this.pipelines.get(`${bb.pipelineKey}|${ab}`),
          sceneGroup: bb => {
            const ab = Ub(bb);
            return ab || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), ab
          }
        }), ab.onDestroy = bb => {
          this.thinBundle.resourceDestroyed(bb)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Mb = {
          order: bb,
          isTransparent: ab,
          _direct: !ab,
          bind: (bb, ab) => this.createBinding(Mb, ab, Ub, Ab)
        };
        return Mb
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(bb, ab, Ub) {
        var Ab;
        let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = ab, this.drawDefines.view = ab, this.thinBundle.eD(), this.writeFrameUniforms();
        const Tb = null !== (Ab = null === Mb || void 0 === Mb ? void 0 : Mb.defineFor("model")) && void 0 !== Ab ? Ab : 0;
        this.drawDefines.modelPackVariant = Tb, Mb && 0 !== Tb && (this.packInputs ??= new lT(this.device, Mb.textureLayers(), this.sunShadow), this.packInputs.write(Mb, ab.eye, Mb.XR())), this.lists.clear(), this.slotCount = 0;
        const Eb = bb.activeCamera;
        this.X3.select(Eb, this.keepSteadyBase), this.modelMeshes.select(Eb, ab), Ub && this.pushEarthSky(Ub), this.lists.collect(bb), this.thinBundle.PD(), this.uploadMeshSlots()
      }
      pushDraws(bb, ab, Ub, Ab, Mb, Tb) {
        let Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Yb = Tb.length;
        for (let Bb = 0; Bb < Ub; Bb++) {
          const Ub = ab[Bb];
          let Yb = this.retainedDraw(bb, Ub, Ab, Mb);
          if (void 0 === Yb && (Yb = this.drawFor(bb, Ub, Ab, Mb), this.retain(Ub, Yb)), Yb) {
            const bb = Ub.owner,
              ab = Eb ? Eb[Bb] : -1;
            Yb.slotOffset = ab < 0 ? this.writeMeshSlot(bb.getWorldMatrix().m, bb.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[ab], 16 * ab), Tb.push(Yb)
          }
        }
        return Tb.length - Yb
      }
      bundleDraws(bb, ab, Ub) {
        let Ab = 0;
        for (const Mb of ab) {
          let ab = this.retainedDraw(bb, Mb, Ub, !1);
          const Tb = void 0 !== ab;
          if (void 0 === ab && (ab = this.drawFor(bb, Mb, Ub, !1), this.retain(Mb, ab)), ab) {
            const bb = Mb.owner,
              Ub = this.thinBundle.add(Mb, ab, bb.getWorldMatrix().m, bb.visibility);
            Tb && this.steadyFrom(Mb, ab, Ub), Ab++
          }
        }
        return Ab
      }
      steadyFrom(bb, ab, Ub) {
        const Ab = bb.owner,
          Mb = this.X3.base(Ab),
          Tb = Ab.material,
          {
            drawState: Eb,
            instance: Yb
          } = ab.inputs.retained;
        if (!Mb || !Tb || 1 !== bb.parts.materials.length || mT(bb) !== Tb) return;
        const Bb = Mb.steady ??= {
          unit: bb,
          material: Tb,
          visibility: 1,
          draw: ab,
          record: Ub,
          drawState: Eb,
          instance: Yb,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Bb.unit = bb, Bb.material = Tb, Bb.visibility = Ab.visibility, Bb.draw = ab, Bb.record = Ub, Bb.drawState = Eb, Bb.instance = Yb, Bb.bindGroup = Yb.bindGroup, Bb.gpuVersion = this.resources.gpuBuffersVersion, Bb.fitInstances = ab.inputs.fitInstances, Bb.worldFlag = Ab.getWorldMatrix().updateFlag, Bb.handedFrame = this.frame
      }
      keepSteady(bb, ab) {
        const Ub = bb.steady;
        if (Ub.handedFrame !== this.frame - 1 || (this.frame + Ub.phase) % 8 === 0) return !1;
        const Ab = bb.mesh,
          {
            unit: Mb,
            draw: Tb,
            instance: Eb,
            drawState: Yb
          } = Ub,
          Bb = Ab.forcedInstanceCount || Ab.W8;
        if (!Ab.isVisible || Ab.IAb || Ab.visibility !== Ub.visibility || 0 === (Ab.layerMask & ab.layerMask) || Ab.material !== Ub.material || 0 !== Ab.renderingGroupId || Ab.hasVertexAlpha || !this.drawDefines.definesHold(Yb, Mb, Yb.instancing) || Ub.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Tb.inputs, Mb, Yb.instancing, Tb.program) || Tb.program.failed || Eb.released || Bb <= 0 || Bb > Ub.fitInstances) return !1;
        if (Eb.frame !== this.frame && this.bindMaterial(Eb, this.modelUniforms.refreshModelUniforms(Ab.oN(), Eb, Eb.model, this.view)), !Eb.bindable || Eb.bindGroup !== Ub.bindGroup) return !1;
        const eb = Ab.computeWorldMatrix(),
          vb = eb.updateFlag !== Ub.worldFlag;
        return Ub.worldFlag = eb.updateFlag, Tb.instances = Bb, this.thinBundle.addAgain(Ub.record, Tb, vb ? eb.m : null, Ub.visibility), Ub.handedFrame = this.frame, this.X3.drawn++, !0
      }
      retainedDraw(bb, ab, Ub, Ab) {
        const Mb = this.inputs.get(ab),
          Tb = null === Mb || void 0 === Mb ? void 0 : Mb.retained;
        if (!Mb || !Tb) return;
        const {
          drawState: Eb,
          program: Yb,
          instance: Bb,
          instancing: eb
        } = Tb, vb = ab.owner;
        if (bT(vb) !== eb) return;
        const Lb = this.instanceCount(vb, eb);
        if (Lb <= 0) return null;
        if (Bb.released || Yb.failed || Eb.program !== Yb || !this.drawDefines.programCurrent(Eb, ab, eb, Ub) || !this.inputsStamped(Mb, ab, eb, Yb) || vb.isUnIndexed !== Tb.unIndexed || this.indexKey(ab) !== Tb.indexData) return;
        if (Tb.indexBuffer && Tb.gpuVersion !== this.resources.gpuBuffersVersion) {
          const bb = this.resources.gpuBuffer(Tb.indexData);
          if (!bb) return;
          Tb.indexBuffer = bb, Tb.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Pb = !1;
        if (Bb.frame !== this.frame && (Pb = this.modelUniforms.refreshModelUniforms(bb, Bb, Bb.model, this.view)), !this.bindMaterial(Bb, Pb) || !this.withGpuBuffers(Mb) || !this.instanceBuffersFit(vb.name, Mb, Lb)) return null;
        const Xb = this.makeDraw(Yb, Mb, this.renderStates.renderState(Eb.model, vb, Ab, Mb.state), Bb, Lb);
        return this.setRange(Xb, ab, Tb.indexBuffer, Tb.indexData), Xb
      }
      retain(bb, ab) {
        const Ub = this.drawDefines.drawStates.get(bb);
        if (!ab || !Ub || Ub.program !== ab.program) {
          const ab = this.inputs.get(bb);
          return void(ab && (ab.retained = null))
        }
        const Ab = bb.owner,
          Mb = Ub.instancing,
          Tb = this.indexKey(bb),
          Eb = ab.inputs.retained;
        Eb ? (Eb.drawState = Ub, Eb.instancing = Mb, Eb.program = ab.program, Eb.instance = ab.material, Eb.indexData = Tb, Eb.unIndexed = Ab.isUnIndexed, Eb.indexBuffer = ab.indexBuffer, Eb.gpuVersion = this.resources.gpuBuffersVersion) : ab.inputs.retained = {
          drawState: Ub,
          instancing: Mb,
          program: ab.program,
          instance: ab.material,
          indexData: Tb,
          unIndexed: Ab.isUnIndexed,
          indexBuffer: ab.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(bb, ab, Ub, Ab) {
        const Mb = ab.owner,
          Tb = mT(ab);
        if (!Tb) return null;
        const Eb = Tb.getClassName();
        let Yb = null;
        if (function(bb) {
            return "LinesMesh" === bb.getClassName()
          }(Mb)) {
          if (! function(bb) {
              return "ShaderMaterial" === bb.getClassName() && "color" === bb.shaderPath
            }(Tb)) return this.warnOnce(`lines:${Eb}`, `A LinesMesh with a ${Eb} is not drawn yet (${Tb.name})`), null;
          Yb = Mb
        } else if ("StandardMaterial" !== Eb && "LiteMaterial" !== Eb) return this.warnOnce(`class:${Eb}`, `${Eb} is not drawn yet (${Tb.name})`), null;
        const Bb = bT(Mb),
          eb = this.instanceCount(Mb, Bb);
        if (eb <= 0) return null;
        const vb = Yb ? this.lineProgramFor(Mb, Ub, Bb) : this.drawDefines.programFor(bb, ab, Tb, Ub, Bb);
        if (!vb || vb.failed) return null;
        const Lb = Yb ? null : this.drawDefines.drawStates.get(ab).model,
          Pb = Lb ? this.modelInstance(Lb, vb) : this.materialInstance(Mb, vb);
        let Xb = !1;
        if (Pb.frame !== this.frame && (Yb ? Zb(Pb.ubo, Yb) : Xb = this.modelUniforms.refreshModelUniforms(bb, Pb, Pb.model, this.view)), !this.bindMaterial(Pb, Xb)) return null;
        const jb = this.meshInputs(ab, vb, Bb);
        if (!jb || !this.instanceBuffersFit(Mb.name, jb, eb)) return null;
        const Rb = this.indexKey(ab);
        let kb = null;
        if (Rb && !Mb.isUnIndexed && (kb = this.resources.gpuBuffer(Rb), !kb)) return null;
        const yb = this.renderStates.renderState(null !== Lb && void 0 !== Lb ? Lb : Tb, Mb, Ab, jb.state, Yb ? "line-list" : "triangle-list"),
          Db = this.makeDraw(vb, jb, yb, Pb, eb);
        return this.setRange(Db, ab, kb, Rb), Db
      }
      indexKey(bb) {
        const ab = MT(bb);
        return ab ? this.resources.modelIndex(ab) : null
      }
      setRange(bb, ab, Ub, Ab) {
        Ub && (bb.indexBuffer = Ub, bb.indexFormat = this.resources.indexFormat(Ab));
        const Mb = 4 * ab.range + (Ub ? 0 : 2);
        bb.unit = ab, bb.first = ab.parts.cj[Mb], bb.count = ab.parts.cj[Mb + 1]
      }
      makeDraw(bb, ab, Ub, Ab, Mb) {
        ab.state !== Ub && (ab.state = Ub, ab.pipelineKey = `${bb.id}|${ab.layout.key}|${Ub.key}`, ab.pipeline = null);
        const Tb = ab.draw ??= {
          program: bb,
          inputs: ab,
          pipelineKey: "",
          layout: ab.layout,
          state: Ub,
          material: Ab,
          slotOffset: 0,
          vertexBuffers: ab.buffers,
          vertexOffsets: ab.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Mb,
          unit: null
        };
        return Tb.program = bb, Tb.pipelineKey = ab.pipelineKey, Tb.state = Ub, Tb.material = Ab, Tb.vertexOffsets = ab.offsets, Tb.indexBuffer = null, Tb.instances = Mb, Tb
      }
      instanceCount(bb, ab) {
        switch (ab) {
          case "thin":
            return bb.forcedInstanceCount || bb.W8;
          case "instanced":
            return this.prepareInstances(bb);
          case "none":
            return 1
        }
      }
      prepareInstances(bb) {
        const ab = function(bb, ab) {
          const Ub = ab._userInstancedBuffersStorage,
            Ab = bb.batchUploads.get(ab);
          if (Ab) {
            var Mb;
            if (Ab.layout === (null !== (Mb = null === Ub || void 0 === Ub ? void 0 : Ub.interleavedKinds) && void 0 !== Mb ? Mb : null)) return Ab;
            Ab.release()
          }
          return new gb(bb, ab, Ub)
        }(this.resources, bb);
        return ab.frame !== this.frame && ab.pack(bb, this.modelMeshes.instanceBatch(bb), this.modelMeshes.worlds, this.frame), ab.count
      }
      programWithModel(bb, ab, Ub) {
        const Ab = this.modelSlot(bb),
          Mb = YT(Ab, bb, Ub),
          Tb = this.drawDefines.modelPackKind(bb),
          Eb = Tb ? function(bb, ab, Ub, Ab) {
            const Mb = (0, pb.w)(bb, fb.g.name),
              Tb = [];
            for (const {
                feature: Bb,
                state: eb,
                active: vb
              }
              of bb.features) {
              var Eb, Yb;
              const bb = vb ? null === (Eb = (Yb = (0, va.g)(Bb)).QX) || void 0 === Eb ? void 0 : Eb.call(Yb, eb) : void 0;
              bb && Tb.push(bb)
            }
            return {
              kind: ab,
              atlas: null !== Mb && void 0 !== Mb && Mb.active ? (0, fb.b)(Mb.state) : null,
              defines: Ub,
              ...TE(Tb, Ab)
            }
          }(bb, Tb, ab, Ab.fragmentCode) : null;
        if (Eb && function(bb) {
            const ab = bb.defines;
            return (null === bb.atlas || !!ab.DIFFUSE && 1 === ab.DIFFUSEDIRECTUV) && !!ab.NORMAL && !ab.REFLECTION && !ab.EMISSIVEASILLUMINATION && !ab.LINKEMISSIVEWITHDIFFUSE
          }(Eb)) {
          const Ub = this.modelPackProgram(bb, ab, `${Mb}#${Tb}#sp${this.drawDefines.modelPackVariant}`, Ab, Eb);
          if (Ub && !Ub.failed) return Ub
        }
        const Yb = this.programs.get(Mb);
        if (Yb || this.unbuildable.has(Mb)) return null !== Yb && void 0 !== Yb ? Yb : null;
        let Bb;
        try {
          Bb = YM({
            defines: UT(ab),
            vertexCode: Ab.vertexCode,
            fragmentCode: Ab.fragmentCode,
            pluginUniforms: Ab.pluginUniforms
          })
        } catch (eb) {
          return this.unbuildable.add(Mb), this.warnOnce(`build:${Mb}`, `could not build a program for ${bb.name}: ${String(eb)}`), null
        }
        return this.createProgram(Mb, Bb, "standard")
      }
      modelPackProgram(bb, ab, Ub, Ab, Mb) {
        const Tb = this.programs.get(Ub);
        if (Tb || this.unbuildable.has(Ub)) return null !== Tb && void 0 !== Tb ? Tb : null;
        const Eb = this.drawDefines.modelPackVariant;
        let Yb;
        try {
          const bb = function(bb) {
              return (0, Wa.e)(bb, "model")
            }(Eb),
            Ub = ZE(bb, Mb, Ab.vertexCode, Ab.fragmentCode);
          Yb = iE(YM({
            defines: UT(ab),
            ...Ub,
            pluginUniforms: Ab.pluginUniforms
          }), bb, Mb, !!this.sunShadow)
        } catch (vb) {
          return this.unbuildable.add(Ub), this.warnOnce(`build:${Ub}`, `could not build a shader pack program for ${bb.name}, which draws without the pack: ${String(vb)}`), null
        }
        const Bb = KT(Eb, !!this.sunShadow),
          eb = {
            group: this.packInputs.bindGroupFor(null, Bb),
            layout: uT(this.device, {
              depth: !1,
              sunShadow: Bb
            })
          };
        return this.createProgram(Ub, Yb, function(bb) {
          return `standard-sp${bb}`
        }(Eb), eb)
      }
      lineProgramFor(bb, ab, Ub) {
        const Ab = yb(bb, Ub, ab, this.view);
        let Mb = this.linePrograms.get(Ab);
        var Tb;
        return Mb || (Mb = this.createProgram(`lines#${Ab}`, (Tb = function(bb) {
          const ab = new Map;
          for (let Ub = 0; Ub < eb.length; Ub++) bb & 1 << Ub && ab.set(eb[Ub], !0);
          return ab
        }(Ab), LM({
          defines: Tb,
          vertex: eM,
          fragment: vM,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Ab, Mb)), Mb
      }
      createProgram(bb, ab, Ub) {
        var Ab;
        let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Tb = this.nextProgramId++,
          Eb = `${Ub}-${Tb}`,
          Yb = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Bb = [{
            binding: 0,
            visibility: Yb,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Lb of ab.textures) Bb.push({
          binding: Lb.binding,
          visibility: Yb,
          texture: {
            viewDimension: Lb.dimension
          }
        }), Bb.push({
          binding: Lb.samplerBinding,
          visibility: Yb,
          sampler: {}
        });
        const eb = this.device.createBindGroupLayout({
            label: Eb,
            entries: Bb
          }),
          vb = {
            key: bb,
            id: Tb,
            kind: Ub,
            program: ab,
            vertex: this.device.createShaderModule({
              label: `${Eb}-vertex`,
              code: ab.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Eb}-fragment`,
              code: ab.fragment
            }),
            materialLayout: eb,
            pipelineLayout: this.device.createPipelineLayout({
              label: Eb,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, eb, ...Mb ? [Mb.layout] : []]
            }),
            packGroup: null !== (Ab = null === Mb || void 0 === Mb ? void 0 : Mb.group) && void 0 !== Ab ? Ab : null,
            failed: !1
          };
        return this.programs.set(bb, vb), vb
      }
      writeFrameUniforms() {
        const bb = this.frameUniforms;
        jT(this.view, bb), this.device.queue.writeBuffer(this.frameBuffer, 0, bb)
      }
      materialInstance(bb, ab) {
        let Ub = this.materials.get(bb);
        if (!Ub) {
          const ab = new Map;
          this.materials.set(bb, ab), bb.UW.addOnce((() => {
            for (const bb of ab.values()) bb.released = !0, this.resources.destroyBuffer(bb.buffer);
            this.materials.delete(bb)
          })), Ub = ab
        }
        let Ab = Ub.get(ab.key);
        return Ab || (Ab = this.newMaterialInstance(bb, null, ab), Ub.set(ab.key, Ab)), Ab
      }
      modelInstance(bb, ab) {
        const Ub = this.modelSlot(bb);
        let Ab = Ub.instances.get(ab.key);
        return Ab || (Ab = this.newMaterialInstance(bb, bb, ab), Ub.instances.set(ab.key, Ab)), Ab
      }
      modelSlot(bb) {
        let ab = bb.gpu[Wb.g.lite];
        return ab || (ab = new mE(this.resources), bb.gpu[Wb.g.lite] = ab), ab
      }
      newMaterialInstance(bb, ab, Ub) {
        const Ab = Ub.program.material.floats,
          Mb = new Float32Array(Ab),
          Tb = new Map;
        return {
          owner: bb,
          model: ab,
          program: Ub,
          data: Mb,
          uploaded: new Float32Array(Ab).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${bb.name}-uniforms`,
            size: Math.max(16, 4 * Ab),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Tb,
          ubo: new XT(Ub.program.material.slots, Mb, Tb),
          bindGroup: null,
          bound: new Array(2 * Ub.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(bb) {
        var ab;
        const Ub = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: kM + yM,
            fragment: kM + ZM,
            attributes: [],
            material: RM,
            textures: []
          }, "earthSky"),
          Ab = this.earthSkyUniforms ??= this.newMaterialInstance(fE, null, Ub);
        this.earthSkyFrom !== bb && (this.earthSkyFrom = bb, Ab.data.fill(0)), NM(Ab.ubo, bb, this.view);
        const Mb = this.vertexInputs(Ub, fE, "earthSky", Ub, null);
        if (Ub.failed || !Mb || !this.bindMaterial(Ab, !1)) return;
        const Tb = null !== (ab = Mb.state) && void 0 !== ab ? ab : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Eb = this.makeDraw(Ub, Mb, Tb, Ab, 1);
        Eb.count = PM.length;
        const Yb = WM(bb, this.view);
        Eb.slotOffset = this.writeMeshSlot(Yb, 1), this.lists.skyDraws.push(Eb)
      }
      uploadIfChanged(bb) {
        const {
          data: ab,
          uploaded: Ub
        } = bb;
        for (let Ab = 0; Ab < ab.length; Ab++)
          if (ab[Ab] !== Ub[Ab]) return Ub.set(ab), void this.device.queue.writeBuffer(bb.buffer, 0, ab)
      }
      bindMaterial(bb, ab) {
        return bb.frame !== this.frame && (bb.frame = this.frame, ab || this.uploadIfChanged(bb), bb.bindable = this.bindTextures(bb)), bb.bindable
      }
      bindTextures(bb) {
        const {
          program: ab,
          bound: Ub
        } = bb, Ab = ab.program.textures;
        let Mb = !bb.bindGroup,
          Tb = !0;
        for (let Eb = 0; Eb < Ab.length; Eb++) {
          const ab = bb.textures.get(Ab[Eb].name),
            Yb = ab ? this.resources.boundTexture(ab) : null;
          Yb ? Ub[2 * Eb] === Yb.view && Ub[2 * Eb + 1] === Yb.sampler || (Ub[2 * Eb] = Yb.view, Ub[2 * Eb + 1] = Yb.sampler, Mb = !0) : (ab || bb.ubo.expected.has(Ab[Eb].name) || this.warnOnce(`texture:${bb.owner.name}:${Ab[Eb].name}`, `${bb.owner.name} has no ${Ab[Eb].name}`), Tb = !1)
        }
        if (!Tb) return Mb && (bb.bindGroup = null), !1;
        if (Mb) {
          const Mb = [{
            binding: 0,
            resource: {
              buffer: bb.buffer
            }
          }];
          for (let bb = 0; bb < Ab.length; bb++) Mb.push({
            binding: Ab[bb].binding,
            resource: Ub[2 * bb]
          }), Mb.push({
            binding: Ab[bb].samplerBinding,
            resource: Ub[2 * bb + 1]
          });
          bb.bindGroup = this.device.createBindGroup({
            label: `${bb.owner.name}-material`,
            layout: ab.materialLayout,
            entries: Mb
          })
        }
        return !0
      }
      writeMeshSlot(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, bb, ab, Ub), this.slotCount++ * oA
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(bb, ab, Ub, Ab, Mb) {
        let Tb = this.inputs.get(bb);
        if (!Tb || Tb.program !== Ab || !zT(ab, Tb, this.resources, Mb)) {
          var Eb;
          if (Tb = null !== (Eb = this.vertexLayouts.resolveInputs(ab, Ub, Ab, Mb)) && void 0 !== Eb ? Eb : void 0, !Tb) return null;
          this.inputs.set(bb, Tb)
        }
        return this.withGpuBuffers(Tb)
      }
      meshInputs(bb, ab, Ub) {
        const Ab = this.inputs.get(bb);
        if (Ab && this.inputsStamped(Ab, bb, Ub, ab)) return this.withGpuBuffers(Ab);
        const Mb = bb.owner,
          Tb = MT(bb),
          Eb = this.vertexInputs(bb, Mb, Mb.name, ab, Tb);
        return Eb && (Eb.geometry = TT(bb), Eb.instanceLayout = this.drawDefines.instanceLayout(Mb, Ub)), Eb
      }
      inputsStamped(bb, ab, Ub, Ab) {
        return function(bb, ab, Ub, Ab) {
          return bb.program === Ub && bb.geometry === TT(ab) && bb.instanceLayout === Ab
        }(bb, ab, Ab, this.drawDefines.instanceLayout(ab.owner, Ub))
      }
      withGpuBuffers(bb) {
        return tT(bb, this.resources, this.zeroBuffer) ? bb : null
      }
      instanceBuffersFit(bb, ab, Ub) {
        const Ab = sT(ab, Ub, this.resources, this.zeroBuffer);
        if (Ab) {
          const Mb = ab.ends[Ab.index] - ab.offsets[Ab.index] + ab.o3[Ab.index];
          return this.warnOnce(`overrun:${bb}`, `${bb} draws ${Ub} instances from a ${Mb}-byte buffer (${Ab.needed} needed)`), !1
        }
        return !0
      }
      createBinding(bb, ab, Ub, Ab) {
        const Mb = `${ab._colorFormat}|${ab._depthStencilFormat}|${ab._depthCompare}|${ab._sampleCount}`,
          Tb = Ea(this.device, ab);
        if (bb === this.skyLastRenderable) {
          let Ub = null;
          return {
            renderable: bb,
            pipeline: Tb,
            draw: bb => Ub ? this.drawSky(bb, ab, Mb, Ub) : 0,
            update: bb => {
              Ub = bb
            }
          }
        }
        return {
          renderable: bb,
          pipeline: Tb,
          draw: bb => (Ab ? Ab.execute(bb, ab, Mb) : 0) + this.drawList(bb, ab, Mb, Ub)
        }
      }
      drawSky(bb, ab, Ub, Ab) {
        const Mb = this.lists.skyDraws,
          Tb = Mb.length > 0;
        if (Tb) {
          var Eb;
          const Ub = (null !== (Eb = ab._depthCompare) && void 0 !== Eb ? Eb : Ua).startsWith("greater") ? 0 : 1;
          bb.setViewport(0, 0, Ab.targetWidth, Ab.targetHeight, Ub, Ub)
        }
        const Yb = this.drawList(bb, ab, Ub, Mb);
        return Tb && bb.setViewport(0, 0, Ab.targetWidth, Ab.targetHeight, 0, 1), Yb
      }
      drawList(bb, ab, Ub, Ab) {
        let Mb = 0;
        const Tb = this.binder;
        Tb.reset();
        for (const Eb of Ab) {
          const Ab = this.pipelineFor(Eb, ab, Ub);
          Ab && (Tb.bind(bb, Eb, Ab, this.meshSlots.bindGroup, Eb.slotOffset), Eb.indexBuffer ? bb.drawIndexed(Eb.count, Eb.instances, Eb.first, 0, 0) : bb.draw(Eb.count, Eb.instances, Eb.first, 0), Mb++)
        }
        return Mb
      }
      pipelineFor(bb, ab, Ub) {
        var Ab, Mb;
        if (bb.program.failed) return null;
        const Tb = bb.inputs;
        if (Tb.pipeline && Tb.pipelineTarget === Ub) return Tb.pipeline;
        const Eb = `${bb.pipelineKey}|${Ub}`,
          Yb = this.pipelines.get(Eb);
        if (void 0 !== Yb) return Yb && (Tb.pipeline = Yb, Tb.pipelineTarget = Ub), Yb || null;
        this.pipelines.set(Eb, null);
        const {
          program: Bb,
          layout: eb,
          state: vb
        } = bb, Lb = {
          label: `standard-${Bb.id}`,
          layout: Bb.pipelineLayout,
          vertex: {
            module: Bb.vertex,
            entryPoint: "main",
            buffers: eb.buffers
          },
          fragment: Jb({
            module: Bb.fragment,
            entryPoint: "main"
          }, ab, vb.blend, vb.colourWrite),
          depthStencil: ab._depthStencilFormat ? {
            format: ab._depthStencilFormat,
            depthCompare: null !== (Ab = null !== (Mb = vb.depthCompare) && void 0 !== Mb ? Mb : ab._depthCompare) && void 0 !== Ab ? Ab : Ua,
            depthWriteEnabled: vb.depthWrite,
            depthBias: vb.depthBias,
            depthBiasSlopeScale: vb.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: ab._sampleCount
          },
          primitive: {
            topology: vb.topology,
            frontFace: vb.frontFace,
            cullMode: vb.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Lb).then((bb => {
          this.compiling--, this.pipelines.set(Eb, bb)
        }), (bb => {
          this.compiling--, this.reportFailure(Bb, Eb, bb)
        })), null
      }
      forEachSunShadowCaster(bb) {
        const ab = this.caster,
          Ub = (Ub, Ab, Mb) => {
            const Tb = Ub.unit && function(bb) {
              const ab = bb.material.model;
              return null !== ab && (ab.lifeform || ab.item) && ab.castsSunShadow && "triangle-list" === bb.state.topology
            }(Ub) ? MT(Ub.unit) : null;
            if (!Tb) return;
            const Eb = Ub.unit.owner;
            switch (ab.geometry = Tb, ab.skip = Eb.noSunShadowVertices, ab.indexed = null !== Ub.indexBuffer, ab.first = Ub.first, ab.count = Ub.count, ab.lL = Ab, ab.worldAt = Mb, ab.instances = null, ab.instanceCount = 1, ab.thin = !1, bT(Eb)) {
              case "thin": {
                const bb = Eb._thinInstanceDataStorage.matrixData;
                if (!bb) return;
                ab.instances = bb, ab.instanceCount = Math.min(Ub.instances, bb.length / 16), ab.thin = !0;
                break
              }
              case "instanced": {
                const bb = this.resources.batchUploads.get(Eb);
                if (!bb || bb.frame !== this.frame || !this.writeBatchCasters(bb)) return;
                break
              }
            }
            bb(ab)
          };
        for (const Ab of this.lists.opaqueDraws) Ub(Ab, this.meshSlots.data, Ab.slotOffset / 4);
        this.thinBundle.forEachDrawn(Ub)
      }
      writeBatchCasters(bb) {
        const {
          caster: ab
        } = this, Ub = bb.packedMatrices, Ab = bb.count;
        ab.instances = Ub, ab.instanceCount = Ab;
        let Mb = -1;
        for (let Tb = 0; Tb < Ab; Tb++) {
          const ab = WE(bb.packedRowMesh(Tb));
          ab && Mb < 0 ? (this.casterWorlds.length < 16 * Ab && (this.casterWorlds = new Float32Array(Ub.length)), this.casterWorlds.set(Ub.subarray(0, 16 * Tb)), Mb = Tb) : !ab && Mb >= 0 && (this.casterWorlds.set(Ub.subarray(16 * Tb, 16 * Tb + 16), 16 * Mb), Mb++)
        }
        return Mb >= 0 && (ab.instances = this.casterWorlds, ab.instanceCount = Mb), ab.instanceCount > 0
      }
      async reportFailure(bb, ab, Ub) {
        const Ab = [];
        let Mb = !0;
        for (const [Tb, Eb] of [
            ["vertex", bb.vertex],
            ["fragment", bb.fragment]
          ]) {
          const bb = await Eb.getCompilationInfo();
          for (const ab of bb.messages) Mb &&= "error" !== ab.type, Ab.push(`${Tb}:${ab.lineNum}:${ab.linePos} ${ab.type}: ${ab.message}`)
        }
        if (Mb && !bb.packGroup) return this.pipelines.set(ab, !1), console.error(`Lite: pipeline ${ab} failed`, Ub), void CM("mesh", bb.kind, Ub);
        bb.failed || (bb.failed = !0, console.error(`Lite: program ${bb.id} failed`, Ub, Ab.join("\n"), {
          program: bb.program,
          key: bb.key
        }), CM("mesh", bb.kind, Ub, Mb ? null : Ab[0]))
      }
    }

    function WE(bb) {
      var ab, Ub;
      const Ab = null === (ab = bb.YH) || void 0 === ab || null === (Ub = ab.aShaderPackItem) || void 0 === Ub ? void 0 : Ub.x;
      return void 0 !== Ab && 0 !== (Ab & Ba.g)
    }
    var HE = Ub(40810),
      IE = Ub(40816),
      dE = Ub(40822),
      FE = Ub(40779);
    const hE = [0, 3, 1, 4, 2, 5];

    function GE(bb, ab, Ub, Ab, Mb) {
      const Tb = Ub[0].width;
      try {
        return Mb ? function(bb, ab, Ub) {
          const Ab = (0, FE.e)(bb, Ub, Ub, 6);
          for (let Mb = 0; Mb < 6; Mb++)(0, FE.g)(bb, Ab, Mb, ab[hE[Mb]], {
            invertY: !1
          });
          return Ab.texture
        }(bb, Ub, Tb) : function(bb, ab, Ub, Ab) {
          const Mb = bb.createTexture({
            label: "sink-cube",
            size: {
              width: Ub,
              height: Ub,
              depthOrArrayLayers: 6
            },
            format: Ab,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Tb = 0; Tb < 6; Tb++) bb.queue.copyExternalImageToTexture({
            source: ab[hE[Tb]]
          }, {
            texture: Mb,
            origin: {
              x: 0,
              y: 0,
              z: Tb
            }
          }, {
            width: Ub,
            height: Ub
          });
          return Mb
        }(ab, Ub, Tb, 1 === Ab ? "r8unorm" : "rgba8unorm")
      } finally {
        QE(Ub)
      }
    }

    function QE(bb) {
      for (const ab of null !== bb && void 0 !== bb ? bb : []) null === ab || void 0 === ab || ab.close()
    }
    async function qE(bb) {
      const ab = [],
        Ub = [];
      if (await Promise.all(bb.map(((bb, Ab) => (ab[Ab] = null, bb.then((bb => {
          ab[Ab] = bb
        }), (bb => {
          Ub.push(bb)
        })))))), Ub.length > 0) throw QE(ab), Ub[0];
      return ab
    }
    class uE {
      constructor(bb) {
        this.PL = bb, this.starts = [], this.lengths = [], this.used = 0, bb > 0 && (this.starts.push(0), this.lengths.push(bb))
      }
      allocate(bb) {
        const {
          starts: ab,
          lengths: Ub
        } = this;
        for (let Ab = 0; Ab < ab.length; Ab++) {
          if (Ub[Ab] < bb) continue;
          const Mb = ab[Ab];
          return Ub[Ab] === bb ? (ab.splice(Ab, 1), Ub.splice(Ab, 1)) : (ab[Ab] += bb, Ub[Ab] -= bb), this.used += bb, Mb
        }
        return -1
      }
      free(bb, ab) {
        this.used -= ab;
        const Ub = Math.min(bb + ab, this.PL);
        Ub > bb && this.release(bb, Ub - bb)
      }
      grow(bb) {
        const ab = this.PL;
        this.PL = bb, this.release(ab, bb - ab)
      }
      truncate(bb) {
        const {
          starts: ab,
          lengths: Ub
        } = this;
        for (let Ab = ab.length - 1; Ab >= 0 && ab[Ab] + Ub[Ab] > bb; Ab--) ab[Ab] >= bb ? (ab.splice(Ab, 1), Ub.splice(Ab, 1)) : Ub[Ab] = bb - ab[Ab];
        this.PL = bb
      }
      release(bb, ab) {
        const {
          starts: Ub,
          lengths: Ab
        } = this;
        let Mb = 0,
          Tb = Ub.length;
        for (; Mb < Tb;) {
          const ab = Mb + Tb >> 1;
          Ub[ab] < bb ? Mb = ab + 1 : Tb = ab
        }
        const Eb = Mb,
          Yb = Eb > 0 && Ub[Eb - 1] + Ab[Eb - 1] === bb,
          Bb = Eb < Ub.length && bb + ab === Ub[Eb];
        Yb && Bb ? (Ab[Eb - 1] += ab + Ab[Eb], Ub.splice(Eb, 1), Ab.splice(Eb, 1)) : Yb ? Ab[Eb - 1] += ab : Bb ? (Ub[Eb] = bb, Ab[Eb] += ab) : (Ub.splice(Eb, 0, bb), Ab.splice(Eb, 0, ab))
      }
    }
    const rE = 256;
    class KE {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = bb, this.onReplaced = ab, this.mergeGap = Ub, this.gpu = null, this.bytes = void 0, this.cj = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Mb = Math.max(rE, Math.ceil(Ab / rE) * rE);
        this.bytes = new Uint8Array(Mb), this.cj = new uE(Mb / rE)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(bb) {
        return Math.max(1, Math.ceil(bb / rE)) * rE
      }
      allocate(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb;
        const Ab = KE.slotBytes(bb),
          Mb = Ab / rE;
        let Tb = this.cj.allocate(Mb);
        Tb < 0 && (this.grow(this.cj.PL + Mb), Tb = this.cj.allocate(Mb));
        const Eb = Tb * rE;
        return this.growTo(Eb + Math.max(Ub, Ab)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Eb, Eb + Ab), ab && this.bytes.set(new Uint8Array(ab.buffer, ab.byteOffset, Math.min(ab.byteLength, Ab)), Eb), this.markDirty(Eb, Eb + Ab), Eb
      }
      growTo(bb) {
        const ab = Math.ceil(bb / rE);
        ab > this.cj.PL && this.grow(ab)
      }
      free(bb, ab) {
        this.freed.push(bb, ab)
      }
      write(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Ab <= 0) return;
        this.bytes.set(new Uint8Array(ab.buffer, Ub, Ab), bb);
        let Tb = bb + Ab;
        if (Mb) {
          const ab = bb + 4 * Math.ceil(Ab / 4);
          this.bytes.fill(0, Tb, ab), Tb = ab
        }
        this.markDirty(bb, Tb)
      }
      move(bb, ab, Ub) {
        this.bytes.copyWithin(ab, bb, bb + Ub), this.markDirty(ab, ab + Ub)
      }
      flush() {
        for (const ab of this.retired) this.onReplaced(ab), ab.destroy();
        this.retired.length = 0;
        const bb = this.dirtyStarts.length;
        if (bb > 0) {
          const {
            dirtyStarts: ab,
            dirtyEnds: Ub,
            order: Ab
          } = this;
          Ab.length = bb;
          for (let Yb = 0; Yb < bb; Yb++) Ab[Yb] = Yb;
          bb > 1 && Ab.sort(((bb, Ub) => ab[bb] - ab[Ub]));
          const Mb = this.mergeGap;
          let Tb = ab[Ab[0]],
            Eb = Ub[Ab[0]];
          for (let Yb = 1; Yb < bb; Yb++) {
            const bb = Ab[Yb];
            ab[bb] - Eb <= Mb ? Eb = Math.max(Eb, Ub[bb]) : (this.send(Tb, Eb), Tb = ab[bb], Eb = Ub[bb])
          }
          this.send(Tb, Eb), ab.length = 0, Ub.length = 0
        }
        this.holding = !1
      }
      PD() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const bb = this.freed;
        for (let ab = 0; ab < bb.length; ab += 2) this.cj.free(bb[ab] / rE, bb[ab + 1] / rE);
        bb.length = 0
      }
      send(bb, ab) {
        this.device.queue.writeBuffer(this.gpu, bb, this.bytes.buffer, bb, ab - bb);
        for (const Ub of this.replaced) {
          const Ab = Math.min(ab, Ub.size);
          Ab > bb && this.device.queue.writeBuffer(Ub, bb, this.bytes.buffer, bb, Ab - bb)
        }
      }
      markDirty(bb, ab) {
        bb &= -4, ab = ab + 3 & -4, this.holding ? (this.dirtyStarts.push(bb), this.dirtyEnds.push(ab)) : this.send(bb, ab)
      }
      grow(bb) {
        const ab = this.cj.PL,
          Ub = Math.max(2 * ab, bb),
          Ab = new Uint8Array(Ub * rE);
        Ab.set(this.bytes);
        const Mb = this.gpu;
        this.gpu = this.createGpu(Ab.byteLength), this.bytes = Ab, this.cj.grow(Ub), Mb && (this.replaced.push(Mb), this.onReplaced(Mb)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, ab * rE)
      }
      createGpu(bb) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: bb,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function oE(bb) {
      return Array.isArray(bb) ? new Float32Array(bb) : bb
    }

    function lE(bb, ab, Ub, Ab, Mb) {
      const Tb = IM(Mb),
        Eb = Math.min(Mb, Ab.byteLength);
      if (Tb === Eb && Ab.byteOffset % 4 === 0) return void bb.queue.writeBuffer(ab, Ub, Ab.buffer, Ab.byteOffset, Tb);
      const Yb = new Uint8Array(Tb);
      Yb.set(new Uint8Array(Ab.buffer, Ab.byteOffset, Eb)), bb.queue.writeBuffer(ab, Ub, Yb)
    }

    function tE(bb, ab, Ub) {
      const Ab = "linear",
        Mb = "nearest";
      let Tb = Mb,
        Eb = Mb,
        Yb = "nearest",
        Bb = !ab;
      switch (bb) {
        case 11:
          Tb = Ab, Eb = Ab;
          break;
        case 3:
          Tb = Ab, Eb = Ab, Yb = ab ? "linear" : "nearest";
          break;
        case 8:
          Yb = ab ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Eb = Ab;
          break;
        case 6:
          Eb = Ab, Yb = ab ? "linear" : "nearest";
          break;
        case 7:
          Eb = Ab, Bb = !0;
          break;
        case 9:
          Tb = Ab;
          break;
        case 10:
          Tb = Ab, Yb = ab ? "linear" : "nearest";
          break;
        case 2:
          Tb = Ab, Eb = Ab, Ub > 1 ? (Yb = "linear", Bb = !1) : Bb = !0;
          break;
        case 12:
          Tb = Ab, Bb = !0;
          break;
        default:
          Bb = !0
      }
      return Ub > 1 && !Bb ? {
        magFilter: Ab,
        minFilter: Ab,
        mipmapFilter: "linear",
        maxAnisotropy: Ub
      } : {
        magFilter: Tb,
        minFilter: Eb,
        mipmapFilter: Yb,
        ...Bb ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function wE(bb) {
      return 0 === bb ? "clamp-to-edge" : 2 === bb ? "mirror-repeat" : "repeat"
    }
    class sE {
      constructor(bb, ab) {
        let {
          vertexArena: Ub = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = bb, this.device = ab, this.buffers = new WeakMap, this.NJ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = Ub ? new KE(ab, (bb => {
          var ab;
          null === (ab = this.onDestroy) || void 0 === ab || ab.call(this, bb), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var bb;
        null === (bb = this.arena) || void 0 === bb || bb.flush()
      }
      endUploadFrame() {
        var bb;
        null === (bb = this.arena) || void 0 === bb || bb.PD()
      }
      vertexBufferCreated(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ub ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(bb);
        const Mb = oE(ab);
        bb.PL = Mb.byteLength, this.buffers.set(bb, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: Ub && null !== this.arena,
          pending: Mb,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Ab
        })
      }
      vertexBufferUpdated(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        const Mb = this.buffers.get(bb);
        if (!Mb) return;
        const Tb = oE(ab),
          Eb = void 0 === Ab ? Tb.byteLength : Math.min(Ab, Tb.byteLength);
        this.update(Mb, Tb, Ub, Eb)
      }
      vertexBufferFloatsUpdated(bb, ab, Ub, Ab) {
        const Mb = this.buffers.get(bb);
        if (!Mb) return;
        const Tb = Ub * Float32Array.BYTES_PER_ELEMENT,
          Eb = (Ab - Ub) * Float32Array.BYTES_PER_ELEMENT;
        Mb.slot >= 0 && Eb > 0 && Tb + Eb <= Mb.size ? this.writeSlot(Mb, Tb, ab, ab.byteOffset + Tb, Eb, !1) : Mb.gpu && Eb > 0 && Tb + Eb <= Mb.gpu.size ? this.device.queue.writeBuffer(Mb.gpu, Tb, ab.buffer, ab.byteOffset + Tb, Eb) : this.update(Mb, ab.subarray(Ub, Ab), Tb, Eb)
      }
      indexBufferCreated(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(bb);
        const Ab = function(bb) {
          if (bb instanceof Uint16Array || bb instanceof Uint32Array) return bb;
          for (let ab = 0; ab < bb.length; ab++)
            if (bb[ab] >= 65535) return new Uint32Array(bb);
          return new Uint16Array(bb)
        }(ab);
        bb.is32Bits = 4 === Ab.BYTES_PER_ELEMENT, bb.PL = Ab.byteLength, this.buffers.set(bb, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Ab,
          ownsPending: Ab !== ab,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Ub
        })
      }
      bufferDeleted(bb) {
        const ab = this.buffers.get(bb);
        null !== ab && void 0 !== ab && ab.gpu ? (this.destroyBuffer(ab.gpu), this.gpuBuffersVersion++) : ab && ab.slot >= 0 && (this.arena.free(ab.slot, ab.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(bb)
      }
      update(bb, ab, Ub, Ab) {
        if (bb.slot >= 0) this.updateSlot(bb, ab, Ub, Ab);
        else if (bb.gpu) {
          if (Ub + IM(Ab) > bb.gpu.size) {
            const ab = this.device.createBuffer({
                label: bb.label,
                size: IM(Math.max(2 * bb.gpu.size, Ub + Ab)),
                usage: bb.usage | GPUBufferUsage.COPY_SRC
              }),
              Mb = this.device.createCommandEncoder();
            Mb.copyBufferToBuffer(bb.gpu, 0, ab, 0, bb.gpu.size), this.device.queue.submit([Mb.finish()]), this.destroyBuffer(bb.gpu), this.gpuBuffersVersion++, bb.gpu = ab
          }
          lE(this.device, bb.gpu, Ub, ab, Ab)
        } else {
          const Tb = new Uint8Array(ab.buffer, ab.byteOffset, Ab),
            Eb = bb.pending;
          if (Eb && bb.ownsPending && Ub + Ab <= Eb.byteLength) new Uint8Array(Eb.buffer, Eb.byteOffset, Eb.byteLength).set(Tb, Ub);
          else if (Eb && 0 === Ub && Ab === Eb.byteLength && ab.byteLength === Ab) bb.pending = ab, bb.ownsPending = !1;
          else {
            var Mb;
            const ab = new Uint8Array(Math.max(null !== (Mb = null === Eb || void 0 === Eb ? void 0 : Eb.byteLength) && void 0 !== Mb ? Mb : 0, Ub + Ab));
            Eb && ab.set(new Uint8Array(Eb.buffer, Eb.byteOffset, Eb.byteLength)), ab.set(Tb, Ub), bb.pending = ab, bb.ownsPending = !0
          }
        }
      }
      updateSlot(bb, ab, Ub, Ab) {
        const Mb = this.arena;
        Ub + IM(Ab) > bb.size && (bb.size = IM(Math.max(2 * bb.size, Ub + Ab)), Mb.growTo(bb.slot + bb.size), this.gpuBuffersVersion++), 0 === Ab ? this.writeSlot(bb, Ub, CE, 0, 4, !1) : this.writeSlot(bb, Ub, ab, ab.byteOffset, Ab, !0)
      }
      writeSlot(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = ab + (Tb ? IM(Mb) : Mb);
        Eb > bb.slotBytes && this.moveSlot(bb, Eb), this.arena.write(bb.slot + ab, Ub, Ab, Mb, Tb)
      }
      moveSlot(bb, ab) {
        const Ub = this.arena,
          Ab = KE.slotBytes(Math.max(ab, Math.min(2 * bb.slotBytes, bb.size))),
          Mb = Ub.allocate(Ab, null, bb.size);
        Ub.move(bb.slot, Mb, bb.slotBytes), Ub.free(bb.slot, bb.slotBytes), bb.slot = Mb, bb.slotBytes = Ab, this.gpuBuffersVersion++
      }
      cover(bb, ab) {
        const Ub = this.buffers.get(bb);
        if (!Ub || Ub.slot < 0) return !1;
        const Ab = Math.min(ab, Ub.size);
        return !(Ab <= Ub.slotBytes) && (this.moveSlot(Ub, Ab), !0)
      }
      destroyBuffer(bb) {
        var ab;
        null === (ab = this.onDestroy) || void 0 === ab || ab.call(this, bb), bb.destroy()
      }
      gpuBuffer(bb) {
        const ab = this.buffers.get(bb);
        if (!ab) return null;
        if (ab.slot >= 0) return this.arena.buffer;
        if (ab.arena && ab.pending) {
          const bb = ab.pending,
            Ub = this.arena;
          return ab.size = IM(bb.byteLength), ab.slotBytes = KE.slotBytes(function(bb) {
            const ab = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength);
            let Ub = ab.length;
            if (bb.byteOffset % 4 === 0) {
              for (; Ub % 4 !== 0 && 0 === ab[Ub - 1];) Ub--;
              if (Ub % 4 === 0) {
                const ab = new Uint32Array(bb.buffer, bb.byteOffset, Ub / 4);
                let Ab = ab.length;
                for (; Ab > 0 && 0 === ab[Ab - 1];) Ab--;
                Ub = 4 * Ab
              }
            }
            for (; Ub > 0 && 0 === ab[Ub - 1];) Ub--;
            return Ub
          }(bb)), ab.slot = Ub.allocate(ab.slotBytes, bb, ab.size), ab.pending = null, Ub.buffer
        }
        if (!ab.gpu && ab.pending) {
          const bb = ab.pending;
          ab.gpu = this.device.createBuffer({
            label: ab.label,
            size: IM(bb.byteLength),
            usage: ab.usage
          }), lE(this.device, ab.gpu, 0, bb, bb.byteLength), ab.pending = null
        }
        return ab.gpu
      }
      gpuOffset(bb) {
        var ab, Ub;
        const Ab = null !== (ab = null === (Ub = this.buffers.get(bb)) || void 0 === Ub ? void 0 : Ub.slot) && void 0 !== ab ? ab : -1;
        return Ab < 0 ? 0 : Ab
      }
      gpuEnd(bb) {
        var ab, Ub;
        const Ab = this.buffers.get(bb);
        return Ab ? Ab.slot >= 0 ? Ab.slot + Ab.size : null !== (ab = null === (Ub = Ab.gpu) || void 0 === Ub ? void 0 : Ub.size) && void 0 !== ab ? ab : 0 : 0
      }
      vertexInput(bb, ab, Ub) {
        var Ab, Mb, Tb, Eb;
        return null !== (Ab = null !== (Mb = Ub && this.modelInput(Ub, ab)) && void 0 !== Mb ? Mb : null === (Tb = null !== (Eb = this.NJ.get(bb)) && void 0 !== Eb ? Eb : this.batchUploads.get(bb)) || void 0 === Tb ? void 0 : Tb.inputs[ab]) && void 0 !== Ab ? Ab : null
      }
      modelInput(bb, ab) {
        const Ub = this.geometrySlot(bb);
        let Ab = Ub.inputs.get(ab);
        if (void 0 === Ab) {
          const Mb = bb.vertexAttributes.find((bb => bb.kind === ab));
          Ab = Mb ? new Cb(this.modelKey(Ub, Mb.data, !1), Mb.offset, Mb.stride, Mb.components, !1, Mb.glType, Mb.isNormalized) : null, Ub.inputs.set(ab, Ab)
        }
        return Ab
      }
      modelIndex(bb) {
        return bb.indexData && this.modelKey(this.geometrySlot(bb), bb.indexData, !0)
      }
      geometrySlot(bb) {
        let ab = bb.gpu[Wb.g.lite];
        if (!ab) {
          const Ub = new Map,
            Ab = () => {
              for (const bb of Ub.values()) this.bufferDeleted(bb)
            },
            Mb = bb => {
              const ab = Ub.get(bb);
              ab && this.vertexBufferUpdated(ab, bb)
            };
          ab = {
            keys: Ub,
            inputs: new Map,
            release: Ab,
            updated: Mb
          }, bb.gpu[Wb.g.lite] = ab
        }
        return ab
      }
      modelKey(bb, ab, Ub) {
        let Ab = bb.keys.get(ab);
        if (!Ab) {
          if (Ub) {
            const bb = {
              PL: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(bb, ab, "model-indices"), Ab = bb
          } else Ab = {
            PL: 0
          }, this.vertexBufferCreated(Ab, ab, !1, "model-vertices");
          bb.keys.set(ab, Ab)
        }
        return Ab
      }
      indexFormat(bb) {
        return bb.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(bb, ab) {
        --bb.refs > 0 || (this.releaseTexture(bb), QE(bb.images), null !== ab && this.textures.delete(ab))
      }
      load(bb, ab) {
        const Ub = ab.decoded = async function(bb) {
          if ("cube" === bb.kind) return async function(bb) {
            if (6 !== bb.length) throw new Error(`${bb.length} files where six faces were expected`);
            const ab = await qE(bb.map((bb => qM(bb)))),
              Ub = ab[0].width;
            return qE(ab.map((async bb => {
              if (bb.width === Ub && bb.height === Ub) return bb;
              try {
                return await createImageBitmap(bb, {
                  ...GM,
                  resizeWidth: Ub,
                  resizeHeight: Ub
                })
              } finally {
                bb.close()
              }
            })))
          }(bb.files);
          if ("data" === bb.kind && bb.data) return [await createImageBitmap(new Blob([bb.data]), GM)];
          return [await qM(gE(bb))]
        }(bb.source).then((bb => {
          0 === ab.refs ? QE(bb) : ab.images = bb
        }));
        this.track(ab, gE(bb.source), Ub, (() => {
          ab.wanted && !ab.failed && ab.refs > 0 && this.upload(bb, ab)
        }))
      }
      canvasUpdated(bb, ab, Ub) {
        const {
          state: Ab
        } = this.textureSlot(bb);
        Ab.dynamicSource = {
          invertY: ab,
          premultiplied: Ub
        }, Ab.dynamic && this.pushDynamic(bb.source, Ab)
      }
      async atlasArray(bb, ab, Ub) {
        const Ab = await KM(this.device, bb, ab, Ub);
        if (!this.atlasBindings.has(Ab)) {
          const bb = (0, HE.b)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Ab, {
            view: Ab.texture.createView({
              dimension: "2d-array"
            }),
            sampler: bb
          })
        }
        return Ab
      }
      boundTexture(bb) {
        const ab = this.atlasBindings.get(bb);
        if (ab) return ab;
        const Ub = bb;
        if (Ub.released) return null;
        const Ab = this.textureSlot(Ub, !0),
          {
            state: Mb
          } = Ab;
        if (!Mb.view && (Mb.wanted = !0, Mb.loading || Mb.failed || this.upload(Ub, Mb), !Mb.view)) return null;
        const Tb = this.chosenSampler(Ub, Ab),
          Eb = Ab.bound;
        return Eb && Eb.view === Mb.view && Eb.sampler === Tb ? Eb : (Ab.bound = {
          view: Mb.view,
          sampler: Tb
        }, Ab.bound)
      }
      textureLoaded(bb) {
        var ab, Ub;
        return null !== (ab = null === (Ub = bb.gpu[Wb.g.lite]) || void 0 === Ub ? void 0 : Ub.state.decoded) && void 0 !== ab ? ab : null
      }
      textureFailed(bb) {
        var ab;
        return !0 === (null === (ab = bb.gpu[Wb.g.lite]) || void 0 === ab ? void 0 : ab.state.failed)
      }
      chosenSampler(bb, ab) {
        const {
          samplingMode: Ub,
          wrapU: Ab,
          wrapV: Mb
        } = bb.sampler, Tb = ab.state.hasMips, Eb = function(bb, ab) {
          const {
            bilinear: Ub,
            trilinear: Ab
          } = Wb.j;
          return !ab && bb !== Ub || 11 !== bb && bb !== Ab && bb !== Ub ? 1 : 4
        }(Ub, Tb), Yb = ab.sampler;
        if (Yb && Yb.samplingMode === Ub && Yb.hasMips === Tb && Yb.anisotropy === Eb && Yb.wrapU === Ab && Yb.wrapV === Mb) return Yb.sampler;
        const Bb = this.samplerFor(Ub, Tb, Eb, Ab, Mb);
        return ab.sampler = {
          samplingMode: Ub,
          hasMips: Tb,
          anisotropy: Eb,
          wrapU: Ab,
          wrapV: Mb,
          sampler: Bb
        }, Bb
      }
      releaseTexture(bb) {
        var ab, Ub;
        bb.view && (null === (Ub = this.onDestroy) || void 0 === Ub || Ub.call(this, bb.view));
        null === (ab = bb.destroy) || void 0 === ab || ab.call(bb)
      }
      textureSlot(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = bb.gpu[Wb.g.lite];
        if (Ub) return Ub;
        const Ab = function(bb) {
          let {
            source: ab,
            sampler: Ub
          } = bb;
          return "canvas" === ab.kind ? null : `${ab.kind}|${gE(ab)}|${Ub.noMipmap}|${Ub.samplingMode}|${Ub.invertY}`
        }(bb);
        let Mb = null === Ab ? void 0 : this.textures.get(Ab);
        Mb || (Mb = {
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
        }, null !== Ab && (this.textures.set(Ab, Mb), this.load(bb, Mb), ab && this.firstBindDecodes++)), Mb.refs++;
        const Tb = Mb,
          Eb = {
            state: Mb,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(Tb, Ab)
            }
          };
        return bb.gpu[Wb.g.lite] = Eb, Eb
      }
      samplerFor(bb, ab, Ub, Ab, Mb) {
        const Tb = `${bb}|${ab}|${Ub}|${Ab}|${Mb}`;
        let Eb = this.samplers.get(Tb);
        if (!Eb) {
          const Yb = {
            ...tE(bb, ab, Ub),
            addressModeU: wE(Ab),
            addressModeV: wE(Mb)
          };
          Eb = (0, HE.b)(this.engine, Yb), this.samplers.set(Tb, Eb)
        }
        return Eb
      }
      upload(bb, ab) {
        const {
          source: Ub,
          sampler: Ab
        } = bb;
        ab.hasMips = !Ab.noMipmap, "canvas" === Ub.kind ? this.createDynamic(Ub, ab) : "cube" === Ub.kind ? this.uploadCube(ab, Ub.luminance) : this.uploadImage(ab, !0 === Ab.invertY, Ub.url)
      }
      uploadImage(bb, ab, Ub) {
        const [Ab] = bb.images;
        bb.images = null;
        const Mb = (0, IE.e)(this.engine, Ab, {
          mipMaps: bb.hasMips,
          invertY: ab,
          srgb: !1
        }).then((ab => {
          Ab.close(), 0 !== bb.refs ? (bb.view = ab.view, bb.destroy = ab.texture.destroy.bind(ab.texture)) : ab.texture.destroy()
        }));
        this.track(bb, Ub, Mb)
      }
      track(bb, ab, Ub, Ab) {
        bb.loading = !0, this.pending++, Ub.catch((Ub => {
          bb.failed = !0, console.warn(`Lite: could not load texture ${QM(ab)}`, Ub)
        })).finally((() => {
          bb.loading = !1, this.pending--, null === Ab || void 0 === Ab || Ab()
        }))
      }
      uploadCube(bb, ab) {
        const Ub = bb.images;
        bb.images = null;
        const Ab = GE(this.engine, this.device, Ub, (0, Wb.C)(ab), bb.hasMips);
        bb.view = Ab.createView({
          dimension: "cube"
        }), bb.destroy = () => {
          Ab.destroy()
        }
      }
      createDynamic(bb, ab) {
        const {
          canvas: Ub
        } = bb, Ab = (0, dE.b)(this.engine, Math.max(1, Ub.width), Math.max(1, Ub.height), {
          mipMaps: ab.hasMips,
          srgb: !1
        });
        ab.dynamic = Ab, ab.view = Ab.view, ab.destroy = () => {
          Ab.texture.destroy()
        }, this.pushDynamic(bb, ab)
      }
      pushDynamic(bb, ab) {
        const Ub = ab.dynamicSource,
          Ab = ab.dynamic,
          {
            canvas: Mb
          } = bb;
        if (Ub && Ab && 0 !== Mb.width && 0 !== Mb.height) return Mb.width !== Ab.width || Mb.height !== Ab.height ? (this.releaseTexture(ab), ab.dynamic = null, ab.view = null, void this.createDynamic(bb, ab)) : void(0, dE.e)(this.engine, Ab, Mb, {
          invertY: Ub.invertY,
          premultiplyAlpha: Ub.premultiplied
        })
      }
    }

    function gE(bb) {
      return "cube" === bb.kind ? bb.rootUrl : "canvas" === bb.kind ? "canvas" : bb.url
    }
    const CE = new Uint8Array(4);

    function VE(bb) {
      const ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      bb._colorAttachment.storeOp = bb._targetSignature._sampleCount > 1 ? ab : "store";
      const Ub = bb._renderPassDescriptor.depthStencilAttachment;
      Ub && (Ub.depthStoreOp = ab, Ub.stencilStoreOp && (Ub.stencilStoreOp = ab))
    }
    var OE = Ub(37122),
      cE = Ub(37175),
      JE = Ub(36813),
      nE = Ub(38821);
    const SE = new Float64Array([1, 1, 1]),
      bY = new Float64Array([0, 1, 0]),
      aY = new Float64Array(4),
      UY = new Float32Array(16),
      AY = new Float64Array(3),
      MY = new Float64Array(4);

    function TY(bb, ab, Ub) {
      bb.fov = ab.fov, bb.near = ab.near, bb.far = ab.far, bb.renderWidth = Ub.renderWidth, bb.renderHeight = Ub.renderHeight, (0, JE.s)(ab.holderRotation, 0, aY, 0), (0, JE.d)(SE, 0, aY, 0, ab.holderPosition, 0, UY);
      const Ab = ab.rC;
      AY[0] = Ab[0], AY[1] = Ab[1], AY[2] = Ab[2] + 1;
      const Mb = bb.viewMatrix;
      (0, JE.i)(Ab, AY, bY, Mb), (0, JE.h)(Mb, 0, Mb), (0, JE.l)(Mb, UY, 0, Mb), (0, JE.h)(Mb, 0, Mb);
      const Tb = bb.worldMatrix;
      (0, JE.h)(Mb, 0, Tb), bb.eye[0] = Tb[12], bb.eye[1] = Tb[13], bb.eye[2] = Tb[14], MY[0] = bb.fov, MY[1] = bb.renderWidth / bb.renderHeight, MY[2] = bb.near, MY[3] = bb.far, (0, JE.p)(MY, bb.projectionMatrix), (0, JE.l)(Mb, bb.projectionMatrix, 0, bb.viewProjectionMatrix), (0, nE.f)(bb.viewProjectionMatrix, bb.frustum)
    }

    function EY(bb, ab) {
      let Ub = bb.frustumPlanes;
      Ub || (Ub = bb.frustumPlanes = Array.from({
        length: 6
      }, (() => new OE.b(0, 0, 0, 0))));
      for (let Ab = 0; Ab < 6; Ab++) {
        const bb = Ub[Ab].normal;
        bb._x = ab[4 * Ab], bb._y = ab[4 * Ab + 1], bb._z = ab[4 * Ab + 2], bb._isDirty = !0, Ub[Ab].d = ab[4 * Ab + 3]
      }
    }

    function YY(bb, ab) {
      const Ub = ab.clearColor;
      bb.clearColour[0] = Ub.r, bb.clearColour[1] = Ub.g, bb.clearColour[2] = Ub.b, bb.clearColour[3] = Ub.a;
      const Ab = ab.ambientColor;
      bb.ambientColour[0] = Ab.r, bb.ambientColour[1] = Ab.g, bb.ambientColour[2] = Ab.b, bb.animationRatio = ab.animationRatio, bb.frameId = ab.frameId, bb.version++
    }

    function BY(bb) {
      const ab = bb.model.view;
      return ab.animTick = (0, cE.f)(), ab.timeMs = performance.now(), YY(ab, bb.ZR), bb.model.update(ab.frameId), ab
    }

    function eY(bb) {
      const ab = bb.ZR,
        {
          view: Ub,
          uC: Ab
        } = bb.model;
      return TY(Ub, Ab, ab.vj()), ab.onBeforeRenderObservable.notifyObservers(ab), EY(ab, Ub.frustum), ab.onBeforeCameraRenderObservable.notifyObservers(ab.activeCamera), BY(bb)
    }
    var vY = Ub(36779),
      LY = Ub(36873),
      PY = Ub(37158);

    function XY(bb) {
      var ab, Ub;
      const Ab = (0, pb.W)(bb);
      if (!Ab || Ab.diffuseTexture && (0, PY.h)(bb)) return null;
      const Mb = null === (ab = (0, pb.w)(Ab, fb.g.name)) || void 0 === ab ? void 0 : ab.state,
        Tb = null === (Ub = (0, pb.w)(Ab, gT.d.name)) || void 0 === Ub ? void 0 : Ub.state,
        Eb = new Float32Array(16);
      return function(bb, ab, Ub, Ab) {
        var Mb, Tb;
        const Eb = PA;
        Ab.set(bb.diffuseColor, Eb.diffuse), Ab[Eb.diffuse + 3] = bb.alpha, Ab.set(bb.ambientColor, Eb.ambientAndCutoff), Ab[Eb.ambientAndCutoff + 3] = bb.alphaCutOff, Ab.set(bb.emissiveColor, Eb.emissiveAndLevel), Ab[Eb.emissiveAndLevel + 3] = null !== (Mb = null === (Tb = bb.diffuseTexture) || void 0 === Tb ? void 0 : Tb.level) && void 0 !== Mb ? Mb : 1, null !== ab && void 0 !== ab && ab.animDataPerTex ? (Ab[Eb.anim + 1] = cE.c, Ab[Eb.anim + 2] = ab.animDataPerTex.length / 3 - 1) : Ub && (Ab[Eb.anim + 1] = Ub.numAnimStates, Ab[Eb.anim + 2] = Ub.ticksPerAnimState)
      }(Ab, Mb, Tb, Eb), {
        model: Ab,
        atlas: Mb,
        texture: Mb ? "atlas" : Ab.diffuseTexture ? "single" : "none",
        animated: Mb ? !!Mb.animDataPerTex : !!Tb,
        liquid: (0, PY.k)(bb),
        customRenderMat: (0, PY.h)(bb),
        uniformData: Eb
      }
    }
    var jY = Ub(36766);
    class RY {
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
    class kY {
      constructor(bb, ab) {
        this.arena = bb, this.cj = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.cj = new uE(ab);
        const Ub = new RY(ab);
        Ub.buffer = this.createBuffer(Ub, !1), this.backings.push(Ub), this.refresh()
      }
      get PL() {
        return this.cj.PL
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
        for (const ab of this.backings) bb += ab.units * (this.arena.unitBytes + (ab.twin ? this.arena.twinUnitBytes : 0));
        return bb
      }
      holds(bb) {
        return bb.start + bb.length <= this.usable
      }
      lost(bb) {
        return this.dropped || bb.start + bb.length > this.PL
      }
      write(bb, ab) {
        const {
          device: Ub,
          unitBytes: Ab
        } = this.arena;
        for (const Mb of this.backings) {
          const Tb = (Mb.units - bb.start) * Ab;
          Tb > 0 && Ub.queue.writeBuffer(Mb.buffer, bb.start * Ab, ab, 0, Math.min(ab.byteLength, Tb))
        }
      }
      writeLight(bb, ab) {
        const {
          device: Ub,
          twinUnitBytes: Ab,
          verticesPerUnit: Mb
        } = this.arena, {
          light: Tb,
          count: Eb
        } = this.arena.twinLight(ab, Math.min(ab.length, bb.length * Mb));
        for (const Yb of this.backings) {
          Yb.twin || (Yb.twin = this.createBuffer(Yb, !0));
          const ab = (Yb.units - bb.start) * Mb;
          ab > 0 && Ub.queue.writeBuffer(Yb.twin, bb.start * Ab, Tb, 0, Math.min(Eb, ab))
        }
      }
      grow(bb) {
        this.arena.assertNotDrawing();
        const {
          device: ab,
          unitBytes: Ub,
          label: Ab
        } = this.arena, Mb = this.backings[this.backings.length - 1], Tb = new RY(bb), Eb = ab.createCommandEncoder({
          label: `${Ab}-grow`
        });
        Tb.buffer = this.createBuffer(Tb, !1), Eb.copyBufferToBuffer(Mb.buffer, 0, Tb.buffer, 0, Mb.units * Ub), Mb.twin && (Tb.twin = this.createBuffer(Tb, !0), Eb.copyBufferToBuffer(Mb.twin, 0, Tb.twin, 0, Mb.units * this.arena.twinUnitBytes)), ab.queue.submit([Eb.finish()]), this.backings.push(Tb), this.cj.grow(bb)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const bb of this.backings) bb.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(bb, ab) {
        const {
          device: Ub,
          unitBytes: Ab,
          twinUnitBytes: Mb,
          usage: Tb,
          label: Eb
        } = this.arena;
        Ub.pushErrorScope("out-of-memory");
        const Yb = Ub.createBuffer({
          label: ab ? `${Eb}-light` : Eb,
          size: bb.units * (ab ? Mb : Ab),
          usage: (ab ? this.arena.twinUsage : Tb) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, Ub.popErrorScope().then((Ub => {
          this.arena.awaitingVerdict--, this.settle(bb, ab, !Ub, !0)
        }), (Ub => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Eb} buffer, taken as failed: ${String(Ub)}`), this.settle(bb, ab, !1, !1)
        })), Yb
      }
      settle(bb, ab, Ub, Ab) {
        const Mb = this.backings.indexOf(bb);
        if (!(this.dropped || Mb < 0)) {
          if (!Ub) {
            if (Ab && this.arena.ranOutOfMemory(bb.units, bb.units * (ab ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Mb) return void this.drop();
            for (const bb of this.backings.splice(Mb)) bb.destroy();
            return this.cj.truncate(this.backings[Mb - 1].units), this.growable = !1, void this.promote()
          }
          ab ? bb.twinReady = !0 : (bb.bufferReady = !0, this.arena.allocatedBuffer(bb.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: bb
        } = this;
        let ab = 0;
        for (; ab + 1 < bb.length && bb[ab].ready && bb[ab + 1].ready;) ab++;
        for (const Ub of bb.splice(0, ab)) Ub.destroy();
        this.refresh()
      }
      refresh() {
        const bb = this.backings[0];
        this.buffer = bb.buffer, this.twin = bb.twinReady ? bb.twin : null, this.usable = !this.dropped && bb.bufferReady ? bb.units : 0
      }
    }
    class yY {
      constructor(bb, ab, Ub, Ab) {
        let {
          verticesPerUnit: Mb = 1,
          twinUsage: Tb = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = bb, this.unitBytes = ab, this.usage = Ub, this.label = Ab, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, ea.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), ab % 4 !== 0) throw new Error(`${Ab}: ${ab}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Mb, this.twinUsage = Tb, this.twinValueBytes = Mb > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Mb
      }
      twinLight(bb, ab) {
        if (4 === this.twinValueBytes) return this.widened.length < ab && (this.widened = new Float32Array(Math.max(ab, 2 * this.widened.length))), this.widened.set(bb.subarray(0, ab)), {
          light: this.widened,
          count: ab
        };
        const Ub = ab % this.verticesPerUnit;
        if (0 === Ub) return {
          light: bb,
          count: ab
        };
        const Ab = ab - Ub + this.verticesPerUnit;
        return this.padded.length < Ab && (this.padded = new Uint16Array(Math.max(Ab, 2 * this.padded.length))), this.padded.set(bb.subarray(0, ab)), this.padded.fill(0, ab, Ab), {
          light: this.padded,
          count: Ab
        }
      }
      allocate(bb) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), bb > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Mb of this.pages) {
          const ab = Mb.cj.allocate(bb);
          if (ab >= 0) return {
            page: Mb,
            start: ab,
            length: bb
          }
        }
        const ab = this.pages[this.pages.length - 1];
        if (null !== ab && void 0 !== ab && ab.canGrow) {
          const Ub = Math.min(this.ceiling, Math.max(2 * ab.PL, ab.PL + bb));
          if (Ub - ab.PL >= bb) return ab.grow(Ub), {
            page: ab,
            start: ab.cj.allocate(bb),
            length: bb
          }
        }
        ab && ab !== this.pages[0] && 0 === ab.cj.used && ab.drop();
        const Ub = Math.floor(1048576 / this.unitBytes),
          Ab = new kY(this, Math.max(bb, Math.min(this.ceiling, Ub)));
        return this.pages.push(Ab), {
          page: Ab,
          start: Ab.cj.allocate(bb),
          length: bb
        }
      }
      free(bb) {
        this.assertNotDrawing();
        const {
          page: ab
        } = bb;
        ab.cj.free(bb.start, bb.length), 0 === ab.cj.used && ab !== this.pages[0] && ab !== this.pages[this.pages.length - 1] && ab.drop()
      }
      remove(bb) {
        const ab = this.pages.indexOf(bb);
        ab >= 0 && this.pages.splice(ab, 1)
      }
      ranOutOfMemory(bb, ab) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${ab}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, bb), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, bb) / 2));
        const Ub = performance.now();
        Ub >= this.shortageUntil && (this.forgetFailedAt = Ub + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = Ub + 1e3)
      }
      allocatedBuffer(bb) {
        bb >= this.failed && (this.failed = 1 / 0);
        const ab = Math.min(2 * bb, Math.floor((bb + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, ab))
      }
      stats() {
        let bb = 0,
          ab = 0,
          Ub = 0,
          Ab = 0;
        for (const Mb of this.pages) bb += Mb.PL, ab += Mb.cj.used, Ub += Mb.hasTwin ? Mb.PL * this.twinUnitBytes : 0, Ab += Mb.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: bb * this.unitBytes,
          usedBytes: ab * this.unitBytes,
          twinBytes: Ub,
          allocatedBytes: Ab
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: bb,
          maxStorageBufferBindingSize: ab
        } = this.device.limits;
        let Ub = Math.floor(Math.min(67108864, bb) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (Ub = Math.min(Ub, Math.floor(ab / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (Ub = Math.min(Ub, Math.floor(ab / this.twinUnitBytes))), Ub
      }
    }
    const ZY = 16383;

    function DY(bb, ab, Ub, Ab, Mb) {
      let Tb = 0;
      for (let Eb = Ub; Eb < Ab; Eb += ZY) bb.drawIndexed(6 * Math.min(ZY, Ab - Eb), 1, 0, ab + 4 * Eb, Mb), Tb++;
      return Tb
    }
    class zY {
      constructor(bb, ab) {
        this.recordsGroup = ab, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const Ub = ma.i.strideWithoutAtlas;
        this.vertexArena = new yY(bb, Ub, GPUBufferUsage.VERTEX, `terrain-vertices-${Ub}`), this.quadArena = new yY(bb, LY.c, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Ab = (0, pa.e)(new Uint16Array(98298), ZY);
        this.quadPattern = bb.createBuffer({
          label: "terrain-quad-pattern",
          size: Ab.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), bb.queue.writeBuffer(this.quadPattern, 0, Ab)
      }
      set(bb, ab) {
        const Ub = ab.packedVertices,
          Ab = Ub ? this.quadArena.allocate(bb.faceCount) : this.vertexArena.allocate(bb.vertexCount);
        if (!Ab) return !1;
        bb.vertices = Ab;
        const Mb = Ub ? new Uint8Array(Ub.buffer, Ub.byteOffset, Ub.byteLength) : new Uint8Array(ab.vertices);
        return Ab.page.write(Ab, Mb), !0
      }
      setLight(bb, ab) {
        const {
          vertices: Ub
        } = bb;
        Ub && 0 !== ab.length && Ub.page.live && (ab.length < bb.vertexCount ? Ub.page.arena.warnOnce("shortLight", `a part's ${ab.length} light values are fewer than its ${bb.vertexCount} vertices, so its light is left as it was`) : (Ub.page.writeLight(Ub, ab), bb.lit = !0))
      }
      lightFullSky(bb, ab) {
        this.fullSky.length < ab && (this.fullSky = new Uint16Array(Math.max(ab, 4096)).fill(jY.k));
        for (const Ub of bb) {
          const bb = Ub.vertices;
          bb.page.live && (bb.page.writeLight(bb, this.fullSky), Ub.lit = !0)
        }
      }
      backed(bb) {
        const {
          vertices: ab
        } = bb;
        return !!ab && ab.page.holds(ab)
      }
      lost(bb) {
        const {
          vertices: ab
        } = bb;
        return !!ab && ab.page.lost(ab)
      }
      release(bb) {
        bb.vertices && bb.vertices.page.arena.free(bb.vertices), bb.vertices = null, bb.lit = !1
      }
      setDrawing(bb) {
        this.forgetBound()
      }
      draw(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ab.faceCount;
        const Tb = ab.vertices,
          Eb = Tb.page,
          Yb = Ub ? Eb.twin : null;
        if (!Eb.holds(Tb) || Ub && !Yb) return 0;
        const {
          verticesPerUnit: Bb
        } = Eb.arena;
        let eb = Tb.start * Bb;
        this.boundPattern || (bb.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const vb = Ab + Mb;
        if (Bb > 1) return Eb.buffer === this.boundRecords && Yb === this.boundRecordsLight || (bb.setBindGroup(1, this.recordsGroup(Eb.buffer, Yb)), this.boundRecords = Eb.buffer, this.boundRecordsLight = Yb), DY(bb, eb, Ab, vb, ab.slot);
        Eb.buffer !== this.boundVertices && (bb.setVertexBuffer(0, Eb.buffer), this.boundVertices = Eb.buffer), Yb && Yb !== this.boundLight && (bb.setVertexBuffer(1, Yb), this.boundLight = Yb);
        const Lb = ab.faceCount;
        return vb <= Lb ? DY(bb, eb, Ab, vb, ab.slot) : DY(bb, eb, Ab, Lb, ab.slot) + DY(bb, eb, Math.max(Ab, Lb) - Lb, vb - Lb, ab.slot)
      }
      get buffersAwaitingVerdict() {
        let bb = 0;
        for (const ab of this.arenas()) bb += ab.awaitingVerdict;
        return bb
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class xY {
      constructor(bb, ab, Ub, Ab) {
        this.device = bb, this.splitBefore = ab, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = bb.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Mb = bb.createShaderModule({
          label: "scene-depth-copy",
          code: (Tb = Ub._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Tb?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Tb;
        bb.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Mb,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Mb,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((bb => {
          this.pipeline = bb, this.building = !1
        }), (bb => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", bb)
        })), Ub._executeWithTransmission = () => this.execute(Ub, Ab)
      }
      get compiling() {
        return this.building
      }
      setWanted(bb) {
        this.wanted = bb
      }
      setPlanes(bb, ab) {
        bb === this.near && ab === this.far || (this.near = bb, this.far = ab, this.unproject[0] = bb / (ab - bb), this.unproject[1] = ab * bb / (ab - bb), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var bb, ab;
        return null !== (bb = null === (ab = this.copy) || void 0 === ab ? void 0 : ab.view) && void 0 !== bb ? bb : null
      }
      execute(bb, ab) {
        var Ub;
        null === (Ub = this.retired) || void 0 === Ub || Ub.destroy(), this.retired = null;
        const Ab = ba(ab),
          Mb = bb._transparentBindings,
          Tb = this.wanted && this.pipeline ? this.splitIndex(Mb) : -1,
          Eb = bb._colorAttachment,
          Yb = Eb.resolveTarget;
        Tb >= 0 && (Eb.resolveTarget = void 0, VE(bb, !0));
        let Bb = Ab.beginRenderPass(bb._renderPassDescriptor);
        Bb.setBindGroup(0, bb._sceneBG);
        let eb = this.drawList(Bb, ab, bb._opaqueBindings, 0, bb._opaqueBindings.length);
        if (eb += this.drawList(Bb, ab, bb._directBindings, 0, bb._directBindings.length), eb += this.drawList(Bb, ab, Mb, 0, Tb >= 0 ? Tb : Mb.length), Bb.end(), Tb < 0) return eb;
        VE(bb);
        const vb = bb._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Lb,
            stencilLoadOp: Pb
          } = vb,
          Xb = Eb.loadOp;
        Eb.resolveTarget = Yb;
        try {
          this.copyDepth(Ab, bb), Eb.loadOp = "load", vb.depthLoadOp = "load", Pb && (vb.stencilLoadOp = "load"), Bb = Ab.beginRenderPass(bb._renderPassDescriptor), Bb.setBindGroup(0, bb._sceneBG), eb += this.drawList(Bb, ab, Mb, Tb, Mb.length), Bb.end()
        } finally {
          Eb.loadOp = Xb, vb.depthLoadOp = Lb, vb.stencilLoadOp = Pb
        }
        return eb
      }
      splitIndex(bb) {
        for (let ab = 0; ab < bb.length; ab++)
          if (bb[ab].renderable === this.splitBefore) return ab;
        return -1
      }
      drawList(bb, ab, Ub, Ab, Mb) {
        let Tb = null,
          Eb = 0;
        for (let Yb = Ab; Yb < Mb; Yb++) {
          const Ab = Ub[Yb],
            Mb = Ab.renderable.mesh;
          Mb && !1 === Mb.visible || (Ab.pipeline !== Tb && (bb.setPipeline(Ab.pipeline), Tb = Ab.pipeline), Eb += Ab.draw(bb, ab))
        }
        return Eb
      }
      copyDepth(bb, ab) {
        var Ub, Ab;
        const Mb = (null !== (Ub = ab._config.depth) && void 0 !== Ub ? Ub : ab._config.rt)._depthTexture,
          Tb = (null === (Ab = this.copy) || void 0 === Ab ? void 0 : Ab.source) === Mb ? this.copy : this.remakeCopy(Mb),
          Eb = bb.beginRenderPass(Tb.pass);
        Eb.setPipeline(this.pipeline), Eb.setBindGroup(0, Tb.bindGroup), Eb.draw(3), Eb.end()
      }
      remakeCopy(bb) {
        var ab, Ub;
        this.retired = null !== (ab = null === (Ub = this.copy) || void 0 === Ub ? void 0 : Ub.texture) && void 0 !== ab ? ab : null;
        const Ab = this.device.createTexture({
            label: "scene-depth",
            size: [bb.width, bb.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Mb = Ab.createView(),
          Tb = this.device.createBindGroup({
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
          Eb = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Mb,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: bb,
          texture: Ab,
          view: Mb,
          bindGroup: Tb,
          pass: Eb
        }, this.copy
      }
    }
    const iY = "rgba8unorm";

    function fY(bb) {
      return bb ? 15 : 1
    }
    class mY {
      constructor(bb, ab, Ub, Ab) {
        this.device = bb, this.terrain = Ab, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = ab._targetSignature._sampleCount > 1, this.cameraBuffer = bb.createBuffer({
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
        const Mb = bb.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = bb.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Mb,
          entries: []
        });
        const Tb = bb.createShaderModule({
          label: "sun-shadow-mask",
          code: (Eb = this.edge, `${(0,Na.x)()}${rU({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Eb?NU:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${fY(Eb)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Eb?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Eb;
        bb.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: bb.createPipelineLayout({
            bindGroupLayouts: [this.layout, Mb, Mb, uT(bb, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Tb,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Tb,
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
        const Yb = ab._executeWithTransmission;
        ab._executeWithTransmission = bb => this.execute(ab, Ub, (() => Yb ? Yb(bb) : function(bb, ab) {
          const Ub = ba(ab).beginRenderPass(bb._renderPassDescriptor);
          Ub.setBindGroup(0, bb._sceneBG);
          let Ab = pY(Ub, ab, bb._opaqueBindings);
          return Ab += pY(Ub, ab, bb._directBindings), Ab += pY(Ub, ab, bb._transparentBindings), Ub.end(), Ab
        }(ab, Ub)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var bb, ab;
        return null !== (bb = null === (ab = this.targets) || void 0 === ab ? void 0 : ab.maskView) && void 0 !== bb ? bb : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(bb) {
        ! function(bb, ab) {
          const Ub = bb.worldMatrix,
            Ab = bb.projectionMatrix,
            Mb = 1 / Ab[0],
            Tb = 1 / Ab[5],
            Eb = bb.far * bb.near / (bb.far - bb.near);
          ab[0] = bb.eye[0], ab[1] = bb.eye[1], ab[2] = bb.eye[2], ab[3] = 2 ** -23 / Eb, ab[4] = Ub[0] * Mb, ab[5] = Ub[1] * Mb, ab[6] = Ub[2] * Mb, ab[7] = Eb, ab[8] = Ub[4] * Tb, ab[9] = Ub[5] * Tb, ab[10] = Ub[6] * Tb, ab[11] = bb.near / (bb.far - bb.near), ab[12] = Ub[8], ab[13] = Ub[9], ab[14] = Ub[10], ab[15] = 0
        }(bb, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(bb, ab, Ub) {
        if (this.retire(), !this.terrain.readsMask) return Ub();
        const Ab = this.targetsFor(bb),
          Mb = ba(ab),
          Tb = bb._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Ab.prepass.depthStencilAttachment.view = Tb.view);
        const Eb = this.terrain.drawPrepass(Mb, Ab.prepass, bb._sceneBG);
        if (0 === Eb) return Ub();
        if (this.trace(Mb, Ab), this.edge) return Eb + 1 + Ub();
        const {
          depthLoadOp: Yb,
          stencilLoadOp: Bb
        } = Tb;
        Tb.depthLoadOp = "load", Bb && (Tb.stencilLoadOp = "load");
        try {
          return Eb + 1 + Ub()
        } finally {
          Tb.depthLoadOp = Yb, Tb.stencilLoadOp = Bb
        }
      }
      trace(bb, ab) {
        const Ub = this.terrain.sunShadowGroup(),
          Ab = bb.beginRenderPass(ab.trace);
        this.pipeline && Ub && (Ab.setPipeline(this.pipeline), Ab.setBindGroup(0, ab.bindGroup), Ab.setBindGroup(1, this.empty), Ab.setBindGroup(2, this.empty), Ab.setBindGroup(3, Ub), Ab.draw(3)), Ab.end()
      }
      retire() {
        const bb = this.retired;
        var ab;
        bb && (bb.mask.destroy(), bb.normals.destroy(), null === (ab = bb.depth) || void 0 === ab || ab.destroy(), this.retired = null)
      }
      targetsFor(bb) {
        var ab, Ub;
        const Ab = (null !== (ab = bb._config.depth) && void 0 !== ab ? ab : bb._config.rt)._depthTexture;
        return (null === (Ub = this.targets) || void 0 === Ub ? void 0 : Ub.source) === Ab ? this.targets : this.remake(bb, Ab)
      }
      remake(bb, ab) {
        var Ub;
        this.retired = this.targets;
        const Ab = [ab.width, ab.height],
          Mb = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Ab,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Tb = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Ab,
            format: iY,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Eb = null !== (Ub = bb._targetSignature._depthStencilFormat) && void 0 !== Ub ? Ub : ab.format,
          Yb = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Ab,
            format: Eb,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Bb = bb._renderPassDescriptor.depthStencilAttachment,
          eb = Eb.includes("stencil"),
          vb = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Tb.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: Yb ? Yb.createView() : Bb.view,
              depthClearValue: Bb.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...eb ? {
                stencilClearValue: Bb.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Lb = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== Yb && void 0 !== Yb ? Yb : ab).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Tb.createView()
            }]
          }),
          Pb = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Mb.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [fY(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: ab,
          mask: Mb,
          maskView: Mb.createView(),
          normals: Tb,
          depth: Yb,
          bindGroup: Lb,
          prepass: vb,
          trace: Pb
        }, this.targets
      }
    }

    function pY(bb, ab, Ub) {
      let Ab = null,
        Mb = 0;
      for (const Tb of Ub) {
        const Ub = Tb.renderable.mesh;
        Ub && !1 === Ub.visible || (Tb.pipeline !== Ab && (bb.setPipeline(Tb.pipeline), Ab = Tb.pipeline), Mb += Tb.draw(bb, ab))
      }
      return Mb
    }
    const NY = 6e4,
      WY = {
        status: "ok"
      },
      HY = {
        status: "skipped"
      };
    async function IY(bb, ab) {
      const {
        isCancelled: Ub
      } = bb;
      if (Ub()) return {
        status: "xU"
      };
      const {
        target: Ab
      } = ab;
      if (!Ab) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Mb = [],
        Tb = Promise.all(Array.from(new Set(bb.materials), (async Ub => {
          Mb.push(await async function(bb, ab, Ub, Ab) {
            const Mb = {
              lighting: bb.lighting,
              dirLightCount: Math.min(bb.dirLightCount, 4),
              QX: bb.runtime
            };
            try {
              const Tb = ab.material(Ab);
              return Tb && eA(ab.programKey(Tb, !1, Mb)) ? (await Tb.ready, bb.isCancelled() ? WY : Tb.bindGroupLayout ? await async function(bb, ab, Ub, Ab) {
                const {
                  device: Mb
                } = bb;
                let Tb, Eb;
                Mb.pushErrorScope("validation");
                try {
                  Tb = bb.pipelineBuild(ab, Ub, Ab)
                } finally {
                  Eb = Mb.popErrorScope().catch((() => null))
                }
                const [Yb, Bb] = await Promise.all([Eb, Tb.built.then((() => null), (bb => null !== bb && void 0 !== bb ? bb : new Error("pipeline failed")))]);
                if (!Yb && !Bb) return WY;
                const eb = await dY(Tb.module),
                  vb = eb.length > 0 ? eb.map((bb => `${Tb.name} ${bb.lineNum}:${bb.linePos}: ${bb.message}`)).join("\n") : `${Tb.name}: ${FY(null!==Bb&&void 0!==Bb?Bb:Yb)}`;
                return {
                  status: "failed",
                  material: ab.model.name,
                  message: vb
                }
              }(ab, Tb, ab.programKey(Tb, "none" !== Tb.texture, Mb), Ub): (console.warn(`Shader pack: skipped the compile check for "${Ab.name}", whose textures failed to load`), HY)) : WY
            } catch (Tb) {
              return {
                status: "failed",
                material: Ab.name,
                message: FY(Tb)
              }
            }
          }(bb, ab, Ab, Ub))
        }))),
        Eb = function(bb, ab) {
          let Ub, Ab, Mb = !1;
          const Tb = new Promise((Tb => {
            var Eb;
            Ub = setTimeout((() => {
              Tb("timeout")
            }), null !== (Eb = ab.timeoutMs) && void 0 !== Eb ? Eb : NY), Ab = setInterval((() => {
              ab.isCancelled() && Tb("xU")
            }), 50), bb.lost.then((() => {
              Mb = !0, Tb("lost")
            }))
          }));
          return {
            signal: Tb,
            lost: () => Mb,
            dispose: () => {
              clearTimeout(Ub), clearInterval(Ab)
            }
          }
        }(ab.device, bb);
      let Yb;
      try {
        Yb = await Promise.race([Tb.then((() => "done")), Eb.signal])
      } finally {
        Eb.dispose()
      }
      if ("xU" === Yb || Ub()) return {
        status: "xU"
      };
      const Bb = Mb.find((bb => "failed" === bb.status));
      return Bb && "lost" !== Yb && !Eb.lost() && await new Promise((bb => {
        setTimeout(bb, 0)
      })), "lost" === Yb || Eb.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Bb ? {
        status: "failed",
        failure: {
          material: Bb.material,
          message: Bb.message
        }
      } : "timeout" === Yb ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(eb=bb.timeoutMs)&&void 0!==eb?eb:NY)/1e3} s`), {
        status: "skipped"
      }) : Mb.some((bb => "skipped" === bb.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var eb
    }
    async function dY(bb) {
      if (!bb) return [];
      try {
        return (await bb.getCompilationInfo()).messages.filter((bb => "error" === bb.type))
      } catch {
        return []
      }
    }

    function FY(bb) {
      var ab;
      return null !== (ab = null === bb || void 0 === bb ? void 0 : bb.message) && void 0 !== ab ? ab : String(bb)
    }

    function hY(bb, ab, Ub, Ab) {
      eA(bb) ? dY(Ub).then((bb => {
        const [Ub] = bb;
        CM("terrain", ab, Ab, Ub ? `${Ub.lineNum}:${Ub.linePos} error: ${Ub.message}` : null)
      })) : CM("terrain", ab, Ab)
    }
    var GY = Ub(36881),
      QY = Ub(36887),
      qY = Ub(36901),
      uY = Ub(36830);

    function rY(bb, ab, Ub, Ab, Mb) {
      const Tb = Math.hypot(Ub[0], Ub[1], Ub[2]);
      if (!(Tb > 0)) return;
      const Eb = [Ub[0] / Tb, Ub[1] / Tb, Ub[2] / Tb],
        Yb = [Math.floor(ab[0]), Math.floor(ab[1]), Math.floor(ab[2])],
        Bb = [0, 0, 0],
        eb = [1 / 0, 1 / 0, 1 / 0],
        vb = [1 / 0, 1 / 0, 1 / 0];
      for (let Xb = 0; Xb < 3; Xb++) Eb[Xb] > 0 ? (Bb[Xb] = 1, eb[Xb] = (Yb[Xb] + 1 - ab[Xb]) / Eb[Xb], vb[Xb] = 1 / Eb[Xb]) : Eb[Xb] < 0 && (Bb[Xb] = -1, eb[Xb] = (Yb[Xb] - ab[Xb]) / Eb[Xb], vb[Xb] = -1 / Eb[Xb]);
      const {
        Mj: Lb
      } = bb;
      let Pb = bb.Qr(Yb[0], Yb[1], Yb[2]);
      for (;;) {
        const ab = eb[0] < eb[1] ? eb[0] < eb[2] ? 0 : 2 : eb[1] < eb[2] ? 1 : 2;
        if (eb[ab] > Ab) return;
        const Ub = Bb[ab] > 0 ? Yb[ab] + 1 : Yb[ab];
        Yb[ab] += Bb[ab], eb[ab] += vb[ab];
        const Tb = bb.Qr(Yb[0], Yb[1], Yb[2]),
          Eb = Tb !== Pb && !(bb.opaque[Pb] && bb.opaque[Tb]);
        if (Eb) {
          const Ab = [Yb[0], Yb[1], Yb[2]];
          Ab[ab] = Ub;
          const Tb = Math.floor(Ab[0] / Lb),
            Eb = Math.floor(Ab[1] / Lb),
            Bb = Math.floor(Ab[2] / Lb);
          !bb.isDrawn(Tb, Eb, Bb) && bb.hasParts(Tb, Eb, Bb) && Mb.add(`${Tb},${Eb},${Bb}`)
        }
        if (Eb && bb.occluders[Tb]) return;
        Pb = Tb
      }
    }

    function KY(bb, ab) {
      return bb.group - ab.group || bb.nearest - ab.nearest
    }
    class oY {
      constructor(bb, ab) {
        this.device = bb, this.bZ = ab, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
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
        const ab = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.next++;
        if (8 * ab >= this.data.length) {
          const bb = new Float32Array(2 * this.data.length);
          bb.set(this.data), this.data = bb, this.words = new Uint32Array(bb.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.bZ()
        }
        return ab
      }
      release(bb) {
        this.free.push(bb)
      }
      set(bb, ab, Ub, Ab, Mb) {
        const Tb = 8 * bb + DA;
        this.data[Tb] = ab, this.data[Tb + 1] = Ub, this.data[Tb + 2] = Ab, this.setVisibility(bb, Mb)
      }
      setVisibility(bb, ab) {
        this.data[8 * bb + zA] = ab, this.markDirty(bb, bb)
      }
      setFaces(bb, ab, Ub) {
        const Ab = 8 * bb;
        this.words[Ab + xA] = ab, this.words[Ab + iA] = Ub, this.markDirty(bb, bb)
      }
      markDirty(bb, ab) {
        this.dirtyMin = Math.min(this.dirtyMin, bb), this.dirtyMax = Math.max(this.dirtyMax, ab)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const lY = ZA,
      tY = !0;
    const wY = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: lY.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      sY = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class gY {
      constructor(bb) {
        this.device = bb, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(LA), this.dirLightUniforms = this.frameUniforms.subarray(vA.dirLights, vA.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, ea.d)(), this.faceGroups = !0, this.visibilityGraph = tY, this.visCull = tY, this.visCheck = !1, this.visCullMinDistance = qY.d, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new cY, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.QX = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new zY(bb, ((bb, ab) => this.recordsGroup(bb, ab))), this.slots = new oY(bb, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = aa(bb), this.frameLayout = bb.createBindGroupLayout({
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
          bind: (bb, ab) => this.createBinding(this.opaqueRenderable, ab, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (bb, ab) => this.createBinding(this.transparentRenderable, ab, !0)
        }
      }
      installSceneDepth(bb, ab) {
        this.sceneDepth = new xY(this.device, this.transparentRenderable, bb, ab)
      }
      createFrameBindGroup() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== ab && void 0 !== ab ? ab : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(bb, ab) {
        const Ub = null !== ab && void 0 !== ab ? ab : bb;
        let Ab = this.recordsGroups.get(Ub);
        return Ab || (Ab = this.createFrameBindGroup(bb, ab), this.recordsGroups.set(Ub, Ab)), Ab
      }
      setChunkMesh(bb, ab, Ub) {
        var Ab;
        let Mb = this.chunks.get(bb);
        Mb ? this.geometry.release(Mb) : (Mb = {
          mesh: bb,
          slot: this.slots.allocate(),
          origin: [Ub[0], Ub[1], Ub[2]],
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
        }, this.chunks.set(bb, Mb), this.writeSlot(Mb)), Mb.material = bb.material ? this.materialFor(bb.material) : null, Mb.packed = !!ab.packedVertices, Mb.vertexCount = (0, LY.g)(ab), Mb.faceCount = Mb.vertexCount / 4;
        const Tb = null !== (Ab = ab.faceGroups) && void 0 !== Ab ? Ab : null;
        if (Mb.faceGroups = Tb, Tb) {
          const bb = GY.i;
          Mb.planePX = Tb[bb], Mb.planeNX = Tb[bb + 1], Mb.planePY = Tb[bb + 2], Mb.planeNY = Tb[bb + 3], Mb.planePZ = Tb[bb + 4], Mb.planeNZ = Tb[bb + 5]
        }
        this.drawWhole(Mb), 0 !== Mb.faceCount && (this.geometry.set(Mb, ab) ? (Mb.packed && this.slots.setFaces(Mb.slot, Mb.vertices.start + Mb.faceCount, Mb.faceCount), ab.wX && this.setChunkMeshLight(bb, ab.wX)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Mb.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(bb, ab) {
        const Ub = this.chunks.get(bb);
        Ub && this.geometry.setLight(Ub, ab)
      }
      drawStats() {
        let bb = this.transparent.length;
        for (const ab of this.opaqueBatches) bb += ab.meshes.length;
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
        const ab = this.chunks.get(bb);
        ab && (this.geometry.release(ab), this.slots.release(ab.slot), this.chunks.delete(bb))
      }
      remeshLost(bb, ab) {
        this.geometry.release(ab), ab.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** ab.lostRemeshes++);
        const Ub = bb.lL,
          [Ab, Mb, Tb] = Ub.hAb(ab.origin[0], ab.origin[1], ab.origin[2]),
          Eb = Ub.Jj.nj(Ab, Mb, Tb);
        Eb && (Eb.Vj = !0, Eb.AR = !0, Ub.Oj(Eb, !1))
      }
      chooseFaceRanges(bb, ab, Ub) {
        const Ab = this.faceRanges;
        bb.faceMask = Ub, bb.rangeCount = (0, QY.n)(ab, Ub, Ab), bb.first0 = Ab[0], bb.count0 = Ab[1], bb.first1 = Ab[2], bb.count1 = Ab[3]
      }
      drawWhole(bb) {
        bb.faceMask = -1, bb.faceEpoch = -1, bb.rangeCount = 1, bb.first0 = 0, bb.count0 = bb.faceCount
      }
      writeSlot(bb) {
        const [ab, Ub, Ab] = this.originOffset;
        this.slots.set(bb.slot, bb.origin[0] - ab, bb.origin[1] - Ub, bb.origin[2] - Ab, bb.visibility)
      }
      materialFor(bb) {
        const ab = this.materials.get(bb);
        if (ab) return ab;
        const Ub = XY(bb);
        if (!Ub) return this.warnOnce(`material:${bb.name}`, `Lite terrain cannot draw material "${bb.name}"; its chunks are skipped.`), null;
        const {
          model: Ab,
          atlas: Mb,
          texture: Tb,
          animated: Eb,
          uniformData: Yb
        } = Ub, Bb = {
          id: this.materials.size,
          model: Ab,
          texture: Tb,
          animated: Eb,
          uniformData: Yb,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${bb.name}`,
            size: Yb.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: Ub.liquid,
          customRenderMat: Ub.customRenderMat,
          atlasCount: 0,
          qV: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(bb, Bb), this.device.queue.writeBuffer(Bb.uniformBuffer, 0, Yb), Bb.ready = this.createMaterialBindGroup(Bb, Mb).catch((ab => {
          console.error(`Lite terrain failed to load the textures of material "${bb.name}"`, ab)
        })), Bb
      }
      materialLayout(bb) {
        const ab = function(bb) {
            const ab = ["uniforms"];
            if ("atlas" === bb.texture) {
              bb.animated && ab.push("animData"), ab.push("sampler");
              for (let Ub = 0; Ub < bb.atlasCount; Ub++) ab.push("textureArray")
            } else "single" === bb.texture && ab.push("sampler", "texture");
            return ab
          }(bb),
          Ub = ab.join(",");
        let Ab = this.materialLayouts.get(Ub);
        if (!Ab) {
          const bb = GPUShaderStage.FRAGMENT;
          Ab = this.device.createBindGroupLayout({
            label: `terrain-material-${Ub}`,
            entries: ab.map(((ab, Ub) => {
              switch (ab) {
                case "uniforms":
                  return {
                    binding: Ub, visibility: GPUShaderStage.VERTEX | bb, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: Ub, visibility: GPUShaderStage.VERTEX | bb, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: Ub, visibility: bb, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: Ub, visibility: bb, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: Ub, visibility: bb, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(Ub, Ab)
        }
        return Ab
      }
      async createMaterialBindGroup(bb, ab) {
        const Ub = [{
          buffer: bb.uniformBuffer
        }];
        if (ab) {
          const {
            urls: Ab,
            pixels: Mb,
            layerWidth: Tb
          } = ab.sources, Eb = await Promise.all(Ab.map(((bb, ab) => {
            var Ub;
            return KM(this.device, bb, null !== (Ub = null === Mb || void 0 === Mb ? void 0 : Mb[ab]) && void 0 !== Ub ? Ub : null, Tb)
          })));
          bb.atlasCount = Eb.length, bb.qV = Eb[0].layerWidth, bb.atlasLayers = Eb[0].layers, ab.animDataPerTex && Ub.push({
            buffer: dM(this.device, Float32Array.from(ab.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), Ub.push(this.sampler);
          for (const bb of Eb) Ub.push(bb.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === bb.texture) {
          const {
            url: ab
          } = bb.model.diffuseTexture.source, {
            pixels: Ab,
            width: Mb,
            height: Tb
          } = await uM(ab);
          Ub.push(this.sampler), Ub.push(hM(this.device, Ab, Mb, Tb, 1, `terrain-${ab}`).createView({
            dimension: "2d"
          }))
        }
        const Ab = this.materialLayout(this.programKey(bb, !1));
        bb.bindGroupLayout = Ab, bb.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${bb.model.name}`,
          layout: Ab,
          entries: Ub.map(((bb, ab) => ({
            binding: ab,
            resource: bb
          })))
        })
      }
      programKey(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ab = Ub ? Ub.lighting : this.lighting,
          Mb = Ub ? Ub.QX : this.QX,
          Tb = {
            texture: bb.texture,
            atlasCount: bb.atlasCount,
            qV: bb.qV,
            atlasLayers: bb.atlasLayers,
            animated: bb.animated,
            alphaTest: bb.model.transparencyMode === pb.p.alphaTest,
            lighting: Ab,
            dirLightCount: Ub ? Ub.dirLightCount : this.dirLightCount,
            packed: ab
          };
        if (!Mb) return Tb;
        const Eb = this.shaderPackFields(bb, Mb),
          Yb = "atlas" === bb.texture && bb.model.transparencyMode === pb.p.opaque && TA(Eb.packVariant);
        return {
          ...Tb,
          ...Eb,
          alphaTest: Tb.alphaTest || Yb
        }
      }
      shaderPackFields(bb, ab) {
        return bb.customRenderMat ? AA : function(bb, ab) {
          if (!bb) return AA;
          const Ub = bb.defineFor(ab ? "liquid" : "terrain");
          return 0 === Ub ? AA : {
            packVariant: Ub,
            liquid: ab
          }
        }(ab, bb.liquid)
      }
      isBlended(bb) {
        return bb.model.transparencyMode === pb.p.alphaBlend
      }
      shaderModule(bb, ab) {
        let Ub = this.modules.get(bb);
        return Ub || (Ub = this.device.createShaderModule({
          label: ab,
          code: bb
        }), this.modules.set(bb, Ub)), Ub
      }
      pipelineFor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!bb.bindGroupLayout) return null;
        const Mb = this.programKey(bb, ab);
        if (!Ab) return this.pipelineOf(bb, Mb, Ub);
        const Tb = {
            ...Mb,
            resting: Ab
          },
          Eb = this.pipelineId(bb, Tb, Ub),
          Yb = this.pipelines.get(Eb);
        if (Yb) return Yb;
        const Bb = this.pipelineOf(bb, Mb, Ub);
        return Bb && void 0 === Yb && this.startPipeline(Eb, bb, Tb, Ub), Bb
      }
      pipelineOf(bb, ab, Ub) {
        const Ab = this.pipelineId(bb, ab, Ub),
          Mb = this.pipelines.get(Ab);
        return void 0 !== Mb ? Mb : (this.startPipeline(Ab, bb, ab, Ub), null)
      }
      pipelineId(bb, ab, Ub) {
        return CY(ab, this.isBlended(bb), bb.model.backFaceCulling, Ub)
      }
      pipelineBuild(bb, ab, Ub) {
        var Ab;
        const Mb = this.pipelineId(bb, ab, Ub);
        return null !== (Ab = this.builds.get(Mb)) && void 0 !== Ab ? Ab : this.startPipeline(Mb, bb, ab, Ub)
      }
      startPipeline(bb, ab, Ub, Ab) {
        var Mb;
        this.pipelines.set(bb, null);
        const Tb = HA(Ub),
          Eb = this.isBlended(ab),
          Yb = this.shadowMask && Ab._depthStencilFormat ? function(bb, ab, Ub, Ab) {
            if (void 0 === bb.packVariant || bb.liquid || ab) return "none";
            const Mb = (0, Wa.g)(bb.packVariant);
            return null === Mb || void 0 === Mb || !Mb.sunShadow || !qU(Mb, Ub) || Mb.discards || bb.alphaTest && TA(bb.packVariant) ? "none" : Ab ? "edge" : "plain"
          }(Ub, Eb, !!this.sunShadow, Ab._sampleCount > 1) : "none";
        let Bb;
        try {
          Bb = IA(Ub, !!this.sunShadow, Yb)
        } catch (kb) {
          if (!eA(Ub)) throw kb;
          return this.failedPackBuild(bb, Ub, Tb, kb)
        }
        const eb = this.shaderModule(Bb, Tb),
          vb = [];
        Ub.packed || (vb.push(function(bb, ab) {
          const Ub = [{
            shaderLocation: lY.position,
            offset: ma.i.ia,
            format: "float32x3"
          }, {
            shaderLocation: lY.normal,
            offset: ma.i.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: lY.color,
            offset: ma.i.colorOffset,
            format: "unorm8x4"
          }];
          return bb && Ub.push({
            shaderLocation: lY.uv,
            offset: ma.i.uvOffset,
            format: "float32x2"
          }), ab && Ub.push({
            shaderLocation: lY.blockFlagWords,
            offset: ma.i.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: ma.i.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: Ub
          }
        }("none" !== Ub.texture, eA(Ub))), Ub.lighting && vb.push(wY));
        const Lb = ab.model.backFaceCulling,
          Pb = {
            label: Tb,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, ab.bindGroupLayout, ...oT(this.device, Ub, !!this.sunShadow, "none" !== Yb)]
            }),
            vertex: {
              module: eb,
              entryPoint: "mainVertex",
              buffers: vb
            },
            fragment: Jb({
              module: eb,
              entryPoint: "mainFragment"
            }, Ab, Eb ? sY : null),
            depthStencil: Ab._depthStencilFormat ? {
              format: Ab._depthStencilFormat,
              depthCompare: null !== (Mb = Ab._depthCompare) && void 0 !== Mb ? Mb : Ua,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Ab._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Lb ? "back" : "none"
            }
          },
          Xb = Ub.resting ? 0 : 1;
        this.compiling += Xb;
        const jb = "none" === Yb ? this.device.createRenderPipelineAsync(Pb) : this.startMaskPipelines(eb, Pb, "edge" === Yb);
        jb.then((ab => {
          this.compiling -= Xb, this.pipelines.set(bb, ab)
        }), (bb => {
          this.compiling -= Xb, console.error(`Lite terrain pipeline ${Tb} failed`, bb), hY(Ub, Tb, eb, bb)
        }));
        const Rb = {
          name: Tb,
          module: eb,
          built: jb
        };
        return this.builds.set(bb, Rb), Rb
      }
      startMaskPipelines(bb, ab, Ub) {
        const Ab = ab.depthStencil,
          Mb = this.device.createRenderPipelineAsync(Ub ? ab : {
            ...ab,
            depthStencil: {
              ...Ab,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Tb = this.device.createRenderPipelineAsync({
            ...ab,
            label: `${ab.label}-prepass`,
            fragment: {
              module: bb,
              entryPoint: "prepassFragment",
              targets: [{
                format: iY
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Mb, Tb]).then((bb => {
          let [ab, Ub] = bb;
          return this.prepassOf.set(ab, Ub), this.maskPipelines++, ab
        }))
      }
      failedPackBuild(bb, ab, Ub, Ab) {
        console.error(`Lite terrain pipeline ${Ub} failed`, Ab), hY(ab, Ub, null, Ab);
        const Mb = Promise.reject(Ab);
        Mb.catch((() => {}));
        const Tb = {
          name: Ub,
          module: null,
          built: Mb
        };
        return this.builds.set(bb, Tb), Tb
      }
      checkShaderPack(bb) {
        return IY(bb, {
          device: this.device,
          target: this.target,
          material: bb => this.materialFor(bb),
          programKey: (bb, ab, Ub) => this.programKey(bb, ab, Ub),
          pipelineBuild: (bb, ab, Ub) => this.pipelineBuild(bb, ab, Ub)
        })
      }
      createBinding(bb, ab, Ub) {
        return this.target = ab, {
          renderable: bb,
          pipeline: Ea(this.device, ab),
          draw: bb => {
            this.geometry.setDrawing(!0);
            try {
              return Ub ? this.drawTransparent(bb, ab) : this.drawOpaque(bb, ab)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(bb, ab) {
        var Ub, Ab, Mb, Tb;
        const {
          VL: Eb
        } = bb;
        this.lighting = bb.XR;
        const Yb = (0, vY.s)(ab);
        this.dirLightCount = Math.min(Yb, 4), this.QX = null !== (Ub = Eb.QX) && void 0 !== Ub ? Ub : null, Yb > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(bb, ab), this.animateMaterials(ab.animTick);
        const Bb = Eb.vP,
          eb = Bb[0] !== this.originOffset[0] || Bb[1] !== this.originOffset[1] || Bb[2] !== this.originOffset[2];
        eb && (this.originOffset[0] = Bb[0], this.originOffset[1] = Bb[1], this.originOffset[2] = Bb[2]);
        const vb = ab.eye;
        this.eye[0] = vb[0], this.eye[1] = vb[1], this.eye[2] = vb[2], this.writeShaderPackInputs();
        const Lb = ab.projectionMatrix,
          Pb = 0 === Lb[15];
        let Xb = 0;
        (eb || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: jb
        } = this;
        Ya(this.transparentRenderable._worldCenter, ab, Ma), this.resetBatches(Pb), this.transparent.length = 0, this.unlit.length = 0;
        const Rb = Eb.lL.j_,
          kb = Rb / 2 * Math.sqrt(3);
        let yb = 0;
        const Zb = !!this.QX && MA(this.QX.defineFor("liquid"));
        let Db = !1;
        const zb = null !== (Ab = null === (Mb = Eb.zD) || void 0 === Mb ? void 0 : Mb.visibility) && void 0 !== Ab ? Ab : null,
          xb = this.visCull && Pb && 0 === this.compiling && null !== zb && Eb.lL.gUb[0] >= this.visCullMinDistance ? this.target : null,
          ib = this.visPassable,
          fb = this.visCandidates,
          mb = this.visCandidateBatches;
        ib.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let pb = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Nb = 0;
        const Wb = (bb, Ub) => {
          if (!Ub) return this.transparent.push(bb), void(Nb += 2 * bb.faceCount);
          if (null !== bb.faceGroups && Ub.faceCull) {
            if (0 === Xb && (Xb = (0, QY.d)(Lb, ab.renderWidth, ab.renderHeight), Xb !== this.faceFocalPx && (this.faceFocalPx = Xb, jb = ++this.faceEpoch)), bb.faceEpoch !== jb) {
              bb.faceEpoch = jb;
              const ab = Math.sqrt(bb.distance) + kb,
                Ub = (0, QY.i)(bb.planePX, bb.planeNX, bb.planePY, bb.planeNY, bb.planePZ, bb.planeNZ, this.eye[0] - (bb.origin[0] - this.originOffset[0]), this.eye[1] - (bb.origin[1] - this.originOffset[1]), this.eye[2] - (bb.origin[2] - this.originOffset[2]), (0, QY.h)(ab, Xb));
              Ub !== bb.faceMask && this.chooseFaceRanges(bb, bb.faceGroups, Ub)
            }
            if (0 === bb.rangeCount) return
          } else - 1 !== bb.faceMask && this.drawWhole(bb);
          Ub.meshes.push(bb), Nb += 2 * ((bb.rangeCount > 0 ? bb.count0 : 0) + (bb.rangeCount > 1 ? bb.count1 : 0))
        };
        for (const Ib of this.chunks.values()) {
          eb && this.writeSlot(Ib);
          const bb = Ib.mesh.visibility;
          bb !== Ib.visibility && (Ib.visibility = bb, this.slots.setVisibility(Ib.slot, bb));
          const {
            material: Ub
          } = Ib;
          this.geometry.lost(Ib) && performance.now() >= Ib.lostRetryAt && this.remeshLost(Eb, Ib);
          const Ab = !(null === Ub || void 0 === Ub || !Ub.bindGroup) && this.geometry.backed(Ib),
            Mb = Ab && this.lighting && !Ib.vertices.page.twin;
          if (xb && (Number.isNaN(Ib.key) && (Ib.ci = Math.floor(Ib.origin[0] / Rb), Ib.cj = Math.floor(Ib.origin[1] / Rb), Ib.ck = Math.floor(Ib.origin[2] / Rb), Ib.key = (0, uY.f)(Ib.ci, Ib.cj, Ib.ck)), (!Ab || bb < 1 || Mb || !this.batchDraws(Ub, Ib.packed, xb)) && this.visSeeThrough(Ib, xb) && ib.add(Ib.key)), !Ab) continue;
          Mb || (Ib.lostRemeshes = 0);
          const Tb = Ib.origin[0] - this.originOffset[0],
            Yb = Ib.origin[1] - this.originOffset[1],
            Bb = Ib.origin[2] - this.originOffset[2];
          if (!(0, nE.d)(ab.frustum, Tb, Yb, Bb, Rb)) continue;
          const vb = Tb + Rb / 2 - this.eye[0],
            Lb = Yb + Rb / 2 - this.eye[1],
            Xb = Bb + Rb / 2 - this.eye[2];
          if (Ib.distance = vb * vb + Lb * Lb + Xb * Xb, this.lighting && !Ib.lit && (yb = Math.max(yb, Ib.vertexCount), this.unlit.push(Ib)), Mb) continue;
          const jb = this.isBlended(Ub) ? null : this.batchFor(Ub, Ib.packed, Ib.vertices.page, 1 === bb, Pb);
          xb ? (fb[pb] = Ib, mb[pb++] = jb) : Wb(Ib, jb)
        }
        const Hb = xb ? this.sweepVisibility(bb, ab, zb) : null;
        null === (Tb = (0, HT.r)(Eb)) || void 0 === Tb || Tb.update(ab.frustum, this.originOffset, Rb, Hb);
        for (let Ib = 0; Ib < pb; Ib++) {
          const bb = fb[Ib];
          !Hb || Hb.isDrawn(bb.ci, bb.cj, bb.ck) ? Wb(bb, mb[Ib]) : (this.visCulledParts++, this.visCulledTriangles += 2 * bb.faceCount)
        }
        for (const Ib of this.transparent) Db ||= Zb && Ib.material.liquid && !Ib.material.customRenderMat;
        this.submittedTriangles = Nb, Hb && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(bb, ab, Hb)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Db) : Db && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && yb > 0 && this.geometry.lightFullSky(this.unlit, yb);
        for (const Ib of this.opaqueBatches) this.chunkSorter.sort(Ib.meshes, 1) || Ib.meshes.sort(VY);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(OY)
      }
      sweepVisibility(bb, ab, Ub) {
        const {
          lL: Ab
        } = bb.VL, Mb = Ab.j_, Tb = this.visPassable, Eb = this.eye[0] + this.originOffset[0], Yb = this.eye[1] + this.originOffset[1], Bb = this.eye[2] + this.originOffset[2];
        if (!Ub.eyeClear(Eb, Yb, Bb, ab.near, ab.projectionMatrix, Ab)) return null;
        const [eb, vb] = Ab.gUb, Lb = Ub.update(Eb, Yb, Bb, Mb, eb, vb, Tb);
        return this.visSweeps = Ub.sweeps, Lb ? Ub : null
      }
      visSeeThrough(bb, ab) {
        const {
          material: Ub
        } = bb;
        return (!Ub || !this.isBlended(Ub)) && (bb.mesh.visibility < 1 || !(null !== Ub && void 0 !== Ub && Ub.bindGroup) || bb.faceCount > 0 && (!this.geometry.backed(bb) || this.lighting && !bb.vertices.page.twin) || !this.batchDraws(Ub, bb.packed, ab))
      }
      batchDraws(bb, ab, Ub) {
        var Ab;
        const Mb = ab ? 2 : 0;
        if (bb === this.visDrawsMaterial && function(bb, ab) {
            return 0 !== (bb & 1 << ab)
          }(this.visDrawsBits, Mb)) return 0 !== (this.visDrawsBits & 2 << Mb);
        let Tb = null !== (Ab = this.visBatchDraws.get(bb)) && void 0 !== Ab ? Ab : 0;
        if (!(Tb & 1 << Mb)) {
          Tb |= 1 << Mb | (!!bb.bindGroupLayout && this.canDraw(bb, ab) && !!this.pipelines.get(this.pipelineId(bb, this.programKey(bb, ab), Ub)) ? 2 << Mb : 0), this.visBatchDraws.set(bb, Tb)
        }
        return this.visDrawsMaterial = bb, this.visDrawsBits = Tb, 0 !== (Tb & 2 << Mb)
      }
      runVisCheck(bb, ab, Ub) {
        const {
          VL: Ab
        } = bb, {
          lL: Mb
        } = Ab, Tb = Mb.j_, Eb = new Set;
        for (const Xb of this.chunks.values()) Eb.add(Xb.key);
        const Yb = DM.Matrix.FromArray(ab.viewProjectionMatrix).invert(),
          [Bb, eb, vb] = this.originOffset,
          Lb = new DM.Pj,
          Pb = function(bb, ab, Ub, Ab) {
            const Mb = new Set;
            for (let Tb = 0; Tb < 27; Tb++)
              for (let Eb = 0; Eb < 48; Eb++) {
                const Yb = Ub((Eb + .5) / 48 * 2 - 1, (Tb + .5) / 27 * 2 - 1);
                rY(bb, ab, [Yb[0] - ab[0], Yb[1] - ab[1], Yb[2] - ab[2]], Ab, Mb)
              }
            return Mb
          }({
            Qr: (bb, ab, Ub) => Mb.Qr(bb, ab, Ub),
            occluders: Ub.occluders,
            opaque: Ub.opaque,
            Mj: Tb,
            isDrawn: (bb, ab, Ab) => Ub.isDrawn(bb, ab, Ab),
            hasParts: (bb, ab, Ub) => Eb.has((0, uY.f)(bb, ab, Ub))
          }, [this.eye[0] + Bb, this.eye[1] + eb, this.eye[2] + vb], ((bb, ab) => (DM.Pj.TransformCoordinatesFromFloatsToRef(bb, ab, .5, Yb, Lb), [Lb.x + Bb, Lb.y + eb, Lb.z + vb])), (Mb.gUb[0] + 1) * Tb);
        this.visViolations = Pb.size;
        for (const Xb of Pb) this.warnOnce(`vis:${Xb}`, `Lite terrain cave culling skipped chunk ${Xb}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var bb;
        null !== (bb = this.QX) && void 0 !== bb && bb.isRunning() && (this.shaderPackInputs ??= new lT(this.device, this.QX.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.QX, this.eye, this.lighting))
      }
      bindShaderPackInputs(bb, ab, Ub) {
        var Ab, Mb, Tb, Eb;
        let Yb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: Bb
        } = this.shaderPackFields(ab, Ub);
        if (void 0 === Bb) return;
        this.shaderPackInputs || (this.shaderPackInputs = new lT(this.device, Ub.textureLayers(), this.sunShadow), this.shaderPackInputs.write(Ub, this.eye, this.lighting));
        const eb = MA(Bb) ? null !== (Ab = null === (Mb = this.sceneDepth) || void 0 === Mb ? void 0 : Mb.view) && void 0 !== Ab ? Ab : this.standIn() : null,
          vb = Yb ? null !== (Tb = null === (Eb = this.shadowMask) || void 0 === Eb ? void 0 : Eb.view) && void 0 !== Tb ? Tb : this.standIn() : null;
        this.shaderPackInputs.bind(bb, eb, KT(Bb, !!this.sunShadow), vb)
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
        var bb, ab;
        return null !== (bb = null === (ab = this.shaderPackInputs) || void 0 === ab ? void 0 : ab.bindGroupFor(null, !0)) && void 0 !== bb ? bb : null
      }
      resetBatches(bb) {
        const ab = this.opaqueBatches;
        let Ub = 0;
        for (const Ab of ab) Ab.meshes.length > 0 && (Ab.meshes.length = 0, Ab.faceCull = this.batchFaceCull(Ab.material, bb), ab[Ub++] = Ab);
        ab.length = Ub
      }
      orderBatches() {
        const bb = this.opaqueBatches;
        for (let ab = 0; ab < bb.length; ab++) {
          const Ub = bb[ab];
          Ub.group = ab;
          for (let Ab = 0; Ab < ab; Ab++) {
            const ab = bb[Ab];
            if (ab.material === Ub.material && ab.packed === Ub.packed) {
              Ub.group = ab.group;
              break
            }
          }
          Ub.nearest = Ub.meshes.length > 0 ? Ub.meshes[0].distance : 1 / 0
        }
        bb.sort(KY)
      }
      batchFor(bb, ab, Ub, Ab, Mb) {
        for (const Eb of this.opaqueBatches)
          if (Eb.material === bb && Eb.packed === ab && Eb.page === Ub && Eb.resting === Ab) return Eb;
        const Tb = {
          material: bb,
          packed: ab,
          page: Ub,
          resting: Ab,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(bb, Mb)
        };
        return this.opaqueBatches.push(Tb), Tb
      }
      batchFaceCull(bb, ab) {
        return !(!ab || !(0, GY.l)(bb.model)) && (!this.QX || ! function(bb) {
          var ab;
          return !(null === (ab = (0, Wa.g)(bb)) || void 0 === ab || !ab.movesVertices)
        }(this.shaderPackFields(bb, this.QX).packVariant))
      }
      writeFrameUniforms(bb, ab) {
        const Ub = this.frameUniforms,
          Ab = vA;
        if ((0, vY.t)(bb, Ub), Ub[Ab.fogInfos] = ab.fogEnabled ? ab.fogMode : 0, Ub[Ab.fogInfos + 1] = ab.fogStart, Ub[Ab.fogInfos + 2] = ab.fogEnd, Ub[Ab.fogInfos + 3] = ab.fogDensity, Ub.set(ab.fogColour, Ab.fogColour), Ub[Ab.outputHeight] = ab.renderHeight, Ub.set(ab.ambientColour, Ab.sceneAmbient), (0, vY.p)(ab, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const ab = (0, LY.i)(bb.Gj, bb.Yj, bb.Bj);
          for (let bb = 0; bb < 4; bb++) Ub[Ab.aoLevels + bb] = ab[bb] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, Ub)
      }
      animateMaterials(bb) {
        const ab = PA.anim;
        for (const Ub of this.materials.values()) Ub.animated && (Ub.uniformData[ab] = bb, this.device.queue.writeBuffer(Ub.uniformBuffer, 4 * ab, Ub.uniformData, ab, 1))
      }
      canDraw(bb, ab) {
        return !("atlas" === bb.texture && !ab) || (this.warnOnce(`stride:${bb.id}`, `Lite terrain: material "${bb.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(bb, ab) {
        let Ub = 0;
        bb.setBindGroup(1, this.frameBindGroup);
        for (const Ab of this.opaqueBatches) {
          if (!Ab.meshes.length || !this.canDraw(Ab.material, Ab.packed)) continue;
          const Mb = this.pipelineFor(Ab.material, Ab.packed, ab, Ab.resting);
          Mb && (bb.setPipeline(Mb), bb.setBindGroup(2, Ab.material.bindGroup), this.QX && this.bindShaderPackInputs(bb, Ab.material, this.QX, this.prepassOf.has(Mb)), Ub += this.drawBatch(bb, Ab))
        }
        return Ub
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(bb, ab, Ub) {
        const Ab = this.target,
          Mb = this.QX;
        if (!Ab || !Mb || 0 === this.maskPipelines) return 0;
        let Tb = 0,
          Eb = null;
        this.geometry.setDrawing(!0);
        try {
          for (const Yb of this.opaqueBatches) {
            if (!Yb.meshes.length || !this.canDraw(Yb.material, Yb.packed)) continue;
            const Bb = this.pipelineFor(Yb.material, Yb.packed, Ab, Yb.resting),
              eb = Bb && this.prepassOf.get(Bb);
            eb && (Eb || (Eb = bb.beginRenderPass(ab), Eb.setBindGroup(0, Ub), Eb.setBindGroup(1, this.frameBindGroup)), Eb.setPipeline(eb), Eb.setBindGroup(2, Yb.material.bindGroup), this.bindShaderPackInputs(Eb, Yb.material, Mb, !0), Tb += this.drawBatch(Eb, Yb))
          }
        } finally {
          var Yb;
          null === (Yb = Eb) || void 0 === Yb || Yb.end(), this.geometry.setDrawing(!1)
        }
        return Tb
      }
      drawBatch(bb, ab) {
        let Ub = 0;
        for (const Ab of ab.meshes) {
          const {
            rangeCount: ab
          } = Ab;
          ab > 0 && (Ub += this.geometry.draw(bb, Ab, this.lighting, Ab.first0, Ab.count0), ab > 1 && (Ub += this.geometry.draw(bb, Ab, this.lighting, Ab.first1, Ab.count1)))
        }
        return Ub
      }
      drawTransparent(bb, ab) {
        let Ub = 0,
          Ab = null,
          Mb = null;
        bb.setBindGroup(1, this.frameBindGroup);
        for (const Tb of this.transparent) {
          const Eb = Tb.material;
          if (!this.canDraw(Eb, Tb.packed)) continue;
          const Yb = this.pipelineFor(Eb, Tb.packed, ab);
          Yb && (Yb !== Ab && (bb.setPipeline(Yb), Ab = Yb, this.QX && this.bindShaderPackInputs(bb, Eb, this.QX)), Eb !== Mb && (bb.setBindGroup(2, Eb.bindGroup), Mb = Eb), Ub += this.geometry.draw(bb, Tb, this.lighting))
        }
        return Ub
      }
    }

    function CY(bb, ab, Ub, Ab) {
      return `${HA(bb)}|${bb.atlasLayers}|${bb.qV}|${ab}|${Ub}|${Ab._colorFormat}|${Ab._depthStencilFormat}|${Ab._sampleCount}`
    }

    function VY(bb, ab) {
      return bb.distance - ab.distance
    }

    function OY(bb, ab) {
      return ab.distance - bb.distance
    }
    class cY {
      constructor() {
        this.left = []
      }
      sort(bb, ab) {
        for (let Ub = 0; Ub < bb.length; Ub++) {
          const ab = bb[Ub].distance;
          if (ab - ab !== 0) return !1
        }
        return this.sortRange(bb, 0, bb.length, ab), !0
      }
      sortRange(bb, ab, Ub, Ab) {
        if (Ub - ab <= 16) {
          for (let Mb = ab + 1; Mb < Ub; Mb++) {
            const Ub = bb[Mb],
              Tb = Ab * Ub.distance;
            let Eb = Mb - 1;
            for (; Eb >= ab && Ab * bb[Eb].distance > Tb; Eb--) bb[Eb + 1] = bb[Eb];
            bb[Eb + 1] = Ub
          }
          return
        }
        const Mb = ab + Ub >>> 1;
        if (this.sortRange(bb, ab, Mb, Ab), this.sortRange(bb, Mb, Ub, Ab), Ab * bb[Mb - 1].distance <= Ab * bb[Mb].distance) return;
        const {
          left: Tb
        } = this, Eb = Mb - ab;
        for (let vb = 0; vb < Eb; vb++) Tb[vb] = bb[ab + vb];
        let Yb = 0,
          Bb = Mb,
          eb = ab;
        for (; Yb < Eb && Bb < Ub;) bb[eb++] = Ab * bb[Bb].distance < Ab * Tb[Yb].distance ? bb[Bb++] : Tb[Yb++];
        for (; Yb < Eb;) bb[eb++] = Tb[Yb++]
      }
    }
    const JY = Math.ceil(102);

    function nY(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ab;
      const Tb = Math.min(ab, Ub),
        Eb = new Uint32Array(bU(Ab));
      for (let Yb = 0; Yb < Ab; Yb++) {
        const ab = Math.floor(Yb * Tb / Ab),
          Ub = Math.max(ab + 1, Math.floor((Yb + 1) * Tb / Ab));
        for (let Bb = 0; Bb < Ab; Bb++) {
          const eb = Math.floor(Bb * Tb / Ab),
            vb = Math.max(eb + 1, Math.floor((Bb + 1) * Tb / Ab));
          let Lb = 0;
          for (let Ab = ab; Ab < Ub; Ab++)
            for (let ab = eb; ab < vb; ab++) bb[Ab * Mb + ab] >= JY && Lb++;
          if (2 * Lb >= (Ub - ab) * (vb - eb)) {
            const bb = Bb + Ab * Yb;
            Eb[bb >>> 5] |= 1 << (31 & bb)
          }
        }
      }
      return Eb
    }

    function SY(bb) {
      return Math.max(1, Math.min(16, bb))
    }
    class bB {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = bb, this.loadTexture = ab, this.warn = Ub, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(bb, ab) {
        return (bb.aG !== this.builtVersion || this.blockCaster.length !== ab) && (this.build(bb, ab), !0)
      }
      build(bb, ab) {
        this.builtVersion = bb.aG;
        const Ub = new Uint16Array(ab),
          Ab = new Map;
        for (let Mb = 1; Mb < ab; Mb++) {
          const ab = this.classify(bb, Mb, Ab);
          if (null === ab || ab === Oa) {
            Ub[Mb] = null === ab ? 0 : Oa;
            continue
          }
          let Tb = this.byKey.get(ab.key);
          void 0 === Tb && (Tb = this.allocate(ab), this.byKey.set(ab.key, Tb)), Ub[Mb] = Tb
        }
        this.blockCaster = Ub, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(bb, ab) {
        const Ub = bb.LJ[ab];
        if ("function" !== typeof Ub) return Ub;
        try {
          return Ub()
        } catch (Ab) {
          return this.warnOnce(`Sun shadows: no caster option for block ${ab}: ${Ab instanceof Error?Ab.message:String(Ab)}`), null
        }
      }
      classify(bb, ab, Ub) {
        const Ab = this.option(bb, ab);
        if ("none" === Ab) return null;
        if (Ab && Ab.planes.length > 0) {
          const bb = Ab.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(bb)}`,
            planes: bb
          }
        }
        if (bb.gP[ab]) return null;
        const Mb = bb.VP[ab] ? bb.vG(ab) : null;
        if (Mb && Mb.length >= 6) {
          const bb = function(bb) {
            const ab = new Uint32Array(16);
            for (let Ub = 0; Ub + 6 <= bb.length; Ub += 6) {
              const Ab = [0, 1, 2].map((ab => Math.max(0, Math.ceil(8 * bb[Ub + ab] - .5)))),
                Mb = [0, 1, 2].map((ab => Math.min(7, Math.floor(8 * bb[Ub + ab + 3] - .5))));
              for (let bb = Ab[2]; bb <= Mb[2]; bb++)
                for (let Ub = Ab[1]; Ub <= Mb[1]; Ub++)
                  for (let Tb = Ab[0]; Tb <= Mb[0]; Tb++) {
                    const Ab = Tb + 8 * (Ub + 8 * bb);
                    ab[Ab >>> 5] |= 1 << (31 & Ab)
                  }
            }
            return ab
          }(Mb);
          return function(bb) {
            return bb.every((bb => 4294967295 === bb))
          }(bb) ? Oa : bb.every((bb => 0 === bb)) ? null : {
            kind: "shape",
            key: `shape:${bb.join(",")}`,
            mask: bb
          }
        }
        if (bb.rG[ab] || !bb.Qj[ab]) return null;
        const Tb = [0, 1, 2, 3, 4, 5].map((Ab => {
          const Mb = bb.qj[6 * ab + Ab];
          let Tb = Ub.get(Mb);
          return void 0 === Tb && (Tb = function(bb) {
            if (!bb || bb.gj) return null;
            const {
              GV: ab,
              qV: Ub,
              hV: Ab
            } = bb;
            if (!ab || !Ub || !(Ub > 0) || void 0 === Ab || !(Ab >= 0)) return null;
            const Mb = ab[0],
              Tb = Ub * Ub * 4;
            if (!Mb || Mb.byteLength < Tb) return null;
            const Eb = Math.floor(Mb.byteLength / Tb),
              Yb = ab[Math.floor(Ab / Eb)];
            if (!Yb) return null;
            const Bb = new Uint8Array(Yb.buffer, Yb.byteOffset, Yb.byteLength),
              eb = Ab % Eb * Tb;
            if (eb + Tb > Bb.length) return null;
            const vb = new Uint8Array(Ub * Ub);
            let Lb = !1;
            for (let Pb = 0; Pb < vb.length; Pb++) vb[Pb] = Bb[eb + 4 * Pb + 3], Lb ||= vb[Pb] < JY;
            return Lb ? {
              alpha: vb,
              width: Ub
            } : null
          }(bb.sj(Mb)), Ub.set(Mb, Tb)), Tb
        }));
        if (Tb.every((bb => null === bb))) return Oa;
        const Eb = SY(Math.max(...Tb.map((bb => {
            var ab;
            return null !== (ab = null === bb || void 0 === bb ? void 0 : bb.width) && void 0 !== ab ? ab : 1
          })))),
          Yb = new Uint32Array(bU(Eb)).fill(4294967295),
          Bb = Tb.map((bb => null === bb ? Yb : nY(bb.alpha, bb.width, bb.width, Eb)));
        return {
          kind: "cutout",
          key: `cutout:${Eb}:${Bb.map((bb=>bb.join(","))).join("|")}`,
          size: Eb,
          faces: Bb
        }
      }
      allocate(bb) {
        if (this.nextCaster >= aU) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const ab = this.nextCaster++;
        if (this.writeCaster(ab, ca, 0, 0, 0), "shape" === bb.kind) {
          const Ub = this.allocateMask(bb.mask.length);
          Ub >= 0 && (this.sink(Ub, bb.mask), this.writeCaster(ab, Ja, Ub, 0, 8))
        } else if ("cutout" === bb.kind) {
          const Ub = bU(bb.size),
            Ab = this.allocateMask(6 * Ub);
          if (Ab >= 0) {
            const Mb = new Uint32Array(6 * Ub);
            bb.faces.forEach(((bb, ab) => {
              Mb.set(bb, ab * Ub)
            })), this.sink(Ab, Mb), this.writeCaster(ab, Sa, Ab, 0, bb.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(ab, bb.planes).finally((() => {
          this.planesLoading--
        })));
        return ab
      }
      async loadPlanes(bb, ab) {
        const Ub = await Promise.all(ab.map((bb => this.texture(bb.texture))));
        if (Ub.some((bb => null === bb))) return;
        const Ab = Ub,
          Mb = SY(Math.max(...Ab.map((bb => Math.min(bb.width, bb.height))))),
          Tb = bU(Mb),
          Eb = this.allocateMask(ab.length * (4 + Tb));
        if (Eb < 0) return;
        const Yb = new Uint32Array(ab.length * (4 + Tb)),
          Bb = 4 * ab.length;
        ab.forEach(((bb, ab) => {
          const Ub = Eb + Bb + ab * Tb;
          Yb.set(function(bb, ab) {
            const [Ub, Ab] = bb.tangent, Mb = Math.hypot(Ub, Ab) || 1, Tb = Ub / Mb, Eb = Ab / Mb, Yb = bb.centre[0] * Eb - bb.centre[1] * Tb, Bb = new Uint32Array(4);
            return new Float32Array(Bb.buffer, 0, 3).set([Tb, Eb, Yb]), Bb[3] = ab, Bb
          }(bb, Ub), 4 * ab), Yb.set(nY(Ab[ab].alpha, Ab[ab].width, Ab[ab].height, Mb), Bb + ab * Tb)
        })), this.sink(Eb, Yb), this.writeCaster(bb, na, Eb, ab.length, Mb)
      }
      texture(bb) {
        let ab = this.textures.get(bb);
        return ab || (ab = this.loadTexture(bb).catch((ab => (this.warn(`Sun shadows: no mask for ${bb}: ${ab instanceof Error?ab.message:String(ab)}`), null))), this.textures.set(bb, ab)), ab
      }
      allocateMask(bb) {
        if (this.nextMaskWord + bb > UU) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const ab = 32768 + this.nextMaskWord;
        return this.nextMaskWord += bb, ab
      }
      writeCaster(bb, ab, Ub, Ab, Mb) {
        this.sink(0 + 4 * bb, Uint32Array.of(ab, Ub, Ab, Mb))
      }
      warnOnce(bb) {
        this.warned.has(bb) || (this.warned.add(bb), this.warn(bb))
      }
    }
    var aB = Ub(37061);

    function UB(bb) {
      return !bb.Vj && !bb.GAb && !bb.fj
    }

    function AB() {
      return {
        bricks: new Uint32Array(oa),
        cells: new Uint16Array(32768),
        special: new Uint8Array(ra)
      }
    }
    class MB {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = bb, this.writeVoxels = ab, this.writePool = Ub, this.warn = Ab, this.eyeChunk = null, this.slotChunk = new Array(Fa).fill(null), this.slotVersion = new Float64Array(Fa).fill(-1), this.slotPool = new Array(Fa).fill(null), this.starved = new Uint8Array(Fa), this.queue = [], this.queued = new Uint8Array(Fa), this.queueSorted = !0, this.freePool = new Uint32Array(AU), this.freeCount = AU, this.casterTable = null, this.warnedPool = !1, this.scratch = AB(), this.victimScratch = AB(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Fa), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Mb = 0; Mb < AU; Mb++) this.freePool[Mb] = 65535 - Mb
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return AU - this.freeCount
      }
      chunkAdded(bb) {
        if (null === this.eyeChunk || !this.inRadius(bb.i, bb.j, bb.k)) return;
        const ab = ga(bb.i, bb.j, bb.k);
        this.slotChunk[ab] = bb, this.slotVersion[ab] = -1, this.enqueue(ab)
      }
      update(bb, ab, Ub) {
        const Ab = this.casters.blockCaster;
        if (Ab !== this.casterTable) {
          this.casterTable = Ab;
          for (let bb = 0; bb < Fa; bb++) this.slotVersion[bb] = -1, this.slotChunk[bb] && this.enqueue(bb)
        }
        const Mb = Math.floor(bb[0] / 32),
          Tb = Math.floor(bb[1] / 32),
          Eb = Math.floor(bb[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Mb || this.eyeChunk[1] !== Tb || this.eyeChunk[2] !== Eb) && (this.eyeChunk = [Mb, Tb, Eb], this.follow(ab), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let Yb = 0; Yb < Fa; Yb++) {
          const bb = this.slotChunk[Yb];
          bb && (bb.Jab || bb.Nj !== this.slotVersion[Yb]) && this.enqueue(Yb)
        }
        this.drain(Ub), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(bb, ab) {
        this.records.set(ab, 4 * bb), this.windowTopStale = !0, this.writeVoxels(4 * bb, ab)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const bb = this.records;
        let ab = -1 / 0;
        for (let Ab = 0; Ab < bb.length; Ab += 4) {
          const Ub = 255 & bb[Ab + 3];
          Ub !== Qa && Ub !== qa || !this.inRadius(bb[Ab], bb[Ab + 1], bb[Ab + 2]) || (ab = Math.max(ab, bb[Ab + 1] * Ha + (bb[Ab + 3] >>> 8)))
        }
        const Ub = ab === -1 / 0 ? 1 : ab + ta;
        Ub !== this.windowTop[0] && (this.windowTop[0] = Ub, this.writeVoxels(la, this.windowTop))
      }
      follow(bb) {
        const ab = this.eyeChunk,
          [Ub, Ab, Mb] = Ia;
        for (let Eb = -Mb; Eb <= Mb; Eb++)
          for (let Mb = -Ab; Mb <= Ab; Mb++)
            for (let Ab = -Ub; Ab <= Ub; Ab++) {
              var Tb;
              const Ub = ab[0] + Ab,
                Yb = ab[1] + Mb,
                Bb = ab[2] + Eb,
                eb = ga(Ub, Yb, Bb),
                vb = this.slotChunk[eb];
              if (vb && !vb.Jab && vb.i === Ub && vb.j === Yb && vb.k === Bb) continue;
              const Lb = null !== (Tb = bb(Ub, Yb, Bb)) && void 0 !== Tb ? Tb : null;
              vb && (vb.i !== Ub || vb.j !== Yb || vb.k !== Bb) && this.slotPool[eb] && (this.release(eb), this.record.fill(0), this.writeRecord(eb, this.record)), this.slotChunk[eb] = Lb, this.slotVersion[eb] = -1, (Lb || vb) && this.enqueue(eb)
            }
      }
      requeueStarved() {
        for (let bb = 0; bb < Fa; bb++) this.starved[bb] && this.slotChunk[bb] && this.enqueue(bb)
      }
      enqueue(bb) {
        this.queued[bb] || (this.queued[bb] = 1, this.queue.push(bb), this.queueSorted = !1)
      }
      drain(bb) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const bb = new Map;
          for (const ab of this.queue) bb.set(ab, this.slotDistance(ab));
          this.queue.sort(((ab, Ub) => bb.get(Ub) - bb.get(ab))), this.queueSorted = !0
        }
        const ab = performance.now();
        let Ub = 0;
        const Ab = [];
        for (; this.queue.length > 0 && (0 === Ub || performance.now() - ab < bb);) {
          const bb = this.queue.pop(),
            ab = this.slotChunk[bb];
          !ab || ab.Jab || UB(ab) ? (this.queued[bb] = 0, this.encodeSlot(bb), Ub++) : Ab.push(bb)
        }
        for (let Mb = Ab.length - 1; Mb >= 0; Mb--) this.queue.push(Ab[Mb])
      }
      slotDistance(bb) {
        const ab = this.slotChunk[bb],
          Ub = this.eyeChunk;
        return ab ? Math.max(Math.abs(ab.i - Ub[0]), Math.abs(ab.j - Ub[1]), Math.abs(ab.k - Ub[2])) : 0
      }
      inRadius(bb, ab, Ub) {
        const Ab = this.eyeChunk,
          [Mb, Tb, Eb] = Ia;
        return Math.abs(bb - Ab[0]) <= Mb && Math.abs(ab - Ab[1]) <= Tb && Math.abs(Ub - Ab[2]) <= Eb
      }
      release(bb) {
        const ab = this.slotPool[bb];
        if (ab) {
          for (let bb = ab.length - 1; bb >= 0; bb--) this.freePool[this.freeCount++] = ab[bb];
          this.slotPool[bb] = null
        }
      }
      encodeSlot(bb) {
        var ab, Ub, Ab, Mb, Tb;
        let Eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          Yb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Bb = null !== (ab = null === (Ub = this.slotPool[bb]) || void 0 === Ub ? void 0 : Ub.length) && void 0 !== ab ? ab : 0;
        this.release(bb), this.starved[bb] = 0;
        const eb = this.slotChunk[bb],
          vb = this.record;
        if (!eb || eb.Jab || !eb.RP) return this.slotChunk[bb] = null, this.slotVersion[bb] = -1, vb.fill(0), this.writeRecord(bb, vb), void(Bb > 0 && this.requeueStarved());
        this.slotVersion[bb] = eb.Nj;
        const Lb = this.encodeBricks(eb, bb, Eb, Yb);
        vb[0] = eb.i, vb[1] = eb.j, vb[2] = eb.k, vb[3] = Lb, this.writeRecord(bb, vb), null === (Ab = this.encoded) || void 0 === Ab || Ab.call(this, eb), Yb && (null !== (Mb = null === (Tb = this.slotPool[bb]) || void 0 === Tb ? void 0 : Tb.length) && void 0 !== Mb ? Mb : 0) < Bb && this.requeueStarved()
      }
      encodeBricks(bb, ab, Ub, Ab) {
        if (bb.gX) return Ga;
        const Mb = this.casters.blockCaster,
          {
            data: Tb,
            stride: Eb,
            offset: Yb
          } = bb.RP,
          [Bb, eb, vb] = Eb,
          Lb = Ha,
          {
            bricks: Pb,
            cells: Xb,
            special: jb
          } = Ub;
        Pb.fill(0), jb.fill(0);
        let Rb = 0,
          kb = 0,
          yb = 0;
        for (let Zb = 0; Zb < Lb; Zb++) {
          const ab = Zb >> 2,
            Ub = 3 & Zb,
            Ab = bb.LX[Zb],
            Eb = Ab === aB.d ? -1 : Ab < Mb.length ? Mb[Ab] : 0;
          if (0 !== Eb)
            for (let bb = 0; bb < Lb; bb++) {
              const Ab = bb >> 2,
                Db = 3 & bb;
              let zb = Yb + bb * Bb + Zb * eb;
              for (let bb = 0; bb < Lb; bb++, zb += vb) {
                let Yb = Eb;
                if (Yb < 0) {
                  const bb = Tb[zb];
                  if (Yb = bb < Mb.length ? Mb[bb] : 0, 0 === Yb) continue
                }
                const Bb = Ca(Ab, ab, bb >> 2),
                  eb = Va(Db, Ub, 3 & bb);
                Pb[3 * Bb + (eb >>> 5)] |= 1 << (31 & eb), Xb[Bb * ua + eb] = Yb, Rb++, yb = Zb, Yb === Oa ? kb++ : jb[Bb] = 1
              }
            }
        }
        return 0 === Rb ? Ga : 32768 === kb ? Qa | yb << 8 : (this.writePoolEntries(ab, Ub, Ab), this.writeVoxels(Ka + ab * oa, Pb), qa | yb << 8)
      }
      writePoolEntries(bb, ab, Ub) {
        const {
          bricks: Ab,
          cells: Mb,
          special: Tb
        } = ab, Eb = this.entry;
        let Yb = 0;
        for (let vb = 0; vb < ra; vb++) Yb += Tb[vb];
        if (0 === Yb) return;
        Ub && this.freeCount < Yb && this.evictBeyond(bb, Yb);
        const Bb = new Uint32Array(Ub ? Math.min(Yb, this.freeCount) : 0);
        let eb = 0;
        for (let vb = 0; vb < ra; vb++) {
          if (!Tb[vb]) continue;
          const Ub = 3 * vb;
          if (eb === Bb.length) {
            this.dropSpecials(ab, vb), this.starved[bb] = 1;
            continue
          }
          const Yb = this.freePool[--this.freeCount];
          Bb[eb++] = Yb;
          for (let bb = 0; bb < ua; bb++) {
            const ab = Ab[Ub + (bb >>> 5)] >>> (31 & bb) & 1 ? Mb[vb * ua + bb] : 0;
            1 & bb ? Eb[bb >> 1] |= ab << 16 : Eb[bb >> 1] = ab
          }
          Ab[Ub + 2] = Yb + 1, this.writePool(MU + 32 * Yb, Eb)
        }
        Bb.length > 0 && (this.slotPool[bb] = Bb)
      }
      evictBeyond(bb, ab) {
        const Ub = this.slotDistance(bb),
          Ab = [];
        for (let Mb = 0; Mb < Fa; Mb++) Mb !== bb && this.slotPool[Mb] && this.slotDistance(Mb) > Ub && Ab.push(Mb);
        Ab.sort(((bb, ab) => this.slotDistance(ab) - this.slotDistance(bb)));
        for (const Mb of Ab) {
          if (this.freeCount >= ab) return;
          const bb = this.slotChunk[Mb];
          bb && !bb.Jab && bb.RP && (bb.Nj === this.slotVersion[Mb] || UB(bb)) && this.encodeSlot(Mb, this.victimScratch, !1)
        }
      }
      dropSpecials(bb, ab) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const Ub = 3 * ab;
        for (let Ab = 0; Ab < ua; Ab++) bb.cells[ab * ua + Ab] !== Oa && (bb.bricks[Ub + (Ab >>> 5)] &= ~(1 << (31 & Ab)))
      }
    }
    var TB = Ub(36821);
    class EB {
      constructor(bb) {
        this.device = bb, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new RU, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.lL = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = bb.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = bb.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(bb, ab, Ub) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Ab
        } = this;
        Ab.bX(bb, ab), Ub.forEachSunShadowCaster((bb => {
          this.add(bb)
        })), Ab.finish();
        const Mb = 0 === Ab.parts;
        if (Mb && this.uploadedEmpty) return;
        this.uploadedEmpty = Mb;
        const {
          queue: Tb
        } = this.device, {
          words: Eb
        } = Ab;
        Tb.writeBuffer(this.frameBuffer, 0, Eb, 0, 16385), Ab.refs > 0 && Tb.writeBuffer(this.frameBuffer, 65540, Eb, BU, Ab.refs), Mb || Tb.writeBuffer(this.frameBuffer, 327684, Eb, eU, Ab.parts * YU)
      }
      add(bb) {
        const ab = this.gridFor(bb);
        if (!ab) return;
        const {
          frame: Ub
        } = this, {
          lL: Ab,
          worldAt: Mb,
          instances: Tb,
          instanceCount: Eb,
          thin: Yb
        } = bb;
        if (Tb)
          for (let Bb = 0; Bb < Eb; Bb++) Yb ? (yU(Tb, 16 * Bb, Ab, Mb, this.lL), Ub.add(ab, this.lL)) : Ub.add(ab, Tb, 16 * Bb);
        else Ub.add(ab, Ab, Mb)
      }
      gridFor(bb) {
        let {
          geometry: ab,
          indexed: Ub,
          first: Ab,
          count: Mb,
          skip: Tb
        } = bb, Eb = this.grids.get(ab);
        Eb || (Eb = new Map, this.grids.set(ab, Eb));
        const Yb = `${Ub?Ab:-1-Ab}:${Mb}:${null!==Tb&&void 0!==Tb?Tb:""}`;
        let Bb = Eb.get(Yb);
        if (void 0 !== Bb || this.gridsFull) return Bb;
        const eb = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = eb + 2;
        else if (eb > this.bakeDeadline) return;
        return Bb = this.bake(ab, Ub, Ab, Mb, Tb), void 0 !== Bb && Eb.set(Yb, Bb), Bb
      }
      bake(bb, ab, Ub, Ab, Mb) {
        const Tb = bb.vertexAttributes.find((bb => "position" === bb.kind)),
          Eb = Tb ? function(bb, ab, Ub, Ab) {
            let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Tb = bb => ab ? ab[Ub + bb] : Ub + bb,
              Eb = bb => null !== Mb && [0, 1, 2].some((ab => {
                const Ub = Tb(bb + ab);
                return Ub >= Mb[0] && Ub < Mb[1]
              })),
              Yb = [1 / 0, 1 / 0, 1 / 0],
              Bb = [-1 / 0, -1 / 0, -1 / 0];
            for (let Zb = 0; Zb + 2 < Ab; Zb += 3)
              if (!Eb(Zb))
                for (let ab = 0; ab < 3; ab++) {
                  const Ub = Tb(Zb + ab);
                  for (let ab = 0; ab < 3; ab++) Yb[ab] = Math.min(Yb[ab], bb[3 * Ub + ab]), Bb[ab] = Math.max(Bb[ab], bb[3 * Ub + ab])
                }
            const eb = Math.max(Bb[0] - Yb[0], Bb[1] - Yb[1], Bb[2] - Yb[2]);
            if (!(eb > 0)) return null;
            const vb = eb / 64,
              Lb = [0, 0, 0],
              Pb = [0, 0, 0],
              Xb = [0, 0, 0];
            for (let Zb = 0; Zb < 3; Zb++) Lb[Zb] = Math.min(65, Math.ceil((Bb[Zb] - Yb[Zb]) / vb) + 1), Pb[Zb] = Yb[Zb] - vb / 2, Xb[Zb] = Pb[Zb] + Lb[Zb] * vb;
            const jb = new Uint32Array(Math.ceil(Lb[0] * Lb[1] * Lb[2] / 32)),
              Rb = new Float64Array(9),
              kb = [0, 0, 0],
              yb = [0, 0, 0];
            for (let Zb = 0; Zb + 2 < Ab; Zb += 3)
              if (!Eb(Zb)) {
                for (let ab = 0; ab < 3; ab++) {
                  const Ub = Tb(Zb + ab);
                  for (let Ab = 0; Ab < 3; Ab++) Rb[3 * ab + Ab] = bb[3 * Ub + Ab]
                }
                for (let bb = 0; bb < 3; bb++) {
                  const ab = Math.min(Rb[bb], Rb[3 + bb], Rb[6 + bb]),
                    Ub = Math.max(Rb[bb], Rb[3 + bb], Rb[6 + bb]);
                  kb[bb] = Math.max(0, Math.floor((ab - Pb[bb]) / vb - 1e-6)), yb[bb] = Math.min(Lb[bb] - 1, Math.floor((Ub - Pb[bb]) / vb + 1e-6))
                }
                for (let bb = kb[2]; bb <= yb[2]; bb++)
                  for (let ab = kb[1]; ab <= yb[1]; ab++)
                    for (let Ub = kb[0]; Ub <= yb[0]; Ub++)
                      if (ZU(Rb, Pb[0] + (Ub + .5) * vb, Pb[1] + (ab + .5) * vb, Pb[2] + (bb + .5) * vb, vb / 2)) {
                        const Ab = Ub + Lb[0] * (ab + Lb[1] * bb);
                        jb[Ab >>> 5] |= 1 << (31 & Ab)
                      }
              } return {
              words: jb,
              lo: Pb,
              hi: Xb,
              cell: vb,
              dims: Lb
            }
          }((0, TB.g)(Tb, bb.vertexCount), ab ? bb.indexData : null, Ub, Ab, Mb) : null;
        if (!Eb) return null;
        const {
          words: Yb,
          ...Bb
        } = Eb;
        if (this.gridTop + Yb.length > LU) return void(this.gridsFull = !0);
        const eb = this.gridTop;
        return this.gridTop += Yb.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * eb, Yb), {
          ...Bb,
          at: eb
        }
      }
    }
    const YB = Math.cos(1 * Math.PI / 180);

    function BB(bb, ab) {
      return bb[0] * ab[0] + bb[1] * ab[1] + bb[2] * ab[2] < YB
    }
    async function eB(bb) {
      const {
        pixels: ab,
        width: Ub,
        height: Ab
      } = await uM(bb), Mb = new Uint8Array(Ub * Ab);
      for (let Tb = 0; Tb < Mb.length; Tb++) Mb[Tb] = ab[4 * Tb + 3];
      return {
        width: Ub,
        height: Ab,
        alpha: Mb
      }
    }
    class vB {
      constructor(bb, ab) {
        this.device = bb, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(zU.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = bb.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = bb.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * wa,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = bb.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [Ub, Ab, Mb] = zU.r;
        this.volume = bb.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: Ub,
            height: Ab,
            depthOrArrayLayers: Mb
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
          size: zU.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = ab ? new EB(bb) : null, this.entityStandIn = ab ? null : bb.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var bb, ab;
        const Ub = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || Ub.push("Lite sun shadow volume pipeline compiling");
        const Ab = null !== (bb = null === (ab = this.casters) || void 0 === ab ? void 0 : ab.planesLoading) && void 0 !== bb ? bb : 0;
        return Ab > 0 && Ub.push(`${Ab} Lite sun shadow plane casters loading their textures`), Ub
      }
      entries() {
        var bb, ab, Ub, Ab;
        const Mb = Na.n;
        return [{
          binding: Mb.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Mb.RP,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Mb.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Mb.volume,
          resource: this.volumeView
        }, {
          binding: Mb.sampler,
          resource: this.volumeSampler
        }, {
          binding: Mb.entities,
          resource: {
            buffer: null !== (bb = null === (ab = this.entities) || void 0 === ab ? void 0 : ab.frameBuffer) && void 0 !== bb ? bb : this.entityStandIn
          }
        }, {
          binding: Mb.entityGrids,
          resource: {
            buffer: null !== (Ub = null === (Ab = this.entities) || void 0 === Ab ? void 0 : Ab.gridBuffer) && void 0 !== Ub ? Ub : this.entityStandIn
          }
        }]
      }
      prepare(bb, ab, Ub) {
        var Ab;
        this.entitiesThisFrame = !1;
        const Mb = null !== (Ab = null === Ub || void 0 === Ub ? void 0 : Ub.sunShadowReach()) && void 0 !== Ab ? Ab : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!Ub || !Mb.sunShadow && !Mb.airShadow) return void(this.volumeHolds = null);
        if (bb.lL.j_ !== Ha) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${bb.lL.j_}; everything is lit.`)));
        const Tb = this.start(bb);
        this.casters.update(bb.wP, bb.wP.VP.length);
        const Eb = bb.vP;
        for (let Pb = 0; Pb < 3; Pb++) this.eye[Pb] = ab[Pb] + Eb[Pb];
        const Yb = (0, zU.C)(this.eye);
        this.staleNear = Yb;
        const Bb = bb.lL.Jj;
        Tb.update(this.eye, ((bb, ab, Ub) => Bb.nj(bb, ab, Ub)), 1);
        const eb = (0, zU.v)(Ub.I6()),
          vb = Tb.eyeChunk,
          Lb = this.uniformInts;
        for (let Pb = 0; Pb < 3; Pb++) Lb[Pb] = vb[Pb], Lb[4 + Pb] = Yb[Pb];
        this.entitiesThisFrame = null !== this.entities && Mb.sunShadow, this.entitiesThisFrame && jU(this.uniformFloats, 8, ab, eb), null !== this.volumeHolds && (this.castersWritten || BB(eb, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(Yb, eb, vb)
      }
      markStale(bb) {
        const ab = this.staleNear,
          Ub = Ha,
          Ab = [bb.i * Ub, bb.j * Ub, bb.k * Ub];
        for (let Tb = 0; Tb < 3; Tb++)
          if (Ab[Tb] + Ub <= ab[Tb] - Ub || Ab[Tb] >= ab[Tb] + zU.r[Tb] + Ub) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Mb = this.stale;
        for (let Tb = 0; Tb < Mb.length; Tb += 4)
          if (Mb[Tb] === bb.i && Mb[Tb + 1] === bb.j && Mb[Tb + 2] === bb.k) return void(Mb[Tb + 3] = this.swept);
        if (16 === Mb.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Mb.push(bb.i, bb.j, bb.k, this.swept)
      }
      writeStale() {
        const bb = this.swept,
          ab = this.stale;
        this.staleAll && bb - this.staleAllSwept >= zU.i && (this.staleAll = !1, ab.length = 0);
        let Ub = 0;
        for (let Mb = 0; Mb < ab.length; Mb += 4)
          if (bb - ab[Mb + 3] < zU.i) {
            for (let bb = 0; bb < 4; bb++) ab[Ub + bb] = ab[Mb + bb];
            Ub += 4
          } ab.length = Ub;
        const Ab = this.uniformInts;
        Ab[3] = this.staleAll ? 5 : Ub / 4;
        for (let Mb = 0; Mb < 4; Mb++)
          for (let bb = 0; bb < 3; bb++) Ab[16 + 4 * Mb + bb] = 4 * Mb < Ub ? ab[4 * Mb + bb] * Ha : 0
      }
      writeUniform() {
        const bb = this.uniformInts;
        let ab = this.uniformWritten;
        if (ab) {
          let Ub = !0;
          for (let Ab = 0; Ab < bb.length && Ub; Ab++) Ub = bb[Ab] === ab[Ab];
          if (Ub) return
        }
        ab ??= this.uniformWritten = new Int32Array(bb.length), ab.set(bb), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(bb) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, bb)
      }
      computeVolume(bb, ab, Ub) {
        const Ab = this.buildVolumePass();
        if (!Ab) return void(this.volumeHolds = null);
        const Mb = (0, zU.y)(this.volumeHolds, bb);
        this.volumeHolds = bb;
        const Tb = 1 === Mb.length && Mb[0].size.every(((bb, ab) => bb === zU.r[ab])),
          Eb = this.sweptChunk,
          Yb = this.sweptLight,
          Bb = ab[0] !== Yb[0] || ab[1] !== Yb[1] || ab[2] !== Yb[2],
          eb = Ub[0] !== Eb[0] || Ub[1] !== Eb[1] || Ub[2] !== Eb[2],
          vb = Bb && BB(ab, Yb);
        if ((Tb || this.written || eb || vb) && (this.fastLeft = zU.i), Tb || this.written || Bb || eb) {
          this.written = !1;
          for (let bb = 0; bb < 3; bb++) Eb[bb] = Ub[bb], Yb[bb] = ab[bb];
          this.sweepLeft = Tb ? 0 : zU.i
        }
        if (Tb ? this.swept += zU.i : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Mb.push(...(0, zU.F)(bb, this.slice)), this.slice = (this.slice + 1) % zU.i, this.swept++), 0 === Mb.length) return;
        const Lb = (0, zU.G)(this.workData, ab, Mb);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Pb = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Xb = Pb.beginComputePass({
            label: "sun-shadow-volume"
          });
        Xb.setPipeline(Ab.pipeline), Xb.setBindGroup(fU.group, Ab.bindGroup), Xb.dispatchWorkgroups(Math.ceil(Lb / zU.m)), Xb.end(), this.device.queue.submit([Pb.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const bb = fU,
          ab = GPUShaderStage.COMPUTE,
          Ub = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: bb.uniform,
              visibility: ab,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: bb.RP,
              visibility: ab,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: bb.special,
              visibility: ab,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: bb.work,
              visibility: ab,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: bb.volume,
              visibility: ab,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Ab = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: Ub,
            entries: [{
              binding: bb.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: bb.RP,
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
            bindGroupLayouts: [Ub]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: mU()
            }),
            entryPoint: "main"
          }
        }).then((bb => {
          this.volumePass = {
            pipeline: bb,
            bindGroup: Ab
          }
        }), (bb => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(bb)}`)
        })), null
      }
      start(bb) {
        if (this.window) return this.window;
        const ab = (bb, ab) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * bb, ab)
        };
        this.casters = new bB(((bb, Ub) => {
          this.castersWritten = !0, ab(bb, Ub)
        }), eB);
        const Ub = new MB(this.casters, ((bb, ab) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * bb, ab)
        }), ab);
        return Ub.encoded = bb => {
          this.markStale(bb)
        }, bb.lL.on("chunkAdded", (bb => {
          Ub.chunkAdded(bb)
        })), this.window = Ub, Ub
      }
    }
    var LB = Ub(38008),
      PB = Ub(38010);
    const XB = 0,
      jB = 3,
      RB = 4,
      kB = 5;

    function yB(bb, ab, Ub, Ab) {
      bb.drawOffset(ab, Ab + XB), ab[Ab + jB] = bb.drawTime(), Ub[Ab + RB] = bb.ring.drawStart(), Ub[Ab + kB] = bb.ring.drawCount()
    }
    const ZB = `\n${RA}\n\nconst MAX_STOPS = ${PB.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${PB.c/4}>,\n\tcolor1: array<vec4f, ${PB.c}>,\n\tcolor2: array<vec4f, ${PB.c}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${PB.c}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${PB.c}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var DB = Ub(40743);
    class zB {
      constructor(bb, ab, Ub, Ab) {
        this.device = bb, this.system = ab, this.frameIndex = Ub, this.bindings = Ab, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, DB.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (bb, ab) => {
          this.device.queue.writeBuffer(this.ring, bb * PB.e * 4, this.system.ring.records, bb * PB.e, (ab - bb) * PB.e)
        };
        const {
          name: Mb
        } = ab;
        this.ring = bb.createBuffer({
          label: `particles-${Mb}`,
          size: ab.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = bb.createBuffer({
          label: `particles-uniforms-${Mb}`,
          size: 4 * PB.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(bb) {
        const ab = (0, DB.c)(this.system, this.uniformBits, bb);
        ab && (this.uniformBits = ab, this.device.queue.writeBuffer(this.uniforms, 0, ab))
      }
      bind() {
        const {
          system: bb
        } = this, ab = this.texture;
        (0, DB.j)(bb, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${bb.name}`,
          size: [PB.m, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * PB.m
        }, [PB.m, 1]));
        const Ub = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === ab.view && this.boundSampler === ab.sampler && this.boundRamp === Ub || (this.boundView = ab.view, this.boundSampler = ab.sampler, this.boundRamp = Ub, this.bindGroup = this.device.createBindGroup({
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
            resource: ab.sampler
          }, {
            binding: 3,
            resource: ab.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: Ub
          }]
        }))
      }
      destroy() {
        var bb;
        this.ring.destroy(), this.uniforms.destroy(), null === (bb = this.ramp) || void 0 === bb || bb.destroy()
      }
    }
    class xB {
      constructor(bb, ab) {
        this.device = bb, this.resources = ab, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, ea.d)();
        const Ub = bb.createBindGroupLayout({
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
          bindGroupLayouts: [aa(bb), Ub, this.frameLayout]
        }), this.module = bb.createShaderModule({
          label: "particles",
          code: ZB
        });
        const Ab = bb.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        bb.queue.writeTexture({
          texture: Ab
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: Ub,
          rampSampler: bb.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Ab.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (ab, Ub) => (this.bindTarget(Ub), {
            renderable: this.renderable,
            pipeline: Ea(bb, Ub),
            draw: bb => Ub === this.preparedTarget ? this.draw(bb) : 0
          })
        }
      }
      get QAb() {
        return this.systems.size
      }
      reset() {
        for (const bb of this.systems.keys()) bb.reset()
      }
      describePendingWork() {
        return (0, LB.f)(this.systems.keys(), "Lite")
      }
      OW(bb, ab) {
        const Ub = new LB.e(bb, ab, this);
        return this.systems.set(Ub, new zB(this.device, Ub, this.allocateFrameIndex(), this.bindings)), Ub
      }
      u9(bb, ab) {
        for (const Ub of this.systems.keys()) Ub.u9(bb, ab)
      }
      canDraw(bb) {
        const ab = this.systems.get(bb),
          Ub = bb.texture ? this.resources.boundTexture(bb.texture) : null;
        if (!ab || !Ub || !this.targetPipelines) return !1;
        if (ab.texture = Ub, ab.pipelines.length = 0, !tM(bb.blendMode)) return this.warnOnce(`blend:${bb.blendMode}`, `particle blend mode ${bb.blendMode} is not drawn (${bb.name})`), !0;
        const Ab = (0, HM.j)(bb.blendMode);
        for (const Mb of Ab) {
          const bb = this.pipelineFor(Mb);
          if (!1 === bb) return ab.pipelines.length = 0, !0;
          bb && ab.pipelines.push(bb)
        }
        return ab.pipelines.length === Ab.length
      }
      disposeStopped(bb) {
        bb.dispose()
      }
      remove(bb) {
        const ab = this.systems.get(bb);
        ab && (this.systems.delete(bb), ab.destroy(), this.freeFrameIndices.push(ab.frameIndex))
      }
      prepare(bb) {
        const ab = bb.animationRatio || 1;
        Ya(this.renderable._worldCenter, bb, Aa), this.preparedTarget = this.target, this.draws.length = 0;
        let Ub = 0;
        for (const Ab of this.systems.values()) {
          const bb = Ab.system;
          if (!bb.animateIfActive(ab)) continue;
          if (bb.ring.takeUploads(Ab.upload), !bb.hasLiveParticles() || 0 === Ab.pipelines.length) continue;
          Ab.writeUniforms(this.warnOnce), Ab.bind();
          const Mb = 64 * Ab.frameIndex;
          Ab.count = bb.ring.drawCount(), yB(bb, this.frameData, this.frameBits, Mb), Ub = Math.max(Ub, Mb + 64), this.draws.push(Ab)
        }
        Ub > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, Ub)
      }
      draw(bb) {
        let ab = 0,
          Ub = null;
        for (const Ab of this.draws) {
          bb.setBindGroup(1, Ab.bindGroup), bb.setBindGroup(2, this.frameBindGroup, [256 * Ab.frameIndex]);
          for (const Mb of Ab.pipelines) Mb !== Ub && (bb.setPipeline(Mb), Ub = Mb), bb.draw(4, Ab.count), ab++
        }
        return ab
      }
      bindTarget(bb) {
        this.target = bb;
        const ab = `${bb._colorFormat}|${bb._depthStencilFormat}|${bb._depthCompare}|${bb._sampleCount}`;
        let Ub = this.pipelines.get(ab);
        Ub || (Ub = new Map, this.pipelines.set(ab, Ub)), this.targetPipelines = Ub
      }
      pipelineFor(bb) {
        var ab;
        const Ub = this.targetPipelines,
          Ab = Ub.get(bb);
        if (void 0 !== Ab) return Ab;
        Ub.set(bb, null);
        const Mb = this.target,
          Tb = bb === HM.e,
          Eb = null !== (ab = Mb._depthCompare) && void 0 !== ab ? ab : Ua;
        return this.device.createRenderPipelineAsync({
          label: `particles-${bb}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: Jb({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Tb ? 1 : 0
            }
          }, Mb, wM((0, HM.g)(bb))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Mb._depthStencilFormat ? {
            format: Mb._depthStencilFormat,
            depthCompare: Eb,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Mb._sampleCount
          }
        }).then((ab => {
          Ub.set(bb, ab)
        }), (ab => {
          Ub.set(bb, !1), console.error("Lite particle pipeline failed", ab), CM("particles", `blend-${bb}`, ab)
        })), null
      }
      allocateFrameIndex() {
        const bb = this.freeFrameIndices.pop();
        if (void 0 !== bb) return bb;
        const ab = this.nextFrameIndex++;
        if (64 * (ab + 1) > this.frameData.length) {
          const bb = new Float32Array(2 * this.frameData.length);
          bb.set(this.frameData), this.frameData = bb, this.frameBits = new Uint32Array(bb.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return ab
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
    class iB {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.lite = bb, this.canvas = ab, this.info = Ub, this.resources = Mb, this.hUb = !1, this.needPOTTextures = !1, this.xJ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = ab.width, this.renderHeight = ab.height, this.caps = {
          maxTextureSize: Ab.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Ab.maxTextureArrayLayers
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
      setSize(bb, ab) {
        if (this.renderWidth === bb && this.renderHeight === ab) return !1;
        const Ub = this.renderWidth,
          Ab = this.renderHeight;
        this.renderWidth = bb, this.renderHeight = ab;
        try {
          (0, ob.r)(this.lite, bb, ab)
        } catch (Mb) {
          if (Mb instanceof DOMException && "InvalidStateError" === Mb.name) {
            this.renderWidth = Ub, this.renderHeight = Ab;
            try {
              (0, ob.r)(this.lite, Ub, Ab)
            } catch {
              this.canvas.width = Ub, this.canvas.height = Ab
            }
            return console.warn("WebGPU could not allocate render targets for resize", bb, ab, Mb.message), !1
          }
          throw Mb
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
      eD() {
        const bb = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : bb - this.lastFrameTime, this.lastFrameTime = bb
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(bb, ab) {
        const Ub = document.createElement("canvas");
        return Ub.width = bb, Ub.height = ab, Ub
      }
      NJ(bb, ab) {
        var Ub;
        return null !== (Ub = this.resources.NJ.get(bb)) && void 0 !== Ub ? Ub : new sb(this.resources, bb, ab)
      }
      atlasArray(bb, ab, Ub) {
        return this.resources.atlasArray(bb, ab, Ub)
      }
    }
    class fB {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(bb) {
        this.fov = bb.fov, this.nearPlane = bb.near, this.farPlane = bb.far;
        const ab = bb.worldMatrix;
        for (let Ub = 0; Ub < 16; Ub++)
          if (this.worldMatrix[Ub] !== ab[Ub]) return this.worldMatrix.set(ab), void this.worldMatrixVersion++
      }
    }
    class mB {
      constructor(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
        let vb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = bb, this.ZR = ab, this.sceneTask = Ub, this.gpuDevice = Ab, this.terrain = Mb, this.meshes = Tb, this.particles = Eb, this.resources = Yb, this.sunShadow = vb, this.Eab = void 0, this.backendName = "WebGPU (Lite)", this.X3 = void 0, this.modelMeshes = void 0, this.camera = new fB, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new tb(Ab.lost), this.deviceLost = this.refusals.deviceLost, this.Eab = new iB(bb, Bb, eb, Ab.limits, Yb), (0, Wb.L)({
          PY: bb => {
            Fb(bb) && Yb.textureSlot(bb)
          },
          loaded: bb => Fb(bb) ? Yb.textureLoaded(bb) : null,
          canvasUpdated: (bb, ab, Ub) => {
            Fb(bb) && Yb.canvasUpdated(bb, ab, Ub)
          }
        }), this.X3 = Tb.X3, this.modelMeshes = Tb.modelMeshes, ab.camera = this.camera
      }
      get castsEntitySunShadows() {
        var bb, ab;
        return null !== (bb = null === (ab = this.sunShadow) || void 0 === ab ? void 0 : ab.tracesEntities) && void 0 !== bb && bb
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(bb) {
        this.modelMeshes.attach(bb.model, bb.sceneMirror);
        const ab = bb.ZR;
        this.setClearColour(ab.clearColor.r, ab.clearColor.g, ab.clearColor.b), ab.draw = () => {
          this.drawFrame(bb, ab)
        }
      }
      render(bb) {
        try {
          this.Eab.eD(), bb.ZR.render()
        } catch (ab) {
          throw this.refusals.frameFailed(ab), ab
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var bb, ab, Ub, Ab;
        const Mb = [...this.particles.describePendingWork(), ...null !== (bb = null === (ab = this.sunShadow) || void 0 === ab ? void 0 : ab.describePendingWork()) && void 0 !== bb ? bb : []],
          Tb = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (Ub = this.terrain.sceneDepth) && void 0 !== Ub && Ub.compiling ? 1 : 0) + (null !== (Ab = this.terrain.shadowMask) && void 0 !== Ab && Ab.compiling ? 1 : 0);
        Tb > 0 && Mb.push(`${Tb} Lite pipelines compiling`);
        const Eb = this.terrain.buffersAwaitingVerdict;
        Eb > 0 && Mb.push(`${Eb} Lite terrain buffers awaiting their out-of-memory verdict`);
        const Yb = this.resources.texturesLoading;
        return Yb > 0 && Mb.push(`${Yb} Lite textures loading`), Mb
      }
      prepareTexture(bb) {
        return null !== this.resources.boundTexture(bb) || this.resources.textureFailed(bb)
      }
      drawFrame(bb, ab) {
        var Ub, Ab, Mb, Tb, Eb, Yb;
        const Bb = eY(bb);
        this.camera.copyFromView(Bb), this.setClearColour(Bb.clearColour[0], Bb.clearColour[1], Bb.clearColour[2]), null === (Ub = this.sunShadow) || void 0 === Ub || Ub.prepare(bb.VL, Bb.eye, null !== (Ab = bb.VL.QX) && void 0 !== Ab ? Ab : null), this.terrain.prepare(bb, Bb), null === (Mb = this.terrain.sceneDepth) || void 0 === Mb || Mb.setPlanes(Bb.near, Bb.far), null === (Tb = this.terrain.shadowMask) || void 0 === Tb || Tb.prepare(Bb), VE(this.sceneTask), this.meshes.prepare(ab, Bb, bb.model.earthSky, null !== (Eb = bb.VL.QX) && void 0 !== Eb ? Eb : null), this.particles.prepare(Bb);
        const eb = performance.now();
        this.resources.flushUploads(), null === (Yb = this.sunShadow) || void 0 === Yb || Yb.traceEntities(this.meshes);
        try {
          (0, ob.p)(this.engine, this.lastFrameTime > 0 ? eb - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = eb
      }
      setClearColour(bb, ab, Ub) {
        const Ab = this.ZR.clearColor;
        Ab.r = bb, Ab.g = ab, Ab.b = Ub, Ab.a = 1
      }
    }
    const pB = "WebGPU device lost while Lite was starting";

    function NB(bb, ab) {
      return "object" === typeof bb && null !== bb ? Object.assign(bb, {
        startStep: ab
      }) : bb
    }
    async function WB(bb, ab) {
      const Ub = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!Ub) throw NB(new Error("No WebGPU adapter"), "no_adapter");
      const Ab = Ub.info,
        Mb = {
          vendor: (null === Ab || void 0 === Ab ? void 0 : Ab.vendor) || "unknown vendor",
          renderer: (null === Ab || void 0 === Ab ? void 0 : Ab.architecture) || "unknown renderer",
          version: (null === Ab || void 0 === Ab ? void 0 : Ab.description) || "unknown version"
        },
        Tb = function(bb) {
          const ab = {};
          for (const Ub in bb.limits) {
            const Ab = bb.limits[Ub];
            "number" === typeof Ab && (ab[Ub] = Ab)
          }
          return ab
        }(Ub);
      let Eb;
      bb.style.background = "black";
      try {
        Eb = await (0, ob.i)(bb, {
          msaaSamples: ab.Cab ? 4 : 1,
          requiredLimits: Tb,
          alphaMode: "premultiplied"
        })
      } catch (vb) {
        throw NB(vb, "#47" === (null === (Yb = vb) || void 0 === Yb ? void 0 : Yb.message) ? "no_adapter" : "device")
      }
      var Yb;
      const Bb = function(bb) {
        return bb._device
      }(Eb);
      let eb = null;
      Bb.lost.then((bb => {
        eb = bb, console.error(`WebGPU device lost (${bb.reason}): ${bb.message}`)
      }));
      try {
        const Ub = await async function(bb, ab, Ub, Ab, Mb, Tb) {
          const Eb = (0, lb.d)(bb),
            Yb = new sE(bb, ab),
            Bb = new gY(ab),
            eb = new NE(ab, Yb, (bb => function(bb, ab) {
              for (const Ab of Sb(bb)) {
                var Ub;
                if (Ab._targetSignature === ab) return null !== (Ub = Ab._sceneBG) && void 0 !== Ub ? Ub : null
              }
              return null
            }(Eb, bb))),
            vb = new xB(ab, Yb);
          for (const Xb of function(bb, ab, Ub) {
              return [ab.opaqueRenderable, bb.opaqueRenderable, bb.skyLastRenderable, Ub.renderable, ab.transparentRenderable, bb.transparentRenderable, bb.frontRenderable]
            }(eb, Bb, vb)) nb(Eb, Xb);
          const Lb = function(bb) {
            for (const ab of Sb(bb))
              if ("ZR" === ab.name) return ab;
            throw new Error("Lite: the scene has no render task named scene")
          }(Eb);
          Mb && Bb.installSceneDepth(Lb, bb);
          const Pb = Tb ? new vB(ab, Tb.entities) : null;
          Bb.sunShadow = Pb, Pb && null !== Tb && void 0 !== Tb && Tb.entities && (Bb.shadowMask = new mY(ab, Lb, bb, Bb));
          return eb.sunShadow = Pb, await (0, lb.h)(Eb), new mB(bb, Eb, Lb, ab, Bb, eb, vb, Yb, Ub, Ab, Pb)
        }(Eb, Bb, bb, Mb, ab.sceneDepth, ab.sunShadow);
        if (null !== eb) {
          const {
            reason: bb,
            message: ab
          } = eb;
          throw Object.assign(new Error(`${pB} (${bb}): ${ab}`), {
            fallbackReason: pB
          })
        }
        return Ub
      } catch (vb) {
        throw Bb.destroy(), null === eb ? vb : NB(vb, "device")
      }
    }
  },
  40003: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      g: () => Ab,
      i: () => Pb,
      k: () => vb,
      l: () => kb,
      m: () => Tb,
      n: () => Yb,
      q: () => Bb,
      t: () => Eb,
      v: () => Rb,
      x: () => Xb,
      y: () => jb
    });
    const Ab = 3,
      Mb = 0,
      Tb = 1,
      Eb = 2,
      Yb = {
        uniform: 3,
        RP: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Bb = 10,
      eb = "BloxdPackInputs",
      vb = "bloxdPackInputs",
      Lb = [{
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
      Pb = 80;

    function Xb() {
      const bb = Lb.map((bb => {
        let {
          name: ab,
          type: Ub
        } = bb;
        return `    ${ab}: ${Ub},\n`
      })).join("");
      return `struct ${eb} {\n${bb}}\n@group(${Ab}) @binding(${Mb}) var<uniform> ${vb}: ${eb};\n`
    }

    function jb(bb, ab) {
      const Ub = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Pb),
        [Ab, Mb, Tb, Eb, Yb, Bb] = Lb;
      Ub.setFloat32(Ab.offset, ab.seconds, !0), Ub.setUint32(Mb.offset, ab.lit ? 1 : 0, !0);
      for (let eb = 0; eb < 3; eb++) Ub.setInt32(Tb.offset + 4 * eb, ab.renderOffset[eb], !0), Ub.setFloat32(Eb.offset + 4 * eb, ab.I6[eb], !0), Ub.setFloat32(Yb.offset + 4 * eb, ab.eyePosition[eb], !0), Ub.setFloat32(Bb.offset + 4 * eb, ab.shadowDirection[eb], !0)
    }

    function Rb(bb) {
      const ab = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, Ub) => {
        let {
          id: Ab,
          rotation: Mb
        } = bb;
        ab[Ub] = 65535 & Ab | (3 & Mb) << 16
      })), ab
    }
    const kb = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);