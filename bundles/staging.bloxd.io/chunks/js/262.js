export const id = 262;
export const ids = [262];
export const modules = {
  41072: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ob,
      d: () => Lb,
      f: () => Ub,
      j: () => Sb
    });
    var Bb = hb(36889),
      Ob = hb(38329),
      Gb = hb(38323);

    function Ub(bb, ub, hb, Bb) {
      const Ob = Gb.v;
      ub.fill(0), bb.gravity.toArray(ub, Ob.gravity), bb.colorDead.toArray(ub, Ob.colorDead), hb[Ob.ramp] = bb.useRampGradients ? 1 : 0;
      const Ub = bb.getColorGradients(),
        Lb = wb(bb, Ub, "colour", Bb);
      hb[Ob.colorCount] = Lb;
      for (let Gb = 0; Gb < Lb; Gb++) {
        var Yb;
        const bb = Ub[Zb(Ub, Gb)];
        ub[Ob.colorPositions + Gb] = bb.gradient, bb.color1.toArray(ub, Ob.color1 + 4 * Gb), (null !== (Yb = bb.color2) && void 0 !== Yb ? Yb : bb.color1).toArray(ub, Ob.color2 + 4 * Gb)
      }
      const Sb = bb.getVelocityGradients(),
        ab = wb(bb, Sb, "Mp", Bb);
      hb[Ob.velocityCount] = ab;
      for (let Gb = 0; Gb < ab; Gb++) lb(ub, Ob.Mp + 4 * Gb, Sb[Zb(Sb, Gb)]);
      const Hb = bb.useRampGradients ? bb.getColorRemapGradients() : null,
        Xb = wb(bb, Hb, "colour remap", Bb);
      hb[Ob.remapCount] = Xb;
      for (let Gb = 0; Gb < Xb; Gb++) lb(ub, Ob.remap + 4 * Gb, Hb[Zb(Hb, Gb)])
    }

    function Lb() {
      return {
        key: [],
        texels: new Uint8Array(4 * Gb.j)
      }
    }
    const Yb = [];

    function Sb(bb, ub) {
      return ab(bb, Yb), !Ab(Yb, ub.key) && (ub.key.length = 0, ub.key.push(...Yb), ub.key.length > 0 && function(bb, ub) {
        for (let hb = 0; hb < Gb.j; hb++) Ob.k.GetCurrentGradient(hb / Gb.j, bb, ((bb, ub, hb) => {
          Bb.Color3.LerpToRef(bb.color, ub.color, hb, Hb)
        })), ub[4 * hb] = 255 * Hb.r, ub[4 * hb + 1] = 255 * Hb.g, ub[4 * hb + 2] = 255 * Hb.b, ub[4 * hb + 3] = 255
      }(bb.getRampGradients(), ub.texels), !0)
    }

    function ab(bb, ub) {
      ub.length = 0;
      const hb = bb.useRampGradients ? bb.getRampGradients() : null;
      if (null !== hb && void 0 !== hb && hb.length) {
        ub.push(hb.length);
        for (const bb of hb) ub.push(bb.gradient, bb.color.r, bb.color.g, bb.color.b)
      }
    }
    const Hb = new Bb.Color3;

    function wb(bb, ub, hb, Bb) {
      return ub ? ub.length > Gb.b ? (Bb(`particleStops:${hb}`, `GPU particles use the first 2 and last ${Gb.b-2} of more than ${Gb.b} ${hb} gradient stops (${bb.name})`), Gb.b) : ub.length : 0
    }

    function Zb(bb, ub) {
      return ub < 2 || bb.length <= Gb.b ? ub : bb.length - Gb.b + ub
    }
    const Xb = new Float32Array(Gb.p),
      pb = new Uint32Array(Xb.buffer);

    function ob(bb, ub, hb) {
      return Ub(bb, Xb, pb, hb), ub && Ab(pb, ub) ? null : pb.slice()
    }

    function Ab(bb, ub) {
      if (bb.length !== ub.length) return !1;
      for (let hb = 0; hb < bb.length; hb++)
        if (bb[hb] !== ub[hb]) return !1;
      return !0
    }

    function lb(bb, ub, hb) {
      var Bb;
      bb[ub] = hb.gradient, bb[ub + 1] = hb.factor1, bb[ub + 2] = null !== (Bb = hb.factor2) && void 0 !== Bb ? Bb : hb.factor1
    }
  },
  41065: (bb, ub, hb) => {
    function Bb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const ub = new Set;
      return (hb, Bb) => {
        ub.has(hb) || (ub.add(hb), console.warn(bb + Bb))
      }
    }
    hb.d(ub, {
      d: () => Bb
    })
  },
  41110: (bb, ub, hb) => {
    hb.d(ub, {
      createLiteRendererAsync: () => xY,
      liteBabylonBackend: () => mb,
      setPipelineFailureHook: () => VO
    });
    var Bb = hb(36889),
      Ob = hb(37241),
      Gb = hb(37501),
      Ub = hb(36846),
      Lb = hb(37509);
    class Yb extends Lb.b {
      constructor() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        super(...ub), this.color = new Bb.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: ub[0].ZN().getUniqueId(),
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
    const Sb = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      ab = bb => 1 << Sb.indexOf(bb),
      Hb = ab("VERTEXCOLOR"),
      wb = ab("INSTANCES"),
      Zb = ab("THIN_INSTANCES"),
      Xb = ab("INSTANCESCOLOR"),
      pb = ab("FOG"),
      ob = ab("LITE_FRONT_LAYER");

    function Ab(bb, ub, hb, Bb) {
      let Ob = 0;
      return bb.isVerticesDataPresent("color") && (Ob |= Hb), "none" !== ub && (Ob |= wb), "thin" === ub && (Ob |= Zb, bb.isVerticesDataPresent("instanceColor") && (Ob |= Xb)), Bb.fogEnabled && bb.applyFog && 0 !== Bb.fogMode && (Ob |= pb), hb >= 1 && (Ob |= ob), Ob
    }

    function lb(bb, ub) {
      bb.updateColor4("color", ub.color, ub.alpha)
    }
    var Kb = hb(37449),
      Wb = hb(37054),
      Cb = hb(36928),
      db = hb(36814),
      rb = hb(37436),
      jb = hb(37444),
      nb = hb(36836),
      Db = hb(36841),
      xb = hb(36855);
    const zb = db.d.GLSL;
    class gb {
      constructor(bb, ub) {
        this.name = bb, this.Xp = ub, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.XN = {
          addOnce: bb => {
            this.disposers.push(bb)
          }
        }, this.uniqueId = ub.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      ZN() {
        return this.Xp
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
        return (0, nb.P)(this.model, bb.visibility, bb.hasVertexAlpha)
      }
      needAlphaTestingForMesh(bb) {
        return (0, nb.Q)(this.model, bb.visibility, bb.hasVertexAlpha)
      }
      dispose() {
        (0, Wb.i)(this);
        for (const bb of this.disposers.splice(0)) bb()
      }
      get model() {
        return (0, nb._)(this)
      }
    }
    const ib = new WeakSet;

    function vb(bb) {
      return ib.has(bb)
    }

    function tb(bb) {
      ib.add(bb)
    }
    const Jb = {
      create: (bb, ub) => ((0, Cb.q)(bb, new gb(bb.name, ub)), Db.e.defines()),
      write: () => {},
      addFeature: (bb, ub) => {
        const hb = bb.mirror;
        ub.feature === jb.i && ub.state.dirLightCount > 0 && (bb.disableLighting = !0, (0, nb.Y)(bb)), "BLOXD_LIGHTING" in ub.defines && (0, Wb.h)(hb), ub.feature === rb.h && ((0, Kb.h)(ub.state, zb), function(bb, ub) {
          const hb = bb.ZN().UX();
          ub.textures.forEach(((Bb, Ob) => {
            setTimeout((() => {
              var Gb, Ub;
              const {
                url: Lb
              } = Bb.source;
              hb.atlasArray(Lb, null !== (Gb = null === (Ub = ub.sources.pixels) || void 0 === Ub ? void 0 : Ub[Ob]) && void 0 !== Gb ? Gb : null, ub.sources.layerWidth).then((hb => {
                (0, Kb.b)(bb, ub, Ob, hb, hb.layerWidth, hb.layers, zb)
              })).catch((bb => {
                console.error(`Failed to build texture array for atlas ${Ob}`, bb)
              }))
            }))
          }))
        }(hb, ub.state))
      },
      texture: (bb, ub, hb) => {
        let {
          data: Bb,
          sets: Ob
        } = hb;
        var Gb;
        (tb(bb), Bb) && (bb.uvSet = null !== (Gb = null === Ob || void 0 === Ob ? void 0 : Ob.coordinatesIndex) && void 0 !== Gb ? Gb : 0, (0, Cb.ab)(bb.matrix, null !== Ob && void 0 !== Ob ? Ob : {}))
      },
      cube: tb,
      canvas: (bb, ub, hb) => {
        let {
          width: Bb,
          height: Ob,
          mipmaps: Gb,
          samplingMode: Ub = xb.i.trilinear,
          hasAlpha: Lb = !1,
          wrap: Yb = xb.d.clamp
        } = hb;
        const Sb = bb.UX().createCanvas(Bb, Ob),
          ab = new xb.l("2d", {
            kind: "canvas",
            width: Bb,
            height: Ob,
            canvas: Sb
          }, {
            samplingMode: Ub,
            wrapU: Yb,
            wrapV: Yb,
            noMipmap: !Gb,
            invertY: !0
          });
        return ab.hasAlpha = Lb, tb(ab), ab
      }
    };
    var eb = hb(37077),
      Nb = hb(36753);
    class sb {
      constructor(bb, ub, hb) {
        this.engine = bb, this.clearColor = ub, this.ambientColor = hb, this.onBeforeRenderObservable = new Nb.e, this.onBeforeCameraRenderObservable = new Nb.e, this.onAfterRenderObservable = new Nb.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.fW = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      UX() {
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
        const ub = this.pending.indexOf(bb); - 1 !== ub && this.pending.splice(ub, 1)
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

    function Mb() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const mb = {
      zhb: Mb,
      TBb: (bb, ub) => {
        const hb = new sb(bb.engine, Bb.b.FromArray(ub.clearColor), Bb.Color3.FromArray(ub.ambientColor));
        (0, Ub.c)(Jb, hb), bb.Xp = hb,
          function(bb, ub) {
            const hb = Object.assign((0, eb.i)(bb, "camera"), {
              layerMask: 268435455
            });
            bb.model.nodes.setWorldSource(hb.row, bb.model.view.worldMatrix), bb.camera = ub.activeCamera = hb
          }(bb, hb), (0, Ob.f)(bb, ((bb, ub, hb) => (0, Gb.g)(bb, ub, hb, Lb.b)))
      },
      VBb: () => {},
      setBabylonFog: () => {},
      QBb: Mb,
      uOb: () => {},
      linesFromArrays: (bb, ub, hb) => (0, Gb.g)(bb, ub, hb, Yb),
      Ap: () => {},
      bOb: Mb
    };
    var Ib = hb(41164),
      Pb = hb(41181);
    class qb {
      constructor(bb) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const ub = new Promise((bb => {
          this.refused = bb
        }));
        this.deviceLost = Promise.race([bb, ub])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(bb) {
        (function(bb) {
          const {
            name: ub,
            message: hb
          } = null !== bb && void 0 !== bb ? bb : {};
          return "InvalidStateError" === ub && "string" === typeof hb && hb.startsWith("GPUDevice.")
        })(bb) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: bb.message,
          framesRefused: !0
        }))
      }
    }
    class Eb {
      constructor(bb) {
        this.resources = bb, this.matrixKey = {
          LH: 0
        }, this.attributesKey = {
          LH: 0
        }, this.inputs = Object.create(null);
        for (let ub = 0; ub < 4; ub++) this.inputs[`world${ub}`] = new Fb(this.matrixKey, 16 * ub, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(bb, ub) {
        this.resources.vertexBufferCreated(this.matrixKey, bb, !0), ub && this.resources.vertexBufferCreated(this.attributesKey, ub, !0)
      }
    }
    class yb extends Eb {
      constructor(bb, ub, hb) {
        super(bb), this.mesh = ub, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Bb = this.inputs;
        let Ob = 0;
        for (const {
            size: Ub
          }
          of hb) Ob += Ub;
        for (const {
            name: Ub,
            offset: Lb,
            size: Yb,
            type: Sb
          }
          of hb) Bb[Ub] = new Fb(this.attributesKey, 4 * Lb, 4 * Ob, Yb, !0, Sb);
        this.rowStride = Ob, bb.y5.set(ub, this);
        const Gb = ub.isVerticesDataPresent;
        ub.isVerticesDataPresent = (bb, hb) => bb in Bb || Gb.call(ub, bb, hb)
      }
      attach(bb, ub) {
        this.matrices = bb, this.attributes = ub, this.bind(bb, ub), this.mirror(bb, bb.length, bb.length / 16)
      }
      p_(bb) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, bb ? 64 * bb : void 0)
      }
      o_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(bb, ub) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * bb, 16 * ub)
      }
      attributeRows(bb, ub) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, bb * this.rowStride, ub * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(bb, ub, hb) {
        const Bb = this.mesh._thinInstanceDataStorage;
        Bb.matrixData = bb, Bb.matrixBufferSize = ub, Bb.worldMatrices = null, Bb.instancesCount = hb
      }
    }
    class Vb extends Eb {
      constructor(bb, ub, hb) {
        var Bb, Ob, Gb, Ub;
        super(bb), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.interleavedKinds) && void 0 !== Bb ? Bb : null, this.offsets = null !== (Ob = null === hb || void 0 === hb ? void 0 : hb.interleavedOffsets) && void 0 !== Ob ? Ob : [], this.rowStride = null !== (Gb = null === hb || void 0 === hb ? void 0 : hb.interleavedRowStride) && void 0 !== Gb ? Gb : 0, null === (Ub = this.layout) || void 0 === Ub || Ub.forEach(((bb, ub) => {
          this.inputs[bb] = new Fb(this.attributesKey, 4 * this.offsets[ub], 4 * this.rowStride, hb.strides[bb])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), bb.batchUploads.set(ub, this), ub.XN.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(bb) {
        const ub = this.packedBatch;
        return ub.renderSelf ? 0 === bb ? this.packedSource : ub.instances[bb - 1] : ub.instances[bb]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(bb, ub, hb, Bb) {
        const Ob = (ub.renderSelf ? 1 : 0) + ub.rows.length;
        if (this.frame = Bb, this.count = Ob, this.packedSource = bb, this.packedBatch = ub, 0 === Ob) return;
        if (bb.getWorldMatrix(), 16 * Ob > this.matrices.length) {
          let bb = this.matrices.length / 16;
          for (; bb < Ob;) bb *= 2;
          this.matrices = new Float32Array(16 * bb), this.attributes &&= new Float32Array(bb * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Gb = 0;
        ub.renderSelf && this.packRow(Gb++, bb, ub.row, hb);
        for (let Ub = 0; Ub < ub.rows.length; Ub++) this.packRow(Gb++, ub.instances[Ub], ub.rows[Ub], hb);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Ob), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Ob * this.rowStride)
      }
      packRow(bb, ub, hb, Bb) {
        const Ob = this.matrices;
        if (hb < 0) Ob.set(ub.getWorldMatrix().m, 16 * bb);
        else
          for (let Sb = 0; Sb < 16; Sb++) Ob[16 * bb + Sb] = Bb[16 * hb + Sb];
        const Gb = this.attributes;
        if (!Gb) return;
        const Ub = ub.Fs,
          Lb = this.layout;
        for (let Sb = 0; Sb < Lb.length; Sb++) {
          var Yb;
          const ub = null !== (Yb = Ub[Lb[Sb]]) && void 0 !== Yb ? Yb : 0,
            hb = bb * this.rowStride + this.offsets[Sb];
          ub.toArray ? ub.toArray(Gb, hb) : ub.copyToArray ? ub.copyToArray(Gb, hb) : Gb[hb] = ub
        }
      }
    }
    class Fb {
      constructor(bb, ub, hb, Bb) {
        let Ob = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = bb, this.byteOffset = ub, this.byteStride = hb, this.size = Bb, this.instanced = Ob, this.type = Gb, this.normalized = Ub
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
    const fb = "CANVAS_ALPHA_ONE",
      kb = `override ${fb}: bool = false;`,
      Tb = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function cb(bb, ub, hb) {
      var Bb;
      let Ob = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Gb = null !== (Bb = ub._colorFormat) && void 0 !== Bb ? Bb : "bgra8unorm",
        Ub = Ob ? 15 : 0;
      return hb ? {
        ...bb,
        targets: [{
          format: Gb,
          blend: {
            color: hb,
            alpha: Tb
          },
          writeMask: Ub
        }]
      } : {
        ...bb,
        constants: {
          ...bb.constants,
          [fb]: 1
        },
        targets: [{
          format: Gb,
          writeMask: Ub
        }]
      }
    }

    function Qb(bb, ub) {
      bb._renderables.push(ub)
    }

    function Rb(bb) {
      var ub, hb;
      return null !== (ub = null === (hb = bb._frameGraph) || void 0 === hb ? void 0 : hb._tasks) && void 0 !== ub ? ub : []
    }

    function bu(bb) {
      return bb._currentEncoder
    }

    function uu(bb) {
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
    const hu = "greater-equal",
      Bu = 2e5,
      Ou = 1e5,
      Gu = new WeakMap;

    function Uu(bb, ub) {
      let hb = Gu.get(bb);
      if (!hb) {
        hb = {
          module: bb.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Gu.set(bb, hb)
      }
      const Bb = `${ub._colorFormat}|${ub._depthStencilFormat}|${ub._sampleCount}`;
      let Ob = hb.pipelines.get(Bb);
      if (!Ob) {
        var Gb;
        const {
          module: Ub
        } = hb;
        Ob = bb.createRenderPipeline({
          label: `placeholder ${Bb}`,
          layout: bb.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Ub,
            entryPoint: "v"
          },
          fragment: {
            module: Ub,
            entryPoint: "f",
            targets: [{
              format: null !== (Gb = ub._colorFormat) && void 0 !== Gb ? Gb : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: ub._depthStencilFormat ? {
            format: ub._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: ub._sampleCount
          }
        }), hb.pipelines.set(Bb, Ob)
      }
      return Ob
    }

    function Lu(bb, ub, hb) {
      const Bb = ub.eye,
        Ob = ub.viewMatrix;
      bb[0] = Bb[0] + Ob[2] * hb, bb[1] = Bb[1] + Ob[6] * hb, bb[2] = Bb[2] + Ob[10] * hb
    }
    var Yu = hb(37548),
      Su = hb(41065),
      au = hb(36830);
    const Hu = Math.PI,
      wu = Hu / 1.95,
      Zu = [5e-4 / 94, 125e-7, 5e-4 / 18],
      Xu = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((bb => {
        let [ub, hb] = bb;
        return .434 * Hu * Math.pow(2 * Hu / ub, 2) * hb
      }));

    function pu(bb, ub, hb) {
      const {
        up: Bb,
        mieDirectionalG: Ob
      } = bb, Gb = 1 - lu(1 - Math.exp(ub[1] / 45e4), 0, 1), Ub = bb.rayleigh - (1 - Gb), Lb = Math.hypot(ub[0], ub[1], ub[2]), Yb = Lb > 0 ? 1 / Lb : 0, Sb = hb.sunDir;
      for (let Zb = 0; Zb < 3; Zb++) Sb[Zb] = ub[Zb] * Yb;
      const ab = Sb[0] * Bb[0] + Sb[1] * Bb[1] + Sb[2] * Bb[2],
        Hb = 1e3 * Math.max(0, 1 - Math.exp(-(wu - Math.acos(lu(ab, -1, 1))) / 1.5));
      hb.sunE = Hb;
      const wb = .2 * bb.turbidity * 1e-17 * bb.mieCoefficient;
      for (let Zb = 0; Zb < 3; Zb++) {
        const bb = Zu[Zb] * Ub,
          ub = Xu[Zb] * wb,
          Bb = Hb / (bb + ub);
        hb.inScatterR[Zb] = bb * Bb, hb.inScatterM[Zb] = ub * Bb, hb.extinctionBeta[Zb] = 8400 * bb + 1250 * ub
      }
      return hb.sunsetMix = lu(Math.pow(1 - ab, 5), 0, 1), hb.sunDiscE = 19e3 * Hb, hb.mieScale = (1 - Ob * Ob) / (4 * Hu), hb.mieBase = 1 + Ob * Ob, hb.mieSlope = 2 * Ob, hb
    }
    const ou = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const Au = 1 / function(bb) {
      const {
        A: ub,
        B: hb,
        C: Bb,
        D: Ob,
        E: Gb,
        F: Ub
      } = ou;
      return (bb * (ub * bb + Bb * hb) + Ob * Gb) / (bb * (ub * bb + hb) + Ob * Ub) - Gb / Ub
    }(1e3);

    function lu(bb, ub, hb) {
      return Math.min(Math.max(bb, ub), hb)
    }
    const Ku = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function Wu(bb, ub) {
      const hb = new Map(ub),
        Bb = [],
        Ob = [],
        Gb = () => 0 === Ob.length || Ob[Ob.length - 1].active;
      let Ub = null;
      const Lb = () => {
        const bb = [...hb].filter((bb => {
            let [, ub] = bb;
            return !0 !== ub
          })),
          ub = bb.map((bb => {
            let [ub] = bb;
            return ub
          })).join("|");
        Ub = bb.length ? new RegExp(`\\b(${ub})\\b`, "g") : null
      };
      Lb();
      for (const Yb of bb.split("\n")) {
        const bb = Ku.exec(Yb);
        if (!bb) {
          Gb() && Bb.push(Ub ? Cu(Yb, Ub, hb) : Yb);
          continue
        }
        const ub = bb[1],
          Sb = bb[2].trim();
        if ("ifdef" === ub || "ifndef" === ub || "if" === ub) {
          const bb = Gb(),
            Bb = "if" === ub ? du(Sb, hb) : hb.has(Sb) === ("ifdef" === ub);
          Ob.push({
            active: bb && Bb,
            parentActive: bb,
            taken: Bb
          })
        } else if ("elif" === ub || "else" === ub) {
          const bb = Ob[Ob.length - 1];
          if (!bb) throw new Error(`#${ub} without #if`);
          const Bb = !bb.taken && ("else" === ub || du(Sb, hb));
          bb.active = bb.parentActive && Bb, bb.taken = bb.taken || Bb
        } else if ("endif" === ub) {
          if (!Ob.pop()) throw new Error("#endif without #if")
        } else if (Gb()) {
          const [bb, ...Bb] = Sb.split(/\s+/);
          "undef" === ub ? hb.delete(bb) : hb.set(bb, !Bb.length || Bb.join(" ")), Lb()
        }
      }
      if (Ob.length) throw new Error("Unterminated #if");
      return Bb.join("\n")
    }

    function Cu(bb, ub, hb) {
      return bb.replace(ub, (bb => {
        const ub = hb.get(bb);
        return "string" === typeof ub ? ub : bb
      }))
    }

    function du(bb, ub) {
      var hb;
      const Bb = null !== (hb = bb.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== hb ? hb : [];
      let Ob = 0;
      const Gb = () => Bb[Ob],
        Ub = () => Bb[Ob++],
        Lb = bb => {
          const hb = /^\d/.test(bb) ? bb : ub.get(bb);
          return "string" === typeof hb ? parseInt(hb) : Number.NaN
        },
        Yb = () => {
          const bb = Ub();
          if ("!" === bb) return !Yb();
          if ("(" === bb) {
            const bb = ab();
            return Ub(), bb
          }
          if ("defined" === bb) {
            const bb = "(" === Gb();
            bb && Ub();
            const hb = Ub();
            return bb && Ub(), ub.has(hb)
          }
          const hb = Gb();
          if ("==" === hb || "!=" === hb || ">" === hb || "<" === hb || ">=" === hb || "<=" === hb) {
            Ub();
            const ub = Lb(bb),
              Bb = Lb(Ub());
            if (Number.isNaN(ub) || Number.isNaN(Bb)) return !1;
            switch (hb) {
              case "==":
                return ub === Bb;
              case "!=":
                return ub !== Bb;
              case ">":
                return ub > Bb;
              case "<":
                return ub < Bb;
              case ">=":
                return ub >= Bb;
              default:
                return ub <= Bb
            }
          }
          return ub.has(bb)
        },
        Sb = () => {
          let bb = Yb();
          for (;
            "&&" === Gb();) {
            Ub();
            const ub = Yb();
            bb = bb && ub
          }
          return bb
        },
        ab = () => {
          let bb = Sb();
          for (;
            "||" === Gb();) {
            Ub();
            const ub = Sb();
            bb = bb || ub
          }
          return bb
        },
        Hb = ab();
      if (Ob !== Bb.length) throw new Error(`Cannot evaluate #if ${bb}`);
      return Hb
    }
    var ru = hb(36822),
      ju = hb(37158),
      nu = hb(37162),
      Du = hb(40318),
      xu = hb(38370);
    const zu = 32,
      gu = [10, 3, 10],
      iu = [21, 7, 21],
      vu = iu[0] * iu[1] * iu[2],
      tu = 0,
      Ju = 1,
      eu = 2,
      Nu = 3,
      su = 64,
      Mu = 512,
      mu = 4 * vu,
      Iu = 1536,
      Pu = mu + vu * Iu,
      qu = 1073741824,
      Eu = Pu + 1;

    function yu(bb, ub) {
      const hb = bb % ub;
      return hb < 0 ? hb + ub : hb
    }

    function Vu(bb, ub, hb) {
      return Bb = yu(bb, iu[0]), Ob = yu(ub, iu[1]), Gb = yu(hb, iu[2]), Bb + iu[0] * (Ob + iu[1] * Gb);
      var Bb, Ob, Gb
    }

    function Fu(bb, ub, hb) {
      return bb + 8 * (ub + 8 * hb)
    }

    function fu(bb, ub, hb) {
      return bb + 4 * (ub + 4 * hb)
    }
    const ku = 65535,
      Tu = 0,
      cu = 1,
      Qu = 2,
      Ru = 3;

    function bh(bb) {
      return Math.ceil(bb * bb / 32)
    }
    const uh = 8192,
      hh = 1 << 18,
      Bh = 65536,
      Oh = 294912,
      Gh = 128,
      Uh = 4096,
      Lh = 16,
      Yh = 16385,
      Sh = 81921,
      ah = 147457,
      Hh = 4194304;
    const wh = [0, 0, 0],
      Zh = [0, 0, 0];

    function Xh(bb, ub, hb, Bb) {
      ! function(bb, ub, hb) {
        const [Bb, Ob, Gb] = [bb[0], bb[1], bb[2]];
        let Ub, Lb, Yb;
        Math.abs(Ob) < .99 ? (Ub = Gb, Lb = 0, Yb = -Bb) : (Ub = -Ob, Lb = Bb, Yb = 0);
        const Sb = Math.hypot(Ub, Lb, Yb);
        ub[0] = Ub / Sb, ub[1] = Lb / Sb, ub[2] = Yb / Sb, hb[0] = Ob * ub[2] - Gb * ub[1], hb[1] = Gb * ub[0] - Bb * ub[2], hb[2] = Bb * ub[1] - Ob * ub[0]
      }(Bb, wh, Zh);
      const Ob = 1 / 32;
      for (const [Gb, Ub] of [
          [0, wh],
          [4, Zh]
        ]) {
        for (let hb = 0; hb < 3; hb++) bb[ub + Gb + hb] = Ub[hb] * Ob;
        bb[ub + Gb + 3] = -(Ub[0] * hb[0] + Ub[1] * hb[1] + Ub[2] * hb[2]) * Ob
      }
    }
    class ph {
      constructor() {
        this.words = new Uint32Array(ah), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      kw(bb, ub) {
        this.parts = 0, this.refs = 0, this.view = bb, this.viewAt = ub;
        const hb = bb[ub + 1] * bb[ub + 6] - bb[ub + 2] * bb[ub + 5],
          Bb = bb[ub + 2] * bb[ub + 4] - bb[ub] * bb[ub + 6],
          Ob = bb[ub] * bb[ub + 5] - bb[ub + 1] * bb[ub + 4],
          Gb = Math.hypot(hb, Bb, Ob) || 1;
        this.light[0] = hb / Gb, this.light[1] = Bb / Gb, this.light[2] = Ob / Gb
      }
      add(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= Uh || ! function(bb, ub, hb) {
            const Bb = bb[ub],
              Ob = bb[ub + 1],
              Gb = bb[ub + 2],
              Ub = bb[ub + 3],
              Lb = bb[ub + 4],
              Yb = bb[ub + 5],
              Sb = bb[ub + 6],
              ab = bb[ub + 7],
              Hb = bb[ub + 8],
              wb = bb[ub + 9],
              Zb = bb[ub + 10],
              Xb = bb[ub + 11],
              pb = bb[ub + 12],
              ob = bb[ub + 13],
              Ab = bb[ub + 14],
              lb = bb[ub + 15],
              Kb = Bb * Yb - Ob * Lb,
              Wb = Bb * Sb - Gb * Lb,
              Cb = Bb * ab - Ub * Lb,
              db = Ob * Sb - Gb * Yb,
              rb = Ob * ab - Ub * Yb,
              jb = Gb * ab - Ub * Sb,
              nb = Hb * ob - wb * pb,
              Db = Hb * Ab - Zb * pb,
              xb = Hb * lb - Xb * pb,
              zb = wb * Ab - Zb * ob,
              gb = wb * lb - Xb * ob,
              ib = Zb * lb - Xb * Ab,
              vb = Kb * ib - Wb * gb + Cb * zb + db * xb - rb * Db + jb * nb;
            if (!(Math.abs(vb) > 1e-12)) return !1;
            const tb = 1 / vb;
            return hb[0] = (Yb * ib - Sb * gb + ab * zb) * tb, hb[1] = (Gb * gb - Ob * ib - Ub * zb) * tb, hb[2] = (ob * jb - Ab * rb + lb * db) * tb, hb[3] = (Zb * rb - wb * jb - Xb * db) * tb, hb[4] = (Sb * xb - Lb * ib - ab * Db) * tb, hb[5] = (Bb * ib - Gb * xb + Ub * Db) * tb, hb[6] = (Ab * Cb - pb * jb - lb * Wb) * tb, hb[7] = (Hb * jb - Zb * Cb + Xb * Wb) * tb, hb[8] = (Lb * gb - Yb * xb + ab * nb) * tb, hb[9] = (Ob * xb - Bb * gb - Ub * nb) * tb, hb[10] = (pb * rb - ob * Cb + lb * Kb) * tb, hb[11] = (wb * Cb - Hb * rb - Xb * Kb) * tb, hb[12] = (Yb * Db - Lb * zb - Sb * nb) * tb, hb[13] = (Bb * zb - Ob * Db + Gb * nb) * tb, hb[14] = (ob * Wb - pb * db - Ab * Kb) * tb, hb[15] = (Hb * db - wb * Wb + Zb * Kb) * tb, !0
          }(ub, hb, this.inverse)) return;
        const {
          view: Bb,
          viewAt: Ob
        } = this, Gb = hb;
        let Ub = 1 / 0,
          Lb = 1 / 0,
          Yb = -1 / 0,
          Sb = -1 / 0,
          ab = -1 / 0;
        const [Hb, wb, Zb] = this.light;
        for (let Cb = 0; Cb < 8; Cb++) {
          const hb = 1 & Cb ? bb.hi[0] : bb.lo[0],
            Xb = 2 & Cb ? bb.hi[1] : bb.lo[1],
            pb = 4 & Cb ? bb.hi[2] : bb.lo[2],
            ob = hb * ub[Gb] + Xb * ub[Gb + 4] + pb * ub[Gb + 8] + ub[Gb + 12],
            Ab = hb * ub[Gb + 1] + Xb * ub[Gb + 5] + pb * ub[Gb + 9] + ub[Gb + 13],
            lb = hb * ub[Gb + 2] + Xb * ub[Gb + 6] + pb * ub[Gb + 10] + ub[Gb + 14],
            Kb = Bb[Ob] * ob + Bb[Ob + 1] * Ab + Bb[Ob + 2] * lb + Bb[Ob + 3],
            Wb = Bb[Ob + 4] * ob + Bb[Ob + 5] * Ab + Bb[Ob + 6] * lb + Bb[Ob + 7];
          Ub = Math.min(Ub, Kb), Lb = Math.min(Lb, Wb), Yb = Math.max(Yb, Kb), Sb = Math.max(Sb, Wb), ab = Math.max(ab, Hb * ob + wb * Ab + Zb * lb)
        }
        if (Yb < -1 || Sb < -1 || Ub >= 1 || Lb >= 1) return;
        const Xb = this.parts++,
          pb = this.rects;
        pb[4 * Xb] = oh(Ub), pb[4 * Xb + 1] = oh(Lb), pb[4 * Xb + 2] = oh(Yb), pb[4 * Xb + 3] = oh(Sb);
        const ob = this.inverse,
          {
            cell: Ab,
            dims: lb,
            lo: Kb
          } = bb,
          Wb = Sh + Xb * Lh;
        for (let Cb = 0; Cb < 3; Cb++) this.floats[Wb + 4 * Cb] = ob[Cb] / Ab, this.floats[Wb + 4 * Cb + 1] = ob[4 + Cb] / Ab, this.floats[Wb + 4 * Cb + 2] = ob[8 + Cb] / Ab, this.floats[Wb + 4 * Cb + 3] = (ob[12 + Cb] - Kb[Cb]) / Ab;
        this.words[Wb + 12] = bb.at, this.floats[Wb + 13] = ab + .001 * (1 + Math.abs(ab)), this.words[Wb + 14] = lb[0] | lb[1] << 8 | lb[2] << 16
      }
      finish() {
        const bb = Gh,
          {
            counts: ub,
            rects: hb,
            words: Bb
          } = this;
        ub.fill(0);
        let Ob = 0,
          Gb = 0;
        for (; Gb < this.parts; Gb++) {
          const Bb = 4 * Gb,
            Ub = (hb[Bb + 2] - hb[Bb] + 1) * (hb[Bb + 3] - hb[Bb + 1] + 1);
          if (Ob + Ub > 65536) break;
          Ob += Ub;
          for (let Ob = hb[Bb + 1]; Ob <= hb[Bb + 3]; Ob++)
            for (let Gb = hb[Bb]; Gb <= hb[Bb + 2]; Gb++) ub[Ob * bb + Gb]++
        }
        let Ub = 0;
        for (let Yb = 0; Yb < 16384; Yb++) Bb[Yb] = Ub, Ub += ub[Yb], ub[Yb] = Bb[Yb];
        Bb[16384] = Ub;
        for (let Yb = 0; Yb < Gb; Yb++) {
          const Ob = 4 * Yb;
          for (let Gb = hb[Ob + 1]; Gb <= hb[Ob + 3]; Gb++)
            for (let Ub = hb[Ob]; Ub <= hb[Ob + 2]; Ub++) Bb[Yh + ub[Gb * bb + Ub]++] = Yb
        }
        const Lb = this.floats;
        for (let Yb = 0; Yb < 16384; Yb++) {
          const bb = Yh + Bb[Yb],
            ub = bb + Math.min(Bb[Yb + 1] - Bb[Yb], 64);
          for (let hb = bb + 1; hb < ub; hb++) {
            const ub = Bb[hb],
              Ob = Lb[81934 + ub * Lh];
            let Gb = hb - 1;
            for (; Gb >= bb && Lb[81934 + Bb[Gb] * Lh] < Ob; Gb--) Bb[Gb + 1] = Bb[Gb];
            Bb[Gb + 1] = ub
          }
        }
        this.refs = Ob
      }
    }

    function oh(bb) {
      return Math.min(127, Math.max(0, Math.floor((.5 * bb + .5) * Gh)))
    }

    function Ah(bb, ub, hb, Bb, Ob) {
      for (let Gb = 0; Gb < 4; Gb++)
        for (let Ub = 0; Ub < 4; Ub++) Ob[4 * Gb + Ub] = bb[ub + 4 * Gb] * hb[Bb + Ub] + bb[ub + 4 * Gb + 1] * hb[Bb + 4 + Ub] + bb[ub + 4 * Gb + 2] * hb[Bb + 8 + Ub] + bb[ub + 4 * Gb + 3] * hb[Bb + 12 + Ub]
    }

    function lh(bb, ub, hb, Bb, Ob) {
      const Gb = bb[0] - ub,
        Ub = bb[1] - hb,
        Lb = bb[2] - Bb,
        Yb = bb[3] - ub,
        Sb = bb[4] - hb,
        ab = bb[5] - Bb,
        Hb = bb[6] - ub,
        wb = bb[7] - hb,
        Zb = bb[8] - Bb;
      if (Math.min(Gb, Yb, Hb) > Ob || Math.max(Gb, Yb, Hb) < -Ob) return !1;
      if (Math.min(Ub, Sb, wb) > Ob || Math.max(Ub, Sb, wb) < -Ob) return !1;
      if (Math.min(Lb, ab, Zb) > Ob || Math.max(Lb, ab, Zb) < -Ob) return !1;
      const Xb = Yb - Gb,
        pb = Sb - Ub,
        ob = ab - Lb,
        Ab = Hb - Yb,
        lb = wb - Sb,
        Kb = Zb - ab,
        Wb = pb * Kb - ob * lb,
        Cb = ob * Ab - Xb * Kb,
        db = Xb * lb - pb * Ab;
      if (Math.abs(Wb * Gb + Cb * Ub + db * Lb) > Ob * (Math.abs(Wb) + Math.abs(Cb) + Math.abs(db))) return !1;
      const rb = [Xb, pb, ob, Ab, lb, Kb, Gb - Hb, Ub - wb, Lb - Zb];
      for (let jb = 0; jb < 3; jb++) {
        const bb = rb[3 * jb],
          ub = rb[3 * jb + 1],
          hb = rb[3 * jb + 2];
        for (let Bb = 0; Bb < 3; Bb++) {
          const Xb = 0 === Bb ? 0 : 1 === Bb ? hb : -ub,
            pb = 0 === Bb ? -hb : 1 === Bb ? 0 : bb,
            ob = 0 === Bb ? ub : 1 === Bb ? -bb : 0,
            Ab = Xb * Gb + pb * Ub + ob * Lb,
            lb = Xb * Yb + pb * Sb + ob * ab,
            Kb = Xb * Hb + pb * wb + ob * Zb,
            Wb = Ob * (Math.abs(Xb) + Math.abs(pb) + Math.abs(ob));
          if (Math.min(Ab, lb, Kb) > Wb || Math.max(Ab, lb, Kb) < -Wb) return !1
        }
      }
      return !0
    }
    const Kh = new Float32Array(1);
    new Uint32Array(Kh.buffer);
    var Wh = hb(38379);

    function Ch(bb) {
      const [ub, hb, Bb] = Wh.l;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${bb.group}) @binding(${bb.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${ub-1}, ${hb-1}, ${Bb-1});\n}\n`
    }

    function dh(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Ob, Gb, Ub] = iu, [Lb, Yb, Sb] = gu, ab = Math.log2(zu), Hb = Bb ? "var<private> bloxdSpCrossed: bool;\n" : "", wb = Bb ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${bb.group}) @binding(${bb.Sw}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${bb.group}) @binding(${bb.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${hb?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Hb}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${cu}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${Qu}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${hb?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${Ru}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Ob}, ${Gb}, ${Ub});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Ob} * (s.y + ${Gb} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${Lb}, ${Yb}, ${Sb}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${ab}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Nu}u) {\n\t\treturn named && state == ${eu}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${mu}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Pu}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${ub?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${ub?`\t\tif (exits && step > 0 && step % ${nh} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${ab}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${tu}u || kind == ${Ju}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${eu}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${mu}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${wb}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const rh = {
      group: 0,
      uniform: 0,
      Sw: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function jh() {
      const bb = rh;
      return `${Ch(bb)}${dh(bb,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Wh.c}>,\n}\n@group(${bb.group}) @binding(${bb.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${bb.group}) @binding(${bb.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Wh.h})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Wh.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Wh.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const nh = 2;
    const Dh = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function xh(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Bb = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${ub.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Ob = "trace" === hb || "lit" === hb,
        Gb = "maskEdge" === hb ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Ub = Ob ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${ub.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${ub.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===hb?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Gb};\n`;
      return `${Bb}${bb.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Ob?function(){const[bb,ub,hb]=Wh.l;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${bb}.0, ${ub}.0, ${hb}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Ub}}\n`:""}${bb.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${ub.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${ub.renderOffset});\n}\n`:""}`
    }
    const zh = "bloxdSpOwnTexture";

    function gh(bb) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${bb.texture}) - 1u)))`
    }
    const ih = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${Yu.f.map((bb=>{let[ub,hb]=bb;return`\tbloxdSpOut.${ub} = (bloxdSpWord & ${hb}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function vh(bb) {
      return `bloxdSpFlags(${bb})`
    }
    const th = `${Du.h}.eyePosition`;

    function Jh(bb, ub, hb, Bb, Ob) {
      const Gb = bb.indexOf(ub);
      if (Gb < 0 || bb.indexOf(ub, Gb + 1) >= 0) throw new Error(`Lite's ${Ob} program changed at the shader pack ${Bb} hook: ${Gb<0?"no":"more than one"} anchor (lite/${Ob}ShaderPack.ts)`);
      return bb.slice(0, Gb) + hb + bb.slice(Gb + ub.length)
    }

    function eh(bb) {
      return bb.sunShadow || bb.airShadow
    }

    function Nh(bb, ub) {
      return ub && eh(bb)
    }
    const sh = {
      group: Du.d,
      ...Du.p
    };

    function Mh(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!eh(bb)) return "";
      if (ub) {
        const ub = sh,
          Ob = "trace" === hb || "lit" === hb;
        let Gb = "";
        bb.sunShadow && (Gb = Ob ? `${dh(ub,!0,"lit"===hb)}${Bb=ub,`@group(${Bb.group}) @binding(${Bb.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Bb.group}) @binding(${Bb.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(bb, ub, hb) {
          const Bb = `@group(${bb}) @binding(${ub}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return hb ? `${Bb}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Dh}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((bb=>`\t{\n\t\tlet o = vec2i(${bb});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Bb
        }(ub.group, Du.t, "maskEdge" === hb));
        const Ub = {
          shadowDirection: `${Du.h}.shadowDirection`,
          renderOffset: `${Du.h}.renderOffset`,
          eyePosition: `${Du.h}.eyePosition`
        };
        return `${Ch(ub)}${Gb}${function(bb){const[ub,hb,Bb]=Wh.l;return`@group(${bb.group}) @binding(${bb.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${bb.group}) @binding(${bb.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${ub}.0, ${hb}.0, ${Bb}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(ub)}${xh(bb,Ub,hb)}`
      }
      var Bb;
      return `${bb.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${bb.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function mh(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!ub) return "";
      const Gb = (Ub = "fragmentInputs.vPositionW", Lb = bb.sunShadow ? {
        normal: hb,
        flags: Bb
      } : null, `\n\tbloxdSpShadowPosition = ${Ub};\n${Lb?`\tbloxdSpShadowNormal = normalize(${Lb.normal});\n\tbloxdSpShadowEmissive = (${Lb.flags} & ${Yu.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${Lb.flags} & ${Yu.g}u) != 0u;\n`:""}`);
      var Ub, Lb;
      return bb.sunShadow && ("mask" === Ob || "maskEdge" === Ob) ? `${Gb}${Yb="fragmentInputs.position",Sb="maskEdge"===Ob,`\n\tbloxdSpShadowPixel = vec2i(${Yb}.xy);\n${Sb?`\tbloxdSpShadowZ = ${Yb}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Yb}.z), dpdy(${Yb}.z));\n`:""}`}` : Gb;
      var Yb, Sb
    }
    const Ih = "bloxdSpTextureRotation",
      Ph = "bloxdSpTextureLayers",
      qh = `@group(${Du.d}) @binding(${Du.v}) var<storage, read> ${Ph}: array<u32>;\n`;

    function Eh(bb) {
      return `\tvertexOutputs.vPackTexture = ${Ph}[min(u32(${bb}), arrayLength(&${Ph}) - 1u)];\n`
    }

    function yh(bb) {
      return void 0 !== bb.uv
    }

    function Vh(bb) {
      if (!bb) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (yh(bb)) return function(bb) {
        const {
          texture: ub,
          cells: hb,
          layers: Bb
        } = bb, Ob = `textureDimensions(${ub}, bloxdSpLevel)`, Gb = hb ? `max(vec2u(vec2f(${Ob}) / ${hb}), vec2u(1u))` : Ob, Ub = hb ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Gb};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${hb}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${hb}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${ub}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Ob} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Gb};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${ub}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let Lb;
        if (hb)
          if (1 === Bb.length) Lb = `\treturn bloxdSpOwnTexel(${Bb[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const bb = Bb.length - 1;
            Lb = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Bb[bb]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let ub = bb - 1; ub >= 0; ub--) Lb += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Bb[ub]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            Lb += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else Lb = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${bb.id?`var<private> ${zh}: u32;\n`:""}${Ub}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${gh(bb)};\n\treturn ${Gb};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${bb.id?zh:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${gh(bb)};\n${Lb}}\n`
      }(bb);
      const ub = bb,
        hb = bb => {
          const hb = bb > 0 ? `bloxdSpLayer - ${ub.layers*bb}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${bb}, ${ub.sampler}, bloxdSpTurned, ${hb}, round(bloxdSpMipLevel));`
        };
      let Bb = "";
      for (let Gb = 0; Gb < ub.count - 1; Gb++) Bb += `\tif (bloxdSpLayer < ${ub.layers*(Gb+1)}u) {\n\t\t${hb(Gb)}\n\t}\n`;
      const Ob = ub.frame ? `${ub.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Ih}: u32;\n${qh}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Ih} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Ih} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Ih} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Ob}${Bb}\t${hb(ub.count-1)}\n}\n`
    }

    function Fh(bb, ub, hb) {
      return !!bb.surface && "bloxdDefaultSurface" !== bb.surface && function(bb, ub) {
        return "liquid" === ub || !bb
      }(ub, hb)
    }

    function fh(bb, ub) {
      return bb.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${ub.vertexLocalPosition}, ${vh(ub.vertexFlags)});\n\t\tlet bloxdSpVertex = ${bb.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function kh(bb, ub, hb, Bb, Ob) {
      if (!bb.surface) return "";
      const Gb = (bb, ub) => `\n\tlet bloxdSpTexelUV = ${bb};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${ub}) - 1u));`;
      let Ub = "",
        Lb = "0u, 0u, vec2f(0.0), 0.0";
      const Yb = Bb && yh(Bb) ? Bb : null,
        Sb = Bb && !yh(Bb) ? Bb : null;
      if (Yb) {
        Ub = `${Yb.id?`\n\tlet bloxdSpTexture = ${Yb.id};\n\t${zh} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Yb.uv};${Gb(function(bb,ub){var hb;return`${null!==(hb=bb.levelUv)&&void 0!==hb?hb:bb.cells?`${ub} / ${bb.cells}`:ub} * vec2f(textureDimensions(${bb.texture}))`}(Yb,"bloxdSpUv"),Yb.texture)}`, Lb = (Yb.id ? `${zh}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Sb && (Ub = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Ih} = bloxdSpTexture >> 16u;${Gb(`fragmentInputs.vMainUV1 * ${(0,ru.ub)(Sb.width)}`,"textureAtlas0")}`, Lb = `bloxdSpTexture & 0xffffu, ${Ih}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const ab = Ob.overlayColour,
        Hb = ab ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        wb = "bloxdDefaultSurface" !== bb.surface || ab ? `\n\tbaseColor = vec4f(${Hb}, baseColor.a);` : "",
        Zb = Fh(bb, ub, hb) ? `\n\t${Ob.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Ub}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Ob.alpha}, ${Ob.enchantTier}, ${Ob.enchantColour}, ${Ob.enchantSpeed}, ${null!==ab&&void 0!==ab?ab:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Ob.normal}, ${Ob.localPosition}, ${vh(Ob.flags)}, ${Lb});\n\tlet bloxdSpSurface = ${bb.surface}(bloxdSpSurfaceIn);${wb}${Zb}\n`
    }
    const Th = "bloxdSpLightIn";

    function ch(bb, ub, hb, Bb) {
      if (!bb.light) return "";
      const Ob = ub ? `${ru.m}.rgb, ${ru.m}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${ru.k}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Gb,
          diffuse: Ub,
          emissive: Lb,
          ambient: Yb,
          fogColour: Sb,
          fogAlpha: ab,
          normal: Hb
        } = Bb;
      return `\tvar ${Th} = BloxdLightIn(vec3f(0.0), ${hb?Gb:"0.0"}, ${Ub}, ${Lb}, ${Yb}, ${Ob}, ${Sb}, ${ab}, fragmentInputs.vPositionW, ${Hb}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Th}.litColour = bloxdLitColour(bloxdSpSurface, ${Th});\n`
    }

    function Qh(bb) {
      return bb.light ? `\n\t{\n\t\tlet bloxdSpLight = ${bb.light}(bloxdSpSurface, ${Th});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Rh = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      bB = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      uB = "\treturn color;\n}",
      hB = {
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
    const BB = Object.freeze({});

    function OB(bb) {
      var ub;
      return !(null === (ub = (0, xu.g)(bb)) || void 0 === ub || !ub.sceneDepth)
    }

    function GB(bb) {
      const ub = (0, xu.g)(bb);
      return !!ub && Fh(ub.hooks, ub.strict, ub.program)
    }

    function UB(bb, ub, hb, Bb) {
      return Jh(bb, ub, hb, Bb, "terrain")
    }

    function LB(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Gb = function(bb) {
          return (0, xu.e)(bb.packVariant, bb.liquid ? "liquid" : "terrain")
        }(bb),
        {
          hooks: Ub
        } = Gb,
        Lb = Nh(Gb, Bb),
        Yb = "edge" === Ob ? "maskEdge" : "plain" === Ob ? "mask" : "trace",
        Sb = fh(Ub, hB);
      Sb && (ub = UB(ub, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Sb}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const ab = "atlas" === bb.texture ? {
          count: bb.atlasCount,
          layers: bb.atlasLayers,
          width: bb.w6,
          sampler: "atlasSampler",
          frame: bb.animated ? hb : null
        } : null,
        Hb = `${Gb.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${mh(Gb,Lb,hB.normal,hB.flags,Yb)}${kh(Ub,Gb.strict,Gb.program,ab,hB)}`;
      Hb && (ub = UB(ub, Rh, `${Rh.slice(0,-1)}${Hb}`, "surface"));
      const wb = Qh(Ub);
      return wb && (ub = UB(ub, bB, `${ch(Ub,bb.lighting,bb.dirLightCount>0,hB)}${bB}`, "light input"), ub = UB(ub, uB, `${wb.slice(1)}${uB}`, "light")), `${(0,Du.D)()}${Gb.sceneDepth?`@group(${Du.d}) @binding(${Du.m}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${th};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Mh(Gb,Lb,Yb)}${Vh(ab)}${ih}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Gb.code}${ub}`
    }
    const YB = db.d.WGSL;

    function SB(bb) {
      return void 0 !== bb.packVariant
    }
    const aB = {
        hOb: 0,
        BOb: 4,
        OOb: 8,
        GOb: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      HB = aB.aoLevels + 4,
      wB = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      ZB = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      XB = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      pB = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      oB = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      AB = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      lB = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      KB = 0,
      WB = 3,
      CB = 4,
      dB = 5,
      rB = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${ju.e}, ${ju.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${ju.e}, ${ju.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      jB = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((bb=>nu.c>>bb&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const nB = {
      gH: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: bb => `animDataPerTex[${bb}]`
    };

    function DB(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nB;
      return `\n\tlet atlasIdxIn = ${bb};\n\tlet animTick = ${hb.gH};\n\tlet animTickStride = ${hb.stride};\n\tlet numAnimTextures = ${hb.count};\n\t${(0,rb.e)(db.d.WGSL,hb.perTexture)}\n\t${ub}animLayer;\n`
    }

    function xB(bb) {
      const ub = (ub, hb) => {
        const Bb = ub > 0 ? `fragmentInputs.texAtlasIndex - ${bb.atlasLayers.toFixed(1)} * ${ub.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${hb?"textureSampleLevel":"textureSample"}(textureAtlas${ub}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Bb}))${hb?", atlasLod":""})`
      };
      if (1 === bb.atlasCount) return `baseColor = ${ub(0,!1)};`;
      let hb = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,ru.ub)(bb.w6)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Bb = 0; Bb < bb.atlasCount; Bb++) {
        const Ob = bb.atlasLayers * (Bb + 1) - .5;
        hb += `${Bb>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,ru.ub)(Ob)}) {\n\t\tbaseColor = ${ub(Bb,!0)};\n\t}`
      }
      return hb
    }

    function zB(bb) {
      return `terrain-${bb.texture}${"atlas"===bb.texture?bb.atlasCount:""}${bb.animated?"-anim":""}${bb.alphaTest?"-test":""}${bb.lighting?"-lit":""}-dir${bb.dirLightCount}${bb.packed?"-packed":""}${SB(bb)?`-sp${bb.packVariant}`:""}${bb.liquid?"-liquid":""}${bb.resting?"-rest":""}`
    }

    function gB(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Bb = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const hb = "none" !== bb.texture,
          Bb = "atlas" === bb.texture,
          Ob = bb.dirLightCount > 0,
          Gb = SB(bb);
        if (bb.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${bb.dirLightCount}`);
        let Ub = 1,
          Lb = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Bb) {
          bb.animated && (Lb += `@group(2) @binding(${Ub++}) var<storage, read> animDataPerTex: array<f32>;\n`), Lb += `@group(2) @binding(${Ub++}) var atlasSampler: sampler;\n`;
          for (let ub = 0; ub < bb.atlasCount; ub++) Lb += `@group(2) @binding(${Ub++}) var textureAtlas${ub}: texture_2d_array<f32>;\n`
        } else "single" === bb.texture && (Lb += `@group(2) @binding(${Ub++}) var diffuseSamplerSampler: sampler;\n`, Lb += `@group(2) @binding(${Ub++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Yb = function(bb) {
            const ub = lB,
              hb = "none" !== bb.texture,
              Bb = "atlas" === bb.texture,
              Ob = SB(bb);
            return bb.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${hb?"uv: vec2f,":""}\n\t${Bb?"texAtlasIndices: f32,":""}\n\t${bb.lighting?"aPackedLightLevels: f32,":""}\n\t${Ob?"blockFlagWords: vec2u,":""}\n}\n${rB}\n${jB}\n${"single"===bb.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${hb?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===bb.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Bb?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${bb.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Ob?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${ub.position}) position: vec3f,\n\t@location(${ub.normal}) normal: vec4f,\n\t@location(${ub.color}) color: vec4f,\n\t${hb?`@location(${ub.uv}) uv: vec2f,`:""}\n\t${bb.lighting?`@location(${ub.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Ob?`@location(${ub.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(bb),
          Sb = `\n${pB}\n${ZB}\n${XB}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${Lb}\n${kb}\n${Yb.declarations}\nstruct Varyings {\n\t${"none"===ub?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${bb.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Ob?"@location(5) vTerrainLambert: f32,":""}\n\t${hb?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Bb?"@location(7) texAtlasIndex: f32,":""}\n\t${bb.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Gb?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Gb&&Bb?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${bb.resting?"":(0,ru.v)(YB)}\n${AB}\n\n@vertex\nfn mainVertex(${Yb.parameter}) -> Varyings {\n\t${Yb.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Gb?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${Yu.b.placed}u;`:""}\n\t${Gb&&Bb?Eh("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${bb.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${hb?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Bb?function(bb){return bb?DB("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(bb.animated):""}\n\t${"single"===bb.texture&&bb.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,ru.db)(YB)}\n\t${(0,ru.J)(YB,bb.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${bb.resting?"":oB}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Bb?xB(bb):""}\n\t${"single"===bb.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${hb?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${bb.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Ob?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${fb}));\n\t${SB(bb)?(0,ru.ob)(db.d.WGSL):(0,ru.X)(YB)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          ab = new Set;
        bb.lighting && ab.add("BLOXD_LIGHTING");
        Ob && ab.add("BLOXD_TERRAIN_DIRECTIONAL");
        return Wu(Sb, new Map([...ab].map((bb => [bb, !0]))))
      }(bb, hb);
      if (!SB(bb)) return Bb;
      const Ob = LB(bb, Bb, DB, ub, hb);
      return "none" === hb ? Ob : `${Ob}${function(bb){const ub="none"!==bb.texture&&bb.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${bb.resting?"":oB}\n\t${bb.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${ub&&"atlas"===bb.texture?xB(bb):""}\n\t${ub&&"single"===bb.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${ub?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${Yu.b.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(bb)}`
    }
    const iB = new Map([
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

    function vB(bb, ub) {
      const hb = new Map;
      let Bb = 0;
      const Ob = [],
        Gb = [],
        Ub = [];
      for (const Sb of ub) {
        var Lb, Yb;
        const ub = null !== (Lb = Sb.type.trim().split(/\s+/).pop()) && void 0 !== Lb ? Lb : Sb.type,
          ab = iB.get(ub);
        if (!ab) throw new Error(`Lite: no uniform layout for ${Sb.name}: ${Sb.type}`);
        const Hb = null !== (Yb = Sb.arraySize) && void 0 !== Yb ? Yb : 0,
          wb = Hb ? 4 : ab.align;
        Bb = Math.ceil(Bb / wb) * wb;
        const Zb = Hb ? 4 * Math.ceil(ab.floats / 4) : ab.floats;
        if (hb.set(Sb.name, {
            offset: Bb,
            floats: ab.floats,
            arraySize: Hb,
            stride: Zb
          }), Hb && ab.floats <= 2) {
          const ub = `${bb}_${Ub.length}_strided`;
          Gb.push(`struct ${ub} {\n\t@size(16) el: ${ab.wgsl},\n}`), Ub.push(Sb.name), Ob.push(`\t@align(16) ${Sb.name}: array<${ub}, ${Hb}>,`)
        } else Hb ? Ob.push(`\t@align(16) ${Sb.name}: array<${ab.wgsl}, ${Hb}>,`) : Ob.push(`\t${Sb.name}: ${ab.wgsl},`);
        Bb += Hb ? Zb * Hb : ab.floats
      }
      return {
        slots: hb,
        floats: Math.max(4, 4 * Math.ceil(Bb / 4)),
        wgsl: `${Gb.join("\n")}\nstruct ${bb} {\n${Ob.join("\n")}\n}\n`,
        stridedArrays: Ub
      }
    }
    const tB = [{
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
      JB = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      eB = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function NB(bb, ub) {
      return `#if defined(${bb}) && ${bb}DIRECTUV == 0\nvarying v${ub}UV: vec2f;\n#endif`
    }

    function sB(bb, ub, hb) {
      return `#if defined(${bb}) && ${bb}DIRECTUV == 0\nif (uniforms.v${ub}Infos.x==0.)\n{vertexOutputs.v${ub}UV= (uniforms.${hb}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${ub}UV= (uniforms.${hb}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function MB(bb, ub, hb) {
      return `#ifdef ${bb}\n#if ${bb}DIRECTUV == 1\n#define v${ub}UV vMainUV1\n#elif ${bb}DIRECTUV == 2\n#define v${ub}UV vMainUV2\n#else\nvarying v${ub}UV: vec2f;\n#endif\nvar ${hb}SamplerSampler: sampler;\nvar ${hb}Sampler: texture_2d<f32>;\n#endif`
    }
    const mB = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      IB = 256,
      PB = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      qB = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      EB = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      yB = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      VB = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      FB = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      fB = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      kB = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${qB}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${NB("OPACITY","Opacity")}\n${NB("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${fB}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${EB}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${sB("OPACITY","Opacity","opacity")}\n${sB("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${yB}\n#define CUSTOM_VERTEX_MAIN_END\n${VB}\n}\n`;
    const TB = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${MB("OPACITY","Opacity","opacity")}\n${MB("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${fB}\n${FB}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((bb,ub)=>function(bb){const ub=`
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
      ub
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      bb
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      ub
    }.vLightData, diffuse$ {
      bb
    }.rgb, $ {
      ub
    }.vLightSpecular.rgb, diffuse$ {
      bb
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(ub))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, cB = /^([gimus]+)!/, QB = new Set;

    function RB(bb) {
      QB.has(bb) || (QB.add(bb), console.warn(`Lite: no place for plugin code at ${bb} in the standard shader: it is left out`))
    }

    function bO(bb, ub) {
      let hb = bb;
      const Bb = new Map;
      for (const [Gb, Ub] of ub) {
        var Ob;
        Bb.set(Gb, `${null!==(Ob=Bb.get(Gb))&&void 0!==Ob?Ob:""}${Ub}\n`)
      }
      for (const [Gb, Ub] of Bb) {
        if (!Gb.startsWith("!")) {
          const bb = `#define ${Gb}`;
          if (!hb.includes(bb)) {
            RB(Gb);
            continue
          }
          hb = hb.replace(bb, (() => `\n${Ub}\n${bb}`));
          continue
        }
        let bb = Gb.substring(1),
          ub = "g";
        if (bb.startsWith("!")) ub = "", bb = bb.substring(1);
        else {
          const hb = cB.exec(bb);
          hb && (ub = hb[1], bb = bb.substring(ub.length + 1))
        }
        const Bb = new RegExp(bb, ub.includes("g") ? ub : `${ub}g`);
        let Ob = Bb.exec(hb);
        for (Ob || RB(Gb); Ob;) {
          const bb = Ob,
            ub = Ub.replace(/\$(\d+)/g, ((ub, hb) => Number(hb) < bb.length ? bb[Number(hb)] : ""));
          hb = hb.substring(0, bb.index) + ub + hb.substring(bb.index + bb[0].length), Bb.lastIndex = bb.index + ub.length, Ob = Bb.exec(hb)
        }
      }
      return hb
    }
    const uO = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      hO = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      BO = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function OO(bb) {
      const ub = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let hb = bb.replace(uO, ((bb, hb, Bb, Ob, Gb, Ub) => ("attribute" === hb ? ub.attributes.push({
        name: Gb,
        type: Ub
      }) : void 0 === hb ? ub.varyings.push({
        name: Gb,
        type: Ub,
        interpolation: UO(Ub, Bb, Ob)
      }) : ub.uniforms.push({
        name: Gb,
        type: GO(Ub)
      }), "")));
      return hb = hb.replace(hO, ((bb, hb) => (ub.samplers.add(hb), ""))), hb = hb.replace(BO, ((bb, hb, Bb) => (ub.textures.push({
        name: hb,
        type: Bb
      }), ""))), ub.body = hb, ub
    }

    function GO(bb) {
      const ub = bb.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        hb = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(ub);
      if (!hb) throw new Error(`Lite: unsupported uniform type ${bb}`);
      return hb
    }

    function UO(bb, ub, hb) {
      return void 0 === ub && void 0 === hb ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(bb.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === ub ? "@interpolate(flat) " : `@interpolate(${null!==ub&&void 0!==ub?ub:"perspective"}, ${null!==hb&&void 0!==hb?hb:"center"}) `
    }

    function LO(bb) {
      return HO({
        defines: bb.defines,
        vertex: bO(kB, bb.vertexCode),
        fragment: bO(TB, bb.fragmentCode),
        members: [...tB, ...bb.defines.has("OPACITY") ? JB : [], ...bb.defines.has("EMISSIVE") ? eB : [], ...bb.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function YO(bb) {
      const ub = bb.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (ub === bb) throw new Error("Lite: fragment main has no return");
      return ub
    }
    const SO = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${qB}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${EB}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${yB}\n${VB}\n}\n`,
      aO = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${FB}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function HO(bb) {
      const ub = bb.defines,
        hb = OO(Wu(bb.vertex, ub)),
        Bb = OO(Wu(bb.fragment, ub)),
        Ob = new Map;
      for (const Kb of [...hb.varyings, ...Bb.varyings]) Ob.has(Kb.name) || Ob.set(Kb.name, Kb);
      const Gb = [...Ob.values()].map(((bb, ub) => `\t@location(${ub}) ${bb.interpolation}${bb.name}: ${bb.type},`)),
        Ub = [...bb.members];
      for (const Kb of [...hb.uniforms, ...Bb.uniforms]) Ub.some((bb => bb.name === Kb.name)) || Ub.push(Kb);
      const Lb = vB(bb.structName, Ub),
        Yb = [],
        Sb = [];
      let ab = 1;
      const Hb = new Set;
      for (const Kb of [...hb.textures, ...Bb.textures]) {
        if (Hb.has(Kb.name)) continue;
        Hb.add(Kb.name);
        const bb = `${Kb.name}Sampler`,
          ub = ab++,
          hb = ab++,
          Bb = Kb.type.startsWith("texture_2d_array") ? "2d-array" : Kb.type.startsWith("texture_cube") ? "cube" : "2d";
        Yb.push({
          name: Kb.name,
          binding: ub,
          samplerBinding: hb,
          dimension: Bb
        }), Sb.push(`@group(2) @binding(${ub}) var ${Kb.name}: ${Kb.type};`), Sb.push(`@group(2) @binding(${hb}) var ${bb}: sampler;`)
      }
      for (const Kb of [...hb.samplers, ...Bb.samplers])
        if (!Hb.has(Kb.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Kb} has no texture`);
      const wb = [pB, PB, Lb.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${bb.structName};`, ...Sb].join("\n"),
        Zb = hb.attributes,
        Xb = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...hb.attributes.map(((bb, ub) => `\t@location(${ub}) ${bb.name}: ${bb.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        pb = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Gb, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        ob = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Bb.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Gb, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", kb, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${fb}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        Ab = bb => {
          for (const ub of Lb.stridedArrays) bb = bb.replace(new RegExp(`\\b${ub}\\s*\\[(.*?)\\]`, "g"), `${ub}[$1].el`);
          return bb
        };
      return {
        vertex: `${wb}\n${Xb}\n${pb}\n${Ab(hb.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${wb}\n${ob}\n${YO((lb=Ab(Bb.body),lb.includes("fragmentInputs.position")?lb.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):lb))}`,
        attributes: Zb,
        material: Lb,
        textures: Yb
      };
      var lb
    }
    const wO = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      ZO = bb => ({
        name: bb,
        type: "vec3"
      }),
      XO = bb => ({
        name: bb,
        type: "float"
      }),
      pO = vB("EarthSkyUniforms", [ZO("viewFrom"), XO("exposureScale"), ZO("zenithOffset"), XO("fogOn"), ZO("up"), XO("ditherOn"), ZO("sun"), XO("turbidity"), ZO("tint"), XO("rayleigh"), ZO("sunDir"), XO("mieStrength"), ZO("inScatterR"), XO("mieFocus"), ZO("inScatterM"), XO("sunE"), ZO("extinctionBeta"), XO("sunsetMix"), XO("mieScale"), XO("mieBase"), XO("mieSlope"), XO("sunDiscE"), XO("exposure")]),
      oO = `${pB}\n${PB}\n${pO.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      AO = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${wO.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      lO = `\n${kb}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(ou).map((bb=>{let[ub,hb]=bb;return`const TONE_${ub}: f32 = ${hb};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${Au};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${fb}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var KO = hb(36720);
    const WO = new KO.YX,
      CO = new KO.YX,
      dO = new KO.Quaternion,
      rO = new Float64Array(3),
      jO = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      nO = new Float64Array(16);

    function DO(bb, ub, hb) {
      const Bb = hb.worldMatrix;
      var Ob;
      bb.updateFloat3("viewFrom", Bb[12], Bb[13], Bb[14]), bb.updateFloatsFrom("zenithOffset", ub.cameraOffset, 0, 3), bb.updateFloatsFrom("up", ub.up, 0, 3), ub.luminance > 0 && (bb.updateFloat("exposure", ub.luminance), bb.updateFloat("exposureScale", (Ob = ub.luminance, Math.log2(2 / Math.pow(Ob, 4))))), bb.updateFloat("turbidity", ub.turbidity), bb.updateFloat("rayleigh", ub.rayleigh), bb.updateFloat("mieStrength", ub.mieCoefficient), bb.updateFloat("mieFocus", ub.mieDirectionalG), bb.updateFloatsFrom("tint", ub.tint, 0, 3), bb.updateFloat("fogOn", ub.fog && hb.fogEnabled && 0 !== hb.fogMode ? 1 : 0), bb.updateFloat("ditherOn", ub.dithering ? 1 : 0);
      const Gb = ub.sunPosition;
      if (WO.set(Gb[0], Gb[1], Gb[2]), !ub.useSunPosition) {
        const bb = Math.PI * (ub.inclination - .5),
          hb = 2 * Math.PI * (ub.azimuth - .5);
        WO.set(ub.distance * Math.cos(hb) * Math.cos(bb), ub.distance * Math.sin(-bb), ub.distance * Math.sin(hb) * Math.cos(bb)), KO.Quaternion.FromUnitVectorsToRef(KO.YX.UpReadOnly, CO.set(ub.up[0], ub.up[1], ub.up[2]), dO), WO.rotateByQuaternionToRef(dO, WO)
      }
      bb.updateVector3("sun", WO), rO[0] = WO.x, rO[1] = WO.y, rO[2] = WO.z;
      const Ub = pu(ub, rO, jO);
      bb.updateFloatsFrom("sunDir", Ub.sunDir, 0, 3), bb.updateFloat("sunE", Ub.sunE), bb.updateFloatsFrom("inScatterR", Ub.inScatterR, 0, 3), bb.updateFloatsFrom("inScatterM", Ub.inScatterM, 0, 3), bb.updateFloatsFrom("extinctionBeta", Ub.extinctionBeta, 0, 3), bb.updateFloat("sunsetMix", Ub.sunsetMix), bb.updateFloat("sunDiscE", Ub.sunDiscE), bb.updateFloat("mieScale", Ub.mieScale), bb.updateFloat("mieBase", Ub.mieBase), bb.updateFloat("mieSlope", Ub.mieSlope)
    }

    function xO(bb, ub) {
      const hb = nO;
      hb[0] = ub.far, hb[5] = ub.far, hb[10] = ub.far, hb[15] = 1;
      const Bb = bb.infiniteDistance;
      for (let Ob = 0; Ob < 3; Ob++) hb[12 + Ob] = bb.position[Ob] + (Bb ? ub.worldMatrix[12 + Ob] : 0);
      return nO
    }
    var zO = hb(38342);

    function gO(bb) {
      return Math.max(4, 4 * Math.ceil(bb / 4))
    }

    function iO(bb, ub, hb, Bb) {
      const Ob = bb.createBuffer({
        label: Bb,
        size: gO(ub.byteLength),
        usage: hb,
        mappedAtCreation: !0
      });
      return new Uint8Array(Ob.getMappedRange(), 0, ub.byteLength).set(new Uint8Array(ub.buffer, ub.byteOffset, ub.byteLength)), Ob.unmap(), Ob
    }

    function vO(bb, ub) {
      return Math.floor(Math.log2(Math.max(bb, ub))) + 1
    }

    function tO(bb, ub, hb, Bb, Ob, Gb) {
      const Ub = bb.createTexture({
          label: Gb,
          size: {
            width: hb,
            height: Bb,
            depthOrArrayLayers: Ob
          },
          format: "rgba8unorm",
          mipLevelCount: vO(hb, Bb),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        Lb = (ub, hb, Bb, Gb) => {
          bb.queue.writeTexture({
            texture: Ub,
            mipLevel: hb
          }, ub, {
            bytesPerRow: 4 * Bb,
            rowsPerImage: Gb
          }, {
            width: Bb,
            height: Gb,
            depthOrArrayLayers: Ob
          })
        };
      Lb(ub, 0, hb, Bb);
      let Yb = 1;
      for (const Sb of function*(bb, ub, hb, Bb) {
          let Ob = bb,
            Gb = ub,
            Ub = hb;
          for (; Gb > 1 || Ub > 1;) {
            const bb = Math.max(1, Gb >> 1),
              ub = Math.max(1, Ub >> 1),
              hb = new Uint8Array(bb * ub * Bb * 4),
              Lb = 4 * Gb;
            let Yb = 0;
            for (let Sb = 0; Sb < Bb; Sb++) {
              const Bb = Sb * Lb * Ub;
              for (let Sb = 0; Sb < ub; Sb++) {
                const ub = Bb + Math.min(2 * Sb, Ub - 1) * Lb,
                  ab = Bb + Math.min(2 * Sb + 1, Ub - 1) * Lb;
                for (let Bb = 0; Bb < bb; Bb++) {
                  const bb = 4 * Math.min(2 * Bb, Gb - 1),
                    Ub = 4 * Math.min(2 * Bb + 1, Gb - 1);
                  for (let Bb = 0; Bb < 4; Bb++) hb[Yb++] = Ob[ub + bb + Bb] + Ob[ub + Ub + Bb] + Ob[ab + bb + Bb] + Ob[ab + Ub + Bb] + 2 >> 2
                }
              }
            }
            yield {
              data: hb,
              width: bb,
              height: ub
            }, Ob = hb, Gb = bb, Ub = ub
          }
        }(ub, hb, Bb, Ob)) Lb(Sb.data, Yb++, Sb.width, Sb.height);
      return Ub
    }
    const JO = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function eO(bb) {
      if (bb.startsWith("data:")) {
        const ub = bb.search(/[;,]/);
        return `data:${ub>5?bb.slice(5,ub):""} URL of ${bb.length} characters`
      }
      return bb.length > 80 ? `${bb.slice(0,80)}...` : bb
    }
    async function NO(bb) {
      const ub = await fetch(bb);
      if (!ub.ok) throw new Error(`${eO(bb)}: ${ub.status} ${ub.statusText}`);
      return createImageBitmap(await ub.blob(), JO)
    }
    async function sO(bb) {
      const ub = await NO(bb),
        hb = new OffscreenCanvas(ub.width, ub.height),
        Bb = hb.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Bb) throw new Error("No 2D context to decode an image");
      Bb.drawImage(ub, 0, 0);
      const {
        data: Ob
      } = Bb.getImageData(0, 0, ub.width, ub.height);
      return ub.close(), {
        pixels: new Uint8Array(Ob.buffer, Ob.byteOffset, Ob.byteLength),
        width: hb.width,
        height: hb.height
      }
    }
    const MO = new WeakMap;

    function mO(bb, ub, hb, Bb) {
      var Ob;
      const Gb = null !== (Ob = MO.get(bb)) && void 0 !== Ob ? Ob : new Map;
      MO.set(bb, Gb);
      let Ub = Gb.get(ub);
      return Ub || (Ub = (async Ob => {
        const Gb = null !== (Ob = function(bb, ub) {
          const hb = bb ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : null;
          return null !== hb && void 0 !== hb && hb.byteLength && ub && hb.byteLength % (ub * ub * 4) === 0 ? {
            pixels: hb,
            layerWidth: ub,
            layers: hb.byteLength / (ub * ub * 4)
          } : null
        }(hb, Bb)) && void 0 !== Ob ? Ob : await async function(bb) {
          const {
            pixels: ub,
            width: hb
          } = await sO(bb);
          return {
            pixels: ub,
            layerWidth: hb,
            layers: ub.byteLength / (hb * hb * 4)
          }
        }(ub), {
          layerWidth: Ub,
          layers: Lb
        } = Gb;
        return {
          texture: tO(bb, Gb.pixels, Ub, Ub, Lb, `atlas-${ub}`),
          layerWidth: Ub,
          layers: Lb
        }
      })(), Gb.set(ub, Ub), Ub.catch((() => {
        Gb.delete(ub)
      }))), Ub
    }
    const IO = new Map([
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
      PO = new Map([
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

    function qO(bb) {
      for (const ub of (0, zO.i)(bb))
        if (!PO.has((0, zO.g)(ub))) return !1;
      return !0
    }

    function EO(bb) {
      const ub = PO.get(bb);
      if (!ub) return null;
      const [hb, Bb, Ob] = ub;
      return {
        srcFactor: IO.get(hb),
        dstFactor: IO.get(Bb),
        operation: Ob
      }
    }
    let yO = null;

    function VO(bb) {
      yO = bb
    }

    function FO(bb, ub, hb) {
      var Bb;
      null === (Bb = yO) || void 0 === Bb || Bb(bb, ub, hb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class fO {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(bb, ub, hb, Bb, Ob) {
        hb !== this.pipeline && (bb.setPipeline(hb), this.pipeline = hb), bb.setBindGroup(1, Bb, [Ob]);
        const Gb = ub.material.bindGroup;
        Gb !== this.materialGroup && (bb.setBindGroup(2, Gb), this.materialGroup = Gb);
        const Ub = ub.program.packGroup;
        Ub && Ub !== this.packGroup && (bb.setBindGroup(Du.d, Ub), this.packGroup = Ub);
        const {
          vertexBuffers: Lb,
          vertexOffsets: Yb
        } = this;
        for (let Sb = 0; Sb < ub.vertexBuffers.length; Sb++) Lb[Sb] === ub.vertexBuffers[Sb] && Yb[Sb] === ub.vertexOffsets[Sb] || (bb.setVertexBuffer(Sb, ub.vertexBuffers[Sb], ub.vertexOffsets[Sb]), Lb[Sb] = ub.vertexBuffers[Sb], Yb[Sb] = ub.vertexOffsets[Sb]);
        ub.indexBuffer && ub.indexBuffer !== this.indexBuffer && (bb.setIndexBuffer(ub.indexBuffer, ub.indexFormat), this.indexBuffer = ub.indexBuffer)
      }
    }
    class kO {
      constructor(bb, ub, hb, Bb) {
        this.modelMeshes = bb, this.I9 = ub, this.maker = hb, this.warnOnce = Bb, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(bb) {
        this.collectGroup(bb, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(bb, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(bb, 1, this.frontDraws, this.frontDraws, !0);
        for (const ub of this.modelMeshes.groupIds())(ub < -1 || ub > 1) && this.warnOnce(`group:${ub}`, `rendering group ${ub} is not drawn`);
        for (const ub of this.I9.groupIds())(ub < -1 || ub > 1) && this.warnOnce(`group:${ub}`, `rendering group ${ub} is not drawn`);
        this.opaqueDraws.sort(TO), this.transparentDraws.sort(cO)
      }
      collectGroup(bb, ub, hb, Bb, Ob) {
        const Gb = this.modelMeshes.group(ub),
          Ub = this.I9.group(ub),
          Lb = 0 === ub ? null === Ub || void 0 === Ub ? void 0 : Ub.opaque : void 0;
        this.collectList(bb, null === Gb || void 0 === Gb ? void 0 : Gb.opaque, Lb || null === Ub || void 0 === Ub ? void 0 : Ub.opaque, ub, !1, hb, Ob), Lb && (this.I9.drawn += this.maker.bundleDraws(bb, Lb, ub)), this.collectList(bb, null === Gb || void 0 === Gb ? void 0 : Gb.alphaTest, void 0, ub, !1, hb, Ob), this.collectList(bb, null === Gb || void 0 === Gb ? void 0 : Gb.transparent, null === Ub || void 0 === Ub ? void 0 : Ub.transparent, ub, !0, Bb, Ob)
      }
      collectList(bb, ub, hb, Bb, Ob, Gb, Ub) {
        var Lb;
        const Yb = Gb.length;
        ub && this.maker.pushDraws(bb, ub.units, ub.units.length, Bb, Ob, Gb, ub.rows), hb && (this.I9.drawn += this.maker.pushDraws(bb, hb, hb.length, Bb, Ob, Gb));
        const Sb = Ob ? null === (Lb = this.modelMeshes.group(Bb)) || void 0 === Lb ? void 0 : Lb.text : void 0;
        Sb && this.maker.pushDraws(bb, Sb.units, Sb.units.length, Bb, !0, Gb, Sb.rows), Ub && QO(Gb, Yb)
      }
    }

    function TO(bb, ub) {
      return bb.program.id - ub.program.id || bb.material.owner.uniqueId - ub.material.owner.uniqueId
    }

    function cO(bb, ub) {
      return bb.material.owner.uniqueId - ub.material.owner.uniqueId
    }

    function QO(bb, ub) {
      for (let hb = ub + 1; hb < bb.length; hb++) {
        const Bb = bb[hb];
        let Ob = hb - 1;
        for (; Ob >= ub && cO(bb[Ob], Bb) > 0; Ob--) bb[Ob + 1] = bb[Ob];
        bb[Ob + 1] = Bb
      }
    }
    const RO = {};

    function bG(bb) {
      return bb.hasThinInstances ? "thin" : bb.UOb || bb._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function uG(bb, ub, hb) {
      return bb ? (hb._needUVs = !0, bb.optimizeUVAllocation && (0, xb.D)(bb.matrix) ? (hb[`${ub}DIRECTUV`] = bb.uvSet + 1, hb[`MAINUV${bb.uvSet+1}`] = !0) : hb[`${ub}DIRECTUV`] = 0, !0) : (hb[`${ub}DIRECTUV`] = 0, !1)
    }

    function hG(bb) {
      const ub = new Map;
      for (const hb in bb) {
        if (95 === hb.charCodeAt(0)) continue;
        const Bb = bb[hb],
          Ob = typeof Bb;
        "number" === Ob || "string" === Ob ? ub.set(hb, String(Bb)) : Bb && "function" !== Ob && ub.set(hb, !0)
      }
      return ub
    }

    function BG(bb) {
      const ub = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: hb
        }
        of bb.features)
        for (const bb in hb) ub[bb] = hb[bb];
      return ub
    }

    function OG(bb) {
      const ub = bb.parts.geometry;
      return null !== ub && void 0 !== ub && ub.live ? ub : null
    }

    function GG(bb) {
      var ub;
      return null !== (ub = OG(bb)) && void 0 !== ub ? ub : RO
    }
    class UG {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = bb, this.warnOnce = ub, this.programWithModel = hb, this.packFailed = Bb, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(bb, ub, hb, Bb, Ob) {
        const Gb = ub.owner;
        let Ub = this.drawStates.get(ub);
        if (!Ub) {
          const bb = ub.parts.materials[ub.range];
          if (!bb) return this.warnOnce("model", `${hb.name} on ${Gb.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Ub = {
            defines: BG(bb),
            model: bb,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Ob,
            groupId: Bb,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(ub, Ub)
        }
        if (this.programCurrent(Ub, ub, Ob, Bb)) return Ub.program;
        const {
          model: Lb
        } = Ub, Yb = GG(ub), Sb = this.instanceLayout(Gb, Ob), ab = this.definesBits(Gb);
        if (!this.prepareModelDefines(bb, Gb, Lb, Ub.defines, Bb, Ob)) return null;
        Ub.instancing = Ob, Ub.groupId = Bb, Ub.modelVersion = Lb.version, Ub.geometry = Yb, Ub.instanceLayout = Sb, Ub.definesBits = ab;
        const Hb = function(bb) {
          let ub = "";
          for (const [hb, Bb] of bb) ub += !0 === Bb ? `${hb};` : `${hb}=${Bb};`;
          return ub
        }(hG(Ub.defines));
        return Hb === Ub.definesKey && Ub.packVariant === this.modelPackVariant && Ub.program && !this.packFailed(Ub.program) || (Ub.definesKey = Hb, Ub.packVariant = this.modelPackVariant, Ub.program = this.programWithModel(Lb, Ub.defines, Hb)), Ub.program
      }
      programCurrent(bb, ub, hb, Bb) {
        return null !== bb.program && !this.packFailed(bb.program) && bb.instancing === hb && bb.groupId === Bb && this.definesHold(bb, ub, hb)
      }
      definesHold(bb, ub, hb) {
        return bb.modelVersion === bb.model.version && bb.geometry === GG(ub) && bb.instanceLayout === this.instanceLayout(ub.owner, hb) && bb.definesBits === this.definesBits(ub.owner) && bb.packVariant === this.modelPackVariant
      }
      modelPackKind(bb) {
        var ub;
        return 0 === this.modelPackVariant ? null : null !== (ub = (0, nb.v)(bb, jb.i.name)) && void 0 !== ub && ub.active ? "placed" : bb.item ? "item" : bb.lifeform ? "lifeform" : bb.box ? "box" : null
      }
      instanceLayout(bb, ub) {
        var hb, Bb, Ob;
        return "thin" === ub ? null !== (Ob = this.resources.y5.get(bb)) && void 0 !== Ob ? Ob : null : "instanced" === ub && null !== (hb = null === (Bb = bb._userInstancedBuffersStorage) || void 0 === Bb ? void 0 : Bb.interleavedKinds) && void 0 !== hb ? hb : null
      }
      definesBits(bb) {
        const ub = this.view;
        return (bb.visibility < 1 ? 1 : 0) | (bb.hasVertexAlpha ? 2 : 0) | (bb.applyFog ? 4 : 0) | (bb.useVertexColors ? 8 : 0) | (bb.nonUniformScaling ? 16 : 0) | (ub.fogEnabled && 0 !== ub.fogMode ? 32 : 0) | (ub.lightsEnabled ? 64 : 0) | ub.lightCount << 7
      }
      prepareLightDefines(bb, ub, hb) {
        let Bb = 0;
        if (this.view.lightsEnabled && !ub) {
          const ub = Math.min(hb, 4);
          for (; Bb < this.view.lightCount && (bb[`LIGHT${Bb}`] = !0, bb[`LITE_LIGHT${Bb}_SLOT`] = Bb, Bb++, bb._needNormals = !0, Bb !== ub););
        }
        for (let Ob = Bb; Ob < 4; Ob++) bb[`LIGHT${Ob}`] = !1, bb[`LITE_LIGHT${Ob}_SLOT`] = void 0
      }
      prepareModelDefines(bb, ub, hb, Bb, Ob, Gb) {
        const {
          features: Ub
        } = hb;
        Bb._needNormals = !1, Bb._needUVs = !1;
        const Lb = this.view;
        this.prepareLightDefines(Bb, hb.disableLighting, hb.maxSimultaneousLights), Bb.MAINUV1 = !1, Bb.MAINUV2 = !1;
        const Yb = hb.diffuseTexture;
        Yb ? (Bb._needUVs = !0, Bb.DIFFUSE = !0, Yb.optimizeUVAllocation && (0, xb.D)(Yb.matrix) ? (Bb.DIFFUSEDIRECTUV = Yb.uvSet + 1, Bb[`MAINUV${Yb.uvSet+1}`] = !0) : Bb.DIFFUSEDIRECTUV = 0, Yb.uvSet > 1 && this.warnOnce(`uvset:${hb.name}`, `${hb.name} samples UV set ${Yb.uvSet+1}, which is not supported`)) : (Bb.DIFFUSE = !1, Bb.DIFFUSEDIRECTUV = 0);
        const Sb = hb.opacityTexture,
          ab = hb.emissiveTexture;
        Bb.OPACITY = uG(Sb, "OPACITY", Bb), Bb.OPACITYRGB = null !== Sb && Sb.getAlphaFromRGB, Bb.EMISSIVE = uG(ab, "EMISSIVE", Bb), (Sb && Sb.uvSet > 1 || ab && ab.uvSet > 1) && this.warnOnce(`uvset:${hb.name}`, `${hb.name} samples a UV set past 2, which is not supported`);
        const Hb = hb.reflectionTexture,
          wb = null !== Hb;
        if (wb) {
          if (!this.resources.boundTexture(Hb)) return !1;
          Bb._needNormals = !0
        }
        Bb.REFLECTION = wb, Bb.REFLECTIONMAP_3D = wb, Bb.REFLECTIONMAP_SKYBOX = wb, Bb.REFLECTIONMAP_OPPOSITEZ = wb && (bb.useRightHandedSystem ? !Hb.invertZ : Hb.invertZ), Bb.ROUGHNESS = wb && hb.roughness > 0, Bb.REFLECTIONOVERALPHA = wb && hb.useReflectionOverAlpha, Bb.LITE_REFLECTION_LUMINANCE = wb && "cube" === Hb.source.kind && Hb.source.luminance, (ub.skeleton || ub.morphTargetManager) && this.warnOnce(`skin:${ub.name}`, `${ub.name} has bones or morph targets, which are not supported`), Bb.FOG = hb.fogEnabled && ub.applyFog && Lb.fogEnabled && 0 !== Lb.fogMode, Bb.NONUNIFORMSCALING = ub.nonUniformScaling;
        const {
          visibility: Zb,
          hasVertexAlpha: Xb
        } = ub;
        Bb.ALPHATEST = (0, nb.Q)(hb, Zb, Xb), Bb.ALPHAFROMDIFFUSE = (0, nb.eb)(hb), Bb.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== hb.transparencyMode, Bb.ALPHABLEND = null === hb.transparencyMode || (0, nb.P)(hb, Zb, Xb), Bb.PREMULTIPLYALPHA = 7 === hb.alphaMode || 8 === hb.alphaMode, Bb.EMISSIVEASILLUMINATION = hb.useEmissiveAsIllumination, Bb.LINKEMISSIVEWITHDIFFUSE = hb.linkEmissiveWithDiffuse, Bb.TWOSIDEDLIGHTING = !hb.backFaceCulling && hb.twoSidedLighting, Bb.INSTANCES = "none" !== Gb, Bb.THIN_INSTANCES = "thin" === Gb, Bb.LITE_FRONT_LAYER = Ob >= 1;
        for (const {
            feature: rb,
            state: jb,
            active: nb
          }
          of Ub) {
          var pb, ob;
          if (nb) null === (pb = (ob = (0, au.i)(rb)).prepareDefinesBeforeAttributes) || void 0 === pb || pb.call(ob, jb, Bb, bb, ub)
        }
        this.modelPackKind(hb) && (Bb._needNormals = !0), Bb.NORMAL = Bb._needNormals && ub.isVerticesDataPresent("normal"), Bb.UV1 = Bb._needUVs && ub.isVerticesDataPresent("uv"), Bb.UV2 = Bb._needUVs && ub.isVerticesDataPresent("uv2");
        const Ab = ub.useVertexColors && ub.isVerticesDataPresent("color");
        Bb.VERTEXCOLOR = Ab, Bb.VERTEXALPHA = ub.hasVertexAlpha && Ab, Bb.INSTANCESCOLOR = "none" !== Gb && ub.isVerticesDataPresent("instanceColor");
        for (const {
            feature: rb,
            state: jb,
            active: nb
          }
          of Ub) {
          var lb, Kb;
          if (nb) null === (lb = (Kb = (0, au.i)(rb)).prepareDefines) || void 0 === lb || lb.call(Kb, jb, Bb, bb, ub, hb)
        }
        const Wb = bb.UX();
        for (const {
            feature: rb,
            state: jb,
            active: nb
          }
          of Ub) {
          var Cb, db;
          if (nb && !1 === (null === (Cb = (db = (0, au.i)(rb)).isReadyForSubMesh) || void 0 === Cb ? void 0 : Cb.call(db, jb, Bb, bb, Wb))) return !1
        }
        return !0
      }
    }

    function LG(bb, ub, hb) {
      return bb.codeVersion !== ub.version && function(bb, ub) {
        const hb = [],
          Bb = [];
        for (const {
            feature: wb,
            state: Zb,
            active: Xb
          }
          of ub.features) {
          var Ob, Gb, Ub, Lb;
          if (Xb) YG(null === (Ob = (Gb = (0, au.i)(wb)).getCustomCode) || void 0 === Ob ? void 0 : Ob.call(Gb, Zb, "vertex", db.d.WGSL), hb), YG(null === (Ub = (Lb = (0, au.i)(wb)).getCustomCode) || void 0 === Ub ? void 0 : Ub.call(Lb, Zb, "fragment", db.d.WGSL), Bb)
        }
        const Yb = [];
        for (const {
            feature: wb,
            state: Zb
          }
          of ub.features) {
          var Sb, ab;
          const bb = null === (Sb = (ab = (0, au.i)(wb)).getUniforms) || void 0 === Sb ? void 0 : Sb.call(ab, Zb, db.d.WGSL);
          for (const ub of null !== (Hb = null === bb || void 0 === bb ? void 0 : bb.ubo) && void 0 !== Hb ? Hb : []) {
            var Hb;
            ub.size && ub.type && Yb.push({
              name: ub.name,
              type: ub.type,
              arraySize: ub.arraySize
            })
          }
        }
        bb.vertexCode = hb, bb.fragmentCode = Bb, bb.pluginUniforms = Yb, bb.codeKey = JSON.stringify([hb, Bb, Yb]), bb.codeVersion = ub.version
      }(bb, ub), `${hb}#${bb.codeKey}`
    }

    function YG(bb, ub) {
      if (bb)
        for (const hb in bb) bb[hb] && ub.push([hb, bb[hb]])
    }
    const SG = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class aG {
      constructor(bb) {
        this.warnOnce = bb, this.states = new Map
      }
      renderState(bb, ub, hb, Bb) {
        var Ob;
        let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Ub = null !== (Ob = bb.sideOrientation) && void 0 !== Ob ? Ob : ub.sideOrientation;
        ub._getWorldMatrixDeterminant() < 0 && (Ub = 0 === Ub ? 1 : 0);
        const Lb = "triangle-list" === Gb,
          Yb = hb ? bb.alphaMode : 0,
          Sb = (!hb || (0 === Yb || bb.forceDepthWrite)) && !bb.disableDepthWrite,
          ab = Lb && bb.backFaceCulling ? bb.cullBackFaces ? "back" : "front" : "none",
          Hb = Lb && 0 !== Ub ? "ccw" : "cw",
          wb = bb.depthFunction,
          Zb = Lb ? bb.zOffset : 0,
          Xb = Lb ? bb.zOffsetUnits : 0,
          pb = !bb.disableColorWrite;
        return Bb && Bb.alphaMode === Yb && Bb.depthWrite === Sb && Bb.depthFunction === wb && Bb.cullMode === ab && Bb.frontFace === Hb && Bb.zOffset === Zb && Bb.zOffsetUnits === Xb && Bb.colourWrite === pb && Bb.topology === Gb ? Bb : this.stateFor(Yb, Sb, wb, ab, Hb, Zb, Xb, pb, Gb)
      }
      stateFor(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        const Sb = `${bb}|${ub}|${hb}|${Bb}|${Ob}|${Gb}|${Ub}|${Lb}|${Yb}`;
        let ab = this.states.get(Sb);
        if (!ab) {
          var Hb;
          const wb = bb ? EO(bb) : null;
          bb && !wb && this.warnOnce(`alpha:${bb}`, `alpha mode ${bb} is not supported`), ab = {
            key: Sb,
            alphaMode: bb,
            depthFunction: hb,
            zOffset: Gb,
            zOffsetUnits: Ub,
            topology: Yb,
            blend: wb,
            depthWrite: ub,
            depthCompare: hb && null !== (Hb = SG.get(hb)) && void 0 !== Hb ? Hb : null,
            cullMode: Bb,
            frontFace: Ob,
            depthBias: -Ub,
            depthBiasSlopeScale: -Gb,
            colourWrite: Lb
          }, this.states.set(Sb, ab)
        }
        return ab
      }
    }
    var HG = hb(37069);

    function wG(bb) {
      if (!bb.frozen) return -1;
      let ub = bb.version;
      for (const {
          feature: hb,
          state: Bb,
          active: Ob
        }
        of bb.features) {
        if (!Ob || !hb.bind) continue;
        const bb = (0, au.i)(hb).uniformsVersion;
        if (!bb) return -1;
        ub += bb(Bb)
      }
      return ub
    }
    class ZG {
      constructor(bb, ub, hb) {
        this.slots = bb, this.data = ub, this.textures = hb, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(bb, ub) {
        this.write4(bb, ub, 0, 0, 0, 1)
      }
      updateFloat2(bb, ub, hb) {
        this.write4(bb, ub, hb, 0, 0, 2)
      }
      updateFloat3(bb, ub, hb, Bb) {
        this.write4(bb, ub, hb, Bb, 0, 3)
      }
      updateFloat4(bb, ub, hb, Bb, Ob) {
        this.write4(bb, ub, hb, Bb, Ob, 4)
      }
      updateVector3(bb, ub) {
        this.write4(bb, ub.x, ub.y, ub.z, 0, 3)
      }
      updateVector4(bb, ub) {
        this.write4(bb, ub.x, ub.y, ub.z, ub.w, 4)
      }
      updateColor3(bb, ub) {
        this.write4(bb, ub.r, ub.g, ub.b, 0, 3)
      }
      updateColor4(bb, ub, hb) {
        this.write4(bb, ub.r, ub.g, ub.b, hb, 4)
      }
      updateFloatsFrom(bb, ub, hb, Bb) {
        const Ob = this.slots.get(bb);
        if (!Ob) return;
        const Gb = this.data,
          Ub = Ob.offset;
        for (let Lb = 0; Lb < Bb; Lb++) Gb[Ub + Lb] = ub[hb + Lb]
      }
      updateFloat3TimesFloats(bb, ub, hb, Bb) {
        const Ob = this.slots.get(bb);
        if (!Ob) return;
        const Gb = this.data,
          Ub = Ob.offset;
        Gb[Ub] = ub[hb] * Bb[0], Gb[Ub + 1] = ub[hb + 1] * Bb[1], Gb[Ub + 2] = ub[hb + 2] * Bb[2]
      }
      S_(bb, ub) {
        const hb = this.slots.get(bb);
        hb && this.data.set(ub.m, hb.offset)
      }
      updateMatrixFloats(bb, ub) {
        const hb = this.slots.get(bb);
        hb && this.data.set(ub, hb.offset)
      }
      updateFloatArray(bb, ub) {
        const hb = this.slots.get(bb);
        if (!hb) return;
        if (!hb.arraySize || hb.stride === hb.floats) return void this.data.set(ub, hb.offset);
        const Bb = Math.min(ub.length, hb.floats * hb.arraySize);
        for (let Ob = 0; Ob < Bb; Ob++) this.data[hb.offset + Math.floor(Ob / hb.floats) * hb.stride + Ob % hb.floats] = ub[Ob]
      }
      updateArray(bb, ub) {
        this.updateFloatArray(bb, ub)
      }
      setTexture(bb, ub) {
        this.textures.set(bb, ub), this.expected.delete(bb)
      }
      expectTexture(bb) {
        this.textures.set(bb, null), this.expected.add(bb)
      }
      write4(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = this.slots.get(bb);
        if (!Ub) return;
        const Lb = this.data,
          Yb = Ub.offset;
        Lb[Yb] = ub, Gb > 1 && (Lb[Yb + 1] = hb), Gb > 2 && (Lb[Yb + 2] = Bb), Gb > 3 && (Lb[Yb + 3] = Ob)
      }
    }

    function XG(bb, ub) {
      const hb = mB,
        Bb = HG.i,
        Ob = bb.lights,
        Gb = Math.min(bb.lightCount, 8);
      for (let Ub = 0; Ub < Gb; Ub++) {
        const bb = hb.lights + Ub * hb.lightStride,
          Gb = Ub * HG.c;
        ub[bb] = Ob[Gb + Bb.vector], ub[bb + 1] = Ob[Gb + Bb.vector + 1], ub[bb + 2] = Ob[Gb + Bb.vector + 2], ub[bb + 3] = Ob[Gb + Bb.kind] === HG.f.directional ? 1 : 0, ub[bb + 4] = Ob[Gb + Bb.diffuse], ub[bb + 5] = Ob[Gb + Bb.diffuse + 1], ub[bb + 6] = Ob[Gb + Bb.diffuse + 2], ub[bb + 7] = Ob[Gb + Bb.range], ub[bb + 8] = Ob[Gb + Bb.specular], ub[bb + 9] = Ob[Gb + Bb.specular + 1], ub[bb + 10] = Ob[Gb + Bb.specular + 2], ub[bb + 11] = Ob[Gb + Bb.range]
      }
      ub[hb.fogInfos] = bb.fogMode, ub[hb.fogInfos + 1] = bb.fogStart, ub[hb.fogInfos + 2] = bb.fogEnd, ub[hb.fogInfos + 3] = bb.fogDensity, ub[hb.fogColour] = bb.fogColour[0], ub[hb.fogColour + 1] = bb.fogColour[1], ub[hb.fogColour + 2] = bb.fogColour[2], ub[hb.outputHeight] = bb.renderHeight, ub[hb.animTick] = bb.animTick, ub[hb.timeMs] = bb.timeMs
    }
    class pG {
      constructor(bb) {
        this.instancesOf = bb
      }
      refreshModelUniforms(bb, ub, hb, Bb) {
        const Ob = wG(hb);
        if (Ob >= 0 && Ob === ub.heldVersion && ub.textures.get("diffuseSampler") === hb.diffuseTexture && ub.textures.get("reflectionCubeSampler") === hb.reflectionTexture && ub.textures.get("opacitySampler") === hb.opacityTexture && ub.textures.get("emissiveSampler") === hb.emissiveTexture) return !0;
        if (Ob < 0)
          for (const Gb of this.instancesOf(hb)) Gb.heldVersion = -1;
        return this.writeModelUniforms(bb, ub, hb, Bb), ub.heldVersion = Ob, !1
      }
      writeModelUniforms(bb, ub, hb, Bb) {
        const {
          ubo: Ob
        } = ub, Gb = hb.diffuseTexture, Ub = hb.diffuseColor;
        Ob.updateFloat4("vDiffuseColor", Ub[0], Ub[1], Ub[2], hb.alpha), Gb && (Ob.updateFloat2("vDiffuseInfos", Gb.uvSet, Gb.level), Ob.updateMatrixFloats("diffuseMatrix", Gb.matrix)), Ob.updateFloat("alphaCutOff", hb.alphaCutOff), Ob.updateFloatsFrom("vEmissiveColor", hb.emissiveColor, 0, 3), Ob.updateFloat3TimesFloats("vAmbientColor", Bb.ambientColour, 0, hb.ambientColor);
        const Lb = hb.specularColor;
        Ob.updateFloat4("vSpecularColor", Lb[0], Lb[1], Lb[2], hb.specularPower), Ob.setTexture("diffuseSampler", Gb);
        const Yb = hb.opacityTexture;
        Yb && (Ob.updateFloat2("vOpacityInfos", Yb.uvSet, Yb.level), Ob.updateMatrixFloats("opacityMatrix", Yb.matrix)), Ob.setTexture("opacitySampler", Yb);
        const Sb = hb.emissiveTexture;
        Sb && (Ob.updateFloat2("vEmissiveInfos", Sb.uvSet, Sb.level), Ob.updateMatrixFloats("emissiveMatrix", Sb.matrix)), Ob.setTexture("emissiveSampler", Sb);
        const ab = hb.reflectionTexture;
        ab && Ob.updateMatrixFloats("reflectionMatrix", ab.matrix), Ob.updateFloat2("vReflectionInfos", ab ? ab.level * bb.iblIntensity : 0, hb.roughness), Ob.setTexture("reflectionCubeSampler", ab);
        const Hb = bb.UX();
        for (const {
            feature: Xb,
            state: pb,
            active: ob
          }
          of hb.features) {
          var wb, Zb;
          if (ob) null === (wb = (Zb = (0, au.i)(Xb)).bind) || void 0 === wb || wb.call(Zb, pb, Ob, bb, Hb)
        }
      }
    }

    function oG(bb) {
      const ub = bb.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(ub) ? "u32" : /i32|^vec\di$/.test(ub) ? "i32" : "f32"
    }

    function AG(bb, ub) {
      const hb = bb.getSize(),
        Bb = oG(ub),
        Ob = bb => 4 === hb ? `${bb}x4` : 2 === hb ? `${bb}x2` : null;
      if ("f32" === Bb) {
        if (5126 === bb.type) return 1 === hb ? "float32" : hb >= 2 && hb <= 4 ? `float32x${hb}` : null;
        if (!bb.normalized) return null;
        switch (bb.type) {
          case 5121:
            return Ob("unorm8");
          case 5120:
            return Ob("snorm8");
          case 5123:
            return Ob("unorm16");
          case 5122:
            return Ob("snorm16")
        }
        return null
      }
      const Gb = "u32" === Bb ? "uint" : "sint";
      switch (bb.type) {
        case 5125:
        case 5124:
          return 1 === hb ? `${Gb}32` : hb <= 4 ? `${Gb}32x${hb}` : null;
        case 5121:
        case 5120:
          return Ob(`${Gb}8`);
        case 5123:
        case 5122:
          return Ob(`${Gb}16`)
      }
      return null
    }

    function lG(bb) {
      var ub;
      const hb = /(8|16|32)(?:x(\d))?$/.exec(bb);
      return hb ? Number(hb[1]) / 8 * Number(null !== (ub = hb[2]) && void 0 !== ub ? ub : 1) : 4
    }
    class KG {
      constructor(bb, ub, hb) {
        this.resources = bb, this.limits = ub, this.warnOnce = hb, this.layouts = new Map
      }
      resolveInputs(bb, ub, hb, Bb) {
        const Ob = [],
          Gb = hb.program.attributes,
          Ub = [];
        for (let ab = 0; ab < Gb.length; ab++) {
          const hb = Gb[ab],
            Lb = hb.optional ? null : this.resources.vertexInput(bb, hb.name, Bb);
          if (!Lb) {
            const bb = oG(hb.type),
              ub = "u32" === bb ? "uint32x4" : "i32" === bb ? "sint32x4" : "float32x4";
            Ub.push(null);
            const Bb = Ob.find((bb => null === bb.data));
            Bb ? Bb.attributes.push({
              shaderLocation: ab,
              offset: 0,
              format: ub
            }) : Ob.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: ab,
                offset: 0,
                format: ub
              }]
            });
            continue
          }
          const Yb = Lb.getBuffer();
          Ub.push(Lb);
          const Sb = AG(Lb, hb.type);
          if (!Sb) return this.warnOnce(`format:${ub}:${hb.name}`, `${ub}'s ${hb.name} (type ${Lb.type}, size ${Lb.getSize()}) has no WebGPU vertex format`), null;
          const Hb = Lb.getIsInstanced() ? "instance" : "vertex",
            wb = Lb.byteStride,
            Zb = lG(Sb),
            Xb = Ob.find((bb => bb.data === Yb && bb.stride === wb && bb.step === Hb && Lb.byteOffset >= bb.base && Lb.byteOffset - bb.base + Zb <= wb));
          Xb ? Xb.attributes.push({
            shaderLocation: ab,
            offset: Lb.byteOffset - Xb.base,
            format: Sb
          }) : Ob.push({
            data: Yb,
            base: Lb.byteOffset,
            stride: wb,
            step: Hb,
            attributes: [{
              shaderLocation: ab,
              offset: 0,
              format: Sb
            }]
          })
        }
        if (Ob.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${ub}`, `${ub} needs ${Ob.length} vertex buffers`), null;
        let Lb = "";
        for (const ab of Ob) {
          Lb += `${ab.stride}${"instance"===ab.step?"i":"v"}`;
          for (const bb of ab.attributes) Lb += `,${bb.shaderLocation}:${bb.offset}:${bb.format}`;
          Lb += ";"
        }
        let Yb = this.layouts.get(Lb);
        Yb || (Yb = {
          key: Lb,
          buffers: Ob.map((bb => ({
            arrayStride: bb.stride,
            stepMode: bb.step,
            attributes: bb.attributes
          }))),
          instanceEnds: Ob.map((bb => {
            let ub = -1;
            if ("instance" === bb.step)
              for (const hb of bb.attributes) ub = Math.max(ub, hb.offset + lG(hb.format));
            return ub
          }))
        }, this.layouts.set(Lb, Yb));
        const Sb = Ob.map((bb => bb.base));
        return {
          program: hb,
          sources: Ub,
          layout: Yb,
          slotData: Ob.map((bb => bb.data)),
          o4: Sb,
          buffers: [],
          offsets: Sb,
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

    function WG(bb, ub, hb, Bb) {
      const Ob = ub.program.program.attributes;
      for (let Gb = 0; Gb < Ob.length; Gb++) {
        if ((Ob[Gb].optional ? null : hb.vertexInput(bb, Ob[Gb].name, Bb)) !== ub.sources[Gb]) return !1
      }
      return !0
    }
    const CG = 64;
    class dG {
      constructor(bb, ub, hb, Bb) {
        this.device = bb, this.layout = ub, this.frameBuffer = hb, this.label = Bb, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(bb) {
        if (bb * CG <= this.data.length) return !1;
        let ub = 2 * this.data.length;
        for (; bb * CG > ub;) ub *= 2;
        const hb = new Float32Array(ub);
        return hb.set(this.data), this.data = hb, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ob = this.data,
          Gb = bb * CG;
        let Ub = Ob[Gb + 16] !== hb;
        for (let Lb = 0; Lb < 16 && !Ub; Lb++) Ub = Ob[Gb + Lb] !== ub[Bb + Lb];
        if (Ub) {
          for (let bb = 0; bb < 16; bb++) Ob[Gb + bb] = ub[Bb + bb];
          Ob[Gb + 16] = hb
        }
        return Ub
      }
      upload(bb, ub) {
        this.device.queue.writeBuffer(this.buffer, bb * IB, this.data, bb * CG, (ub - bb) * CG)
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

    function rG(bb) {
      return bb.gpu[xb.e.lite] ??= bb.materials.map(((ub, hb) => ({
        parts: bb,
        range: hb,
        owner: bb.owner
      })))
    }

    function jG(bb) {
      var ub, hb, Bb;
      return null !== (ub = null !== (hb = null === (Bb = bb.parts.materials[bb.range]) || void 0 === Bb ? void 0 : Bb.mirror) && void 0 !== hb ? hb : bb.owner.material) && void 0 !== ub ? ub : null
    }
    const nG = ["opaque", "alphaTest", "transparent", "text"];
    class DG {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Su.d)("Lite: ")
      }
      attach(bb, ub) {
        this.model = bb, this.mirror = ub
      }
      get worlds() {
        return this.model.nodes.eH
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
        for (const [ub, hb] of this.groups)
          for (const Bb of nG)
            for (const Ob of hb[Bb].units) bb(Ob.owner, "text" === Bb ? "transparent" : Bb, ub)
      }
      select(bb, ub) {
        this.frame++, this.selectedCount = 0;
        for (const Lb of this.groups.values())
          for (const bb of nG) Lb[bb].units.length = 0, Lb[bb].rows.length = 0;
        const {
          model: hb,
          mirror: Bb
        } = this;
        if (!hb || !Bb || !bb) return;
        this.rows.length < hb.nodes.LH && (this.rows = new Int32Array(hb.nodes.LH));
        const Ob = this.rows,
          Gb = hb.meshes;
        for (let Lb = 0; Lb < Gb.looseCount; Lb++) {
          const bb = Gb.loose[Lb],
            hb = Bb.nodes[bb];
          hb && !hb.isBlocked && hb.isEnabled() && !hb.pa.hasAZeroComponent && Gb.selects(bb, ub.frustum) && (this.activate(hb, bb), this.selectedCount++)
        }
        const Ub = Gb.selectTextPlanes(ub.frustum, Ob);
        for (let Lb = 0; Lb < Ub; Lb++) {
          const ub = Ob[Lb],
            Gb = Bb.nodes[ub],
            Ub = hb.meshes.parts[ub];
          if (!Gb.isVisible || !(Gb.visibility > 0) || 0 === (Gb.layerMask & bb.layerMask) || !Ub) continue;
          const Yb = this.groupOf(hb.meshes.layer[ub]).text;
          for (const bb of rG(Ub)) Yb.units.push(bb), Yb.rows.push(ub);
          this.selectedCount++
        }
      }
      instanceBatch(bb) {
        const ub = this.batchOf(bb);
        return ub.dispatched || (ub.dispatched = ub.renderSelf = !0, ub.row = this.rowOf(bb)), ub
      }
      rowOf(bb) {
        return bb.row
      }
      activate(bb, ub) {
        if (!bb.pN) {
          const hb = bb;
          if (hb.UOb) {
            const bb = this.batchOf(hb);
            bb.dispatched = !0, bb.renderSelf = !0, bb.row = ub
          }
          return void this.dispatch(hb, ub, ub)
        }
        const hb = bb,
          Bb = hb.LOb;
        if (Bb._getWorldMatrixDeterminant() >= 0 !== hb._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Bb.name}`, `A mirrored InstancedMesh of ${Bb.name} is not drawn yet`);
        const Ob = this.batchOf(Bb);
        Ob.instances.push(hb), Ob.rows.push(ub), Ob.dispatched || (Ob.dispatched = !0, this.dispatch(Bb, ub, this.rowOf(Bb)))
      }
      batchOf(bb) {
        let ub = this.batches.get(bb);
        return ub || (ub = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(bb, ub)), ub.frame !== this.frame && (ub.frame = this.frame, ub.dispatched = !1, ub.renderSelf = !1, ub.instances.length = 0, ub.rows.length = 0), ub
      }
      dispatch(bb, ub, hb) {
        const {
          layer: Bb,
          parts: Ob
        } = this.model.meshes;
        if (!Ob[ub]) return;
        const Gb = this.groupOf(Bb[ub]),
          Ub = bb;
        for (const Lb of rG(Ob[ub])) {
          const bb = jG(Lb);
          if (!bb) continue;
          const ub = bb.needAlphaBlendingForMesh(Ub) ? Gb.transparent : bb.needAlphaTestingForMesh(Ub) ? Gb.alphaTest : Gb.opaque;
          ub.units.push(Lb), ub.rows.push(hb)
        }
      }
      groupOf(bb) {
        let ub = this.groups.get(bb);
        return ub || (ub = {
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
        }, this.groups.set(bb, ub)), ub
      }
    }
    class xG {
      constructor() {
        this.MS = new Map, this.enabled = [], this.groups = new Map, this.HZ = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(bb) {
        if (this.MS.has(bb)) return;
        const ub = {
          mesh: bb,
          observer: bb.onEffectiveEnabledStateChangedObservable.add((bb => {
            this.Zx(ub, bb)
          })),
          index: -1,
          steady: null
        };
        this.MS.set(bb, ub), this.Zx(ub, bb.isEnabled())
      }
      remove(bb) {
        const ub = this.MS.get(bb);
        ub && (ub.observer.remove(!0), this.Zx(ub, !1), this.MS.delete(bb))
      }
      base(bb) {
        return this.MS.get(bb)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          MS: this.MS.size
        }
      }
      forEachSelected(bb) {
        for (const [ub, hb] of this.groups) {
          for (const Bb of hb.opaque) bb(Bb.owner, "opaque", ub);
          for (const Bb of hb.transparent) bb(Bb.owner, "transparent", ub)
        }
        for (const ub of this.HZ) bb(ub.mesh, "opaque", 0)
      }
      group(bb) {
        return this.groups.get(bb)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(bb, ub) {
        this.drawn = 0, this.selected = 0, this.HZ.length = 0;
        for (const Bb of this.groups.values()) Bb.opaque.length = 0, Bb.transparent.length = 0;
        if (!bb) return;
        const hb = this.enabled;
        for (let Bb = 0; Bb < hb.length; Bb++) {
          const Ob = hb[Bb];
          if (Ob.steady && ub(Ob, bb)) {
            this.selected++, this.HZ.push(Ob);
            continue
          }
          const Gb = Ob.mesh;
          if (Gb.isBlocked || Gb.pa.hasAZeroComponent) continue;
          if (!Gb.isVisible || Gb.visibility <= 0 || 0 === (Gb.layerMask & bb.layerMask)) continue;
          if (Gb.UOb) {
            this.warned.has(Gb.name) || (this.warned.add(Gb.name), console.warn(`Lite: thin instance base ${Gb.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Ub
          } = Gb;
          if (!Ub) continue;
          Gb.computeWorldMatrix(), this.selected++;
          const Lb = this.listsFor(Gb.renderingGroupId);
          for (const bb of rG(Ub)) {
            const ub = jG(bb);
            ub && (ub.needAlphaBlendingForMesh(Gb) ? Lb.transparent.push(bb) : Lb.opaque.push(bb))
          }
        }
      }
      Zx(bb, ub) {
        if (ub === bb.index >= 0) return;
        bb.steady = null;
        const hb = this.enabled;
        if (ub) bb.index = hb.length, hb.push(bb);
        else {
          const ub = hb.pop();
          ub !== bb && (hb[bb.index] = ub, ub.index = bb.index), bb.index = -1
        }
      }
      listsFor(bb) {
        let ub = this.groups.get(bb);
        return ub || (ub = {
          opaque: [],
          transparent: []
        }, this.groups.set(bb, ub)), ub
      }
    }
    var zG = hb(39189);
    class gG {
      constructor() {
        this.bundle = null, this.stale = !0, this.MS = new Set
      }
    }
    class iG {
      constructor(bb, ub, hb) {
        this.device = bb, this.slots = ub, this.host = hb, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new gG, this.iJ = new gG, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new fO, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(bb) {
          var ub, hb;
          let Bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ub = null === (hb = globalThis.navigator) || void 0 === hb ? void 0 : hb.userAgent) && void 0 !== ub ? ub : "";
          const Ob = bb.adapterInfo;
          return "intel" === (null === Ob || void 0 === Ob ? void 0 : Ob.vendor) && "gen-12lp" === Ob.architecture && Bb.includes("Windows")
        }(bb), (0, zG.E)(this.direct)
      }
      rW() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, zG.E)(this.directThisFrame)
      }
      add(bb, ub, hb, Bb) {
        let Ob = this.records.get(bb);
        return Ob || (Ob = this.createRecord(bb), this.records.set(bb, Ob)), Ob.recorded && tG(Ob, ub) || (this.bundleOf(Ob).stale = !0), this.place(Ob, ub, hb, Bb), Ob
      }
      bundleOf(bb) {
        return bb.iJ ? this.iJ : this.main
      }
      addAgain(bb, ub, hb, Bb) {
        bb.recorded || (this.bundleOf(bb).stale = !0), this.place(bb, ub, hb, Bb)
      }
      place(bb, ub, hb, Bb) {
        bb.seen = this.frame, bb.iJ && null === bb.draw && (this.iJ.stale = !0), bb.draw = ub, this.drawn++, hb && this.slots.write(bb.slot, hb, Bb) && (this.slotsFrom = Math.min(this.slotsFrom, bb.slot), this.slotsTo = Math.max(this.slotsTo, bb.slot));
        const Ob = this.args,
          Gb = 5 * bb.slot;
        Ob[Gb] === ub.count && Ob[Gb + 1] === ub.instances && Ob[Gb + 2] === ub.first || (Ob[Gb] = ub.count, Ob[Gb + 1] = ub.instances, Ob[Gb + 2] = ub.first, this.argsDirty = !0, this.iJ.stale ||= bb.iJ)
      }
      jW() {
        for (const bb of this.records.values()) bb.seen !== this.frame && (bb.draw && (bb.draw = null, this.args[5 * bb.slot + 1] = 0, this.argsDirty = !0, this.iJ.stale ||= bb.iJ), this.frame - bb.seen > 120 && (this.records.delete(bb.unit), this.freeSlots.push(bb.slot), bb.recorded && (this.bundleOf(bb).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(bb) {
        for (const ub of this.records.values()) ub.draw && ub.seen === this.frame && !ub.iJ && bb(ub.draw, this.slots.data, ub.slot * IB / 4)
      }
      resourceDestroyed(bb) {
        this.main.stale ||= this.main.MS.has(bb), this.iJ.stale ||= this.iJ.MS.has(bb)
      }
      execute(bb, ub, hb) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(bb, ub, hb, "direct"), this.drawn;
        const Bb = this.host.sceneGroup(ub);
        if (!Bb) return this.main.bundle = null, this.iJ.bundle = null, this.recordedSceneGroup = null, this.encode(bb, ub, hb, "direct"), this.drawn;
        this.recordedTarget === hb && this.recordedSceneGroup === Bb || (this.recordedTarget = hb, this.recordedSceneGroup = Bb, this.main.stale = !0, this.iJ.stale = !0);
        const Ob = this.main,
          Gb = this.iJ;
        let Ub = !1;
        !Ob.stale && Ob.bundle || (Ob.bundle = this.record(ub, hb, Bb, "indirect"), Ub = !0);
        const Lb = (0, zG.i)();
        return (Gb.stale || this.rangedEpoch !== Lb) && (this.rangedEpoch = Lb, Gb.bundle = this.drawsRanged() ? this.record(ub, hb, Bb, "iJ") : this.noRangedBundle(), Ub = !0), Ub && (this.bundles = Gb.bundle ? [Ob.bundle, Gb.bundle] : [Ob.bundle]), bb.executeBundles(this.bundles), bb.setBindGroup(0, Bb), this.drawn
      }
      record(bb, ub, hb, Bb) {
        const Ob = this.device.createRenderBundleEncoder({
          label: "iJ" === Bb ? "thin-bases-ranged" : "thin-bases",
          colorFormats: bb._colorFormat ? [bb._colorFormat] : [],
          depthStencilFormat: bb._depthStencilFormat,
          sampleCount: bb._sampleCount
        });
        return Ob.setBindGroup(0, hb), this.encode(Ob, bb, ub, Bb), Ob.finish()
      }
      noRangedBundle() {
        for (const bb of this.records.values()) bb.iJ && (bb.recorded = !1);
        return this.iJ.MS.clear(), this.iJ.stale = !1, null
      }
      drawsRanged() {
        for (const bb of this.records.values())
          if (bb.iJ && bb.draw) return !0;
        return !1
      }
      encode(bb, ub, hb, Bb) {
        const Ob = [];
        for (const Yb of this.records.values()) "direct" !== Bb && Yb.iJ !== ("iJ" === Bb) || (Yb.recorded = !1, Yb.draw && Ob.push(Yb));
        Ob.sort(JG);
        const Gb = "direct" === Bb ? null : "iJ" === Bb ? this.iJ : this.main;
        null === Gb || void 0 === Gb || Gb.MS.clear(), this.binder.reset();
        let Ub = !1;
        for (const Yb of Ob) {
          var Lb;
          const Ob = Yb.draw,
            Sb = this.host.pipelineFor(Ob, ub, hb);
          if (!Sb) {
            this.host.pipelineCompiling(Ob, hb) ? Ub = !0 : Gb && this.keep(Yb, Ob, Gb.MS);
            continue
          }
          let ab;
          if (Yb.iJ && "indirect" !== Bb) {
            const bb = Yb.unit.owner;
            ab = "direct" === Bb && (0, zG.u)(bb) || (0, zG.m)(bb) || void 0
          }
          if (Gb && this.keep(Yb, Ob, Gb.MS), 0 === (null === (Lb = ab) || void 0 === Lb ? void 0 : Lb.count)) continue;
          this.binder.bind(bb, Ob, Sb, this.slots.bindGroup, Yb.slot * IB);
          const Hb = 5 * Yb.slot;
          if ("indirect" === Bb) {
            Ob.indexBuffer ? bb.drawIndexedIndirect(this.argsBuffer, 4 * Hb) : bb.drawIndirect(this.argsBuffer, 4 * Hb);
            continue
          }
          const wb = this.args;
          ab ? vG(bb, null !== Ob.indexBuffer, wb, Hb, ab) : Ob.indexBuffer ? bb.drawIndexed(wb[Hb], wb[Hb + 1], wb[Hb + 2], 0, 0) : bb.draw(wb[Hb], wb[Hb + 1], wb[Hb + 2], 0)
        }
        Gb && (Gb.stale = Ub)
      }
      keep(bb, ub, hb) {
        bb.recorded = !0, bb.pipelineKey = ub.pipelineKey, bb.materialGroup = ub.material.bindGroup, bb.vertexBuffers.length = 0, bb.vertexBuffers.push(...ub.vertexBuffers), bb.vertexOffsets = ub.vertexOffsets, bb.indexBuffer = ub.indexBuffer, bb.indexFormat = ub.indexFormat;
        for (const Bb of ub.vertexBuffers) hb.add(Bb);
        ub.indexBuffer && hb.add(ub.indexBuffer), hb.add(ub.material.buffer);
        for (const Bb of ub.material.bound) Bb && hb.add(Bb)
      }
      createRecord(bb) {
        let ub = this.freeSlots.pop();
        return void 0 === ub && (ub = this.slotCount++, this.grow()), {
          unit: bb,
          slot: ub,
          iJ: void 0 !== (0, zG.m)(bb.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.iJ.stale = !0), 5 * this.slotCount > this.args.length) {
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

    function vG(bb, ub, hb, Bb, Ob) {
      const Gb = hb[Bb + 1],
        Ub = Ob.data;
      for (let Lb = 0; Lb < Ob.count; Lb++) {
        const Ob = Math.min(Ub[2 * Lb], Gb),
          Yb = Math.min(Ub[2 * Lb + 1], Gb - Ob);
        0 !== Yb && (ub ? bb.drawIndexed(hb[Bb], Yb, hb[Bb + 2], 0, Ob) : bb.draw(hb[Bb], Yb, hb[Bb + 2], Ob))
      }
    }

    function tG(bb, ub) {
      if (bb.pipelineKey !== ub.pipelineKey || bb.materialGroup !== ub.material.bindGroup || bb.indexBuffer !== ub.indexBuffer || bb.indexFormat !== ub.indexFormat || bb.vertexOffsets !== ub.vertexOffsets || bb.vertexBuffers.length !== ub.vertexBuffers.length) return !1;
      for (let hb = 0; hb < bb.vertexBuffers.length; hb++)
        if (bb.vertexBuffers[hb] !== ub.vertexBuffers[hb]) return !1;
      return !0
    }

    function JG(bb, ub) {
      return TO(bb.draw, ub.draw)
    }
    const eG = new WeakMap,
      NG = {
        depth: !1,
        sunShadow: !1
      };

    function sG(bb, ub) {
      let hb = eG.get(bb);
      hb || (hb = new Map, eG.set(bb, hb));
      const Bb = `${ub.depth?"-depth":""}${ub.sunShadow?"-shadow":""}${ub.shadowMask?"-mask":""}`;
      let Ob = hb.get(Bb);
      if (!Ob) {
        const Gb = [{
          binding: Du.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Du.e
          }
        }, {
          binding: Du.v,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        ub.depth && Gb.push({
          binding: Du.m,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), ub.sunShadow && Gb.push(... function() {
          const bb = GPUShaderStage.FRAGMENT,
            ub = Du.p;
          return [{
            binding: ub.uniform,
            visibility: bb,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: ub.Sw,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ub.special,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ub.volume,
            visibility: bb,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: ub.sampler,
            visibility: bb,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: ub.entities,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ub.entityGrids,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), ub.shadowMask && Gb.push({
          binding: Du.t,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Ob = bb.createBindGroupLayout({
          label: `${ub.depth?"terrain-":""}shader-pack-inputs${Bb}`,
          entries: Gb
        }), hb.set(Bb, Ob)
      }
      return Ob
    }

    function MG(bb) {
      return sG(bb, NG)
    }

    function mG(bb, ub) {
      if (!ub) return !1;
      const hb = (0, xu.g)(bb);
      return !!hb && Nh(hb, ub)
    }

    function IG(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!SB(ub)) return [];
      return [sG(bb, {
        depth: OB(ub.packVariant),
        sunShadow: mG(ub.packVariant, hb),
        shadowMask: Bb
      })]
    }
    class PG {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = bb, this.sunShadow = hb, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Du.e), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = bb.createBuffer({
          label: "shader-pack-inputs",
          size: Du.e,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Bb = (0, Du.z)(ub);
        this.textures = bb.createBuffer({
          label: "shader-pack-textures",
          size: Bb.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), bb.queue.writeBuffer(this.textures, 0, Bb), this.bindGroup = bb.createBindGroup({
          label: "shader-pack-inputs",
          layout: MG(bb),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Du.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Du.v,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(bb, ub, hb) {
        (0, Du.E)(this.data, {
          seconds: bb.seconds(),
          lit: hb,
          renderOffset: bb.renderOffset(),
          Q_: bb.Q_(),
          eyePosition: ub,
          shadowDirection: bb.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Bb = ub ? this.sunShadow : null;
        if ((ub || hb) && !Bb) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!bb && !Bb) return this.bindGroup;
        (bb && bb !== this.depthView || hb && hb !== this.maskView) && (this.depthView = null !== bb && void 0 !== bb ? bb : this.depthView, this.maskView = null !== hb && void 0 !== hb ? hb : this.maskView, this.groups.clear());
        const Ob = (bb ? 1 : 0) | (Bb ? 2 : 0) | (hb ? 4 : 0);
        let Gb = this.groups.get(Ob);
        if (!Gb) {
          const ub = this.entries();
          bb && ub.push({
            binding: Du.m,
            resource: bb
          }), Bb && ub.push(...Bb.entries()), hb && ub.push({
            binding: Du.t,
            resource: hb
          }), Gb = this.device.createBindGroup({
            label: `${bb||hb?"terrain-":""}shader-pack-inputs${bb?"-depth":""}${Bb?"-shadow":""}${hb?"-mask":""}`,
            layout: sG(this.device, {
              depth: !!bb,
              sunShadow: !!Bb,
              shadowMask: !!hb
            }),
            entries: ub
          }), this.groups.set(Ob, Gb)
        }
        return Gb
      }
      bind(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        bb.setBindGroup(Du.d, this.bindGroupFor(ub, hb, Bb))
      }
    }

    function qG(bb, ub, hb) {
      if (bb.gpuVersion === ub.gpuBuffersVersion) return !0;
      let Bb;
      do {
        if (Bb = ub.gpuBuffersVersion, !EG(bb, ub, hb)) return !1
      } while (ub.gpuBuffersVersion !== Bb);
      return bb.gpuVersion = Bb, bb.fitInstances = 0, !0
    }

    function EG(bb, ub, hb) {
      let Bb = null;
      for (let Gb = 0; Gb < bb.slotData.length; Gb++) {
        var Ob;
        const Ub = bb.slotData[Gb],
          Lb = Ub ? ub.gpuBuffer(Ub) : hb;
        if (!Lb) return !1;
        Ub && bb.layout.instanceEnds[Gb] < 0 && ub.cover(Ub, Number.POSITIVE_INFINITY), bb.buffers[Gb] = Lb;
        const Yb = bb.o4[Gb] + (Ub ? ub.gpuOffset(Ub) : 0);
        Yb !== (null !== (Ob = Bb) && void 0 !== Ob ? Ob : bb.offsets)[Gb] && (Bb ??= bb.offsets.slice(), Bb[Gb] = Yb), bb.ends[Gb] = Ub ? ub.gpuEnd(Ub) : Lb.size
      }
      return Bb && (bb.offsets = Bb), !0
    }

    function yG(bb, ub, hb, Bb) {
      if (ub <= bb.fitInstances) return null;
      const {
        layout: Ob,
        ends: Gb,
        offsets: Ub,
        slotData: Lb,
        o4: Yb
      } = bb;
      let Sb = !1;
      for (let ab = 0; ab < Ob.buffers.length; ab++) {
        const bb = Ob.instanceEnds[ab];
        if (bb < 0) continue;
        const Bb = (ub - 1) * Ob.buffers[ab].arrayStride + bb;
        if (Gb[ab] - Ub[ab] < Bb) return {
          index: ab,
          needed: Bb
        };
        const Hb = Lb[ab];
        Hb && hb.cover(Hb, Yb[ab] + Bb) && (Sb = !0)
      }
      return Sb && qG(bb, hb, Bb), bb.fitInstances = ub, null
    }
    var VG = hb(37425),
      FG = hb(37452);
    const fG = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      kG = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      TG = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      cG = `((vertexInputs.aPackedLightLevels >> 16u) | ${Yu.b.placed}u)`,
      QG = "u32(vertexInputs.aShaderPackItem.x)",
      RG = `${Yu.b.lifeform}u`;

    function bU(bb) {
      return "item" === bb.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const uU = "bloxdSpEnchant",
      hU = "floor(finalWorld[3].xyz)";

    function BU(bb, ub, hb) {
      return "placed" === ub.kind && bb.reads[hb].includes("bloxdFragmentBlockPosition")
    }

    function OU(bb, ub) {
      let [hb, Bb] = bb;
      return hb === ub.point && Bb === ub.code
    }

    function GU(bb, ub) {
      var hb, Bb, Ob;
      const Gb = null === (hb = bb.find((bb => bb.texture))) || void 0 === hb ? void 0 : hb.texture,
        Ub = null === (Bb = bb.find((bb => bb.enchantTier))) || void 0 === Bb ? void 0 : Bb.enchantTier,
        Lb = null === (Ob = bb.find((bb => bb.overlay))) || void 0 === Ob ? void 0 : Ob.overlay,
        Yb = Lb ? ub.filter((bb => OU(bb, Lb))).length : 0;
      return Lb && 1 === Yb ? {
        texture: Gb,
        overlay: Lb,
        enchantTier: Ub
      } : {
        texture: Gb,
        enchantTier: Ub
      }
    }

    function UU(bb) {
      if ("item" === bb.kind) {
        return {
          vertexFlags: `(${QG} & 0xffffu)`,
          varying: "vPackItem",
          value: QG,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return bb.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: cG,
        varying: "vPackFlags",
        value: cG,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function LU(bb) {
      return "lifeform" === bb.kind ? RG : "0u"
    }

    function YU(bb) {
      return !!bb.BLOXD_PLUGIN_ENCHANTMENT
    }

    function SU(bb, ub) {
      const {
        enchantTier: hb
      } = ub;
      return hb && YU(ub.defines) && "lifeform" === ub.kind && pU(bb, "enchantTier") ? hb : null
    }

    function aU(bb, ub) {
      return YU(ub.defines) && pU(bb, "enchantSpeed")
    }

    function HU(bb) {
      const {
        overlay: ub,
        defines: hb
      } = bb;
      if (!ub || !hb.DIFFUSE) return null;
      const Bb = hb.VERTEXCOLOR || hb.INSTANCESCOLOR && hb.INSTANCES;
      return `vec4f(${ub.colour}.rgb * uniforms.vDiffuseInfos.y${Bb?" * fragmentInputs.vColor.rgb":""}, ${ub.colour}.a)`
    }
    const wU = "fragmentInputs.vPackTexture";

    function ZU(bb) {
      const {
        atlas: ub,
        defines: hb,
        texture: Bb
      } = bb;
      if (ub || !hb.DIFFUSE) return null;
      if (Bb) return {
        texture: "diffuseSampler",
        ...Bb
      };
      const Ob = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===hb.DIFFUSEDIRECTUV?"vMainUV1":2===hb.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== bb.kind) return Ob;
      if (!hb.BLOXD_PLUGIN_ANIMATED) return {
        ...Ob,
        id: wU
      };
      const Gb = db.d.WGSL,
        Ub = (0, db.Ib)(Gb, "uAnimStatesNum"),
        Lb = (0, db.ib)(Gb, (0, VG.d)(Gb), Ub),
        Yb = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Ub})`,
        layers: [Lb],
        uv: `vec2f(${Yb}.x, ${Yb}.y * ${Ub} - ${Lb})`,
        levelUv: Yb,
        id: wU
      }
    }

    function XU(bb, ub) {
      return "box" === ub.kind && !!bb.hooks.surface && null !== ZU(ub)
    }

    function pU(bb, ub) {
      return bb.reads.fragment.includes(ub)
    }

    function oU(bb) {
      return !!bb.BLOXD_LIGHTING && !bb.BLOXD_UNLIT
    }

    function AU(bb, ub, hb, Bb) {
      const Ob = bb.filter((bb => {
        let [hb, Bb] = bb;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === hb && Bb === ub
      }));
      if (1 !== Ob.length) throw new Error(`A model program for shader packs has ${0===Ob.length?"no":"more than one"} ${Bb} code before fog (lite/modelShaderPack.ts)`);
      return bb.map((bb => bb === Ob[0] ? [bb[0], hb] : bb))
    }

    function lU(bb, ub, hb, Bb) {
      const {
        hooks: Ob
      } = bb, {
        kind: Gb,
        defines: Ub
      } = ub, Lb = [...hb];
      var Yb;
      ub.atlas && Ob.surface && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Eh("atlasIdxIn")]), "item" === Gb && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", (0, db.f)(db.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), XU(bb, ub) && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", (0, db.f)(db.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Yb = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Ph}[min(u32(${Yb}) - 1u, arrayLength(&${Ph}) - 1u)], ${Yb} > 0.5);\n`)]);
      const Sb = UU(ub);
      Sb && (Ob.surface || Ob.light) && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Sb.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Sb.varying} = ${Sb.value};`]);
      let ab = Bb;
      if (BU(bb, ub, "fragment") && (Lb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${hU});`]), ab = [...ab, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), pU(bb, "localPosition") && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${bU(ub)};`]), YU(Ub) && Ob.surface) {
        aU(bb, ub) && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const hb = SU(bb, ub);
        hb && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${hb});`]);
        const Bb = (0, db.xb)(db.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        ab = [...AU(ab, (0, FG.j)(db.d.WGSL), Bb, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, FG.d)(uU)]]
      }
      const {
        overlay: Hb
      } = ub;
      Hb && HU(ub) && Ob.surface && (ab = ab.filter((bb => !OU(bb, Hb))));
      const wb = Ob.light ? function(bb) {
        return "placed" === bb.kind ? {
          name: "terrain",
          engine: (0, ru.X)(db.d.WGSL),
          pack: (0, ru.ob)(db.d.WGSL)
        } : bb.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, ru.M)(db.d.WGSL),
          pack: (0, ru.jb)(db.d.WGSL)
        } : null
      }(ub) : null;
      if (wb && (ab = AU(ab, wb.engine, wb.pack, `${wb.name} light`), "placed" !== Gb && oU(Ub))) {
        const bb = Ub.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, db.Ib)(db.d.WGSL, "uEntityLightLevels") : (0, db.Rb)(db.d.WGSL, "aLightLevels");
        Lb.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${ru.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, ru.lb)(db.d.WGSL, bb)])
      }
      return {
        vertexCode: Lb,
        fragmentCode: ab
      }
    }

    function KU(bb, ub, hb, Bb) {
      return Jh(bb, ub, hb, Bb, "model")
    }
    const WU = "\t@builtin(position) position: vec4f,\n";

    function CU(bb, ub) {
      const hb = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(bb)[0];
      return `${hb}${ub}${bb.slice(hb.length)}`
    }

    function dU(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Ob
      } = ub, Gb = Nh(ub, Bb), {
        kind: Ub,
        defines: Lb
      } = hb, Yb = function(bb, ub) {
        var hb, Bb, Ob;
        const {
          defines: Gb
        } = ub, Ub = UU(ub), Lb = !!Gb.FOG, Yb = YU(Gb), Sb = null !== (hb = null === Ub || void 0 === Ub ? void 0 : Ub.enchantTier) && void 0 !== hb ? hb : SU(bb, ub) ? "fragmentInputs.vPackEnchantTier" : "0u", ab = "lifeform" === ub.kind && !Gb.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Bb = null === Ub || void 0 === Ub ? void 0 : Ub.vertexFlags) && void 0 !== Bb ? Bb : LU(ub),
          vertexLocalPosition: bU(ub),
          flags: null !== (Ob = null === Ub || void 0 === Ub ? void 0 : Ub.flags) && void 0 !== Ob ? Ob : LU(ub),
          normal: "normalW",
          alpha: ab ? "alpha * baseColor.a" : "alpha",
          alphaOut: ab ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: Lb ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: Lb ? "1.0 - fog" : "0.0",
          enchantTier: Sb,
          enchantColour: Yb ? `${uU}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: aU(bb, ub) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: pU(bb, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: HU(ub)
        }
      }(ub, hb), Sb = bb.textures.filter((bb => /^textureAtlas\d+$/.test(bb.name))).length, ab = hb.atlas && Sb > 0 ? {
        count: Sb,
        layers: hb.atlas.layers,
        width: hb.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: bb.material.slots.has("uAnimDataPerTex") ? (ub, hb) => DB(ub, hb, function(bb) {
          const ub = bb.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            gH: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: bb => `uniforms.uAnimDataPerTex[${bb}]${ub}`
          }
        }(bb)) : null
      } : null, Hb = "placed" === Ub ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", wb = null !== ab && void 0 !== ab ? ab : ZU(hb), Zb = function(bb, hb) {
        let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Du.D)()}${Mh(ub,hb)}${Bb}${Vh(bb)}${ih}${Hb}${ub.code}`
      };
      let {
        vertex: Xb,
        fragment: pb
      } = bb;
      const ob = fh(Ob, Yb);
      if (ob) {
        const bb = BU(ub, hb, "vertex") ? `\tbloxdSpCell = ${hU};\n` : "";
        Xb = KU(Xb, fG, `${bb}${ob.slice(1)}${fG}`, "vertex")
      }
      const Ab = `${mh(ub,Gb,function(bb,ub){return ub.TWOSIDEDLIGHTING?bb:`select(-(${bb}), ${bb}, fragmentInputs.frontFacing)`}(Yb.normal,Lb),Yb.flags)}${kh(Ob,ub.strict,ub.program,wb,Yb)}`;
      Ab && (pb = KU(pb, kG, `${Ab.slice(1)}${kG}`, "surface")), Gb && ub.sunShadow && !Lb.TWOSIDEDLIGHTING && (pb = KU(pb, WU, `${WU}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const lb = Qh(Ob);
      if (lb) {
        const bb = ch(Ob, oU(Lb), !0, Yb);
        pb = KU(pb, TG, `${bb}${lb.slice(1)}${TG}`, "light")
      }
      const Kb = XU(ub, hb) ? qh : "";
      return {
        ...bb,
        vertex: CU(Xb, Zb(ab, !1, Kb)),
        fragment: CU(pb, Zb(wb, Gb))
      }
    }
    const rU = {
      name: "earthSky",
      uniqueId: -1
    };
    class jU {
      constructor(bb) {
        this.resources = bb, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const bb of this.instances.values()) bb.released = !0, this.resources.destroyBuffer(bb.buffer);
        this.instances.clear()
      }
    }

    function nU(bb) {
      return bb.failed && null !== bb.packGroup
    }
    class DU {
      constructor(bb, ub, hb) {
        this.device = bb, this.resources = ub, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.I9 = new xG, this.modelMeshes = new DG, this.thinBundle = void 0, this.binder = new fO, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new pG((bb => this.modelSlot(bb).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Su.d)("Lite: "), this.renderStates = new aG(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (bb, ub) => this.keepSteady(bb, ub), this.lists = new kO(this.modelMeshes, this.I9, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new UG(ub, this.warnOnce, ((bb, ub, hb) => this.programWithModel(bb, ub, hb)), nU), this.vertexLayouts = new KG(ub, bb.limits, this.warnOnce), this.sceneLayout = uu(bb), this.frameLayout = bb.createBindGroupLayout({
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
        }), this.meshSlots = new dG(bb, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = bb.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new iG(bb, new dG(bb, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (bb, ub, hb) => this.pipelineFor(bb, ub, hb),
          pipelineCompiling: (bb, ub) => !bb.program.failed && !1 !== this.pipelines.get(`${bb.pipelineKey}|${ub}`),
          sceneGroup: bb => {
            const ub = hb(bb);
            return ub || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), ub
          }
        }), ub.onDestroy = bb => {
          this.thinBundle.resourceDestroyed(bb)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ob = {
          order: bb,
          isTransparent: ub,
          _direct: !ub,
          bind: (bb, ub) => this.createBinding(Ob, ub, hb, Bb)
        };
        return Ob
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(bb, ub, hb) {
        var Bb;
        let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = ub, this.drawDefines.view = ub, this.thinBundle.rW(), this.writeFrameUniforms();
        const Gb = null !== (Bb = null === Ob || void 0 === Ob ? void 0 : Ob.defineFor("model")) && void 0 !== Bb ? Bb : 0;
        this.drawDefines.modelPackVariant = Gb, Ob && 0 !== Gb && (this.packInputs ??= new PG(this.device, Ob.textureLayers(), this.sunShadow), this.packInputs.write(Ob, ub.eye, Ob.Sp())), this.lists.clear(), this.slotCount = 0;
        const Ub = bb.activeCamera;
        this.I9.select(Ub, this.keepSteadyBase), this.modelMeshes.select(Ub, ub), hb && this.pushEarthSky(hb), this.lists.collect(bb), this.thinBundle.jW(), this.uploadMeshSlots()
      }
      pushDraws(bb, ub, hb, Bb, Ob, Gb) {
        let Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Lb = Gb.length;
        for (let Yb = 0; Yb < hb; Yb++) {
          const hb = ub[Yb];
          let Lb = this.retainedDraw(bb, hb, Bb, Ob);
          if (void 0 === Lb && (Lb = this.drawFor(bb, hb, Bb, Ob), this.retain(hb, Lb)), Lb) {
            const bb = hb.owner,
              ub = Ub ? Ub[Yb] : -1;
            Lb.slotOffset = ub < 0 ? this.writeMeshSlot(bb.getWorldMatrix().m, bb.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[ub], 16 * ub), Gb.push(Lb)
          }
        }
        return Gb.length - Lb
      }
      bundleDraws(bb, ub, hb) {
        let Bb = 0;
        for (const Ob of ub) {
          let ub = this.retainedDraw(bb, Ob, hb, !1);
          const Gb = void 0 !== ub;
          if (void 0 === ub && (ub = this.drawFor(bb, Ob, hb, !1), this.retain(Ob, ub)), ub) {
            const bb = Ob.owner,
              hb = this.thinBundle.add(Ob, ub, bb.getWorldMatrix().m, bb.visibility);
            Gb && this.steadyFrom(Ob, ub, hb), Bb++
          }
        }
        return Bb
      }
      steadyFrom(bb, ub, hb) {
        const Bb = bb.owner,
          Ob = this.I9.base(Bb),
          Gb = Bb.material,
          {
            drawState: Ub,
            instance: Lb
          } = ub.inputs.retained;
        if (!Ob || !Gb || 1 !== bb.parts.materials.length || jG(bb) !== Gb) return;
        const Yb = Ob.steady ??= {
          unit: bb,
          material: Gb,
          visibility: 1,
          draw: ub,
          record: hb,
          drawState: Ub,
          instance: Lb,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Yb.unit = bb, Yb.material = Gb, Yb.visibility = Bb.visibility, Yb.draw = ub, Yb.record = hb, Yb.drawState = Ub, Yb.instance = Lb, Yb.bindGroup = Lb.bindGroup, Yb.gpuVersion = this.resources.gpuBuffersVersion, Yb.fitInstances = ub.inputs.fitInstances, Yb.worldFlag = Bb.getWorldMatrix().updateFlag, Yb.handedFrame = this.frame
      }
      keepSteady(bb, ub) {
        const hb = bb.steady;
        if (hb.handedFrame !== this.frame - 1 || (this.frame + hb.phase) % 8 === 0) return !1;
        const Bb = bb.mesh,
          {
            unit: Ob,
            draw: Gb,
            instance: Ub,
            drawState: Lb
          } = hb,
          Yb = Bb.forcedInstanceCount || Bb.W4;
        if (!Bb.isVisible || Bb.UOb || Bb.visibility !== hb.visibility || 0 === (Bb.layerMask & ub.layerMask) || Bb.material !== hb.material || 0 !== Bb.renderingGroupId || Bb.hasVertexAlpha || !this.drawDefines.definesHold(Lb, Ob, Lb.instancing) || hb.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Gb.inputs, Ob, Lb.instancing, Gb.program) || Gb.program.failed || Ub.released || Yb <= 0 || Yb > hb.fitInstances) return !1;
        if (Ub.frame !== this.frame && this.bindMaterial(Ub, this.modelUniforms.refreshModelUniforms(Bb.ZN(), Ub, Ub.model, this.view)), !Ub.bindable || Ub.bindGroup !== hb.bindGroup) return !1;
        const Sb = Bb.computeWorldMatrix(),
          ab = Sb.updateFlag !== hb.worldFlag;
        return hb.worldFlag = Sb.updateFlag, Gb.instances = Yb, this.thinBundle.addAgain(hb.record, Gb, ab ? Sb.m : null, hb.visibility), hb.handedFrame = this.frame, this.I9.drawn++, !0
      }
      retainedDraw(bb, ub, hb, Bb) {
        const Ob = this.inputs.get(ub),
          Gb = null === Ob || void 0 === Ob ? void 0 : Ob.retained;
        if (!Ob || !Gb) return;
        const {
          drawState: Ub,
          program: Lb,
          instance: Yb,
          instancing: Sb
        } = Gb, ab = ub.owner;
        if (bG(ab) !== Sb) return;
        const Hb = this.instanceCount(ab, Sb);
        if (Hb <= 0) return null;
        if (Yb.released || Lb.failed || Ub.program !== Lb || !this.drawDefines.programCurrent(Ub, ub, Sb, hb) || !this.inputsStamped(Ob, ub, Sb, Lb) || ab.isUnIndexed !== Gb.unIndexed || this.indexKey(ub) !== Gb.indexData) return;
        if (Gb.indexBuffer && Gb.gpuVersion !== this.resources.gpuBuffersVersion) {
          const bb = this.resources.gpuBuffer(Gb.indexData);
          if (!bb) return;
          Gb.indexBuffer = bb, Gb.gpuVersion = this.resources.gpuBuffersVersion
        }
        let wb = !1;
        if (Yb.frame !== this.frame && (wb = this.modelUniforms.refreshModelUniforms(bb, Yb, Yb.model, this.view)), !this.bindMaterial(Yb, wb) || !this.withGpuBuffers(Ob) || !this.instanceBuffersFit(ab.name, Ob, Hb)) return null;
        const Zb = this.makeDraw(Lb, Ob, this.renderStates.renderState(Ub.model, ab, Bb, Ob.state), Yb, Hb);
        return this.setRange(Zb, ub, Gb.indexBuffer, Gb.indexData), Zb
      }
      retain(bb, ub) {
        const hb = this.drawDefines.drawStates.get(bb);
        if (!ub || !hb || hb.program !== ub.program) {
          const ub = this.inputs.get(bb);
          return void(ub && (ub.retained = null))
        }
        const Bb = bb.owner,
          Ob = hb.instancing,
          Gb = this.indexKey(bb),
          Ub = ub.inputs.retained;
        Ub ? (Ub.drawState = hb, Ub.instancing = Ob, Ub.program = ub.program, Ub.instance = ub.material, Ub.indexData = Gb, Ub.unIndexed = Bb.isUnIndexed, Ub.indexBuffer = ub.indexBuffer, Ub.gpuVersion = this.resources.gpuBuffersVersion) : ub.inputs.retained = {
          drawState: hb,
          instancing: Ob,
          program: ub.program,
          instance: ub.material,
          indexData: Gb,
          unIndexed: Bb.isUnIndexed,
          indexBuffer: ub.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(bb, ub, hb, Bb) {
        const Ob = ub.owner,
          Gb = jG(ub);
        if (!Gb) return null;
        const Ub = Gb.getClassName();
        let Lb = null;
        if (function(bb) {
            return "LinesMesh" === bb.getClassName()
          }(Ob)) {
          if (! function(bb) {
              return "ShaderMaterial" === bb.getClassName() && "color" === bb.shaderPath
            }(Gb)) return this.warnOnce(`lines:${Ub}`, `A LinesMesh with a ${Ub} is not drawn yet (${Gb.name})`), null;
          Lb = Ob
        } else if ("StandardMaterial" !== Ub && "LiteMaterial" !== Ub) return this.warnOnce(`class:${Ub}`, `${Ub} is not drawn yet (${Gb.name})`), null;
        const Yb = bG(Ob),
          Sb = this.instanceCount(Ob, Yb);
        if (Sb <= 0) return null;
        const ab = Lb ? this.lineProgramFor(Ob, hb, Yb) : this.drawDefines.programFor(bb, ub, Gb, hb, Yb);
        if (!ab || ab.failed) return null;
        const Hb = Lb ? null : this.drawDefines.drawStates.get(ub).model,
          wb = Hb ? this.modelInstance(Hb, ab) : this.materialInstance(Ob, ab);
        let Zb = !1;
        if (wb.frame !== this.frame && (Lb ? lb(wb.ubo, Lb) : Zb = this.modelUniforms.refreshModelUniforms(bb, wb, wb.model, this.view)), !this.bindMaterial(wb, Zb)) return null;
        const Xb = this.meshInputs(ub, ab, Yb);
        if (!Xb || !this.instanceBuffersFit(Ob.name, Xb, Sb)) return null;
        const pb = this.indexKey(ub);
        let ob = null;
        if (pb && !Ob.isUnIndexed && (ob = this.resources.gpuBuffer(pb), !ob)) return null;
        const Ab = this.renderStates.renderState(null !== Hb && void 0 !== Hb ? Hb : Gb, Ob, Bb, Xb.state, Lb ? "line-list" : "triangle-list"),
          Kb = this.makeDraw(ab, Xb, Ab, wb, Sb);
        return this.setRange(Kb, ub, ob, pb), Kb
      }
      indexKey(bb) {
        const ub = OG(bb);
        return ub ? this.resources.modelIndex(ub) : null
      }
      setRange(bb, ub, hb, Bb) {
        hb && (bb.indexBuffer = hb, bb.indexFormat = this.resources.indexFormat(Bb));
        const Ob = 4 * ub.range + (hb ? 0 : 2);
        bb.unit = ub, bb.first = ub.parts.tp[Ob], bb.count = ub.parts.tp[Ob + 1]
      }
      makeDraw(bb, ub, hb, Bb, Ob) {
        ub.state !== hb && (ub.state = hb, ub.pipelineKey = `${bb.id}|${ub.layout.key}|${hb.key}`, ub.pipeline = null);
        const Gb = ub.draw ??= {
          program: bb,
          inputs: ub,
          pipelineKey: "",
          layout: ub.layout,
          state: hb,
          material: Bb,
          slotOffset: 0,
          vertexBuffers: ub.buffers,
          vertexOffsets: ub.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Ob,
          unit: null
        };
        return Gb.program = bb, Gb.pipelineKey = ub.pipelineKey, Gb.state = hb, Gb.material = Bb, Gb.vertexOffsets = ub.offsets, Gb.indexBuffer = null, Gb.instances = Ob, Gb
      }
      instanceCount(bb, ub) {
        switch (ub) {
          case "thin":
            return bb.forcedInstanceCount || bb.W4;
          case "instanced":
            return this.prepareInstances(bb);
          case "none":
            return 1
        }
      }
      prepareInstances(bb) {
        const ub = function(bb, ub) {
          const hb = ub._userInstancedBuffersStorage,
            Bb = bb.batchUploads.get(ub);
          if (Bb) {
            var Ob;
            if (Bb.layout === (null !== (Ob = null === hb || void 0 === hb ? void 0 : hb.interleavedKinds) && void 0 !== Ob ? Ob : null)) return Bb;
            Bb.release()
          }
          return new Vb(bb, ub, hb)
        }(this.resources, bb);
        return ub.frame !== this.frame && ub.pack(bb, this.modelMeshes.instanceBatch(bb), this.modelMeshes.worlds, this.frame), ub.count
      }
      programWithModel(bb, ub, hb) {
        const Bb = this.modelSlot(bb),
          Ob = LG(Bb, bb, hb),
          Gb = this.drawDefines.modelPackKind(bb),
          Ub = Gb ? function(bb, ub, hb, Bb) {
            const Ob = (0, nb.v)(bb, rb.h.name),
              Gb = [];
            for (const {
                feature: Yb,
                state: Sb,
                active: ab
              }
              of bb.features) {
              var Ub, Lb;
              const bb = ab ? null === (Ub = (Lb = (0, au.i)(Yb)).vZ) || void 0 === Ub ? void 0 : Ub.call(Lb, Sb) : void 0;
              bb && Gb.push(bb)
            }
            return {
              kind: ub,
              atlas: null !== Ob && void 0 !== Ob && Ob.active ? (0, rb.b)(Ob.state) : null,
              defines: hb,
              ...GU(Gb, Bb)
            }
          }(bb, Gb, ub, Bb.fragmentCode) : null;
        if (Ub && function(bb) {
            const ub = bb.defines;
            return (null === bb.atlas || !!ub.DIFFUSE && 1 === ub.DIFFUSEDIRECTUV) && !!ub.NORMAL && !ub.REFLECTION && !ub.EMISSIVEASILLUMINATION && !ub.LINKEMISSIVEWITHDIFFUSE
          }(Ub)) {
          const hb = this.modelPackProgram(bb, ub, `${Ob}#${Gb}#sp${this.drawDefines.modelPackVariant}`, Bb, Ub);
          if (hb && !hb.failed) return hb
        }
        const Lb = this.programs.get(Ob);
        if (Lb || this.unbuildable.has(Ob)) return null !== Lb && void 0 !== Lb ? Lb : null;
        let Yb;
        try {
          Yb = LO({
            defines: hG(ub),
            vertexCode: Bb.vertexCode,
            fragmentCode: Bb.fragmentCode,
            pluginUniforms: Bb.pluginUniforms
          })
        } catch (Sb) {
          return this.unbuildable.add(Ob), this.warnOnce(`build:${Ob}`, `could not build a program for ${bb.name}: ${String(Sb)}`), null
        }
        return this.createProgram(Ob, Yb, "standard")
      }
      modelPackProgram(bb, ub, hb, Bb, Ob) {
        const Gb = this.programs.get(hb);
        if (Gb || this.unbuildable.has(hb)) return null !== Gb && void 0 !== Gb ? Gb : null;
        const Ub = this.drawDefines.modelPackVariant;
        let Lb;
        try {
          const bb = function(bb) {
              return (0, xu.e)(bb, "model")
            }(Ub),
            hb = lU(bb, Ob, Bb.vertexCode, Bb.fragmentCode);
          Lb = dU(LO({
            defines: hG(ub),
            ...hb,
            pluginUniforms: Bb.pluginUniforms
          }), bb, Ob, !!this.sunShadow)
        } catch (ab) {
          return this.unbuildable.add(hb), this.warnOnce(`build:${hb}`, `could not build a shader pack program for ${bb.name}, which draws without the pack: ${String(ab)}`), null
        }
        const Yb = mG(Ub, !!this.sunShadow),
          Sb = {
            group: this.packInputs.bindGroupFor(null, Yb),
            layout: sG(this.device, {
              depth: !1,
              sunShadow: Yb
            })
          };
        return this.createProgram(hb, Lb, function(bb) {
          return `standard-sp${bb}`
        }(Ub), Sb)
      }
      lineProgramFor(bb, ub, hb) {
        const Bb = Ab(bb, hb, ub, this.view);
        let Ob = this.linePrograms.get(Bb);
        var Gb;
        return Ob || (Ob = this.createProgram(`lines#${Bb}`, (Gb = function(bb) {
          const ub = new Map;
          for (let hb = 0; hb < Sb.length; hb++) bb & 1 << hb && ub.set(Sb[hb], !0);
          return ub
        }(Bb), HO({
          defines: Gb,
          vertex: SO,
          fragment: aO,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Bb, Ob)), Ob
      }
      createProgram(bb, ub, hb) {
        var Bb;
        let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Gb = this.nextProgramId++,
          Ub = `${hb}-${Gb}`,
          Lb = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Yb = [{
            binding: 0,
            visibility: Lb,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Hb of ub.textures) Yb.push({
          binding: Hb.binding,
          visibility: Lb,
          texture: {
            viewDimension: Hb.dimension
          }
        }), Yb.push({
          binding: Hb.samplerBinding,
          visibility: Lb,
          sampler: {}
        });
        const Sb = this.device.createBindGroupLayout({
            label: Ub,
            entries: Yb
          }),
          ab = {
            key: bb,
            id: Gb,
            kind: hb,
            program: ub,
            vertex: this.device.createShaderModule({
              label: `${Ub}-vertex`,
              code: ub.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Ub}-fragment`,
              code: ub.fragment
            }),
            materialLayout: Sb,
            pipelineLayout: this.device.createPipelineLayout({
              label: Ub,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Sb, ...Ob ? [Ob.layout] : []]
            }),
            packGroup: null !== (Bb = null === Ob || void 0 === Ob ? void 0 : Ob.group) && void 0 !== Bb ? Bb : null,
            failed: !1
          };
        return this.programs.set(bb, ab), ab
      }
      writeFrameUniforms() {
        const bb = this.frameUniforms;
        XG(this.view, bb), this.device.queue.writeBuffer(this.frameBuffer, 0, bb)
      }
      materialInstance(bb, ub) {
        let hb = this.materials.get(bb);
        if (!hb) {
          const ub = new Map;
          this.materials.set(bb, ub), bb.XN.addOnce((() => {
            for (const bb of ub.values()) bb.released = !0, this.resources.destroyBuffer(bb.buffer);
            this.materials.delete(bb)
          })), hb = ub
        }
        let Bb = hb.get(ub.key);
        return Bb || (Bb = this.newMaterialInstance(bb, null, ub), hb.set(ub.key, Bb)), Bb
      }
      modelInstance(bb, ub) {
        const hb = this.modelSlot(bb);
        let Bb = hb.instances.get(ub.key);
        return Bb || (Bb = this.newMaterialInstance(bb, bb, ub), hb.instances.set(ub.key, Bb)), Bb
      }
      modelSlot(bb) {
        let ub = bb.gpu[xb.e.lite];
        return ub || (ub = new jU(this.resources), bb.gpu[xb.e.lite] = ub), ub
      }
      newMaterialInstance(bb, ub, hb) {
        const Bb = hb.program.material.floats,
          Ob = new Float32Array(Bb),
          Gb = new Map;
        return {
          owner: bb,
          model: ub,
          program: hb,
          data: Ob,
          uploaded: new Float32Array(Bb).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${bb.name}-uniforms`,
            size: Math.max(16, 4 * Bb),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Gb,
          ubo: new ZG(hb.program.material.slots, Ob, Gb),
          bindGroup: null,
          bound: new Array(2 * hb.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(bb) {
        var ub;
        const hb = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: oO + AO,
            fragment: oO + lO,
            attributes: [],
            material: pO,
            textures: []
          }, "earthSky"),
          Bb = this.earthSkyUniforms ??= this.newMaterialInstance(rU, null, hb);
        this.earthSkyFrom !== bb && (this.earthSkyFrom = bb, Bb.data.fill(0)), DO(Bb.ubo, bb, this.view);
        const Ob = this.vertexInputs(hb, rU, "earthSky", hb, null);
        if (hb.failed || !Ob || !this.bindMaterial(Bb, !1)) return;
        const Gb = null !== (ub = Ob.state) && void 0 !== ub ? ub : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Ub = this.makeDraw(hb, Ob, Gb, Bb, 1);
        Ub.count = wO.length;
        const Lb = xO(bb, this.view);
        Ub.slotOffset = this.writeMeshSlot(Lb, 1), this.lists.skyDraws.push(Ub)
      }
      uploadIfChanged(bb) {
        const {
          data: ub,
          uploaded: hb
        } = bb;
        for (let Bb = 0; Bb < ub.length; Bb++)
          if (ub[Bb] !== hb[Bb]) return hb.set(ub), void this.device.queue.writeBuffer(bb.buffer, 0, ub)
      }
      bindMaterial(bb, ub) {
        return bb.frame !== this.frame && (bb.frame = this.frame, ub || this.uploadIfChanged(bb), bb.bindable = this.bindTextures(bb)), bb.bindable
      }
      bindTextures(bb) {
        const {
          program: ub,
          bound: hb
        } = bb, Bb = ub.program.textures;
        let Ob = !bb.bindGroup,
          Gb = !0;
        for (let Ub = 0; Ub < Bb.length; Ub++) {
          const ub = bb.textures.get(Bb[Ub].name),
            Lb = ub ? this.resources.boundTexture(ub) : null;
          Lb ? hb[2 * Ub] === Lb.view && hb[2 * Ub + 1] === Lb.sampler || (hb[2 * Ub] = Lb.view, hb[2 * Ub + 1] = Lb.sampler, Ob = !0) : (ub || bb.ubo.expected.has(Bb[Ub].name) || this.warnOnce(`texture:${bb.owner.name}:${Bb[Ub].name}`, `${bb.owner.name} has no ${Bb[Ub].name}`), Gb = !1)
        }
        if (!Gb) return Ob && (bb.bindGroup = null), !1;
        if (Ob) {
          const Ob = [{
            binding: 0,
            resource: {
              buffer: bb.buffer
            }
          }];
          for (let bb = 0; bb < Bb.length; bb++) Ob.push({
            binding: Bb[bb].binding,
            resource: hb[2 * bb]
          }), Ob.push({
            binding: Bb[bb].samplerBinding,
            resource: hb[2 * bb + 1]
          });
          bb.bindGroup = this.device.createBindGroup({
            label: `${bb.owner.name}-material`,
            layout: ub.materialLayout,
            entries: Ob
          })
        }
        return !0
      }
      writeMeshSlot(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, bb, ub, hb), this.slotCount++ * IB
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(bb, ub, hb, Bb, Ob) {
        let Gb = this.inputs.get(bb);
        if (!Gb || Gb.program !== Bb || !WG(ub, Gb, this.resources, Ob)) {
          var Ub;
          if (Gb = null !== (Ub = this.vertexLayouts.resolveInputs(ub, hb, Bb, Ob)) && void 0 !== Ub ? Ub : void 0, !Gb) return null;
          this.inputs.set(bb, Gb)
        }
        return this.withGpuBuffers(Gb)
      }
      meshInputs(bb, ub, hb) {
        const Bb = this.inputs.get(bb);
        if (Bb && this.inputsStamped(Bb, bb, hb, ub)) return this.withGpuBuffers(Bb);
        const Ob = bb.owner,
          Gb = OG(bb),
          Ub = this.vertexInputs(bb, Ob, Ob.name, ub, Gb);
        return Ub && (Ub.geometry = GG(bb), Ub.instanceLayout = this.drawDefines.instanceLayout(Ob, hb)), Ub
      }
      inputsStamped(bb, ub, hb, Bb) {
        return function(bb, ub, hb, Bb) {
          return bb.program === hb && bb.geometry === GG(ub) && bb.instanceLayout === Bb
        }(bb, ub, Bb, this.drawDefines.instanceLayout(ub.owner, hb))
      }
      withGpuBuffers(bb) {
        return qG(bb, this.resources, this.zeroBuffer) ? bb : null
      }
      instanceBuffersFit(bb, ub, hb) {
        const Bb = yG(ub, hb, this.resources, this.zeroBuffer);
        if (Bb) {
          const Ob = ub.ends[Bb.index] - ub.offsets[Bb.index] + ub.o4[Bb.index];
          return this.warnOnce(`overrun:${bb}`, `${bb} draws ${hb} instances from a ${Ob}-byte buffer (${Bb.needed} needed)`), !1
        }
        return !0
      }
      createBinding(bb, ub, hb, Bb) {
        const Ob = `${ub._colorFormat}|${ub._depthStencilFormat}|${ub._depthCompare}|${ub._sampleCount}`,
          Gb = Uu(this.device, ub);
        if (bb === this.skyLastRenderable) {
          let hb = null;
          return {
            renderable: bb,
            pipeline: Gb,
            draw: bb => hb ? this.drawSky(bb, ub, Ob, hb) : 0,
            update: bb => {
              hb = bb
            }
          }
        }
        return {
          renderable: bb,
          pipeline: Gb,
          draw: bb => (Bb ? Bb.execute(bb, ub, Ob) : 0) + this.drawList(bb, ub, Ob, hb)
        }
      }
      drawSky(bb, ub, hb, Bb) {
        const Ob = this.lists.skyDraws,
          Gb = Ob.length > 0;
        if (Gb) {
          var Ub;
          const hb = (null !== (Ub = ub._depthCompare) && void 0 !== Ub ? Ub : hu).startsWith("greater") ? 0 : 1;
          bb.setViewport(0, 0, Bb.targetWidth, Bb.targetHeight, hb, hb)
        }
        const Lb = this.drawList(bb, ub, hb, Ob);
        return Gb && bb.setViewport(0, 0, Bb.targetWidth, Bb.targetHeight, 0, 1), Lb
      }
      drawList(bb, ub, hb, Bb) {
        let Ob = 0;
        const Gb = this.binder;
        Gb.reset();
        for (const Ub of Bb) {
          const Bb = this.pipelineFor(Ub, ub, hb);
          Bb && (Gb.bind(bb, Ub, Bb, this.meshSlots.bindGroup, Ub.slotOffset), Ub.indexBuffer ? bb.drawIndexed(Ub.count, Ub.instances, Ub.first, 0, 0) : bb.draw(Ub.count, Ub.instances, Ub.first, 0), Ob++)
        }
        return Ob
      }
      pipelineFor(bb, ub, hb) {
        var Bb, Ob;
        if (bb.program.failed) return null;
        const Gb = bb.inputs;
        if (Gb.pipeline && Gb.pipelineTarget === hb) return Gb.pipeline;
        const Ub = `${bb.pipelineKey}|${hb}`,
          Lb = this.pipelines.get(Ub);
        if (void 0 !== Lb) return Lb && (Gb.pipeline = Lb, Gb.pipelineTarget = hb), Lb || null;
        this.pipelines.set(Ub, null);
        const {
          program: Yb,
          layout: Sb,
          state: ab
        } = bb, Hb = {
          label: `standard-${Yb.id}`,
          layout: Yb.pipelineLayout,
          vertex: {
            module: Yb.vertex,
            entryPoint: "main",
            buffers: Sb.buffers
          },
          fragment: cb({
            module: Yb.fragment,
            entryPoint: "main"
          }, ub, ab.blend, ab.colourWrite),
          depthStencil: ub._depthStencilFormat ? {
            format: ub._depthStencilFormat,
            depthCompare: null !== (Bb = null !== (Ob = ab.depthCompare) && void 0 !== Ob ? Ob : ub._depthCompare) && void 0 !== Bb ? Bb : hu,
            depthWriteEnabled: ab.depthWrite,
            depthBias: ab.depthBias,
            depthBiasSlopeScale: ab.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: ub._sampleCount
          },
          primitive: {
            topology: ab.topology,
            frontFace: ab.frontFace,
            cullMode: ab.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Hb).then((bb => {
          this.compiling--, this.pipelines.set(Ub, bb)
        }), (bb => {
          this.compiling--, this.reportFailure(Yb, Ub, bb)
        })), null
      }
      forEachSunShadowCaster(bb) {
        const ub = this.caster,
          hb = (hb, Bb, Ob) => {
            const Gb = hb.unit && function(bb) {
              const ub = bb.material.model;
              return null !== ub && (ub.lifeform || ub.item) && ub.castsSunShadow && "triangle-list" === bb.state.topology
            }(hb) ? OG(hb.unit) : null;
            if (!Gb) return;
            const Ub = hb.unit.owner;
            switch (ub.geometry = Gb, ub.skip = Ub.noSunShadowVertices, ub.indexed = null !== hb.indexBuffer, ub.first = hb.first, ub.count = hb.count, ub.eH = Bb, ub.worldAt = Ob, ub.instances = null, ub.instanceCount = 1, ub.thin = !1, bG(Ub)) {
              case "thin": {
                const bb = Ub._thinInstanceDataStorage.matrixData;
                if (!bb) return;
                ub.instances = bb, ub.instanceCount = Math.min(hb.instances, bb.length / 16), ub.thin = !0;
                break
              }
              case "instanced": {
                const bb = this.resources.batchUploads.get(Ub);
                if (!bb || bb.frame !== this.frame || !this.writeBatchCasters(bb)) return;
                break
              }
            }
            bb(ub)
          };
        for (const Bb of this.lists.opaqueDraws) hb(Bb, this.meshSlots.data, Bb.slotOffset / 4);
        this.thinBundle.forEachDrawn(hb)
      }
      writeBatchCasters(bb) {
        const {
          caster: ub
        } = this, hb = bb.packedMatrices, Bb = bb.count;
        ub.instances = hb, ub.instanceCount = Bb;
        let Ob = -1;
        for (let Gb = 0; Gb < Bb; Gb++) {
          const ub = xU(bb.packedRowMesh(Gb));
          ub && Ob < 0 ? (this.casterWorlds.length < 16 * Bb && (this.casterWorlds = new Float32Array(hb.length)), this.casterWorlds.set(hb.subarray(0, 16 * Gb)), Ob = Gb) : !ub && Ob >= 0 && (this.casterWorlds.set(hb.subarray(16 * Gb, 16 * Gb + 16), 16 * Ob), Ob++)
        }
        return Ob >= 0 && (ub.instances = this.casterWorlds, ub.instanceCount = Ob), ub.instanceCount > 0
      }
      async reportFailure(bb, ub, hb) {
        const Bb = [];
        let Ob = !0;
        for (const [Gb, Ub] of [
            ["vertex", bb.vertex],
            ["fragment", bb.fragment]
          ]) {
          const bb = await Ub.getCompilationInfo();
          for (const ub of bb.messages) Ob &&= "error" !== ub.type, Bb.push(`${Gb}:${ub.lineNum}:${ub.linePos} ${ub.type}: ${ub.message}`)
        }
        if (Ob && !bb.packGroup) return this.pipelines.set(ub, !1), console.error(`Lite: pipeline ${ub} failed`, hb), void FO("mesh", bb.kind, hb);
        bb.failed || (bb.failed = !0, console.error(`Lite: program ${bb.id} failed`, hb, Bb.join("\n"), {
          program: bb.program,
          key: bb.key
        }), FO("mesh", bb.kind, hb, Ob ? null : Bb[0]))
      }
    }

    function xU(bb) {
      var ub, hb;
      const Bb = null === (ub = bb.Fs) || void 0 === ub || null === (hb = ub.aShaderPackItem) || void 0 === hb ? void 0 : hb.x;
      return void 0 !== Bb && 0 !== (Bb & Yu.g)
    }
    var zU = hb(41148),
      gU = hb(41153),
      iU = hb(41161),
      vU = hb(41113);
    const tU = [0, 3, 1, 4, 2, 5];

    function JU(bb, ub, hb, Bb, Ob) {
      const Gb = hb[0].width;
      try {
        return Ob ? function(bb, ub, hb) {
          const Bb = (0, vU.d)(bb, hb, hb, 6);
          for (let Ob = 0; Ob < 6; Ob++)(0, vU.h)(bb, Bb, Ob, ub[tU[Ob]], {
            invertY: !1
          });
          return Bb.texture
        }(bb, hb, Gb) : function(bb, ub, hb, Bb) {
          const Ob = bb.createTexture({
            label: "sink-cube",
            size: {
              width: hb,
              height: hb,
              depthOrArrayLayers: 6
            },
            format: Bb,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Gb = 0; Gb < 6; Gb++) bb.queue.copyExternalImageToTexture({
            source: ub[tU[Gb]]
          }, {
            texture: Ob,
            origin: {
              x: 0,
              y: 0,
              z: Gb
            }
          }, {
            width: hb,
            height: hb
          });
          return Ob
        }(ub, hb, Gb, 1 === Bb ? "r8unorm" : "rgba8unorm")
      } finally {
        eU(hb)
      }
    }

    function eU(bb) {
      for (const ub of null !== bb && void 0 !== bb ? bb : []) null === ub || void 0 === ub || ub.close()
    }
    async function NU(bb) {
      const ub = [],
        hb = [];
      if (await Promise.all(bb.map(((bb, Bb) => (ub[Bb] = null, bb.then((bb => {
          ub[Bb] = bb
        }), (bb => {
          hb.push(bb)
        })))))), hb.length > 0) throw eU(ub), hb[0];
      return ub
    }
    class sU {
      constructor(bb) {
        this.LH = bb, this.starts = [], this.lengths = [], this.used = 0, bb > 0 && (this.starts.push(0), this.lengths.push(bb))
      }
      allocate(bb) {
        const {
          starts: ub,
          lengths: hb
        } = this;
        for (let Bb = 0; Bb < ub.length; Bb++) {
          if (hb[Bb] < bb) continue;
          const Ob = ub[Bb];
          return hb[Bb] === bb ? (ub.splice(Bb, 1), hb.splice(Bb, 1)) : (ub[Bb] += bb, hb[Bb] -= bb), this.used += bb, Ob
        }
        return -1
      }
      free(bb, ub) {
        this.used -= ub;
        const hb = Math.min(bb + ub, this.LH);
        hb > bb && this.release(bb, hb - bb)
      }
      grow(bb) {
        const ub = this.LH;
        this.LH = bb, this.release(ub, bb - ub)
      }
      truncate(bb) {
        const {
          starts: ub,
          lengths: hb
        } = this;
        for (let Bb = ub.length - 1; Bb >= 0 && ub[Bb] + hb[Bb] > bb; Bb--) ub[Bb] >= bb ? (ub.splice(Bb, 1), hb.splice(Bb, 1)) : hb[Bb] = bb - ub[Bb];
        this.LH = bb
      }
      release(bb, ub) {
        const {
          starts: hb,
          lengths: Bb
        } = this;
        let Ob = 0,
          Gb = hb.length;
        for (; Ob < Gb;) {
          const ub = Ob + Gb >> 1;
          hb[ub] < bb ? Ob = ub + 1 : Gb = ub
        }
        const Ub = Ob,
          Lb = Ub > 0 && hb[Ub - 1] + Bb[Ub - 1] === bb,
          Yb = Ub < hb.length && bb + ub === hb[Ub];
        Lb && Yb ? (Bb[Ub - 1] += ub + Bb[Ub], hb.splice(Ub, 1), Bb.splice(Ub, 1)) : Lb ? Bb[Ub - 1] += ub : Yb ? (hb[Ub] = bb, Bb[Ub] += ub) : (hb.splice(Ub, 0, bb), Bb.splice(Ub, 0, ub))
      }
    }
    const MU = 256;
    class mU {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = bb, this.onReplaced = ub, this.mergeGap = hb, this.gpu = null, this.bytes = void 0, this.tp = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Ob = Math.max(MU, Math.ceil(Bb / MU) * MU);
        this.bytes = new Uint8Array(Ob), this.tp = new sU(Ob / MU)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(bb) {
        return Math.max(1, Math.ceil(bb / MU)) * MU
      }
      allocate(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb;
        const Bb = mU.slotBytes(bb),
          Ob = Bb / MU;
        let Gb = this.tp.allocate(Ob);
        Gb < 0 && (this.grow(this.tp.LH + Ob), Gb = this.tp.allocate(Ob));
        const Ub = Gb * MU;
        return this.growTo(Ub + Math.max(hb, Bb)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Ub, Ub + Bb), ub && this.bytes.set(new Uint8Array(ub.buffer, ub.byteOffset, Math.min(ub.byteLength, Bb)), Ub), this.markDirty(Ub, Ub + Bb), Ub
      }
      growTo(bb) {
        const ub = Math.ceil(bb / MU);
        ub > this.tp.LH && this.grow(ub)
      }
      free(bb, ub) {
        this.freed.push(bb, ub)
      }
      write(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Bb <= 0) return;
        this.bytes.set(new Uint8Array(ub.buffer, hb, Bb), bb);
        let Gb = bb + Bb;
        if (Ob) {
          const ub = bb + 4 * Math.ceil(Bb / 4);
          this.bytes.fill(0, Gb, ub), Gb = ub
        }
        this.markDirty(bb, Gb)
      }
      move(bb, ub, hb) {
        this.bytes.copyWithin(ub, bb, bb + hb), this.markDirty(ub, ub + hb)
      }
      flush() {
        for (const ub of this.retired) this.onReplaced(ub), ub.destroy();
        this.retired.length = 0;
        const bb = this.dirtyStarts.length;
        if (bb > 0) {
          const {
            dirtyStarts: ub,
            dirtyEnds: hb,
            order: Bb
          } = this;
          Bb.length = bb;
          for (let Lb = 0; Lb < bb; Lb++) Bb[Lb] = Lb;
          bb > 1 && Bb.sort(((bb, hb) => ub[bb] - ub[hb]));
          const Ob = this.mergeGap;
          let Gb = ub[Bb[0]],
            Ub = hb[Bb[0]];
          for (let Lb = 1; Lb < bb; Lb++) {
            const bb = Bb[Lb];
            ub[bb] - Ub <= Ob ? Ub = Math.max(Ub, hb[bb]) : (this.send(Gb, Ub), Gb = ub[bb], Ub = hb[bb])
          }
          this.send(Gb, Ub), ub.length = 0, hb.length = 0
        }
        this.holding = !1
      }
      jW() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const bb = this.freed;
        for (let ub = 0; ub < bb.length; ub += 2) this.tp.free(bb[ub] / MU, bb[ub + 1] / MU);
        bb.length = 0
      }
      send(bb, ub) {
        this.device.queue.writeBuffer(this.gpu, bb, this.bytes.buffer, bb, ub - bb);
        for (const hb of this.replaced) {
          const Bb = Math.min(ub, hb.size);
          Bb > bb && this.device.queue.writeBuffer(hb, bb, this.bytes.buffer, bb, Bb - bb)
        }
      }
      markDirty(bb, ub) {
        bb &= -4, ub = ub + 3 & -4, this.holding ? (this.dirtyStarts.push(bb), this.dirtyEnds.push(ub)) : this.send(bb, ub)
      }
      grow(bb) {
        const ub = this.tp.LH,
          hb = Math.max(2 * ub, bb),
          Bb = new Uint8Array(hb * MU);
        Bb.set(this.bytes);
        const Ob = this.gpu;
        this.gpu = this.createGpu(Bb.byteLength), this.bytes = Bb, this.tp.grow(hb), Ob && (this.replaced.push(Ob), this.onReplaced(Ob)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, ub * MU)
      }
      createGpu(bb) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: bb,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function IU(bb) {
      return Array.isArray(bb) ? new Float32Array(bb) : bb
    }

    function PU(bb, ub, hb, Bb, Ob) {
      const Gb = gO(Ob),
        Ub = Math.min(Ob, Bb.byteLength);
      if (Gb === Ub && Bb.byteOffset % 4 === 0) return void bb.queue.writeBuffer(ub, hb, Bb.buffer, Bb.byteOffset, Gb);
      const Lb = new Uint8Array(Gb);
      Lb.set(new Uint8Array(Bb.buffer, Bb.byteOffset, Ub)), bb.queue.writeBuffer(ub, hb, Lb)
    }

    function qU(bb, ub, hb) {
      const Bb = "linear",
        Ob = "nearest";
      let Gb = Ob,
        Ub = Ob,
        Lb = "nearest",
        Yb = !ub;
      switch (bb) {
        case 11:
          Gb = Bb, Ub = Bb;
          break;
        case 3:
          Gb = Bb, Ub = Bb, Lb = ub ? "linear" : "nearest";
          break;
        case 8:
          Lb = ub ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Ub = Bb;
          break;
        case 6:
          Ub = Bb, Lb = ub ? "linear" : "nearest";
          break;
        case 7:
          Ub = Bb, Yb = !0;
          break;
        case 9:
          Gb = Bb;
          break;
        case 10:
          Gb = Bb, Lb = ub ? "linear" : "nearest";
          break;
        case 2:
          Gb = Bb, Ub = Bb, hb > 1 ? (Lb = "linear", Yb = !1) : Yb = !0;
          break;
        case 12:
          Gb = Bb, Yb = !0;
          break;
        default:
          Yb = !0
      }
      return hb > 1 && !Yb ? {
        magFilter: Bb,
        minFilter: Bb,
        mipmapFilter: "linear",
        maxAnisotropy: hb
      } : {
        magFilter: Gb,
        minFilter: Ub,
        mipmapFilter: Lb,
        ...Yb ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function EU(bb) {
      return 0 === bb ? "clamp-to-edge" : 2 === bb ? "mirror-repeat" : "repeat"
    }
    class yU {
      constructor(bb, ub) {
        let {
          vertexArena: hb = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = bb, this.device = ub, this.buffers = new WeakMap, this.y5 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = hb ? new mU(ub, (bb => {
          var ub;
          null === (ub = this.onDestroy) || void 0 === ub || ub.call(this, bb), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var bb;
        null === (bb = this.arena) || void 0 === bb || bb.flush()
      }
      endUploadFrame() {
        var bb;
        null === (bb = this.arena) || void 0 === bb || bb.jW()
      }
      vertexBufferCreated(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hb ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(bb);
        const Ob = IU(ub);
        bb.LH = Ob.byteLength, this.buffers.set(bb, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: hb && null !== this.arena,
          pending: Ob,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Bb
        })
      }
      vertexBufferUpdated(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        const Ob = this.buffers.get(bb);
        if (!Ob) return;
        const Gb = IU(ub),
          Ub = void 0 === Bb ? Gb.byteLength : Math.min(Bb, Gb.byteLength);
        this.update(Ob, Gb, hb, Ub)
      }
      vertexBufferFloatsUpdated(bb, ub, hb, Bb) {
        const Ob = this.buffers.get(bb);
        if (!Ob) return;
        const Gb = hb * Float32Array.BYTES_PER_ELEMENT,
          Ub = (Bb - hb) * Float32Array.BYTES_PER_ELEMENT;
        Ob.slot >= 0 && Ub > 0 && Gb + Ub <= Ob.size ? this.writeSlot(Ob, Gb, ub, ub.byteOffset + Gb, Ub, !1) : Ob.gpu && Ub > 0 && Gb + Ub <= Ob.gpu.size ? this.device.queue.writeBuffer(Ob.gpu, Gb, ub.buffer, ub.byteOffset + Gb, Ub) : this.update(Ob, ub.subarray(hb, Bb), Gb, Ub)
      }
      indexBufferCreated(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(bb);
        const Bb = function(bb) {
          if (bb instanceof Uint16Array || bb instanceof Uint32Array) return bb;
          for (let ub = 0; ub < bb.length; ub++)
            if (bb[ub] >= 65535) return new Uint32Array(bb);
          return new Uint16Array(bb)
        }(ub);
        bb.is32Bits = 4 === Bb.BYTES_PER_ELEMENT, bb.LH = Bb.byteLength, this.buffers.set(bb, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Bb,
          ownsPending: Bb !== ub,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: hb
        })
      }
      bufferDeleted(bb) {
        const ub = this.buffers.get(bb);
        null !== ub && void 0 !== ub && ub.gpu ? (this.destroyBuffer(ub.gpu), this.gpuBuffersVersion++) : ub && ub.slot >= 0 && (this.arena.free(ub.slot, ub.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(bb)
      }
      update(bb, ub, hb, Bb) {
        if (bb.slot >= 0) this.updateSlot(bb, ub, hb, Bb);
        else if (bb.gpu) {
          if (hb + gO(Bb) > bb.gpu.size) {
            const ub = this.device.createBuffer({
                label: bb.label,
                size: gO(Math.max(2 * bb.gpu.size, hb + Bb)),
                usage: bb.usage | GPUBufferUsage.COPY_SRC
              }),
              Ob = this.device.createCommandEncoder();
            Ob.copyBufferToBuffer(bb.gpu, 0, ub, 0, bb.gpu.size), this.device.queue.submit([Ob.finish()]), this.destroyBuffer(bb.gpu), this.gpuBuffersVersion++, bb.gpu = ub
          }
          PU(this.device, bb.gpu, hb, ub, Bb)
        } else {
          const Gb = new Uint8Array(ub.buffer, ub.byteOffset, Bb),
            Ub = bb.pending;
          if (Ub && bb.ownsPending && hb + Bb <= Ub.byteLength) new Uint8Array(Ub.buffer, Ub.byteOffset, Ub.byteLength).set(Gb, hb);
          else if (Ub && 0 === hb && Bb === Ub.byteLength && ub.byteLength === Bb) bb.pending = ub, bb.ownsPending = !1;
          else {
            var Ob;
            const ub = new Uint8Array(Math.max(null !== (Ob = null === Ub || void 0 === Ub ? void 0 : Ub.byteLength) && void 0 !== Ob ? Ob : 0, hb + Bb));
            Ub && ub.set(new Uint8Array(Ub.buffer, Ub.byteOffset, Ub.byteLength)), ub.set(Gb, hb), bb.pending = ub, bb.ownsPending = !0
          }
        }
      }
      updateSlot(bb, ub, hb, Bb) {
        const Ob = this.arena;
        hb + gO(Bb) > bb.size && (bb.size = gO(Math.max(2 * bb.size, hb + Bb)), Ob.growTo(bb.slot + bb.size), this.gpuBuffersVersion++), 0 === Bb ? this.writeSlot(bb, hb, FU, 0, 4, !1) : this.writeSlot(bb, hb, ub, ub.byteOffset, Bb, !0)
      }
      writeSlot(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = ub + (Gb ? gO(Ob) : Ob);
        Ub > bb.slotBytes && this.moveSlot(bb, Ub), this.arena.write(bb.slot + ub, hb, Bb, Ob, Gb)
      }
      moveSlot(bb, ub) {
        const hb = this.arena,
          Bb = mU.slotBytes(Math.max(ub, Math.min(2 * bb.slotBytes, bb.size))),
          Ob = hb.allocate(Bb, null, bb.size);
        hb.move(bb.slot, Ob, bb.slotBytes), hb.free(bb.slot, bb.slotBytes), bb.slot = Ob, bb.slotBytes = Bb, this.gpuBuffersVersion++
      }
      cover(bb, ub) {
        const hb = this.buffers.get(bb);
        if (!hb || hb.slot < 0) return !1;
        const Bb = Math.min(ub, hb.size);
        return !(Bb <= hb.slotBytes) && (this.moveSlot(hb, Bb), !0)
      }
      destroyBuffer(bb) {
        var ub;
        null === (ub = this.onDestroy) || void 0 === ub || ub.call(this, bb), bb.destroy()
      }
      gpuBuffer(bb) {
        const ub = this.buffers.get(bb);
        if (!ub) return null;
        if (ub.slot >= 0) return this.arena.buffer;
        if (ub.arena && ub.pending) {
          const bb = ub.pending,
            hb = this.arena;
          return ub.size = gO(bb.byteLength), ub.slotBytes = mU.slotBytes(function(bb) {
            const ub = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength);
            let hb = ub.length;
            if (bb.byteOffset % 4 === 0) {
              for (; hb % 4 !== 0 && 0 === ub[hb - 1];) hb--;
              if (hb % 4 === 0) {
                const ub = new Uint32Array(bb.buffer, bb.byteOffset, hb / 4);
                let Bb = ub.length;
                for (; Bb > 0 && 0 === ub[Bb - 1];) Bb--;
                hb = 4 * Bb
              }
            }
            for (; hb > 0 && 0 === ub[hb - 1];) hb--;
            return hb
          }(bb)), ub.slot = hb.allocate(ub.slotBytes, bb, ub.size), ub.pending = null, hb.buffer
        }
        if (!ub.gpu && ub.pending) {
          const bb = ub.pending;
          ub.gpu = this.device.createBuffer({
            label: ub.label,
            size: gO(bb.byteLength),
            usage: ub.usage
          }), PU(this.device, ub.gpu, 0, bb, bb.byteLength), ub.pending = null
        }
        return ub.gpu
      }
      gpuOffset(bb) {
        var ub, hb;
        const Bb = null !== (ub = null === (hb = this.buffers.get(bb)) || void 0 === hb ? void 0 : hb.slot) && void 0 !== ub ? ub : -1;
        return Bb < 0 ? 0 : Bb
      }
      gpuEnd(bb) {
        var ub, hb;
        const Bb = this.buffers.get(bb);
        return Bb ? Bb.slot >= 0 ? Bb.slot + Bb.size : null !== (ub = null === (hb = Bb.gpu) || void 0 === hb ? void 0 : hb.size) && void 0 !== ub ? ub : 0 : 0
      }
      vertexInput(bb, ub, hb) {
        var Bb, Ob, Gb, Ub;
        return null !== (Bb = null !== (Ob = hb && this.modelInput(hb, ub)) && void 0 !== Ob ? Ob : null === (Gb = null !== (Ub = this.y5.get(bb)) && void 0 !== Ub ? Ub : this.batchUploads.get(bb)) || void 0 === Gb ? void 0 : Gb.inputs[ub]) && void 0 !== Bb ? Bb : null
      }
      modelInput(bb, ub) {
        const hb = this.geometrySlot(bb);
        let Bb = hb.inputs.get(ub);
        if (void 0 === Bb) {
          const Ob = bb.vertexAttributes.find((bb => bb.kind === ub));
          Bb = Ob ? new Fb(this.modelKey(hb, Ob.data, !1), Ob.offset, Ob.stride, Ob.components, !1, Ob.glType, Ob.isNormalized) : null, hb.inputs.set(ub, Bb)
        }
        return Bb
      }
      modelIndex(bb) {
        return bb.indexData && this.modelKey(this.geometrySlot(bb), bb.indexData, !0)
      }
      geometrySlot(bb) {
        let ub = bb.gpu[xb.e.lite];
        if (!ub) {
          const hb = new Map,
            Bb = () => {
              for (const bb of hb.values()) this.bufferDeleted(bb)
            },
            Ob = bb => {
              const ub = hb.get(bb);
              ub && this.vertexBufferUpdated(ub, bb)
            };
          ub = {
            keys: hb,
            inputs: new Map,
            release: Bb,
            updated: Ob
          }, bb.gpu[xb.e.lite] = ub
        }
        return ub
      }
      modelKey(bb, ub, hb) {
        let Bb = bb.keys.get(ub);
        if (!Bb) {
          if (hb) {
            const bb = {
              LH: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(bb, ub, "model-indices"), Bb = bb
          } else Bb = {
            LH: 0
          }, this.vertexBufferCreated(Bb, ub, !1, "model-vertices");
          bb.keys.set(ub, Bb)
        }
        return Bb
      }
      indexFormat(bb) {
        return bb.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(bb, ub) {
        --bb.refs > 0 || (this.releaseTexture(bb), eU(bb.images), null !== ub && this.textures.delete(ub))
      }
      load(bb, ub) {
        const hb = ub.decoded = async function(bb) {
          if ("cube" === bb.kind) return async function(bb) {
            if (6 !== bb.length) throw new Error(`${bb.length} files where six faces were expected`);
            const ub = await NU(bb.map((bb => NO(bb)))),
              hb = ub[0].width;
            return NU(ub.map((async bb => {
              if (bb.width === hb && bb.height === hb) return bb;
              try {
                return await createImageBitmap(bb, {
                  ...JO,
                  resizeWidth: hb,
                  resizeHeight: hb
                })
              } finally {
                bb.close()
              }
            })))
          }(bb.files);
          if ("data" === bb.kind && bb.data) return [await createImageBitmap(new Blob([bb.data]), JO)];
          return [await NO(VU(bb))]
        }(bb.source).then((bb => {
          0 === ub.refs ? eU(bb) : ub.images = bb
        }));
        this.track(ub, VU(bb.source), hb, (() => {
          ub.wanted && !ub.failed && ub.refs > 0 && this.upload(bb, ub)
        }))
      }
      canvasUpdated(bb, ub, hb) {
        const {
          state: Bb
        } = this.textureSlot(bb);
        Bb.dynamicSource = {
          invertY: ub,
          premultiplied: hb
        }, Bb.dynamic && this.pushDynamic(bb.source, Bb)
      }
      async atlasArray(bb, ub, hb) {
        const Bb = await mO(this.device, bb, ub, hb);
        if (!this.atlasBindings.has(Bb)) {
          const bb = (0, zU.e)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Bb, {
            view: Bb.texture.createView({
              dimension: "2d-array"
            }),
            sampler: bb
          })
        }
        return Bb
      }
      boundTexture(bb) {
        const ub = this.atlasBindings.get(bb);
        if (ub) return ub;
        const hb = bb;
        if (hb.released) return null;
        const Bb = this.textureSlot(hb, !0),
          {
            state: Ob
          } = Bb;
        if (!Ob.view && (Ob.wanted = !0, Ob.loading || Ob.failed || this.upload(hb, Ob), !Ob.view)) return null;
        const Gb = this.chosenSampler(hb, Bb),
          Ub = Bb.bound;
        return Ub && Ub.view === Ob.view && Ub.sampler === Gb ? Ub : (Bb.bound = {
          view: Ob.view,
          sampler: Gb
        }, Bb.bound)
      }
      textureLoaded(bb) {
        var ub, hb;
        return null !== (ub = null === (hb = bb.gpu[xb.e.lite]) || void 0 === hb ? void 0 : hb.state.decoded) && void 0 !== ub ? ub : null
      }
      textureFailed(bb) {
        var ub;
        return !0 === (null === (ub = bb.gpu[xb.e.lite]) || void 0 === ub ? void 0 : ub.state.failed)
      }
      chosenSampler(bb, ub) {
        const {
          samplingMode: hb,
          wrapU: Bb,
          wrapV: Ob
        } = bb.sampler, Gb = ub.state.hasMips, Ub = function(bb, ub) {
          const {
            bilinear: hb,
            trilinear: Bb
          } = xb.i;
          return !ub && bb !== hb || 11 !== bb && bb !== Bb && bb !== hb ? 1 : 4
        }(hb, Gb), Lb = ub.sampler;
        if (Lb && Lb.samplingMode === hb && Lb.hasMips === Gb && Lb.anisotropy === Ub && Lb.wrapU === Bb && Lb.wrapV === Ob) return Lb.sampler;
        const Yb = this.samplerFor(hb, Gb, Ub, Bb, Ob);
        return ub.sampler = {
          samplingMode: hb,
          hasMips: Gb,
          anisotropy: Ub,
          wrapU: Bb,
          wrapV: Ob,
          sampler: Yb
        }, Yb
      }
      releaseTexture(bb) {
        var ub, hb;
        bb.view && (null === (hb = this.onDestroy) || void 0 === hb || hb.call(this, bb.view));
        null === (ub = bb.destroy) || void 0 === ub || ub.call(bb)
      }
      textureSlot(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = bb.gpu[xb.e.lite];
        if (hb) return hb;
        const Bb = function(bb) {
          let {
            source: ub,
            sampler: hb
          } = bb;
          return "canvas" === ub.kind ? null : `${ub.kind}|${VU(ub)}|${hb.noMipmap}|${hb.samplingMode}|${hb.invertY}`
        }(bb);
        let Ob = null === Bb ? void 0 : this.textures.get(Bb);
        Ob || (Ob = {
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
        }, null !== Bb && (this.textures.set(Bb, Ob), this.load(bb, Ob), ub && this.firstBindDecodes++)), Ob.refs++;
        const Gb = Ob,
          Ub = {
            state: Ob,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(Gb, Bb)
            }
          };
        return bb.gpu[xb.e.lite] = Ub, Ub
      }
      samplerFor(bb, ub, hb, Bb, Ob) {
        const Gb = `${bb}|${ub}|${hb}|${Bb}|${Ob}`;
        let Ub = this.samplers.get(Gb);
        if (!Ub) {
          const Lb = {
            ...qU(bb, ub, hb),
            addressModeU: EU(Bb),
            addressModeV: EU(Ob)
          };
          Ub = (0, zU.e)(this.engine, Lb), this.samplers.set(Gb, Ub)
        }
        return Ub
      }
      upload(bb, ub) {
        const {
          source: hb,
          sampler: Bb
        } = bb;
        ub.hasMips = !Bb.noMipmap, "canvas" === hb.kind ? this.createDynamic(hb, ub) : "cube" === hb.kind ? this.uploadCube(ub, hb.luminance) : this.uploadImage(ub, !0 === Bb.invertY, hb.url)
      }
      uploadImage(bb, ub, hb) {
        const [Bb] = bb.images;
        bb.images = null;
        const Ob = (0, gU.e)(this.engine, Bb, {
          mipMaps: bb.hasMips,
          invertY: ub,
          srgb: !1
        }).then((ub => {
          Bb.close(), 0 !== bb.refs ? (bb.view = ub.view, bb.destroy = ub.texture.destroy.bind(ub.texture)) : ub.texture.destroy()
        }));
        this.track(bb, hb, Ob)
      }
      track(bb, ub, hb, Bb) {
        bb.loading = !0, this.pending++, hb.catch((hb => {
          bb.failed = !0, console.warn(`Lite: could not load texture ${eO(ub)}`, hb)
        })).finally((() => {
          bb.loading = !1, this.pending--, null === Bb || void 0 === Bb || Bb()
        }))
      }
      uploadCube(bb, ub) {
        const hb = bb.images;
        bb.images = null;
        const Bb = JU(this.engine, this.device, hb, (0, xb.v)(ub), bb.hasMips);
        bb.view = Bb.createView({
          dimension: "cube"
        }), bb.destroy = () => {
          Bb.destroy()
        }
      }
      createDynamic(bb, ub) {
        const {
          canvas: hb
        } = bb, Bb = (0, iU.c)(this.engine, Math.max(1, hb.width), Math.max(1, hb.height), {
          mipMaps: ub.hasMips,
          srgb: !1
        });
        ub.dynamic = Bb, ub.view = Bb.view, ub.destroy = () => {
          Bb.texture.destroy()
        }, this.pushDynamic(bb, ub)
      }
      pushDynamic(bb, ub) {
        const hb = ub.dynamicSource,
          Bb = ub.dynamic,
          {
            canvas: Ob
          } = bb;
        if (hb && Bb && 0 !== Ob.width && 0 !== Ob.height) return Ob.width !== Bb.width || Ob.height !== Bb.height ? (this.releaseTexture(ub), ub.dynamic = null, ub.view = null, void this.createDynamic(bb, ub)) : void(0, iU.e)(this.engine, Bb, Ob, {
          invertY: hb.invertY,
          premultiplyAlpha: hb.premultiplied
        })
      }
    }

    function VU(bb) {
      return "cube" === bb.kind ? bb.rootUrl : "canvas" === bb.kind ? "canvas" : bb.url
    }
    const FU = new Uint8Array(4);

    function fU(bb) {
      const ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      bb._colorAttachment.storeOp = bb._targetSignature._sampleCount > 1 ? ub : "store";
      const hb = bb._renderPassDescriptor.depthStencilAttachment;
      hb && (hb.depthStoreOp = ub, hb.stencilStoreOp && (hb.stencilStoreOp = ub))
    }
    var kU = hb(37399),
      TU = hb(37428),
      cU = hb(37096),
      QU = hb(39191);
    const RU = new Float64Array([1, 1, 1]),
      bL = new Float64Array([0, 1, 0]),
      uL = new Float64Array(4),
      hL = new Float32Array(16),
      BL = new Float64Array(3),
      OL = new Float64Array(4);

    function GL(bb, ub, hb) {
      bb.fov = ub.fov, bb.near = ub.near, bb.far = ub.far, bb.renderWidth = hb.renderWidth, bb.renderHeight = hb.renderHeight, (0, cU.s)(ub.holderRotation, 0, uL, 0), (0, cU.b)(RU, 0, uL, 0, ub.holderPosition, 0, hL);
      const Bb = ub.pT;
      BL[0] = Bb[0], BL[1] = Bb[1], BL[2] = Bb[2] + 1;
      const Ob = bb.viewMatrix;
      (0, cU.k)(Bb, BL, bL, Ob), (0, cU.g)(Ob, 0, Ob), (0, cU.o)(Ob, hL, 0, Ob), (0, cU.g)(Ob, 0, Ob);
      const Gb = bb.worldMatrix;
      (0, cU.g)(Ob, 0, Gb), bb.eye[0] = Gb[12], bb.eye[1] = Gb[13], bb.eye[2] = Gb[14], OL[0] = bb.fov, OL[1] = bb.renderWidth / bb.renderHeight, OL[2] = bb.near, OL[3] = bb.far, (0, cU.r)(OL, bb.projectionMatrix), (0, cU.o)(Ob, bb.projectionMatrix, 0, bb.viewProjectionMatrix), (0, QU.e)(bb.viewProjectionMatrix, bb.frustum)
    }

    function UL(bb, ub) {
      let hb = bb.frustumPlanes;
      hb || (hb = bb.frustumPlanes = Array.from({
        length: 6
      }, (() => new kU.d(0, 0, 0, 0))));
      for (let Bb = 0; Bb < 6; Bb++) {
        const bb = hb[Bb].normal;
        bb._x = ub[4 * Bb], bb._y = ub[4 * Bb + 1], bb._z = ub[4 * Bb + 2], bb._isDirty = !0, hb[Bb].d = ub[4 * Bb + 3]
      }
    }

    function LL(bb, ub) {
      const hb = ub.clearColor;
      bb.clearColour[0] = hb.r, bb.clearColour[1] = hb.g, bb.clearColour[2] = hb.b, bb.clearColour[3] = hb.a;
      const Bb = ub.ambientColor;
      bb.ambientColour[0] = Bb.r, bb.ambientColour[1] = Bb.g, bb.ambientColour[2] = Bb.b, bb.animationRatio = ub.animationRatio, bb.frameId = ub.frameId, bb.version++
    }

    function YL(bb) {
      const ub = bb.model.view;
      return ub.animTick = (0, TU.f)(), ub.timeMs = performance.now(), LL(ub, bb.Xp), bb.model.update(ub.frameId), ub
    }

    function SL(bb) {
      const ub = bb.Xp,
        {
          view: hb,
          XT: Bb
        } = bb.model;
      return GL(hb, Bb, ub.UX()), ub.onBeforeRenderObservable.notifyObservers(ub), UL(ub, hb.frustum), ub.onBeforeCameraRenderObservable.notifyObservers(ub.activeCamera), YL(bb)
    }
    var aL = hb(37061),
      HL = hb(37187),
      wL = hb(37423);

    function ZL(bb) {
      var ub, hb;
      const Bb = (0, nb._)(bb);
      if (!Bb || Bb.diffuseTexture && (0, wL.h)(bb)) return null;
      const Ob = null === (ub = (0, nb.v)(Bb, rb.h.name)) || void 0 === ub ? void 0 : ub.state,
        Gb = null === (hb = (0, nb.v)(Bb, VG.b.name)) || void 0 === hb ? void 0 : hb.state,
        Ub = new Float32Array(16);
      return function(bb, ub, hb, Bb) {
        var Ob, Gb;
        const Ub = wB;
        Bb.set(bb.diffuseColor, Ub.diffuse), Bb[Ub.diffuse + 3] = bb.alpha, Bb.set(bb.ambientColor, Ub.ambientAndCutoff), Bb[Ub.ambientAndCutoff + 3] = bb.alphaCutOff, Bb.set(bb.emissiveColor, Ub.emissiveAndLevel), Bb[Ub.emissiveAndLevel + 3] = null !== (Ob = null === (Gb = bb.diffuseTexture) || void 0 === Gb ? void 0 : Gb.level) && void 0 !== Ob ? Ob : 1, null !== ub && void 0 !== ub && ub.animDataPerTex ? (Bb[Ub.anim + 1] = TU.e, Bb[Ub.anim + 2] = ub.animDataPerTex.length / 3 - 1) : hb && (Bb[Ub.anim + 1] = hb.numAnimStates, Bb[Ub.anim + 2] = hb.ticksPerAnimState)
      }(Bb, Ob, Gb, Ub), {
        model: Bb,
        atlas: Ob,
        texture: Ob ? "atlas" : Bb.diffuseTexture ? "single" : "none",
        animated: Ob ? !!Ob.animDataPerTex : !!Gb,
        liquid: (0, wL.l)(bb),
        customRenderMat: (0, wL.h)(bb),
        uniformData: Ub
      }
    }
    var XL = hb(2678);
    class pL {
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
    class oL {
      constructor(bb, ub) {
        this.arena = bb, this.tp = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.tp = new sU(ub);
        const hb = new pL(ub);
        hb.buffer = this.createBuffer(hb, !1), this.backings.push(hb), this.refresh()
      }
      get LH() {
        return this.tp.LH
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
        for (const ub of this.backings) bb += ub.units * (this.arena.unitBytes + (ub.twin ? this.arena.twinUnitBytes : 0));
        return bb
      }
      holds(bb) {
        return bb.start + bb.length <= this.usable
      }
      lost(bb) {
        return this.dropped || bb.start + bb.length > this.LH
      }
      write(bb, ub) {
        const {
          device: hb,
          unitBytes: Bb
        } = this.arena;
        for (const Ob of this.backings) {
          const Gb = (Ob.units - bb.start) * Bb;
          Gb > 0 && hb.queue.writeBuffer(Ob.buffer, bb.start * Bb, ub, 0, Math.min(ub.byteLength, Gb))
        }
      }
      writeLight(bb, ub) {
        const {
          device: hb,
          twinUnitBytes: Bb,
          verticesPerUnit: Ob
        } = this.arena, {
          light: Gb,
          count: Ub
        } = this.arena.twinLight(ub, Math.min(ub.length, bb.length * Ob));
        for (const Lb of this.backings) {
          Lb.twin || (Lb.twin = this.createBuffer(Lb, !0));
          const ub = (Lb.units - bb.start) * Ob;
          ub > 0 && hb.queue.writeBuffer(Lb.twin, bb.start * Bb, Gb, 0, Math.min(Ub, ub))
        }
      }
      grow(bb) {
        this.arena.assertNotDrawing();
        const {
          device: ub,
          unitBytes: hb,
          label: Bb
        } = this.arena, Ob = this.backings[this.backings.length - 1], Gb = new pL(bb), Ub = ub.createCommandEncoder({
          label: `${Bb}-grow`
        });
        Gb.buffer = this.createBuffer(Gb, !1), Ub.copyBufferToBuffer(Ob.buffer, 0, Gb.buffer, 0, Ob.units * hb), Ob.twin && (Gb.twin = this.createBuffer(Gb, !0), Ub.copyBufferToBuffer(Ob.twin, 0, Gb.twin, 0, Ob.units * this.arena.twinUnitBytes)), ub.queue.submit([Ub.finish()]), this.backings.push(Gb), this.tp.grow(bb)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const bb of this.backings) bb.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(bb, ub) {
        const {
          device: hb,
          unitBytes: Bb,
          twinUnitBytes: Ob,
          usage: Gb,
          label: Ub
        } = this.arena;
        hb.pushErrorScope("out-of-memory");
        const Lb = hb.createBuffer({
          label: ub ? `${Ub}-light` : Ub,
          size: bb.units * (ub ? Ob : Bb),
          usage: (ub ? this.arena.twinUsage : Gb) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, hb.popErrorScope().then((hb => {
          this.arena.awaitingVerdict--, this.settle(bb, ub, !hb, !0)
        }), (hb => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Ub} buffer, taken as failed: ${String(hb)}`), this.settle(bb, ub, !1, !1)
        })), Lb
      }
      settle(bb, ub, hb, Bb) {
        const Ob = this.backings.indexOf(bb);
        if (!(this.dropped || Ob < 0)) {
          if (!hb) {
            if (Bb && this.arena.ranOutOfMemory(bb.units, bb.units * (ub ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Ob) return void this.drop();
            for (const bb of this.backings.splice(Ob)) bb.destroy();
            return this.tp.truncate(this.backings[Ob - 1].units), this.growable = !1, void this.promote()
          }
          ub ? bb.twinReady = !0 : (bb.bufferReady = !0, this.arena.allocatedBuffer(bb.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: bb
        } = this;
        let ub = 0;
        for (; ub + 1 < bb.length && bb[ub].ready && bb[ub + 1].ready;) ub++;
        for (const hb of bb.splice(0, ub)) hb.destroy();
        this.refresh()
      }
      refresh() {
        const bb = this.backings[0];
        this.buffer = bb.buffer, this.twin = bb.twinReady ? bb.twin : null, this.usable = !this.dropped && bb.bufferReady ? bb.units : 0
      }
    }
    class AL {
      constructor(bb, ub, hb, Bb) {
        let {
          verticesPerUnit: Ob = 1,
          twinUsage: Gb = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = bb, this.unitBytes = ub, this.usage = hb, this.label = Bb, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Su.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), ub % 4 !== 0) throw new Error(`${Bb}: ${ub}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Ob, this.twinUsage = Gb, this.twinValueBytes = Ob > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Ob
      }
      twinLight(bb, ub) {
        if (4 === this.twinValueBytes) return this.widened.length < ub && (this.widened = new Float32Array(Math.max(ub, 2 * this.widened.length))), this.widened.set(bb.subarray(0, ub)), {
          light: this.widened,
          count: ub
        };
        const hb = ub % this.verticesPerUnit;
        if (0 === hb) return {
          light: bb,
          count: ub
        };
        const Bb = ub - hb + this.verticesPerUnit;
        return this.padded.length < Bb && (this.padded = new Uint16Array(Math.max(Bb, 2 * this.padded.length))), this.padded.set(bb.subarray(0, ub)), this.padded.fill(0, ub, Bb), {
          light: this.padded,
          count: Bb
        }
      }
      allocate(bb) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), bb > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Ob of this.pages) {
          const ub = Ob.tp.allocate(bb);
          if (ub >= 0) return {
            page: Ob,
            start: ub,
            length: bb
          }
        }
        const ub = this.pages[this.pages.length - 1];
        if (null !== ub && void 0 !== ub && ub.canGrow) {
          const hb = Math.min(this.ceiling, Math.max(2 * ub.LH, ub.LH + bb));
          if (hb - ub.LH >= bb) return ub.grow(hb), {
            page: ub,
            start: ub.tp.allocate(bb),
            length: bb
          }
        }
        ub && ub !== this.pages[0] && 0 === ub.tp.used && ub.drop();
        const hb = Math.floor(1048576 / this.unitBytes),
          Bb = new oL(this, Math.max(bb, Math.min(this.ceiling, hb)));
        return this.pages.push(Bb), {
          page: Bb,
          start: Bb.tp.allocate(bb),
          length: bb
        }
      }
      free(bb) {
        this.assertNotDrawing();
        const {
          page: ub
        } = bb;
        ub.tp.free(bb.start, bb.length), 0 === ub.tp.used && ub !== this.pages[0] && ub !== this.pages[this.pages.length - 1] && ub.drop()
      }
      remove(bb) {
        const ub = this.pages.indexOf(bb);
        ub >= 0 && this.pages.splice(ub, 1)
      }
      ranOutOfMemory(bb, ub) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${ub}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, bb), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, bb) / 2));
        const hb = performance.now();
        hb >= this.shortageUntil && (this.forgetFailedAt = hb + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = hb + 1e3)
      }
      allocatedBuffer(bb) {
        bb >= this.failed && (this.failed = 1 / 0);
        const ub = Math.min(2 * bb, Math.floor((bb + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, ub))
      }
      stats() {
        let bb = 0,
          ub = 0,
          hb = 0,
          Bb = 0;
        for (const Ob of this.pages) bb += Ob.LH, ub += Ob.tp.used, hb += Ob.hasTwin ? Ob.LH * this.twinUnitBytes : 0, Bb += Ob.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: bb * this.unitBytes,
          usedBytes: ub * this.unitBytes,
          twinBytes: hb,
          allocatedBytes: Bb
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: bb,
          maxStorageBufferBindingSize: ub
        } = this.device.limits;
        let hb = Math.floor(Math.min(67108864, bb) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (hb = Math.min(hb, Math.floor(ub / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (hb = Math.min(hb, Math.floor(ub / this.twinUnitBytes))), hb
      }
    }
    const lL = 16383;

    function KL(bb, ub, hb, Bb, Ob) {
      let Gb = 0;
      for (let Ub = hb; Ub < Bb; Ub += lL) bb.drawIndexed(6 * Math.min(lL, Bb - Ub), 1, 0, ub + 4 * Ub, Ob), Gb++;
      return Gb
    }
    class WL {
      constructor(bb, ub) {
        this.recordsGroup = ub, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const hb = ju.g.strideWithoutAtlas;
        this.vertexArena = new AL(bb, hb, GPUBufferUsage.VERTEX, `terrain-vertices-${hb}`), this.quadArena = new AL(bb, HL.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Bb = (0, nu.g)(new Uint16Array(98298), lL);
        this.quadPattern = bb.createBuffer({
          label: "terrain-quad-pattern",
          size: Bb.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), bb.queue.writeBuffer(this.quadPattern, 0, Bb)
      }
      set(bb, ub) {
        const hb = ub.packedVertices,
          Bb = hb ? this.quadArena.allocate(bb.faceCount) : this.vertexArena.allocate(bb.vertexCount);
        if (!Bb) return !1;
        bb.vertices = Bb;
        const Ob = hb ? new Uint8Array(hb.buffer, hb.byteOffset, hb.byteLength) : new Uint8Array(ub.vertices);
        return Bb.page.write(Bb, Ob), !0
      }
      setLight(bb, ub) {
        const {
          vertices: hb
        } = bb;
        hb && 0 !== ub.length && hb.page.live && (ub.length < bb.vertexCount ? hb.page.arena.warnOnce("shortLight", `a part's ${ub.length} light values are fewer than its ${bb.vertexCount} vertices, so its light is left as it was`) : (hb.page.writeLight(hb, ub), bb.lit = !0))
      }
      lightFullSky(bb, ub) {
        this.fullSky.length < ub && (this.fullSky = new Uint16Array(Math.max(ub, 4096)).fill(XL.k));
        for (const hb of bb) {
          const bb = hb.vertices;
          bb.page.live && (bb.page.writeLight(bb, this.fullSky), hb.lit = !0)
        }
      }
      backed(bb) {
        const {
          vertices: ub
        } = bb;
        return !!ub && ub.page.holds(ub)
      }
      lost(bb) {
        const {
          vertices: ub
        } = bb;
        return !!ub && ub.page.lost(ub)
      }
      release(bb) {
        bb.vertices && bb.vertices.page.arena.free(bb.vertices), bb.vertices = null, bb.lit = !1
      }
      setDrawing(bb) {
        this.forgetBound()
      }
      draw(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ub.faceCount;
        const Gb = ub.vertices,
          Ub = Gb.page,
          Lb = hb ? Ub.twin : null;
        if (!Ub.holds(Gb) || hb && !Lb) return 0;
        const {
          verticesPerUnit: Yb
        } = Ub.arena;
        let Sb = Gb.start * Yb;
        this.boundPattern || (bb.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const ab = Bb + Ob;
        if (Yb > 1) return Ub.buffer === this.boundRecords && Lb === this.boundRecordsLight || (bb.setBindGroup(1, this.recordsGroup(Ub.buffer, Lb)), this.boundRecords = Ub.buffer, this.boundRecordsLight = Lb), KL(bb, Sb, Bb, ab, ub.slot);
        Ub.buffer !== this.boundVertices && (bb.setVertexBuffer(0, Ub.buffer), this.boundVertices = Ub.buffer), Lb && Lb !== this.boundLight && (bb.setVertexBuffer(1, Lb), this.boundLight = Lb);
        const Hb = ub.faceCount;
        return ab <= Hb ? KL(bb, Sb, Bb, ab, ub.slot) : KL(bb, Sb, Bb, Hb, ub.slot) + KL(bb, Sb, Math.max(Bb, Hb) - Hb, ab - Hb, ub.slot)
      }
      get buffersAwaitingVerdict() {
        let bb = 0;
        for (const ub of this.arenas()) bb += ub.awaitingVerdict;
        return bb
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class CL {
      constructor(bb, ub, hb, Bb) {
        this.device = bb, this.splitBefore = ub, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = bb.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Ob = bb.createShaderModule({
          label: "scene-depth-copy",
          code: (Gb = hb._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Gb?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Gb;
        bb.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Ob,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Ob,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((bb => {
          this.pipeline = bb, this.building = !1
        }), (bb => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", bb)
        })), hb._executeWithTransmission = () => this.execute(hb, Bb)
      }
      get compiling() {
        return this.building
      }
      setWanted(bb) {
        this.wanted = bb
      }
      setPlanes(bb, ub) {
        bb === this.near && ub === this.far || (this.near = bb, this.far = ub, this.unproject[0] = bb / (ub - bb), this.unproject[1] = ub * bb / (ub - bb), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var bb, ub;
        return null !== (bb = null === (ub = this.copy) || void 0 === ub ? void 0 : ub.view) && void 0 !== bb ? bb : null
      }
      execute(bb, ub) {
        var hb;
        null === (hb = this.retired) || void 0 === hb || hb.destroy(), this.retired = null;
        const Bb = bu(ub),
          Ob = bb._transparentBindings,
          Gb = this.wanted && this.pipeline ? this.splitIndex(Ob) : -1,
          Ub = bb._colorAttachment,
          Lb = Ub.resolveTarget;
        Gb >= 0 && (Ub.resolveTarget = void 0, fU(bb, !0));
        let Yb = Bb.beginRenderPass(bb._renderPassDescriptor);
        Yb.setBindGroup(0, bb._sceneBG);
        let Sb = this.drawList(Yb, ub, bb._opaqueBindings, 0, bb._opaqueBindings.length);
        if (Sb += this.drawList(Yb, ub, bb._directBindings, 0, bb._directBindings.length), Sb += this.drawList(Yb, ub, Ob, 0, Gb >= 0 ? Gb : Ob.length), Yb.end(), Gb < 0) return Sb;
        fU(bb);
        const ab = bb._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Hb,
            stencilLoadOp: wb
          } = ab,
          Zb = Ub.loadOp;
        Ub.resolveTarget = Lb;
        try {
          this.copyDepth(Bb, bb), Ub.loadOp = "load", ab.depthLoadOp = "load", wb && (ab.stencilLoadOp = "load"), Yb = Bb.beginRenderPass(bb._renderPassDescriptor), Yb.setBindGroup(0, bb._sceneBG), Sb += this.drawList(Yb, ub, Ob, Gb, Ob.length), Yb.end()
        } finally {
          Ub.loadOp = Zb, ab.depthLoadOp = Hb, ab.stencilLoadOp = wb
        }
        return Sb
      }
      splitIndex(bb) {
        for (let ub = 0; ub < bb.length; ub++)
          if (bb[ub].renderable === this.splitBefore) return ub;
        return -1
      }
      drawList(bb, ub, hb, Bb, Ob) {
        let Gb = null,
          Ub = 0;
        for (let Lb = Bb; Lb < Ob; Lb++) {
          const Bb = hb[Lb],
            Ob = Bb.renderable.mesh;
          Ob && !1 === Ob.visible || (Bb.pipeline !== Gb && (bb.setPipeline(Bb.pipeline), Gb = Bb.pipeline), Ub += Bb.draw(bb, ub))
        }
        return Ub
      }
      copyDepth(bb, ub) {
        var hb, Bb;
        const Ob = (null !== (hb = ub._config.depth) && void 0 !== hb ? hb : ub._config.rt)._depthTexture,
          Gb = (null === (Bb = this.copy) || void 0 === Bb ? void 0 : Bb.source) === Ob ? this.copy : this.remakeCopy(Ob),
          Ub = bb.beginRenderPass(Gb.pass);
        Ub.setPipeline(this.pipeline), Ub.setBindGroup(0, Gb.bindGroup), Ub.draw(3), Ub.end()
      }
      remakeCopy(bb) {
        var ub, hb;
        this.retired = null !== (ub = null === (hb = this.copy) || void 0 === hb ? void 0 : hb.texture) && void 0 !== ub ? ub : null;
        const Bb = this.device.createTexture({
            label: "scene-depth",
            size: [bb.width, bb.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Ob = Bb.createView(),
          Gb = this.device.createBindGroup({
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
          Ub = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Ob,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: bb,
          texture: Bb,
          view: Ob,
          bindGroup: Gb,
          pass: Ub
        }, this.copy
      }
    }
    const dL = "rgba8unorm";

    function rL(bb) {
      return bb ? 15 : 1
    }
    class jL {
      constructor(bb, ub, hb, Bb) {
        this.device = bb, this.terrain = Bb, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = ub._targetSignature._sampleCount > 1, this.cameraBuffer = bb.createBuffer({
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
        const Ob = bb.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = bb.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Ob,
          entries: []
        });
        const Gb = bb.createShaderModule({
          label: "sun-shadow-mask",
          code: (Ub = this.edge, `${(0,Du.D)()}${Mh({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Ub?Dh:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${rL(Ub)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Ub?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Ub;
        bb.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: bb.createPipelineLayout({
            bindGroupLayouts: [this.layout, Ob, Ob, sG(bb, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Gb,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Gb,
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
        const Lb = ub._executeWithTransmission;
        ub._executeWithTransmission = bb => this.execute(ub, hb, (() => Lb ? Lb(bb) : function(bb, ub) {
          const hb = bu(ub).beginRenderPass(bb._renderPassDescriptor);
          hb.setBindGroup(0, bb._sceneBG);
          let Bb = nL(hb, ub, bb._opaqueBindings);
          return Bb += nL(hb, ub, bb._directBindings), Bb += nL(hb, ub, bb._transparentBindings), hb.end(), Bb
        }(ub, hb)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var bb, ub;
        return null !== (bb = null === (ub = this.targets) || void 0 === ub ? void 0 : ub.maskView) && void 0 !== bb ? bb : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(bb) {
        ! function(bb, ub) {
          const hb = bb.worldMatrix,
            Bb = bb.projectionMatrix,
            Ob = 1 / Bb[0],
            Gb = 1 / Bb[5],
            Ub = bb.far * bb.near / (bb.far - bb.near);
          ub[0] = bb.eye[0], ub[1] = bb.eye[1], ub[2] = bb.eye[2], ub[3] = 2 ** -23 / Ub, ub[4] = hb[0] * Ob, ub[5] = hb[1] * Ob, ub[6] = hb[2] * Ob, ub[7] = Ub, ub[8] = hb[4] * Gb, ub[9] = hb[5] * Gb, ub[10] = hb[6] * Gb, ub[11] = bb.near / (bb.far - bb.near), ub[12] = hb[8], ub[13] = hb[9], ub[14] = hb[10], ub[15] = 0
        }(bb, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(bb, ub, hb) {
        if (this.retire(), !this.terrain.readsMask) return hb();
        const Bb = this.targetsFor(bb),
          Ob = bu(ub),
          Gb = bb._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Bb.prepass.depthStencilAttachment.view = Gb.view);
        const Ub = this.terrain.drawPrepass(Ob, Bb.prepass, bb._sceneBG);
        if (0 === Ub) return hb();
        if (this.trace(Ob, Bb), this.edge) return Ub + 1 + hb();
        const {
          depthLoadOp: Lb,
          stencilLoadOp: Yb
        } = Gb;
        Gb.depthLoadOp = "load", Yb && (Gb.stencilLoadOp = "load");
        try {
          return Ub + 1 + hb()
        } finally {
          Gb.depthLoadOp = Lb, Gb.stencilLoadOp = Yb
        }
      }
      trace(bb, ub) {
        const hb = this.terrain.sunShadowGroup(),
          Bb = bb.beginRenderPass(ub.trace);
        this.pipeline && hb && (Bb.setPipeline(this.pipeline), Bb.setBindGroup(0, ub.bindGroup), Bb.setBindGroup(1, this.empty), Bb.setBindGroup(2, this.empty), Bb.setBindGroup(3, hb), Bb.draw(3)), Bb.end()
      }
      retire() {
        const bb = this.retired;
        var ub;
        bb && (bb.mask.destroy(), bb.normals.destroy(), null === (ub = bb.depth) || void 0 === ub || ub.destroy(), this.retired = null)
      }
      targetsFor(bb) {
        var ub, hb;
        const Bb = (null !== (ub = bb._config.depth) && void 0 !== ub ? ub : bb._config.rt)._depthTexture;
        return (null === (hb = this.targets) || void 0 === hb ? void 0 : hb.source) === Bb ? this.targets : this.remake(bb, Bb)
      }
      remake(bb, ub) {
        var hb;
        this.retired = this.targets;
        const Bb = [ub.width, ub.height],
          Ob = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Bb,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Gb = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Bb,
            format: dL,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Ub = null !== (hb = bb._targetSignature._depthStencilFormat) && void 0 !== hb ? hb : ub.format,
          Lb = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Bb,
            format: Ub,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Yb = bb._renderPassDescriptor.depthStencilAttachment,
          Sb = Ub.includes("stencil"),
          ab = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Gb.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: Lb ? Lb.createView() : Yb.view,
              depthClearValue: Yb.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Sb ? {
                stencilClearValue: Yb.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Hb = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== Lb && void 0 !== Lb ? Lb : ub).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Gb.createView()
            }]
          }),
          wb = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Ob.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [rL(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: ub,
          mask: Ob,
          maskView: Ob.createView(),
          normals: Gb,
          depth: Lb,
          bindGroup: Hb,
          prepass: ab,
          trace: wb
        }, this.targets
      }
    }

    function nL(bb, ub, hb) {
      let Bb = null,
        Ob = 0;
      for (const Gb of hb) {
        const hb = Gb.renderable.mesh;
        hb && !1 === hb.visible || (Gb.pipeline !== Bb && (bb.setPipeline(Gb.pipeline), Bb = Gb.pipeline), Ob += Gb.draw(bb, ub))
      }
      return Ob
    }
    const DL = 6e4,
      xL = {
        status: "ok"
      },
      zL = {
        status: "skipped"
      };
    async function gL(bb, ub) {
      const {
        isCancelled: hb
      } = bb;
      if (hb()) return {
        status: "Lu"
      };
      const {
        target: Bb
      } = ub;
      if (!Bb) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Ob = [],
        Gb = Promise.all(Array.from(new Set(bb.materials), (async hb => {
          Ob.push(await async function(bb, ub, hb, Bb) {
            const Ob = {
              lighting: bb.lighting,
              dirLightCount: Math.min(bb.dirLightCount, 4),
              vZ: bb.runtime
            };
            try {
              const Gb = ub.material(Bb);
              return Gb && SB(ub.programKey(Gb, !1, Ob)) ? (await Gb.ready, bb.isCancelled() ? xL : Gb.bindGroupLayout ? await async function(bb, ub, hb, Bb) {
                const {
                  device: Ob
                } = bb;
                let Gb, Ub;
                Ob.pushErrorScope("validation");
                try {
                  Gb = bb.pipelineBuild(ub, hb, Bb)
                } finally {
                  Ub = Ob.popErrorScope().catch((() => null))
                }
                const [Lb, Yb] = await Promise.all([Ub, Gb.built.then((() => null), (bb => null !== bb && void 0 !== bb ? bb : new Error("pipeline failed")))]);
                if (!Lb && !Yb) return xL;
                const Sb = await iL(Gb.module),
                  ab = Sb.length > 0 ? Sb.map((bb => `${Gb.name} ${bb.lineNum}:${bb.linePos}: ${bb.message}`)).join("\n") : `${Gb.name}: ${vL(null!==Yb&&void 0!==Yb?Yb:Lb)}`;
                return {
                  status: "failed",
                  material: ub.model.name,
                  message: ab
                }
              }(ub, Gb, ub.programKey(Gb, "none" !== Gb.texture, Ob), hb): (console.warn(`Shader pack: skipped the compile check for "${Bb.name}", whose textures failed to load`), zL)) : xL
            } catch (Gb) {
              return {
                status: "failed",
                material: Bb.name,
                message: vL(Gb)
              }
            }
          }(bb, ub, Bb, hb))
        }))),
        Ub = function(bb, ub) {
          let hb, Bb, Ob = !1;
          const Gb = new Promise((Gb => {
            var Ub;
            hb = setTimeout((() => {
              Gb("timeout")
            }), null !== (Ub = ub.timeoutMs) && void 0 !== Ub ? Ub : DL), Bb = setInterval((() => {
              ub.isCancelled() && Gb("Lu")
            }), 50), bb.lost.then((() => {
              Ob = !0, Gb("lost")
            }))
          }));
          return {
            signal: Gb,
            lost: () => Ob,
            dispose: () => {
              clearTimeout(hb), clearInterval(Bb)
            }
          }
        }(ub.device, bb);
      let Lb;
      try {
        Lb = await Promise.race([Gb.then((() => "done")), Ub.signal])
      } finally {
        Ub.dispose()
      }
      if ("Lu" === Lb || hb()) return {
        status: "Lu"
      };
      const Yb = Ob.find((bb => "failed" === bb.status));
      return Yb && "lost" !== Lb && !Ub.lost() && await new Promise((bb => {
        setTimeout(bb, 0)
      })), "lost" === Lb || Ub.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Yb ? {
        status: "failed",
        failure: {
          material: Yb.material,
          message: Yb.message
        }
      } : "timeout" === Lb ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Sb=bb.timeoutMs)&&void 0!==Sb?Sb:DL)/1e3} s`), {
        status: "skipped"
      }) : Ob.some((bb => "skipped" === bb.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Sb
    }
    async function iL(bb) {
      if (!bb) return [];
      try {
        return (await bb.getCompilationInfo()).messages.filter((bb => "error" === bb.type))
      } catch {
        return []
      }
    }

    function vL(bb) {
      var ub;
      return null !== (ub = null === bb || void 0 === bb ? void 0 : bb.message) && void 0 !== ub ? ub : String(bb)
    }

    function tL(bb, ub, hb, Bb) {
      SB(bb) ? iL(hb).then((bb => {
        const [hb] = bb;
        FO("terrain", ub, Bb, hb ? `${hb.lineNum}:${hb.linePos} error: ${hb.message}` : null)
      })) : FO("terrain", ub, Bb)
    }
    var JL = hb(37189),
      eL = hb(37197),
      NL = hb(37204),
      sL = hb(2667);

    function ML(bb, ub, hb, Bb, Ob) {
      const Gb = Math.hypot(hb[0], hb[1], hb[2]);
      if (!(Gb > 0)) return;
      const Ub = [hb[0] / Gb, hb[1] / Gb, hb[2] / Gb],
        Lb = [Math.floor(ub[0]), Math.floor(ub[1]), Math.floor(ub[2])],
        Yb = [0, 0, 0],
        Sb = [1 / 0, 1 / 0, 1 / 0],
        ab = [1 / 0, 1 / 0, 1 / 0];
      for (let Zb = 0; Zb < 3; Zb++) Ub[Zb] > 0 ? (Yb[Zb] = 1, Sb[Zb] = (Lb[Zb] + 1 - ub[Zb]) / Ub[Zb], ab[Zb] = 1 / Ub[Zb]) : Ub[Zb] < 0 && (Yb[Zb] = -1, Sb[Zb] = (Lb[Zb] - ub[Zb]) / Ub[Zb], ab[Zb] = -1 / Ub[Zb]);
      const {
        bX: Hb
      } = bb;
      let wb = bb.Qy(Lb[0], Lb[1], Lb[2]);
      for (;;) {
        const ub = Sb[0] < Sb[1] ? Sb[0] < Sb[2] ? 0 : 2 : Sb[1] < Sb[2] ? 1 : 2;
        if (Sb[ub] > Bb) return;
        const hb = Yb[ub] > 0 ? Lb[ub] + 1 : Lb[ub];
        Lb[ub] += Yb[ub], Sb[ub] += ab[ub];
        const Gb = bb.Qy(Lb[0], Lb[1], Lb[2]),
          Ub = Gb !== wb && !(bb.opaque[wb] && bb.opaque[Gb]);
        if (Ub) {
          const Bb = [Lb[0], Lb[1], Lb[2]];
          Bb[ub] = hb;
          const Gb = Math.floor(Bb[0] / Hb),
            Ub = Math.floor(Bb[1] / Hb),
            Yb = Math.floor(Bb[2] / Hb);
          !bb.isDrawn(Gb, Ub, Yb) && bb.hasParts(Gb, Ub, Yb) && Ob.add(`${Gb},${Ub},${Yb}`)
        }
        if (Ub && bb.occluders[Gb]) return;
        wb = Gb
      }
    }

    function mL(bb, ub) {
      return bb.group - ub.group || bb.nearest - ub.nearest
    }
    class IL {
      constructor(bb, ub) {
        this.device = bb, this.lK = ub, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
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
        const ub = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.next++;
        if (8 * ub >= this.data.length) {
          const bb = new Float32Array(2 * this.data.length);
          bb.set(this.data), this.data = bb, this.words = new Uint32Array(bb.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.lK()
        }
        return ub
      }
      release(bb) {
        this.free.push(bb)
      }
      set(bb, ub, hb, Bb, Ob) {
        const Gb = 8 * bb + KB;
        this.data[Gb] = ub, this.data[Gb + 1] = hb, this.data[Gb + 2] = Bb, this.setVisibility(bb, Ob)
      }
      setVisibility(bb, ub) {
        this.data[8 * bb + WB] = ub, this.markDirty(bb, bb)
      }
      setFaces(bb, ub, hb) {
        const Bb = 8 * bb;
        this.words[Bb + CB] = ub, this.words[Bb + dB] = hb, this.markDirty(bb, bb)
      }
      markDirty(bb, ub) {
        this.dirtyMin = Math.min(this.dirtyMin, bb), this.dirtyMax = Math.max(this.dirtyMax, ub)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const PL = lB,
      qL = !0;
    const EL = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: PL.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      yL = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class VL {
      constructor(bb) {
        this.device = bb, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(HB), this.dirLightUniforms = this.frameUniforms.subarray(aB.dirLights, aB.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Su.d)(), this.faceGroups = !0, this.visibilityGraph = qL, this.visCull = qL, this.visCheck = !1, this.visCullMinDistance = NL.d, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new TL, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.vZ = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new WL(bb, ((bb, ub) => this.recordsGroup(bb, ub))), this.slots = new IL(bb, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = uu(bb), this.frameLayout = bb.createBindGroupLayout({
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
          bind: (bb, ub) => this.createBinding(this.opaqueRenderable, ub, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (bb, ub) => this.createBinding(this.transparentRenderable, ub, !0)
        }
      }
      installSceneDepth(bb, ub) {
        this.sceneDepth = new CL(this.device, this.transparentRenderable, bb, ub)
      }
      createFrameBindGroup() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== ub && void 0 !== ub ? ub : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(bb, ub) {
        const hb = null !== ub && void 0 !== ub ? ub : bb;
        let Bb = this.recordsGroups.get(hb);
        return Bb || (Bb = this.createFrameBindGroup(bb, ub), this.recordsGroups.set(hb, Bb)), Bb
      }
      setChunkMesh(bb, ub, hb) {
        var Bb;
        let Ob = this.chunks.get(bb);
        Ob ? this.geometry.release(Ob) : (Ob = {
          mesh: bb,
          slot: this.slots.allocate(),
          origin: [hb[0], hb[1], hb[2]],
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
        }, this.chunks.set(bb, Ob), this.writeSlot(Ob)), Ob.material = bb.material ? this.materialFor(bb.material) : null, Ob.packed = !!ub.packedVertices, Ob.vertexCount = (0, HL.g)(ub), Ob.faceCount = Ob.vertexCount / 4;
        const Gb = null !== (Bb = ub.faceGroups) && void 0 !== Bb ? Bb : null;
        if (Ob.faceGroups = Gb, Gb) {
          const bb = JL.l;
          Ob.planePX = Gb[bb], Ob.planeNX = Gb[bb + 1], Ob.planePY = Gb[bb + 2], Ob.planeNY = Gb[bb + 3], Ob.planePZ = Gb[bb + 4], Ob.planeNZ = Gb[bb + 5]
        }
        this.drawWhole(Ob), 0 !== Ob.faceCount && (this.geometry.set(Ob, ub) ? (Ob.packed && this.slots.setFaces(Ob.slot, Ob.vertices.start + Ob.faceCount, Ob.faceCount), ub.IZ && this.setChunkMeshLight(bb, ub.IZ)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Ob.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(bb, ub) {
        const hb = this.chunks.get(bb);
        hb && this.geometry.setLight(hb, ub)
      }
      drawStats() {
        let bb = this.transparent.length;
        for (const ub of this.opaqueBatches) bb += ub.meshes.length;
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
        const ub = this.chunks.get(bb);
        ub && (this.geometry.release(ub), this.slots.release(ub.slot), this.chunks.delete(bb))
      }
      remeshLost(bb, ub) {
        this.geometry.release(ub), ub.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** ub.lostRemeshes++);
        const hb = bb.eH,
          [Bb, Ob, Gb] = hb.SOb(ub.origin[0], ub.origin[1], ub.origin[2]),
          Ub = hb.FX.fX(Bb, Ob, Gb);
        Ub && (Ub.yX = !0, Ub.QX = !0, hb.VX(Ub, !1))
      }
      chooseFaceRanges(bb, ub, hb) {
        const Bb = this.faceRanges;
        bb.faceMask = hb, bb.rangeCount = (0, eL.m)(ub, hb, Bb), bb.first0 = Bb[0], bb.count0 = Bb[1], bb.first1 = Bb[2], bb.count1 = Bb[3]
      }
      drawWhole(bb) {
        bb.faceMask = -1, bb.faceEpoch = -1, bb.rangeCount = 1, bb.first0 = 0, bb.count0 = bb.faceCount
      }
      writeSlot(bb) {
        const [ub, hb, Bb] = this.originOffset;
        this.slots.set(bb.slot, bb.origin[0] - ub, bb.origin[1] - hb, bb.origin[2] - Bb, bb.visibility)
      }
      materialFor(bb) {
        const ub = this.materials.get(bb);
        if (ub) return ub;
        const hb = ZL(bb);
        if (!hb) return this.warnOnce(`material:${bb.name}`, `Lite terrain cannot draw material "${bb.name}"; its chunks are skipped.`), null;
        const {
          model: Bb,
          atlas: Ob,
          texture: Gb,
          animated: Ub,
          uniformData: Lb
        } = hb, Yb = {
          id: this.materials.size,
          model: Bb,
          texture: Gb,
          animated: Ub,
          uniformData: Lb,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${bb.name}`,
            size: Lb.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: hb.liquid,
          customRenderMat: hb.customRenderMat,
          atlasCount: 0,
          w6: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(bb, Yb), this.device.queue.writeBuffer(Yb.uniformBuffer, 0, Lb), Yb.ready = this.createMaterialBindGroup(Yb, Ob).catch((ub => {
          console.error(`Lite terrain failed to load the textures of material "${bb.name}"`, ub)
        })), Yb
      }
      materialLayout(bb) {
        const ub = function(bb) {
            const ub = ["uniforms"];
            if ("atlas" === bb.texture) {
              bb.animated && ub.push("animData"), ub.push("sampler");
              for (let hb = 0; hb < bb.atlasCount; hb++) ub.push("textureArray")
            } else "single" === bb.texture && ub.push("sampler", "texture");
            return ub
          }(bb),
          hb = ub.join(",");
        let Bb = this.materialLayouts.get(hb);
        if (!Bb) {
          const bb = GPUShaderStage.FRAGMENT;
          Bb = this.device.createBindGroupLayout({
            label: `terrain-material-${hb}`,
            entries: ub.map(((ub, hb) => {
              switch (ub) {
                case "uniforms":
                  return {
                    binding: hb, visibility: GPUShaderStage.VERTEX | bb, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: hb, visibility: GPUShaderStage.VERTEX | bb, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: hb, visibility: bb, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: hb, visibility: bb, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: hb, visibility: bb, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(hb, Bb)
        }
        return Bb
      }
      async createMaterialBindGroup(bb, ub) {
        const hb = [{
          buffer: bb.uniformBuffer
        }];
        if (ub) {
          const {
            urls: Bb,
            pixels: Ob,
            layerWidth: Gb
          } = ub.sources, Ub = await Promise.all(Bb.map(((bb, ub) => {
            var hb;
            return mO(this.device, bb, null !== (hb = null === Ob || void 0 === Ob ? void 0 : Ob[ub]) && void 0 !== hb ? hb : null, Gb)
          })));
          bb.atlasCount = Ub.length, bb.w6 = Ub[0].layerWidth, bb.atlasLayers = Ub[0].layers, ub.animDataPerTex && hb.push({
            buffer: iO(this.device, Float32Array.from(ub.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), hb.push(this.sampler);
          for (const bb of Ub) hb.push(bb.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === bb.texture) {
          const {
            url: ub
          } = bb.model.diffuseTexture.source, {
            pixels: Bb,
            width: Ob,
            height: Gb
          } = await sO(ub);
          hb.push(this.sampler), hb.push(tO(this.device, Bb, Ob, Gb, 1, `terrain-${ub}`).createView({
            dimension: "2d"
          }))
        }
        const Bb = this.materialLayout(this.programKey(bb, !1));
        bb.bindGroupLayout = Bb, bb.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${bb.model.name}`,
          layout: Bb,
          entries: hb.map(((bb, ub) => ({
            binding: ub,
            resource: bb
          })))
        })
      }
      programKey(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Bb = hb ? hb.lighting : this.lighting,
          Ob = hb ? hb.vZ : this.vZ,
          Gb = {
            texture: bb.texture,
            atlasCount: bb.atlasCount,
            w6: bb.w6,
            atlasLayers: bb.atlasLayers,
            animated: bb.animated,
            alphaTest: bb.model.transparencyMode === nb.p.alphaTest,
            lighting: Bb,
            dirLightCount: hb ? hb.dirLightCount : this.dirLightCount,
            packed: ub
          };
        if (!Ob) return Gb;
        const Ub = this.shaderPackFields(bb, Ob),
          Lb = "atlas" === bb.texture && bb.model.transparencyMode === nb.p.opaque && GB(Ub.packVariant);
        return {
          ...Gb,
          ...Ub,
          alphaTest: Gb.alphaTest || Lb
        }
      }
      shaderPackFields(bb, ub) {
        return bb.customRenderMat ? BB : function(bb, ub) {
          if (!bb) return BB;
          const hb = bb.defineFor(ub ? "liquid" : "terrain");
          return 0 === hb ? BB : {
            packVariant: hb,
            liquid: ub
          }
        }(ub, bb.liquid)
      }
      isBlended(bb) {
        return bb.model.transparencyMode === nb.p.alphaBlend
      }
      shaderModule(bb, ub) {
        let hb = this.modules.get(bb);
        return hb || (hb = this.device.createShaderModule({
          label: ub,
          code: bb
        }), this.modules.set(bb, hb)), hb
      }
      pipelineFor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!bb.bindGroupLayout) return null;
        const Ob = this.programKey(bb, ub);
        if (!Bb) return this.pipelineOf(bb, Ob, hb);
        const Gb = {
            ...Ob,
            resting: Bb
          },
          Ub = this.pipelineId(bb, Gb, hb),
          Lb = this.pipelines.get(Ub);
        if (Lb) return Lb;
        const Yb = this.pipelineOf(bb, Ob, hb);
        return Yb && void 0 === Lb && this.startPipeline(Ub, bb, Gb, hb), Yb
      }
      pipelineOf(bb, ub, hb) {
        const Bb = this.pipelineId(bb, ub, hb),
          Ob = this.pipelines.get(Bb);
        return void 0 !== Ob ? Ob : (this.startPipeline(Bb, bb, ub, hb), null)
      }
      pipelineId(bb, ub, hb) {
        return FL(ub, this.isBlended(bb), bb.model.backFaceCulling, hb)
      }
      pipelineBuild(bb, ub, hb) {
        var Bb;
        const Ob = this.pipelineId(bb, ub, hb);
        return null !== (Bb = this.builds.get(Ob)) && void 0 !== Bb ? Bb : this.startPipeline(Ob, bb, ub, hb)
      }
      startPipeline(bb, ub, hb, Bb) {
        var Ob;
        this.pipelines.set(bb, null);
        const Gb = zB(hb),
          Ub = this.isBlended(ub),
          Lb = this.shadowMask && Bb._depthStencilFormat ? function(bb, ub, hb, Bb) {
            if (void 0 === bb.packVariant || bb.liquid || ub) return "none";
            const Ob = (0, xu.g)(bb.packVariant);
            return null === Ob || void 0 === Ob || !Ob.sunShadow || !Nh(Ob, hb) || Ob.discards || bb.alphaTest && GB(bb.packVariant) ? "none" : Bb ? "edge" : "plain"
          }(hb, Ub, !!this.sunShadow, Bb._sampleCount > 1) : "none";
        let Yb;
        try {
          Yb = gB(hb, !!this.sunShadow, Lb)
        } catch (ob) {
          if (!SB(hb)) throw ob;
          return this.failedPackBuild(bb, hb, Gb, ob)
        }
        const Sb = this.shaderModule(Yb, Gb),
          ab = [];
        hb.packed || (ab.push(function(bb, ub) {
          const hb = [{
            shaderLocation: PL.position,
            offset: ju.g.Ih,
            format: "float32x3"
          }, {
            shaderLocation: PL.normal,
            offset: ju.g.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: PL.color,
            offset: ju.g.colorOffset,
            format: "unorm8x4"
          }];
          return bb && hb.push({
            shaderLocation: PL.uv,
            offset: ju.g.uvOffset,
            format: "float32x2"
          }), ub && hb.push({
            shaderLocation: PL.blockFlagWords,
            offset: ju.g.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: ju.g.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: hb
          }
        }("none" !== hb.texture, SB(hb))), hb.lighting && ab.push(EL));
        const Hb = ub.model.backFaceCulling,
          wb = {
            label: Gb,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, ub.bindGroupLayout, ...IG(this.device, hb, !!this.sunShadow, "none" !== Lb)]
            }),
            vertex: {
              module: Sb,
              entryPoint: "mainVertex",
              buffers: ab
            },
            fragment: cb({
              module: Sb,
              entryPoint: "mainFragment"
            }, Bb, Ub ? yL : null),
            depthStencil: Bb._depthStencilFormat ? {
              format: Bb._depthStencilFormat,
              depthCompare: null !== (Ob = Bb._depthCompare) && void 0 !== Ob ? Ob : hu,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Bb._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Hb ? "back" : "none"
            }
          },
          Zb = hb.resting ? 0 : 1;
        this.compiling += Zb;
        const Xb = "none" === Lb ? this.device.createRenderPipelineAsync(wb) : this.startMaskPipelines(Sb, wb, "edge" === Lb);
        Xb.then((ub => {
          this.compiling -= Zb, this.pipelines.set(bb, ub)
        }), (bb => {
          this.compiling -= Zb, console.error(`Lite terrain pipeline ${Gb} failed`, bb), tL(hb, Gb, Sb, bb)
        }));
        const pb = {
          name: Gb,
          module: Sb,
          built: Xb
        };
        return this.builds.set(bb, pb), pb
      }
      startMaskPipelines(bb, ub, hb) {
        const Bb = ub.depthStencil,
          Ob = this.device.createRenderPipelineAsync(hb ? ub : {
            ...ub,
            depthStencil: {
              ...Bb,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Gb = this.device.createRenderPipelineAsync({
            ...ub,
            label: `${ub.label}-prepass`,
            fragment: {
              module: bb,
              entryPoint: "prepassFragment",
              targets: [{
                format: dL
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Ob, Gb]).then((bb => {
          let [ub, hb] = bb;
          return this.prepassOf.set(ub, hb), this.maskPipelines++, ub
        }))
      }
      failedPackBuild(bb, ub, hb, Bb) {
        console.error(`Lite terrain pipeline ${hb} failed`, Bb), tL(ub, hb, null, Bb);
        const Ob = Promise.reject(Bb);
        Ob.catch((() => {}));
        const Gb = {
          name: hb,
          module: null,
          built: Ob
        };
        return this.builds.set(bb, Gb), Gb
      }
      checkShaderPack(bb) {
        return gL(bb, {
          device: this.device,
          target: this.target,
          material: bb => this.materialFor(bb),
          programKey: (bb, ub, hb) => this.programKey(bb, ub, hb),
          pipelineBuild: (bb, ub, hb) => this.pipelineBuild(bb, ub, hb)
        })
      }
      createBinding(bb, ub, hb) {
        return this.target = ub, {
          renderable: bb,
          pipeline: Uu(this.device, ub),
          draw: bb => {
            this.geometry.setDrawing(!0);
            try {
              return hb ? this.drawTransparent(bb, ub) : this.drawOpaque(bb, ub)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(bb, ub) {
        var hb, Bb, Ob, Gb;
        const {
          PH: Ub
        } = bb;
        this.lighting = bb.Sp;
        const Lb = (0, aL.v)(ub);
        this.dirLightCount = Math.min(Lb, 4), this.vZ = null !== (hb = Ub.vZ) && void 0 !== hb ? hb : null, Lb > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(bb, ub), this.animateMaterials(ub.animTick);
        const Yb = Ub.Ow,
          Sb = Yb[0] !== this.originOffset[0] || Yb[1] !== this.originOffset[1] || Yb[2] !== this.originOffset[2];
        Sb && (this.originOffset[0] = Yb[0], this.originOffset[1] = Yb[1], this.originOffset[2] = Yb[2]);
        const ab = ub.eye;
        this.eye[0] = ab[0], this.eye[1] = ab[1], this.eye[2] = ab[2], this.writeShaderPackInputs();
        const Hb = ub.projectionMatrix,
          wb = 0 === Hb[15];
        let Zb = 0;
        (Sb || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: Xb
        } = this;
        Lu(this.transparentRenderable._worldCenter, ub, Ou), this.resetBatches(wb), this.transparent.length = 0, this.unlit.length = 0;
        const pb = Ub.eH.Abb,
          ob = pb / 2 * Math.sqrt(3);
        let Ab = 0;
        const lb = !!this.vZ && OB(this.vZ.defineFor("liquid"));
        let Kb = !1;
        const Wb = null !== (Bb = null === (Ob = Ub.zW) || void 0 === Ob ? void 0 : Ob.visibility) && void 0 !== Bb ? Bb : null,
          Cb = this.visCull && wb && 0 === this.compiling && null !== Wb && Ub.eH.CBb[0] >= this.visCullMinDistance ? this.target : null,
          db = this.visPassable,
          rb = this.visCandidates,
          jb = this.visCandidateBatches;
        db.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let nb = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Db = 0;
        const xb = (bb, hb) => {
          if (!hb) return this.transparent.push(bb), void(Db += 2 * bb.faceCount);
          if (null !== bb.faceGroups && hb.faceCull) {
            if (0 === Zb && (Zb = (0, eL.b)(Hb, ub.renderWidth, ub.renderHeight), Zb !== this.faceFocalPx && (this.faceFocalPx = Zb, Xb = ++this.faceEpoch)), bb.faceEpoch !== Xb) {
              bb.faceEpoch = Xb;
              const ub = Math.sqrt(bb.distance) + ob,
                hb = (0, eL.h)(bb.planePX, bb.planeNX, bb.planePY, bb.planeNY, bb.planePZ, bb.planeNZ, this.eye[0] - (bb.origin[0] - this.originOffset[0]), this.eye[1] - (bb.origin[1] - this.originOffset[1]), this.eye[2] - (bb.origin[2] - this.originOffset[2]), (0, eL.e)(ub, Zb));
              hb !== bb.faceMask && this.chooseFaceRanges(bb, bb.faceGroups, hb)
            }
            if (0 === bb.rangeCount) return
          } else - 1 !== bb.faceMask && this.drawWhole(bb);
          hb.meshes.push(bb), Db += 2 * ((bb.rangeCount > 0 ? bb.count0 : 0) + (bb.rangeCount > 1 ? bb.count1 : 0))
        };
        for (const gb of this.chunks.values()) {
          Sb && this.writeSlot(gb);
          const bb = gb.mesh.visibility;
          bb !== gb.visibility && (gb.visibility = bb, this.slots.setVisibility(gb.slot, bb));
          const {
            material: hb
          } = gb;
          this.geometry.lost(gb) && performance.now() >= gb.lostRetryAt && this.remeshLost(Ub, gb);
          const Bb = !(null === hb || void 0 === hb || !hb.bindGroup) && this.geometry.backed(gb),
            Ob = Bb && this.lighting && !gb.vertices.page.twin;
          if (Cb && (Number.isNaN(gb.key) && (gb.ci = Math.floor(gb.origin[0] / pb), gb.cj = Math.floor(gb.origin[1] / pb), gb.ck = Math.floor(gb.origin[2] / pb), gb.key = (0, sL.g)(gb.ci, gb.cj, gb.ck)), (!Bb || bb < 1 || Ob || !this.batchDraws(hb, gb.packed, Cb)) && this.visSeeThrough(gb, Cb) && db.add(gb.key)), !Bb) continue;
          Ob || (gb.lostRemeshes = 0);
          const Gb = gb.origin[0] - this.originOffset[0],
            Lb = gb.origin[1] - this.originOffset[1],
            Yb = gb.origin[2] - this.originOffset[2];
          if (!(0, QU.c)(ub.frustum, Gb, Lb, Yb, pb)) continue;
          const ab = Gb + pb / 2 - this.eye[0],
            Hb = Lb + pb / 2 - this.eye[1],
            Zb = Yb + pb / 2 - this.eye[2];
          if (gb.distance = ab * ab + Hb * Hb + Zb * Zb, this.lighting && !gb.lit && (Ab = Math.max(Ab, gb.vertexCount), this.unlit.push(gb)), Ob) continue;
          const Xb = this.isBlended(hb) ? null : this.batchFor(hb, gb.packed, gb.vertices.page, 1 === bb, wb);
          Cb ? (rb[nb] = gb, jb[nb++] = Xb) : xb(gb, Xb)
        }
        const zb = Cb ? this.sweepVisibility(bb, ub, Wb) : null;
        null === (Gb = (0, zG.w)(Ub)) || void 0 === Gb || Gb.update(ub.frustum, this.originOffset, pb, zb);
        for (let gb = 0; gb < nb; gb++) {
          const bb = rb[gb];
          !zb || zb.isDrawn(bb.ci, bb.cj, bb.ck) ? xb(bb, jb[gb]) : (this.visCulledParts++, this.visCulledTriangles += 2 * bb.faceCount)
        }
        for (const gb of this.transparent) Kb ||= lb && gb.material.liquid && !gb.material.customRenderMat;
        this.submittedTriangles = Db, zb && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(bb, ub, zb)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Kb) : Kb && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && Ab > 0 && this.geometry.lightFullSky(this.unlit, Ab);
        for (const gb of this.opaqueBatches) this.chunkSorter.sort(gb.meshes, 1) || gb.meshes.sort(fL);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(kL)
      }
      sweepVisibility(bb, ub, hb) {
        const {
          eH: Bb
        } = bb.PH, Ob = Bb.Abb, Gb = this.visPassable, Ub = this.eye[0] + this.originOffset[0], Lb = this.eye[1] + this.originOffset[1], Yb = this.eye[2] + this.originOffset[2];
        if (!hb.eyeClear(Ub, Lb, Yb, ub.near, ub.projectionMatrix, Bb)) return null;
        const [Sb, ab] = Bb.CBb, Hb = hb.update(Ub, Lb, Yb, Ob, Sb, ab, Gb);
        return this.visSweeps = hb.sweeps, Hb ? hb : null
      }
      visSeeThrough(bb, ub) {
        const {
          material: hb
        } = bb;
        return (!hb || !this.isBlended(hb)) && (bb.mesh.visibility < 1 || !(null !== hb && void 0 !== hb && hb.bindGroup) || bb.faceCount > 0 && (!this.geometry.backed(bb) || this.lighting && !bb.vertices.page.twin) || !this.batchDraws(hb, bb.packed, ub))
      }
      batchDraws(bb, ub, hb) {
        var Bb;
        const Ob = ub ? 2 : 0;
        if (bb === this.visDrawsMaterial && function(bb, ub) {
            return 0 !== (bb & 1 << ub)
          }(this.visDrawsBits, Ob)) return 0 !== (this.visDrawsBits & 2 << Ob);
        let Gb = null !== (Bb = this.visBatchDraws.get(bb)) && void 0 !== Bb ? Bb : 0;
        if (!(Gb & 1 << Ob)) {
          Gb |= 1 << Ob | (!!bb.bindGroupLayout && this.canDraw(bb, ub) && !!this.pipelines.get(this.pipelineId(bb, this.programKey(bb, ub), hb)) ? 2 << Ob : 0), this.visBatchDraws.set(bb, Gb)
        }
        return this.visDrawsMaterial = bb, this.visDrawsBits = Gb, 0 !== (Gb & 2 << Ob)
      }
      runVisCheck(bb, ub, hb) {
        const {
          PH: Bb
        } = bb, {
          eH: Ob
        } = Bb, Gb = Ob.Abb, Ub = new Set;
        for (const Zb of this.chunks.values()) Ub.add(Zb.key);
        const Lb = KO.Matrix.FromArray(ub.viewProjectionMatrix).invert(),
          [Yb, Sb, ab] = this.originOffset,
          Hb = new KO.YX,
          wb = function(bb, ub, hb, Bb) {
            const Ob = new Set;
            for (let Gb = 0; Gb < 27; Gb++)
              for (let Ub = 0; Ub < 48; Ub++) {
                const Lb = hb((Ub + .5) / 48 * 2 - 1, (Gb + .5) / 27 * 2 - 1);
                ML(bb, ub, [Lb[0] - ub[0], Lb[1] - ub[1], Lb[2] - ub[2]], Bb, Ob)
              }
            return Ob
          }({
            Qy: (bb, ub, hb) => Ob.Qy(bb, ub, hb),
            occluders: hb.occluders,
            opaque: hb.opaque,
            bX: Gb,
            isDrawn: (bb, ub, Bb) => hb.isDrawn(bb, ub, Bb),
            hasParts: (bb, ub, hb) => Ub.has((0, sL.g)(bb, ub, hb))
          }, [this.eye[0] + Yb, this.eye[1] + Sb, this.eye[2] + ab], ((bb, ub) => (KO.YX.TransformCoordinatesFromFloatsToRef(bb, ub, .5, Lb, Hb), [Hb.x + Yb, Hb.y + Sb, Hb.z + ab])), (Ob.CBb[0] + 1) * Gb);
        this.visViolations = wb.size;
        for (const Zb of wb) this.warnOnce(`vis:${Zb}`, `Lite terrain cave culling skipped chunk ${Zb}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var bb;
        null !== (bb = this.vZ) && void 0 !== bb && bb.isRunning() && (this.shaderPackInputs ??= new PG(this.device, this.vZ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.vZ, this.eye, this.lighting))
      }
      bindShaderPackInputs(bb, ub, hb) {
        var Bb, Ob, Gb, Ub;
        let Lb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: Yb
        } = this.shaderPackFields(ub, hb);
        if (void 0 === Yb) return;
        this.shaderPackInputs || (this.shaderPackInputs = new PG(this.device, hb.textureLayers(), this.sunShadow), this.shaderPackInputs.write(hb, this.eye, this.lighting));
        const Sb = OB(Yb) ? null !== (Bb = null === (Ob = this.sceneDepth) || void 0 === Ob ? void 0 : Ob.view) && void 0 !== Bb ? Bb : this.standIn() : null,
          ab = Lb ? null !== (Gb = null === (Ub = this.shadowMask) || void 0 === Ub ? void 0 : Ub.view) && void 0 !== Gb ? Gb : this.standIn() : null;
        this.shaderPackInputs.bind(bb, Sb, mG(Yb, !!this.sunShadow), ab)
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
        var bb, ub;
        return null !== (bb = null === (ub = this.shaderPackInputs) || void 0 === ub ? void 0 : ub.bindGroupFor(null, !0)) && void 0 !== bb ? bb : null
      }
      resetBatches(bb) {
        const ub = this.opaqueBatches;
        let hb = 0;
        for (const Bb of ub) Bb.meshes.length > 0 && (Bb.meshes.length = 0, Bb.faceCull = this.batchFaceCull(Bb.material, bb), ub[hb++] = Bb);
        ub.length = hb
      }
      orderBatches() {
        const bb = this.opaqueBatches;
        for (let ub = 0; ub < bb.length; ub++) {
          const hb = bb[ub];
          hb.group = ub;
          for (let Bb = 0; Bb < ub; Bb++) {
            const ub = bb[Bb];
            if (ub.material === hb.material && ub.packed === hb.packed) {
              hb.group = ub.group;
              break
            }
          }
          hb.nearest = hb.meshes.length > 0 ? hb.meshes[0].distance : 1 / 0
        }
        bb.sort(mL)
      }
      batchFor(bb, ub, hb, Bb, Ob) {
        for (const Ub of this.opaqueBatches)
          if (Ub.material === bb && Ub.packed === ub && Ub.page === hb && Ub.resting === Bb) return Ub;
        const Gb = {
          material: bb,
          packed: ub,
          page: hb,
          resting: Bb,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(bb, Ob)
        };
        return this.opaqueBatches.push(Gb), Gb
      }
      batchFaceCull(bb, ub) {
        return !(!ub || !(0, JL.p)(bb.model)) && (!this.vZ || ! function(bb) {
          var ub;
          return !(null === (ub = (0, xu.g)(bb)) || void 0 === ub || !ub.movesVertices)
        }(this.shaderPackFields(bb, this.vZ).packVariant))
      }
      writeFrameUniforms(bb, ub) {
        const hb = this.frameUniforms,
          Bb = aB;
        if ((0, aL.w)(bb, hb), hb[Bb.fogInfos] = ub.fogEnabled ? ub.fogMode : 0, hb[Bb.fogInfos + 1] = ub.fogStart, hb[Bb.fogInfos + 2] = ub.fogEnd, hb[Bb.fogInfos + 3] = ub.fogDensity, hb.set(ub.fogColour, Bb.fogColour), hb[Bb.outputHeight] = ub.renderHeight, hb.set(ub.ambientColour, Bb.sceneAmbient), (0, aL.t)(ub, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const ub = (0, HL.h)(bb.gX, bb.BX, bb.OX);
          for (let bb = 0; bb < 4; bb++) hb[Bb.aoLevels + bb] = ub[bb] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, hb)
      }
      animateMaterials(bb) {
        const ub = wB.anim;
        for (const hb of this.materials.values()) hb.animated && (hb.uniformData[ub] = bb, this.device.queue.writeBuffer(hb.uniformBuffer, 4 * ub, hb.uniformData, ub, 1))
      }
      canDraw(bb, ub) {
        return !("atlas" === bb.texture && !ub) || (this.warnOnce(`stride:${bb.id}`, `Lite terrain: material "${bb.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(bb, ub) {
        let hb = 0;
        bb.setBindGroup(1, this.frameBindGroup);
        for (const Bb of this.opaqueBatches) {
          if (!Bb.meshes.length || !this.canDraw(Bb.material, Bb.packed)) continue;
          const Ob = this.pipelineFor(Bb.material, Bb.packed, ub, Bb.resting);
          Ob && (bb.setPipeline(Ob), bb.setBindGroup(2, Bb.material.bindGroup), this.vZ && this.bindShaderPackInputs(bb, Bb.material, this.vZ, this.prepassOf.has(Ob)), hb += this.drawBatch(bb, Bb))
        }
        return hb
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(bb, ub, hb) {
        const Bb = this.target,
          Ob = this.vZ;
        if (!Bb || !Ob || 0 === this.maskPipelines) return 0;
        let Gb = 0,
          Ub = null;
        this.geometry.setDrawing(!0);
        try {
          for (const Lb of this.opaqueBatches) {
            if (!Lb.meshes.length || !this.canDraw(Lb.material, Lb.packed)) continue;
            const Yb = this.pipelineFor(Lb.material, Lb.packed, Bb, Lb.resting),
              Sb = Yb && this.prepassOf.get(Yb);
            Sb && (Ub || (Ub = bb.beginRenderPass(ub), Ub.setBindGroup(0, hb), Ub.setBindGroup(1, this.frameBindGroup)), Ub.setPipeline(Sb), Ub.setBindGroup(2, Lb.material.bindGroup), this.bindShaderPackInputs(Ub, Lb.material, Ob, !0), Gb += this.drawBatch(Ub, Lb))
          }
        } finally {
          var Lb;
          null === (Lb = Ub) || void 0 === Lb || Lb.end(), this.geometry.setDrawing(!1)
        }
        return Gb
      }
      drawBatch(bb, ub) {
        let hb = 0;
        for (const Bb of ub.meshes) {
          const {
            rangeCount: ub
          } = Bb;
          ub > 0 && (hb += this.geometry.draw(bb, Bb, this.lighting, Bb.first0, Bb.count0), ub > 1 && (hb += this.geometry.draw(bb, Bb, this.lighting, Bb.first1, Bb.count1)))
        }
        return hb
      }
      drawTransparent(bb, ub) {
        let hb = 0,
          Bb = null,
          Ob = null;
        bb.setBindGroup(1, this.frameBindGroup);
        for (const Gb of this.transparent) {
          const Ub = Gb.material;
          if (!this.canDraw(Ub, Gb.packed)) continue;
          const Lb = this.pipelineFor(Ub, Gb.packed, ub);
          Lb && (Lb !== Bb && (bb.setPipeline(Lb), Bb = Lb, this.vZ && this.bindShaderPackInputs(bb, Ub, this.vZ)), Ub !== Ob && (bb.setBindGroup(2, Ub.bindGroup), Ob = Ub), hb += this.geometry.draw(bb, Gb, this.lighting))
        }
        return hb
      }
    }

    function FL(bb, ub, hb, Bb) {
      return `${zB(bb)}|${bb.atlasLayers}|${bb.w6}|${ub}|${hb}|${Bb._colorFormat}|${Bb._depthStencilFormat}|${Bb._sampleCount}`
    }

    function fL(bb, ub) {
      return bb.distance - ub.distance
    }

    function kL(bb, ub) {
      return ub.distance - bb.distance
    }
    class TL {
      constructor() {
        this.left = []
      }
      sort(bb, ub) {
        for (let hb = 0; hb < bb.length; hb++) {
          const ub = bb[hb].distance;
          if (ub - ub !== 0) return !1
        }
        return this.sortRange(bb, 0, bb.length, ub), !0
      }
      sortRange(bb, ub, hb, Bb) {
        if (hb - ub <= 16) {
          for (let Ob = ub + 1; Ob < hb; Ob++) {
            const hb = bb[Ob],
              Gb = Bb * hb.distance;
            let Ub = Ob - 1;
            for (; Ub >= ub && Bb * bb[Ub].distance > Gb; Ub--) bb[Ub + 1] = bb[Ub];
            bb[Ub + 1] = hb
          }
          return
        }
        const Ob = ub + hb >>> 1;
        if (this.sortRange(bb, ub, Ob, Bb), this.sortRange(bb, Ob, hb, Bb), Bb * bb[Ob - 1].distance <= Bb * bb[Ob].distance) return;
        const {
          left: Gb
        } = this, Ub = Ob - ub;
        for (let ab = 0; ab < Ub; ab++) Gb[ab] = bb[ub + ab];
        let Lb = 0,
          Yb = Ob,
          Sb = ub;
        for (; Lb < Ub && Yb < hb;) bb[Sb++] = Bb * bb[Yb].distance < Bb * Gb[Lb].distance ? bb[Yb++] : Gb[Lb++];
        for (; Lb < Ub;) bb[Sb++] = Gb[Lb++]
      }
    }
    const cL = Math.ceil(102);

    function QL(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ub;
      const Gb = Math.min(ub, hb),
        Ub = new Uint32Array(bh(Bb));
      for (let Lb = 0; Lb < Bb; Lb++) {
        const ub = Math.floor(Lb * Gb / Bb),
          hb = Math.max(ub + 1, Math.floor((Lb + 1) * Gb / Bb));
        for (let Yb = 0; Yb < Bb; Yb++) {
          const Sb = Math.floor(Yb * Gb / Bb),
            ab = Math.max(Sb + 1, Math.floor((Yb + 1) * Gb / Bb));
          let Hb = 0;
          for (let Bb = ub; Bb < hb; Bb++)
            for (let ub = Sb; ub < ab; ub++) bb[Bb * Ob + ub] >= cL && Hb++;
          if (2 * Hb >= (hb - ub) * (ab - Sb)) {
            const bb = Yb + Bb * Lb;
            Ub[bb >>> 5] |= 1 << (31 & bb)
          }
        }
      }
      return Ub
    }

    function RL(bb) {
      return Math.max(1, Math.min(16, bb))
    }
    class bY {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = bb, this.loadTexture = ub, this.warn = hb, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(bb, ub) {
        return (bb.zq !== this.builtVersion || this.blockCaster.length !== ub) && (this.build(bb, ub), !0)
      }
      build(bb, ub) {
        this.builtVersion = bb.zq;
        const hb = new Uint16Array(ub),
          Bb = new Map;
        for (let Ob = 1; Ob < ub; Ob++) {
          const ub = this.classify(bb, Ob, Bb);
          if (null === ub || ub === ku) {
            hb[Ob] = null === ub ? 0 : ku;
            continue
          }
          let Gb = this.byKey.get(ub.key);
          void 0 === Gb && (Gb = this.allocate(ub), this.byKey.set(ub.key, Gb)), hb[Ob] = Gb
        }
        this.blockCaster = hb, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(bb, ub) {
        const hb = bb.B5[ub];
        if ("function" !== typeof hb) return hb;
        try {
          return hb()
        } catch (Bb) {
          return this.warnOnce(`Sun shadows: no caster option for block ${ub}: ${Bb instanceof Error?Bb.message:String(Bb)}`), null
        }
      }
      classify(bb, ub, hb) {
        const Bb = this.option(bb, ub);
        if ("none" === Bb) return null;
        if (Bb && Bb.planes.length > 0) {
          const bb = Bb.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(bb)}`,
            planes: bb
          }
        }
        if (bb.Iw[ub]) return null;
        const Ob = bb.qw[ub] ? bb.Mq(ub) : null;
        if (Ob && Ob.length >= 6) {
          const bb = function(bb) {
            const ub = new Uint32Array(16);
            for (let hb = 0; hb + 6 <= bb.length; hb += 6) {
              const Bb = [0, 1, 2].map((ub => Math.max(0, Math.ceil(8 * bb[hb + ub] - .5)))),
                Ob = [0, 1, 2].map((ub => Math.min(7, Math.floor(8 * bb[hb + ub + 3] - .5))));
              for (let bb = Bb[2]; bb <= Ob[2]; bb++)
                for (let hb = Bb[1]; hb <= Ob[1]; hb++)
                  for (let Gb = Bb[0]; Gb <= Ob[0]; Gb++) {
                    const Bb = Gb + 8 * (hb + 8 * bb);
                    ub[Bb >>> 5] |= 1 << (31 & Bb)
                  }
            }
            return ub
          }(Ob);
          return function(bb) {
            return bb.every((bb => 4294967295 === bb))
          }(bb) ? ku : bb.every((bb => 0 === bb)) ? null : {
            kind: "shape",
            key: `shape:${bb.join(",")}`,
            mask: bb
          }
        }
        if (bb.Hr[ub] || !bb.iX[ub]) return null;
        const Gb = [0, 1, 2, 3, 4, 5].map((Bb => {
          const Ob = bb.vX[6 * ub + Bb];
          let Gb = hb.get(Ob);
          return void 0 === Gb && (Gb = function(bb) {
            if (!bb || bb.qX) return null;
            const {
              Z2: ub,
              w6: hb,
              kR: Bb
            } = bb;
            if (!ub || !hb || !(hb > 0) || void 0 === Bb || !(Bb >= 0)) return null;
            const Ob = ub[0],
              Gb = hb * hb * 4;
            if (!Ob || Ob.byteLength < Gb) return null;
            const Ub = Math.floor(Ob.byteLength / Gb),
              Lb = ub[Math.floor(Bb / Ub)];
            if (!Lb) return null;
            const Yb = new Uint8Array(Lb.buffer, Lb.byteOffset, Lb.byteLength),
              Sb = Bb % Ub * Gb;
            if (Sb + Gb > Yb.length) return null;
            const ab = new Uint8Array(hb * hb);
            let Hb = !1;
            for (let wb = 0; wb < ab.length; wb++) ab[wb] = Yb[Sb + 4 * wb + 3], Hb ||= ab[wb] < cL;
            return Hb ? {
              alpha: ab,
              width: hb
            } : null
          }(bb.PX(Ob)), hb.set(Ob, Gb)), Gb
        }));
        if (Gb.every((bb => null === bb))) return ku;
        const Ub = RL(Math.max(...Gb.map((bb => {
            var ub;
            return null !== (ub = null === bb || void 0 === bb ? void 0 : bb.width) && void 0 !== ub ? ub : 1
          })))),
          Lb = new Uint32Array(bh(Ub)).fill(4294967295),
          Yb = Gb.map((bb => null === bb ? Lb : QL(bb.alpha, bb.width, bb.width, Ub)));
        return {
          kind: "cutout",
          key: `cutout:${Ub}:${Yb.map((bb=>bb.join(","))).join("|")}`,
          size: Ub,
          faces: Yb
        }
      }
      allocate(bb) {
        if (this.nextCaster >= uh) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const ub = this.nextCaster++;
        if (this.writeCaster(ub, Tu, 0, 0, 0), "shape" === bb.kind) {
          const hb = this.allocateMask(bb.mask.length);
          hb >= 0 && (this.sink(hb, bb.mask), this.writeCaster(ub, cu, hb, 0, 8))
        } else if ("cutout" === bb.kind) {
          const hb = bh(bb.size),
            Bb = this.allocateMask(6 * hb);
          if (Bb >= 0) {
            const Ob = new Uint32Array(6 * hb);
            bb.faces.forEach(((bb, ub) => {
              Ob.set(bb, ub * hb)
            })), this.sink(Bb, Ob), this.writeCaster(ub, Ru, Bb, 0, bb.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(ub, bb.planes).finally((() => {
          this.planesLoading--
        })));
        return ub
      }
      async loadPlanes(bb, ub) {
        const hb = await Promise.all(ub.map((bb => this.texture(bb.texture))));
        if (hb.some((bb => null === bb))) return;
        const Bb = hb,
          Ob = RL(Math.max(...Bb.map((bb => Math.min(bb.width, bb.height))))),
          Gb = bh(Ob),
          Ub = this.allocateMask(ub.length * (4 + Gb));
        if (Ub < 0) return;
        const Lb = new Uint32Array(ub.length * (4 + Gb)),
          Yb = 4 * ub.length;
        ub.forEach(((bb, ub) => {
          const hb = Ub + Yb + ub * Gb;
          Lb.set(function(bb, ub) {
            const [hb, Bb] = bb.tangent, Ob = Math.hypot(hb, Bb) || 1, Gb = hb / Ob, Ub = Bb / Ob, Lb = bb.centre[0] * Ub - bb.centre[1] * Gb, Yb = new Uint32Array(4);
            return new Float32Array(Yb.buffer, 0, 3).set([Gb, Ub, Lb]), Yb[3] = ub, Yb
          }(bb, hb), 4 * ub), Lb.set(QL(Bb[ub].alpha, Bb[ub].width, Bb[ub].height, Ob), Yb + ub * Gb)
        })), this.sink(Ub, Lb), this.writeCaster(bb, Qu, Ub, ub.length, Ob)
      }
      texture(bb) {
        let ub = this.textures.get(bb);
        return ub || (ub = this.loadTexture(bb).catch((ub => (this.warn(`Sun shadows: no mask for ${bb}: ${ub instanceof Error?ub.message:String(ub)}`), null))), this.textures.set(bb, ub)), ub
      }
      allocateMask(bb) {
        if (this.nextMaskWord + bb > hh) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const ub = 32768 + this.nextMaskWord;
        return this.nextMaskWord += bb, ub
      }
      writeCaster(bb, ub, hb, Bb, Ob) {
        this.sink(0 + 4 * bb, Uint32Array.of(ub, hb, Bb, Ob))
      }
      warnOnce(bb) {
        this.warned.has(bb) || (this.warned.add(bb), this.warn(bb))
      }
    }
    var uY = hb(2647);

    function hY(bb) {
      return !bb.yX && !bb.JC && !bb.KX
    }

    function BY() {
      return {
        bricks: new Uint32Array(Iu),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Mu)
      }
    }
    class OY {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = bb, this.writeVoxels = ub, this.writePool = hb, this.warn = Bb, this.eyeChunk = null, this.slotChunk = new Array(vu).fill(null), this.slotVersion = new Float64Array(vu).fill(-1), this.slotPool = new Array(vu).fill(null), this.starved = new Uint8Array(vu), this.queue = [], this.queued = new Uint8Array(vu), this.queueSorted = !0, this.freePool = new Uint32Array(Bh), this.freeCount = Bh, this.casterTable = null, this.warnedPool = !1, this.scratch = BY(), this.victimScratch = BY(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * vu), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Ob = 0; Ob < Bh; Ob++) this.freePool[Ob] = 65535 - Ob
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Bh - this.freeCount
      }
      chunkAdded(bb) {
        if (null === this.eyeChunk || !this.inRadius(bb.i, bb.j, bb.k)) return;
        const ub = Vu(bb.i, bb.j, bb.k);
        this.slotChunk[ub] = bb, this.slotVersion[ub] = -1, this.enqueue(ub)
      }
      update(bb, ub, hb) {
        const Bb = this.casters.blockCaster;
        if (Bb !== this.casterTable) {
          this.casterTable = Bb;
          for (let bb = 0; bb < vu; bb++) this.slotVersion[bb] = -1, this.slotChunk[bb] && this.enqueue(bb)
        }
        const Ob = Math.floor(bb[0] / 32),
          Gb = Math.floor(bb[1] / 32),
          Ub = Math.floor(bb[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Ob || this.eyeChunk[1] !== Gb || this.eyeChunk[2] !== Ub) && (this.eyeChunk = [Ob, Gb, Ub], this.follow(ub), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let Lb = 0; Lb < vu; Lb++) {
          const bb = this.slotChunk[Lb];
          bb && (bb.tC || bb.dX !== this.slotVersion[Lb]) && this.enqueue(Lb)
        }
        this.drain(hb), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(bb, ub) {
        this.records.set(ub, 4 * bb), this.windowTopStale = !0, this.writeVoxels(4 * bb, ub)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const bb = this.records;
        let ub = -1 / 0;
        for (let Bb = 0; Bb < bb.length; Bb += 4) {
          const hb = 255 & bb[Bb + 3];
          hb !== eu && hb !== Nu || !this.inRadius(bb[Bb], bb[Bb + 1], bb[Bb + 2]) || (ub = Math.max(ub, bb[Bb + 1] * zu + (bb[Bb + 3] >>> 8)))
        }
        const hb = ub === -1 / 0 ? 1 : ub + qu;
        hb !== this.windowTop[0] && (this.windowTop[0] = hb, this.writeVoxels(Pu, this.windowTop))
      }
      follow(bb) {
        const ub = this.eyeChunk,
          [hb, Bb, Ob] = gu;
        for (let Ub = -Ob; Ub <= Ob; Ub++)
          for (let Ob = -Bb; Ob <= Bb; Ob++)
            for (let Bb = -hb; Bb <= hb; Bb++) {
              var Gb;
              const hb = ub[0] + Bb,
                Lb = ub[1] + Ob,
                Yb = ub[2] + Ub,
                Sb = Vu(hb, Lb, Yb),
                ab = this.slotChunk[Sb];
              if (ab && !ab.tC && ab.i === hb && ab.j === Lb && ab.k === Yb) continue;
              const Hb = null !== (Gb = bb(hb, Lb, Yb)) && void 0 !== Gb ? Gb : null;
              ab && (ab.i !== hb || ab.j !== Lb || ab.k !== Yb) && this.slotPool[Sb] && (this.release(Sb), this.record.fill(0), this.writeRecord(Sb, this.record)), this.slotChunk[Sb] = Hb, this.slotVersion[Sb] = -1, (Hb || ab) && this.enqueue(Sb)
            }
      }
      requeueStarved() {
        for (let bb = 0; bb < vu; bb++) this.starved[bb] && this.slotChunk[bb] && this.enqueue(bb)
      }
      enqueue(bb) {
        this.queued[bb] || (this.queued[bb] = 1, this.queue.push(bb), this.queueSorted = !1)
      }
      drain(bb) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const bb = new Map;
          for (const ub of this.queue) bb.set(ub, this.slotDistance(ub));
          this.queue.sort(((ub, hb) => bb.get(hb) - bb.get(ub))), this.queueSorted = !0
        }
        const ub = performance.now();
        let hb = 0;
        const Bb = [];
        for (; this.queue.length > 0 && (0 === hb || performance.now() - ub < bb);) {
          const bb = this.queue.pop(),
            ub = this.slotChunk[bb];
          !ub || ub.tC || hY(ub) ? (this.queued[bb] = 0, this.encodeSlot(bb), hb++) : Bb.push(bb)
        }
        for (let Ob = Bb.length - 1; Ob >= 0; Ob--) this.queue.push(Bb[Ob])
      }
      slotDistance(bb) {
        const ub = this.slotChunk[bb],
          hb = this.eyeChunk;
        return ub ? Math.max(Math.abs(ub.i - hb[0]), Math.abs(ub.j - hb[1]), Math.abs(ub.k - hb[2])) : 0
      }
      inRadius(bb, ub, hb) {
        const Bb = this.eyeChunk,
          [Ob, Gb, Ub] = gu;
        return Math.abs(bb - Bb[0]) <= Ob && Math.abs(ub - Bb[1]) <= Gb && Math.abs(hb - Bb[2]) <= Ub
      }
      release(bb) {
        const ub = this.slotPool[bb];
        if (ub) {
          for (let bb = ub.length - 1; bb >= 0; bb--) this.freePool[this.freeCount++] = ub[bb];
          this.slotPool[bb] = null
        }
      }
      encodeSlot(bb) {
        var ub, hb, Bb, Ob, Gb;
        let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          Lb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Yb = null !== (ub = null === (hb = this.slotPool[bb]) || void 0 === hb ? void 0 : hb.length) && void 0 !== ub ? ub : 0;
        this.release(bb), this.starved[bb] = 0;
        const Sb = this.slotChunk[bb],
          ab = this.record;
        if (!Sb || Sb.tC || !Sb.Sw) return this.slotChunk[bb] = null, this.slotVersion[bb] = -1, ab.fill(0), this.writeRecord(bb, ab), void(Yb > 0 && this.requeueStarved());
        this.slotVersion[bb] = Sb.dX;
        const Hb = this.encodeBricks(Sb, bb, Ub, Lb);
        ab[0] = Sb.i, ab[1] = Sb.j, ab[2] = Sb.k, ab[3] = Hb, this.writeRecord(bb, ab), null === (Bb = this.encoded) || void 0 === Bb || Bb.call(this, Sb), Lb && (null !== (Ob = null === (Gb = this.slotPool[bb]) || void 0 === Gb ? void 0 : Gb.length) && void 0 !== Ob ? Ob : 0) < Yb && this.requeueStarved()
      }
      encodeBricks(bb, ub, hb, Bb) {
        if (bb.qZ) return Ju;
        const Ob = this.casters.blockCaster,
          {
            data: Gb,
            stride: Ub,
            offset: Lb
          } = bb.Sw,
          [Yb, Sb, ab] = Ub,
          Hb = zu,
          {
            bricks: wb,
            cells: Zb,
            special: Xb
          } = hb;
        wb.fill(0), Xb.fill(0);
        let pb = 0,
          ob = 0,
          Ab = 0;
        for (let lb = 0; lb < Hb; lb++) {
          const ub = lb >> 2,
            hb = 3 & lb,
            Bb = bb.LZ[lb],
            Ub = Bb === uY.f ? -1 : Bb < Ob.length ? Ob[Bb] : 0;
          if (0 !== Ub)
            for (let bb = 0; bb < Hb; bb++) {
              const Bb = bb >> 2,
                Kb = 3 & bb;
              let Wb = Lb + bb * Yb + lb * Sb;
              for (let bb = 0; bb < Hb; bb++, Wb += ab) {
                let Lb = Ub;
                if (Lb < 0) {
                  const bb = Gb[Wb];
                  if (Lb = bb < Ob.length ? Ob[bb] : 0, 0 === Lb) continue
                }
                const Yb = Fu(Bb, ub, bb >> 2),
                  Sb = fu(Kb, hb, 3 & bb);
                wb[3 * Yb + (Sb >>> 5)] |= 1 << (31 & Sb), Zb[Yb * su + Sb] = Lb, pb++, Ab = lb, Lb === ku ? ob++ : Xb[Yb] = 1
              }
            }
        }
        return 0 === pb ? Ju : 32768 === ob ? eu | Ab << 8 : (this.writePoolEntries(ub, hb, Bb), this.writeVoxels(mu + ub * Iu, wb), Nu | Ab << 8)
      }
      writePoolEntries(bb, ub, hb) {
        const {
          bricks: Bb,
          cells: Ob,
          special: Gb
        } = ub, Ub = this.entry;
        let Lb = 0;
        for (let ab = 0; ab < Mu; ab++) Lb += Gb[ab];
        if (0 === Lb) return;
        hb && this.freeCount < Lb && this.evictBeyond(bb, Lb);
        const Yb = new Uint32Array(hb ? Math.min(Lb, this.freeCount) : 0);
        let Sb = 0;
        for (let ab = 0; ab < Mu; ab++) {
          if (!Gb[ab]) continue;
          const hb = 3 * ab;
          if (Sb === Yb.length) {
            this.dropSpecials(ub, ab), this.starved[bb] = 1;
            continue
          }
          const Lb = this.freePool[--this.freeCount];
          Yb[Sb++] = Lb;
          for (let bb = 0; bb < su; bb++) {
            const ub = Bb[hb + (bb >>> 5)] >>> (31 & bb) & 1 ? Ob[ab * su + bb] : 0;
            1 & bb ? Ub[bb >> 1] |= ub << 16 : Ub[bb >> 1] = ub
          }
          Bb[hb + 2] = Lb + 1, this.writePool(Oh + 32 * Lb, Ub)
        }
        Yb.length > 0 && (this.slotPool[bb] = Yb)
      }
      evictBeyond(bb, ub) {
        const hb = this.slotDistance(bb),
          Bb = [];
        for (let Ob = 0; Ob < vu; Ob++) Ob !== bb && this.slotPool[Ob] && this.slotDistance(Ob) > hb && Bb.push(Ob);
        Bb.sort(((bb, ub) => this.slotDistance(ub) - this.slotDistance(bb)));
        for (const Ob of Bb) {
          if (this.freeCount >= ub) return;
          const bb = this.slotChunk[Ob];
          bb && !bb.tC && bb.Sw && (bb.dX === this.slotVersion[Ob] || hY(bb)) && this.encodeSlot(Ob, this.victimScratch, !1)
        }
      }
      dropSpecials(bb, ub) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const hb = 3 * ub;
        for (let Bb = 0; Bb < su; Bb++) bb.cells[ub * su + Bb] !== ku && (bb.bricks[hb + (Bb >>> 5)] &= ~(1 << (31 & Bb)))
      }
    }
    var GY = hb(37110);
    class UY {
      constructor(bb) {
        this.device = bb, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new ph, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.eH = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = bb.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = bb.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(bb, ub, hb) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Bb
        } = this;
        Bb.kw(bb, ub), hb.forEachSunShadowCaster((bb => {
          this.add(bb)
        })), Bb.finish();
        const Ob = 0 === Bb.parts;
        if (Ob && this.uploadedEmpty) return;
        this.uploadedEmpty = Ob;
        const {
          queue: Gb
        } = this.device, {
          words: Ub
        } = Bb;
        Gb.writeBuffer(this.frameBuffer, 0, Ub, 0, 16385), Bb.refs > 0 && Gb.writeBuffer(this.frameBuffer, 65540, Ub, Yh, Bb.refs), Ob || Gb.writeBuffer(this.frameBuffer, 327684, Ub, Sh, Bb.parts * Lh)
      }
      add(bb) {
        const ub = this.gridFor(bb);
        if (!ub) return;
        const {
          frame: hb
        } = this, {
          eH: Bb,
          worldAt: Ob,
          instances: Gb,
          instanceCount: Ub,
          thin: Lb
        } = bb;
        if (Gb)
          for (let Yb = 0; Yb < Ub; Yb++) Lb ? (Ah(Gb, 16 * Yb, Bb, Ob, this.eH), hb.add(ub, this.eH)) : hb.add(ub, Gb, 16 * Yb);
        else hb.add(ub, Bb, Ob)
      }
      gridFor(bb) {
        let {
          geometry: ub,
          indexed: hb,
          first: Bb,
          count: Ob,
          skip: Gb
        } = bb, Ub = this.grids.get(ub);
        Ub || (Ub = new Map, this.grids.set(ub, Ub));
        const Lb = `${hb?Bb:-1-Bb}:${Ob}:${null!==Gb&&void 0!==Gb?Gb:""}`;
        let Yb = Ub.get(Lb);
        if (void 0 !== Yb || this.gridsFull) return Yb;
        const Sb = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Sb + 2;
        else if (Sb > this.bakeDeadline) return;
        return Yb = this.bake(ub, hb, Bb, Ob, Gb), void 0 !== Yb && Ub.set(Lb, Yb), Yb
      }
      bake(bb, ub, hb, Bb, Ob) {
        const Gb = bb.vertexAttributes.find((bb => "position" === bb.kind)),
          Ub = Gb ? function(bb, ub, hb, Bb) {
            let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Gb = bb => ub ? ub[hb + bb] : hb + bb,
              Ub = bb => null !== Ob && [0, 1, 2].some((ub => {
                const hb = Gb(bb + ub);
                return hb >= Ob[0] && hb < Ob[1]
              })),
              Lb = [1 / 0, 1 / 0, 1 / 0],
              Yb = [-1 / 0, -1 / 0, -1 / 0];
            for (let lb = 0; lb + 2 < Bb; lb += 3)
              if (!Ub(lb))
                for (let ub = 0; ub < 3; ub++) {
                  const hb = Gb(lb + ub);
                  for (let ub = 0; ub < 3; ub++) Lb[ub] = Math.min(Lb[ub], bb[3 * hb + ub]), Yb[ub] = Math.max(Yb[ub], bb[3 * hb + ub])
                }
            const Sb = Math.max(Yb[0] - Lb[0], Yb[1] - Lb[1], Yb[2] - Lb[2]);
            if (!(Sb > 0)) return null;
            const ab = Sb / 64,
              Hb = [0, 0, 0],
              wb = [0, 0, 0],
              Zb = [0, 0, 0];
            for (let lb = 0; lb < 3; lb++) Hb[lb] = Math.min(65, Math.ceil((Yb[lb] - Lb[lb]) / ab) + 1), wb[lb] = Lb[lb] - ab / 2, Zb[lb] = wb[lb] + Hb[lb] * ab;
            const Xb = new Uint32Array(Math.ceil(Hb[0] * Hb[1] * Hb[2] / 32)),
              pb = new Float64Array(9),
              ob = [0, 0, 0],
              Ab = [0, 0, 0];
            for (let lb = 0; lb + 2 < Bb; lb += 3)
              if (!Ub(lb)) {
                for (let ub = 0; ub < 3; ub++) {
                  const hb = Gb(lb + ub);
                  for (let Bb = 0; Bb < 3; Bb++) pb[3 * ub + Bb] = bb[3 * hb + Bb]
                }
                for (let bb = 0; bb < 3; bb++) {
                  const ub = Math.min(pb[bb], pb[3 + bb], pb[6 + bb]),
                    hb = Math.max(pb[bb], pb[3 + bb], pb[6 + bb]);
                  ob[bb] = Math.max(0, Math.floor((ub - wb[bb]) / ab - 1e-6)), Ab[bb] = Math.min(Hb[bb] - 1, Math.floor((hb - wb[bb]) / ab + 1e-6))
                }
                for (let bb = ob[2]; bb <= Ab[2]; bb++)
                  for (let ub = ob[1]; ub <= Ab[1]; ub++)
                    for (let hb = ob[0]; hb <= Ab[0]; hb++)
                      if (lh(pb, wb[0] + (hb + .5) * ab, wb[1] + (ub + .5) * ab, wb[2] + (bb + .5) * ab, ab / 2)) {
                        const Bb = hb + Hb[0] * (ub + Hb[1] * bb);
                        Xb[Bb >>> 5] |= 1 << (31 & Bb)
                      }
              } return {
              words: Xb,
              lo: wb,
              hi: Zb,
              cell: ab,
              dims: Hb
            }
          }((0, GY.j)(Gb, bb.vertexCount), ub ? bb.indexData : null, hb, Bb, Ob) : null;
        if (!Ub) return null;
        const {
          words: Lb,
          ...Yb
        } = Ub;
        if (this.gridTop + Lb.length > Hh) return void(this.gridsFull = !0);
        const Sb = this.gridTop;
        return this.gridTop += Lb.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Sb, Lb), {
          ...Yb,
          at: Sb
        }
      }
    }
    const LY = Math.cos(1 * Math.PI / 180);

    function YY(bb, ub) {
      return bb[0] * ub[0] + bb[1] * ub[1] + bb[2] * ub[2] < LY
    }
    async function SY(bb) {
      const {
        pixels: ub,
        width: hb,
        height: Bb
      } = await sO(bb), Ob = new Uint8Array(hb * Bb);
      for (let Gb = 0; Gb < Ob.length; Gb++) Ob[Gb] = ub[4 * Gb + 3];
      return {
        width: hb,
        height: Bb,
        alpha: Ob
      }
    }
    class aY {
      constructor(bb, ub) {
        this.device = bb, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Wh.i), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = bb.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = bb.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * Eu,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = bb.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [hb, Bb, Ob] = Wh.l;
        this.volume = bb.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: hb,
            height: Bb,
            depthOrArrayLayers: Ob
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
          size: Wh.i,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = ub ? new UY(bb) : null, this.entityStandIn = ub ? null : bb.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var bb, ub;
        const hb = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || hb.push("Lite sun shadow volume pipeline compiling");
        const Bb = null !== (bb = null === (ub = this.casters) || void 0 === ub ? void 0 : ub.planesLoading) && void 0 !== bb ? bb : 0;
        return Bb > 0 && hb.push(`${Bb} Lite sun shadow plane casters loading their textures`), hb
      }
      entries() {
        var bb, ub, hb, Bb;
        const Ob = Du.p;
        return [{
          binding: Ob.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Ob.Sw,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Ob.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Ob.volume,
          resource: this.volumeView
        }, {
          binding: Ob.sampler,
          resource: this.volumeSampler
        }, {
          binding: Ob.entities,
          resource: {
            buffer: null !== (bb = null === (ub = this.entities) || void 0 === ub ? void 0 : ub.frameBuffer) && void 0 !== bb ? bb : this.entityStandIn
          }
        }, {
          binding: Ob.entityGrids,
          resource: {
            buffer: null !== (hb = null === (Bb = this.entities) || void 0 === Bb ? void 0 : Bb.gridBuffer) && void 0 !== hb ? hb : this.entityStandIn
          }
        }]
      }
      prepare(bb, ub, hb) {
        var Bb;
        this.entitiesThisFrame = !1;
        const Ob = null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.sunShadowReach()) && void 0 !== Bb ? Bb : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!hb || !Ob.sunShadow && !Ob.airShadow) return void(this.volumeHolds = null);
        if (bb.eH.Abb !== zu) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${bb.eH.Abb}; everything is lit.`)));
        const Gb = this.start(bb);
        this.casters.update(bb.Mw, bb.Mw.qw.length);
        const Ub = bb.Ow;
        for (let wb = 0; wb < 3; wb++) this.eye[wb] = ub[wb] + Ub[wb];
        const Lb = (0, Wh.w)(this.eye);
        this.staleNear = Lb;
        const Yb = bb.eH.FX;
        Gb.update(this.eye, ((bb, ub, hb) => Yb.fX(bb, ub, hb)), 1);
        const Sb = (0, Wh.o)(hb.Q_()),
          ab = Gb.eyeChunk,
          Hb = this.uniformInts;
        for (let wb = 0; wb < 3; wb++) Hb[wb] = ab[wb], Hb[4 + wb] = Lb[wb];
        this.entitiesThisFrame = null !== this.entities && Ob.sunShadow, this.entitiesThisFrame && Xh(this.uniformFloats, 8, ub, Sb), null !== this.volumeHolds && (this.castersWritten || YY(Sb, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(Lb, Sb, ab)
      }
      markStale(bb) {
        const ub = this.staleNear,
          hb = zu,
          Bb = [bb.i * hb, bb.j * hb, bb.k * hb];
        for (let Gb = 0; Gb < 3; Gb++)
          if (Bb[Gb] + hb <= ub[Gb] - hb || Bb[Gb] >= ub[Gb] + Wh.l[Gb] + hb) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Ob = this.stale;
        for (let Gb = 0; Gb < Ob.length; Gb += 4)
          if (Ob[Gb] === bb.i && Ob[Gb + 1] === bb.j && Ob[Gb + 2] === bb.k) return void(Ob[Gb + 3] = this.swept);
        if (16 === Ob.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Ob.push(bb.i, bb.j, bb.k, this.swept)
      }
      writeStale() {
        const bb = this.swept,
          ub = this.stale;
        this.staleAll && bb - this.staleAllSwept >= Wh.g && (this.staleAll = !1, ub.length = 0);
        let hb = 0;
        for (let Ob = 0; Ob < ub.length; Ob += 4)
          if (bb - ub[Ob + 3] < Wh.g) {
            for (let bb = 0; bb < 4; bb++) ub[hb + bb] = ub[Ob + bb];
            hb += 4
          } ub.length = hb;
        const Bb = this.uniformInts;
        Bb[3] = this.staleAll ? 5 : hb / 4;
        for (let Ob = 0; Ob < 4; Ob++)
          for (let bb = 0; bb < 3; bb++) Bb[16 + 4 * Ob + bb] = 4 * Ob < hb ? ub[4 * Ob + bb] * zu : 0
      }
      writeUniform() {
        const bb = this.uniformInts;
        let ub = this.uniformWritten;
        if (ub) {
          let hb = !0;
          for (let Bb = 0; Bb < bb.length && hb; Bb++) hb = bb[Bb] === ub[Bb];
          if (hb) return
        }
        ub ??= this.uniformWritten = new Int32Array(bb.length), ub.set(bb), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(bb) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, bb)
      }
      computeVolume(bb, ub, hb) {
        const Bb = this.buildVolumePass();
        if (!Bb) return void(this.volumeHolds = null);
        const Ob = (0, Wh.s)(this.volumeHolds, bb);
        this.volumeHolds = bb;
        const Gb = 1 === Ob.length && Ob[0].size.every(((bb, ub) => bb === Wh.l[ub])),
          Ub = this.sweptChunk,
          Lb = this.sweptLight,
          Yb = ub[0] !== Lb[0] || ub[1] !== Lb[1] || ub[2] !== Lb[2],
          Sb = hb[0] !== Ub[0] || hb[1] !== Ub[1] || hb[2] !== Ub[2],
          ab = Yb && YY(ub, Lb);
        if ((Gb || this.written || Sb || ab) && (this.fastLeft = Wh.g), Gb || this.written || Yb || Sb) {
          this.written = !1;
          for (let bb = 0; bb < 3; bb++) Ub[bb] = hb[bb], Lb[bb] = ub[bb];
          this.sweepLeft = Gb ? 0 : Wh.g
        }
        if (Gb ? this.swept += Wh.g : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Ob.push(...(0, Wh.z)(bb, this.slice)), this.slice = (this.slice + 1) % Wh.g, this.swept++), 0 === Ob.length) return;
        const Hb = (0, Wh.D)(this.workData, ub, Ob);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const wb = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Zb = wb.beginComputePass({
            label: "sun-shadow-volume"
          });
        Zb.setPipeline(Bb.pipeline), Zb.setBindGroup(rh.group, Bb.bindGroup), Zb.dispatchWorkgroups(Math.ceil(Hb / Wh.h)), Zb.end(), this.device.queue.submit([wb.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const bb = rh,
          ub = GPUShaderStage.COMPUTE,
          hb = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: bb.uniform,
              visibility: ub,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: bb.Sw,
              visibility: ub,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: bb.special,
              visibility: ub,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: bb.work,
              visibility: ub,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: bb.volume,
              visibility: ub,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Bb = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: hb,
            entries: [{
              binding: bb.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: bb.Sw,
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
            bindGroupLayouts: [hb]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: jh()
            }),
            entryPoint: "main"
          }
        }).then((bb => {
          this.volumePass = {
            pipeline: bb,
            bindGroup: Bb
          }
        }), (bb => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(bb)}`)
        })), null
      }
      start(bb) {
        if (this.window) return this.window;
        const ub = (bb, ub) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * bb, ub)
        };
        this.casters = new bY(((bb, hb) => {
          this.castersWritten = !0, ub(bb, hb)
        }), SY);
        const hb = new OY(this.casters, ((bb, ub) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * bb, ub)
        }), ub);
        return hb.encoded = bb => {
          this.markStale(bb)
        }, bb.eH.on("chunkAdded", (bb => {
          hb.chunkAdded(bb)
        })), this.window = hb, hb
      }
    }
    var HY = hb(38321),
      wY = hb(38323);
    const ZY = 0,
      XY = 3,
      pY = 4,
      oY = 5;

    function AY(bb, ub, hb, Bb) {
      bb.drawOffset(ub, Bb + ZY), ub[Bb + XY] = bb.drawTime(), hb[Bb + pY] = bb.ring.drawStart(), hb[Bb + oY] = bb.ring.drawCount()
    }
    const lY = `\n${pB}\n\nconst MAX_STOPS = ${wY.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${wY.b/4}>,\n\tcolor1: array<vec4f, ${wY.b}>,\n\tcolor2: array<vec4f, ${wY.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${wY.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${wY.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var KY = hb(41072);
    class WY {
      constructor(bb, ub, hb, Bb) {
        this.device = bb, this.system = ub, this.frameIndex = hb, this.bindings = Bb, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, KY.d)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (bb, ub) => {
          this.device.queue.writeBuffer(this.ring, bb * wY.d * 4, this.system.ring.records, bb * wY.d, (ub - bb) * wY.d)
        };
        const {
          name: Ob
        } = ub;
        this.ring = bb.createBuffer({
          label: `particles-${Ob}`,
          size: ub.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = bb.createBuffer({
          label: `particles-uniforms-${Ob}`,
          size: 4 * wY.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(bb) {
        const ub = (0, KY.c)(this.system, this.uniformBits, bb);
        ub && (this.uniformBits = ub, this.device.queue.writeBuffer(this.uniforms, 0, ub))
      }
      bind() {
        const {
          system: bb
        } = this, ub = this.texture;
        (0, KY.j)(bb, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${bb.name}`,
          size: [wY.j, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * wY.j
        }, [wY.j, 1]));
        const hb = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === ub.view && this.boundSampler === ub.sampler && this.boundRamp === hb || (this.boundView = ub.view, this.boundSampler = ub.sampler, this.boundRamp = hb, this.bindGroup = this.device.createBindGroup({
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
            resource: ub.sampler
          }, {
            binding: 3,
            resource: ub.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: hb
          }]
        }))
      }
      destroy() {
        var bb;
        this.ring.destroy(), this.uniforms.destroy(), null === (bb = this.ramp) || void 0 === bb || bb.destroy()
      }
    }
    class CY {
      constructor(bb, ub) {
        this.device = bb, this.resources = ub, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Su.d)();
        const hb = bb.createBindGroupLayout({
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
          bindGroupLayouts: [uu(bb), hb, this.frameLayout]
        }), this.module = bb.createShaderModule({
          label: "particles",
          code: lY
        });
        const Bb = bb.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        bb.queue.writeTexture({
          texture: Bb
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: hb,
          rampSampler: bb.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Bb.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (ub, hb) => (this.bindTarget(hb), {
            renderable: this.renderable,
            pipeline: Uu(bb, hb),
            draw: bb => hb === this.preparedTarget ? this.draw(bb) : 0
          })
        }
      }
      get aOb() {
        return this.systems.size
      }
      reset() {
        for (const bb of this.systems.keys()) bb.reset()
      }
      describePendingWork() {
        return (0, HY.f)(this.systems.keys(), "Lite")
      }
      Hs(bb, ub) {
        const hb = new HY.c(bb, ub, this);
        return this.systems.set(hb, new WY(this.device, hb, this.allocateFrameIndex(), this.bindings)), hb
      }
      N_(bb, ub) {
        for (const hb of this.systems.keys()) hb.N_(bb, ub)
      }
      canDraw(bb) {
        const ub = this.systems.get(bb),
          hb = bb.texture ? this.resources.boundTexture(bb.texture) : null;
        if (!ub || !hb || !this.targetPipelines) return !1;
        if (ub.texture = hb, ub.pipelines.length = 0, !qO(bb.blendMode)) return this.warnOnce(`blend:${bb.blendMode}`, `particle blend mode ${bb.blendMode} is not drawn (${bb.name})`), !0;
        const Bb = (0, zO.i)(bb.blendMode);
        for (const Ob of Bb) {
          const bb = this.pipelineFor(Ob);
          if (!1 === bb) return ub.pipelines.length = 0, !0;
          bb && ub.pipelines.push(bb)
        }
        return ub.pipelines.length === Bb.length
      }
      disposeStopped(bb) {
        bb.dispose()
      }
      remove(bb) {
        const ub = this.systems.get(bb);
        ub && (this.systems.delete(bb), ub.destroy(), this.freeFrameIndices.push(ub.frameIndex))
      }
      prepare(bb) {
        const ub = bb.animationRatio || 1;
        Lu(this.renderable._worldCenter, bb, Bu), this.preparedTarget = this.target, this.draws.length = 0;
        let hb = 0;
        for (const Bb of this.systems.values()) {
          const bb = Bb.system;
          if (!bb.animateIfActive(ub)) continue;
          if (bb.ring.takeUploads(Bb.upload), !bb.hasLiveParticles() || 0 === Bb.pipelines.length) continue;
          Bb.writeUniforms(this.warnOnce), Bb.bind();
          const Ob = 64 * Bb.frameIndex;
          Bb.count = bb.ring.drawCount(), AY(bb, this.frameData, this.frameBits, Ob), hb = Math.max(hb, Ob + 64), this.draws.push(Bb)
        }
        hb > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, hb)
      }
      draw(bb) {
        let ub = 0,
          hb = null;
        for (const Bb of this.draws) {
          bb.setBindGroup(1, Bb.bindGroup), bb.setBindGroup(2, this.frameBindGroup, [256 * Bb.frameIndex]);
          for (const Ob of Bb.pipelines) Ob !== hb && (bb.setPipeline(Ob), hb = Ob), bb.draw(4, Bb.count), ub++
        }
        return ub
      }
      bindTarget(bb) {
        this.target = bb;
        const ub = `${bb._colorFormat}|${bb._depthStencilFormat}|${bb._depthCompare}|${bb._sampleCount}`;
        let hb = this.pipelines.get(ub);
        hb || (hb = new Map, this.pipelines.set(ub, hb)), this.targetPipelines = hb
      }
      pipelineFor(bb) {
        var ub;
        const hb = this.targetPipelines,
          Bb = hb.get(bb);
        if (void 0 !== Bb) return Bb;
        hb.set(bb, null);
        const Ob = this.target,
          Gb = bb === zO.c,
          Ub = null !== (ub = Ob._depthCompare) && void 0 !== ub ? ub : hu;
        return this.device.createRenderPipelineAsync({
          label: `particles-${bb}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: cb({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Gb ? 1 : 0
            }
          }, Ob, EO((0, zO.g)(bb))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Ob._depthStencilFormat ? {
            format: Ob._depthStencilFormat,
            depthCompare: Ub,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Ob._sampleCount
          }
        }).then((ub => {
          hb.set(bb, ub)
        }), (ub => {
          hb.set(bb, !1), console.error("Lite particle pipeline failed", ub), FO("particles", `blend-${bb}`, ub)
        })), null
      }
      allocateFrameIndex() {
        const bb = this.freeFrameIndices.pop();
        if (void 0 !== bb) return bb;
        const ub = this.nextFrameIndex++;
        if (64 * (ub + 1) > this.frameData.length) {
          const bb = new Float32Array(2 * this.frameData.length);
          bb.set(this.frameData), this.frameData = bb, this.frameBits = new Uint32Array(bb.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return ub
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
    class dY {
      constructor(bb, ub, hb, Bb, Ob) {
        this.lite = bb, this.canvas = ub, this.info = hb, this.resources = Ob, this.aBb = !1, this.needPOTTextures = !1, this.i5 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = ub.width, this.renderHeight = ub.height, this.caps = {
          maxTextureSize: Bb.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Bb.maxTextureArrayLayers
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
      setSize(bb, ub) {
        if (this.renderWidth === bb && this.renderHeight === ub) return !1;
        const hb = this.renderWidth,
          Bb = this.renderHeight;
        this.renderWidth = bb, this.renderHeight = ub;
        try {
          (0, Ib.k)(this.lite, bb, ub)
        } catch (Ob) {
          if (Ob instanceof DOMException && "InvalidStateError" === Ob.name) {
            this.renderWidth = hb, this.renderHeight = Bb;
            try {
              (0, Ib.k)(this.lite, hb, Bb)
            } catch {
              this.canvas.width = hb, this.canvas.height = Bb
            }
            return console.warn("WebGPU could not allocate render targets for resize", bb, ub, Ob.message), !1
          }
          throw Ob
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
      rW() {
        const bb = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : bb - this.lastFrameTime, this.lastFrameTime = bb
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(bb, ub) {
        const hb = document.createElement("canvas");
        return hb.width = bb, hb.height = ub, hb
      }
      y5(bb, ub) {
        var hb;
        return null !== (hb = this.resources.y5.get(bb)) && void 0 !== hb ? hb : new yb(this.resources, bb, ub)
      }
      atlasArray(bb, ub, hb) {
        return this.resources.atlasArray(bb, ub, hb)
      }
    }
    class rY {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(bb) {
        this.fov = bb.fov, this.nearPlane = bb.near, this.farPlane = bb.far;
        const ub = bb.worldMatrix;
        for (let hb = 0; hb < 16; hb++)
          if (this.worldMatrix[hb] !== ub[hb]) return this.worldMatrix.set(ub), void this.worldMatrixVersion++
      }
    }
    class jY {
      constructor(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
        let ab = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = bb, this.Xp = ub, this.sceneTask = hb, this.gpuDevice = Bb, this.terrain = Ob, this.meshes = Gb, this.particles = Ub, this.resources = Lb, this.sunShadow = ab, this.Fub = void 0, this.backendName = "WebGPU (Lite)", this.I9 = void 0, this.modelMeshes = void 0, this.camera = new rY, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new qb(Bb.lost), this.deviceLost = this.refusals.deviceLost, this.Fub = new dY(bb, Yb, Sb, Bb.limits, Lb), (0, xb.A)({
          MS: bb => {
            vb(bb) && Lb.textureSlot(bb)
          },
          loaded: bb => vb(bb) ? Lb.textureLoaded(bb) : null,
          canvasUpdated: (bb, ub, hb) => {
            vb(bb) && Lb.canvasUpdated(bb, ub, hb)
          }
        }), this.I9 = Gb.I9, this.modelMeshes = Gb.modelMeshes, ub.camera = this.camera
      }
      get castsEntitySunShadows() {
        var bb, ub;
        return null !== (bb = null === (ub = this.sunShadow) || void 0 === ub ? void 0 : ub.tracesEntities) && void 0 !== bb && bb
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(bb) {
        this.modelMeshes.attach(bb.model, bb.sceneMirror);
        const ub = bb.Xp;
        this.setClearColour(ub.clearColor.r, ub.clearColor.g, ub.clearColor.b), ub.draw = () => {
          this.drawFrame(bb, ub)
        }
      }
      render(bb) {
        try {
          this.Fub.rW(), bb.Xp.render()
        } catch (ub) {
          throw this.refusals.frameFailed(ub), ub
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var bb, ub, hb, Bb;
        const Ob = [...this.particles.describePendingWork(), ...null !== (bb = null === (ub = this.sunShadow) || void 0 === ub ? void 0 : ub.describePendingWork()) && void 0 !== bb ? bb : []],
          Gb = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (hb = this.terrain.sceneDepth) && void 0 !== hb && hb.compiling ? 1 : 0) + (null !== (Bb = this.terrain.shadowMask) && void 0 !== Bb && Bb.compiling ? 1 : 0);
        Gb > 0 && Ob.push(`${Gb} Lite pipelines compiling`);
        const Ub = this.terrain.buffersAwaitingVerdict;
        Ub > 0 && Ob.push(`${Ub} Lite terrain buffers awaiting their out-of-memory verdict`);
        const Lb = this.resources.texturesLoading;
        return Lb > 0 && Ob.push(`${Lb} Lite textures loading`), Ob
      }
      prepareTexture(bb) {
        return null !== this.resources.boundTexture(bb) || this.resources.textureFailed(bb)
      }
      drawFrame(bb, ub) {
        var hb, Bb, Ob, Gb, Ub, Lb;
        const Yb = SL(bb);
        this.camera.copyFromView(Yb), this.setClearColour(Yb.clearColour[0], Yb.clearColour[1], Yb.clearColour[2]), null === (hb = this.sunShadow) || void 0 === hb || hb.prepare(bb.PH, Yb.eye, null !== (Bb = bb.PH.vZ) && void 0 !== Bb ? Bb : null), this.terrain.prepare(bb, Yb), null === (Ob = this.terrain.sceneDepth) || void 0 === Ob || Ob.setPlanes(Yb.near, Yb.far), null === (Gb = this.terrain.shadowMask) || void 0 === Gb || Gb.prepare(Yb), fU(this.sceneTask), this.meshes.prepare(ub, Yb, bb.model.earthSky, null !== (Ub = bb.PH.vZ) && void 0 !== Ub ? Ub : null), this.particles.prepare(Yb);
        const Sb = performance.now();
        this.resources.flushUploads(), null === (Lb = this.sunShadow) || void 0 === Lb || Lb.traceEntities(this.meshes);
        try {
          (0, Ib.h)(this.engine, this.lastFrameTime > 0 ? Sb - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Sb
      }
      setClearColour(bb, ub, hb) {
        const Bb = this.Xp.clearColor;
        Bb.r = bb, Bb.g = ub, Bb.b = hb, Bb.a = 1
      }
    }
    const nY = "WebGPU device lost while Lite was starting";

    function DY(bb, ub) {
      return "object" === typeof bb && null !== bb ? Object.assign(bb, {
        startStep: ub
      }) : bb
    }
    async function xY(bb, ub) {
      const hb = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!hb) throw DY(new Error("No WebGPU adapter"), "no_adapter");
      const Bb = hb.info,
        Ob = {
          vendor: (null === Bb || void 0 === Bb ? void 0 : Bb.vendor) || "unknown vendor",
          renderer: (null === Bb || void 0 === Bb ? void 0 : Bb.architecture) || "unknown renderer",
          version: (null === Bb || void 0 === Bb ? void 0 : Bb.description) || "unknown version"
        },
        Gb = function(bb) {
          const ub = {};
          for (const hb in bb.limits) {
            const Bb = bb.limits[hb];
            "number" === typeof Bb && (ub[hb] = Bb)
          }
          return ub
        }(hb);
      let Ub;
      bb.style.background = "black";
      try {
        Ub = await (0, Ib.e)(bb, {
          msaaSamples: ub.nhb ? 4 : 1,
          requiredLimits: Gb,
          alphaMode: "premultiplied"
        })
      } catch (ab) {
        throw DY(ab, "#47" === (null === (Lb = ab) || void 0 === Lb ? void 0 : Lb.message) ? "no_adapter" : "device")
      }
      var Lb;
      const Yb = function(bb) {
        return bb._device
      }(Ub);
      let Sb = null;
      Yb.lost.then((bb => {
        Sb = bb, console.error(`WebGPU device lost (${bb.reason}): ${bb.message}`)
      }));
      try {
        const hb = await async function(bb, ub, hb, Bb, Ob, Gb) {
          const Ub = (0, Pb.b)(bb),
            Lb = new yU(bb, ub),
            Yb = new VL(ub),
            Sb = new DU(ub, Lb, (bb => function(bb, ub) {
              for (const Bb of Rb(bb)) {
                var hb;
                if (Bb._targetSignature === ub) return null !== (hb = Bb._sceneBG) && void 0 !== hb ? hb : null
              }
              return null
            }(Ub, bb))),
            ab = new CY(ub, Lb);
          for (const Zb of function(bb, ub, hb) {
              return [ub.opaqueRenderable, bb.opaqueRenderable, bb.skyLastRenderable, hb.renderable, ub.transparentRenderable, bb.transparentRenderable, bb.frontRenderable]
            }(Sb, Yb, ab)) Qb(Ub, Zb);
          const Hb = function(bb) {
            for (const ub of Rb(bb))
              if ("Xp" === ub.name) return ub;
            throw new Error("Lite: the scene has no render task named scene")
          }(Ub);
          Ob && Yb.installSceneDepth(Hb, bb);
          const wb = Gb ? new aY(ub, Gb.entities) : null;
          Yb.sunShadow = wb, wb && null !== Gb && void 0 !== Gb && Gb.entities && (Yb.shadowMask = new jL(ub, Hb, bb, Yb));
          return Sb.sunShadow = wb, await (0, Pb.d)(Ub), new jY(bb, Ub, Hb, ub, Yb, Sb, ab, Lb, hb, Bb, wb)
        }(Ub, Yb, bb, Ob, ub.sceneDepth, ub.sunShadow);
        if (null !== Sb) {
          const {
            reason: bb,
            message: ub
          } = Sb;
          throw Object.assign(new Error(`${nY} (${bb}): ${ub}`), {
            fallbackReason: nY
          })
        }
        return hb
      } catch (ab) {
        throw Yb.destroy(), null === Sb ? ab : DY(ab, "device")
      }
    }
  },
  40318: (bb, ub, hb) => {
    hb.d(ub, {
      D: () => Zb,
      E: () => Xb,
      b: () => Ob,
      d: () => Bb,
      e: () => wb,
      h: () => ab,
      i: () => ob,
      m: () => Gb,
      p: () => Lb,
      t: () => Yb,
      v: () => Ub,
      z: () => pb
    });
    const Bb = 3,
      Ob = 0,
      Gb = 1,
      Ub = 2,
      Lb = {
        uniform: 3,
        Sw: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Yb = 10,
      Sb = "BloxdPackInputs",
      ab = "bloxdPackInputs",
      Hb = [{
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
      wb = 80;

    function Zb() {
      const bb = Hb.map((bb => {
        let {
          name: ub,
          type: hb
        } = bb;
        return `    ${ub}: ${hb},\n`
      })).join("");
      return `struct ${Sb} {\n${bb}}\n@group(${Bb}) @binding(${Ob}) var<uniform> ${ab}: ${Sb};\n`
    }

    function Xb(bb, ub) {
      const hb = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, wb),
        [Bb, Ob, Gb, Ub, Lb, Yb] = Hb;
      hb.setFloat32(Bb.offset, ub.seconds, !0), hb.setUint32(Ob.offset, ub.lit ? 1 : 0, !0);
      for (let Sb = 0; Sb < 3; Sb++) hb.setInt32(Gb.offset + 4 * Sb, ub.renderOffset[Sb], !0), hb.setFloat32(Ub.offset + 4 * Sb, ub.Q_[Sb], !0), hb.setFloat32(Lb.offset + 4 * Sb, ub.eyePosition[Sb], !0), hb.setFloat32(Yb.offset + 4 * Sb, ub.shadowDirection[Sb], !0)
    }

    function pb(bb) {
      const ub = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, hb) => {
        let {
          id: Bb,
          rotation: Ob
        } = bb;
        ub[hb] = 65535 & Bb | (3 & Ob) << 16
      })), ub
    }
    const ob = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);