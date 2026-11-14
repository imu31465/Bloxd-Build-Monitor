export const id = 240;
export const ids = [240];
export const modules = {
  39082: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => YW,
      e: () => bR,
      g: () => AW,
      j: () => NW
    });
    var wW = MW(35373),
      CW = MW(36750),
      zR = MW(36747);

    function AW(WW, RW, MW, wW) {
      const CW = zR.w;
      RW.fill(0), WW.gravity.toArray(RW, CW.gravity), WW.colorDead.toArray(RW, CW.colorDead), MW[CW.ramp] = WW.useRampGradients ? 1 : 0;
      const AW = WW.getColorGradients(),
        bR = tR(WW, AW, "colour", wW);
      MW[CW.colorCount] = bR;
      for (let zR = 0; zR < bR; zR++) {
        var yR;
        const WW = AW[TW(AW, zR)];
        RW[CW.colorPositions + zR] = WW.gradient, WW.color1.toArray(RW, CW.color1 + 4 * zR), (null !== (yR = WW.color2) && void 0 !== yR ? yR : WW.color1).toArray(RW, CW.color2 + 4 * zR)
      }
      const NW = WW.getVelocityGradients(),
        eW = tR(WW, NW, "lA", wW);
      MW[CW.velocityCount] = eW;
      for (let zR = 0; zR < eW; zR++) PW(RW, CW.lA + 4 * zR, NW[TW(NW, zR)]);
      const BW = WW.useRampGradients ? WW.getColorRemapGradients() : null,
        gR = tR(WW, BW, "colour remap", wW);
      MW[CW.remapCount] = gR;
      for (let zR = 0; zR < gR; zR++) PW(RW, CW.remap + 4 * zR, BW[TW(BW, zR)])
    }

    function bR() {
      return {
        key: [],
        texels: new Uint8Array(4 * zR.o)
      }
    }
    const yR = [];

    function NW(WW, RW) {
      return eW(WW, yR), !JW(yR, RW.key) && (RW.key.length = 0, RW.key.push(...yR), RW.key.length > 0 && function(WW, RW) {
        for (let MW = 0; MW < zR.o; MW++) CW.g.GetCurrentGradient(MW / zR.o, WW, ((WW, RW, MW) => {
          wW.Color3.LerpToRef(WW.color, RW.color, MW, BW)
        })), RW[4 * MW] = 255 * BW.r, RW[4 * MW + 1] = 255 * BW.g, RW[4 * MW + 2] = 255 * BW.b, RW[4 * MW + 3] = 255
      }(WW.getRampGradients(), RW.texels), !0)
    }

    function eW(WW, RW) {
      RW.length = 0;
      const MW = WW.useRampGradients ? WW.getRampGradients() : null;
      if (null !== MW && void 0 !== MW && MW.length) {
        RW.push(MW.length);
        for (const WW of MW) RW.push(WW.gradient, WW.color.r, WW.color.g, WW.color.b)
      }
    }
    const BW = new wW.Color3;

    function tR(WW, RW, MW, wW) {
      return RW ? RW.length > zR.e ? (wW(`particleStops:${MW}`, `GPU particles use the first 2 and last ${zR.e-2} of more than ${zR.e} ${MW} gradient stops (${WW.name})`), zR.e) : RW.length : 0
    }

    function TW(WW, RW) {
      return RW < 2 || WW.length <= zR.e ? RW : WW.length - zR.e + RW
    }
    const gR = new Float32Array(zR.r),
      iR = new Uint32Array(gR.buffer);

    function YW(WW, RW, MW) {
      return AW(WW, gR, iR, MW), RW && JW(iR, RW) ? null : iR.slice()
    }

    function JW(WW, RW) {
      if (WW.length !== RW.length) return !1;
      for (let MW = 0; MW < WW.length; MW++)
        if (WW[MW] !== RW[MW]) return !1;
      return !0
    }

    function PW(WW, RW, MW) {
      var wW;
      WW[RW] = MW.gradient, WW[RW + 1] = MW.factor1, WW[RW + 2] = null !== (wW = MW.factor2) && void 0 !== wW ? wW : MW.factor1
    }
  },
  39077: (WW, RW, MW) => {
    function wW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const RW = new Set;
      return (MW, wW) => {
        RW.has(MW) || (RW.add(MW), console.warn(WW + wW))
      }
    }
    MW.d(RW, {
      d: () => wW
    })
  },
  39122: (WW, RW, MW) => {
    MW.d(RW, {
      createLiteRendererAsync: () => fy,
      liteBabylonBackend: () => mR,
      setPipelineFailureHook: () => OC
    });
    var wW = MW(35373),
      CW = MW(35651),
      zR = MW(35978),
      AW = MW(35275),
      bR = MW(35987);
    class yR extends bR.c {
      constructor() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        super(...RW), this.color = new wW.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: RW[0].QRW().getUniqueId(),
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
          needAlphaBlendingForMesh: WW => WW.visibility < 1 || WW.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const NW = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      eW = WW => 1 << NW.indexOf(WW),
      BW = eW("VERTEXCOLOR"),
      tR = eW("INSTANCES"),
      TW = eW("THIN_INSTANCES"),
      gR = eW("INSTANCESCOLOR"),
      iR = eW("FOG"),
      YW = eW("LITE_FRONT_LAYER");

    function JW(WW, RW, MW, wW) {
      let CW = 0;
      return WW.isVerticesDataPresent("color") && (CW |= BW), "none" !== RW && (CW |= tR), "thin" === RW && (CW |= TW, WW.isVerticesDataPresent("instanceColor") && (CW |= gR)), wW.fogEnabled && WW.applyFog && 0 !== wW.fogMode && (CW |= iR), MW >= 1 && (CW |= YW), CW
    }

    function PW(WW, RW) {
      WW.updateColor4("color", RW.color, RW.alpha)
    }
    var IW = MW(35919),
      oW = MW(35452),
      lW = MW(35403),
      FW = MW(35248),
      fW = MW(35905),
      QW = MW(35912),
      rR = MW(35261),
      cR = MW(35269),
      XW = MW(35284);
    const jR = FW.e.GLSL;
    class kR {
      constructor(WW, RW) {
        this.name = WW, this.LC = RW, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.rMW = {
          addOnce: WW => {
            this.disposers.push(WW)
          }
        }, this.uniqueId = RW.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      QRW() {
        return this.LC
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
      needAlphaBlendingForMesh(WW) {
        return (0, rR.O)(this.model, WW.visibility, WW.hasVertexAlpha)
      }
      needAlphaTestingForMesh(WW) {
        return (0, rR.S)(this.model, WW.visibility, WW.hasVertexAlpha)
      }
      dispose() {
        (0, oW.h)(this);
        for (const WW of this.disposers.splice(0)) WW()
      }
      get model() {
        return (0, rR.Y)(this)
      }
    }
    const aR = new WeakSet;

    function sW(WW) {
      return aR.has(WW)
    }

    function dW(WW) {
      aR.add(WW)
    }
    const pW = {
      create: (WW, RW) => ((0, lW.n)(WW, new kR(WW.name, RW)), cR.e.defines()),
      write: () => {},
      addFeature: (WW, RW) => {
        const MW = WW.mirror;
        RW.feature === QW.j && RW.state.dirLightCount > 0 && (WW.disableLighting = !0, (0, rR.V)(WW)), "BLOXD_LIGHTING" in RW.defines && (0, oW.g)(MW), RW.feature === fW.i && ((0, IW.g)(RW.state, jR), function(WW, RW) {
          const MW = WW.QRW().mC();
          RW.textures.forEach(((wW, CW) => {
            setTimeout((() => {
              var zR, AW;
              const {
                url: bR
              } = wW.source;
              MW.atlasArray(bR, null !== (zR = null === (AW = RW.sources.pixels) || void 0 === AW ? void 0 : AW[CW]) && void 0 !== zR ? zR : null, RW.sources.layerWidth).then((MW => {
                (0, IW.d)(WW, RW, CW, MW, MW.layerWidth, MW.layers, jR)
              })).catch((WW => {
                console.error(`Failed to build texture array for atlas ${CW}`, WW)
              }))
            }))
          }))
        }(MW, RW.state))
      },
      texture: (WW, RW, MW) => {
        let {
          data: wW,
          sets: CW
        } = MW;
        var zR;
        (dW(WW), wW) && (WW.uvSet = null !== (zR = null === CW || void 0 === CW ? void 0 : CW.coordinatesIndex) && void 0 !== zR ? zR : 0, (0, lW.W)(WW.matrix, null !== CW && void 0 !== CW ? CW : {}))
      },
      cube: dW,
      canvas: (WW, RW, MW) => {
        let {
          width: wW,
          height: CW,
          mipmaps: zR,
          samplingMode: AW = XW.i.trilinear,
          hasAlpha: bR = !1,
          wrap: yR = XW.c.clamp
        } = MW;
        const NW = WW.mC().createCanvas(wW, CW),
          eW = new XW.m("2d", {
            kind: "canvas",
            width: wW,
            height: CW,
            canvas: NW
          }, {
            samplingMode: AW,
            wrapU: yR,
            wrapV: yR,
            noMipmap: !zR,
            invertY: !0
          });
        return eW.hasAlpha = bR, dW(eW), eW
      }
    };
    var hW = MW(35475),
      UW = MW(35346);
    class EW {
      constructor(WW, RW, MW) {
        this.engine = WW, this.clearColor = RW, this.ambientColor = MW, this.onBeforeRenderObservable = new UW.c, this.onBeforeCameraRenderObservable = new UW.c, this.onAfterRenderObservable = new UW.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.Xs = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      mC() {
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
      addPendingData(WW) {
        this.pending.push(WW)
      }
      removePendingData(WW) {
        const RW = this.pending.indexOf(WW); - 1 !== RW && this.pending.splice(RW, 1)
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

    function VW() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const mR = {
      ZNW: VW,
      HNW: (WW, RW) => {
        const MW = new EW(WW.engine, wW.d.FromArray(RW.clearColor), wW.Color3.FromArray(RW.ambientColor));
        (0, AW.e)(pW, MW), WW.LC = MW,
          function(WW, RW) {
            const MW = Object.assign((0, hW.i)(WW, "camera"), {
              layerMask: 268435455
            });
            WW.model.nodes.setWorldSource(MW.row, WW.model.view.worldMatrix), WW.camera = RW.activeCamera = MW
          }(WW, MW), (0, CW.g)(WW, ((WW, RW, MW) => (0, zR.k)(WW, RW, MW, bR.c)))
      },
      ONW: () => {},
      setBabylonFog: () => {},
      SNW: VW,
      MeW: () => {},
      linesFromArrays: (WW, RW, MW) => (0, zR.k)(WW, RW, MW, yR),
      HC: () => {},
      ReW: VW
    };
    var xR = MW(39174),
      vR = MW(39184);
    class KW {
      constructor(WW) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const RW = new Promise((WW => {
          this.refused = WW
        }));
        this.deviceLost = Promise.race([WW, RW])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(WW) {
        (function(WW) {
          const {
            name: RW,
            message: MW
          } = null !== WW && void 0 !== WW ? WW : {};
          return "InvalidStateError" === RW && "string" === typeof MW && MW.startsWith("GPUDevice.")
        })(WW) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: WW.message,
          framesRefused: !0
        }))
      }
    }
    class uW {
      constructor(WW) {
        this.resources = WW, this.matrixKey = {
          aR: 0
        }, this.attributesKey = {
          aR: 0
        }, this.inputs = Object.create(null);
        for (let RW = 0; RW < 4; RW++) this.inputs[`world${RW}`] = new GW(this.matrixKey, 16 * RW, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(WW, RW) {
        this.resources.vertexBufferCreated(this.matrixKey, WW, !0), RW && this.resources.vertexBufferCreated(this.attributesKey, RW, !0)
      }
    }
    class OW extends uW {
      constructor(WW, RW, MW) {
        super(WW), this.mesh = RW, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const wW = this.inputs;
        let CW = 0;
        for (const {
            size: AW
          }
          of MW) CW += AW;
        for (const {
            name: AW,
            offset: bR,
            size: yR,
            type: NW
          }
          of MW) wW[AW] = new GW(this.attributesKey, 4 * bR, 4 * CW, yR, !0, NW);
        this.rowStride = CW, WW.WzW.set(RW, this);
        const zR = RW.isVerticesDataPresent;
        RW.isVerticesDataPresent = (WW, MW) => WW in wW || zR.call(RW, WW, MW)
      }
      attach(WW, RW) {
        this.matrices = WW, this.attributes = RW, this.bind(WW, RW), this.mirror(WW, WW.length, WW.length / 16)
      }
      szW(WW) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, WW ? 64 * WW : void 0)
      }
      dzW() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(WW, RW) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * WW, 16 * RW)
      }
      attributeRows(WW, RW) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, WW * this.rowStride, RW * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(WW, RW, MW) {
        const wW = this.mesh._thinInstanceDataStorage;
        wW.matrixData = WW, wW.matrixBufferSize = RW, wW.worldMatrices = null, wW.instancesCount = MW
      }
    }
    class nW extends uW {
      constructor(WW, RW, MW) {
        var wW, CW, zR, AW;
        super(WW), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (wW = null === MW || void 0 === MW ? void 0 : MW.interleavedKinds) && void 0 !== wW ? wW : null, this.offsets = null !== (CW = null === MW || void 0 === MW ? void 0 : MW.interleavedOffsets) && void 0 !== CW ? CW : [], this.rowStride = null !== (zR = null === MW || void 0 === MW ? void 0 : MW.interleavedRowStride) && void 0 !== zR ? zR : 0, null === (AW = this.layout) || void 0 === AW || AW.forEach(((WW, RW) => {
          this.inputs[WW] = new GW(this.attributesKey, 4 * this.offsets[RW], 4 * this.rowStride, MW.strides[WW])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), WW.batchUploads.set(RW, this), RW.rMW.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(WW) {
        const RW = this.packedBatch;
        return RW.renderSelf ? 0 === WW ? this.packedSource : RW.instances[WW - 1] : RW.instances[WW]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(WW, RW, MW, wW) {
        const CW = (RW.renderSelf ? 1 : 0) + RW.rows.length;
        if (this.frame = wW, this.count = CW, this.packedSource = WW, this.packedBatch = RW, 0 === CW) return;
        if (WW.getWorldMatrix(), 16 * CW > this.matrices.length) {
          let WW = this.matrices.length / 16;
          for (; WW < CW;) WW *= 2;
          this.matrices = new Float32Array(16 * WW), this.attributes &&= new Float32Array(WW * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let zR = 0;
        RW.renderSelf && this.packRow(zR++, WW, RW.row, MW);
        for (let AW = 0; AW < RW.rows.length; AW++) this.packRow(zR++, RW.instances[AW], RW.rows[AW], MW);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * CW), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, CW * this.rowStride)
      }
      packRow(WW, RW, MW, wW) {
        const CW = this.matrices;
        if (MW < 0) CW.set(RW.getWorldMatrix().m, 16 * WW);
        else
          for (let NW = 0; NW < 16; NW++) CW[16 * WW + NW] = wW[16 * MW + NW];
        const zR = this.attributes;
        if (!zR) return;
        const AW = RW.ORW,
          bR = this.layout;
        for (let NW = 0; NW < bR.length; NW++) {
          var yR;
          const RW = null !== (yR = AW[bR[NW]]) && void 0 !== yR ? yR : 0,
            MW = WW * this.rowStride + this.offsets[NW];
          RW.toArray ? RW.toArray(zR, MW) : RW.copyToArray ? RW.copyToArray(zR, MW) : zR[MW] = RW
        }
      }
    }
    class GW {
      constructor(WW, RW, MW, wW) {
        let CW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = WW, this.byteOffset = RW, this.byteStride = MW, this.size = wW, this.instanced = CW, this.type = zR, this.normalized = AW
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
    const LW = "CANVAS_ALPHA_ONE",
      HW = `override ${LW}: bool = false;`,
      DW = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function qR(WW, RW, MW) {
      var wW;
      let CW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const zR = null !== (wW = RW._colorFormat) && void 0 !== wW ? wW : "bgra8unorm",
        AW = CW ? 15 : 0;
      return MW ? {
        ...WW,
        targets: [{
          format: zR,
          blend: {
            color: MW,
            alpha: DW
          },
          writeMask: AW
        }]
      } : {
        ...WW,
        constants: {
          ...WW.constants,
          [LW]: 1
        },
        targets: [{
          format: zR,
          writeMask: AW
        }]
      }
    }

    function ZW(WW, RW) {
      WW._renderables.push(RW)
    }

    function SW(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = WW._frameGraph) || void 0 === MW ? void 0 : MW._tasks) && void 0 !== RW ? RW : []
    }

    function WR(WW) {
      return WW._currentEncoder
    }

    function RR(WW) {
      return WW.createBindGroupLayout({
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
    const MR = "greater-equal",
      wR = 2e5,
      CR = 1e5,
      zM = new WeakMap;

    function AR(WW, RW) {
      let MW = zM.get(WW);
      if (!MW) {
        MW = {
          module: WW.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, zM.set(WW, MW)
      }
      const wW = `${RW._colorFormat}|${RW._depthStencilFormat}|${RW._sampleCount}`;
      let CW = MW.pipelines.get(wW);
      if (!CW) {
        var zR;
        const {
          module: AW
        } = MW;
        CW = WW.createRenderPipeline({
          label: `placeholder ${wW}`,
          layout: WW.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: AW,
            entryPoint: "v"
          },
          fragment: {
            module: AW,
            entryPoint: "f",
            targets: [{
              format: null !== (zR = RW._colorFormat) && void 0 !== zR ? zR : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: RW._depthStencilFormat ? {
            format: RW._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: RW._sampleCount
          }
        }), MW.pipelines.set(wW, CW)
      }
      return CW
    }

    function bM(WW, RW, MW) {
      const wW = RW.eye,
        CW = RW.viewMatrix;
      WW[0] = wW[0] + CW[2] * MW, WW[1] = wW[1] + CW[6] * MW, WW[2] = wW[2] + CW[10] * MW
    }
    var yM = MW(36029),
      NR = MW(39077),
      eR = MW(35259);
    const BR = Math.PI,
      tM = BR / 1.95,
      TR = [5e-4 / 94, 125e-7, 5e-4 / 18],
      gM = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((WW => {
        let [RW, MW] = WW;
        return .434 * BR * Math.pow(2 * BR / RW, 2) * MW
      }));

    function iM(WW, RW, MW) {
      const {
        up: wW,
        mieDirectionalG: CW
      } = WW, zR = 1 - PR(1 - Math.exp(RW[1] / 45e4), 0, 1), AW = WW.rayleigh - (1 - zR), bR = Math.hypot(RW[0], RW[1], RW[2]), yR = bR > 0 ? 1 / bR : 0, NW = MW.sunDir;
      for (let TW = 0; TW < 3; TW++) NW[TW] = RW[TW] * yR;
      const eW = NW[0] * wW[0] + NW[1] * wW[1] + NW[2] * wW[2],
        BW = 1e3 * Math.max(0, 1 - Math.exp(-(tM - Math.acos(PR(eW, -1, 1))) / 1.5));
      MW.sunE = BW;
      const tR = .2 * WW.turbidity * 1e-17 * WW.mieCoefficient;
      for (let TW = 0; TW < 3; TW++) {
        const WW = TR[TW] * AW,
          RW = gM[TW] * tR,
          wW = BW / (WW + RW);
        MW.inScatterR[TW] = WW * wW, MW.inScatterM[TW] = RW * wW, MW.extinctionBeta[TW] = 8400 * WW + 1250 * RW
      }
      return MW.sunsetMix = PR(Math.pow(1 - eW, 5), 0, 1), MW.sunDiscE = 19e3 * BW, MW.mieScale = (1 - CW * CW) / (4 * BR), MW.mieBase = 1 + CW * CW, MW.mieSlope = 2 * CW, MW
    }
    const YR = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const JR = 1 / function(WW) {
      const {
        A: RW,
        B: MW,
        C: wW,
        D: CW,
        E: zR,
        F: AW
      } = YR;
      return (WW * (RW * WW + wW * MW) + CW * zR) / (WW * (RW * WW + MW) + CW * AW) - zR / AW
    }(1e3);

    function PR(WW, RW, MW) {
      return Math.min(Math.max(WW, RW), MW)
    }
    const IR = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function oR(WW, RW) {
      const MW = new Map(RW),
        wW = [],
        CW = [],
        zR = () => 0 === CW.length || CW[CW.length - 1].active;
      let AW = null;
      const bR = () => {
        const WW = [...MW].filter((WW => {
            let [, RW] = WW;
            return !0 !== RW
          })),
          RW = WW.map((WW => {
            let [RW] = WW;
            return RW
          })).join("|");
        AW = WW.length ? new RegExp(`\\b(${RW})\\b`, "g") : null
      };
      bR();
      for (const yR of WW.split("\n")) {
        const WW = IR.exec(yR);
        if (!WW) {
          zR() && wW.push(AW ? lR(yR, AW, MW) : yR);
          continue
        }
        const RW = WW[1],
          NW = WW[2].trim();
        if ("ifdef" === RW || "ifndef" === RW || "if" === RW) {
          const WW = zR(),
            wW = "if" === RW ? FR(NW, MW) : MW.has(NW) === ("ifdef" === RW);
          CW.push({
            active: WW && wW,
            parentActive: WW,
            taken: wW
          })
        } else if ("elif" === RW || "else" === RW) {
          const WW = CW[CW.length - 1];
          if (!WW) throw new Error(`#${RW} without #if`);
          const wW = !WW.taken && ("else" === RW || FR(NW, MW));
          WW.active = WW.parentActive && wW, WW.taken = WW.taken || wW
        } else if ("endif" === RW) {
          if (!CW.pop()) throw new Error("#endif without #if")
        } else if (zR()) {
          const [WW, ...wW] = NW.split(/\s+/);
          "undef" === RW ? MW.delete(WW) : MW.set(WW, !wW.length || wW.join(" ")), bR()
        }
      }
      if (CW.length) throw new Error("Unterminated #if");
      return wW.join("\n")
    }

    function lR(WW, RW, MW) {
      return WW.replace(RW, (WW => {
        const RW = MW.get(WW);
        return "string" === typeof RW ? RW : WW
      }))
    }

    function FR(WW, RW) {
      var MW;
      const wW = null !== (MW = WW.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== MW ? MW : [];
      let CW = 0;
      const zR = () => wW[CW],
        AW = () => wW[CW++],
        bR = WW => {
          const MW = /^\d/.test(WW) ? WW : RW.get(WW);
          return "string" === typeof MW ? parseInt(MW) : Number.NaN
        },
        yR = () => {
          const WW = AW();
          if ("!" === WW) return !yR();
          if ("(" === WW) {
            const WW = eW();
            return AW(), WW
          }
          if ("defined" === WW) {
            const WW = "(" === zR();
            WW && AW();
            const MW = AW();
            return WW && AW(), RW.has(MW)
          }
          const MW = zR();
          if ("==" === MW || "!=" === MW || ">" === MW || "<" === MW || ">=" === MW || "<=" === MW) {
            AW();
            const RW = bR(WW),
              wW = bR(AW());
            if (Number.isNaN(RW) || Number.isNaN(wW)) return !1;
            switch (MW) {
              case "==":
                return RW === wW;
              case "!=":
                return RW !== wW;
              case ">":
                return RW > wW;
              case "<":
                return RW < wW;
              case ">=":
                return RW >= wW;
              default:
                return RW <= wW
            }
          }
          return RW.has(WW)
        },
        NW = () => {
          let WW = yR();
          for (;
            "&&" === zR();) {
            AW();
            const RW = yR();
            WW = WW && RW
          }
          return WW
        },
        eW = () => {
          let WW = NW();
          for (;
            "||" === zR();) {
            AW();
            const RW = NW();
            WW = WW || RW
          }
          return WW
        },
        BW = eW();
      if (CW !== wW.length) throw new Error(`Cannot evaluate #if ${WW}`);
      return BW
    }
    var fR = MW(35257),
      QR = MW(35565),
      rM = MW(35571),
      cM = MW(38385),
      XR = MW(36775);
    const jM = 32,
      kM = [10, 3, 10],
      aM = [21, 7, 21],
      sR = aM[0] * aM[1] * aM[2],
      dR = 0,
      pR = 1,
      hR = 2,
      UR = 3,
      ER = 64,
      VR = 512,
      mM = 4 * sR,
      xM = 1536,
      vM = mM + sR * xM,
      KR = 1073741824,
      uR = vM + 1;

    function OR(WW, RW) {
      const MW = WW % RW;
      return MW < 0 ? MW + RW : MW
    }

    function nR(WW, RW, MW) {
      return wW = OR(WW, aM[0]), CW = OR(RW, aM[1]), zR = OR(MW, aM[2]), wW + aM[0] * (CW + aM[1] * zR);
      var wW, CW, zR
    }

    function GR(WW, RW, MW) {
      return WW + 8 * (RW + 8 * MW)
    }

    function LR(WW, RW, MW) {
      return WW + 4 * (RW + 4 * MW)
    }
    const HR = 65535,
      DR = 0,
      qM = 1,
      ZR = 2,
      SR = 3;

    function WM(WW) {
      return Math.ceil(WW * WW / 32)
    }
    const RM = 8192,
      MM = 1 << 18,
      wM = 65536,
      CM = 294912,
      zw = 128,
      AM = 4096,
      bw = 16,
      yw = 16385,
      NM = 81921,
      eM = 147457,
      BM = 4194304;
    const tw = [0, 0, 0],
      TM = [0, 0, 0];

    function gw(WW, RW, MW, wW) {
      ! function(WW, RW, MW) {
        const [wW, CW, zR] = [WW[0], WW[1], WW[2]];
        let AW, bR, yR;
        Math.abs(CW) < .99 ? (AW = zR, bR = 0, yR = -wW) : (AW = -CW, bR = wW, yR = 0);
        const NW = Math.hypot(AW, bR, yR);
        RW[0] = AW / NW, RW[1] = bR / NW, RW[2] = yR / NW, MW[0] = CW * RW[2] - zR * RW[1], MW[1] = zR * RW[0] - wW * RW[2], MW[2] = wW * RW[1] - CW * RW[0]
      }(wW, tw, TM);
      const CW = 1 / 32;
      for (const [zR, AW] of [
          [0, tw],
          [4, TM]
        ]) {
        for (let MW = 0; MW < 3; MW++) WW[RW + zR + MW] = AW[MW] * CW;
        WW[RW + zR + 3] = -(AW[0] * MW[0] + AW[1] * MW[1] + AW[2] * MW[2]) * CW
      }
    }
    class iw {
      constructor() {
        this.words = new Uint32Array(eM), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      IM(WW, RW) {
        this.parts = 0, this.refs = 0, this.view = WW, this.viewAt = RW;
        const MW = WW[RW + 1] * WW[RW + 6] - WW[RW + 2] * WW[RW + 5],
          wW = WW[RW + 2] * WW[RW + 4] - WW[RW] * WW[RW + 6],
          CW = WW[RW] * WW[RW + 5] - WW[RW + 1] * WW[RW + 4],
          zR = Math.hypot(MW, wW, CW) || 1;
        this.light[0] = MW / zR, this.light[1] = wW / zR, this.light[2] = CW / zR
      }
      add(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= AM || ! function(WW, RW, MW) {
            const wW = WW[RW],
              CW = WW[RW + 1],
              zR = WW[RW + 2],
              AW = WW[RW + 3],
              bR = WW[RW + 4],
              yR = WW[RW + 5],
              NW = WW[RW + 6],
              eW = WW[RW + 7],
              BW = WW[RW + 8],
              tR = WW[RW + 9],
              TW = WW[RW + 10],
              gR = WW[RW + 11],
              iR = WW[RW + 12],
              YW = WW[RW + 13],
              JW = WW[RW + 14],
              PW = WW[RW + 15],
              IW = wW * yR - CW * bR,
              oW = wW * NW - zR * bR,
              lW = wW * eW - AW * bR,
              FW = CW * NW - zR * yR,
              fW = CW * eW - AW * yR,
              QW = zR * eW - AW * NW,
              rR = BW * YW - tR * iR,
              cR = BW * JW - TW * iR,
              XW = BW * PW - gR * iR,
              jR = tR * JW - TW * YW,
              kR = tR * PW - gR * YW,
              aR = TW * PW - gR * JW,
              sW = IW * aR - oW * kR + lW * jR + FW * XW - fW * cR + QW * rR;
            if (!(Math.abs(sW) > 1e-12)) return !1;
            const dW = 1 / sW;
            return MW[0] = (yR * aR - NW * kR + eW * jR) * dW, MW[1] = (zR * kR - CW * aR - AW * jR) * dW, MW[2] = (YW * QW - JW * fW + PW * FW) * dW, MW[3] = (TW * fW - tR * QW - gR * FW) * dW, MW[4] = (NW * XW - bR * aR - eW * cR) * dW, MW[5] = (wW * aR - zR * XW + AW * cR) * dW, MW[6] = (JW * lW - iR * QW - PW * oW) * dW, MW[7] = (BW * QW - TW * lW + gR * oW) * dW, MW[8] = (bR * kR - yR * XW + eW * rR) * dW, MW[9] = (CW * XW - wW * kR - AW * rR) * dW, MW[10] = (iR * fW - YW * lW + PW * IW) * dW, MW[11] = (tR * lW - BW * fW - gR * IW) * dW, MW[12] = (yR * cR - bR * jR - NW * rR) * dW, MW[13] = (wW * jR - CW * cR + zR * rR) * dW, MW[14] = (YW * oW - iR * FW - JW * IW) * dW, MW[15] = (BW * FW - tR * oW + TW * IW) * dW, !0
          }(RW, MW, this.inverse)) return;
        const {
          view: wW,
          viewAt: CW
        } = this, zR = MW;
        let AW = 1 / 0,
          bR = 1 / 0,
          yR = -1 / 0,
          NW = -1 / 0,
          eW = -1 / 0;
        const [BW, tR, TW] = this.light;
        for (let lW = 0; lW < 8; lW++) {
          const MW = 1 & lW ? WW.hi[0] : WW.lo[0],
            gR = 2 & lW ? WW.hi[1] : WW.lo[1],
            iR = 4 & lW ? WW.hi[2] : WW.lo[2],
            YW = MW * RW[zR] + gR * RW[zR + 4] + iR * RW[zR + 8] + RW[zR + 12],
            JW = MW * RW[zR + 1] + gR * RW[zR + 5] + iR * RW[zR + 9] + RW[zR + 13],
            PW = MW * RW[zR + 2] + gR * RW[zR + 6] + iR * RW[zR + 10] + RW[zR + 14],
            IW = wW[CW] * YW + wW[CW + 1] * JW + wW[CW + 2] * PW + wW[CW + 3],
            oW = wW[CW + 4] * YW + wW[CW + 5] * JW + wW[CW + 6] * PW + wW[CW + 7];
          AW = Math.min(AW, IW), bR = Math.min(bR, oW), yR = Math.max(yR, IW), NW = Math.max(NW, oW), eW = Math.max(eW, BW * YW + tR * JW + TW * PW)
        }
        if (yR < -1 || NW < -1 || AW >= 1 || bR >= 1) return;
        const gR = this.parts++,
          iR = this.rects;
        iR[4 * gR] = YM(AW), iR[4 * gR + 1] = YM(bR), iR[4 * gR + 2] = YM(yR), iR[4 * gR + 3] = YM(NW);
        const YW = this.inverse,
          {
            cell: JW,
            dims: PW,
            lo: IW
          } = WW,
          oW = NM + gR * bw;
        for (let lW = 0; lW < 3; lW++) this.floats[oW + 4 * lW] = YW[lW] / JW, this.floats[oW + 4 * lW + 1] = YW[4 + lW] / JW, this.floats[oW + 4 * lW + 2] = YW[8 + lW] / JW, this.floats[oW + 4 * lW + 3] = (YW[12 + lW] - IW[lW]) / JW;
        this.words[oW + 12] = WW.at, this.floats[oW + 13] = eW + .001 * (1 + Math.abs(eW)), this.words[oW + 14] = PW[0] | PW[1] << 8 | PW[2] << 16
      }
      finish() {
        const WW = zw,
          {
            counts: RW,
            rects: MW,
            words: wW
          } = this;
        RW.fill(0);
        let CW = 0,
          zR = 0;
        for (; zR < this.parts; zR++) {
          const wW = 4 * zR,
            AW = (MW[wW + 2] - MW[wW] + 1) * (MW[wW + 3] - MW[wW + 1] + 1);
          if (CW + AW > 65536) break;
          CW += AW;
          for (let CW = MW[wW + 1]; CW <= MW[wW + 3]; CW++)
            for (let zR = MW[wW]; zR <= MW[wW + 2]; zR++) RW[CW * WW + zR]++
        }
        let AW = 0;
        for (let yR = 0; yR < 16384; yR++) wW[yR] = AW, AW += RW[yR], RW[yR] = wW[yR];
        wW[16384] = AW;
        for (let yR = 0; yR < zR; yR++) {
          const CW = 4 * yR;
          for (let zR = MW[CW + 1]; zR <= MW[CW + 3]; zR++)
            for (let AW = MW[CW]; AW <= MW[CW + 2]; AW++) wW[yw + RW[zR * WW + AW]++] = yR
        }
        const bR = this.floats;
        for (let yR = 0; yR < 16384; yR++) {
          const WW = yw + wW[yR],
            RW = WW + Math.min(wW[yR + 1] - wW[yR], 64);
          for (let MW = WW + 1; MW < RW; MW++) {
            const RW = wW[MW],
              CW = bR[81934 + RW * bw];
            let zR = MW - 1;
            for (; zR >= WW && bR[81934 + wW[zR] * bw] < CW; zR--) wW[zR + 1] = wW[zR];
            wW[zR + 1] = RW
          }
        }
        this.refs = CW
      }
    }

    function YM(WW) {
      return Math.min(127, Math.max(0, Math.floor((.5 * WW + .5) * zw)))
    }

    function JM(WW, RW, MW, wW, CW) {
      for (let zR = 0; zR < 4; zR++)
        for (let AW = 0; AW < 4; AW++) CW[4 * zR + AW] = WW[RW + 4 * zR] * MW[wW + AW] + WW[RW + 4 * zR + 1] * MW[wW + 4 + AW] + WW[RW + 4 * zR + 2] * MW[wW + 8 + AW] + WW[RW + 4 * zR + 3] * MW[wW + 12 + AW]
    }

    function PM(WW, RW, MW, wW, CW) {
      const zR = WW[0] - RW,
        AW = WW[1] - MW,
        bR = WW[2] - wW,
        yR = WW[3] - RW,
        NW = WW[4] - MW,
        eW = WW[5] - wW,
        BW = WW[6] - RW,
        tR = WW[7] - MW,
        TW = WW[8] - wW;
      if (Math.min(zR, yR, BW) > CW || Math.max(zR, yR, BW) < -CW) return !1;
      if (Math.min(AW, NW, tR) > CW || Math.max(AW, NW, tR) < -CW) return !1;
      if (Math.min(bR, eW, TW) > CW || Math.max(bR, eW, TW) < -CW) return !1;
      const gR = yR - zR,
        iR = NW - AW,
        YW = eW - bR,
        JW = BW - yR,
        PW = tR - NW,
        IW = TW - eW,
        oW = iR * IW - YW * PW,
        lW = YW * JW - gR * IW,
        FW = gR * PW - iR * JW;
      if (Math.abs(oW * zR + lW * AW + FW * bR) > CW * (Math.abs(oW) + Math.abs(lW) + Math.abs(FW))) return !1;
      const fW = [gR, iR, YW, JW, PW, IW, zR - BW, AW - tR, bR - TW];
      for (let QW = 0; QW < 3; QW++) {
        const WW = fW[3 * QW],
          RW = fW[3 * QW + 1],
          MW = fW[3 * QW + 2];
        for (let wW = 0; wW < 3; wW++) {
          const gR = 0 === wW ? 0 : 1 === wW ? MW : -RW,
            iR = 0 === wW ? -MW : 1 === wW ? 0 : WW,
            YW = 0 === wW ? RW : 1 === wW ? -WW : 0,
            JW = gR * zR + iR * AW + YW * bR,
            PW = gR * yR + iR * NW + YW * eW,
            IW = gR * BW + iR * tR + YW * TW,
            oW = CW * (Math.abs(gR) + Math.abs(iR) + Math.abs(YW));
          if (Math.min(JW, PW, IW) > oW || Math.max(JW, PW, IW) < -oW) return !1
        }
      }
      return !0
    }
    const IM = new Float32Array(1);
    new Uint32Array(IM.buffer);
    var oM = MW(36777);

    function lM(WW) {
      const [RW, MW, wW] = oM.q;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${WW.group}) @binding(${WW.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${RW-1}, ${MW-1}, ${wW-1});\n}\n`
    }

    function FM(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [CW, zR, AW] = aM, [bR, yR, NW] = kM, eW = Math.log2(jM), BW = wW ? "var<private> bloxdSpCrossed: bool;\n" : "", tR = wW ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${WW.group}) @binding(${WW.dR}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${WW.group}) @binding(${WW.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${MW?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${BW}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${qM}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${ZR}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${MW?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${SR}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${CW}, ${zR}, ${AW});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${CW} * (s.y + ${zR} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${bR}, ${yR}, ${NW}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${eW}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${UR}u) {\n\t\treturn named && state == ${hR}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${mM}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${vM}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${RW?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${RW?`\t\tif (exits && step > 0 && step % ${rw} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${eW}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${dR}u || kind == ${pR}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${hR}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${mM}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${tR}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const fM = {
      group: 0,
      uniform: 0,
      dR: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function QM() {
      const WW = fM;
      return `${lM(WW)}${FM(WW,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${oM.b}>,\n}\n@group(${WW.group}) @binding(${WW.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${WW.group}) @binding(${WW.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${oM.i})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${oM.b}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${oM.d}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const rw = 2;
    const cwW = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function XM(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const wW = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${RW.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        CW = "trace" === MW || "lit" === MW,
        zR = "maskEdge" === MW ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        AW = CW ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${RW.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${RW.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===MW?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${zR};\n`;
      return `${wW}${WW.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${CW?function(){const[WW,RW,MW]=oM.q;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${WW}.0, ${RW}.0, ${MW}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${AW}}\n`:""}${WW.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${RW.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${RW.renderOffset});\n}\n`:""}`
    }

    function jw(WW) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${WW.texture}) - 1u)))`
    }
    const kw = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${yM.e.map((WW=>{let[RW,MW]=WW;return`\tbloxdSpOut.${RW} = (bloxdSpWord & ${MW}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function aw(WW) {
      return `bloxdSpFlags(${WW})`
    }
    const sM = `${cM.h}.eyePosition`;

    function dM(WW, RW, MW, wW, CW) {
      const zR = WW.indexOf(RW);
      if (zR < 0 || WW.indexOf(RW, zR + 1) >= 0) throw new Error(`Lite's ${CW} program changed at the shader pack ${wW} hook: ${zR<0?"no":"more than one"} anchor (lite/${CW}ShaderPack.ts)`);
      return WW.slice(0, zR) + MW + WW.slice(zR + RW.length)
    }

    function pM(WW) {
      return WW.sunShadow || WW.airShadow
    }

    function hM(WW, RW) {
      return RW && pM(WW)
    }
    const UM = {
      group: cM.d,
      ...cM.n
    };

    function EM(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!pM(WW)) return "";
      if (RW) {
        const RW = UM,
          CW = "trace" === MW || "lit" === MW;
        let zR = "";
        WW.sunShadow && (zR = CW ? `${FM(RW,!0,"lit"===MW)}${wW=RW,`@group(${wW.group}) @binding(${wW.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${wW.group}) @binding(${wW.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(WW, RW, MW) {
          const wW = `@group(${WW}) @binding(${RW}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return MW ? `${wW}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${cwW}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((WW=>`\t{\n\t\tlet o = vec2i(${WW});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : wW
        }(RW.group, cM.r, "maskEdge" === MW));
        const AW = {
          shadowDirection: `${cM.h}.shadowDirection`,
          renderOffset: `${cM.h}.renderOffset`,
          eyePosition: `${cM.h}.eyePosition`
        };
        return `${lM(RW)}${zR}${function(WW){const[RW,MW,wW]=oM.q;return`@group(${WW.group}) @binding(${WW.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${WW.group}) @binding(${WW.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${RW}.0, ${MW}.0, ${wW}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(RW)}${XM(WW,AW,MW)}`
      }
      var wW;
      return `${WW.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${WW.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function VM(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!RW) return "";
      const zR = (AW = "fragmentInputs.vPositionW", bR = WW.sunShadow ? {
        normal: MW,
        flags: wW
      } : null, `\n\tbloxdSpShadowPosition = ${AW};\n${bR?`\tbloxdSpShadowNormal = normalize(${bR.normal});\n\tbloxdSpShadowEmissive = (${bR.flags} & ${yM.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${bR.flags} & ${yM.i}u) != 0u;\n`:""}`);
      var AW, bR;
      return WW.sunShadow && ("mask" === CW || "maskEdge" === CW) ? `${zR}${yR="fragmentInputs.position",NW="maskEdge"===CW,`\n\tbloxdSpShadowPixel = vec2i(${yR}.xy);\n${NW?`\tbloxdSpShadowZ = ${yR}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${yR}.z), dpdy(${yR}.z));\n`:""}`}` : zR;
      var yR, NW
    }
    const mw = "bloxdSpTextureRotation",
      xw = "bloxdSpTextureLayers";

    function vw(WW) {
      return `\tvertexOutputs.vPackTexture = ${xw}[min(u32(${WW}), arrayLength(&${xw}) - 1u)];\n`
    }

    function KM(WW) {
      return void 0 !== WW.uv
    }

    function uM(WW) {
      if (!WW) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (KM(WW)) return function(WW) {
        const {
          texture: RW,
          cells: MW,
          layers: wW
        } = WW, CW = `textureDimensions(${RW}, bloxdSpLevel)`, zR = MW ? `max(vec2u(vec2f(${CW}) / ${MW}), vec2u(1u))` : CW, AW = MW ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${zR};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${MW}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${MW}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${RW}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${CW} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${zR};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${RW}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let bR;
        if (MW)
          if (1 === wW.length) bR = `\treturn bloxdSpOwnTexel(${wW[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const WW = wW.length - 1;
            bR = `\tvar bloxdSpColour = bloxdSpOwnTexel(${wW[WW]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let RW = WW - 1; RW >= 0; RW--) bR += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${wW[RW]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            bR += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else bR = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${AW}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${jw(WW)};\n\treturn ${zR};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${jw(WW)};\n${bR}}\n`
      }(WW);
      const RW = WW,
        MW = WW => {
          const MW = WW > 0 ? `bloxdSpLayer - ${RW.layers*WW}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${WW}, ${RW.sampler}, bloxdSpTurned, ${MW}, round(bloxdSpMipLevel));`
        };
      let wW = "";
      for (let zR = 0; zR < RW.count - 1; zR++) wW += `\tif (bloxdSpLayer < ${RW.layers*(zR+1)}u) {\n\t\t${MW(zR)}\n\t}\n`;
      const CW = RW.frame ? `${RW.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${mw}: u32;\n@group(${cM.d}) @binding(${cM.u}) var<storage, read> ${xw}: array<u32>;\nfn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${mw} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${mw} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${mw} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${CW}${wW}\t${MW(RW.count-1)}\n}\n`
    }

    function OM(WW, RW, MW) {
      return !!WW.surface && "bloxdDefaultSurface" !== WW.surface && function(WW, RW) {
        return "liquid" === RW || !WW
      }(RW, MW)
    }

    function nM(WW, RW) {
      return WW.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${RW.vertexLocalPosition}, ${aw(RW.vertexFlags)});\n\t\tlet bloxdSpVertex = ${WW.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function GM(WW, RW, MW, wW, CW) {
      if (!WW.surface) return "";
      const zR = (WW, RW) => `\n\tlet bloxdSpTexelUV = ${WW};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${RW}) - 1u));`;
      let AW = "",
        bR = "0u, 0u, vec2f(0.0), 0.0";
      const yR = wW && KM(wW) ? wW : null,
        NW = wW && !KM(wW) ? wW : null;
      yR ? (AW = `\n\tlet bloxdSpUv = ${yR.uv};${zR(function(WW,RW){var MW;return`${null!==(MW=WW.levelUv)&&void 0!==MW?MW:WW.cells?`${RW} / ${WW.cells}`:RW} * vec2f(textureDimensions(${WW.texture}))`}(yR,"bloxdSpUv"),yR.texture)}`, bR = "0u, 0u, bloxdSpUv, bloxdSpMipLevel") : NW && (AW = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${mw} = bloxdSpTexture >> 16u;${zR(`fragmentInputs.vMainUV1 * ${(0,fR.kb)(NW.width)}`,"textureAtlas0")}`, bR = `bloxdSpTexture & 0xffffu, ${mw}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const eW = CW.overlayColour,
        BW = eW ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        tR = "bloxdDefaultSurface" !== WW.surface || eW ? `\n\tbaseColor = vec4f(${BW}, baseColor.a);` : "",
        TW = OM(WW, RW, MW) ? `\n\t${CW.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${AW}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${CW.alpha}, ${CW.enchantTier}, ${CW.enchantColour}, ${CW.enchantSpeed}, ${null!==eW&&void 0!==eW?eW:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${CW.normal}, ${CW.localPosition}, ${aw(CW.flags)}, ${bR});\n\tlet bloxdSpSurface = ${WW.surface}(bloxdSpSurfaceIn);${tR}${TW}\n`
    }
    const LM = "bloxdSpLightIn";

    function HM(WW, RW, MW, wW) {
      if (!WW.light) return "";
      const CW = RW ? `${fR.i}.rgb, ${fR.i}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${fR.f}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: zR,
          diffuse: AW,
          emissive: bR,
          ambient: yR,
          fogColour: NW,
          fogAlpha: eW,
          normal: BW
        } = wW;
      return `\tvar ${LM} = BloxdLightIn(vec3f(0.0), ${MW?zR:"0.0"}, ${AW}, ${bR}, ${yR}, ${CW}, ${NW}, ${eW}, fragmentInputs.vPositionW, ${BW}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${LM}.litColour = bloxdLitColour(bloxdSpSurface, ${LM});\n`
    }

    function DM(WW) {
      return WW.light ? `\n\t{\n\t\tlet bloxdSpLight = ${WW.light}(bloxdSpSurface, ${LM});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const qw = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      ZM = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      SM = "\treturn color;\n}",
      Ww = {
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
    const Rw = Object.freeze({});

    function Mw(WW) {
      var RW;
      return !(null === (RW = (0, XR.f)(WW)) || void 0 === RW || !RW.sceneDepth)
    }

    function ww(WW) {
      const RW = (0, XR.f)(WW);
      return !!RW && OM(RW.hooks, RW.strict, RW.program)
    }

    function Cw(WW, RW, MW, wW) {
      return dM(WW, RW, MW, wW, "terrain")
    }

    function zC(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const zR = function(WW) {
          return (0, XR.b)(WW.packVariant, WW.liquid ? "liquid" : "terrain")
        }(WW),
        {
          hooks: AW
        } = zR,
        bR = hM(zR, wW),
        yR = "edge" === CW ? "maskEdge" : "plain" === CW ? "mask" : "trace",
        NW = nM(AW, Ww);
      NW && (RW = Cw(RW, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${NW}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const eW = "atlas" === WW.texture ? {
          count: WW.atlasCount,
          layers: WW.atlasLayers,
          width: WW.XCW,
          sampler: "atlasSampler",
          frame: WW.animated ? MW : null
        } : null,
        BW = `${zR.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${VM(zR,bR,Ww.normal,Ww.flags,yR)}${GM(AW,zR.strict,zR.program,eW,Ww)}`;
      BW && (RW = Cw(RW, qw, `${qw.slice(0,-1)}${BW}`, "surface"));
      const tR = DM(AW);
      return tR && (RW = Cw(RW, ZM, `${HM(AW,WW.lighting,WW.dirLightCount>0,Ww)}${ZM}`, "light input"), RW = Cw(RW, SM, `${tR.slice(1)}${SM}`, "light")), `${(0,cM.B)()}${zR.sceneDepth?`@group(${cM.d}) @binding(${cM.j}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${sM};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${EM(zR,bR,yR)}${uM(eW)}${kw}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${zR.code}${RW}`
    }
    const Aw = FW.e.WGSL;

    function bC(WW) {
      return void 0 !== WW.packVariant
    }
    const yC = {
        weW: 0,
        CeW: 4,
        zBW: 8,
        AeW: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Nw = yC.aoLevels + 4,
      ew = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      Bw = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      tC = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      Tw = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      gC = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      iC = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      Yw = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      Jw = 0,
      Pw = 3,
      Iw = 4,
      ow = 5,
      lw = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${QR.d}, ${QR.d}, corner == 0u || corner == 3u);\n\tlet dv = select(-${QR.d}, ${QR.d}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      Fw = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = ((${rM.e}u >> dir) & 1u) == 1u;\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const fw = {
      WR: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: WW => `animDataPerTex[${WW}]`
    };

    function Qw(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fw,
        wW = arguments.length > 3 ? arguments[3] : void 0;
      return `\n\tlet atlasIdxIn = ${WW};\n\tlet animTick = ${MW.WR};\n\tlet animTickStride = ${MW.stride};\n\tlet numAnimTextures = ${MW.count};\n\t${(0,fW.g)(FW.e.WGSL,MW.perTexture)}\n\t${RW}animLayer;\n\t${wW?`${wW}animNext;`:""}\n`
    }

    function rC(WW) {
      const RW = WW => `textureSample(diffuseSampler, diffuseSamplerSampler, ${WW})`;
      return WW ? `baseColor = mix(${RW("fragmentInputs.vMainUV1")}, ${RW("fragmentInputs.vMainUV1 + vec2f(0.0, fragmentInputs.vAnimStripNext.x)")}, fragmentInputs.vAnimStripNext.y);` : `baseColor = ${RW("fragmentInputs.vMainUV1")};`
    }

    function cC(WW) {
      const RW = WW.atlasCount > 1 || WW.animated,
        MW = (MW, wW) => {
          const CW = MW > 0 ? `${wW} - ${WW.atlasLayers.toFixed(1)} * ${MW.toFixed(1)}` : wW;
          return `${RW?"textureSampleLevel":"textureSample"}(textureAtlas${MW}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${CW}))${RW?", atlasLod":""})`
        },
        wW = (RW, wW) => {
          if (1 === WW.atlasCount) return `${RW} = ${MW(0,wW)};`;
          let CW = "";
          for (let zR = 0; zR < WW.atlasCount; zR++) {
            const AW = WW.atlasLayers * (zR + 1) - .5;
            CW += `${zR>0?" else ":"\n\t"}if (${wW} < ${(0,fR.kb)(AW)}) {\n\t\t${RW} = ${MW(zR,wW)};\n\t}`
          }
          return CW
        },
        CW = RW ? `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,fR.kb)(WW.XCW)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n` : "",
        zR = WW.animated ? `\n\tif (fragmentInputs.texAtlasNext.y > 0.0) {\n\t\tvar atlasNextColor: vec4f;\n\t\t${wW("atlasNextColor","fragmentInputs.texAtlasNext.x")}\n\t\tbaseColor = mix(baseColor, atlasNextColor, fragmentInputs.texAtlasNext.y);\n\t}` : "";
      return `${CW}${wW("baseColor","fragmentInputs.texAtlasIndex")}${zR}`
    }

    function Xw(WW) {
      return `terrain-${WW.texture}${"atlas"===WW.texture?WW.atlasCount:""}${WW.animated?"-anim":""}${WW.alphaTest?"-test":""}${WW.lighting?"-lit":""}-dir${WW.dirLightCount}${WW.packed?"-packed":""}${bC(WW)?`-sp${WW.packVariant}`:""}${WW.liquid?"-liquid":""}${WW.resting?"-rest":""}`
    }

    function jC(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const wW = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const MW = "none" !== WW.texture,
          wW = "atlas" === WW.texture,
          CW = WW.dirLightCount > 0,
          zR = bC(WW);
        if (WW.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${WW.dirLightCount}`);
        let AW = 1,
          bR = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (wW) {
          WW.animated && (bR += `@group(2) @binding(${AW++}) var<storage, read> animDataPerTex: array<f32>;\n`), bR += `@group(2) @binding(${AW++}) var atlasSampler: sampler;\n`;
          for (let RW = 0; RW < WW.atlasCount; RW++) bR += `@group(2) @binding(${AW++}) var textureAtlas${RW}: texture_2d_array<f32>;\n`
        } else "single" === WW.texture && (bR += `@group(2) @binding(${AW++}) var diffuseSamplerSampler: sampler;\n`, bR += `@group(2) @binding(${AW++}) var diffuseSampler: texture_2d<f32>;\n`);
        const yR = function(WW) {
            const RW = Yw,
              MW = "none" !== WW.texture,
              wW = "atlas" === WW.texture,
              CW = bC(WW);
            return WW.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${MW?"uv: vec2f,":""}\n\t${wW?"texAtlasIndices: f32,":""}\n\t${WW.lighting?"aPackedLightLevels: f32,":""}\n\t${CW?"blockFlagWords: vec2u,":""}\n}\n${lw}\n${Fw}\n${"single"===WW.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\tlet ao = (r2 >> (3u + 2u * slot)) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${MW?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===WW.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${wW?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${WW.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${CW?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${RW.position}) position: vec3f,\n\t@location(${RW.normal}) normal: vec4f,\n\t@location(${RW.color}) color: vec4f,\n\t${MW?`@location(${RW.uv}) uv: vec2f,`:""}\n\t${WW.lighting?`@location(${RW.packedLight}) aPackedLightLevels: f32,`:""}\n\t${CW?`@location(${RW.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(WW),
          NW = `\n${Tw}\n${Bw}\n${tC}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${bR}\n${HW}\n${yR.declarations}\nstruct Varyings {\n\t${"none"===RW?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${WW.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${CW?"@location(5) vTerrainLambert: f32,":""}\n\t${MW?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${wW?"@location(7) texAtlasIndex: f32,":""}\n\t${WW.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${zR?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${zR&&wW?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n\t${wW&&WW.animated?"@location(11) texAtlasNext: vec2f,":""}\n\t${"single"===WW.texture&&WW.animated?"@location(11) vAnimStripNext: vec2f,":""}\n}\n\n${WW.resting?"":(0,fR.o)(Aw)}\n${iC}\n\n@vertex\nfn mainVertex(${yR.parameter}) -> Varyings {\n\t${yR.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${zR?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${yM.c.placed}u;`:""}\n\t${zR&&wW?vw("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${WW.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${MW?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${wW?function(WW){return WW?Qw("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = ",fw,"vertexOutputs.texAtlasNext = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(WW.animated):""}\n\t${"single"===WW.texture&&WW.animated?"\n\tlet animFramePos = material.anim.x / abs(material.anim.z);\n\tlet frameTick = floor(animFramePos);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tlet animNextTexIndex = frameTick + 1.0 - material.anim.y * floor((frameTick + 1.0) / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n\tvertexOutputs.vAnimStripNext = vec2f((animNextTexIndex - animTexIndex) / material.anim.y, (animFramePos - frameTick) * step(0.0, material.anim.z));\n":""}\n\t${(0,fR.X)(Aw)}\n\t${(0,fR.G)(Aw,WW.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${WW.resting?"":gC}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${wW?cC(WW):""}\n\t${"single"===WW.texture?rC(WW.animated):""}\n\t${MW?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${WW.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${CW?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${LW}));\n\t${bC(WW)?(0,fR.fb)(FW.e.WGSL):(0,fR.Q)(Aw)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          eW = new Set;
        WW.lighting && eW.add("BLOXD_LIGHTING");
        CW && eW.add("BLOXD_TERRAIN_DIRECTIONAL");
        return oR(NW, new Map([...eW].map((WW => [WW, !0]))))
      }(WW, MW);
      if (!bC(WW)) return wW;
      const CW = zC(WW, wW, Qw, RW, MW);
      return "none" === MW ? CW : `${CW}${function(WW){const RW="none"!==WW.texture&&WW.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${WW.resting?"":gC}\n\t${WW.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${RW&&"atlas"===WW.texture?cC(WW):""}\n\t${RW&&"single"===WW.texture?rC(WW.animated):""}\n\t${RW?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${yM.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(WW)}`
    }
    const kC = new Map([
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

    function aC(WW, RW) {
      const MW = new Map;
      let wW = 0;
      const CW = [],
        zR = [],
        AW = [];
      for (const NW of RW) {
        var bR, yR;
        const RW = null !== (bR = NW.type.trim().split(/\s+/).pop()) && void 0 !== bR ? bR : NW.type,
          eW = kC.get(RW);
        if (!eW) throw new Error(`Lite: no uniform layout for ${NW.name}: ${NW.type}`);
        const BW = null !== (yR = NW.arraySize) && void 0 !== yR ? yR : 0,
          tR = BW ? 4 : eW.align;
        wW = Math.ceil(wW / tR) * tR;
        const TW = BW ? 4 * Math.ceil(eW.floats / 4) : eW.floats;
        if (MW.set(NW.name, {
            offset: wW,
            floats: eW.floats,
            arraySize: BW,
            stride: TW
          }), BW && eW.floats <= 2) {
          const RW = `${WW}_${AW.length}_strided`;
          zR.push(`struct ${RW} {\n\t@size(16) el: ${eW.wgsl},\n}`), AW.push(NW.name), CW.push(`\t@align(16) ${NW.name}: array<${RW}, ${BW}>,`)
        } else BW ? CW.push(`\t@align(16) ${NW.name}: array<${eW.wgsl}, ${BW}>,`) : CW.push(`\t${NW.name}: ${eW.wgsl},`);
        wW += BW ? TW * BW : eW.floats
      }
      return {
        slots: MW,
        floats: Math.max(4, 4 * Math.ceil(wW / 4)),
        wgsl: `${zR.join("\n")}\nstruct ${WW} {\n${CW.join("\n")}\n}\n`,
        stridedArrays: AW
      }
    }
    const sw = [{
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
      dw = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      pw = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function hw(WW, RW) {
      return `#if defined(${WW}) && ${WW}DIRECTUV == 0\nvarying v${RW}UV: vec2f;\n#endif`
    }

    function Uw(WW, RW, MW) {
      return `#if defined(${WW}) && ${WW}DIRECTUV == 0\nif (uniforms.v${RW}Infos.x==0.)\n{vertexOutputs.v${RW}UV= (uniforms.${MW}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${RW}UV= (uniforms.${MW}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Ew(WW, RW, MW) {
      return `#ifdef ${WW}\n#if ${WW}DIRECTUV == 1\n#define v${RW}UV vMainUV1\n#elif ${WW}DIRECTUV == 2\n#define v${RW}UV vMainUV2\n#else\nvarying v${RW}UV: vec2f;\n#endif\nvar ${MW}SamplerSampler: sampler;\nvar ${MW}Sampler: texture_2d<f32>;\n#endif`
    }
    const Vw = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      mC = 256,
      xC = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      vC = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      Kw = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      uw = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      Ow = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      nw = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      Gw = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      Lw = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${vC}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${hw("OPACITY","Opacity")}\n${hw("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${Gw}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${Kw}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${Uw("OPACITY","Opacity","opacity")}\n${Uw("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${uw}\n#define CUSTOM_VERTEX_MAIN_END\n${Ow}\n}\n`;
    const Hw = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Ew("OPACITY","Opacity","opacity")}\n${Ew("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${Gw}\n${nw}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((WW,RW)=>function(WW){const RW=`
    frame.lights[LITE_LIGHT$ {
        WW
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      WW
    }\
    nvar diffuse$ {
      WW
    }: vec4f = $ {
      RW
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      WW
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      RW
    }.vLightData, diffuse$ {
      WW
    }.rgb, $ {
      RW
    }.vLightSpecular.rgb, diffuse$ {
      WW
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(RW))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, Dw = /^([gimus]+)!/, qC = new Set;

    function Zw(WW) {
      qC.has(WW) || (qC.add(WW), console.warn(`Lite: no place for plugin code at ${WW} in the standard shader: it is left out`))
    }

    function Sw(WW, RW) {
      let MW = WW;
      const wW = new Map;
      for (const [zR, AW] of RW) {
        var CW;
        wW.set(zR, `${null!==(CW=wW.get(zR))&&void 0!==CW?CW:""}${AW}\n`)
      }
      for (const [zR, AW] of wW) {
        if (!zR.startsWith("!")) {
          const WW = `#define ${zR}`;
          if (!MW.includes(WW)) {
            Zw(zR);
            continue
          }
          MW = MW.replace(WW, (() => `\n${AW}\n${WW}`));
          continue
        }
        let WW = zR.substring(1),
          RW = "g";
        if (WW.startsWith("!")) RW = "", WW = WW.substring(1);
        else {
          const MW = Dw.exec(WW);
          MW && (RW = MW[1], WW = WW.substring(RW.length + 1))
        }
        const wW = new RegExp(WW, RW.includes("g") ? RW : `${RW}g`);
        let CW = wW.exec(MW);
        for (CW || Zw(zR); CW;) {
          const WW = CW,
            RW = AW.replace(/\$(\d+)/g, ((RW, MW) => Number(MW) < WW.length ? WW[Number(MW)] : ""));
          MW = MW.substring(0, WW.index) + RW + MW.substring(WW.index + WW[0].length), wW.lastIndex = WW.index + RW.length, CW = wW.exec(MW)
        }
      }
      return MW
    }
    const WC = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      RC = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      MC = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function wC(WW) {
      const RW = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let MW = WW.replace(WC, ((WW, MW, wW, CW, zR, AW) => ("attribute" === MW ? RW.attributes.push({
        name: zR,
        type: AW
      }) : void 0 === MW ? RW.varyings.push({
        name: zR,
        type: AW,
        interpolation: zz(AW, wW, CW)
      }) : RW.uniforms.push({
        name: zR,
        type: CC(AW)
      }), "")));
      return MW = MW.replace(RC, ((WW, MW) => (RW.samplers.add(MW), ""))), MW = MW.replace(MC, ((WW, MW, wW) => (RW.textures.push({
        name: MW,
        type: wW
      }), ""))), RW.body = MW, RW
    }

    function CC(WW) {
      const RW = WW.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        MW = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(RW);
      if (!MW) throw new Error(`Lite: unsupported uniform type ${WW}`);
      return MW
    }

    function zz(WW, RW, MW) {
      return void 0 === RW && void 0 === MW ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(WW.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === RW ? "@interpolate(flat) " : `@interpolate(${null!==RW&&void 0!==RW?RW:"perspective"}, ${null!==MW&&void 0!==MW?MW:"center"}) `
    }

    function AC(WW) {
      return eC({
        defines: WW.defines,
        vertex: Sw(Lw, WW.vertexCode),
        fragment: Sw(Hw, WW.fragmentCode),
        members: [...sw, ...WW.defines.has("OPACITY") ? dw : [], ...WW.defines.has("EMISSIVE") ? pw : [], ...WW.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function bz(WW) {
      const RW = WW.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (RW === WW) throw new Error("Lite: fragment main has no return");
      return RW
    }
    const yz = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${vC}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${Kw}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${uw}\n${Ow}\n}\n`,
      NC = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${nw}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function eC(WW) {
      const RW = WW.defines,
        MW = wC(oR(WW.vertex, RW)),
        wW = wC(oR(WW.fragment, RW)),
        CW = new Map;
      for (const IW of [...MW.varyings, ...wW.varyings]) CW.has(IW.name) || CW.set(IW.name, IW);
      const zR = [...CW.values()].map(((WW, RW) => `\t@location(${RW}) ${WW.interpolation}${WW.name}: ${WW.type},`)),
        AW = [...WW.members];
      for (const IW of [...MW.uniforms, ...wW.uniforms]) AW.some((WW => WW.name === IW.name)) || AW.push(IW);
      const bR = aC(WW.structName, AW),
        yR = [],
        NW = [];
      let eW = 1;
      const BW = new Set;
      for (const IW of [...MW.textures, ...wW.textures]) {
        if (BW.has(IW.name)) continue;
        BW.add(IW.name);
        const WW = `${IW.name}Sampler`,
          RW = eW++,
          MW = eW++,
          wW = IW.type.startsWith("texture_2d_array") ? "2d-array" : IW.type.startsWith("texture_cube") ? "cube" : "2d";
        yR.push({
          name: IW.name,
          binding: RW,
          samplerBinding: MW,
          dimension: wW
        }), NW.push(`@group(2) @binding(${RW}) var ${IW.name}: ${IW.type};`), NW.push(`@group(2) @binding(${MW}) var ${WW}: sampler;`)
      }
      for (const IW of [...MW.samplers, ...wW.samplers])
        if (!BW.has(IW.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${IW} has no texture`);
      const tR = [Tw, xC, bR.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${WW.structName};`, ...NW].join("\n"),
        TW = MW.attributes,
        gR = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...MW.attributes.map(((WW, RW) => `\t@location(${RW}) ${WW.name}: ${WW.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        iR = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...zR, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        YW = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...wW.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...zR, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", HW, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${LW}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        JW = WW => {
          for (const RW of bR.stridedArrays) WW = WW.replace(new RegExp(`\\b${RW}\\s*\\[(.*?)\\]`, "g"), `${RW}[$1].el`);
          return WW
        };
      return {
        vertex: `${tR}\n${gR}\n${iR}\n${JW(MW.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${tR}\n${YW}\n${bz((PW=JW(wW.body),PW.includes("fragmentInputs.position")?PW.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):PW))}`,
        attributes: TW,
        material: bR,
        textures: yR
      };
      var PW
    }
    const BC = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      tz = WW => ({
        name: WW,
        type: "vec3"
      }),
      TC = WW => ({
        name: WW,
        type: "float"
      }),
      gz = aC("EarthSkyUniforms", [tz("viewFrom"), TC("exposureScale"), tz("zenithOffset"), TC("fogOn"), tz("up"), TC("ditherOn"), tz("sun"), TC("turbidity"), tz("tint"), TC("rayleigh"), tz("sunDir"), TC("mieStrength"), tz("inScatterR"), TC("mieFocus"), tz("inScatterM"), TC("sunE"), tz("extinctionBeta"), TC("sunsetMix"), TC("mieScale"), TC("mieBase"), TC("mieSlope"), TC("sunDiscE"), TC("exposure")]),
      iz = `${Tw}\n${xC}\n${gz.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      YC = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${BC.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      JC = `\n${HW}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(YR).map((WW=>{let[RW,MW]=WW;return`const TONE_${RW}: f32 = ${MW};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${JR};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${LW}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var PC = MW(35317);
    const IC = new PC.vC,
      oC = new PC.vC,
      lC = new PC.Quaternion,
      FC = new Float64Array(3),
      fC = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      QC = new Float64Array(16);

    function rz(WW, RW, MW) {
      const wW = MW.worldMatrix;
      var CW;
      WW.updateFloat3("viewFrom", wW[12], wW[13], wW[14]), WW.updateFloatsFrom("zenithOffset", RW.cameraOffset, 0, 3), WW.updateFloatsFrom("up", RW.up, 0, 3), RW.luminance > 0 && (WW.updateFloat("exposure", RW.luminance), WW.updateFloat("exposureScale", (CW = RW.luminance, Math.log2(2 / Math.pow(CW, 4))))), WW.updateFloat("turbidity", RW.turbidity), WW.updateFloat("rayleigh", RW.rayleigh), WW.updateFloat("mieStrength", RW.mieCoefficient), WW.updateFloat("mieFocus", RW.mieDirectionalG), WW.updateFloatsFrom("tint", RW.tint, 0, 3), WW.updateFloat("fogOn", RW.fog && MW.fogEnabled && 0 !== MW.fogMode ? 1 : 0), WW.updateFloat("ditherOn", RW.dithering ? 1 : 0);
      const zR = RW.sunPosition;
      if (IC.set(zR[0], zR[1], zR[2]), !RW.useSunPosition) {
        const WW = Math.PI * (RW.inclination - .5),
          MW = 2 * Math.PI * (RW.azimuth - .5);
        IC.set(RW.distance * Math.cos(MW) * Math.cos(WW), RW.distance * Math.sin(-WW), RW.distance * Math.sin(MW) * Math.cos(WW)), PC.Quaternion.FromUnitVectorsToRef(PC.vC.UpReadOnly, oC.set(RW.up[0], RW.up[1], RW.up[2]), lC), IC.rotateByQuaternionToRef(lC, IC)
      }
      WW.updateVector3("sun", IC), FC[0] = IC.x, FC[1] = IC.y, FC[2] = IC.z;
      const AW = iM(RW, FC, fC);
      WW.updateFloatsFrom("sunDir", AW.sunDir, 0, 3), WW.updateFloat("sunE", AW.sunE), WW.updateFloatsFrom("inScatterR", AW.inScatterR, 0, 3), WW.updateFloatsFrom("inScatterM", AW.inScatterM, 0, 3), WW.updateFloatsFrom("extinctionBeta", AW.extinctionBeta, 0, 3), WW.updateFloat("sunsetMix", AW.sunsetMix), WW.updateFloat("sunDiscE", AW.sunDiscE), WW.updateFloat("mieScale", AW.mieScale), WW.updateFloat("mieBase", AW.mieBase), WW.updateFloat("mieSlope", AW.mieSlope)
    }

    function cz(WW, RW) {
      const MW = QC;
      MW[0] = RW.far, MW[5] = RW.far, MW[10] = RW.far, MW[15] = 1;
      const wW = WW.infiniteDistance;
      for (let CW = 0; CW < 3; CW++) MW[12 + CW] = WW.position[CW] + (wW ? RW.worldMatrix[12 + CW] : 0);
      return QC
    }
    var XC = MW(36757);

    function jz(WW) {
      return Math.max(4, 4 * Math.ceil(WW / 4))
    }

    function kz(WW, RW, MW, wW) {
      const CW = WW.createBuffer({
        label: wW,
        size: jz(RW.byteLength),
        usage: MW,
        mappedAtCreation: !0
      });
      return new Uint8Array(CW.getMappedRange(), 0, RW.byteLength).set(new Uint8Array(RW.buffer, RW.byteOffset, RW.byteLength)), CW.unmap(), CW
    }

    function az(WW, RW) {
      return Math.floor(Math.log2(Math.max(WW, RW))) + 1
    }

    function sC(WW, RW, MW, wW, CW, zR) {
      const AW = WW.createTexture({
          label: zR,
          size: {
            width: MW,
            height: wW,
            depthOrArrayLayers: CW
          },
          format: "rgba8unorm",
          mipLevelCount: az(MW, wW),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        bR = (RW, MW, wW, zR) => {
          WW.queue.writeTexture({
            texture: AW,
            mipLevel: MW
          }, RW, {
            bytesPerRow: 4 * wW,
            rowsPerImage: zR
          }, {
            width: wW,
            height: zR,
            depthOrArrayLayers: CW
          })
        };
      bR(RW, 0, MW, wW);
      let yR = 1;
      for (const NW of function*(WW, RW, MW, wW) {
          let CW = WW,
            zR = RW,
            AW = MW;
          for (; zR > 1 || AW > 1;) {
            const WW = Math.max(1, zR >> 1),
              RW = Math.max(1, AW >> 1),
              MW = new Uint8Array(WW * RW * wW * 4),
              bR = 4 * zR;
            let yR = 0;
            for (let NW = 0; NW < wW; NW++) {
              const wW = NW * bR * AW;
              for (let NW = 0; NW < RW; NW++) {
                const RW = wW + Math.min(2 * NW, AW - 1) * bR,
                  eW = wW + Math.min(2 * NW + 1, AW - 1) * bR;
                for (let wW = 0; wW < WW; wW++) {
                  const WW = 4 * Math.min(2 * wW, zR - 1),
                    AW = 4 * Math.min(2 * wW + 1, zR - 1);
                  for (let wW = 0; wW < 4; wW++) MW[yR++] = CW[RW + WW + wW] + CW[RW + AW + wW] + CW[eW + WW + wW] + CW[eW + AW + wW] + 2 >> 2
                }
              }
            }
            yield {
              data: MW,
              width: WW,
              height: RW
            }, CW = MW, zR = WW, AW = RW
          }
        }(RW, MW, wW, CW)) bR(NW.data, yR++, NW.width, NW.height);
      return AW
    }
    const dC = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function pC(WW) {
      if (WW.startsWith("data:")) {
        const RW = WW.search(/[;,]/);
        return `data:${RW>5?WW.slice(5,RW):""} URL of ${WW.length} characters`
      }
      return WW.length > 80 ? `${WW.slice(0,80)}...` : WW
    }
    async function hC(WW) {
      const RW = await fetch(WW);
      if (!RW.ok) throw new Error(`${pC(WW)}: ${RW.status} ${RW.statusText}`);
      return createImageBitmap(await RW.blob(), dC)
    }
    async function UC(WW) {
      const RW = await hC(WW),
        MW = new OffscreenCanvas(RW.width, RW.height),
        wW = MW.getContext("2d", {
          willReadFrequently: !0
        });
      if (!wW) throw new Error("No 2D context to decode an image");
      wW.drawImage(RW, 0, 0);
      const {
        data: CW
      } = wW.getImageData(0, 0, RW.width, RW.height);
      return RW.close(), {
        pixels: new Uint8Array(CW.buffer, CW.byteOffset, CW.byteLength),
        width: MW.width,
        height: MW.height
      }
    }
    const EC = new WeakMap;

    function VC(WW, RW, MW, wW) {
      var CW;
      const zR = null !== (CW = EC.get(WW)) && void 0 !== CW ? CW : new Map;
      EC.set(WW, zR);
      let AW = zR.get(RW);
      return AW || (AW = (async CW => {
        const zR = null !== (CW = function(WW, RW) {
          const MW = WW ? new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength) : null;
          return null !== MW && void 0 !== MW && MW.byteLength && RW && MW.byteLength % (RW * RW * 4) === 0 ? {
            pixels: MW,
            layerWidth: RW,
            layers: MW.byteLength / (RW * RW * 4)
          } : null
        }(MW, wW)) && void 0 !== CW ? CW : await async function(WW) {
          const {
            pixels: RW,
            width: MW
          } = await UC(WW);
          return {
            pixels: RW,
            layerWidth: MW,
            layers: RW.byteLength / (MW * MW * 4)
          }
        }(RW), {
          layerWidth: AW,
          layers: bR
        } = zR;
        return {
          texture: sC(WW, zR.pixels, AW, AW, bR, `atlas-${RW}`),
          layerWidth: AW,
          layers: bR
        }
      })(), zR.set(RW, AW), AW.catch((() => {
        zR.delete(RW)
      }))), AW
    }
    const mz = new Map([
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
      xz = new Map([
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

    function vz(WW) {
      for (const RW of (0, XC.n)(WW))
        if (!xz.has((0, XC.k)(RW))) return !1;
      return !0
    }

    function KC(WW) {
      const RW = xz.get(WW);
      if (!RW) return null;
      const [MW, wW, CW] = RW;
      return {
        srcFactor: mz.get(MW),
        dstFactor: mz.get(wW),
        operation: CW
      }
    }
    let uC = null;

    function OC(WW) {
      uC = WW
    }

    function nC(WW, RW, MW) {
      var wW;
      null === (wW = uC) || void 0 === wW || wW(WW, RW, MW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class GC {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(WW, RW, MW, wW, CW) {
        MW !== this.pipeline && (WW.setPipeline(MW), this.pipeline = MW), WW.setBindGroup(1, wW, [CW]);
        const zR = RW.material.bindGroup;
        zR !== this.materialGroup && (WW.setBindGroup(2, zR), this.materialGroup = zR);
        const AW = RW.program.packGroup;
        AW && AW !== this.packGroup && (WW.setBindGroup(cM.d, AW), this.packGroup = AW);
        const {
          vertexBuffers: bR,
          vertexOffsets: yR
        } = this;
        for (let NW = 0; NW < RW.vertexBuffers.length; NW++) bR[NW] === RW.vertexBuffers[NW] && yR[NW] === RW.vertexOffsets[NW] || (WW.setVertexBuffer(NW, RW.vertexBuffers[NW], RW.vertexOffsets[NW]), bR[NW] = RW.vertexBuffers[NW], yR[NW] = RW.vertexOffsets[NW]);
        RW.indexBuffer && RW.indexBuffer !== this.indexBuffer && (WW.setIndexBuffer(RW.indexBuffer, RW.indexFormat), this.indexBuffer = RW.indexBuffer)
      }
    }
    class LC {
      constructor(WW, RW, MW, wW) {
        this.modelMeshes = WW, this.JzW = RW, this.maker = MW, this.warnOnce = wW, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(WW) {
        this.collectGroup(WW, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(WW, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(WW, 1, this.frontDraws, this.frontDraws, !0);
        for (const RW of this.modelMeshes.groupIds())(RW < -1 || RW > 1) && this.warnOnce(`group:${RW}`, `rendering group ${RW} is not drawn`);
        for (const RW of this.JzW.groupIds())(RW < -1 || RW > 1) && this.warnOnce(`group:${RW}`, `rendering group ${RW} is not drawn`);
        this.opaqueDraws.sort(HC), this.transparentDraws.sort(DC)
      }
      collectGroup(WW, RW, MW, wW, CW) {
        const zR = this.modelMeshes.group(RW),
          AW = this.JzW.group(RW),
          bR = 0 === RW ? null === AW || void 0 === AW ? void 0 : AW.opaque : void 0;
        this.collectList(WW, null === zR || void 0 === zR ? void 0 : zR.opaque, bR || null === AW || void 0 === AW ? void 0 : AW.opaque, RW, !1, MW, CW), bR && (this.JzW.drawn += this.maker.bundleDraws(WW, bR, RW)), this.collectList(WW, null === zR || void 0 === zR ? void 0 : zR.alphaTest, void 0, RW, !1, MW, CW), this.collectList(WW, null === zR || void 0 === zR ? void 0 : zR.transparent, null === AW || void 0 === AW ? void 0 : AW.transparent, RW, !0, wW, CW)
      }
      collectList(WW, RW, MW, wW, CW, zR, AW) {
        var bR;
        const yR = zR.length;
        RW && this.maker.pushDraws(WW, RW.units, RW.units.length, wW, CW, zR, RW.rows), MW && (this.JzW.drawn += this.maker.pushDraws(WW, MW, MW.length, wW, CW, zR));
        const NW = CW ? null === (bR = this.modelMeshes.group(wW)) || void 0 === bR ? void 0 : bR.text : void 0;
        NW && this.maker.pushDraws(WW, NW.units, NW.units.length, wW, !0, zR, NW.rows), AW && qz(zR, yR)
      }
    }

    function HC(WW, RW) {
      return WW.program.id - RW.program.id || WW.material.owner.uniqueId - RW.material.owner.uniqueId
    }

    function DC(WW, RW) {
      return WW.material.owner.uniqueId - RW.material.owner.uniqueId
    }

    function qz(WW, RW) {
      for (let MW = RW + 1; MW < WW.length; MW++) {
        const wW = WW[MW];
        let CW = MW - 1;
        for (; CW >= RW && DC(WW[CW], wW) > 0; CW--) WW[CW + 1] = WW[CW];
        WW[CW + 1] = wW
      }
    }
    const ZC = {};

    function SC(WW) {
      return WW.hasThinInstances ? "thin" : WW.bBW || WW._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Wz(WW, RW, MW) {
      return WW ? (MW._needUVs = !0, WW.optimizeUVAllocation && (0, XW.E)(WW.matrix) ? (MW[`${RW}DIRECTUV`] = WW.uvSet + 1, MW[`MAINUV${WW.uvSet+1}`] = !0) : MW[`${RW}DIRECTUV`] = 0, !0) : (MW[`${RW}DIRECTUV`] = 0, !1)
    }

    function Rz(WW) {
      const RW = new Map;
      for (const MW in WW) {
        if (95 === MW.charCodeAt(0)) continue;
        const wW = WW[MW],
          CW = typeof wW;
        "number" === CW || "string" === CW ? RW.set(MW, String(wW)) : wW && "function" !== CW && RW.set(MW, !0)
      }
      return RW
    }

    function Mz(WW) {
      const RW = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: MW
        }
        of WW.features)
        for (const WW in MW) RW[WW] = MW[WW];
      return RW
    }

    function wz(WW) {
      const RW = WW.parts.geometry;
      return null !== RW && void 0 !== RW && RW.live ? RW : null
    }

    function Cz(WW) {
      var RW;
      return null !== (RW = wz(WW)) && void 0 !== RW ? RW : ZC
    }
    class zA {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = WW, this.warnOnce = RW, this.programWithModel = MW, this.packFailed = wW, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(WW, RW, MW, wW, CW) {
        const zR = RW.owner;
        let AW = this.drawStates.get(RW);
        if (!AW) {
          const WW = RW.parts.materials[RW.range];
          if (!WW) return this.warnOnce("model", `${MW.name} on ${zR.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          AW = {
            defines: Mz(WW),
            model: WW,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: CW,
            groupId: wW,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(RW, AW)
        }
        if (this.programCurrent(AW, RW, CW, wW)) return AW.program;
        const {
          model: bR
        } = AW, yR = Cz(RW), NW = this.instanceLayout(zR, CW), eW = this.definesBits(zR);
        if (!this.prepareModelDefines(WW, zR, bR, AW.defines, wW, CW)) return null;
        AW.instancing = CW, AW.groupId = wW, AW.modelVersion = bR.version, AW.geometry = yR, AW.instanceLayout = NW, AW.definesBits = eW;
        const BW = function(WW) {
          let RW = "";
          for (const [MW, wW] of WW) RW += !0 === wW ? `${MW};` : `${MW}=${wW};`;
          return RW
        }(Rz(AW.defines));
        return BW === AW.definesKey && AW.packVariant === this.modelPackVariant && AW.program && !this.packFailed(AW.program) || (AW.definesKey = BW, AW.packVariant = this.modelPackVariant, AW.program = this.programWithModel(bR, AW.defines, BW)), AW.program
      }
      programCurrent(WW, RW, MW, wW) {
        return null !== WW.program && !this.packFailed(WW.program) && WW.instancing === MW && WW.groupId === wW && this.definesHold(WW, RW, MW)
      }
      definesHold(WW, RW, MW) {
        return WW.modelVersion === WW.model.version && WW.geometry === Cz(RW) && WW.instanceLayout === this.instanceLayout(RW.owner, MW) && WW.definesBits === this.definesBits(RW.owner) && WW.packVariant === this.modelPackVariant
      }
      modelPackKind(WW) {
        var RW;
        return 0 === this.modelPackVariant ? null : null !== (RW = (0, rR.y)(WW, QW.j.name)) && void 0 !== RW && RW.active ? "placed" : WW.item ? "item" : WW.lifeform ? "lifeform" : null
      }
      instanceLayout(WW, RW) {
        var MW, wW, CW;
        return "thin" === RW ? null !== (CW = this.resources.WzW.get(WW)) && void 0 !== CW ? CW : null : "instanced" === RW && null !== (MW = null === (wW = WW._userInstancedBuffersStorage) || void 0 === wW ? void 0 : wW.interleavedKinds) && void 0 !== MW ? MW : null
      }
      definesBits(WW) {
        const RW = this.view;
        return (WW.visibility < 1 ? 1 : 0) | (WW.hasVertexAlpha ? 2 : 0) | (WW.applyFog ? 4 : 0) | (WW.useVertexColors ? 8 : 0) | (WW.nonUniformScaling ? 16 : 0) | (RW.fogEnabled && 0 !== RW.fogMode ? 32 : 0) | (RW.lightsEnabled ? 64 : 0) | RW.lightCount << 7
      }
      prepareLightDefines(WW, RW, MW) {
        let wW = 0;
        if (this.view.lightsEnabled && !RW) {
          const RW = Math.min(MW, 4);
          for (; wW < this.view.lightCount && (WW[`LIGHT${wW}`] = !0, WW[`LITE_LIGHT${wW}_SLOT`] = wW, wW++, WW._needNormals = !0, wW !== RW););
        }
        for (let CW = wW; CW < 4; CW++) WW[`LIGHT${CW}`] = !1, WW[`LITE_LIGHT${CW}_SLOT`] = void 0
      }
      prepareModelDefines(WW, RW, MW, wW, CW, zR) {
        const {
          features: AW
        } = MW;
        wW._needNormals = !1, wW._needUVs = !1;
        const bR = this.view;
        this.prepareLightDefines(wW, MW.disableLighting, MW.maxSimultaneousLights), wW.MAINUV1 = !1, wW.MAINUV2 = !1;
        const yR = MW.diffuseTexture;
        yR ? (wW._needUVs = !0, wW.DIFFUSE = !0, yR.optimizeUVAllocation && (0, XW.E)(yR.matrix) ? (wW.DIFFUSEDIRECTUV = yR.uvSet + 1, wW[`MAINUV${yR.uvSet+1}`] = !0) : wW.DIFFUSEDIRECTUV = 0, yR.uvSet > 1 && this.warnOnce(`uvset:${MW.name}`, `${MW.name} samples UV set ${yR.uvSet+1}, which is not supported`)) : (wW.DIFFUSE = !1, wW.DIFFUSEDIRECTUV = 0);
        const NW = MW.opacityTexture,
          eW = MW.emissiveTexture;
        wW.OPACITY = Wz(NW, "OPACITY", wW), wW.OPACITYRGB = null !== NW && NW.getAlphaFromRGB, wW.EMISSIVE = Wz(eW, "EMISSIVE", wW), (NW && NW.uvSet > 1 || eW && eW.uvSet > 1) && this.warnOnce(`uvset:${MW.name}`, `${MW.name} samples a UV set past 2, which is not supported`);
        const BW = MW.reflectionTexture,
          tR = null !== BW;
        if (tR) {
          if (!this.resources.boundTexture(BW)) return !1;
          wW._needNormals = !0
        }
        wW.REFLECTION = tR, wW.REFLECTIONMAP_3D = tR, wW.REFLECTIONMAP_SKYBOX = tR, wW.REFLECTIONMAP_OPPOSITEZ = tR && (WW.useRightHandedSystem ? !BW.invertZ : BW.invertZ), wW.ROUGHNESS = tR && MW.roughness > 0, wW.REFLECTIONOVERALPHA = tR && MW.useReflectionOverAlpha, wW.LITE_REFLECTION_LUMINANCE = tR && "cube" === BW.source.kind && BW.source.luminance, (RW.skeleton || RW.morphTargetManager) && this.warnOnce(`skin:${RW.name}`, `${RW.name} has bones or morph targets, which are not supported`), wW.FOG = MW.fogEnabled && RW.applyFog && bR.fogEnabled && 0 !== bR.fogMode, wW.NONUNIFORMSCALING = RW.nonUniformScaling;
        const {
          visibility: TW,
          hasVertexAlpha: gR
        } = RW;
        wW.ALPHATEST = (0, rR.S)(MW, TW, gR), wW.ALPHAFROMDIFFUSE = (0, rR.fb)(MW), wW.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== MW.transparencyMode, wW.ALPHABLEND = null === MW.transparencyMode || (0, rR.O)(MW, TW, gR), wW.PREMULTIPLYALPHA = 7 === MW.alphaMode || 8 === MW.alphaMode, wW.EMISSIVEASILLUMINATION = MW.useEmissiveAsIllumination, wW.LINKEMISSIVEWITHDIFFUSE = MW.linkEmissiveWithDiffuse, wW.TWOSIDEDLIGHTING = !MW.backFaceCulling && MW.twoSidedLighting, wW.INSTANCES = "none" !== zR, wW.THIN_INSTANCES = "thin" === zR, wW.LITE_FRONT_LAYER = CW >= 1;
        for (const {
            feature: fW,
            state: QW,
            active: rR
          }
          of AW) {
          var iR, YW;
          if (rR) null === (iR = (YW = (0, eR.i)(fW)).prepareDefinesBeforeAttributes) || void 0 === iR || iR.call(YW, QW, wW, WW, RW)
        }
        this.modelPackKind(MW) && (wW._needNormals = !0), wW.NORMAL = wW._needNormals && RW.isVerticesDataPresent("normal"), wW.UV1 = wW._needUVs && RW.isVerticesDataPresent("uv"), wW.UV2 = wW._needUVs && RW.isVerticesDataPresent("uv2");
        const JW = RW.useVertexColors && RW.isVerticesDataPresent("color");
        wW.VERTEXCOLOR = JW, wW.VERTEXALPHA = RW.hasVertexAlpha && JW, wW.INSTANCESCOLOR = "none" !== zR && RW.isVerticesDataPresent("instanceColor");
        for (const {
            feature: fW,
            state: QW,
            active: rR
          }
          of AW) {
          var PW, IW;
          if (rR) null === (PW = (IW = (0, eR.i)(fW)).prepareDefines) || void 0 === PW || PW.call(IW, QW, wW, WW, RW, MW)
        }
        const oW = WW.mC();
        for (const {
            feature: fW,
            state: QW,
            active: rR
          }
          of AW) {
          var lW, FW;
          if (rR && !1 === (null === (lW = (FW = (0, eR.i)(fW)).isReadyForSubMesh) || void 0 === lW ? void 0 : lW.call(FW, QW, wW, WW, oW))) return !1
        }
        return !0
      }
    }

    function Az(WW, RW, MW) {
      return WW.codeVersion !== RW.version && function(WW, RW) {
        const MW = [],
          wW = [];
        for (const {
            feature: tR,
            state: TW,
            active: gR
          }
          of RW.features) {
          var CW, zR, AW, bR;
          if (gR) bA(null === (CW = (zR = (0, eR.i)(tR)).getCustomCode) || void 0 === CW ? void 0 : CW.call(zR, TW, "vertex", FW.e.WGSL), MW), bA(null === (AW = (bR = (0, eR.i)(tR)).getCustomCode) || void 0 === AW ? void 0 : AW.call(bR, TW, "fragment", FW.e.WGSL), wW)
        }
        const yR = [];
        for (const {
            feature: tR,
            state: TW
          }
          of RW.features) {
          var NW, eW;
          const WW = null === (NW = (eW = (0, eR.i)(tR)).getUniforms) || void 0 === NW ? void 0 : NW.call(eW, TW, FW.e.WGSL);
          for (const RW of null !== (BW = null === WW || void 0 === WW ? void 0 : WW.ubo) && void 0 !== BW ? BW : []) {
            var BW;
            RW.size && RW.type && yR.push({
              name: RW.name,
              type: RW.type,
              arraySize: RW.arraySize
            })
          }
        }
        WW.vertexCode = MW, WW.fragmentCode = wW, WW.pluginUniforms = yR, WW.codeKey = JSON.stringify([MW, wW, yR]), WW.codeVersion = RW.version
      }(WW, RW), `${MW}#${WW.codeKey}`
    }

    function bA(WW, RW) {
      if (WW)
        for (const MW in WW) WW[MW] && RW.push([MW, WW[MW]])
    }
    const yA = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Nz {
      constructor(WW) {
        this.warnOnce = WW, this.states = new Map
      }
      renderState(WW, RW, MW, wW) {
        var CW;
        let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          AW = null !== (CW = WW.sideOrientation) && void 0 !== CW ? CW : RW.sideOrientation;
        RW._getWorldMatrixDeterminant() < 0 && (AW = 0 === AW ? 1 : 0);
        const bR = "triangle-list" === zR,
          yR = MW ? WW.alphaMode : 0,
          NW = (!MW || (0 === yR || WW.forceDepthWrite)) && !WW.disableDepthWrite,
          eW = bR && WW.backFaceCulling ? WW.cullBackFaces ? "back" : "front" : "none",
          BW = bR && 0 !== AW ? "ccw" : "cw",
          tR = WW.depthFunction,
          TW = bR ? WW.zOffset : 0,
          gR = bR ? WW.zOffsetUnits : 0,
          iR = !WW.disableColorWrite;
        return wW && wW.alphaMode === yR && wW.depthWrite === NW && wW.depthFunction === tR && wW.cullMode === eW && wW.frontFace === BW && wW.zOffset === TW && wW.zOffsetUnits === gR && wW.colourWrite === iR && wW.topology === zR ? wW : this.stateFor(yR, NW, tR, eW, BW, TW, gR, iR, zR)
      }
      stateFor(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        const NW = `${WW}|${RW}|${MW}|${wW}|${CW}|${zR}|${AW}|${bR}|${yR}`;
        let eW = this.states.get(NW);
        if (!eW) {
          var BW;
          const tR = WW ? KC(WW) : null;
          WW && !tR && this.warnOnce(`alpha:${WW}`, `alpha mode ${WW} is not supported`), eW = {
            key: NW,
            alphaMode: WW,
            depthFunction: MW,
            zOffset: zR,
            zOffsetUnits: AW,
            topology: yR,
            blend: tR,
            depthWrite: RW,
            depthCompare: MW && null !== (BW = yA.get(MW)) && void 0 !== BW ? BW : null,
            cullMode: wW,
            frontFace: CW,
            depthBias: -AW,
            depthBiasSlopeScale: -zR,
            colourWrite: bR
          }, this.states.set(NW, eW)
        }
        return eW
      }
    }
    var ez = MW(35464);

    function Bz(WW) {
      if (!WW.frozen) return -1;
      let RW = WW.version;
      for (const {
          feature: MW,
          state: wW,
          active: CW
        }
        of WW.features) {
        if (!CW || !MW.bind) continue;
        const WW = (0, eR.i)(MW).uniformsVersion;
        if (!WW) return -1;
        RW += WW(wW)
      }
      return RW
    }
    class tA {
      constructor(WW, RW, MW) {
        this.slots = WW, this.data = RW, this.textures = MW, this.useUbo = !0, this.currentEffect = null
      }
      updateFloat(WW, RW) {
        this.write4(WW, RW, 0, 0, 0, 1)
      }
      updateFloat2(WW, RW, MW) {
        this.write4(WW, RW, MW, 0, 0, 2)
      }
      updateFloat3(WW, RW, MW, wW) {
        this.write4(WW, RW, MW, wW, 0, 3)
      }
      updateFloat4(WW, RW, MW, wW, CW) {
        this.write4(WW, RW, MW, wW, CW, 4)
      }
      updateVector3(WW, RW) {
        this.write4(WW, RW.x, RW.y, RW.z, 0, 3)
      }
      updateVector4(WW, RW) {
        this.write4(WW, RW.x, RW.y, RW.z, RW.w, 4)
      }
      updateColor3(WW, RW) {
        this.write4(WW, RW.r, RW.g, RW.b, 0, 3)
      }
      updateColor4(WW, RW, MW) {
        this.write4(WW, RW.r, RW.g, RW.b, MW, 4)
      }
      updateFloatsFrom(WW, RW, MW, wW) {
        const CW = this.slots.get(WW);
        if (!CW) return;
        const zR = this.data,
          AW = CW.offset;
        for (let bR = 0; bR < wW; bR++) zR[AW + bR] = RW[MW + bR]
      }
      updateFloat3TimesFloats(WW, RW, MW, wW) {
        const CW = this.slots.get(WW);
        if (!CW) return;
        const zR = this.data,
          AW = CW.offset;
        zR[AW] = RW[MW] * wW[0], zR[AW + 1] = RW[MW + 1] * wW[1], zR[AW + 2] = RW[MW + 2] * wW[2]
      }
      aAW(WW, RW) {
        const MW = this.slots.get(WW);
        MW && this.data.set(RW.m, MW.offset)
      }
      updateMatrixFloats(WW, RW) {
        const MW = this.slots.get(WW);
        MW && this.data.set(RW, MW.offset)
      }
      updateFloatArray(WW, RW) {
        const MW = this.slots.get(WW);
        if (!MW) return;
        if (!MW.arraySize || MW.stride === MW.floats) return void this.data.set(RW, MW.offset);
        const wW = Math.min(RW.length, MW.floats * MW.arraySize);
        for (let CW = 0; CW < wW; CW++) this.data[MW.offset + Math.floor(CW / MW.floats) * MW.stride + CW % MW.floats] = RW[CW]
      }
      updateArray(WW, RW) {
        this.updateFloatArray(WW, RW)
      }
      setTexture(WW, RW) {
        this.textures.set(WW, RW)
      }
      expectTexture(WW) {
        this.textures.set(WW, null)
      }
      write4(WW, RW, MW, wW, CW, zR) {
        const AW = this.slots.get(WW);
        if (!AW) return;
        const bR = this.data,
          yR = AW.offset;
        bR[yR] = RW, zR > 1 && (bR[yR + 1] = MW), zR > 2 && (bR[yR + 2] = wW), zR > 3 && (bR[yR + 3] = CW)
      }
    }

    function Tz(WW, RW) {
      const MW = Vw,
        wW = ez.j,
        CW = WW.lights,
        zR = Math.min(WW.lightCount, 8);
      for (let AW = 0; AW < zR; AW++) {
        const WW = MW.lights + AW * MW.lightStride,
          zR = AW * ez.e;
        RW[WW] = CW[zR + wW.vector], RW[WW + 1] = CW[zR + wW.vector + 1], RW[WW + 2] = CW[zR + wW.vector + 2], RW[WW + 3] = CW[zR + wW.kind] === ez.h.directional ? 1 : 0, RW[WW + 4] = CW[zR + wW.diffuse], RW[WW + 5] = CW[zR + wW.diffuse + 1], RW[WW + 6] = CW[zR + wW.diffuse + 2], RW[WW + 7] = CW[zR + wW.range], RW[WW + 8] = CW[zR + wW.specular], RW[WW + 9] = CW[zR + wW.specular + 1], RW[WW + 10] = CW[zR + wW.specular + 2], RW[WW + 11] = CW[zR + wW.range]
      }
      RW[MW.fogInfos] = WW.fogMode, RW[MW.fogInfos + 1] = WW.fogStart, RW[MW.fogInfos + 2] = WW.fogEnd, RW[MW.fogInfos + 3] = WW.fogDensity, RW[MW.fogColour] = WW.fogColour[0], RW[MW.fogColour + 1] = WW.fogColour[1], RW[MW.fogColour + 2] = WW.fogColour[2], RW[MW.outputHeight] = WW.renderHeight, RW[MW.animTick] = WW.animTick, RW[MW.timeMs] = WW.timeMs
    }
    class gA {
      constructor(WW) {
        this.instancesOf = WW
      }
      refreshModelUniforms(WW, RW, MW, wW) {
        const CW = Bz(MW);
        if (CW >= 0 && CW === RW.heldVersion && RW.textures.get("diffuseSampler") === MW.diffuseTexture && RW.textures.get("reflectionCubeSampler") === MW.reflectionTexture && RW.textures.get("opacitySampler") === MW.opacityTexture && RW.textures.get("emissiveSampler") === MW.emissiveTexture) return !0;
        if (CW < 0)
          for (const zR of this.instancesOf(MW)) zR.heldVersion = -1;
        return this.writeModelUniforms(WW, RW, MW, wW), RW.heldVersion = CW, !1
      }
      writeModelUniforms(WW, RW, MW, wW) {
        const {
          ubo: CW
        } = RW, zR = MW.diffuseTexture, AW = MW.diffuseColor;
        CW.updateFloat4("vDiffuseColor", AW[0], AW[1], AW[2], MW.alpha), zR && (CW.updateFloat2("vDiffuseInfos", zR.uvSet, zR.level), CW.updateMatrixFloats("diffuseMatrix", zR.matrix)), CW.updateFloat("alphaCutOff", MW.alphaCutOff), CW.updateFloatsFrom("vEmissiveColor", MW.emissiveColor, 0, 3), CW.updateFloat3TimesFloats("vAmbientColor", wW.ambientColour, 0, MW.ambientColor);
        const bR = MW.specularColor;
        CW.updateFloat4("vSpecularColor", bR[0], bR[1], bR[2], MW.specularPower), CW.setTexture("diffuseSampler", zR);
        const yR = MW.opacityTexture;
        yR && (CW.updateFloat2("vOpacityInfos", yR.uvSet, yR.level), CW.updateMatrixFloats("opacityMatrix", yR.matrix)), CW.setTexture("opacitySampler", yR);
        const NW = MW.emissiveTexture;
        NW && (CW.updateFloat2("vEmissiveInfos", NW.uvSet, NW.level), CW.updateMatrixFloats("emissiveMatrix", NW.matrix)), CW.setTexture("emissiveSampler", NW);
        const eW = MW.reflectionTexture;
        eW && CW.updateMatrixFloats("reflectionMatrix", eW.matrix), CW.updateFloat2("vReflectionInfos", eW ? eW.level * WW.iblIntensity : 0, MW.roughness), CW.setTexture("reflectionCubeSampler", eW);
        const BW = WW.mC();
        for (const {
            feature: gR,
            state: iR,
            active: YW
          }
          of MW.features) {
          var tR, TW;
          if (YW) null === (tR = (TW = (0, eR.i)(gR)).bind) || void 0 === tR || tR.call(TW, iR, CW, WW, BW)
        }
      }
    }

    function iA(WW) {
      const RW = WW.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(RW) ? "u32" : /i32|^vec\di$/.test(RW) ? "i32" : "f32"
    }

    function Yz(WW, RW) {
      const MW = WW.getSize(),
        wW = iA(RW),
        CW = WW => 4 === MW ? `${WW}x4` : 2 === MW ? `${WW}x2` : null;
      if ("f32" === wW) {
        if (5126 === WW.type) return 1 === MW ? "float32" : MW >= 2 && MW <= 4 ? `float32x${MW}` : null;
        if (!WW.normalized) return null;
        switch (WW.type) {
          case 5121:
            return CW("unorm8");
          case 5120:
            return CW("snorm8");
          case 5123:
            return CW("unorm16");
          case 5122:
            return CW("snorm16")
        }
        return null
      }
      const zR = "u32" === wW ? "uint" : "sint";
      switch (WW.type) {
        case 5125:
        case 5124:
          return 1 === MW ? `${zR}32` : MW <= 4 ? `${zR}32x${MW}` : null;
        case 5121:
        case 5120:
          return CW(`${zR}8`);
        case 5123:
        case 5122:
          return CW(`${zR}16`)
      }
      return null
    }

    function Jz(WW) {
      var RW;
      const MW = /(8|16|32)(?:x(\d))?$/.exec(WW);
      return MW ? Number(MW[1]) / 8 * Number(null !== (RW = MW[2]) && void 0 !== RW ? RW : 1) : 4
    }
    class Pz {
      constructor(WW, RW, MW) {
        this.resources = WW, this.limits = RW, this.warnOnce = MW, this.layouts = new Map
      }
      resolveInputs(WW, RW, MW, wW) {
        const CW = [],
          zR = MW.program.attributes,
          AW = [];
        for (let eW = 0; eW < zR.length; eW++) {
          const MW = zR[eW],
            bR = MW.optional ? null : this.resources.vertexInput(WW, MW.name, wW);
          if (!bR) {
            const WW = iA(MW.type),
              RW = "u32" === WW ? "uint32x4" : "i32" === WW ? "sint32x4" : "float32x4";
            AW.push(null);
            const wW = CW.find((WW => null === WW.data));
            wW ? wW.attributes.push({
              shaderLocation: eW,
              offset: 0,
              format: RW
            }) : CW.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: eW,
                offset: 0,
                format: RW
              }]
            });
            continue
          }
          const yR = bR.getBuffer();
          AW.push(bR);
          const NW = Yz(bR, MW.type);
          if (!NW) return this.warnOnce(`format:${RW}:${MW.name}`, `${RW}'s ${MW.name} (type ${bR.type}, size ${bR.getSize()}) has no WebGPU vertex format`), null;
          const BW = bR.getIsInstanced() ? "instance" : "vertex",
            tR = bR.byteStride,
            TW = Jz(NW),
            gR = CW.find((WW => WW.data === yR && WW.stride === tR && WW.step === BW && bR.byteOffset >= WW.base && bR.byteOffset - WW.base + TW <= tR));
          gR ? gR.attributes.push({
            shaderLocation: eW,
            offset: bR.byteOffset - gR.base,
            format: NW
          }) : CW.push({
            data: yR,
            base: bR.byteOffset,
            stride: tR,
            step: BW,
            attributes: [{
              shaderLocation: eW,
              offset: 0,
              format: NW
            }]
          })
        }
        if (CW.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${RW}`, `${RW} needs ${CW.length} vertex buffers`), null;
        let bR = "";
        for (const eW of CW) {
          bR += `${eW.stride}${"instance"===eW.step?"i":"v"}`;
          for (const WW of eW.attributes) bR += `,${WW.shaderLocation}:${WW.offset}:${WW.format}`;
          bR += ";"
        }
        let yR = this.layouts.get(bR);
        yR || (yR = {
          key: bR,
          buffers: CW.map((WW => ({
            arrayStride: WW.stride,
            stepMode: WW.step,
            attributes: WW.attributes
          }))),
          instanceEnds: CW.map((WW => {
            let RW = -1;
            if ("instance" === WW.step)
              for (const MW of WW.attributes) RW = Math.max(RW, MW.offset + Jz(MW.format));
            return RW
          }))
        }, this.layouts.set(bR, yR));
        const NW = CW.map((WW => WW.base));
        return {
          program: MW,
          sources: AW,
          layout: yR,
          slotData: CW.map((WW => WW.data)),
          ozW: NW,
          buffers: [],
          offsets: NW,
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

    function Iz(WW, RW, MW, wW) {
      const CW = RW.program.program.attributes;
      for (let zR = 0; zR < CW.length; zR++) {
        if ((CW[zR].optional ? null : MW.vertexInput(WW, CW[zR].name, wW)) !== RW.sources[zR]) return !1
      }
      return !0
    }
    const oz = 64;
    class lz {
      constructor(WW, RW, MW, wW) {
        this.device = WW, this.layout = RW, this.frameBuffer = MW, this.label = wW, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(WW) {
        if (WW * oz <= this.data.length) return !1;
        let RW = 2 * this.data.length;
        for (; WW * oz > RW;) RW *= 2;
        const MW = new Float32Array(RW);
        return MW.set(this.data), this.data = MW, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const CW = this.data,
          zR = WW * oz;
        let AW = CW[zR + 16] !== MW;
        for (let bR = 0; bR < 16 && !AW; bR++) AW = CW[zR + bR] !== RW[wW + bR];
        if (AW) {
          for (let WW = 0; WW < 16; WW++) CW[zR + WW] = RW[wW + WW];
          CW[zR + 16] = MW
        }
        return AW
      }
      upload(WW, RW) {
        this.device.queue.writeBuffer(this.buffer, WW * mC, this.data, WW * oz, (RW - WW) * oz)
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

    function Fz(WW) {
      return WW.gpu[XW.f.lite] ??= WW.materials.map(((RW, MW) => ({
        parts: WW,
        range: MW,
        owner: WW.owner
      })))
    }

    function fz(WW) {
      var RW, MW, wW;
      return null !== (RW = null !== (MW = null === (wW = WW.parts.materials[WW.range]) || void 0 === wW ? void 0 : wW.mirror) && void 0 !== MW ? MW : WW.owner.material) && void 0 !== RW ? RW : null
    }
    const Qz = ["opaque", "alphaTest", "transparent", "text"];
    class rA {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, NR.d)("Lite: ")
      }
      attach(WW, RW) {
        this.model = WW, this.mirror = RW
      }
      get worlds() {
        return this.model.nodes.zM
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(WW) {
        return this.groups.get(WW)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(WW) {
        for (const [RW, MW] of this.groups)
          for (const wW of Qz)
            for (const CW of MW[wW].units) WW(CW.owner, "text" === wW ? "transparent" : wW, RW)
      }
      select(WW, RW) {
        this.frame++, this.selectedCount = 0;
        for (const bR of this.groups.values())
          for (const WW of Qz) bR[WW].units.length = 0, bR[WW].rows.length = 0;
        const {
          model: MW,
          mirror: wW
        } = this;
        if (!MW || !wW || !WW) return;
        this.rows.length < MW.nodes.aR && (this.rows = new Int32Array(MW.nodes.aR));
        const CW = this.rows,
          zR = MW.meshes;
        for (let bR = 0; bR < zR.looseCount; bR++) {
          const WW = zR.loose[bR],
            MW = wW.nodes[WW];
          MW && !MW.isBlocked && MW.isEnabled() && !MW.NA.hasAZeroComponent && zR.selects(WW, RW.frustum) && (this.activate(MW, WW), this.selectedCount++)
        }
        const AW = zR.selectTextPlanes(RW.frustum, CW);
        for (let bR = 0; bR < AW; bR++) {
          const RW = CW[bR],
            zR = wW.nodes[RW],
            AW = MW.meshes.parts[RW];
          if (!zR.isVisible || !(zR.visibility > 0) || 0 === (zR.layerMask & WW.layerMask) || !AW) continue;
          const yR = this.groupOf(MW.meshes.layer[RW]).text;
          for (const WW of Fz(AW)) yR.units.push(WW), yR.rows.push(RW);
          this.selectedCount++
        }
      }
      instanceBatch(WW) {
        const RW = this.batchOf(WW);
        return RW.dispatched || (RW.dispatched = RW.renderSelf = !0, RW.row = this.rowOf(WW)), RW
      }
      rowOf(WW) {
        return WW.row
      }
      activate(WW, RW) {
        if (!WW.cMW) {
          const MW = WW;
          if (MW.bBW) {
            const WW = this.batchOf(MW);
            WW.dispatched = !0, WW.renderSelf = !0, WW.row = RW
          }
          return void this.dispatch(MW, RW, RW)
        }
        const MW = WW,
          wW = MW.yBW;
        if (wW._getWorldMatrixDeterminant() >= 0 !== MW._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${wW.name}`, `A mirrored InstancedMesh of ${wW.name} is not drawn yet`);
        const CW = this.batchOf(wW);
        CW.instances.push(MW), CW.rows.push(RW), CW.dispatched || (CW.dispatched = !0, this.dispatch(wW, RW, this.rowOf(wW)))
      }
      batchOf(WW) {
        let RW = this.batches.get(WW);
        return RW || (RW = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(WW, RW)), RW.frame !== this.frame && (RW.frame = this.frame, RW.dispatched = !1, RW.renderSelf = !1, RW.instances.length = 0, RW.rows.length = 0), RW
      }
      dispatch(WW, RW, MW) {
        const {
          layer: wW,
          parts: CW
        } = this.model.meshes;
        if (!CW[RW]) return;
        const zR = this.groupOf(wW[RW]),
          AW = WW;
        for (const bR of Fz(CW[RW])) {
          const WW = fz(bR);
          if (!WW) continue;
          const RW = WW.needAlphaBlendingForMesh(AW) ? zR.transparent : WW.needAlphaTestingForMesh(AW) ? zR.alphaTest : zR.opaque;
          RW.units.push(bR), RW.rows.push(MW)
        }
      }
      groupOf(WW) {
        let RW = this.groups.get(WW);
        return RW || (RW = {
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
        }, this.groups.set(WW, RW)), RW
      }
    }
    class cA {
      constructor() {
        this.mM = new Map, this.enabled = [], this.groups = new Map, this.kept = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(WW) {
        if (this.mM.has(WW)) return;
        const RW = {
          mesh: WW,
          observer: WW.onEffectiveEnabledStateChangedObservable.add((WW => {
            this.kMW(RW, WW)
          })),
          index: -1,
          steady: null
        };
        this.mM.set(WW, RW), this.kMW(RW, WW.isEnabled())
      }
      remove(WW) {
        const RW = this.mM.get(WW);
        RW && (RW.observer.remove(!0), this.kMW(RW, !1), this.mM.delete(WW))
      }
      base(WW) {
        return this.mM.get(WW)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          mM: this.mM.size
        }
      }
      forEachSelected(WW) {
        for (const [RW, MW] of this.groups) {
          for (const wW of MW.opaque) WW(wW.owner, "opaque", RW);
          for (const wW of MW.transparent) WW(wW.owner, "transparent", RW)
        }
        for (const RW of this.kept) WW(RW.mesh, "opaque", 0)
      }
      group(WW) {
        return this.groups.get(WW)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(WW, RW) {
        this.drawn = 0, this.selected = 0, this.kept.length = 0;
        for (const wW of this.groups.values()) wW.opaque.length = 0, wW.transparent.length = 0;
        if (!WW) return;
        const MW = this.enabled;
        for (let wW = 0; wW < MW.length; wW++) {
          const CW = MW[wW];
          if (CW.steady && RW(CW, WW)) {
            this.selected++, this.kept.push(CW);
            continue
          }
          const zR = CW.mesh;
          if (zR.isBlocked || zR.NA.hasAZeroComponent) continue;
          if (!zR.isVisible || zR.visibility <= 0 || 0 === (zR.layerMask & WW.layerMask)) continue;
          if (zR.bBW) {
            this.warned.has(zR.name) || (this.warned.add(zR.name), console.warn(`Lite: thin instance base ${zR.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: AW
          } = zR;
          if (!AW) continue;
          zR.computeWorldMatrix(), this.selected++;
          const bR = this.listsFor(zR.renderingGroupId);
          for (const WW of Fz(AW)) {
            const RW = fz(WW);
            RW && (RW.needAlphaBlendingForMesh(zR) ? bR.transparent.push(WW) : bR.opaque.push(WW))
          }
        }
      }
      kMW(WW, RW) {
        if (RW === WW.index >= 0) return;
        WW.steady = null;
        const MW = this.enabled;
        if (RW) WW.index = MW.length, MW.push(WW);
        else {
          const RW = MW.pop();
          RW !== WW && (MW[WW.index] = RW, RW.index = WW.index), WW.index = -1
        }
      }
      listsFor(WW) {
        let RW = this.groups.get(WW);
        return RW || (RW = {
          opaque: [],
          transparent: []
        }, this.groups.set(WW, RW)), RW
      }
    }
    var Xz = MW(37331);
    class jA {
      constructor() {
        this.bundle = null, this.stale = !0, this.mM = new Set
      }
    }
    class kA {
      constructor(WW, RW, MW) {
        this.device = WW, this.slots = RW, this.host = MW, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new jA, this.eRW = new jA, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new GC, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(WW) {
          var RW, MW;
          let wW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (RW = null === (MW = globalThis.navigator) || void 0 === MW ? void 0 : MW.userAgent) && void 0 !== RW ? RW : "";
          const CW = WW.adapterInfo;
          return "intel" === (null === CW || void 0 === CW ? void 0 : CW.vendor) && "gen-12lp" === CW.architecture && wW.includes("Windows")
        }(WW), (0, Xz.I)(this.direct)
      }
      Vk() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Xz.I)(this.directThisFrame)
      }
      add(WW, RW, MW, wW) {
        let CW = this.records.get(WW);
        return CW || (CW = this.createRecord(WW), this.records.set(WW, CW)), CW.recorded && sz(CW, RW) || (this.bundleOf(CW).stale = !0), this.place(CW, RW, MW, wW), CW
      }
      bundleOf(WW) {
        return WW.eRW ? this.eRW : this.main
      }
      addAgain(WW, RW, MW, wW) {
        WW.recorded || (this.bundleOf(WW).stale = !0), this.place(WW, RW, MW, wW)
      }
      place(WW, RW, MW, wW) {
        WW.seen = this.frame, WW.eRW && null === WW.draw && (this.eRW.stale = !0), WW.draw = RW, this.drawn++, MW && this.slots.write(WW.slot, MW, wW) && (this.slotsFrom = Math.min(this.slotsFrom, WW.slot), this.slotsTo = Math.max(this.slotsTo, WW.slot));
        const CW = this.args,
          zR = 5 * WW.slot;
        CW[zR] === RW.count && CW[zR + 1] === RW.instances && CW[zR + 2] === RW.first || (CW[zR] = RW.count, CW[zR + 1] = RW.instances, CW[zR + 2] = RW.first, this.argsDirty = !0, this.eRW.stale ||= WW.eRW)
      }
      Lk() {
        for (const WW of this.records.values()) WW.seen !== this.frame && (WW.draw && (WW.draw = null, this.args[5 * WW.slot + 1] = 0, this.argsDirty = !0, this.eRW.stale ||= WW.eRW), this.frame - WW.seen > 120 && (this.records.delete(WW.unit), this.freeSlots.push(WW.slot), WW.recorded && (this.bundleOf(WW).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(WW) {
        for (const RW of this.records.values()) RW.draw && RW.seen === this.frame && !RW.eRW && WW(RW.draw, this.slots.data, RW.slot * mC / 4)
      }
      resourceDestroyed(WW) {
        this.main.stale ||= this.main.mM.has(WW), this.eRW.stale ||= this.eRW.mM.has(WW)
      }
      execute(WW, RW, MW) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(WW, RW, MW, "direct"), this.drawn;
        const wW = this.host.sceneGroup(RW);
        if (!wW) return this.main.bundle = null, this.eRW.bundle = null, this.recordedSceneGroup = null, this.encode(WW, RW, MW, "direct"), this.drawn;
        this.recordedTarget === MW && this.recordedSceneGroup === wW || (this.recordedTarget = MW, this.recordedSceneGroup = wW, this.main.stale = !0, this.eRW.stale = !0);
        const CW = this.main,
          zR = this.eRW;
        let AW = !1;
        !CW.stale && CW.bundle || (CW.bundle = this.record(RW, MW, wW, "indirect"), AW = !0);
        const bR = (0, Xz.l)();
        return (zR.stale || this.rangedEpoch !== bR) && (this.rangedEpoch = bR, zR.bundle = this.drawsRanged() ? this.record(RW, MW, wW, "eRW") : this.noRangedBundle(), AW = !0), AW && (this.bundles = zR.bundle ? [CW.bundle, zR.bundle] : [CW.bundle]), WW.executeBundles(this.bundles), WW.setBindGroup(0, wW), this.drawn
      }
      record(WW, RW, MW, wW) {
        const CW = this.device.createRenderBundleEncoder({
          label: "eRW" === wW ? "thin-bases-ranged" : "thin-bases",
          colorFormats: WW._colorFormat ? [WW._colorFormat] : [],
          depthStencilFormat: WW._depthStencilFormat,
          sampleCount: WW._sampleCount
        });
        return CW.setBindGroup(0, MW), this.encode(CW, WW, RW, wW), CW.finish()
      }
      noRangedBundle() {
        for (const WW of this.records.values()) WW.eRW && (WW.recorded = !1);
        return this.eRW.mM.clear(), this.eRW.stale = !1, null
      }
      drawsRanged() {
        for (const WW of this.records.values())
          if (WW.eRW && WW.draw) return !0;
        return !1
      }
      encode(WW, RW, MW, wW) {
        const CW = [];
        for (const yR of this.records.values()) "direct" !== wW && yR.eRW !== ("eRW" === wW) || (yR.recorded = !1, yR.draw && CW.push(yR));
        CW.sort(dz);
        const zR = "direct" === wW ? null : "eRW" === wW ? this.eRW : this.main;
        null === zR || void 0 === zR || zR.mM.clear(), this.binder.reset();
        let AW = !1;
        for (const yR of CW) {
          var bR;
          const CW = yR.draw,
            NW = this.host.pipelineFor(CW, RW, MW);
          if (!NW) {
            this.host.pipelineCompiling(CW, MW) ? AW = !0 : zR && this.keep(yR, CW, zR.mM);
            continue
          }
          let eW;
          if (yR.eRW && "indirect" !== wW) {
            const WW = yR.unit.owner;
            eW = "direct" === wW && (0, Xz.t)(WW) || (0, Xz.p)(WW) || void 0
          }
          if (zR && this.keep(yR, CW, zR.mM), 0 === (null === (bR = eW) || void 0 === bR ? void 0 : bR.count)) continue;
          this.binder.bind(WW, CW, NW, this.slots.bindGroup, yR.slot * mC);
          const BW = 5 * yR.slot;
          if ("indirect" === wW) {
            CW.indexBuffer ? WW.drawIndexedIndirect(this.argsBuffer, 4 * BW) : WW.drawIndirect(this.argsBuffer, 4 * BW);
            continue
          }
          const tR = this.args;
          eW ? aA(WW, null !== CW.indexBuffer, tR, BW, eW) : CW.indexBuffer ? WW.drawIndexed(tR[BW], tR[BW + 1], tR[BW + 2], 0, 0) : WW.draw(tR[BW], tR[BW + 1], tR[BW + 2], 0)
        }
        zR && (zR.stale = AW)
      }
      keep(WW, RW, MW) {
        WW.recorded = !0, WW.pipelineKey = RW.pipelineKey, WW.materialGroup = RW.material.bindGroup, WW.vertexBuffers.length = 0, WW.vertexBuffers.push(...RW.vertexBuffers), WW.vertexOffsets = RW.vertexOffsets, WW.indexBuffer = RW.indexBuffer, WW.indexFormat = RW.indexFormat;
        for (const wW of RW.vertexBuffers) MW.add(wW);
        RW.indexBuffer && MW.add(RW.indexBuffer), MW.add(RW.material.buffer);
        for (const wW of RW.material.bound) wW && MW.add(wW)
      }
      createRecord(WW) {
        let RW = this.freeSlots.pop();
        return void 0 === RW && (RW = this.slotCount++, this.grow()), {
          unit: WW,
          slot: RW,
          eRW: void 0 !== (0, Xz.p)(WW.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.eRW.stale = !0), 5 * this.slotCount > this.args.length) {
          const WW = new Uint32Array(2 * this.args.length);
          WW.set(this.args), this.args = WW, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function aA(WW, RW, MW, wW, CW) {
      const zR = MW[wW + 1],
        AW = CW.data;
      for (let bR = 0; bR < CW.count; bR++) {
        const CW = Math.min(AW[2 * bR], zR),
          yR = Math.min(AW[2 * bR + 1], zR - CW);
        0 !== yR && (RW ? WW.drawIndexed(MW[wW], yR, MW[wW + 2], 0, CW) : WW.draw(MW[wW], yR, MW[wW + 2], CW))
      }
    }

    function sz(WW, RW) {
      if (WW.pipelineKey !== RW.pipelineKey || WW.materialGroup !== RW.material.bindGroup || WW.indexBuffer !== RW.indexBuffer || WW.indexFormat !== RW.indexFormat || WW.vertexOffsets !== RW.vertexOffsets || WW.vertexBuffers.length !== RW.vertexBuffers.length) return !1;
      for (let MW = 0; MW < WW.vertexBuffers.length; MW++)
        if (WW.vertexBuffers[MW] !== RW.vertexBuffers[MW]) return !1;
      return !0
    }

    function dz(WW, RW) {
      return HC(WW.draw, RW.draw)
    }
    const pz = new WeakMap,
      hz = {
        depth: !1,
        sunShadow: !1
      };

    function Uz(WW, RW) {
      let MW = pz.get(WW);
      MW || (MW = new Map, pz.set(WW, MW));
      const wW = `${RW.depth?"-depth":""}${RW.sunShadow?"-shadow":""}${RW.shadowMask?"-mask":""}`;
      let CW = MW.get(wW);
      if (!CW) {
        const zR = [{
          binding: cM.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: cM.f
          }
        }, {
          binding: cM.u,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        RW.depth && zR.push({
          binding: cM.j,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), RW.sunShadow && zR.push(... function() {
          const WW = GPUShaderStage.FRAGMENT,
            RW = cM.n;
          return [{
            binding: RW.uniform,
            visibility: WW,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: RW.dR,
            visibility: WW,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: RW.special,
            visibility: WW,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: RW.volume,
            visibility: WW,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: RW.sampler,
            visibility: WW,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: RW.entities,
            visibility: WW,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: RW.entityGrids,
            visibility: WW,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), RW.shadowMask && zR.push({
          binding: cM.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), CW = WW.createBindGroupLayout({
          label: `${RW.depth?"terrain-":""}shader-pack-inputs${wW}`,
          entries: zR
        }), MW.set(wW, CW)
      }
      return CW
    }

    function Ez(WW) {
      return Uz(WW, hz)
    }

    function Vz(WW, RW) {
      if (!RW) return !1;
      const MW = (0, XR.f)(WW);
      return !!MW && hM(MW, RW)
    }

    function mA(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!bC(RW)) return [];
      return [Uz(WW, {
        depth: Mw(RW.packVariant),
        sunShadow: Vz(RW.packVariant, MW),
        shadowMask: wW
      })]
    }
    class xA {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = WW, this.sunShadow = MW, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(cM.f), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = WW.createBuffer({
          label: "shader-pack-inputs",
          size: cM.f,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const wW = (0, cM.x)(RW);
        this.textures = WW.createBuffer({
          label: "shader-pack-textures",
          size: wW.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), WW.queue.writeBuffer(this.textures, 0, wW), this.bindGroup = WW.createBindGroup({
          label: "shader-pack-inputs",
          layout: Ez(WW),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: cM.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: cM.u,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(WW, RW, MW) {
        (0, cM.D)(this.data, {
          seconds: WW.seconds(),
          lit: MW,
          renderOffset: WW.renderOffset(),
          zbW: WW.zbW(),
          eyePosition: RW,
          shadowDirection: WW.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const wW = RW ? this.sunShadow : null;
        if ((RW || MW) && !wW) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!WW && !wW) return this.bindGroup;
        (WW && WW !== this.depthView || MW && MW !== this.maskView) && (this.depthView = null !== WW && void 0 !== WW ? WW : this.depthView, this.maskView = null !== MW && void 0 !== MW ? MW : this.maskView, this.groups.clear());
        const CW = (WW ? 1 : 0) | (wW ? 2 : 0) | (MW ? 4 : 0);
        let zR = this.groups.get(CW);
        if (!zR) {
          const RW = this.entries();
          WW && RW.push({
            binding: cM.j,
            resource: WW
          }), wW && RW.push(...wW.entries()), MW && RW.push({
            binding: cM.r,
            resource: MW
          }), zR = this.device.createBindGroup({
            label: `${WW||MW?"terrain-":""}shader-pack-inputs${WW?"-depth":""}${wW?"-shadow":""}${MW?"-mask":""}`,
            layout: Uz(this.device, {
              depth: !!WW,
              sunShadow: !!wW,
              shadowMask: !!MW
            }),
            entries: RW
          }), this.groups.set(CW, zR)
        }
        return zR
      }
      bind(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        WW.setBindGroup(cM.d, this.bindGroupFor(RW, MW, wW))
      }
    }

    function vA(WW, RW, MW) {
      if (WW.gpuVersion === RW.gpuBuffersVersion) return !0;
      let wW;
      do {
        if (wW = RW.gpuBuffersVersion, !Kz(WW, RW, MW)) return !1
      } while (RW.gpuBuffersVersion !== wW);
      return WW.gpuVersion = wW, WW.fitInstances = 0, !0
    }

    function Kz(WW, RW, MW) {
      let wW = null;
      for (let zR = 0; zR < WW.slotData.length; zR++) {
        var CW;
        const AW = WW.slotData[zR],
          bR = AW ? RW.gpuBuffer(AW) : MW;
        if (!bR) return !1;
        AW && WW.layout.instanceEnds[zR] < 0 && RW.cover(AW, Number.POSITIVE_INFINITY), WW.buffers[zR] = bR;
        const yR = WW.ozW[zR] + (AW ? RW.gpuOffset(AW) : 0);
        yR !== (null !== (CW = wW) && void 0 !== CW ? CW : WW.offsets)[zR] && (wW ??= WW.offsets.slice(), wW[zR] = yR), WW.ends[zR] = AW ? RW.gpuEnd(AW) : bR.size
      }
      return wW && (WW.offsets = wW), !0
    }

    function uz(WW, RW, MW, wW) {
      if (RW <= WW.fitInstances) return null;
      const {
        layout: CW,
        ends: zR,
        offsets: AW,
        slotData: bR,
        ozW: yR
      } = WW;
      let NW = !1;
      for (let eW = 0; eW < CW.buffers.length; eW++) {
        const WW = CW.instanceEnds[eW];
        if (WW < 0) continue;
        const wW = (RW - 1) * CW.buffers[eW].arrayStride + WW;
        if (zR[eW] - AW[eW] < wW) return {
          index: eW,
          needed: wW
        };
        const BW = bR[eW];
        BW && MW.cover(BW, yR[eW] + wW) && (NW = !0)
      }
      return NW && vA(WW, MW, wW), WW.fitInstances = RW, null
    }
    var Oz = MW(35922);
    const nz = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Gz = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Lz = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Hz = `((vertexInputs.aPackedLightLevels >> 16u) | ${yM.c.placed}u)`,
      Dz = "u32(vertexInputs.aShaderPackItem.x)",
      qA = `${yM.c.lifeform}u`;

    function Zz(WW) {
      return "item" === WW.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Sz = "bloxdSpEnchant",
      WA = "floor(finalWorld[3].xyz)";

    function RA(WW, RW, MW) {
      return "placed" === RW.kind && WW.reads[MW].includes("bloxdFragmentBlockPosition")
    }

    function MA(WW, RW) {
      let [MW, wW] = WW;
      return MW === RW.point && wW === RW.code
    }

    function wA(WW, RW) {
      var MW, wW, CW;
      const zR = null === (MW = WW.find((WW => WW.texture))) || void 0 === MW ? void 0 : MW.texture,
        AW = null === (wW = WW.find((WW => WW.enchantTier))) || void 0 === wW ? void 0 : wW.enchantTier,
        bR = null === (CW = WW.find((WW => WW.overlay))) || void 0 === CW ? void 0 : CW.overlay,
        yR = bR ? RW.filter((WW => MA(WW, bR))).length : 0;
      return bR && 1 === yR ? {
        texture: zR,
        overlay: bR,
        enchantTier: AW
      } : {
        texture: zR,
        enchantTier: AW
      }
    }

    function CA(WW) {
      if ("item" === WW.kind) {
        return {
          vertexFlags: `(${Dz} & 0xffffu)`,
          varying: "vPackItem",
          value: Dz,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return WW.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Hz,
        varying: "vPackFlags",
        value: Hz,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function zb(WW) {
      return "lifeform" === WW.kind ? qA : "0u"
    }

    function AA(WW) {
      return !!WW.BLOXD_PLUGIN_ENCHANTMENT
    }

    function bb(WW, RW) {
      const {
        enchantTier: MW
      } = RW;
      return MW && AA(RW.defines) && "lifeform" === RW.kind && eA(WW, "enchantTier") ? MW : null
    }

    function yb(WW, RW) {
      return AA(RW.defines) && eA(WW, "enchantSpeed")
    }

    function NA(WW) {
      const {
        overlay: RW,
        defines: MW
      } = WW;
      if (!RW || !MW.DIFFUSE) return null;
      const wW = MW.VERTEXCOLOR || MW.INSTANCESCOLOR && MW.INSTANCES;
      return `vec4f(${RW.colour}.rgb * uniforms.vDiffuseInfos.y${wW?" * fragmentInputs.vColor.rgb":""}, ${RW.colour}.a)`
    }

    function eA(WW, RW) {
      return WW.reads.fragment.includes(RW)
    }

    function BA(WW) {
      return !!WW.BLOXD_LIGHTING && !WW.BLOXD_UNLIT
    }

    function tb(WW, RW, MW, wW) {
      const CW = WW.filter((WW => {
        let [MW, wW] = WW;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === MW && wW === RW
      }));
      if (1 !== CW.length) throw new Error(`A model program for shader packs has ${0===CW.length?"no":"more than one"} ${wW} code before fog (lite/modelShaderPack.ts)`);
      return WW.map((WW => WW === CW[0] ? [WW[0], MW] : WW))
    }

    function TA(WW, RW, MW, wW) {
      const {
        hooks: CW
      } = WW, {
        kind: zR,
        defines: AW
      } = RW, bR = [...MW];
      RW.atlas && CW.surface && bR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", vw("atlasIdxIn")]), "item" === zR && bR.push(["CUSTOM_VERTEX_DEFINITIONS", (0, FW.i)(FW.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]);
      const yR = CA(RW);
      yR && (CW.surface || CW.light) && bR.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${yR.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${yR.varying} = ${yR.value};`]);
      let NW = wW;
      if (RA(WW, RW, "fragment") && (bR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${WA});`]), NW = [...NW, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), eA(WW, "localPosition") && bR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${Zz(RW)};`]), AA(AW) && CW.surface) {
        yb(WW, RW) && bR.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const MW = bb(WW, RW);
        MW && bR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${MW});`]);
        const wW = (0, FW.wb)(FW.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        NW = [...tb(NW, (0, Oz.h)(FW.e.WGSL), wW, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Oz.d)(Sz)]]
      }
      const {
        overlay: eW
      } = RW;
      eW && NA(RW) && CW.surface && (NW = NW.filter((WW => !MA(WW, eW))));
      const BW = CW.light ? function(WW) {
        return "placed" === WW.kind ? {
          name: "terrain",
          engine: (0, fR.Q)(FW.e.WGSL),
          pack: (0, fR.fb)(FW.e.WGSL)
        } : WW.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, fR.H)(FW.e.WGSL),
          pack: (0, fR.ab)(FW.e.WGSL)
        } : null
      }(RW) : null;
      if (BW && (NW = tb(NW, BW.engine, BW.pack, `${BW.name} light`), "placed" !== zR && BA(AW))) {
        const WW = AW.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, FW.Kb)(FW.e.WGSL, "uEntityLightLevels") : (0, FW.Sb)(FW.e.WGSL, "aLightLevels");
        bR.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${fR.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, fR.eb)(FW.e.WGSL, WW)])
      }
      return {
        vertexCode: bR,
        fragmentCode: NW
      }
    }

    function gb(WW, RW, MW, wW) {
      return dM(WW, RW, MW, wW, "model")
    }
    const ib = "\t@builtin(position) position: vec4f,\n";

    function YA(WW, RW) {
      const MW = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(WW)[0];
      return `${MW}${RW}${WW.slice(MW.length)}`
    }

    function JA(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: CW
      } = RW, zR = hM(RW, wW), {
        kind: AW,
        defines: bR
      } = MW, yR = function(WW, RW) {
        var MW, wW, CW;
        const {
          defines: zR
        } = RW, AW = CA(RW), bR = !!zR.FOG, yR = AA(zR), NW = null !== (MW = null === AW || void 0 === AW ? void 0 : AW.enchantTier) && void 0 !== MW ? MW : bb(WW, RW) ? "fragmentInputs.vPackEnchantTier" : "0u", eW = "lifeform" === RW.kind && !zR.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (wW = null === AW || void 0 === AW ? void 0 : AW.vertexFlags) && void 0 !== wW ? wW : zb(RW),
          vertexLocalPosition: Zz(RW),
          flags: null !== (CW = null === AW || void 0 === AW ? void 0 : AW.flags) && void 0 !== CW ? CW : zb(RW),
          normal: "normalW",
          alpha: eW ? "alpha * baseColor.a" : "alpha",
          alphaOut: eW ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: bR ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: bR ? "1.0 - fog" : "0.0",
          enchantTier: NW,
          enchantColour: yR ? `${Sz}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: yb(WW, RW) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: eA(WW, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: NA(RW)
        }
      }(RW, MW), NW = WW.textures.filter((WW => /^textureAtlas\d+$/.test(WW.name))).length, eW = MW.atlas && NW > 0 ? {
        count: NW,
        layers: MW.atlas.layers,
        width: MW.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: WW.material.slots.has("uAnimDataPerTex") ? (RW, MW) => Qw(RW, MW, function(WW) {
          const RW = WW.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            WR: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: WW => `uniforms.uAnimDataPerTex[${WW}]${RW}`
          }
        }(WW)) : null
      } : null, BW = "placed" === AW ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", tR = null !== eW && void 0 !== eW ? eW : function(WW) {
        const {
          atlas: RW,
          defines: MW,
          texture: wW
        } = WW;
        return RW || !MW.DIFFUSE ? null : wW ? {
          texture: "diffuseSampler",
          ...wW
        } : {
          texture: "diffuseSampler",
          cells: null,
          layers: [],
          uv: "fragmentInputs." + (1 === MW.DIFFUSEDIRECTUV ? "vMainUV1" : 2 === MW.DIFFUSEDIRECTUV ? "vMainUV2" : "vDiffuseUV")
        }
      }(MW), TW = (WW, MW) => `${(0,cM.B)()}${EM(RW,MW)}${uM(WW)}${kw}${BW}${RW.code}`;
      let {
        vertex: gR,
        fragment: iR
      } = WW;
      const YW = nM(CW, yR);
      if (YW) {
        const WW = RA(RW, MW, "vertex") ? `\tbloxdSpCell = ${WA};\n` : "";
        gR = gb(gR, nz, `${WW}${YW.slice(1)}${nz}`, "vertex")
      }
      const JW = `${VM(RW,zR,function(WW,RW){return RW.TWOSIDEDLIGHTING?WW:`select(-(${WW}), ${WW}, fragmentInputs.frontFacing)`}(yR.normal,bR),yR.flags)}${GM(CW,RW.strict,RW.program,tR,yR)}`;
      JW && (iR = gb(iR, Gz, `${JW.slice(1)}${Gz}`, "surface")), zR && RW.sunShadow && !bR.TWOSIDEDLIGHTING && (iR = gb(iR, ib, `${ib}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const PW = DM(CW);
      if (PW) {
        const WW = HM(CW, BA(bR), !0, yR);
        iR = gb(iR, Lz, `${WW}${PW.slice(1)}${Lz}`, "light")
      }
      return {
        ...WW,
        vertex: YA(gR, TW(eW, !1)),
        fragment: YA(iR, TW(tR, zR))
      }
    }
    const PA = {
      name: "earthSky",
      uniqueId: -1
    };
    class IA {
      constructor(WW) {
        this.resources = WW, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const WW of this.instances.values()) WW.released = !0, this.resources.destroyBuffer(WW.buffer);
        this.instances.clear()
      }
    }

    function oA(WW) {
      return WW.failed && null !== WW.packGroup
    }
    class lA {
      constructor(WW, RW, MW) {
        this.device = WW, this.resources = RW, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.JzW = new cA, this.modelMeshes = new rA, this.thinBundle = void 0, this.binder = new GC, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new gA((WW => this.modelSlot(WW).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, NR.d)("Lite: "), this.renderStates = new Nz(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (WW, RW) => this.keepSteady(WW, RW), this.lists = new LC(this.modelMeshes, this.JzW, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new zA(RW, this.warnOnce, ((WW, RW, MW) => this.programWithModel(WW, RW, MW)), oA), this.vertexLayouts = new Pz(RW, WW.limits, this.warnOnce), this.sceneLayout = RR(WW), this.frameLayout = WW.createBindGroupLayout({
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
        }), this.frameBuffer = WW.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new lz(WW, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = WW.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new kA(WW, new lz(WW, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (WW, RW, MW) => this.pipelineFor(WW, RW, MW),
          pipelineCompiling: (WW, RW) => !WW.program.failed && !1 !== this.pipelines.get(`${WW.pipelineKey}|${RW}`),
          sceneGroup: WW => {
            const RW = MW(WW);
            return RW || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), RW
          }
        }), RW.onDestroy = WW => {
          this.thinBundle.resourceDestroyed(WW)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const CW = {
          order: WW,
          isTransparent: RW,
          _direct: !RW,
          bind: (WW, RW) => this.createBinding(CW, RW, MW, wW)
        };
        return CW
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(WW, RW, MW) {
        var wW;
        let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = RW, this.drawDefines.view = RW, this.thinBundle.Vk(), this.writeFrameUniforms();
        const zR = null !== (wW = null === CW || void 0 === CW ? void 0 : CW.defineFor("model")) && void 0 !== wW ? wW : 0;
        this.drawDefines.modelPackVariant = zR, CW && 0 !== zR && (this.packInputs ??= new xA(this.device, CW.textureLayers(), this.sunShadow), this.packInputs.write(CW, RW.eye, CW.vz())), this.lists.clear(), this.slotCount = 0;
        const AW = WW.activeCamera;
        this.JzW.select(AW, this.keepSteadyBase), this.modelMeshes.select(AW, RW), MW && this.pushEarthSky(MW), this.lists.collect(WW), this.thinBundle.Lk(), this.uploadMeshSlots()
      }
      pushDraws(WW, RW, MW, wW, CW, zR) {
        let AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const bR = zR.length;
        for (let yR = 0; yR < MW; yR++) {
          const MW = RW[yR];
          let bR = this.retainedDraw(WW, MW, wW, CW);
          if (void 0 === bR && (bR = this.drawFor(WW, MW, wW, CW), this.retain(MW, bR)), bR) {
            const WW = MW.owner,
              RW = AW ? AW[yR] : -1;
            bR.slotOffset = RW < 0 ? this.writeMeshSlot(WW.getWorldMatrix().m, WW.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[RW], 16 * RW), zR.push(bR)
          }
        }
        return zR.length - bR
      }
      bundleDraws(WW, RW, MW) {
        let wW = 0;
        for (const CW of RW) {
          let RW = this.retainedDraw(WW, CW, MW, !1);
          const zR = void 0 !== RW;
          if (void 0 === RW && (RW = this.drawFor(WW, CW, MW, !1), this.retain(CW, RW)), RW) {
            const WW = CW.owner,
              MW = this.thinBundle.add(CW, RW, WW.getWorldMatrix().m, WW.visibility);
            zR && this.steadyFrom(CW, RW, MW), wW++
          }
        }
        return wW
      }
      steadyFrom(WW, RW, MW) {
        const wW = WW.owner,
          CW = this.JzW.base(wW),
          zR = wW.material,
          {
            drawState: AW,
            instance: bR
          } = RW.inputs.retained;
        if (!CW || !zR || 1 !== WW.parts.materials.length || fz(WW) !== zR) return;
        const yR = CW.steady ??= {
          unit: WW,
          material: zR,
          visibility: 1,
          draw: RW,
          record: MW,
          drawState: AW,
          instance: bR,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        yR.unit = WW, yR.material = zR, yR.visibility = wW.visibility, yR.draw = RW, yR.record = MW, yR.drawState = AW, yR.instance = bR, yR.bindGroup = bR.bindGroup, yR.gpuVersion = this.resources.gpuBuffersVersion, yR.fitInstances = RW.inputs.fitInstances, yR.worldFlag = wW.getWorldMatrix().updateFlag, yR.handedFrame = this.frame
      }
      keepSteady(WW, RW) {
        const MW = WW.steady;
        if (MW.handedFrame !== this.frame - 1 || (this.frame + MW.phase) % 8 === 0) return !1;
        const wW = WW.mesh,
          {
            unit: CW,
            draw: zR,
            instance: AW,
            drawState: bR
          } = MW,
          yR = wW.forcedInstanceCount || wW.fzW;
        if (!wW.isVisible || wW.bBW || wW.visibility !== MW.visibility || 0 === (wW.layerMask & RW.layerMask) || wW.material !== MW.material || 0 !== wW.renderingGroupId || wW.hasVertexAlpha || !this.drawDefines.definesHold(bR, CW, bR.instancing) || MW.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(zR.inputs, CW, bR.instancing, zR.program) || zR.program.failed || AW.released || yR <= 0 || yR > MW.fitInstances) return !1;
        if (AW.frame !== this.frame && this.bindMaterial(AW, this.modelUniforms.refreshModelUniforms(wW.QRW(), AW, AW.model, this.view)), !AW.bindable || AW.bindGroup !== MW.bindGroup) return !1;
        const NW = wW.computeWorldMatrix(),
          eW = NW.updateFlag !== MW.worldFlag;
        return MW.worldFlag = NW.updateFlag, zR.instances = yR, this.thinBundle.addAgain(MW.record, zR, eW ? NW.m : null, MW.visibility), MW.handedFrame = this.frame, this.JzW.drawn++, !0
      }
      retainedDraw(WW, RW, MW, wW) {
        const CW = this.inputs.get(RW),
          zR = null === CW || void 0 === CW ? void 0 : CW.retained;
        if (!CW || !zR) return;
        const {
          drawState: AW,
          program: bR,
          instance: yR,
          instancing: NW
        } = zR, eW = RW.owner;
        if (SC(eW) !== NW) return;
        const BW = this.instanceCount(eW, NW);
        if (BW <= 0) return null;
        if (yR.released || bR.failed || AW.program !== bR || !this.drawDefines.programCurrent(AW, RW, NW, MW) || !this.inputsStamped(CW, RW, NW, bR) || eW.isUnIndexed !== zR.unIndexed || this.indexKey(RW) !== zR.indexData) return;
        if (zR.indexBuffer && zR.gpuVersion !== this.resources.gpuBuffersVersion) {
          const WW = this.resources.gpuBuffer(zR.indexData);
          if (!WW) return;
          zR.indexBuffer = WW, zR.gpuVersion = this.resources.gpuBuffersVersion
        }
        let tR = !1;
        if (yR.frame !== this.frame && (tR = this.modelUniforms.refreshModelUniforms(WW, yR, yR.model, this.view)), !this.bindMaterial(yR, tR) || !this.withGpuBuffers(CW) || !this.instanceBuffersFit(eW.name, CW, BW)) return null;
        const TW = this.makeDraw(bR, CW, this.renderStates.renderState(AW.model, eW, wW, CW.state), yR, BW);
        return this.setRange(TW, RW, zR.indexBuffer, zR.indexData), TW
      }
      retain(WW, RW) {
        const MW = this.drawDefines.drawStates.get(WW);
        if (!RW || !MW || MW.program !== RW.program) {
          const RW = this.inputs.get(WW);
          return void(RW && (RW.retained = null))
        }
        const wW = WW.owner,
          CW = MW.instancing,
          zR = this.indexKey(WW),
          AW = RW.inputs.retained;
        AW ? (AW.drawState = MW, AW.instancing = CW, AW.program = RW.program, AW.instance = RW.material, AW.indexData = zR, AW.unIndexed = wW.isUnIndexed, AW.indexBuffer = RW.indexBuffer, AW.gpuVersion = this.resources.gpuBuffersVersion) : RW.inputs.retained = {
          drawState: MW,
          instancing: CW,
          program: RW.program,
          instance: RW.material,
          indexData: zR,
          unIndexed: wW.isUnIndexed,
          indexBuffer: RW.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(WW, RW, MW, wW) {
        const CW = RW.owner,
          zR = fz(RW);
        if (!zR) return null;
        const AW = zR.getClassName();
        let bR = null;
        if (function(WW) {
            return "LinesMesh" === WW.getClassName()
          }(CW)) {
          if (! function(WW) {
              return "ShaderMaterial" === WW.getClassName() && "color" === WW.shaderPath
            }(zR)) return this.warnOnce(`lines:${AW}`, `A LinesMesh with a ${AW} is not drawn yet (${zR.name})`), null;
          bR = CW
        } else if ("StandardMaterial" !== AW && "LiteMaterial" !== AW) return this.warnOnce(`class:${AW}`, `${AW} is not drawn yet (${zR.name})`), null;
        const yR = SC(CW),
          NW = this.instanceCount(CW, yR);
        if (NW <= 0) return null;
        const eW = bR ? this.lineProgramFor(CW, MW, yR) : this.drawDefines.programFor(WW, RW, zR, MW, yR);
        if (!eW || eW.failed) return null;
        const BW = bR ? null : this.drawDefines.drawStates.get(RW).model,
          tR = BW ? this.modelInstance(BW, eW) : this.materialInstance(CW, eW);
        let TW = !1;
        if (tR.frame !== this.frame && (bR ? PW(tR.ubo, bR) : TW = this.modelUniforms.refreshModelUniforms(WW, tR, tR.model, this.view)), !this.bindMaterial(tR, TW)) return null;
        const gR = this.meshInputs(RW, eW, yR);
        if (!gR || !this.instanceBuffersFit(CW.name, gR, NW)) return null;
        const iR = this.indexKey(RW);
        let YW = null;
        if (iR && !CW.isUnIndexed && (YW = this.resources.gpuBuffer(iR), !YW)) return null;
        const JW = this.renderStates.renderState(null !== BW && void 0 !== BW ? BW : zR, CW, wW, gR.state, bR ? "line-list" : "triangle-list"),
          IW = this.makeDraw(eW, gR, JW, tR, NW);
        return this.setRange(IW, RW, YW, iR), IW
      }
      indexKey(WW) {
        const RW = wz(WW);
        return RW ? this.resources.modelIndex(RW) : null
      }
      setRange(WW, RW, MW, wW) {
        MW && (WW.indexBuffer = MW, WW.indexFormat = this.resources.indexFormat(wW));
        const CW = 4 * RW.range + (MW ? 0 : 2);
        WW.unit = RW, WW.first = RW.parts.WA[CW], WW.count = RW.parts.WA[CW + 1]
      }
      makeDraw(WW, RW, MW, wW, CW) {
        RW.state !== MW && (RW.state = MW, RW.pipelineKey = `${WW.id}|${RW.layout.key}|${MW.key}`, RW.pipeline = null);
        const zR = RW.draw ??= {
          program: WW,
          inputs: RW,
          pipelineKey: "",
          layout: RW.layout,
          state: MW,
          material: wW,
          slotOffset: 0,
          vertexBuffers: RW.buffers,
          vertexOffsets: RW.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: CW,
          unit: null
        };
        return zR.program = WW, zR.pipelineKey = RW.pipelineKey, zR.state = MW, zR.material = wW, zR.vertexOffsets = RW.offsets, zR.indexBuffer = null, zR.instances = CW, zR
      }
      instanceCount(WW, RW) {
        switch (RW) {
          case "thin":
            return WW.forcedInstanceCount || WW.fzW;
          case "instanced":
            return this.prepareInstances(WW);
          case "none":
            return 1
        }
      }
      prepareInstances(WW) {
        const RW = function(WW, RW) {
          const MW = RW._userInstancedBuffersStorage,
            wW = WW.batchUploads.get(RW);
          if (wW) {
            var CW;
            if (wW.layout === (null !== (CW = null === MW || void 0 === MW ? void 0 : MW.interleavedKinds) && void 0 !== CW ? CW : null)) return wW;
            wW.release()
          }
          return new nW(WW, RW, MW)
        }(this.resources, WW);
        return RW.frame !== this.frame && RW.pack(WW, this.modelMeshes.instanceBatch(WW), this.modelMeshes.worlds, this.frame), RW.count
      }
      programWithModel(WW, RW, MW) {
        const wW = this.modelSlot(WW),
          CW = Az(wW, WW, MW),
          zR = this.drawDefines.modelPackKind(WW),
          AW = zR ? function(WW, RW, MW, wW) {
            const CW = (0, rR.y)(WW, fW.i.name),
              zR = [];
            for (const {
                feature: yR,
                state: NW,
                active: eW
              }
              of WW.features) {
              var AW, bR;
              const WW = eW ? null === (AW = (bR = (0, eR.i)(yR)).ww) || void 0 === AW ? void 0 : AW.call(bR, NW) : void 0;
              WW && zR.push(WW)
            }
            return {
              kind: RW,
              atlas: null !== CW && void 0 !== CW && CW.active ? (0, fW.c)(CW.state) : null,
              defines: MW,
              ...wA(zR, wW)
            }
          }(WW, zR, RW, wW.fragmentCode) : null;
        if (AW && function(WW) {
            const RW = WW.defines;
            return (null === WW.atlas || !!RW.DIFFUSE && 1 === RW.DIFFUSEDIRECTUV) && !!RW.NORMAL && !RW.REFLECTION && !RW.EMISSIVEASILLUMINATION && !RW.LINKEMISSIVEWITHDIFFUSE
          }(AW)) {
          const MW = this.modelPackProgram(WW, RW, `${CW}#${zR}#sp${this.drawDefines.modelPackVariant}`, wW, AW);
          if (MW && !MW.failed) return MW
        }
        const bR = this.programs.get(CW);
        if (bR || this.unbuildable.has(CW)) return null !== bR && void 0 !== bR ? bR : null;
        let yR;
        try {
          yR = AC({
            defines: Rz(RW),
            vertexCode: wW.vertexCode,
            fragmentCode: wW.fragmentCode,
            pluginUniforms: wW.pluginUniforms
          })
        } catch (NW) {
          return this.unbuildable.add(CW), this.warnOnce(`build:${CW}`, `could not build a program for ${WW.name}: ${String(NW)}`), null
        }
        return this.createProgram(CW, yR, "standard")
      }
      modelPackProgram(WW, RW, MW, wW, CW) {
        const zR = this.programs.get(MW);
        if (zR || this.unbuildable.has(MW)) return null !== zR && void 0 !== zR ? zR : null;
        const AW = this.drawDefines.modelPackVariant;
        let bR;
        try {
          const WW = function(WW) {
              return (0, XR.b)(WW, "model")
            }(AW),
            MW = TA(WW, CW, wW.vertexCode, wW.fragmentCode);
          bR = JA(AC({
            defines: Rz(RW),
            ...MW,
            pluginUniforms: wW.pluginUniforms
          }), WW, CW, !!this.sunShadow)
        } catch (eW) {
          return this.unbuildable.add(MW), this.warnOnce(`build:${MW}`, `could not build a shader pack program for ${WW.name}, which draws without the pack: ${String(eW)}`), null
        }
        const yR = Vz(AW, !!this.sunShadow),
          NW = {
            group: this.packInputs.bindGroupFor(null, yR),
            layout: Uz(this.device, {
              depth: !1,
              sunShadow: yR
            })
          };
        return this.createProgram(MW, bR, function(WW) {
          return `standard-sp${WW}`
        }(AW), NW)
      }
      lineProgramFor(WW, RW, MW) {
        const wW = JW(WW, MW, RW, this.view);
        let CW = this.linePrograms.get(wW);
        var zR;
        return CW || (CW = this.createProgram(`lines#${wW}`, (zR = function(WW) {
          const RW = new Map;
          for (let MW = 0; MW < NW.length; MW++) WW & 1 << MW && RW.set(NW[MW], !0);
          return RW
        }(wW), eC({
          defines: zR,
          vertex: yz,
          fragment: NC,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(wW, CW)), CW
      }
      createProgram(WW, RW, MW) {
        var wW;
        let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const zR = this.nextProgramId++,
          AW = `${MW}-${zR}`,
          bR = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          yR = [{
            binding: 0,
            visibility: bR,
            buffer: {
              type: "uniform"
            }
          }];
        for (const BW of RW.textures) yR.push({
          binding: BW.binding,
          visibility: bR,
          texture: {
            viewDimension: BW.dimension
          }
        }), yR.push({
          binding: BW.samplerBinding,
          visibility: bR,
          sampler: {}
        });
        const NW = this.device.createBindGroupLayout({
            label: AW,
            entries: yR
          }),
          eW = {
            key: WW,
            id: zR,
            kind: MW,
            program: RW,
            vertex: this.device.createShaderModule({
              label: `${AW}-vertex`,
              code: RW.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${AW}-fragment`,
              code: RW.fragment
            }),
            materialLayout: NW,
            pipelineLayout: this.device.createPipelineLayout({
              label: AW,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, NW, ...CW ? [CW.layout] : []]
            }),
            packGroup: null !== (wW = null === CW || void 0 === CW ? void 0 : CW.group) && void 0 !== wW ? wW : null,
            failed: !1
          };
        return this.programs.set(WW, eW), eW
      }
      writeFrameUniforms() {
        const WW = this.frameUniforms;
        Tz(this.view, WW), this.device.queue.writeBuffer(this.frameBuffer, 0, WW)
      }
      materialInstance(WW, RW) {
        let MW = this.materials.get(WW);
        if (!MW) {
          const RW = new Map;
          this.materials.set(WW, RW), WW.rMW.addOnce((() => {
            for (const WW of RW.values()) WW.released = !0, this.resources.destroyBuffer(WW.buffer);
            this.materials.delete(WW)
          })), MW = RW
        }
        let wW = MW.get(RW.key);
        return wW || (wW = this.newMaterialInstance(WW, null, RW), MW.set(RW.key, wW)), wW
      }
      modelInstance(WW, RW) {
        const MW = this.modelSlot(WW);
        let wW = MW.instances.get(RW.key);
        return wW || (wW = this.newMaterialInstance(WW, WW, RW), MW.instances.set(RW.key, wW)), wW
      }
      modelSlot(WW) {
        let RW = WW.gpu[XW.f.lite];
        return RW || (RW = new IA(this.resources), WW.gpu[XW.f.lite] = RW), RW
      }
      newMaterialInstance(WW, RW, MW) {
        const wW = MW.program.material.floats,
          CW = new Float32Array(wW),
          zR = new Map;
        return {
          owner: WW,
          model: RW,
          program: MW,
          data: CW,
          uploaded: new Float32Array(wW).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${WW.name}-uniforms`,
            size: Math.max(16, 4 * wW),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: zR,
          ubo: new tA(MW.program.material.slots, CW, zR),
          bindGroup: null,
          bound: new Array(2 * MW.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(WW) {
        var RW;
        const MW = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: iz + YC,
            fragment: iz + JC,
            attributes: [],
            material: gz,
            textures: []
          }, "earthSky"),
          wW = this.earthSkyUniforms ??= this.newMaterialInstance(PA, null, MW);
        this.earthSkyFrom !== WW && (this.earthSkyFrom = WW, wW.data.fill(0)), rz(wW.ubo, WW, this.view);
        const CW = this.vertexInputs(MW, PA, "earthSky", MW, null);
        if (MW.failed || !CW || !this.bindMaterial(wW, !1)) return;
        const zR = null !== (RW = CW.state) && void 0 !== RW ? RW : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          AW = this.makeDraw(MW, CW, zR, wW, 1);
        AW.count = BC.length;
        const bR = cz(WW, this.view);
        AW.slotOffset = this.writeMeshSlot(bR, 1), this.lists.skyDraws.push(AW)
      }
      uploadIfChanged(WW) {
        const {
          data: RW,
          uploaded: MW
        } = WW;
        for (let wW = 0; wW < RW.length; wW++)
          if (RW[wW] !== MW[wW]) return MW.set(RW), void this.device.queue.writeBuffer(WW.buffer, 0, RW)
      }
      bindMaterial(WW, RW) {
        return WW.frame !== this.frame && (WW.frame = this.frame, RW || this.uploadIfChanged(WW), WW.bindable = this.bindTextures(WW)), WW.bindable
      }
      bindTextures(WW) {
        const {
          program: RW,
          bound: MW
        } = WW, wW = RW.program.textures;
        let CW = !WW.bindGroup,
          zR = !0;
        for (let AW = 0; AW < wW.length; AW++) {
          const RW = WW.textures.get(wW[AW].name),
            bR = RW ? this.resources.boundTexture(RW) : null;
          bR ? MW[2 * AW] === bR.view && MW[2 * AW + 1] === bR.sampler || (MW[2 * AW] = bR.view, MW[2 * AW + 1] = bR.sampler, CW = !0) : (RW || this.warnOnce(`texture:${WW.owner.name}:${wW[AW].name}`, `${WW.owner.name} has no ${wW[AW].name}`), zR = !1)
        }
        if (!zR) return CW && (WW.bindGroup = null), !1;
        if (CW) {
          const CW = [{
            binding: 0,
            resource: {
              buffer: WW.buffer
            }
          }];
          for (let WW = 0; WW < wW.length; WW++) CW.push({
            binding: wW[WW].binding,
            resource: MW[2 * WW]
          }), CW.push({
            binding: wW[WW].samplerBinding,
            resource: MW[2 * WW + 1]
          });
          WW.bindGroup = this.device.createBindGroup({
            label: `${WW.owner.name}-material`,
            layout: RW.materialLayout,
            entries: CW
          })
        }
        return !0
      }
      writeMeshSlot(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, WW, RW, MW), this.slotCount++ * mC
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(WW, RW, MW, wW, CW) {
        let zR = this.inputs.get(WW);
        if (!zR || zR.program !== wW || !Iz(RW, zR, this.resources, CW)) {
          var AW;
          if (zR = null !== (AW = this.vertexLayouts.resolveInputs(RW, MW, wW, CW)) && void 0 !== AW ? AW : void 0, !zR) return null;
          this.inputs.set(WW, zR)
        }
        return this.withGpuBuffers(zR)
      }
      meshInputs(WW, RW, MW) {
        const wW = this.inputs.get(WW);
        if (wW && this.inputsStamped(wW, WW, MW, RW)) return this.withGpuBuffers(wW);
        const CW = WW.owner,
          zR = wz(WW),
          AW = this.vertexInputs(WW, CW, CW.name, RW, zR);
        return AW && (AW.geometry = Cz(WW), AW.instanceLayout = this.drawDefines.instanceLayout(CW, MW)), AW
      }
      inputsStamped(WW, RW, MW, wW) {
        return function(WW, RW, MW, wW) {
          return WW.program === MW && WW.geometry === Cz(RW) && WW.instanceLayout === wW
        }(WW, RW, wW, this.drawDefines.instanceLayout(RW.owner, MW))
      }
      withGpuBuffers(WW) {
        return vA(WW, this.resources, this.zeroBuffer) ? WW : null
      }
      instanceBuffersFit(WW, RW, MW) {
        const wW = uz(RW, MW, this.resources, this.zeroBuffer);
        if (wW) {
          const CW = RW.ends[wW.index] - RW.offsets[wW.index] + RW.ozW[wW.index];
          return this.warnOnce(`overrun:${WW}`, `${WW} draws ${MW} instances from a ${CW}-byte buffer (${wW.needed} needed)`), !1
        }
        return !0
      }
      createBinding(WW, RW, MW, wW) {
        const CW = `${RW._colorFormat}|${RW._depthStencilFormat}|${RW._depthCompare}|${RW._sampleCount}`,
          zR = AR(this.device, RW);
        if (WW === this.skyLastRenderable) {
          let MW = null;
          return {
            renderable: WW,
            pipeline: zR,
            draw: WW => MW ? this.drawSky(WW, RW, CW, MW) : 0,
            update: WW => {
              MW = WW
            }
          }
        }
        return {
          renderable: WW,
          pipeline: zR,
          draw: WW => (wW ? wW.execute(WW, RW, CW) : 0) + this.drawList(WW, RW, CW, MW)
        }
      }
      drawSky(WW, RW, MW, wW) {
        const CW = this.lists.skyDraws,
          zR = CW.length > 0;
        if (zR) {
          var AW;
          const MW = (null !== (AW = RW._depthCompare) && void 0 !== AW ? AW : MR).startsWith("greater") ? 0 : 1;
          WW.setViewport(0, 0, wW.targetWidth, wW.targetHeight, MW, MW)
        }
        const bR = this.drawList(WW, RW, MW, CW);
        return zR && WW.setViewport(0, 0, wW.targetWidth, wW.targetHeight, 0, 1), bR
      }
      drawList(WW, RW, MW, wW) {
        let CW = 0;
        const zR = this.binder;
        zR.reset();
        for (const AW of wW) {
          const wW = this.pipelineFor(AW, RW, MW);
          wW && (zR.bind(WW, AW, wW, this.meshSlots.bindGroup, AW.slotOffset), AW.indexBuffer ? WW.drawIndexed(AW.count, AW.instances, AW.first, 0, 0) : WW.draw(AW.count, AW.instances, AW.first, 0), CW++)
        }
        return CW
      }
      pipelineFor(WW, RW, MW) {
        var wW, CW;
        if (WW.program.failed) return null;
        const zR = WW.inputs;
        if (zR.pipeline && zR.pipelineTarget === MW) return zR.pipeline;
        const AW = `${WW.pipelineKey}|${MW}`,
          bR = this.pipelines.get(AW);
        if (void 0 !== bR) return bR && (zR.pipeline = bR, zR.pipelineTarget = MW), bR || null;
        this.pipelines.set(AW, null);
        const {
          program: yR,
          layout: NW,
          state: eW
        } = WW, BW = {
          label: `standard-${yR.id}`,
          layout: yR.pipelineLayout,
          vertex: {
            module: yR.vertex,
            entryPoint: "main",
            buffers: NW.buffers
          },
          fragment: qR({
            module: yR.fragment,
            entryPoint: "main"
          }, RW, eW.blend, eW.colourWrite),
          depthStencil: RW._depthStencilFormat ? {
            format: RW._depthStencilFormat,
            depthCompare: null !== (wW = null !== (CW = eW.depthCompare) && void 0 !== CW ? CW : RW._depthCompare) && void 0 !== wW ? wW : MR,
            depthWriteEnabled: eW.depthWrite,
            depthBias: eW.depthBias,
            depthBiasSlopeScale: eW.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: RW._sampleCount
          },
          primitive: {
            topology: eW.topology,
            frontFace: eW.frontFace,
            cullMode: eW.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(BW).then((WW => {
          this.compiling--, this.pipelines.set(AW, WW)
        }), (WW => {
          this.compiling--, this.reportFailure(yR, AW, WW)
        })), null
      }
      forEachSunShadowCaster(WW) {
        const RW = this.caster,
          MW = (MW, wW, CW) => {
            const zR = MW.unit && function(WW) {
              const RW = WW.material.model;
              return null !== RW && (RW.lifeform || RW.item) && "triangle-list" === WW.state.topology
            }(MW) ? wz(MW.unit) : null;
            if (!zR) return;
            const AW = MW.unit.owner;
            switch (RW.geometry = zR, RW.skip = AW.noSunShadowVertices, RW.indexed = null !== MW.indexBuffer, RW.first = MW.first, RW.count = MW.count, RW.zM = wW, RW.worldAt = CW, RW.instances = null, RW.instanceCount = 1, RW.thin = !1, SC(AW)) {
              case "thin": {
                const WW = AW._thinInstanceDataStorage.matrixData;
                if (!WW) return;
                RW.instances = WW, RW.instanceCount = Math.min(MW.instances, WW.length / 16), RW.thin = !0;
                break
              }
              case "instanced": {
                const WW = this.resources.batchUploads.get(AW);
                if (!WW || WW.frame !== this.frame || !this.writeBatchCasters(WW)) return;
                break
              }
            }
            WW(RW)
          };
        for (const wW of this.lists.opaqueDraws) MW(wW, this.meshSlots.data, wW.slotOffset / 4);
        this.thinBundle.forEachDrawn(MW)
      }
      writeBatchCasters(WW) {
        const {
          caster: RW
        } = this, MW = WW.packedMatrices, wW = WW.count;
        RW.instances = MW, RW.instanceCount = wW;
        let CW = -1;
        for (let zR = 0; zR < wW; zR++) {
          const RW = FA(WW.packedRowMesh(zR));
          RW && CW < 0 ? (this.casterWorlds.length < 16 * wW && (this.casterWorlds = new Float32Array(MW.length)), this.casterWorlds.set(MW.subarray(0, 16 * zR)), CW = zR) : !RW && CW >= 0 && (this.casterWorlds.set(MW.subarray(16 * zR, 16 * zR + 16), 16 * CW), CW++)
        }
        return CW >= 0 && (RW.instances = this.casterWorlds, RW.instanceCount = CW), RW.instanceCount > 0
      }
      async reportFailure(WW, RW, MW) {
        const wW = [];
        let CW = !0;
        for (const [zR, AW] of [
            ["vertex", WW.vertex],
            ["fragment", WW.fragment]
          ]) {
          const WW = await AW.getCompilationInfo();
          for (const RW of WW.messages) CW &&= "error" !== RW.type, wW.push(`${zR}:${RW.lineNum}:${RW.linePos} ${RW.type}: ${RW.message}`)
        }
        if (CW && !WW.packGroup) return this.pipelines.set(RW, !1), console.error(`Lite: pipeline ${RW} failed`, MW), void nC("mesh", WW.kind, MW);
        WW.failed || (WW.failed = !0, console.error(`Lite: program ${WW.id} failed`, MW, wW.join("\n"), {
          program: WW.program,
          key: WW.key
        }), nC("mesh", WW.kind, MW, CW ? null : wW[0]))
      }
    }

    function FA(WW) {
      var RW, MW;
      const wW = null === (RW = WW.ORW) || void 0 === RW || null === (MW = RW.aShaderPackItem) || void 0 === MW ? void 0 : MW.x;
      return void 0 !== wW && 0 !== (wW & yM.i)
    }
    var fA = MW(39162),
      QA = MW(39168),
      rb = MW(39171),
      cb = MW(39126);
    const XA = [0, 3, 1, 4, 2, 5];

    function jb(WW, RW, MW, wW, CW) {
      const zR = MW[0].width;
      try {
        return CW ? function(WW, RW, MW) {
          const wW = (0, cb.e)(WW, MW, MW, 6);
          for (let CW = 0; CW < 6; CW++)(0, cb.f)(WW, wW, CW, RW[XA[CW]], {
            invertY: !1
          });
          return wW.texture
        }(WW, MW, zR) : function(WW, RW, MW, wW) {
          const CW = WW.createTexture({
            label: "sink-cube",
            size: {
              width: MW,
              height: MW,
              depthOrArrayLayers: 6
            },
            format: wW,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let zR = 0; zR < 6; zR++) WW.queue.copyExternalImageToTexture({
            source: RW[XA[zR]]
          }, {
            texture: CW,
            origin: {
              x: 0,
              y: 0,
              z: zR
            }
          }, {
            width: MW,
            height: MW
          });
          return CW
        }(RW, MW, zR, 1 === wW ? "r8unorm" : "rgba8unorm")
      } finally {
        kb(MW)
      }
    }

    function kb(WW) {
      for (const RW of null !== WW && void 0 !== WW ? WW : []) null === RW || void 0 === RW || RW.close()
    }
    async function ab(WW) {
      const RW = [],
        MW = [];
      if (await Promise.all(WW.map(((WW, wW) => (RW[wW] = null, WW.then((WW => {
          RW[wW] = WW
        }), (WW => {
          MW.push(WW)
        })))))), MW.length > 0) throw kb(RW), MW[0];
      return RW
    }
    class sA {
      constructor(WW) {
        this.aR = WW, this.starts = [], this.lengths = [], this.used = 0, WW > 0 && (this.starts.push(0), this.lengths.push(WW))
      }
      allocate(WW) {
        const {
          starts: RW,
          lengths: MW
        } = this;
        for (let wW = 0; wW < RW.length; wW++) {
          if (MW[wW] < WW) continue;
          const CW = RW[wW];
          return MW[wW] === WW ? (RW.splice(wW, 1), MW.splice(wW, 1)) : (RW[wW] += WW, MW[wW] -= WW), this.used += WW, CW
        }
        return -1
      }
      free(WW, RW) {
        this.used -= RW;
        const MW = Math.min(WW + RW, this.aR);
        MW > WW && this.release(WW, MW - WW)
      }
      grow(WW) {
        const RW = this.aR;
        this.aR = WW, this.release(RW, WW - RW)
      }
      truncate(WW) {
        const {
          starts: RW,
          lengths: MW
        } = this;
        for (let wW = RW.length - 1; wW >= 0 && RW[wW] + MW[wW] > WW; wW--) RW[wW] >= WW ? (RW.splice(wW, 1), MW.splice(wW, 1)) : MW[wW] = WW - RW[wW];
        this.aR = WW
      }
      release(WW, RW) {
        const {
          starts: MW,
          lengths: wW
        } = this;
        let CW = 0,
          zR = MW.length;
        for (; CW < zR;) {
          const RW = CW + zR >> 1;
          MW[RW] < WW ? CW = RW + 1 : zR = RW
        }
        const AW = CW,
          bR = AW > 0 && MW[AW - 1] + wW[AW - 1] === WW,
          yR = AW < MW.length && WW + RW === MW[AW];
        bR && yR ? (wW[AW - 1] += RW + wW[AW], MW.splice(AW, 1), wW.splice(AW, 1)) : bR ? wW[AW - 1] += RW : yR ? (MW[AW] = WW, wW[AW] += RW) : (MW.splice(AW, 0, WW), wW.splice(AW, 0, RW))
      }
    }
    const dA = 256;
    class pA {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = WW, this.onReplaced = RW, this.mergeGap = MW, this.gpu = null, this.bytes = void 0, this.WA = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const CW = Math.max(dA, Math.ceil(wW / dA) * dA);
        this.bytes = new Uint8Array(CW), this.WA = new sA(CW / dA)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(WW) {
        return Math.max(1, Math.ceil(WW / dA)) * dA
      }
      allocate(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW;
        const wW = pA.slotBytes(WW),
          CW = wW / dA;
        let zR = this.WA.allocate(CW);
        zR < 0 && (this.grow(this.WA.aR + CW), zR = this.WA.allocate(CW));
        const AW = zR * dA;
        return this.growTo(AW + Math.max(MW, wW)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, AW, AW + wW), RW && this.bytes.set(new Uint8Array(RW.buffer, RW.byteOffset, Math.min(RW.byteLength, wW)), AW), this.markDirty(AW, AW + wW), AW
      }
      growTo(WW) {
        const RW = Math.ceil(WW / dA);
        RW > this.WA.aR && this.grow(RW)
      }
      free(WW, RW) {
        this.freed.push(WW, RW)
      }
      write(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (wW <= 0) return;
        this.bytes.set(new Uint8Array(RW.buffer, MW, wW), WW);
        let zR = WW + wW;
        if (CW) {
          const RW = WW + 4 * Math.ceil(wW / 4);
          this.bytes.fill(0, zR, RW), zR = RW
        }
        this.markDirty(WW, zR)
      }
      move(WW, RW, MW) {
        this.bytes.copyWithin(RW, WW, WW + MW), this.markDirty(RW, RW + MW)
      }
      flush() {
        for (const RW of this.retired) this.onReplaced(RW), RW.destroy();
        this.retired.length = 0;
        const WW = this.dirtyStarts.length;
        if (WW > 0) {
          const {
            dirtyStarts: RW,
            dirtyEnds: MW,
            order: wW
          } = this;
          wW.length = WW;
          for (let bR = 0; bR < WW; bR++) wW[bR] = bR;
          WW > 1 && wW.sort(((WW, MW) => RW[WW] - RW[MW]));
          const CW = this.mergeGap;
          let zR = RW[wW[0]],
            AW = MW[wW[0]];
          for (let bR = 1; bR < WW; bR++) {
            const WW = wW[bR];
            RW[WW] - AW <= CW ? AW = Math.max(AW, MW[WW]) : (this.send(zR, AW), zR = RW[WW], AW = MW[WW])
          }
          this.send(zR, AW), RW.length = 0, MW.length = 0
        }
        this.holding = !1
      }
      Lk() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const WW = this.freed;
        for (let RW = 0; RW < WW.length; RW += 2) this.WA.free(WW[RW] / dA, WW[RW + 1] / dA);
        WW.length = 0
      }
      send(WW, RW) {
        this.device.queue.writeBuffer(this.gpu, WW, this.bytes.buffer, WW, RW - WW);
        for (const MW of this.replaced) {
          const wW = Math.min(RW, MW.size);
          wW > WW && this.device.queue.writeBuffer(MW, WW, this.bytes.buffer, WW, wW - WW)
        }
      }
      markDirty(WW, RW) {
        WW &= -4, RW = RW + 3 & -4, this.holding ? (this.dirtyStarts.push(WW), this.dirtyEnds.push(RW)) : this.send(WW, RW)
      }
      grow(WW) {
        const RW = this.WA.aR,
          MW = Math.max(2 * RW, WW),
          wW = new Uint8Array(MW * dA);
        wW.set(this.bytes);
        const CW = this.gpu;
        this.gpu = this.createGpu(wW.byteLength), this.bytes = wW, this.WA.grow(MW), CW && (this.replaced.push(CW), this.onReplaced(CW)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, RW * dA)
      }
      createGpu(WW) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: WW,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function hA(WW) {
      return Array.isArray(WW) ? new Float32Array(WW) : WW
    }

    function UA(WW, RW, MW, wW, CW) {
      const zR = jz(CW),
        AW = Math.min(CW, wW.byteLength);
      if (zR === AW && wW.byteOffset % 4 === 0) return void WW.queue.writeBuffer(RW, MW, wW.buffer, wW.byteOffset, zR);
      const bR = new Uint8Array(zR);
      bR.set(new Uint8Array(wW.buffer, wW.byteOffset, AW)), WW.queue.writeBuffer(RW, MW, bR)
    }

    function EA(WW, RW, MW) {
      const wW = "linear",
        CW = "nearest";
      let zR = CW,
        AW = CW,
        bR = "nearest",
        yR = !RW;
      switch (WW) {
        case 11:
          zR = wW, AW = wW;
          break;
        case 3:
          zR = wW, AW = wW, bR = RW ? "linear" : "nearest";
          break;
        case 8:
          bR = RW ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          AW = wW;
          break;
        case 6:
          AW = wW, bR = RW ? "linear" : "nearest";
          break;
        case 7:
          AW = wW, yR = !0;
          break;
        case 9:
          zR = wW;
          break;
        case 10:
          zR = wW, bR = RW ? "linear" : "nearest";
          break;
        case 2:
          zR = wW, AW = wW, MW > 1 ? (bR = "linear", yR = !1) : yR = !0;
          break;
        case 12:
          zR = wW, yR = !0;
          break;
        default:
          yR = !0
      }
      return MW > 1 && !yR ? {
        magFilter: wW,
        minFilter: wW,
        mipmapFilter: "linear",
        maxAnisotropy: MW
      } : {
        magFilter: zR,
        minFilter: AW,
        mipmapFilter: bR,
        ...yR ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function VA(WW) {
      return 0 === WW ? "clamp-to-edge" : 2 === WW ? "mirror-repeat" : "repeat"
    }
    class mb {
      constructor(WW, RW) {
        let {
          vertexArena: MW = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = WW, this.device = RW, this.buffers = new WeakMap, this.WzW = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = MW ? new pA(RW, (WW => {
          var RW;
          null === (RW = this.onDestroy) || void 0 === RW || RW.call(this, WW), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var WW;
        null === (WW = this.arena) || void 0 === WW || WW.flush()
      }
      endUploadFrame() {
        var WW;
        null === (WW = this.arena) || void 0 === WW || WW.Lk()
      }
      vertexBufferCreated(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MW ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(WW);
        const CW = hA(RW);
        WW.aR = CW.byteLength, this.buffers.set(WW, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: MW && null !== this.arena,
          pending: CW,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: wW
        })
      }
      vertexBufferUpdated(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        const CW = this.buffers.get(WW);
        if (!CW) return;
        const zR = hA(RW),
          AW = void 0 === wW ? zR.byteLength : Math.min(wW, zR.byteLength);
        this.update(CW, zR, MW, AW)
      }
      vertexBufferFloatsUpdated(WW, RW, MW, wW) {
        const CW = this.buffers.get(WW);
        if (!CW) return;
        const zR = MW * Float32Array.BYTES_PER_ELEMENT,
          AW = (wW - MW) * Float32Array.BYTES_PER_ELEMENT;
        CW.slot >= 0 && AW > 0 && zR + AW <= CW.size ? this.writeSlot(CW, zR, RW, RW.byteOffset + zR, AW, !1) : CW.gpu && AW > 0 && zR + AW <= CW.gpu.size ? this.device.queue.writeBuffer(CW.gpu, zR, RW.buffer, RW.byteOffset + zR, AW) : this.update(CW, RW.subarray(MW, wW), zR, AW)
      }
      indexBufferCreated(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(WW);
        const wW = function(WW) {
          if (WW instanceof Uint16Array || WW instanceof Uint32Array) return WW;
          for (let RW = 0; RW < WW.length; RW++)
            if (WW[RW] >= 65535) return new Uint32Array(WW);
          return new Uint16Array(WW)
        }(RW);
        WW.is32Bits = 4 === wW.BYTES_PER_ELEMENT, WW.aR = wW.byteLength, this.buffers.set(WW, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: wW,
          ownsPending: wW !== RW,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: MW
        })
      }
      bufferDeleted(WW) {
        const RW = this.buffers.get(WW);
        null !== RW && void 0 !== RW && RW.gpu ? (this.destroyBuffer(RW.gpu), this.gpuBuffersVersion++) : RW && RW.slot >= 0 && (this.arena.free(RW.slot, RW.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(WW)
      }
      update(WW, RW, MW, wW) {
        if (WW.slot >= 0) this.updateSlot(WW, RW, MW, wW);
        else if (WW.gpu) {
          if (MW + jz(wW) > WW.gpu.size) {
            const RW = this.device.createBuffer({
                label: WW.label,
                size: jz(Math.max(2 * WW.gpu.size, MW + wW)),
                usage: WW.usage | GPUBufferUsage.COPY_SRC
              }),
              CW = this.device.createCommandEncoder();
            CW.copyBufferToBuffer(WW.gpu, 0, RW, 0, WW.gpu.size), this.device.queue.submit([CW.finish()]), this.destroyBuffer(WW.gpu), this.gpuBuffersVersion++, WW.gpu = RW
          }
          UA(this.device, WW.gpu, MW, RW, wW)
        } else {
          const zR = new Uint8Array(RW.buffer, RW.byteOffset, wW),
            AW = WW.pending;
          if (AW && WW.ownsPending && MW + wW <= AW.byteLength) new Uint8Array(AW.buffer, AW.byteOffset, AW.byteLength).set(zR, MW);
          else if (AW && 0 === MW && wW === AW.byteLength && RW.byteLength === wW) WW.pending = RW, WW.ownsPending = !1;
          else {
            var CW;
            const RW = new Uint8Array(Math.max(null !== (CW = null === AW || void 0 === AW ? void 0 : AW.byteLength) && void 0 !== CW ? CW : 0, MW + wW));
            AW && RW.set(new Uint8Array(AW.buffer, AW.byteOffset, AW.byteLength)), RW.set(zR, MW), WW.pending = RW, WW.ownsPending = !0
          }
        }
      }
      updateSlot(WW, RW, MW, wW) {
        const CW = this.arena;
        MW + jz(wW) > WW.size && (WW.size = jz(Math.max(2 * WW.size, MW + wW)), CW.growTo(WW.slot + WW.size), this.gpuBuffersVersion++), 0 === wW ? this.writeSlot(WW, MW, vb, 0, 4, !1) : this.writeSlot(WW, MW, RW, RW.byteOffset, wW, !0)
      }
      writeSlot(WW, RW, MW, wW, CW, zR) {
        const AW = RW + (zR ? jz(CW) : CW);
        AW > WW.slotBytes && this.moveSlot(WW, AW), this.arena.write(WW.slot + RW, MW, wW, CW, zR)
      }
      moveSlot(WW, RW) {
        const MW = this.arena,
          wW = pA.slotBytes(Math.max(RW, Math.min(2 * WW.slotBytes, WW.size))),
          CW = MW.allocate(wW, null, WW.size);
        MW.move(WW.slot, CW, WW.slotBytes), MW.free(WW.slot, WW.slotBytes), WW.slot = CW, WW.slotBytes = wW, this.gpuBuffersVersion++
      }
      cover(WW, RW) {
        const MW = this.buffers.get(WW);
        if (!MW || MW.slot < 0) return !1;
        const wW = Math.min(RW, MW.size);
        return !(wW <= MW.slotBytes) && (this.moveSlot(MW, wW), !0)
      }
      destroyBuffer(WW) {
        var RW;
        null === (RW = this.onDestroy) || void 0 === RW || RW.call(this, WW), WW.destroy()
      }
      gpuBuffer(WW) {
        const RW = this.buffers.get(WW);
        if (!RW) return null;
        if (RW.slot >= 0) return this.arena.buffer;
        if (RW.arena && RW.pending) {
          const WW = RW.pending,
            MW = this.arena;
          return RW.size = jz(WW.byteLength), RW.slotBytes = pA.slotBytes(function(WW) {
            const RW = new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength);
            let MW = RW.length;
            if (WW.byteOffset % 4 === 0) {
              for (; MW % 4 !== 0 && 0 === RW[MW - 1];) MW--;
              if (MW % 4 === 0) {
                const RW = new Uint32Array(WW.buffer, WW.byteOffset, MW / 4);
                let wW = RW.length;
                for (; wW > 0 && 0 === RW[wW - 1];) wW--;
                MW = 4 * wW
              }
            }
            for (; MW > 0 && 0 === RW[MW - 1];) MW--;
            return MW
          }(WW)), RW.slot = MW.allocate(RW.slotBytes, WW, RW.size), RW.pending = null, MW.buffer
        }
        if (!RW.gpu && RW.pending) {
          const WW = RW.pending;
          RW.gpu = this.device.createBuffer({
            label: RW.label,
            size: jz(WW.byteLength),
            usage: RW.usage
          }), UA(this.device, RW.gpu, 0, WW, WW.byteLength), RW.pending = null
        }
        return RW.gpu
      }
      gpuOffset(WW) {
        var RW, MW;
        const wW = null !== (RW = null === (MW = this.buffers.get(WW)) || void 0 === MW ? void 0 : MW.slot) && void 0 !== RW ? RW : -1;
        return wW < 0 ? 0 : wW
      }
      gpuEnd(WW) {
        var RW, MW;
        const wW = this.buffers.get(WW);
        return wW ? wW.slot >= 0 ? wW.slot + wW.size : null !== (RW = null === (MW = wW.gpu) || void 0 === MW ? void 0 : MW.size) && void 0 !== RW ? RW : 0 : 0
      }
      vertexInput(WW, RW, MW) {
        var wW, CW, zR, AW;
        return null !== (wW = null !== (CW = MW && this.modelInput(MW, RW)) && void 0 !== CW ? CW : null === (zR = null !== (AW = this.WzW.get(WW)) && void 0 !== AW ? AW : this.batchUploads.get(WW)) || void 0 === zR ? void 0 : zR.inputs[RW]) && void 0 !== wW ? wW : null
      }
      modelInput(WW, RW) {
        const MW = this.geometrySlot(WW);
        let wW = MW.inputs.get(RW);
        if (void 0 === wW) {
          const CW = WW.vertexAttributes.find((WW => WW.kind === RW));
          wW = CW ? new GW(this.modelKey(MW, CW.data, !1), CW.offset, CW.stride, CW.components, !1, CW.glType, CW.isNormalized) : null, MW.inputs.set(RW, wW)
        }
        return wW
      }
      modelIndex(WW) {
        return WW.indexData && this.modelKey(this.geometrySlot(WW), WW.indexData, !0)
      }
      geometrySlot(WW) {
        let RW = WW.gpu[XW.f.lite];
        if (!RW) {
          const MW = new Map,
            wW = () => {
              for (const WW of MW.values()) this.bufferDeleted(WW)
            },
            CW = WW => {
              const RW = MW.get(WW);
              RW && this.vertexBufferUpdated(RW, WW)
            };
          RW = {
            keys: MW,
            inputs: new Map,
            release: wW,
            updated: CW
          }, WW.gpu[XW.f.lite] = RW
        }
        return RW
      }
      modelKey(WW, RW, MW) {
        let wW = WW.keys.get(RW);
        if (!wW) {
          if (MW) {
            const WW = {
              aR: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(WW, RW, "model-indices"), wW = WW
          } else wW = {
            aR: 0
          }, this.vertexBufferCreated(wW, RW, !1, "model-vertices");
          WW.keys.set(RW, wW)
        }
        return wW
      }
      indexFormat(WW) {
        return WW.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(WW, RW) {
        --WW.refs > 0 || (this.releaseTexture(WW), kb(WW.images), null !== RW && this.textures.delete(RW))
      }
      load(WW, RW) {
        const MW = RW.decoded = async function(WW) {
          if ("cube" === WW.kind) return async function(WW) {
            if (6 !== WW.length) throw new Error(`${WW.length} files where six faces were expected`);
            const RW = await ab(WW.map((WW => hC(WW)))),
              MW = RW[0].width;
            return ab(RW.map((async WW => {
              if (WW.width === MW && WW.height === MW) return WW;
              try {
                return await createImageBitmap(WW, {
                  ...dC,
                  resizeWidth: MW,
                  resizeHeight: MW
                })
              } finally {
                WW.close()
              }
            })))
          }(WW.files);
          if ("data" === WW.kind && WW.data) return [await createImageBitmap(new Blob([WW.data]), dC)];
          return [await hC(xb(WW))]
        }(WW.source).then((WW => {
          0 === RW.refs ? kb(WW) : RW.images = WW
        }));
        this.track(RW, xb(WW.source), MW, (() => {
          RW.wanted && !RW.failed && RW.refs > 0 && this.upload(WW, RW)
        }))
      }
      canvasUpdated(WW, RW, MW) {
        const {
          state: wW
        } = this.textureSlot(WW);
        wW.dynamicSource = {
          invertY: RW,
          premultiplied: MW
        }, wW.dynamic && this.pushDynamic(WW.source, wW)
      }
      async atlasArray(WW, RW, MW) {
        const wW = await VC(this.device, WW, RW, MW);
        if (!this.atlasBindings.has(wW)) {
          const WW = (0, fA.b)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(wW, {
            view: wW.texture.createView({
              dimension: "2d-array"
            }),
            sampler: WW
          })
        }
        return wW
      }
      boundTexture(WW) {
        const RW = this.atlasBindings.get(WW);
        if (RW) return RW;
        const MW = WW;
        if (MW.released) return null;
        const wW = this.textureSlot(MW, !0),
          {
            state: CW
          } = wW;
        if (!CW.view && (CW.wanted = !0, CW.loading || CW.failed || this.upload(MW, CW), !CW.view)) return null;
        const zR = this.chosenSampler(MW, wW),
          AW = wW.bound;
        return AW && AW.view === CW.view && AW.sampler === zR ? AW : (wW.bound = {
          view: CW.view,
          sampler: zR
        }, wW.bound)
      }
      textureLoaded(WW) {
        var RW, MW;
        return null !== (RW = null === (MW = WW.gpu[XW.f.lite]) || void 0 === MW ? void 0 : MW.state.decoded) && void 0 !== RW ? RW : null
      }
      textureFailed(WW) {
        var RW;
        return !0 === (null === (RW = WW.gpu[XW.f.lite]) || void 0 === RW ? void 0 : RW.state.failed)
      }
      chosenSampler(WW, RW) {
        const {
          samplingMode: MW,
          wrapU: wW,
          wrapV: CW
        } = WW.sampler, zR = RW.state.hasMips, AW = function(WW, RW) {
          const {
            bilinear: MW,
            trilinear: wW
          } = XW.i;
          return !RW && WW !== MW || 11 !== WW && WW !== wW && WW !== MW ? 1 : 4
        }(MW, zR), bR = RW.sampler;
        if (bR && bR.samplingMode === MW && bR.hasMips === zR && bR.anisotropy === AW && bR.wrapU === wW && bR.wrapV === CW) return bR.sampler;
        const yR = this.samplerFor(MW, zR, AW, wW, CW);
        return RW.sampler = {
          samplingMode: MW,
          hasMips: zR,
          anisotropy: AW,
          wrapU: wW,
          wrapV: CW,
          sampler: yR
        }, yR
      }
      releaseTexture(WW) {
        var RW, MW;
        WW.view && (null === (MW = this.onDestroy) || void 0 === MW || MW.call(this, WW.view));
        null === (RW = WW.destroy) || void 0 === RW || RW.call(WW)
      }
      textureSlot(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = WW.gpu[XW.f.lite];
        if (MW) return MW;
        const wW = function(WW) {
          let {
            source: RW,
            sampler: MW
          } = WW;
          return "canvas" === RW.kind ? null : `${RW.kind}|${xb(RW)}|${MW.noMipmap}|${MW.samplingMode}|${MW.invertY}`
        }(WW);
        let CW = null === wW ? void 0 : this.textures.get(wW);
        CW || (CW = {
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
        }, null !== wW && (this.textures.set(wW, CW), this.load(WW, CW), RW && this.firstBindDecodes++)), CW.refs++;
        const zR = CW,
          AW = {
            state: CW,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(zR, wW)
            }
          };
        return WW.gpu[XW.f.lite] = AW, AW
      }
      samplerFor(WW, RW, MW, wW, CW) {
        const zR = `${WW}|${RW}|${MW}|${wW}|${CW}`;
        let AW = this.samplers.get(zR);
        if (!AW) {
          const bR = {
            ...EA(WW, RW, MW),
            addressModeU: VA(wW),
            addressModeV: VA(CW)
          };
          AW = (0, fA.b)(this.engine, bR), this.samplers.set(zR, AW)
        }
        return AW
      }
      upload(WW, RW) {
        const {
          source: MW,
          sampler: wW
        } = WW;
        RW.hasMips = !wW.noMipmap, "canvas" === MW.kind ? this.createDynamic(MW, RW) : "cube" === MW.kind ? this.uploadCube(RW, MW.luminance) : this.uploadImage(RW, !0 === wW.invertY, MW.url)
      }
      uploadImage(WW, RW, MW) {
        const [wW] = WW.images;
        WW.images = null;
        const CW = (0, QA.d)(this.engine, wW, {
          mipMaps: WW.hasMips,
          invertY: RW,
          srgb: !1
        }).then((RW => {
          wW.close(), 0 !== WW.refs ? (WW.view = RW.view, WW.destroy = RW.texture.destroy.bind(RW.texture)) : RW.texture.destroy()
        }));
        this.track(WW, MW, CW)
      }
      track(WW, RW, MW, wW) {
        WW.loading = !0, this.pending++, MW.catch((MW => {
          WW.failed = !0, console.warn(`Lite: could not load texture ${pC(RW)}`, MW)
        })).finally((() => {
          WW.loading = !1, this.pending--, null === wW || void 0 === wW || wW()
        }))
      }
      uploadCube(WW, RW) {
        const MW = WW.images;
        WW.images = null;
        const wW = jb(this.engine, this.device, MW, (0, XW.A)(RW), WW.hasMips);
        WW.view = wW.createView({
          dimension: "cube"
        }), WW.destroy = () => {
          wW.destroy()
        }
      }
      createDynamic(WW, RW) {
        const {
          canvas: MW
        } = WW, wW = (0, rb.d)(this.engine, Math.max(1, MW.width), Math.max(1, MW.height), {
          mipMaps: RW.hasMips,
          srgb: !1
        });
        RW.dynamic = wW, RW.view = wW.view, RW.destroy = () => {
          wW.texture.destroy()
        }, this.pushDynamic(WW, RW)
      }
      pushDynamic(WW, RW) {
        const MW = RW.dynamicSource,
          wW = RW.dynamic,
          {
            canvas: CW
          } = WW;
        if (MW && wW && 0 !== CW.width && 0 !== CW.height) return CW.width !== wW.width || CW.height !== wW.height ? (this.releaseTexture(RW), RW.dynamic = null, RW.view = null, void this.createDynamic(WW, RW)) : void(0, rb.e)(this.engine, wW, CW, {
          invertY: MW.invertY,
          premultiplyAlpha: MW.premultiplied
        })
      }
    }

    function xb(WW) {
      return "cube" === WW.kind ? WW.rootUrl : "canvas" === WW.kind ? "canvas" : WW.url
    }
    const vb = new Uint8Array(4);

    function KA(WW) {
      const RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      WW._colorAttachment.storeOp = WW._targetSignature._sampleCount > 1 ? RW : "store";
      const MW = WW._renderPassDescriptor.depthStencilAttachment;
      MW && (MW.depthStoreOp = RW, MW.stencilStoreOp && (MW.stencilStoreOp = RW))
    }
    var uA = MW(35852),
      OA = MW(35903),
      nA = MW(35502),
      GA = MW(37340);
    const LA = new Float64Array([1, 1, 1]),
      HA = new Float64Array([0, 1, 0]),
      DA = new Float64Array(4),
      qb = new Float32Array(16),
      ZA = new Float64Array(3),
      SA = new Float64Array(4);

    function Wb(WW, RW, MW) {
      WW.fov = RW.fov, WW.near = RW.near, WW.far = RW.far, WW.renderWidth = MW.renderWidth, WW.renderHeight = MW.renderHeight, (0, nA.m)(RW.holderRotation, 0, DA, 0), (0, nA.c)(LA, 0, DA, 0, RW.holderPosition, 0, qb);
      const wW = RW.bzW;
      ZA[0] = wW[0], ZA[1] = wW[1], ZA[2] = wW[2] + 1;
      const CW = WW.viewMatrix;
      (0, nA.g)(wW, ZA, HA, CW), (0, nA.f)(CW, 0, CW), (0, nA.i)(CW, qb, 0, CW), (0, nA.f)(CW, 0, CW);
      const zR = WW.worldMatrix;
      (0, nA.f)(CW, 0, zR), WW.eye[0] = zR[12], WW.eye[1] = zR[13], WW.eye[2] = zR[14], SA[0] = WW.fov, SA[1] = WW.renderWidth / WW.renderHeight, SA[2] = WW.near, SA[3] = WW.far, (0, nA.k)(SA, WW.projectionMatrix), (0, nA.i)(CW, WW.projectionMatrix, 0, WW.viewProjectionMatrix), (0, GA.g)(WW.viewProjectionMatrix, WW.frustum)
    }

    function Rb(WW, RW) {
      let MW = WW.frustumPlanes;
      MW || (MW = WW.frustumPlanes = Array.from({
        length: 6
      }, (() => new uA.c(0, 0, 0, 0))));
      for (let wW = 0; wW < 6; wW++) {
        const WW = MW[wW].normal;
        WW._x = RW[4 * wW], WW._y = RW[4 * wW + 1], WW._z = RW[4 * wW + 2], WW._isDirty = !0, MW[wW].d = RW[4 * wW + 3]
      }
    }

    function Mb(WW, RW) {
      const MW = RW.clearColor;
      WW.clearColour[0] = MW.r, WW.clearColour[1] = MW.g, WW.clearColour[2] = MW.b, WW.clearColour[3] = MW.a;
      const wW = RW.ambientColor;
      WW.ambientColour[0] = wW.r, WW.ambientColour[1] = wW.g, WW.ambientColour[2] = wW.b, WW.animationRatio = RW.animationRatio, WW.frameId = RW.frameId, WW.version++
    }

    function wb(WW) {
      const RW = WW.model.view;
      return RW.animTick = (0, OA.e)(), RW.timeMs = performance.now(), Mb(RW, WW.LC), WW.model.update(RW.frameId), RW
    }

    function Cb(WW) {
      const RW = WW.LC,
        {
          view: MW,
          ACW: wW
        } = WW.model;
      return Wb(MW, wW, RW.mC()), RW.onBeforeRenderObservable.notifyObservers(RW), Rb(RW, MW.frustum), RW.onBeforeCameraRenderObservable.notifyObservers(RW.activeCamera), wb(WW)
    }
    var zy = MW(35460),
      Ab = MW(35585),
      by = MW(35896),
      yy = MW(35898);

    function Nb(WW) {
      var RW, MW;
      const wW = (0, rR.Y)(WW);
      if (!wW || wW.diffuseTexture && (0, by.f)(WW)) return null;
      const CW = null === (RW = (0, rR.y)(wW, fW.i.name)) || void 0 === RW ? void 0 : RW.state,
        zR = null === (MW = (0, rR.y)(wW, yy.b.name)) || void 0 === MW ? void 0 : MW.state,
        AW = new Float32Array(16);
      return function(WW, RW, MW, wW) {
        var CW, zR;
        const AW = ew;
        wW.set(WW.diffuseColor, AW.diffuse), wW[AW.diffuse + 3] = WW.alpha, wW.set(WW.ambientColor, AW.ambientAndCutoff), wW[AW.ambientAndCutoff + 3] = WW.alphaCutOff, wW.set(WW.emissiveColor, AW.emissiveAndLevel), wW[AW.emissiveAndLevel + 3] = null !== (CW = null === (zR = WW.diffuseTexture) || void 0 === zR ? void 0 : zR.level) && void 0 !== CW ? CW : 1, null !== RW && void 0 !== RW && RW.animDataPerTex ? (wW[AW.anim + 1] = OA.c, wW[AW.anim + 2] = RW.animDataPerTex.length / 3 - 1) : MW && (wW[AW.anim + 1] = MW.numAnimStates, wW[AW.anim + 2] = MW.ticksPerAnimState)
      }(wW, CW, zR, AW), {
        model: wW,
        atlas: CW,
        texture: CW ? "atlas" : wW.diffuseTexture ? "single" : "none",
        animated: CW ? !!CW.animDataPerTex : !!zR,
        liquid: (0, by.g)(WW),
        customRenderMat: (0, by.f)(WW),
        uniformData: AW
      }
    }
    var eb = MW(35442);
    class Bb {
      constructor(WW) {
        this.units = WW, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var WW;
        this.buffer.destroy(), null === (WW = this.twin) || void 0 === WW || WW.destroy()
      }
    }
    class ty {
      constructor(WW, RW) {
        this.arena = WW, this.WA = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.WA = new sA(RW);
        const MW = new Bb(RW);
        MW.buffer = this.createBuffer(MW, !1), this.backings.push(MW), this.refresh()
      }
      get aR() {
        return this.WA.aR
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
        let WW = 0;
        for (const RW of this.backings) WW += RW.units * (this.arena.unitBytes + (RW.twin ? this.arena.twinUnitBytes : 0));
        return WW
      }
      holds(WW) {
        return WW.start + WW.length <= this.usable
      }
      lost(WW) {
        return this.dropped || WW.start + WW.length > this.aR
      }
      write(WW, RW) {
        const {
          device: MW,
          unitBytes: wW
        } = this.arena;
        for (const CW of this.backings) {
          const zR = (CW.units - WW.start) * wW;
          zR > 0 && MW.queue.writeBuffer(CW.buffer, WW.start * wW, RW, 0, Math.min(RW.byteLength, zR))
        }
      }
      writeLight(WW, RW) {
        const {
          device: MW,
          twinUnitBytes: wW,
          verticesPerUnit: CW
        } = this.arena, {
          light: zR,
          count: AW
        } = this.arena.twinLight(RW, Math.min(RW.length, WW.length * CW));
        for (const bR of this.backings) {
          bR.twin || (bR.twin = this.createBuffer(bR, !0));
          const RW = (bR.units - WW.start) * CW;
          RW > 0 && MW.queue.writeBuffer(bR.twin, WW.start * wW, zR, 0, Math.min(AW, RW))
        }
      }
      grow(WW) {
        this.arena.assertNotDrawing();
        const {
          device: RW,
          unitBytes: MW,
          label: wW
        } = this.arena, CW = this.backings[this.backings.length - 1], zR = new Bb(WW), AW = RW.createCommandEncoder({
          label: `${wW}-grow`
        });
        zR.buffer = this.createBuffer(zR, !1), AW.copyBufferToBuffer(CW.buffer, 0, zR.buffer, 0, CW.units * MW), CW.twin && (zR.twin = this.createBuffer(zR, !0), AW.copyBufferToBuffer(CW.twin, 0, zR.twin, 0, CW.units * this.arena.twinUnitBytes)), RW.queue.submit([AW.finish()]), this.backings.push(zR), this.WA.grow(WW)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const WW of this.backings) WW.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(WW, RW) {
        const {
          device: MW,
          unitBytes: wW,
          twinUnitBytes: CW,
          usage: zR,
          label: AW
        } = this.arena;
        MW.pushErrorScope("out-of-memory");
        const bR = MW.createBuffer({
          label: RW ? `${AW}-light` : AW,
          size: WW.units * (RW ? CW : wW),
          usage: (RW ? this.arena.twinUsage : zR) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, MW.popErrorScope().then((MW => {
          this.arena.awaitingVerdict--, this.settle(WW, RW, !MW, !0)
        }), (MW => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${AW} buffer, taken as failed: ${String(MW)}`), this.settle(WW, RW, !1, !1)
        })), bR
      }
      settle(WW, RW, MW, wW) {
        const CW = this.backings.indexOf(WW);
        if (!(this.dropped || CW < 0)) {
          if (!MW) {
            if (wW && this.arena.ranOutOfMemory(WW.units, WW.units * (RW ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === CW) return void this.drop();
            for (const WW of this.backings.splice(CW)) WW.destroy();
            return this.WA.truncate(this.backings[CW - 1].units), this.growable = !1, void this.promote()
          }
          RW ? WW.twinReady = !0 : (WW.bufferReady = !0, this.arena.allocatedBuffer(WW.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: WW
        } = this;
        let RW = 0;
        for (; RW + 1 < WW.length && WW[RW].ready && WW[RW + 1].ready;) RW++;
        for (const MW of WW.splice(0, RW)) MW.destroy();
        this.refresh()
      }
      refresh() {
        const WW = this.backings[0];
        this.buffer = WW.buffer, this.twin = WW.twinReady ? WW.twin : null, this.usable = !this.dropped && WW.bufferReady ? WW.units : 0
      }
    }
    class Tb {
      constructor(WW, RW, MW, wW) {
        let {
          verticesPerUnit: CW = 1,
          twinUsage: zR = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = WW, this.unitBytes = RW, this.usage = MW, this.label = wW, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, NR.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), RW % 4 !== 0) throw new Error(`${wW}: ${RW}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = CW, this.twinUsage = zR, this.twinValueBytes = CW > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * CW
      }
      twinLight(WW, RW) {
        if (4 === this.twinValueBytes) return this.widened.length < RW && (this.widened = new Float32Array(Math.max(RW, 2 * this.widened.length))), this.widened.set(WW.subarray(0, RW)), {
          light: this.widened,
          count: RW
        };
        const MW = RW % this.verticesPerUnit;
        if (0 === MW) return {
          light: WW,
          count: RW
        };
        const wW = RW - MW + this.verticesPerUnit;
        return this.padded.length < wW && (this.padded = new Uint16Array(Math.max(wW, 2 * this.padded.length))), this.padded.set(WW.subarray(0, RW)), this.padded.fill(0, RW, wW), {
          light: this.padded,
          count: wW
        }
      }
      allocate(WW) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), WW > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const CW of this.pages) {
          const RW = CW.WA.allocate(WW);
          if (RW >= 0) return {
            page: CW,
            start: RW,
            length: WW
          }
        }
        const RW = this.pages[this.pages.length - 1];
        if (null !== RW && void 0 !== RW && RW.canGrow) {
          const MW = Math.min(this.ceiling, Math.max(2 * RW.aR, RW.aR + WW));
          if (MW - RW.aR >= WW) return RW.grow(MW), {
            page: RW,
            start: RW.WA.allocate(WW),
            length: WW
          }
        }
        RW && RW !== this.pages[0] && 0 === RW.WA.used && RW.drop();
        const MW = Math.floor(1048576 / this.unitBytes),
          wW = new ty(this, Math.max(WW, Math.min(this.ceiling, MW)));
        return this.pages.push(wW), {
          page: wW,
          start: wW.WA.allocate(WW),
          length: WW
        }
      }
      free(WW) {
        this.assertNotDrawing();
        const {
          page: RW
        } = WW;
        RW.WA.free(WW.start, WW.length), 0 === RW.WA.used && RW !== this.pages[0] && RW !== this.pages[this.pages.length - 1] && RW.drop()
      }
      remove(WW) {
        const RW = this.pages.indexOf(WW);
        RW >= 0 && this.pages.splice(RW, 1)
      }
      ranOutOfMemory(WW, RW) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${RW}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, WW), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, WW) / 2));
        const MW = performance.now();
        MW >= this.shortageUntil && (this.forgetFailedAt = MW + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = MW + 1e3)
      }
      allocatedBuffer(WW) {
        WW >= this.failed && (this.failed = 1 / 0);
        const RW = Math.min(2 * WW, Math.floor((WW + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, RW))
      }
      stats() {
        let WW = 0,
          RW = 0,
          MW = 0,
          wW = 0;
        for (const CW of this.pages) WW += CW.aR, RW += CW.WA.used, MW += CW.hasTwin ? CW.aR * this.twinUnitBytes : 0, wW += CW.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: WW * this.unitBytes,
          usedBytes: RW * this.unitBytes,
          twinBytes: MW,
          allocatedBytes: wW
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: WW,
          maxStorageBufferBindingSize: RW
        } = this.device.limits;
        let MW = Math.floor(Math.min(67108864, WW) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (MW = Math.min(MW, Math.floor(RW / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (MW = Math.min(MW, Math.floor(RW / this.twinUnitBytes))), MW
      }
    }
    const gy = 16383;

    function iy(WW, RW, MW, wW, CW) {
      let zR = 0;
      for (let AW = MW; AW < wW; AW += gy) WW.drawIndexed(6 * Math.min(gy, wW - AW), 1, 0, RW + 4 * AW, CW), zR++;
      return zR
    }
    class Yb {
      constructor(WW, RW) {
        this.recordsGroup = RW, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const MW = QR.g.strideWithoutAtlas;
        this.vertexArena = new Tb(WW, MW, GPUBufferUsage.VERTEX, `terrain-vertices-${MW}`), this.quadArena = new Tb(WW, Ab.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const wW = (0, rM.f)(new Uint16Array(98298), gy);
        this.quadPattern = WW.createBuffer({
          label: "terrain-quad-pattern",
          size: wW.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), WW.queue.writeBuffer(this.quadPattern, 0, wW)
      }
      set(WW, RW) {
        const MW = RW.packedVertices,
          wW = MW ? this.quadArena.allocate(WW.faceCount) : this.vertexArena.allocate(WW.vertexCount);
        if (!wW) return !1;
        WW.vertices = wW;
        const CW = MW ? new Uint8Array(MW.buffer, MW.byteOffset, MW.byteLength) : new Uint8Array(RW.vertices);
        return wW.page.write(wW, CW), !0
      }
      setLight(WW, RW) {
        const {
          vertices: MW
        } = WW;
        MW && 0 !== RW.length && MW.page.live && (RW.length < WW.vertexCount ? MW.page.arena.warnOnce("shortLight", `a part's ${RW.length} light values are fewer than its ${WW.vertexCount} vertices, so its light is left as it was`) : (MW.page.writeLight(MW, RW), WW.lit = !0))
      }
      lightFullSky(WW, RW) {
        this.fullSky.length < RW && (this.fullSky = new Uint16Array(Math.max(RW, 4096)).fill(eb.k));
        for (const MW of WW) {
          const WW = MW.vertices;
          WW.page.live && (WW.page.writeLight(WW, this.fullSky), MW.lit = !0)
        }
      }
      backed(WW) {
        const {
          vertices: RW
        } = WW;
        return !!RW && RW.page.holds(RW)
      }
      lost(WW) {
        const {
          vertices: RW
        } = WW;
        return !!RW && RW.page.lost(RW)
      }
      release(WW) {
        WW.vertices && WW.vertices.page.arena.free(WW.vertices), WW.vertices = null, WW.lit = !1
      }
      setDrawing(WW) {
        this.forgetBound()
      }
      draw(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RW.faceCount;
        const zR = RW.vertices,
          AW = zR.page,
          bR = MW ? AW.twin : null;
        if (!AW.holds(zR) || MW && !bR) return 0;
        const {
          verticesPerUnit: yR
        } = AW.arena;
        let NW = zR.start * yR;
        this.boundPattern || (WW.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const eW = wW + CW;
        if (yR > 1) return AW.buffer === this.boundRecords && bR === this.boundRecordsLight || (WW.setBindGroup(1, this.recordsGroup(AW.buffer, bR)), this.boundRecords = AW.buffer, this.boundRecordsLight = bR), iy(WW, NW, wW, eW, RW.slot);
        AW.buffer !== this.boundVertices && (WW.setVertexBuffer(0, AW.buffer), this.boundVertices = AW.buffer), bR && bR !== this.boundLight && (WW.setVertexBuffer(1, bR), this.boundLight = bR);
        const BW = RW.faceCount;
        return eW <= BW ? iy(WW, NW, wW, eW, RW.slot) : iy(WW, NW, wW, BW, RW.slot) + iy(WW, NW, Math.max(wW, BW) - BW, eW - BW, RW.slot)
      }
      get buffersAwaitingVerdict() {
        let WW = 0;
        for (const RW of this.arenas()) WW += RW.awaitingVerdict;
        return WW
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Jb {
      constructor(WW, RW, MW, wW) {
        this.device = WW, this.splitBefore = RW, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = WW.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const CW = WW.createShaderModule({
          label: "scene-depth-copy",
          code: (zR = MW._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${zR?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var zR;
        WW.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: CW,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: CW,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((WW => {
          this.pipeline = WW, this.building = !1
        }), (WW => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", WW)
        })), MW._executeWithTransmission = () => this.execute(MW, wW)
      }
      get compiling() {
        return this.building
      }
      setWanted(WW) {
        this.wanted = WW
      }
      setPlanes(WW, RW) {
        WW === this.near && RW === this.far || (this.near = WW, this.far = RW, this.unproject[0] = WW / (RW - WW), this.unproject[1] = RW * WW / (RW - WW), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var WW, RW;
        return null !== (WW = null === (RW = this.copy) || void 0 === RW ? void 0 : RW.view) && void 0 !== WW ? WW : null
      }
      execute(WW, RW) {
        var MW;
        null === (MW = this.retired) || void 0 === MW || MW.destroy(), this.retired = null;
        const wW = WR(RW),
          CW = WW._transparentBindings,
          zR = this.wanted && this.pipeline ? this.splitIndex(CW) : -1,
          AW = WW._colorAttachment,
          bR = AW.resolveTarget;
        zR >= 0 && (AW.resolveTarget = void 0, KA(WW, !0));
        let yR = wW.beginRenderPass(WW._renderPassDescriptor);
        yR.setBindGroup(0, WW._sceneBG);
        let NW = this.drawList(yR, RW, WW._opaqueBindings, 0, WW._opaqueBindings.length);
        if (NW += this.drawList(yR, RW, WW._directBindings, 0, WW._directBindings.length), NW += this.drawList(yR, RW, CW, 0, zR >= 0 ? zR : CW.length), yR.end(), zR < 0) return NW;
        KA(WW);
        const eW = WW._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: BW,
            stencilLoadOp: tR
          } = eW,
          TW = AW.loadOp;
        AW.resolveTarget = bR;
        try {
          this.copyDepth(wW, WW), AW.loadOp = "load", eW.depthLoadOp = "load", tR && (eW.stencilLoadOp = "load"), yR = wW.beginRenderPass(WW._renderPassDescriptor), yR.setBindGroup(0, WW._sceneBG), NW += this.drawList(yR, RW, CW, zR, CW.length), yR.end()
        } finally {
          AW.loadOp = TW, eW.depthLoadOp = BW, eW.stencilLoadOp = tR
        }
        return NW
      }
      splitIndex(WW) {
        for (let RW = 0; RW < WW.length; RW++)
          if (WW[RW].renderable === this.splitBefore) return RW;
        return -1
      }
      drawList(WW, RW, MW, wW, CW) {
        let zR = null,
          AW = 0;
        for (let bR = wW; bR < CW; bR++) {
          const wW = MW[bR],
            CW = wW.renderable.mesh;
          CW && !1 === CW.visible || (wW.pipeline !== zR && (WW.setPipeline(wW.pipeline), zR = wW.pipeline), AW += wW.draw(WW, RW))
        }
        return AW
      }
      copyDepth(WW, RW) {
        var MW, wW;
        const CW = (null !== (MW = RW._config.depth) && void 0 !== MW ? MW : RW._config.rt)._depthTexture,
          zR = (null === (wW = this.copy) || void 0 === wW ? void 0 : wW.source) === CW ? this.copy : this.remakeCopy(CW),
          AW = WW.beginRenderPass(zR.pass);
        AW.setPipeline(this.pipeline), AW.setBindGroup(0, zR.bindGroup), AW.draw(3), AW.end()
      }
      remakeCopy(WW) {
        var RW, MW;
        this.retired = null !== (RW = null === (MW = this.copy) || void 0 === MW ? void 0 : MW.texture) && void 0 !== RW ? RW : null;
        const wW = this.device.createTexture({
            label: "scene-depth",
            size: [WW.width, WW.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          CW = wW.createView(),
          zR = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: WW.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          AW = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: CW,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: WW,
          texture: wW,
          view: CW,
          bindGroup: zR,
          pass: AW
        }, this.copy
      }
    }
    const Pb = "rgba8unorm";

    function Ib(WW) {
      return WW ? 15 : 1
    }
    class ob {
      constructor(WW, RW, MW, wW) {
        this.device = WW, this.terrain = wW, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = RW._targetSignature._sampleCount > 1, this.cameraBuffer = WW.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = WW.createBindGroupLayout({
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
        const CW = WW.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = WW.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: CW,
          entries: []
        });
        const zR = WW.createShaderModule({
          label: "sun-shadow-mask",
          code: (AW = this.edge, `${(0,cM.B)()}${EM({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${AW?cwW:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Ib(AW)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${AW?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var AW;
        WW.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: WW.createPipelineLayout({
            bindGroupLayouts: [this.layout, CW, CW, Uz(WW, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: zR,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: zR,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((WW => {
          this.pipeline = WW, this.building = !1
        }), (WW => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", WW)
        }));
        const bR = RW._executeWithTransmission;
        RW._executeWithTransmission = WW => this.execute(RW, MW, (() => bR ? bR(WW) : function(WW, RW) {
          const MW = WR(RW).beginRenderPass(WW._renderPassDescriptor);
          MW.setBindGroup(0, WW._sceneBG);
          let wW = lb(MW, RW, WW._opaqueBindings);
          return wW += lb(MW, RW, WW._directBindings), wW += lb(MW, RW, WW._transparentBindings), MW.end(), wW
        }(RW, MW)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var WW, RW;
        return null !== (WW = null === (RW = this.targets) || void 0 === RW ? void 0 : RW.maskView) && void 0 !== WW ? WW : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(WW) {
        ! function(WW, RW) {
          const MW = WW.worldMatrix,
            wW = WW.projectionMatrix,
            CW = 1 / wW[0],
            zR = 1 / wW[5],
            AW = WW.far * WW.near / (WW.far - WW.near);
          RW[0] = WW.eye[0], RW[1] = WW.eye[1], RW[2] = WW.eye[2], RW[3] = 2 ** -23 / AW, RW[4] = MW[0] * CW, RW[5] = MW[1] * CW, RW[6] = MW[2] * CW, RW[7] = AW, RW[8] = MW[4] * zR, RW[9] = MW[5] * zR, RW[10] = MW[6] * zR, RW[11] = WW.near / (WW.far - WW.near), RW[12] = MW[8], RW[13] = MW[9], RW[14] = MW[10], RW[15] = 0
        }(WW, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(WW, RW, MW) {
        if (this.retire(), !this.terrain.readsMask) return MW();
        const wW = this.targetsFor(WW),
          CW = WR(RW),
          zR = WW._renderPassDescriptor.depthStencilAttachment;
        this.edge || (wW.prepass.depthStencilAttachment.view = zR.view);
        const AW = this.terrain.drawPrepass(CW, wW.prepass, WW._sceneBG);
        if (0 === AW) return MW();
        if (this.trace(CW, wW), this.edge) return AW + 1 + MW();
        const {
          depthLoadOp: bR,
          stencilLoadOp: yR
        } = zR;
        zR.depthLoadOp = "load", yR && (zR.stencilLoadOp = "load");
        try {
          return AW + 1 + MW()
        } finally {
          zR.depthLoadOp = bR, zR.stencilLoadOp = yR
        }
      }
      trace(WW, RW) {
        const MW = this.terrain.sunShadowGroup(),
          wW = WW.beginRenderPass(RW.trace);
        this.pipeline && MW && (wW.setPipeline(this.pipeline), wW.setBindGroup(0, RW.bindGroup), wW.setBindGroup(1, this.empty), wW.setBindGroup(2, this.empty), wW.setBindGroup(3, MW), wW.draw(3)), wW.end()
      }
      retire() {
        const WW = this.retired;
        var RW;
        WW && (WW.mask.destroy(), WW.normals.destroy(), null === (RW = WW.depth) || void 0 === RW || RW.destroy(), this.retired = null)
      }
      targetsFor(WW) {
        var RW, MW;
        const wW = (null !== (RW = WW._config.depth) && void 0 !== RW ? RW : WW._config.rt)._depthTexture;
        return (null === (MW = this.targets) || void 0 === MW ? void 0 : MW.source) === wW ? this.targets : this.remake(WW, wW)
      }
      remake(WW, RW) {
        var MW;
        this.retired = this.targets;
        const wW = [RW.width, RW.height],
          CW = this.device.createTexture({
            label: "sun-shadow-mask",
            size: wW,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          zR = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: wW,
            format: Pb,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          AW = null !== (MW = WW._targetSignature._depthStencilFormat) && void 0 !== MW ? MW : RW.format,
          bR = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: wW,
            format: AW,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          yR = WW._renderPassDescriptor.depthStencilAttachment,
          NW = AW.includes("stencil"),
          eW = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: zR.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: bR ? bR.createView() : yR.view,
              depthClearValue: yR.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...NW ? {
                stencilClearValue: yR.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          BW = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== bR && void 0 !== bR ? bR : RW).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: zR.createView()
            }]
          }),
          tR = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: CW.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Ib(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: RW,
          mask: CW,
          maskView: CW.createView(),
          normals: zR,
          depth: bR,
          bindGroup: BW,
          prepass: eW,
          trace: tR
        }, this.targets
      }
    }

    function lb(WW, RW, MW) {
      let wW = null,
        CW = 0;
      for (const zR of MW) {
        const MW = zR.renderable.mesh;
        MW && !1 === MW.visible || (zR.pipeline !== wW && (WW.setPipeline(zR.pipeline), wW = zR.pipeline), CW += zR.draw(WW, RW))
      }
      return CW
    }
    const Fb = 6e4,
      fb = {
        status: "ok"
      },
      Qb = {
        status: "skipped"
      };
    async function ry(WW, RW) {
      const {
        isCancelled: MW
      } = WW;
      if (MW()) return {
        status: "JA"
      };
      const {
        target: wW
      } = RW;
      if (!wW) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const CW = [],
        zR = Promise.all(Array.from(new Set(WW.materials), (async MW => {
          CW.push(await async function(WW, RW, MW, wW) {
            const CW = {
              lighting: WW.lighting,
              dirLightCount: Math.min(WW.dirLightCount, 4),
              ww: WW.runtime
            };
            try {
              const zR = RW.material(wW);
              return zR && bC(RW.programKey(zR, !1, CW)) ? (await zR.ready, WW.isCancelled() ? fb : zR.bindGroupLayout ? await async function(WW, RW, MW, wW) {
                const {
                  device: CW
                } = WW;
                let zR, AW;
                CW.pushErrorScope("validation");
                try {
                  zR = WW.pipelineBuild(RW, MW, wW)
                } finally {
                  AW = CW.popErrorScope().catch((() => null))
                }
                const [bR, yR] = await Promise.all([AW, zR.built.then((() => null), (WW => null !== WW && void 0 !== WW ? WW : new Error("pipeline failed")))]);
                if (!bR && !yR) return fb;
                const NW = await cy(zR.module),
                  eW = NW.length > 0 ? NW.map((WW => `${zR.name} ${WW.lineNum}:${WW.linePos}: ${WW.message}`)).join("\n") : `${zR.name}: ${Xb(null!==yR&&void 0!==yR?yR:bR)}`;
                return {
                  status: "failed",
                  material: RW.model.name,
                  message: eW
                }
              }(RW, zR, RW.programKey(zR, "none" !== zR.texture, CW), MW): (console.warn(`Shader pack: skipped the compile check for "${wW.name}", whose textures failed to load`), Qb)) : fb
            } catch (zR) {
              return {
                status: "failed",
                material: wW.name,
                message: Xb(zR)
              }
            }
          }(WW, RW, wW, MW))
        }))),
        AW = function(WW, RW) {
          let MW, wW, CW = !1;
          const zR = new Promise((zR => {
            var AW;
            MW = setTimeout((() => {
              zR("timeout")
            }), null !== (AW = RW.timeoutMs) && void 0 !== AW ? AW : Fb), wW = setInterval((() => {
              RW.isCancelled() && zR("JA")
            }), 50), WW.lost.then((() => {
              CW = !0, zR("lost")
            }))
          }));
          return {
            signal: zR,
            lost: () => CW,
            dispose: () => {
              clearTimeout(MW), clearInterval(wW)
            }
          }
        }(RW.device, WW);
      let bR;
      try {
        bR = await Promise.race([zR.then((() => "done")), AW.signal])
      } finally {
        AW.dispose()
      }
      if ("JA" === bR || MW()) return {
        status: "JA"
      };
      const yR = CW.find((WW => "failed" === WW.status));
      return yR && "lost" !== bR && !AW.lost() && await new Promise((WW => {
        setTimeout(WW, 0)
      })), "lost" === bR || AW.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : yR ? {
        status: "failed",
        failure: {
          material: yR.material,
          message: yR.message
        }
      } : "timeout" === bR ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(NW=WW.timeoutMs)&&void 0!==NW?NW:Fb)/1e3} s`), {
        status: "skipped"
      }) : CW.some((WW => "skipped" === WW.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var NW
    }
    async function cy(WW) {
      if (!WW) return [];
      try {
        return (await WW.getCompilationInfo()).messages.filter((WW => "error" === WW.type))
      } catch {
        return []
      }
    }

    function Xb(WW) {
      var RW;
      return null !== (RW = null === WW || void 0 === WW ? void 0 : WW.message) && void 0 !== RW ? RW : String(WW)
    }

    function jy(WW, RW, MW, wW) {
      bC(WW) ? cy(MW).then((WW => {
        const [MW] = WW;
        nC("terrain", RW, wW, MW ? `${MW.lineNum}:${MW.linePos} error: ${MW.message}` : null)
      })) : nC("terrain", RW, wW)
    }
    var ky = MW(35592),
      ay = MW(35605),
      sb = MW(35615),
      db = MW(35530);

    function pb(WW, RW, MW, wW, CW) {
      const zR = Math.hypot(MW[0], MW[1], MW[2]);
      if (!(zR > 0)) return;
      const AW = [MW[0] / zR, MW[1] / zR, MW[2] / zR],
        bR = [Math.floor(RW[0]), Math.floor(RW[1]), Math.floor(RW[2])],
        yR = [0, 0, 0],
        NW = [1 / 0, 1 / 0, 1 / 0],
        eW = [1 / 0, 1 / 0, 1 / 0];
      for (let TW = 0; TW < 3; TW++) AW[TW] > 0 ? (yR[TW] = 1, NW[TW] = (bR[TW] + 1 - RW[TW]) / AW[TW], eW[TW] = 1 / AW[TW]) : AW[TW] < 0 && (yR[TW] = -1, NW[TW] = (bR[TW] - RW[TW]) / AW[TW], eW[TW] = -1 / AW[TW]);
      const {
        dw: BW
      } = WW;
      let tR = WW.wwW(bR[0], bR[1], bR[2]);
      for (;;) {
        const RW = NW[0] < NW[1] ? NW[0] < NW[2] ? 0 : 2 : NW[1] < NW[2] ? 1 : 2;
        if (NW[RW] > wW) return;
        const MW = yR[RW] > 0 ? bR[RW] + 1 : bR[RW];
        bR[RW] += yR[RW], NW[RW] += eW[RW];
        const zR = WW.wwW(bR[0], bR[1], bR[2]),
          AW = zR !== tR && !(WW.opaque[tR] && WW.opaque[zR]);
        if (AW) {
          const wW = [bR[0], bR[1], bR[2]];
          wW[RW] = MW;
          const zR = Math.floor(wW[0] / BW),
            AW = Math.floor(wW[1] / BW),
            yR = Math.floor(wW[2] / BW);
          !WW.isDrawn(zR, AW, yR) && WW.hasParts(zR, AW, yR) && CW.add(`${zR},${AW},${yR}`)
        }
        if (AW && WW.occluders[zR]) return;
        tR = zR
      }
    }

    function hb(WW, RW) {
      return WW.group - RW.group || WW.nearest - RW.nearest
    }
    class Ub {
      constructor(WW, RW) {
        this.device = WW, this.FQ = RW, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var WW;
        const RW = null !== (WW = this.free.pop()) && void 0 !== WW ? WW : this.next++;
        if (8 * RW >= this.data.length) {
          const WW = new Float32Array(2 * this.data.length);
          WW.set(this.data), this.data = WW, this.words = new Uint32Array(WW.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.FQ()
        }
        return RW
      }
      release(WW) {
        this.free.push(WW)
      }
      set(WW, RW, MW, wW, CW) {
        const zR = 8 * WW + Jw;
        this.data[zR] = RW, this.data[zR + 1] = MW, this.data[zR + 2] = wW, this.setVisibility(WW, CW)
      }
      setVisibility(WW, RW) {
        this.data[8 * WW + Pw] = RW, this.markDirty(WW, WW)
      }
      setFaces(WW, RW, MW) {
        const wW = 8 * WW;
        this.words[wW + Iw] = RW, this.words[wW + ow] = MW, this.markDirty(WW, WW)
      }
      markDirty(WW, RW) {
        this.dirtyMin = Math.min(this.dirtyMin, WW), this.dirtyMax = Math.max(this.dirtyMax, RW)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Eb = Yw,
      Vb = !0;
    const my = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Eb.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      xy = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class vy {
      constructor(WW) {
        this.device = WW, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Nw), this.dirLightUniforms = this.frameUniforms.subarray(yC.dirLights, yC.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, NR.d)(), this.faceGroups = !0, this.visibilityGraph = Vb, this.visCull = Vb, this.visCheck = !1, this.visCullMinDistance = sb.g, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new nb, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.ww = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Yb(WW, ((WW, RW) => this.recordsGroup(WW, RW))), this.slots = new Ub(WW, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = RR(WW), this.frameLayout = WW.createBindGroupLayout({
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
        }), this.frameBuffer = WW.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = WW.createSampler({
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
          bind: (WW, RW) => this.createBinding(this.opaqueRenderable, RW, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (WW, RW) => this.createBinding(this.transparentRenderable, RW, !0)
        }
      }
      installSceneDepth(WW, RW) {
        this.sceneDepth = new Jb(this.device, this.transparentRenderable, WW, RW)
      }
      createFrameBindGroup() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== WW && void 0 !== WW ? WW : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== RW && void 0 !== RW ? RW : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(WW, RW) {
        const MW = null !== RW && void 0 !== RW ? RW : WW;
        let wW = this.recordsGroups.get(MW);
        return wW || (wW = this.createFrameBindGroup(WW, RW), this.recordsGroups.set(MW, wW)), wW
      }
      setChunkMesh(WW, RW, MW) {
        var wW;
        let CW = this.chunks.get(WW);
        CW ? this.geometry.release(CW) : (CW = {
          mesh: WW,
          slot: this.slots.allocate(),
          origin: [MW[0], MW[1], MW[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: WW.visibility,
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
        }, this.chunks.set(WW, CW), this.writeSlot(CW)), CW.material = WW.material ? this.materialFor(WW.material) : null, CW.packed = !!RW.packedVertices, CW.vertexCount = (0, Ab.h)(RW), CW.faceCount = CW.vertexCount / 4;
        const zR = null !== (wW = RW.faceGroups) && void 0 !== wW ? wW : null;
        if (CW.faceGroups = zR, zR) {
          const WW = ky.p;
          CW.planePX = zR[WW], CW.planeNX = zR[WW + 1], CW.planePY = zR[WW + 2], CW.planeNY = zR[WW + 3], CW.planePZ = zR[WW + 4], CW.planeNZ = zR[WW + 5]
        }
        this.drawWhole(CW), 0 !== CW.faceCount && (this.geometry.set(CW, RW) ? (CW.packed && this.slots.setFaces(CW.slot, CW.vertices.start + CW.faceCount, CW.faceCount), RW.Yw && this.setChunkMeshLight(WW, RW.Yw)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${CW.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(WW, RW) {
        const MW = this.chunks.get(WW);
        MW && this.geometry.setLight(MW, RW)
      }
      drawStats() {
        let WW = this.transparent.length;
        for (const RW of this.opaqueBatches) WW += RW.meshes.length;
        return {
          drawn: WW,
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
      removeChunkMesh(WW) {
        const RW = this.chunks.get(WW);
        RW && (this.geometry.release(RW), this.slots.release(RW.slot), this.chunks.delete(WW))
      }
      remeshLost(WW, RW) {
        this.geometry.release(RW), RW.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** RW.lostRemeshes++);
        const MW = WW.zM,
          [wW, CW, zR] = MW.eeW(RW.origin[0], RW.origin[1], RW.origin[2]),
          AW = MW.FC.fC(wW, CW, zR);
        AW && (AW.oC = !0, AW.az = !0, MW.lC(AW, !1))
      }
      chooseFaceRanges(WW, RW, MW) {
        const wW = this.faceRanges;
        WW.faceMask = MW, WW.rangeCount = (0, ay.k)(RW, MW, wW), WW.first0 = wW[0], WW.count0 = wW[1], WW.first1 = wW[2], WW.count1 = wW[3]
      }
      drawWhole(WW) {
        WW.faceMask = -1, WW.faceEpoch = -1, WW.rangeCount = 1, WW.first0 = 0, WW.count0 = WW.faceCount
      }
      writeSlot(WW) {
        const [RW, MW, wW] = this.originOffset;
        this.slots.set(WW.slot, WW.origin[0] - RW, WW.origin[1] - MW, WW.origin[2] - wW, WW.visibility)
      }
      materialFor(WW) {
        const RW = this.materials.get(WW);
        if (RW) return RW;
        const MW = Nb(WW);
        if (!MW) return this.warnOnce(`material:${WW.name}`, `Lite terrain cannot draw material "${WW.name}"; its chunks are skipped.`), null;
        const {
          model: wW,
          atlas: CW,
          texture: zR,
          animated: AW,
          uniformData: bR
        } = MW, yR = {
          id: this.materials.size,
          model: wW,
          texture: zR,
          animated: AW,
          uniformData: bR,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${WW.name}`,
            size: bR.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: MW.liquid,
          customRenderMat: MW.customRenderMat,
          atlasCount: 0,
          XCW: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(WW, yR), this.device.queue.writeBuffer(yR.uniformBuffer, 0, bR), yR.ready = this.createMaterialBindGroup(yR, CW).catch((RW => {
          console.error(`Lite terrain failed to load the textures of material "${WW.name}"`, RW)
        })), yR
      }
      materialLayout(WW) {
        const RW = function(WW) {
            const RW = ["uniforms"];
            if ("atlas" === WW.texture) {
              WW.animated && RW.push("animData"), RW.push("sampler");
              for (let MW = 0; MW < WW.atlasCount; MW++) RW.push("textureArray")
            } else "single" === WW.texture && RW.push("sampler", "texture");
            return RW
          }(WW),
          MW = RW.join(",");
        let wW = this.materialLayouts.get(MW);
        if (!wW) {
          const WW = GPUShaderStage.FRAGMENT;
          wW = this.device.createBindGroupLayout({
            label: `terrain-material-${MW}`,
            entries: RW.map(((RW, MW) => {
              switch (RW) {
                case "uniforms":
                  return {
                    binding: MW, visibility: GPUShaderStage.VERTEX | WW, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: MW, visibility: GPUShaderStage.VERTEX | WW, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: MW, visibility: WW, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: MW, visibility: WW, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: MW, visibility: WW, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(MW, wW)
        }
        return wW
      }
      async createMaterialBindGroup(WW, RW) {
        const MW = [{
          buffer: WW.uniformBuffer
        }];
        if (RW) {
          const {
            urls: wW,
            pixels: CW,
            layerWidth: zR
          } = RW.sources, AW = await Promise.all(wW.map(((WW, RW) => {
            var MW;
            return VC(this.device, WW, null !== (MW = null === CW || void 0 === CW ? void 0 : CW[RW]) && void 0 !== MW ? MW : null, zR)
          })));
          WW.atlasCount = AW.length, WW.XCW = AW[0].layerWidth, WW.atlasLayers = AW[0].layers, RW.animDataPerTex && MW.push({
            buffer: kz(this.device, Float32Array.from(RW.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), MW.push(this.sampler);
          for (const WW of AW) MW.push(WW.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === WW.texture) {
          const {
            url: RW
          } = WW.model.diffuseTexture.source, {
            pixels: wW,
            width: CW,
            height: zR
          } = await UC(RW);
          MW.push(this.sampler), MW.push(sC(this.device, wW, CW, zR, 1, `terrain-${RW}`).createView({
            dimension: "2d"
          }))
        }
        const wW = this.materialLayout(this.programKey(WW, !1));
        WW.bindGroupLayout = wW, WW.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${WW.model.name}`,
          layout: wW,
          entries: MW.map(((WW, RW) => ({
            binding: RW,
            resource: WW
          })))
        })
      }
      programKey(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const wW = MW ? MW.lighting : this.lighting,
          CW = MW ? MW.ww : this.ww,
          zR = {
            texture: WW.texture,
            atlasCount: WW.atlasCount,
            XCW: WW.XCW,
            atlasLayers: WW.atlasLayers,
            animated: WW.animated,
            alphaTest: WW.model.transparencyMode === rR.q.alphaTest,
            lighting: wW,
            dirLightCount: MW ? MW.dirLightCount : this.dirLightCount,
            packed: RW
          };
        if (!CW) return zR;
        const AW = this.shaderPackFields(WW, CW),
          bR = "atlas" === WW.texture && WW.model.transparencyMode === rR.q.opaque && ww(AW.packVariant);
        return {
          ...zR,
          ...AW,
          alphaTest: zR.alphaTest || bR
        }
      }
      shaderPackFields(WW, RW) {
        return WW.customRenderMat ? Rw : function(WW, RW) {
          if (!WW) return Rw;
          const MW = WW.defineFor(RW ? "liquid" : "terrain");
          return 0 === MW ? Rw : {
            packVariant: MW,
            liquid: RW
          }
        }(RW, WW.liquid)
      }
      isBlended(WW) {
        return WW.model.transparencyMode === rR.q.alphaBlend
      }
      shaderModule(WW, RW) {
        let MW = this.modules.get(WW);
        return MW || (MW = this.device.createShaderModule({
          label: RW,
          code: WW
        }), this.modules.set(WW, MW)), MW
      }
      pipelineFor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!WW.bindGroupLayout) return null;
        const CW = this.programKey(WW, RW);
        if (!wW) return this.pipelineOf(WW, CW, MW);
        const zR = {
            ...CW,
            resting: wW
          },
          AW = this.pipelineId(WW, zR, MW),
          bR = this.pipelines.get(AW);
        if (bR) return bR;
        const yR = this.pipelineOf(WW, CW, MW);
        return yR && void 0 === bR && this.startPipeline(AW, WW, zR, MW), yR
      }
      pipelineOf(WW, RW, MW) {
        const wW = this.pipelineId(WW, RW, MW),
          CW = this.pipelines.get(wW);
        return void 0 !== CW ? CW : (this.startPipeline(wW, WW, RW, MW), null)
      }
      pipelineId(WW, RW, MW) {
        return Kb(RW, this.isBlended(WW), WW.model.backFaceCulling, MW)
      }
      pipelineBuild(WW, RW, MW) {
        var wW;
        const CW = this.pipelineId(WW, RW, MW);
        return null !== (wW = this.builds.get(CW)) && void 0 !== wW ? wW : this.startPipeline(CW, WW, RW, MW)
      }
      startPipeline(WW, RW, MW, wW) {
        var CW;
        this.pipelines.set(WW, null);
        const zR = Xw(MW),
          AW = this.isBlended(RW),
          bR = this.shadowMask && wW._depthStencilFormat ? function(WW, RW, MW, wW) {
            if (void 0 === WW.packVariant || WW.liquid || RW) return "none";
            const CW = (0, XR.f)(WW.packVariant);
            return null === CW || void 0 === CW || !CW.sunShadow || !hM(CW, MW) || CW.discards || WW.alphaTest && ww(WW.packVariant) ? "none" : wW ? "edge" : "plain"
          }(MW, AW, !!this.sunShadow, wW._sampleCount > 1) : "none";
        let yR;
        try {
          yR = jC(MW, !!this.sunShadow, bR)
        } catch (YW) {
          if (!bC(MW)) throw YW;
          return this.failedPackBuild(WW, MW, zR, YW)
        }
        const NW = this.shaderModule(yR, zR),
          eW = [];
        MW.packed || (eW.push(function(WW, RW) {
          const MW = [{
            shaderLocation: Eb.position,
            offset: QR.g.Iw,
            format: "float32x3"
          }, {
            shaderLocation: Eb.normal,
            offset: QR.g.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Eb.color,
            offset: QR.g.colorOffset,
            format: "unorm8x4"
          }];
          return WW && MW.push({
            shaderLocation: Eb.uv,
            offset: QR.g.uvOffset,
            format: "float32x2"
          }), RW && MW.push({
            shaderLocation: Eb.blockFlagWords,
            offset: QR.g.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: QR.g.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: MW
          }
        }("none" !== MW.texture, bC(MW))), MW.lighting && eW.push(my));
        const BW = RW.model.backFaceCulling,
          tR = {
            label: zR,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, RW.bindGroupLayout, ...mA(this.device, MW, !!this.sunShadow, "none" !== bR)]
            }),
            vertex: {
              module: NW,
              entryPoint: "mainVertex",
              buffers: eW
            },
            fragment: qR({
              module: NW,
              entryPoint: "mainFragment"
            }, wW, AW ? xy : null),
            depthStencil: wW._depthStencilFormat ? {
              format: wW._depthStencilFormat,
              depthCompare: null !== (CW = wW._depthCompare) && void 0 !== CW ? CW : MR,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: wW._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: BW ? "back" : "none"
            }
          },
          TW = MW.resting ? 0 : 1;
        this.compiling += TW;
        const gR = "none" === bR ? this.device.createRenderPipelineAsync(tR) : this.startMaskPipelines(NW, tR, "edge" === bR);
        gR.then((RW => {
          this.compiling -= TW, this.pipelines.set(WW, RW)
        }), (WW => {
          this.compiling -= TW, console.error(`Lite terrain pipeline ${zR} failed`, WW), jy(MW, zR, NW, WW)
        }));
        const iR = {
          name: zR,
          module: NW,
          built: gR
        };
        return this.builds.set(WW, iR), iR
      }
      startMaskPipelines(WW, RW, MW) {
        const wW = RW.depthStencil,
          CW = this.device.createRenderPipelineAsync(MW ? RW : {
            ...RW,
            depthStencil: {
              ...wW,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          zR = this.device.createRenderPipelineAsync({
            ...RW,
            label: `${RW.label}-prepass`,
            fragment: {
              module: WW,
              entryPoint: "prepassFragment",
              targets: [{
                format: Pb
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([CW, zR]).then((WW => {
          let [RW, MW] = WW;
          return this.prepassOf.set(RW, MW), this.maskPipelines++, RW
        }))
      }
      failedPackBuild(WW, RW, MW, wW) {
        console.error(`Lite terrain pipeline ${MW} failed`, wW), jy(RW, MW, null, wW);
        const CW = Promise.reject(wW);
        CW.catch((() => {}));
        const zR = {
          name: MW,
          module: null,
          built: CW
        };
        return this.builds.set(WW, zR), zR
      }
      checkShaderPack(WW) {
        return ry(WW, {
          device: this.device,
          target: this.target,
          material: WW => this.materialFor(WW),
          programKey: (WW, RW, MW) => this.programKey(WW, RW, MW),
          pipelineBuild: (WW, RW, MW) => this.pipelineBuild(WW, RW, MW)
        })
      }
      createBinding(WW, RW, MW) {
        return this.target = RW, {
          renderable: WW,
          pipeline: AR(this.device, RW),
          draw: WW => {
            this.geometry.setDrawing(!0);
            try {
              return MW ? this.drawTransparent(WW, RW) : this.drawOpaque(WW, RW)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(WW, RW) {
        var MW, wW, CW, zR;
        const {
          BR: AW
        } = WW;
        this.lighting = WW.vz;
        const bR = (0, zy.v)(RW);
        this.dirLightCount = Math.min(bR, 4), this.ww = null !== (MW = AW.ww) && void 0 !== MW ? MW : null, bR > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(WW, RW), this.animateMaterials(RW.animTick);
        const yR = AW.XR,
          NW = yR[0] !== this.originOffset[0] || yR[1] !== this.originOffset[1] || yR[2] !== this.originOffset[2];
        NW && (this.originOffset[0] = yR[0], this.originOffset[1] = yR[1], this.originOffset[2] = yR[2]);
        const eW = RW.eye;
        this.eye[0] = eW[0], this.eye[1] = eW[1], this.eye[2] = eW[2], this.writeShaderPackInputs();
        const BW = RW.projectionMatrix,
          tR = 0 === BW[15];
        let TW = 0;
        (NW || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: gR
        } = this;
        bM(this.transparentRenderable._worldCenter, RW, CR), this.resetBatches(tR), this.transparent.length = 0, this.unlit.length = 0;
        const iR = AW.zM.fAW,
          YW = iR / 2 * Math.sqrt(3);
        let JW = 0;
        const PW = !!this.ww && Mw(this.ww.defineFor("liquid"));
        let IW = !1;
        const oW = null !== (wW = null === (CW = AW.JsW) || void 0 === CW ? void 0 : CW.visibility) && void 0 !== wW ? wW : null,
          lW = this.visCull && tR && 0 === this.compiling && null !== oW && AW.zM.lNW[0] >= this.visCullMinDistance ? this.target : null,
          FW = this.visPassable,
          fW = this.visCandidates,
          QW = this.visCandidateBatches;
        FW.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let rR = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let cR = 0;
        const XW = (WW, MW) => {
          if (!MW) return this.transparent.push(WW), void(cR += 2 * WW.faceCount);
          if (null !== WW.faceGroups && MW.faceCull) {
            if (0 === TW && (TW = (0, ay.e)(BW, RW.renderWidth, RW.renderHeight), TW !== this.faceFocalPx && (this.faceFocalPx = TW, gR = ++this.faceEpoch)), WW.faceEpoch !== gR) {
              WW.faceEpoch = gR;
              const RW = Math.sqrt(WW.distance) + YW,
                MW = (0, ay.h)(WW.planePX, WW.planeNX, WW.planePY, WW.planeNY, WW.planePZ, WW.planeNZ, this.eye[0] - (WW.origin[0] - this.originOffset[0]), this.eye[1] - (WW.origin[1] - this.originOffset[1]), this.eye[2] - (WW.origin[2] - this.originOffset[2]), (0, ay.g)(RW, TW));
              MW !== WW.faceMask && this.chooseFaceRanges(WW, WW.faceGroups, MW)
            }
            if (0 === WW.rangeCount) return
          } else - 1 !== WW.faceMask && this.drawWhole(WW);
          MW.meshes.push(WW), cR += 2 * ((WW.rangeCount > 0 ? WW.count0 : 0) + (WW.rangeCount > 1 ? WW.count1 : 0))
        };
        for (const kR of this.chunks.values()) {
          NW && this.writeSlot(kR);
          const WW = kR.mesh.visibility;
          WW !== kR.visibility && (kR.visibility = WW, this.slots.setVisibility(kR.slot, WW));
          const {
            material: MW
          } = kR;
          this.geometry.lost(kR) && performance.now() >= kR.lostRetryAt && this.remeshLost(AW, kR);
          const wW = !(null === MW || void 0 === MW || !MW.bindGroup) && this.geometry.backed(kR),
            CW = wW && this.lighting && !kR.vertices.page.twin;
          if (lW && (Number.isNaN(kR.key) && (kR.ci = Math.floor(kR.origin[0] / iR), kR.cj = Math.floor(kR.origin[1] / iR), kR.ck = Math.floor(kR.origin[2] / iR), kR.key = (0, db.j)(kR.ci, kR.cj, kR.ck)), (!wW || WW < 1 || CW || !this.batchDraws(MW, kR.packed, lW)) && this.visSeeThrough(kR, lW) && FW.add(kR.key)), !wW) continue;
          CW || (kR.lostRemeshes = 0);
          const zR = kR.origin[0] - this.originOffset[0],
            bR = kR.origin[1] - this.originOffset[1],
            yR = kR.origin[2] - this.originOffset[2];
          if (!(0, GA.d)(RW.frustum, zR, bR, yR, iR)) continue;
          const eW = zR + iR / 2 - this.eye[0],
            BW = bR + iR / 2 - this.eye[1],
            TW = yR + iR / 2 - this.eye[2];
          if (kR.distance = eW * eW + BW * BW + TW * TW, this.lighting && !kR.lit && (JW = Math.max(JW, kR.vertexCount), this.unlit.push(kR)), CW) continue;
          const gR = this.isBlended(MW) ? null : this.batchFor(MW, kR.packed, kR.vertices.page, 1 === WW, tR);
          lW ? (fW[rR] = kR, QW[rR++] = gR) : XW(kR, gR)
        }
        const jR = lW ? this.sweepVisibility(WW, RW, oW) : null;
        null === (zR = (0, Xz.u)(AW)) || void 0 === zR || zR.update(RW.frustum, this.originOffset, iR, jR);
        for (let kR = 0; kR < rR; kR++) {
          const WW = fW[kR];
          !jR || jR.isDrawn(WW.ci, WW.cj, WW.ck) ? XW(WW, QW[kR]) : (this.visCulledParts++, this.visCulledTriangles += 2 * WW.faceCount)
        }
        for (const kR of this.transparent) IW ||= PW && kR.material.liquid && !kR.material.customRenderMat;
        this.submittedTriangles = cR, jR && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(WW, RW, jR)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(IW) : IW && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && JW > 0 && this.geometry.lightFullSky(this.unlit, JW);
        for (const kR of this.opaqueBatches) this.chunkSorter.sort(kR.meshes, 1) || kR.meshes.sort(ub);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Ob)
      }
      sweepVisibility(WW, RW, MW) {
        const {
          zM: wW
        } = WW.BR, CW = wW.fAW, zR = this.visPassable, AW = this.eye[0] + this.originOffset[0], bR = this.eye[1] + this.originOffset[1], yR = this.eye[2] + this.originOffset[2];
        if (!MW.eyeClear(AW, bR, yR, RW.near, RW.projectionMatrix, wW)) return null;
        const [NW, eW] = wW.lNW, BW = MW.update(AW, bR, yR, CW, NW, eW, zR);
        return this.visSweeps = MW.sweeps, BW ? MW : null
      }
      visSeeThrough(WW, RW) {
        const {
          material: MW
        } = WW;
        return (!MW || !this.isBlended(MW)) && (WW.mesh.visibility < 1 || !(null !== MW && void 0 !== MW && MW.bindGroup) || WW.faceCount > 0 && (!this.geometry.backed(WW) || this.lighting && !WW.vertices.page.twin) || !this.batchDraws(MW, WW.packed, RW))
      }
      batchDraws(WW, RW, MW) {
        var wW;
        const CW = RW ? 2 : 0;
        if (WW === this.visDrawsMaterial && function(WW, RW) {
            return 0 !== (WW & 1 << RW)
          }(this.visDrawsBits, CW)) return 0 !== (this.visDrawsBits & 2 << CW);
        let zR = null !== (wW = this.visBatchDraws.get(WW)) && void 0 !== wW ? wW : 0;
        if (!(zR & 1 << CW)) {
          zR |= 1 << CW | (!!WW.bindGroupLayout && this.canDraw(WW, RW) && !!this.pipelines.get(this.pipelineId(WW, this.programKey(WW, RW), MW)) ? 2 << CW : 0), this.visBatchDraws.set(WW, zR)
        }
        return this.visDrawsMaterial = WW, this.visDrawsBits = zR, 0 !== (zR & 2 << CW)
      }
      runVisCheck(WW, RW, MW) {
        const {
          BR: wW
        } = WW, {
          zM: CW
        } = wW, zR = CW.fAW, AW = new Set;
        for (const TW of this.chunks.values()) AW.add(TW.key);
        const bR = PC.Matrix.FromArray(RW.viewProjectionMatrix).invert(),
          [yR, NW, eW] = this.originOffset,
          BW = new PC.vC,
          tR = function(WW, RW, MW, wW) {
            const CW = new Set;
            for (let zR = 0; zR < 27; zR++)
              for (let AW = 0; AW < 48; AW++) {
                const bR = MW((AW + .5) / 48 * 2 - 1, (zR + .5) / 27 * 2 - 1);
                pb(WW, RW, [bR[0] - RW[0], bR[1] - RW[1], bR[2] - RW[2]], wW, CW)
              }
            return CW
          }({
            wwW: (WW, RW, MW) => CW.wwW(WW, RW, MW),
            occluders: MW.occluders,
            opaque: MW.opaque,
            dw: zR,
            isDrawn: (WW, RW, wW) => MW.isDrawn(WW, RW, wW),
            hasParts: (WW, RW, MW) => AW.has((0, db.j)(WW, RW, MW))
          }, [this.eye[0] + yR, this.eye[1] + NW, this.eye[2] + eW], ((WW, RW) => (PC.vC.TransformCoordinatesFromFloatsToRef(WW, RW, .5, bR, BW), [BW.x + yR, BW.y + NW, BW.z + eW])), (CW.lNW[0] + 1) * zR);
        this.visViolations = tR.size;
        for (const TW of tR) this.warnOnce(`vis:${TW}`, `Lite terrain cave culling skipped chunk ${TW}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var WW;
        null !== (WW = this.ww) && void 0 !== WW && WW.isRunning() && (this.shaderPackInputs ??= new xA(this.device, this.ww.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.ww, this.eye, this.lighting))
      }
      bindShaderPackInputs(WW, RW, MW) {
        var wW, CW, zR, AW;
        let bR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: yR
        } = this.shaderPackFields(RW, MW);
        if (void 0 === yR) return;
        this.shaderPackInputs || (this.shaderPackInputs = new xA(this.device, MW.textureLayers(), this.sunShadow), this.shaderPackInputs.write(MW, this.eye, this.lighting));
        const NW = Mw(yR) ? null !== (wW = null === (CW = this.sceneDepth) || void 0 === CW ? void 0 : CW.view) && void 0 !== wW ? wW : this.standIn() : null,
          eW = bR ? null !== (zR = null === (AW = this.shadowMask) || void 0 === AW ? void 0 : AW.view) && void 0 !== zR ? zR : this.standIn() : null;
        this.shaderPackInputs.bind(WW, NW, Vz(yR, !!this.sunShadow), eW)
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
        var WW, RW;
        return null !== (WW = null === (RW = this.shaderPackInputs) || void 0 === RW ? void 0 : RW.bindGroupFor(null, !0)) && void 0 !== WW ? WW : null
      }
      resetBatches(WW) {
        const RW = this.opaqueBatches;
        let MW = 0;
        for (const wW of RW) wW.meshes.length > 0 && (wW.meshes.length = 0, wW.faceCull = this.batchFaceCull(wW.material, WW), RW[MW++] = wW);
        RW.length = MW
      }
      orderBatches() {
        const WW = this.opaqueBatches;
        for (let RW = 0; RW < WW.length; RW++) {
          const MW = WW[RW];
          MW.group = RW;
          for (let wW = 0; wW < RW; wW++) {
            const RW = WW[wW];
            if (RW.material === MW.material && RW.packed === MW.packed) {
              MW.group = RW.group;
              break
            }
          }
          MW.nearest = MW.meshes.length > 0 ? MW.meshes[0].distance : 1 / 0
        }
        WW.sort(hb)
      }
      batchFor(WW, RW, MW, wW, CW) {
        for (const AW of this.opaqueBatches)
          if (AW.material === WW && AW.packed === RW && AW.page === MW && AW.resting === wW) return AW;
        const zR = {
          material: WW,
          packed: RW,
          page: MW,
          resting: wW,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(WW, CW)
        };
        return this.opaqueBatches.push(zR), zR
      }
      batchFaceCull(WW, RW) {
        return !(!RW || !(0, ky.t)(WW.model)) && (!this.ww || ! function(WW) {
          var RW;
          return !(null === (RW = (0, XR.f)(WW)) || void 0 === RW || !RW.movesVertices)
        }(this.shaderPackFields(WW, this.ww).packVariant))
      }
      writeFrameUniforms(WW, RW) {
        const MW = this.frameUniforms,
          wW = yC;
        if ((0, zy.w)(WW, MW), MW[wW.fogInfos] = RW.fogEnabled ? RW.fogMode : 0, MW[wW.fogInfos + 1] = RW.fogStart, MW[wW.fogInfos + 2] = RW.fogEnd, MW[wW.fogInfos + 3] = RW.fogDensity, MW.set(RW.fogColour, wW.fogColour), MW[wW.outputHeight] = RW.renderHeight, MW.set(RW.ambientColour, wW.sceneAmbient), (0, zy.t)(RW, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const RW = (0, Ab.k)(WW.yz, WW.Uw, WW.Ew);
          for (let WW = 0; WW < 4; WW++) MW[wW.aoLevels + WW] = RW[WW] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, MW)
      }
      animateMaterials(WW) {
        const RW = ew.anim;
        for (const MW of this.materials.values()) MW.animated && (MW.uniformData[RW] = WW, this.device.queue.writeBuffer(MW.uniformBuffer, 4 * RW, MW.uniformData, RW, 1))
      }
      canDraw(WW, RW) {
        return !("atlas" === WW.texture && !RW) || (this.warnOnce(`stride:${WW.id}`, `Lite terrain: material "${WW.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(WW, RW) {
        let MW = 0;
        WW.setBindGroup(1, this.frameBindGroup);
        for (const wW of this.opaqueBatches) {
          if (!wW.meshes.length || !this.canDraw(wW.material, wW.packed)) continue;
          const CW = this.pipelineFor(wW.material, wW.packed, RW, wW.resting);
          CW && (WW.setPipeline(CW), WW.setBindGroup(2, wW.material.bindGroup), this.ww && this.bindShaderPackInputs(WW, wW.material, this.ww, this.prepassOf.has(CW)), MW += this.drawBatch(WW, wW))
        }
        return MW
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(WW, RW, MW) {
        const wW = this.target,
          CW = this.ww;
        if (!wW || !CW || 0 === this.maskPipelines) return 0;
        let zR = 0,
          AW = null;
        this.geometry.setDrawing(!0);
        try {
          for (const bR of this.opaqueBatches) {
            if (!bR.meshes.length || !this.canDraw(bR.material, bR.packed)) continue;
            const yR = this.pipelineFor(bR.material, bR.packed, wW, bR.resting),
              NW = yR && this.prepassOf.get(yR);
            NW && (AW || (AW = WW.beginRenderPass(RW), AW.setBindGroup(0, MW), AW.setBindGroup(1, this.frameBindGroup)), AW.setPipeline(NW), AW.setBindGroup(2, bR.material.bindGroup), this.bindShaderPackInputs(AW, bR.material, CW, !0), zR += this.drawBatch(AW, bR))
          }
        } finally {
          var bR;
          null === (bR = AW) || void 0 === bR || bR.end(), this.geometry.setDrawing(!1)
        }
        return zR
      }
      drawBatch(WW, RW) {
        let MW = 0;
        for (const wW of RW.meshes) {
          const {
            rangeCount: RW
          } = wW;
          RW > 0 && (MW += this.geometry.draw(WW, wW, this.lighting, wW.first0, wW.count0), RW > 1 && (MW += this.geometry.draw(WW, wW, this.lighting, wW.first1, wW.count1)))
        }
        return MW
      }
      drawTransparent(WW, RW) {
        let MW = 0,
          wW = null,
          CW = null;
        WW.setBindGroup(1, this.frameBindGroup);
        for (const zR of this.transparent) {
          const AW = zR.material;
          if (!this.canDraw(AW, zR.packed)) continue;
          const bR = this.pipelineFor(AW, zR.packed, RW);
          bR && (bR !== wW && (WW.setPipeline(bR), wW = bR, this.ww && this.bindShaderPackInputs(WW, AW, this.ww)), AW !== CW && (WW.setBindGroup(2, AW.bindGroup), CW = AW), MW += this.geometry.draw(WW, zR, this.lighting))
        }
        return MW
      }
    }

    function Kb(WW, RW, MW, wW) {
      return `${Xw(WW)}|${WW.atlasLayers}|${WW.XCW}|${RW}|${MW}|${wW._colorFormat}|${wW._depthStencilFormat}|${wW._sampleCount}`
    }

    function ub(WW, RW) {
      return WW.distance - RW.distance
    }

    function Ob(WW, RW) {
      return RW.distance - WW.distance
    }
    class nb {
      constructor() {
        this.left = []
      }
      sort(WW, RW) {
        for (let MW = 0; MW < WW.length; MW++) {
          const RW = WW[MW].distance;
          if (RW - RW !== 0) return !1
        }
        return this.sortRange(WW, 0, WW.length, RW), !0
      }
      sortRange(WW, RW, MW, wW) {
        if (MW - RW <= 16) {
          for (let CW = RW + 1; CW < MW; CW++) {
            const MW = WW[CW],
              zR = wW * MW.distance;
            let AW = CW - 1;
            for (; AW >= RW && wW * WW[AW].distance > zR; AW--) WW[AW + 1] = WW[AW];
            WW[AW + 1] = MW
          }
          return
        }
        const CW = RW + MW >>> 1;
        if (this.sortRange(WW, RW, CW, wW), this.sortRange(WW, CW, MW, wW), wW * WW[CW - 1].distance <= wW * WW[CW].distance) return;
        const {
          left: zR
        } = this, AW = CW - RW;
        for (let eW = 0; eW < AW; eW++) zR[eW] = WW[RW + eW];
        let bR = 0,
          yR = CW,
          NW = RW;
        for (; bR < AW && yR < MW;) WW[NW++] = wW * WW[yR].distance < wW * zR[bR].distance ? WW[yR++] : zR[bR++];
        for (; bR < AW;) WW[NW++] = zR[bR++]
      }
    }
    const Gb = Math.ceil(102);

    function Lb(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RW;
      const zR = Math.min(RW, MW),
        AW = new Uint32Array(WM(wW));
      for (let bR = 0; bR < wW; bR++) {
        const RW = Math.floor(bR * zR / wW),
          MW = Math.max(RW + 1, Math.floor((bR + 1) * zR / wW));
        for (let yR = 0; yR < wW; yR++) {
          const NW = Math.floor(yR * zR / wW),
            eW = Math.max(NW + 1, Math.floor((yR + 1) * zR / wW));
          let BW = 0;
          for (let wW = RW; wW < MW; wW++)
            for (let RW = NW; RW < eW; RW++) WW[wW * CW + RW] >= Gb && BW++;
          if (2 * BW >= (MW - RW) * (eW - NW)) {
            const WW = yR + wW * bR;
            AW[WW >>> 5] |= 1 << (31 & WW)
          }
        }
      }
      return AW
    }

    function Hb(WW) {
      return Math.max(1, Math.min(16, WW))
    }
    class Db {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = WW, this.loadTexture = RW, this.warn = MW, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(WW, RW) {
        return (WW.kwW !== this.builtVersion || this.blockCaster.length !== RW) && (this.build(WW, RW), !0)
      }
      build(WW, RW) {
        this.builtVersion = WW.kwW;
        const MW = new Uint16Array(RW),
          wW = new Map;
        for (let CW = 1; CW < RW; CW++) {
          const RW = this.classify(WW, CW, wW);
          if (null === RW || RW === HR) {
            MW[CW] = null === RW ? 0 : HR;
            continue
          }
          let zR = this.byKey.get(RW.key);
          void 0 === zR && (zR = this.allocate(RW), this.byKey.set(RW.key, zR)), MW[CW] = zR
        }
        this.blockCaster = MW, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(WW, RW) {
        const MW = WW.GCW[RW];
        if ("function" !== typeof MW) return MW;
        try {
          return MW()
        } catch (wW) {
          return this.warnOnce(`Sun shadows: no caster option for block ${RW}: ${wW instanceof Error?wW.message:String(wW)}`), null
        }
      }
      classify(WW, RW, MW) {
        const wW = this.option(WW, RW);
        if ("none" === wW) return null;
        if (wW && wW.planes.length > 0) {
          const WW = wW.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(WW)}`,
            planes: WW
          }
        }
        if (WW.BM[RW]) return null;
        const CW = WW.TM[RW] ? WW.sMW(RW) : null;
        if (CW && CW.length >= 6) {
          const WW = function(WW) {
            const RW = new Uint32Array(16);
            for (let MW = 0; MW + 6 <= WW.length; MW += 6) {
              const wW = [0, 1, 2].map((RW => Math.max(0, Math.ceil(8 * WW[MW + RW] - .5)))),
                CW = [0, 1, 2].map((RW => Math.min(7, Math.floor(8 * WW[MW + RW + 3] - .5))));
              for (let WW = wW[2]; WW <= CW[2]; WW++)
                for (let MW = wW[1]; MW <= CW[1]; MW++)
                  for (let zR = wW[0]; zR <= CW[0]; zR++) {
                    const wW = zR + 8 * (MW + 8 * WW);
                    RW[wW >>> 5] |= 1 << (31 & wW)
                  }
            }
            return RW
          }(CW);
          return function(WW) {
            return WW.every((WW => 4294967295 === WW))
          }(WW) ? HR : WW.every((WW => 0 === WW)) ? null : {
            kind: "shape",
            key: `shape:${WW.join(",")}`,
            mask: WW
          }
        }
        if (WW.vwW[RW] || !WW.NC[RW]) return null;
        const zR = [0, 1, 2, 3, 4, 5].map((wW => {
          const CW = WW.eC[6 * RW + wW];
          let zR = MW.get(CW);
          return void 0 === zR && (zR = function(WW) {
            if (!WW || WW.PC) return null;
            const {
              czW: RW,
              XCW: MW,
              rzW: wW
            } = WW;
            if (!RW || !MW || !(MW > 0) || void 0 === wW || !(wW >= 0)) return null;
            const CW = RW[0],
              zR = MW * MW * 4;
            if (!CW || CW.byteLength < zR) return null;
            const AW = Math.floor(CW.byteLength / zR),
              bR = RW[Math.floor(wW / AW)];
            if (!bR) return null;
            const yR = new Uint8Array(bR.buffer, bR.byteOffset, bR.byteLength),
              NW = wW % AW * zR;
            if (NW + zR > yR.length) return null;
            const eW = new Uint8Array(MW * MW);
            let BW = !1;
            for (let tR = 0; tR < eW.length; tR++) eW[tR] = yR[NW + 4 * tR + 3], BW ||= eW[tR] < Gb;
            return BW ? {
              alpha: eW,
              width: MW
            } : null
          }(WW.JC(CW)), MW.set(CW, zR)), zR
        }));
        if (zR.every((WW => null === WW))) return HR;
        const AW = Hb(Math.max(...zR.map((WW => {
            var RW;
            return null !== (RW = null === WW || void 0 === WW ? void 0 : WW.width) && void 0 !== RW ? RW : 1
          })))),
          bR = new Uint32Array(WM(AW)).fill(4294967295),
          yR = zR.map((WW => null === WW ? bR : Lb(WW.alpha, WW.width, WW.width, AW)));
        return {
          kind: "cutout",
          key: `cutout:${AW}:${yR.map((WW=>WW.join(","))).join("|")}`,
          size: AW,
          faces: yR
        }
      }
      allocate(WW) {
        if (this.nextCaster >= RM) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const RW = this.nextCaster++;
        if (this.writeCaster(RW, DR, 0, 0, 0), "shape" === WW.kind) {
          const MW = this.allocateMask(WW.mask.length);
          MW >= 0 && (this.sink(MW, WW.mask), this.writeCaster(RW, qM, MW, 0, 8))
        } else if ("cutout" === WW.kind) {
          const MW = WM(WW.size),
            wW = this.allocateMask(6 * MW);
          if (wW >= 0) {
            const CW = new Uint32Array(6 * MW);
            WW.faces.forEach(((WW, RW) => {
              CW.set(WW, RW * MW)
            })), this.sink(wW, CW), this.writeCaster(RW, SR, wW, 0, WW.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(RW, WW.planes).finally((() => {
          this.planesLoading--
        })));
        return RW
      }
      async loadPlanes(WW, RW) {
        const MW = await Promise.all(RW.map((WW => this.texture(WW.texture))));
        if (MW.some((WW => null === WW))) return;
        const wW = MW,
          CW = Hb(Math.max(...wW.map((WW => Math.min(WW.width, WW.height))))),
          zR = WM(CW),
          AW = this.allocateMask(RW.length * (4 + zR));
        if (AW < 0) return;
        const bR = new Uint32Array(RW.length * (4 + zR)),
          yR = 4 * RW.length;
        RW.forEach(((WW, RW) => {
          const MW = AW + yR + RW * zR;
          bR.set(function(WW, RW) {
            const [MW, wW] = WW.tangent, CW = Math.hypot(MW, wW) || 1, zR = MW / CW, AW = wW / CW, bR = WW.centre[0] * AW - WW.centre[1] * zR, yR = new Uint32Array(4);
            return new Float32Array(yR.buffer, 0, 3).set([zR, AW, bR]), yR[3] = RW, yR
          }(WW, MW), 4 * RW), bR.set(Lb(wW[RW].alpha, wW[RW].width, wW[RW].height, CW), yR + RW * zR)
        })), this.sink(AW, bR), this.writeCaster(WW, ZR, AW, RW.length, CW)
      }
      texture(WW) {
        let RW = this.textures.get(WW);
        return RW || (RW = this.loadTexture(WW).catch((RW => (this.warn(`Sun shadows: no mask for ${WW}: ${RW instanceof Error?RW.message:String(RW)}`), null))), this.textures.set(WW, RW)), RW
      }
      allocateMask(WW) {
        if (this.nextMaskWord + WW > MM) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const RW = 32768 + this.nextMaskWord;
        return this.nextMaskWord += WW, RW
      }
      writeCaster(WW, RW, MW, wW, CW) {
        this.sink(0 + 4 * WW, Uint32Array.of(RW, MW, wW, CW))
      }
      warnOnce(WW) {
        this.warned.has(WW) || (this.warned.add(WW), this.warn(WW))
      }
    }
    var qy = MW(35782);

    function Zb(WW) {
      return !WW.oC && !WW.BeW && !WW.Sw
    }

    function Sb() {
      return {
        bricks: new Uint32Array(xM),
        cells: new Uint16Array(32768),
        special: new Uint8Array(VR)
      }
    }
    class Wy {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = WW, this.writeVoxels = RW, this.writePool = MW, this.warn = wW, this.eyeChunk = null, this.slotChunk = new Array(sR).fill(null), this.slotVersion = new Float64Array(sR).fill(-1), this.slotPool = new Array(sR).fill(null), this.starved = new Uint8Array(sR), this.queue = [], this.queued = new Uint8Array(sR), this.queueSorted = !0, this.freePool = new Uint32Array(wM), this.freeCount = wM, this.casterTable = null, this.warnedPool = !1, this.scratch = Sb(), this.victimScratch = Sb(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * sR), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let CW = 0; CW < wM; CW++) this.freePool[CW] = 65535 - CW
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return wM - this.freeCount
      }
      chunkAdded(WW) {
        if (null === this.eyeChunk || !this.inRadius(WW.i, WW.j, WW.k)) return;
        const RW = nR(WW.i, WW.j, WW.k);
        this.slotChunk[RW] = WW, this.slotVersion[RW] = -1, this.enqueue(RW)
      }
      update(WW, RW, MW) {
        const wW = this.casters.blockCaster;
        if (wW !== this.casterTable) {
          this.casterTable = wW;
          for (let WW = 0; WW < sR; WW++) this.slotVersion[WW] = -1, this.slotChunk[WW] && this.enqueue(WW)
        }
        const CW = Math.floor(WW[0] / 32),
          zR = Math.floor(WW[1] / 32),
          AW = Math.floor(WW[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== CW || this.eyeChunk[1] !== zR || this.eyeChunk[2] !== AW) && (this.eyeChunk = [CW, zR, AW], this.follow(RW), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let bR = 0; bR < sR; bR++) {
          const WW = this.slotChunk[bR];
          WW && (WW.cNW || WW.MC !== this.slotVersion[bR]) && this.enqueue(bR)
        }
        this.drain(MW), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(WW, RW) {
        this.records.set(RW, 4 * WW), this.windowTopStale = !0, this.writeVoxels(4 * WW, RW)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const WW = this.records;
        let RW = -1 / 0;
        for (let wW = 0; wW < WW.length; wW += 4) {
          const MW = 255 & WW[wW + 3];
          MW !== hR && MW !== UR || !this.inRadius(WW[wW], WW[wW + 1], WW[wW + 2]) || (RW = Math.max(RW, WW[wW + 1] * jM + (WW[wW + 3] >>> 8)))
        }
        const MW = RW === -1 / 0 ? 1 : RW + KR;
        MW !== this.windowTop[0] && (this.windowTop[0] = MW, this.writeVoxels(vM, this.windowTop))
      }
      follow(WW) {
        const RW = this.eyeChunk,
          [MW, wW, CW] = kM;
        for (let AW = -CW; AW <= CW; AW++)
          for (let CW = -wW; CW <= wW; CW++)
            for (let wW = -MW; wW <= MW; wW++) {
              var zR;
              const MW = RW[0] + wW,
                bR = RW[1] + CW,
                yR = RW[2] + AW,
                NW = nR(MW, bR, yR),
                eW = this.slotChunk[NW];
              if (eW && !eW.cNW && eW.i === MW && eW.j === bR && eW.k === yR) continue;
              const BW = null !== (zR = WW(MW, bR, yR)) && void 0 !== zR ? zR : null;
              eW && (eW.i !== MW || eW.j !== bR || eW.k !== yR) && this.slotPool[NW] && (this.release(NW), this.record.fill(0), this.writeRecord(NW, this.record)), this.slotChunk[NW] = BW, this.slotVersion[NW] = -1, (BW || eW) && this.enqueue(NW)
            }
      }
      requeueStarved() {
        for (let WW = 0; WW < sR; WW++) this.starved[WW] && this.slotChunk[WW] && this.enqueue(WW)
      }
      enqueue(WW) {
        this.queued[WW] || (this.queued[WW] = 1, this.queue.push(WW), this.queueSorted = !1)
      }
      drain(WW) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const WW = new Map;
          for (const RW of this.queue) WW.set(RW, this.slotDistance(RW));
          this.queue.sort(((RW, MW) => WW.get(MW) - WW.get(RW))), this.queueSorted = !0
        }
        const RW = performance.now();
        let MW = 0;
        const wW = [];
        for (; this.queue.length > 0 && (0 === MW || performance.now() - RW < WW);) {
          const WW = this.queue.pop(),
            RW = this.slotChunk[WW];
          !RW || RW.cNW || Zb(RW) ? (this.queued[WW] = 0, this.encodeSlot(WW), MW++) : wW.push(WW)
        }
        for (let CW = wW.length - 1; CW >= 0; CW--) this.queue.push(wW[CW])
      }
      slotDistance(WW) {
        const RW = this.slotChunk[WW],
          MW = this.eyeChunk;
        return RW ? Math.max(Math.abs(RW.i - MW[0]), Math.abs(RW.j - MW[1]), Math.abs(RW.k - MW[2])) : 0
      }
      inRadius(WW, RW, MW) {
        const wW = this.eyeChunk,
          [CW, zR, AW] = kM;
        return Math.abs(WW - wW[0]) <= CW && Math.abs(RW - wW[1]) <= zR && Math.abs(MW - wW[2]) <= AW
      }
      release(WW) {
        const RW = this.slotPool[WW];
        if (RW) {
          for (let WW = RW.length - 1; WW >= 0; WW--) this.freePool[this.freeCount++] = RW[WW];
          this.slotPool[WW] = null
        }
      }
      encodeSlot(WW) {
        var RW, MW, wW, CW, zR;
        let AW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          bR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const yR = null !== (RW = null === (MW = this.slotPool[WW]) || void 0 === MW ? void 0 : MW.length) && void 0 !== RW ? RW : 0;
        this.release(WW), this.starved[WW] = 0;
        const NW = this.slotChunk[WW],
          eW = this.record;
        if (!NW || NW.cNW || !NW.dR) return this.slotChunk[WW] = null, this.slotVersion[WW] = -1, eW.fill(0), this.writeRecord(WW, eW), void(yR > 0 && this.requeueStarved());
        this.slotVersion[WW] = NW.MC;
        const BW = this.encodeBricks(NW, WW, AW, bR);
        eW[0] = NW.i, eW[1] = NW.j, eW[2] = NW.k, eW[3] = BW, this.writeRecord(WW, eW), null === (wW = this.encoded) || void 0 === wW || wW.call(this, NW), bR && (null !== (CW = null === (zR = this.slotPool[WW]) || void 0 === zR ? void 0 : zR.length) && void 0 !== CW ? CW : 0) < yR && this.requeueStarved()
      }
      encodeBricks(WW, RW, MW, wW) {
        if (WW.Pw) return pR;
        const CW = this.casters.blockCaster,
          {
            data: zR,
            stride: AW,
            offset: bR
          } = WW.dR,
          [yR, NW, eW] = AW,
          BW = jM,
          {
            bricks: tR,
            cells: TW,
            special: gR
          } = MW;
        tR.fill(0), gR.fill(0);
        let iR = 0,
          YW = 0,
          JW = 0;
        for (let PW = 0; PW < BW; PW++) {
          const RW = PW >> 2,
            MW = 3 & PW,
            wW = WW.aw[PW],
            AW = wW === qy.g ? -1 : wW < CW.length ? CW[wW] : 0;
          if (0 !== AW)
            for (let WW = 0; WW < BW; WW++) {
              const wW = WW >> 2,
                IW = 3 & WW;
              let oW = bR + WW * yR + PW * NW;
              for (let WW = 0; WW < BW; WW++, oW += eW) {
                let bR = AW;
                if (bR < 0) {
                  const WW = zR[oW];
                  if (bR = WW < CW.length ? CW[WW] : 0, 0 === bR) continue
                }
                const yR = GR(wW, RW, WW >> 2),
                  NW = LR(IW, MW, 3 & WW);
                tR[3 * yR + (NW >>> 5)] |= 1 << (31 & NW), TW[yR * ER + NW] = bR, iR++, JW = PW, bR === HR ? YW++ : gR[yR] = 1
              }
            }
        }
        return 0 === iR ? pR : 32768 === YW ? hR | JW << 8 : (this.writePoolEntries(RW, MW, wW), this.writeVoxels(mM + RW * xM, tR), UR | JW << 8)
      }
      writePoolEntries(WW, RW, MW) {
        const {
          bricks: wW,
          cells: CW,
          special: zR
        } = RW, AW = this.entry;
        let bR = 0;
        for (let eW = 0; eW < VR; eW++) bR += zR[eW];
        if (0 === bR) return;
        MW && this.freeCount < bR && this.evictBeyond(WW, bR);
        const yR = new Uint32Array(MW ? Math.min(bR, this.freeCount) : 0);
        let NW = 0;
        for (let eW = 0; eW < VR; eW++) {
          if (!zR[eW]) continue;
          const MW = 3 * eW;
          if (NW === yR.length) {
            this.dropSpecials(RW, eW), this.starved[WW] = 1;
            continue
          }
          const bR = this.freePool[--this.freeCount];
          yR[NW++] = bR;
          for (let WW = 0; WW < ER; WW++) {
            const RW = wW[MW + (WW >>> 5)] >>> (31 & WW) & 1 ? CW[eW * ER + WW] : 0;
            1 & WW ? AW[WW >> 1] |= RW << 16 : AW[WW >> 1] = RW
          }
          wW[MW + 2] = bR + 1, this.writePool(CM + 32 * bR, AW)
        }
        yR.length > 0 && (this.slotPool[WW] = yR)
      }
      evictBeyond(WW, RW) {
        const MW = this.slotDistance(WW),
          wW = [];
        for (let CW = 0; CW < sR; CW++) CW !== WW && this.slotPool[CW] && this.slotDistance(CW) > MW && wW.push(CW);
        wW.sort(((WW, RW) => this.slotDistance(RW) - this.slotDistance(WW)));
        for (const CW of wW) {
          if (this.freeCount >= RW) return;
          const WW = this.slotChunk[CW];
          WW && !WW.cNW && WW.dR && (WW.MC === this.slotVersion[CW] || Zb(WW)) && this.encodeSlot(CW, this.victimScratch, !1)
        }
      }
      dropSpecials(WW, RW) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const MW = 3 * RW;
        for (let wW = 0; wW < ER; wW++) WW.cells[RW * ER + wW] !== HR && (WW.bricks[MW + (wW >>> 5)] &= ~(1 << (31 & wW)))
      }
    }
    var Ry = MW(35506);
    class My {
      constructor(WW) {
        this.device = WW, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new iw, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.zM = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = WW.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = WW.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(WW, RW, MW) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: wW
        } = this;
        wW.IM(WW, RW), MW.forEachSunShadowCaster((WW => {
          this.add(WW)
        })), wW.finish();
        const CW = 0 === wW.parts;
        if (CW && this.uploadedEmpty) return;
        this.uploadedEmpty = CW;
        const {
          queue: zR
        } = this.device, {
          words: AW
        } = wW;
        zR.writeBuffer(this.frameBuffer, 0, AW, 0, 16385), wW.refs > 0 && zR.writeBuffer(this.frameBuffer, 65540, AW, yw, wW.refs), CW || zR.writeBuffer(this.frameBuffer, 327684, AW, NM, wW.parts * bw)
      }
      add(WW) {
        const RW = this.gridFor(WW);
        if (!RW) return;
        const {
          frame: MW
        } = this, {
          zM: wW,
          worldAt: CW,
          instances: zR,
          instanceCount: AW,
          thin: bR
        } = WW;
        if (zR)
          for (let yR = 0; yR < AW; yR++) bR ? (JM(zR, 16 * yR, wW, CW, this.zM), MW.add(RW, this.zM)) : MW.add(RW, zR, 16 * yR);
        else MW.add(RW, wW, CW)
      }
      gridFor(WW) {
        let {
          geometry: RW,
          indexed: MW,
          first: wW,
          count: CW,
          skip: zR
        } = WW, AW = this.grids.get(RW);
        AW || (AW = new Map, this.grids.set(RW, AW));
        const bR = `${MW?wW:-1-wW}:${CW}:${null!==zR&&void 0!==zR?zR:""}`;
        let yR = AW.get(bR);
        if (void 0 !== yR || this.gridsFull) return yR;
        const NW = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = NW + 2;
        else if (NW > this.bakeDeadline) return;
        return yR = this.bake(RW, MW, wW, CW, zR), void 0 !== yR && AW.set(bR, yR), yR
      }
      bake(WW, RW, MW, wW, CW) {
        const zR = WW.vertexAttributes.find((WW => "position" === WW.kind)),
          AW = zR ? function(WW, RW, MW, wW) {
            let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const zR = WW => RW ? RW[MW + WW] : MW + WW,
              AW = WW => null !== CW && [0, 1, 2].some((RW => {
                const MW = zR(WW + RW);
                return MW >= CW[0] && MW < CW[1]
              })),
              bR = [1 / 0, 1 / 0, 1 / 0],
              yR = [-1 / 0, -1 / 0, -1 / 0];
            for (let PW = 0; PW + 2 < wW; PW += 3)
              if (!AW(PW))
                for (let RW = 0; RW < 3; RW++) {
                  const MW = zR(PW + RW);
                  for (let RW = 0; RW < 3; RW++) bR[RW] = Math.min(bR[RW], WW[3 * MW + RW]), yR[RW] = Math.max(yR[RW], WW[3 * MW + RW])
                }
            const NW = Math.max(yR[0] - bR[0], yR[1] - bR[1], yR[2] - bR[2]);
            if (!(NW > 0)) return null;
            const eW = NW / 64,
              BW = [0, 0, 0],
              tR = [0, 0, 0],
              TW = [0, 0, 0];
            for (let PW = 0; PW < 3; PW++) BW[PW] = Math.min(65, Math.ceil((yR[PW] - bR[PW]) / eW) + 1), tR[PW] = bR[PW] - eW / 2, TW[PW] = tR[PW] + BW[PW] * eW;
            const gR = new Uint32Array(Math.ceil(BW[0] * BW[1] * BW[2] / 32)),
              iR = new Float64Array(9),
              YW = [0, 0, 0],
              JW = [0, 0, 0];
            for (let PW = 0; PW + 2 < wW; PW += 3)
              if (!AW(PW)) {
                for (let RW = 0; RW < 3; RW++) {
                  const MW = zR(PW + RW);
                  for (let wW = 0; wW < 3; wW++) iR[3 * RW + wW] = WW[3 * MW + wW]
                }
                for (let WW = 0; WW < 3; WW++) {
                  const RW = Math.min(iR[WW], iR[3 + WW], iR[6 + WW]),
                    MW = Math.max(iR[WW], iR[3 + WW], iR[6 + WW]);
                  YW[WW] = Math.max(0, Math.floor((RW - tR[WW]) / eW - 1e-6)), JW[WW] = Math.min(BW[WW] - 1, Math.floor((MW - tR[WW]) / eW + 1e-6))
                }
                for (let WW = YW[2]; WW <= JW[2]; WW++)
                  for (let RW = YW[1]; RW <= JW[1]; RW++)
                    for (let MW = YW[0]; MW <= JW[0]; MW++)
                      if (PM(iR, tR[0] + (MW + .5) * eW, tR[1] + (RW + .5) * eW, tR[2] + (WW + .5) * eW, eW / 2)) {
                        const wW = MW + BW[0] * (RW + BW[1] * WW);
                        gR[wW >>> 5] |= 1 << (31 & wW)
                      }
              } return {
              words: gR,
              lo: tR,
              hi: TW,
              cell: eW,
              dims: BW
            }
          }((0, Ry.i)(zR, WW.vertexCount), RW ? WW.indexData : null, MW, wW, CW) : null;
        if (!AW) return null;
        const {
          words: bR,
          ...yR
        } = AW;
        if (this.gridTop + bR.length > BM) return void(this.gridsFull = !0);
        const NW = this.gridTop;
        return this.gridTop += bR.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * NW, bR), {
          ...yR,
          at: NW
        }
      }
    }
    const wy = Math.cos(1 * Math.PI / 180);

    function Cy(WW, RW) {
      return WW[0] * RW[0] + WW[1] * RW[1] + WW[2] * RW[2] < wy
    }
    async function zN(WW) {
      const {
        pixels: RW,
        width: MW,
        height: wW
      } = await UC(WW), CW = new Uint8Array(MW * wW);
      for (let zR = 0; zR < CW.length; zR++) CW[zR] = RW[4 * zR + 3];
      return {
        width: MW,
        height: wW,
        alpha: CW
      }
    }
    class Ay {
      constructor(WW, RW) {
        this.device = WW, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(oM.m), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = WW.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = WW.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * uR,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = WW.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [MW, wW, CW] = oM.q;
        this.volume = WW.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: MW,
            height: wW,
            depthOrArrayLayers: CW
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = WW.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = WW.createBuffer({
          label: "sun-shadow-volume-work",
          size: oM.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = RW ? new My(WW) : null, this.entityStandIn = RW ? null : WW.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var WW, RW;
        const MW = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || MW.push("Lite sun shadow volume pipeline compiling");
        const wW = null !== (WW = null === (RW = this.casters) || void 0 === RW ? void 0 : RW.planesLoading) && void 0 !== WW ? WW : 0;
        return wW > 0 && MW.push(`${wW} Lite sun shadow plane casters loading their textures`), MW
      }
      entries() {
        var WW, RW, MW, wW;
        const CW = cM.n;
        return [{
          binding: CW.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: CW.dR,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: CW.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: CW.volume,
          resource: this.volumeView
        }, {
          binding: CW.sampler,
          resource: this.volumeSampler
        }, {
          binding: CW.entities,
          resource: {
            buffer: null !== (WW = null === (RW = this.entities) || void 0 === RW ? void 0 : RW.frameBuffer) && void 0 !== WW ? WW : this.entityStandIn
          }
        }, {
          binding: CW.entityGrids,
          resource: {
            buffer: null !== (MW = null === (wW = this.entities) || void 0 === wW ? void 0 : wW.gridBuffer) && void 0 !== MW ? MW : this.entityStandIn
          }
        }]
      }
      prepare(WW, RW, MW) {
        var wW;
        this.entitiesThisFrame = !1;
        const CW = null !== (wW = null === MW || void 0 === MW ? void 0 : MW.sunShadowReach()) && void 0 !== wW ? wW : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!MW || !CW.sunShadow && !CW.airShadow) return void(this.volumeHolds = null);
        if (WW.zM.fAW !== jM) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${WW.zM.fAW}; everything is lit.`)));
        const zR = this.start(WW);
        this.casters.update(WW.NM, WW.NM.TM.length);
        const AW = WW.XR;
        for (let tR = 0; tR < 3; tR++) this.eye[tR] = RW[tR] + AW[tR];
        const bR = (0, oM.y)(this.eye);
        this.staleNear = bR;
        const yR = WW.zM.FC;
        zR.update(this.eye, ((WW, RW, MW) => yR.fC(WW, RW, MW)), 1);
        const NW = (0, oM.s)(MW.zbW()),
          eW = zR.eyeChunk,
          BW = this.uniformInts;
        for (let tR = 0; tR < 3; tR++) BW[tR] = eW[tR], BW[4 + tR] = bR[tR];
        this.entitiesThisFrame = null !== this.entities && CW.sunShadow, this.entitiesThisFrame && gw(this.uniformFloats, 8, RW, NW), null !== this.volumeHolds && (this.castersWritten || Cy(NW, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(bR, NW, eW)
      }
      markStale(WW) {
        const RW = this.staleNear,
          MW = jM,
          wW = [WW.i * MW, WW.j * MW, WW.k * MW];
        for (let zR = 0; zR < 3; zR++)
          if (wW[zR] + MW <= RW[zR] - MW || wW[zR] >= RW[zR] + oM.q[zR] + MW) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const CW = this.stale;
        for (let zR = 0; zR < CW.length; zR += 4)
          if (CW[zR] === WW.i && CW[zR + 1] === WW.j && CW[zR + 2] === WW.k) return void(CW[zR + 3] = this.swept);
        if (16 === CW.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        CW.push(WW.i, WW.j, WW.k, this.swept)
      }
      writeStale() {
        const WW = this.swept,
          RW = this.stale;
        this.staleAll && WW - this.staleAllSwept >= oM.f && (this.staleAll = !1, RW.length = 0);
        let MW = 0;
        for (let CW = 0; CW < RW.length; CW += 4)
          if (WW - RW[CW + 3] < oM.f) {
            for (let WW = 0; WW < 4; WW++) RW[MW + WW] = RW[CW + WW];
            MW += 4
          } RW.length = MW;
        const wW = this.uniformInts;
        wW[3] = this.staleAll ? 5 : MW / 4;
        for (let CW = 0; CW < 4; CW++)
          for (let WW = 0; WW < 3; WW++) wW[16 + 4 * CW + WW] = 4 * CW < MW ? RW[4 * CW + WW] * jM : 0
      }
      writeUniform() {
        const WW = this.uniformInts;
        let RW = this.uniformWritten;
        if (RW) {
          let MW = !0;
          for (let wW = 0; wW < WW.length && MW; wW++) MW = WW[wW] === RW[wW];
          if (MW) return
        }
        RW ??= this.uniformWritten = new Int32Array(WW.length), RW.set(WW), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(WW) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, WW)
      }
      computeVolume(WW, RW, MW) {
        const wW = this.buildVolumePass();
        if (!wW) return void(this.volumeHolds = null);
        const CW = (0, oM.v)(this.volumeHolds, WW);
        this.volumeHolds = WW;
        const zR = 1 === CW.length && CW[0].size.every(((WW, RW) => WW === oM.q[RW])),
          AW = this.sweptChunk,
          bR = this.sweptLight,
          yR = RW[0] !== bR[0] || RW[1] !== bR[1] || RW[2] !== bR[2],
          NW = MW[0] !== AW[0] || MW[1] !== AW[1] || MW[2] !== AW[2],
          eW = yR && Cy(RW, bR);
        if ((zR || this.written || NW || eW) && (this.fastLeft = oM.f), zR || this.written || yR || NW) {
          this.written = !1;
          for (let WW = 0; WW < 3; WW++) AW[WW] = MW[WW], bR[WW] = RW[WW];
          this.sweepLeft = zR ? 0 : oM.f
        }
        if (zR ? this.swept += oM.f : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, CW.push(...(0, oM.B)(WW, this.slice)), this.slice = (this.slice + 1) % oM.f, this.swept++), 0 === CW.length) return;
        const BW = (0, oM.C)(this.workData, RW, CW);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const tR = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          TW = tR.beginComputePass({
            label: "sun-shadow-volume"
          });
        TW.setPipeline(wW.pipeline), TW.setBindGroup(fM.group, wW.bindGroup), TW.dispatchWorkgroups(Math.ceil(BW / oM.i)), TW.end(), this.device.queue.submit([tR.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const WW = fM,
          RW = GPUShaderStage.COMPUTE,
          MW = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: WW.uniform,
              visibility: RW,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: WW.dR,
              visibility: RW,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: WW.special,
              visibility: RW,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: WW.work,
              visibility: RW,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: WW.volume,
              visibility: RW,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          wW = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: MW,
            entries: [{
              binding: WW.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: WW.dR,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: WW.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: WW.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: WW.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [MW]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: QM()
            }),
            entryPoint: "main"
          }
        }).then((WW => {
          this.volumePass = {
            pipeline: WW,
            bindGroup: wW
          }
        }), (WW => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(WW)}`)
        })), null
      }
      start(WW) {
        if (this.window) return this.window;
        const RW = (WW, RW) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * WW, RW)
        };
        this.casters = new Db(((WW, MW) => {
          this.castersWritten = !0, RW(WW, MW)
        }), zN);
        const MW = new Wy(this.casters, ((WW, RW) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * WW, RW)
        }), RW);
        return MW.encoded = WW => {
          this.markStale(WW)
        }, WW.zM.on("chunkAdded", (WW => {
          MW.chunkAdded(WW)
        })), this.window = MW, MW
      }
    }
    var bN = MW(36742),
      yN = MW(36747);
    const Ny = 0,
      ey = 3,
      By = 4,
      tN = 5;

    function Ty(WW, RW, MW, wW) {
      WW.drawOffset(RW, wW + Ny), RW[wW + ey] = WW.drawTime(), MW[wW + By] = WW.ring.drawStart(), MW[wW + tN] = WW.ring.drawCount()
    }
    const gN = `\n${Tw}\n\nconst MAX_STOPS = ${yN.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${yN.e/4}>,\n\tcolor1: array<vec4f, ${yN.e}>,\n\tcolor2: array<vec4f, ${yN.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${yN.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${yN.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var iN = MW(39082);
    class Yy {
      constructor(WW, RW, MW, wW) {
        this.device = WW, this.system = RW, this.frameIndex = MW, this.zC = wW, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, iN.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (WW, RW) => {
          this.device.queue.writeBuffer(this.ring, WW * yN.i * 4, this.system.ring.records, WW * yN.i, (RW - WW) * yN.i)
        };
        const {
          name: CW
        } = RW;
        this.ring = WW.createBuffer({
          label: `particles-${CW}`,
          size: RW.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = WW.createBuffer({
          label: `particles-uniforms-${CW}`,
          size: 4 * yN.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(WW) {
        const RW = (0, iN.d)(this.system, this.uniformBits, WW);
        RW && (this.uniformBits = RW, this.device.queue.writeBuffer(this.uniforms, 0, RW))
      }
      bind() {
        const {
          system: WW
        } = this, RW = this.texture;
        (0, iN.j)(WW, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${WW.name}`,
          size: [yN.o, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * yN.o
        }, [yN.o, 1]));
        const MW = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.zC.whiteRamp;
        this.bindGroup && this.boundView === RW.view && this.boundSampler === RW.sampler && this.boundRamp === MW || (this.boundView = RW.view, this.boundSampler = RW.sampler, this.boundRamp = MW, this.bindGroup = this.device.createBindGroup({
          label: `particles-${WW.name}`,
          layout: this.zC.layout,
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
            resource: RW.sampler
          }, {
            binding: 3,
            resource: RW.view
          }, {
            binding: 4,
            resource: this.zC.rampSampler
          }, {
            binding: 5,
            resource: MW
          }]
        }))
      }
      destroy() {
        var WW;
        this.ring.destroy(), this.uniforms.destroy(), null === (WW = this.ramp) || void 0 === WW || WW.destroy()
      }
    }
    class Jy {
      constructor(WW, RW) {
        this.device = WW, this.resources = RW, this.renderable = void 0, this.systems = new Map, this.draws = [], this.zC = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, NR.d)();
        const MW = WW.createBindGroupLayout({
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
        this.frameLayout = WW.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = WW.createPipelineLayout({
          bindGroupLayouts: [RR(WW), MW, this.frameLayout]
        }), this.module = WW.createShaderModule({
          label: "particles",
          code: gN
        });
        const wW = WW.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        WW.queue.writeTexture({
          texture: wW
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.zC = {
          layout: MW,
          rampSampler: WW.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: wW.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (RW, MW) => (this.bindTarget(MW), {
            renderable: this.renderable,
            pipeline: AR(WW, MW),
            draw: WW => MW === this.preparedTarget ? this.draw(WW) : 0
          })
        }
      }
      get tBW() {
        return this.systems.size
      }
      reset() {
        for (const WW of this.systems.keys()) WW.reset()
      }
      describePendingWork() {
        return (0, bN.h)(this.systems.keys(), "Lite")
      }
      xMW(WW, RW) {
        const MW = new bN.e(WW, RW, this);
        return this.systems.set(MW, new Yy(this.device, MW, this.allocateFrameIndex(), this.zC)), MW
      }
      OzW(WW, RW) {
        for (const MW of this.systems.keys()) MW.OzW(WW, RW)
      }
      canDraw(WW) {
        const RW = this.systems.get(WW),
          MW = WW.texture ? this.resources.boundTexture(WW.texture) : null;
        if (!RW || !MW || !this.targetPipelines) return !1;
        if (RW.texture = MW, RW.pipelines.length = 0, !vz(WW.blendMode)) return this.warnOnce(`blend:${WW.blendMode}`, `particle blend mode ${WW.blendMode} is not drawn (${WW.name})`), !0;
        const wW = (0, XC.n)(WW.blendMode);
        for (const CW of wW) {
          const WW = this.pipelineFor(CW);
          if (!1 === WW) return RW.pipelines.length = 0, !0;
          WW && RW.pipelines.push(WW)
        }
        return RW.pipelines.length === wW.length
      }
      disposeStopped(WW) {
        WW.dispose()
      }
      remove(WW) {
        const RW = this.systems.get(WW);
        RW && (this.systems.delete(WW), RW.destroy(), this.freeFrameIndices.push(RW.frameIndex))
      }
      prepare(WW) {
        const RW = WW.animationRatio || 1;
        bM(this.renderable._worldCenter, WW, wR), this.preparedTarget = this.target, this.draws.length = 0;
        let MW = 0;
        for (const wW of this.systems.values()) {
          const WW = wW.system;
          if (!WW.animateIfActive(RW)) continue;
          if (WW.ring.takeUploads(wW.upload), !WW.hasLiveParticles() || 0 === wW.pipelines.length) continue;
          wW.writeUniforms(this.warnOnce), wW.bind();
          const CW = 64 * wW.frameIndex;
          wW.count = WW.ring.drawCount(), Ty(WW, this.frameData, this.frameBits, CW), MW = Math.max(MW, CW + 64), this.draws.push(wW)
        }
        MW > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, MW)
      }
      draw(WW) {
        let RW = 0,
          MW = null;
        for (const wW of this.draws) {
          WW.setBindGroup(1, wW.bindGroup), WW.setBindGroup(2, this.frameBindGroup, [256 * wW.frameIndex]);
          for (const CW of wW.pipelines) CW !== MW && (WW.setPipeline(CW), MW = CW), WW.draw(4, wW.count), RW++
        }
        return RW
      }
      bindTarget(WW) {
        this.target = WW;
        const RW = `${WW._colorFormat}|${WW._depthStencilFormat}|${WW._depthCompare}|${WW._sampleCount}`;
        let MW = this.pipelines.get(RW);
        MW || (MW = new Map, this.pipelines.set(RW, MW)), this.targetPipelines = MW
      }
      pipelineFor(WW) {
        var RW;
        const MW = this.targetPipelines,
          wW = MW.get(WW);
        if (void 0 !== wW) return wW;
        MW.set(WW, null);
        const CW = this.target,
          zR = WW === XC.e,
          AW = null !== (RW = CW._depthCompare) && void 0 !== RW ? RW : MR;
        return this.device.createRenderPipelineAsync({
          label: `particles-${WW}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: qR({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: zR ? 1 : 0
            }
          }, CW, KC((0, XC.k)(WW))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: CW._depthStencilFormat ? {
            format: CW._depthStencilFormat,
            depthCompare: AW,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: CW._sampleCount
          }
        }).then((RW => {
          MW.set(WW, RW)
        }), (RW => {
          MW.set(WW, !1), console.error("Lite particle pipeline failed", RW), nC("particles", `blend-${WW}`, RW)
        })), null
      }
      allocateFrameIndex() {
        const WW = this.freeFrameIndices.pop();
        if (void 0 !== WW) return WW;
        const RW = this.nextFrameIndex++;
        if (64 * (RW + 1) > this.frameData.length) {
          const WW = new Float32Array(2 * this.frameData.length);
          WW.set(this.frameData), this.frameData = WW, this.frameBits = new Uint32Array(WW.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return RW
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
    class Py {
      constructor(WW, RW, MW, wW, CW) {
        this.lite = WW, this.canvas = RW, this.info = MW, this.resources = CW, this.BNW = !1, this.needPOTTextures = !1, this.qzW = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = RW.width, this.renderHeight = RW.height, this.caps = {
          maxTextureSize: wW.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: wW.maxTextureArrayLayers
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
      setSize(WW, RW) {
        if (this.renderWidth === WW && this.renderHeight === RW) return !1;
        const MW = this.renderWidth,
          wW = this.renderHeight;
        this.renderWidth = WW, this.renderHeight = RW;
        try {
          (0, xR.p)(this.lite, WW, RW)
        } catch (CW) {
          if (CW instanceof DOMException && "InvalidStateError" === CW.name) {
            this.renderWidth = MW, this.renderHeight = wW;
            try {
              (0, xR.p)(this.lite, MW, wW)
            } catch {
              this.canvas.width = MW, this.canvas.height = wW
            }
            return console.warn("WebGPU could not allocate render targets for resize", WW, RW, CW.message), !1
          }
          throw CW
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
      Vk() {
        const WW = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : WW - this.lastFrameTime, this.lastFrameTime = WW
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(WW, RW) {
        const MW = document.createElement("canvas");
        return MW.width = WW, MW.height = RW, MW
      }
      WzW(WW, RW) {
        var MW;
        return null !== (MW = this.resources.WzW.get(WW)) && void 0 !== MW ? MW : new OW(this.resources, WW, RW)
      }
      atlasArray(WW, RW, MW) {
        return this.resources.atlasArray(WW, RW, MW)
      }
    }
    class Iy {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(WW) {
        this.fov = WW.fov, this.nearPlane = WW.near, this.farPlane = WW.far;
        const RW = WW.worldMatrix;
        for (let MW = 0; MW < 16; MW++)
          if (this.worldMatrix[MW] !== RW[MW]) return this.worldMatrix.set(RW), void this.worldMatrixVersion++
      }
    }
    class oy {
      constructor(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
        let eW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = WW, this.LC = RW, this.sceneTask = MW, this.gpuDevice = wW, this.terrain = CW, this.meshes = zR, this.particles = AW, this.resources = bR, this.sunShadow = eW, this.ObW = void 0, this.backendName = "WebGPU (Lite)", this.JzW = void 0, this.modelMeshes = void 0, this.camera = new Iy, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new KW(wW.lost), this.deviceLost = this.refusals.deviceLost, this.ObW = new Py(WW, yR, NW, wW.limits, bR), (0, XW.D)({
          mM: WW => {
            sW(WW) && bR.textureSlot(WW)
          },
          loaded: WW => sW(WW) ? bR.textureLoaded(WW) : null,
          canvasUpdated: (WW, RW, MW) => {
            sW(WW) && bR.canvasUpdated(WW, RW, MW)
          }
        }), this.JzW = zR.JzW, this.modelMeshes = zR.modelMeshes, RW.camera = this.camera
      }
      get castsEntitySunShadows() {
        var WW, RW;
        return null !== (WW = null === (RW = this.sunShadow) || void 0 === RW ? void 0 : RW.tracesEntities) && void 0 !== WW && WW
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(WW) {
        this.modelMeshes.attach(WW.model, WW.sceneMirror);
        const RW = WW.LC;
        this.setClearColour(RW.clearColor.r, RW.clearColor.g, RW.clearColor.b), RW.draw = () => {
          this.drawFrame(WW, RW)
        }
      }
      render(WW) {
        try {
          this.ObW.Vk(), WW.LC.render()
        } catch (RW) {
          throw this.refusals.frameFailed(RW), RW
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var WW, RW, MW, wW;
        const CW = [...this.particles.describePendingWork(), ...null !== (WW = null === (RW = this.sunShadow) || void 0 === RW ? void 0 : RW.describePendingWork()) && void 0 !== WW ? WW : []],
          zR = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (MW = this.terrain.sceneDepth) && void 0 !== MW && MW.compiling ? 1 : 0) + (null !== (wW = this.terrain.shadowMask) && void 0 !== wW && wW.compiling ? 1 : 0);
        zR > 0 && CW.push(`${zR} Lite pipelines compiling`);
        const AW = this.terrain.buffersAwaitingVerdict;
        AW > 0 && CW.push(`${AW} Lite terrain buffers awaiting their out-of-memory verdict`);
        const bR = this.resources.texturesLoading;
        return bR > 0 && CW.push(`${bR} Lite textures loading`), CW
      }
      prepareTexture(WW) {
        return null !== this.resources.boundTexture(WW) || this.resources.textureFailed(WW)
      }
      drawFrame(WW, RW) {
        var MW, wW, CW, zR, AW, bR;
        const yR = Cb(WW);
        this.camera.copyFromView(yR), this.setClearColour(yR.clearColour[0], yR.clearColour[1], yR.clearColour[2]), null === (MW = this.sunShadow) || void 0 === MW || MW.prepare(WW.BR, yR.eye, null !== (wW = WW.BR.ww) && void 0 !== wW ? wW : null), this.terrain.prepare(WW, yR), null === (CW = this.terrain.sceneDepth) || void 0 === CW || CW.setPlanes(yR.near, yR.far), null === (zR = this.terrain.shadowMask) || void 0 === zR || zR.prepare(yR), KA(this.sceneTask), this.meshes.prepare(RW, yR, WW.model.earthSky, null !== (AW = WW.BR.ww) && void 0 !== AW ? AW : null), this.particles.prepare(yR);
        const NW = performance.now();
        this.resources.flushUploads(), null === (bR = this.sunShadow) || void 0 === bR || bR.traceEntities(this.meshes);
        try {
          (0, xR.m)(this.engine, this.lastFrameTime > 0 ? NW - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = NW
      }
      setClearColour(WW, RW, MW) {
        const wW = this.LC.clearColor;
        wW.r = WW, wW.g = RW, wW.b = MW, wW.a = 1
      }
    }
    const ly = "WebGPU device lost while Lite was starting";

    function Fy(WW, RW) {
      return "object" === typeof WW && null !== WW ? Object.assign(WW, {
        startStep: RW
      }) : WW
    }
    async function fy(WW, RW) {
      const MW = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!MW) throw Fy(new Error("No WebGPU adapter"), "no_adapter");
      const wW = MW.info,
        CW = {
          vendor: (null === wW || void 0 === wW ? void 0 : wW.vendor) || "unknown vendor",
          renderer: (null === wW || void 0 === wW ? void 0 : wW.architecture) || "unknown renderer",
          version: (null === wW || void 0 === wW ? void 0 : wW.description) || "unknown version"
        },
        zR = function(WW) {
          const RW = {};
          for (const MW in WW.limits) {
            const wW = WW.limits[MW];
            "number" === typeof wW && (RW[MW] = wW)
          }
          return RW
        }(MW);
      let AW;
      WW.style.background = "black";
      try {
        AW = await (0, xR.g)(WW, {
          msaaSamples: RW.fyW ? 4 : 1,
          requiredLimits: zR,
          alphaMode: "premultiplied"
        })
      } catch (eW) {
        throw Fy(eW, "#47" === (null === (bR = eW) || void 0 === bR ? void 0 : bR.message) ? "no_adapter" : "device")
      }
      var bR;
      const yR = function(WW) {
        return WW._device
      }(AW);
      let NW = null;
      yR.lost.then((WW => {
        NW = WW, console.error(`WebGPU device lost (${WW.reason}): ${WW.message}`)
      }));
      try {
        const MW = await async function(WW, RW, MW, wW, CW, zR) {
          const AW = (0, vR.d)(WW),
            bR = new mb(WW, RW),
            yR = new vy(RW),
            NW = new lA(RW, bR, (WW => function(WW, RW) {
              for (const wW of SW(WW)) {
                var MW;
                if (wW._targetSignature === RW) return null !== (MW = wW._sceneBG) && void 0 !== MW ? MW : null
              }
              return null
            }(AW, WW))),
            eW = new Jy(RW, bR);
          for (const TW of function(WW, RW, MW) {
              return [RW.opaqueRenderable, WW.opaqueRenderable, WW.skyLastRenderable, MW.renderable, RW.transparentRenderable, WW.transparentRenderable, WW.frontRenderable]
            }(NW, yR, eW)) ZW(AW, TW);
          const BW = function(WW) {
            for (const RW of SW(WW))
              if ("LC" === RW.name) return RW;
            throw new Error("Lite: the scene has no render task named scene")
          }(AW);
          CW && yR.installSceneDepth(BW, WW);
          const tR = zR ? new Ay(RW, zR.entities) : null;
          yR.sunShadow = tR, tR && null !== zR && void 0 !== zR && zR.entities && (yR.shadowMask = new ob(RW, BW, WW, yR));
          return NW.sunShadow = tR, await (0, vR.h)(AW), new oy(WW, AW, BW, RW, yR, NW, eW, bR, MW, wW, tR)
        }(AW, yR, WW, CW, RW.sceneDepth, RW.sunShadow);
        if (null !== NW) {
          const {
            reason: WW,
            message: RW
          } = NW;
          throw Object.assign(new Error(`${ly} (${WW}): ${RW}`), {
            fallbackReason: ly
          })
        }
        return MW
      } catch (eW) {
        throw yR.destroy(), null === NW ? eW : Fy(eW, "device")
      }
    }
  },
  38385: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => TW,
      D: () => gR,
      c: () => CW,
      d: () => wW,
      f: () => tR,
      h: () => eW,
      i: () => YW,
      j: () => zR,
      n: () => bR,
      r: () => yR,
      u: () => AW,
      x: () => iR
    });
    const wW = 3,
      CW = 0,
      zR = 1,
      AW = 2,
      bR = {
        uniform: 3,
        dR: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      yR = 10,
      NW = "BloxdPackInputs",
      eW = "bloxdPackInputs",
      BW = [{
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
      tR = 80;

    function TW() {
      const WW = BW.map((WW => {
        let {
          name: RW,
          type: MW
        } = WW;
        return `    ${RW}: ${MW},\n`
      })).join("");
      return `struct ${NW} {\n${WW}}\n@group(${wW}) @binding(${CW}) var<uniform> ${eW}: ${NW};\n`
    }

    function gR(WW, RW) {
      const MW = new DataView(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, tR),
        [wW, CW, zR, AW, bR, yR] = BW;
      MW.setFloat32(wW.offset, RW.seconds, !0), MW.setUint32(CW.offset, RW.lit ? 1 : 0, !0);
      for (let NW = 0; NW < 3; NW++) MW.setInt32(zR.offset + 4 * NW, RW.renderOffset[NW], !0), MW.setFloat32(AW.offset + 4 * NW, RW.zbW[NW], !0), MW.setFloat32(bR.offset + 4 * NW, RW.eyePosition[NW], !0), MW.setFloat32(yR.offset + 4 * NW, RW.shadowDirection[NW], !0)
    }

    function iR(WW) {
      const RW = new Uint32Array(Math.max(1, WW.length));
      return WW.forEach(((WW, MW) => {
        let {
          id: wW,
          rotation: CW
        } = WW;
        RW[MW] = 65535 & wW | (3 & CW) << 16
      })), RW
    }
    const YW = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);