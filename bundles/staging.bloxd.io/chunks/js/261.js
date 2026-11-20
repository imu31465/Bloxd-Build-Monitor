export const id = 261;
export const ids = [261];
export const modules = {
  41178: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Tu,
      e: () => Ju,
      h: () => mu,
      j: () => Xu
    });
    var Eu = yu(36986),
      Ku = yu(38471),
      Qu = yu(38467);

    function mu(uu, Ru, yu, Eu) {
      const Ku = Qu.w;
      Ru.fill(0), uu.gravity.toArray(Ru, Ku.gravity), uu.colorDead.toArray(Ru, Ku.colorDead), yu[Ku.ramp] = uu.useRampGradients ? 1 : 0;
      const mu = uu.getColorGradients(),
        Ju = Bu(uu, mu, "colour", Eu);
      yu[Ku.colorCount] = Ju;
      for (let Qu = 0; Qu < Ju; Qu++) {
        var Nu;
        const uu = mu[xu(mu, Qu)];
        Ru[Ku.colorPositions + Qu] = uu.gradient, uu.color1.toArray(Ru, Ku.color1 + 4 * Qu), (null !== (Nu = uu.color2) && void 0 !== Nu ? Nu : uu.color1).toArray(Ru, Ku.color2 + 4 * Qu)
      }
      const Xu = uu.getVelocityGradients(),
        Vu = Bu(uu, Xu, "JT", Eu);
      yu[Ku.velocityCount] = Vu;
      for (let Qu = 0; Qu < Vu; Qu++) ju(Ru, Ku.JT + 4 * Qu, Xu[xu(Xu, Qu)]);
      const ru = uu.useRampGradients ? uu.getColorRemapGradients() : null,
        Su = Bu(uu, ru, "colour remap", Eu);
      yu[Ku.remapCount] = Su;
      for (let Qu = 0; Qu < Su; Qu++) ju(Ru, Ku.remap + 4 * Qu, ru[xu(ru, Qu)])
    }

    function Ju() {
      return {
        key: [],
        texels: new Uint8Array(4 * Qu.k)
      }
    }
    const Nu = [];

    function Xu(uu, Ru) {
      return Vu(uu, Nu), !Wu(Nu, Ru.key) && (Ru.key.length = 0, Ru.key.push(...Nu), Ru.key.length > 0 && function(uu, Ru) {
        for (let yu = 0; yu < Qu.k; yu++) Ku.i.GetCurrentGradient(yu / Qu.k, uu, ((uu, Ru, yu) => {
          Eu.Color3.LerpToRef(uu.color, Ru.color, yu, ru)
        })), Ru[4 * yu] = 255 * ru.r, Ru[4 * yu + 1] = 255 * ru.g, Ru[4 * yu + 2] = 255 * ru.b, Ru[4 * yu + 3] = 255
      }(uu.getRampGradients(), Ru.texels), !0)
    }

    function Vu(uu, Ru) {
      Ru.length = 0;
      const yu = uu.useRampGradients ? uu.getRampGradients() : null;
      if (null !== yu && void 0 !== yu && yu.length) {
        Ru.push(yu.length);
        for (const uu of yu) Ru.push(uu.gradient, uu.color.r, uu.color.g, uu.color.b)
      }
    }
    const ru = new Eu.Color3;

    function Bu(uu, Ru, yu, Eu) {
      return Ru ? Ru.length > Qu.c ? (Eu(`particleStops:${yu}`, `GPU particles use the first 2 and last ${Qu.c-2} of more than ${Qu.c} ${yu} gradient stops (${uu.name})`), Qu.c) : Ru.length : 0
    }

    function xu(uu, Ru) {
      return Ru < 2 || uu.length <= Qu.c ? Ru : uu.length - Qu.c + Ru
    }
    const Su = new Float32Array(Qu.o),
      pu = new Uint32Array(Su.buffer);

    function Tu(uu, Ru, yu) {
      return mu(uu, Su, pu, yu), Ru && Wu(pu, Ru) ? null : pu.slice()
    }

    function Wu(uu, Ru) {
      if (uu.length !== Ru.length) return !1;
      for (let yu = 0; yu < uu.length; yu++)
        if (uu[yu] !== Ru[yu]) return !1;
      return !0
    }

    function ju(uu, Ru, yu) {
      var Eu;
      uu[Ru] = yu.gradient, uu[Ru + 1] = yu.factor1, uu[Ru + 2] = null !== (Eu = yu.factor2) && void 0 !== Eu ? Eu : yu.factor1
    }
  },
  41174: (uu, Ru, yu) => {
    function Eu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Ru = new Set;
      return (yu, Eu) => {
        Ru.has(yu) || (Ru.add(yu), console.warn(uu + Eu))
      }
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  41214: (uu, Ru, yu) => {
    yu.d(Ru, {
      createLiteRendererAsync: () => IN,
      liteBabylonBackend: () => zu,
      setPipelineFailureHook: () => iK
    });
    var Eu = yu(36986),
      Ku = yu(37332),
      Qu = yu(37663),
      mu = yu(36932),
      Ju = yu(37669);
    class Nu extends Ju.d {
      constructor() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        super(...Ru), this.color = new Eu.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: Ru[0].lD().getUniqueId(),
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
          needAlphaBlendingForMesh: uu => uu.visibility < 1 || uu.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Xu = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Vu = uu => 1 << Xu.indexOf(uu),
      ru = Vu("VERTEXCOLOR"),
      Bu = Vu("INSTANCES"),
      xu = Vu("THIN_INSTANCES"),
      Su = Vu("INSTANCESCOLOR"),
      pu = Vu("FOG"),
      Tu = Vu("LITE_FRONT_LAYER");

    function Wu(uu, Ru, yu, Eu) {
      let Ku = 0;
      return uu.isVerticesDataPresent("color") && (Ku |= ru), "none" !== Ru && (Ku |= Bu), "thin" === Ru && (Ku |= xu, uu.isVerticesDataPresent("instanceColor") && (Ku |= Su)), Eu.fogEnabled && uu.applyFog && 0 !== Eu.fogMode && (Ku |= pu), yu >= 1 && (Ku |= Tu), Ku
    }

    function ju(uu, Ru) {
      uu.updateColor4("color", Ru.color, Ru.alpha)
    }
    var Hu = yu(37612),
      du = yu(37150),
      bu = yu(37019),
      Cu = yu(36906),
      ku = yu(37590),
      eu = yu(37605),
      Au = yu(36923),
      Du = yu(36926),
      Mu = yu(36934);
    const Iu = Cu.c.GLSL;
    class Gu {
      constructor(uu, Ru) {
        this.name = uu, this.cp = Ru, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.zD = {
          addOnce: uu => {
            this.disposers.push(uu)
          }
        }, this.uniqueId = Ru.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      lD() {
        return this.cp
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
      needAlphaBlendingForMesh(uu) {
        return (0, Au.L)(this.model, uu.visibility, uu.hasVertexAlpha)
      }
      needAlphaTestingForMesh(uu) {
        return (0, Au.N)(this.model, uu.visibility, uu.hasVertexAlpha)
      }
      dispose() {
        (0, du.n)(this);
        for (const uu of this.disposers.splice(0)) uu()
      }
      get model() {
        return (0, Au.U)(this)
      }
    }
    const Uu = new WeakSet;

    function nu(uu) {
      return Uu.has(uu)
    }

    function su(uu) {
      Uu.add(uu)
    }
    const tu = {
      create: (uu, Ru) => ((0, bu.p)(uu, new Gu(uu.name, Ru)), Du.d.defines()),
      write: () => {},
      addFeature: (uu, Ru) => {
        const yu = uu.mirror;
        Ru.feature === eu.j && Ru.state.dirLightCount > 0 && (uu.disableLighting = !0, (0, Au.S)(uu)), "BLOXD_LIGHTING" in Ru.defines && (0, du.l)(yu), Ru.feature === ku.j && ((0, Hu.g)(Ru.state, Iu), function(uu, Ru) {
          const yu = uu.lD().eS();
          Ru.textures.forEach(((Eu, Ku) => {
            setTimeout((() => {
              var Qu, mu;
              const {
                url: Ju
              } = Eu.source;
              yu.atlasArray(Ju, null !== (Qu = null === (mu = Ru.sources.pixels) || void 0 === mu ? void 0 : mu[Ku]) && void 0 !== Qu ? Qu : null, Ru.sources.layerWidth).then((yu => {
                (0, Hu.d)(uu, Ru, Ku, yu, yu.layerWidth, yu.layers, Iu)
              })).catch((uu => {
                console.error(`Failed to build texture array for atlas ${Ku}`, uu)
              }))
            }))
          }))
        }(yu, Ru.state))
      },
      texture: (uu, Ru, yu) => {
        let {
          data: Eu,
          sets: Ku
        } = yu;
        var Qu;
        (su(uu), Eu) && (uu.uvSet = null !== (Qu = null === Ku || void 0 === Ku ? void 0 : Ku.coordinatesIndex) && void 0 !== Qu ? Qu : 0, (0, bu.Z)(uu.matrix, null !== Ku && void 0 !== Ku ? Ku : {}))
      },
      cube: su,
      canvas: (uu, Ru, yu) => {
        let {
          width: Eu,
          height: Ku,
          mipmaps: Qu,
          samplingMode: mu = Mu.h.trilinear,
          hasAlpha: Ju = !1,
          wrap: Nu = Mu.c.clamp
        } = yu;
        const Xu = uu.eS().createCanvas(Eu, Ku),
          Vu = new Mu.l("2d", {
            kind: "canvas",
            width: Eu,
            height: Ku,
            canvas: Xu
          }, {
            samplingMode: mu,
            wrapU: Nu,
            wrapV: Nu,
            noMipmap: !Qu,
            invertY: !0
          });
        return Vu.hasAlpha = Ju, su(Vu), Vu
      }
    };
    var lu = yu(37170),
      gu = yu(36858);
    class cu {
      constructor(uu, Ru, yu) {
        this.engine = uu, this.clearColor = Ru, this.ambientColor = yu, this.onBeforeRenderObservable = new gu.b, this.onBeforeCameraRenderObservable = new gu.b, this.onAfterRenderObservable = new gu.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.JC = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      eS() {
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
      addPendingData(uu) {
        this.pending.push(uu)
      }
      removePendingData(uu) {
        const Ru = this.pending.indexOf(uu); - 1 !== Ru && this.pending.splice(Ru, 1)
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

    function Lu() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const zu = {
      VKu: Lu,
      NKu: (uu, Ru) => {
        const yu = new cu(uu.engine, Eu.c.FromArray(Ru.clearColor), Eu.Color3.FromArray(Ru.ambientColor));
        (0, mu.c)(tu, yu), uu.cp = yu,
          function(uu, Ru) {
            const yu = Object.assign((0, lu.m)(uu, "camera"), {
              layerMask: 268435455
            });
            uu.model.nodes.setWorldSource(yu.row, uu.model.view.worldMatrix), uu.camera = Ru.activeCamera = yu
          }(uu, yu), (0, Ku.h)(uu, ((uu, Ru, yu) => (0, Qu.g)(uu, Ru, yu, Ju.d)))
      },
      KKu: () => {},
      setBabylonFog: () => {},
      rKu: Lu,
      SKu: () => {},
      linesFromArrays: (uu, Ru, yu) => (0, Qu.g)(uu, Ru, yu, Nu),
      Lp: () => {},
      xKu: Lu
    };
    var Fu = yu(41293),
      wu = yu(41300);
    class Zu {
      constructor(uu) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const Ru = new Promise((uu => {
          this.refused = uu
        }));
        this.deviceLost = Promise.race([uu, Ru])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(uu) {
        (function(uu) {
          const {
            name: Ru,
            message: yu
          } = null !== uu && void 0 !== uu ? uu : {};
          return "InvalidStateError" === Ru && "string" === typeof yu && yu.startsWith("GPUDevice.")
        })(uu) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: uu.message,
          framesRefused: !0
        }))
      }
    }
    class hu {
      constructor(uu) {
        this.resources = uu, this.matrixKey = {
          Nr: 0
        }, this.attributesKey = {
          Nr: 0
        }, this.inputs = Object.create(null);
        for (let Ru = 0; Ru < 4; Ru++) this.inputs[`world${Ru}`] = new Yu(this.matrixKey, 16 * Ru, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(uu, Ru) {
        this.resources.vertexBufferCreated(this.matrixKey, uu, !0), Ru && this.resources.vertexBufferCreated(this.attributesKey, Ru, !0)
      }
    }
    class Pu extends hu {
      constructor(uu, Ru, yu) {
        super(uu), this.mesh = Ru, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Eu = this.inputs;
        let Ku = 0;
        for (const {
            size: mu
          }
          of yu) Ku += mu;
        for (const {
            name: mu,
            offset: Ju,
            size: Nu,
            type: Xu
          }
          of yu) Eu[mu] = new Yu(this.attributesKey, 4 * Ju, 4 * Ku, Nu, !0, Xu);
        this.rowStride = Ku, uu.R_.set(Ru, this);
        const Qu = Ru.isVerticesDataPresent;
        Ru.isVerticesDataPresent = (uu, yu) => uu in Eu || Qu.call(Ru, uu, yu)
      }
      attach(uu, Ru) {
        this.matrices = uu, this.attributes = Ru, this.bind(uu, Ru), this.mirror(uu, uu.length, uu.length / 16)
      }
      f_(uu) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, uu ? 64 * uu : void 0)
      }
      K4() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(uu, Ru) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * uu, 16 * Ru)
      }
      attributeRows(uu, Ru) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, uu * this.rowStride, Ru * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(uu, Ru, yu) {
        const Eu = this.mesh._thinInstanceDataStorage;
        Eu.matrixData = uu, Eu.matrixBufferSize = Ru, Eu.worldMatrices = null, Eu.instancesCount = yu
      }
    }
    class iu extends hu {
      constructor(uu, Ru, yu) {
        var Eu, Ku, Qu, mu;
        super(uu), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Eu = null === yu || void 0 === yu ? void 0 : yu.interleavedKinds) && void 0 !== Eu ? Eu : null, this.offsets = null !== (Ku = null === yu || void 0 === yu ? void 0 : yu.interleavedOffsets) && void 0 !== Ku ? Ku : [], this.rowStride = null !== (Qu = null === yu || void 0 === yu ? void 0 : yu.interleavedRowStride) && void 0 !== Qu ? Qu : 0, null === (mu = this.layout) || void 0 === mu || mu.forEach(((uu, Ru) => {
          this.inputs[uu] = new Yu(this.attributesKey, 4 * this.offsets[Ru], 4 * this.rowStride, yu.strides[uu])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), uu.batchUploads.set(Ru, this), Ru.zD.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(uu) {
        const Ru = this.packedBatch;
        return Ru.renderSelf ? 0 === uu ? this.packedSource : Ru.instances[uu - 1] : Ru.instances[uu]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(uu, Ru, yu, Eu) {
        const Ku = (Ru.renderSelf ? 1 : 0) + Ru.rows.length;
        if (this.frame = Eu, this.count = Ku, this.packedSource = uu, this.packedBatch = Ru, 0 === Ku) return;
        if (uu.getWorldMatrix(), 16 * Ku > this.matrices.length) {
          let uu = this.matrices.length / 16;
          for (; uu < Ku;) uu *= 2;
          this.matrices = new Float32Array(16 * uu), this.attributes &&= new Float32Array(uu * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Qu = 0;
        Ru.renderSelf && this.packRow(Qu++, uu, Ru.row, yu);
        for (let mu = 0; mu < Ru.rows.length; mu++) this.packRow(Qu++, Ru.instances[mu], Ru.rows[mu], yu);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Ku), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Ku * this.rowStride)
      }
      packRow(uu, Ru, yu, Eu) {
        const Ku = this.matrices;
        if (yu < 0) Ku.set(Ru.getWorldMatrix().m, 16 * uu);
        else
          for (let Xu = 0; Xu < 16; Xu++) Ku[16 * uu + Xu] = Eu[16 * yu + Xu];
        const Qu = this.attributes;
        if (!Qu) return;
        const mu = Ru.bI,
          Ju = this.layout;
        for (let Xu = 0; Xu < Ju.length; Xu++) {
          var Nu;
          const Ru = null !== (Nu = mu[Ju[Xu]]) && void 0 !== Nu ? Nu : 0,
            yu = uu * this.rowStride + this.offsets[Xu];
          Ru.toArray ? Ru.toArray(Qu, yu) : Ru.copyToArray ? Ru.copyToArray(Qu, yu) : Qu[yu] = Ru
        }
      }
    }
    class Yu {
      constructor(uu, Ru, yu, Eu) {
        let Ku = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = uu, this.byteOffset = Ru, this.byteStride = yu, this.size = Eu, this.instanced = Ku, this.type = Qu, this.normalized = mu
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
    const ou = "CANVAS_ALPHA_ONE",
      qu = `override ${ou}: bool = false;`,
      Ou = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function vu(uu, Ru, yu) {
      var Eu;
      let Ku = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Qu = null !== (Eu = Ru._colorFormat) && void 0 !== Eu ? Eu : "bgra8unorm",
        mu = Ku ? 15 : 0;
      return yu ? {
        ...uu,
        targets: [{
          format: Qu,
          blend: {
            color: yu,
            alpha: Ou
          },
          writeMask: mu
        }]
      } : {
        ...uu,
        constants: {
          ...uu.constants,
          [ou]: 1
        },
        targets: [{
          format: Qu,
          writeMask: mu
        }]
      }
    }

    function au(uu, Ru) {
      uu._renderables.push(Ru)
    }

    function fu(uu) {
      var Ru, yu;
      return null !== (Ru = null === (yu = uu._frameGraph) || void 0 === yu ? void 0 : yu._tasks) && void 0 !== Ru ? Ru : []
    }

    function uR(uu) {
      return uu._currentEncoder
    }

    function RR(uu) {
      return uu.createBindGroupLayout({
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
    const yR = "greater-equal",
      ER = 2e5,
      KR = 1e5,
      QR = new WeakMap;

    function mR(uu, Ru) {
      let yu = QR.get(uu);
      if (!yu) {
        yu = {
          module: uu.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, QR.set(uu, yu)
      }
      const Eu = `${Ru._colorFormat}|${Ru._depthStencilFormat}|${Ru._sampleCount}`;
      let Ku = yu.pipelines.get(Eu);
      if (!Ku) {
        var Qu;
        const {
          module: mu
        } = yu;
        Ku = uu.createRenderPipeline({
          label: `placeholder ${Eu}`,
          layout: uu.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: mu,
            entryPoint: "v"
          },
          fragment: {
            module: mu,
            entryPoint: "f",
            targets: [{
              format: null !== (Qu = Ru._colorFormat) && void 0 !== Qu ? Qu : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: Ru._depthStencilFormat ? {
            format: Ru._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Ru._sampleCount
          }
        }), yu.pipelines.set(Eu, Ku)
      }
      return Ku
    }

    function JR(uu, Ru, yu) {
      const Eu = Ru.eye,
        Ku = Ru.viewMatrix;
      uu[0] = Eu[0] + Ku[2] * yu, uu[1] = Eu[1] + Ku[6] * yu, uu[2] = Eu[2] + Ku[10] * yu
    }
    var NR = yu(37697),
      XR = yu(41174),
      VR = yu(36915);
    const rR = Math.PI,
      BR = rR / 1.95,
      xR = [5e-4 / 94, 125e-7, 5e-4 / 18],
      SR = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((uu => {
        let [Ru, yu] = uu;
        return .434 * rR * Math.pow(2 * rR / Ru, 2) * yu
      }));

    function pR(uu, Ru, yu) {
      const {
        up: Eu,
        mieDirectionalG: Ku
      } = uu, Qu = 1 - jR(1 - Math.exp(Ru[1] / 45e4), 0, 1), mu = uu.rayleigh - (1 - Qu), Ju = Math.hypot(Ru[0], Ru[1], Ru[2]), Nu = Ju > 0 ? 1 / Ju : 0, Xu = yu.sunDir;
      for (let xu = 0; xu < 3; xu++) Xu[xu] = Ru[xu] * Nu;
      const Vu = Xu[0] * Eu[0] + Xu[1] * Eu[1] + Xu[2] * Eu[2],
        ru = 1e3 * Math.max(0, 1 - Math.exp(-(BR - Math.acos(jR(Vu, -1, 1))) / 1.5));
      yu.sunE = ru;
      const Bu = .2 * uu.turbidity * 1e-17 * uu.mieCoefficient;
      for (let xu = 0; xu < 3; xu++) {
        const uu = xR[xu] * mu,
          Ru = SR[xu] * Bu,
          Eu = ru / (uu + Ru);
        yu.inScatterR[xu] = uu * Eu, yu.inScatterM[xu] = Ru * Eu, yu.extinctionBeta[xu] = 8400 * uu + 1250 * Ru
      }
      return yu.sunsetMix = jR(Math.pow(1 - Vu, 5), 0, 1), yu.sunDiscE = 19e3 * ru, yu.mieScale = (1 - Ku * Ku) / (4 * rR), yu.mieBase = 1 + Ku * Ku, yu.mieSlope = 2 * Ku, yu
    }
    const TR = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const WR = 1 / function(uu) {
      const {
        A: Ru,
        B: yu,
        C: Eu,
        D: Ku,
        E: Qu,
        F: mu
      } = TR;
      return (uu * (Ru * uu + Eu * yu) + Ku * Qu) / (uu * (Ru * uu + yu) + Ku * mu) - Qu / mu
    }(1e3);

    function jR(uu, Ru, yu) {
      return Math.min(Math.max(uu, Ru), yu)
    }
    const HR = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function dR(uu, Ru) {
      const yu = new Map(Ru),
        Eu = [],
        Ku = [],
        Qu = () => 0 === Ku.length || Ku[Ku.length - 1].active;
      let mu = null;
      const Ju = () => {
        const uu = [...yu].filter((uu => {
            let [, Ru] = uu;
            return !0 !== Ru
          })),
          Ru = uu.map((uu => {
            let [Ru] = uu;
            return Ru
          })).join("|");
        mu = uu.length ? new RegExp(`\\b(${Ru})\\b`, "g") : null
      };
      Ju();
      for (const Nu of uu.split("\n")) {
        const uu = HR.exec(Nu);
        if (!uu) {
          Qu() && Eu.push(mu ? bR(Nu, mu, yu) : Nu);
          continue
        }
        const Ru = uu[1],
          Xu = uu[2].trim();
        if ("ifdef" === Ru || "ifndef" === Ru || "if" === Ru) {
          const uu = Qu(),
            Eu = "if" === Ru ? CR(Xu, yu) : yu.has(Xu) === ("ifdef" === Ru);
          Ku.push({
            active: uu && Eu,
            parentActive: uu,
            taken: Eu
          })
        } else if ("elif" === Ru || "else" === Ru) {
          const uu = Ku[Ku.length - 1];
          if (!uu) throw new Error(`#${Ru} without #if`);
          const Eu = !uu.taken && ("else" === Ru || CR(Xu, yu));
          uu.active = uu.parentActive && Eu, uu.taken = uu.taken || Eu
        } else if ("endif" === Ru) {
          if (!Ku.pop()) throw new Error("#endif without #if")
        } else if (Qu()) {
          const [uu, ...Eu] = Xu.split(/\s+/);
          "undef" === Ru ? yu.delete(uu) : yu.set(uu, !Eu.length || Eu.join(" ")), Ju()
        }
      }
      if (Ku.length) throw new Error("Unterminated #if");
      return Eu.join("\n")
    }

    function bR(uu, Ru, yu) {
      return uu.replace(Ru, (uu => {
        const Ru = yu.get(uu);
        return "string" === typeof Ru ? Ru : uu
      }))
    }

    function CR(uu, Ru) {
      var yu;
      const Eu = null !== (yu = uu.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== yu ? yu : [];
      let Ku = 0;
      const Qu = () => Eu[Ku],
        mu = () => Eu[Ku++],
        Ju = uu => {
          const yu = /^\d/.test(uu) ? uu : Ru.get(uu);
          return "string" === typeof yu ? parseInt(yu) : Number.NaN
        },
        Nu = () => {
          const uu = mu();
          if ("!" === uu) return !Nu();
          if ("(" === uu) {
            const uu = Vu();
            return mu(), uu
          }
          if ("defined" === uu) {
            const uu = "(" === Qu();
            uu && mu();
            const yu = mu();
            return uu && mu(), Ru.has(yu)
          }
          const yu = Qu();
          if ("==" === yu || "!=" === yu || ">" === yu || "<" === yu || ">=" === yu || "<=" === yu) {
            mu();
            const Ru = Ju(uu),
              Eu = Ju(mu());
            if (Number.isNaN(Ru) || Number.isNaN(Eu)) return !1;
            switch (yu) {
              case "==":
                return Ru === Eu;
              case "!=":
                return Ru !== Eu;
              case ">":
                return Ru > Eu;
              case "<":
                return Ru < Eu;
              case ">=":
                return Ru >= Eu;
              default:
                return Ru <= Eu
            }
          }
          return Ru.has(uu)
        },
        Xu = () => {
          let uu = Nu();
          for (;
            "&&" === Qu();) {
            mu();
            const Ru = Nu();
            uu = uu && Ru
          }
          return uu
        },
        Vu = () => {
          let uu = Xu();
          for (;
            "||" === Qu();) {
            mu();
            const Ru = Xu();
            uu = uu || Ru
          }
          return uu
        },
        ru = Vu();
      if (Ku !== Eu.length) throw new Error(`Cannot evaluate #if ${uu}`);
      return ru
    }
    var kR = yu(36909),
      eR = yu(37248),
      AR = yu(37251),
      DR = yu(40444),
      MR = yu(38512);
    const IR = 32,
      GR = [10, 3, 10],
      UR = [21, 7, 21],
      nR = UR[0] * UR[1] * UR[2],
      sR = 0,
      tR = 1,
      lR = 2,
      gR = 3,
      cR = 64,
      LR = 512,
      zR = 4 * nR,
      FR = 1536,
      wR = zR + nR * FR,
      ZR = 1073741824,
      hR = wR + 1;

    function PR(uu, Ru) {
      const yu = uu % Ru;
      return yu < 0 ? yu + Ru : yu
    }

    function iR(uu, Ru, yu) {
      return Eu = PR(uu, UR[0]), Ku = PR(Ru, UR[1]), Qu = PR(yu, UR[2]), Eu + UR[0] * (Ku + UR[1] * Qu);
      var Eu, Ku, Qu
    }

    function YR(uu, Ru, yu) {
      return uu + 8 * (Ru + 8 * yu)
    }

    function oR(uu, Ru, yu) {
      return uu + 4 * (Ru + 4 * yu)
    }
    const qR = 65535,
      OR = 0,
      vR = 1,
      aR = 2,
      fR = 3;

    function uy(uu) {
      return Math.ceil(uu * uu / 32)
    }
    const Ry = 8192,
      yy = 1 << 18,
      Ey = 65536,
      Ky = 294912,
      Qy = 128,
      my = 4096,
      Jy = 16,
      Ny = 16385,
      Xy = 81921,
      Vy = 147457,
      ry = 4194304;
    const By = [0, 0, 0],
      xy = [0, 0, 0];

    function Sy(uu, Ru, yu, Eu) {
      ! function(uu, Ru, yu) {
        const [Eu, Ku, Qu] = [uu[0], uu[1], uu[2]];
        let mu, Ju, Nu;
        Math.abs(Ku) < .99 ? (mu = Qu, Ju = 0, Nu = -Eu) : (mu = -Ku, Ju = Eu, Nu = 0);
        const Xu = Math.hypot(mu, Ju, Nu);
        Ru[0] = mu / Xu, Ru[1] = Ju / Xu, Ru[2] = Nu / Xu, yu[0] = Ku * Ru[2] - Qu * Ru[1], yu[1] = Qu * Ru[0] - Eu * Ru[2], yu[2] = Eu * Ru[1] - Ku * Ru[0]
      }(Eu, By, xy);
      const Ku = 1 / 32;
      for (const [Qu, mu] of [
          [0, By],
          [4, xy]
        ]) {
        for (let yu = 0; yu < 3; yu++) uu[Ru + Qu + yu] = mu[yu] * Ku;
        uu[Ru + Qu + 3] = -(mu[0] * yu[0] + mu[1] * yu[1] + mu[2] * yu[2]) * Ku
      }
    }
    class py {
      constructor() {
        this.words = new Uint32Array(Vy), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Kx(uu, Ru) {
        this.parts = 0, this.refs = 0, this.view = uu, this.viewAt = Ru;
        const yu = uu[Ru + 1] * uu[Ru + 6] - uu[Ru + 2] * uu[Ru + 5],
          Eu = uu[Ru + 2] * uu[Ru + 4] - uu[Ru] * uu[Ru + 6],
          Ku = uu[Ru] * uu[Ru + 5] - uu[Ru + 1] * uu[Ru + 4],
          Qu = Math.hypot(yu, Eu, Ku) || 1;
        this.light[0] = yu / Qu, this.light[1] = Eu / Qu, this.light[2] = Ku / Qu
      }
      add(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= my || ! function(uu, Ru, yu) {
            const Eu = uu[Ru],
              Ku = uu[Ru + 1],
              Qu = uu[Ru + 2],
              mu = uu[Ru + 3],
              Ju = uu[Ru + 4],
              Nu = uu[Ru + 5],
              Xu = uu[Ru + 6],
              Vu = uu[Ru + 7],
              ru = uu[Ru + 8],
              Bu = uu[Ru + 9],
              xu = uu[Ru + 10],
              Su = uu[Ru + 11],
              pu = uu[Ru + 12],
              Tu = uu[Ru + 13],
              Wu = uu[Ru + 14],
              ju = uu[Ru + 15],
              Hu = Eu * Nu - Ku * Ju,
              du = Eu * Xu - Qu * Ju,
              bu = Eu * Vu - mu * Ju,
              Cu = Ku * Xu - Qu * Nu,
              ku = Ku * Vu - mu * Nu,
              eu = Qu * Vu - mu * Xu,
              Au = ru * Tu - Bu * pu,
              Du = ru * Wu - xu * pu,
              Mu = ru * ju - Su * pu,
              Iu = Bu * Wu - xu * Tu,
              Gu = Bu * ju - Su * Tu,
              Uu = xu * ju - Su * Wu,
              nu = Hu * Uu - du * Gu + bu * Iu + Cu * Mu - ku * Du + eu * Au;
            if (!(Math.abs(nu) > 1e-12)) return !1;
            const su = 1 / nu;
            return yu[0] = (Nu * Uu - Xu * Gu + Vu * Iu) * su, yu[1] = (Qu * Gu - Ku * Uu - mu * Iu) * su, yu[2] = (Tu * eu - Wu * ku + ju * Cu) * su, yu[3] = (xu * ku - Bu * eu - Su * Cu) * su, yu[4] = (Xu * Mu - Ju * Uu - Vu * Du) * su, yu[5] = (Eu * Uu - Qu * Mu + mu * Du) * su, yu[6] = (Wu * bu - pu * eu - ju * du) * su, yu[7] = (ru * eu - xu * bu + Su * du) * su, yu[8] = (Ju * Gu - Nu * Mu + Vu * Au) * su, yu[9] = (Ku * Mu - Eu * Gu - mu * Au) * su, yu[10] = (pu * ku - Tu * bu + ju * Hu) * su, yu[11] = (Bu * bu - ru * ku - Su * Hu) * su, yu[12] = (Nu * Du - Ju * Iu - Xu * Au) * su, yu[13] = (Eu * Iu - Ku * Du + Qu * Au) * su, yu[14] = (Tu * du - pu * Cu - Wu * Hu) * su, yu[15] = (ru * Cu - Bu * du + xu * Hu) * su, !0
          }(Ru, yu, this.inverse)) return;
        const {
          view: Eu,
          viewAt: Ku
        } = this, Qu = yu;
        let mu = 1 / 0,
          Ju = 1 / 0,
          Nu = -1 / 0,
          Xu = -1 / 0,
          Vu = -1 / 0;
        const [ru, Bu, xu] = this.light;
        for (let bu = 0; bu < 8; bu++) {
          const yu = 1 & bu ? uu.hi[0] : uu.lo[0],
            Su = 2 & bu ? uu.hi[1] : uu.lo[1],
            pu = 4 & bu ? uu.hi[2] : uu.lo[2],
            Tu = yu * Ru[Qu] + Su * Ru[Qu + 4] + pu * Ru[Qu + 8] + Ru[Qu + 12],
            Wu = yu * Ru[Qu + 1] + Su * Ru[Qu + 5] + pu * Ru[Qu + 9] + Ru[Qu + 13],
            ju = yu * Ru[Qu + 2] + Su * Ru[Qu + 6] + pu * Ru[Qu + 10] + Ru[Qu + 14],
            Hu = Eu[Ku] * Tu + Eu[Ku + 1] * Wu + Eu[Ku + 2] * ju + Eu[Ku + 3],
            du = Eu[Ku + 4] * Tu + Eu[Ku + 5] * Wu + Eu[Ku + 6] * ju + Eu[Ku + 7];
          mu = Math.min(mu, Hu), Ju = Math.min(Ju, du), Nu = Math.max(Nu, Hu), Xu = Math.max(Xu, du), Vu = Math.max(Vu, ru * Tu + Bu * Wu + xu * ju)
        }
        if (Nu < -1 || Xu < -1 || mu >= 1 || Ju >= 1) return;
        const Su = this.parts++,
          pu = this.rects;
        pu[4 * Su] = Ty(mu), pu[4 * Su + 1] = Ty(Ju), pu[4 * Su + 2] = Ty(Nu), pu[4 * Su + 3] = Ty(Xu);
        const Tu = this.inverse,
          {
            cell: Wu,
            dims: ju,
            lo: Hu
          } = uu,
          du = Xy + Su * Jy;
        for (let bu = 0; bu < 3; bu++) this.floats[du + 4 * bu] = Tu[bu] / Wu, this.floats[du + 4 * bu + 1] = Tu[4 + bu] / Wu, this.floats[du + 4 * bu + 2] = Tu[8 + bu] / Wu, this.floats[du + 4 * bu + 3] = (Tu[12 + bu] - Hu[bu]) / Wu;
        this.words[du + 12] = uu.at, this.floats[du + 13] = Vu + .001 * (1 + Math.abs(Vu)), this.words[du + 14] = ju[0] | ju[1] << 8 | ju[2] << 16
      }
      finish() {
        const uu = Qy,
          {
            counts: Ru,
            rects: yu,
            words: Eu
          } = this;
        Ru.fill(0);
        let Ku = 0,
          Qu = 0;
        for (; Qu < this.parts; Qu++) {
          const Eu = 4 * Qu,
            mu = (yu[Eu + 2] - yu[Eu] + 1) * (yu[Eu + 3] - yu[Eu + 1] + 1);
          if (Ku + mu > 65536) break;
          Ku += mu;
          for (let Ku = yu[Eu + 1]; Ku <= yu[Eu + 3]; Ku++)
            for (let Qu = yu[Eu]; Qu <= yu[Eu + 2]; Qu++) Ru[Ku * uu + Qu]++
        }
        let mu = 0;
        for (let Nu = 0; Nu < 16384; Nu++) Eu[Nu] = mu, mu += Ru[Nu], Ru[Nu] = Eu[Nu];
        Eu[16384] = mu;
        for (let Nu = 0; Nu < Qu; Nu++) {
          const Ku = 4 * Nu;
          for (let Qu = yu[Ku + 1]; Qu <= yu[Ku + 3]; Qu++)
            for (let mu = yu[Ku]; mu <= yu[Ku + 2]; mu++) Eu[Ny + Ru[Qu * uu + mu]++] = Nu
        }
        const Ju = this.floats;
        for (let Nu = 0; Nu < 16384; Nu++) {
          const uu = Ny + Eu[Nu],
            Ru = uu + Math.min(Eu[Nu + 1] - Eu[Nu], 64);
          for (let yu = uu + 1; yu < Ru; yu++) {
            const Ru = Eu[yu],
              Ku = Ju[81934 + Ru * Jy];
            let Qu = yu - 1;
            for (; Qu >= uu && Ju[81934 + Eu[Qu] * Jy] < Ku; Qu--) Eu[Qu + 1] = Eu[Qu];
            Eu[Qu + 1] = Ru
          }
        }
        this.refs = Ku
      }
    }

    function Ty(uu) {
      return Math.min(127, Math.max(0, Math.floor((.5 * uu + .5) * Qy)))
    }

    function Wy(uu, Ru, yu, Eu, Ku) {
      for (let Qu = 0; Qu < 4; Qu++)
        for (let mu = 0; mu < 4; mu++) Ku[4 * Qu + mu] = uu[Ru + 4 * Qu] * yu[Eu + mu] + uu[Ru + 4 * Qu + 1] * yu[Eu + 4 + mu] + uu[Ru + 4 * Qu + 2] * yu[Eu + 8 + mu] + uu[Ru + 4 * Qu + 3] * yu[Eu + 12 + mu]
    }

    function jy(uu, Ru, yu, Eu, Ku) {
      const Qu = uu[0] - Ru,
        mu = uu[1] - yu,
        Ju = uu[2] - Eu,
        Nu = uu[3] - Ru,
        Xu = uu[4] - yu,
        Vu = uu[5] - Eu,
        ru = uu[6] - Ru,
        Bu = uu[7] - yu,
        xu = uu[8] - Eu;
      if (Math.min(Qu, Nu, ru) > Ku || Math.max(Qu, Nu, ru) < -Ku) return !1;
      if (Math.min(mu, Xu, Bu) > Ku || Math.max(mu, Xu, Bu) < -Ku) return !1;
      if (Math.min(Ju, Vu, xu) > Ku || Math.max(Ju, Vu, xu) < -Ku) return !1;
      const Su = Nu - Qu,
        pu = Xu - mu,
        Tu = Vu - Ju,
        Wu = ru - Nu,
        ju = Bu - Xu,
        Hu = xu - Vu,
        du = pu * Hu - Tu * ju,
        bu = Tu * Wu - Su * Hu,
        Cu = Su * ju - pu * Wu;
      if (Math.abs(du * Qu + bu * mu + Cu * Ju) > Ku * (Math.abs(du) + Math.abs(bu) + Math.abs(Cu))) return !1;
      const ku = [Su, pu, Tu, Wu, ju, Hu, Qu - ru, mu - Bu, Ju - xu];
      for (let eu = 0; eu < 3; eu++) {
        const uu = ku[3 * eu],
          Ru = ku[3 * eu + 1],
          yu = ku[3 * eu + 2];
        for (let Eu = 0; Eu < 3; Eu++) {
          const Su = 0 === Eu ? 0 : 1 === Eu ? yu : -Ru,
            pu = 0 === Eu ? -yu : 1 === Eu ? 0 : uu,
            Tu = 0 === Eu ? Ru : 1 === Eu ? -uu : 0,
            Wu = Su * Qu + pu * mu + Tu * Ju,
            ju = Su * Nu + pu * Xu + Tu * Vu,
            Hu = Su * ru + pu * Bu + Tu * xu,
            du = Ku * (Math.abs(Su) + Math.abs(pu) + Math.abs(Tu));
          if (Math.min(Wu, ju, Hu) > du || Math.max(Wu, ju, Hu) < -du) return !1
        }
      }
      return !0
    }
    const Hy = new Float32Array(1);
    new Uint32Array(Hy.buffer);
    var dy = yu(38518);

    function by(uu) {
      const [Ru, yu, Eu] = dy.k;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${uu.group}) @binding(${uu.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${Ru-1}, ${yu-1}, ${Eu-1});\n}\n`
    }

    function Cy(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Ku, Qu, mu] = UR, [Ju, Nu, Xu] = GR, Vu = Math.log2(IR), ru = Eu ? "var<private> bloxdSpCrossed: bool;\n" : "", Bu = Eu ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${uu.group}) @binding(${uu.WB}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${uu.group}) @binding(${uu.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${yu?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${ru}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${vR}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${aR}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${yu?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${fR}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Ku}, ${Qu}, ${mu});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Ku} * (s.y + ${Qu} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${Ju}, ${Nu}, ${Xu}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Vu}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${gR}u) {\n\t\treturn named && state == ${lR}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${zR}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${wR}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${Ru?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${Ru?`\t\tif (exits && step > 0 && step % ${Ay} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Vu}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${sR}u || kind == ${tR}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${lR}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${zR}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Bu}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const ky = {
      group: 0,
      uniform: 0,
      WB: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function ey() {
      const uu = ky;
      return `${by(uu)}${Cy(uu,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${dy.b}>,\n}\n@group(${uu.group}) @binding(${uu.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${uu.group}) @binding(${uu.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${dy.h})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${dy.b}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${dy.c}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Ay = 2;
    const Dy = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function My(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Eu = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${Ru.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Ku = "trace" === yu || "lit" === yu,
        Qu = "maskEdge" === yu ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        mu = Ku ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${Ru.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${Ru.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===yu?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Qu};\n`;
      return `${Eu}${uu.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Ku?function(){const[uu,Ru,yu]=dy.k;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${uu}.0, ${Ru}.0, ${yu}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${mu}}\n`:""}${uu.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${Ru.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${Ru.renderOffset});\n}\n`:""}`
    }
    const Iy = "bloxdSpOwnTexture";

    function Gy(uu) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${uu.texture}) - 1u)))`
    }
    const Uy = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${NR.f.map((uu=>{let[Ru,yu]=uu;return`\tbloxdSpOut.${Ru} = (bloxdSpWord & ${yu}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function ny(uu) {
      return `bloxdSpFlags(${uu})`
    }
    const sy = `${DR.m}.eyePosition`;

    function ty(uu, Ru, yu, Eu, Ku) {
      const Qu = uu.indexOf(Ru);
      if (Qu < 0 || uu.indexOf(Ru, Qu + 1) >= 0) throw new Error(`Lite's ${Ku} program changed at the shader pack ${Eu} hook: ${Qu<0?"no":"more than one"} anchor (lite/${Ku}ShaderPack.ts)`);
      return uu.slice(0, Qu) + yu + uu.slice(Qu + Ru.length)
    }

    function ly(uu) {
      return uu.sunShadow || uu.airShadow
    }

    function gy(uu, Ru) {
      return Ru && ly(uu)
    }
    const cy = {
      group: DR.g,
      ...DR.u
    };

    function Ly(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!ly(uu)) return "";
      if (Ru) {
        const Ru = cy,
          Ku = "trace" === yu || "lit" === yu;
        let Qu = "";
        uu.sunShadow && (Qu = Ku ? `${Cy(Ru,!0,"lit"===yu)}${Eu=Ru,`@group(${Eu.group}) @binding(${Eu.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Eu.group}) @binding(${Eu.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(uu, Ru, yu) {
          const Eu = `@group(${uu}) @binding(${Ru}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return yu ? `${Eu}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Dy}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((uu=>`\t{\n\t\tlet o = vec2i(${uu});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Eu
        }(Ru.group, DR.w, "maskEdge" === yu));
        const mu = {
          shadowDirection: `${DR.m}.shadowDirection`,
          renderOffset: `${DR.m}.renderOffset`,
          eyePosition: `${DR.m}.eyePosition`
        };
        return `${by(Ru)}${Qu}${function(uu){const[Ru,yu,Eu]=dy.k;return`@group(${uu.group}) @binding(${uu.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${uu.group}) @binding(${uu.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${Ru}.0, ${yu}.0, ${Eu}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(Ru)}${My(uu,mu,yu)}`
      }
      var Eu;
      return `${uu.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${uu.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function zy(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!Ru) return "";
      const Qu = (mu = "fragmentInputs.vPositionW", Ju = uu.sunShadow ? {
        normal: yu,
        flags: Eu
      } : null, `\n\tbloxdSpShadowPosition = ${mu};\n${Ju?`\tbloxdSpShadowNormal = normalize(${Ju.normal});\n\tbloxdSpShadowEmissive = (${Ju.flags} & ${NR.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${Ju.flags} & ${NR.i}u) != 0u;\n`:""}`);
      var mu, Ju;
      return uu.sunShadow && ("mask" === Ku || "maskEdge" === Ku) ? `${Qu}${Nu="fragmentInputs.position",Xu="maskEdge"===Ku,`\n\tbloxdSpShadowPixel = vec2i(${Nu}.xy);\n${Xu?`\tbloxdSpShadowZ = ${Nu}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Nu}.z), dpdy(${Nu}.z));\n`:""}`}` : Qu;
      var Nu, Xu
    }
    const Fy = "bloxdSpTextureRotation",
      wy = "bloxdSpTextureLayers",
      Zy = `@group(${DR.g}) @binding(${DR.y}) var<storage, read> ${wy}: array<u32>;\n`;

    function hy(uu) {
      return `\tvertexOutputs.vPackTexture = ${wy}[min(u32(${uu}), arrayLength(&${wy}) - 1u)];\n`
    }

    function Py(uu) {
      return void 0 !== uu.uv
    }

    function iy(uu) {
      if (!uu) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Py(uu)) return function(uu) {
        const {
          texture: Ru,
          cells: yu,
          layers: Eu
        } = uu, Ku = `textureDimensions(${Ru}, bloxdSpLevel)`, Qu = yu ? `max(vec2u(vec2f(${Ku}) / ${yu}), vec2u(1u))` : Ku, mu = yu ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Qu};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${yu}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${yu}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${Ru}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Ku} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Qu};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${Ru}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let Ju;
        if (yu)
          if (1 === Eu.length) Ju = `\treturn bloxdSpOwnTexel(${Eu[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const uu = Eu.length - 1;
            Ju = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Eu[uu]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let Ru = uu - 1; Ru >= 0; Ru--) Ju += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Eu[Ru]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            Ju += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else Ju = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${uu.id?`var<private> ${Iy}: u32;\n`:""}${mu}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Gy(uu)};\n\treturn ${Qu};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${uu.id?Iy:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Gy(uu)};\n${Ju}}\n`
      }(uu);
      const Ru = uu,
        yu = uu => {
          const yu = uu > 0 ? `bloxdSpLayer - ${Ru.layers*uu}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${uu}, ${Ru.sampler}, bloxdSpTurned, ${yu}, round(bloxdSpMipLevel));`
        };
      let Eu = "";
      for (let Qu = 0; Qu < Ru.count - 1; Qu++) Eu += `\tif (bloxdSpLayer < ${Ru.layers*(Qu+1)}u) {\n\t\t${yu(Qu)}\n\t}\n`;
      const Ku = Ru.frame ? `${Ru.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Fy}: u32;\n${Zy}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Fy} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Fy} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Fy} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Ku}${Eu}\t${yu(Ru.count-1)}\n}\n`
    }

    function Yy(uu, Ru, yu) {
      return !!uu.surface && "bloxdDefaultSurface" !== uu.surface && function(uu, Ru) {
        return "liquid" === Ru || !uu
      }(Ru, yu)
    }

    function oy(uu, Ru) {
      return uu.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${Ru.vertexLocalPosition}, ${ny(Ru.vertexFlags)});\n\t\tlet bloxdSpVertex = ${uu.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function qy(uu, Ru, yu, Eu, Ku) {
      if (!uu.surface) return "";
      const Qu = (uu, Ru) => `\n\tlet bloxdSpTexelUV = ${uu};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${Ru}) - 1u));`;
      let mu = "",
        Ju = "0u, 0u, vec2f(0.0), 0.0";
      const Nu = Eu && Py(Eu) ? Eu : null,
        Xu = Eu && !Py(Eu) ? Eu : null;
      if (Nu) {
        mu = `${Nu.id?`\n\tlet bloxdSpTexture = ${Nu.id};\n\t${Iy} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Nu.uv};${Qu(function(uu,Ru){var yu;return`${null!==(yu=uu.levelUv)&&void 0!==yu?yu:uu.cells?`${Ru} / ${uu.cells}`:Ru} * vec2f(textureDimensions(${uu.texture}))`}(Nu,"bloxdSpUv"),Nu.texture)}`, Ju = (Nu.id ? `${Iy}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Xu && (mu = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Fy} = bloxdSpTexture >> 16u;${Qu(`fragmentInputs.vMainUV1 * ${(0,kR.mb)(Xu.width)}`,"textureAtlas0")}`, Ju = `bloxdSpTexture & 0xffffu, ${Fy}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Vu = Ku.overlayColour,
        ru = Vu ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Bu = "bloxdDefaultSurface" !== uu.surface || Vu ? `\n\tbaseColor = vec4f(${ru}, baseColor.a);` : "",
        xu = Yy(uu, Ru, yu) ? `\n\t${Ku.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${mu}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Ku.alpha}, ${Ku.enchantTier}, ${Ku.enchantColour}, ${Ku.enchantSpeed}, ${null!==Vu&&void 0!==Vu?Vu:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Ku.normal}, ${Ku.localPosition}, ${ny(Ku.flags)}, ${Ju});\n\tlet bloxdSpSurface = ${uu.surface}(bloxdSpSurfaceIn);${Bu}${xu}\n`
    }
    const Oy = "bloxdSpLightIn";

    function vy(uu, Ru, yu, Eu) {
      if (!uu.light) return "";
      const Ku = Ru ? `${kR.m}.rgb, ${kR.m}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${kR.k}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Qu,
          diffuse: mu,
          emissive: Ju,
          ambient: Nu,
          fogColour: Xu,
          fogAlpha: Vu,
          normal: ru
        } = Eu;
      return `\tvar ${Oy} = BloxdLightIn(vec3f(0.0), ${yu?Qu:"0.0"}, ${mu}, ${Ju}, ${Nu}, ${Ku}, ${Xu}, ${Vu}, fragmentInputs.vPositionW, ${ru}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Oy}.litColour = bloxdLitColour(bloxdSpSurface, ${Oy});\n`
    }

    function ay(uu) {
      return uu.light ? `\n\t{\n\t\tlet bloxdSpLight = ${uu.light}(bloxdSpSurface, ${Oy});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const fy = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      uE = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      RE = "\treturn color;\n}",
      yE = {
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
    const EE = Object.freeze({});

    function KE(uu) {
      var Ru;
      return !(null === (Ru = (0, MR.e)(uu)) || void 0 === Ru || !Ru.sceneDepth)
    }

    function QE(uu) {
      const Ru = (0, MR.e)(uu);
      return !!Ru && Yy(Ru.hooks, Ru.strict, Ru.program)
    }

    function mE(uu, Ru, yu, Eu) {
      return ty(uu, Ru, yu, Eu, "terrain")
    }

    function JE(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Qu = function(uu) {
          return (0, MR.d)(uu.packVariant, uu.liquid ? "liquid" : "terrain")
        }(uu),
        {
          hooks: mu
        } = Qu,
        Ju = gy(Qu, Eu),
        Nu = "edge" === Ku ? "maskEdge" : "plain" === Ku ? "mask" : "trace",
        Xu = oy(mu, yE);
      Xu && (Ru = mE(Ru, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Xu}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Vu = "atlas" === uu.texture ? {
          count: uu.atlasCount,
          layers: uu.atlasLayers,
          width: uu.Q0,
          sampler: "atlasSampler",
          frame: uu.animated ? yu : null
        } : null,
        ru = `${Qu.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${zy(Qu,Ju,yE.normal,yE.flags,Nu)}${qy(mu,Qu.strict,Qu.program,Vu,yE)}`;
      ru && (Ru = mE(Ru, fy, `${fy.slice(0,-1)}${ru}`, "surface"));
      const Bu = ay(mu);
      return Bu && (Ru = mE(Ru, uE, `${vy(mu,uu.lighting,uu.dirLightCount>0,yE)}${uE}`, "light input"), Ru = mE(Ru, RE, `${Bu.slice(1)}${RE}`, "light")), `${(0,DR.D)()}${Qu.sceneDepth?`@group(${DR.g}) @binding(${DR.s}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${sy};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Ly(Qu,Ju,Nu)}${iy(Vu)}${Uy}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Qu.code}${Ru}`
    }
    const NE = Cu.c.WGSL;

    function XE(uu) {
      return void 0 !== uu.packVariant
    }
    const VE = {
        pKu: 0,
        TKu: 4,
        WKu: 8,
        jKu: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      rE = VE.aoLevels + 4,
      BE = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      xE = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      SE = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      pE = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      TE = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      WE = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      jE = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      HE = 0,
      dE = 3,
      bE = 4,
      CE = 5,
      kE = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${eR.e}, ${eR.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${eR.e}, ${eR.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      eE = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((uu=>AR.c>>uu&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const AE = {
      sr: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: uu => `animDataPerTex[${uu}]`
    };

    function DE(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AE;
      return `\n\tlet atlasIdxIn = ${uu};\n\tlet animTick = ${yu.sr};\n\tlet animTickStride = ${yu.stride};\n\tlet numAnimTextures = ${yu.count};\n\t${(0,ku.h)(Cu.c.WGSL,yu.perTexture)}\n\t${Ru}animLayer;\n`
    }

    function ME(uu) {
      const Ru = (Ru, yu) => {
        const Eu = Ru > 0 ? `fragmentInputs.texAtlasIndex - ${uu.atlasLayers.toFixed(1)} * ${Ru.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${yu?"textureSampleLevel":"textureSample"}(textureAtlas${Ru}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Eu}))${yu?", atlasLod":""})`
      };
      if (1 === uu.atlasCount) return `baseColor = ${Ru(0,!1)};`;
      let yu = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,kR.mb)(uu.Q0)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Eu = 0; Eu < uu.atlasCount; Eu++) {
        const Ku = uu.atlasLayers * (Eu + 1) - .5;
        yu += `${Eu>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,kR.mb)(Ku)}) {\n\t\tbaseColor = ${Ru(Eu,!0)};\n\t}`
      }
      return yu
    }

    function IE(uu) {
      return `terrain-${uu.texture}${"atlas"===uu.texture?uu.atlasCount:""}${uu.animated?"-anim":""}${uu.alphaTest?"-test":""}${uu.lighting?"-lit":""}-dir${uu.dirLightCount}${uu.packed?"-packed":""}${XE(uu)?`-sp${uu.packVariant}`:""}${uu.liquid?"-liquid":""}${uu.resting?"-rest":""}`
    }

    function GE(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Eu = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const yu = "none" !== uu.texture,
          Eu = "atlas" === uu.texture,
          Ku = uu.dirLightCount > 0,
          Qu = XE(uu);
        if (uu.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${uu.dirLightCount}`);
        let mu = 1,
          Ju = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Eu) {
          uu.animated && (Ju += `@group(2) @binding(${mu++}) var<storage, read> animDataPerTex: array<f32>;\n`), Ju += `@group(2) @binding(${mu++}) var atlasSampler: sampler;\n`;
          for (let Ru = 0; Ru < uu.atlasCount; Ru++) Ju += `@group(2) @binding(${mu++}) var textureAtlas${Ru}: texture_2d_array<f32>;\n`
        } else "single" === uu.texture && (Ju += `@group(2) @binding(${mu++}) var diffuseSamplerSampler: sampler;\n`, Ju += `@group(2) @binding(${mu++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Nu = function(uu) {
            const Ru = jE,
              yu = "none" !== uu.texture,
              Eu = "atlas" === uu.texture,
              Ku = XE(uu);
            return uu.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${yu?"uv: vec2f,":""}\n\t${Eu?"texAtlasIndices: f32,":""}\n\t${uu.lighting?"aPackedLightLevels: f32,":""}\n\t${Ku?"blockFlagWords: vec2u,":""}\n}\n${kE}\n${eE}\n${"single"===uu.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${yu?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===uu.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Eu?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${uu.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Ku?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${Ru.position}) position: vec3f,\n\t@location(${Ru.normal}) normal: vec4f,\n\t@location(${Ru.color}) color: vec4f,\n\t${yu?`@location(${Ru.uv}) uv: vec2f,`:""}\n\t${uu.lighting?`@location(${Ru.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Ku?`@location(${Ru.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(uu),
          Xu = `\n${pE}\n${xE}\n${SE}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${Ju}\n${qu}\n${Nu.declarations}\nstruct Varyings {\n\t${"none"===Ru?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${uu.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Ku?"@location(5) vTerrainLambert: f32,":""}\n\t${yu?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Eu?"@location(7) texAtlasIndex: f32,":""}\n\t${uu.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Qu?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Qu&&Eu?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${uu.resting?"":(0,kR.v)(NE)}\n${WE}\n\n@vertex\nfn mainVertex(${Nu.parameter}) -> Varyings {\n\t${Nu.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Qu?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${NR.b.placed}u;`:""}\n\t${Qu&&Eu?hy("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${uu.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${yu?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Eu?function(uu){return uu?DE("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(uu.animated):""}\n\t${"single"===uu.texture&&uu.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,kR.cb)(NE)}\n\t${(0,kR.K)(NE,uu.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${uu.resting?"":TE}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Eu?ME(uu):""}\n\t${"single"===uu.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${yu?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${uu.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Ku?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${ou}));\n\t${XE(uu)?(0,kR.hb)(Cu.c.WGSL):(0,kR.W)(NE)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Vu = new Set;
        uu.lighting && Vu.add("BLOXD_LIGHTING");
        Ku && Vu.add("BLOXD_TERRAIN_DIRECTIONAL");
        return dR(Xu, new Map([...Vu].map((uu => [uu, !0]))))
      }(uu, yu);
      if (!XE(uu)) return Eu;
      const Ku = JE(uu, Eu, DE, Ru, yu);
      return "none" === yu ? Ku : `${Ku}${function(uu){const Ru="none"!==uu.texture&&uu.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${uu.resting?"":TE}\n\t${uu.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Ru&&"atlas"===uu.texture?ME(uu):""}\n\t${Ru&&"single"===uu.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Ru?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${NR.b.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(uu)}`
    }
    const UE = new Map([
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

    function nE(uu, Ru) {
      const yu = new Map;
      let Eu = 0;
      const Ku = [],
        Qu = [],
        mu = [];
      for (const Xu of Ru) {
        var Ju, Nu;
        const Ru = null !== (Ju = Xu.type.trim().split(/\s+/).pop()) && void 0 !== Ju ? Ju : Xu.type,
          Vu = UE.get(Ru);
        if (!Vu) throw new Error(`Lite: no uniform layout for ${Xu.name}: ${Xu.type}`);
        const ru = null !== (Nu = Xu.arraySize) && void 0 !== Nu ? Nu : 0,
          Bu = ru ? 4 : Vu.align;
        Eu = Math.ceil(Eu / Bu) * Bu;
        const xu = ru ? 4 * Math.ceil(Vu.floats / 4) : Vu.floats;
        if (yu.set(Xu.name, {
            offset: Eu,
            floats: Vu.floats,
            arraySize: ru,
            stride: xu
          }), ru && Vu.floats <= 2) {
          const Ru = `${uu}_${mu.length}_strided`;
          Qu.push(`struct ${Ru} {\n\t@size(16) el: ${Vu.wgsl},\n}`), mu.push(Xu.name), Ku.push(`\t@align(16) ${Xu.name}: array<${Ru}, ${ru}>,`)
        } else ru ? Ku.push(`\t@align(16) ${Xu.name}: array<${Vu.wgsl}, ${ru}>,`) : Ku.push(`\t${Xu.name}: ${Vu.wgsl},`);
        Eu += ru ? xu * ru : Vu.floats
      }
      return {
        slots: yu,
        floats: Math.max(4, 4 * Math.ceil(Eu / 4)),
        wgsl: `${Qu.join("\n")}\nstruct ${uu} {\n${Ku.join("\n")}\n}\n`,
        stridedArrays: mu
      }
    }
    const sE = [{
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
      tE = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      lE = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function gE(uu, Ru) {
      return `#if defined(${uu}) && ${uu}DIRECTUV == 0\nvarying v${Ru}UV: vec2f;\n#endif`
    }

    function cE(uu, Ru, yu) {
      return `#if defined(${uu}) && ${uu}DIRECTUV == 0\nif (uniforms.v${Ru}Infos.x==0.)\n{vertexOutputs.v${Ru}UV= (uniforms.${yu}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${Ru}UV= (uniforms.${yu}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function LE(uu, Ru, yu) {
      return `#ifdef ${uu}\n#if ${uu}DIRECTUV == 1\n#define v${Ru}UV vMainUV1\n#elif ${uu}DIRECTUV == 2\n#define v${Ru}UV vMainUV2\n#else\nvarying v${Ru}UV: vec2f;\n#endif\nvar ${yu}SamplerSampler: sampler;\nvar ${yu}Sampler: texture_2d<f32>;\n#endif`
    }
    const zE = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      FE = 256,
      wE = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      ZE = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      hE = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      PE = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      iE = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      YE = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      oE = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      qE = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${ZE}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${gE("OPACITY","Opacity")}\n${gE("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${oE}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${hE}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${cE("OPACITY","Opacity","opacity")}\n${cE("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${PE}\n#define CUSTOM_VERTEX_MAIN_END\n${iE}\n}\n`;
    const OE = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${LE("OPACITY","Opacity","opacity")}\n${LE("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${oE}\n${YE}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((uu,Ru)=>function(uu){const Ru=`
    frame.lights[LITE_LIGHT$ {
        uu
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      uu
    }\
    nvar diffuse$ {
      uu
    }: vec4f = $ {
      Ru
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      uu
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      Ru
    }.vLightData, diffuse$ {
      uu
    }.rgb, $ {
      Ru
    }.vLightSpecular.rgb, diffuse$ {
      uu
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(Ru))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, vE = /^([gimus]+)!/, aE = new Set;

    function fE(uu) {
      aE.has(uu) || (aE.add(uu), console.warn(`Lite: no place for plugin code at ${uu} in the standard shader: it is left out`))
    }

    function uK(uu, Ru) {
      let yu = uu;
      const Eu = new Map;
      for (const [Qu, mu] of Ru) {
        var Ku;
        Eu.set(Qu, `${null!==(Ku=Eu.get(Qu))&&void 0!==Ku?Ku:""}${mu}\n`)
      }
      for (const [Qu, mu] of Eu) {
        if (!Qu.startsWith("!")) {
          const uu = `#define ${Qu}`;
          if (!yu.includes(uu)) {
            fE(Qu);
            continue
          }
          yu = yu.replace(uu, (() => `\n${mu}\n${uu}`));
          continue
        }
        let uu = Qu.substring(1),
          Ru = "g";
        if (uu.startsWith("!")) Ru = "", uu = uu.substring(1);
        else {
          const yu = vE.exec(uu);
          yu && (Ru = yu[1], uu = uu.substring(Ru.length + 1))
        }
        const Eu = new RegExp(uu, Ru.includes("g") ? Ru : `${Ru}g`);
        let Ku = Eu.exec(yu);
        for (Ku || fE(Qu); Ku;) {
          const uu = Ku,
            Ru = mu.replace(/\$(\d+)/g, ((Ru, yu) => Number(yu) < uu.length ? uu[Number(yu)] : ""));
          yu = yu.substring(0, uu.index) + Ru + yu.substring(uu.index + uu[0].length), Eu.lastIndex = uu.index + Ru.length, Ku = Eu.exec(yu)
        }
      }
      return yu
    }
    const RK = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      yK = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      EK = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function KK(uu) {
      const Ru = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let yu = uu.replace(RK, ((uu, yu, Eu, Ku, Qu, mu) => ("attribute" === yu ? Ru.attributes.push({
        name: Qu,
        type: mu
      }) : void 0 === yu ? Ru.varyings.push({
        name: Qu,
        type: mu,
        interpolation: mK(mu, Eu, Ku)
      }) : Ru.uniforms.push({
        name: Qu,
        type: QK(mu)
      }), "")));
      return yu = yu.replace(yK, ((uu, yu) => (Ru.samplers.add(yu), ""))), yu = yu.replace(EK, ((uu, yu, Eu) => (Ru.textures.push({
        name: yu,
        type: Eu
      }), ""))), Ru.body = yu, Ru
    }

    function QK(uu) {
      const Ru = uu.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        yu = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(Ru);
      if (!yu) throw new Error(`Lite: unsupported uniform type ${uu}`);
      return yu
    }

    function mK(uu, Ru, yu) {
      return void 0 === Ru && void 0 === yu ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(uu.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === Ru ? "@interpolate(flat) " : `@interpolate(${null!==Ru&&void 0!==Ru?Ru:"perspective"}, ${null!==yu&&void 0!==yu?yu:"center"}) `
    }

    function JK(uu) {
      return rK({
        defines: uu.defines,
        vertex: uK(qE, uu.vertexCode),
        fragment: uK(OE, uu.fragmentCode),
        members: [...sE, ...uu.defines.has("OPACITY") ? tE : [], ...uu.defines.has("EMISSIVE") ? lE : [], ...uu.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function NK(uu) {
      const Ru = uu.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (Ru === uu) throw new Error("Lite: fragment main has no return");
      return Ru
    }
    const XK = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${ZE}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${hE}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${PE}\n${iE}\n}\n`,
      VK = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${YE}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function rK(uu) {
      const Ru = uu.defines,
        yu = KK(dR(uu.vertex, Ru)),
        Eu = KK(dR(uu.fragment, Ru)),
        Ku = new Map;
      for (const Hu of [...yu.varyings, ...Eu.varyings]) Ku.has(Hu.name) || Ku.set(Hu.name, Hu);
      const Qu = [...Ku.values()].map(((uu, Ru) => `\t@location(${Ru}) ${uu.interpolation}${uu.name}: ${uu.type},`)),
        mu = [...uu.members];
      for (const Hu of [...yu.uniforms, ...Eu.uniforms]) mu.some((uu => uu.name === Hu.name)) || mu.push(Hu);
      const Ju = nE(uu.structName, mu),
        Nu = [],
        Xu = [];
      let Vu = 1;
      const ru = new Set;
      for (const Hu of [...yu.textures, ...Eu.textures]) {
        if (ru.has(Hu.name)) continue;
        ru.add(Hu.name);
        const uu = `${Hu.name}Sampler`,
          Ru = Vu++,
          yu = Vu++,
          Eu = Hu.type.startsWith("texture_2d_array") ? "2d-array" : Hu.type.startsWith("texture_cube") ? "cube" : "2d";
        Nu.push({
          name: Hu.name,
          binding: Ru,
          samplerBinding: yu,
          dimension: Eu
        }), Xu.push(`@group(2) @binding(${Ru}) var ${Hu.name}: ${Hu.type};`), Xu.push(`@group(2) @binding(${yu}) var ${uu}: sampler;`)
      }
      for (const Hu of [...yu.samplers, ...Eu.samplers])
        if (!ru.has(Hu.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Hu} has no texture`);
      const Bu = [pE, wE, Ju.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${uu.structName};`, ...Xu].join("\n"),
        xu = yu.attributes,
        Su = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...yu.attributes.map(((uu, Ru) => `\t@location(${Ru}) ${uu.name}: ${uu.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        pu = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Qu, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        Tu = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Eu.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Qu, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", qu, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${ou}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        Wu = uu => {
          for (const Ru of Ju.stridedArrays) uu = uu.replace(new RegExp(`\\b${Ru}\\s*\\[(.*?)\\]`, "g"), `${Ru}[$1].el`);
          return uu
        };
      return {
        vertex: `${Bu}\n${Su}\n${pu}\n${Wu(yu.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Bu}\n${Tu}\n${NK((ju=Wu(Eu.body),ju.includes("fragmentInputs.position")?ju.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):ju))}`,
        attributes: xu,
        material: Ju,
        textures: Nu
      };
      var ju
    }
    const BK = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      xK = uu => ({
        name: uu,
        type: "vec3"
      }),
      SK = uu => ({
        name: uu,
        type: "float"
      }),
      pK = nE("EarthSkyUniforms", [xK("viewFrom"), SK("exposureScale"), xK("zenithOffset"), SK("fogOn"), xK("up"), SK("ditherOn"), xK("sun"), SK("turbidity"), xK("tint"), SK("rayleigh"), xK("sunDir"), SK("mieStrength"), xK("inScatterR"), SK("mieFocus"), xK("inScatterM"), SK("sunE"), xK("extinctionBeta"), SK("sunsetMix"), SK("mieScale"), SK("mieBase"), SK("mieSlope"), SK("sunDiscE"), SK("exposure")]),
      TK = `${pE}\n${wE}\n${pK.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      WK = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${BK.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      jK = `\n${qu}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(TR).map((uu=>{let[Ru,yu]=uu;return`const TONE_${Ru}: f32 = ${yu};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${WR};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${ou}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var HK = yu(36828);
    const dK = new HK.MS,
      bK = new HK.MS,
      CK = new HK.Quaternion,
      kK = new Float64Array(3),
      eK = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      AK = new Float64Array(16);

    function DK(uu, Ru, yu) {
      const Eu = yu.worldMatrix;
      var Ku;
      uu.updateFloat3("viewFrom", Eu[12], Eu[13], Eu[14]), uu.updateFloatsFrom("zenithOffset", Ru.cameraOffset, 0, 3), uu.updateFloatsFrom("up", Ru.up, 0, 3), Ru.luminance > 0 && (uu.updateFloat("exposure", Ru.luminance), uu.updateFloat("exposureScale", (Ku = Ru.luminance, Math.log2(2 / Math.pow(Ku, 4))))), uu.updateFloat("turbidity", Ru.turbidity), uu.updateFloat("rayleigh", Ru.rayleigh), uu.updateFloat("mieStrength", Ru.mieCoefficient), uu.updateFloat("mieFocus", Ru.mieDirectionalG), uu.updateFloatsFrom("tint", Ru.tint, 0, 3), uu.updateFloat("fogOn", Ru.fog && yu.fogEnabled && 0 !== yu.fogMode ? 1 : 0), uu.updateFloat("ditherOn", Ru.dithering ? 1 : 0);
      const Qu = Ru.sunPosition;
      if (dK.set(Qu[0], Qu[1], Qu[2]), !Ru.useSunPosition) {
        const uu = Math.PI * (Ru.inclination - .5),
          yu = 2 * Math.PI * (Ru.azimuth - .5);
        dK.set(Ru.distance * Math.cos(yu) * Math.cos(uu), Ru.distance * Math.sin(-uu), Ru.distance * Math.sin(yu) * Math.cos(uu)), HK.Quaternion.FromUnitVectorsToRef(HK.MS.UpReadOnly, bK.set(Ru.up[0], Ru.up[1], Ru.up[2]), CK), dK.rotateByQuaternionToRef(CK, dK)
      }
      uu.updateVector3("sun", dK), kK[0] = dK.x, kK[1] = dK.y, kK[2] = dK.z;
      const mu = pR(Ru, kK, eK);
      uu.updateFloatsFrom("sunDir", mu.sunDir, 0, 3), uu.updateFloat("sunE", mu.sunE), uu.updateFloatsFrom("inScatterR", mu.inScatterR, 0, 3), uu.updateFloatsFrom("inScatterM", mu.inScatterM, 0, 3), uu.updateFloatsFrom("extinctionBeta", mu.extinctionBeta, 0, 3), uu.updateFloat("sunsetMix", mu.sunsetMix), uu.updateFloat("sunDiscE", mu.sunDiscE), uu.updateFloat("mieScale", mu.mieScale), uu.updateFloat("mieBase", mu.mieBase), uu.updateFloat("mieSlope", mu.mieSlope)
    }

    function MK(uu, Ru) {
      const yu = AK;
      yu[0] = Ru.far, yu[5] = Ru.far, yu[10] = Ru.far, yu[15] = 1;
      const Eu = uu.infiniteDistance;
      for (let Ku = 0; Ku < 3; Ku++) yu[12 + Ku] = uu.position[Ku] + (Eu ? Ru.worldMatrix[12 + Ku] : 0);
      return AK
    }
    var IK = yu(38483);

    function GK(uu) {
      return Math.max(4, 4 * Math.ceil(uu / 4))
    }

    function UK(uu, Ru, yu, Eu) {
      const Ku = uu.createBuffer({
        label: Eu,
        size: GK(Ru.byteLength),
        usage: yu,
        mappedAtCreation: !0
      });
      return new Uint8Array(Ku.getMappedRange(), 0, Ru.byteLength).set(new Uint8Array(Ru.buffer, Ru.byteOffset, Ru.byteLength)), Ku.unmap(), Ku
    }

    function nK(uu, Ru) {
      return Math.floor(Math.log2(Math.max(uu, Ru))) + 1
    }

    function sK(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = uu.createTexture({
          label: Qu,
          size: {
            width: yu,
            height: Eu,
            depthOrArrayLayers: Ku
          },
          format: "rgba8unorm",
          mipLevelCount: nK(yu, Eu),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        Ju = (Ru, yu, Eu, Qu) => {
          uu.queue.writeTexture({
            texture: mu,
            mipLevel: yu
          }, Ru, {
            bytesPerRow: 4 * Eu,
            rowsPerImage: Qu
          }, {
            width: Eu,
            height: Qu,
            depthOrArrayLayers: Ku
          })
        };
      Ju(Ru, 0, yu, Eu);
      let Nu = 1;
      for (const Xu of function*(uu, Ru, yu, Eu) {
          let Ku = uu,
            Qu = Ru,
            mu = yu;
          for (; Qu > 1 || mu > 1;) {
            const uu = Math.max(1, Qu >> 1),
              Ru = Math.max(1, mu >> 1),
              yu = new Uint8Array(uu * Ru * Eu * 4),
              Ju = 4 * Qu;
            let Nu = 0;
            for (let Xu = 0; Xu < Eu; Xu++) {
              const Eu = Xu * Ju * mu;
              for (let Xu = 0; Xu < Ru; Xu++) {
                const Ru = Eu + Math.min(2 * Xu, mu - 1) * Ju,
                  Vu = Eu + Math.min(2 * Xu + 1, mu - 1) * Ju;
                for (let Eu = 0; Eu < uu; Eu++) {
                  const uu = 4 * Math.min(2 * Eu, Qu - 1),
                    mu = 4 * Math.min(2 * Eu + 1, Qu - 1);
                  for (let Eu = 0; Eu < 4; Eu++) yu[Nu++] = Ku[Ru + uu + Eu] + Ku[Ru + mu + Eu] + Ku[Vu + uu + Eu] + Ku[Vu + mu + Eu] + 2 >> 2
                }
              }
            }
            yield {
              data: yu,
              width: uu,
              height: Ru
            }, Ku = yu, Qu = uu, mu = Ru
          }
        }(Ru, yu, Eu, Ku)) Ju(Xu.data, Nu++, Xu.width, Xu.height);
      return mu
    }
    const tK = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function lK(uu) {
      if (uu.startsWith("data:")) {
        const Ru = uu.search(/[;,]/);
        return `data:${Ru>5?uu.slice(5,Ru):""} URL of ${uu.length} characters`
      }
      return uu.length > 80 ? `${uu.slice(0,80)}...` : uu
    }
    async function gK(uu) {
      const Ru = await fetch(uu);
      if (!Ru.ok) throw new Error(`${lK(uu)}: ${Ru.status} ${Ru.statusText}`);
      return createImageBitmap(await Ru.blob(), tK)
    }
    async function cK(uu) {
      const Ru = await gK(uu),
        yu = new OffscreenCanvas(Ru.width, Ru.height),
        Eu = yu.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Eu) throw new Error("No 2D context to decode an image");
      Eu.drawImage(Ru, 0, 0);
      const {
        data: Ku
      } = Eu.getImageData(0, 0, Ru.width, Ru.height);
      return Ru.close(), {
        pixels: new Uint8Array(Ku.buffer, Ku.byteOffset, Ku.byteLength),
        width: yu.width,
        height: yu.height
      }
    }
    const LK = new WeakMap;

    function zK(uu, Ru, yu, Eu) {
      var Ku;
      const Qu = null !== (Ku = LK.get(uu)) && void 0 !== Ku ? Ku : new Map;
      LK.set(uu, Qu);
      let mu = Qu.get(Ru);
      return mu || (mu = (async Ku => {
        const Qu = null !== (Ku = function(uu, Ru) {
          const yu = uu ? new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength) : null;
          return null !== yu && void 0 !== yu && yu.byteLength && Ru && yu.byteLength % (Ru * Ru * 4) === 0 ? {
            pixels: yu,
            layerWidth: Ru,
            layers: yu.byteLength / (Ru * Ru * 4)
          } : null
        }(yu, Eu)) && void 0 !== Ku ? Ku : await async function(uu) {
          const {
            pixels: Ru,
            width: yu
          } = await cK(uu);
          return {
            pixels: Ru,
            layerWidth: yu,
            layers: Ru.byteLength / (yu * yu * 4)
          }
        }(Ru), {
          layerWidth: mu,
          layers: Ju
        } = Qu;
        return {
          texture: sK(uu, Qu.pixels, mu, mu, Ju, `atlas-${Ru}`),
          layerWidth: mu,
          layers: Ju
        }
      })(), Qu.set(Ru, mu), mu.catch((() => {
        Qu.delete(Ru)
      }))), mu
    }
    const FK = new Map([
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
      wK = new Map([
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

    function ZK(uu) {
      for (const Ru of (0, IK.j)(uu))
        if (!wK.has((0, IK.h)(Ru))) return !1;
      return !0
    }

    function hK(uu) {
      const Ru = wK.get(uu);
      if (!Ru) return null;
      const [yu, Eu, Ku] = Ru;
      return {
        srcFactor: FK.get(yu),
        dstFactor: FK.get(Eu),
        operation: Ku
      }
    }
    let PK = null;

    function iK(uu) {
      PK = uu
    }

    function YK(uu, Ru, yu) {
      var Eu;
      null === (Eu = PK) || void 0 === Eu || Eu(uu, Ru, yu, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class oK {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(uu, Ru, yu, Eu, Ku) {
        yu !== this.pipeline && (uu.setPipeline(yu), this.pipeline = yu), uu.setBindGroup(1, Eu, [Ku]);
        const Qu = Ru.material.bindGroup;
        Qu !== this.materialGroup && (uu.setBindGroup(2, Qu), this.materialGroup = Qu);
        const mu = Ru.program.packGroup;
        mu && mu !== this.packGroup && (uu.setBindGroup(DR.g, mu), this.packGroup = mu);
        const {
          vertexBuffers: Ju,
          vertexOffsets: Nu
        } = this;
        for (let Xu = 0; Xu < Ru.vertexBuffers.length; Xu++) Ju[Xu] === Ru.vertexBuffers[Xu] && Nu[Xu] === Ru.vertexOffsets[Xu] || (uu.setVertexBuffer(Xu, Ru.vertexBuffers[Xu], Ru.vertexOffsets[Xu]), Ju[Xu] = Ru.vertexBuffers[Xu], Nu[Xu] = Ru.vertexOffsets[Xu]);
        Ru.indexBuffer && Ru.indexBuffer !== this.indexBuffer && (uu.setIndexBuffer(Ru.indexBuffer, Ru.indexFormat), this.indexBuffer = Ru.indexBuffer)
      }
    }
    class qK {
      constructor(uu, Ru, yu, Eu) {
        this.modelMeshes = uu, this.A_ = Ru, this.maker = yu, this.warnOnce = Eu, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(uu) {
        this.collectGroup(uu, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(uu, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(uu, 1, this.frontDraws, this.frontDraws, !0);
        for (const Ru of this.modelMeshes.groupIds())(Ru < -1 || Ru > 1) && this.warnOnce(`group:${Ru}`, `rendering group ${Ru} is not drawn`);
        for (const Ru of this.A_.groupIds())(Ru < -1 || Ru > 1) && this.warnOnce(`group:${Ru}`, `rendering group ${Ru} is not drawn`);
        this.opaqueDraws.sort(OK), this.transparentDraws.sort(vK)
      }
      collectGroup(uu, Ru, yu, Eu, Ku) {
        const Qu = this.modelMeshes.group(Ru),
          mu = this.A_.group(Ru),
          Ju = 0 === Ru ? null === mu || void 0 === mu ? void 0 : mu.opaque : void 0;
        this.collectList(uu, null === Qu || void 0 === Qu ? void 0 : Qu.opaque, Ju || null === mu || void 0 === mu ? void 0 : mu.opaque, Ru, !1, yu, Ku), Ju && (this.A_.drawn += this.maker.bundleDraws(uu, Ju, Ru)), this.collectList(uu, null === Qu || void 0 === Qu ? void 0 : Qu.alphaTest, void 0, Ru, !1, yu, Ku), this.collectList(uu, null === Qu || void 0 === Qu ? void 0 : Qu.transparent, null === mu || void 0 === mu ? void 0 : mu.transparent, Ru, !0, Eu, Ku)
      }
      collectList(uu, Ru, yu, Eu, Ku, Qu, mu) {
        var Ju;
        const Nu = Qu.length;
        Ru && this.maker.pushDraws(uu, Ru.units, Ru.units.length, Eu, Ku, Qu, Ru.rows), yu && (this.A_.drawn += this.maker.pushDraws(uu, yu, yu.length, Eu, Ku, Qu));
        const Xu = Ku ? null === (Ju = this.modelMeshes.group(Eu)) || void 0 === Ju ? void 0 : Ju.text : void 0;
        Xu && this.maker.pushDraws(uu, Xu.units, Xu.units.length, Eu, !0, Qu, Xu.rows), mu && aK(Qu, Nu)
      }
    }

    function OK(uu, Ru) {
      return uu.program.id - Ru.program.id || uu.material.owner.uniqueId - Ru.material.owner.uniqueId
    }

    function vK(uu, Ru) {
      return uu.material.owner.uniqueId - Ru.material.owner.uniqueId
    }

    function aK(uu, Ru) {
      for (let yu = Ru + 1; yu < uu.length; yu++) {
        const Eu = uu[yu];
        let Ku = yu - 1;
        for (; Ku >= Ru && vK(uu[Ku], Eu) > 0; Ku--) uu[Ku + 1] = uu[Ku];
        uu[Ku + 1] = Eu
      }
    }
    const fK = {};

    function uQ(uu) {
      return uu.hasThinInstances ? "thin" : uu.HKu || uu._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function RQ(uu, Ru, yu) {
      return uu ? (yu._needUVs = !0, uu.optimizeUVAllocation && (0, Mu.L)(uu.matrix) ? (yu[`${Ru}DIRECTUV`] = uu.uvSet + 1, yu[`MAINUV${uu.uvSet+1}`] = !0) : yu[`${Ru}DIRECTUV`] = 0, !0) : (yu[`${Ru}DIRECTUV`] = 0, !1)
    }

    function yQ(uu) {
      const Ru = new Map;
      for (const yu in uu) {
        if (95 === yu.charCodeAt(0)) continue;
        const Eu = uu[yu],
          Ku = typeof Eu;
        "number" === Ku || "string" === Ku ? Ru.set(yu, String(Eu)) : Eu && "function" !== Ku && Ru.set(yu, !0)
      }
      return Ru
    }

    function EQ(uu) {
      const Ru = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: yu
        }
        of uu.features)
        for (const uu in yu) Ru[uu] = yu[uu];
      return Ru
    }

    function KQ(uu) {
      const Ru = uu.parts.geometry;
      return null !== Ru && void 0 !== Ru && Ru.live ? Ru : null
    }

    function QQ(uu) {
      var Ru;
      return null !== (Ru = KQ(uu)) && void 0 !== Ru ? Ru : fK
    }
    class mQ {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = uu, this.warnOnce = Ru, this.programWithModel = yu, this.packFailed = Eu, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(uu, Ru, yu, Eu, Ku) {
        const Qu = Ru.owner;
        let mu = this.drawStates.get(Ru);
        if (!mu) {
          const uu = Ru.parts.materials[Ru.range];
          if (!uu) return this.warnOnce("model", `${yu.name} on ${Qu.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          mu = {
            defines: EQ(uu),
            model: uu,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Ku,
            groupId: Eu,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(Ru, mu)
        }
        if (this.programCurrent(mu, Ru, Ku, Eu)) return mu.program;
        const {
          model: Ju
        } = mu, Nu = QQ(Ru), Xu = this.instanceLayout(Qu, Ku), Vu = this.definesBits(Qu);
        if (!this.prepareModelDefines(uu, Qu, Ju, mu.defines, Eu, Ku)) return null;
        mu.instancing = Ku, mu.groupId = Eu, mu.modelVersion = Ju.version, mu.geometry = Nu, mu.instanceLayout = Xu, mu.definesBits = Vu;
        const ru = function(uu) {
          let Ru = "";
          for (const [yu, Eu] of uu) Ru += !0 === Eu ? `${yu};` : `${yu}=${Eu};`;
          return Ru
        }(yQ(mu.defines));
        return ru === mu.definesKey && mu.packVariant === this.modelPackVariant && mu.program && !this.packFailed(mu.program) || (mu.definesKey = ru, mu.packVariant = this.modelPackVariant, mu.program = this.programWithModel(Ju, mu.defines, ru)), mu.program
      }
      programCurrent(uu, Ru, yu, Eu) {
        return null !== uu.program && !this.packFailed(uu.program) && uu.instancing === yu && uu.groupId === Eu && this.definesHold(uu, Ru, yu)
      }
      definesHold(uu, Ru, yu) {
        return uu.modelVersion === uu.model.version && uu.geometry === QQ(Ru) && uu.instanceLayout === this.instanceLayout(Ru.owner, yu) && uu.definesBits === this.definesBits(Ru.owner) && uu.packVariant === this.modelPackVariant
      }
      modelPackKind(uu) {
        var Ru;
        return 0 === this.modelPackVariant ? null : null !== (Ru = (0, Au.u)(uu, eu.j.name)) && void 0 !== Ru && Ru.active ? "placed" : uu.item ? "item" : uu.lifeform ? "lifeform" : uu.box ? "box" : null
      }
      instanceLayout(uu, Ru) {
        var yu, Eu, Ku;
        return "thin" === Ru ? null !== (Ku = this.resources.R_.get(uu)) && void 0 !== Ku ? Ku : null : "instanced" === Ru && null !== (yu = null === (Eu = uu._userInstancedBuffersStorage) || void 0 === Eu ? void 0 : Eu.interleavedKinds) && void 0 !== yu ? yu : null
      }
      definesBits(uu) {
        const Ru = this.view;
        return (uu.visibility < 1 ? 1 : 0) | (uu.hasVertexAlpha ? 2 : 0) | (uu.applyFog ? 4 : 0) | (uu.useVertexColors ? 8 : 0) | (uu.nonUniformScaling ? 16 : 0) | (Ru.fogEnabled && 0 !== Ru.fogMode ? 32 : 0) | (Ru.lightsEnabled ? 64 : 0) | Ru.lightCount << 7
      }
      prepareLightDefines(uu, Ru, yu) {
        let Eu = 0;
        if (this.view.lightsEnabled && !Ru) {
          const Ru = Math.min(yu, 4);
          for (; Eu < this.view.lightCount && (uu[`LIGHT${Eu}`] = !0, uu[`LITE_LIGHT${Eu}_SLOT`] = Eu, Eu++, uu._needNormals = !0, Eu !== Ru););
        }
        for (let Ku = Eu; Ku < 4; Ku++) uu[`LIGHT${Ku}`] = !1, uu[`LITE_LIGHT${Ku}_SLOT`] = void 0
      }
      prepareModelDefines(uu, Ru, yu, Eu, Ku, Qu) {
        const {
          features: mu
        } = yu;
        Eu._needNormals = !1, Eu._needUVs = !1;
        const Ju = this.view;
        this.prepareLightDefines(Eu, yu.disableLighting, yu.maxSimultaneousLights), Eu.MAINUV1 = !1, Eu.MAINUV2 = !1;
        const Nu = yu.diffuseTexture;
        Nu ? (Eu._needUVs = !0, Eu.DIFFUSE = !0, Nu.optimizeUVAllocation && (0, Mu.L)(Nu.matrix) ? (Eu.DIFFUSEDIRECTUV = Nu.uvSet + 1, Eu[`MAINUV${Nu.uvSet+1}`] = !0) : Eu.DIFFUSEDIRECTUV = 0, Nu.uvSet > 1 && this.warnOnce(`uvset:${yu.name}`, `${yu.name} samples UV set ${Nu.uvSet+1}, which is not supported`)) : (Eu.DIFFUSE = !1, Eu.DIFFUSEDIRECTUV = 0);
        const Xu = yu.opacityTexture,
          Vu = yu.emissiveTexture;
        Eu.OPACITY = RQ(Xu, "OPACITY", Eu), Eu.OPACITYRGB = null !== Xu && Xu.getAlphaFromRGB, Eu.EMISSIVE = RQ(Vu, "EMISSIVE", Eu), (Xu && Xu.uvSet > 1 || Vu && Vu.uvSet > 1) && this.warnOnce(`uvset:${yu.name}`, `${yu.name} samples a UV set past 2, which is not supported`);
        const ru = yu.reflectionTexture,
          Bu = null !== ru;
        if (Bu) {
          if (!this.resources.boundTexture(ru)) return !1;
          Eu._needNormals = !0
        }
        Eu.REFLECTION = Bu, Eu.REFLECTIONMAP_3D = Bu, Eu.REFLECTIONMAP_SKYBOX = Bu, Eu.REFLECTIONMAP_OPPOSITEZ = Bu && (uu.useRightHandedSystem ? !ru.invertZ : ru.invertZ), Eu.ROUGHNESS = Bu && yu.roughness > 0, Eu.REFLECTIONOVERALPHA = Bu && yu.useReflectionOverAlpha, Eu.LITE_REFLECTION_LUMINANCE = Bu && "cube" === ru.source.kind && ru.source.luminance, (Ru.skeleton || Ru.morphTargetManager) && this.warnOnce(`skin:${Ru.name}`, `${Ru.name} has bones or morph targets, which are not supported`), Eu.FOG = yu.fogEnabled && Ru.applyFog && Ju.fogEnabled && 0 !== Ju.fogMode, Eu.NONUNIFORMSCALING = Ru.nonUniformScaling;
        const {
          visibility: xu,
          hasVertexAlpha: Su
        } = Ru;
        Eu.ALPHATEST = (0, Au.N)(yu, xu, Su), Eu.ALPHAFROMDIFFUSE = (0, Au.ab)(yu), Eu.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== yu.transparencyMode, Eu.ALPHABLEND = null === yu.transparencyMode || (0, Au.L)(yu, xu, Su), Eu.PREMULTIPLYALPHA = 7 === yu.alphaMode || 8 === yu.alphaMode, Eu.EMISSIVEASILLUMINATION = yu.useEmissiveAsIllumination, Eu.LINKEMISSIVEWITHDIFFUSE = yu.linkEmissiveWithDiffuse, Eu.TWOSIDEDLIGHTING = !yu.backFaceCulling && yu.twoSidedLighting, Eu.INSTANCES = "none" !== Qu, Eu.THIN_INSTANCES = "thin" === Qu, Eu.LITE_FRONT_LAYER = Ku >= 1;
        for (const {
            feature: ku,
            state: eu,
            active: Au
          }
          of mu) {
          var pu, Tu;
          if (Au) null === (pu = (Tu = (0, VR.l)(ku)).prepareDefinesBeforeAttributes) || void 0 === pu || pu.call(Tu, eu, Eu, uu, Ru)
        }
        this.modelPackKind(yu) && (Eu._needNormals = !0), Eu.NORMAL = Eu._needNormals && Ru.isVerticesDataPresent("normal"), Eu.UV1 = Eu._needUVs && Ru.isVerticesDataPresent("uv"), Eu.UV2 = Eu._needUVs && Ru.isVerticesDataPresent("uv2");
        const Wu = Ru.useVertexColors && Ru.isVerticesDataPresent("color");
        Eu.VERTEXCOLOR = Wu, Eu.VERTEXALPHA = Ru.hasVertexAlpha && Wu, Eu.INSTANCESCOLOR = "none" !== Qu && Ru.isVerticesDataPresent("instanceColor");
        for (const {
            feature: ku,
            state: eu,
            active: Au
          }
          of mu) {
          var ju, Hu;
          if (Au) null === (ju = (Hu = (0, VR.l)(ku)).prepareDefines) || void 0 === ju || ju.call(Hu, eu, Eu, uu, Ru, yu)
        }
        const du = uu.eS();
        for (const {
            feature: ku,
            state: eu,
            active: Au
          }
          of mu) {
          var bu, Cu;
          if (Au && !1 === (null === (bu = (Cu = (0, VR.l)(ku)).isReadyForSubMesh) || void 0 === bu ? void 0 : bu.call(Cu, eu, Eu, uu, du))) return !1
        }
        return !0
      }
    }

    function JQ(uu, Ru, yu) {
      return uu.codeVersion !== Ru.version && function(uu, Ru) {
        const yu = [],
          Eu = [];
        for (const {
            feature: Bu,
            state: xu,
            active: Su
          }
          of Ru.features) {
          var Ku, Qu, mu, Ju;
          if (Su) NQ(null === (Ku = (Qu = (0, VR.l)(Bu)).getCustomCode) || void 0 === Ku ? void 0 : Ku.call(Qu, xu, "vertex", Cu.c.WGSL), yu), NQ(null === (mu = (Ju = (0, VR.l)(Bu)).getCustomCode) || void 0 === mu ? void 0 : mu.call(Ju, xu, "fragment", Cu.c.WGSL), Eu)
        }
        const Nu = [];
        for (const {
            feature: Bu,
            state: xu
          }
          of Ru.features) {
          var Xu, Vu;
          const uu = null === (Xu = (Vu = (0, VR.l)(Bu)).getUniforms) || void 0 === Xu ? void 0 : Xu.call(Vu, xu, Cu.c.WGSL);
          for (const Ru of null !== (ru = null === uu || void 0 === uu ? void 0 : uu.ubo) && void 0 !== ru ? ru : []) {
            var ru;
            Ru.size && Ru.type && Nu.push({
              name: Ru.name,
              type: Ru.type,
              arraySize: Ru.arraySize
            })
          }
        }
        uu.vertexCode = yu, uu.fragmentCode = Eu, uu.pluginUniforms = Nu, uu.codeKey = JSON.stringify([yu, Eu, Nu]), uu.codeVersion = Ru.version
      }(uu, Ru), `${yu}#${uu.codeKey}`
    }

    function NQ(uu, Ru) {
      if (uu)
        for (const yu in uu) uu[yu] && Ru.push([yu, uu[yu]])
    }
    const XQ = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class VQ {
      constructor(uu) {
        this.warnOnce = uu, this.states = new Map
      }
      renderState(uu, Ru, yu, Eu) {
        var Ku;
        let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          mu = null !== (Ku = uu.sideOrientation) && void 0 !== Ku ? Ku : Ru.sideOrientation;
        Ru._getWorldMatrixDeterminant() < 0 && (mu = 0 === mu ? 1 : 0);
        const Ju = "triangle-list" === Qu,
          Nu = yu ? uu.alphaMode : 0,
          Xu = (!yu || (0 === Nu || uu.forceDepthWrite)) && !uu.disableDepthWrite,
          Vu = Ju && uu.backFaceCulling ? uu.cullBackFaces ? "back" : "front" : "none",
          ru = Ju && 0 !== mu ? "ccw" : "cw",
          Bu = uu.depthFunction,
          xu = Ju ? uu.zOffset : 0,
          Su = Ju ? uu.zOffsetUnits : 0,
          pu = !uu.disableColorWrite;
        return Eu && Eu.alphaMode === Nu && Eu.depthWrite === Xu && Eu.depthFunction === Bu && Eu.cullMode === Vu && Eu.frontFace === ru && Eu.zOffset === xu && Eu.zOffsetUnits === Su && Eu.colourWrite === pu && Eu.topology === Qu ? Eu : this.stateFor(Nu, Xu, Bu, Vu, ru, xu, Su, pu, Qu)
      }
      stateFor(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        const Xu = `${uu}|${Ru}|${yu}|${Eu}|${Ku}|${Qu}|${mu}|${Ju}|${Nu}`;
        let Vu = this.states.get(Xu);
        if (!Vu) {
          var ru;
          const Bu = uu ? hK(uu) : null;
          uu && !Bu && this.warnOnce(`alpha:${uu}`, `alpha mode ${uu} is not supported`), Vu = {
            key: Xu,
            alphaMode: uu,
            depthFunction: yu,
            zOffset: Qu,
            zOffsetUnits: mu,
            topology: Nu,
            blend: Bu,
            depthWrite: Ru,
            depthCompare: yu && null !== (ru = XQ.get(yu)) && void 0 !== ru ? ru : null,
            cullMode: Eu,
            frontFace: Ku,
            depthBias: -mu,
            depthBiasSlopeScale: -Qu,
            colourWrite: Ju
          }, this.states.set(Xu, Vu)
        }
        return Vu
      }
    }
    var rQ = yu(37161);

    function BQ(uu) {
      if (!uu.frozen) return -1;
      let Ru = uu.version;
      for (const {
          feature: yu,
          state: Eu,
          active: Ku
        }
        of uu.features) {
        if (!Ku || !yu.bind) continue;
        const uu = (0, VR.l)(yu).uniformsVersion;
        if (!uu) return -1;
        Ru += uu(Eu)
      }
      return Ru
    }
    class xQ {
      constructor(uu, Ru, yu) {
        this.slots = uu, this.data = Ru, this.textures = yu, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(uu, Ru) {
        this.write4(uu, Ru, 0, 0, 0, 1)
      }
      updateFloat2(uu, Ru, yu) {
        this.write4(uu, Ru, yu, 0, 0, 2)
      }
      updateFloat3(uu, Ru, yu, Eu) {
        this.write4(uu, Ru, yu, Eu, 0, 3)
      }
      updateFloat4(uu, Ru, yu, Eu, Ku) {
        this.write4(uu, Ru, yu, Eu, Ku, 4)
      }
      updateVector3(uu, Ru) {
        this.write4(uu, Ru.x, Ru.y, Ru.z, 0, 3)
      }
      updateVector4(uu, Ru) {
        this.write4(uu, Ru.x, Ru.y, Ru.z, Ru.w, 4)
      }
      updateColor3(uu, Ru) {
        this.write4(uu, Ru.r, Ru.g, Ru.b, 0, 3)
      }
      updateColor4(uu, Ru, yu) {
        this.write4(uu, Ru.r, Ru.g, Ru.b, yu, 4)
      }
      updateFloatsFrom(uu, Ru, yu, Eu) {
        const Ku = this.slots.get(uu);
        if (!Ku) return;
        const Qu = this.data,
          mu = Ku.offset;
        for (let Ju = 0; Ju < Eu; Ju++) Qu[mu + Ju] = Ru[yu + Ju]
      }
      updateFloat3TimesFloats(uu, Ru, yu, Eu) {
        const Ku = this.slots.get(uu);
        if (!Ku) return;
        const Qu = this.data,
          mu = Ku.offset;
        Qu[mu] = Ru[yu] * Eu[0], Qu[mu + 1] = Ru[yu + 1] * Eu[1], Qu[mu + 2] = Ru[yu + 2] * Eu[2]
      }
      v_(uu, Ru) {
        const yu = this.slots.get(uu);
        yu && this.data.set(Ru.m, yu.offset)
      }
      updateMatrixFloats(uu, Ru) {
        const yu = this.slots.get(uu);
        yu && this.data.set(Ru, yu.offset)
      }
      updateFloatArray(uu, Ru) {
        const yu = this.slots.get(uu);
        if (!yu) return;
        if (!yu.arraySize || yu.stride === yu.floats) return void this.data.set(Ru, yu.offset);
        const Eu = Math.min(Ru.length, yu.floats * yu.arraySize);
        for (let Ku = 0; Ku < Eu; Ku++) this.data[yu.offset + Math.floor(Ku / yu.floats) * yu.stride + Ku % yu.floats] = Ru[Ku]
      }
      updateArray(uu, Ru) {
        this.updateFloatArray(uu, Ru)
      }
      setTexture(uu, Ru) {
        this.textures.set(uu, Ru), this.expected.delete(uu)
      }
      expectTexture(uu) {
        this.textures.set(uu, null), this.expected.add(uu)
      }
      write4(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = this.slots.get(uu);
        if (!mu) return;
        const Ju = this.data,
          Nu = mu.offset;
        Ju[Nu] = Ru, Qu > 1 && (Ju[Nu + 1] = yu), Qu > 2 && (Ju[Nu + 2] = Eu), Qu > 3 && (Ju[Nu + 3] = Ku)
      }
    }

    function SQ(uu, Ru) {
      const yu = zE,
        Eu = rQ.h,
        Ku = uu.lights,
        Qu = Math.min(uu.lightCount, 8);
      for (let mu = 0; mu < Qu; mu++) {
        const uu = yu.lights + mu * yu.lightStride,
          Qu = mu * rQ.e;
        Ru[uu] = Ku[Qu + Eu.vector], Ru[uu + 1] = Ku[Qu + Eu.vector + 1], Ru[uu + 2] = Ku[Qu + Eu.vector + 2], Ru[uu + 3] = Ku[Qu + Eu.kind] === rQ.g.directional ? 1 : 0, Ru[uu + 4] = Ku[Qu + Eu.diffuse], Ru[uu + 5] = Ku[Qu + Eu.diffuse + 1], Ru[uu + 6] = Ku[Qu + Eu.diffuse + 2], Ru[uu + 7] = Ku[Qu + Eu.range], Ru[uu + 8] = Ku[Qu + Eu.specular], Ru[uu + 9] = Ku[Qu + Eu.specular + 1], Ru[uu + 10] = Ku[Qu + Eu.specular + 2], Ru[uu + 11] = Ku[Qu + Eu.range]
      }
      Ru[yu.fogInfos] = uu.fogMode, Ru[yu.fogInfos + 1] = uu.fogStart, Ru[yu.fogInfos + 2] = uu.fogEnd, Ru[yu.fogInfos + 3] = uu.fogDensity, Ru[yu.fogColour] = uu.fogColour[0], Ru[yu.fogColour + 1] = uu.fogColour[1], Ru[yu.fogColour + 2] = uu.fogColour[2], Ru[yu.outputHeight] = uu.renderHeight, Ru[yu.animTick] = uu.animTick, Ru[yu.timeMs] = uu.timeMs
    }
    class pQ {
      constructor(uu) {
        this.instancesOf = uu
      }
      refreshModelUniforms(uu, Ru, yu, Eu) {
        const Ku = BQ(yu);
        if (Ku >= 0 && Ku === Ru.heldVersion && Ru.textures.get("diffuseSampler") === yu.diffuseTexture && Ru.textures.get("reflectionCubeSampler") === yu.reflectionTexture && Ru.textures.get("opacitySampler") === yu.opacityTexture && Ru.textures.get("emissiveSampler") === yu.emissiveTexture) return !0;
        if (Ku < 0)
          for (const Qu of this.instancesOf(yu)) Qu.heldVersion = -1;
        return this.writeModelUniforms(uu, Ru, yu, Eu), Ru.heldVersion = Ku, !1
      }
      writeModelUniforms(uu, Ru, yu, Eu) {
        const {
          ubo: Ku
        } = Ru, Qu = yu.diffuseTexture, mu = yu.diffuseColor;
        Ku.updateFloat4("vDiffuseColor", mu[0], mu[1], mu[2], yu.alpha), Qu && (Ku.updateFloat2("vDiffuseInfos", Qu.uvSet, Qu.level), Ku.updateMatrixFloats("diffuseMatrix", Qu.matrix)), Ku.updateFloat("alphaCutOff", yu.alphaCutOff), Ku.updateFloatsFrom("vEmissiveColor", yu.emissiveColor, 0, 3), Ku.updateFloat3TimesFloats("vAmbientColor", Eu.ambientColour, 0, yu.ambientColor);
        const Ju = yu.specularColor;
        Ku.updateFloat4("vSpecularColor", Ju[0], Ju[1], Ju[2], yu.specularPower), Ku.setTexture("diffuseSampler", Qu);
        const Nu = yu.opacityTexture;
        Nu && (Ku.updateFloat2("vOpacityInfos", Nu.uvSet, Nu.level), Ku.updateMatrixFloats("opacityMatrix", Nu.matrix)), Ku.setTexture("opacitySampler", Nu);
        const Xu = yu.emissiveTexture;
        Xu && (Ku.updateFloat2("vEmissiveInfos", Xu.uvSet, Xu.level), Ku.updateMatrixFloats("emissiveMatrix", Xu.matrix)), Ku.setTexture("emissiveSampler", Xu);
        const Vu = yu.reflectionTexture;
        Vu && Ku.updateMatrixFloats("reflectionMatrix", Vu.matrix), Ku.updateFloat2("vReflectionInfos", Vu ? Vu.level * uu.iblIntensity : 0, yu.roughness), Ku.setTexture("reflectionCubeSampler", Vu);
        const ru = uu.eS();
        for (const {
            feature: Su,
            state: pu,
            active: Tu
          }
          of yu.features) {
          var Bu, xu;
          if (Tu) null === (Bu = (xu = (0, VR.l)(Su)).bind) || void 0 === Bu || Bu.call(xu, pu, Ku, uu, ru)
        }
      }
    }

    function TQ(uu) {
      const Ru = uu.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(Ru) ? "u32" : /i32|^vec\di$/.test(Ru) ? "i32" : "f32"
    }

    function WQ(uu, Ru) {
      const yu = uu.getSize(),
        Eu = TQ(Ru),
        Ku = uu => 4 === yu ? `${uu}x4` : 2 === yu ? `${uu}x2` : null;
      if ("f32" === Eu) {
        if (5126 === uu.type) return 1 === yu ? "float32" : yu >= 2 && yu <= 4 ? `float32x${yu}` : null;
        if (!uu.normalized) return null;
        switch (uu.type) {
          case 5121:
            return Ku("unorm8");
          case 5120:
            return Ku("snorm8");
          case 5123:
            return Ku("unorm16");
          case 5122:
            return Ku("snorm16")
        }
        return null
      }
      const Qu = "u32" === Eu ? "uint" : "sint";
      switch (uu.type) {
        case 5125:
        case 5124:
          return 1 === yu ? `${Qu}32` : yu <= 4 ? `${Qu}32x${yu}` : null;
        case 5121:
        case 5120:
          return Ku(`${Qu}8`);
        case 5123:
        case 5122:
          return Ku(`${Qu}16`)
      }
      return null
    }

    function jQ(uu) {
      var Ru;
      const yu = /(8|16|32)(?:x(\d))?$/.exec(uu);
      return yu ? Number(yu[1]) / 8 * Number(null !== (Ru = yu[2]) && void 0 !== Ru ? Ru : 1) : 4
    }
    class HQ {
      constructor(uu, Ru, yu) {
        this.resources = uu, this.limits = Ru, this.warnOnce = yu, this.layouts = new Map
      }
      resolveInputs(uu, Ru, yu, Eu) {
        const Ku = [],
          Qu = yu.program.attributes,
          mu = [];
        for (let Vu = 0; Vu < Qu.length; Vu++) {
          const yu = Qu[Vu],
            Ju = yu.optional ? null : this.resources.vertexInput(uu, yu.name, Eu);
          if (!Ju) {
            const uu = TQ(yu.type),
              Ru = "u32" === uu ? "uint32x4" : "i32" === uu ? "sint32x4" : "float32x4";
            mu.push(null);
            const Eu = Ku.find((uu => null === uu.data));
            Eu ? Eu.attributes.push({
              shaderLocation: Vu,
              offset: 0,
              format: Ru
            }) : Ku.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Vu,
                offset: 0,
                format: Ru
              }]
            });
            continue
          }
          const Nu = Ju.getBuffer();
          mu.push(Ju);
          const Xu = WQ(Ju, yu.type);
          if (!Xu) return this.warnOnce(`format:${Ru}:${yu.name}`, `${Ru}'s ${yu.name} (type ${Ju.type}, size ${Ju.getSize()}) has no WebGPU vertex format`), null;
          const ru = Ju.getIsInstanced() ? "instance" : "vertex",
            Bu = Ju.byteStride,
            xu = jQ(Xu),
            Su = Ku.find((uu => uu.data === Nu && uu.stride === Bu && uu.step === ru && Ju.byteOffset >= uu.base && Ju.byteOffset - uu.base + xu <= Bu));
          Su ? Su.attributes.push({
            shaderLocation: Vu,
            offset: Ju.byteOffset - Su.base,
            format: Xu
          }) : Ku.push({
            data: Nu,
            base: Ju.byteOffset,
            stride: Bu,
            step: ru,
            attributes: [{
              shaderLocation: Vu,
              offset: 0,
              format: Xu
            }]
          })
        }
        if (Ku.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Ru}`, `${Ru} needs ${Ku.length} vertex buffers`), null;
        let Ju = "";
        for (const Vu of Ku) {
          Ju += `${Vu.stride}${"instance"===Vu.step?"i":"v"}`;
          for (const uu of Vu.attributes) Ju += `,${uu.shaderLocation}:${uu.offset}:${uu.format}`;
          Ju += ";"
        }
        let Nu = this.layouts.get(Ju);
        Nu || (Nu = {
          key: Ju,
          buffers: Ku.map((uu => ({
            arrayStride: uu.stride,
            stepMode: uu.step,
            attributes: uu.attributes
          }))),
          instanceEnds: Ku.map((uu => {
            let Ru = -1;
            if ("instance" === uu.step)
              for (const yu of uu.attributes) Ru = Math.max(Ru, yu.offset + jQ(yu.format));
            return Ru
          }))
        }, this.layouts.set(Ju, Nu));
        const Xu = Ku.map((uu => uu.base));
        return {
          program: yu,
          sources: mu,
          layout: Nu,
          slotData: Ku.map((uu => uu.data)),
          n_: Xu,
          buffers: [],
          offsets: Xu,
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

    function dQ(uu, Ru, yu, Eu) {
      const Ku = Ru.program.program.attributes;
      for (let Qu = 0; Qu < Ku.length; Qu++) {
        if ((Ku[Qu].optional ? null : yu.vertexInput(uu, Ku[Qu].name, Eu)) !== Ru.sources[Qu]) return !1
      }
      return !0
    }
    const bQ = 64;
    class CQ {
      constructor(uu, Ru, yu, Eu) {
        this.device = uu, this.layout = Ru, this.frameBuffer = yu, this.label = Eu, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(uu) {
        if (uu * bQ <= this.data.length) return !1;
        let Ru = 2 * this.data.length;
        for (; uu * bQ > Ru;) Ru *= 2;
        const yu = new Float32Array(Ru);
        return yu.set(this.data), this.data = yu, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ku = this.data,
          Qu = uu * bQ;
        let mu = Ku[Qu + 16] !== yu;
        for (let Ju = 0; Ju < 16 && !mu; Ju++) mu = Ku[Qu + Ju] !== Ru[Eu + Ju];
        if (mu) {
          for (let uu = 0; uu < 16; uu++) Ku[Qu + uu] = Ru[Eu + uu];
          Ku[Qu + 16] = yu
        }
        return mu
      }
      upload(uu, Ru) {
        this.device.queue.writeBuffer(this.buffer, uu * FE, this.data, uu * bQ, (Ru - uu) * bQ)
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

    function kQ(uu) {
      return uu.gpu[Mu.e.lite] ??= uu.materials.map(((Ru, yu) => ({
        parts: uu,
        range: yu,
        owner: uu.owner
      })))
    }

    function eQ(uu) {
      var Ru, yu, Eu;
      return null !== (Ru = null !== (yu = null === (Eu = uu.parts.materials[uu.range]) || void 0 === Eu ? void 0 : Eu.mirror) && void 0 !== yu ? yu : uu.owner.material) && void 0 !== Ru ? Ru : null
    }
    const AQ = ["opaque", "alphaTest", "transparent", "text"];
    class DQ {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, XR.c)("Lite: ")
      }
      attach(uu, Ru) {
        this.model = uu, this.mirror = Ru
      }
      get worlds() {
        return this.model.nodes.Fr
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(uu) {
        return this.groups.get(uu)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(uu) {
        for (const [Ru, yu] of this.groups)
          for (const Eu of AQ)
            for (const Ku of yu[Eu].units) uu(Ku.owner, "text" === Eu ? "transparent" : Eu, Ru)
      }
      select(uu, Ru) {
        this.frame++, this.selectedCount = 0;
        for (const Ju of this.groups.values())
          for (const uu of AQ) Ju[uu].units.length = 0, Ju[uu].rows.length = 0;
        const {
          model: yu,
          mirror: Eu
        } = this;
        if (!yu || !Eu || !uu) return;
        this.rows.length < yu.nodes.Nr && (this.rows = new Int32Array(yu.nodes.Nr));
        const Ku = this.rows,
          Qu = yu.meshes;
        for (let Ju = 0; Ju < Qu.looseCount; Ju++) {
          const uu = Qu.loose[Ju],
            yu = Eu.nodes[uu];
          yu && !yu.isBlocked && yu.isEnabled() && !yu.pp.hasAZeroComponent && Qu.selects(uu, Ru.frustum) && (this.activate(yu, uu), this.selectedCount++)
        }
        const mu = Qu.selectTextPlanes(Ru.frustum, Ku);
        for (let Ju = 0; Ju < mu; Ju++) {
          const Ru = Ku[Ju],
            Qu = Eu.nodes[Ru],
            mu = yu.meshes.parts[Ru];
          if (!Qu.isVisible || !(Qu.visibility > 0) || 0 === (Qu.layerMask & uu.layerMask) || !mu) continue;
          const Nu = this.groupOf(yu.meshes.layer[Ru]).text;
          for (const uu of kQ(mu)) Nu.units.push(uu), Nu.rows.push(Ru);
          this.selectedCount++
        }
      }
      instanceBatch(uu) {
        const Ru = this.batchOf(uu);
        return Ru.dispatched || (Ru.dispatched = Ru.renderSelf = !0, Ru.row = this.rowOf(uu)), Ru
      }
      rowOf(uu) {
        return uu.row
      }
      activate(uu, Ru) {
        if (!uu.ZD) {
          const yu = uu;
          if (yu.HKu) {
            const uu = this.batchOf(yu);
            uu.dispatched = !0, uu.renderSelf = !0, uu.row = Ru
          }
          return void this.dispatch(yu, Ru, Ru)
        }
        const yu = uu,
          Eu = yu.dKu;
        if (Eu._getWorldMatrixDeterminant() >= 0 !== yu._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Eu.name}`, `A mirrored InstancedMesh of ${Eu.name} is not drawn yet`);
        const Ku = this.batchOf(Eu);
        Ku.instances.push(yu), Ku.rows.push(Ru), Ku.dispatched || (Ku.dispatched = !0, this.dispatch(Eu, Ru, this.rowOf(Eu)))
      }
      batchOf(uu) {
        let Ru = this.batches.get(uu);
        return Ru || (Ru = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(uu, Ru)), Ru.frame !== this.frame && (Ru.frame = this.frame, Ru.dispatched = !1, Ru.renderSelf = !1, Ru.instances.length = 0, Ru.rows.length = 0), Ru
      }
      dispatch(uu, Ru, yu) {
        const {
          layer: Eu,
          parts: Ku
        } = this.model.meshes;
        if (!Ku[Ru]) return;
        const Qu = this.groupOf(Eu[Ru]),
          mu = uu;
        for (const Ju of kQ(Ku[Ru])) {
          const uu = eQ(Ju);
          if (!uu) continue;
          const Ru = uu.needAlphaBlendingForMesh(mu) ? Qu.transparent : uu.needAlphaTestingForMesh(mu) ? Qu.alphaTest : Qu.opaque;
          Ru.units.push(Ju), Ru.rows.push(yu)
        }
      }
      groupOf(uu) {
        let Ru = this.groups.get(uu);
        return Ru || (Ru = {
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
        }, this.groups.set(uu, Ru)), Ru
      }
    }
    class MQ {
      constructor() {
        this.jJ = new Map, this.enabled = [], this.groups = new Map, this.kx = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(uu) {
        if (this.jJ.has(uu)) return;
        const Ru = {
          mesh: uu,
          observer: uu.onEffectiveEnabledStateChangedObservable.add((uu => {
            this.tC(Ru, uu)
          })),
          index: -1,
          steady: null
        };
        this.jJ.set(uu, Ru), this.tC(Ru, uu.isEnabled())
      }
      remove(uu) {
        const Ru = this.jJ.get(uu);
        Ru && (Ru.observer.remove(!0), this.tC(Ru, !1), this.jJ.delete(uu))
      }
      base(uu) {
        return this.jJ.get(uu)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          jJ: this.jJ.size
        }
      }
      forEachSelected(uu) {
        for (const [Ru, yu] of this.groups) {
          for (const Eu of yu.opaque) uu(Eu.owner, "opaque", Ru);
          for (const Eu of yu.transparent) uu(Eu.owner, "transparent", Ru)
        }
        for (const Ru of this.kx) uu(Ru.mesh, "opaque", 0)
      }
      group(uu) {
        return this.groups.get(uu)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(uu, Ru) {
        this.drawn = 0, this.selected = 0, this.kx.length = 0;
        for (const Eu of this.groups.values()) Eu.opaque.length = 0, Eu.transparent.length = 0;
        if (!uu) return;
        const yu = this.enabled;
        for (let Eu = 0; Eu < yu.length; Eu++) {
          const Ku = yu[Eu];
          if (Ku.steady && Ru(Ku, uu)) {
            this.selected++, this.kx.push(Ku);
            continue
          }
          const Qu = Ku.mesh;
          if (Qu.isBlocked || Qu.pp.hasAZeroComponent) continue;
          if (!Qu.isVisible || Qu.visibility <= 0 || 0 === (Qu.layerMask & uu.layerMask)) continue;
          if (Qu.HKu) {
            this.warned.has(Qu.name) || (this.warned.add(Qu.name), console.warn(`Lite: thin instance base ${Qu.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: mu
          } = Qu;
          if (!mu) continue;
          Qu.computeWorldMatrix(), this.selected++;
          const Ju = this.listsFor(Qu.renderingGroupId);
          for (const uu of kQ(mu)) {
            const Ru = eQ(uu);
            Ru && (Ru.needAlphaBlendingForMesh(Qu) ? Ju.transparent.push(uu) : Ju.opaque.push(uu))
          }
        }
      }
      tC(uu, Ru) {
        if (Ru === uu.index >= 0) return;
        uu.steady = null;
        const yu = this.enabled;
        if (Ru) uu.index = yu.length, yu.push(uu);
        else {
          const Ru = yu.pop();
          Ru !== uu && (yu[uu.index] = Ru, Ru.index = uu.index), uu.index = -1
        }
      }
      listsFor(uu) {
        let Ru = this.groups.get(uu);
        return Ru || (Ru = {
          opaque: [],
          transparent: []
        }, this.groups.set(uu, Ru)), Ru
      }
    }
    var IQ = yu(39286);
    class GQ {
      constructor() {
        this.bundle = null, this.stale = !0, this.jJ = new Set
      }
    }
    class UQ {
      constructor(uu, Ru, yu) {
        this.device = uu, this.slots = Ru, this.host = yu, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new GQ, this.rA = new GQ, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new oK, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(uu) {
          var Ru, yu;
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Ru = null === (yu = globalThis.navigator) || void 0 === yu ? void 0 : yu.userAgent) && void 0 !== Ru ? Ru : "";
          const Ku = uu.adapterInfo;
          return "intel" === (null === Ku || void 0 === Ku ? void 0 : Ku.vendor) && "gen-12lp" === Ku.architecture && Eu.includes("Windows")
        }(uu), (0, IQ.G)(this.direct)
      }
      gH() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, IQ.G)(this.directThisFrame)
      }
      add(uu, Ru, yu, Eu) {
        let Ku = this.records.get(uu);
        return Ku || (Ku = this.createRecord(uu), this.records.set(uu, Ku)), Ku.recorded && sQ(Ku, Ru) || (this.bundleOf(Ku).stale = !0), this.place(Ku, Ru, yu, Eu), Ku
      }
      bundleOf(uu) {
        return uu.rA ? this.rA : this.main
      }
      addAgain(uu, Ru, yu, Eu) {
        uu.recorded || (this.bundleOf(uu).stale = !0), this.place(uu, Ru, yu, Eu)
      }
      place(uu, Ru, yu, Eu) {
        uu.seen = this.frame, uu.rA && null === uu.draw && (this.rA.stale = !0), uu.draw = Ru, this.drawn++, yu && this.slots.write(uu.slot, yu, Eu) && (this.slotsFrom = Math.min(this.slotsFrom, uu.slot), this.slotsTo = Math.max(this.slotsTo, uu.slot));
        const Ku = this.args,
          Qu = 5 * uu.slot;
        Ku[Qu] === Ru.count && Ku[Qu + 1] === Ru.instances && Ku[Qu + 2] === Ru.first || (Ku[Qu] = Ru.count, Ku[Qu + 1] = Ru.instances, Ku[Qu + 2] = Ru.first, this.argsDirty = !0, this.rA.stale ||= uu.rA)
      }
      ZH() {
        for (const uu of this.records.values()) uu.seen !== this.frame && (uu.draw && (uu.draw = null, this.args[5 * uu.slot + 1] = 0, this.argsDirty = !0, this.rA.stale ||= uu.rA), this.frame - uu.seen > 120 && (this.records.delete(uu.unit), this.freeSlots.push(uu.slot), uu.recorded && (this.bundleOf(uu).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(uu) {
        for (const Ru of this.records.values()) Ru.draw && Ru.seen === this.frame && !Ru.rA && uu(Ru.draw, this.slots.data, Ru.slot * FE / 4)
      }
      resourceDestroyed(uu) {
        this.main.stale ||= this.main.jJ.has(uu), this.rA.stale ||= this.rA.jJ.has(uu)
      }
      execute(uu, Ru, yu) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(uu, Ru, yu, "direct"), this.drawn;
        const Eu = this.host.sceneGroup(Ru);
        if (!Eu) return this.main.bundle = null, this.rA.bundle = null, this.recordedSceneGroup = null, this.encode(uu, Ru, yu, "direct"), this.drawn;
        this.recordedTarget === yu && this.recordedSceneGroup === Eu || (this.recordedTarget = yu, this.recordedSceneGroup = Eu, this.main.stale = !0, this.rA.stale = !0);
        const Ku = this.main,
          Qu = this.rA;
        let mu = !1;
        !Ku.stale && Ku.bundle || (Ku.bundle = this.record(Ru, yu, Eu, "indirect"), mu = !0);
        const Ju = (0, IQ.k)();
        return (Qu.stale || this.rangedEpoch !== Ju) && (this.rangedEpoch = Ju, Qu.bundle = this.drawsRanged() ? this.record(Ru, yu, Eu, "rA") : this.noRangedBundle(), mu = !0), mu && (this.bundles = Qu.bundle ? [Ku.bundle, Qu.bundle] : [Ku.bundle]), uu.executeBundles(this.bundles), uu.setBindGroup(0, Eu), this.drawn
      }
      record(uu, Ru, yu, Eu) {
        const Ku = this.device.createRenderBundleEncoder({
          label: "rA" === Eu ? "thin-bases-ranged" : "thin-bases",
          colorFormats: uu._colorFormat ? [uu._colorFormat] : [],
          depthStencilFormat: uu._depthStencilFormat,
          sampleCount: uu._sampleCount
        });
        return Ku.setBindGroup(0, yu), this.encode(Ku, uu, Ru, Eu), Ku.finish()
      }
      noRangedBundle() {
        for (const uu of this.records.values()) uu.rA && (uu.recorded = !1);
        return this.rA.jJ.clear(), this.rA.stale = !1, null
      }
      drawsRanged() {
        for (const uu of this.records.values())
          if (uu.rA && uu.draw) return !0;
        return !1
      }
      encode(uu, Ru, yu, Eu) {
        const Ku = [];
        for (const Nu of this.records.values()) "direct" !== Eu && Nu.rA !== ("rA" === Eu) || (Nu.recorded = !1, Nu.draw && Ku.push(Nu));
        Ku.sort(tQ);
        const Qu = "direct" === Eu ? null : "rA" === Eu ? this.rA : this.main;
        null === Qu || void 0 === Qu || Qu.jJ.clear(), this.binder.reset();
        let mu = !1;
        for (const Nu of Ku) {
          var Ju;
          const Ku = Nu.draw,
            Xu = this.host.pipelineFor(Ku, Ru, yu);
          if (!Xu) {
            this.host.pipelineCompiling(Ku, yu) ? mu = !0 : Qu && this.keep(Nu, Ku, Qu.jJ);
            continue
          }
          let Vu;
          if (Nu.rA && "indirect" !== Eu) {
            const uu = Nu.unit.owner;
            Vu = "direct" === Eu && (0, IQ.w)(uu) || (0, IQ.l)(uu) || void 0
          }
          if (Qu && this.keep(Nu, Ku, Qu.jJ), 0 === (null === (Ju = Vu) || void 0 === Ju ? void 0 : Ju.count)) continue;
          this.binder.bind(uu, Ku, Xu, this.slots.bindGroup, Nu.slot * FE);
          const ru = 5 * Nu.slot;
          if ("indirect" === Eu) {
            Ku.indexBuffer ? uu.drawIndexedIndirect(this.argsBuffer, 4 * ru) : uu.drawIndirect(this.argsBuffer, 4 * ru);
            continue
          }
          const Bu = this.args;
          Vu ? nQ(uu, null !== Ku.indexBuffer, Bu, ru, Vu) : Ku.indexBuffer ? uu.drawIndexed(Bu[ru], Bu[ru + 1], Bu[ru + 2], 0, 0) : uu.draw(Bu[ru], Bu[ru + 1], Bu[ru + 2], 0)
        }
        Qu && (Qu.stale = mu)
      }
      keep(uu, Ru, yu) {
        uu.recorded = !0, uu.pipelineKey = Ru.pipelineKey, uu.materialGroup = Ru.material.bindGroup, uu.vertexBuffers.length = 0, uu.vertexBuffers.push(...Ru.vertexBuffers), uu.vertexOffsets = Ru.vertexOffsets, uu.indexBuffer = Ru.indexBuffer, uu.indexFormat = Ru.indexFormat;
        for (const Eu of Ru.vertexBuffers) yu.add(Eu);
        Ru.indexBuffer && yu.add(Ru.indexBuffer), yu.add(Ru.material.buffer);
        for (const Eu of Ru.material.bound) Eu && yu.add(Eu)
      }
      createRecord(uu) {
        let Ru = this.freeSlots.pop();
        return void 0 === Ru && (Ru = this.slotCount++, this.grow()), {
          unit: uu,
          slot: Ru,
          rA: void 0 !== (0, IQ.l)(uu.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.rA.stale = !0), 5 * this.slotCount > this.args.length) {
          const uu = new Uint32Array(2 * this.args.length);
          uu.set(this.args), this.args = uu, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function nQ(uu, Ru, yu, Eu, Ku) {
      const Qu = yu[Eu + 1],
        mu = Ku.data;
      for (let Ju = 0; Ju < Ku.count; Ju++) {
        const Ku = Math.min(mu[2 * Ju], Qu),
          Nu = Math.min(mu[2 * Ju + 1], Qu - Ku);
        0 !== Nu && (Ru ? uu.drawIndexed(yu[Eu], Nu, yu[Eu + 2], 0, Ku) : uu.draw(yu[Eu], Nu, yu[Eu + 2], Ku))
      }
    }

    function sQ(uu, Ru) {
      if (uu.pipelineKey !== Ru.pipelineKey || uu.materialGroup !== Ru.material.bindGroup || uu.indexBuffer !== Ru.indexBuffer || uu.indexFormat !== Ru.indexFormat || uu.vertexOffsets !== Ru.vertexOffsets || uu.vertexBuffers.length !== Ru.vertexBuffers.length) return !1;
      for (let yu = 0; yu < uu.vertexBuffers.length; yu++)
        if (uu.vertexBuffers[yu] !== Ru.vertexBuffers[yu]) return !1;
      return !0
    }

    function tQ(uu, Ru) {
      return OK(uu.draw, Ru.draw)
    }
    const lQ = new WeakMap,
      gQ = {
        depth: !1,
        sunShadow: !1
      };

    function cQ(uu, Ru) {
      let yu = lQ.get(uu);
      yu || (yu = new Map, lQ.set(uu, yu));
      const Eu = `${Ru.depth?"-depth":""}${Ru.sunShadow?"-shadow":""}${Ru.shadowMask?"-mask":""}`;
      let Ku = yu.get(Eu);
      if (!Ku) {
        const Qu = [{
          binding: DR.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: DR.k
          }
        }, {
          binding: DR.y,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        Ru.depth && Qu.push({
          binding: DR.s,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Ru.sunShadow && Qu.push(... function() {
          const uu = GPUShaderStage.FRAGMENT,
            Ru = DR.u;
          return [{
            binding: Ru.uniform,
            visibility: uu,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: Ru.WB,
            visibility: uu,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Ru.special,
            visibility: uu,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Ru.volume,
            visibility: uu,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: Ru.sampler,
            visibility: uu,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: Ru.entities,
            visibility: uu,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Ru.entityGrids,
            visibility: uu,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), Ru.shadowMask && Qu.push({
          binding: DR.w,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Ku = uu.createBindGroupLayout({
          label: `${Ru.depth?"terrain-":""}shader-pack-inputs${Eu}`,
          entries: Qu
        }), yu.set(Eu, Ku)
      }
      return Ku
    }

    function LQ(uu) {
      return cQ(uu, gQ)
    }

    function zQ(uu, Ru) {
      if (!Ru) return !1;
      const yu = (0, MR.e)(uu);
      return !!yu && gy(yu, Ru)
    }

    function FQ(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!XE(Ru)) return [];
      return [cQ(uu, {
        depth: KE(Ru.packVariant),
        sunShadow: zQ(Ru.packVariant, yu),
        shadowMask: Eu
      })]
    }
    class wQ {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = uu, this.sunShadow = yu, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(DR.k), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = uu.createBuffer({
          label: "shader-pack-inputs",
          size: DR.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Eu = (0, DR.B)(Ru);
        this.textures = uu.createBuffer({
          label: "shader-pack-textures",
          size: Eu.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), uu.queue.writeBuffer(this.textures, 0, Eu), this.bindGroup = uu.createBindGroup({
          label: "shader-pack-inputs",
          layout: LQ(uu),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: DR.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: DR.y,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(uu, Ru, yu) {
        (0, DR.F)(this.data, {
          seconds: uu.seconds(),
          lit: yu,
          renderOffset: uu.renderOffset(),
          duu: uu.duu(),
          eyePosition: Ru,
          shadowDirection: uu.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Eu = Ru ? this.sunShadow : null;
        if ((Ru || yu) && !Eu) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!uu && !Eu) return this.bindGroup;
        (uu && uu !== this.depthView || yu && yu !== this.maskView) && (this.depthView = null !== uu && void 0 !== uu ? uu : this.depthView, this.maskView = null !== yu && void 0 !== yu ? yu : this.maskView, this.groups.clear());
        const Ku = (uu ? 1 : 0) | (Eu ? 2 : 0) | (yu ? 4 : 0);
        let Qu = this.groups.get(Ku);
        if (!Qu) {
          const Ru = this.entries();
          uu && Ru.push({
            binding: DR.s,
            resource: uu
          }), Eu && Ru.push(...Eu.entries()), yu && Ru.push({
            binding: DR.w,
            resource: yu
          }), Qu = this.device.createBindGroup({
            label: `${uu||yu?"terrain-":""}shader-pack-inputs${uu?"-depth":""}${Eu?"-shadow":""}${yu?"-mask":""}`,
            layout: cQ(this.device, {
              depth: !!uu,
              sunShadow: !!Eu,
              shadowMask: !!yu
            }),
            entries: Ru
          }), this.groups.set(Ku, Qu)
        }
        return Qu
      }
      bind(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        uu.setBindGroup(DR.g, this.bindGroupFor(Ru, yu, Eu))
      }
    }

    function ZQ(uu, Ru, yu) {
      if (uu.gpuVersion === Ru.gpuBuffersVersion) return !0;
      let Eu;
      do {
        if (Eu = Ru.gpuBuffersVersion, !hQ(uu, Ru, yu)) return !1
      } while (Ru.gpuBuffersVersion !== Eu);
      return uu.gpuVersion = Eu, uu.fitInstances = 0, !0
    }

    function hQ(uu, Ru, yu) {
      let Eu = null;
      for (let Qu = 0; Qu < uu.slotData.length; Qu++) {
        var Ku;
        const mu = uu.slotData[Qu],
          Ju = mu ? Ru.gpuBuffer(mu) : yu;
        if (!Ju) return !1;
        mu && uu.layout.instanceEnds[Qu] < 0 && Ru.cover(mu, Number.POSITIVE_INFINITY), uu.buffers[Qu] = Ju;
        const Nu = uu.n_[Qu] + (mu ? Ru.gpuOffset(mu) : 0);
        Nu !== (null !== (Ku = Eu) && void 0 !== Ku ? Ku : uu.offsets)[Qu] && (Eu ??= uu.offsets.slice(), Eu[Qu] = Nu), uu.ends[Qu] = mu ? Ru.gpuEnd(mu) : Ju.size
      }
      return Eu && (uu.offsets = Eu), !0
    }

    function PQ(uu, Ru, yu, Eu) {
      if (Ru <= uu.fitInstances) return null;
      const {
        layout: Ku,
        ends: Qu,
        offsets: mu,
        slotData: Ju,
        n_: Nu
      } = uu;
      let Xu = !1;
      for (let Vu = 0; Vu < Ku.buffers.length; Vu++) {
        const uu = Ku.instanceEnds[Vu];
        if (uu < 0) continue;
        const Eu = (Ru - 1) * Ku.buffers[Vu].arrayStride + uu;
        if (Qu[Vu] - mu[Vu] < Eu) return {
          index: Vu,
          needed: Eu
        };
        const ru = Ju[Vu];
        ru && yu.cover(ru, Nu[Vu] + Eu) && (Xu = !0)
      }
      return Xu && ZQ(uu, yu, Eu), uu.fitInstances = Ru, null
    }
    var iQ = yu(37581),
      YQ = yu(37617);
    const oQ = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      qQ = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      OQ = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      vQ = `((vertexInputs.aPackedLightLevels >> 16u) | ${NR.b.placed}u)`,
      aQ = "u32(vertexInputs.aShaderPackItem.x)",
      fQ = `${NR.b.lifeform}u`;

    function um(uu) {
      return "item" === uu.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Rm = "bloxdSpEnchant",
      ym = "floor(finalWorld[3].xyz)";

    function Em(uu, Ru, yu) {
      return "placed" === Ru.kind && uu.reads[yu].includes("bloxdFragmentBlockPosition")
    }

    function Km(uu, Ru) {
      let [yu, Eu] = uu;
      return yu === Ru.point && Eu === Ru.code
    }

    function Qm(uu, Ru) {
      var yu, Eu, Ku;
      const Qu = null === (yu = uu.find((uu => uu.texture))) || void 0 === yu ? void 0 : yu.texture,
        mu = null === (Eu = uu.find((uu => uu.enchantTier))) || void 0 === Eu ? void 0 : Eu.enchantTier,
        Ju = null === (Ku = uu.find((uu => uu.overlay))) || void 0 === Ku ? void 0 : Ku.overlay,
        Nu = Ju ? Ru.filter((uu => Km(uu, Ju))).length : 0;
      return Ju && 1 === Nu ? {
        texture: Qu,
        overlay: Ju,
        enchantTier: mu
      } : {
        texture: Qu,
        enchantTier: mu
      }
    }

    function mm(uu) {
      if ("item" === uu.kind) {
        return {
          vertexFlags: `(${aQ} & 0xffffu)`,
          varying: "vPackItem",
          value: aQ,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return uu.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: vQ,
        varying: "vPackFlags",
        value: vQ,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Jm(uu) {
      return "lifeform" === uu.kind ? fQ : "0u"
    }

    function Nm(uu) {
      return !!uu.BLOXD_PLUGIN_ENCHANTMENT
    }

    function Xm(uu, Ru) {
      const {
        enchantTier: yu
      } = Ru;
      return yu && Nm(Ru.defines) && "lifeform" === Ru.kind && pm(uu, "enchantTier") ? yu : null
    }

    function Vm(uu, Ru) {
      return Nm(Ru.defines) && pm(uu, "enchantSpeed")
    }

    function rm(uu) {
      const {
        overlay: Ru,
        defines: yu
      } = uu;
      if (!Ru || !yu.DIFFUSE) return null;
      const Eu = yu.VERTEXCOLOR || yu.INSTANCESCOLOR && yu.INSTANCES;
      return `vec4f(${Ru.colour}.rgb * uniforms.vDiffuseInfos.y${Eu?" * fragmentInputs.vColor.rgb":""}, ${Ru.colour}.a)`
    }
    const Bm = "fragmentInputs.vPackTexture";

    function xm(uu) {
      const {
        atlas: Ru,
        defines: yu,
        texture: Eu
      } = uu;
      if (Ru || !yu.DIFFUSE) return null;
      if (Eu) return {
        texture: "diffuseSampler",
        ...Eu
      };
      const Ku = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===yu.DIFFUSEDIRECTUV?"vMainUV1":2===yu.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== uu.kind) return Ku;
      if (!yu.BLOXD_PLUGIN_ANIMATED) return {
        ...Ku,
        id: Bm
      };
      const Qu = Cu.c.WGSL,
        mu = (0, Cu.Db)(Qu, "uAnimStatesNum"),
        Ju = (0, Cu.eb)(Qu, (0, iQ.d)(Qu), mu),
        Nu = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${mu})`,
        layers: [Ju],
        uv: `vec2f(${Nu}.x, ${Nu}.y * ${mu} - ${Ju})`,
        levelUv: Nu,
        id: Bm
      }
    }

    function Sm(uu, Ru) {
      return "box" === Ru.kind && !!uu.hooks.surface && null !== xm(Ru)
    }

    function pm(uu, Ru) {
      return uu.reads.fragment.includes(Ru)
    }

    function Tm(uu) {
      return !!uu.BLOXD_LIGHTING && !uu.BLOXD_UNLIT
    }

    function Wm(uu, Ru, yu, Eu) {
      const Ku = uu.filter((uu => {
        let [yu, Eu] = uu;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === yu && Eu === Ru
      }));
      if (1 !== Ku.length) throw new Error(`A model program for shader packs has ${0===Ku.length?"no":"more than one"} ${Eu} code before fog (lite/modelShaderPack.ts)`);
      return uu.map((uu => uu === Ku[0] ? [uu[0], yu] : uu))
    }

    function jm(uu, Ru, yu, Eu) {
      const {
        hooks: Ku
      } = uu, {
        kind: Qu,
        defines: mu
      } = Ru, Ju = [...yu];
      var Nu;
      Ru.atlas && Ku.surface && Ju.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", hy("atlasIdxIn")]), "item" === Qu && Ju.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Cu.d)(Cu.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Sm(uu, Ru) && Ju.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Cu.d)(Cu.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Nu = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${wy}[min(u32(${Nu}) - 1u, arrayLength(&${wy}) - 1u)], ${Nu} > 0.5);\n`)]);
      const Xu = mm(Ru);
      Xu && (Ku.surface || Ku.light) && Ju.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Xu.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Xu.varying} = ${Xu.value};`]);
      let Vu = Eu;
      if (Em(uu, Ru, "fragment") && (Ju.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${ym});`]), Vu = [...Vu, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), pm(uu, "localPosition") && Ju.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${um(Ru)};`]), Nm(mu) && Ku.surface) {
        Vm(uu, Ru) && Ju.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const yu = Xm(uu, Ru);
        yu && Ju.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${yu});`]);
        const Eu = (0, Cu.sb)(Cu.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Vu = [...Wm(Vu, (0, YQ.h)(Cu.c.WGSL), Eu, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, YQ.c)(Rm)]]
      }
      const {
        overlay: ru
      } = Ru;
      ru && rm(Ru) && Ku.surface && (Vu = Vu.filter((uu => !Km(uu, ru))));
      const Bu = Ku.light ? function(uu) {
        return "placed" === uu.kind ? {
          name: "terrain",
          engine: (0, kR.W)(Cu.c.WGSL),
          pack: (0, kR.hb)(Cu.c.WGSL)
        } : uu.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, kR.O)(Cu.c.WGSL),
          pack: (0, kR.eb)(Cu.c.WGSL)
        } : null
      }(Ru) : null;
      if (Bu && (Vu = Wm(Vu, Bu.engine, Bu.pack, `${Bu.name} light`), "placed" !== Qu && Tm(mu))) {
        const uu = mu.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, Cu.Db)(Cu.c.WGSL, "uEntityLightLevels") : (0, Cu.Jb)(Cu.c.WGSL, "aLightLevels");
        Ju.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${kR.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, kR.fb)(Cu.c.WGSL, uu)])
      }
      return {
        vertexCode: Ju,
        fragmentCode: Vu
      }
    }

    function Hm(uu, Ru, yu, Eu) {
      return ty(uu, Ru, yu, Eu, "model")
    }
    const dm = "\t@builtin(position) position: vec4f,\n";

    function bm(uu, Ru) {
      const yu = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(uu)[0];
      return `${yu}${Ru}${uu.slice(yu.length)}`
    }

    function Cm(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Ku
      } = Ru, Qu = gy(Ru, Eu), {
        kind: mu,
        defines: Ju
      } = yu, Nu = function(uu, Ru) {
        var yu, Eu, Ku;
        const {
          defines: Qu
        } = Ru, mu = mm(Ru), Ju = !!Qu.FOG, Nu = Nm(Qu), Xu = null !== (yu = null === mu || void 0 === mu ? void 0 : mu.enchantTier) && void 0 !== yu ? yu : Xm(uu, Ru) ? "fragmentInputs.vPackEnchantTier" : "0u", Vu = "lifeform" === Ru.kind && !Qu.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Eu = null === mu || void 0 === mu ? void 0 : mu.vertexFlags) && void 0 !== Eu ? Eu : Jm(Ru),
          vertexLocalPosition: um(Ru),
          flags: null !== (Ku = null === mu || void 0 === mu ? void 0 : mu.flags) && void 0 !== Ku ? Ku : Jm(Ru),
          normal: "normalW",
          alpha: Vu ? "alpha * baseColor.a" : "alpha",
          alphaOut: Vu ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: Ju ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: Ju ? "1.0 - fog" : "0.0",
          enchantTier: Xu,
          enchantColour: Nu ? `${Rm}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Vm(uu, Ru) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: pm(uu, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: rm(Ru)
        }
      }(Ru, yu), Xu = uu.textures.filter((uu => /^textureAtlas\d+$/.test(uu.name))).length, Vu = yu.atlas && Xu > 0 ? {
        count: Xu,
        layers: yu.atlas.layers,
        width: yu.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: uu.material.slots.has("uAnimDataPerTex") ? (Ru, yu) => DE(Ru, yu, function(uu) {
          const Ru = uu.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            sr: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: uu => `uniforms.uAnimDataPerTex[${uu}]${Ru}`
          }
        }(uu)) : null
      } : null, ru = "placed" === mu ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Bu = null !== Vu && void 0 !== Vu ? Vu : xm(yu), xu = function(uu, yu) {
        let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,DR.D)()}${Ly(Ru,yu)}${Eu}${iy(uu)}${Uy}${ru}${Ru.code}`
      };
      let {
        vertex: Su,
        fragment: pu
      } = uu;
      const Tu = oy(Ku, Nu);
      if (Tu) {
        const uu = Em(Ru, yu, "vertex") ? `\tbloxdSpCell = ${ym};\n` : "";
        Su = Hm(Su, oQ, `${uu}${Tu.slice(1)}${oQ}`, "vertex")
      }
      const Wu = `${zy(Ru,Qu,function(uu,Ru){return Ru.TWOSIDEDLIGHTING?uu:`select(-(${uu}), ${uu}, fragmentInputs.frontFacing)`}(Nu.normal,Ju),Nu.flags)}${qy(Ku,Ru.strict,Ru.program,Bu,Nu)}`;
      Wu && (pu = Hm(pu, qQ, `${Wu.slice(1)}${qQ}`, "surface")), Qu && Ru.sunShadow && !Ju.TWOSIDEDLIGHTING && (pu = Hm(pu, dm, `${dm}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const ju = ay(Ku);
      if (ju) {
        const uu = vy(Ku, Tm(Ju), !0, Nu);
        pu = Hm(pu, OQ, `${uu}${ju.slice(1)}${OQ}`, "light")
      }
      const Hu = Sm(Ru, yu) ? Zy : "";
      return {
        ...uu,
        vertex: bm(Su, xu(Vu, !1, Hu)),
        fragment: bm(pu, xu(Bu, Qu))
      }
    }
    const km = {
      name: "earthSky",
      uniqueId: -1
    };
    class em {
      constructor(uu) {
        this.resources = uu, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const uu of this.instances.values()) uu.released = !0, this.resources.destroyBuffer(uu.buffer);
        this.instances.clear()
      }
    }

    function Am(uu) {
      return uu.failed && null !== uu.packGroup
    }
    class Dm {
      constructor(uu, Ru, yu) {
        this.device = uu, this.resources = Ru, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.A_ = new MQ, this.modelMeshes = new DQ, this.thinBundle = void 0, this.binder = new oK, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new pQ((uu => this.modelSlot(uu).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, XR.c)("Lite: "), this.renderStates = new VQ(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (uu, Ru) => this.keepSteady(uu, Ru), this.lists = new qK(this.modelMeshes, this.A_, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new mQ(Ru, this.warnOnce, ((uu, Ru, yu) => this.programWithModel(uu, Ru, yu)), Am), this.vertexLayouts = new HQ(Ru, uu.limits, this.warnOnce), this.sceneLayout = RR(uu), this.frameLayout = uu.createBindGroupLayout({
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
        }), this.frameBuffer = uu.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new CQ(uu, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = uu.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new UQ(uu, new CQ(uu, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (uu, Ru, yu) => this.pipelineFor(uu, Ru, yu),
          pipelineCompiling: (uu, Ru) => !uu.program.failed && !1 !== this.pipelines.get(`${uu.pipelineKey}|${Ru}`),
          sceneGroup: uu => {
            const Ru = yu(uu);
            return Ru || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), Ru
          }
        }), Ru.onDestroy = uu => {
          this.thinBundle.resourceDestroyed(uu)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ku = {
          order: uu,
          isTransparent: Ru,
          _direct: !Ru,
          bind: (uu, Ru) => this.createBinding(Ku, Ru, yu, Eu)
        };
        return Ku
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(uu, Ru, yu) {
        var Eu;
        let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = Ru, this.drawDefines.view = Ru, this.thinBundle.gH(), this.writeFrameUniforms();
        const Qu = null !== (Eu = null === Ku || void 0 === Ku ? void 0 : Ku.defineFor("model")) && void 0 !== Eu ? Eu : 0;
        this.drawDefines.modelPackVariant = Qu, Ku && 0 !== Qu && (this.packInputs ??= new wQ(this.device, Ku.textureLayers(), this.sunShadow), this.packInputs.write(Ku, Ru.eye, Ku.Up())), this.lists.clear(), this.slotCount = 0;
        const mu = uu.activeCamera;
        this.A_.select(mu, this.keepSteadyBase), this.modelMeshes.select(mu, Ru), yu && this.pushEarthSky(yu), this.lists.collect(uu), this.thinBundle.ZH(), this.uploadMeshSlots()
      }
      pushDraws(uu, Ru, yu, Eu, Ku, Qu) {
        let mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Ju = Qu.length;
        for (let Nu = 0; Nu < yu; Nu++) {
          const yu = Ru[Nu];
          let Ju = this.retainedDraw(uu, yu, Eu, Ku);
          if (void 0 === Ju && (Ju = this.drawFor(uu, yu, Eu, Ku), this.retain(yu, Ju)), Ju) {
            const uu = yu.owner,
              Ru = mu ? mu[Nu] : -1;
            Ju.slotOffset = Ru < 0 ? this.writeMeshSlot(uu.getWorldMatrix().m, uu.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[Ru], 16 * Ru), Qu.push(Ju)
          }
        }
        return Qu.length - Ju
      }
      bundleDraws(uu, Ru, yu) {
        let Eu = 0;
        for (const Ku of Ru) {
          let Ru = this.retainedDraw(uu, Ku, yu, !1);
          const Qu = void 0 !== Ru;
          if (void 0 === Ru && (Ru = this.drawFor(uu, Ku, yu, !1), this.retain(Ku, Ru)), Ru) {
            const uu = Ku.owner,
              yu = this.thinBundle.add(Ku, Ru, uu.getWorldMatrix().m, uu.visibility);
            Qu && this.steadyFrom(Ku, Ru, yu), Eu++
          }
        }
        return Eu
      }
      steadyFrom(uu, Ru, yu) {
        const Eu = uu.owner,
          Ku = this.A_.base(Eu),
          Qu = Eu.material,
          {
            drawState: mu,
            instance: Ju
          } = Ru.inputs.retained;
        if (!Ku || !Qu || 1 !== uu.parts.materials.length || eQ(uu) !== Qu) return;
        const Nu = Ku.steady ??= {
          unit: uu,
          material: Qu,
          visibility: 1,
          draw: Ru,
          record: yu,
          drawState: mu,
          instance: Ju,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Nu.unit = uu, Nu.material = Qu, Nu.visibility = Eu.visibility, Nu.draw = Ru, Nu.record = yu, Nu.drawState = mu, Nu.instance = Ju, Nu.bindGroup = Ju.bindGroup, Nu.gpuVersion = this.resources.gpuBuffersVersion, Nu.fitInstances = Ru.inputs.fitInstances, Nu.worldFlag = Eu.getWorldMatrix().updateFlag, Nu.handedFrame = this.frame
      }
      keepSteady(uu, Ru) {
        const yu = uu.steady;
        if (yu.handedFrame !== this.frame - 1 || (this.frame + yu.phase) % 8 === 0) return !1;
        const Eu = uu.mesh,
          {
            unit: Ku,
            draw: Qu,
            instance: mu,
            drawState: Ju
          } = yu,
          Nu = Eu.forcedInstanceCount || Eu.F_;
        if (!Eu.isVisible || Eu.HKu || Eu.visibility !== yu.visibility || 0 === (Eu.layerMask & Ru.layerMask) || Eu.material !== yu.material || 0 !== Eu.renderingGroupId || Eu.hasVertexAlpha || !this.drawDefines.definesHold(Ju, Ku, Ju.instancing) || yu.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Qu.inputs, Ku, Ju.instancing, Qu.program) || Qu.program.failed || mu.released || Nu <= 0 || Nu > yu.fitInstances) return !1;
        if (mu.frame !== this.frame && this.bindMaterial(mu, this.modelUniforms.refreshModelUniforms(Eu.lD(), mu, mu.model, this.view)), !mu.bindable || mu.bindGroup !== yu.bindGroup) return !1;
        const Xu = Eu.computeWorldMatrix(),
          Vu = Xu.updateFlag !== yu.worldFlag;
        return yu.worldFlag = Xu.updateFlag, Qu.instances = Nu, this.thinBundle.addAgain(yu.record, Qu, Vu ? Xu.m : null, yu.visibility), yu.handedFrame = this.frame, this.A_.drawn++, !0
      }
      retainedDraw(uu, Ru, yu, Eu) {
        const Ku = this.inputs.get(Ru),
          Qu = null === Ku || void 0 === Ku ? void 0 : Ku.retained;
        if (!Ku || !Qu) return;
        const {
          drawState: mu,
          program: Ju,
          instance: Nu,
          instancing: Xu
        } = Qu, Vu = Ru.owner;
        if (uQ(Vu) !== Xu) return;
        const ru = this.instanceCount(Vu, Xu);
        if (ru <= 0) return null;
        if (Nu.released || Ju.failed || mu.program !== Ju || !this.drawDefines.programCurrent(mu, Ru, Xu, yu) || !this.inputsStamped(Ku, Ru, Xu, Ju) || Vu.isUnIndexed !== Qu.unIndexed || this.indexKey(Ru) !== Qu.indexData) return;
        if (Qu.indexBuffer && Qu.gpuVersion !== this.resources.gpuBuffersVersion) {
          const uu = this.resources.gpuBuffer(Qu.indexData);
          if (!uu) return;
          Qu.indexBuffer = uu, Qu.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Bu = !1;
        if (Nu.frame !== this.frame && (Bu = this.modelUniforms.refreshModelUniforms(uu, Nu, Nu.model, this.view)), !this.bindMaterial(Nu, Bu) || !this.withGpuBuffers(Ku) || !this.instanceBuffersFit(Vu.name, Ku, ru)) return null;
        const xu = this.makeDraw(Ju, Ku, this.renderStates.renderState(mu.model, Vu, Eu, Ku.state), Nu, ru);
        return this.setRange(xu, Ru, Qu.indexBuffer, Qu.indexData), xu
      }
      retain(uu, Ru) {
        const yu = this.drawDefines.drawStates.get(uu);
        if (!Ru || !yu || yu.program !== Ru.program) {
          const Ru = this.inputs.get(uu);
          return void(Ru && (Ru.retained = null))
        }
        const Eu = uu.owner,
          Ku = yu.instancing,
          Qu = this.indexKey(uu),
          mu = Ru.inputs.retained;
        mu ? (mu.drawState = yu, mu.instancing = Ku, mu.program = Ru.program, mu.instance = Ru.material, mu.indexData = Qu, mu.unIndexed = Eu.isUnIndexed, mu.indexBuffer = Ru.indexBuffer, mu.gpuVersion = this.resources.gpuBuffersVersion) : Ru.inputs.retained = {
          drawState: yu,
          instancing: Ku,
          program: Ru.program,
          instance: Ru.material,
          indexData: Qu,
          unIndexed: Eu.isUnIndexed,
          indexBuffer: Ru.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(uu, Ru, yu, Eu) {
        const Ku = Ru.owner,
          Qu = eQ(Ru);
        if (!Qu) return null;
        const mu = Qu.getClassName();
        let Ju = null;
        if (function(uu) {
            return "LinesMesh" === uu.getClassName()
          }(Ku)) {
          if (! function(uu) {
              return "ShaderMaterial" === uu.getClassName() && "color" === uu.shaderPath
            }(Qu)) return this.warnOnce(`lines:${mu}`, `A LinesMesh with a ${mu} is not drawn yet (${Qu.name})`), null;
          Ju = Ku
        } else if ("StandardMaterial" !== mu && "LiteMaterial" !== mu) return this.warnOnce(`class:${mu}`, `${mu} is not drawn yet (${Qu.name})`), null;
        const Nu = uQ(Ku),
          Xu = this.instanceCount(Ku, Nu);
        if (Xu <= 0) return null;
        const Vu = Ju ? this.lineProgramFor(Ku, yu, Nu) : this.drawDefines.programFor(uu, Ru, Qu, yu, Nu);
        if (!Vu || Vu.failed) return null;
        const ru = Ju ? null : this.drawDefines.drawStates.get(Ru).model,
          Bu = ru ? this.modelInstance(ru, Vu) : this.materialInstance(Ku, Vu);
        let xu = !1;
        if (Bu.frame !== this.frame && (Ju ? ju(Bu.ubo, Ju) : xu = this.modelUniforms.refreshModelUniforms(uu, Bu, Bu.model, this.view)), !this.bindMaterial(Bu, xu)) return null;
        const Su = this.meshInputs(Ru, Vu, Nu);
        if (!Su || !this.instanceBuffersFit(Ku.name, Su, Xu)) return null;
        const pu = this.indexKey(Ru);
        let Tu = null;
        if (pu && !Ku.isUnIndexed && (Tu = this.resources.gpuBuffer(pu), !Tu)) return null;
        const Wu = this.renderStates.renderState(null !== ru && void 0 !== ru ? ru : Qu, Ku, Eu, Su.state, Ju ? "line-list" : "triangle-list"),
          Hu = this.makeDraw(Vu, Su, Wu, Bu, Xu);
        return this.setRange(Hu, Ru, Tu, pu), Hu
      }
      indexKey(uu) {
        const Ru = KQ(uu);
        return Ru ? this.resources.modelIndex(Ru) : null
      }
      setRange(uu, Ru, yu, Eu) {
        yu && (uu.indexBuffer = yu, uu.indexFormat = this.resources.indexFormat(Eu));
        const Ku = 4 * Ru.range + (yu ? 0 : 2);
        uu.unit = Ru, uu.first = Ru.parts.yT[Ku], uu.count = Ru.parts.yT[Ku + 1]
      }
      makeDraw(uu, Ru, yu, Eu, Ku) {
        Ru.state !== yu && (Ru.state = yu, Ru.pipelineKey = `${uu.id}|${Ru.layout.key}|${yu.key}`, Ru.pipeline = null);
        const Qu = Ru.draw ??= {
          program: uu,
          inputs: Ru,
          pipelineKey: "",
          layout: Ru.layout,
          state: yu,
          material: Eu,
          slotOffset: 0,
          vertexBuffers: Ru.buffers,
          vertexOffsets: Ru.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Ku,
          unit: null
        };
        return Qu.program = uu, Qu.pipelineKey = Ru.pipelineKey, Qu.state = yu, Qu.material = Eu, Qu.vertexOffsets = Ru.offsets, Qu.indexBuffer = null, Qu.instances = Ku, Qu
      }
      instanceCount(uu, Ru) {
        switch (Ru) {
          case "thin":
            return uu.forcedInstanceCount || uu.F_;
          case "instanced":
            return this.prepareInstances(uu);
          case "none":
            return 1
        }
      }
      prepareInstances(uu) {
        const Ru = function(uu, Ru) {
          const yu = Ru._userInstancedBuffersStorage,
            Eu = uu.batchUploads.get(Ru);
          if (Eu) {
            var Ku;
            if (Eu.layout === (null !== (Ku = null === yu || void 0 === yu ? void 0 : yu.interleavedKinds) && void 0 !== Ku ? Ku : null)) return Eu;
            Eu.release()
          }
          return new iu(uu, Ru, yu)
        }(this.resources, uu);
        return Ru.frame !== this.frame && Ru.pack(uu, this.modelMeshes.instanceBatch(uu), this.modelMeshes.worlds, this.frame), Ru.count
      }
      programWithModel(uu, Ru, yu) {
        const Eu = this.modelSlot(uu),
          Ku = JQ(Eu, uu, yu),
          Qu = this.drawDefines.modelPackKind(uu),
          mu = Qu ? function(uu, Ru, yu, Eu) {
            const Ku = (0, Au.u)(uu, ku.j.name),
              Qu = [];
            for (const {
                feature: Nu,
                state: Xu,
                active: Vu
              }
              of uu.features) {
              var mu, Ju;
              const uu = Vu ? null === (mu = (Ju = (0, VR.l)(Nu)).ix) || void 0 === mu ? void 0 : mu.call(Ju, Xu) : void 0;
              uu && Qu.push(uu)
            }
            return {
              kind: Ru,
              atlas: null !== Ku && void 0 !== Ku && Ku.active ? (0, ku.e)(Ku.state) : null,
              defines: yu,
              ...Qm(Qu, Eu)
            }
          }(uu, Qu, Ru, Eu.fragmentCode) : null;
        if (mu && function(uu) {
            const Ru = uu.defines;
            return (null === uu.atlas || !!Ru.DIFFUSE && 1 === Ru.DIFFUSEDIRECTUV) && !!Ru.NORMAL && !Ru.REFLECTION && !Ru.EMISSIVEASILLUMINATION && !Ru.LINKEMISSIVEWITHDIFFUSE
          }(mu)) {
          const yu = this.modelPackProgram(uu, Ru, `${Ku}#${Qu}#sp${this.drawDefines.modelPackVariant}`, Eu, mu);
          if (yu && !yu.failed) return yu
        }
        const Ju = this.programs.get(Ku);
        if (Ju || this.unbuildable.has(Ku)) return null !== Ju && void 0 !== Ju ? Ju : null;
        let Nu;
        try {
          Nu = JK({
            defines: yQ(Ru),
            vertexCode: Eu.vertexCode,
            fragmentCode: Eu.fragmentCode,
            pluginUniforms: Eu.pluginUniforms
          })
        } catch (Xu) {
          return this.unbuildable.add(Ku), this.warnOnce(`build:${Ku}`, `could not build a program for ${uu.name}: ${String(Xu)}`), null
        }
        return this.createProgram(Ku, Nu, "standard")
      }
      modelPackProgram(uu, Ru, yu, Eu, Ku) {
        const Qu = this.programs.get(yu);
        if (Qu || this.unbuildable.has(yu)) return null !== Qu && void 0 !== Qu ? Qu : null;
        const mu = this.drawDefines.modelPackVariant;
        let Ju;
        try {
          const uu = function(uu) {
              return (0, MR.d)(uu, "model")
            }(mu),
            yu = jm(uu, Ku, Eu.vertexCode, Eu.fragmentCode);
          Ju = Cm(JK({
            defines: yQ(Ru),
            ...yu,
            pluginUniforms: Eu.pluginUniforms
          }), uu, Ku, !!this.sunShadow)
        } catch (Vu) {
          return this.unbuildable.add(yu), this.warnOnce(`build:${yu}`, `could not build a shader pack program for ${uu.name}, which draws without the pack: ${String(Vu)}`), null
        }
        const Nu = zQ(mu, !!this.sunShadow),
          Xu = {
            group: this.packInputs.bindGroupFor(null, Nu),
            layout: cQ(this.device, {
              depth: !1,
              sunShadow: Nu
            })
          };
        return this.createProgram(yu, Ju, function(uu) {
          return `standard-sp${uu}`
        }(mu), Xu)
      }
      lineProgramFor(uu, Ru, yu) {
        const Eu = Wu(uu, yu, Ru, this.view);
        let Ku = this.linePrograms.get(Eu);
        var Qu;
        return Ku || (Ku = this.createProgram(`lines#${Eu}`, (Qu = function(uu) {
          const Ru = new Map;
          for (let yu = 0; yu < Xu.length; yu++) uu & 1 << yu && Ru.set(Xu[yu], !0);
          return Ru
        }(Eu), rK({
          defines: Qu,
          vertex: XK,
          fragment: VK,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Eu, Ku)), Ku
      }
      createProgram(uu, Ru, yu) {
        var Eu;
        let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Qu = this.nextProgramId++,
          mu = `${yu}-${Qu}`,
          Ju = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Nu = [{
            binding: 0,
            visibility: Ju,
            buffer: {
              type: "uniform"
            }
          }];
        for (const ru of Ru.textures) Nu.push({
          binding: ru.binding,
          visibility: Ju,
          texture: {
            viewDimension: ru.dimension
          }
        }), Nu.push({
          binding: ru.samplerBinding,
          visibility: Ju,
          sampler: {}
        });
        const Xu = this.device.createBindGroupLayout({
            label: mu,
            entries: Nu
          }),
          Vu = {
            key: uu,
            id: Qu,
            kind: yu,
            program: Ru,
            vertex: this.device.createShaderModule({
              label: `${mu}-vertex`,
              code: Ru.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${mu}-fragment`,
              code: Ru.fragment
            }),
            materialLayout: Xu,
            pipelineLayout: this.device.createPipelineLayout({
              label: mu,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Xu, ...Ku ? [Ku.layout] : []]
            }),
            packGroup: null !== (Eu = null === Ku || void 0 === Ku ? void 0 : Ku.group) && void 0 !== Eu ? Eu : null,
            failed: !1
          };
        return this.programs.set(uu, Vu), Vu
      }
      writeFrameUniforms() {
        const uu = this.frameUniforms;
        SQ(this.view, uu), this.device.queue.writeBuffer(this.frameBuffer, 0, uu)
      }
      materialInstance(uu, Ru) {
        let yu = this.materials.get(uu);
        if (!yu) {
          const Ru = new Map;
          this.materials.set(uu, Ru), uu.zD.addOnce((() => {
            for (const uu of Ru.values()) uu.released = !0, this.resources.destroyBuffer(uu.buffer);
            this.materials.delete(uu)
          })), yu = Ru
        }
        let Eu = yu.get(Ru.key);
        return Eu || (Eu = this.newMaterialInstance(uu, null, Ru), yu.set(Ru.key, Eu)), Eu
      }
      modelInstance(uu, Ru) {
        const yu = this.modelSlot(uu);
        let Eu = yu.instances.get(Ru.key);
        return Eu || (Eu = this.newMaterialInstance(uu, uu, Ru), yu.instances.set(Ru.key, Eu)), Eu
      }
      modelSlot(uu) {
        let Ru = uu.gpu[Mu.e.lite];
        return Ru || (Ru = new em(this.resources), uu.gpu[Mu.e.lite] = Ru), Ru
      }
      newMaterialInstance(uu, Ru, yu) {
        const Eu = yu.program.material.floats,
          Ku = new Float32Array(Eu),
          Qu = new Map;
        return {
          owner: uu,
          model: Ru,
          program: yu,
          data: Ku,
          uploaded: new Float32Array(Eu).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${uu.name}-uniforms`,
            size: Math.max(16, 4 * Eu),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Qu,
          ubo: new xQ(yu.program.material.slots, Ku, Qu),
          bindGroup: null,
          bound: new Array(2 * yu.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(uu) {
        var Ru;
        const yu = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: TK + WK,
            fragment: TK + jK,
            attributes: [],
            material: pK,
            textures: []
          }, "earthSky"),
          Eu = this.earthSkyUniforms ??= this.newMaterialInstance(km, null, yu);
        this.earthSkyFrom !== uu && (this.earthSkyFrom = uu, Eu.data.fill(0)), DK(Eu.ubo, uu, this.view);
        const Ku = this.vertexInputs(yu, km, "earthSky", yu, null);
        if (yu.failed || !Ku || !this.bindMaterial(Eu, !1)) return;
        const Qu = null !== (Ru = Ku.state) && void 0 !== Ru ? Ru : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          mu = this.makeDraw(yu, Ku, Qu, Eu, 1);
        mu.count = BK.length;
        const Ju = MK(uu, this.view);
        mu.slotOffset = this.writeMeshSlot(Ju, 1), this.lists.skyDraws.push(mu)
      }
      uploadIfChanged(uu) {
        const {
          data: Ru,
          uploaded: yu
        } = uu;
        for (let Eu = 0; Eu < Ru.length; Eu++)
          if (Ru[Eu] !== yu[Eu]) return yu.set(Ru), void this.device.queue.writeBuffer(uu.buffer, 0, Ru)
      }
      bindMaterial(uu, Ru) {
        return uu.frame !== this.frame && (uu.frame = this.frame, Ru || this.uploadIfChanged(uu), uu.bindable = this.bindTextures(uu)), uu.bindable
      }
      bindTextures(uu) {
        const {
          program: Ru,
          bound: yu
        } = uu, Eu = Ru.program.textures;
        let Ku = !uu.bindGroup,
          Qu = !0;
        for (let mu = 0; mu < Eu.length; mu++) {
          const Ru = uu.textures.get(Eu[mu].name),
            Ju = Ru ? this.resources.boundTexture(Ru) : null;
          Ju ? yu[2 * mu] === Ju.view && yu[2 * mu + 1] === Ju.sampler || (yu[2 * mu] = Ju.view, yu[2 * mu + 1] = Ju.sampler, Ku = !0) : (Ru || uu.ubo.expected.has(Eu[mu].name) || this.warnOnce(`texture:${uu.owner.name}:${Eu[mu].name}`, `${uu.owner.name} has no ${Eu[mu].name}`), Qu = !1)
        }
        if (!Qu) return Ku && (uu.bindGroup = null), !1;
        if (Ku) {
          const Ku = [{
            binding: 0,
            resource: {
              buffer: uu.buffer
            }
          }];
          for (let uu = 0; uu < Eu.length; uu++) Ku.push({
            binding: Eu[uu].binding,
            resource: yu[2 * uu]
          }), Ku.push({
            binding: Eu[uu].samplerBinding,
            resource: yu[2 * uu + 1]
          });
          uu.bindGroup = this.device.createBindGroup({
            label: `${uu.owner.name}-material`,
            layout: Ru.materialLayout,
            entries: Ku
          })
        }
        return !0
      }
      writeMeshSlot(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, uu, Ru, yu), this.slotCount++ * FE
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(uu, Ru, yu, Eu, Ku) {
        let Qu = this.inputs.get(uu);
        if (!Qu || Qu.program !== Eu || !dQ(Ru, Qu, this.resources, Ku)) {
          var mu;
          if (Qu = null !== (mu = this.vertexLayouts.resolveInputs(Ru, yu, Eu, Ku)) && void 0 !== mu ? mu : void 0, !Qu) return null;
          this.inputs.set(uu, Qu)
        }
        return this.withGpuBuffers(Qu)
      }
      meshInputs(uu, Ru, yu) {
        const Eu = this.inputs.get(uu);
        if (Eu && this.inputsStamped(Eu, uu, yu, Ru)) return this.withGpuBuffers(Eu);
        const Ku = uu.owner,
          Qu = KQ(uu),
          mu = this.vertexInputs(uu, Ku, Ku.name, Ru, Qu);
        return mu && (mu.geometry = QQ(uu), mu.instanceLayout = this.drawDefines.instanceLayout(Ku, yu)), mu
      }
      inputsStamped(uu, Ru, yu, Eu) {
        return function(uu, Ru, yu, Eu) {
          return uu.program === yu && uu.geometry === QQ(Ru) && uu.instanceLayout === Eu
        }(uu, Ru, Eu, this.drawDefines.instanceLayout(Ru.owner, yu))
      }
      withGpuBuffers(uu) {
        return ZQ(uu, this.resources, this.zeroBuffer) ? uu : null
      }
      instanceBuffersFit(uu, Ru, yu) {
        const Eu = PQ(Ru, yu, this.resources, this.zeroBuffer);
        if (Eu) {
          const Ku = Ru.ends[Eu.index] - Ru.offsets[Eu.index] + Ru.n_[Eu.index];
          return this.warnOnce(`overrun:${uu}`, `${uu} draws ${yu} instances from a ${Ku}-byte buffer (${Eu.needed} needed)`), !1
        }
        return !0
      }
      createBinding(uu, Ru, yu, Eu) {
        const Ku = `${Ru._colorFormat}|${Ru._depthStencilFormat}|${Ru._depthCompare}|${Ru._sampleCount}`,
          Qu = mR(this.device, Ru);
        if (uu === this.skyLastRenderable) {
          let yu = null;
          return {
            renderable: uu,
            pipeline: Qu,
            draw: uu => yu ? this.drawSky(uu, Ru, Ku, yu) : 0,
            update: uu => {
              yu = uu
            }
          }
        }
        return {
          renderable: uu,
          pipeline: Qu,
          draw: uu => (Eu ? Eu.execute(uu, Ru, Ku) : 0) + this.drawList(uu, Ru, Ku, yu)
        }
      }
      drawSky(uu, Ru, yu, Eu) {
        const Ku = this.lists.skyDraws,
          Qu = Ku.length > 0;
        if (Qu) {
          var mu;
          const yu = (null !== (mu = Ru._depthCompare) && void 0 !== mu ? mu : yR).startsWith("greater") ? 0 : 1;
          uu.setViewport(0, 0, Eu.targetWidth, Eu.targetHeight, yu, yu)
        }
        const Ju = this.drawList(uu, Ru, yu, Ku);
        return Qu && uu.setViewport(0, 0, Eu.targetWidth, Eu.targetHeight, 0, 1), Ju
      }
      drawList(uu, Ru, yu, Eu) {
        let Ku = 0;
        const Qu = this.binder;
        Qu.reset();
        for (const mu of Eu) {
          const Eu = this.pipelineFor(mu, Ru, yu);
          Eu && (Qu.bind(uu, mu, Eu, this.meshSlots.bindGroup, mu.slotOffset), mu.indexBuffer ? uu.drawIndexed(mu.count, mu.instances, mu.first, 0, 0) : uu.draw(mu.count, mu.instances, mu.first, 0), Ku++)
        }
        return Ku
      }
      pipelineFor(uu, Ru, yu) {
        var Eu, Ku;
        if (uu.program.failed) return null;
        const Qu = uu.inputs;
        if (Qu.pipeline && Qu.pipelineTarget === yu) return Qu.pipeline;
        const mu = `${uu.pipelineKey}|${yu}`,
          Ju = this.pipelines.get(mu);
        if (void 0 !== Ju) return Ju && (Qu.pipeline = Ju, Qu.pipelineTarget = yu), Ju || null;
        this.pipelines.set(mu, null);
        const {
          program: Nu,
          layout: Xu,
          state: Vu
        } = uu, ru = {
          label: `standard-${Nu.id}`,
          layout: Nu.pipelineLayout,
          vertex: {
            module: Nu.vertex,
            entryPoint: "main",
            buffers: Xu.buffers
          },
          fragment: vu({
            module: Nu.fragment,
            entryPoint: "main"
          }, Ru, Vu.blend, Vu.colourWrite),
          depthStencil: Ru._depthStencilFormat ? {
            format: Ru._depthStencilFormat,
            depthCompare: null !== (Eu = null !== (Ku = Vu.depthCompare) && void 0 !== Ku ? Ku : Ru._depthCompare) && void 0 !== Eu ? Eu : yR,
            depthWriteEnabled: Vu.depthWrite,
            depthBias: Vu.depthBias,
            depthBiasSlopeScale: Vu.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: Ru._sampleCount
          },
          primitive: {
            topology: Vu.topology,
            frontFace: Vu.frontFace,
            cullMode: Vu.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(ru).then((uu => {
          this.compiling--, this.pipelines.set(mu, uu)
        }), (uu => {
          this.compiling--, this.reportFailure(Nu, mu, uu)
        })), null
      }
      forEachSunShadowCaster(uu) {
        const Ru = this.caster,
          yu = (yu, Eu, Ku) => {
            const Qu = yu.unit && function(uu) {
              const Ru = uu.material.model;
              return null !== Ru && (Ru.lifeform || Ru.item) && Ru.castsSunShadow && "triangle-list" === uu.state.topology
            }(yu) ? KQ(yu.unit) : null;
            if (!Qu) return;
            const mu = yu.unit.owner;
            switch (Ru.geometry = Qu, Ru.skip = mu.noSunShadowVertices, Ru.indexed = null !== yu.indexBuffer, Ru.first = yu.first, Ru.count = yu.count, Ru.Fr = Eu, Ru.worldAt = Ku, Ru.instances = null, Ru.instanceCount = 1, Ru.thin = !1, uQ(mu)) {
              case "thin": {
                const uu = mu._thinInstanceDataStorage.matrixData;
                if (!uu) return;
                Ru.instances = uu, Ru.instanceCount = Math.min(yu.instances, uu.length / 16), Ru.thin = !0;
                break
              }
              case "instanced": {
                const uu = this.resources.batchUploads.get(mu);
                if (!uu || uu.frame !== this.frame || !this.writeBatchCasters(uu)) return;
                break
              }
            }
            uu(Ru)
          };
        for (const Eu of this.lists.opaqueDraws) yu(Eu, this.meshSlots.data, Eu.slotOffset / 4);
        this.thinBundle.forEachDrawn(yu)
      }
      writeBatchCasters(uu) {
        const {
          caster: Ru
        } = this, yu = uu.packedMatrices, Eu = uu.count;
        Ru.instances = yu, Ru.instanceCount = Eu;
        let Ku = -1;
        for (let Qu = 0; Qu < Eu; Qu++) {
          const Ru = Mm(uu.packedRowMesh(Qu));
          Ru && Ku < 0 ? (this.casterWorlds.length < 16 * Eu && (this.casterWorlds = new Float32Array(yu.length)), this.casterWorlds.set(yu.subarray(0, 16 * Qu)), Ku = Qu) : !Ru && Ku >= 0 && (this.casterWorlds.set(yu.subarray(16 * Qu, 16 * Qu + 16), 16 * Ku), Ku++)
        }
        return Ku >= 0 && (Ru.instances = this.casterWorlds, Ru.instanceCount = Ku), Ru.instanceCount > 0
      }
      async reportFailure(uu, Ru, yu) {
        const Eu = [];
        let Ku = !0;
        for (const [Qu, mu] of [
            ["vertex", uu.vertex],
            ["fragment", uu.fragment]
          ]) {
          const uu = await mu.getCompilationInfo();
          for (const Ru of uu.messages) Ku &&= "error" !== Ru.type, Eu.push(`${Qu}:${Ru.lineNum}:${Ru.linePos} ${Ru.type}: ${Ru.message}`)
        }
        if (Ku && !uu.packGroup) return this.pipelines.set(Ru, !1), console.error(`Lite: pipeline ${Ru} failed`, yu), void YK("mesh", uu.kind, yu);
        uu.failed || (uu.failed = !0, console.error(`Lite: program ${uu.id} failed`, yu, Eu.join("\n"), {
          program: uu.program,
          key: uu.key
        }), YK("mesh", uu.kind, yu, Ku ? null : Eu[0]))
      }
    }

    function Mm(uu) {
      var Ru, yu;
      const Eu = null === (Ru = uu.bI) || void 0 === Ru || null === (yu = Ru.aShaderPackItem) || void 0 === yu ? void 0 : yu.x;
      return void 0 !== Eu && 0 !== (Eu & NR.i)
    }
    var Im = yu(41273),
      Gm = yu(41279),
      Um = yu(41287),
      nm = yu(41222);
    const sm = [0, 3, 1, 4, 2, 5];

    function tm(uu, Ru, yu, Eu, Ku) {
      const Qu = yu[0].width;
      try {
        return Ku ? function(uu, Ru, yu) {
          const Eu = (0, nm.d)(uu, yu, yu, 6);
          for (let Ku = 0; Ku < 6; Ku++)(0, nm.g)(uu, Eu, Ku, Ru[sm[Ku]], {
            invertY: !1
          });
          return Eu.texture
        }(uu, yu, Qu) : function(uu, Ru, yu, Eu) {
          const Ku = uu.createTexture({
            label: "sink-cube",
            size: {
              width: yu,
              height: yu,
              depthOrArrayLayers: 6
            },
            format: Eu,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Qu = 0; Qu < 6; Qu++) uu.queue.copyExternalImageToTexture({
            source: Ru[sm[Qu]]
          }, {
            texture: Ku,
            origin: {
              x: 0,
              y: 0,
              z: Qu
            }
          }, {
            width: yu,
            height: yu
          });
          return Ku
        }(Ru, yu, Qu, 1 === Eu ? "r8unorm" : "rgba8unorm")
      } finally {
        lm(yu)
      }
    }

    function lm(uu) {
      for (const Ru of null !== uu && void 0 !== uu ? uu : []) null === Ru || void 0 === Ru || Ru.close()
    }
    async function gm(uu) {
      const Ru = [],
        yu = [];
      if (await Promise.all(uu.map(((uu, Eu) => (Ru[Eu] = null, uu.then((uu => {
          Ru[Eu] = uu
        }), (uu => {
          yu.push(uu)
        })))))), yu.length > 0) throw lm(Ru), yu[0];
      return Ru
    }
    class cm {
      constructor(uu) {
        this.Nr = uu, this.starts = [], this.lengths = [], this.used = 0, uu > 0 && (this.starts.push(0), this.lengths.push(uu))
      }
      allocate(uu) {
        const {
          starts: Ru,
          lengths: yu
        } = this;
        for (let Eu = 0; Eu < Ru.length; Eu++) {
          if (yu[Eu] < uu) continue;
          const Ku = Ru[Eu];
          return yu[Eu] === uu ? (Ru.splice(Eu, 1), yu.splice(Eu, 1)) : (Ru[Eu] += uu, yu[Eu] -= uu), this.used += uu, Ku
        }
        return -1
      }
      free(uu, Ru) {
        this.used -= Ru;
        const yu = Math.min(uu + Ru, this.Nr);
        yu > uu && this.release(uu, yu - uu)
      }
      grow(uu) {
        const Ru = this.Nr;
        this.Nr = uu, this.release(Ru, uu - Ru)
      }
      truncate(uu) {
        const {
          starts: Ru,
          lengths: yu
        } = this;
        for (let Eu = Ru.length - 1; Eu >= 0 && Ru[Eu] + yu[Eu] > uu; Eu--) Ru[Eu] >= uu ? (Ru.splice(Eu, 1), yu.splice(Eu, 1)) : yu[Eu] = uu - Ru[Eu];
        this.Nr = uu
      }
      release(uu, Ru) {
        const {
          starts: yu,
          lengths: Eu
        } = this;
        let Ku = 0,
          Qu = yu.length;
        for (; Ku < Qu;) {
          const Ru = Ku + Qu >> 1;
          yu[Ru] < uu ? Ku = Ru + 1 : Qu = Ru
        }
        const mu = Ku,
          Ju = mu > 0 && yu[mu - 1] + Eu[mu - 1] === uu,
          Nu = mu < yu.length && uu + Ru === yu[mu];
        Ju && Nu ? (Eu[mu - 1] += Ru + Eu[mu], yu.splice(mu, 1), Eu.splice(mu, 1)) : Ju ? Eu[mu - 1] += Ru : Nu ? (yu[mu] = uu, Eu[mu] += Ru) : (yu.splice(mu, 0, uu), Eu.splice(mu, 0, Ru))
      }
    }
    const Lm = 256;
    class zm {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = uu, this.onReplaced = Ru, this.mergeGap = yu, this.gpu = null, this.bytes = void 0, this.yT = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Ku = Math.max(Lm, Math.ceil(Eu / Lm) * Lm);
        this.bytes = new Uint8Array(Ku), this.yT = new cm(Ku / Lm)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(uu) {
        return Math.max(1, Math.ceil(uu / Lm)) * Lm
      }
      allocate(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu;
        const Eu = zm.slotBytes(uu),
          Ku = Eu / Lm;
        let Qu = this.yT.allocate(Ku);
        Qu < 0 && (this.grow(this.yT.Nr + Ku), Qu = this.yT.allocate(Ku));
        const mu = Qu * Lm;
        return this.growTo(mu + Math.max(yu, Eu)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, mu, mu + Eu), Ru && this.bytes.set(new Uint8Array(Ru.buffer, Ru.byteOffset, Math.min(Ru.byteLength, Eu)), mu), this.markDirty(mu, mu + Eu), mu
      }
      growTo(uu) {
        const Ru = Math.ceil(uu / Lm);
        Ru > this.yT.Nr && this.grow(Ru)
      }
      free(uu, Ru) {
        this.freed.push(uu, Ru)
      }
      write(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Eu <= 0) return;
        this.bytes.set(new Uint8Array(Ru.buffer, yu, Eu), uu);
        let Qu = uu + Eu;
        if (Ku) {
          const Ru = uu + 4 * Math.ceil(Eu / 4);
          this.bytes.fill(0, Qu, Ru), Qu = Ru
        }
        this.markDirty(uu, Qu)
      }
      move(uu, Ru, yu) {
        this.bytes.copyWithin(Ru, uu, uu + yu), this.markDirty(Ru, Ru + yu)
      }
      flush() {
        for (const Ru of this.retired) this.onReplaced(Ru), Ru.destroy();
        this.retired.length = 0;
        const uu = this.dirtyStarts.length;
        if (uu > 0) {
          const {
            dirtyStarts: Ru,
            dirtyEnds: yu,
            order: Eu
          } = this;
          Eu.length = uu;
          for (let Ju = 0; Ju < uu; Ju++) Eu[Ju] = Ju;
          uu > 1 && Eu.sort(((uu, yu) => Ru[uu] - Ru[yu]));
          const Ku = this.mergeGap;
          let Qu = Ru[Eu[0]],
            mu = yu[Eu[0]];
          for (let Ju = 1; Ju < uu; Ju++) {
            const uu = Eu[Ju];
            Ru[uu] - mu <= Ku ? mu = Math.max(mu, yu[uu]) : (this.send(Qu, mu), Qu = Ru[uu], mu = yu[uu])
          }
          this.send(Qu, mu), Ru.length = 0, yu.length = 0
        }
        this.holding = !1
      }
      ZH() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const uu = this.freed;
        for (let Ru = 0; Ru < uu.length; Ru += 2) this.yT.free(uu[Ru] / Lm, uu[Ru + 1] / Lm);
        uu.length = 0
      }
      send(uu, Ru) {
        this.device.queue.writeBuffer(this.gpu, uu, this.bytes.buffer, uu, Ru - uu);
        for (const yu of this.replaced) {
          const Eu = Math.min(Ru, yu.size);
          Eu > uu && this.device.queue.writeBuffer(yu, uu, this.bytes.buffer, uu, Eu - uu)
        }
      }
      markDirty(uu, Ru) {
        uu &= -4, Ru = Ru + 3 & -4, this.holding ? (this.dirtyStarts.push(uu), this.dirtyEnds.push(Ru)) : this.send(uu, Ru)
      }
      grow(uu) {
        const Ru = this.yT.Nr,
          yu = Math.max(2 * Ru, uu),
          Eu = new Uint8Array(yu * Lm);
        Eu.set(this.bytes);
        const Ku = this.gpu;
        this.gpu = this.createGpu(Eu.byteLength), this.bytes = Eu, this.yT.grow(yu), Ku && (this.replaced.push(Ku), this.onReplaced(Ku)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Ru * Lm)
      }
      createGpu(uu) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: uu,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Fm(uu) {
      return Array.isArray(uu) ? new Float32Array(uu) : uu
    }

    function wm(uu, Ru, yu, Eu, Ku) {
      const Qu = GK(Ku),
        mu = Math.min(Ku, Eu.byteLength);
      if (Qu === mu && Eu.byteOffset % 4 === 0) return void uu.queue.writeBuffer(Ru, yu, Eu.buffer, Eu.byteOffset, Qu);
      const Ju = new Uint8Array(Qu);
      Ju.set(new Uint8Array(Eu.buffer, Eu.byteOffset, mu)), uu.queue.writeBuffer(Ru, yu, Ju)
    }

    function Zm(uu, Ru, yu) {
      const Eu = "linear",
        Ku = "nearest";
      let Qu = Ku,
        mu = Ku,
        Ju = "nearest",
        Nu = !Ru;
      switch (uu) {
        case 11:
          Qu = Eu, mu = Eu;
          break;
        case 3:
          Qu = Eu, mu = Eu, Ju = Ru ? "linear" : "nearest";
          break;
        case 8:
          Ju = Ru ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          mu = Eu;
          break;
        case 6:
          mu = Eu, Ju = Ru ? "linear" : "nearest";
          break;
        case 7:
          mu = Eu, Nu = !0;
          break;
        case 9:
          Qu = Eu;
          break;
        case 10:
          Qu = Eu, Ju = Ru ? "linear" : "nearest";
          break;
        case 2:
          Qu = Eu, mu = Eu, yu > 1 ? (Ju = "linear", Nu = !1) : Nu = !0;
          break;
        case 12:
          Qu = Eu, Nu = !0;
          break;
        default:
          Nu = !0
      }
      return yu > 1 && !Nu ? {
        magFilter: Eu,
        minFilter: Eu,
        mipmapFilter: "linear",
        maxAnisotropy: yu
      } : {
        magFilter: Qu,
        minFilter: mu,
        mipmapFilter: Ju,
        ...Nu ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function hm(uu) {
      return 0 === uu ? "clamp-to-edge" : 2 === uu ? "mirror-repeat" : "repeat"
    }
    class Pm {
      constructor(uu, Ru) {
        let {
          vertexArena: yu = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = uu, this.device = Ru, this.buffers = new WeakMap, this.R_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = yu ? new zm(Ru, (uu => {
          var Ru;
          null === (Ru = this.onDestroy) || void 0 === Ru || Ru.call(this, uu), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var uu;
        null === (uu = this.arena) || void 0 === uu || uu.flush()
      }
      endUploadFrame() {
        var uu;
        null === (uu = this.arena) || void 0 === uu || uu.ZH()
      }
      vertexBufferCreated(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yu ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(uu);
        const Ku = Fm(Ru);
        uu.Nr = Ku.byteLength, this.buffers.set(uu, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: yu && null !== this.arena,
          pending: Ku,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Eu
        })
      }
      vertexBufferUpdated(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        const Ku = this.buffers.get(uu);
        if (!Ku) return;
        const Qu = Fm(Ru),
          mu = void 0 === Eu ? Qu.byteLength : Math.min(Eu, Qu.byteLength);
        this.update(Ku, Qu, yu, mu)
      }
      vertexBufferFloatsUpdated(uu, Ru, yu, Eu) {
        const Ku = this.buffers.get(uu);
        if (!Ku) return;
        const Qu = yu * Float32Array.BYTES_PER_ELEMENT,
          mu = (Eu - yu) * Float32Array.BYTES_PER_ELEMENT;
        Ku.slot >= 0 && mu > 0 && Qu + mu <= Ku.size ? this.writeSlot(Ku, Qu, Ru, Ru.byteOffset + Qu, mu, !1) : Ku.gpu && mu > 0 && Qu + mu <= Ku.gpu.size ? this.device.queue.writeBuffer(Ku.gpu, Qu, Ru.buffer, Ru.byteOffset + Qu, mu) : this.update(Ku, Ru.subarray(yu, Eu), Qu, mu)
      }
      indexBufferCreated(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(uu);
        const Eu = function(uu) {
          if (uu instanceof Uint16Array || uu instanceof Uint32Array) return uu;
          for (let Ru = 0; Ru < uu.length; Ru++)
            if (uu[Ru] >= 65535) return new Uint32Array(uu);
          return new Uint16Array(uu)
        }(Ru);
        uu.is32Bits = 4 === Eu.BYTES_PER_ELEMENT, uu.Nr = Eu.byteLength, this.buffers.set(uu, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Eu,
          ownsPending: Eu !== Ru,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: yu
        })
      }
      bufferDeleted(uu) {
        const Ru = this.buffers.get(uu);
        null !== Ru && void 0 !== Ru && Ru.gpu ? (this.destroyBuffer(Ru.gpu), this.gpuBuffersVersion++) : Ru && Ru.slot >= 0 && (this.arena.free(Ru.slot, Ru.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(uu)
      }
      update(uu, Ru, yu, Eu) {
        if (uu.slot >= 0) this.updateSlot(uu, Ru, yu, Eu);
        else if (uu.gpu) {
          if (yu + GK(Eu) > uu.gpu.size) {
            const Ru = this.device.createBuffer({
                label: uu.label,
                size: GK(Math.max(2 * uu.gpu.size, yu + Eu)),
                usage: uu.usage | GPUBufferUsage.COPY_SRC
              }),
              Ku = this.device.createCommandEncoder();
            Ku.copyBufferToBuffer(uu.gpu, 0, Ru, 0, uu.gpu.size), this.device.queue.submit([Ku.finish()]), this.destroyBuffer(uu.gpu), this.gpuBuffersVersion++, uu.gpu = Ru
          }
          wm(this.device, uu.gpu, yu, Ru, Eu)
        } else {
          const Qu = new Uint8Array(Ru.buffer, Ru.byteOffset, Eu),
            mu = uu.pending;
          if (mu && uu.ownsPending && yu + Eu <= mu.byteLength) new Uint8Array(mu.buffer, mu.byteOffset, mu.byteLength).set(Qu, yu);
          else if (mu && 0 === yu && Eu === mu.byteLength && Ru.byteLength === Eu) uu.pending = Ru, uu.ownsPending = !1;
          else {
            var Ku;
            const Ru = new Uint8Array(Math.max(null !== (Ku = null === mu || void 0 === mu ? void 0 : mu.byteLength) && void 0 !== Ku ? Ku : 0, yu + Eu));
            mu && Ru.set(new Uint8Array(mu.buffer, mu.byteOffset, mu.byteLength)), Ru.set(Qu, yu), uu.pending = Ru, uu.ownsPending = !0
          }
        }
      }
      updateSlot(uu, Ru, yu, Eu) {
        const Ku = this.arena;
        yu + GK(Eu) > uu.size && (uu.size = GK(Math.max(2 * uu.size, yu + Eu)), Ku.growTo(uu.slot + uu.size), this.gpuBuffersVersion++), 0 === Eu ? this.writeSlot(uu, yu, Ym, 0, 4, !1) : this.writeSlot(uu, yu, Ru, Ru.byteOffset, Eu, !0)
      }
      writeSlot(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = Ru + (Qu ? GK(Ku) : Ku);
        mu > uu.slotBytes && this.moveSlot(uu, mu), this.arena.write(uu.slot + Ru, yu, Eu, Ku, Qu)
      }
      moveSlot(uu, Ru) {
        const yu = this.arena,
          Eu = zm.slotBytes(Math.max(Ru, Math.min(2 * uu.slotBytes, uu.size))),
          Ku = yu.allocate(Eu, null, uu.size);
        yu.move(uu.slot, Ku, uu.slotBytes), yu.free(uu.slot, uu.slotBytes), uu.slot = Ku, uu.slotBytes = Eu, this.gpuBuffersVersion++
      }
      cover(uu, Ru) {
        const yu = this.buffers.get(uu);
        if (!yu || yu.slot < 0) return !1;
        const Eu = Math.min(Ru, yu.size);
        return !(Eu <= yu.slotBytes) && (this.moveSlot(yu, Eu), !0)
      }
      destroyBuffer(uu) {
        var Ru;
        null === (Ru = this.onDestroy) || void 0 === Ru || Ru.call(this, uu), uu.destroy()
      }
      gpuBuffer(uu) {
        const Ru = this.buffers.get(uu);
        if (!Ru) return null;
        if (Ru.slot >= 0) return this.arena.buffer;
        if (Ru.arena && Ru.pending) {
          const uu = Ru.pending,
            yu = this.arena;
          return Ru.size = GK(uu.byteLength), Ru.slotBytes = zm.slotBytes(function(uu) {
            const Ru = new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength);
            let yu = Ru.length;
            if (uu.byteOffset % 4 === 0) {
              for (; yu % 4 !== 0 && 0 === Ru[yu - 1];) yu--;
              if (yu % 4 === 0) {
                const Ru = new Uint32Array(uu.buffer, uu.byteOffset, yu / 4);
                let Eu = Ru.length;
                for (; Eu > 0 && 0 === Ru[Eu - 1];) Eu--;
                yu = 4 * Eu
              }
            }
            for (; yu > 0 && 0 === Ru[yu - 1];) yu--;
            return yu
          }(uu)), Ru.slot = yu.allocate(Ru.slotBytes, uu, Ru.size), Ru.pending = null, yu.buffer
        }
        if (!Ru.gpu && Ru.pending) {
          const uu = Ru.pending;
          Ru.gpu = this.device.createBuffer({
            label: Ru.label,
            size: GK(uu.byteLength),
            usage: Ru.usage
          }), wm(this.device, Ru.gpu, 0, uu, uu.byteLength), Ru.pending = null
        }
        return Ru.gpu
      }
      gpuOffset(uu) {
        var Ru, yu;
        const Eu = null !== (Ru = null === (yu = this.buffers.get(uu)) || void 0 === yu ? void 0 : yu.slot) && void 0 !== Ru ? Ru : -1;
        return Eu < 0 ? 0 : Eu
      }
      gpuEnd(uu) {
        var Ru, yu;
        const Eu = this.buffers.get(uu);
        return Eu ? Eu.slot >= 0 ? Eu.slot + Eu.size : null !== (Ru = null === (yu = Eu.gpu) || void 0 === yu ? void 0 : yu.size) && void 0 !== Ru ? Ru : 0 : 0
      }
      vertexInput(uu, Ru, yu) {
        var Eu, Ku, Qu, mu;
        return null !== (Eu = null !== (Ku = yu && this.modelInput(yu, Ru)) && void 0 !== Ku ? Ku : null === (Qu = null !== (mu = this.R_.get(uu)) && void 0 !== mu ? mu : this.batchUploads.get(uu)) || void 0 === Qu ? void 0 : Qu.inputs[Ru]) && void 0 !== Eu ? Eu : null
      }
      modelInput(uu, Ru) {
        const yu = this.geometrySlot(uu);
        let Eu = yu.inputs.get(Ru);
        if (void 0 === Eu) {
          const Ku = uu.vertexAttributes.find((uu => uu.kind === Ru));
          Eu = Ku ? new Yu(this.modelKey(yu, Ku.data, !1), Ku.offset, Ku.stride, Ku.components, !1, Ku.glType, Ku.isNormalized) : null, yu.inputs.set(Ru, Eu)
        }
        return Eu
      }
      modelIndex(uu) {
        return uu.indexData && this.modelKey(this.geometrySlot(uu), uu.indexData, !0)
      }
      geometrySlot(uu) {
        let Ru = uu.gpu[Mu.e.lite];
        if (!Ru) {
          const yu = new Map,
            Eu = () => {
              for (const uu of yu.values()) this.bufferDeleted(uu)
            },
            Ku = uu => {
              const Ru = yu.get(uu);
              Ru && this.vertexBufferUpdated(Ru, uu)
            };
          Ru = {
            keys: yu,
            inputs: new Map,
            release: Eu,
            updated: Ku
          }, uu.gpu[Mu.e.lite] = Ru
        }
        return Ru
      }
      modelKey(uu, Ru, yu) {
        let Eu = uu.keys.get(Ru);
        if (!Eu) {
          if (yu) {
            const uu = {
              Nr: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(uu, Ru, "model-indices"), Eu = uu
          } else Eu = {
            Nr: 0
          }, this.vertexBufferCreated(Eu, Ru, !1, "model-vertices");
          uu.keys.set(Ru, Eu)
        }
        return Eu
      }
      indexFormat(uu) {
        return uu.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(uu, Ru) {
        --uu.refs > 0 || (this.releaseTexture(uu), lm(uu.images), null !== Ru && this.textures.delete(Ru))
      }
      load(uu, Ru) {
        const yu = Ru.decoded = async function(uu) {
          if ("cube" === uu.kind) return async function(uu) {
            if (6 !== uu.length) throw new Error(`${uu.length} files where six faces were expected`);
            const Ru = await gm(uu.map((uu => gK(uu)))),
              yu = Ru[0].width;
            return gm(Ru.map((async uu => {
              if (uu.width === yu && uu.height === yu) return uu;
              try {
                return await createImageBitmap(uu, {
                  ...tK,
                  resizeWidth: yu,
                  resizeHeight: yu
                })
              } finally {
                uu.close()
              }
            })))
          }(uu.files);
          if ("data" === uu.kind && uu.data) return [await createImageBitmap(new Blob([uu.data]), tK)];
          return [await gK(im(uu))]
        }(uu.source).then((uu => {
          0 === Ru.refs ? lm(uu) : Ru.images = uu
        }));
        this.track(Ru, im(uu.source), yu, (() => {
          Ru.wanted && !Ru.failed && Ru.refs > 0 && this.upload(uu, Ru)
        }))
      }
      canvasUpdated(uu, Ru, yu) {
        const {
          state: Eu
        } = this.textureSlot(uu);
        Eu.dynamicSource = {
          invertY: Ru,
          premultiplied: yu
        }, Eu.dynamic && this.pushDynamic(uu.source, Eu)
      }
      async atlasArray(uu, Ru, yu) {
        const Eu = await zK(this.device, uu, Ru, yu);
        if (!this.atlasBindings.has(Eu)) {
          const uu = (0, Im.d)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Eu, {
            view: Eu.texture.createView({
              dimension: "2d-array"
            }),
            sampler: uu
          })
        }
        return Eu
      }
      boundTexture(uu) {
        const Ru = this.atlasBindings.get(uu);
        if (Ru) return Ru;
        const yu = uu;
        if (yu.released) return null;
        const Eu = this.textureSlot(yu, !0),
          {
            state: Ku
          } = Eu;
        if (!Ku.view && (Ku.wanted = !0, Ku.loading || Ku.failed || this.upload(yu, Ku), !Ku.view)) return null;
        const Qu = this.chosenSampler(yu, Eu),
          mu = Eu.bound;
        return mu && mu.view === Ku.view && mu.sampler === Qu ? mu : (Eu.bound = {
          view: Ku.view,
          sampler: Qu
        }, Eu.bound)
      }
      textureLoaded(uu) {
        var Ru, yu;
        return null !== (Ru = null === (yu = uu.gpu[Mu.e.lite]) || void 0 === yu ? void 0 : yu.state.decoded) && void 0 !== Ru ? Ru : null
      }
      textureFailed(uu) {
        var Ru;
        return !0 === (null === (Ru = uu.gpu[Mu.e.lite]) || void 0 === Ru ? void 0 : Ru.state.failed)
      }
      chosenSampler(uu, Ru) {
        const {
          samplingMode: yu,
          wrapU: Eu,
          wrapV: Ku
        } = uu.sampler, Qu = Ru.state.hasMips, mu = function(uu, Ru) {
          const {
            bilinear: yu,
            trilinear: Eu
          } = Mu.h;
          return !Ru && uu !== yu || 11 !== uu && uu !== Eu && uu !== yu ? 1 : 4
        }(yu, Qu), Ju = Ru.sampler;
        if (Ju && Ju.samplingMode === yu && Ju.hasMips === Qu && Ju.anisotropy === mu && Ju.wrapU === Eu && Ju.wrapV === Ku) return Ju.sampler;
        const Nu = this.samplerFor(yu, Qu, mu, Eu, Ku);
        return Ru.sampler = {
          samplingMode: yu,
          hasMips: Qu,
          anisotropy: mu,
          wrapU: Eu,
          wrapV: Ku,
          sampler: Nu
        }, Nu
      }
      releaseTexture(uu) {
        var Ru, yu;
        uu.view && (null === (yu = this.onDestroy) || void 0 === yu || yu.call(this, uu.view));
        null === (Ru = uu.destroy) || void 0 === Ru || Ru.call(uu)
      }
      textureSlot(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = uu.gpu[Mu.e.lite];
        if (yu) return yu;
        const Eu = function(uu) {
          let {
            source: Ru,
            sampler: yu
          } = uu;
          return "canvas" === Ru.kind ? null : `${Ru.kind}|${im(Ru)}|${yu.noMipmap}|${yu.samplingMode}|${yu.invertY}`
        }(uu);
        let Ku = null === Eu ? void 0 : this.textures.get(Eu);
        Ku || (Ku = {
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
        }, null !== Eu && (this.textures.set(Eu, Ku), this.load(uu, Ku), Ru && this.firstBindDecodes++)), Ku.refs++;
        const Qu = Ku,
          mu = {
            state: Ku,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(Qu, Eu)
            }
          };
        return uu.gpu[Mu.e.lite] = mu, mu
      }
      samplerFor(uu, Ru, yu, Eu, Ku) {
        const Qu = `${uu}|${Ru}|${yu}|${Eu}|${Ku}`;
        let mu = this.samplers.get(Qu);
        if (!mu) {
          const Ju = {
            ...Zm(uu, Ru, yu),
            addressModeU: hm(Eu),
            addressModeV: hm(Ku)
          };
          mu = (0, Im.d)(this.engine, Ju), this.samplers.set(Qu, mu)
        }
        return mu
      }
      upload(uu, Ru) {
        const {
          source: yu,
          sampler: Eu
        } = uu;
        Ru.hasMips = !Eu.noMipmap, "canvas" === yu.kind ? this.createDynamic(yu, Ru) : "cube" === yu.kind ? this.uploadCube(Ru, yu.luminance) : this.uploadImage(Ru, !0 === Eu.invertY, yu.url)
      }
      uploadImage(uu, Ru, yu) {
        const [Eu] = uu.images;
        uu.images = null;
        const Ku = (0, Gm.d)(this.engine, Eu, {
          mipMaps: uu.hasMips,
          invertY: Ru,
          srgb: !1
        }).then((Ru => {
          Eu.close(), 0 !== uu.refs ? (uu.view = Ru.view, uu.destroy = Ru.texture.destroy.bind(Ru.texture)) : Ru.texture.destroy()
        }));
        this.track(uu, yu, Ku)
      }
      track(uu, Ru, yu, Eu) {
        uu.loading = !0, this.pending++, yu.catch((yu => {
          uu.failed = !0, console.warn(`Lite: could not load texture ${lK(Ru)}`, yu)
        })).finally((() => {
          uu.loading = !1, this.pending--, null === Eu || void 0 === Eu || Eu()
        }))
      }
      uploadCube(uu, Ru) {
        const yu = uu.images;
        uu.images = null;
        const Eu = tm(this.engine, this.device, yu, (0, Mu.C)(Ru), uu.hasMips);
        uu.view = Eu.createView({
          dimension: "cube"
        }), uu.destroy = () => {
          Eu.destroy()
        }
      }
      createDynamic(uu, Ru) {
        const {
          canvas: yu
        } = uu, Eu = (0, Um.d)(this.engine, Math.max(1, yu.width), Math.max(1, yu.height), {
          mipMaps: Ru.hasMips,
          srgb: !1
        });
        Ru.dynamic = Eu, Ru.view = Eu.view, Ru.destroy = () => {
          Eu.texture.destroy()
        }, this.pushDynamic(uu, Ru)
      }
      pushDynamic(uu, Ru) {
        const yu = Ru.dynamicSource,
          Eu = Ru.dynamic,
          {
            canvas: Ku
          } = uu;
        if (yu && Eu && 0 !== Ku.width && 0 !== Ku.height) return Ku.width !== Eu.width || Ku.height !== Eu.height ? (this.releaseTexture(Ru), Ru.dynamic = null, Ru.view = null, void this.createDynamic(uu, Ru)) : void(0, Um.f)(this.engine, Eu, Ku, {
          invertY: yu.invertY,
          premultiplyAlpha: yu.premultiplied
        })
      }
    }

    function im(uu) {
      return "cube" === uu.kind ? uu.rootUrl : "canvas" === uu.kind ? "canvas" : uu.url
    }
    const Ym = new Uint8Array(4);

    function om(uu) {
      const Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      uu._colorAttachment.storeOp = uu._targetSignature._sampleCount > 1 ? Ru : "store";
      const yu = uu._renderPassDescriptor.depthStencilAttachment;
      yu && (yu.depthStoreOp = Ru, yu.stencilStoreOp && (yu.stencilStoreOp = Ru))
    }
    var qm = yu(37528),
      Om = yu(37585),
      am = yu(37190),
      fm = yu(39292);
    const uJ = new Float64Array([1, 1, 1]),
      RJ = new Float64Array([0, 1, 0]),
      yJ = new Float64Array(4),
      EJ = new Float32Array(16),
      KJ = new Float64Array(3),
      QJ = new Float64Array(4);

    function mJ(uu, Ru, yu) {
      uu.fov = Ru.fov, uu.near = Ru.near, uu.far = Ru.far, uu.renderWidth = yu.renderWidth, uu.renderHeight = yu.renderHeight, (0, am.y)(Ru.holderRotation, 0, yJ, 0), (0, am.e)(uJ, 0, yJ, 0, Ru.holderPosition, 0, EJ);
      const Eu = Ru.Qv;
      KJ[0] = Eu[0], KJ[1] = Eu[1], KJ[2] = Eu[2] + 1;
      const Ku = uu.viewMatrix;
      (0, am.o)(Eu, KJ, RJ, Ku), (0, am.l)(Ku, 0, Ku), (0, am.r)(Ku, EJ, 0, Ku), (0, am.l)(Ku, 0, Ku);
      const Qu = uu.worldMatrix;
      (0, am.l)(Ku, 0, Qu), uu.eye[0] = Qu[12], uu.eye[1] = Qu[13], uu.eye[2] = Qu[14], QJ[0] = uu.fov, QJ[1] = uu.renderWidth / uu.renderHeight, QJ[2] = uu.near, QJ[3] = uu.far, (0, am.v)(QJ, uu.projectionMatrix), (0, am.r)(Ku, uu.projectionMatrix, 0, uu.viewProjectionMatrix), (0, fm.f)(uu.viewProjectionMatrix, uu.frustum)
    }

    function JJ(uu, Ru) {
      let yu = uu.frustumPlanes;
      yu || (yu = uu.frustumPlanes = Array.from({
        length: 6
      }, (() => new qm.d(0, 0, 0, 0))));
      for (let Eu = 0; Eu < 6; Eu++) {
        const uu = yu[Eu].normal;
        uu._x = Ru[4 * Eu], uu._y = Ru[4 * Eu + 1], uu._z = Ru[4 * Eu + 2], uu._isDirty = !0, yu[Eu].d = Ru[4 * Eu + 3]
      }
    }

    function NJ(uu, Ru) {
      const yu = Ru.clearColor;
      uu.clearColour[0] = yu.r, uu.clearColour[1] = yu.g, uu.clearColour[2] = yu.b, uu.clearColour[3] = yu.a;
      const Eu = Ru.ambientColor;
      uu.ambientColour[0] = Eu.r, uu.ambientColour[1] = Eu.g, uu.ambientColour[2] = Eu.b, uu.animationRatio = Ru.animationRatio, uu.frameId = Ru.frameId, uu.version++
    }

    function XJ(uu) {
      const Ru = uu.model.view;
      return Ru.animTick = (0, Om.g)(), Ru.timeMs = performance.now(), NJ(Ru, uu.cp), uu.model.update(Ru.frameId), Ru
    }

    function VJ(uu) {
      const Ru = uu.cp,
        {
          view: yu,
          LO: Eu
        } = uu.model;
      return mJ(yu, Eu, Ru.eS()), Ru.onBeforeRenderObservable.notifyObservers(Ru), JJ(Ru, yu.frustum), Ru.onBeforeCameraRenderObservable.notifyObservers(Ru.activeCamera), XJ(uu)
    }
    var rJ = yu(37152),
      BJ = yu(37268),
      xJ = yu(37572);

    function SJ(uu) {
      var Ru, yu;
      const Eu = (0, Au.U)(uu);
      if (!Eu || Eu.diffuseTexture && (0, xJ.m)(uu)) return null;
      const Ku = null === (Ru = (0, Au.u)(Eu, ku.j.name)) || void 0 === Ru ? void 0 : Ru.state,
        Qu = null === (yu = (0, Au.u)(Eu, iQ.b.name)) || void 0 === yu ? void 0 : yu.state,
        mu = new Float32Array(16);
      return function(uu, Ru, yu, Eu) {
        var Ku, Qu;
        const mu = BE;
        Eu.set(uu.diffuseColor, mu.diffuse), Eu[mu.diffuse + 3] = uu.alpha, Eu.set(uu.ambientColor, mu.ambientAndCutoff), Eu[mu.ambientAndCutoff + 3] = uu.alphaCutOff, Eu.set(uu.emissiveColor, mu.emissiveAndLevel), Eu[mu.emissiveAndLevel + 3] = null !== (Ku = null === (Qu = uu.diffuseTexture) || void 0 === Qu ? void 0 : Qu.level) && void 0 !== Ku ? Ku : 1, null !== Ru && void 0 !== Ru && Ru.animDataPerTex ? (Eu[mu.anim + 1] = Om.d, Eu[mu.anim + 2] = Ru.animDataPerTex.length / 3 - 1) : yu && (Eu[mu.anim + 1] = yu.numAnimStates, Eu[mu.anim + 2] = yu.ticksPerAnimState)
      }(Eu, Ku, Qu, mu), {
        model: Eu,
        atlas: Ku,
        texture: Ku ? "atlas" : Eu.diffuseTexture ? "single" : "none",
        animated: Ku ? !!Ku.animDataPerTex : !!Qu,
        liquid: (0, xJ.p)(uu),
        customRenderMat: (0, xJ.m)(uu),
        uniformData: mu
      }
    }
    var pJ = yu(37139);
    class TJ {
      constructor(uu) {
        this.units = uu, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var uu;
        this.buffer.destroy(), null === (uu = this.twin) || void 0 === uu || uu.destroy()
      }
    }
    class WJ {
      constructor(uu, Ru) {
        this.arena = uu, this.yT = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.yT = new cm(Ru);
        const yu = new TJ(Ru);
        yu.buffer = this.createBuffer(yu, !1), this.backings.push(yu), this.refresh()
      }
      get Nr() {
        return this.yT.Nr
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
        let uu = 0;
        for (const Ru of this.backings) uu += Ru.units * (this.arena.unitBytes + (Ru.twin ? this.arena.twinUnitBytes : 0));
        return uu
      }
      holds(uu) {
        return uu.start + uu.length <= this.usable
      }
      lost(uu) {
        return this.dropped || uu.start + uu.length > this.Nr
      }
      write(uu, Ru) {
        const {
          device: yu,
          unitBytes: Eu
        } = this.arena;
        for (const Ku of this.backings) {
          const Qu = (Ku.units - uu.start) * Eu;
          Qu > 0 && yu.queue.writeBuffer(Ku.buffer, uu.start * Eu, Ru, 0, Math.min(Ru.byteLength, Qu))
        }
      }
      writeLight(uu, Ru) {
        const {
          device: yu,
          twinUnitBytes: Eu,
          verticesPerUnit: Ku
        } = this.arena, {
          light: Qu,
          count: mu
        } = this.arena.twinLight(Ru, Math.min(Ru.length, uu.length * Ku));
        for (const Ju of this.backings) {
          Ju.twin || (Ju.twin = this.createBuffer(Ju, !0));
          const Ru = (Ju.units - uu.start) * Ku;
          Ru > 0 && yu.queue.writeBuffer(Ju.twin, uu.start * Eu, Qu, 0, Math.min(mu, Ru))
        }
      }
      grow(uu) {
        this.arena.assertNotDrawing();
        const {
          device: Ru,
          unitBytes: yu,
          label: Eu
        } = this.arena, Ku = this.backings[this.backings.length - 1], Qu = new TJ(uu), mu = Ru.createCommandEncoder({
          label: `${Eu}-grow`
        });
        Qu.buffer = this.createBuffer(Qu, !1), mu.copyBufferToBuffer(Ku.buffer, 0, Qu.buffer, 0, Ku.units * yu), Ku.twin && (Qu.twin = this.createBuffer(Qu, !0), mu.copyBufferToBuffer(Ku.twin, 0, Qu.twin, 0, Ku.units * this.arena.twinUnitBytes)), Ru.queue.submit([mu.finish()]), this.backings.push(Qu), this.yT.grow(uu)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const uu of this.backings) uu.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(uu, Ru) {
        const {
          device: yu,
          unitBytes: Eu,
          twinUnitBytes: Ku,
          usage: Qu,
          label: mu
        } = this.arena;
        yu.pushErrorScope("out-of-memory");
        const Ju = yu.createBuffer({
          label: Ru ? `${mu}-light` : mu,
          size: uu.units * (Ru ? Ku : Eu),
          usage: (Ru ? this.arena.twinUsage : Qu) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, yu.popErrorScope().then((yu => {
          this.arena.awaitingVerdict--, this.settle(uu, Ru, !yu, !0)
        }), (yu => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${mu} buffer, taken as failed: ${String(yu)}`), this.settle(uu, Ru, !1, !1)
        })), Ju
      }
      settle(uu, Ru, yu, Eu) {
        const Ku = this.backings.indexOf(uu);
        if (!(this.dropped || Ku < 0)) {
          if (!yu) {
            if (Eu && this.arena.ranOutOfMemory(uu.units, uu.units * (Ru ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Ku) return void this.drop();
            for (const uu of this.backings.splice(Ku)) uu.destroy();
            return this.yT.truncate(this.backings[Ku - 1].units), this.growable = !1, void this.promote()
          }
          Ru ? uu.twinReady = !0 : (uu.bufferReady = !0, this.arena.allocatedBuffer(uu.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: uu
        } = this;
        let Ru = 0;
        for (; Ru + 1 < uu.length && uu[Ru].ready && uu[Ru + 1].ready;) Ru++;
        for (const yu of uu.splice(0, Ru)) yu.destroy();
        this.refresh()
      }
      refresh() {
        const uu = this.backings[0];
        this.buffer = uu.buffer, this.twin = uu.twinReady ? uu.twin : null, this.usable = !this.dropped && uu.bufferReady ? uu.units : 0
      }
    }
    class jJ {
      constructor(uu, Ru, yu, Eu) {
        let {
          verticesPerUnit: Ku = 1,
          twinUsage: Qu = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = uu, this.unitBytes = Ru, this.usage = yu, this.label = Eu, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, XR.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), Ru % 4 !== 0) throw new Error(`${Eu}: ${Ru}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Ku, this.twinUsage = Qu, this.twinValueBytes = Ku > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Ku
      }
      twinLight(uu, Ru) {
        if (4 === this.twinValueBytes) return this.widened.length < Ru && (this.widened = new Float32Array(Math.max(Ru, 2 * this.widened.length))), this.widened.set(uu.subarray(0, Ru)), {
          light: this.widened,
          count: Ru
        };
        const yu = Ru % this.verticesPerUnit;
        if (0 === yu) return {
          light: uu,
          count: Ru
        };
        const Eu = Ru - yu + this.verticesPerUnit;
        return this.padded.length < Eu && (this.padded = new Uint16Array(Math.max(Eu, 2 * this.padded.length))), this.padded.set(uu.subarray(0, Ru)), this.padded.fill(0, Ru, Eu), {
          light: this.padded,
          count: Eu
        }
      }
      allocate(uu) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), uu > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Ku of this.pages) {
          const Ru = Ku.yT.allocate(uu);
          if (Ru >= 0) return {
            page: Ku,
            start: Ru,
            length: uu
          }
        }
        const Ru = this.pages[this.pages.length - 1];
        if (null !== Ru && void 0 !== Ru && Ru.canGrow) {
          const yu = Math.min(this.ceiling, Math.max(2 * Ru.Nr, Ru.Nr + uu));
          if (yu - Ru.Nr >= uu) return Ru.grow(yu), {
            page: Ru,
            start: Ru.yT.allocate(uu),
            length: uu
          }
        }
        Ru && Ru !== this.pages[0] && 0 === Ru.yT.used && Ru.drop();
        const yu = Math.floor(1048576 / this.unitBytes),
          Eu = new WJ(this, Math.max(uu, Math.min(this.ceiling, yu)));
        return this.pages.push(Eu), {
          page: Eu,
          start: Eu.yT.allocate(uu),
          length: uu
        }
      }
      free(uu) {
        this.assertNotDrawing();
        const {
          page: Ru
        } = uu;
        Ru.yT.free(uu.start, uu.length), 0 === Ru.yT.used && Ru !== this.pages[0] && Ru !== this.pages[this.pages.length - 1] && Ru.drop()
      }
      remove(uu) {
        const Ru = this.pages.indexOf(uu);
        Ru >= 0 && this.pages.splice(Ru, 1)
      }
      ranOutOfMemory(uu, Ru) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${Ru}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, uu), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, uu) / 2));
        const yu = performance.now();
        yu >= this.shortageUntil && (this.forgetFailedAt = yu + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = yu + 1e3)
      }
      allocatedBuffer(uu) {
        uu >= this.failed && (this.failed = 1 / 0);
        const Ru = Math.min(2 * uu, Math.floor((uu + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, Ru))
      }
      stats() {
        let uu = 0,
          Ru = 0,
          yu = 0,
          Eu = 0;
        for (const Ku of this.pages) uu += Ku.Nr, Ru += Ku.yT.used, yu += Ku.hasTwin ? Ku.Nr * this.twinUnitBytes : 0, Eu += Ku.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: uu * this.unitBytes,
          usedBytes: Ru * this.unitBytes,
          twinBytes: yu,
          allocatedBytes: Eu
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: uu,
          maxStorageBufferBindingSize: Ru
        } = this.device.limits;
        let yu = Math.floor(Math.min(67108864, uu) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (yu = Math.min(yu, Math.floor(Ru / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (yu = Math.min(yu, Math.floor(Ru / this.twinUnitBytes))), yu
      }
    }
    const HJ = 16383;

    function dJ(uu, Ru, yu, Eu, Ku) {
      let Qu = 0;
      for (let mu = yu; mu < Eu; mu += HJ) uu.drawIndexed(6 * Math.min(HJ, Eu - mu), 1, 0, Ru + 4 * mu, Ku), Qu++;
      return Qu
    }
    class bJ {
      constructor(uu, Ru) {
        this.recordsGroup = Ru, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const yu = eR.i.strideWithoutAtlas;
        this.vertexArena = new jJ(uu, yu, GPUBufferUsage.VERTEX, `terrain-vertices-${yu}`), this.quadArena = new jJ(uu, BJ.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Eu = (0, AR.e)(new Uint16Array(98298), HJ);
        this.quadPattern = uu.createBuffer({
          label: "terrain-quad-pattern",
          size: Eu.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), uu.queue.writeBuffer(this.quadPattern, 0, Eu)
      }
      set(uu, Ru) {
        const yu = Ru.packedVertices,
          Eu = yu ? this.quadArena.allocate(uu.faceCount) : this.vertexArena.allocate(uu.vertexCount);
        if (!Eu) return !1;
        uu.vertices = Eu;
        const Ku = yu ? new Uint8Array(yu.buffer, yu.byteOffset, yu.byteLength) : new Uint8Array(Ru.vertices);
        return Eu.page.write(Eu, Ku), !0
      }
      setLight(uu, Ru) {
        const {
          vertices: yu
        } = uu;
        yu && 0 !== Ru.length && yu.page.live && (Ru.length < uu.vertexCount ? yu.page.arena.warnOnce("shortLight", `a part's ${Ru.length} light values are fewer than its ${uu.vertexCount} vertices, so its light is left as it was`) : (yu.page.writeLight(yu, Ru), uu.lit = !0))
      }
      lightFullSky(uu, Ru) {
        this.fullSky.length < Ru && (this.fullSky = new Uint16Array(Math.max(Ru, 4096)).fill(pJ.h));
        for (const yu of uu) {
          const uu = yu.vertices;
          uu.page.live && (uu.page.writeLight(uu, this.fullSky), yu.lit = !0)
        }
      }
      backed(uu) {
        const {
          vertices: Ru
        } = uu;
        return !!Ru && Ru.page.holds(Ru)
      }
      lost(uu) {
        const {
          vertices: Ru
        } = uu;
        return !!Ru && Ru.page.lost(Ru)
      }
      release(uu) {
        uu.vertices && uu.vertices.page.arena.free(uu.vertices), uu.vertices = null, uu.lit = !1
      }
      setDrawing(uu) {
        this.forgetBound()
      }
      draw(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ru.faceCount;
        const Qu = Ru.vertices,
          mu = Qu.page,
          Ju = yu ? mu.twin : null;
        if (!mu.holds(Qu) || yu && !Ju) return 0;
        const {
          verticesPerUnit: Nu
        } = mu.arena;
        let Xu = Qu.start * Nu;
        this.boundPattern || (uu.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Vu = Eu + Ku;
        if (Nu > 1) return mu.buffer === this.boundRecords && Ju === this.boundRecordsLight || (uu.setBindGroup(1, this.recordsGroup(mu.buffer, Ju)), this.boundRecords = mu.buffer, this.boundRecordsLight = Ju), dJ(uu, Xu, Eu, Vu, Ru.slot);
        mu.buffer !== this.boundVertices && (uu.setVertexBuffer(0, mu.buffer), this.boundVertices = mu.buffer), Ju && Ju !== this.boundLight && (uu.setVertexBuffer(1, Ju), this.boundLight = Ju);
        const ru = Ru.faceCount;
        return Vu <= ru ? dJ(uu, Xu, Eu, Vu, Ru.slot) : dJ(uu, Xu, Eu, ru, Ru.slot) + dJ(uu, Xu, Math.max(Eu, ru) - ru, Vu - ru, Ru.slot)
      }
      get buffersAwaitingVerdict() {
        let uu = 0;
        for (const Ru of this.arenas()) uu += Ru.awaitingVerdict;
        return uu
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class CJ {
      constructor(uu, Ru, yu, Eu) {
        this.device = uu, this.splitBefore = Ru, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = uu.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Ku = uu.createShaderModule({
          label: "scene-depth-copy",
          code: (Qu = yu._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Qu?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Qu;
        uu.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Ku,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Ku,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((uu => {
          this.pipeline = uu, this.building = !1
        }), (uu => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", uu)
        })), yu._executeWithTransmission = () => this.execute(yu, Eu)
      }
      get compiling() {
        return this.building
      }
      setWanted(uu) {
        this.wanted = uu
      }
      setPlanes(uu, Ru) {
        uu === this.near && Ru === this.far || (this.near = uu, this.far = Ru, this.unproject[0] = uu / (Ru - uu), this.unproject[1] = Ru * uu / (Ru - uu), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.copy) || void 0 === Ru ? void 0 : Ru.view) && void 0 !== uu ? uu : null
      }
      execute(uu, Ru) {
        var yu;
        null === (yu = this.retired) || void 0 === yu || yu.destroy(), this.retired = null;
        const Eu = uR(Ru),
          Ku = uu._transparentBindings,
          Qu = this.wanted && this.pipeline ? this.splitIndex(Ku) : -1,
          mu = uu._colorAttachment,
          Ju = mu.resolveTarget;
        Qu >= 0 && (mu.resolveTarget = void 0, om(uu, !0));
        let Nu = Eu.beginRenderPass(uu._renderPassDescriptor);
        Nu.setBindGroup(0, uu._sceneBG);
        let Xu = this.drawList(Nu, Ru, uu._opaqueBindings, 0, uu._opaqueBindings.length);
        if (Xu += this.drawList(Nu, Ru, uu._directBindings, 0, uu._directBindings.length), Xu += this.drawList(Nu, Ru, Ku, 0, Qu >= 0 ? Qu : Ku.length), Nu.end(), Qu < 0) return Xu;
        om(uu);
        const Vu = uu._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: ru,
            stencilLoadOp: Bu
          } = Vu,
          xu = mu.loadOp;
        mu.resolveTarget = Ju;
        try {
          this.copyDepth(Eu, uu), mu.loadOp = "load", Vu.depthLoadOp = "load", Bu && (Vu.stencilLoadOp = "load"), Nu = Eu.beginRenderPass(uu._renderPassDescriptor), Nu.setBindGroup(0, uu._sceneBG), Xu += this.drawList(Nu, Ru, Ku, Qu, Ku.length), Nu.end()
        } finally {
          mu.loadOp = xu, Vu.depthLoadOp = ru, Vu.stencilLoadOp = Bu
        }
        return Xu
      }
      splitIndex(uu) {
        for (let Ru = 0; Ru < uu.length; Ru++)
          if (uu[Ru].renderable === this.splitBefore) return Ru;
        return -1
      }
      drawList(uu, Ru, yu, Eu, Ku) {
        let Qu = null,
          mu = 0;
        for (let Ju = Eu; Ju < Ku; Ju++) {
          const Eu = yu[Ju],
            Ku = Eu.renderable.mesh;
          Ku && !1 === Ku.visible || (Eu.pipeline !== Qu && (uu.setPipeline(Eu.pipeline), Qu = Eu.pipeline), mu += Eu.draw(uu, Ru))
        }
        return mu
      }
      copyDepth(uu, Ru) {
        var yu, Eu;
        const Ku = (null !== (yu = Ru._config.depth) && void 0 !== yu ? yu : Ru._config.rt)._depthTexture,
          Qu = (null === (Eu = this.copy) || void 0 === Eu ? void 0 : Eu.source) === Ku ? this.copy : this.remakeCopy(Ku),
          mu = uu.beginRenderPass(Qu.pass);
        mu.setPipeline(this.pipeline), mu.setBindGroup(0, Qu.bindGroup), mu.draw(3), mu.end()
      }
      remakeCopy(uu) {
        var Ru, yu;
        this.retired = null !== (Ru = null === (yu = this.copy) || void 0 === yu ? void 0 : yu.texture) && void 0 !== Ru ? Ru : null;
        const Eu = this.device.createTexture({
            label: "scene-depth",
            size: [uu.width, uu.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Ku = Eu.createView(),
          Qu = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: uu.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          mu = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Ku,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: uu,
          texture: Eu,
          view: Ku,
          bindGroup: Qu,
          pass: mu
        }, this.copy
      }
    }
    const kJ = "rgba8unorm";

    function eJ(uu) {
      return uu ? 15 : 1
    }
    class AJ {
      constructor(uu, Ru, yu, Eu) {
        this.device = uu, this.terrain = Eu, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Ru._targetSignature._sampleCount > 1, this.cameraBuffer = uu.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = uu.createBindGroupLayout({
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
        const Ku = uu.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = uu.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Ku,
          entries: []
        });
        const Qu = uu.createShaderModule({
          label: "sun-shadow-mask",
          code: (mu = this.edge, `${(0,DR.D)()}${Ly({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${mu?Dy:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${eJ(mu)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${mu?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var mu;
        uu.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: uu.createPipelineLayout({
            bindGroupLayouts: [this.layout, Ku, Ku, cQ(uu, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Qu,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Qu,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((uu => {
          this.pipeline = uu, this.building = !1
        }), (uu => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", uu)
        }));
        const Ju = Ru._executeWithTransmission;
        Ru._executeWithTransmission = uu => this.execute(Ru, yu, (() => Ju ? Ju(uu) : function(uu, Ru) {
          const yu = uR(Ru).beginRenderPass(uu._renderPassDescriptor);
          yu.setBindGroup(0, uu._sceneBG);
          let Eu = DJ(yu, Ru, uu._opaqueBindings);
          return Eu += DJ(yu, Ru, uu._directBindings), Eu += DJ(yu, Ru, uu._transparentBindings), yu.end(), Eu
        }(Ru, yu)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.targets) || void 0 === Ru ? void 0 : Ru.maskView) && void 0 !== uu ? uu : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(uu) {
        ! function(uu, Ru) {
          const yu = uu.worldMatrix,
            Eu = uu.projectionMatrix,
            Ku = 1 / Eu[0],
            Qu = 1 / Eu[5],
            mu = uu.far * uu.near / (uu.far - uu.near);
          Ru[0] = uu.eye[0], Ru[1] = uu.eye[1], Ru[2] = uu.eye[2], Ru[3] = 2 ** -23 / mu, Ru[4] = yu[0] * Ku, Ru[5] = yu[1] * Ku, Ru[6] = yu[2] * Ku, Ru[7] = mu, Ru[8] = yu[4] * Qu, Ru[9] = yu[5] * Qu, Ru[10] = yu[6] * Qu, Ru[11] = uu.near / (uu.far - uu.near), Ru[12] = yu[8], Ru[13] = yu[9], Ru[14] = yu[10], Ru[15] = 0
        }(uu, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(uu, Ru, yu) {
        if (this.retire(), !this.terrain.readsMask) return yu();
        const Eu = this.targetsFor(uu),
          Ku = uR(Ru),
          Qu = uu._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Eu.prepass.depthStencilAttachment.view = Qu.view);
        const mu = this.terrain.drawPrepass(Ku, Eu.prepass, uu._sceneBG);
        if (0 === mu) return yu();
        if (this.trace(Ku, Eu), this.edge) return mu + 1 + yu();
        const {
          depthLoadOp: Ju,
          stencilLoadOp: Nu
        } = Qu;
        Qu.depthLoadOp = "load", Nu && (Qu.stencilLoadOp = "load");
        try {
          return mu + 1 + yu()
        } finally {
          Qu.depthLoadOp = Ju, Qu.stencilLoadOp = Nu
        }
      }
      trace(uu, Ru) {
        const yu = this.terrain.sunShadowGroup(),
          Eu = uu.beginRenderPass(Ru.trace);
        this.pipeline && yu && (Eu.setPipeline(this.pipeline), Eu.setBindGroup(0, Ru.bindGroup), Eu.setBindGroup(1, this.empty), Eu.setBindGroup(2, this.empty), Eu.setBindGroup(3, yu), Eu.draw(3)), Eu.end()
      }
      retire() {
        const uu = this.retired;
        var Ru;
        uu && (uu.mask.destroy(), uu.normals.destroy(), null === (Ru = uu.depth) || void 0 === Ru || Ru.destroy(), this.retired = null)
      }
      targetsFor(uu) {
        var Ru, yu;
        const Eu = (null !== (Ru = uu._config.depth) && void 0 !== Ru ? Ru : uu._config.rt)._depthTexture;
        return (null === (yu = this.targets) || void 0 === yu ? void 0 : yu.source) === Eu ? this.targets : this.remake(uu, Eu)
      }
      remake(uu, Ru) {
        var yu;
        this.retired = this.targets;
        const Eu = [Ru.width, Ru.height],
          Ku = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Eu,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Qu = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Eu,
            format: kJ,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          mu = null !== (yu = uu._targetSignature._depthStencilFormat) && void 0 !== yu ? yu : Ru.format,
          Ju = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Eu,
            format: mu,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Nu = uu._renderPassDescriptor.depthStencilAttachment,
          Xu = mu.includes("stencil"),
          Vu = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Qu.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: Ju ? Ju.createView() : Nu.view,
              depthClearValue: Nu.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Xu ? {
                stencilClearValue: Nu.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          ru = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== Ju && void 0 !== Ju ? Ju : Ru).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Qu.createView()
            }]
          }),
          Bu = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Ku.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [eJ(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: Ru,
          mask: Ku,
          maskView: Ku.createView(),
          normals: Qu,
          depth: Ju,
          bindGroup: ru,
          prepass: Vu,
          trace: Bu
        }, this.targets
      }
    }

    function DJ(uu, Ru, yu) {
      let Eu = null,
        Ku = 0;
      for (const Qu of yu) {
        const yu = Qu.renderable.mesh;
        yu && !1 === yu.visible || (Qu.pipeline !== Eu && (uu.setPipeline(Qu.pipeline), Eu = Qu.pipeline), Ku += Qu.draw(uu, Ru))
      }
      return Ku
    }
    const MJ = 6e4,
      IJ = {
        status: "ok"
      },
      GJ = {
        status: "skipped"
      };
    async function UJ(uu, Ru) {
      const {
        isCancelled: yu
      } = uu;
      if (yu()) return {
        status: "Ty"
      };
      const {
        target: Eu
      } = Ru;
      if (!Eu) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Ku = [],
        Qu = Promise.all(Array.from(new Set(uu.materials), (async yu => {
          Ku.push(await async function(uu, Ru, yu, Eu) {
            const Ku = {
              lighting: uu.lighting,
              dirLightCount: Math.min(uu.dirLightCount, 4),
              ix: uu.runtime
            };
            try {
              const Qu = Ru.material(Eu);
              return Qu && XE(Ru.programKey(Qu, !1, Ku)) ? (await Qu.ready, uu.isCancelled() ? IJ : Qu.bindGroupLayout ? await async function(uu, Ru, yu, Eu) {
                const {
                  device: Ku
                } = uu;
                let Qu, mu;
                Ku.pushErrorScope("validation");
                try {
                  Qu = uu.pipelineBuild(Ru, yu, Eu)
                } finally {
                  mu = Ku.popErrorScope().catch((() => null))
                }
                const [Ju, Nu] = await Promise.all([mu, Qu.built.then((() => null), (uu => null !== uu && void 0 !== uu ? uu : new Error("pipeline failed")))]);
                if (!Ju && !Nu) return IJ;
                const Xu = await nJ(Qu.module),
                  Vu = Xu.length > 0 ? Xu.map((uu => `${Qu.name} ${uu.lineNum}:${uu.linePos}: ${uu.message}`)).join("\n") : `${Qu.name}: ${sJ(null!==Nu&&void 0!==Nu?Nu:Ju)}`;
                return {
                  status: "failed",
                  material: Ru.model.name,
                  message: Vu
                }
              }(Ru, Qu, Ru.programKey(Qu, "none" !== Qu.texture, Ku), yu): (console.warn(`Shader pack: skipped the compile check for "${Eu.name}", whose textures failed to load`), GJ)) : IJ
            } catch (Qu) {
              return {
                status: "failed",
                material: Eu.name,
                message: sJ(Qu)
              }
            }
          }(uu, Ru, Eu, yu))
        }))),
        mu = function(uu, Ru) {
          let yu, Eu, Ku = !1;
          const Qu = new Promise((Qu => {
            var mu;
            yu = setTimeout((() => {
              Qu("timeout")
            }), null !== (mu = Ru.timeoutMs) && void 0 !== mu ? mu : MJ), Eu = setInterval((() => {
              Ru.isCancelled() && Qu("Ty")
            }), 50), uu.lost.then((() => {
              Ku = !0, Qu("lost")
            }))
          }));
          return {
            signal: Qu,
            lost: () => Ku,
            dispose: () => {
              clearTimeout(yu), clearInterval(Eu)
            }
          }
        }(Ru.device, uu);
      let Ju;
      try {
        Ju = await Promise.race([Qu.then((() => "done")), mu.signal])
      } finally {
        mu.dispose()
      }
      if ("Ty" === Ju || yu()) return {
        status: "Ty"
      };
      const Nu = Ku.find((uu => "failed" === uu.status));
      return Nu && "lost" !== Ju && !mu.lost() && await new Promise((uu => {
        setTimeout(uu, 0)
      })), "lost" === Ju || mu.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Nu ? {
        status: "failed",
        failure: {
          material: Nu.material,
          message: Nu.message
        }
      } : "timeout" === Ju ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Xu=uu.timeoutMs)&&void 0!==Xu?Xu:MJ)/1e3} s`), {
        status: "skipped"
      }) : Ku.some((uu => "skipped" === uu.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Xu
    }
    async function nJ(uu) {
      if (!uu) return [];
      try {
        return (await uu.getCompilationInfo()).messages.filter((uu => "error" === uu.type))
      } catch {
        return []
      }
    }

    function sJ(uu) {
      var Ru;
      return null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.message) && void 0 !== Ru ? Ru : String(uu)
    }

    function tJ(uu, Ru, yu, Eu) {
      XE(uu) ? nJ(yu).then((uu => {
        const [yu] = uu;
        YK("terrain", Ru, Eu, yu ? `${yu.lineNum}:${yu.linePos} error: ${yu.message}` : null)
      })) : YK("terrain", Ru, Eu)
    }
    var lJ = yu(37272),
      gJ = yu(37280),
      cJ = yu(37292),
      LJ = yu(37223);

    function zJ(uu, Ru, yu, Eu, Ku) {
      const Qu = Math.hypot(yu[0], yu[1], yu[2]);
      if (!(Qu > 0)) return;
      const mu = [yu[0] / Qu, yu[1] / Qu, yu[2] / Qu],
        Ju = [Math.floor(Ru[0]), Math.floor(Ru[1]), Math.floor(Ru[2])],
        Nu = [0, 0, 0],
        Xu = [1 / 0, 1 / 0, 1 / 0],
        Vu = [1 / 0, 1 / 0, 1 / 0];
      for (let xu = 0; xu < 3; xu++) mu[xu] > 0 ? (Nu[xu] = 1, Xu[xu] = (Ju[xu] + 1 - Ru[xu]) / mu[xu], Vu[xu] = 1 / mu[xu]) : mu[xu] < 0 && (Nu[xu] = -1, Xu[xu] = (Ju[xu] - Ru[xu]) / mu[xu], Vu[xu] = -1 / mu[xu]);
      const {
        jS: ru
      } = uu;
      let Bu = uu.Xw(Ju[0], Ju[1], Ju[2]);
      for (;;) {
        const Ru = Xu[0] < Xu[1] ? Xu[0] < Xu[2] ? 0 : 2 : Xu[1] < Xu[2] ? 1 : 2;
        if (Xu[Ru] > Eu) return;
        const yu = Nu[Ru] > 0 ? Ju[Ru] + 1 : Ju[Ru];
        Ju[Ru] += Nu[Ru], Xu[Ru] += Vu[Ru];
        const Qu = uu.Xw(Ju[0], Ju[1], Ju[2]),
          mu = Qu !== Bu && !(uu.opaque[Bu] && uu.opaque[Qu]);
        if (mu) {
          const Eu = [Ju[0], Ju[1], Ju[2]];
          Eu[Ru] = yu;
          const Qu = Math.floor(Eu[0] / ru),
            mu = Math.floor(Eu[1] / ru),
            Nu = Math.floor(Eu[2] / ru);
          !uu.isDrawn(Qu, mu, Nu) && uu.hasParts(Qu, mu, Nu) && Ku.add(`${Qu},${mu},${Nu}`)
        }
        if (mu && uu.occluders[Qu]) return;
        Bu = Qu
      }
    }

    function FJ(uu, Ru) {
      return uu.group - Ru.group || uu.nearest - Ru.nearest
    }
    class wJ {
      constructor(uu, Ru) {
        this.device = uu, this.fW = Ru, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var uu;
        const Ru = null !== (uu = this.free.pop()) && void 0 !== uu ? uu : this.next++;
        if (8 * Ru >= this.data.length) {
          const uu = new Float32Array(2 * this.data.length);
          uu.set(this.data), this.data = uu, this.words = new Uint32Array(uu.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.fW()
        }
        return Ru
      }
      release(uu) {
        this.free.push(uu)
      }
      set(uu, Ru, yu, Eu, Ku) {
        const Qu = 8 * uu + HE;
        this.data[Qu] = Ru, this.data[Qu + 1] = yu, this.data[Qu + 2] = Eu, this.setVisibility(uu, Ku)
      }
      setVisibility(uu, Ru) {
        this.data[8 * uu + dE] = Ru, this.markDirty(uu, uu)
      }
      setFaces(uu, Ru, yu) {
        const Eu = 8 * uu;
        this.words[Eu + bE] = Ru, this.words[Eu + CE] = yu, this.markDirty(uu, uu)
      }
      markDirty(uu, Ru) {
        this.dirtyMin = Math.min(this.dirtyMin, uu), this.dirtyMax = Math.max(this.dirtyMax, Ru)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const ZJ = jE,
      hJ = !0;
    const PJ = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: ZJ.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      iJ = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class YJ {
      constructor(uu) {
        this.device = uu, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(rE), this.dirLightUniforms = this.frameUniforms.subarray(VE.dirLights, VE.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, XR.c)(), this.faceGroups = !0, this.visibilityGraph = hJ, this.visCull = hJ, this.visCheck = !1, this.visCullMinDistance = cJ.i, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new vJ, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.ix = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new bJ(uu, ((uu, Ru) => this.recordsGroup(uu, Ru))), this.slots = new wJ(uu, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = RR(uu), this.frameLayout = uu.createBindGroupLayout({
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
        }), this.frameBuffer = uu.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = uu.createSampler({
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
          bind: (uu, Ru) => this.createBinding(this.opaqueRenderable, Ru, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (uu, Ru) => this.createBinding(this.transparentRenderable, Ru, !0)
        }
      }
      installSceneDepth(uu, Ru) {
        this.sceneDepth = new CJ(this.device, this.transparentRenderable, uu, Ru)
      }
      createFrameBindGroup() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== uu && void 0 !== uu ? uu : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== Ru && void 0 !== Ru ? Ru : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(uu, Ru) {
        const yu = null !== Ru && void 0 !== Ru ? Ru : uu;
        let Eu = this.recordsGroups.get(yu);
        return Eu || (Eu = this.createFrameBindGroup(uu, Ru), this.recordsGroups.set(yu, Eu)), Eu
      }
      setChunkMesh(uu, Ru, yu) {
        var Eu;
        let Ku = this.chunks.get(uu);
        Ku ? this.geometry.release(Ku) : (Ku = {
          mesh: uu,
          slot: this.slots.allocate(),
          origin: [yu[0], yu[1], yu[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: uu.visibility,
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
        }, this.chunks.set(uu, Ku), this.writeSlot(Ku)), Ku.material = uu.material ? this.materialFor(uu.material) : null, Ku.packed = !!Ru.packedVertices, Ku.vertexCount = (0, BJ.h)(Ru), Ku.faceCount = Ku.vertexCount / 4;
        const Qu = null !== (Eu = Ru.faceGroups) && void 0 !== Eu ? Eu : null;
        if (Ku.faceGroups = Qu, Qu) {
          const uu = lJ.k;
          Ku.planePX = Qu[uu], Ku.planeNX = Qu[uu + 1], Ku.planePY = Qu[uu + 2], Ku.planeNY = Qu[uu + 3], Ku.planePZ = Qu[uu + 4], Ku.planeNZ = Qu[uu + 5]
        }
        this.drawWhole(Ku), 0 !== Ku.faceCount && (this.geometry.set(Ku, Ru) ? (Ku.packed && this.slots.setFaces(Ku.slot, Ku.vertices.start + Ku.faceCount, Ku.faceCount), Ru.ES && this.setChunkMeshLight(uu, Ru.ES)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Ku.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(uu, Ru) {
        const yu = this.chunks.get(uu);
        yu && this.geometry.setLight(yu, Ru)
      }
      drawStats() {
        let uu = this.transparent.length;
        for (const Ru of this.opaqueBatches) uu += Ru.meshes.length;
        return {
          drawn: uu,
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
      removeChunkMesh(uu) {
        const Ru = this.chunks.get(uu);
        Ru && (this.geometry.release(Ru), this.slots.release(Ru.slot), this.chunks.delete(uu))
      }
      remeshLost(uu, Ru) {
        this.geometry.release(Ru), Ru.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** Ru.lostRemeshes++);
        const yu = uu.Fr,
          [Eu, Ku, Qu] = yu.CKu(Ru.origin[0], Ru.origin[1], Ru.origin[2]),
          mu = yu.Bp.xp(Eu, Ku, Qu);
        mu && (mu.Vp = !0, mu.Hp = !0, yu.rp(mu, !1))
      }
      chooseFaceRanges(uu, Ru, yu) {
        const Eu = this.faceRanges;
        uu.faceMask = yu, uu.rangeCount = (0, gJ.q)(Ru, yu, Eu), uu.first0 = Eu[0], uu.count0 = Eu[1], uu.first1 = Eu[2], uu.count1 = Eu[3]
      }
      drawWhole(uu) {
        uu.faceMask = -1, uu.faceEpoch = -1, uu.rangeCount = 1, uu.first0 = 0, uu.count0 = uu.faceCount
      }
      writeSlot(uu) {
        const [Ru, yu, Eu] = this.originOffset;
        this.slots.set(uu.slot, uu.origin[0] - Ru, uu.origin[1] - yu, uu.origin[2] - Eu, uu.visibility)
      }
      materialFor(uu) {
        const Ru = this.materials.get(uu);
        if (Ru) return Ru;
        const yu = SJ(uu);
        if (!yu) return this.warnOnce(`material:${uu.name}`, `Lite terrain cannot draw material "${uu.name}"; its chunks are skipped.`), null;
        const {
          model: Eu,
          atlas: Ku,
          texture: Qu,
          animated: mu,
          uniformData: Ju
        } = yu, Nu = {
          id: this.materials.size,
          model: Eu,
          texture: Qu,
          animated: mu,
          uniformData: Ju,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${uu.name}`,
            size: Ju.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: yu.liquid,
          customRenderMat: yu.customRenderMat,
          atlasCount: 0,
          Q0: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(uu, Nu), this.device.queue.writeBuffer(Nu.uniformBuffer, 0, Ju), Nu.ready = this.createMaterialBindGroup(Nu, Ku).catch((Ru => {
          console.error(`Lite terrain failed to load the textures of material "${uu.name}"`, Ru)
        })), Nu
      }
      materialLayout(uu) {
        const Ru = function(uu) {
            const Ru = ["uniforms"];
            if ("atlas" === uu.texture) {
              uu.animated && Ru.push("animData"), Ru.push("sampler");
              for (let yu = 0; yu < uu.atlasCount; yu++) Ru.push("textureArray")
            } else "single" === uu.texture && Ru.push("sampler", "texture");
            return Ru
          }(uu),
          yu = Ru.join(",");
        let Eu = this.materialLayouts.get(yu);
        if (!Eu) {
          const uu = GPUShaderStage.FRAGMENT;
          Eu = this.device.createBindGroupLayout({
            label: `terrain-material-${yu}`,
            entries: Ru.map(((Ru, yu) => {
              switch (Ru) {
                case "uniforms":
                  return {
                    binding: yu, visibility: GPUShaderStage.VERTEX | uu, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: yu, visibility: GPUShaderStage.VERTEX | uu, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: yu, visibility: uu, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: yu, visibility: uu, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: yu, visibility: uu, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(yu, Eu)
        }
        return Eu
      }
      async createMaterialBindGroup(uu, Ru) {
        const yu = [{
          buffer: uu.uniformBuffer
        }];
        if (Ru) {
          const {
            urls: Eu,
            pixels: Ku,
            layerWidth: Qu
          } = Ru.sources, mu = await Promise.all(Eu.map(((uu, Ru) => {
            var yu;
            return zK(this.device, uu, null !== (yu = null === Ku || void 0 === Ku ? void 0 : Ku[Ru]) && void 0 !== yu ? yu : null, Qu)
          })));
          uu.atlasCount = mu.length, uu.Q0 = mu[0].layerWidth, uu.atlasLayers = mu[0].layers, Ru.animDataPerTex && yu.push({
            buffer: UK(this.device, Float32Array.from(Ru.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), yu.push(this.sampler);
          for (const uu of mu) yu.push(uu.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === uu.texture) {
          const {
            url: Ru
          } = uu.model.diffuseTexture.source, {
            pixels: Eu,
            width: Ku,
            height: Qu
          } = await cK(Ru);
          yu.push(this.sampler), yu.push(sK(this.device, Eu, Ku, Qu, 1, `terrain-${Ru}`).createView({
            dimension: "2d"
          }))
        }
        const Eu = this.materialLayout(this.programKey(uu, !1));
        uu.bindGroupLayout = Eu, uu.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${uu.model.name}`,
          layout: Eu,
          entries: yu.map(((uu, Ru) => ({
            binding: Ru,
            resource: uu
          })))
        })
      }
      programKey(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Eu = yu ? yu.lighting : this.lighting,
          Ku = yu ? yu.ix : this.ix,
          Qu = {
            texture: uu.texture,
            atlasCount: uu.atlasCount,
            Q0: uu.Q0,
            atlasLayers: uu.atlasLayers,
            animated: uu.animated,
            alphaTest: uu.model.transparencyMode === Au.p.alphaTest,
            lighting: Eu,
            dirLightCount: yu ? yu.dirLightCount : this.dirLightCount,
            packed: Ru
          };
        if (!Ku) return Qu;
        const mu = this.shaderPackFields(uu, Ku),
          Ju = "atlas" === uu.texture && uu.model.transparencyMode === Au.p.opaque && QE(mu.packVariant);
        return {
          ...Qu,
          ...mu,
          alphaTest: Qu.alphaTest || Ju
        }
      }
      shaderPackFields(uu, Ru) {
        return uu.customRenderMat ? EE : function(uu, Ru) {
          if (!uu) return EE;
          const yu = uu.defineFor(Ru ? "liquid" : "terrain");
          return 0 === yu ? EE : {
            packVariant: yu,
            liquid: Ru
          }
        }(Ru, uu.liquid)
      }
      isBlended(uu) {
        return uu.model.transparencyMode === Au.p.alphaBlend
      }
      shaderModule(uu, Ru) {
        let yu = this.modules.get(uu);
        return yu || (yu = this.device.createShaderModule({
          label: Ru,
          code: uu
        }), this.modules.set(uu, yu)), yu
      }
      pipelineFor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!uu.bindGroupLayout) return null;
        const Ku = this.programKey(uu, Ru);
        if (!Eu) return this.pipelineOf(uu, Ku, yu);
        const Qu = {
            ...Ku,
            resting: Eu
          },
          mu = this.pipelineId(uu, Qu, yu),
          Ju = this.pipelines.get(mu);
        if (Ju) return Ju;
        const Nu = this.pipelineOf(uu, Ku, yu);
        return Nu && void 0 === Ju && this.startPipeline(mu, uu, Qu, yu), Nu
      }
      pipelineOf(uu, Ru, yu) {
        const Eu = this.pipelineId(uu, Ru, yu),
          Ku = this.pipelines.get(Eu);
        return void 0 !== Ku ? Ku : (this.startPipeline(Eu, uu, Ru, yu), null)
      }
      pipelineId(uu, Ru, yu) {
        return oJ(Ru, this.isBlended(uu), uu.model.backFaceCulling, yu)
      }
      pipelineBuild(uu, Ru, yu) {
        var Eu;
        const Ku = this.pipelineId(uu, Ru, yu);
        return null !== (Eu = this.builds.get(Ku)) && void 0 !== Eu ? Eu : this.startPipeline(Ku, uu, Ru, yu)
      }
      startPipeline(uu, Ru, yu, Eu) {
        var Ku;
        this.pipelines.set(uu, null);
        const Qu = IE(yu),
          mu = this.isBlended(Ru),
          Ju = this.shadowMask && Eu._depthStencilFormat ? function(uu, Ru, yu, Eu) {
            if (void 0 === uu.packVariant || uu.liquid || Ru) return "none";
            const Ku = (0, MR.e)(uu.packVariant);
            return null === Ku || void 0 === Ku || !Ku.sunShadow || !gy(Ku, yu) || Ku.discards || uu.alphaTest && QE(uu.packVariant) ? "none" : Eu ? "edge" : "plain"
          }(yu, mu, !!this.sunShadow, Eu._sampleCount > 1) : "none";
        let Nu;
        try {
          Nu = GE(yu, !!this.sunShadow, Ju)
        } catch (Tu) {
          if (!XE(yu)) throw Tu;
          return this.failedPackBuild(uu, yu, Qu, Tu)
        }
        const Xu = this.shaderModule(Nu, Qu),
          Vu = [];
        yu.packed || (Vu.push(function(uu, Ru) {
          const yu = [{
            shaderLocation: ZJ.position,
            offset: eR.i.TR,
            format: "float32x3"
          }, {
            shaderLocation: ZJ.normal,
            offset: eR.i.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: ZJ.color,
            offset: eR.i.colorOffset,
            format: "unorm8x4"
          }];
          return uu && yu.push({
            shaderLocation: ZJ.uv,
            offset: eR.i.uvOffset,
            format: "float32x2"
          }), Ru && yu.push({
            shaderLocation: ZJ.blockFlagWords,
            offset: eR.i.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: eR.i.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: yu
          }
        }("none" !== yu.texture, XE(yu))), yu.lighting && Vu.push(PJ));
        const ru = Ru.model.backFaceCulling,
          Bu = {
            label: Qu,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Ru.bindGroupLayout, ...FQ(this.device, yu, !!this.sunShadow, "none" !== Ju)]
            }),
            vertex: {
              module: Xu,
              entryPoint: "mainVertex",
              buffers: Vu
            },
            fragment: vu({
              module: Xu,
              entryPoint: "mainFragment"
            }, Eu, mu ? iJ : null),
            depthStencil: Eu._depthStencilFormat ? {
              format: Eu._depthStencilFormat,
              depthCompare: null !== (Ku = Eu._depthCompare) && void 0 !== Ku ? Ku : yR,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Eu._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: ru ? "back" : "none"
            }
          },
          xu = yu.resting ? 0 : 1;
        this.compiling += xu;
        const Su = "none" === Ju ? this.device.createRenderPipelineAsync(Bu) : this.startMaskPipelines(Xu, Bu, "edge" === Ju);
        Su.then((Ru => {
          this.compiling -= xu, this.pipelines.set(uu, Ru)
        }), (uu => {
          this.compiling -= xu, console.error(`Lite terrain pipeline ${Qu} failed`, uu), tJ(yu, Qu, Xu, uu)
        }));
        const pu = {
          name: Qu,
          module: Xu,
          built: Su
        };
        return this.builds.set(uu, pu), pu
      }
      startMaskPipelines(uu, Ru, yu) {
        const Eu = Ru.depthStencil,
          Ku = this.device.createRenderPipelineAsync(yu ? Ru : {
            ...Ru,
            depthStencil: {
              ...Eu,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Qu = this.device.createRenderPipelineAsync({
            ...Ru,
            label: `${Ru.label}-prepass`,
            fragment: {
              module: uu,
              entryPoint: "prepassFragment",
              targets: [{
                format: kJ
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Ku, Qu]).then((uu => {
          let [Ru, yu] = uu;
          return this.prepassOf.set(Ru, yu), this.maskPipelines++, Ru
        }))
      }
      failedPackBuild(uu, Ru, yu, Eu) {
        console.error(`Lite terrain pipeline ${yu} failed`, Eu), tJ(Ru, yu, null, Eu);
        const Ku = Promise.reject(Eu);
        Ku.catch((() => {}));
        const Qu = {
          name: yu,
          module: null,
          built: Ku
        };
        return this.builds.set(uu, Qu), Qu
      }
      checkShaderPack(uu) {
        return UJ(uu, {
          device: this.device,
          target: this.target,
          material: uu => this.materialFor(uu),
          programKey: (uu, Ru, yu) => this.programKey(uu, Ru, yu),
          pipelineBuild: (uu, Ru, yu) => this.pipelineBuild(uu, Ru, yu)
        })
      }
      createBinding(uu, Ru, yu) {
        return this.target = Ru, {
          renderable: uu,
          pipeline: mR(this.device, Ru),
          draw: uu => {
            this.geometry.setDrawing(!0);
            try {
              return yu ? this.drawTransparent(uu, Ru) : this.drawOpaque(uu, Ru)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(uu, Ru) {
        var yu, Eu, Ku, Qu;
        const {
          Yr: mu
        } = uu;
        this.lighting = uu.Up;
        const Ju = (0, rJ.u)(Ru);
        this.dirLightCount = Math.min(Ju, 4), this.ix = null !== (yu = mu.ix) && void 0 !== yu ? yu : null, Ju > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(uu, Ru), this.animateMaterials(Ru.animTick);
        const Nu = mu.BB,
          Xu = Nu[0] !== this.originOffset[0] || Nu[1] !== this.originOffset[1] || Nu[2] !== this.originOffset[2];
        Xu && (this.originOffset[0] = Nu[0], this.originOffset[1] = Nu[1], this.originOffset[2] = Nu[2]);
        const Vu = Ru.eye;
        this.eye[0] = Vu[0], this.eye[1] = Vu[1], this.eye[2] = Vu[2], this.writeShaderPackInputs();
        const ru = Ru.projectionMatrix,
          Bu = 0 === ru[15];
        let xu = 0;
        (Xu || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: Su
        } = this;
        JR(this.transparentRenderable._worldCenter, Ru, KR), this.resetBatches(Bu), this.transparent.length = 0, this.unlit.length = 0;
        const pu = mu.Fr.Luu,
          Tu = pu / 2 * Math.sqrt(3);
        let Wu = 0;
        const ju = !!this.ix && KE(this.ix.defineFor("liquid"));
        let Hu = !1;
        const du = null !== (Eu = null === (Ku = mu.RC) || void 0 === Ku ? void 0 : Ku.visibility) && void 0 !== Eu ? Eu : null,
          bu = this.visCull && Bu && 0 === this.compiling && null !== du && mu.Fr.lEu[0] >= this.visCullMinDistance ? this.target : null,
          Cu = this.visPassable,
          ku = this.visCandidates,
          eu = this.visCandidateBatches;
        Cu.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let Au = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Du = 0;
        const Mu = (uu, yu) => {
          if (!yu) return this.transparent.push(uu), void(Du += 2 * uu.faceCount);
          if (null !== uu.faceGroups && yu.faceCull) {
            if (0 === xu && (xu = (0, gJ.c)(ru, Ru.renderWidth, Ru.renderHeight), xu !== this.faceFocalPx && (this.faceFocalPx = xu, Su = ++this.faceEpoch)), uu.faceEpoch !== Su) {
              uu.faceEpoch = Su;
              const Ru = Math.sqrt(uu.distance) + Tu,
                yu = (0, gJ.j)(uu.planePX, uu.planeNX, uu.planePY, uu.planeNY, uu.planePZ, uu.planeNZ, this.eye[0] - (uu.origin[0] - this.originOffset[0]), this.eye[1] - (uu.origin[1] - this.originOffset[1]), this.eye[2] - (uu.origin[2] - this.originOffset[2]), (0, gJ.f)(Ru, xu));
              yu !== uu.faceMask && this.chooseFaceRanges(uu, uu.faceGroups, yu)
            }
            if (0 === uu.rangeCount) return
          } else - 1 !== uu.faceMask && this.drawWhole(uu);
          yu.meshes.push(uu), Du += 2 * ((uu.rangeCount > 0 ? uu.count0 : 0) + (uu.rangeCount > 1 ? uu.count1 : 0))
        };
        for (const Gu of this.chunks.values()) {
          Xu && this.writeSlot(Gu);
          const uu = Gu.mesh.visibility;
          uu !== Gu.visibility && (Gu.visibility = uu, this.slots.setVisibility(Gu.slot, uu));
          const {
            material: yu
          } = Gu;
          this.geometry.lost(Gu) && performance.now() >= Gu.lostRetryAt && this.remeshLost(mu, Gu);
          const Eu = !(null === yu || void 0 === yu || !yu.bindGroup) && this.geometry.backed(Gu),
            Ku = Eu && this.lighting && !Gu.vertices.page.twin;
          if (bu && (Number.isNaN(Gu.key) && (Gu.ci = Math.floor(Gu.origin[0] / pu), Gu.cj = Math.floor(Gu.origin[1] / pu), Gu.ck = Math.floor(Gu.origin[2] / pu), Gu.key = (0, LJ.k)(Gu.ci, Gu.cj, Gu.ck)), (!Eu || uu < 1 || Ku || !this.batchDraws(yu, Gu.packed, bu)) && this.visSeeThrough(Gu, bu) && Cu.add(Gu.key)), !Eu) continue;
          Ku || (Gu.lostRemeshes = 0);
          const Qu = Gu.origin[0] - this.originOffset[0],
            Ju = Gu.origin[1] - this.originOffset[1],
            Nu = Gu.origin[2] - this.originOffset[2];
          if (!(0, fm.e)(Ru.frustum, Qu, Ju, Nu, pu)) continue;
          const Vu = Qu + pu / 2 - this.eye[0],
            ru = Ju + pu / 2 - this.eye[1],
            xu = Nu + pu / 2 - this.eye[2];
          if (Gu.distance = Vu * Vu + ru * ru + xu * xu, this.lighting && !Gu.lit && (Wu = Math.max(Wu, Gu.vertexCount), this.unlit.push(Gu)), Ku) continue;
          const Su = this.isBlended(yu) ? null : this.batchFor(yu, Gu.packed, Gu.vertices.page, 1 === uu, Bu);
          bu ? (ku[Au] = Gu, eu[Au++] = Su) : Mu(Gu, Su)
        }
        const Iu = bu ? this.sweepVisibility(uu, Ru, du) : null;
        null === (Qu = (0, IQ.x)(mu)) || void 0 === Qu || Qu.update(Ru.frustum, this.originOffset, pu, Iu);
        for (let Gu = 0; Gu < Au; Gu++) {
          const uu = ku[Gu];
          !Iu || Iu.isDrawn(uu.ci, uu.cj, uu.ck) ? Mu(uu, eu[Gu]) : (this.visCulledParts++, this.visCulledTriangles += 2 * uu.faceCount)
        }
        for (const Gu of this.transparent) Hu ||= ju && Gu.material.liquid && !Gu.material.customRenderMat;
        this.submittedTriangles = Du, Iu && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(uu, Ru, Iu)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Hu) : Hu && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && Wu > 0 && this.geometry.lightFullSky(this.unlit, Wu);
        for (const Gu of this.opaqueBatches) this.chunkSorter.sort(Gu.meshes, 1) || Gu.meshes.sort(qJ);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(OJ)
      }
      sweepVisibility(uu, Ru, yu) {
        const {
          Fr: Eu
        } = uu.Yr, Ku = Eu.Luu, Qu = this.visPassable, mu = this.eye[0] + this.originOffset[0], Ju = this.eye[1] + this.originOffset[1], Nu = this.eye[2] + this.originOffset[2];
        if (!yu.eyeClear(mu, Ju, Nu, Ru.near, Ru.projectionMatrix, Eu)) return null;
        const [Xu, Vu] = Eu.lEu, ru = yu.update(mu, Ju, Nu, Ku, Xu, Vu, Qu);
        return this.visSweeps = yu.sweeps, ru ? yu : null
      }
      visSeeThrough(uu, Ru) {
        const {
          material: yu
        } = uu;
        return (!yu || !this.isBlended(yu)) && (uu.mesh.visibility < 1 || !(null !== yu && void 0 !== yu && yu.bindGroup) || uu.faceCount > 0 && (!this.geometry.backed(uu) || this.lighting && !uu.vertices.page.twin) || !this.batchDraws(yu, uu.packed, Ru))
      }
      batchDraws(uu, Ru, yu) {
        var Eu;
        const Ku = Ru ? 2 : 0;
        if (uu === this.visDrawsMaterial && function(uu, Ru) {
            return 0 !== (uu & 1 << Ru)
          }(this.visDrawsBits, Ku)) return 0 !== (this.visDrawsBits & 2 << Ku);
        let Qu = null !== (Eu = this.visBatchDraws.get(uu)) && void 0 !== Eu ? Eu : 0;
        if (!(Qu & 1 << Ku)) {
          Qu |= 1 << Ku | (!!uu.bindGroupLayout && this.canDraw(uu, Ru) && !!this.pipelines.get(this.pipelineId(uu, this.programKey(uu, Ru), yu)) ? 2 << Ku : 0), this.visBatchDraws.set(uu, Qu)
        }
        return this.visDrawsMaterial = uu, this.visDrawsBits = Qu, 0 !== (Qu & 2 << Ku)
      }
      runVisCheck(uu, Ru, yu) {
        const {
          Yr: Eu
        } = uu, {
          Fr: Ku
        } = Eu, Qu = Ku.Luu, mu = new Set;
        for (const xu of this.chunks.values()) mu.add(xu.key);
        const Ju = HK.Matrix.FromArray(Ru.viewProjectionMatrix).invert(),
          [Nu, Xu, Vu] = this.originOffset,
          ru = new HK.MS,
          Bu = function(uu, Ru, yu, Eu) {
            const Ku = new Set;
            for (let Qu = 0; Qu < 27; Qu++)
              for (let mu = 0; mu < 48; mu++) {
                const Ju = yu((mu + .5) / 48 * 2 - 1, (Qu + .5) / 27 * 2 - 1);
                zJ(uu, Ru, [Ju[0] - Ru[0], Ju[1] - Ru[1], Ju[2] - Ru[2]], Eu, Ku)
              }
            return Ku
          }({
            Xw: (uu, Ru, yu) => Ku.Xw(uu, Ru, yu),
            occluders: yu.occluders,
            opaque: yu.opaque,
            jS: Qu,
            isDrawn: (uu, Ru, Eu) => yu.isDrawn(uu, Ru, Eu),
            hasParts: (uu, Ru, yu) => mu.has((0, LJ.k)(uu, Ru, yu))
          }, [this.eye[0] + Nu, this.eye[1] + Xu, this.eye[2] + Vu], ((uu, Ru) => (HK.MS.TransformCoordinatesFromFloatsToRef(uu, Ru, .5, Ju, ru), [ru.x + Nu, ru.y + Xu, ru.z + Vu])), (Ku.lEu[0] + 1) * Qu);
        this.visViolations = Bu.size;
        for (const xu of Bu) this.warnOnce(`vis:${xu}`, `Lite terrain cave culling skipped chunk ${xu}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var uu;
        null !== (uu = this.ix) && void 0 !== uu && uu.isRunning() && (this.shaderPackInputs ??= new wQ(this.device, this.ix.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.ix, this.eye, this.lighting))
      }
      bindShaderPackInputs(uu, Ru, yu) {
        var Eu, Ku, Qu, mu;
        let Ju = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: Nu
        } = this.shaderPackFields(Ru, yu);
        if (void 0 === Nu) return;
        this.shaderPackInputs || (this.shaderPackInputs = new wQ(this.device, yu.textureLayers(), this.sunShadow), this.shaderPackInputs.write(yu, this.eye, this.lighting));
        const Xu = KE(Nu) ? null !== (Eu = null === (Ku = this.sceneDepth) || void 0 === Ku ? void 0 : Ku.view) && void 0 !== Eu ? Eu : this.standIn() : null,
          Vu = Ju ? null !== (Qu = null === (mu = this.shadowMask) || void 0 === mu ? void 0 : mu.view) && void 0 !== Qu ? Qu : this.standIn() : null;
        this.shaderPackInputs.bind(uu, Xu, zQ(Nu, !!this.sunShadow), Vu)
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
        var uu, Ru;
        return null !== (uu = null === (Ru = this.shaderPackInputs) || void 0 === Ru ? void 0 : Ru.bindGroupFor(null, !0)) && void 0 !== uu ? uu : null
      }
      resetBatches(uu) {
        const Ru = this.opaqueBatches;
        let yu = 0;
        for (const Eu of Ru) Eu.meshes.length > 0 && (Eu.meshes.length = 0, Eu.faceCull = this.batchFaceCull(Eu.material, uu), Ru[yu++] = Eu);
        Ru.length = yu
      }
      orderBatches() {
        const uu = this.opaqueBatches;
        for (let Ru = 0; Ru < uu.length; Ru++) {
          const yu = uu[Ru];
          yu.group = Ru;
          for (let Eu = 0; Eu < Ru; Eu++) {
            const Ru = uu[Eu];
            if (Ru.material === yu.material && Ru.packed === yu.packed) {
              yu.group = Ru.group;
              break
            }
          }
          yu.nearest = yu.meshes.length > 0 ? yu.meshes[0].distance : 1 / 0
        }
        uu.sort(FJ)
      }
      batchFor(uu, Ru, yu, Eu, Ku) {
        for (const mu of this.opaqueBatches)
          if (mu.material === uu && mu.packed === Ru && mu.page === yu && mu.resting === Eu) return mu;
        const Qu = {
          material: uu,
          packed: Ru,
          page: yu,
          resting: Eu,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(uu, Ku)
        };
        return this.opaqueBatches.push(Qu), Qu
      }
      batchFaceCull(uu, Ru) {
        return !(!Ru || !(0, lJ.n)(uu.model)) && (!this.ix || ! function(uu) {
          var Ru;
          return !(null === (Ru = (0, MR.e)(uu)) || void 0 === Ru || !Ru.movesVertices)
        }(this.shaderPackFields(uu, this.ix).packVariant))
      }
      writeFrameUniforms(uu, Ru) {
        const yu = this.frameUniforms,
          Eu = VE;
        if ((0, rJ.y)(uu, yu), yu[Eu.fogInfos] = Ru.fogEnabled ? Ru.fogMode : 0, yu[Eu.fogInfos + 1] = Ru.fogStart, yu[Eu.fogInfos + 2] = Ru.fogEnd, yu[Eu.fogInfos + 3] = Ru.fogDensity, yu.set(Ru.fogColour, Eu.fogColour), yu[Eu.outputHeight] = Ru.renderHeight, yu.set(Ru.ambientColour, Eu.sceneAmbient), (0, rJ.q)(Ru, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const Ru = (0, BJ.k)(uu.OS, uu.bS, uu.CS);
          for (let uu = 0; uu < 4; uu++) yu[Eu.aoLevels + uu] = Ru[uu] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, yu)
      }
      animateMaterials(uu) {
        const Ru = BE.anim;
        for (const yu of this.materials.values()) yu.animated && (yu.uniformData[Ru] = uu, this.device.queue.writeBuffer(yu.uniformBuffer, 4 * Ru, yu.uniformData, Ru, 1))
      }
      canDraw(uu, Ru) {
        return !("atlas" === uu.texture && !Ru) || (this.warnOnce(`stride:${uu.id}`, `Lite terrain: material "${uu.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(uu, Ru) {
        let yu = 0;
        uu.setBindGroup(1, this.frameBindGroup);
        for (const Eu of this.opaqueBatches) {
          if (!Eu.meshes.length || !this.canDraw(Eu.material, Eu.packed)) continue;
          const Ku = this.pipelineFor(Eu.material, Eu.packed, Ru, Eu.resting);
          Ku && (uu.setPipeline(Ku), uu.setBindGroup(2, Eu.material.bindGroup), this.ix && this.bindShaderPackInputs(uu, Eu.material, this.ix, this.prepassOf.has(Ku)), yu += this.drawBatch(uu, Eu))
        }
        return yu
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(uu, Ru, yu) {
        const Eu = this.target,
          Ku = this.ix;
        if (!Eu || !Ku || 0 === this.maskPipelines) return 0;
        let Qu = 0,
          mu = null;
        this.geometry.setDrawing(!0);
        try {
          for (const Ju of this.opaqueBatches) {
            if (!Ju.meshes.length || !this.canDraw(Ju.material, Ju.packed)) continue;
            const Nu = this.pipelineFor(Ju.material, Ju.packed, Eu, Ju.resting),
              Xu = Nu && this.prepassOf.get(Nu);
            Xu && (mu || (mu = uu.beginRenderPass(Ru), mu.setBindGroup(0, yu), mu.setBindGroup(1, this.frameBindGroup)), mu.setPipeline(Xu), mu.setBindGroup(2, Ju.material.bindGroup), this.bindShaderPackInputs(mu, Ju.material, Ku, !0), Qu += this.drawBatch(mu, Ju))
          }
        } finally {
          var Ju;
          null === (Ju = mu) || void 0 === Ju || Ju.end(), this.geometry.setDrawing(!1)
        }
        return Qu
      }
      drawBatch(uu, Ru) {
        let yu = 0;
        for (const Eu of Ru.meshes) {
          const {
            rangeCount: Ru
          } = Eu;
          Ru > 0 && (yu += this.geometry.draw(uu, Eu, this.lighting, Eu.first0, Eu.count0), Ru > 1 && (yu += this.geometry.draw(uu, Eu, this.lighting, Eu.first1, Eu.count1)))
        }
        return yu
      }
      drawTransparent(uu, Ru) {
        let yu = 0,
          Eu = null,
          Ku = null;
        uu.setBindGroup(1, this.frameBindGroup);
        for (const Qu of this.transparent) {
          const mu = Qu.material;
          if (!this.canDraw(mu, Qu.packed)) continue;
          const Ju = this.pipelineFor(mu, Qu.packed, Ru);
          Ju && (Ju !== Eu && (uu.setPipeline(Ju), Eu = Ju, this.ix && this.bindShaderPackInputs(uu, mu, this.ix)), mu !== Ku && (uu.setBindGroup(2, mu.bindGroup), Ku = mu), yu += this.geometry.draw(uu, Qu, this.lighting))
        }
        return yu
      }
    }

    function oJ(uu, Ru, yu, Eu) {
      return `${IE(uu)}|${uu.atlasLayers}|${uu.Q0}|${Ru}|${yu}|${Eu._colorFormat}|${Eu._depthStencilFormat}|${Eu._sampleCount}`
    }

    function qJ(uu, Ru) {
      return uu.distance - Ru.distance
    }

    function OJ(uu, Ru) {
      return Ru.distance - uu.distance
    }
    class vJ {
      constructor() {
        this.left = []
      }
      sort(uu, Ru) {
        for (let yu = 0; yu < uu.length; yu++) {
          const Ru = uu[yu].distance;
          if (Ru - Ru !== 0) return !1
        }
        return this.sortRange(uu, 0, uu.length, Ru), !0
      }
      sortRange(uu, Ru, yu, Eu) {
        if (yu - Ru <= 16) {
          for (let Ku = Ru + 1; Ku < yu; Ku++) {
            const yu = uu[Ku],
              Qu = Eu * yu.distance;
            let mu = Ku - 1;
            for (; mu >= Ru && Eu * uu[mu].distance > Qu; mu--) uu[mu + 1] = uu[mu];
            uu[mu + 1] = yu
          }
          return
        }
        const Ku = Ru + yu >>> 1;
        if (this.sortRange(uu, Ru, Ku, Eu), this.sortRange(uu, Ku, yu, Eu), Eu * uu[Ku - 1].distance <= Eu * uu[Ku].distance) return;
        const {
          left: Qu
        } = this, mu = Ku - Ru;
        for (let Vu = 0; Vu < mu; Vu++) Qu[Vu] = uu[Ru + Vu];
        let Ju = 0,
          Nu = Ku,
          Xu = Ru;
        for (; Ju < mu && Nu < yu;) uu[Xu++] = Eu * uu[Nu].distance < Eu * Qu[Ju].distance ? uu[Nu++] : Qu[Ju++];
        for (; Ju < mu;) uu[Xu++] = Qu[Ju++]
      }
    }
    const aJ = Math.ceil(102);

    function fJ(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ru;
      const Qu = Math.min(Ru, yu),
        mu = new Uint32Array(uy(Eu));
      for (let Ju = 0; Ju < Eu; Ju++) {
        const Ru = Math.floor(Ju * Qu / Eu),
          yu = Math.max(Ru + 1, Math.floor((Ju + 1) * Qu / Eu));
        for (let Nu = 0; Nu < Eu; Nu++) {
          const Xu = Math.floor(Nu * Qu / Eu),
            Vu = Math.max(Xu + 1, Math.floor((Nu + 1) * Qu / Eu));
          let ru = 0;
          for (let Eu = Ru; Eu < yu; Eu++)
            for (let Ru = Xu; Ru < Vu; Ru++) uu[Eu * Ku + Ru] >= aJ && ru++;
          if (2 * ru >= (yu - Ru) * (Vu - Xu)) {
            const uu = Nu + Eu * Ju;
            mu[uu >>> 5] |= 1 << (31 & uu)
          }
        }
      }
      return mu
    }

    function uN(uu) {
      return Math.max(1, Math.min(16, uu))
    }
    class RN {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = uu, this.loadTexture = Ru, this.warn = yu, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(uu, Ru) {
        return (uu.Fs !== this.builtVersion || this.blockCaster.length !== Ru) && (this.build(uu, Ru), !0)
      }
      build(uu, Ru) {
        this.builtVersion = uu.Fs;
        const yu = new Uint16Array(Ru),
          Eu = new Map;
        for (let Ku = 1; Ku < Ru; Ku++) {
          const Ru = this.classify(uu, Ku, Eu);
          if (null === Ru || Ru === qR) {
            yu[Ku] = null === Ru ? 0 : qR;
            continue
          }
          let Qu = this.byKey.get(Ru.key);
          void 0 === Qu && (Qu = this.allocate(Ru), this.byKey.set(Ru.key, Qu)), yu[Ku] = Qu
        }
        this.blockCaster = yu, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(uu, Ru) {
        const yu = uu.Z8[Ru];
        if ("function" !== typeof yu) return yu;
        try {
          return yu()
        } catch (Eu) {
          return this.warnOnce(`Sun shadows: no caster option for block ${Ru}: ${Eu instanceof Error?Eu.message:String(Eu)}`), null
        }
      }
      classify(uu, Ru, yu) {
        const Eu = this.option(uu, Ru);
        if ("none" === Eu) return null;
        if (Eu && Eu.planes.length > 0) {
          const uu = Eu.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(uu)}`,
            planes: uu
          }
        }
        if (uu.qB[Ru]) return null;
        const Ku = uu.vB[Ru] ? uu.Kl(Ru) : null;
        if (Ku && Ku.length >= 6) {
          const uu = function(uu) {
            const Ru = new Uint32Array(16);
            for (let yu = 0; yu + 6 <= uu.length; yu += 6) {
              const Eu = [0, 1, 2].map((Ru => Math.max(0, Math.ceil(8 * uu[yu + Ru] - .5)))),
                Ku = [0, 1, 2].map((Ru => Math.min(7, Math.floor(8 * uu[yu + Ru + 3] - .5))));
              for (let uu = Eu[2]; uu <= Ku[2]; uu++)
                for (let yu = Eu[1]; yu <= Ku[1]; yu++)
                  for (let Qu = Eu[0]; Qu <= Ku[0]; Qu++) {
                    const Eu = Qu + 8 * (yu + 8 * uu);
                    Ru[Eu >>> 5] |= 1 << (31 & Eu)
                  }
            }
            return Ru
          }(Ku);
          return function(uu) {
            return uu.every((uu => 4294967295 === uu))
          }(uu) ? qR : uu.every((uu => 0 === uu)) ? null : {
            kind: "shape",
            key: `shape:${uu.join(",")}`,
            mask: uu
          }
        }
        if (uu.uL[Ru] || !uu.vS[Ru]) return null;
        const Qu = [0, 1, 2, 3, 4, 5].map((Eu => {
          const Ku = uu.aS[6 * Ru + Eu];
          let Qu = yu.get(Ku);
          return void 0 === Qu && (Qu = function(uu) {
            if (!uu || uu.Np) return null;
            const {
              f6: Ru,
              Q0: yu,
              i6: Eu
            } = uu;
            if (!Ru || !yu || !(yu > 0) || void 0 === Eu || !(Eu >= 0)) return null;
            const Ku = Ru[0],
              Qu = yu * yu * 4;
            if (!Ku || Ku.byteLength < Qu) return null;
            const mu = Math.floor(Ku.byteLength / Qu),
              Ju = Ru[Math.floor(Eu / mu)];
            if (!Ju) return null;
            const Nu = new Uint8Array(Ju.buffer, Ju.byteOffset, Ju.byteLength),
              Xu = Eu % mu * Qu;
            if (Xu + Qu > Nu.length) return null;
            const Vu = new Uint8Array(yu * yu);
            let ru = !1;
            for (let Bu = 0; Bu < Vu.length; Bu++) Vu[Bu] = Nu[Xu + 4 * Bu + 3], ru ||= Vu[Bu] < aJ;
            return ru ? {
              alpha: Vu,
              width: yu
            } : null
          }(uu.Jp(Ku)), yu.set(Ku, Qu)), Qu
        }));
        if (Qu.every((uu => null === uu))) return qR;
        const mu = uN(Math.max(...Qu.map((uu => {
            var Ru;
            return null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.width) && void 0 !== Ru ? Ru : 1
          })))),
          Ju = new Uint32Array(uy(mu)).fill(4294967295),
          Nu = Qu.map((uu => null === uu ? Ju : fJ(uu.alpha, uu.width, uu.width, mu)));
        return {
          kind: "cutout",
          key: `cutout:${mu}:${Nu.map((uu=>uu.join(","))).join("|")}`,
          size: mu,
          faces: Nu
        }
      }
      allocate(uu) {
        if (this.nextCaster >= Ry) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const Ru = this.nextCaster++;
        if (this.writeCaster(Ru, OR, 0, 0, 0), "shape" === uu.kind) {
          const yu = this.allocateMask(uu.mask.length);
          yu >= 0 && (this.sink(yu, uu.mask), this.writeCaster(Ru, vR, yu, 0, 8))
        } else if ("cutout" === uu.kind) {
          const yu = uy(uu.size),
            Eu = this.allocateMask(6 * yu);
          if (Eu >= 0) {
            const Ku = new Uint32Array(6 * yu);
            uu.faces.forEach(((uu, Ru) => {
              Ku.set(uu, Ru * yu)
            })), this.sink(Eu, Ku), this.writeCaster(Ru, fR, Eu, 0, uu.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(Ru, uu.planes).finally((() => {
          this.planesLoading--
        })));
        return Ru
      }
      async loadPlanes(uu, Ru) {
        const yu = await Promise.all(Ru.map((uu => this.texture(uu.texture))));
        if (yu.some((uu => null === uu))) return;
        const Eu = yu,
          Ku = uN(Math.max(...Eu.map((uu => Math.min(uu.width, uu.height))))),
          Qu = uy(Ku),
          mu = this.allocateMask(Ru.length * (4 + Qu));
        if (mu < 0) return;
        const Ju = new Uint32Array(Ru.length * (4 + Qu)),
          Nu = 4 * Ru.length;
        Ru.forEach(((uu, Ru) => {
          const yu = mu + Nu + Ru * Qu;
          Ju.set(function(uu, Ru) {
            const [yu, Eu] = uu.tangent, Ku = Math.hypot(yu, Eu) || 1, Qu = yu / Ku, mu = Eu / Ku, Ju = uu.centre[0] * mu - uu.centre[1] * Qu, Nu = new Uint32Array(4);
            return new Float32Array(Nu.buffer, 0, 3).set([Qu, mu, Ju]), Nu[3] = Ru, Nu
          }(uu, yu), 4 * Ru), Ju.set(fJ(Eu[Ru].alpha, Eu[Ru].width, Eu[Ru].height, Ku), Nu + Ru * Qu)
        })), this.sink(mu, Ju), this.writeCaster(uu, aR, mu, Ru.length, Ku)
      }
      texture(uu) {
        let Ru = this.textures.get(uu);
        return Ru || (Ru = this.loadTexture(uu).catch((Ru => (this.warn(`Sun shadows: no mask for ${uu}: ${Ru instanceof Error?Ru.message:String(Ru)}`), null))), this.textures.set(uu, Ru)), Ru
      }
      allocateMask(uu) {
        if (this.nextMaskWord + uu > yy) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const Ru = 32768 + this.nextMaskWord;
        return this.nextMaskWord += uu, Ru
      }
      writeCaster(uu, Ru, yu, Eu, Ku) {
        this.sink(0 + 4 * uu, Uint32Array.of(Ru, yu, Eu, Ku))
      }
      warnOnce(uu) {
        this.warned.has(uu) || (this.warned.add(uu), this.warn(uu))
      }
    }
    var yN = yu(37460);

    function EN(uu) {
      return !uu.Vp && !uu.kKu && !uu.FS
    }

    function KN() {
      return {
        bricks: new Uint32Array(FR),
        cells: new Uint16Array(32768),
        special: new Uint8Array(LR)
      }
    }
    class QN {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = uu, this.writeVoxels = Ru, this.writePool = yu, this.warn = Eu, this.eyeChunk = null, this.slotChunk = new Array(nR).fill(null), this.slotVersion = new Float64Array(nR).fill(-1), this.slotPool = new Array(nR).fill(null), this.starved = new Uint8Array(nR), this.queue = [], this.queued = new Uint8Array(nR), this.queueSorted = !0, this.freePool = new Uint32Array(Ey), this.freeCount = Ey, this.casterTable = null, this.warnedPool = !1, this.scratch = KN(), this.victimScratch = KN(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * nR), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Ku = 0; Ku < Ey; Ku++) this.freePool[Ku] = 65535 - Ku
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Ey - this.freeCount
      }
      chunkAdded(uu) {
        if (null === this.eyeChunk || !this.inRadius(uu.i, uu.j, uu.k)) return;
        const Ru = iR(uu.i, uu.j, uu.k);
        this.slotChunk[Ru] = uu, this.slotVersion[Ru] = -1, this.enqueue(Ru)
      }
      update(uu, Ru, yu) {
        const Eu = this.casters.blockCaster;
        if (Eu !== this.casterTable) {
          this.casterTable = Eu;
          for (let uu = 0; uu < nR; uu++) this.slotVersion[uu] = -1, this.slotChunk[uu] && this.enqueue(uu)
        }
        const Ku = Math.floor(uu[0] / 32),
          Qu = Math.floor(uu[1] / 32),
          mu = Math.floor(uu[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Ku || this.eyeChunk[1] !== Qu || this.eyeChunk[2] !== mu) && (this.eyeChunk = [Ku, Qu, mu], this.follow(Ru), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let Ju = 0; Ju < nR; Ju++) {
          const uu = this.slotChunk[Ju];
          uu && (uu.wyu || uu.hS !== this.slotVersion[Ju]) && this.enqueue(Ju)
        }
        this.drain(yu), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(uu, Ru) {
        this.records.set(Ru, 4 * uu), this.windowTopStale = !0, this.writeVoxels(4 * uu, Ru)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const uu = this.records;
        let Ru = -1 / 0;
        for (let Eu = 0; Eu < uu.length; Eu += 4) {
          const yu = 255 & uu[Eu + 3];
          yu !== lR && yu !== gR || !this.inRadius(uu[Eu], uu[Eu + 1], uu[Eu + 2]) || (Ru = Math.max(Ru, uu[Eu + 1] * IR + (uu[Eu + 3] >>> 8)))
        }
        const yu = Ru === -1 / 0 ? 1 : Ru + ZR;
        yu !== this.windowTop[0] && (this.windowTop[0] = yu, this.writeVoxels(wR, this.windowTop))
      }
      follow(uu) {
        const Ru = this.eyeChunk,
          [yu, Eu, Ku] = GR;
        for (let mu = -Ku; mu <= Ku; mu++)
          for (let Ku = -Eu; Ku <= Eu; Ku++)
            for (let Eu = -yu; Eu <= yu; Eu++) {
              var Qu;
              const yu = Ru[0] + Eu,
                Ju = Ru[1] + Ku,
                Nu = Ru[2] + mu,
                Xu = iR(yu, Ju, Nu),
                Vu = this.slotChunk[Xu];
              if (Vu && !Vu.wyu && Vu.i === yu && Vu.j === Ju && Vu.k === Nu) continue;
              const ru = null !== (Qu = uu(yu, Ju, Nu)) && void 0 !== Qu ? Qu : null;
              Vu && (Vu.i !== yu || Vu.j !== Ju || Vu.k !== Nu) && this.slotPool[Xu] && (this.release(Xu), this.record.fill(0), this.writeRecord(Xu, this.record)), this.slotChunk[Xu] = ru, this.slotVersion[Xu] = -1, (ru || Vu) && this.enqueue(Xu)
            }
      }
      requeueStarved() {
        for (let uu = 0; uu < nR; uu++) this.starved[uu] && this.slotChunk[uu] && this.enqueue(uu)
      }
      enqueue(uu) {
        this.queued[uu] || (this.queued[uu] = 1, this.queue.push(uu), this.queueSorted = !1)
      }
      drain(uu) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const uu = new Map;
          for (const Ru of this.queue) uu.set(Ru, this.slotDistance(Ru));
          this.queue.sort(((Ru, yu) => uu.get(yu) - uu.get(Ru))), this.queueSorted = !0
        }
        const Ru = performance.now();
        let yu = 0;
        const Eu = [];
        for (; this.queue.length > 0 && (0 === yu || performance.now() - Ru < uu);) {
          const uu = this.queue.pop(),
            Ru = this.slotChunk[uu];
          !Ru || Ru.wyu || EN(Ru) ? (this.queued[uu] = 0, this.encodeSlot(uu), yu++) : Eu.push(uu)
        }
        for (let Ku = Eu.length - 1; Ku >= 0; Ku--) this.queue.push(Eu[Ku])
      }
      slotDistance(uu) {
        const Ru = this.slotChunk[uu],
          yu = this.eyeChunk;
        return Ru ? Math.max(Math.abs(Ru.i - yu[0]), Math.abs(Ru.j - yu[1]), Math.abs(Ru.k - yu[2])) : 0
      }
      inRadius(uu, Ru, yu) {
        const Eu = this.eyeChunk,
          [Ku, Qu, mu] = GR;
        return Math.abs(uu - Eu[0]) <= Ku && Math.abs(Ru - Eu[1]) <= Qu && Math.abs(yu - Eu[2]) <= mu
      }
      release(uu) {
        const Ru = this.slotPool[uu];
        if (Ru) {
          for (let uu = Ru.length - 1; uu >= 0; uu--) this.freePool[this.freeCount++] = Ru[uu];
          this.slotPool[uu] = null
        }
      }
      encodeSlot(uu) {
        var Ru, yu, Eu, Ku, Qu;
        let mu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          Ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Nu = null !== (Ru = null === (yu = this.slotPool[uu]) || void 0 === yu ? void 0 : yu.length) && void 0 !== Ru ? Ru : 0;
        this.release(uu), this.starved[uu] = 0;
        const Xu = this.slotChunk[uu],
          Vu = this.record;
        if (!Xu || Xu.wyu || !Xu.WB) return this.slotChunk[uu] = null, this.slotVersion[uu] = -1, Vu.fill(0), this.writeRecord(uu, Vu), void(Nu > 0 && this.requeueStarved());
        this.slotVersion[uu] = Xu.hS;
        const ru = this.encodeBricks(Xu, uu, mu, Ju);
        Vu[0] = Xu.i, Vu[1] = Xu.j, Vu[2] = Xu.k, Vu[3] = ru, this.writeRecord(uu, Vu), null === (Eu = this.encoded) || void 0 === Eu || Eu.call(this, Xu), Ju && (null !== (Ku = null === (Qu = this.slotPool[uu]) || void 0 === Qu ? void 0 : Qu.length) && void 0 !== Ku ? Ku : 0) < Nu && this.requeueStarved()
      }
      encodeBricks(uu, Ru, yu, Eu) {
        if (uu.QS) return tR;
        const Ku = this.casters.blockCaster,
          {
            data: Qu,
            stride: mu,
            offset: Ju
          } = uu.WB,
          [Nu, Xu, Vu] = mu,
          ru = IR,
          {
            bricks: Bu,
            cells: xu,
            special: Su
          } = yu;
        Bu.fill(0), Su.fill(0);
        let pu = 0,
          Tu = 0,
          Wu = 0;
        for (let ju = 0; ju < ru; ju++) {
          const Ru = ju >> 2,
            yu = 3 & ju,
            Eu = uu.jx[ju],
            mu = Eu === yN.g ? -1 : Eu < Ku.length ? Ku[Eu] : 0;
          if (0 !== mu)
            for (let uu = 0; uu < ru; uu++) {
              const Eu = uu >> 2,
                Hu = 3 & uu;
              let du = Ju + uu * Nu + ju * Xu;
              for (let uu = 0; uu < ru; uu++, du += Vu) {
                let Ju = mu;
                if (Ju < 0) {
                  const uu = Qu[du];
                  if (Ju = uu < Ku.length ? Ku[uu] : 0, 0 === Ju) continue
                }
                const Nu = YR(Eu, Ru, uu >> 2),
                  Xu = oR(Hu, yu, 3 & uu);
                Bu[3 * Nu + (Xu >>> 5)] |= 1 << (31 & Xu), xu[Nu * cR + Xu] = Ju, pu++, Wu = ju, Ju === qR ? Tu++ : Su[Nu] = 1
              }
            }
        }
        return 0 === pu ? tR : 32768 === Tu ? lR | Wu << 8 : (this.writePoolEntries(Ru, yu, Eu), this.writeVoxels(zR + Ru * FR, Bu), gR | Wu << 8)
      }
      writePoolEntries(uu, Ru, yu) {
        const {
          bricks: Eu,
          cells: Ku,
          special: Qu
        } = Ru, mu = this.entry;
        let Ju = 0;
        for (let Vu = 0; Vu < LR; Vu++) Ju += Qu[Vu];
        if (0 === Ju) return;
        yu && this.freeCount < Ju && this.evictBeyond(uu, Ju);
        const Nu = new Uint32Array(yu ? Math.min(Ju, this.freeCount) : 0);
        let Xu = 0;
        for (let Vu = 0; Vu < LR; Vu++) {
          if (!Qu[Vu]) continue;
          const yu = 3 * Vu;
          if (Xu === Nu.length) {
            this.dropSpecials(Ru, Vu), this.starved[uu] = 1;
            continue
          }
          const Ju = this.freePool[--this.freeCount];
          Nu[Xu++] = Ju;
          for (let uu = 0; uu < cR; uu++) {
            const Ru = Eu[yu + (uu >>> 5)] >>> (31 & uu) & 1 ? Ku[Vu * cR + uu] : 0;
            1 & uu ? mu[uu >> 1] |= Ru << 16 : mu[uu >> 1] = Ru
          }
          Eu[yu + 2] = Ju + 1, this.writePool(Ky + 32 * Ju, mu)
        }
        Nu.length > 0 && (this.slotPool[uu] = Nu)
      }
      evictBeyond(uu, Ru) {
        const yu = this.slotDistance(uu),
          Eu = [];
        for (let Ku = 0; Ku < nR; Ku++) Ku !== uu && this.slotPool[Ku] && this.slotDistance(Ku) > yu && Eu.push(Ku);
        Eu.sort(((uu, Ru) => this.slotDistance(Ru) - this.slotDistance(uu)));
        for (const Ku of Eu) {
          if (this.freeCount >= Ru) return;
          const uu = this.slotChunk[Ku];
          uu && !uu.wyu && uu.WB && (uu.hS === this.slotVersion[Ku] || EN(uu)) && this.encodeSlot(Ku, this.victimScratch, !1)
        }
      }
      dropSpecials(uu, Ru) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const yu = 3 * Ru;
        for (let Eu = 0; Eu < cR; Eu++) uu.cells[Ru * cR + Eu] !== qR && (uu.bricks[yu + (Eu >>> 5)] &= ~(1 << (31 & Eu)))
      }
    }
    var mN = yu(37203);
    class JN {
      constructor(uu) {
        this.device = uu, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new py, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Fr = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = uu.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = uu.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(uu, Ru, yu) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Eu
        } = this;
        Eu.Kx(uu, Ru), yu.forEachSunShadowCaster((uu => {
          this.add(uu)
        })), Eu.finish();
        const Ku = 0 === Eu.parts;
        if (Ku && this.uploadedEmpty) return;
        this.uploadedEmpty = Ku;
        const {
          queue: Qu
        } = this.device, {
          words: mu
        } = Eu;
        Qu.writeBuffer(this.frameBuffer, 0, mu, 0, 16385), Eu.refs > 0 && Qu.writeBuffer(this.frameBuffer, 65540, mu, Ny, Eu.refs), Ku || Qu.writeBuffer(this.frameBuffer, 327684, mu, Xy, Eu.parts * Jy)
      }
      add(uu) {
        const Ru = this.gridFor(uu);
        if (!Ru) return;
        const {
          frame: yu
        } = this, {
          Fr: Eu,
          worldAt: Ku,
          instances: Qu,
          instanceCount: mu,
          thin: Ju
        } = uu;
        if (Qu)
          for (let Nu = 0; Nu < mu; Nu++) Ju ? (Wy(Qu, 16 * Nu, Eu, Ku, this.Fr), yu.add(Ru, this.Fr)) : yu.add(Ru, Qu, 16 * Nu);
        else yu.add(Ru, Eu, Ku)
      }
      gridFor(uu) {
        let {
          geometry: Ru,
          indexed: yu,
          first: Eu,
          count: Ku,
          skip: Qu
        } = uu, mu = this.grids.get(Ru);
        mu || (mu = new Map, this.grids.set(Ru, mu));
        const Ju = `${yu?Eu:-1-Eu}:${Ku}:${null!==Qu&&void 0!==Qu?Qu:""}`;
        let Nu = mu.get(Ju);
        if (void 0 !== Nu || this.gridsFull) return Nu;
        const Xu = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Xu + 2;
        else if (Xu > this.bakeDeadline) return;
        return Nu = this.bake(Ru, yu, Eu, Ku, Qu), void 0 !== Nu && mu.set(Ju, Nu), Nu
      }
      bake(uu, Ru, yu, Eu, Ku) {
        const Qu = uu.vertexAttributes.find((uu => "position" === uu.kind)),
          mu = Qu ? function(uu, Ru, yu, Eu) {
            let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Qu = uu => Ru ? Ru[yu + uu] : yu + uu,
              mu = uu => null !== Ku && [0, 1, 2].some((Ru => {
                const yu = Qu(uu + Ru);
                return yu >= Ku[0] && yu < Ku[1]
              })),
              Ju = [1 / 0, 1 / 0, 1 / 0],
              Nu = [-1 / 0, -1 / 0, -1 / 0];
            for (let ju = 0; ju + 2 < Eu; ju += 3)
              if (!mu(ju))
                for (let Ru = 0; Ru < 3; Ru++) {
                  const yu = Qu(ju + Ru);
                  for (let Ru = 0; Ru < 3; Ru++) Ju[Ru] = Math.min(Ju[Ru], uu[3 * yu + Ru]), Nu[Ru] = Math.max(Nu[Ru], uu[3 * yu + Ru])
                }
            const Xu = Math.max(Nu[0] - Ju[0], Nu[1] - Ju[1], Nu[2] - Ju[2]);
            if (!(Xu > 0)) return null;
            const Vu = Xu / 64,
              ru = [0, 0, 0],
              Bu = [0, 0, 0],
              xu = [0, 0, 0];
            for (let ju = 0; ju < 3; ju++) ru[ju] = Math.min(65, Math.ceil((Nu[ju] - Ju[ju]) / Vu) + 1), Bu[ju] = Ju[ju] - Vu / 2, xu[ju] = Bu[ju] + ru[ju] * Vu;
            const Su = new Uint32Array(Math.ceil(ru[0] * ru[1] * ru[2] / 32)),
              pu = new Float64Array(9),
              Tu = [0, 0, 0],
              Wu = [0, 0, 0];
            for (let ju = 0; ju + 2 < Eu; ju += 3)
              if (!mu(ju)) {
                for (let Ru = 0; Ru < 3; Ru++) {
                  const yu = Qu(ju + Ru);
                  for (let Eu = 0; Eu < 3; Eu++) pu[3 * Ru + Eu] = uu[3 * yu + Eu]
                }
                for (let uu = 0; uu < 3; uu++) {
                  const Ru = Math.min(pu[uu], pu[3 + uu], pu[6 + uu]),
                    yu = Math.max(pu[uu], pu[3 + uu], pu[6 + uu]);
                  Tu[uu] = Math.max(0, Math.floor((Ru - Bu[uu]) / Vu - 1e-6)), Wu[uu] = Math.min(ru[uu] - 1, Math.floor((yu - Bu[uu]) / Vu + 1e-6))
                }
                for (let uu = Tu[2]; uu <= Wu[2]; uu++)
                  for (let Ru = Tu[1]; Ru <= Wu[1]; Ru++)
                    for (let yu = Tu[0]; yu <= Wu[0]; yu++)
                      if (jy(pu, Bu[0] + (yu + .5) * Vu, Bu[1] + (Ru + .5) * Vu, Bu[2] + (uu + .5) * Vu, Vu / 2)) {
                        const Eu = yu + ru[0] * (Ru + ru[1] * uu);
                        Su[Eu >>> 5] |= 1 << (31 & Eu)
                      }
              } return {
              words: Su,
              lo: Bu,
              hi: xu,
              cell: Vu,
              dims: ru
            }
          }((0, mN.l)(Qu, uu.vertexCount), Ru ? uu.indexData : null, yu, Eu, Ku) : null;
        if (!mu) return null;
        const {
          words: Ju,
          ...Nu
        } = mu;
        if (this.gridTop + Ju.length > ry) return void(this.gridsFull = !0);
        const Xu = this.gridTop;
        return this.gridTop += Ju.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Xu, Ju), {
          ...Nu,
          at: Xu
        }
      }
    }
    const NN = Math.cos(1 * Math.PI / 180);

    function XN(uu, Ru) {
      return uu[0] * Ru[0] + uu[1] * Ru[1] + uu[2] * Ru[2] < NN
    }
    async function VN(uu) {
      const {
        pixels: Ru,
        width: yu,
        height: Eu
      } = await cK(uu), Ku = new Uint8Array(yu * Eu);
      for (let Qu = 0; Qu < Ku.length; Qu++) Ku[Qu] = Ru[4 * Qu + 3];
      return {
        width: yu,
        height: Eu,
        alpha: Ku
      }
    }
    class rN {
      constructor(uu, Ru) {
        this.device = uu, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(dy.j), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = uu.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = uu.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * hR,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = uu.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [yu, Eu, Ku] = dy.k;
        this.volume = uu.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: yu,
            height: Eu,
            depthOrArrayLayers: Ku
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = uu.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = uu.createBuffer({
          label: "sun-shadow-volume-work",
          size: dy.j,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = Ru ? new JN(uu) : null, this.entityStandIn = Ru ? null : uu.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var uu, Ru;
        const yu = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || yu.push("Lite sun shadow volume pipeline compiling");
        const Eu = null !== (uu = null === (Ru = this.casters) || void 0 === Ru ? void 0 : Ru.planesLoading) && void 0 !== uu ? uu : 0;
        return Eu > 0 && yu.push(`${Eu} Lite sun shadow plane casters loading their textures`), yu
      }
      entries() {
        var uu, Ru, yu, Eu;
        const Ku = DR.u;
        return [{
          binding: Ku.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Ku.WB,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Ku.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Ku.volume,
          resource: this.volumeView
        }, {
          binding: Ku.sampler,
          resource: this.volumeSampler
        }, {
          binding: Ku.entities,
          resource: {
            buffer: null !== (uu = null === (Ru = this.entities) || void 0 === Ru ? void 0 : Ru.frameBuffer) && void 0 !== uu ? uu : this.entityStandIn
          }
        }, {
          binding: Ku.entityGrids,
          resource: {
            buffer: null !== (yu = null === (Eu = this.entities) || void 0 === Eu ? void 0 : Eu.gridBuffer) && void 0 !== yu ? yu : this.entityStandIn
          }
        }]
      }
      prepare(uu, Ru, yu) {
        var Eu;
        this.entitiesThisFrame = !1;
        const Ku = null !== (Eu = null === yu || void 0 === yu ? void 0 : yu.sunShadowReach()) && void 0 !== Eu ? Eu : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!yu || !Ku.sunShadow && !Ku.airShadow) return void(this.volumeHolds = null);
        if (uu.Fr.Luu !== IR) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${uu.Fr.Luu}; everything is lit.`)));
        const Qu = this.start(uu);
        this.casters.update(uu.YB, uu.YB.vB.length);
        const mu = uu.BB;
        for (let Bu = 0; Bu < 3; Bu++) this.eye[Bu] = Ru[Bu] + mu[Bu];
        const Ju = (0, dy.u)(this.eye);
        this.staleNear = Ju;
        const Nu = uu.Fr.Bp;
        Qu.update(this.eye, ((uu, Ru, yu) => Nu.xp(uu, Ru, yu)), 1);
        const Xu = (0, dy.m)(yu.duu()),
          Vu = Qu.eyeChunk,
          ru = this.uniformInts;
        for (let Bu = 0; Bu < 3; Bu++) ru[Bu] = Vu[Bu], ru[4 + Bu] = Ju[Bu];
        this.entitiesThisFrame = null !== this.entities && Ku.sunShadow, this.entitiesThisFrame && Sy(this.uniformFloats, 8, Ru, Xu), null !== this.volumeHolds && (this.castersWritten || XN(Xu, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(Ju, Xu, Vu)
      }
      markStale(uu) {
        const Ru = this.staleNear,
          yu = IR,
          Eu = [uu.i * yu, uu.j * yu, uu.k * yu];
        for (let Qu = 0; Qu < 3; Qu++)
          if (Eu[Qu] + yu <= Ru[Qu] - yu || Eu[Qu] >= Ru[Qu] + dy.k[Qu] + yu) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Ku = this.stale;
        for (let Qu = 0; Qu < Ku.length; Qu += 4)
          if (Ku[Qu] === uu.i && Ku[Qu + 1] === uu.j && Ku[Qu + 2] === uu.k) return void(Ku[Qu + 3] = this.swept);
        if (16 === Ku.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Ku.push(uu.i, uu.j, uu.k, this.swept)
      }
      writeStale() {
        const uu = this.swept,
          Ru = this.stale;
        this.staleAll && uu - this.staleAllSwept >= dy.f && (this.staleAll = !1, Ru.length = 0);
        let yu = 0;
        for (let Ku = 0; Ku < Ru.length; Ku += 4)
          if (uu - Ru[Ku + 3] < dy.f) {
            for (let uu = 0; uu < 4; uu++) Ru[yu + uu] = Ru[Ku + uu];
            yu += 4
          } Ru.length = yu;
        const Eu = this.uniformInts;
        Eu[3] = this.staleAll ? 5 : yu / 4;
        for (let Ku = 0; Ku < 4; Ku++)
          for (let uu = 0; uu < 3; uu++) Eu[16 + 4 * Ku + uu] = 4 * Ku < yu ? Ru[4 * Ku + uu] * IR : 0
      }
      writeUniform() {
        const uu = this.uniformInts;
        let Ru = this.uniformWritten;
        if (Ru) {
          let yu = !0;
          for (let Eu = 0; Eu < uu.length && yu; Eu++) yu = uu[Eu] === Ru[Eu];
          if (yu) return
        }
        Ru ??= this.uniformWritten = new Int32Array(uu.length), Ru.set(uu), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(uu) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, uu)
      }
      computeVolume(uu, Ru, yu) {
        const Eu = this.buildVolumePass();
        if (!Eu) return void(this.volumeHolds = null);
        const Ku = (0, dy.q)(this.volumeHolds, uu);
        this.volumeHolds = uu;
        const Qu = 1 === Ku.length && Ku[0].size.every(((uu, Ru) => uu === dy.k[Ru])),
          mu = this.sweptChunk,
          Ju = this.sweptLight,
          Nu = Ru[0] !== Ju[0] || Ru[1] !== Ju[1] || Ru[2] !== Ju[2],
          Xu = yu[0] !== mu[0] || yu[1] !== mu[1] || yu[2] !== mu[2],
          Vu = Nu && XN(Ru, Ju);
        if ((Qu || this.written || Xu || Vu) && (this.fastLeft = dy.f), Qu || this.written || Nu || Xu) {
          this.written = !1;
          for (let uu = 0; uu < 3; uu++) mu[uu] = yu[uu], Ju[uu] = Ru[uu];
          this.sweepLeft = Qu ? 0 : dy.f
        }
        if (Qu ? this.swept += dy.f : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Ku.push(...(0, dy.x)(uu, this.slice)), this.slice = (this.slice + 1) % dy.f, this.swept++), 0 === Ku.length) return;
        const ru = (0, dy.B)(this.workData, Ru, Ku);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Bu = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          xu = Bu.beginComputePass({
            label: "sun-shadow-volume"
          });
        xu.setPipeline(Eu.pipeline), xu.setBindGroup(ky.group, Eu.bindGroup), xu.dispatchWorkgroups(Math.ceil(ru / dy.h)), xu.end(), this.device.queue.submit([Bu.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const uu = ky,
          Ru = GPUShaderStage.COMPUTE,
          yu = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: uu.uniform,
              visibility: Ru,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: uu.WB,
              visibility: Ru,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: uu.special,
              visibility: Ru,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: uu.work,
              visibility: Ru,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: uu.volume,
              visibility: Ru,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Eu = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: yu,
            entries: [{
              binding: uu.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: uu.WB,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: uu.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: uu.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: uu.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [yu]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: ey()
            }),
            entryPoint: "main"
          }
        }).then((uu => {
          this.volumePass = {
            pipeline: uu,
            bindGroup: Eu
          }
        }), (uu => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(uu)}`)
        })), null
      }
      start(uu) {
        if (this.window) return this.window;
        const Ru = (uu, Ru) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * uu, Ru)
        };
        this.casters = new RN(((uu, yu) => {
          this.castersWritten = !0, Ru(uu, yu)
        }), VN);
        const yu = new QN(this.casters, ((uu, Ru) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * uu, Ru)
        }), Ru);
        return yu.encoded = uu => {
          this.markStale(uu)
        }, uu.Fr.on("chunkAdded", (uu => {
          yu.chunkAdded(uu)
        })), this.window = yu, yu
      }
    }
    var BN = yu(38460),
      xN = yu(38467);
    const SN = 0,
      pN = 3,
      TN = 4,
      WN = 5;

    function jN(uu, Ru, yu, Eu) {
      uu.drawOffset(Ru, Eu + SN), Ru[Eu + pN] = uu.drawTime(), yu[Eu + TN] = uu.ring.drawStart(), yu[Eu + WN] = uu.ring.drawCount()
    }
    const HN = `\n${pE}\n\nconst MAX_STOPS = ${xN.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${xN.c/4}>,\n\tcolor1: array<vec4f, ${xN.c}>,\n\tcolor2: array<vec4f, ${xN.c}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${xN.c}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${xN.c}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var dN = yu(41178);
    class bN {
      constructor(uu, Ru, yu, Eu) {
        this.device = uu, this.system = Ru, this.frameIndex = yu, this.bindings = Eu, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, dN.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (uu, Ru) => {
          this.device.queue.writeBuffer(this.ring, uu * xN.e * 4, this.system.ring.records, uu * xN.e, (Ru - uu) * xN.e)
        };
        const {
          name: Ku
        } = Ru;
        this.ring = uu.createBuffer({
          label: `particles-${Ku}`,
          size: Ru.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = uu.createBuffer({
          label: `particles-uniforms-${Ku}`,
          size: 4 * xN.o,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(uu) {
        const Ru = (0, dN.d)(this.system, this.uniformBits, uu);
        Ru && (this.uniformBits = Ru, this.device.queue.writeBuffer(this.uniforms, 0, Ru))
      }
      bind() {
        const {
          system: uu
        } = this, Ru = this.texture;
        (0, dN.j)(uu, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${uu.name}`,
          size: [xN.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * xN.k
        }, [xN.k, 1]));
        const yu = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === Ru.view && this.boundSampler === Ru.sampler && this.boundRamp === yu || (this.boundView = Ru.view, this.boundSampler = Ru.sampler, this.boundRamp = yu, this.bindGroup = this.device.createBindGroup({
          label: `particles-${uu.name}`,
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
            resource: Ru.sampler
          }, {
            binding: 3,
            resource: Ru.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: yu
          }]
        }))
      }
      destroy() {
        var uu;
        this.ring.destroy(), this.uniforms.destroy(), null === (uu = this.ramp) || void 0 === uu || uu.destroy()
      }
    }
    class CN {
      constructor(uu, Ru) {
        this.device = uu, this.resources = Ru, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, XR.c)();
        const yu = uu.createBindGroupLayout({
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
        this.frameLayout = uu.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = uu.createPipelineLayout({
          bindGroupLayouts: [RR(uu), yu, this.frameLayout]
        }), this.module = uu.createShaderModule({
          label: "particles",
          code: HN
        });
        const Eu = uu.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        uu.queue.writeTexture({
          texture: Eu
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: yu,
          rampSampler: uu.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Eu.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (Ru, yu) => (this.bindTarget(yu), {
            renderable: this.renderable,
            pipeline: mR(uu, yu),
            draw: uu => yu === this.preparedTarget ? this.draw(uu) : 0
          })
        }
      }
      get eKu() {
        return this.systems.size
      }
      reset() {
        for (const uu of this.systems.keys()) uu.reset()
      }
      describePendingWork() {
        return (0, BN.d)(this.systems.keys(), "Lite")
      }
      xI(uu, Ru) {
        const yu = new BN.b(uu, Ru, this);
        return this.systems.set(yu, new bN(this.device, yu, this.allocateFrameIndex(), this.bindings)), yu
      }
      Quu(uu, Ru) {
        for (const yu of this.systems.keys()) yu.Quu(uu, Ru)
      }
      canDraw(uu) {
        const Ru = this.systems.get(uu),
          yu = uu.texture ? this.resources.boundTexture(uu.texture) : null;
        if (!Ru || !yu || !this.targetPipelines) return !1;
        if (Ru.texture = yu, Ru.pipelines.length = 0, !ZK(uu.blendMode)) return this.warnOnce(`blend:${uu.blendMode}`, `particle blend mode ${uu.blendMode} is not drawn (${uu.name})`), !0;
        const Eu = (0, IK.j)(uu.blendMode);
        for (const Ku of Eu) {
          const uu = this.pipelineFor(Ku);
          if (!1 === uu) return Ru.pipelines.length = 0, !0;
          uu && Ru.pipelines.push(uu)
        }
        return Ru.pipelines.length === Eu.length
      }
      disposeStopped(uu) {
        uu.dispose()
      }
      remove(uu) {
        const Ru = this.systems.get(uu);
        Ru && (this.systems.delete(uu), Ru.destroy(), this.freeFrameIndices.push(Ru.frameIndex))
      }
      prepare(uu) {
        const Ru = uu.animationRatio || 1;
        JR(this.renderable._worldCenter, uu, ER), this.preparedTarget = this.target, this.draws.length = 0;
        let yu = 0;
        for (const Eu of this.systems.values()) {
          const uu = Eu.system;
          if (!uu.animateIfActive(Ru)) continue;
          if (uu.ring.takeUploads(Eu.upload), !uu.hasLiveParticles() || 0 === Eu.pipelines.length) continue;
          Eu.writeUniforms(this.warnOnce), Eu.bind();
          const Ku = 64 * Eu.frameIndex;
          Eu.count = uu.ring.drawCount(), jN(uu, this.frameData, this.frameBits, Ku), yu = Math.max(yu, Ku + 64), this.draws.push(Eu)
        }
        yu > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, yu)
      }
      draw(uu) {
        let Ru = 0,
          yu = null;
        for (const Eu of this.draws) {
          uu.setBindGroup(1, Eu.bindGroup), uu.setBindGroup(2, this.frameBindGroup, [256 * Eu.frameIndex]);
          for (const Ku of Eu.pipelines) Ku !== yu && (uu.setPipeline(Ku), yu = Ku), uu.draw(4, Eu.count), Ru++
        }
        return Ru
      }
      bindTarget(uu) {
        this.target = uu;
        const Ru = `${uu._colorFormat}|${uu._depthStencilFormat}|${uu._depthCompare}|${uu._sampleCount}`;
        let yu = this.pipelines.get(Ru);
        yu || (yu = new Map, this.pipelines.set(Ru, yu)), this.targetPipelines = yu
      }
      pipelineFor(uu) {
        var Ru;
        const yu = this.targetPipelines,
          Eu = yu.get(uu);
        if (void 0 !== Eu) return Eu;
        yu.set(uu, null);
        const Ku = this.target,
          Qu = uu === IK.b,
          mu = null !== (Ru = Ku._depthCompare) && void 0 !== Ru ? Ru : yR;
        return this.device.createRenderPipelineAsync({
          label: `particles-${uu}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: vu({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Qu ? 1 : 0
            }
          }, Ku, hK((0, IK.h)(uu))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Ku._depthStencilFormat ? {
            format: Ku._depthStencilFormat,
            depthCompare: mu,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Ku._sampleCount
          }
        }).then((Ru => {
          yu.set(uu, Ru)
        }), (Ru => {
          yu.set(uu, !1), console.error("Lite particle pipeline failed", Ru), YK("particles", `blend-${uu}`, Ru)
        })), null
      }
      allocateFrameIndex() {
        const uu = this.freeFrameIndices.pop();
        if (void 0 !== uu) return uu;
        const Ru = this.nextFrameIndex++;
        if (64 * (Ru + 1) > this.frameData.length) {
          const uu = new Float32Array(2 * this.frameData.length);
          uu.set(this.frameData), this.frameData = uu, this.frameBits = new Uint32Array(uu.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return Ru
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
    class kN {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.lite = uu, this.canvas = Ru, this.info = yu, this.resources = Ku, this.CEu = !1, this.needPOTTextures = !1, this.I3 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Ru.width, this.renderHeight = Ru.height, this.caps = {
          maxTextureSize: Eu.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Eu.maxTextureArrayLayers
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
      setSize(uu, Ru) {
        if (this.renderWidth === uu && this.renderHeight === Ru) return !1;
        const yu = this.renderWidth,
          Eu = this.renderHeight;
        this.renderWidth = uu, this.renderHeight = Ru;
        try {
          (0, Fu.o)(this.lite, uu, Ru)
        } catch (Ku) {
          if (Ku instanceof DOMException && "InvalidStateError" === Ku.name) {
            this.renderWidth = yu, this.renderHeight = Eu;
            try {
              (0, Fu.o)(this.lite, yu, Eu)
            } catch {
              this.canvas.width = yu, this.canvas.height = Eu
            }
            return console.warn("WebGPU could not allocate render targets for resize", uu, Ru, Ku.message), !1
          }
          throw Ku
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
      gH() {
        const uu = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : uu - this.lastFrameTime, this.lastFrameTime = uu
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(uu, Ru) {
        const yu = document.createElement("canvas");
        return yu.width = uu, yu.height = Ru, yu
      }
      R_(uu, Ru) {
        var yu;
        return null !== (yu = this.resources.R_.get(uu)) && void 0 !== yu ? yu : new Pu(this.resources, uu, Ru)
      }
      atlasArray(uu, Ru, yu) {
        return this.resources.atlasArray(uu, Ru, yu)
      }
    }
    class eN {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(uu) {
        this.fov = uu.fov, this.nearPlane = uu.near, this.farPlane = uu.far;
        const Ru = uu.worldMatrix;
        for (let yu = 0; yu < 16; yu++)
          if (this.worldMatrix[yu] !== Ru[yu]) return this.worldMatrix.set(Ru), void this.worldMatrixVersion++
      }
    }
    class AN {
      constructor(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
        let Vu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = uu, this.cp = Ru, this.sceneTask = yu, this.gpuDevice = Eu, this.terrain = Ku, this.meshes = Qu, this.particles = mu, this.resources = Ju, this.sunShadow = Vu, this.Qyu = void 0, this.backendName = "WebGPU (Lite)", this.A_ = void 0, this.modelMeshes = void 0, this.camera = new eN, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new Zu(Eu.lost), this.deviceLost = this.refusals.deviceLost, this.Qyu = new kN(uu, Nu, Xu, Eu.limits, Ju), (0, Mu.J)({
          jJ: uu => {
            nu(uu) && Ju.textureSlot(uu)
          },
          loaded: uu => nu(uu) ? Ju.textureLoaded(uu) : null,
          canvasUpdated: (uu, Ru, yu) => {
            nu(uu) && Ju.canvasUpdated(uu, Ru, yu)
          }
        }), this.A_ = Qu.A_, this.modelMeshes = Qu.modelMeshes, Ru.camera = this.camera
      }
      get castsEntitySunShadows() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.sunShadow) || void 0 === Ru ? void 0 : Ru.tracesEntities) && void 0 !== uu && uu
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(uu) {
        this.modelMeshes.attach(uu.model, uu.sceneMirror);
        const Ru = uu.cp;
        this.setClearColour(Ru.clearColor.r, Ru.clearColor.g, Ru.clearColor.b), Ru.draw = () => {
          this.drawFrame(uu, Ru)
        }
      }
      render(uu) {
        try {
          this.Qyu.gH(), uu.cp.render()
        } catch (Ru) {
          throw this.refusals.frameFailed(Ru), Ru
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var uu, Ru, yu, Eu;
        const Ku = [...this.particles.describePendingWork(), ...null !== (uu = null === (Ru = this.sunShadow) || void 0 === Ru ? void 0 : Ru.describePendingWork()) && void 0 !== uu ? uu : []],
          Qu = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (yu = this.terrain.sceneDepth) && void 0 !== yu && yu.compiling ? 1 : 0) + (null !== (Eu = this.terrain.shadowMask) && void 0 !== Eu && Eu.compiling ? 1 : 0);
        Qu > 0 && Ku.push(`${Qu} Lite pipelines compiling`);
        const mu = this.terrain.buffersAwaitingVerdict;
        mu > 0 && Ku.push(`${mu} Lite terrain buffers awaiting their out-of-memory verdict`);
        const Ju = this.resources.texturesLoading;
        return Ju > 0 && Ku.push(`${Ju} Lite textures loading`), Ku
      }
      prepareTexture(uu) {
        return null !== this.resources.boundTexture(uu) || this.resources.textureFailed(uu)
      }
      drawFrame(uu, Ru) {
        var yu, Eu, Ku, Qu, mu, Ju;
        const Nu = VJ(uu);
        this.camera.copyFromView(Nu), this.setClearColour(Nu.clearColour[0], Nu.clearColour[1], Nu.clearColour[2]), null === (yu = this.sunShadow) || void 0 === yu || yu.prepare(uu.Yr, Nu.eye, null !== (Eu = uu.Yr.ix) && void 0 !== Eu ? Eu : null), this.terrain.prepare(uu, Nu), null === (Ku = this.terrain.sceneDepth) || void 0 === Ku || Ku.setPlanes(Nu.near, Nu.far), null === (Qu = this.terrain.shadowMask) || void 0 === Qu || Qu.prepare(Nu), om(this.sceneTask), this.meshes.prepare(Ru, Nu, uu.model.earthSky, null !== (mu = uu.Yr.ix) && void 0 !== mu ? mu : null), this.particles.prepare(Nu);
        const Xu = performance.now();
        this.resources.flushUploads(), null === (Ju = this.sunShadow) || void 0 === Ju || Ju.traceEntities(this.meshes);
        try {
          (0, Fu.m)(this.engine, this.lastFrameTime > 0 ? Xu - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Xu
      }
      setClearColour(uu, Ru, yu) {
        const Eu = this.cp.clearColor;
        Eu.r = uu, Eu.g = Ru, Eu.b = yu, Eu.a = 1
      }
    }
    const DN = "WebGPU device lost while Lite was starting";

    function MN(uu, Ru) {
      return "object" === typeof uu && null !== uu ? Object.assign(uu, {
        startStep: Ru
      }) : uu
    }
    async function IN(uu, Ru) {
      const yu = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!yu) throw MN(new Error("No WebGPU adapter"), "no_adapter");
      const Eu = yu.info,
        Ku = {
          vendor: (null === Eu || void 0 === Eu ? void 0 : Eu.vendor) || "unknown vendor",
          renderer: (null === Eu || void 0 === Eu ? void 0 : Eu.architecture) || "unknown renderer",
          version: (null === Eu || void 0 === Eu ? void 0 : Eu.description) || "unknown version"
        },
        Qu = function(uu) {
          const Ru = {};
          for (const yu in uu.limits) {
            const Eu = uu.limits[yu];
            "number" === typeof Eu && (Ru[yu] = Eu)
          }
          return Ru
        }(yu);
      let mu;
      uu.style.background = "black";
      try {
        mu = await (0, Fu.e)(uu, {
          msaaSamples: Ru.Lyu ? 4 : 1,
          requiredLimits: Qu,
          alphaMode: "premultiplied"
        })
      } catch (Vu) {
        throw MN(Vu, "#47" === (null === (Ju = Vu) || void 0 === Ju ? void 0 : Ju.message) ? "no_adapter" : "device")
      }
      var Ju;
      const Nu = function(uu) {
        return uu._device
      }(mu);
      let Xu = null;
      Nu.lost.then((uu => {
        Xu = uu, console.error(`WebGPU device lost (${uu.reason}): ${uu.message}`)
      }));
      try {
        const yu = await async function(uu, Ru, yu, Eu, Ku, Qu) {
          const mu = (0, wu.c)(uu),
            Ju = new Pm(uu, Ru),
            Nu = new YJ(Ru),
            Xu = new Dm(Ru, Ju, (uu => function(uu, Ru) {
              for (const Eu of fu(uu)) {
                var yu;
                if (Eu._targetSignature === Ru) return null !== (yu = Eu._sceneBG) && void 0 !== yu ? yu : null
              }
              return null
            }(mu, uu))),
            Vu = new CN(Ru, Ju);
          for (const xu of function(uu, Ru, yu) {
              return [Ru.opaqueRenderable, uu.opaqueRenderable, uu.skyLastRenderable, yu.renderable, Ru.transparentRenderable, uu.transparentRenderable, uu.frontRenderable]
            }(Xu, Nu, Vu)) au(mu, xu);
          const ru = function(uu) {
            for (const Ru of fu(uu))
              if ("cp" === Ru.name) return Ru;
            throw new Error("Lite: the scene has no render task named scene")
          }(mu);
          Ku && Nu.installSceneDepth(ru, uu);
          const Bu = Qu ? new rN(Ru, Qu.entities) : null;
          Nu.sunShadow = Bu, Bu && null !== Qu && void 0 !== Qu && Qu.entities && (Nu.shadowMask = new AJ(Ru, ru, uu, Nu));
          return Xu.sunShadow = Bu, await (0, wu.g)(mu), new AN(uu, mu, ru, Ru, Nu, Xu, Vu, Ju, yu, Eu, Bu)
        }(mu, Nu, uu, Ku, Ru.sceneDepth, Ru.sunShadow);
        if (null !== Xu) {
          const {
            reason: uu,
            message: Ru
          } = Xu;
          throw Object.assign(new Error(`${DN} (${uu}): ${Ru}`), {
            fallbackReason: DN
          })
        }
        return yu
      } catch (Vu) {
        throw Nu.destroy(), null === Xu ? Vu : MN(Vu, "device")
      }
    }
  },
  40444: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => pu,
      D: () => xu,
      F: () => Su,
      e: () => Ku,
      g: () => Eu,
      k: () => Bu,
      m: () => Vu,
      p: () => Tu,
      s: () => Qu,
      u: () => Ju,
      w: () => Nu,
      y: () => mu
    });
    const Eu = 3,
      Ku = 0,
      Qu = 1,
      mu = 2,
      Ju = {
        uniform: 3,
        WB: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Nu = 10,
      Xu = "BloxdPackInputs",
      Vu = "bloxdPackInputs",
      ru = [{
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
      Bu = 80;

    function xu() {
      const uu = ru.map((uu => {
        let {
          name: Ru,
          type: yu
        } = uu;
        return `    ${Ru}: ${yu},\n`
      })).join("");
      return `struct ${Xu} {\n${uu}}\n@group(${Eu}) @binding(${Ku}) var<uniform> ${Vu}: ${Xu};\n`
    }

    function Su(uu, Ru) {
      const yu = new DataView(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Bu),
        [Eu, Ku, Qu, mu, Ju, Nu] = ru;
      yu.setFloat32(Eu.offset, Ru.seconds, !0), yu.setUint32(Ku.offset, Ru.lit ? 1 : 0, !0);
      for (let Xu = 0; Xu < 3; Xu++) yu.setInt32(Qu.offset + 4 * Xu, Ru.renderOffset[Xu], !0), yu.setFloat32(mu.offset + 4 * Xu, Ru.duu[Xu], !0), yu.setFloat32(Ju.offset + 4 * Xu, Ru.eyePosition[Xu], !0), yu.setFloat32(Nu.offset + 4 * Xu, Ru.shadowDirection[Xu], !0)
    }

    function pu(uu) {
      const Ru = new Uint32Array(Math.max(1, uu.length));
      return uu.forEach(((uu, yu) => {
        let {
          id: Eu,
          rotation: Ku
        } = uu;
        Ru[yu] = 65535 & Eu | (3 & Ku) << 16
      })), Ru
    }
    const Tu = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);