export const id = 270;
export const ids = [270];
export const modules = {
  41418: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => pC,
      e: () => fC,
      h: () => nC,
      j: () => qC
    });
    var QC = ZC(37138),
      wC = ZC(38538),
      bC = ZC(38529);

    function nC(CC, zC, ZC, QC) {
      const wC = bC.x;
      zC.fill(0), CC.gravity.toArray(zC, wC.gravity), CC.colorDead.toArray(zC, wC.colorDead), ZC[wC.ramp] = CC.useRampGradients ? 1 : 0;
      const nC = CC.getColorGradients(),
        fC = NC(CC, nC, "colour", QC);
      ZC[wC.colorCount] = fC;
      for (let bC = 0; bC < fC; bC++) {
        var oC;
        const CC = nC[MC(nC, bC)];
        zC[wC.colorPositions + bC] = CC.gradient, CC.color1.toArray(zC, wC.color1 + 4 * bC), (null !== (oC = CC.color2) && void 0 !== oC ? oC : CC.color1).toArray(zC, wC.color2 + 4 * bC)
      }
      const qC = CC.getVelocityGradients(),
        FC = NC(CC, qC, "Np", QC);
      ZC[wC.velocityCount] = FC;
      for (let bC = 0; bC < FC; bC++) GC(zC, wC.Np + 4 * bC, qC[MC(qC, bC)]);
      const WC = CC.useRampGradients ? CC.getColorRemapGradients() : null,
        gC = NC(CC, WC, "colour remap", QC);
      ZC[wC.remapCount] = gC;
      for (let bC = 0; bC < gC; bC++) GC(zC, wC.remap + 4 * bC, WC[MC(WC, bC)])
    }

    function fC() {
      return {
        key: [],
        texels: new Uint8Array(4 * bC.k)
      }
    }
    const oC = [];

    function qC(CC, zC) {
      return FC(CC, oC), !PC(oC, zC.key) && (zC.key.length = 0, zC.key.push(...oC), zC.key.length > 0 && function(CC, zC) {
        for (let ZC = 0; ZC < bC.k; ZC++) wC.k.GetCurrentGradient(ZC / bC.k, CC, ((CC, zC, ZC) => {
          QC.Color3.LerpToRef(CC.color, zC.color, ZC, WC)
        })), zC[4 * ZC] = 255 * WC.r, zC[4 * ZC + 1] = 255 * WC.g, zC[4 * ZC + 2] = 255 * WC.b, zC[4 * ZC + 3] = 255
      }(CC.getRampGradients(), zC.texels), !0)
    }

    function FC(CC, zC) {
      zC.length = 0;
      const ZC = CC.useRampGradients ? CC.getRampGradients() : null;
      if (null !== ZC && void 0 !== ZC && ZC.length) {
        zC.push(ZC.length);
        for (const CC of ZC) zC.push(CC.gradient, CC.color.r, CC.color.g, CC.color.b)
      }
    }
    const WC = new QC.Color3;

    function NC(CC, zC, ZC, QC) {
      return zC ? zC.length > bC.d ? (QC(`particleStops:${ZC}`, `GPU particles use the first 2 and last ${bC.d-2} of more than ${bC.d} ${ZC} gradient stops (${CC.name})`), bC.d) : zC.length : 0
    }

    function MC(CC, zC) {
      return zC < 2 || CC.length <= bC.d ? zC : CC.length - bC.d + zC
    }
    const gC = new Float32Array(bC.r),
      SC = new Uint32Array(gC.buffer);

    function pC(CC, zC, ZC) {
      return nC(CC, gC, SC, ZC), zC && PC(SC, zC) ? null : SC.slice()
    }

    function PC(CC, zC) {
      if (CC.length !== zC.length) return !1;
      for (let ZC = 0; ZC < CC.length; ZC++)
        if (CC[ZC] !== zC[ZC]) return !1;
      return !0
    }

    function GC(CC, zC, ZC) {
      var QC;
      CC[zC] = ZC.gradient, CC[zC + 1] = ZC.factor1, CC[zC + 2] = null !== (QC = ZC.factor2) && void 0 !== QC ? QC : ZC.factor1
    }
  },
  41411: (CC, zC, ZC) => {
    function QC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const zC = new Set;
      return (ZC, QC) => {
        zC.has(ZC) || (zC.add(ZC), console.warn(CC + QC))
      }
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  41448: (CC, zC, ZC) => {
    ZC.d(zC, {
      createLiteRendererAsync: () => uo,
      liteBabylonBackend: () => rC,
      setPipelineFailureHook: () => yw
    });
    var QC = ZC(37138),
      wC = ZC(37456),
      bC = ZC(37729),
      nC = ZC(37076),
      fC = ZC(37740);
    class oC extends fC.b {
      constructor() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        super(...zC), this.color = new QC.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: zC[0].Km().getUniqueId(),
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
          needAlphaBlendingForMesh: CC => CC.visibility < 1 || CC.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const qC = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      FC = CC => 1 << qC.indexOf(CC),
      WC = FC("VERTEXCOLOR"),
      NC = FC("INSTANCES"),
      MC = FC("THIN_INSTANCES"),
      gC = FC("INSTANCESCOLOR"),
      SC = FC("FOG"),
      pC = FC("LITE_FRONT_LAYER");

    function PC(CC, zC, ZC, QC) {
      let wC = 0;
      return CC.isVerticesDataPresent("color") && (wC |= WC), "none" !== zC && (wC |= NC), "thin" === zC && (wC |= MC, CC.isVerticesDataPresent("instanceColor") && (wC |= gC)), QC.fogEnabled && CC.applyFog && 0 !== QC.fogMode && (wC |= SC), ZC >= 1 && (wC |= pC), wC
    }

    function GC(CC, zC) {
      CC.updateColor4("color", zC.color, zC.alpha)
    }
    var RC = ZC(37673),
      AC = ZC(37290),
      xC = ZC(37175),
      JC = ZC(37050),
      IC = ZC(37660),
      iC = ZC(37670),
      vC = ZC(37063),
      eC = ZC(37069),
      hC = ZC(37083);
    const KC = JC.e.GLSL;
    class YC {
      constructor(CC, zC) {
        this.name = CC, this.sS = zC, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Tm = {
          addOnce: CC => {
            this.disposers.push(CC)
          }
        }, this.uniqueId = zC.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      Km() {
        return this.sS
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
      needAlphaBlendingForMesh(CC) {
        return (0, vC.Q)(this.model, CC.visibility, CC.hasVertexAlpha)
      }
      needAlphaTestingForMesh(CC) {
        return (0, vC.R)(this.model, CC.visibility, CC.hasVertexAlpha)
      }
      dispose() {
        (0, AC.k)(this);
        for (const CC of this.disposers.splice(0)) CC()
      }
      get model() {
        return (0, vC.Y)(this)
      }
    }
    const dC = new WeakSet;

    function mC(CC) {
      return dC.has(CC)
    }

    function HC(CC) {
      dC.add(CC)
    }
    const EC = {
      create: (CC, zC) => ((0, xC.u)(CC, new YC(CC.name, zC)), eC.c.defines()),
      write: () => {},
      addFeature: (CC, zC) => {
        const ZC = CC.mirror;
        zC.feature === iC.f && zC.state.dirLightCount > 0 && (CC.disableLighting = !0, (0, vC.W)(CC)), "BLOXD_LIGHTING" in zC.defines && (0, AC.g)(ZC), zC.feature === IC.j && ((0, RC.k)(zC.state, KC), function(CC, zC) {
          const ZC = CC.Km().mg();
          zC.textures.forEach(((QC, wC) => {
            setTimeout((() => {
              var bC, nC;
              const {
                url: fC
              } = QC.source;
              ZC.atlasArray(fC, null !== (bC = null === (nC = zC.sources.pixels) || void 0 === nC ? void 0 : nC[wC]) && void 0 !== bC ? bC : null, zC.sources.layerWidth).then((ZC => {
                (0, RC.d)(CC, zC, wC, ZC, ZC.layerWidth, ZC.layers, KC)
              })).catch((CC => {
                console.error(`Failed to build texture array for atlas ${wC}`, CC)
              }))
            }))
          }))
        }(ZC, zC.state))
      },
      texture: (CC, zC, ZC) => {
        let {
          data: QC,
          sets: wC
        } = ZC;
        var bC;
        (HC(CC), QC) && (CC.uvSet = null !== (bC = null === wC || void 0 === wC ? void 0 : wC.coordinatesIndex) && void 0 !== bC ? bC : 0, (0, xC.eb)(CC.matrix, null !== wC && void 0 !== wC ? wC : {}))
      },
      cube: HC,
      canvas: (CC, zC, ZC) => {
        let {
          width: QC,
          height: wC,
          mipmaps: bC,
          samplingMode: nC = hC.h.trilinear,
          hasAlpha: fC = !1,
          wrap: oC = hC.d.clamp
        } = ZC;
        const qC = CC.mg().createCanvas(QC, wC),
          FC = new hC.i("2d", {
            kind: "canvas",
            width: QC,
            height: wC,
            canvas: qC
          }, {
            samplingMode: nC,
            wrapU: oC,
            wrapV: oC,
            noMipmap: !bC,
            invertY: !0
          });
        return FC.hasAlpha = fC, HC(FC), FC
      }
    };
    var lC = ZC(37306),
      XC = ZC(36987);
    class cC {
      constructor(CC, zC, ZC) {
        this.engine = CC, this.clearColor = zC, this.ambientColor = ZC, this.onBeforeRenderObservable = new XC.d, this.onBeforeCameraRenderObservable = new XC.d, this.onAfterRenderObservable = new XC.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.Ix = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      mg() {
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
      addPendingData(CC) {
        this.pending.push(CC)
      }
      removePendingData(CC) {
        const zC = this.pending.indexOf(CC); - 1 !== zC && this.pending.splice(zC, 1)
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

    function uC() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const rC = {
      gZC: uC,
      EQC: (CC, zC) => {
        const ZC = new cC(CC.engine, QC.e.FromArray(zC.clearColor), QC.Color3.FromArray(zC.ambientColor));
        (0, nC.c)(EC, ZC), CC.sS = ZC,
          function(CC, zC) {
            const ZC = Object.assign((0, lC.h)(CC, "camera"), {
              layerMask: 268435455
            });
            CC.model.nodes.setWorldSource(ZC.row, CC.model.view.worldMatrix), CC.camera = zC.activeCamera = ZC
          }(CC, ZC), (0, wC.l)(CC, ((CC, zC, ZC) => (0, bC.i)(CC, zC, ZC, fC.b)))
      },
      YQC: () => {},
      setBabylonFog: () => {},
      XQC: uC,
      TQC: () => {},
      linesFromArrays: (CC, zC, ZC) => (0, bC.i)(CC, zC, ZC, oC),
      aS: () => {},
      sQC: uC
    };
    var sC = ZC(41514),
      TC = ZC(41525);
    class aC {
      constructor(CC) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const zC = new Promise((CC => {
          this.refused = CC
        }));
        this.deviceLost = Promise.race([CC, zC]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(CC) {
        (function(CC) {
          const {
            name: zC,
            message: ZC
          } = null !== CC && void 0 !== CC ? CC : {};
          return "InvalidStateError" === zC && "string" === typeof ZC && ZC.startsWith("GPUDevice.")
        })(CC) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: CC.message,
          framesRefused: !0
        }))
      }
    }
    class tC {
      constructor(CC) {
        this.resources = CC, this.matrixKey = {
          HW: 0
        }, this.attributesKey = {
          HW: 0
        }, this.inputs = Object.create(null);
        for (let zC = 0; zC < 4; zC++) this.inputs[`world${zC}`] = new yC(this.matrixKey, 16 * zC, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(CC, zC) {
        this.resources.vertexBufferCreated(this.matrixKey, CC, !0), zC && this.resources.vertexBufferCreated(this.attributesKey, zC, !0)
      }
    }
    class DC extends tC {
      constructor(CC, zC, ZC) {
        super(CC), this.mesh = zC, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const QC = this.inputs;
        let wC = 0;
        for (const {
            size: nC
          }
          of ZC) wC += nC;
        for (const {
            name: nC,
            offset: fC,
            size: oC,
            type: qC
          }
          of ZC) QC[nC] = new yC(this.attributesKey, 4 * fC, 4 * wC, oC, !0, qC);
        this.rowStride = wC, CC.T6.set(zC, this);
        const bC = zC.isVerticesDataPresent;
        zC.isVerticesDataPresent = (CC, ZC) => CC in QC || bC.call(zC, CC, ZC)
      }
      attach(CC, zC) {
        this.matrices = CC, this.attributes = zC, this.bind(CC, zC), this.mirror(CC, CC.length, CC.length / 16)
      }
      J_(CC) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, CC ? 64 * CC : void 0)
      }
      i_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(CC, zC) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * CC, 16 * zC)
      }
      attributeRows(CC, zC) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, CC * this.rowStride, zC * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(CC, zC, ZC) {
        const QC = this.mesh._thinInstanceDataStorage;
        QC.matrixData = CC, QC.matrixBufferSize = zC, QC.worldMatrices = null, QC.instancesCount = ZC
      }
    }
    class jC extends tC {
      constructor(CC, zC, ZC) {
        var QC, wC, bC, nC;
        super(CC), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.interleavedKinds) && void 0 !== QC ? QC : null, this.offsets = null !== (wC = null === ZC || void 0 === ZC ? void 0 : ZC.interleavedOffsets) && void 0 !== wC ? wC : [], this.rowStride = null !== (bC = null === ZC || void 0 === ZC ? void 0 : ZC.interleavedRowStride) && void 0 !== bC ? bC : 0, null === (nC = this.layout) || void 0 === nC || nC.forEach(((CC, zC) => {
          this.inputs[CC] = new yC(this.attributesKey, 4 * this.offsets[zC], 4 * this.rowStride, ZC.strides[CC])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), CC.batchUploads.set(zC, this), zC.Tm.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(CC) {
        const zC = this.packedBatch;
        return zC.renderSelf ? 0 === CC ? this.packedSource : zC.instances[CC - 1] : zC.instances[CC]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(CC, zC, ZC, QC) {
        const wC = (zC.renderSelf ? 1 : 0) + zC.rows.length;
        if (this.frame = QC, this.count = wC, this.packedSource = CC, this.packedBatch = zC, 0 === wC) return;
        if (CC.getWorldMatrix(), 16 * wC > this.matrices.length) {
          let CC = this.matrices.length / 16;
          for (; CC < wC;) CC *= 2;
          this.matrices = new Float32Array(16 * CC), this.attributes &&= new Float32Array(CC * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let bC = 0;
        zC.renderSelf && this.packRow(bC++, CC, zC.row, ZC);
        for (let nC = 0; nC < zC.rows.length; nC++) this.packRow(bC++, zC.instances[nC], zC.rows[nC], ZC);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * wC), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, wC * this.rowStride)
      }
      packRow(CC, zC, ZC, QC) {
        const wC = this.matrices;
        if (ZC < 0) wC.set(zC.getWorldMatrix().m, 16 * CC);
        else
          for (let qC = 0; qC < 16; qC++) wC[16 * CC + qC] = QC[16 * ZC + qC];
        const bC = this.attributes;
        if (!bC) return;
        const nC = zC.ZE,
          fC = this.layout;
        for (let qC = 0; qC < fC.length; qC++) {
          var oC;
          const zC = null !== (oC = nC[fC[qC]]) && void 0 !== oC ? oC : 0,
            ZC = CC * this.rowStride + this.offsets[qC];
          zC.toArray ? zC.toArray(bC, ZC) : zC.copyToArray ? zC.copyToArray(bC, ZC) : bC[ZC] = zC
        }
      }
    }
    class yC {
      constructor(CC, zC, ZC, QC) {
        let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = CC, this.byteOffset = zC, this.byteStride = ZC, this.size = QC, this.instanced = wC, this.type = bC, this.normalized = nC
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
    const LC = "CANVAS_ALPHA_ONE",
      UC = `override ${LC}: bool = false;`,
      BC = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function OC(CC, zC, ZC) {
      var QC;
      let wC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const bC = null !== (QC = zC._colorFormat) && void 0 !== QC ? QC : "bgra8unorm",
        nC = wC ? 15 : 0;
      return ZC ? {
        ...CC,
        targets: [{
          format: bC,
          blend: {
            color: ZC,
            alpha: BC
          },
          writeMask: nC
        }]
      } : {
        ...CC,
        constants: {
          ...CC.constants,
          [LC]: 1
        },
        targets: [{
          format: bC,
          writeMask: nC
        }]
      }
    }

    function kC(CC, zC) {
      CC._renderables.push(zC)
    }

    function VC(CC) {
      var zC, ZC;
      return null !== (zC = null === (ZC = CC._frameGraph) || void 0 === ZC ? void 0 : ZC._tasks) && void 0 !== zC ? zC : []
    }

    function Cz(CC) {
      return CC._currentEncoder
    }

    function zz(CC) {
      return CC.createBindGroupLayout({
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
    const Zz = "greater-equal",
      Qz = 2e5,
      wz = 1e5,
      bz = new WeakMap;

    function nz(CC, zC) {
      let ZC = bz.get(CC);
      if (!ZC) {
        ZC = {
          module: CC.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, bz.set(CC, ZC)
      }
      const QC = `${zC._colorFormat}|${zC._depthStencilFormat}|${zC._sampleCount}`;
      let wC = ZC.pipelines.get(QC);
      if (!wC) {
        var bC;
        const {
          module: nC
        } = ZC;
        wC = CC.createRenderPipeline({
          label: `placeholder ${QC}`,
          layout: CC.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: nC,
            entryPoint: "v"
          },
          fragment: {
            module: nC,
            entryPoint: "f",
            targets: [{
              format: null !== (bC = zC._colorFormat) && void 0 !== bC ? bC : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: zC._depthStencilFormat ? {
            format: zC._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: zC._sampleCount
          }
        }), ZC.pipelines.set(QC, wC)
      }
      return wC
    }

    function fz(CC, zC, ZC) {
      const QC = zC.eye,
        wC = zC.viewMatrix;
      CC[0] = QC[0] + wC[2] * ZC, CC[1] = QC[1] + wC[6] * ZC, CC[2] = QC[2] + wC[10] * ZC
    }
    var oz = ZC(37788),
      qz = ZC(41411),
      Fz = ZC(37061);
    const Wz = Math.PI,
      Nz = Wz / 1.95,
      Mz = [5e-4 / 94, 125e-7, 5e-4 / 18],
      gz = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((CC => {
        let [zC, ZC] = CC;
        return .434 * Wz * Math.pow(2 * Wz / zC, 2) * ZC
      }));

    function Sz(CC, zC, ZC) {
      const {
        up: QC,
        mieDirectionalG: wC
      } = CC, bC = 1 - Gz(1 - Math.exp(zC[1] / 45e4), 0, 1), nC = CC.rayleigh - (1 - bC), fC = Math.hypot(zC[0], zC[1], zC[2]), oC = fC > 0 ? 1 / fC : 0, qC = ZC.sunDir;
      for (let MC = 0; MC < 3; MC++) qC[MC] = zC[MC] * oC;
      const FC = qC[0] * QC[0] + qC[1] * QC[1] + qC[2] * QC[2],
        WC = 1e3 * Math.max(0, 1 - Math.exp(-(Nz - Math.acos(Gz(FC, -1, 1))) / 1.5));
      ZC.sunE = WC;
      const NC = .2 * CC.turbidity * 1e-17 * CC.mieCoefficient;
      for (let MC = 0; MC < 3; MC++) {
        const CC = Mz[MC] * nC,
          zC = gz[MC] * NC,
          QC = WC / (CC + zC);
        ZC.inScatterR[MC] = CC * QC, ZC.inScatterM[MC] = zC * QC, ZC.extinctionBeta[MC] = 8400 * CC + 1250 * zC
      }
      return ZC.sunsetMix = Gz(Math.pow(1 - FC, 5), 0, 1), ZC.sunDiscE = 19e3 * WC, ZC.mieScale = (1 - wC * wC) / (4 * Wz), ZC.mieBase = 1 + wC * wC, ZC.mieSlope = 2 * wC, ZC
    }
    const pz = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const Pz = 1 / function(CC) {
      const {
        A: zC,
        B: ZC,
        C: QC,
        D: wC,
        E: bC,
        F: nC
      } = pz;
      return (CC * (zC * CC + QC * ZC) + wC * bC) / (CC * (zC * CC + ZC) + wC * nC) - bC / nC
    }(1e3);

    function Gz(CC, zC, ZC) {
      return Math.min(Math.max(CC, zC), ZC)
    }
    const Rz = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function Az(CC, zC) {
      const ZC = new Map(zC),
        QC = [],
        wC = [],
        bC = () => 0 === wC.length || wC[wC.length - 1].active;
      let nC = null;
      const fC = () => {
        const CC = [...ZC].filter((CC => {
            let [, zC] = CC;
            return !0 !== zC
          })),
          zC = CC.map((CC => {
            let [zC] = CC;
            return zC
          })).join("|");
        nC = CC.length ? new RegExp(`\\b(${zC})\\b`, "g") : null
      };
      fC();
      for (const oC of CC.split("\n")) {
        const CC = Rz.exec(oC);
        if (!CC) {
          bC() && QC.push(nC ? xz(oC, nC, ZC) : oC);
          continue
        }
        const zC = CC[1],
          qC = CC[2].trim();
        if ("ifdef" === zC || "ifndef" === zC || "if" === zC) {
          const CC = bC(),
            QC = "if" === zC ? Jz(qC, ZC) : ZC.has(qC) === ("ifdef" === zC);
          wC.push({
            active: CC && QC,
            parentActive: CC,
            taken: QC
          })
        } else if ("elif" === zC || "else" === zC) {
          const CC = wC[wC.length - 1];
          if (!CC) throw new Error(`#${zC} without #if`);
          const QC = !CC.taken && ("else" === zC || Jz(qC, ZC));
          CC.active = CC.parentActive && QC, CC.taken = CC.taken || QC
        } else if ("endif" === zC) {
          if (!wC.pop()) throw new Error("#endif without #if")
        } else if (bC()) {
          const [CC, ...QC] = qC.split(/\s+/);
          "undef" === zC ? ZC.delete(CC) : ZC.set(CC, !QC.length || QC.join(" ")), fC()
        }
      }
      if (wC.length) throw new Error("Unterminated #if");
      return QC.join("\n")
    }

    function xz(CC, zC, ZC) {
      return CC.replace(zC, (CC => {
        const zC = ZC.get(CC);
        return "string" === typeof zC ? zC : CC
      }))
    }

    function Jz(CC, zC) {
      var ZC;
      const QC = null !== (ZC = CC.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== ZC ? ZC : [];
      let wC = 0;
      const bC = () => QC[wC],
        nC = () => QC[wC++],
        fC = CC => {
          const ZC = /^\d/.test(CC) ? CC : zC.get(CC);
          return "string" === typeof ZC ? parseInt(ZC) : Number.NaN
        },
        oC = () => {
          const CC = nC();
          if ("!" === CC) return !oC();
          if ("(" === CC) {
            const CC = FC();
            return nC(), CC
          }
          if ("defined" === CC) {
            const CC = "(" === bC();
            CC && nC();
            const ZC = nC();
            return CC && nC(), zC.has(ZC)
          }
          const ZC = bC();
          if ("==" === ZC || "!=" === ZC || ">" === ZC || "<" === ZC || ">=" === ZC || "<=" === ZC) {
            nC();
            const zC = fC(CC),
              QC = fC(nC());
            if (Number.isNaN(zC) || Number.isNaN(QC)) return !1;
            switch (ZC) {
              case "==":
                return zC === QC;
              case "!=":
                return zC !== QC;
              case ">":
                return zC > QC;
              case "<":
                return zC < QC;
              case ">=":
                return zC >= QC;
              default:
                return zC <= QC
            }
          }
          return zC.has(CC)
        },
        qC = () => {
          let CC = oC();
          for (;
            "&&" === bC();) {
            nC();
            const zC = oC();
            CC = CC && zC
          }
          return CC
        },
        FC = () => {
          let CC = qC();
          for (;
            "||" === bC();) {
            nC();
            const zC = qC();
            CC = CC || zC
          }
          return CC
        },
        WC = FC();
      if (wC !== QC.length) throw new Error(`Cannot evaluate #if ${CC}`);
      return WC
    }
    var Iz = ZC(37059),
      iz = ZC(37381),
      vz = ZC(37386),
      ez = ZC(40534),
      hz = ZC(38582);
    const Kz = 32,
      Yz = [10, 3, 10],
      dz = [21, 7, 21],
      mz = dz[0] * dz[1] * dz[2],
      Hz = 0,
      Ez = 1,
      lz = 2,
      Xz = 3,
      cz = 64,
      uz = 512,
      rz = 4 * mz,
      sz = 1536,
      Tz = rz + mz * sz,
      az = 1073741824,
      tz = Tz + 1;

    function Dz(CC, zC) {
      const ZC = CC % zC;
      return ZC < 0 ? ZC + zC : ZC
    }

    function jz(CC, zC, ZC) {
      return QC = Dz(CC, dz[0]), wC = Dz(zC, dz[1]), bC = Dz(ZC, dz[2]), QC + dz[0] * (wC + dz[1] * bC);
      var QC, wC, bC
    }

    function yz(CC, zC, ZC) {
      return CC + 8 * (zC + 8 * ZC)
    }

    function Lz(CC, zC, ZC) {
      return CC + 4 * (zC + 4 * ZC)
    }
    const Uz = 65535,
      Bz = 0,
      Oz = 1,
      kz = 2,
      Vz = 3;

    function CZ(CC) {
      return Math.ceil(CC * CC / 32)
    }
    const zZ = 8192,
      ZZ = 1 << 18,
      QZ = 65536,
      wZ = 294912,
      bZ = 128,
      nZ = 4096,
      fZ = 16,
      oZ = 16385,
      qZ = 81921,
      FZ = 147457,
      WZ = 4194304;
    const NZ = [0, 0, 0],
      MZ = [0, 0, 0];

    function gZ(CC, zC, ZC, QC) {
      ! function(CC, zC, ZC) {
        const [QC, wC, bC] = [CC[0], CC[1], CC[2]];
        let nC, fC, oC;
        Math.abs(wC) < .99 ? (nC = bC, fC = 0, oC = -QC) : (nC = -wC, fC = QC, oC = 0);
        const qC = Math.hypot(nC, fC, oC);
        zC[0] = nC / qC, zC[1] = fC / qC, zC[2] = oC / qC, ZC[0] = wC * zC[2] - bC * zC[1], ZC[1] = bC * zC[0] - QC * zC[2], ZC[2] = QC * zC[1] - wC * zC[0]
      }(QC, NZ, MZ);
      const wC = 1 / 32;
      for (const [bC, nC] of [
          [0, NZ],
          [4, MZ]
        ]) {
        for (let ZC = 0; ZC < 3; ZC++) CC[zC + bC + ZC] = nC[ZC] * wC;
        CC[zC + bC + 3] = -(nC[0] * ZC[0] + nC[1] * ZC[1] + nC[2] * ZC[2]) * wC
      }
    }
    class SZ {
      constructor() {
        this.words = new Uint32Array(FZ), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      RM(CC, zC) {
        this.parts = 0, this.refs = 0, this.view = CC, this.viewAt = zC;
        const ZC = CC[zC + 1] * CC[zC + 6] - CC[zC + 2] * CC[zC + 5],
          QC = CC[zC + 2] * CC[zC + 4] - CC[zC] * CC[zC + 6],
          wC = CC[zC] * CC[zC + 5] - CC[zC + 1] * CC[zC + 4],
          bC = Math.hypot(ZC, QC, wC) || 1;
        this.light[0] = ZC / bC, this.light[1] = QC / bC, this.light[2] = wC / bC
      }
      add(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= nZ || ! function(CC, zC, ZC) {
            const QC = CC[zC],
              wC = CC[zC + 1],
              bC = CC[zC + 2],
              nC = CC[zC + 3],
              fC = CC[zC + 4],
              oC = CC[zC + 5],
              qC = CC[zC + 6],
              FC = CC[zC + 7],
              WC = CC[zC + 8],
              NC = CC[zC + 9],
              MC = CC[zC + 10],
              gC = CC[zC + 11],
              SC = CC[zC + 12],
              pC = CC[zC + 13],
              PC = CC[zC + 14],
              GC = CC[zC + 15],
              RC = QC * oC - wC * fC,
              AC = QC * qC - bC * fC,
              xC = QC * FC - nC * fC,
              JC = wC * qC - bC * oC,
              IC = wC * FC - nC * oC,
              iC = bC * FC - nC * qC,
              vC = WC * pC - NC * SC,
              eC = WC * PC - MC * SC,
              hC = WC * GC - gC * SC,
              KC = NC * PC - MC * pC,
              YC = NC * GC - gC * pC,
              dC = MC * GC - gC * PC,
              mC = RC * dC - AC * YC + xC * KC + JC * hC - IC * eC + iC * vC;
            if (!(Math.abs(mC) > 1e-12)) return !1;
            const HC = 1 / mC;
            return ZC[0] = (oC * dC - qC * YC + FC * KC) * HC, ZC[1] = (bC * YC - wC * dC - nC * KC) * HC, ZC[2] = (pC * iC - PC * IC + GC * JC) * HC, ZC[3] = (MC * IC - NC * iC - gC * JC) * HC, ZC[4] = (qC * hC - fC * dC - FC * eC) * HC, ZC[5] = (QC * dC - bC * hC + nC * eC) * HC, ZC[6] = (PC * xC - SC * iC - GC * AC) * HC, ZC[7] = (WC * iC - MC * xC + gC * AC) * HC, ZC[8] = (fC * YC - oC * hC + FC * vC) * HC, ZC[9] = (wC * hC - QC * YC - nC * vC) * HC, ZC[10] = (SC * IC - pC * xC + GC * RC) * HC, ZC[11] = (NC * xC - WC * IC - gC * RC) * HC, ZC[12] = (oC * eC - fC * KC - qC * vC) * HC, ZC[13] = (QC * KC - wC * eC + bC * vC) * HC, ZC[14] = (pC * AC - SC * JC - PC * RC) * HC, ZC[15] = (WC * JC - NC * AC + MC * RC) * HC, !0
          }(zC, ZC, this.inverse)) return;
        const {
          view: QC,
          viewAt: wC
        } = this, bC = ZC;
        let nC = 1 / 0,
          fC = 1 / 0,
          oC = -1 / 0,
          qC = -1 / 0,
          FC = -1 / 0;
        const [WC, NC, MC] = this.light;
        for (let xC = 0; xC < 8; xC++) {
          const ZC = 1 & xC ? CC.hi[0] : CC.lo[0],
            gC = 2 & xC ? CC.hi[1] : CC.lo[1],
            SC = 4 & xC ? CC.hi[2] : CC.lo[2],
            pC = ZC * zC[bC] + gC * zC[bC + 4] + SC * zC[bC + 8] + zC[bC + 12],
            PC = ZC * zC[bC + 1] + gC * zC[bC + 5] + SC * zC[bC + 9] + zC[bC + 13],
            GC = ZC * zC[bC + 2] + gC * zC[bC + 6] + SC * zC[bC + 10] + zC[bC + 14],
            RC = QC[wC] * pC + QC[wC + 1] * PC + QC[wC + 2] * GC + QC[wC + 3],
            AC = QC[wC + 4] * pC + QC[wC + 5] * PC + QC[wC + 6] * GC + QC[wC + 7];
          nC = Math.min(nC, RC), fC = Math.min(fC, AC), oC = Math.max(oC, RC), qC = Math.max(qC, AC), FC = Math.max(FC, WC * pC + NC * PC + MC * GC)
        }
        if (oC < -1 || qC < -1 || nC >= 1 || fC >= 1) return;
        const gC = this.parts++,
          SC = this.rects;
        SC[4 * gC] = pZ(nC), SC[4 * gC + 1] = pZ(fC), SC[4 * gC + 2] = pZ(oC), SC[4 * gC + 3] = pZ(qC);
        const pC = this.inverse,
          {
            cell: PC,
            dims: GC,
            lo: RC
          } = CC,
          AC = qZ + gC * fZ;
        for (let xC = 0; xC < 3; xC++) this.floats[AC + 4 * xC] = pC[xC] / PC, this.floats[AC + 4 * xC + 1] = pC[4 + xC] / PC, this.floats[AC + 4 * xC + 2] = pC[8 + xC] / PC, this.floats[AC + 4 * xC + 3] = (pC[12 + xC] - RC[xC]) / PC;
        this.words[AC + 12] = CC.at, this.floats[AC + 13] = FC + .001 * (1 + Math.abs(FC)), this.words[AC + 14] = GC[0] | GC[1] << 8 | GC[2] << 16
      }
      finish() {
        const CC = bZ,
          {
            counts: zC,
            rects: ZC,
            words: QC
          } = this;
        zC.fill(0);
        let wC = 0,
          bC = 0;
        for (; bC < this.parts; bC++) {
          const QC = 4 * bC,
            nC = (ZC[QC + 2] - ZC[QC] + 1) * (ZC[QC + 3] - ZC[QC + 1] + 1);
          if (wC + nC > 65536) break;
          wC += nC;
          for (let wC = ZC[QC + 1]; wC <= ZC[QC + 3]; wC++)
            for (let bC = ZC[QC]; bC <= ZC[QC + 2]; bC++) zC[wC * CC + bC]++
        }
        let nC = 0;
        for (let oC = 0; oC < 16384; oC++) QC[oC] = nC, nC += zC[oC], zC[oC] = QC[oC];
        QC[16384] = nC;
        for (let oC = 0; oC < bC; oC++) {
          const wC = 4 * oC;
          for (let bC = ZC[wC + 1]; bC <= ZC[wC + 3]; bC++)
            for (let nC = ZC[wC]; nC <= ZC[wC + 2]; nC++) QC[oZ + zC[bC * CC + nC]++] = oC
        }
        const fC = this.floats;
        for (let oC = 0; oC < 16384; oC++) {
          const CC = oZ + QC[oC],
            zC = CC + Math.min(QC[oC + 1] - QC[oC], 64);
          for (let ZC = CC + 1; ZC < zC; ZC++) {
            const zC = QC[ZC],
              wC = fC[81934 + zC * fZ];
            let bC = ZC - 1;
            for (; bC >= CC && fC[81934 + QC[bC] * fZ] < wC; bC--) QC[bC + 1] = QC[bC];
            QC[bC + 1] = zC
          }
        }
        this.refs = wC
      }
    }

    function pZ(CC) {
      return Math.min(127, Math.max(0, Math.floor((.5 * CC + .5) * bZ)))
    }

    function PZ(CC, zC, ZC, QC, wC) {
      for (let bC = 0; bC < 4; bC++)
        for (let nC = 0; nC < 4; nC++) wC[4 * bC + nC] = CC[zC + 4 * bC] * ZC[QC + nC] + CC[zC + 4 * bC + 1] * ZC[QC + 4 + nC] + CC[zC + 4 * bC + 2] * ZC[QC + 8 + nC] + CC[zC + 4 * bC + 3] * ZC[QC + 12 + nC]
    }

    function GZ(CC, zC, ZC, QC, wC) {
      const bC = CC[0] - zC,
        nC = CC[1] - ZC,
        fC = CC[2] - QC,
        oC = CC[3] - zC,
        qC = CC[4] - ZC,
        FC = CC[5] - QC,
        WC = CC[6] - zC,
        NC = CC[7] - ZC,
        MC = CC[8] - QC;
      if (Math.min(bC, oC, WC) > wC || Math.max(bC, oC, WC) < -wC) return !1;
      if (Math.min(nC, qC, NC) > wC || Math.max(nC, qC, NC) < -wC) return !1;
      if (Math.min(fC, FC, MC) > wC || Math.max(fC, FC, MC) < -wC) return !1;
      const gC = oC - bC,
        SC = qC - nC,
        pC = FC - fC,
        PC = WC - oC,
        GC = NC - qC,
        RC = MC - FC,
        AC = SC * RC - pC * GC,
        xC = pC * PC - gC * RC,
        JC = gC * GC - SC * PC;
      if (Math.abs(AC * bC + xC * nC + JC * fC) > wC * (Math.abs(AC) + Math.abs(xC) + Math.abs(JC))) return !1;
      const IC = [gC, SC, pC, PC, GC, RC, bC - WC, nC - NC, fC - MC];
      for (let iC = 0; iC < 3; iC++) {
        const CC = IC[3 * iC],
          zC = IC[3 * iC + 1],
          ZC = IC[3 * iC + 2];
        for (let QC = 0; QC < 3; QC++) {
          const gC = 0 === QC ? 0 : 1 === QC ? ZC : -zC,
            SC = 0 === QC ? -ZC : 1 === QC ? 0 : CC,
            pC = 0 === QC ? zC : 1 === QC ? -CC : 0,
            PC = gC * bC + SC * nC + pC * fC,
            GC = gC * oC + SC * qC + pC * FC,
            RC = gC * WC + SC * NC + pC * MC,
            AC = wC * (Math.abs(gC) + Math.abs(SC) + Math.abs(pC));
          if (Math.min(PC, GC, RC) > AC || Math.max(PC, GC, RC) < -AC) return !1
        }
      }
      return !0
    }
    const RZ = new Float32Array(1);
    new Uint32Array(RZ.buffer);
    var AZ = ZC(38584);

    function xZ(CC) {
      const [zC, ZC, QC] = AZ.q;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${CC.group}) @binding(${CC.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${zC-1}, ${ZC-1}, ${QC-1});\n}\n`
    }

    function JZ(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [wC, bC, nC] = dz, [fC, oC, qC] = Yz, FC = Math.log2(Kz), WC = QC ? "var<private> bloxdSpCrossed: bool;\n" : "", NC = QC ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${CC.group}) @binding(${CC.lN}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${CC.group}) @binding(${CC.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${ZC?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${WC}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Oz}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${kz}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${ZC?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${Vz}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${wC}, ${bC}, ${nC});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${wC} * (s.y + ${bC} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${fC}, ${oC}, ${qC}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${FC}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Xz}u) {\n\t\treturn named && state == ${lz}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${rz}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Tz}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${zC?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${zC?`\t\tif (exits && step > 0 && step % ${vZ} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${FC}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${Hz}u || kind == ${Ez}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${lz}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${rz}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${NC}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const IZ = {
      group: 0,
      uniform: 0,
      lN: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function iZ() {
      const CC = IZ;
      return `${xZ(CC)}${JZ(CC,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${AZ.d}>,\n}\n@group(${CC.group}) @binding(${CC.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${CC.group}) @binding(${CC.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${AZ.l})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${AZ.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${AZ.h}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const vZ = 2;
    const eZ = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function hZ(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const QC = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${zC.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        wC = "trace" === ZC || "lit" === ZC,
        bC = "maskEdge" === ZC ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        nC = wC ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${zC.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${zC.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===ZC?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${bC};\n`;
      return `${QC}${CC.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${wC?function(){const[CC,zC,ZC]=AZ.q;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${CC}.0, ${zC}.0, ${ZC}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${nC}}\n`:""}${CC.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${zC.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${zC.renderOffset});\n}\n`:""}`
    }
    const KZ = "bloxdSpOwnTexture";

    function YZ(CC) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${CC.texture}) - 1u)))`
    }
    const dZ = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${oz.f.map((CC=>{let[zC,ZC]=CC;return`\tbloxdSpOut.${zC} = (bloxdSpWord & ${ZC}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function mZ(CC) {
      return `bloxdSpFlags(${CC})`
    }
    const HZ = `${ez.n}.eyePosition`;

    function EZ(CC, zC, ZC, QC, wC) {
      const bC = CC.indexOf(zC);
      if (bC < 0 || CC.indexOf(zC, bC + 1) >= 0) throw new Error(`Lite's ${wC} program changed at the shader pack ${QC} hook: ${bC<0?"no":"more than one"} anchor (lite/${wC}ShaderPack.ts)`);
      return CC.slice(0, bC) + ZC + CC.slice(bC + zC.length)
    }

    function lZ(CC) {
      return CC.sunShadow || CC.airShadow
    }

    function XZ(CC, zC) {
      return zC && lZ(CC)
    }
    const cZ = {
      group: ez.g,
      ...ez.w
    };

    function uZ(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!lZ(CC)) return "";
      if (zC) {
        const zC = cZ,
          wC = "trace" === ZC || "lit" === ZC;
        let bC = "";
        CC.sunShadow && (bC = wC ? `${JZ(zC,!0,"lit"===ZC)}${QC=zC,`@group(${QC.group}) @binding(${QC.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${QC.group}) @binding(${QC.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(CC, zC, ZC) {
          const QC = `@group(${CC}) @binding(${zC}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return ZC ? `${QC}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${eZ}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((CC=>`\t{\n\t\tlet o = vec2i(${CC});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : QC
        }(zC.group, ez.x, "maskEdge" === ZC));
        const nC = {
          shadowDirection: `${ez.n}.shadowDirection`,
          renderOffset: `${ez.n}.renderOffset`,
          eyePosition: `${ez.n}.eyePosition`
        };
        return `${xZ(zC)}${bC}${function(CC){const[zC,ZC,QC]=AZ.q;return`@group(${CC.group}) @binding(${CC.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${CC.group}) @binding(${CC.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${zC}.0, ${ZC}.0, ${QC}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(zC)}${hZ(CC,nC,ZC)}`
      }
      var QC;
      return `${CC.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${CC.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function rZ(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!zC) return "";
      const bC = (nC = "fragmentInputs.vPositionW", fC = CC.sunShadow ? {
        normal: ZC,
        flags: QC
      } : null, `\n\tbloxdSpShadowPosition = ${nC};\n${fC?`\tbloxdSpShadowNormal = normalize(${fC.normal});\n\tbloxdSpShadowEmissive = (${fC.flags} & ${oz.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${fC.flags} & ${oz.i}u) != 0u;\n`:""}`);
      var nC, fC;
      return CC.sunShadow && ("mask" === wC || "maskEdge" === wC) ? `${bC}${oC="fragmentInputs.position",qC="maskEdge"===wC,`\n\tbloxdSpShadowPixel = vec2i(${oC}.xy);\n${qC?`\tbloxdSpShadowZ = ${oC}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${oC}.z), dpdy(${oC}.z));\n`:""}`}` : bC;
      var oC, qC
    }
    const sZ = "bloxdSpTextureRotation",
      TZ = "bloxdSpTextureLayers",
      aZ = `@group(${ez.g}) @binding(${ez.A}) var<storage, read> ${TZ}: array<u32>;\n`;

    function tZ(CC) {
      return `\tvertexOutputs.vPackTexture = ${TZ}[min(u32(${CC}), arrayLength(&${TZ}) - 1u)];\n`
    }

    function DZ(CC) {
      return void 0 !== CC.uv
    }

    function jZ(CC) {
      if (!CC) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (DZ(CC)) return function(CC) {
        const {
          texture: zC,
          cells: ZC,
          layers: QC
        } = CC, wC = `textureDimensions(${zC}, bloxdSpLevel)`, bC = ZC ? `max(vec2u(vec2f(${wC}) / ${ZC}), vec2u(1u))` : wC, nC = ZC ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${bC};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${ZC}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${ZC}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${zC}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${wC} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${bC};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${zC}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let fC;
        if (ZC)
          if (1 === QC.length) fC = `\treturn bloxdSpOwnTexel(${QC[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const CC = QC.length - 1;
            fC = `\tvar bloxdSpColour = bloxdSpOwnTexel(${QC[CC]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let zC = CC - 1; zC >= 0; zC--) fC += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${QC[zC]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            fC += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else fC = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${CC.id?`var<private> ${KZ}: u32;\n`:""}${nC}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${YZ(CC)};\n\treturn ${bC};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${CC.id?KZ:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${YZ(CC)};\n${fC}}\n`
      }(CC);
      const zC = CC,
        ZC = CC => {
          const ZC = CC > 0 ? `bloxdSpLayer - ${zC.layers*CC}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${CC}, ${zC.sampler}, bloxdSpTurned, ${ZC}, round(bloxdSpMipLevel));`
        };
      let QC = "";
      for (let bC = 0; bC < zC.count - 1; bC++) QC += `\tif (bloxdSpLayer < ${zC.layers*(bC+1)}u) {\n\t\t${ZC(bC)}\n\t}\n`;
      const wC = zC.frame ? `${zC.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${sZ}: u32;\n${aZ}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${sZ} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${sZ} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${sZ} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${wC}${QC}\t${ZC(zC.count-1)}\n}\n`
    }

    function yZ(CC, zC, ZC) {
      return !!CC.surface && "bloxdDefaultSurface" !== CC.surface && function(CC, zC) {
        return "liquid" === zC || !CC
      }(zC, ZC)
    }

    function LZ(CC, zC) {
      return CC.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${zC.vertexLocalPosition}, ${mZ(zC.vertexFlags)});\n\t\tlet bloxdSpVertex = ${CC.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function UZ(CC, zC, ZC, QC, wC) {
      if (!CC.surface) return "";
      const bC = (CC, zC) => `\n\tlet bloxdSpTexelUV = ${CC};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${zC}) - 1u));`;
      let nC = "",
        fC = "0u, 0u, vec2f(0.0), 0.0";
      const oC = QC && DZ(QC) ? QC : null,
        qC = QC && !DZ(QC) ? QC : null;
      if (oC) {
        nC = `${oC.id?`\n\tlet bloxdSpTexture = ${oC.id};\n\t${KZ} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${oC.uv};${bC(function(CC,zC){var ZC;return`${null!==(ZC=CC.levelUv)&&void 0!==ZC?ZC:CC.cells?`${zC} / ${CC.cells}`:zC} * vec2f(textureDimensions(${CC.texture}))`}(oC,"bloxdSpUv"),oC.texture)}`, fC = (oC.id ? `${KZ}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else qC && (nC = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${sZ} = bloxdSpTexture >> 16u;${bC(`fragmentInputs.vMainUV1 * ${(0,Iz.vb)(qC.width)}`,"textureAtlas0")}`, fC = `bloxdSpTexture & 0xffffu, ${sZ}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const FC = wC.overlayColour,
        WC = FC ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        NC = "bloxdDefaultSurface" !== CC.surface || FC ? `\n\tbaseColor = vec4f(${WC}, baseColor.a);` : "",
        MC = yZ(CC, zC, ZC) ? `\n\t${wC.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${nC}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${wC.alpha}, ${wC.enchantTier}, ${wC.enchantColour}, ${wC.enchantSpeed}, ${null!==FC&&void 0!==FC?FC:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${wC.normal}, ${wC.localPosition}, ${mZ(wC.flags)}, ${fC});\n\tlet bloxdSpSurface = ${CC.surface}(bloxdSpSurfaceIn);${NC}${MC}\n`
    }
    const BZ = "bloxdSpLightIn";

    function OZ(CC, zC, ZC, QC) {
      if (!CC.light) return "";
      const wC = zC ? `${Iz.l}.rgb, ${Iz.l}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Iz.k}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: bC,
          diffuse: nC,
          emissive: fC,
          ambient: oC,
          fogColour: qC,
          fogAlpha: FC,
          normal: WC
        } = QC;
      return `\tvar ${BZ} = BloxdLightIn(vec3f(0.0), ${ZC?bC:"0.0"}, ${nC}, ${fC}, ${oC}, ${wC}, ${qC}, ${FC}, fragmentInputs.vPositionW, ${WC}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${BZ}.litColour = bloxdLitColour(bloxdSpSurface, ${BZ});\n`
    }

    function kZ(CC) {
      return CC.light ? `\n\t{\n\t\tlet bloxdSpLight = ${CC.light}(bloxdSpSurface, ${BZ});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const VZ = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      CQ = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      zQ = "\treturn color;\n}",
      ZQ = {
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
    const QQ = Object.freeze({});

    function wQ(CC) {
      var zC;
      return !(null === (zC = (0, hz.g)(CC)) || void 0 === zC || !zC.sceneDepth)
    }

    function bQ(CC) {
      const zC = (0, hz.g)(CC);
      return !!zC && yZ(zC.hooks, zC.strict, zC.program)
    }

    function nQ(CC, zC, ZC, QC) {
      return EZ(CC, zC, ZC, QC, "terrain")
    }

    function fQ(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const bC = function(CC) {
          return (0, hz.d)(CC.packVariant, CC.liquid ? "liquid" : "terrain")
        }(CC),
        {
          hooks: nC
        } = bC,
        fC = XZ(bC, QC),
        oC = "edge" === wC ? "maskEdge" : "plain" === wC ? "mask" : "trace",
        qC = LZ(nC, ZQ);
      qC && (zC = nQ(zC, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${qC}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const FC = "atlas" === CC.texture ? {
          count: CC.atlasCount,
          layers: CC.atlasLayers,
          width: CC.tV,
          sampler: "atlasSampler",
          frame: CC.animated ? ZC : null
        } : null,
        WC = `${bC.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${rZ(bC,fC,ZQ.normal,ZQ.flags,oC)}${UZ(nC,bC.strict,bC.program,FC,ZQ)}`;
      WC && (zC = nQ(zC, VZ, `${VZ.slice(0,-1)}${WC}`, "surface"));
      const NC = kZ(nC);
      return NC && (zC = nQ(zC, CQ, `${OZ(nC,CC.lighting,CC.dirLightCount>0,ZQ)}${CQ}`, "light input"), zC = nQ(zC, zQ, `${NC.slice(1)}${zQ}`, "light")), `${(0,ez.E)()}${bC.sceneDepth?`@group(${ez.g}) @binding(${ez.u}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${HZ};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${uZ(bC,fC,oC)}${jZ(FC)}${dZ}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${bC.code}${zC}`
    }
    const oQ = JC.e.WGSL;

    function qQ(CC) {
      return void 0 !== CC.packVariant
    }
    const FQ = {
        aQC: 0,
        tQC: 4,
        DQC: 8,
        jQC: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      WQ = FQ.aoLevels + 4,
      NQ = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      MQ = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      gQ = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      SQ = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      pQ = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      PQ = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      GQ = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      RQ = 0,
      AQ = 3,
      xQ = 4,
      JQ = 5,
      IQ = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${iz.d}, ${iz.d}, corner == 0u || corner == 3u);\n\tlet dv = select(-${iz.d}, ${iz.d}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      iQ = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((CC=>vz.e>>CC&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const vQ = {
      ZN: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: CC => `animDataPerTex[${CC}]`
    };

    function eQ(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vQ;
      return `\n\tlet atlasIdxIn = ${CC};\n\tlet animTick = ${ZC.ZN};\n\tlet animTickStride = ${ZC.stride};\n\tlet numAnimTextures = ${ZC.count};\n\t${(0,IC.h)(JC.e.WGSL,ZC.perTexture)}\n\t${zC}animLayer;\n`
    }

    function hQ(CC) {
      const zC = (zC, ZC) => {
        const QC = zC > 0 ? `fragmentInputs.texAtlasIndex - ${CC.atlasLayers.toFixed(1)} * ${zC.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${ZC?"textureSampleLevel":"textureSample"}(textureAtlas${zC}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${QC}))${ZC?", atlasLod":""})`
      };
      if (1 === CC.atlasCount) return `baseColor = ${zC(0,!1)};`;
      let ZC = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Iz.vb)(CC.tV)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let QC = 0; QC < CC.atlasCount; QC++) {
        const wC = CC.atlasLayers * (QC + 1) - .5;
        ZC += `${QC>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Iz.vb)(wC)}) {\n\t\tbaseColor = ${zC(QC,!0)};\n\t}`
      }
      return ZC
    }

    function KQ(CC) {
      return `terrain-${CC.texture}${"atlas"===CC.texture?CC.atlasCount:""}${CC.animated?"-anim":""}${CC.alphaTest?"-test":""}${CC.lighting?"-lit":""}-dir${CC.dirLightCount}${CC.packed?"-packed":""}${qQ(CC)?`-sp${CC.packVariant}`:""}${CC.liquid?"-liquid":""}${CC.resting?"-rest":""}`
    }

    function YQ(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const QC = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const ZC = "none" !== CC.texture,
          QC = "atlas" === CC.texture,
          wC = CC.dirLightCount > 0,
          bC = qQ(CC);
        if (CC.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${CC.dirLightCount}`);
        let nC = 1,
          fC = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (QC) {
          CC.animated && (fC += `@group(2) @binding(${nC++}) var<storage, read> animDataPerTex: array<f32>;\n`), fC += `@group(2) @binding(${nC++}) var atlasSampler: sampler;\n`;
          for (let zC = 0; zC < CC.atlasCount; zC++) fC += `@group(2) @binding(${nC++}) var textureAtlas${zC}: texture_2d_array<f32>;\n`
        } else "single" === CC.texture && (fC += `@group(2) @binding(${nC++}) var diffuseSamplerSampler: sampler;\n`, fC += `@group(2) @binding(${nC++}) var diffuseSampler: texture_2d<f32>;\n`);
        const oC = function(CC) {
            const zC = GQ,
              ZC = "none" !== CC.texture,
              QC = "atlas" === CC.texture,
              wC = qQ(CC);
            return CC.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${ZC?"uv: vec2f,":""}\n\t${QC?"texAtlasIndices: f32,":""}\n\t${CC.lighting?"aPackedLightLevels: f32,":""}\n\t${wC?"blockFlagWords: vec2u,":""}\n}\n${IQ}\n${iQ}\n${"single"===CC.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${ZC?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===CC.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${QC?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${CC.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${wC?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${zC.position}) position: vec3f,\n\t@location(${zC.normal}) normal: vec4f,\n\t@location(${zC.color}) color: vec4f,\n\t${ZC?`@location(${zC.uv}) uv: vec2f,`:""}\n\t${CC.lighting?`@location(${zC.packedLight}) aPackedLightLevels: f32,`:""}\n\t${wC?`@location(${zC.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(CC),
          qC = `\n${SQ}\n${MQ}\n${gQ}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${fC}\n${UC}\n${oC.declarations}\nstruct Varyings {\n\t${"none"===zC?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${CC.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${wC?"@location(5) vTerrainLambert: f32,":""}\n\t${ZC?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${QC?"@location(7) texAtlasIndex: f32,":""}\n\t${CC.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${bC?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${bC&&QC?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${CC.resting?"":(0,Iz.r)(oQ)}\n${PQ}\n\n@vertex\nfn mainVertex(${oC.parameter}) -> Varyings {\n\t${oC.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${bC?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${oz.c.placed}u;`:""}\n\t${bC&&QC?tZ("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${CC.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${ZC?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${QC?function(CC){return CC?eQ("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(CC.animated):""}\n\t${"single"===CC.texture&&CC.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Iz.eb)(oQ)}\n\t${(0,Iz.G)(oQ,CC.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${CC.resting?"":pQ}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${QC?hQ(CC):""}\n\t${"single"===CC.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${ZC?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${CC.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${wC?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${LC}));\n\t${qQ(CC)?(0,Iz.rb)(JC.e.WGSL):(0,Iz.S)(oQ)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          FC = new Set;
        CC.lighting && FC.add("BLOXD_LIGHTING");
        wC && FC.add("BLOXD_TERRAIN_DIRECTIONAL");
        return Az(qC, new Map([...FC].map((CC => [CC, !0]))))
      }(CC, ZC);
      if (!qQ(CC)) return QC;
      const wC = fQ(CC, QC, eQ, zC, ZC);
      return "none" === ZC ? wC : `${wC}${function(CC){const zC="none"!==CC.texture&&CC.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${CC.resting?"":pQ}\n\t${CC.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${zC&&"atlas"===CC.texture?hQ(CC):""}\n\t${zC&&"single"===CC.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${zC?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${oz.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(CC)}`
    }
    const dQ = new Map([
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

    function mQ(CC, zC) {
      const ZC = new Map;
      let QC = 0;
      const wC = [],
        bC = [],
        nC = [];
      for (const qC of zC) {
        var fC, oC;
        const zC = null !== (fC = qC.type.trim().split(/\s+/).pop()) && void 0 !== fC ? fC : qC.type,
          FC = dQ.get(zC);
        if (!FC) throw new Error(`Lite: no uniform layout for ${qC.name}: ${qC.type}`);
        const WC = null !== (oC = qC.arraySize) && void 0 !== oC ? oC : 0,
          NC = WC ? 4 : FC.align;
        QC = Math.ceil(QC / NC) * NC;
        const MC = WC ? 4 * Math.ceil(FC.floats / 4) : FC.floats;
        if (ZC.set(qC.name, {
            offset: QC,
            floats: FC.floats,
            arraySize: WC,
            stride: MC
          }), WC && FC.floats <= 2) {
          const zC = `${CC}_${nC.length}_strided`;
          bC.push(`struct ${zC} {\n\t@size(16) el: ${FC.wgsl},\n}`), nC.push(qC.name), wC.push(`\t@align(16) ${qC.name}: array<${zC}, ${WC}>,`)
        } else WC ? wC.push(`\t@align(16) ${qC.name}: array<${FC.wgsl}, ${WC}>,`) : wC.push(`\t${qC.name}: ${FC.wgsl},`);
        QC += WC ? MC * WC : FC.floats
      }
      return {
        slots: ZC,
        floats: Math.max(4, 4 * Math.ceil(QC / 4)),
        wgsl: `${bC.join("\n")}\nstruct ${CC} {\n${wC.join("\n")}\n}\n`,
        stridedArrays: nC
      }
    }
    const HQ = [{
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
      EQ = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      lQ = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function XQ(CC, zC) {
      return `#if defined(${CC}) && ${CC}DIRECTUV == 0\nvarying v${zC}UV: vec2f;\n#endif`
    }

    function cQ(CC, zC, ZC) {
      return `#if defined(${CC}) && ${CC}DIRECTUV == 0\nif (uniforms.v${zC}Infos.x==0.)\n{vertexOutputs.v${zC}UV= (uniforms.${ZC}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${zC}UV= (uniforms.${ZC}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function uQ(CC, zC, ZC) {
      return `#ifdef ${CC}\n#if ${CC}DIRECTUV == 1\n#define v${zC}UV vMainUV1\n#elif ${CC}DIRECTUV == 2\n#define v${zC}UV vMainUV2\n#else\nvarying v${zC}UV: vec2f;\n#endif\nvar ${ZC}SamplerSampler: sampler;\nvar ${ZC}Sampler: texture_2d<f32>;\n#endif`
    }
    const rQ = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      sQ = 256,
      TQ = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      aQ = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      tQ = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      DQ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      jQ = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      yQ = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      LQ = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      UQ = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${aQ}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${XQ("OPACITY","Opacity")}\n${XQ("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${LQ}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${tQ}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${cQ("OPACITY","Opacity","opacity")}\n${cQ("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${DQ}\n#define CUSTOM_VERTEX_MAIN_END\n${jQ}\n}\n`;
    const BQ = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${uQ("OPACITY","Opacity","opacity")}\n${uQ("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${LQ}\n${yQ}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((CC,zC)=>function(CC){const zC=`
    frame.lights[LITE_LIGHT$ {
        CC
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      CC
    }\
    nvar diffuse$ {
      CC
    }: vec4f = $ {
      zC
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      CC
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      zC
    }.vLightData, diffuse$ {
      CC
    }.rgb, $ {
      zC
    }.vLightSpecular.rgb, diffuse$ {
      CC
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(zC))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, OQ = /^([gimus]+)!/, kQ = new Set;

    function VQ(CC) {
      kQ.has(CC) || (kQ.add(CC), console.warn(`Lite: no place for plugin code at ${CC} in the standard shader: it is left out`))
    }

    function Cw(CC, zC) {
      let ZC = CC;
      const QC = new Map;
      for (const [bC, nC] of zC) {
        var wC;
        QC.set(bC, `${null!==(wC=QC.get(bC))&&void 0!==wC?wC:""}${nC}\n`)
      }
      for (const [bC, nC] of QC) {
        if (!bC.startsWith("!")) {
          const CC = `#define ${bC}`;
          if (!ZC.includes(CC)) {
            VQ(bC);
            continue
          }
          ZC = ZC.replace(CC, (() => `\n${nC}\n${CC}`));
          continue
        }
        let CC = bC.substring(1),
          zC = "g";
        if (CC.startsWith("!")) zC = "", CC = CC.substring(1);
        else {
          const ZC = OQ.exec(CC);
          ZC && (zC = ZC[1], CC = CC.substring(zC.length + 1))
        }
        const QC = new RegExp(CC, zC.includes("g") ? zC : `${zC}g`);
        let wC = QC.exec(ZC);
        for (wC || VQ(bC); wC;) {
          const CC = wC,
            zC = nC.replace(/\$(\d+)/g, ((zC, ZC) => Number(ZC) < CC.length ? CC[Number(ZC)] : ""));
          ZC = ZC.substring(0, CC.index) + zC + ZC.substring(CC.index + CC[0].length), QC.lastIndex = CC.index + zC.length, wC = QC.exec(ZC)
        }
      }
      return ZC
    }
    const zw = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Zw = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      Qw = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function ww(CC) {
      const zC = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let ZC = CC.replace(zw, ((CC, ZC, QC, wC, bC, nC) => ("attribute" === ZC ? zC.attributes.push({
        name: bC,
        type: nC
      }) : void 0 === ZC ? zC.varyings.push({
        name: bC,
        type: nC,
        interpolation: nw(nC, QC, wC)
      }) : zC.uniforms.push({
        name: bC,
        type: bw(nC)
      }), "")));
      return ZC = ZC.replace(Zw, ((CC, ZC) => (zC.samplers.add(ZC), ""))), ZC = ZC.replace(Qw, ((CC, ZC, QC) => (zC.textures.push({
        name: ZC,
        type: QC
      }), ""))), zC.body = ZC, zC
    }

    function bw(CC) {
      const zC = CC.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        ZC = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(zC);
      if (!ZC) throw new Error(`Lite: unsupported uniform type ${CC}`);
      return ZC
    }

    function nw(CC, zC, ZC) {
      return void 0 === zC && void 0 === ZC ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(CC.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === zC ? "@interpolate(flat) " : `@interpolate(${null!==zC&&void 0!==zC?zC:"perspective"}, ${null!==ZC&&void 0!==ZC?ZC:"center"}) `
    }

    function fw(CC) {
      return Ww({
        defines: CC.defines,
        vertex: Cw(UQ, CC.vertexCode),
        fragment: Cw(BQ, CC.fragmentCode),
        members: [...HQ, ...CC.defines.has("OPACITY") ? EQ : [], ...CC.defines.has("EMISSIVE") ? lQ : [], ...CC.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function ow(CC) {
      const zC = CC.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (zC === CC) throw new Error("Lite: fragment main has no return");
      return zC
    }
    const qw = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${aQ}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${tQ}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${DQ}\n${jQ}\n}\n`,
      Fw = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${yQ}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Ww(CC) {
      const zC = CC.defines,
        ZC = ww(Az(CC.vertex, zC)),
        QC = ww(Az(CC.fragment, zC)),
        wC = new Map;
      for (const RC of [...ZC.varyings, ...QC.varyings]) wC.has(RC.name) || wC.set(RC.name, RC);
      const bC = [...wC.values()].map(((CC, zC) => `\t@location(${zC}) ${CC.interpolation}${CC.name}: ${CC.type},`)),
        nC = [...CC.members];
      for (const RC of [...ZC.uniforms, ...QC.uniforms]) nC.some((CC => CC.name === RC.name)) || nC.push(RC);
      const fC = mQ(CC.structName, nC),
        oC = [],
        qC = [];
      let FC = 1;
      const WC = new Set;
      for (const RC of [...ZC.textures, ...QC.textures]) {
        if (WC.has(RC.name)) continue;
        WC.add(RC.name);
        const CC = `${RC.name}Sampler`,
          zC = FC++,
          ZC = FC++,
          QC = RC.type.startsWith("texture_2d_array") ? "2d-array" : RC.type.startsWith("texture_cube") ? "cube" : "2d";
        oC.push({
          name: RC.name,
          binding: zC,
          samplerBinding: ZC,
          dimension: QC
        }), qC.push(`@group(2) @binding(${zC}) var ${RC.name}: ${RC.type};`), qC.push(`@group(2) @binding(${ZC}) var ${CC}: sampler;`)
      }
      for (const RC of [...ZC.samplers, ...QC.samplers])
        if (!WC.has(RC.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${RC} has no texture`);
      const NC = [SQ, TQ, fC.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${CC.structName};`, ...qC].join("\n"),
        MC = ZC.attributes,
        gC = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...ZC.attributes.map(((CC, zC) => `\t@location(${zC}) ${CC.name}: ${CC.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        SC = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...bC, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        pC = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...QC.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...bC, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", UC, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${LC}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        PC = CC => {
          for (const zC of fC.stridedArrays) CC = CC.replace(new RegExp(`\\b${zC}\\s*\\[(.*?)\\]`, "g"), `${zC}[$1].el`);
          return CC
        };
      return {
        vertex: `${NC}\n${gC}\n${SC}\n${PC(ZC.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${NC}\n${pC}\n${ow((GC=PC(QC.body),GC.includes("fragmentInputs.position")?GC.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):GC))}`,
        attributes: MC,
        material: fC,
        textures: oC
      };
      var GC
    }
    const Nw = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      Mw = CC => ({
        name: CC,
        type: "vec3"
      }),
      gw = CC => ({
        name: CC,
        type: "float"
      }),
      Sw = mQ("EarthSkyUniforms", [Mw("viewFrom"), gw("exposureScale"), Mw("zenithOffset"), gw("fogOn"), Mw("up"), gw("ditherOn"), Mw("sun"), gw("turbidity"), Mw("tint"), gw("rayleigh"), Mw("sunDir"), gw("mieStrength"), Mw("inScatterR"), gw("mieFocus"), Mw("inScatterM"), gw("sunE"), Mw("extinctionBeta"), gw("sunsetMix"), gw("mieScale"), gw("mieBase"), gw("mieSlope"), gw("sunDiscE"), gw("exposure")]),
      pw = `${SQ}\n${TQ}\n${Sw.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      Pw = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Nw.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Gw = `\n${UC}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(pz).map((CC=>{let[zC,ZC]=CC;return`const TONE_${zC}: f32 = ${ZC};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${Pz};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${LC}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var Rw = ZC(36961);
    const Aw = new Rw.Eg,
      xw = new Rw.Eg,
      Jw = new Rw.Quaternion,
      Iw = new Float64Array(3),
      iw = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      vw = new Float64Array(16);

    function ew(CC, zC, ZC) {
      const QC = ZC.worldMatrix;
      var wC;
      CC.updateFloat3("viewFrom", QC[12], QC[13], QC[14]), CC.updateFloatsFrom("zenithOffset", zC.cameraOffset, 0, 3), CC.updateFloatsFrom("up", zC.up, 0, 3), zC.luminance > 0 && (CC.updateFloat("exposure", zC.luminance), CC.updateFloat("exposureScale", (wC = zC.luminance, Math.log2(2 / Math.pow(wC, 4))))), CC.updateFloat("turbidity", zC.turbidity), CC.updateFloat("rayleigh", zC.rayleigh), CC.updateFloat("mieStrength", zC.mieCoefficient), CC.updateFloat("mieFocus", zC.mieDirectionalG), CC.updateFloatsFrom("tint", zC.tint, 0, 3), CC.updateFloat("fogOn", zC.fog && ZC.fogEnabled && 0 !== ZC.fogMode ? 1 : 0), CC.updateFloat("ditherOn", zC.dithering ? 1 : 0);
      const bC = zC.sunPosition;
      if (Aw.set(bC[0], bC[1], bC[2]), !zC.useSunPosition) {
        const CC = Math.PI * (zC.inclination - .5),
          ZC = 2 * Math.PI * (zC.azimuth - .5);
        Aw.set(zC.distance * Math.cos(ZC) * Math.cos(CC), zC.distance * Math.sin(-CC), zC.distance * Math.sin(ZC) * Math.cos(CC)), Rw.Quaternion.FromUnitVectorsToRef(Rw.Eg.UpReadOnly, xw.set(zC.up[0], zC.up[1], zC.up[2]), Jw), Aw.rotateByQuaternionToRef(Jw, Aw)
      }
      CC.updateVector3("sun", Aw), Iw[0] = Aw.x, Iw[1] = Aw.y, Iw[2] = Aw.z;
      const nC = Sz(zC, Iw, iw);
      CC.updateFloatsFrom("sunDir", nC.sunDir, 0, 3), CC.updateFloat("sunE", nC.sunE), CC.updateFloatsFrom("inScatterR", nC.inScatterR, 0, 3), CC.updateFloatsFrom("inScatterM", nC.inScatterM, 0, 3), CC.updateFloatsFrom("extinctionBeta", nC.extinctionBeta, 0, 3), CC.updateFloat("sunsetMix", nC.sunsetMix), CC.updateFloat("sunDiscE", nC.sunDiscE), CC.updateFloat("mieScale", nC.mieScale), CC.updateFloat("mieBase", nC.mieBase), CC.updateFloat("mieSlope", nC.mieSlope)
    }

    function hw(CC, zC) {
      const ZC = vw;
      ZC[0] = zC.far, ZC[5] = zC.far, ZC[10] = zC.far, ZC[15] = 1;
      const QC = CC.infiniteDistance;
      for (let wC = 0; wC < 3; wC++) ZC[12 + wC] = CC.position[wC] + (QC ? zC.worldMatrix[12 + wC] : 0);
      return vw
    }
    var Kw = ZC(38548);

    function Yw(CC) {
      return Math.max(4, 4 * Math.ceil(CC / 4))
    }

    function dw(CC, zC, ZC, QC) {
      const wC = CC.createBuffer({
        label: QC,
        size: Yw(zC.byteLength),
        usage: ZC,
        mappedAtCreation: !0
      });
      return new Uint8Array(wC.getMappedRange(), 0, zC.byteLength).set(new Uint8Array(zC.buffer, zC.byteOffset, zC.byteLength)), wC.unmap(), wC
    }

    function mw(CC, zC) {
      return Math.floor(Math.log2(Math.max(CC, zC))) + 1
    }

    function Hw(CC, zC, ZC, QC, wC, bC) {
      const nC = CC.createTexture({
          label: bC,
          size: {
            width: ZC,
            height: QC,
            depthOrArrayLayers: wC
          },
          format: "rgba8unorm",
          mipLevelCount: mw(ZC, QC),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        fC = (zC, ZC, QC, bC) => {
          CC.queue.writeTexture({
            texture: nC,
            mipLevel: ZC
          }, zC, {
            bytesPerRow: 4 * QC,
            rowsPerImage: bC
          }, {
            width: QC,
            height: bC,
            depthOrArrayLayers: wC
          })
        };
      fC(zC, 0, ZC, QC);
      let oC = 1;
      for (const qC of function*(CC, zC, ZC, QC) {
          let wC = CC,
            bC = zC,
            nC = ZC;
          for (; bC > 1 || nC > 1;) {
            const CC = Math.max(1, bC >> 1),
              zC = Math.max(1, nC >> 1),
              ZC = new Uint8Array(CC * zC * QC * 4),
              fC = 4 * bC;
            let oC = 0;
            for (let qC = 0; qC < QC; qC++) {
              const QC = qC * fC * nC;
              for (let qC = 0; qC < zC; qC++) {
                const zC = QC + Math.min(2 * qC, nC - 1) * fC,
                  FC = QC + Math.min(2 * qC + 1, nC - 1) * fC;
                for (let QC = 0; QC < CC; QC++) {
                  const CC = 4 * Math.min(2 * QC, bC - 1),
                    nC = 4 * Math.min(2 * QC + 1, bC - 1);
                  for (let QC = 0; QC < 4; QC++) ZC[oC++] = wC[zC + CC + QC] + wC[zC + nC + QC] + wC[FC + CC + QC] + wC[FC + nC + QC] + 2 >> 2
                }
              }
            }
            yield {
              data: ZC,
              width: CC,
              height: zC
            }, wC = ZC, bC = CC, nC = zC
          }
        }(zC, ZC, QC, wC)) fC(qC.data, oC++, qC.width, qC.height);
      return nC
    }
    const Ew = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function lw(CC) {
      if (CC.startsWith("data:")) {
        const zC = CC.search(/[;,]/);
        return `data:${zC>5?CC.slice(5,zC):""} URL of ${CC.length} characters`
      }
      return CC.length > 80 ? `${CC.slice(0,80)}...` : CC
    }
    async function Xw(CC) {
      const zC = await fetch(CC);
      if (!zC.ok) throw new Error(`${lw(CC)}: ${zC.status} ${zC.statusText}`);
      return createImageBitmap(await zC.blob(), Ew)
    }
    async function uw(CC) {
      const zC = await Xw(CC),
        ZC = new OffscreenCanvas(zC.width, zC.height),
        QC = ZC.getContext("2d", {
          willReadFrequently: !0
        });
      if (!QC) throw new Error("No 2D context to decode an image");
      QC.drawImage(zC, 0, 0);
      const {
        data: wC
      } = QC.getImageData(0, 0, zC.width, zC.height);
      return zC.close(), {
        pixels: new Uint8Array(wC.buffer, wC.byteOffset, wC.byteLength),
        width: ZC.width,
        height: ZC.height
      }
    }
    const rw = new WeakMap;

    function sw(CC, zC, ZC, QC) {
      var wC;
      const bC = null !== (wC = rw.get(CC)) && void 0 !== wC ? wC : new Map;
      rw.set(CC, bC);
      let nC = bC.get(zC);
      return nC || (nC = (async wC => {
        const bC = null !== (wC = function(CC, zC) {
          const ZC = CC ? new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength) : null;
          return null !== ZC && void 0 !== ZC && ZC.byteLength && zC && ZC.byteLength % (zC * zC * 4) === 0 ? {
            pixels: ZC,
            layerWidth: zC,
            layers: ZC.byteLength / (zC * zC * 4)
          } : null
        }(ZC, QC)) && void 0 !== wC ? wC : await async function(CC) {
          const {
            pixels: zC,
            width: ZC
          } = await uw(CC);
          return {
            pixels: zC,
            layerWidth: ZC,
            layers: zC.byteLength / (ZC * ZC * 4)
          }
        }(zC), {
          layerWidth: nC,
          layers: fC
        } = bC;
        return {
          texture: Hw(CC, bC.pixels, nC, nC, fC, `atlas-${zC}`),
          layerWidth: nC,
          layers: fC
        }
      })(), bC.set(zC, nC), nC.catch((() => {
        bC.delete(zC)
      }))), nC
    }
    const Tw = new Map([
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
      aw = new Map([
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

    function tw(CC) {
      for (const zC of (0, Kw.i)(CC))
        if (!aw.has((0, Kw.h)(zC))) return !1;
      return !0
    }

    function Dw(CC) {
      const zC = aw.get(CC);
      if (!zC) return null;
      const [ZC, QC, wC] = zC;
      return {
        srcFactor: Tw.get(ZC),
        dstFactor: Tw.get(QC),
        operation: wC
      }
    }
    let jw = null;

    function yw(CC) {
      jw = CC
    }

    function Lw(CC, zC, ZC) {
      var QC;
      null === (QC = jw) || void 0 === QC || QC(CC, zC, ZC, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class Uw {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(CC, zC, ZC, QC, wC) {
        ZC !== this.pipeline && (CC.setPipeline(ZC), this.pipeline = ZC), CC.setBindGroup(1, QC, [wC]);
        const bC = zC.material.bindGroup;
        bC !== this.materialGroup && (CC.setBindGroup(2, bC), this.materialGroup = bC);
        const nC = zC.program.packGroup;
        nC && nC !== this.packGroup && (CC.setBindGroup(ez.g, nC), this.packGroup = nC);
        const {
          vertexBuffers: fC,
          vertexOffsets: oC
        } = this;
        for (let qC = 0; qC < zC.vertexBuffers.length; qC++) fC[qC] === zC.vertexBuffers[qC] && oC[qC] === zC.vertexOffsets[qC] || (CC.setVertexBuffer(qC, zC.vertexBuffers[qC], zC.vertexOffsets[qC]), fC[qC] = zC.vertexBuffers[qC], oC[qC] = zC.vertexOffsets[qC]);
        zC.indexBuffer && zC.indexBuffer !== this.indexBuffer && (CC.setIndexBuffer(zC.indexBuffer, zC.indexFormat), this.indexBuffer = zC.indexBuffer)
      }
    }
    class Bw {
      constructor(CC, zC, ZC, QC) {
        this.modelMeshes = CC, this.b_ = zC, this.maker = ZC, this.warnOnce = QC, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (CC, zC) => {
          (zC < -1 || zC > 1) && this.warnOnce(`group:${zC}`, `rendering group ${zC} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(CC) {
        this.collectGroup(CC, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(CC, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(CC, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.b_.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(Ow), this.transparentDraws.sort(kw)
      }
      collectGroup(CC, zC, ZC, QC, wC) {
        const bC = this.modelMeshes.group(zC),
          nC = this.b_.group(zC),
          fC = 0 === zC ? null === nC || void 0 === nC ? void 0 : nC.opaque : void 0;
        this.collectList(CC, null === bC || void 0 === bC ? void 0 : bC.opaque, fC || null === nC || void 0 === nC ? void 0 : nC.opaque, zC, !1, ZC, wC), fC && (this.b_.drawn += this.maker.bundleDraws(CC, fC, zC)), this.collectList(CC, null === bC || void 0 === bC ? void 0 : bC.alphaTest, void 0, zC, !1, ZC, wC), this.collectList(CC, null === bC || void 0 === bC ? void 0 : bC.transparent, null === nC || void 0 === nC ? void 0 : nC.transparent, zC, !0, QC, wC)
      }
      collectList(CC, zC, ZC, QC, wC, bC, nC) {
        var fC;
        const oC = bC.length;
        zC && this.maker.pushDraws(CC, zC.units, zC.units.length, QC, wC, bC, zC.rows), ZC && (this.b_.drawn += this.maker.pushDraws(CC, ZC, ZC.length, QC, wC, bC));
        const qC = wC ? null === (fC = this.modelMeshes.group(QC)) || void 0 === fC ? void 0 : fC.text : void 0;
        qC && this.maker.pushDraws(CC, qC.units, qC.units.length, QC, !0, bC, qC.rows), nC && Vw(bC, oC)
      }
    }

    function Ow(CC, zC) {
      return CC.program.id - zC.program.id || CC.material.owner.uniqueId - zC.material.owner.uniqueId
    }

    function kw(CC, zC) {
      return CC.material.owner.uniqueId - zC.material.owner.uniqueId
    }

    function Vw(CC, zC) {
      for (let ZC = zC + 1; ZC < CC.length; ZC++) {
        const QC = CC[ZC];
        let wC = ZC - 1;
        for (; wC >= zC && kw(CC[wC], QC) > 0; wC--) CC[wC + 1] = CC[wC];
        CC[wC + 1] = QC
      }
    }
    const Cb = {};

    function zb(CC) {
      return CC.hasThinInstances ? "thin" : CC.yQC || CC._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Zb(CC, zC, ZC) {
      return CC ? (ZC._needUVs = !0, CC.optimizeUVAllocation && (0, hC.J)(CC.matrix) ? (ZC[`${zC}DIRECTUV`] = CC.uvSet + 1, ZC[`MAINUV${CC.uvSet+1}`] = !0) : ZC[`${zC}DIRECTUV`] = 0, !0) : (ZC[`${zC}DIRECTUV`] = 0, !1)
    }

    function Qb(CC) {
      const zC = new Map;
      for (const ZC in CC) {
        if (95 === ZC.charCodeAt(0)) continue;
        const QC = CC[ZC],
          wC = typeof QC;
        "number" === wC || "string" === wC ? zC.set(ZC, String(QC)) : QC && "function" !== wC && zC.set(ZC, !0)
      }
      return zC
    }

    function wb(CC) {
      const zC = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: ZC
        }
        of CC.features)
        for (const CC in ZC) zC[CC] = ZC[CC];
      return zC
    }

    function bb(CC) {
      const zC = CC.parts.geometry;
      return null !== zC && void 0 !== zC && zC.live ? zC : null
    }

    function nb(CC) {
      var zC;
      return null !== (zC = bb(CC)) && void 0 !== zC ? zC : Cb
    }
    class fb {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = CC, this.warnOnce = zC, this.programWithModel = ZC, this.packFailed = QC, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(CC, zC, ZC, QC, wC) {
        const bC = zC.owner;
        let nC = this.drawStates.get(zC);
        if (!nC) {
          const CC = zC.parts.materials[zC.range];
          if (!CC) return this.warnOnce("model", `${ZC.name} on ${bC.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          nC = {
            defines: wb(CC),
            model: CC,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: wC,
            groupId: QC,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(zC, nC)
        }
        if (this.programCurrent(nC, zC, wC, QC)) return nC.program;
        const {
          model: fC
        } = nC, oC = nb(zC), qC = this.instanceLayout(bC, wC), FC = this.definesBits(bC);
        if (!this.prepareModelDefines(CC, bC, fC, nC.defines, QC, wC)) return null;
        nC.instancing = wC, nC.groupId = QC, nC.modelVersion = fC.version, nC.geometry = oC, nC.instanceLayout = qC, nC.definesBits = FC;
        const WC = function(CC) {
          let zC = "";
          for (const [ZC, QC] of CC) zC += !0 === QC ? `${ZC};` : `${ZC}=${QC};`;
          return zC
        }(Qb(nC.defines));
        return WC === nC.definesKey && nC.packVariant === this.modelPackVariant && nC.program && !this.packFailed(nC.program) || (nC.definesKey = WC, nC.packVariant = this.modelPackVariant, nC.program = this.programWithModel(fC, nC.defines, WC)), nC.program
      }
      programCurrent(CC, zC, ZC, QC) {
        return null !== CC.program && !this.packFailed(CC.program) && CC.instancing === ZC && CC.groupId === QC && this.definesHold(CC, zC, ZC)
      }
      definesHold(CC, zC, ZC) {
        return CC.modelVersion === CC.model.version && CC.geometry === nb(zC) && CC.instanceLayout === this.instanceLayout(zC.owner, ZC) && CC.definesBits === this.definesBits(zC.owner) && CC.packVariant === this.modelPackVariant
      }
      modelPackKind(CC) {
        var zC;
        return 0 === this.modelPackVariant ? null : null !== (zC = (0, vC.x)(CC, iC.f.name)) && void 0 !== zC && zC.active ? "placed" : CC.item ? "item" : CC.lifeform ? "lifeform" : CC.box ? "box" : null
      }
      instanceLayout(CC, zC) {
        var ZC, QC, wC;
        return "thin" === zC ? null !== (wC = this.resources.T6.get(CC)) && void 0 !== wC ? wC : null : "instanced" === zC && null !== (ZC = null === (QC = CC._userInstancedBuffersStorage) || void 0 === QC ? void 0 : QC.interleavedKinds) && void 0 !== ZC ? ZC : null
      }
      definesBits(CC) {
        const zC = this.view;
        return (CC.visibility < 1 ? 1 : 0) | (CC.hasVertexAlpha ? 2 : 0) | (CC.applyFog ? 4 : 0) | (CC.useVertexColors ? 8 : 0) | (CC.nonUniformScaling ? 16 : 0) | (zC.fogEnabled && 0 !== zC.fogMode ? 32 : 0) | (zC.lightsEnabled ? 64 : 0) | zC.lightCount << 7
      }
      prepareLightDefines(CC, zC, ZC) {
        let QC = 0;
        if (this.view.lightsEnabled && !zC) {
          const zC = Math.min(ZC, 4);
          for (; QC < this.view.lightCount && (CC[`LIGHT${QC}`] = !0, CC[`LITE_LIGHT${QC}_SLOT`] = QC, QC++, CC._needNormals = !0, QC !== zC););
        }
        for (let wC = QC; wC < 4; wC++) CC[`LIGHT${wC}`] = !1, CC[`LITE_LIGHT${wC}_SLOT`] = void 0
      }
      prepareModelDefines(CC, zC, ZC, QC, wC, bC) {
        const {
          features: nC
        } = ZC;
        QC._needNormals = !1, QC._needUVs = !1;
        const fC = this.view;
        this.prepareLightDefines(QC, ZC.disableLighting, ZC.maxSimultaneousLights), QC.MAINUV1 = !1, QC.MAINUV2 = !1;
        const oC = ZC.diffuseTexture;
        oC ? (QC._needUVs = !0, QC.DIFFUSE = !0, oC.optimizeUVAllocation && (0, hC.J)(oC.matrix) ? (QC.DIFFUSEDIRECTUV = oC.uvSet + 1, QC[`MAINUV${oC.uvSet+1}`] = !0) : QC.DIFFUSEDIRECTUV = 0, oC.uvSet > 1 && this.warnOnce(`uvset:${ZC.name}`, `${ZC.name} samples UV set ${oC.uvSet+1}, which is not supported`)) : (QC.DIFFUSE = !1, QC.DIFFUSEDIRECTUV = 0);
        const qC = ZC.opacityTexture,
          FC = ZC.emissiveTexture;
        QC.OPACITY = Zb(qC, "OPACITY", QC), QC.OPACITYRGB = null !== qC && qC.getAlphaFromRGB, QC.EMISSIVE = Zb(FC, "EMISSIVE", QC), (qC && qC.uvSet > 1 || FC && FC.uvSet > 1) && this.warnOnce(`uvset:${ZC.name}`, `${ZC.name} samples a UV set past 2, which is not supported`);
        const WC = ZC.reflectionTexture,
          NC = null !== WC;
        if (NC) {
          if (!this.resources.boundTexture(WC)) return !1;
          QC._needNormals = !0
        }
        QC.REFLECTION = NC, QC.REFLECTIONMAP_3D = NC, QC.REFLECTIONMAP_SKYBOX = NC, QC.REFLECTIONMAP_OPPOSITEZ = NC && (CC.useRightHandedSystem ? !WC.invertZ : WC.invertZ), QC.ROUGHNESS = NC && ZC.roughness > 0, QC.REFLECTIONOVERALPHA = NC && ZC.useReflectionOverAlpha, QC.LITE_REFLECTION_LUMINANCE = NC && "cube" === WC.source.kind && WC.source.luminance, (zC.skeleton || zC.morphTargetManager) && this.warnOnce(`skin:${zC.name}`, `${zC.name} has bones or morph targets, which are not supported`), QC.FOG = ZC.fogEnabled && zC.applyFog && fC.fogEnabled && 0 !== fC.fogMode, QC.NONUNIFORMSCALING = zC.nonUniformScaling;
        const {
          visibility: MC,
          hasVertexAlpha: gC
        } = zC;
        QC.ALPHATEST = (0, vC.R)(ZC, MC, gC), QC.ALPHAFROMDIFFUSE = (0, vC.eb)(ZC), QC.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== ZC.transparencyMode, QC.ALPHABLEND = null === ZC.transparencyMode || (0, vC.Q)(ZC, MC, gC), QC.PREMULTIPLYALPHA = 7 === ZC.alphaMode || 8 === ZC.alphaMode, QC.EMISSIVEASILLUMINATION = ZC.useEmissiveAsIllumination, QC.LINKEMISSIVEWITHDIFFUSE = ZC.linkEmissiveWithDiffuse, QC.TWOSIDEDLIGHTING = !ZC.backFaceCulling && ZC.twoSidedLighting, QC.INSTANCES = "none" !== bC, QC.THIN_INSTANCES = "thin" === bC, QC.LITE_FRONT_LAYER = wC >= 1;
        for (const {
            feature: IC,
            state: iC,
            active: vC
          }
          of nC) {
          var SC, pC;
          if (vC) null === (SC = (pC = (0, Fz.l)(IC)).prepareDefinesBeforeAttributes) || void 0 === SC || SC.call(pC, iC, QC, CC, zC)
        }
        this.modelPackKind(ZC) && (QC._needNormals = !0), QC.NORMAL = QC._needNormals && zC.isVerticesDataPresent("normal"), QC.UV1 = QC._needUVs && zC.isVerticesDataPresent("uv"), QC.UV2 = QC._needUVs && zC.isVerticesDataPresent("uv2");
        const PC = zC.useVertexColors && zC.isVerticesDataPresent("color");
        QC.VERTEXCOLOR = PC, QC.VERTEXALPHA = zC.hasVertexAlpha && PC, QC.INSTANCESCOLOR = "none" !== bC && zC.isVerticesDataPresent("instanceColor");
        for (const {
            feature: IC,
            state: iC,
            active: vC
          }
          of nC) {
          var GC, RC;
          if (vC) null === (GC = (RC = (0, Fz.l)(IC)).prepareDefines) || void 0 === GC || GC.call(RC, iC, QC, CC, zC, ZC)
        }
        const AC = CC.mg();
        for (const {
            feature: IC,
            state: iC,
            active: vC
          }
          of nC) {
          var xC, JC;
          if (vC && !1 === (null === (xC = (JC = (0, Fz.l)(IC)).isReadyForSubMesh) || void 0 === xC ? void 0 : xC.call(JC, iC, QC, CC, AC))) return !1
        }
        return !0
      }
    }

    function ob(CC, zC, ZC) {
      return CC.codeVersion !== zC.version && function(CC, zC) {
        const ZC = [],
          QC = [];
        for (const {
            feature: NC,
            state: MC,
            active: gC
          }
          of zC.features) {
          var wC, bC, nC, fC;
          if (gC) qb(null === (wC = (bC = (0, Fz.l)(NC)).getCustomCode) || void 0 === wC ? void 0 : wC.call(bC, MC, "vertex", JC.e.WGSL), ZC), qb(null === (nC = (fC = (0, Fz.l)(NC)).getCustomCode) || void 0 === nC ? void 0 : nC.call(fC, MC, "fragment", JC.e.WGSL), QC)
        }
        const oC = [];
        for (const {
            feature: NC,
            state: MC
          }
          of zC.features) {
          var qC, FC;
          const CC = null === (qC = (FC = (0, Fz.l)(NC)).getUniforms) || void 0 === qC ? void 0 : qC.call(FC, MC, JC.e.WGSL);
          for (const zC of null !== (WC = null === CC || void 0 === CC ? void 0 : CC.ubo) && void 0 !== WC ? WC : []) {
            var WC;
            zC.size && zC.type && oC.push({
              name: zC.name,
              type: zC.type,
              arraySize: zC.arraySize
            })
          }
        }
        CC.vertexCode = ZC, CC.fragmentCode = QC, CC.pluginUniforms = oC, CC.codeKey = JSON.stringify([ZC, QC, oC]), CC.codeVersion = zC.version
      }(CC, zC), `${ZC}#${CC.codeKey}`
    }

    function qb(CC, zC) {
      if (CC)
        for (const ZC in CC) CC[ZC] && zC.push([ZC, CC[ZC]])
    }
    const Fb = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Wb {
      constructor(CC) {
        this.warnOnce = CC, this.states = new Map
      }
      renderState(CC, zC, ZC, QC) {
        var wC;
        let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          nC = null !== (wC = CC.sideOrientation) && void 0 !== wC ? wC : zC.sideOrientation;
        zC._getWorldMatrixDeterminant() < 0 && (nC = 0 === nC ? 1 : 0);
        const fC = "triangle-list" === bC,
          oC = ZC ? CC.alphaMode : 0,
          qC = (!ZC || (0 === oC || CC.forceDepthWrite)) && !CC.disableDepthWrite,
          FC = fC && CC.backFaceCulling ? CC.cullBackFaces ? "back" : "front" : "none",
          WC = fC && 0 !== nC ? "ccw" : "cw",
          NC = CC.depthFunction,
          MC = fC ? CC.zOffset : 0,
          gC = fC ? CC.zOffsetUnits : 0,
          SC = !CC.disableColorWrite;
        return QC && QC.alphaMode === oC && QC.depthWrite === qC && QC.depthFunction === NC && QC.cullMode === FC && QC.frontFace === WC && QC.zOffset === MC && QC.zOffsetUnits === gC && QC.colourWrite === SC && QC.topology === bC ? QC : this.stateFor(oC, qC, NC, FC, WC, MC, gC, SC, bC)
      }
      stateFor(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        const qC = `${CC}|${zC}|${ZC}|${QC}|${wC}|${bC}|${nC}|${fC}|${oC}`;
        let FC = this.states.get(qC);
        if (!FC) {
          var WC;
          const NC = CC ? Dw(CC) : null;
          CC && !NC && this.warnOnce(`alpha:${CC}`, `alpha mode ${CC} is not supported`), FC = {
            key: qC,
            alphaMode: CC,
            depthFunction: ZC,
            zOffset: bC,
            zOffsetUnits: nC,
            topology: oC,
            blend: NC,
            depthWrite: zC,
            depthCompare: ZC && null !== (WC = Fb.get(ZC)) && void 0 !== WC ? WC : null,
            cullMode: QC,
            frontFace: wC,
            depthBias: -nC,
            depthBiasSlopeScale: -bC,
            colourWrite: fC
          }, this.states.set(qC, FC)
        }
        return FC
      }
    }
    var Nb = ZC(37298);

    function Mb(CC) {
      if (!CC.frozen) return -1;
      let zC = CC.version;
      for (const {
          feature: ZC,
          state: QC,
          active: wC
        }
        of CC.features) {
        if (!wC || !ZC.bind) continue;
        const CC = (0, Fz.l)(ZC).uniformsVersion;
        if (!CC) return -1;
        zC += CC(QC)
      }
      return zC
    }
    class gb {
      constructor(CC, zC, ZC) {
        this.slots = CC, this.data = zC, this.textures = ZC, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(CC, zC) {
        this.write4(CC, zC, 0, 0, 0, 1)
      }
      updateFloat2(CC, zC, ZC) {
        this.write4(CC, zC, ZC, 0, 0, 2)
      }
      updateFloat3(CC, zC, ZC, QC) {
        this.write4(CC, zC, ZC, QC, 0, 3)
      }
      updateFloat4(CC, zC, ZC, QC, wC) {
        this.write4(CC, zC, ZC, QC, wC, 4)
      }
      updateVector3(CC, zC) {
        this.write4(CC, zC.x, zC.y, zC.z, 0, 3)
      }
      updateVector4(CC, zC) {
        this.write4(CC, zC.x, zC.y, zC.z, zC.w, 4)
      }
      updateColor3(CC, zC) {
        this.write4(CC, zC.r, zC.g, zC.b, 0, 3)
      }
      updateColor4(CC, zC, ZC) {
        this.write4(CC, zC.r, zC.g, zC.b, ZC, 4)
      }
      updateFloatsFrom(CC, zC, ZC, QC) {
        const wC = this.slots.get(CC);
        if (!wC) return;
        const bC = this.data,
          nC = wC.offset;
        for (let fC = 0; fC < QC; fC++) bC[nC + fC] = zC[ZC + fC]
      }
      updateFloat3TimesFloats(CC, zC, ZC, QC) {
        const wC = this.slots.get(CC);
        if (!wC) return;
        const bC = this.data,
          nC = wC.offset;
        bC[nC] = zC[ZC] * QC[0], bC[nC + 1] = zC[ZC + 1] * QC[1], bC[nC + 2] = zC[ZC + 2] * QC[2]
      }
      x_(CC, zC) {
        const ZC = this.slots.get(CC);
        ZC && this.data.set(zC.m, ZC.offset)
      }
      updateMatrixFloats(CC, zC) {
        const ZC = this.slots.get(CC);
        ZC && this.data.set(zC, ZC.offset)
      }
      updateFloatArray(CC, zC) {
        const ZC = this.slots.get(CC);
        if (!ZC) return;
        if (!ZC.arraySize || ZC.stride === ZC.floats) return void this.data.set(zC, ZC.offset);
        const QC = Math.min(zC.length, ZC.floats * ZC.arraySize);
        for (let wC = 0; wC < QC; wC++) this.data[ZC.offset + Math.floor(wC / ZC.floats) * ZC.stride + wC % ZC.floats] = zC[wC]
      }
      updateArray(CC, zC) {
        this.updateFloatArray(CC, zC)
      }
      setTexture(CC, zC) {
        this.textures.set(CC, zC), this.expected.delete(CC)
      }
      expectTexture(CC) {
        this.textures.set(CC, null), this.expected.add(CC)
      }
      write4(CC, zC, ZC, QC, wC, bC) {
        const nC = this.slots.get(CC);
        if (!nC) return;
        const fC = this.data,
          oC = nC.offset;
        fC[oC] = zC, bC > 1 && (fC[oC + 1] = ZC), bC > 2 && (fC[oC + 2] = QC), bC > 3 && (fC[oC + 3] = wC)
      }
    }

    function Sb(CC, zC) {
      const ZC = rQ,
        QC = Nb.e,
        wC = CC.lights,
        bC = Math.min(CC.lightCount, 8);
      for (let nC = 0; nC < bC; nC++) {
        const CC = ZC.lights + nC * ZC.lightStride,
          bC = nC * Nb.c;
        zC[CC] = wC[bC + QC.vector], zC[CC + 1] = wC[bC + QC.vector + 1], zC[CC + 2] = wC[bC + QC.vector + 2], zC[CC + 3] = wC[bC + QC.kind] === Nb.d.directional ? 1 : 0, zC[CC + 4] = wC[bC + QC.diffuse], zC[CC + 5] = wC[bC + QC.diffuse + 1], zC[CC + 6] = wC[bC + QC.diffuse + 2], zC[CC + 7] = wC[bC + QC.range], zC[CC + 8] = wC[bC + QC.specular], zC[CC + 9] = wC[bC + QC.specular + 1], zC[CC + 10] = wC[bC + QC.specular + 2], zC[CC + 11] = wC[bC + QC.range]
      }
      zC[ZC.fogInfos] = CC.fogMode, zC[ZC.fogInfos + 1] = CC.fogStart, zC[ZC.fogInfos + 2] = CC.fogEnd, zC[ZC.fogInfos + 3] = CC.fogDensity, zC[ZC.fogColour] = CC.fogColour[0], zC[ZC.fogColour + 1] = CC.fogColour[1], zC[ZC.fogColour + 2] = CC.fogColour[2], zC[ZC.outputHeight] = CC.renderHeight, zC[ZC.animTick] = CC.animTick, zC[ZC.timeMs] = CC.timeMs
    }
    class pb {
      constructor(CC) {
        this.instancesOf = CC
      }
      refreshModelUniforms(CC, zC, ZC, QC) {
        const wC = Mb(ZC);
        if (wC >= 0 && wC === zC.heldVersion && zC.textures.get("diffuseSampler") === ZC.diffuseTexture && zC.textures.get("reflectionCubeSampler") === ZC.reflectionTexture && zC.textures.get("opacitySampler") === ZC.opacityTexture && zC.textures.get("emissiveSampler") === ZC.emissiveTexture) return !0;
        if (wC < 0)
          for (const bC of this.instancesOf(ZC)) bC.heldVersion = -1;
        return this.writeModelUniforms(CC, zC, ZC, QC), zC.heldVersion = wC, !1
      }
      writeModelUniforms(CC, zC, ZC, QC) {
        const {
          ubo: wC
        } = zC, bC = ZC.diffuseTexture, nC = ZC.diffuseColor;
        wC.updateFloat4("vDiffuseColor", nC[0], nC[1], nC[2], ZC.alpha), bC && (wC.updateFloat2("vDiffuseInfos", bC.uvSet, bC.level), wC.updateMatrixFloats("diffuseMatrix", bC.matrix)), wC.updateFloat("alphaCutOff", ZC.alphaCutOff), wC.updateFloatsFrom("vEmissiveColor", ZC.emissiveColor, 0, 3), wC.updateFloat3TimesFloats("vAmbientColor", QC.ambientColour, 0, ZC.ambientColor);
        const fC = ZC.specularColor;
        wC.updateFloat4("vSpecularColor", fC[0], fC[1], fC[2], ZC.specularPower), wC.setTexture("diffuseSampler", bC);
        const oC = ZC.opacityTexture;
        oC && (wC.updateFloat2("vOpacityInfos", oC.uvSet, oC.level), wC.updateMatrixFloats("opacityMatrix", oC.matrix)), wC.setTexture("opacitySampler", oC);
        const qC = ZC.emissiveTexture;
        qC && (wC.updateFloat2("vEmissiveInfos", qC.uvSet, qC.level), wC.updateMatrixFloats("emissiveMatrix", qC.matrix)), wC.setTexture("emissiveSampler", qC);
        const FC = ZC.reflectionTexture;
        FC && wC.updateMatrixFloats("reflectionMatrix", FC.matrix), wC.updateFloat2("vReflectionInfos", FC ? FC.level * CC.iblIntensity : 0, ZC.roughness), wC.setTexture("reflectionCubeSampler", FC);
        const WC = CC.mg();
        for (const {
            feature: gC,
            state: SC,
            active: pC
          }
          of ZC.features) {
          var NC, MC;
          if (pC) null === (NC = (MC = (0, Fz.l)(gC)).bind) || void 0 === NC || NC.call(MC, SC, wC, CC, WC)
        }
      }
    }

    function Pb(CC) {
      const zC = CC.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(zC) ? "u32" : /i32|^vec\di$/.test(zC) ? "i32" : "f32"
    }

    function Gb(CC, zC) {
      const ZC = CC.getSize(),
        QC = Pb(zC),
        wC = CC => 4 === ZC ? `${CC}x4` : 2 === ZC ? `${CC}x2` : null;
      if ("f32" === QC) {
        if (5126 === CC.type) return 1 === ZC ? "float32" : ZC >= 2 && ZC <= 4 ? `float32x${ZC}` : null;
        if (!CC.normalized) return null;
        switch (CC.type) {
          case 5121:
            return wC("unorm8");
          case 5120:
            return wC("snorm8");
          case 5123:
            return wC("unorm16");
          case 5122:
            return wC("snorm16")
        }
        return null
      }
      const bC = "u32" === QC ? "uint" : "sint";
      switch (CC.type) {
        case 5125:
        case 5124:
          return 1 === ZC ? `${bC}32` : ZC <= 4 ? `${bC}32x${ZC}` : null;
        case 5121:
        case 5120:
          return wC(`${bC}8`);
        case 5123:
        case 5122:
          return wC(`${bC}16`)
      }
      return null
    }

    function Rb(CC) {
      var zC;
      const ZC = /(8|16|32)(?:x(\d))?$/.exec(CC);
      return ZC ? Number(ZC[1]) / 8 * Number(null !== (zC = ZC[2]) && void 0 !== zC ? zC : 1) : 4
    }
    class Ab {
      constructor(CC, zC, ZC) {
        this.resources = CC, this.limits = zC, this.warnOnce = ZC, this.layouts = new Map
      }
      resolveInputs(CC, zC, ZC, QC) {
        const wC = [],
          bC = ZC.program.attributes,
          nC = [];
        for (let FC = 0; FC < bC.length; FC++) {
          const ZC = bC[FC],
            fC = ZC.optional ? null : this.resources.vertexInput(CC, ZC.name, QC);
          if (!fC) {
            const CC = Pb(ZC.type),
              zC = "u32" === CC ? "uint32x4" : "i32" === CC ? "sint32x4" : "float32x4";
            nC.push(null);
            const QC = wC.find((CC => null === CC.data));
            QC ? QC.attributes.push({
              shaderLocation: FC,
              offset: 0,
              format: zC
            }) : wC.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: FC,
                offset: 0,
                format: zC
              }]
            });
            continue
          }
          const oC = fC.getBuffer();
          nC.push(fC);
          const qC = Gb(fC, ZC.type);
          if (!qC) return this.warnOnce(`format:${zC}:${ZC.name}`, `${zC}'s ${ZC.name} (type ${fC.type}, size ${fC.getSize()}) has no WebGPU vertex format`), null;
          const WC = fC.getIsInstanced() ? "instance" : "vertex",
            NC = fC.byteStride,
            MC = Rb(qC),
            gC = wC.find((CC => CC.data === oC && CC.stride === NC && CC.step === WC && fC.byteOffset >= CC.base && fC.byteOffset - CC.base + MC <= NC));
          gC ? gC.attributes.push({
            shaderLocation: FC,
            offset: fC.byteOffset - gC.base,
            format: qC
          }) : wC.push({
            data: oC,
            base: fC.byteOffset,
            stride: NC,
            step: WC,
            attributes: [{
              shaderLocation: FC,
              offset: 0,
              format: qC
            }]
          })
        }
        if (wC.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${zC}`, `${zC} needs ${wC.length} vertex buffers`), null;
        let fC = "";
        for (const FC of wC) {
          fC += `${FC.stride}${"instance"===FC.step?"i":"v"}`;
          for (const CC of FC.attributes) fC += `,${CC.shaderLocation}:${CC.offset}:${CC.format}`;
          fC += ";"
        }
        let oC = this.layouts.get(fC);
        oC || (oC = {
          key: fC,
          buffers: wC.map((CC => ({
            arrayStride: CC.stride,
            stepMode: CC.step,
            attributes: CC.attributes
          }))),
          instanceEnds: wC.map((CC => {
            let zC = -1;
            if ("instance" === CC.step)
              for (const ZC of CC.attributes) zC = Math.max(zC, ZC.offset + Rb(ZC.format));
            return zC
          }))
        }, this.layouts.set(fC, oC));
        const qC = wC.map((CC => CC.base));
        return {
          program: ZC,
          sources: nC,
          layout: oC,
          slotData: wC.map((CC => CC.data)),
          o_: qC,
          buffers: [],
          offsets: qC,
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

    function xb(CC, zC, ZC, QC) {
      const wC = zC.program.program.attributes;
      for (let bC = 0; bC < wC.length; bC++) {
        if ((wC[bC].optional ? null : ZC.vertexInput(CC, wC[bC].name, QC)) !== zC.sources[bC]) return !1
      }
      return !0
    }
    const Jb = 64;
    class Ib {
      constructor(CC, zC, ZC, QC) {
        this.device = CC, this.layout = zC, this.frameBuffer = ZC, this.label = QC, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(CC) {
        if (CC * Jb <= this.data.length) return !1;
        let zC = 2 * this.data.length;
        for (; CC * Jb > zC;) zC *= 2;
        const ZC = new Float32Array(zC);
        return ZC.set(this.data), this.data = ZC, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const wC = this.data,
          bC = CC * Jb;
        let nC = wC[bC + 16] !== ZC;
        for (let fC = 0; fC < 16 && !nC; fC++) nC = wC[bC + fC] !== zC[QC + fC];
        if (nC) {
          for (let CC = 0; CC < 16; CC++) wC[bC + CC] = zC[QC + CC];
          wC[bC + 16] = ZC
        }
        return nC
      }
      upload(CC, zC) {
        this.device.queue.writeBuffer(this.buffer, CC * sQ, this.data, CC * Jb, (zC - CC) * Jb)
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

    function ib(CC) {
      return CC.gpu[hC.e.lite] ??= CC.materials.map(((zC, ZC) => ({
        parts: CC,
        range: ZC,
        owner: CC.owner
      })))
    }

    function vb(CC) {
      var zC, ZC, QC;
      return null !== (zC = null !== (ZC = null === (QC = CC.parts.materials[CC.range]) || void 0 === QC ? void 0 : QC.mirror) && void 0 !== ZC ? ZC : CC.owner.material) && void 0 !== zC ? zC : null
    }
    const eb = ["opaque", "alphaTest", "transparent", "text"];

    function hb(CC) {
      for (const zC of eb) CC[zC].units.length = 0, CC[zC].rows.length = 0
    }
    class Kb {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, qz.b)("Lite: ")
      }
      attach(CC, zC) {
        this.model = CC, this.mirror = zC
      }
      get worlds() {
        return this.model.nodes.fN
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(CC) {
        return this.groups.get(CC)
      }
      forEachGroup(CC) {
        this.groups.forEach(CC)
      }
      forEachSelected(CC) {
        for (const [zC, ZC] of this.groups)
          for (const QC of eb)
            for (const wC of ZC[QC].units) CC(wC.owner, "text" === QC ? "transparent" : QC, zC)
      }
      select(CC, zC) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(hb);
        const {
          model: ZC,
          mirror: QC
        } = this;
        if (!ZC || !QC || !CC) return;
        this.rows.length < ZC.nodes.HW && (this.rows = new Int32Array(ZC.nodes.HW));
        const wC = this.rows,
          bC = ZC.meshes;
        for (let fC = 0; fC < bC.looseCount; fC++) {
          const CC = bC.loose[fC],
            ZC = QC.nodes[CC];
          ZC && !ZC.isBlocked && ZC.isEnabled() && !ZC.sq.hasAZeroComponent && bC.selects(CC, zC.frustum) && (this.activate(ZC, CC), this.selectedCount++)
        }
        const nC = bC.selectTextPlanes(zC.frustum, wC);
        for (let fC = 0; fC < nC; fC++) {
          const zC = wC[fC],
            bC = QC.nodes[zC],
            nC = ZC.meshes.parts[zC];
          if (!bC.isVisible || !(bC.visibility > 0) || 0 === (bC.layerMask & CC.layerMask) || !nC) continue;
          const oC = this.groupOf(ZC.meshes.layer[zC]).text;
          for (const CC of ib(nC)) oC.units.push(CC), oC.rows.push(zC);
          this.selectedCount++
        }
      }
      instanceBatch(CC) {
        const zC = this.batchOf(CC);
        return zC.dispatched || (zC.dispatched = zC.renderSelf = !0, zC.row = this.rowOf(CC)), zC
      }
      rowOf(CC) {
        return CC.row
      }
      activate(CC, zC) {
        if (!CC.ZH) {
          const ZC = CC;
          if (ZC.yQC) {
            const CC = this.batchOf(ZC);
            CC.dispatched = !0, CC.renderSelf = !0, CC.row = zC
          }
          return void this.dispatch(ZC, zC, zC)
        }
        const ZC = CC,
          QC = ZC.LQC;
        if (QC._getWorldMatrixDeterminant() >= 0 !== ZC._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${QC.name}`, `A mirrored InstancedMesh of ${QC.name} is not drawn yet`);
        const wC = this.batchOf(QC);
        wC.instances.push(ZC), wC.rows.push(zC), wC.dispatched || (wC.dispatched = !0, this.dispatch(QC, zC, this.rowOf(QC)))
      }
      batchOf(CC) {
        let zC = this.batches.get(CC);
        return zC || (zC = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(CC, zC)), zC.frame !== this.frame && (zC.frame = this.frame, zC.dispatched = !1, zC.renderSelf = !1, zC.instances.length = 0, zC.rows.length = 0), zC
      }
      dispatch(CC, zC, ZC) {
        const {
          layer: QC,
          parts: wC
        } = this.model.meshes;
        if (!wC[zC]) return;
        const bC = this.groupOf(QC[zC]),
          nC = CC;
        for (const fC of ib(wC[zC])) {
          const CC = vb(fC);
          if (!CC) continue;
          const zC = CC.needAlphaBlendingForMesh(nC) ? bC.transparent : CC.needAlphaTestingForMesh(nC) ? bC.alphaTest : bC.opaque;
          zC.units.push(fC), zC.rows.push(ZC)
        }
      }
      groupOf(CC) {
        let zC = this.groups.get(CC);
        return zC || (zC = {
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
        }, this.groups.set(CC, zC)), zC
      }
    }

    function Yb(CC) {
      CC.opaque.length = 0, CC.transparent.length = 0
    }
    class db {
      constructor() {
        this.vq = new Map, this.enabled = [], this.groups = new Map, this.lM = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(CC) {
        if (this.vq.has(CC)) return;
        const zC = {
          mesh: CC,
          observer: CC.onEffectiveEnabledStateChangedObservable.add((CC => {
            this.IK(zC, CC)
          })),
          index: -1,
          steady: null
        };
        this.vq.set(CC, zC), this.IK(zC, CC.isEnabled())
      }
      remove(CC) {
        const zC = this.vq.get(CC);
        zC && (zC.observer.remove(!0), this.IK(zC, !1), this.vq.delete(CC))
      }
      base(CC) {
        return this.vq.get(CC)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          vq: this.vq.size
        }
      }
      forEachSelected(CC) {
        for (const [zC, ZC] of this.groups) {
          for (const QC of ZC.opaque) CC(QC.owner, "opaque", zC);
          for (const QC of ZC.transparent) CC(QC.owner, "transparent", zC)
        }
        for (const zC of this.lM) CC(zC.mesh, "opaque", 0)
      }
      group(CC) {
        return this.groups.get(CC)
      }
      forEachGroup(CC) {
        this.groups.forEach(CC)
      }
      select(CC, zC) {
        if (this.drawn = 0, this.selected = 0, this.lM.length = 0, this.groups.forEach(Yb), !CC) return;
        const ZC = this.enabled;
        for (let QC = 0; QC < ZC.length; QC++) {
          const wC = ZC[QC];
          if (wC.steady && zC(wC, CC)) {
            this.selected++, this.lM.push(wC);
            continue
          }
          const bC = wC.mesh;
          if (bC.isBlocked || bC.sq.hasAZeroComponent) continue;
          if (!bC.isVisible || bC.visibility <= 0 || 0 === (bC.layerMask & CC.layerMask)) continue;
          if (bC.yQC) {
            this.warned.has(bC.name) || (this.warned.add(bC.name), console.warn(`Lite: thin instance base ${bC.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: nC
          } = bC;
          if (!nC) continue;
          bC.computeWorldMatrix(), this.selected++;
          const fC = this.listsFor(bC.renderingGroupId);
          for (const CC of ib(nC)) {
            const zC = vb(CC);
            zC && (zC.needAlphaBlendingForMesh(bC) ? fC.transparent.push(CC) : fC.opaque.push(CC))
          }
        }
      }
      IK(CC, zC) {
        if (zC === CC.index >= 0) return;
        CC.steady = null;
        const ZC = this.enabled;
        if (zC) CC.index = ZC.length, ZC.push(CC);
        else {
          const zC = ZC.pop();
          zC !== CC && (ZC[CC.index] = zC, zC.index = CC.index), CC.index = -1
        }
      }
      listsFor(CC) {
        let zC = this.groups.get(CC);
        return zC || (zC = {
          opaque: [],
          transparent: []
        }, this.groups.set(CC, zC)), zC
      }
    }
    var mb = ZC(39399);
    class Hb {
      constructor() {
        this.bundle = null, this.stale = !0, this.vq = new Set
      }
    }
    class Eb {
      constructor(CC, zC, ZC) {
        this.device = CC, this.slots = zC, this.host = ZC, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Hb, this.rY = new Hb, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Uw, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = CC => {
          CC.seen !== this.frame && (CC.draw && (CC.draw = null, this.args[5 * CC.slot + 1] = 0, this.argsDirty = !0, this.rY.stale ||= CC.rY), this.frame - CC.seen > 120 && (this.records.delete(CC.unit), this.freeSlots.push(CC.slot), CC.recorded && (this.bundleOf(CC).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(CC) {
          var zC, ZC;
          let QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zC = null === (ZC = globalThis.navigator) || void 0 === ZC ? void 0 : ZC.userAgent) && void 0 !== zC ? zC : "";
          const wC = CC.adapterInfo;
          return "intel" === (null === wC || void 0 === wC ? void 0 : wC.vendor) && "gen-12lp" === wC.architecture && QC.includes("Windows")
        }(CC), (0, mb.G)(this.direct)
      }
      jR() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, mb.G)(this.directThisFrame)
      }
      add(CC, zC, ZC, QC) {
        let wC = this.records.get(CC);
        return wC || (wC = this.createRecord(CC), this.records.set(CC, wC)), wC.recorded && Xb(wC, zC) || (this.bundleOf(wC).stale = !0), this.place(wC, zC, ZC, QC), wC
      }
      bundleOf(CC) {
        return CC.rY ? this.rY : this.main
      }
      addAgain(CC, zC, ZC, QC) {
        CC.recorded || (this.bundleOf(CC).stale = !0), this.place(CC, zC, ZC, QC)
      }
      place(CC, zC, ZC, QC) {
        CC.seen = this.frame, CC.rY && null === CC.draw && (this.rY.stale = !0), CC.draw = zC, this.drawn++, ZC && this.slots.write(CC.slot, ZC, QC) && (this.slotsFrom = Math.min(this.slotsFrom, CC.slot), this.slotsTo = Math.max(this.slotsTo, CC.slot));
        const wC = this.args,
          bC = 5 * CC.slot;
        wC[bC] === zC.count && wC[bC + 1] === zC.instances && wC[bC + 2] === zC.first || (wC[bC] = zC.count, wC[bC + 1] = zC.instances, wC[bC + 2] = zC.first, this.argsDirty = !0, this.rY.stale ||= CC.rY)
      }
      yR() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(CC) {
        for (const zC of this.records.values()) zC.draw && zC.seen === this.frame && !zC.rY && CC(zC.draw, this.slots.data, zC.slot * sQ / 4)
      }
      resourceDestroyed(CC) {
        this.main.stale ||= this.main.vq.has(CC), this.rY.stale ||= this.rY.vq.has(CC)
      }
      execute(CC, zC, ZC) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(CC, zC, ZC, "direct"), this.drawn;
        const QC = this.host.sceneGroup(zC);
        if (!QC) return this.main.bundle = null, this.rY.bundle = null, this.recordedSceneGroup = null, this.encode(CC, zC, ZC, "direct"), this.drawn;
        this.recordedTarget === ZC && this.recordedSceneGroup === QC || (this.recordedTarget = ZC, this.recordedSceneGroup = QC, this.main.stale = !0, this.rY.stale = !0);
        const wC = this.main,
          bC = this.rY;
        let nC = !1;
        !wC.stale && wC.bundle || (wC.bundle = this.record(zC, ZC, QC, "indirect"), nC = !0);
        const fC = (0, mb.l)();
        return (bC.stale || this.rangedEpoch !== fC) && (this.rangedEpoch = fC, bC.bundle = this.drawsRanged() ? this.record(zC, ZC, QC, "rY") : this.noRangedBundle(), nC = !0), nC && (this.bundles = bC.bundle ? [wC.bundle, bC.bundle] : [wC.bundle]), CC.executeBundles(this.bundles), CC.setBindGroup(0, QC), this.drawn
      }
      record(CC, zC, ZC, QC) {
        const wC = this.device.createRenderBundleEncoder({
          label: "rY" === QC ? "thin-bases-ranged" : "thin-bases",
          colorFormats: CC._colorFormat ? [CC._colorFormat] : [],
          depthStencilFormat: CC._depthStencilFormat,
          sampleCount: CC._sampleCount
        });
        return wC.setBindGroup(0, ZC), this.encode(wC, CC, zC, QC), wC.finish()
      }
      noRangedBundle() {
        for (const CC of this.records.values()) CC.rY && (CC.recorded = !1);
        return this.rY.vq.clear(), this.rY.stale = !1, null
      }
      drawsRanged() {
        for (const CC of this.records.values())
          if (CC.rY && CC.draw) return !0;
        return !1
      }
      encode(CC, zC, ZC, QC) {
        const wC = [];
        for (const oC of this.records.values()) "direct" !== QC && oC.rY !== ("rY" === QC) || (oC.recorded = !1, oC.draw && wC.push(oC));
        wC.sort(cb);
        const bC = "direct" === QC ? null : "rY" === QC ? this.rY : this.main;
        null === bC || void 0 === bC || bC.vq.clear(), this.binder.reset();
        let nC = !1;
        for (const oC of wC) {
          var fC;
          const wC = oC.draw,
            qC = this.host.pipelineFor(wC, zC, ZC);
          if (!qC) {
            this.host.pipelineCompiling(wC, ZC) ? nC = !0 : bC && this.keep(oC, wC, bC.vq);
            continue
          }
          let FC;
          if (oC.rY && "indirect" !== QC) {
            const CC = oC.unit.owner;
            FC = "direct" === QC && (0, mb.x)(CC) || (0, mb.p)(CC) || void 0
          }
          if (bC && this.keep(oC, wC, bC.vq), 0 === (null === (fC = FC) || void 0 === fC ? void 0 : fC.count)) continue;
          this.binder.bind(CC, wC, qC, this.slots.bindGroup, oC.slot * sQ);
          const WC = 5 * oC.slot;
          if ("indirect" === QC) {
            wC.indexBuffer ? CC.drawIndexedIndirect(this.argsBuffer, 4 * WC) : CC.drawIndirect(this.argsBuffer, 4 * WC);
            continue
          }
          const NC = this.args;
          FC ? lb(CC, null !== wC.indexBuffer, NC, WC, FC) : wC.indexBuffer ? CC.drawIndexed(NC[WC], NC[WC + 1], NC[WC + 2], 0, 0) : CC.draw(NC[WC], NC[WC + 1], NC[WC + 2], 0)
        }
        bC && (bC.stale = nC)
      }
      keep(CC, zC, ZC) {
        CC.recorded = !0, CC.pipelineKey = zC.pipelineKey, CC.materialGroup = zC.material.bindGroup, CC.vertexBuffers.length = 0, CC.vertexBuffers.push(...zC.vertexBuffers), CC.vertexOffsets = zC.vertexOffsets, CC.indexBuffer = zC.indexBuffer, CC.indexFormat = zC.indexFormat;
        for (const QC of zC.vertexBuffers) ZC.add(QC);
        zC.indexBuffer && ZC.add(zC.indexBuffer), ZC.add(zC.material.buffer);
        for (const QC of zC.material.bound) QC && ZC.add(QC)
      }
      createRecord(CC) {
        let zC = this.freeSlots.pop();
        return void 0 === zC && (zC = this.slotCount++, this.grow()), {
          unit: CC,
          slot: zC,
          rY: void 0 !== (0, mb.p)(CC.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.rY.stale = !0), 5 * this.slotCount > this.args.length) {
          const CC = new Uint32Array(2 * this.args.length);
          CC.set(this.args), this.args = CC, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function lb(CC, zC, ZC, QC, wC) {
      const bC = ZC[QC + 1],
        nC = wC.data;
      for (let fC = 0; fC < wC.count; fC++) {
        const wC = Math.min(nC[2 * fC], bC),
          oC = Math.min(nC[2 * fC + 1], bC - wC);
        0 !== oC && (zC ? CC.drawIndexed(ZC[QC], oC, ZC[QC + 2], 0, wC) : CC.draw(ZC[QC], oC, ZC[QC + 2], wC))
      }
    }

    function Xb(CC, zC) {
      if (CC.pipelineKey !== zC.pipelineKey || CC.materialGroup !== zC.material.bindGroup || CC.indexBuffer !== zC.indexBuffer || CC.indexFormat !== zC.indexFormat || CC.vertexOffsets !== zC.vertexOffsets || CC.vertexBuffers.length !== zC.vertexBuffers.length) return !1;
      for (let ZC = 0; ZC < CC.vertexBuffers.length; ZC++)
        if (CC.vertexBuffers[ZC] !== zC.vertexBuffers[ZC]) return !1;
      return !0
    }

    function cb(CC, zC) {
      return Ow(CC.draw, zC.draw)
    }
    const ub = new WeakMap,
      rb = {
        depth: !1,
        sunShadow: !1
      };

    function sb(CC, zC) {
      let ZC = ub.get(CC);
      ZC || (ZC = new Map, ub.set(CC, ZC));
      const QC = `${zC.depth?"-depth":""}${zC.sunShadow?"-shadow":""}${zC.shadowMask?"-mask":""}`;
      let wC = ZC.get(QC);
      if (!wC) {
        const bC = [{
          binding: ez.d,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: ez.k
          }
        }, {
          binding: ez.A,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        zC.depth && bC.push({
          binding: ez.u,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), zC.sunShadow && bC.push(... function() {
          const CC = GPUShaderStage.FRAGMENT,
            zC = ez.w;
          return [{
            binding: zC.uniform,
            visibility: CC,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: zC.lN,
            visibility: CC,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: zC.special,
            visibility: CC,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: zC.volume,
            visibility: CC,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: zC.sampler,
            visibility: CC,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: zC.entities,
            visibility: CC,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: zC.entityGrids,
            visibility: CC,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), zC.shadowMask && bC.push({
          binding: ez.x,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), wC = CC.createBindGroupLayout({
          label: `${zC.depth?"terrain-":""}shader-pack-inputs${QC}`,
          entries: bC
        }), ZC.set(QC, wC)
      }
      return wC
    }

    function Tb(CC) {
      return sb(CC, rb)
    }

    function ab(CC, zC) {
      if (!zC) return !1;
      const ZC = (0, hz.g)(CC);
      return !!ZC && XZ(ZC, zC)
    }

    function tb(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!qQ(zC)) return [];
      return [sb(CC, {
        depth: wQ(zC.packVariant),
        sunShadow: ab(zC.packVariant, ZC),
        shadowMask: QC
      })]
    }
    class Db {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = CC, this.sunShadow = ZC, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(ez.k), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = CC.createBuffer({
          label: "shader-pack-inputs",
          size: ez.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const QC = (0, ez.D)(zC);
        this.textures = CC.createBuffer({
          label: "shader-pack-textures",
          size: QC.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), CC.queue.writeBuffer(this.textures, 0, QC), this.bindGroup = CC.createBindGroup({
          label: "shader-pack-inputs",
          layout: Tb(CC),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: ez.d,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: ez.A,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(CC, zC, ZC) {
        (0, ez.F)(this.data, {
          seconds: CC.seconds(),
          lit: ZC,
          renderOffset: CC.renderOffset(),
          B3: CC.B3(),
          eyePosition: zC,
          shadowDirection: CC.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const QC = zC ? this.sunShadow : null;
        if ((zC || ZC) && !QC) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!CC && !QC) return this.bindGroup;
        (CC && CC !== this.depthView || ZC && ZC !== this.maskView) && (this.depthView = null !== CC && void 0 !== CC ? CC : this.depthView, this.maskView = null !== ZC && void 0 !== ZC ? ZC : this.maskView, this.groups.clear());
        const wC = (CC ? 1 : 0) | (QC ? 2 : 0) | (ZC ? 4 : 0);
        let bC = this.groups.get(wC);
        if (!bC) {
          const zC = this.entries();
          CC && zC.push({
            binding: ez.u,
            resource: CC
          }), QC && zC.push(...QC.entries()), ZC && zC.push({
            binding: ez.x,
            resource: ZC
          }), bC = this.device.createBindGroup({
            label: `${CC||ZC?"terrain-":""}shader-pack-inputs${CC?"-depth":""}${QC?"-shadow":""}${ZC?"-mask":""}`,
            layout: sb(this.device, {
              depth: !!CC,
              sunShadow: !!QC,
              shadowMask: !!ZC
            }),
            entries: zC
          }), this.groups.set(wC, bC)
        }
        return bC
      }
      bind(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        CC.setBindGroup(ez.g, this.bindGroupFor(zC, ZC, QC))
      }
    }

    function jb(CC, zC, ZC) {
      if (CC.gpuVersion === zC.gpuBuffersVersion) return !0;
      let QC;
      do {
        if (QC = zC.gpuBuffersVersion, !yb(CC, zC, ZC)) return !1
      } while (zC.gpuBuffersVersion !== QC);
      return CC.gpuVersion = QC, CC.fitInstances = 0, !0
    }

    function yb(CC, zC, ZC) {
      let QC = null;
      for (let bC = 0; bC < CC.slotData.length; bC++) {
        var wC;
        const nC = CC.slotData[bC],
          fC = nC ? zC.gpuBuffer(nC) : ZC;
        if (!fC) return !1;
        nC && CC.layout.instanceEnds[bC] < 0 && zC.cover(nC, Number.POSITIVE_INFINITY), CC.buffers[bC] = fC;
        const oC = CC.o_[bC] + (nC ? zC.gpuOffset(nC) : 0);
        oC !== (null !== (wC = QC) && void 0 !== wC ? wC : CC.offsets)[bC] && (QC ??= CC.offsets.slice(), QC[bC] = oC), CC.ends[bC] = nC ? zC.gpuEnd(nC) : fC.size
      }
      return QC && (CC.offsets = QC), !0
    }

    function Lb(CC, zC, ZC, QC) {
      if (zC <= CC.fitInstances) return null;
      const {
        layout: wC,
        ends: bC,
        offsets: nC,
        slotData: fC,
        o_: oC
      } = CC;
      let qC = !1;
      for (let FC = 0; FC < wC.buffers.length; FC++) {
        const CC = wC.instanceEnds[FC];
        if (CC < 0) continue;
        const QC = (zC - 1) * wC.buffers[FC].arrayStride + CC;
        if (bC[FC] - nC[FC] < QC) return {
          index: FC,
          needed: QC
        };
        const WC = fC[FC];
        WC && ZC.cover(WC, oC[FC] + QC) && (qC = !0)
      }
      return qC && jb(CC, ZC, QC), CC.fitInstances = zC, null
    }
    var Ub = ZC(37648),
      Bb = ZC(37677);
    const Ob = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      kb = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Vb = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Cn = `((vertexInputs.aPackedLightLevels >> 16u) | ${oz.c.placed}u)`,
      zn = "u32(vertexInputs.aShaderPackItem.x)",
      Zn = `${oz.c.lifeform}u`;

    function Qn(CC) {
      return "item" === CC.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const wn = "bloxdSpEnchant",
      bn = "floor(finalWorld[3].xyz)";

    function nn(CC, zC, ZC) {
      return "placed" === zC.kind && CC.reads[ZC].includes("bloxdFragmentBlockPosition")
    }

    function fn(CC, zC) {
      let [ZC, QC] = CC;
      return ZC === zC.point && QC === zC.code
    }

    function qn(CC, zC) {
      var ZC, QC, wC;
      const bC = null === (ZC = CC.find((CC => CC.texture))) || void 0 === ZC ? void 0 : ZC.texture,
        nC = null === (QC = CC.find((CC => CC.enchantTier))) || void 0 === QC ? void 0 : QC.enchantTier,
        fC = null === (wC = CC.find((CC => CC.overlay))) || void 0 === wC ? void 0 : wC.overlay,
        oC = fC ? zC.filter((CC => fn(CC, fC))).length : 0;
      return fC && 1 === oC ? {
        texture: bC,
        overlay: fC,
        enchantTier: nC
      } : {
        texture: bC,
        enchantTier: nC
      }
    }

    function Fn(CC) {
      if ("item" === CC.kind) {
        return {
          vertexFlags: `(${zn} & 0xffffu)`,
          varying: "vPackItem",
          value: zn,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return CC.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Cn,
        varying: "vPackFlags",
        value: Cn,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Wn(CC) {
      return "lifeform" === CC.kind ? Zn : "0u"
    }

    function Nn(CC) {
      return !!CC.BLOXD_PLUGIN_ENCHANTMENT
    }

    function Mn(CC, zC) {
      const {
        enchantTier: ZC
      } = zC;
      return ZC && Nn(zC.defines) && "lifeform" === zC.kind && Rn(CC, "enchantTier") ? ZC : null
    }

    function gn(CC, zC) {
      return Nn(zC.defines) && Rn(CC, "enchantSpeed")
    }

    function Sn(CC) {
      const {
        overlay: zC,
        defines: ZC
      } = CC;
      if (!zC || !ZC.DIFFUSE) return null;
      const QC = ZC.VERTEXCOLOR || ZC.INSTANCESCOLOR && ZC.INSTANCES;
      return `vec4f(${zC.colour}.rgb * uniforms.vDiffuseInfos.y${QC?" * fragmentInputs.vColor.rgb":""}, ${zC.colour}.a)`
    }
    const pn = "fragmentInputs.vPackTexture";

    function Pn(CC) {
      const {
        atlas: zC,
        defines: ZC,
        texture: QC
      } = CC;
      if (zC || !ZC.DIFFUSE) return null;
      if (QC) return {
        texture: "diffuseSampler",
        ...QC
      };
      const wC = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===ZC.DIFFUSEDIRECTUV?"vMainUV1":2===ZC.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== CC.kind) return wC;
      if (!ZC.BLOXD_PLUGIN_ANIMATED) return {
        ...wC,
        id: pn
      };
      const bC = JC.e.WGSL,
        nC = (0, JC.ob)(bC, "uAnimStatesNum"),
        fC = (0, JC.Y)(bC, (0, Ub.h)(bC), nC),
        oC = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${nC})`,
        layers: [fC],
        uv: `vec2f(${oC}.x, ${oC}.y * ${nC} - ${fC})`,
        levelUv: oC,
        id: pn
      }
    }

    function Gn(CC, zC) {
      return "box" === zC.kind && !!CC.hooks.surface && null !== Pn(zC)
    }

    function Rn(CC, zC) {
      return CC.reads.fragment.includes(zC)
    }

    function An(CC) {
      return !!CC.BLOXD_LIGHTING && !CC.BLOXD_UNLIT
    }

    function xn(CC, zC, ZC, QC) {
      const wC = CC.filter((CC => {
        let [ZC, QC] = CC;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === ZC && QC === zC
      }));
      if (1 !== wC.length) throw new Error(`A model program for shader packs has ${0===wC.length?"no":"more than one"} ${QC} code before fog (lite/modelShaderPack.ts)`);
      return CC.map((CC => CC === wC[0] ? [CC[0], ZC] : CC))
    }

    function Jn(CC, zC, ZC, QC) {
      const {
        hooks: wC
      } = CC, {
        kind: bC,
        defines: nC
      } = zC, fC = [...ZC];
      var oC;
      zC.atlas && wC.surface && fC.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", tZ("atlasIdxIn")]), "item" === bC && fC.push(["CUSTOM_VERTEX_DEFINITIONS", (0, JC.f)(JC.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Gn(CC, zC) && fC.push(["CUSTOM_VERTEX_DEFINITIONS", (0, JC.f)(JC.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (oC = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${TZ}[min(u32(${oC}) - 1u, arrayLength(&${TZ}) - 1u)], ${oC} > 0.5);\n`)]);
      const qC = Fn(zC);
      qC && (wC.surface || wC.light) && fC.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${qC.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${qC.varying} = ${qC.value};`]);
      let FC = QC;
      if (nn(CC, zC, "fragment") && (fC.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${bn});`]), FC = [...FC, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Rn(CC, "localPosition") && fC.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${Qn(zC)};`]), Nn(nC) && wC.surface) {
        gn(CC, zC) && fC.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const ZC = Mn(CC, zC);
        ZC && fC.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${ZC});`]);
        const QC = (0, JC.cb)(JC.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        FC = [...xn(FC, (0, Bb.e)(JC.e.WGSL), QC, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Bb.c)(wn)]]
      }
      const {
        overlay: WC
      } = zC;
      WC && Sn(zC) && wC.surface && (FC = FC.filter((CC => !fn(CC, WC))));
      const NC = wC.light ? function(CC) {
        return "placed" === CC.kind ? {
          name: "terrain",
          engine: (0, Iz.S)(JC.e.WGSL),
          pack: (0, Iz.rb)(JC.e.WGSL)
        } : CC.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Iz.K)(JC.e.WGSL),
          pack: (0, Iz.mb)(JC.e.WGSL)
        } : null
      }(zC) : null;
      if (NC && (FC = xn(FC, NC.engine, NC.pack, `${NC.name} light`), "placed" !== bC && An(nC))) {
        const CC = nC.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, JC.ob)(JC.e.WGSL, "uEntityLightLevels") : (0, JC.wb)(JC.e.WGSL, "aLightLevels");
        fC.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Iz.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Iz.nb)(JC.e.WGSL, CC)])
      }
      return {
        vertexCode: fC,
        fragmentCode: FC
      }
    }

    function In(CC, zC, ZC, QC) {
      return EZ(CC, zC, ZC, QC, "model")
    }
    const vn = "\t@builtin(position) position: vec4f,\n";

    function en(CC, zC) {
      const ZC = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(CC)[0];
      return `${ZC}${zC}${CC.slice(ZC.length)}`
    }

    function hn(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: wC
      } = zC, bC = XZ(zC, QC), {
        kind: nC,
        defines: fC
      } = ZC, oC = function(CC, zC) {
        var ZC, QC, wC;
        const {
          defines: bC
        } = zC, nC = Fn(zC), fC = !!bC.FOG, oC = Nn(bC), qC = null !== (ZC = null === nC || void 0 === nC ? void 0 : nC.enchantTier) && void 0 !== ZC ? ZC : Mn(CC, zC) ? "fragmentInputs.vPackEnchantTier" : "0u", FC = "lifeform" === zC.kind && !bC.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (QC = null === nC || void 0 === nC ? void 0 : nC.vertexFlags) && void 0 !== QC ? QC : Wn(zC),
          vertexLocalPosition: Qn(zC),
          flags: null !== (wC = null === nC || void 0 === nC ? void 0 : nC.flags) && void 0 !== wC ? wC : Wn(zC),
          normal: "normalW",
          alpha: FC ? "alpha * baseColor.a" : "alpha",
          alphaOut: FC ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: fC ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: fC ? "1.0 - fog" : "0.0",
          enchantTier: qC,
          enchantColour: oC ? `${wn}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: gn(CC, zC) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Rn(CC, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Sn(zC)
        }
      }(zC, ZC), qC = CC.textures.filter((CC => /^textureAtlas\d+$/.test(CC.name))).length, FC = ZC.atlas && qC > 0 ? {
        count: qC,
        layers: ZC.atlas.layers,
        width: ZC.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: CC.material.slots.has("uAnimDataPerTex") ? (zC, ZC) => eQ(zC, ZC, function(CC) {
          const zC = CC.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            ZN: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: CC => `uniforms.uAnimDataPerTex[${CC}]${zC}`
          }
        }(CC)) : null
      } : null, WC = "placed" === nC ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", NC = null !== FC && void 0 !== FC ? FC : Pn(ZC), MC = function(CC, ZC) {
        let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,ez.E)()}${uZ(zC,ZC)}${QC}${jZ(CC)}${dZ}${WC}${zC.code}`
      };
      let {
        vertex: gC,
        fragment: SC
      } = CC;
      const pC = LZ(wC, oC);
      if (pC) {
        const CC = nn(zC, ZC, "vertex") ? `\tbloxdSpCell = ${bn};\n` : "";
        gC = In(gC, Ob, `${CC}${pC.slice(1)}${Ob}`, "vertex")
      }
      const PC = `${rZ(zC,bC,function(CC,zC){return zC.TWOSIDEDLIGHTING?CC:`select(-(${CC}), ${CC}, fragmentInputs.frontFacing)`}(oC.normal,fC),oC.flags)}${UZ(wC,zC.strict,zC.program,NC,oC)}`;
      PC && (SC = In(SC, kb, `${PC.slice(1)}${kb}`, "surface")), bC && zC.sunShadow && !fC.TWOSIDEDLIGHTING && (SC = In(SC, vn, `${vn}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const GC = kZ(wC);
      if (GC) {
        const CC = OZ(wC, An(fC), !0, oC);
        SC = In(SC, Vb, `${CC}${GC.slice(1)}${Vb}`, "light")
      }
      const RC = Gn(zC, ZC) ? aZ : "";
      return {
        ...CC,
        vertex: en(gC, MC(FC, !1, RC)),
        fragment: en(SC, MC(NC, bC))
      }
    }
    const Kn = {
      name: "earthSky",
      uniqueId: -1
    };
    class Yn {
      constructor(CC) {
        this.resources = CC, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const CC of this.instances.values()) CC.released = !0, this.resources.destroyBuffer(CC.buffer);
        this.instances.clear()
      }
    }

    function dn(CC) {
      return CC.failed && null !== CC.packGroup
    }
    class mn {
      constructor(CC, zC, ZC) {
        this.device = CC, this.resources = zC, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.b_ = new db, this.modelMeshes = new Kb, this.thinBundle = void 0, this.binder = new Uw, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new pb((CC => this.modelSlot(CC).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, qz.b)("Lite: "), this.renderStates = new Wb(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (CC, zC) => this.keepSteady(CC, zC), this.lists = new Bw(this.modelMeshes, this.b_, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new fb(zC, this.warnOnce, ((CC, zC, ZC) => this.programWithModel(CC, zC, ZC)), dn), this.vertexLayouts = new Ab(zC, CC.limits, this.warnOnce), this.sceneLayout = zz(CC), this.frameLayout = CC.createBindGroupLayout({
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
        }), this.frameBuffer = CC.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Ib(CC, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = CC.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Eb(CC, new Ib(CC, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (CC, zC, ZC) => this.pipelineFor(CC, zC, ZC),
          pipelineCompiling: (CC, zC) => !CC.program.failed && !1 !== this.pipelines.get(`${CC.pipelineKey}|${zC}`),
          sceneGroup: CC => {
            const zC = ZC(CC);
            return zC || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), zC
          }
        }), zC.onDestroy = CC => {
          this.thinBundle.resourceDestroyed(CC)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const wC = {
          order: CC,
          isTransparent: zC,
          _direct: !zC,
          bind: (CC, zC) => this.createBinding(wC, zC, ZC, QC)
        };
        return wC
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(CC, zC, ZC) {
        var QC;
        let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = zC, this.drawDefines.view = zC, this.thinBundle.jR(), this.writeFrameUniforms();
        const bC = null !== (QC = null === wC || void 0 === wC ? void 0 : wC.defineFor("model")) && void 0 !== QC ? QC : 0;
        this.drawDefines.modelPackVariant = bC, wC && 0 !== bC && (this.packInputs ??= new Db(this.device, wC.textureLayers(), this.sunShadow), this.packInputs.write(wC, zC.eye, wC.lS())), this.lists.clear(), this.slotCount = 0;
        const nC = CC.activeCamera;
        this.b_.select(nC, this.keepSteadyBase), this.modelMeshes.select(nC, zC), ZC && this.pushEarthSky(ZC), this.lists.collect(CC), this.thinBundle.yR(), this.uploadMeshSlots()
      }
      pushDraws(CC, zC, ZC, QC, wC, bC) {
        let nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const fC = bC.length;
        for (let oC = 0; oC < ZC; oC++) {
          const ZC = zC[oC];
          let fC = this.retainedDraw(CC, ZC, QC, wC);
          if (void 0 === fC && (fC = this.drawFor(CC, ZC, QC, wC), this.retain(ZC, fC)), fC) {
            const CC = ZC.owner,
              zC = nC ? nC[oC] : -1;
            fC.slotOffset = zC < 0 ? this.writeMeshSlot(CC.getWorldMatrix().m, CC.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[zC], 16 * zC), bC.push(fC)
          }
        }
        return bC.length - fC
      }
      bundleDraws(CC, zC, ZC) {
        let QC = 0;
        for (const wC of zC) {
          let zC = this.retainedDraw(CC, wC, ZC, !1);
          const bC = void 0 !== zC;
          if (void 0 === zC && (zC = this.drawFor(CC, wC, ZC, !1), this.retain(wC, zC)), zC) {
            const CC = wC.owner,
              ZC = this.thinBundle.add(wC, zC, CC.getWorldMatrix().m, CC.visibility);
            bC && this.steadyFrom(wC, zC, ZC), QC++
          }
        }
        return QC
      }
      steadyFrom(CC, zC, ZC) {
        const QC = CC.owner,
          wC = this.b_.base(QC),
          bC = QC.material,
          {
            drawState: nC,
            instance: fC
          } = zC.inputs.retained;
        if (!wC || !bC || 1 !== CC.parts.materials.length || vb(CC) !== bC) return;
        const oC = wC.steady ??= {
          unit: CC,
          material: bC,
          visibility: 1,
          draw: zC,
          record: ZC,
          drawState: nC,
          instance: fC,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        oC.unit = CC, oC.material = bC, oC.visibility = QC.visibility, oC.draw = zC, oC.record = ZC, oC.drawState = nC, oC.instance = fC, oC.bindGroup = fC.bindGroup, oC.gpuVersion = this.resources.gpuBuffersVersion, oC.fitInstances = zC.inputs.fitInstances, oC.worldFlag = QC.getWorldMatrix().updateFlag, oC.handedFrame = this.frame
      }
      keepSteady(CC, zC) {
        const ZC = CC.steady;
        if (ZC.handedFrame !== this.frame - 1 || (this.frame + ZC.phase) % 8 === 0) return !1;
        const QC = CC.mesh,
          {
            unit: wC,
            draw: bC,
            instance: nC,
            drawState: fC
          } = ZC,
          oC = QC.forcedInstanceCount || QC.N_;
        if (!QC.isVisible || QC.yQC || QC.visibility !== ZC.visibility || 0 === (QC.layerMask & zC.layerMask) || QC.material !== ZC.material || 0 !== QC.renderingGroupId || QC.hasVertexAlpha || !this.drawDefines.definesHold(fC, wC, fC.instancing) || ZC.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(bC.inputs, wC, fC.instancing, bC.program) || bC.program.failed || nC.released || oC <= 0 || oC > ZC.fitInstances) return !1;
        if (nC.frame !== this.frame && this.bindMaterial(nC, this.modelUniforms.refreshModelUniforms(QC.Km(), nC, nC.model, this.view)), !nC.bindable || nC.bindGroup !== ZC.bindGroup) return !1;
        const qC = QC.computeWorldMatrix(),
          FC = qC.updateFlag !== ZC.worldFlag;
        return ZC.worldFlag = qC.updateFlag, bC.instances = oC, this.thinBundle.addAgain(ZC.record, bC, FC ? qC.m : null, ZC.visibility), ZC.handedFrame = this.frame, this.b_.drawn++, !0
      }
      retainedDraw(CC, zC, ZC, QC) {
        const wC = this.inputs.get(zC),
          bC = null === wC || void 0 === wC ? void 0 : wC.retained;
        if (!wC || !bC) return;
        const {
          drawState: nC,
          program: fC,
          instance: oC,
          instancing: qC
        } = bC, FC = zC.owner;
        if (zb(FC) !== qC) return;
        const WC = this.instanceCount(FC, qC);
        if (WC <= 0) return null;
        if (oC.released || fC.failed || nC.program !== fC || !this.drawDefines.programCurrent(nC, zC, qC, ZC) || !this.inputsStamped(wC, zC, qC, fC) || FC.isUnIndexed !== bC.unIndexed || this.indexKey(zC) !== bC.indexData) return;
        if (bC.indexBuffer && bC.gpuVersion !== this.resources.gpuBuffersVersion) {
          const CC = this.resources.gpuBuffer(bC.indexData);
          if (!CC) return;
          bC.indexBuffer = CC, bC.gpuVersion = this.resources.gpuBuffersVersion
        }
        let NC = !1;
        if (oC.frame !== this.frame && (NC = this.modelUniforms.refreshModelUniforms(CC, oC, oC.model, this.view)), !this.bindMaterial(oC, NC) || !this.withGpuBuffers(wC) || !this.instanceBuffersFit(FC.name, wC, WC)) return null;
        const MC = this.makeDraw(fC, wC, this.renderStates.renderState(nC.model, FC, QC, wC.state), oC, WC);
        return this.setRange(MC, zC, bC.indexBuffer, bC.indexData), MC
      }
      retain(CC, zC) {
        const ZC = this.drawDefines.drawStates.get(CC);
        if (!zC || !ZC || ZC.program !== zC.program) {
          const zC = this.inputs.get(CC);
          return void(zC && (zC.retained = null))
        }
        const QC = CC.owner,
          wC = ZC.instancing,
          bC = this.indexKey(CC),
          nC = zC.inputs.retained;
        nC ? (nC.drawState = ZC, nC.instancing = wC, nC.program = zC.program, nC.instance = zC.material, nC.indexData = bC, nC.unIndexed = QC.isUnIndexed, nC.indexBuffer = zC.indexBuffer, nC.gpuVersion = this.resources.gpuBuffersVersion) : zC.inputs.retained = {
          drawState: ZC,
          instancing: wC,
          program: zC.program,
          instance: zC.material,
          indexData: bC,
          unIndexed: QC.isUnIndexed,
          indexBuffer: zC.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(CC, zC, ZC, QC) {
        const wC = zC.owner,
          bC = vb(zC);
        if (!bC) return null;
        const nC = bC.getClassName();
        let fC = null;
        if (function(CC) {
            return "LinesMesh" === CC.getClassName()
          }(wC)) {
          if (! function(CC) {
              return "ShaderMaterial" === CC.getClassName() && "color" === CC.shaderPath
            }(bC)) return this.warnOnce(`lines:${nC}`, `A LinesMesh with a ${nC} is not drawn yet (${bC.name})`), null;
          fC = wC
        } else if ("StandardMaterial" !== nC && "LiteMaterial" !== nC) return this.warnOnce(`class:${nC}`, `${nC} is not drawn yet (${bC.name})`), null;
        const oC = zb(wC),
          qC = this.instanceCount(wC, oC);
        if (qC <= 0) return null;
        const FC = fC ? this.lineProgramFor(wC, ZC, oC) : this.drawDefines.programFor(CC, zC, bC, ZC, oC);
        if (!FC || FC.failed) return null;
        const WC = fC ? null : this.drawDefines.drawStates.get(zC).model,
          NC = WC ? this.modelInstance(WC, FC) : this.materialInstance(wC, FC);
        let MC = !1;
        if (NC.frame !== this.frame && (fC ? GC(NC.ubo, fC) : MC = this.modelUniforms.refreshModelUniforms(CC, NC, NC.model, this.view)), !this.bindMaterial(NC, MC)) return null;
        const gC = this.meshInputs(zC, FC, oC);
        if (!gC || !this.instanceBuffersFit(wC.name, gC, qC)) return null;
        const SC = this.indexKey(zC);
        let pC = null;
        if (SC && !wC.isUnIndexed && (pC = this.resources.gpuBuffer(SC), !pC)) return null;
        const PC = this.renderStates.renderState(null !== WC && void 0 !== WC ? WC : bC, wC, QC, gC.state, fC ? "line-list" : "triangle-list"),
          RC = this.makeDraw(FC, gC, PC, NC, qC);
        return this.setRange(RC, zC, pC, SC), RC
      }
      indexKey(CC) {
        const zC = bb(CC);
        return zC ? this.resources.modelIndex(zC) : null
      }
      setRange(CC, zC, ZC, QC) {
        ZC && (CC.indexBuffer = ZC, CC.indexFormat = this.resources.indexFormat(QC));
        const wC = 4 * zC.range + (ZC ? 0 : 2);
        CC.unit = zC, CC.first = zC.parts.np[wC], CC.count = zC.parts.np[wC + 1]
      }
      makeDraw(CC, zC, ZC, QC, wC) {
        zC.state !== ZC && (zC.state = ZC, zC.pipelineKey = `${CC.id}|${zC.layout.key}|${ZC.key}`, zC.pipeline = null);
        const bC = zC.draw ??= {
          program: CC,
          inputs: zC,
          pipelineKey: "",
          layout: zC.layout,
          state: ZC,
          material: QC,
          slotOffset: 0,
          vertexBuffers: zC.buffers,
          vertexOffsets: zC.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: wC,
          unit: null
        };
        return bC.program = CC, bC.pipelineKey = zC.pipelineKey, bC.state = ZC, bC.material = QC, bC.vertexOffsets = zC.offsets, bC.indexBuffer = null, bC.instances = wC, bC
      }
      instanceCount(CC, zC) {
        switch (zC) {
          case "thin":
            return CC.forcedInstanceCount || CC.N_;
          case "instanced":
            return this.prepareInstances(CC);
          case "none":
            return 1
        }
      }
      prepareInstances(CC) {
        const zC = function(CC, zC) {
          const ZC = zC._userInstancedBuffersStorage,
            QC = CC.batchUploads.get(zC);
          if (QC) {
            var wC;
            if (QC.layout === (null !== (wC = null === ZC || void 0 === ZC ? void 0 : ZC.interleavedKinds) && void 0 !== wC ? wC : null)) return QC;
            QC.release()
          }
          return new jC(CC, zC, ZC)
        }(this.resources, CC);
        return zC.frame !== this.frame && zC.pack(CC, this.modelMeshes.instanceBatch(CC), this.modelMeshes.worlds, this.frame), zC.count
      }
      programWithModel(CC, zC, ZC) {
        const QC = this.modelSlot(CC),
          wC = ob(QC, CC, ZC),
          bC = this.drawDefines.modelPackKind(CC),
          nC = bC ? function(CC, zC, ZC, QC) {
            const wC = (0, vC.x)(CC, IC.j.name),
              bC = [];
            for (const {
                feature: oC,
                state: qC,
                active: FC
              }
              of CC.features) {
              var nC, fC;
              const CC = FC ? null === (nC = (fC = (0, Fz.l)(oC)).zg) || void 0 === nC ? void 0 : nC.call(fC, qC) : void 0;
              CC && bC.push(CC)
            }
            return {
              kind: zC,
              atlas: null !== wC && void 0 !== wC && wC.active ? (0, IC.d)(wC.state) : null,
              defines: ZC,
              ...qn(bC, QC)
            }
          }(CC, bC, zC, QC.fragmentCode) : null;
        if (nC && function(CC) {
            const zC = CC.defines;
            return (null === CC.atlas || !!zC.DIFFUSE && 1 === zC.DIFFUSEDIRECTUV) && !!zC.NORMAL && !zC.REFLECTION && !zC.EMISSIVEASILLUMINATION && !zC.LINKEMISSIVEWITHDIFFUSE
          }(nC)) {
          const ZC = this.modelPackProgram(CC, zC, `${wC}#${bC}#sp${this.drawDefines.modelPackVariant}`, QC, nC);
          if (ZC && !ZC.failed) return ZC
        }
        const fC = this.programs.get(wC);
        if (fC || this.unbuildable.has(wC)) return null !== fC && void 0 !== fC ? fC : null;
        let oC;
        try {
          oC = fw({
            defines: Qb(zC),
            vertexCode: QC.vertexCode,
            fragmentCode: QC.fragmentCode,
            pluginUniforms: QC.pluginUniforms
          })
        } catch (qC) {
          return this.unbuildable.add(wC), this.warnOnce(`build:${wC}`, `could not build a program for ${CC.name}: ${String(qC)}`), null
        }
        return this.createProgram(wC, oC, "standard")
      }
      modelPackProgram(CC, zC, ZC, QC, wC) {
        const bC = this.programs.get(ZC);
        if (bC || this.unbuildable.has(ZC)) return null !== bC && void 0 !== bC ? bC : null;
        const nC = this.drawDefines.modelPackVariant;
        let fC;
        try {
          const CC = function(CC) {
              return (0, hz.d)(CC, "model")
            }(nC),
            ZC = Jn(CC, wC, QC.vertexCode, QC.fragmentCode);
          fC = hn(fw({
            defines: Qb(zC),
            ...ZC,
            pluginUniforms: QC.pluginUniforms
          }), CC, wC, !!this.sunShadow)
        } catch (FC) {
          return this.unbuildable.add(ZC), this.warnOnce(`build:${ZC}`, `could not build a shader pack program for ${CC.name}, which draws without the pack: ${String(FC)}`), null
        }
        const oC = ab(nC, !!this.sunShadow),
          qC = {
            group: this.packInputs.bindGroupFor(null, oC),
            layout: sb(this.device, {
              depth: !1,
              sunShadow: oC
            })
          };
        return this.createProgram(ZC, fC, function(CC) {
          return `standard-sp${CC}`
        }(nC), qC)
      }
      lineProgramFor(CC, zC, ZC) {
        const QC = PC(CC, ZC, zC, this.view);
        let wC = this.linePrograms.get(QC);
        var bC;
        return wC || (wC = this.createProgram(`lines#${QC}`, (bC = function(CC) {
          const zC = new Map;
          for (let ZC = 0; ZC < qC.length; ZC++) CC & 1 << ZC && zC.set(qC[ZC], !0);
          return zC
        }(QC), Ww({
          defines: bC,
          vertex: qw,
          fragment: Fw,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(QC, wC)), wC
      }
      createProgram(CC, zC, ZC) {
        var QC;
        let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const bC = this.nextProgramId++,
          nC = `${ZC}-${bC}`,
          fC = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          oC = [{
            binding: 0,
            visibility: fC,
            buffer: {
              type: "uniform"
            }
          }];
        for (const WC of zC.textures) oC.push({
          binding: WC.binding,
          visibility: fC,
          texture: {
            viewDimension: WC.dimension
          }
        }), oC.push({
          binding: WC.samplerBinding,
          visibility: fC,
          sampler: {}
        });
        const qC = this.device.createBindGroupLayout({
            label: nC,
            entries: oC
          }),
          FC = {
            key: CC,
            id: bC,
            kind: ZC,
            program: zC,
            vertex: this.device.createShaderModule({
              label: `${nC}-vertex`,
              code: zC.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${nC}-fragment`,
              code: zC.fragment
            }),
            materialLayout: qC,
            pipelineLayout: this.device.createPipelineLayout({
              label: nC,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, qC, ...wC ? [wC.layout] : []]
            }),
            packGroup: null !== (QC = null === wC || void 0 === wC ? void 0 : wC.group) && void 0 !== QC ? QC : null,
            failed: !1
          };
        return this.programs.set(CC, FC), FC
      }
      writeFrameUniforms() {
        const CC = this.frameUniforms;
        Sb(this.view, CC), this.device.queue.writeBuffer(this.frameBuffer, 0, CC)
      }
      materialInstance(CC, zC) {
        let ZC = this.materials.get(CC);
        if (!ZC) {
          const zC = new Map;
          this.materials.set(CC, zC), CC.Tm.addOnce((() => {
            for (const CC of zC.values()) CC.released = !0, this.resources.destroyBuffer(CC.buffer);
            this.materials.delete(CC)
          })), ZC = zC
        }
        let QC = ZC.get(zC.key);
        return QC || (QC = this.newMaterialInstance(CC, null, zC), ZC.set(zC.key, QC)), QC
      }
      modelInstance(CC, zC) {
        const ZC = this.modelSlot(CC);
        let QC = ZC.instances.get(zC.key);
        return QC || (QC = this.newMaterialInstance(CC, CC, zC), ZC.instances.set(zC.key, QC)), QC
      }
      modelSlot(CC) {
        let zC = CC.gpu[hC.e.lite];
        return zC || (zC = new Yn(this.resources), CC.gpu[hC.e.lite] = zC), zC
      }
      newMaterialInstance(CC, zC, ZC) {
        const QC = ZC.program.material.floats,
          wC = new Float32Array(QC),
          bC = new Map;
        return {
          owner: CC,
          model: zC,
          program: ZC,
          data: wC,
          uploaded: new Float32Array(QC).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${CC.name}-uniforms`,
            size: Math.max(16, 4 * QC),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: bC,
          ubo: new gb(ZC.program.material.slots, wC, bC),
          bindGroup: null,
          bound: new Array(2 * ZC.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(CC) {
        var zC;
        const ZC = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: pw + Pw,
            fragment: pw + Gw,
            attributes: [],
            material: Sw,
            textures: []
          }, "earthSky"),
          QC = this.earthSkyUniforms ??= this.newMaterialInstance(Kn, null, ZC);
        this.earthSkyFrom !== CC && (this.earthSkyFrom = CC, QC.data.fill(0)), ew(QC.ubo, CC, this.view);
        const wC = this.vertexInputs(ZC, Kn, "earthSky", ZC, null);
        if (ZC.failed || !wC || !this.bindMaterial(QC, !1)) return;
        const bC = null !== (zC = wC.state) && void 0 !== zC ? zC : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          nC = this.makeDraw(ZC, wC, bC, QC, 1);
        nC.count = Nw.length;
        const fC = hw(CC, this.view);
        nC.slotOffset = this.writeMeshSlot(fC, 1), this.lists.skyDraws.push(nC)
      }
      uploadIfChanged(CC) {
        const {
          data: zC,
          uploaded: ZC
        } = CC;
        for (let QC = 0; QC < zC.length; QC++)
          if (zC[QC] !== ZC[QC]) return ZC.set(zC), void this.device.queue.writeBuffer(CC.buffer, 0, zC)
      }
      bindMaterial(CC, zC) {
        return CC.frame !== this.frame && (CC.frame = this.frame, zC || this.uploadIfChanged(CC), CC.bindable = this.bindTextures(CC)), CC.bindable
      }
      bindTextures(CC) {
        const {
          program: zC,
          bound: ZC
        } = CC, QC = zC.program.textures;
        let wC = !CC.bindGroup,
          bC = !0;
        for (let nC = 0; nC < QC.length; nC++) {
          const zC = CC.textures.get(QC[nC].name),
            fC = zC ? this.resources.boundTexture(zC) : null;
          fC ? ZC[2 * nC] === fC.view && ZC[2 * nC + 1] === fC.sampler || (ZC[2 * nC] = fC.view, ZC[2 * nC + 1] = fC.sampler, wC = !0) : (zC || CC.ubo.expected.has(QC[nC].name) || this.warnOnce(`texture:${CC.owner.name}:${QC[nC].name}`, `${CC.owner.name} has no ${QC[nC].name}`), bC = !1)
        }
        if (!bC) return wC && (CC.bindGroup = null), !1;
        if (wC) {
          const wC = [{
            binding: 0,
            resource: {
              buffer: CC.buffer
            }
          }];
          for (let CC = 0; CC < QC.length; CC++) wC.push({
            binding: QC[CC].binding,
            resource: ZC[2 * CC]
          }), wC.push({
            binding: QC[CC].samplerBinding,
            resource: ZC[2 * CC + 1]
          });
          CC.bindGroup = this.device.createBindGroup({
            label: `${CC.owner.name}-material`,
            layout: zC.materialLayout,
            entries: wC
          })
        }
        return !0
      }
      writeMeshSlot(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, CC, zC, ZC), this.slotCount++ * sQ
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(CC, zC, ZC, QC, wC) {
        let bC = this.inputs.get(CC);
        if (!bC || bC.program !== QC || !xb(zC, bC, this.resources, wC)) {
          var nC;
          if (bC = null !== (nC = this.vertexLayouts.resolveInputs(zC, ZC, QC, wC)) && void 0 !== nC ? nC : void 0, !bC) return null;
          this.inputs.set(CC, bC)
        }
        return this.withGpuBuffers(bC)
      }
      meshInputs(CC, zC, ZC) {
        const QC = this.inputs.get(CC);
        if (QC && this.inputsStamped(QC, CC, ZC, zC)) return this.withGpuBuffers(QC);
        const wC = CC.owner,
          bC = bb(CC),
          nC = this.vertexInputs(CC, wC, wC.name, zC, bC);
        return nC && (nC.geometry = nb(CC), nC.instanceLayout = this.drawDefines.instanceLayout(wC, ZC)), nC
      }
      inputsStamped(CC, zC, ZC, QC) {
        return function(CC, zC, ZC, QC) {
          return CC.program === ZC && CC.geometry === nb(zC) && CC.instanceLayout === QC
        }(CC, zC, QC, this.drawDefines.instanceLayout(zC.owner, ZC))
      }
      withGpuBuffers(CC) {
        return jb(CC, this.resources, this.zeroBuffer) ? CC : null
      }
      instanceBuffersFit(CC, zC, ZC) {
        const QC = Lb(zC, ZC, this.resources, this.zeroBuffer);
        if (QC) {
          const wC = zC.ends[QC.index] - zC.offsets[QC.index] + zC.o_[QC.index];
          return this.warnOnce(`overrun:${CC}`, `${CC} draws ${ZC} instances from a ${wC}-byte buffer (${QC.needed} needed)`), !1
        }
        return !0
      }
      createBinding(CC, zC, ZC, QC) {
        const wC = `${zC._colorFormat}|${zC._depthStencilFormat}|${zC._depthCompare}|${zC._sampleCount}`,
          bC = nz(this.device, zC);
        if (CC === this.skyLastRenderable) {
          let ZC = null;
          return {
            renderable: CC,
            pipeline: bC,
            draw: CC => ZC ? this.drawSky(CC, zC, wC, ZC) : 0,
            update: CC => {
              ZC = CC
            }
          }
        }
        return {
          renderable: CC,
          pipeline: bC,
          draw: CC => (QC ? QC.execute(CC, zC, wC) : 0) + this.drawList(CC, zC, wC, ZC)
        }
      }
      drawSky(CC, zC, ZC, QC) {
        const wC = this.lists.skyDraws,
          bC = wC.length > 0;
        if (bC) {
          var nC;
          const ZC = (null !== (nC = zC._depthCompare) && void 0 !== nC ? nC : Zz).startsWith("greater") ? 0 : 1;
          CC.setViewport(0, 0, QC.targetWidth, QC.targetHeight, ZC, ZC)
        }
        const fC = this.drawList(CC, zC, ZC, wC);
        return bC && CC.setViewport(0, 0, QC.targetWidth, QC.targetHeight, 0, 1), fC
      }
      drawList(CC, zC, ZC, QC) {
        let wC = 0;
        const bC = this.binder;
        bC.reset();
        for (const nC of QC) {
          const QC = this.pipelineFor(nC, zC, ZC);
          QC && (bC.bind(CC, nC, QC, this.meshSlots.bindGroup, nC.slotOffset), nC.indexBuffer ? CC.drawIndexed(nC.count, nC.instances, nC.first, 0, 0) : CC.draw(nC.count, nC.instances, nC.first, 0), wC++)
        }
        return wC
      }
      pipelineFor(CC, zC, ZC) {
        var QC, wC;
        if (CC.program.failed) return null;
        const bC = CC.inputs;
        if (bC.pipeline && bC.pipelineTarget === ZC) return bC.pipeline;
        const nC = `${CC.pipelineKey}|${ZC}`,
          fC = this.pipelines.get(nC);
        if (void 0 !== fC) return fC && (bC.pipeline = fC, bC.pipelineTarget = ZC), fC || null;
        this.pipelines.set(nC, null);
        const {
          program: oC,
          layout: qC,
          state: FC
        } = CC, WC = {
          label: `standard-${oC.id}`,
          layout: oC.pipelineLayout,
          vertex: {
            module: oC.vertex,
            entryPoint: "main",
            buffers: qC.buffers
          },
          fragment: OC({
            module: oC.fragment,
            entryPoint: "main"
          }, zC, FC.blend, FC.colourWrite),
          depthStencil: zC._depthStencilFormat ? {
            format: zC._depthStencilFormat,
            depthCompare: null !== (QC = null !== (wC = FC.depthCompare) && void 0 !== wC ? wC : zC._depthCompare) && void 0 !== QC ? QC : Zz,
            depthWriteEnabled: FC.depthWrite,
            depthBias: FC.depthBias,
            depthBiasSlopeScale: FC.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: zC._sampleCount
          },
          primitive: {
            topology: FC.topology,
            frontFace: FC.frontFace,
            cullMode: FC.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(WC).then((CC => {
          this.compiling--, this.pipelines.set(nC, CC)
        }), (CC => {
          this.compiling--, this.reportFailure(oC, nC, CC)
        })), null
      }
      forEachSunShadowCaster(CC) {
        const zC = this.caster,
          ZC = (ZC, QC, wC) => {
            const bC = ZC.unit && function(CC) {
              const zC = CC.material.model;
              return null !== zC && (zC.lifeform || zC.item) && zC.castsSunShadow && "triangle-list" === CC.state.topology
            }(ZC) ? bb(ZC.unit) : null;
            if (!bC) return;
            const nC = ZC.unit.owner;
            switch (zC.geometry = bC, zC.skip = nC.noSunShadowVertices, zC.indexed = null !== ZC.indexBuffer, zC.first = ZC.first, zC.count = ZC.count, zC.fN = QC, zC.worldAt = wC, zC.instances = null, zC.instanceCount = 1, zC.thin = !1, zb(nC)) {
              case "thin": {
                const CC = nC._thinInstanceDataStorage.matrixData;
                if (!CC) return;
                zC.instances = CC, zC.instanceCount = Math.min(ZC.instances, CC.length / 16), zC.thin = !0;
                break
              }
              case "instanced": {
                const CC = this.resources.batchUploads.get(nC);
                if (!CC || CC.frame !== this.frame || !this.writeBatchCasters(CC)) return;
                break
              }
            }
            CC(zC)
          };
        for (const QC of this.lists.opaqueDraws) ZC(QC, this.meshSlots.data, QC.slotOffset / 4);
        this.thinBundle.forEachDrawn(ZC)
      }
      writeBatchCasters(CC) {
        const {
          caster: zC
        } = this, ZC = CC.packedMatrices, QC = CC.count;
        zC.instances = ZC, zC.instanceCount = QC;
        let wC = -1;
        for (let bC = 0; bC < QC; bC++) {
          const zC = Hn(CC.packedRowMesh(bC));
          zC && wC < 0 ? (this.casterWorlds.length < 16 * QC && (this.casterWorlds = new Float32Array(ZC.length)), this.casterWorlds.set(ZC.subarray(0, 16 * bC)), wC = bC) : !zC && wC >= 0 && (this.casterWorlds.set(ZC.subarray(16 * bC, 16 * bC + 16), 16 * wC), wC++)
        }
        return wC >= 0 && (zC.instances = this.casterWorlds, zC.instanceCount = wC), zC.instanceCount > 0
      }
      async reportFailure(CC, zC, ZC) {
        const QC = [];
        let wC = !0;
        for (const [bC, nC] of [
            ["vertex", CC.vertex],
            ["fragment", CC.fragment]
          ]) {
          const CC = await nC.getCompilationInfo();
          for (const zC of CC.messages) wC &&= "error" !== zC.type, QC.push(`${bC}:${zC.lineNum}:${zC.linePos} ${zC.type}: ${zC.message}`)
        }
        if (wC && !CC.packGroup) return this.pipelines.set(zC, !1), console.error(`Lite: pipeline ${zC} failed`, ZC), void Lw("mesh", CC.kind, ZC);
        CC.failed || (CC.failed = !0, console.error(`Lite: program ${CC.id} failed`, ZC, QC.join("\n"), {
          program: CC.program,
          key: CC.key
        }), Lw("mesh", CC.kind, ZC, wC ? null : QC[0]))
      }
    }

    function Hn(CC) {
      var zC, ZC;
      const QC = null === (zC = CC.ZE) || void 0 === zC || null === (ZC = zC.aShaderPackItem) || void 0 === ZC ? void 0 : ZC.x;
      return void 0 !== QC && 0 !== (QC & oz.i)
    }
    var En = ZC(41494),
      Xn = ZC(41498),
      cn = ZC(41507),
      un = ZC(41457);
    const rn = [0, 3, 1, 4, 2, 5];

    function sn(CC, zC, ZC, QC, wC) {
      const bC = ZC[0].width;
      try {
        return wC ? function(CC, zC, ZC) {
          const QC = (0, un.c)(CC, ZC, ZC, 6);
          for (let wC = 0; wC < 6; wC++)(0, un.d)(CC, QC, wC, zC[rn[wC]], {
            invertY: !1
          });
          return QC.texture
        }(CC, ZC, bC) : function(CC, zC, ZC, QC) {
          const wC = CC.createTexture({
            label: "sink-cube",
            size: {
              width: ZC,
              height: ZC,
              depthOrArrayLayers: 6
            },
            format: QC,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let bC = 0; bC < 6; bC++) CC.queue.copyExternalImageToTexture({
            source: zC[rn[bC]]
          }, {
            texture: wC,
            origin: {
              x: 0,
              y: 0,
              z: bC
            }
          }, {
            width: ZC,
            height: ZC
          });
          return wC
        }(zC, ZC, bC, 1 === QC ? "r8unorm" : "rgba8unorm")
      } finally {
        Tn(ZC)
      }
    }

    function Tn(CC) {
      for (const zC of null !== CC && void 0 !== CC ? CC : []) null === zC || void 0 === zC || zC.close()
    }
    async function an(CC) {
      const zC = [],
        ZC = [];
      if (await Promise.all(CC.map(((CC, QC) => (zC[QC] = null, CC.then((CC => {
          zC[QC] = CC
        }), (CC => {
          ZC.push(CC)
        })))))), ZC.length > 0) throw Tn(zC), ZC[0];
      return zC
    }
    class tn {
      constructor(CC) {
        this.HW = CC, this.starts = [], this.lengths = [], this.used = 0, CC > 0 && (this.starts.push(0), this.lengths.push(CC))
      }
      allocate(CC) {
        const {
          starts: zC,
          lengths: ZC
        } = this;
        for (let QC = 0; QC < zC.length; QC++) {
          if (ZC[QC] < CC) continue;
          const wC = zC[QC];
          return ZC[QC] === CC ? (zC.splice(QC, 1), ZC.splice(QC, 1)) : (zC[QC] += CC, ZC[QC] -= CC), this.used += CC, wC
        }
        return -1
      }
      free(CC, zC) {
        this.used -= zC;
        const ZC = Math.min(CC + zC, this.HW);
        ZC > CC && this.release(CC, ZC - CC)
      }
      grow(CC) {
        const zC = this.HW;
        this.HW = CC, this.release(zC, CC - zC)
      }
      truncate(CC) {
        const {
          starts: zC,
          lengths: ZC
        } = this;
        for (let QC = zC.length - 1; QC >= 0 && zC[QC] + ZC[QC] > CC; QC--) zC[QC] >= CC ? (zC.splice(QC, 1), ZC.splice(QC, 1)) : ZC[QC] = CC - zC[QC];
        this.HW = CC
      }
      release(CC, zC) {
        const {
          starts: ZC,
          lengths: QC
        } = this;
        let wC = 0,
          bC = ZC.length;
        for (; wC < bC;) {
          const zC = wC + bC >> 1;
          ZC[zC] < CC ? wC = zC + 1 : bC = zC
        }
        const nC = wC,
          fC = nC > 0 && ZC[nC - 1] + QC[nC - 1] === CC,
          oC = nC < ZC.length && CC + zC === ZC[nC];
        fC && oC ? (QC[nC - 1] += zC + QC[nC], ZC.splice(nC, 1), QC.splice(nC, 1)) : fC ? QC[nC - 1] += zC : oC ? (ZC[nC] = CC, QC[nC] += zC) : (ZC.splice(nC, 0, CC), QC.splice(nC, 0, zC))
      }
    }
    const Dn = 256;
    class jn {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = CC, this.onReplaced = zC, this.mergeGap = ZC, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.np = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const wC = Math.max(Dn, Math.ceil(QC / Dn) * Dn);
        this.bytes = new Uint8Array(wC), this.words = new Uint32Array(this.bytes.buffer), this.np = new tn(wC / Dn)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(CC) {
        return Math.max(1, Math.ceil(CC / Dn)) * Dn
      }
      allocate(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CC;
        const QC = jn.slotBytes(CC),
          wC = QC / Dn;
        let bC = this.np.allocate(wC);
        bC < 0 && (this.grow(this.np.HW + wC), bC = this.np.allocate(wC));
        const nC = bC * Dn;
        return this.growTo(nC + Math.max(ZC, QC)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, nC, nC + QC), zC && this.bytes.set(new Uint8Array(zC.buffer, zC.byteOffset, Math.min(zC.byteLength, QC)), nC), this.markDirty(nC, nC + QC), nC
      }
      growTo(CC) {
        const zC = Math.ceil(CC / Dn);
        zC > this.np.HW && this.grow(zC)
      }
      free(CC, zC) {
        this.freed.push(CC, zC)
      }
      write(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (QC <= 0) return;
        QC <= 1024 && 0 === (3 & (CC | ZC | QC)) ? this.copyWords(CC >> 2, zC.buffer, ZC >> 2, QC >> 2) : this.bytes.set(new Uint8Array(zC.buffer, ZC, QC), CC);
        let bC = CC + QC;
        if (wC) {
          const zC = CC + 4 * Math.ceil(QC / 4);
          this.bytes.fill(0, bC, zC), bC = zC
        }
        this.markDirty(CC, bC)
      }
      copyWords(CC, zC, ZC, QC) {
        let wC = this.sourceWords.get(zC);
        wC || (wC = new Uint32Array(zC, 0, zC.byteLength >> 2), this.sourceWords.set(zC, wC));
        const bC = this.words;
        for (let nC = 0; nC < QC; nC++) bC[CC + nC] = wC[ZC + nC]
      }
      move(CC, zC, ZC) {
        this.bytes.copyWithin(zC, CC, CC + ZC), this.markDirty(zC, zC + ZC)
      }
      flush() {
        for (const zC of this.retired) this.onReplaced(zC), zC.destroy();
        this.retired.length = 0;
        const CC = this.dirtyStarts.length;
        if (CC > 0) {
          const {
            dirtyStarts: zC,
            dirtyEnds: ZC,
            order: QC
          } = this;
          QC.length = CC;
          for (let fC = 0; fC < CC; fC++) QC[fC] = fC;
          CC > 1 && QC.sort(((CC, ZC) => zC[CC] - zC[ZC]));
          const wC = this.mergeGap;
          let bC = zC[QC[0]],
            nC = ZC[QC[0]];
          for (let fC = 1; fC < CC; fC++) {
            const CC = QC[fC];
            zC[CC] - nC <= wC ? nC = Math.max(nC, ZC[CC]) : (this.send(bC, nC), bC = zC[CC], nC = ZC[CC])
          }
          this.send(bC, nC), zC.length = 0, ZC.length = 0
        }
        this.holding = !1
      }
      yR() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const CC = this.freed;
        for (let zC = 0; zC < CC.length; zC += 2) this.np.free(CC[zC] / Dn, CC[zC + 1] / Dn);
        CC.length = 0
      }
      send(CC, zC) {
        this.device.queue.writeBuffer(this.gpu, CC, this.bytes.buffer, CC, zC - CC);
        for (const ZC of this.replaced) {
          const QC = Math.min(zC, ZC.size);
          QC > CC && this.device.queue.writeBuffer(ZC, CC, this.bytes.buffer, CC, QC - CC)
        }
      }
      markDirty(CC, zC) {
        CC &= -4, zC = zC + 3 & -4, this.holding ? (this.dirtyStarts.push(CC), this.dirtyEnds.push(zC)) : this.send(CC, zC)
      }
      grow(CC) {
        const zC = this.np.HW,
          ZC = Math.max(2 * zC, CC),
          QC = new Uint8Array(ZC * Dn);
        QC.set(this.bytes);
        const wC = this.gpu;
        this.gpu = this.createGpu(QC.byteLength), this.bytes = QC, this.words = new Uint32Array(QC.buffer), this.np.grow(ZC), wC && (this.replaced.push(wC), this.onReplaced(wC)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, zC * Dn)
      }
      createGpu(CC) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: CC,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function yn(CC) {
      return Array.isArray(CC) ? new Float32Array(CC) : CC
    }

    function Ln(CC, zC, ZC, QC, wC) {
      const bC = Yw(wC),
        nC = Math.min(wC, QC.byteLength);
      if (bC === nC && QC.byteOffset % 4 === 0) return void CC.queue.writeBuffer(zC, ZC, QC.buffer, QC.byteOffset, bC);
      const fC = new Uint8Array(bC);
      fC.set(new Uint8Array(QC.buffer, QC.byteOffset, nC)), CC.queue.writeBuffer(zC, ZC, fC)
    }

    function Un(CC, zC, ZC) {
      const QC = "linear",
        wC = "nearest";
      let bC = wC,
        nC = wC,
        fC = "nearest",
        oC = !zC;
      switch (CC) {
        case 11:
          bC = QC, nC = QC;
          break;
        case 3:
          bC = QC, nC = QC, fC = zC ? "linear" : "nearest";
          break;
        case 8:
          fC = zC ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          nC = QC;
          break;
        case 6:
          nC = QC, fC = zC ? "linear" : "nearest";
          break;
        case 7:
          nC = QC, oC = !0;
          break;
        case 9:
          bC = QC;
          break;
        case 10:
          bC = QC, fC = zC ? "linear" : "nearest";
          break;
        case 2:
          bC = QC, nC = QC, ZC > 1 ? (fC = "linear", oC = !1) : oC = !0;
          break;
        case 12:
          bC = QC, oC = !0;
          break;
        default:
          oC = !0
      }
      return ZC > 1 && !oC ? {
        magFilter: QC,
        minFilter: QC,
        mipmapFilter: "linear",
        maxAnisotropy: ZC
      } : {
        magFilter: bC,
        minFilter: nC,
        mipmapFilter: fC,
        ...oC ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Bn(CC) {
      return 0 === CC ? "clamp-to-edge" : 2 === CC ? "mirror-repeat" : "repeat"
    }
    class On {
      constructor(CC, zC) {
        let {
          vertexArena: ZC = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = CC, this.device = zC, this.buffers = new WeakMap, this.T6 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = ZC ? new jn(zC, (CC => {
          var zC;
          null === (zC = this.onDestroy) || void 0 === zC || zC.call(this, CC), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var CC;
        null === (CC = this.arena) || void 0 === CC || CC.flush()
      }
      endUploadFrame() {
        var CC;
        null === (CC = this.arena) || void 0 === CC || CC.yR()
      }
      vertexBufferCreated(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZC ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(CC);
        const wC = yn(zC);
        CC.HW = wC.byteLength, this.buffers.set(CC, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: ZC && null !== this.arena,
          pending: wC,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: QC
        })
      }
      vertexBufferUpdated(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        const wC = this.buffers.get(CC);
        if (!wC) return;
        const bC = yn(zC),
          nC = void 0 === QC ? bC.byteLength : Math.min(QC, bC.byteLength);
        this.update(wC, bC, ZC, nC)
      }
      vertexBufferFloatsUpdated(CC, zC, ZC, QC) {
        const wC = this.buffers.get(CC);
        if (!wC) return;
        const bC = ZC * Float32Array.BYTES_PER_ELEMENT,
          nC = (QC - ZC) * Float32Array.BYTES_PER_ELEMENT;
        wC.slot >= 0 && nC > 0 && bC + nC <= wC.size ? this.writeSlot(wC, bC, zC, zC.byteOffset + bC, nC, !1) : wC.gpu && nC > 0 && bC + nC <= wC.gpu.size ? this.device.queue.writeBuffer(wC.gpu, bC, zC.buffer, zC.byteOffset + bC, nC) : this.update(wC, zC.subarray(ZC, QC), bC, nC)
      }
      indexBufferCreated(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(CC);
        const QC = function(CC) {
          if (CC instanceof Uint16Array || CC instanceof Uint32Array) return CC;
          for (let zC = 0; zC < CC.length; zC++)
            if (CC[zC] >= 65535) return new Uint32Array(CC);
          return new Uint16Array(CC)
        }(zC);
        CC.is32Bits = 4 === QC.BYTES_PER_ELEMENT, CC.HW = QC.byteLength, this.buffers.set(CC, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: QC,
          ownsPending: QC !== zC,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: ZC
        })
      }
      bufferDeleted(CC) {
        const zC = this.buffers.get(CC);
        null !== zC && void 0 !== zC && zC.gpu ? (this.destroyBuffer(zC.gpu), this.gpuBuffersVersion++) : zC && zC.slot >= 0 && (this.arena.free(zC.slot, zC.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(CC)
      }
      update(CC, zC, ZC, QC) {
        if (CC.slot >= 0) this.updateSlot(CC, zC, ZC, QC);
        else if (CC.gpu) {
          if (ZC + Yw(QC) > CC.gpu.size) {
            const zC = this.device.createBuffer({
                label: CC.label,
                size: Yw(Math.max(2 * CC.gpu.size, ZC + QC)),
                usage: CC.usage | GPUBufferUsage.COPY_SRC
              }),
              wC = this.device.createCommandEncoder();
            wC.copyBufferToBuffer(CC.gpu, 0, zC, 0, CC.gpu.size), this.device.queue.submit([wC.finish()]), this.destroyBuffer(CC.gpu), this.gpuBuffersVersion++, CC.gpu = zC
          }
          Ln(this.device, CC.gpu, ZC, zC, QC)
        } else {
          const bC = new Uint8Array(zC.buffer, zC.byteOffset, QC),
            nC = CC.pending;
          if (nC && CC.ownsPending && ZC + QC <= nC.byteLength) new Uint8Array(nC.buffer, nC.byteOffset, nC.byteLength).set(bC, ZC);
          else if (nC && 0 === ZC && QC === nC.byteLength && zC.byteLength === QC) CC.pending = zC, CC.ownsPending = !1;
          else {
            var wC;
            const zC = new Uint8Array(Math.max(null !== (wC = null === nC || void 0 === nC ? void 0 : nC.byteLength) && void 0 !== wC ? wC : 0, ZC + QC));
            nC && zC.set(new Uint8Array(nC.buffer, nC.byteOffset, nC.byteLength)), zC.set(bC, ZC), CC.pending = zC, CC.ownsPending = !0
          }
        }
      }
      updateSlot(CC, zC, ZC, QC) {
        const wC = this.arena;
        ZC + Yw(QC) > CC.size && (CC.size = Yw(Math.max(2 * CC.size, ZC + QC)), wC.growTo(CC.slot + CC.size), this.gpuBuffersVersion++), 0 === QC ? this.writeSlot(CC, ZC, Vn, 0, 4, !1) : this.writeSlot(CC, ZC, zC, zC.byteOffset, QC, !0)
      }
      writeSlot(CC, zC, ZC, QC, wC, bC) {
        const nC = zC + (bC ? Yw(wC) : wC);
        nC > CC.slotBytes && this.moveSlot(CC, nC), this.arena.write(CC.slot + zC, ZC, QC, wC, bC)
      }
      moveSlot(CC, zC) {
        const ZC = this.arena,
          QC = jn.slotBytes(Math.max(zC, Math.min(2 * CC.slotBytes, CC.size))),
          wC = ZC.allocate(QC, null, CC.size);
        ZC.move(CC.slot, wC, CC.slotBytes), ZC.free(CC.slot, CC.slotBytes), CC.slot = wC, CC.slotBytes = QC, this.gpuBuffersVersion++
      }
      cover(CC, zC) {
        const ZC = this.buffers.get(CC);
        if (!ZC || ZC.slot < 0) return !1;
        const QC = Math.min(zC, ZC.size);
        return !(QC <= ZC.slotBytes) && (this.moveSlot(ZC, QC), !0)
      }
      destroyBuffer(CC) {
        var zC;
        null === (zC = this.onDestroy) || void 0 === zC || zC.call(this, CC), CC.destroy()
      }
      gpuBuffer(CC) {
        const zC = this.buffers.get(CC);
        if (!zC) return null;
        if (zC.slot >= 0) return this.arena.buffer;
        if (zC.arena && zC.pending) {
          const CC = zC.pending,
            ZC = this.arena;
          return zC.size = Yw(CC.byteLength), zC.slotBytes = jn.slotBytes(function(CC) {
            const zC = new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength);
            let ZC = zC.length;
            if (CC.byteOffset % 4 === 0) {
              for (; ZC % 4 !== 0 && 0 === zC[ZC - 1];) ZC--;
              if (ZC % 4 === 0) {
                const zC = new Uint32Array(CC.buffer, CC.byteOffset, ZC / 4);
                let QC = zC.length;
                for (; QC > 0 && 0 === zC[QC - 1];) QC--;
                ZC = 4 * QC
              }
            }
            for (; ZC > 0 && 0 === zC[ZC - 1];) ZC--;
            return ZC
          }(CC)), zC.slot = ZC.allocate(zC.slotBytes, CC, zC.size), zC.pending = null, ZC.buffer
        }
        if (!zC.gpu && zC.pending) {
          const CC = zC.pending;
          zC.gpu = this.device.createBuffer({
            label: zC.label,
            size: Yw(CC.byteLength),
            usage: zC.usage
          }), Ln(this.device, zC.gpu, 0, CC, CC.byteLength), zC.pending = null
        }
        return zC.gpu
      }
      gpuOffset(CC) {
        var zC, ZC;
        const QC = null !== (zC = null === (ZC = this.buffers.get(CC)) || void 0 === ZC ? void 0 : ZC.slot) && void 0 !== zC ? zC : -1;
        return QC < 0 ? 0 : QC
      }
      gpuEnd(CC) {
        var zC, ZC;
        const QC = this.buffers.get(CC);
        return QC ? QC.slot >= 0 ? QC.slot + QC.size : null !== (zC = null === (ZC = QC.gpu) || void 0 === ZC ? void 0 : ZC.size) && void 0 !== zC ? zC : 0 : 0
      }
      vertexInput(CC, zC, ZC) {
        var QC, wC, bC, nC;
        return null !== (QC = null !== (wC = ZC && this.modelInput(ZC, zC)) && void 0 !== wC ? wC : null === (bC = null !== (nC = this.T6.get(CC)) && void 0 !== nC ? nC : this.batchUploads.get(CC)) || void 0 === bC ? void 0 : bC.inputs[zC]) && void 0 !== QC ? QC : null
      }
      modelInput(CC, zC) {
        const ZC = this.geometrySlot(CC);
        let QC = ZC.inputs.get(zC);
        if (void 0 === QC) {
          const wC = CC.vertexAttributes.find((CC => CC.kind === zC));
          QC = wC ? new yC(this.modelKey(ZC, wC.data, !1), wC.offset, wC.stride, wC.components, !1, wC.glType, wC.isNormalized) : null, ZC.inputs.set(zC, QC)
        }
        return QC
      }
      modelIndex(CC) {
        return CC.indexData && this.modelKey(this.geometrySlot(CC), CC.indexData, !0)
      }
      geometrySlot(CC) {
        let zC = CC.gpu[hC.e.lite];
        if (!zC) {
          const ZC = new Map,
            QC = () => {
              for (const CC of ZC.values()) this.bufferDeleted(CC)
            },
            wC = CC => {
              const zC = ZC.get(CC);
              zC && this.vertexBufferUpdated(zC, CC)
            };
          zC = {
            keys: ZC,
            inputs: new Map,
            release: QC,
            updated: wC
          }, CC.gpu[hC.e.lite] = zC
        }
        return zC
      }
      modelKey(CC, zC, ZC) {
        let QC = CC.keys.get(zC);
        if (!QC) {
          if (ZC) {
            const CC = {
              HW: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(CC, zC, "model-indices"), QC = CC
          } else QC = {
            HW: 0
          }, this.vertexBufferCreated(QC, zC, !1, "model-vertices");
          CC.keys.set(zC, QC)
        }
        return QC
      }
      indexFormat(CC) {
        return CC.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(CC, zC) {
        --CC.refs > 0 || (this.releaseTexture(CC), Tn(CC.images), null !== zC && this.textures.delete(zC))
      }
      load(CC, zC) {
        const ZC = zC.decoded = async function(CC) {
          if ("cube" === CC.kind) return async function(CC) {
            if (6 !== CC.length) throw new Error(`${CC.length} files where six faces were expected`);
            const zC = await an(CC.map((CC => Xw(CC)))),
              ZC = zC[0].width;
            return an(zC.map((async CC => {
              if (CC.width === ZC && CC.height === ZC) return CC;
              try {
                return await createImageBitmap(CC, {
                  ...Ew,
                  resizeWidth: ZC,
                  resizeHeight: ZC
                })
              } finally {
                CC.close()
              }
            })))
          }(CC.files);
          if ("data" === CC.kind && CC.data) return [await createImageBitmap(new Blob([CC.data]), Ew)];
          return [await Xw(kn(CC))]
        }(CC.source).then((CC => {
          0 === zC.refs ? Tn(CC) : zC.images = CC
        }));
        this.track(zC, kn(CC.source), ZC, (() => {
          zC.wanted && !zC.failed && zC.refs > 0 && this.upload(CC, zC)
        }))
      }
      canvasUpdated(CC, zC, ZC) {
        const {
          state: QC
        } = this.textureSlot(CC);
        QC.dynamicSource = {
          invertY: zC,
          premultiplied: ZC
        }, QC.dynamic && this.pushDynamic(CC.source, QC)
      }
      async atlasArray(CC, zC, ZC) {
        const QC = await sw(this.device, CC, zC, ZC);
        if (!this.atlasBindings.has(QC)) {
          const CC = (0, En.c)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(QC, {
            view: QC.texture.createView({
              dimension: "2d-array"
            }),
            sampler: CC
          })
        }
        return QC
      }
      boundTexture(CC) {
        const zC = this.atlasBindings.get(CC);
        if (zC) return zC;
        const ZC = CC;
        if (ZC.released) return null;
        const QC = this.textureSlot(ZC, !0),
          {
            state: wC
          } = QC;
        if (!wC.view && (wC.wanted = !0, wC.loading || wC.failed || this.upload(ZC, wC), !wC.view)) return null;
        const bC = this.chosenSampler(ZC, QC),
          nC = QC.bound;
        return nC && nC.view === wC.view && nC.sampler === bC ? nC : (QC.bound = {
          view: wC.view,
          sampler: bC
        }, QC.bound)
      }
      textureLoaded(CC) {
        var zC, ZC;
        return null !== (zC = null === (ZC = CC.gpu[hC.e.lite]) || void 0 === ZC ? void 0 : ZC.state.decoded) && void 0 !== zC ? zC : null
      }
      textureFailed(CC) {
        var zC;
        return !0 === (null === (zC = CC.gpu[hC.e.lite]) || void 0 === zC ? void 0 : zC.state.failed)
      }
      chosenSampler(CC, zC) {
        const {
          samplingMode: ZC,
          wrapU: QC,
          wrapV: wC
        } = CC.sampler, bC = zC.state.hasMips, nC = function(CC, zC) {
          const {
            bilinear: ZC,
            trilinear: QC
          } = hC.h;
          return !zC && CC !== ZC || 11 !== CC && CC !== QC && CC !== ZC ? 1 : 4
        }(ZC, bC), fC = zC.sampler;
        if (fC && fC.samplingMode === ZC && fC.hasMips === bC && fC.anisotropy === nC && fC.wrapU === QC && fC.wrapV === wC) return fC.sampler;
        const oC = this.samplerFor(ZC, bC, nC, QC, wC);
        return zC.sampler = {
          samplingMode: ZC,
          hasMips: bC,
          anisotropy: nC,
          wrapU: QC,
          wrapV: wC,
          sampler: oC
        }, oC
      }
      releaseTexture(CC) {
        var zC, ZC;
        CC.view && (null === (ZC = this.onDestroy) || void 0 === ZC || ZC.call(this, CC.view));
        null === (zC = CC.destroy) || void 0 === zC || zC.call(CC)
      }
      textureSlot(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = CC.gpu[hC.e.lite];
        if (ZC) return ZC;
        const QC = function(CC) {
          let {
            source: zC,
            sampler: ZC
          } = CC;
          return "canvas" === zC.kind ? null : `${zC.kind}|${kn(zC)}|${ZC.noMipmap}|${ZC.samplingMode}|${ZC.invertY}`
        }(CC);
        let wC = null === QC ? void 0 : this.textures.get(QC);
        wC || (wC = {
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
        }, null !== QC && (this.textures.set(QC, wC), this.load(CC, wC), zC && this.firstBindDecodes++)), wC.refs++;
        const bC = wC,
          nC = {
            state: wC,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(bC, QC)
            }
          };
        return CC.gpu[hC.e.lite] = nC, nC
      }
      samplerFor(CC, zC, ZC, QC, wC) {
        const bC = `${CC}|${zC}|${ZC}|${QC}|${wC}`;
        let nC = this.samplers.get(bC);
        if (!nC) {
          const fC = {
            ...Un(CC, zC, ZC),
            addressModeU: Bn(QC),
            addressModeV: Bn(wC)
          };
          nC = (0, En.c)(this.engine, fC), this.samplers.set(bC, nC)
        }
        return nC
      }
      upload(CC, zC) {
        const {
          source: ZC,
          sampler: QC
        } = CC;
        zC.hasMips = !QC.noMipmap, "canvas" === ZC.kind ? this.createDynamic(ZC, zC) : "cube" === ZC.kind ? this.uploadCube(zC, ZC.luminance) : this.uploadImage(zC, !0 === QC.invertY, ZC.url)
      }
      uploadImage(CC, zC, ZC) {
        const [QC] = CC.images;
        CC.images = null;
        const wC = (0, Xn.b)(this.engine, QC, {
          mipMaps: CC.hasMips,
          invertY: zC,
          srgb: !1
        }).then((zC => {
          QC.close(), 0 !== CC.refs ? (CC.view = zC.view, CC.destroy = zC.texture.destroy.bind(zC.texture)) : zC.texture.destroy()
        }));
        this.track(CC, ZC, wC)
      }
      track(CC, zC, ZC, QC) {
        CC.loading = !0, this.pending++, ZC.catch((ZC => {
          CC.failed = !0, console.warn(`Lite: could not load texture ${lw(zC)}`, ZC)
        })).finally((() => {
          CC.loading = !1, this.pending--, null === QC || void 0 === QC || QC()
        }))
      }
      uploadCube(CC, zC) {
        const ZC = CC.images;
        CC.images = null;
        const QC = sn(this.engine, this.device, ZC, (0, hC.u)(zC), CC.hasMips);
        CC.view = QC.createView({
          dimension: "cube"
        }), CC.destroy = () => {
          QC.destroy()
        }
      }
      createDynamic(CC, zC) {
        const {
          canvas: ZC
        } = CC, QC = (0, cn.d)(this.engine, Math.max(1, ZC.width), Math.max(1, ZC.height), {
          mipMaps: zC.hasMips,
          srgb: !1
        });
        zC.dynamic = QC, zC.view = QC.view, zC.destroy = () => {
          QC.texture.destroy()
        }, this.pushDynamic(CC, zC)
      }
      pushDynamic(CC, zC) {
        const ZC = zC.dynamicSource,
          QC = zC.dynamic,
          {
            canvas: wC
          } = CC;
        if (ZC && QC && 0 !== wC.width && 0 !== wC.height) return wC.width !== QC.width || wC.height !== QC.height ? (this.releaseTexture(zC), zC.dynamic = null, zC.view = null, void this.createDynamic(CC, zC)) : void(0, cn.g)(this.engine, QC, wC, {
          invertY: ZC.invertY,
          premultiplyAlpha: ZC.premultiplied
        })
      }
    }

    function kn(CC) {
      return "cube" === CC.kind ? CC.rootUrl : "canvas" === CC.kind ? "canvas" : CC.url
    }
    const Vn = new Uint8Array(4);

    function Cf(CC) {
      const zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      CC._colorAttachment.storeOp = CC._targetSignature._sampleCount > 1 ? zC : "store";
      const ZC = CC._renderPassDescriptor.depthStencilAttachment;
      ZC && (ZC.depthStoreOp = zC, ZC.stencilStoreOp && (ZC.stencilStoreOp = zC))
    }
    var zf = ZC(37596),
      Zf = ZC(37653),
      Qf = ZC(37329),
      wf = ZC(39404);
    const bf = new Float64Array([1, 1, 1]),
      nf = new Float64Array([0, 1, 0]),
      ff = new Float64Array(4),
      of = new Float32Array(16),
      qf = new Float64Array(3),
      Ff = new Float64Array(4);

    function Wf(CC, zC, ZC) {
      CC.fov = zC.fov, CC.near = zC.near, CC.far = zC.far, CC.renderWidth = ZC.renderWidth, CC.renderHeight = ZC.renderHeight, (0, Qf.u)(zC.holderRotation, 0, ff, 0), (0, Qf.b)(bf, 0, ff, 0, zC.holderPosition, 0, of);
      const QC = zC.Vk;
      qf[0] = QC[0], qf[1] = QC[1], qf[2] = QC[2] + 1;
      const wC = CC.viewMatrix;
      (0, Qf.l)(QC, qf, nf, wC), (0, Qf.h)(wC, 0, wC), (0, Qf.o)(wC, of, 0, wC), (0, Qf.h)(wC, 0, wC);
      const bC = CC.worldMatrix;
      (0, Qf.h)(wC, 0, bC), CC.eye[0] = bC[12], CC.eye[1] = bC[13], CC.eye[2] = bC[14], Ff[0] = CC.fov, Ff[1] = CC.renderWidth / CC.renderHeight, Ff[2] = CC.near, Ff[3] = CC.far, (0, Qf.r)(Ff, CC.projectionMatrix), (0, Qf.o)(wC, CC.projectionMatrix, 0, CC.viewProjectionMatrix), (0, wf.h)(CC.viewProjectionMatrix, CC.frustum)
    }

    function Nf(CC, zC) {
      let ZC = CC.frustumPlanes;
      ZC || (ZC = CC.frustumPlanes = Array.from({
        length: 6
      }, (() => new zf.d(0, 0, 0, 0))));
      for (let QC = 0; QC < 6; QC++) {
        const CC = ZC[QC].normal;
        CC._x = zC[4 * QC], CC._y = zC[4 * QC + 1], CC._z = zC[4 * QC + 2], CC._isDirty = !0, ZC[QC].d = zC[4 * QC + 3]
      }
    }

    function Mf(CC, zC) {
      const ZC = zC.clearColor;
      CC.clearColour[0] = ZC.r, CC.clearColour[1] = ZC.g, CC.clearColour[2] = ZC.b, CC.clearColour[3] = ZC.a;
      const QC = zC.ambientColor;
      CC.ambientColour[0] = QC.r, CC.ambientColour[1] = QC.g, CC.ambientColour[2] = QC.b, CC.animationRatio = zC.animationRatio, CC.frameId = zC.frameId, CC.version++
    }

    function gf(CC) {
      const zC = CC.model.view;
      return zC.animTick = (0, Zf.g)(), zC.timeMs = performance.now(), Mf(zC, CC.sS), CC.model.update(zC.frameId), zC
    }

    function Sf(CC) {
      const zC = CC.sS,
        {
          view: ZC,
          Lk: QC
        } = CC.model;
      return Wf(ZC, QC, zC.mg()), zC.onBeforeRenderObservable.notifyObservers(zC), Nf(zC, ZC.frustum), zC.onBeforeCameraRenderObservable.notifyObservers(zC.activeCamera), gf(CC)
    }
    var pf = ZC(37292),
      Pf = ZC(37396),
      Gf = ZC(37645);

    function Rf(CC) {
      var zC, ZC;
      const QC = (0, vC.Y)(CC);
      if (!QC || QC.diffuseTexture && (0, Gf.j)(CC)) return null;
      const wC = null === (zC = (0, vC.x)(QC, IC.j.name)) || void 0 === zC ? void 0 : zC.state,
        bC = null === (ZC = (0, vC.x)(QC, Ub.d.name)) || void 0 === ZC ? void 0 : ZC.state,
        nC = new Float32Array(16);
      return function(CC, zC, ZC, QC) {
        var wC, bC;
        const nC = NQ;
        QC.set(CC.diffuseColor, nC.diffuse), QC[nC.diffuse + 3] = CC.alpha, QC.set(CC.ambientColor, nC.ambientAndCutoff), QC[nC.ambientAndCutoff + 3] = CC.alphaCutOff, QC.set(CC.emissiveColor, nC.emissiveAndLevel), QC[nC.emissiveAndLevel + 3] = null !== (wC = null === (bC = CC.diffuseTexture) || void 0 === bC ? void 0 : bC.level) && void 0 !== wC ? wC : 1, null !== zC && void 0 !== zC && zC.animDataPerTex ? (QC[nC.anim + 1] = Zf.c, QC[nC.anim + 2] = zC.animDataPerTex.length / 3 - 1) : ZC && (QC[nC.anim + 1] = ZC.numAnimStates, QC[nC.anim + 2] = ZC.ticksPerAnimState)
      }(QC, wC, bC, nC), {
        model: QC,
        atlas: wC,
        texture: wC ? "atlas" : QC.diffuseTexture ? "single" : "none",
        animated: wC ? !!wC.animDataPerTex : !!bC,
        liquid: (0, Gf.l)(CC),
        customRenderMat: (0, Gf.j)(CC),
        uniformData: nC
      }
    }
    var Af = ZC(2846);
    class xf {
      constructor(CC) {
        this.units = CC, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var CC;
        this.buffer.destroy(), null === (CC = this.twin) || void 0 === CC || CC.destroy()
      }
    }
    class Jf {
      constructor(CC, zC) {
        this.arena = CC, this.np = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.np = new tn(zC);
        const ZC = new xf(zC);
        ZC.buffer = this.createBuffer(ZC, !1), this.backings.push(ZC), this.refresh()
      }
      get HW() {
        return this.np.HW
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
        let CC = 0;
        for (const zC of this.backings) CC += zC.units * (this.arena.unitBytes + (zC.twin ? this.arena.twinUnitBytes : 0));
        return CC
      }
      holds(CC) {
        return CC.start + CC.length <= this.usable
      }
      lost(CC) {
        return this.dropped || CC.start + CC.length > this.HW
      }
      write(CC, zC) {
        const {
          device: ZC,
          unitBytes: QC
        } = this.arena;
        for (const wC of this.backings) {
          const bC = (wC.units - CC.start) * QC;
          bC > 0 && ZC.queue.writeBuffer(wC.buffer, CC.start * QC, zC, 0, Math.min(zC.byteLength, bC))
        }
      }
      writeLight(CC, zC) {
        const {
          device: ZC,
          twinUnitBytes: QC,
          verticesPerUnit: wC
        } = this.arena, {
          light: bC,
          count: nC
        } = this.arena.twinLight(zC, Math.min(zC.length, CC.length * wC));
        for (const fC of this.backings) {
          fC.twin || (fC.twin = this.createBuffer(fC, !0));
          const zC = (fC.units - CC.start) * wC;
          zC > 0 && ZC.queue.writeBuffer(fC.twin, CC.start * QC, bC, 0, Math.min(nC, zC))
        }
      }
      grow(CC) {
        this.arena.assertNotDrawing();
        const {
          device: zC,
          unitBytes: ZC,
          label: QC
        } = this.arena, wC = this.backings[this.backings.length - 1], bC = new xf(CC), nC = zC.createCommandEncoder({
          label: `${QC}-grow`
        });
        bC.buffer = this.createBuffer(bC, !1), nC.copyBufferToBuffer(wC.buffer, 0, bC.buffer, 0, wC.units * ZC), wC.twin && (bC.twin = this.createBuffer(bC, !0), nC.copyBufferToBuffer(wC.twin, 0, bC.twin, 0, wC.units * this.arena.twinUnitBytes)), zC.queue.submit([nC.finish()]), this.backings.push(bC), this.np.grow(CC)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const CC of this.backings) CC.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(CC, zC) {
        const {
          device: ZC,
          unitBytes: QC,
          twinUnitBytes: wC,
          usage: bC,
          label: nC
        } = this.arena;
        ZC.pushErrorScope("out-of-memory");
        const fC = ZC.createBuffer({
          label: zC ? `${nC}-light` : nC,
          size: CC.units * (zC ? wC : QC),
          usage: (zC ? this.arena.twinUsage : bC) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, ZC.popErrorScope().then((ZC => {
          this.arena.awaitingVerdict--, this.settle(CC, zC, !ZC, !0)
        }), (ZC => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${nC} buffer, taken as failed: ${String(ZC)}`), this.settle(CC, zC, !1, !1)
        })), fC
      }
      settle(CC, zC, ZC, QC) {
        const wC = this.backings.indexOf(CC);
        if (!(this.dropped || wC < 0)) {
          if (!ZC) {
            if (QC && this.arena.ranOutOfMemory(CC.units, CC.units * (zC ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === wC) return void this.drop();
            for (const CC of this.backings.splice(wC)) CC.destroy();
            return this.np.truncate(this.backings[wC - 1].units), this.growable = !1, void this.promote()
          }
          zC ? CC.twinReady = !0 : (CC.bufferReady = !0, this.arena.allocatedBuffer(CC.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: CC
        } = this;
        let zC = 0;
        for (; zC + 1 < CC.length && CC[zC].ready && CC[zC + 1].ready;) zC++;
        for (const ZC of CC.splice(0, zC)) ZC.destroy();
        this.refresh()
      }
      refresh() {
        const CC = this.backings[0];
        this.buffer = CC.buffer, this.twin = CC.twinReady ? CC.twin : null, this.usable = !this.dropped && CC.bufferReady ? CC.units : 0
      }
    }
    class If {
      constructor(CC, zC, ZC, QC) {
        let {
          verticesPerUnit: wC = 1,
          twinUsage: bC = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = CC, this.unitBytes = zC, this.usage = ZC, this.label = QC, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, qz.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), zC % 4 !== 0) throw new Error(`${QC}: ${zC}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = wC, this.twinUsage = bC, this.twinValueBytes = wC > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * wC
      }
      twinLight(CC, zC) {
        if (4 === this.twinValueBytes) return this.widened.length < zC && (this.widened = new Float32Array(Math.max(zC, 2 * this.widened.length))), this.widened.set(CC.subarray(0, zC)), {
          light: this.widened,
          count: zC
        };
        const ZC = zC % this.verticesPerUnit;
        if (0 === ZC) return {
          light: CC,
          count: zC
        };
        const QC = zC - ZC + this.verticesPerUnit;
        return this.padded.length < QC && (this.padded = new Uint16Array(Math.max(QC, 2 * this.padded.length))), this.padded.set(CC.subarray(0, zC)), this.padded.fill(0, zC, QC), {
          light: this.padded,
          count: QC
        }
      }
      allocate(CC) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), CC > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const wC of this.pages) {
          const zC = wC.np.allocate(CC);
          if (zC >= 0) return {
            page: wC,
            start: zC,
            length: CC
          }
        }
        const zC = this.pages[this.pages.length - 1];
        if (null !== zC && void 0 !== zC && zC.canGrow) {
          const ZC = Math.min(this.ceiling, Math.max(2 * zC.HW, zC.HW + CC));
          if (ZC - zC.HW >= CC) return zC.grow(ZC), {
            page: zC,
            start: zC.np.allocate(CC),
            length: CC
          }
        }
        zC && zC !== this.pages[0] && 0 === zC.np.used && zC.drop();
        const ZC = Math.floor(1048576 / this.unitBytes),
          QC = new Jf(this, Math.max(CC, Math.min(this.ceiling, ZC)));
        return this.pages.push(QC), {
          page: QC,
          start: QC.np.allocate(CC),
          length: CC
        }
      }
      free(CC) {
        this.assertNotDrawing();
        const {
          page: zC
        } = CC;
        zC.np.free(CC.start, CC.length), 0 === zC.np.used && zC !== this.pages[0] && zC !== this.pages[this.pages.length - 1] && zC.drop()
      }
      remove(CC) {
        const zC = this.pages.indexOf(CC);
        zC >= 0 && this.pages.splice(zC, 1)
      }
      ranOutOfMemory(CC, zC) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${zC}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, CC), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, CC) / 2));
        const ZC = performance.now();
        ZC >= this.shortageUntil && (this.forgetFailedAt = ZC + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = ZC + 1e3)
      }
      allocatedBuffer(CC) {
        CC >= this.failed && (this.failed = 1 / 0);
        const zC = Math.min(2 * CC, Math.floor((CC + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, zC))
      }
      stats() {
        let CC = 0,
          zC = 0,
          ZC = 0,
          QC = 0;
        for (const wC of this.pages) CC += wC.HW, zC += wC.np.used, ZC += wC.hasTwin ? wC.HW * this.twinUnitBytes : 0, QC += wC.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: CC * this.unitBytes,
          usedBytes: zC * this.unitBytes,
          twinBytes: ZC,
          allocatedBytes: QC
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: CC,
          maxStorageBufferBindingSize: zC
        } = this.device.limits;
        let ZC = Math.floor(Math.min(67108864, CC) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (ZC = Math.min(ZC, Math.floor(zC / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (ZC = Math.min(ZC, Math.floor(zC / this.twinUnitBytes))), ZC
      }
    }
    const vf = 16383;

    function ef(CC, zC, ZC, QC, wC) {
      let bC = 0;
      for (let nC = ZC; nC < QC; nC += vf) CC.drawIndexed(6 * Math.min(vf, QC - nC), 1, 0, zC + 4 * nC, wC), bC++;
      return bC
    }
    class hf {
      constructor(CC, zC) {
        this.recordsGroup = zC, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const ZC = iz.g.strideWithoutAtlas;
        this.vertexArena = new If(CC, ZC, GPUBufferUsage.VERTEX, `terrain-vertices-${ZC}`), this.quadArena = new If(CC, Pf.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const QC = (0, vz.h)(new Uint16Array(98298), vf);
        this.quadPattern = CC.createBuffer({
          label: "terrain-quad-pattern",
          size: QC.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), CC.queue.writeBuffer(this.quadPattern, 0, QC)
      }
      set(CC, zC) {
        const ZC = zC.packedVertices,
          QC = ZC ? this.quadArena.allocate(CC.faceCount) : this.vertexArena.allocate(CC.vertexCount);
        if (!QC) return !1;
        CC.vertices = QC;
        const wC = ZC ? new Uint8Array(ZC.buffer, ZC.byteOffset, ZC.byteLength) : new Uint8Array(zC.vertices);
        return QC.page.write(QC, wC), !0
      }
      setLight(CC, zC) {
        const {
          vertices: ZC
        } = CC;
        ZC && 0 !== zC.length && ZC.page.live && (zC.length < CC.vertexCount ? ZC.page.arena.warnOnce("shortLight", `a part's ${zC.length} light values are fewer than its ${CC.vertexCount} vertices, so its light is left as it was`) : (ZC.page.writeLight(ZC, zC), CC.lit = !0))
      }
      lightFullSky(CC, zC) {
        this.fullSky.length < zC && (this.fullSky = new Uint16Array(Math.max(zC, 4096)).fill(Af.j));
        for (const ZC of CC) {
          const CC = ZC.vertices;
          CC.page.live && (CC.page.writeLight(CC, this.fullSky), ZC.lit = !0)
        }
      }
      backed(CC) {
        const {
          vertices: zC
        } = CC;
        return !!zC && zC.page.holds(zC)
      }
      lost(CC) {
        const {
          vertices: zC
        } = CC;
        return !!zC && zC.page.lost(zC)
      }
      release(CC) {
        CC.vertices && CC.vertices.page.arena.free(CC.vertices), CC.vertices = null, CC.lit = !1
      }
      setDrawing(CC) {
        this.forgetBound()
      }
      draw(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zC.faceCount;
        const bC = zC.vertices,
          nC = bC.page,
          fC = ZC ? nC.twin : null;
        if (!nC.holds(bC) || ZC && !fC) return 0;
        const {
          verticesPerUnit: oC
        } = nC.arena;
        let qC = bC.start * oC;
        this.boundPattern || (CC.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const FC = QC + wC;
        if (oC > 1) return nC.buffer === this.boundRecords && fC === this.boundRecordsLight || (CC.setBindGroup(1, this.recordsGroup(nC.buffer, fC)), this.boundRecords = nC.buffer, this.boundRecordsLight = fC), ef(CC, qC, QC, FC, zC.slot);
        nC.buffer !== this.boundVertices && (CC.setVertexBuffer(0, nC.buffer), this.boundVertices = nC.buffer), fC && fC !== this.boundLight && (CC.setVertexBuffer(1, fC), this.boundLight = fC);
        const WC = zC.faceCount;
        return FC <= WC ? ef(CC, qC, QC, FC, zC.slot) : ef(CC, qC, QC, WC, zC.slot) + ef(CC, qC, Math.max(QC, WC) - WC, FC - WC, zC.slot)
      }
      get buffersAwaitingVerdict() {
        let CC = 0;
        for (const zC of this.arenas()) CC += zC.awaitingVerdict;
        return CC
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Kf {
      constructor(CC, zC, ZC, QC) {
        this.device = CC, this.splitBefore = zC, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = CC.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const wC = CC.createShaderModule({
          label: "scene-depth-copy",
          code: (bC = ZC._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${bC?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var bC;
        CC.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: wC,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: wC,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((CC => {
          this.pipeline = CC, this.building = !1
        }), (CC => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", CC)
        })), ZC._executeWithTransmission = () => this.execute(ZC, QC)
      }
      get compiling() {
        return this.building
      }
      setWanted(CC) {
        this.wanted = CC
      }
      setPlanes(CC, zC) {
        CC === this.near && zC === this.far || (this.near = CC, this.far = zC, this.unproject[0] = CC / (zC - CC), this.unproject[1] = zC * CC / (zC - CC), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var CC, zC;
        return null !== (CC = null === (zC = this.copy) || void 0 === zC ? void 0 : zC.view) && void 0 !== CC ? CC : null
      }
      execute(CC, zC) {
        var ZC;
        null === (ZC = this.retired) || void 0 === ZC || ZC.destroy(), this.retired = null;
        const QC = Cz(zC),
          wC = CC._transparentBindings,
          bC = this.wanted && this.pipeline ? this.splitIndex(wC) : -1,
          nC = CC._colorAttachment,
          fC = nC.resolveTarget;
        bC >= 0 && (nC.resolveTarget = void 0, Cf(CC, !0));
        let oC = QC.beginRenderPass(CC._renderPassDescriptor);
        oC.setBindGroup(0, CC._sceneBG);
        let qC = this.drawList(oC, zC, CC._opaqueBindings, 0, CC._opaqueBindings.length);
        if (qC += this.drawList(oC, zC, CC._directBindings, 0, CC._directBindings.length), qC += this.drawList(oC, zC, wC, 0, bC >= 0 ? bC : wC.length), oC.end(), bC < 0) return qC;
        Cf(CC);
        const FC = CC._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: WC,
            stencilLoadOp: NC
          } = FC,
          MC = nC.loadOp;
        nC.resolveTarget = fC;
        try {
          this.copyDepth(QC, CC), nC.loadOp = "load", FC.depthLoadOp = "load", NC && (FC.stencilLoadOp = "load"), oC = QC.beginRenderPass(CC._renderPassDescriptor), oC.setBindGroup(0, CC._sceneBG), qC += this.drawList(oC, zC, wC, bC, wC.length), oC.end()
        } finally {
          nC.loadOp = MC, FC.depthLoadOp = WC, FC.stencilLoadOp = NC
        }
        return qC
      }
      splitIndex(CC) {
        for (let zC = 0; zC < CC.length; zC++)
          if (CC[zC].renderable === this.splitBefore) return zC;
        return -1
      }
      drawList(CC, zC, ZC, QC, wC) {
        let bC = null,
          nC = 0;
        for (let fC = QC; fC < wC; fC++) {
          const QC = ZC[fC],
            wC = QC.renderable.mesh;
          wC && !1 === wC.visible || (QC.pipeline !== bC && (CC.setPipeline(QC.pipeline), bC = QC.pipeline), nC += QC.draw(CC, zC))
        }
        return nC
      }
      copyDepth(CC, zC) {
        var ZC, QC;
        const wC = (null !== (ZC = zC._config.depth) && void 0 !== ZC ? ZC : zC._config.rt)._depthTexture,
          bC = (null === (QC = this.copy) || void 0 === QC ? void 0 : QC.source) === wC ? this.copy : this.remakeCopy(wC),
          nC = CC.beginRenderPass(bC.pass);
        nC.setPipeline(this.pipeline), nC.setBindGroup(0, bC.bindGroup), nC.draw(3), nC.end()
      }
      remakeCopy(CC) {
        var zC, ZC;
        this.retired = null !== (zC = null === (ZC = this.copy) || void 0 === ZC ? void 0 : ZC.texture) && void 0 !== zC ? zC : null;
        const QC = this.device.createTexture({
            label: "scene-depth",
            size: [CC.width, CC.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          wC = QC.createView(),
          bC = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: CC.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          nC = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: wC,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: CC,
          texture: QC,
          view: wC,
          bindGroup: bC,
          pass: nC
        }, this.copy
      }
    }
    const Yf = "rgba8unorm";

    function df(CC) {
      return CC ? 15 : 1
    }
    class mf {
      constructor(CC, zC, ZC, QC) {
        this.device = CC, this.terrain = QC, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = zC._targetSignature._sampleCount > 1, this.cameraBuffer = CC.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = CC.createBindGroupLayout({
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
        const wC = CC.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = CC.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: wC,
          entries: []
        });
        const bC = CC.createShaderModule({
          label: "sun-shadow-mask",
          code: (nC = this.edge, `${(0,ez.E)()}${uZ({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${nC?eZ:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${df(nC)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${nC?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var nC;
        CC.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: CC.createPipelineLayout({
            bindGroupLayouts: [this.layout, wC, wC, sb(CC, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: bC,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: bC,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((CC => {
          this.pipeline = CC, this.building = !1
        }), (CC => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", CC)
        }));
        const fC = zC._executeWithTransmission;
        zC._executeWithTransmission = CC => this.execute(zC, ZC, (() => fC ? fC(CC) : function(CC, zC) {
          const ZC = Cz(zC).beginRenderPass(CC._renderPassDescriptor);
          ZC.setBindGroup(0, CC._sceneBG);
          let QC = Hf(ZC, zC, CC._opaqueBindings);
          return QC += Hf(ZC, zC, CC._directBindings), QC += Hf(ZC, zC, CC._transparentBindings), ZC.end(), QC
        }(zC, ZC)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var CC, zC;
        return null !== (CC = null === (zC = this.targets) || void 0 === zC ? void 0 : zC.maskView) && void 0 !== CC ? CC : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(CC) {
        ! function(CC, zC) {
          const ZC = CC.worldMatrix,
            QC = CC.projectionMatrix,
            wC = 1 / QC[0],
            bC = 1 / QC[5],
            nC = CC.far * CC.near / (CC.far - CC.near);
          zC[0] = CC.eye[0], zC[1] = CC.eye[1], zC[2] = CC.eye[2], zC[3] = 2 ** -23 / nC, zC[4] = ZC[0] * wC, zC[5] = ZC[1] * wC, zC[6] = ZC[2] * wC, zC[7] = nC, zC[8] = ZC[4] * bC, zC[9] = ZC[5] * bC, zC[10] = ZC[6] * bC, zC[11] = CC.near / (CC.far - CC.near), zC[12] = ZC[8], zC[13] = ZC[9], zC[14] = ZC[10], zC[15] = 0
        }(CC, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(CC, zC, ZC) {
        if (this.retire(), !this.terrain.readsMask) return ZC();
        const QC = this.targetsFor(CC),
          wC = Cz(zC),
          bC = CC._renderPassDescriptor.depthStencilAttachment;
        this.edge || (QC.prepass.depthStencilAttachment.view = bC.view);
        const nC = this.terrain.drawPrepass(wC, QC.prepass, CC._sceneBG);
        if (0 === nC) return ZC();
        if (this.trace(wC, QC), this.edge) return nC + 1 + ZC();
        const {
          depthLoadOp: fC,
          stencilLoadOp: oC
        } = bC;
        bC.depthLoadOp = "load", oC && (bC.stencilLoadOp = "load");
        try {
          return nC + 1 + ZC()
        } finally {
          bC.depthLoadOp = fC, bC.stencilLoadOp = oC
        }
      }
      trace(CC, zC) {
        const ZC = this.terrain.sunShadowGroup(),
          QC = CC.beginRenderPass(zC.trace);
        this.pipeline && ZC && (QC.setPipeline(this.pipeline), QC.setBindGroup(0, zC.bindGroup), QC.setBindGroup(1, this.empty), QC.setBindGroup(2, this.empty), QC.setBindGroup(3, ZC), QC.draw(3)), QC.end()
      }
      retire() {
        const CC = this.retired;
        var zC;
        CC && (CC.mask.destroy(), CC.normals.destroy(), null === (zC = CC.depth) || void 0 === zC || zC.destroy(), this.retired = null)
      }
      targetsFor(CC) {
        var zC, ZC;
        const QC = (null !== (zC = CC._config.depth) && void 0 !== zC ? zC : CC._config.rt)._depthTexture;
        return (null === (ZC = this.targets) || void 0 === ZC ? void 0 : ZC.source) === QC ? this.targets : this.remake(CC, QC)
      }
      remake(CC, zC) {
        var ZC;
        this.retired = this.targets;
        const QC = [zC.width, zC.height],
          wC = this.device.createTexture({
            label: "sun-shadow-mask",
            size: QC,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          bC = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: QC,
            format: Yf,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          nC = null !== (ZC = CC._targetSignature._depthStencilFormat) && void 0 !== ZC ? ZC : zC.format,
          fC = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: QC,
            format: nC,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          oC = CC._renderPassDescriptor.depthStencilAttachment,
          qC = nC.includes("stencil"),
          FC = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: bC.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: fC ? fC.createView() : oC.view,
              depthClearValue: oC.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...qC ? {
                stencilClearValue: oC.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          WC = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== fC && void 0 !== fC ? fC : zC).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: bC.createView()
            }]
          }),
          NC = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: wC.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [df(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: zC,
          mask: wC,
          maskView: wC.createView(),
          normals: bC,
          depth: fC,
          bindGroup: WC,
          prepass: FC,
          trace: NC
        }, this.targets
      }
    }

    function Hf(CC, zC, ZC) {
      let QC = null,
        wC = 0;
      for (const bC of ZC) {
        const ZC = bC.renderable.mesh;
        ZC && !1 === ZC.visible || (bC.pipeline !== QC && (CC.setPipeline(bC.pipeline), QC = bC.pipeline), wC += bC.draw(CC, zC))
      }
      return wC
    }
    const Ef = 6e4,
      lf = {
        status: "ok"
      },
      Xf = {
        status: "skipped"
      };
    async function uf(CC, zC) {
      const {
        isCancelled: ZC
      } = CC;
      if (ZC()) return {
        status: "wZ"
      };
      const {
        target: QC
      } = zC;
      if (!QC) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const wC = [],
        bC = Promise.all(Array.from(new Set(CC.materials), (async ZC => {
          wC.push(await async function(CC, zC, ZC, QC) {
            const wC = {
              lighting: CC.lighting,
              dirLightCount: Math.min(CC.dirLightCount, 4),
              zg: CC.runtime
            };
            try {
              const bC = zC.material(QC);
              return bC && qQ(zC.programKey(bC, !1, wC)) ? (await bC.ready, CC.isCancelled() ? lf : bC.bindGroupLayout ? await async function(CC, zC, ZC, QC) {
                const {
                  device: wC
                } = CC;
                let bC, nC;
                wC.pushErrorScope("validation");
                try {
                  bC = CC.pipelineBuild(zC, ZC, QC)
                } finally {
                  nC = wC.popErrorScope().catch((() => null))
                }
                const [fC, oC] = await Promise.all([nC, bC.built.then((() => null), (CC => null !== CC && void 0 !== CC ? CC : new Error("pipeline failed")))]);
                if (!fC && !oC) return lf;
                const qC = await rf(bC.module),
                  FC = qC.length > 0 ? qC.map((CC => `${bC.name} ${CC.lineNum}:${CC.linePos}: ${CC.message}`)).join("\n") : `${bC.name}: ${sf(null!==oC&&void 0!==oC?oC:fC)}`;
                return {
                  status: "failed",
                  material: zC.model.name,
                  message: FC
                }
              }(zC, bC, zC.programKey(bC, "none" !== bC.texture, wC), ZC): (console.warn(`Shader pack: skipped the compile check for "${QC.name}", whose textures failed to load`), Xf)) : lf
            } catch (bC) {
              return {
                status: "failed",
                material: QC.name,
                message: sf(bC)
              }
            }
          }(CC, zC, QC, ZC))
        }))),
        nC = function(CC, zC) {
          let ZC, QC, wC = !1;
          const bC = new Promise((bC => {
            var nC;
            ZC = setTimeout((() => {
              bC("timeout")
            }), null !== (nC = zC.timeoutMs) && void 0 !== nC ? nC : Ef), QC = setInterval((() => {
              zC.isCancelled() && bC("wZ")
            }), 50), CC.lost.then((() => {
              wC = !0, bC("lost")
            }))
          }));
          return {
            signal: bC,
            lost: () => wC,
            dispose: () => {
              clearTimeout(ZC), clearInterval(QC)
            }
          }
        }(zC.device, CC);
      let fC;
      try {
        fC = await Promise.race([bC.then((() => "done")), nC.signal])
      } finally {
        nC.dispose()
      }
      if ("wZ" === fC || ZC()) return {
        status: "wZ"
      };
      const oC = wC.find((CC => "failed" === CC.status));
      return oC && "lost" !== fC && !nC.lost() && await new Promise((CC => {
        setTimeout(CC, 0)
      })), "lost" === fC || nC.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : oC ? {
        status: "failed",
        failure: {
          material: oC.material,
          message: oC.message
        }
      } : "timeout" === fC ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(qC=CC.timeoutMs)&&void 0!==qC?qC:Ef)/1e3} s`), {
        status: "skipped"
      }) : wC.some((CC => "skipped" === CC.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var qC
    }
    async function rf(CC) {
      if (!CC) return [];
      try {
        return (await CC.getCompilationInfo()).messages.filter((CC => "error" === CC.type))
      } catch {
        return []
      }
    }

    function sf(CC) {
      var zC;
      return null !== (zC = null === CC || void 0 === CC ? void 0 : CC.message) && void 0 !== zC ? zC : String(CC)
    }

    function Tf(CC, zC, ZC, QC) {
      qQ(CC) ? rf(ZC).then((CC => {
        const [ZC] = CC;
        Lw("terrain", zC, QC, ZC ? `${ZC.lineNum}:${ZC.linePos} error: ${ZC.message}` : null)
      })) : Lw("terrain", zC, QC)
    }
    var af = ZC(37398),
      tf = ZC(37408),
      Df = ZC(37423),
      jf = ZC(2837);

    function yf(CC, zC, ZC, QC, wC) {
      const bC = Math.hypot(ZC[0], ZC[1], ZC[2]);
      if (!(bC > 0)) return;
      const nC = [ZC[0] / bC, ZC[1] / bC, ZC[2] / bC],
        fC = [Math.floor(zC[0]), Math.floor(zC[1]), Math.floor(zC[2])],
        oC = [0, 0, 0],
        qC = [1 / 0, 1 / 0, 1 / 0],
        FC = [1 / 0, 1 / 0, 1 / 0];
      for (let MC = 0; MC < 3; MC++) nC[MC] > 0 ? (oC[MC] = 1, qC[MC] = (fC[MC] + 1 - zC[MC]) / nC[MC], FC[MC] = 1 / nC[MC]) : nC[MC] < 0 && (oC[MC] = -1, qC[MC] = (fC[MC] - zC[MC]) / nC[MC], FC[MC] = -1 / nC[MC]);
      const {
        Ig: WC
      } = CC;
      let NC = CC.Wy(fC[0], fC[1], fC[2]);
      for (;;) {
        const zC = qC[0] < qC[1] ? qC[0] < qC[2] ? 0 : 2 : qC[1] < qC[2] ? 1 : 2;
        if (qC[zC] > QC) return;
        const ZC = oC[zC] > 0 ? fC[zC] + 1 : fC[zC];
        fC[zC] += oC[zC], qC[zC] += FC[zC];
        const bC = CC.Wy(fC[0], fC[1], fC[2]),
          nC = bC !== NC && !(CC.opaque[NC] && CC.opaque[bC]);
        if (nC) {
          const QC = [fC[0], fC[1], fC[2]];
          QC[zC] = ZC;
          const bC = Math.floor(QC[0] / WC),
            nC = Math.floor(QC[1] / WC),
            oC = Math.floor(QC[2] / WC);
          !CC.isDrawn(bC, nC, oC) && CC.hasParts(bC, nC, oC) && wC.add(`${bC},${nC},${oC}`)
        }
        if (nC && CC.occluders[bC]) return;
        NC = bC
      }
    }

    function Lf(CC, zC) {
      return CC.group - zC.group || CC.nearest - zC.nearest
    }
    class Uf {
      constructor(CC, zC) {
        this.device = CC, this.mG = zC, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var CC;
        const zC = null !== (CC = this.free.pop()) && void 0 !== CC ? CC : this.next++;
        if (8 * zC >= this.data.length) {
          const CC = new Float32Array(2 * this.data.length);
          CC.set(this.data), this.data = CC, this.words = new Uint32Array(CC.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.mG()
        }
        return zC
      }
      release(CC) {
        this.free.push(CC)
      }
      set(CC, zC, ZC, QC, wC) {
        const bC = 8 * CC + RQ;
        this.data[bC] = zC, this.data[bC + 1] = ZC, this.data[bC + 2] = QC, this.setVisibility(CC, wC)
      }
      setVisibility(CC, zC) {
        this.data[8 * CC + AQ] = zC, this.markDirty(CC, CC)
      }
      setFaces(CC, zC, ZC) {
        const QC = 8 * CC;
        this.words[QC + xQ] = zC, this.words[QC + JQ] = ZC, this.markDirty(CC, CC)
      }
      markDirty(CC, zC) {
        this.dirtyMin = Math.min(this.dirtyMin, CC), this.dirtyMax = Math.max(this.dirtyMax, zC)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Bf = GQ,
      Of = !0;
    const kf = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Bf.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Vf = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Co {
      constructor(CC) {
        this.device = CC, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(WQ), this.dirLightUniforms = this.frameUniforms.subarray(FQ.dirLights, FQ.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, qz.b)(), this.faceGroups = !0, this.visibilityGraph = Of, this.visCull = Of, this.visCheck = !1, this.visCullMinDistance = Df.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new wo, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.zg = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new hf(CC, ((CC, zC) => this.recordsGroup(CC, zC))), this.slots = new Uf(CC, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = zz(CC), this.frameLayout = CC.createBindGroupLayout({
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
        }), this.frameBuffer = CC.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = CC.createSampler({
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
          bind: (CC, zC) => this.createBinding(this.opaqueRenderable, zC, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (CC, zC) => this.createBinding(this.transparentRenderable, zC, !0)
        }
      }
      installSceneDepth(CC, zC) {
        this.sceneDepth = new Kf(this.device, this.transparentRenderable, CC, zC)
      }
      createFrameBindGroup() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== CC && void 0 !== CC ? CC : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== zC && void 0 !== zC ? zC : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(CC, zC) {
        const ZC = null !== zC && void 0 !== zC ? zC : CC;
        let QC = this.recordsGroups.get(ZC);
        return QC || (QC = this.createFrameBindGroup(CC, zC), this.recordsGroups.set(ZC, QC)), QC
      }
      setChunkMesh(CC, zC, ZC) {
        var QC;
        let wC = this.chunks.get(CC);
        wC ? this.geometry.release(wC) : (wC = {
          mesh: CC,
          slot: this.slots.allocate(),
          origin: [ZC[0], ZC[1], ZC[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: CC.visibility,
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
        }, this.chunks.set(CC, wC), this.writeSlot(wC)), wC.material = CC.material ? this.materialFor(CC.material) : null, wC.packed = !!zC.packedVertices, wC.vertexCount = (0, Pf.c)(zC), wC.faceCount = wC.vertexCount / 4;
        const bC = null !== (QC = zC.faceGroups) && void 0 !== QC ? QC : null;
        if (wC.faceGroups = bC, bC) {
          const CC = af.k;
          wC.planePX = bC[CC], wC.planeNX = bC[CC + 1], wC.planePY = bC[CC + 2], wC.planeNY = bC[CC + 3], wC.planePZ = bC[CC + 4], wC.planeNZ = bC[CC + 5]
        }
        this.drawWhole(wC), 0 !== wC.faceCount && (this.geometry.set(wC, zC) ? (wC.packed && this.slots.setFaces(wC.slot, wC.vertices.start + wC.faceCount, wC.faceCount), zC.qg && this.setChunkMeshLight(CC, zC.qg)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${wC.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(CC, zC) {
        const ZC = this.chunks.get(CC);
        ZC && this.geometry.setLight(ZC, zC)
      }
      drawStats() {
        let CC = this.transparent.length;
        for (const zC of this.opaqueBatches) CC += zC.meshes.length;
        return {
          drawn: CC,
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
      removeChunkMesh(CC) {
        const zC = this.chunks.get(CC);
        zC && (this.geometry.release(zC), this.slots.release(zC.slot), this.chunks.delete(CC))
      }
      remeshLost(CC, zC) {
        this.geometry.release(zC), zC.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** zC.lostRemeshes++);
        const ZC = CC.fN,
          [QC, wC, bC] = ZC.kQC(zC.origin[0], zC.origin[1], zC.origin[2]),
          nC = ZC.PS.GS(QC, wC, bC);
        nC && (nC.SS = !0, nC.AS = !0, ZC.pS(nC, !1))
      }
      chooseFaceRanges(CC, zC, ZC) {
        const QC = this.faceRanges;
        CC.faceMask = ZC, CC.rangeCount = (0, tf.k)(zC, ZC, QC), CC.first0 = QC[0], CC.count0 = QC[1], CC.first1 = QC[2], CC.count1 = QC[3]
      }
      drawWhole(CC) {
        CC.faceMask = -1, CC.faceEpoch = -1, CC.rangeCount = 1, CC.first0 = 0, CC.count0 = CC.faceCount
      }
      writeSlot(CC) {
        const [zC, ZC, QC] = this.originOffset;
        this.slots.set(CC.slot, CC.origin[0] - zC, CC.origin[1] - ZC, CC.origin[2] - QC, CC.visibility)
      }
      materialFor(CC) {
        const zC = this.materials.get(CC);
        if (zC) return zC;
        const ZC = Rf(CC);
        if (!ZC) return this.warnOnce(`material:${CC.name}`, `Lite terrain cannot draw material "${CC.name}"; its chunks are skipped.`), null;
        const {
          model: QC,
          atlas: wC,
          texture: bC,
          animated: nC,
          uniformData: fC
        } = ZC, oC = {
          id: this.materials.size,
          model: QC,
          texture: bC,
          animated: nC,
          uniformData: fC,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${CC.name}`,
            size: fC.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: ZC.liquid,
          customRenderMat: ZC.customRenderMat,
          atlasCount: 0,
          tV: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(CC, oC), this.device.queue.writeBuffer(oC.uniformBuffer, 0, fC), oC.ready = this.createMaterialBindGroup(oC, wC).catch((zC => {
          console.error(`Lite terrain failed to load the textures of material "${CC.name}"`, zC)
        })), oC
      }
      materialLayout(CC) {
        const zC = function(CC) {
            const zC = ["uniforms"];
            if ("atlas" === CC.texture) {
              CC.animated && zC.push("animData"), zC.push("sampler");
              for (let ZC = 0; ZC < CC.atlasCount; ZC++) zC.push("textureArray")
            } else "single" === CC.texture && zC.push("sampler", "texture");
            return zC
          }(CC),
          ZC = zC.join(",");
        let QC = this.materialLayouts.get(ZC);
        if (!QC) {
          const CC = GPUShaderStage.FRAGMENT;
          QC = this.device.createBindGroupLayout({
            label: `terrain-material-${ZC}`,
            entries: zC.map(((zC, ZC) => {
              switch (zC) {
                case "uniforms":
                  return {
                    binding: ZC, visibility: GPUShaderStage.VERTEX | CC, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: ZC, visibility: GPUShaderStage.VERTEX | CC, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: ZC, visibility: CC, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: ZC, visibility: CC, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: ZC, visibility: CC, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(ZC, QC)
        }
        return QC
      }
      async createMaterialBindGroup(CC, zC) {
        const ZC = [{
          buffer: CC.uniformBuffer
        }];
        if (zC) {
          const {
            urls: QC,
            pixels: wC,
            layerWidth: bC
          } = zC.sources, nC = await Promise.all(QC.map(((CC, zC) => {
            var ZC;
            return sw(this.device, CC, null !== (ZC = null === wC || void 0 === wC ? void 0 : wC[zC]) && void 0 !== ZC ? ZC : null, bC)
          })));
          CC.atlasCount = nC.length, CC.tV = nC[0].layerWidth, CC.atlasLayers = nC[0].layers, zC.animDataPerTex && ZC.push({
            buffer: dw(this.device, Float32Array.from(zC.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), ZC.push(this.sampler);
          for (const CC of nC) ZC.push(CC.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === CC.texture) {
          const {
            url: zC
          } = CC.model.diffuseTexture.source, {
            pixels: QC,
            width: wC,
            height: bC
          } = await uw(zC);
          ZC.push(this.sampler), ZC.push(Hw(this.device, QC, wC, bC, 1, `terrain-${zC}`).createView({
            dimension: "2d"
          }))
        }
        const QC = this.materialLayout(this.programKey(CC, !1));
        CC.bindGroupLayout = QC, CC.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${CC.model.name}`,
          layout: QC,
          entries: ZC.map(((CC, zC) => ({
            binding: zC,
            resource: CC
          })))
        })
      }
      programKey(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const QC = ZC ? ZC.lighting : this.lighting,
          wC = ZC ? ZC.zg : this.zg,
          bC = {
            texture: CC.texture,
            atlasCount: CC.atlasCount,
            tV: CC.tV,
            atlasLayers: CC.atlasLayers,
            animated: CC.animated,
            alphaTest: CC.model.transparencyMode === vC.t.alphaTest,
            lighting: QC,
            dirLightCount: ZC ? ZC.dirLightCount : this.dirLightCount,
            packed: zC
          };
        if (!wC) return bC;
        const nC = this.shaderPackFields(CC, wC),
          fC = "atlas" === CC.texture && CC.model.transparencyMode === vC.t.opaque && bQ(nC.packVariant);
        return {
          ...bC,
          ...nC,
          alphaTest: bC.alphaTest || fC
        }
      }
      shaderPackFields(CC, zC) {
        const ZC = this.packVariant(CC, zC);
        return void 0 === ZC ? QQ : {
          packVariant: ZC,
          liquid: CC.liquid
        }
      }
      packVariant(CC, zC) {
        return CC.customRenderMat ? void 0 : function(CC, zC) {
          const ZC = CC ? CC.defineFor(zC ? "liquid" : "terrain") : 0;
          return 0 === ZC ? void 0 : ZC
        }(zC, CC.liquid)
      }
      isBlended(CC) {
        return CC.model.transparencyMode === vC.t.alphaBlend
      }
      shaderModule(CC, zC) {
        let ZC = this.modules.get(CC);
        return ZC || (ZC = this.device.createShaderModule({
          label: zC,
          code: CC
        }), this.modules.set(CC, ZC)), ZC
      }
      pipelineFor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!CC.bindGroupLayout) return null;
        if (!QC) return this.pipelineOf(CC, zC, ZC);
        const wC = this.pipelineIdNow(CC, zC, !0, ZC),
          bC = this.pipelines.get(wC);
        if (bC) return bC;
        const nC = this.pipelineOf(CC, zC, ZC);
        return nC && void 0 === bC && this.startPipeline(wC, CC, {
          ...this.programKey(CC, zC),
          resting: QC
        }, ZC), nC
      }
      pipelineOf(CC, zC, ZC) {
        const QC = this.pipelineIdNow(CC, zC, !1, ZC),
          wC = this.pipelines.get(QC);
        return void 0 !== wC ? wC : (this.startPipeline(QC, CC, this.programKey(CC, zC), ZC), null)
      }
      pipelineIdNow(CC, zC, ZC, QC) {
        const {
          lighting: wC,
          dirLightCount: bC
        } = this, {
          transparencyMode: nC,
          backFaceCulling: fC
        } = CC.model, oC = this.packVariant(CC, this.zg), qC = (zC ? 2 : 0) + (ZC ? 1 : 0), FC = CC.pipelineIds[qC];
        if (null !== FC && FC.lighting === wC && FC.dirLightCount === bC && FC.packVariant === oC && FC.transparencyMode === nC && FC.cull === fC && FC.atlasCount === CC.atlasCount && FC.tV === CC.tV && FC.atlasLayers === CC.atlasLayers && FC.colorFormat === QC._colorFormat && FC.depthStencilFormat === QC._depthStencilFormat && FC.sampleCount === QC._sampleCount) return FC.id;
        const WC = this.programKey(CC, zC),
          NC = this.pipelineId(CC, ZC ? {
            ...WC,
            resting: ZC
          } : WC, QC);
        return CC.pipelineIds[qC] = {
          id: NC,
          lighting: wC,
          dirLightCount: bC,
          packVariant: oC,
          transparencyMode: nC,
          cull: fC,
          atlasCount: CC.atlasCount,
          tV: CC.tV,
          atlasLayers: CC.atlasLayers,
          colorFormat: QC._colorFormat,
          depthStencilFormat: QC._depthStencilFormat,
          sampleCount: QC._sampleCount
        }, NC
      }
      pipelineId(CC, zC, ZC) {
        return zo(zC, this.isBlended(CC), CC.model.backFaceCulling, ZC)
      }
      pipelineBuild(CC, zC, ZC) {
        var QC;
        const wC = this.pipelineId(CC, zC, ZC);
        return null !== (QC = this.builds.get(wC)) && void 0 !== QC ? QC : this.startPipeline(wC, CC, zC, ZC)
      }
      startPipeline(CC, zC, ZC, QC) {
        var wC;
        this.pipelines.set(CC, null);
        const bC = KQ(ZC),
          nC = this.isBlended(zC),
          fC = this.shadowMask && QC._depthStencilFormat ? function(CC, zC, ZC, QC) {
            if (void 0 === CC.packVariant || CC.liquid || zC) return "none";
            const wC = (0, hz.g)(CC.packVariant);
            return null === wC || void 0 === wC || !wC.sunShadow || !XZ(wC, ZC) || wC.discards || CC.alphaTest && bQ(CC.packVariant) ? "none" : QC ? "edge" : "plain"
          }(ZC, nC, !!this.sunShadow, QC._sampleCount > 1) : "none";
        let oC;
        try {
          oC = YQ(ZC, !!this.sunShadow, fC)
        } catch (pC) {
          if (!qQ(ZC)) throw pC;
          return this.failedPackBuild(CC, ZC, bC, pC)
        }
        const qC = this.shaderModule(oC, bC),
          FC = [];
        ZC.packed || (FC.push(function(CC, zC) {
          const ZC = [{
            shaderLocation: Bf.position,
            offset: iz.g.yC,
            format: "float32x3"
          }, {
            shaderLocation: Bf.normal,
            offset: iz.g.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Bf.color,
            offset: iz.g.colorOffset,
            format: "unorm8x4"
          }];
          return CC && ZC.push({
            shaderLocation: Bf.uv,
            offset: iz.g.uvOffset,
            format: "float32x2"
          }), zC && ZC.push({
            shaderLocation: Bf.blockFlagWords,
            offset: iz.g.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: iz.g.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: ZC
          }
        }("none" !== ZC.texture, qQ(ZC))), ZC.lighting && FC.push(kf));
        const WC = zC.model.backFaceCulling,
          NC = {
            label: bC,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, zC.bindGroupLayout, ...tb(this.device, ZC, !!this.sunShadow, "none" !== fC)]
            }),
            vertex: {
              module: qC,
              entryPoint: "mainVertex",
              buffers: FC
            },
            fragment: OC({
              module: qC,
              entryPoint: "mainFragment"
            }, QC, nC ? Vf : null),
            depthStencil: QC._depthStencilFormat ? {
              format: QC._depthStencilFormat,
              depthCompare: null !== (wC = QC._depthCompare) && void 0 !== wC ? wC : Zz,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: QC._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: WC ? "back" : "none"
            }
          },
          MC = ZC.resting ? 0 : 1;
        this.compiling += MC;
        const gC = "none" === fC ? this.device.createRenderPipelineAsync(NC) : this.startMaskPipelines(qC, NC, "edge" === fC);
        gC.then((zC => {
          this.compiling -= MC, this.pipelines.set(CC, zC)
        }), (CC => {
          this.compiling -= MC, console.error(`Lite terrain pipeline ${bC} failed`, CC), Tf(ZC, bC, qC, CC)
        }));
        const SC = {
          name: bC,
          module: qC,
          built: gC
        };
        return this.builds.set(CC, SC), SC
      }
      startMaskPipelines(CC, zC, ZC) {
        const QC = zC.depthStencil,
          wC = this.device.createRenderPipelineAsync(ZC ? zC : {
            ...zC,
            depthStencil: {
              ...QC,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          bC = this.device.createRenderPipelineAsync({
            ...zC,
            label: `${zC.label}-prepass`,
            fragment: {
              module: CC,
              entryPoint: "prepassFragment",
              targets: [{
                format: Yf
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([wC, bC]).then((CC => {
          let [zC, ZC] = CC;
          return this.prepassOf.set(zC, ZC), this.maskPipelines++, zC
        }))
      }
      failedPackBuild(CC, zC, ZC, QC) {
        console.error(`Lite terrain pipeline ${ZC} failed`, QC), Tf(zC, ZC, null, QC);
        const wC = Promise.reject(QC);
        wC.catch((() => {}));
        const bC = {
          name: ZC,
          module: null,
          built: wC
        };
        return this.builds.set(CC, bC), bC
      }
      checkShaderPack(CC) {
        return uf(CC, {
          device: this.device,
          target: this.target,
          material: CC => this.materialFor(CC),
          programKey: (CC, zC, ZC) => this.programKey(CC, zC, ZC),
          pipelineBuild: (CC, zC, ZC) => this.pipelineBuild(CC, zC, ZC)
        })
      }
      createBinding(CC, zC, ZC) {
        return this.target = zC, {
          renderable: CC,
          pipeline: nz(this.device, zC),
          draw: CC => {
            this.geometry.setDrawing(!0);
            try {
              return ZC ? this.drawTransparent(CC, zC) : this.drawOpaque(CC, zC)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(CC, zC) {
        var ZC, QC, wC, bC;
        const {
          MN: nC
        } = CC;
        this.lighting = CC.lS;
        const fC = (0, pf.A)(zC);
        this.dirLightCount = Math.min(fC, 4), this.zg = null !== (ZC = nC.zg) && void 0 !== ZC ? ZC : null, fC > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(CC, zC), this.animateMaterials(zC.animTick);
        const oC = nC.YN,
          qC = oC[0] !== this.originOffset[0] || oC[1] !== this.originOffset[1] || oC[2] !== this.originOffset[2];
        qC && (this.originOffset[0] = oC[0], this.originOffset[1] = oC[1], this.originOffset[2] = oC[2]);
        const FC = zC.eye;
        this.eye[0] = FC[0], this.eye[1] = FC[1], this.eye[2] = FC[2], this.writeShaderPackInputs();
        const WC = zC.projectionMatrix,
          NC = 0 === WC[15];
        let MC = 0;
        (qC || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: gC
        } = this;
        fz(this.transparentRenderable._worldCenter, zC, wz), this.resetBatches(NC), this.transparent.length = 0, this.unlit.length = 0;
        const SC = nC.fN.WCC,
          pC = SC / 2 * Math.sqrt(3);
        let PC = 0;
        const GC = !!this.zg && wQ(this.zg.defineFor("liquid"));
        let RC = !1;
        const AC = null !== (QC = null === (wC = nC.JA) || void 0 === wC ? void 0 : wC.visibility) && void 0 !== QC ? QC : null,
          xC = this.visCull && NC && 0 === this.compiling && null !== AC && nC.fN.fQC[0] >= this.visCullMinDistance ? this.target : null,
          JC = this.visPassable,
          IC = this.visCandidates,
          iC = this.visCandidateBatches;
        JC.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let vC = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let eC = 0;
        const hC = (CC, ZC) => {
          if (!ZC) return this.transparent.push(CC), void(eC += 2 * CC.faceCount);
          if (null !== CC.faceGroups && ZC.faceCull) {
            if (0 === MC && (MC = (0, tf.c)(WC, zC.renderWidth, zC.renderHeight), MC !== this.faceFocalPx && (this.faceFocalPx = MC, gC = ++this.faceEpoch)), CC.faceEpoch !== gC) {
              CC.faceEpoch = gC;
              const zC = Math.sqrt(CC.distance) + pC,
                ZC = (0, tf.f)(CC.planePX, CC.planeNX, CC.planePY, CC.planeNY, CC.planePZ, CC.planeNZ, this.eye[0] - (CC.origin[0] - this.originOffset[0]), this.eye[1] - (CC.origin[1] - this.originOffset[1]), this.eye[2] - (CC.origin[2] - this.originOffset[2]), (0, tf.e)(zC, MC));
              ZC !== CC.faceMask && this.chooseFaceRanges(CC, CC.faceGroups, ZC)
            }
            if (0 === CC.rangeCount) return
          } else - 1 !== CC.faceMask && this.drawWhole(CC);
          ZC.meshes.push(CC), eC += 2 * ((CC.rangeCount > 0 ? CC.count0 : 0) + (CC.rangeCount > 1 ? CC.count1 : 0))
        };
        for (const YC of this.chunks.values()) {
          qC && this.writeSlot(YC);
          const CC = YC.mesh.visibility;
          CC !== YC.visibility && (YC.visibility = CC, this.slots.setVisibility(YC.slot, CC));
          const {
            material: ZC
          } = YC;
          this.geometry.lost(YC) && performance.now() >= YC.lostRetryAt && this.remeshLost(nC, YC);
          const QC = !(null === ZC || void 0 === ZC || !ZC.bindGroup) && this.geometry.backed(YC),
            wC = QC && this.lighting && !YC.vertices.page.twin;
          if (xC && (Number.isNaN(YC.key) && (YC.ci = Math.floor(YC.origin[0] / SC), YC.cj = Math.floor(YC.origin[1] / SC), YC.ck = Math.floor(YC.origin[2] / SC), YC.key = (0, jf.f)(YC.ci, YC.cj, YC.ck)), (!QC || CC < 1 || wC || !this.batchDraws(ZC, YC.packed, xC)) && this.visSeeThrough(YC, xC) && JC.add(YC.key)), !QC) continue;
          wC || (YC.lostRemeshes = 0);
          const bC = YC.origin[0] - this.originOffset[0],
            fC = YC.origin[1] - this.originOffset[1],
            oC = YC.origin[2] - this.originOffset[2];
          if (!(0, wf.d)(zC.frustum, bC, fC, oC, SC)) continue;
          const FC = bC + SC / 2 - this.eye[0],
            WC = fC + SC / 2 - this.eye[1],
            MC = oC + SC / 2 - this.eye[2];
          if (YC.distance = FC * FC + WC * WC + MC * MC, this.lighting && !YC.lit && (PC = Math.max(PC, YC.vertexCount), this.unlit.push(YC)), wC) continue;
          const gC = this.isBlended(ZC) ? null : this.batchFor(ZC, YC.packed, YC.vertices.page, 1 === CC, NC);
          xC ? (IC[vC] = YC, iC[vC++] = gC) : hC(YC, gC)
        }
        const KC = xC ? this.sweepVisibility(CC, zC, AC) : null;
        null === (bC = (0, mb.y)(nC)) || void 0 === bC || bC.update(zC.frustum, this.originOffset, SC, KC);
        for (let YC = 0; YC < vC; YC++) {
          const CC = IC[YC];
          !KC || KC.isDrawn(CC.ci, CC.cj, CC.ck) ? hC(CC, iC[YC]) : (this.visCulledParts++, this.visCulledTriangles += 2 * CC.faceCount)
        }
        for (const YC of this.transparent) RC ||= GC && YC.material.liquid && !YC.material.customRenderMat;
        this.submittedTriangles = eC, KC && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(CC, zC, KC)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(RC) : RC && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && PC > 0 && this.geometry.lightFullSky(this.unlit, PC);
        for (const YC of this.opaqueBatches) this.chunkSorter.sort(YC.meshes, 1) || YC.meshes.sort(Zo);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Qo)
      }
      sweepVisibility(CC, zC, ZC) {
        const {
          fN: QC
        } = CC.MN, wC = QC.WCC, bC = this.visPassable, nC = this.eye[0] + this.originOffset[0], fC = this.eye[1] + this.originOffset[1], oC = this.eye[2] + this.originOffset[2];
        if (!ZC.eyeClear(nC, fC, oC, zC.near, zC.projectionMatrix, QC)) return null;
        const [qC, FC] = QC.fQC, WC = ZC.update(nC, fC, oC, wC, qC, FC, bC);
        return this.visSweeps = ZC.sweeps, WC ? ZC : null
      }
      visSeeThrough(CC, zC) {
        const {
          material: ZC
        } = CC;
        return (!ZC || !this.isBlended(ZC)) && (CC.mesh.visibility < 1 || !(null !== ZC && void 0 !== ZC && ZC.bindGroup) || CC.faceCount > 0 && (!this.geometry.backed(CC) || this.lighting && !CC.vertices.page.twin) || !this.batchDraws(ZC, CC.packed, zC))
      }
      batchDraws(CC, zC, ZC) {
        var QC;
        const wC = zC ? 2 : 0;
        if (CC === this.visDrawsMaterial && function(CC, zC) {
            return 0 !== (CC & 1 << zC)
          }(this.visDrawsBits, wC)) return 0 !== (this.visDrawsBits & 2 << wC);
        let bC = null !== (QC = this.visBatchDraws.get(CC)) && void 0 !== QC ? QC : 0;
        if (!(bC & 1 << wC)) {
          bC |= 1 << wC | (!!CC.bindGroupLayout && this.canDraw(CC, zC) && !!this.pipelines.get(this.pipelineIdNow(CC, zC, !1, ZC)) ? 2 << wC : 0), this.visBatchDraws.set(CC, bC)
        }
        return this.visDrawsMaterial = CC, this.visDrawsBits = bC, 0 !== (bC & 2 << wC)
      }
      runVisCheck(CC, zC, ZC) {
        const {
          MN: QC
        } = CC, {
          fN: wC
        } = QC, bC = wC.WCC, nC = new Set;
        for (const MC of this.chunks.values()) nC.add(MC.key);
        const fC = Rw.Matrix.FromArray(zC.viewProjectionMatrix).invert(),
          [oC, qC, FC] = this.originOffset,
          WC = new Rw.Eg,
          NC = function(CC, zC, ZC, QC) {
            const wC = new Set;
            for (let bC = 0; bC < 27; bC++)
              for (let nC = 0; nC < 48; nC++) {
                const fC = ZC((nC + .5) / 48 * 2 - 1, (bC + .5) / 27 * 2 - 1);
                yf(CC, zC, [fC[0] - zC[0], fC[1] - zC[1], fC[2] - zC[2]], QC, wC)
              }
            return wC
          }({
            Wy: (CC, zC, ZC) => wC.Wy(CC, zC, ZC),
            occluders: ZC.occluders,
            opaque: ZC.opaque,
            Ig: bC,
            isDrawn: (CC, zC, QC) => ZC.isDrawn(CC, zC, QC),
            hasParts: (CC, zC, ZC) => nC.has((0, jf.f)(CC, zC, ZC))
          }, [this.eye[0] + oC, this.eye[1] + qC, this.eye[2] + FC], ((CC, zC) => (Rw.Eg.TransformCoordinatesFromFloatsToRef(CC, zC, .5, fC, WC), [WC.x + oC, WC.y + qC, WC.z + FC])), (wC.fQC[0] + 1) * bC);
        this.visViolations = NC.size;
        for (const MC of NC) this.warnOnce(`vis:${MC}`, `Lite terrain cave culling skipped chunk ${MC}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var CC;
        null !== (CC = this.zg) && void 0 !== CC && CC.isRunning() && (this.shaderPackInputs ??= new Db(this.device, this.zg.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.zg, this.eye, this.lighting))
      }
      bindShaderPackInputs(CC, zC, ZC) {
        var QC, wC, bC, nC;
        let fC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const oC = this.packVariant(zC, ZC);
        if (void 0 === oC) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Db(this.device, ZC.textureLayers(), this.sunShadow), this.shaderPackInputs.write(ZC, this.eye, this.lighting));
        const qC = wQ(oC) ? null !== (QC = null === (wC = this.sceneDepth) || void 0 === wC ? void 0 : wC.view) && void 0 !== QC ? QC : this.standIn() : null,
          FC = fC ? null !== (bC = null === (nC = this.shadowMask) || void 0 === nC ? void 0 : nC.view) && void 0 !== bC ? bC : this.standIn() : null;
        this.shaderPackInputs.bind(CC, qC, ab(oC, !!this.sunShadow), FC)
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
        var CC, zC;
        return null !== (CC = null === (zC = this.shaderPackInputs) || void 0 === zC ? void 0 : zC.bindGroupFor(null, !0)) && void 0 !== CC ? CC : null
      }
      resetBatches(CC) {
        const zC = this.opaqueBatches;
        let ZC = 0;
        for (const QC of zC) QC.meshes.length > 0 && (QC.meshes.length = 0, QC.faceCull = this.batchFaceCull(QC.material, CC), zC[ZC++] = QC);
        zC.length = ZC
      }
      orderBatches() {
        const CC = this.opaqueBatches;
        for (let zC = 0; zC < CC.length; zC++) {
          const ZC = CC[zC];
          ZC.group = zC;
          for (let QC = 0; QC < zC; QC++) {
            const zC = CC[QC];
            if (zC.material === ZC.material && zC.packed === ZC.packed) {
              ZC.group = zC.group;
              break
            }
          }
          ZC.nearest = ZC.meshes.length > 0 ? ZC.meshes[0].distance : 1 / 0
        }
        CC.sort(Lf)
      }
      batchFor(CC, zC, ZC, QC, wC) {
        for (const nC of this.opaqueBatches)
          if (nC.material === CC && nC.packed === zC && nC.page === ZC && nC.resting === QC) return nC;
        const bC = {
          material: CC,
          packed: zC,
          page: ZC,
          resting: QC,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(CC, wC)
        };
        return this.opaqueBatches.push(bC), bC
      }
      batchFaceCull(CC, zC) {
        return !(!zC || !(0, af.r)(CC.model)) && (!this.zg || ! function(CC) {
          var zC;
          return !(null === (zC = (0, hz.g)(CC)) || void 0 === zC || !zC.movesVertices)
        }(this.packVariant(CC, this.zg)))
      }
      writeFrameUniforms(CC, zC) {
        const ZC = this.frameUniforms,
          QC = FQ;
        if ((0, pf.C)(CC, ZC), ZC[QC.fogInfos] = zC.fogEnabled ? zC.fogMode : 0, ZC[QC.fogInfos + 1] = zC.fogStart, ZC[QC.fogInfos + 2] = zC.fogEnd, ZC[QC.fogInfos + 3] = zC.fogDensity, ZC.set(zC.fogColour, QC.fogColour), ZC[QC.outputHeight] = zC.renderHeight, ZC.set(zC.ambientColour, QC.sceneAmbient), (0, pf.y)(zC, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const zC = (0, Pf.e)(CC.zS, CC.eg, CC.hg);
          for (let CC = 0; CC < 4; CC++) ZC[QC.aoLevels + CC] = zC[CC] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, ZC)
      }
      animateMaterials(CC) {
        const zC = NQ.anim;
        for (const ZC of this.materials.values()) ZC.animated && (ZC.uniformData[zC] = CC, this.device.queue.writeBuffer(ZC.uniformBuffer, 4 * zC, ZC.uniformData, zC, 1))
      }
      canDraw(CC, zC) {
        return !("atlas" === CC.texture && !zC) || (this.warnOnce(`stride:${CC.id}`, `Lite terrain: material "${CC.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(CC, zC) {
        let ZC = 0;
        CC.setBindGroup(1, this.frameBindGroup);
        for (const QC of this.opaqueBatches) {
          if (!QC.meshes.length || !this.canDraw(QC.material, QC.packed)) continue;
          const wC = this.pipelineFor(QC.material, QC.packed, zC, QC.resting);
          wC && (CC.setPipeline(wC), CC.setBindGroup(2, QC.material.bindGroup), this.zg && this.bindShaderPackInputs(CC, QC.material, this.zg, this.prepassOf.has(wC)), ZC += this.drawBatch(CC, QC))
        }
        return ZC
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(CC, zC, ZC) {
        const QC = this.target,
          wC = this.zg;
        if (!QC || !wC || 0 === this.maskPipelines) return 0;
        let bC = 0,
          nC = null;
        this.geometry.setDrawing(!0);
        try {
          for (const fC of this.opaqueBatches) {
            if (!fC.meshes.length || !this.canDraw(fC.material, fC.packed)) continue;
            const oC = this.pipelineFor(fC.material, fC.packed, QC, fC.resting),
              qC = oC && this.prepassOf.get(oC);
            qC && (nC || (nC = CC.beginRenderPass(zC), nC.setBindGroup(0, ZC), nC.setBindGroup(1, this.frameBindGroup)), nC.setPipeline(qC), nC.setBindGroup(2, fC.material.bindGroup), this.bindShaderPackInputs(nC, fC.material, wC, !0), bC += this.drawBatch(nC, fC))
          }
        } finally {
          var fC;
          null === (fC = nC) || void 0 === fC || fC.end(), this.geometry.setDrawing(!1)
        }
        return bC
      }
      drawBatch(CC, zC) {
        let ZC = 0;
        for (const QC of zC.meshes) {
          const {
            rangeCount: zC
          } = QC;
          zC > 0 && (ZC += this.geometry.draw(CC, QC, this.lighting, QC.first0, QC.count0), zC > 1 && (ZC += this.geometry.draw(CC, QC, this.lighting, QC.first1, QC.count1)))
        }
        return ZC
      }
      drawTransparent(CC, zC) {
        let ZC = 0,
          QC = null,
          wC = null;
        CC.setBindGroup(1, this.frameBindGroup);
        for (const bC of this.transparent) {
          const nC = bC.material;
          if (!this.canDraw(nC, bC.packed)) continue;
          const fC = this.pipelineFor(nC, bC.packed, zC);
          fC && (fC !== QC && (CC.setPipeline(fC), QC = fC, this.zg && this.bindShaderPackInputs(CC, nC, this.zg)), nC !== wC && (CC.setBindGroup(2, nC.bindGroup), wC = nC), ZC += this.geometry.draw(CC, bC, this.lighting))
        }
        return ZC
      }
    }

    function zo(CC, zC, ZC, QC) {
      return `${KQ(CC)}|${CC.atlasLayers}|${CC.tV}|${zC}|${ZC}|${QC._colorFormat}|${QC._depthStencilFormat}|${QC._sampleCount}`
    }

    function Zo(CC, zC) {
      return CC.distance - zC.distance
    }

    function Qo(CC, zC) {
      return zC.distance - CC.distance
    }
    class wo {
      constructor() {
        this.left = []
      }
      sort(CC, zC) {
        for (let ZC = 0; ZC < CC.length; ZC++) {
          const zC = CC[ZC].distance;
          if (zC - zC !== 0) return !1
        }
        return this.sortRange(CC, 0, CC.length, zC), !0
      }
      sortRange(CC, zC, ZC, QC) {
        if (ZC - zC <= 16) {
          for (let wC = zC + 1; wC < ZC; wC++) {
            const ZC = CC[wC],
              bC = QC * ZC.distance;
            let nC = wC - 1;
            for (; nC >= zC && QC * CC[nC].distance > bC; nC--) CC[nC + 1] = CC[nC];
            CC[nC + 1] = ZC
          }
          return
        }
        const wC = zC + ZC >>> 1;
        if (this.sortRange(CC, zC, wC, QC), this.sortRange(CC, wC, ZC, QC), QC * CC[wC - 1].distance <= QC * CC[wC].distance) return;
        const {
          left: bC
        } = this, nC = wC - zC;
        for (let FC = 0; FC < nC; FC++) bC[FC] = CC[zC + FC];
        let fC = 0,
          oC = wC,
          qC = zC;
        for (; fC < nC && oC < ZC;) CC[qC++] = QC * CC[oC].distance < QC * bC[fC].distance ? CC[oC++] : bC[fC++];
        for (; fC < nC;) CC[qC++] = bC[fC++]
      }
    }
    const bo = Math.ceil(102);

    function no(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zC;
      const bC = Math.min(zC, ZC),
        nC = new Uint32Array(CZ(QC));
      for (let fC = 0; fC < QC; fC++) {
        const zC = Math.floor(fC * bC / QC),
          ZC = Math.max(zC + 1, Math.floor((fC + 1) * bC / QC));
        for (let oC = 0; oC < QC; oC++) {
          const qC = Math.floor(oC * bC / QC),
            FC = Math.max(qC + 1, Math.floor((oC + 1) * bC / QC));
          let WC = 0;
          for (let QC = zC; QC < ZC; QC++)
            for (let zC = qC; zC < FC; zC++) CC[QC * wC + zC] >= bo && WC++;
          if (2 * WC >= (ZC - zC) * (FC - qC)) {
            const CC = oC + QC * fC;
            nC[CC >>> 5] |= 1 << (31 & CC)
          }
        }
      }
      return nC
    }

    function fo(CC) {
      return Math.max(1, Math.min(16, CC))
    }
    class oo {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = CC, this.loadTexture = zC, this.warn = ZC, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(CC, zC) {
        return (CC.Gs !== this.builtVersion || this.blockCaster.length !== zC) && (this.build(CC, zC), !0)
      }
      build(CC, zC) {
        this.builtVersion = CC.Gs;
        const ZC = new Uint16Array(zC),
          QC = new Map;
        for (let wC = 1; wC < zC; wC++) {
          const zC = this.classify(CC, wC, QC);
          if (null === zC || zC === Uz) {
            ZC[wC] = null === zC ? 0 : Uz;
            continue
          }
          let bC = this.byKey.get(zC.key);
          void 0 === bC && (bC = this.allocate(zC), this.byKey.set(zC.key, bC)), ZC[wC] = bC
        }
        this.blockCaster = ZC, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(CC, zC) {
        const ZC = CC.Z6[zC];
        if ("function" !== typeof ZC) return ZC;
        try {
          return ZC()
        } catch (QC) {
          return this.warnOnce(`Sun shadows: no caster option for block ${zC}: ${QC instanceof Error?QC.message:String(QC)}`), null
        }
      }
      classify(CC, zC, ZC) {
        const QC = this.option(CC, zC);
        if ("none" === QC) return null;
        if (QC && QC.planes.length > 0) {
          const CC = QC.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(CC)}`,
            planes: CC
          }
        }
        if (CC.WM[zC]) return null;
        const wC = CC.MM[zC] ? CC.Xs(zC) : null;
        if (wC && wC.length >= 6) {
          const CC = function(CC) {
            const zC = new Uint32Array(16);
            for (let ZC = 0; ZC + 6 <= CC.length; ZC += 6) {
              const QC = [0, 1, 2].map((zC => Math.max(0, Math.ceil(8 * CC[ZC + zC] - .5)))),
                wC = [0, 1, 2].map((zC => Math.min(7, Math.floor(8 * CC[ZC + zC + 3] - .5))));
              for (let CC = QC[2]; CC <= wC[2]; CC++)
                for (let ZC = QC[1]; ZC <= wC[1]; ZC++)
                  for (let bC = QC[0]; bC <= wC[0]; bC++) {
                    const QC = bC + 8 * (ZC + 8 * CC);
                    zC[QC >>> 5] |= 1 << (31 & QC)
                  }
            }
            return zC
          }(wC);
          return function(CC) {
            return CC.every((CC => 4294967295 === CC))
          }(CC) ? Uz : CC.every((CC => 0 === CC)) ? null : {
            kind: "shape",
            key: `shape:${CC.join(",")}`,
            mask: CC
          }
        }
        if (CC.aJ[zC] || !CC.ZS[zC]) return null;
        const bC = [0, 1, 2, 3, 4, 5].map((QC => {
          const wC = CC.QS[6 * zC + QC];
          let bC = ZC.get(wC);
          return void 0 === bC && (bC = function(CC) {
            if (!CC || CC.MS) return null;
            const {
              sV: zC,
              tV: ZC,
              rV: QC
            } = CC;
            if (!zC || !ZC || !(ZC > 0) || void 0 === QC || !(QC >= 0)) return null;
            const wC = zC[0],
              bC = ZC * ZC * 4;
            if (!wC || wC.byteLength < bC) return null;
            const nC = Math.floor(wC.byteLength / bC),
              fC = zC[Math.floor(QC / nC)];
            if (!fC) return null;
            const oC = new Uint8Array(fC.buffer, fC.byteOffset, fC.byteLength),
              qC = QC % nC * bC;
            if (qC + bC > oC.length) return null;
            const FC = new Uint8Array(ZC * ZC);
            let WC = !1;
            for (let NC = 0; NC < FC.length; NC++) FC[NC] = oC[qC + 4 * NC + 3], WC ||= FC[NC] < bo;
            return WC ? {
              alpha: FC,
              width: ZC
            } : null
          }(CC.NS(wC)), ZC.set(wC, bC)), bC
        }));
        if (bC.every((CC => null === CC))) return Uz;
        const nC = fo(Math.max(...bC.map((CC => {
            var zC;
            return null !== (zC = null === CC || void 0 === CC ? void 0 : CC.width) && void 0 !== zC ? zC : 1
          })))),
          fC = new Uint32Array(CZ(nC)).fill(4294967295),
          oC = bC.map((CC => null === CC ? fC : no(CC.alpha, CC.width, CC.width, nC)));
        return {
          kind: "cutout",
          key: `cutout:${nC}:${oC.map((CC=>CC.join(","))).join("|")}`,
          size: nC,
          faces: oC
        }
      }
      allocate(CC) {
        if (this.nextCaster >= zZ) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const zC = this.nextCaster++;
        if (this.writeCaster(zC, Bz, 0, 0, 0), "shape" === CC.kind) {
          const ZC = this.allocateMask(CC.mask.length);
          ZC >= 0 && (this.sink(ZC, CC.mask), this.writeCaster(zC, Oz, ZC, 0, 8))
        } else if ("cutout" === CC.kind) {
          const ZC = CZ(CC.size),
            QC = this.allocateMask(6 * ZC);
          if (QC >= 0) {
            const wC = new Uint32Array(6 * ZC);
            CC.faces.forEach(((CC, zC) => {
              wC.set(CC, zC * ZC)
            })), this.sink(QC, wC), this.writeCaster(zC, Vz, QC, 0, CC.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(zC, CC.planes).finally((() => {
          this.planesLoading--
        })));
        return zC
      }
      async loadPlanes(CC, zC) {
        const ZC = await Promise.all(zC.map((CC => this.texture(CC.texture))));
        if (ZC.some((CC => null === CC))) return;
        const QC = ZC,
          wC = fo(Math.max(...QC.map((CC => Math.min(CC.width, CC.height))))),
          bC = CZ(wC),
          nC = this.allocateMask(zC.length * (4 + bC));
        if (nC < 0) return;
        const fC = new Uint32Array(zC.length * (4 + bC)),
          oC = 4 * zC.length;
        zC.forEach(((CC, zC) => {
          const ZC = nC + oC + zC * bC;
          fC.set(function(CC, zC) {
            const [ZC, QC] = CC.tangent, wC = Math.hypot(ZC, QC) || 1, bC = ZC / wC, nC = QC / wC, fC = CC.centre[0] * nC - CC.centre[1] * bC, oC = new Uint32Array(4);
            return new Float32Array(oC.buffer, 0, 3).set([bC, nC, fC]), oC[3] = zC, oC
          }(CC, ZC), 4 * zC), fC.set(no(QC[zC].alpha, QC[zC].width, QC[zC].height, wC), oC + zC * bC)
        })), this.sink(nC, fC), this.writeCaster(CC, kz, nC, zC.length, wC)
      }
      texture(CC) {
        let zC = this.textures.get(CC);
        return zC || (zC = this.loadTexture(CC).catch((zC => (this.warn(`Sun shadows: no mask for ${CC}: ${zC instanceof Error?zC.message:String(zC)}`), null))), this.textures.set(CC, zC)), zC
      }
      allocateMask(CC) {
        if (this.nextMaskWord + CC > ZZ) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const zC = 32768 + this.nextMaskWord;
        return this.nextMaskWord += CC, zC
      }
      writeCaster(CC, zC, ZC, QC, wC) {
        this.sink(0 + 4 * CC, Uint32Array.of(zC, ZC, QC, wC))
      }
      warnOnce(CC) {
        this.warned.has(CC) || (this.warned.add(CC), this.warn(CC))
      }
    }
    var qo = ZC(2818);

    function Fo(CC) {
      return !CC.SS && !CC.xJ && !CC.jg
    }

    function Wo() {
      return {
        bricks: new Uint32Array(sz),
        cells: new Uint16Array(32768),
        special: new Uint8Array(uz)
      }
    }
    class No {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = CC, this.writeVoxels = zC, this.writePool = ZC, this.warn = QC, this.eyeChunk = null, this.slotChunk = new Array(mz).fill(null), this.slotVersion = new Float64Array(mz).fill(-1), this.slotPool = new Array(mz).fill(null), this.starved = new Uint8Array(mz), this.queue = [], this.queued = new Uint8Array(mz), this.queueSorted = !0, this.freePool = new Uint32Array(QZ), this.freeCount = QZ, this.casterTable = null, this.warnedPool = !1, this.scratch = Wo(), this.victimScratch = Wo(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * mz), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let wC = 0; wC < QZ; wC++) this.freePool[wC] = 65535 - wC
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return QZ - this.freeCount
      }
      chunkAdded(CC) {
        if (null === this.eyeChunk || !this.inRadius(CC.i, CC.j, CC.k)) return;
        const zC = jz(CC.i, CC.j, CC.k);
        this.slotChunk[zC] = CC, this.slotVersion[zC] = -1, this.enqueue(zC)
      }
      update(CC, zC, ZC) {
        const QC = this.casters.blockCaster;
        if (QC !== this.casterTable) {
          this.casterTable = QC;
          for (let CC = 0; CC < mz; CC++) this.slotVersion[CC] = -1, this.slotChunk[CC] && this.enqueue(CC)
        }
        const wC = Math.floor(CC[0] / 32),
          bC = Math.floor(CC[1] / 32),
          nC = Math.floor(CC[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== wC || this.eyeChunk[1] !== bC || this.eyeChunk[2] !== nC) && (this.eyeChunk = [wC, bC, nC], this.follow(zC), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let fC = 0; fC < mz; fC++) {
          const CC = this.slotChunk[fC];
          CC && (CC.GJ || CC.Ug !== this.slotVersion[fC]) && this.enqueue(fC)
        }
        this.drain(ZC), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(CC, zC) {
        this.records.set(zC, 4 * CC), this.windowTopStale = !0, this.writeVoxels(4 * CC, zC)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const CC = this.records;
        let zC = -1 / 0;
        for (let QC = 0; QC < CC.length; QC += 4) {
          const ZC = 255 & CC[QC + 3];
          ZC !== lz && ZC !== Xz || !this.inRadius(CC[QC], CC[QC + 1], CC[QC + 2]) || (zC = Math.max(zC, CC[QC + 1] * Kz + (CC[QC + 3] >>> 8)))
        }
        const ZC = zC === -1 / 0 ? 1 : zC + az;
        ZC !== this.windowTop[0] && (this.windowTop[0] = ZC, this.writeVoxels(Tz, this.windowTop))
      }
      follow(CC) {
        const zC = this.eyeChunk,
          [ZC, QC, wC] = Yz;
        for (let nC = -wC; nC <= wC; nC++)
          for (let wC = -QC; wC <= QC; wC++)
            for (let QC = -ZC; QC <= ZC; QC++) {
              var bC;
              const ZC = zC[0] + QC,
                fC = zC[1] + wC,
                oC = zC[2] + nC,
                qC = jz(ZC, fC, oC),
                FC = this.slotChunk[qC];
              if (FC && !FC.GJ && FC.i === ZC && FC.j === fC && FC.k === oC) continue;
              const WC = null !== (bC = CC(ZC, fC, oC)) && void 0 !== bC ? bC : null;
              FC && (FC.i !== ZC || FC.j !== fC || FC.k !== oC) && this.slotPool[qC] && (this.release(qC), this.record.fill(0), this.writeRecord(qC, this.record)), this.slotChunk[qC] = WC, this.slotVersion[qC] = -1, (WC || FC) && this.enqueue(qC)
            }
      }
      requeueStarved() {
        for (let CC = 0; CC < mz; CC++) this.starved[CC] && this.slotChunk[CC] && this.enqueue(CC)
      }
      enqueue(CC) {
        this.queued[CC] || (this.queued[CC] = 1, this.queue.push(CC), this.queueSorted = !1)
      }
      drain(CC) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const CC = new Map;
          for (const zC of this.queue) CC.set(zC, this.slotDistance(zC));
          this.queue.sort(((zC, ZC) => CC.get(ZC) - CC.get(zC))), this.queueSorted = !0
        }
        const zC = performance.now();
        let ZC = 0;
        const QC = [];
        for (; this.queue.length > 0 && (0 === ZC || performance.now() - zC < CC);) {
          const CC = this.queue.pop(),
            zC = this.slotChunk[CC];
          !zC || zC.GJ || Fo(zC) ? (this.queued[CC] = 0, this.encodeSlot(CC), ZC++) : QC.push(CC)
        }
        for (let wC = QC.length - 1; wC >= 0; wC--) this.queue.push(QC[wC])
      }
      slotDistance(CC) {
        const zC = this.slotChunk[CC],
          ZC = this.eyeChunk;
        return zC ? Math.max(Math.abs(zC.i - ZC[0]), Math.abs(zC.j - ZC[1]), Math.abs(zC.k - ZC[2])) : 0
      }
      inRadius(CC, zC, ZC) {
        const QC = this.eyeChunk,
          [wC, bC, nC] = Yz;
        return Math.abs(CC - QC[0]) <= wC && Math.abs(zC - QC[1]) <= bC && Math.abs(ZC - QC[2]) <= nC
      }
      release(CC) {
        const zC = this.slotPool[CC];
        if (zC) {
          for (let CC = zC.length - 1; CC >= 0; CC--) this.freePool[this.freeCount++] = zC[CC];
          this.slotPool[CC] = null
        }
      }
      encodeSlot(CC) {
        var zC, ZC, QC, wC, bC;
        let nC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          fC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const oC = null !== (zC = null === (ZC = this.slotPool[CC]) || void 0 === ZC ? void 0 : ZC.length) && void 0 !== zC ? zC : 0;
        this.release(CC), this.starved[CC] = 0;
        const qC = this.slotChunk[CC],
          FC = this.record;
        if (!qC || qC.GJ || !qC.lN) return this.slotChunk[CC] = null, this.slotVersion[CC] = -1, FC.fill(0), this.writeRecord(CC, FC), void(oC > 0 && this.requeueStarved());
        this.slotVersion[CC] = qC.Ug;
        const WC = this.encodeBricks(qC, CC, nC, fC);
        FC[0] = qC.i, FC[1] = qC.j, FC[2] = qC.k, FC[3] = WC, this.writeRecord(CC, FC), null === (QC = this.encoded) || void 0 === QC || QC.call(this, qC), fC && (null !== (wC = null === (bC = this.slotPool[CC]) || void 0 === bC ? void 0 : bC.length) && void 0 !== wC ? wC : 0) < oC && this.requeueStarved()
      }
      encodeBricks(CC, zC, ZC, QC) {
        if (CC.Wg) return Ez;
        const wC = this.casters.blockCaster,
          {
            data: bC,
            stride: nC,
            offset: fC
          } = CC.lN,
          [oC, qC, FC] = nC,
          WC = Kz,
          {
            bricks: NC,
            cells: MC,
            special: gC
          } = ZC;
        NC.fill(0), gC.fill(0);
        let SC = 0,
          pC = 0,
          PC = 0;
        for (let GC = 0; GC < WC; GC++) {
          const zC = GC >> 2,
            ZC = 3 & GC,
            QC = CC.dM[GC],
            nC = QC === qo.i ? -1 : QC < wC.length ? wC[QC] : 0;
          if (0 !== nC)
            for (let CC = 0; CC < WC; CC++) {
              const QC = CC >> 2,
                RC = 3 & CC;
              let AC = fC + CC * oC + GC * qC;
              for (let CC = 0; CC < WC; CC++, AC += FC) {
                let fC = nC;
                if (fC < 0) {
                  const CC = bC[AC];
                  if (fC = CC < wC.length ? wC[CC] : 0, 0 === fC) continue
                }
                const oC = yz(QC, zC, CC >> 2),
                  qC = Lz(RC, ZC, 3 & CC);
                NC[3 * oC + (qC >>> 5)] |= 1 << (31 & qC), MC[oC * cz + qC] = fC, SC++, PC = GC, fC === Uz ? pC++ : gC[oC] = 1
              }
            }
        }
        return 0 === SC ? Ez : 32768 === pC ? lz | PC << 8 : (this.writePoolEntries(zC, ZC, QC), this.writeVoxels(rz + zC * sz, NC), Xz | PC << 8)
      }
      writePoolEntries(CC, zC, ZC) {
        const {
          bricks: QC,
          cells: wC,
          special: bC
        } = zC, nC = this.entry;
        let fC = 0;
        for (let FC = 0; FC < uz; FC++) fC += bC[FC];
        if (0 === fC) return;
        ZC && this.freeCount < fC && this.evictBeyond(CC, fC);
        const oC = new Uint32Array(ZC ? Math.min(fC, this.freeCount) : 0);
        let qC = 0;
        for (let FC = 0; FC < uz; FC++) {
          if (!bC[FC]) continue;
          const ZC = 3 * FC;
          if (qC === oC.length) {
            this.dropSpecials(zC, FC), this.starved[CC] = 1;
            continue
          }
          const fC = this.freePool[--this.freeCount];
          oC[qC++] = fC;
          for (let CC = 0; CC < cz; CC++) {
            const zC = QC[ZC + (CC >>> 5)] >>> (31 & CC) & 1 ? wC[FC * cz + CC] : 0;
            1 & CC ? nC[CC >> 1] |= zC << 16 : nC[CC >> 1] = zC
          }
          QC[ZC + 2] = fC + 1, this.writePool(wZ + 32 * fC, nC)
        }
        oC.length > 0 && (this.slotPool[CC] = oC)
      }
      evictBeyond(CC, zC) {
        const ZC = this.slotDistance(CC),
          QC = [];
        for (let wC = 0; wC < mz; wC++) wC !== CC && this.slotPool[wC] && this.slotDistance(wC) > ZC && QC.push(wC);
        QC.sort(((CC, zC) => this.slotDistance(zC) - this.slotDistance(CC)));
        for (const wC of QC) {
          if (this.freeCount >= zC) return;
          const CC = this.slotChunk[wC];
          CC && !CC.GJ && CC.lN && (CC.Ug === this.slotVersion[wC] || Fo(CC)) && this.encodeSlot(wC, this.victimScratch, !1)
        }
      }
      dropSpecials(CC, zC) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const ZC = 3 * zC;
        for (let QC = 0; QC < cz; QC++) CC.cells[zC * cz + QC] !== Uz && (CC.bricks[ZC + (QC >>> 5)] &= ~(1 << (31 & QC)))
      }
    }
    var Mo = ZC(37339);
    class go {
      constructor(CC) {
        this.device = CC, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new SZ, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.fN = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = CC.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = CC.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(CC, zC, ZC) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: QC
        } = this;
        QC.RM(CC, zC), ZC.forEachSunShadowCaster((CC => {
          this.add(CC)
        })), QC.finish();
        const wC = 0 === QC.parts;
        if (wC && this.uploadedEmpty) return;
        this.uploadedEmpty = wC;
        const {
          queue: bC
        } = this.device, {
          words: nC
        } = QC;
        bC.writeBuffer(this.frameBuffer, 0, nC, 0, 16385), QC.refs > 0 && bC.writeBuffer(this.frameBuffer, 65540, nC, oZ, QC.refs), wC || bC.writeBuffer(this.frameBuffer, 327684, nC, qZ, QC.parts * fZ)
      }
      add(CC) {
        const zC = this.gridFor(CC);
        if (!zC) return;
        const {
          frame: ZC
        } = this, {
          fN: QC,
          worldAt: wC,
          instances: bC,
          instanceCount: nC,
          thin: fC
        } = CC;
        if (bC)
          for (let oC = 0; oC < nC; oC++) fC ? (PZ(bC, 16 * oC, QC, wC, this.fN), ZC.add(zC, this.fN)) : ZC.add(zC, bC, 16 * oC);
        else ZC.add(zC, QC, wC)
      }
      gridFor(CC) {
        let {
          geometry: zC,
          indexed: ZC,
          first: QC,
          count: wC,
          skip: bC
        } = CC, nC = this.grids.get(zC);
        nC || (nC = new Map, this.grids.set(zC, nC));
        const fC = `${ZC?QC:-1-QC}:${wC}:${null!==bC&&void 0!==bC?bC:""}`;
        let oC = nC.get(fC);
        if (void 0 !== oC || this.gridsFull) return oC;
        const qC = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = qC + 2;
        else if (qC > this.bakeDeadline) return;
        return oC = this.bake(zC, ZC, QC, wC, bC), void 0 !== oC && nC.set(fC, oC), oC
      }
      bake(CC, zC, ZC, QC, wC) {
        const bC = CC.vertexAttributes.find((CC => "position" === CC.kind)),
          nC = bC ? function(CC, zC, ZC, QC) {
            let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const bC = CC => zC ? zC[ZC + CC] : ZC + CC,
              nC = CC => null !== wC && [0, 1, 2].some((zC => {
                const ZC = bC(CC + zC);
                return ZC >= wC[0] && ZC < wC[1]
              })),
              fC = [1 / 0, 1 / 0, 1 / 0],
              oC = [-1 / 0, -1 / 0, -1 / 0];
            for (let GC = 0; GC + 2 < QC; GC += 3)
              if (!nC(GC))
                for (let zC = 0; zC < 3; zC++) {
                  const ZC = bC(GC + zC);
                  for (let zC = 0; zC < 3; zC++) fC[zC] = Math.min(fC[zC], CC[3 * ZC + zC]), oC[zC] = Math.max(oC[zC], CC[3 * ZC + zC])
                }
            const qC = Math.max(oC[0] - fC[0], oC[1] - fC[1], oC[2] - fC[2]);
            if (!(qC > 0)) return null;
            const FC = qC / 64,
              WC = [0, 0, 0],
              NC = [0, 0, 0],
              MC = [0, 0, 0];
            for (let GC = 0; GC < 3; GC++) WC[GC] = Math.min(65, Math.ceil((oC[GC] - fC[GC]) / FC) + 1), NC[GC] = fC[GC] - FC / 2, MC[GC] = NC[GC] + WC[GC] * FC;
            const gC = new Uint32Array(Math.ceil(WC[0] * WC[1] * WC[2] / 32)),
              SC = new Float64Array(9),
              pC = [0, 0, 0],
              PC = [0, 0, 0];
            for (let GC = 0; GC + 2 < QC; GC += 3)
              if (!nC(GC)) {
                for (let zC = 0; zC < 3; zC++) {
                  const ZC = bC(GC + zC);
                  for (let QC = 0; QC < 3; QC++) SC[3 * zC + QC] = CC[3 * ZC + QC]
                }
                for (let CC = 0; CC < 3; CC++) {
                  const zC = Math.min(SC[CC], SC[3 + CC], SC[6 + CC]),
                    ZC = Math.max(SC[CC], SC[3 + CC], SC[6 + CC]);
                  pC[CC] = Math.max(0, Math.floor((zC - NC[CC]) / FC - 1e-6)), PC[CC] = Math.min(WC[CC] - 1, Math.floor((ZC - NC[CC]) / FC + 1e-6))
                }
                for (let CC = pC[2]; CC <= PC[2]; CC++)
                  for (let zC = pC[1]; zC <= PC[1]; zC++)
                    for (let ZC = pC[0]; ZC <= PC[0]; ZC++)
                      if (GZ(SC, NC[0] + (ZC + .5) * FC, NC[1] + (zC + .5) * FC, NC[2] + (CC + .5) * FC, FC / 2)) {
                        const QC = ZC + WC[0] * (zC + WC[1] * CC);
                        gC[QC >>> 5] |= 1 << (31 & QC)
                      }
              } return {
              words: gC,
              lo: NC,
              hi: MC,
              cell: FC,
              dims: WC
            }
          }((0, Mo.g)(bC, CC.vertexCount), zC ? CC.indexData : null, ZC, QC, wC) : null;
        if (!nC) return null;
        const {
          words: fC,
          ...oC
        } = nC;
        if (this.gridTop + fC.length > WZ) return void(this.gridsFull = !0);
        const qC = this.gridTop;
        return this.gridTop += fC.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * qC, fC), {
          ...oC,
          at: qC
        }
      }
    }
    const So = Math.cos(1 * Math.PI / 180);

    function po(CC, zC) {
      return CC[0] * zC[0] + CC[1] * zC[1] + CC[2] * zC[2] < So
    }
    async function Po(CC) {
      const {
        pixels: zC,
        width: ZC,
        height: QC
      } = await uw(CC), wC = new Uint8Array(ZC * QC);
      for (let bC = 0; bC < wC.length; bC++) wC[bC] = zC[4 * bC + 3];
      return {
        width: ZC,
        height: QC,
        alpha: wC
      }
    }
    class Go {
      constructor(CC, zC) {
        this.device = CC, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(AZ.o), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = CC.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = CC.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * tz,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = CC.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [ZC, QC, wC] = AZ.q;
        this.volume = CC.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: ZC,
            height: QC,
            depthOrArrayLayers: wC
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = CC.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = CC.createBuffer({
          label: "sun-shadow-volume-work",
          size: AZ.o,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = zC ? new go(CC) : null, this.entityStandIn = zC ? null : CC.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var CC, zC;
        const ZC = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || ZC.push("Lite sun shadow volume pipeline compiling");
        const QC = null !== (CC = null === (zC = this.casters) || void 0 === zC ? void 0 : zC.planesLoading) && void 0 !== CC ? CC : 0;
        return QC > 0 && ZC.push(`${QC} Lite sun shadow plane casters loading their textures`), ZC
      }
      entries() {
        var CC, zC, ZC, QC;
        const wC = ez.w;
        return [{
          binding: wC.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: wC.lN,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: wC.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: wC.volume,
          resource: this.volumeView
        }, {
          binding: wC.sampler,
          resource: this.volumeSampler
        }, {
          binding: wC.entities,
          resource: {
            buffer: null !== (CC = null === (zC = this.entities) || void 0 === zC ? void 0 : zC.frameBuffer) && void 0 !== CC ? CC : this.entityStandIn
          }
        }, {
          binding: wC.entityGrids,
          resource: {
            buffer: null !== (ZC = null === (QC = this.entities) || void 0 === QC ? void 0 : QC.gridBuffer) && void 0 !== ZC ? ZC : this.entityStandIn
          }
        }]
      }
      prepare(CC, zC, ZC) {
        var QC;
        this.entitiesThisFrame = !1;
        const wC = null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.sunShadowReach()) && void 0 !== QC ? QC : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!ZC || !wC.sunShadow && !wC.airShadow) return void(this.volumeHolds = null);
        if (CC.fN.WCC !== Kz) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${CC.fN.WCC}; everything is lit.`)));
        const bC = this.start(CC);
        this.casters.update(CC.qM, CC.qM.MM.length);
        const nC = CC.YN;
        for (let NC = 0; NC < 3; NC++) this.eye[NC] = zC[NC] + nC[NC];
        const fC = (0, AZ.x)(this.eye);
        this.staleNear = fC;
        const oC = CC.fN.PS;
        bC.update(this.eye, ((CC, zC, ZC) => oC.GS(CC, zC, ZC)), 1);
        const qC = (0, AZ.t)(ZC.B3()),
          FC = bC.eyeChunk,
          WC = this.uniformInts;
        for (let NC = 0; NC < 3; NC++) WC[NC] = FC[NC], WC[4 + NC] = fC[NC];
        this.entitiesThisFrame = null !== this.entities && wC.sunShadow, this.entitiesThisFrame && gZ(this.uniformFloats, 8, zC, qC), null !== this.volumeHolds && (this.castersWritten || po(qC, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(fC, qC, FC)
      }
      markStale(CC) {
        const zC = this.staleNear,
          ZC = Kz,
          QC = [CC.i * ZC, CC.j * ZC, CC.k * ZC];
        for (let bC = 0; bC < 3; bC++)
          if (QC[bC] + ZC <= zC[bC] - ZC || QC[bC] >= zC[bC] + AZ.q[bC] + ZC) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const wC = this.stale;
        for (let bC = 0; bC < wC.length; bC += 4)
          if (wC[bC] === CC.i && wC[bC + 1] === CC.j && wC[bC + 2] === CC.k) return void(wC[bC + 3] = this.swept);
        if (16 === wC.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        wC.push(CC.i, CC.j, CC.k, this.swept)
      }
      writeStale() {
        const CC = this.swept,
          zC = this.stale;
        this.staleAll && CC - this.staleAllSwept >= AZ.k && (this.staleAll = !1, zC.length = 0);
        let ZC = 0;
        for (let wC = 0; wC < zC.length; wC += 4)
          if (CC - zC[wC + 3] < AZ.k) {
            for (let CC = 0; CC < 4; CC++) zC[ZC + CC] = zC[wC + CC];
            ZC += 4
          } zC.length = ZC;
        const QC = this.uniformInts;
        QC[3] = this.staleAll ? 5 : ZC / 4;
        for (let wC = 0; wC < 4; wC++)
          for (let CC = 0; CC < 3; CC++) QC[16 + 4 * wC + CC] = 4 * wC < ZC ? zC[4 * wC + CC] * Kz : 0
      }
      writeUniform() {
        const CC = this.uniformInts;
        let zC = this.uniformWritten;
        if (zC) {
          let ZC = !0;
          for (let QC = 0; QC < CC.length && ZC; QC++) ZC = CC[QC] === zC[QC];
          if (ZC) return
        }
        zC ??= this.uniformWritten = new Int32Array(CC.length), zC.set(CC), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(CC) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, CC)
      }
      computeVolume(CC, zC, ZC) {
        const QC = this.buildVolumePass();
        if (!QC) return void(this.volumeHolds = null);
        const wC = (0, AZ.v)(this.volumeHolds, CC);
        this.volumeHolds = CC;
        const bC = 1 === wC.length && wC[0].size.every(((CC, zC) => CC === AZ.q[zC])),
          nC = this.sweptChunk,
          fC = this.sweptLight,
          oC = zC[0] !== fC[0] || zC[1] !== fC[1] || zC[2] !== fC[2],
          qC = ZC[0] !== nC[0] || ZC[1] !== nC[1] || ZC[2] !== nC[2],
          FC = oC && po(zC, fC);
        if ((bC || this.written || qC || FC) && (this.fastLeft = AZ.k), bC || this.written || oC || qC) {
          this.written = !1;
          for (let CC = 0; CC < 3; CC++) nC[CC] = ZC[CC], fC[CC] = zC[CC];
          this.sweepLeft = bC ? 0 : AZ.k
        }
        if (bC ? this.swept += AZ.k : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, wC.push(...(0, AZ.z)(CC, this.slice)), this.slice = (this.slice + 1) % AZ.k, this.swept++), 0 === wC.length) return;
        const WC = (0, AZ.A)(this.workData, zC, wC);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const NC = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          MC = NC.beginComputePass({
            label: "sun-shadow-volume"
          });
        MC.setPipeline(QC.pipeline), MC.setBindGroup(IZ.group, QC.bindGroup), MC.dispatchWorkgroups(Math.ceil(WC / AZ.l)), MC.end(), this.device.queue.submit([NC.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const CC = IZ,
          zC = GPUShaderStage.COMPUTE,
          ZC = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: CC.uniform,
              visibility: zC,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: CC.lN,
              visibility: zC,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: CC.special,
              visibility: zC,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: CC.work,
              visibility: zC,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: CC.volume,
              visibility: zC,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          QC = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: ZC,
            entries: [{
              binding: CC.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: CC.lN,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: CC.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: CC.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: CC.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [ZC]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: iZ()
            }),
            entryPoint: "main"
          }
        }).then((CC => {
          this.volumePass = {
            pipeline: CC,
            bindGroup: QC
          }
        }), (CC => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(CC)}`)
        })), null
      }
      start(CC) {
        if (this.window) return this.window;
        const zC = (CC, zC) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * CC, zC)
        };
        this.casters = new oo(((CC, ZC) => {
          this.castersWritten = !0, zC(CC, ZC)
        }), Po);
        const ZC = new No(this.casters, ((CC, zC) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * CC, zC)
        }), zC);
        return ZC.encoded = CC => {
          this.markStale(CC)
        }, CC.fN.on("chunkAdded", (CC => {
          ZC.chunkAdded(CC)
        })), this.window = ZC, ZC
      }
    }
    var Ro = ZC(38523),
      Ao = ZC(38529);
    const xo = 0,
      Jo = 3,
      Io = 4,
      io = 5;

    function vo(CC, zC, ZC, QC) {
      CC.drawOffset(zC, QC + xo), zC[QC + Jo] = CC.drawTime(), ZC[QC + Io] = CC.ring.drawStart(), ZC[QC + io] = CC.ring.drawCount()
    }
    const eo = `\n${SQ}\n\nconst MAX_STOPS = ${Ao.d}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Ao.d/4}>,\n\tcolor1: array<vec4f, ${Ao.d}>,\n\tcolor2: array<vec4f, ${Ao.d}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Ao.d}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Ao.d}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var ho = ZC(41418);
    class Ko {
      constructor(CC, zC, ZC, QC) {
        this.device = CC, this.system = zC, this.frameIndex = ZC, this.bindings = QC, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, ho.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (CC, zC) => {
          this.device.queue.writeBuffer(this.ring, CC * Ao.e * 4, this.system.ring.records, CC * Ao.e, (zC - CC) * Ao.e)
        };
        const {
          name: wC
        } = zC;
        this.ring = CC.createBuffer({
          label: `particles-${wC}`,
          size: zC.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = CC.createBuffer({
          label: `particles-uniforms-${wC}`,
          size: 4 * Ao.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(CC) {
        const zC = (0, ho.c)(this.system, this.uniformBits, CC);
        zC && (this.uniformBits = zC, this.device.queue.writeBuffer(this.uniforms, 0, zC))
      }
      bind() {
        const {
          system: CC
        } = this, zC = this.texture;
        (0, ho.j)(CC, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${CC.name}`,
          size: [Ao.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Ao.k
        }, [Ao.k, 1]));
        const ZC = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === zC.view && this.boundSampler === zC.sampler && this.boundRamp === ZC || (this.boundView = zC.view, this.boundSampler = zC.sampler, this.boundRamp = ZC, this.bindGroup = this.device.createBindGroup({
          label: `particles-${CC.name}`,
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
            resource: zC.sampler
          }, {
            binding: 3,
            resource: zC.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: ZC
          }]
        }))
      }
      destroy() {
        var CC;
        this.ring.destroy(), this.uniforms.destroy(), null === (CC = this.ramp) || void 0 === CC || CC.destroy()
      }
    }
    class Yo {
      constructor(CC, zC) {
        this.device = CC, this.resources = zC, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, qz.b)();
        const ZC = CC.createBindGroupLayout({
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
        this.frameLayout = CC.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = CC.createPipelineLayout({
          bindGroupLayouts: [zz(CC), ZC, this.frameLayout]
        }), this.module = CC.createShaderModule({
          label: "particles",
          code: eo
        });
        const QC = CC.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        CC.queue.writeTexture({
          texture: QC
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: ZC,
          rampSampler: CC.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: QC.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (zC, ZC) => (this.bindTarget(ZC), {
            renderable: this.renderable,
            pipeline: nz(CC, ZC),
            draw: CC => ZC === this.preparedTarget ? this.draw(CC) : 0
          })
        }
      }
      get CwC() {
        return this.systems.size
      }
      reset() {
        for (const CC of this.systems.keys()) CC.reset()
      }
      describePendingWork() {
        return (0, Ro.g)(this.systems.keys(), "Lite")
      }
      DH(CC, zC) {
        const ZC = new Ro.d(CC, zC, this);
        return this.systems.set(ZC, new Ko(this.device, ZC, this.allocateFrameIndex(), this.bindings)), ZC
      }
      y_(CC, zC) {
        for (const ZC of this.systems.keys()) ZC.y_(CC, zC)
      }
      canDraw(CC) {
        const zC = this.systems.get(CC),
          ZC = CC.texture ? this.resources.boundTexture(CC.texture) : null;
        if (!zC || !ZC || !this.targetPipelines) return !1;
        if (zC.texture = ZC, zC.pipelines.length = 0, !tw(CC.blendMode)) return this.warnOnce(`blend:${CC.blendMode}`, `particle blend mode ${CC.blendMode} is not drawn (${CC.name})`), !0;
        const QC = (0, Kw.i)(CC.blendMode);
        for (const wC of QC) {
          const CC = this.pipelineFor(wC);
          if (!1 === CC) return zC.pipelines.length = 0, !0;
          CC && zC.pipelines.push(CC)
        }
        return zC.pipelines.length === QC.length
      }
      disposeStopped(CC) {
        CC.dispose()
      }
      remove(CC) {
        const zC = this.systems.get(CC);
        zC && (this.systems.delete(CC), zC.destroy(), this.freeFrameIndices.push(zC.frameIndex))
      }
      prepare(CC) {
        const zC = CC.animationRatio || 1;
        fz(this.renderable._worldCenter, CC, Qz), this.preparedTarget = this.target, this.draws.length = 0;
        let ZC = 0;
        for (const QC of this.systems.values()) {
          const CC = QC.system;
          if (!CC.animateIfActive(zC)) continue;
          if (CC.ring.takeUploads(QC.upload), !CC.hasLiveParticles() || 0 === QC.pipelines.length) continue;
          QC.writeUniforms(this.warnOnce), QC.bind();
          const wC = 64 * QC.frameIndex;
          QC.count = CC.ring.drawCount(), vo(CC, this.frameData, this.frameBits, wC), ZC = Math.max(ZC, wC + 64), this.draws.push(QC)
        }
        ZC > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, ZC)
      }
      draw(CC) {
        let zC = 0,
          ZC = null;
        for (const QC of this.draws) {
          CC.setBindGroup(1, QC.bindGroup), CC.setBindGroup(2, this.frameBindGroup, [256 * QC.frameIndex]);
          for (const wC of QC.pipelines) wC !== ZC && (CC.setPipeline(wC), ZC = wC), CC.draw(4, QC.count), zC++
        }
        return zC
      }
      bindTarget(CC) {
        this.target = CC;
        const zC = `${CC._colorFormat}|${CC._depthStencilFormat}|${CC._depthCompare}|${CC._sampleCount}`;
        let ZC = this.pipelines.get(zC);
        ZC || (ZC = new Map, this.pipelines.set(zC, ZC)), this.targetPipelines = ZC
      }
      pipelineFor(CC) {
        var zC;
        const ZC = this.targetPipelines,
          QC = ZC.get(CC);
        if (void 0 !== QC) return QC;
        ZC.set(CC, null);
        const wC = this.target,
          bC = CC === Kw.e,
          nC = null !== (zC = wC._depthCompare) && void 0 !== zC ? zC : Zz;
        return this.device.createRenderPipelineAsync({
          label: `particles-${CC}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: OC({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: bC ? 1 : 0
            }
          }, wC, Dw((0, Kw.h)(CC))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: wC._depthStencilFormat ? {
            format: wC._depthStencilFormat,
            depthCompare: nC,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: wC._sampleCount
          }
        }).then((zC => {
          ZC.set(CC, zC)
        }), (zC => {
          ZC.set(CC, !1), console.error("Lite particle pipeline failed", zC), Lw("particles", `blend-${CC}`, zC)
        })), null
      }
      allocateFrameIndex() {
        const CC = this.freeFrameIndices.pop();
        if (void 0 !== CC) return CC;
        const zC = this.nextFrameIndex++;
        if (64 * (zC + 1) > this.frameData.length) {
          const CC = new Float32Array(2 * this.frameData.length);
          CC.set(this.frameData), this.frameData = CC, this.frameBits = new Uint32Array(CC.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return zC
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
    class mo {
      constructor(CC, zC, ZC, QC, wC) {
        this.lite = CC, this.canvas = zC, this.info = ZC, this.resources = wC, this.BZC = !1, this.needPOTTextures = !1, this.R6 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = zC.width, this.renderHeight = zC.height, this.caps = {
          maxTextureSize: QC.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: QC.maxTextureArrayLayers
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
      setSize(CC, zC) {
        if (this.renderWidth === CC && this.renderHeight === zC) return !1;
        const ZC = this.renderWidth,
          QC = this.renderHeight;
        this.renderWidth = CC, this.renderHeight = zC;
        try {
          (0, sC.s)(this.lite, CC, zC)
        } catch (wC) {
          if (wC instanceof DOMException && "InvalidStateError" === wC.name) {
            this.renderWidth = ZC, this.renderHeight = QC;
            try {
              (0, sC.s)(this.lite, ZC, QC)
            } catch {
              this.canvas.width = ZC, this.canvas.height = QC
            }
            return console.warn("WebGPU could not allocate render targets for resize", CC, zC, wC.message), !1
          }
          throw wC
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
      jR() {
        const CC = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : CC - this.lastFrameTime, this.lastFrameTime = CC
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(CC, zC) {
        const ZC = document.createElement("canvas");
        return ZC.width = CC, ZC.height = zC, ZC
      }
      T6(CC, zC) {
        var ZC;
        return null !== (ZC = this.resources.T6.get(CC)) && void 0 !== ZC ? ZC : new DC(this.resources, CC, zC)
      }
      atlasArray(CC, zC, ZC) {
        return this.resources.atlasArray(CC, zC, ZC)
      }
    }
    class Ho {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(CC) {
        this.fov = CC.fov, this.nearPlane = CC.near, this.farPlane = CC.far;
        const zC = CC.worldMatrix;
        for (let ZC = 0; ZC < 16; ZC++)
          if (this.worldMatrix[ZC] !== zC[ZC]) return this.worldMatrix.set(zC), void this.worldMatrixVersion++
      }
    }
    class Eo {
      constructor(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
        let FC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = CC, this.sS = zC, this.sceneTask = ZC, this.gpuDevice = QC, this.terrain = wC, this.meshes = bC, this.particles = nC, this.resources = fC, this.sunShadow = FC, this.mzC = void 0, this.backendName = "WebGPU (Lite)", this.b_ = void 0, this.modelMeshes = void 0, this.camera = new Ho, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new aC(QC.lost), this.deviceLost = this.refusals.deviceLost, this.mzC = new mo(CC, oC, qC, QC.limits, fC), (0, hC.F)({
          vq: CC => {
            mC(CC) && fC.textureSlot(CC)
          },
          loaded: CC => mC(CC) ? fC.textureLoaded(CC) : null,
          canvasUpdated: (CC, zC, ZC) => {
            mC(CC) && fC.canvasUpdated(CC, zC, ZC)
          }
        }), this.b_ = bC.b_, this.modelMeshes = bC.modelMeshes, zC.camera = this.camera
      }
      get castsEntitySunShadows() {
        var CC, zC;
        return null !== (CC = null === (zC = this.sunShadow) || void 0 === zC ? void 0 : zC.tracesEntities) && void 0 !== CC && CC
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(CC) {
        this.modelMeshes.attach(CC.model, CC.sceneMirror);
        const zC = CC.sS;
        this.setClearColour(zC.clearColor.r, zC.clearColor.g, zC.clearColor.b), zC.draw = () => {
          this.drawFrame(CC, zC)
        }
      }
      render(CC) {
        if (!this.refusals.lost) {
          try {
            this.mzC.jR(), CC.sS.render()
          } catch (zC) {
            throw this.refusals.frameFailed(zC), zC
          }
          this.refusals.frameDrawn()
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var CC, zC, ZC, QC;
        const wC = [...this.particles.describePendingWork(), ...null !== (CC = null === (zC = this.sunShadow) || void 0 === zC ? void 0 : zC.describePendingWork()) && void 0 !== CC ? CC : []],
          bC = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (ZC = this.terrain.sceneDepth) && void 0 !== ZC && ZC.compiling ? 1 : 0) + (null !== (QC = this.terrain.shadowMask) && void 0 !== QC && QC.compiling ? 1 : 0);
        bC > 0 && wC.push(`${bC} Lite pipelines compiling`);
        const nC = this.terrain.buffersAwaitingVerdict;
        nC > 0 && wC.push(`${nC} Lite terrain buffers awaiting their out-of-memory verdict`);
        const fC = this.resources.texturesLoading;
        return fC > 0 && wC.push(`${fC} Lite textures loading`), wC
      }
      prepareTexture(CC) {
        return null !== this.resources.boundTexture(CC) || this.resources.textureFailed(CC)
      }
      drawFrame(CC, zC) {
        var ZC, QC, wC, bC, nC, fC;
        const oC = Sf(CC);
        this.camera.copyFromView(oC), this.setClearColour(oC.clearColour[0], oC.clearColour[1], oC.clearColour[2]), null === (ZC = this.sunShadow) || void 0 === ZC || ZC.prepare(CC.MN, oC.eye, null !== (QC = CC.MN.zg) && void 0 !== QC ? QC : null), this.terrain.prepare(CC, oC), null === (wC = this.terrain.sceneDepth) || void 0 === wC || wC.setPlanes(oC.near, oC.far), null === (bC = this.terrain.shadowMask) || void 0 === bC || bC.prepare(oC), Cf(this.sceneTask), this.meshes.prepare(zC, oC, CC.model.earthSky, null !== (nC = CC.MN.zg) && void 0 !== nC ? nC : null), this.particles.prepare(oC);
        const qC = performance.now();
        this.resources.flushUploads(), null === (fC = this.sunShadow) || void 0 === fC || fC.traceEntities(this.meshes);
        try {
          (0, sC.q)(this.engine, this.lastFrameTime > 0 ? qC - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = qC
      }
      setClearColour(CC, zC, ZC) {
        const QC = this.sS.clearColor;
        QC.r = CC, QC.g = zC, QC.b = ZC, QC.a = 1
      }
    }
    const Xo = "WebGPU device lost while Lite was starting";

    function co(CC, zC) {
      return "object" === typeof CC && null !== CC ? Object.assign(CC, {
        startStep: zC
      }) : CC
    }
    async function uo(CC, zC) {
      const ZC = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!ZC) throw co(new Error("No WebGPU adapter"), "no_adapter");
      const QC = ZC.info,
        wC = {
          vendor: (null === QC || void 0 === QC ? void 0 : QC.vendor) || "unknown vendor",
          renderer: (null === QC || void 0 === QC ? void 0 : QC.architecture) || "unknown renderer",
          version: (null === QC || void 0 === QC ? void 0 : QC.description) || "unknown version"
        },
        bC = function(CC) {
          const zC = {};
          for (const ZC in CC.limits) {
            const QC = CC.limits[ZC];
            "number" === typeof QC && (zC[ZC] = QC)
          }
          return zC
        }(ZC);
      let nC;
      CC.style.background = "black";
      try {
        nC = await (0, sC.i)(CC, {
          msaaSamples: zC.FZC ? 4 : 1,
          requiredLimits: bC,
          alphaMode: "premultiplied"
        })
      } catch (FC) {
        throw co(FC, "#47" === (null === (fC = FC) || void 0 === fC ? void 0 : fC.message) ? "no_adapter" : "device")
      }
      var fC;
      null !== zC.bufferSize && (0, sC.s)(nC, zC.bufferSize.width, zC.bufferSize.height);
      const oC = function(CC) {
        return CC._device
      }(nC);
      let qC = null;
      oC.lost.then((CC => {
        qC = CC, console.error(`WebGPU device lost (${CC.reason}): ${CC.message}`)
      }));
      try {
        const ZC = await async function(CC, zC, ZC, QC, wC, bC) {
          const nC = (0, TC.c)(CC),
            fC = new On(CC, zC),
            oC = new Co(zC),
            qC = new mn(zC, fC, (CC => function(CC, zC) {
              for (const QC of VC(CC)) {
                var ZC;
                if (QC._targetSignature === zC) return null !== (ZC = QC._sceneBG) && void 0 !== ZC ? ZC : null
              }
              return null
            }(nC, CC))),
            FC = new Yo(zC, fC);
          for (const MC of function(CC, zC, ZC) {
              return [zC.opaqueRenderable, CC.opaqueRenderable, CC.skyLastRenderable, ZC.renderable, zC.transparentRenderable, CC.transparentRenderable, CC.frontRenderable]
            }(qC, oC, FC)) kC(nC, MC);
          const WC = function(CC) {
            for (const zC of VC(CC))
              if ("sS" === zC.name) return zC;
            throw new Error("Lite: the scene has no render task named scene")
          }(nC);
          wC && oC.installSceneDepth(WC, CC);
          const NC = bC ? new Go(zC, bC.entities) : null;
          oC.sunShadow = NC, NC && null !== bC && void 0 !== bC && bC.entities && (oC.shadowMask = new mf(zC, WC, CC, oC));
          return qC.sunShadow = NC, await (0, TC.d)(nC), new Eo(CC, nC, WC, zC, oC, qC, FC, fC, ZC, QC, NC)
        }(nC, oC, CC, wC, zC.sceneDepth, zC.sunShadow);
        if (null !== qC) {
          const {
            reason: CC,
            message: zC
          } = qC;
          throw Object.assign(new Error(`${Xo} (${CC}): ${zC}`), {
            fallbackReason: Xo
          })
        }
        return ZC
      } catch (FC) {
        throw oC.destroy(), null === qC ? FC : co(FC, "device")
      }
    }
  },
  40534: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => nC,
      D: () => SC,
      E: () => MC,
      F: () => gC,
      d: () => wC,
      g: () => QC,
      k: () => NC,
      n: () => FC,
      r: () => pC,
      u: () => bC,
      w: () => fC,
      x: () => oC
    });
    const QC = 3,
      wC = 0,
      bC = 1,
      nC = 2,
      fC = {
        uniform: 3,
        lN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      oC = 10,
      qC = "BloxdPackInputs",
      FC = "bloxdPackInputs",
      WC = [{
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
      NC = 80;

    function MC() {
      const CC = WC.map((CC => {
        let {
          name: zC,
          type: ZC
        } = CC;
        return `    ${zC}: ${ZC},\n`
      })).join("");
      return `struct ${qC} {\n${CC}}\n@group(${QC}) @binding(${wC}) var<uniform> ${FC}: ${qC};\n`
    }

    function gC(CC, zC) {
      const ZC = new DataView(CC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, NC),
        [QC, wC, bC, nC, fC, oC] = WC;
      ZC.setFloat32(QC.offset, zC.seconds, !0), ZC.setUint32(wC.offset, zC.lit ? 1 : 0, !0);
      for (let qC = 0; qC < 3; qC++) ZC.setInt32(bC.offset + 4 * qC, zC.renderOffset[qC], !0), ZC.setFloat32(nC.offset + 4 * qC, zC.B3[qC], !0), ZC.setFloat32(fC.offset + 4 * qC, zC.eyePosition[qC], !0), ZC.setFloat32(oC.offset + 4 * qC, zC.shadowDirection[qC], !0)
    }

    function SC(CC) {
      const zC = new Uint32Array(Math.max(1, CC.length));
      return CC.forEach(((CC, ZC) => {
        let {
          id: QC,
          rotation: wC
        } = CC;
        zC[ZC] = 65535 & QC | (3 & wC) << 16
      })), zC
    }
    const pC = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);