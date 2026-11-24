export const id = 270;
export const ids = [270];
export const modules = {
  41502: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => GD,
      f: () => LD,
      j: () => rD,
      m: () => gD
    });
    var pD = wD(37267),
      sD = wD(38689),
      KD = wD(38684);

    function rD(DD, zD, wD, pD) {
      const sD = KD.q;
      zD.fill(0), DD.gravity.toArray(zD, sD.gravity), DD.colorDead.toArray(zD, sD.colorDead), wD[sD.ramp] = DD.useRampGradients ? 1 : 0;
      const rD = DD.getColorGradients(),
        LD = UD(DD, rD, "colour", pD);
      wD[sD.colorCount] = LD;
      for (let KD = 0; KD < LD; KD++) {
        var cD;
        const DD = rD[fD(rD, KD)];
        zD[sD.colorPositions + KD] = DD.gradient, DD.color1.toArray(zD, sD.color1 + 4 * KD), (null !== (cD = DD.color2) && void 0 !== cD ? cD : DD.color1).toArray(zD, sD.color2 + 4 * KD)
      }
      const gD = DD.getVelocityGradients(),
        RD = UD(DD, gD, "UG", pD);
      wD[sD.velocityCount] = RD;
      for (let KD = 0; KD < RD; KD++) nD(zD, sD.UG + 4 * KD, gD[fD(gD, KD)]);
      const AD = DD.useRampGradients ? DD.getColorRemapGradients() : null,
        ID = UD(DD, AD, "colour remap", pD);
      wD[sD.remapCount] = ID;
      for (let KD = 0; KD < ID; KD++) nD(zD, sD.remap + 4 * KD, AD[fD(AD, KD)])
    }

    function LD() {
      return {
        key: [],
        texels: new Uint8Array(4 * KD.h)
      }
    }
    const cD = [];

    function gD(DD, zD) {
      return RD(DD, cD), !hD(cD, zD.key) && (zD.key.length = 0, zD.key.push(...cD), zD.key.length > 0 && function(DD, zD) {
        for (let wD = 0; wD < KD.h; wD++) sD.l.GetCurrentGradient(wD / KD.h, DD, ((DD, zD, wD) => {
          pD.Color3.LerpToRef(DD.color, zD.color, wD, AD)
        })), zD[4 * wD] = 255 * AD.r, zD[4 * wD + 1] = 255 * AD.g, zD[4 * wD + 2] = 255 * AD.b, zD[4 * wD + 3] = 255
      }(DD.getRampGradients(), zD.texels), !0)
    }

    function RD(DD, zD) {
      zD.length = 0;
      const wD = DD.useRampGradients ? DD.getRampGradients() : null;
      if (null !== wD && void 0 !== wD && wD.length) {
        zD.push(wD.length);
        for (const DD of wD) zD.push(DD.gradient, DD.color.r, DD.color.g, DD.color.b)
      }
    }
    const AD = new pD.Color3;

    function UD(DD, zD, wD, pD) {
      return zD ? zD.length > KD.b ? (pD(`particleStops:${wD}`, `GPU particles use the first 2 and last ${KD.b-2} of more than ${KD.b} ${wD} gradient stops (${DD.name})`), KD.b) : zD.length : 0
    }

    function fD(DD, zD) {
      return zD < 2 || DD.length <= KD.b ? zD : DD.length - KD.b + zD
    }
    const ID = new Float32Array(KD.n),
      BD = new Uint32Array(ID.buffer);

    function GD(DD, zD, wD) {
      return rD(DD, ID, BD, wD), zD && hD(BD, zD) ? null : BD.slice()
    }

    function hD(DD, zD) {
      if (DD.length !== zD.length) return !1;
      for (let wD = 0; wD < DD.length; wD++)
        if (DD[wD] !== zD[wD]) return !1;
      return !0
    }

    function nD(DD, zD, wD) {
      var pD;
      DD[zD] = wD.gradient, DD[zD + 1] = wD.factor1, DD[zD + 2] = null !== (pD = wD.factor2) && void 0 !== pD ? pD : wD.factor1
    }
  },
  41496: (DD, zD, wD) => {
    function pD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const zD = new Set;
      return (wD, pD) => {
        zD.has(wD) || (zD.add(wD), console.warn(DD + pD))
      }
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  41540: (DD, zD, wD) => {
    wD.d(zD, {
      createLiteRendererAsync: () => Sc,
      liteBabylonBackend: () => ZD,
      setPipelineFailureHook: () => Fs
    });
    var pD = wD(37267),
      sD = wD(37594),
      KD = wD(37885),
      rD = wD(37210),
      LD = wD(37895);
    class cD extends LD.d {
      constructor() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        super(...zD), this.color = new pD.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: zD[0].Ul().getUniqueId(),
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
          needAlphaBlendingForMesh: DD => DD.visibility < 1 || DD.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const gD = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      RD = DD => 1 << gD.indexOf(DD),
      AD = RD("VERTEXCOLOR"),
      UD = RD("INSTANCES"),
      fD = RD("THIN_INSTANCES"),
      ID = RD("INSTANCESCOLOR"),
      BD = RD("FOG"),
      GD = RD("LITE_FRONT_LAYER");

    function hD(DD, zD, wD, pD) {
      let sD = 0;
      return DD.isVerticesDataPresent("color") && (sD |= AD), "none" !== zD && (sD |= UD), "thin" === zD && (sD |= fD, DD.isVerticesDataPresent("instanceColor") && (sD |= ID)), pD.fogEnabled && DD.applyFog && 0 !== pD.fogMode && (sD |= BD), wD >= 1 && (sD |= GD), sD
    }

    function nD(DD, zD) {
      DD.updateColor4("color", zD.color, zD.alpha)
    }
    var MD = wD(37827),
      OD = wD(37422),
      JD = wD(37304),
      ED = wD(37186),
      QD = wD(37816),
      XD = wD(37824),
      VD = wD(37206),
      PD = wD(37208),
      CD = wD(37217);
    const xD = ED.c.GLSL;
    class TD {
      constructor(DD, zD) {
        this.name = DD, this.oB = zD, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Bl = {
          addOnce: DD => {
            this.disposers.push(DD)
          }
        }, this.uniqueId = zD.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      Ul() {
        return this.oB
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
      needAlphaBlendingForMesh(DD) {
        return (0, VD.T)(this.model, DD.visibility, DD.hasVertexAlpha)
      }
      needAlphaTestingForMesh(DD) {
        return (0, VD.W)(this.model, DD.visibility, DD.hasVertexAlpha)
      }
      dispose() {
        (0, OD.o)(this);
        for (const DD of this.disposers.splice(0)) DD()
      }
      get model() {
        return (0, VD.db)(this)
      }
    }
    const bD = new WeakSet;

    function jD(DD) {
      return bD.has(DD)
    }

    function dD(DD) {
      bD.add(DD)
    }
    const SD = {
      create: (DD, zD) => ((0, JD.r)(DD, new TD(DD.name, zD)), PD.b.defines()),
      write: () => {},
      addFeature: (DD, zD) => {
        const wD = DD.mirror;
        zD.feature === XD.g && zD.state.dirLightCount > 0 && (DD.disableLighting = !0, (0, VD.ab)(DD)), "BLOXD_LIGHTING" in zD.defines && (0, OD.l)(wD), zD.feature === QD.j && ((0, MD.g)(zD.state, xD), function(DD, zD) {
          const wD = DD.Ul().iI();
          zD.textures.forEach(((pD, sD) => {
            setTimeout((() => {
              var KD, rD;
              const {
                url: LD
              } = pD.source;
              wD.atlasArray(LD, null !== (KD = null === (rD = zD.sources.pixels) || void 0 === rD ? void 0 : rD[sD]) && void 0 !== KD ? KD : null, zD.sources.layerWidth).then((wD => {
                (0, MD.b)(DD, zD, sD, wD, wD.layerWidth, wD.layers, xD)
              })).catch((DD => {
                console.error(`Failed to build texture array for atlas ${sD}`, DD)
              }))
            }))
          }))
        }(wD, zD.state))
      },
      texture: (DD, zD, wD) => {
        let {
          data: pD,
          sets: sD
        } = wD;
        var KD;
        (dD(DD), pD) && (DD.uvSet = null !== (KD = null === sD || void 0 === sD ? void 0 : sD.coordinatesIndex) && void 0 !== KD ? KD : 0, (0, JD.cb)(DD.matrix, null !== sD && void 0 !== sD ? sD : {}))
      },
      cube: dD,
      canvas: (DD, zD, wD) => {
        let {
          width: pD,
          height: sD,
          mipmaps: KD,
          samplingMode: rD = CD.i.trilinear,
          hasAlpha: LD = !1,
          wrap: cD = CD.c.clamp
        } = wD;
        const gD = DD.iI().createCanvas(pD, sD),
          RD = new CD.l("2d", {
            kind: "canvas",
            width: pD,
            height: sD,
            canvas: gD
          }, {
            samplingMode: rD,
            wrapU: cD,
            wrapV: cD,
            noMipmap: !KD,
            invertY: !0
          });
        return RD.hasAlpha = LD, dD(RD), RD
      }
    };
    var iD = wD(37438),
      lD = wD(37119);
    class WD {
      constructor(DD, zD, wD) {
        this.engine = DD, this.clearColor = zD, this.ambientColor = wD, this.onBeforeRenderObservable = new lD.b, this.onBeforeCameraRenderObservable = new lD.b, this.onAfterRenderObservable = new lD.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.XE = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      iI() {
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
      addPendingData(DD) {
        this.pending.push(DD)
      }
      removePendingData(DD) {
        const zD = this.pending.indexOf(DD); - 1 !== zD && this.pending.splice(zD, 1)
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

    function ND() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const ZD = {
      ZwD: ND,
      rsD: (DD, zD) => {
        const wD = new WD(DD.engine, pD.e.FromArray(zD.clearColor), pD.Color3.FromArray(zD.ambientColor));
        (0, rD.d)(SD, wD), DD.oB = wD,
          function(DD, zD) {
            const wD = Object.assign((0, iD.i)(DD, "camera"), {
              layerMask: 268435455
            });
            DD.model.nodes.setWorldSource(wD.row, DD.model.view.worldMatrix), DD.camera = zD.activeCamera = wD
          }(DD, wD), (0, sD.i)(DD, ((DD, zD, wD) => (0, KD.j)(DD, zD, wD, LD.d)))
      },
      wsD: () => {},
      setBabylonFog: () => {},
      csD: ND,
      UsD: () => {},
      linesFromArrays: (DD, zD, wD) => (0, KD.j)(DD, zD, wD, cD),
      aB: () => {},
      AsD: ND
    };
    var yD = wD(41595),
      kD = wD(41611);
    class mD {
      constructor(DD) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const zD = new Promise((DD => {
          this.refused = DD
        }));
        this.deviceLost = Promise.race([DD, zD]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(DD) {
        (function(DD) {
          const {
            name: zD,
            message: wD
          } = null !== DD && void 0 !== DD ? DD : {};
          return "InvalidStateError" === zD && "string" === typeof wD && wD.startsWith("GPUDevice.")
        })(DD) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: DD.message,
          framesRefused: !0
        }))
      }
    }
    class eD {
      constructor(DD) {
        this.resources = DD, this.matrixKey = {
          bA: 0
        }, this.attributesKey = {
          bA: 0
        }, this.inputs = Object.create(null);
        for (let zD = 0; zD < 4; zD++) this.inputs[`world${zD}`] = new uD(this.matrixKey, 16 * zD, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(DD, zD) {
        this.resources.vertexBufferCreated(this.matrixKey, DD, !0), zD && this.resources.vertexBufferCreated(this.attributesKey, zD, !0)
      }
    }
    class oD extends eD {
      constructor(DD, zD, wD) {
        super(DD), this.mesh = zD, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const pD = this.inputs;
        let sD = 0;
        for (const {
            size: rD
          }
          of wD) sD += rD;
        for (const {
            name: rD,
            offset: LD,
            size: cD,
            type: gD
          }
          of wD) pD[rD] = new uD(this.attributesKey, 4 * LD, 4 * sD, cD, !0, gD);
        this.rowStride = sD, DD.b_.set(zD, this);
        const KD = zD.isVerticesDataPresent;
        zD.isVerticesDataPresent = (DD, wD) => DD in pD || KD.call(zD, DD, wD)
      }
      attach(DD, zD) {
        this.matrices = DD, this.attributes = zD, this.bind(DD, zD), this.mirror(DD, DD.length, DD.length / 16)
      }
      Z5(DD) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, DD ? 64 * DD : void 0)
      }
      y5() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(DD, zD) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * DD, 16 * zD)
      }
      attributeRows(DD, zD) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, DD * this.rowStride, zD * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(DD, zD, wD) {
        const pD = this.mesh._thinInstanceDataStorage;
        pD.matrixData = DD, pD.matrixBufferSize = zD, pD.worldMatrices = null, pD.instancesCount = wD
      }
    }
    class aD extends eD {
      constructor(DD, zD, wD) {
        var pD, sD, KD, rD;
        super(DD), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (pD = null === wD || void 0 === wD ? void 0 : wD.interleavedKinds) && void 0 !== pD ? pD : null, this.offsets = null !== (sD = null === wD || void 0 === wD ? void 0 : wD.interleavedOffsets) && void 0 !== sD ? sD : [], this.rowStride = null !== (KD = null === wD || void 0 === wD ? void 0 : wD.interleavedRowStride) && void 0 !== KD ? KD : 0, null === (rD = this.layout) || void 0 === rD || rD.forEach(((DD, zD) => {
          this.inputs[DD] = new uD(this.attributesKey, 4 * this.offsets[zD], 4 * this.rowStride, wD.strides[DD])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), DD.batchUploads.set(zD, this), zD.Bl.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(DD) {
        const zD = this.packedBatch;
        return zD.renderSelf ? 0 === DD ? this.packedSource : zD.instances[DD - 1] : zD.instances[DD]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(DD, zD, wD, pD) {
        const sD = (zD.renderSelf ? 1 : 0) + zD.rows.length;
        if (this.frame = pD, this.count = sD, this.packedSource = DD, this.packedBatch = zD, 0 === sD) return;
        if (DD.getWorldMatrix(), 16 * sD > this.matrices.length) {
          let DD = this.matrices.length / 16;
          for (; DD < sD;) DD *= 2;
          this.matrices = new Float32Array(16 * DD), this.attributes &&= new Float32Array(DD * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let KD = 0;
        zD.renderSelf && this.packRow(KD++, DD, zD.row, wD);
        for (let rD = 0; rD < zD.rows.length; rD++) this.packRow(KD++, zD.instances[rD], zD.rows[rD], wD);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * sD), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, sD * this.rowStride)
      }
      packRow(DD, zD, wD, pD) {
        const sD = this.matrices;
        if (wD < 0) sD.set(zD.getWorldMatrix().m, 16 * DD);
        else
          for (let gD = 0; gD < 16; gD++) sD[16 * DD + gD] = pD[16 * wD + gD];
        const KD = this.attributes;
        if (!KD) return;
        const rD = zD.iW,
          LD = this.layout;
        for (let gD = 0; gD < LD.length; gD++) {
          var cD;
          const zD = null !== (cD = rD[LD[gD]]) && void 0 !== cD ? cD : 0,
            wD = DD * this.rowStride + this.offsets[gD];
          zD.toArray ? zD.toArray(KD, wD) : zD.copyToArray ? zD.copyToArray(KD, wD) : KD[wD] = zD
        }
      }
    }
    class uD {
      constructor(DD, zD, wD, pD) {
        let sD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = DD, this.byteOffset = zD, this.byteStride = wD, this.size = pD, this.instanced = sD, this.type = KD, this.normalized = rD
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
    const vD = "CANVAS_ALPHA_ONE",
      tD = `override ${vD}: bool = false;`,
      FD = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function YD(DD, zD, wD) {
      var pD;
      let sD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const KD = null !== (pD = zD._colorFormat) && void 0 !== pD ? pD : "bgra8unorm",
        rD = sD ? 15 : 0;
      return wD ? {
        ...DD,
        targets: [{
          format: KD,
          blend: {
            color: wD,
            alpha: FD
          },
          writeMask: rD
        }]
      } : {
        ...DD,
        constants: {
          ...DD.constants,
          [vD]: 1
        },
        targets: [{
          format: KD,
          writeMask: rD
        }]
      }
    }

    function HD(DD, zD) {
      DD._renderables.push(zD)
    }

    function qD(DD) {
      var zD, wD;
      return null !== (zD = null === (wD = DD._frameGraph) || void 0 === wD ? void 0 : wD._tasks) && void 0 !== zD ? zD : []
    }

    function Dz(DD) {
      return DD._currentEncoder
    }

    function zz(DD) {
      return DD.createBindGroupLayout({
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
    const wz = "greater-equal",
      pz = 2e5,
      sz = 1e5,
      Kz = new WeakMap;

    function rz(DD, zD) {
      let wD = Kz.get(DD);
      if (!wD) {
        wD = {
          module: DD.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Kz.set(DD, wD)
      }
      const pD = `${zD._colorFormat}|${zD._depthStencilFormat}|${zD._sampleCount}`;
      let sD = wD.pipelines.get(pD);
      if (!sD) {
        var KD;
        const {
          module: rD
        } = wD;
        sD = DD.createRenderPipeline({
          label: `placeholder ${pD}`,
          layout: DD.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: rD,
            entryPoint: "v"
          },
          fragment: {
            module: rD,
            entryPoint: "f",
            targets: [{
              format: null !== (KD = zD._colorFormat) && void 0 !== KD ? KD : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: zD._depthStencilFormat ? {
            format: zD._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: zD._sampleCount
          }
        }), wD.pipelines.set(pD, sD)
      }
      return sD
    }

    function Lz(DD, zD, wD) {
      const pD = zD.eye,
        sD = zD.viewMatrix;
      DD[0] = pD[0] + sD[2] * wD, DD[1] = pD[1] + sD[6] * wD, DD[2] = pD[2] + sD[10] * wD
    }
    var cz = wD(37934),
      gz = wD(41496),
      Rz = wD(37201);
    const Az = Math.PI,
      Uz = Az / 1.95,
      fz = [5e-4 / 94, 125e-7, 5e-4 / 18],
      Iz = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((DD => {
        let [zD, wD] = DD;
        return .434 * Az * Math.pow(2 * Az / zD, 2) * wD
      }));

    function Bz(DD, zD, wD) {
      const {
        up: pD,
        mieDirectionalG: sD
      } = DD, KD = 1 - nz(1 - Math.exp(zD[1] / 45e4), 0, 1), rD = DD.rayleigh - (1 - KD), LD = Math.hypot(zD[0], zD[1], zD[2]), cD = LD > 0 ? 1 / LD : 0, gD = wD.sunDir;
      for (let fD = 0; fD < 3; fD++) gD[fD] = zD[fD] * cD;
      const RD = gD[0] * pD[0] + gD[1] * pD[1] + gD[2] * pD[2],
        AD = 1e3 * Math.max(0, 1 - Math.exp(-(Uz - Math.acos(nz(RD, -1, 1))) / 1.5));
      wD.sunE = AD;
      const UD = .2 * DD.turbidity * 1e-17 * DD.mieCoefficient;
      for (let fD = 0; fD < 3; fD++) {
        const DD = fz[fD] * rD,
          zD = Iz[fD] * UD,
          pD = AD / (DD + zD);
        wD.inScatterR[fD] = DD * pD, wD.inScatterM[fD] = zD * pD, wD.extinctionBeta[fD] = 8400 * DD + 1250 * zD
      }
      return wD.sunsetMix = nz(Math.pow(1 - RD, 5), 0, 1), wD.sunDiscE = 19e3 * AD, wD.mieScale = (1 - sD * sD) / (4 * Az), wD.mieBase = 1 + sD * sD, wD.mieSlope = 2 * sD, wD
    }
    const Gz = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const hz = 1 / function(DD) {
      const {
        A: zD,
        B: wD,
        C: pD,
        D: sD,
        E: KD,
        F: rD
      } = Gz;
      return (DD * (zD * DD + pD * wD) + sD * KD) / (DD * (zD * DD + wD) + sD * rD) - KD / rD
    }(1e3);

    function nz(DD, zD, wD) {
      return Math.min(Math.max(DD, zD), wD)
    }
    const Mz = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function Oz(DD, zD) {
      const wD = new Map(zD),
        pD = [],
        sD = [],
        KD = () => 0 === sD.length || sD[sD.length - 1].active;
      let rD = null;
      const LD = () => {
        const DD = [...wD].filter((DD => {
            let [, zD] = DD;
            return !0 !== zD
          })),
          zD = DD.map((DD => {
            let [zD] = DD;
            return zD
          })).join("|");
        rD = DD.length ? new RegExp(`\\b(${zD})\\b`, "g") : null
      };
      LD();
      for (const cD of DD.split("\n")) {
        const DD = Mz.exec(cD);
        if (!DD) {
          KD() && pD.push(rD ? Jz(cD, rD, wD) : cD);
          continue
        }
        const zD = DD[1],
          gD = DD[2].trim();
        if ("ifdef" === zD || "ifndef" === zD || "if" === zD) {
          const DD = KD(),
            pD = "if" === zD ? Ez(gD, wD) : wD.has(gD) === ("ifdef" === zD);
          sD.push({
            active: DD && pD,
            parentActive: DD,
            taken: pD
          })
        } else if ("elif" === zD || "else" === zD) {
          const DD = sD[sD.length - 1];
          if (!DD) throw new Error(`#${zD} without #if`);
          const pD = !DD.taken && ("else" === zD || Ez(gD, wD));
          DD.active = DD.parentActive && pD, DD.taken = DD.taken || pD
        } else if ("endif" === zD) {
          if (!sD.pop()) throw new Error("#endif without #if")
        } else if (KD()) {
          const [DD, ...pD] = gD.split(/\s+/);
          "undef" === zD ? wD.delete(DD) : wD.set(DD, !pD.length || pD.join(" ")), LD()
        }
      }
      if (sD.length) throw new Error("Unterminated #if");
      return pD.join("\n")
    }

    function Jz(DD, zD, wD) {
      return DD.replace(zD, (DD => {
        const zD = wD.get(DD);
        return "string" === typeof zD ? zD : DD
      }))
    }

    function Ez(DD, zD) {
      var wD;
      const pD = null !== (wD = DD.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== wD ? wD : [];
      let sD = 0;
      const KD = () => pD[sD],
        rD = () => pD[sD++],
        LD = DD => {
          const wD = /^\d/.test(DD) ? DD : zD.get(DD);
          return "string" === typeof wD ? parseInt(wD) : Number.NaN
        },
        cD = () => {
          const DD = rD();
          if ("!" === DD) return !cD();
          if ("(" === DD) {
            const DD = RD();
            return rD(), DD
          }
          if ("defined" === DD) {
            const DD = "(" === KD();
            DD && rD();
            const wD = rD();
            return DD && rD(), zD.has(wD)
          }
          const wD = KD();
          if ("==" === wD || "!=" === wD || ">" === wD || "<" === wD || ">=" === wD || "<=" === wD) {
            rD();
            const zD = LD(DD),
              pD = LD(rD());
            if (Number.isNaN(zD) || Number.isNaN(pD)) return !1;
            switch (wD) {
              case "==":
                return zD === pD;
              case "!=":
                return zD !== pD;
              case ">":
                return zD > pD;
              case "<":
                return zD < pD;
              case ">=":
                return zD >= pD;
              default:
                return zD <= pD
            }
          }
          return zD.has(DD)
        },
        gD = () => {
          let DD = cD();
          for (;
            "&&" === KD();) {
            rD();
            const zD = cD();
            DD = DD && zD
          }
          return DD
        },
        RD = () => {
          let DD = gD();
          for (;
            "||" === KD();) {
            rD();
            const zD = gD();
            DD = DD || zD
          }
          return DD
        },
        AD = RD();
      if (sD !== pD.length) throw new Error(`Cannot evaluate #if ${DD}`);
      return AD
    }
    var Qz = wD(37194),
      Xz = wD(37507),
      Vz = wD(37516),
      Pz = wD(40617),
      Cz = wD(38728);
    const xz = 32,
      Tz = [10, 3, 10],
      bz = [21, 7, 21],
      jz = bz[0] * bz[1] * bz[2],
      dz = 0,
      Sz = 1,
      iz = 2,
      lz = 3,
      Wz = 64,
      Nz = 512,
      Zz = 4 * jz,
      yz = 1536,
      kz = Zz + jz * yz,
      mz = 1073741824,
      ez = kz + 1;

    function oz(DD, zD) {
      const wD = DD % zD;
      return wD < 0 ? wD + zD : wD
    }

    function az(DD, zD, wD) {
      return pD = oz(DD, bz[0]), sD = oz(zD, bz[1]), KD = oz(wD, bz[2]), pD + bz[0] * (sD + bz[1] * KD);
      var pD, sD, KD
    }

    function uz(DD, zD, wD) {
      return DD + 8 * (zD + 8 * wD)
    }

    function vz(DD, zD, wD) {
      return DD + 4 * (zD + 4 * wD)
    }
    const tz = 65535,
      Fz = 0,
      Yz = 1,
      Hz = 2,
      qz = 3;

    function Dw(DD) {
      return Math.ceil(DD * DD / 32)
    }
    const zw = 8192,
      ww = 1 << 18,
      pw = 65536,
      sw = 294912,
      Kw = 128,
      rw = 4096,
      Lw = 16,
      gw = 16385,
      Rw = 81921,
      Aw = 147457,
      Uw = 4194304;
    const fw = [0, 0, 0],
      Iw = [0, 0, 0];

    function Bw(DD, zD, wD, pD) {
      ! function(DD, zD, wD) {
        const [pD, sD, KD] = [DD[0], DD[1], DD[2]];
        let rD, LD, cD;
        Math.abs(sD) < .99 ? (rD = KD, LD = 0, cD = -pD) : (rD = -sD, LD = pD, cD = 0);
        const gD = Math.hypot(rD, LD, cD);
        zD[0] = rD / gD, zD[1] = LD / gD, zD[2] = cD / gD, wD[0] = sD * zD[2] - KD * zD[1], wD[1] = KD * zD[0] - pD * zD[2], wD[2] = pD * zD[1] - sD * zD[0]
      }(pD, fw, Iw);
      const sD = 1 / 32;
      for (const [KD, rD] of [
          [0, fw],
          [4, Iw]
        ]) {
        for (let wD = 0; wD < 3; wD++) DD[zD + KD + wD] = rD[wD] * sD;
        DD[zD + KD + 3] = -(rD[0] * wD[0] + rD[1] * wD[1] + rD[2] * wD[2]) * sD
      }
    }
    class Gw {
      constructor() {
        this.words = new Uint32Array(Aw), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Jf(DD, zD) {
        this.parts = 0, this.refs = 0, this.view = DD, this.viewAt = zD;
        const wD = DD[zD + 1] * DD[zD + 6] - DD[zD + 2] * DD[zD + 5],
          pD = DD[zD + 2] * DD[zD + 4] - DD[zD] * DD[zD + 6],
          sD = DD[zD] * DD[zD + 5] - DD[zD + 1] * DD[zD + 4],
          KD = Math.hypot(wD, pD, sD) || 1;
        this.light[0] = wD / KD, this.light[1] = pD / KD, this.light[2] = sD / KD
      }
      add(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= rw || ! function(DD, zD, wD) {
            const pD = DD[zD],
              sD = DD[zD + 1],
              KD = DD[zD + 2],
              rD = DD[zD + 3],
              LD = DD[zD + 4],
              cD = DD[zD + 5],
              gD = DD[zD + 6],
              RD = DD[zD + 7],
              AD = DD[zD + 8],
              UD = DD[zD + 9],
              fD = DD[zD + 10],
              ID = DD[zD + 11],
              BD = DD[zD + 12],
              GD = DD[zD + 13],
              hD = DD[zD + 14],
              nD = DD[zD + 15],
              MD = pD * cD - sD * LD,
              OD = pD * gD - KD * LD,
              JD = pD * RD - rD * LD,
              ED = sD * gD - KD * cD,
              QD = sD * RD - rD * cD,
              XD = KD * RD - rD * gD,
              VD = AD * GD - UD * BD,
              PD = AD * hD - fD * BD,
              CD = AD * nD - ID * BD,
              xD = UD * hD - fD * GD,
              TD = UD * nD - ID * GD,
              bD = fD * nD - ID * hD,
              jD = MD * bD - OD * TD + JD * xD + ED * CD - QD * PD + XD * VD;
            if (!(Math.abs(jD) > 1e-12)) return !1;
            const dD = 1 / jD;
            return wD[0] = (cD * bD - gD * TD + RD * xD) * dD, wD[1] = (KD * TD - sD * bD - rD * xD) * dD, wD[2] = (GD * XD - hD * QD + nD * ED) * dD, wD[3] = (fD * QD - UD * XD - ID * ED) * dD, wD[4] = (gD * CD - LD * bD - RD * PD) * dD, wD[5] = (pD * bD - KD * CD + rD * PD) * dD, wD[6] = (hD * JD - BD * XD - nD * OD) * dD, wD[7] = (AD * XD - fD * JD + ID * OD) * dD, wD[8] = (LD * TD - cD * CD + RD * VD) * dD, wD[9] = (sD * CD - pD * TD - rD * VD) * dD, wD[10] = (BD * QD - GD * JD + nD * MD) * dD, wD[11] = (UD * JD - AD * QD - ID * MD) * dD, wD[12] = (cD * PD - LD * xD - gD * VD) * dD, wD[13] = (pD * xD - sD * PD + KD * VD) * dD, wD[14] = (GD * OD - BD * ED - hD * MD) * dD, wD[15] = (AD * ED - UD * OD + fD * MD) * dD, !0
          }(zD, wD, this.inverse)) return;
        const {
          view: pD,
          viewAt: sD
        } = this, KD = wD;
        let rD = 1 / 0,
          LD = 1 / 0,
          cD = -1 / 0,
          gD = -1 / 0,
          RD = -1 / 0;
        const [AD, UD, fD] = this.light;
        for (let JD = 0; JD < 8; JD++) {
          const wD = 1 & JD ? DD.hi[0] : DD.lo[0],
            ID = 2 & JD ? DD.hi[1] : DD.lo[1],
            BD = 4 & JD ? DD.hi[2] : DD.lo[2],
            GD = wD * zD[KD] + ID * zD[KD + 4] + BD * zD[KD + 8] + zD[KD + 12],
            hD = wD * zD[KD + 1] + ID * zD[KD + 5] + BD * zD[KD + 9] + zD[KD + 13],
            nD = wD * zD[KD + 2] + ID * zD[KD + 6] + BD * zD[KD + 10] + zD[KD + 14],
            MD = pD[sD] * GD + pD[sD + 1] * hD + pD[sD + 2] * nD + pD[sD + 3],
            OD = pD[sD + 4] * GD + pD[sD + 5] * hD + pD[sD + 6] * nD + pD[sD + 7];
          rD = Math.min(rD, MD), LD = Math.min(LD, OD), cD = Math.max(cD, MD), gD = Math.max(gD, OD), RD = Math.max(RD, AD * GD + UD * hD + fD * nD)
        }
        if (cD < -1 || gD < -1 || rD >= 1 || LD >= 1) return;
        const ID = this.parts++,
          BD = this.rects;
        BD[4 * ID] = hw(rD), BD[4 * ID + 1] = hw(LD), BD[4 * ID + 2] = hw(cD), BD[4 * ID + 3] = hw(gD);
        const GD = this.inverse,
          {
            cell: hD,
            dims: nD,
            lo: MD
          } = DD,
          OD = Rw + ID * Lw;
        for (let JD = 0; JD < 3; JD++) this.floats[OD + 4 * JD] = GD[JD] / hD, this.floats[OD + 4 * JD + 1] = GD[4 + JD] / hD, this.floats[OD + 4 * JD + 2] = GD[8 + JD] / hD, this.floats[OD + 4 * JD + 3] = (GD[12 + JD] - MD[JD]) / hD;
        this.words[OD + 12] = DD.at, this.floats[OD + 13] = RD + .001 * (1 + Math.abs(RD)), this.words[OD + 14] = nD[0] | nD[1] << 8 | nD[2] << 16
      }
      finish() {
        const DD = Kw,
          {
            counts: zD,
            rects: wD,
            words: pD
          } = this;
        zD.fill(0);
        let sD = 0,
          KD = 0;
        for (; KD < this.parts; KD++) {
          const pD = 4 * KD,
            rD = (wD[pD + 2] - wD[pD] + 1) * (wD[pD + 3] - wD[pD + 1] + 1);
          if (sD + rD > 65536) break;
          sD += rD;
          for (let sD = wD[pD + 1]; sD <= wD[pD + 3]; sD++)
            for (let KD = wD[pD]; KD <= wD[pD + 2]; KD++) zD[sD * DD + KD]++
        }
        let rD = 0;
        for (let cD = 0; cD < 16384; cD++) pD[cD] = rD, rD += zD[cD], zD[cD] = pD[cD];
        pD[16384] = rD;
        for (let cD = 0; cD < KD; cD++) {
          const sD = 4 * cD;
          for (let KD = wD[sD + 1]; KD <= wD[sD + 3]; KD++)
            for (let rD = wD[sD]; rD <= wD[sD + 2]; rD++) pD[gw + zD[KD * DD + rD]++] = cD
        }
        const LD = this.floats;
        for (let cD = 0; cD < 16384; cD++) {
          const DD = gw + pD[cD],
            zD = DD + Math.min(pD[cD + 1] - pD[cD], 64);
          for (let wD = DD + 1; wD < zD; wD++) {
            const zD = pD[wD],
              sD = LD[81934 + zD * Lw];
            let KD = wD - 1;
            for (; KD >= DD && LD[81934 + pD[KD] * Lw] < sD; KD--) pD[KD + 1] = pD[KD];
            pD[KD + 1] = zD
          }
        }
        this.refs = sD
      }
    }

    function hw(DD) {
      return Math.min(127, Math.max(0, Math.floor((.5 * DD + .5) * Kw)))
    }

    function nw(DD, zD, wD, pD, sD) {
      for (let KD = 0; KD < 4; KD++)
        for (let rD = 0; rD < 4; rD++) sD[4 * KD + rD] = DD[zD + 4 * KD] * wD[pD + rD] + DD[zD + 4 * KD + 1] * wD[pD + 4 + rD] + DD[zD + 4 * KD + 2] * wD[pD + 8 + rD] + DD[zD + 4 * KD + 3] * wD[pD + 12 + rD]
    }

    function Mw(DD, zD, wD, pD, sD) {
      const KD = DD[0] - zD,
        rD = DD[1] - wD,
        LD = DD[2] - pD,
        cD = DD[3] - zD,
        gD = DD[4] - wD,
        RD = DD[5] - pD,
        AD = DD[6] - zD,
        UD = DD[7] - wD,
        fD = DD[8] - pD;
      if (Math.min(KD, cD, AD) > sD || Math.max(KD, cD, AD) < -sD) return !1;
      if (Math.min(rD, gD, UD) > sD || Math.max(rD, gD, UD) < -sD) return !1;
      if (Math.min(LD, RD, fD) > sD || Math.max(LD, RD, fD) < -sD) return !1;
      const ID = cD - KD,
        BD = gD - rD,
        GD = RD - LD,
        hD = AD - cD,
        nD = UD - gD,
        MD = fD - RD,
        OD = BD * MD - GD * nD,
        JD = GD * hD - ID * MD,
        ED = ID * nD - BD * hD;
      if (Math.abs(OD * KD + JD * rD + ED * LD) > sD * (Math.abs(OD) + Math.abs(JD) + Math.abs(ED))) return !1;
      const QD = [ID, BD, GD, hD, nD, MD, KD - AD, rD - UD, LD - fD];
      for (let XD = 0; XD < 3; XD++) {
        const DD = QD[3 * XD],
          zD = QD[3 * XD + 1],
          wD = QD[3 * XD + 2];
        for (let pD = 0; pD < 3; pD++) {
          const ID = 0 === pD ? 0 : 1 === pD ? wD : -zD,
            BD = 0 === pD ? -wD : 1 === pD ? 0 : DD,
            GD = 0 === pD ? zD : 1 === pD ? -DD : 0,
            hD = ID * KD + BD * rD + GD * LD,
            nD = ID * cD + BD * gD + GD * RD,
            MD = ID * AD + BD * UD + GD * fD,
            OD = sD * (Math.abs(ID) + Math.abs(BD) + Math.abs(GD));
          if (Math.min(hD, nD, MD) > OD || Math.max(hD, nD, MD) < -OD) return !1
        }
      }
      return !0
    }
    const Ow = new Float32Array(1);
    new Uint32Array(Ow.buffer);
    var Jw = wD(38730);

    function Ew(DD) {
      const [zD, wD, pD] = Jw.o;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${DD.group}) @binding(${DD.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${zD-1}, ${wD-1}, ${pD-1});\n}\n`
    }

    function Qw(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [sD, KD, rD] = bz, [LD, cD, gD] = Tz, RD = Math.log2(xz), AD = pD ? "var<private> bloxdSpCrossed: bool;\n" : "", UD = pD ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${DD.group}) @binding(${DD.dU}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${DD.group}) @binding(${DD.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${wD?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${AD}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Yz}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${Hz}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${wD?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${qz}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${sD}, ${KD}, ${rD});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${sD} * (s.y + ${KD} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${LD}, ${cD}, ${gD}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${RD}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${lz}u) {\n\t\treturn named && state == ${iz}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${Zz}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${kz}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${zD?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${zD?`\t\tif (exits && step > 0 && step % ${Pw} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${RD}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${dz}u || kind == ${Sz}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${iz}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${Zz}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${UD}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Xw = {
      group: 0,
      uniform: 0,
      dU: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function Vw() {
      const DD = Xw;
      return `${Ew(DD)}${Qw(DD,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Jw.e}>,\n}\n@group(${DD.group}) @binding(${DD.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${DD.group}) @binding(${DD.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Jw.h})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Jw.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Jw.f}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Pw = 2;
    const Cw = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function xw(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const pD = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${zD.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        sD = "trace" === wD || "lit" === wD,
        KD = "maskEdge" === wD ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        rD = sD ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${zD.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${zD.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===wD?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${KD};\n`;
      return `${pD}${DD.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${sD?function(){const[DD,zD,wD]=Jw.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${DD}.0, ${zD}.0, ${wD}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${rD}}\n`:""}${DD.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${zD.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${zD.renderOffset});\n}\n`:""}`
    }
    const Tw = "bloxdSpOwnTexture";

    function bw(DD) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${DD.texture}) - 1u)))`
    }
    const jw = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${cz.e.map((DD=>{let[zD,wD]=DD;return`\tbloxdSpOut.${zD} = (bloxdSpWord & ${wD}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function dw(DD) {
      return `bloxdSpFlags(${DD})`
    }
    const Sw = `${Pz.m}.eyePosition`;

    function iw(DD, zD, wD, pD, sD) {
      const KD = DD.indexOf(zD);
      if (KD < 0 || DD.indexOf(zD, KD + 1) >= 0) throw new Error(`Lite's ${sD} program changed at the shader pack ${pD} hook: ${KD<0?"no":"more than one"} anchor (lite/${sD}ShaderPack.ts)`);
      return DD.slice(0, KD) + wD + DD.slice(KD + zD.length)
    }

    function lw(DD) {
      return DD.sunShadow || DD.airShadow
    }

    function Ww(DD, zD) {
      return zD && lw(DD)
    }
    const Nw = {
      group: Pz.i,
      ...Pz.u
    };

    function Zw(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!lw(DD)) return "";
      if (zD) {
        const zD = Nw,
          sD = "trace" === wD || "lit" === wD;
        let KD = "";
        DD.sunShadow && (KD = sD ? `${Qw(zD,!0,"lit"===wD)}${pD=zD,`@group(${pD.group}) @binding(${pD.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${pD.group}) @binding(${pD.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(DD, zD, wD) {
          const pD = `@group(${DD}) @binding(${zD}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return wD ? `${pD}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Cw}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((DD=>`\t{\n\t\tlet o = vec2i(${DD});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : pD
        }(zD.group, Pz.v, "maskEdge" === wD));
        const rD = {
          shadowDirection: `${Pz.m}.shadowDirection`,
          renderOffset: `${Pz.m}.renderOffset`,
          eyePosition: `${Pz.m}.eyePosition`
        };
        return `${Ew(zD)}${KD}${function(DD){const[zD,wD,pD]=Jw.o;return`@group(${DD.group}) @binding(${DD.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${DD.group}) @binding(${DD.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${zD}.0, ${wD}.0, ${pD}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(zD)}${xw(DD,rD,wD)}`
      }
      var pD;
      return `${DD.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${DD.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function yw(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!zD) return "";
      const KD = (rD = "fragmentInputs.vPositionW", LD = DD.sunShadow ? {
        normal: wD,
        flags: pD
      } : null, `\n\tbloxdSpShadowPosition = ${rD};\n${LD?`\tbloxdSpShadowNormal = normalize(${LD.normal});\n\tbloxdSpShadowEmissive = (${LD.flags} & ${cz.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${LD.flags} & ${cz.g}u) != 0u;\n`:""}`);
      var rD, LD;
      return DD.sunShadow && ("mask" === sD || "maskEdge" === sD) ? `${KD}${cD="fragmentInputs.position",gD="maskEdge"===sD,`\n\tbloxdSpShadowPixel = vec2i(${cD}.xy);\n${gD?`\tbloxdSpShadowZ = ${cD}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${cD}.z), dpdy(${cD}.z));\n`:""}`}` : KD;
      var cD, gD
    }
    const kw = "bloxdSpTextureRotation",
      mw = "bloxdSpTextureLayers",
      ew = `@group(${Pz.i}) @binding(${Pz.x}) var<storage, read> ${mw}: array<u32>;\n`;

    function ow(DD) {
      return `\tvertexOutputs.vPackTexture = ${mw}[min(u32(${DD}), arrayLength(&${mw}) - 1u)];\n`
    }

    function aw(DD) {
      return void 0 !== DD.uv
    }

    function uw(DD) {
      if (!DD) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (aw(DD)) return function(DD) {
        const {
          texture: zD,
          cells: wD,
          layers: pD
        } = DD, sD = `textureDimensions(${zD}, bloxdSpLevel)`, KD = wD ? `max(vec2u(vec2f(${sD}) / ${wD}), vec2u(1u))` : sD, rD = wD ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${KD};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${wD}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${wD}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${zD}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${sD} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${KD};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${zD}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let LD;
        if (wD)
          if (1 === pD.length) LD = `\treturn bloxdSpOwnTexel(${pD[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const DD = pD.length - 1;
            LD = `\tvar bloxdSpColour = bloxdSpOwnTexel(${pD[DD]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let zD = DD - 1; zD >= 0; zD--) LD += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${pD[zD]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            LD += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else LD = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${DD.id?`var<private> ${Tw}: u32;\n`:""}${rD}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${bw(DD)};\n\treturn ${KD};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${DD.id?Tw:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${bw(DD)};\n${LD}}\n`
      }(DD);
      const zD = DD,
        wD = DD => {
          const wD = DD > 0 ? `bloxdSpLayer - ${zD.layers*DD}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${DD}, ${zD.sampler}, bloxdSpTurned, ${wD}, round(bloxdSpMipLevel));`
        };
      let pD = "";
      for (let KD = 0; KD < zD.count - 1; KD++) pD += `\tif (bloxdSpLayer < ${zD.layers*(KD+1)}u) {\n\t\t${wD(KD)}\n\t}\n`;
      const sD = zD.frame ? `${zD.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${kw}: u32;\n${ew}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${kw} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${kw} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${kw} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${sD}${pD}\t${wD(zD.count-1)}\n}\n`
    }

    function vw(DD, zD, wD) {
      return !!DD.surface && "bloxdDefaultSurface" !== DD.surface && function(DD, zD) {
        return "liquid" === zD || !DD
      }(zD, wD)
    }

    function tw(DD, zD) {
      return DD.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${zD.vertexLocalPosition}, ${dw(zD.vertexFlags)});\n\t\tlet bloxdSpVertex = ${DD.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Fw(DD, zD, wD, pD, sD) {
      if (!DD.surface) return "";
      const KD = (DD, zD) => `\n\tlet bloxdSpTexelUV = ${DD};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${zD}) - 1u));`;
      let rD = "",
        LD = "0u, 0u, vec2f(0.0), 0.0";
      const cD = pD && aw(pD) ? pD : null,
        gD = pD && !aw(pD) ? pD : null;
      if (cD) {
        rD = `${cD.id?`\n\tlet bloxdSpTexture = ${cD.id};\n\t${Tw} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${cD.uv};${KD(function(DD,zD){var wD;return`${null!==(wD=DD.levelUv)&&void 0!==wD?wD:DD.cells?`${zD} / ${DD.cells}`:zD} * vec2f(textureDimensions(${DD.texture}))`}(cD,"bloxdSpUv"),cD.texture)}`, LD = (cD.id ? `${Tw}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else gD && (rD = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${kw} = bloxdSpTexture >> 16u;${KD(`fragmentInputs.vMainUV1 * ${(0,Qz.yb)(gD.width)}`,"textureAtlas0")}`, LD = `bloxdSpTexture & 0xffffu, ${kw}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const RD = sD.overlayColour,
        AD = RD ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        UD = "bloxdDefaultSurface" !== DD.surface || RD ? `\n\tbaseColor = vec4f(${AD}, baseColor.a);` : "",
        fD = vw(DD, zD, wD) ? `\n\t${sD.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${rD}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${sD.alpha}, ${sD.enchantTier}, ${sD.enchantColour}, ${sD.enchantSpeed}, ${null!==RD&&void 0!==RD?RD:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${sD.normal}, ${sD.localPosition}, ${dw(sD.flags)}, ${LD});\n\tlet bloxdSpSurface = ${DD.surface}(bloxdSpSurfaceIn);${UD}${fD}\n`
    }
    const Yw = "bloxdSpLightIn";

    function Hw(DD, zD, wD, pD) {
      if (!DD.light) return "";
      const sD = zD ? `${Qz.i}.rgb, ${Qz.i}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Qz.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: KD,
          diffuse: rD,
          emissive: LD,
          ambient: cD,
          fogColour: gD,
          fogAlpha: RD,
          normal: AD
        } = pD;
      return `\tvar ${Yw} = BloxdLightIn(vec3f(0.0), ${wD?KD:"0.0"}, ${rD}, ${LD}, ${cD}, ${sD}, ${gD}, ${RD}, fragmentInputs.vPositionW, ${AD}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Yw}.litColour = bloxdLitColour(bloxdSpSurface, ${Yw});\n`
    }

    function qw(DD) {
      return DD.light ? `\n\t{\n\t\tlet bloxdSpLight = ${DD.light}(bloxdSpSurface, ${Yw});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Dp = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      zp = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      wp = "\treturn color;\n}",
      pp = {
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
    const sp = Object.freeze({});

    function Kp(DD) {
      var zD;
      return !(null === (zD = (0, Cz.f)(DD)) || void 0 === zD || !zD.sceneDepth)
    }

    function rp(DD) {
      const zD = (0, Cz.f)(DD);
      return !!zD && vw(zD.hooks, zD.strict, zD.program)
    }

    function Lp(DD, zD, wD, pD) {
      return iw(DD, zD, wD, pD, "terrain")
    }

    function cp(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const KD = function(DD) {
          return (0, Cz.b)(DD.packVariant, DD.liquid ? "liquid" : "terrain")
        }(DD),
        {
          hooks: rD
        } = KD,
        LD = Ww(KD, pD),
        cD = "edge" === sD ? "maskEdge" : "plain" === sD ? "mask" : "trace",
        gD = tw(rD, pp);
      gD && (zD = Lp(zD, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${gD}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const RD = "atlas" === DD.texture ? {
          count: DD.atlasCount,
          layers: DD.atlasLayers,
          width: DD.B3,
          sampler: "atlasSampler",
          frame: DD.animated ? wD : null
        } : null,
        AD = `${KD.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${yw(KD,LD,pp.normal,pp.flags,cD)}${Fw(rD,KD.strict,KD.program,RD,pp)}`;
      AD && (zD = Lp(zD, Dp, `${Dp.slice(0,-1)}${AD}`, "surface"));
      const UD = qw(rD);
      return UD && (zD = Lp(zD, zp, `${Hw(rD,DD.lighting,DD.dirLightCount>0,pp)}${zp}`, "light input"), zD = Lp(zD, wp, `${UD.slice(1)}${wp}`, "light")), `${(0,Pz.A)()}${KD.sceneDepth?`@group(${Pz.i}) @binding(${Pz.q}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Sw};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Zw(KD,LD,cD)}${uw(RD)}${jw}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${KD.code}${zD}`
    }
    const gp = ED.c.WGSL;

    function Rp(DD) {
      return void 0 !== DD.packVariant
    }
    const Ap = {
        fsD: 0,
        IsD: 4,
        BsD: 8,
        GsD: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Up = Ap.aoLevels + 4,
      fp = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      Ip = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      Bp = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      Gp = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      hp = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      np = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      Mp = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      Op = 0,
      Jp = 3,
      Ep = 4,
      Qp = 5,
      Xp = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${Xz.b}, ${Xz.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${Xz.b}, ${Xz.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      Vp = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((DD=>Vz.e>>DD&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const Pp = {
      DU: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: DD => `animDataPerTex[${DD}]`
    };

    function Cp(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pp;
      return `\n\tlet atlasIdxIn = ${DD};\n\tlet animTick = ${wD.DU};\n\tlet animTickStride = ${wD.stride};\n\tlet numAnimTextures = ${wD.count};\n\t${(0,QD.g)(ED.c.WGSL,wD.perTexture)}\n\t${zD}animLayer;\n`
    }

    function xp(DD) {
      const zD = (zD, wD) => {
        const pD = zD > 0 ? `fragmentInputs.texAtlasIndex - ${DD.atlasLayers.toFixed(1)} * ${zD.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${wD?"textureSampleLevel":"textureSample"}(textureAtlas${zD}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${pD}))${wD?", atlasLod":""})`
      };
      if (1 === DD.atlasCount) return `baseColor = ${zD(0,!1)};`;
      let wD = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Qz.yb)(DD.B3)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let pD = 0; pD < DD.atlasCount; pD++) {
        const sD = DD.atlasLayers * (pD + 1) - .5;
        wD += `${pD>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Qz.yb)(sD)}) {\n\t\tbaseColor = ${zD(pD,!0)};\n\t}`
      }
      return wD
    }

    function Tp(DD) {
      return `terrain-${DD.texture}${"atlas"===DD.texture?DD.atlasCount:""}${DD.animated?"-anim":""}${DD.alphaTest?"-test":""}${DD.lighting?"-lit":""}-dir${DD.dirLightCount}${DD.packed?"-packed":""}${Rp(DD)?`-sp${DD.packVariant}`:""}${DD.liquid?"-liquid":""}${DD.resting?"-rest":""}`
    }

    function bp(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const pD = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const wD = "none" !== DD.texture,
          pD = "atlas" === DD.texture,
          sD = DD.dirLightCount > 0,
          KD = Rp(DD);
        if (DD.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${DD.dirLightCount}`);
        let rD = 1,
          LD = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (pD) {
          DD.animated && (LD += `@group(2) @binding(${rD++}) var<storage, read> animDataPerTex: array<f32>;\n`), LD += `@group(2) @binding(${rD++}) var atlasSampler: sampler;\n`;
          for (let zD = 0; zD < DD.atlasCount; zD++) LD += `@group(2) @binding(${rD++}) var textureAtlas${zD}: texture_2d_array<f32>;\n`
        } else "single" === DD.texture && (LD += `@group(2) @binding(${rD++}) var diffuseSamplerSampler: sampler;\n`, LD += `@group(2) @binding(${rD++}) var diffuseSampler: texture_2d<f32>;\n`);
        const cD = function(DD) {
            const zD = Mp,
              wD = "none" !== DD.texture,
              pD = "atlas" === DD.texture,
              sD = Rp(DD);
            return DD.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${wD?"uv: vec2f,":""}\n\t${pD?"texAtlasIndices: f32,":""}\n\t${DD.lighting?"aPackedLightLevels: f32,":""}\n\t${sD?"blockFlagWords: vec2u,":""}\n}\n${Xp}\n${Vp}\n${"single"===DD.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${wD?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===DD.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${pD?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${DD.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${sD?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${zD.position}) position: vec3f,\n\t@location(${zD.normal}) normal: vec4f,\n\t@location(${zD.color}) color: vec4f,\n\t${wD?`@location(${zD.uv}) uv: vec2f,`:""}\n\t${DD.lighting?`@location(${zD.packedLight}) aPackedLightLevels: f32,`:""}\n\t${sD?`@location(${zD.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(DD),
          gD = `\n${Gp}\n${Ip}\n${Bp}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${LD}\n${tD}\n${cD.declarations}\nstruct Varyings {\n\t${"none"===zD?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${DD.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${sD?"@location(5) vTerrainLambert: f32,":""}\n\t${wD?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${pD?"@location(7) texAtlasIndex: f32,":""}\n\t${DD.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${KD?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${KD&&pD?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${DD.resting?"":(0,Qz.r)(gp)}\n${np}\n\n@vertex\nfn mainVertex(${cD.parameter}) -> Varyings {\n\t${cD.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${KD?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${cz.b.placed}u;`:""}\n\t${KD&&pD?ow("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${DD.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${wD?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${pD?function(DD){return DD?Cp("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(DD.animated):""}\n\t${"single"===DD.texture&&DD.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Qz.hb)(gp)}\n\t${(0,Qz.J)(gp,DD.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${DD.resting?"":hp}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${pD?xp(DD):""}\n\t${"single"===DD.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${wD?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${DD.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${sD?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${vD}));\n\t${Rp(DD)?(0,Qz.tb)(ED.c.WGSL):(0,Qz.V)(gp)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          RD = new Set;
        DD.lighting && RD.add("BLOXD_LIGHTING");
        sD && RD.add("BLOXD_TERRAIN_DIRECTIONAL");
        return Oz(gD, new Map([...RD].map((DD => [DD, !0]))))
      }(DD, wD);
      if (!Rp(DD)) return pD;
      const sD = cp(DD, pD, Cp, zD, wD);
      return "none" === wD ? sD : `${sD}${function(DD){const zD="none"!==DD.texture&&DD.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${DD.resting?"":hp}\n\t${DD.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${zD&&"atlas"===DD.texture?xp(DD):""}\n\t${zD&&"single"===DD.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${zD?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${cz.b.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(DD)}`
    }
    const jp = new Map([
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

    function dp(DD, zD) {
      const wD = new Map;
      let pD = 0;
      const sD = [],
        KD = [],
        rD = [];
      for (const gD of zD) {
        var LD, cD;
        const zD = null !== (LD = gD.type.trim().split(/\s+/).pop()) && void 0 !== LD ? LD : gD.type,
          RD = jp.get(zD);
        if (!RD) throw new Error(`Lite: no uniform layout for ${gD.name}: ${gD.type}`);
        const AD = null !== (cD = gD.arraySize) && void 0 !== cD ? cD : 0,
          UD = AD ? 4 : RD.align;
        pD = Math.ceil(pD / UD) * UD;
        const fD = AD ? 4 * Math.ceil(RD.floats / 4) : RD.floats;
        if (wD.set(gD.name, {
            offset: pD,
            floats: RD.floats,
            arraySize: AD,
            stride: fD
          }), AD && RD.floats <= 2) {
          const zD = `${DD}_${rD.length}_strided`;
          KD.push(`struct ${zD} {\n\t@size(16) el: ${RD.wgsl},\n}`), rD.push(gD.name), sD.push(`\t@align(16) ${gD.name}: array<${zD}, ${AD}>,`)
        } else AD ? sD.push(`\t@align(16) ${gD.name}: array<${RD.wgsl}, ${AD}>,`) : sD.push(`\t${gD.name}: ${RD.wgsl},`);
        pD += AD ? fD * AD : RD.floats
      }
      return {
        slots: wD,
        floats: Math.max(4, 4 * Math.ceil(pD / 4)),
        wgsl: `${KD.join("\n")}\nstruct ${DD} {\n${sD.join("\n")}\n}\n`,
        stridedArrays: rD
      }
    }
    const Sp = [{
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
      ip = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      lp = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function Wp(DD, zD) {
      return `#if defined(${DD}) && ${DD}DIRECTUV == 0\nvarying v${zD}UV: vec2f;\n#endif`
    }

    function Np(DD, zD, wD) {
      return `#if defined(${DD}) && ${DD}DIRECTUV == 0\nif (uniforms.v${zD}Infos.x==0.)\n{vertexOutputs.v${zD}UV= (uniforms.${wD}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${zD}UV= (uniforms.${wD}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Zp(DD, zD, wD) {
      return `#ifdef ${DD}\n#if ${DD}DIRECTUV == 1\n#define v${zD}UV vMainUV1\n#elif ${DD}DIRECTUV == 2\n#define v${zD}UV vMainUV2\n#else\nvarying v${zD}UV: vec2f;\n#endif\nvar ${wD}SamplerSampler: sampler;\nvar ${wD}Sampler: texture_2d<f32>;\n#endif`
    }
    const yp = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      kp = 256,
      mp = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      ep = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      op = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      ap = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      vp = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      tp = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      Fp = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      Yp = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${ep}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${Wp("OPACITY","Opacity")}\n${Wp("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${Fp}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${op}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${Np("OPACITY","Opacity","opacity")}\n${Np("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${ap}\n#define CUSTOM_VERTEX_MAIN_END\n${vp}\n}\n`;
    const Hp = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Zp("OPACITY","Opacity","opacity")}\n${Zp("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${Fp}\n${tp}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((DD,zD)=>function(DD){const zD=`
    frame.lights[LITE_LIGHT$ {
        DD
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      DD
    }\
    nvar diffuse$ {
      DD
    }: vec4f = $ {
      zD
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      DD
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      zD
    }.vLightData, diffuse$ {
      DD
    }.rgb, $ {
      zD
    }.vLightSpecular.rgb, diffuse$ {
      DD
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(zD))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, qp = /^([gimus]+)!/, Ds = new Set;

    function zs(DD) {
      Ds.has(DD) || (Ds.add(DD), console.warn(`Lite: no place for plugin code at ${DD} in the standard shader: it is left out`))
    }

    function ws(DD, zD) {
      let wD = DD;
      const pD = new Map;
      for (const [KD, rD] of zD) {
        var sD;
        pD.set(KD, `${null!==(sD=pD.get(KD))&&void 0!==sD?sD:""}${rD}\n`)
      }
      for (const [KD, rD] of pD) {
        if (!KD.startsWith("!")) {
          const DD = `#define ${KD}`;
          if (!wD.includes(DD)) {
            zs(KD);
            continue
          }
          wD = wD.replace(DD, (() => `\n${rD}\n${DD}`));
          continue
        }
        let DD = KD.substring(1),
          zD = "g";
        if (DD.startsWith("!")) zD = "", DD = DD.substring(1);
        else {
          const wD = qp.exec(DD);
          wD && (zD = wD[1], DD = DD.substring(zD.length + 1))
        }
        const pD = new RegExp(DD, zD.includes("g") ? zD : `${zD}g`);
        let sD = pD.exec(wD);
        for (sD || zs(KD); sD;) {
          const DD = sD,
            zD = rD.replace(/\$(\d+)/g, ((zD, wD) => Number(wD) < DD.length ? DD[Number(wD)] : ""));
          wD = wD.substring(0, DD.index) + zD + wD.substring(DD.index + DD[0].length), pD.lastIndex = DD.index + zD.length, sD = pD.exec(wD)
        }
      }
      return wD
    }
    const ps = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      ss = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      Ks = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function rs(DD) {
      const zD = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let wD = DD.replace(ps, ((DD, wD, pD, sD, KD, rD) => ("attribute" === wD ? zD.attributes.push({
        name: KD,
        type: rD
      }) : void 0 === wD ? zD.varyings.push({
        name: KD,
        type: rD,
        interpolation: cs(rD, pD, sD)
      }) : zD.uniforms.push({
        name: KD,
        type: Ls(rD)
      }), "")));
      return wD = wD.replace(ss, ((DD, wD) => (zD.samplers.add(wD), ""))), wD = wD.replace(Ks, ((DD, wD, pD) => (zD.textures.push({
        name: wD,
        type: pD
      }), ""))), zD.body = wD, zD
    }

    function Ls(DD) {
      const zD = DD.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        wD = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(zD);
      if (!wD) throw new Error(`Lite: unsupported uniform type ${DD}`);
      return wD
    }

    function cs(DD, zD, wD) {
      return void 0 === zD && void 0 === wD ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(DD.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === zD ? "@interpolate(flat) " : `@interpolate(${null!==zD&&void 0!==zD?zD:"perspective"}, ${null!==wD&&void 0!==wD?wD:"center"}) `
    }

    function gs(DD) {
      return fs({
        defines: DD.defines,
        vertex: ws(Yp, DD.vertexCode),
        fragment: ws(Hp, DD.fragmentCode),
        members: [...Sp, ...DD.defines.has("OPACITY") ? ip : [], ...DD.defines.has("EMISSIVE") ? lp : [], ...DD.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function Rs(DD) {
      const zD = DD.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (zD === DD) throw new Error("Lite: fragment main has no return");
      return zD
    }
    const As = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${ep}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${op}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${ap}\n${vp}\n}\n`,
      Us = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${tp}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function fs(DD) {
      const zD = DD.defines,
        wD = rs(Oz(DD.vertex, zD)),
        pD = rs(Oz(DD.fragment, zD)),
        sD = new Map;
      for (const MD of [...wD.varyings, ...pD.varyings]) sD.has(MD.name) || sD.set(MD.name, MD);
      const KD = [...sD.values()].map(((DD, zD) => `\t@location(${zD}) ${DD.interpolation}${DD.name}: ${DD.type},`)),
        rD = [...DD.members];
      for (const MD of [...wD.uniforms, ...pD.uniforms]) rD.some((DD => DD.name === MD.name)) || rD.push(MD);
      const LD = dp(DD.structName, rD),
        cD = [],
        gD = [];
      let RD = 1;
      const AD = new Set;
      for (const MD of [...wD.textures, ...pD.textures]) {
        if (AD.has(MD.name)) continue;
        AD.add(MD.name);
        const DD = `${MD.name}Sampler`,
          zD = RD++,
          wD = RD++,
          pD = MD.type.startsWith("texture_2d_array") ? "2d-array" : MD.type.startsWith("texture_cube") ? "cube" : "2d";
        cD.push({
          name: MD.name,
          binding: zD,
          samplerBinding: wD,
          dimension: pD
        }), gD.push(`@group(2) @binding(${zD}) var ${MD.name}: ${MD.type};`), gD.push(`@group(2) @binding(${wD}) var ${DD}: sampler;`)
      }
      for (const MD of [...wD.samplers, ...pD.samplers])
        if (!AD.has(MD.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${MD} has no texture`);
      const UD = [Gp, mp, LD.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${DD.structName};`, ...gD].join("\n"),
        fD = wD.attributes,
        ID = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...wD.attributes.map(((DD, zD) => `\t@location(${zD}) ${DD.name}: ${DD.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        BD = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...KD, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        GD = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...pD.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...KD, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", tD, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${vD}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        hD = DD => {
          for (const zD of LD.stridedArrays) DD = DD.replace(new RegExp(`\\b${zD}\\s*\\[(.*?)\\]`, "g"), `${zD}[$1].el`);
          return DD
        };
      return {
        vertex: `${UD}\n${ID}\n${BD}\n${hD(wD.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${UD}\n${GD}\n${Rs((nD=hD(pD.body),nD.includes("fragmentInputs.position")?nD.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):nD))}`,
        attributes: fD,
        material: LD,
        textures: cD
      };
      var nD
    }
    const Is = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      Bs = DD => ({
        name: DD,
        type: "vec3"
      }),
      Gs = DD => ({
        name: DD,
        type: "float"
      }),
      hs = dp("EarthSkyUniforms", [Bs("viewFrom"), Gs("exposureScale"), Bs("zenithOffset"), Gs("fogOn"), Bs("up"), Gs("ditherOn"), Bs("sun"), Gs("turbidity"), Bs("tint"), Gs("rayleigh"), Bs("sunDir"), Gs("mieStrength"), Bs("inScatterR"), Gs("mieFocus"), Bs("inScatterM"), Gs("sunE"), Bs("extinctionBeta"), Gs("sunsetMix"), Gs("mieScale"), Gs("mieBase"), Gs("mieSlope"), Gs("sunDiscE"), Gs("exposure")]),
      ns = `${Gp}\n${mp}\n${hs.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      Ms = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Is.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Os = `\n${tD}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Gz).map((DD=>{let[zD,wD]=DD;return`const TONE_${zD}: f32 = ${wD};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${hz};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${vD}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var Es = wD(37070);
    const Qs = new Es.WI,
      Xs = new Es.WI,
      Vs = new Es.Quaternion,
      Ps = new Float64Array(3),
      Cs = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      xs = new Float64Array(16);

    function Ts(DD, zD, wD) {
      const pD = wD.worldMatrix;
      var sD;
      DD.updateFloat3("viewFrom", pD[12], pD[13], pD[14]), DD.updateFloatsFrom("zenithOffset", zD.cameraOffset, 0, 3), DD.updateFloatsFrom("up", zD.up, 0, 3), zD.luminance > 0 && (DD.updateFloat("exposure", zD.luminance), DD.updateFloat("exposureScale", (sD = zD.luminance, Math.log2(2 / Math.pow(sD, 4))))), DD.updateFloat("turbidity", zD.turbidity), DD.updateFloat("rayleigh", zD.rayleigh), DD.updateFloat("mieStrength", zD.mieCoefficient), DD.updateFloat("mieFocus", zD.mieDirectionalG), DD.updateFloatsFrom("tint", zD.tint, 0, 3), DD.updateFloat("fogOn", zD.fog && wD.fogEnabled && 0 !== wD.fogMode ? 1 : 0), DD.updateFloat("ditherOn", zD.dithering ? 1 : 0);
      const KD = zD.sunPosition;
      if (Qs.set(KD[0], KD[1], KD[2]), !zD.useSunPosition) {
        const DD = Math.PI * (zD.inclination - .5),
          wD = 2 * Math.PI * (zD.azimuth - .5);
        Qs.set(zD.distance * Math.cos(wD) * Math.cos(DD), zD.distance * Math.sin(-DD), zD.distance * Math.sin(wD) * Math.cos(DD)), Es.Quaternion.FromUnitVectorsToRef(Es.WI.UpReadOnly, Xs.set(zD.up[0], zD.up[1], zD.up[2]), Vs), Qs.rotateByQuaternionToRef(Vs, Qs)
      }
      DD.updateVector3("sun", Qs), Ps[0] = Qs.x, Ps[1] = Qs.y, Ps[2] = Qs.z;
      const rD = Bz(zD, Ps, Cs);
      DD.updateFloatsFrom("sunDir", rD.sunDir, 0, 3), DD.updateFloat("sunE", rD.sunE), DD.updateFloatsFrom("inScatterR", rD.inScatterR, 0, 3), DD.updateFloatsFrom("inScatterM", rD.inScatterM, 0, 3), DD.updateFloatsFrom("extinctionBeta", rD.extinctionBeta, 0, 3), DD.updateFloat("sunsetMix", rD.sunsetMix), DD.updateFloat("sunDiscE", rD.sunDiscE), DD.updateFloat("mieScale", rD.mieScale), DD.updateFloat("mieBase", rD.mieBase), DD.updateFloat("mieSlope", rD.mieSlope)
    }

    function bs(DD, zD) {
      const wD = xs;
      wD[0] = zD.far, wD[5] = zD.far, wD[10] = zD.far, wD[15] = 1;
      const pD = DD.infiniteDistance;
      for (let sD = 0; sD < 3; sD++) wD[12 + sD] = DD.position[sD] + (pD ? zD.worldMatrix[12 + sD] : 0);
      return xs
    }
    var ds = wD(38695);

    function Ss(DD) {
      return Math.max(4, 4 * Math.ceil(DD / 4))
    }

    function is(DD, zD, wD, pD) {
      const sD = DD.createBuffer({
        label: pD,
        size: Ss(zD.byteLength),
        usage: wD,
        mappedAtCreation: !0
      });
      return new Uint8Array(sD.getMappedRange(), 0, zD.byteLength).set(new Uint8Array(zD.buffer, zD.byteOffset, zD.byteLength)), sD.unmap(), sD
    }

    function ls(DD, zD) {
      return Math.floor(Math.log2(Math.max(DD, zD))) + 1
    }

    function Ws(DD, zD, wD, pD, sD, KD) {
      const rD = DD.createTexture({
          label: KD,
          size: {
            width: wD,
            height: pD,
            depthOrArrayLayers: sD
          },
          format: "rgba8unorm",
          mipLevelCount: ls(wD, pD),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        LD = (zD, wD, pD, KD) => {
          DD.queue.writeTexture({
            texture: rD,
            mipLevel: wD
          }, zD, {
            bytesPerRow: 4 * pD,
            rowsPerImage: KD
          }, {
            width: pD,
            height: KD,
            depthOrArrayLayers: sD
          })
        };
      LD(zD, 0, wD, pD);
      let cD = 1;
      for (const gD of function*(DD, zD, wD, pD) {
          let sD = DD,
            KD = zD,
            rD = wD;
          for (; KD > 1 || rD > 1;) {
            const DD = Math.max(1, KD >> 1),
              zD = Math.max(1, rD >> 1),
              wD = new Uint8Array(DD * zD * pD * 4),
              LD = 4 * KD;
            let cD = 0;
            for (let gD = 0; gD < pD; gD++) {
              const pD = gD * LD * rD;
              for (let gD = 0; gD < zD; gD++) {
                const zD = pD + Math.min(2 * gD, rD - 1) * LD,
                  RD = pD + Math.min(2 * gD + 1, rD - 1) * LD;
                for (let pD = 0; pD < DD; pD++) {
                  const DD = 4 * Math.min(2 * pD, KD - 1),
                    rD = 4 * Math.min(2 * pD + 1, KD - 1);
                  for (let pD = 0; pD < 4; pD++) wD[cD++] = sD[zD + DD + pD] + sD[zD + rD + pD] + sD[RD + DD + pD] + sD[RD + rD + pD] + 2 >> 2
                }
              }
            }
            yield {
              data: wD,
              width: DD,
              height: zD
            }, sD = wD, KD = DD, rD = zD
          }
        }(zD, wD, pD, sD)) LD(gD.data, cD++, gD.width, gD.height);
      return rD
    }
    const Ns = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function Zs(DD) {
      if (DD.startsWith("data:")) {
        const zD = DD.search(/[;,]/);
        return `data:${zD>5?DD.slice(5,zD):""} URL of ${DD.length} characters`
      }
      return DD.length > 80 ? `${DD.slice(0,80)}...` : DD
    }
    async function ys(DD) {
      const zD = await fetch(DD);
      if (!zD.ok) throw new Error(`${Zs(DD)}: ${zD.status} ${zD.statusText}`);
      return createImageBitmap(await zD.blob(), Ns)
    }
    async function ks(DD) {
      const zD = await ys(DD),
        wD = new OffscreenCanvas(zD.width, zD.height),
        pD = wD.getContext("2d", {
          willReadFrequently: !0
        });
      if (!pD) throw new Error("No 2D context to decode an image");
      pD.drawImage(zD, 0, 0);
      const {
        data: sD
      } = pD.getImageData(0, 0, zD.width, zD.height);
      return zD.close(), {
        pixels: new Uint8Array(sD.buffer, sD.byteOffset, sD.byteLength),
        width: wD.width,
        height: wD.height
      }
    }
    const ms = new WeakMap;

    function es(DD, zD, wD, pD) {
      var sD;
      const KD = null !== (sD = ms.get(DD)) && void 0 !== sD ? sD : new Map;
      ms.set(DD, KD);
      let rD = KD.get(zD);
      return rD || (rD = (async sD => {
        const KD = null !== (sD = function(DD, zD) {
          const wD = DD ? new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength) : null;
          return null !== wD && void 0 !== wD && wD.byteLength && zD && wD.byteLength % (zD * zD * 4) === 0 ? {
            pixels: wD,
            layerWidth: zD,
            layers: wD.byteLength / (zD * zD * 4)
          } : null
        }(wD, pD)) && void 0 !== sD ? sD : await async function(DD) {
          const {
            pixels: zD,
            width: wD
          } = await ks(DD);
          return {
            pixels: zD,
            layerWidth: wD,
            layers: zD.byteLength / (wD * wD * 4)
          }
        }(zD), {
          layerWidth: rD,
          layers: LD
        } = KD;
        return {
          texture: Ws(DD, KD.pixels, rD, rD, LD, `atlas-${zD}`),
          layerWidth: rD,
          layers: LD
        }
      })(), KD.set(zD, rD), rD.catch((() => {
        KD.delete(zD)
      }))), rD
    }
    const os = new Map([
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
      as = new Map([
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

    function us(DD) {
      for (const zD of (0, ds.k)(DD))
        if (!as.has((0, ds.h)(zD))) return !1;
      return !0
    }

    function vs(DD) {
      const zD = as.get(DD);
      if (!zD) return null;
      const [wD, pD, sD] = zD;
      return {
        srcFactor: os.get(wD),
        dstFactor: os.get(pD),
        operation: sD
      }
    }
    let ts = null;

    function Fs(DD) {
      ts = DD
    }

    function Ys(DD, zD, wD) {
      var pD;
      null === (pD = ts) || void 0 === pD || pD(DD, zD, wD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class Hs {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(DD, zD, wD, pD, sD) {
        wD !== this.pipeline && (DD.setPipeline(wD), this.pipeline = wD), DD.setBindGroup(1, pD, [sD]);
        const KD = zD.material.bindGroup;
        KD !== this.materialGroup && (DD.setBindGroup(2, KD), this.materialGroup = KD);
        const rD = zD.program.packGroup;
        rD && rD !== this.packGroup && (DD.setBindGroup(Pz.i, rD), this.packGroup = rD);
        const {
          vertexBuffers: LD,
          vertexOffsets: cD
        } = this;
        for (let gD = 0; gD < zD.vertexBuffers.length; gD++) LD[gD] === zD.vertexBuffers[gD] && cD[gD] === zD.vertexOffsets[gD] || (DD.setVertexBuffer(gD, zD.vertexBuffers[gD], zD.vertexOffsets[gD]), LD[gD] = zD.vertexBuffers[gD], cD[gD] = zD.vertexOffsets[gD]);
        zD.indexBuffer && zD.indexBuffer !== this.indexBuffer && (DD.setIndexBuffer(zD.indexBuffer, zD.indexFormat), this.indexBuffer = zD.indexBuffer)
      }
    }
    class qs {
      constructor(DD, zD, wD, pD) {
        this.modelMeshes = DD, this.J9 = zD, this.maker = wD, this.warnOnce = pD, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (DD, zD) => {
          (zD < -1 || zD > 1) && this.warnOnce(`group:${zD}`, `rendering group ${zD} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(DD) {
        this.collectGroup(DD, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(DD, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(DD, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.J9.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(DK), this.transparentDraws.sort(zK)
      }
      collectGroup(DD, zD, wD, pD, sD) {
        const KD = this.modelMeshes.group(zD),
          rD = this.J9.group(zD),
          LD = 0 === zD ? null === rD || void 0 === rD ? void 0 : rD.opaque : void 0;
        this.collectList(DD, null === KD || void 0 === KD ? void 0 : KD.opaque, LD || null === rD || void 0 === rD ? void 0 : rD.opaque, zD, !1, wD, sD), LD && (this.J9.drawn += this.maker.bundleDraws(DD, LD, zD)), this.collectList(DD, null === KD || void 0 === KD ? void 0 : KD.alphaTest, void 0, zD, !1, wD, sD), this.collectList(DD, null === KD || void 0 === KD ? void 0 : KD.transparent, null === rD || void 0 === rD ? void 0 : rD.transparent, zD, !0, pD, sD)
      }
      collectList(DD, zD, wD, pD, sD, KD, rD) {
        var LD;
        const cD = KD.length;
        zD && this.maker.pushDraws(DD, zD.units, zD.units.length, pD, sD, KD, zD.rows), wD && (this.J9.drawn += this.maker.pushDraws(DD, wD, wD.length, pD, sD, KD));
        const gD = sD ? null === (LD = this.modelMeshes.group(pD)) || void 0 === LD ? void 0 : LD.text : void 0;
        gD && this.maker.pushDraws(DD, gD.units, gD.units.length, pD, !0, KD, gD.rows), rD && wK(KD, cD)
      }
    }

    function DK(DD, zD) {
      return DD.program.id - zD.program.id || DD.material.owner.uniqueId - zD.material.owner.uniqueId
    }

    function zK(DD, zD) {
      return DD.material.owner.uniqueId - zD.material.owner.uniqueId
    }

    function wK(DD, zD) {
      for (let wD = zD + 1; wD < DD.length; wD++) {
        const pD = DD[wD];
        let sD = wD - 1;
        for (; sD >= zD && zK(DD[sD], pD) > 0; sD--) DD[sD + 1] = DD[sD];
        DD[sD + 1] = pD
      }
    }
    const pK = {};

    function sK(DD) {
      return DD.hasThinInstances ? "thin" : DD.hsD || DD._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function KK(DD, zD, wD) {
      return DD ? (wD._needUVs = !0, DD.optimizeUVAllocation && (0, CD.S)(DD.matrix) ? (wD[`${zD}DIRECTUV`] = DD.uvSet + 1, wD[`MAINUV${DD.uvSet+1}`] = !0) : wD[`${zD}DIRECTUV`] = 0, !0) : (wD[`${zD}DIRECTUV`] = 0, !1)
    }

    function rK(DD) {
      const zD = new Map;
      for (const wD in DD) {
        if (95 === wD.charCodeAt(0)) continue;
        const pD = DD[wD],
          sD = typeof pD;
        "number" === sD || "string" === sD ? zD.set(wD, String(pD)) : pD && "function" !== sD && zD.set(wD, !0)
      }
      return zD
    }

    function LK(DD) {
      const zD = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: wD
        }
        of DD.features)
        for (const DD in wD) zD[DD] = wD[DD];
      return zD
    }

    function cK(DD) {
      const zD = DD.parts.geometry;
      return null !== zD && void 0 !== zD && zD.live ? zD : null
    }

    function gK(DD) {
      var zD;
      return null !== (zD = cK(DD)) && void 0 !== zD ? zD : pK
    }
    class RK {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = DD, this.warnOnce = zD, this.programWithModel = wD, this.packFailed = pD, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(DD, zD, wD, pD, sD) {
        const KD = zD.owner;
        let rD = this.drawStates.get(zD);
        if (!rD) {
          const DD = zD.parts.materials[zD.range];
          if (!DD) return this.warnOnce("model", `${wD.name} on ${KD.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          rD = {
            defines: LK(DD),
            model: DD,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: sD,
            groupId: pD,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(zD, rD)
        }
        if (this.programCurrent(rD, zD, sD, pD)) return rD.program;
        const {
          model: LD
        } = rD, cD = gK(zD), gD = this.instanceLayout(KD, sD), RD = this.definesBits(KD);
        if (!this.prepareModelDefines(DD, KD, LD, rD.defines, pD, sD)) return null;
        rD.instancing = sD, rD.groupId = pD, rD.modelVersion = LD.version, rD.geometry = cD, rD.instanceLayout = gD, rD.definesBits = RD;
        const AD = function(DD) {
          let zD = "";
          for (const [wD, pD] of DD) zD += !0 === pD ? `${wD};` : `${wD}=${pD};`;
          return zD
        }(rK(rD.defines));
        return AD === rD.definesKey && rD.packVariant === this.modelPackVariant && rD.program && !this.packFailed(rD.program) || (rD.definesKey = AD, rD.packVariant = this.modelPackVariant, rD.program = this.programWithModel(LD, rD.defines, AD)), rD.program
      }
      programCurrent(DD, zD, wD, pD) {
        return null !== DD.program && !this.packFailed(DD.program) && DD.instancing === wD && DD.groupId === pD && this.definesHold(DD, zD, wD)
      }
      definesHold(DD, zD, wD) {
        return DD.modelVersion === DD.model.version && DD.geometry === gK(zD) && DD.instanceLayout === this.instanceLayout(zD.owner, wD) && DD.definesBits === this.definesBits(zD.owner) && DD.packVariant === this.modelPackVariant
      }
      modelPackKind(DD) {
        var zD;
        return 0 === this.modelPackVariant ? null : null !== (zD = (0, VD.y)(DD, XD.g.name)) && void 0 !== zD && zD.active ? "placed" : DD.item ? "item" : DD.lifeform ? "lifeform" : DD.box ? "box" : null
      }
      instanceLayout(DD, zD) {
        var wD, pD, sD;
        return "thin" === zD ? null !== (sD = this.resources.b_.get(DD)) && void 0 !== sD ? sD : null : "instanced" === zD && null !== (wD = null === (pD = DD._userInstancedBuffersStorage) || void 0 === pD ? void 0 : pD.interleavedKinds) && void 0 !== wD ? wD : null
      }
      definesBits(DD) {
        const zD = this.view;
        return (DD.visibility < 1 ? 1 : 0) | (DD.hasVertexAlpha ? 2 : 0) | (DD.applyFog ? 4 : 0) | (DD.useVertexColors ? 8 : 0) | (DD.nonUniformScaling ? 16 : 0) | (zD.fogEnabled && 0 !== zD.fogMode ? 32 : 0) | (zD.lightsEnabled ? 64 : 0) | zD.lightCount << 7
      }
      prepareLightDefines(DD, zD, wD) {
        let pD = 0;
        if (this.view.lightsEnabled && !zD) {
          const zD = Math.min(wD, 4);
          for (; pD < this.view.lightCount && (DD[`LIGHT${pD}`] = !0, DD[`LITE_LIGHT${pD}_SLOT`] = pD, pD++, DD._needNormals = !0, pD !== zD););
        }
        for (let sD = pD; sD < 4; sD++) DD[`LIGHT${sD}`] = !1, DD[`LITE_LIGHT${sD}_SLOT`] = void 0
      }
      prepareModelDefines(DD, zD, wD, pD, sD, KD) {
        const {
          features: rD
        } = wD;
        pD._needNormals = !1, pD._needUVs = !1;
        const LD = this.view;
        this.prepareLightDefines(pD, wD.disableLighting, wD.maxSimultaneousLights), pD.MAINUV1 = !1, pD.MAINUV2 = !1;
        const cD = wD.diffuseTexture;
        cD ? (pD._needUVs = !0, pD.DIFFUSE = !0, cD.optimizeUVAllocation && (0, CD.S)(cD.matrix) ? (pD.DIFFUSEDIRECTUV = cD.uvSet + 1, pD[`MAINUV${cD.uvSet+1}`] = !0) : pD.DIFFUSEDIRECTUV = 0, cD.uvSet > 1 && this.warnOnce(`uvset:${wD.name}`, `${wD.name} samples UV set ${cD.uvSet+1}, which is not supported`)) : (pD.DIFFUSE = !1, pD.DIFFUSEDIRECTUV = 0);
        const gD = wD.opacityTexture,
          RD = wD.emissiveTexture;
        pD.OPACITY = KK(gD, "OPACITY", pD), pD.OPACITYRGB = null !== gD && gD.getAlphaFromRGB, pD.EMISSIVE = KK(RD, "EMISSIVE", pD), (gD && gD.uvSet > 1 || RD && RD.uvSet > 1) && this.warnOnce(`uvset:${wD.name}`, `${wD.name} samples a UV set past 2, which is not supported`);
        const AD = wD.reflectionTexture,
          UD = null !== AD;
        if (UD) {
          if (!this.resources.boundTexture(AD)) return !1;
          pD._needNormals = !0
        }
        pD.REFLECTION = UD, pD.REFLECTIONMAP_3D = UD, pD.REFLECTIONMAP_SKYBOX = UD, pD.REFLECTIONMAP_OPPOSITEZ = UD && (DD.useRightHandedSystem ? !AD.invertZ : AD.invertZ), pD.ROUGHNESS = UD && wD.roughness > 0, pD.REFLECTIONOVERALPHA = UD && wD.useReflectionOverAlpha, pD.LITE_REFLECTION_LUMINANCE = UD && "cube" === AD.source.kind && AD.source.luminance, (zD.skeleton || zD.morphTargetManager) && this.warnOnce(`skin:${zD.name}`, `${zD.name} has bones or morph targets, which are not supported`), pD.FOG = wD.fogEnabled && zD.applyFog && LD.fogEnabled && 0 !== LD.fogMode, pD.NONUNIFORMSCALING = zD.nonUniformScaling;
        const {
          visibility: fD,
          hasVertexAlpha: ID
        } = zD;
        pD.ALPHATEST = (0, VD.W)(wD, fD, ID), pD.ALPHAFROMDIFFUSE = (0, VD.kb)(wD), pD.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== wD.transparencyMode, pD.ALPHABLEND = null === wD.transparencyMode || (0, VD.T)(wD, fD, ID), pD.PREMULTIPLYALPHA = 7 === wD.alphaMode || 8 === wD.alphaMode, pD.EMISSIVEASILLUMINATION = wD.useEmissiveAsIllumination, pD.LINKEMISSIVEWITHDIFFUSE = wD.linkEmissiveWithDiffuse, pD.TWOSIDEDLIGHTING = !wD.backFaceCulling && wD.twoSidedLighting, pD.INSTANCES = "none" !== KD, pD.THIN_INSTANCES = "thin" === KD, pD.LITE_FRONT_LAYER = sD >= 1;
        for (const {
            feature: QD,
            state: XD,
            active: VD
          }
          of rD) {
          var BD, GD;
          if (VD) null === (BD = (GD = (0, Rz.j)(QD)).prepareDefinesBeforeAttributes) || void 0 === BD || BD.call(GD, XD, pD, DD, zD)
        }
        this.modelPackKind(wD) && (pD._needNormals = !0), pD.NORMAL = pD._needNormals && zD.isVerticesDataPresent("normal"), pD.UV1 = pD._needUVs && zD.isVerticesDataPresent("uv"), pD.UV2 = pD._needUVs && zD.isVerticesDataPresent("uv2");
        const hD = zD.useVertexColors && zD.isVerticesDataPresent("color");
        pD.VERTEXCOLOR = hD, pD.VERTEXALPHA = zD.hasVertexAlpha && hD, pD.INSTANCESCOLOR = "none" !== KD && zD.isVerticesDataPresent("instanceColor");
        for (const {
            feature: QD,
            state: XD,
            active: VD
          }
          of rD) {
          var nD, MD;
          if (VD) null === (nD = (MD = (0, Rz.j)(QD)).prepareDefines) || void 0 === nD || nD.call(MD, XD, pD, DD, zD, wD)
        }
        const OD = DD.iI();
        for (const {
            feature: QD,
            state: XD,
            active: VD
          }
          of rD) {
          var JD, ED;
          if (VD && !1 === (null === (JD = (ED = (0, Rz.j)(QD)).isReadyForSubMesh) || void 0 === JD ? void 0 : JD.call(ED, XD, pD, DD, OD))) return !1
        }
        return !0
      }
    }

    function AK(DD, zD, wD) {
      return DD.codeVersion !== zD.version && function(DD, zD) {
        const wD = [],
          pD = [];
        for (const {
            feature: UD,
            state: fD,
            active: ID
          }
          of zD.features) {
          var sD, KD, rD, LD;
          if (ID) UK(null === (sD = (KD = (0, Rz.j)(UD)).getCustomCode) || void 0 === sD ? void 0 : sD.call(KD, fD, "vertex", ED.c.WGSL), wD), UK(null === (rD = (LD = (0, Rz.j)(UD)).getCustomCode) || void 0 === rD ? void 0 : rD.call(LD, fD, "fragment", ED.c.WGSL), pD)
        }
        const cD = [];
        for (const {
            feature: UD,
            state: fD
          }
          of zD.features) {
          var gD, RD;
          const DD = null === (gD = (RD = (0, Rz.j)(UD)).getUniforms) || void 0 === gD ? void 0 : gD.call(RD, fD, ED.c.WGSL);
          for (const zD of null !== (AD = null === DD || void 0 === DD ? void 0 : DD.ubo) && void 0 !== AD ? AD : []) {
            var AD;
            zD.size && zD.type && cD.push({
              name: zD.name,
              type: zD.type,
              arraySize: zD.arraySize
            })
          }
        }
        DD.vertexCode = wD, DD.fragmentCode = pD, DD.pluginUniforms = cD, DD.codeKey = JSON.stringify([wD, pD, cD]), DD.codeVersion = zD.version
      }(DD, zD), `${wD}#${DD.codeKey}`
    }

    function UK(DD, zD) {
      if (DD)
        for (const wD in DD) DD[wD] && zD.push([wD, DD[wD]])
    }
    const fK = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class IK {
      constructor(DD) {
        this.warnOnce = DD, this.states = new Map
      }
      renderState(DD, zD, wD, pD) {
        var sD;
        let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          rD = null !== (sD = DD.sideOrientation) && void 0 !== sD ? sD : zD.sideOrientation;
        zD._getWorldMatrixDeterminant() < 0 && (rD = 0 === rD ? 1 : 0);
        const LD = "triangle-list" === KD,
          cD = wD ? DD.alphaMode : 0,
          gD = (!wD || (0 === cD || DD.forceDepthWrite)) && !DD.disableDepthWrite,
          RD = LD && DD.backFaceCulling ? DD.cullBackFaces ? "back" : "front" : "none",
          AD = LD && 0 !== rD ? "ccw" : "cw",
          UD = DD.depthFunction,
          fD = LD ? DD.zOffset : 0,
          ID = LD ? DD.zOffsetUnits : 0,
          BD = !DD.disableColorWrite;
        return pD && pD.alphaMode === cD && pD.depthWrite === gD && pD.depthFunction === UD && pD.cullMode === RD && pD.frontFace === AD && pD.zOffset === fD && pD.zOffsetUnits === ID && pD.colourWrite === BD && pD.topology === KD ? pD : this.stateFor(cD, gD, UD, RD, AD, fD, ID, BD, KD)
      }
      stateFor(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        const gD = `${DD}|${zD}|${wD}|${pD}|${sD}|${KD}|${rD}|${LD}|${cD}`;
        let RD = this.states.get(gD);
        if (!RD) {
          var AD;
          const UD = DD ? vs(DD) : null;
          DD && !UD && this.warnOnce(`alpha:${DD}`, `alpha mode ${DD} is not supported`), RD = {
            key: gD,
            alphaMode: DD,
            depthFunction: wD,
            zOffset: KD,
            zOffsetUnits: rD,
            topology: cD,
            blend: UD,
            depthWrite: zD,
            depthCompare: wD && null !== (AD = fK.get(wD)) && void 0 !== AD ? AD : null,
            cullMode: pD,
            frontFace: sD,
            depthBias: -rD,
            depthBiasSlopeScale: -KD,
            colourWrite: LD
          }, this.states.set(gD, RD)
        }
        return RD
      }
    }
    var BK = wD(37430);

    function GK(DD) {
      if (!DD.frozen) return -1;
      let zD = DD.version;
      for (const {
          feature: wD,
          state: pD,
          active: sD
        }
        of DD.features) {
        if (!sD || !wD.bind) continue;
        const DD = (0, Rz.j)(wD).uniformsVersion;
        if (!DD) return -1;
        zD += DD(pD)
      }
      return zD
    }
    class hK {
      constructor(DD, zD, wD) {
        this.slots = DD, this.data = zD, this.textures = wD, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(DD, zD) {
        this.write4(DD, zD, 0, 0, 0, 1)
      }
      updateFloat2(DD, zD, wD) {
        this.write4(DD, zD, wD, 0, 0, 2)
      }
      updateFloat3(DD, zD, wD, pD) {
        this.write4(DD, zD, wD, pD, 0, 3)
      }
      updateFloat4(DD, zD, wD, pD, sD) {
        this.write4(DD, zD, wD, pD, sD, 4)
      }
      updateVector3(DD, zD) {
        this.write4(DD, zD.x, zD.y, zD.z, 0, 3)
      }
      updateVector4(DD, zD) {
        this.write4(DD, zD.x, zD.y, zD.z, zD.w, 4)
      }
      updateColor3(DD, zD) {
        this.write4(DD, zD.r, zD.g, zD.b, 0, 3)
      }
      updateColor4(DD, zD, wD) {
        this.write4(DD, zD.r, zD.g, zD.b, wD, 4)
      }
      updateFloatsFrom(DD, zD, wD, pD) {
        const sD = this.slots.get(DD);
        if (!sD) return;
        const KD = this.data,
          rD = sD.offset;
        for (let LD = 0; LD < pD; LD++) KD[rD + LD] = zD[wD + LD]
      }
      updateFloat3TimesFloats(DD, zD, wD, pD) {
        const sD = this.slots.get(DD);
        if (!sD) return;
        const KD = this.data,
          rD = sD.offset;
        KD[rD] = zD[wD] * pD[0], KD[rD + 1] = zD[wD + 1] * pD[1], KD[rD + 2] = zD[wD + 2] * pD[2]
      }
      i5(DD, zD) {
        const wD = this.slots.get(DD);
        wD && this.data.set(zD.m, wD.offset)
      }
      updateMatrixFloats(DD, zD) {
        const wD = this.slots.get(DD);
        wD && this.data.set(zD, wD.offset)
      }
      updateFloatArray(DD, zD) {
        const wD = this.slots.get(DD);
        if (!wD) return;
        if (!wD.arraySize || wD.stride === wD.floats) return void this.data.set(zD, wD.offset);
        const pD = Math.min(zD.length, wD.floats * wD.arraySize);
        for (let sD = 0; sD < pD; sD++) this.data[wD.offset + Math.floor(sD / wD.floats) * wD.stride + sD % wD.floats] = zD[sD]
      }
      updateArray(DD, zD) {
        this.updateFloatArray(DD, zD)
      }
      setTexture(DD, zD) {
        this.textures.set(DD, zD), this.expected.delete(DD)
      }
      expectTexture(DD) {
        this.textures.set(DD, null), this.expected.add(DD)
      }
      write4(DD, zD, wD, pD, sD, KD) {
        const rD = this.slots.get(DD);
        if (!rD) return;
        const LD = this.data,
          cD = rD.offset;
        LD[cD] = zD, KD > 1 && (LD[cD + 1] = wD), KD > 2 && (LD[cD + 2] = pD), KD > 3 && (LD[cD + 3] = sD)
      }
    }

    function nK(DD, zD) {
      const wD = yp,
        pD = BK.j,
        sD = DD.lights,
        KD = Math.min(DD.lightCount, 8);
      for (let rD = 0; rD < KD; rD++) {
        const DD = wD.lights + rD * wD.lightStride,
          KD = rD * BK.e;
        zD[DD] = sD[KD + pD.vector], zD[DD + 1] = sD[KD + pD.vector + 1], zD[DD + 2] = sD[KD + pD.vector + 2], zD[DD + 3] = sD[KD + pD.kind] === BK.i.directional ? 1 : 0, zD[DD + 4] = sD[KD + pD.diffuse], zD[DD + 5] = sD[KD + pD.diffuse + 1], zD[DD + 6] = sD[KD + pD.diffuse + 2], zD[DD + 7] = sD[KD + pD.range], zD[DD + 8] = sD[KD + pD.specular], zD[DD + 9] = sD[KD + pD.specular + 1], zD[DD + 10] = sD[KD + pD.specular + 2], zD[DD + 11] = sD[KD + pD.range]
      }
      zD[wD.fogInfos] = DD.fogMode, zD[wD.fogInfos + 1] = DD.fogStart, zD[wD.fogInfos + 2] = DD.fogEnd, zD[wD.fogInfos + 3] = DD.fogDensity, zD[wD.fogColour] = DD.fogColour[0], zD[wD.fogColour + 1] = DD.fogColour[1], zD[wD.fogColour + 2] = DD.fogColour[2], zD[wD.outputHeight] = DD.renderHeight, zD[wD.animTick] = DD.animTick, zD[wD.timeMs] = DD.timeMs
    }
    class MK {
      constructor(DD) {
        this.instancesOf = DD
      }
      refreshModelUniforms(DD, zD, wD, pD) {
        const sD = GK(wD);
        if (sD >= 0 && sD === zD.heldVersion && zD.textures.get("diffuseSampler") === wD.diffuseTexture && zD.textures.get("reflectionCubeSampler") === wD.reflectionTexture && zD.textures.get("opacitySampler") === wD.opacityTexture && zD.textures.get("emissiveSampler") === wD.emissiveTexture) return !0;
        if (sD < 0)
          for (const KD of this.instancesOf(wD)) KD.heldVersion = -1;
        return this.writeModelUniforms(DD, zD, wD, pD), zD.heldVersion = sD, !1
      }
      writeModelUniforms(DD, zD, wD, pD) {
        const {
          ubo: sD
        } = zD, KD = wD.diffuseTexture, rD = wD.diffuseColor;
        sD.updateFloat4("vDiffuseColor", rD[0], rD[1], rD[2], wD.alpha), KD && (sD.updateFloat2("vDiffuseInfos", KD.uvSet, KD.level), sD.updateMatrixFloats("diffuseMatrix", KD.matrix)), sD.updateFloat("alphaCutOff", wD.alphaCutOff), sD.updateFloatsFrom("vEmissiveColor", wD.emissiveColor, 0, 3), sD.updateFloat3TimesFloats("vAmbientColor", pD.ambientColour, 0, wD.ambientColor);
        const LD = wD.specularColor;
        sD.updateFloat4("vSpecularColor", LD[0], LD[1], LD[2], wD.specularPower), sD.setTexture("diffuseSampler", KD);
        const cD = wD.opacityTexture;
        cD && (sD.updateFloat2("vOpacityInfos", cD.uvSet, cD.level), sD.updateMatrixFloats("opacityMatrix", cD.matrix)), sD.setTexture("opacitySampler", cD);
        const gD = wD.emissiveTexture;
        gD && (sD.updateFloat2("vEmissiveInfos", gD.uvSet, gD.level), sD.updateMatrixFloats("emissiveMatrix", gD.matrix)), sD.setTexture("emissiveSampler", gD);
        const RD = wD.reflectionTexture;
        RD && sD.updateMatrixFloats("reflectionMatrix", RD.matrix), sD.updateFloat2("vReflectionInfos", RD ? RD.level * DD.iblIntensity : 0, wD.roughness), sD.setTexture("reflectionCubeSampler", RD);
        const AD = DD.iI();
        for (const {
            feature: ID,
            state: BD,
            active: GD
          }
          of wD.features) {
          var UD, fD;
          if (GD) null === (UD = (fD = (0, Rz.j)(ID)).bind) || void 0 === UD || UD.call(fD, BD, sD, DD, AD)
        }
      }
    }

    function OK(DD) {
      const zD = DD.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(zD) ? "u32" : /i32|^vec\di$/.test(zD) ? "i32" : "f32"
    }

    function JK(DD, zD) {
      const wD = DD.getSize(),
        pD = OK(zD),
        sD = DD => 4 === wD ? `${DD}x4` : 2 === wD ? `${DD}x2` : null;
      if ("f32" === pD) {
        if (5126 === DD.type) return 1 === wD ? "float32" : wD >= 2 && wD <= 4 ? `float32x${wD}` : null;
        if (!DD.normalized) return null;
        switch (DD.type) {
          case 5121:
            return sD("unorm8");
          case 5120:
            return sD("snorm8");
          case 5123:
            return sD("unorm16");
          case 5122:
            return sD("snorm16")
        }
        return null
      }
      const KD = "u32" === pD ? "uint" : "sint";
      switch (DD.type) {
        case 5125:
        case 5124:
          return 1 === wD ? `${KD}32` : wD <= 4 ? `${KD}32x${wD}` : null;
        case 5121:
        case 5120:
          return sD(`${KD}8`);
        case 5123:
        case 5122:
          return sD(`${KD}16`)
      }
      return null
    }

    function EK(DD) {
      var zD;
      const wD = /(8|16|32)(?:x(\d))?$/.exec(DD);
      return wD ? Number(wD[1]) / 8 * Number(null !== (zD = wD[2]) && void 0 !== zD ? zD : 1) : 4
    }
    class QK {
      constructor(DD, zD, wD) {
        this.resources = DD, this.limits = zD, this.warnOnce = wD, this.layouts = new Map
      }
      resolveInputs(DD, zD, wD, pD) {
        const sD = [],
          KD = wD.program.attributes,
          rD = [];
        for (let RD = 0; RD < KD.length; RD++) {
          const wD = KD[RD],
            LD = wD.optional ? null : this.resources.vertexInput(DD, wD.name, pD);
          if (!LD) {
            const DD = OK(wD.type),
              zD = "u32" === DD ? "uint32x4" : "i32" === DD ? "sint32x4" : "float32x4";
            rD.push(null);
            const pD = sD.find((DD => null === DD.data));
            pD ? pD.attributes.push({
              shaderLocation: RD,
              offset: 0,
              format: zD
            }) : sD.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: RD,
                offset: 0,
                format: zD
              }]
            });
            continue
          }
          const cD = LD.getBuffer();
          rD.push(LD);
          const gD = JK(LD, wD.type);
          if (!gD) return this.warnOnce(`format:${zD}:${wD.name}`, `${zD}'s ${wD.name} (type ${LD.type}, size ${LD.getSize()}) has no WebGPU vertex format`), null;
          const AD = LD.getIsInstanced() ? "instance" : "vertex",
            UD = LD.byteStride,
            fD = EK(gD),
            ID = sD.find((DD => DD.data === cD && DD.stride === UD && DD.step === AD && LD.byteOffset >= DD.base && LD.byteOffset - DD.base + fD <= UD));
          ID ? ID.attributes.push({
            shaderLocation: RD,
            offset: LD.byteOffset - ID.base,
            format: gD
          }) : sD.push({
            data: cD,
            base: LD.byteOffset,
            stride: UD,
            step: AD,
            attributes: [{
              shaderLocation: RD,
              offset: 0,
              format: gD
            }]
          })
        }
        if (sD.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${zD}`, `${zD} needs ${sD.length} vertex buffers`), null;
        let LD = "";
        for (const RD of sD) {
          LD += `${RD.stride}${"instance"===RD.step?"i":"v"}`;
          for (const DD of RD.attributes) LD += `,${DD.shaderLocation}:${DD.offset}:${DD.format}`;
          LD += ";"
        }
        let cD = this.layouts.get(LD);
        cD || (cD = {
          key: LD,
          buffers: sD.map((DD => ({
            arrayStride: DD.stride,
            stepMode: DD.step,
            attributes: DD.attributes
          }))),
          instanceEnds: sD.map((DD => {
            let zD = -1;
            if ("instance" === DD.step)
              for (const wD of DD.attributes) zD = Math.max(zD, wD.offset + EK(wD.format));
            return zD
          }))
        }, this.layouts.set(LD, cD));
        const gD = sD.map((DD => DD.base));
        return {
          program: wD,
          sources: rD,
          layout: cD,
          slotData: sD.map((DD => DD.data)),
          o9: gD,
          buffers: [],
          offsets: gD,
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

    function XK(DD, zD, wD, pD) {
      const sD = zD.program.program.attributes;
      for (let KD = 0; KD < sD.length; KD++) {
        if ((sD[KD].optional ? null : wD.vertexInput(DD, sD[KD].name, pD)) !== zD.sources[KD]) return !1
      }
      return !0
    }
    const VK = 64;
    class PK {
      constructor(DD, zD, wD, pD) {
        this.device = DD, this.layout = zD, this.frameBuffer = wD, this.label = pD, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(DD) {
        if (DD * VK <= this.data.length) return !1;
        let zD = 2 * this.data.length;
        for (; DD * VK > zD;) zD *= 2;
        const wD = new Float32Array(zD);
        return wD.set(this.data), this.data = wD, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const sD = this.data,
          KD = DD * VK;
        let rD = sD[KD + 16] !== wD;
        for (let LD = 0; LD < 16 && !rD; LD++) rD = sD[KD + LD] !== zD[pD + LD];
        if (rD) {
          for (let DD = 0; DD < 16; DD++) sD[KD + DD] = zD[pD + DD];
          sD[KD + 16] = wD
        }
        return rD
      }
      upload(DD, zD) {
        this.device.queue.writeBuffer(this.buffer, DD * kp, this.data, DD * VK, (zD - DD) * VK)
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

    function CK(DD) {
      return DD.gpu[CD.g.lite] ??= DD.materials.map(((zD, wD) => ({
        parts: DD,
        range: wD,
        owner: DD.owner
      })))
    }

    function xK(DD) {
      var zD, wD, pD;
      return null !== (zD = null !== (wD = null === (pD = DD.parts.materials[DD.range]) || void 0 === pD ? void 0 : pD.mirror) && void 0 !== wD ? wD : DD.owner.material) && void 0 !== zD ? zD : null
    }
    const TK = ["opaque", "alphaTest", "transparent", "text"];

    function bK(DD) {
      for (const zD of TK) DD[zD].units.length = 0, DD[zD].rows.length = 0
    }
    class jK {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, gz.c)("Lite: ")
      }
      attach(DD, zD) {
        this.model = DD, this.mirror = zD
      }
      get worlds() {
        return this.model.nodes.KU
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(DD) {
        return this.groups.get(DD)
      }
      forEachGroup(DD) {
        this.groups.forEach(DD)
      }
      forEachSelected(DD) {
        for (const [zD, wD] of this.groups)
          for (const pD of TK)
            for (const sD of wD[pD].units) DD(sD.owner, "text" === pD ? "transparent" : pD, zD)
      }
      select(DD, zD) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(bK);
        const {
          model: wD,
          mirror: pD
        } = this;
        if (!wD || !pD || !DD) return;
        this.rows.length < wD.nodes.bA && (this.rows = new Int32Array(wD.nodes.bA));
        const sD = this.rows,
          KD = wD.meshes;
        for (let LD = 0; LD < KD.looseCount; LD++) {
          const DD = KD.loose[LD],
            wD = pD.nodes[DD];
          wD && !wD.isBlocked && wD.isEnabled() && !wD.rc.hasAZeroComponent && KD.selects(DD, zD.frustum) && (this.activate(wD, DD), this.selectedCount++)
        }
        const rD = KD.selectTextPlanes(zD.frustum, sD);
        for (let LD = 0; LD < rD; LD++) {
          const zD = sD[LD],
            KD = pD.nodes[zD],
            rD = wD.meshes.parts[zD];
          if (!KD.isVisible || !(KD.visibility > 0) || 0 === (KD.layerMask & DD.layerMask) || !rD) continue;
          const cD = this.groupOf(wD.meshes.layer[zD]).text;
          for (const DD of CK(rD)) cD.units.push(DD), cD.rows.push(zD);
          this.selectedCount++
        }
      }
      instanceBatch(DD) {
        const zD = this.batchOf(DD);
        return zD.dispatched || (zD.dispatched = zD.renderSelf = !0, zD.row = this.rowOf(DD)), zD
      }
      rowOf(DD) {
        return DD.row
      }
      activate(DD, zD) {
        if (!DD.Gl) {
          const wD = DD;
          if (wD.hsD) {
            const DD = this.batchOf(wD);
            DD.dispatched = !0, DD.renderSelf = !0, DD.row = zD
          }
          return void this.dispatch(wD, zD, zD)
        }
        const wD = DD,
          pD = wD.nsD;
        if (pD._getWorldMatrixDeterminant() >= 0 !== wD._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${pD.name}`, `A mirrored InstancedMesh of ${pD.name} is not drawn yet`);
        const sD = this.batchOf(pD);
        sD.instances.push(wD), sD.rows.push(zD), sD.dispatched || (sD.dispatched = !0, this.dispatch(pD, zD, this.rowOf(pD)))
      }
      batchOf(DD) {
        let zD = this.batches.get(DD);
        return zD || (zD = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(DD, zD)), zD.frame !== this.frame && (zD.frame = this.frame, zD.dispatched = !1, zD.renderSelf = !1, zD.instances.length = 0, zD.rows.length = 0), zD
      }
      dispatch(DD, zD, wD) {
        const {
          layer: pD,
          parts: sD
        } = this.model.meshes;
        if (!sD[zD]) return;
        const KD = this.groupOf(pD[zD]),
          rD = DD;
        for (const LD of CK(sD[zD])) {
          const DD = xK(LD);
          if (!DD) continue;
          const zD = DD.needAlphaBlendingForMesh(rD) ? KD.transparent : DD.needAlphaTestingForMesh(rD) ? KD.alphaTest : KD.opaque;
          zD.units.push(LD), zD.rows.push(wD)
        }
      }
      groupOf(DD) {
        let zD = this.groups.get(DD);
        return zD || (zD = {
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
        }, this.groups.set(DD, zD)), zD
      }
    }

    function dK(DD) {
      DD.opaque.length = 0, DD.transparent.length = 0
    }
    class SK {
      constructor() {
        this.Qg = new Map, this.enabled = [], this.groups = new Map, this.Nf = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(DD) {
        if (this.Qg.has(DD)) return;
        const zD = {
          mesh: DD,
          observer: DD.onEffectiveEnabledStateChangedObservable.add((DD => {
            this.nC(zD, DD)
          })),
          index: -1,
          steady: null
        };
        this.Qg.set(DD, zD), this.nC(zD, DD.isEnabled())
      }
      remove(DD) {
        const zD = this.Qg.get(DD);
        zD && (zD.observer.remove(!0), this.nC(zD, !1), this.Qg.delete(DD))
      }
      base(DD) {
        return this.Qg.get(DD)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Qg: this.Qg.size
        }
      }
      forEachSelected(DD) {
        for (const [zD, wD] of this.groups) {
          for (const pD of wD.opaque) DD(pD.owner, "opaque", zD);
          for (const pD of wD.transparent) DD(pD.owner, "transparent", zD)
        }
        for (const zD of this.Nf) DD(zD.mesh, "opaque", 0)
      }
      group(DD) {
        return this.groups.get(DD)
      }
      forEachGroup(DD) {
        this.groups.forEach(DD)
      }
      select(DD, zD) {
        if (this.drawn = 0, this.selected = 0, this.Nf.length = 0, this.groups.forEach(dK), !DD) return;
        const wD = this.enabled;
        for (let pD = 0; pD < wD.length; pD++) {
          const sD = wD[pD];
          if (sD.steady && zD(sD, DD)) {
            this.selected++, this.Nf.push(sD);
            continue
          }
          const KD = sD.mesh;
          if (KD.isBlocked || KD.rc.hasAZeroComponent) continue;
          if (!KD.isVisible || KD.visibility <= 0 || 0 === (KD.layerMask & DD.layerMask)) continue;
          if (KD.hsD) {
            this.warned.has(KD.name) || (this.warned.add(KD.name), console.warn(`Lite: thin instance base ${KD.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: rD
          } = KD;
          if (!rD) continue;
          KD.computeWorldMatrix(), this.selected++;
          const LD = this.listsFor(KD.renderingGroupId);
          for (const DD of CK(rD)) {
            const zD = xK(DD);
            zD && (zD.needAlphaBlendingForMesh(KD) ? LD.transparent.push(DD) : LD.opaque.push(DD))
          }
        }
      }
      nC(DD, zD) {
        if (zD === DD.index >= 0) return;
        DD.steady = null;
        const wD = this.enabled;
        if (zD) DD.index = wD.length, wD.push(DD);
        else {
          const zD = wD.pop();
          zD !== DD && (wD[DD.index] = zD, zD.index = DD.index), DD.index = -1
        }
      }
      listsFor(DD) {
        let zD = this.groups.get(DD);
        return zD || (zD = {
          opaque: [],
          transparent: []
        }, this.groups.set(DD, zD)), zD
      }
    }
    var iK = wD(39536);
    class lK {
      constructor() {
        this.bundle = null, this.stale = !0, this.Qg = new Set
      }
    }
    class WK {
      constructor(DD, zD, wD) {
        this.device = DD, this.slots = zD, this.host = wD, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new lK, this.XT = new lK, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Hs, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = DD => {
          DD.seen !== this.frame && (DD.draw && (DD.draw = null, this.args[5 * DD.slot + 1] = 0, this.argsDirty = !0, this.XT.stale ||= DD.XT), this.frame - DD.seen > 120 && (this.records.delete(DD.unit), this.freeSlots.push(DD.slot), DD.recorded && (this.bundleOf(DD).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(DD) {
          var zD, wD;
          let pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zD = null === (wD = globalThis.navigator) || void 0 === wD ? void 0 : wD.userAgent) && void 0 !== zD ? zD : "";
          const sD = DD.adapterInfo;
          return "intel" === (null === sD || void 0 === sD ? void 0 : sD.vendor) && "gen-12lp" === sD.architecture && pD.includes("Windows")
        }(DD), (0, iK.B)(this.direct)
      }
      aJ() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, iK.B)(this.directThisFrame)
      }
      add(DD, zD, wD, pD) {
        let sD = this.records.get(DD);
        return sD || (sD = this.createRecord(DD), this.records.set(DD, sD)), sD.recorded && ZK(sD, zD) || (this.bundleOf(sD).stale = !0), this.place(sD, zD, wD, pD), sD
      }
      bundleOf(DD) {
        return DD.XT ? this.XT : this.main
      }
      addAgain(DD, zD, wD, pD) {
        DD.recorded || (this.bundleOf(DD).stale = !0), this.place(DD, zD, wD, pD)
      }
      place(DD, zD, wD, pD) {
        DD.seen = this.frame, DD.XT && null === DD.draw && (this.XT.stale = !0), DD.draw = zD, this.drawn++, wD && this.slots.write(DD.slot, wD, pD) && (this.slotsFrom = Math.min(this.slotsFrom, DD.slot), this.slotsTo = Math.max(this.slotsTo, DD.slot));
        const sD = this.args,
          KD = 5 * DD.slot;
        sD[KD] === zD.count && sD[KD + 1] === zD.instances && sD[KD + 2] === zD.first || (sD[KD] = zD.count, sD[KD + 1] = zD.instances, sD[KD + 2] = zD.first, this.argsDirty = !0, this.XT.stale ||= DD.XT)
      }
      vJ() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(DD) {
        for (const zD of this.records.values()) zD.draw && zD.seen === this.frame && !zD.XT && DD(zD.draw, this.slots.data, zD.slot * kp / 4)
      }
      resourceDestroyed(DD) {
        this.main.stale ||= this.main.Qg.has(DD), this.XT.stale ||= this.XT.Qg.has(DD)
      }
      execute(DD, zD, wD) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(DD, zD, wD, "direct"), this.drawn;
        const pD = this.host.sceneGroup(zD);
        if (!pD) return this.main.bundle = null, this.XT.bundle = null, this.recordedSceneGroup = null, this.encode(DD, zD, wD, "direct"), this.drawn;
        this.recordedTarget === wD && this.recordedSceneGroup === pD || (this.recordedTarget = wD, this.recordedSceneGroup = pD, this.main.stale = !0, this.XT.stale = !0);
        const sD = this.main,
          KD = this.XT;
        let rD = !1;
        !sD.stale && sD.bundle || (sD.bundle = this.record(zD, wD, pD, "indirect"), rD = !0);
        const LD = (0, iK.i)();
        return (KD.stale || this.rangedEpoch !== LD) && (this.rangedEpoch = LD, KD.bundle = this.drawsRanged() ? this.record(zD, wD, pD, "XT") : this.noRangedBundle(), rD = !0), rD && (this.bundles = KD.bundle ? [sD.bundle, KD.bundle] : [sD.bundle]), DD.executeBundles(this.bundles), DD.setBindGroup(0, pD), this.drawn
      }
      record(DD, zD, wD, pD) {
        const sD = this.device.createRenderBundleEncoder({
          label: "XT" === pD ? "thin-bases-ranged" : "thin-bases",
          colorFormats: DD._colorFormat ? [DD._colorFormat] : [],
          depthStencilFormat: DD._depthStencilFormat,
          sampleCount: DD._sampleCount
        });
        return sD.setBindGroup(0, wD), this.encode(sD, DD, zD, pD), sD.finish()
      }
      noRangedBundle() {
        for (const DD of this.records.values()) DD.XT && (DD.recorded = !1);
        return this.XT.Qg.clear(), this.XT.stale = !1, null
      }
      drawsRanged() {
        for (const DD of this.records.values())
          if (DD.XT && DD.draw) return !0;
        return !1
      }
      encode(DD, zD, wD, pD) {
        const sD = [];
        for (const cD of this.records.values()) "direct" !== pD && cD.XT !== ("XT" === pD) || (cD.recorded = !1, cD.draw && sD.push(cD));
        sD.sort(yK);
        const KD = "direct" === pD ? null : "XT" === pD ? this.XT : this.main;
        null === KD || void 0 === KD || KD.Qg.clear(), this.binder.reset();
        let rD = !1;
        for (const cD of sD) {
          var LD;
          const sD = cD.draw,
            gD = this.host.pipelineFor(sD, zD, wD);
          if (!gD) {
            this.host.pipelineCompiling(sD, wD) ? rD = !0 : KD && this.keep(cD, sD, KD.Qg);
            continue
          }
          let RD;
          if (cD.XT && "indirect" !== pD) {
            const DD = cD.unit.owner;
            RD = "direct" === pD && (0, iK.s)(DD) || (0, iK.m)(DD) || void 0
          }
          if (KD && this.keep(cD, sD, KD.Qg), 0 === (null === (LD = RD) || void 0 === LD ? void 0 : LD.count)) continue;
          this.binder.bind(DD, sD, gD, this.slots.bindGroup, cD.slot * kp);
          const AD = 5 * cD.slot;
          if ("indirect" === pD) {
            sD.indexBuffer ? DD.drawIndexedIndirect(this.argsBuffer, 4 * AD) : DD.drawIndirect(this.argsBuffer, 4 * AD);
            continue
          }
          const UD = this.args;
          RD ? NK(DD, null !== sD.indexBuffer, UD, AD, RD) : sD.indexBuffer ? DD.drawIndexed(UD[AD], UD[AD + 1], UD[AD + 2], 0, 0) : DD.draw(UD[AD], UD[AD + 1], UD[AD + 2], 0)
        }
        KD && (KD.stale = rD)
      }
      keep(DD, zD, wD) {
        DD.recorded = !0, DD.pipelineKey = zD.pipelineKey, DD.materialGroup = zD.material.bindGroup, DD.vertexBuffers.length = 0, DD.vertexBuffers.push(...zD.vertexBuffers), DD.vertexOffsets = zD.vertexOffsets, DD.indexBuffer = zD.indexBuffer, DD.indexFormat = zD.indexFormat;
        for (const pD of zD.vertexBuffers) wD.add(pD);
        zD.indexBuffer && wD.add(zD.indexBuffer), wD.add(zD.material.buffer);
        for (const pD of zD.material.bound) pD && wD.add(pD)
      }
      createRecord(DD) {
        let zD = this.freeSlots.pop();
        return void 0 === zD && (zD = this.slotCount++, this.grow()), {
          unit: DD,
          slot: zD,
          XT: void 0 !== (0, iK.m)(DD.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.XT.stale = !0), 5 * this.slotCount > this.args.length) {
          const DD = new Uint32Array(2 * this.args.length);
          DD.set(this.args), this.args = DD, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function NK(DD, zD, wD, pD, sD) {
      const KD = wD[pD + 1],
        rD = sD.data;
      for (let LD = 0; LD < sD.count; LD++) {
        const sD = Math.min(rD[2 * LD], KD),
          cD = Math.min(rD[2 * LD + 1], KD - sD);
        0 !== cD && (zD ? DD.drawIndexed(wD[pD], cD, wD[pD + 2], 0, sD) : DD.draw(wD[pD], cD, wD[pD + 2], sD))
      }
    }

    function ZK(DD, zD) {
      if (DD.pipelineKey !== zD.pipelineKey || DD.materialGroup !== zD.material.bindGroup || DD.indexBuffer !== zD.indexBuffer || DD.indexFormat !== zD.indexFormat || DD.vertexOffsets !== zD.vertexOffsets || DD.vertexBuffers.length !== zD.vertexBuffers.length) return !1;
      for (let wD = 0; wD < DD.vertexBuffers.length; wD++)
        if (DD.vertexBuffers[wD] !== zD.vertexBuffers[wD]) return !1;
      return !0
    }

    function yK(DD, zD) {
      return DK(DD.draw, zD.draw)
    }
    const kK = new WeakMap,
      mK = {
        depth: !1,
        sunShadow: !1
      };

    function eK(DD, zD) {
      let wD = kK.get(DD);
      wD || (wD = new Map, kK.set(DD, wD));
      const pD = `${zD.depth?"-depth":""}${zD.sunShadow?"-shadow":""}${zD.shadowMask?"-mask":""}`;
      let sD = wD.get(pD);
      if (!sD) {
        const KD = [{
          binding: Pz.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Pz.j
          }
        }, {
          binding: Pz.x,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        zD.depth && KD.push({
          binding: Pz.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), zD.sunShadow && KD.push(... function() {
          const DD = GPUShaderStage.FRAGMENT,
            zD = Pz.u;
          return [{
            binding: zD.uniform,
            visibility: DD,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: zD.dU,
            visibility: DD,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: zD.special,
            visibility: DD,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: zD.volume,
            visibility: DD,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: zD.sampler,
            visibility: DD,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: zD.entities,
            visibility: DD,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: zD.entityGrids,
            visibility: DD,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), zD.shadowMask && KD.push({
          binding: Pz.v,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), sD = DD.createBindGroupLayout({
          label: `${zD.depth?"terrain-":""}shader-pack-inputs${pD}`,
          entries: KD
        }), wD.set(pD, sD)
      }
      return sD
    }

    function oK(DD) {
      return eK(DD, mK)
    }

    function aK(DD, zD) {
      if (!zD) return !1;
      const wD = (0, Cz.f)(DD);
      return !!wD && Ww(wD, zD)
    }

    function uK(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!Rp(zD)) return [];
      return [eK(DD, {
        depth: Kp(zD.packVariant),
        sunShadow: aK(zD.packVariant, wD),
        shadowMask: pD
      })]
    }
    class vK {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = DD, this.sunShadow = wD, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Pz.j), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = DD.createBuffer({
          label: "shader-pack-inputs",
          size: Pz.j,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const pD = (0, Pz.z)(zD);
        this.textures = DD.createBuffer({
          label: "shader-pack-textures",
          size: pD.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), DD.queue.writeBuffer(this.textures, 0, pD), this.bindGroup = DD.createBindGroup({
          label: "shader-pack-inputs",
          layout: oK(DD),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Pz.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Pz.x,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(DD, zD, wD) {
        (0, Pz.E)(this.data, {
          seconds: DD.seconds(),
          lit: wD,
          renderOffset: DD.renderOffset(),
          gDD: DD.gDD(),
          eyePosition: zD,
          shadowDirection: DD.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const pD = zD ? this.sunShadow : null;
        if ((zD || wD) && !pD) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!DD && !pD) return this.bindGroup;
        (DD && DD !== this.depthView || wD && wD !== this.maskView) && (this.depthView = null !== DD && void 0 !== DD ? DD : this.depthView, this.maskView = null !== wD && void 0 !== wD ? wD : this.maskView, this.groups.clear());
        const sD = (DD ? 1 : 0) | (pD ? 2 : 0) | (wD ? 4 : 0);
        let KD = this.groups.get(sD);
        if (!KD) {
          const zD = this.entries();
          DD && zD.push({
            binding: Pz.q,
            resource: DD
          }), pD && zD.push(...pD.entries()), wD && zD.push({
            binding: Pz.v,
            resource: wD
          }), KD = this.device.createBindGroup({
            label: `${DD||wD?"terrain-":""}shader-pack-inputs${DD?"-depth":""}${pD?"-shadow":""}${wD?"-mask":""}`,
            layout: eK(this.device, {
              depth: !!DD,
              sunShadow: !!pD,
              shadowMask: !!wD
            }),
            entries: zD
          }), this.groups.set(sD, KD)
        }
        return KD
      }
      bind(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        DD.setBindGroup(Pz.i, this.bindGroupFor(zD, wD, pD))
      }
    }

    function tK(DD, zD, wD) {
      if (DD.gpuVersion === zD.gpuBuffersVersion) return !0;
      let pD;
      do {
        if (pD = zD.gpuBuffersVersion, !FK(DD, zD, wD)) return !1
      } while (zD.gpuBuffersVersion !== pD);
      return DD.gpuVersion = pD, DD.fitInstances = 0, !0
    }

    function FK(DD, zD, wD) {
      let pD = null;
      for (let KD = 0; KD < DD.slotData.length; KD++) {
        var sD;
        const rD = DD.slotData[KD],
          LD = rD ? zD.gpuBuffer(rD) : wD;
        if (!LD) return !1;
        rD && DD.layout.instanceEnds[KD] < 0 && zD.cover(rD, Number.POSITIVE_INFINITY), DD.buffers[KD] = LD;
        const cD = DD.o9[KD] + (rD ? zD.gpuOffset(rD) : 0);
        cD !== (null !== (sD = pD) && void 0 !== sD ? sD : DD.offsets)[KD] && (pD ??= DD.offsets.slice(), pD[KD] = cD), DD.ends[KD] = rD ? zD.gpuEnd(rD) : LD.size
      }
      return pD && (DD.offsets = pD), !0
    }

    function YK(DD, zD, wD, pD) {
      if (zD <= DD.fitInstances) return null;
      const {
        layout: sD,
        ends: KD,
        offsets: rD,
        slotData: LD,
        o9: cD
      } = DD;
      let gD = !1;
      for (let RD = 0; RD < sD.buffers.length; RD++) {
        const DD = sD.instanceEnds[RD];
        if (DD < 0) continue;
        const pD = (zD - 1) * sD.buffers[RD].arrayStride + DD;
        if (KD[RD] - rD[RD] < pD) return {
          index: RD,
          needed: pD
        };
        const AD = LD[RD];
        AD && wD.cover(AD, cD[RD] + pD) && (gD = !0)
      }
      return gD && tK(DD, wD, pD), DD.fitInstances = zD, null
    }
    var HK = wD(37805),
      qK = wD(37832);
    const Dr = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      zr = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      wr = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      pr = `((vertexInputs.aPackedLightLevels >> 16u) | ${cz.b.placed}u)`,
      sr = "u32(vertexInputs.aShaderPackItem.x)",
      Kr = `${cz.b.lifeform}u`;

    function rr(DD) {
      return "item" === DD.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Lr = "bloxdSpEnchant",
      cr = "floor(finalWorld[3].xyz)";

    function gr(DD, zD, wD) {
      return "placed" === zD.kind && DD.reads[wD].includes("bloxdFragmentBlockPosition")
    }

    function Rr(DD, zD) {
      let [wD, pD] = DD;
      return wD === zD.point && pD === zD.code
    }

    function Ar(DD, zD) {
      var wD, pD, sD;
      const KD = null === (wD = DD.find((DD => DD.texture))) || void 0 === wD ? void 0 : wD.texture,
        rD = null === (pD = DD.find((DD => DD.enchantTier))) || void 0 === pD ? void 0 : pD.enchantTier,
        LD = null === (sD = DD.find((DD => DD.overlay))) || void 0 === sD ? void 0 : sD.overlay,
        cD = LD ? zD.filter((DD => Rr(DD, LD))).length : 0;
      return LD && 1 === cD ? {
        texture: KD,
        overlay: LD,
        enchantTier: rD
      } : {
        texture: KD,
        enchantTier: rD
      }
    }

    function Ur(DD) {
      if ("item" === DD.kind) {
        return {
          vertexFlags: `(${sr} & 0xffffu)`,
          varying: "vPackItem",
          value: sr,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return DD.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: pr,
        varying: "vPackFlags",
        value: pr,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function fr(DD) {
      return "lifeform" === DD.kind ? Kr : "0u"
    }

    function Ir(DD) {
      return !!DD.BLOXD_PLUGIN_ENCHANTMENT
    }

    function Br(DD, zD) {
      const {
        enchantTier: wD
      } = zD;
      return wD && Ir(zD.defines) && "lifeform" === zD.kind && Jr(DD, "enchantTier") ? wD : null
    }

    function Gr(DD, zD) {
      return Ir(zD.defines) && Jr(DD, "enchantSpeed")
    }

    function hr(DD) {
      const {
        overlay: zD,
        defines: wD
      } = DD;
      if (!zD || !wD.DIFFUSE) return null;
      const pD = wD.VERTEXCOLOR || wD.INSTANCESCOLOR && wD.INSTANCES;
      return `vec4f(${zD.colour}.rgb * uniforms.vDiffuseInfos.y${pD?" * fragmentInputs.vColor.rgb":""}, ${zD.colour}.a)`
    }
    const nr = "fragmentInputs.vPackTexture";

    function Mr(DD) {
      const {
        atlas: zD,
        defines: wD,
        texture: pD
      } = DD;
      if (zD || !wD.DIFFUSE) return null;
      if (pD) return {
        texture: "diffuseSampler",
        ...pD
      };
      const sD = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===wD.DIFFUSEDIRECTUV?"vMainUV1":2===wD.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== DD.kind) return sD;
      if (!wD.BLOXD_PLUGIN_ANIMATED) return {
        ...sD,
        id: nr
      };
      const KD = ED.c.WGSL,
        rD = (0, ED.Fb)(KD, "uAnimStatesNum"),
        LD = (0, ED.eb)(KD, (0, HK.h)(KD), rD),
        cD = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${rD})`,
        layers: [LD],
        uv: `vec2f(${cD}.x, ${cD}.y * ${rD} - ${LD})`,
        levelUv: cD,
        id: nr
      }
    }

    function Or(DD, zD) {
      return "box" === zD.kind && !!DD.hooks.surface && null !== Mr(zD)
    }

    function Jr(DD, zD) {
      return DD.reads.fragment.includes(zD)
    }

    function Er(DD) {
      return !!DD.BLOXD_LIGHTING && !DD.BLOXD_UNLIT
    }

    function Qr(DD, zD, wD, pD) {
      const sD = DD.filter((DD => {
        let [wD, pD] = DD;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === wD && pD === zD
      }));
      if (1 !== sD.length) throw new Error(`A model program for shader packs has ${0===sD.length?"no":"more than one"} ${pD} code before fog (lite/modelShaderPack.ts)`);
      return DD.map((DD => DD === sD[0] ? [DD[0], wD] : DD))
    }

    function Xr(DD, zD, wD, pD) {
      const {
        hooks: sD
      } = DD, {
        kind: KD,
        defines: rD
      } = zD, LD = [...wD];
      var cD;
      zD.atlas && sD.surface && LD.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", ow("atlasIdxIn")]), "item" === KD && LD.push(["CUSTOM_VERTEX_DEFINITIONS", (0, ED.g)(ED.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Or(DD, zD) && LD.push(["CUSTOM_VERTEX_DEFINITIONS", (0, ED.g)(ED.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (cD = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${mw}[min(u32(${cD}) - 1u, arrayLength(&${mw}) - 1u)], ${cD} > 0.5);\n`)]);
      const gD = Ur(zD);
      gD && (sD.surface || sD.light) && LD.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${gD.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${gD.varying} = ${gD.value};`]);
      let RD = pD;
      if (gr(DD, zD, "fragment") && (LD.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${cr});`]), RD = [...RD, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Jr(DD, "localPosition") && LD.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${rr(zD)};`]), Ir(rD) && sD.surface) {
        Gr(DD, zD) && LD.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const wD = Br(DD, zD);
        wD && LD.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${wD});`]);
        const pD = (0, ED.qb)(ED.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        RD = [...Qr(RD, (0, qK.l)(ED.c.WGSL), pD, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, qK.e)(Lr)]]
      }
      const {
        overlay: AD
      } = zD;
      AD && hr(zD) && sD.surface && (RD = RD.filter((DD => !Rr(DD, AD))));
      const UD = sD.light ? function(DD) {
        return "placed" === DD.kind ? {
          name: "terrain",
          engine: (0, Qz.V)(ED.c.WGSL),
          pack: (0, Qz.tb)(ED.c.WGSL)
        } : DD.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Qz.N)(ED.c.WGSL),
          pack: (0, Qz.lb)(ED.c.WGSL)
        } : null
      }(zD) : null;
      if (UD && (RD = Qr(RD, UD.engine, UD.pack, `${UD.name} light`), "placed" !== KD && Er(rD))) {
        const DD = rD.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, ED.Fb)(ED.c.WGSL, "uEntityLightLevels") : (0, ED.Nb)(ED.c.WGSL, "aLightLevels");
        LD.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Qz.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Qz.pb)(ED.c.WGSL, DD)])
      }
      return {
        vertexCode: LD,
        fragmentCode: RD
      }
    }

    function Vr(DD, zD, wD, pD) {
      return iw(DD, zD, wD, pD, "model")
    }
    const Pr = "\t@builtin(position) position: vec4f,\n";

    function Cr(DD, zD) {
      const wD = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(DD)[0];
      return `${wD}${zD}${DD.slice(wD.length)}`
    }

    function xr(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: sD
      } = zD, KD = Ww(zD, pD), {
        kind: rD,
        defines: LD
      } = wD, cD = function(DD, zD) {
        var wD, pD, sD;
        const {
          defines: KD
        } = zD, rD = Ur(zD), LD = !!KD.FOG, cD = Ir(KD), gD = null !== (wD = null === rD || void 0 === rD ? void 0 : rD.enchantTier) && void 0 !== wD ? wD : Br(DD, zD) ? "fragmentInputs.vPackEnchantTier" : "0u", RD = "lifeform" === zD.kind && !KD.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (pD = null === rD || void 0 === rD ? void 0 : rD.vertexFlags) && void 0 !== pD ? pD : fr(zD),
          vertexLocalPosition: rr(zD),
          flags: null !== (sD = null === rD || void 0 === rD ? void 0 : rD.flags) && void 0 !== sD ? sD : fr(zD),
          normal: "normalW",
          alpha: RD ? "alpha * baseColor.a" : "alpha",
          alphaOut: RD ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: LD ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: LD ? "1.0 - fog" : "0.0",
          enchantTier: gD,
          enchantColour: cD ? `${Lr}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Gr(DD, zD) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Jr(DD, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: hr(zD)
        }
      }(zD, wD), gD = DD.textures.filter((DD => /^textureAtlas\d+$/.test(DD.name))).length, RD = wD.atlas && gD > 0 ? {
        count: gD,
        layers: wD.atlas.layers,
        width: wD.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: DD.material.slots.has("uAnimDataPerTex") ? (zD, wD) => Cp(zD, wD, function(DD) {
          const zD = DD.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            DU: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: DD => `uniforms.uAnimDataPerTex[${DD}]${zD}`
          }
        }(DD)) : null
      } : null, AD = "placed" === rD ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", UD = null !== RD && void 0 !== RD ? RD : Mr(wD), fD = function(DD, wD) {
        let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Pz.A)()}${Zw(zD,wD)}${pD}${uw(DD)}${jw}${AD}${zD.code}`
      };
      let {
        vertex: ID,
        fragment: BD
      } = DD;
      const GD = tw(sD, cD);
      if (GD) {
        const DD = gr(zD, wD, "vertex") ? `\tbloxdSpCell = ${cr};\n` : "";
        ID = Vr(ID, Dr, `${DD}${GD.slice(1)}${Dr}`, "vertex")
      }
      const hD = `${yw(zD,KD,function(DD,zD){return zD.TWOSIDEDLIGHTING?DD:`select(-(${DD}), ${DD}, fragmentInputs.frontFacing)`}(cD.normal,LD),cD.flags)}${Fw(sD,zD.strict,zD.program,UD,cD)}`;
      hD && (BD = Vr(BD, zr, `${hD.slice(1)}${zr}`, "surface")), KD && zD.sunShadow && !LD.TWOSIDEDLIGHTING && (BD = Vr(BD, Pr, `${Pr}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const nD = qw(sD);
      if (nD) {
        const DD = Hw(sD, Er(LD), !0, cD);
        BD = Vr(BD, wr, `${DD}${nD.slice(1)}${wr}`, "light")
      }
      const MD = Or(zD, wD) ? ew : "";
      return {
        ...DD,
        vertex: Cr(ID, fD(RD, !1, MD)),
        fragment: Cr(BD, fD(UD, KD))
      }
    }
    const Tr = {
      name: "earthSky",
      uniqueId: -1
    };
    class br {
      constructor(DD) {
        this.resources = DD, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const DD of this.instances.values()) DD.released = !0, this.resources.destroyBuffer(DD.buffer);
        this.instances.clear()
      }
    }

    function jr(DD) {
      return DD.failed && null !== DD.packGroup
    }
    class dr {
      constructor(DD, zD, wD) {
        this.device = DD, this.resources = zD, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.J9 = new SK, this.modelMeshes = new jK, this.thinBundle = void 0, this.binder = new Hs, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new MK((DD => this.modelSlot(DD).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, gz.c)("Lite: "), this.renderStates = new IK(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (DD, zD) => this.keepSteady(DD, zD), this.lists = new qs(this.modelMeshes, this.J9, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new RK(zD, this.warnOnce, ((DD, zD, wD) => this.programWithModel(DD, zD, wD)), jr), this.vertexLayouts = new QK(zD, DD.limits, this.warnOnce), this.sceneLayout = zz(DD), this.frameLayout = DD.createBindGroupLayout({
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
        }), this.frameBuffer = DD.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new PK(DD, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = DD.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new WK(DD, new PK(DD, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (DD, zD, wD) => this.pipelineFor(DD, zD, wD),
          pipelineCompiling: (DD, zD) => !DD.program.failed && !1 !== this.pipelines.get(`${DD.pipelineKey}|${zD}`),
          sceneGroup: DD => {
            const zD = wD(DD);
            return zD || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), zD
          }
        }), zD.onDestroy = DD => {
          this.thinBundle.resourceDestroyed(DD)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const sD = {
          order: DD,
          isTransparent: zD,
          _direct: !zD,
          bind: (DD, zD) => this.createBinding(sD, zD, wD, pD)
        };
        return sD
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(DD, zD, wD) {
        var pD;
        let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = zD, this.drawDefines.view = zD, this.thinBundle.aJ(), this.writeFrameUniforms();
        const KD = null !== (pD = null === sD || void 0 === sD ? void 0 : sD.defineFor("model")) && void 0 !== pD ? pD : 0;
        this.drawDefines.modelPackVariant = KD, sD && 0 !== KD && (this.packInputs ??= new vK(this.device, sD.textureLayers(), this.sunShadow), this.packInputs.write(sD, zD.eye, sD.ZB())), this.lists.clear(), this.slotCount = 0;
        const rD = DD.activeCamera;
        this.J9.select(rD, this.keepSteadyBase), this.modelMeshes.select(rD, zD), wD && this.pushEarthSky(wD), this.lists.collect(DD), this.thinBundle.vJ(), this.uploadMeshSlots()
      }
      pushDraws(DD, zD, wD, pD, sD, KD) {
        let rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const LD = KD.length;
        for (let cD = 0; cD < wD; cD++) {
          const wD = zD[cD];
          let LD = this.retainedDraw(DD, wD, pD, sD);
          if (void 0 === LD && (LD = this.drawFor(DD, wD, pD, sD), this.retain(wD, LD)), LD) {
            const DD = wD.owner,
              zD = rD ? rD[cD] : -1;
            LD.slotOffset = zD < 0 ? this.writeMeshSlot(DD.getWorldMatrix().m, DD.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[zD], 16 * zD), KD.push(LD)
          }
        }
        return KD.length - LD
      }
      bundleDraws(DD, zD, wD) {
        let pD = 0;
        for (const sD of zD) {
          let zD = this.retainedDraw(DD, sD, wD, !1);
          const KD = void 0 !== zD;
          if (void 0 === zD && (zD = this.drawFor(DD, sD, wD, !1), this.retain(sD, zD)), zD) {
            const DD = sD.owner,
              wD = this.thinBundle.add(sD, zD, DD.getWorldMatrix().m, DD.visibility);
            KD && this.steadyFrom(sD, zD, wD), pD++
          }
        }
        return pD
      }
      steadyFrom(DD, zD, wD) {
        const pD = DD.owner,
          sD = this.J9.base(pD),
          KD = pD.material,
          {
            drawState: rD,
            instance: LD
          } = zD.inputs.retained;
        if (!sD || !KD || 1 !== DD.parts.materials.length || xK(DD) !== KD) return;
        const cD = sD.steady ??= {
          unit: DD,
          material: KD,
          visibility: 1,
          draw: zD,
          record: wD,
          drawState: rD,
          instance: LD,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        cD.unit = DD, cD.material = KD, cD.visibility = pD.visibility, cD.draw = zD, cD.record = wD, cD.drawState = rD, cD.instance = LD, cD.bindGroup = LD.bindGroup, cD.gpuVersion = this.resources.gpuBuffersVersion, cD.fitInstances = zD.inputs.fitInstances, cD.worldFlag = pD.getWorldMatrix().updateFlag, cD.handedFrame = this.frame
      }
      keepSteady(DD, zD) {
        const wD = DD.steady;
        if (wD.handedFrame !== this.frame - 1 || (this.frame + wD.phase) % 8 === 0) return !1;
        const pD = DD.mesh,
          {
            unit: sD,
            draw: KD,
            instance: rD,
            drawState: LD
          } = wD,
          cD = pD.forcedInstanceCount || pD.A4;
        if (!pD.isVisible || pD.hsD || pD.visibility !== wD.visibility || 0 === (pD.layerMask & zD.layerMask) || pD.material !== wD.material || 0 !== pD.renderingGroupId || pD.hasVertexAlpha || !this.drawDefines.definesHold(LD, sD, LD.instancing) || wD.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(KD.inputs, sD, LD.instancing, KD.program) || KD.program.failed || rD.released || cD <= 0 || cD > wD.fitInstances) return !1;
        if (rD.frame !== this.frame && this.bindMaterial(rD, this.modelUniforms.refreshModelUniforms(pD.Ul(), rD, rD.model, this.view)), !rD.bindable || rD.bindGroup !== wD.bindGroup) return !1;
        const gD = pD.computeWorldMatrix(),
          RD = gD.updateFlag !== wD.worldFlag;
        return wD.worldFlag = gD.updateFlag, KD.instances = cD, this.thinBundle.addAgain(wD.record, KD, RD ? gD.m : null, wD.visibility), wD.handedFrame = this.frame, this.J9.drawn++, !0
      }
      retainedDraw(DD, zD, wD, pD) {
        const sD = this.inputs.get(zD),
          KD = null === sD || void 0 === sD ? void 0 : sD.retained;
        if (!sD || !KD) return;
        const {
          drawState: rD,
          program: LD,
          instance: cD,
          instancing: gD
        } = KD, RD = zD.owner;
        if (sK(RD) !== gD) return;
        const AD = this.instanceCount(RD, gD);
        if (AD <= 0) return null;
        if (cD.released || LD.failed || rD.program !== LD || !this.drawDefines.programCurrent(rD, zD, gD, wD) || !this.inputsStamped(sD, zD, gD, LD) || RD.isUnIndexed !== KD.unIndexed || this.indexKey(zD) !== KD.indexData) return;
        if (KD.indexBuffer && KD.gpuVersion !== this.resources.gpuBuffersVersion) {
          const DD = this.resources.gpuBuffer(KD.indexData);
          if (!DD) return;
          KD.indexBuffer = DD, KD.gpuVersion = this.resources.gpuBuffersVersion
        }
        let UD = !1;
        if (cD.frame !== this.frame && (UD = this.modelUniforms.refreshModelUniforms(DD, cD, cD.model, this.view)), !this.bindMaterial(cD, UD) || !this.withGpuBuffers(sD) || !this.instanceBuffersFit(RD.name, sD, AD)) return null;
        const fD = this.makeDraw(LD, sD, this.renderStates.renderState(rD.model, RD, pD, sD.state), cD, AD);
        return this.setRange(fD, zD, KD.indexBuffer, KD.indexData), fD
      }
      retain(DD, zD) {
        const wD = this.drawDefines.drawStates.get(DD);
        if (!zD || !wD || wD.program !== zD.program) {
          const zD = this.inputs.get(DD);
          return void(zD && (zD.retained = null))
        }
        const pD = DD.owner,
          sD = wD.instancing,
          KD = this.indexKey(DD),
          rD = zD.inputs.retained;
        rD ? (rD.drawState = wD, rD.instancing = sD, rD.program = zD.program, rD.instance = zD.material, rD.indexData = KD, rD.unIndexed = pD.isUnIndexed, rD.indexBuffer = zD.indexBuffer, rD.gpuVersion = this.resources.gpuBuffersVersion) : zD.inputs.retained = {
          drawState: wD,
          instancing: sD,
          program: zD.program,
          instance: zD.material,
          indexData: KD,
          unIndexed: pD.isUnIndexed,
          indexBuffer: zD.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(DD, zD, wD, pD) {
        const sD = zD.owner,
          KD = xK(zD);
        if (!KD) return null;
        const rD = KD.getClassName();
        let LD = null;
        if (function(DD) {
            return "LinesMesh" === DD.getClassName()
          }(sD)) {
          if (! function(DD) {
              return "ShaderMaterial" === DD.getClassName() && "color" === DD.shaderPath
            }(KD)) return this.warnOnce(`lines:${rD}`, `A LinesMesh with a ${rD} is not drawn yet (${KD.name})`), null;
          LD = sD
        } else if ("StandardMaterial" !== rD && "LiteMaterial" !== rD) return this.warnOnce(`class:${rD}`, `${rD} is not drawn yet (${KD.name})`), null;
        const cD = sK(sD),
          gD = this.instanceCount(sD, cD);
        if (gD <= 0) return null;
        const RD = LD ? this.lineProgramFor(sD, wD, cD) : this.drawDefines.programFor(DD, zD, KD, wD, cD);
        if (!RD || RD.failed) return null;
        const AD = LD ? null : this.drawDefines.drawStates.get(zD).model,
          UD = AD ? this.modelInstance(AD, RD) : this.materialInstance(sD, RD);
        let fD = !1;
        if (UD.frame !== this.frame && (LD ? nD(UD.ubo, LD) : fD = this.modelUniforms.refreshModelUniforms(DD, UD, UD.model, this.view)), !this.bindMaterial(UD, fD)) return null;
        const ID = this.meshInputs(zD, RD, cD);
        if (!ID || !this.instanceBuffersFit(sD.name, ID, gD)) return null;
        const BD = this.indexKey(zD);
        let GD = null;
        if (BD && !sD.isUnIndexed && (GD = this.resources.gpuBuffer(BD), !GD)) return null;
        const hD = this.renderStates.renderState(null !== AD && void 0 !== AD ? AD : KD, sD, pD, ID.state, LD ? "line-list" : "triangle-list"),
          MD = this.makeDraw(RD, ID, hD, UD, gD);
        return this.setRange(MD, zD, GD, BD), MD
      }
      indexKey(DD) {
        const zD = cK(DD);
        return zD ? this.resources.modelIndex(zD) : null
      }
      setRange(DD, zD, wD, pD) {
        wD && (DD.indexBuffer = wD, DD.indexFormat = this.resources.indexFormat(pD));
        const sD = 4 * zD.range + (wD ? 0 : 2);
        DD.unit = zD, DD.first = zD.parts.rG[sD], DD.count = zD.parts.rG[sD + 1]
      }
      makeDraw(DD, zD, wD, pD, sD) {
        zD.state !== wD && (zD.state = wD, zD.pipelineKey = `${DD.id}|${zD.layout.key}|${wD.key}`, zD.pipeline = null);
        const KD = zD.draw ??= {
          program: DD,
          inputs: zD,
          pipelineKey: "",
          layout: zD.layout,
          state: wD,
          material: pD,
          slotOffset: 0,
          vertexBuffers: zD.buffers,
          vertexOffsets: zD.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: sD,
          unit: null
        };
        return KD.program = DD, KD.pipelineKey = zD.pipelineKey, KD.state = wD, KD.material = pD, KD.vertexOffsets = zD.offsets, KD.indexBuffer = null, KD.instances = sD, KD
      }
      instanceCount(DD, zD) {
        switch (zD) {
          case "thin":
            return DD.forcedInstanceCount || DD.A4;
          case "instanced":
            return this.prepareInstances(DD);
          case "none":
            return 1
        }
      }
      prepareInstances(DD) {
        const zD = function(DD, zD) {
          const wD = zD._userInstancedBuffersStorage,
            pD = DD.batchUploads.get(zD);
          if (pD) {
            var sD;
            if (pD.layout === (null !== (sD = null === wD || void 0 === wD ? void 0 : wD.interleavedKinds) && void 0 !== sD ? sD : null)) return pD;
            pD.release()
          }
          return new aD(DD, zD, wD)
        }(this.resources, DD);
        return zD.frame !== this.frame && zD.pack(DD, this.modelMeshes.instanceBatch(DD), this.modelMeshes.worlds, this.frame), zD.count
      }
      programWithModel(DD, zD, wD) {
        const pD = this.modelSlot(DD),
          sD = AK(pD, DD, wD),
          KD = this.drawDefines.modelPackKind(DD),
          rD = KD ? function(DD, zD, wD, pD) {
            const sD = (0, VD.y)(DD, QD.j.name),
              KD = [];
            for (const {
                feature: cD,
                state: gD,
                active: RD
              }
              of DD.features) {
              var rD, LD;
              const DD = RD ? null === (rD = (LD = (0, Rz.j)(cD)).KI) || void 0 === rD ? void 0 : rD.call(LD, gD) : void 0;
              DD && KD.push(DD)
            }
            return {
              kind: zD,
              atlas: null !== sD && void 0 !== sD && sD.active ? (0, QD.c)(sD.state) : null,
              defines: wD,
              ...Ar(KD, pD)
            }
          }(DD, KD, zD, pD.fragmentCode) : null;
        if (rD && function(DD) {
            const zD = DD.defines;
            return (null === DD.atlas || !!zD.DIFFUSE && 1 === zD.DIFFUSEDIRECTUV) && !!zD.NORMAL && !zD.REFLECTION && !zD.EMISSIVEASILLUMINATION && !zD.LINKEMISSIVEWITHDIFFUSE
          }(rD)) {
          const wD = this.modelPackProgram(DD, zD, `${sD}#${KD}#sp${this.drawDefines.modelPackVariant}`, pD, rD);
          if (wD && !wD.failed) return wD
        }
        const LD = this.programs.get(sD);
        if (LD || this.unbuildable.has(sD)) return null !== LD && void 0 !== LD ? LD : null;
        let cD;
        try {
          cD = gs({
            defines: rK(zD),
            vertexCode: pD.vertexCode,
            fragmentCode: pD.fragmentCode,
            pluginUniforms: pD.pluginUniforms
          })
        } catch (gD) {
          return this.unbuildable.add(sD), this.warnOnce(`build:${sD}`, `could not build a program for ${DD.name}: ${String(gD)}`), null
        }
        return this.createProgram(sD, cD, "standard")
      }
      modelPackProgram(DD, zD, wD, pD, sD) {
        const KD = this.programs.get(wD);
        if (KD || this.unbuildable.has(wD)) return null !== KD && void 0 !== KD ? KD : null;
        const rD = this.drawDefines.modelPackVariant;
        let LD;
        try {
          const DD = function(DD) {
              return (0, Cz.b)(DD, "model")
            }(rD),
            wD = Xr(DD, sD, pD.vertexCode, pD.fragmentCode);
          LD = xr(gs({
            defines: rK(zD),
            ...wD,
            pluginUniforms: pD.pluginUniforms
          }), DD, sD, !!this.sunShadow)
        } catch (RD) {
          return this.unbuildable.add(wD), this.warnOnce(`build:${wD}`, `could not build a shader pack program for ${DD.name}, which draws without the pack: ${String(RD)}`), null
        }
        const cD = aK(rD, !!this.sunShadow),
          gD = {
            group: this.packInputs.bindGroupFor(null, cD),
            layout: eK(this.device, {
              depth: !1,
              sunShadow: cD
            })
          };
        return this.createProgram(wD, LD, function(DD) {
          return `standard-sp${DD}`
        }(rD), gD)
      }
      lineProgramFor(DD, zD, wD) {
        const pD = hD(DD, wD, zD, this.view);
        let sD = this.linePrograms.get(pD);
        var KD;
        return sD || (sD = this.createProgram(`lines#${pD}`, (KD = function(DD) {
          const zD = new Map;
          for (let wD = 0; wD < gD.length; wD++) DD & 1 << wD && zD.set(gD[wD], !0);
          return zD
        }(pD), fs({
          defines: KD,
          vertex: As,
          fragment: Us,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(pD, sD)), sD
      }
      createProgram(DD, zD, wD) {
        var pD;
        let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const KD = this.nextProgramId++,
          rD = `${wD}-${KD}`,
          LD = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          cD = [{
            binding: 0,
            visibility: LD,
            buffer: {
              type: "uniform"
            }
          }];
        for (const AD of zD.textures) cD.push({
          binding: AD.binding,
          visibility: LD,
          texture: {
            viewDimension: AD.dimension
          }
        }), cD.push({
          binding: AD.samplerBinding,
          visibility: LD,
          sampler: {}
        });
        const gD = this.device.createBindGroupLayout({
            label: rD,
            entries: cD
          }),
          RD = {
            key: DD,
            id: KD,
            kind: wD,
            program: zD,
            vertex: this.device.createShaderModule({
              label: `${rD}-vertex`,
              code: zD.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${rD}-fragment`,
              code: zD.fragment
            }),
            materialLayout: gD,
            pipelineLayout: this.device.createPipelineLayout({
              label: rD,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, gD, ...sD ? [sD.layout] : []]
            }),
            packGroup: null !== (pD = null === sD || void 0 === sD ? void 0 : sD.group) && void 0 !== pD ? pD : null,
            failed: !1
          };
        return this.programs.set(DD, RD), RD
      }
      writeFrameUniforms() {
        const DD = this.frameUniforms;
        nK(this.view, DD), this.device.queue.writeBuffer(this.frameBuffer, 0, DD)
      }
      materialInstance(DD, zD) {
        let wD = this.materials.get(DD);
        if (!wD) {
          const zD = new Map;
          this.materials.set(DD, zD), DD.Bl.addOnce((() => {
            for (const DD of zD.values()) DD.released = !0, this.resources.destroyBuffer(DD.buffer);
            this.materials.delete(DD)
          })), wD = zD
        }
        let pD = wD.get(zD.key);
        return pD || (pD = this.newMaterialInstance(DD, null, zD), wD.set(zD.key, pD)), pD
      }
      modelInstance(DD, zD) {
        const wD = this.modelSlot(DD);
        let pD = wD.instances.get(zD.key);
        return pD || (pD = this.newMaterialInstance(DD, DD, zD), wD.instances.set(zD.key, pD)), pD
      }
      modelSlot(DD) {
        let zD = DD.gpu[CD.g.lite];
        return zD || (zD = new br(this.resources), DD.gpu[CD.g.lite] = zD), zD
      }
      newMaterialInstance(DD, zD, wD) {
        const pD = wD.program.material.floats,
          sD = new Float32Array(pD),
          KD = new Map;
        return {
          owner: DD,
          model: zD,
          program: wD,
          data: sD,
          uploaded: new Float32Array(pD).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${DD.name}-uniforms`,
            size: Math.max(16, 4 * pD),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: KD,
          ubo: new hK(wD.program.material.slots, sD, KD),
          bindGroup: null,
          bound: new Array(2 * wD.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(DD) {
        var zD;
        const wD = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: ns + Ms,
            fragment: ns + Os,
            attributes: [],
            material: hs,
            textures: []
          }, "earthSky"),
          pD = this.earthSkyUniforms ??= this.newMaterialInstance(Tr, null, wD);
        this.earthSkyFrom !== DD && (this.earthSkyFrom = DD, pD.data.fill(0)), Ts(pD.ubo, DD, this.view);
        const sD = this.vertexInputs(wD, Tr, "earthSky", wD, null);
        if (wD.failed || !sD || !this.bindMaterial(pD, !1)) return;
        const KD = null !== (zD = sD.state) && void 0 !== zD ? zD : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          rD = this.makeDraw(wD, sD, KD, pD, 1);
        rD.count = Is.length;
        const LD = bs(DD, this.view);
        rD.slotOffset = this.writeMeshSlot(LD, 1), this.lists.skyDraws.push(rD)
      }
      uploadIfChanged(DD) {
        const {
          data: zD,
          uploaded: wD
        } = DD;
        for (let pD = 0; pD < zD.length; pD++)
          if (zD[pD] !== wD[pD]) return wD.set(zD), void this.device.queue.writeBuffer(DD.buffer, 0, zD)
      }
      bindMaterial(DD, zD) {
        return DD.frame !== this.frame && (DD.frame = this.frame, zD || this.uploadIfChanged(DD), DD.bindable = this.bindTextures(DD)), DD.bindable
      }
      bindTextures(DD) {
        const {
          program: zD,
          bound: wD
        } = DD, pD = zD.program.textures;
        let sD = !DD.bindGroup,
          KD = !0;
        for (let rD = 0; rD < pD.length; rD++) {
          const zD = DD.textures.get(pD[rD].name),
            LD = zD ? this.resources.boundTexture(zD) : null;
          LD ? wD[2 * rD] === LD.view && wD[2 * rD + 1] === LD.sampler || (wD[2 * rD] = LD.view, wD[2 * rD + 1] = LD.sampler, sD = !0) : (zD || DD.ubo.expected.has(pD[rD].name) || this.warnOnce(`texture:${DD.owner.name}:${pD[rD].name}`, `${DD.owner.name} has no ${pD[rD].name}`), KD = !1)
        }
        if (!KD) return sD && (DD.bindGroup = null), !1;
        if (sD) {
          const sD = [{
            binding: 0,
            resource: {
              buffer: DD.buffer
            }
          }];
          for (let DD = 0; DD < pD.length; DD++) sD.push({
            binding: pD[DD].binding,
            resource: wD[2 * DD]
          }), sD.push({
            binding: pD[DD].samplerBinding,
            resource: wD[2 * DD + 1]
          });
          DD.bindGroup = this.device.createBindGroup({
            label: `${DD.owner.name}-material`,
            layout: zD.materialLayout,
            entries: sD
          })
        }
        return !0
      }
      writeMeshSlot(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, DD, zD, wD), this.slotCount++ * kp
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(DD, zD, wD, pD, sD) {
        let KD = this.inputs.get(DD);
        if (!KD || KD.program !== pD || !XK(zD, KD, this.resources, sD)) {
          var rD;
          if (KD = null !== (rD = this.vertexLayouts.resolveInputs(zD, wD, pD, sD)) && void 0 !== rD ? rD : void 0, !KD) return null;
          this.inputs.set(DD, KD)
        }
        return this.withGpuBuffers(KD)
      }
      meshInputs(DD, zD, wD) {
        const pD = this.inputs.get(DD);
        if (pD && this.inputsStamped(pD, DD, wD, zD)) return this.withGpuBuffers(pD);
        const sD = DD.owner,
          KD = cK(DD),
          rD = this.vertexInputs(DD, sD, sD.name, zD, KD);
        return rD && (rD.geometry = gK(DD), rD.instanceLayout = this.drawDefines.instanceLayout(sD, wD)), rD
      }
      inputsStamped(DD, zD, wD, pD) {
        return function(DD, zD, wD, pD) {
          return DD.program === wD && DD.geometry === gK(zD) && DD.instanceLayout === pD
        }(DD, zD, pD, this.drawDefines.instanceLayout(zD.owner, wD))
      }
      withGpuBuffers(DD) {
        return tK(DD, this.resources, this.zeroBuffer) ? DD : null
      }
      instanceBuffersFit(DD, zD, wD) {
        const pD = YK(zD, wD, this.resources, this.zeroBuffer);
        if (pD) {
          const sD = zD.ends[pD.index] - zD.offsets[pD.index] + zD.o9[pD.index];
          return this.warnOnce(`overrun:${DD}`, `${DD} draws ${wD} instances from a ${sD}-byte buffer (${pD.needed} needed)`), !1
        }
        return !0
      }
      createBinding(DD, zD, wD, pD) {
        const sD = `${zD._colorFormat}|${zD._depthStencilFormat}|${zD._depthCompare}|${zD._sampleCount}`,
          KD = rz(this.device, zD);
        if (DD === this.skyLastRenderable) {
          let wD = null;
          return {
            renderable: DD,
            pipeline: KD,
            draw: DD => wD ? this.drawSky(DD, zD, sD, wD) : 0,
            update: DD => {
              wD = DD
            }
          }
        }
        return {
          renderable: DD,
          pipeline: KD,
          draw: DD => (pD ? pD.execute(DD, zD, sD) : 0) + this.drawList(DD, zD, sD, wD)
        }
      }
      drawSky(DD, zD, wD, pD) {
        const sD = this.lists.skyDraws,
          KD = sD.length > 0;
        if (KD) {
          var rD;
          const wD = (null !== (rD = zD._depthCompare) && void 0 !== rD ? rD : wz).startsWith("greater") ? 0 : 1;
          DD.setViewport(0, 0, pD.targetWidth, pD.targetHeight, wD, wD)
        }
        const LD = this.drawList(DD, zD, wD, sD);
        return KD && DD.setViewport(0, 0, pD.targetWidth, pD.targetHeight, 0, 1), LD
      }
      drawList(DD, zD, wD, pD) {
        let sD = 0;
        const KD = this.binder;
        KD.reset();
        for (const rD of pD) {
          const pD = this.pipelineFor(rD, zD, wD);
          pD && (KD.bind(DD, rD, pD, this.meshSlots.bindGroup, rD.slotOffset), rD.indexBuffer ? DD.drawIndexed(rD.count, rD.instances, rD.first, 0, 0) : DD.draw(rD.count, rD.instances, rD.first, 0), sD++)
        }
        return sD
      }
      pipelineFor(DD, zD, wD) {
        var pD, sD;
        if (DD.program.failed) return null;
        const KD = DD.inputs;
        if (KD.pipeline && KD.pipelineTarget === wD) return KD.pipeline;
        const rD = `${DD.pipelineKey}|${wD}`,
          LD = this.pipelines.get(rD);
        if (void 0 !== LD) return LD && (KD.pipeline = LD, KD.pipelineTarget = wD), LD || null;
        this.pipelines.set(rD, null);
        const {
          program: cD,
          layout: gD,
          state: RD
        } = DD, AD = {
          label: `standard-${cD.id}`,
          layout: cD.pipelineLayout,
          vertex: {
            module: cD.vertex,
            entryPoint: "main",
            buffers: gD.buffers
          },
          fragment: YD({
            module: cD.fragment,
            entryPoint: "main"
          }, zD, RD.blend, RD.colourWrite),
          depthStencil: zD._depthStencilFormat ? {
            format: zD._depthStencilFormat,
            depthCompare: null !== (pD = null !== (sD = RD.depthCompare) && void 0 !== sD ? sD : zD._depthCompare) && void 0 !== pD ? pD : wz,
            depthWriteEnabled: RD.depthWrite,
            depthBias: RD.depthBias,
            depthBiasSlopeScale: RD.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: zD._sampleCount
          },
          primitive: {
            topology: RD.topology,
            frontFace: RD.frontFace,
            cullMode: RD.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(AD).then((DD => {
          this.compiling--, this.pipelines.set(rD, DD)
        }), (DD => {
          this.compiling--, this.reportFailure(cD, rD, DD)
        })), null
      }
      forEachSunShadowCaster(DD) {
        const zD = this.caster,
          wD = (wD, pD, sD) => {
            const KD = wD.unit && function(DD) {
              const zD = DD.material.model;
              return null !== zD && (zD.lifeform || zD.item) && zD.castsSunShadow && "triangle-list" === DD.state.topology
            }(wD) ? cK(wD.unit) : null;
            if (!KD) return;
            const rD = wD.unit.owner;
            switch (zD.geometry = KD, zD.skip = rD.noSunShadowVertices, zD.indexed = null !== wD.indexBuffer, zD.first = wD.first, zD.count = wD.count, zD.KU = pD, zD.worldAt = sD, zD.instances = null, zD.instanceCount = 1, zD.thin = !1, sK(rD)) {
              case "thin": {
                const DD = rD._thinInstanceDataStorage.matrixData;
                if (!DD) return;
                zD.instances = DD, zD.instanceCount = Math.min(wD.instances, DD.length / 16), zD.thin = !0;
                break
              }
              case "instanced": {
                const DD = this.resources.batchUploads.get(rD);
                if (!DD || DD.frame !== this.frame || !this.writeBatchCasters(DD)) return;
                break
              }
            }
            DD(zD)
          };
        for (const pD of this.lists.opaqueDraws) wD(pD, this.meshSlots.data, pD.slotOffset / 4);
        this.thinBundle.forEachDrawn(wD)
      }
      writeBatchCasters(DD) {
        const {
          caster: zD
        } = this, wD = DD.packedMatrices, pD = DD.count;
        zD.instances = wD, zD.instanceCount = pD;
        let sD = -1;
        for (let KD = 0; KD < pD; KD++) {
          const zD = Sr(DD.packedRowMesh(KD));
          zD && sD < 0 ? (this.casterWorlds.length < 16 * pD && (this.casterWorlds = new Float32Array(wD.length)), this.casterWorlds.set(wD.subarray(0, 16 * KD)), sD = KD) : !zD && sD >= 0 && (this.casterWorlds.set(wD.subarray(16 * KD, 16 * KD + 16), 16 * sD), sD++)
        }
        return sD >= 0 && (zD.instances = this.casterWorlds, zD.instanceCount = sD), zD.instanceCount > 0
      }
      async reportFailure(DD, zD, wD) {
        const pD = [];
        let sD = !0;
        for (const [KD, rD] of [
            ["vertex", DD.vertex],
            ["fragment", DD.fragment]
          ]) {
          const DD = await rD.getCompilationInfo();
          for (const zD of DD.messages) sD &&= "error" !== zD.type, pD.push(`${KD}:${zD.lineNum}:${zD.linePos} ${zD.type}: ${zD.message}`)
        }
        if (sD && !DD.packGroup) return this.pipelines.set(zD, !1), console.error(`Lite: pipeline ${zD} failed`, wD), void Ys("mesh", DD.kind, wD);
        DD.failed || (DD.failed = !0, console.error(`Lite: program ${DD.id} failed`, wD, pD.join("\n"), {
          program: DD.program,
          key: DD.key
        }), Ys("mesh", DD.kind, wD, sD ? null : pD[0]))
      }
    }

    function Sr(DD) {
      var zD, wD;
      const pD = null === (zD = DD.iW) || void 0 === zD || null === (wD = zD.aShaderPackItem) || void 0 === wD ? void 0 : wD.x;
      return void 0 !== pD && 0 !== (pD & cz.g)
    }
    var ir = wD(41580),
      lr = wD(41582),
      Wr = wD(41588),
      Nr = wD(41542);
    const Zr = [0, 3, 1, 4, 2, 5];

    function yr(DD, zD, wD, pD, sD) {
      const KD = wD[0].width;
      try {
        return sD ? function(DD, zD, wD) {
          const pD = (0, Nr.e)(DD, wD, wD, 6);
          for (let sD = 0; sD < 6; sD++)(0, Nr.i)(DD, pD, sD, zD[Zr[sD]], {
            invertY: !1
          });
          return pD.texture
        }(DD, wD, KD) : function(DD, zD, wD, pD) {
          const sD = DD.createTexture({
            label: "sink-cube",
            size: {
              width: wD,
              height: wD,
              depthOrArrayLayers: 6
            },
            format: pD,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let KD = 0; KD < 6; KD++) DD.queue.copyExternalImageToTexture({
            source: zD[Zr[KD]]
          }, {
            texture: sD,
            origin: {
              x: 0,
              y: 0,
              z: KD
            }
          }, {
            width: wD,
            height: wD
          });
          return sD
        }(zD, wD, KD, 1 === pD ? "r8unorm" : "rgba8unorm")
      } finally {
        kr(wD)
      }
    }

    function kr(DD) {
      for (const zD of null !== DD && void 0 !== DD ? DD : []) null === zD || void 0 === zD || zD.close()
    }
    async function mr(DD) {
      const zD = [],
        wD = [];
      if (await Promise.all(DD.map(((DD, pD) => (zD[pD] = null, DD.then((DD => {
          zD[pD] = DD
        }), (DD => {
          wD.push(DD)
        })))))), wD.length > 0) throw kr(zD), wD[0];
      return zD
    }
    class er {
      constructor(DD) {
        this.bA = DD, this.starts = [], this.lengths = [], this.used = 0, DD > 0 && (this.starts.push(0), this.lengths.push(DD))
      }
      allocate(DD) {
        const {
          starts: zD,
          lengths: wD
        } = this;
        for (let pD = 0; pD < zD.length; pD++) {
          if (wD[pD] < DD) continue;
          const sD = zD[pD];
          return wD[pD] === DD ? (zD.splice(pD, 1), wD.splice(pD, 1)) : (zD[pD] += DD, wD[pD] -= DD), this.used += DD, sD
        }
        return -1
      }
      free(DD, zD) {
        this.used -= zD;
        const wD = Math.min(DD + zD, this.bA);
        wD > DD && this.release(DD, wD - DD)
      }
      grow(DD) {
        const zD = this.bA;
        this.bA = DD, this.release(zD, DD - zD)
      }
      truncate(DD) {
        const {
          starts: zD,
          lengths: wD
        } = this;
        for (let pD = zD.length - 1; pD >= 0 && zD[pD] + wD[pD] > DD; pD--) zD[pD] >= DD ? (zD.splice(pD, 1), wD.splice(pD, 1)) : wD[pD] = DD - zD[pD];
        this.bA = DD
      }
      release(DD, zD) {
        const {
          starts: wD,
          lengths: pD
        } = this;
        let sD = 0,
          KD = wD.length;
        for (; sD < KD;) {
          const zD = sD + KD >> 1;
          wD[zD] < DD ? sD = zD + 1 : KD = zD
        }
        const rD = sD,
          LD = rD > 0 && wD[rD - 1] + pD[rD - 1] === DD,
          cD = rD < wD.length && DD + zD === wD[rD];
        LD && cD ? (pD[rD - 1] += zD + pD[rD], wD.splice(rD, 1), pD.splice(rD, 1)) : LD ? pD[rD - 1] += zD : cD ? (wD[rD] = DD, pD[rD] += zD) : (wD.splice(rD, 0, DD), pD.splice(rD, 0, zD))
      }
    }
    const or = 256;
    class ar {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = DD, this.onReplaced = zD, this.mergeGap = wD, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.rG = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const sD = Math.max(or, Math.ceil(pD / or) * or);
        this.bytes = new Uint8Array(sD), this.words = new Uint32Array(this.bytes.buffer), this.rG = new er(sD / or)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(DD) {
        return Math.max(1, Math.ceil(DD / or)) * or
      }
      allocate(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD;
        const pD = ar.slotBytes(DD),
          sD = pD / or;
        let KD = this.rG.allocate(sD);
        KD < 0 && (this.grow(this.rG.bA + sD), KD = this.rG.allocate(sD));
        const rD = KD * or;
        return this.growTo(rD + Math.max(wD, pD)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, rD, rD + pD), zD && this.bytes.set(new Uint8Array(zD.buffer, zD.byteOffset, Math.min(zD.byteLength, pD)), rD), this.markDirty(rD, rD + pD), rD
      }
      growTo(DD) {
        const zD = Math.ceil(DD / or);
        zD > this.rG.bA && this.grow(zD)
      }
      free(DD, zD) {
        this.freed.push(DD, zD)
      }
      write(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (pD <= 0) return;
        pD <= 1024 && 0 === (3 & (DD | wD | pD)) ? this.copyWords(DD >> 2, zD.buffer, wD >> 2, pD >> 2) : this.bytes.set(new Uint8Array(zD.buffer, wD, pD), DD);
        let KD = DD + pD;
        if (sD) {
          const zD = DD + 4 * Math.ceil(pD / 4);
          this.bytes.fill(0, KD, zD), KD = zD
        }
        this.markDirty(DD, KD)
      }
      copyWords(DD, zD, wD, pD) {
        let sD = this.sourceWords.get(zD);
        sD || (sD = new Uint32Array(zD, 0, zD.byteLength >> 2), this.sourceWords.set(zD, sD));
        const KD = this.words;
        for (let rD = 0; rD < pD; rD++) KD[DD + rD] = sD[wD + rD]
      }
      move(DD, zD, wD) {
        this.bytes.copyWithin(zD, DD, DD + wD), this.markDirty(zD, zD + wD)
      }
      flush() {
        for (const zD of this.retired) this.onReplaced(zD), zD.destroy();
        this.retired.length = 0;
        const DD = this.dirtyStarts.length;
        if (DD > 0) {
          const {
            dirtyStarts: zD,
            dirtyEnds: wD,
            order: pD
          } = this;
          pD.length = DD;
          for (let LD = 0; LD < DD; LD++) pD[LD] = LD;
          DD > 1 && pD.sort(((DD, wD) => zD[DD] - zD[wD]));
          const sD = this.mergeGap;
          let KD = zD[pD[0]],
            rD = wD[pD[0]];
          for (let LD = 1; LD < DD; LD++) {
            const DD = pD[LD];
            zD[DD] - rD <= sD ? rD = Math.max(rD, wD[DD]) : (this.send(KD, rD), KD = zD[DD], rD = wD[DD])
          }
          this.send(KD, rD), zD.length = 0, wD.length = 0
        }
        this.holding = !1
      }
      vJ() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const DD = this.freed;
        for (let zD = 0; zD < DD.length; zD += 2) this.rG.free(DD[zD] / or, DD[zD + 1] / or);
        DD.length = 0
      }
      send(DD, zD) {
        this.device.queue.writeBuffer(this.gpu, DD, this.bytes.buffer, DD, zD - DD);
        for (const wD of this.replaced) {
          const pD = Math.min(zD, wD.size);
          pD > DD && this.device.queue.writeBuffer(wD, DD, this.bytes.buffer, DD, pD - DD)
        }
      }
      markDirty(DD, zD) {
        DD &= -4, zD = zD + 3 & -4, this.holding ? (this.dirtyStarts.push(DD), this.dirtyEnds.push(zD)) : this.send(DD, zD)
      }
      grow(DD) {
        const zD = this.rG.bA,
          wD = Math.max(2 * zD, DD),
          pD = new Uint8Array(wD * or);
        pD.set(this.bytes);
        const sD = this.gpu;
        this.gpu = this.createGpu(pD.byteLength), this.bytes = pD, this.words = new Uint32Array(pD.buffer), this.rG.grow(wD), sD && (this.replaced.push(sD), this.onReplaced(sD)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, zD * or)
      }
      createGpu(DD) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: DD,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function ur(DD) {
      return Array.isArray(DD) ? new Float32Array(DD) : DD
    }

    function vr(DD, zD, wD, pD, sD) {
      const KD = Ss(sD),
        rD = Math.min(sD, pD.byteLength);
      if (KD === rD && pD.byteOffset % 4 === 0) return void DD.queue.writeBuffer(zD, wD, pD.buffer, pD.byteOffset, KD);
      const LD = new Uint8Array(KD);
      LD.set(new Uint8Array(pD.buffer, pD.byteOffset, rD)), DD.queue.writeBuffer(zD, wD, LD)
    }

    function tr(DD, zD, wD) {
      const pD = "linear",
        sD = "nearest";
      let KD = sD,
        rD = sD,
        LD = "nearest",
        cD = !zD;
      switch (DD) {
        case 11:
          KD = pD, rD = pD;
          break;
        case 3:
          KD = pD, rD = pD, LD = zD ? "linear" : "nearest";
          break;
        case 8:
          LD = zD ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          rD = pD;
          break;
        case 6:
          rD = pD, LD = zD ? "linear" : "nearest";
          break;
        case 7:
          rD = pD, cD = !0;
          break;
        case 9:
          KD = pD;
          break;
        case 10:
          KD = pD, LD = zD ? "linear" : "nearest";
          break;
        case 2:
          KD = pD, rD = pD, wD > 1 ? (LD = "linear", cD = !1) : cD = !0;
          break;
        case 12:
          KD = pD, cD = !0;
          break;
        default:
          cD = !0
      }
      return wD > 1 && !cD ? {
        magFilter: pD,
        minFilter: pD,
        mipmapFilter: "linear",
        maxAnisotropy: wD
      } : {
        magFilter: KD,
        minFilter: rD,
        mipmapFilter: LD,
        ...cD ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Fr(DD) {
      return 0 === DD ? "clamp-to-edge" : 2 === DD ? "mirror-repeat" : "repeat"
    }
    class Yr {
      constructor(DD, zD) {
        let {
          vertexArena: wD = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = DD, this.device = zD, this.buffers = new WeakMap, this.b_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = wD ? new ar(zD, (DD => {
          var zD;
          null === (zD = this.onDestroy) || void 0 === zD || zD.call(this, DD), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var DD;
        null === (DD = this.arena) || void 0 === DD || DD.flush()
      }
      endUploadFrame() {
        var DD;
        null === (DD = this.arena) || void 0 === DD || DD.vJ()
      }
      vertexBufferCreated(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wD ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(DD);
        const sD = ur(zD);
        DD.bA = sD.byteLength, this.buffers.set(DD, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: wD && null !== this.arena,
          pending: sD,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: pD
        })
      }
      vertexBufferUpdated(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        const sD = this.buffers.get(DD);
        if (!sD) return;
        const KD = ur(zD),
          rD = void 0 === pD ? KD.byteLength : Math.min(pD, KD.byteLength);
        this.update(sD, KD, wD, rD)
      }
      vertexBufferFloatsUpdated(DD, zD, wD, pD) {
        const sD = this.buffers.get(DD);
        if (!sD) return;
        const KD = wD * Float32Array.BYTES_PER_ELEMENT,
          rD = (pD - wD) * Float32Array.BYTES_PER_ELEMENT;
        sD.slot >= 0 && rD > 0 && KD + rD <= sD.size ? this.writeSlot(sD, KD, zD, zD.byteOffset + KD, rD, !1) : sD.gpu && rD > 0 && KD + rD <= sD.gpu.size ? this.device.queue.writeBuffer(sD.gpu, KD, zD.buffer, zD.byteOffset + KD, rD) : this.update(sD, zD.subarray(wD, pD), KD, rD)
      }
      indexBufferCreated(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(DD);
        const pD = function(DD) {
          if (DD instanceof Uint16Array || DD instanceof Uint32Array) return DD;
          for (let zD = 0; zD < DD.length; zD++)
            if (DD[zD] >= 65535) return new Uint32Array(DD);
          return new Uint16Array(DD)
        }(zD);
        DD.is32Bits = 4 === pD.BYTES_PER_ELEMENT, DD.bA = pD.byteLength, this.buffers.set(DD, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: pD,
          ownsPending: pD !== zD,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: wD
        })
      }
      bufferDeleted(DD) {
        const zD = this.buffers.get(DD);
        null !== zD && void 0 !== zD && zD.gpu ? (this.destroyBuffer(zD.gpu), this.gpuBuffersVersion++) : zD && zD.slot >= 0 && (this.arena.free(zD.slot, zD.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(DD)
      }
      update(DD, zD, wD, pD) {
        if (DD.slot >= 0) this.updateSlot(DD, zD, wD, pD);
        else if (DD.gpu) {
          if (wD + Ss(pD) > DD.gpu.size) {
            const zD = this.device.createBuffer({
                label: DD.label,
                size: Ss(Math.max(2 * DD.gpu.size, wD + pD)),
                usage: DD.usage | GPUBufferUsage.COPY_SRC
              }),
              sD = this.device.createCommandEncoder();
            sD.copyBufferToBuffer(DD.gpu, 0, zD, 0, DD.gpu.size), this.device.queue.submit([sD.finish()]), this.destroyBuffer(DD.gpu), this.gpuBuffersVersion++, DD.gpu = zD
          }
          vr(this.device, DD.gpu, wD, zD, pD)
        } else {
          const KD = new Uint8Array(zD.buffer, zD.byteOffset, pD),
            rD = DD.pending;
          if (rD && DD.ownsPending && wD + pD <= rD.byteLength) new Uint8Array(rD.buffer, rD.byteOffset, rD.byteLength).set(KD, wD);
          else if (rD && 0 === wD && pD === rD.byteLength && zD.byteLength === pD) DD.pending = zD, DD.ownsPending = !1;
          else {
            var sD;
            const zD = new Uint8Array(Math.max(null !== (sD = null === rD || void 0 === rD ? void 0 : rD.byteLength) && void 0 !== sD ? sD : 0, wD + pD));
            rD && zD.set(new Uint8Array(rD.buffer, rD.byteOffset, rD.byteLength)), zD.set(KD, wD), DD.pending = zD, DD.ownsPending = !0
          }
        }
      }
      updateSlot(DD, zD, wD, pD) {
        const sD = this.arena;
        wD + Ss(pD) > DD.size && (DD.size = Ss(Math.max(2 * DD.size, wD + pD)), sD.growTo(DD.slot + DD.size), this.gpuBuffersVersion++), 0 === pD ? this.writeSlot(DD, wD, qr, 0, 4, !1) : this.writeSlot(DD, wD, zD, zD.byteOffset, pD, !0)
      }
      writeSlot(DD, zD, wD, pD, sD, KD) {
        const rD = zD + (KD ? Ss(sD) : sD);
        rD > DD.slotBytes && this.moveSlot(DD, rD), this.arena.write(DD.slot + zD, wD, pD, sD, KD)
      }
      moveSlot(DD, zD) {
        const wD = this.arena,
          pD = ar.slotBytes(Math.max(zD, Math.min(2 * DD.slotBytes, DD.size))),
          sD = wD.allocate(pD, null, DD.size);
        wD.move(DD.slot, sD, DD.slotBytes), wD.free(DD.slot, DD.slotBytes), DD.slot = sD, DD.slotBytes = pD, this.gpuBuffersVersion++
      }
      cover(DD, zD) {
        const wD = this.buffers.get(DD);
        if (!wD || wD.slot < 0) return !1;
        const pD = Math.min(zD, wD.size);
        return !(pD <= wD.slotBytes) && (this.moveSlot(wD, pD), !0)
      }
      destroyBuffer(DD) {
        var zD;
        null === (zD = this.onDestroy) || void 0 === zD || zD.call(this, DD), DD.destroy()
      }
      gpuBuffer(DD) {
        const zD = this.buffers.get(DD);
        if (!zD) return null;
        if (zD.slot >= 0) return this.arena.buffer;
        if (zD.arena && zD.pending) {
          const DD = zD.pending,
            wD = this.arena;
          return zD.size = Ss(DD.byteLength), zD.slotBytes = ar.slotBytes(function(DD) {
            const zD = new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength);
            let wD = zD.length;
            if (DD.byteOffset % 4 === 0) {
              for (; wD % 4 !== 0 && 0 === zD[wD - 1];) wD--;
              if (wD % 4 === 0) {
                const zD = new Uint32Array(DD.buffer, DD.byteOffset, wD / 4);
                let pD = zD.length;
                for (; pD > 0 && 0 === zD[pD - 1];) pD--;
                wD = 4 * pD
              }
            }
            for (; wD > 0 && 0 === zD[wD - 1];) wD--;
            return wD
          }(DD)), zD.slot = wD.allocate(zD.slotBytes, DD, zD.size), zD.pending = null, wD.buffer
        }
        if (!zD.gpu && zD.pending) {
          const DD = zD.pending;
          zD.gpu = this.device.createBuffer({
            label: zD.label,
            size: Ss(DD.byteLength),
            usage: zD.usage
          }), vr(this.device, zD.gpu, 0, DD, DD.byteLength), zD.pending = null
        }
        return zD.gpu
      }
      gpuOffset(DD) {
        var zD, wD;
        const pD = null !== (zD = null === (wD = this.buffers.get(DD)) || void 0 === wD ? void 0 : wD.slot) && void 0 !== zD ? zD : -1;
        return pD < 0 ? 0 : pD
      }
      gpuEnd(DD) {
        var zD, wD;
        const pD = this.buffers.get(DD);
        return pD ? pD.slot >= 0 ? pD.slot + pD.size : null !== (zD = null === (wD = pD.gpu) || void 0 === wD ? void 0 : wD.size) && void 0 !== zD ? zD : 0 : 0
      }
      vertexInput(DD, zD, wD) {
        var pD, sD, KD, rD;
        return null !== (pD = null !== (sD = wD && this.modelInput(wD, zD)) && void 0 !== sD ? sD : null === (KD = null !== (rD = this.b_.get(DD)) && void 0 !== rD ? rD : this.batchUploads.get(DD)) || void 0 === KD ? void 0 : KD.inputs[zD]) && void 0 !== pD ? pD : null
      }
      modelInput(DD, zD) {
        const wD = this.geometrySlot(DD);
        let pD = wD.inputs.get(zD);
        if (void 0 === pD) {
          const sD = DD.vertexAttributes.find((DD => DD.kind === zD));
          pD = sD ? new uD(this.modelKey(wD, sD.data, !1), sD.offset, sD.stride, sD.components, !1, sD.glType, sD.isNormalized) : null, wD.inputs.set(zD, pD)
        }
        return pD
      }
      modelIndex(DD) {
        return DD.indexData && this.modelKey(this.geometrySlot(DD), DD.indexData, !0)
      }
      geometrySlot(DD) {
        let zD = DD.gpu[CD.g.lite];
        if (!zD) {
          const wD = new Map,
            pD = () => {
              for (const DD of wD.values()) this.bufferDeleted(DD)
            },
            sD = DD => {
              const zD = wD.get(DD);
              zD && this.vertexBufferUpdated(zD, DD)
            };
          zD = {
            keys: wD,
            inputs: new Map,
            release: pD,
            updated: sD
          }, DD.gpu[CD.g.lite] = zD
        }
        return zD
      }
      modelKey(DD, zD, wD) {
        let pD = DD.keys.get(zD);
        if (!pD) {
          if (wD) {
            const DD = {
              bA: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(DD, zD, "model-indices"), pD = DD
          } else pD = {
            bA: 0
          }, this.vertexBufferCreated(pD, zD, !1, "model-vertices");
          DD.keys.set(zD, pD)
        }
        return pD
      }
      indexFormat(DD) {
        return DD.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(DD, zD) {
        --DD.refs > 0 || (this.releaseTexture(DD), kr(DD.images), null !== zD && this.textures.delete(zD))
      }
      load(DD, zD) {
        const wD = zD.decoded = async function(DD) {
          if ("cube" === DD.kind) return async function(DD) {
            if (6 !== DD.length) throw new Error(`${DD.length} files where six faces were expected`);
            const zD = await mr(DD.map((DD => ys(DD)))),
              wD = zD[0].width;
            return mr(zD.map((async DD => {
              if (DD.width === wD && DD.height === wD) return DD;
              try {
                return await createImageBitmap(DD, {
                  ...Ns,
                  resizeWidth: wD,
                  resizeHeight: wD
                })
              } finally {
                DD.close()
              }
            })))
          }(DD.files);
          if ("data" === DD.kind && DD.data) return [await createImageBitmap(new Blob([DD.data]), Ns)];
          return [await ys(Hr(DD))]
        }(DD.source).then((DD => {
          0 === zD.refs ? kr(DD) : zD.images = DD
        }));
        this.track(zD, Hr(DD.source), wD, (() => {
          zD.wanted && !zD.failed && zD.refs > 0 && this.upload(DD, zD)
        }))
      }
      canvasUpdated(DD, zD, wD) {
        const {
          state: pD
        } = this.textureSlot(DD);
        pD.dynamicSource = {
          invertY: zD,
          premultiplied: wD
        }, pD.dynamic && this.pushDynamic(DD.source, pD)
      }
      async atlasArray(DD, zD, wD) {
        const pD = await es(this.device, DD, zD, wD);
        if (!this.atlasBindings.has(pD)) {
          const DD = (0, ir.e)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(pD, {
            view: pD.texture.createView({
              dimension: "2d-array"
            }),
            sampler: DD
          })
        }
        return pD
      }
      boundTexture(DD) {
        const zD = this.atlasBindings.get(DD);
        if (zD) return zD;
        const wD = DD;
        if (wD.released) return null;
        const pD = this.textureSlot(wD, !0),
          {
            state: sD
          } = pD;
        if (!sD.view && (sD.wanted = !0, sD.loading || sD.failed || this.upload(wD, sD), !sD.view)) return null;
        const KD = this.chosenSampler(wD, pD),
          rD = pD.bound;
        return rD && rD.view === sD.view && rD.sampler === KD ? rD : (pD.bound = {
          view: sD.view,
          sampler: KD
        }, pD.bound)
      }
      textureLoaded(DD) {
        var zD, wD;
        return null !== (zD = null === (wD = DD.gpu[CD.g.lite]) || void 0 === wD ? void 0 : wD.state.decoded) && void 0 !== zD ? zD : null
      }
      textureFailed(DD) {
        var zD;
        return !0 === (null === (zD = DD.gpu[CD.g.lite]) || void 0 === zD ? void 0 : zD.state.failed)
      }
      chosenSampler(DD, zD) {
        const {
          samplingMode: wD,
          wrapU: pD,
          wrapV: sD
        } = DD.sampler, KD = zD.state.hasMips, rD = function(DD, zD) {
          const {
            bilinear: wD,
            trilinear: pD
          } = CD.i;
          return !zD && DD !== wD || 11 !== DD && DD !== pD && DD !== wD ? 1 : 4
        }(wD, KD), LD = zD.sampler;
        if (LD && LD.samplingMode === wD && LD.hasMips === KD && LD.anisotropy === rD && LD.wrapU === pD && LD.wrapV === sD) return LD.sampler;
        const cD = this.samplerFor(wD, KD, rD, pD, sD);
        return zD.sampler = {
          samplingMode: wD,
          hasMips: KD,
          anisotropy: rD,
          wrapU: pD,
          wrapV: sD,
          sampler: cD
        }, cD
      }
      releaseTexture(DD) {
        var zD, wD;
        DD.view && (null === (wD = this.onDestroy) || void 0 === wD || wD.call(this, DD.view));
        null === (zD = DD.destroy) || void 0 === zD || zD.call(DD)
      }
      textureSlot(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = DD.gpu[CD.g.lite];
        if (wD) return wD;
        const pD = function(DD) {
          let {
            source: zD,
            sampler: wD
          } = DD;
          return "canvas" === zD.kind ? null : `${zD.kind}|${Hr(zD)}|${wD.noMipmap}|${wD.samplingMode}|${wD.invertY}`
        }(DD);
        let sD = null === pD ? void 0 : this.textures.get(pD);
        sD || (sD = {
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
        }, null !== pD && (this.textures.set(pD, sD), this.load(DD, sD), zD && this.firstBindDecodes++)), sD.refs++;
        const KD = sD,
          rD = {
            state: sD,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(KD, pD)
            }
          };
        return DD.gpu[CD.g.lite] = rD, rD
      }
      samplerFor(DD, zD, wD, pD, sD) {
        const KD = `${DD}|${zD}|${wD}|${pD}|${sD}`;
        let rD = this.samplers.get(KD);
        if (!rD) {
          const LD = {
            ...tr(DD, zD, wD),
            addressModeU: Fr(pD),
            addressModeV: Fr(sD)
          };
          rD = (0, ir.e)(this.engine, LD), this.samplers.set(KD, rD)
        }
        return rD
      }
      upload(DD, zD) {
        const {
          source: wD,
          sampler: pD
        } = DD;
        zD.hasMips = !pD.noMipmap, "canvas" === wD.kind ? this.createDynamic(wD, zD) : "cube" === wD.kind ? this.uploadCube(zD, wD.luminance) : this.uploadImage(zD, !0 === pD.invertY, wD.url)
      }
      uploadImage(DD, zD, wD) {
        const [pD] = DD.images;
        DD.images = null;
        const sD = (0, lr.b)(this.engine, pD, {
          mipMaps: DD.hasMips,
          invertY: zD,
          srgb: !1
        }).then((zD => {
          pD.close(), 0 !== DD.refs ? (DD.view = zD.view, DD.destroy = zD.texture.destroy.bind(zD.texture)) : zD.texture.destroy()
        }));
        this.track(DD, wD, sD)
      }
      track(DD, zD, wD, pD) {
        DD.loading = !0, this.pending++, wD.catch((wD => {
          DD.failed = !0, console.warn(`Lite: could not load texture ${Zs(zD)}`, wD)
        })).finally((() => {
          DD.loading = !1, this.pending--, null === pD || void 0 === pD || pD()
        }))
      }
      uploadCube(DD, zD) {
        const wD = DD.images;
        DD.images = null;
        const pD = yr(this.engine, this.device, wD, (0, CD.D)(zD), DD.hasMips);
        DD.view = pD.createView({
          dimension: "cube"
        }), DD.destroy = () => {
          pD.destroy()
        }
      }
      createDynamic(DD, zD) {
        const {
          canvas: wD
        } = DD, pD = (0, Wr.d)(this.engine, Math.max(1, wD.width), Math.max(1, wD.height), {
          mipMaps: zD.hasMips,
          srgb: !1
        });
        zD.dynamic = pD, zD.view = pD.view, zD.destroy = () => {
          pD.texture.destroy()
        }, this.pushDynamic(DD, zD)
      }
      pushDynamic(DD, zD) {
        const wD = zD.dynamicSource,
          pD = zD.dynamic,
          {
            canvas: sD
          } = DD;
        if (wD && pD && 0 !== sD.width && 0 !== sD.height) return sD.width !== pD.width || sD.height !== pD.height ? (this.releaseTexture(zD), zD.dynamic = null, zD.view = null, void this.createDynamic(DD, zD)) : void(0, Wr.e)(this.engine, pD, sD, {
          invertY: wD.invertY,
          premultiplyAlpha: wD.premultiplied
        })
      }
    }

    function Hr(DD) {
      return "cube" === DD.kind ? DD.rootUrl : "canvas" === DD.kind ? "canvas" : DD.url
    }
    const qr = new Uint8Array(4);

    function DL(DD) {
      const zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      DD._colorAttachment.storeOp = DD._targetSignature._sampleCount > 1 ? zD : "store";
      const wD = DD._renderPassDescriptor.depthStencilAttachment;
      wD && (wD.depthStoreOp = zD, wD.stencilStoreOp && (wD.stencilStoreOp = zD))
    }
    var zL = wD(37754),
      wL = wD(37808),
      pL = wD(37453),
      sL = wD(39541);
    const KL = new Float64Array([1, 1, 1]),
      rL = new Float64Array([0, 1, 0]),
      LL = new Float64Array(4),
      cL = new Float32Array(16),
      gL = new Float64Array(3),
      RL = new Float64Array(4);

    function AL(DD, zD, wD) {
      DD.fov = zD.fov, DD.near = zD.near, DD.far = zD.far, DD.renderWidth = wD.renderWidth, DD.renderHeight = wD.renderHeight, (0, pL.p)(zD.holderRotation, 0, LL, 0), (0, pL.b)(KL, 0, LL, 0, zD.holderPosition, 0, cL);
      const pD = zD.Jq;
      gL[0] = pD[0], gL[1] = pD[1], gL[2] = pD[2] + 1;
      const sD = DD.viewMatrix;
      (0, pL.i)(pD, gL, rL, sD), (0, pL.f)(sD, 0, sD), (0, pL.j)(sD, cL, 0, sD), (0, pL.f)(sD, 0, sD);
      const KD = DD.worldMatrix;
      (0, pL.f)(sD, 0, KD), DD.eye[0] = KD[12], DD.eye[1] = KD[13], DD.eye[2] = KD[14], RL[0] = DD.fov, RL[1] = DD.renderWidth / DD.renderHeight, RL[2] = DD.near, RL[3] = DD.far, (0, pL.l)(RL, DD.projectionMatrix), (0, pL.j)(sD, DD.projectionMatrix, 0, DD.viewProjectionMatrix), (0, sL.d)(DD.viewProjectionMatrix, DD.frustum)
    }

    function UL(DD, zD) {
      let wD = DD.frustumPlanes;
      wD || (wD = DD.frustumPlanes = Array.from({
        length: 6
      }, (() => new zL.e(0, 0, 0, 0))));
      for (let pD = 0; pD < 6; pD++) {
        const DD = wD[pD].normal;
        DD._x = zD[4 * pD], DD._y = zD[4 * pD + 1], DD._z = zD[4 * pD + 2], DD._isDirty = !0, wD[pD].d = zD[4 * pD + 3]
      }
    }

    function fL(DD, zD) {
      const wD = zD.clearColor;
      DD.clearColour[0] = wD.r, DD.clearColour[1] = wD.g, DD.clearColour[2] = wD.b, DD.clearColour[3] = wD.a;
      const pD = zD.ambientColor;
      DD.ambientColour[0] = pD.r, DD.ambientColour[1] = pD.g, DD.ambientColour[2] = pD.b, DD.animationRatio = zD.animationRatio, DD.frameId = zD.frameId, DD.version++
    }

    function IL(DD) {
      const zD = DD.model.view;
      return zD.animTick = (0, wL.e)(), zD.timeMs = performance.now(), fL(zD, DD.oB), DD.model.update(zD.frameId), zD
    }

    function BL(DD) {
      const zD = DD.oB,
        {
          view: wD,
          Mq: pD
        } = DD.model;
      return AL(wD, pD, zD.iI()), zD.onBeforeRenderObservable.notifyObservers(zD), UL(zD, wD.frustum), zD.onBeforeCameraRenderObservable.notifyObservers(zD.activeCamera), IL(DD)
    }
    var GL = wD(37425),
      hL = wD(37529),
      nL = wD(37796);

    function ML(DD) {
      var zD, wD;
      const pD = (0, VD.db)(DD);
      if (!pD || pD.diffuseTexture && (0, nL.j)(DD)) return null;
      const sD = null === (zD = (0, VD.y)(pD, QD.j.name)) || void 0 === zD ? void 0 : zD.state,
        KD = null === (wD = (0, VD.y)(pD, HK.d.name)) || void 0 === wD ? void 0 : wD.state,
        rD = new Float32Array(16);
      return function(DD, zD, wD, pD) {
        var sD, KD;
        const rD = fp;
        pD.set(DD.diffuseColor, rD.diffuse), pD[rD.diffuse + 3] = DD.alpha, pD.set(DD.ambientColor, rD.ambientAndCutoff), pD[rD.ambientAndCutoff + 3] = DD.alphaCutOff, pD.set(DD.emissiveColor, rD.emissiveAndLevel), pD[rD.emissiveAndLevel + 3] = null !== (sD = null === (KD = DD.diffuseTexture) || void 0 === KD ? void 0 : KD.level) && void 0 !== sD ? sD : 1, null !== zD && void 0 !== zD && zD.animDataPerTex ? (pD[rD.anim + 1] = wL.b, pD[rD.anim + 2] = zD.animDataPerTex.length / 3 - 1) : wD && (pD[rD.anim + 1] = wD.numAnimStates, pD[rD.anim + 2] = wD.ticksPerAnimState)
      }(pD, sD, KD, rD), {
        model: pD,
        atlas: sD,
        texture: sD ? "atlas" : pD.diffuseTexture ? "single" : "none",
        animated: sD ? !!sD.animDataPerTex : !!KD,
        liquid: (0, nL.n)(DD),
        customRenderMat: (0, nL.j)(DD),
        uniformData: rD
      }
    }
    var OL = wD(2859);
    class JL {
      constructor(DD) {
        this.units = DD, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var DD;
        this.buffer.destroy(), null === (DD = this.twin) || void 0 === DD || DD.destroy()
      }
    }
    class EL {
      constructor(DD, zD) {
        this.arena = DD, this.rG = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.rG = new er(zD);
        const wD = new JL(zD);
        wD.buffer = this.createBuffer(wD, !1), this.backings.push(wD), this.refresh()
      }
      get bA() {
        return this.rG.bA
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
        let DD = 0;
        for (const zD of this.backings) DD += zD.units * (this.arena.unitBytes + (zD.twin ? this.arena.twinUnitBytes : 0));
        return DD
      }
      holds(DD) {
        return DD.start + DD.length <= this.usable
      }
      lost(DD) {
        return this.dropped || DD.start + DD.length > this.bA
      }
      write(DD, zD) {
        const {
          device: wD,
          unitBytes: pD
        } = this.arena;
        for (const sD of this.backings) {
          const KD = (sD.units - DD.start) * pD;
          KD > 0 && wD.queue.writeBuffer(sD.buffer, DD.start * pD, zD, 0, Math.min(zD.byteLength, KD))
        }
      }
      writeLight(DD, zD) {
        const {
          device: wD,
          twinUnitBytes: pD,
          verticesPerUnit: sD
        } = this.arena, {
          light: KD,
          count: rD
        } = this.arena.twinLight(zD, Math.min(zD.length, DD.length * sD));
        for (const LD of this.backings) {
          LD.twin || (LD.twin = this.createBuffer(LD, !0));
          const zD = (LD.units - DD.start) * sD;
          zD > 0 && wD.queue.writeBuffer(LD.twin, DD.start * pD, KD, 0, Math.min(rD, zD))
        }
      }
      grow(DD) {
        this.arena.assertNotDrawing();
        const {
          device: zD,
          unitBytes: wD,
          label: pD
        } = this.arena, sD = this.backings[this.backings.length - 1], KD = new JL(DD), rD = zD.createCommandEncoder({
          label: `${pD}-grow`
        });
        KD.buffer = this.createBuffer(KD, !1), rD.copyBufferToBuffer(sD.buffer, 0, KD.buffer, 0, sD.units * wD), sD.twin && (KD.twin = this.createBuffer(KD, !0), rD.copyBufferToBuffer(sD.twin, 0, KD.twin, 0, sD.units * this.arena.twinUnitBytes)), zD.queue.submit([rD.finish()]), this.backings.push(KD), this.rG.grow(DD)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const DD of this.backings) DD.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(DD, zD) {
        const {
          device: wD,
          unitBytes: pD,
          twinUnitBytes: sD,
          usage: KD,
          label: rD
        } = this.arena;
        wD.pushErrorScope("out-of-memory");
        const LD = wD.createBuffer({
          label: zD ? `${rD}-light` : rD,
          size: DD.units * (zD ? sD : pD),
          usage: (zD ? this.arena.twinUsage : KD) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, wD.popErrorScope().then((wD => {
          this.arena.awaitingVerdict--, this.settle(DD, zD, !wD, !0)
        }), (wD => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${rD} buffer, taken as failed: ${String(wD)}`), this.settle(DD, zD, !1, !1)
        })), LD
      }
      settle(DD, zD, wD, pD) {
        const sD = this.backings.indexOf(DD);
        if (!(this.dropped || sD < 0)) {
          if (!wD) {
            if (pD && this.arena.ranOutOfMemory(DD.units, DD.units * (zD ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === sD) return void this.drop();
            for (const DD of this.backings.splice(sD)) DD.destroy();
            return this.rG.truncate(this.backings[sD - 1].units), this.growable = !1, void this.promote()
          }
          zD ? DD.twinReady = !0 : (DD.bufferReady = !0, this.arena.allocatedBuffer(DD.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: DD
        } = this;
        let zD = 0;
        for (; zD + 1 < DD.length && DD[zD].ready && DD[zD + 1].ready;) zD++;
        for (const wD of DD.splice(0, zD)) wD.destroy();
        this.refresh()
      }
      refresh() {
        const DD = this.backings[0];
        this.buffer = DD.buffer, this.twin = DD.twinReady ? DD.twin : null, this.usable = !this.dropped && DD.bufferReady ? DD.units : 0
      }
    }
    class QL {
      constructor(DD, zD, wD, pD) {
        let {
          verticesPerUnit: sD = 1,
          twinUsage: KD = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = DD, this.unitBytes = zD, this.usage = wD, this.label = pD, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, gz.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), zD % 4 !== 0) throw new Error(`${pD}: ${zD}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = sD, this.twinUsage = KD, this.twinValueBytes = sD > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * sD
      }
      twinLight(DD, zD) {
        if (4 === this.twinValueBytes) return this.widened.length < zD && (this.widened = new Float32Array(Math.max(zD, 2 * this.widened.length))), this.widened.set(DD.subarray(0, zD)), {
          light: this.widened,
          count: zD
        };
        const wD = zD % this.verticesPerUnit;
        if (0 === wD) return {
          light: DD,
          count: zD
        };
        const pD = zD - wD + this.verticesPerUnit;
        return this.padded.length < pD && (this.padded = new Uint16Array(Math.max(pD, 2 * this.padded.length))), this.padded.set(DD.subarray(0, zD)), this.padded.fill(0, zD, pD), {
          light: this.padded,
          count: pD
        }
      }
      allocate(DD) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), DD > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const sD of this.pages) {
          const zD = sD.rG.allocate(DD);
          if (zD >= 0) return {
            page: sD,
            start: zD,
            length: DD
          }
        }
        const zD = this.pages[this.pages.length - 1];
        if (null !== zD && void 0 !== zD && zD.canGrow) {
          const wD = Math.min(this.ceiling, Math.max(2 * zD.bA, zD.bA + DD));
          if (wD - zD.bA >= DD) return zD.grow(wD), {
            page: zD,
            start: zD.rG.allocate(DD),
            length: DD
          }
        }
        zD && zD !== this.pages[0] && 0 === zD.rG.used && zD.drop();
        const wD = Math.floor(1048576 / this.unitBytes),
          pD = new EL(this, Math.max(DD, Math.min(this.ceiling, wD)));
        return this.pages.push(pD), {
          page: pD,
          start: pD.rG.allocate(DD),
          length: DD
        }
      }
      free(DD) {
        this.assertNotDrawing();
        const {
          page: zD
        } = DD;
        zD.rG.free(DD.start, DD.length), 0 === zD.rG.used && zD !== this.pages[0] && zD !== this.pages[this.pages.length - 1] && zD.drop()
      }
      remove(DD) {
        const zD = this.pages.indexOf(DD);
        zD >= 0 && this.pages.splice(zD, 1)
      }
      ranOutOfMemory(DD, zD) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${zD}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, DD), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, DD) / 2));
        const wD = performance.now();
        wD >= this.shortageUntil && (this.forgetFailedAt = wD + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = wD + 1e3)
      }
      allocatedBuffer(DD) {
        DD >= this.failed && (this.failed = 1 / 0);
        const zD = Math.min(2 * DD, Math.floor((DD + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, zD))
      }
      stats() {
        let DD = 0,
          zD = 0,
          wD = 0,
          pD = 0;
        for (const sD of this.pages) DD += sD.bA, zD += sD.rG.used, wD += sD.hasTwin ? sD.bA * this.twinUnitBytes : 0, pD += sD.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: DD * this.unitBytes,
          usedBytes: zD * this.unitBytes,
          twinBytes: wD,
          allocatedBytes: pD
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: DD,
          maxStorageBufferBindingSize: zD
        } = this.device.limits;
        let wD = Math.floor(Math.min(67108864, DD) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (wD = Math.min(wD, Math.floor(zD / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (wD = Math.min(wD, Math.floor(zD / this.twinUnitBytes))), wD
      }
    }
    const XL = 16383;

    function VL(DD, zD, wD, pD, sD) {
      let KD = 0;
      for (let rD = wD; rD < pD; rD += XL) DD.drawIndexed(6 * Math.min(XL, pD - rD), 1, 0, zD + 4 * rD, sD), KD++;
      return KD
    }
    class PL {
      constructor(DD, zD) {
        this.recordsGroup = zD, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const wD = Xz.c.strideWithoutAtlas;
        this.vertexArena = new QL(DD, wD, GPUBufferUsage.VERTEX, `terrain-vertices-${wD}`), this.quadArena = new QL(DD, hL.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const pD = (0, Vz.h)(new Uint16Array(98298), XL);
        this.quadPattern = DD.createBuffer({
          label: "terrain-quad-pattern",
          size: pD.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), DD.queue.writeBuffer(this.quadPattern, 0, pD)
      }
      set(DD, zD) {
        const wD = zD.packedVertices,
          pD = wD ? this.quadArena.allocate(DD.faceCount) : this.vertexArena.allocate(DD.vertexCount);
        if (!pD) return !1;
        DD.vertices = pD;
        const sD = wD ? new Uint8Array(wD.buffer, wD.byteOffset, wD.byteLength) : new Uint8Array(zD.vertices);
        return pD.page.write(pD, sD), !0
      }
      setLight(DD, zD) {
        const {
          vertices: wD
        } = DD;
        wD && 0 !== zD.length && wD.page.live && (zD.length < DD.vertexCount ? wD.page.arena.warnOnce("shortLight", `a part's ${zD.length} light values are fewer than its ${DD.vertexCount} vertices, so its light is left as it was`) : (wD.page.writeLight(wD, zD), DD.lit = !0))
      }
      lightFullSky(DD, zD) {
        this.fullSky.length < zD && (this.fullSky = new Uint16Array(Math.max(zD, 4096)).fill(OL.g));
        for (const wD of DD) {
          const DD = wD.vertices;
          DD.page.live && (DD.page.writeLight(DD, this.fullSky), wD.lit = !0)
        }
      }
      backed(DD) {
        const {
          vertices: zD
        } = DD;
        return !!zD && zD.page.holds(zD)
      }
      lost(DD) {
        const {
          vertices: zD
        } = DD;
        return !!zD && zD.page.lost(zD)
      }
      release(DD) {
        DD.vertices && DD.vertices.page.arena.free(DD.vertices), DD.vertices = null, DD.lit = !1
      }
      setDrawing(DD) {
        this.forgetBound()
      }
      draw(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zD.faceCount;
        const KD = zD.vertices,
          rD = KD.page,
          LD = wD ? rD.twin : null;
        if (!rD.holds(KD) || wD && !LD) return 0;
        const {
          verticesPerUnit: cD
        } = rD.arena;
        let gD = KD.start * cD;
        this.boundPattern || (DD.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const RD = pD + sD;
        if (cD > 1) return rD.buffer === this.boundRecords && LD === this.boundRecordsLight || (DD.setBindGroup(1, this.recordsGroup(rD.buffer, LD)), this.boundRecords = rD.buffer, this.boundRecordsLight = LD), VL(DD, gD, pD, RD, zD.slot);
        rD.buffer !== this.boundVertices && (DD.setVertexBuffer(0, rD.buffer), this.boundVertices = rD.buffer), LD && LD !== this.boundLight && (DD.setVertexBuffer(1, LD), this.boundLight = LD);
        const AD = zD.faceCount;
        return RD <= AD ? VL(DD, gD, pD, RD, zD.slot) : VL(DD, gD, pD, AD, zD.slot) + VL(DD, gD, Math.max(pD, AD) - AD, RD - AD, zD.slot)
      }
      get buffersAwaitingVerdict() {
        let DD = 0;
        for (const zD of this.arenas()) DD += zD.awaitingVerdict;
        return DD
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class CL {
      constructor(DD, zD, wD, pD) {
        this.device = DD, this.splitBefore = zD, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = DD.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const sD = DD.createShaderModule({
          label: "scene-depth-copy",
          code: (KD = wD._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${KD?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var KD;
        DD.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: sD,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: sD,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((DD => {
          this.pipeline = DD, this.building = !1
        }), (DD => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", DD)
        })), wD._executeWithTransmission = () => this.execute(wD, pD)
      }
      get compiling() {
        return this.building
      }
      setWanted(DD) {
        this.wanted = DD
      }
      setPlanes(DD, zD) {
        DD === this.near && zD === this.far || (this.near = DD, this.far = zD, this.unproject[0] = DD / (zD - DD), this.unproject[1] = zD * DD / (zD - DD), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var DD, zD;
        return null !== (DD = null === (zD = this.copy) || void 0 === zD ? void 0 : zD.view) && void 0 !== DD ? DD : null
      }
      execute(DD, zD) {
        var wD;
        null === (wD = this.retired) || void 0 === wD || wD.destroy(), this.retired = null;
        const pD = Dz(zD),
          sD = DD._transparentBindings,
          KD = this.wanted && this.pipeline ? this.splitIndex(sD) : -1,
          rD = DD._colorAttachment,
          LD = rD.resolveTarget;
        KD >= 0 && (rD.resolveTarget = void 0, DL(DD, !0));
        let cD = pD.beginRenderPass(DD._renderPassDescriptor);
        cD.setBindGroup(0, DD._sceneBG);
        let gD = this.drawList(cD, zD, DD._opaqueBindings, 0, DD._opaqueBindings.length);
        if (gD += this.drawList(cD, zD, DD._directBindings, 0, DD._directBindings.length), gD += this.drawList(cD, zD, sD, 0, KD >= 0 ? KD : sD.length), cD.end(), KD < 0) return gD;
        DL(DD);
        const RD = DD._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: AD,
            stencilLoadOp: UD
          } = RD,
          fD = rD.loadOp;
        rD.resolveTarget = LD;
        try {
          this.copyDepth(pD, DD), rD.loadOp = "load", RD.depthLoadOp = "load", UD && (RD.stencilLoadOp = "load"), cD = pD.beginRenderPass(DD._renderPassDescriptor), cD.setBindGroup(0, DD._sceneBG), gD += this.drawList(cD, zD, sD, KD, sD.length), cD.end()
        } finally {
          rD.loadOp = fD, RD.depthLoadOp = AD, RD.stencilLoadOp = UD
        }
        return gD
      }
      splitIndex(DD) {
        for (let zD = 0; zD < DD.length; zD++)
          if (DD[zD].renderable === this.splitBefore) return zD;
        return -1
      }
      drawList(DD, zD, wD, pD, sD) {
        let KD = null,
          rD = 0;
        for (let LD = pD; LD < sD; LD++) {
          const pD = wD[LD],
            sD = pD.renderable.mesh;
          sD && !1 === sD.visible || (pD.pipeline !== KD && (DD.setPipeline(pD.pipeline), KD = pD.pipeline), rD += pD.draw(DD, zD))
        }
        return rD
      }
      copyDepth(DD, zD) {
        var wD, pD;
        const sD = (null !== (wD = zD._config.depth) && void 0 !== wD ? wD : zD._config.rt)._depthTexture,
          KD = (null === (pD = this.copy) || void 0 === pD ? void 0 : pD.source) === sD ? this.copy : this.remakeCopy(sD),
          rD = DD.beginRenderPass(KD.pass);
        rD.setPipeline(this.pipeline), rD.setBindGroup(0, KD.bindGroup), rD.draw(3), rD.end()
      }
      remakeCopy(DD) {
        var zD, wD;
        this.retired = null !== (zD = null === (wD = this.copy) || void 0 === wD ? void 0 : wD.texture) && void 0 !== zD ? zD : null;
        const pD = this.device.createTexture({
            label: "scene-depth",
            size: [DD.width, DD.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          sD = pD.createView(),
          KD = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: DD.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          rD = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: sD,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: DD,
          texture: pD,
          view: sD,
          bindGroup: KD,
          pass: rD
        }, this.copy
      }
    }
    const xL = "rgba8unorm";

    function TL(DD) {
      return DD ? 15 : 1
    }
    class bL {
      constructor(DD, zD, wD, pD) {
        this.device = DD, this.terrain = pD, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = zD._targetSignature._sampleCount > 1, this.cameraBuffer = DD.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = DD.createBindGroupLayout({
          label: "sun-shadow-mask",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "unfilterable-float"
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
        const sD = DD.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = DD.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: sD,
          entries: []
        });
        const KD = DD.createShaderModule({
          label: "sun-shadow-mask",
          code: (rD = this.edge, `${(0,Pz.A)()}${Zw({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${rD?Cw:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${TL(rD)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${rD?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var rD;
        DD.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: DD.createPipelineLayout({
            bindGroupLayouts: [this.layout, sD, sD, eK(DD, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: KD,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: KD,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((DD => {
          this.pipeline = DD, this.building = !1
        }), (DD => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", DD)
        }));
        const LD = zD._executeWithTransmission;
        zD._executeWithTransmission = DD => this.execute(zD, wD, (() => LD ? LD(DD) : function(DD, zD) {
          const wD = Dz(zD).beginRenderPass(DD._renderPassDescriptor);
          wD.setBindGroup(0, DD._sceneBG);
          let pD = jL(wD, zD, DD._opaqueBindings);
          return pD += jL(wD, zD, DD._directBindings), pD += jL(wD, zD, DD._transparentBindings), wD.end(), pD
        }(zD, wD)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var DD, zD;
        return null !== (DD = null === (zD = this.targets) || void 0 === zD ? void 0 : zD.maskView) && void 0 !== DD ? DD : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(DD) {
        ! function(DD, zD) {
          const wD = DD.worldMatrix,
            pD = DD.projectionMatrix,
            sD = 1 / pD[0],
            KD = 1 / pD[5],
            rD = DD.far * DD.near / (DD.far - DD.near);
          zD[0] = DD.eye[0], zD[1] = DD.eye[1], zD[2] = DD.eye[2], zD[3] = 2 ** -23 / rD, zD[4] = wD[0] * sD, zD[5] = wD[1] * sD, zD[6] = wD[2] * sD, zD[7] = rD, zD[8] = wD[4] * KD, zD[9] = wD[5] * KD, zD[10] = wD[6] * KD, zD[11] = DD.near / (DD.far - DD.near), zD[12] = wD[8], zD[13] = wD[9], zD[14] = wD[10], zD[15] = 0
        }(DD, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(DD, zD, wD) {
        if (this.retire(), !this.terrain.readsMask) return wD();
        const pD = this.targetsFor(DD),
          sD = Dz(zD),
          KD = DD._renderPassDescriptor.depthStencilAttachment;
        this.edge || (pD.prepass.depthStencilAttachment.view = KD.view);
        const rD = this.terrain.drawPrepass(sD, pD.prepass, DD._sceneBG);
        if (0 === rD) return wD();
        if (this.trace(sD, pD), this.edge) return rD + 1 + wD();
        const {
          depthLoadOp: LD,
          stencilLoadOp: cD
        } = KD;
        KD.depthLoadOp = "load", cD && (KD.stencilLoadOp = "load");
        try {
          return rD + 1 + wD()
        } finally {
          KD.depthLoadOp = LD, KD.stencilLoadOp = cD
        }
      }
      trace(DD, zD) {
        const wD = this.terrain.sunShadowGroup(),
          pD = DD.beginRenderPass(zD.trace);
        this.pipeline && wD && (pD.setPipeline(this.pipeline), pD.setBindGroup(0, zD.bindGroup), pD.setBindGroup(1, this.empty), pD.setBindGroup(2, this.empty), pD.setBindGroup(3, wD), pD.draw(3)), pD.end()
      }
      retire() {
        const DD = this.retired;
        var zD;
        DD && (DD.mask.destroy(), DD.normals.destroy(), null === (zD = DD.depth) || void 0 === zD || zD.destroy(), this.retired = null)
      }
      targetsFor(DD) {
        var zD, wD;
        const pD = (null !== (zD = DD._config.depth) && void 0 !== zD ? zD : DD._config.rt)._depthTexture;
        return (null === (wD = this.targets) || void 0 === wD ? void 0 : wD.source) === pD ? this.targets : this.remake(DD, pD)
      }
      remake(DD, zD) {
        var wD;
        this.retired = this.targets;
        const pD = [zD.width, zD.height],
          sD = this.device.createTexture({
            label: "sun-shadow-mask",
            size: pD,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          KD = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: pD,
            format: xL,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          rD = null !== (wD = DD._targetSignature._depthStencilFormat) && void 0 !== wD ? wD : zD.format,
          LD = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: pD,
            format: rD,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          cD = DD._renderPassDescriptor.depthStencilAttachment,
          gD = rD.includes("stencil"),
          RD = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: KD.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: LD ? LD.createView() : cD.view,
              depthClearValue: cD.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...gD ? {
                stencilClearValue: cD.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          AD = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== LD && void 0 !== LD ? LD : zD).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: KD.createView()
            }]
          }),
          UD = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: sD.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [TL(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: zD,
          mask: sD,
          maskView: sD.createView(),
          normals: KD,
          depth: LD,
          bindGroup: AD,
          prepass: RD,
          trace: UD
        }, this.targets
      }
    }

    function jL(DD, zD, wD) {
      let pD = null,
        sD = 0;
      for (const KD of wD) {
        const wD = KD.renderable.mesh;
        wD && !1 === wD.visible || (KD.pipeline !== pD && (DD.setPipeline(KD.pipeline), pD = KD.pipeline), sD += KD.draw(DD, zD))
      }
      return sD
    }
    const dL = 6e4,
      SL = {
        status: "ok"
      },
      iL = {
        status: "skipped"
      };
    async function lL(DD, zD) {
      const {
        isCancelled: wD
      } = DD;
      if (wD()) return {
        status: "sw"
      };
      const {
        target: pD
      } = zD;
      if (!pD) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const sD = [],
        KD = Promise.all(Array.from(new Set(DD.materials), (async wD => {
          sD.push(await async function(DD, zD, wD, pD) {
            const sD = {
              lighting: DD.lighting,
              dirLightCount: Math.min(DD.dirLightCount, 4),
              KI: DD.runtime
            };
            try {
              const KD = zD.material(pD);
              return KD && Rp(zD.programKey(KD, !1, sD)) ? (await KD.ready, DD.isCancelled() ? SL : KD.bindGroupLayout ? await async function(DD, zD, wD, pD) {
                const {
                  device: sD
                } = DD;
                let KD, rD;
                sD.pushErrorScope("validation");
                try {
                  KD = DD.pipelineBuild(zD, wD, pD)
                } finally {
                  rD = sD.popErrorScope().catch((() => null))
                }
                const [LD, cD] = await Promise.all([rD, KD.built.then((() => null), (DD => null !== DD && void 0 !== DD ? DD : new Error("pipeline failed")))]);
                if (!LD && !cD) return SL;
                const gD = await WL(KD.module),
                  RD = gD.length > 0 ? gD.map((DD => `${KD.name} ${DD.lineNum}:${DD.linePos}: ${DD.message}`)).join("\n") : `${KD.name}: ${NL(null!==cD&&void 0!==cD?cD:LD)}`;
                return {
                  status: "failed",
                  material: zD.model.name,
                  message: RD
                }
              }(zD, KD, zD.programKey(KD, "none" !== KD.texture, sD), wD): (console.warn(`Shader pack: skipped the compile check for "${pD.name}", whose textures failed to load`), iL)) : SL
            } catch (KD) {
              return {
                status: "failed",
                material: pD.name,
                message: NL(KD)
              }
            }
          }(DD, zD, pD, wD))
        }))),
        rD = function(DD, zD) {
          let wD, pD, sD = !1;
          const KD = new Promise((KD => {
            var rD;
            wD = setTimeout((() => {
              KD("timeout")
            }), null !== (rD = zD.timeoutMs) && void 0 !== rD ? rD : dL), pD = setInterval((() => {
              zD.isCancelled() && KD("sw")
            }), 50), DD.lost.then((() => {
              sD = !0, KD("lost")
            }))
          }));
          return {
            signal: KD,
            lost: () => sD,
            dispose: () => {
              clearTimeout(wD), clearInterval(pD)
            }
          }
        }(zD.device, DD);
      let LD;
      try {
        LD = await Promise.race([KD.then((() => "done")), rD.signal])
      } finally {
        rD.dispose()
      }
      if ("sw" === LD || wD()) return {
        status: "sw"
      };
      const cD = sD.find((DD => "failed" === DD.status));
      return cD && "lost" !== LD && !rD.lost() && await new Promise((DD => {
        setTimeout(DD, 0)
      })), "lost" === LD || rD.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : cD ? {
        status: "failed",
        failure: {
          material: cD.material,
          message: cD.message
        }
      } : "timeout" === LD ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(gD=DD.timeoutMs)&&void 0!==gD?gD:dL)/1e3} s`), {
        status: "skipped"
      }) : sD.some((DD => "skipped" === DD.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var gD
    }
    async function WL(DD) {
      if (!DD) return [];
      try {
        return (await DD.getCompilationInfo()).messages.filter((DD => "error" === DD.type))
      } catch {
        return []
      }
    }

    function NL(DD) {
      var zD;
      return null !== (zD = null === DD || void 0 === DD ? void 0 : DD.message) && void 0 !== zD ? zD : String(DD)
    }

    function ZL(DD, zD, wD, pD) {
      Rp(DD) ? WL(wD).then((DD => {
        const [wD] = DD;
        Ys("terrain", zD, pD, wD ? `${wD.lineNum}:${wD.linePos} error: ${wD.message}` : null)
      })) : Ys("terrain", zD, pD)
    }
    var yL = wD(37535),
      kL = wD(37550),
      mL = wD(37558),
      eL = wD(2851);

    function oL(DD, zD, wD, pD, sD) {
      const KD = Math.hypot(wD[0], wD[1], wD[2]);
      if (!(KD > 0)) return;
      const rD = [wD[0] / KD, wD[1] / KD, wD[2] / KD],
        LD = [Math.floor(zD[0]), Math.floor(zD[1]), Math.floor(zD[2])],
        cD = [0, 0, 0],
        gD = [1 / 0, 1 / 0, 1 / 0],
        RD = [1 / 0, 1 / 0, 1 / 0];
      for (let fD = 0; fD < 3; fD++) rD[fD] > 0 ? (cD[fD] = 1, gD[fD] = (LD[fD] + 1 - zD[fD]) / rD[fD], RD[fD] = 1 / rD[fD]) : rD[fD] < 0 && (cD[fD] = -1, gD[fD] = (LD[fD] - zD[fD]) / rD[fD], RD[fD] = -1 / rD[fD]);
      const {
        CI: AD
      } = DD;
      let UD = DD.sF(LD[0], LD[1], LD[2]);
      for (;;) {
        const zD = gD[0] < gD[1] ? gD[0] < gD[2] ? 0 : 2 : gD[1] < gD[2] ? 1 : 2;
        if (gD[zD] > pD) return;
        const wD = cD[zD] > 0 ? LD[zD] + 1 : LD[zD];
        LD[zD] += cD[zD], gD[zD] += RD[zD];
        const KD = DD.sF(LD[0], LD[1], LD[2]),
          rD = KD !== UD && !(DD.opaque[UD] && DD.opaque[KD]);
        if (rD) {
          const pD = [LD[0], LD[1], LD[2]];
          pD[zD] = wD;
          const KD = Math.floor(pD[0] / AD),
            rD = Math.floor(pD[1] / AD),
            cD = Math.floor(pD[2] / AD);
          !DD.isDrawn(KD, rD, cD) && DD.hasParts(KD, rD, cD) && sD.add(`${KD},${rD},${cD}`)
        }
        if (rD && DD.occluders[KD]) return;
        UD = KD
      }
    }

    function aL(DD, zD) {
      return DD.group - zD.group || DD.nearest - zD.nearest
    }
    class uL {
      constructor(DD, zD) {
        this.device = DD, this.GJ = zD, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var DD;
        const zD = null !== (DD = this.free.pop()) && void 0 !== DD ? DD : this.next++;
        if (8 * zD >= this.data.length) {
          const DD = new Float32Array(2 * this.data.length);
          DD.set(this.data), this.data = DD, this.words = new Uint32Array(DD.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.GJ()
        }
        return zD
      }
      release(DD) {
        this.free.push(DD)
      }
      set(DD, zD, wD, pD, sD) {
        const KD = 8 * DD + Op;
        this.data[KD] = zD, this.data[KD + 1] = wD, this.data[KD + 2] = pD, this.setVisibility(DD, sD)
      }
      setVisibility(DD, zD) {
        this.data[8 * DD + Jp] = zD, this.markDirty(DD, DD)
      }
      setFaces(DD, zD, wD) {
        const pD = 8 * DD;
        this.words[pD + Ep] = zD, this.words[pD + Qp] = wD, this.markDirty(DD, DD)
      }
      markDirty(DD, zD) {
        this.dirtyMin = Math.min(this.dirtyMin, DD), this.dirtyMax = Math.max(this.dirtyMax, zD)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const vL = Mp,
      tL = !0;
    const FL = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: vL.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      YL = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class HL {
      constructor(DD) {
        this.device = DD, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Up), this.dirLightUniforms = this.frameUniforms.subarray(Ap.dirLights, Ap.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, gz.c)(), this.faceGroups = !0, this.visibilityGraph = tL, this.visCull = tL, this.visCheck = !1, this.visCullMinDistance = mL.h, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new wc, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.KI = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new PL(DD, ((DD, zD) => this.recordsGroup(DD, zD))), this.slots = new uL(DD, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = zz(DD), this.frameLayout = DD.createBindGroupLayout({
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
        }), this.frameBuffer = DD.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = DD.createSampler({
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
          bind: (DD, zD) => this.createBinding(this.opaqueRenderable, zD, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (DD, zD) => this.createBinding(this.transparentRenderable, zD, !0)
        }
      }
      installSceneDepth(DD, zD) {
        this.sceneDepth = new CL(this.device, this.transparentRenderable, DD, zD)
      }
      createFrameBindGroup() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== DD && void 0 !== DD ? DD : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== zD && void 0 !== zD ? zD : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(DD, zD) {
        const wD = null !== zD && void 0 !== zD ? zD : DD;
        let pD = this.recordsGroups.get(wD);
        return pD || (pD = this.createFrameBindGroup(DD, zD), this.recordsGroups.set(wD, pD)), pD
      }
      setChunkMesh(DD, zD, wD) {
        var pD;
        let sD = this.chunks.get(DD);
        sD ? this.geometry.release(sD) : (sD = {
          mesh: DD,
          slot: this.slots.allocate(),
          origin: [wD[0], wD[1], wD[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: DD.visibility,
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
        }, this.chunks.set(DD, sD), this.writeSlot(sD)), sD.material = DD.material ? this.materialFor(DD.material) : null, sD.packed = !!zD.packedVertices, sD.vertexCount = (0, hL.e)(zD), sD.faceCount = sD.vertexCount / 4;
        const KD = null !== (pD = zD.faceGroups) && void 0 !== pD ? pD : null;
        if (sD.faceGroups = KD, KD) {
          const DD = yL.k;
          sD.planePX = KD[DD], sD.planeNX = KD[DD + 1], sD.planePY = KD[DD + 2], sD.planeNY = KD[DD + 3], sD.planePZ = KD[DD + 4], sD.planeNZ = KD[DD + 5]
        }
        this.drawWhole(sD), 0 !== sD.faceCount && (this.geometry.set(sD, zD) ? (sD.packed && this.slots.setFaces(sD.slot, sD.vertices.start + sD.faceCount, sD.faceCount), zD.fI && this.setChunkMeshLight(DD, zD.fI)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${sD.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(DD, zD) {
        const wD = this.chunks.get(DD);
        wD && this.geometry.setLight(wD, zD)
      }
      drawStats() {
        let DD = this.transparent.length;
        for (const zD of this.opaqueBatches) DD += zD.meshes.length;
        return {
          drawn: DD,
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
      removeChunkMesh(DD) {
        const zD = this.chunks.get(DD);
        zD && (this.geometry.release(zD), this.slots.release(zD.slot), this.chunks.delete(DD))
      }
      remeshLost(DD, zD) {
        this.geometry.release(zD), zD.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** zD.lostRemeshes++);
        const wD = DD.KU,
          [pD, sD, KD] = wD.OsD(zD.origin[0], zD.origin[1], zD.origin[2]),
          rD = wD.EB.QB(pD, sD, KD);
        rD && (rD.OB = !0, rD.VB = !0, wD.JB(rD, !1))
      }
      chooseFaceRanges(DD, zD, wD) {
        const pD = this.faceRanges;
        DD.faceMask = wD, DD.rangeCount = (0, kL.m)(zD, wD, pD), DD.first0 = pD[0], DD.count0 = pD[1], DD.first1 = pD[2], DD.count1 = pD[3]
      }
      drawWhole(DD) {
        DD.faceMask = -1, DD.faceEpoch = -1, DD.rangeCount = 1, DD.first0 = 0, DD.count0 = DD.faceCount
      }
      writeSlot(DD) {
        const [zD, wD, pD] = this.originOffset;
        this.slots.set(DD.slot, DD.origin[0] - zD, DD.origin[1] - wD, DD.origin[2] - pD, DD.visibility)
      }
      materialFor(DD) {
        const zD = this.materials.get(DD);
        if (zD) return zD;
        const wD = ML(DD);
        if (!wD) return this.warnOnce(`material:${DD.name}`, `Lite terrain cannot draw material "${DD.name}"; its chunks are skipped.`), null;
        const {
          model: pD,
          atlas: sD,
          texture: KD,
          animated: rD,
          uniformData: LD
        } = wD, cD = {
          id: this.materials.size,
          model: pD,
          texture: KD,
          animated: rD,
          uniformData: LD,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${DD.name}`,
            size: LD.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: wD.liquid,
          customRenderMat: wD.customRenderMat,
          atlasCount: 0,
          B3: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(DD, cD), this.device.queue.writeBuffer(cD.uniformBuffer, 0, LD), cD.ready = this.createMaterialBindGroup(cD, sD).catch((zD => {
          console.error(`Lite terrain failed to load the textures of material "${DD.name}"`, zD)
        })), cD
      }
      materialLayout(DD) {
        const zD = function(DD) {
            const zD = ["uniforms"];
            if ("atlas" === DD.texture) {
              DD.animated && zD.push("animData"), zD.push("sampler");
              for (let wD = 0; wD < DD.atlasCount; wD++) zD.push("textureArray")
            } else "single" === DD.texture && zD.push("sampler", "texture");
            return zD
          }(DD),
          wD = zD.join(",");
        let pD = this.materialLayouts.get(wD);
        if (!pD) {
          const DD = GPUShaderStage.FRAGMENT;
          pD = this.device.createBindGroupLayout({
            label: `terrain-material-${wD}`,
            entries: zD.map(((zD, wD) => {
              switch (zD) {
                case "uniforms":
                  return {
                    binding: wD, visibility: GPUShaderStage.VERTEX | DD, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: wD, visibility: GPUShaderStage.VERTEX | DD, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: wD, visibility: DD, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: wD, visibility: DD, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: wD, visibility: DD, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(wD, pD)
        }
        return pD
      }
      async createMaterialBindGroup(DD, zD) {
        const wD = [{
          buffer: DD.uniformBuffer
        }];
        if (zD) {
          const {
            urls: pD,
            pixels: sD,
            layerWidth: KD
          } = zD.sources, rD = await Promise.all(pD.map(((DD, zD) => {
            var wD;
            return es(this.device, DD, null !== (wD = null === sD || void 0 === sD ? void 0 : sD[zD]) && void 0 !== wD ? wD : null, KD)
          })));
          DD.atlasCount = rD.length, DD.B3 = rD[0].layerWidth, DD.atlasLayers = rD[0].layers, zD.animDataPerTex && wD.push({
            buffer: is(this.device, Float32Array.from(zD.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), wD.push(this.sampler);
          for (const DD of rD) wD.push(DD.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === DD.texture) {
          const {
            url: zD
          } = DD.model.diffuseTexture.source, {
            pixels: pD,
            width: sD,
            height: KD
          } = await ks(zD);
          wD.push(this.sampler), wD.push(Ws(this.device, pD, sD, KD, 1, `terrain-${zD}`).createView({
            dimension: "2d"
          }))
        }
        const pD = this.materialLayout(this.programKey(DD, !1));
        DD.bindGroupLayout = pD, DD.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${DD.model.name}`,
          layout: pD,
          entries: wD.map(((DD, zD) => ({
            binding: zD,
            resource: DD
          })))
        })
      }
      programKey(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const pD = wD ? wD.lighting : this.lighting,
          sD = wD ? wD.KI : this.KI,
          KD = {
            texture: DD.texture,
            atlasCount: DD.atlasCount,
            B3: DD.B3,
            atlasLayers: DD.atlasLayers,
            animated: DD.animated,
            alphaTest: DD.model.transparencyMode === VD.o.alphaTest,
            lighting: pD,
            dirLightCount: wD ? wD.dirLightCount : this.dirLightCount,
            packed: zD
          };
        if (!sD) return KD;
        const rD = this.shaderPackFields(DD, sD),
          LD = "atlas" === DD.texture && DD.model.transparencyMode === VD.o.opaque && rp(rD.packVariant);
        return {
          ...KD,
          ...rD,
          alphaTest: KD.alphaTest || LD
        }
      }
      shaderPackFields(DD, zD) {
        const wD = this.packVariant(DD, zD);
        return void 0 === wD ? sp : {
          packVariant: wD,
          liquid: DD.liquid
        }
      }
      packVariant(DD, zD) {
        return DD.customRenderMat ? void 0 : function(DD, zD) {
          const wD = DD ? DD.defineFor(zD ? "liquid" : "terrain") : 0;
          return 0 === wD ? void 0 : wD
        }(zD, DD.liquid)
      }
      isBlended(DD) {
        return DD.model.transparencyMode === VD.o.alphaBlend
      }
      shaderModule(DD, zD) {
        let wD = this.modules.get(DD);
        return wD || (wD = this.device.createShaderModule({
          label: zD,
          code: DD
        }), this.modules.set(DD, wD)), wD
      }
      pipelineFor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!DD.bindGroupLayout) return null;
        if (!pD) return this.pipelineOf(DD, zD, wD);
        const sD = this.pipelineIdNow(DD, zD, !0, wD),
          KD = this.pipelines.get(sD);
        if (KD) return KD;
        const rD = this.pipelineOf(DD, zD, wD);
        return rD && void 0 === KD && this.startPipeline(sD, DD, {
          ...this.programKey(DD, zD),
          resting: pD
        }, wD), rD
      }
      pipelineOf(DD, zD, wD) {
        const pD = this.pipelineIdNow(DD, zD, !1, wD),
          sD = this.pipelines.get(pD);
        return void 0 !== sD ? sD : (this.startPipeline(pD, DD, this.programKey(DD, zD), wD), null)
      }
      pipelineIdNow(DD, zD, wD, pD) {
        const {
          lighting: sD,
          dirLightCount: KD
        } = this, {
          transparencyMode: rD,
          backFaceCulling: LD
        } = DD.model, cD = this.packVariant(DD, this.KI), gD = (zD ? 2 : 0) + (wD ? 1 : 0), RD = DD.pipelineIds[gD];
        if (null !== RD && RD.lighting === sD && RD.dirLightCount === KD && RD.packVariant === cD && RD.transparencyMode === rD && RD.cull === LD && RD.atlasCount === DD.atlasCount && RD.B3 === DD.B3 && RD.atlasLayers === DD.atlasLayers && RD.colorFormat === pD._colorFormat && RD.depthStencilFormat === pD._depthStencilFormat && RD.sampleCount === pD._sampleCount) return RD.id;
        const AD = this.programKey(DD, zD),
          UD = this.pipelineId(DD, wD ? {
            ...AD,
            resting: wD
          } : AD, pD);
        return DD.pipelineIds[gD] = {
          id: UD,
          lighting: sD,
          dirLightCount: KD,
          packVariant: cD,
          transparencyMode: rD,
          cull: LD,
          atlasCount: DD.atlasCount,
          B3: DD.B3,
          atlasLayers: DD.atlasLayers,
          colorFormat: pD._colorFormat,
          depthStencilFormat: pD._depthStencilFormat,
          sampleCount: pD._sampleCount
        }, UD
      }
      pipelineId(DD, zD, wD) {
        return qL(zD, this.isBlended(DD), DD.model.backFaceCulling, wD)
      }
      pipelineBuild(DD, zD, wD) {
        var pD;
        const sD = this.pipelineId(DD, zD, wD);
        return null !== (pD = this.builds.get(sD)) && void 0 !== pD ? pD : this.startPipeline(sD, DD, zD, wD)
      }
      startPipeline(DD, zD, wD, pD) {
        var sD;
        this.pipelines.set(DD, null);
        const KD = Tp(wD),
          rD = this.isBlended(zD),
          LD = this.shadowMask && pD._depthStencilFormat ? function(DD, zD, wD, pD) {
            if (void 0 === DD.packVariant || DD.liquid || zD) return "none";
            const sD = (0, Cz.f)(DD.packVariant);
            return null === sD || void 0 === sD || !sD.sunShadow || !Ww(sD, wD) || sD.discards || DD.alphaTest && rp(DD.packVariant) ? "none" : pD ? "edge" : "plain"
          }(wD, rD, !!this.sunShadow, pD._sampleCount > 1) : "none";
        let cD;
        try {
          cD = bp(wD, !!this.sunShadow, LD)
        } catch (GD) {
          if (!Rp(wD)) throw GD;
          return this.failedPackBuild(DD, wD, KD, GD)
        }
        const gD = this.shaderModule(cD, KD),
          RD = [];
        wD.packed || (RD.push(function(DD, zD) {
          const wD = [{
            shaderLocation: vL.position,
            offset: Xz.c.uD,
            format: "float32x3"
          }, {
            shaderLocation: vL.normal,
            offset: Xz.c.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: vL.color,
            offset: Xz.c.colorOffset,
            format: "unorm8x4"
          }];
          return DD && wD.push({
            shaderLocation: vL.uv,
            offset: Xz.c.uvOffset,
            format: "float32x2"
          }), zD && wD.push({
            shaderLocation: vL.blockFlagWords,
            offset: Xz.c.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: Xz.c.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: wD
          }
        }("none" !== wD.texture, Rp(wD))), wD.lighting && RD.push(FL));
        const AD = zD.model.backFaceCulling,
          UD = {
            label: KD,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, zD.bindGroupLayout, ...uK(this.device, wD, !!this.sunShadow, "none" !== LD)]
            }),
            vertex: {
              module: gD,
              entryPoint: "mainVertex",
              buffers: RD
            },
            fragment: YD({
              module: gD,
              entryPoint: "mainFragment"
            }, pD, rD ? YL : null),
            depthStencil: pD._depthStencilFormat ? {
              format: pD._depthStencilFormat,
              depthCompare: null !== (sD = pD._depthCompare) && void 0 !== sD ? sD : wz,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: pD._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: AD ? "back" : "none"
            }
          },
          fD = wD.resting ? 0 : 1;
        this.compiling += fD;
        const ID = "none" === LD ? this.device.createRenderPipelineAsync(UD) : this.startMaskPipelines(gD, UD, "edge" === LD);
        ID.then((zD => {
          this.compiling -= fD, this.pipelines.set(DD, zD)
        }), (DD => {
          this.compiling -= fD, console.error(`Lite terrain pipeline ${KD} failed`, DD), ZL(wD, KD, gD, DD)
        }));
        const BD = {
          name: KD,
          module: gD,
          built: ID
        };
        return this.builds.set(DD, BD), BD
      }
      startMaskPipelines(DD, zD, wD) {
        const pD = zD.depthStencil,
          sD = this.device.createRenderPipelineAsync(wD ? zD : {
            ...zD,
            depthStencil: {
              ...pD,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          KD = this.device.createRenderPipelineAsync({
            ...zD,
            label: `${zD.label}-prepass`,
            fragment: {
              module: DD,
              entryPoint: "prepassFragment",
              targets: [{
                format: xL
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([sD, KD]).then((DD => {
          let [zD, wD] = DD;
          return this.prepassOf.set(zD, wD), this.maskPipelines++, zD
        }))
      }
      failedPackBuild(DD, zD, wD, pD) {
        console.error(`Lite terrain pipeline ${wD} failed`, pD), ZL(zD, wD, null, pD);
        const sD = Promise.reject(pD);
        sD.catch((() => {}));
        const KD = {
          name: wD,
          module: null,
          built: sD
        };
        return this.builds.set(DD, KD), KD
      }
      checkShaderPack(DD) {
        return lL(DD, {
          device: this.device,
          target: this.target,
          material: DD => this.materialFor(DD),
          programKey: (DD, zD, wD) => this.programKey(DD, zD, wD),
          pipelineBuild: (DD, zD, wD) => this.pipelineBuild(DD, zD, wD)
        })
      }
      createBinding(DD, zD, wD) {
        return this.target = zD, {
          renderable: DD,
          pipeline: rz(this.device, zD),
          draw: DD => {
            this.geometry.setDrawing(!0);
            try {
              return wD ? this.drawTransparent(DD, zD) : this.drawOpaque(DD, zD)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(DD, zD) {
        var wD, pD, sD, KD;
        const {
          AU: rD
        } = DD;
        this.lighting = DD.ZB;
        const LD = (0, GL.z)(zD);
        this.dirLightCount = Math.min(LD, 4), this.KI = null !== (wD = rD.KI) && void 0 !== wD ? wD : null, LD > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(DD, zD), this.animateMaterials(zD.animTick);
        const cD = rD.CU,
          gD = cD[0] !== this.originOffset[0] || cD[1] !== this.originOffset[1] || cD[2] !== this.originOffset[2];
        gD && (this.originOffset[0] = cD[0], this.originOffset[1] = cD[1], this.originOffset[2] = cD[2]);
        const RD = zD.eye;
        this.eye[0] = RD[0], this.eye[1] = RD[1], this.eye[2] = RD[2], this.writeShaderPackInputs();
        const AD = zD.projectionMatrix,
          UD = 0 === AD[15];
        let fD = 0;
        (gD || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: ID
        } = this;
        Lz(this.transparentRenderable._worldCenter, zD, sz), this.resetBatches(UD), this.transparent.length = 0, this.unlit.length = 0;
        const BD = rD.KU.PDD,
          GD = BD / 2 * Math.sqrt(3);
        let hD = 0;
        const nD = !!this.KI && Kp(this.KI.defineFor("liquid"));
        let MD = !1;
        const OD = null !== (pD = null === (sD = rD.qJ) || void 0 === sD ? void 0 : sD.visibility) && void 0 !== pD ? pD : null,
          JD = this.visCull && UD && 0 === this.compiling && null !== OD && rD.KU.dpD[0] >= this.visCullMinDistance ? this.target : null,
          ED = this.visPassable,
          QD = this.visCandidates,
          XD = this.visCandidateBatches;
        ED.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let VD = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let PD = 0;
        const CD = (DD, wD) => {
          if (!wD) return this.transparent.push(DD), void(PD += 2 * DD.faceCount);
          if (null !== DD.faceGroups && wD.faceCull) {
            if (0 === fD && (fD = (0, kL.e)(AD, zD.renderWidth, zD.renderHeight), fD !== this.faceFocalPx && (this.faceFocalPx = fD, ID = ++this.faceEpoch)), DD.faceEpoch !== ID) {
              DD.faceEpoch = ID;
              const zD = Math.sqrt(DD.distance) + GD,
                wD = (0, kL.j)(DD.planePX, DD.planeNX, DD.planePY, DD.planeNY, DD.planePZ, DD.planeNZ, this.eye[0] - (DD.origin[0] - this.originOffset[0]), this.eye[1] - (DD.origin[1] - this.originOffset[1]), this.eye[2] - (DD.origin[2] - this.originOffset[2]), (0, kL.f)(zD, fD));
              wD !== DD.faceMask && this.chooseFaceRanges(DD, DD.faceGroups, wD)
            }
            if (0 === DD.rangeCount) return
          } else - 1 !== DD.faceMask && this.drawWhole(DD);
          wD.meshes.push(DD), PD += 2 * ((DD.rangeCount > 0 ? DD.count0 : 0) + (DD.rangeCount > 1 ? DD.count1 : 0))
        };
        for (const TD of this.chunks.values()) {
          gD && this.writeSlot(TD);
          const DD = TD.mesh.visibility;
          DD !== TD.visibility && (TD.visibility = DD, this.slots.setVisibility(TD.slot, DD));
          const {
            material: wD
          } = TD;
          this.geometry.lost(TD) && performance.now() >= TD.lostRetryAt && this.remeshLost(rD, TD);
          const pD = !(null === wD || void 0 === wD || !wD.bindGroup) && this.geometry.backed(TD),
            sD = pD && this.lighting && !TD.vertices.page.twin;
          if (JD && (Number.isNaN(TD.key) && (TD.ci = Math.floor(TD.origin[0] / BD), TD.cj = Math.floor(TD.origin[1] / BD), TD.ck = Math.floor(TD.origin[2] / BD), TD.key = (0, eL.h)(TD.ci, TD.cj, TD.ck)), (!pD || DD < 1 || sD || !this.batchDraws(wD, TD.packed, JD)) && this.visSeeThrough(TD, JD) && ED.add(TD.key)), !pD) continue;
          sD || (TD.lostRemeshes = 0);
          const KD = TD.origin[0] - this.originOffset[0],
            LD = TD.origin[1] - this.originOffset[1],
            cD = TD.origin[2] - this.originOffset[2];
          if (!(0, sL.c)(zD.frustum, KD, LD, cD, BD)) continue;
          const RD = KD + BD / 2 - this.eye[0],
            AD = LD + BD / 2 - this.eye[1],
            fD = cD + BD / 2 - this.eye[2];
          if (TD.distance = RD * RD + AD * AD + fD * fD, this.lighting && !TD.lit && (hD = Math.max(hD, TD.vertexCount), this.unlit.push(TD)), sD) continue;
          const ID = this.isBlended(wD) ? null : this.batchFor(wD, TD.packed, TD.vertices.page, 1 === DD, UD);
          JD ? (QD[VD] = TD, XD[VD++] = ID) : CD(TD, ID)
        }
        const xD = JD ? this.sweepVisibility(DD, zD, OD) : null;
        null === (KD = (0, iK.u)(rD)) || void 0 === KD || KD.update(zD.frustum, this.originOffset, BD, xD);
        for (let TD = 0; TD < VD; TD++) {
          const DD = QD[TD];
          !xD || xD.isDrawn(DD.ci, DD.cj, DD.ck) ? CD(DD, XD[TD]) : (this.visCulledParts++, this.visCulledTriangles += 2 * DD.faceCount)
        }
        for (const TD of this.transparent) MD ||= nD && TD.material.liquid && !TD.material.customRenderMat;
        this.submittedTriangles = PD, xD && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(DD, zD, xD)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(MD) : MD && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && hD > 0 && this.geometry.lightFullSky(this.unlit, hD);
        for (const TD of this.opaqueBatches) this.chunkSorter.sort(TD.meshes, 1) || TD.meshes.sort(Dc);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(zc)
      }
      sweepVisibility(DD, zD, wD) {
        const {
          KU: pD
        } = DD.AU, sD = pD.PDD, KD = this.visPassable, rD = this.eye[0] + this.originOffset[0], LD = this.eye[1] + this.originOffset[1], cD = this.eye[2] + this.originOffset[2];
        if (!wD.eyeClear(rD, LD, cD, zD.near, zD.projectionMatrix, pD)) return null;
        const [gD, RD] = pD.dpD, AD = wD.update(rD, LD, cD, sD, gD, RD, KD);
        return this.visSweeps = wD.sweeps, AD ? wD : null
      }
      visSeeThrough(DD, zD) {
        const {
          material: wD
        } = DD;
        return (!wD || !this.isBlended(wD)) && (DD.mesh.visibility < 1 || !(null !== wD && void 0 !== wD && wD.bindGroup) || DD.faceCount > 0 && (!this.geometry.backed(DD) || this.lighting && !DD.vertices.page.twin) || !this.batchDraws(wD, DD.packed, zD))
      }
      batchDraws(DD, zD, wD) {
        var pD;
        const sD = zD ? 2 : 0;
        if (DD === this.visDrawsMaterial && function(DD, zD) {
            return 0 !== (DD & 1 << zD)
          }(this.visDrawsBits, sD)) return 0 !== (this.visDrawsBits & 2 << sD);
        let KD = null !== (pD = this.visBatchDraws.get(DD)) && void 0 !== pD ? pD : 0;
        if (!(KD & 1 << sD)) {
          KD |= 1 << sD | (!!DD.bindGroupLayout && this.canDraw(DD, zD) && !!this.pipelines.get(this.pipelineIdNow(DD, zD, !1, wD)) ? 2 << sD : 0), this.visBatchDraws.set(DD, KD)
        }
        return this.visDrawsMaterial = DD, this.visDrawsBits = KD, 0 !== (KD & 2 << sD)
      }
      runVisCheck(DD, zD, wD) {
        const {
          AU: pD
        } = DD, {
          KU: sD
        } = pD, KD = sD.PDD, rD = new Set;
        for (const fD of this.chunks.values()) rD.add(fD.key);
        const LD = Es.Matrix.FromArray(zD.viewProjectionMatrix).invert(),
          [cD, gD, RD] = this.originOffset,
          AD = new Es.WI,
          UD = function(DD, zD, wD, pD) {
            const sD = new Set;
            for (let KD = 0; KD < 27; KD++)
              for (let rD = 0; rD < 48; rD++) {
                const LD = wD((rD + .5) / 48 * 2 - 1, (KD + .5) / 27 * 2 - 1);
                oL(DD, zD, [LD[0] - zD[0], LD[1] - zD[1], LD[2] - zD[2]], pD, sD)
              }
            return sD
          }({
            sF: (DD, zD, wD) => sD.sF(DD, zD, wD),
            occluders: wD.occluders,
            opaque: wD.opaque,
            CI: KD,
            isDrawn: (DD, zD, pD) => wD.isDrawn(DD, zD, pD),
            hasParts: (DD, zD, wD) => rD.has((0, eL.h)(DD, zD, wD))
          }, [this.eye[0] + cD, this.eye[1] + gD, this.eye[2] + RD], ((DD, zD) => (Es.WI.TransformCoordinatesFromFloatsToRef(DD, zD, .5, LD, AD), [AD.x + cD, AD.y + gD, AD.z + RD])), (sD.dpD[0] + 1) * KD);
        this.visViolations = UD.size;
        for (const fD of UD) this.warnOnce(`vis:${fD}`, `Lite terrain cave culling skipped chunk ${fD}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var DD;
        null !== (DD = this.KI) && void 0 !== DD && DD.isRunning() && (this.shaderPackInputs ??= new vK(this.device, this.KI.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.KI, this.eye, this.lighting))
      }
      bindShaderPackInputs(DD, zD, wD) {
        var pD, sD, KD, rD;
        let LD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const cD = this.packVariant(zD, wD);
        if (void 0 === cD) return;
        this.shaderPackInputs || (this.shaderPackInputs = new vK(this.device, wD.textureLayers(), this.sunShadow), this.shaderPackInputs.write(wD, this.eye, this.lighting));
        const gD = Kp(cD) ? null !== (pD = null === (sD = this.sceneDepth) || void 0 === sD ? void 0 : sD.view) && void 0 !== pD ? pD : this.standIn() : null,
          RD = LD ? null !== (KD = null === (rD = this.shadowMask) || void 0 === rD ? void 0 : rD.view) && void 0 !== KD ? KD : this.standIn() : null;
        this.shaderPackInputs.bind(DD, gD, aK(cD, !!this.sunShadow), RD)
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
        var DD, zD;
        return null !== (DD = null === (zD = this.shaderPackInputs) || void 0 === zD ? void 0 : zD.bindGroupFor(null, !0)) && void 0 !== DD ? DD : null
      }
      resetBatches(DD) {
        const zD = this.opaqueBatches;
        let wD = 0;
        for (const pD of zD) pD.meshes.length > 0 && (pD.meshes.length = 0, pD.faceCull = this.batchFaceCull(pD.material, DD), zD[wD++] = pD);
        zD.length = wD
      }
      orderBatches() {
        const DD = this.opaqueBatches;
        for (let zD = 0; zD < DD.length; zD++) {
          const wD = DD[zD];
          wD.group = zD;
          for (let pD = 0; pD < zD; pD++) {
            const zD = DD[pD];
            if (zD.material === wD.material && zD.packed === wD.packed) {
              wD.group = zD.group;
              break
            }
          }
          wD.nearest = wD.meshes.length > 0 ? wD.meshes[0].distance : 1 / 0
        }
        DD.sort(aL)
      }
      batchFor(DD, zD, wD, pD, sD) {
        for (const rD of this.opaqueBatches)
          if (rD.material === DD && rD.packed === zD && rD.page === wD && rD.resting === pD) return rD;
        const KD = {
          material: DD,
          packed: zD,
          page: wD,
          resting: pD,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(DD, sD)
        };
        return this.opaqueBatches.push(KD), KD
      }
      batchFaceCull(DD, zD) {
        return !(!zD || !(0, yL.q)(DD.model)) && (!this.KI || ! function(DD) {
          var zD;
          return !(null === (zD = (0, Cz.f)(DD)) || void 0 === zD || !zD.movesVertices)
        }(this.packVariant(DD, this.KI)))
      }
      writeFrameUniforms(DD, zD) {
        const wD = this.frameUniforms,
          pD = Ap;
        if ((0, GL.D)(DD, wD), wD[pD.fogInfos] = zD.fogEnabled ? zD.fogMode : 0, wD[pD.fogInfos + 1] = zD.fogStart, wD[pD.fogInfos + 2] = zD.fogEnd, wD[pD.fogInfos + 3] = zD.fogDensity, wD.set(zD.fogColour, pD.fogColour), wD[pD.outputHeight] = zD.renderHeight, wD.set(zD.ambientColour, pD.sceneAmbient), (0, GL.v)(zD, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const zD = (0, hL.i)(DD.sB, DD.bI, DD.jI);
          for (let DD = 0; DD < 4; DD++) wD[pD.aoLevels + DD] = zD[DD] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, wD)
      }
      animateMaterials(DD) {
        const zD = fp.anim;
        for (const wD of this.materials.values()) wD.animated && (wD.uniformData[zD] = DD, this.device.queue.writeBuffer(wD.uniformBuffer, 4 * zD, wD.uniformData, zD, 1))
      }
      canDraw(DD, zD) {
        return !("atlas" === DD.texture && !zD) || (this.warnOnce(`stride:${DD.id}`, `Lite terrain: material "${DD.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(DD, zD) {
        let wD = 0;
        DD.setBindGroup(1, this.frameBindGroup);
        for (const pD of this.opaqueBatches) {
          if (!pD.meshes.length || !this.canDraw(pD.material, pD.packed)) continue;
          const sD = this.pipelineFor(pD.material, pD.packed, zD, pD.resting);
          sD && (DD.setPipeline(sD), DD.setBindGroup(2, pD.material.bindGroup), this.KI && this.bindShaderPackInputs(DD, pD.material, this.KI, this.prepassOf.has(sD)), wD += this.drawBatch(DD, pD))
        }
        return wD
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(DD, zD, wD) {
        const pD = this.target,
          sD = this.KI;
        if (!pD || !sD || 0 === this.maskPipelines) return 0;
        let KD = 0,
          rD = null;
        this.geometry.setDrawing(!0);
        try {
          for (const LD of this.opaqueBatches) {
            if (!LD.meshes.length || !this.canDraw(LD.material, LD.packed)) continue;
            const cD = this.pipelineFor(LD.material, LD.packed, pD, LD.resting),
              gD = cD && this.prepassOf.get(cD);
            gD && (rD || (rD = DD.beginRenderPass(zD), rD.setBindGroup(0, wD), rD.setBindGroup(1, this.frameBindGroup)), rD.setPipeline(gD), rD.setBindGroup(2, LD.material.bindGroup), this.bindShaderPackInputs(rD, LD.material, sD, !0), KD += this.drawBatch(rD, LD))
          }
        } finally {
          var LD;
          null === (LD = rD) || void 0 === LD || LD.end(), this.geometry.setDrawing(!1)
        }
        return KD
      }
      drawBatch(DD, zD) {
        let wD = 0;
        for (const pD of zD.meshes) {
          const {
            rangeCount: zD
          } = pD;
          zD > 0 && (wD += this.geometry.draw(DD, pD, this.lighting, pD.first0, pD.count0), zD > 1 && (wD += this.geometry.draw(DD, pD, this.lighting, pD.first1, pD.count1)))
        }
        return wD
      }
      drawTransparent(DD, zD) {
        let wD = 0,
          pD = null,
          sD = null;
        DD.setBindGroup(1, this.frameBindGroup);
        for (const KD of this.transparent) {
          const rD = KD.material;
          if (!this.canDraw(rD, KD.packed)) continue;
          const LD = this.pipelineFor(rD, KD.packed, zD);
          LD && (LD !== pD && (DD.setPipeline(LD), pD = LD, this.KI && this.bindShaderPackInputs(DD, rD, this.KI)), rD !== sD && (DD.setBindGroup(2, rD.bindGroup), sD = rD), wD += this.geometry.draw(DD, KD, this.lighting))
        }
        return wD
      }
    }

    function qL(DD, zD, wD, pD) {
      return `${Tp(DD)}|${DD.atlasLayers}|${DD.B3}|${zD}|${wD}|${pD._colorFormat}|${pD._depthStencilFormat}|${pD._sampleCount}`
    }

    function Dc(DD, zD) {
      return DD.distance - zD.distance
    }

    function zc(DD, zD) {
      return zD.distance - DD.distance
    }
    class wc {
      constructor() {
        this.left = []
      }
      sort(DD, zD) {
        for (let wD = 0; wD < DD.length; wD++) {
          const zD = DD[wD].distance;
          if (zD - zD !== 0) return !1
        }
        return this.sortRange(DD, 0, DD.length, zD), !0
      }
      sortRange(DD, zD, wD, pD) {
        if (wD - zD <= 16) {
          for (let sD = zD + 1; sD < wD; sD++) {
            const wD = DD[sD],
              KD = pD * wD.distance;
            let rD = sD - 1;
            for (; rD >= zD && pD * DD[rD].distance > KD; rD--) DD[rD + 1] = DD[rD];
            DD[rD + 1] = wD
          }
          return
        }
        const sD = zD + wD >>> 1;
        if (this.sortRange(DD, zD, sD, pD), this.sortRange(DD, sD, wD, pD), pD * DD[sD - 1].distance <= pD * DD[sD].distance) return;
        const {
          left: KD
        } = this, rD = sD - zD;
        for (let RD = 0; RD < rD; RD++) KD[RD] = DD[zD + RD];
        let LD = 0,
          cD = sD,
          gD = zD;
        for (; LD < rD && cD < wD;) DD[gD++] = pD * DD[cD].distance < pD * KD[LD].distance ? DD[cD++] : KD[LD++];
        for (; LD < rD;) DD[gD++] = KD[LD++]
      }
    }
    const pc = Math.ceil(102);

    function sc(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zD;
      const KD = Math.min(zD, wD),
        rD = new Uint32Array(Dw(pD));
      for (let LD = 0; LD < pD; LD++) {
        const zD = Math.floor(LD * KD / pD),
          wD = Math.max(zD + 1, Math.floor((LD + 1) * KD / pD));
        for (let cD = 0; cD < pD; cD++) {
          const gD = Math.floor(cD * KD / pD),
            RD = Math.max(gD + 1, Math.floor((cD + 1) * KD / pD));
          let AD = 0;
          for (let pD = zD; pD < wD; pD++)
            for (let zD = gD; zD < RD; zD++) DD[pD * sD + zD] >= pc && AD++;
          if (2 * AD >= (wD - zD) * (RD - gD)) {
            const DD = cD + pD * LD;
            rD[DD >>> 5] |= 1 << (31 & DD)
          }
        }
      }
      return rD
    }

    function Kc(DD) {
      return Math.max(1, Math.min(16, DD))
    }
    class rc {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = DD, this.loadTexture = zD, this.warn = wD, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(DD, zD) {
        return (DD.vy !== this.builtVersion || this.blockCaster.length !== zD) && (this.build(DD, zD), !0)
      }
      build(DD, zD) {
        this.builtVersion = DD.vy;
        const wD = new Uint16Array(zD),
          pD = new Map;
        for (let sD = 1; sD < zD; sD++) {
          const zD = this.classify(DD, sD, pD);
          if (null === zD || zD === tz) {
            wD[sD] = null === zD ? 0 : tz;
            continue
          }
          let KD = this.byKey.get(zD.key);
          void 0 === KD && (KD = this.allocate(zD), this.byKey.set(zD.key, KD)), wD[sD] = KD
        }
        this.blockCaster = wD, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(DD, zD) {
        const wD = DD.M_[zD];
        if ("function" !== typeof wD) return wD;
        try {
          return wD()
        } catch (pD) {
          return this.warnOnce(`Sun shadows: no caster option for block ${zD}: ${pD instanceof Error?pD.message:String(pD)}`), null
        }
      }
      classify(DD, zD, wD) {
        const pD = this.option(DD, zD);
        if ("none" === pD) return null;
        if (pD && pD.planes.length > 0) {
          const DD = pD.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(DD)}`,
            planes: DD
          }
        }
        if (DD.Rf[zD]) return null;
        const sD = DD.Uf[zD] ? DD.Dk(zD) : null;
        if (sD && sD.length >= 6) {
          const DD = function(DD) {
            const zD = new Uint32Array(16);
            for (let wD = 0; wD + 6 <= DD.length; wD += 6) {
              const pD = [0, 1, 2].map((zD => Math.max(0, Math.ceil(8 * DD[wD + zD] - .5)))),
                sD = [0, 1, 2].map((zD => Math.min(7, Math.floor(8 * DD[wD + zD + 3] - .5))));
              for (let DD = pD[2]; DD <= sD[2]; DD++)
                for (let wD = pD[1]; wD <= sD[1]; wD++)
                  for (let KD = pD[0]; KD <= sD[0]; KD++) {
                    const pD = KD + 8 * (wD + 8 * DD);
                    zD[pD >>> 5] |= 1 << (31 & pD)
                  }
            }
            return zD
          }(sD);
          return function(DD) {
            return DD.every((DD => 4294967295 === DD))
          }(DD) ? tz : DD.every((DD => 0 === DD)) ? null : {
            kind: "shape",
            key: `shape:${DD.join(",")}`,
            mask: DD
          }
        }
        if (DD.RV[zD] || !DD.rB[zD]) return null;
        const KD = [0, 1, 2, 3, 4, 5].map((pD => {
          const sD = DD.LB[6 * zD + pD];
          let KD = wD.get(sD);
          return void 0 === KD && (KD = function(DD) {
            if (!DD || DD.hB) return null;
            const {
              I3: zD,
              B3: wD,
              U3: pD
            } = DD;
            if (!zD || !wD || !(wD > 0) || void 0 === pD || !(pD >= 0)) return null;
            const sD = zD[0],
              KD = wD * wD * 4;
            if (!sD || sD.byteLength < KD) return null;
            const rD = Math.floor(sD.byteLength / KD),
              LD = zD[Math.floor(pD / rD)];
            if (!LD) return null;
            const cD = new Uint8Array(LD.buffer, LD.byteOffset, LD.byteLength),
              gD = pD % rD * KD;
            if (gD + KD > cD.length) return null;
            const RD = new Uint8Array(wD * wD);
            let AD = !1;
            for (let UD = 0; UD < RD.length; UD++) RD[UD] = cD[gD + 4 * UD + 3], AD ||= RD[UD] < pc;
            return AD ? {
              alpha: RD,
              width: wD
            } : null
          }(DD.GB(sD)), wD.set(sD, KD)), KD
        }));
        if (KD.every((DD => null === DD))) return tz;
        const rD = Kc(Math.max(...KD.map((DD => {
            var zD;
            return null !== (zD = null === DD || void 0 === DD ? void 0 : DD.width) && void 0 !== zD ? zD : 1
          })))),
          LD = new Uint32Array(Dw(rD)).fill(4294967295),
          cD = KD.map((DD => null === DD ? LD : sc(DD.alpha, DD.width, DD.width, rD)));
        return {
          kind: "cutout",
          key: `cutout:${rD}:${cD.map((DD=>DD.join(","))).join("|")}`,
          size: rD,
          faces: cD
        }
      }
      allocate(DD) {
        if (this.nextCaster >= zw) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const zD = this.nextCaster++;
        if (this.writeCaster(zD, Fz, 0, 0, 0), "shape" === DD.kind) {
          const wD = this.allocateMask(DD.mask.length);
          wD >= 0 && (this.sink(wD, DD.mask), this.writeCaster(zD, Yz, wD, 0, 8))
        } else if ("cutout" === DD.kind) {
          const wD = Dw(DD.size),
            pD = this.allocateMask(6 * wD);
          if (pD >= 0) {
            const sD = new Uint32Array(6 * wD);
            DD.faces.forEach(((DD, zD) => {
              sD.set(DD, zD * wD)
            })), this.sink(pD, sD), this.writeCaster(zD, qz, pD, 0, DD.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(zD, DD.planes).finally((() => {
          this.planesLoading--
        })));
        return zD
      }
      async loadPlanes(DD, zD) {
        const wD = await Promise.all(zD.map((DD => this.texture(DD.texture))));
        if (wD.some((DD => null === DD))) return;
        const pD = wD,
          sD = Kc(Math.max(...pD.map((DD => Math.min(DD.width, DD.height))))),
          KD = Dw(sD),
          rD = this.allocateMask(zD.length * (4 + KD));
        if (rD < 0) return;
        const LD = new Uint32Array(zD.length * (4 + KD)),
          cD = 4 * zD.length;
        zD.forEach(((DD, zD) => {
          const wD = rD + cD + zD * KD;
          LD.set(function(DD, zD) {
            const [wD, pD] = DD.tangent, sD = Math.hypot(wD, pD) || 1, KD = wD / sD, rD = pD / sD, LD = DD.centre[0] * rD - DD.centre[1] * KD, cD = new Uint32Array(4);
            return new Float32Array(cD.buffer, 0, 3).set([KD, rD, LD]), cD[3] = zD, cD
          }(DD, wD), 4 * zD), LD.set(sc(pD[zD].alpha, pD[zD].width, pD[zD].height, sD), cD + zD * KD)
        })), this.sink(rD, LD), this.writeCaster(DD, Hz, rD, zD.length, sD)
      }
      texture(DD) {
        let zD = this.textures.get(DD);
        return zD || (zD = this.loadTexture(DD).catch((zD => (this.warn(`Sun shadows: no mask for ${DD}: ${zD instanceof Error?zD.message:String(zD)}`), null))), this.textures.set(DD, zD)), zD
      }
      allocateMask(DD) {
        if (this.nextMaskWord + DD > ww) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const zD = 32768 + this.nextMaskWord;
        return this.nextMaskWord += DD, zD
      }
      writeCaster(DD, zD, wD, pD, sD) {
        this.sink(0 + 4 * DD, Uint32Array.of(zD, wD, pD, sD))
      }
      warnOnce(DD) {
        this.warned.has(DD) || (this.warned.add(DD), this.warn(DD))
      }
    }
    var Lc = wD(2830);

    function cc(DD) {
      return !DD.OB && !DD.yX && !DD.tI
    }

    function gc() {
      return {
        bricks: new Uint32Array(yz),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Nz)
      }
    }
    class Rc {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = DD, this.writeVoxels = zD, this.writePool = wD, this.warn = pD, this.eyeChunk = null, this.slotChunk = new Array(jz).fill(null), this.slotVersion = new Float64Array(jz).fill(-1), this.slotPool = new Array(jz).fill(null), this.starved = new Uint8Array(jz), this.queue = [], this.queued = new Uint8Array(jz), this.queueSorted = !0, this.freePool = new Uint32Array(pw), this.freeCount = pw, this.casterTable = null, this.warnedPool = !1, this.scratch = gc(), this.victimScratch = gc(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * jz), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let sD = 0; sD < pw; sD++) this.freePool[sD] = 65535 - sD
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return pw - this.freeCount
      }
      chunkAdded(DD) {
        if (null === this.eyeChunk || !this.inRadius(DD.i, DD.j, DD.k)) return;
        const zD = az(DD.i, DD.j, DD.k);
        this.slotChunk[zD] = DD, this.slotVersion[zD] = -1, this.enqueue(zD)
      }
      update(DD, zD, wD) {
        const pD = this.casters.blockCaster;
        if (pD !== this.casterTable) {
          this.casterTable = pD;
          for (let DD = 0; DD < jz; DD++) this.slotVersion[DD] = -1, this.slotChunk[DD] && this.enqueue(DD)
        }
        const sD = Math.floor(DD[0] / 32),
          KD = Math.floor(DD[1] / 32),
          rD = Math.floor(DD[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== sD || this.eyeChunk[1] !== KD || this.eyeChunk[2] !== rD) && (this.eyeChunk = [sD, KD, rD], this.follow(zD), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let LD = 0; LD < jz; LD++) {
          const DD = this.slotChunk[LD];
          DD && (DD.EX || DD.HI !== this.slotVersion[LD]) && this.enqueue(LD)
        }
        this.drain(wD), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(DD, zD) {
        this.records.set(zD, 4 * DD), this.windowTopStale = !0, this.writeVoxels(4 * DD, zD)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const DD = this.records;
        let zD = -1 / 0;
        for (let pD = 0; pD < DD.length; pD += 4) {
          const wD = 255 & DD[pD + 3];
          wD !== iz && wD !== lz || !this.inRadius(DD[pD], DD[pD + 1], DD[pD + 2]) || (zD = Math.max(zD, DD[pD + 1] * xz + (DD[pD + 3] >>> 8)))
        }
        const wD = zD === -1 / 0 ? 1 : zD + mz;
        wD !== this.windowTop[0] && (this.windowTop[0] = wD, this.writeVoxels(kz, this.windowTop))
      }
      follow(DD) {
        const zD = this.eyeChunk,
          [wD, pD, sD] = Tz;
        for (let rD = -sD; rD <= sD; rD++)
          for (let sD = -pD; sD <= pD; sD++)
            for (let pD = -wD; pD <= wD; pD++) {
              var KD;
              const wD = zD[0] + pD,
                LD = zD[1] + sD,
                cD = zD[2] + rD,
                gD = az(wD, LD, cD),
                RD = this.slotChunk[gD];
              if (RD && !RD.EX && RD.i === wD && RD.j === LD && RD.k === cD) continue;
              const AD = null !== (KD = DD(wD, LD, cD)) && void 0 !== KD ? KD : null;
              RD && (RD.i !== wD || RD.j !== LD || RD.k !== cD) && this.slotPool[gD] && (this.release(gD), this.record.fill(0), this.writeRecord(gD, this.record)), this.slotChunk[gD] = AD, this.slotVersion[gD] = -1, (AD || RD) && this.enqueue(gD)
            }
      }
      requeueStarved() {
        for (let DD = 0; DD < jz; DD++) this.starved[DD] && this.slotChunk[DD] && this.enqueue(DD)
      }
      enqueue(DD) {
        this.queued[DD] || (this.queued[DD] = 1, this.queue.push(DD), this.queueSorted = !1)
      }
      drain(DD) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const DD = new Map;
          for (const zD of this.queue) DD.set(zD, this.slotDistance(zD));
          this.queue.sort(((zD, wD) => DD.get(wD) - DD.get(zD))), this.queueSorted = !0
        }
        const zD = performance.now();
        let wD = 0;
        const pD = [];
        for (; this.queue.length > 0 && (0 === wD || performance.now() - zD < DD);) {
          const DD = this.queue.pop(),
            zD = this.slotChunk[DD];
          !zD || zD.EX || cc(zD) ? (this.queued[DD] = 0, this.encodeSlot(DD), wD++) : pD.push(DD)
        }
        for (let sD = pD.length - 1; sD >= 0; sD--) this.queue.push(pD[sD])
      }
      slotDistance(DD) {
        const zD = this.slotChunk[DD],
          wD = this.eyeChunk;
        return zD ? Math.max(Math.abs(zD.i - wD[0]), Math.abs(zD.j - wD[1]), Math.abs(zD.k - wD[2])) : 0
      }
      inRadius(DD, zD, wD) {
        const pD = this.eyeChunk,
          [sD, KD, rD] = Tz;
        return Math.abs(DD - pD[0]) <= sD && Math.abs(zD - pD[1]) <= KD && Math.abs(wD - pD[2]) <= rD
      }
      release(DD) {
        const zD = this.slotPool[DD];
        if (zD) {
          for (let DD = zD.length - 1; DD >= 0; DD--) this.freePool[this.freeCount++] = zD[DD];
          this.slotPool[DD] = null
        }
      }
      encodeSlot(DD) {
        var zD, wD, pD, sD, KD;
        let rD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          LD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const cD = null !== (zD = null === (wD = this.slotPool[DD]) || void 0 === wD ? void 0 : wD.length) && void 0 !== zD ? zD : 0;
        this.release(DD), this.starved[DD] = 0;
        const gD = this.slotChunk[DD],
          RD = this.record;
        if (!gD || gD.EX || !gD.dU) return this.slotChunk[DD] = null, this.slotVersion[DD] = -1, RD.fill(0), this.writeRecord(DD, RD), void(cD > 0 && this.requeueStarved());
        this.slotVersion[DD] = gD.HI;
        const AD = this.encodeBricks(gD, DD, rD, LD);
        RD[0] = gD.i, RD[1] = gD.j, RD[2] = gD.k, RD[3] = AD, this.writeRecord(DD, RD), null === (pD = this.encoded) || void 0 === pD || pD.call(this, gD), LD && (null !== (sD = null === (KD = this.slotPool[DD]) || void 0 === KD ? void 0 : KD.length) && void 0 !== sD ? sD : 0) < cD && this.requeueStarved()
      }
      encodeBricks(DD, zD, wD, pD) {
        if (DD.BI) return Sz;
        const sD = this.casters.blockCaster,
          {
            data: KD,
            stride: rD,
            offset: LD
          } = DD.dU,
          [cD, gD, RD] = rD,
          AD = xz,
          {
            bricks: UD,
            cells: fD,
            special: ID
          } = wD;
        UD.fill(0), ID.fill(0);
        let BD = 0,
          GD = 0,
          hD = 0;
        for (let nD = 0; nD < AD; nD++) {
          const zD = nD >> 2,
            wD = 3 & nD,
            pD = DD.df[nD],
            rD = pD === Lc.f ? -1 : pD < sD.length ? sD[pD] : 0;
          if (0 !== rD)
            for (let DD = 0; DD < AD; DD++) {
              const pD = DD >> 2,
                MD = 3 & DD;
              let OD = LD + DD * cD + nD * gD;
              for (let DD = 0; DD < AD; DD++, OD += RD) {
                let LD = rD;
                if (LD < 0) {
                  const DD = KD[OD];
                  if (LD = DD < sD.length ? sD[DD] : 0, 0 === LD) continue
                }
                const cD = uz(pD, zD, DD >> 2),
                  gD = vz(MD, wD, 3 & DD);
                UD[3 * cD + (gD >>> 5)] |= 1 << (31 & gD), fD[cD * Wz + gD] = LD, BD++, hD = nD, LD === tz ? GD++ : ID[cD] = 1
              }
            }
        }
        return 0 === BD ? Sz : 32768 === GD ? iz | hD << 8 : (this.writePoolEntries(zD, wD, pD), this.writeVoxels(Zz + zD * yz, UD), lz | hD << 8)
      }
      writePoolEntries(DD, zD, wD) {
        const {
          bricks: pD,
          cells: sD,
          special: KD
        } = zD, rD = this.entry;
        let LD = 0;
        for (let RD = 0; RD < Nz; RD++) LD += KD[RD];
        if (0 === LD) return;
        wD && this.freeCount < LD && this.evictBeyond(DD, LD);
        const cD = new Uint32Array(wD ? Math.min(LD, this.freeCount) : 0);
        let gD = 0;
        for (let RD = 0; RD < Nz; RD++) {
          if (!KD[RD]) continue;
          const wD = 3 * RD;
          if (gD === cD.length) {
            this.dropSpecials(zD, RD), this.starved[DD] = 1;
            continue
          }
          const LD = this.freePool[--this.freeCount];
          cD[gD++] = LD;
          for (let DD = 0; DD < Wz; DD++) {
            const zD = pD[wD + (DD >>> 5)] >>> (31 & DD) & 1 ? sD[RD * Wz + DD] : 0;
            1 & DD ? rD[DD >> 1] |= zD << 16 : rD[DD >> 1] = zD
          }
          pD[wD + 2] = LD + 1, this.writePool(sw + 32 * LD, rD)
        }
        cD.length > 0 && (this.slotPool[DD] = cD)
      }
      evictBeyond(DD, zD) {
        const wD = this.slotDistance(DD),
          pD = [];
        for (let sD = 0; sD < jz; sD++) sD !== DD && this.slotPool[sD] && this.slotDistance(sD) > wD && pD.push(sD);
        pD.sort(((DD, zD) => this.slotDistance(zD) - this.slotDistance(DD)));
        for (const sD of pD) {
          if (this.freeCount >= zD) return;
          const DD = this.slotChunk[sD];
          DD && !DD.EX && DD.dU && (DD.HI === this.slotVersion[sD] || cc(DD)) && this.encodeSlot(sD, this.victimScratch, !1)
        }
      }
      dropSpecials(DD, zD) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const wD = 3 * zD;
        for (let pD = 0; pD < Wz; pD++) DD.cells[zD * Wz + pD] !== tz && (DD.bricks[wD + (pD >>> 5)] &= ~(1 << (31 & pD)))
      }
    }
    var Ac = wD(37471);
    class Uc {
      constructor(DD) {
        this.device = DD, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Gw, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.KU = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = DD.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = DD.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(DD, zD, wD) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: pD
        } = this;
        pD.Jf(DD, zD), wD.forEachSunShadowCaster((DD => {
          this.add(DD)
        })), pD.finish();
        const sD = 0 === pD.parts;
        if (sD && this.uploadedEmpty) return;
        this.uploadedEmpty = sD;
        const {
          queue: KD
        } = this.device, {
          words: rD
        } = pD;
        KD.writeBuffer(this.frameBuffer, 0, rD, 0, 16385), pD.refs > 0 && KD.writeBuffer(this.frameBuffer, 65540, rD, gw, pD.refs), sD || KD.writeBuffer(this.frameBuffer, 327684, rD, Rw, pD.parts * Lw)
      }
      add(DD) {
        const zD = this.gridFor(DD);
        if (!zD) return;
        const {
          frame: wD
        } = this, {
          KU: pD,
          worldAt: sD,
          instances: KD,
          instanceCount: rD,
          thin: LD
        } = DD;
        if (KD)
          for (let cD = 0; cD < rD; cD++) LD ? (nw(KD, 16 * cD, pD, sD, this.KU), wD.add(zD, this.KU)) : wD.add(zD, KD, 16 * cD);
        else wD.add(zD, pD, sD)
      }
      gridFor(DD) {
        let {
          geometry: zD,
          indexed: wD,
          first: pD,
          count: sD,
          skip: KD
        } = DD, rD = this.grids.get(zD);
        rD || (rD = new Map, this.grids.set(zD, rD));
        const LD = `${wD?pD:-1-pD}:${sD}:${null!==KD&&void 0!==KD?KD:""}`;
        let cD = rD.get(LD);
        if (void 0 !== cD || this.gridsFull) return cD;
        const gD = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = gD + 2;
        else if (gD > this.bakeDeadline) return;
        return cD = this.bake(zD, wD, pD, sD, KD), void 0 !== cD && rD.set(LD, cD), cD
      }
      bake(DD, zD, wD, pD, sD) {
        const KD = DD.vertexAttributes.find((DD => "position" === DD.kind)),
          rD = KD ? function(DD, zD, wD, pD) {
            let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const KD = DD => zD ? zD[wD + DD] : wD + DD,
              rD = DD => null !== sD && [0, 1, 2].some((zD => {
                const wD = KD(DD + zD);
                return wD >= sD[0] && wD < sD[1]
              })),
              LD = [1 / 0, 1 / 0, 1 / 0],
              cD = [-1 / 0, -1 / 0, -1 / 0];
            for (let nD = 0; nD + 2 < pD; nD += 3)
              if (!rD(nD))
                for (let zD = 0; zD < 3; zD++) {
                  const wD = KD(nD + zD);
                  for (let zD = 0; zD < 3; zD++) LD[zD] = Math.min(LD[zD], DD[3 * wD + zD]), cD[zD] = Math.max(cD[zD], DD[3 * wD + zD])
                }
            const gD = Math.max(cD[0] - LD[0], cD[1] - LD[1], cD[2] - LD[2]);
            if (!(gD > 0)) return null;
            const RD = gD / 64,
              AD = [0, 0, 0],
              UD = [0, 0, 0],
              fD = [0, 0, 0];
            for (let nD = 0; nD < 3; nD++) AD[nD] = Math.min(65, Math.ceil((cD[nD] - LD[nD]) / RD) + 1), UD[nD] = LD[nD] - RD / 2, fD[nD] = UD[nD] + AD[nD] * RD;
            const ID = new Uint32Array(Math.ceil(AD[0] * AD[1] * AD[2] / 32)),
              BD = new Float64Array(9),
              GD = [0, 0, 0],
              hD = [0, 0, 0];
            for (let nD = 0; nD + 2 < pD; nD += 3)
              if (!rD(nD)) {
                for (let zD = 0; zD < 3; zD++) {
                  const wD = KD(nD + zD);
                  for (let pD = 0; pD < 3; pD++) BD[3 * zD + pD] = DD[3 * wD + pD]
                }
                for (let DD = 0; DD < 3; DD++) {
                  const zD = Math.min(BD[DD], BD[3 + DD], BD[6 + DD]),
                    wD = Math.max(BD[DD], BD[3 + DD], BD[6 + DD]);
                  GD[DD] = Math.max(0, Math.floor((zD - UD[DD]) / RD - 1e-6)), hD[DD] = Math.min(AD[DD] - 1, Math.floor((wD - UD[DD]) / RD + 1e-6))
                }
                for (let DD = GD[2]; DD <= hD[2]; DD++)
                  for (let zD = GD[1]; zD <= hD[1]; zD++)
                    for (let wD = GD[0]; wD <= hD[0]; wD++)
                      if (Mw(BD, UD[0] + (wD + .5) * RD, UD[1] + (zD + .5) * RD, UD[2] + (DD + .5) * RD, RD / 2)) {
                        const pD = wD + AD[0] * (zD + AD[1] * DD);
                        ID[pD >>> 5] |= 1 << (31 & pD)
                      }
              } return {
              words: ID,
              lo: UD,
              hi: fD,
              cell: RD,
              dims: AD
            }
          }((0, Ac.i)(KD, DD.vertexCount), zD ? DD.indexData : null, wD, pD, sD) : null;
        if (!rD) return null;
        const {
          words: LD,
          ...cD
        } = rD;
        if (this.gridTop + LD.length > Uw) return void(this.gridsFull = !0);
        const gD = this.gridTop;
        return this.gridTop += LD.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * gD, LD), {
          ...cD,
          at: gD
        }
      }
    }
    const fc = Math.cos(1 * Math.PI / 180);

    function Ic(DD, zD) {
      return DD[0] * zD[0] + DD[1] * zD[1] + DD[2] * zD[2] < fc
    }
    async function Bc(DD) {
      const {
        pixels: zD,
        width: wD,
        height: pD
      } = await ks(DD), sD = new Uint8Array(wD * pD);
      for (let KD = 0; KD < sD.length; KD++) sD[KD] = zD[4 * KD + 3];
      return {
        width: wD,
        height: pD,
        alpha: sD
      }
    }
    class Gc {
      constructor(DD, zD) {
        this.device = DD, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Jw.k), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = DD.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = DD.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * ez,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = DD.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [wD, pD, sD] = Jw.o;
        this.volume = DD.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: wD,
            height: pD,
            depthOrArrayLayers: sD
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = DD.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = DD.createBuffer({
          label: "sun-shadow-volume-work",
          size: Jw.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = zD ? new Uc(DD) : null, this.entityStandIn = zD ? null : DD.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var DD, zD;
        const wD = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || wD.push("Lite sun shadow volume pipeline compiling");
        const pD = null !== (DD = null === (zD = this.casters) || void 0 === zD ? void 0 : zD.planesLoading) && void 0 !== DD ? DD : 0;
        return pD > 0 && wD.push(`${pD} Lite sun shadow plane casters loading their textures`), wD
      }
      entries() {
        var DD, zD, wD, pD;
        const sD = Pz.u;
        return [{
          binding: sD.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: sD.dU,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: sD.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: sD.volume,
          resource: this.volumeView
        }, {
          binding: sD.sampler,
          resource: this.volumeSampler
        }, {
          binding: sD.entities,
          resource: {
            buffer: null !== (DD = null === (zD = this.entities) || void 0 === zD ? void 0 : zD.frameBuffer) && void 0 !== DD ? DD : this.entityStandIn
          }
        }, {
          binding: sD.entityGrids,
          resource: {
            buffer: null !== (wD = null === (pD = this.entities) || void 0 === pD ? void 0 : pD.gridBuffer) && void 0 !== wD ? wD : this.entityStandIn
          }
        }]
      }
      prepare(DD, zD, wD) {
        var pD;
        this.entitiesThisFrame = !1;
        const sD = null !== (pD = null === wD || void 0 === wD ? void 0 : wD.sunShadowReach()) && void 0 !== pD ? pD : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!wD || !sD.sunShadow && !sD.airShadow) return void(this.volumeHolds = null);
        if (DD.KU.PDD !== xz) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${DD.KU.PDD}; everything is lit.`)));
        const KD = this.start(DD);
        this.casters.update(DD.Lf, DD.Lf.Uf.length);
        const rD = DD.CU;
        for (let UD = 0; UD < 3; UD++) this.eye[UD] = zD[UD] + rD[UD];
        const LD = (0, Jw.w)(this.eye);
        this.staleNear = LD;
        const cD = DD.KU.EB;
        KD.update(this.eye, ((DD, zD, wD) => cD.QB(DD, zD, wD)), 1);
        const gD = (0, Jw.s)(wD.gDD()),
          RD = KD.eyeChunk,
          AD = this.uniformInts;
        for (let UD = 0; UD < 3; UD++) AD[UD] = RD[UD], AD[4 + UD] = LD[UD];
        this.entitiesThisFrame = null !== this.entities && sD.sunShadow, this.entitiesThisFrame && Bw(this.uniformFloats, 8, zD, gD), null !== this.volumeHolds && (this.castersWritten || Ic(gD, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(LD, gD, RD)
      }
      markStale(DD) {
        const zD = this.staleNear,
          wD = xz,
          pD = [DD.i * wD, DD.j * wD, DD.k * wD];
        for (let KD = 0; KD < 3; KD++)
          if (pD[KD] + wD <= zD[KD] - wD || pD[KD] >= zD[KD] + Jw.o[KD] + wD) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const sD = this.stale;
        for (let KD = 0; KD < sD.length; KD += 4)
          if (sD[KD] === DD.i && sD[KD + 1] === DD.j && sD[KD + 2] === DD.k) return void(sD[KD + 3] = this.swept);
        if (16 === sD.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        sD.push(DD.i, DD.j, DD.k, this.swept)
      }
      writeStale() {
        const DD = this.swept,
          zD = this.stale;
        this.staleAll && DD - this.staleAllSwept >= Jw.g && (this.staleAll = !1, zD.length = 0);
        let wD = 0;
        for (let sD = 0; sD < zD.length; sD += 4)
          if (DD - zD[sD + 3] < Jw.g) {
            for (let DD = 0; DD < 4; DD++) zD[wD + DD] = zD[sD + DD];
            wD += 4
          } zD.length = wD;
        const pD = this.uniformInts;
        pD[3] = this.staleAll ? 5 : wD / 4;
        for (let sD = 0; sD < 4; sD++)
          for (let DD = 0; DD < 3; DD++) pD[16 + 4 * sD + DD] = 4 * sD < wD ? zD[4 * sD + DD] * xz : 0
      }
      writeUniform() {
        const DD = this.uniformInts;
        let zD = this.uniformWritten;
        if (zD) {
          let wD = !0;
          for (let pD = 0; pD < DD.length && wD; pD++) wD = DD[pD] === zD[pD];
          if (wD) return
        }
        zD ??= this.uniformWritten = new Int32Array(DD.length), zD.set(DD), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(DD) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, DD)
      }
      computeVolume(DD, zD, wD) {
        const pD = this.buildVolumePass();
        if (!pD) return void(this.volumeHolds = null);
        const sD = (0, Jw.t)(this.volumeHolds, DD);
        this.volumeHolds = DD;
        const KD = 1 === sD.length && sD[0].size.every(((DD, zD) => DD === Jw.o[zD])),
          rD = this.sweptChunk,
          LD = this.sweptLight,
          cD = zD[0] !== LD[0] || zD[1] !== LD[1] || zD[2] !== LD[2],
          gD = wD[0] !== rD[0] || wD[1] !== rD[1] || wD[2] !== rD[2],
          RD = cD && Ic(zD, LD);
        if ((KD || this.written || gD || RD) && (this.fastLeft = Jw.g), KD || this.written || cD || gD) {
          this.written = !1;
          for (let DD = 0; DD < 3; DD++) rD[DD] = wD[DD], LD[DD] = zD[DD];
          this.sweepLeft = KD ? 0 : Jw.g
        }
        if (KD ? this.swept += Jw.g : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, sD.push(...(0, Jw.z)(DD, this.slice)), this.slice = (this.slice + 1) % Jw.g, this.swept++), 0 === sD.length) return;
        const AD = (0, Jw.C)(this.workData, zD, sD);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const UD = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          fD = UD.beginComputePass({
            label: "sun-shadow-volume"
          });
        fD.setPipeline(pD.pipeline), fD.setBindGroup(Xw.group, pD.bindGroup), fD.dispatchWorkgroups(Math.ceil(AD / Jw.h)), fD.end(), this.device.queue.submit([UD.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const DD = Xw,
          zD = GPUShaderStage.COMPUTE,
          wD = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: DD.uniform,
              visibility: zD,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: DD.dU,
              visibility: zD,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: DD.special,
              visibility: zD,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: DD.work,
              visibility: zD,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: DD.volume,
              visibility: zD,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          pD = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: wD,
            entries: [{
              binding: DD.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: DD.dU,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: DD.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: DD.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: DD.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [wD]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: Vw()
            }),
            entryPoint: "main"
          }
        }).then((DD => {
          this.volumePass = {
            pipeline: DD,
            bindGroup: pD
          }
        }), (DD => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(DD)}`)
        })), null
      }
      start(DD) {
        if (this.window) return this.window;
        const zD = (DD, zD) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * DD, zD)
        };
        this.casters = new rc(((DD, wD) => {
          this.castersWritten = !0, zD(DD, wD)
        }), Bc);
        const wD = new Rc(this.casters, ((DD, zD) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * DD, zD)
        }), zD);
        return wD.encoded = DD => {
          this.markStale(DD)
        }, DD.KU.on("chunkAdded", (DD => {
          wD.chunkAdded(DD)
        })), this.window = wD, wD
      }
    }
    var hc = wD(38678),
      nc = wD(38684);
    const Mc = 0,
      Oc = 3,
      Jc = 4,
      Ec = 5;

    function Qc(DD, zD, wD, pD) {
      DD.drawOffset(zD, pD + Mc), zD[pD + Oc] = DD.drawTime(), wD[pD + Jc] = DD.ring.drawStart(), wD[pD + Ec] = DD.ring.drawCount()
    }
    const Xc = `\n${Gp}\n\nconst MAX_STOPS = ${nc.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${nc.b/4}>,\n\tcolor1: array<vec4f, ${nc.b}>,\n\tcolor2: array<vec4f, ${nc.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${nc.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${nc.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var Vc = wD(41502);
    class Pc {
      constructor(DD, zD, wD, pD) {
        this.device = DD, this.system = zD, this.frameIndex = wD, this.bindings = pD, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Vc.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (DD, zD) => {
          this.device.queue.writeBuffer(this.ring, DD * nc.f * 4, this.system.ring.records, DD * nc.f, (zD - DD) * nc.f)
        };
        const {
          name: sD
        } = zD;
        this.ring = DD.createBuffer({
          label: `particles-${sD}`,
          size: zD.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = DD.createBuffer({
          label: `particles-uniforms-${sD}`,
          size: 4 * nc.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(DD) {
        const zD = (0, Vc.e)(this.system, this.uniformBits, DD);
        zD && (this.uniformBits = zD, this.device.queue.writeBuffer(this.uniforms, 0, zD))
      }
      bind() {
        const {
          system: DD
        } = this, zD = this.texture;
        (0, Vc.m)(DD, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${DD.name}`,
          size: [nc.h, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * nc.h
        }, [nc.h, 1]));
        const wD = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === zD.view && this.boundSampler === zD.sampler && this.boundRamp === wD || (this.boundView = zD.view, this.boundSampler = zD.sampler, this.boundRamp = wD, this.bindGroup = this.device.createBindGroup({
          label: `particles-${DD.name}`,
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
            resource: zD.sampler
          }, {
            binding: 3,
            resource: zD.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: wD
          }]
        }))
      }
      destroy() {
        var DD;
        this.ring.destroy(), this.uniforms.destroy(), null === (DD = this.ramp) || void 0 === DD || DD.destroy()
      }
    }
    class Cc {
      constructor(DD, zD) {
        this.device = DD, this.resources = zD, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, gz.c)();
        const wD = DD.createBindGroupLayout({
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
        this.frameLayout = DD.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = DD.createPipelineLayout({
          bindGroupLayouts: [zz(DD), wD, this.frameLayout]
        }), this.module = DD.createShaderModule({
          label: "particles",
          code: Xc
        });
        const pD = DD.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        DD.queue.writeTexture({
          texture: pD
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: wD,
          rampSampler: DD.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: pD.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (zD, wD) => (this.bindTarget(wD), {
            renderable: this.renderable,
            pipeline: rz(DD, wD),
            draw: DD => wD === this.preparedTarget ? this.draw(DD) : 0
          })
        }
      }
      get JsD() {
        return this.systems.size
      }
      reset() {
        for (const DD of this.systems.keys()) DD.reset()
      }
      describePendingWork() {
        return (0, hc.f)(this.systems.keys(), "Lite")
      }
      EW(DD, zD) {
        const wD = new hc.e(DD, zD, this);
        return this.systems.set(wD, new Pc(this.device, wD, this.allocateFrameIndex(), this.bindings)), wD
      }
      Z6(DD, zD) {
        for (const wD of this.systems.keys()) wD.Z6(DD, zD)
      }
      canDraw(DD) {
        const zD = this.systems.get(DD),
          wD = DD.texture ? this.resources.boundTexture(DD.texture) : null;
        if (!zD || !wD || !this.targetPipelines) return !1;
        if (zD.texture = wD, zD.pipelines.length = 0, !us(DD.blendMode)) return this.warnOnce(`blend:${DD.blendMode}`, `particle blend mode ${DD.blendMode} is not drawn (${DD.name})`), !0;
        const pD = (0, ds.k)(DD.blendMode);
        for (const sD of pD) {
          const DD = this.pipelineFor(sD);
          if (!1 === DD) return zD.pipelines.length = 0, !0;
          DD && zD.pipelines.push(DD)
        }
        return zD.pipelines.length === pD.length
      }
      disposeStopped(DD) {
        DD.dispose()
      }
      remove(DD) {
        const zD = this.systems.get(DD);
        zD && (this.systems.delete(DD), zD.destroy(), this.freeFrameIndices.push(zD.frameIndex))
      }
      prepare(DD) {
        const zD = DD.animationRatio || 1;
        Lz(this.renderable._worldCenter, DD, pz), this.preparedTarget = this.target, this.draws.length = 0;
        let wD = 0;
        for (const pD of this.systems.values()) {
          const DD = pD.system;
          if (!DD.animateIfActive(zD)) continue;
          if (DD.ring.takeUploads(pD.upload), !DD.hasLiveParticles() || 0 === pD.pipelines.length) continue;
          pD.writeUniforms(this.warnOnce), pD.bind();
          const sD = 64 * pD.frameIndex;
          pD.count = DD.ring.drawCount(), Qc(DD, this.frameData, this.frameBits, sD), wD = Math.max(wD, sD + 64), this.draws.push(pD)
        }
        wD > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, wD)
      }
      draw(DD) {
        let zD = 0,
          wD = null;
        for (const pD of this.draws) {
          DD.setBindGroup(1, pD.bindGroup), DD.setBindGroup(2, this.frameBindGroup, [256 * pD.frameIndex]);
          for (const sD of pD.pipelines) sD !== wD && (DD.setPipeline(sD), wD = sD), DD.draw(4, pD.count), zD++
        }
        return zD
      }
      bindTarget(DD) {
        this.target = DD;
        const zD = `${DD._colorFormat}|${DD._depthStencilFormat}|${DD._depthCompare}|${DD._sampleCount}`;
        let wD = this.pipelines.get(zD);
        wD || (wD = new Map, this.pipelines.set(zD, wD)), this.targetPipelines = wD
      }
      pipelineFor(DD) {
        var zD;
        const wD = this.targetPipelines,
          pD = wD.get(DD);
        if (void 0 !== pD) return pD;
        wD.set(DD, null);
        const sD = this.target,
          KD = DD === ds.e,
          rD = null !== (zD = sD._depthCompare) && void 0 !== zD ? zD : wz;
        return this.device.createRenderPipelineAsync({
          label: `particles-${DD}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: YD({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: KD ? 1 : 0
            }
          }, sD, vs((0, ds.h)(DD))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: sD._depthStencilFormat ? {
            format: sD._depthStencilFormat,
            depthCompare: rD,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: sD._sampleCount
          }
        }).then((zD => {
          wD.set(DD, zD)
        }), (zD => {
          wD.set(DD, !1), console.error("Lite particle pipeline failed", zD), Ys("particles", `blend-${DD}`, zD)
        })), null
      }
      allocateFrameIndex() {
        const DD = this.freeFrameIndices.pop();
        if (void 0 !== DD) return DD;
        const zD = this.nextFrameIndex++;
        if (64 * (zD + 1) > this.frameData.length) {
          const DD = new Float32Array(2 * this.frameData.length);
          DD.set(this.frameData), this.frameData = DD, this.frameBits = new Uint32Array(DD.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return zD
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
    class xc {
      constructor(DD, zD, wD, pD, sD) {
        this.lite = DD, this.canvas = zD, this.info = wD, this.resources = sD, this.OpD = !1, this.needPOTTextures = !1, this.P_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = zD.width, this.renderHeight = zD.height, this.caps = {
          maxTextureSize: pD.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: pD.maxTextureArrayLayers
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
      setSize(DD, zD) {
        if (this.renderWidth === DD && this.renderHeight === zD) return !1;
        const wD = this.renderWidth,
          pD = this.renderHeight;
        this.renderWidth = DD, this.renderHeight = zD;
        try {
          (0, yD.s)(this.lite, DD, zD)
        } catch (sD) {
          if (sD instanceof DOMException && "InvalidStateError" === sD.name) {
            this.renderWidth = wD, this.renderHeight = pD;
            try {
              (0, yD.s)(this.lite, wD, pD)
            } catch {
              this.canvas.width = wD, this.canvas.height = pD
            }
            return console.warn("WebGPU could not allocate render targets for resize", DD, zD, sD.message), !1
          }
          throw sD
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
      aJ() {
        const DD = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : DD - this.lastFrameTime, this.lastFrameTime = DD
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(DD, zD) {
        const wD = document.createElement("canvas");
        return wD.width = DD, wD.height = zD, wD
      }
      b_(DD, zD) {
        var wD;
        return null !== (wD = this.resources.b_.get(DD)) && void 0 !== wD ? wD : new oD(this.resources, DD, zD)
      }
      atlasArray(DD, zD, wD) {
        return this.resources.atlasArray(DD, zD, wD)
      }
    }
    class Tc {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(DD) {
        this.fov = DD.fov, this.nearPlane = DD.near, this.farPlane = DD.far;
        const zD = DD.worldMatrix;
        for (let wD = 0; wD < 16; wD++)
          if (this.worldMatrix[wD] !== zD[wD]) return this.worldMatrix.set(zD), void this.worldMatrixVersion++
      }
    }
    class bc {
      constructor(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
        let RD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = DD, this.oB = zD, this.sceneTask = wD, this.gpuDevice = pD, this.terrain = sD, this.meshes = KD, this.particles = rD, this.resources = LD, this.sunShadow = RD, this.FzD = void 0, this.backendName = "WebGPU (Lite)", this.J9 = void 0, this.modelMeshes = void 0, this.camera = new Tc, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new mD(pD.lost), this.deviceLost = this.refusals.deviceLost, this.FzD = new xc(DD, cD, gD, pD.limits, LD), (0, CD.O)({
          Qg: DD => {
            jD(DD) && LD.textureSlot(DD)
          },
          loaded: DD => jD(DD) ? LD.textureLoaded(DD) : null,
          canvasUpdated: (DD, zD, wD) => {
            jD(DD) && LD.canvasUpdated(DD, zD, wD)
          }
        }), this.J9 = KD.J9, this.modelMeshes = KD.modelMeshes, zD.camera = this.camera
      }
      get castsEntitySunShadows() {
        var DD, zD;
        return null !== (DD = null === (zD = this.sunShadow) || void 0 === zD ? void 0 : zD.tracesEntities) && void 0 !== DD && DD
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(DD) {
        this.modelMeshes.attach(DD.model, DD.sceneMirror);
        const zD = DD.oB;
        this.setClearColour(zD.clearColor.r, zD.clearColor.g, zD.clearColor.b), zD.draw = () => {
          this.drawFrame(DD, zD)
        }
      }
      render(DD) {
        if (!this.refusals.lost) {
          try {
            this.FzD.aJ(), DD.oB.render()
          } catch (zD) {
            throw this.refusals.frameFailed(zD), zD
          }
          this.refusals.frameDrawn()
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var DD, zD, wD, pD;
        const sD = [...this.particles.describePendingWork(), ...null !== (DD = null === (zD = this.sunShadow) || void 0 === zD ? void 0 : zD.describePendingWork()) && void 0 !== DD ? DD : []],
          KD = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (wD = this.terrain.sceneDepth) && void 0 !== wD && wD.compiling ? 1 : 0) + (null !== (pD = this.terrain.shadowMask) && void 0 !== pD && pD.compiling ? 1 : 0);
        KD > 0 && sD.push(`${KD} Lite pipelines compiling`);
        const rD = this.terrain.buffersAwaitingVerdict;
        rD > 0 && sD.push(`${rD} Lite terrain buffers awaiting their out-of-memory verdict`);
        const LD = this.resources.texturesLoading;
        return LD > 0 && sD.push(`${LD} Lite textures loading`), sD
      }
      prepareTexture(DD) {
        return null !== this.resources.boundTexture(DD) || this.resources.textureFailed(DD)
      }
      drawFrame(DD, zD) {
        var wD, pD, sD, KD, rD, LD;
        const cD = BL(DD);
        this.camera.copyFromView(cD), this.setClearColour(cD.clearColour[0], cD.clearColour[1], cD.clearColour[2]), null === (wD = this.sunShadow) || void 0 === wD || wD.prepare(DD.AU, cD.eye, null !== (pD = DD.AU.KI) && void 0 !== pD ? pD : null), this.terrain.prepare(DD, cD), null === (sD = this.terrain.sceneDepth) || void 0 === sD || sD.setPlanes(cD.near, cD.far), null === (KD = this.terrain.shadowMask) || void 0 === KD || KD.prepare(cD), DL(this.sceneTask), this.meshes.prepare(zD, cD, DD.model.earthSky, null !== (rD = DD.AU.KI) && void 0 !== rD ? rD : null), this.particles.prepare(cD);
        const gD = performance.now();
        this.resources.flushUploads(), null === (LD = this.sunShadow) || void 0 === LD || LD.traceEntities(this.meshes);
        try {
          (0, yD.r)(this.engine, this.lastFrameTime > 0 ? gD - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = gD
      }
      setClearColour(DD, zD, wD) {
        const pD = this.oB.clearColor;
        pD.r = DD, pD.g = zD, pD.b = wD, pD.a = 1
      }
    }
    const jc = "WebGPU device lost while Lite was starting";

    function dc(DD, zD) {
      return "object" === typeof DD && null !== DD ? Object.assign(DD, {
        startStep: zD
      }) : DD
    }
    async function Sc(DD, zD) {
      const wD = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!wD) throw dc(new Error("No WebGPU adapter"), "no_adapter");
      const pD = wD.info,
        sD = {
          vendor: (null === pD || void 0 === pD ? void 0 : pD.vendor) || "unknown vendor",
          renderer: (null === pD || void 0 === pD ? void 0 : pD.architecture) || "unknown renderer",
          version: (null === pD || void 0 === pD ? void 0 : pD.description) || "unknown version"
        },
        KD = function(DD) {
          const zD = {};
          for (const wD in DD.limits) {
            const pD = DD.limits[wD];
            "number" === typeof pD && (zD[wD] = pD)
          }
          return zD
        }(wD);
      let rD;
      DD.style.background = "black";
      try {
        rD = await (0, yD.g)(DD, {
          msaaSamples: zD.iwD ? 4 : 1,
          requiredLimits: KD,
          alphaMode: "premultiplied"
        })
      } catch (RD) {
        throw dc(RD, "#47" === (null === (LD = RD) || void 0 === LD ? void 0 : LD.message) ? "no_adapter" : "device")
      }
      var LD;
      null !== zD.bufferSize && (0, yD.s)(rD, zD.bufferSize.width, zD.bufferSize.height);
      const cD = function(DD) {
        return DD._device
      }(rD);
      let gD = null;
      cD.lost.then((DD => {
        gD = DD, console.error(`WebGPU device lost (${DD.reason}): ${DD.message}`)
      }));
      try {
        const wD = await async function(DD, zD, wD, pD, sD, KD) {
          const rD = (0, kD.d)(DD),
            LD = new Yr(DD, zD),
            cD = new HL(zD),
            gD = new dr(zD, LD, (DD => function(DD, zD) {
              for (const pD of qD(DD)) {
                var wD;
                if (pD._targetSignature === zD) return null !== (wD = pD._sceneBG) && void 0 !== wD ? wD : null
              }
              return null
            }(rD, DD))),
            RD = new Cc(zD, LD);
          for (const fD of function(DD, zD, wD) {
              return [zD.opaqueRenderable, DD.opaqueRenderable, DD.skyLastRenderable, wD.renderable, zD.transparentRenderable, DD.transparentRenderable, DD.frontRenderable]
            }(gD, cD, RD)) HD(rD, fD);
          const AD = function(DD) {
            for (const zD of qD(DD))
              if ("oB" === zD.name) return zD;
            throw new Error("Lite: the scene has no render task named scene")
          }(rD);
          sD && cD.installSceneDepth(AD, DD);
          const UD = KD ? new Gc(zD, KD.entities) : null;
          cD.sunShadow = UD, UD && null !== KD && void 0 !== KD && KD.entities && (cD.shadowMask = new bL(zD, AD, DD, cD));
          return gD.sunShadow = UD, await (0, kD.f)(rD), new bc(DD, rD, AD, zD, cD, gD, RD, LD, wD, pD, UD)
        }(rD, cD, DD, sD, zD.sceneDepth, zD.sunShadow);
        if (null !== gD) {
          const {
            reason: DD,
            message: zD
          } = gD;
          throw Object.assign(new Error(`${jc} (${DD}): ${zD}`), {
            fallbackReason: jc
          })
        }
        return wD
      } catch (RD) {
        throw cD.destroy(), null === gD ? RD : dc(RD, "device")
      }
    }
  },
  40617: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => fD,
      E: () => ID,
      e: () => sD,
      i: () => pD,
      j: () => UD,
      m: () => RD,
      n: () => GD,
      q: () => KD,
      u: () => LD,
      v: () => cD,
      x: () => rD,
      z: () => BD
    });
    const pD = 3,
      sD = 0,
      KD = 1,
      rD = 2,
      LD = {
        uniform: 3,
        dU: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      cD = 10,
      gD = "BloxdPackInputs",
      RD = "bloxdPackInputs",
      AD = [{
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
      UD = 80;

    function fD() {
      const DD = AD.map((DD => {
        let {
          name: zD,
          type: wD
        } = DD;
        return `    ${zD}: ${wD},\n`
      })).join("");
      return `struct ${gD} {\n${DD}}\n@group(${pD}) @binding(${sD}) var<uniform> ${RD}: ${gD};\n`
    }

    function ID(DD, zD) {
      const wD = new DataView(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, UD),
        [pD, sD, KD, rD, LD, cD] = AD;
      wD.setFloat32(pD.offset, zD.seconds, !0), wD.setUint32(sD.offset, zD.lit ? 1 : 0, !0);
      for (let gD = 0; gD < 3; gD++) wD.setInt32(KD.offset + 4 * gD, zD.renderOffset[gD], !0), wD.setFloat32(rD.offset + 4 * gD, zD.gDD[gD], !0), wD.setFloat32(LD.offset + 4 * gD, zD.eyePosition[gD], !0), wD.setFloat32(cD.offset + 4 * gD, zD.shadowDirection[gD], !0)
    }

    function BD(DD) {
      const zD = new Uint32Array(Math.max(1, DD.length));
      return DD.forEach(((DD, wD) => {
        let {
          id: pD,
          rotation: sD
        } = DD;
        zD[wD] = 65535 & pD | (3 & sD) << 16
      })), zD
    }
    const GD = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);