export const id = 261;
export const ids = [261];
export const modules = {
  40674: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => oD,
      f: () => bD,
      j: () => fD,
      k: () => wD
    });
    var ID = cD(36613),
      pD = cD(38084),
      iD = cD(38076);

    function fD(DD, CD, cD, ID) {
      const pD = iD.i;
      CD.fill(0), DD.gravity.toArray(CD, pD.gravity), DD.colorDead.toArray(CD, pD.colorDead), cD[pD.ramp] = DD.useRampGradients ? 1 : 0;
      const fD = DD.getColorGradients(),
        bD = yD(DD, fD, "colour", ID);
      cD[pD.colorCount] = bD;
      for (let iD = 0; iD < bD; iD++) {
        var QD;
        const DD = fD[MD(fD, iD)];
        CD[pD.colorPositions + iD] = DD.gradient, DD.color1.toArray(CD, pD.color1 + 4 * iD), (null !== (QD = DD.color2) && void 0 !== QD ? QD : DD.color1).toArray(CD, pD.color2 + 4 * iD)
      }
      const wD = DD.getVelocityGradients(),
        SD = yD(DD, wD, "lb", ID);
      cD[pD.velocityCount] = SD;
      for (let iD = 0; iD < SD; iD++) ND(CD, pD.lb + 4 * iD, wD[MD(wD, iD)]);
      const BD = DD.useRampGradients ? DD.getColorRemapGradients() : null,
        tD = yD(DD, BD, "colour remap", ID);
      cD[pD.remapCount] = tD;
      for (let iD = 0; iD < tD; iD++) ND(CD, pD.remap + 4 * iD, BD[MD(BD, iD)])
    }

    function bD() {
      return {
        key: [],
        texels: new Uint8Array(4 * iD.e)
      }
    }
    const QD = [];

    function wD(DD, CD) {
      return SD(DD, QD), !vD(QD, CD.key) && (CD.key.length = 0, CD.key.push(...QD), CD.key.length > 0 && function(DD, CD) {
        for (let cD = 0; cD < iD.e; cD++) pD.k.GetCurrentGradient(cD / iD.e, DD, ((DD, CD, cD) => {
          ID.Color3.LerpToRef(DD.color, CD.color, cD, BD)
        })), CD[4 * cD] = 255 * BD.r, CD[4 * cD + 1] = 255 * BD.g, CD[4 * cD + 2] = 255 * BD.b, CD[4 * cD + 3] = 255
      }(DD.getRampGradients(), CD.texels), !0)
    }

    function SD(DD, CD) {
      CD.length = 0;
      const cD = DD.useRampGradients ? DD.getRampGradients() : null;
      if (null !== cD && void 0 !== cD && cD.length) {
        CD.push(cD.length);
        for (const DD of cD) CD.push(DD.gradient, DD.color.r, DD.color.g, DD.color.b)
      }
    }
    const BD = new ID.Color3;

    function yD(DD, CD, cD, ID) {
      return CD ? CD.length > iD.b ? (ID(`particleStops:${cD}`, `GPU particles use the first 2 and last ${iD.b-2} of more than ${iD.b} ${cD} gradient stops (${DD.name})`), iD.b) : CD.length : 0
    }

    function MD(DD, CD) {
      return CD < 2 || DD.length <= iD.b ? CD : DD.length - iD.b + CD
    }
    const tD = new Float32Array(iD.f),
      ZD = new Uint32Array(tD.buffer);

    function oD(DD, CD, cD) {
      return fD(DD, tD, ZD, cD), CD && vD(ZD, CD) ? null : ZD.slice()
    }

    function vD(DD, CD) {
      if (DD.length !== CD.length) return !1;
      for (let cD = 0; cD < DD.length; cD++)
        if (DD[cD] !== CD[cD]) return !1;
      return !0
    }

    function ND(DD, CD, cD) {
      var ID;
      DD[CD] = cD.gradient, DD[CD + 1] = cD.factor1, DD[CD + 2] = null !== (ID = cD.factor2) && void 0 !== ID ? ID : cD.factor1
    }
  },
  40670: (DD, CD, cD) => {
    function ID() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const CD = new Set;
      return (cD, ID) => {
        CD.has(cD) || (CD.add(cD), console.warn(DD + ID))
      }
    }
    cD.d(CD, {
      e: () => ID
    })
  },
  40721: (DD, CD, cD) => {
    cD.d(CD, {
      createLiteRendererAsync: () => VQ,
      liteBabylonBackend: () => GD,
      setPipelineFailureHook: () => sp
    });
    var ID = cD(36613),
      pD = cD(36985),
      iD = cD(37282),
      fD = cD(36572),
      bD = cD(37295);
    class QD extends bD.d {
      constructor() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        super(...CD), this.color = new ID.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: CD[0].hq().getUniqueId(),
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
    const wD = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      SD = DD => 1 << wD.indexOf(DD),
      BD = SD("VERTEXCOLOR"),
      yD = SD("INSTANCES"),
      MD = SD("THIN_INSTANCES"),
      tD = SD("INSTANCESCOLOR"),
      ZD = SD("FOG"),
      oD = SD("LITE_FRONT_LAYER");

    function vD(DD, CD, cD, ID) {
      let pD = 0;
      return DD.isVerticesDataPresent("color") && (pD |= BD), "none" !== CD && (pD |= yD), "thin" === CD && (pD |= MD, DD.isVerticesDataPresent("instanceColor") && (pD |= tD)), ID.fogEnabled && DD.applyFog && 0 !== ID.fogMode && (pD |= ZD), cD >= 1 && (pD |= oD), pD
    }

    function ND(DD, CD) {
      DD.updateColor4("color", CD.color, CD.alpha)
    }
    var gD = cD(37227),
      XD = cD(36780),
      mD = cD(36647),
      nD = cD(36539),
      OD = cD(37211),
      PD = cD(37222),
      HD = cD(36561),
      UD = cD(36568),
      xD = cD(36579);
    const qD = nD.e.GLSL;
    class JD {
      constructor(DD, CD) {
        this.name = DD, this.wo = CD, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Aq = {
          addOnce: DD => {
            this.disposers.push(DD)
          }
        }, this.uniqueId = CD.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      hq() {
        return this.wo
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
        return (0, HD.F)(this.model, DD.visibility, DD.hasVertexAlpha)
      }
      needAlphaTestingForMesh(DD) {
        return (0, HD.H)(this.model, DD.visibility, DD.hasVertexAlpha)
      }
      dispose() {
        (0, XD.l)(this);
        for (const DD of this.disposers.splice(0)) DD()
      }
      get model() {
        return (0, HD.N)(this)
      }
    }
    const KD = new WeakSet;

    function aD(DD) {
      return KD.has(DD)
    }

    function VD(DD) {
      KD.add(DD)
    }
    const zD = {
      create: (DD, CD) => ((0, mD.r)(DD, new JD(DD.name, CD)), UD.d.defines()),
      write: () => {},
      addFeature: (DD, CD) => {
        const cD = DD.mirror;
        CD.feature === PD.i && CD.state.dirLightCount > 0 && (DD.disableLighting = !0, (0, HD.K)(DD)), "BLOXD_LIGHTING" in CD.defines && (0, XD.j)(cD), CD.feature === OD.k && ((0, gD.f)(CD.state, qD), function(DD, CD) {
          const cD = DD.hq().DZ();
          CD.textures.forEach(((ID, pD) => {
            setTimeout((() => {
              var iD, fD;
              const {
                url: bD
              } = ID.source;
              cD.atlasArray(bD, null !== (iD = null === (fD = CD.sources.pixels) || void 0 === fD ? void 0 : fD[pD]) && void 0 !== iD ? iD : null, CD.sources.layerWidth).then((cD => {
                (0, gD.b)(DD, CD, pD, cD, cD.layerWidth, cD.layers, qD)
              })).catch((DD => {
                console.error(`Failed to build texture array for atlas ${pD}`, DD)
              }))
            }))
          }))
        }(cD, CD.state))
      },
      texture: (DD, CD, cD) => {
        let {
          data: ID,
          sets: pD
        } = cD;
        var iD;
        (VD(DD), ID) && (DD.uvSet = null !== (iD = null === pD || void 0 === pD ? void 0 : pD.coordinatesIndex) && void 0 !== iD ? iD : 0, (0, mD._)(DD.matrix, null !== pD && void 0 !== pD ? pD : {}))
      },
      cube: VD,
      canvas: (DD, CD, cD) => {
        let {
          width: ID,
          height: pD,
          mipmaps: iD,
          samplingMode: fD = xD.j.trilinear,
          hasAlpha: bD = !1,
          wrap: QD = xD.e.clamp
        } = cD;
        const wD = DD.DZ().createCanvas(ID, pD),
          SD = new xD.k("2d", {
            kind: "canvas",
            width: ID,
            height: pD,
            canvas: wD
          }, {
            samplingMode: fD,
            wrapU: QD,
            wrapV: QD,
            noMipmap: !iD,
            invertY: !0
          });
        return SD.hasAlpha = bD, VD(SD), SD
      }
    };
    var jD = cD(36810),
      lD = cD(36473);
    class LD {
      constructor(DD, CD, cD) {
        this.engine = DD, this.clearColor = CD, this.ambientColor = cD, this.onBeforeRenderObservable = new lD.c, this.onBeforeCameraRenderObservable = new lD.c, this.onAfterRenderObservable = new lD.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.iH = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      DZ() {
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
        const CD = this.pending.indexOf(DD); - 1 !== CD && this.pending.splice(CD, 1)
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

    function TD() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const GD = {
      BID: TD,
      wID: (DD, CD) => {
        const cD = new LD(DD.engine, ID.c.FromArray(CD.clearColor), ID.Color3.FromArray(CD.ambientColor));
        (0, fD.d)(zD, cD), DD.wo = cD,
          function(DD, CD) {
            const cD = Object.assign((0, jD.h)(DD, "camera"), {
              layerMask: 268435455
            });
            DD.model.nodes.setWorldSource(cD.row, DD.model.view.worldMatrix), DD.camera = CD.activeCamera = cD
          }(DD, cD), (0, pD.h)(DD, ((DD, CD, cD) => (0, iD.k)(DD, CD, cD, bD.d)))
      },
      pID: () => {},
      setBabylonFog: () => {},
      yID: TD,
      oID: () => {},
      linesFromArrays: (DD, CD, cD) => (0, iD.k)(DD, CD, cD, QD),
      Bo: () => {},
      ZID: TD
    };
    var RD = cD(40790),
      kD = cD(40806);
    class dD {
      constructor(DD) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const CD = new Promise((DD => {
          this.refused = DD
        }));
        this.deviceLost = Promise.race([DD, CD])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(DD) {
        (function(DD) {
          const {
            name: CD,
            message: cD
          } = null !== DD && void 0 !== DD ? DD : {};
          return "InvalidStateError" === CD && "string" === typeof cD && cD.startsWith("GPUDevice.")
        })(DD) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: DD.message,
          framesRefused: !0
        }))
      }
    }
    class YD {
      constructor(DD) {
        this.resources = DD, this.matrixKey = {
          LB: 0
        }, this.attributesKey = {
          LB: 0
        }, this.inputs = Object.create(null);
        for (let CD = 0; CD < 4; CD++) this.inputs[`world${CD}`] = new ED(this.matrixKey, 16 * CD, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(DD, CD) {
        this.resources.vertexBufferCreated(this.matrixKey, DD, !0), CD && this.resources.vertexBufferCreated(this.attributesKey, CD, !0)
      }
    }
    class WD extends YD {
      constructor(DD, CD, cD) {
        super(DD), this.mesh = CD, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const ID = this.inputs;
        let pD = 0;
        for (const {
            size: fD
          }
          of cD) pD += fD;
        for (const {
            name: fD,
            offset: bD,
            size: QD,
            type: wD
          }
          of cD) ID[fD] = new ED(this.attributesKey, 4 * bD, 4 * pD, QD, !0, wD);
        this.rowStride = pD, DD.Vr.set(CD, this);
        const iD = CD.isVerticesDataPresent;
        CD.isVerticesDataPresent = (DD, cD) => DD in ID || iD.call(CD, DD, cD)
      }
      attach(DD, CD) {
        this.matrices = DD, this.attributes = CD, this.bind(DD, CD), this.mirror(DD, DD.length, DD.length / 16)
      }
      Y5(DD) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, DD ? 64 * DD : void 0)
      }
      U1() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(DD, CD) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * DD, 16 * CD)
      }
      attributeRows(DD, CD) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, DD * this.rowStride, CD * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(DD, CD, cD) {
        const ID = this.mesh._thinInstanceDataStorage;
        ID.matrixData = DD, ID.matrixBufferSize = CD, ID.worldMatrices = null, ID.instancesCount = cD
      }
    }
    class sD extends YD {
      constructor(DD, CD, cD) {
        var ID, pD, iD, fD;
        super(DD), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (ID = null === cD || void 0 === cD ? void 0 : cD.interleavedKinds) && void 0 !== ID ? ID : null, this.offsets = null !== (pD = null === cD || void 0 === cD ? void 0 : cD.interleavedOffsets) && void 0 !== pD ? pD : [], this.rowStride = null !== (iD = null === cD || void 0 === cD ? void 0 : cD.interleavedRowStride) && void 0 !== iD ? iD : 0, null === (fD = this.layout) || void 0 === fD || fD.forEach(((DD, CD) => {
          this.inputs[DD] = new ED(this.attributesKey, 4 * this.offsets[CD], 4 * this.rowStride, cD.strides[DD])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), DD.batchUploads.set(CD, this), CD.Aq.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(DD) {
        const CD = this.packedBatch;
        return CD.renderSelf ? 0 === DD ? this.packedSource : CD.instances[DD - 1] : CD.instances[DD]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(DD, CD, cD, ID) {
        const pD = (CD.renderSelf ? 1 : 0) + CD.rows.length;
        if (this.frame = ID, this.count = pD, this.packedSource = DD, this.packedBatch = CD, 0 === pD) return;
        if (DD.getWorldMatrix(), 16 * pD > this.matrices.length) {
          let DD = this.matrices.length / 16;
          for (; DD < pD;) DD *= 2;
          this.matrices = new Float32Array(16 * DD), this.attributes &&= new Float32Array(DD * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let iD = 0;
        CD.renderSelf && this.packRow(iD++, DD, CD.row, cD);
        for (let fD = 0; fD < CD.rows.length; fD++) this.packRow(iD++, CD.instances[fD], CD.rows[fD], cD);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * pD), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, pD * this.rowStride)
      }
      packRow(DD, CD, cD, ID) {
        const pD = this.matrices;
        if (cD < 0) pD.set(CD.getWorldMatrix().m, 16 * DD);
        else
          for (let wD = 0; wD < 16; wD++) pD[16 * DD + wD] = ID[16 * cD + wD];
        const iD = this.attributes;
        if (!iD) return;
        const fD = CD.qJ,
          bD = this.layout;
        for (let wD = 0; wD < bD.length; wD++) {
          var QD;
          const CD = null !== (QD = fD[bD[wD]]) && void 0 !== QD ? QD : 0,
            cD = DD * this.rowStride + this.offsets[wD];
          CD.toArray ? CD.toArray(iD, cD) : CD.copyToArray ? CD.copyToArray(iD, cD) : iD[cD] = CD
        }
      }
    }
    class ED {
      constructor(DD, CD, cD, ID) {
        let pD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = DD, this.byteOffset = CD, this.byteStride = cD, this.size = ID, this.instanced = pD, this.type = iD, this.normalized = fD
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
    const eD = "CANVAS_ALPHA_ONE",
      uD = `override ${eD}: bool = false;`,
      hD = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function rD(DD, CD, cD) {
      var ID;
      let pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const iD = null !== (ID = CD._colorFormat) && void 0 !== ID ? ID : "bgra8unorm",
        fD = pD ? 15 : 0;
      return cD ? {
        ...DD,
        targets: [{
          format: iD,
          blend: {
            color: cD,
            alpha: hD
          },
          writeMask: fD
        }]
      } : {
        ...DD,
        constants: {
          ...DD.constants,
          [eD]: 1
        },
        targets: [{
          format: iD,
          writeMask: fD
        }]
      }
    }

    function AD(DD, CD) {
      DD._renderables.push(CD)
    }

    function FD(DD) {
      var CD, cD;
      return null !== (CD = null === (cD = DD._frameGraph) || void 0 === cD ? void 0 : cD._tasks) && void 0 !== CD ? CD : []
    }

    function DC(DD) {
      return DD._currentEncoder
    }

    function CC(DD) {
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
    const cC = "greater-equal",
      IC = 2e5,
      pC = 1e5,
      iC = new WeakMap;

    function fC(DD, CD) {
      let cD = iC.get(DD);
      if (!cD) {
        cD = {
          module: DD.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, iC.set(DD, cD)
      }
      const ID = `${CD._colorFormat}|${CD._depthStencilFormat}|${CD._sampleCount}`;
      let pD = cD.pipelines.get(ID);
      if (!pD) {
        var iD;
        const {
          module: fD
        } = cD;
        pD = DD.createRenderPipeline({
          label: `placeholder ${ID}`,
          layout: DD.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: fD,
            entryPoint: "v"
          },
          fragment: {
            module: fD,
            entryPoint: "f",
            targets: [{
              format: null !== (iD = CD._colorFormat) && void 0 !== iD ? iD : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: CD._depthStencilFormat ? {
            format: CD._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: CD._sampleCount
          }
        }), cD.pipelines.set(ID, pD)
      }
      return pD
    }

    function bC(DD, CD, cD) {
      const ID = CD.eye,
        pD = CD.viewMatrix;
      DD[0] = ID[0] + pD[2] * cD, DD[1] = ID[1] + pD[6] * cD, DD[2] = ID[2] + pD[10] * cD
    }
    var QC = cD(37342),
      wC = cD(40670),
      SC = cD(36553);
    const BC = Math.PI,
      yC = BC / 1.95,
      MC = [5e-4 / 94, 125e-7, 5e-4 / 18],
      tC = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((DD => {
        let [CD, cD] = DD;
        return .434 * BC * Math.pow(2 * BC / CD, 2) * cD
      }));

    function ZC(DD, CD, cD) {
      const {
        up: ID,
        mieDirectionalG: pD
      } = DD, iD = 1 - NC(1 - Math.exp(CD[1] / 45e4), 0, 1), fD = DD.rayleigh - (1 - iD), bD = Math.hypot(CD[0], CD[1], CD[2]), QD = bD > 0 ? 1 / bD : 0, wD = cD.sunDir;
      for (let MD = 0; MD < 3; MD++) wD[MD] = CD[MD] * QD;
      const SD = wD[0] * ID[0] + wD[1] * ID[1] + wD[2] * ID[2],
        BD = 1e3 * Math.max(0, 1 - Math.exp(-(yC - Math.acos(NC(SD, -1, 1))) / 1.5));
      cD.sunE = BD;
      const yD = .2 * DD.turbidity * 1e-17 * DD.mieCoefficient;
      for (let MD = 0; MD < 3; MD++) {
        const DD = MC[MD] * fD,
          CD = tC[MD] * yD,
          ID = BD / (DD + CD);
        cD.inScatterR[MD] = DD * ID, cD.inScatterM[MD] = CD * ID, cD.extinctionBeta[MD] = 8400 * DD + 1250 * CD
      }
      return cD.sunsetMix = NC(Math.pow(1 - SD, 5), 0, 1), cD.sunDiscE = 19e3 * BD, cD.mieScale = (1 - pD * pD) / (4 * BC), cD.mieBase = 1 + pD * pD, cD.mieSlope = 2 * pD, cD
    }
    const oC = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const vC = 1 / function(DD) {
      const {
        A: CD,
        B: cD,
        C: ID,
        D: pD,
        E: iD,
        F: fD
      } = oC;
      return (DD * (CD * DD + ID * cD) + pD * iD) / (DD * (CD * DD + cD) + pD * fD) - iD / fD
    }(1e3);

    function NC(DD, CD, cD) {
      return Math.min(Math.max(DD, CD), cD)
    }
    const gC = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function XC(DD, CD) {
      const cD = new Map(CD),
        ID = [],
        pD = [],
        iD = () => 0 === pD.length || pD[pD.length - 1].active;
      let fD = null;
      const bD = () => {
        const DD = [...cD].filter((DD => {
            let [, CD] = DD;
            return !0 !== CD
          })),
          CD = DD.map((DD => {
            let [CD] = DD;
            return CD
          })).join("|");
        fD = DD.length ? new RegExp(`\\b(${CD})\\b`, "g") : null
      };
      bD();
      for (const QD of DD.split("\n")) {
        const DD = gC.exec(QD);
        if (!DD) {
          iD() && ID.push(fD ? mC(QD, fD, cD) : QD);
          continue
        }
        const CD = DD[1],
          wD = DD[2].trim();
        if ("ifdef" === CD || "ifndef" === CD || "if" === CD) {
          const DD = iD(),
            ID = "if" === CD ? nC(wD, cD) : cD.has(wD) === ("ifdef" === CD);
          pD.push({
            active: DD && ID,
            parentActive: DD,
            taken: ID
          })
        } else if ("elif" === CD || "else" === CD) {
          const DD = pD[pD.length - 1];
          if (!DD) throw new Error(`#${CD} without #if`);
          const ID = !DD.taken && ("else" === CD || nC(wD, cD));
          DD.active = DD.parentActive && ID, DD.taken = DD.taken || ID
        } else if ("endif" === CD) {
          if (!pD.pop()) throw new Error("#endif without #if")
        } else if (iD()) {
          const [DD, ...ID] = wD.split(/\s+/);
          "undef" === CD ? cD.delete(DD) : cD.set(DD, !ID.length || ID.join(" ")), bD()
        }
      }
      if (pD.length) throw new Error("Unterminated #if");
      return ID.join("\n")
    }

    function mC(DD, CD, cD) {
      return DD.replace(CD, (DD => {
        const CD = cD.get(DD);
        return "string" === typeof CD ? CD : DD
      }))
    }

    function nC(DD, CD) {
      var cD;
      const ID = null !== (cD = DD.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== cD ? cD : [];
      let pD = 0;
      const iD = () => ID[pD],
        fD = () => ID[pD++],
        bD = DD => {
          const cD = /^\d/.test(DD) ? DD : CD.get(DD);
          return "string" === typeof cD ? parseInt(cD) : Number.NaN
        },
        QD = () => {
          const DD = fD();
          if ("!" === DD) return !QD();
          if ("(" === DD) {
            const DD = SD();
            return fD(), DD
          }
          if ("defined" === DD) {
            const DD = "(" === iD();
            DD && fD();
            const cD = fD();
            return DD && fD(), CD.has(cD)
          }
          const cD = iD();
          if ("==" === cD || "!=" === cD || ">" === cD || "<" === cD || ">=" === cD || "<=" === cD) {
            fD();
            const CD = bD(DD),
              ID = bD(fD());
            if (Number.isNaN(CD) || Number.isNaN(ID)) return !1;
            switch (cD) {
              case "==":
                return CD === ID;
              case "!=":
                return CD !== ID;
              case ">":
                return CD > ID;
              case "<":
                return CD < ID;
              case ">=":
                return CD >= ID;
              default:
                return CD <= ID
            }
          }
          return CD.has(DD)
        },
        wD = () => {
          let DD = QD();
          for (;
            "&&" === iD();) {
            fD();
            const CD = QD();
            DD = DD && CD
          }
          return DD
        },
        SD = () => {
          let DD = wD();
          for (;
            "||" === iD();) {
            fD();
            const CD = wD();
            DD = DD || CD
          }
          return DD
        },
        BD = SD();
      if (pD !== ID.length) throw new Error(`Cannot evaluate #if ${DD}`);
      return BD
    }
    var OC = cD(36546),
      PC = cD(36899),
      HC = cD(36907),
      UC = cD(39961),
      xC = cD(38128);
    const qC = 32,
      JC = [10, 3, 10],
      KC = [21, 7, 21],
      aC = KC[0] * KC[1] * KC[2],
      VC = 0,
      zC = 1,
      jC = 2,
      lC = 3,
      LC = 64,
      TC = 512,
      GC = 4 * aC,
      RC = 1536,
      kC = GC + aC * RC,
      dC = 1073741824,
      YC = kC + 1;

    function WC(DD, CD) {
      const cD = DD % CD;
      return cD < 0 ? cD + CD : cD
    }

    function sC(DD, CD, cD) {
      return ID = WC(DD, KC[0]), pD = WC(CD, KC[1]), iD = WC(cD, KC[2]), ID + KC[0] * (pD + KC[1] * iD);
      var ID, pD, iD
    }

    function EC(DD, CD, cD) {
      return DD + 8 * (CD + 8 * cD)
    }

    function eC(DD, CD, cD) {
      return DD + 4 * (CD + 4 * cD)
    }
    const uC = 65535,
      hC = 0,
      rC = 1,
      AC = 2,
      FC = 3;

    function Dc(DD) {
      return Math.ceil(DD * DD / 32)
    }
    const Cc = 8192,
      cc = 1 << 18,
      Ic = 65536,
      pc = 294912,
      ic = 128,
      fc = 4096,
      bc = 16,
      Qc = 16385,
      wc = 81921,
      Sc = 147457,
      Bc = 4194304;
    const yc = [0, 0, 0],
      Mc = [0, 0, 0];

    function tc(DD, CD, cD, ID) {
      ! function(DD, CD, cD) {
        const [ID, pD, iD] = [DD[0], DD[1], DD[2]];
        let fD, bD, QD;
        Math.abs(pD) < .99 ? (fD = iD, bD = 0, QD = -ID) : (fD = -pD, bD = ID, QD = 0);
        const wD = Math.hypot(fD, bD, QD);
        CD[0] = fD / wD, CD[1] = bD / wD, CD[2] = QD / wD, cD[0] = pD * CD[2] - iD * CD[1], cD[1] = iD * CD[0] - ID * CD[2], cD[2] = ID * CD[1] - pD * CD[0]
      }(ID, yc, Mc);
      const pD = 1 / 32;
      for (const [iD, fD] of [
          [0, yc],
          [4, Mc]
        ]) {
        for (let cD = 0; cD < 3; cD++) DD[CD + iD + cD] = fD[cD] * pD;
        DD[CD + iD + 3] = -(fD[0] * cD[0] + fD[1] * cD[1] + fD[2] * cD[2]) * pD
      }
    }
    class Zc {
      constructor() {
        this.words = new Uint32Array(Sc), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      VM(DD, CD) {
        this.parts = 0, this.refs = 0, this.view = DD, this.viewAt = CD;
        const cD = DD[CD + 1] * DD[CD + 6] - DD[CD + 2] * DD[CD + 5],
          ID = DD[CD + 2] * DD[CD + 4] - DD[CD] * DD[CD + 6],
          pD = DD[CD] * DD[CD + 5] - DD[CD + 1] * DD[CD + 4],
          iD = Math.hypot(cD, ID, pD) || 1;
        this.light[0] = cD / iD, this.light[1] = ID / iD, this.light[2] = pD / iD
      }
      add(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= fc || ! function(DD, CD, cD) {
            const ID = DD[CD],
              pD = DD[CD + 1],
              iD = DD[CD + 2],
              fD = DD[CD + 3],
              bD = DD[CD + 4],
              QD = DD[CD + 5],
              wD = DD[CD + 6],
              SD = DD[CD + 7],
              BD = DD[CD + 8],
              yD = DD[CD + 9],
              MD = DD[CD + 10],
              tD = DD[CD + 11],
              ZD = DD[CD + 12],
              oD = DD[CD + 13],
              vD = DD[CD + 14],
              ND = DD[CD + 15],
              gD = ID * QD - pD * bD,
              XD = ID * wD - iD * bD,
              mD = ID * SD - fD * bD,
              nD = pD * wD - iD * QD,
              OD = pD * SD - fD * QD,
              PD = iD * SD - fD * wD,
              HD = BD * oD - yD * ZD,
              UD = BD * vD - MD * ZD,
              xD = BD * ND - tD * ZD,
              qD = yD * vD - MD * oD,
              JD = yD * ND - tD * oD,
              KD = MD * ND - tD * vD,
              aD = gD * KD - XD * JD + mD * qD + nD * xD - OD * UD + PD * HD;
            if (!(Math.abs(aD) > 1e-12)) return !1;
            const VD = 1 / aD;
            return cD[0] = (QD * KD - wD * JD + SD * qD) * VD, cD[1] = (iD * JD - pD * KD - fD * qD) * VD, cD[2] = (oD * PD - vD * OD + ND * nD) * VD, cD[3] = (MD * OD - yD * PD - tD * nD) * VD, cD[4] = (wD * xD - bD * KD - SD * UD) * VD, cD[5] = (ID * KD - iD * xD + fD * UD) * VD, cD[6] = (vD * mD - ZD * PD - ND * XD) * VD, cD[7] = (BD * PD - MD * mD + tD * XD) * VD, cD[8] = (bD * JD - QD * xD + SD * HD) * VD, cD[9] = (pD * xD - ID * JD - fD * HD) * VD, cD[10] = (ZD * OD - oD * mD + ND * gD) * VD, cD[11] = (yD * mD - BD * OD - tD * gD) * VD, cD[12] = (QD * UD - bD * qD - wD * HD) * VD, cD[13] = (ID * qD - pD * UD + iD * HD) * VD, cD[14] = (oD * XD - ZD * nD - vD * gD) * VD, cD[15] = (BD * nD - yD * XD + MD * gD) * VD, !0
          }(CD, cD, this.inverse)) return;
        const {
          view: ID,
          viewAt: pD
        } = this, iD = cD;
        let fD = 1 / 0,
          bD = 1 / 0,
          QD = -1 / 0,
          wD = -1 / 0,
          SD = -1 / 0;
        const [BD, yD, MD] = this.light;
        for (let mD = 0; mD < 8; mD++) {
          const cD = 1 & mD ? DD.hi[0] : DD.lo[0],
            tD = 2 & mD ? DD.hi[1] : DD.lo[1],
            ZD = 4 & mD ? DD.hi[2] : DD.lo[2],
            oD = cD * CD[iD] + tD * CD[iD + 4] + ZD * CD[iD + 8] + CD[iD + 12],
            vD = cD * CD[iD + 1] + tD * CD[iD + 5] + ZD * CD[iD + 9] + CD[iD + 13],
            ND = cD * CD[iD + 2] + tD * CD[iD + 6] + ZD * CD[iD + 10] + CD[iD + 14],
            gD = ID[pD] * oD + ID[pD + 1] * vD + ID[pD + 2] * ND + ID[pD + 3],
            XD = ID[pD + 4] * oD + ID[pD + 5] * vD + ID[pD + 6] * ND + ID[pD + 7];
          fD = Math.min(fD, gD), bD = Math.min(bD, XD), QD = Math.max(QD, gD), wD = Math.max(wD, XD), SD = Math.max(SD, BD * oD + yD * vD + MD * ND)
        }
        if (QD < -1 || wD < -1 || fD >= 1 || bD >= 1) return;
        const tD = this.parts++,
          ZD = this.rects;
        ZD[4 * tD] = oc(fD), ZD[4 * tD + 1] = oc(bD), ZD[4 * tD + 2] = oc(QD), ZD[4 * tD + 3] = oc(wD);
        const oD = this.inverse,
          {
            cell: vD,
            dims: ND,
            lo: gD
          } = DD,
          XD = wc + tD * bc;
        for (let mD = 0; mD < 3; mD++) this.floats[XD + 4 * mD] = oD[mD] / vD, this.floats[XD + 4 * mD + 1] = oD[4 + mD] / vD, this.floats[XD + 4 * mD + 2] = oD[8 + mD] / vD, this.floats[XD + 4 * mD + 3] = (oD[12 + mD] - gD[mD]) / vD;
        this.words[XD + 12] = DD.at, this.floats[XD + 13] = SD + .001 * (1 + Math.abs(SD)), this.words[XD + 14] = ND[0] | ND[1] << 8 | ND[2] << 16
      }
      finish() {
        const DD = ic,
          {
            counts: CD,
            rects: cD,
            words: ID
          } = this;
        CD.fill(0);
        let pD = 0,
          iD = 0;
        for (; iD < this.parts; iD++) {
          const ID = 4 * iD,
            fD = (cD[ID + 2] - cD[ID] + 1) * (cD[ID + 3] - cD[ID + 1] + 1);
          if (pD + fD > 65536) break;
          pD += fD;
          for (let pD = cD[ID + 1]; pD <= cD[ID + 3]; pD++)
            for (let iD = cD[ID]; iD <= cD[ID + 2]; iD++) CD[pD * DD + iD]++
        }
        let fD = 0;
        for (let QD = 0; QD < 16384; QD++) ID[QD] = fD, fD += CD[QD], CD[QD] = ID[QD];
        ID[16384] = fD;
        for (let QD = 0; QD < iD; QD++) {
          const pD = 4 * QD;
          for (let iD = cD[pD + 1]; iD <= cD[pD + 3]; iD++)
            for (let fD = cD[pD]; fD <= cD[pD + 2]; fD++) ID[Qc + CD[iD * DD + fD]++] = QD
        }
        const bD = this.floats;
        for (let QD = 0; QD < 16384; QD++) {
          const DD = Qc + ID[QD],
            CD = DD + Math.min(ID[QD + 1] - ID[QD], 64);
          for (let cD = DD + 1; cD < CD; cD++) {
            const CD = ID[cD],
              pD = bD[81934 + CD * bc];
            let iD = cD - 1;
            for (; iD >= DD && bD[81934 + ID[iD] * bc] < pD; iD--) ID[iD + 1] = ID[iD];
            ID[iD + 1] = CD
          }
        }
        this.refs = pD
      }
    }

    function oc(DD) {
      return Math.min(127, Math.max(0, Math.floor((.5 * DD + .5) * ic)))
    }

    function vc(DD, CD, cD, ID, pD) {
      for (let iD = 0; iD < 4; iD++)
        for (let fD = 0; fD < 4; fD++) pD[4 * iD + fD] = DD[CD + 4 * iD] * cD[ID + fD] + DD[CD + 4 * iD + 1] * cD[ID + 4 + fD] + DD[CD + 4 * iD + 2] * cD[ID + 8 + fD] + DD[CD + 4 * iD + 3] * cD[ID + 12 + fD]
    }

    function Nc(DD, CD, cD, ID, pD) {
      const iD = DD[0] - CD,
        fD = DD[1] - cD,
        bD = DD[2] - ID,
        QD = DD[3] - CD,
        wD = DD[4] - cD,
        SD = DD[5] - ID,
        BD = DD[6] - CD,
        yD = DD[7] - cD,
        MD = DD[8] - ID;
      if (Math.min(iD, QD, BD) > pD || Math.max(iD, QD, BD) < -pD) return !1;
      if (Math.min(fD, wD, yD) > pD || Math.max(fD, wD, yD) < -pD) return !1;
      if (Math.min(bD, SD, MD) > pD || Math.max(bD, SD, MD) < -pD) return !1;
      const tD = QD - iD,
        ZD = wD - fD,
        oD = SD - bD,
        vD = BD - QD,
        ND = yD - wD,
        gD = MD - SD,
        XD = ZD * gD - oD * ND,
        mD = oD * vD - tD * gD,
        nD = tD * ND - ZD * vD;
      if (Math.abs(XD * iD + mD * fD + nD * bD) > pD * (Math.abs(XD) + Math.abs(mD) + Math.abs(nD))) return !1;
      const OD = [tD, ZD, oD, vD, ND, gD, iD - BD, fD - yD, bD - MD];
      for (let PD = 0; PD < 3; PD++) {
        const DD = OD[3 * PD],
          CD = OD[3 * PD + 1],
          cD = OD[3 * PD + 2];
        for (let ID = 0; ID < 3; ID++) {
          const tD = 0 === ID ? 0 : 1 === ID ? cD : -CD,
            ZD = 0 === ID ? -cD : 1 === ID ? 0 : DD,
            oD = 0 === ID ? CD : 1 === ID ? -DD : 0,
            vD = tD * iD + ZD * fD + oD * bD,
            ND = tD * QD + ZD * wD + oD * SD,
            gD = tD * BD + ZD * yD + oD * MD,
            XD = pD * (Math.abs(tD) + Math.abs(ZD) + Math.abs(oD));
          if (Math.min(vD, ND, gD) > XD || Math.max(vD, ND, gD) < -XD) return !1
        }
      }
      return !0
    }
    const gc = new Float32Array(1);
    new Uint32Array(gc.buffer);
    var Xc = cD(38130);

    function mc(DD) {
      const [CD, cD, ID] = Xc.r;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${DD.group}) @binding(${DD.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${CD-1}, ${cD-1}, ${ID-1});\n}\n`
    }

    function nc(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [pD, iD, fD] = KC, [bD, QD, wD] = JC, SD = Math.log2(qC), BD = ID ? "var<private> bloxdSpCrossed: bool;\n" : "", yD = ID ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${DD.group}) @binding(${DD.Ey}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${DD.group}) @binding(${DD.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${cD?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${BD}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${rC}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${AC}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${cD?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${FC}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${pD}, ${iD}, ${fD});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${pD} * (s.y + ${iD} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${bD}, ${QD}, ${wD}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${SD}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${lC}u) {\n\t\treturn named && state == ${jC}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${GC}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${kC}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${CD?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${CD?`\t\tif (exits && step > 0 && step % ${Hc} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${SD}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${VC}u || kind == ${zC}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${jC}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${GC}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${yD}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Oc = {
      group: 0,
      uniform: 0,
      Ey: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function Pc() {
      const DD = Oc;
      return `${mc(DD)}${nc(DD,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Xc.e}>,\n}\n@group(${DD.group}) @binding(${DD.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${DD.group}) @binding(${DD.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Xc.m})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Xc.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Xc.h}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Hc = 2;
    const Uc = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function xc(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const ID = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${CD.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        pD = "trace" === cD || "lit" === cD,
        iD = "maskEdge" === cD ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        fD = pD ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${CD.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${CD.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===cD?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${iD};\n`;
      return `${ID}${DD.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${pD?function(){const[DD,CD,cD]=Xc.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${DD}.0, ${CD}.0, ${cD}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${fD}}\n`:""}${DD.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${CD.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${CD.renderOffset});\n}\n`:""}`
    }
    const qc = "bloxdSpOwnTexture";

    function Jc(DD) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${DD.texture}) - 1u)))`
    }
    const Kc = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${QC.e.map((DD=>{let[CD,cD]=DD;return`\tbloxdSpOut.${CD} = (bloxdSpWord & ${cD}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function ac(DD) {
      return `bloxdSpFlags(${DD})`
    }
    const Vc = `${UC.p}.eyePosition`;

    function zc(DD, CD, cD, ID, pD) {
      const iD = DD.indexOf(CD);
      if (iD < 0 || DD.indexOf(CD, iD + 1) >= 0) throw new Error(`Lite's ${pD} program changed at the shader pack ${ID} hook: ${iD<0?"no":"more than one"} anchor (lite/${pD}ShaderPack.ts)`);
      return DD.slice(0, iD) + cD + DD.slice(iD + CD.length)
    }

    function jc(DD) {
      return DD.sunShadow || DD.airShadow
    }

    function lc(DD, CD) {
      return CD && jc(DD)
    }
    const Lc = {
      group: UC.h,
      ...UC.v
    };

    function Tc(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!jc(DD)) return "";
      if (CD) {
        const CD = Lc,
          pD = "trace" === cD || "lit" === cD;
        let iD = "";
        DD.sunShadow && (iD = pD ? `${nc(CD,!0,"lit"===cD)}${ID=CD,`@group(${ID.group}) @binding(${ID.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${ID.group}) @binding(${ID.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(DD, CD, cD) {
          const ID = `@group(${DD}) @binding(${CD}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return cD ? `${ID}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Uc}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((DD=>`\t{\n\t\tlet o = vec2i(${DD});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : ID
        }(CD.group, UC.z, "maskEdge" === cD));
        const fD = {
          shadowDirection: `${UC.p}.shadowDirection`,
          renderOffset: `${UC.p}.renderOffset`,
          eyePosition: `${UC.p}.eyePosition`
        };
        return `${mc(CD)}${iD}${function(DD){const[CD,cD,ID]=Xc.r;return`@group(${DD.group}) @binding(${DD.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${DD.group}) @binding(${DD.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${CD}.0, ${cD}.0, ${ID}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(CD)}${xc(DD,fD,cD)}`
      }
      var ID;
      return `${DD.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${DD.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Gc(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!CD) return "";
      const iD = (fD = "fragmentInputs.vPositionW", bD = DD.sunShadow ? {
        normal: cD,
        flags: ID
      } : null, `\n\tbloxdSpShadowPosition = ${fD};\n${bD?`\tbloxdSpShadowNormal = normalize(${bD.normal});\n\tbloxdSpShadowEmissive = (${bD.flags} & ${QC.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${bD.flags} & ${QC.h}u) != 0u;\n`:""}`);
      var fD, bD;
      return DD.sunShadow && ("mask" === pD || "maskEdge" === pD) ? `${iD}${QD="fragmentInputs.position",wD="maskEdge"===pD,`\n\tbloxdSpShadowPixel = vec2i(${QD}.xy);\n${wD?`\tbloxdSpShadowZ = ${QD}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${QD}.z), dpdy(${QD}.z));\n`:""}`}` : iD;
      var QD, wD
    }
    const Rc = "bloxdSpTextureRotation",
      kc = "bloxdSpTextureLayers",
      dc = `@group(${UC.h}) @binding(${UC.C}) var<storage, read> ${kc}: array<u32>;\n`;

    function Yc(DD) {
      return `\tvertexOutputs.vPackTexture = ${kc}[min(u32(${DD}), arrayLength(&${kc}) - 1u)];\n`
    }

    function Wc(DD) {
      return void 0 !== DD.uv
    }

    function sc(DD) {
      if (!DD) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Wc(DD)) return function(DD) {
        const {
          texture: CD,
          cells: cD,
          layers: ID
        } = DD, pD = `textureDimensions(${CD}, bloxdSpLevel)`, iD = cD ? `max(vec2u(vec2f(${pD}) / ${cD}), vec2u(1u))` : pD, fD = cD ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${iD};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${cD}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${cD}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${CD}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${pD} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${iD};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${CD}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let bD;
        if (cD)
          if (1 === ID.length) bD = `\treturn bloxdSpOwnTexel(${ID[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const DD = ID.length - 1;
            bD = `\tvar bloxdSpColour = bloxdSpOwnTexel(${ID[DD]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let CD = DD - 1; CD >= 0; CD--) bD += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${ID[CD]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            bD += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else bD = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${DD.id?`var<private> ${qc}: u32;\n`:""}${fD}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Jc(DD)};\n\treturn ${iD};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${DD.id?qc:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Jc(DD)};\n${bD}}\n`
      }(DD);
      const CD = DD,
        cD = DD => {
          const cD = DD > 0 ? `bloxdSpLayer - ${CD.layers*DD}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${DD}, ${CD.sampler}, bloxdSpTurned, ${cD}, round(bloxdSpMipLevel));`
        };
      let ID = "";
      for (let iD = 0; iD < CD.count - 1; iD++) ID += `\tif (bloxdSpLayer < ${CD.layers*(iD+1)}u) {\n\t\t${cD(iD)}\n\t}\n`;
      const pD = CD.frame ? `${CD.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Rc}: u32;\n${dc}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Rc} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Rc} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Rc} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${pD}${ID}\t${cD(CD.count-1)}\n}\n`
    }

    function Ec(DD, CD, cD) {
      return !!DD.surface && "bloxdDefaultSurface" !== DD.surface && function(DD, CD) {
        return "liquid" === CD || !DD
      }(CD, cD)
    }

    function ec(DD, CD) {
      return DD.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${CD.vertexLocalPosition}, ${ac(CD.vertexFlags)});\n\t\tlet bloxdSpVertex = ${DD.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function uc(DD, CD, cD, ID, pD) {
      if (!DD.surface) return "";
      const iD = (DD, CD) => `\n\tlet bloxdSpTexelUV = ${DD};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${CD}) - 1u));`;
      let fD = "",
        bD = "0u, 0u, vec2f(0.0), 0.0";
      const QD = ID && Wc(ID) ? ID : null,
        wD = ID && !Wc(ID) ? ID : null;
      if (QD) {
        fD = `${QD.id?`\n\tlet bloxdSpTexture = ${QD.id};\n\t${qc} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${QD.uv};${iD(function(DD,CD){var cD;return`${null!==(cD=DD.levelUv)&&void 0!==cD?cD:DD.cells?`${CD} / ${DD.cells}`:CD} * vec2f(textureDimensions(${DD.texture}))`}(QD,"bloxdSpUv"),QD.texture)}`, bD = (QD.id ? `${qc}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else wD && (fD = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Rc} = bloxdSpTexture >> 16u;${iD(`fragmentInputs.vMainUV1 * ${(0,OC.pb)(wD.width)}`,"textureAtlas0")}`, bD = `bloxdSpTexture & 0xffffu, ${Rc}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const SD = pD.overlayColour,
        BD = SD ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        yD = "bloxdDefaultSurface" !== DD.surface || SD ? `\n\tbaseColor = vec4f(${BD}, baseColor.a);` : "",
        MD = Ec(DD, CD, cD) ? `\n\t${pD.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${fD}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${pD.alpha}, ${pD.enchantTier}, ${pD.enchantColour}, ${pD.enchantSpeed}, ${null!==SD&&void 0!==SD?SD:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${pD.normal}, ${pD.localPosition}, ${ac(pD.flags)}, ${bD});\n\tlet bloxdSpSurface = ${DD.surface}(bloxdSpSurfaceIn);${yD}${MD}\n`
    }
    const hc = "bloxdSpLightIn";

    function rc(DD, CD, cD, ID) {
      if (!DD.light) return "";
      const pD = CD ? `${OC.j}.rgb, ${OC.j}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${OC.i}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: iD,
          diffuse: fD,
          emissive: bD,
          ambient: QD,
          fogColour: wD,
          fogAlpha: SD,
          normal: BD
        } = ID;
      return `\tvar ${hc} = BloxdLightIn(vec3f(0.0), ${cD?iD:"0.0"}, ${fD}, ${bD}, ${QD}, ${pD}, ${wD}, ${SD}, fragmentInputs.vPositionW, ${BD}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${hc}.litColour = bloxdLitColour(bloxdSpSurface, ${hc});\n`
    }

    function Ac(DD) {
      return DD.light ? `\n\t{\n\t\tlet bloxdSpLight = ${DD.light}(bloxdSpSurface, ${hc});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Fc = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      DI = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      CI = "\treturn color;\n}",
      cI = {
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
    const II = Object.freeze({});

    function pI(DD) {
      var CD;
      return !(null === (CD = (0, xC.e)(DD)) || void 0 === CD || !CD.sceneDepth)
    }

    function iI(DD) {
      const CD = (0, xC.e)(DD);
      return !!CD && Ec(CD.hooks, CD.strict, CD.program)
    }

    function fI(DD, CD, cD, ID) {
      return zc(DD, CD, cD, ID, "terrain")
    }

    function bI(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const iD = function(DD) {
          return (0, xC.d)(DD.packVariant, DD.liquid ? "liquid" : "terrain")
        }(DD),
        {
          hooks: fD
        } = iD,
        bD = lc(iD, ID),
        QD = "edge" === pD ? "maskEdge" : "plain" === pD ? "mask" : "trace",
        wD = ec(fD, cI);
      wD && (CD = fI(CD, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${wD}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const SD = "atlas" === DD.texture ? {
          count: DD.atlasCount,
          layers: DD.atlasLayers,
          width: DD.Gs,
          sampler: "atlasSampler",
          frame: DD.animated ? cD : null
        } : null,
        BD = `${iD.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Gc(iD,bD,cI.normal,cI.flags,QD)}${uc(fD,iD.strict,iD.program,SD,cI)}`;
      BD && (CD = fI(CD, Fc, `${Fc.slice(0,-1)}${BD}`, "surface"));
      const yD = Ac(fD);
      return yD && (CD = fI(CD, DI, `${rc(fD,DD.lighting,DD.dirLightCount>0,cI)}${DI}`, "light input"), CD = fI(CD, CI, `${yD.slice(1)}${CI}`, "light")), `${(0,UC.G)()}${iD.sceneDepth?`@group(${UC.h}) @binding(${UC.u}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Vc};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Tc(iD,bD,QD)}${sc(SD)}${Kc}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${iD.code}${CD}`
    }
    const QI = nD.e.WGSL;

    function wI(DD) {
      return void 0 !== DD.packVariant
    }
    const SI = {
        vID: 0,
        NID: 4,
        gID: 8,
        mID: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      BI = SI.aoLevels + 4,
      yI = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      MI = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      tI = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      ZI = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      oI = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      vI = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      NI = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      gI = 0,
      XI = 3,
      mI = 4,
      nI = 5,
      OI = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${PC.e}, ${PC.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${PC.e}, ${PC.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      PI = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((DD=>HC.e>>DD&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const HI = {
      wy: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: DD => `animDataPerTex[${DD}]`
    };

    function UI(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HI;
      return `\n\tlet atlasIdxIn = ${DD};\n\tlet animTick = ${cD.wy};\n\tlet animTickStride = ${cD.stride};\n\tlet numAnimTextures = ${cD.count};\n\t${(0,OD.g)(nD.e.WGSL,cD.perTexture)}\n\t${CD}animLayer;\n`
    }

    function xI(DD) {
      const CD = (CD, cD) => {
        const ID = CD > 0 ? `fragmentInputs.texAtlasIndex - ${DD.atlasLayers.toFixed(1)} * ${CD.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${cD?"textureSampleLevel":"textureSample"}(textureAtlas${CD}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${ID}))${cD?", atlasLod":""})`
      };
      if (1 === DD.atlasCount) return `baseColor = ${CD(0,!1)};`;
      let cD = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,OC.pb)(DD.Gs)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let ID = 0; ID < DD.atlasCount; ID++) {
        const pD = DD.atlasLayers * (ID + 1) - .5;
        cD += `${ID>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,OC.pb)(pD)}) {\n\t\tbaseColor = ${CD(ID,!0)};\n\t}`
      }
      return cD
    }

    function qI(DD) {
      return `terrain-${DD.texture}${"atlas"===DD.texture?DD.atlasCount:""}${DD.animated?"-anim":""}${DD.alphaTest?"-test":""}${DD.lighting?"-lit":""}-dir${DD.dirLightCount}${DD.packed?"-packed":""}${wI(DD)?`-sp${DD.packVariant}`:""}${DD.liquid?"-liquid":""}${DD.resting?"-rest":""}`
    }

    function JI(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const ID = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const cD = "none" !== DD.texture,
          ID = "atlas" === DD.texture,
          pD = DD.dirLightCount > 0,
          iD = wI(DD);
        if (DD.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${DD.dirLightCount}`);
        let fD = 1,
          bD = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (ID) {
          DD.animated && (bD += `@group(2) @binding(${fD++}) var<storage, read> animDataPerTex: array<f32>;\n`), bD += `@group(2) @binding(${fD++}) var atlasSampler: sampler;\n`;
          for (let CD = 0; CD < DD.atlasCount; CD++) bD += `@group(2) @binding(${fD++}) var textureAtlas${CD}: texture_2d_array<f32>;\n`
        } else "single" === DD.texture && (bD += `@group(2) @binding(${fD++}) var diffuseSamplerSampler: sampler;\n`, bD += `@group(2) @binding(${fD++}) var diffuseSampler: texture_2d<f32>;\n`);
        const QD = function(DD) {
            const CD = NI,
              cD = "none" !== DD.texture,
              ID = "atlas" === DD.texture,
              pD = wI(DD);
            return DD.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${cD?"uv: vec2f,":""}\n\t${ID?"texAtlasIndices: f32,":""}\n\t${DD.lighting?"aPackedLightLevels: f32,":""}\n\t${pD?"blockFlagWords: vec2u,":""}\n}\n${OI}\n${PI}\n${"single"===DD.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${cD?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===DD.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${ID?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${DD.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${pD?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${CD.position}) position: vec3f,\n\t@location(${CD.normal}) normal: vec4f,\n\t@location(${CD.color}) color: vec4f,\n\t${cD?`@location(${CD.uv}) uv: vec2f,`:""}\n\t${DD.lighting?`@location(${CD.packedLight}) aPackedLightLevels: f32,`:""}\n\t${pD?`@location(${CD.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(DD),
          wD = `\n${ZI}\n${MI}\n${tI}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${bD}\n${uD}\n${QD.declarations}\nstruct Varyings {\n\t${"none"===CD?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${DD.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${pD?"@location(5) vTerrainLambert: f32,":""}\n\t${cD?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${ID?"@location(7) texAtlasIndex: f32,":""}\n\t${DD.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${iD?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${iD&&ID?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${DD.resting?"":(0,OC.q)(QI)}\n${vI}\n\n@vertex\nfn mainVertex(${QD.parameter}) -> Varyings {\n\t${QD.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${iD?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${QC.c.placed}u;`:""}\n\t${iD&&ID?Yc("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${DD.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${cD?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${ID?function(DD){return DD?UI("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(DD.animated):""}\n\t${"single"===DD.texture&&DD.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,OC.$)(QI)}\n\t${(0,OC.F)(QI,DD.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${DD.resting?"":oI}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${ID?xI(DD):""}\n\t${"single"===DD.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${cD?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${DD.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${pD?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${eD}));\n\t${wI(DD)?(0,OC.lb)(nD.e.WGSL):(0,OC.R)(QI)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          SD = new Set;
        DD.lighting && SD.add("BLOXD_LIGHTING");
        pD && SD.add("BLOXD_TERRAIN_DIRECTIONAL");
        return XC(wD, new Map([...SD].map((DD => [DD, !0]))))
      }(DD, cD);
      if (!wI(DD)) return ID;
      const pD = bI(DD, ID, UI, CD, cD);
      return "none" === cD ? pD : `${pD}${function(DD){const CD="none"!==DD.texture&&DD.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${DD.resting?"":oI}\n\t${DD.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${CD&&"atlas"===DD.texture?xI(DD):""}\n\t${CD&&"single"===DD.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${CD?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${QC.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(DD)}`
    }
    const KI = new Map([
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

    function aI(DD, CD) {
      const cD = new Map;
      let ID = 0;
      const pD = [],
        iD = [],
        fD = [];
      for (const wD of CD) {
        var bD, QD;
        const CD = null !== (bD = wD.type.trim().split(/\s+/).pop()) && void 0 !== bD ? bD : wD.type,
          SD = KI.get(CD);
        if (!SD) throw new Error(`Lite: no uniform layout for ${wD.name}: ${wD.type}`);
        const BD = null !== (QD = wD.arraySize) && void 0 !== QD ? QD : 0,
          yD = BD ? 4 : SD.align;
        ID = Math.ceil(ID / yD) * yD;
        const MD = BD ? 4 * Math.ceil(SD.floats / 4) : SD.floats;
        if (cD.set(wD.name, {
            offset: ID,
            floats: SD.floats,
            arraySize: BD,
            stride: MD
          }), BD && SD.floats <= 2) {
          const CD = `${DD}_${fD.length}_strided`;
          iD.push(`struct ${CD} {\n\t@size(16) el: ${SD.wgsl},\n}`), fD.push(wD.name), pD.push(`\t@align(16) ${wD.name}: array<${CD}, ${BD}>,`)
        } else BD ? pD.push(`\t@align(16) ${wD.name}: array<${SD.wgsl}, ${BD}>,`) : pD.push(`\t${wD.name}: ${SD.wgsl},`);
        ID += BD ? MD * BD : SD.floats
      }
      return {
        slots: cD,
        floats: Math.max(4, 4 * Math.ceil(ID / 4)),
        wgsl: `${iD.join("\n")}\nstruct ${DD} {\n${pD.join("\n")}\n}\n`,
        stridedArrays: fD
      }
    }
    const VI = [{
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
      zI = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      jI = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function lI(DD, CD) {
      return `#if defined(${DD}) && ${DD}DIRECTUV == 0\nvarying v${CD}UV: vec2f;\n#endif`
    }

    function LI(DD, CD, cD) {
      return `#if defined(${DD}) && ${DD}DIRECTUV == 0\nif (uniforms.v${CD}Infos.x==0.)\n{vertexOutputs.v${CD}UV= (uniforms.${cD}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${CD}UV= (uniforms.${cD}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function TI(DD, CD, cD) {
      return `#ifdef ${DD}\n#if ${DD}DIRECTUV == 1\n#define v${CD}UV vMainUV1\n#elif ${DD}DIRECTUV == 2\n#define v${CD}UV vMainUV2\n#else\nvarying v${CD}UV: vec2f;\n#endif\nvar ${cD}SamplerSampler: sampler;\nvar ${cD}Sampler: texture_2d<f32>;\n#endif`
    }
    const GI = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      RI = 256,
      kI = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      dI = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      YI = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      WI = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      sI = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      EI = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      eI = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      uI = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${dI}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${lI("OPACITY","Opacity")}\n${lI("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${eI}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${YI}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${LI("OPACITY","Opacity","opacity")}\n${LI("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${WI}\n#define CUSTOM_VERTEX_MAIN_END\n${sI}\n}\n`;
    const hI = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${TI("OPACITY","Opacity","opacity")}\n${TI("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${eI}\n${EI}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((DD,CD)=>function(DD){const CD=`
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
      CD
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      DD
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      CD
    }.vLightData, diffuse$ {
      DD
    }.rgb, $ {
      CD
    }.vLightSpecular.rgb, diffuse$ {
      DD
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(CD))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, rI = /^([gimus]+)!/, AI = new Set;

    function FI(DD) {
      AI.has(DD) || (AI.add(DD), console.warn(`Lite: no place for plugin code at ${DD} in the standard shader: it is left out`))
    }

    function Dp(DD, CD) {
      let cD = DD;
      const ID = new Map;
      for (const [iD, fD] of CD) {
        var pD;
        ID.set(iD, `${null!==(pD=ID.get(iD))&&void 0!==pD?pD:""}${fD}\n`)
      }
      for (const [iD, fD] of ID) {
        if (!iD.startsWith("!")) {
          const DD = `#define ${iD}`;
          if (!cD.includes(DD)) {
            FI(iD);
            continue
          }
          cD = cD.replace(DD, (() => `\n${fD}\n${DD}`));
          continue
        }
        let DD = iD.substring(1),
          CD = "g";
        if (DD.startsWith("!")) CD = "", DD = DD.substring(1);
        else {
          const cD = rI.exec(DD);
          cD && (CD = cD[1], DD = DD.substring(CD.length + 1))
        }
        const ID = new RegExp(DD, CD.includes("g") ? CD : `${CD}g`);
        let pD = ID.exec(cD);
        for (pD || FI(iD); pD;) {
          const DD = pD,
            CD = fD.replace(/\$(\d+)/g, ((CD, cD) => Number(cD) < DD.length ? DD[Number(cD)] : ""));
          cD = cD.substring(0, DD.index) + CD + cD.substring(DD.index + DD[0].length), ID.lastIndex = DD.index + CD.length, pD = ID.exec(cD)
        }
      }
      return cD
    }
    const Cp = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      cp = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      Ip = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function pp(DD) {
      const CD = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let cD = DD.replace(Cp, ((DD, cD, ID, pD, iD, fD) => ("attribute" === cD ? CD.attributes.push({
        name: iD,
        type: fD
      }) : void 0 === cD ? CD.varyings.push({
        name: iD,
        type: fD,
        interpolation: fp(fD, ID, pD)
      }) : CD.uniforms.push({
        name: iD,
        type: ip(fD)
      }), "")));
      return cD = cD.replace(cp, ((DD, cD) => (CD.samplers.add(cD), ""))), cD = cD.replace(Ip, ((DD, cD, ID) => (CD.textures.push({
        name: cD,
        type: ID
      }), ""))), CD.body = cD, CD
    }

    function ip(DD) {
      const CD = DD.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        cD = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(CD);
      if (!cD) throw new Error(`Lite: unsupported uniform type ${DD}`);
      return cD
    }

    function fp(DD, CD, cD) {
      return void 0 === CD && void 0 === cD ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(DD.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === CD ? "@interpolate(flat) " : `@interpolate(${null!==CD&&void 0!==CD?CD:"perspective"}, ${null!==cD&&void 0!==cD?cD:"center"}) `
    }

    function bp(DD) {
      return Bp({
        defines: DD.defines,
        vertex: Dp(uI, DD.vertexCode),
        fragment: Dp(hI, DD.fragmentCode),
        members: [...VI, ...DD.defines.has("OPACITY") ? zI : [], ...DD.defines.has("EMISSIVE") ? jI : [], ...DD.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function Qp(DD) {
      const CD = DD.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (CD === DD) throw new Error("Lite: fragment main has no return");
      return CD
    }
    const wp = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${dI}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${YI}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${WI}\n${sI}\n}\n`,
      Sp = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${EI}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Bp(DD) {
      const CD = DD.defines,
        cD = pp(XC(DD.vertex, CD)),
        ID = pp(XC(DD.fragment, CD)),
        pD = new Map;
      for (const gD of [...cD.varyings, ...ID.varyings]) pD.has(gD.name) || pD.set(gD.name, gD);
      const iD = [...pD.values()].map(((DD, CD) => `\t@location(${CD}) ${DD.interpolation}${DD.name}: ${DD.type},`)),
        fD = [...DD.members];
      for (const gD of [...cD.uniforms, ...ID.uniforms]) fD.some((DD => DD.name === gD.name)) || fD.push(gD);
      const bD = aI(DD.structName, fD),
        QD = [],
        wD = [];
      let SD = 1;
      const BD = new Set;
      for (const gD of [...cD.textures, ...ID.textures]) {
        if (BD.has(gD.name)) continue;
        BD.add(gD.name);
        const DD = `${gD.name}Sampler`,
          CD = SD++,
          cD = SD++,
          ID = gD.type.startsWith("texture_2d_array") ? "2d-array" : gD.type.startsWith("texture_cube") ? "cube" : "2d";
        QD.push({
          name: gD.name,
          binding: CD,
          samplerBinding: cD,
          dimension: ID
        }), wD.push(`@group(2) @binding(${CD}) var ${gD.name}: ${gD.type};`), wD.push(`@group(2) @binding(${cD}) var ${DD}: sampler;`)
      }
      for (const gD of [...cD.samplers, ...ID.samplers])
        if (!BD.has(gD.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${gD} has no texture`);
      const yD = [ZI, kI, bD.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${DD.structName};`, ...wD].join("\n"),
        MD = cD.attributes,
        tD = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...cD.attributes.map(((DD, CD) => `\t@location(${CD}) ${DD.name}: ${DD.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        ZD = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...iD, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        oD = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...ID.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...iD, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", uD, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${eD}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        vD = DD => {
          for (const CD of bD.stridedArrays) DD = DD.replace(new RegExp(`\\b${CD}\\s*\\[(.*?)\\]`, "g"), `${CD}[$1].el`);
          return DD
        };
      return {
        vertex: `${yD}\n${tD}\n${ZD}\n${vD(cD.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${yD}\n${oD}\n${Qp((ND=vD(ID.body),ND.includes("fragmentInputs.position")?ND.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):ND))}`,
        attributes: MD,
        material: bD,
        textures: QD
      };
      var ND
    }
    const yp = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      Mp = DD => ({
        name: DD,
        type: "vec3"
      }),
      tp = DD => ({
        name: DD,
        type: "float"
      }),
      Zp = aI("EarthSkyUniforms", [Mp("viewFrom"), tp("exposureScale"), Mp("zenithOffset"), tp("fogOn"), Mp("up"), tp("ditherOn"), Mp("sun"), tp("turbidity"), Mp("tint"), tp("rayleigh"), Mp("sunDir"), tp("mieStrength"), Mp("inScatterR"), tp("mieFocus"), Mp("inScatterM"), tp("sunE"), Mp("extinctionBeta"), tp("sunsetMix"), tp("mieScale"), tp("mieBase"), tp("mieSlope"), tp("sunDiscE"), tp("exposure")]),
      op = `${ZI}\n${kI}\n${Zp.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      vp = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${yp.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Np = `\n${uD}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(oC).map((DD=>{let[CD,cD]=DD;return`const TONE_${CD}: f32 = ${cD};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${vC};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${eD}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var gp = cD(36440);
    const Xp = new gp.cZ,
      mp = new gp.cZ,
      np = new gp.Quaternion,
      Op = new Float64Array(3),
      Pp = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Hp = new Float64Array(16);

    function Up(DD, CD, cD) {
      const ID = cD.worldMatrix;
      var pD;
      DD.updateFloat3("viewFrom", ID[12], ID[13], ID[14]), DD.updateFloatsFrom("zenithOffset", CD.cameraOffset, 0, 3), DD.updateFloatsFrom("up", CD.up, 0, 3), CD.luminance > 0 && (DD.updateFloat("exposure", CD.luminance), DD.updateFloat("exposureScale", (pD = CD.luminance, Math.log2(2 / Math.pow(pD, 4))))), DD.updateFloat("turbidity", CD.turbidity), DD.updateFloat("rayleigh", CD.rayleigh), DD.updateFloat("mieStrength", CD.mieCoefficient), DD.updateFloat("mieFocus", CD.mieDirectionalG), DD.updateFloatsFrom("tint", CD.tint, 0, 3), DD.updateFloat("fogOn", CD.fog && cD.fogEnabled && 0 !== cD.fogMode ? 1 : 0), DD.updateFloat("ditherOn", CD.dithering ? 1 : 0);
      const iD = CD.sunPosition;
      if (Xp.set(iD[0], iD[1], iD[2]), !CD.useSunPosition) {
        const DD = Math.PI * (CD.inclination - .5),
          cD = 2 * Math.PI * (CD.azimuth - .5);
        Xp.set(CD.distance * Math.cos(cD) * Math.cos(DD), CD.distance * Math.sin(-DD), CD.distance * Math.sin(cD) * Math.cos(DD)), gp.Quaternion.FromUnitVectorsToRef(gp.cZ.UpReadOnly, mp.set(CD.up[0], CD.up[1], CD.up[2]), np), Xp.rotateByQuaternionToRef(np, Xp)
      }
      DD.updateVector3("sun", Xp), Op[0] = Xp.x, Op[1] = Xp.y, Op[2] = Xp.z;
      const fD = ZC(CD, Op, Pp);
      DD.updateFloatsFrom("sunDir", fD.sunDir, 0, 3), DD.updateFloat("sunE", fD.sunE), DD.updateFloatsFrom("inScatterR", fD.inScatterR, 0, 3), DD.updateFloatsFrom("inScatterM", fD.inScatterM, 0, 3), DD.updateFloatsFrom("extinctionBeta", fD.extinctionBeta, 0, 3), DD.updateFloat("sunsetMix", fD.sunsetMix), DD.updateFloat("sunDiscE", fD.sunDiscE), DD.updateFloat("mieScale", fD.mieScale), DD.updateFloat("mieBase", fD.mieBase), DD.updateFloat("mieSlope", fD.mieSlope)
    }

    function xp(DD, CD) {
      const cD = Hp;
      cD[0] = CD.far, cD[5] = CD.far, cD[10] = CD.far, cD[15] = 1;
      const ID = DD.infiniteDistance;
      for (let pD = 0; pD < 3; pD++) cD[12 + pD] = DD.position[pD] + (ID ? CD.worldMatrix[12 + pD] : 0);
      return Hp
    }
    var qp = cD(38095);

    function Jp(DD) {
      return Math.max(4, 4 * Math.ceil(DD / 4))
    }

    function Kp(DD, CD, cD, ID) {
      const pD = DD.createBuffer({
        label: ID,
        size: Jp(CD.byteLength),
        usage: cD,
        mappedAtCreation: !0
      });
      return new Uint8Array(pD.getMappedRange(), 0, CD.byteLength).set(new Uint8Array(CD.buffer, CD.byteOffset, CD.byteLength)), pD.unmap(), pD
    }

    function ap(DD, CD) {
      return Math.floor(Math.log2(Math.max(DD, CD))) + 1
    }

    function Vp(DD, CD, cD, ID, pD, iD) {
      const fD = DD.createTexture({
          label: iD,
          size: {
            width: cD,
            height: ID,
            depthOrArrayLayers: pD
          },
          format: "rgba8unorm",
          mipLevelCount: ap(cD, ID),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        bD = (CD, cD, ID, iD) => {
          DD.queue.writeTexture({
            texture: fD,
            mipLevel: cD
          }, CD, {
            bytesPerRow: 4 * ID,
            rowsPerImage: iD
          }, {
            width: ID,
            height: iD,
            depthOrArrayLayers: pD
          })
        };
      bD(CD, 0, cD, ID);
      let QD = 1;
      for (const wD of function*(DD, CD, cD, ID) {
          let pD = DD,
            iD = CD,
            fD = cD;
          for (; iD > 1 || fD > 1;) {
            const DD = Math.max(1, iD >> 1),
              CD = Math.max(1, fD >> 1),
              cD = new Uint8Array(DD * CD * ID * 4),
              bD = 4 * iD;
            let QD = 0;
            for (let wD = 0; wD < ID; wD++) {
              const ID = wD * bD * fD;
              for (let wD = 0; wD < CD; wD++) {
                const CD = ID + Math.min(2 * wD, fD - 1) * bD,
                  SD = ID + Math.min(2 * wD + 1, fD - 1) * bD;
                for (let ID = 0; ID < DD; ID++) {
                  const DD = 4 * Math.min(2 * ID, iD - 1),
                    fD = 4 * Math.min(2 * ID + 1, iD - 1);
                  for (let ID = 0; ID < 4; ID++) cD[QD++] = pD[CD + DD + ID] + pD[CD + fD + ID] + pD[SD + DD + ID] + pD[SD + fD + ID] + 2 >> 2
                }
              }
            }
            yield {
              data: cD,
              width: DD,
              height: CD
            }, pD = cD, iD = DD, fD = CD
          }
        }(CD, cD, ID, pD)) bD(wD.data, QD++, wD.width, wD.height);
      return fD
    }
    const zp = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function jp(DD) {
      if (DD.startsWith("data:")) {
        const CD = DD.search(/[;,]/);
        return `data:${CD>5?DD.slice(5,CD):""} URL of ${DD.length} characters`
      }
      return DD.length > 80 ? `${DD.slice(0,80)}...` : DD
    }
    async function lp(DD) {
      const CD = await fetch(DD);
      if (!CD.ok) throw new Error(`${jp(DD)}: ${CD.status} ${CD.statusText}`);
      return createImageBitmap(await CD.blob(), zp)
    }
    async function Lp(DD) {
      const CD = await lp(DD),
        cD = new OffscreenCanvas(CD.width, CD.height),
        ID = cD.getContext("2d", {
          willReadFrequently: !0
        });
      if (!ID) throw new Error("No 2D context to decode an image");
      ID.drawImage(CD, 0, 0);
      const {
        data: pD
      } = ID.getImageData(0, 0, CD.width, CD.height);
      return CD.close(), {
        pixels: new Uint8Array(pD.buffer, pD.byteOffset, pD.byteLength),
        width: cD.width,
        height: cD.height
      }
    }
    const Tp = new WeakMap;

    function Gp(DD, CD, cD, ID) {
      var pD;
      const iD = null !== (pD = Tp.get(DD)) && void 0 !== pD ? pD : new Map;
      Tp.set(DD, iD);
      let fD = iD.get(CD);
      return fD || (fD = (async pD => {
        const iD = null !== (pD = function(DD, CD) {
          const cD = DD ? new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength) : null;
          return null !== cD && void 0 !== cD && cD.byteLength && CD && cD.byteLength % (CD * CD * 4) === 0 ? {
            pixels: cD,
            layerWidth: CD,
            layers: cD.byteLength / (CD * CD * 4)
          } : null
        }(cD, ID)) && void 0 !== pD ? pD : await async function(DD) {
          const {
            pixels: CD,
            width: cD
          } = await Lp(DD);
          return {
            pixels: CD,
            layerWidth: cD,
            layers: CD.byteLength / (cD * cD * 4)
          }
        }(CD), {
          layerWidth: fD,
          layers: bD
        } = iD;
        return {
          texture: Vp(DD, iD.pixels, fD, fD, bD, `atlas-${CD}`),
          layerWidth: fD,
          layers: bD
        }
      })(), iD.set(CD, fD), fD.catch((() => {
        iD.delete(CD)
      }))), fD
    }
    const Rp = new Map([
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
      kp = new Map([
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

    function dp(DD) {
      for (const CD of (0, qp.m)(DD))
        if (!kp.has((0, qp.j)(CD))) return !1;
      return !0
    }

    function Yp(DD) {
      const CD = kp.get(DD);
      if (!CD) return null;
      const [cD, ID, pD] = CD;
      return {
        srcFactor: Rp.get(cD),
        dstFactor: Rp.get(ID),
        operation: pD
      }
    }
    let Wp = null;

    function sp(DD) {
      Wp = DD
    }

    function Ep(DD, CD, cD) {
      var ID;
      null === (ID = Wp) || void 0 === ID || ID(DD, CD, cD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class ep {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(DD, CD, cD, ID, pD) {
        cD !== this.pipeline && (DD.setPipeline(cD), this.pipeline = cD), DD.setBindGroup(1, ID, [pD]);
        const iD = CD.material.bindGroup;
        iD !== this.materialGroup && (DD.setBindGroup(2, iD), this.materialGroup = iD);
        const fD = CD.program.packGroup;
        fD && fD !== this.packGroup && (DD.setBindGroup(UC.h, fD), this.packGroup = fD);
        const {
          vertexBuffers: bD,
          vertexOffsets: QD
        } = this;
        for (let wD = 0; wD < CD.vertexBuffers.length; wD++) bD[wD] === CD.vertexBuffers[wD] && QD[wD] === CD.vertexOffsets[wD] || (DD.setVertexBuffer(wD, CD.vertexBuffers[wD], CD.vertexOffsets[wD]), bD[wD] = CD.vertexBuffers[wD], QD[wD] = CD.vertexOffsets[wD]);
        CD.indexBuffer && CD.indexBuffer !== this.indexBuffer && (DD.setIndexBuffer(CD.indexBuffer, CD.indexFormat), this.indexBuffer = CD.indexBuffer)
      }
    }
    class hp {
      constructor(DD, CD, cD, ID) {
        this.modelMeshes = DD, this.sF = CD, this.maker = cD, this.warnOnce = ID, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(DD) {
        this.collectGroup(DD, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(DD, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(DD, 1, this.frontDraws, this.frontDraws, !0);
        for (const CD of this.modelMeshes.groupIds())(CD < -1 || CD > 1) && this.warnOnce(`group:${CD}`, `rendering group ${CD} is not drawn`);
        for (const CD of this.sF.groupIds())(CD < -1 || CD > 1) && this.warnOnce(`group:${CD}`, `rendering group ${CD} is not drawn`);
        this.opaqueDraws.sort(rp), this.transparentDraws.sort(Ap)
      }
      collectGroup(DD, CD, cD, ID, pD) {
        const iD = this.modelMeshes.group(CD),
          fD = this.sF.group(CD),
          bD = 0 === CD ? null === fD || void 0 === fD ? void 0 : fD.opaque : void 0;
        this.collectList(DD, null === iD || void 0 === iD ? void 0 : iD.opaque, bD || null === fD || void 0 === fD ? void 0 : fD.opaque, CD, !1, cD, pD), bD && (this.sF.drawn += this.maker.bundleDraws(DD, bD, CD)), this.collectList(DD, null === iD || void 0 === iD ? void 0 : iD.alphaTest, void 0, CD, !1, cD, pD), this.collectList(DD, null === iD || void 0 === iD ? void 0 : iD.transparent, null === fD || void 0 === fD ? void 0 : fD.transparent, CD, !0, ID, pD)
      }
      collectList(DD, CD, cD, ID, pD, iD, fD) {
        var bD;
        const QD = iD.length;
        CD && this.maker.pushDraws(DD, CD.units, CD.units.length, ID, pD, iD, CD.rows), cD && (this.sF.drawn += this.maker.pushDraws(DD, cD, cD.length, ID, pD, iD));
        const wD = pD ? null === (bD = this.modelMeshes.group(ID)) || void 0 === bD ? void 0 : bD.text : void 0;
        wD && this.maker.pushDraws(DD, wD.units, wD.units.length, ID, !0, iD, wD.rows), fD && Fp(iD, QD)
      }
    }

    function rp(DD, CD) {
      return DD.program.id - CD.program.id || DD.material.owner.uniqueId - CD.material.owner.uniqueId
    }

    function Ap(DD, CD) {
      return DD.material.owner.uniqueId - CD.material.owner.uniqueId
    }

    function Fp(DD, CD) {
      for (let cD = CD + 1; cD < DD.length; cD++) {
        const ID = DD[cD];
        let pD = cD - 1;
        for (; pD >= CD && Ap(DD[pD], ID) > 0; pD--) DD[pD + 1] = DD[pD];
        DD[pD + 1] = ID
      }
    }
    const Di = {};

    function Ci(DD) {
      return DD.hasThinInstances ? "thin" : DD.nID || DD._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function ci(DD, CD, cD) {
      return DD ? (cD._needUVs = !0, DD.optimizeUVAllocation && (0, xD.F)(DD.matrix) ? (cD[`${CD}DIRECTUV`] = DD.uvSet + 1, cD[`MAINUV${DD.uvSet+1}`] = !0) : cD[`${CD}DIRECTUV`] = 0, !0) : (cD[`${CD}DIRECTUV`] = 0, !1)
    }

    function Ii(DD) {
      const CD = new Map;
      for (const cD in DD) {
        if (95 === cD.charCodeAt(0)) continue;
        const ID = DD[cD],
          pD = typeof ID;
        "number" === pD || "string" === pD ? CD.set(cD, String(ID)) : ID && "function" !== pD && CD.set(cD, !0)
      }
      return CD
    }

    function ii(DD) {
      const CD = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: cD
        }
        of DD.features)
        for (const DD in cD) CD[DD] = cD[DD];
      return CD
    }

    function fi(DD) {
      const CD = DD.parts.geometry;
      return null !== CD && void 0 !== CD && CD.live ? CD : null
    }

    function bi(DD) {
      var CD;
      return null !== (CD = fi(DD)) && void 0 !== CD ? CD : Di
    }
    class Qi {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = DD, this.warnOnce = CD, this.programWithModel = cD, this.packFailed = ID, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(DD, CD, cD, ID, pD) {
        const iD = CD.owner;
        let fD = this.drawStates.get(CD);
        if (!fD) {
          const DD = CD.parts.materials[CD.range];
          if (!DD) return this.warnOnce("model", `${cD.name} on ${iD.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          fD = {
            defines: ii(DD),
            model: DD,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: pD,
            groupId: ID,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(CD, fD)
        }
        if (this.programCurrent(fD, CD, pD, ID)) return fD.program;
        const {
          model: bD
        } = fD, QD = bi(CD), wD = this.instanceLayout(iD, pD), SD = this.definesBits(iD);
        if (!this.prepareModelDefines(DD, iD, bD, fD.defines, ID, pD)) return null;
        fD.instancing = pD, fD.groupId = ID, fD.modelVersion = bD.version, fD.geometry = QD, fD.instanceLayout = wD, fD.definesBits = SD;
        const BD = function(DD) {
          let CD = "";
          for (const [cD, ID] of DD) CD += !0 === ID ? `${cD};` : `${cD}=${ID};`;
          return CD
        }(Ii(fD.defines));
        return BD === fD.definesKey && fD.packVariant === this.modelPackVariant && fD.program && !this.packFailed(fD.program) || (fD.definesKey = BD, fD.packVariant = this.modelPackVariant, fD.program = this.programWithModel(bD, fD.defines, BD)), fD.program
      }
      programCurrent(DD, CD, cD, ID) {
        return null !== DD.program && !this.packFailed(DD.program) && DD.instancing === cD && DD.groupId === ID && this.definesHold(DD, CD, cD)
      }
      definesHold(DD, CD, cD) {
        return DD.modelVersion === DD.model.version && DD.geometry === bi(CD) && DD.instanceLayout === this.instanceLayout(CD.owner, cD) && DD.definesBits === this.definesBits(CD.owner) && DD.packVariant === this.modelPackVariant
      }
      modelPackKind(DD) {
        var CD;
        return 0 === this.modelPackVariant ? null : null !== (CD = (0, HD.q)(DD, PD.i.name)) && void 0 !== CD && CD.active ? "placed" : DD.item ? "item" : DD.lifeform ? "lifeform" : DD.box ? "box" : null
      }
      instanceLayout(DD, CD) {
        var cD, ID, pD;
        return "thin" === CD ? null !== (pD = this.resources.Vr.get(DD)) && void 0 !== pD ? pD : null : "instanced" === CD && null !== (cD = null === (ID = DD._userInstancedBuffersStorage) || void 0 === ID ? void 0 : ID.interleavedKinds) && void 0 !== cD ? cD : null
      }
      definesBits(DD) {
        const CD = this.view;
        return (DD.visibility < 1 ? 1 : 0) | (DD.hasVertexAlpha ? 2 : 0) | (DD.applyFog ? 4 : 0) | (DD.useVertexColors ? 8 : 0) | (DD.nonUniformScaling ? 16 : 0) | (CD.fogEnabled && 0 !== CD.fogMode ? 32 : 0) | (CD.lightsEnabled ? 64 : 0) | CD.lightCount << 7
      }
      prepareLightDefines(DD, CD, cD) {
        let ID = 0;
        if (this.view.lightsEnabled && !CD) {
          const CD = Math.min(cD, 4);
          for (; ID < this.view.lightCount && (DD[`LIGHT${ID}`] = !0, DD[`LITE_LIGHT${ID}_SLOT`] = ID, ID++, DD._needNormals = !0, ID !== CD););
        }
        for (let pD = ID; pD < 4; pD++) DD[`LIGHT${pD}`] = !1, DD[`LITE_LIGHT${pD}_SLOT`] = void 0
      }
      prepareModelDefines(DD, CD, cD, ID, pD, iD) {
        const {
          features: fD
        } = cD;
        ID._needNormals = !1, ID._needUVs = !1;
        const bD = this.view;
        this.prepareLightDefines(ID, cD.disableLighting, cD.maxSimultaneousLights), ID.MAINUV1 = !1, ID.MAINUV2 = !1;
        const QD = cD.diffuseTexture;
        QD ? (ID._needUVs = !0, ID.DIFFUSE = !0, QD.optimizeUVAllocation && (0, xD.F)(QD.matrix) ? (ID.DIFFUSEDIRECTUV = QD.uvSet + 1, ID[`MAINUV${QD.uvSet+1}`] = !0) : ID.DIFFUSEDIRECTUV = 0, QD.uvSet > 1 && this.warnOnce(`uvset:${cD.name}`, `${cD.name} samples UV set ${QD.uvSet+1}, which is not supported`)) : (ID.DIFFUSE = !1, ID.DIFFUSEDIRECTUV = 0);
        const wD = cD.opacityTexture,
          SD = cD.emissiveTexture;
        ID.OPACITY = ci(wD, "OPACITY", ID), ID.OPACITYRGB = null !== wD && wD.getAlphaFromRGB, ID.EMISSIVE = ci(SD, "EMISSIVE", ID), (wD && wD.uvSet > 1 || SD && SD.uvSet > 1) && this.warnOnce(`uvset:${cD.name}`, `${cD.name} samples a UV set past 2, which is not supported`);
        const BD = cD.reflectionTexture,
          yD = null !== BD;
        if (yD) {
          if (!this.resources.boundTexture(BD)) return !1;
          ID._needNormals = !0
        }
        ID.REFLECTION = yD, ID.REFLECTIONMAP_3D = yD, ID.REFLECTIONMAP_SKYBOX = yD, ID.REFLECTIONMAP_OPPOSITEZ = yD && (DD.useRightHandedSystem ? !BD.invertZ : BD.invertZ), ID.ROUGHNESS = yD && cD.roughness > 0, ID.REFLECTIONOVERALPHA = yD && cD.useReflectionOverAlpha, ID.LITE_REFLECTION_LUMINANCE = yD && "cube" === BD.source.kind && BD.source.luminance, (CD.skeleton || CD.morphTargetManager) && this.warnOnce(`skin:${CD.name}`, `${CD.name} has bones or morph targets, which are not supported`), ID.FOG = cD.fogEnabled && CD.applyFog && bD.fogEnabled && 0 !== bD.fogMode, ID.NONUNIFORMSCALING = CD.nonUniformScaling;
        const {
          visibility: MD,
          hasVertexAlpha: tD
        } = CD;
        ID.ALPHATEST = (0, HD.H)(cD, MD, tD), ID.ALPHAFROMDIFFUSE = (0, HD.U)(cD), ID.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== cD.transparencyMode, ID.ALPHABLEND = null === cD.transparencyMode || (0, HD.F)(cD, MD, tD), ID.PREMULTIPLYALPHA = 7 === cD.alphaMode || 8 === cD.alphaMode, ID.EMISSIVEASILLUMINATION = cD.useEmissiveAsIllumination, ID.LINKEMISSIVEWITHDIFFUSE = cD.linkEmissiveWithDiffuse, ID.TWOSIDEDLIGHTING = !cD.backFaceCulling && cD.twoSidedLighting, ID.INSTANCES = "none" !== iD, ID.THIN_INSTANCES = "thin" === iD, ID.LITE_FRONT_LAYER = pD >= 1;
        for (const {
            feature: OD,
            state: PD,
            active: HD
          }
          of fD) {
          var ZD, oD;
          if (HD) null === (ZD = (oD = (0, SC.h)(OD)).prepareDefinesBeforeAttributes) || void 0 === ZD || ZD.call(oD, PD, ID, DD, CD)
        }
        this.modelPackKind(cD) && (ID._needNormals = !0), ID.NORMAL = ID._needNormals && CD.isVerticesDataPresent("normal"), ID.UV1 = ID._needUVs && CD.isVerticesDataPresent("uv"), ID.UV2 = ID._needUVs && CD.isVerticesDataPresent("uv2");
        const vD = CD.useVertexColors && CD.isVerticesDataPresent("color");
        ID.VERTEXCOLOR = vD, ID.VERTEXALPHA = CD.hasVertexAlpha && vD, ID.INSTANCESCOLOR = "none" !== iD && CD.isVerticesDataPresent("instanceColor");
        for (const {
            feature: OD,
            state: PD,
            active: HD
          }
          of fD) {
          var ND, gD;
          if (HD) null === (ND = (gD = (0, SC.h)(OD)).prepareDefines) || void 0 === ND || ND.call(gD, PD, ID, DD, CD, cD)
        }
        const XD = DD.DZ();
        for (const {
            feature: OD,
            state: PD,
            active: HD
          }
          of fD) {
          var mD, nD;
          if (HD && !1 === (null === (mD = (nD = (0, SC.h)(OD)).isReadyForSubMesh) || void 0 === mD ? void 0 : mD.call(nD, PD, ID, DD, XD))) return !1
        }
        return !0
      }
    }

    function wi(DD, CD, cD) {
      return DD.codeVersion !== CD.version && function(DD, CD) {
        const cD = [],
          ID = [];
        for (const {
            feature: yD,
            state: MD,
            active: tD
          }
          of CD.features) {
          var pD, iD, fD, bD;
          if (tD) Si(null === (pD = (iD = (0, SC.h)(yD)).getCustomCode) || void 0 === pD ? void 0 : pD.call(iD, MD, "vertex", nD.e.WGSL), cD), Si(null === (fD = (bD = (0, SC.h)(yD)).getCustomCode) || void 0 === fD ? void 0 : fD.call(bD, MD, "fragment", nD.e.WGSL), ID)
        }
        const QD = [];
        for (const {
            feature: yD,
            state: MD
          }
          of CD.features) {
          var wD, SD;
          const DD = null === (wD = (SD = (0, SC.h)(yD)).getUniforms) || void 0 === wD ? void 0 : wD.call(SD, MD, nD.e.WGSL);
          for (const CD of null !== (BD = null === DD || void 0 === DD ? void 0 : DD.ubo) && void 0 !== BD ? BD : []) {
            var BD;
            CD.size && CD.type && QD.push({
              name: CD.name,
              type: CD.type,
              arraySize: CD.arraySize
            })
          }
        }
        DD.vertexCode = cD, DD.fragmentCode = ID, DD.pluginUniforms = QD, DD.codeKey = JSON.stringify([cD, ID, QD]), DD.codeVersion = CD.version
      }(DD, CD), `${cD}#${DD.codeKey}`
    }

    function Si(DD, CD) {
      if (DD)
        for (const cD in DD) DD[cD] && CD.push([cD, DD[cD]])
    }
    const Bi = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class yi {
      constructor(DD) {
        this.warnOnce = DD, this.states = new Map
      }
      renderState(DD, CD, cD, ID) {
        var pD;
        let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          fD = null !== (pD = DD.sideOrientation) && void 0 !== pD ? pD : CD.sideOrientation;
        CD._getWorldMatrixDeterminant() < 0 && (fD = 0 === fD ? 1 : 0);
        const bD = "triangle-list" === iD,
          QD = cD ? DD.alphaMode : 0,
          wD = (!cD || (0 === QD || DD.forceDepthWrite)) && !DD.disableDepthWrite,
          SD = bD && DD.backFaceCulling ? DD.cullBackFaces ? "back" : "front" : "none",
          BD = bD && 0 !== fD ? "ccw" : "cw",
          yD = DD.depthFunction,
          MD = bD ? DD.zOffset : 0,
          tD = bD ? DD.zOffsetUnits : 0,
          ZD = !DD.disableColorWrite;
        return ID && ID.alphaMode === QD && ID.depthWrite === wD && ID.depthFunction === yD && ID.cullMode === SD && ID.frontFace === BD && ID.zOffset === MD && ID.zOffsetUnits === tD && ID.colourWrite === ZD && ID.topology === iD ? ID : this.stateFor(QD, wD, yD, SD, BD, MD, tD, ZD, iD)
      }
      stateFor(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        const wD = `${DD}|${CD}|${cD}|${ID}|${pD}|${iD}|${fD}|${bD}|${QD}`;
        let SD = this.states.get(wD);
        if (!SD) {
          var BD;
          const yD = DD ? Yp(DD) : null;
          DD && !yD && this.warnOnce(`alpha:${DD}`, `alpha mode ${DD} is not supported`), SD = {
            key: wD,
            alphaMode: DD,
            depthFunction: cD,
            zOffset: iD,
            zOffsetUnits: fD,
            topology: QD,
            blend: yD,
            depthWrite: CD,
            depthCompare: cD && null !== (BD = Bi.get(cD)) && void 0 !== BD ? BD : null,
            cullMode: ID,
            frontFace: pD,
            depthBias: -fD,
            depthBiasSlopeScale: -iD,
            colourWrite: bD
          }, this.states.set(wD, SD)
        }
        return SD
      }
    }
    var Mi = cD(36796);

    function ti(DD) {
      if (!DD.frozen) return -1;
      let CD = DD.version;
      for (const {
          feature: cD,
          state: ID,
          active: pD
        }
        of DD.features) {
        if (!pD || !cD.bind) continue;
        const DD = (0, SC.h)(cD).uniformsVersion;
        if (!DD) return -1;
        CD += DD(ID)
      }
      return CD
    }
    class Zi {
      constructor(DD, CD, cD) {
        this.slots = DD, this.data = CD, this.textures = cD, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(DD, CD) {
        this.write4(DD, CD, 0, 0, 0, 1)
      }
      updateFloat2(DD, CD, cD) {
        this.write4(DD, CD, cD, 0, 0, 2)
      }
      updateFloat3(DD, CD, cD, ID) {
        this.write4(DD, CD, cD, ID, 0, 3)
      }
      updateFloat4(DD, CD, cD, ID, pD) {
        this.write4(DD, CD, cD, ID, pD, 4)
      }
      updateVector3(DD, CD) {
        this.write4(DD, CD.x, CD.y, CD.z, 0, 3)
      }
      updateVector4(DD, CD) {
        this.write4(DD, CD.x, CD.y, CD.z, CD.w, 4)
      }
      updateColor3(DD, CD) {
        this.write4(DD, CD.r, CD.g, CD.b, 0, 3)
      }
      updateColor4(DD, CD, cD) {
        this.write4(DD, CD.r, CD.g, CD.b, cD, 4)
      }
      updateFloatsFrom(DD, CD, cD, ID) {
        const pD = this.slots.get(DD);
        if (!pD) return;
        const iD = this.data,
          fD = pD.offset;
        for (let bD = 0; bD < ID; bD++) iD[fD + bD] = CD[cD + bD]
      }
      updateFloat3TimesFloats(DD, CD, cD, ID) {
        const pD = this.slots.get(DD);
        if (!pD) return;
        const iD = this.data,
          fD = pD.offset;
        iD[fD] = CD[cD] * ID[0], iD[fD + 1] = CD[cD + 1] * ID[1], iD[fD + 2] = CD[cD + 2] * ID[2]
      }
      o5(DD, CD) {
        const cD = this.slots.get(DD);
        cD && this.data.set(CD.m, cD.offset)
      }
      updateMatrixFloats(DD, CD) {
        const cD = this.slots.get(DD);
        cD && this.data.set(CD, cD.offset)
      }
      updateFloatArray(DD, CD) {
        const cD = this.slots.get(DD);
        if (!cD) return;
        if (!cD.arraySize || cD.stride === cD.floats) return void this.data.set(CD, cD.offset);
        const ID = Math.min(CD.length, cD.floats * cD.arraySize);
        for (let pD = 0; pD < ID; pD++) this.data[cD.offset + Math.floor(pD / cD.floats) * cD.stride + pD % cD.floats] = CD[pD]
      }
      updateArray(DD, CD) {
        this.updateFloatArray(DD, CD)
      }
      setTexture(DD, CD) {
        this.textures.set(DD, CD), this.expected.delete(DD)
      }
      expectTexture(DD) {
        this.textures.set(DD, null), this.expected.add(DD)
      }
      write4(DD, CD, cD, ID, pD, iD) {
        const fD = this.slots.get(DD);
        if (!fD) return;
        const bD = this.data,
          QD = fD.offset;
        bD[QD] = CD, iD > 1 && (bD[QD + 1] = cD), iD > 2 && (bD[QD + 2] = ID), iD > 3 && (bD[QD + 3] = pD)
      }
    }

    function oi(DD, CD) {
      const cD = GI,
        ID = Mi.i,
        pD = DD.lights,
        iD = Math.min(DD.lightCount, 8);
      for (let fD = 0; fD < iD; fD++) {
        const DD = cD.lights + fD * cD.lightStride,
          iD = fD * Mi.b;
        CD[DD] = pD[iD + ID.vector], CD[DD + 1] = pD[iD + ID.vector + 1], CD[DD + 2] = pD[iD + ID.vector + 2], CD[DD + 3] = pD[iD + ID.kind] === Mi.f.directional ? 1 : 0, CD[DD + 4] = pD[iD + ID.diffuse], CD[DD + 5] = pD[iD + ID.diffuse + 1], CD[DD + 6] = pD[iD + ID.diffuse + 2], CD[DD + 7] = pD[iD + ID.range], CD[DD + 8] = pD[iD + ID.specular], CD[DD + 9] = pD[iD + ID.specular + 1], CD[DD + 10] = pD[iD + ID.specular + 2], CD[DD + 11] = pD[iD + ID.range]
      }
      CD[cD.fogInfos] = DD.fogMode, CD[cD.fogInfos + 1] = DD.fogStart, CD[cD.fogInfos + 2] = DD.fogEnd, CD[cD.fogInfos + 3] = DD.fogDensity, CD[cD.fogColour] = DD.fogColour[0], CD[cD.fogColour + 1] = DD.fogColour[1], CD[cD.fogColour + 2] = DD.fogColour[2], CD[cD.outputHeight] = DD.renderHeight, CD[cD.animTick] = DD.animTick, CD[cD.timeMs] = DD.timeMs
    }
    class vi {
      constructor(DD) {
        this.instancesOf = DD
      }
      refreshModelUniforms(DD, CD, cD, ID) {
        const pD = ti(cD);
        if (pD >= 0 && pD === CD.heldVersion && CD.textures.get("diffuseSampler") === cD.diffuseTexture && CD.textures.get("reflectionCubeSampler") === cD.reflectionTexture && CD.textures.get("opacitySampler") === cD.opacityTexture && CD.textures.get("emissiveSampler") === cD.emissiveTexture) return !0;
        if (pD < 0)
          for (const iD of this.instancesOf(cD)) iD.heldVersion = -1;
        return this.writeModelUniforms(DD, CD, cD, ID), CD.heldVersion = pD, !1
      }
      writeModelUniforms(DD, CD, cD, ID) {
        const {
          ubo: pD
        } = CD, iD = cD.diffuseTexture, fD = cD.diffuseColor;
        pD.updateFloat4("vDiffuseColor", fD[0], fD[1], fD[2], cD.alpha), iD && (pD.updateFloat2("vDiffuseInfos", iD.uvSet, iD.level), pD.updateMatrixFloats("diffuseMatrix", iD.matrix)), pD.updateFloat("alphaCutOff", cD.alphaCutOff), pD.updateFloatsFrom("vEmissiveColor", cD.emissiveColor, 0, 3), pD.updateFloat3TimesFloats("vAmbientColor", ID.ambientColour, 0, cD.ambientColor);
        const bD = cD.specularColor;
        pD.updateFloat4("vSpecularColor", bD[0], bD[1], bD[2], cD.specularPower), pD.setTexture("diffuseSampler", iD);
        const QD = cD.opacityTexture;
        QD && (pD.updateFloat2("vOpacityInfos", QD.uvSet, QD.level), pD.updateMatrixFloats("opacityMatrix", QD.matrix)), pD.setTexture("opacitySampler", QD);
        const wD = cD.emissiveTexture;
        wD && (pD.updateFloat2("vEmissiveInfos", wD.uvSet, wD.level), pD.updateMatrixFloats("emissiveMatrix", wD.matrix)), pD.setTexture("emissiveSampler", wD);
        const SD = cD.reflectionTexture;
        SD && pD.updateMatrixFloats("reflectionMatrix", SD.matrix), pD.updateFloat2("vReflectionInfos", SD ? SD.level * DD.iblIntensity : 0, cD.roughness), pD.setTexture("reflectionCubeSampler", SD);
        const BD = DD.DZ();
        for (const {
            feature: tD,
            state: ZD,
            active: oD
          }
          of cD.features) {
          var yD, MD;
          if (oD) null === (yD = (MD = (0, SC.h)(tD)).bind) || void 0 === yD || yD.call(MD, ZD, pD, DD, BD)
        }
      }
    }

    function Ni(DD) {
      const CD = DD.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(CD) ? "u32" : /i32|^vec\di$/.test(CD) ? "i32" : "f32"
    }

    function gi(DD, CD) {
      const cD = DD.getSize(),
        ID = Ni(CD),
        pD = DD => 4 === cD ? `${DD}x4` : 2 === cD ? `${DD}x2` : null;
      if ("f32" === ID) {
        if (5126 === DD.type) return 1 === cD ? "float32" : cD >= 2 && cD <= 4 ? `float32x${cD}` : null;
        if (!DD.normalized) return null;
        switch (DD.type) {
          case 5121:
            return pD("unorm8");
          case 5120:
            return pD("snorm8");
          case 5123:
            return pD("unorm16");
          case 5122:
            return pD("snorm16")
        }
        return null
      }
      const iD = "u32" === ID ? "uint" : "sint";
      switch (DD.type) {
        case 5125:
        case 5124:
          return 1 === cD ? `${iD}32` : cD <= 4 ? `${iD}32x${cD}` : null;
        case 5121:
        case 5120:
          return pD(`${iD}8`);
        case 5123:
        case 5122:
          return pD(`${iD}16`)
      }
      return null
    }

    function Xi(DD) {
      var CD;
      const cD = /(8|16|32)(?:x(\d))?$/.exec(DD);
      return cD ? Number(cD[1]) / 8 * Number(null !== (CD = cD[2]) && void 0 !== CD ? CD : 1) : 4
    }
    class mi {
      constructor(DD, CD, cD) {
        this.resources = DD, this.limits = CD, this.warnOnce = cD, this.layouts = new Map
      }
      resolveInputs(DD, CD, cD, ID) {
        const pD = [],
          iD = cD.program.attributes,
          fD = [];
        for (let SD = 0; SD < iD.length; SD++) {
          const cD = iD[SD],
            bD = cD.optional ? null : this.resources.vertexInput(DD, cD.name, ID);
          if (!bD) {
            const DD = Ni(cD.type),
              CD = "u32" === DD ? "uint32x4" : "i32" === DD ? "sint32x4" : "float32x4";
            fD.push(null);
            const ID = pD.find((DD => null === DD.data));
            ID ? ID.attributes.push({
              shaderLocation: SD,
              offset: 0,
              format: CD
            }) : pD.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: SD,
                offset: 0,
                format: CD
              }]
            });
            continue
          }
          const QD = bD.getBuffer();
          fD.push(bD);
          const wD = gi(bD, cD.type);
          if (!wD) return this.warnOnce(`format:${CD}:${cD.name}`, `${CD}'s ${cD.name} (type ${bD.type}, size ${bD.getSize()}) has no WebGPU vertex format`), null;
          const BD = bD.getIsInstanced() ? "instance" : "vertex",
            yD = bD.byteStride,
            MD = Xi(wD),
            tD = pD.find((DD => DD.data === QD && DD.stride === yD && DD.step === BD && bD.byteOffset >= DD.base && bD.byteOffset - DD.base + MD <= yD));
          tD ? tD.attributes.push({
            shaderLocation: SD,
            offset: bD.byteOffset - tD.base,
            format: wD
          }) : pD.push({
            data: QD,
            base: bD.byteOffset,
            stride: yD,
            step: BD,
            attributes: [{
              shaderLocation: SD,
              offset: 0,
              format: wD
            }]
          })
        }
        if (pD.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${CD}`, `${CD} needs ${pD.length} vertex buffers`), null;
        let bD = "";
        for (const SD of pD) {
          bD += `${SD.stride}${"instance"===SD.step?"i":"v"}`;
          for (const DD of SD.attributes) bD += `,${DD.shaderLocation}:${DD.offset}:${DD.format}`;
          bD += ";"
        }
        let QD = this.layouts.get(bD);
        QD || (QD = {
          key: bD,
          buffers: pD.map((DD => ({
            arrayStride: DD.stride,
            stepMode: DD.step,
            attributes: DD.attributes
          }))),
          instanceEnds: pD.map((DD => {
            let CD = -1;
            if ("instance" === DD.step)
              for (const cD of DD.attributes) CD = Math.max(CD, cD.offset + Xi(cD.format));
            return CD
          }))
        }, this.layouts.set(bD, QD));
        const wD = pD.map((DD => DD.base));
        return {
          program: cD,
          sources: fD,
          layout: QD,
          slotData: pD.map((DD => DD.data)),
          Z8: wD,
          buffers: [],
          offsets: wD,
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

    function ni(DD, CD, cD, ID) {
      const pD = CD.program.program.attributes;
      for (let iD = 0; iD < pD.length; iD++) {
        if ((pD[iD].optional ? null : cD.vertexInput(DD, pD[iD].name, ID)) !== CD.sources[iD]) return !1
      }
      return !0
    }
    const Oi = 64;
    class Pi {
      constructor(DD, CD, cD, ID) {
        this.device = DD, this.layout = CD, this.frameBuffer = cD, this.label = ID, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(DD) {
        if (DD * Oi <= this.data.length) return !1;
        let CD = 2 * this.data.length;
        for (; DD * Oi > CD;) CD *= 2;
        const cD = new Float32Array(CD);
        return cD.set(this.data), this.data = cD, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const pD = this.data,
          iD = DD * Oi;
        let fD = pD[iD + 16] !== cD;
        for (let bD = 0; bD < 16 && !fD; bD++) fD = pD[iD + bD] !== CD[ID + bD];
        if (fD) {
          for (let DD = 0; DD < 16; DD++) pD[iD + DD] = CD[ID + DD];
          pD[iD + 16] = cD
        }
        return fD
      }
      upload(DD, CD) {
        this.device.queue.writeBuffer(this.buffer, DD * RI, this.data, DD * Oi, (CD - DD) * Oi)
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

    function Hi(DD) {
      return DD.gpu[xD.h.lite] ??= DD.materials.map(((CD, cD) => ({
        parts: DD,
        range: cD,
        owner: DD.owner
      })))
    }

    function Ui(DD) {
      var CD, cD, ID;
      return null !== (CD = null !== (cD = null === (ID = DD.parts.materials[DD.range]) || void 0 === ID ? void 0 : ID.mirror) && void 0 !== cD ? cD : DD.owner.material) && void 0 !== CD ? CD : null
    }
    const xi = ["opaque", "alphaTest", "transparent", "text"];
    class qi {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, wC.e)("Lite: ")
      }
      attach(DD, CD) {
        this.model = DD, this.mirror = CD
      }
      get worlds() {
        return this.model.nodes.Zy
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(DD) {
        return this.groups.get(DD)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(DD) {
        for (const [CD, cD] of this.groups)
          for (const ID of xi)
            for (const pD of cD[ID].units) DD(pD.owner, "text" === ID ? "transparent" : ID, CD)
      }
      select(DD, CD) {
        this.frame++, this.selectedCount = 0;
        for (const bD of this.groups.values())
          for (const DD of xi) bD[DD].units.length = 0, bD[DD].rows.length = 0;
        const {
          model: cD,
          mirror: ID
        } = this;
        if (!cD || !ID || !DD) return;
        this.rows.length < cD.nodes.LB && (this.rows = new Int32Array(cD.nodes.LB));
        const pD = this.rows,
          iD = cD.meshes;
        for (let bD = 0; bD < iD.looseCount; bD++) {
          const DD = iD.loose[bD],
            cD = ID.nodes[DD];
          cD && !cD.isBlocked && cD.isEnabled() && !cD.ci.hasAZeroComponent && iD.selects(DD, CD.frustum) && (this.activate(cD, DD), this.selectedCount++)
        }
        const fD = iD.selectTextPlanes(CD.frustum, pD);
        for (let bD = 0; bD < fD; bD++) {
          const CD = pD[bD],
            iD = ID.nodes[CD],
            fD = cD.meshes.parts[CD];
          if (!iD.isVisible || !(iD.visibility > 0) || 0 === (iD.layerMask & DD.layerMask) || !fD) continue;
          const QD = this.groupOf(cD.meshes.layer[CD]).text;
          for (const DD of Hi(fD)) QD.units.push(DD), QD.rows.push(CD);
          this.selectedCount++
        }
      }
      instanceBatch(DD) {
        const CD = this.batchOf(DD);
        return CD.dispatched || (CD.dispatched = CD.renderSelf = !0, CD.row = this.rowOf(DD)), CD
      }
      rowOf(DD) {
        return DD.row
      }
      activate(DD, CD) {
        if (!DD.Fq) {
          const cD = DD;
          if (cD.nID) {
            const DD = this.batchOf(cD);
            DD.dispatched = !0, DD.renderSelf = !0, DD.row = CD
          }
          return void this.dispatch(cD, CD, CD)
        }
        const cD = DD,
          ID = cD.OID;
        if (ID._getWorldMatrixDeterminant() >= 0 !== cD._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${ID.name}`, `A mirrored InstancedMesh of ${ID.name} is not drawn yet`);
        const pD = this.batchOf(ID);
        pD.instances.push(cD), pD.rows.push(CD), pD.dispatched || (pD.dispatched = !0, this.dispatch(ID, CD, this.rowOf(ID)))
      }
      batchOf(DD) {
        let CD = this.batches.get(DD);
        return CD || (CD = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(DD, CD)), CD.frame !== this.frame && (CD.frame = this.frame, CD.dispatched = !1, CD.renderSelf = !1, CD.instances.length = 0, CD.rows.length = 0), CD
      }
      dispatch(DD, CD, cD) {
        const {
          layer: ID,
          parts: pD
        } = this.model.meshes;
        if (!pD[CD]) return;
        const iD = this.groupOf(ID[CD]),
          fD = DD;
        for (const bD of Hi(pD[CD])) {
          const DD = Ui(bD);
          if (!DD) continue;
          const CD = DD.needAlphaBlendingForMesh(fD) ? iD.transparent : DD.needAlphaTestingForMesh(fD) ? iD.alphaTest : iD.opaque;
          CD.units.push(bD), CD.rows.push(cD)
        }
      }
      groupOf(DD) {
        let CD = this.groups.get(DD);
        return CD || (CD = {
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
        }, this.groups.set(DD, CD)), CD
      }
    }
    class Ji {
      constructor() {
        this.Lb = new Map, this.enabled = [], this.groups = new Map, this.uM = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(DD) {
        if (this.Lb.has(DD)) return;
        const CD = {
          mesh: DD,
          observer: DD.onEffectiveEnabledStateChangedObservable.add((DD => {
            this.lH(CD, DD)
          })),
          index: -1,
          steady: null
        };
        this.Lb.set(DD, CD), this.lH(CD, DD.isEnabled())
      }
      remove(DD) {
        const CD = this.Lb.get(DD);
        CD && (CD.observer.remove(!0), this.lH(CD, !1), this.Lb.delete(DD))
      }
      base(DD) {
        return this.Lb.get(DD)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Lb: this.Lb.size
        }
      }
      forEachSelected(DD) {
        for (const [CD, cD] of this.groups) {
          for (const ID of cD.opaque) DD(ID.owner, "opaque", CD);
          for (const ID of cD.transparent) DD(ID.owner, "transparent", CD)
        }
        for (const CD of this.uM) DD(CD.mesh, "opaque", 0)
      }
      group(DD) {
        return this.groups.get(DD)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(DD, CD) {
        this.drawn = 0, this.selected = 0, this.uM.length = 0;
        for (const ID of this.groups.values()) ID.opaque.length = 0, ID.transparent.length = 0;
        if (!DD) return;
        const cD = this.enabled;
        for (let ID = 0; ID < cD.length; ID++) {
          const pD = cD[ID];
          if (pD.steady && CD(pD, DD)) {
            this.selected++, this.uM.push(pD);
            continue
          }
          const iD = pD.mesh;
          if (iD.isBlocked || iD.ci.hasAZeroComponent) continue;
          if (!iD.isVisible || iD.visibility <= 0 || 0 === (iD.layerMask & DD.layerMask)) continue;
          if (iD.nID) {
            this.warned.has(iD.name) || (this.warned.add(iD.name), console.warn(`Lite: thin instance base ${iD.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: fD
          } = iD;
          if (!fD) continue;
          iD.computeWorldMatrix(), this.selected++;
          const bD = this.listsFor(iD.renderingGroupId);
          for (const DD of Hi(fD)) {
            const CD = Ui(DD);
            CD && (CD.needAlphaBlendingForMesh(iD) ? bD.transparent.push(DD) : bD.opaque.push(DD))
          }
        }
      }
      lH(DD, CD) {
        if (CD === DD.index >= 0) return;
        DD.steady = null;
        const cD = this.enabled;
        if (CD) DD.index = cD.length, cD.push(DD);
        else {
          const CD = cD.pop();
          CD !== DD && (cD[DD.index] = CD, CD.index = DD.index), DD.index = -1
        }
      }
      listsFor(DD) {
        let CD = this.groups.get(DD);
        return CD || (CD = {
          opaque: [],
          transparent: []
        }, this.groups.set(DD, CD)), CD
      }
    }
    var Ki = cD(38867);
    class ai {
      constructor() {
        this.bundle = null, this.stale = !0, this.Lb = new Set
      }
    }
    class Vi {
      constructor(DD, CD, cD) {
        this.device = DD, this.slots = CD, this.host = cD, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new ai, this.vx = new ai, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new ep, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(DD) {
          var CD, cD;
          let ID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (CD = null === (cD = globalThis.navigator) || void 0 === cD ? void 0 : cD.userAgent) && void 0 !== CD ? CD : "";
          const pD = DD.adapterInfo;
          return "intel" === (null === pD || void 0 === pD ? void 0 : pD.vendor) && "gen-12lp" === pD.architecture && ID.includes("Windows")
        }(DD), (0, Ki.N)(this.direct)
      }
      Wm() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Ki.N)(this.directThisFrame)
      }
      add(DD, CD, cD, ID) {
        let pD = this.records.get(DD);
        return pD || (pD = this.createRecord(DD), this.records.set(DD, pD)), pD.recorded && ji(pD, CD) || (this.bundleOf(pD).stale = !0), this.place(pD, CD, cD, ID), pD
      }
      bundleOf(DD) {
        return DD.vx ? this.vx : this.main
      }
      addAgain(DD, CD, cD, ID) {
        DD.recorded || (this.bundleOf(DD).stale = !0), this.place(DD, CD, cD, ID)
      }
      place(DD, CD, cD, ID) {
        DD.seen = this.frame, DD.vx && null === DD.draw && (this.vx.stale = !0), DD.draw = CD, this.drawn++, cD && this.slots.write(DD.slot, cD, ID) && (this.slotsFrom = Math.min(this.slotsFrom, DD.slot), this.slotsTo = Math.max(this.slotsTo, DD.slot));
        const pD = this.args,
          iD = 5 * DD.slot;
        pD[iD] === CD.count && pD[iD + 1] === CD.instances && pD[iD + 2] === CD.first || (pD[iD] = CD.count, pD[iD + 1] = CD.instances, pD[iD + 2] = CD.first, this.argsDirty = !0, this.vx.stale ||= DD.vx)
      }
      Am() {
        for (const DD of this.records.values()) DD.seen !== this.frame && (DD.draw && (DD.draw = null, this.args[5 * DD.slot + 1] = 0, this.argsDirty = !0, this.vx.stale ||= DD.vx), this.frame - DD.seen > 120 && (this.records.delete(DD.unit), this.freeSlots.push(DD.slot), DD.recorded && (this.bundleOf(DD).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(DD) {
        for (const CD of this.records.values()) CD.draw && CD.seen === this.frame && !CD.vx && DD(CD.draw, this.slots.data, CD.slot * RI / 4)
      }
      resourceDestroyed(DD) {
        this.main.stale ||= this.main.Lb.has(DD), this.vx.stale ||= this.vx.Lb.has(DD)
      }
      execute(DD, CD, cD) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(DD, CD, cD, "direct"), this.drawn;
        const ID = this.host.sceneGroup(CD);
        if (!ID) return this.main.bundle = null, this.vx.bundle = null, this.recordedSceneGroup = null, this.encode(DD, CD, cD, "direct"), this.drawn;
        this.recordedTarget === cD && this.recordedSceneGroup === ID || (this.recordedTarget = cD, this.recordedSceneGroup = ID, this.main.stale = !0, this.vx.stale = !0);
        const pD = this.main,
          iD = this.vx;
        let fD = !1;
        !pD.stale && pD.bundle || (pD.bundle = this.record(CD, cD, ID, "indirect"), fD = !0);
        const bD = (0, Ki.n)();
        return (iD.stale || this.rangedEpoch !== bD) && (this.rangedEpoch = bD, iD.bundle = this.drawsRanged() ? this.record(CD, cD, ID, "vx") : this.noRangedBundle(), fD = !0), fD && (this.bundles = iD.bundle ? [pD.bundle, iD.bundle] : [pD.bundle]), DD.executeBundles(this.bundles), DD.setBindGroup(0, ID), this.drawn
      }
      record(DD, CD, cD, ID) {
        const pD = this.device.createRenderBundleEncoder({
          label: "vx" === ID ? "thin-bases-ranged" : "thin-bases",
          colorFormats: DD._colorFormat ? [DD._colorFormat] : [],
          depthStencilFormat: DD._depthStencilFormat,
          sampleCount: DD._sampleCount
        });
        return pD.setBindGroup(0, cD), this.encode(pD, DD, CD, ID), pD.finish()
      }
      noRangedBundle() {
        for (const DD of this.records.values()) DD.vx && (DD.recorded = !1);
        return this.vx.Lb.clear(), this.vx.stale = !1, null
      }
      drawsRanged() {
        for (const DD of this.records.values())
          if (DD.vx && DD.draw) return !0;
        return !1
      }
      encode(DD, CD, cD, ID) {
        const pD = [];
        for (const QD of this.records.values()) "direct" !== ID && QD.vx !== ("vx" === ID) || (QD.recorded = !1, QD.draw && pD.push(QD));
        pD.sort(li);
        const iD = "direct" === ID ? null : "vx" === ID ? this.vx : this.main;
        null === iD || void 0 === iD || iD.Lb.clear(), this.binder.reset();
        let fD = !1;
        for (const QD of pD) {
          var bD;
          const pD = QD.draw,
            wD = this.host.pipelineFor(pD, CD, cD);
          if (!wD) {
            this.host.pipelineCompiling(pD, cD) ? fD = !0 : iD && this.keep(QD, pD, iD.Lb);
            continue
          }
          let SD;
          if (QD.vx && "indirect" !== ID) {
            const DD = QD.unit.owner;
            SD = "direct" === ID && (0, Ki.w)(DD) || (0, Ki.o)(DD) || void 0
          }
          if (iD && this.keep(QD, pD, iD.Lb), 0 === (null === (bD = SD) || void 0 === bD ? void 0 : bD.count)) continue;
          this.binder.bind(DD, pD, wD, this.slots.bindGroup, QD.slot * RI);
          const BD = 5 * QD.slot;
          if ("indirect" === ID) {
            pD.indexBuffer ? DD.drawIndexedIndirect(this.argsBuffer, 4 * BD) : DD.drawIndirect(this.argsBuffer, 4 * BD);
            continue
          }
          const yD = this.args;
          SD ? zi(DD, null !== pD.indexBuffer, yD, BD, SD) : pD.indexBuffer ? DD.drawIndexed(yD[BD], yD[BD + 1], yD[BD + 2], 0, 0) : DD.draw(yD[BD], yD[BD + 1], yD[BD + 2], 0)
        }
        iD && (iD.stale = fD)
      }
      keep(DD, CD, cD) {
        DD.recorded = !0, DD.pipelineKey = CD.pipelineKey, DD.materialGroup = CD.material.bindGroup, DD.vertexBuffers.length = 0, DD.vertexBuffers.push(...CD.vertexBuffers), DD.vertexOffsets = CD.vertexOffsets, DD.indexBuffer = CD.indexBuffer, DD.indexFormat = CD.indexFormat;
        for (const ID of CD.vertexBuffers) cD.add(ID);
        CD.indexBuffer && cD.add(CD.indexBuffer), cD.add(CD.material.buffer);
        for (const ID of CD.material.bound) ID && cD.add(ID)
      }
      createRecord(DD) {
        let CD = this.freeSlots.pop();
        return void 0 === CD && (CD = this.slotCount++, this.grow()), {
          unit: DD,
          slot: CD,
          vx: void 0 !== (0, Ki.o)(DD.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.vx.stale = !0), 5 * this.slotCount > this.args.length) {
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

    function zi(DD, CD, cD, ID, pD) {
      const iD = cD[ID + 1],
        fD = pD.data;
      for (let bD = 0; bD < pD.count; bD++) {
        const pD = Math.min(fD[2 * bD], iD),
          QD = Math.min(fD[2 * bD + 1], iD - pD);
        0 !== QD && (CD ? DD.drawIndexed(cD[ID], QD, cD[ID + 2], 0, pD) : DD.draw(cD[ID], QD, cD[ID + 2], pD))
      }
    }

    function ji(DD, CD) {
      if (DD.pipelineKey !== CD.pipelineKey || DD.materialGroup !== CD.material.bindGroup || DD.indexBuffer !== CD.indexBuffer || DD.indexFormat !== CD.indexFormat || DD.vertexOffsets !== CD.vertexOffsets || DD.vertexBuffers.length !== CD.vertexBuffers.length) return !1;
      for (let cD = 0; cD < DD.vertexBuffers.length; cD++)
        if (DD.vertexBuffers[cD] !== CD.vertexBuffers[cD]) return !1;
      return !0
    }

    function li(DD, CD) {
      return rp(DD.draw, CD.draw)
    }
    const Li = new WeakMap,
      Ti = {
        depth: !1,
        sunShadow: !1
      };

    function Gi(DD, CD) {
      let cD = Li.get(DD);
      cD || (cD = new Map, Li.set(DD, cD));
      const ID = `${CD.depth?"-depth":""}${CD.sunShadow?"-shadow":""}${CD.shadowMask?"-mask":""}`;
      let pD = cD.get(ID);
      if (!pD) {
        const iD = [{
          binding: UC.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: UC.l
          }
        }, {
          binding: UC.C,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        CD.depth && iD.push({
          binding: UC.u,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), CD.sunShadow && iD.push(... function() {
          const DD = GPUShaderStage.FRAGMENT,
            CD = UC.v;
          return [{
            binding: CD.uniform,
            visibility: DD,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: CD.Ey,
            visibility: DD,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: CD.special,
            visibility: DD,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: CD.volume,
            visibility: DD,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: CD.sampler,
            visibility: DD,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: CD.entities,
            visibility: DD,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: CD.entityGrids,
            visibility: DD,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), CD.shadowMask && iD.push({
          binding: UC.z,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), pD = DD.createBindGroupLayout({
          label: `${CD.depth?"terrain-":""}shader-pack-inputs${ID}`,
          entries: iD
        }), cD.set(ID, pD)
      }
      return pD
    }

    function Ri(DD) {
      return Gi(DD, Ti)
    }

    function ki(DD, CD) {
      if (!CD) return !1;
      const cD = (0, xC.e)(DD);
      return !!cD && lc(cD, CD)
    }

    function di(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!wI(CD)) return [];
      return [Gi(DD, {
        depth: pI(CD.packVariant),
        sunShadow: ki(CD.packVariant, cD),
        shadowMask: ID
      })]
    }
    class Yi {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = DD, this.sunShadow = cD, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(UC.l), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = DD.createBuffer({
          label: "shader-pack-inputs",
          size: UC.l,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const ID = (0, UC.F)(CD);
        this.textures = DD.createBuffer({
          label: "shader-pack-textures",
          size: ID.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), DD.queue.writeBuffer(this.textures, 0, ID), this.bindGroup = DD.createBindGroup({
          label: "shader-pack-inputs",
          layout: Ri(DD),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: UC.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: UC.C,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(DD, CD, cD) {
        (0, UC.J)(this.data, {
          seconds: DD.seconds(),
          lit: cD,
          renderOffset: DD.renderOffset(),
          i_: DD.i_(),
          eyePosition: CD,
          shadowDirection: DD.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ID = CD ? this.sunShadow : null;
        if ((CD || cD) && !ID) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!DD && !ID) return this.bindGroup;
        (DD && DD !== this.depthView || cD && cD !== this.maskView) && (this.depthView = null !== DD && void 0 !== DD ? DD : this.depthView, this.maskView = null !== cD && void 0 !== cD ? cD : this.maskView, this.groups.clear());
        const pD = (DD ? 1 : 0) | (ID ? 2 : 0) | (cD ? 4 : 0);
        let iD = this.groups.get(pD);
        if (!iD) {
          const CD = this.entries();
          DD && CD.push({
            binding: UC.u,
            resource: DD
          }), ID && CD.push(...ID.entries()), cD && CD.push({
            binding: UC.z,
            resource: cD
          }), iD = this.device.createBindGroup({
            label: `${DD||cD?"terrain-":""}shader-pack-inputs${DD?"-depth":""}${ID?"-shadow":""}${cD?"-mask":""}`,
            layout: Gi(this.device, {
              depth: !!DD,
              sunShadow: !!ID,
              shadowMask: !!cD
            }),
            entries: CD
          }), this.groups.set(pD, iD)
        }
        return iD
      }
      bind(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        DD.setBindGroup(UC.h, this.bindGroupFor(CD, cD, ID))
      }
    }

    function Wi(DD, CD, cD) {
      if (DD.gpuVersion === CD.gpuBuffersVersion) return !0;
      let ID;
      do {
        if (ID = CD.gpuBuffersVersion, !si(DD, CD, cD)) return !1
      } while (CD.gpuBuffersVersion !== ID);
      return DD.gpuVersion = ID, DD.fitInstances = 0, !0
    }

    function si(DD, CD, cD) {
      let ID = null;
      for (let iD = 0; iD < DD.slotData.length; iD++) {
        var pD;
        const fD = DD.slotData[iD],
          bD = fD ? CD.gpuBuffer(fD) : cD;
        if (!bD) return !1;
        fD && DD.layout.instanceEnds[iD] < 0 && CD.cover(fD, Number.POSITIVE_INFINITY), DD.buffers[iD] = bD;
        const QD = DD.Z8[iD] + (fD ? CD.gpuOffset(fD) : 0);
        QD !== (null !== (pD = ID) && void 0 !== pD ? pD : DD.offsets)[iD] && (ID ??= DD.offsets.slice(), ID[iD] = QD), DD.ends[iD] = fD ? CD.gpuEnd(fD) : bD.size
      }
      return ID && (DD.offsets = ID), !0
    }

    function Ei(DD, CD, cD, ID) {
      if (CD <= DD.fitInstances) return null;
      const {
        layout: pD,
        ends: iD,
        offsets: fD,
        slotData: bD,
        Z8: QD
      } = DD;
      let wD = !1;
      for (let SD = 0; SD < pD.buffers.length; SD++) {
        const DD = pD.instanceEnds[SD];
        if (DD < 0) continue;
        const ID = (CD - 1) * pD.buffers[SD].arrayStride + DD;
        if (iD[SD] - fD[SD] < ID) return {
          index: SD,
          needed: ID
        };
        const BD = bD[SD];
        BD && cD.cover(BD, QD[SD] + ID) && (wD = !0)
      }
      return wD && Wi(DD, cD, ID), DD.fitInstances = CD, null
    }
    var ei = cD(37201),
      ui = cD(37235);
    const ri = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Ai = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Fi = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Df = `((vertexInputs.aPackedLightLevels >> 16u) | ${QC.c.placed}u)`,
      Cf = "u32(vertexInputs.aShaderPackItem.x)",
      If = `${QC.c.lifeform}u`;

    function pf(DD) {
      return "item" === DD.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const ff = "bloxdSpEnchant",
      bf = "floor(finalWorld[3].xyz)";

    function Qf(DD, CD, cD) {
      return "placed" === CD.kind && DD.reads[cD].includes("bloxdFragmentBlockPosition")
    }

    function wf(DD, CD) {
      let [cD, ID] = DD;
      return cD === CD.point && ID === CD.code
    }

    function Sf(DD, CD) {
      var cD, ID, pD;
      const iD = null === (cD = DD.find((DD => DD.texture))) || void 0 === cD ? void 0 : cD.texture,
        fD = null === (ID = DD.find((DD => DD.enchantTier))) || void 0 === ID ? void 0 : ID.enchantTier,
        bD = null === (pD = DD.find((DD => DD.overlay))) || void 0 === pD ? void 0 : pD.overlay,
        QD = bD ? CD.filter((DD => wf(DD, bD))).length : 0;
      return bD && 1 === QD ? {
        texture: iD,
        overlay: bD,
        enchantTier: fD
      } : {
        texture: iD,
        enchantTier: fD
      }
    }

    function Bf(DD) {
      if ("item" === DD.kind) {
        return {
          vertexFlags: `(${Cf} & 0xffffu)`,
          varying: "vPackItem",
          value: Cf,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return DD.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Df,
        varying: "vPackFlags",
        value: Df,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function yf(DD) {
      return "lifeform" === DD.kind ? If : "0u"
    }

    function Mf(DD) {
      return !!DD.BLOXD_PLUGIN_ENCHANTMENT
    }

    function tf(DD, CD) {
      const {
        enchantTier: cD
      } = CD;
      return cD && Mf(CD.defines) && "lifeform" === CD.kind && Xf(DD, "enchantTier") ? cD : null
    }

    function Zf(DD, CD) {
      return Mf(CD.defines) && Xf(DD, "enchantSpeed")
    }

    function of(DD) {
      const {
        overlay: CD,
        defines: cD
      } = DD;
      if (!CD || !cD.DIFFUSE) return null;
      const ID = cD.VERTEXCOLOR || cD.INSTANCESCOLOR && cD.INSTANCES;
      return `vec4f(${CD.colour}.rgb * uniforms.vDiffuseInfos.y${ID?" * fragmentInputs.vColor.rgb":""}, ${CD.colour}.a)`
    }
    const vf = "fragmentInputs.vPackTexture";

    function Nf(DD) {
      const {
        atlas: CD,
        defines: cD,
        texture: ID
      } = DD;
      if (CD || !cD.DIFFUSE) return null;
      if (ID) return {
        texture: "diffuseSampler",
        ...ID
      };
      const pD = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===cD.DIFFUSEDIRECTUV?"vMainUV1":2===cD.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== DD.kind) return pD;
      if (!cD.BLOXD_PLUGIN_ANIMATED) return {
        ...pD,
        id: vf
      };
      const iD = nD.e.WGSL,
        fD = (0, nD.zb)(iD, "uAnimStatesNum"),
        bD = (0, nD.ab)(iD, (0, ei.g)(iD), fD),
        QD = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${fD})`,
        layers: [bD],
        uv: `vec2f(${QD}.x, ${QD}.y * ${fD} - ${bD})`,
        levelUv: QD,
        id: vf
      }
    }

    function gf(DD, CD) {
      return "box" === CD.kind && !!DD.hooks.surface && null !== Nf(CD)
    }

    function Xf(DD, CD) {
      return DD.reads.fragment.includes(CD)
    }

    function mf(DD) {
      return !!DD.BLOXD_LIGHTING && !DD.BLOXD_UNLIT
    }

    function nf(DD, CD, cD, ID) {
      const pD = DD.filter((DD => {
        let [cD, ID] = DD;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === cD && ID === CD
      }));
      if (1 !== pD.length) throw new Error(`A model program for shader packs has ${0===pD.length?"no":"more than one"} ${ID} code before fog (lite/modelShaderPack.ts)`);
      return DD.map((DD => DD === pD[0] ? [DD[0], cD] : DD))
    }

    function Of(DD, CD, cD, ID) {
      const {
        hooks: pD
      } = DD, {
        kind: iD,
        defines: fD
      } = CD, bD = [...cD];
      var QD;
      CD.atlas && pD.surface && bD.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Yc("atlasIdxIn")]), "item" === iD && bD.push(["CUSTOM_VERTEX_DEFINITIONS", (0, nD.f)(nD.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), gf(DD, CD) && bD.push(["CUSTOM_VERTEX_DEFINITIONS", (0, nD.f)(nD.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (QD = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${kc}[min(u32(${QD}) - 1u, arrayLength(&${kc}) - 1u)], ${QD} > 0.5);\n`)]);
      const wD = Bf(CD);
      wD && (pD.surface || pD.light) && bD.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${wD.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${wD.varying} = ${wD.value};`]);
      let SD = ID;
      if (Qf(DD, CD, "fragment") && (bD.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${bf});`]), SD = [...SD, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Xf(DD, "localPosition") && bD.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${pf(CD)};`]), Mf(fD) && pD.surface) {
        Zf(DD, CD) && bD.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const cD = tf(DD, CD);
        cD && bD.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${cD});`]);
        const ID = (0, nD.mb)(nD.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        SD = [...nf(SD, (0, ui.h)(nD.e.WGSL), ID, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, ui.e)(ff)]]
      }
      const {
        overlay: BD
      } = CD;
      BD && of(CD) && pD.surface && (SD = SD.filter((DD => !wf(DD, BD))));
      const yD = pD.light ? function(DD) {
        return "placed" === DD.kind ? {
          name: "terrain",
          engine: (0, OC.R)(nD.e.WGSL),
          pack: (0, OC.lb)(nD.e.WGSL)
        } : DD.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, OC.H)(nD.e.WGSL),
          pack: (0, OC.hb)(nD.e.WGSL)
        } : null
      }(CD) : null;
      if (yD && (SD = nf(SD, yD.engine, yD.pack, `${yD.name} light`), "placed" !== iD && mf(fD))) {
        const DD = fD.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, nD.zb)(nD.e.WGSL, "uEntityLightLevels") : (0, nD.Hb)(nD.e.WGSL, "aLightLevels");
        bD.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${OC.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, OC.kb)(nD.e.WGSL, DD)])
      }
      return {
        vertexCode: bD,
        fragmentCode: SD
      }
    }

    function Pf(DD, CD, cD, ID) {
      return zc(DD, CD, cD, ID, "model")
    }
    const Hf = "\t@builtin(position) position: vec4f,\n";

    function Uf(DD, CD) {
      const cD = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(DD)[0];
      return `${cD}${CD}${DD.slice(cD.length)}`
    }

    function xf(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: pD
      } = CD, iD = lc(CD, ID), {
        kind: fD,
        defines: bD
      } = cD, QD = function(DD, CD) {
        var cD, ID, pD;
        const {
          defines: iD
        } = CD, fD = Bf(CD), bD = !!iD.FOG, QD = Mf(iD), wD = null !== (cD = null === fD || void 0 === fD ? void 0 : fD.enchantTier) && void 0 !== cD ? cD : tf(DD, CD) ? "fragmentInputs.vPackEnchantTier" : "0u", SD = "lifeform" === CD.kind && !iD.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (ID = null === fD || void 0 === fD ? void 0 : fD.vertexFlags) && void 0 !== ID ? ID : yf(CD),
          vertexLocalPosition: pf(CD),
          flags: null !== (pD = null === fD || void 0 === fD ? void 0 : fD.flags) && void 0 !== pD ? pD : yf(CD),
          normal: "normalW",
          alpha: SD ? "alpha * baseColor.a" : "alpha",
          alphaOut: SD ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: bD ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: bD ? "1.0 - fog" : "0.0",
          enchantTier: wD,
          enchantColour: QD ? `${ff}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Zf(DD, CD) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Xf(DD, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: of(CD)
        }
      }(CD, cD), wD = DD.textures.filter((DD => /^textureAtlas\d+$/.test(DD.name))).length, SD = cD.atlas && wD > 0 ? {
        count: wD,
        layers: cD.atlas.layers,
        width: cD.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: DD.material.slots.has("uAnimDataPerTex") ? (CD, cD) => UI(CD, cD, function(DD) {
          const CD = DD.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            wy: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: DD => `uniforms.uAnimDataPerTex[${DD}]${CD}`
          }
        }(DD)) : null
      } : null, BD = "placed" === fD ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", yD = null !== SD && void 0 !== SD ? SD : Nf(cD), MD = function(DD, cD) {
        let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,UC.G)()}${Tc(CD,cD)}${ID}${sc(DD)}${Kc}${BD}${CD.code}`
      };
      let {
        vertex: tD,
        fragment: ZD
      } = DD;
      const oD = ec(pD, QD);
      if (oD) {
        const DD = Qf(CD, cD, "vertex") ? `\tbloxdSpCell = ${bf};\n` : "";
        tD = Pf(tD, ri, `${DD}${oD.slice(1)}${ri}`, "vertex")
      }
      const vD = `${Gc(CD,iD,function(DD,CD){return CD.TWOSIDEDLIGHTING?DD:`select(-(${DD}), ${DD}, fragmentInputs.frontFacing)`}(QD.normal,bD),QD.flags)}${uc(pD,CD.strict,CD.program,yD,QD)}`;
      vD && (ZD = Pf(ZD, Ai, `${vD.slice(1)}${Ai}`, "surface")), iD && CD.sunShadow && !bD.TWOSIDEDLIGHTING && (ZD = Pf(ZD, Hf, `${Hf}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const ND = Ac(pD);
      if (ND) {
        const DD = rc(pD, mf(bD), !0, QD);
        ZD = Pf(ZD, Fi, `${DD}${ND.slice(1)}${Fi}`, "light")
      }
      const gD = gf(CD, cD) ? dc : "";
      return {
        ...DD,
        vertex: Uf(tD, MD(SD, !1, gD)),
        fragment: Uf(ZD, MD(yD, iD))
      }
    }
    const qf = {
      name: "earthSky",
      uniqueId: -1
    };
    class Jf {
      constructor(DD) {
        this.resources = DD, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const DD of this.instances.values()) DD.released = !0, this.resources.destroyBuffer(DD.buffer);
        this.instances.clear()
      }
    }

    function Kf(DD) {
      return DD.failed && null !== DD.packGroup
    }
    class af {
      constructor(DD, CD, cD) {
        this.device = DD, this.resources = CD, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.sF = new Ji, this.modelMeshes = new qi, this.thinBundle = void 0, this.binder = new ep, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new vi((DD => this.modelSlot(DD).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, wC.e)("Lite: "), this.renderStates = new yi(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (DD, CD) => this.keepSteady(DD, CD), this.lists = new hp(this.modelMeshes, this.sF, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new Qi(CD, this.warnOnce, ((DD, CD, cD) => this.programWithModel(DD, CD, cD)), Kf), this.vertexLayouts = new mi(CD, DD.limits, this.warnOnce), this.sceneLayout = CC(DD), this.frameLayout = DD.createBindGroupLayout({
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
        }), this.meshSlots = new Pi(DD, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = DD.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Vi(DD, new Pi(DD, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (DD, CD, cD) => this.pipelineFor(DD, CD, cD),
          pipelineCompiling: (DD, CD) => !DD.program.failed && !1 !== this.pipelines.get(`${DD.pipelineKey}|${CD}`),
          sceneGroup: DD => {
            const CD = cD(DD);
            return CD || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), CD
          }
        }), CD.onDestroy = DD => {
          this.thinBundle.resourceDestroyed(DD)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pD = {
          order: DD,
          isTransparent: CD,
          _direct: !CD,
          bind: (DD, CD) => this.createBinding(pD, CD, cD, ID)
        };
        return pD
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(DD, CD, cD) {
        var ID;
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = CD, this.drawDefines.view = CD, this.thinBundle.Wm(), this.writeFrameUniforms();
        const iD = null !== (ID = null === pD || void 0 === pD ? void 0 : pD.defineFor("model")) && void 0 !== ID ? ID : 0;
        this.drawDefines.modelPackVariant = iD, pD && 0 !== iD && (this.packInputs ??= new Yi(this.device, pD.textureLayers(), this.sunShadow), this.packInputs.write(pD, CD.eye, pD.Io())), this.lists.clear(), this.slotCount = 0;
        const fD = DD.activeCamera;
        this.sF.select(fD, this.keepSteadyBase), this.modelMeshes.select(fD, CD), cD && this.pushEarthSky(cD), this.lists.collect(DD), this.thinBundle.Am(), this.uploadMeshSlots()
      }
      pushDraws(DD, CD, cD, ID, pD, iD) {
        let fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const bD = iD.length;
        for (let QD = 0; QD < cD; QD++) {
          const cD = CD[QD];
          let bD = this.retainedDraw(DD, cD, ID, pD);
          if (void 0 === bD && (bD = this.drawFor(DD, cD, ID, pD), this.retain(cD, bD)), bD) {
            const DD = cD.owner,
              CD = fD ? fD[QD] : -1;
            bD.slotOffset = CD < 0 ? this.writeMeshSlot(DD.getWorldMatrix().m, DD.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[CD], 16 * CD), iD.push(bD)
          }
        }
        return iD.length - bD
      }
      bundleDraws(DD, CD, cD) {
        let ID = 0;
        for (const pD of CD) {
          let CD = this.retainedDraw(DD, pD, cD, !1);
          const iD = void 0 !== CD;
          if (void 0 === CD && (CD = this.drawFor(DD, pD, cD, !1), this.retain(pD, CD)), CD) {
            const DD = pD.owner,
              cD = this.thinBundle.add(pD, CD, DD.getWorldMatrix().m, DD.visibility);
            iD && this.steadyFrom(pD, CD, cD), ID++
          }
        }
        return ID
      }
      steadyFrom(DD, CD, cD) {
        const ID = DD.owner,
          pD = this.sF.base(ID),
          iD = ID.material,
          {
            drawState: fD,
            instance: bD
          } = CD.inputs.retained;
        if (!pD || !iD || 1 !== DD.parts.materials.length || Ui(DD) !== iD) return;
        const QD = pD.steady ??= {
          unit: DD,
          material: iD,
          visibility: 1,
          draw: CD,
          record: cD,
          drawState: fD,
          instance: bD,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        QD.unit = DD, QD.material = iD, QD.visibility = ID.visibility, QD.draw = CD, QD.record = cD, QD.drawState = fD, QD.instance = bD, QD.bindGroup = bD.bindGroup, QD.gpuVersion = this.resources.gpuBuffersVersion, QD.fitInstances = CD.inputs.fitInstances, QD.worldFlag = ID.getWorldMatrix().updateFlag, QD.handedFrame = this.frame
      }
      keepSteady(DD, CD) {
        const cD = DD.steady;
        if (cD.handedFrame !== this.frame - 1 || (this.frame + cD.phase) % 8 === 0) return !1;
        const ID = DD.mesh,
          {
            unit: pD,
            draw: iD,
            instance: fD,
            drawState: bD
          } = cD,
          QD = ID.forcedInstanceCount || ID.Q0;
        if (!ID.isVisible || ID.nID || ID.visibility !== cD.visibility || 0 === (ID.layerMask & CD.layerMask) || ID.material !== cD.material || 0 !== ID.renderingGroupId || ID.hasVertexAlpha || !this.drawDefines.definesHold(bD, pD, bD.instancing) || cD.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(iD.inputs, pD, bD.instancing, iD.program) || iD.program.failed || fD.released || QD <= 0 || QD > cD.fitInstances) return !1;
        if (fD.frame !== this.frame && this.bindMaterial(fD, this.modelUniforms.refreshModelUniforms(ID.hq(), fD, fD.model, this.view)), !fD.bindable || fD.bindGroup !== cD.bindGroup) return !1;
        const wD = ID.computeWorldMatrix(),
          SD = wD.updateFlag !== cD.worldFlag;
        return cD.worldFlag = wD.updateFlag, iD.instances = QD, this.thinBundle.addAgain(cD.record, iD, SD ? wD.m : null, cD.visibility), cD.handedFrame = this.frame, this.sF.drawn++, !0
      }
      retainedDraw(DD, CD, cD, ID) {
        const pD = this.inputs.get(CD),
          iD = null === pD || void 0 === pD ? void 0 : pD.retained;
        if (!pD || !iD) return;
        const {
          drawState: fD,
          program: bD,
          instance: QD,
          instancing: wD
        } = iD, SD = CD.owner;
        if (Ci(SD) !== wD) return;
        const BD = this.instanceCount(SD, wD);
        if (BD <= 0) return null;
        if (QD.released || bD.failed || fD.program !== bD || !this.drawDefines.programCurrent(fD, CD, wD, cD) || !this.inputsStamped(pD, CD, wD, bD) || SD.isUnIndexed !== iD.unIndexed || this.indexKey(CD) !== iD.indexData) return;
        if (iD.indexBuffer && iD.gpuVersion !== this.resources.gpuBuffersVersion) {
          const DD = this.resources.gpuBuffer(iD.indexData);
          if (!DD) return;
          iD.indexBuffer = DD, iD.gpuVersion = this.resources.gpuBuffersVersion
        }
        let yD = !1;
        if (QD.frame !== this.frame && (yD = this.modelUniforms.refreshModelUniforms(DD, QD, QD.model, this.view)), !this.bindMaterial(QD, yD) || !this.withGpuBuffers(pD) || !this.instanceBuffersFit(SD.name, pD, BD)) return null;
        const MD = this.makeDraw(bD, pD, this.renderStates.renderState(fD.model, SD, ID, pD.state), QD, BD);
        return this.setRange(MD, CD, iD.indexBuffer, iD.indexData), MD
      }
      retain(DD, CD) {
        const cD = this.drawDefines.drawStates.get(DD);
        if (!CD || !cD || cD.program !== CD.program) {
          const CD = this.inputs.get(DD);
          return void(CD && (CD.retained = null))
        }
        const ID = DD.owner,
          pD = cD.instancing,
          iD = this.indexKey(DD),
          fD = CD.inputs.retained;
        fD ? (fD.drawState = cD, fD.instancing = pD, fD.program = CD.program, fD.instance = CD.material, fD.indexData = iD, fD.unIndexed = ID.isUnIndexed, fD.indexBuffer = CD.indexBuffer, fD.gpuVersion = this.resources.gpuBuffersVersion) : CD.inputs.retained = {
          drawState: cD,
          instancing: pD,
          program: CD.program,
          instance: CD.material,
          indexData: iD,
          unIndexed: ID.isUnIndexed,
          indexBuffer: CD.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(DD, CD, cD, ID) {
        const pD = CD.owner,
          iD = Ui(CD);
        if (!iD) return null;
        const fD = iD.getClassName();
        let bD = null;
        if (function(DD) {
            return "LinesMesh" === DD.getClassName()
          }(pD)) {
          if (! function(DD) {
              return "ShaderMaterial" === DD.getClassName() && "color" === DD.shaderPath
            }(iD)) return this.warnOnce(`lines:${fD}`, `A LinesMesh with a ${fD} is not drawn yet (${iD.name})`), null;
          bD = pD
        } else if ("StandardMaterial" !== fD && "LiteMaterial" !== fD) return this.warnOnce(`class:${fD}`, `${fD} is not drawn yet (${iD.name})`), null;
        const QD = Ci(pD),
          wD = this.instanceCount(pD, QD);
        if (wD <= 0) return null;
        const SD = bD ? this.lineProgramFor(pD, cD, QD) : this.drawDefines.programFor(DD, CD, iD, cD, QD);
        if (!SD || SD.failed) return null;
        const BD = bD ? null : this.drawDefines.drawStates.get(CD).model,
          yD = BD ? this.modelInstance(BD, SD) : this.materialInstance(pD, SD);
        let MD = !1;
        if (yD.frame !== this.frame && (bD ? ND(yD.ubo, bD) : MD = this.modelUniforms.refreshModelUniforms(DD, yD, yD.model, this.view)), !this.bindMaterial(yD, MD)) return null;
        const tD = this.meshInputs(CD, SD, QD);
        if (!tD || !this.instanceBuffersFit(pD.name, tD, wD)) return null;
        const ZD = this.indexKey(CD);
        let oD = null;
        if (ZD && !pD.isUnIndexed && (oD = this.resources.gpuBuffer(ZD), !oD)) return null;
        const vD = this.renderStates.renderState(null !== BD && void 0 !== BD ? BD : iD, pD, ID, tD.state, bD ? "line-list" : "triangle-list"),
          gD = this.makeDraw(SD, tD, vD, yD, wD);
        return this.setRange(gD, CD, oD, ZD), gD
      }
      indexKey(DD) {
        const CD = fi(DD);
        return CD ? this.resources.modelIndex(CD) : null
      }
      setRange(DD, CD, cD, ID) {
        cD && (DD.indexBuffer = cD, DD.indexFormat = this.resources.indexFormat(ID));
        const pD = 4 * CD.range + (cD ? 0 : 2);
        DD.unit = CD, DD.first = CD.parts.df[pD], DD.count = CD.parts.df[pD + 1]
      }
      makeDraw(DD, CD, cD, ID, pD) {
        CD.state !== cD && (CD.state = cD, CD.pipelineKey = `${DD.id}|${CD.layout.key}|${cD.key}`, CD.pipeline = null);
        const iD = CD.draw ??= {
          program: DD,
          inputs: CD,
          pipelineKey: "",
          layout: CD.layout,
          state: cD,
          material: ID,
          slotOffset: 0,
          vertexBuffers: CD.buffers,
          vertexOffsets: CD.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: pD,
          unit: null
        };
        return iD.program = DD, iD.pipelineKey = CD.pipelineKey, iD.state = cD, iD.material = ID, iD.vertexOffsets = CD.offsets, iD.indexBuffer = null, iD.instances = pD, iD
      }
      instanceCount(DD, CD) {
        switch (CD) {
          case "thin":
            return DD.forcedInstanceCount || DD.Q0;
          case "instanced":
            return this.prepareInstances(DD);
          case "none":
            return 1
        }
      }
      prepareInstances(DD) {
        const CD = function(DD, CD) {
          const cD = CD._userInstancedBuffersStorage,
            ID = DD.batchUploads.get(CD);
          if (ID) {
            var pD;
            if (ID.layout === (null !== (pD = null === cD || void 0 === cD ? void 0 : cD.interleavedKinds) && void 0 !== pD ? pD : null)) return ID;
            ID.release()
          }
          return new sD(DD, CD, cD)
        }(this.resources, DD);
        return CD.frame !== this.frame && CD.pack(DD, this.modelMeshes.instanceBatch(DD), this.modelMeshes.worlds, this.frame), CD.count
      }
      programWithModel(DD, CD, cD) {
        const ID = this.modelSlot(DD),
          pD = wi(ID, DD, cD),
          iD = this.drawDefines.modelPackKind(DD),
          fD = iD ? function(DD, CD, cD, ID) {
            const pD = (0, HD.q)(DD, OD.k.name),
              iD = [];
            for (const {
                feature: QD,
                state: wD,
                active: SD
              }
              of DD.features) {
              var fD, bD;
              const DD = SD ? null === (fD = (bD = (0, SC.h)(QD)).gt) || void 0 === fD ? void 0 : fD.call(bD, wD) : void 0;
              DD && iD.push(DD)
            }
            return {
              kind: CD,
              atlas: null !== pD && void 0 !== pD && pD.active ? (0, OD.e)(pD.state) : null,
              defines: cD,
              ...Sf(iD, ID)
            }
          }(DD, iD, CD, ID.fragmentCode) : null;
        if (fD && function(DD) {
            const CD = DD.defines;
            return (null === DD.atlas || !!CD.DIFFUSE && 1 === CD.DIFFUSEDIRECTUV) && !!CD.NORMAL && !CD.REFLECTION && !CD.EMISSIVEASILLUMINATION && !CD.LINKEMISSIVEWITHDIFFUSE
          }(fD)) {
          const cD = this.modelPackProgram(DD, CD, `${pD}#${iD}#sp${this.drawDefines.modelPackVariant}`, ID, fD);
          if (cD && !cD.failed) return cD
        }
        const bD = this.programs.get(pD);
        if (bD || this.unbuildable.has(pD)) return null !== bD && void 0 !== bD ? bD : null;
        let QD;
        try {
          QD = bp({
            defines: Ii(CD),
            vertexCode: ID.vertexCode,
            fragmentCode: ID.fragmentCode,
            pluginUniforms: ID.pluginUniforms
          })
        } catch (wD) {
          return this.unbuildable.add(pD), this.warnOnce(`build:${pD}`, `could not build a program for ${DD.name}: ${String(wD)}`), null
        }
        return this.createProgram(pD, QD, "standard")
      }
      modelPackProgram(DD, CD, cD, ID, pD) {
        const iD = this.programs.get(cD);
        if (iD || this.unbuildable.has(cD)) return null !== iD && void 0 !== iD ? iD : null;
        const fD = this.drawDefines.modelPackVariant;
        let bD;
        try {
          const DD = function(DD) {
              return (0, xC.d)(DD, "model")
            }(fD),
            cD = Of(DD, pD, ID.vertexCode, ID.fragmentCode);
          bD = xf(bp({
            defines: Ii(CD),
            ...cD,
            pluginUniforms: ID.pluginUniforms
          }), DD, pD, !!this.sunShadow)
        } catch (SD) {
          return this.unbuildable.add(cD), this.warnOnce(`build:${cD}`, `could not build a shader pack program for ${DD.name}, which draws without the pack: ${String(SD)}`), null
        }
        const QD = ki(fD, !!this.sunShadow),
          wD = {
            group: this.packInputs.bindGroupFor(null, QD),
            layout: Gi(this.device, {
              depth: !1,
              sunShadow: QD
            })
          };
        return this.createProgram(cD, bD, function(DD) {
          return `standard-sp${DD}`
        }(fD), wD)
      }
      lineProgramFor(DD, CD, cD) {
        const ID = vD(DD, cD, CD, this.view);
        let pD = this.linePrograms.get(ID);
        var iD;
        return pD || (pD = this.createProgram(`lines#${ID}`, (iD = function(DD) {
          const CD = new Map;
          for (let cD = 0; cD < wD.length; cD++) DD & 1 << cD && CD.set(wD[cD], !0);
          return CD
        }(ID), Bp({
          defines: iD,
          vertex: wp,
          fragment: Sp,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(ID, pD)), pD
      }
      createProgram(DD, CD, cD) {
        var ID;
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const iD = this.nextProgramId++,
          fD = `${cD}-${iD}`,
          bD = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          QD = [{
            binding: 0,
            visibility: bD,
            buffer: {
              type: "uniform"
            }
          }];
        for (const BD of CD.textures) QD.push({
          binding: BD.binding,
          visibility: bD,
          texture: {
            viewDimension: BD.dimension
          }
        }), QD.push({
          binding: BD.samplerBinding,
          visibility: bD,
          sampler: {}
        });
        const wD = this.device.createBindGroupLayout({
            label: fD,
            entries: QD
          }),
          SD = {
            key: DD,
            id: iD,
            kind: cD,
            program: CD,
            vertex: this.device.createShaderModule({
              label: `${fD}-vertex`,
              code: CD.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${fD}-fragment`,
              code: CD.fragment
            }),
            materialLayout: wD,
            pipelineLayout: this.device.createPipelineLayout({
              label: fD,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, wD, ...pD ? [pD.layout] : []]
            }),
            packGroup: null !== (ID = null === pD || void 0 === pD ? void 0 : pD.group) && void 0 !== ID ? ID : null,
            failed: !1
          };
        return this.programs.set(DD, SD), SD
      }
      writeFrameUniforms() {
        const DD = this.frameUniforms;
        oi(this.view, DD), this.device.queue.writeBuffer(this.frameBuffer, 0, DD)
      }
      materialInstance(DD, CD) {
        let cD = this.materials.get(DD);
        if (!cD) {
          const CD = new Map;
          this.materials.set(DD, CD), DD.Aq.addOnce((() => {
            for (const DD of CD.values()) DD.released = !0, this.resources.destroyBuffer(DD.buffer);
            this.materials.delete(DD)
          })), cD = CD
        }
        let ID = cD.get(CD.key);
        return ID || (ID = this.newMaterialInstance(DD, null, CD), cD.set(CD.key, ID)), ID
      }
      modelInstance(DD, CD) {
        const cD = this.modelSlot(DD);
        let ID = cD.instances.get(CD.key);
        return ID || (ID = this.newMaterialInstance(DD, DD, CD), cD.instances.set(CD.key, ID)), ID
      }
      modelSlot(DD) {
        let CD = DD.gpu[xD.h.lite];
        return CD || (CD = new Jf(this.resources), DD.gpu[xD.h.lite] = CD), CD
      }
      newMaterialInstance(DD, CD, cD) {
        const ID = cD.program.material.floats,
          pD = new Float32Array(ID),
          iD = new Map;
        return {
          owner: DD,
          model: CD,
          program: cD,
          data: pD,
          uploaded: new Float32Array(ID).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${DD.name}-uniforms`,
            size: Math.max(16, 4 * ID),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: iD,
          ubo: new Zi(cD.program.material.slots, pD, iD),
          bindGroup: null,
          bound: new Array(2 * cD.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(DD) {
        var CD;
        const cD = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: op + vp,
            fragment: op + Np,
            attributes: [],
            material: Zp,
            textures: []
          }, "earthSky"),
          ID = this.earthSkyUniforms ??= this.newMaterialInstance(qf, null, cD);
        this.earthSkyFrom !== DD && (this.earthSkyFrom = DD, ID.data.fill(0)), Up(ID.ubo, DD, this.view);
        const pD = this.vertexInputs(cD, qf, "earthSky", cD, null);
        if (cD.failed || !pD || !this.bindMaterial(ID, !1)) return;
        const iD = null !== (CD = pD.state) && void 0 !== CD ? CD : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          fD = this.makeDraw(cD, pD, iD, ID, 1);
        fD.count = yp.length;
        const bD = xp(DD, this.view);
        fD.slotOffset = this.writeMeshSlot(bD, 1), this.lists.skyDraws.push(fD)
      }
      uploadIfChanged(DD) {
        const {
          data: CD,
          uploaded: cD
        } = DD;
        for (let ID = 0; ID < CD.length; ID++)
          if (CD[ID] !== cD[ID]) return cD.set(CD), void this.device.queue.writeBuffer(DD.buffer, 0, CD)
      }
      bindMaterial(DD, CD) {
        return DD.frame !== this.frame && (DD.frame = this.frame, CD || this.uploadIfChanged(DD), DD.bindable = this.bindTextures(DD)), DD.bindable
      }
      bindTextures(DD) {
        const {
          program: CD,
          bound: cD
        } = DD, ID = CD.program.textures;
        let pD = !DD.bindGroup,
          iD = !0;
        for (let fD = 0; fD < ID.length; fD++) {
          const CD = DD.textures.get(ID[fD].name),
            bD = CD ? this.resources.boundTexture(CD) : null;
          bD ? cD[2 * fD] === bD.view && cD[2 * fD + 1] === bD.sampler || (cD[2 * fD] = bD.view, cD[2 * fD + 1] = bD.sampler, pD = !0) : (CD || DD.ubo.expected.has(ID[fD].name) || this.warnOnce(`texture:${DD.owner.name}:${ID[fD].name}`, `${DD.owner.name} has no ${ID[fD].name}`), iD = !1)
        }
        if (!iD) return pD && (DD.bindGroup = null), !1;
        if (pD) {
          const pD = [{
            binding: 0,
            resource: {
              buffer: DD.buffer
            }
          }];
          for (let DD = 0; DD < ID.length; DD++) pD.push({
            binding: ID[DD].binding,
            resource: cD[2 * DD]
          }), pD.push({
            binding: ID[DD].samplerBinding,
            resource: cD[2 * DD + 1]
          });
          DD.bindGroup = this.device.createBindGroup({
            label: `${DD.owner.name}-material`,
            layout: CD.materialLayout,
            entries: pD
          })
        }
        return !0
      }
      writeMeshSlot(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, DD, CD, cD), this.slotCount++ * RI
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(DD, CD, cD, ID, pD) {
        let iD = this.inputs.get(DD);
        if (!iD || iD.program !== ID || !ni(CD, iD, this.resources, pD)) {
          var fD;
          if (iD = null !== (fD = this.vertexLayouts.resolveInputs(CD, cD, ID, pD)) && void 0 !== fD ? fD : void 0, !iD) return null;
          this.inputs.set(DD, iD)
        }
        return this.withGpuBuffers(iD)
      }
      meshInputs(DD, CD, cD) {
        const ID = this.inputs.get(DD);
        if (ID && this.inputsStamped(ID, DD, cD, CD)) return this.withGpuBuffers(ID);
        const pD = DD.owner,
          iD = fi(DD),
          fD = this.vertexInputs(DD, pD, pD.name, CD, iD);
        return fD && (fD.geometry = bi(DD), fD.instanceLayout = this.drawDefines.instanceLayout(pD, cD)), fD
      }
      inputsStamped(DD, CD, cD, ID) {
        return function(DD, CD, cD, ID) {
          return DD.program === cD && DD.geometry === bi(CD) && DD.instanceLayout === ID
        }(DD, CD, ID, this.drawDefines.instanceLayout(CD.owner, cD))
      }
      withGpuBuffers(DD) {
        return Wi(DD, this.resources, this.zeroBuffer) ? DD : null
      }
      instanceBuffersFit(DD, CD, cD) {
        const ID = Ei(CD, cD, this.resources, this.zeroBuffer);
        if (ID) {
          const pD = CD.ends[ID.index] - CD.offsets[ID.index] + CD.Z8[ID.index];
          return this.warnOnce(`overrun:${DD}`, `${DD} draws ${cD} instances from a ${pD}-byte buffer (${ID.needed} needed)`), !1
        }
        return !0
      }
      createBinding(DD, CD, cD, ID) {
        const pD = `${CD._colorFormat}|${CD._depthStencilFormat}|${CD._depthCompare}|${CD._sampleCount}`,
          iD = fC(this.device, CD);
        if (DD === this.skyLastRenderable) {
          let cD = null;
          return {
            renderable: DD,
            pipeline: iD,
            draw: DD => cD ? this.drawSky(DD, CD, pD, cD) : 0,
            update: DD => {
              cD = DD
            }
          }
        }
        return {
          renderable: DD,
          pipeline: iD,
          draw: DD => (ID ? ID.execute(DD, CD, pD) : 0) + this.drawList(DD, CD, pD, cD)
        }
      }
      drawSky(DD, CD, cD, ID) {
        const pD = this.lists.skyDraws,
          iD = pD.length > 0;
        if (iD) {
          var fD;
          const cD = (null !== (fD = CD._depthCompare) && void 0 !== fD ? fD : cC).startsWith("greater") ? 0 : 1;
          DD.setViewport(0, 0, ID.targetWidth, ID.targetHeight, cD, cD)
        }
        const bD = this.drawList(DD, CD, cD, pD);
        return iD && DD.setViewport(0, 0, ID.targetWidth, ID.targetHeight, 0, 1), bD
      }
      drawList(DD, CD, cD, ID) {
        let pD = 0;
        const iD = this.binder;
        iD.reset();
        for (const fD of ID) {
          const ID = this.pipelineFor(fD, CD, cD);
          ID && (iD.bind(DD, fD, ID, this.meshSlots.bindGroup, fD.slotOffset), fD.indexBuffer ? DD.drawIndexed(fD.count, fD.instances, fD.first, 0, 0) : DD.draw(fD.count, fD.instances, fD.first, 0), pD++)
        }
        return pD
      }
      pipelineFor(DD, CD, cD) {
        var ID, pD;
        if (DD.program.failed) return null;
        const iD = DD.inputs;
        if (iD.pipeline && iD.pipelineTarget === cD) return iD.pipeline;
        const fD = `${DD.pipelineKey}|${cD}`,
          bD = this.pipelines.get(fD);
        if (void 0 !== bD) return bD && (iD.pipeline = bD, iD.pipelineTarget = cD), bD || null;
        this.pipelines.set(fD, null);
        const {
          program: QD,
          layout: wD,
          state: SD
        } = DD, BD = {
          label: `standard-${QD.id}`,
          layout: QD.pipelineLayout,
          vertex: {
            module: QD.vertex,
            entryPoint: "main",
            buffers: wD.buffers
          },
          fragment: rD({
            module: QD.fragment,
            entryPoint: "main"
          }, CD, SD.blend, SD.colourWrite),
          depthStencil: CD._depthStencilFormat ? {
            format: CD._depthStencilFormat,
            depthCompare: null !== (ID = null !== (pD = SD.depthCompare) && void 0 !== pD ? pD : CD._depthCompare) && void 0 !== ID ? ID : cC,
            depthWriteEnabled: SD.depthWrite,
            depthBias: SD.depthBias,
            depthBiasSlopeScale: SD.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: CD._sampleCount
          },
          primitive: {
            topology: SD.topology,
            frontFace: SD.frontFace,
            cullMode: SD.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(BD).then((DD => {
          this.compiling--, this.pipelines.set(fD, DD)
        }), (DD => {
          this.compiling--, this.reportFailure(QD, fD, DD)
        })), null
      }
      forEachSunShadowCaster(DD) {
        const CD = this.caster,
          cD = (cD, ID, pD) => {
            const iD = cD.unit && function(DD) {
              const CD = DD.material.model;
              return null !== CD && (CD.lifeform || CD.item) && CD.castsSunShadow && "triangle-list" === DD.state.topology
            }(cD) ? fi(cD.unit) : null;
            if (!iD) return;
            const fD = cD.unit.owner;
            switch (CD.geometry = iD, CD.skip = fD.noSunShadowVertices, CD.indexed = null !== cD.indexBuffer, CD.first = cD.first, CD.count = cD.count, CD.Zy = ID, CD.worldAt = pD, CD.instances = null, CD.instanceCount = 1, CD.thin = !1, Ci(fD)) {
              case "thin": {
                const DD = fD._thinInstanceDataStorage.matrixData;
                if (!DD) return;
                CD.instances = DD, CD.instanceCount = Math.min(cD.instances, DD.length / 16), CD.thin = !0;
                break
              }
              case "instanced": {
                const DD = this.resources.batchUploads.get(fD);
                if (!DD || DD.frame !== this.frame || !this.writeBatchCasters(DD)) return;
                break
              }
            }
            DD(CD)
          };
        for (const ID of this.lists.opaqueDraws) cD(ID, this.meshSlots.data, ID.slotOffset / 4);
        this.thinBundle.forEachDrawn(cD)
      }
      writeBatchCasters(DD) {
        const {
          caster: CD
        } = this, cD = DD.packedMatrices, ID = DD.count;
        CD.instances = cD, CD.instanceCount = ID;
        let pD = -1;
        for (let iD = 0; iD < ID; iD++) {
          const CD = Vf(DD.packedRowMesh(iD));
          CD && pD < 0 ? (this.casterWorlds.length < 16 * ID && (this.casterWorlds = new Float32Array(cD.length)), this.casterWorlds.set(cD.subarray(0, 16 * iD)), pD = iD) : !CD && pD >= 0 && (this.casterWorlds.set(cD.subarray(16 * iD, 16 * iD + 16), 16 * pD), pD++)
        }
        return pD >= 0 && (CD.instances = this.casterWorlds, CD.instanceCount = pD), CD.instanceCount > 0
      }
      async reportFailure(DD, CD, cD) {
        const ID = [];
        let pD = !0;
        for (const [iD, fD] of [
            ["vertex", DD.vertex],
            ["fragment", DD.fragment]
          ]) {
          const DD = await fD.getCompilationInfo();
          for (const CD of DD.messages) pD &&= "error" !== CD.type, ID.push(`${iD}:${CD.lineNum}:${CD.linePos} ${CD.type}: ${CD.message}`)
        }
        if (pD && !DD.packGroup) return this.pipelines.set(CD, !1), console.error(`Lite: pipeline ${CD} failed`, cD), void Ep("mesh", DD.kind, cD);
        DD.failed || (DD.failed = !0, console.error(`Lite: program ${DD.id} failed`, cD, ID.join("\n"), {
          program: DD.program,
          key: DD.key
        }), Ep("mesh", DD.kind, cD, pD ? null : ID[0]))
      }
    }

    function Vf(DD) {
      var CD, cD;
      const ID = null === (CD = DD.qJ) || void 0 === CD || null === (cD = CD.aShaderPackItem) || void 0 === cD ? void 0 : cD.x;
      return void 0 !== ID && 0 !== (ID & QC.h)
    }
    var zf = cD(40774),
      jf = cD(40779),
      lf = cD(40788),
      Lf = cD(40730);
    const Tf = [0, 3, 1, 4, 2, 5];

    function Gf(DD, CD, cD, ID, pD) {
      const iD = cD[0].width;
      try {
        return pD ? function(DD, CD, cD) {
          const ID = (0, Lf.d)(DD, cD, cD, 6);
          for (let pD = 0; pD < 6; pD++)(0, Lf.g)(DD, ID, pD, CD[Tf[pD]], {
            invertY: !1
          });
          return ID.texture
        }(DD, cD, iD) : function(DD, CD, cD, ID) {
          const pD = DD.createTexture({
            label: "sink-cube",
            size: {
              width: cD,
              height: cD,
              depthOrArrayLayers: 6
            },
            format: ID,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let iD = 0; iD < 6; iD++) DD.queue.copyExternalImageToTexture({
            source: CD[Tf[iD]]
          }, {
            texture: pD,
            origin: {
              x: 0,
              y: 0,
              z: iD
            }
          }, {
            width: cD,
            height: cD
          });
          return pD
        }(CD, cD, iD, 1 === ID ? "r8unorm" : "rgba8unorm")
      } finally {
        Rf(cD)
      }
    }

    function Rf(DD) {
      for (const CD of null !== DD && void 0 !== DD ? DD : []) null === CD || void 0 === CD || CD.close()
    }
    async function kf(DD) {
      const CD = [],
        cD = [];
      if (await Promise.all(DD.map(((DD, ID) => (CD[ID] = null, DD.then((DD => {
          CD[ID] = DD
        }), (DD => {
          cD.push(DD)
        })))))), cD.length > 0) throw Rf(CD), cD[0];
      return CD
    }
    class df {
      constructor(DD) {
        this.LB = DD, this.starts = [], this.lengths = [], this.used = 0, DD > 0 && (this.starts.push(0), this.lengths.push(DD))
      }
      allocate(DD) {
        const {
          starts: CD,
          lengths: cD
        } = this;
        for (let ID = 0; ID < CD.length; ID++) {
          if (cD[ID] < DD) continue;
          const pD = CD[ID];
          return cD[ID] === DD ? (CD.splice(ID, 1), cD.splice(ID, 1)) : (CD[ID] += DD, cD[ID] -= DD), this.used += DD, pD
        }
        return -1
      }
      free(DD, CD) {
        this.used -= CD;
        const cD = Math.min(DD + CD, this.LB);
        cD > DD && this.release(DD, cD - DD)
      }
      grow(DD) {
        const CD = this.LB;
        this.LB = DD, this.release(CD, DD - CD)
      }
      truncate(DD) {
        const {
          starts: CD,
          lengths: cD
        } = this;
        for (let ID = CD.length - 1; ID >= 0 && CD[ID] + cD[ID] > DD; ID--) CD[ID] >= DD ? (CD.splice(ID, 1), cD.splice(ID, 1)) : cD[ID] = DD - CD[ID];
        this.LB = DD
      }
      release(DD, CD) {
        const {
          starts: cD,
          lengths: ID
        } = this;
        let pD = 0,
          iD = cD.length;
        for (; pD < iD;) {
          const CD = pD + iD >> 1;
          cD[CD] < DD ? pD = CD + 1 : iD = CD
        }
        const fD = pD,
          bD = fD > 0 && cD[fD - 1] + ID[fD - 1] === DD,
          QD = fD < cD.length && DD + CD === cD[fD];
        bD && QD ? (ID[fD - 1] += CD + ID[fD], cD.splice(fD, 1), ID.splice(fD, 1)) : bD ? ID[fD - 1] += CD : QD ? (cD[fD] = DD, ID[fD] += CD) : (cD.splice(fD, 0, DD), ID.splice(fD, 0, CD))
      }
    }
    const Yf = 256;
    class Wf {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = DD, this.onReplaced = CD, this.mergeGap = cD, this.gpu = null, this.bytes = void 0, this.df = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const pD = Math.max(Yf, Math.ceil(ID / Yf) * Yf);
        this.bytes = new Uint8Array(pD), this.df = new df(pD / Yf)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(DD) {
        return Math.max(1, Math.ceil(DD / Yf)) * Yf
      }
      allocate(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD;
        const ID = Wf.slotBytes(DD),
          pD = ID / Yf;
        let iD = this.df.allocate(pD);
        iD < 0 && (this.grow(this.df.LB + pD), iD = this.df.allocate(pD));
        const fD = iD * Yf;
        return this.growTo(fD + Math.max(cD, ID)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, fD, fD + ID), CD && this.bytes.set(new Uint8Array(CD.buffer, CD.byteOffset, Math.min(CD.byteLength, ID)), fD), this.markDirty(fD, fD + ID), fD
      }
      growTo(DD) {
        const CD = Math.ceil(DD / Yf);
        CD > this.df.LB && this.grow(CD)
      }
      free(DD, CD) {
        this.freed.push(DD, CD)
      }
      write(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (ID <= 0) return;
        this.bytes.set(new Uint8Array(CD.buffer, cD, ID), DD);
        let iD = DD + ID;
        if (pD) {
          const CD = DD + 4 * Math.ceil(ID / 4);
          this.bytes.fill(0, iD, CD), iD = CD
        }
        this.markDirty(DD, iD)
      }
      move(DD, CD, cD) {
        this.bytes.copyWithin(CD, DD, DD + cD), this.markDirty(CD, CD + cD)
      }
      flush() {
        for (const CD of this.retired) this.onReplaced(CD), CD.destroy();
        this.retired.length = 0;
        const DD = this.dirtyStarts.length;
        if (DD > 0) {
          const {
            dirtyStarts: CD,
            dirtyEnds: cD,
            order: ID
          } = this;
          ID.length = DD;
          for (let bD = 0; bD < DD; bD++) ID[bD] = bD;
          DD > 1 && ID.sort(((DD, cD) => CD[DD] - CD[cD]));
          const pD = this.mergeGap;
          let iD = CD[ID[0]],
            fD = cD[ID[0]];
          for (let bD = 1; bD < DD; bD++) {
            const DD = ID[bD];
            CD[DD] - fD <= pD ? fD = Math.max(fD, cD[DD]) : (this.send(iD, fD), iD = CD[DD], fD = cD[DD])
          }
          this.send(iD, fD), CD.length = 0, cD.length = 0
        }
        this.holding = !1
      }
      Am() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const DD = this.freed;
        for (let CD = 0; CD < DD.length; CD += 2) this.df.free(DD[CD] / Yf, DD[CD + 1] / Yf);
        DD.length = 0
      }
      send(DD, CD) {
        this.device.queue.writeBuffer(this.gpu, DD, this.bytes.buffer, DD, CD - DD);
        for (const cD of this.replaced) {
          const ID = Math.min(CD, cD.size);
          ID > DD && this.device.queue.writeBuffer(cD, DD, this.bytes.buffer, DD, ID - DD)
        }
      }
      markDirty(DD, CD) {
        DD &= -4, CD = CD + 3 & -4, this.holding ? (this.dirtyStarts.push(DD), this.dirtyEnds.push(CD)) : this.send(DD, CD)
      }
      grow(DD) {
        const CD = this.df.LB,
          cD = Math.max(2 * CD, DD),
          ID = new Uint8Array(cD * Yf);
        ID.set(this.bytes);
        const pD = this.gpu;
        this.gpu = this.createGpu(ID.byteLength), this.bytes = ID, this.df.grow(cD), pD && (this.replaced.push(pD), this.onReplaced(pD)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, CD * Yf)
      }
      createGpu(DD) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: DD,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function sf(DD) {
      return Array.isArray(DD) ? new Float32Array(DD) : DD
    }

    function Ef(DD, CD, cD, ID, pD) {
      const iD = Jp(pD),
        fD = Math.min(pD, ID.byteLength);
      if (iD === fD && ID.byteOffset % 4 === 0) return void DD.queue.writeBuffer(CD, cD, ID.buffer, ID.byteOffset, iD);
      const bD = new Uint8Array(iD);
      bD.set(new Uint8Array(ID.buffer, ID.byteOffset, fD)), DD.queue.writeBuffer(CD, cD, bD)
    }

    function ef(DD, CD, cD) {
      const ID = "linear",
        pD = "nearest";
      let iD = pD,
        fD = pD,
        bD = "nearest",
        QD = !CD;
      switch (DD) {
        case 11:
          iD = ID, fD = ID;
          break;
        case 3:
          iD = ID, fD = ID, bD = CD ? "linear" : "nearest";
          break;
        case 8:
          bD = CD ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          fD = ID;
          break;
        case 6:
          fD = ID, bD = CD ? "linear" : "nearest";
          break;
        case 7:
          fD = ID, QD = !0;
          break;
        case 9:
          iD = ID;
          break;
        case 10:
          iD = ID, bD = CD ? "linear" : "nearest";
          break;
        case 2:
          iD = ID, fD = ID, cD > 1 ? (bD = "linear", QD = !1) : QD = !0;
          break;
        case 12:
          iD = ID, QD = !0;
          break;
        default:
          QD = !0
      }
      return cD > 1 && !QD ? {
        magFilter: ID,
        minFilter: ID,
        mipmapFilter: "linear",
        maxAnisotropy: cD
      } : {
        magFilter: iD,
        minFilter: fD,
        mipmapFilter: bD,
        ...QD ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function uf(DD) {
      return 0 === DD ? "clamp-to-edge" : 2 === DD ? "mirror-repeat" : "repeat"
    }
    class hf {
      constructor(DD, CD) {
        let {
          vertexArena: cD = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = DD, this.device = CD, this.buffers = new WeakMap, this.Vr = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = cD ? new Wf(CD, (DD => {
          var CD;
          null === (CD = this.onDestroy) || void 0 === CD || CD.call(this, DD), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var DD;
        null === (DD = this.arena) || void 0 === DD || DD.flush()
      }
      endUploadFrame() {
        var DD;
        null === (DD = this.arena) || void 0 === DD || DD.Am()
      }
      vertexBufferCreated(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cD ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(DD);
        const pD = sf(CD);
        DD.LB = pD.byteLength, this.buffers.set(DD, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: cD && null !== this.arena,
          pending: pD,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: ID
        })
      }
      vertexBufferUpdated(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        const pD = this.buffers.get(DD);
        if (!pD) return;
        const iD = sf(CD),
          fD = void 0 === ID ? iD.byteLength : Math.min(ID, iD.byteLength);
        this.update(pD, iD, cD, fD)
      }
      vertexBufferFloatsUpdated(DD, CD, cD, ID) {
        const pD = this.buffers.get(DD);
        if (!pD) return;
        const iD = cD * Float32Array.BYTES_PER_ELEMENT,
          fD = (ID - cD) * Float32Array.BYTES_PER_ELEMENT;
        pD.slot >= 0 && fD > 0 && iD + fD <= pD.size ? this.writeSlot(pD, iD, CD, CD.byteOffset + iD, fD, !1) : pD.gpu && fD > 0 && iD + fD <= pD.gpu.size ? this.device.queue.writeBuffer(pD.gpu, iD, CD.buffer, CD.byteOffset + iD, fD) : this.update(pD, CD.subarray(cD, ID), iD, fD)
      }
      indexBufferCreated(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(DD);
        const ID = function(DD) {
          if (DD instanceof Uint16Array || DD instanceof Uint32Array) return DD;
          for (let CD = 0; CD < DD.length; CD++)
            if (DD[CD] >= 65535) return new Uint32Array(DD);
          return new Uint16Array(DD)
        }(CD);
        DD.is32Bits = 4 === ID.BYTES_PER_ELEMENT, DD.LB = ID.byteLength, this.buffers.set(DD, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: ID,
          ownsPending: ID !== CD,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: cD
        })
      }
      bufferDeleted(DD) {
        const CD = this.buffers.get(DD);
        null !== CD && void 0 !== CD && CD.gpu ? (this.destroyBuffer(CD.gpu), this.gpuBuffersVersion++) : CD && CD.slot >= 0 && (this.arena.free(CD.slot, CD.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(DD)
      }
      update(DD, CD, cD, ID) {
        if (DD.slot >= 0) this.updateSlot(DD, CD, cD, ID);
        else if (DD.gpu) {
          if (cD + Jp(ID) > DD.gpu.size) {
            const CD = this.device.createBuffer({
                label: DD.label,
                size: Jp(Math.max(2 * DD.gpu.size, cD + ID)),
                usage: DD.usage | GPUBufferUsage.COPY_SRC
              }),
              pD = this.device.createCommandEncoder();
            pD.copyBufferToBuffer(DD.gpu, 0, CD, 0, DD.gpu.size), this.device.queue.submit([pD.finish()]), this.destroyBuffer(DD.gpu), this.gpuBuffersVersion++, DD.gpu = CD
          }
          Ef(this.device, DD.gpu, cD, CD, ID)
        } else {
          const iD = new Uint8Array(CD.buffer, CD.byteOffset, ID),
            fD = DD.pending;
          if (fD && DD.ownsPending && cD + ID <= fD.byteLength) new Uint8Array(fD.buffer, fD.byteOffset, fD.byteLength).set(iD, cD);
          else if (fD && 0 === cD && ID === fD.byteLength && CD.byteLength === ID) DD.pending = CD, DD.ownsPending = !1;
          else {
            var pD;
            const CD = new Uint8Array(Math.max(null !== (pD = null === fD || void 0 === fD ? void 0 : fD.byteLength) && void 0 !== pD ? pD : 0, cD + ID));
            fD && CD.set(new Uint8Array(fD.buffer, fD.byteOffset, fD.byteLength)), CD.set(iD, cD), DD.pending = CD, DD.ownsPending = !0
          }
        }
      }
      updateSlot(DD, CD, cD, ID) {
        const pD = this.arena;
        cD + Jp(ID) > DD.size && (DD.size = Jp(Math.max(2 * DD.size, cD + ID)), pD.growTo(DD.slot + DD.size), this.gpuBuffersVersion++), 0 === ID ? this.writeSlot(DD, cD, Af, 0, 4, !1) : this.writeSlot(DD, cD, CD, CD.byteOffset, ID, !0)
      }
      writeSlot(DD, CD, cD, ID, pD, iD) {
        const fD = CD + (iD ? Jp(pD) : pD);
        fD > DD.slotBytes && this.moveSlot(DD, fD), this.arena.write(DD.slot + CD, cD, ID, pD, iD)
      }
      moveSlot(DD, CD) {
        const cD = this.arena,
          ID = Wf.slotBytes(Math.max(CD, Math.min(2 * DD.slotBytes, DD.size))),
          pD = cD.allocate(ID, null, DD.size);
        cD.move(DD.slot, pD, DD.slotBytes), cD.free(DD.slot, DD.slotBytes), DD.slot = pD, DD.slotBytes = ID, this.gpuBuffersVersion++
      }
      cover(DD, CD) {
        const cD = this.buffers.get(DD);
        if (!cD || cD.slot < 0) return !1;
        const ID = Math.min(CD, cD.size);
        return !(ID <= cD.slotBytes) && (this.moveSlot(cD, ID), !0)
      }
      destroyBuffer(DD) {
        var CD;
        null === (CD = this.onDestroy) || void 0 === CD || CD.call(this, DD), DD.destroy()
      }
      gpuBuffer(DD) {
        const CD = this.buffers.get(DD);
        if (!CD) return null;
        if (CD.slot >= 0) return this.arena.buffer;
        if (CD.arena && CD.pending) {
          const DD = CD.pending,
            cD = this.arena;
          return CD.size = Jp(DD.byteLength), CD.slotBytes = Wf.slotBytes(function(DD) {
            const CD = new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength);
            let cD = CD.length;
            if (DD.byteOffset % 4 === 0) {
              for (; cD % 4 !== 0 && 0 === CD[cD - 1];) cD--;
              if (cD % 4 === 0) {
                const CD = new Uint32Array(DD.buffer, DD.byteOffset, cD / 4);
                let ID = CD.length;
                for (; ID > 0 && 0 === CD[ID - 1];) ID--;
                cD = 4 * ID
              }
            }
            for (; cD > 0 && 0 === CD[cD - 1];) cD--;
            return cD
          }(DD)), CD.slot = cD.allocate(CD.slotBytes, DD, CD.size), CD.pending = null, cD.buffer
        }
        if (!CD.gpu && CD.pending) {
          const DD = CD.pending;
          CD.gpu = this.device.createBuffer({
            label: CD.label,
            size: Jp(DD.byteLength),
            usage: CD.usage
          }), Ef(this.device, CD.gpu, 0, DD, DD.byteLength), CD.pending = null
        }
        return CD.gpu
      }
      gpuOffset(DD) {
        var CD, cD;
        const ID = null !== (CD = null === (cD = this.buffers.get(DD)) || void 0 === cD ? void 0 : cD.slot) && void 0 !== CD ? CD : -1;
        return ID < 0 ? 0 : ID
      }
      gpuEnd(DD) {
        var CD, cD;
        const ID = this.buffers.get(DD);
        return ID ? ID.slot >= 0 ? ID.slot + ID.size : null !== (CD = null === (cD = ID.gpu) || void 0 === cD ? void 0 : cD.size) && void 0 !== CD ? CD : 0 : 0
      }
      vertexInput(DD, CD, cD) {
        var ID, pD, iD, fD;
        return null !== (ID = null !== (pD = cD && this.modelInput(cD, CD)) && void 0 !== pD ? pD : null === (iD = null !== (fD = this.Vr.get(DD)) && void 0 !== fD ? fD : this.batchUploads.get(DD)) || void 0 === iD ? void 0 : iD.inputs[CD]) && void 0 !== ID ? ID : null
      }
      modelInput(DD, CD) {
        const cD = this.geometrySlot(DD);
        let ID = cD.inputs.get(CD);
        if (void 0 === ID) {
          const pD = DD.vertexAttributes.find((DD => DD.kind === CD));
          ID = pD ? new ED(this.modelKey(cD, pD.data, !1), pD.offset, pD.stride, pD.components, !1, pD.glType, pD.isNormalized) : null, cD.inputs.set(CD, ID)
        }
        return ID
      }
      modelIndex(DD) {
        return DD.indexData && this.modelKey(this.geometrySlot(DD), DD.indexData, !0)
      }
      geometrySlot(DD) {
        let CD = DD.gpu[xD.h.lite];
        if (!CD) {
          const cD = new Map,
            ID = () => {
              for (const DD of cD.values()) this.bufferDeleted(DD)
            },
            pD = DD => {
              const CD = cD.get(DD);
              CD && this.vertexBufferUpdated(CD, DD)
            };
          CD = {
            keys: cD,
            inputs: new Map,
            release: ID,
            updated: pD
          }, DD.gpu[xD.h.lite] = CD
        }
        return CD
      }
      modelKey(DD, CD, cD) {
        let ID = DD.keys.get(CD);
        if (!ID) {
          if (cD) {
            const DD = {
              LB: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(DD, CD, "model-indices"), ID = DD
          } else ID = {
            LB: 0
          }, this.vertexBufferCreated(ID, CD, !1, "model-vertices");
          DD.keys.set(CD, ID)
        }
        return ID
      }
      indexFormat(DD) {
        return DD.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(DD, CD) {
        --DD.refs > 0 || (this.releaseTexture(DD), Rf(DD.images), null !== CD && this.textures.delete(CD))
      }
      load(DD, CD) {
        const cD = CD.decoded = async function(DD) {
          if ("cube" === DD.kind) return async function(DD) {
            if (6 !== DD.length) throw new Error(`${DD.length} files where six faces were expected`);
            const CD = await kf(DD.map((DD => lp(DD)))),
              cD = CD[0].width;
            return kf(CD.map((async DD => {
              if (DD.width === cD && DD.height === cD) return DD;
              try {
                return await createImageBitmap(DD, {
                  ...zp,
                  resizeWidth: cD,
                  resizeHeight: cD
                })
              } finally {
                DD.close()
              }
            })))
          }(DD.files);
          if ("data" === DD.kind && DD.data) return [await createImageBitmap(new Blob([DD.data]), zp)];
          return [await lp(rf(DD))]
        }(DD.source).then((DD => {
          0 === CD.refs ? Rf(DD) : CD.images = DD
        }));
        this.track(CD, rf(DD.source), cD, (() => {
          CD.wanted && !CD.failed && CD.refs > 0 && this.upload(DD, CD)
        }))
      }
      canvasUpdated(DD, CD, cD) {
        const {
          state: ID
        } = this.textureSlot(DD);
        ID.dynamicSource = {
          invertY: CD,
          premultiplied: cD
        }, ID.dynamic && this.pushDynamic(DD.source, ID)
      }
      async atlasArray(DD, CD, cD) {
        const ID = await Gp(this.device, DD, CD, cD);
        if (!this.atlasBindings.has(ID)) {
          const DD = (0, zf.b)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(ID, {
            view: ID.texture.createView({
              dimension: "2d-array"
            }),
            sampler: DD
          })
        }
        return ID
      }
      boundTexture(DD) {
        const CD = this.atlasBindings.get(DD);
        if (CD) return CD;
        const cD = DD;
        if (cD.released) return null;
        const ID = this.textureSlot(cD, !0),
          {
            state: pD
          } = ID;
        if (!pD.view && (pD.wanted = !0, pD.loading || pD.failed || this.upload(cD, pD), !pD.view)) return null;
        const iD = this.chosenSampler(cD, ID),
          fD = ID.bound;
        return fD && fD.view === pD.view && fD.sampler === iD ? fD : (ID.bound = {
          view: pD.view,
          sampler: iD
        }, ID.bound)
      }
      textureLoaded(DD) {
        var CD, cD;
        return null !== (CD = null === (cD = DD.gpu[xD.h.lite]) || void 0 === cD ? void 0 : cD.state.decoded) && void 0 !== CD ? CD : null
      }
      textureFailed(DD) {
        var CD;
        return !0 === (null === (CD = DD.gpu[xD.h.lite]) || void 0 === CD ? void 0 : CD.state.failed)
      }
      chosenSampler(DD, CD) {
        const {
          samplingMode: cD,
          wrapU: ID,
          wrapV: pD
        } = DD.sampler, iD = CD.state.hasMips, fD = function(DD, CD) {
          const {
            bilinear: cD,
            trilinear: ID
          } = xD.j;
          return !CD && DD !== cD || 11 !== DD && DD !== ID && DD !== cD ? 1 : 4
        }(cD, iD), bD = CD.sampler;
        if (bD && bD.samplingMode === cD && bD.hasMips === iD && bD.anisotropy === fD && bD.wrapU === ID && bD.wrapV === pD) return bD.sampler;
        const QD = this.samplerFor(cD, iD, fD, ID, pD);
        return CD.sampler = {
          samplingMode: cD,
          hasMips: iD,
          anisotropy: fD,
          wrapU: ID,
          wrapV: pD,
          sampler: QD
        }, QD
      }
      releaseTexture(DD) {
        var CD, cD;
        DD.view && (null === (cD = this.onDestroy) || void 0 === cD || cD.call(this, DD.view));
        null === (CD = DD.destroy) || void 0 === CD || CD.call(DD)
      }
      textureSlot(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = DD.gpu[xD.h.lite];
        if (cD) return cD;
        const ID = function(DD) {
          let {
            source: CD,
            sampler: cD
          } = DD;
          return "canvas" === CD.kind ? null : `${CD.kind}|${rf(CD)}|${cD.noMipmap}|${cD.samplingMode}|${cD.invertY}`
        }(DD);
        let pD = null === ID ? void 0 : this.textures.get(ID);
        pD || (pD = {
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
        }, null !== ID && (this.textures.set(ID, pD), this.load(DD, pD), CD && this.firstBindDecodes++)), pD.refs++;
        const iD = pD,
          fD = {
            state: pD,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(iD, ID)
            }
          };
        return DD.gpu[xD.h.lite] = fD, fD
      }
      samplerFor(DD, CD, cD, ID, pD) {
        const iD = `${DD}|${CD}|${cD}|${ID}|${pD}`;
        let fD = this.samplers.get(iD);
        if (!fD) {
          const bD = {
            ...ef(DD, CD, cD),
            addressModeU: uf(ID),
            addressModeV: uf(pD)
          };
          fD = (0, zf.b)(this.engine, bD), this.samplers.set(iD, fD)
        }
        return fD
      }
      upload(DD, CD) {
        const {
          source: cD,
          sampler: ID
        } = DD;
        CD.hasMips = !ID.noMipmap, "canvas" === cD.kind ? this.createDynamic(cD, CD) : "cube" === cD.kind ? this.uploadCube(CD, cD.luminance) : this.uploadImage(CD, !0 === ID.invertY, cD.url)
      }
      uploadImage(DD, CD, cD) {
        const [ID] = DD.images;
        DD.images = null;
        const pD = (0, jf.b)(this.engine, ID, {
          mipMaps: DD.hasMips,
          invertY: CD,
          srgb: !1
        }).then((CD => {
          ID.close(), 0 !== DD.refs ? (DD.view = CD.view, DD.destroy = CD.texture.destroy.bind(CD.texture)) : CD.texture.destroy()
        }));
        this.track(DD, cD, pD)
      }
      track(DD, CD, cD, ID) {
        DD.loading = !0, this.pending++, cD.catch((cD => {
          DD.failed = !0, console.warn(`Lite: could not load texture ${jp(CD)}`, cD)
        })).finally((() => {
          DD.loading = !1, this.pending--, null === ID || void 0 === ID || ID()
        }))
      }
      uploadCube(DD, CD) {
        const cD = DD.images;
        DD.images = null;
        const ID = Gf(this.engine, this.device, cD, (0, xD.w)(CD), DD.hasMips);
        DD.view = ID.createView({
          dimension: "cube"
        }), DD.destroy = () => {
          ID.destroy()
        }
      }
      createDynamic(DD, CD) {
        const {
          canvas: cD
        } = DD, ID = (0, lf.d)(this.engine, Math.max(1, cD.width), Math.max(1, cD.height), {
          mipMaps: CD.hasMips,
          srgb: !1
        });
        CD.dynamic = ID, CD.view = ID.view, CD.destroy = () => {
          ID.texture.destroy()
        }, this.pushDynamic(DD, CD)
      }
      pushDynamic(DD, CD) {
        const cD = CD.dynamicSource,
          ID = CD.dynamic,
          {
            canvas: pD
          } = DD;
        if (cD && ID && 0 !== pD.width && 0 !== pD.height) return pD.width !== ID.width || pD.height !== ID.height ? (this.releaseTexture(CD), CD.dynamic = null, CD.view = null, void this.createDynamic(DD, CD)) : void(0, lf.g)(this.engine, ID, pD, {
          invertY: cD.invertY,
          premultiplyAlpha: cD.premultiplied
        })
      }
    }

    function rf(DD) {
      return "cube" === DD.kind ? DD.rootUrl : "canvas" === DD.kind ? "canvas" : DD.url
    }
    const Af = new Uint8Array(4);

    function Ff(DD) {
      const CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      DD._colorAttachment.storeOp = DD._targetSignature._sampleCount > 1 ? CD : "store";
      const cD = DD._renderPassDescriptor.depthStencilAttachment;
      cD && (cD.depthStoreOp = CD, cD.stencilStoreOp && (cD.stencilStoreOp = CD))
    }
    var Db = cD(37167),
      Cb = cD(37203),
      cb = cD(36838),
      Ib = cD(38875);
    const pb = new Float64Array([1, 1, 1]),
      ib = new Float64Array([0, 1, 0]),
      fb = new Float64Array(4),
      bb = new Float32Array(16),
      Qb = new Float64Array(3),
      wb = new Float64Array(4);

    function Sb(DD, CD, cD) {
      DD.fov = CD.fov, DD.near = CD.near, DD.far = CD.far, DD.renderWidth = cD.renderWidth, DD.renderHeight = cD.renderHeight, (0, cb.t)(CD.holderRotation, 0, fb, 0), (0, cb.d)(pb, 0, fb, 0, CD.holderPosition, 0, bb);
      const ID = CD.AY;
      Qb[0] = ID[0], Qb[1] = ID[1], Qb[2] = ID[2] + 1;
      const pD = DD.viewMatrix;
      (0, cb.l)(ID, Qb, ib, pD), (0, cb.h)(pD, 0, pD), (0, cb.p)(pD, bb, 0, pD), (0, cb.h)(pD, 0, pD);
      const iD = DD.worldMatrix;
      (0, cb.h)(pD, 0, iD), DD.eye[0] = iD[12], DD.eye[1] = iD[13], DD.eye[2] = iD[14], wb[0] = DD.fov, wb[1] = DD.renderWidth / DD.renderHeight, wb[2] = DD.near, wb[3] = DD.far, (0, cb.r)(wb, DD.projectionMatrix), (0, cb.p)(pD, DD.projectionMatrix, 0, DD.viewProjectionMatrix), (0, Ib.f)(DD.viewProjectionMatrix, DD.frustum)
    }

    function Bb(DD, CD) {
      let cD = DD.frustumPlanes;
      cD || (cD = DD.frustumPlanes = Array.from({
        length: 6
      }, (() => new Db.c(0, 0, 0, 0))));
      for (let ID = 0; ID < 6; ID++) {
        const DD = cD[ID].normal;
        DD._x = CD[4 * ID], DD._y = CD[4 * ID + 1], DD._z = CD[4 * ID + 2], DD._isDirty = !0, cD[ID].d = CD[4 * ID + 3]
      }
    }

    function yb(DD, CD) {
      const cD = CD.clearColor;
      DD.clearColour[0] = cD.r, DD.clearColour[1] = cD.g, DD.clearColour[2] = cD.b, DD.clearColour[3] = cD.a;
      const ID = CD.ambientColor;
      DD.ambientColour[0] = ID.r, DD.ambientColour[1] = ID.g, DD.ambientColour[2] = ID.b, DD.animationRatio = CD.animationRatio, DD.frameId = CD.frameId, DD.version++
    }

    function Mb(DD) {
      const CD = DD.model.view;
      return CD.animTick = (0, Cb.e)(), CD.timeMs = performance.now(), yb(CD, DD.wo), DD.model.update(CD.frameId), CD
    }

    function tb(DD) {
      const CD = DD.wo,
        {
          view: cD,
          rY: ID
        } = DD.model;
      return Sb(cD, ID, CD.DZ()), CD.onBeforeRenderObservable.notifyObservers(CD), Bb(CD, cD.frustum), CD.onBeforeCameraRenderObservable.notifyObservers(CD.activeCamera), Mb(DD)
    }
    var Zb = cD(36789),
      ob = cD(36921),
      vb = cD(37196);

    function Nb(DD) {
      var CD, cD;
      const ID = (0, HD.N)(DD);
      if (!ID || ID.diffuseTexture && (0, vb.f)(DD)) return null;
      const pD = null === (CD = (0, HD.q)(ID, OD.k.name)) || void 0 === CD ? void 0 : CD.state,
        iD = null === (cD = (0, HD.q)(ID, ei.c.name)) || void 0 === cD ? void 0 : cD.state,
        fD = new Float32Array(16);
      return function(DD, CD, cD, ID) {
        var pD, iD;
        const fD = yI;
        ID.set(DD.diffuseColor, fD.diffuse), ID[fD.diffuse + 3] = DD.alpha, ID.set(DD.ambientColor, fD.ambientAndCutoff), ID[fD.ambientAndCutoff + 3] = DD.alphaCutOff, ID.set(DD.emissiveColor, fD.emissiveAndLevel), ID[fD.emissiveAndLevel + 3] = null !== (pD = null === (iD = DD.diffuseTexture) || void 0 === iD ? void 0 : iD.level) && void 0 !== pD ? pD : 1, null !== CD && void 0 !== CD && CD.animDataPerTex ? (ID[fD.anim + 1] = Cb.b, ID[fD.anim + 2] = CD.animDataPerTex.length / 3 - 1) : cD && (ID[fD.anim + 1] = cD.numAnimStates, ID[fD.anim + 2] = cD.ticksPerAnimState)
      }(ID, pD, iD, fD), {
        model: ID,
        atlas: pD,
        texture: pD ? "atlas" : ID.diffuseTexture ? "single" : "none",
        animated: pD ? !!pD.animDataPerTex : !!iD,
        liquid: (0, vb.g)(DD),
        customRenderMat: (0, vb.f)(DD),
        uniformData: fD
      }
    }
    var gb = cD(36762);
    class Xb {
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
    class mb {
      constructor(DD, CD) {
        this.arena = DD, this.df = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.df = new df(CD);
        const cD = new Xb(CD);
        cD.buffer = this.createBuffer(cD, !1), this.backings.push(cD), this.refresh()
      }
      get LB() {
        return this.df.LB
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
        for (const CD of this.backings) DD += CD.units * (this.arena.unitBytes + (CD.twin ? this.arena.twinUnitBytes : 0));
        return DD
      }
      holds(DD) {
        return DD.start + DD.length <= this.usable
      }
      lost(DD) {
        return this.dropped || DD.start + DD.length > this.LB
      }
      write(DD, CD) {
        const {
          device: cD,
          unitBytes: ID
        } = this.arena;
        for (const pD of this.backings) {
          const iD = (pD.units - DD.start) * ID;
          iD > 0 && cD.queue.writeBuffer(pD.buffer, DD.start * ID, CD, 0, Math.min(CD.byteLength, iD))
        }
      }
      writeLight(DD, CD) {
        const {
          device: cD,
          twinUnitBytes: ID,
          verticesPerUnit: pD
        } = this.arena, {
          light: iD,
          count: fD
        } = this.arena.twinLight(CD, Math.min(CD.length, DD.length * pD));
        for (const bD of this.backings) {
          bD.twin || (bD.twin = this.createBuffer(bD, !0));
          const CD = (bD.units - DD.start) * pD;
          CD > 0 && cD.queue.writeBuffer(bD.twin, DD.start * ID, iD, 0, Math.min(fD, CD))
        }
      }
      grow(DD) {
        this.arena.assertNotDrawing();
        const {
          device: CD,
          unitBytes: cD,
          label: ID
        } = this.arena, pD = this.backings[this.backings.length - 1], iD = new Xb(DD), fD = CD.createCommandEncoder({
          label: `${ID}-grow`
        });
        iD.buffer = this.createBuffer(iD, !1), fD.copyBufferToBuffer(pD.buffer, 0, iD.buffer, 0, pD.units * cD), pD.twin && (iD.twin = this.createBuffer(iD, !0), fD.copyBufferToBuffer(pD.twin, 0, iD.twin, 0, pD.units * this.arena.twinUnitBytes)), CD.queue.submit([fD.finish()]), this.backings.push(iD), this.df.grow(DD)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const DD of this.backings) DD.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(DD, CD) {
        const {
          device: cD,
          unitBytes: ID,
          twinUnitBytes: pD,
          usage: iD,
          label: fD
        } = this.arena;
        cD.pushErrorScope("out-of-memory");
        const bD = cD.createBuffer({
          label: CD ? `${fD}-light` : fD,
          size: DD.units * (CD ? pD : ID),
          usage: (CD ? this.arena.twinUsage : iD) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, cD.popErrorScope().then((cD => {
          this.arena.awaitingVerdict--, this.settle(DD, CD, !cD, !0)
        }), (cD => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${fD} buffer, taken as failed: ${String(cD)}`), this.settle(DD, CD, !1, !1)
        })), bD
      }
      settle(DD, CD, cD, ID) {
        const pD = this.backings.indexOf(DD);
        if (!(this.dropped || pD < 0)) {
          if (!cD) {
            if (ID && this.arena.ranOutOfMemory(DD.units, DD.units * (CD ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === pD) return void this.drop();
            for (const DD of this.backings.splice(pD)) DD.destroy();
            return this.df.truncate(this.backings[pD - 1].units), this.growable = !1, void this.promote()
          }
          CD ? DD.twinReady = !0 : (DD.bufferReady = !0, this.arena.allocatedBuffer(DD.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: DD
        } = this;
        let CD = 0;
        for (; CD + 1 < DD.length && DD[CD].ready && DD[CD + 1].ready;) CD++;
        for (const cD of DD.splice(0, CD)) cD.destroy();
        this.refresh()
      }
      refresh() {
        const DD = this.backings[0];
        this.buffer = DD.buffer, this.twin = DD.twinReady ? DD.twin : null, this.usable = !this.dropped && DD.bufferReady ? DD.units : 0
      }
    }
    class nb {
      constructor(DD, CD, cD, ID) {
        let {
          verticesPerUnit: pD = 1,
          twinUsage: iD = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = DD, this.unitBytes = CD, this.usage = cD, this.label = ID, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, wC.e)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), CD % 4 !== 0) throw new Error(`${ID}: ${CD}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = pD, this.twinUsage = iD, this.twinValueBytes = pD > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * pD
      }
      twinLight(DD, CD) {
        if (4 === this.twinValueBytes) return this.widened.length < CD && (this.widened = new Float32Array(Math.max(CD, 2 * this.widened.length))), this.widened.set(DD.subarray(0, CD)), {
          light: this.widened,
          count: CD
        };
        const cD = CD % this.verticesPerUnit;
        if (0 === cD) return {
          light: DD,
          count: CD
        };
        const ID = CD - cD + this.verticesPerUnit;
        return this.padded.length < ID && (this.padded = new Uint16Array(Math.max(ID, 2 * this.padded.length))), this.padded.set(DD.subarray(0, CD)), this.padded.fill(0, CD, ID), {
          light: this.padded,
          count: ID
        }
      }
      allocate(DD) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), DD > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const pD of this.pages) {
          const CD = pD.df.allocate(DD);
          if (CD >= 0) return {
            page: pD,
            start: CD,
            length: DD
          }
        }
        const CD = this.pages[this.pages.length - 1];
        if (null !== CD && void 0 !== CD && CD.canGrow) {
          const cD = Math.min(this.ceiling, Math.max(2 * CD.LB, CD.LB + DD));
          if (cD - CD.LB >= DD) return CD.grow(cD), {
            page: CD,
            start: CD.df.allocate(DD),
            length: DD
          }
        }
        CD && CD !== this.pages[0] && 0 === CD.df.used && CD.drop();
        const cD = Math.floor(1048576 / this.unitBytes),
          ID = new mb(this, Math.max(DD, Math.min(this.ceiling, cD)));
        return this.pages.push(ID), {
          page: ID,
          start: ID.df.allocate(DD),
          length: DD
        }
      }
      free(DD) {
        this.assertNotDrawing();
        const {
          page: CD
        } = DD;
        CD.df.free(DD.start, DD.length), 0 === CD.df.used && CD !== this.pages[0] && CD !== this.pages[this.pages.length - 1] && CD.drop()
      }
      remove(DD) {
        const CD = this.pages.indexOf(DD);
        CD >= 0 && this.pages.splice(CD, 1)
      }
      ranOutOfMemory(DD, CD) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${CD}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, DD), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, DD) / 2));
        const cD = performance.now();
        cD >= this.shortageUntil && (this.forgetFailedAt = cD + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = cD + 1e3)
      }
      allocatedBuffer(DD) {
        DD >= this.failed && (this.failed = 1 / 0);
        const CD = Math.min(2 * DD, Math.floor((DD + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, CD))
      }
      stats() {
        let DD = 0,
          CD = 0,
          cD = 0,
          ID = 0;
        for (const pD of this.pages) DD += pD.LB, CD += pD.df.used, cD += pD.hasTwin ? pD.LB * this.twinUnitBytes : 0, ID += pD.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: DD * this.unitBytes,
          usedBytes: CD * this.unitBytes,
          twinBytes: cD,
          allocatedBytes: ID
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: DD,
          maxStorageBufferBindingSize: CD
        } = this.device.limits;
        let cD = Math.floor(Math.min(67108864, DD) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (cD = Math.min(cD, Math.floor(CD / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (cD = Math.min(cD, Math.floor(CD / this.twinUnitBytes))), cD
      }
    }
    const Ob = 16383;

    function Pb(DD, CD, cD, ID, pD) {
      let iD = 0;
      for (let fD = cD; fD < ID; fD += Ob) DD.drawIndexed(6 * Math.min(Ob, ID - fD), 1, 0, CD + 4 * fD, pD), iD++;
      return iD
    }
    class Hb {
      constructor(DD, CD) {
        this.recordsGroup = CD, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const cD = PC.h.strideWithoutAtlas;
        this.vertexArena = new nb(DD, cD, GPUBufferUsage.VERTEX, `terrain-vertices-${cD}`), this.quadArena = new nb(DD, ob.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const ID = (0, HC.g)(new Uint16Array(98298), Ob);
        this.quadPattern = DD.createBuffer({
          label: "terrain-quad-pattern",
          size: ID.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), DD.queue.writeBuffer(this.quadPattern, 0, ID)
      }
      set(DD, CD) {
        const cD = CD.packedVertices,
          ID = cD ? this.quadArena.allocate(DD.faceCount) : this.vertexArena.allocate(DD.vertexCount);
        if (!ID) return !1;
        DD.vertices = ID;
        const pD = cD ? new Uint8Array(cD.buffer, cD.byteOffset, cD.byteLength) : new Uint8Array(CD.vertices);
        return ID.page.write(ID, pD), !0
      }
      setLight(DD, CD) {
        const {
          vertices: cD
        } = DD;
        cD && 0 !== CD.length && cD.page.live && (CD.length < DD.vertexCount ? cD.page.arena.warnOnce("shortLight", `a part's ${CD.length} light values are fewer than its ${DD.vertexCount} vertices, so its light is left as it was`) : (cD.page.writeLight(cD, CD), DD.lit = !0))
      }
      lightFullSky(DD, CD) {
        this.fullSky.length < CD && (this.fullSky = new Uint16Array(Math.max(CD, 4096)).fill(gb.e));
        for (const cD of DD) {
          const DD = cD.vertices;
          DD.page.live && (DD.page.writeLight(DD, this.fullSky), cD.lit = !0)
        }
      }
      backed(DD) {
        const {
          vertices: CD
        } = DD;
        return !!CD && CD.page.holds(CD)
      }
      lost(DD) {
        const {
          vertices: CD
        } = DD;
        return !!CD && CD.page.lost(CD)
      }
      release(DD) {
        DD.vertices && DD.vertices.page.arena.free(DD.vertices), DD.vertices = null, DD.lit = !1
      }
      setDrawing(DD) {
        this.forgetBound()
      }
      draw(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : CD.faceCount;
        const iD = CD.vertices,
          fD = iD.page,
          bD = cD ? fD.twin : null;
        if (!fD.holds(iD) || cD && !bD) return 0;
        const {
          verticesPerUnit: QD
        } = fD.arena;
        let wD = iD.start * QD;
        this.boundPattern || (DD.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const SD = ID + pD;
        if (QD > 1) return fD.buffer === this.boundRecords && bD === this.boundRecordsLight || (DD.setBindGroup(1, this.recordsGroup(fD.buffer, bD)), this.boundRecords = fD.buffer, this.boundRecordsLight = bD), Pb(DD, wD, ID, SD, CD.slot);
        fD.buffer !== this.boundVertices && (DD.setVertexBuffer(0, fD.buffer), this.boundVertices = fD.buffer), bD && bD !== this.boundLight && (DD.setVertexBuffer(1, bD), this.boundLight = bD);
        const BD = CD.faceCount;
        return SD <= BD ? Pb(DD, wD, ID, SD, CD.slot) : Pb(DD, wD, ID, BD, CD.slot) + Pb(DD, wD, Math.max(ID, BD) - BD, SD - BD, CD.slot)
      }
      get buffersAwaitingVerdict() {
        let DD = 0;
        for (const CD of this.arenas()) DD += CD.awaitingVerdict;
        return DD
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Ub {
      constructor(DD, CD, cD, ID) {
        this.device = DD, this.splitBefore = CD, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = DD.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const pD = DD.createShaderModule({
          label: "scene-depth-copy",
          code: (iD = cD._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${iD?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var iD;
        DD.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: pD,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: pD,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((DD => {
          this.pipeline = DD, this.building = !1
        }), (DD => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", DD)
        })), cD._executeWithTransmission = () => this.execute(cD, ID)
      }
      get compiling() {
        return this.building
      }
      setWanted(DD) {
        this.wanted = DD
      }
      setPlanes(DD, CD) {
        DD === this.near && CD === this.far || (this.near = DD, this.far = CD, this.unproject[0] = DD / (CD - DD), this.unproject[1] = CD * DD / (CD - DD), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var DD, CD;
        return null !== (DD = null === (CD = this.copy) || void 0 === CD ? void 0 : CD.view) && void 0 !== DD ? DD : null
      }
      execute(DD, CD) {
        var cD;
        null === (cD = this.retired) || void 0 === cD || cD.destroy(), this.retired = null;
        const ID = DC(CD),
          pD = DD._transparentBindings,
          iD = this.wanted && this.pipeline ? this.splitIndex(pD) : -1,
          fD = DD._colorAttachment,
          bD = fD.resolveTarget;
        iD >= 0 && (fD.resolveTarget = void 0, Ff(DD, !0));
        let QD = ID.beginRenderPass(DD._renderPassDescriptor);
        QD.setBindGroup(0, DD._sceneBG);
        let wD = this.drawList(QD, CD, DD._opaqueBindings, 0, DD._opaqueBindings.length);
        if (wD += this.drawList(QD, CD, DD._directBindings, 0, DD._directBindings.length), wD += this.drawList(QD, CD, pD, 0, iD >= 0 ? iD : pD.length), QD.end(), iD < 0) return wD;
        Ff(DD);
        const SD = DD._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: BD,
            stencilLoadOp: yD
          } = SD,
          MD = fD.loadOp;
        fD.resolveTarget = bD;
        try {
          this.copyDepth(ID, DD), fD.loadOp = "load", SD.depthLoadOp = "load", yD && (SD.stencilLoadOp = "load"), QD = ID.beginRenderPass(DD._renderPassDescriptor), QD.setBindGroup(0, DD._sceneBG), wD += this.drawList(QD, CD, pD, iD, pD.length), QD.end()
        } finally {
          fD.loadOp = MD, SD.depthLoadOp = BD, SD.stencilLoadOp = yD
        }
        return wD
      }
      splitIndex(DD) {
        for (let CD = 0; CD < DD.length; CD++)
          if (DD[CD].renderable === this.splitBefore) return CD;
        return -1
      }
      drawList(DD, CD, cD, ID, pD) {
        let iD = null,
          fD = 0;
        for (let bD = ID; bD < pD; bD++) {
          const ID = cD[bD],
            pD = ID.renderable.mesh;
          pD && !1 === pD.visible || (ID.pipeline !== iD && (DD.setPipeline(ID.pipeline), iD = ID.pipeline), fD += ID.draw(DD, CD))
        }
        return fD
      }
      copyDepth(DD, CD) {
        var cD, ID;
        const pD = (null !== (cD = CD._config.depth) && void 0 !== cD ? cD : CD._config.rt)._depthTexture,
          iD = (null === (ID = this.copy) || void 0 === ID ? void 0 : ID.source) === pD ? this.copy : this.remakeCopy(pD),
          fD = DD.beginRenderPass(iD.pass);
        fD.setPipeline(this.pipeline), fD.setBindGroup(0, iD.bindGroup), fD.draw(3), fD.end()
      }
      remakeCopy(DD) {
        var CD, cD;
        this.retired = null !== (CD = null === (cD = this.copy) || void 0 === cD ? void 0 : cD.texture) && void 0 !== CD ? CD : null;
        const ID = this.device.createTexture({
            label: "scene-depth",
            size: [DD.width, DD.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          pD = ID.createView(),
          iD = this.device.createBindGroup({
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
          fD = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: pD,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: DD,
          texture: ID,
          view: pD,
          bindGroup: iD,
          pass: fD
        }, this.copy
      }
    }
    const xb = "rgba8unorm";

    function qb(DD) {
      return DD ? 15 : 1
    }
    class Jb {
      constructor(DD, CD, cD, ID) {
        this.device = DD, this.terrain = ID, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = CD._targetSignature._sampleCount > 1, this.cameraBuffer = DD.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = DD.createBindGroupLayout({
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
        const pD = DD.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = DD.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: pD,
          entries: []
        });
        const iD = DD.createShaderModule({
          label: "sun-shadow-mask",
          code: (fD = this.edge, `${(0,UC.G)()}${Tc({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${fD?Uc:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${qb(fD)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${fD?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var fD;
        DD.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: DD.createPipelineLayout({
            bindGroupLayouts: [this.layout, pD, pD, Gi(DD, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: iD,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: iD,
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
        const bD = CD._executeWithTransmission;
        CD._executeWithTransmission = DD => this.execute(CD, cD, (() => bD ? bD(DD) : function(DD, CD) {
          const cD = DC(CD).beginRenderPass(DD._renderPassDescriptor);
          cD.setBindGroup(0, DD._sceneBG);
          let ID = Kb(cD, CD, DD._opaqueBindings);
          return ID += Kb(cD, CD, DD._directBindings), ID += Kb(cD, CD, DD._transparentBindings), cD.end(), ID
        }(CD, cD)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var DD, CD;
        return null !== (DD = null === (CD = this.targets) || void 0 === CD ? void 0 : CD.maskView) && void 0 !== DD ? DD : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(DD) {
        ! function(DD, CD) {
          const cD = DD.worldMatrix,
            ID = DD.projectionMatrix,
            pD = 1 / ID[0],
            iD = 1 / ID[5],
            fD = DD.far * DD.near / (DD.far - DD.near);
          CD[0] = DD.eye[0], CD[1] = DD.eye[1], CD[2] = DD.eye[2], CD[3] = 2 ** -23 / fD, CD[4] = cD[0] * pD, CD[5] = cD[1] * pD, CD[6] = cD[2] * pD, CD[7] = fD, CD[8] = cD[4] * iD, CD[9] = cD[5] * iD, CD[10] = cD[6] * iD, CD[11] = DD.near / (DD.far - DD.near), CD[12] = cD[8], CD[13] = cD[9], CD[14] = cD[10], CD[15] = 0
        }(DD, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(DD, CD, cD) {
        if (this.retire(), !this.terrain.readsMask) return cD();
        const ID = this.targetsFor(DD),
          pD = DC(CD),
          iD = DD._renderPassDescriptor.depthStencilAttachment;
        this.edge || (ID.prepass.depthStencilAttachment.view = iD.view);
        const fD = this.terrain.drawPrepass(pD, ID.prepass, DD._sceneBG);
        if (0 === fD) return cD();
        if (this.trace(pD, ID), this.edge) return fD + 1 + cD();
        const {
          depthLoadOp: bD,
          stencilLoadOp: QD
        } = iD;
        iD.depthLoadOp = "load", QD && (iD.stencilLoadOp = "load");
        try {
          return fD + 1 + cD()
        } finally {
          iD.depthLoadOp = bD, iD.stencilLoadOp = QD
        }
      }
      trace(DD, CD) {
        const cD = this.terrain.sunShadowGroup(),
          ID = DD.beginRenderPass(CD.trace);
        this.pipeline && cD && (ID.setPipeline(this.pipeline), ID.setBindGroup(0, CD.bindGroup), ID.setBindGroup(1, this.empty), ID.setBindGroup(2, this.empty), ID.setBindGroup(3, cD), ID.draw(3)), ID.end()
      }
      retire() {
        const DD = this.retired;
        var CD;
        DD && (DD.mask.destroy(), DD.normals.destroy(), null === (CD = DD.depth) || void 0 === CD || CD.destroy(), this.retired = null)
      }
      targetsFor(DD) {
        var CD, cD;
        const ID = (null !== (CD = DD._config.depth) && void 0 !== CD ? CD : DD._config.rt)._depthTexture;
        return (null === (cD = this.targets) || void 0 === cD ? void 0 : cD.source) === ID ? this.targets : this.remake(DD, ID)
      }
      remake(DD, CD) {
        var cD;
        this.retired = this.targets;
        const ID = [CD.width, CD.height],
          pD = this.device.createTexture({
            label: "sun-shadow-mask",
            size: ID,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          iD = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: ID,
            format: xb,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          fD = null !== (cD = DD._targetSignature._depthStencilFormat) && void 0 !== cD ? cD : CD.format,
          bD = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: ID,
            format: fD,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          QD = DD._renderPassDescriptor.depthStencilAttachment,
          wD = fD.includes("stencil"),
          SD = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: iD.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: bD ? bD.createView() : QD.view,
              depthClearValue: QD.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...wD ? {
                stencilClearValue: QD.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          BD = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== bD && void 0 !== bD ? bD : CD).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: iD.createView()
            }]
          }),
          yD = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: pD.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [qb(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: CD,
          mask: pD,
          maskView: pD.createView(),
          normals: iD,
          depth: bD,
          bindGroup: BD,
          prepass: SD,
          trace: yD
        }, this.targets
      }
    }

    function Kb(DD, CD, cD) {
      let ID = null,
        pD = 0;
      for (const iD of cD) {
        const cD = iD.renderable.mesh;
        cD && !1 === cD.visible || (iD.pipeline !== ID && (DD.setPipeline(iD.pipeline), ID = iD.pipeline), pD += iD.draw(DD, CD))
      }
      return pD
    }
    const ab = 6e4,
      Vb = {
        status: "ok"
      },
      zb = {
        status: "skipped"
      };
    async function jb(DD, CD) {
      const {
        isCancelled: cD
      } = DD;
      if (cD()) return {
        status: "tc"
      };
      const {
        target: ID
      } = CD;
      if (!ID) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const pD = [],
        iD = Promise.all(Array.from(new Set(DD.materials), (async cD => {
          pD.push(await async function(DD, CD, cD, ID) {
            const pD = {
              lighting: DD.lighting,
              dirLightCount: Math.min(DD.dirLightCount, 4),
              gt: DD.runtime
            };
            try {
              const iD = CD.material(ID);
              return iD && wI(CD.programKey(iD, !1, pD)) ? (await iD.ready, DD.isCancelled() ? Vb : iD.bindGroupLayout ? await async function(DD, CD, cD, ID) {
                const {
                  device: pD
                } = DD;
                let iD, fD;
                pD.pushErrorScope("validation");
                try {
                  iD = DD.pipelineBuild(CD, cD, ID)
                } finally {
                  fD = pD.popErrorScope().catch((() => null))
                }
                const [bD, QD] = await Promise.all([fD, iD.built.then((() => null), (DD => null !== DD && void 0 !== DD ? DD : new Error("pipeline failed")))]);
                if (!bD && !QD) return Vb;
                const wD = await lb(iD.module),
                  SD = wD.length > 0 ? wD.map((DD => `${iD.name} ${DD.lineNum}:${DD.linePos}: ${DD.message}`)).join("\n") : `${iD.name}: ${Lb(null!==QD&&void 0!==QD?QD:bD)}`;
                return {
                  status: "failed",
                  material: CD.model.name,
                  message: SD
                }
              }(CD, iD, CD.programKey(iD, "none" !== iD.texture, pD), cD): (console.warn(`Shader pack: skipped the compile check for "${ID.name}", whose textures failed to load`), zb)) : Vb
            } catch (iD) {
              return {
                status: "failed",
                material: ID.name,
                message: Lb(iD)
              }
            }
          }(DD, CD, ID, cD))
        }))),
        fD = function(DD, CD) {
          let cD, ID, pD = !1;
          const iD = new Promise((iD => {
            var fD;
            cD = setTimeout((() => {
              iD("timeout")
            }), null !== (fD = CD.timeoutMs) && void 0 !== fD ? fD : ab), ID = setInterval((() => {
              CD.isCancelled() && iD("tc")
            }), 50), DD.lost.then((() => {
              pD = !0, iD("lost")
            }))
          }));
          return {
            signal: iD,
            lost: () => pD,
            dispose: () => {
              clearTimeout(cD), clearInterval(ID)
            }
          }
        }(CD.device, DD);
      let bD;
      try {
        bD = await Promise.race([iD.then((() => "done")), fD.signal])
      } finally {
        fD.dispose()
      }
      if ("tc" === bD || cD()) return {
        status: "tc"
      };
      const QD = pD.find((DD => "failed" === DD.status));
      return QD && "lost" !== bD && !fD.lost() && await new Promise((DD => {
        setTimeout(DD, 0)
      })), "lost" === bD || fD.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : QD ? {
        status: "failed",
        failure: {
          material: QD.material,
          message: QD.message
        }
      } : "timeout" === bD ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(wD=DD.timeoutMs)&&void 0!==wD?wD:ab)/1e3} s`), {
        status: "skipped"
      }) : pD.some((DD => "skipped" === DD.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var wD
    }
    async function lb(DD) {
      if (!DD) return [];
      try {
        return (await DD.getCompilationInfo()).messages.filter((DD => "error" === DD.type))
      } catch {
        return []
      }
    }

    function Lb(DD) {
      var CD;
      return null !== (CD = null === DD || void 0 === DD ? void 0 : DD.message) && void 0 !== CD ? CD : String(DD)
    }

    function Tb(DD, CD, cD, ID) {
      wI(DD) ? lb(cD).then((DD => {
        const [cD] = DD;
        Ep("terrain", CD, ID, cD ? `${cD.lineNum}:${cD.linePos} error: ${cD.message}` : null)
      })) : Ep("terrain", CD, ID)
    }
    var Gb = cD(36924),
      Rb = cD(36939),
      kb = cD(36952),
      db = cD(36866);

    function Yb(DD, CD, cD, ID, pD) {
      const iD = Math.hypot(cD[0], cD[1], cD[2]);
      if (!(iD > 0)) return;
      const fD = [cD[0] / iD, cD[1] / iD, cD[2] / iD],
        bD = [Math.floor(CD[0]), Math.floor(CD[1]), Math.floor(CD[2])],
        QD = [0, 0, 0],
        wD = [1 / 0, 1 / 0, 1 / 0],
        SD = [1 / 0, 1 / 0, 1 / 0];
      for (let MD = 0; MD < 3; MD++) fD[MD] > 0 ? (QD[MD] = 1, wD[MD] = (bD[MD] + 1 - CD[MD]) / fD[MD], SD[MD] = 1 / fD[MD]) : fD[MD] < 0 && (QD[MD] = -1, wD[MD] = (bD[MD] - CD[MD]) / fD[MD], SD[MD] = -1 / fD[MD]);
      const {
        Wt: BD
      } = DD;
      let yD = DD.iG(bD[0], bD[1], bD[2]);
      for (;;) {
        const CD = wD[0] < wD[1] ? wD[0] < wD[2] ? 0 : 2 : wD[1] < wD[2] ? 1 : 2;
        if (wD[CD] > ID) return;
        const cD = QD[CD] > 0 ? bD[CD] + 1 : bD[CD];
        bD[CD] += QD[CD], wD[CD] += SD[CD];
        const iD = DD.iG(bD[0], bD[1], bD[2]),
          fD = iD !== yD && !(DD.opaque[yD] && DD.opaque[iD]);
        if (fD) {
          const ID = [bD[0], bD[1], bD[2]];
          ID[CD] = cD;
          const iD = Math.floor(ID[0] / BD),
            fD = Math.floor(ID[1] / BD),
            QD = Math.floor(ID[2] / BD);
          !DD.isDrawn(iD, fD, QD) && DD.hasParts(iD, fD, QD) && pD.add(`${iD},${fD},${QD}`)
        }
        if (fD && DD.occluders[iD]) return;
        yD = iD
      }
    }

    function Wb(DD, CD) {
      return DD.group - CD.group || DD.nearest - CD.nearest
    }
    class sb {
      constructor(DD, CD) {
        this.device = DD, this.yX = CD, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
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
        const CD = null !== (DD = this.free.pop()) && void 0 !== DD ? DD : this.next++;
        if (8 * CD >= this.data.length) {
          const DD = new Float32Array(2 * this.data.length);
          DD.set(this.data), this.data = DD, this.words = new Uint32Array(DD.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.yX()
        }
        return CD
      }
      release(DD) {
        this.free.push(DD)
      }
      set(DD, CD, cD, ID, pD) {
        const iD = 8 * DD + gI;
        this.data[iD] = CD, this.data[iD + 1] = cD, this.data[iD + 2] = ID, this.setVisibility(DD, pD)
      }
      setVisibility(DD, CD) {
        this.data[8 * DD + XI] = CD, this.markDirty(DD, DD)
      }
      setFaces(DD, CD, cD) {
        const ID = 8 * DD;
        this.words[ID + mI] = CD, this.words[ID + nI] = cD, this.markDirty(DD, DD)
      }
      markDirty(DD, CD) {
        this.dirtyMin = Math.min(this.dirtyMin, DD), this.dirtyMax = Math.max(this.dirtyMax, CD)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Eb = NI,
      eb = !0;
    const ub = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Eb.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      hb = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class rb {
      constructor(DD) {
        this.device = DD, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(BI), this.dirLightUniforms = this.frameUniforms.subarray(SI.dirLights, SI.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, wC.e)(), this.faceGroups = !0, this.visibilityGraph = eb, this.visCull = eb, this.visCheck = !1, this.visCullMinDistance = kb.c, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new CQ, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.gt = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Hb(DD, ((DD, CD) => this.recordsGroup(DD, CD))), this.slots = new sb(DD, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = CC(DD), this.frameLayout = DD.createBindGroupLayout({
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
          bind: (DD, CD) => this.createBinding(this.opaqueRenderable, CD, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (DD, CD) => this.createBinding(this.transparentRenderable, CD, !0)
        }
      }
      installSceneDepth(DD, CD) {
        this.sceneDepth = new Ub(this.device, this.transparentRenderable, DD, CD)
      }
      createFrameBindGroup() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== CD && void 0 !== CD ? CD : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(DD, CD) {
        const cD = null !== CD && void 0 !== CD ? CD : DD;
        let ID = this.recordsGroups.get(cD);
        return ID || (ID = this.createFrameBindGroup(DD, CD), this.recordsGroups.set(cD, ID)), ID
      }
      setChunkMesh(DD, CD, cD) {
        var ID;
        let pD = this.chunks.get(DD);
        pD ? this.geometry.release(pD) : (pD = {
          mesh: DD,
          slot: this.slots.allocate(),
          origin: [cD[0], cD[1], cD[2]],
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
        }, this.chunks.set(DD, pD), this.writeSlot(pD)), pD.material = DD.material ? this.materialFor(DD.material) : null, pD.packed = !!CD.packedVertices, pD.vertexCount = (0, ob.f)(CD), pD.faceCount = pD.vertexCount / 4;
        const iD = null !== (ID = CD.faceGroups) && void 0 !== ID ? ID : null;
        if (pD.faceGroups = iD, iD) {
          const DD = Gb.l;
          pD.planePX = iD[DD], pD.planeNX = iD[DD + 1], pD.planePY = iD[DD + 2], pD.planeNY = iD[DD + 3], pD.planePZ = iD[DD + 4], pD.planeNZ = iD[DD + 5]
        }
        this.drawWhole(pD), 0 !== pD.faceCount && (this.geometry.set(pD, CD) ? (pD.packed && this.slots.setFaces(pD.slot, pD.vertices.start + pD.faceCount, pD.faceCount), CD.Jt && this.setChunkMeshLight(DD, CD.Jt)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${pD.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(DD, CD) {
        const cD = this.chunks.get(DD);
        cD && this.geometry.setLight(cD, CD)
      }
      drawStats() {
        let DD = this.transparent.length;
        for (const CD of this.opaqueBatches) DD += CD.meshes.length;
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
        const CD = this.chunks.get(DD);
        CD && (this.geometry.release(CD), this.slots.release(CD.slot), this.chunks.delete(DD))
      }
      remeshLost(DD, CD) {
        this.geometry.release(CD), CD.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** CD.lostRemeshes++);
        const cD = DD.Zy,
          [ID, pD, iD] = cD.xID(CD.origin[0], CD.origin[1], CD.origin[2]),
          fD = cD.GZ.RZ(ID, pD, iD);
        fD && (fD.LZ = !0, fD.sZ = !0, cD.TZ(fD, !1))
      }
      chooseFaceRanges(DD, CD, cD) {
        const ID = this.faceRanges;
        DD.faceMask = cD, DD.rangeCount = (0, Rb.k)(CD, cD, ID), DD.first0 = ID[0], DD.count0 = ID[1], DD.first1 = ID[2], DD.count1 = ID[3]
      }
      drawWhole(DD) {
        DD.faceMask = -1, DD.faceEpoch = -1, DD.rangeCount = 1, DD.first0 = 0, DD.count0 = DD.faceCount
      }
      writeSlot(DD) {
        const [CD, cD, ID] = this.originOffset;
        this.slots.set(DD.slot, DD.origin[0] - CD, DD.origin[1] - cD, DD.origin[2] - ID, DD.visibility)
      }
      materialFor(DD) {
        const CD = this.materials.get(DD);
        if (CD) return CD;
        const cD = Nb(DD);
        if (!cD) return this.warnOnce(`material:${DD.name}`, `Lite terrain cannot draw material "${DD.name}"; its chunks are skipped.`), null;
        const {
          model: ID,
          atlas: pD,
          texture: iD,
          animated: fD,
          uniformData: bD
        } = cD, QD = {
          id: this.materials.size,
          model: ID,
          texture: iD,
          animated: fD,
          uniformData: bD,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${DD.name}`,
            size: bD.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: cD.liquid,
          customRenderMat: cD.customRenderMat,
          atlasCount: 0,
          Gs: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(DD, QD), this.device.queue.writeBuffer(QD.uniformBuffer, 0, bD), QD.ready = this.createMaterialBindGroup(QD, pD).catch((CD => {
          console.error(`Lite terrain failed to load the textures of material "${DD.name}"`, CD)
        })), QD
      }
      materialLayout(DD) {
        const CD = function(DD) {
            const CD = ["uniforms"];
            if ("atlas" === DD.texture) {
              DD.animated && CD.push("animData"), CD.push("sampler");
              for (let cD = 0; cD < DD.atlasCount; cD++) CD.push("textureArray")
            } else "single" === DD.texture && CD.push("sampler", "texture");
            return CD
          }(DD),
          cD = CD.join(",");
        let ID = this.materialLayouts.get(cD);
        if (!ID) {
          const DD = GPUShaderStage.FRAGMENT;
          ID = this.device.createBindGroupLayout({
            label: `terrain-material-${cD}`,
            entries: CD.map(((CD, cD) => {
              switch (CD) {
                case "uniforms":
                  return {
                    binding: cD, visibility: GPUShaderStage.VERTEX | DD, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: cD, visibility: GPUShaderStage.VERTEX | DD, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: cD, visibility: DD, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: cD, visibility: DD, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: cD, visibility: DD, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(cD, ID)
        }
        return ID
      }
      async createMaterialBindGroup(DD, CD) {
        const cD = [{
          buffer: DD.uniformBuffer
        }];
        if (CD) {
          const {
            urls: ID,
            pixels: pD,
            layerWidth: iD
          } = CD.sources, fD = await Promise.all(ID.map(((DD, CD) => {
            var cD;
            return Gp(this.device, DD, null !== (cD = null === pD || void 0 === pD ? void 0 : pD[CD]) && void 0 !== cD ? cD : null, iD)
          })));
          DD.atlasCount = fD.length, DD.Gs = fD[0].layerWidth, DD.atlasLayers = fD[0].layers, CD.animDataPerTex && cD.push({
            buffer: Kp(this.device, Float32Array.from(CD.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), cD.push(this.sampler);
          for (const DD of fD) cD.push(DD.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === DD.texture) {
          const {
            url: CD
          } = DD.model.diffuseTexture.source, {
            pixels: ID,
            width: pD,
            height: iD
          } = await Lp(CD);
          cD.push(this.sampler), cD.push(Vp(this.device, ID, pD, iD, 1, `terrain-${CD}`).createView({
            dimension: "2d"
          }))
        }
        const ID = this.materialLayout(this.programKey(DD, !1));
        DD.bindGroupLayout = ID, DD.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${DD.model.name}`,
          layout: ID,
          entries: cD.map(((DD, CD) => ({
            binding: CD,
            resource: DD
          })))
        })
      }
      programKey(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ID = cD ? cD.lighting : this.lighting,
          pD = cD ? cD.gt : this.gt,
          iD = {
            texture: DD.texture,
            atlasCount: DD.atlasCount,
            Gs: DD.Gs,
            atlasLayers: DD.atlasLayers,
            animated: DD.animated,
            alphaTest: DD.model.transparencyMode === HD.l.alphaTest,
            lighting: ID,
            dirLightCount: cD ? cD.dirLightCount : this.dirLightCount,
            packed: CD
          };
        if (!pD) return iD;
        const fD = this.shaderPackFields(DD, pD),
          bD = "atlas" === DD.texture && DD.model.transparencyMode === HD.l.opaque && iI(fD.packVariant);
        return {
          ...iD,
          ...fD,
          alphaTest: iD.alphaTest || bD
        }
      }
      shaderPackFields(DD, CD) {
        return DD.customRenderMat ? II : function(DD, CD) {
          if (!DD) return II;
          const cD = DD.defineFor(CD ? "liquid" : "terrain");
          return 0 === cD ? II : {
            packVariant: cD,
            liquid: CD
          }
        }(CD, DD.liquid)
      }
      isBlended(DD) {
        return DD.model.transparencyMode === HD.l.alphaBlend
      }
      shaderModule(DD, CD) {
        let cD = this.modules.get(DD);
        return cD || (cD = this.device.createShaderModule({
          label: CD,
          code: DD
        }), this.modules.set(DD, cD)), cD
      }
      pipelineFor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!DD.bindGroupLayout) return null;
        const pD = this.programKey(DD, CD);
        if (!ID) return this.pipelineOf(DD, pD, cD);
        const iD = {
            ...pD,
            resting: ID
          },
          fD = this.pipelineId(DD, iD, cD),
          bD = this.pipelines.get(fD);
        if (bD) return bD;
        const QD = this.pipelineOf(DD, pD, cD);
        return QD && void 0 === bD && this.startPipeline(fD, DD, iD, cD), QD
      }
      pipelineOf(DD, CD, cD) {
        const ID = this.pipelineId(DD, CD, cD),
          pD = this.pipelines.get(ID);
        return void 0 !== pD ? pD : (this.startPipeline(ID, DD, CD, cD), null)
      }
      pipelineId(DD, CD, cD) {
        return Ab(CD, this.isBlended(DD), DD.model.backFaceCulling, cD)
      }
      pipelineBuild(DD, CD, cD) {
        var ID;
        const pD = this.pipelineId(DD, CD, cD);
        return null !== (ID = this.builds.get(pD)) && void 0 !== ID ? ID : this.startPipeline(pD, DD, CD, cD)
      }
      startPipeline(DD, CD, cD, ID) {
        var pD;
        this.pipelines.set(DD, null);
        const iD = qI(cD),
          fD = this.isBlended(CD),
          bD = this.shadowMask && ID._depthStencilFormat ? function(DD, CD, cD, ID) {
            if (void 0 === DD.packVariant || DD.liquid || CD) return "none";
            const pD = (0, xC.e)(DD.packVariant);
            return null === pD || void 0 === pD || !pD.sunShadow || !lc(pD, cD) || pD.discards || DD.alphaTest && iI(DD.packVariant) ? "none" : ID ? "edge" : "plain"
          }(cD, fD, !!this.sunShadow, ID._sampleCount > 1) : "none";
        let QD;
        try {
          QD = JI(cD, !!this.sunShadow, bD)
        } catch (oD) {
          if (!wI(cD)) throw oD;
          return this.failedPackBuild(DD, cD, iD, oD)
        }
        const wD = this.shaderModule(QD, iD),
          SD = [];
        cD.packed || (SD.push(function(DD, CD) {
          const cD = [{
            shaderLocation: Eb.position,
            offset: PC.h.MC,
            format: "float32x3"
          }, {
            shaderLocation: Eb.normal,
            offset: PC.h.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Eb.color,
            offset: PC.h.colorOffset,
            format: "unorm8x4"
          }];
          return DD && cD.push({
            shaderLocation: Eb.uv,
            offset: PC.h.uvOffset,
            format: "float32x2"
          }), CD && cD.push({
            shaderLocation: Eb.blockFlagWords,
            offset: PC.h.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: PC.h.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: cD
          }
        }("none" !== cD.texture, wI(cD))), cD.lighting && SD.push(ub));
        const BD = CD.model.backFaceCulling,
          yD = {
            label: iD,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, CD.bindGroupLayout, ...di(this.device, cD, !!this.sunShadow, "none" !== bD)]
            }),
            vertex: {
              module: wD,
              entryPoint: "mainVertex",
              buffers: SD
            },
            fragment: rD({
              module: wD,
              entryPoint: "mainFragment"
            }, ID, fD ? hb : null),
            depthStencil: ID._depthStencilFormat ? {
              format: ID._depthStencilFormat,
              depthCompare: null !== (pD = ID._depthCompare) && void 0 !== pD ? pD : cC,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: ID._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: BD ? "back" : "none"
            }
          },
          MD = cD.resting ? 0 : 1;
        this.compiling += MD;
        const tD = "none" === bD ? this.device.createRenderPipelineAsync(yD) : this.startMaskPipelines(wD, yD, "edge" === bD);
        tD.then((CD => {
          this.compiling -= MD, this.pipelines.set(DD, CD)
        }), (DD => {
          this.compiling -= MD, console.error(`Lite terrain pipeline ${iD} failed`, DD), Tb(cD, iD, wD, DD)
        }));
        const ZD = {
          name: iD,
          module: wD,
          built: tD
        };
        return this.builds.set(DD, ZD), ZD
      }
      startMaskPipelines(DD, CD, cD) {
        const ID = CD.depthStencil,
          pD = this.device.createRenderPipelineAsync(cD ? CD : {
            ...CD,
            depthStencil: {
              ...ID,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          iD = this.device.createRenderPipelineAsync({
            ...CD,
            label: `${CD.label}-prepass`,
            fragment: {
              module: DD,
              entryPoint: "prepassFragment",
              targets: [{
                format: xb
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([pD, iD]).then((DD => {
          let [CD, cD] = DD;
          return this.prepassOf.set(CD, cD), this.maskPipelines++, CD
        }))
      }
      failedPackBuild(DD, CD, cD, ID) {
        console.error(`Lite terrain pipeline ${cD} failed`, ID), Tb(CD, cD, null, ID);
        const pD = Promise.reject(ID);
        pD.catch((() => {}));
        const iD = {
          name: cD,
          module: null,
          built: pD
        };
        return this.builds.set(DD, iD), iD
      }
      checkShaderPack(DD) {
        return jb(DD, {
          device: this.device,
          target: this.target,
          material: DD => this.materialFor(DD),
          programKey: (DD, CD, cD) => this.programKey(DD, CD, cD),
          pipelineBuild: (DD, CD, cD) => this.pipelineBuild(DD, CD, cD)
        })
      }
      createBinding(DD, CD, cD) {
        return this.target = CD, {
          renderable: DD,
          pipeline: fC(this.device, CD),
          draw: DD => {
            this.geometry.setDrawing(!0);
            try {
              return cD ? this.drawTransparent(DD, CD) : this.drawOpaque(DD, CD)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(DD, CD) {
        var cD, ID, pD, iD;
        const {
          ny: fD
        } = DD;
        this.lighting = DD.Io;
        const bD = (0, Zb.t)(CD);
        this.dirLightCount = Math.min(bD, 4), this.gt = null !== (cD = fD.gt) && void 0 !== cD ? cD : null, bD > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(DD, CD), this.animateMaterials(CD.animTick);
        const QD = fD.Ry,
          wD = QD[0] !== this.originOffset[0] || QD[1] !== this.originOffset[1] || QD[2] !== this.originOffset[2];
        wD && (this.originOffset[0] = QD[0], this.originOffset[1] = QD[1], this.originOffset[2] = QD[2]);
        const SD = CD.eye;
        this.eye[0] = SD[0], this.eye[1] = SD[1], this.eye[2] = SD[2], this.writeShaderPackInputs();
        const BD = CD.projectionMatrix,
          yD = 0 === BD[15];
        let MD = 0;
        (wD || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: tD
        } = this;
        bC(this.transparentRenderable._worldCenter, CD, pC), this.resetBatches(yD), this.transparent.length = 0, this.unlit.length = 0;
        const ZD = fD.Zy.J_,
          oD = ZD / 2 * Math.sqrt(3);
        let vD = 0;
        const ND = !!this.gt && pI(this.gt.defineFor("liquid"));
        let gD = !1;
        const XD = null !== (ID = null === (pD = fD.RP) || void 0 === pD ? void 0 : pD.visibility) && void 0 !== ID ? ID : null,
          mD = this.visCull && yD && 0 === this.compiling && null !== XD && fD.Zy.VcD[0] >= this.visCullMinDistance ? this.target : null,
          nD = this.visPassable,
          OD = this.visCandidates,
          PD = this.visCandidateBatches;
        nD.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let HD = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let UD = 0;
        const xD = (DD, cD) => {
          if (!cD) return this.transparent.push(DD), void(UD += 2 * DD.faceCount);
          if (null !== DD.faceGroups && cD.faceCull) {
            if (0 === MD && (MD = (0, Rb.d)(BD, CD.renderWidth, CD.renderHeight), MD !== this.faceFocalPx && (this.faceFocalPx = MD, tD = ++this.faceEpoch)), DD.faceEpoch !== tD) {
              DD.faceEpoch = tD;
              const CD = Math.sqrt(DD.distance) + oD,
                cD = (0, Rb.f)(DD.planePX, DD.planeNX, DD.planePY, DD.planeNY, DD.planePZ, DD.planeNZ, this.eye[0] - (DD.origin[0] - this.originOffset[0]), this.eye[1] - (DD.origin[1] - this.originOffset[1]), this.eye[2] - (DD.origin[2] - this.originOffset[2]), (0, Rb.e)(CD, MD));
              cD !== DD.faceMask && this.chooseFaceRanges(DD, DD.faceGroups, cD)
            }
            if (0 === DD.rangeCount) return
          } else - 1 !== DD.faceMask && this.drawWhole(DD);
          cD.meshes.push(DD), UD += 2 * ((DD.rangeCount > 0 ? DD.count0 : 0) + (DD.rangeCount > 1 ? DD.count1 : 0))
        };
        for (const JD of this.chunks.values()) {
          wD && this.writeSlot(JD);
          const DD = JD.mesh.visibility;
          DD !== JD.visibility && (JD.visibility = DD, this.slots.setVisibility(JD.slot, DD));
          const {
            material: cD
          } = JD;
          this.geometry.lost(JD) && performance.now() >= JD.lostRetryAt && this.remeshLost(fD, JD);
          const ID = !(null === cD || void 0 === cD || !cD.bindGroup) && this.geometry.backed(JD),
            pD = ID && this.lighting && !JD.vertices.page.twin;
          if (mD && (Number.isNaN(JD.key) && (JD.ci = Math.floor(JD.origin[0] / ZD), JD.cj = Math.floor(JD.origin[1] / ZD), JD.ck = Math.floor(JD.origin[2] / ZD), JD.key = (0, db.f)(JD.ci, JD.cj, JD.ck)), (!ID || DD < 1 || pD || !this.batchDraws(cD, JD.packed, mD)) && this.visSeeThrough(JD, mD) && nD.add(JD.key)), !ID) continue;
          pD || (JD.lostRemeshes = 0);
          const iD = JD.origin[0] - this.originOffset[0],
            bD = JD.origin[1] - this.originOffset[1],
            QD = JD.origin[2] - this.originOffset[2];
          if (!(0, Ib.d)(CD.frustum, iD, bD, QD, ZD)) continue;
          const SD = iD + ZD / 2 - this.eye[0],
            BD = bD + ZD / 2 - this.eye[1],
            MD = QD + ZD / 2 - this.eye[2];
          if (JD.distance = SD * SD + BD * BD + MD * MD, this.lighting && !JD.lit && (vD = Math.max(vD, JD.vertexCount), this.unlit.push(JD)), pD) continue;
          const tD = this.isBlended(cD) ? null : this.batchFor(cD, JD.packed, JD.vertices.page, 1 === DD, yD);
          mD ? (OD[HD] = JD, PD[HD++] = tD) : xD(JD, tD)
        }
        const qD = mD ? this.sweepVisibility(DD, CD, XD) : null;
        null === (iD = (0, Ki.A)(fD)) || void 0 === iD || iD.update(CD.frustum, this.originOffset, ZD, qD);
        for (let JD = 0; JD < HD; JD++) {
          const DD = OD[JD];
          !qD || qD.isDrawn(DD.ci, DD.cj, DD.ck) ? xD(DD, PD[JD]) : (this.visCulledParts++, this.visCulledTriangles += 2 * DD.faceCount)
        }
        for (const JD of this.transparent) gD ||= ND && JD.material.liquid && !JD.material.customRenderMat;
        this.submittedTriangles = UD, qD && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(DD, CD, qD)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(gD) : gD && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && vD > 0 && this.geometry.lightFullSky(this.unlit, vD);
        for (const JD of this.opaqueBatches) this.chunkSorter.sort(JD.meshes, 1) || JD.meshes.sort(Fb);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(DQ)
      }
      sweepVisibility(DD, CD, cD) {
        const {
          Zy: ID
        } = DD.ny, pD = ID.J_, iD = this.visPassable, fD = this.eye[0] + this.originOffset[0], bD = this.eye[1] + this.originOffset[1], QD = this.eye[2] + this.originOffset[2];
        if (!cD.eyeClear(fD, bD, QD, CD.near, CD.projectionMatrix, ID)) return null;
        const [wD, SD] = ID.VcD, BD = cD.update(fD, bD, QD, pD, wD, SD, iD);
        return this.visSweeps = cD.sweeps, BD ? cD : null
      }
      visSeeThrough(DD, CD) {
        const {
          material: cD
        } = DD;
        return (!cD || !this.isBlended(cD)) && (DD.mesh.visibility < 1 || !(null !== cD && void 0 !== cD && cD.bindGroup) || DD.faceCount > 0 && (!this.geometry.backed(DD) || this.lighting && !DD.vertices.page.twin) || !this.batchDraws(cD, DD.packed, CD))
      }
      batchDraws(DD, CD, cD) {
        var ID;
        const pD = CD ? 2 : 0;
        if (DD === this.visDrawsMaterial && function(DD, CD) {
            return 0 !== (DD & 1 << CD)
          }(this.visDrawsBits, pD)) return 0 !== (this.visDrawsBits & 2 << pD);
        let iD = null !== (ID = this.visBatchDraws.get(DD)) && void 0 !== ID ? ID : 0;
        if (!(iD & 1 << pD)) {
          iD |= 1 << pD | (!!DD.bindGroupLayout && this.canDraw(DD, CD) && !!this.pipelines.get(this.pipelineId(DD, this.programKey(DD, CD), cD)) ? 2 << pD : 0), this.visBatchDraws.set(DD, iD)
        }
        return this.visDrawsMaterial = DD, this.visDrawsBits = iD, 0 !== (iD & 2 << pD)
      }
      runVisCheck(DD, CD, cD) {
        const {
          ny: ID
        } = DD, {
          Zy: pD
        } = ID, iD = pD.J_, fD = new Set;
        for (const MD of this.chunks.values()) fD.add(MD.key);
        const bD = gp.Matrix.FromArray(CD.viewProjectionMatrix).invert(),
          [QD, wD, SD] = this.originOffset,
          BD = new gp.cZ,
          yD = function(DD, CD, cD, ID) {
            const pD = new Set;
            for (let iD = 0; iD < 27; iD++)
              for (let fD = 0; fD < 48; fD++) {
                const bD = cD((fD + .5) / 48 * 2 - 1, (iD + .5) / 27 * 2 - 1);
                Yb(DD, CD, [bD[0] - CD[0], bD[1] - CD[1], bD[2] - CD[2]], ID, pD)
              }
            return pD
          }({
            iG: (DD, CD, cD) => pD.iG(DD, CD, cD),
            occluders: cD.occluders,
            opaque: cD.opaque,
            Wt: iD,
            isDrawn: (DD, CD, ID) => cD.isDrawn(DD, CD, ID),
            hasParts: (DD, CD, cD) => fD.has((0, db.f)(DD, CD, cD))
          }, [this.eye[0] + QD, this.eye[1] + wD, this.eye[2] + SD], ((DD, CD) => (gp.cZ.TransformCoordinatesFromFloatsToRef(DD, CD, .5, bD, BD), [BD.x + QD, BD.y + wD, BD.z + SD])), (pD.VcD[0] + 1) * iD);
        this.visViolations = yD.size;
        for (const MD of yD) this.warnOnce(`vis:${MD}`, `Lite terrain cave culling skipped chunk ${MD}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var DD;
        null !== (DD = this.gt) && void 0 !== DD && DD.isRunning() && (this.shaderPackInputs ??= new Yi(this.device, this.gt.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.gt, this.eye, this.lighting))
      }
      bindShaderPackInputs(DD, CD, cD) {
        var ID, pD, iD, fD;
        let bD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: QD
        } = this.shaderPackFields(CD, cD);
        if (void 0 === QD) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Yi(this.device, cD.textureLayers(), this.sunShadow), this.shaderPackInputs.write(cD, this.eye, this.lighting));
        const wD = pI(QD) ? null !== (ID = null === (pD = this.sceneDepth) || void 0 === pD ? void 0 : pD.view) && void 0 !== ID ? ID : this.standIn() : null,
          SD = bD ? null !== (iD = null === (fD = this.shadowMask) || void 0 === fD ? void 0 : fD.view) && void 0 !== iD ? iD : this.standIn() : null;
        this.shaderPackInputs.bind(DD, wD, ki(QD, !!this.sunShadow), SD)
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
        var DD, CD;
        return null !== (DD = null === (CD = this.shaderPackInputs) || void 0 === CD ? void 0 : CD.bindGroupFor(null, !0)) && void 0 !== DD ? DD : null
      }
      resetBatches(DD) {
        const CD = this.opaqueBatches;
        let cD = 0;
        for (const ID of CD) ID.meshes.length > 0 && (ID.meshes.length = 0, ID.faceCull = this.batchFaceCull(ID.material, DD), CD[cD++] = ID);
        CD.length = cD
      }
      orderBatches() {
        const DD = this.opaqueBatches;
        for (let CD = 0; CD < DD.length; CD++) {
          const cD = DD[CD];
          cD.group = CD;
          for (let ID = 0; ID < CD; ID++) {
            const CD = DD[ID];
            if (CD.material === cD.material && CD.packed === cD.packed) {
              cD.group = CD.group;
              break
            }
          }
          cD.nearest = cD.meshes.length > 0 ? cD.meshes[0].distance : 1 / 0
        }
        DD.sort(Wb)
      }
      batchFor(DD, CD, cD, ID, pD) {
        for (const fD of this.opaqueBatches)
          if (fD.material === DD && fD.packed === CD && fD.page === cD && fD.resting === ID) return fD;
        const iD = {
          material: DD,
          packed: CD,
          page: cD,
          resting: ID,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(DD, pD)
        };
        return this.opaqueBatches.push(iD), iD
      }
      batchFaceCull(DD, CD) {
        return !(!CD || !(0, Gb.t)(DD.model)) && (!this.gt || ! function(DD) {
          var CD;
          return !(null === (CD = (0, xC.e)(DD)) || void 0 === CD || !CD.movesVertices)
        }(this.shaderPackFields(DD, this.gt).packVariant))
      }
      writeFrameUniforms(DD, CD) {
        const cD = this.frameUniforms,
          ID = SI;
        if ((0, Zb.v)(DD, cD), cD[ID.fogInfos] = CD.fogEnabled ? CD.fogMode : 0, cD[ID.fogInfos + 1] = CD.fogStart, cD[ID.fogInfos + 2] = CD.fogEnd, cD[ID.fogInfos + 3] = CD.fogDensity, cD.set(CD.fogColour, ID.fogColour), cD[ID.outputHeight] = CD.renderHeight, cD.set(CD.ambientColour, ID.sceneAmbient), (0, Zb.q)(CD, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const CD = (0, ob.i)(DD.OZ, DD.ut, DD.rt);
          for (let DD = 0; DD < 4; DD++) cD[ID.aoLevels + DD] = CD[DD] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, cD)
      }
      animateMaterials(DD) {
        const CD = yI.anim;
        for (const cD of this.materials.values()) cD.animated && (cD.uniformData[CD] = DD, this.device.queue.writeBuffer(cD.uniformBuffer, 4 * CD, cD.uniformData, CD, 1))
      }
      canDraw(DD, CD) {
        return !("atlas" === DD.texture && !CD) || (this.warnOnce(`stride:${DD.id}`, `Lite terrain: material "${DD.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(DD, CD) {
        let cD = 0;
        DD.setBindGroup(1, this.frameBindGroup);
        for (const ID of this.opaqueBatches) {
          if (!ID.meshes.length || !this.canDraw(ID.material, ID.packed)) continue;
          const pD = this.pipelineFor(ID.material, ID.packed, CD, ID.resting);
          pD && (DD.setPipeline(pD), DD.setBindGroup(2, ID.material.bindGroup), this.gt && this.bindShaderPackInputs(DD, ID.material, this.gt, this.prepassOf.has(pD)), cD += this.drawBatch(DD, ID))
        }
        return cD
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(DD, CD, cD) {
        const ID = this.target,
          pD = this.gt;
        if (!ID || !pD || 0 === this.maskPipelines) return 0;
        let iD = 0,
          fD = null;
        this.geometry.setDrawing(!0);
        try {
          for (const bD of this.opaqueBatches) {
            if (!bD.meshes.length || !this.canDraw(bD.material, bD.packed)) continue;
            const QD = this.pipelineFor(bD.material, bD.packed, ID, bD.resting),
              wD = QD && this.prepassOf.get(QD);
            wD && (fD || (fD = DD.beginRenderPass(CD), fD.setBindGroup(0, cD), fD.setBindGroup(1, this.frameBindGroup)), fD.setPipeline(wD), fD.setBindGroup(2, bD.material.bindGroup), this.bindShaderPackInputs(fD, bD.material, pD, !0), iD += this.drawBatch(fD, bD))
          }
        } finally {
          var bD;
          null === (bD = fD) || void 0 === bD || bD.end(), this.geometry.setDrawing(!1)
        }
        return iD
      }
      drawBatch(DD, CD) {
        let cD = 0;
        for (const ID of CD.meshes) {
          const {
            rangeCount: CD
          } = ID;
          CD > 0 && (cD += this.geometry.draw(DD, ID, this.lighting, ID.first0, ID.count0), CD > 1 && (cD += this.geometry.draw(DD, ID, this.lighting, ID.first1, ID.count1)))
        }
        return cD
      }
      drawTransparent(DD, CD) {
        let cD = 0,
          ID = null,
          pD = null;
        DD.setBindGroup(1, this.frameBindGroup);
        for (const iD of this.transparent) {
          const fD = iD.material;
          if (!this.canDraw(fD, iD.packed)) continue;
          const bD = this.pipelineFor(fD, iD.packed, CD);
          bD && (bD !== ID && (DD.setPipeline(bD), ID = bD, this.gt && this.bindShaderPackInputs(DD, fD, this.gt)), fD !== pD && (DD.setBindGroup(2, fD.bindGroup), pD = fD), cD += this.geometry.draw(DD, iD, this.lighting))
        }
        return cD
      }
    }

    function Ab(DD, CD, cD, ID) {
      return `${qI(DD)}|${DD.atlasLayers}|${DD.Gs}|${CD}|${cD}|${ID._colorFormat}|${ID._depthStencilFormat}|${ID._sampleCount}`
    }

    function Fb(DD, CD) {
      return DD.distance - CD.distance
    }

    function DQ(DD, CD) {
      return CD.distance - DD.distance
    }
    class CQ {
      constructor() {
        this.left = []
      }
      sort(DD, CD) {
        for (let cD = 0; cD < DD.length; cD++) {
          const CD = DD[cD].distance;
          if (CD - CD !== 0) return !1
        }
        return this.sortRange(DD, 0, DD.length, CD), !0
      }
      sortRange(DD, CD, cD, ID) {
        if (cD - CD <= 16) {
          for (let pD = CD + 1; pD < cD; pD++) {
            const cD = DD[pD],
              iD = ID * cD.distance;
            let fD = pD - 1;
            for (; fD >= CD && ID * DD[fD].distance > iD; fD--) DD[fD + 1] = DD[fD];
            DD[fD + 1] = cD
          }
          return
        }
        const pD = CD + cD >>> 1;
        if (this.sortRange(DD, CD, pD, ID), this.sortRange(DD, pD, cD, ID), ID * DD[pD - 1].distance <= ID * DD[pD].distance) return;
        const {
          left: iD
        } = this, fD = pD - CD;
        for (let SD = 0; SD < fD; SD++) iD[SD] = DD[CD + SD];
        let bD = 0,
          QD = pD,
          wD = CD;
        for (; bD < fD && QD < cD;) DD[wD++] = ID * DD[QD].distance < ID * iD[bD].distance ? DD[QD++] : iD[bD++];
        for (; bD < fD;) DD[wD++] = iD[bD++]
      }
    }
    const cQ = Math.ceil(102);

    function IQ(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : CD;
      const iD = Math.min(CD, cD),
        fD = new Uint32Array(Dc(ID));
      for (let bD = 0; bD < ID; bD++) {
        const CD = Math.floor(bD * iD / ID),
          cD = Math.max(CD + 1, Math.floor((bD + 1) * iD / ID));
        for (let QD = 0; QD < ID; QD++) {
          const wD = Math.floor(QD * iD / ID),
            SD = Math.max(wD + 1, Math.floor((QD + 1) * iD / ID));
          let BD = 0;
          for (let ID = CD; ID < cD; ID++)
            for (let CD = wD; CD < SD; CD++) DD[ID * pD + CD] >= cQ && BD++;
          if (2 * BD >= (cD - CD) * (SD - wD)) {
            const DD = QD + ID * bD;
            fD[DD >>> 5] |= 1 << (31 & DD)
          }
        }
      }
      return fD
    }

    function pQ(DD) {
      return Math.max(1, Math.min(16, DD))
    }
    class iQ {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = DD, this.loadTexture = CD, this.warn = cD, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(DD, CD) {
        return (DD.lV !== this.builtVersion || this.blockCaster.length !== CD) && (this.build(DD, CD), !0)
      }
      build(DD, CD) {
        this.builtVersion = DD.lV;
        const cD = new Uint16Array(CD),
          ID = new Map;
        for (let pD = 1; pD < CD; pD++) {
          const CD = this.classify(DD, pD, ID);
          if (null === CD || CD === uC) {
            cD[pD] = null === CD ? 0 : uC;
            continue
          }
          let iD = this.byKey.get(CD.key);
          void 0 === iD && (iD = this.allocate(CD), this.byKey.set(CD.key, iD)), cD[pD] = iD
        }
        this.blockCaster = cD, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(DD, CD) {
        const cD = DD.Tu[CD];
        if ("function" !== typeof cD) return cD;
        try {
          return cD()
        } catch (ID) {
          return this.warnOnce(`Sun shadows: no caster option for block ${CD}: ${ID instanceof Error?ID.message:String(ID)}`), null
        }
      }
      classify(DD, CD, cD) {
        const ID = this.option(DD, CD);
        if ("none" === ID) return null;
        if (ID && ID.planes.length > 0) {
          const DD = ID.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(DD)}`,
            planes: DD
          }
        }
        if (DD.PM[CD]) return null;
        const pD = DD.UM[CD] ? DD.RV(CD) : null;
        if (pD && pD.length >= 6) {
          const DD = function(DD) {
            const CD = new Uint32Array(16);
            for (let cD = 0; cD + 6 <= DD.length; cD += 6) {
              const ID = [0, 1, 2].map((CD => Math.max(0, Math.ceil(8 * DD[cD + CD] - .5)))),
                pD = [0, 1, 2].map((CD => Math.min(7, Math.floor(8 * DD[cD + CD + 3] - .5))));
              for (let DD = ID[2]; DD <= pD[2]; DD++)
                for (let cD = ID[1]; cD <= pD[1]; cD++)
                  for (let iD = ID[0]; iD <= pD[0]; iD++) {
                    const ID = iD + 8 * (cD + 8 * DD);
                    CD[ID >>> 5] |= 1 << (31 & ID)
                  }
            }
            return CD
          }(pD);
          return function(DD) {
            return DD.every((DD => 4294967295 === DD))
          }(DD) ? uC : DD.every((DD => 0 === DD)) ? null : {
            kind: "shape",
            key: `shape:${DD.join(",")}`,
            mask: DD
          }
        }
        if (DD.Ul[CD] || !DD.PZ[CD]) return null;
        const iD = [0, 1, 2, 3, 4, 5].map((ID => {
          const pD = DD.HZ[6 * CD + ID];
          let iD = cD.get(pD);
          return void 0 === iD && (iD = function(DD) {
            if (!DD || DD.jZ) return null;
            const {
              Hs: CD,
              Gs: cD,
              Xs: ID
            } = DD;
            if (!CD || !cD || !(cD > 0) || void 0 === ID || !(ID >= 0)) return null;
            const pD = CD[0],
              iD = cD * cD * 4;
            if (!pD || pD.byteLength < iD) return null;
            const fD = Math.floor(pD.byteLength / iD),
              bD = CD[Math.floor(ID / fD)];
            if (!bD) return null;
            const QD = new Uint8Array(bD.buffer, bD.byteOffset, bD.byteLength),
              wD = ID % fD * iD;
            if (wD + iD > QD.length) return null;
            const SD = new Uint8Array(cD * cD);
            let BD = !1;
            for (let yD = 0; yD < SD.length; yD++) SD[yD] = QD[wD + 4 * yD + 3], BD ||= SD[yD] < cQ;
            return BD ? {
              alpha: SD,
              width: cD
            } : null
          }(DD.zZ(pD)), cD.set(pD, iD)), iD
        }));
        if (iD.every((DD => null === DD))) return uC;
        const fD = pQ(Math.max(...iD.map((DD => {
            var CD;
            return null !== (CD = null === DD || void 0 === DD ? void 0 : DD.width) && void 0 !== CD ? CD : 1
          })))),
          bD = new Uint32Array(Dc(fD)).fill(4294967295),
          QD = iD.map((DD => null === DD ? bD : IQ(DD.alpha, DD.width, DD.width, fD)));
        return {
          kind: "cutout",
          key: `cutout:${fD}:${QD.map((DD=>DD.join(","))).join("|")}`,
          size: fD,
          faces: QD
        }
      }
      allocate(DD) {
        if (this.nextCaster >= Cc) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const CD = this.nextCaster++;
        if (this.writeCaster(CD, hC, 0, 0, 0), "shape" === DD.kind) {
          const cD = this.allocateMask(DD.mask.length);
          cD >= 0 && (this.sink(cD, DD.mask), this.writeCaster(CD, rC, cD, 0, 8))
        } else if ("cutout" === DD.kind) {
          const cD = Dc(DD.size),
            ID = this.allocateMask(6 * cD);
          if (ID >= 0) {
            const pD = new Uint32Array(6 * cD);
            DD.faces.forEach(((DD, CD) => {
              pD.set(DD, CD * cD)
            })), this.sink(ID, pD), this.writeCaster(CD, FC, ID, 0, DD.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(CD, DD.planes).finally((() => {
          this.planesLoading--
        })));
        return CD
      }
      async loadPlanes(DD, CD) {
        const cD = await Promise.all(CD.map((DD => this.texture(DD.texture))));
        if (cD.some((DD => null === DD))) return;
        const ID = cD,
          pD = pQ(Math.max(...ID.map((DD => Math.min(DD.width, DD.height))))),
          iD = Dc(pD),
          fD = this.allocateMask(CD.length * (4 + iD));
        if (fD < 0) return;
        const bD = new Uint32Array(CD.length * (4 + iD)),
          QD = 4 * CD.length;
        CD.forEach(((DD, CD) => {
          const cD = fD + QD + CD * iD;
          bD.set(function(DD, CD) {
            const [cD, ID] = DD.tangent, pD = Math.hypot(cD, ID) || 1, iD = cD / pD, fD = ID / pD, bD = DD.centre[0] * fD - DD.centre[1] * iD, QD = new Uint32Array(4);
            return new Float32Array(QD.buffer, 0, 3).set([iD, fD, bD]), QD[3] = CD, QD
          }(DD, cD), 4 * CD), bD.set(IQ(ID[CD].alpha, ID[CD].width, ID[CD].height, pD), QD + CD * iD)
        })), this.sink(fD, bD), this.writeCaster(DD, AC, fD, CD.length, pD)
      }
      texture(DD) {
        let CD = this.textures.get(DD);
        return CD || (CD = this.loadTexture(DD).catch((CD => (this.warn(`Sun shadows: no mask for ${DD}: ${CD instanceof Error?CD.message:String(CD)}`), null))), this.textures.set(DD, CD)), CD
      }
      allocateMask(DD) {
        if (this.nextMaskWord + DD > cc) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const CD = 32768 + this.nextMaskWord;
        return this.nextMaskWord += DD, CD
      }
      writeCaster(DD, CD, cD, ID, pD) {
        this.sink(0 + 4 * DD, Uint32Array.of(CD, cD, ID, pD))
      }
      warnOnce(DD) {
        this.warned.has(DD) || (this.warned.add(DD), this.warn(DD))
      }
    }
    var fQ = cD(37088);

    function bQ(DD) {
      return !DD.LZ && !DD.qID && !DD.MZ
    }

    function QQ() {
      return {
        bricks: new Uint32Array(RC),
        cells: new Uint16Array(32768),
        special: new Uint8Array(TC)
      }
    }
    class wQ {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = DD, this.writeVoxels = CD, this.writePool = cD, this.warn = ID, this.eyeChunk = null, this.slotChunk = new Array(aC).fill(null), this.slotVersion = new Float64Array(aC).fill(-1), this.slotPool = new Array(aC).fill(null), this.starved = new Uint8Array(aC), this.queue = [], this.queued = new Uint8Array(aC), this.queueSorted = !0, this.freePool = new Uint32Array(Ic), this.freeCount = Ic, this.casterTable = null, this.warnedPool = !1, this.scratch = QQ(), this.victimScratch = QQ(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * aC), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let pD = 0; pD < Ic; pD++) this.freePool[pD] = 65535 - pD
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Ic - this.freeCount
      }
      chunkAdded(DD) {
        if (null === this.eyeChunk || !this.inRadius(DD.i, DD.j, DD.k)) return;
        const CD = sC(DD.i, DD.j, DD.k);
        this.slotChunk[CD] = DD, this.slotVersion[CD] = -1, this.enqueue(CD)
      }
      update(DD, CD, cD) {
        const ID = this.casters.blockCaster;
        if (ID !== this.casterTable) {
          this.casterTable = ID;
          for (let DD = 0; DD < aC; DD++) this.slotVersion[DD] = -1, this.slotChunk[DD] && this.enqueue(DD)
        }
        const pD = Math.floor(DD[0] / 32),
          iD = Math.floor(DD[1] / 32),
          fD = Math.floor(DD[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== pD || this.eyeChunk[1] !== iD || this.eyeChunk[2] !== fD) && (this.eyeChunk = [pD, iD, fD], this.follow(CD), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let bD = 0; bD < aC; bD++) {
          const DD = this.slotChunk[bD];
          DD && (DD.jCD || DD.oZ !== this.slotVersion[bD]) && this.enqueue(bD)
        }
        this.drain(cD), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(DD, CD) {
        this.records.set(CD, 4 * DD), this.windowTopStale = !0, this.writeVoxels(4 * DD, CD)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const DD = this.records;
        let CD = -1 / 0;
        for (let ID = 0; ID < DD.length; ID += 4) {
          const cD = 255 & DD[ID + 3];
          cD !== jC && cD !== lC || !this.inRadius(DD[ID], DD[ID + 1], DD[ID + 2]) || (CD = Math.max(CD, DD[ID + 1] * qC + (DD[ID + 3] >>> 8)))
        }
        const cD = CD === -1 / 0 ? 1 : CD + dC;
        cD !== this.windowTop[0] && (this.windowTop[0] = cD, this.writeVoxels(kC, this.windowTop))
      }
      follow(DD) {
        const CD = this.eyeChunk,
          [cD, ID, pD] = JC;
        for (let fD = -pD; fD <= pD; fD++)
          for (let pD = -ID; pD <= ID; pD++)
            for (let ID = -cD; ID <= cD; ID++) {
              var iD;
              const cD = CD[0] + ID,
                bD = CD[1] + pD,
                QD = CD[2] + fD,
                wD = sC(cD, bD, QD),
                SD = this.slotChunk[wD];
              if (SD && !SD.jCD && SD.i === cD && SD.j === bD && SD.k === QD) continue;
              const BD = null !== (iD = DD(cD, bD, QD)) && void 0 !== iD ? iD : null;
              SD && (SD.i !== cD || SD.j !== bD || SD.k !== QD) && this.slotPool[wD] && (this.release(wD), this.record.fill(0), this.writeRecord(wD, this.record)), this.slotChunk[wD] = BD, this.slotVersion[wD] = -1, (BD || SD) && this.enqueue(wD)
            }
      }
      requeueStarved() {
        for (let DD = 0; DD < aC; DD++) this.starved[DD] && this.slotChunk[DD] && this.enqueue(DD)
      }
      enqueue(DD) {
        this.queued[DD] || (this.queued[DD] = 1, this.queue.push(DD), this.queueSorted = !1)
      }
      drain(DD) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const DD = new Map;
          for (const CD of this.queue) DD.set(CD, this.slotDistance(CD));
          this.queue.sort(((CD, cD) => DD.get(cD) - DD.get(CD))), this.queueSorted = !0
        }
        const CD = performance.now();
        let cD = 0;
        const ID = [];
        for (; this.queue.length > 0 && (0 === cD || performance.now() - CD < DD);) {
          const DD = this.queue.pop(),
            CD = this.slotChunk[DD];
          !CD || CD.jCD || bQ(CD) ? (this.queued[DD] = 0, this.encodeSlot(DD), cD++) : ID.push(DD)
        }
        for (let pD = ID.length - 1; pD >= 0; pD--) this.queue.push(ID[pD])
      }
      slotDistance(DD) {
        const CD = this.slotChunk[DD],
          cD = this.eyeChunk;
        return CD ? Math.max(Math.abs(CD.i - cD[0]), Math.abs(CD.j - cD[1]), Math.abs(CD.k - cD[2])) : 0
      }
      inRadius(DD, CD, cD) {
        const ID = this.eyeChunk,
          [pD, iD, fD] = JC;
        return Math.abs(DD - ID[0]) <= pD && Math.abs(CD - ID[1]) <= iD && Math.abs(cD - ID[2]) <= fD
      }
      release(DD) {
        const CD = this.slotPool[DD];
        if (CD) {
          for (let DD = CD.length - 1; DD >= 0; DD--) this.freePool[this.freeCount++] = CD[DD];
          this.slotPool[DD] = null
        }
      }
      encodeSlot(DD) {
        var CD, cD, ID, pD, iD;
        let fD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          bD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const QD = null !== (CD = null === (cD = this.slotPool[DD]) || void 0 === cD ? void 0 : cD.length) && void 0 !== CD ? CD : 0;
        this.release(DD), this.starved[DD] = 0;
        const wD = this.slotChunk[DD],
          SD = this.record;
        if (!wD || wD.jCD || !wD.Ey) return this.slotChunk[DD] = null, this.slotVersion[DD] = -1, SD.fill(0), this.writeRecord(DD, SD), void(QD > 0 && this.requeueStarved());
        this.slotVersion[DD] = wD.oZ;
        const BD = this.encodeBricks(wD, DD, fD, bD);
        SD[0] = wD.i, SD[1] = wD.j, SD[2] = wD.k, SD[3] = BD, this.writeRecord(DD, SD), null === (ID = this.encoded) || void 0 === ID || ID.call(this, wD), bD && (null !== (pD = null === (iD = this.slotPool[DD]) || void 0 === iD ? void 0 : iD.length) && void 0 !== pD ? pD : 0) < QD && this.requeueStarved()
      }
      encodeBricks(DD, CD, cD, ID) {
        if (DD.Vt) return zC;
        const pD = this.casters.blockCaster,
          {
            data: iD,
            stride: fD,
            offset: bD
          } = DD.Ey,
          [QD, wD, SD] = fD,
          BD = qC,
          {
            bricks: yD,
            cells: MD,
            special: tD
          } = cD;
        yD.fill(0), tD.fill(0);
        let ZD = 0,
          oD = 0,
          vD = 0;
        for (let ND = 0; ND < BD; ND++) {
          const CD = ND >> 2,
            cD = 3 & ND,
            ID = DD.WM[ND],
            fD = ID === fQ.g ? -1 : ID < pD.length ? pD[ID] : 0;
          if (0 !== fD)
            for (let DD = 0; DD < BD; DD++) {
              const ID = DD >> 2,
                gD = 3 & DD;
              let XD = bD + DD * QD + ND * wD;
              for (let DD = 0; DD < BD; DD++, XD += SD) {
                let bD = fD;
                if (bD < 0) {
                  const DD = iD[XD];
                  if (bD = DD < pD.length ? pD[DD] : 0, 0 === bD) continue
                }
                const QD = EC(ID, CD, DD >> 2),
                  wD = eC(gD, cD, 3 & DD);
                yD[3 * QD + (wD >>> 5)] |= 1 << (31 & wD), MD[QD * LC + wD] = bD, ZD++, vD = ND, bD === uC ? oD++ : tD[QD] = 1
              }
            }
        }
        return 0 === ZD ? zC : 32768 === oD ? jC | vD << 8 : (this.writePoolEntries(CD, cD, ID), this.writeVoxels(GC + CD * RC, yD), lC | vD << 8)
      }
      writePoolEntries(DD, CD, cD) {
        const {
          bricks: ID,
          cells: pD,
          special: iD
        } = CD, fD = this.entry;
        let bD = 0;
        for (let SD = 0; SD < TC; SD++) bD += iD[SD];
        if (0 === bD) return;
        cD && this.freeCount < bD && this.evictBeyond(DD, bD);
        const QD = new Uint32Array(cD ? Math.min(bD, this.freeCount) : 0);
        let wD = 0;
        for (let SD = 0; SD < TC; SD++) {
          if (!iD[SD]) continue;
          const cD = 3 * SD;
          if (wD === QD.length) {
            this.dropSpecials(CD, SD), this.starved[DD] = 1;
            continue
          }
          const bD = this.freePool[--this.freeCount];
          QD[wD++] = bD;
          for (let DD = 0; DD < LC; DD++) {
            const CD = ID[cD + (DD >>> 5)] >>> (31 & DD) & 1 ? pD[SD * LC + DD] : 0;
            1 & DD ? fD[DD >> 1] |= CD << 16 : fD[DD >> 1] = CD
          }
          ID[cD + 2] = bD + 1, this.writePool(pc + 32 * bD, fD)
        }
        QD.length > 0 && (this.slotPool[DD] = QD)
      }
      evictBeyond(DD, CD) {
        const cD = this.slotDistance(DD),
          ID = [];
        for (let pD = 0; pD < aC; pD++) pD !== DD && this.slotPool[pD] && this.slotDistance(pD) > cD && ID.push(pD);
        ID.sort(((DD, CD) => this.slotDistance(CD) - this.slotDistance(DD)));
        for (const pD of ID) {
          if (this.freeCount >= CD) return;
          const DD = this.slotChunk[pD];
          DD && !DD.jCD && DD.Ey && (DD.oZ === this.slotVersion[pD] || bQ(DD)) && this.encodeSlot(pD, this.victimScratch, !1)
        }
      }
      dropSpecials(DD, CD) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const cD = 3 * CD;
        for (let ID = 0; ID < LC; ID++) DD.cells[CD * LC + ID] !== uC && (DD.bricks[cD + (ID >>> 5)] &= ~(1 << (31 & ID)))
      }
    }
    var SQ = cD(36845);
    class BQ {
      constructor(DD) {
        this.device = DD, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Zc, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Zy = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = DD.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = DD.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(DD, CD, cD) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: ID
        } = this;
        ID.VM(DD, CD), cD.forEachSunShadowCaster((DD => {
          this.add(DD)
        })), ID.finish();
        const pD = 0 === ID.parts;
        if (pD && this.uploadedEmpty) return;
        this.uploadedEmpty = pD;
        const {
          queue: iD
        } = this.device, {
          words: fD
        } = ID;
        iD.writeBuffer(this.frameBuffer, 0, fD, 0, 16385), ID.refs > 0 && iD.writeBuffer(this.frameBuffer, 65540, fD, Qc, ID.refs), pD || iD.writeBuffer(this.frameBuffer, 327684, fD, wc, ID.parts * bc)
      }
      add(DD) {
        const CD = this.gridFor(DD);
        if (!CD) return;
        const {
          frame: cD
        } = this, {
          Zy: ID,
          worldAt: pD,
          instances: iD,
          instanceCount: fD,
          thin: bD
        } = DD;
        if (iD)
          for (let QD = 0; QD < fD; QD++) bD ? (vc(iD, 16 * QD, ID, pD, this.Zy), cD.add(CD, this.Zy)) : cD.add(CD, iD, 16 * QD);
        else cD.add(CD, ID, pD)
      }
      gridFor(DD) {
        let {
          geometry: CD,
          indexed: cD,
          first: ID,
          count: pD,
          skip: iD
        } = DD, fD = this.grids.get(CD);
        fD || (fD = new Map, this.grids.set(CD, fD));
        const bD = `${cD?ID:-1-ID}:${pD}:${null!==iD&&void 0!==iD?iD:""}`;
        let QD = fD.get(bD);
        if (void 0 !== QD || this.gridsFull) return QD;
        const wD = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = wD + 2;
        else if (wD > this.bakeDeadline) return;
        return QD = this.bake(CD, cD, ID, pD, iD), void 0 !== QD && fD.set(bD, QD), QD
      }
      bake(DD, CD, cD, ID, pD) {
        const iD = DD.vertexAttributes.find((DD => "position" === DD.kind)),
          fD = iD ? function(DD, CD, cD, ID) {
            let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const iD = DD => CD ? CD[cD + DD] : cD + DD,
              fD = DD => null !== pD && [0, 1, 2].some((CD => {
                const cD = iD(DD + CD);
                return cD >= pD[0] && cD < pD[1]
              })),
              bD = [1 / 0, 1 / 0, 1 / 0],
              QD = [-1 / 0, -1 / 0, -1 / 0];
            for (let ND = 0; ND + 2 < ID; ND += 3)
              if (!fD(ND))
                for (let CD = 0; CD < 3; CD++) {
                  const cD = iD(ND + CD);
                  for (let CD = 0; CD < 3; CD++) bD[CD] = Math.min(bD[CD], DD[3 * cD + CD]), QD[CD] = Math.max(QD[CD], DD[3 * cD + CD])
                }
            const wD = Math.max(QD[0] - bD[0], QD[1] - bD[1], QD[2] - bD[2]);
            if (!(wD > 0)) return null;
            const SD = wD / 64,
              BD = [0, 0, 0],
              yD = [0, 0, 0],
              MD = [0, 0, 0];
            for (let ND = 0; ND < 3; ND++) BD[ND] = Math.min(65, Math.ceil((QD[ND] - bD[ND]) / SD) + 1), yD[ND] = bD[ND] - SD / 2, MD[ND] = yD[ND] + BD[ND] * SD;
            const tD = new Uint32Array(Math.ceil(BD[0] * BD[1] * BD[2] / 32)),
              ZD = new Float64Array(9),
              oD = [0, 0, 0],
              vD = [0, 0, 0];
            for (let ND = 0; ND + 2 < ID; ND += 3)
              if (!fD(ND)) {
                for (let CD = 0; CD < 3; CD++) {
                  const cD = iD(ND + CD);
                  for (let ID = 0; ID < 3; ID++) ZD[3 * CD + ID] = DD[3 * cD + ID]
                }
                for (let DD = 0; DD < 3; DD++) {
                  const CD = Math.min(ZD[DD], ZD[3 + DD], ZD[6 + DD]),
                    cD = Math.max(ZD[DD], ZD[3 + DD], ZD[6 + DD]);
                  oD[DD] = Math.max(0, Math.floor((CD - yD[DD]) / SD - 1e-6)), vD[DD] = Math.min(BD[DD] - 1, Math.floor((cD - yD[DD]) / SD + 1e-6))
                }
                for (let DD = oD[2]; DD <= vD[2]; DD++)
                  for (let CD = oD[1]; CD <= vD[1]; CD++)
                    for (let cD = oD[0]; cD <= vD[0]; cD++)
                      if (Nc(ZD, yD[0] + (cD + .5) * SD, yD[1] + (CD + .5) * SD, yD[2] + (DD + .5) * SD, SD / 2)) {
                        const ID = cD + BD[0] * (CD + BD[1] * DD);
                        tD[ID >>> 5] |= 1 << (31 & ID)
                      }
              } return {
              words: tD,
              lo: yD,
              hi: MD,
              cell: SD,
              dims: BD
            }
          }((0, SQ.i)(iD, DD.vertexCount), CD ? DD.indexData : null, cD, ID, pD) : null;
        if (!fD) return null;
        const {
          words: bD,
          ...QD
        } = fD;
        if (this.gridTop + bD.length > Bc) return void(this.gridsFull = !0);
        const wD = this.gridTop;
        return this.gridTop += bD.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * wD, bD), {
          ...QD,
          at: wD
        }
      }
    }
    const yQ = Math.cos(1 * Math.PI / 180);

    function MQ(DD, CD) {
      return DD[0] * CD[0] + DD[1] * CD[1] + DD[2] * CD[2] < yQ
    }
    async function tQ(DD) {
      const {
        pixels: CD,
        width: cD,
        height: ID
      } = await Lp(DD), pD = new Uint8Array(cD * ID);
      for (let iD = 0; iD < pD.length; iD++) pD[iD] = CD[4 * iD + 3];
      return {
        width: cD,
        height: ID,
        alpha: pD
      }
    }
    class ZQ {
      constructor(DD, CD) {
        this.device = DD, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Xc.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = DD.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = DD.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * YC,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = DD.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [cD, ID, pD] = Xc.r;
        this.volume = DD.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: cD,
            height: ID,
            depthOrArrayLayers: pD
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
          size: Xc.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = CD ? new BQ(DD) : null, this.entityStandIn = CD ? null : DD.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var DD, CD;
        const cD = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || cD.push("Lite sun shadow volume pipeline compiling");
        const ID = null !== (DD = null === (CD = this.casters) || void 0 === CD ? void 0 : CD.planesLoading) && void 0 !== DD ? DD : 0;
        return ID > 0 && cD.push(`${ID} Lite sun shadow plane casters loading their textures`), cD
      }
      entries() {
        var DD, CD, cD, ID;
        const pD = UC.v;
        return [{
          binding: pD.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: pD.Ey,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: pD.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: pD.volume,
          resource: this.volumeView
        }, {
          binding: pD.sampler,
          resource: this.volumeSampler
        }, {
          binding: pD.entities,
          resource: {
            buffer: null !== (DD = null === (CD = this.entities) || void 0 === CD ? void 0 : CD.frameBuffer) && void 0 !== DD ? DD : this.entityStandIn
          }
        }, {
          binding: pD.entityGrids,
          resource: {
            buffer: null !== (cD = null === (ID = this.entities) || void 0 === ID ? void 0 : ID.gridBuffer) && void 0 !== cD ? cD : this.entityStandIn
          }
        }]
      }
      prepare(DD, CD, cD) {
        var ID;
        this.entitiesThisFrame = !1;
        const pD = null !== (ID = null === cD || void 0 === cD ? void 0 : cD.sunShadowReach()) && void 0 !== ID ? ID : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!cD || !pD.sunShadow && !pD.airShadow) return void(this.volumeHolds = null);
        if (DD.Zy.J_ !== qC) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${DD.Zy.J_}; everything is lit.`)));
        const iD = this.start(DD);
        this.casters.update(DD.nM, DD.nM.UM.length);
        const fD = DD.Ry;
        for (let yD = 0; yD < 3; yD++) this.eye[yD] = CD[yD] + fD[yD];
        const bD = (0, Xc.B)(this.eye);
        this.staleNear = bD;
        const QD = DD.Zy.GZ;
        iD.update(this.eye, ((DD, CD, cD) => QD.RZ(DD, CD, cD)), 1);
        const wD = (0, Xc.v)(cD.i_()),
          SD = iD.eyeChunk,
          BD = this.uniformInts;
        for (let yD = 0; yD < 3; yD++) BD[yD] = SD[yD], BD[4 + yD] = bD[yD];
        this.entitiesThisFrame = null !== this.entities && pD.sunShadow, this.entitiesThisFrame && tc(this.uniformFloats, 8, CD, wD), null !== this.volumeHolds && (this.castersWritten || MQ(wD, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(bD, wD, SD)
      }
      markStale(DD) {
        const CD = this.staleNear,
          cD = qC,
          ID = [DD.i * cD, DD.j * cD, DD.k * cD];
        for (let iD = 0; iD < 3; iD++)
          if (ID[iD] + cD <= CD[iD] - cD || ID[iD] >= CD[iD] + Xc.r[iD] + cD) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const pD = this.stale;
        for (let iD = 0; iD < pD.length; iD += 4)
          if (pD[iD] === DD.i && pD[iD + 1] === DD.j && pD[iD + 2] === DD.k) return void(pD[iD + 3] = this.swept);
        if (16 === pD.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        pD.push(DD.i, DD.j, DD.k, this.swept)
      }
      writeStale() {
        const DD = this.swept,
          CD = this.stale;
        this.staleAll && DD - this.staleAllSwept >= Xc.i && (this.staleAll = !1, CD.length = 0);
        let cD = 0;
        for (let pD = 0; pD < CD.length; pD += 4)
          if (DD - CD[pD + 3] < Xc.i) {
            for (let DD = 0; DD < 4; DD++) CD[cD + DD] = CD[pD + DD];
            cD += 4
          } CD.length = cD;
        const ID = this.uniformInts;
        ID[3] = this.staleAll ? 5 : cD / 4;
        for (let pD = 0; pD < 4; pD++)
          for (let DD = 0; DD < 3; DD++) ID[16 + 4 * pD + DD] = 4 * pD < cD ? CD[4 * pD + DD] * qC : 0
      }
      writeUniform() {
        const DD = this.uniformInts;
        let CD = this.uniformWritten;
        if (CD) {
          let cD = !0;
          for (let ID = 0; ID < DD.length && cD; ID++) cD = DD[ID] === CD[ID];
          if (cD) return
        }
        CD ??= this.uniformWritten = new Int32Array(DD.length), CD.set(DD), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(DD) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, DD)
      }
      computeVolume(DD, CD, cD) {
        const ID = this.buildVolumePass();
        if (!ID) return void(this.volumeHolds = null);
        const pD = (0, Xc.z)(this.volumeHolds, DD);
        this.volumeHolds = DD;
        const iD = 1 === pD.length && pD[0].size.every(((DD, CD) => DD === Xc.r[CD])),
          fD = this.sweptChunk,
          bD = this.sweptLight,
          QD = CD[0] !== bD[0] || CD[1] !== bD[1] || CD[2] !== bD[2],
          wD = cD[0] !== fD[0] || cD[1] !== fD[1] || cD[2] !== fD[2],
          SD = QD && MQ(CD, bD);
        if ((iD || this.written || wD || SD) && (this.fastLeft = Xc.i), iD || this.written || QD || wD) {
          this.written = !1;
          for (let DD = 0; DD < 3; DD++) fD[DD] = cD[DD], bD[DD] = CD[DD];
          this.sweepLeft = iD ? 0 : Xc.i
        }
        if (iD ? this.swept += Xc.i : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, pD.push(...(0, Xc.C)(DD, this.slice)), this.slice = (this.slice + 1) % Xc.i, this.swept++), 0 === pD.length) return;
        const BD = (0, Xc.F)(this.workData, CD, pD);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const yD = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          MD = yD.beginComputePass({
            label: "sun-shadow-volume"
          });
        MD.setPipeline(ID.pipeline), MD.setBindGroup(Oc.group, ID.bindGroup), MD.dispatchWorkgroups(Math.ceil(BD / Xc.m)), MD.end(), this.device.queue.submit([yD.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const DD = Oc,
          CD = GPUShaderStage.COMPUTE,
          cD = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: DD.uniform,
              visibility: CD,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: DD.Ey,
              visibility: CD,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: DD.special,
              visibility: CD,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: DD.work,
              visibility: CD,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: DD.volume,
              visibility: CD,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          ID = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: cD,
            entries: [{
              binding: DD.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: DD.Ey,
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
            bindGroupLayouts: [cD]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: Pc()
            }),
            entryPoint: "main"
          }
        }).then((DD => {
          this.volumePass = {
            pipeline: DD,
            bindGroup: ID
          }
        }), (DD => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(DD)}`)
        })), null
      }
      start(DD) {
        if (this.window) return this.window;
        const CD = (DD, CD) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * DD, CD)
        };
        this.casters = new iQ(((DD, cD) => {
          this.castersWritten = !0, CD(DD, cD)
        }), tQ);
        const cD = new wQ(this.casters, ((DD, CD) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * DD, CD)
        }), CD);
        return cD.encoded = DD => {
          this.markStale(DD)
        }, DD.Zy.on("chunkAdded", (DD => {
          cD.chunkAdded(DD)
        })), this.window = cD, cD
      }
    }
    var oQ = cD(38072),
      vQ = cD(38076);
    const NQ = 0,
      gQ = 3,
      XQ = 4,
      mQ = 5;

    function nQ(DD, CD, cD, ID) {
      DD.drawOffset(CD, ID + NQ), CD[ID + gQ] = DD.drawTime(), cD[ID + XQ] = DD.ring.drawStart(), cD[ID + mQ] = DD.ring.drawCount()
    }
    const OQ = `\n${ZI}\n\nconst MAX_STOPS = ${vQ.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${vQ.b/4}>,\n\tcolor1: array<vec4f, ${vQ.b}>,\n\tcolor2: array<vec4f, ${vQ.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${vQ.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${vQ.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var PQ = cD(40674);
    class HQ {
      constructor(DD, CD, cD, ID) {
        this.device = DD, this.system = CD, this.frameIndex = cD, this.bindings = ID, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, PQ.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (DD, CD) => {
          this.device.queue.writeBuffer(this.ring, DD * vQ.c * 4, this.system.ring.records, DD * vQ.c, (CD - DD) * vQ.c)
        };
        const {
          name: pD
        } = CD;
        this.ring = DD.createBuffer({
          label: `particles-${pD}`,
          size: CD.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = DD.createBuffer({
          label: `particles-uniforms-${pD}`,
          size: 4 * vQ.f,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(DD) {
        const CD = (0, PQ.c)(this.system, this.uniformBits, DD);
        CD && (this.uniformBits = CD, this.device.queue.writeBuffer(this.uniforms, 0, CD))
      }
      bind() {
        const {
          system: DD
        } = this, CD = this.texture;
        (0, PQ.k)(DD, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${DD.name}`,
          size: [vQ.e, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * vQ.e
        }, [vQ.e, 1]));
        const cD = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === CD.view && this.boundSampler === CD.sampler && this.boundRamp === cD || (this.boundView = CD.view, this.boundSampler = CD.sampler, this.boundRamp = cD, this.bindGroup = this.device.createBindGroup({
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
            resource: CD.sampler
          }, {
            binding: 3,
            resource: CD.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: cD
          }]
        }))
      }
      destroy() {
        var DD;
        this.ring.destroy(), this.uniforms.destroy(), null === (DD = this.ramp) || void 0 === DD || DD.destroy()
      }
    }
    class UQ {
      constructor(DD, CD) {
        this.device = DD, this.resources = CD, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, wC.e)();
        const cD = DD.createBindGroupLayout({
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
          bindGroupLayouts: [CC(DD), cD, this.frameLayout]
        }), this.module = DD.createShaderModule({
          label: "particles",
          code: OQ
        });
        const ID = DD.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        DD.queue.writeTexture({
          texture: ID
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: cD,
          rampSampler: DD.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: ID.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (CD, cD) => (this.bindTarget(cD), {
            renderable: this.renderable,
            pipeline: fC(DD, cD),
            draw: DD => cD === this.preparedTarget ? this.draw(DD) : 0
          })
        }
      }
      get JID() {
        return this.systems.size
      }
      reset() {
        for (const DD of this.systems.keys()) DD.reset()
      }
      describePendingWork() {
        return (0, oQ.g)(this.systems.keys(), "Lite")
      }
      PJ(DD, CD) {
        const cD = new oQ.c(DD, CD, this);
        return this.systems.set(cD, new HQ(this.device, cD, this.allocateFrameIndex(), this.bindings)), cD
      }
      O4(DD, CD) {
        for (const cD of this.systems.keys()) cD.O4(DD, CD)
      }
      canDraw(DD) {
        const CD = this.systems.get(DD),
          cD = DD.texture ? this.resources.boundTexture(DD.texture) : null;
        if (!CD || !cD || !this.targetPipelines) return !1;
        if (CD.texture = cD, CD.pipelines.length = 0, !dp(DD.blendMode)) return this.warnOnce(`blend:${DD.blendMode}`, `particle blend mode ${DD.blendMode} is not drawn (${DD.name})`), !0;
        const ID = (0, qp.m)(DD.blendMode);
        for (const pD of ID) {
          const DD = this.pipelineFor(pD);
          if (!1 === DD) return CD.pipelines.length = 0, !0;
          DD && CD.pipelines.push(DD)
        }
        return CD.pipelines.length === ID.length
      }
      disposeStopped(DD) {
        DD.dispose()
      }
      remove(DD) {
        const CD = this.systems.get(DD);
        CD && (this.systems.delete(DD), CD.destroy(), this.freeFrameIndices.push(CD.frameIndex))
      }
      prepare(DD) {
        const CD = DD.animationRatio || 1;
        bC(this.renderable._worldCenter, DD, IC), this.preparedTarget = this.target, this.draws.length = 0;
        let cD = 0;
        for (const ID of this.systems.values()) {
          const DD = ID.system;
          if (!DD.animateIfActive(CD)) continue;
          if (DD.ring.takeUploads(ID.upload), !DD.hasLiveParticles() || 0 === ID.pipelines.length) continue;
          ID.writeUniforms(this.warnOnce), ID.bind();
          const pD = 64 * ID.frameIndex;
          ID.count = DD.ring.drawCount(), nQ(DD, this.frameData, this.frameBits, pD), cD = Math.max(cD, pD + 64), this.draws.push(ID)
        }
        cD > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, cD)
      }
      draw(DD) {
        let CD = 0,
          cD = null;
        for (const ID of this.draws) {
          DD.setBindGroup(1, ID.bindGroup), DD.setBindGroup(2, this.frameBindGroup, [256 * ID.frameIndex]);
          for (const pD of ID.pipelines) pD !== cD && (DD.setPipeline(pD), cD = pD), DD.draw(4, ID.count), CD++
        }
        return CD
      }
      bindTarget(DD) {
        this.target = DD;
        const CD = `${DD._colorFormat}|${DD._depthStencilFormat}|${DD._depthCompare}|${DD._sampleCount}`;
        let cD = this.pipelines.get(CD);
        cD || (cD = new Map, this.pipelines.set(CD, cD)), this.targetPipelines = cD
      }
      pipelineFor(DD) {
        var CD;
        const cD = this.targetPipelines,
          ID = cD.get(DD);
        if (void 0 !== ID) return ID;
        cD.set(DD, null);
        const pD = this.target,
          iD = DD === qp.e,
          fD = null !== (CD = pD._depthCompare) && void 0 !== CD ? CD : cC;
        return this.device.createRenderPipelineAsync({
          label: `particles-${DD}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: rD({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: iD ? 1 : 0
            }
          }, pD, Yp((0, qp.j)(DD))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: pD._depthStencilFormat ? {
            format: pD._depthStencilFormat,
            depthCompare: fD,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: pD._sampleCount
          }
        }).then((CD => {
          cD.set(DD, CD)
        }), (CD => {
          cD.set(DD, !1), console.error("Lite particle pipeline failed", CD), Ep("particles", `blend-${DD}`, CD)
        })), null
      }
      allocateFrameIndex() {
        const DD = this.freeFrameIndices.pop();
        if (void 0 !== DD) return DD;
        const CD = this.nextFrameIndex++;
        if (64 * (CD + 1) > this.frameData.length) {
          const DD = new Float32Array(2 * this.frameData.length);
          DD.set(this.frameData), this.frameData = DD, this.frameBits = new Uint32Array(DD.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return CD
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
    class xQ {
      constructor(DD, CD, cD, ID, pD) {
        this.lite = DD, this.canvas = CD, this.info = cD, this.resources = pD, this.vcD = !1, this.needPOTTextures = !1, this.Qr = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = CD.width, this.renderHeight = CD.height, this.caps = {
          maxTextureSize: ID.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: ID.maxTextureArrayLayers
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
      setSize(DD, CD) {
        if (this.renderWidth === DD && this.renderHeight === CD) return !1;
        const cD = this.renderWidth,
          ID = this.renderHeight;
        this.renderWidth = DD, this.renderHeight = CD;
        try {
          (0, RD.s)(this.lite, DD, CD)
        } catch (pD) {
          if (pD instanceof DOMException && "InvalidStateError" === pD.name) {
            this.renderWidth = cD, this.renderHeight = ID;
            try {
              (0, RD.s)(this.lite, cD, ID)
            } catch {
              this.canvas.width = cD, this.canvas.height = ID
            }
            return console.warn("WebGPU could not allocate render targets for resize", DD, CD, pD.message), !1
          }
          throw pD
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
      Wm() {
        const DD = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : DD - this.lastFrameTime, this.lastFrameTime = DD
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(DD, CD) {
        const cD = document.createElement("canvas");
        return cD.width = DD, cD.height = CD, cD
      }
      Vr(DD, CD) {
        var cD;
        return null !== (cD = this.resources.Vr.get(DD)) && void 0 !== cD ? cD : new WD(this.resources, DD, CD)
      }
      atlasArray(DD, CD, cD) {
        return this.resources.atlasArray(DD, CD, cD)
      }
    }
    class qQ {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(DD) {
        this.fov = DD.fov, this.nearPlane = DD.near, this.farPlane = DD.far;
        const CD = DD.worldMatrix;
        for (let cD = 0; cD < 16; cD++)
          if (this.worldMatrix[cD] !== CD[cD]) return this.worldMatrix.set(CD), void this.worldMatrixVersion++
      }
    }
    class JQ {
      constructor(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
        let SD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = DD, this.wo = CD, this.sceneTask = cD, this.gpuDevice = ID, this.terrain = pD, this.meshes = iD, this.particles = fD, this.resources = bD, this.sunShadow = SD, this.eDD = void 0, this.backendName = "WebGPU (Lite)", this.sF = void 0, this.modelMeshes = void 0, this.camera = new qQ, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new dD(ID.lost), this.deviceLost = this.refusals.deviceLost, this.eDD = new xQ(DD, QD, wD, ID.limits, bD), (0, xD.C)({
          Lb: DD => {
            aD(DD) && bD.textureSlot(DD)
          },
          loaded: DD => aD(DD) ? bD.textureLoaded(DD) : null,
          canvasUpdated: (DD, CD, cD) => {
            aD(DD) && bD.canvasUpdated(DD, CD, cD)
          }
        }), this.sF = iD.sF, this.modelMeshes = iD.modelMeshes, CD.camera = this.camera
      }
      get castsEntitySunShadows() {
        var DD, CD;
        return null !== (DD = null === (CD = this.sunShadow) || void 0 === CD ? void 0 : CD.tracesEntities) && void 0 !== DD && DD
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(DD) {
        this.modelMeshes.attach(DD.model, DD.sceneMirror);
        const CD = DD.wo;
        this.setClearColour(CD.clearColor.r, CD.clearColor.g, CD.clearColor.b), CD.draw = () => {
          this.drawFrame(DD, CD)
        }
      }
      render(DD) {
        try {
          this.eDD.Wm(), DD.wo.render()
        } catch (CD) {
          throw this.refusals.frameFailed(CD), CD
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var DD, CD, cD, ID;
        const pD = [...this.particles.describePendingWork(), ...null !== (DD = null === (CD = this.sunShadow) || void 0 === CD ? void 0 : CD.describePendingWork()) && void 0 !== DD ? DD : []],
          iD = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (cD = this.terrain.sceneDepth) && void 0 !== cD && cD.compiling ? 1 : 0) + (null !== (ID = this.terrain.shadowMask) && void 0 !== ID && ID.compiling ? 1 : 0);
        iD > 0 && pD.push(`${iD} Lite pipelines compiling`);
        const fD = this.terrain.buffersAwaitingVerdict;
        fD > 0 && pD.push(`${fD} Lite terrain buffers awaiting their out-of-memory verdict`);
        const bD = this.resources.texturesLoading;
        return bD > 0 && pD.push(`${bD} Lite textures loading`), pD
      }
      prepareTexture(DD) {
        return null !== this.resources.boundTexture(DD) || this.resources.textureFailed(DD)
      }
      drawFrame(DD, CD) {
        var cD, ID, pD, iD, fD, bD;
        const QD = tb(DD);
        this.camera.copyFromView(QD), this.setClearColour(QD.clearColour[0], QD.clearColour[1], QD.clearColour[2]), null === (cD = this.sunShadow) || void 0 === cD || cD.prepare(DD.ny, QD.eye, null !== (ID = DD.ny.gt) && void 0 !== ID ? ID : null), this.terrain.prepare(DD, QD), null === (pD = this.terrain.sceneDepth) || void 0 === pD || pD.setPlanes(QD.near, QD.far), null === (iD = this.terrain.shadowMask) || void 0 === iD || iD.prepare(QD), Ff(this.sceneTask), this.meshes.prepare(CD, QD, DD.model.earthSky, null !== (fD = DD.ny.gt) && void 0 !== fD ? fD : null), this.particles.prepare(QD);
        const wD = performance.now();
        this.resources.flushUploads(), null === (bD = this.sunShadow) || void 0 === bD || bD.traceEntities(this.meshes);
        try {
          (0, RD.p)(this.engine, this.lastFrameTime > 0 ? wD - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = wD
      }
      setClearColour(DD, CD, cD) {
        const ID = this.wo.clearColor;
        ID.r = DD, ID.g = CD, ID.b = cD, ID.a = 1
      }
    }
    const KQ = "WebGPU device lost while Lite was starting";

    function aQ(DD, CD) {
      return "object" === typeof DD && null !== DD ? Object.assign(DD, {
        startStep: CD
      }) : DD
    }
    async function VQ(DD, CD) {
      const cD = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!cD) throw aQ(new Error("No WebGPU adapter"), "no_adapter");
      const ID = cD.info,
        pD = {
          vendor: (null === ID || void 0 === ID ? void 0 : ID.vendor) || "unknown vendor",
          renderer: (null === ID || void 0 === ID ? void 0 : ID.architecture) || "unknown renderer",
          version: (null === ID || void 0 === ID ? void 0 : ID.description) || "unknown version"
        },
        iD = function(DD) {
          const CD = {};
          for (const cD in DD.limits) {
            const ID = DD.limits[cD];
            "number" === typeof ID && (CD[cD] = ID)
          }
          return CD
        }(cD);
      let fD;
      DD.style.background = "black";
      try {
        fD = await (0, RD.g)(DD, {
          msaaSamples: CD.aCD ? 4 : 1,
          requiredLimits: iD,
          alphaMode: "premultiplied"
        })
      } catch (SD) {
        throw aQ(SD, "#47" === (null === (bD = SD) || void 0 === bD ? void 0 : bD.message) ? "no_adapter" : "device")
      }
      var bD;
      const QD = function(DD) {
        return DD._device
      }(fD);
      let wD = null;
      QD.lost.then((DD => {
        wD = DD, console.error(`WebGPU device lost (${DD.reason}): ${DD.message}`)
      }));
      try {
        const cD = await async function(DD, CD, cD, ID, pD, iD) {
          const fD = (0, kD.e)(DD),
            bD = new hf(DD, CD),
            QD = new rb(CD),
            wD = new af(CD, bD, (DD => function(DD, CD) {
              for (const ID of FD(DD)) {
                var cD;
                if (ID._targetSignature === CD) return null !== (cD = ID._sceneBG) && void 0 !== cD ? cD : null
              }
              return null
            }(fD, DD))),
            SD = new UQ(CD, bD);
          for (const MD of function(DD, CD, cD) {
              return [CD.opaqueRenderable, DD.opaqueRenderable, DD.skyLastRenderable, cD.renderable, CD.transparentRenderable, DD.transparentRenderable, DD.frontRenderable]
            }(wD, QD, SD)) AD(fD, MD);
          const BD = function(DD) {
            for (const CD of FD(DD))
              if ("wo" === CD.name) return CD;
            throw new Error("Lite: the scene has no render task named scene")
          }(fD);
          pD && QD.installSceneDepth(BD, DD);
          const yD = iD ? new ZQ(CD, iD.entities) : null;
          QD.sunShadow = yD, yD && null !== iD && void 0 !== iD && iD.entities && (QD.shadowMask = new Jb(CD, BD, DD, QD));
          return wD.sunShadow = yD, await (0, kD.g)(fD), new JQ(DD, fD, BD, CD, QD, wD, SD, bD, cD, ID, yD)
        }(fD, QD, DD, pD, CD.sceneDepth, CD.sunShadow);
        if (null !== wD) {
          const {
            reason: DD,
            message: CD
          } = wD;
          throw Object.assign(new Error(`${KQ} (${DD}): ${CD}`), {
            fallbackReason: KQ
          })
        }
        return cD
      } catch (SD) {
        throw QD.destroy(), null === wD ? SD : aQ(SD, "device")
      }
    }
  },
  39961: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => fD,
      F: () => ZD,
      G: () => MD,
      J: () => tD,
      e: () => pD,
      h: () => ID,
      l: () => yD,
      p: () => SD,
      r: () => oD,
      u: () => iD,
      v: () => bD,
      z: () => QD
    });
    const ID = 3,
      pD = 0,
      iD = 1,
      fD = 2,
      bD = {
        uniform: 3,
        Ey: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      QD = 10,
      wD = "BloxdPackInputs",
      SD = "bloxdPackInputs",
      BD = [{
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
      yD = 80;

    function MD() {
      const DD = BD.map((DD => {
        let {
          name: CD,
          type: cD
        } = DD;
        return `    ${CD}: ${cD},\n`
      })).join("");
      return `struct ${wD} {\n${DD}}\n@group(${ID}) @binding(${pD}) var<uniform> ${SD}: ${wD};\n`
    }

    function tD(DD, CD) {
      const cD = new DataView(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, yD),
        [ID, pD, iD, fD, bD, QD] = BD;
      cD.setFloat32(ID.offset, CD.seconds, !0), cD.setUint32(pD.offset, CD.lit ? 1 : 0, !0);
      for (let wD = 0; wD < 3; wD++) cD.setInt32(iD.offset + 4 * wD, CD.renderOffset[wD], !0), cD.setFloat32(fD.offset + 4 * wD, CD.i_[wD], !0), cD.setFloat32(bD.offset + 4 * wD, CD.eyePosition[wD], !0), cD.setFloat32(QD.offset + 4 * wD, CD.shadowDirection[wD], !0)
    }

    function ZD(DD) {
      const CD = new Uint32Array(Math.max(1, DD.length));
      return DD.forEach(((DD, cD) => {
        let {
          id: ID,
          rotation: pD
        } = DD;
        CD[cD] = 65535 & ID | (3 & pD) << 16
      })), CD
    }
    const oD = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);