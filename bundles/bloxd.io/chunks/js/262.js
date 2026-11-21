export const id = 262;
export const ids = [262];
export const modules = {
  41579: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ed,
      e: () => Zd,
      g: () => Pd,
      i: () => Cd
    });
    var pd = kd(37438),
      Nd = kd(38835),
      Wd = kd(38832);

    function Pd(dd, Jd, kd, pd) {
      const Nd = Wd.p;
      Jd.fill(0), dd.gravity.toArray(Jd, Nd.gravity), dd.colorDead.toArray(Jd, Nd.colorDead), kd[Nd.ramp] = dd.useRampGradients ? 1 : 0;
      const Pd = dd.getColorGradients(),
        Zd = ld(dd, Pd, "colour", pd);
      kd[Nd.colorCount] = Zd;
      for (let Wd = 0; Wd < Zd; Wd++) {
        var gd;
        const dd = Pd[Qd(Pd, Wd)];
        Jd[Nd.colorPositions + Wd] = dd.gradient, dd.color1.toArray(Jd, Nd.color1 + 4 * Wd), (null !== (gd = dd.color2) && void 0 !== gd ? gd : dd.color1).toArray(Jd, Nd.color2 + 4 * Wd)
      }
      const Cd = dd.getVelocityGradients(),
        Kd = ld(dd, Cd, "hO", pd);
      kd[Nd.velocityCount] = Kd;
      for (let Wd = 0; Wd < Kd; Wd++) Id(Jd, Nd.hO + 4 * Wd, Cd[Qd(Cd, Wd)]);
      const od = dd.useRampGradients ? dd.getColorRemapGradients() : null,
        Ld = ld(dd, od, "colour remap", pd);
      kd[Nd.remapCount] = Ld;
      for (let Wd = 0; Wd < Ld; Wd++) Id(Jd, Nd.remap + 4 * Wd, od[Qd(od, Wd)])
    }

    function Zd() {
      return {
        key: [],
        texels: new Uint8Array(4 * Wd.f)
      }
    }
    const gd = [];

    function Cd(dd, Jd) {
      return Kd(dd, gd), !Rd(gd, Jd.key) && (Jd.key.length = 0, Jd.key.push(...gd), Jd.key.length > 0 && function(dd, Jd) {
        for (let kd = 0; kd < Wd.f; kd++) Nd.k.GetCurrentGradient(kd / Wd.f, dd, ((dd, Jd, kd) => {
          pd.Color3.LerpToRef(dd.color, Jd.color, kd, od)
        })), Jd[4 * kd] = 255 * od.r, Jd[4 * kd + 1] = 255 * od.g, Jd[4 * kd + 2] = 255 * od.b, Jd[4 * kd + 3] = 255
      }(dd.getRampGradients(), Jd.texels), !0)
    }

    function Kd(dd, Jd) {
      Jd.length = 0;
      const kd = dd.useRampGradients ? dd.getRampGradients() : null;
      if (null !== kd && void 0 !== kd && kd.length) {
        Jd.push(kd.length);
        for (const dd of kd) Jd.push(dd.gradient, dd.color.r, dd.color.g, dd.color.b)
      }
    }
    const od = new pd.Color3;

    function ld(dd, Jd, kd, pd) {
      return Jd ? Jd.length > Wd.c ? (pd(`particleStops:${kd}`, `GPU particles use the first 2 and last ${Wd.c-2} of more than ${Wd.c} ${kd} gradient stops (${dd.name})`), Wd.c) : Jd.length : 0
    }

    function Qd(dd, Jd) {
      return Jd < 2 || dd.length <= Wd.c ? Jd : dd.length - Wd.c + Jd
    }
    const Ld = new Float32Array(Wd.k),
      Od = new Uint32Array(Ld.buffer);

    function ed(dd, Jd, kd) {
      return Pd(dd, Ld, Od, kd), Jd && Rd(Od, Jd) ? null : Od.slice()
    }

    function Rd(dd, Jd) {
      if (dd.length !== Jd.length) return !1;
      for (let kd = 0; kd < dd.length; kd++)
        if (dd[kd] !== Jd[kd]) return !1;
      return !0
    }

    function Id(dd, Jd, kd) {
      var pd;
      dd[Jd] = kd.gradient, dd[Jd + 1] = kd.factor1, dd[Jd + 2] = null !== (pd = kd.factor2) && void 0 !== pd ? pd : kd.factor1
    }
  },
  41572: (dd, Jd, kd) => {
    function pd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Jd = new Set;
      return (kd, pd) => {
        Jd.has(kd) || (Jd.add(kd), console.warn(dd + pd))
      }
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  41616: (dd, Jd, kd) => {
    kd.d(Jd, {
      createLiteRendererAsync: () => mg,
      liteBabylonBackend: () => Dd,
      setPipelineFailureHook: () => VN
    });
    var pd = kd(37438),
      Nd = kd(37814),
      Wd = kd(38097),
      Pd = kd(37381),
      Zd = kd(38108);
    class gd extends Zd.d {
      constructor() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        super(...Jd), this.color = new pd.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: Jd[0].Wm().getUniqueId(),
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
          needAlphaBlendingForMesh: dd => dd.visibility < 1 || dd.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Cd = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Kd = dd => 1 << Cd.indexOf(dd),
      od = Kd("VERTEXCOLOR"),
      ld = Kd("INSTANCES"),
      Qd = Kd("THIN_INSTANCES"),
      Ld = Kd("INSTANCESCOLOR"),
      Od = Kd("FOG"),
      ed = Kd("LITE_FRONT_LAYER");

    function Rd(dd, Jd, kd, pd) {
      let Nd = 0;
      return dd.isVerticesDataPresent("color") && (Nd |= od), "none" !== Jd && (Nd |= ld), "thin" === Jd && (Nd |= Qd, dd.isVerticesDataPresent("instanceColor") && (Nd |= Ld)), pd.fogEnabled && dd.applyFog && 0 !== pd.fogMode && (Nd |= Od), kd >= 1 && (Nd |= ed), Nd
    }

    function Id(dd, Jd) {
      dd.updateColor4("color", Jd.color, Jd.alpha)
    }
    var Gd = kd(38047),
      vd = kd(37613),
      xd = kd(37473),
      qd = kd(37347),
      Bd = kd(38027),
      sd = kd(38043),
      ad = kd(37366),
      Md = kd(37373),
      Fd = kd(37386);
    const Yd = qd.d.GLSL;
    class md {
      constructor(dd, Jd) {
        this.name = dd, this.BO = Jd, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Zm = {
          addOnce: dd => {
            this.disposers.push(dd)
          }
        }, this.uniqueId = Jd.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      Wm() {
        return this.BO
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
      needAlphaBlendingForMesh(dd) {
        return (0, ad.P)(this.model, dd.visibility, dd.hasVertexAlpha)
      }
      needAlphaTestingForMesh(dd) {
        return (0, ad.S)(this.model, dd.visibility, dd.hasVertexAlpha)
      }
      dispose() {
        (0, vd.l)(this);
        for (const dd of this.disposers.splice(0)) dd()
      }
      get model() {
        return (0, ad.$)(this)
      }
    }
    const bd = new WeakSet;

    function Sd(dd) {
      return bd.has(dd)
    }

    function jd(dd) {
      bd.add(dd)
    }
    const Xd = {
      create: (dd, Jd) => ((0, xd.p)(dd, new md(dd.name, Jd)), Md.b.defines()),
      write: () => {},
      addFeature: (dd, Jd) => {
        const kd = dd.mirror;
        Jd.feature === sd.f && Jd.state.dirLightCount > 0 && (dd.disableLighting = !0, (0, ad.Y)(dd)), "BLOXD_LIGHTING" in Jd.defines && (0, vd.j)(kd), Jd.feature === Bd.i && ((0, Gd.j)(Jd.state, Yd), function(dd, Jd) {
          const kd = dd.Wm().eL();
          Jd.textures.forEach(((pd, Nd) => {
            setTimeout((() => {
              var Wd, Pd;
              const {
                url: Zd
              } = pd.source;
              kd.atlasArray(Zd, null !== (Wd = null === (Pd = Jd.sources.pixels) || void 0 === Pd ? void 0 : Pd[Nd]) && void 0 !== Wd ? Wd : null, Jd.sources.layerWidth).then((kd => {
                (0, Gd.e)(dd, Jd, Nd, kd, kd.layerWidth, kd.layers, Yd)
              })).catch((dd => {
                console.error(`Failed to build texture array for atlas ${Nd}`, dd)
              }))
            }))
          }))
        }(kd, Jd.state))
      },
      texture: (dd, Jd, kd) => {
        let {
          data: pd,
          sets: Nd
        } = kd;
        var Wd;
        (jd(dd), pd) && (dd.uvSet = null !== (Wd = null === Nd || void 0 === Nd ? void 0 : Nd.coordinatesIndex) && void 0 !== Wd ? Wd : 0, (0, xd.$)(dd.matrix, null !== Nd && void 0 !== Nd ? Nd : {}))
      },
      cube: jd,
      canvas: (dd, Jd, kd) => {
        let {
          width: pd,
          height: Nd,
          mipmaps: Wd,
          samplingMode: Pd = Fd.h.trilinear,
          hasAlpha: Zd = !1,
          wrap: gd = Fd.e.clamp
        } = kd;
        const Cd = dd.eL().createCanvas(pd, Nd),
          Kd = new Fd.k("2d", {
            kind: "canvas",
            width: pd,
            height: Nd,
            canvas: Cd
          }, {
            samplingMode: Pd,
            wrapU: gd,
            wrapV: gd,
            noMipmap: !Wd,
            invertY: !0
          });
        return Kd.hasAlpha = Zd, jd(Kd), Kd
      }
    };
    var fd = kd(37640),
      nd = kd(37280);
    class Ud {
      constructor(dd, Jd, kd) {
        this.engine = dd, this.clearColor = Jd, this.ambientColor = kd, this.onBeforeRenderObservable = new nd.e, this.onBeforeCameraRenderObservable = new nd.e, this.onAfterRenderObservable = new nd.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.Qv = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      eL() {
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
      addPendingData(dd) {
        this.pending.push(dd)
      }
      removePendingData(dd) {
        const Jd = this.pending.indexOf(dd); - 1 !== Jd && this.pending.splice(Jd, 1)
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

    function yd() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const Dd = {
      Ukd: yd,
      PNd: (dd, Jd) => {
        const kd = new Ud(dd.engine, pd.c.FromArray(Jd.clearColor), pd.Color3.FromArray(Jd.ambientColor));
        (0, Pd.c)(Xd, kd), dd.BO = kd,
          function(dd, Jd) {
            const kd = Object.assign((0, fd.l)(dd, "camera"), {
              layerMask: 268435455
            });
            dd.model.nodes.setWorldSource(kd.row, dd.model.view.worldMatrix), dd.camera = Jd.activeCamera = kd
          }(dd, kd), (0, Nd.f)(dd, ((dd, Jd, kd) => (0, Wd.l)(dd, Jd, kd, Zd.d)))
      },
      kNd: () => {},
      setBabylonFog: () => {},
      gNd: yd,
      oNd: () => {},
      linesFromArrays: (dd, Jd, kd) => (0, Wd.l)(dd, Jd, kd, gd),
      sO: () => {},
      KNd: yd
    };
    var Td = kd(41671),
      Ed = kd(41683);
    class cd {
      constructor(dd) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const Jd = new Promise((dd => {
          this.refused = dd
        }));
        this.deviceLost = Promise.race([dd, Jd])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(dd) {
        (function(dd) {
          const {
            name: Jd,
            message: kd
          } = null !== dd && void 0 !== dd ? dd : {};
          return "InvalidStateError" === Jd && "string" === typeof kd && kd.startsWith("GPUDevice.")
        })(dd) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: dd.message,
          framesRefused: !0
        }))
      }
    }
    class hd {
      constructor(dd) {
        this.resources = dd, this.matrixKey = {
          oo: 0
        }, this.attributesKey = {
          oo: 0
        }, this.inputs = Object.create(null);
        for (let Jd = 0; Jd < 4; Jd++) this.inputs[`world${Jd}`] = new td(this.matrixKey, 16 * Jd, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(dd, Jd) {
        this.resources.vertexBufferCreated(this.matrixKey, dd, !0), Jd && this.resources.vertexBufferCreated(this.attributesKey, Jd, !0)
      }
    }
    class rd extends hd {
      constructor(dd, Jd, kd) {
        super(dd), this.mesh = Jd, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const pd = this.inputs;
        let Nd = 0;
        for (const {
            size: Pd
          }
          of kd) Nd += Pd;
        for (const {
            name: Pd,
            offset: Zd,
            size: gd,
            type: Cd
          }
          of kd) pd[Pd] = new td(this.attributesKey, 4 * Zd, 4 * Nd, gd, !0, Cd);
        this.rowStride = Nd, dd.S_.set(Jd, this);
        const Wd = Jd.isVerticesDataPresent;
        Jd.isVerticesDataPresent = (dd, kd) => dd in pd || Wd.call(Jd, dd, kd)
      }
      attach(dd, Jd) {
        this.matrices = dd, this.attributes = Jd, this.bind(dd, Jd), this.mirror(dd, dd.length, dd.length / 16)
      }
      I3(dd) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, dd ? 64 * dd : void 0)
      }
      B3() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(dd, Jd) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * dd, 16 * Jd)
      }
      attributeRows(dd, Jd) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, dd * this.rowStride, Jd * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(dd, Jd, kd) {
        const pd = this.mesh._thinInstanceDataStorage;
        pd.matrixData = dd, pd.matrixBufferSize = Jd, pd.worldMatrices = null, pd.instancesCount = kd
      }
    }
    class ud extends hd {
      constructor(dd, Jd, kd) {
        var pd, Nd, Wd, Pd;
        super(dd), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (pd = null === kd || void 0 === kd ? void 0 : kd.interleavedKinds) && void 0 !== pd ? pd : null, this.offsets = null !== (Nd = null === kd || void 0 === kd ? void 0 : kd.interleavedOffsets) && void 0 !== Nd ? Nd : [], this.rowStride = null !== (Wd = null === kd || void 0 === kd ? void 0 : kd.interleavedRowStride) && void 0 !== Wd ? Wd : 0, null === (Pd = this.layout) || void 0 === Pd || Pd.forEach(((dd, Jd) => {
          this.inputs[dd] = new td(this.attributesKey, 4 * this.offsets[Jd], 4 * this.rowStride, kd.strides[dd])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), dd.batchUploads.set(Jd, this), Jd.Zm.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(dd) {
        const Jd = this.packedBatch;
        return Jd.renderSelf ? 0 === dd ? this.packedSource : Jd.instances[dd - 1] : Jd.instances[dd]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(dd, Jd, kd, pd) {
        const Nd = (Jd.renderSelf ? 1 : 0) + Jd.rows.length;
        if (this.frame = pd, this.count = Nd, this.packedSource = dd, this.packedBatch = Jd, 0 === Nd) return;
        if (dd.getWorldMatrix(), 16 * Nd > this.matrices.length) {
          let dd = this.matrices.length / 16;
          for (; dd < Nd;) dd *= 2;
          this.matrices = new Float32Array(16 * dd), this.attributes &&= new Float32Array(dd * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Wd = 0;
        Jd.renderSelf && this.packRow(Wd++, dd, Jd.row, kd);
        for (let Pd = 0; Pd < Jd.rows.length; Pd++) this.packRow(Wd++, Jd.instances[Pd], Jd.rows[Pd], kd);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Nd), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Nd * this.rowStride)
      }
      packRow(dd, Jd, kd, pd) {
        const Nd = this.matrices;
        if (kd < 0) Nd.set(Jd.getWorldMatrix().m, 16 * dd);
        else
          for (let Cd = 0; Cd < 16; Cd++) Nd[16 * dd + Cd] = pd[16 * kd + Cd];
        const Wd = this.attributes;
        if (!Wd) return;
        const Pd = Jd.fn,
          Zd = this.layout;
        for (let Cd = 0; Cd < Zd.length; Cd++) {
          var gd;
          const Jd = null !== (gd = Pd[Zd[Cd]]) && void 0 !== gd ? gd : 0,
            kd = dd * this.rowStride + this.offsets[Cd];
          Jd.toArray ? Jd.toArray(Wd, kd) : Jd.copyToArray ? Jd.copyToArray(Wd, kd) : Wd[kd] = Jd
        }
      }
    }
    class td {
      constructor(dd, Jd, kd, pd) {
        let Nd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = dd, this.byteOffset = Jd, this.byteStride = kd, this.size = pd, this.instanced = Nd, this.type = Wd, this.normalized = Pd
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
    const Vd = "CANVAS_ALPHA_ONE",
      zd = `override ${Vd}: bool = false;`,
      Hd = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function wd(dd, Jd, kd) {
      var pd;
      let Nd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Wd = null !== (pd = Jd._colorFormat) && void 0 !== pd ? pd : "bgra8unorm",
        Pd = Nd ? 15 : 0;
      return kd ? {
        ...dd,
        targets: [{
          format: Wd,
          blend: {
            color: kd,
            alpha: Hd
          },
          writeMask: Pd
        }]
      } : {
        ...dd,
        constants: {
          ...dd.constants,
          [Vd]: 1
        },
        targets: [{
          format: Wd,
          writeMask: Pd
        }]
      }
    }

    function Ad(dd, Jd) {
      dd._renderables.push(Jd)
    }

    function dJ(dd) {
      var Jd, kd;
      return null !== (Jd = null === (kd = dd._frameGraph) || void 0 === kd ? void 0 : kd._tasks) && void 0 !== Jd ? Jd : []
    }

    function JJ(dd) {
      return dd._currentEncoder
    }

    function kJ(dd) {
      return dd.createBindGroupLayout({
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
    const pJ = "greater-equal",
      NJ = 2e5,
      WJ = 1e5,
      PJ = new WeakMap;

    function ZJ(dd, Jd) {
      let kd = PJ.get(dd);
      if (!kd) {
        kd = {
          module: dd.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, PJ.set(dd, kd)
      }
      const pd = `${Jd._colorFormat}|${Jd._depthStencilFormat}|${Jd._sampleCount}`;
      let Nd = kd.pipelines.get(pd);
      if (!Nd) {
        var Wd;
        const {
          module: Pd
        } = kd;
        Nd = dd.createRenderPipeline({
          label: `placeholder ${pd}`,
          layout: dd.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Pd,
            entryPoint: "v"
          },
          fragment: {
            module: Pd,
            entryPoint: "f",
            targets: [{
              format: null !== (Wd = Jd._colorFormat) && void 0 !== Wd ? Wd : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: Jd._depthStencilFormat ? {
            format: Jd._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Jd._sampleCount
          }
        }), kd.pipelines.set(pd, Nd)
      }
      return Nd
    }

    function gJ(dd, Jd, kd) {
      const pd = Jd.eye,
        Nd = Jd.viewMatrix;
      dd[0] = pd[0] + Nd[2] * kd, dd[1] = pd[1] + Nd[6] * kd, dd[2] = pd[2] + Nd[10] * kd
    }
    var CJ = kd(38149),
      KJ = kd(41572),
      oJ = kd(37360);
    const lJ = Math.PI,
      QJ = lJ / 1.95,
      LJ = [5e-4 / 94, 125e-7, 5e-4 / 18],
      OJ = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((dd => {
        let [Jd, kd] = dd;
        return .434 * lJ * Math.pow(2 * lJ / Jd, 2) * kd
      }));

    function eJ(dd, Jd, kd) {
      const {
        up: pd,
        mieDirectionalG: Nd
      } = dd, Wd = 1 - GJ(1 - Math.exp(Jd[1] / 45e4), 0, 1), Pd = dd.rayleigh - (1 - Wd), Zd = Math.hypot(Jd[0], Jd[1], Jd[2]), gd = Zd > 0 ? 1 / Zd : 0, Cd = kd.sunDir;
      for (let Qd = 0; Qd < 3; Qd++) Cd[Qd] = Jd[Qd] * gd;
      const Kd = Cd[0] * pd[0] + Cd[1] * pd[1] + Cd[2] * pd[2],
        od = 1e3 * Math.max(0, 1 - Math.exp(-(QJ - Math.acos(GJ(Kd, -1, 1))) / 1.5));
      kd.sunE = od;
      const ld = .2 * dd.turbidity * 1e-17 * dd.mieCoefficient;
      for (let Qd = 0; Qd < 3; Qd++) {
        const dd = LJ[Qd] * Pd,
          Jd = OJ[Qd] * ld,
          pd = od / (dd + Jd);
        kd.inScatterR[Qd] = dd * pd, kd.inScatterM[Qd] = Jd * pd, kd.extinctionBeta[Qd] = 8400 * dd + 1250 * Jd
      }
      return kd.sunsetMix = GJ(Math.pow(1 - Kd, 5), 0, 1), kd.sunDiscE = 19e3 * od, kd.mieScale = (1 - Nd * Nd) / (4 * lJ), kd.mieBase = 1 + Nd * Nd, kd.mieSlope = 2 * Nd, kd
    }
    const RJ = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const IJ = 1 / function(dd) {
      const {
        A: Jd,
        B: kd,
        C: pd,
        D: Nd,
        E: Wd,
        F: Pd
      } = RJ;
      return (dd * (Jd * dd + pd * kd) + Nd * Wd) / (dd * (Jd * dd + kd) + Nd * Pd) - Wd / Pd
    }(1e3);

    function GJ(dd, Jd, kd) {
      return Math.min(Math.max(dd, Jd), kd)
    }
    const vJ = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function xJ(dd, Jd) {
      const kd = new Map(Jd),
        pd = [],
        Nd = [],
        Wd = () => 0 === Nd.length || Nd[Nd.length - 1].active;
      let Pd = null;
      const Zd = () => {
        const dd = [...kd].filter((dd => {
            let [, Jd] = dd;
            return !0 !== Jd
          })),
          Jd = dd.map((dd => {
            let [Jd] = dd;
            return Jd
          })).join("|");
        Pd = dd.length ? new RegExp(`\\b(${Jd})\\b`, "g") : null
      };
      Zd();
      for (const gd of dd.split("\n")) {
        const dd = vJ.exec(gd);
        if (!dd) {
          Wd() && pd.push(Pd ? qJ(gd, Pd, kd) : gd);
          continue
        }
        const Jd = dd[1],
          Cd = dd[2].trim();
        if ("ifdef" === Jd || "ifndef" === Jd || "if" === Jd) {
          const dd = Wd(),
            pd = "if" === Jd ? BJ(Cd, kd) : kd.has(Cd) === ("ifdef" === Jd);
          Nd.push({
            active: dd && pd,
            parentActive: dd,
            taken: pd
          })
        } else if ("elif" === Jd || "else" === Jd) {
          const dd = Nd[Nd.length - 1];
          if (!dd) throw new Error(`#${Jd} without #if`);
          const pd = !dd.taken && ("else" === Jd || BJ(Cd, kd));
          dd.active = dd.parentActive && pd, dd.taken = dd.taken || pd
        } else if ("endif" === Jd) {
          if (!Nd.pop()) throw new Error("#endif without #if")
        } else if (Wd()) {
          const [dd, ...pd] = Cd.split(/\s+/);
          "undef" === Jd ? kd.delete(dd) : kd.set(dd, !pd.length || pd.join(" ")), Zd()
        }
      }
      if (Nd.length) throw new Error("Unterminated #if");
      return pd.join("\n")
    }

    function qJ(dd, Jd, kd) {
      return dd.replace(Jd, (dd => {
        const Jd = kd.get(dd);
        return "string" === typeof Jd ? Jd : dd
      }))
    }

    function BJ(dd, Jd) {
      var kd;
      const pd = null !== (kd = dd.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== kd ? kd : [];
      let Nd = 0;
      const Wd = () => pd[Nd],
        Pd = () => pd[Nd++],
        Zd = dd => {
          const kd = /^\d/.test(dd) ? dd : Jd.get(dd);
          return "string" === typeof kd ? parseInt(kd) : Number.NaN
        },
        gd = () => {
          const dd = Pd();
          if ("!" === dd) return !gd();
          if ("(" === dd) {
            const dd = Kd();
            return Pd(), dd
          }
          if ("defined" === dd) {
            const dd = "(" === Wd();
            dd && Pd();
            const kd = Pd();
            return dd && Pd(), Jd.has(kd)
          }
          const kd = Wd();
          if ("==" === kd || "!=" === kd || ">" === kd || "<" === kd || ">=" === kd || "<=" === kd) {
            Pd();
            const Jd = Zd(dd),
              pd = Zd(Pd());
            if (Number.isNaN(Jd) || Number.isNaN(pd)) return !1;
            switch (kd) {
              case "==":
                return Jd === pd;
              case "!=":
                return Jd !== pd;
              case ">":
                return Jd > pd;
              case "<":
                return Jd < pd;
              case ">=":
                return Jd >= pd;
              default:
                return Jd <= pd
            }
          }
          return Jd.has(dd)
        },
        Cd = () => {
          let dd = gd();
          for (;
            "&&" === Wd();) {
            Pd();
            const Jd = gd();
            dd = dd && Jd
          }
          return dd
        },
        Kd = () => {
          let dd = Cd();
          for (;
            "||" === Wd();) {
            Pd();
            const Jd = Cd();
            dd = dd || Jd
          }
          return dd
        },
        od = Kd();
      if (Nd !== pd.length) throw new Error(`Cannot evaluate #if ${dd}`);
      return od
    }
    var sJ = kd(37351),
      iJ = kd(37725),
      aJ = kd(37732),
      MJ = kd(40880),
      FJ = kd(38888);
    const YJ = 32,
      mJ = [10, 3, 10],
      bJ = [21, 7, 21],
      SJ = bJ[0] * bJ[1] * bJ[2],
      jJ = 0,
      XJ = 1,
      fJ = 2,
      nJ = 3,
      UJ = 64,
      yJ = 512,
      DJ = 4 * SJ,
      TJ = 1536,
      EJ = DJ + SJ * TJ,
      cJ = 1073741824,
      hJ = EJ + 1;

    function rJ(dd, Jd) {
      const kd = dd % Jd;
      return kd < 0 ? kd + Jd : kd
    }

    function uJ(dd, Jd, kd) {
      return pd = rJ(dd, bJ[0]), Nd = rJ(Jd, bJ[1]), Wd = rJ(kd, bJ[2]), pd + bJ[0] * (Nd + bJ[1] * Wd);
      var pd, Nd, Wd
    }

    function tJ(dd, Jd, kd) {
      return dd + 8 * (Jd + 8 * kd)
    }

    function VJ(dd, Jd, kd) {
      return dd + 4 * (Jd + 4 * kd)
    }
    const zJ = 65535,
      HJ = 0,
      wJ = 1,
      AJ = 2,
      dk = 3;

    function Jk(dd) {
      return Math.ceil(dd * dd / 32)
    }
    const kk = 8192,
      pk = 1 << 18,
      Nk = 65536,
      Wk = 294912,
      Pk = 128,
      Zk = 4096,
      gk = 16,
      Ck = 16385,
      Kk = 81921,
      lk = 147457,
      Qk = 4194304;
    const Lk = [0, 0, 0],
      Ok = [0, 0, 0];

    function ek(dd, Jd, kd, pd) {
      ! function(dd, Jd, kd) {
        const [pd, Nd, Wd] = [dd[0], dd[1], dd[2]];
        let Pd, Zd, gd;
        Math.abs(Nd) < .99 ? (Pd = Wd, Zd = 0, gd = -pd) : (Pd = -Nd, Zd = pd, gd = 0);
        const Cd = Math.hypot(Pd, Zd, gd);
        Jd[0] = Pd / Cd, Jd[1] = Zd / Cd, Jd[2] = gd / Cd, kd[0] = Nd * Jd[2] - Wd * Jd[1], kd[1] = Wd * Jd[0] - pd * Jd[2], kd[2] = pd * Jd[1] - Nd * Jd[0]
      }(pd, Lk, Ok);
      const Nd = 1 / 32;
      for (const [Wd, Pd] of [
          [0, Lk],
          [4, Ok]
        ]) {
        for (let kd = 0; kd < 3; kd++) dd[Jd + Wd + kd] = Pd[kd] * Nd;
        dd[Jd + Wd + 3] = -(Pd[0] * kd[0] + Pd[1] * kd[1] + Pd[2] * kd[2]) * Nd
      }
    }
    class Rk {
      constructor() {
        this.words = new Uint32Array(lk), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      ZQ(dd, Jd) {
        this.parts = 0, this.refs = 0, this.view = dd, this.viewAt = Jd;
        const kd = dd[Jd + 1] * dd[Jd + 6] - dd[Jd + 2] * dd[Jd + 5],
          pd = dd[Jd + 2] * dd[Jd + 4] - dd[Jd] * dd[Jd + 6],
          Nd = dd[Jd] * dd[Jd + 5] - dd[Jd + 1] * dd[Jd + 4],
          Wd = Math.hypot(kd, pd, Nd) || 1;
        this.light[0] = kd / Wd, this.light[1] = pd / Wd, this.light[2] = Nd / Wd
      }
      add(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= Zk || ! function(dd, Jd, kd) {
            const pd = dd[Jd],
              Nd = dd[Jd + 1],
              Wd = dd[Jd + 2],
              Pd = dd[Jd + 3],
              Zd = dd[Jd + 4],
              gd = dd[Jd + 5],
              Cd = dd[Jd + 6],
              Kd = dd[Jd + 7],
              od = dd[Jd + 8],
              ld = dd[Jd + 9],
              Qd = dd[Jd + 10],
              Ld = dd[Jd + 11],
              Od = dd[Jd + 12],
              ed = dd[Jd + 13],
              Rd = dd[Jd + 14],
              Id = dd[Jd + 15],
              Gd = pd * gd - Nd * Zd,
              vd = pd * Cd - Wd * Zd,
              xd = pd * Kd - Pd * Zd,
              qd = Nd * Cd - Wd * gd,
              Bd = Nd * Kd - Pd * gd,
              sd = Wd * Kd - Pd * Cd,
              ad = od * ed - ld * Od,
              Md = od * Rd - Qd * Od,
              Fd = od * Id - Ld * Od,
              Yd = ld * Rd - Qd * ed,
              md = ld * Id - Ld * ed,
              bd = Qd * Id - Ld * Rd,
              Sd = Gd * bd - vd * md + xd * Yd + qd * Fd - Bd * Md + sd * ad;
            if (!(Math.abs(Sd) > 1e-12)) return !1;
            const jd = 1 / Sd;
            return kd[0] = (gd * bd - Cd * md + Kd * Yd) * jd, kd[1] = (Wd * md - Nd * bd - Pd * Yd) * jd, kd[2] = (ed * sd - Rd * Bd + Id * qd) * jd, kd[3] = (Qd * Bd - ld * sd - Ld * qd) * jd, kd[4] = (Cd * Fd - Zd * bd - Kd * Md) * jd, kd[5] = (pd * bd - Wd * Fd + Pd * Md) * jd, kd[6] = (Rd * xd - Od * sd - Id * vd) * jd, kd[7] = (od * sd - Qd * xd + Ld * vd) * jd, kd[8] = (Zd * md - gd * Fd + Kd * ad) * jd, kd[9] = (Nd * Fd - pd * md - Pd * ad) * jd, kd[10] = (Od * Bd - ed * xd + Id * Gd) * jd, kd[11] = (ld * xd - od * Bd - Ld * Gd) * jd, kd[12] = (gd * Md - Zd * Yd - Cd * ad) * jd, kd[13] = (pd * Yd - Nd * Md + Wd * ad) * jd, kd[14] = (ed * vd - Od * qd - Rd * Gd) * jd, kd[15] = (od * qd - ld * vd + Qd * Gd) * jd, !0
          }(Jd, kd, this.inverse)) return;
        const {
          view: pd,
          viewAt: Nd
        } = this, Wd = kd;
        let Pd = 1 / 0,
          Zd = 1 / 0,
          gd = -1 / 0,
          Cd = -1 / 0,
          Kd = -1 / 0;
        const [od, ld, Qd] = this.light;
        for (let xd = 0; xd < 8; xd++) {
          const kd = 1 & xd ? dd.hi[0] : dd.lo[0],
            Ld = 2 & xd ? dd.hi[1] : dd.lo[1],
            Od = 4 & xd ? dd.hi[2] : dd.lo[2],
            ed = kd * Jd[Wd] + Ld * Jd[Wd + 4] + Od * Jd[Wd + 8] + Jd[Wd + 12],
            Rd = kd * Jd[Wd + 1] + Ld * Jd[Wd + 5] + Od * Jd[Wd + 9] + Jd[Wd + 13],
            Id = kd * Jd[Wd + 2] + Ld * Jd[Wd + 6] + Od * Jd[Wd + 10] + Jd[Wd + 14],
            Gd = pd[Nd] * ed + pd[Nd + 1] * Rd + pd[Nd + 2] * Id + pd[Nd + 3],
            vd = pd[Nd + 4] * ed + pd[Nd + 5] * Rd + pd[Nd + 6] * Id + pd[Nd + 7];
          Pd = Math.min(Pd, Gd), Zd = Math.min(Zd, vd), gd = Math.max(gd, Gd), Cd = Math.max(Cd, vd), Kd = Math.max(Kd, od * ed + ld * Rd + Qd * Id)
        }
        if (gd < -1 || Cd < -1 || Pd >= 1 || Zd >= 1) return;
        const Ld = this.parts++,
          Od = this.rects;
        Od[4 * Ld] = Ik(Pd), Od[4 * Ld + 1] = Ik(Zd), Od[4 * Ld + 2] = Ik(gd), Od[4 * Ld + 3] = Ik(Cd);
        const ed = this.inverse,
          {
            cell: Rd,
            dims: Id,
            lo: Gd
          } = dd,
          vd = Kk + Ld * gk;
        for (let xd = 0; xd < 3; xd++) this.floats[vd + 4 * xd] = ed[xd] / Rd, this.floats[vd + 4 * xd + 1] = ed[4 + xd] / Rd, this.floats[vd + 4 * xd + 2] = ed[8 + xd] / Rd, this.floats[vd + 4 * xd + 3] = (ed[12 + xd] - Gd[xd]) / Rd;
        this.words[vd + 12] = dd.at, this.floats[vd + 13] = Kd + .001 * (1 + Math.abs(Kd)), this.words[vd + 14] = Id[0] | Id[1] << 8 | Id[2] << 16
      }
      finish() {
        const dd = Pk,
          {
            counts: Jd,
            rects: kd,
            words: pd
          } = this;
        Jd.fill(0);
        let Nd = 0,
          Wd = 0;
        for (; Wd < this.parts; Wd++) {
          const pd = 4 * Wd,
            Pd = (kd[pd + 2] - kd[pd] + 1) * (kd[pd + 3] - kd[pd + 1] + 1);
          if (Nd + Pd > 65536) break;
          Nd += Pd;
          for (let Nd = kd[pd + 1]; Nd <= kd[pd + 3]; Nd++)
            for (let Wd = kd[pd]; Wd <= kd[pd + 2]; Wd++) Jd[Nd * dd + Wd]++
        }
        let Pd = 0;
        for (let gd = 0; gd < 16384; gd++) pd[gd] = Pd, Pd += Jd[gd], Jd[gd] = pd[gd];
        pd[16384] = Pd;
        for (let gd = 0; gd < Wd; gd++) {
          const Nd = 4 * gd;
          for (let Wd = kd[Nd + 1]; Wd <= kd[Nd + 3]; Wd++)
            for (let Pd = kd[Nd]; Pd <= kd[Nd + 2]; Pd++) pd[Ck + Jd[Wd * dd + Pd]++] = gd
        }
        const Zd = this.floats;
        for (let gd = 0; gd < 16384; gd++) {
          const dd = Ck + pd[gd],
            Jd = dd + Math.min(pd[gd + 1] - pd[gd], 64);
          for (let kd = dd + 1; kd < Jd; kd++) {
            const Jd = pd[kd],
              Nd = Zd[81934 + Jd * gk];
            let Wd = kd - 1;
            for (; Wd >= dd && Zd[81934 + pd[Wd] * gk] < Nd; Wd--) pd[Wd + 1] = pd[Wd];
            pd[Wd + 1] = Jd
          }
        }
        this.refs = Nd
      }
    }

    function Ik(dd) {
      return Math.min(127, Math.max(0, Math.floor((.5 * dd + .5) * Pk)))
    }

    function Gk(dd, Jd, kd, pd, Nd) {
      for (let Wd = 0; Wd < 4; Wd++)
        for (let Pd = 0; Pd < 4; Pd++) Nd[4 * Wd + Pd] = dd[Jd + 4 * Wd] * kd[pd + Pd] + dd[Jd + 4 * Wd + 1] * kd[pd + 4 + Pd] + dd[Jd + 4 * Wd + 2] * kd[pd + 8 + Pd] + dd[Jd + 4 * Wd + 3] * kd[pd + 12 + Pd]
    }

    function vk(dd, Jd, kd, pd, Nd) {
      const Wd = dd[0] - Jd,
        Pd = dd[1] - kd,
        Zd = dd[2] - pd,
        gd = dd[3] - Jd,
        Cd = dd[4] - kd,
        Kd = dd[5] - pd,
        od = dd[6] - Jd,
        ld = dd[7] - kd,
        Qd = dd[8] - pd;
      if (Math.min(Wd, gd, od) > Nd || Math.max(Wd, gd, od) < -Nd) return !1;
      if (Math.min(Pd, Cd, ld) > Nd || Math.max(Pd, Cd, ld) < -Nd) return !1;
      if (Math.min(Zd, Kd, Qd) > Nd || Math.max(Zd, Kd, Qd) < -Nd) return !1;
      const Ld = gd - Wd,
        Od = Cd - Pd,
        ed = Kd - Zd,
        Rd = od - gd,
        Id = ld - Cd,
        Gd = Qd - Kd,
        vd = Od * Gd - ed * Id,
        xd = ed * Rd - Ld * Gd,
        qd = Ld * Id - Od * Rd;
      if (Math.abs(vd * Wd + xd * Pd + qd * Zd) > Nd * (Math.abs(vd) + Math.abs(xd) + Math.abs(qd))) return !1;
      const Bd = [Ld, Od, ed, Rd, Id, Gd, Wd - od, Pd - ld, Zd - Qd];
      for (let sd = 0; sd < 3; sd++) {
        const dd = Bd[3 * sd],
          Jd = Bd[3 * sd + 1],
          kd = Bd[3 * sd + 2];
        for (let pd = 0; pd < 3; pd++) {
          const Ld = 0 === pd ? 0 : 1 === pd ? kd : -Jd,
            Od = 0 === pd ? -kd : 1 === pd ? 0 : dd,
            ed = 0 === pd ? Jd : 1 === pd ? -dd : 0,
            Rd = Ld * Wd + Od * Pd + ed * Zd,
            Id = Ld * gd + Od * Cd + ed * Kd,
            Gd = Ld * od + Od * ld + ed * Qd,
            vd = Nd * (Math.abs(Ld) + Math.abs(Od) + Math.abs(ed));
          if (Math.min(Rd, Id, Gd) > vd || Math.max(Rd, Id, Gd) < -vd) return !1
        }
      }
      return !0
    }
    const xk = new Float32Array(1);
    new Uint32Array(xk.buffer);
    var qk = kd(38895);

    function Bk(dd) {
      const [Jd, kd, pd] = qk.u;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${dd.group}) @binding(${dd.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${Jd-1}, ${kd-1}, ${pd-1});\n}\n`
    }

    function sk(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Nd, Wd, Pd] = bJ, [Zd, gd, Cd] = mJ, Kd = Math.log2(YJ), od = pd ? "var<private> bloxdSpCrossed: bool;\n" : "", ld = pd ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${dd.group}) @binding(${dd.ql}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${dd.group}) @binding(${dd.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${kd?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${od}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${wJ}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${AJ}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${kd?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${dk}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Nd}, ${Wd}, ${Pd});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Nd} * (s.y + ${Wd} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${Zd}, ${gd}, ${Cd}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Kd}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${nJ}u) {\n\t\treturn named && state == ${fJ}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${DJ}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${EJ}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${Jd?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${Jd?`\t\tif (exits && step > 0 && step % ${Mk} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Kd}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${jJ}u || kind == ${XJ}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${fJ}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${DJ}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${ld}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const ik = {
      group: 0,
      uniform: 0,
      ql: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function ak() {
      const dd = ik;
      return `${Bk(dd)}${sk(dd,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${qk.d}>,\n}\n@group(${dd.group}) @binding(${dd.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${dd.group}) @binding(${dd.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${qk.o})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${qk.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${qk.h}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Mk = 2;
    const Fk = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function Yk(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const pd = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${Jd.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Nd = "trace" === kd || "lit" === kd,
        Wd = "maskEdge" === kd ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Pd = Nd ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${Jd.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${Jd.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===kd?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Wd};\n`;
      return `${pd}${dd.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Nd?function(){const[dd,Jd,kd]=qk.u;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${dd}.0, ${Jd}.0, ${kd}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Pd}}\n`:""}${dd.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${Jd.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${Jd.renderOffset});\n}\n`:""}`
    }
    const mk = "bloxdSpOwnTexture";

    function bk(dd) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${dd.texture}) - 1u)))`
    }
    const Sk = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${CJ.e.map((dd=>{let[Jd,kd]=dd;return`\tbloxdSpOut.${Jd} = (bloxdSpWord & ${kd}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function jk(dd) {
      return `bloxdSpFlags(${dd})`
    }
    const Xk = `${MJ.m}.eyePosition`;

    function fk(dd, Jd, kd, pd, Nd) {
      const Wd = dd.indexOf(Jd);
      if (Wd < 0 || dd.indexOf(Jd, Wd + 1) >= 0) throw new Error(`Lite's ${Nd} program changed at the shader pack ${pd} hook: ${Wd<0?"no":"more than one"} anchor (lite/${Nd}ShaderPack.ts)`);
      return dd.slice(0, Wd) + kd + dd.slice(Wd + Jd.length)
    }

    function nk(dd) {
      return dd.sunShadow || dd.airShadow
    }

    function Uk(dd, Jd) {
      return Jd && nk(dd)
    }
    const yk = {
      group: MJ.f,
      ...MJ.t
    };

    function Dk(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!nk(dd)) return "";
      if (Jd) {
        const Jd = yk,
          Nd = "trace" === kd || "lit" === kd;
        let Wd = "";
        dd.sunShadow && (Wd = Nd ? `${sk(Jd,!0,"lit"===kd)}${pd=Jd,`@group(${pd.group}) @binding(${pd.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${pd.group}) @binding(${pd.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(dd, Jd, kd) {
          const pd = `@group(${dd}) @binding(${Jd}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return kd ? `${pd}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Fk}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((dd=>`\t{\n\t\tlet o = vec2i(${dd});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : pd
        }(Jd.group, MJ.w, "maskEdge" === kd));
        const Pd = {
          shadowDirection: `${MJ.m}.shadowDirection`,
          renderOffset: `${MJ.m}.renderOffset`,
          eyePosition: `${MJ.m}.eyePosition`
        };
        return `${Bk(Jd)}${Wd}${function(dd){const[Jd,kd,pd]=qk.u;return`@group(${dd.group}) @binding(${dd.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${dd.group}) @binding(${dd.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${Jd}.0, ${kd}.0, ${pd}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(Jd)}${Yk(dd,Pd,kd)}`
      }
      var pd;
      return `${dd.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${dd.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Tk(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!Jd) return "";
      const Wd = (Pd = "fragmentInputs.vPositionW", Zd = dd.sunShadow ? {
        normal: kd,
        flags: pd
      } : null, `\n\tbloxdSpShadowPosition = ${Pd};\n${Zd?`\tbloxdSpShadowNormal = normalize(${Zd.normal});\n\tbloxdSpShadowEmissive = (${Zd.flags} & ${CJ.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${Zd.flags} & ${CJ.g}u) != 0u;\n`:""}`);
      var Pd, Zd;
      return dd.sunShadow && ("mask" === Nd || "maskEdge" === Nd) ? `${Wd}${gd="fragmentInputs.position",Cd="maskEdge"===Nd,`\n\tbloxdSpShadowPixel = vec2i(${gd}.xy);\n${Cd?`\tbloxdSpShadowZ = ${gd}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${gd}.z), dpdy(${gd}.z));\n`:""}`}` : Wd;
      var gd, Cd
    }
    const Ek = "bloxdSpTextureRotation",
      ck = "bloxdSpTextureLayers",
      hk = `@group(${MJ.f}) @binding(${MJ.x}) var<storage, read> ${ck}: array<u32>;\n`;

    function rk(dd) {
      return `\tvertexOutputs.vPackTexture = ${ck}[min(u32(${dd}), arrayLength(&${ck}) - 1u)];\n`
    }

    function uk(dd) {
      return void 0 !== dd.uv
    }

    function tk(dd) {
      if (!dd) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (uk(dd)) return function(dd) {
        const {
          texture: Jd,
          cells: kd,
          layers: pd
        } = dd, Nd = `textureDimensions(${Jd}, bloxdSpLevel)`, Wd = kd ? `max(vec2u(vec2f(${Nd}) / ${kd}), vec2u(1u))` : Nd, Pd = kd ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Wd};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${kd}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${kd}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${Jd}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Nd} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Wd};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${Jd}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let Zd;
        if (kd)
          if (1 === pd.length) Zd = `\treturn bloxdSpOwnTexel(${pd[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const dd = pd.length - 1;
            Zd = `\tvar bloxdSpColour = bloxdSpOwnTexel(${pd[dd]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let Jd = dd - 1; Jd >= 0; Jd--) Zd += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${pd[Jd]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            Zd += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else Zd = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${dd.id?`var<private> ${mk}: u32;\n`:""}${Pd}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${bk(dd)};\n\treturn ${Wd};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${dd.id?mk:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${bk(dd)};\n${Zd}}\n`
      }(dd);
      const Jd = dd,
        kd = dd => {
          const kd = dd > 0 ? `bloxdSpLayer - ${Jd.layers*dd}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${dd}, ${Jd.sampler}, bloxdSpTurned, ${kd}, round(bloxdSpMipLevel));`
        };
      let pd = "";
      for (let Wd = 0; Wd < Jd.count - 1; Wd++) pd += `\tif (bloxdSpLayer < ${Jd.layers*(Wd+1)}u) {\n\t\t${kd(Wd)}\n\t}\n`;
      const Nd = Jd.frame ? `${Jd.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Ek}: u32;\n${hk}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Ek} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Ek} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Ek} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Nd}${pd}\t${kd(Jd.count-1)}\n}\n`
    }

    function Vk(dd, Jd, kd) {
      return !!dd.surface && "bloxdDefaultSurface" !== dd.surface && function(dd, Jd) {
        return "liquid" === Jd || !dd
      }(Jd, kd)
    }

    function zk(dd, Jd) {
      return dd.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${Jd.vertexLocalPosition}, ${jk(Jd.vertexFlags)});\n\t\tlet bloxdSpVertex = ${dd.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Hk(dd, Jd, kd, pd, Nd) {
      if (!dd.surface) return "";
      const Wd = (dd, Jd) => `\n\tlet bloxdSpTexelUV = ${dd};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${Jd}) - 1u));`;
      let Pd = "",
        Zd = "0u, 0u, vec2f(0.0), 0.0";
      const gd = pd && uk(pd) ? pd : null,
        Cd = pd && !uk(pd) ? pd : null;
      if (gd) {
        Pd = `${gd.id?`\n\tlet bloxdSpTexture = ${gd.id};\n\t${mk} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${gd.uv};${Wd(function(dd,Jd){var kd;return`${null!==(kd=dd.levelUv)&&void 0!==kd?kd:dd.cells?`${Jd} / ${dd.cells}`:Jd} * vec2f(textureDimensions(${dd.texture}))`}(gd,"bloxdSpUv"),gd.texture)}`, Zd = (gd.id ? `${mk}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Cd && (Pd = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Ek} = bloxdSpTexture >> 16u;${Wd(`fragmentInputs.vMainUV1 * ${(0,sJ.mb)(Cd.width)}`,"textureAtlas0")}`, Zd = `bloxdSpTexture & 0xffffu, ${Ek}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Kd = Nd.overlayColour,
        od = Kd ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        ld = "bloxdDefaultSurface" !== dd.surface || Kd ? `\n\tbaseColor = vec4f(${od}, baseColor.a);` : "",
        Qd = Vk(dd, Jd, kd) ? `\n\t${Nd.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Pd}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Nd.alpha}, ${Nd.enchantTier}, ${Nd.enchantColour}, ${Nd.enchantSpeed}, ${null!==Kd&&void 0!==Kd?Kd:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Nd.normal}, ${Nd.localPosition}, ${jk(Nd.flags)}, ${Zd});\n\tlet bloxdSpSurface = ${dd.surface}(bloxdSpSurfaceIn);${ld}${Qd}\n`
    }
    const wk = "bloxdSpLightIn";

    function Ak(dd, Jd, kd, pd) {
      if (!dd.light) return "";
      const Nd = Jd ? `${sJ.m}.rgb, ${sJ.m}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${sJ.i}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Wd,
          diffuse: Pd,
          emissive: Zd,
          ambient: gd,
          fogColour: Cd,
          fogAlpha: Kd,
          normal: od
        } = pd;
      return `\tvar ${wk} = BloxdLightIn(vec3f(0.0), ${kd?Wd:"0.0"}, ${Pd}, ${Zd}, ${gd}, ${Nd}, ${Cd}, ${Kd}, fragmentInputs.vPositionW, ${od}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${wk}.litColour = bloxdLitColour(bloxdSpSurface, ${wk});\n`
    }

    function dp(dd) {
      return dd.light ? `\n\t{\n\t\tlet bloxdSpLight = ${dd.light}(bloxdSpSurface, ${wk});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Jp = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      kp = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      pp = "\treturn color;\n}",
      Np = {
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
    const Wp = Object.freeze({});

    function Pp(dd) {
      var Jd;
      return !(null === (Jd = (0, FJ.f)(dd)) || void 0 === Jd || !Jd.sceneDepth)
    }

    function Zp(dd) {
      const Jd = (0, FJ.f)(dd);
      return !!Jd && Vk(Jd.hooks, Jd.strict, Jd.program)
    }

    function gp(dd, Jd, kd, pd) {
      return fk(dd, Jd, kd, pd, "terrain")
    }

    function Cp(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Wd = function(dd) {
          return (0, FJ.c)(dd.packVariant, dd.liquid ? "liquid" : "terrain")
        }(dd),
        {
          hooks: Pd
        } = Wd,
        Zd = Uk(Wd, pd),
        gd = "edge" === Nd ? "maskEdge" : "plain" === Nd ? "mask" : "trace",
        Cd = zk(Pd, Np);
      Cd && (Jd = gp(Jd, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Cd}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Kd = "atlas" === dd.texture ? {
          count: dd.atlasCount,
          layers: dd.atlasLayers,
          width: dd.J_,
          sampler: "atlasSampler",
          frame: dd.animated ? kd : null
        } : null,
        od = `${Wd.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Tk(Wd,Zd,Np.normal,Np.flags,gd)}${Hk(Pd,Wd.strict,Wd.program,Kd,Np)}`;
      od && (Jd = gp(Jd, Jp, `${Jp.slice(0,-1)}${od}`, "surface"));
      const ld = dp(Pd);
      return ld && (Jd = gp(Jd, kp, `${Ak(Pd,dd.lighting,dd.dirLightCount>0,Np)}${kp}`, "light input"), Jd = gp(Jd, pp, `${ld.slice(1)}${pp}`, "light")), `${(0,MJ.E)()}${Wd.sceneDepth?`@group(${MJ.f}) @binding(${MJ.s}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Xk};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Dk(Wd,Zd,gd)}${tk(Kd)}${Sk}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Wd.code}${Jd}`
    }
    const Kp = qd.d.WGSL;

    function op(dd) {
      return void 0 !== dd.packVariant
    }
    const lp = {
        lNd: 0,
        QNd: 4,
        LNd: 8,
        ONd: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Qp = lp.aoLevels + 4,
      Lp = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      Op = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      ep = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      Rp = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Ip = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      Gp = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      vp = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      xp = 0,
      qp = 3,
      Bp = 4,
      sp = 5,
      ip = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${iJ.c}, ${iJ.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${iJ.c}, ${iJ.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      ap = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((dd=>aJ.e>>dd&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const Mp = {
      Do: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: dd => `animDataPerTex[${dd}]`
    };

    function Fp(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mp;
      return `\n\tlet atlasIdxIn = ${dd};\n\tlet animTick = ${kd.Do};\n\tlet animTickStride = ${kd.stride};\n\tlet numAnimTextures = ${kd.count};\n\t${(0,Bd.g)(qd.d.WGSL,kd.perTexture)}\n\t${Jd}animLayer;\n`
    }

    function Yp(dd) {
      const Jd = (Jd, kd) => {
        const pd = Jd > 0 ? `fragmentInputs.texAtlasIndex - ${dd.atlasLayers.toFixed(1)} * ${Jd.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${kd?"textureSampleLevel":"textureSample"}(textureAtlas${Jd}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${pd}))${kd?", atlasLod":""})`
      };
      if (1 === dd.atlasCount) return `baseColor = ${Jd(0,!1)};`;
      let kd = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,sJ.mb)(dd.J_)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let pd = 0; pd < dd.atlasCount; pd++) {
        const Nd = dd.atlasLayers * (pd + 1) - .5;
        kd += `${pd>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,sJ.mb)(Nd)}) {\n\t\tbaseColor = ${Jd(pd,!0)};\n\t}`
      }
      return kd
    }

    function mp(dd) {
      return `terrain-${dd.texture}${"atlas"===dd.texture?dd.atlasCount:""}${dd.animated?"-anim":""}${dd.alphaTest?"-test":""}${dd.lighting?"-lit":""}-dir${dd.dirLightCount}${dd.packed?"-packed":""}${op(dd)?`-sp${dd.packVariant}`:""}${dd.liquid?"-liquid":""}${dd.resting?"-rest":""}`
    }

    function bp(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const pd = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const kd = "none" !== dd.texture,
          pd = "atlas" === dd.texture,
          Nd = dd.dirLightCount > 0,
          Wd = op(dd);
        if (dd.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${dd.dirLightCount}`);
        let Pd = 1,
          Zd = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (pd) {
          dd.animated && (Zd += `@group(2) @binding(${Pd++}) var<storage, read> animDataPerTex: array<f32>;\n`), Zd += `@group(2) @binding(${Pd++}) var atlasSampler: sampler;\n`;
          for (let Jd = 0; Jd < dd.atlasCount; Jd++) Zd += `@group(2) @binding(${Pd++}) var textureAtlas${Jd}: texture_2d_array<f32>;\n`
        } else "single" === dd.texture && (Zd += `@group(2) @binding(${Pd++}) var diffuseSamplerSampler: sampler;\n`, Zd += `@group(2) @binding(${Pd++}) var diffuseSampler: texture_2d<f32>;\n`);
        const gd = function(dd) {
            const Jd = vp,
              kd = "none" !== dd.texture,
              pd = "atlas" === dd.texture,
              Nd = op(dd);
            return dd.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${kd?"uv: vec2f,":""}\n\t${pd?"texAtlasIndices: f32,":""}\n\t${dd.lighting?"aPackedLightLevels: f32,":""}\n\t${Nd?"blockFlagWords: vec2u,":""}\n}\n${ip}\n${ap}\n${"single"===dd.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${kd?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===dd.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${pd?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${dd.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Nd?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${Jd.position}) position: vec3f,\n\t@location(${Jd.normal}) normal: vec4f,\n\t@location(${Jd.color}) color: vec4f,\n\t${kd?`@location(${Jd.uv}) uv: vec2f,`:""}\n\t${dd.lighting?`@location(${Jd.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Nd?`@location(${Jd.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(dd),
          Cd = `\n${Rp}\n${Op}\n${ep}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${Zd}\n${zd}\n${gd.declarations}\nstruct Varyings {\n\t${"none"===Jd?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${dd.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Nd?"@location(5) vTerrainLambert: f32,":""}\n\t${kd?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${pd?"@location(7) texAtlasIndex: f32,":""}\n\t${dd.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Wd?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Wd&&pd?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${dd.resting?"":(0,sJ.r)(Kp)}\n${Gp}\n\n@vertex\nfn mainVertex(${gd.parameter}) -> Varyings {\n\t${gd.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Wd?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${CJ.b.placed}u;`:""}\n\t${Wd&&pd?rk("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${dd.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${kd?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${pd?function(dd){return dd?Fp("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(dd.animated):""}\n\t${"single"===dd.texture&&dd.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,sJ.Y)(Kp)}\n\t${(0,sJ.C)(Kp,dd.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${dd.resting?"":Ip}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${pd?Yp(dd):""}\n\t${"single"===dd.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${kd?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${dd.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Nd?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${Vd}));\n\t${op(dd)?(0,sJ.eb)(qd.d.WGSL):(0,sJ.M)(Kp)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Kd = new Set;
        dd.lighting && Kd.add("BLOXD_LIGHTING");
        Nd && Kd.add("BLOXD_TERRAIN_DIRECTIONAL");
        return xJ(Cd, new Map([...Kd].map((dd => [dd, !0]))))
      }(dd, kd);
      if (!op(dd)) return pd;
      const Nd = Cp(dd, pd, Fp, Jd, kd);
      return "none" === kd ? Nd : `${Nd}${function(dd){const Jd="none"!==dd.texture&&dd.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${dd.resting?"":Ip}\n\t${dd.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Jd&&"atlas"===dd.texture?Yp(dd):""}\n\t${Jd&&"single"===dd.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Jd?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${CJ.b.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(dd)}`
    }
    const Sp = new Map([
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

    function jp(dd, Jd) {
      const kd = new Map;
      let pd = 0;
      const Nd = [],
        Wd = [],
        Pd = [];
      for (const Cd of Jd) {
        var Zd, gd;
        const Jd = null !== (Zd = Cd.type.trim().split(/\s+/).pop()) && void 0 !== Zd ? Zd : Cd.type,
          Kd = Sp.get(Jd);
        if (!Kd) throw new Error(`Lite: no uniform layout for ${Cd.name}: ${Cd.type}`);
        const od = null !== (gd = Cd.arraySize) && void 0 !== gd ? gd : 0,
          ld = od ? 4 : Kd.align;
        pd = Math.ceil(pd / ld) * ld;
        const Qd = od ? 4 * Math.ceil(Kd.floats / 4) : Kd.floats;
        if (kd.set(Cd.name, {
            offset: pd,
            floats: Kd.floats,
            arraySize: od,
            stride: Qd
          }), od && Kd.floats <= 2) {
          const Jd = `${dd}_${Pd.length}_strided`;
          Wd.push(`struct ${Jd} {\n\t@size(16) el: ${Kd.wgsl},\n}`), Pd.push(Cd.name), Nd.push(`\t@align(16) ${Cd.name}: array<${Jd}, ${od}>,`)
        } else od ? Nd.push(`\t@align(16) ${Cd.name}: array<${Kd.wgsl}, ${od}>,`) : Nd.push(`\t${Cd.name}: ${Kd.wgsl},`);
        pd += od ? Qd * od : Kd.floats
      }
      return {
        slots: kd,
        floats: Math.max(4, 4 * Math.ceil(pd / 4)),
        wgsl: `${Wd.join("\n")}\nstruct ${dd} {\n${Nd.join("\n")}\n}\n`,
        stridedArrays: Pd
      }
    }
    const Xp = [{
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
      fp = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      np = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function Up(dd, Jd) {
      return `#if defined(${dd}) && ${dd}DIRECTUV == 0\nvarying v${Jd}UV: vec2f;\n#endif`
    }

    function yp(dd, Jd, kd) {
      return `#if defined(${dd}) && ${dd}DIRECTUV == 0\nif (uniforms.v${Jd}Infos.x==0.)\n{vertexOutputs.v${Jd}UV= (uniforms.${kd}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${Jd}UV= (uniforms.${kd}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Dp(dd, Jd, kd) {
      return `#ifdef ${dd}\n#if ${dd}DIRECTUV == 1\n#define v${Jd}UV vMainUV1\n#elif ${dd}DIRECTUV == 2\n#define v${Jd}UV vMainUV2\n#else\nvarying v${Jd}UV: vec2f;\n#endif\nvar ${kd}SamplerSampler: sampler;\nvar ${kd}Sampler: texture_2d<f32>;\n#endif`
    }
    const Tp = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      Ep = 256,
      cp = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      hp = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      rp = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      tp = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      Vp = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      zp = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      Hp = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      wp = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${hp}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${Up("OPACITY","Opacity")}\n${Up("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${Hp}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${rp}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${yp("OPACITY","Opacity","opacity")}\n${yp("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${tp}\n#define CUSTOM_VERTEX_MAIN_END\n${Vp}\n}\n`;
    const Ap = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Dp("OPACITY","Opacity","opacity")}\n${Dp("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${Hp}\n${zp}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((dd,Jd)=>function(dd){const Jd=`
    frame.lights[LITE_LIGHT$ {
        dd
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      dd
    }\
    nvar diffuse$ {
      dd
    }: vec4f = $ {
      Jd
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      dd
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      Jd
    }.vLightData, diffuse$ {
      dd
    }.rgb, $ {
      Jd
    }.vLightSpecular.rgb, diffuse$ {
      dd
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(Jd))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, dN = /^([gimus]+)!/, JN = new Set;

    function kN(dd) {
      JN.has(dd) || (JN.add(dd), console.warn(`Lite: no place for plugin code at ${dd} in the standard shader: it is left out`))
    }

    function pN(dd, Jd) {
      let kd = dd;
      const pd = new Map;
      for (const [Wd, Pd] of Jd) {
        var Nd;
        pd.set(Wd, `${null!==(Nd=pd.get(Wd))&&void 0!==Nd?Nd:""}${Pd}\n`)
      }
      for (const [Wd, Pd] of pd) {
        if (!Wd.startsWith("!")) {
          const dd = `#define ${Wd}`;
          if (!kd.includes(dd)) {
            kN(Wd);
            continue
          }
          kd = kd.replace(dd, (() => `\n${Pd}\n${dd}`));
          continue
        }
        let dd = Wd.substring(1),
          Jd = "g";
        if (dd.startsWith("!")) Jd = "", dd = dd.substring(1);
        else {
          const kd = dN.exec(dd);
          kd && (Jd = kd[1], dd = dd.substring(Jd.length + 1))
        }
        const pd = new RegExp(dd, Jd.includes("g") ? Jd : `${Jd}g`);
        let Nd = pd.exec(kd);
        for (Nd || kN(Wd); Nd;) {
          const dd = Nd,
            Jd = Pd.replace(/\$(\d+)/g, ((Jd, kd) => Number(kd) < dd.length ? dd[Number(kd)] : ""));
          kd = kd.substring(0, dd.index) + Jd + kd.substring(dd.index + dd[0].length), pd.lastIndex = dd.index + Jd.length, Nd = pd.exec(kd)
        }
      }
      return kd
    }
    const NN = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      WN = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      PN = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function ZN(dd) {
      const Jd = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let kd = dd.replace(NN, ((dd, kd, pd, Nd, Wd, Pd) => ("attribute" === kd ? Jd.attributes.push({
        name: Wd,
        type: Pd
      }) : void 0 === kd ? Jd.varyings.push({
        name: Wd,
        type: Pd,
        interpolation: CN(Pd, pd, Nd)
      }) : Jd.uniforms.push({
        name: Wd,
        type: gN(Pd)
      }), "")));
      return kd = kd.replace(WN, ((dd, kd) => (Jd.samplers.add(kd), ""))), kd = kd.replace(PN, ((dd, kd, pd) => (Jd.textures.push({
        name: kd,
        type: pd
      }), ""))), Jd.body = kd, Jd
    }

    function gN(dd) {
      const Jd = dd.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        kd = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(Jd);
      if (!kd) throw new Error(`Lite: unsupported uniform type ${dd}`);
      return kd
    }

    function CN(dd, Jd, kd) {
      return void 0 === Jd && void 0 === kd ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(dd.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === Jd ? "@interpolate(flat) " : `@interpolate(${null!==Jd&&void 0!==Jd?Jd:"perspective"}, ${null!==kd&&void 0!==kd?kd:"center"}) `
    }

    function KN(dd) {
      return LN({
        defines: dd.defines,
        vertex: pN(wp, dd.vertexCode),
        fragment: pN(Ap, dd.fragmentCode),
        members: [...Xp, ...dd.defines.has("OPACITY") ? fp : [], ...dd.defines.has("EMISSIVE") ? np : [], ...dd.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function oN(dd) {
      const Jd = dd.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (Jd === dd) throw new Error("Lite: fragment main has no return");
      return Jd
    }
    const lN = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${hp}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${rp}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${tp}\n${Vp}\n}\n`,
      QN = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${zp}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function LN(dd) {
      const Jd = dd.defines,
        kd = ZN(xJ(dd.vertex, Jd)),
        pd = ZN(xJ(dd.fragment, Jd)),
        Nd = new Map;
      for (const Gd of [...kd.varyings, ...pd.varyings]) Nd.has(Gd.name) || Nd.set(Gd.name, Gd);
      const Wd = [...Nd.values()].map(((dd, Jd) => `\t@location(${Jd}) ${dd.interpolation}${dd.name}: ${dd.type},`)),
        Pd = [...dd.members];
      for (const Gd of [...kd.uniforms, ...pd.uniforms]) Pd.some((dd => dd.name === Gd.name)) || Pd.push(Gd);
      const Zd = jp(dd.structName, Pd),
        gd = [],
        Cd = [];
      let Kd = 1;
      const od = new Set;
      for (const Gd of [...kd.textures, ...pd.textures]) {
        if (od.has(Gd.name)) continue;
        od.add(Gd.name);
        const dd = `${Gd.name}Sampler`,
          Jd = Kd++,
          kd = Kd++,
          pd = Gd.type.startsWith("texture_2d_array") ? "2d-array" : Gd.type.startsWith("texture_cube") ? "cube" : "2d";
        gd.push({
          name: Gd.name,
          binding: Jd,
          samplerBinding: kd,
          dimension: pd
        }), Cd.push(`@group(2) @binding(${Jd}) var ${Gd.name}: ${Gd.type};`), Cd.push(`@group(2) @binding(${kd}) var ${dd}: sampler;`)
      }
      for (const Gd of [...kd.samplers, ...pd.samplers])
        if (!od.has(Gd.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Gd} has no texture`);
      const ld = [Rp, cp, Zd.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${dd.structName};`, ...Cd].join("\n"),
        Qd = kd.attributes,
        Ld = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...kd.attributes.map(((dd, Jd) => `\t@location(${Jd}) ${dd.name}: ${dd.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Od = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Wd, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        ed = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...pd.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Wd, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", zd, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${Vd}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        Rd = dd => {
          for (const Jd of Zd.stridedArrays) dd = dd.replace(new RegExp(`\\b${Jd}\\s*\\[(.*?)\\]`, "g"), `${Jd}[$1].el`);
          return dd
        };
      return {
        vertex: `${ld}\n${Ld}\n${Od}\n${Rd(kd.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${ld}\n${ed}\n${oN((Id=Rd(pd.body),Id.includes("fragmentInputs.position")?Id.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Id))}`,
        attributes: Qd,
        material: Zd,
        textures: gd
      };
      var Id
    }
    const ON = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      eN = dd => ({
        name: dd,
        type: "vec3"
      }),
      RN = dd => ({
        name: dd,
        type: "float"
      }),
      IN = jp("EarthSkyUniforms", [eN("viewFrom"), RN("exposureScale"), eN("zenithOffset"), RN("fogOn"), eN("up"), RN("ditherOn"), eN("sun"), RN("turbidity"), eN("tint"), RN("rayleigh"), eN("sunDir"), RN("mieStrength"), eN("inScatterR"), RN("mieFocus"), eN("inScatterM"), RN("sunE"), eN("extinctionBeta"), RN("sunsetMix"), RN("mieScale"), RN("mieBase"), RN("mieSlope"), RN("sunDiscE"), RN("exposure")]),
      GN = `${Rp}\n${cp}\n${IN.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      vN = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${ON.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      xN = `\n${zd}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(RJ).map((dd=>{let[Jd,kd]=dd;return`const TONE_${Jd}: f32 = ${kd};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${IJ};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${Vd}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var qN = kd(37245);
    const BN = new qN.IL,
      sN = new qN.IL,
      iN = new qN.Quaternion,
      aN = new Float64Array(3),
      MN = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      FN = new Float64Array(16);

    function YN(dd, Jd, kd) {
      const pd = kd.worldMatrix;
      var Nd;
      dd.updateFloat3("viewFrom", pd[12], pd[13], pd[14]), dd.updateFloatsFrom("zenithOffset", Jd.cameraOffset, 0, 3), dd.updateFloatsFrom("up", Jd.up, 0, 3), Jd.luminance > 0 && (dd.updateFloat("exposure", Jd.luminance), dd.updateFloat("exposureScale", (Nd = Jd.luminance, Math.log2(2 / Math.pow(Nd, 4))))), dd.updateFloat("turbidity", Jd.turbidity), dd.updateFloat("rayleigh", Jd.rayleigh), dd.updateFloat("mieStrength", Jd.mieCoefficient), dd.updateFloat("mieFocus", Jd.mieDirectionalG), dd.updateFloatsFrom("tint", Jd.tint, 0, 3), dd.updateFloat("fogOn", Jd.fog && kd.fogEnabled && 0 !== kd.fogMode ? 1 : 0), dd.updateFloat("ditherOn", Jd.dithering ? 1 : 0);
      const Wd = Jd.sunPosition;
      if (BN.set(Wd[0], Wd[1], Wd[2]), !Jd.useSunPosition) {
        const dd = Math.PI * (Jd.inclination - .5),
          kd = 2 * Math.PI * (Jd.azimuth - .5);
        BN.set(Jd.distance * Math.cos(kd) * Math.cos(dd), Jd.distance * Math.sin(-dd), Jd.distance * Math.sin(kd) * Math.cos(dd)), qN.Quaternion.FromUnitVectorsToRef(qN.IL.UpReadOnly, sN.set(Jd.up[0], Jd.up[1], Jd.up[2]), iN), BN.rotateByQuaternionToRef(iN, BN)
      }
      dd.updateVector3("sun", BN), aN[0] = BN.x, aN[1] = BN.y, aN[2] = BN.z;
      const Pd = eJ(Jd, aN, MN);
      dd.updateFloatsFrom("sunDir", Pd.sunDir, 0, 3), dd.updateFloat("sunE", Pd.sunE), dd.updateFloatsFrom("inScatterR", Pd.inScatterR, 0, 3), dd.updateFloatsFrom("inScatterM", Pd.inScatterM, 0, 3), dd.updateFloatsFrom("extinctionBeta", Pd.extinctionBeta, 0, 3), dd.updateFloat("sunsetMix", Pd.sunsetMix), dd.updateFloat("sunDiscE", Pd.sunDiscE), dd.updateFloat("mieScale", Pd.mieScale), dd.updateFloat("mieBase", Pd.mieBase), dd.updateFloat("mieSlope", Pd.mieSlope)
    }

    function mN(dd, Jd) {
      const kd = FN;
      kd[0] = Jd.far, kd[5] = Jd.far, kd[10] = Jd.far, kd[15] = 1;
      const pd = dd.infiniteDistance;
      for (let Nd = 0; Nd < 3; Nd++) kd[12 + Nd] = dd.position[Nd] + (pd ? Jd.worldMatrix[12 + Nd] : 0);
      return FN
    }
    var bN = kd(38853);

    function SN(dd) {
      return Math.max(4, 4 * Math.ceil(dd / 4))
    }

    function jN(dd, Jd, kd, pd) {
      const Nd = dd.createBuffer({
        label: pd,
        size: SN(Jd.byteLength),
        usage: kd,
        mappedAtCreation: !0
      });
      return new Uint8Array(Nd.getMappedRange(), 0, Jd.byteLength).set(new Uint8Array(Jd.buffer, Jd.byteOffset, Jd.byteLength)), Nd.unmap(), Nd
    }

    function XN(dd, Jd) {
      return Math.floor(Math.log2(Math.max(dd, Jd))) + 1
    }

    function fN(dd, Jd, kd, pd, Nd, Wd) {
      const Pd = dd.createTexture({
          label: Wd,
          size: {
            width: kd,
            height: pd,
            depthOrArrayLayers: Nd
          },
          format: "rgba8unorm",
          mipLevelCount: XN(kd, pd),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        Zd = (Jd, kd, pd, Wd) => {
          dd.queue.writeTexture({
            texture: Pd,
            mipLevel: kd
          }, Jd, {
            bytesPerRow: 4 * pd,
            rowsPerImage: Wd
          }, {
            width: pd,
            height: Wd,
            depthOrArrayLayers: Nd
          })
        };
      Zd(Jd, 0, kd, pd);
      let gd = 1;
      for (const Cd of function*(dd, Jd, kd, pd) {
          let Nd = dd,
            Wd = Jd,
            Pd = kd;
          for (; Wd > 1 || Pd > 1;) {
            const dd = Math.max(1, Wd >> 1),
              Jd = Math.max(1, Pd >> 1),
              kd = new Uint8Array(dd * Jd * pd * 4),
              Zd = 4 * Wd;
            let gd = 0;
            for (let Cd = 0; Cd < pd; Cd++) {
              const pd = Cd * Zd * Pd;
              for (let Cd = 0; Cd < Jd; Cd++) {
                const Jd = pd + Math.min(2 * Cd, Pd - 1) * Zd,
                  Kd = pd + Math.min(2 * Cd + 1, Pd - 1) * Zd;
                for (let pd = 0; pd < dd; pd++) {
                  const dd = 4 * Math.min(2 * pd, Wd - 1),
                    Pd = 4 * Math.min(2 * pd + 1, Wd - 1);
                  for (let pd = 0; pd < 4; pd++) kd[gd++] = Nd[Jd + dd + pd] + Nd[Jd + Pd + pd] + Nd[Kd + dd + pd] + Nd[Kd + Pd + pd] + 2 >> 2
                }
              }
            }
            yield {
              data: kd,
              width: dd,
              height: Jd
            }, Nd = kd, Wd = dd, Pd = Jd
          }
        }(Jd, kd, pd, Nd)) Zd(Cd.data, gd++, Cd.width, Cd.height);
      return Pd
    }
    const nN = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function UN(dd) {
      if (dd.startsWith("data:")) {
        const Jd = dd.search(/[;,]/);
        return `data:${Jd>5?dd.slice(5,Jd):""} URL of ${dd.length} characters`
      }
      return dd.length > 80 ? `${dd.slice(0,80)}...` : dd
    }
    async function yN(dd) {
      const Jd = await fetch(dd);
      if (!Jd.ok) throw new Error(`${UN(dd)}: ${Jd.status} ${Jd.statusText}`);
      return createImageBitmap(await Jd.blob(), nN)
    }
    async function DN(dd) {
      const Jd = await yN(dd),
        kd = new OffscreenCanvas(Jd.width, Jd.height),
        pd = kd.getContext("2d", {
          willReadFrequently: !0
        });
      if (!pd) throw new Error("No 2D context to decode an image");
      pd.drawImage(Jd, 0, 0);
      const {
        data: Nd
      } = pd.getImageData(0, 0, Jd.width, Jd.height);
      return Jd.close(), {
        pixels: new Uint8Array(Nd.buffer, Nd.byteOffset, Nd.byteLength),
        width: kd.width,
        height: kd.height
      }
    }
    const TN = new WeakMap;

    function EN(dd, Jd, kd, pd) {
      var Nd;
      const Wd = null !== (Nd = TN.get(dd)) && void 0 !== Nd ? Nd : new Map;
      TN.set(dd, Wd);
      let Pd = Wd.get(Jd);
      return Pd || (Pd = (async Nd => {
        const Wd = null !== (Nd = function(dd, Jd) {
          const kd = dd ? new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength) : null;
          return null !== kd && void 0 !== kd && kd.byteLength && Jd && kd.byteLength % (Jd * Jd * 4) === 0 ? {
            pixels: kd,
            layerWidth: Jd,
            layers: kd.byteLength / (Jd * Jd * 4)
          } : null
        }(kd, pd)) && void 0 !== Nd ? Nd : await async function(dd) {
          const {
            pixels: Jd,
            width: kd
          } = await DN(dd);
          return {
            pixels: Jd,
            layerWidth: kd,
            layers: Jd.byteLength / (kd * kd * 4)
          }
        }(Jd), {
          layerWidth: Pd,
          layers: Zd
        } = Wd;
        return {
          texture: fN(dd, Wd.pixels, Pd, Pd, Zd, `atlas-${Jd}`),
          layerWidth: Pd,
          layers: Zd
        }
      })(), Wd.set(Jd, Pd), Pd.catch((() => {
        Wd.delete(Jd)
      }))), Pd
    }
    const cN = new Map([
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
      hN = new Map([
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

    function rN(dd) {
      for (const Jd of (0, bN.o)(dd))
        if (!hN.has((0, bN.k)(Jd))) return !1;
      return !0
    }

    function uN(dd) {
      const Jd = hN.get(dd);
      if (!Jd) return null;
      const [kd, pd, Nd] = Jd;
      return {
        srcFactor: cN.get(kd),
        dstFactor: cN.get(pd),
        operation: Nd
      }
    }
    let tN = null;

    function VN(dd) {
      tN = dd
    }

    function zN(dd, Jd, kd) {
      var pd;
      null === (pd = tN) || void 0 === pd || pd(dd, Jd, kd, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class HN {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(dd, Jd, kd, pd, Nd) {
        kd !== this.pipeline && (dd.setPipeline(kd), this.pipeline = kd), dd.setBindGroup(1, pd, [Nd]);
        const Wd = Jd.material.bindGroup;
        Wd !== this.materialGroup && (dd.setBindGroup(2, Wd), this.materialGroup = Wd);
        const Pd = Jd.program.packGroup;
        Pd && Pd !== this.packGroup && (dd.setBindGroup(MJ.f, Pd), this.packGroup = Pd);
        const {
          vertexBuffers: Zd,
          vertexOffsets: gd
        } = this;
        for (let Cd = 0; Cd < Jd.vertexBuffers.length; Cd++) Zd[Cd] === Jd.vertexBuffers[Cd] && gd[Cd] === Jd.vertexOffsets[Cd] || (dd.setVertexBuffer(Cd, Jd.vertexBuffers[Cd], Jd.vertexOffsets[Cd]), Zd[Cd] = Jd.vertexBuffers[Cd], gd[Cd] = Jd.vertexOffsets[Cd]);
        Jd.indexBuffer && Jd.indexBuffer !== this.indexBuffer && (dd.setIndexBuffer(Jd.indexBuffer, Jd.indexFormat), this.indexBuffer = Jd.indexBuffer)
      }
    }
    class wN {
      constructor(dd, Jd, kd, pd) {
        this.modelMeshes = dd, this.I5 = Jd, this.maker = kd, this.warnOnce = pd, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(dd) {
        this.collectGroup(dd, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(dd, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(dd, 1, this.frontDraws, this.frontDraws, !0);
        for (const Jd of this.modelMeshes.groupIds())(Jd < -1 || Jd > 1) && this.warnOnce(`group:${Jd}`, `rendering group ${Jd} is not drawn`);
        for (const Jd of this.I5.groupIds())(Jd < -1 || Jd > 1) && this.warnOnce(`group:${Jd}`, `rendering group ${Jd} is not drawn`);
        this.opaqueDraws.sort(AN), this.transparentDraws.sort(dW)
      }
      collectGroup(dd, Jd, kd, pd, Nd) {
        const Wd = this.modelMeshes.group(Jd),
          Pd = this.I5.group(Jd),
          Zd = 0 === Jd ? null === Pd || void 0 === Pd ? void 0 : Pd.opaque : void 0;
        this.collectList(dd, null === Wd || void 0 === Wd ? void 0 : Wd.opaque, Zd || null === Pd || void 0 === Pd ? void 0 : Pd.opaque, Jd, !1, kd, Nd), Zd && (this.I5.drawn += this.maker.bundleDraws(dd, Zd, Jd)), this.collectList(dd, null === Wd || void 0 === Wd ? void 0 : Wd.alphaTest, void 0, Jd, !1, kd, Nd), this.collectList(dd, null === Wd || void 0 === Wd ? void 0 : Wd.transparent, null === Pd || void 0 === Pd ? void 0 : Pd.transparent, Jd, !0, pd, Nd)
      }
      collectList(dd, Jd, kd, pd, Nd, Wd, Pd) {
        var Zd;
        const gd = Wd.length;
        Jd && this.maker.pushDraws(dd, Jd.units, Jd.units.length, pd, Nd, Wd, Jd.rows), kd && (this.I5.drawn += this.maker.pushDraws(dd, kd, kd.length, pd, Nd, Wd));
        const Cd = Nd ? null === (Zd = this.modelMeshes.group(pd)) || void 0 === Zd ? void 0 : Zd.text : void 0;
        Cd && this.maker.pushDraws(dd, Cd.units, Cd.units.length, pd, !0, Wd, Cd.rows), Pd && JW(Wd, gd)
      }
    }

    function AN(dd, Jd) {
      return dd.program.id - Jd.program.id || dd.material.owner.uniqueId - Jd.material.owner.uniqueId
    }

    function dW(dd, Jd) {
      return dd.material.owner.uniqueId - Jd.material.owner.uniqueId
    }

    function JW(dd, Jd) {
      for (let kd = Jd + 1; kd < dd.length; kd++) {
        const pd = dd[kd];
        let Nd = kd - 1;
        for (; Nd >= Jd && dW(dd[Nd], pd) > 0; Nd--) dd[Nd + 1] = dd[Nd];
        dd[Nd + 1] = pd
      }
    }
    const kW = {};

    function pW(dd) {
      return dd.hasThinInstances ? "thin" : dd.eNd || dd._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function NW(dd, Jd, kd) {
      return dd ? (kd._needUVs = !0, dd.optimizeUVAllocation && (0, Fd.H)(dd.matrix) ? (kd[`${Jd}DIRECTUV`] = dd.uvSet + 1, kd[`MAINUV${dd.uvSet+1}`] = !0) : kd[`${Jd}DIRECTUV`] = 0, !0) : (kd[`${Jd}DIRECTUV`] = 0, !1)
    }

    function WW(dd) {
      const Jd = new Map;
      for (const kd in dd) {
        if (95 === kd.charCodeAt(0)) continue;
        const pd = dd[kd],
          Nd = typeof pd;
        "number" === Nd || "string" === Nd ? Jd.set(kd, String(pd)) : pd && "function" !== Nd && Jd.set(kd, !0)
      }
      return Jd
    }

    function PW(dd) {
      const Jd = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: kd
        }
        of dd.features)
        for (const dd in kd) Jd[dd] = kd[dd];
      return Jd
    }

    function ZW(dd) {
      const Jd = dd.parts.geometry;
      return null !== Jd && void 0 !== Jd && Jd.live ? Jd : null
    }

    function gW(dd) {
      var Jd;
      return null !== (Jd = ZW(dd)) && void 0 !== Jd ? Jd : kW
    }
    class CW {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = dd, this.warnOnce = Jd, this.programWithModel = kd, this.packFailed = pd, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(dd, Jd, kd, pd, Nd) {
        const Wd = Jd.owner;
        let Pd = this.drawStates.get(Jd);
        if (!Pd) {
          const dd = Jd.parts.materials[Jd.range];
          if (!dd) return this.warnOnce("model", `${kd.name} on ${Wd.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Pd = {
            defines: PW(dd),
            model: dd,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Nd,
            groupId: pd,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(Jd, Pd)
        }
        if (this.programCurrent(Pd, Jd, Nd, pd)) return Pd.program;
        const {
          model: Zd
        } = Pd, gd = gW(Jd), Cd = this.instanceLayout(Wd, Nd), Kd = this.definesBits(Wd);
        if (!this.prepareModelDefines(dd, Wd, Zd, Pd.defines, pd, Nd)) return null;
        Pd.instancing = Nd, Pd.groupId = pd, Pd.modelVersion = Zd.version, Pd.geometry = gd, Pd.instanceLayout = Cd, Pd.definesBits = Kd;
        const od = function(dd) {
          let Jd = "";
          for (const [kd, pd] of dd) Jd += !0 === pd ? `${kd};` : `${kd}=${pd};`;
          return Jd
        }(WW(Pd.defines));
        return od === Pd.definesKey && Pd.packVariant === this.modelPackVariant && Pd.program && !this.packFailed(Pd.program) || (Pd.definesKey = od, Pd.packVariant = this.modelPackVariant, Pd.program = this.programWithModel(Zd, Pd.defines, od)), Pd.program
      }
      programCurrent(dd, Jd, kd, pd) {
        return null !== dd.program && !this.packFailed(dd.program) && dd.instancing === kd && dd.groupId === pd && this.definesHold(dd, Jd, kd)
      }
      definesHold(dd, Jd, kd) {
        return dd.modelVersion === dd.model.version && dd.geometry === gW(Jd) && dd.instanceLayout === this.instanceLayout(Jd.owner, kd) && dd.definesBits === this.definesBits(Jd.owner) && dd.packVariant === this.modelPackVariant
      }
      modelPackKind(dd) {
        var Jd;
        return 0 === this.modelPackVariant ? null : null !== (Jd = (0, ad.v)(dd, sd.f.name)) && void 0 !== Jd && Jd.active ? "placed" : dd.item ? "item" : dd.lifeform ? "lifeform" : dd.box ? "box" : null
      }
      instanceLayout(dd, Jd) {
        var kd, pd, Nd;
        return "thin" === Jd ? null !== (Nd = this.resources.S_.get(dd)) && void 0 !== Nd ? Nd : null : "instanced" === Jd && null !== (kd = null === (pd = dd._userInstancedBuffersStorage) || void 0 === pd ? void 0 : pd.interleavedKinds) && void 0 !== kd ? kd : null
      }
      definesBits(dd) {
        const Jd = this.view;
        return (dd.visibility < 1 ? 1 : 0) | (dd.hasVertexAlpha ? 2 : 0) | (dd.applyFog ? 4 : 0) | (dd.useVertexColors ? 8 : 0) | (dd.nonUniformScaling ? 16 : 0) | (Jd.fogEnabled && 0 !== Jd.fogMode ? 32 : 0) | (Jd.lightsEnabled ? 64 : 0) | Jd.lightCount << 7
      }
      prepareLightDefines(dd, Jd, kd) {
        let pd = 0;
        if (this.view.lightsEnabled && !Jd) {
          const Jd = Math.min(kd, 4);
          for (; pd < this.view.lightCount && (dd[`LIGHT${pd}`] = !0, dd[`LITE_LIGHT${pd}_SLOT`] = pd, pd++, dd._needNormals = !0, pd !== Jd););
        }
        for (let Nd = pd; Nd < 4; Nd++) dd[`LIGHT${Nd}`] = !1, dd[`LITE_LIGHT${Nd}_SLOT`] = void 0
      }
      prepareModelDefines(dd, Jd, kd, pd, Nd, Wd) {
        const {
          features: Pd
        } = kd;
        pd._needNormals = !1, pd._needUVs = !1;
        const Zd = this.view;
        this.prepareLightDefines(pd, kd.disableLighting, kd.maxSimultaneousLights), pd.MAINUV1 = !1, pd.MAINUV2 = !1;
        const gd = kd.diffuseTexture;
        gd ? (pd._needUVs = !0, pd.DIFFUSE = !0, gd.optimizeUVAllocation && (0, Fd.H)(gd.matrix) ? (pd.DIFFUSEDIRECTUV = gd.uvSet + 1, pd[`MAINUV${gd.uvSet+1}`] = !0) : pd.DIFFUSEDIRECTUV = 0, gd.uvSet > 1 && this.warnOnce(`uvset:${kd.name}`, `${kd.name} samples UV set ${gd.uvSet+1}, which is not supported`)) : (pd.DIFFUSE = !1, pd.DIFFUSEDIRECTUV = 0);
        const Cd = kd.opacityTexture,
          Kd = kd.emissiveTexture;
        pd.OPACITY = NW(Cd, "OPACITY", pd), pd.OPACITYRGB = null !== Cd && Cd.getAlphaFromRGB, pd.EMISSIVE = NW(Kd, "EMISSIVE", pd), (Cd && Cd.uvSet > 1 || Kd && Kd.uvSet > 1) && this.warnOnce(`uvset:${kd.name}`, `${kd.name} samples a UV set past 2, which is not supported`);
        const od = kd.reflectionTexture,
          ld = null !== od;
        if (ld) {
          if (!this.resources.boundTexture(od)) return !1;
          pd._needNormals = !0
        }
        pd.REFLECTION = ld, pd.REFLECTIONMAP_3D = ld, pd.REFLECTIONMAP_SKYBOX = ld, pd.REFLECTIONMAP_OPPOSITEZ = ld && (dd.useRightHandedSystem ? !od.invertZ : od.invertZ), pd.ROUGHNESS = ld && kd.roughness > 0, pd.REFLECTIONOVERALPHA = ld && kd.useReflectionOverAlpha, pd.LITE_REFLECTION_LUMINANCE = ld && "cube" === od.source.kind && od.source.luminance, (Jd.skeleton || Jd.morphTargetManager) && this.warnOnce(`skin:${Jd.name}`, `${Jd.name} has bones or morph targets, which are not supported`), pd.FOG = kd.fogEnabled && Jd.applyFog && Zd.fogEnabled && 0 !== Zd.fogMode, pd.NONUNIFORMSCALING = Jd.nonUniformScaling;
        const {
          visibility: Qd,
          hasVertexAlpha: Ld
        } = Jd;
        pd.ALPHATEST = (0, ad.S)(kd, Qd, Ld), pd.ALPHAFROMDIFFUSE = (0, ad.fb)(kd), pd.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== kd.transparencyMode, pd.ALPHABLEND = null === kd.transparencyMode || (0, ad.P)(kd, Qd, Ld), pd.PREMULTIPLYALPHA = 7 === kd.alphaMode || 8 === kd.alphaMode, pd.EMISSIVEASILLUMINATION = kd.useEmissiveAsIllumination, pd.LINKEMISSIVEWITHDIFFUSE = kd.linkEmissiveWithDiffuse, pd.TWOSIDEDLIGHTING = !kd.backFaceCulling && kd.twoSidedLighting, pd.INSTANCES = "none" !== Wd, pd.THIN_INSTANCES = "thin" === Wd, pd.LITE_FRONT_LAYER = Nd >= 1;
        for (const {
            feature: Bd,
            state: sd,
            active: ad
          }
          of Pd) {
          var Od, ed;
          if (ad) null === (Od = (ed = (0, oJ.i)(Bd)).prepareDefinesBeforeAttributes) || void 0 === Od || Od.call(ed, sd, pd, dd, Jd)
        }
        this.modelPackKind(kd) && (pd._needNormals = !0), pd.NORMAL = pd._needNormals && Jd.isVerticesDataPresent("normal"), pd.UV1 = pd._needUVs && Jd.isVerticesDataPresent("uv"), pd.UV2 = pd._needUVs && Jd.isVerticesDataPresent("uv2");
        const Rd = Jd.useVertexColors && Jd.isVerticesDataPresent("color");
        pd.VERTEXCOLOR = Rd, pd.VERTEXALPHA = Jd.hasVertexAlpha && Rd, pd.INSTANCESCOLOR = "none" !== Wd && Jd.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Bd,
            state: sd,
            active: ad
          }
          of Pd) {
          var Id, Gd;
          if (ad) null === (Id = (Gd = (0, oJ.i)(Bd)).prepareDefines) || void 0 === Id || Id.call(Gd, sd, pd, dd, Jd, kd)
        }
        const vd = dd.eL();
        for (const {
            feature: Bd,
            state: sd,
            active: ad
          }
          of Pd) {
          var xd, qd;
          if (ad && !1 === (null === (xd = (qd = (0, oJ.i)(Bd)).isReadyForSubMesh) || void 0 === xd ? void 0 : xd.call(qd, sd, pd, dd, vd))) return !1
        }
        return !0
      }
    }

    function KW(dd, Jd, kd) {
      return dd.codeVersion !== Jd.version && function(dd, Jd) {
        const kd = [],
          pd = [];
        for (const {
            feature: ld,
            state: Qd,
            active: Ld
          }
          of Jd.features) {
          var Nd, Wd, Pd, Zd;
          if (Ld) oW(null === (Nd = (Wd = (0, oJ.i)(ld)).getCustomCode) || void 0 === Nd ? void 0 : Nd.call(Wd, Qd, "vertex", qd.d.WGSL), kd), oW(null === (Pd = (Zd = (0, oJ.i)(ld)).getCustomCode) || void 0 === Pd ? void 0 : Pd.call(Zd, Qd, "fragment", qd.d.WGSL), pd)
        }
        const gd = [];
        for (const {
            feature: ld,
            state: Qd
          }
          of Jd.features) {
          var Cd, Kd;
          const dd = null === (Cd = (Kd = (0, oJ.i)(ld)).getUniforms) || void 0 === Cd ? void 0 : Cd.call(Kd, Qd, qd.d.WGSL);
          for (const Jd of null !== (od = null === dd || void 0 === dd ? void 0 : dd.ubo) && void 0 !== od ? od : []) {
            var od;
            Jd.size && Jd.type && gd.push({
              name: Jd.name,
              type: Jd.type,
              arraySize: Jd.arraySize
            })
          }
        }
        dd.vertexCode = kd, dd.fragmentCode = pd, dd.pluginUniforms = gd, dd.codeKey = JSON.stringify([kd, pd, gd]), dd.codeVersion = Jd.version
      }(dd, Jd), `${kd}#${dd.codeKey}`
    }

    function oW(dd, Jd) {
      if (dd)
        for (const kd in dd) dd[kd] && Jd.push([kd, dd[kd]])
    }
    const lW = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class QW {
      constructor(dd) {
        this.warnOnce = dd, this.states = new Map
      }
      renderState(dd, Jd, kd, pd) {
        var Nd;
        let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Pd = null !== (Nd = dd.sideOrientation) && void 0 !== Nd ? Nd : Jd.sideOrientation;
        Jd._getWorldMatrixDeterminant() < 0 && (Pd = 0 === Pd ? 1 : 0);
        const Zd = "triangle-list" === Wd,
          gd = kd ? dd.alphaMode : 0,
          Cd = (!kd || (0 === gd || dd.forceDepthWrite)) && !dd.disableDepthWrite,
          Kd = Zd && dd.backFaceCulling ? dd.cullBackFaces ? "back" : "front" : "none",
          od = Zd && 0 !== Pd ? "ccw" : "cw",
          ld = dd.depthFunction,
          Qd = Zd ? dd.zOffset : 0,
          Ld = Zd ? dd.zOffsetUnits : 0,
          Od = !dd.disableColorWrite;
        return pd && pd.alphaMode === gd && pd.depthWrite === Cd && pd.depthFunction === ld && pd.cullMode === Kd && pd.frontFace === od && pd.zOffset === Qd && pd.zOffsetUnits === Ld && pd.colourWrite === Od && pd.topology === Wd ? pd : this.stateFor(gd, Cd, ld, Kd, od, Qd, Ld, Od, Wd)
      }
      stateFor(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        const Cd = `${dd}|${Jd}|${kd}|${pd}|${Nd}|${Wd}|${Pd}|${Zd}|${gd}`;
        let Kd = this.states.get(Cd);
        if (!Kd) {
          var od;
          const ld = dd ? uN(dd) : null;
          dd && !ld && this.warnOnce(`alpha:${dd}`, `alpha mode ${dd} is not supported`), Kd = {
            key: Cd,
            alphaMode: dd,
            depthFunction: kd,
            zOffset: Wd,
            zOffsetUnits: Pd,
            topology: gd,
            blend: ld,
            depthWrite: Jd,
            depthCompare: kd && null !== (od = lW.get(kd)) && void 0 !== od ? od : null,
            cullMode: pd,
            frontFace: Nd,
            depthBias: -Pd,
            depthBiasSlopeScale: -Wd,
            colourWrite: Zd
          }, this.states.set(Cd, Kd)
        }
        return Kd
      }
    }
    var LW = kd(37627);

    function OW(dd) {
      if (!dd.frozen) return -1;
      let Jd = dd.version;
      for (const {
          feature: kd,
          state: pd,
          active: Nd
        }
        of dd.features) {
        if (!Nd || !kd.bind) continue;
        const dd = (0, oJ.i)(kd).uniformsVersion;
        if (!dd) return -1;
        Jd += dd(pd)
      }
      return Jd
    }
    class eW {
      constructor(dd, Jd, kd) {
        this.slots = dd, this.data = Jd, this.textures = kd, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(dd, Jd) {
        this.write4(dd, Jd, 0, 0, 0, 1)
      }
      updateFloat2(dd, Jd, kd) {
        this.write4(dd, Jd, kd, 0, 0, 2)
      }
      updateFloat3(dd, Jd, kd, pd) {
        this.write4(dd, Jd, kd, pd, 0, 3)
      }
      updateFloat4(dd, Jd, kd, pd, Nd) {
        this.write4(dd, Jd, kd, pd, Nd, 4)
      }
      updateVector3(dd, Jd) {
        this.write4(dd, Jd.x, Jd.y, Jd.z, 0, 3)
      }
      updateVector4(dd, Jd) {
        this.write4(dd, Jd.x, Jd.y, Jd.z, Jd.w, 4)
      }
      updateColor3(dd, Jd) {
        this.write4(dd, Jd.r, Jd.g, Jd.b, 0, 3)
      }
      updateColor4(dd, Jd, kd) {
        this.write4(dd, Jd.r, Jd.g, Jd.b, kd, 4)
      }
      updateFloatsFrom(dd, Jd, kd, pd) {
        const Nd = this.slots.get(dd);
        if (!Nd) return;
        const Wd = this.data,
          Pd = Nd.offset;
        for (let Zd = 0; Zd < pd; Zd++) Wd[Pd + Zd] = Jd[kd + Zd]
      }
      updateFloat3TimesFloats(dd, Jd, kd, pd) {
        const Nd = this.slots.get(dd);
        if (!Nd) return;
        const Wd = this.data,
          Pd = Nd.offset;
        Wd[Pd] = Jd[kd] * pd[0], Wd[Pd + 1] = Jd[kd + 1] * pd[1], Wd[Pd + 2] = Jd[kd + 2] * pd[2]
      }
      o3(dd, Jd) {
        const kd = this.slots.get(dd);
        kd && this.data.set(Jd.m, kd.offset)
      }
      updateMatrixFloats(dd, Jd) {
        const kd = this.slots.get(dd);
        kd && this.data.set(Jd, kd.offset)
      }
      updateFloatArray(dd, Jd) {
        const kd = this.slots.get(dd);
        if (!kd) return;
        if (!kd.arraySize || kd.stride === kd.floats) return void this.data.set(Jd, kd.offset);
        const pd = Math.min(Jd.length, kd.floats * kd.arraySize);
        for (let Nd = 0; Nd < pd; Nd++) this.data[kd.offset + Math.floor(Nd / kd.floats) * kd.stride + Nd % kd.floats] = Jd[Nd]
      }
      updateArray(dd, Jd) {
        this.updateFloatArray(dd, Jd)
      }
      setTexture(dd, Jd) {
        this.textures.set(dd, Jd), this.expected.delete(dd)
      }
      expectTexture(dd) {
        this.textures.set(dd, null), this.expected.add(dd)
      }
      write4(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = this.slots.get(dd);
        if (!Pd) return;
        const Zd = this.data,
          gd = Pd.offset;
        Zd[gd] = Jd, Wd > 1 && (Zd[gd + 1] = kd), Wd > 2 && (Zd[gd + 2] = pd), Wd > 3 && (Zd[gd + 3] = Nd)
      }
    }

    function RW(dd, Jd) {
      const kd = Tp,
        pd = LW.h,
        Nd = dd.lights,
        Wd = Math.min(dd.lightCount, 8);
      for (let Pd = 0; Pd < Wd; Pd++) {
        const dd = kd.lights + Pd * kd.lightStride,
          Wd = Pd * LW.c;
        Jd[dd] = Nd[Wd + pd.vector], Jd[dd + 1] = Nd[Wd + pd.vector + 1], Jd[dd + 2] = Nd[Wd + pd.vector + 2], Jd[dd + 3] = Nd[Wd + pd.kind] === LW.g.directional ? 1 : 0, Jd[dd + 4] = Nd[Wd + pd.diffuse], Jd[dd + 5] = Nd[Wd + pd.diffuse + 1], Jd[dd + 6] = Nd[Wd + pd.diffuse + 2], Jd[dd + 7] = Nd[Wd + pd.range], Jd[dd + 8] = Nd[Wd + pd.specular], Jd[dd + 9] = Nd[Wd + pd.specular + 1], Jd[dd + 10] = Nd[Wd + pd.specular + 2], Jd[dd + 11] = Nd[Wd + pd.range]
      }
      Jd[kd.fogInfos] = dd.fogMode, Jd[kd.fogInfos + 1] = dd.fogStart, Jd[kd.fogInfos + 2] = dd.fogEnd, Jd[kd.fogInfos + 3] = dd.fogDensity, Jd[kd.fogColour] = dd.fogColour[0], Jd[kd.fogColour + 1] = dd.fogColour[1], Jd[kd.fogColour + 2] = dd.fogColour[2], Jd[kd.outputHeight] = dd.renderHeight, Jd[kd.animTick] = dd.animTick, Jd[kd.timeMs] = dd.timeMs
    }
    class IW {
      constructor(dd) {
        this.instancesOf = dd
      }
      refreshModelUniforms(dd, Jd, kd, pd) {
        const Nd = OW(kd);
        if (Nd >= 0 && Nd === Jd.heldVersion && Jd.textures.get("diffuseSampler") === kd.diffuseTexture && Jd.textures.get("reflectionCubeSampler") === kd.reflectionTexture && Jd.textures.get("opacitySampler") === kd.opacityTexture && Jd.textures.get("emissiveSampler") === kd.emissiveTexture) return !0;
        if (Nd < 0)
          for (const Wd of this.instancesOf(kd)) Wd.heldVersion = -1;
        return this.writeModelUniforms(dd, Jd, kd, pd), Jd.heldVersion = Nd, !1
      }
      writeModelUniforms(dd, Jd, kd, pd) {
        const {
          ubo: Nd
        } = Jd, Wd = kd.diffuseTexture, Pd = kd.diffuseColor;
        Nd.updateFloat4("vDiffuseColor", Pd[0], Pd[1], Pd[2], kd.alpha), Wd && (Nd.updateFloat2("vDiffuseInfos", Wd.uvSet, Wd.level), Nd.updateMatrixFloats("diffuseMatrix", Wd.matrix)), Nd.updateFloat("alphaCutOff", kd.alphaCutOff), Nd.updateFloatsFrom("vEmissiveColor", kd.emissiveColor, 0, 3), Nd.updateFloat3TimesFloats("vAmbientColor", pd.ambientColour, 0, kd.ambientColor);
        const Zd = kd.specularColor;
        Nd.updateFloat4("vSpecularColor", Zd[0], Zd[1], Zd[2], kd.specularPower), Nd.setTexture("diffuseSampler", Wd);
        const gd = kd.opacityTexture;
        gd && (Nd.updateFloat2("vOpacityInfos", gd.uvSet, gd.level), Nd.updateMatrixFloats("opacityMatrix", gd.matrix)), Nd.setTexture("opacitySampler", gd);
        const Cd = kd.emissiveTexture;
        Cd && (Nd.updateFloat2("vEmissiveInfos", Cd.uvSet, Cd.level), Nd.updateMatrixFloats("emissiveMatrix", Cd.matrix)), Nd.setTexture("emissiveSampler", Cd);
        const Kd = kd.reflectionTexture;
        Kd && Nd.updateMatrixFloats("reflectionMatrix", Kd.matrix), Nd.updateFloat2("vReflectionInfos", Kd ? Kd.level * dd.iblIntensity : 0, kd.roughness), Nd.setTexture("reflectionCubeSampler", Kd);
        const od = dd.eL();
        for (const {
            feature: Ld,
            state: Od,
            active: ed
          }
          of kd.features) {
          var ld, Qd;
          if (ed) null === (ld = (Qd = (0, oJ.i)(Ld)).bind) || void 0 === ld || ld.call(Qd, Od, Nd, dd, od)
        }
      }
    }

    function GW(dd) {
      const Jd = dd.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(Jd) ? "u32" : /i32|^vec\di$/.test(Jd) ? "i32" : "f32"
    }

    function vW(dd, Jd) {
      const kd = dd.getSize(),
        pd = GW(Jd),
        Nd = dd => 4 === kd ? `${dd}x4` : 2 === kd ? `${dd}x2` : null;
      if ("f32" === pd) {
        if (5126 === dd.type) return 1 === kd ? "float32" : kd >= 2 && kd <= 4 ? `float32x${kd}` : null;
        if (!dd.normalized) return null;
        switch (dd.type) {
          case 5121:
            return Nd("unorm8");
          case 5120:
            return Nd("snorm8");
          case 5123:
            return Nd("unorm16");
          case 5122:
            return Nd("snorm16")
        }
        return null
      }
      const Wd = "u32" === pd ? "uint" : "sint";
      switch (dd.type) {
        case 5125:
        case 5124:
          return 1 === kd ? `${Wd}32` : kd <= 4 ? `${Wd}32x${kd}` : null;
        case 5121:
        case 5120:
          return Nd(`${Wd}8`);
        case 5123:
        case 5122:
          return Nd(`${Wd}16`)
      }
      return null
    }

    function xW(dd) {
      var Jd;
      const kd = /(8|16|32)(?:x(\d))?$/.exec(dd);
      return kd ? Number(kd[1]) / 8 * Number(null !== (Jd = kd[2]) && void 0 !== Jd ? Jd : 1) : 4
    }
    class qW {
      constructor(dd, Jd, kd) {
        this.resources = dd, this.limits = Jd, this.warnOnce = kd, this.layouts = new Map
      }
      resolveInputs(dd, Jd, kd, pd) {
        const Nd = [],
          Wd = kd.program.attributes,
          Pd = [];
        for (let Kd = 0; Kd < Wd.length; Kd++) {
          const kd = Wd[Kd],
            Zd = kd.optional ? null : this.resources.vertexInput(dd, kd.name, pd);
          if (!Zd) {
            const dd = GW(kd.type),
              Jd = "u32" === dd ? "uint32x4" : "i32" === dd ? "sint32x4" : "float32x4";
            Pd.push(null);
            const pd = Nd.find((dd => null === dd.data));
            pd ? pd.attributes.push({
              shaderLocation: Kd,
              offset: 0,
              format: Jd
            }) : Nd.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Kd,
                offset: 0,
                format: Jd
              }]
            });
            continue
          }
          const gd = Zd.getBuffer();
          Pd.push(Zd);
          const Cd = vW(Zd, kd.type);
          if (!Cd) return this.warnOnce(`format:${Jd}:${kd.name}`, `${Jd}'s ${kd.name} (type ${Zd.type}, size ${Zd.getSize()}) has no WebGPU vertex format`), null;
          const od = Zd.getIsInstanced() ? "instance" : "vertex",
            ld = Zd.byteStride,
            Qd = xW(Cd),
            Ld = Nd.find((dd => dd.data === gd && dd.stride === ld && dd.step === od && Zd.byteOffset >= dd.base && Zd.byteOffset - dd.base + Qd <= ld));
          Ld ? Ld.attributes.push({
            shaderLocation: Kd,
            offset: Zd.byteOffset - Ld.base,
            format: Cd
          }) : Nd.push({
            data: gd,
            base: Zd.byteOffset,
            stride: ld,
            step: od,
            attributes: [{
              shaderLocation: Kd,
              offset: 0,
              format: Cd
            }]
          })
        }
        if (Nd.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Jd}`, `${Jd} needs ${Nd.length} vertex buffers`), null;
        let Zd = "";
        for (const Kd of Nd) {
          Zd += `${Kd.stride}${"instance"===Kd.step?"i":"v"}`;
          for (const dd of Kd.attributes) Zd += `,${dd.shaderLocation}:${dd.offset}:${dd.format}`;
          Zd += ";"
        }
        let gd = this.layouts.get(Zd);
        gd || (gd = {
          key: Zd,
          buffers: Nd.map((dd => ({
            arrayStride: dd.stride,
            stepMode: dd.step,
            attributes: dd.attributes
          }))),
          instanceEnds: Nd.map((dd => {
            let Jd = -1;
            if ("instance" === dd.step)
              for (const kd of dd.attributes) Jd = Math.max(Jd, kd.offset + xW(kd.format));
            return Jd
          }))
        }, this.layouts.set(Zd, gd));
        const Cd = Nd.map((dd => dd.base));
        return {
          program: kd,
          sources: Pd,
          layout: gd,
          slotData: Nd.map((dd => dd.data)),
          Y5: Cd,
          buffers: [],
          offsets: Cd,
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

    function BW(dd, Jd, kd, pd) {
      const Nd = Jd.program.program.attributes;
      for (let Wd = 0; Wd < Nd.length; Wd++) {
        if ((Nd[Wd].optional ? null : kd.vertexInput(dd, Nd[Wd].name, pd)) !== Jd.sources[Wd]) return !1
      }
      return !0
    }
    const sW = 64;
    class iW {
      constructor(dd, Jd, kd, pd) {
        this.device = dd, this.layout = Jd, this.frameBuffer = kd, this.label = pd, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(dd) {
        if (dd * sW <= this.data.length) return !1;
        let Jd = 2 * this.data.length;
        for (; dd * sW > Jd;) Jd *= 2;
        const kd = new Float32Array(Jd);
        return kd.set(this.data), this.data = kd, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Nd = this.data,
          Wd = dd * sW;
        let Pd = Nd[Wd + 16] !== kd;
        for (let Zd = 0; Zd < 16 && !Pd; Zd++) Pd = Nd[Wd + Zd] !== Jd[pd + Zd];
        if (Pd) {
          for (let dd = 0; dd < 16; dd++) Nd[Wd + dd] = Jd[pd + dd];
          Nd[Wd + 16] = kd
        }
        return Pd
      }
      upload(dd, Jd) {
        this.device.queue.writeBuffer(this.buffer, dd * Ep, this.data, dd * sW, (Jd - dd) * sW)
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

    function aW(dd) {
      return dd.gpu[Fd.g.lite] ??= dd.materials.map(((Jd, kd) => ({
        parts: dd,
        range: kd,
        owner: dd.owner
      })))
    }

    function MW(dd) {
      var Jd, kd, pd;
      return null !== (Jd = null !== (kd = null === (pd = dd.parts.materials[dd.range]) || void 0 === pd ? void 0 : pd.mirror) && void 0 !== kd ? kd : dd.owner.material) && void 0 !== Jd ? Jd : null
    }
    const FW = ["opaque", "alphaTest", "transparent", "text"];
    class YW {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, KJ.c)("Lite: ")
      }
      attach(dd, Jd) {
        this.model = dd, this.mirror = Jd
      }
      get worlds() {
        return this.model.nodes.Vo
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(dd) {
        return this.groups.get(dd)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(dd) {
        for (const [Jd, kd] of this.groups)
          for (const pd of FW)
            for (const Nd of kd[pd].units) dd(Nd.owner, "text" === pd ? "transparent" : pd, Jd)
      }
      select(dd, Jd) {
        this.frame++, this.selectedCount = 0;
        for (const Zd of this.groups.values())
          for (const dd of FW) Zd[dd].units.length = 0, Zd[dd].rows.length = 0;
        const {
          model: kd,
          mirror: pd
        } = this;
        if (!kd || !pd || !dd) return;
        this.rows.length < kd.nodes.oo && (this.rows = new Int32Array(kd.nodes.oo));
        const Nd = this.rows,
          Wd = kd.meshes;
        for (let Zd = 0; Zd < Wd.looseCount; Zd++) {
          const dd = Wd.loose[Zd],
            kd = pd.nodes[dd];
          kd && !kd.isBlocked && kd.isEnabled() && !kd.fp.hasAZeroComponent && Wd.selects(dd, Jd.frustum) && (this.activate(kd, dd), this.selectedCount++)
        }
        const Pd = Wd.selectTextPlanes(Jd.frustum, Nd);
        for (let Zd = 0; Zd < Pd; Zd++) {
          const Jd = Nd[Zd],
            Wd = pd.nodes[Jd],
            Pd = kd.meshes.parts[Jd];
          if (!Wd.isVisible || !(Wd.visibility > 0) || 0 === (Wd.layerMask & dd.layerMask) || !Pd) continue;
          const gd = this.groupOf(kd.meshes.layer[Jd]).text;
          for (const dd of aW(Pd)) gd.units.push(dd), gd.rows.push(Jd);
          this.selectedCount++
        }
      }
      instanceBatch(dd) {
        const Jd = this.batchOf(dd);
        return Jd.dispatched || (Jd.dispatched = Jd.renderSelf = !0, Jd.row = this.rowOf(dd)), Jd
      }
      rowOf(dd) {
        return dd.row
      }
      activate(dd, Jd) {
        if (!dd.Km) {
          const kd = dd;
          if (kd.eNd) {
            const dd = this.batchOf(kd);
            dd.dispatched = !0, dd.renderSelf = !0, dd.row = Jd
          }
          return void this.dispatch(kd, Jd, Jd)
        }
        const kd = dd,
          pd = kd.RNd;
        if (pd._getWorldMatrixDeterminant() >= 0 !== kd._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${pd.name}`, `A mirrored InstancedMesh of ${pd.name} is not drawn yet`);
        const Nd = this.batchOf(pd);
        Nd.instances.push(kd), Nd.rows.push(Jd), Nd.dispatched || (Nd.dispatched = !0, this.dispatch(pd, Jd, this.rowOf(pd)))
      }
      batchOf(dd) {
        let Jd = this.batches.get(dd);
        return Jd || (Jd = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(dd, Jd)), Jd.frame !== this.frame && (Jd.frame = this.frame, Jd.dispatched = !1, Jd.renderSelf = !1, Jd.instances.length = 0, Jd.rows.length = 0), Jd
      }
      dispatch(dd, Jd, kd) {
        const {
          layer: pd,
          parts: Nd
        } = this.model.meshes;
        if (!Nd[Jd]) return;
        const Wd = this.groupOf(pd[Jd]),
          Pd = dd;
        for (const Zd of aW(Nd[Jd])) {
          const dd = MW(Zd);
          if (!dd) continue;
          const Jd = dd.needAlphaBlendingForMesh(Pd) ? Wd.transparent : dd.needAlphaTestingForMesh(Pd) ? Wd.alphaTest : Wd.opaque;
          Jd.units.push(Zd), Jd.rows.push(kd)
        }
      }
      groupOf(dd) {
        let Jd = this.groups.get(dd);
        return Jd || (Jd = {
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
        }, this.groups.set(dd, Jd)), Jd
      }
    }
    class mW {
      constructor() {
        this.EC = new Map, this.enabled = [], this.groups = new Map, this.qQ = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(dd) {
        if (this.EC.has(dd)) return;
        const Jd = {
          mesh: dd,
          observer: dd.onEffectiveEnabledStateChangedObservable.add((dd => {
            this.XM(Jd, dd)
          })),
          index: -1,
          steady: null
        };
        this.EC.set(dd, Jd), this.XM(Jd, dd.isEnabled())
      }
      remove(dd) {
        const Jd = this.EC.get(dd);
        Jd && (Jd.observer.remove(!0), this.XM(Jd, !1), this.EC.delete(dd))
      }
      base(dd) {
        return this.EC.get(dd)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          EC: this.EC.size
        }
      }
      forEachSelected(dd) {
        for (const [Jd, kd] of this.groups) {
          for (const pd of kd.opaque) dd(pd.owner, "opaque", Jd);
          for (const pd of kd.transparent) dd(pd.owner, "transparent", Jd)
        }
        for (const Jd of this.qQ) dd(Jd.mesh, "opaque", 0)
      }
      group(dd) {
        return this.groups.get(dd)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(dd, Jd) {
        this.drawn = 0, this.selected = 0, this.qQ.length = 0;
        for (const pd of this.groups.values()) pd.opaque.length = 0, pd.transparent.length = 0;
        if (!dd) return;
        const kd = this.enabled;
        for (let pd = 0; pd < kd.length; pd++) {
          const Nd = kd[pd];
          if (Nd.steady && Jd(Nd, dd)) {
            this.selected++, this.qQ.push(Nd);
            continue
          }
          const Wd = Nd.mesh;
          if (Wd.isBlocked || Wd.fp.hasAZeroComponent) continue;
          if (!Wd.isVisible || Wd.visibility <= 0 || 0 === (Wd.layerMask & dd.layerMask)) continue;
          if (Wd.eNd) {
            this.warned.has(Wd.name) || (this.warned.add(Wd.name), console.warn(`Lite: thin instance base ${Wd.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Pd
          } = Wd;
          if (!Pd) continue;
          Wd.computeWorldMatrix(), this.selected++;
          const Zd = this.listsFor(Wd.renderingGroupId);
          for (const dd of aW(Pd)) {
            const Jd = MW(dd);
            Jd && (Jd.needAlphaBlendingForMesh(Wd) ? Zd.transparent.push(dd) : Zd.opaque.push(dd))
          }
        }
      }
      XM(dd, Jd) {
        if (Jd === dd.index >= 0) return;
        dd.steady = null;
        const kd = this.enabled;
        if (Jd) dd.index = kd.length, kd.push(dd);
        else {
          const Jd = kd.pop();
          Jd !== dd && (kd[dd.index] = Jd, Jd.index = dd.index), dd.index = -1
        }
      }
      listsFor(dd) {
        let Jd = this.groups.get(dd);
        return Jd || (Jd = {
          opaque: [],
          transparent: []
        }, this.groups.set(dd, Jd)), Jd
      }
    }
    var bW = kd(39691);
    class SW {
      constructor() {
        this.bundle = null, this.stale = !0, this.EC = new Set
      }
    }
    class jW {
      constructor(dd, Jd, kd) {
        this.device = dd, this.slots = Jd, this.host = kd, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new SW, this.qY = new SW, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new HN, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(dd) {
          var Jd, kd;
          let pd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Jd = null === (kd = globalThis.navigator) || void 0 === kd ? void 0 : kd.userAgent) && void 0 !== Jd ? Jd : "";
          const Nd = dd.adapterInfo;
          return "intel" === (null === Nd || void 0 === Nd ? void 0 : Nd.vendor) && "gen-12lp" === Nd.architecture && pd.includes("Windows")
        }(dd), (0, bW.M)(this.direct)
      }
      iG() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, bW.M)(this.directThisFrame)
      }
      add(dd, Jd, kd, pd) {
        let Nd = this.records.get(dd);
        return Nd || (Nd = this.createRecord(dd), this.records.set(dd, Nd)), Nd.recorded && fW(Nd, Jd) || (this.bundleOf(Nd).stale = !0), this.place(Nd, Jd, kd, pd), Nd
      }
      bundleOf(dd) {
        return dd.qY ? this.qY : this.main
      }
      addAgain(dd, Jd, kd, pd) {
        dd.recorded || (this.bundleOf(dd).stale = !0), this.place(dd, Jd, kd, pd)
      }
      place(dd, Jd, kd, pd) {
        dd.seen = this.frame, dd.qY && null === dd.draw && (this.qY.stale = !0), dd.draw = Jd, this.drawn++, kd && this.slots.write(dd.slot, kd, pd) && (this.slotsFrom = Math.min(this.slotsFrom, dd.slot), this.slotsTo = Math.max(this.slotsTo, dd.slot));
        const Nd = this.args,
          Wd = 5 * dd.slot;
        Nd[Wd] === Jd.count && Nd[Wd + 1] === Jd.instances && Nd[Wd + 2] === Jd.first || (Nd[Wd] = Jd.count, Nd[Wd + 1] = Jd.instances, Nd[Wd + 2] = Jd.first, this.argsDirty = !0, this.qY.stale ||= dd.qY)
      }
      aG() {
        for (const dd of this.records.values()) dd.seen !== this.frame && (dd.draw && (dd.draw = null, this.args[5 * dd.slot + 1] = 0, this.argsDirty = !0, this.qY.stale ||= dd.qY), this.frame - dd.seen > 120 && (this.records.delete(dd.unit), this.freeSlots.push(dd.slot), dd.recorded && (this.bundleOf(dd).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(dd) {
        for (const Jd of this.records.values()) Jd.draw && Jd.seen === this.frame && !Jd.qY && dd(Jd.draw, this.slots.data, Jd.slot * Ep / 4)
      }
      resourceDestroyed(dd) {
        this.main.stale ||= this.main.EC.has(dd), this.qY.stale ||= this.qY.EC.has(dd)
      }
      execute(dd, Jd, kd) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(dd, Jd, kd, "direct"), this.drawn;
        const pd = this.host.sceneGroup(Jd);
        if (!pd) return this.main.bundle = null, this.qY.bundle = null, this.recordedSceneGroup = null, this.encode(dd, Jd, kd, "direct"), this.drawn;
        this.recordedTarget === kd && this.recordedSceneGroup === pd || (this.recordedTarget = kd, this.recordedSceneGroup = pd, this.main.stale = !0, this.qY.stale = !0);
        const Nd = this.main,
          Wd = this.qY;
        let Pd = !1;
        !Nd.stale && Nd.bundle || (Nd.bundle = this.record(Jd, kd, pd, "indirect"), Pd = !0);
        const Zd = (0, bW.m)();
        return (Wd.stale || this.rangedEpoch !== Zd) && (this.rangedEpoch = Zd, Wd.bundle = this.drawsRanged() ? this.record(Jd, kd, pd, "qY") : this.noRangedBundle(), Pd = !0), Pd && (this.bundles = Wd.bundle ? [Nd.bundle, Wd.bundle] : [Nd.bundle]), dd.executeBundles(this.bundles), dd.setBindGroup(0, pd), this.drawn
      }
      record(dd, Jd, kd, pd) {
        const Nd = this.device.createRenderBundleEncoder({
          label: "qY" === pd ? "thin-bases-ranged" : "thin-bases",
          colorFormats: dd._colorFormat ? [dd._colorFormat] : [],
          depthStencilFormat: dd._depthStencilFormat,
          sampleCount: dd._sampleCount
        });
        return Nd.setBindGroup(0, kd), this.encode(Nd, dd, Jd, pd), Nd.finish()
      }
      noRangedBundle() {
        for (const dd of this.records.values()) dd.qY && (dd.recorded = !1);
        return this.qY.EC.clear(), this.qY.stale = !1, null
      }
      drawsRanged() {
        for (const dd of this.records.values())
          if (dd.qY && dd.draw) return !0;
        return !1
      }
      encode(dd, Jd, kd, pd) {
        const Nd = [];
        for (const gd of this.records.values()) "direct" !== pd && gd.qY !== ("qY" === pd) || (gd.recorded = !1, gd.draw && Nd.push(gd));
        Nd.sort(nW);
        const Wd = "direct" === pd ? null : "qY" === pd ? this.qY : this.main;
        null === Wd || void 0 === Wd || Wd.EC.clear(), this.binder.reset();
        let Pd = !1;
        for (const gd of Nd) {
          var Zd;
          const Nd = gd.draw,
            Cd = this.host.pipelineFor(Nd, Jd, kd);
          if (!Cd) {
            this.host.pipelineCompiling(Nd, kd) ? Pd = !0 : Wd && this.keep(gd, Nd, Wd.EC);
            continue
          }
          let Kd;
          if (gd.qY && "indirect" !== pd) {
            const dd = gd.unit.owner;
            Kd = "direct" === pd && (0, bW.x)(dd) || (0, bW.p)(dd) || void 0
          }
          if (Wd && this.keep(gd, Nd, Wd.EC), 0 === (null === (Zd = Kd) || void 0 === Zd ? void 0 : Zd.count)) continue;
          this.binder.bind(dd, Nd, Cd, this.slots.bindGroup, gd.slot * Ep);
          const od = 5 * gd.slot;
          if ("indirect" === pd) {
            Nd.indexBuffer ? dd.drawIndexedIndirect(this.argsBuffer, 4 * od) : dd.drawIndirect(this.argsBuffer, 4 * od);
            continue
          }
          const ld = this.args;
          Kd ? XW(dd, null !== Nd.indexBuffer, ld, od, Kd) : Nd.indexBuffer ? dd.drawIndexed(ld[od], ld[od + 1], ld[od + 2], 0, 0) : dd.draw(ld[od], ld[od + 1], ld[od + 2], 0)
        }
        Wd && (Wd.stale = Pd)
      }
      keep(dd, Jd, kd) {
        dd.recorded = !0, dd.pipelineKey = Jd.pipelineKey, dd.materialGroup = Jd.material.bindGroup, dd.vertexBuffers.length = 0, dd.vertexBuffers.push(...Jd.vertexBuffers), dd.vertexOffsets = Jd.vertexOffsets, dd.indexBuffer = Jd.indexBuffer, dd.indexFormat = Jd.indexFormat;
        for (const pd of Jd.vertexBuffers) kd.add(pd);
        Jd.indexBuffer && kd.add(Jd.indexBuffer), kd.add(Jd.material.buffer);
        for (const pd of Jd.material.bound) pd && kd.add(pd)
      }
      createRecord(dd) {
        let Jd = this.freeSlots.pop();
        return void 0 === Jd && (Jd = this.slotCount++, this.grow()), {
          unit: dd,
          slot: Jd,
          qY: void 0 !== (0, bW.p)(dd.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.qY.stale = !0), 5 * this.slotCount > this.args.length) {
          const dd = new Uint32Array(2 * this.args.length);
          dd.set(this.args), this.args = dd, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function XW(dd, Jd, kd, pd, Nd) {
      const Wd = kd[pd + 1],
        Pd = Nd.data;
      for (let Zd = 0; Zd < Nd.count; Zd++) {
        const Nd = Math.min(Pd[2 * Zd], Wd),
          gd = Math.min(Pd[2 * Zd + 1], Wd - Nd);
        0 !== gd && (Jd ? dd.drawIndexed(kd[pd], gd, kd[pd + 2], 0, Nd) : dd.draw(kd[pd], gd, kd[pd + 2], Nd))
      }
    }

    function fW(dd, Jd) {
      if (dd.pipelineKey !== Jd.pipelineKey || dd.materialGroup !== Jd.material.bindGroup || dd.indexBuffer !== Jd.indexBuffer || dd.indexFormat !== Jd.indexFormat || dd.vertexOffsets !== Jd.vertexOffsets || dd.vertexBuffers.length !== Jd.vertexBuffers.length) return !1;
      for (let kd = 0; kd < dd.vertexBuffers.length; kd++)
        if (dd.vertexBuffers[kd] !== Jd.vertexBuffers[kd]) return !1;
      return !0
    }

    function nW(dd, Jd) {
      return AN(dd.draw, Jd.draw)
    }
    const UW = new WeakMap,
      yW = {
        depth: !1,
        sunShadow: !1
      };

    function DW(dd, Jd) {
      let kd = UW.get(dd);
      kd || (kd = new Map, UW.set(dd, kd));
      const pd = `${Jd.depth?"-depth":""}${Jd.sunShadow?"-shadow":""}${Jd.shadowMask?"-mask":""}`;
      let Nd = kd.get(pd);
      if (!Nd) {
        const Wd = [{
          binding: MJ.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: MJ.j
          }
        }, {
          binding: MJ.x,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        Jd.depth && Wd.push({
          binding: MJ.s,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Jd.sunShadow && Wd.push(... function() {
          const dd = GPUShaderStage.FRAGMENT,
            Jd = MJ.t;
          return [{
            binding: Jd.uniform,
            visibility: dd,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: Jd.ql,
            visibility: dd,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Jd.special,
            visibility: dd,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Jd.volume,
            visibility: dd,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: Jd.sampler,
            visibility: dd,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: Jd.entities,
            visibility: dd,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Jd.entityGrids,
            visibility: dd,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), Jd.shadowMask && Wd.push({
          binding: MJ.w,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Nd = dd.createBindGroupLayout({
          label: `${Jd.depth?"terrain-":""}shader-pack-inputs${pd}`,
          entries: Wd
        }), kd.set(pd, Nd)
      }
      return Nd
    }

    function TW(dd) {
      return DW(dd, yW)
    }

    function EW(dd, Jd) {
      if (!Jd) return !1;
      const kd = (0, FJ.f)(dd);
      return !!kd && Uk(kd, Jd)
    }

    function cW(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!op(Jd)) return [];
      return [DW(dd, {
        depth: Pp(Jd.packVariant),
        sunShadow: EW(Jd.packVariant, kd),
        shadowMask: pd
      })]
    }
    class hW {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = dd, this.sunShadow = kd, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(MJ.j), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = dd.createBuffer({
          label: "shader-pack-inputs",
          size: MJ.j,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const pd = (0, MJ.A)(Jd);
        this.textures = dd.createBuffer({
          label: "shader-pack-textures",
          size: pd.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), dd.queue.writeBuffer(this.textures, 0, pd), this.bindGroup = dd.createBindGroup({
          label: "shader-pack-inputs",
          layout: TW(dd),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: MJ.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: MJ.x,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(dd, Jd, kd) {
        (0, MJ.H)(this.data, {
          seconds: dd.seconds(),
          lit: kd,
          renderOffset: dd.renderOffset(),
          Qdd: dd.Qdd(),
          eyePosition: Jd,
          shadowDirection: dd.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const pd = Jd ? this.sunShadow : null;
        if ((Jd || kd) && !pd) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!dd && !pd) return this.bindGroup;
        (dd && dd !== this.depthView || kd && kd !== this.maskView) && (this.depthView = null !== dd && void 0 !== dd ? dd : this.depthView, this.maskView = null !== kd && void 0 !== kd ? kd : this.maskView, this.groups.clear());
        const Nd = (dd ? 1 : 0) | (pd ? 2 : 0) | (kd ? 4 : 0);
        let Wd = this.groups.get(Nd);
        if (!Wd) {
          const Jd = this.entries();
          dd && Jd.push({
            binding: MJ.s,
            resource: dd
          }), pd && Jd.push(...pd.entries()), kd && Jd.push({
            binding: MJ.w,
            resource: kd
          }), Wd = this.device.createBindGroup({
            label: `${dd||kd?"terrain-":""}shader-pack-inputs${dd?"-depth":""}${pd?"-shadow":""}${kd?"-mask":""}`,
            layout: DW(this.device, {
              depth: !!dd,
              sunShadow: !!pd,
              shadowMask: !!kd
            }),
            entries: Jd
          }), this.groups.set(Nd, Wd)
        }
        return Wd
      }
      bind(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        dd.setBindGroup(MJ.f, this.bindGroupFor(Jd, kd, pd))
      }
    }

    function rW(dd, Jd, kd) {
      if (dd.gpuVersion === Jd.gpuBuffersVersion) return !0;
      let pd;
      do {
        if (pd = Jd.gpuBuffersVersion, !uW(dd, Jd, kd)) return !1
      } while (Jd.gpuBuffersVersion !== pd);
      return dd.gpuVersion = pd, dd.fitInstances = 0, !0
    }

    function uW(dd, Jd, kd) {
      let pd = null;
      for (let Wd = 0; Wd < dd.slotData.length; Wd++) {
        var Nd;
        const Pd = dd.slotData[Wd],
          Zd = Pd ? Jd.gpuBuffer(Pd) : kd;
        if (!Zd) return !1;
        Pd && dd.layout.instanceEnds[Wd] < 0 && Jd.cover(Pd, Number.POSITIVE_INFINITY), dd.buffers[Wd] = Zd;
        const gd = dd.Y5[Wd] + (Pd ? Jd.gpuOffset(Pd) : 0);
        gd !== (null !== (Nd = pd) && void 0 !== Nd ? Nd : dd.offsets)[Wd] && (pd ??= dd.offsets.slice(), pd[Wd] = gd), dd.ends[Wd] = Pd ? Jd.gpuEnd(Pd) : Zd.size
      }
      return pd && (dd.offsets = pd), !0
    }

    function tW(dd, Jd, kd, pd) {
      if (Jd <= dd.fitInstances) return null;
      const {
        layout: Nd,
        ends: Wd,
        offsets: Pd,
        slotData: Zd,
        Y5: gd
      } = dd;
      let Cd = !1;
      for (let Kd = 0; Kd < Nd.buffers.length; Kd++) {
        const dd = Nd.instanceEnds[Kd];
        if (dd < 0) continue;
        const pd = (Jd - 1) * Nd.buffers[Kd].arrayStride + dd;
        if (Wd[Kd] - Pd[Kd] < pd) return {
          index: Kd,
          needed: pd
        };
        const od = Zd[Kd];
        od && kd.cover(od, gd[Kd] + pd) && (Cd = !0)
      }
      return Cd && rW(dd, kd, pd), dd.fitInstances = Jd, null
    }
    var VW = kd(38016),
      zW = kd(38054);
    const HW = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      wW = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      AW = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      dP = `((vertexInputs.aPackedLightLevels >> 16u) | ${CJ.b.placed}u)`,
      JP = "u32(vertexInputs.aShaderPackItem.x)",
      kP = `${CJ.b.lifeform}u`;

    function pP(dd) {
      return "item" === dd.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const NP = "bloxdSpEnchant",
      WP = "floor(finalWorld[3].xyz)";

    function PP(dd, Jd, kd) {
      return "placed" === Jd.kind && dd.reads[kd].includes("bloxdFragmentBlockPosition")
    }

    function ZP(dd, Jd) {
      let [kd, pd] = dd;
      return kd === Jd.point && pd === Jd.code
    }

    function gP(dd, Jd) {
      var kd, pd, Nd;
      const Wd = null === (kd = dd.find((dd => dd.texture))) || void 0 === kd ? void 0 : kd.texture,
        Pd = null === (pd = dd.find((dd => dd.enchantTier))) || void 0 === pd ? void 0 : pd.enchantTier,
        Zd = null === (Nd = dd.find((dd => dd.overlay))) || void 0 === Nd ? void 0 : Nd.overlay,
        gd = Zd ? Jd.filter((dd => ZP(dd, Zd))).length : 0;
      return Zd && 1 === gd ? {
        texture: Wd,
        overlay: Zd,
        enchantTier: Pd
      } : {
        texture: Wd,
        enchantTier: Pd
      }
    }

    function CP(dd) {
      if ("item" === dd.kind) {
        return {
          vertexFlags: `(${JP} & 0xffffu)`,
          varying: "vPackItem",
          value: JP,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return dd.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: dP,
        varying: "vPackFlags",
        value: dP,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function KP(dd) {
      return "lifeform" === dd.kind ? kP : "0u"
    }

    function oP(dd) {
      return !!dd.BLOXD_PLUGIN_ENCHANTMENT
    }

    function lP(dd, Jd) {
      const {
        enchantTier: kd
      } = Jd;
      return kd && oP(Jd.defines) && "lifeform" === Jd.kind && IP(dd, "enchantTier") ? kd : null
    }

    function QP(dd, Jd) {
      return oP(Jd.defines) && IP(dd, "enchantSpeed")
    }

    function LP(dd) {
      const {
        overlay: Jd,
        defines: kd
      } = dd;
      if (!Jd || !kd.DIFFUSE) return null;
      const pd = kd.VERTEXCOLOR || kd.INSTANCESCOLOR && kd.INSTANCES;
      return `vec4f(${Jd.colour}.rgb * uniforms.vDiffuseInfos.y${pd?" * fragmentInputs.vColor.rgb":""}, ${Jd.colour}.a)`
    }
    const OP = "fragmentInputs.vPackTexture";

    function eP(dd) {
      const {
        atlas: Jd,
        defines: kd,
        texture: pd
      } = dd;
      if (Jd || !kd.DIFFUSE) return null;
      if (pd) return {
        texture: "diffuseSampler",
        ...pd
      };
      const Nd = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===kd.DIFFUSEDIRECTUV?"vMainUV1":2===kd.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== dd.kind) return Nd;
      if (!kd.BLOXD_PLUGIN_ANIMATED) return {
        ...Nd,
        id: OP
      };
      const Wd = qd.d.WGSL,
        Pd = (0, qd.Cb)(Wd, "uAnimStatesNum"),
        Zd = (0, qd.ab)(Wd, (0, VW.h)(Wd), Pd),
        gd = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Pd})`,
        layers: [Zd],
        uv: `vec2f(${gd}.x, ${gd}.y * ${Pd} - ${Zd})`,
        levelUv: gd,
        id: OP
      }
    }

    function RP(dd, Jd) {
      return "box" === Jd.kind && !!dd.hooks.surface && null !== eP(Jd)
    }

    function IP(dd, Jd) {
      return dd.reads.fragment.includes(Jd)
    }

    function GP(dd) {
      return !!dd.BLOXD_LIGHTING && !dd.BLOXD_UNLIT
    }

    function vP(dd, Jd, kd, pd) {
      const Nd = dd.filter((dd => {
        let [kd, pd] = dd;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === kd && pd === Jd
      }));
      if (1 !== Nd.length) throw new Error(`A model program for shader packs has ${0===Nd.length?"no":"more than one"} ${pd} code before fog (lite/modelShaderPack.ts)`);
      return dd.map((dd => dd === Nd[0] ? [dd[0], kd] : dd))
    }

    function xP(dd, Jd, kd, pd) {
      const {
        hooks: Nd
      } = dd, {
        kind: Wd,
        defines: Pd
      } = Jd, Zd = [...kd];
      var gd;
      Jd.atlas && Nd.surface && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", rk("atlasIdxIn")]), "item" === Wd && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", (0, qd.h)(qd.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), RP(dd, Jd) && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", (0, qd.h)(qd.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (gd = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${ck}[min(u32(${gd}) - 1u, arrayLength(&${ck}) - 1u)], ${gd} > 0.5);\n`)]);
      const Cd = CP(Jd);
      Cd && (Nd.surface || Nd.light) && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Cd.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Cd.varying} = ${Cd.value};`]);
      let Kd = pd;
      if (PP(dd, Jd, "fragment") && (Zd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${WP});`]), Kd = [...Kd, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), IP(dd, "localPosition") && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${pP(Jd)};`]), oP(Pd) && Nd.surface) {
        QP(dd, Jd) && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const kd = lP(dd, Jd);
        kd && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${kd});`]);
        const pd = (0, qd.ob)(qd.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Kd = [...vP(Kd, (0, zW.j)(qd.d.WGSL), pd, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, zW.d)(NP)]]
      }
      const {
        overlay: od
      } = Jd;
      od && LP(Jd) && Nd.surface && (Kd = Kd.filter((dd => !ZP(dd, od))));
      const ld = Nd.light ? function(dd) {
        return "placed" === dd.kind ? {
          name: "terrain",
          engine: (0, sJ.M)(qd.d.WGSL),
          pack: (0, sJ.eb)(qd.d.WGSL)
        } : dd.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, sJ.F)(qd.d.WGSL),
          pack: (0, sJ.ab)(qd.d.WGSL)
        } : null
      }(Jd) : null;
      if (ld && (Kd = vP(Kd, ld.engine, ld.pack, `${ld.name} light`), "placed" !== Wd && GP(Pd))) {
        const dd = Pd.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, qd.Cb)(qd.d.WGSL, "uEntityLightLevels") : (0, qd.Jb)(qd.d.WGSL, "aLightLevels");
        Zd.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${sJ.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, sJ.bb)(qd.d.WGSL, dd)])
      }
      return {
        vertexCode: Zd,
        fragmentCode: Kd
      }
    }

    function qP(dd, Jd, kd, pd) {
      return fk(dd, Jd, kd, pd, "model")
    }
    const BP = "\t@builtin(position) position: vec4f,\n";

    function sP(dd, Jd) {
      const kd = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(dd)[0];
      return `${kd}${Jd}${dd.slice(kd.length)}`
    }

    function iP(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Nd
      } = Jd, Wd = Uk(Jd, pd), {
        kind: Pd,
        defines: Zd
      } = kd, gd = function(dd, Jd) {
        var kd, pd, Nd;
        const {
          defines: Wd
        } = Jd, Pd = CP(Jd), Zd = !!Wd.FOG, gd = oP(Wd), Cd = null !== (kd = null === Pd || void 0 === Pd ? void 0 : Pd.enchantTier) && void 0 !== kd ? kd : lP(dd, Jd) ? "fragmentInputs.vPackEnchantTier" : "0u", Kd = "lifeform" === Jd.kind && !Wd.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (pd = null === Pd || void 0 === Pd ? void 0 : Pd.vertexFlags) && void 0 !== pd ? pd : KP(Jd),
          vertexLocalPosition: pP(Jd),
          flags: null !== (Nd = null === Pd || void 0 === Pd ? void 0 : Pd.flags) && void 0 !== Nd ? Nd : KP(Jd),
          normal: "normalW",
          alpha: Kd ? "alpha * baseColor.a" : "alpha",
          alphaOut: Kd ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: Zd ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: Zd ? "1.0 - fog" : "0.0",
          enchantTier: Cd,
          enchantColour: gd ? `${NP}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: QP(dd, Jd) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: IP(dd, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: LP(Jd)
        }
      }(Jd, kd), Cd = dd.textures.filter((dd => /^textureAtlas\d+$/.test(dd.name))).length, Kd = kd.atlas && Cd > 0 ? {
        count: Cd,
        layers: kd.atlas.layers,
        width: kd.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: dd.material.slots.has("uAnimDataPerTex") ? (Jd, kd) => Fp(Jd, kd, function(dd) {
          const Jd = dd.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Do: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: dd => `uniforms.uAnimDataPerTex[${dd}]${Jd}`
          }
        }(dd)) : null
      } : null, od = "placed" === Pd ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", ld = null !== Kd && void 0 !== Kd ? Kd : eP(kd), Qd = function(dd, kd) {
        let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,MJ.E)()}${Dk(Jd,kd)}${pd}${tk(dd)}${Sk}${od}${Jd.code}`
      };
      let {
        vertex: Ld,
        fragment: Od
      } = dd;
      const ed = zk(Nd, gd);
      if (ed) {
        const dd = PP(Jd, kd, "vertex") ? `\tbloxdSpCell = ${WP};\n` : "";
        Ld = qP(Ld, HW, `${dd}${ed.slice(1)}${HW}`, "vertex")
      }
      const Rd = `${Tk(Jd,Wd,function(dd,Jd){return Jd.TWOSIDEDLIGHTING?dd:`select(-(${dd}), ${dd}, fragmentInputs.frontFacing)`}(gd.normal,Zd),gd.flags)}${Hk(Nd,Jd.strict,Jd.program,ld,gd)}`;
      Rd && (Od = qP(Od, wW, `${Rd.slice(1)}${wW}`, "surface")), Wd && Jd.sunShadow && !Zd.TWOSIDEDLIGHTING && (Od = qP(Od, BP, `${BP}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Id = dp(Nd);
      if (Id) {
        const dd = Ak(Nd, GP(Zd), !0, gd);
        Od = qP(Od, AW, `${dd}${Id.slice(1)}${AW}`, "light")
      }
      const Gd = RP(Jd, kd) ? hk : "";
      return {
        ...dd,
        vertex: sP(Ld, Qd(Kd, !1, Gd)),
        fragment: sP(Od, Qd(ld, Wd))
      }
    }
    const aP = {
      name: "earthSky",
      uniqueId: -1
    };
    class MP {
      constructor(dd) {
        this.resources = dd, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const dd of this.instances.values()) dd.released = !0, this.resources.destroyBuffer(dd.buffer);
        this.instances.clear()
      }
    }

    function FP(dd) {
      return dd.failed && null !== dd.packGroup
    }
    class YP {
      constructor(dd, Jd, kd) {
        this.device = dd, this.resources = Jd, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.I5 = new mW, this.modelMeshes = new YW, this.thinBundle = void 0, this.binder = new HN, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new IW((dd => this.modelSlot(dd).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, KJ.c)("Lite: "), this.renderStates = new QW(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (dd, Jd) => this.keepSteady(dd, Jd), this.lists = new wN(this.modelMeshes, this.I5, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new CW(Jd, this.warnOnce, ((dd, Jd, kd) => this.programWithModel(dd, Jd, kd)), FP), this.vertexLayouts = new qW(Jd, dd.limits, this.warnOnce), this.sceneLayout = kJ(dd), this.frameLayout = dd.createBindGroupLayout({
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
        }), this.frameBuffer = dd.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new iW(dd, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = dd.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new jW(dd, new iW(dd, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (dd, Jd, kd) => this.pipelineFor(dd, Jd, kd),
          pipelineCompiling: (dd, Jd) => !dd.program.failed && !1 !== this.pipelines.get(`${dd.pipelineKey}|${Jd}`),
          sceneGroup: dd => {
            const Jd = kd(dd);
            return Jd || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), Jd
          }
        }), Jd.onDestroy = dd => {
          this.thinBundle.resourceDestroyed(dd)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Nd = {
          order: dd,
          isTransparent: Jd,
          _direct: !Jd,
          bind: (dd, Jd) => this.createBinding(Nd, Jd, kd, pd)
        };
        return Nd
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(dd, Jd, kd) {
        var pd;
        let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = Jd, this.drawDefines.view = Jd, this.thinBundle.iG(), this.writeFrameUniforms();
        const Wd = null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd.defineFor("model")) && void 0 !== pd ? pd : 0;
        this.drawDefines.modelPackVariant = Wd, Nd && 0 !== Wd && (this.packInputs ??= new hW(this.device, Nd.textureLayers(), this.sunShadow), this.packInputs.write(Nd, Jd.eye, Nd.IO())), this.lists.clear(), this.slotCount = 0;
        const Pd = dd.activeCamera;
        this.I5.select(Pd, this.keepSteadyBase), this.modelMeshes.select(Pd, Jd), kd && this.pushEarthSky(kd), this.lists.collect(dd), this.thinBundle.aG(), this.uploadMeshSlots()
      }
      pushDraws(dd, Jd, kd, pd, Nd, Wd) {
        let Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Zd = Wd.length;
        for (let gd = 0; gd < kd; gd++) {
          const kd = Jd[gd];
          let Zd = this.retainedDraw(dd, kd, pd, Nd);
          if (void 0 === Zd && (Zd = this.drawFor(dd, kd, pd, Nd), this.retain(kd, Zd)), Zd) {
            const dd = kd.owner,
              Jd = Pd ? Pd[gd] : -1;
            Zd.slotOffset = Jd < 0 ? this.writeMeshSlot(dd.getWorldMatrix().m, dd.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[Jd], 16 * Jd), Wd.push(Zd)
          }
        }
        return Wd.length - Zd
      }
      bundleDraws(dd, Jd, kd) {
        let pd = 0;
        for (const Nd of Jd) {
          let Jd = this.retainedDraw(dd, Nd, kd, !1);
          const Wd = void 0 !== Jd;
          if (void 0 === Jd && (Jd = this.drawFor(dd, Nd, kd, !1), this.retain(Nd, Jd)), Jd) {
            const dd = Nd.owner,
              kd = this.thinBundle.add(Nd, Jd, dd.getWorldMatrix().m, dd.visibility);
            Wd && this.steadyFrom(Nd, Jd, kd), pd++
          }
        }
        return pd
      }
      steadyFrom(dd, Jd, kd) {
        const pd = dd.owner,
          Nd = this.I5.base(pd),
          Wd = pd.material,
          {
            drawState: Pd,
            instance: Zd
          } = Jd.inputs.retained;
        if (!Nd || !Wd || 1 !== dd.parts.materials.length || MW(dd) !== Wd) return;
        const gd = Nd.steady ??= {
          unit: dd,
          material: Wd,
          visibility: 1,
          draw: Jd,
          record: kd,
          drawState: Pd,
          instance: Zd,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        gd.unit = dd, gd.material = Wd, gd.visibility = pd.visibility, gd.draw = Jd, gd.record = kd, gd.drawState = Pd, gd.instance = Zd, gd.bindGroup = Zd.bindGroup, gd.gpuVersion = this.resources.gpuBuffersVersion, gd.fitInstances = Jd.inputs.fitInstances, gd.worldFlag = pd.getWorldMatrix().updateFlag, gd.handedFrame = this.frame
      }
      keepSteady(dd, Jd) {
        const kd = dd.steady;
        if (kd.handedFrame !== this.frame - 1 || (this.frame + kd.phase) % 8 === 0) return !1;
        const pd = dd.mesh,
          {
            unit: Nd,
            draw: Wd,
            instance: Pd,
            drawState: Zd
          } = kd,
          gd = pd.forcedInstanceCount || pd.W8;
        if (!pd.isVisible || pd.eNd || pd.visibility !== kd.visibility || 0 === (pd.layerMask & Jd.layerMask) || pd.material !== kd.material || 0 !== pd.renderingGroupId || pd.hasVertexAlpha || !this.drawDefines.definesHold(Zd, Nd, Zd.instancing) || kd.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Wd.inputs, Nd, Zd.instancing, Wd.program) || Wd.program.failed || Pd.released || gd <= 0 || gd > kd.fitInstances) return !1;
        if (Pd.frame !== this.frame && this.bindMaterial(Pd, this.modelUniforms.refreshModelUniforms(pd.Wm(), Pd, Pd.model, this.view)), !Pd.bindable || Pd.bindGroup !== kd.bindGroup) return !1;
        const Cd = pd.computeWorldMatrix(),
          Kd = Cd.updateFlag !== kd.worldFlag;
        return kd.worldFlag = Cd.updateFlag, Wd.instances = gd, this.thinBundle.addAgain(kd.record, Wd, Kd ? Cd.m : null, kd.visibility), kd.handedFrame = this.frame, this.I5.drawn++, !0
      }
      retainedDraw(dd, Jd, kd, pd) {
        const Nd = this.inputs.get(Jd),
          Wd = null === Nd || void 0 === Nd ? void 0 : Nd.retained;
        if (!Nd || !Wd) return;
        const {
          drawState: Pd,
          program: Zd,
          instance: gd,
          instancing: Cd
        } = Wd, Kd = Jd.owner;
        if (pW(Kd) !== Cd) return;
        const od = this.instanceCount(Kd, Cd);
        if (od <= 0) return null;
        if (gd.released || Zd.failed || Pd.program !== Zd || !this.drawDefines.programCurrent(Pd, Jd, Cd, kd) || !this.inputsStamped(Nd, Jd, Cd, Zd) || Kd.isUnIndexed !== Wd.unIndexed || this.indexKey(Jd) !== Wd.indexData) return;
        if (Wd.indexBuffer && Wd.gpuVersion !== this.resources.gpuBuffersVersion) {
          const dd = this.resources.gpuBuffer(Wd.indexData);
          if (!dd) return;
          Wd.indexBuffer = dd, Wd.gpuVersion = this.resources.gpuBuffersVersion
        }
        let ld = !1;
        if (gd.frame !== this.frame && (ld = this.modelUniforms.refreshModelUniforms(dd, gd, gd.model, this.view)), !this.bindMaterial(gd, ld) || !this.withGpuBuffers(Nd) || !this.instanceBuffersFit(Kd.name, Nd, od)) return null;
        const Qd = this.makeDraw(Zd, Nd, this.renderStates.renderState(Pd.model, Kd, pd, Nd.state), gd, od);
        return this.setRange(Qd, Jd, Wd.indexBuffer, Wd.indexData), Qd
      }
      retain(dd, Jd) {
        const kd = this.drawDefines.drawStates.get(dd);
        if (!Jd || !kd || kd.program !== Jd.program) {
          const Jd = this.inputs.get(dd);
          return void(Jd && (Jd.retained = null))
        }
        const pd = dd.owner,
          Nd = kd.instancing,
          Wd = this.indexKey(dd),
          Pd = Jd.inputs.retained;
        Pd ? (Pd.drawState = kd, Pd.instancing = Nd, Pd.program = Jd.program, Pd.instance = Jd.material, Pd.indexData = Wd, Pd.unIndexed = pd.isUnIndexed, Pd.indexBuffer = Jd.indexBuffer, Pd.gpuVersion = this.resources.gpuBuffersVersion) : Jd.inputs.retained = {
          drawState: kd,
          instancing: Nd,
          program: Jd.program,
          instance: Jd.material,
          indexData: Wd,
          unIndexed: pd.isUnIndexed,
          indexBuffer: Jd.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(dd, Jd, kd, pd) {
        const Nd = Jd.owner,
          Wd = MW(Jd);
        if (!Wd) return null;
        const Pd = Wd.getClassName();
        let Zd = null;
        if (function(dd) {
            return "LinesMesh" === dd.getClassName()
          }(Nd)) {
          if (! function(dd) {
              return "ShaderMaterial" === dd.getClassName() && "color" === dd.shaderPath
            }(Wd)) return this.warnOnce(`lines:${Pd}`, `A LinesMesh with a ${Pd} is not drawn yet (${Wd.name})`), null;
          Zd = Nd
        } else if ("StandardMaterial" !== Pd && "LiteMaterial" !== Pd) return this.warnOnce(`class:${Pd}`, `${Pd} is not drawn yet (${Wd.name})`), null;
        const gd = pW(Nd),
          Cd = this.instanceCount(Nd, gd);
        if (Cd <= 0) return null;
        const Kd = Zd ? this.lineProgramFor(Nd, kd, gd) : this.drawDefines.programFor(dd, Jd, Wd, kd, gd);
        if (!Kd || Kd.failed) return null;
        const od = Zd ? null : this.drawDefines.drawStates.get(Jd).model,
          ld = od ? this.modelInstance(od, Kd) : this.materialInstance(Nd, Kd);
        let Qd = !1;
        if (ld.frame !== this.frame && (Zd ? Id(ld.ubo, Zd) : Qd = this.modelUniforms.refreshModelUniforms(dd, ld, ld.model, this.view)), !this.bindMaterial(ld, Qd)) return null;
        const Ld = this.meshInputs(Jd, Kd, gd);
        if (!Ld || !this.instanceBuffersFit(Nd.name, Ld, Cd)) return null;
        const Od = this.indexKey(Jd);
        let ed = null;
        if (Od && !Nd.isUnIndexed && (ed = this.resources.gpuBuffer(Od), !ed)) return null;
        const Rd = this.renderStates.renderState(null !== od && void 0 !== od ? od : Wd, Nd, pd, Ld.state, Zd ? "line-list" : "triangle-list"),
          Gd = this.makeDraw(Kd, Ld, Rd, ld, Cd);
        return this.setRange(Gd, Jd, ed, Od), Gd
      }
      indexKey(dd) {
        const Jd = ZW(dd);
        return Jd ? this.resources.modelIndex(Jd) : null
      }
      setRange(dd, Jd, kd, pd) {
        kd && (dd.indexBuffer = kd, dd.indexFormat = this.resources.indexFormat(pd));
        const Nd = 4 * Jd.range + (kd ? 0 : 2);
        dd.unit = Jd, dd.first = Jd.parts.UO[Nd], dd.count = Jd.parts.UO[Nd + 1]
      }
      makeDraw(dd, Jd, kd, pd, Nd) {
        Jd.state !== kd && (Jd.state = kd, Jd.pipelineKey = `${dd.id}|${Jd.layout.key}|${kd.key}`, Jd.pipeline = null);
        const Wd = Jd.draw ??= {
          program: dd,
          inputs: Jd,
          pipelineKey: "",
          layout: Jd.layout,
          state: kd,
          material: pd,
          slotOffset: 0,
          vertexBuffers: Jd.buffers,
          vertexOffsets: Jd.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Nd,
          unit: null
        };
        return Wd.program = dd, Wd.pipelineKey = Jd.pipelineKey, Wd.state = kd, Wd.material = pd, Wd.vertexOffsets = Jd.offsets, Wd.indexBuffer = null, Wd.instances = Nd, Wd
      }
      instanceCount(dd, Jd) {
        switch (Jd) {
          case "thin":
            return dd.forcedInstanceCount || dd.W8;
          case "instanced":
            return this.prepareInstances(dd);
          case "none":
            return 1
        }
      }
      prepareInstances(dd) {
        const Jd = function(dd, Jd) {
          const kd = Jd._userInstancedBuffersStorage,
            pd = dd.batchUploads.get(Jd);
          if (pd) {
            var Nd;
            if (pd.layout === (null !== (Nd = null === kd || void 0 === kd ? void 0 : kd.interleavedKinds) && void 0 !== Nd ? Nd : null)) return pd;
            pd.release()
          }
          return new ud(dd, Jd, kd)
        }(this.resources, dd);
        return Jd.frame !== this.frame && Jd.pack(dd, this.modelMeshes.instanceBatch(dd), this.modelMeshes.worlds, this.frame), Jd.count
      }
      programWithModel(dd, Jd, kd) {
        const pd = this.modelSlot(dd),
          Nd = KW(pd, dd, kd),
          Wd = this.drawDefines.modelPackKind(dd),
          Pd = Wd ? function(dd, Jd, kd, pd) {
            const Nd = (0, ad.v)(dd, Bd.i.name),
              Wd = [];
            for (const {
                feature: gd,
                state: Cd,
                active: Kd
              }
              of dd.features) {
              var Pd, Zd;
              const dd = Kd ? null === (Pd = (Zd = (0, oJ.i)(gd)).EQ) || void 0 === Pd ? void 0 : Pd.call(Zd, Cd) : void 0;
              dd && Wd.push(dd)
            }
            return {
              kind: Jd,
              atlas: null !== Nd && void 0 !== Nd && Nd.active ? (0, Bd.e)(Nd.state) : null,
              defines: kd,
              ...gP(Wd, pd)
            }
          }(dd, Wd, Jd, pd.fragmentCode) : null;
        if (Pd && function(dd) {
            const Jd = dd.defines;
            return (null === dd.atlas || !!Jd.DIFFUSE && 1 === Jd.DIFFUSEDIRECTUV) && !!Jd.NORMAL && !Jd.REFLECTION && !Jd.EMISSIVEASILLUMINATION && !Jd.LINKEMISSIVEWITHDIFFUSE
          }(Pd)) {
          const kd = this.modelPackProgram(dd, Jd, `${Nd}#${Wd}#sp${this.drawDefines.modelPackVariant}`, pd, Pd);
          if (kd && !kd.failed) return kd
        }
        const Zd = this.programs.get(Nd);
        if (Zd || this.unbuildable.has(Nd)) return null !== Zd && void 0 !== Zd ? Zd : null;
        let gd;
        try {
          gd = KN({
            defines: WW(Jd),
            vertexCode: pd.vertexCode,
            fragmentCode: pd.fragmentCode,
            pluginUniforms: pd.pluginUniforms
          })
        } catch (Cd) {
          return this.unbuildable.add(Nd), this.warnOnce(`build:${Nd}`, `could not build a program for ${dd.name}: ${String(Cd)}`), null
        }
        return this.createProgram(Nd, gd, "standard")
      }
      modelPackProgram(dd, Jd, kd, pd, Nd) {
        const Wd = this.programs.get(kd);
        if (Wd || this.unbuildable.has(kd)) return null !== Wd && void 0 !== Wd ? Wd : null;
        const Pd = this.drawDefines.modelPackVariant;
        let Zd;
        try {
          const dd = function(dd) {
              return (0, FJ.c)(dd, "model")
            }(Pd),
            kd = xP(dd, Nd, pd.vertexCode, pd.fragmentCode);
          Zd = iP(KN({
            defines: WW(Jd),
            ...kd,
            pluginUniforms: pd.pluginUniforms
          }), dd, Nd, !!this.sunShadow)
        } catch (Kd) {
          return this.unbuildable.add(kd), this.warnOnce(`build:${kd}`, `could not build a shader pack program for ${dd.name}, which draws without the pack: ${String(Kd)}`), null
        }
        const gd = EW(Pd, !!this.sunShadow),
          Cd = {
            group: this.packInputs.bindGroupFor(null, gd),
            layout: DW(this.device, {
              depth: !1,
              sunShadow: gd
            })
          };
        return this.createProgram(kd, Zd, function(dd) {
          return `standard-sp${dd}`
        }(Pd), Cd)
      }
      lineProgramFor(dd, Jd, kd) {
        const pd = Rd(dd, kd, Jd, this.view);
        let Nd = this.linePrograms.get(pd);
        var Wd;
        return Nd || (Nd = this.createProgram(`lines#${pd}`, (Wd = function(dd) {
          const Jd = new Map;
          for (let kd = 0; kd < Cd.length; kd++) dd & 1 << kd && Jd.set(Cd[kd], !0);
          return Jd
        }(pd), LN({
          defines: Wd,
          vertex: lN,
          fragment: QN,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(pd, Nd)), Nd
      }
      createProgram(dd, Jd, kd) {
        var pd;
        let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wd = this.nextProgramId++,
          Pd = `${kd}-${Wd}`,
          Zd = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          gd = [{
            binding: 0,
            visibility: Zd,
            buffer: {
              type: "uniform"
            }
          }];
        for (const od of Jd.textures) gd.push({
          binding: od.binding,
          visibility: Zd,
          texture: {
            viewDimension: od.dimension
          }
        }), gd.push({
          binding: od.samplerBinding,
          visibility: Zd,
          sampler: {}
        });
        const Cd = this.device.createBindGroupLayout({
            label: Pd,
            entries: gd
          }),
          Kd = {
            key: dd,
            id: Wd,
            kind: kd,
            program: Jd,
            vertex: this.device.createShaderModule({
              label: `${Pd}-vertex`,
              code: Jd.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Pd}-fragment`,
              code: Jd.fragment
            }),
            materialLayout: Cd,
            pipelineLayout: this.device.createPipelineLayout({
              label: Pd,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Cd, ...Nd ? [Nd.layout] : []]
            }),
            packGroup: null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd.group) && void 0 !== pd ? pd : null,
            failed: !1
          };
        return this.programs.set(dd, Kd), Kd
      }
      writeFrameUniforms() {
        const dd = this.frameUniforms;
        RW(this.view, dd), this.device.queue.writeBuffer(this.frameBuffer, 0, dd)
      }
      materialInstance(dd, Jd) {
        let kd = this.materials.get(dd);
        if (!kd) {
          const Jd = new Map;
          this.materials.set(dd, Jd), dd.Zm.addOnce((() => {
            for (const dd of Jd.values()) dd.released = !0, this.resources.destroyBuffer(dd.buffer);
            this.materials.delete(dd)
          })), kd = Jd
        }
        let pd = kd.get(Jd.key);
        return pd || (pd = this.newMaterialInstance(dd, null, Jd), kd.set(Jd.key, pd)), pd
      }
      modelInstance(dd, Jd) {
        const kd = this.modelSlot(dd);
        let pd = kd.instances.get(Jd.key);
        return pd || (pd = this.newMaterialInstance(dd, dd, Jd), kd.instances.set(Jd.key, pd)), pd
      }
      modelSlot(dd) {
        let Jd = dd.gpu[Fd.g.lite];
        return Jd || (Jd = new MP(this.resources), dd.gpu[Fd.g.lite] = Jd), Jd
      }
      newMaterialInstance(dd, Jd, kd) {
        const pd = kd.program.material.floats,
          Nd = new Float32Array(pd),
          Wd = new Map;
        return {
          owner: dd,
          model: Jd,
          program: kd,
          data: Nd,
          uploaded: new Float32Array(pd).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${dd.name}-uniforms`,
            size: Math.max(16, 4 * pd),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Wd,
          ubo: new eW(kd.program.material.slots, Nd, Wd),
          bindGroup: null,
          bound: new Array(2 * kd.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(dd) {
        var Jd;
        const kd = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: GN + vN,
            fragment: GN + xN,
            attributes: [],
            material: IN,
            textures: []
          }, "earthSky"),
          pd = this.earthSkyUniforms ??= this.newMaterialInstance(aP, null, kd);
        this.earthSkyFrom !== dd && (this.earthSkyFrom = dd, pd.data.fill(0)), YN(pd.ubo, dd, this.view);
        const Nd = this.vertexInputs(kd, aP, "earthSky", kd, null);
        if (kd.failed || !Nd || !this.bindMaterial(pd, !1)) return;
        const Wd = null !== (Jd = Nd.state) && void 0 !== Jd ? Jd : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Pd = this.makeDraw(kd, Nd, Wd, pd, 1);
        Pd.count = ON.length;
        const Zd = mN(dd, this.view);
        Pd.slotOffset = this.writeMeshSlot(Zd, 1), this.lists.skyDraws.push(Pd)
      }
      uploadIfChanged(dd) {
        const {
          data: Jd,
          uploaded: kd
        } = dd;
        for (let pd = 0; pd < Jd.length; pd++)
          if (Jd[pd] !== kd[pd]) return kd.set(Jd), void this.device.queue.writeBuffer(dd.buffer, 0, Jd)
      }
      bindMaterial(dd, Jd) {
        return dd.frame !== this.frame && (dd.frame = this.frame, Jd || this.uploadIfChanged(dd), dd.bindable = this.bindTextures(dd)), dd.bindable
      }
      bindTextures(dd) {
        const {
          program: Jd,
          bound: kd
        } = dd, pd = Jd.program.textures;
        let Nd = !dd.bindGroup,
          Wd = !0;
        for (let Pd = 0; Pd < pd.length; Pd++) {
          const Jd = dd.textures.get(pd[Pd].name),
            Zd = Jd ? this.resources.boundTexture(Jd) : null;
          Zd ? kd[2 * Pd] === Zd.view && kd[2 * Pd + 1] === Zd.sampler || (kd[2 * Pd] = Zd.view, kd[2 * Pd + 1] = Zd.sampler, Nd = !0) : (Jd || dd.ubo.expected.has(pd[Pd].name) || this.warnOnce(`texture:${dd.owner.name}:${pd[Pd].name}`, `${dd.owner.name} has no ${pd[Pd].name}`), Wd = !1)
        }
        if (!Wd) return Nd && (dd.bindGroup = null), !1;
        if (Nd) {
          const Nd = [{
            binding: 0,
            resource: {
              buffer: dd.buffer
            }
          }];
          for (let dd = 0; dd < pd.length; dd++) Nd.push({
            binding: pd[dd].binding,
            resource: kd[2 * dd]
          }), Nd.push({
            binding: pd[dd].samplerBinding,
            resource: kd[2 * dd + 1]
          });
          dd.bindGroup = this.device.createBindGroup({
            label: `${dd.owner.name}-material`,
            layout: Jd.materialLayout,
            entries: Nd
          })
        }
        return !0
      }
      writeMeshSlot(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, dd, Jd, kd), this.slotCount++ * Ep
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(dd, Jd, kd, pd, Nd) {
        let Wd = this.inputs.get(dd);
        if (!Wd || Wd.program !== pd || !BW(Jd, Wd, this.resources, Nd)) {
          var Pd;
          if (Wd = null !== (Pd = this.vertexLayouts.resolveInputs(Jd, kd, pd, Nd)) && void 0 !== Pd ? Pd : void 0, !Wd) return null;
          this.inputs.set(dd, Wd)
        }
        return this.withGpuBuffers(Wd)
      }
      meshInputs(dd, Jd, kd) {
        const pd = this.inputs.get(dd);
        if (pd && this.inputsStamped(pd, dd, kd, Jd)) return this.withGpuBuffers(pd);
        const Nd = dd.owner,
          Wd = ZW(dd),
          Pd = this.vertexInputs(dd, Nd, Nd.name, Jd, Wd);
        return Pd && (Pd.geometry = gW(dd), Pd.instanceLayout = this.drawDefines.instanceLayout(Nd, kd)), Pd
      }
      inputsStamped(dd, Jd, kd, pd) {
        return function(dd, Jd, kd, pd) {
          return dd.program === kd && dd.geometry === gW(Jd) && dd.instanceLayout === pd
        }(dd, Jd, pd, this.drawDefines.instanceLayout(Jd.owner, kd))
      }
      withGpuBuffers(dd) {
        return rW(dd, this.resources, this.zeroBuffer) ? dd : null
      }
      instanceBuffersFit(dd, Jd, kd) {
        const pd = tW(Jd, kd, this.resources, this.zeroBuffer);
        if (pd) {
          const Nd = Jd.ends[pd.index] - Jd.offsets[pd.index] + Jd.Y5[pd.index];
          return this.warnOnce(`overrun:${dd}`, `${dd} draws ${kd} instances from a ${Nd}-byte buffer (${pd.needed} needed)`), !1
        }
        return !0
      }
      createBinding(dd, Jd, kd, pd) {
        const Nd = `${Jd._colorFormat}|${Jd._depthStencilFormat}|${Jd._depthCompare}|${Jd._sampleCount}`,
          Wd = ZJ(this.device, Jd);
        if (dd === this.skyLastRenderable) {
          let kd = null;
          return {
            renderable: dd,
            pipeline: Wd,
            draw: dd => kd ? this.drawSky(dd, Jd, Nd, kd) : 0,
            update: dd => {
              kd = dd
            }
          }
        }
        return {
          renderable: dd,
          pipeline: Wd,
          draw: dd => (pd ? pd.execute(dd, Jd, Nd) : 0) + this.drawList(dd, Jd, Nd, kd)
        }
      }
      drawSky(dd, Jd, kd, pd) {
        const Nd = this.lists.skyDraws,
          Wd = Nd.length > 0;
        if (Wd) {
          var Pd;
          const kd = (null !== (Pd = Jd._depthCompare) && void 0 !== Pd ? Pd : pJ).startsWith("greater") ? 0 : 1;
          dd.setViewport(0, 0, pd.targetWidth, pd.targetHeight, kd, kd)
        }
        const Zd = this.drawList(dd, Jd, kd, Nd);
        return Wd && dd.setViewport(0, 0, pd.targetWidth, pd.targetHeight, 0, 1), Zd
      }
      drawList(dd, Jd, kd, pd) {
        let Nd = 0;
        const Wd = this.binder;
        Wd.reset();
        for (const Pd of pd) {
          const pd = this.pipelineFor(Pd, Jd, kd);
          pd && (Wd.bind(dd, Pd, pd, this.meshSlots.bindGroup, Pd.slotOffset), Pd.indexBuffer ? dd.drawIndexed(Pd.count, Pd.instances, Pd.first, 0, 0) : dd.draw(Pd.count, Pd.instances, Pd.first, 0), Nd++)
        }
        return Nd
      }
      pipelineFor(dd, Jd, kd) {
        var pd, Nd;
        if (dd.program.failed) return null;
        const Wd = dd.inputs;
        if (Wd.pipeline && Wd.pipelineTarget === kd) return Wd.pipeline;
        const Pd = `${dd.pipelineKey}|${kd}`,
          Zd = this.pipelines.get(Pd);
        if (void 0 !== Zd) return Zd && (Wd.pipeline = Zd, Wd.pipelineTarget = kd), Zd || null;
        this.pipelines.set(Pd, null);
        const {
          program: gd,
          layout: Cd,
          state: Kd
        } = dd, od = {
          label: `standard-${gd.id}`,
          layout: gd.pipelineLayout,
          vertex: {
            module: gd.vertex,
            entryPoint: "main",
            buffers: Cd.buffers
          },
          fragment: wd({
            module: gd.fragment,
            entryPoint: "main"
          }, Jd, Kd.blend, Kd.colourWrite),
          depthStencil: Jd._depthStencilFormat ? {
            format: Jd._depthStencilFormat,
            depthCompare: null !== (pd = null !== (Nd = Kd.depthCompare) && void 0 !== Nd ? Nd : Jd._depthCompare) && void 0 !== pd ? pd : pJ,
            depthWriteEnabled: Kd.depthWrite,
            depthBias: Kd.depthBias,
            depthBiasSlopeScale: Kd.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: Jd._sampleCount
          },
          primitive: {
            topology: Kd.topology,
            frontFace: Kd.frontFace,
            cullMode: Kd.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(od).then((dd => {
          this.compiling--, this.pipelines.set(Pd, dd)
        }), (dd => {
          this.compiling--, this.reportFailure(gd, Pd, dd)
        })), null
      }
      forEachSunShadowCaster(dd) {
        const Jd = this.caster,
          kd = (kd, pd, Nd) => {
            const Wd = kd.unit && function(dd) {
              const Jd = dd.material.model;
              return null !== Jd && (Jd.lifeform || Jd.item) && Jd.castsSunShadow && "triangle-list" === dd.state.topology
            }(kd) ? ZW(kd.unit) : null;
            if (!Wd) return;
            const Pd = kd.unit.owner;
            switch (Jd.geometry = Wd, Jd.skip = Pd.noSunShadowVertices, Jd.indexed = null !== kd.indexBuffer, Jd.first = kd.first, Jd.count = kd.count, Jd.Vo = pd, Jd.worldAt = Nd, Jd.instances = null, Jd.instanceCount = 1, Jd.thin = !1, pW(Pd)) {
              case "thin": {
                const dd = Pd._thinInstanceDataStorage.matrixData;
                if (!dd) return;
                Jd.instances = dd, Jd.instanceCount = Math.min(kd.instances, dd.length / 16), Jd.thin = !0;
                break
              }
              case "instanced": {
                const dd = this.resources.batchUploads.get(Pd);
                if (!dd || dd.frame !== this.frame || !this.writeBatchCasters(dd)) return;
                break
              }
            }
            dd(Jd)
          };
        for (const pd of this.lists.opaqueDraws) kd(pd, this.meshSlots.data, pd.slotOffset / 4);
        this.thinBundle.forEachDrawn(kd)
      }
      writeBatchCasters(dd) {
        const {
          caster: Jd
        } = this, kd = dd.packedMatrices, pd = dd.count;
        Jd.instances = kd, Jd.instanceCount = pd;
        let Nd = -1;
        for (let Wd = 0; Wd < pd; Wd++) {
          const Jd = mP(dd.packedRowMesh(Wd));
          Jd && Nd < 0 ? (this.casterWorlds.length < 16 * pd && (this.casterWorlds = new Float32Array(kd.length)), this.casterWorlds.set(kd.subarray(0, 16 * Wd)), Nd = Wd) : !Jd && Nd >= 0 && (this.casterWorlds.set(kd.subarray(16 * Wd, 16 * Wd + 16), 16 * Nd), Nd++)
        }
        return Nd >= 0 && (Jd.instances = this.casterWorlds, Jd.instanceCount = Nd), Jd.instanceCount > 0
      }
      async reportFailure(dd, Jd, kd) {
        const pd = [];
        let Nd = !0;
        for (const [Wd, Pd] of [
            ["vertex", dd.vertex],
            ["fragment", dd.fragment]
          ]) {
          const dd = await Pd.getCompilationInfo();
          for (const Jd of dd.messages) Nd &&= "error" !== Jd.type, pd.push(`${Wd}:${Jd.lineNum}:${Jd.linePos} ${Jd.type}: ${Jd.message}`)
        }
        if (Nd && !dd.packGroup) return this.pipelines.set(Jd, !1), console.error(`Lite: pipeline ${Jd} failed`, kd), void zN("mesh", dd.kind, kd);
        dd.failed || (dd.failed = !0, console.error(`Lite: program ${dd.id} failed`, kd, pd.join("\n"), {
          program: dd.program,
          key: dd.key
        }), zN("mesh", dd.kind, kd, Nd ? null : pd[0]))
      }
    }

    function mP(dd) {
      var Jd, kd;
      const pd = null === (Jd = dd.fn) || void 0 === Jd || null === (kd = Jd.aShaderPackItem) || void 0 === kd ? void 0 : kd.x;
      return void 0 !== pd && 0 !== (pd & CJ.g)
    }
    var bP = kd(41653),
      SP = kd(41659),
      jP = kd(41665),
      XP = kd(41623);
    const fP = [0, 3, 1, 4, 2, 5];

    function nP(dd, Jd, kd, pd, Nd) {
      const Wd = kd[0].width;
      try {
        return Nd ? function(dd, Jd, kd) {
          const pd = (0, XP.b)(dd, kd, kd, 6);
          for (let Nd = 0; Nd < 6; Nd++)(0, XP.d)(dd, pd, Nd, Jd[fP[Nd]], {
            invertY: !1
          });
          return pd.texture
        }(dd, kd, Wd) : function(dd, Jd, kd, pd) {
          const Nd = dd.createTexture({
            label: "sink-cube",
            size: {
              width: kd,
              height: kd,
              depthOrArrayLayers: 6
            },
            format: pd,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Wd = 0; Wd < 6; Wd++) dd.queue.copyExternalImageToTexture({
            source: Jd[fP[Wd]]
          }, {
            texture: Nd,
            origin: {
              x: 0,
              y: 0,
              z: Wd
            }
          }, {
            width: kd,
            height: kd
          });
          return Nd
        }(Jd, kd, Wd, 1 === pd ? "r8unorm" : "rgba8unorm")
      } finally {
        UP(kd)
      }
    }

    function UP(dd) {
      for (const Jd of null !== dd && void 0 !== dd ? dd : []) null === Jd || void 0 === Jd || Jd.close()
    }
    async function yP(dd) {
      const Jd = [],
        kd = [];
      if (await Promise.all(dd.map(((dd, pd) => (Jd[pd] = null, dd.then((dd => {
          Jd[pd] = dd
        }), (dd => {
          kd.push(dd)
        })))))), kd.length > 0) throw UP(Jd), kd[0];
      return Jd
    }
    class DP {
      constructor(dd) {
        this.oo = dd, this.starts = [], this.lengths = [], this.used = 0, dd > 0 && (this.starts.push(0), this.lengths.push(dd))
      }
      allocate(dd) {
        const {
          starts: Jd,
          lengths: kd
        } = this;
        for (let pd = 0; pd < Jd.length; pd++) {
          if (kd[pd] < dd) continue;
          const Nd = Jd[pd];
          return kd[pd] === dd ? (Jd.splice(pd, 1), kd.splice(pd, 1)) : (Jd[pd] += dd, kd[pd] -= dd), this.used += dd, Nd
        }
        return -1
      }
      free(dd, Jd) {
        this.used -= Jd;
        const kd = Math.min(dd + Jd, this.oo);
        kd > dd && this.release(dd, kd - dd)
      }
      grow(dd) {
        const Jd = this.oo;
        this.oo = dd, this.release(Jd, dd - Jd)
      }
      truncate(dd) {
        const {
          starts: Jd,
          lengths: kd
        } = this;
        for (let pd = Jd.length - 1; pd >= 0 && Jd[pd] + kd[pd] > dd; pd--) Jd[pd] >= dd ? (Jd.splice(pd, 1), kd.splice(pd, 1)) : kd[pd] = dd - Jd[pd];
        this.oo = dd
      }
      release(dd, Jd) {
        const {
          starts: kd,
          lengths: pd
        } = this;
        let Nd = 0,
          Wd = kd.length;
        for (; Nd < Wd;) {
          const Jd = Nd + Wd >> 1;
          kd[Jd] < dd ? Nd = Jd + 1 : Wd = Jd
        }
        const Pd = Nd,
          Zd = Pd > 0 && kd[Pd - 1] + pd[Pd - 1] === dd,
          gd = Pd < kd.length && dd + Jd === kd[Pd];
        Zd && gd ? (pd[Pd - 1] += Jd + pd[Pd], kd.splice(Pd, 1), pd.splice(Pd, 1)) : Zd ? pd[Pd - 1] += Jd : gd ? (kd[Pd] = dd, pd[Pd] += Jd) : (kd.splice(Pd, 0, dd), pd.splice(Pd, 0, Jd))
      }
    }
    const TP = 256;
    class EP {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = dd, this.onReplaced = Jd, this.mergeGap = kd, this.gpu = null, this.bytes = void 0, this.UO = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Nd = Math.max(TP, Math.ceil(pd / TP) * TP);
        this.bytes = new Uint8Array(Nd), this.UO = new DP(Nd / TP)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(dd) {
        return Math.max(1, Math.ceil(dd / TP)) * TP
      }
      allocate(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd;
        const pd = EP.slotBytes(dd),
          Nd = pd / TP;
        let Wd = this.UO.allocate(Nd);
        Wd < 0 && (this.grow(this.UO.oo + Nd), Wd = this.UO.allocate(Nd));
        const Pd = Wd * TP;
        return this.growTo(Pd + Math.max(kd, pd)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Pd, Pd + pd), Jd && this.bytes.set(new Uint8Array(Jd.buffer, Jd.byteOffset, Math.min(Jd.byteLength, pd)), Pd), this.markDirty(Pd, Pd + pd), Pd
      }
      growTo(dd) {
        const Jd = Math.ceil(dd / TP);
        Jd > this.UO.oo && this.grow(Jd)
      }
      free(dd, Jd) {
        this.freed.push(dd, Jd)
      }
      write(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (pd <= 0) return;
        this.bytes.set(new Uint8Array(Jd.buffer, kd, pd), dd);
        let Wd = dd + pd;
        if (Nd) {
          const Jd = dd + 4 * Math.ceil(pd / 4);
          this.bytes.fill(0, Wd, Jd), Wd = Jd
        }
        this.markDirty(dd, Wd)
      }
      move(dd, Jd, kd) {
        this.bytes.copyWithin(Jd, dd, dd + kd), this.markDirty(Jd, Jd + kd)
      }
      flush() {
        for (const Jd of this.retired) this.onReplaced(Jd), Jd.destroy();
        this.retired.length = 0;
        const dd = this.dirtyStarts.length;
        if (dd > 0) {
          const {
            dirtyStarts: Jd,
            dirtyEnds: kd,
            order: pd
          } = this;
          pd.length = dd;
          for (let Zd = 0; Zd < dd; Zd++) pd[Zd] = Zd;
          dd > 1 && pd.sort(((dd, kd) => Jd[dd] - Jd[kd]));
          const Nd = this.mergeGap;
          let Wd = Jd[pd[0]],
            Pd = kd[pd[0]];
          for (let Zd = 1; Zd < dd; Zd++) {
            const dd = pd[Zd];
            Jd[dd] - Pd <= Nd ? Pd = Math.max(Pd, kd[dd]) : (this.send(Wd, Pd), Wd = Jd[dd], Pd = kd[dd])
          }
          this.send(Wd, Pd), Jd.length = 0, kd.length = 0
        }
        this.holding = !1
      }
      aG() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const dd = this.freed;
        for (let Jd = 0; Jd < dd.length; Jd += 2) this.UO.free(dd[Jd] / TP, dd[Jd + 1] / TP);
        dd.length = 0
      }
      send(dd, Jd) {
        this.device.queue.writeBuffer(this.gpu, dd, this.bytes.buffer, dd, Jd - dd);
        for (const kd of this.replaced) {
          const pd = Math.min(Jd, kd.size);
          pd > dd && this.device.queue.writeBuffer(kd, dd, this.bytes.buffer, dd, pd - dd)
        }
      }
      markDirty(dd, Jd) {
        dd &= -4, Jd = Jd + 3 & -4, this.holding ? (this.dirtyStarts.push(dd), this.dirtyEnds.push(Jd)) : this.send(dd, Jd)
      }
      grow(dd) {
        const Jd = this.UO.oo,
          kd = Math.max(2 * Jd, dd),
          pd = new Uint8Array(kd * TP);
        pd.set(this.bytes);
        const Nd = this.gpu;
        this.gpu = this.createGpu(pd.byteLength), this.bytes = pd, this.UO.grow(kd), Nd && (this.replaced.push(Nd), this.onReplaced(Nd)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Jd * TP)
      }
      createGpu(dd) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: dd,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function cP(dd) {
      return Array.isArray(dd) ? new Float32Array(dd) : dd
    }

    function hP(dd, Jd, kd, pd, Nd) {
      const Wd = SN(Nd),
        Pd = Math.min(Nd, pd.byteLength);
      if (Wd === Pd && pd.byteOffset % 4 === 0) return void dd.queue.writeBuffer(Jd, kd, pd.buffer, pd.byteOffset, Wd);
      const Zd = new Uint8Array(Wd);
      Zd.set(new Uint8Array(pd.buffer, pd.byteOffset, Pd)), dd.queue.writeBuffer(Jd, kd, Zd)
    }

    function rP(dd, Jd, kd) {
      const pd = "linear",
        Nd = "nearest";
      let Wd = Nd,
        Pd = Nd,
        Zd = "nearest",
        gd = !Jd;
      switch (dd) {
        case 11:
          Wd = pd, Pd = pd;
          break;
        case 3:
          Wd = pd, Pd = pd, Zd = Jd ? "linear" : "nearest";
          break;
        case 8:
          Zd = Jd ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Pd = pd;
          break;
        case 6:
          Pd = pd, Zd = Jd ? "linear" : "nearest";
          break;
        case 7:
          Pd = pd, gd = !0;
          break;
        case 9:
          Wd = pd;
          break;
        case 10:
          Wd = pd, Zd = Jd ? "linear" : "nearest";
          break;
        case 2:
          Wd = pd, Pd = pd, kd > 1 ? (Zd = "linear", gd = !1) : gd = !0;
          break;
        case 12:
          Wd = pd, gd = !0;
          break;
        default:
          gd = !0
      }
      return kd > 1 && !gd ? {
        magFilter: pd,
        minFilter: pd,
        mipmapFilter: "linear",
        maxAnisotropy: kd
      } : {
        magFilter: Wd,
        minFilter: Pd,
        mipmapFilter: Zd,
        ...gd ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function uP(dd) {
      return 0 === dd ? "clamp-to-edge" : 2 === dd ? "mirror-repeat" : "repeat"
    }
    class tP {
      constructor(dd, Jd) {
        let {
          vertexArena: kd = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = dd, this.device = Jd, this.buffers = new WeakMap, this.S_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = kd ? new EP(Jd, (dd => {
          var Jd;
          null === (Jd = this.onDestroy) || void 0 === Jd || Jd.call(this, dd), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var dd;
        null === (dd = this.arena) || void 0 === dd || dd.flush()
      }
      endUploadFrame() {
        var dd;
        null === (dd = this.arena) || void 0 === dd || dd.aG()
      }
      vertexBufferCreated(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kd ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(dd);
        const Nd = cP(Jd);
        dd.oo = Nd.byteLength, this.buffers.set(dd, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: kd && null !== this.arena,
          pending: Nd,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: pd
        })
      }
      vertexBufferUpdated(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        const Nd = this.buffers.get(dd);
        if (!Nd) return;
        const Wd = cP(Jd),
          Pd = void 0 === pd ? Wd.byteLength : Math.min(pd, Wd.byteLength);
        this.update(Nd, Wd, kd, Pd)
      }
      vertexBufferFloatsUpdated(dd, Jd, kd, pd) {
        const Nd = this.buffers.get(dd);
        if (!Nd) return;
        const Wd = kd * Float32Array.BYTES_PER_ELEMENT,
          Pd = (pd - kd) * Float32Array.BYTES_PER_ELEMENT;
        Nd.slot >= 0 && Pd > 0 && Wd + Pd <= Nd.size ? this.writeSlot(Nd, Wd, Jd, Jd.byteOffset + Wd, Pd, !1) : Nd.gpu && Pd > 0 && Wd + Pd <= Nd.gpu.size ? this.device.queue.writeBuffer(Nd.gpu, Wd, Jd.buffer, Jd.byteOffset + Wd, Pd) : this.update(Nd, Jd.subarray(kd, pd), Wd, Pd)
      }
      indexBufferCreated(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(dd);
        const pd = function(dd) {
          if (dd instanceof Uint16Array || dd instanceof Uint32Array) return dd;
          for (let Jd = 0; Jd < dd.length; Jd++)
            if (dd[Jd] >= 65535) return new Uint32Array(dd);
          return new Uint16Array(dd)
        }(Jd);
        dd.is32Bits = 4 === pd.BYTES_PER_ELEMENT, dd.oo = pd.byteLength, this.buffers.set(dd, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: pd,
          ownsPending: pd !== Jd,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: kd
        })
      }
      bufferDeleted(dd) {
        const Jd = this.buffers.get(dd);
        null !== Jd && void 0 !== Jd && Jd.gpu ? (this.destroyBuffer(Jd.gpu), this.gpuBuffersVersion++) : Jd && Jd.slot >= 0 && (this.arena.free(Jd.slot, Jd.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(dd)
      }
      update(dd, Jd, kd, pd) {
        if (dd.slot >= 0) this.updateSlot(dd, Jd, kd, pd);
        else if (dd.gpu) {
          if (kd + SN(pd) > dd.gpu.size) {
            const Jd = this.device.createBuffer({
                label: dd.label,
                size: SN(Math.max(2 * dd.gpu.size, kd + pd)),
                usage: dd.usage | GPUBufferUsage.COPY_SRC
              }),
              Nd = this.device.createCommandEncoder();
            Nd.copyBufferToBuffer(dd.gpu, 0, Jd, 0, dd.gpu.size), this.device.queue.submit([Nd.finish()]), this.destroyBuffer(dd.gpu), this.gpuBuffersVersion++, dd.gpu = Jd
          }
          hP(this.device, dd.gpu, kd, Jd, pd)
        } else {
          const Wd = new Uint8Array(Jd.buffer, Jd.byteOffset, pd),
            Pd = dd.pending;
          if (Pd && dd.ownsPending && kd + pd <= Pd.byteLength) new Uint8Array(Pd.buffer, Pd.byteOffset, Pd.byteLength).set(Wd, kd);
          else if (Pd && 0 === kd && pd === Pd.byteLength && Jd.byteLength === pd) dd.pending = Jd, dd.ownsPending = !1;
          else {
            var Nd;
            const Jd = new Uint8Array(Math.max(null !== (Nd = null === Pd || void 0 === Pd ? void 0 : Pd.byteLength) && void 0 !== Nd ? Nd : 0, kd + pd));
            Pd && Jd.set(new Uint8Array(Pd.buffer, Pd.byteOffset, Pd.byteLength)), Jd.set(Wd, kd), dd.pending = Jd, dd.ownsPending = !0
          }
        }
      }
      updateSlot(dd, Jd, kd, pd) {
        const Nd = this.arena;
        kd + SN(pd) > dd.size && (dd.size = SN(Math.max(2 * dd.size, kd + pd)), Nd.growTo(dd.slot + dd.size), this.gpuBuffersVersion++), 0 === pd ? this.writeSlot(dd, kd, zP, 0, 4, !1) : this.writeSlot(dd, kd, Jd, Jd.byteOffset, pd, !0)
      }
      writeSlot(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = Jd + (Wd ? SN(Nd) : Nd);
        Pd > dd.slotBytes && this.moveSlot(dd, Pd), this.arena.write(dd.slot + Jd, kd, pd, Nd, Wd)
      }
      moveSlot(dd, Jd) {
        const kd = this.arena,
          pd = EP.slotBytes(Math.max(Jd, Math.min(2 * dd.slotBytes, dd.size))),
          Nd = kd.allocate(pd, null, dd.size);
        kd.move(dd.slot, Nd, dd.slotBytes), kd.free(dd.slot, dd.slotBytes), dd.slot = Nd, dd.slotBytes = pd, this.gpuBuffersVersion++
      }
      cover(dd, Jd) {
        const kd = this.buffers.get(dd);
        if (!kd || kd.slot < 0) return !1;
        const pd = Math.min(Jd, kd.size);
        return !(pd <= kd.slotBytes) && (this.moveSlot(kd, pd), !0)
      }
      destroyBuffer(dd) {
        var Jd;
        null === (Jd = this.onDestroy) || void 0 === Jd || Jd.call(this, dd), dd.destroy()
      }
      gpuBuffer(dd) {
        const Jd = this.buffers.get(dd);
        if (!Jd) return null;
        if (Jd.slot >= 0) return this.arena.buffer;
        if (Jd.arena && Jd.pending) {
          const dd = Jd.pending,
            kd = this.arena;
          return Jd.size = SN(dd.byteLength), Jd.slotBytes = EP.slotBytes(function(dd) {
            const Jd = new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength);
            let kd = Jd.length;
            if (dd.byteOffset % 4 === 0) {
              for (; kd % 4 !== 0 && 0 === Jd[kd - 1];) kd--;
              if (kd % 4 === 0) {
                const Jd = new Uint32Array(dd.buffer, dd.byteOffset, kd / 4);
                let pd = Jd.length;
                for (; pd > 0 && 0 === Jd[pd - 1];) pd--;
                kd = 4 * pd
              }
            }
            for (; kd > 0 && 0 === Jd[kd - 1];) kd--;
            return kd
          }(dd)), Jd.slot = kd.allocate(Jd.slotBytes, dd, Jd.size), Jd.pending = null, kd.buffer
        }
        if (!Jd.gpu && Jd.pending) {
          const dd = Jd.pending;
          Jd.gpu = this.device.createBuffer({
            label: Jd.label,
            size: SN(dd.byteLength),
            usage: Jd.usage
          }), hP(this.device, Jd.gpu, 0, dd, dd.byteLength), Jd.pending = null
        }
        return Jd.gpu
      }
      gpuOffset(dd) {
        var Jd, kd;
        const pd = null !== (Jd = null === (kd = this.buffers.get(dd)) || void 0 === kd ? void 0 : kd.slot) && void 0 !== Jd ? Jd : -1;
        return pd < 0 ? 0 : pd
      }
      gpuEnd(dd) {
        var Jd, kd;
        const pd = this.buffers.get(dd);
        return pd ? pd.slot >= 0 ? pd.slot + pd.size : null !== (Jd = null === (kd = pd.gpu) || void 0 === kd ? void 0 : kd.size) && void 0 !== Jd ? Jd : 0 : 0
      }
      vertexInput(dd, Jd, kd) {
        var pd, Nd, Wd, Pd;
        return null !== (pd = null !== (Nd = kd && this.modelInput(kd, Jd)) && void 0 !== Nd ? Nd : null === (Wd = null !== (Pd = this.S_.get(dd)) && void 0 !== Pd ? Pd : this.batchUploads.get(dd)) || void 0 === Wd ? void 0 : Wd.inputs[Jd]) && void 0 !== pd ? pd : null
      }
      modelInput(dd, Jd) {
        const kd = this.geometrySlot(dd);
        let pd = kd.inputs.get(Jd);
        if (void 0 === pd) {
          const Nd = dd.vertexAttributes.find((dd => dd.kind === Jd));
          pd = Nd ? new td(this.modelKey(kd, Nd.data, !1), Nd.offset, Nd.stride, Nd.components, !1, Nd.glType, Nd.isNormalized) : null, kd.inputs.set(Jd, pd)
        }
        return pd
      }
      modelIndex(dd) {
        return dd.indexData && this.modelKey(this.geometrySlot(dd), dd.indexData, !0)
      }
      geometrySlot(dd) {
        let Jd = dd.gpu[Fd.g.lite];
        if (!Jd) {
          const kd = new Map,
            pd = () => {
              for (const dd of kd.values()) this.bufferDeleted(dd)
            },
            Nd = dd => {
              const Jd = kd.get(dd);
              Jd && this.vertexBufferUpdated(Jd, dd)
            };
          Jd = {
            keys: kd,
            inputs: new Map,
            release: pd,
            updated: Nd
          }, dd.gpu[Fd.g.lite] = Jd
        }
        return Jd
      }
      modelKey(dd, Jd, kd) {
        let pd = dd.keys.get(Jd);
        if (!pd) {
          if (kd) {
            const dd = {
              oo: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(dd, Jd, "model-indices"), pd = dd
          } else pd = {
            oo: 0
          }, this.vertexBufferCreated(pd, Jd, !1, "model-vertices");
          dd.keys.set(Jd, pd)
        }
        return pd
      }
      indexFormat(dd) {
        return dd.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(dd, Jd) {
        --dd.refs > 0 || (this.releaseTexture(dd), UP(dd.images), null !== Jd && this.textures.delete(Jd))
      }
      load(dd, Jd) {
        const kd = Jd.decoded = async function(dd) {
          if ("cube" === dd.kind) return async function(dd) {
            if (6 !== dd.length) throw new Error(`${dd.length} files where six faces were expected`);
            const Jd = await yP(dd.map((dd => yN(dd)))),
              kd = Jd[0].width;
            return yP(Jd.map((async dd => {
              if (dd.width === kd && dd.height === kd) return dd;
              try {
                return await createImageBitmap(dd, {
                  ...nN,
                  resizeWidth: kd,
                  resizeHeight: kd
                })
              } finally {
                dd.close()
              }
            })))
          }(dd.files);
          if ("data" === dd.kind && dd.data) return [await createImageBitmap(new Blob([dd.data]), nN)];
          return [await yN(VP(dd))]
        }(dd.source).then((dd => {
          0 === Jd.refs ? UP(dd) : Jd.images = dd
        }));
        this.track(Jd, VP(dd.source), kd, (() => {
          Jd.wanted && !Jd.failed && Jd.refs > 0 && this.upload(dd, Jd)
        }))
      }
      canvasUpdated(dd, Jd, kd) {
        const {
          state: pd
        } = this.textureSlot(dd);
        pd.dynamicSource = {
          invertY: Jd,
          premultiplied: kd
        }, pd.dynamic && this.pushDynamic(dd.source, pd)
      }
      async atlasArray(dd, Jd, kd) {
        const pd = await EN(this.device, dd, Jd, kd);
        if (!this.atlasBindings.has(pd)) {
          const dd = (0, bP.e)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(pd, {
            view: pd.texture.createView({
              dimension: "2d-array"
            }),
            sampler: dd
          })
        }
        return pd
      }
      boundTexture(dd) {
        const Jd = this.atlasBindings.get(dd);
        if (Jd) return Jd;
        const kd = dd;
        if (kd.released) return null;
        const pd = this.textureSlot(kd, !0),
          {
            state: Nd
          } = pd;
        if (!Nd.view && (Nd.wanted = !0, Nd.loading || Nd.failed || this.upload(kd, Nd), !Nd.view)) return null;
        const Wd = this.chosenSampler(kd, pd),
          Pd = pd.bound;
        return Pd && Pd.view === Nd.view && Pd.sampler === Wd ? Pd : (pd.bound = {
          view: Nd.view,
          sampler: Wd
        }, pd.bound)
      }
      textureLoaded(dd) {
        var Jd, kd;
        return null !== (Jd = null === (kd = dd.gpu[Fd.g.lite]) || void 0 === kd ? void 0 : kd.state.decoded) && void 0 !== Jd ? Jd : null
      }
      textureFailed(dd) {
        var Jd;
        return !0 === (null === (Jd = dd.gpu[Fd.g.lite]) || void 0 === Jd ? void 0 : Jd.state.failed)
      }
      chosenSampler(dd, Jd) {
        const {
          samplingMode: kd,
          wrapU: pd,
          wrapV: Nd
        } = dd.sampler, Wd = Jd.state.hasMips, Pd = function(dd, Jd) {
          const {
            bilinear: kd,
            trilinear: pd
          } = Fd.h;
          return !Jd && dd !== kd || 11 !== dd && dd !== pd && dd !== kd ? 1 : 4
        }(kd, Wd), Zd = Jd.sampler;
        if (Zd && Zd.samplingMode === kd && Zd.hasMips === Wd && Zd.anisotropy === Pd && Zd.wrapU === pd && Zd.wrapV === Nd) return Zd.sampler;
        const gd = this.samplerFor(kd, Wd, Pd, pd, Nd);
        return Jd.sampler = {
          samplingMode: kd,
          hasMips: Wd,
          anisotropy: Pd,
          wrapU: pd,
          wrapV: Nd,
          sampler: gd
        }, gd
      }
      releaseTexture(dd) {
        var Jd, kd;
        dd.view && (null === (kd = this.onDestroy) || void 0 === kd || kd.call(this, dd.view));
        null === (Jd = dd.destroy) || void 0 === Jd || Jd.call(dd)
      }
      textureSlot(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = dd.gpu[Fd.g.lite];
        if (kd) return kd;
        const pd = function(dd) {
          let {
            source: Jd,
            sampler: kd
          } = dd;
          return "canvas" === Jd.kind ? null : `${Jd.kind}|${VP(Jd)}|${kd.noMipmap}|${kd.samplingMode}|${kd.invertY}`
        }(dd);
        let Nd = null === pd ? void 0 : this.textures.get(pd);
        Nd || (Nd = {
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
        }, null !== pd && (this.textures.set(pd, Nd), this.load(dd, Nd), Jd && this.firstBindDecodes++)), Nd.refs++;
        const Wd = Nd,
          Pd = {
            state: Nd,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(Wd, pd)
            }
          };
        return dd.gpu[Fd.g.lite] = Pd, Pd
      }
      samplerFor(dd, Jd, kd, pd, Nd) {
        const Wd = `${dd}|${Jd}|${kd}|${pd}|${Nd}`;
        let Pd = this.samplers.get(Wd);
        if (!Pd) {
          const Zd = {
            ...rP(dd, Jd, kd),
            addressModeU: uP(pd),
            addressModeV: uP(Nd)
          };
          Pd = (0, bP.e)(this.engine, Zd), this.samplers.set(Wd, Pd)
        }
        return Pd
      }
      upload(dd, Jd) {
        const {
          source: kd,
          sampler: pd
        } = dd;
        Jd.hasMips = !pd.noMipmap, "canvas" === kd.kind ? this.createDynamic(kd, Jd) : "cube" === kd.kind ? this.uploadCube(Jd, kd.luminance) : this.uploadImage(Jd, !0 === pd.invertY, kd.url)
      }
      uploadImage(dd, Jd, kd) {
        const [pd] = dd.images;
        dd.images = null;
        const Nd = (0, SP.e)(this.engine, pd, {
          mipMaps: dd.hasMips,
          invertY: Jd,
          srgb: !1
        }).then((Jd => {
          pd.close(), 0 !== dd.refs ? (dd.view = Jd.view, dd.destroy = Jd.texture.destroy.bind(Jd.texture)) : Jd.texture.destroy()
        }));
        this.track(dd, kd, Nd)
      }
      track(dd, Jd, kd, pd) {
        dd.loading = !0, this.pending++, kd.catch((kd => {
          dd.failed = !0, console.warn(`Lite: could not load texture ${UN(Jd)}`, kd)
        })).finally((() => {
          dd.loading = !1, this.pending--, null === pd || void 0 === pd || pd()
        }))
      }
      uploadCube(dd, Jd) {
        const kd = dd.images;
        dd.images = null;
        const pd = nP(this.engine, this.device, kd, (0, Fd.A)(Jd), dd.hasMips);
        dd.view = pd.createView({
          dimension: "cube"
        }), dd.destroy = () => {
          pd.destroy()
        }
      }
      createDynamic(dd, Jd) {
        const {
          canvas: kd
        } = dd, pd = (0, jP.b)(this.engine, Math.max(1, kd.width), Math.max(1, kd.height), {
          mipMaps: Jd.hasMips,
          srgb: !1
        });
        Jd.dynamic = pd, Jd.view = pd.view, Jd.destroy = () => {
          pd.texture.destroy()
        }, this.pushDynamic(dd, Jd)
      }
      pushDynamic(dd, Jd) {
        const kd = Jd.dynamicSource,
          pd = Jd.dynamic,
          {
            canvas: Nd
          } = dd;
        if (kd && pd && 0 !== Nd.width && 0 !== Nd.height) return Nd.width !== pd.width || Nd.height !== pd.height ? (this.releaseTexture(Jd), Jd.dynamic = null, Jd.view = null, void this.createDynamic(dd, Jd)) : void(0, jP.f)(this.engine, pd, Nd, {
          invertY: kd.invertY,
          premultiplyAlpha: kd.premultiplied
        })
      }
    }

    function VP(dd) {
      return "cube" === dd.kind ? dd.rootUrl : "canvas" === dd.kind ? "canvas" : dd.url
    }
    const zP = new Uint8Array(4);

    function HP(dd) {
      const Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      dd._colorAttachment.storeOp = dd._targetSignature._sampleCount > 1 ? Jd : "store";
      const kd = dd._renderPassDescriptor.depthStencilAttachment;
      kd && (kd.depthStoreOp = Jd, kd.stencilStoreOp && (kd.stencilStoreOp = Jd))
    }
    var wP = kd(37969),
      AP = kd(38019),
      dZ = kd(37669),
      JZ = kd(39697);
    const kZ = new Float64Array([1, 1, 1]),
      pZ = new Float64Array([0, 1, 0]),
      NZ = new Float64Array(4),
      WZ = new Float32Array(16),
      PZ = new Float64Array(3),
      ZZ = new Float64Array(4);

    function gZ(dd, Jd, kd) {
      dd.fov = Jd.fov, dd.near = Jd.near, dd.far = Jd.far, dd.renderWidth = kd.renderWidth, dd.renderHeight = kd.renderHeight, (0, dZ.q)(Jd.holderRotation, 0, NZ, 0), (0, dZ.d)(kZ, 0, NZ, 0, Jd.holderPosition, 0, WZ);
      const pd = Jd.Xw;
      PZ[0] = pd[0], PZ[1] = pd[1], PZ[2] = pd[2] + 1;
      const Nd = dd.viewMatrix;
      (0, dZ.k)(pd, PZ, pZ, Nd), (0, dZ.i)(Nd, 0, Nd), (0, dZ.l)(Nd, WZ, 0, Nd), (0, dZ.i)(Nd, 0, Nd);
      const Wd = dd.worldMatrix;
      (0, dZ.i)(Nd, 0, Wd), dd.eye[0] = Wd[12], dd.eye[1] = Wd[13], dd.eye[2] = Wd[14], ZZ[0] = dd.fov, ZZ[1] = dd.renderWidth / dd.renderHeight, ZZ[2] = dd.near, ZZ[3] = dd.far, (0, dZ.m)(ZZ, dd.projectionMatrix), (0, dZ.l)(Nd, dd.projectionMatrix, 0, dd.viewProjectionMatrix), (0, JZ.d)(dd.viewProjectionMatrix, dd.frustum)
    }

    function CZ(dd, Jd) {
      let kd = dd.frustumPlanes;
      kd || (kd = dd.frustumPlanes = Array.from({
        length: 6
      }, (() => new wP.c(0, 0, 0, 0))));
      for (let pd = 0; pd < 6; pd++) {
        const dd = kd[pd].normal;
        dd._x = Jd[4 * pd], dd._y = Jd[4 * pd + 1], dd._z = Jd[4 * pd + 2], dd._isDirty = !0, kd[pd].d = Jd[4 * pd + 3]
      }
    }

    function KZ(dd, Jd) {
      const kd = Jd.clearColor;
      dd.clearColour[0] = kd.r, dd.clearColour[1] = kd.g, dd.clearColour[2] = kd.b, dd.clearColour[3] = kd.a;
      const pd = Jd.ambientColor;
      dd.ambientColour[0] = pd.r, dd.ambientColour[1] = pd.g, dd.ambientColour[2] = pd.b, dd.animationRatio = Jd.animationRatio, dd.frameId = Jd.frameId, dd.version++
    }

    function oZ(dd) {
      const Jd = dd.model.view;
      return Jd.animTick = (0, AP.e)(), Jd.timeMs = performance.now(), KZ(Jd, dd.BO), dd.model.update(Jd.frameId), Jd
    }

    function lZ(dd) {
      const Jd = dd.BO,
        {
          view: kd,
          mw: pd
        } = dd.model;
      return gZ(kd, pd, Jd.eL()), Jd.onBeforeRenderObservable.notifyObservers(Jd), CZ(Jd, kd.frustum), Jd.onBeforeCameraRenderObservable.notifyObservers(Jd.activeCamera), oZ(dd)
    }
    var QZ = kd(37618),
      LZ = kd(37751),
      OZ = kd(38010);

    function eZ(dd) {
      var Jd, kd;
      const pd = (0, ad.$)(dd);
      if (!pd || pd.diffuseTexture && (0, OZ.j)(dd)) return null;
      const Nd = null === (Jd = (0, ad.v)(pd, Bd.i.name)) || void 0 === Jd ? void 0 : Jd.state,
        Wd = null === (kd = (0, ad.v)(pd, VW.d.name)) || void 0 === kd ? void 0 : kd.state,
        Pd = new Float32Array(16);
      return function(dd, Jd, kd, pd) {
        var Nd, Wd;
        const Pd = Lp;
        pd.set(dd.diffuseColor, Pd.diffuse), pd[Pd.diffuse + 3] = dd.alpha, pd.set(dd.ambientColor, Pd.ambientAndCutoff), pd[Pd.ambientAndCutoff + 3] = dd.alphaCutOff, pd.set(dd.emissiveColor, Pd.emissiveAndLevel), pd[Pd.emissiveAndLevel + 3] = null !== (Nd = null === (Wd = dd.diffuseTexture) || void 0 === Wd ? void 0 : Wd.level) && void 0 !== Nd ? Nd : 1, null !== Jd && void 0 !== Jd && Jd.animDataPerTex ? (pd[Pd.anim + 1] = AP.d, pd[Pd.anim + 2] = Jd.animDataPerTex.length / 3 - 1) : kd && (pd[Pd.anim + 1] = kd.numAnimStates, pd[Pd.anim + 2] = kd.ticksPerAnimState)
      }(pd, Nd, Wd, Pd), {
        model: pd,
        atlas: Nd,
        texture: Nd ? "atlas" : pd.diffuseTexture ? "single" : "none",
        animated: Nd ? !!Nd.animDataPerTex : !!Wd,
        liquid: (0, OZ.m)(dd),
        customRenderMat: (0, OZ.j)(dd),
        uniformData: Pd
      }
    }
    var RZ = kd(2754);
    class IZ {
      constructor(dd) {
        this.units = dd, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var dd;
        this.buffer.destroy(), null === (dd = this.twin) || void 0 === dd || dd.destroy()
      }
    }
    class GZ {
      constructor(dd, Jd) {
        this.arena = dd, this.UO = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.UO = new DP(Jd);
        const kd = new IZ(Jd);
        kd.buffer = this.createBuffer(kd, !1), this.backings.push(kd), this.refresh()
      }
      get oo() {
        return this.UO.oo
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
        let dd = 0;
        for (const Jd of this.backings) dd += Jd.units * (this.arena.unitBytes + (Jd.twin ? this.arena.twinUnitBytes : 0));
        return dd
      }
      holds(dd) {
        return dd.start + dd.length <= this.usable
      }
      lost(dd) {
        return this.dropped || dd.start + dd.length > this.oo
      }
      write(dd, Jd) {
        const {
          device: kd,
          unitBytes: pd
        } = this.arena;
        for (const Nd of this.backings) {
          const Wd = (Nd.units - dd.start) * pd;
          Wd > 0 && kd.queue.writeBuffer(Nd.buffer, dd.start * pd, Jd, 0, Math.min(Jd.byteLength, Wd))
        }
      }
      writeLight(dd, Jd) {
        const {
          device: kd,
          twinUnitBytes: pd,
          verticesPerUnit: Nd
        } = this.arena, {
          light: Wd,
          count: Pd
        } = this.arena.twinLight(Jd, Math.min(Jd.length, dd.length * Nd));
        for (const Zd of this.backings) {
          Zd.twin || (Zd.twin = this.createBuffer(Zd, !0));
          const Jd = (Zd.units - dd.start) * Nd;
          Jd > 0 && kd.queue.writeBuffer(Zd.twin, dd.start * pd, Wd, 0, Math.min(Pd, Jd))
        }
      }
      grow(dd) {
        this.arena.assertNotDrawing();
        const {
          device: Jd,
          unitBytes: kd,
          label: pd
        } = this.arena, Nd = this.backings[this.backings.length - 1], Wd = new IZ(dd), Pd = Jd.createCommandEncoder({
          label: `${pd}-grow`
        });
        Wd.buffer = this.createBuffer(Wd, !1), Pd.copyBufferToBuffer(Nd.buffer, 0, Wd.buffer, 0, Nd.units * kd), Nd.twin && (Wd.twin = this.createBuffer(Wd, !0), Pd.copyBufferToBuffer(Nd.twin, 0, Wd.twin, 0, Nd.units * this.arena.twinUnitBytes)), Jd.queue.submit([Pd.finish()]), this.backings.push(Wd), this.UO.grow(dd)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const dd of this.backings) dd.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(dd, Jd) {
        const {
          device: kd,
          unitBytes: pd,
          twinUnitBytes: Nd,
          usage: Wd,
          label: Pd
        } = this.arena;
        kd.pushErrorScope("out-of-memory");
        const Zd = kd.createBuffer({
          label: Jd ? `${Pd}-light` : Pd,
          size: dd.units * (Jd ? Nd : pd),
          usage: (Jd ? this.arena.twinUsage : Wd) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, kd.popErrorScope().then((kd => {
          this.arena.awaitingVerdict--, this.settle(dd, Jd, !kd, !0)
        }), (kd => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Pd} buffer, taken as failed: ${String(kd)}`), this.settle(dd, Jd, !1, !1)
        })), Zd
      }
      settle(dd, Jd, kd, pd) {
        const Nd = this.backings.indexOf(dd);
        if (!(this.dropped || Nd < 0)) {
          if (!kd) {
            if (pd && this.arena.ranOutOfMemory(dd.units, dd.units * (Jd ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Nd) return void this.drop();
            for (const dd of this.backings.splice(Nd)) dd.destroy();
            return this.UO.truncate(this.backings[Nd - 1].units), this.growable = !1, void this.promote()
          }
          Jd ? dd.twinReady = !0 : (dd.bufferReady = !0, this.arena.allocatedBuffer(dd.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: dd
        } = this;
        let Jd = 0;
        for (; Jd + 1 < dd.length && dd[Jd].ready && dd[Jd + 1].ready;) Jd++;
        for (const kd of dd.splice(0, Jd)) kd.destroy();
        this.refresh()
      }
      refresh() {
        const dd = this.backings[0];
        this.buffer = dd.buffer, this.twin = dd.twinReady ? dd.twin : null, this.usable = !this.dropped && dd.bufferReady ? dd.units : 0
      }
    }
    class vZ {
      constructor(dd, Jd, kd, pd) {
        let {
          verticesPerUnit: Nd = 1,
          twinUsage: Wd = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = dd, this.unitBytes = Jd, this.usage = kd, this.label = pd, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, KJ.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), Jd % 4 !== 0) throw new Error(`${pd}: ${Jd}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Nd, this.twinUsage = Wd, this.twinValueBytes = Nd > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Nd
      }
      twinLight(dd, Jd) {
        if (4 === this.twinValueBytes) return this.widened.length < Jd && (this.widened = new Float32Array(Math.max(Jd, 2 * this.widened.length))), this.widened.set(dd.subarray(0, Jd)), {
          light: this.widened,
          count: Jd
        };
        const kd = Jd % this.verticesPerUnit;
        if (0 === kd) return {
          light: dd,
          count: Jd
        };
        const pd = Jd - kd + this.verticesPerUnit;
        return this.padded.length < pd && (this.padded = new Uint16Array(Math.max(pd, 2 * this.padded.length))), this.padded.set(dd.subarray(0, Jd)), this.padded.fill(0, Jd, pd), {
          light: this.padded,
          count: pd
        }
      }
      allocate(dd) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), dd > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Nd of this.pages) {
          const Jd = Nd.UO.allocate(dd);
          if (Jd >= 0) return {
            page: Nd,
            start: Jd,
            length: dd
          }
        }
        const Jd = this.pages[this.pages.length - 1];
        if (null !== Jd && void 0 !== Jd && Jd.canGrow) {
          const kd = Math.min(this.ceiling, Math.max(2 * Jd.oo, Jd.oo + dd));
          if (kd - Jd.oo >= dd) return Jd.grow(kd), {
            page: Jd,
            start: Jd.UO.allocate(dd),
            length: dd
          }
        }
        Jd && Jd !== this.pages[0] && 0 === Jd.UO.used && Jd.drop();
        const kd = Math.floor(1048576 / this.unitBytes),
          pd = new GZ(this, Math.max(dd, Math.min(this.ceiling, kd)));
        return this.pages.push(pd), {
          page: pd,
          start: pd.UO.allocate(dd),
          length: dd
        }
      }
      free(dd) {
        this.assertNotDrawing();
        const {
          page: Jd
        } = dd;
        Jd.UO.free(dd.start, dd.length), 0 === Jd.UO.used && Jd !== this.pages[0] && Jd !== this.pages[this.pages.length - 1] && Jd.drop()
      }
      remove(dd) {
        const Jd = this.pages.indexOf(dd);
        Jd >= 0 && this.pages.splice(Jd, 1)
      }
      ranOutOfMemory(dd, Jd) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${Jd}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, dd), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, dd) / 2));
        const kd = performance.now();
        kd >= this.shortageUntil && (this.forgetFailedAt = kd + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = kd + 1e3)
      }
      allocatedBuffer(dd) {
        dd >= this.failed && (this.failed = 1 / 0);
        const Jd = Math.min(2 * dd, Math.floor((dd + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, Jd))
      }
      stats() {
        let dd = 0,
          Jd = 0,
          kd = 0,
          pd = 0;
        for (const Nd of this.pages) dd += Nd.oo, Jd += Nd.UO.used, kd += Nd.hasTwin ? Nd.oo * this.twinUnitBytes : 0, pd += Nd.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: dd * this.unitBytes,
          usedBytes: Jd * this.unitBytes,
          twinBytes: kd,
          allocatedBytes: pd
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: dd,
          maxStorageBufferBindingSize: Jd
        } = this.device.limits;
        let kd = Math.floor(Math.min(67108864, dd) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (kd = Math.min(kd, Math.floor(Jd / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (kd = Math.min(kd, Math.floor(Jd / this.twinUnitBytes))), kd
      }
    }
    const xZ = 16383;

    function qZ(dd, Jd, kd, pd, Nd) {
      let Wd = 0;
      for (let Pd = kd; Pd < pd; Pd += xZ) dd.drawIndexed(6 * Math.min(xZ, pd - Pd), 1, 0, Jd + 4 * Pd, Nd), Wd++;
      return Wd
    }
    class BZ {
      constructor(dd, Jd) {
        this.recordsGroup = Jd, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const kd = iJ.g.strideWithoutAtlas;
        this.vertexArena = new vZ(dd, kd, GPUBufferUsage.VERTEX, `terrain-vertices-${kd}`), this.quadArena = new vZ(dd, LZ.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const pd = (0, aJ.f)(new Uint16Array(98298), xZ);
        this.quadPattern = dd.createBuffer({
          label: "terrain-quad-pattern",
          size: pd.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), dd.queue.writeBuffer(this.quadPattern, 0, pd)
      }
      set(dd, Jd) {
        const kd = Jd.packedVertices,
          pd = kd ? this.quadArena.allocate(dd.faceCount) : this.vertexArena.allocate(dd.vertexCount);
        if (!pd) return !1;
        dd.vertices = pd;
        const Nd = kd ? new Uint8Array(kd.buffer, kd.byteOffset, kd.byteLength) : new Uint8Array(Jd.vertices);
        return pd.page.write(pd, Nd), !0
      }
      setLight(dd, Jd) {
        const {
          vertices: kd
        } = dd;
        kd && 0 !== Jd.length && kd.page.live && (Jd.length < dd.vertexCount ? kd.page.arena.warnOnce("shortLight", `a part's ${Jd.length} light values are fewer than its ${dd.vertexCount} vertices, so its light is left as it was`) : (kd.page.writeLight(kd, Jd), dd.lit = !0))
      }
      lightFullSky(dd, Jd) {
        this.fullSky.length < Jd && (this.fullSky = new Uint16Array(Math.max(Jd, 4096)).fill(RZ.i));
        for (const kd of dd) {
          const dd = kd.vertices;
          dd.page.live && (dd.page.writeLight(dd, this.fullSky), kd.lit = !0)
        }
      }
      backed(dd) {
        const {
          vertices: Jd
        } = dd;
        return !!Jd && Jd.page.holds(Jd)
      }
      lost(dd) {
        const {
          vertices: Jd
        } = dd;
        return !!Jd && Jd.page.lost(Jd)
      }
      release(dd) {
        dd.vertices && dd.vertices.page.arena.free(dd.vertices), dd.vertices = null, dd.lit = !1
      }
      setDrawing(dd) {
        this.forgetBound()
      }
      draw(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Jd.faceCount;
        const Wd = Jd.vertices,
          Pd = Wd.page,
          Zd = kd ? Pd.twin : null;
        if (!Pd.holds(Wd) || kd && !Zd) return 0;
        const {
          verticesPerUnit: gd
        } = Pd.arena;
        let Cd = Wd.start * gd;
        this.boundPattern || (dd.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Kd = pd + Nd;
        if (gd > 1) return Pd.buffer === this.boundRecords && Zd === this.boundRecordsLight || (dd.setBindGroup(1, this.recordsGroup(Pd.buffer, Zd)), this.boundRecords = Pd.buffer, this.boundRecordsLight = Zd), qZ(dd, Cd, pd, Kd, Jd.slot);
        Pd.buffer !== this.boundVertices && (dd.setVertexBuffer(0, Pd.buffer), this.boundVertices = Pd.buffer), Zd && Zd !== this.boundLight && (dd.setVertexBuffer(1, Zd), this.boundLight = Zd);
        const od = Jd.faceCount;
        return Kd <= od ? qZ(dd, Cd, pd, Kd, Jd.slot) : qZ(dd, Cd, pd, od, Jd.slot) + qZ(dd, Cd, Math.max(pd, od) - od, Kd - od, Jd.slot)
      }
      get buffersAwaitingVerdict() {
        let dd = 0;
        for (const Jd of this.arenas()) dd += Jd.awaitingVerdict;
        return dd
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class sZ {
      constructor(dd, Jd, kd, pd) {
        this.device = dd, this.splitBefore = Jd, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = dd.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Nd = dd.createShaderModule({
          label: "scene-depth-copy",
          code: (Wd = kd._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Wd?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Wd;
        dd.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Nd,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Nd,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((dd => {
          this.pipeline = dd, this.building = !1
        }), (dd => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", dd)
        })), kd._executeWithTransmission = () => this.execute(kd, pd)
      }
      get compiling() {
        return this.building
      }
      setWanted(dd) {
        this.wanted = dd
      }
      setPlanes(dd, Jd) {
        dd === this.near && Jd === this.far || (this.near = dd, this.far = Jd, this.unproject[0] = dd / (Jd - dd), this.unproject[1] = Jd * dd / (Jd - dd), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.copy) || void 0 === Jd ? void 0 : Jd.view) && void 0 !== dd ? dd : null
      }
      execute(dd, Jd) {
        var kd;
        null === (kd = this.retired) || void 0 === kd || kd.destroy(), this.retired = null;
        const pd = JJ(Jd),
          Nd = dd._transparentBindings,
          Wd = this.wanted && this.pipeline ? this.splitIndex(Nd) : -1,
          Pd = dd._colorAttachment,
          Zd = Pd.resolveTarget;
        Wd >= 0 && (Pd.resolveTarget = void 0, HP(dd, !0));
        let gd = pd.beginRenderPass(dd._renderPassDescriptor);
        gd.setBindGroup(0, dd._sceneBG);
        let Cd = this.drawList(gd, Jd, dd._opaqueBindings, 0, dd._opaqueBindings.length);
        if (Cd += this.drawList(gd, Jd, dd._directBindings, 0, dd._directBindings.length), Cd += this.drawList(gd, Jd, Nd, 0, Wd >= 0 ? Wd : Nd.length), gd.end(), Wd < 0) return Cd;
        HP(dd);
        const Kd = dd._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: od,
            stencilLoadOp: ld
          } = Kd,
          Qd = Pd.loadOp;
        Pd.resolveTarget = Zd;
        try {
          this.copyDepth(pd, dd), Pd.loadOp = "load", Kd.depthLoadOp = "load", ld && (Kd.stencilLoadOp = "load"), gd = pd.beginRenderPass(dd._renderPassDescriptor), gd.setBindGroup(0, dd._sceneBG), Cd += this.drawList(gd, Jd, Nd, Wd, Nd.length), gd.end()
        } finally {
          Pd.loadOp = Qd, Kd.depthLoadOp = od, Kd.stencilLoadOp = ld
        }
        return Cd
      }
      splitIndex(dd) {
        for (let Jd = 0; Jd < dd.length; Jd++)
          if (dd[Jd].renderable === this.splitBefore) return Jd;
        return -1
      }
      drawList(dd, Jd, kd, pd, Nd) {
        let Wd = null,
          Pd = 0;
        for (let Zd = pd; Zd < Nd; Zd++) {
          const pd = kd[Zd],
            Nd = pd.renderable.mesh;
          Nd && !1 === Nd.visible || (pd.pipeline !== Wd && (dd.setPipeline(pd.pipeline), Wd = pd.pipeline), Pd += pd.draw(dd, Jd))
        }
        return Pd
      }
      copyDepth(dd, Jd) {
        var kd, pd;
        const Nd = (null !== (kd = Jd._config.depth) && void 0 !== kd ? kd : Jd._config.rt)._depthTexture,
          Wd = (null === (pd = this.copy) || void 0 === pd ? void 0 : pd.source) === Nd ? this.copy : this.remakeCopy(Nd),
          Pd = dd.beginRenderPass(Wd.pass);
        Pd.setPipeline(this.pipeline), Pd.setBindGroup(0, Wd.bindGroup), Pd.draw(3), Pd.end()
      }
      remakeCopy(dd) {
        var Jd, kd;
        this.retired = null !== (Jd = null === (kd = this.copy) || void 0 === kd ? void 0 : kd.texture) && void 0 !== Jd ? Jd : null;
        const pd = this.device.createTexture({
            label: "scene-depth",
            size: [dd.width, dd.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Nd = pd.createView(),
          Wd = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: dd.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          Pd = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Nd,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: dd,
          texture: pd,
          view: Nd,
          bindGroup: Wd,
          pass: Pd
        }, this.copy
      }
    }
    const iZ = "rgba8unorm";

    function aZ(dd) {
      return dd ? 15 : 1
    }
    class MZ {
      constructor(dd, Jd, kd, pd) {
        this.device = dd, this.terrain = pd, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Jd._targetSignature._sampleCount > 1, this.cameraBuffer = dd.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = dd.createBindGroupLayout({
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
        const Nd = dd.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = dd.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Nd,
          entries: []
        });
        const Wd = dd.createShaderModule({
          label: "sun-shadow-mask",
          code: (Pd = this.edge, `${(0,MJ.E)()}${Dk({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Pd?Fk:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${aZ(Pd)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Pd?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Pd;
        dd.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: dd.createPipelineLayout({
            bindGroupLayouts: [this.layout, Nd, Nd, DW(dd, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Wd,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Wd,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((dd => {
          this.pipeline = dd, this.building = !1
        }), (dd => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", dd)
        }));
        const Zd = Jd._executeWithTransmission;
        Jd._executeWithTransmission = dd => this.execute(Jd, kd, (() => Zd ? Zd(dd) : function(dd, Jd) {
          const kd = JJ(Jd).beginRenderPass(dd._renderPassDescriptor);
          kd.setBindGroup(0, dd._sceneBG);
          let pd = FZ(kd, Jd, dd._opaqueBindings);
          return pd += FZ(kd, Jd, dd._directBindings), pd += FZ(kd, Jd, dd._transparentBindings), kd.end(), pd
        }(Jd, kd)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.targets) || void 0 === Jd ? void 0 : Jd.maskView) && void 0 !== dd ? dd : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(dd) {
        ! function(dd, Jd) {
          const kd = dd.worldMatrix,
            pd = dd.projectionMatrix,
            Nd = 1 / pd[0],
            Wd = 1 / pd[5],
            Pd = dd.far * dd.near / (dd.far - dd.near);
          Jd[0] = dd.eye[0], Jd[1] = dd.eye[1], Jd[2] = dd.eye[2], Jd[3] = 2 ** -23 / Pd, Jd[4] = kd[0] * Nd, Jd[5] = kd[1] * Nd, Jd[6] = kd[2] * Nd, Jd[7] = Pd, Jd[8] = kd[4] * Wd, Jd[9] = kd[5] * Wd, Jd[10] = kd[6] * Wd, Jd[11] = dd.near / (dd.far - dd.near), Jd[12] = kd[8], Jd[13] = kd[9], Jd[14] = kd[10], Jd[15] = 0
        }(dd, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(dd, Jd, kd) {
        if (this.retire(), !this.terrain.readsMask) return kd();
        const pd = this.targetsFor(dd),
          Nd = JJ(Jd),
          Wd = dd._renderPassDescriptor.depthStencilAttachment;
        this.edge || (pd.prepass.depthStencilAttachment.view = Wd.view);
        const Pd = this.terrain.drawPrepass(Nd, pd.prepass, dd._sceneBG);
        if (0 === Pd) return kd();
        if (this.trace(Nd, pd), this.edge) return Pd + 1 + kd();
        const {
          depthLoadOp: Zd,
          stencilLoadOp: gd
        } = Wd;
        Wd.depthLoadOp = "load", gd && (Wd.stencilLoadOp = "load");
        try {
          return Pd + 1 + kd()
        } finally {
          Wd.depthLoadOp = Zd, Wd.stencilLoadOp = gd
        }
      }
      trace(dd, Jd) {
        const kd = this.terrain.sunShadowGroup(),
          pd = dd.beginRenderPass(Jd.trace);
        this.pipeline && kd && (pd.setPipeline(this.pipeline), pd.setBindGroup(0, Jd.bindGroup), pd.setBindGroup(1, this.empty), pd.setBindGroup(2, this.empty), pd.setBindGroup(3, kd), pd.draw(3)), pd.end()
      }
      retire() {
        const dd = this.retired;
        var Jd;
        dd && (dd.mask.destroy(), dd.normals.destroy(), null === (Jd = dd.depth) || void 0 === Jd || Jd.destroy(), this.retired = null)
      }
      targetsFor(dd) {
        var Jd, kd;
        const pd = (null !== (Jd = dd._config.depth) && void 0 !== Jd ? Jd : dd._config.rt)._depthTexture;
        return (null === (kd = this.targets) || void 0 === kd ? void 0 : kd.source) === pd ? this.targets : this.remake(dd, pd)
      }
      remake(dd, Jd) {
        var kd;
        this.retired = this.targets;
        const pd = [Jd.width, Jd.height],
          Nd = this.device.createTexture({
            label: "sun-shadow-mask",
            size: pd,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Wd = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: pd,
            format: iZ,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Pd = null !== (kd = dd._targetSignature._depthStencilFormat) && void 0 !== kd ? kd : Jd.format,
          Zd = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: pd,
            format: Pd,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          gd = dd._renderPassDescriptor.depthStencilAttachment,
          Cd = Pd.includes("stencil"),
          Kd = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Wd.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: Zd ? Zd.createView() : gd.view,
              depthClearValue: gd.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Cd ? {
                stencilClearValue: gd.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          od = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== Zd && void 0 !== Zd ? Zd : Jd).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Wd.createView()
            }]
          }),
          ld = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Nd.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [aZ(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: Jd,
          mask: Nd,
          maskView: Nd.createView(),
          normals: Wd,
          depth: Zd,
          bindGroup: od,
          prepass: Kd,
          trace: ld
        }, this.targets
      }
    }

    function FZ(dd, Jd, kd) {
      let pd = null,
        Nd = 0;
      for (const Wd of kd) {
        const kd = Wd.renderable.mesh;
        kd && !1 === kd.visible || (Wd.pipeline !== pd && (dd.setPipeline(Wd.pipeline), pd = Wd.pipeline), Nd += Wd.draw(dd, Jd))
      }
      return Nd
    }
    const YZ = 6e4,
      mZ = {
        status: "ok"
      },
      bZ = {
        status: "skipped"
      };
    async function SZ(dd, Jd) {
      const {
        isCancelled: kd
      } = dd;
      if (kd()) return {
        status: "CJ"
      };
      const {
        target: pd
      } = Jd;
      if (!pd) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Nd = [],
        Wd = Promise.all(Array.from(new Set(dd.materials), (async kd => {
          Nd.push(await async function(dd, Jd, kd, pd) {
            const Nd = {
              lighting: dd.lighting,
              dirLightCount: Math.min(dd.dirLightCount, 4),
              EQ: dd.runtime
            };
            try {
              const Wd = Jd.material(pd);
              return Wd && op(Jd.programKey(Wd, !1, Nd)) ? (await Wd.ready, dd.isCancelled() ? mZ : Wd.bindGroupLayout ? await async function(dd, Jd, kd, pd) {
                const {
                  device: Nd
                } = dd;
                let Wd, Pd;
                Nd.pushErrorScope("validation");
                try {
                  Wd = dd.pipelineBuild(Jd, kd, pd)
                } finally {
                  Pd = Nd.popErrorScope().catch((() => null))
                }
                const [Zd, gd] = await Promise.all([Pd, Wd.built.then((() => null), (dd => null !== dd && void 0 !== dd ? dd : new Error("pipeline failed")))]);
                if (!Zd && !gd) return mZ;
                const Cd = await jZ(Wd.module),
                  Kd = Cd.length > 0 ? Cd.map((dd => `${Wd.name} ${dd.lineNum}:${dd.linePos}: ${dd.message}`)).join("\n") : `${Wd.name}: ${XZ(null!==gd&&void 0!==gd?gd:Zd)}`;
                return {
                  status: "failed",
                  material: Jd.model.name,
                  message: Kd
                }
              }(Jd, Wd, Jd.programKey(Wd, "none" !== Wd.texture, Nd), kd): (console.warn(`Shader pack: skipped the compile check for "${pd.name}", whose textures failed to load`), bZ)) : mZ
            } catch (Wd) {
              return {
                status: "failed",
                material: pd.name,
                message: XZ(Wd)
              }
            }
          }(dd, Jd, pd, kd))
        }))),
        Pd = function(dd, Jd) {
          let kd, pd, Nd = !1;
          const Wd = new Promise((Wd => {
            var Pd;
            kd = setTimeout((() => {
              Wd("timeout")
            }), null !== (Pd = Jd.timeoutMs) && void 0 !== Pd ? Pd : YZ), pd = setInterval((() => {
              Jd.isCancelled() && Wd("CJ")
            }), 50), dd.lost.then((() => {
              Nd = !0, Wd("lost")
            }))
          }));
          return {
            signal: Wd,
            lost: () => Nd,
            dispose: () => {
              clearTimeout(kd), clearInterval(pd)
            }
          }
        }(Jd.device, dd);
      let Zd;
      try {
        Zd = await Promise.race([Wd.then((() => "done")), Pd.signal])
      } finally {
        Pd.dispose()
      }
      if ("CJ" === Zd || kd()) return {
        status: "CJ"
      };
      const gd = Nd.find((dd => "failed" === dd.status));
      return gd && "lost" !== Zd && !Pd.lost() && await new Promise((dd => {
        setTimeout(dd, 0)
      })), "lost" === Zd || Pd.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : gd ? {
        status: "failed",
        failure: {
          material: gd.material,
          message: gd.message
        }
      } : "timeout" === Zd ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Cd=dd.timeoutMs)&&void 0!==Cd?Cd:YZ)/1e3} s`), {
        status: "skipped"
      }) : Nd.some((dd => "skipped" === dd.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Cd
    }
    async function jZ(dd) {
      if (!dd) return [];
      try {
        return (await dd.getCompilationInfo()).messages.filter((dd => "error" === dd.type))
      } catch {
        return []
      }
    }

    function XZ(dd) {
      var Jd;
      return null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.message) && void 0 !== Jd ? Jd : String(dd)
    }

    function fZ(dd, Jd, kd, pd) {
      op(dd) ? jZ(kd).then((dd => {
        const [kd] = dd;
        zN("terrain", Jd, pd, kd ? `${kd.lineNum}:${kd.linePos} error: ${kd.message}` : null)
      })) : zN("terrain", Jd, pd)
    }
    var nZ = kd(37753),
      UZ = kd(37769),
      yZ = kd(37781),
      DZ = kd(2745);

    function TZ(dd, Jd, kd, pd, Nd) {
      const Wd = Math.hypot(kd[0], kd[1], kd[2]);
      if (!(Wd > 0)) return;
      const Pd = [kd[0] / Wd, kd[1] / Wd, kd[2] / Wd],
        Zd = [Math.floor(Jd[0]), Math.floor(Jd[1]), Math.floor(Jd[2])],
        gd = [0, 0, 0],
        Cd = [1 / 0, 1 / 0, 1 / 0],
        Kd = [1 / 0, 1 / 0, 1 / 0];
      for (let Qd = 0; Qd < 3; Qd++) Pd[Qd] > 0 ? (gd[Qd] = 1, Cd[Qd] = (Zd[Qd] + 1 - Jd[Qd]) / Pd[Qd], Kd[Qd] = 1 / Pd[Qd]) : Pd[Qd] < 0 && (gd[Qd] = -1, Cd[Qd] = (Zd[Qd] - Jd[Qd]) / Pd[Qd], Kd[Qd] = -1 / Pd[Qd]);
      const {
        KL: od
      } = dd;
      let ld = dd.Yu(Zd[0], Zd[1], Zd[2]);
      for (;;) {
        const Jd = Cd[0] < Cd[1] ? Cd[0] < Cd[2] ? 0 : 2 : Cd[1] < Cd[2] ? 1 : 2;
        if (Cd[Jd] > pd) return;
        const kd = gd[Jd] > 0 ? Zd[Jd] + 1 : Zd[Jd];
        Zd[Jd] += gd[Jd], Cd[Jd] += Kd[Jd];
        const Wd = dd.Yu(Zd[0], Zd[1], Zd[2]),
          Pd = Wd !== ld && !(dd.opaque[ld] && dd.opaque[Wd]);
        if (Pd) {
          const pd = [Zd[0], Zd[1], Zd[2]];
          pd[Jd] = kd;
          const Wd = Math.floor(pd[0] / od),
            Pd = Math.floor(pd[1] / od),
            gd = Math.floor(pd[2] / od);
          !dd.isDrawn(Wd, Pd, gd) && dd.hasParts(Wd, Pd, gd) && Nd.add(`${Wd},${Pd},${gd}`)
        }
        if (Pd && dd.occluders[Wd]) return;
        ld = Wd
      }
    }

    function EZ(dd, Jd) {
      return dd.group - Jd.group || dd.nearest - Jd.nearest
    }
    class cZ {
      constructor(dd, Jd) {
        this.device = dd, this.xI = Jd, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var dd;
        const Jd = null !== (dd = this.free.pop()) && void 0 !== dd ? dd : this.next++;
        if (8 * Jd >= this.data.length) {
          const dd = new Float32Array(2 * this.data.length);
          dd.set(this.data), this.data = dd, this.words = new Uint32Array(dd.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.xI()
        }
        return Jd
      }
      release(dd) {
        this.free.push(dd)
      }
      set(dd, Jd, kd, pd, Nd) {
        const Wd = 8 * dd + xp;
        this.data[Wd] = Jd, this.data[Wd + 1] = kd, this.data[Wd + 2] = pd, this.setVisibility(dd, Nd)
      }
      setVisibility(dd, Jd) {
        this.data[8 * dd + qp] = Jd, this.markDirty(dd, dd)
      }
      setFaces(dd, Jd, kd) {
        const pd = 8 * dd;
        this.words[pd + Bp] = Jd, this.words[pd + sp] = kd, this.markDirty(dd, dd)
      }
      markDirty(dd, Jd) {
        this.dirtyMin = Math.min(this.dirtyMin, dd), this.dirtyMax = Math.max(this.dirtyMax, Jd)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const hZ = vp,
      rZ = !0;
    const uZ = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: hZ.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      tZ = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class VZ {
      constructor(dd) {
        this.device = dd, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Qp), this.dirLightUniforms = this.frameUniforms.subarray(lp.dirLights, lp.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, KJ.c)(), this.faceGroups = !0, this.visibilityGraph = rZ, this.visCull = rZ, this.visCheck = !1, this.visCullMinDistance = yZ.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new AZ, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.EQ = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new BZ(dd, ((dd, Jd) => this.recordsGroup(dd, Jd))), this.slots = new cZ(dd, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = kJ(dd), this.frameLayout = dd.createBindGroupLayout({
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
        }), this.frameBuffer = dd.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = dd.createSampler({
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
          bind: (dd, Jd) => this.createBinding(this.opaqueRenderable, Jd, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (dd, Jd) => this.createBinding(this.transparentRenderable, Jd, !0)
        }
      }
      installSceneDepth(dd, Jd) {
        this.sceneDepth = new sZ(this.device, this.transparentRenderable, dd, Jd)
      }
      createFrameBindGroup() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== dd && void 0 !== dd ? dd : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== Jd && void 0 !== Jd ? Jd : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(dd, Jd) {
        const kd = null !== Jd && void 0 !== Jd ? Jd : dd;
        let pd = this.recordsGroups.get(kd);
        return pd || (pd = this.createFrameBindGroup(dd, Jd), this.recordsGroups.set(kd, pd)), pd
      }
      setChunkMesh(dd, Jd, kd) {
        var pd;
        let Nd = this.chunks.get(dd);
        Nd ? this.geometry.release(Nd) : (Nd = {
          mesh: dd,
          slot: this.slots.allocate(),
          origin: [kd[0], kd[1], kd[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: dd.visibility,
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
        }, this.chunks.set(dd, Nd), this.writeSlot(Nd)), Nd.material = dd.material ? this.materialFor(dd.material) : null, Nd.packed = !!Jd.packedVertices, Nd.vertexCount = (0, LZ.g)(Jd), Nd.faceCount = Nd.vertexCount / 4;
        const Wd = null !== (pd = Jd.faceGroups) && void 0 !== pd ? pd : null;
        if (Nd.faceGroups = Wd, Wd) {
          const dd = nZ.p;
          Nd.planePX = Wd[dd], Nd.planeNX = Wd[dd + 1], Nd.planePY = Wd[dd + 2], Nd.planeNY = Wd[dd + 3], Nd.planePZ = Wd[dd + 4], Nd.planeNZ = Wd[dd + 5]
        }
        this.drawWhole(Nd), 0 !== Nd.faceCount && (this.geometry.set(Nd, Jd) ? (Nd.packed && this.slots.setFaces(Nd.slot, Nd.vertices.start + Nd.faceCount, Nd.faceCount), Jd.HQ && this.setChunkMeshLight(dd, Jd.HQ)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Nd.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(dd, Jd) {
        const kd = this.chunks.get(dd);
        kd && this.geometry.setLight(kd, Jd)
      }
      drawStats() {
        let dd = this.transparent.length;
        for (const Jd of this.opaqueBatches) dd += Jd.meshes.length;
        return {
          drawn: dd,
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
      removeChunkMesh(dd) {
        const Jd = this.chunks.get(dd);
        Jd && (this.geometry.release(Jd), this.slots.release(Jd.slot), this.chunks.delete(dd))
      }
      remeshLost(dd, Jd) {
        this.geometry.release(Jd), Jd.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** Jd.lostRemeshes++);
        const kd = dd.Vo,
          [pd, Nd, Wd] = kd.GNd(Jd.origin[0], Jd.origin[1], Jd.origin[2]),
          Pd = kd.pO.NO(pd, Nd, Wd);
        Pd && (Pd.JO = !0, Pd.gO = !0, kd.kO(Pd, !1))
      }
      chooseFaceRanges(dd, Jd, kd) {
        const pd = this.faceRanges;
        dd.faceMask = kd, dd.rangeCount = (0, UZ.n)(Jd, kd, pd), dd.first0 = pd[0], dd.count0 = pd[1], dd.first1 = pd[2], dd.count1 = pd[3]
      }
      drawWhole(dd) {
        dd.faceMask = -1, dd.faceEpoch = -1, dd.rangeCount = 1, dd.first0 = 0, dd.count0 = dd.faceCount
      }
      writeSlot(dd) {
        const [Jd, kd, pd] = this.originOffset;
        this.slots.set(dd.slot, dd.origin[0] - Jd, dd.origin[1] - kd, dd.origin[2] - pd, dd.visibility)
      }
      materialFor(dd) {
        const Jd = this.materials.get(dd);
        if (Jd) return Jd;
        const kd = eZ(dd);
        if (!kd) return this.warnOnce(`material:${dd.name}`, `Lite terrain cannot draw material "${dd.name}"; its chunks are skipped.`), null;
        const {
          model: pd,
          atlas: Nd,
          texture: Wd,
          animated: Pd,
          uniformData: Zd
        } = kd, gd = {
          id: this.materials.size,
          model: pd,
          texture: Wd,
          animated: Pd,
          uniformData: Zd,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${dd.name}`,
            size: Zd.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: kd.liquid,
          customRenderMat: kd.customRenderMat,
          atlasCount: 0,
          J_: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(dd, gd), this.device.queue.writeBuffer(gd.uniformBuffer, 0, Zd), gd.ready = this.createMaterialBindGroup(gd, Nd).catch((Jd => {
          console.error(`Lite terrain failed to load the textures of material "${dd.name}"`, Jd)
        })), gd
      }
      materialLayout(dd) {
        const Jd = function(dd) {
            const Jd = ["uniforms"];
            if ("atlas" === dd.texture) {
              dd.animated && Jd.push("animData"), Jd.push("sampler");
              for (let kd = 0; kd < dd.atlasCount; kd++) Jd.push("textureArray")
            } else "single" === dd.texture && Jd.push("sampler", "texture");
            return Jd
          }(dd),
          kd = Jd.join(",");
        let pd = this.materialLayouts.get(kd);
        if (!pd) {
          const dd = GPUShaderStage.FRAGMENT;
          pd = this.device.createBindGroupLayout({
            label: `terrain-material-${kd}`,
            entries: Jd.map(((Jd, kd) => {
              switch (Jd) {
                case "uniforms":
                  return {
                    binding: kd, visibility: GPUShaderStage.VERTEX | dd, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: kd, visibility: GPUShaderStage.VERTEX | dd, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: kd, visibility: dd, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: kd, visibility: dd, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: kd, visibility: dd, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(kd, pd)
        }
        return pd
      }
      async createMaterialBindGroup(dd, Jd) {
        const kd = [{
          buffer: dd.uniformBuffer
        }];
        if (Jd) {
          const {
            urls: pd,
            pixels: Nd,
            layerWidth: Wd
          } = Jd.sources, Pd = await Promise.all(pd.map(((dd, Jd) => {
            var kd;
            return EN(this.device, dd, null !== (kd = null === Nd || void 0 === Nd ? void 0 : Nd[Jd]) && void 0 !== kd ? kd : null, Wd)
          })));
          dd.atlasCount = Pd.length, dd.J_ = Pd[0].layerWidth, dd.atlasLayers = Pd[0].layers, Jd.animDataPerTex && kd.push({
            buffer: jN(this.device, Float32Array.from(Jd.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), kd.push(this.sampler);
          for (const dd of Pd) kd.push(dd.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === dd.texture) {
          const {
            url: Jd
          } = dd.model.diffuseTexture.source, {
            pixels: pd,
            width: Nd,
            height: Wd
          } = await DN(Jd);
          kd.push(this.sampler), kd.push(fN(this.device, pd, Nd, Wd, 1, `terrain-${Jd}`).createView({
            dimension: "2d"
          }))
        }
        const pd = this.materialLayout(this.programKey(dd, !1));
        dd.bindGroupLayout = pd, dd.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${dd.model.name}`,
          layout: pd,
          entries: kd.map(((dd, Jd) => ({
            binding: Jd,
            resource: dd
          })))
        })
      }
      programKey(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const pd = kd ? kd.lighting : this.lighting,
          Nd = kd ? kd.EQ : this.EQ,
          Wd = {
            texture: dd.texture,
            atlasCount: dd.atlasCount,
            J_: dd.J_,
            atlasLayers: dd.atlasLayers,
            animated: dd.animated,
            alphaTest: dd.model.transparencyMode === ad.r.alphaTest,
            lighting: pd,
            dirLightCount: kd ? kd.dirLightCount : this.dirLightCount,
            packed: Jd
          };
        if (!Nd) return Wd;
        const Pd = this.shaderPackFields(dd, Nd),
          Zd = "atlas" === dd.texture && dd.model.transparencyMode === ad.r.opaque && Zp(Pd.packVariant);
        return {
          ...Wd,
          ...Pd,
          alphaTest: Wd.alphaTest || Zd
        }
      }
      shaderPackFields(dd, Jd) {
        return dd.customRenderMat ? Wp : function(dd, Jd) {
          if (!dd) return Wp;
          const kd = dd.defineFor(Jd ? "liquid" : "terrain");
          return 0 === kd ? Wp : {
            packVariant: kd,
            liquid: Jd
          }
        }(Jd, dd.liquid)
      }
      isBlended(dd) {
        return dd.model.transparencyMode === ad.r.alphaBlend
      }
      shaderModule(dd, Jd) {
        let kd = this.modules.get(dd);
        return kd || (kd = this.device.createShaderModule({
          label: Jd,
          code: dd
        }), this.modules.set(dd, kd)), kd
      }
      pipelineFor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!dd.bindGroupLayout) return null;
        const Nd = this.programKey(dd, Jd);
        if (!pd) return this.pipelineOf(dd, Nd, kd);
        const Wd = {
            ...Nd,
            resting: pd
          },
          Pd = this.pipelineId(dd, Wd, kd),
          Zd = this.pipelines.get(Pd);
        if (Zd) return Zd;
        const gd = this.pipelineOf(dd, Nd, kd);
        return gd && void 0 === Zd && this.startPipeline(Pd, dd, Wd, kd), gd
      }
      pipelineOf(dd, Jd, kd) {
        const pd = this.pipelineId(dd, Jd, kd),
          Nd = this.pipelines.get(pd);
        return void 0 !== Nd ? Nd : (this.startPipeline(pd, dd, Jd, kd), null)
      }
      pipelineId(dd, Jd, kd) {
        return zZ(Jd, this.isBlended(dd), dd.model.backFaceCulling, kd)
      }
      pipelineBuild(dd, Jd, kd) {
        var pd;
        const Nd = this.pipelineId(dd, Jd, kd);
        return null !== (pd = this.builds.get(Nd)) && void 0 !== pd ? pd : this.startPipeline(Nd, dd, Jd, kd)
      }
      startPipeline(dd, Jd, kd, pd) {
        var Nd;
        this.pipelines.set(dd, null);
        const Wd = mp(kd),
          Pd = this.isBlended(Jd),
          Zd = this.shadowMask && pd._depthStencilFormat ? function(dd, Jd, kd, pd) {
            if (void 0 === dd.packVariant || dd.liquid || Jd) return "none";
            const Nd = (0, FJ.f)(dd.packVariant);
            return null === Nd || void 0 === Nd || !Nd.sunShadow || !Uk(Nd, kd) || Nd.discards || dd.alphaTest && Zp(dd.packVariant) ? "none" : pd ? "edge" : "plain"
          }(kd, Pd, !!this.sunShadow, pd._sampleCount > 1) : "none";
        let gd;
        try {
          gd = bp(kd, !!this.sunShadow, Zd)
        } catch (ed) {
          if (!op(kd)) throw ed;
          return this.failedPackBuild(dd, kd, Wd, ed)
        }
        const Cd = this.shaderModule(gd, Wd),
          Kd = [];
        kd.packed || (Kd.push(function(dd, Jd) {
          const kd = [{
            shaderLocation: hZ.position,
            offset: iJ.g.Dk,
            format: "float32x3"
          }, {
            shaderLocation: hZ.normal,
            offset: iJ.g.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: hZ.color,
            offset: iJ.g.colorOffset,
            format: "unorm8x4"
          }];
          return dd && kd.push({
            shaderLocation: hZ.uv,
            offset: iJ.g.uvOffset,
            format: "float32x2"
          }), Jd && kd.push({
            shaderLocation: hZ.blockFlagWords,
            offset: iJ.g.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: iJ.g.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: kd
          }
        }("none" !== kd.texture, op(kd))), kd.lighting && Kd.push(uZ));
        const od = Jd.model.backFaceCulling,
          ld = {
            label: Wd,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Jd.bindGroupLayout, ...cW(this.device, kd, !!this.sunShadow, "none" !== Zd)]
            }),
            vertex: {
              module: Cd,
              entryPoint: "mainVertex",
              buffers: Kd
            },
            fragment: wd({
              module: Cd,
              entryPoint: "mainFragment"
            }, pd, Pd ? tZ : null),
            depthStencil: pd._depthStencilFormat ? {
              format: pd._depthStencilFormat,
              depthCompare: null !== (Nd = pd._depthCompare) && void 0 !== Nd ? Nd : pJ,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: pd._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: od ? "back" : "none"
            }
          },
          Qd = kd.resting ? 0 : 1;
        this.compiling += Qd;
        const Ld = "none" === Zd ? this.device.createRenderPipelineAsync(ld) : this.startMaskPipelines(Cd, ld, "edge" === Zd);
        Ld.then((Jd => {
          this.compiling -= Qd, this.pipelines.set(dd, Jd)
        }), (dd => {
          this.compiling -= Qd, console.error(`Lite terrain pipeline ${Wd} failed`, dd), fZ(kd, Wd, Cd, dd)
        }));
        const Od = {
          name: Wd,
          module: Cd,
          built: Ld
        };
        return this.builds.set(dd, Od), Od
      }
      startMaskPipelines(dd, Jd, kd) {
        const pd = Jd.depthStencil,
          Nd = this.device.createRenderPipelineAsync(kd ? Jd : {
            ...Jd,
            depthStencil: {
              ...pd,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Wd = this.device.createRenderPipelineAsync({
            ...Jd,
            label: `${Jd.label}-prepass`,
            fragment: {
              module: dd,
              entryPoint: "prepassFragment",
              targets: [{
                format: iZ
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Nd, Wd]).then((dd => {
          let [Jd, kd] = dd;
          return this.prepassOf.set(Jd, kd), this.maskPipelines++, Jd
        }))
      }
      failedPackBuild(dd, Jd, kd, pd) {
        console.error(`Lite terrain pipeline ${kd} failed`, pd), fZ(Jd, kd, null, pd);
        const Nd = Promise.reject(pd);
        Nd.catch((() => {}));
        const Wd = {
          name: kd,
          module: null,
          built: Nd
        };
        return this.builds.set(dd, Wd), Wd
      }
      checkShaderPack(dd) {
        return SZ(dd, {
          device: this.device,
          target: this.target,
          material: dd => this.materialFor(dd),
          programKey: (dd, Jd, kd) => this.programKey(dd, Jd, kd),
          pipelineBuild: (dd, Jd, kd) => this.pipelineBuild(dd, Jd, kd)
        })
      }
      createBinding(dd, Jd, kd) {
        return this.target = Jd, {
          renderable: dd,
          pipeline: ZJ(this.device, Jd),
          draw: dd => {
            this.geometry.setDrawing(!0);
            try {
              return kd ? this.drawTransparent(dd, Jd) : this.drawOpaque(dd, Jd)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(dd, Jd) {
        var kd, pd, Nd, Wd;
        const {
          Jl: Pd
        } = dd;
        this.lighting = dd.IO;
        const Zd = (0, QZ.w)(Jd);
        this.dirLightCount = Math.min(Zd, 4), this.EQ = null !== (kd = Pd.EQ) && void 0 !== kd ? kd : null, Zd > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(dd, Jd), this.animateMaterials(Jd.animTick);
        const gd = Pd.Rl,
          Cd = gd[0] !== this.originOffset[0] || gd[1] !== this.originOffset[1] || gd[2] !== this.originOffset[2];
        Cd && (this.originOffset[0] = gd[0], this.originOffset[1] = gd[1], this.originOffset[2] = gd[2]);
        const Kd = Jd.eye;
        this.eye[0] = Kd[0], this.eye[1] = Kd[1], this.eye[2] = Kd[2], this.writeShaderPackInputs();
        const od = Jd.projectionMatrix,
          ld = 0 === od[15];
        let Qd = 0;
        (Cd || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: Ld
        } = this;
        gJ(this.transparentRenderable._worldCenter, Jd, WJ), this.resetBatches(ld), this.transparent.length = 0, this.unlit.length = 0;
        const Od = Pd.Vo.Xdd,
          ed = Od / 2 * Math.sqrt(3);
        let Rd = 0;
        const Id = !!this.EQ && Pp(this.EQ.defineFor("liquid"));
        let Gd = !1;
        const vd = null !== (pd = null === (Nd = Pd.mG) || void 0 === Nd ? void 0 : Nd.visibility) && void 0 !== pd ? pd : null,
          xd = this.visCull && ld && 0 === this.compiling && null !== vd && Pd.Vo.Spd[0] >= this.visCullMinDistance ? this.target : null,
          qd = this.visPassable,
          Bd = this.visCandidates,
          sd = this.visCandidateBatches;
        qd.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let ad = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Md = 0;
        const Fd = (dd, kd) => {
          if (!kd) return this.transparent.push(dd), void(Md += 2 * dd.faceCount);
          if (null !== dd.faceGroups && kd.faceCull) {
            if (0 === Qd && (Qd = (0, UZ.e)(od, Jd.renderWidth, Jd.renderHeight), Qd !== this.faceFocalPx && (this.faceFocalPx = Qd, Ld = ++this.faceEpoch)), dd.faceEpoch !== Ld) {
              dd.faceEpoch = Ld;
              const Jd = Math.sqrt(dd.distance) + ed,
                kd = (0, UZ.k)(dd.planePX, dd.planeNX, dd.planePY, dd.planeNY, dd.planePZ, dd.planeNZ, this.eye[0] - (dd.origin[0] - this.originOffset[0]), this.eye[1] - (dd.origin[1] - this.originOffset[1]), this.eye[2] - (dd.origin[2] - this.originOffset[2]), (0, UZ.i)(Jd, Qd));
              kd !== dd.faceMask && this.chooseFaceRanges(dd, dd.faceGroups, kd)
            }
            if (0 === dd.rangeCount) return
          } else - 1 !== dd.faceMask && this.drawWhole(dd);
          kd.meshes.push(dd), Md += 2 * ((dd.rangeCount > 0 ? dd.count0 : 0) + (dd.rangeCount > 1 ? dd.count1 : 0))
        };
        for (const md of this.chunks.values()) {
          Cd && this.writeSlot(md);
          const dd = md.mesh.visibility;
          dd !== md.visibility && (md.visibility = dd, this.slots.setVisibility(md.slot, dd));
          const {
            material: kd
          } = md;
          this.geometry.lost(md) && performance.now() >= md.lostRetryAt && this.remeshLost(Pd, md);
          const pd = !(null === kd || void 0 === kd || !kd.bindGroup) && this.geometry.backed(md),
            Nd = pd && this.lighting && !md.vertices.page.twin;
          if (xd && (Number.isNaN(md.key) && (md.ci = Math.floor(md.origin[0] / Od), md.cj = Math.floor(md.origin[1] / Od), md.ck = Math.floor(md.origin[2] / Od), md.key = (0, DZ.h)(md.ci, md.cj, md.ck)), (!pd || dd < 1 || Nd || !this.batchDraws(kd, md.packed, xd)) && this.visSeeThrough(md, xd) && qd.add(md.key)), !pd) continue;
          Nd || (md.lostRemeshes = 0);
          const Wd = md.origin[0] - this.originOffset[0],
            Zd = md.origin[1] - this.originOffset[1],
            gd = md.origin[2] - this.originOffset[2];
          if (!(0, JZ.b)(Jd.frustum, Wd, Zd, gd, Od)) continue;
          const Kd = Wd + Od / 2 - this.eye[0],
            od = Zd + Od / 2 - this.eye[1],
            Qd = gd + Od / 2 - this.eye[2];
          if (md.distance = Kd * Kd + od * od + Qd * Qd, this.lighting && !md.lit && (Rd = Math.max(Rd, md.vertexCount), this.unlit.push(md)), Nd) continue;
          const Ld = this.isBlended(kd) ? null : this.batchFor(kd, md.packed, md.vertices.page, 1 === dd, ld);
          xd ? (Bd[ad] = md, sd[ad++] = Ld) : Fd(md, Ld)
        }
        const Yd = xd ? this.sweepVisibility(dd, Jd, vd) : null;
        null === (Wd = (0, bW.z)(Pd)) || void 0 === Wd || Wd.update(Jd.frustum, this.originOffset, Od, Yd);
        for (let md = 0; md < ad; md++) {
          const dd = Bd[md];
          !Yd || Yd.isDrawn(dd.ci, dd.cj, dd.ck) ? Fd(dd, sd[md]) : (this.visCulledParts++, this.visCulledTriangles += 2 * dd.faceCount)
        }
        for (const md of this.transparent) Gd ||= Id && md.material.liquid && !md.material.customRenderMat;
        this.submittedTriangles = Md, Yd && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(dd, Jd, Yd)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Gd) : Gd && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && Rd > 0 && this.geometry.lightFullSky(this.unlit, Rd);
        for (const md of this.opaqueBatches) this.chunkSorter.sort(md.meshes, 1) || md.meshes.sort(HZ);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(wZ)
      }
      sweepVisibility(dd, Jd, kd) {
        const {
          Vo: pd
        } = dd.Jl, Nd = pd.Xdd, Wd = this.visPassable, Pd = this.eye[0] + this.originOffset[0], Zd = this.eye[1] + this.originOffset[1], gd = this.eye[2] + this.originOffset[2];
        if (!kd.eyeClear(Pd, Zd, gd, Jd.near, Jd.projectionMatrix, pd)) return null;
        const [Cd, Kd] = pd.Spd, od = kd.update(Pd, Zd, gd, Nd, Cd, Kd, Wd);
        return this.visSweeps = kd.sweeps, od ? kd : null
      }
      visSeeThrough(dd, Jd) {
        const {
          material: kd
        } = dd;
        return (!kd || !this.isBlended(kd)) && (dd.mesh.visibility < 1 || !(null !== kd && void 0 !== kd && kd.bindGroup) || dd.faceCount > 0 && (!this.geometry.backed(dd) || this.lighting && !dd.vertices.page.twin) || !this.batchDraws(kd, dd.packed, Jd))
      }
      batchDraws(dd, Jd, kd) {
        var pd;
        const Nd = Jd ? 2 : 0;
        if (dd === this.visDrawsMaterial && function(dd, Jd) {
            return 0 !== (dd & 1 << Jd)
          }(this.visDrawsBits, Nd)) return 0 !== (this.visDrawsBits & 2 << Nd);
        let Wd = null !== (pd = this.visBatchDraws.get(dd)) && void 0 !== pd ? pd : 0;
        if (!(Wd & 1 << Nd)) {
          Wd |= 1 << Nd | (!!dd.bindGroupLayout && this.canDraw(dd, Jd) && !!this.pipelines.get(this.pipelineId(dd, this.programKey(dd, Jd), kd)) ? 2 << Nd : 0), this.visBatchDraws.set(dd, Wd)
        }
        return this.visDrawsMaterial = dd, this.visDrawsBits = Wd, 0 !== (Wd & 2 << Nd)
      }
      runVisCheck(dd, Jd, kd) {
        const {
          Jl: pd
        } = dd, {
          Vo: Nd
        } = pd, Wd = Nd.Xdd, Pd = new Set;
        for (const Qd of this.chunks.values()) Pd.add(Qd.key);
        const Zd = qN.Matrix.FromArray(Jd.viewProjectionMatrix).invert(),
          [gd, Cd, Kd] = this.originOffset,
          od = new qN.IL,
          ld = function(dd, Jd, kd, pd) {
            const Nd = new Set;
            for (let Wd = 0; Wd < 27; Wd++)
              for (let Pd = 0; Pd < 48; Pd++) {
                const Zd = kd((Pd + .5) / 48 * 2 - 1, (Wd + .5) / 27 * 2 - 1);
                TZ(dd, Jd, [Zd[0] - Jd[0], Zd[1] - Jd[1], Zd[2] - Jd[2]], pd, Nd)
              }
            return Nd
          }({
            Yu: (dd, Jd, kd) => Nd.Yu(dd, Jd, kd),
            occluders: kd.occluders,
            opaque: kd.opaque,
            KL: Wd,
            isDrawn: (dd, Jd, pd) => kd.isDrawn(dd, Jd, pd),
            hasParts: (dd, Jd, kd) => Pd.has((0, DZ.h)(dd, Jd, kd))
          }, [this.eye[0] + gd, this.eye[1] + Cd, this.eye[2] + Kd], ((dd, Jd) => (qN.IL.TransformCoordinatesFromFloatsToRef(dd, Jd, .5, Zd, od), [od.x + gd, od.y + Cd, od.z + Kd])), (Nd.Spd[0] + 1) * Wd);
        this.visViolations = ld.size;
        for (const Qd of ld) this.warnOnce(`vis:${Qd}`, `Lite terrain cave culling skipped chunk ${Qd}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var dd;
        null !== (dd = this.EQ) && void 0 !== dd && dd.isRunning() && (this.shaderPackInputs ??= new hW(this.device, this.EQ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.EQ, this.eye, this.lighting))
      }
      bindShaderPackInputs(dd, Jd, kd) {
        var pd, Nd, Wd, Pd;
        let Zd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: gd
        } = this.shaderPackFields(Jd, kd);
        if (void 0 === gd) return;
        this.shaderPackInputs || (this.shaderPackInputs = new hW(this.device, kd.textureLayers(), this.sunShadow), this.shaderPackInputs.write(kd, this.eye, this.lighting));
        const Cd = Pp(gd) ? null !== (pd = null === (Nd = this.sceneDepth) || void 0 === Nd ? void 0 : Nd.view) && void 0 !== pd ? pd : this.standIn() : null,
          Kd = Zd ? null !== (Wd = null === (Pd = this.shadowMask) || void 0 === Pd ? void 0 : Pd.view) && void 0 !== Wd ? Wd : this.standIn() : null;
        this.shaderPackInputs.bind(dd, Cd, EW(gd, !!this.sunShadow), Kd)
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
        var dd, Jd;
        return null !== (dd = null === (Jd = this.shaderPackInputs) || void 0 === Jd ? void 0 : Jd.bindGroupFor(null, !0)) && void 0 !== dd ? dd : null
      }
      resetBatches(dd) {
        const Jd = this.opaqueBatches;
        let kd = 0;
        for (const pd of Jd) pd.meshes.length > 0 && (pd.meshes.length = 0, pd.faceCull = this.batchFaceCull(pd.material, dd), Jd[kd++] = pd);
        Jd.length = kd
      }
      orderBatches() {
        const dd = this.opaqueBatches;
        for (let Jd = 0; Jd < dd.length; Jd++) {
          const kd = dd[Jd];
          kd.group = Jd;
          for (let pd = 0; pd < Jd; pd++) {
            const Jd = dd[pd];
            if (Jd.material === kd.material && Jd.packed === kd.packed) {
              kd.group = Jd.group;
              break
            }
          }
          kd.nearest = kd.meshes.length > 0 ? kd.meshes[0].distance : 1 / 0
        }
        dd.sort(EZ)
      }
      batchFor(dd, Jd, kd, pd, Nd) {
        for (const Pd of this.opaqueBatches)
          if (Pd.material === dd && Pd.packed === Jd && Pd.page === kd && Pd.resting === pd) return Pd;
        const Wd = {
          material: dd,
          packed: Jd,
          page: kd,
          resting: pd,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(dd, Nd)
        };
        return this.opaqueBatches.push(Wd), Wd
      }
      batchFaceCull(dd, Jd) {
        return !(!Jd || !(0, nZ.u)(dd.model)) && (!this.EQ || ! function(dd) {
          var Jd;
          return !(null === (Jd = (0, FJ.f)(dd)) || void 0 === Jd || !Jd.movesVertices)
        }(this.shaderPackFields(dd, this.EQ).packVariant))
      }
      writeFrameUniforms(dd, Jd) {
        const kd = this.frameUniforms,
          pd = lp;
        if ((0, QZ.z)(dd, kd), kd[pd.fogInfos] = Jd.fogEnabled ? Jd.fogMode : 0, kd[pd.fogInfos + 1] = Jd.fogStart, kd[pd.fogInfos + 2] = Jd.fogEnd, kd[pd.fogInfos + 3] = Jd.fogDensity, kd.set(Jd.fogColour, pd.fogColour), kd[pd.outputHeight] = Jd.renderHeight, kd.set(Jd.ambientColour, pd.sceneAmbient), (0, QZ.u)(Jd, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const Jd = (0, LZ.h)(dd.DL, dd.QL, dd.LL);
          for (let dd = 0; dd < 4; dd++) kd[pd.aoLevels + dd] = Jd[dd] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, kd)
      }
      animateMaterials(dd) {
        const Jd = Lp.anim;
        for (const kd of this.materials.values()) kd.animated && (kd.uniformData[Jd] = dd, this.device.queue.writeBuffer(kd.uniformBuffer, 4 * Jd, kd.uniformData, Jd, 1))
      }
      canDraw(dd, Jd) {
        return !("atlas" === dd.texture && !Jd) || (this.warnOnce(`stride:${dd.id}`, `Lite terrain: material "${dd.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(dd, Jd) {
        let kd = 0;
        dd.setBindGroup(1, this.frameBindGroup);
        for (const pd of this.opaqueBatches) {
          if (!pd.meshes.length || !this.canDraw(pd.material, pd.packed)) continue;
          const Nd = this.pipelineFor(pd.material, pd.packed, Jd, pd.resting);
          Nd && (dd.setPipeline(Nd), dd.setBindGroup(2, pd.material.bindGroup), this.EQ && this.bindShaderPackInputs(dd, pd.material, this.EQ, this.prepassOf.has(Nd)), kd += this.drawBatch(dd, pd))
        }
        return kd
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(dd, Jd, kd) {
        const pd = this.target,
          Nd = this.EQ;
        if (!pd || !Nd || 0 === this.maskPipelines) return 0;
        let Wd = 0,
          Pd = null;
        this.geometry.setDrawing(!0);
        try {
          for (const Zd of this.opaqueBatches) {
            if (!Zd.meshes.length || !this.canDraw(Zd.material, Zd.packed)) continue;
            const gd = this.pipelineFor(Zd.material, Zd.packed, pd, Zd.resting),
              Cd = gd && this.prepassOf.get(gd);
            Cd && (Pd || (Pd = dd.beginRenderPass(Jd), Pd.setBindGroup(0, kd), Pd.setBindGroup(1, this.frameBindGroup)), Pd.setPipeline(Cd), Pd.setBindGroup(2, Zd.material.bindGroup), this.bindShaderPackInputs(Pd, Zd.material, Nd, !0), Wd += this.drawBatch(Pd, Zd))
          }
        } finally {
          var Zd;
          null === (Zd = Pd) || void 0 === Zd || Zd.end(), this.geometry.setDrawing(!1)
        }
        return Wd
      }
      drawBatch(dd, Jd) {
        let kd = 0;
        for (const pd of Jd.meshes) {
          const {
            rangeCount: Jd
          } = pd;
          Jd > 0 && (kd += this.geometry.draw(dd, pd, this.lighting, pd.first0, pd.count0), Jd > 1 && (kd += this.geometry.draw(dd, pd, this.lighting, pd.first1, pd.count1)))
        }
        return kd
      }
      drawTransparent(dd, Jd) {
        let kd = 0,
          pd = null,
          Nd = null;
        dd.setBindGroup(1, this.frameBindGroup);
        for (const Wd of this.transparent) {
          const Pd = Wd.material;
          if (!this.canDraw(Pd, Wd.packed)) continue;
          const Zd = this.pipelineFor(Pd, Wd.packed, Jd);
          Zd && (Zd !== pd && (dd.setPipeline(Zd), pd = Zd, this.EQ && this.bindShaderPackInputs(dd, Pd, this.EQ)), Pd !== Nd && (dd.setBindGroup(2, Pd.bindGroup), Nd = Pd), kd += this.geometry.draw(dd, Wd, this.lighting))
        }
        return kd
      }
    }

    function zZ(dd, Jd, kd, pd) {
      return `${mp(dd)}|${dd.atlasLayers}|${dd.J_}|${Jd}|${kd}|${pd._colorFormat}|${pd._depthStencilFormat}|${pd._sampleCount}`
    }

    function HZ(dd, Jd) {
      return dd.distance - Jd.distance
    }

    function wZ(dd, Jd) {
      return Jd.distance - dd.distance
    }
    class AZ {
      constructor() {
        this.left = []
      }
      sort(dd, Jd) {
        for (let kd = 0; kd < dd.length; kd++) {
          const Jd = dd[kd].distance;
          if (Jd - Jd !== 0) return !1
        }
        return this.sortRange(dd, 0, dd.length, Jd), !0
      }
      sortRange(dd, Jd, kd, pd) {
        if (kd - Jd <= 16) {
          for (let Nd = Jd + 1; Nd < kd; Nd++) {
            const kd = dd[Nd],
              Wd = pd * kd.distance;
            let Pd = Nd - 1;
            for (; Pd >= Jd && pd * dd[Pd].distance > Wd; Pd--) dd[Pd + 1] = dd[Pd];
            dd[Pd + 1] = kd
          }
          return
        }
        const Nd = Jd + kd >>> 1;
        if (this.sortRange(dd, Jd, Nd, pd), this.sortRange(dd, Nd, kd, pd), pd * dd[Nd - 1].distance <= pd * dd[Nd].distance) return;
        const {
          left: Wd
        } = this, Pd = Nd - Jd;
        for (let Kd = 0; Kd < Pd; Kd++) Wd[Kd] = dd[Jd + Kd];
        let Zd = 0,
          gd = Nd,
          Cd = Jd;
        for (; Zd < Pd && gd < kd;) dd[Cd++] = pd * dd[gd].distance < pd * Wd[Zd].distance ? dd[gd++] : Wd[Zd++];
        for (; Zd < Pd;) dd[Cd++] = Wd[Zd++]
      }
    }
    const dg = Math.ceil(102);

    function Jg(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Jd;
      const Wd = Math.min(Jd, kd),
        Pd = new Uint32Array(Jk(pd));
      for (let Zd = 0; Zd < pd; Zd++) {
        const Jd = Math.floor(Zd * Wd / pd),
          kd = Math.max(Jd + 1, Math.floor((Zd + 1) * Wd / pd));
        for (let gd = 0; gd < pd; gd++) {
          const Cd = Math.floor(gd * Wd / pd),
            Kd = Math.max(Cd + 1, Math.floor((gd + 1) * Wd / pd));
          let od = 0;
          for (let pd = Jd; pd < kd; pd++)
            for (let Jd = Cd; Jd < Kd; Jd++) dd[pd * Nd + Jd] >= dg && od++;
          if (2 * od >= (kd - Jd) * (Kd - Cd)) {
            const dd = gd + pd * Zd;
            Pd[dd >>> 5] |= 1 << (31 & dd)
          }
        }
      }
      return Pd
    }

    function kg(dd) {
      return Math.max(1, Math.min(16, dd))
    }
    class pg {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = dd, this.loadTexture = Jd, this.warn = kd, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(dd, Jd) {
        return (dd.rD !== this.builtVersion || this.blockCaster.length !== Jd) && (this.build(dd, Jd), !0)
      }
      build(dd, Jd) {
        this.builtVersion = dd.rD;
        const kd = new Uint16Array(Jd),
          pd = new Map;
        for (let Nd = 1; Nd < Jd; Nd++) {
          const Jd = this.classify(dd, Nd, pd);
          if (null === Jd || Jd === zJ) {
            kd[Nd] = null === Jd ? 0 : zJ;
            continue
          }
          let Wd = this.byKey.get(Jd.key);
          void 0 === Wd && (Wd = this.allocate(Jd), this.byKey.set(Jd.key, Wd)), kd[Nd] = Wd
        }
        this.blockCaster = kd, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(dd, Jd) {
        const kd = dd.B_[Jd];
        if ("function" !== typeof kd) return kd;
        try {
          return kd()
        } catch (pd) {
          return this.warnOnce(`Sun shadows: no caster option for block ${Jd}: ${pd instanceof Error?pd.message:String(pd)}`), null
        }
      }
      classify(dd, Jd, kd) {
        const pd = this.option(dd, Jd);
        if ("none" === pd) return null;
        if (pd && pd.planes.length > 0) {
          const dd = pd.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(dd)}`,
            planes: dd
          }
        }
        if (dd.Al[Jd]) return null;
        const Nd = dd.JQ[Jd] ? dd.zD(Jd) : null;
        if (Nd && Nd.length >= 6) {
          const dd = function(dd) {
            const Jd = new Uint32Array(16);
            for (let kd = 0; kd + 6 <= dd.length; kd += 6) {
              const pd = [0, 1, 2].map((Jd => Math.max(0, Math.ceil(8 * dd[kd + Jd] - .5)))),
                Nd = [0, 1, 2].map((Jd => Math.min(7, Math.floor(8 * dd[kd + Jd + 3] - .5))));
              for (let dd = pd[2]; dd <= Nd[2]; dd++)
                for (let kd = pd[1]; kd <= Nd[1]; kd++)
                  for (let Wd = pd[0]; Wd <= Nd[0]; Wd++) {
                    const pd = Wd + 8 * (kd + 8 * dd);
                    Jd[pd >>> 5] |= 1 << (31 & pd)
                  }
            }
            return Jd
          }(Nd);
          return function(dd) {
            return dd.every((dd => 4294967295 === dd))
          }(dd) ? zJ : dd.every((dd => 0 === dd)) ? null : {
            kind: "shape",
            key: `shape:${dd.join(",")}`,
            mask: dd
          }
        }
        if (dd.hq[Jd] || !dd.TL[Jd]) return null;
        const Wd = [0, 1, 2, 3, 4, 5].map((pd => {
          const Nd = dd.EL[6 * Jd + pd];
          let Wd = kd.get(Nd);
          return void 0 === Wd && (Wd = function(dd) {
            if (!dd || dd.AL) return null;
            const {
              Q0: Jd,
              J_: kd,
              u9: pd
            } = dd;
            if (!Jd || !kd || !(kd > 0) || void 0 === pd || !(pd >= 0)) return null;
            const Nd = Jd[0],
              Wd = kd * kd * 4;
            if (!Nd || Nd.byteLength < Wd) return null;
            const Pd = Math.floor(Nd.byteLength / Wd),
              Zd = Jd[Math.floor(pd / Pd)];
            if (!Zd) return null;
            const gd = new Uint8Array(Zd.buffer, Zd.byteOffset, Zd.byteLength),
              Cd = pd % Pd * Wd;
            if (Cd + Wd > gd.length) return null;
            const Kd = new Uint8Array(kd * kd);
            let od = !1;
            for (let ld = 0; ld < Kd.length; ld++) Kd[ld] = gd[Cd + 4 * ld + 3], od ||= Kd[ld] < dg;
            return od ? {
              alpha: Kd,
              width: kd
            } : null
          }(dd.wL(Nd)), kd.set(Nd, Wd)), Wd
        }));
        if (Wd.every((dd => null === dd))) return zJ;
        const Pd = kg(Math.max(...Wd.map((dd => {
            var Jd;
            return null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.width) && void 0 !== Jd ? Jd : 1
          })))),
          Zd = new Uint32Array(Jk(Pd)).fill(4294967295),
          gd = Wd.map((dd => null === dd ? Zd : Jg(dd.alpha, dd.width, dd.width, Pd)));
        return {
          kind: "cutout",
          key: `cutout:${Pd}:${gd.map((dd=>dd.join(","))).join("|")}`,
          size: Pd,
          faces: gd
        }
      }
      allocate(dd) {
        if (this.nextCaster >= kk) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const Jd = this.nextCaster++;
        if (this.writeCaster(Jd, HJ, 0, 0, 0), "shape" === dd.kind) {
          const kd = this.allocateMask(dd.mask.length);
          kd >= 0 && (this.sink(kd, dd.mask), this.writeCaster(Jd, wJ, kd, 0, 8))
        } else if ("cutout" === dd.kind) {
          const kd = Jk(dd.size),
            pd = this.allocateMask(6 * kd);
          if (pd >= 0) {
            const Nd = new Uint32Array(6 * kd);
            dd.faces.forEach(((dd, Jd) => {
              Nd.set(dd, Jd * kd)
            })), this.sink(pd, Nd), this.writeCaster(Jd, dk, pd, 0, dd.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(Jd, dd.planes).finally((() => {
          this.planesLoading--
        })));
        return Jd
      }
      async loadPlanes(dd, Jd) {
        const kd = await Promise.all(Jd.map((dd => this.texture(dd.texture))));
        if (kd.some((dd => null === dd))) return;
        const pd = kd,
          Nd = kg(Math.max(...pd.map((dd => Math.min(dd.width, dd.height))))),
          Wd = Jk(Nd),
          Pd = this.allocateMask(Jd.length * (4 + Wd));
        if (Pd < 0) return;
        const Zd = new Uint32Array(Jd.length * (4 + Wd)),
          gd = 4 * Jd.length;
        Jd.forEach(((dd, Jd) => {
          const kd = Pd + gd + Jd * Wd;
          Zd.set(function(dd, Jd) {
            const [kd, pd] = dd.tangent, Nd = Math.hypot(kd, pd) || 1, Wd = kd / Nd, Pd = pd / Nd, Zd = dd.centre[0] * Pd - dd.centre[1] * Wd, gd = new Uint32Array(4);
            return new Float32Array(gd.buffer, 0, 3).set([Wd, Pd, Zd]), gd[3] = Jd, gd
          }(dd, kd), 4 * Jd), Zd.set(Jg(pd[Jd].alpha, pd[Jd].width, pd[Jd].height, Nd), gd + Jd * Wd)
        })), this.sink(Pd, Zd), this.writeCaster(dd, AJ, Pd, Jd.length, Nd)
      }
      texture(dd) {
        let Jd = this.textures.get(dd);
        return Jd || (Jd = this.loadTexture(dd).catch((Jd => (this.warn(`Sun shadows: no mask for ${dd}: ${Jd instanceof Error?Jd.message:String(Jd)}`), null))), this.textures.set(dd, Jd)), Jd
      }
      allocateMask(dd) {
        if (this.nextMaskWord + dd > pk) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const Jd = 32768 + this.nextMaskWord;
        return this.nextMaskWord += dd, Jd
      }
      writeCaster(dd, Jd, kd, pd, Nd) {
        this.sink(0 + 4 * dd, Uint32Array.of(Jd, kd, pd, Nd))
      }
      warnOnce(dd) {
        this.warned.has(dd) || (this.warned.add(dd), this.warn(dd))
      }
    }
    var Ng = kd(2729);

    function Wg(dd) {
      return !dd.JO && !dd.Qq && !dd.mL
    }

    function Pg() {
      return {
        bricks: new Uint32Array(TJ),
        cells: new Uint16Array(32768),
        special: new Uint8Array(yJ)
      }
    }
    class Zg {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = dd, this.writeVoxels = Jd, this.writePool = kd, this.warn = pd, this.eyeChunk = null, this.slotChunk = new Array(SJ).fill(null), this.slotVersion = new Float64Array(SJ).fill(-1), this.slotPool = new Array(SJ).fill(null), this.starved = new Uint8Array(SJ), this.queue = [], this.queued = new Uint8Array(SJ), this.queueSorted = !0, this.freePool = new Uint32Array(Nk), this.freeCount = Nk, this.casterTable = null, this.warnedPool = !1, this.scratch = Pg(), this.victimScratch = Pg(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * SJ), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Nd = 0; Nd < Nk; Nd++) this.freePool[Nd] = 65535 - Nd
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Nk - this.freeCount
      }
      chunkAdded(dd) {
        if (null === this.eyeChunk || !this.inRadius(dd.i, dd.j, dd.k)) return;
        const Jd = uJ(dd.i, dd.j, dd.k);
        this.slotChunk[Jd] = dd, this.slotVersion[Jd] = -1, this.enqueue(Jd)
      }
      update(dd, Jd, kd) {
        const pd = this.casters.blockCaster;
        if (pd !== this.casterTable) {
          this.casterTable = pd;
          for (let dd = 0; dd < SJ; dd++) this.slotVersion[dd] = -1, this.slotChunk[dd] && this.enqueue(dd)
        }
        const Nd = Math.floor(dd[0] / 32),
          Wd = Math.floor(dd[1] / 32),
          Pd = Math.floor(dd[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Nd || this.eyeChunk[1] !== Wd || this.eyeChunk[2] !== Pd) && (this.eyeChunk = [Nd, Wd, Pd], this.follow(Jd), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let Zd = 0; Zd < SJ; Zd++) {
          const dd = this.slotChunk[Zd];
          dd && (dd.lq || dd.jL !== this.slotVersion[Zd]) && this.enqueue(Zd)
        }
        this.drain(kd), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(dd, Jd) {
        this.records.set(Jd, 4 * dd), this.windowTopStale = !0, this.writeVoxels(4 * dd, Jd)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const dd = this.records;
        let Jd = -1 / 0;
        for (let pd = 0; pd < dd.length; pd += 4) {
          const kd = 255 & dd[pd + 3];
          kd !== fJ && kd !== nJ || !this.inRadius(dd[pd], dd[pd + 1], dd[pd + 2]) || (Jd = Math.max(Jd, dd[pd + 1] * YJ + (dd[pd + 3] >>> 8)))
        }
        const kd = Jd === -1 / 0 ? 1 : Jd + cJ;
        kd !== this.windowTop[0] && (this.windowTop[0] = kd, this.writeVoxels(EJ, this.windowTop))
      }
      follow(dd) {
        const Jd = this.eyeChunk,
          [kd, pd, Nd] = mJ;
        for (let Pd = -Nd; Pd <= Nd; Pd++)
          for (let Nd = -pd; Nd <= pd; Nd++)
            for (let pd = -kd; pd <= kd; pd++) {
              var Wd;
              const kd = Jd[0] + pd,
                Zd = Jd[1] + Nd,
                gd = Jd[2] + Pd,
                Cd = uJ(kd, Zd, gd),
                Kd = this.slotChunk[Cd];
              if (Kd && !Kd.lq && Kd.i === kd && Kd.j === Zd && Kd.k === gd) continue;
              const od = null !== (Wd = dd(kd, Zd, gd)) && void 0 !== Wd ? Wd : null;
              Kd && (Kd.i !== kd || Kd.j !== Zd || Kd.k !== gd) && this.slotPool[Cd] && (this.release(Cd), this.record.fill(0), this.writeRecord(Cd, this.record)), this.slotChunk[Cd] = od, this.slotVersion[Cd] = -1, (od || Kd) && this.enqueue(Cd)
            }
      }
      requeueStarved() {
        for (let dd = 0; dd < SJ; dd++) this.starved[dd] && this.slotChunk[dd] && this.enqueue(dd)
      }
      enqueue(dd) {
        this.queued[dd] || (this.queued[dd] = 1, this.queue.push(dd), this.queueSorted = !1)
      }
      drain(dd) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const dd = new Map;
          for (const Jd of this.queue) dd.set(Jd, this.slotDistance(Jd));
          this.queue.sort(((Jd, kd) => dd.get(kd) - dd.get(Jd))), this.queueSorted = !0
        }
        const Jd = performance.now();
        let kd = 0;
        const pd = [];
        for (; this.queue.length > 0 && (0 === kd || performance.now() - Jd < dd);) {
          const dd = this.queue.pop(),
            Jd = this.slotChunk[dd];
          !Jd || Jd.lq || Wg(Jd) ? (this.queued[dd] = 0, this.encodeSlot(dd), kd++) : pd.push(dd)
        }
        for (let Nd = pd.length - 1; Nd >= 0; Nd--) this.queue.push(pd[Nd])
      }
      slotDistance(dd) {
        const Jd = this.slotChunk[dd],
          kd = this.eyeChunk;
        return Jd ? Math.max(Math.abs(Jd.i - kd[0]), Math.abs(Jd.j - kd[1]), Math.abs(Jd.k - kd[2])) : 0
      }
      inRadius(dd, Jd, kd) {
        const pd = this.eyeChunk,
          [Nd, Wd, Pd] = mJ;
        return Math.abs(dd - pd[0]) <= Nd && Math.abs(Jd - pd[1]) <= Wd && Math.abs(kd - pd[2]) <= Pd
      }
      release(dd) {
        const Jd = this.slotPool[dd];
        if (Jd) {
          for (let dd = Jd.length - 1; dd >= 0; dd--) this.freePool[this.freeCount++] = Jd[dd];
          this.slotPool[dd] = null
        }
      }
      encodeSlot(dd) {
        var Jd, kd, pd, Nd, Wd;
        let Pd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          Zd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const gd = null !== (Jd = null === (kd = this.slotPool[dd]) || void 0 === kd ? void 0 : kd.length) && void 0 !== Jd ? Jd : 0;
        this.release(dd), this.starved[dd] = 0;
        const Cd = this.slotChunk[dd],
          Kd = this.record;
        if (!Cd || Cd.lq || !Cd.ql) return this.slotChunk[dd] = null, this.slotVersion[dd] = -1, Kd.fill(0), this.writeRecord(dd, Kd), void(gd > 0 && this.requeueStarved());
        this.slotVersion[dd] = Cd.jL;
        const od = this.encodeBricks(Cd, dd, Pd, Zd);
        Kd[0] = Cd.i, Kd[1] = Cd.j, Kd[2] = Cd.k, Kd[3] = od, this.writeRecord(dd, Kd), null === (pd = this.encoded) || void 0 === pd || pd.call(this, Cd), Zd && (null !== (Nd = null === (Wd = this.slotPool[dd]) || void 0 === Wd ? void 0 : Wd.length) && void 0 !== Nd ? Nd : 0) < gd && this.requeueStarved()
      }
      encodeBricks(dd, Jd, kd, pd) {
        if (dd.AQ) return XJ;
        const Nd = this.casters.blockCaster,
          {
            data: Wd,
            stride: Pd,
            offset: Zd
          } = dd.ql,
          [gd, Cd, Kd] = Pd,
          od = YJ,
          {
            bricks: ld,
            cells: Qd,
            special: Ld
          } = kd;
        ld.fill(0), Ld.fill(0);
        let Od = 0,
          ed = 0,
          Rd = 0;
        for (let Id = 0; Id < od; Id++) {
          const Jd = Id >> 2,
            kd = 3 & Id,
            pd = dd.IQ[Id],
            Pd = pd === Ng.f ? -1 : pd < Nd.length ? Nd[pd] : 0;
          if (0 !== Pd)
            for (let dd = 0; dd < od; dd++) {
              const pd = dd >> 2,
                Gd = 3 & dd;
              let vd = Zd + dd * gd + Id * Cd;
              for (let dd = 0; dd < od; dd++, vd += Kd) {
                let Zd = Pd;
                if (Zd < 0) {
                  const dd = Wd[vd];
                  if (Zd = dd < Nd.length ? Nd[dd] : 0, 0 === Zd) continue
                }
                const gd = tJ(pd, Jd, dd >> 2),
                  Cd = VJ(Gd, kd, 3 & dd);
                ld[3 * gd + (Cd >>> 5)] |= 1 << (31 & Cd), Qd[gd * UJ + Cd] = Zd, Od++, Rd = Id, Zd === zJ ? ed++ : Ld[gd] = 1
              }
            }
        }
        return 0 === Od ? XJ : 32768 === ed ? fJ | Rd << 8 : (this.writePoolEntries(Jd, kd, pd), this.writeVoxels(DJ + Jd * TJ, ld), nJ | Rd << 8)
      }
      writePoolEntries(dd, Jd, kd) {
        const {
          bricks: pd,
          cells: Nd,
          special: Wd
        } = Jd, Pd = this.entry;
        let Zd = 0;
        for (let Kd = 0; Kd < yJ; Kd++) Zd += Wd[Kd];
        if (0 === Zd) return;
        kd && this.freeCount < Zd && this.evictBeyond(dd, Zd);
        const gd = new Uint32Array(kd ? Math.min(Zd, this.freeCount) : 0);
        let Cd = 0;
        for (let Kd = 0; Kd < yJ; Kd++) {
          if (!Wd[Kd]) continue;
          const kd = 3 * Kd;
          if (Cd === gd.length) {
            this.dropSpecials(Jd, Kd), this.starved[dd] = 1;
            continue
          }
          const Zd = this.freePool[--this.freeCount];
          gd[Cd++] = Zd;
          for (let dd = 0; dd < UJ; dd++) {
            const Jd = pd[kd + (dd >>> 5)] >>> (31 & dd) & 1 ? Nd[Kd * UJ + dd] : 0;
            1 & dd ? Pd[dd >> 1] |= Jd << 16 : Pd[dd >> 1] = Jd
          }
          pd[kd + 2] = Zd + 1, this.writePool(Wk + 32 * Zd, Pd)
        }
        gd.length > 0 && (this.slotPool[dd] = gd)
      }
      evictBeyond(dd, Jd) {
        const kd = this.slotDistance(dd),
          pd = [];
        for (let Nd = 0; Nd < SJ; Nd++) Nd !== dd && this.slotPool[Nd] && this.slotDistance(Nd) > kd && pd.push(Nd);
        pd.sort(((dd, Jd) => this.slotDistance(Jd) - this.slotDistance(dd)));
        for (const Nd of pd) {
          if (this.freeCount >= Jd) return;
          const dd = this.slotChunk[Nd];
          dd && !dd.lq && dd.ql && (dd.jL === this.slotVersion[Nd] || Wg(dd)) && this.encodeSlot(Nd, this.victimScratch, !1)
        }
      }
      dropSpecials(dd, Jd) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const kd = 3 * Jd;
        for (let pd = 0; pd < UJ; pd++) dd.cells[Jd * UJ + pd] !== zJ && (dd.bricks[kd + (pd >>> 5)] &= ~(1 << (31 & pd)))
      }
    }
    var gg = kd(37682);
    class Cg {
      constructor(dd) {
        this.device = dd, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Rk, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Vo = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = dd.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = dd.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(dd, Jd, kd) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: pd
        } = this;
        pd.ZQ(dd, Jd), kd.forEachSunShadowCaster((dd => {
          this.add(dd)
        })), pd.finish();
        const Nd = 0 === pd.parts;
        if (Nd && this.uploadedEmpty) return;
        this.uploadedEmpty = Nd;
        const {
          queue: Wd
        } = this.device, {
          words: Pd
        } = pd;
        Wd.writeBuffer(this.frameBuffer, 0, Pd, 0, 16385), pd.refs > 0 && Wd.writeBuffer(this.frameBuffer, 65540, Pd, Ck, pd.refs), Nd || Wd.writeBuffer(this.frameBuffer, 327684, Pd, Kk, pd.parts * gk)
      }
      add(dd) {
        const Jd = this.gridFor(dd);
        if (!Jd) return;
        const {
          frame: kd
        } = this, {
          Vo: pd,
          worldAt: Nd,
          instances: Wd,
          instanceCount: Pd,
          thin: Zd
        } = dd;
        if (Wd)
          for (let gd = 0; gd < Pd; gd++) Zd ? (Gk(Wd, 16 * gd, pd, Nd, this.Vo), kd.add(Jd, this.Vo)) : kd.add(Jd, Wd, 16 * gd);
        else kd.add(Jd, pd, Nd)
      }
      gridFor(dd) {
        let {
          geometry: Jd,
          indexed: kd,
          first: pd,
          count: Nd,
          skip: Wd
        } = dd, Pd = this.grids.get(Jd);
        Pd || (Pd = new Map, this.grids.set(Jd, Pd));
        const Zd = `${kd?pd:-1-pd}:${Nd}:${null!==Wd&&void 0!==Wd?Wd:""}`;
        let gd = Pd.get(Zd);
        if (void 0 !== gd || this.gridsFull) return gd;
        const Cd = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Cd + 2;
        else if (Cd > this.bakeDeadline) return;
        return gd = this.bake(Jd, kd, pd, Nd, Wd), void 0 !== gd && Pd.set(Zd, gd), gd
      }
      bake(dd, Jd, kd, pd, Nd) {
        const Wd = dd.vertexAttributes.find((dd => "position" === dd.kind)),
          Pd = Wd ? function(dd, Jd, kd, pd) {
            let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Wd = dd => Jd ? Jd[kd + dd] : kd + dd,
              Pd = dd => null !== Nd && [0, 1, 2].some((Jd => {
                const kd = Wd(dd + Jd);
                return kd >= Nd[0] && kd < Nd[1]
              })),
              Zd = [1 / 0, 1 / 0, 1 / 0],
              gd = [-1 / 0, -1 / 0, -1 / 0];
            for (let Id = 0; Id + 2 < pd; Id += 3)
              if (!Pd(Id))
                for (let Jd = 0; Jd < 3; Jd++) {
                  const kd = Wd(Id + Jd);
                  for (let Jd = 0; Jd < 3; Jd++) Zd[Jd] = Math.min(Zd[Jd], dd[3 * kd + Jd]), gd[Jd] = Math.max(gd[Jd], dd[3 * kd + Jd])
                }
            const Cd = Math.max(gd[0] - Zd[0], gd[1] - Zd[1], gd[2] - Zd[2]);
            if (!(Cd > 0)) return null;
            const Kd = Cd / 64,
              od = [0, 0, 0],
              ld = [0, 0, 0],
              Qd = [0, 0, 0];
            for (let Id = 0; Id < 3; Id++) od[Id] = Math.min(65, Math.ceil((gd[Id] - Zd[Id]) / Kd) + 1), ld[Id] = Zd[Id] - Kd / 2, Qd[Id] = ld[Id] + od[Id] * Kd;
            const Ld = new Uint32Array(Math.ceil(od[0] * od[1] * od[2] / 32)),
              Od = new Float64Array(9),
              ed = [0, 0, 0],
              Rd = [0, 0, 0];
            for (let Id = 0; Id + 2 < pd; Id += 3)
              if (!Pd(Id)) {
                for (let Jd = 0; Jd < 3; Jd++) {
                  const kd = Wd(Id + Jd);
                  for (let pd = 0; pd < 3; pd++) Od[3 * Jd + pd] = dd[3 * kd + pd]
                }
                for (let dd = 0; dd < 3; dd++) {
                  const Jd = Math.min(Od[dd], Od[3 + dd], Od[6 + dd]),
                    kd = Math.max(Od[dd], Od[3 + dd], Od[6 + dd]);
                  ed[dd] = Math.max(0, Math.floor((Jd - ld[dd]) / Kd - 1e-6)), Rd[dd] = Math.min(od[dd] - 1, Math.floor((kd - ld[dd]) / Kd + 1e-6))
                }
                for (let dd = ed[2]; dd <= Rd[2]; dd++)
                  for (let Jd = ed[1]; Jd <= Rd[1]; Jd++)
                    for (let kd = ed[0]; kd <= Rd[0]; kd++)
                      if (vk(Od, ld[0] + (kd + .5) * Kd, ld[1] + (Jd + .5) * Kd, ld[2] + (dd + .5) * Kd, Kd / 2)) {
                        const pd = kd + od[0] * (Jd + od[1] * dd);
                        Ld[pd >>> 5] |= 1 << (31 & pd)
                      }
              } return {
              words: Ld,
              lo: ld,
              hi: Qd,
              cell: Kd,
              dims: od
            }
          }((0, gg.d)(Wd, dd.vertexCount), Jd ? dd.indexData : null, kd, pd, Nd) : null;
        if (!Pd) return null;
        const {
          words: Zd,
          ...gd
        } = Pd;
        if (this.gridTop + Zd.length > Qk) return void(this.gridsFull = !0);
        const Cd = this.gridTop;
        return this.gridTop += Zd.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Cd, Zd), {
          ...gd,
          at: Cd
        }
      }
    }
    const Kg = Math.cos(1 * Math.PI / 180);

    function og(dd, Jd) {
      return dd[0] * Jd[0] + dd[1] * Jd[1] + dd[2] * Jd[2] < Kg
    }
    async function lg(dd) {
      const {
        pixels: Jd,
        width: kd,
        height: pd
      } = await DN(dd), Nd = new Uint8Array(kd * pd);
      for (let Wd = 0; Wd < Nd.length; Wd++) Nd[Wd] = Jd[4 * Wd + 3];
      return {
        width: kd,
        height: pd,
        alpha: Nd
      }
    }
    class Qg {
      constructor(dd, Jd) {
        this.device = dd, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(qk.r), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = dd.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = dd.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * hJ,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = dd.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [kd, pd, Nd] = qk.u;
        this.volume = dd.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: kd,
            height: pd,
            depthOrArrayLayers: Nd
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = dd.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = dd.createBuffer({
          label: "sun-shadow-volume-work",
          size: qk.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = Jd ? new Cg(dd) : null, this.entityStandIn = Jd ? null : dd.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var dd, Jd;
        const kd = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || kd.push("Lite sun shadow volume pipeline compiling");
        const pd = null !== (dd = null === (Jd = this.casters) || void 0 === Jd ? void 0 : Jd.planesLoading) && void 0 !== dd ? dd : 0;
        return pd > 0 && kd.push(`${pd} Lite sun shadow plane casters loading their textures`), kd
      }
      entries() {
        var dd, Jd, kd, pd;
        const Nd = MJ.t;
        return [{
          binding: Nd.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Nd.ql,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Nd.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Nd.volume,
          resource: this.volumeView
        }, {
          binding: Nd.sampler,
          resource: this.volumeSampler
        }, {
          binding: Nd.entities,
          resource: {
            buffer: null !== (dd = null === (Jd = this.entities) || void 0 === Jd ? void 0 : Jd.frameBuffer) && void 0 !== dd ? dd : this.entityStandIn
          }
        }, {
          binding: Nd.entityGrids,
          resource: {
            buffer: null !== (kd = null === (pd = this.entities) || void 0 === pd ? void 0 : pd.gridBuffer) && void 0 !== kd ? kd : this.entityStandIn
          }
        }]
      }
      prepare(dd, Jd, kd) {
        var pd;
        this.entitiesThisFrame = !1;
        const Nd = null !== (pd = null === kd || void 0 === kd ? void 0 : kd.sunShadowReach()) && void 0 !== pd ? pd : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!kd || !Nd.sunShadow && !Nd.airShadow) return void(this.volumeHolds = null);
        if (dd.Vo.Xdd !== YJ) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${dd.Vo.Xdd}; everything is lit.`)));
        const Wd = this.start(dd);
        this.casters.update(dd.Hl, dd.Hl.JQ.length);
        const Pd = dd.Rl;
        for (let ld = 0; ld < 3; ld++) this.eye[ld] = Jd[ld] + Pd[ld];
        const Zd = (0, qk.C)(this.eye);
        this.staleNear = Zd;
        const gd = dd.Vo.pO;
        Wd.update(this.eye, ((dd, Jd, kd) => gd.NO(dd, Jd, kd)), 1);
        const Cd = (0, qk.y)(kd.Qdd()),
          Kd = Wd.eyeChunk,
          od = this.uniformInts;
        for (let ld = 0; ld < 3; ld++) od[ld] = Kd[ld], od[4 + ld] = Zd[ld];
        this.entitiesThisFrame = null !== this.entities && Nd.sunShadow, this.entitiesThisFrame && ek(this.uniformFloats, 8, Jd, Cd), null !== this.volumeHolds && (this.castersWritten || og(Cd, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(Zd, Cd, Kd)
      }
      markStale(dd) {
        const Jd = this.staleNear,
          kd = YJ,
          pd = [dd.i * kd, dd.j * kd, dd.k * kd];
        for (let Wd = 0; Wd < 3; Wd++)
          if (pd[Wd] + kd <= Jd[Wd] - kd || pd[Wd] >= Jd[Wd] + qk.u[Wd] + kd) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Nd = this.stale;
        for (let Wd = 0; Wd < Nd.length; Wd += 4)
          if (Nd[Wd] === dd.i && Nd[Wd + 1] === dd.j && Nd[Wd + 2] === dd.k) return void(Nd[Wd + 3] = this.swept);
        if (16 === Nd.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Nd.push(dd.i, dd.j, dd.k, this.swept)
      }
      writeStale() {
        const dd = this.swept,
          Jd = this.stale;
        this.staleAll && dd - this.staleAllSwept >= qk.l && (this.staleAll = !1, Jd.length = 0);
        let kd = 0;
        for (let Nd = 0; Nd < Jd.length; Nd += 4)
          if (dd - Jd[Nd + 3] < qk.l) {
            for (let dd = 0; dd < 4; dd++) Jd[kd + dd] = Jd[Nd + dd];
            kd += 4
          } Jd.length = kd;
        const pd = this.uniformInts;
        pd[3] = this.staleAll ? 5 : kd / 4;
        for (let Nd = 0; Nd < 4; Nd++)
          for (let dd = 0; dd < 3; dd++) pd[16 + 4 * Nd + dd] = 4 * Nd < kd ? Jd[4 * Nd + dd] * YJ : 0
      }
      writeUniform() {
        const dd = this.uniformInts;
        let Jd = this.uniformWritten;
        if (Jd) {
          let kd = !0;
          for (let pd = 0; pd < dd.length && kd; pd++) kd = dd[pd] === Jd[pd];
          if (kd) return
        }
        Jd ??= this.uniformWritten = new Int32Array(dd.length), Jd.set(dd), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(dd) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, dd)
      }
      computeVolume(dd, Jd, kd) {
        const pd = this.buildVolumePass();
        if (!pd) return void(this.volumeHolds = null);
        const Nd = (0, qk.B)(this.volumeHolds, dd);
        this.volumeHolds = dd;
        const Wd = 1 === Nd.length && Nd[0].size.every(((dd, Jd) => dd === qk.u[Jd])),
          Pd = this.sweptChunk,
          Zd = this.sweptLight,
          gd = Jd[0] !== Zd[0] || Jd[1] !== Zd[1] || Jd[2] !== Zd[2],
          Cd = kd[0] !== Pd[0] || kd[1] !== Pd[1] || kd[2] !== Pd[2],
          Kd = gd && og(Jd, Zd);
        if ((Wd || this.written || Cd || Kd) && (this.fastLeft = qk.l), Wd || this.written || gd || Cd) {
          this.written = !1;
          for (let dd = 0; dd < 3; dd++) Pd[dd] = kd[dd], Zd[dd] = Jd[dd];
          this.sweepLeft = Wd ? 0 : qk.l
        }
        if (Wd ? this.swept += qk.l : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Nd.push(...(0, qk.G)(dd, this.slice)), this.slice = (this.slice + 1) % qk.l, this.swept++), 0 === Nd.length) return;
        const od = (0, qk.H)(this.workData, Jd, Nd);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const ld = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Qd = ld.beginComputePass({
            label: "sun-shadow-volume"
          });
        Qd.setPipeline(pd.pipeline), Qd.setBindGroup(ik.group, pd.bindGroup), Qd.dispatchWorkgroups(Math.ceil(od / qk.o)), Qd.end(), this.device.queue.submit([ld.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const dd = ik,
          Jd = GPUShaderStage.COMPUTE,
          kd = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: dd.uniform,
              visibility: Jd,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: dd.ql,
              visibility: Jd,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: dd.special,
              visibility: Jd,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: dd.work,
              visibility: Jd,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: dd.volume,
              visibility: Jd,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          pd = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: kd,
            entries: [{
              binding: dd.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: dd.ql,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: dd.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: dd.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: dd.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [kd]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: ak()
            }),
            entryPoint: "main"
          }
        }).then((dd => {
          this.volumePass = {
            pipeline: dd,
            bindGroup: pd
          }
        }), (dd => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(dd)}`)
        })), null
      }
      start(dd) {
        if (this.window) return this.window;
        const Jd = (dd, Jd) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * dd, Jd)
        };
        this.casters = new pg(((dd, kd) => {
          this.castersWritten = !0, Jd(dd, kd)
        }), lg);
        const kd = new Zg(this.casters, ((dd, Jd) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * dd, Jd)
        }), Jd);
        return kd.encoded = dd => {
          this.markStale(dd)
        }, dd.Vo.on("chunkAdded", (dd => {
          kd.chunkAdded(dd)
        })), this.window = kd, kd
      }
    }
    var Lg = kd(38826),
      Og = kd(38832);
    const eg = 0,
      Rg = 3,
      Ig = 4,
      Gg = 5;

    function vg(dd, Jd, kd, pd) {
      dd.drawOffset(Jd, pd + eg), Jd[pd + Rg] = dd.drawTime(), kd[pd + Ig] = dd.ring.drawStart(), kd[pd + Gg] = dd.ring.drawCount()
    }
    const xg = `\n${Rp}\n\nconst MAX_STOPS = ${Og.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Og.c/4}>,\n\tcolor1: array<vec4f, ${Og.c}>,\n\tcolor2: array<vec4f, ${Og.c}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Og.c}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Og.c}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var qg = kd(41579);
    class Bg {
      constructor(dd, Jd, kd, pd) {
        this.device = dd, this.system = Jd, this.frameIndex = kd, this.bindings = pd, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, qg.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (dd, Jd) => {
          this.device.queue.writeBuffer(this.ring, dd * Og.d * 4, this.system.ring.records, dd * Og.d, (Jd - dd) * Og.d)
        };
        const {
          name: Nd
        } = Jd;
        this.ring = dd.createBuffer({
          label: `particles-${Nd}`,
          size: Jd.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = dd.createBuffer({
          label: `particles-uniforms-${Nd}`,
          size: 4 * Og.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(dd) {
        const Jd = (0, qg.c)(this.system, this.uniformBits, dd);
        Jd && (this.uniformBits = Jd, this.device.queue.writeBuffer(this.uniforms, 0, Jd))
      }
      bind() {
        const {
          system: dd
        } = this, Jd = this.texture;
        (0, qg.i)(dd, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${dd.name}`,
          size: [Og.f, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Og.f
        }, [Og.f, 1]));
        const kd = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === Jd.view && this.boundSampler === Jd.sampler && this.boundRamp === kd || (this.boundView = Jd.view, this.boundSampler = Jd.sampler, this.boundRamp = kd, this.bindGroup = this.device.createBindGroup({
          label: `particles-${dd.name}`,
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
            resource: Jd.sampler
          }, {
            binding: 3,
            resource: Jd.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: kd
          }]
        }))
      }
      destroy() {
        var dd;
        this.ring.destroy(), this.uniforms.destroy(), null === (dd = this.ramp) || void 0 === dd || dd.destroy()
      }
    }
    class sg {
      constructor(dd, Jd) {
        this.device = dd, this.resources = Jd, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, KJ.c)();
        const kd = dd.createBindGroupLayout({
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
        this.frameLayout = dd.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = dd.createPipelineLayout({
          bindGroupLayouts: [kJ(dd), kd, this.frameLayout]
        }), this.module = dd.createShaderModule({
          label: "particles",
          code: xg
        });
        const pd = dd.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        dd.queue.writeTexture({
          texture: pd
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: kd,
          rampSampler: dd.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: pd.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (Jd, kd) => (this.bindTarget(kd), {
            renderable: this.renderable,
            pipeline: ZJ(dd, kd),
            draw: dd => kd === this.preparedTarget ? this.draw(dd) : 0
          })
        }
      }
      get xNd() {
        return this.systems.size
      }
      reset() {
        for (const dd of this.systems.keys()) dd.reset()
      }
      describePendingWork() {
        return (0, Lg.e)(this.systems.keys(), "Lite")
      }
      FX(dd, Jd) {
        const kd = new Lg.c(dd, Jd, this);
        return this.systems.set(kd, new Bg(this.device, kd, this.allocateFrameIndex(), this.bindings)), kd
      }
      Jdd(dd, Jd) {
        for (const kd of this.systems.keys()) kd.Jdd(dd, Jd)
      }
      canDraw(dd) {
        const Jd = this.systems.get(dd),
          kd = dd.texture ? this.resources.boundTexture(dd.texture) : null;
        if (!Jd || !kd || !this.targetPipelines) return !1;
        if (Jd.texture = kd, Jd.pipelines.length = 0, !rN(dd.blendMode)) return this.warnOnce(`blend:${dd.blendMode}`, `particle blend mode ${dd.blendMode} is not drawn (${dd.name})`), !0;
        const pd = (0, bN.o)(dd.blendMode);
        for (const Nd of pd) {
          const dd = this.pipelineFor(Nd);
          if (!1 === dd) return Jd.pipelines.length = 0, !0;
          dd && Jd.pipelines.push(dd)
        }
        return Jd.pipelines.length === pd.length
      }
      disposeStopped(dd) {
        dd.dispose()
      }
      remove(dd) {
        const Jd = this.systems.get(dd);
        Jd && (this.systems.delete(dd), Jd.destroy(), this.freeFrameIndices.push(Jd.frameIndex))
      }
      prepare(dd) {
        const Jd = dd.animationRatio || 1;
        gJ(this.renderable._worldCenter, dd, NJ), this.preparedTarget = this.target, this.draws.length = 0;
        let kd = 0;
        for (const pd of this.systems.values()) {
          const dd = pd.system;
          if (!dd.animateIfActive(Jd)) continue;
          if (dd.ring.takeUploads(pd.upload), !dd.hasLiveParticles() || 0 === pd.pipelines.length) continue;
          pd.writeUniforms(this.warnOnce), pd.bind();
          const Nd = 64 * pd.frameIndex;
          pd.count = dd.ring.drawCount(), vg(dd, this.frameData, this.frameBits, Nd), kd = Math.max(kd, Nd + 64), this.draws.push(pd)
        }
        kd > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, kd)
      }
      draw(dd) {
        let Jd = 0,
          kd = null;
        for (const pd of this.draws) {
          dd.setBindGroup(1, pd.bindGroup), dd.setBindGroup(2, this.frameBindGroup, [256 * pd.frameIndex]);
          for (const Nd of pd.pipelines) Nd !== kd && (dd.setPipeline(Nd), kd = Nd), dd.draw(4, pd.count), Jd++
        }
        return Jd
      }
      bindTarget(dd) {
        this.target = dd;
        const Jd = `${dd._colorFormat}|${dd._depthStencilFormat}|${dd._depthCompare}|${dd._sampleCount}`;
        let kd = this.pipelines.get(Jd);
        kd || (kd = new Map, this.pipelines.set(Jd, kd)), this.targetPipelines = kd
      }
      pipelineFor(dd) {
        var Jd;
        const kd = this.targetPipelines,
          pd = kd.get(dd);
        if (void 0 !== pd) return pd;
        kd.set(dd, null);
        const Nd = this.target,
          Wd = dd === bN.d,
          Pd = null !== (Jd = Nd._depthCompare) && void 0 !== Jd ? Jd : pJ;
        return this.device.createRenderPipelineAsync({
          label: `particles-${dd}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: wd({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Wd ? 1 : 0
            }
          }, Nd, uN((0, bN.k)(dd))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Nd._depthStencilFormat ? {
            format: Nd._depthStencilFormat,
            depthCompare: Pd,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Nd._sampleCount
          }
        }).then((Jd => {
          kd.set(dd, Jd)
        }), (Jd => {
          kd.set(dd, !1), console.error("Lite particle pipeline failed", Jd), zN("particles", `blend-${dd}`, Jd)
        })), null
      }
      allocateFrameIndex() {
        const dd = this.freeFrameIndices.pop();
        if (void 0 !== dd) return dd;
        const Jd = this.nextFrameIndex++;
        if (64 * (Jd + 1) > this.frameData.length) {
          const dd = new Float32Array(2 * this.frameData.length);
          dd.set(this.frameData), this.frameData = dd, this.frameBits = new Uint32Array(dd.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return Jd
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
    class ig {
      constructor(dd, Jd, kd, pd, Nd) {
        this.lite = dd, this.canvas = Jd, this.info = kd, this.resources = Nd, this.vpd = !1, this.needPOTTextures = !1, this.Y_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Jd.width, this.renderHeight = Jd.height, this.caps = {
          maxTextureSize: pd.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: pd.maxTextureArrayLayers
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
      setSize(dd, Jd) {
        if (this.renderWidth === dd && this.renderHeight === Jd) return !1;
        const kd = this.renderWidth,
          pd = this.renderHeight;
        this.renderWidth = dd, this.renderHeight = Jd;
        try {
          (0, Td.j)(this.lite, dd, Jd)
        } catch (Nd) {
          if (Nd instanceof DOMException && "InvalidStateError" === Nd.name) {
            this.renderWidth = kd, this.renderHeight = pd;
            try {
              (0, Td.j)(this.lite, kd, pd)
            } catch {
              this.canvas.width = kd, this.canvas.height = pd
            }
            return console.warn("WebGPU could not allocate render targets for resize", dd, Jd, Nd.message), !1
          }
          throw Nd
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
      iG() {
        const dd = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : dd - this.lastFrameTime, this.lastFrameTime = dd
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(dd, Jd) {
        const kd = document.createElement("canvas");
        return kd.width = dd, kd.height = Jd, kd
      }
      S_(dd, Jd) {
        var kd;
        return null !== (kd = this.resources.S_.get(dd)) && void 0 !== kd ? kd : new rd(this.resources, dd, Jd)
      }
      atlasArray(dd, Jd, kd) {
        return this.resources.atlasArray(dd, Jd, kd)
      }
    }
    class ag {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(dd) {
        this.fov = dd.fov, this.nearPlane = dd.near, this.farPlane = dd.far;
        const Jd = dd.worldMatrix;
        for (let kd = 0; kd < 16; kd++)
          if (this.worldMatrix[kd] !== Jd[kd]) return this.worldMatrix.set(Jd), void this.worldMatrixVersion++
      }
    }
    class Mg {
      constructor(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
        let Kd = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = dd, this.BO = Jd, this.sceneTask = kd, this.gpuDevice = pd, this.terrain = Nd, this.meshes = Wd, this.particles = Pd, this.resources = Zd, this.sunShadow = Kd, this.kkd = void 0, this.backendName = "WebGPU (Lite)", this.I5 = void 0, this.modelMeshes = void 0, this.camera = new ag, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new cd(pd.lost), this.deviceLost = this.refusals.deviceLost, this.kkd = new ig(dd, gd, Cd, pd.limits, Zd), (0, Fd.F)({
          EC: dd => {
            Sd(dd) && Zd.textureSlot(dd)
          },
          loaded: dd => Sd(dd) ? Zd.textureLoaded(dd) : null,
          canvasUpdated: (dd, Jd, kd) => {
            Sd(dd) && Zd.canvasUpdated(dd, Jd, kd)
          }
        }), this.I5 = Wd.I5, this.modelMeshes = Wd.modelMeshes, Jd.camera = this.camera
      }
      get castsEntitySunShadows() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.sunShadow) || void 0 === Jd ? void 0 : Jd.tracesEntities) && void 0 !== dd && dd
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(dd) {
        this.modelMeshes.attach(dd.model, dd.sceneMirror);
        const Jd = dd.BO;
        this.setClearColour(Jd.clearColor.r, Jd.clearColor.g, Jd.clearColor.b), Jd.draw = () => {
          this.drawFrame(dd, Jd)
        }
      }
      render(dd) {
        try {
          this.kkd.iG(), dd.BO.render()
        } catch (Jd) {
          throw this.refusals.frameFailed(Jd), Jd
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var dd, Jd, kd, pd;
        const Nd = [...this.particles.describePendingWork(), ...null !== (dd = null === (Jd = this.sunShadow) || void 0 === Jd ? void 0 : Jd.describePendingWork()) && void 0 !== dd ? dd : []],
          Wd = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (kd = this.terrain.sceneDepth) && void 0 !== kd && kd.compiling ? 1 : 0) + (null !== (pd = this.terrain.shadowMask) && void 0 !== pd && pd.compiling ? 1 : 0);
        Wd > 0 && Nd.push(`${Wd} Lite pipelines compiling`);
        const Pd = this.terrain.buffersAwaitingVerdict;
        Pd > 0 && Nd.push(`${Pd} Lite terrain buffers awaiting their out-of-memory verdict`);
        const Zd = this.resources.texturesLoading;
        return Zd > 0 && Nd.push(`${Zd} Lite textures loading`), Nd
      }
      prepareTexture(dd) {
        return null !== this.resources.boundTexture(dd) || this.resources.textureFailed(dd)
      }
      drawFrame(dd, Jd) {
        var kd, pd, Nd, Wd, Pd, Zd;
        const gd = lZ(dd);
        this.camera.copyFromView(gd), this.setClearColour(gd.clearColour[0], gd.clearColour[1], gd.clearColour[2]), null === (kd = this.sunShadow) || void 0 === kd || kd.prepare(dd.Jl, gd.eye, null !== (pd = dd.Jl.EQ) && void 0 !== pd ? pd : null), this.terrain.prepare(dd, gd), null === (Nd = this.terrain.sceneDepth) || void 0 === Nd || Nd.setPlanes(gd.near, gd.far), null === (Wd = this.terrain.shadowMask) || void 0 === Wd || Wd.prepare(gd), HP(this.sceneTask), this.meshes.prepare(Jd, gd, dd.model.earthSky, null !== (Pd = dd.Jl.EQ) && void 0 !== Pd ? Pd : null), this.particles.prepare(gd);
        const Cd = performance.now();
        this.resources.flushUploads(), null === (Zd = this.sunShadow) || void 0 === Zd || Zd.traceEntities(this.meshes);
        try {
          (0, Td.i)(this.engine, this.lastFrameTime > 0 ? Cd - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Cd
      }
      setClearColour(dd, Jd, kd) {
        const pd = this.BO.clearColor;
        pd.r = dd, pd.g = Jd, pd.b = kd, pd.a = 1
      }
    }
    const Fg = "WebGPU device lost while Lite was starting";

    function Yg(dd, Jd) {
      return "object" === typeof dd && null !== dd ? Object.assign(dd, {
        startStep: Jd
      }) : dd
    }
    async function mg(dd, Jd) {
      const kd = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!kd) throw Yg(new Error("No WebGPU adapter"), "no_adapter");
      const pd = kd.info,
        Nd = {
          vendor: (null === pd || void 0 === pd ? void 0 : pd.vendor) || "unknown vendor",
          renderer: (null === pd || void 0 === pd ? void 0 : pd.architecture) || "unknown renderer",
          version: (null === pd || void 0 === pd ? void 0 : pd.description) || "unknown version"
        },
        Wd = function(dd) {
          const Jd = {};
          for (const kd in dd.limits) {
            const pd = dd.limits[kd];
            "number" === typeof pd && (Jd[kd] = pd)
          }
          return Jd
        }(kd);
      let Pd;
      dd.style.background = "black";
      try {
        Pd = await (0, Td.d)(dd, {
          msaaSamples: Jd.Xkd ? 4 : 1,
          requiredLimits: Wd,
          alphaMode: "premultiplied"
        })
      } catch (Kd) {
        throw Yg(Kd, "#47" === (null === (Zd = Kd) || void 0 === Zd ? void 0 : Zd.message) ? "no_adapter" : "device")
      }
      var Zd;
      const gd = function(dd) {
        return dd._device
      }(Pd);
      let Cd = null;
      gd.lost.then((dd => {
        Cd = dd, console.error(`WebGPU device lost (${dd.reason}): ${dd.message}`)
      }));
      try {
        const kd = await async function(dd, Jd, kd, pd, Nd, Wd) {
          const Pd = (0, Ed.d)(dd),
            Zd = new tP(dd, Jd),
            gd = new VZ(Jd),
            Cd = new YP(Jd, Zd, (dd => function(dd, Jd) {
              for (const pd of dJ(dd)) {
                var kd;
                if (pd._targetSignature === Jd) return null !== (kd = pd._sceneBG) && void 0 !== kd ? kd : null
              }
              return null
            }(Pd, dd))),
            Kd = new sg(Jd, Zd);
          for (const Qd of function(dd, Jd, kd) {
              return [Jd.opaqueRenderable, dd.opaqueRenderable, dd.skyLastRenderable, kd.renderable, Jd.transparentRenderable, dd.transparentRenderable, dd.frontRenderable]
            }(Cd, gd, Kd)) Ad(Pd, Qd);
          const od = function(dd) {
            for (const Jd of dJ(dd))
              if ("BO" === Jd.name) return Jd;
            throw new Error("Lite: the scene has no render task named scene")
          }(Pd);
          Nd && gd.installSceneDepth(od, dd);
          const ld = Wd ? new Qg(Jd, Wd.entities) : null;
          gd.sunShadow = ld, ld && null !== Wd && void 0 !== Wd && Wd.entities && (gd.shadowMask = new MZ(Jd, od, dd, gd));
          return Cd.sunShadow = ld, await (0, Ed.h)(Pd), new Mg(dd, Pd, od, Jd, gd, Cd, Kd, Zd, kd, pd, ld)
        }(Pd, gd, dd, Nd, Jd.sceneDepth, Jd.sunShadow);
        if (null !== Cd) {
          const {
            reason: dd,
            message: Jd
          } = Cd;
          throw Object.assign(new Error(`${Fg} (${dd}): ${Jd}`), {
            fallbackReason: Fg
          })
        }
        return kd
      } catch (Kd) {
        throw gd.destroy(), null === Cd ? Kd : Yg(Kd, "device")
      }
    }
  },
  40880: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => Od,
      E: () => Qd,
      H: () => Ld,
      b: () => Nd,
      f: () => pd,
      j: () => ld,
      m: () => Kd,
      q: () => ed,
      s: () => Wd,
      t: () => Zd,
      w: () => gd,
      x: () => Pd
    });
    const pd = 3,
      Nd = 0,
      Wd = 1,
      Pd = 2,
      Zd = {
        uniform: 3,
        ql: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      gd = 10,
      Cd = "BloxdPackInputs",
      Kd = "bloxdPackInputs",
      od = [{
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
      ld = 80;

    function Qd() {
      const dd = od.map((dd => {
        let {
          name: Jd,
          type: kd
        } = dd;
        return `    ${Jd}: ${kd},\n`
      })).join("");
      return `struct ${Cd} {\n${dd}}\n@group(${pd}) @binding(${Nd}) var<uniform> ${Kd}: ${Cd};\n`
    }

    function Ld(dd, Jd) {
      const kd = new DataView(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, ld),
        [pd, Nd, Wd, Pd, Zd, gd] = od;
      kd.setFloat32(pd.offset, Jd.seconds, !0), kd.setUint32(Nd.offset, Jd.lit ? 1 : 0, !0);
      for (let Cd = 0; Cd < 3; Cd++) kd.setInt32(Wd.offset + 4 * Cd, Jd.renderOffset[Cd], !0), kd.setFloat32(Pd.offset + 4 * Cd, Jd.Qdd[Cd], !0), kd.setFloat32(Zd.offset + 4 * Cd, Jd.eyePosition[Cd], !0), kd.setFloat32(gd.offset + 4 * Cd, Jd.shadowDirection[Cd], !0)
    }

    function Od(dd) {
      const Jd = new Uint32Array(Math.max(1, dd.length));
      return dd.forEach(((dd, kd) => {
        let {
          id: pd,
          rotation: Nd
        } = dd;
        Jd[kd] = 65535 & pd | (3 & Nd) << 16
      })), Jd
    }
    const ed = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);