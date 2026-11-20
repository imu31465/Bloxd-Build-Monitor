export const id = 262;
export const ids = [262];
export const modules = {
  41199: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => hT,
      e: () => yT,
      f: () => OT,
      h: () => xT
    });
    var lT = cT(37086),
      MT = cT(38546),
      KT = cT(38539);

    function OT(TT, kT, cT, lT) {
      const MT = KT.v;
      kT.fill(0), TT.gravity.toArray(kT, MT.gravity), TT.colorDead.toArray(kT, MT.colorDead), cT[MT.ramp] = TT.useRampGradients ? 1 : 0;
      const OT = TT.getColorGradients(),
        yT = CT(TT, OT, "colour", lT);
      cT[MT.colorCount] = yT;
      for (let KT = 0; KT < yT; KT++) {
        var fT;
        const TT = OT[jT(OT, KT)];
        kT[MT.colorPositions + KT] = TT.gradient, TT.color1.toArray(kT, MT.color1 + 4 * KT), (null !== (fT = TT.color2) && void 0 !== fT ? fT : TT.color1).toArray(kT, MT.color2 + 4 * KT)
      }
      const xT = TT.getVelocityGradients(),
        IT = CT(TT, xT, "Oh", lT);
      cT[MT.velocityCount] = IT;
      for (let KT = 0; KT < IT; KT++) QT(kT, MT.Oh + 4 * KT, xT[jT(xT, KT)]);
      const AT = TT.useRampGradients ? TT.getColorRemapGradients() : null,
        vT = CT(TT, AT, "colour remap", lT);
      cT[MT.remapCount] = vT;
      for (let KT = 0; KT < vT; KT++) QT(kT, MT.remap + 4 * KT, AT[jT(AT, KT)])
    }

    function yT() {
      return {
        key: [],
        texels: new Uint8Array(4 * KT.l)
      }
    }
    const fT = [];

    function xT(TT, kT) {
      return IT(TT, fT), !NT(fT, kT.key) && (kT.key.length = 0, kT.key.push(...fT), kT.key.length > 0 && function(TT, kT) {
        for (let cT = 0; cT < KT.l; cT++) MT.p.GetCurrentGradient(cT / KT.l, TT, ((TT, kT, cT) => {
          lT.Color3.LerpToRef(TT.color, kT.color, cT, AT)
        })), kT[4 * cT] = 255 * AT.r, kT[4 * cT + 1] = 255 * AT.g, kT[4 * cT + 2] = 255 * AT.b, kT[4 * cT + 3] = 255
      }(TT.getRampGradients(), kT.texels), !0)
    }

    function IT(TT, kT) {
      kT.length = 0;
      const cT = TT.useRampGradients ? TT.getRampGradients() : null;
      if (null !== cT && void 0 !== cT && cT.length) {
        kT.push(cT.length);
        for (const TT of cT) kT.push(TT.gradient, TT.color.r, TT.color.g, TT.color.b)
      }
    }
    const AT = new lT.Color3;

    function CT(TT, kT, cT, lT) {
      return kT ? kT.length > KT.b ? (lT(`particleStops:${cT}`, `GPU particles use the first 2 and last ${KT.b-2} of more than ${KT.b} ${cT} gradient stops (${TT.name})`), KT.b) : kT.length : 0
    }

    function jT(TT, kT) {
      return kT < 2 || TT.length <= KT.b ? kT : TT.length - KT.b + kT
    }
    const vT = new Float32Array(KT.q),
      tT = new Uint32Array(vT.buffer);

    function hT(TT, kT, cT) {
      return OT(TT, vT, tT, cT), kT && NT(tT, kT) ? null : tT.slice()
    }

    function NT(TT, kT) {
      if (TT.length !== kT.length) return !1;
      for (let cT = 0; cT < TT.length; cT++)
        if (TT[cT] !== kT[cT]) return !1;
      return !0
    }

    function QT(TT, kT, cT) {
      var lT;
      TT[kT] = cT.gradient, TT[kT + 1] = cT.factor1, TT[kT + 2] = null !== (lT = cT.factor2) && void 0 !== lT ? lT : cT.factor1
    }
  },
  41196: (TT, kT, cT) => {
    function lT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const kT = new Set;
      return (cT, lT) => {
        kT.has(cT) || (kT.add(cT), console.warn(TT + lT))
      }
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  41230: (TT, kT, cT) => {
    cT.d(kT, {
      createLiteRendererAsync: () => Jf,
      liteBabylonBackend: () => XT,
      setPipelineFailureHook: () => BM
    });
    var lT = cT(37086),
      MT = cT(37466),
      KT = cT(37754),
      OT = cT(37034),
      yT = cT(37764);
    class fT extends yT.e {
      constructor() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        super(...kT), this.color = new lT.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: kT[0].NJ().getUniqueId(),
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
    const xT = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      IT = TT => 1 << xT.indexOf(TT),
      AT = IT("VERTEXCOLOR"),
      CT = IT("INSTANCES"),
      jT = IT("THIN_INSTANCES"),
      vT = IT("INSTANCESCOLOR"),
      tT = IT("FOG"),
      hT = IT("LITE_FRONT_LAYER");

    function NT(TT, kT, cT, lT) {
      let MT = 0;
      return TT.isVerticesDataPresent("color") && (MT |= AT), "none" !== kT && (MT |= CT), "thin" === kT && (MT |= jT, TT.isVerticesDataPresent("instanceColor") && (MT |= vT)), lT.fogEnabled && TT.applyFog && 0 !== lT.fogMode && (MT |= tT), cT >= 1 && (MT |= hT), MT
    }

    function QT(TT, kT) {
      TT.updateColor4("color", kT.color, kT.alpha)
    }
    var ST = cT(37700),
      DT = cT(37253),
      aT = cT(37127),
      FT = cT(36996),
      rT = cT(37686),
      PT = cT(37695),
      wT = cT(37016),
      mT = cT(37025),
      bT = cT(37041);
    const zT = FT.b.GLSL;
    class JT {
      constructor(TT, kT) {
        this.name = TT, this.et = kT, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.QJ = {
          addOnce: TT => {
            this.disposers.push(TT)
          }
        }, this.uniqueId = kT.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      NJ() {
        return this.et
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
        return (0, wT.V)(this.model, TT.visibility, TT.hasVertexAlpha)
      }
      needAlphaTestingForMesh(TT) {
        return (0, wT.W)(this.model, TT.visibility, TT.hasVertexAlpha)
      }
      dispose() {
        (0, DT.i)(this);
        for (const TT of this.disposers.splice(0)) TT()
      }
      get model() {
        return (0, wT.cb)(this)
      }
    }
    const oT = new WeakSet;

    function HT(TT) {
      return oT.has(TT)
    }

    function eT(TT) {
      oT.add(TT)
    }
    const GT = {
      create: (TT, kT) => ((0, aT.s)(TT, new JT(TT.name, kT)), mT.b.defines()),
      write: () => {},
      addFeature: (TT, kT) => {
        const cT = TT.mirror;
        kT.feature === PT.h && kT.state.dirLightCount > 0 && (TT.disableLighting = !0, (0, wT.ab)(TT)), "BLOXD_LIGHTING" in kT.defines && (0, DT.h)(cT), kT.feature === rT.g && ((0, ST.h)(kT.state, zT), function(TT, kT) {
          const cT = TT.NJ().Dv();
          kT.textures.forEach(((lT, MT) => {
            setTimeout((() => {
              var KT, OT;
              const {
                url: yT
              } = lT.source;
              cT.atlasArray(yT, null !== (KT = null === (OT = kT.sources.pixels) || void 0 === OT ? void 0 : OT[MT]) && void 0 !== KT ? KT : null, kT.sources.layerWidth).then((cT => {
                (0, ST.d)(TT, kT, MT, cT, cT.layerWidth, cT.layers, zT)
              })).catch((TT => {
                console.error(`Failed to build texture array for atlas ${MT}`, TT)
              }))
            }))
          }))
        }(cT, kT.state))
      },
      texture: (TT, kT, cT) => {
        let {
          data: lT,
          sets: MT
        } = cT;
        var KT;
        (eT(TT), lT) && (TT.uvSet = null !== (KT = null === MT || void 0 === MT ? void 0 : MT.coordinatesIndex) && void 0 !== KT ? KT : 0, (0, aT.eb)(TT.matrix, null !== MT && void 0 !== MT ? MT : {}))
      },
      cube: eT,
      canvas: (TT, kT, cT) => {
        let {
          width: lT,
          height: MT,
          mipmaps: KT,
          samplingMode: OT = bT.i.trilinear,
          hasAlpha: yT = !1,
          wrap: fT = bT.c.clamp
        } = cT;
        const xT = TT.Dv().createCanvas(lT, MT),
          IT = new bT.j("2d", {
            kind: "canvas",
            width: lT,
            height: MT,
            canvas: xT
          }, {
            samplingMode: OT,
            wrapU: fT,
            wrapV: fT,
            noMipmap: !KT,
            invertY: !0
          });
        return IT.hasAlpha = yT, eT(IT), IT
      }
    };
    var VT = cT(37275),
      ET = cT(36932);
    class ZT {
      constructor(TT, kT, cT) {
        this.engine = TT, this.clearColor = kT, this.ambientColor = cT, this.onBeforeRenderObservable = new ET.b, this.onBeforeCameraRenderObservable = new ET.b, this.onAfterRenderObservable = new ET.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.lF = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Dv() {
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
        const kT = this.pending.indexOf(TT); - 1 !== kT && this.pending.splice(kT, 1)
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

    function uT() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const XT = {
      GkT: uT,
      KlT: (TT, kT) => {
        const cT = new ZT(TT.engine, lT.e.FromArray(kT.clearColor), lT.Color3.FromArray(kT.ambientColor));
        (0, OT.c)(GT, cT), TT.et = cT,
          function(TT, kT) {
            const cT = Object.assign((0, VT.i)(TT, "camera"), {
              layerMask: 268435455
            });
            TT.model.nodes.setWorldSource(cT.row, TT.model.view.worldMatrix), TT.camera = kT.activeCamera = cT
          }(TT, cT), (0, MT.g)(TT, ((TT, kT, cT) => (0, KT.k)(TT, kT, cT, yT.e)))
      },
      klT: () => {},
      setBabylonFog: () => {},
      ylT: uT,
      IlT: () => {},
      linesFromArrays: (TT, kT, cT) => (0, KT.k)(TT, kT, cT, fT),
      Gt: () => {},
      xlT: uT
    };
    var dT = cT(41286),
      LT = cT(41296);
    class RT {
      constructor(TT) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const kT = new Promise((TT => {
          this.refused = TT
        }));
        this.deviceLost = Promise.race([TT, kT])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(TT) {
        (function(TT) {
          const {
            name: kT,
            message: cT
          } = null !== TT && void 0 !== TT ? TT : {};
          return "InvalidStateError" === kT && "string" === typeof cT && cT.startsWith("GPUDevice.")
        })(TT) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: TT.message,
          framesRefused: !0
        }))
      }
    }
    class gT {
      constructor(TT) {
        this.resources = TT, this.matrixKey = {
          DA: 0
        }, this.attributesKey = {
          DA: 0
        }, this.inputs = Object.create(null);
        for (let kT = 0; kT < 4; kT++) this.inputs[`world${kT}`] = new BT(this.matrixKey, 16 * kT, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(TT, kT) {
        this.resources.vertexBufferCreated(this.matrixKey, TT, !0), kT && this.resources.vertexBufferCreated(this.attributesKey, kT, !0)
      }
    }
    class UT extends gT {
      constructor(TT, kT, cT) {
        super(TT), this.mesh = kT, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const lT = this.inputs;
        let MT = 0;
        for (const {
            size: OT
          }
          of cT) MT += OT;
        for (const {
            name: OT,
            offset: yT,
            size: fT,
            type: xT
          }
          of cT) lT[OT] = new BT(this.attributesKey, 4 * yT, 4 * MT, fT, !0, xT);
        this.rowStride = MT, TT.Aq.set(kT, this);
        const KT = kT.isVerticesDataPresent;
        kT.isVerticesDataPresent = (TT, cT) => TT in lT || KT.call(kT, TT, cT)
      }
      attach(TT, kT) {
        this.matrices = TT, this.attributes = kT, this.bind(TT, kT), this.mirror(TT, TT.length, TT.length / 16)
      }
      U3(TT) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, TT ? 64 * TT : void 0)
      }
      B3() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(TT, kT) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * TT, 16 * kT)
      }
      attributeRows(TT, kT) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, TT * this.rowStride, kT * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(TT, kT, cT) {
        const lT = this.mesh._thinInstanceDataStorage;
        lT.matrixData = TT, lT.matrixBufferSize = kT, lT.worldMatrices = null, lT.instancesCount = cT
      }
    }
    class YT extends gT {
      constructor(TT, kT, cT) {
        var lT, MT, KT, OT;
        super(TT), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (lT = null === cT || void 0 === cT ? void 0 : cT.interleavedKinds) && void 0 !== lT ? lT : null, this.offsets = null !== (MT = null === cT || void 0 === cT ? void 0 : cT.interleavedOffsets) && void 0 !== MT ? MT : [], this.rowStride = null !== (KT = null === cT || void 0 === cT ? void 0 : cT.interleavedRowStride) && void 0 !== KT ? KT : 0, null === (OT = this.layout) || void 0 === OT || OT.forEach(((TT, kT) => {
          this.inputs[TT] = new BT(this.attributesKey, 4 * this.offsets[kT], 4 * this.rowStride, cT.strides[TT])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), TT.batchUploads.set(kT, this), kT.QJ.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(TT) {
        const kT = this.packedBatch;
        return kT.renderSelf ? 0 === TT ? this.packedSource : kT.instances[TT - 1] : kT.instances[TT]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(TT, kT, cT, lT) {
        const MT = (kT.renderSelf ? 1 : 0) + kT.rows.length;
        if (this.frame = lT, this.count = MT, this.packedSource = TT, this.packedBatch = kT, 0 === MT) return;
        if (TT.getWorldMatrix(), 16 * MT > this.matrices.length) {
          let TT = this.matrices.length / 16;
          for (; TT < MT;) TT *= 2;
          this.matrices = new Float32Array(16 * TT), this.attributes &&= new Float32Array(TT * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let KT = 0;
        kT.renderSelf && this.packRow(KT++, TT, kT.row, cT);
        for (let OT = 0; OT < kT.rows.length; OT++) this.packRow(KT++, kT.instances[OT], kT.rows[OT], cT);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * MT), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, MT * this.rowStride)
      }
      packRow(TT, kT, cT, lT) {
        const MT = this.matrices;
        if (cT < 0) MT.set(kT.getWorldMatrix().m, 16 * TT);
        else
          for (let xT = 0; xT < 16; xT++) MT[16 * TT + xT] = lT[16 * cT + xT];
        const KT = this.attributes;
        if (!KT) return;
        const OT = kT.xH,
          yT = this.layout;
        for (let xT = 0; xT < yT.length; xT++) {
          var fT;
          const kT = null !== (fT = OT[yT[xT]]) && void 0 !== fT ? fT : 0,
            cT = TT * this.rowStride + this.offsets[xT];
          kT.toArray ? kT.toArray(KT, cT) : kT.copyToArray ? kT.copyToArray(KT, cT) : KT[cT] = kT
        }
      }
    }
    class BT {
      constructor(TT, kT, cT, lT) {
        let MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = TT, this.byteOffset = kT, this.byteStride = cT, this.size = lT, this.instanced = MT, this.type = KT, this.normalized = OT
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
    const WT = "CANVAS_ALPHA_ONE",
      nT = `override ${WT}: bool = false;`,
      pT = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function iT(TT, kT, cT) {
      var lT;
      let MT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const KT = null !== (lT = kT._colorFormat) && void 0 !== lT ? lT : "bgra8unorm",
        OT = MT ? 15 : 0;
      return cT ? {
        ...TT,
        targets: [{
          format: KT,
          blend: {
            color: cT,
            alpha: pT
          },
          writeMask: OT
        }]
      } : {
        ...TT,
        constants: {
          ...TT.constants,
          [WT]: 1
        },
        targets: [{
          format: KT,
          writeMask: OT
        }]
      }
    }

    function qT(TT, kT) {
      TT._renderables.push(kT)
    }

    function sT(TT) {
      var kT, cT;
      return null !== (kT = null === (cT = TT._frameGraph) || void 0 === cT ? void 0 : cT._tasks) && void 0 !== kT ? kT : []
    }

    function Tk(TT) {
      return TT._currentEncoder
    }

    function kk(TT) {
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
    const ck = "greater-equal",
      lk = 2e5,
      Mk = 1e5,
      Kk = new WeakMap;

    function Ok(TT, kT) {
      let cT = Kk.get(TT);
      if (!cT) {
        cT = {
          module: TT.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Kk.set(TT, cT)
      }
      const lT = `${kT._colorFormat}|${kT._depthStencilFormat}|${kT._sampleCount}`;
      let MT = cT.pipelines.get(lT);
      if (!MT) {
        var KT;
        const {
          module: OT
        } = cT;
        MT = TT.createRenderPipeline({
          label: `placeholder ${lT}`,
          layout: TT.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: OT,
            entryPoint: "v"
          },
          fragment: {
            module: OT,
            entryPoint: "f",
            targets: [{
              format: null !== (KT = kT._colorFormat) && void 0 !== KT ? KT : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: kT._depthStencilFormat ? {
            format: kT._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: kT._sampleCount
          }
        }), cT.pipelines.set(lT, MT)
      }
      return MT
    }

    function yk(TT, kT, cT) {
      const lT = kT.eye,
        MT = kT.viewMatrix;
      TT[0] = lT[0] + MT[2] * cT, TT[1] = lT[1] + MT[6] * cT, TT[2] = lT[2] + MT[10] * cT
    }
    var fk = cT(37807),
      xk = cT(41196),
      Ik = cT(37013);
    const Ak = Math.PI,
      Ck = Ak / 1.95,
      jk = [5e-4 / 94, 125e-7, 5e-4 / 18],
      vk = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((TT => {
        let [kT, cT] = TT;
        return .434 * Ak * Math.pow(2 * Ak / kT, 2) * cT
      }));

    function tk(TT, kT, cT) {
      const {
        up: lT,
        mieDirectionalG: MT
      } = TT, KT = 1 - Qk(1 - Math.exp(kT[1] / 45e4), 0, 1), OT = TT.rayleigh - (1 - KT), yT = Math.hypot(kT[0], kT[1], kT[2]), fT = yT > 0 ? 1 / yT : 0, xT = cT.sunDir;
      for (let jT = 0; jT < 3; jT++) xT[jT] = kT[jT] * fT;
      const IT = xT[0] * lT[0] + xT[1] * lT[1] + xT[2] * lT[2],
        AT = 1e3 * Math.max(0, 1 - Math.exp(-(Ck - Math.acos(Qk(IT, -1, 1))) / 1.5));
      cT.sunE = AT;
      const CT = .2 * TT.turbidity * 1e-17 * TT.mieCoefficient;
      for (let jT = 0; jT < 3; jT++) {
        const TT = jk[jT] * OT,
          kT = vk[jT] * CT,
          lT = AT / (TT + kT);
        cT.inScatterR[jT] = TT * lT, cT.inScatterM[jT] = kT * lT, cT.extinctionBeta[jT] = 8400 * TT + 1250 * kT
      }
      return cT.sunsetMix = Qk(Math.pow(1 - IT, 5), 0, 1), cT.sunDiscE = 19e3 * AT, cT.mieScale = (1 - MT * MT) / (4 * Ak), cT.mieBase = 1 + MT * MT, cT.mieSlope = 2 * MT, cT
    }
    const hk = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const Nk = 1 / function(TT) {
      const {
        A: kT,
        B: cT,
        C: lT,
        D: MT,
        E: KT,
        F: OT
      } = hk;
      return (TT * (kT * TT + lT * cT) + MT * KT) / (TT * (kT * TT + cT) + MT * OT) - KT / OT
    }(1e3);

    function Qk(TT, kT, cT) {
      return Math.min(Math.max(TT, kT), cT)
    }
    const Sk = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function Dk(TT, kT) {
      const cT = new Map(kT),
        lT = [],
        MT = [],
        KT = () => 0 === MT.length || MT[MT.length - 1].active;
      let OT = null;
      const yT = () => {
        const TT = [...cT].filter((TT => {
            let [, kT] = TT;
            return !0 !== kT
          })),
          kT = TT.map((TT => {
            let [kT] = TT;
            return kT
          })).join("|");
        OT = TT.length ? new RegExp(`\\b(${kT})\\b`, "g") : null
      };
      yT();
      for (const fT of TT.split("\n")) {
        const TT = Sk.exec(fT);
        if (!TT) {
          KT() && lT.push(OT ? ak(fT, OT, cT) : fT);
          continue
        }
        const kT = TT[1],
          xT = TT[2].trim();
        if ("ifdef" === kT || "ifndef" === kT || "if" === kT) {
          const TT = KT(),
            lT = "if" === kT ? Fk(xT, cT) : cT.has(xT) === ("ifdef" === kT);
          MT.push({
            active: TT && lT,
            parentActive: TT,
            taken: lT
          })
        } else if ("elif" === kT || "else" === kT) {
          const TT = MT[MT.length - 1];
          if (!TT) throw new Error(`#${kT} without #if`);
          const lT = !TT.taken && ("else" === kT || Fk(xT, cT));
          TT.active = TT.parentActive && lT, TT.taken = TT.taken || lT
        } else if ("endif" === kT) {
          if (!MT.pop()) throw new Error("#endif without #if")
        } else if (KT()) {
          const [TT, ...lT] = xT.split(/\s+/);
          "undef" === kT ? cT.delete(TT) : cT.set(TT, !lT.length || lT.join(" ")), yT()
        }
      }
      if (MT.length) throw new Error("Unterminated #if");
      return lT.join("\n")
    }

    function ak(TT, kT, cT) {
      return TT.replace(kT, (TT => {
        const kT = cT.get(TT);
        return "string" === typeof kT ? kT : TT
      }))
    }

    function Fk(TT, kT) {
      var cT;
      const lT = null !== (cT = TT.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== cT ? cT : [];
      let MT = 0;
      const KT = () => lT[MT],
        OT = () => lT[MT++],
        yT = TT => {
          const cT = /^\d/.test(TT) ? TT : kT.get(TT);
          return "string" === typeof cT ? parseInt(cT) : Number.NaN
        },
        fT = () => {
          const TT = OT();
          if ("!" === TT) return !fT();
          if ("(" === TT) {
            const TT = IT();
            return OT(), TT
          }
          if ("defined" === TT) {
            const TT = "(" === KT();
            TT && OT();
            const cT = OT();
            return TT && OT(), kT.has(cT)
          }
          const cT = KT();
          if ("==" === cT || "!=" === cT || ">" === cT || "<" === cT || ">=" === cT || "<=" === cT) {
            OT();
            const kT = yT(TT),
              lT = yT(OT());
            if (Number.isNaN(kT) || Number.isNaN(lT)) return !1;
            switch (cT) {
              case "==":
                return kT === lT;
              case "!=":
                return kT !== lT;
              case ">":
                return kT > lT;
              case "<":
                return kT < lT;
              case ">=":
                return kT >= lT;
              default:
                return kT <= lT
            }
          }
          return kT.has(TT)
        },
        xT = () => {
          let TT = fT();
          for (;
            "&&" === KT();) {
            OT();
            const kT = fT();
            TT = TT && kT
          }
          return TT
        },
        IT = () => {
          let TT = xT();
          for (;
            "||" === KT();) {
            OT();
            const kT = xT();
            TT = TT || kT
          }
          return TT
        },
        AT = IT();
      if (MT !== lT.length) throw new Error(`Cannot evaluate #if ${TT}`);
      return AT
    }
    var rk = cT(37005),
      Pk = cT(37362),
      wk = cT(37368),
      mk = cT(40512),
      bk = cT(38583);
    const zk = 32,
      Jk = [10, 3, 10],
      Hk = [21, 7, 21],
      ek = Hk[0] * Hk[1] * Hk[2],
      Gk = 0,
      Vk = 1,
      Ek = 2,
      Zk = 3,
      uk = 64,
      Xk = 512,
      dk = 4 * ek,
      Lk = 1536,
      Rk = dk + ek * Lk,
      gk = 1073741824,
      Uk = Rk + 1;

    function Yk(TT, kT) {
      const cT = TT % kT;
      return cT < 0 ? cT + kT : cT
    }

    function Bk(TT, kT, cT) {
      return lT = Yk(TT, Hk[0]), MT = Yk(kT, Hk[1]), KT = Yk(cT, Hk[2]), lT + Hk[0] * (MT + Hk[1] * KT);
      var lT, MT, KT
    }

    function Wk(TT, kT, cT) {
      return TT + 8 * (kT + 8 * cT)
    }

    function nk(TT, kT, cT) {
      return TT + 4 * (kT + 4 * cT)
    }
    const pk = 65535,
      ik = 0,
      qk = 1,
      sk = 2,
      Tc = 3;

    function kc(TT) {
      return Math.ceil(TT * TT / 32)
    }
    const cc = 8192,
      lc = 1 << 18,
      Mc = 65536,
      Kc = 294912,
      Oc = 128,
      yc = 4096,
      fc = 16,
      xc = 16385,
      Ic = 81921,
      Ac = 147457,
      Cc = 4194304;
    const jc = [0, 0, 0],
      vc = [0, 0, 0];

    function tc(TT, kT, cT, lT) {
      ! function(TT, kT, cT) {
        const [lT, MT, KT] = [TT[0], TT[1], TT[2]];
        let OT, yT, fT;
        Math.abs(MT) < .99 ? (OT = KT, yT = 0, fT = -lT) : (OT = -MT, yT = lT, fT = 0);
        const xT = Math.hypot(OT, yT, fT);
        kT[0] = OT / xT, kT[1] = yT / xT, kT[2] = fT / xT, cT[0] = MT * kT[2] - KT * kT[1], cT[1] = KT * kT[0] - lT * kT[2], cT[2] = lT * kT[1] - MT * kT[0]
      }(lT, jc, vc);
      const MT = 1 / 32;
      for (const [KT, OT] of [
          [0, jc],
          [4, vc]
        ]) {
        for (let cT = 0; cT < 3; cT++) TT[kT + KT + cT] = OT[cT] * MT;
        TT[kT + KT + 3] = -(OT[0] * cT[0] + OT[1] * cT[1] + OT[2] * cT[2]) * MT
      }
    }
    class hc {
      constructor() {
        this.words = new Uint32Array(Ac), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Ij(TT, kT) {
        this.parts = 0, this.refs = 0, this.view = TT, this.viewAt = kT;
        const cT = TT[kT + 1] * TT[kT + 6] - TT[kT + 2] * TT[kT + 5],
          lT = TT[kT + 2] * TT[kT + 4] - TT[kT] * TT[kT + 6],
          MT = TT[kT] * TT[kT + 5] - TT[kT + 1] * TT[kT + 4],
          KT = Math.hypot(cT, lT, MT) || 1;
        this.light[0] = cT / KT, this.light[1] = lT / KT, this.light[2] = MT / KT
      }
      add(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= yc || ! function(TT, kT, cT) {
            const lT = TT[kT],
              MT = TT[kT + 1],
              KT = TT[kT + 2],
              OT = TT[kT + 3],
              yT = TT[kT + 4],
              fT = TT[kT + 5],
              xT = TT[kT + 6],
              IT = TT[kT + 7],
              AT = TT[kT + 8],
              CT = TT[kT + 9],
              jT = TT[kT + 10],
              vT = TT[kT + 11],
              tT = TT[kT + 12],
              hT = TT[kT + 13],
              NT = TT[kT + 14],
              QT = TT[kT + 15],
              ST = lT * fT - MT * yT,
              DT = lT * xT - KT * yT,
              aT = lT * IT - OT * yT,
              FT = MT * xT - KT * fT,
              rT = MT * IT - OT * fT,
              PT = KT * IT - OT * xT,
              wT = AT * hT - CT * tT,
              mT = AT * NT - jT * tT,
              bT = AT * QT - vT * tT,
              zT = CT * NT - jT * hT,
              JT = CT * QT - vT * hT,
              oT = jT * QT - vT * NT,
              HT = ST * oT - DT * JT + aT * zT + FT * bT - rT * mT + PT * wT;
            if (!(Math.abs(HT) > 1e-12)) return !1;
            const eT = 1 / HT;
            return cT[0] = (fT * oT - xT * JT + IT * zT) * eT, cT[1] = (KT * JT - MT * oT - OT * zT) * eT, cT[2] = (hT * PT - NT * rT + QT * FT) * eT, cT[3] = (jT * rT - CT * PT - vT * FT) * eT, cT[4] = (xT * bT - yT * oT - IT * mT) * eT, cT[5] = (lT * oT - KT * bT + OT * mT) * eT, cT[6] = (NT * aT - tT * PT - QT * DT) * eT, cT[7] = (AT * PT - jT * aT + vT * DT) * eT, cT[8] = (yT * JT - fT * bT + IT * wT) * eT, cT[9] = (MT * bT - lT * JT - OT * wT) * eT, cT[10] = (tT * rT - hT * aT + QT * ST) * eT, cT[11] = (CT * aT - AT * rT - vT * ST) * eT, cT[12] = (fT * mT - yT * zT - xT * wT) * eT, cT[13] = (lT * zT - MT * mT + KT * wT) * eT, cT[14] = (hT * DT - tT * FT - NT * ST) * eT, cT[15] = (AT * FT - CT * DT + jT * ST) * eT, !0
          }(kT, cT, this.inverse)) return;
        const {
          view: lT,
          viewAt: MT
        } = this, KT = cT;
        let OT = 1 / 0,
          yT = 1 / 0,
          fT = -1 / 0,
          xT = -1 / 0,
          IT = -1 / 0;
        const [AT, CT, jT] = this.light;
        for (let aT = 0; aT < 8; aT++) {
          const cT = 1 & aT ? TT.hi[0] : TT.lo[0],
            vT = 2 & aT ? TT.hi[1] : TT.lo[1],
            tT = 4 & aT ? TT.hi[2] : TT.lo[2],
            hT = cT * kT[KT] + vT * kT[KT + 4] + tT * kT[KT + 8] + kT[KT + 12],
            NT = cT * kT[KT + 1] + vT * kT[KT + 5] + tT * kT[KT + 9] + kT[KT + 13],
            QT = cT * kT[KT + 2] + vT * kT[KT + 6] + tT * kT[KT + 10] + kT[KT + 14],
            ST = lT[MT] * hT + lT[MT + 1] * NT + lT[MT + 2] * QT + lT[MT + 3],
            DT = lT[MT + 4] * hT + lT[MT + 5] * NT + lT[MT + 6] * QT + lT[MT + 7];
          OT = Math.min(OT, ST), yT = Math.min(yT, DT), fT = Math.max(fT, ST), xT = Math.max(xT, DT), IT = Math.max(IT, AT * hT + CT * NT + jT * QT)
        }
        if (fT < -1 || xT < -1 || OT >= 1 || yT >= 1) return;
        const vT = this.parts++,
          tT = this.rects;
        tT[4 * vT] = Nc(OT), tT[4 * vT + 1] = Nc(yT), tT[4 * vT + 2] = Nc(fT), tT[4 * vT + 3] = Nc(xT);
        const hT = this.inverse,
          {
            cell: NT,
            dims: QT,
            lo: ST
          } = TT,
          DT = Ic + vT * fc;
        for (let aT = 0; aT < 3; aT++) this.floats[DT + 4 * aT] = hT[aT] / NT, this.floats[DT + 4 * aT + 1] = hT[4 + aT] / NT, this.floats[DT + 4 * aT + 2] = hT[8 + aT] / NT, this.floats[DT + 4 * aT + 3] = (hT[12 + aT] - ST[aT]) / NT;
        this.words[DT + 12] = TT.at, this.floats[DT + 13] = IT + .001 * (1 + Math.abs(IT)), this.words[DT + 14] = QT[0] | QT[1] << 8 | QT[2] << 16
      }
      finish() {
        const TT = Oc,
          {
            counts: kT,
            rects: cT,
            words: lT
          } = this;
        kT.fill(0);
        let MT = 0,
          KT = 0;
        for (; KT < this.parts; KT++) {
          const lT = 4 * KT,
            OT = (cT[lT + 2] - cT[lT] + 1) * (cT[lT + 3] - cT[lT + 1] + 1);
          if (MT + OT > 65536) break;
          MT += OT;
          for (let MT = cT[lT + 1]; MT <= cT[lT + 3]; MT++)
            for (let KT = cT[lT]; KT <= cT[lT + 2]; KT++) kT[MT * TT + KT]++
        }
        let OT = 0;
        for (let fT = 0; fT < 16384; fT++) lT[fT] = OT, OT += kT[fT], kT[fT] = lT[fT];
        lT[16384] = OT;
        for (let fT = 0; fT < KT; fT++) {
          const MT = 4 * fT;
          for (let KT = cT[MT + 1]; KT <= cT[MT + 3]; KT++)
            for (let OT = cT[MT]; OT <= cT[MT + 2]; OT++) lT[xc + kT[KT * TT + OT]++] = fT
        }
        const yT = this.floats;
        for (let fT = 0; fT < 16384; fT++) {
          const TT = xc + lT[fT],
            kT = TT + Math.min(lT[fT + 1] - lT[fT], 64);
          for (let cT = TT + 1; cT < kT; cT++) {
            const kT = lT[cT],
              MT = yT[81934 + kT * fc];
            let KT = cT - 1;
            for (; KT >= TT && yT[81934 + lT[KT] * fc] < MT; KT--) lT[KT + 1] = lT[KT];
            lT[KT + 1] = kT
          }
        }
        this.refs = MT
      }
    }

    function Nc(TT) {
      return Math.min(127, Math.max(0, Math.floor((.5 * TT + .5) * Oc)))
    }

    function Qc(TT, kT, cT, lT, MT) {
      for (let KT = 0; KT < 4; KT++)
        for (let OT = 0; OT < 4; OT++) MT[4 * KT + OT] = TT[kT + 4 * KT] * cT[lT + OT] + TT[kT + 4 * KT + 1] * cT[lT + 4 + OT] + TT[kT + 4 * KT + 2] * cT[lT + 8 + OT] + TT[kT + 4 * KT + 3] * cT[lT + 12 + OT]
    }

    function Sc(TT, kT, cT, lT, MT) {
      const KT = TT[0] - kT,
        OT = TT[1] - cT,
        yT = TT[2] - lT,
        fT = TT[3] - kT,
        xT = TT[4] - cT,
        IT = TT[5] - lT,
        AT = TT[6] - kT,
        CT = TT[7] - cT,
        jT = TT[8] - lT;
      if (Math.min(KT, fT, AT) > MT || Math.max(KT, fT, AT) < -MT) return !1;
      if (Math.min(OT, xT, CT) > MT || Math.max(OT, xT, CT) < -MT) return !1;
      if (Math.min(yT, IT, jT) > MT || Math.max(yT, IT, jT) < -MT) return !1;
      const vT = fT - KT,
        tT = xT - OT,
        hT = IT - yT,
        NT = AT - fT,
        QT = CT - xT,
        ST = jT - IT,
        DT = tT * ST - hT * QT,
        aT = hT * NT - vT * ST,
        FT = vT * QT - tT * NT;
      if (Math.abs(DT * KT + aT * OT + FT * yT) > MT * (Math.abs(DT) + Math.abs(aT) + Math.abs(FT))) return !1;
      const rT = [vT, tT, hT, NT, QT, ST, KT - AT, OT - CT, yT - jT];
      for (let PT = 0; PT < 3; PT++) {
        const TT = rT[3 * PT],
          kT = rT[3 * PT + 1],
          cT = rT[3 * PT + 2];
        for (let lT = 0; lT < 3; lT++) {
          const vT = 0 === lT ? 0 : 1 === lT ? cT : -kT,
            tT = 0 === lT ? -cT : 1 === lT ? 0 : TT,
            hT = 0 === lT ? kT : 1 === lT ? -TT : 0,
            NT = vT * KT + tT * OT + hT * yT,
            QT = vT * fT + tT * xT + hT * IT,
            ST = vT * AT + tT * CT + hT * jT,
            DT = MT * (Math.abs(vT) + Math.abs(tT) + Math.abs(hT));
          if (Math.min(NT, QT, ST) > DT || Math.max(NT, QT, ST) < -DT) return !1
        }
      }
      return !0
    }
    const Dc = new Float32Array(1);
    new Uint32Array(Dc.buffer);
    var ac = cT(38589);

    function Fc(TT) {
      const [kT, cT, lT] = ac.j;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${TT.group}) @binding(${TT.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${kT-1}, ${cT-1}, ${lT-1});\n}\n`
    }

    function rc(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [MT, KT, OT] = Hk, [yT, fT, xT] = Jk, IT = Math.log2(zk), AT = lT ? "var<private> bloxdSpCrossed: bool;\n" : "", CT = lT ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${TT.group}) @binding(${TT.rC}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${TT.group}) @binding(${TT.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${cT?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${AT}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${qk}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${sk}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${cT?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${Tc}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${MT}, ${KT}, ${OT});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${MT} * (s.y + ${KT} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${yT}, ${fT}, ${xT}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${IT}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Zk}u) {\n\t\treturn named && state == ${Ek}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${dk}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Rk}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${kT?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${kT?`\t\tif (exits && step > 0 && step % ${mc} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${IT}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${Gk}u || kind == ${Vk}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${Ek}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${dk}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${CT}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Pc = {
      group: 0,
      uniform: 0,
      rC: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function wc() {
      const TT = Pc;
      return `${Fc(TT)}${rc(TT,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${ac.d}>,\n}\n@group(${TT.group}) @binding(${TT.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${TT.group}) @binding(${TT.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${ac.g})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${ac.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${ac.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const mc = 2;
    const bc = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function zc(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const lT = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${kT.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        MT = "trace" === cT || "lit" === cT,
        KT = "maskEdge" === cT ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        OT = MT ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${kT.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${kT.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===cT?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${KT};\n`;
      return `${lT}${TT.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${MT?function(){const[TT,kT,cT]=ac.j;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${TT}.0, ${kT}.0, ${cT}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${OT}}\n`:""}${TT.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${kT.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${kT.renderOffset});\n}\n`:""}`
    }
    const Jc = "bloxdSpOwnTexture";

    function oc(TT) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${TT.texture}) - 1u)))`
    }
    const Hc = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${fk.g.map((TT=>{let[kT,cT]=TT;return`\tbloxdSpOut.${kT} = (bloxdSpWord & ${cT}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function ec(TT) {
      return `bloxdSpFlags(${TT})`
    }
    const Gc = `${mk.p}.eyePosition`;

    function Vc(TT, kT, cT, lT, MT) {
      const KT = TT.indexOf(kT);
      if (KT < 0 || TT.indexOf(kT, KT + 1) >= 0) throw new Error(`Lite's ${MT} program changed at the shader pack ${lT} hook: ${KT<0?"no":"more than one"} anchor (lite/${MT}ShaderPack.ts)`);
      return TT.slice(0, KT) + cT + TT.slice(KT + kT.length)
    }

    function Ec(TT) {
      return TT.sunShadow || TT.airShadow
    }

    function Zc(TT, kT) {
      return kT && Ec(TT)
    }
    const uc = {
      group: mk.h,
      ...mk.x
    };

    function Xc(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!Ec(TT)) return "";
      if (kT) {
        const kT = uc,
          MT = "trace" === cT || "lit" === cT;
        let KT = "";
        TT.sunShadow && (KT = MT ? `${rc(kT,!0,"lit"===cT)}${lT=kT,`@group(${lT.group}) @binding(${lT.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${lT.group}) @binding(${lT.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(TT, kT, cT) {
          const lT = `@group(${TT}) @binding(${kT}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return cT ? `${lT}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${bc}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((TT=>`\t{\n\t\tlet o = vec2i(${TT});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : lT
        }(kT.group, mk.A, "maskEdge" === cT));
        const OT = {
          shadowDirection: `${mk.p}.shadowDirection`,
          renderOffset: `${mk.p}.renderOffset`,
          eyePosition: `${mk.p}.eyePosition`
        };
        return `${Fc(kT)}${KT}${function(TT){const[kT,cT,lT]=ac.j;return`@group(${TT.group}) @binding(${TT.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${TT.group}) @binding(${TT.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${kT}.0, ${cT}.0, ${lT}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(kT)}${zc(TT,OT,cT)}`
      }
      var lT;
      return `${TT.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${TT.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function dc(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!kT) return "";
      const KT = (OT = "fragmentInputs.vPositionW", yT = TT.sunShadow ? {
        normal: cT,
        flags: lT
      } : null, `\n\tbloxdSpShadowPosition = ${OT};\n${yT?`\tbloxdSpShadowNormal = normalize(${yT.normal});\n\tbloxdSpShadowEmissive = (${yT.flags} & ${fk.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${yT.flags} & ${fk.h}u) != 0u;\n`:""}`);
      var OT, yT;
      return TT.sunShadow && ("mask" === MT || "maskEdge" === MT) ? `${KT}${fT="fragmentInputs.position",xT="maskEdge"===MT,`\n\tbloxdSpShadowPixel = vec2i(${fT}.xy);\n${xT?`\tbloxdSpShadowZ = ${fT}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${fT}.z), dpdy(${fT}.z));\n`:""}`}` : KT;
      var fT, xT
    }
    const Lc = "bloxdSpTextureRotation",
      Rc = "bloxdSpTextureLayers",
      gc = `@group(${mk.h}) @binding(${mk.D}) var<storage, read> ${Rc}: array<u32>;\n`;

    function Uc(TT) {
      return `\tvertexOutputs.vPackTexture = ${Rc}[min(u32(${TT}), arrayLength(&${Rc}) - 1u)];\n`
    }

    function Yc(TT) {
      return void 0 !== TT.uv
    }

    function Bc(TT) {
      if (!TT) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Yc(TT)) return function(TT) {
        const {
          texture: kT,
          cells: cT,
          layers: lT
        } = TT, MT = `textureDimensions(${kT}, bloxdSpLevel)`, KT = cT ? `max(vec2u(vec2f(${MT}) / ${cT}), vec2u(1u))` : MT, OT = cT ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${KT};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${cT}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${cT}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${kT}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${MT} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${KT};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${kT}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let yT;
        if (cT)
          if (1 === lT.length) yT = `\treturn bloxdSpOwnTexel(${lT[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const TT = lT.length - 1;
            yT = `\tvar bloxdSpColour = bloxdSpOwnTexel(${lT[TT]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let kT = TT - 1; kT >= 0; kT--) yT += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${lT[kT]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            yT += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else yT = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${TT.id?`var<private> ${Jc}: u32;\n`:""}${OT}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${oc(TT)};\n\treturn ${KT};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${TT.id?Jc:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${oc(TT)};\n${yT}}\n`
      }(TT);
      const kT = TT,
        cT = TT => {
          const cT = TT > 0 ? `bloxdSpLayer - ${kT.layers*TT}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${TT}, ${kT.sampler}, bloxdSpTurned, ${cT}, round(bloxdSpMipLevel));`
        };
      let lT = "";
      for (let KT = 0; KT < kT.count - 1; KT++) lT += `\tif (bloxdSpLayer < ${kT.layers*(KT+1)}u) {\n\t\t${cT(KT)}\n\t}\n`;
      const MT = kT.frame ? `${kT.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Lc}: u32;\n${gc}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Lc} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Lc} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Lc} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${MT}${lT}\t${cT(kT.count-1)}\n}\n`
    }

    function Wc(TT, kT, cT) {
      return !!TT.surface && "bloxdDefaultSurface" !== TT.surface && function(TT, kT) {
        return "liquid" === kT || !TT
      }(kT, cT)
    }

    function nc(TT, kT) {
      return TT.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${kT.vertexLocalPosition}, ${ec(kT.vertexFlags)});\n\t\tlet bloxdSpVertex = ${TT.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function pc(TT, kT, cT, lT, MT) {
      if (!TT.surface) return "";
      const KT = (TT, kT) => `\n\tlet bloxdSpTexelUV = ${TT};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${kT}) - 1u));`;
      let OT = "",
        yT = "0u, 0u, vec2f(0.0), 0.0";
      const fT = lT && Yc(lT) ? lT : null,
        xT = lT && !Yc(lT) ? lT : null;
      if (fT) {
        OT = `${fT.id?`\n\tlet bloxdSpTexture = ${fT.id};\n\t${Jc} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${fT.uv};${KT(function(TT,kT){var cT;return`${null!==(cT=TT.levelUv)&&void 0!==cT?cT:TT.cells?`${kT} / ${TT.cells}`:kT} * vec2f(textureDimensions(${TT.texture}))`}(fT,"bloxdSpUv"),fT.texture)}`, yT = (fT.id ? `${Jc}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else xT && (OT = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Lc} = bloxdSpTexture >> 16u;${KT(`fragmentInputs.vMainUV1 * ${(0,rk.qb)(xT.width)}`,"textureAtlas0")}`, yT = `bloxdSpTexture & 0xffffu, ${Lc}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const IT = MT.overlayColour,
        AT = IT ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        CT = "bloxdDefaultSurface" !== TT.surface || IT ? `\n\tbaseColor = vec4f(${AT}, baseColor.a);` : "",
        jT = Wc(TT, kT, cT) ? `\n\t${MT.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${OT}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${MT.alpha}, ${MT.enchantTier}, ${MT.enchantColour}, ${MT.enchantSpeed}, ${null!==IT&&void 0!==IT?IT:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${MT.normal}, ${MT.localPosition}, ${ec(MT.flags)}, ${yT});\n\tlet bloxdSpSurface = ${TT.surface}(bloxdSpSurfaceIn);${CT}${jT}\n`
    }
    const ic = "bloxdSpLightIn";

    function qc(TT, kT, cT, lT) {
      if (!TT.light) return "";
      const MT = kT ? `${rk.i}.rgb, ${rk.i}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${rk.g}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: KT,
          diffuse: OT,
          emissive: yT,
          ambient: fT,
          fogColour: xT,
          fogAlpha: IT,
          normal: AT
        } = lT;
      return `\tvar ${ic} = BloxdLightIn(vec3f(0.0), ${cT?KT:"0.0"}, ${OT}, ${yT}, ${fT}, ${MT}, ${xT}, ${IT}, fragmentInputs.vPositionW, ${AT}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${ic}.litColour = bloxdLitColour(bloxdSpSurface, ${ic});\n`
    }

    function sc(TT) {
      return TT.light ? `\n\t{\n\t\tlet bloxdSpLight = ${TT.light}(bloxdSpSurface, ${ic});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Tl = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      kl = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      cl = "\treturn color;\n}",
      ll = {
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
    const Ml = Object.freeze({});

    function Kl(TT) {
      var kT;
      return !(null === (kT = (0, bk.d)(TT)) || void 0 === kT || !kT.sceneDepth)
    }

    function Ol(TT) {
      const kT = (0, bk.d)(TT);
      return !!kT && Wc(kT.hooks, kT.strict, kT.program)
    }

    function yl(TT, kT, cT, lT) {
      return Vc(TT, kT, cT, lT, "terrain")
    }

    function fl(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const KT = function(TT) {
          return (0, bk.b)(TT.packVariant, TT.liquid ? "liquid" : "terrain")
        }(TT),
        {
          hooks: OT
        } = KT,
        yT = Zc(KT, lT),
        fT = "edge" === MT ? "maskEdge" : "plain" === MT ? "mask" : "trace",
        xT = nc(OT, ll);
      xT && (kT = yl(kT, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${xT}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const IT = "atlas" === TT.texture ? {
          count: TT.atlasCount,
          layers: TT.atlasLayers,
          width: TT.qB,
          sampler: "atlasSampler",
          frame: TT.animated ? cT : null
        } : null,
        AT = `${KT.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${dc(KT,yT,ll.normal,ll.flags,fT)}${pc(OT,KT.strict,KT.program,IT,ll)}`;
      AT && (kT = yl(kT, Tl, `${Tl.slice(0,-1)}${AT}`, "surface"));
      const CT = sc(OT);
      return CT && (kT = yl(kT, kl, `${qc(OT,TT.lighting,TT.dirLightCount>0,ll)}${kl}`, "light input"), kT = yl(kT, cl, `${CT.slice(1)}${cl}`, "light")), `${(0,mk.K)()}${KT.sceneDepth?`@group(${mk.h}) @binding(${mk.u}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Gc};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Xc(KT,yT,fT)}${Bc(IT)}${Hc}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${KT.code}${kT}`
    }
    const xl = FT.b.WGSL;

    function Il(TT) {
      return void 0 !== TT.packVariant
    }
    const Al = {
        AlT: 0,
        ClT: 4,
        jlT: 8,
        vlT: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Cl = Al.aoLevels + 4,
      jl = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      vl = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      tl = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      hl = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Nl = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      Ql = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      Sl = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      Dl = 0,
      al = 3,
      Fl = 4,
      rl = 5,
      Pl = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${Pk.c}, ${Pk.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${Pk.c}, ${Pk.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      wl = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((TT=>wk.d>>TT&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const ml = {
      UA: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: TT => `animDataPerTex[${TT}]`
    };

    function bl(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ml;
      return `\n\tlet atlasIdxIn = ${TT};\n\tlet animTick = ${cT.UA};\n\tlet animTickStride = ${cT.stride};\n\tlet numAnimTextures = ${cT.count};\n\t${(0,rT.f)(FT.b.WGSL,cT.perTexture)}\n\t${kT}animLayer;\n`
    }

    function zl(TT) {
      const kT = (kT, cT) => {
        const lT = kT > 0 ? `fragmentInputs.texAtlasIndex - ${TT.atlasLayers.toFixed(1)} * ${kT.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${cT?"textureSampleLevel":"textureSample"}(textureAtlas${kT}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${lT}))${cT?", atlasLod":""})`
      };
      if (1 === TT.atlasCount) return `baseColor = ${kT(0,!1)};`;
      let cT = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,rk.qb)(TT.qB)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let lT = 0; lT < TT.atlasCount; lT++) {
        const MT = TT.atlasLayers * (lT + 1) - .5;
        cT += `${lT>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,rk.qb)(MT)}) {\n\t\tbaseColor = ${kT(lT,!0)};\n\t}`
      }
      return cT
    }

    function Jl(TT) {
      return `terrain-${TT.texture}${"atlas"===TT.texture?TT.atlasCount:""}${TT.animated?"-anim":""}${TT.alphaTest?"-test":""}${TT.lighting?"-lit":""}-dir${TT.dirLightCount}${TT.packed?"-packed":""}${Il(TT)?`-sp${TT.packVariant}`:""}${TT.liquid?"-liquid":""}${TT.resting?"-rest":""}`
    }

    function ol(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const lT = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const cT = "none" !== TT.texture,
          lT = "atlas" === TT.texture,
          MT = TT.dirLightCount > 0,
          KT = Il(TT);
        if (TT.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${TT.dirLightCount}`);
        let OT = 1,
          yT = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (lT) {
          TT.animated && (yT += `@group(2) @binding(${OT++}) var<storage, read> animDataPerTex: array<f32>;\n`), yT += `@group(2) @binding(${OT++}) var atlasSampler: sampler;\n`;
          for (let kT = 0; kT < TT.atlasCount; kT++) yT += `@group(2) @binding(${OT++}) var textureAtlas${kT}: texture_2d_array<f32>;\n`
        } else "single" === TT.texture && (yT += `@group(2) @binding(${OT++}) var diffuseSamplerSampler: sampler;\n`, yT += `@group(2) @binding(${OT++}) var diffuseSampler: texture_2d<f32>;\n`);
        const fT = function(TT) {
            const kT = Sl,
              cT = "none" !== TT.texture,
              lT = "atlas" === TT.texture,
              MT = Il(TT);
            return TT.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${cT?"uv: vec2f,":""}\n\t${lT?"texAtlasIndices: f32,":""}\n\t${TT.lighting?"aPackedLightLevels: f32,":""}\n\t${MT?"blockFlagWords: vec2u,":""}\n}\n${Pl}\n${wl}\n${"single"===TT.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${cT?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===TT.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${lT?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${TT.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${MT?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${kT.position}) position: vec3f,\n\t@location(${kT.normal}) normal: vec4f,\n\t@location(${kT.color}) color: vec4f,\n\t${cT?`@location(${kT.uv}) uv: vec2f,`:""}\n\t${TT.lighting?`@location(${kT.packedLight}) aPackedLightLevels: f32,`:""}\n\t${MT?`@location(${kT.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(TT),
          xT = `\n${hl}\n${vl}\n${tl}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${yT}\n${nT}\n${fT.declarations}\nstruct Varyings {\n\t${"none"===kT?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${TT.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${MT?"@location(5) vTerrainLambert: f32,":""}\n\t${cT?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${lT?"@location(7) texAtlasIndex: f32,":""}\n\t${TT.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${KT?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${KT&&lT?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${TT.resting?"":(0,rk.n)(xl)}\n${Ql}\n\n@vertex\nfn mainVertex(${fT.parameter}) -> Varyings {\n\t${fT.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${KT?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${fk.e.placed}u;`:""}\n\t${KT&&lT?Uc("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${TT.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${cT?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${lT?function(TT){return TT?bl("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(TT.animated):""}\n\t${"single"===TT.texture&&TT.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,rk.W)(xl)}\n\t${(0,rk.B)(xl,TT.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${TT.resting?"":Nl}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${lT?zl(TT):""}\n\t${"single"===TT.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${cT?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${TT.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${MT?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${WT}));\n\t${Il(TT)?(0,rk.kb)(FT.b.WGSL):(0,rk.L)(xl)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          IT = new Set;
        TT.lighting && IT.add("BLOXD_LIGHTING");
        MT && IT.add("BLOXD_TERRAIN_DIRECTIONAL");
        return Dk(xT, new Map([...IT].map((TT => [TT, !0]))))
      }(TT, cT);
      if (!Il(TT)) return lT;
      const MT = fl(TT, lT, bl, kT, cT);
      return "none" === cT ? MT : `${MT}${function(TT){const kT="none"!==TT.texture&&TT.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${TT.resting?"":Nl}\n\t${TT.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${kT&&"atlas"===TT.texture?zl(TT):""}\n\t${kT&&"single"===TT.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${kT?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${fk.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(TT)}`
    }
    const Hl = new Map([
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

    function el(TT, kT) {
      const cT = new Map;
      let lT = 0;
      const MT = [],
        KT = [],
        OT = [];
      for (const xT of kT) {
        var yT, fT;
        const kT = null !== (yT = xT.type.trim().split(/\s+/).pop()) && void 0 !== yT ? yT : xT.type,
          IT = Hl.get(kT);
        if (!IT) throw new Error(`Lite: no uniform layout for ${xT.name}: ${xT.type}`);
        const AT = null !== (fT = xT.arraySize) && void 0 !== fT ? fT : 0,
          CT = AT ? 4 : IT.align;
        lT = Math.ceil(lT / CT) * CT;
        const jT = AT ? 4 * Math.ceil(IT.floats / 4) : IT.floats;
        if (cT.set(xT.name, {
            offset: lT,
            floats: IT.floats,
            arraySize: AT,
            stride: jT
          }), AT && IT.floats <= 2) {
          const kT = `${TT}_${OT.length}_strided`;
          KT.push(`struct ${kT} {\n\t@size(16) el: ${IT.wgsl},\n}`), OT.push(xT.name), MT.push(`\t@align(16) ${xT.name}: array<${kT}, ${AT}>,`)
        } else AT ? MT.push(`\t@align(16) ${xT.name}: array<${IT.wgsl}, ${AT}>,`) : MT.push(`\t${xT.name}: ${IT.wgsl},`);
        lT += AT ? jT * AT : IT.floats
      }
      return {
        slots: cT,
        floats: Math.max(4, 4 * Math.ceil(lT / 4)),
        wgsl: `${KT.join("\n")}\nstruct ${TT} {\n${MT.join("\n")}\n}\n`,
        stridedArrays: OT
      }
    }
    const Gl = [{
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
      Vl = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      El = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function Zl(TT, kT) {
      return `#if defined(${TT}) && ${TT}DIRECTUV == 0\nvarying v${kT}UV: vec2f;\n#endif`
    }

    function ul(TT, kT, cT) {
      return `#if defined(${TT}) && ${TT}DIRECTUV == 0\nif (uniforms.v${kT}Infos.x==0.)\n{vertexOutputs.v${kT}UV= (uniforms.${cT}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${kT}UV= (uniforms.${cT}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Xl(TT, kT, cT) {
      return `#ifdef ${TT}\n#if ${TT}DIRECTUV == 1\n#define v${kT}UV vMainUV1\n#elif ${TT}DIRECTUV == 2\n#define v${kT}UV vMainUV2\n#else\nvarying v${kT}UV: vec2f;\n#endif\nvar ${cT}SamplerSampler: sampler;\nvar ${cT}Sampler: texture_2d<f32>;\n#endif`
    }
    const dl = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      Ll = 256,
      Rl = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      gl = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      Ul = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      Yl = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      Bl = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      Wl = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      nl = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      pl = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${gl}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${Zl("OPACITY","Opacity")}\n${Zl("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${nl}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${Ul}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${ul("OPACITY","Opacity","opacity")}\n${ul("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Yl}\n#define CUSTOM_VERTEX_MAIN_END\n${Bl}\n}\n`;
    const il = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Xl("OPACITY","Opacity","opacity")}\n${Xl("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${nl}\n${Wl}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((TT,kT)=>function(TT){const kT=`
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
      kT
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      TT
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      kT
    }.vLightData, diffuse$ {
      TT
    }.rgb, $ {
      kT
    }.vLightSpecular.rgb, diffuse$ {
      TT
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(kT))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, ql = /^([gimus]+)!/, sl = new Set;

    function TM(TT) {
      sl.has(TT) || (sl.add(TT), console.warn(`Lite: no place for plugin code at ${TT} in the standard shader: it is left out`))
    }

    function kM(TT, kT) {
      let cT = TT;
      const lT = new Map;
      for (const [KT, OT] of kT) {
        var MT;
        lT.set(KT, `${null!==(MT=lT.get(KT))&&void 0!==MT?MT:""}${OT}\n`)
      }
      for (const [KT, OT] of lT) {
        if (!KT.startsWith("!")) {
          const TT = `#define ${KT}`;
          if (!cT.includes(TT)) {
            TM(KT);
            continue
          }
          cT = cT.replace(TT, (() => `\n${OT}\n${TT}`));
          continue
        }
        let TT = KT.substring(1),
          kT = "g";
        if (TT.startsWith("!")) kT = "", TT = TT.substring(1);
        else {
          const cT = ql.exec(TT);
          cT && (kT = cT[1], TT = TT.substring(kT.length + 1))
        }
        const lT = new RegExp(TT, kT.includes("g") ? kT : `${kT}g`);
        let MT = lT.exec(cT);
        for (MT || TM(KT); MT;) {
          const TT = MT,
            kT = OT.replace(/\$(\d+)/g, ((kT, cT) => Number(cT) < TT.length ? TT[Number(cT)] : ""));
          cT = cT.substring(0, TT.index) + kT + cT.substring(TT.index + TT[0].length), lT.lastIndex = TT.index + kT.length, MT = lT.exec(cT)
        }
      }
      return cT
    }
    const cM = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      lM = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      MM = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function KM(TT) {
      const kT = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let cT = TT.replace(cM, ((TT, cT, lT, MT, KT, OT) => ("attribute" === cT ? kT.attributes.push({
        name: KT,
        type: OT
      }) : void 0 === cT ? kT.varyings.push({
        name: KT,
        type: OT,
        interpolation: yM(OT, lT, MT)
      }) : kT.uniforms.push({
        name: KT,
        type: OM(OT)
      }), "")));
      return cT = cT.replace(lM, ((TT, cT) => (kT.samplers.add(cT), ""))), cT = cT.replace(MM, ((TT, cT, lT) => (kT.textures.push({
        name: cT,
        type: lT
      }), ""))), kT.body = cT, kT
    }

    function OM(TT) {
      const kT = TT.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        cT = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(kT);
      if (!cT) throw new Error(`Lite: unsupported uniform type ${TT}`);
      return cT
    }

    function yM(TT, kT, cT) {
      return void 0 === kT && void 0 === cT ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(TT.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === kT ? "@interpolate(flat) " : `@interpolate(${null!==kT&&void 0!==kT?kT:"perspective"}, ${null!==cT&&void 0!==cT?cT:"center"}) `
    }

    function fM(TT) {
      return CM({
        defines: TT.defines,
        vertex: kM(pl, TT.vertexCode),
        fragment: kM(il, TT.fragmentCode),
        members: [...Gl, ...TT.defines.has("OPACITY") ? Vl : [], ...TT.defines.has("EMISSIVE") ? El : [], ...TT.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function xM(TT) {
      const kT = TT.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (kT === TT) throw new Error("Lite: fragment main has no return");
      return kT
    }
    const IM = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${gl}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${Ul}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Yl}\n${Bl}\n}\n`,
      AM = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${Wl}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function CM(TT) {
      const kT = TT.defines,
        cT = KM(Dk(TT.vertex, kT)),
        lT = KM(Dk(TT.fragment, kT)),
        MT = new Map;
      for (const ST of [...cT.varyings, ...lT.varyings]) MT.has(ST.name) || MT.set(ST.name, ST);
      const KT = [...MT.values()].map(((TT, kT) => `\t@location(${kT}) ${TT.interpolation}${TT.name}: ${TT.type},`)),
        OT = [...TT.members];
      for (const ST of [...cT.uniforms, ...lT.uniforms]) OT.some((TT => TT.name === ST.name)) || OT.push(ST);
      const yT = el(TT.structName, OT),
        fT = [],
        xT = [];
      let IT = 1;
      const AT = new Set;
      for (const ST of [...cT.textures, ...lT.textures]) {
        if (AT.has(ST.name)) continue;
        AT.add(ST.name);
        const TT = `${ST.name}Sampler`,
          kT = IT++,
          cT = IT++,
          lT = ST.type.startsWith("texture_2d_array") ? "2d-array" : ST.type.startsWith("texture_cube") ? "cube" : "2d";
        fT.push({
          name: ST.name,
          binding: kT,
          samplerBinding: cT,
          dimension: lT
        }), xT.push(`@group(2) @binding(${kT}) var ${ST.name}: ${ST.type};`), xT.push(`@group(2) @binding(${cT}) var ${TT}: sampler;`)
      }
      for (const ST of [...cT.samplers, ...lT.samplers])
        if (!AT.has(ST.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${ST} has no texture`);
      const CT = [hl, Rl, yT.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${TT.structName};`, ...xT].join("\n"),
        jT = cT.attributes,
        vT = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...cT.attributes.map(((TT, kT) => `\t@location(${kT}) ${TT.name}: ${TT.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        tT = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...KT, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        hT = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...lT.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...KT, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", nT, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${WT}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        NT = TT => {
          for (const kT of yT.stridedArrays) TT = TT.replace(new RegExp(`\\b${kT}\\s*\\[(.*?)\\]`, "g"), `${kT}[$1].el`);
          return TT
        };
      return {
        vertex: `${CT}\n${vT}\n${tT}\n${NT(cT.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${CT}\n${hT}\n${xM((QT=NT(lT.body),QT.includes("fragmentInputs.position")?QT.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):QT))}`,
        attributes: jT,
        material: yT,
        textures: fT
      };
      var QT
    }
    const jM = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      vM = TT => ({
        name: TT,
        type: "vec3"
      }),
      tM = TT => ({
        name: TT,
        type: "float"
      }),
      hM = el("EarthSkyUniforms", [vM("viewFrom"), tM("exposureScale"), vM("zenithOffset"), tM("fogOn"), vM("up"), tM("ditherOn"), vM("sun"), tM("turbidity"), vM("tint"), tM("rayleigh"), vM("sunDir"), tM("mieStrength"), vM("inScatterR"), tM("mieFocus"), vM("inScatterM"), tM("sunE"), vM("extinctionBeta"), tM("sunsetMix"), tM("mieScale"), tM("mieBase"), tM("mieSlope"), tM("sunDiscE"), tM("exposure")]),
      NM = `${hl}\n${Rl}\n${hM.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      QM = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${jM.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      SM = `\n${nT}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(hk).map((TT=>{let[kT,cT]=TT;return`const TONE_${kT}: f32 = ${cT};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${Nk};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${WT}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var DM = cT(36885);
    const aM = new DM.Fv,
      FM = new DM.Fv,
      rM = new DM.Quaternion,
      PM = new Float64Array(3),
      wM = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      mM = new Float64Array(16);

    function bM(TT, kT, cT) {
      const lT = cT.worldMatrix;
      var MT;
      TT.updateFloat3("viewFrom", lT[12], lT[13], lT[14]), TT.updateFloatsFrom("zenithOffset", kT.cameraOffset, 0, 3), TT.updateFloatsFrom("up", kT.up, 0, 3), kT.luminance > 0 && (TT.updateFloat("exposure", kT.luminance), TT.updateFloat("exposureScale", (MT = kT.luminance, Math.log2(2 / Math.pow(MT, 4))))), TT.updateFloat("turbidity", kT.turbidity), TT.updateFloat("rayleigh", kT.rayleigh), TT.updateFloat("mieStrength", kT.mieCoefficient), TT.updateFloat("mieFocus", kT.mieDirectionalG), TT.updateFloatsFrom("tint", kT.tint, 0, 3), TT.updateFloat("fogOn", kT.fog && cT.fogEnabled && 0 !== cT.fogMode ? 1 : 0), TT.updateFloat("ditherOn", kT.dithering ? 1 : 0);
      const KT = kT.sunPosition;
      if (aM.set(KT[0], KT[1], KT[2]), !kT.useSunPosition) {
        const TT = Math.PI * (kT.inclination - .5),
          cT = 2 * Math.PI * (kT.azimuth - .5);
        aM.set(kT.distance * Math.cos(cT) * Math.cos(TT), kT.distance * Math.sin(-TT), kT.distance * Math.sin(cT) * Math.cos(TT)), DM.Quaternion.FromUnitVectorsToRef(DM.Fv.UpReadOnly, FM.set(kT.up[0], kT.up[1], kT.up[2]), rM), aM.rotateByQuaternionToRef(rM, aM)
      }
      TT.updateVector3("sun", aM), PM[0] = aM.x, PM[1] = aM.y, PM[2] = aM.z;
      const OT = tk(kT, PM, wM);
      TT.updateFloatsFrom("sunDir", OT.sunDir, 0, 3), TT.updateFloat("sunE", OT.sunE), TT.updateFloatsFrom("inScatterR", OT.inScatterR, 0, 3), TT.updateFloatsFrom("inScatterM", OT.inScatterM, 0, 3), TT.updateFloatsFrom("extinctionBeta", OT.extinctionBeta, 0, 3), TT.updateFloat("sunsetMix", OT.sunsetMix), TT.updateFloat("sunDiscE", OT.sunDiscE), TT.updateFloat("mieScale", OT.mieScale), TT.updateFloat("mieBase", OT.mieBase), TT.updateFloat("mieSlope", OT.mieSlope)
    }

    function zM(TT, kT) {
      const cT = mM;
      cT[0] = kT.far, cT[5] = kT.far, cT[10] = kT.far, cT[15] = 1;
      const lT = TT.infiniteDistance;
      for (let MT = 0; MT < 3; MT++) cT[12 + MT] = TT.position[MT] + (lT ? kT.worldMatrix[12 + MT] : 0);
      return mM
    }
    var JM = cT(38553);

    function oM(TT) {
      return Math.max(4, 4 * Math.ceil(TT / 4))
    }

    function HM(TT, kT, cT, lT) {
      const MT = TT.createBuffer({
        label: lT,
        size: oM(kT.byteLength),
        usage: cT,
        mappedAtCreation: !0
      });
      return new Uint8Array(MT.getMappedRange(), 0, kT.byteLength).set(new Uint8Array(kT.buffer, kT.byteOffset, kT.byteLength)), MT.unmap(), MT
    }

    function eM(TT, kT) {
      return Math.floor(Math.log2(Math.max(TT, kT))) + 1
    }

    function GM(TT, kT, cT, lT, MT, KT) {
      const OT = TT.createTexture({
          label: KT,
          size: {
            width: cT,
            height: lT,
            depthOrArrayLayers: MT
          },
          format: "rgba8unorm",
          mipLevelCount: eM(cT, lT),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        yT = (kT, cT, lT, KT) => {
          TT.queue.writeTexture({
            texture: OT,
            mipLevel: cT
          }, kT, {
            bytesPerRow: 4 * lT,
            rowsPerImage: KT
          }, {
            width: lT,
            height: KT,
            depthOrArrayLayers: MT
          })
        };
      yT(kT, 0, cT, lT);
      let fT = 1;
      for (const xT of function*(TT, kT, cT, lT) {
          let MT = TT,
            KT = kT,
            OT = cT;
          for (; KT > 1 || OT > 1;) {
            const TT = Math.max(1, KT >> 1),
              kT = Math.max(1, OT >> 1),
              cT = new Uint8Array(TT * kT * lT * 4),
              yT = 4 * KT;
            let fT = 0;
            for (let xT = 0; xT < lT; xT++) {
              const lT = xT * yT * OT;
              for (let xT = 0; xT < kT; xT++) {
                const kT = lT + Math.min(2 * xT, OT - 1) * yT,
                  IT = lT + Math.min(2 * xT + 1, OT - 1) * yT;
                for (let lT = 0; lT < TT; lT++) {
                  const TT = 4 * Math.min(2 * lT, KT - 1),
                    OT = 4 * Math.min(2 * lT + 1, KT - 1);
                  for (let lT = 0; lT < 4; lT++) cT[fT++] = MT[kT + TT + lT] + MT[kT + OT + lT] + MT[IT + TT + lT] + MT[IT + OT + lT] + 2 >> 2
                }
              }
            }
            yield {
              data: cT,
              width: TT,
              height: kT
            }, MT = cT, KT = TT, OT = kT
          }
        }(kT, cT, lT, MT)) yT(xT.data, fT++, xT.width, xT.height);
      return OT
    }
    const VM = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function EM(TT) {
      if (TT.startsWith("data:")) {
        const kT = TT.search(/[;,]/);
        return `data:${kT>5?TT.slice(5,kT):""} URL of ${TT.length} characters`
      }
      return TT.length > 80 ? `${TT.slice(0,80)}...` : TT
    }
    async function ZM(TT) {
      const kT = await fetch(TT);
      if (!kT.ok) throw new Error(`${EM(TT)}: ${kT.status} ${kT.statusText}`);
      return createImageBitmap(await kT.blob(), VM)
    }
    async function uM(TT) {
      const kT = await ZM(TT),
        cT = new OffscreenCanvas(kT.width, kT.height),
        lT = cT.getContext("2d", {
          willReadFrequently: !0
        });
      if (!lT) throw new Error("No 2D context to decode an image");
      lT.drawImage(kT, 0, 0);
      const {
        data: MT
      } = lT.getImageData(0, 0, kT.width, kT.height);
      return kT.close(), {
        pixels: new Uint8Array(MT.buffer, MT.byteOffset, MT.byteLength),
        width: cT.width,
        height: cT.height
      }
    }
    const XM = new WeakMap;

    function dM(TT, kT, cT, lT) {
      var MT;
      const KT = null !== (MT = XM.get(TT)) && void 0 !== MT ? MT : new Map;
      XM.set(TT, KT);
      let OT = KT.get(kT);
      return OT || (OT = (async MT => {
        const KT = null !== (MT = function(TT, kT) {
          const cT = TT ? new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength) : null;
          return null !== cT && void 0 !== cT && cT.byteLength && kT && cT.byteLength % (kT * kT * 4) === 0 ? {
            pixels: cT,
            layerWidth: kT,
            layers: cT.byteLength / (kT * kT * 4)
          } : null
        }(cT, lT)) && void 0 !== MT ? MT : await async function(TT) {
          const {
            pixels: kT,
            width: cT
          } = await uM(TT);
          return {
            pixels: kT,
            layerWidth: cT,
            layers: kT.byteLength / (cT * cT * 4)
          }
        }(kT), {
          layerWidth: OT,
          layers: yT
        } = KT;
        return {
          texture: GM(TT, KT.pixels, OT, OT, yT, `atlas-${kT}`),
          layerWidth: OT,
          layers: yT
        }
      })(), KT.set(kT, OT), OT.catch((() => {
        KT.delete(kT)
      }))), OT
    }
    const LM = new Map([
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
      RM = new Map([
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

    function gM(TT) {
      for (const kT of (0, JM.i)(TT))
        if (!RM.has((0, JM.f)(kT))) return !1;
      return !0
    }

    function UM(TT) {
      const kT = RM.get(TT);
      if (!kT) return null;
      const [cT, lT, MT] = kT;
      return {
        srcFactor: LM.get(cT),
        dstFactor: LM.get(lT),
        operation: MT
      }
    }
    let YM = null;

    function BM(TT) {
      YM = TT
    }

    function WM(TT, kT, cT) {
      var lT;
      null === (lT = YM) || void 0 === lT || lT(TT, kT, cT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class nM {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(TT, kT, cT, lT, MT) {
        cT !== this.pipeline && (TT.setPipeline(cT), this.pipeline = cT), TT.setBindGroup(1, lT, [MT]);
        const KT = kT.material.bindGroup;
        KT !== this.materialGroup && (TT.setBindGroup(2, KT), this.materialGroup = KT);
        const OT = kT.program.packGroup;
        OT && OT !== this.packGroup && (TT.setBindGroup(mk.h, OT), this.packGroup = OT);
        const {
          vertexBuffers: yT,
          vertexOffsets: fT
        } = this;
        for (let xT = 0; xT < kT.vertexBuffers.length; xT++) yT[xT] === kT.vertexBuffers[xT] && fT[xT] === kT.vertexOffsets[xT] || (TT.setVertexBuffer(xT, kT.vertexBuffers[xT], kT.vertexOffsets[xT]), yT[xT] = kT.vertexBuffers[xT], fT[xT] = kT.vertexOffsets[xT]);
        kT.indexBuffer && kT.indexBuffer !== this.indexBuffer && (TT.setIndexBuffer(kT.indexBuffer, kT.indexFormat), this.indexBuffer = kT.indexBuffer)
      }
    }
    class pM {
      constructor(TT, kT, cT, lT) {
        this.modelMeshes = TT, this.Ws = kT, this.maker = cT, this.warnOnce = lT, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(TT) {
        this.collectGroup(TT, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(TT, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(TT, 1, this.frontDraws, this.frontDraws, !0);
        for (const kT of this.modelMeshes.groupIds())(kT < -1 || kT > 1) && this.warnOnce(`group:${kT}`, `rendering group ${kT} is not drawn`);
        for (const kT of this.Ws.groupIds())(kT < -1 || kT > 1) && this.warnOnce(`group:${kT}`, `rendering group ${kT} is not drawn`);
        this.opaqueDraws.sort(iM), this.transparentDraws.sort(qM)
      }
      collectGroup(TT, kT, cT, lT, MT) {
        const KT = this.modelMeshes.group(kT),
          OT = this.Ws.group(kT),
          yT = 0 === kT ? null === OT || void 0 === OT ? void 0 : OT.opaque : void 0;
        this.collectList(TT, null === KT || void 0 === KT ? void 0 : KT.opaque, yT || null === OT || void 0 === OT ? void 0 : OT.opaque, kT, !1, cT, MT), yT && (this.Ws.drawn += this.maker.bundleDraws(TT, yT, kT)), this.collectList(TT, null === KT || void 0 === KT ? void 0 : KT.alphaTest, void 0, kT, !1, cT, MT), this.collectList(TT, null === KT || void 0 === KT ? void 0 : KT.transparent, null === OT || void 0 === OT ? void 0 : OT.transparent, kT, !0, lT, MT)
      }
      collectList(TT, kT, cT, lT, MT, KT, OT) {
        var yT;
        const fT = KT.length;
        kT && this.maker.pushDraws(TT, kT.units, kT.units.length, lT, MT, KT, kT.rows), cT && (this.Ws.drawn += this.maker.pushDraws(TT, cT, cT.length, lT, MT, KT));
        const xT = MT ? null === (yT = this.modelMeshes.group(lT)) || void 0 === yT ? void 0 : yT.text : void 0;
        xT && this.maker.pushDraws(TT, xT.units, xT.units.length, lT, !0, KT, xT.rows), OT && sM(KT, fT)
      }
    }

    function iM(TT, kT) {
      return TT.program.id - kT.program.id || TT.material.owner.uniqueId - kT.material.owner.uniqueId
    }

    function qM(TT, kT) {
      return TT.material.owner.uniqueId - kT.material.owner.uniqueId
    }

    function sM(TT, kT) {
      for (let cT = kT + 1; cT < TT.length; cT++) {
        const lT = TT[cT];
        let MT = cT - 1;
        for (; MT >= kT && qM(TT[MT], lT) > 0; MT--) TT[MT + 1] = TT[MT];
        TT[MT + 1] = lT
      }
    }
    const TK = {};

    function kK(TT) {
      return TT.hasThinInstances ? "thin" : TT.tlT || TT._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function cK(TT, kT, cT) {
      return TT ? (cT._needUVs = !0, TT.optimizeUVAllocation && (0, bT.K)(TT.matrix) ? (cT[`${kT}DIRECTUV`] = TT.uvSet + 1, cT[`MAINUV${TT.uvSet+1}`] = !0) : cT[`${kT}DIRECTUV`] = 0, !0) : (cT[`${kT}DIRECTUV`] = 0, !1)
    }

    function lK(TT) {
      const kT = new Map;
      for (const cT in TT) {
        if (95 === cT.charCodeAt(0)) continue;
        const lT = TT[cT],
          MT = typeof lT;
        "number" === MT || "string" === MT ? kT.set(cT, String(lT)) : lT && "function" !== MT && kT.set(cT, !0)
      }
      return kT
    }

    function MK(TT) {
      const kT = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: cT
        }
        of TT.features)
        for (const TT in cT) kT[TT] = cT[TT];
      return kT
    }

    function KK(TT) {
      const kT = TT.parts.geometry;
      return null !== kT && void 0 !== kT && kT.live ? kT : null
    }

    function OK(TT) {
      var kT;
      return null !== (kT = KK(TT)) && void 0 !== kT ? kT : TK
    }
    class yK {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = TT, this.warnOnce = kT, this.programWithModel = cT, this.packFailed = lT, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(TT, kT, cT, lT, MT) {
        const KT = kT.owner;
        let OT = this.drawStates.get(kT);
        if (!OT) {
          const TT = kT.parts.materials[kT.range];
          if (!TT) return this.warnOnce("model", `${cT.name} on ${KT.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          OT = {
            defines: MK(TT),
            model: TT,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: MT,
            groupId: lT,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(kT, OT)
        }
        if (this.programCurrent(OT, kT, MT, lT)) return OT.program;
        const {
          model: yT
        } = OT, fT = OK(kT), xT = this.instanceLayout(KT, MT), IT = this.definesBits(KT);
        if (!this.prepareModelDefines(TT, KT, yT, OT.defines, lT, MT)) return null;
        OT.instancing = MT, OT.groupId = lT, OT.modelVersion = yT.version, OT.geometry = fT, OT.instanceLayout = xT, OT.definesBits = IT;
        const AT = function(TT) {
          let kT = "";
          for (const [cT, lT] of TT) kT += !0 === lT ? `${cT};` : `${cT}=${lT};`;
          return kT
        }(lK(OT.defines));
        return AT === OT.definesKey && OT.packVariant === this.modelPackVariant && OT.program && !this.packFailed(OT.program) || (OT.definesKey = AT, OT.packVariant = this.modelPackVariant, OT.program = this.programWithModel(yT, OT.defines, AT)), OT.program
      }
      programCurrent(TT, kT, cT, lT) {
        return null !== TT.program && !this.packFailed(TT.program) && TT.instancing === cT && TT.groupId === lT && this.definesHold(TT, kT, cT)
      }
      definesHold(TT, kT, cT) {
        return TT.modelVersion === TT.model.version && TT.geometry === OK(kT) && TT.instanceLayout === this.instanceLayout(kT.owner, cT) && TT.definesBits === this.definesBits(kT.owner) && TT.packVariant === this.modelPackVariant
      }
      modelPackKind(TT) {
        var kT;
        return 0 === this.modelPackVariant ? null : null !== (kT = (0, wT.x)(TT, PT.h.name)) && void 0 !== kT && kT.active ? "placed" : TT.item ? "item" : TT.lifeform ? "lifeform" : TT.box ? "box" : null
      }
      instanceLayout(TT, kT) {
        var cT, lT, MT;
        return "thin" === kT ? null !== (MT = this.resources.Aq.get(TT)) && void 0 !== MT ? MT : null : "instanced" === kT && null !== (cT = null === (lT = TT._userInstancedBuffersStorage) || void 0 === lT ? void 0 : lT.interleavedKinds) && void 0 !== cT ? cT : null
      }
      definesBits(TT) {
        const kT = this.view;
        return (TT.visibility < 1 ? 1 : 0) | (TT.hasVertexAlpha ? 2 : 0) | (TT.applyFog ? 4 : 0) | (TT.useVertexColors ? 8 : 0) | (TT.nonUniformScaling ? 16 : 0) | (kT.fogEnabled && 0 !== kT.fogMode ? 32 : 0) | (kT.lightsEnabled ? 64 : 0) | kT.lightCount << 7
      }
      prepareLightDefines(TT, kT, cT) {
        let lT = 0;
        if (this.view.lightsEnabled && !kT) {
          const kT = Math.min(cT, 4);
          for (; lT < this.view.lightCount && (TT[`LIGHT${lT}`] = !0, TT[`LITE_LIGHT${lT}_SLOT`] = lT, lT++, TT._needNormals = !0, lT !== kT););
        }
        for (let MT = lT; MT < 4; MT++) TT[`LIGHT${MT}`] = !1, TT[`LITE_LIGHT${MT}_SLOT`] = void 0
      }
      prepareModelDefines(TT, kT, cT, lT, MT, KT) {
        const {
          features: OT
        } = cT;
        lT._needNormals = !1, lT._needUVs = !1;
        const yT = this.view;
        this.prepareLightDefines(lT, cT.disableLighting, cT.maxSimultaneousLights), lT.MAINUV1 = !1, lT.MAINUV2 = !1;
        const fT = cT.diffuseTexture;
        fT ? (lT._needUVs = !0, lT.DIFFUSE = !0, fT.optimizeUVAllocation && (0, bT.K)(fT.matrix) ? (lT.DIFFUSEDIRECTUV = fT.uvSet + 1, lT[`MAINUV${fT.uvSet+1}`] = !0) : lT.DIFFUSEDIRECTUV = 0, fT.uvSet > 1 && this.warnOnce(`uvset:${cT.name}`, `${cT.name} samples UV set ${fT.uvSet+1}, which is not supported`)) : (lT.DIFFUSE = !1, lT.DIFFUSEDIRECTUV = 0);
        const xT = cT.opacityTexture,
          IT = cT.emissiveTexture;
        lT.OPACITY = cK(xT, "OPACITY", lT), lT.OPACITYRGB = null !== xT && xT.getAlphaFromRGB, lT.EMISSIVE = cK(IT, "EMISSIVE", lT), (xT && xT.uvSet > 1 || IT && IT.uvSet > 1) && this.warnOnce(`uvset:${cT.name}`, `${cT.name} samples a UV set past 2, which is not supported`);
        const AT = cT.reflectionTexture,
          CT = null !== AT;
        if (CT) {
          if (!this.resources.boundTexture(AT)) return !1;
          lT._needNormals = !0
        }
        lT.REFLECTION = CT, lT.REFLECTIONMAP_3D = CT, lT.REFLECTIONMAP_SKYBOX = CT, lT.REFLECTIONMAP_OPPOSITEZ = CT && (TT.useRightHandedSystem ? !AT.invertZ : AT.invertZ), lT.ROUGHNESS = CT && cT.roughness > 0, lT.REFLECTIONOVERALPHA = CT && cT.useReflectionOverAlpha, lT.LITE_REFLECTION_LUMINANCE = CT && "cube" === AT.source.kind && AT.source.luminance, (kT.skeleton || kT.morphTargetManager) && this.warnOnce(`skin:${kT.name}`, `${kT.name} has bones or morph targets, which are not supported`), lT.FOG = cT.fogEnabled && kT.applyFog && yT.fogEnabled && 0 !== yT.fogMode, lT.NONUNIFORMSCALING = kT.nonUniformScaling;
        const {
          visibility: jT,
          hasVertexAlpha: vT
        } = kT;
        lT.ALPHATEST = (0, wT.W)(cT, jT, vT), lT.ALPHAFROMDIFFUSE = (0, wT.lb)(cT), lT.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== cT.transparencyMode, lT.ALPHABLEND = null === cT.transparencyMode || (0, wT.V)(cT, jT, vT), lT.PREMULTIPLYALPHA = 7 === cT.alphaMode || 8 === cT.alphaMode, lT.EMISSIVEASILLUMINATION = cT.useEmissiveAsIllumination, lT.LINKEMISSIVEWITHDIFFUSE = cT.linkEmissiveWithDiffuse, lT.TWOSIDEDLIGHTING = !cT.backFaceCulling && cT.twoSidedLighting, lT.INSTANCES = "none" !== KT, lT.THIN_INSTANCES = "thin" === KT, lT.LITE_FRONT_LAYER = MT >= 1;
        for (const {
            feature: rT,
            state: PT,
            active: wT
          }
          of OT) {
          var tT, hT;
          if (wT) null === (tT = (hT = (0, Ik.j)(rT)).prepareDefinesBeforeAttributes) || void 0 === tT || tT.call(hT, PT, lT, TT, kT)
        }
        this.modelPackKind(cT) && (lT._needNormals = !0), lT.NORMAL = lT._needNormals && kT.isVerticesDataPresent("normal"), lT.UV1 = lT._needUVs && kT.isVerticesDataPresent("uv"), lT.UV2 = lT._needUVs && kT.isVerticesDataPresent("uv2");
        const NT = kT.useVertexColors && kT.isVerticesDataPresent("color");
        lT.VERTEXCOLOR = NT, lT.VERTEXALPHA = kT.hasVertexAlpha && NT, lT.INSTANCESCOLOR = "none" !== KT && kT.isVerticesDataPresent("instanceColor");
        for (const {
            feature: rT,
            state: PT,
            active: wT
          }
          of OT) {
          var QT, ST;
          if (wT) null === (QT = (ST = (0, Ik.j)(rT)).prepareDefines) || void 0 === QT || QT.call(ST, PT, lT, TT, kT, cT)
        }
        const DT = TT.Dv();
        for (const {
            feature: rT,
            state: PT,
            active: wT
          }
          of OT) {
          var aT, FT;
          if (wT && !1 === (null === (aT = (FT = (0, Ik.j)(rT)).isReadyForSubMesh) || void 0 === aT ? void 0 : aT.call(FT, PT, lT, TT, DT))) return !1
        }
        return !0
      }
    }

    function fK(TT, kT, cT) {
      return TT.codeVersion !== kT.version && function(TT, kT) {
        const cT = [],
          lT = [];
        for (const {
            feature: CT,
            state: jT,
            active: vT
          }
          of kT.features) {
          var MT, KT, OT, yT;
          if (vT) xK(null === (MT = (KT = (0, Ik.j)(CT)).getCustomCode) || void 0 === MT ? void 0 : MT.call(KT, jT, "vertex", FT.b.WGSL), cT), xK(null === (OT = (yT = (0, Ik.j)(CT)).getCustomCode) || void 0 === OT ? void 0 : OT.call(yT, jT, "fragment", FT.b.WGSL), lT)
        }
        const fT = [];
        for (const {
            feature: CT,
            state: jT
          }
          of kT.features) {
          var xT, IT;
          const TT = null === (xT = (IT = (0, Ik.j)(CT)).getUniforms) || void 0 === xT ? void 0 : xT.call(IT, jT, FT.b.WGSL);
          for (const kT of null !== (AT = null === TT || void 0 === TT ? void 0 : TT.ubo) && void 0 !== AT ? AT : []) {
            var AT;
            kT.size && kT.type && fT.push({
              name: kT.name,
              type: kT.type,
              arraySize: kT.arraySize
            })
          }
        }
        TT.vertexCode = cT, TT.fragmentCode = lT, TT.pluginUniforms = fT, TT.codeKey = JSON.stringify([cT, lT, fT]), TT.codeVersion = kT.version
      }(TT, kT), `${cT}#${TT.codeKey}`
    }

    function xK(TT, kT) {
      if (TT)
        for (const cT in TT) TT[cT] && kT.push([cT, TT[cT]])
    }
    const IK = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class AK {
      constructor(TT) {
        this.warnOnce = TT, this.states = new Map
      }
      renderState(TT, kT, cT, lT) {
        var MT;
        let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          OT = null !== (MT = TT.sideOrientation) && void 0 !== MT ? MT : kT.sideOrientation;
        kT._getWorldMatrixDeterminant() < 0 && (OT = 0 === OT ? 1 : 0);
        const yT = "triangle-list" === KT,
          fT = cT ? TT.alphaMode : 0,
          xT = (!cT || (0 === fT || TT.forceDepthWrite)) && !TT.disableDepthWrite,
          IT = yT && TT.backFaceCulling ? TT.cullBackFaces ? "back" : "front" : "none",
          AT = yT && 0 !== OT ? "ccw" : "cw",
          CT = TT.depthFunction,
          jT = yT ? TT.zOffset : 0,
          vT = yT ? TT.zOffsetUnits : 0,
          tT = !TT.disableColorWrite;
        return lT && lT.alphaMode === fT && lT.depthWrite === xT && lT.depthFunction === CT && lT.cullMode === IT && lT.frontFace === AT && lT.zOffset === jT && lT.zOffsetUnits === vT && lT.colourWrite === tT && lT.topology === KT ? lT : this.stateFor(fT, xT, CT, IT, AT, jT, vT, tT, KT)
      }
      stateFor(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        const xT = `${TT}|${kT}|${cT}|${lT}|${MT}|${KT}|${OT}|${yT}|${fT}`;
        let IT = this.states.get(xT);
        if (!IT) {
          var AT;
          const CT = TT ? UM(TT) : null;
          TT && !CT && this.warnOnce(`alpha:${TT}`, `alpha mode ${TT} is not supported`), IT = {
            key: xT,
            alphaMode: TT,
            depthFunction: cT,
            zOffset: KT,
            zOffsetUnits: OT,
            topology: fT,
            blend: CT,
            depthWrite: kT,
            depthCompare: cT && null !== (AT = IK.get(cT)) && void 0 !== AT ? AT : null,
            cullMode: lT,
            frontFace: MT,
            depthBias: -OT,
            depthBiasSlopeScale: -KT,
            colourWrite: yT
          }, this.states.set(xT, IT)
        }
        return IT
      }
    }
    var CK = cT(37265);

    function jK(TT) {
      if (!TT.frozen) return -1;
      let kT = TT.version;
      for (const {
          feature: cT,
          state: lT,
          active: MT
        }
        of TT.features) {
        if (!MT || !cT.bind) continue;
        const TT = (0, Ik.j)(cT).uniformsVersion;
        if (!TT) return -1;
        kT += TT(lT)
      }
      return kT
    }
    class vK {
      constructor(TT, kT, cT) {
        this.slots = TT, this.data = kT, this.textures = cT, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(TT, kT) {
        this.write4(TT, kT, 0, 0, 0, 1)
      }
      updateFloat2(TT, kT, cT) {
        this.write4(TT, kT, cT, 0, 0, 2)
      }
      updateFloat3(TT, kT, cT, lT) {
        this.write4(TT, kT, cT, lT, 0, 3)
      }
      updateFloat4(TT, kT, cT, lT, MT) {
        this.write4(TT, kT, cT, lT, MT, 4)
      }
      updateVector3(TT, kT) {
        this.write4(TT, kT.x, kT.y, kT.z, 0, 3)
      }
      updateVector4(TT, kT) {
        this.write4(TT, kT.x, kT.y, kT.z, kT.w, 4)
      }
      updateColor3(TT, kT) {
        this.write4(TT, kT.r, kT.g, kT.b, 0, 3)
      }
      updateColor4(TT, kT, cT) {
        this.write4(TT, kT.r, kT.g, kT.b, cT, 4)
      }
      updateFloatsFrom(TT, kT, cT, lT) {
        const MT = this.slots.get(TT);
        if (!MT) return;
        const KT = this.data,
          OT = MT.offset;
        for (let yT = 0; yT < lT; yT++) KT[OT + yT] = kT[cT + yT]
      }
      updateFloat3TimesFloats(TT, kT, cT, lT) {
        const MT = this.slots.get(TT);
        if (!MT) return;
        const KT = this.data,
          OT = MT.offset;
        KT[OT] = kT[cT] * lT[0], KT[OT + 1] = kT[cT + 1] * lT[1], KT[OT + 2] = kT[cT + 2] * lT[2]
      }
      X3(TT, kT) {
        const cT = this.slots.get(TT);
        cT && this.data.set(kT.m, cT.offset)
      }
      updateMatrixFloats(TT, kT) {
        const cT = this.slots.get(TT);
        cT && this.data.set(kT, cT.offset)
      }
      updateFloatArray(TT, kT) {
        const cT = this.slots.get(TT);
        if (!cT) return;
        if (!cT.arraySize || cT.stride === cT.floats) return void this.data.set(kT, cT.offset);
        const lT = Math.min(kT.length, cT.floats * cT.arraySize);
        for (let MT = 0; MT < lT; MT++) this.data[cT.offset + Math.floor(MT / cT.floats) * cT.stride + MT % cT.floats] = kT[MT]
      }
      updateArray(TT, kT) {
        this.updateFloatArray(TT, kT)
      }
      setTexture(TT, kT) {
        this.textures.set(TT, kT), this.expected.delete(TT)
      }
      expectTexture(TT) {
        this.textures.set(TT, null), this.expected.add(TT)
      }
      write4(TT, kT, cT, lT, MT, KT) {
        const OT = this.slots.get(TT);
        if (!OT) return;
        const yT = this.data,
          fT = OT.offset;
        yT[fT] = kT, KT > 1 && (yT[fT + 1] = cT), KT > 2 && (yT[fT + 2] = lT), KT > 3 && (yT[fT + 3] = MT)
      }
    }

    function tK(TT, kT) {
      const cT = dl,
        lT = CK.f,
        MT = TT.lights,
        KT = Math.min(TT.lightCount, 8);
      for (let OT = 0; OT < KT; OT++) {
        const TT = cT.lights + OT * cT.lightStride,
          KT = OT * CK.c;
        kT[TT] = MT[KT + lT.vector], kT[TT + 1] = MT[KT + lT.vector + 1], kT[TT + 2] = MT[KT + lT.vector + 2], kT[TT + 3] = MT[KT + lT.kind] === CK.d.directional ? 1 : 0, kT[TT + 4] = MT[KT + lT.diffuse], kT[TT + 5] = MT[KT + lT.diffuse + 1], kT[TT + 6] = MT[KT + lT.diffuse + 2], kT[TT + 7] = MT[KT + lT.range], kT[TT + 8] = MT[KT + lT.specular], kT[TT + 9] = MT[KT + lT.specular + 1], kT[TT + 10] = MT[KT + lT.specular + 2], kT[TT + 11] = MT[KT + lT.range]
      }
      kT[cT.fogInfos] = TT.fogMode, kT[cT.fogInfos + 1] = TT.fogStart, kT[cT.fogInfos + 2] = TT.fogEnd, kT[cT.fogInfos + 3] = TT.fogDensity, kT[cT.fogColour] = TT.fogColour[0], kT[cT.fogColour + 1] = TT.fogColour[1], kT[cT.fogColour + 2] = TT.fogColour[2], kT[cT.outputHeight] = TT.renderHeight, kT[cT.animTick] = TT.animTick, kT[cT.timeMs] = TT.timeMs
    }
    class hK {
      constructor(TT) {
        this.instancesOf = TT
      }
      refreshModelUniforms(TT, kT, cT, lT) {
        const MT = jK(cT);
        if (MT >= 0 && MT === kT.heldVersion && kT.textures.get("diffuseSampler") === cT.diffuseTexture && kT.textures.get("reflectionCubeSampler") === cT.reflectionTexture && kT.textures.get("opacitySampler") === cT.opacityTexture && kT.textures.get("emissiveSampler") === cT.emissiveTexture) return !0;
        if (MT < 0)
          for (const KT of this.instancesOf(cT)) KT.heldVersion = -1;
        return this.writeModelUniforms(TT, kT, cT, lT), kT.heldVersion = MT, !1
      }
      writeModelUniforms(TT, kT, cT, lT) {
        const {
          ubo: MT
        } = kT, KT = cT.diffuseTexture, OT = cT.diffuseColor;
        MT.updateFloat4("vDiffuseColor", OT[0], OT[1], OT[2], cT.alpha), KT && (MT.updateFloat2("vDiffuseInfos", KT.uvSet, KT.level), MT.updateMatrixFloats("diffuseMatrix", KT.matrix)), MT.updateFloat("alphaCutOff", cT.alphaCutOff), MT.updateFloatsFrom("vEmissiveColor", cT.emissiveColor, 0, 3), MT.updateFloat3TimesFloats("vAmbientColor", lT.ambientColour, 0, cT.ambientColor);
        const yT = cT.specularColor;
        MT.updateFloat4("vSpecularColor", yT[0], yT[1], yT[2], cT.specularPower), MT.setTexture("diffuseSampler", KT);
        const fT = cT.opacityTexture;
        fT && (MT.updateFloat2("vOpacityInfos", fT.uvSet, fT.level), MT.updateMatrixFloats("opacityMatrix", fT.matrix)), MT.setTexture("opacitySampler", fT);
        const xT = cT.emissiveTexture;
        xT && (MT.updateFloat2("vEmissiveInfos", xT.uvSet, xT.level), MT.updateMatrixFloats("emissiveMatrix", xT.matrix)), MT.setTexture("emissiveSampler", xT);
        const IT = cT.reflectionTexture;
        IT && MT.updateMatrixFloats("reflectionMatrix", IT.matrix), MT.updateFloat2("vReflectionInfos", IT ? IT.level * TT.iblIntensity : 0, cT.roughness), MT.setTexture("reflectionCubeSampler", IT);
        const AT = TT.Dv();
        for (const {
            feature: vT,
            state: tT,
            active: hT
          }
          of cT.features) {
          var CT, jT;
          if (hT) null === (CT = (jT = (0, Ik.j)(vT)).bind) || void 0 === CT || CT.call(jT, tT, MT, TT, AT)
        }
      }
    }

    function NK(TT) {
      const kT = TT.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(kT) ? "u32" : /i32|^vec\di$/.test(kT) ? "i32" : "f32"
    }

    function QK(TT, kT) {
      const cT = TT.getSize(),
        lT = NK(kT),
        MT = TT => 4 === cT ? `${TT}x4` : 2 === cT ? `${TT}x2` : null;
      if ("f32" === lT) {
        if (5126 === TT.type) return 1 === cT ? "float32" : cT >= 2 && cT <= 4 ? `float32x${cT}` : null;
        if (!TT.normalized) return null;
        switch (TT.type) {
          case 5121:
            return MT("unorm8");
          case 5120:
            return MT("snorm8");
          case 5123:
            return MT("unorm16");
          case 5122:
            return MT("snorm16")
        }
        return null
      }
      const KT = "u32" === lT ? "uint" : "sint";
      switch (TT.type) {
        case 5125:
        case 5124:
          return 1 === cT ? `${KT}32` : cT <= 4 ? `${KT}32x${cT}` : null;
        case 5121:
        case 5120:
          return MT(`${KT}8`);
        case 5123:
        case 5122:
          return MT(`${KT}16`)
      }
      return null
    }

    function SK(TT) {
      var kT;
      const cT = /(8|16|32)(?:x(\d))?$/.exec(TT);
      return cT ? Number(cT[1]) / 8 * Number(null !== (kT = cT[2]) && void 0 !== kT ? kT : 1) : 4
    }
    class DK {
      constructor(TT, kT, cT) {
        this.resources = TT, this.limits = kT, this.warnOnce = cT, this.layouts = new Map
      }
      resolveInputs(TT, kT, cT, lT) {
        const MT = [],
          KT = cT.program.attributes,
          OT = [];
        for (let IT = 0; IT < KT.length; IT++) {
          const cT = KT[IT],
            yT = cT.optional ? null : this.resources.vertexInput(TT, cT.name, lT);
          if (!yT) {
            const TT = NK(cT.type),
              kT = "u32" === TT ? "uint32x4" : "i32" === TT ? "sint32x4" : "float32x4";
            OT.push(null);
            const lT = MT.find((TT => null === TT.data));
            lT ? lT.attributes.push({
              shaderLocation: IT,
              offset: 0,
              format: kT
            }) : MT.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: IT,
                offset: 0,
                format: kT
              }]
            });
            continue
          }
          const fT = yT.getBuffer();
          OT.push(yT);
          const xT = QK(yT, cT.type);
          if (!xT) return this.warnOnce(`format:${kT}:${cT.name}`, `${kT}'s ${cT.name} (type ${yT.type}, size ${yT.getSize()}) has no WebGPU vertex format`), null;
          const AT = yT.getIsInstanced() ? "instance" : "vertex",
            CT = yT.byteStride,
            jT = SK(xT),
            vT = MT.find((TT => TT.data === fT && TT.stride === CT && TT.step === AT && yT.byteOffset >= TT.base && yT.byteOffset - TT.base + jT <= CT));
          vT ? vT.attributes.push({
            shaderLocation: IT,
            offset: yT.byteOffset - vT.base,
            format: xT
          }) : MT.push({
            data: fT,
            base: yT.byteOffset,
            stride: CT,
            step: AT,
            attributes: [{
              shaderLocation: IT,
              offset: 0,
              format: xT
            }]
          })
        }
        if (MT.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${kT}`, `${kT} needs ${MT.length} vertex buffers`), null;
        let yT = "";
        for (const IT of MT) {
          yT += `${IT.stride}${"instance"===IT.step?"i":"v"}`;
          for (const TT of IT.attributes) yT += `,${TT.shaderLocation}:${TT.offset}:${TT.format}`;
          yT += ";"
        }
        let fT = this.layouts.get(yT);
        fT || (fT = {
          key: yT,
          buffers: MT.map((TT => ({
            arrayStride: TT.stride,
            stepMode: TT.step,
            attributes: TT.attributes
          }))),
          instanceEnds: MT.map((TT => {
            let kT = -1;
            if ("instance" === TT.step)
              for (const cT of TT.attributes) kT = Math.max(kT, cT.offset + SK(cT.format));
            return kT
          }))
        }, this.layouts.set(yT, fT));
        const xT = MT.map((TT => TT.base));
        return {
          program: cT,
          sources: OT,
          layout: fT,
          slotData: MT.map((TT => TT.data)),
          M6: xT,
          buffers: [],
          offsets: xT,
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

    function aK(TT, kT, cT, lT) {
      const MT = kT.program.program.attributes;
      for (let KT = 0; KT < MT.length; KT++) {
        if ((MT[KT].optional ? null : cT.vertexInput(TT, MT[KT].name, lT)) !== kT.sources[KT]) return !1
      }
      return !0
    }
    const FK = 64;
    class rK {
      constructor(TT, kT, cT, lT) {
        this.device = TT, this.layout = kT, this.frameBuffer = cT, this.label = lT, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(TT) {
        if (TT * FK <= this.data.length) return !1;
        let kT = 2 * this.data.length;
        for (; TT * FK > kT;) kT *= 2;
        const cT = new Float32Array(kT);
        return cT.set(this.data), this.data = cT, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const MT = this.data,
          KT = TT * FK;
        let OT = MT[KT + 16] !== cT;
        for (let yT = 0; yT < 16 && !OT; yT++) OT = MT[KT + yT] !== kT[lT + yT];
        if (OT) {
          for (let TT = 0; TT < 16; TT++) MT[KT + TT] = kT[lT + TT];
          MT[KT + 16] = cT
        }
        return OT
      }
      upload(TT, kT) {
        this.device.queue.writeBuffer(this.buffer, TT * Ll, this.data, TT * FK, (kT - TT) * FK)
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

    function PK(TT) {
      return TT.gpu[bT.g.lite] ??= TT.materials.map(((kT, cT) => ({
        parts: TT,
        range: cT,
        owner: TT.owner
      })))
    }

    function wK(TT) {
      var kT, cT, lT;
      return null !== (kT = null !== (cT = null === (lT = TT.parts.materials[TT.range]) || void 0 === lT ? void 0 : lT.mirror) && void 0 !== cT ? cT : TT.owner.material) && void 0 !== kT ? kT : null
    }
    const mK = ["opaque", "alphaTest", "transparent", "text"];
    class bK {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, xk.d)("Lite: ")
      }
      attach(TT, kT) {
        this.model = TT, this.mirror = kT
      }
      get worlds() {
        return this.model.nodes.pA
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
        for (const [kT, cT] of this.groups)
          for (const lT of mK)
            for (const MT of cT[lT].units) TT(MT.owner, "text" === lT ? "transparent" : lT, kT)
      }
      select(TT, kT) {
        this.frame++, this.selectedCount = 0;
        for (const yT of this.groups.values())
          for (const TT of mK) yT[TT].units.length = 0, yT[TT].rows.length = 0;
        const {
          model: cT,
          mirror: lT
        } = this;
        if (!cT || !lT || !TT) return;
        this.rows.length < cT.nodes.DA && (this.rows = new Int32Array(cT.nodes.DA));
        const MT = this.rows,
          KT = cT.meshes;
        for (let yT = 0; yT < KT.looseCount; yT++) {
          const TT = KT.loose[yT],
            cT = lT.nodes[TT];
          cT && !cT.isBlocked && cT.isEnabled() && !cT.GA.hasAZeroComponent && KT.selects(TT, kT.frustum) && (this.activate(cT, TT), this.selectedCount++)
        }
        const OT = KT.selectTextPlanes(kT.frustum, MT);
        for (let yT = 0; yT < OT; yT++) {
          const kT = MT[yT],
            KT = lT.nodes[kT],
            OT = cT.meshes.parts[kT];
          if (!KT.isVisible || !(KT.visibility > 0) || 0 === (KT.layerMask & TT.layerMask) || !OT) continue;
          const fT = this.groupOf(cT.meshes.layer[kT]).text;
          for (const TT of PK(OT)) fT.units.push(TT), fT.rows.push(kT);
          this.selectedCount++
        }
      }
      instanceBatch(TT) {
        const kT = this.batchOf(TT);
        return kT.dispatched || (kT.dispatched = kT.renderSelf = !0, kT.row = this.rowOf(TT)), kT
      }
      rowOf(TT) {
        return TT.row
      }
      activate(TT, kT) {
        if (!TT.aJ) {
          const cT = TT;
          if (cT.tlT) {
            const TT = this.batchOf(cT);
            TT.dispatched = !0, TT.renderSelf = !0, TT.row = kT
          }
          return void this.dispatch(cT, kT, kT)
        }
        const cT = TT,
          lT = cT.hlT;
        if (lT._getWorldMatrixDeterminant() >= 0 !== cT._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${lT.name}`, `A mirrored InstancedMesh of ${lT.name} is not drawn yet`);
        const MT = this.batchOf(lT);
        MT.instances.push(cT), MT.rows.push(kT), MT.dispatched || (MT.dispatched = !0, this.dispatch(lT, kT, this.rowOf(lT)))
      }
      batchOf(TT) {
        let kT = this.batches.get(TT);
        return kT || (kT = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(TT, kT)), kT.frame !== this.frame && (kT.frame = this.frame, kT.dispatched = !1, kT.renderSelf = !1, kT.instances.length = 0, kT.rows.length = 0), kT
      }
      dispatch(TT, kT, cT) {
        const {
          layer: lT,
          parts: MT
        } = this.model.meshes;
        if (!MT[kT]) return;
        const KT = this.groupOf(lT[kT]),
          OT = TT;
        for (const yT of PK(MT[kT])) {
          const TT = wK(yT);
          if (!TT) continue;
          const kT = TT.needAlphaBlendingForMesh(OT) ? KT.transparent : TT.needAlphaTestingForMesh(OT) ? KT.alphaTest : KT.opaque;
          kT.units.push(yT), kT.rows.push(cT)
        }
      }
      groupOf(TT) {
        let kT = this.groups.get(TT);
        return kT || (kT = {
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
        }, this.groups.set(TT, kT)), kT
      }
    }
    class zK {
      constructor() {
        this.ty = new Map, this.enabled = [], this.groups = new Map, this.wj = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(TT) {
        if (this.ty.has(TT)) return;
        const kT = {
          mesh: TT,
          observer: TT.onEffectiveEnabledStateChangedObservable.add((TT => {
            this.PD(kT, TT)
          })),
          index: -1,
          steady: null
        };
        this.ty.set(TT, kT), this.PD(kT, TT.isEnabled())
      }
      remove(TT) {
        const kT = this.ty.get(TT);
        kT && (kT.observer.remove(!0), this.PD(kT, !1), this.ty.delete(TT))
      }
      base(TT) {
        return this.ty.get(TT)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          ty: this.ty.size
        }
      }
      forEachSelected(TT) {
        for (const [kT, cT] of this.groups) {
          for (const lT of cT.opaque) TT(lT.owner, "opaque", kT);
          for (const lT of cT.transparent) TT(lT.owner, "transparent", kT)
        }
        for (const kT of this.wj) TT(kT.mesh, "opaque", 0)
      }
      group(TT) {
        return this.groups.get(TT)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(TT, kT) {
        this.drawn = 0, this.selected = 0, this.wj.length = 0;
        for (const lT of this.groups.values()) lT.opaque.length = 0, lT.transparent.length = 0;
        if (!TT) return;
        const cT = this.enabled;
        for (let lT = 0; lT < cT.length; lT++) {
          const MT = cT[lT];
          if (MT.steady && kT(MT, TT)) {
            this.selected++, this.wj.push(MT);
            continue
          }
          const KT = MT.mesh;
          if (KT.isBlocked || KT.GA.hasAZeroComponent) continue;
          if (!KT.isVisible || KT.visibility <= 0 || 0 === (KT.layerMask & TT.layerMask)) continue;
          if (KT.tlT) {
            this.warned.has(KT.name) || (this.warned.add(KT.name), console.warn(`Lite: thin instance base ${KT.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: OT
          } = KT;
          if (!OT) continue;
          KT.computeWorldMatrix(), this.selected++;
          const yT = this.listsFor(KT.renderingGroupId);
          for (const TT of PK(OT)) {
            const kT = wK(TT);
            kT && (kT.needAlphaBlendingForMesh(KT) ? yT.transparent.push(TT) : yT.opaque.push(TT))
          }
        }
      }
      PD(TT, kT) {
        if (kT === TT.index >= 0) return;
        TT.steady = null;
        const cT = this.enabled;
        if (kT) TT.index = cT.length, cT.push(TT);
        else {
          const kT = cT.pop();
          kT !== TT && (cT[TT.index] = kT, kT.index = TT.index), TT.index = -1
        }
      }
      listsFor(TT) {
        let kT = this.groups.get(TT);
        return kT || (kT = {
          opaque: [],
          transparent: []
        }, this.groups.set(TT, kT)), kT
      }
    }
    var JK = cT(39349);
    class oK {
      constructor() {
        this.bundle = null, this.stale = !0, this.ty = new Set
      }
    }
    class HK {
      constructor(TT, kT, cT) {
        this.device = TT, this.slots = kT, this.host = cT, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new oK, this.Im = new oK, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new nM, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(TT) {
          var kT, cT;
          let lT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (kT = null === (cT = globalThis.navigator) || void 0 === cT ? void 0 : cT.userAgent) && void 0 !== kT ? kT : "";
          const MT = TT.adapterInfo;
          return "intel" === (null === MT || void 0 === MT ? void 0 : MT.vendor) && "gen-12lp" === MT.architecture && lT.includes("Windows")
        }(TT), (0, JK.G)(this.direct)
      }
      iN() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, JK.G)(this.directThisFrame)
      }
      add(TT, kT, cT, lT) {
        let MT = this.records.get(TT);
        return MT || (MT = this.createRecord(TT), this.records.set(TT, MT)), MT.recorded && GK(MT, kT) || (this.bundleOf(MT).stale = !0), this.place(MT, kT, cT, lT), MT
      }
      bundleOf(TT) {
        return TT.Im ? this.Im : this.main
      }
      addAgain(TT, kT, cT, lT) {
        TT.recorded || (this.bundleOf(TT).stale = !0), this.place(TT, kT, cT, lT)
      }
      place(TT, kT, cT, lT) {
        TT.seen = this.frame, TT.Im && null === TT.draw && (this.Im.stale = !0), TT.draw = kT, this.drawn++, cT && this.slots.write(TT.slot, cT, lT) && (this.slotsFrom = Math.min(this.slotsFrom, TT.slot), this.slotsTo = Math.max(this.slotsTo, TT.slot));
        const MT = this.args,
          KT = 5 * TT.slot;
        MT[KT] === kT.count && MT[KT + 1] === kT.instances && MT[KT + 2] === kT.first || (MT[KT] = kT.count, MT[KT + 1] = kT.instances, MT[KT + 2] = kT.first, this.argsDirty = !0, this.Im.stale ||= TT.Im)
      }
      qN() {
        for (const TT of this.records.values()) TT.seen !== this.frame && (TT.draw && (TT.draw = null, this.args[5 * TT.slot + 1] = 0, this.argsDirty = !0, this.Im.stale ||= TT.Im), this.frame - TT.seen > 120 && (this.records.delete(TT.unit), this.freeSlots.push(TT.slot), TT.recorded && (this.bundleOf(TT).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(TT) {
        for (const kT of this.records.values()) kT.draw && kT.seen === this.frame && !kT.Im && TT(kT.draw, this.slots.data, kT.slot * Ll / 4)
      }
      resourceDestroyed(TT) {
        this.main.stale ||= this.main.ty.has(TT), this.Im.stale ||= this.Im.ty.has(TT)
      }
      execute(TT, kT, cT) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(TT, kT, cT, "direct"), this.drawn;
        const lT = this.host.sceneGroup(kT);
        if (!lT) return this.main.bundle = null, this.Im.bundle = null, this.recordedSceneGroup = null, this.encode(TT, kT, cT, "direct"), this.drawn;
        this.recordedTarget === cT && this.recordedSceneGroup === lT || (this.recordedTarget = cT, this.recordedSceneGroup = lT, this.main.stale = !0, this.Im.stale = !0);
        const MT = this.main,
          KT = this.Im;
        let OT = !1;
        !MT.stale && MT.bundle || (MT.bundle = this.record(kT, cT, lT, "indirect"), OT = !0);
        const yT = (0, JK.i)();
        return (KT.stale || this.rangedEpoch !== yT) && (this.rangedEpoch = yT, KT.bundle = this.drawsRanged() ? this.record(kT, cT, lT, "Im") : this.noRangedBundle(), OT = !0), OT && (this.bundles = KT.bundle ? [MT.bundle, KT.bundle] : [MT.bundle]), TT.executeBundles(this.bundles), TT.setBindGroup(0, lT), this.drawn
      }
      record(TT, kT, cT, lT) {
        const MT = this.device.createRenderBundleEncoder({
          label: "Im" === lT ? "thin-bases-ranged" : "thin-bases",
          colorFormats: TT._colorFormat ? [TT._colorFormat] : [],
          depthStencilFormat: TT._depthStencilFormat,
          sampleCount: TT._sampleCount
        });
        return MT.setBindGroup(0, cT), this.encode(MT, TT, kT, lT), MT.finish()
      }
      noRangedBundle() {
        for (const TT of this.records.values()) TT.Im && (TT.recorded = !1);
        return this.Im.ty.clear(), this.Im.stale = !1, null
      }
      drawsRanged() {
        for (const TT of this.records.values())
          if (TT.Im && TT.draw) return !0;
        return !1
      }
      encode(TT, kT, cT, lT) {
        const MT = [];
        for (const fT of this.records.values()) "direct" !== lT && fT.Im !== ("Im" === lT) || (fT.recorded = !1, fT.draw && MT.push(fT));
        MT.sort(VK);
        const KT = "direct" === lT ? null : "Im" === lT ? this.Im : this.main;
        null === KT || void 0 === KT || KT.ty.clear(), this.binder.reset();
        let OT = !1;
        for (const fT of MT) {
          var yT;
          const MT = fT.draw,
            xT = this.host.pipelineFor(MT, kT, cT);
          if (!xT) {
            this.host.pipelineCompiling(MT, cT) ? OT = !0 : KT && this.keep(fT, MT, KT.ty);
            continue
          }
          let IT;
          if (fT.Im && "indirect" !== lT) {
            const TT = fT.unit.owner;
            IT = "direct" === lT && (0, JK.s)(TT) || (0, JK.k)(TT) || void 0
          }
          if (KT && this.keep(fT, MT, KT.ty), 0 === (null === (yT = IT) || void 0 === yT ? void 0 : yT.count)) continue;
          this.binder.bind(TT, MT, xT, this.slots.bindGroup, fT.slot * Ll);
          const AT = 5 * fT.slot;
          if ("indirect" === lT) {
            MT.indexBuffer ? TT.drawIndexedIndirect(this.argsBuffer, 4 * AT) : TT.drawIndirect(this.argsBuffer, 4 * AT);
            continue
          }
          const CT = this.args;
          IT ? eK(TT, null !== MT.indexBuffer, CT, AT, IT) : MT.indexBuffer ? TT.drawIndexed(CT[AT], CT[AT + 1], CT[AT + 2], 0, 0) : TT.draw(CT[AT], CT[AT + 1], CT[AT + 2], 0)
        }
        KT && (KT.stale = OT)
      }
      keep(TT, kT, cT) {
        TT.recorded = !0, TT.pipelineKey = kT.pipelineKey, TT.materialGroup = kT.material.bindGroup, TT.vertexBuffers.length = 0, TT.vertexBuffers.push(...kT.vertexBuffers), TT.vertexOffsets = kT.vertexOffsets, TT.indexBuffer = kT.indexBuffer, TT.indexFormat = kT.indexFormat;
        for (const lT of kT.vertexBuffers) cT.add(lT);
        kT.indexBuffer && cT.add(kT.indexBuffer), cT.add(kT.material.buffer);
        for (const lT of kT.material.bound) lT && cT.add(lT)
      }
      createRecord(TT) {
        let kT = this.freeSlots.pop();
        return void 0 === kT && (kT = this.slotCount++, this.grow()), {
          unit: TT,
          slot: kT,
          Im: void 0 !== (0, JK.k)(TT.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.Im.stale = !0), 5 * this.slotCount > this.args.length) {
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

    function eK(TT, kT, cT, lT, MT) {
      const KT = cT[lT + 1],
        OT = MT.data;
      for (let yT = 0; yT < MT.count; yT++) {
        const MT = Math.min(OT[2 * yT], KT),
          fT = Math.min(OT[2 * yT + 1], KT - MT);
        0 !== fT && (kT ? TT.drawIndexed(cT[lT], fT, cT[lT + 2], 0, MT) : TT.draw(cT[lT], fT, cT[lT + 2], MT))
      }
    }

    function GK(TT, kT) {
      if (TT.pipelineKey !== kT.pipelineKey || TT.materialGroup !== kT.material.bindGroup || TT.indexBuffer !== kT.indexBuffer || TT.indexFormat !== kT.indexFormat || TT.vertexOffsets !== kT.vertexOffsets || TT.vertexBuffers.length !== kT.vertexBuffers.length) return !1;
      for (let cT = 0; cT < TT.vertexBuffers.length; cT++)
        if (TT.vertexBuffers[cT] !== kT.vertexBuffers[cT]) return !1;
      return !0
    }

    function VK(TT, kT) {
      return iM(TT.draw, kT.draw)
    }
    const EK = new WeakMap,
      ZK = {
        depth: !1,
        sunShadow: !1
      };

    function uK(TT, kT) {
      let cT = EK.get(TT);
      cT || (cT = new Map, EK.set(TT, cT));
      const lT = `${kT.depth?"-depth":""}${kT.sunShadow?"-shadow":""}${kT.shadowMask?"-mask":""}`;
      let MT = cT.get(lT);
      if (!MT) {
        const KT = [{
          binding: mk.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: mk.l
          }
        }, {
          binding: mk.D,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        kT.depth && KT.push({
          binding: mk.u,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), kT.sunShadow && KT.push(... function() {
          const TT = GPUShaderStage.FRAGMENT,
            kT = mk.x;
          return [{
            binding: kT.uniform,
            visibility: TT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: kT.rC,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: kT.special,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: kT.volume,
            visibility: TT,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: kT.sampler,
            visibility: TT,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: kT.entities,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: kT.entityGrids,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), kT.shadowMask && KT.push({
          binding: mk.A,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), MT = TT.createBindGroupLayout({
          label: `${kT.depth?"terrain-":""}shader-pack-inputs${lT}`,
          entries: KT
        }), cT.set(lT, MT)
      }
      return MT
    }

    function XK(TT) {
      return uK(TT, ZK)
    }

    function dK(TT, kT) {
      if (!kT) return !1;
      const cT = (0, bk.d)(TT);
      return !!cT && Zc(cT, kT)
    }

    function LK(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!Il(kT)) return [];
      return [uK(TT, {
        depth: Kl(kT.packVariant),
        sunShadow: dK(kT.packVariant, cT),
        shadowMask: lT
      })]
    }
    class RK {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = TT, this.sunShadow = cT, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(mk.l), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = TT.createBuffer({
          label: "shader-pack-inputs",
          size: mk.l,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const lT = (0, mk.G)(kT);
        this.textures = TT.createBuffer({
          label: "shader-pack-textures",
          size: lT.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), TT.queue.writeBuffer(this.textures, 0, lT), this.bindGroup = TT.createBindGroup({
          label: "shader-pack-inputs",
          layout: XK(TT),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: mk.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: mk.D,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(TT, kT, cT) {
        (0, mk.L)(this.data, {
          seconds: TT.seconds(),
          lit: cT,
          renderOffset: TT.renderOffset(),
          M_: TT.M_(),
          eyePosition: kT,
          shadowDirection: TT.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const lT = kT ? this.sunShadow : null;
        if ((kT || cT) && !lT) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!TT && !lT) return this.bindGroup;
        (TT && TT !== this.depthView || cT && cT !== this.maskView) && (this.depthView = null !== TT && void 0 !== TT ? TT : this.depthView, this.maskView = null !== cT && void 0 !== cT ? cT : this.maskView, this.groups.clear());
        const MT = (TT ? 1 : 0) | (lT ? 2 : 0) | (cT ? 4 : 0);
        let KT = this.groups.get(MT);
        if (!KT) {
          const kT = this.entries();
          TT && kT.push({
            binding: mk.u,
            resource: TT
          }), lT && kT.push(...lT.entries()), cT && kT.push({
            binding: mk.A,
            resource: cT
          }), KT = this.device.createBindGroup({
            label: `${TT||cT?"terrain-":""}shader-pack-inputs${TT?"-depth":""}${lT?"-shadow":""}${cT?"-mask":""}`,
            layout: uK(this.device, {
              depth: !!TT,
              sunShadow: !!lT,
              shadowMask: !!cT
            }),
            entries: kT
          }), this.groups.set(MT, KT)
        }
        return KT
      }
      bind(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        TT.setBindGroup(mk.h, this.bindGroupFor(kT, cT, lT))
      }
    }

    function gK(TT, kT, cT) {
      if (TT.gpuVersion === kT.gpuBuffersVersion) return !0;
      let lT;
      do {
        if (lT = kT.gpuBuffersVersion, !UK(TT, kT, cT)) return !1
      } while (kT.gpuBuffersVersion !== lT);
      return TT.gpuVersion = lT, TT.fitInstances = 0, !0
    }

    function UK(TT, kT, cT) {
      let lT = null;
      for (let KT = 0; KT < TT.slotData.length; KT++) {
        var MT;
        const OT = TT.slotData[KT],
          yT = OT ? kT.gpuBuffer(OT) : cT;
        if (!yT) return !1;
        OT && TT.layout.instanceEnds[KT] < 0 && kT.cover(OT, Number.POSITIVE_INFINITY), TT.buffers[KT] = yT;
        const fT = TT.M6[KT] + (OT ? kT.gpuOffset(OT) : 0);
        fT !== (null !== (MT = lT) && void 0 !== MT ? MT : TT.offsets)[KT] && (lT ??= TT.offsets.slice(), lT[KT] = fT), TT.ends[KT] = OT ? kT.gpuEnd(OT) : yT.size
      }
      return lT && (TT.offsets = lT), !0
    }

    function YK(TT, kT, cT, lT) {
      if (kT <= TT.fitInstances) return null;
      const {
        layout: MT,
        ends: KT,
        offsets: OT,
        slotData: yT,
        M6: fT
      } = TT;
      let xT = !1;
      for (let IT = 0; IT < MT.buffers.length; IT++) {
        const TT = MT.instanceEnds[IT];
        if (TT < 0) continue;
        const lT = (kT - 1) * MT.buffers[IT].arrayStride + TT;
        if (KT[IT] - OT[IT] < lT) return {
          index: IT,
          needed: lT
        };
        const AT = yT[IT];
        AT && cT.cover(AT, fT[IT] + lT) && (xT = !0)
      }
      return xT && gK(TT, cT, lT), TT.fitInstances = kT, null
    }
    var BK = cT(37678),
      WK = cT(37709);
    const nK = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      pK = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      iK = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      qK = `((vertexInputs.aPackedLightLevels >> 16u) | ${fk.e.placed}u)`,
      sK = "u32(vertexInputs.aShaderPackItem.x)",
      TO = `${fk.e.lifeform}u`;

    function kO(TT) {
      return "item" === TT.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const cO = "bloxdSpEnchant",
      lO = "floor(finalWorld[3].xyz)";

    function MO(TT, kT, cT) {
      return "placed" === kT.kind && TT.reads[cT].includes("bloxdFragmentBlockPosition")
    }

    function KO(TT, kT) {
      let [cT, lT] = TT;
      return cT === kT.point && lT === kT.code
    }

    function OO(TT, kT) {
      var cT, lT, MT;
      const KT = null === (cT = TT.find((TT => TT.texture))) || void 0 === cT ? void 0 : cT.texture,
        OT = null === (lT = TT.find((TT => TT.enchantTier))) || void 0 === lT ? void 0 : lT.enchantTier,
        yT = null === (MT = TT.find((TT => TT.overlay))) || void 0 === MT ? void 0 : MT.overlay,
        fT = yT ? kT.filter((TT => KO(TT, yT))).length : 0;
      return yT && 1 === fT ? {
        texture: KT,
        overlay: yT,
        enchantTier: OT
      } : {
        texture: KT,
        enchantTier: OT
      }
    }

    function yO(TT) {
      if ("item" === TT.kind) {
        return {
          vertexFlags: `(${sK} & 0xffffu)`,
          varying: "vPackItem",
          value: sK,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return TT.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: qK,
        varying: "vPackFlags",
        value: qK,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function fO(TT) {
      return "lifeform" === TT.kind ? TO : "0u"
    }

    function xO(TT) {
      return !!TT.BLOXD_PLUGIN_ENCHANTMENT
    }

    function IO(TT, kT) {
      const {
        enchantTier: cT
      } = kT;
      return cT && xO(kT.defines) && "lifeform" === kT.kind && hO(TT, "enchantTier") ? cT : null
    }

    function AO(TT, kT) {
      return xO(kT.defines) && hO(TT, "enchantSpeed")
    }

    function CO(TT) {
      const {
        overlay: kT,
        defines: cT
      } = TT;
      if (!kT || !cT.DIFFUSE) return null;
      const lT = cT.VERTEXCOLOR || cT.INSTANCESCOLOR && cT.INSTANCES;
      return `vec4f(${kT.colour}.rgb * uniforms.vDiffuseInfos.y${lT?" * fragmentInputs.vColor.rgb":""}, ${kT.colour}.a)`
    }
    const jO = "fragmentInputs.vPackTexture";

    function vO(TT) {
      const {
        atlas: kT,
        defines: cT,
        texture: lT
      } = TT;
      if (kT || !cT.DIFFUSE) return null;
      if (lT) return {
        texture: "diffuseSampler",
        ...lT
      };
      const MT = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===cT.DIFFUSEDIRECTUV?"vMainUV1":2===cT.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== TT.kind) return MT;
      if (!cT.BLOXD_PLUGIN_ANIMATED) return {
        ...MT,
        id: jO
      };
      const KT = FT.b.WGSL,
        OT = (0, FT.Db)(KT, "uAnimStatesNum"),
        yT = (0, FT.fb)(KT, (0, BK.d)(KT), OT),
        fT = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${OT})`,
        layers: [yT],
        uv: `vec2f(${fT}.x, ${fT}.y * ${OT} - ${yT})`,
        levelUv: fT,
        id: jO
      }
    }

    function tO(TT, kT) {
      return "box" === kT.kind && !!TT.hooks.surface && null !== vO(kT)
    }

    function hO(TT, kT) {
      return TT.reads.fragment.includes(kT)
    }

    function NO(TT) {
      return !!TT.BLOXD_LIGHTING && !TT.BLOXD_UNLIT
    }

    function QO(TT, kT, cT, lT) {
      const MT = TT.filter((TT => {
        let [cT, lT] = TT;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === cT && lT === kT
      }));
      if (1 !== MT.length) throw new Error(`A model program for shader packs has ${0===MT.length?"no":"more than one"} ${lT} code before fog (lite/modelShaderPack.ts)`);
      return TT.map((TT => TT === MT[0] ? [TT[0], cT] : TT))
    }

    function SO(TT, kT, cT, lT) {
      const {
        hooks: MT
      } = TT, {
        kind: KT,
        defines: OT
      } = kT, yT = [...cT];
      var fT;
      kT.atlas && MT.surface && yT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Uc("atlasIdxIn")]), "item" === KT && yT.push(["CUSTOM_VERTEX_DEFINITIONS", (0, FT.d)(FT.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), tO(TT, kT) && yT.push(["CUSTOM_VERTEX_DEFINITIONS", (0, FT.d)(FT.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (fT = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Rc}[min(u32(${fT}) - 1u, arrayLength(&${Rc}) - 1u)], ${fT} > 0.5);\n`)]);
      const xT = yO(kT);
      xT && (MT.surface || MT.light) && yT.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${xT.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${xT.varying} = ${xT.value};`]);
      let IT = lT;
      if (MO(TT, kT, "fragment") && (yT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${lO});`]), IT = [...IT, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), hO(TT, "localPosition") && yT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${kO(kT)};`]), xO(OT) && MT.surface) {
        AO(TT, kT) && yT.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const cT = IO(TT, kT);
        cT && yT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${cT});`]);
        const lT = (0, FT.ub)(FT.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        IT = [...QO(IT, (0, WK.i)(FT.b.WGSL), lT, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, WK.b)(cO)]]
      }
      const {
        overlay: AT
      } = kT;
      AT && CO(kT) && MT.surface && (IT = IT.filter((TT => !KO(TT, AT))));
      const CT = MT.light ? function(TT) {
        return "placed" === TT.kind ? {
          name: "terrain",
          engine: (0, rk.L)(FT.b.WGSL),
          pack: (0, rk.kb)(FT.b.WGSL)
        } : TT.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, rk.C)(FT.b.WGSL),
          pack: (0, rk.cb)(FT.b.WGSL)
        } : null
      }(kT) : null;
      if (CT && (IT = QO(IT, CT.engine, CT.pack, `${CT.name} light`), "placed" !== KT && NO(OT))) {
        const TT = OT.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, FT.Db)(FT.b.WGSL, "uEntityLightLevels") : (0, FT.Kb)(FT.b.WGSL, "aLightLevels");
        yT.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${rk.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, rk.gb)(FT.b.WGSL, TT)])
      }
      return {
        vertexCode: yT,
        fragmentCode: IT
      }
    }

    function DO(TT, kT, cT, lT) {
      return Vc(TT, kT, cT, lT, "model")
    }
    const aO = "\t@builtin(position) position: vec4f,\n";

    function FO(TT, kT) {
      const cT = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(TT)[0];
      return `${cT}${kT}${TT.slice(cT.length)}`
    }

    function rO(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: MT
      } = kT, KT = Zc(kT, lT), {
        kind: OT,
        defines: yT
      } = cT, fT = function(TT, kT) {
        var cT, lT, MT;
        const {
          defines: KT
        } = kT, OT = yO(kT), yT = !!KT.FOG, fT = xO(KT), xT = null !== (cT = null === OT || void 0 === OT ? void 0 : OT.enchantTier) && void 0 !== cT ? cT : IO(TT, kT) ? "fragmentInputs.vPackEnchantTier" : "0u", IT = "lifeform" === kT.kind && !KT.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (lT = null === OT || void 0 === OT ? void 0 : OT.vertexFlags) && void 0 !== lT ? lT : fO(kT),
          vertexLocalPosition: kO(kT),
          flags: null !== (MT = null === OT || void 0 === OT ? void 0 : OT.flags) && void 0 !== MT ? MT : fO(kT),
          normal: "normalW",
          alpha: IT ? "alpha * baseColor.a" : "alpha",
          alphaOut: IT ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: yT ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: yT ? "1.0 - fog" : "0.0",
          enchantTier: xT,
          enchantColour: fT ? `${cO}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: AO(TT, kT) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: hO(TT, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: CO(kT)
        }
      }(kT, cT), xT = TT.textures.filter((TT => /^textureAtlas\d+$/.test(TT.name))).length, IT = cT.atlas && xT > 0 ? {
        count: xT,
        layers: cT.atlas.layers,
        width: cT.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: TT.material.slots.has("uAnimDataPerTex") ? (kT, cT) => bl(kT, cT, function(TT) {
          const kT = TT.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            UA: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: TT => `uniforms.uAnimDataPerTex[${TT}]${kT}`
          }
        }(TT)) : null
      } : null, AT = "placed" === OT ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", CT = null !== IT && void 0 !== IT ? IT : vO(cT), jT = function(TT, cT) {
        let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,mk.K)()}${Xc(kT,cT)}${lT}${Bc(TT)}${Hc}${AT}${kT.code}`
      };
      let {
        vertex: vT,
        fragment: tT
      } = TT;
      const hT = nc(MT, fT);
      if (hT) {
        const TT = MO(kT, cT, "vertex") ? `\tbloxdSpCell = ${lO};\n` : "";
        vT = DO(vT, nK, `${TT}${hT.slice(1)}${nK}`, "vertex")
      }
      const NT = `${dc(kT,KT,function(TT,kT){return kT.TWOSIDEDLIGHTING?TT:`select(-(${TT}), ${TT}, fragmentInputs.frontFacing)`}(fT.normal,yT),fT.flags)}${pc(MT,kT.strict,kT.program,CT,fT)}`;
      NT && (tT = DO(tT, pK, `${NT.slice(1)}${pK}`, "surface")), KT && kT.sunShadow && !yT.TWOSIDEDLIGHTING && (tT = DO(tT, aO, `${aO}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const QT = sc(MT);
      if (QT) {
        const TT = qc(MT, NO(yT), !0, fT);
        tT = DO(tT, iK, `${TT}${QT.slice(1)}${iK}`, "light")
      }
      const ST = tO(kT, cT) ? gc : "";
      return {
        ...TT,
        vertex: FO(vT, jT(IT, !1, ST)),
        fragment: FO(tT, jT(CT, KT))
      }
    }
    const PO = {
      name: "earthSky",
      uniqueId: -1
    };
    class wO {
      constructor(TT) {
        this.resources = TT, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const TT of this.instances.values()) TT.released = !0, this.resources.destroyBuffer(TT.buffer);
        this.instances.clear()
      }
    }

    function mO(TT) {
      return TT.failed && null !== TT.packGroup
    }
    class bO {
      constructor(TT, kT, cT) {
        this.device = TT, this.resources = kT, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Ws = new zK, this.modelMeshes = new bK, this.thinBundle = void 0, this.binder = new nM, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new hK((TT => this.modelSlot(TT).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, xk.d)("Lite: "), this.renderStates = new AK(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (TT, kT) => this.keepSteady(TT, kT), this.lists = new pM(this.modelMeshes, this.Ws, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new yK(kT, this.warnOnce, ((TT, kT, cT) => this.programWithModel(TT, kT, cT)), mO), this.vertexLayouts = new DK(kT, TT.limits, this.warnOnce), this.sceneLayout = kk(TT), this.frameLayout = TT.createBindGroupLayout({
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
        }), this.meshSlots = new rK(TT, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = TT.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new HK(TT, new rK(TT, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (TT, kT, cT) => this.pipelineFor(TT, kT, cT),
          pipelineCompiling: (TT, kT) => !TT.program.failed && !1 !== this.pipelines.get(`${TT.pipelineKey}|${kT}`),
          sceneGroup: TT => {
            const kT = cT(TT);
            return kT || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), kT
          }
        }), kT.onDestroy = TT => {
          this.thinBundle.resourceDestroyed(TT)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const MT = {
          order: TT,
          isTransparent: kT,
          _direct: !kT,
          bind: (TT, kT) => this.createBinding(MT, kT, cT, lT)
        };
        return MT
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(TT, kT, cT) {
        var lT;
        let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = kT, this.drawDefines.view = kT, this.thinBundle.iN(), this.writeFrameUniforms();
        const KT = null !== (lT = null === MT || void 0 === MT ? void 0 : MT.defineFor("model")) && void 0 !== lT ? lT : 0;
        this.drawDefines.modelPackVariant = KT, MT && 0 !== KT && (this.packInputs ??= new RK(this.device, MT.textureLayers(), this.sunShadow), this.packInputs.write(MT, kT.eye, MT.bt())), this.lists.clear(), this.slotCount = 0;
        const OT = TT.activeCamera;
        this.Ws.select(OT, this.keepSteadyBase), this.modelMeshes.select(OT, kT), cT && this.pushEarthSky(cT), this.lists.collect(TT), this.thinBundle.qN(), this.uploadMeshSlots()
      }
      pushDraws(TT, kT, cT, lT, MT, KT) {
        let OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const yT = KT.length;
        for (let fT = 0; fT < cT; fT++) {
          const cT = kT[fT];
          let yT = this.retainedDraw(TT, cT, lT, MT);
          if (void 0 === yT && (yT = this.drawFor(TT, cT, lT, MT), this.retain(cT, yT)), yT) {
            const TT = cT.owner,
              kT = OT ? OT[fT] : -1;
            yT.slotOffset = kT < 0 ? this.writeMeshSlot(TT.getWorldMatrix().m, TT.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[kT], 16 * kT), KT.push(yT)
          }
        }
        return KT.length - yT
      }
      bundleDraws(TT, kT, cT) {
        let lT = 0;
        for (const MT of kT) {
          let kT = this.retainedDraw(TT, MT, cT, !1);
          const KT = void 0 !== kT;
          if (void 0 === kT && (kT = this.drawFor(TT, MT, cT, !1), this.retain(MT, kT)), kT) {
            const TT = MT.owner,
              cT = this.thinBundle.add(MT, kT, TT.getWorldMatrix().m, TT.visibility);
            KT && this.steadyFrom(MT, kT, cT), lT++
          }
        }
        return lT
      }
      steadyFrom(TT, kT, cT) {
        const lT = TT.owner,
          MT = this.Ws.base(lT),
          KT = lT.material,
          {
            drawState: OT,
            instance: yT
          } = kT.inputs.retained;
        if (!MT || !KT || 1 !== TT.parts.materials.length || wK(TT) !== KT) return;
        const fT = MT.steady ??= {
          unit: TT,
          material: KT,
          visibility: 1,
          draw: kT,
          record: cT,
          drawState: OT,
          instance: yT,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        fT.unit = TT, fT.material = KT, fT.visibility = lT.visibility, fT.draw = kT, fT.record = cT, fT.drawState = OT, fT.instance = yT, fT.bindGroup = yT.bindGroup, fT.gpuVersion = this.resources.gpuBuffersVersion, fT.fitInstances = kT.inputs.fitInstances, fT.worldFlag = lT.getWorldMatrix().updateFlag, fT.handedFrame = this.frame
      }
      keepSteady(TT, kT) {
        const cT = TT.steady;
        if (cT.handedFrame !== this.frame - 1 || (this.frame + cT.phase) % 8 === 0) return !1;
        const lT = TT.mesh,
          {
            unit: MT,
            draw: KT,
            instance: OT,
            drawState: yT
          } = cT,
          fT = lT.forcedInstanceCount || lT.w6;
        if (!lT.isVisible || lT.tlT || lT.visibility !== cT.visibility || 0 === (lT.layerMask & kT.layerMask) || lT.material !== cT.material || 0 !== lT.renderingGroupId || lT.hasVertexAlpha || !this.drawDefines.definesHold(yT, MT, yT.instancing) || cT.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(KT.inputs, MT, yT.instancing, KT.program) || KT.program.failed || OT.released || fT <= 0 || fT > cT.fitInstances) return !1;
        if (OT.frame !== this.frame && this.bindMaterial(OT, this.modelUniforms.refreshModelUniforms(lT.NJ(), OT, OT.model, this.view)), !OT.bindable || OT.bindGroup !== cT.bindGroup) return !1;
        const xT = lT.computeWorldMatrix(),
          IT = xT.updateFlag !== cT.worldFlag;
        return cT.worldFlag = xT.updateFlag, KT.instances = fT, this.thinBundle.addAgain(cT.record, KT, IT ? xT.m : null, cT.visibility), cT.handedFrame = this.frame, this.Ws.drawn++, !0
      }
      retainedDraw(TT, kT, cT, lT) {
        const MT = this.inputs.get(kT),
          KT = null === MT || void 0 === MT ? void 0 : MT.retained;
        if (!MT || !KT) return;
        const {
          drawState: OT,
          program: yT,
          instance: fT,
          instancing: xT
        } = KT, IT = kT.owner;
        if (kK(IT) !== xT) return;
        const AT = this.instanceCount(IT, xT);
        if (AT <= 0) return null;
        if (fT.released || yT.failed || OT.program !== yT || !this.drawDefines.programCurrent(OT, kT, xT, cT) || !this.inputsStamped(MT, kT, xT, yT) || IT.isUnIndexed !== KT.unIndexed || this.indexKey(kT) !== KT.indexData) return;
        if (KT.indexBuffer && KT.gpuVersion !== this.resources.gpuBuffersVersion) {
          const TT = this.resources.gpuBuffer(KT.indexData);
          if (!TT) return;
          KT.indexBuffer = TT, KT.gpuVersion = this.resources.gpuBuffersVersion
        }
        let CT = !1;
        if (fT.frame !== this.frame && (CT = this.modelUniforms.refreshModelUniforms(TT, fT, fT.model, this.view)), !this.bindMaterial(fT, CT) || !this.withGpuBuffers(MT) || !this.instanceBuffersFit(IT.name, MT, AT)) return null;
        const jT = this.makeDraw(yT, MT, this.renderStates.renderState(OT.model, IT, lT, MT.state), fT, AT);
        return this.setRange(jT, kT, KT.indexBuffer, KT.indexData), jT
      }
      retain(TT, kT) {
        const cT = this.drawDefines.drawStates.get(TT);
        if (!kT || !cT || cT.program !== kT.program) {
          const kT = this.inputs.get(TT);
          return void(kT && (kT.retained = null))
        }
        const lT = TT.owner,
          MT = cT.instancing,
          KT = this.indexKey(TT),
          OT = kT.inputs.retained;
        OT ? (OT.drawState = cT, OT.instancing = MT, OT.program = kT.program, OT.instance = kT.material, OT.indexData = KT, OT.unIndexed = lT.isUnIndexed, OT.indexBuffer = kT.indexBuffer, OT.gpuVersion = this.resources.gpuBuffersVersion) : kT.inputs.retained = {
          drawState: cT,
          instancing: MT,
          program: kT.program,
          instance: kT.material,
          indexData: KT,
          unIndexed: lT.isUnIndexed,
          indexBuffer: kT.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(TT, kT, cT, lT) {
        const MT = kT.owner,
          KT = wK(kT);
        if (!KT) return null;
        const OT = KT.getClassName();
        let yT = null;
        if (function(TT) {
            return "LinesMesh" === TT.getClassName()
          }(MT)) {
          if (! function(TT) {
              return "ShaderMaterial" === TT.getClassName() && "color" === TT.shaderPath
            }(KT)) return this.warnOnce(`lines:${OT}`, `A LinesMesh with a ${OT} is not drawn yet (${KT.name})`), null;
          yT = MT
        } else if ("StandardMaterial" !== OT && "LiteMaterial" !== OT) return this.warnOnce(`class:${OT}`, `${OT} is not drawn yet (${KT.name})`), null;
        const fT = kK(MT),
          xT = this.instanceCount(MT, fT);
        if (xT <= 0) return null;
        const IT = yT ? this.lineProgramFor(MT, cT, fT) : this.drawDefines.programFor(TT, kT, KT, cT, fT);
        if (!IT || IT.failed) return null;
        const AT = yT ? null : this.drawDefines.drawStates.get(kT).model,
          CT = AT ? this.modelInstance(AT, IT) : this.materialInstance(MT, IT);
        let jT = !1;
        if (CT.frame !== this.frame && (yT ? QT(CT.ubo, yT) : jT = this.modelUniforms.refreshModelUniforms(TT, CT, CT.model, this.view)), !this.bindMaterial(CT, jT)) return null;
        const vT = this.meshInputs(kT, IT, fT);
        if (!vT || !this.instanceBuffersFit(MT.name, vT, xT)) return null;
        const tT = this.indexKey(kT);
        let hT = null;
        if (tT && !MT.isUnIndexed && (hT = this.resources.gpuBuffer(tT), !hT)) return null;
        const NT = this.renderStates.renderState(null !== AT && void 0 !== AT ? AT : KT, MT, lT, vT.state, yT ? "line-list" : "triangle-list"),
          ST = this.makeDraw(IT, vT, NT, CT, xT);
        return this.setRange(ST, kT, hT, tT), ST
      }
      indexKey(TT) {
        const kT = KK(TT);
        return kT ? this.resources.modelIndex(kT) : null
      }
      setRange(TT, kT, cT, lT) {
        cT && (TT.indexBuffer = cT, TT.indexFormat = this.resources.indexFormat(lT));
        const MT = 4 * kT.range + (cT ? 0 : 2);
        TT.unit = kT, TT.first = kT.parts.qt[MT], TT.count = kT.parts.qt[MT + 1]
      }
      makeDraw(TT, kT, cT, lT, MT) {
        kT.state !== cT && (kT.state = cT, kT.pipelineKey = `${TT.id}|${kT.layout.key}|${cT.key}`, kT.pipeline = null);
        const KT = kT.draw ??= {
          program: TT,
          inputs: kT,
          pipelineKey: "",
          layout: kT.layout,
          state: cT,
          material: lT,
          slotOffset: 0,
          vertexBuffers: kT.buffers,
          vertexOffsets: kT.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: MT,
          unit: null
        };
        return KT.program = TT, KT.pipelineKey = kT.pipelineKey, KT.state = cT, KT.material = lT, KT.vertexOffsets = kT.offsets, KT.indexBuffer = null, KT.instances = MT, KT
      }
      instanceCount(TT, kT) {
        switch (kT) {
          case "thin":
            return TT.forcedInstanceCount || TT.w6;
          case "instanced":
            return this.prepareInstances(TT);
          case "none":
            return 1
        }
      }
      prepareInstances(TT) {
        const kT = function(TT, kT) {
          const cT = kT._userInstancedBuffersStorage,
            lT = TT.batchUploads.get(kT);
          if (lT) {
            var MT;
            if (lT.layout === (null !== (MT = null === cT || void 0 === cT ? void 0 : cT.interleavedKinds) && void 0 !== MT ? MT : null)) return lT;
            lT.release()
          }
          return new YT(TT, kT, cT)
        }(this.resources, TT);
        return kT.frame !== this.frame && kT.pack(TT, this.modelMeshes.instanceBatch(TT), this.modelMeshes.worlds, this.frame), kT.count
      }
      programWithModel(TT, kT, cT) {
        const lT = this.modelSlot(TT),
          MT = fK(lT, TT, cT),
          KT = this.drawDefines.modelPackKind(TT),
          OT = KT ? function(TT, kT, cT, lT) {
            const MT = (0, wT.x)(TT, rT.g.name),
              KT = [];
            for (const {
                feature: fT,
                state: xT,
                active: IT
              }
              of TT.features) {
              var OT, yT;
              const TT = IT ? null === (OT = (yT = (0, Ik.j)(fT)).Bj) || void 0 === OT ? void 0 : OT.call(yT, xT) : void 0;
              TT && KT.push(TT)
            }
            return {
              kind: kT,
              atlas: null !== MT && void 0 !== MT && MT.active ? (0, rT.c)(MT.state) : null,
              defines: cT,
              ...OO(KT, lT)
            }
          }(TT, KT, kT, lT.fragmentCode) : null;
        if (OT && function(TT) {
            const kT = TT.defines;
            return (null === TT.atlas || !!kT.DIFFUSE && 1 === kT.DIFFUSEDIRECTUV) && !!kT.NORMAL && !kT.REFLECTION && !kT.EMISSIVEASILLUMINATION && !kT.LINKEMISSIVEWITHDIFFUSE
          }(OT)) {
          const cT = this.modelPackProgram(TT, kT, `${MT}#${KT}#sp${this.drawDefines.modelPackVariant}`, lT, OT);
          if (cT && !cT.failed) return cT
        }
        const yT = this.programs.get(MT);
        if (yT || this.unbuildable.has(MT)) return null !== yT && void 0 !== yT ? yT : null;
        let fT;
        try {
          fT = fM({
            defines: lK(kT),
            vertexCode: lT.vertexCode,
            fragmentCode: lT.fragmentCode,
            pluginUniforms: lT.pluginUniforms
          })
        } catch (xT) {
          return this.unbuildable.add(MT), this.warnOnce(`build:${MT}`, `could not build a program for ${TT.name}: ${String(xT)}`), null
        }
        return this.createProgram(MT, fT, "standard")
      }
      modelPackProgram(TT, kT, cT, lT, MT) {
        const KT = this.programs.get(cT);
        if (KT || this.unbuildable.has(cT)) return null !== KT && void 0 !== KT ? KT : null;
        const OT = this.drawDefines.modelPackVariant;
        let yT;
        try {
          const TT = function(TT) {
              return (0, bk.b)(TT, "model")
            }(OT),
            cT = SO(TT, MT, lT.vertexCode, lT.fragmentCode);
          yT = rO(fM({
            defines: lK(kT),
            ...cT,
            pluginUniforms: lT.pluginUniforms
          }), TT, MT, !!this.sunShadow)
        } catch (IT) {
          return this.unbuildable.add(cT), this.warnOnce(`build:${cT}`, `could not build a shader pack program for ${TT.name}, which draws without the pack: ${String(IT)}`), null
        }
        const fT = dK(OT, !!this.sunShadow),
          xT = {
            group: this.packInputs.bindGroupFor(null, fT),
            layout: uK(this.device, {
              depth: !1,
              sunShadow: fT
            })
          };
        return this.createProgram(cT, yT, function(TT) {
          return `standard-sp${TT}`
        }(OT), xT)
      }
      lineProgramFor(TT, kT, cT) {
        const lT = NT(TT, cT, kT, this.view);
        let MT = this.linePrograms.get(lT);
        var KT;
        return MT || (MT = this.createProgram(`lines#${lT}`, (KT = function(TT) {
          const kT = new Map;
          for (let cT = 0; cT < xT.length; cT++) TT & 1 << cT && kT.set(xT[cT], !0);
          return kT
        }(lT), CM({
          defines: KT,
          vertex: IM,
          fragment: AM,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(lT, MT)), MT
      }
      createProgram(TT, kT, cT) {
        var lT;
        let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const KT = this.nextProgramId++,
          OT = `${cT}-${KT}`,
          yT = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          fT = [{
            binding: 0,
            visibility: yT,
            buffer: {
              type: "uniform"
            }
          }];
        for (const AT of kT.textures) fT.push({
          binding: AT.binding,
          visibility: yT,
          texture: {
            viewDimension: AT.dimension
          }
        }), fT.push({
          binding: AT.samplerBinding,
          visibility: yT,
          sampler: {}
        });
        const xT = this.device.createBindGroupLayout({
            label: OT,
            entries: fT
          }),
          IT = {
            key: TT,
            id: KT,
            kind: cT,
            program: kT,
            vertex: this.device.createShaderModule({
              label: `${OT}-vertex`,
              code: kT.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${OT}-fragment`,
              code: kT.fragment
            }),
            materialLayout: xT,
            pipelineLayout: this.device.createPipelineLayout({
              label: OT,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, xT, ...MT ? [MT.layout] : []]
            }),
            packGroup: null !== (lT = null === MT || void 0 === MT ? void 0 : MT.group) && void 0 !== lT ? lT : null,
            failed: !1
          };
        return this.programs.set(TT, IT), IT
      }
      writeFrameUniforms() {
        const TT = this.frameUniforms;
        tK(this.view, TT), this.device.queue.writeBuffer(this.frameBuffer, 0, TT)
      }
      materialInstance(TT, kT) {
        let cT = this.materials.get(TT);
        if (!cT) {
          const kT = new Map;
          this.materials.set(TT, kT), TT.QJ.addOnce((() => {
            for (const TT of kT.values()) TT.released = !0, this.resources.destroyBuffer(TT.buffer);
            this.materials.delete(TT)
          })), cT = kT
        }
        let lT = cT.get(kT.key);
        return lT || (lT = this.newMaterialInstance(TT, null, kT), cT.set(kT.key, lT)), lT
      }
      modelInstance(TT, kT) {
        const cT = this.modelSlot(TT);
        let lT = cT.instances.get(kT.key);
        return lT || (lT = this.newMaterialInstance(TT, TT, kT), cT.instances.set(kT.key, lT)), lT
      }
      modelSlot(TT) {
        let kT = TT.gpu[bT.g.lite];
        return kT || (kT = new wO(this.resources), TT.gpu[bT.g.lite] = kT), kT
      }
      newMaterialInstance(TT, kT, cT) {
        const lT = cT.program.material.floats,
          MT = new Float32Array(lT),
          KT = new Map;
        return {
          owner: TT,
          model: kT,
          program: cT,
          data: MT,
          uploaded: new Float32Array(lT).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${TT.name}-uniforms`,
            size: Math.max(16, 4 * lT),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: KT,
          ubo: new vK(cT.program.material.slots, MT, KT),
          bindGroup: null,
          bound: new Array(2 * cT.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(TT) {
        var kT;
        const cT = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: NM + QM,
            fragment: NM + SM,
            attributes: [],
            material: hM,
            textures: []
          }, "earthSky"),
          lT = this.earthSkyUniforms ??= this.newMaterialInstance(PO, null, cT);
        this.earthSkyFrom !== TT && (this.earthSkyFrom = TT, lT.data.fill(0)), bM(lT.ubo, TT, this.view);
        const MT = this.vertexInputs(cT, PO, "earthSky", cT, null);
        if (cT.failed || !MT || !this.bindMaterial(lT, !1)) return;
        const KT = null !== (kT = MT.state) && void 0 !== kT ? kT : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          OT = this.makeDraw(cT, MT, KT, lT, 1);
        OT.count = jM.length;
        const yT = zM(TT, this.view);
        OT.slotOffset = this.writeMeshSlot(yT, 1), this.lists.skyDraws.push(OT)
      }
      uploadIfChanged(TT) {
        const {
          data: kT,
          uploaded: cT
        } = TT;
        for (let lT = 0; lT < kT.length; lT++)
          if (kT[lT] !== cT[lT]) return cT.set(kT), void this.device.queue.writeBuffer(TT.buffer, 0, kT)
      }
      bindMaterial(TT, kT) {
        return TT.frame !== this.frame && (TT.frame = this.frame, kT || this.uploadIfChanged(TT), TT.bindable = this.bindTextures(TT)), TT.bindable
      }
      bindTextures(TT) {
        const {
          program: kT,
          bound: cT
        } = TT, lT = kT.program.textures;
        let MT = !TT.bindGroup,
          KT = !0;
        for (let OT = 0; OT < lT.length; OT++) {
          const kT = TT.textures.get(lT[OT].name),
            yT = kT ? this.resources.boundTexture(kT) : null;
          yT ? cT[2 * OT] === yT.view && cT[2 * OT + 1] === yT.sampler || (cT[2 * OT] = yT.view, cT[2 * OT + 1] = yT.sampler, MT = !0) : (kT || TT.ubo.expected.has(lT[OT].name) || this.warnOnce(`texture:${TT.owner.name}:${lT[OT].name}`, `${TT.owner.name} has no ${lT[OT].name}`), KT = !1)
        }
        if (!KT) return MT && (TT.bindGroup = null), !1;
        if (MT) {
          const MT = [{
            binding: 0,
            resource: {
              buffer: TT.buffer
            }
          }];
          for (let TT = 0; TT < lT.length; TT++) MT.push({
            binding: lT[TT].binding,
            resource: cT[2 * TT]
          }), MT.push({
            binding: lT[TT].samplerBinding,
            resource: cT[2 * TT + 1]
          });
          TT.bindGroup = this.device.createBindGroup({
            label: `${TT.owner.name}-material`,
            layout: kT.materialLayout,
            entries: MT
          })
        }
        return !0
      }
      writeMeshSlot(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, TT, kT, cT), this.slotCount++ * Ll
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(TT, kT, cT, lT, MT) {
        let KT = this.inputs.get(TT);
        if (!KT || KT.program !== lT || !aK(kT, KT, this.resources, MT)) {
          var OT;
          if (KT = null !== (OT = this.vertexLayouts.resolveInputs(kT, cT, lT, MT)) && void 0 !== OT ? OT : void 0, !KT) return null;
          this.inputs.set(TT, KT)
        }
        return this.withGpuBuffers(KT)
      }
      meshInputs(TT, kT, cT) {
        const lT = this.inputs.get(TT);
        if (lT && this.inputsStamped(lT, TT, cT, kT)) return this.withGpuBuffers(lT);
        const MT = TT.owner,
          KT = KK(TT),
          OT = this.vertexInputs(TT, MT, MT.name, kT, KT);
        return OT && (OT.geometry = OK(TT), OT.instanceLayout = this.drawDefines.instanceLayout(MT, cT)), OT
      }
      inputsStamped(TT, kT, cT, lT) {
        return function(TT, kT, cT, lT) {
          return TT.program === cT && TT.geometry === OK(kT) && TT.instanceLayout === lT
        }(TT, kT, lT, this.drawDefines.instanceLayout(kT.owner, cT))
      }
      withGpuBuffers(TT) {
        return gK(TT, this.resources, this.zeroBuffer) ? TT : null
      }
      instanceBuffersFit(TT, kT, cT) {
        const lT = YK(kT, cT, this.resources, this.zeroBuffer);
        if (lT) {
          const MT = kT.ends[lT.index] - kT.offsets[lT.index] + kT.M6[lT.index];
          return this.warnOnce(`overrun:${TT}`, `${TT} draws ${cT} instances from a ${MT}-byte buffer (${lT.needed} needed)`), !1
        }
        return !0
      }
      createBinding(TT, kT, cT, lT) {
        const MT = `${kT._colorFormat}|${kT._depthStencilFormat}|${kT._depthCompare}|${kT._sampleCount}`,
          KT = Ok(this.device, kT);
        if (TT === this.skyLastRenderable) {
          let cT = null;
          return {
            renderable: TT,
            pipeline: KT,
            draw: TT => cT ? this.drawSky(TT, kT, MT, cT) : 0,
            update: TT => {
              cT = TT
            }
          }
        }
        return {
          renderable: TT,
          pipeline: KT,
          draw: TT => (lT ? lT.execute(TT, kT, MT) : 0) + this.drawList(TT, kT, MT, cT)
        }
      }
      drawSky(TT, kT, cT, lT) {
        const MT = this.lists.skyDraws,
          KT = MT.length > 0;
        if (KT) {
          var OT;
          const cT = (null !== (OT = kT._depthCompare) && void 0 !== OT ? OT : ck).startsWith("greater") ? 0 : 1;
          TT.setViewport(0, 0, lT.targetWidth, lT.targetHeight, cT, cT)
        }
        const yT = this.drawList(TT, kT, cT, MT);
        return KT && TT.setViewport(0, 0, lT.targetWidth, lT.targetHeight, 0, 1), yT
      }
      drawList(TT, kT, cT, lT) {
        let MT = 0;
        const KT = this.binder;
        KT.reset();
        for (const OT of lT) {
          const lT = this.pipelineFor(OT, kT, cT);
          lT && (KT.bind(TT, OT, lT, this.meshSlots.bindGroup, OT.slotOffset), OT.indexBuffer ? TT.drawIndexed(OT.count, OT.instances, OT.first, 0, 0) : TT.draw(OT.count, OT.instances, OT.first, 0), MT++)
        }
        return MT
      }
      pipelineFor(TT, kT, cT) {
        var lT, MT;
        if (TT.program.failed) return null;
        const KT = TT.inputs;
        if (KT.pipeline && KT.pipelineTarget === cT) return KT.pipeline;
        const OT = `${TT.pipelineKey}|${cT}`,
          yT = this.pipelines.get(OT);
        if (void 0 !== yT) return yT && (KT.pipeline = yT, KT.pipelineTarget = cT), yT || null;
        this.pipelines.set(OT, null);
        const {
          program: fT,
          layout: xT,
          state: IT
        } = TT, AT = {
          label: `standard-${fT.id}`,
          layout: fT.pipelineLayout,
          vertex: {
            module: fT.vertex,
            entryPoint: "main",
            buffers: xT.buffers
          },
          fragment: iT({
            module: fT.fragment,
            entryPoint: "main"
          }, kT, IT.blend, IT.colourWrite),
          depthStencil: kT._depthStencilFormat ? {
            format: kT._depthStencilFormat,
            depthCompare: null !== (lT = null !== (MT = IT.depthCompare) && void 0 !== MT ? MT : kT._depthCompare) && void 0 !== lT ? lT : ck,
            depthWriteEnabled: IT.depthWrite,
            depthBias: IT.depthBias,
            depthBiasSlopeScale: IT.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: kT._sampleCount
          },
          primitive: {
            topology: IT.topology,
            frontFace: IT.frontFace,
            cullMode: IT.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(AT).then((TT => {
          this.compiling--, this.pipelines.set(OT, TT)
        }), (TT => {
          this.compiling--, this.reportFailure(fT, OT, TT)
        })), null
      }
      forEachSunShadowCaster(TT) {
        const kT = this.caster,
          cT = (cT, lT, MT) => {
            const KT = cT.unit && function(TT) {
              const kT = TT.material.model;
              return null !== kT && (kT.lifeform || kT.item) && kT.castsSunShadow && "triangle-list" === TT.state.topology
            }(cT) ? KK(cT.unit) : null;
            if (!KT) return;
            const OT = cT.unit.owner;
            switch (kT.geometry = KT, kT.skip = OT.noSunShadowVertices, kT.indexed = null !== cT.indexBuffer, kT.first = cT.first, kT.count = cT.count, kT.pA = lT, kT.worldAt = MT, kT.instances = null, kT.instanceCount = 1, kT.thin = !1, kK(OT)) {
              case "thin": {
                const TT = OT._thinInstanceDataStorage.matrixData;
                if (!TT) return;
                kT.instances = TT, kT.instanceCount = Math.min(cT.instances, TT.length / 16), kT.thin = !0;
                break
              }
              case "instanced": {
                const TT = this.resources.batchUploads.get(OT);
                if (!TT || TT.frame !== this.frame || !this.writeBatchCasters(TT)) return;
                break
              }
            }
            TT(kT)
          };
        for (const lT of this.lists.opaqueDraws) cT(lT, this.meshSlots.data, lT.slotOffset / 4);
        this.thinBundle.forEachDrawn(cT)
      }
      writeBatchCasters(TT) {
        const {
          caster: kT
        } = this, cT = TT.packedMatrices, lT = TT.count;
        kT.instances = cT, kT.instanceCount = lT;
        let MT = -1;
        for (let KT = 0; KT < lT; KT++) {
          const kT = zO(TT.packedRowMesh(KT));
          kT && MT < 0 ? (this.casterWorlds.length < 16 * lT && (this.casterWorlds = new Float32Array(cT.length)), this.casterWorlds.set(cT.subarray(0, 16 * KT)), MT = KT) : !kT && MT >= 0 && (this.casterWorlds.set(cT.subarray(16 * KT, 16 * KT + 16), 16 * MT), MT++)
        }
        return MT >= 0 && (kT.instances = this.casterWorlds, kT.instanceCount = MT), kT.instanceCount > 0
      }
      async reportFailure(TT, kT, cT) {
        const lT = [];
        let MT = !0;
        for (const [KT, OT] of [
            ["vertex", TT.vertex],
            ["fragment", TT.fragment]
          ]) {
          const TT = await OT.getCompilationInfo();
          for (const kT of TT.messages) MT &&= "error" !== kT.type, lT.push(`${KT}:${kT.lineNum}:${kT.linePos} ${kT.type}: ${kT.message}`)
        }
        if (MT && !TT.packGroup) return this.pipelines.set(kT, !1), console.error(`Lite: pipeline ${kT} failed`, cT), void WM("mesh", TT.kind, cT);
        TT.failed || (TT.failed = !0, console.error(`Lite: program ${TT.id} failed`, cT, lT.join("\n"), {
          program: TT.program,
          key: TT.key
        }), WM("mesh", TT.kind, cT, MT ? null : lT[0]))
      }
    }

    function zO(TT) {
      var kT, cT;
      const lT = null === (kT = TT.xH) || void 0 === kT || null === (cT = kT.aShaderPackItem) || void 0 === cT ? void 0 : cT.x;
      return void 0 !== lT && 0 !== (lT & fk.h)
    }
    var JO = cT(41271),
      oO = cT(41274),
      HO = cT(41277),
      eO = cT(41233);
    const GO = [0, 3, 1, 4, 2, 5];

    function VO(TT, kT, cT, lT, MT) {
      const KT = cT[0].width;
      try {
        return MT ? function(TT, kT, cT) {
          const lT = (0, eO.d)(TT, cT, cT, 6);
          for (let MT = 0; MT < 6; MT++)(0, eO.g)(TT, lT, MT, kT[GO[MT]], {
            invertY: !1
          });
          return lT.texture
        }(TT, cT, KT) : function(TT, kT, cT, lT) {
          const MT = TT.createTexture({
            label: "sink-cube",
            size: {
              width: cT,
              height: cT,
              depthOrArrayLayers: 6
            },
            format: lT,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let KT = 0; KT < 6; KT++) TT.queue.copyExternalImageToTexture({
            source: kT[GO[KT]]
          }, {
            texture: MT,
            origin: {
              x: 0,
              y: 0,
              z: KT
            }
          }, {
            width: cT,
            height: cT
          });
          return MT
        }(kT, cT, KT, 1 === lT ? "r8unorm" : "rgba8unorm")
      } finally {
        EO(cT)
      }
    }

    function EO(TT) {
      for (const kT of null !== TT && void 0 !== TT ? TT : []) null === kT || void 0 === kT || kT.close()
    }
    async function ZO(TT) {
      const kT = [],
        cT = [];
      if (await Promise.all(TT.map(((TT, lT) => (kT[lT] = null, TT.then((TT => {
          kT[lT] = TT
        }), (TT => {
          cT.push(TT)
        })))))), cT.length > 0) throw EO(kT), cT[0];
      return kT
    }
    class uO {
      constructor(TT) {
        this.DA = TT, this.starts = [], this.lengths = [], this.used = 0, TT > 0 && (this.starts.push(0), this.lengths.push(TT))
      }
      allocate(TT) {
        const {
          starts: kT,
          lengths: cT
        } = this;
        for (let lT = 0; lT < kT.length; lT++) {
          if (cT[lT] < TT) continue;
          const MT = kT[lT];
          return cT[lT] === TT ? (kT.splice(lT, 1), cT.splice(lT, 1)) : (kT[lT] += TT, cT[lT] -= TT), this.used += TT, MT
        }
        return -1
      }
      free(TT, kT) {
        this.used -= kT;
        const cT = Math.min(TT + kT, this.DA);
        cT > TT && this.release(TT, cT - TT)
      }
      grow(TT) {
        const kT = this.DA;
        this.DA = TT, this.release(kT, TT - kT)
      }
      truncate(TT) {
        const {
          starts: kT,
          lengths: cT
        } = this;
        for (let lT = kT.length - 1; lT >= 0 && kT[lT] + cT[lT] > TT; lT--) kT[lT] >= TT ? (kT.splice(lT, 1), cT.splice(lT, 1)) : cT[lT] = TT - kT[lT];
        this.DA = TT
      }
      release(TT, kT) {
        const {
          starts: cT,
          lengths: lT
        } = this;
        let MT = 0,
          KT = cT.length;
        for (; MT < KT;) {
          const kT = MT + KT >> 1;
          cT[kT] < TT ? MT = kT + 1 : KT = kT
        }
        const OT = MT,
          yT = OT > 0 && cT[OT - 1] + lT[OT - 1] === TT,
          fT = OT < cT.length && TT + kT === cT[OT];
        yT && fT ? (lT[OT - 1] += kT + lT[OT], cT.splice(OT, 1), lT.splice(OT, 1)) : yT ? lT[OT - 1] += kT : fT ? (cT[OT] = TT, lT[OT] += kT) : (cT.splice(OT, 0, TT), lT.splice(OT, 0, kT))
      }
    }
    const XO = 256;
    class dO {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = TT, this.onReplaced = kT, this.mergeGap = cT, this.gpu = null, this.bytes = void 0, this.qt = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const MT = Math.max(XO, Math.ceil(lT / XO) * XO);
        this.bytes = new Uint8Array(MT), this.qt = new uO(MT / XO)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(TT) {
        return Math.max(1, Math.ceil(TT / XO)) * XO
      }
      allocate(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT;
        const lT = dO.slotBytes(TT),
          MT = lT / XO;
        let KT = this.qt.allocate(MT);
        KT < 0 && (this.grow(this.qt.DA + MT), KT = this.qt.allocate(MT));
        const OT = KT * XO;
        return this.growTo(OT + Math.max(cT, lT)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, OT, OT + lT), kT && this.bytes.set(new Uint8Array(kT.buffer, kT.byteOffset, Math.min(kT.byteLength, lT)), OT), this.markDirty(OT, OT + lT), OT
      }
      growTo(TT) {
        const kT = Math.ceil(TT / XO);
        kT > this.qt.DA && this.grow(kT)
      }
      free(TT, kT) {
        this.freed.push(TT, kT)
      }
      write(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (lT <= 0) return;
        this.bytes.set(new Uint8Array(kT.buffer, cT, lT), TT);
        let KT = TT + lT;
        if (MT) {
          const kT = TT + 4 * Math.ceil(lT / 4);
          this.bytes.fill(0, KT, kT), KT = kT
        }
        this.markDirty(TT, KT)
      }
      move(TT, kT, cT) {
        this.bytes.copyWithin(kT, TT, TT + cT), this.markDirty(kT, kT + cT)
      }
      flush() {
        for (const kT of this.retired) this.onReplaced(kT), kT.destroy();
        this.retired.length = 0;
        const TT = this.dirtyStarts.length;
        if (TT > 0) {
          const {
            dirtyStarts: kT,
            dirtyEnds: cT,
            order: lT
          } = this;
          lT.length = TT;
          for (let yT = 0; yT < TT; yT++) lT[yT] = yT;
          TT > 1 && lT.sort(((TT, cT) => kT[TT] - kT[cT]));
          const MT = this.mergeGap;
          let KT = kT[lT[0]],
            OT = cT[lT[0]];
          for (let yT = 1; yT < TT; yT++) {
            const TT = lT[yT];
            kT[TT] - OT <= MT ? OT = Math.max(OT, cT[TT]) : (this.send(KT, OT), KT = kT[TT], OT = cT[TT])
          }
          this.send(KT, OT), kT.length = 0, cT.length = 0
        }
        this.holding = !1
      }
      qN() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const TT = this.freed;
        for (let kT = 0; kT < TT.length; kT += 2) this.qt.free(TT[kT] / XO, TT[kT + 1] / XO);
        TT.length = 0
      }
      send(TT, kT) {
        this.device.queue.writeBuffer(this.gpu, TT, this.bytes.buffer, TT, kT - TT);
        for (const cT of this.replaced) {
          const lT = Math.min(kT, cT.size);
          lT > TT && this.device.queue.writeBuffer(cT, TT, this.bytes.buffer, TT, lT - TT)
        }
      }
      markDirty(TT, kT) {
        TT &= -4, kT = kT + 3 & -4, this.holding ? (this.dirtyStarts.push(TT), this.dirtyEnds.push(kT)) : this.send(TT, kT)
      }
      grow(TT) {
        const kT = this.qt.DA,
          cT = Math.max(2 * kT, TT),
          lT = new Uint8Array(cT * XO);
        lT.set(this.bytes);
        const MT = this.gpu;
        this.gpu = this.createGpu(lT.byteLength), this.bytes = lT, this.qt.grow(cT), MT && (this.replaced.push(MT), this.onReplaced(MT)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, kT * XO)
      }
      createGpu(TT) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: TT,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function LO(TT) {
      return Array.isArray(TT) ? new Float32Array(TT) : TT
    }

    function RO(TT, kT, cT, lT, MT) {
      const KT = oM(MT),
        OT = Math.min(MT, lT.byteLength);
      if (KT === OT && lT.byteOffset % 4 === 0) return void TT.queue.writeBuffer(kT, cT, lT.buffer, lT.byteOffset, KT);
      const yT = new Uint8Array(KT);
      yT.set(new Uint8Array(lT.buffer, lT.byteOffset, OT)), TT.queue.writeBuffer(kT, cT, yT)
    }

    function gO(TT, kT, cT) {
      const lT = "linear",
        MT = "nearest";
      let KT = MT,
        OT = MT,
        yT = "nearest",
        fT = !kT;
      switch (TT) {
        case 11:
          KT = lT, OT = lT;
          break;
        case 3:
          KT = lT, OT = lT, yT = kT ? "linear" : "nearest";
          break;
        case 8:
          yT = kT ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          OT = lT;
          break;
        case 6:
          OT = lT, yT = kT ? "linear" : "nearest";
          break;
        case 7:
          OT = lT, fT = !0;
          break;
        case 9:
          KT = lT;
          break;
        case 10:
          KT = lT, yT = kT ? "linear" : "nearest";
          break;
        case 2:
          KT = lT, OT = lT, cT > 1 ? (yT = "linear", fT = !1) : fT = !0;
          break;
        case 12:
          KT = lT, fT = !0;
          break;
        default:
          fT = !0
      }
      return cT > 1 && !fT ? {
        magFilter: lT,
        minFilter: lT,
        mipmapFilter: "linear",
        maxAnisotropy: cT
      } : {
        magFilter: KT,
        minFilter: OT,
        mipmapFilter: yT,
        ...fT ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function UO(TT) {
      return 0 === TT ? "clamp-to-edge" : 2 === TT ? "mirror-repeat" : "repeat"
    }
    class YO {
      constructor(TT, kT) {
        let {
          vertexArena: cT = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = TT, this.device = kT, this.buffers = new WeakMap, this.Aq = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = cT ? new dO(kT, (TT => {
          var kT;
          null === (kT = this.onDestroy) || void 0 === kT || kT.call(this, TT), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var TT;
        null === (TT = this.arena) || void 0 === TT || TT.flush()
      }
      endUploadFrame() {
        var TT;
        null === (TT = this.arena) || void 0 === TT || TT.qN()
      }
      vertexBufferCreated(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cT ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(TT);
        const MT = LO(kT);
        TT.DA = MT.byteLength, this.buffers.set(TT, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: cT && null !== this.arena,
          pending: MT,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: lT
        })
      }
      vertexBufferUpdated(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        const MT = this.buffers.get(TT);
        if (!MT) return;
        const KT = LO(kT),
          OT = void 0 === lT ? KT.byteLength : Math.min(lT, KT.byteLength);
        this.update(MT, KT, cT, OT)
      }
      vertexBufferFloatsUpdated(TT, kT, cT, lT) {
        const MT = this.buffers.get(TT);
        if (!MT) return;
        const KT = cT * Float32Array.BYTES_PER_ELEMENT,
          OT = (lT - cT) * Float32Array.BYTES_PER_ELEMENT;
        MT.slot >= 0 && OT > 0 && KT + OT <= MT.size ? this.writeSlot(MT, KT, kT, kT.byteOffset + KT, OT, !1) : MT.gpu && OT > 0 && KT + OT <= MT.gpu.size ? this.device.queue.writeBuffer(MT.gpu, KT, kT.buffer, kT.byteOffset + KT, OT) : this.update(MT, kT.subarray(cT, lT), KT, OT)
      }
      indexBufferCreated(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(TT);
        const lT = function(TT) {
          if (TT instanceof Uint16Array || TT instanceof Uint32Array) return TT;
          for (let kT = 0; kT < TT.length; kT++)
            if (TT[kT] >= 65535) return new Uint32Array(TT);
          return new Uint16Array(TT)
        }(kT);
        TT.is32Bits = 4 === lT.BYTES_PER_ELEMENT, TT.DA = lT.byteLength, this.buffers.set(TT, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: lT,
          ownsPending: lT !== kT,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: cT
        })
      }
      bufferDeleted(TT) {
        const kT = this.buffers.get(TT);
        null !== kT && void 0 !== kT && kT.gpu ? (this.destroyBuffer(kT.gpu), this.gpuBuffersVersion++) : kT && kT.slot >= 0 && (this.arena.free(kT.slot, kT.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(TT)
      }
      update(TT, kT, cT, lT) {
        if (TT.slot >= 0) this.updateSlot(TT, kT, cT, lT);
        else if (TT.gpu) {
          if (cT + oM(lT) > TT.gpu.size) {
            const kT = this.device.createBuffer({
                label: TT.label,
                size: oM(Math.max(2 * TT.gpu.size, cT + lT)),
                usage: TT.usage | GPUBufferUsage.COPY_SRC
              }),
              MT = this.device.createCommandEncoder();
            MT.copyBufferToBuffer(TT.gpu, 0, kT, 0, TT.gpu.size), this.device.queue.submit([MT.finish()]), this.destroyBuffer(TT.gpu), this.gpuBuffersVersion++, TT.gpu = kT
          }
          RO(this.device, TT.gpu, cT, kT, lT)
        } else {
          const KT = new Uint8Array(kT.buffer, kT.byteOffset, lT),
            OT = TT.pending;
          if (OT && TT.ownsPending && cT + lT <= OT.byteLength) new Uint8Array(OT.buffer, OT.byteOffset, OT.byteLength).set(KT, cT);
          else if (OT && 0 === cT && lT === OT.byteLength && kT.byteLength === lT) TT.pending = kT, TT.ownsPending = !1;
          else {
            var MT;
            const kT = new Uint8Array(Math.max(null !== (MT = null === OT || void 0 === OT ? void 0 : OT.byteLength) && void 0 !== MT ? MT : 0, cT + lT));
            OT && kT.set(new Uint8Array(OT.buffer, OT.byteOffset, OT.byteLength)), kT.set(KT, cT), TT.pending = kT, TT.ownsPending = !0
          }
        }
      }
      updateSlot(TT, kT, cT, lT) {
        const MT = this.arena;
        cT + oM(lT) > TT.size && (TT.size = oM(Math.max(2 * TT.size, cT + lT)), MT.growTo(TT.slot + TT.size), this.gpuBuffersVersion++), 0 === lT ? this.writeSlot(TT, cT, WO, 0, 4, !1) : this.writeSlot(TT, cT, kT, kT.byteOffset, lT, !0)
      }
      writeSlot(TT, kT, cT, lT, MT, KT) {
        const OT = kT + (KT ? oM(MT) : MT);
        OT > TT.slotBytes && this.moveSlot(TT, OT), this.arena.write(TT.slot + kT, cT, lT, MT, KT)
      }
      moveSlot(TT, kT) {
        const cT = this.arena,
          lT = dO.slotBytes(Math.max(kT, Math.min(2 * TT.slotBytes, TT.size))),
          MT = cT.allocate(lT, null, TT.size);
        cT.move(TT.slot, MT, TT.slotBytes), cT.free(TT.slot, TT.slotBytes), TT.slot = MT, TT.slotBytes = lT, this.gpuBuffersVersion++
      }
      cover(TT, kT) {
        const cT = this.buffers.get(TT);
        if (!cT || cT.slot < 0) return !1;
        const lT = Math.min(kT, cT.size);
        return !(lT <= cT.slotBytes) && (this.moveSlot(cT, lT), !0)
      }
      destroyBuffer(TT) {
        var kT;
        null === (kT = this.onDestroy) || void 0 === kT || kT.call(this, TT), TT.destroy()
      }
      gpuBuffer(TT) {
        const kT = this.buffers.get(TT);
        if (!kT) return null;
        if (kT.slot >= 0) return this.arena.buffer;
        if (kT.arena && kT.pending) {
          const TT = kT.pending,
            cT = this.arena;
          return kT.size = oM(TT.byteLength), kT.slotBytes = dO.slotBytes(function(TT) {
            const kT = new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength);
            let cT = kT.length;
            if (TT.byteOffset % 4 === 0) {
              for (; cT % 4 !== 0 && 0 === kT[cT - 1];) cT--;
              if (cT % 4 === 0) {
                const kT = new Uint32Array(TT.buffer, TT.byteOffset, cT / 4);
                let lT = kT.length;
                for (; lT > 0 && 0 === kT[lT - 1];) lT--;
                cT = 4 * lT
              }
            }
            for (; cT > 0 && 0 === kT[cT - 1];) cT--;
            return cT
          }(TT)), kT.slot = cT.allocate(kT.slotBytes, TT, kT.size), kT.pending = null, cT.buffer
        }
        if (!kT.gpu && kT.pending) {
          const TT = kT.pending;
          kT.gpu = this.device.createBuffer({
            label: kT.label,
            size: oM(TT.byteLength),
            usage: kT.usage
          }), RO(this.device, kT.gpu, 0, TT, TT.byteLength), kT.pending = null
        }
        return kT.gpu
      }
      gpuOffset(TT) {
        var kT, cT;
        const lT = null !== (kT = null === (cT = this.buffers.get(TT)) || void 0 === cT ? void 0 : cT.slot) && void 0 !== kT ? kT : -1;
        return lT < 0 ? 0 : lT
      }
      gpuEnd(TT) {
        var kT, cT;
        const lT = this.buffers.get(TT);
        return lT ? lT.slot >= 0 ? lT.slot + lT.size : null !== (kT = null === (cT = lT.gpu) || void 0 === cT ? void 0 : cT.size) && void 0 !== kT ? kT : 0 : 0
      }
      vertexInput(TT, kT, cT) {
        var lT, MT, KT, OT;
        return null !== (lT = null !== (MT = cT && this.modelInput(cT, kT)) && void 0 !== MT ? MT : null === (KT = null !== (OT = this.Aq.get(TT)) && void 0 !== OT ? OT : this.batchUploads.get(TT)) || void 0 === KT ? void 0 : KT.inputs[kT]) && void 0 !== lT ? lT : null
      }
      modelInput(TT, kT) {
        const cT = this.geometrySlot(TT);
        let lT = cT.inputs.get(kT);
        if (void 0 === lT) {
          const MT = TT.vertexAttributes.find((TT => TT.kind === kT));
          lT = MT ? new BT(this.modelKey(cT, MT.data, !1), MT.offset, MT.stride, MT.components, !1, MT.glType, MT.isNormalized) : null, cT.inputs.set(kT, lT)
        }
        return lT
      }
      modelIndex(TT) {
        return TT.indexData && this.modelKey(this.geometrySlot(TT), TT.indexData, !0)
      }
      geometrySlot(TT) {
        let kT = TT.gpu[bT.g.lite];
        if (!kT) {
          const cT = new Map,
            lT = () => {
              for (const TT of cT.values()) this.bufferDeleted(TT)
            },
            MT = TT => {
              const kT = cT.get(TT);
              kT && this.vertexBufferUpdated(kT, TT)
            };
          kT = {
            keys: cT,
            inputs: new Map,
            release: lT,
            updated: MT
          }, TT.gpu[bT.g.lite] = kT
        }
        return kT
      }
      modelKey(TT, kT, cT) {
        let lT = TT.keys.get(kT);
        if (!lT) {
          if (cT) {
            const TT = {
              DA: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(TT, kT, "model-indices"), lT = TT
          } else lT = {
            DA: 0
          }, this.vertexBufferCreated(lT, kT, !1, "model-vertices");
          TT.keys.set(kT, lT)
        }
        return lT
      }
      indexFormat(TT) {
        return TT.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(TT, kT) {
        --TT.refs > 0 || (this.releaseTexture(TT), EO(TT.images), null !== kT && this.textures.delete(kT))
      }
      load(TT, kT) {
        const cT = kT.decoded = async function(TT) {
          if ("cube" === TT.kind) return async function(TT) {
            if (6 !== TT.length) throw new Error(`${TT.length} files where six faces were expected`);
            const kT = await ZO(TT.map((TT => ZM(TT)))),
              cT = kT[0].width;
            return ZO(kT.map((async TT => {
              if (TT.width === cT && TT.height === cT) return TT;
              try {
                return await createImageBitmap(TT, {
                  ...VM,
                  resizeWidth: cT,
                  resizeHeight: cT
                })
              } finally {
                TT.close()
              }
            })))
          }(TT.files);
          if ("data" === TT.kind && TT.data) return [await createImageBitmap(new Blob([TT.data]), VM)];
          return [await ZM(BO(TT))]
        }(TT.source).then((TT => {
          0 === kT.refs ? EO(TT) : kT.images = TT
        }));
        this.track(kT, BO(TT.source), cT, (() => {
          kT.wanted && !kT.failed && kT.refs > 0 && this.upload(TT, kT)
        }))
      }
      canvasUpdated(TT, kT, cT) {
        const {
          state: lT
        } = this.textureSlot(TT);
        lT.dynamicSource = {
          invertY: kT,
          premultiplied: cT
        }, lT.dynamic && this.pushDynamic(TT.source, lT)
      }
      async atlasArray(TT, kT, cT) {
        const lT = await dM(this.device, TT, kT, cT);
        if (!this.atlasBindings.has(lT)) {
          const TT = (0, JO.b)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(lT, {
            view: lT.texture.createView({
              dimension: "2d-array"
            }),
            sampler: TT
          })
        }
        return lT
      }
      boundTexture(TT) {
        const kT = this.atlasBindings.get(TT);
        if (kT) return kT;
        const cT = TT;
        if (cT.released) return null;
        const lT = this.textureSlot(cT, !0),
          {
            state: MT
          } = lT;
        if (!MT.view && (MT.wanted = !0, MT.loading || MT.failed || this.upload(cT, MT), !MT.view)) return null;
        const KT = this.chosenSampler(cT, lT),
          OT = lT.bound;
        return OT && OT.view === MT.view && OT.sampler === KT ? OT : (lT.bound = {
          view: MT.view,
          sampler: KT
        }, lT.bound)
      }
      textureLoaded(TT) {
        var kT, cT;
        return null !== (kT = null === (cT = TT.gpu[bT.g.lite]) || void 0 === cT ? void 0 : cT.state.decoded) && void 0 !== kT ? kT : null
      }
      textureFailed(TT) {
        var kT;
        return !0 === (null === (kT = TT.gpu[bT.g.lite]) || void 0 === kT ? void 0 : kT.state.failed)
      }
      chosenSampler(TT, kT) {
        const {
          samplingMode: cT,
          wrapU: lT,
          wrapV: MT
        } = TT.sampler, KT = kT.state.hasMips, OT = function(TT, kT) {
          const {
            bilinear: cT,
            trilinear: lT
          } = bT.i;
          return !kT && TT !== cT || 11 !== TT && TT !== lT && TT !== cT ? 1 : 4
        }(cT, KT), yT = kT.sampler;
        if (yT && yT.samplingMode === cT && yT.hasMips === KT && yT.anisotropy === OT && yT.wrapU === lT && yT.wrapV === MT) return yT.sampler;
        const fT = this.samplerFor(cT, KT, OT, lT, MT);
        return kT.sampler = {
          samplingMode: cT,
          hasMips: KT,
          anisotropy: OT,
          wrapU: lT,
          wrapV: MT,
          sampler: fT
        }, fT
      }
      releaseTexture(TT) {
        var kT, cT;
        TT.view && (null === (cT = this.onDestroy) || void 0 === cT || cT.call(this, TT.view));
        null === (kT = TT.destroy) || void 0 === kT || kT.call(TT)
      }
      textureSlot(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = TT.gpu[bT.g.lite];
        if (cT) return cT;
        const lT = function(TT) {
          let {
            source: kT,
            sampler: cT
          } = TT;
          return "canvas" === kT.kind ? null : `${kT.kind}|${BO(kT)}|${cT.noMipmap}|${cT.samplingMode}|${cT.invertY}`
        }(TT);
        let MT = null === lT ? void 0 : this.textures.get(lT);
        MT || (MT = {
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
        }, null !== lT && (this.textures.set(lT, MT), this.load(TT, MT), kT && this.firstBindDecodes++)), MT.refs++;
        const KT = MT,
          OT = {
            state: MT,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(KT, lT)
            }
          };
        return TT.gpu[bT.g.lite] = OT, OT
      }
      samplerFor(TT, kT, cT, lT, MT) {
        const KT = `${TT}|${kT}|${cT}|${lT}|${MT}`;
        let OT = this.samplers.get(KT);
        if (!OT) {
          const yT = {
            ...gO(TT, kT, cT),
            addressModeU: UO(lT),
            addressModeV: UO(MT)
          };
          OT = (0, JO.b)(this.engine, yT), this.samplers.set(KT, OT)
        }
        return OT
      }
      upload(TT, kT) {
        const {
          source: cT,
          sampler: lT
        } = TT;
        kT.hasMips = !lT.noMipmap, "canvas" === cT.kind ? this.createDynamic(cT, kT) : "cube" === cT.kind ? this.uploadCube(kT, cT.luminance) : this.uploadImage(kT, !0 === lT.invertY, cT.url)
      }
      uploadImage(TT, kT, cT) {
        const [lT] = TT.images;
        TT.images = null;
        const MT = (0, oO.e)(this.engine, lT, {
          mipMaps: TT.hasMips,
          invertY: kT,
          srgb: !1
        }).then((kT => {
          lT.close(), 0 !== TT.refs ? (TT.view = kT.view, TT.destroy = kT.texture.destroy.bind(kT.texture)) : kT.texture.destroy()
        }));
        this.track(TT, cT, MT)
      }
      track(TT, kT, cT, lT) {
        TT.loading = !0, this.pending++, cT.catch((cT => {
          TT.failed = !0, console.warn(`Lite: could not load texture ${EM(kT)}`, cT)
        })).finally((() => {
          TT.loading = !1, this.pending--, null === lT || void 0 === lT || lT()
        }))
      }
      uploadCube(TT, kT) {
        const cT = TT.images;
        TT.images = null;
        const lT = VO(this.engine, this.device, cT, (0, bT.x)(kT), TT.hasMips);
        TT.view = lT.createView({
          dimension: "cube"
        }), TT.destroy = () => {
          lT.destroy()
        }
      }
      createDynamic(TT, kT) {
        const {
          canvas: cT
        } = TT, lT = (0, HO.e)(this.engine, Math.max(1, cT.width), Math.max(1, cT.height), {
          mipMaps: kT.hasMips,
          srgb: !1
        });
        kT.dynamic = lT, kT.view = lT.view, kT.destroy = () => {
          lT.texture.destroy()
        }, this.pushDynamic(TT, kT)
      }
      pushDynamic(TT, kT) {
        const cT = kT.dynamicSource,
          lT = kT.dynamic,
          {
            canvas: MT
          } = TT;
        if (cT && lT && 0 !== MT.width && 0 !== MT.height) return MT.width !== lT.width || MT.height !== lT.height ? (this.releaseTexture(kT), kT.dynamic = null, kT.view = null, void this.createDynamic(TT, kT)) : void(0, HO.g)(this.engine, lT, MT, {
          invertY: cT.invertY,
          premultiplyAlpha: cT.premultiplied
        })
      }
    }

    function BO(TT) {
      return "cube" === TT.kind ? TT.rootUrl : "canvas" === TT.kind ? "canvas" : TT.url
    }
    const WO = new Uint8Array(4);

    function nO(TT) {
      const kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      TT._colorAttachment.storeOp = TT._targetSignature._sampleCount > 1 ? kT : "store";
      const cT = TT._renderPassDescriptor.depthStencilAttachment;
      cT && (cT.depthStoreOp = kT, cT.stencilStoreOp && (cT.stencilStoreOp = kT))
    }
    var pO = cT(37637),
      iO = cT(37680),
      qO = cT(37299),
      sO = cT(39358);
    const Ty = new Float64Array([1, 1, 1]),
      ky = new Float64Array([0, 1, 0]),
      cy = new Float64Array(4),
      ly = new Float32Array(16),
      My = new Float64Array(3),
      Ky = new Float64Array(4);

    function Oy(TT, kT, cT) {
      TT.fov = kT.fov, TT.near = kT.near, TT.far = kT.far, TT.renderWidth = cT.renderWidth, TT.renderHeight = cT.renderHeight, (0, qO.u)(kT.holderRotation, 0, cy, 0), (0, qO.e)(Ty, 0, cy, 0, kT.holderPosition, 0, ly);
      const lT = kT.aY;
      My[0] = lT[0], My[1] = lT[1], My[2] = lT[2] + 1;
      const MT = TT.viewMatrix;
      (0, qO.l)(lT, My, ky, MT), (0, qO.j)(MT, 0, MT), (0, qO.n)(MT, ly, 0, MT), (0, qO.j)(MT, 0, MT);
      const KT = TT.worldMatrix;
      (0, qO.j)(MT, 0, KT), TT.eye[0] = KT[12], TT.eye[1] = KT[13], TT.eye[2] = KT[14], Ky[0] = TT.fov, Ky[1] = TT.renderWidth / TT.renderHeight, Ky[2] = TT.near, Ky[3] = TT.far, (0, qO.r)(Ky, TT.projectionMatrix), (0, qO.n)(MT, TT.projectionMatrix, 0, TT.viewProjectionMatrix), (0, sO.f)(TT.viewProjectionMatrix, TT.frustum)
    }

    function yy(TT, kT) {
      let cT = TT.frustumPlanes;
      cT || (cT = TT.frustumPlanes = Array.from({
        length: 6
      }, (() => new pO.e(0, 0, 0, 0))));
      for (let lT = 0; lT < 6; lT++) {
        const TT = cT[lT].normal;
        TT._x = kT[4 * lT], TT._y = kT[4 * lT + 1], TT._z = kT[4 * lT + 2], TT._isDirty = !0, cT[lT].d = kT[4 * lT + 3]
      }
    }

    function fy(TT, kT) {
      const cT = kT.clearColor;
      TT.clearColour[0] = cT.r, TT.clearColour[1] = cT.g, TT.clearColour[2] = cT.b, TT.clearColour[3] = cT.a;
      const lT = kT.ambientColor;
      TT.ambientColour[0] = lT.r, TT.ambientColour[1] = lT.g, TT.ambientColour[2] = lT.b, TT.animationRatio = kT.animationRatio, TT.frameId = kT.frameId, TT.version++
    }

    function xy(TT) {
      const kT = TT.model.view;
      return kT.animTick = (0, iO.f)(), kT.timeMs = performance.now(), fy(kT, TT.et), TT.model.update(kT.frameId), kT
    }

    function Iy(TT) {
      const kT = TT.et,
        {
          view: cT,
          hY: lT
        } = TT.model;
      return Oy(cT, lT, kT.Dv()), kT.onBeforeRenderObservable.notifyObservers(kT), yy(kT, cT.frustum), kT.onBeforeCameraRenderObservable.notifyObservers(kT.activeCamera), xy(TT)
    }
    var Ay = cT(37260),
      Cy = cT(37389),
      jy = cT(37676);

    function vy(TT) {
      var kT, cT;
      const lT = (0, wT.cb)(TT);
      if (!lT || lT.diffuseTexture && (0, jy.h)(TT)) return null;
      const MT = null === (kT = (0, wT.x)(lT, rT.g.name)) || void 0 === kT ? void 0 : kT.state,
        KT = null === (cT = (0, wT.x)(lT, BK.b.name)) || void 0 === cT ? void 0 : cT.state,
        OT = new Float32Array(16);
      return function(TT, kT, cT, lT) {
        var MT, KT;
        const OT = jl;
        lT.set(TT.diffuseColor, OT.diffuse), lT[OT.diffuse + 3] = TT.alpha, lT.set(TT.ambientColor, OT.ambientAndCutoff), lT[OT.ambientAndCutoff + 3] = TT.alphaCutOff, lT.set(TT.emissiveColor, OT.emissiveAndLevel), lT[OT.emissiveAndLevel + 3] = null !== (MT = null === (KT = TT.diffuseTexture) || void 0 === KT ? void 0 : KT.level) && void 0 !== MT ? MT : 1, null !== kT && void 0 !== kT && kT.animDataPerTex ? (lT[OT.anim + 1] = iO.b, lT[OT.anim + 2] = kT.animDataPerTex.length / 3 - 1) : cT && (lT[OT.anim + 1] = cT.numAnimStates, lT[OT.anim + 2] = cT.ticksPerAnimState)
      }(lT, MT, KT, OT), {
        model: lT,
        atlas: MT,
        texture: MT ? "atlas" : lT.diffuseTexture ? "single" : "none",
        animated: MT ? !!MT.animDataPerTex : !!KT,
        liquid: (0, jy.l)(TT),
        customRenderMat: (0, jy.h)(TT),
        uniformData: OT
      }
    }
    var ty = cT(37242);
    class hy {
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
    class Ny {
      constructor(TT, kT) {
        this.arena = TT, this.qt = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.qt = new uO(kT);
        const cT = new hy(kT);
        cT.buffer = this.createBuffer(cT, !1), this.backings.push(cT), this.refresh()
      }
      get DA() {
        return this.qt.DA
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
        for (const kT of this.backings) TT += kT.units * (this.arena.unitBytes + (kT.twin ? this.arena.twinUnitBytes : 0));
        return TT
      }
      holds(TT) {
        return TT.start + TT.length <= this.usable
      }
      lost(TT) {
        return this.dropped || TT.start + TT.length > this.DA
      }
      write(TT, kT) {
        const {
          device: cT,
          unitBytes: lT
        } = this.arena;
        for (const MT of this.backings) {
          const KT = (MT.units - TT.start) * lT;
          KT > 0 && cT.queue.writeBuffer(MT.buffer, TT.start * lT, kT, 0, Math.min(kT.byteLength, KT))
        }
      }
      writeLight(TT, kT) {
        const {
          device: cT,
          twinUnitBytes: lT,
          verticesPerUnit: MT
        } = this.arena, {
          light: KT,
          count: OT
        } = this.arena.twinLight(kT, Math.min(kT.length, TT.length * MT));
        for (const yT of this.backings) {
          yT.twin || (yT.twin = this.createBuffer(yT, !0));
          const kT = (yT.units - TT.start) * MT;
          kT > 0 && cT.queue.writeBuffer(yT.twin, TT.start * lT, KT, 0, Math.min(OT, kT))
        }
      }
      grow(TT) {
        this.arena.assertNotDrawing();
        const {
          device: kT,
          unitBytes: cT,
          label: lT
        } = this.arena, MT = this.backings[this.backings.length - 1], KT = new hy(TT), OT = kT.createCommandEncoder({
          label: `${lT}-grow`
        });
        KT.buffer = this.createBuffer(KT, !1), OT.copyBufferToBuffer(MT.buffer, 0, KT.buffer, 0, MT.units * cT), MT.twin && (KT.twin = this.createBuffer(KT, !0), OT.copyBufferToBuffer(MT.twin, 0, KT.twin, 0, MT.units * this.arena.twinUnitBytes)), kT.queue.submit([OT.finish()]), this.backings.push(KT), this.qt.grow(TT)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const TT of this.backings) TT.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(TT, kT) {
        const {
          device: cT,
          unitBytes: lT,
          twinUnitBytes: MT,
          usage: KT,
          label: OT
        } = this.arena;
        cT.pushErrorScope("out-of-memory");
        const yT = cT.createBuffer({
          label: kT ? `${OT}-light` : OT,
          size: TT.units * (kT ? MT : lT),
          usage: (kT ? this.arena.twinUsage : KT) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, cT.popErrorScope().then((cT => {
          this.arena.awaitingVerdict--, this.settle(TT, kT, !cT, !0)
        }), (cT => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${OT} buffer, taken as failed: ${String(cT)}`), this.settle(TT, kT, !1, !1)
        })), yT
      }
      settle(TT, kT, cT, lT) {
        const MT = this.backings.indexOf(TT);
        if (!(this.dropped || MT < 0)) {
          if (!cT) {
            if (lT && this.arena.ranOutOfMemory(TT.units, TT.units * (kT ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === MT) return void this.drop();
            for (const TT of this.backings.splice(MT)) TT.destroy();
            return this.qt.truncate(this.backings[MT - 1].units), this.growable = !1, void this.promote()
          }
          kT ? TT.twinReady = !0 : (TT.bufferReady = !0, this.arena.allocatedBuffer(TT.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: TT
        } = this;
        let kT = 0;
        for (; kT + 1 < TT.length && TT[kT].ready && TT[kT + 1].ready;) kT++;
        for (const cT of TT.splice(0, kT)) cT.destroy();
        this.refresh()
      }
      refresh() {
        const TT = this.backings[0];
        this.buffer = TT.buffer, this.twin = TT.twinReady ? TT.twin : null, this.usable = !this.dropped && TT.bufferReady ? TT.units : 0
      }
    }
    class Qy {
      constructor(TT, kT, cT, lT) {
        let {
          verticesPerUnit: MT = 1,
          twinUsage: KT = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = TT, this.unitBytes = kT, this.usage = cT, this.label = lT, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, xk.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), kT % 4 !== 0) throw new Error(`${lT}: ${kT}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = MT, this.twinUsage = KT, this.twinValueBytes = MT > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * MT
      }
      twinLight(TT, kT) {
        if (4 === this.twinValueBytes) return this.widened.length < kT && (this.widened = new Float32Array(Math.max(kT, 2 * this.widened.length))), this.widened.set(TT.subarray(0, kT)), {
          light: this.widened,
          count: kT
        };
        const cT = kT % this.verticesPerUnit;
        if (0 === cT) return {
          light: TT,
          count: kT
        };
        const lT = kT - cT + this.verticesPerUnit;
        return this.padded.length < lT && (this.padded = new Uint16Array(Math.max(lT, 2 * this.padded.length))), this.padded.set(TT.subarray(0, kT)), this.padded.fill(0, kT, lT), {
          light: this.padded,
          count: lT
        }
      }
      allocate(TT) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), TT > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const MT of this.pages) {
          const kT = MT.qt.allocate(TT);
          if (kT >= 0) return {
            page: MT,
            start: kT,
            length: TT
          }
        }
        const kT = this.pages[this.pages.length - 1];
        if (null !== kT && void 0 !== kT && kT.canGrow) {
          const cT = Math.min(this.ceiling, Math.max(2 * kT.DA, kT.DA + TT));
          if (cT - kT.DA >= TT) return kT.grow(cT), {
            page: kT,
            start: kT.qt.allocate(TT),
            length: TT
          }
        }
        kT && kT !== this.pages[0] && 0 === kT.qt.used && kT.drop();
        const cT = Math.floor(1048576 / this.unitBytes),
          lT = new Ny(this, Math.max(TT, Math.min(this.ceiling, cT)));
        return this.pages.push(lT), {
          page: lT,
          start: lT.qt.allocate(TT),
          length: TT
        }
      }
      free(TT) {
        this.assertNotDrawing();
        const {
          page: kT
        } = TT;
        kT.qt.free(TT.start, TT.length), 0 === kT.qt.used && kT !== this.pages[0] && kT !== this.pages[this.pages.length - 1] && kT.drop()
      }
      remove(TT) {
        const kT = this.pages.indexOf(TT);
        kT >= 0 && this.pages.splice(kT, 1)
      }
      ranOutOfMemory(TT, kT) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${kT}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, TT), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, TT) / 2));
        const cT = performance.now();
        cT >= this.shortageUntil && (this.forgetFailedAt = cT + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = cT + 1e3)
      }
      allocatedBuffer(TT) {
        TT >= this.failed && (this.failed = 1 / 0);
        const kT = Math.min(2 * TT, Math.floor((TT + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, kT))
      }
      stats() {
        let TT = 0,
          kT = 0,
          cT = 0,
          lT = 0;
        for (const MT of this.pages) TT += MT.DA, kT += MT.qt.used, cT += MT.hasTwin ? MT.DA * this.twinUnitBytes : 0, lT += MT.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: TT * this.unitBytes,
          usedBytes: kT * this.unitBytes,
          twinBytes: cT,
          allocatedBytes: lT
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: TT,
          maxStorageBufferBindingSize: kT
        } = this.device.limits;
        let cT = Math.floor(Math.min(67108864, TT) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (cT = Math.min(cT, Math.floor(kT / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (cT = Math.min(cT, Math.floor(kT / this.twinUnitBytes))), cT
      }
    }
    const Sy = 16383;

    function Dy(TT, kT, cT, lT, MT) {
      let KT = 0;
      for (let OT = cT; OT < lT; OT += Sy) TT.drawIndexed(6 * Math.min(Sy, lT - OT), 1, 0, kT + 4 * OT, MT), KT++;
      return KT
    }
    class ay {
      constructor(TT, kT) {
        this.recordsGroup = kT, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const cT = Pk.e.strideWithoutAtlas;
        this.vertexArena = new Qy(TT, cT, GPUBufferUsage.VERTEX, `terrain-vertices-${cT}`), this.quadArena = new Qy(TT, Cy.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const lT = (0, wk.g)(new Uint16Array(98298), Sy);
        this.quadPattern = TT.createBuffer({
          label: "terrain-quad-pattern",
          size: lT.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), TT.queue.writeBuffer(this.quadPattern, 0, lT)
      }
      set(TT, kT) {
        const cT = kT.packedVertices,
          lT = cT ? this.quadArena.allocate(TT.faceCount) : this.vertexArena.allocate(TT.vertexCount);
        if (!lT) return !1;
        TT.vertices = lT;
        const MT = cT ? new Uint8Array(cT.buffer, cT.byteOffset, cT.byteLength) : new Uint8Array(kT.vertices);
        return lT.page.write(lT, MT), !0
      }
      setLight(TT, kT) {
        const {
          vertices: cT
        } = TT;
        cT && 0 !== kT.length && cT.page.live && (kT.length < TT.vertexCount ? cT.page.arena.warnOnce("shortLight", `a part's ${kT.length} light values are fewer than its ${TT.vertexCount} vertices, so its light is left as it was`) : (cT.page.writeLight(cT, kT), TT.lit = !0))
      }
      lightFullSky(TT, kT) {
        this.fullSky.length < kT && (this.fullSky = new Uint16Array(Math.max(kT, 4096)).fill(ty.l));
        for (const cT of TT) {
          const TT = cT.vertices;
          TT.page.live && (TT.page.writeLight(TT, this.fullSky), cT.lit = !0)
        }
      }
      backed(TT) {
        const {
          vertices: kT
        } = TT;
        return !!kT && kT.page.holds(kT)
      }
      lost(TT) {
        const {
          vertices: kT
        } = TT;
        return !!kT && kT.page.lost(kT)
      }
      release(TT) {
        TT.vertices && TT.vertices.page.arena.free(TT.vertices), TT.vertices = null, TT.lit = !1
      }
      setDrawing(TT) {
        this.forgetBound()
      }
      draw(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kT.faceCount;
        const KT = kT.vertices,
          OT = KT.page,
          yT = cT ? OT.twin : null;
        if (!OT.holds(KT) || cT && !yT) return 0;
        const {
          verticesPerUnit: fT
        } = OT.arena;
        let xT = KT.start * fT;
        this.boundPattern || (TT.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const IT = lT + MT;
        if (fT > 1) return OT.buffer === this.boundRecords && yT === this.boundRecordsLight || (TT.setBindGroup(1, this.recordsGroup(OT.buffer, yT)), this.boundRecords = OT.buffer, this.boundRecordsLight = yT), Dy(TT, xT, lT, IT, kT.slot);
        OT.buffer !== this.boundVertices && (TT.setVertexBuffer(0, OT.buffer), this.boundVertices = OT.buffer), yT && yT !== this.boundLight && (TT.setVertexBuffer(1, yT), this.boundLight = yT);
        const AT = kT.faceCount;
        return IT <= AT ? Dy(TT, xT, lT, IT, kT.slot) : Dy(TT, xT, lT, AT, kT.slot) + Dy(TT, xT, Math.max(lT, AT) - AT, IT - AT, kT.slot)
      }
      get buffersAwaitingVerdict() {
        let TT = 0;
        for (const kT of this.arenas()) TT += kT.awaitingVerdict;
        return TT
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Fy {
      constructor(TT, kT, cT, lT) {
        this.device = TT, this.splitBefore = kT, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = TT.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const MT = TT.createShaderModule({
          label: "scene-depth-copy",
          code: (KT = cT._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${KT?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var KT;
        TT.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: MT,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: MT,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((TT => {
          this.pipeline = TT, this.building = !1
        }), (TT => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", TT)
        })), cT._executeWithTransmission = () => this.execute(cT, lT)
      }
      get compiling() {
        return this.building
      }
      setWanted(TT) {
        this.wanted = TT
      }
      setPlanes(TT, kT) {
        TT === this.near && kT === this.far || (this.near = TT, this.far = kT, this.unproject[0] = TT / (kT - TT), this.unproject[1] = kT * TT / (kT - TT), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var TT, kT;
        return null !== (TT = null === (kT = this.copy) || void 0 === kT ? void 0 : kT.view) && void 0 !== TT ? TT : null
      }
      execute(TT, kT) {
        var cT;
        null === (cT = this.retired) || void 0 === cT || cT.destroy(), this.retired = null;
        const lT = Tk(kT),
          MT = TT._transparentBindings,
          KT = this.wanted && this.pipeline ? this.splitIndex(MT) : -1,
          OT = TT._colorAttachment,
          yT = OT.resolveTarget;
        KT >= 0 && (OT.resolveTarget = void 0, nO(TT, !0));
        let fT = lT.beginRenderPass(TT._renderPassDescriptor);
        fT.setBindGroup(0, TT._sceneBG);
        let xT = this.drawList(fT, kT, TT._opaqueBindings, 0, TT._opaqueBindings.length);
        if (xT += this.drawList(fT, kT, TT._directBindings, 0, TT._directBindings.length), xT += this.drawList(fT, kT, MT, 0, KT >= 0 ? KT : MT.length), fT.end(), KT < 0) return xT;
        nO(TT);
        const IT = TT._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: AT,
            stencilLoadOp: CT
          } = IT,
          jT = OT.loadOp;
        OT.resolveTarget = yT;
        try {
          this.copyDepth(lT, TT), OT.loadOp = "load", IT.depthLoadOp = "load", CT && (IT.stencilLoadOp = "load"), fT = lT.beginRenderPass(TT._renderPassDescriptor), fT.setBindGroup(0, TT._sceneBG), xT += this.drawList(fT, kT, MT, KT, MT.length), fT.end()
        } finally {
          OT.loadOp = jT, IT.depthLoadOp = AT, IT.stencilLoadOp = CT
        }
        return xT
      }
      splitIndex(TT) {
        for (let kT = 0; kT < TT.length; kT++)
          if (TT[kT].renderable === this.splitBefore) return kT;
        return -1
      }
      drawList(TT, kT, cT, lT, MT) {
        let KT = null,
          OT = 0;
        for (let yT = lT; yT < MT; yT++) {
          const lT = cT[yT],
            MT = lT.renderable.mesh;
          MT && !1 === MT.visible || (lT.pipeline !== KT && (TT.setPipeline(lT.pipeline), KT = lT.pipeline), OT += lT.draw(TT, kT))
        }
        return OT
      }
      copyDepth(TT, kT) {
        var cT, lT;
        const MT = (null !== (cT = kT._config.depth) && void 0 !== cT ? cT : kT._config.rt)._depthTexture,
          KT = (null === (lT = this.copy) || void 0 === lT ? void 0 : lT.source) === MT ? this.copy : this.remakeCopy(MT),
          OT = TT.beginRenderPass(KT.pass);
        OT.setPipeline(this.pipeline), OT.setBindGroup(0, KT.bindGroup), OT.draw(3), OT.end()
      }
      remakeCopy(TT) {
        var kT, cT;
        this.retired = null !== (kT = null === (cT = this.copy) || void 0 === cT ? void 0 : cT.texture) && void 0 !== kT ? kT : null;
        const lT = this.device.createTexture({
            label: "scene-depth",
            size: [TT.width, TT.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          MT = lT.createView(),
          KT = this.device.createBindGroup({
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
          OT = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: MT,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: TT,
          texture: lT,
          view: MT,
          bindGroup: KT,
          pass: OT
        }, this.copy
      }
    }
    const ry = "rgba8unorm";

    function Py(TT) {
      return TT ? 15 : 1
    }
    class wy {
      constructor(TT, kT, cT, lT) {
        this.device = TT, this.terrain = lT, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = kT._targetSignature._sampleCount > 1, this.cameraBuffer = TT.createBuffer({
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
        const MT = TT.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = TT.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: MT,
          entries: []
        });
        const KT = TT.createShaderModule({
          label: "sun-shadow-mask",
          code: (OT = this.edge, `${(0,mk.K)()}${Xc({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${OT?bc:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Py(OT)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${OT?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var OT;
        TT.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: TT.createPipelineLayout({
            bindGroupLayouts: [this.layout, MT, MT, uK(TT, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: KT,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: KT,
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
        const yT = kT._executeWithTransmission;
        kT._executeWithTransmission = TT => this.execute(kT, cT, (() => yT ? yT(TT) : function(TT, kT) {
          const cT = Tk(kT).beginRenderPass(TT._renderPassDescriptor);
          cT.setBindGroup(0, TT._sceneBG);
          let lT = my(cT, kT, TT._opaqueBindings);
          return lT += my(cT, kT, TT._directBindings), lT += my(cT, kT, TT._transparentBindings), cT.end(), lT
        }(kT, cT)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var TT, kT;
        return null !== (TT = null === (kT = this.targets) || void 0 === kT ? void 0 : kT.maskView) && void 0 !== TT ? TT : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(TT) {
        ! function(TT, kT) {
          const cT = TT.worldMatrix,
            lT = TT.projectionMatrix,
            MT = 1 / lT[0],
            KT = 1 / lT[5],
            OT = TT.far * TT.near / (TT.far - TT.near);
          kT[0] = TT.eye[0], kT[1] = TT.eye[1], kT[2] = TT.eye[2], kT[3] = 2 ** -23 / OT, kT[4] = cT[0] * MT, kT[5] = cT[1] * MT, kT[6] = cT[2] * MT, kT[7] = OT, kT[8] = cT[4] * KT, kT[9] = cT[5] * KT, kT[10] = cT[6] * KT, kT[11] = TT.near / (TT.far - TT.near), kT[12] = cT[8], kT[13] = cT[9], kT[14] = cT[10], kT[15] = 0
        }(TT, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(TT, kT, cT) {
        if (this.retire(), !this.terrain.readsMask) return cT();
        const lT = this.targetsFor(TT),
          MT = Tk(kT),
          KT = TT._renderPassDescriptor.depthStencilAttachment;
        this.edge || (lT.prepass.depthStencilAttachment.view = KT.view);
        const OT = this.terrain.drawPrepass(MT, lT.prepass, TT._sceneBG);
        if (0 === OT) return cT();
        if (this.trace(MT, lT), this.edge) return OT + 1 + cT();
        const {
          depthLoadOp: yT,
          stencilLoadOp: fT
        } = KT;
        KT.depthLoadOp = "load", fT && (KT.stencilLoadOp = "load");
        try {
          return OT + 1 + cT()
        } finally {
          KT.depthLoadOp = yT, KT.stencilLoadOp = fT
        }
      }
      trace(TT, kT) {
        const cT = this.terrain.sunShadowGroup(),
          lT = TT.beginRenderPass(kT.trace);
        this.pipeline && cT && (lT.setPipeline(this.pipeline), lT.setBindGroup(0, kT.bindGroup), lT.setBindGroup(1, this.empty), lT.setBindGroup(2, this.empty), lT.setBindGroup(3, cT), lT.draw(3)), lT.end()
      }
      retire() {
        const TT = this.retired;
        var kT;
        TT && (TT.mask.destroy(), TT.normals.destroy(), null === (kT = TT.depth) || void 0 === kT || kT.destroy(), this.retired = null)
      }
      targetsFor(TT) {
        var kT, cT;
        const lT = (null !== (kT = TT._config.depth) && void 0 !== kT ? kT : TT._config.rt)._depthTexture;
        return (null === (cT = this.targets) || void 0 === cT ? void 0 : cT.source) === lT ? this.targets : this.remake(TT, lT)
      }
      remake(TT, kT) {
        var cT;
        this.retired = this.targets;
        const lT = [kT.width, kT.height],
          MT = this.device.createTexture({
            label: "sun-shadow-mask",
            size: lT,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          KT = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: lT,
            format: ry,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          OT = null !== (cT = TT._targetSignature._depthStencilFormat) && void 0 !== cT ? cT : kT.format,
          yT = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: lT,
            format: OT,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          fT = TT._renderPassDescriptor.depthStencilAttachment,
          xT = OT.includes("stencil"),
          IT = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: KT.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: yT ? yT.createView() : fT.view,
              depthClearValue: fT.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...xT ? {
                stencilClearValue: fT.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          AT = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== yT && void 0 !== yT ? yT : kT).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: KT.createView()
            }]
          }),
          CT = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: MT.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Py(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: kT,
          mask: MT,
          maskView: MT.createView(),
          normals: KT,
          depth: yT,
          bindGroup: AT,
          prepass: IT,
          trace: CT
        }, this.targets
      }
    }

    function my(TT, kT, cT) {
      let lT = null,
        MT = 0;
      for (const KT of cT) {
        const cT = KT.renderable.mesh;
        cT && !1 === cT.visible || (KT.pipeline !== lT && (TT.setPipeline(KT.pipeline), lT = KT.pipeline), MT += KT.draw(TT, kT))
      }
      return MT
    }
    const by = 6e4,
      zy = {
        status: "ok"
      },
      Jy = {
        status: "skipped"
      };
    async function oy(TT, kT) {
      const {
        isCancelled: cT
      } = TT;
      if (cT()) return {
        status: "KT"
      };
      const {
        target: lT
      } = kT;
      if (!lT) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const MT = [],
        KT = Promise.all(Array.from(new Set(TT.materials), (async cT => {
          MT.push(await async function(TT, kT, cT, lT) {
            const MT = {
              lighting: TT.lighting,
              dirLightCount: Math.min(TT.dirLightCount, 4),
              Bj: TT.runtime
            };
            try {
              const KT = kT.material(lT);
              return KT && Il(kT.programKey(KT, !1, MT)) ? (await KT.ready, TT.isCancelled() ? zy : KT.bindGroupLayout ? await async function(TT, kT, cT, lT) {
                const {
                  device: MT
                } = TT;
                let KT, OT;
                MT.pushErrorScope("validation");
                try {
                  KT = TT.pipelineBuild(kT, cT, lT)
                } finally {
                  OT = MT.popErrorScope().catch((() => null))
                }
                const [yT, fT] = await Promise.all([OT, KT.built.then((() => null), (TT => null !== TT && void 0 !== TT ? TT : new Error("pipeline failed")))]);
                if (!yT && !fT) return zy;
                const xT = await Hy(KT.module),
                  IT = xT.length > 0 ? xT.map((TT => `${KT.name} ${TT.lineNum}:${TT.linePos}: ${TT.message}`)).join("\n") : `${KT.name}: ${ey(null!==fT&&void 0!==fT?fT:yT)}`;
                return {
                  status: "failed",
                  material: kT.model.name,
                  message: IT
                }
              }(kT, KT, kT.programKey(KT, "none" !== KT.texture, MT), cT): (console.warn(`Shader pack: skipped the compile check for "${lT.name}", whose textures failed to load`), Jy)) : zy
            } catch (KT) {
              return {
                status: "failed",
                material: lT.name,
                message: ey(KT)
              }
            }
          }(TT, kT, lT, cT))
        }))),
        OT = function(TT, kT) {
          let cT, lT, MT = !1;
          const KT = new Promise((KT => {
            var OT;
            cT = setTimeout((() => {
              KT("timeout")
            }), null !== (OT = kT.timeoutMs) && void 0 !== OT ? OT : by), lT = setInterval((() => {
              kT.isCancelled() && KT("KT")
            }), 50), TT.lost.then((() => {
              MT = !0, KT("lost")
            }))
          }));
          return {
            signal: KT,
            lost: () => MT,
            dispose: () => {
              clearTimeout(cT), clearInterval(lT)
            }
          }
        }(kT.device, TT);
      let yT;
      try {
        yT = await Promise.race([KT.then((() => "done")), OT.signal])
      } finally {
        OT.dispose()
      }
      if ("KT" === yT || cT()) return {
        status: "KT"
      };
      const fT = MT.find((TT => "failed" === TT.status));
      return fT && "lost" !== yT && !OT.lost() && await new Promise((TT => {
        setTimeout(TT, 0)
      })), "lost" === yT || OT.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : fT ? {
        status: "failed",
        failure: {
          material: fT.material,
          message: fT.message
        }
      } : "timeout" === yT ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(xT=TT.timeoutMs)&&void 0!==xT?xT:by)/1e3} s`), {
        status: "skipped"
      }) : MT.some((TT => "skipped" === TT.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var xT
    }
    async function Hy(TT) {
      if (!TT) return [];
      try {
        return (await TT.getCompilationInfo()).messages.filter((TT => "error" === TT.type))
      } catch {
        return []
      }
    }

    function ey(TT) {
      var kT;
      return null !== (kT = null === TT || void 0 === TT ? void 0 : TT.message) && void 0 !== kT ? kT : String(TT)
    }

    function Gy(TT, kT, cT, lT) {
      Il(TT) ? Hy(cT).then((TT => {
        const [cT] = TT;
        WM("terrain", kT, lT, cT ? `${cT.lineNum}:${cT.linePos} error: ${cT.message}` : null)
      })) : WM("terrain", kT, lT)
    }
    var Vy = cT(37395),
      Ey = cT(37402),
      Zy = cT(37419),
      uy = cT(37322);

    function Xy(TT, kT, cT, lT, MT) {
      const KT = Math.hypot(cT[0], cT[1], cT[2]);
      if (!(KT > 0)) return;
      const OT = [cT[0] / KT, cT[1] / KT, cT[2] / KT],
        yT = [Math.floor(kT[0]), Math.floor(kT[1]), Math.floor(kT[2])],
        fT = [0, 0, 0],
        xT = [1 / 0, 1 / 0, 1 / 0],
        IT = [1 / 0, 1 / 0, 1 / 0];
      for (let jT = 0; jT < 3; jT++) OT[jT] > 0 ? (fT[jT] = 1, xT[jT] = (yT[jT] + 1 - kT[jT]) / OT[jT], IT[jT] = 1 / OT[jT]) : OT[jT] < 0 && (fT[jT] = -1, xT[jT] = (yT[jT] - kT[jT]) / OT[jT], IT[jT] = -1 / OT[jT]);
      const {
        vv: AT
      } = TT;
      let CT = TT.RZ(yT[0], yT[1], yT[2]);
      for (;;) {
        const kT = xT[0] < xT[1] ? xT[0] < xT[2] ? 0 : 2 : xT[1] < xT[2] ? 1 : 2;
        if (xT[kT] > lT) return;
        const cT = fT[kT] > 0 ? yT[kT] + 1 : yT[kT];
        yT[kT] += fT[kT], xT[kT] += IT[kT];
        const KT = TT.RZ(yT[0], yT[1], yT[2]),
          OT = KT !== CT && !(TT.opaque[CT] && TT.opaque[KT]);
        if (OT) {
          const lT = [yT[0], yT[1], yT[2]];
          lT[kT] = cT;
          const KT = Math.floor(lT[0] / AT),
            OT = Math.floor(lT[1] / AT),
            fT = Math.floor(lT[2] / AT);
          !TT.isDrawn(KT, OT, fT) && TT.hasParts(KT, OT, fT) && MT.add(`${KT},${OT},${fT}`)
        }
        if (OT && TT.occluders[KT]) return;
        CT = KT
      }
    }

    function dy(TT, kT) {
      return TT.group - kT.group || TT.nearest - kT.nearest
    }
    class Ly {
      constructor(TT, kT) {
        this.device = TT, this.zN = kT, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
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
        const kT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.next++;
        if (8 * kT >= this.data.length) {
          const TT = new Float32Array(2 * this.data.length);
          TT.set(this.data), this.data = TT, this.words = new Uint32Array(TT.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.zN()
        }
        return kT
      }
      release(TT) {
        this.free.push(TT)
      }
      set(TT, kT, cT, lT, MT) {
        const KT = 8 * TT + Dl;
        this.data[KT] = kT, this.data[KT + 1] = cT, this.data[KT + 2] = lT, this.setVisibility(TT, MT)
      }
      setVisibility(TT, kT) {
        this.data[8 * TT + al] = kT, this.markDirty(TT, TT)
      }
      setFaces(TT, kT, cT) {
        const lT = 8 * TT;
        this.words[lT + Fl] = kT, this.words[lT + rl] = cT, this.markDirty(TT, TT)
      }
      markDirty(TT, kT) {
        this.dirtyMin = Math.min(this.dirtyMin, TT), this.dirtyMax = Math.max(this.dirtyMax, kT)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Ry = Sl,
      gy = !0;
    const Uy = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Ry.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Yy = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class By {
      constructor(TT) {
        this.device = TT, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Cl), this.dirLightUniforms = this.frameUniforms.subarray(Al.dirLights, Al.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, xk.d)(), this.faceGroups = !0, this.visibilityGraph = gy, this.visCull = gy, this.visCheck = !1, this.visCullMinDistance = Zy.g, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new iy, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Bj = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new ay(TT, ((TT, kT) => this.recordsGroup(TT, kT))), this.slots = new Ly(TT, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = kk(TT), this.frameLayout = TT.createBindGroupLayout({
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
          bind: (TT, kT) => this.createBinding(this.opaqueRenderable, kT, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (TT, kT) => this.createBinding(this.transparentRenderable, kT, !0)
        }
      }
      installSceneDepth(TT, kT) {
        this.sceneDepth = new Fy(this.device, this.transparentRenderable, TT, kT)
      }
      createFrameBindGroup() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== kT && void 0 !== kT ? kT : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(TT, kT) {
        const cT = null !== kT && void 0 !== kT ? kT : TT;
        let lT = this.recordsGroups.get(cT);
        return lT || (lT = this.createFrameBindGroup(TT, kT), this.recordsGroups.set(cT, lT)), lT
      }
      setChunkMesh(TT, kT, cT) {
        var lT;
        let MT = this.chunks.get(TT);
        MT ? this.geometry.release(MT) : (MT = {
          mesh: TT,
          slot: this.slots.allocate(),
          origin: [cT[0], cT[1], cT[2]],
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
        }, this.chunks.set(TT, MT), this.writeSlot(MT)), MT.material = TT.material ? this.materialFor(TT.material) : null, MT.packed = !!kT.packedVertices, MT.vertexCount = (0, Cy.e)(kT), MT.faceCount = MT.vertexCount / 4;
        const KT = null !== (lT = kT.faceGroups) && void 0 !== lT ? lT : null;
        if (MT.faceGroups = KT, KT) {
          const TT = Vy.m;
          MT.planePX = KT[TT], MT.planeNX = KT[TT + 1], MT.planePY = KT[TT + 2], MT.planeNY = KT[TT + 3], MT.planePZ = KT[TT + 4], MT.planeNZ = KT[TT + 5]
        }
        this.drawWhole(MT), 0 !== MT.faceCount && (this.geometry.set(MT, kT) ? (MT.packed && this.slots.setFaces(MT.slot, MT.vertices.start + MT.faceCount, MT.faceCount), kT.kv && this.setChunkMeshLight(TT, kT.kv)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${MT.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(TT, kT) {
        const cT = this.chunks.get(TT);
        cT && this.geometry.setLight(cT, kT)
      }
      drawStats() {
        let TT = this.transparent.length;
        for (const kT of this.opaqueBatches) TT += kT.meshes.length;
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
        const kT = this.chunks.get(TT);
        kT && (this.geometry.release(kT), this.slots.release(kT.slot), this.chunks.delete(TT))
      }
      remeshLost(TT, kT) {
        this.geometry.release(kT), kT.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** kT.lostRemeshes++);
        const cT = TT.pA,
          [lT, MT, KT] = cT.fcT(kT.origin[0], kT.origin[1], kT.origin[2]),
          OT = cT.ft.xt(lT, MT, KT);
        OT && (OT.Ot = !0, OT.tt = !0, cT.yt(OT, !1))
      }
      chooseFaceRanges(TT, kT, cT) {
        const lT = this.faceRanges;
        TT.faceMask = cT, TT.rangeCount = (0, Ey.u)(kT, cT, lT), TT.first0 = lT[0], TT.count0 = lT[1], TT.first1 = lT[2], TT.count1 = lT[3]
      }
      drawWhole(TT) {
        TT.faceMask = -1, TT.faceEpoch = -1, TT.rangeCount = 1, TT.first0 = 0, TT.count0 = TT.faceCount
      }
      writeSlot(TT) {
        const [kT, cT, lT] = this.originOffset;
        this.slots.set(TT.slot, TT.origin[0] - kT, TT.origin[1] - cT, TT.origin[2] - lT, TT.visibility)
      }
      materialFor(TT) {
        const kT = this.materials.get(TT);
        if (kT) return kT;
        const cT = vy(TT);
        if (!cT) return this.warnOnce(`material:${TT.name}`, `Lite terrain cannot draw material "${TT.name}"; its chunks are skipped.`), null;
        const {
          model: lT,
          atlas: MT,
          texture: KT,
          animated: OT,
          uniformData: yT
        } = cT, fT = {
          id: this.materials.size,
          model: lT,
          texture: KT,
          animated: OT,
          uniformData: yT,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${TT.name}`,
            size: yT.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: cT.liquid,
          customRenderMat: cT.customRenderMat,
          atlasCount: 0,
          qB: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(TT, fT), this.device.queue.writeBuffer(fT.uniformBuffer, 0, yT), fT.ready = this.createMaterialBindGroup(fT, MT).catch((kT => {
          console.error(`Lite terrain failed to load the textures of material "${TT.name}"`, kT)
        })), fT
      }
      materialLayout(TT) {
        const kT = function(TT) {
            const kT = ["uniforms"];
            if ("atlas" === TT.texture) {
              TT.animated && kT.push("animData"), kT.push("sampler");
              for (let cT = 0; cT < TT.atlasCount; cT++) kT.push("textureArray")
            } else "single" === TT.texture && kT.push("sampler", "texture");
            return kT
          }(TT),
          cT = kT.join(",");
        let lT = this.materialLayouts.get(cT);
        if (!lT) {
          const TT = GPUShaderStage.FRAGMENT;
          lT = this.device.createBindGroupLayout({
            label: `terrain-material-${cT}`,
            entries: kT.map(((kT, cT) => {
              switch (kT) {
                case "uniforms":
                  return {
                    binding: cT, visibility: GPUShaderStage.VERTEX | TT, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: cT, visibility: GPUShaderStage.VERTEX | TT, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: cT, visibility: TT, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: cT, visibility: TT, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: cT, visibility: TT, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(cT, lT)
        }
        return lT
      }
      async createMaterialBindGroup(TT, kT) {
        const cT = [{
          buffer: TT.uniformBuffer
        }];
        if (kT) {
          const {
            urls: lT,
            pixels: MT,
            layerWidth: KT
          } = kT.sources, OT = await Promise.all(lT.map(((TT, kT) => {
            var cT;
            return dM(this.device, TT, null !== (cT = null === MT || void 0 === MT ? void 0 : MT[kT]) && void 0 !== cT ? cT : null, KT)
          })));
          TT.atlasCount = OT.length, TT.qB = OT[0].layerWidth, TT.atlasLayers = OT[0].layers, kT.animDataPerTex && cT.push({
            buffer: HM(this.device, Float32Array.from(kT.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), cT.push(this.sampler);
          for (const TT of OT) cT.push(TT.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === TT.texture) {
          const {
            url: kT
          } = TT.model.diffuseTexture.source, {
            pixels: lT,
            width: MT,
            height: KT
          } = await uM(kT);
          cT.push(this.sampler), cT.push(GM(this.device, lT, MT, KT, 1, `terrain-${kT}`).createView({
            dimension: "2d"
          }))
        }
        const lT = this.materialLayout(this.programKey(TT, !1));
        TT.bindGroupLayout = lT, TT.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${TT.model.name}`,
          layout: lT,
          entries: cT.map(((TT, kT) => ({
            binding: kT,
            resource: TT
          })))
        })
      }
      programKey(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const lT = cT ? cT.lighting : this.lighting,
          MT = cT ? cT.Bj : this.Bj,
          KT = {
            texture: TT.texture,
            atlasCount: TT.atlasCount,
            qB: TT.qB,
            atlasLayers: TT.atlasLayers,
            animated: TT.animated,
            alphaTest: TT.model.transparencyMode === wT.p.alphaTest,
            lighting: lT,
            dirLightCount: cT ? cT.dirLightCount : this.dirLightCount,
            packed: kT
          };
        if (!MT) return KT;
        const OT = this.shaderPackFields(TT, MT),
          yT = "atlas" === TT.texture && TT.model.transparencyMode === wT.p.opaque && Ol(OT.packVariant);
        return {
          ...KT,
          ...OT,
          alphaTest: KT.alphaTest || yT
        }
      }
      shaderPackFields(TT, kT) {
        return TT.customRenderMat ? Ml : function(TT, kT) {
          if (!TT) return Ml;
          const cT = TT.defineFor(kT ? "liquid" : "terrain");
          return 0 === cT ? Ml : {
            packVariant: cT,
            liquid: kT
          }
        }(kT, TT.liquid)
      }
      isBlended(TT) {
        return TT.model.transparencyMode === wT.p.alphaBlend
      }
      shaderModule(TT, kT) {
        let cT = this.modules.get(TT);
        return cT || (cT = this.device.createShaderModule({
          label: kT,
          code: TT
        }), this.modules.set(TT, cT)), cT
      }
      pipelineFor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!TT.bindGroupLayout) return null;
        const MT = this.programKey(TT, kT);
        if (!lT) return this.pipelineOf(TT, MT, cT);
        const KT = {
            ...MT,
            resting: lT
          },
          OT = this.pipelineId(TT, KT, cT),
          yT = this.pipelines.get(OT);
        if (yT) return yT;
        const fT = this.pipelineOf(TT, MT, cT);
        return fT && void 0 === yT && this.startPipeline(OT, TT, KT, cT), fT
      }
      pipelineOf(TT, kT, cT) {
        const lT = this.pipelineId(TT, kT, cT),
          MT = this.pipelines.get(lT);
        return void 0 !== MT ? MT : (this.startPipeline(lT, TT, kT, cT), null)
      }
      pipelineId(TT, kT, cT) {
        return Wy(kT, this.isBlended(TT), TT.model.backFaceCulling, cT)
      }
      pipelineBuild(TT, kT, cT) {
        var lT;
        const MT = this.pipelineId(TT, kT, cT);
        return null !== (lT = this.builds.get(MT)) && void 0 !== lT ? lT : this.startPipeline(MT, TT, kT, cT)
      }
      startPipeline(TT, kT, cT, lT) {
        var MT;
        this.pipelines.set(TT, null);
        const KT = Jl(cT),
          OT = this.isBlended(kT),
          yT = this.shadowMask && lT._depthStencilFormat ? function(TT, kT, cT, lT) {
            if (void 0 === TT.packVariant || TT.liquid || kT) return "none";
            const MT = (0, bk.d)(TT.packVariant);
            return null === MT || void 0 === MT || !MT.sunShadow || !Zc(MT, cT) || MT.discards || TT.alphaTest && Ol(TT.packVariant) ? "none" : lT ? "edge" : "plain"
          }(cT, OT, !!this.sunShadow, lT._sampleCount > 1) : "none";
        let fT;
        try {
          fT = ol(cT, !!this.sunShadow, yT)
        } catch (hT) {
          if (!Il(cT)) throw hT;
          return this.failedPackBuild(TT, cT, KT, hT)
        }
        const xT = this.shaderModule(fT, KT),
          IT = [];
        cT.packed || (IT.push(function(TT, kT) {
          const cT = [{
            shaderLocation: Ry.position,
            offset: Pk.e.eM,
            format: "float32x3"
          }, {
            shaderLocation: Ry.normal,
            offset: Pk.e.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Ry.color,
            offset: Pk.e.colorOffset,
            format: "unorm8x4"
          }];
          return TT && cT.push({
            shaderLocation: Ry.uv,
            offset: Pk.e.uvOffset,
            format: "float32x2"
          }), kT && cT.push({
            shaderLocation: Ry.blockFlagWords,
            offset: Pk.e.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: Pk.e.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: cT
          }
        }("none" !== cT.texture, Il(cT))), cT.lighting && IT.push(Uy));
        const AT = kT.model.backFaceCulling,
          CT = {
            label: KT,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, kT.bindGroupLayout, ...LK(this.device, cT, !!this.sunShadow, "none" !== yT)]
            }),
            vertex: {
              module: xT,
              entryPoint: "mainVertex",
              buffers: IT
            },
            fragment: iT({
              module: xT,
              entryPoint: "mainFragment"
            }, lT, OT ? Yy : null),
            depthStencil: lT._depthStencilFormat ? {
              format: lT._depthStencilFormat,
              depthCompare: null !== (MT = lT._depthCompare) && void 0 !== MT ? MT : ck,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: lT._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: AT ? "back" : "none"
            }
          },
          jT = cT.resting ? 0 : 1;
        this.compiling += jT;
        const vT = "none" === yT ? this.device.createRenderPipelineAsync(CT) : this.startMaskPipelines(xT, CT, "edge" === yT);
        vT.then((kT => {
          this.compiling -= jT, this.pipelines.set(TT, kT)
        }), (TT => {
          this.compiling -= jT, console.error(`Lite terrain pipeline ${KT} failed`, TT), Gy(cT, KT, xT, TT)
        }));
        const tT = {
          name: KT,
          module: xT,
          built: vT
        };
        return this.builds.set(TT, tT), tT
      }
      startMaskPipelines(TT, kT, cT) {
        const lT = kT.depthStencil,
          MT = this.device.createRenderPipelineAsync(cT ? kT : {
            ...kT,
            depthStencil: {
              ...lT,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          KT = this.device.createRenderPipelineAsync({
            ...kT,
            label: `${kT.label}-prepass`,
            fragment: {
              module: TT,
              entryPoint: "prepassFragment",
              targets: [{
                format: ry
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([MT, KT]).then((TT => {
          let [kT, cT] = TT;
          return this.prepassOf.set(kT, cT), this.maskPipelines++, kT
        }))
      }
      failedPackBuild(TT, kT, cT, lT) {
        console.error(`Lite terrain pipeline ${cT} failed`, lT), Gy(kT, cT, null, lT);
        const MT = Promise.reject(lT);
        MT.catch((() => {}));
        const KT = {
          name: cT,
          module: null,
          built: MT
        };
        return this.builds.set(TT, KT), KT
      }
      checkShaderPack(TT) {
        return oy(TT, {
          device: this.device,
          target: this.target,
          material: TT => this.materialFor(TT),
          programKey: (TT, kT, cT) => this.programKey(TT, kT, cT),
          pipelineBuild: (TT, kT, cT) => this.pipelineBuild(TT, kT, cT)
        })
      }
      createBinding(TT, kT, cT) {
        return this.target = kT, {
          renderable: TT,
          pipeline: Ok(this.device, kT),
          draw: TT => {
            this.geometry.setDrawing(!0);
            try {
              return cT ? this.drawTransparent(TT, kT) : this.drawOpaque(TT, kT)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(TT, kT) {
        var cT, lT, MT, KT;
        const {
          cC: OT
        } = TT;
        this.lighting = TT.bt;
        const yT = (0, Ay.r)(kT);
        this.dirLightCount = Math.min(yT, 4), this.Bj = null !== (cT = OT.Bj) && void 0 !== cT ? cT : null, yT > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(TT, kT), this.animateMaterials(kT.animTick);
        const fT = OT.QC,
          xT = fT[0] !== this.originOffset[0] || fT[1] !== this.originOffset[1] || fT[2] !== this.originOffset[2];
        xT && (this.originOffset[0] = fT[0], this.originOffset[1] = fT[1], this.originOffset[2] = fT[2]);
        const IT = kT.eye;
        this.eye[0] = IT[0], this.eye[1] = IT[1], this.eye[2] = IT[2], this.writeShaderPackInputs();
        const AT = kT.projectionMatrix,
          CT = 0 === AT[15];
        let jT = 0;
        (xT || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: vT
        } = this;
        yk(this.transparentRenderable._worldCenter, kT, Mk), this.resetBatches(CT), this.transparent.length = 0, this.unlit.length = 0;
        const tT = OT.pA.o_,
          hT = tT / 2 * Math.sqrt(3);
        let NT = 0;
        const QT = !!this.Bj && Kl(this.Bj.defineFor("liquid"));
        let ST = !1;
        const DT = null !== (lT = null === (MT = OT.bS) || void 0 === MT ? void 0 : MT.visibility) && void 0 !== lT ? lT : null,
          aT = this.visCull && CT && 0 === this.compiling && null !== DT && OT.pA.ocT[0] >= this.visCullMinDistance ? this.target : null,
          FT = this.visPassable,
          rT = this.visCandidates,
          PT = this.visCandidateBatches;
        FT.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let wT = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let mT = 0;
        const bT = (TT, cT) => {
          if (!cT) return this.transparent.push(TT), void(mT += 2 * TT.faceCount);
          if (null !== TT.faceGroups && cT.faceCull) {
            if (0 === jT && (jT = (0, Ey.e)(AT, kT.renderWidth, kT.renderHeight), jT !== this.faceFocalPx && (this.faceFocalPx = jT, vT = ++this.faceEpoch)), TT.faceEpoch !== vT) {
              TT.faceEpoch = vT;
              const kT = Math.sqrt(TT.distance) + hT,
                cT = (0, Ey.m)(TT.planePX, TT.planeNX, TT.planePY, TT.planeNY, TT.planePZ, TT.planeNZ, this.eye[0] - (TT.origin[0] - this.originOffset[0]), this.eye[1] - (TT.origin[1] - this.originOffset[1]), this.eye[2] - (TT.origin[2] - this.originOffset[2]), (0, Ey.i)(kT, jT));
              cT !== TT.faceMask && this.chooseFaceRanges(TT, TT.faceGroups, cT)
            }
            if (0 === TT.rangeCount) return
          } else - 1 !== TT.faceMask && this.drawWhole(TT);
          cT.meshes.push(TT), mT += 2 * ((TT.rangeCount > 0 ? TT.count0 : 0) + (TT.rangeCount > 1 ? TT.count1 : 0))
        };
        for (const JT of this.chunks.values()) {
          xT && this.writeSlot(JT);
          const TT = JT.mesh.visibility;
          TT !== JT.visibility && (JT.visibility = TT, this.slots.setVisibility(JT.slot, TT));
          const {
            material: cT
          } = JT;
          this.geometry.lost(JT) && performance.now() >= JT.lostRetryAt && this.remeshLost(OT, JT);
          const lT = !(null === cT || void 0 === cT || !cT.bindGroup) && this.geometry.backed(JT),
            MT = lT && this.lighting && !JT.vertices.page.twin;
          if (aT && (Number.isNaN(JT.key) && (JT.ci = Math.floor(JT.origin[0] / tT), JT.cj = Math.floor(JT.origin[1] / tT), JT.ck = Math.floor(JT.origin[2] / tT), JT.key = (0, uy.h)(JT.ci, JT.cj, JT.ck)), (!lT || TT < 1 || MT || !this.batchDraws(cT, JT.packed, aT)) && this.visSeeThrough(JT, aT) && FT.add(JT.key)), !lT) continue;
          MT || (JT.lostRemeshes = 0);
          const KT = JT.origin[0] - this.originOffset[0],
            yT = JT.origin[1] - this.originOffset[1],
            fT = JT.origin[2] - this.originOffset[2];
          if (!(0, sO.c)(kT.frustum, KT, yT, fT, tT)) continue;
          const IT = KT + tT / 2 - this.eye[0],
            AT = yT + tT / 2 - this.eye[1],
            jT = fT + tT / 2 - this.eye[2];
          if (JT.distance = IT * IT + AT * AT + jT * jT, this.lighting && !JT.lit && (NT = Math.max(NT, JT.vertexCount), this.unlit.push(JT)), MT) continue;
          const vT = this.isBlended(cT) ? null : this.batchFor(cT, JT.packed, JT.vertices.page, 1 === TT, CT);
          aT ? (rT[wT] = JT, PT[wT++] = vT) : bT(JT, vT)
        }
        const zT = aT ? this.sweepVisibility(TT, kT, DT) : null;
        null === (KT = (0, JK.u)(OT)) || void 0 === KT || KT.update(kT.frustum, this.originOffset, tT, zT);
        for (let JT = 0; JT < wT; JT++) {
          const TT = rT[JT];
          !zT || zT.isDrawn(TT.ci, TT.cj, TT.ck) ? bT(TT, PT[JT]) : (this.visCulledParts++, this.visCulledTriangles += 2 * TT.faceCount)
        }
        for (const JT of this.transparent) ST ||= QT && JT.material.liquid && !JT.material.customRenderMat;
        this.submittedTriangles = mT, zT && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(TT, kT, zT)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(ST) : ST && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && NT > 0 && this.geometry.lightFullSky(this.unlit, NT);
        for (const JT of this.opaqueBatches) this.chunkSorter.sort(JT.meshes, 1) || JT.meshes.sort(ny);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(py)
      }
      sweepVisibility(TT, kT, cT) {
        const {
          pA: lT
        } = TT.cC, MT = lT.o_, KT = this.visPassable, OT = this.eye[0] + this.originOffset[0], yT = this.eye[1] + this.originOffset[1], fT = this.eye[2] + this.originOffset[2];
        if (!cT.eyeClear(OT, yT, fT, kT.near, kT.projectionMatrix, lT)) return null;
        const [xT, IT] = lT.ocT, AT = cT.update(OT, yT, fT, MT, xT, IT, KT);
        return this.visSweeps = cT.sweeps, AT ? cT : null
      }
      visSeeThrough(TT, kT) {
        const {
          material: cT
        } = TT;
        return (!cT || !this.isBlended(cT)) && (TT.mesh.visibility < 1 || !(null !== cT && void 0 !== cT && cT.bindGroup) || TT.faceCount > 0 && (!this.geometry.backed(TT) || this.lighting && !TT.vertices.page.twin) || !this.batchDraws(cT, TT.packed, kT))
      }
      batchDraws(TT, kT, cT) {
        var lT;
        const MT = kT ? 2 : 0;
        if (TT === this.visDrawsMaterial && function(TT, kT) {
            return 0 !== (TT & 1 << kT)
          }(this.visDrawsBits, MT)) return 0 !== (this.visDrawsBits & 2 << MT);
        let KT = null !== (lT = this.visBatchDraws.get(TT)) && void 0 !== lT ? lT : 0;
        if (!(KT & 1 << MT)) {
          KT |= 1 << MT | (!!TT.bindGroupLayout && this.canDraw(TT, kT) && !!this.pipelines.get(this.pipelineId(TT, this.programKey(TT, kT), cT)) ? 2 << MT : 0), this.visBatchDraws.set(TT, KT)
        }
        return this.visDrawsMaterial = TT, this.visDrawsBits = KT, 0 !== (KT & 2 << MT)
      }
      runVisCheck(TT, kT, cT) {
        const {
          cC: lT
        } = TT, {
          pA: MT
        } = lT, KT = MT.o_, OT = new Set;
        for (const jT of this.chunks.values()) OT.add(jT.key);
        const yT = DM.Matrix.FromArray(kT.viewProjectionMatrix).invert(),
          [fT, xT, IT] = this.originOffset,
          AT = new DM.Fv,
          CT = function(TT, kT, cT, lT) {
            const MT = new Set;
            for (let KT = 0; KT < 27; KT++)
              for (let OT = 0; OT < 48; OT++) {
                const yT = cT((OT + .5) / 48 * 2 - 1, (KT + .5) / 27 * 2 - 1);
                Xy(TT, kT, [yT[0] - kT[0], yT[1] - kT[1], yT[2] - kT[2]], lT, MT)
              }
            return MT
          }({
            RZ: (TT, kT, cT) => MT.RZ(TT, kT, cT),
            occluders: cT.occluders,
            opaque: cT.opaque,
            vv: KT,
            isDrawn: (TT, kT, lT) => cT.isDrawn(TT, kT, lT),
            hasParts: (TT, kT, cT) => OT.has((0, uy.h)(TT, kT, cT))
          }, [this.eye[0] + fT, this.eye[1] + xT, this.eye[2] + IT], ((TT, kT) => (DM.Fv.TransformCoordinatesFromFloatsToRef(TT, kT, .5, yT, AT), [AT.x + fT, AT.y + xT, AT.z + IT])), (MT.ocT[0] + 1) * KT);
        this.visViolations = CT.size;
        for (const jT of CT) this.warnOnce(`vis:${jT}`, `Lite terrain cave culling skipped chunk ${jT}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var TT;
        null !== (TT = this.Bj) && void 0 !== TT && TT.isRunning() && (this.shaderPackInputs ??= new RK(this.device, this.Bj.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Bj, this.eye, this.lighting))
      }
      bindShaderPackInputs(TT, kT, cT) {
        var lT, MT, KT, OT;
        let yT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: fT
        } = this.shaderPackFields(kT, cT);
        if (void 0 === fT) return;
        this.shaderPackInputs || (this.shaderPackInputs = new RK(this.device, cT.textureLayers(), this.sunShadow), this.shaderPackInputs.write(cT, this.eye, this.lighting));
        const xT = Kl(fT) ? null !== (lT = null === (MT = this.sceneDepth) || void 0 === MT ? void 0 : MT.view) && void 0 !== lT ? lT : this.standIn() : null,
          IT = yT ? null !== (KT = null === (OT = this.shadowMask) || void 0 === OT ? void 0 : OT.view) && void 0 !== KT ? KT : this.standIn() : null;
        this.shaderPackInputs.bind(TT, xT, dK(fT, !!this.sunShadow), IT)
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
        var TT, kT;
        return null !== (TT = null === (kT = this.shaderPackInputs) || void 0 === kT ? void 0 : kT.bindGroupFor(null, !0)) && void 0 !== TT ? TT : null
      }
      resetBatches(TT) {
        const kT = this.opaqueBatches;
        let cT = 0;
        for (const lT of kT) lT.meshes.length > 0 && (lT.meshes.length = 0, lT.faceCull = this.batchFaceCull(lT.material, TT), kT[cT++] = lT);
        kT.length = cT
      }
      orderBatches() {
        const TT = this.opaqueBatches;
        for (let kT = 0; kT < TT.length; kT++) {
          const cT = TT[kT];
          cT.group = kT;
          for (let lT = 0; lT < kT; lT++) {
            const kT = TT[lT];
            if (kT.material === cT.material && kT.packed === cT.packed) {
              cT.group = kT.group;
              break
            }
          }
          cT.nearest = cT.meshes.length > 0 ? cT.meshes[0].distance : 1 / 0
        }
        TT.sort(dy)
      }
      batchFor(TT, kT, cT, lT, MT) {
        for (const OT of this.opaqueBatches)
          if (OT.material === TT && OT.packed === kT && OT.page === cT && OT.resting === lT) return OT;
        const KT = {
          material: TT,
          packed: kT,
          page: cT,
          resting: lT,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(TT, MT)
        };
        return this.opaqueBatches.push(KT), KT
      }
      batchFaceCull(TT, kT) {
        return !(!kT || !(0, Vy.r)(TT.model)) && (!this.Bj || ! function(TT) {
          var kT;
          return !(null === (kT = (0, bk.d)(TT)) || void 0 === kT || !kT.movesVertices)
        }(this.shaderPackFields(TT, this.Bj).packVariant))
      }
      writeFrameUniforms(TT, kT) {
        const cT = this.frameUniforms,
          lT = Al;
        if ((0, Ay.s)(TT, cT), cT[lT.fogInfos] = kT.fogEnabled ? kT.fogMode : 0, cT[lT.fogInfos + 1] = kT.fogStart, cT[lT.fogInfos + 2] = kT.fogEnd, cT[lT.fogInfos + 3] = kT.fogDensity, cT.set(kT.fogColour, lT.fogColour), cT[lT.outputHeight] = kT.renderHeight, cT.set(kT.ambientColour, lT.sceneAmbient), (0, Ay.p)(kT, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const kT = (0, Cy.h)(TT.Yv, TT.Nv, TT.Qv);
          for (let TT = 0; TT < 4; TT++) cT[lT.aoLevels + TT] = kT[TT] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, cT)
      }
      animateMaterials(TT) {
        const kT = jl.anim;
        for (const cT of this.materials.values()) cT.animated && (cT.uniformData[kT] = TT, this.device.queue.writeBuffer(cT.uniformBuffer, 4 * kT, cT.uniformData, kT, 1))
      }
      canDraw(TT, kT) {
        return !("atlas" === TT.texture && !kT) || (this.warnOnce(`stride:${TT.id}`, `Lite terrain: material "${TT.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(TT, kT) {
        let cT = 0;
        TT.setBindGroup(1, this.frameBindGroup);
        for (const lT of this.opaqueBatches) {
          if (!lT.meshes.length || !this.canDraw(lT.material, lT.packed)) continue;
          const MT = this.pipelineFor(lT.material, lT.packed, kT, lT.resting);
          MT && (TT.setPipeline(MT), TT.setBindGroup(2, lT.material.bindGroup), this.Bj && this.bindShaderPackInputs(TT, lT.material, this.Bj, this.prepassOf.has(MT)), cT += this.drawBatch(TT, lT))
        }
        return cT
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(TT, kT, cT) {
        const lT = this.target,
          MT = this.Bj;
        if (!lT || !MT || 0 === this.maskPipelines) return 0;
        let KT = 0,
          OT = null;
        this.geometry.setDrawing(!0);
        try {
          for (const yT of this.opaqueBatches) {
            if (!yT.meshes.length || !this.canDraw(yT.material, yT.packed)) continue;
            const fT = this.pipelineFor(yT.material, yT.packed, lT, yT.resting),
              xT = fT && this.prepassOf.get(fT);
            xT && (OT || (OT = TT.beginRenderPass(kT), OT.setBindGroup(0, cT), OT.setBindGroup(1, this.frameBindGroup)), OT.setPipeline(xT), OT.setBindGroup(2, yT.material.bindGroup), this.bindShaderPackInputs(OT, yT.material, MT, !0), KT += this.drawBatch(OT, yT))
          }
        } finally {
          var yT;
          null === (yT = OT) || void 0 === yT || yT.end(), this.geometry.setDrawing(!1)
        }
        return KT
      }
      drawBatch(TT, kT) {
        let cT = 0;
        for (const lT of kT.meshes) {
          const {
            rangeCount: kT
          } = lT;
          kT > 0 && (cT += this.geometry.draw(TT, lT, this.lighting, lT.first0, lT.count0), kT > 1 && (cT += this.geometry.draw(TT, lT, this.lighting, lT.first1, lT.count1)))
        }
        return cT
      }
      drawTransparent(TT, kT) {
        let cT = 0,
          lT = null,
          MT = null;
        TT.setBindGroup(1, this.frameBindGroup);
        for (const KT of this.transparent) {
          const OT = KT.material;
          if (!this.canDraw(OT, KT.packed)) continue;
          const yT = this.pipelineFor(OT, KT.packed, kT);
          yT && (yT !== lT && (TT.setPipeline(yT), lT = yT, this.Bj && this.bindShaderPackInputs(TT, OT, this.Bj)), OT !== MT && (TT.setBindGroup(2, OT.bindGroup), MT = OT), cT += this.geometry.draw(TT, KT, this.lighting))
        }
        return cT
      }
    }

    function Wy(TT, kT, cT, lT) {
      return `${Jl(TT)}|${TT.atlasLayers}|${TT.qB}|${kT}|${cT}|${lT._colorFormat}|${lT._depthStencilFormat}|${lT._sampleCount}`
    }

    function ny(TT, kT) {
      return TT.distance - kT.distance
    }

    function py(TT, kT) {
      return kT.distance - TT.distance
    }
    class iy {
      constructor() {
        this.left = []
      }
      sort(TT, kT) {
        for (let cT = 0; cT < TT.length; cT++) {
          const kT = TT[cT].distance;
          if (kT - kT !== 0) return !1
        }
        return this.sortRange(TT, 0, TT.length, kT), !0
      }
      sortRange(TT, kT, cT, lT) {
        if (cT - kT <= 16) {
          for (let MT = kT + 1; MT < cT; MT++) {
            const cT = TT[MT],
              KT = lT * cT.distance;
            let OT = MT - 1;
            for (; OT >= kT && lT * TT[OT].distance > KT; OT--) TT[OT + 1] = TT[OT];
            TT[OT + 1] = cT
          }
          return
        }
        const MT = kT + cT >>> 1;
        if (this.sortRange(TT, kT, MT, lT), this.sortRange(TT, MT, cT, lT), lT * TT[MT - 1].distance <= lT * TT[MT].distance) return;
        const {
          left: KT
        } = this, OT = MT - kT;
        for (let IT = 0; IT < OT; IT++) KT[IT] = TT[kT + IT];
        let yT = 0,
          fT = MT,
          xT = kT;
        for (; yT < OT && fT < cT;) TT[xT++] = lT * TT[fT].distance < lT * KT[yT].distance ? TT[fT++] : KT[yT++];
        for (; yT < OT;) TT[xT++] = KT[yT++]
      }
    }
    const qy = Math.ceil(102);

    function sy(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kT;
      const KT = Math.min(kT, cT),
        OT = new Uint32Array(kc(lT));
      for (let yT = 0; yT < lT; yT++) {
        const kT = Math.floor(yT * KT / lT),
          cT = Math.max(kT + 1, Math.floor((yT + 1) * KT / lT));
        for (let fT = 0; fT < lT; fT++) {
          const xT = Math.floor(fT * KT / lT),
            IT = Math.max(xT + 1, Math.floor((fT + 1) * KT / lT));
          let AT = 0;
          for (let lT = kT; lT < cT; lT++)
            for (let kT = xT; kT < IT; kT++) TT[lT * MT + kT] >= qy && AT++;
          if (2 * AT >= (cT - kT) * (IT - xT)) {
            const TT = fT + lT * yT;
            OT[TT >>> 5] |= 1 << (31 & TT)
          }
        }
      }
      return OT
    }

    function Tf(TT) {
      return Math.max(1, Math.min(16, TT))
    }
    class kf {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = TT, this.loadTexture = kT, this.warn = cT, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(TT, kT) {
        return (TT.tV !== this.builtVersion || this.blockCaster.length !== kT) && (this.build(TT, kT), !0)
      }
      build(TT, kT) {
        this.builtVersion = TT.tV;
        const cT = new Uint16Array(kT),
          lT = new Map;
        for (let MT = 1; MT < kT; MT++) {
          const kT = this.classify(TT, MT, lT);
          if (null === kT || kT === pk) {
            cT[MT] = null === kT ? 0 : pk;
            continue
          }
          let KT = this.byKey.get(kT.key);
          void 0 === KT && (KT = this.allocate(kT), this.byKey.set(kT.key, KT)), cT[MT] = KT
        }
        this.blockCaster = cT, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(TT, kT) {
        const cT = TT.Qp[kT];
        if ("function" !== typeof cT) return cT;
        try {
          return cT()
        } catch (lT) {
          return this.warnOnce(`Sun shadows: no caster option for block ${kT}: ${lT instanceof Error?lT.message:String(lT)}`), null
        }
      }
      classify(TT, kT, cT) {
        const lT = this.option(TT, kT);
        if ("none" === lT) return null;
        if (lT && lT.planes.length > 0) {
          const TT = lT.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(TT)}`,
            planes: TT
          }
        }
        if (TT.kj[kT]) return null;
        const MT = TT.Mj[kT] ? TT.rV(kT) : null;
        if (MT && MT.length >= 6) {
          const TT = function(TT) {
            const kT = new Uint32Array(16);
            for (let cT = 0; cT + 6 <= TT.length; cT += 6) {
              const lT = [0, 1, 2].map((kT => Math.max(0, Math.ceil(8 * TT[cT + kT] - .5)))),
                MT = [0, 1, 2].map((kT => Math.min(7, Math.floor(8 * TT[cT + kT + 3] - .5))));
              for (let TT = lT[2]; TT <= MT[2]; TT++)
                for (let cT = lT[1]; cT <= MT[1]; cT++)
                  for (let KT = lT[0]; KT <= MT[0]; KT++) {
                    const lT = KT + 8 * (cT + 8 * TT);
                    kT[lT >>> 5] |= 1 << (31 & lT)
                  }
            }
            return kT
          }(MT);
          return function(TT) {
            return TT.every((TT => 4294967295 === TT))
          }(TT) ? pk : TT.every((TT => 0 === TT)) ? null : {
            kind: "shape",
            key: `shape:${TT.join(",")}`,
            mask: TT
          }
        }
        if (TT.VV[kT] || !TT.Bv[kT]) return null;
        const KT = [0, 1, 2, 3, 4, 5].map((lT => {
          const MT = TT.Wv[6 * kT + lT];
          let KT = cT.get(MT);
          return void 0 === KT && (KT = function(TT) {
            if (!TT || TT.Mt) return null;
            const {
              nB: kT,
              qB: cT,
              YB: lT
            } = TT;
            if (!kT || !cT || !(cT > 0) || void 0 === lT || !(lT >= 0)) return null;
            const MT = kT[0],
              KT = cT * cT * 4;
            if (!MT || MT.byteLength < KT) return null;
            const OT = Math.floor(MT.byteLength / KT),
              yT = kT[Math.floor(lT / OT)];
            if (!yT) return null;
            const fT = new Uint8Array(yT.buffer, yT.byteOffset, yT.byteLength),
              xT = lT % OT * KT;
            if (xT + KT > fT.length) return null;
            const IT = new Uint8Array(cT * cT);
            let AT = !1;
            for (let CT = 0; CT < IT.length; CT++) IT[CT] = fT[xT + 4 * CT + 3], AT ||= IT[CT] < qy;
            return AT ? {
              alpha: IT,
              width: cT
            } : null
          }(TT.lt(MT)), cT.set(MT, KT)), KT
        }));
        if (KT.every((TT => null === TT))) return pk;
        const OT = Tf(Math.max(...KT.map((TT => {
            var kT;
            return null !== (kT = null === TT || void 0 === TT ? void 0 : TT.width) && void 0 !== kT ? kT : 1
          })))),
          yT = new Uint32Array(kc(OT)).fill(4294967295),
          fT = KT.map((TT => null === TT ? yT : sy(TT.alpha, TT.width, TT.width, OT)));
        return {
          kind: "cutout",
          key: `cutout:${OT}:${fT.map((TT=>TT.join(","))).join("|")}`,
          size: OT,
          faces: fT
        }
      }
      allocate(TT) {
        if (this.nextCaster >= cc) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const kT = this.nextCaster++;
        if (this.writeCaster(kT, ik, 0, 0, 0), "shape" === TT.kind) {
          const cT = this.allocateMask(TT.mask.length);
          cT >= 0 && (this.sink(cT, TT.mask), this.writeCaster(kT, qk, cT, 0, 8))
        } else if ("cutout" === TT.kind) {
          const cT = kc(TT.size),
            lT = this.allocateMask(6 * cT);
          if (lT >= 0) {
            const MT = new Uint32Array(6 * cT);
            TT.faces.forEach(((TT, kT) => {
              MT.set(TT, kT * cT)
            })), this.sink(lT, MT), this.writeCaster(kT, Tc, lT, 0, TT.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(kT, TT.planes).finally((() => {
          this.planesLoading--
        })));
        return kT
      }
      async loadPlanes(TT, kT) {
        const cT = await Promise.all(kT.map((TT => this.texture(TT.texture))));
        if (cT.some((TT => null === TT))) return;
        const lT = cT,
          MT = Tf(Math.max(...lT.map((TT => Math.min(TT.width, TT.height))))),
          KT = kc(MT),
          OT = this.allocateMask(kT.length * (4 + KT));
        if (OT < 0) return;
        const yT = new Uint32Array(kT.length * (4 + KT)),
          fT = 4 * kT.length;
        kT.forEach(((TT, kT) => {
          const cT = OT + fT + kT * KT;
          yT.set(function(TT, kT) {
            const [cT, lT] = TT.tangent, MT = Math.hypot(cT, lT) || 1, KT = cT / MT, OT = lT / MT, yT = TT.centre[0] * OT - TT.centre[1] * KT, fT = new Uint32Array(4);
            return new Float32Array(fT.buffer, 0, 3).set([KT, OT, yT]), fT[3] = kT, fT
          }(TT, cT), 4 * kT), yT.set(sy(lT[kT].alpha, lT[kT].width, lT[kT].height, MT), fT + kT * KT)
        })), this.sink(OT, yT), this.writeCaster(TT, sk, OT, kT.length, MT)
      }
      texture(TT) {
        let kT = this.textures.get(TT);
        return kT || (kT = this.loadTexture(TT).catch((kT => (this.warn(`Sun shadows: no mask for ${TT}: ${kT instanceof Error?kT.message:String(kT)}`), null))), this.textures.set(TT, kT)), kT
      }
      allocateMask(TT) {
        if (this.nextMaskWord + TT > lc) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const kT = 32768 + this.nextMaskWord;
        return this.nextMaskWord += TT, kT
      }
      writeCaster(TT, kT, cT, lT, MT) {
        this.sink(0 + 4 * TT, Uint32Array.of(kT, cT, lT, MT))
      }
      warnOnce(TT) {
        this.warned.has(TT) || (this.warned.add(TT), this.warn(TT))
      }
    }
    var lf = cT(37577);

    function Mf(TT) {
      return !TT.Ot && !TT.QlT && !TT.Gv
    }

    function Kf() {
      return {
        bricks: new Uint32Array(Lk),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Xk)
      }
    }
    class Of {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = TT, this.writeVoxels = kT, this.writePool = cT, this.warn = lT, this.eyeChunk = null, this.slotChunk = new Array(ek).fill(null), this.slotVersion = new Float64Array(ek).fill(-1), this.slotPool = new Array(ek).fill(null), this.starved = new Uint8Array(ek), this.queue = [], this.queued = new Uint8Array(ek), this.queueSorted = !0, this.freePool = new Uint32Array(Mc), this.freeCount = Mc, this.casterTable = null, this.warnedPool = !1, this.scratch = Kf(), this.victimScratch = Kf(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * ek), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let MT = 0; MT < Mc; MT++) this.freePool[MT] = 65535 - MT
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Mc - this.freeCount
      }
      chunkAdded(TT) {
        if (null === this.eyeChunk || !this.inRadius(TT.i, TT.j, TT.k)) return;
        const kT = Bk(TT.i, TT.j, TT.k);
        this.slotChunk[kT] = TT, this.slotVersion[kT] = -1, this.enqueue(kT)
      }
      update(TT, kT, cT) {
        const lT = this.casters.blockCaster;
        if (lT !== this.casterTable) {
          this.casterTable = lT;
          for (let TT = 0; TT < ek; TT++) this.slotVersion[TT] = -1, this.slotChunk[TT] && this.enqueue(TT)
        }
        const MT = Math.floor(TT[0] / 32),
          KT = Math.floor(TT[1] / 32),
          OT = Math.floor(TT[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== MT || this.eyeChunk[1] !== KT || this.eyeChunk[2] !== OT) && (this.eyeChunk = [MT, KT, OT], this.follow(kT), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let yT = 0; yT < ek; yT++) {
          const TT = this.slotChunk[yT];
          TT && (TT.VkT || TT.Zv !== this.slotVersion[yT]) && this.enqueue(yT)
        }
        this.drain(cT), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(TT, kT) {
        this.records.set(kT, 4 * TT), this.windowTopStale = !0, this.writeVoxels(4 * TT, kT)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const TT = this.records;
        let kT = -1 / 0;
        for (let lT = 0; lT < TT.length; lT += 4) {
          const cT = 255 & TT[lT + 3];
          cT !== Ek && cT !== Zk || !this.inRadius(TT[lT], TT[lT + 1], TT[lT + 2]) || (kT = Math.max(kT, TT[lT + 1] * zk + (TT[lT + 3] >>> 8)))
        }
        const cT = kT === -1 / 0 ? 1 : kT + gk;
        cT !== this.windowTop[0] && (this.windowTop[0] = cT, this.writeVoxels(Rk, this.windowTop))
      }
      follow(TT) {
        const kT = this.eyeChunk,
          [cT, lT, MT] = Jk;
        for (let OT = -MT; OT <= MT; OT++)
          for (let MT = -lT; MT <= lT; MT++)
            for (let lT = -cT; lT <= cT; lT++) {
              var KT;
              const cT = kT[0] + lT,
                yT = kT[1] + MT,
                fT = kT[2] + OT,
                xT = Bk(cT, yT, fT),
                IT = this.slotChunk[xT];
              if (IT && !IT.VkT && IT.i === cT && IT.j === yT && IT.k === fT) continue;
              const AT = null !== (KT = TT(cT, yT, fT)) && void 0 !== KT ? KT : null;
              IT && (IT.i !== cT || IT.j !== yT || IT.k !== fT) && this.slotPool[xT] && (this.release(xT), this.record.fill(0), this.writeRecord(xT, this.record)), this.slotChunk[xT] = AT, this.slotVersion[xT] = -1, (AT || IT) && this.enqueue(xT)
            }
      }
      requeueStarved() {
        for (let TT = 0; TT < ek; TT++) this.starved[TT] && this.slotChunk[TT] && this.enqueue(TT)
      }
      enqueue(TT) {
        this.queued[TT] || (this.queued[TT] = 1, this.queue.push(TT), this.queueSorted = !1)
      }
      drain(TT) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const TT = new Map;
          for (const kT of this.queue) TT.set(kT, this.slotDistance(kT));
          this.queue.sort(((kT, cT) => TT.get(cT) - TT.get(kT))), this.queueSorted = !0
        }
        const kT = performance.now();
        let cT = 0;
        const lT = [];
        for (; this.queue.length > 0 && (0 === cT || performance.now() - kT < TT);) {
          const TT = this.queue.pop(),
            kT = this.slotChunk[TT];
          !kT || kT.VkT || Mf(kT) ? (this.queued[TT] = 0, this.encodeSlot(TT), cT++) : lT.push(TT)
        }
        for (let MT = lT.length - 1; MT >= 0; MT--) this.queue.push(lT[MT])
      }
      slotDistance(TT) {
        const kT = this.slotChunk[TT],
          cT = this.eyeChunk;
        return kT ? Math.max(Math.abs(kT.i - cT[0]), Math.abs(kT.j - cT[1]), Math.abs(kT.k - cT[2])) : 0
      }
      inRadius(TT, kT, cT) {
        const lT = this.eyeChunk,
          [MT, KT, OT] = Jk;
        return Math.abs(TT - lT[0]) <= MT && Math.abs(kT - lT[1]) <= KT && Math.abs(cT - lT[2]) <= OT
      }
      release(TT) {
        const kT = this.slotPool[TT];
        if (kT) {
          for (let TT = kT.length - 1; TT >= 0; TT--) this.freePool[this.freeCount++] = kT[TT];
          this.slotPool[TT] = null
        }
      }
      encodeSlot(TT) {
        var kT, cT, lT, MT, KT;
        let OT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          yT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const fT = null !== (kT = null === (cT = this.slotPool[TT]) || void 0 === cT ? void 0 : cT.length) && void 0 !== kT ? kT : 0;
        this.release(TT), this.starved[TT] = 0;
        const xT = this.slotChunk[TT],
          IT = this.record;
        if (!xT || xT.VkT || !xT.rC) return this.slotChunk[TT] = null, this.slotVersion[TT] = -1, IT.fill(0), this.writeRecord(TT, IT), void(fT > 0 && this.requeueStarved());
        this.slotVersion[TT] = xT.Zv;
        const AT = this.encodeBricks(xT, TT, OT, yT);
        IT[0] = xT.i, IT[1] = xT.j, IT[2] = xT.k, IT[3] = AT, this.writeRecord(TT, IT), null === (lT = this.encoded) || void 0 === lT || lT.call(this, xT), yT && (null !== (MT = null === (KT = this.slotPool[TT]) || void 0 === KT ? void 0 : KT.length) && void 0 !== MT ? MT : 0) < fT && this.requeueStarved()
      }
      encodeBricks(TT, kT, cT, lT) {
        if (TT.lv) return Vk;
        const MT = this.casters.blockCaster,
          {
            data: KT,
            stride: OT,
            offset: yT
          } = TT.rC,
          [fT, xT, IT] = OT,
          AT = zk,
          {
            bricks: CT,
            cells: jT,
            special: vT
          } = cT;
        CT.fill(0), vT.fill(0);
        let tT = 0,
          hT = 0,
          NT = 0;
        for (let QT = 0; QT < AT; QT++) {
          const kT = QT >> 2,
            cT = 3 & QT,
            lT = TT.aj[QT],
            OT = lT === lf.d ? -1 : lT < MT.length ? MT[lT] : 0;
          if (0 !== OT)
            for (let TT = 0; TT < AT; TT++) {
              const lT = TT >> 2,
                ST = 3 & TT;
              let DT = yT + TT * fT + QT * xT;
              for (let TT = 0; TT < AT; TT++, DT += IT) {
                let yT = OT;
                if (yT < 0) {
                  const TT = KT[DT];
                  if (yT = TT < MT.length ? MT[TT] : 0, 0 === yT) continue
                }
                const fT = Wk(lT, kT, TT >> 2),
                  xT = nk(ST, cT, 3 & TT);
                CT[3 * fT + (xT >>> 5)] |= 1 << (31 & xT), jT[fT * uk + xT] = yT, tT++, NT = QT, yT === pk ? hT++ : vT[fT] = 1
              }
            }
        }
        return 0 === tT ? Vk : 32768 === hT ? Ek | NT << 8 : (this.writePoolEntries(kT, cT, lT), this.writeVoxels(dk + kT * Lk, CT), Zk | NT << 8)
      }
      writePoolEntries(TT, kT, cT) {
        const {
          bricks: lT,
          cells: MT,
          special: KT
        } = kT, OT = this.entry;
        let yT = 0;
        for (let IT = 0; IT < Xk; IT++) yT += KT[IT];
        if (0 === yT) return;
        cT && this.freeCount < yT && this.evictBeyond(TT, yT);
        const fT = new Uint32Array(cT ? Math.min(yT, this.freeCount) : 0);
        let xT = 0;
        for (let IT = 0; IT < Xk; IT++) {
          if (!KT[IT]) continue;
          const cT = 3 * IT;
          if (xT === fT.length) {
            this.dropSpecials(kT, IT), this.starved[TT] = 1;
            continue
          }
          const yT = this.freePool[--this.freeCount];
          fT[xT++] = yT;
          for (let TT = 0; TT < uk; TT++) {
            const kT = lT[cT + (TT >>> 5)] >>> (31 & TT) & 1 ? MT[IT * uk + TT] : 0;
            1 & TT ? OT[TT >> 1] |= kT << 16 : OT[TT >> 1] = kT
          }
          lT[cT + 2] = yT + 1, this.writePool(Kc + 32 * yT, OT)
        }
        fT.length > 0 && (this.slotPool[TT] = fT)
      }
      evictBeyond(TT, kT) {
        const cT = this.slotDistance(TT),
          lT = [];
        for (let MT = 0; MT < ek; MT++) MT !== TT && this.slotPool[MT] && this.slotDistance(MT) > cT && lT.push(MT);
        lT.sort(((TT, kT) => this.slotDistance(kT) - this.slotDistance(TT)));
        for (const MT of lT) {
          if (this.freeCount >= kT) return;
          const TT = this.slotChunk[MT];
          TT && !TT.VkT && TT.rC && (TT.Zv === this.slotVersion[MT] || Mf(TT)) && this.encodeSlot(MT, this.victimScratch, !1)
        }
      }
      dropSpecials(TT, kT) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const cT = 3 * kT;
        for (let lT = 0; lT < uk; lT++) TT.cells[kT * uk + lT] !== pk && (TT.bricks[cT + (lT >>> 5)] &= ~(1 << (31 & lT)))
      }
    }
    var yf = cT(37308);
    class ff {
      constructor(TT) {
        this.device = TT, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new hc, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.pA = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = TT.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = TT.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(TT, kT, cT) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: lT
        } = this;
        lT.Ij(TT, kT), cT.forEachSunShadowCaster((TT => {
          this.add(TT)
        })), lT.finish();
        const MT = 0 === lT.parts;
        if (MT && this.uploadedEmpty) return;
        this.uploadedEmpty = MT;
        const {
          queue: KT
        } = this.device, {
          words: OT
        } = lT;
        KT.writeBuffer(this.frameBuffer, 0, OT, 0, 16385), lT.refs > 0 && KT.writeBuffer(this.frameBuffer, 65540, OT, xc, lT.refs), MT || KT.writeBuffer(this.frameBuffer, 327684, OT, Ic, lT.parts * fc)
      }
      add(TT) {
        const kT = this.gridFor(TT);
        if (!kT) return;
        const {
          frame: cT
        } = this, {
          pA: lT,
          worldAt: MT,
          instances: KT,
          instanceCount: OT,
          thin: yT
        } = TT;
        if (KT)
          for (let fT = 0; fT < OT; fT++) yT ? (Qc(KT, 16 * fT, lT, MT, this.pA), cT.add(kT, this.pA)) : cT.add(kT, KT, 16 * fT);
        else cT.add(kT, lT, MT)
      }
      gridFor(TT) {
        let {
          geometry: kT,
          indexed: cT,
          first: lT,
          count: MT,
          skip: KT
        } = TT, OT = this.grids.get(kT);
        OT || (OT = new Map, this.grids.set(kT, OT));
        const yT = `${cT?lT:-1-lT}:${MT}:${null!==KT&&void 0!==KT?KT:""}`;
        let fT = OT.get(yT);
        if (void 0 !== fT || this.gridsFull) return fT;
        const xT = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = xT + 2;
        else if (xT > this.bakeDeadline) return;
        return fT = this.bake(kT, cT, lT, MT, KT), void 0 !== fT && OT.set(yT, fT), fT
      }
      bake(TT, kT, cT, lT, MT) {
        const KT = TT.vertexAttributes.find((TT => "position" === TT.kind)),
          OT = KT ? function(TT, kT, cT, lT) {
            let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const KT = TT => kT ? kT[cT + TT] : cT + TT,
              OT = TT => null !== MT && [0, 1, 2].some((kT => {
                const cT = KT(TT + kT);
                return cT >= MT[0] && cT < MT[1]
              })),
              yT = [1 / 0, 1 / 0, 1 / 0],
              fT = [-1 / 0, -1 / 0, -1 / 0];
            for (let QT = 0; QT + 2 < lT; QT += 3)
              if (!OT(QT))
                for (let kT = 0; kT < 3; kT++) {
                  const cT = KT(QT + kT);
                  for (let kT = 0; kT < 3; kT++) yT[kT] = Math.min(yT[kT], TT[3 * cT + kT]), fT[kT] = Math.max(fT[kT], TT[3 * cT + kT])
                }
            const xT = Math.max(fT[0] - yT[0], fT[1] - yT[1], fT[2] - yT[2]);
            if (!(xT > 0)) return null;
            const IT = xT / 64,
              AT = [0, 0, 0],
              CT = [0, 0, 0],
              jT = [0, 0, 0];
            for (let QT = 0; QT < 3; QT++) AT[QT] = Math.min(65, Math.ceil((fT[QT] - yT[QT]) / IT) + 1), CT[QT] = yT[QT] - IT / 2, jT[QT] = CT[QT] + AT[QT] * IT;
            const vT = new Uint32Array(Math.ceil(AT[0] * AT[1] * AT[2] / 32)),
              tT = new Float64Array(9),
              hT = [0, 0, 0],
              NT = [0, 0, 0];
            for (let QT = 0; QT + 2 < lT; QT += 3)
              if (!OT(QT)) {
                for (let kT = 0; kT < 3; kT++) {
                  const cT = KT(QT + kT);
                  for (let lT = 0; lT < 3; lT++) tT[3 * kT + lT] = TT[3 * cT + lT]
                }
                for (let TT = 0; TT < 3; TT++) {
                  const kT = Math.min(tT[TT], tT[3 + TT], tT[6 + TT]),
                    cT = Math.max(tT[TT], tT[3 + TT], tT[6 + TT]);
                  hT[TT] = Math.max(0, Math.floor((kT - CT[TT]) / IT - 1e-6)), NT[TT] = Math.min(AT[TT] - 1, Math.floor((cT - CT[TT]) / IT + 1e-6))
                }
                for (let TT = hT[2]; TT <= NT[2]; TT++)
                  for (let kT = hT[1]; kT <= NT[1]; kT++)
                    for (let cT = hT[0]; cT <= NT[0]; cT++)
                      if (Sc(tT, CT[0] + (cT + .5) * IT, CT[1] + (kT + .5) * IT, CT[2] + (TT + .5) * IT, IT / 2)) {
                        const lT = cT + AT[0] * (kT + AT[1] * TT);
                        vT[lT >>> 5] |= 1 << (31 & lT)
                      }
              } return {
              words: vT,
              lo: CT,
              hi: jT,
              cell: IT,
              dims: AT
            }
          }((0, yf.g)(KT, TT.vertexCount), kT ? TT.indexData : null, cT, lT, MT) : null;
        if (!OT) return null;
        const {
          words: yT,
          ...fT
        } = OT;
        if (this.gridTop + yT.length > Cc) return void(this.gridsFull = !0);
        const xT = this.gridTop;
        return this.gridTop += yT.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * xT, yT), {
          ...fT,
          at: xT
        }
      }
    }
    const xf = Math.cos(1 * Math.PI / 180);

    function If(TT, kT) {
      return TT[0] * kT[0] + TT[1] * kT[1] + TT[2] * kT[2] < xf
    }
    async function Af(TT) {
      const {
        pixels: kT,
        width: cT,
        height: lT
      } = await uM(TT), MT = new Uint8Array(cT * lT);
      for (let KT = 0; KT < MT.length; KT++) MT[KT] = kT[4 * KT + 3];
      return {
        width: cT,
        height: lT,
        alpha: MT
      }
    }
    class Cf {
      constructor(TT, kT) {
        this.device = TT, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(ac.h), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = TT.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = TT.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * Uk,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = TT.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [cT, lT, MT] = ac.j;
        this.volume = TT.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: cT,
            height: lT,
            depthOrArrayLayers: MT
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
          size: ac.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = kT ? new ff(TT) : null, this.entityStandIn = kT ? null : TT.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var TT, kT;
        const cT = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || cT.push("Lite sun shadow volume pipeline compiling");
        const lT = null !== (TT = null === (kT = this.casters) || void 0 === kT ? void 0 : kT.planesLoading) && void 0 !== TT ? TT : 0;
        return lT > 0 && cT.push(`${lT} Lite sun shadow plane casters loading their textures`), cT
      }
      entries() {
        var TT, kT, cT, lT;
        const MT = mk.x;
        return [{
          binding: MT.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: MT.rC,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: MT.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: MT.volume,
          resource: this.volumeView
        }, {
          binding: MT.sampler,
          resource: this.volumeSampler
        }, {
          binding: MT.entities,
          resource: {
            buffer: null !== (TT = null === (kT = this.entities) || void 0 === kT ? void 0 : kT.frameBuffer) && void 0 !== TT ? TT : this.entityStandIn
          }
        }, {
          binding: MT.entityGrids,
          resource: {
            buffer: null !== (cT = null === (lT = this.entities) || void 0 === lT ? void 0 : lT.gridBuffer) && void 0 !== cT ? cT : this.entityStandIn
          }
        }]
      }
      prepare(TT, kT, cT) {
        var lT;
        this.entitiesThisFrame = !1;
        const MT = null !== (lT = null === cT || void 0 === cT ? void 0 : cT.sunShadowReach()) && void 0 !== lT ? lT : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!cT || !MT.sunShadow && !MT.airShadow) return void(this.volumeHolds = null);
        if (TT.pA.o_ !== zk) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${TT.pA.o_}; everything is lit.`)));
        const KT = this.start(TT);
        this.casters.update(TT.sC, TT.sC.Mj.length);
        const OT = TT.QC;
        for (let CT = 0; CT < 3; CT++) this.eye[CT] = kT[CT] + OT[CT];
        const yT = (0, ac.r)(this.eye);
        this.staleNear = yT;
        const fT = TT.pA.ft;
        KT.update(this.eye, ((TT, kT, cT) => fT.xt(TT, kT, cT)), 1);
        const xT = (0, ac.k)(cT.M_()),
          IT = KT.eyeChunk,
          AT = this.uniformInts;
        for (let CT = 0; CT < 3; CT++) AT[CT] = IT[CT], AT[4 + CT] = yT[CT];
        this.entitiesThisFrame = null !== this.entities && MT.sunShadow, this.entitiesThisFrame && tc(this.uniformFloats, 8, kT, xT), null !== this.volumeHolds && (this.castersWritten || If(xT, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(yT, xT, IT)
      }
      markStale(TT) {
        const kT = this.staleNear,
          cT = zk,
          lT = [TT.i * cT, TT.j * cT, TT.k * cT];
        for (let KT = 0; KT < 3; KT++)
          if (lT[KT] + cT <= kT[KT] - cT || lT[KT] >= kT[KT] + ac.j[KT] + cT) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const MT = this.stale;
        for (let KT = 0; KT < MT.length; KT += 4)
          if (MT[KT] === TT.i && MT[KT + 1] === TT.j && MT[KT + 2] === TT.k) return void(MT[KT + 3] = this.swept);
        if (16 === MT.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        MT.push(TT.i, TT.j, TT.k, this.swept)
      }
      writeStale() {
        const TT = this.swept,
          kT = this.stale;
        this.staleAll && TT - this.staleAllSwept >= ac.f && (this.staleAll = !1, kT.length = 0);
        let cT = 0;
        for (let MT = 0; MT < kT.length; MT += 4)
          if (TT - kT[MT + 3] < ac.f) {
            for (let TT = 0; TT < 4; TT++) kT[cT + TT] = kT[MT + TT];
            cT += 4
          } kT.length = cT;
        const lT = this.uniformInts;
        lT[3] = this.staleAll ? 5 : cT / 4;
        for (let MT = 0; MT < 4; MT++)
          for (let TT = 0; TT < 3; TT++) lT[16 + 4 * MT + TT] = 4 * MT < cT ? kT[4 * MT + TT] * zk : 0
      }
      writeUniform() {
        const TT = this.uniformInts;
        let kT = this.uniformWritten;
        if (kT) {
          let cT = !0;
          for (let lT = 0; lT < TT.length && cT; lT++) cT = TT[lT] === kT[lT];
          if (cT) return
        }
        kT ??= this.uniformWritten = new Int32Array(TT.length), kT.set(TT), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(TT) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, TT)
      }
      computeVolume(TT, kT, cT) {
        const lT = this.buildVolumePass();
        if (!lT) return void(this.volumeHolds = null);
        const MT = (0, ac.n)(this.volumeHolds, TT);
        this.volumeHolds = TT;
        const KT = 1 === MT.length && MT[0].size.every(((TT, kT) => TT === ac.j[kT])),
          OT = this.sweptChunk,
          yT = this.sweptLight,
          fT = kT[0] !== yT[0] || kT[1] !== yT[1] || kT[2] !== yT[2],
          xT = cT[0] !== OT[0] || cT[1] !== OT[1] || cT[2] !== OT[2],
          IT = fT && If(kT, yT);
        if ((KT || this.written || xT || IT) && (this.fastLeft = ac.f), KT || this.written || fT || xT) {
          this.written = !1;
          for (let TT = 0; TT < 3; TT++) OT[TT] = cT[TT], yT[TT] = kT[TT];
          this.sweepLeft = KT ? 0 : ac.f
        }
        if (KT ? this.swept += ac.f : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, MT.push(...(0, ac.v)(TT, this.slice)), this.slice = (this.slice + 1) % ac.f, this.swept++), 0 === MT.length) return;
        const AT = (0, ac.w)(this.workData, kT, MT);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const CT = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          jT = CT.beginComputePass({
            label: "sun-shadow-volume"
          });
        jT.setPipeline(lT.pipeline), jT.setBindGroup(Pc.group, lT.bindGroup), jT.dispatchWorkgroups(Math.ceil(AT / ac.g)), jT.end(), this.device.queue.submit([CT.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const TT = Pc,
          kT = GPUShaderStage.COMPUTE,
          cT = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: TT.uniform,
              visibility: kT,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: TT.rC,
              visibility: kT,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: TT.special,
              visibility: kT,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: TT.work,
              visibility: kT,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: TT.volume,
              visibility: kT,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          lT = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: cT,
            entries: [{
              binding: TT.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: TT.rC,
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
            bindGroupLayouts: [cT]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: wc()
            }),
            entryPoint: "main"
          }
        }).then((TT => {
          this.volumePass = {
            pipeline: TT,
            bindGroup: lT
          }
        }), (TT => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(TT)}`)
        })), null
      }
      start(TT) {
        if (this.window) return this.window;
        const kT = (TT, kT) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * TT, kT)
        };
        this.casters = new kf(((TT, cT) => {
          this.castersWritten = !0, kT(TT, cT)
        }), Af);
        const cT = new Of(this.casters, ((TT, kT) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * TT, kT)
        }), kT);
        return cT.encoded = TT => {
          this.markStale(TT)
        }, TT.pA.on("chunkAdded", (TT => {
          cT.chunkAdded(TT)
        })), this.window = cT, cT
      }
    }
    var jf = cT(38531),
      vf = cT(38539);
    const tf = 0,
      hf = 3,
      Nf = 4,
      Qf = 5;

    function Sf(TT, kT, cT, lT) {
      TT.drawOffset(kT, lT + tf), kT[lT + hf] = TT.drawTime(), cT[lT + Nf] = TT.ring.drawStart(), cT[lT + Qf] = TT.ring.drawCount()
    }
    const Df = `\n${hl}\n\nconst MAX_STOPS = ${vf.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${vf.b/4}>,\n\tcolor1: array<vec4f, ${vf.b}>,\n\tcolor2: array<vec4f, ${vf.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${vf.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${vf.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var af = cT(41199);
    class Ff {
      constructor(TT, kT, cT, lT) {
        this.device = TT, this.system = kT, this.frameIndex = cT, this.bindings = lT, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, af.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (TT, kT) => {
          this.device.queue.writeBuffer(this.ring, TT * vf.f * 4, this.system.ring.records, TT * vf.f, (kT - TT) * vf.f)
        };
        const {
          name: MT
        } = kT;
        this.ring = TT.createBuffer({
          label: `particles-${MT}`,
          size: kT.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = TT.createBuffer({
          label: `particles-uniforms-${MT}`,
          size: 4 * vf.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(TT) {
        const kT = (0, af.b)(this.system, this.uniformBits, TT);
        kT && (this.uniformBits = kT, this.device.queue.writeBuffer(this.uniforms, 0, kT))
      }
      bind() {
        const {
          system: TT
        } = this, kT = this.texture;
        (0, af.h)(TT, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${TT.name}`,
          size: [vf.l, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * vf.l
        }, [vf.l, 1]));
        const cT = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === kT.view && this.boundSampler === kT.sampler && this.boundRamp === cT || (this.boundView = kT.view, this.boundSampler = kT.sampler, this.boundRamp = cT, this.bindGroup = this.device.createBindGroup({
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
            resource: kT.sampler
          }, {
            binding: 3,
            resource: kT.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: cT
          }]
        }))
      }
      destroy() {
        var TT;
        this.ring.destroy(), this.uniforms.destroy(), null === (TT = this.ramp) || void 0 === TT || TT.destroy()
      }
    }
    class rf {
      constructor(TT, kT) {
        this.device = TT, this.resources = kT, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, xk.d)();
        const cT = TT.createBindGroupLayout({
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
          bindGroupLayouts: [kk(TT), cT, this.frameLayout]
        }), this.module = TT.createShaderModule({
          label: "particles",
          code: Df
        });
        const lT = TT.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        TT.queue.writeTexture({
          texture: lT
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: cT,
          rampSampler: TT.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: lT.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (kT, cT) => (this.bindTarget(cT), {
            renderable: this.renderable,
            pipeline: Ok(TT, cT),
            draw: TT => cT === this.preparedTarget ? this.draw(TT) : 0
          })
        }
      }
      get SlT() {
        return this.systems.size
      }
      reset() {
        for (const TT of this.systems.keys()) TT.reset()
      }
      describePendingWork() {
        return (0, jf.d)(this.systems.keys(), "Lite")
      }
      iJ(TT, kT) {
        const cT = new jf.c(TT, kT, this);
        return this.systems.set(cT, new Ff(this.device, cT, this.allocateFrameIndex(), this.bindings)), cT
      }
      y5(TT, kT) {
        for (const cT of this.systems.keys()) cT.y5(TT, kT)
      }
      canDraw(TT) {
        const kT = this.systems.get(TT),
          cT = TT.texture ? this.resources.boundTexture(TT.texture) : null;
        if (!kT || !cT || !this.targetPipelines) return !1;
        if (kT.texture = cT, kT.pipelines.length = 0, !gM(TT.blendMode)) return this.warnOnce(`blend:${TT.blendMode}`, `particle blend mode ${TT.blendMode} is not drawn (${TT.name})`), !0;
        const lT = (0, JM.i)(TT.blendMode);
        for (const MT of lT) {
          const TT = this.pipelineFor(MT);
          if (!1 === TT) return kT.pipelines.length = 0, !0;
          TT && kT.pipelines.push(TT)
        }
        return kT.pipelines.length === lT.length
      }
      disposeStopped(TT) {
        TT.dispose()
      }
      remove(TT) {
        const kT = this.systems.get(TT);
        kT && (this.systems.delete(TT), kT.destroy(), this.freeFrameIndices.push(kT.frameIndex))
      }
      prepare(TT) {
        const kT = TT.animationRatio || 1;
        yk(this.renderable._worldCenter, TT, lk), this.preparedTarget = this.target, this.draws.length = 0;
        let cT = 0;
        for (const lT of this.systems.values()) {
          const TT = lT.system;
          if (!TT.animateIfActive(kT)) continue;
          if (TT.ring.takeUploads(lT.upload), !TT.hasLiveParticles() || 0 === lT.pipelines.length) continue;
          lT.writeUniforms(this.warnOnce), lT.bind();
          const MT = 64 * lT.frameIndex;
          lT.count = TT.ring.drawCount(), Sf(TT, this.frameData, this.frameBits, MT), cT = Math.max(cT, MT + 64), this.draws.push(lT)
        }
        cT > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, cT)
      }
      draw(TT) {
        let kT = 0,
          cT = null;
        for (const lT of this.draws) {
          TT.setBindGroup(1, lT.bindGroup), TT.setBindGroup(2, this.frameBindGroup, [256 * lT.frameIndex]);
          for (const MT of lT.pipelines) MT !== cT && (TT.setPipeline(MT), cT = MT), TT.draw(4, lT.count), kT++
        }
        return kT
      }
      bindTarget(TT) {
        this.target = TT;
        const kT = `${TT._colorFormat}|${TT._depthStencilFormat}|${TT._depthCompare}|${TT._sampleCount}`;
        let cT = this.pipelines.get(kT);
        cT || (cT = new Map, this.pipelines.set(kT, cT)), this.targetPipelines = cT
      }
      pipelineFor(TT) {
        var kT;
        const cT = this.targetPipelines,
          lT = cT.get(TT);
        if (void 0 !== lT) return lT;
        cT.set(TT, null);
        const MT = this.target,
          KT = TT === JM.c,
          OT = null !== (kT = MT._depthCompare) && void 0 !== kT ? kT : ck;
        return this.device.createRenderPipelineAsync({
          label: `particles-${TT}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: iT({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: KT ? 1 : 0
            }
          }, MT, UM((0, JM.f)(TT))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: MT._depthStencilFormat ? {
            format: MT._depthStencilFormat,
            depthCompare: OT,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: MT._sampleCount
          }
        }).then((kT => {
          cT.set(TT, kT)
        }), (kT => {
          cT.set(TT, !1), console.error("Lite particle pipeline failed", kT), WM("particles", `blend-${TT}`, kT)
        })), null
      }
      allocateFrameIndex() {
        const TT = this.freeFrameIndices.pop();
        if (void 0 !== TT) return TT;
        const kT = this.nextFrameIndex++;
        if (64 * (kT + 1) > this.frameData.length) {
          const TT = new Float32Array(2 * this.frameData.length);
          TT.set(this.frameData), this.frameData = TT, this.frameBits = new Uint32Array(TT.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return kT
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
    class Pf {
      constructor(TT, kT, cT, lT, MT) {
        this.lite = TT, this.canvas = kT, this.info = cT, this.resources = MT, this.QcT = !1, this.needPOTTextures = !1, this.lq = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = kT.width, this.renderHeight = kT.height, this.caps = {
          maxTextureSize: lT.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: lT.maxTextureArrayLayers
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
      setSize(TT, kT) {
        if (this.renderWidth === TT && this.renderHeight === kT) return !1;
        const cT = this.renderWidth,
          lT = this.renderHeight;
        this.renderWidth = TT, this.renderHeight = kT;
        try {
          (0, dT.n)(this.lite, TT, kT)
        } catch (MT) {
          if (MT instanceof DOMException && "InvalidStateError" === MT.name) {
            this.renderWidth = cT, this.renderHeight = lT;
            try {
              (0, dT.n)(this.lite, cT, lT)
            } catch {
              this.canvas.width = cT, this.canvas.height = lT
            }
            return console.warn("WebGPU could not allocate render targets for resize", TT, kT, MT.message), !1
          }
          throw MT
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
      iN() {
        const TT = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : TT - this.lastFrameTime, this.lastFrameTime = TT
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(TT, kT) {
        const cT = document.createElement("canvas");
        return cT.width = TT, cT.height = kT, cT
      }
      Aq(TT, kT) {
        var cT;
        return null !== (cT = this.resources.Aq.get(TT)) && void 0 !== cT ? cT : new UT(this.resources, TT, kT)
      }
      atlasArray(TT, kT, cT) {
        return this.resources.atlasArray(TT, kT, cT)
      }
    }
    class wf {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(TT) {
        this.fov = TT.fov, this.nearPlane = TT.near, this.farPlane = TT.far;
        const kT = TT.worldMatrix;
        for (let cT = 0; cT < 16; cT++)
          if (this.worldMatrix[cT] !== kT[cT]) return this.worldMatrix.set(kT), void this.worldMatrixVersion++
      }
    }
    class mf {
      constructor(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
        let IT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = TT, this.et = kT, this.sceneTask = cT, this.gpuDevice = lT, this.terrain = MT, this.meshes = KT, this.particles = OT, this.resources = yT, this.sunShadow = IT, this.qTT = void 0, this.backendName = "WebGPU (Lite)", this.Ws = void 0, this.modelMeshes = void 0, this.camera = new wf, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new RT(lT.lost), this.deviceLost = this.refusals.deviceLost, this.qTT = new Pf(TT, fT, xT, lT.limits, yT), (0, bT.J)({
          ty: TT => {
            HT(TT) && yT.textureSlot(TT)
          },
          loaded: TT => HT(TT) ? yT.textureLoaded(TT) : null,
          canvasUpdated: (TT, kT, cT) => {
            HT(TT) && yT.canvasUpdated(TT, kT, cT)
          }
        }), this.Ws = KT.Ws, this.modelMeshes = KT.modelMeshes, kT.camera = this.camera
      }
      get castsEntitySunShadows() {
        var TT, kT;
        return null !== (TT = null === (kT = this.sunShadow) || void 0 === kT ? void 0 : kT.tracesEntities) && void 0 !== TT && TT
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(TT) {
        this.modelMeshes.attach(TT.model, TT.sceneMirror);
        const kT = TT.et;
        this.setClearColour(kT.clearColor.r, kT.clearColor.g, kT.clearColor.b), kT.draw = () => {
          this.drawFrame(TT, kT)
        }
      }
      render(TT) {
        try {
          this.qTT.iN(), TT.et.render()
        } catch (kT) {
          throw this.refusals.frameFailed(kT), kT
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var TT, kT, cT, lT;
        const MT = [...this.particles.describePendingWork(), ...null !== (TT = null === (kT = this.sunShadow) || void 0 === kT ? void 0 : kT.describePendingWork()) && void 0 !== TT ? TT : []],
          KT = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (cT = this.terrain.sceneDepth) && void 0 !== cT && cT.compiling ? 1 : 0) + (null !== (lT = this.terrain.shadowMask) && void 0 !== lT && lT.compiling ? 1 : 0);
        KT > 0 && MT.push(`${KT} Lite pipelines compiling`);
        const OT = this.terrain.buffersAwaitingVerdict;
        OT > 0 && MT.push(`${OT} Lite terrain buffers awaiting their out-of-memory verdict`);
        const yT = this.resources.texturesLoading;
        return yT > 0 && MT.push(`${yT} Lite textures loading`), MT
      }
      prepareTexture(TT) {
        return null !== this.resources.boundTexture(TT) || this.resources.textureFailed(TT)
      }
      drawFrame(TT, kT) {
        var cT, lT, MT, KT, OT, yT;
        const fT = Iy(TT);
        this.camera.copyFromView(fT), this.setClearColour(fT.clearColour[0], fT.clearColour[1], fT.clearColour[2]), null === (cT = this.sunShadow) || void 0 === cT || cT.prepare(TT.cC, fT.eye, null !== (lT = TT.cC.Bj) && void 0 !== lT ? lT : null), this.terrain.prepare(TT, fT), null === (MT = this.terrain.sceneDepth) || void 0 === MT || MT.setPlanes(fT.near, fT.far), null === (KT = this.terrain.shadowMask) || void 0 === KT || KT.prepare(fT), nO(this.sceneTask), this.meshes.prepare(kT, fT, TT.model.earthSky, null !== (OT = TT.cC.Bj) && void 0 !== OT ? OT : null), this.particles.prepare(fT);
        const xT = performance.now();
        this.resources.flushUploads(), null === (yT = this.sunShadow) || void 0 === yT || yT.traceEntities(this.meshes);
        try {
          (0, dT.l)(this.engine, this.lastFrameTime > 0 ? xT - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = xT
      }
      setClearColour(TT, kT, cT) {
        const lT = this.et.clearColor;
        lT.r = TT, lT.g = kT, lT.b = cT, lT.a = 1
      }
    }
    const bf = "WebGPU device lost while Lite was starting";

    function zf(TT, kT) {
      return "object" === typeof TT && null !== TT ? Object.assign(TT, {
        startStep: kT
      }) : TT
    }
    async function Jf(TT, kT) {
      const cT = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!cT) throw zf(new Error("No WebGPU adapter"), "no_adapter");
      const lT = cT.info,
        MT = {
          vendor: (null === lT || void 0 === lT ? void 0 : lT.vendor) || "unknown vendor",
          renderer: (null === lT || void 0 === lT ? void 0 : lT.architecture) || "unknown renderer",
          version: (null === lT || void 0 === lT ? void 0 : lT.description) || "unknown version"
        },
        KT = function(TT) {
          const kT = {};
          for (const cT in TT.limits) {
            const lT = TT.limits[cT];
            "number" === typeof lT && (kT[cT] = lT)
          }
          return kT
        }(cT);
      let OT;
      TT.style.background = "black";
      try {
        OT = await (0, dT.d)(TT, {
          msaaSamples: kT.okT ? 4 : 1,
          requiredLimits: KT,
          alphaMode: "premultiplied"
        })
      } catch (IT) {
        throw zf(IT, "#47" === (null === (yT = IT) || void 0 === yT ? void 0 : yT.message) ? "no_adapter" : "device")
      }
      var yT;
      const fT = function(TT) {
        return TT._device
      }(OT);
      let xT = null;
      fT.lost.then((TT => {
        xT = TT, console.error(`WebGPU device lost (${TT.reason}): ${TT.message}`)
      }));
      try {
        const cT = await async function(TT, kT, cT, lT, MT, KT) {
          const OT = (0, LT.d)(TT),
            yT = new YO(TT, kT),
            fT = new By(kT),
            xT = new bO(kT, yT, (TT => function(TT, kT) {
              for (const lT of sT(TT)) {
                var cT;
                if (lT._targetSignature === kT) return null !== (cT = lT._sceneBG) && void 0 !== cT ? cT : null
              }
              return null
            }(OT, TT))),
            IT = new rf(kT, yT);
          for (const jT of function(TT, kT, cT) {
              return [kT.opaqueRenderable, TT.opaqueRenderable, TT.skyLastRenderable, cT.renderable, kT.transparentRenderable, TT.transparentRenderable, TT.frontRenderable]
            }(xT, fT, IT)) qT(OT, jT);
          const AT = function(TT) {
            for (const kT of sT(TT))
              if ("et" === kT.name) return kT;
            throw new Error("Lite: the scene has no render task named scene")
          }(OT);
          MT && fT.installSceneDepth(AT, TT);
          const CT = KT ? new Cf(kT, KT.entities) : null;
          fT.sunShadow = CT, CT && null !== KT && void 0 !== KT && KT.entities && (fT.shadowMask = new wy(kT, AT, TT, fT));
          return xT.sunShadow = CT, await (0, LT.e)(OT), new mf(TT, OT, AT, kT, fT, xT, IT, yT, cT, lT, CT)
        }(OT, fT, TT, MT, kT.sceneDepth, kT.sunShadow);
        if (null !== xT) {
          const {
            reason: TT,
            message: kT
          } = xT;
          throw Object.assign(new Error(`${bf} (${TT}): ${kT}`), {
            fallbackReason: bf
          })
        }
        return cT
      } catch (IT) {
        throw fT.destroy(), null === xT ? IT : zf(IT, "device")
      }
    }
  },
  40512: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => fT,
      D: () => OT,
      G: () => tT,
      K: () => jT,
      L: () => vT,
      e: () => MT,
      h: () => lT,
      l: () => CT,
      p: () => IT,
      r: () => hT,
      u: () => KT,
      x: () => yT
    });
    const lT = 3,
      MT = 0,
      KT = 1,
      OT = 2,
      yT = {
        uniform: 3,
        rC: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      fT = 10,
      xT = "BloxdPackInputs",
      IT = "bloxdPackInputs",
      AT = [{
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
      CT = 80;

    function jT() {
      const TT = AT.map((TT => {
        let {
          name: kT,
          type: cT
        } = TT;
        return `    ${kT}: ${cT},\n`
      })).join("");
      return `struct ${xT} {\n${TT}}\n@group(${lT}) @binding(${MT}) var<uniform> ${IT}: ${xT};\n`
    }

    function vT(TT, kT) {
      const cT = new DataView(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, CT),
        [lT, MT, KT, OT, yT, fT] = AT;
      cT.setFloat32(lT.offset, kT.seconds, !0), cT.setUint32(MT.offset, kT.lit ? 1 : 0, !0);
      for (let xT = 0; xT < 3; xT++) cT.setInt32(KT.offset + 4 * xT, kT.renderOffset[xT], !0), cT.setFloat32(OT.offset + 4 * xT, kT.M_[xT], !0), cT.setFloat32(yT.offset + 4 * xT, kT.eyePosition[xT], !0), cT.setFloat32(fT.offset + 4 * xT, kT.shadowDirection[xT], !0)
    }

    function tT(TT) {
      const kT = new Uint32Array(Math.max(1, TT.length));
      return TT.forEach(((TT, cT) => {
        let {
          id: lT,
          rotation: MT
        } = TT;
        kT[cT] = 65535 & lT | (3 & MT) << 16
      })), kT
    }
    const hT = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);