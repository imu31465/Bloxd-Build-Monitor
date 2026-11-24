export const id = 270;
export const ids = [270];
export const modules = {
  41629: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => GS,
      i: () => NS,
      m: () => xS,
      n: () => uS
    });
    var tS = gS(37294),
      bS = gS(38715),
      XS = gS(38712);

    function xS(SS, HS, gS, tS) {
      const bS = XS.u;
      HS.fill(0), SS.gravity.toArray(HS, bS.gravity), SS.colorDead.toArray(HS, bS.colorDead), gS[bS.ramp] = SS.useRampGradients ? 1 : 0;
      const xS = SS.getColorGradients(),
        NS = kS(SS, xS, "colour", tS);
      gS[bS.colorCount] = NS;
      for (let XS = 0; XS < NS; XS++) {
        var qS;
        const SS = xS[aS(xS, XS)];
        HS[bS.colorPositions + XS] = SS.gradient, SS.color1.toArray(HS, bS.color1 + 4 * XS), (null !== (qS = SS.color2) && void 0 !== qS ? qS : SS.color1).toArray(HS, bS.color2 + 4 * XS)
      }
      const uS = SS.getVelocityGradients(),
        IS = kS(SS, uS, "xG", tS);
      gS[bS.velocityCount] = IS;
      for (let XS = 0; XS < IS; XS++) nS(HS, bS.xG + 4 * XS, uS[aS(uS, XS)]);
      const fS = SS.useRampGradients ? SS.getColorRemapGradients() : null,
        KS = kS(SS, fS, "colour remap", tS);
      gS[bS.remapCount] = KS;
      for (let XS = 0; XS < KS; XS++) nS(HS, bS.remap + 4 * XS, fS[aS(fS, XS)])
    }

    function NS() {
      return {
        key: [],
        texels: new Uint8Array(4 * XS.k)
      }
    }
    const qS = [];

    function uS(SS, HS) {
      return IS(SS, qS), !CS(qS, HS.key) && (HS.key.length = 0, HS.key.push(...qS), HS.key.length > 0 && function(SS, HS) {
        for (let gS = 0; gS < XS.k; gS++) bS.n.GetCurrentGradient(gS / XS.k, SS, ((SS, HS, gS) => {
          tS.Color3.LerpToRef(SS.color, HS.color, gS, fS)
        })), HS[4 * gS] = 255 * fS.r, HS[4 * gS + 1] = 255 * fS.g, HS[4 * gS + 2] = 255 * fS.b, HS[4 * gS + 3] = 255
      }(SS.getRampGradients(), HS.texels), !0)
    }

    function IS(SS, HS) {
      HS.length = 0;
      const gS = SS.useRampGradients ? SS.getRampGradients() : null;
      if (null !== gS && void 0 !== gS && gS.length) {
        HS.push(gS.length);
        for (const SS of gS) HS.push(SS.gradient, SS.color.r, SS.color.g, SS.color.b)
      }
    }
    const fS = new tS.Color3;

    function kS(SS, HS, gS, tS) {
      return HS ? HS.length > XS.b ? (tS(`particleStops:${gS}`, `GPU particles use the first 2 and last ${XS.b-2} of more than ${XS.b} ${gS} gradient stops (${SS.name})`), XS.b) : HS.length : 0
    }

    function aS(SS, HS) {
      return HS < 2 || SS.length <= XS.b ? HS : SS.length - XS.b + HS
    }
    const KS = new Float32Array(XS.m),
      jS = new Uint32Array(KS.buffer);

    function GS(SS, HS, gS) {
      return xS(SS, KS, jS, gS), HS && CS(jS, HS) ? null : jS.slice()
    }

    function CS(SS, HS) {
      if (SS.length !== HS.length) return !1;
      for (let gS = 0; gS < SS.length; gS++)
        if (SS[gS] !== HS[gS]) return !1;
      return !0
    }

    function nS(SS, HS, gS) {
      var tS;
      SS[HS] = gS.gradient, SS[HS + 1] = gS.factor1, SS[HS + 2] = null !== (tS = gS.factor2) && void 0 !== tS ? tS : gS.factor1
    }
  },
  41625: (SS, HS, gS) => {
    function tS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const HS = new Set;
      return (gS, tS) => {
        HS.has(gS) || (HS.add(gS), console.warn(SS + tS))
      }
    }
    gS.d(HS, {
      d: () => tS
    })
  },
  41662: (SS, HS, gS) => {
    gS.d(HS, {
      createLiteRendererAsync: () => Eq,
      liteBabylonBackend: () => zS,
      setPipelineFailureHook: () => Rb
    });
    var tS = gS(37294),
      bS = gS(37636),
      XS = gS(37928),
      xS = gS(37240),
      NS = gS(37936);
    class qS extends NS.c {
      constructor() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        super(...HS), this.color = new tS.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: HS[0].lL().getUniqueId(),
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
          needAlphaBlendingForMesh: SS => SS.visibility < 1 || SS.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const uS = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      IS = SS => 1 << uS.indexOf(SS),
      fS = IS("VERTEXCOLOR"),
      kS = IS("INSTANCES"),
      aS = IS("THIN_INSTANCES"),
      KS = IS("INSTANCESCOLOR"),
      jS = IS("FOG"),
      GS = IS("LITE_FRONT_LAYER");

    function CS(SS, HS, gS, tS) {
      let bS = 0;
      return SS.isVerticesDataPresent("color") && (bS |= fS), "none" !== HS && (bS |= kS), "thin" === HS && (bS |= aS, SS.isVerticesDataPresent("instanceColor") && (bS |= KS)), tS.fogEnabled && SS.applyFog && 0 !== tS.fogMode && (bS |= jS), gS >= 1 && (bS |= GS), bS
    }

    function nS(SS, HS) {
      SS.updateColor4("color", HS.color, HS.alpha)
    }
    var PS = gS(37867),
      QS = gS(37445),
      DS = gS(37335),
      wS = gS(37209),
      hS = gS(37855),
      ZS = gS(37864),
      JS = gS(37225),
      OS = gS(37233),
      dS = gS(37242);
    const cS = wS.e.GLSL;
    class vS {
      constructor(SS, HS) {
        this.name = SS, this.Bj = HS, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.bY = {
          addOnce: SS => {
            this.disposers.push(SS)
          }
        }, this.uniqueId = HS.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      lL() {
        return this.Bj
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
      needAlphaBlendingForMesh(SS) {
        return (0, JS.T)(this.model, SS.visibility, SS.hasVertexAlpha)
      }
      needAlphaTestingForMesh(SS) {
        return (0, JS.V)(this.model, SS.visibility, SS.hasVertexAlpha)
      }
      dispose() {
        (0, QS.n)(this);
        for (const SS of this.disposers.splice(0)) SS()
      }
      get model() {
        return (0, JS.cb)(this)
      }
    }
    const ES = new WeakSet;

    function LS(SS) {
      return ES.has(SS)
    }

    function YS(SS) {
      ES.add(SS)
    }
    const AS = {
      create: (SS, HS) => ((0, DS.q)(SS, new vS(SS.name, HS)), OS.e.defines()),
      write: () => {},
      addFeature: (SS, HS) => {
        const gS = SS.mirror;
        HS.feature === ZS.i && HS.state.dirLightCount > 0 && (SS.disableLighting = !0, (0, JS.$)(SS)), "BLOXD_LIGHTING" in HS.defines && (0, QS.k)(gS), HS.feature === hS.j && ((0, PS.h)(HS.state, cS), function(SS, HS) {
          const gS = SS.lL().AK();
          HS.textures.forEach(((tS, bS) => {
            setTimeout((() => {
              var XS, xS;
              const {
                url: NS
              } = tS.source;
              gS.atlasArray(NS, null !== (XS = null === (xS = HS.sources.pixels) || void 0 === xS ? void 0 : xS[bS]) && void 0 !== XS ? XS : null, HS.sources.layerWidth).then((gS => {
                (0, PS.b)(SS, HS, bS, gS, gS.layerWidth, gS.layers, cS)
              })).catch((SS => {
                console.error(`Failed to build texture array for atlas ${bS}`, SS)
              }))
            }))
          }))
        }(gS, HS.state))
      },
      texture: (SS, HS, gS) => {
        let {
          data: tS,
          sets: bS
        } = gS;
        var XS;
        (YS(SS), tS) && (SS.uvSet = null !== (XS = null === bS || void 0 === bS ? void 0 : bS.coordinatesIndex) && void 0 !== XS ? XS : 0, (0, DS.$)(SS.matrix, null !== bS && void 0 !== bS ? bS : {}))
      },
      cube: YS,
      canvas: (SS, HS, gS) => {
        let {
          width: tS,
          height: bS,
          mipmaps: XS,
          samplingMode: xS = dS.h.trilinear,
          hasAlpha: NS = !1,
          wrap: qS = dS.b.clamp
        } = gS;
        const uS = SS.AK().createCanvas(tS, bS),
          IS = new dS.k("2d", {
            kind: "canvas",
            width: tS,
            height: bS,
            canvas: uS
          }, {
            samplingMode: xS,
            wrapU: qS,
            wrapV: qS,
            noMipmap: !XS,
            invertY: !0
          });
        return IS.hasAlpha = NS, YS(IS), IS
      }
    };
    var yS = gS(37471),
      VS = gS(37144);
    class iS {
      constructor(SS, HS, gS) {
        this.engine = SS, this.clearColor = HS, this.ambientColor = gS, this.onBeforeRenderObservable = new VS.e, this.onBeforeCameraRenderObservable = new VS.e, this.onAfterRenderObservable = new VS.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.zD = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      AK() {
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
      addPendingData(SS) {
        this.pending.push(SS)
      }
      removePendingData(SS) {
        const HS = this.pending.indexOf(SS); - 1 !== HS && this.pending.splice(HS, 1)
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

    function WS() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const zS = {
      kgS: WS,
      LtS: (SS, HS) => {
        const gS = new iS(SS.engine, tS.b.FromArray(HS.clearColor), tS.Color3.FromArray(HS.ambientColor));
        (0, xS.d)(AS, gS), SS.Bj = gS,
          function(SS, HS) {
            const gS = Object.assign((0, yS.j)(SS, "camera"), {
              layerMask: 268435455
            });
            SS.model.nodes.setWorldSource(gS.row, SS.model.view.worldMatrix), SS.camera = HS.activeCamera = gS
          }(SS, gS), (0, bS.e)(SS, ((SS, HS, gS) => (0, XS.d)(SS, HS, gS, NS.c)))
      },
      OtS: () => {},
      setBabylonFog: () => {},
      AtS: WS,
      WtS: () => {},
      linesFromArrays: (SS, HS, gS) => (0, XS.d)(SS, HS, gS, qS),
      Mj: () => {},
      itS: WS
    };
    var US = gS(41713),
      pS = gS(41730);
    class sS {
      constructor(SS) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const HS = new Promise((SS => {
          this.refused = SS
        }));
        this.deviceLost = Promise.race([SS, HS]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(SS) {
        (function(SS) {
          const {
            name: HS,
            message: gS
          } = null !== SS && void 0 !== SS ? SS : {};
          return "InvalidStateError" === HS && "string" === typeof gS && gS.startsWith("GPUDevice.")
        })(SS) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: SS.message,
          framesRefused: !0
        }))
      }
    }
    class BS {
      constructor(SS) {
        this.resources = SS, this.matrixKey = {
          hf: 0
        }, this.attributesKey = {
          hf: 0
        }, this.inputs = Object.create(null);
        for (let HS = 0; HS < 4; HS++) this.inputs[`world${HS}`] = new RS(this.matrixKey, 16 * HS, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(SS, HS) {
        this.resources.vertexBufferCreated(this.matrixKey, SS, !0), HS && this.resources.vertexBufferCreated(this.attributesKey, HS, !0)
      }
    }
    class MS extends BS {
      constructor(SS, HS, gS) {
        super(SS), this.mesh = HS, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const tS = this.inputs;
        let bS = 0;
        for (const {
            size: xS
          }
          of gS) bS += xS;
        for (const {
            name: xS,
            offset: NS,
            size: qS,
            type: uS
          }
          of gS) tS[xS] = new RS(this.attributesKey, 4 * NS, 4 * bS, qS, !0, uS);
        this.rowStride = bS, SS.h_.set(HS, this);
        const XS = HS.isVerticesDataPresent;
        HS.isVerticesDataPresent = (SS, gS) => SS in tS || XS.call(HS, SS, gS)
      }
      attach(SS, HS) {
        this.matrices = SS, this.attributes = HS, this.bind(SS, HS), this.mirror(SS, SS.length, SS.length / 16)
      }
      R7(SS) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, SS ? 64 * SS : void 0)
      }
      N9() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(SS, HS) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * SS, 16 * HS)
      }
      attributeRows(SS, HS) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, SS * this.rowStride, HS * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(SS, HS, gS) {
        const tS = this.mesh._thinInstanceDataStorage;
        tS.matrixData = SS, tS.matrixBufferSize = HS, tS.worldMatrices = null, tS.instancesCount = gS
      }
    }
    class FS extends BS {
      constructor(SS, HS, gS) {
        var tS, bS, XS, xS;
        super(SS), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (tS = null === gS || void 0 === gS ? void 0 : gS.interleavedKinds) && void 0 !== tS ? tS : null, this.offsets = null !== (bS = null === gS || void 0 === gS ? void 0 : gS.interleavedOffsets) && void 0 !== bS ? bS : [], this.rowStride = null !== (XS = null === gS || void 0 === gS ? void 0 : gS.interleavedRowStride) && void 0 !== XS ? XS : 0, null === (xS = this.layout) || void 0 === xS || xS.forEach(((SS, HS) => {
          this.inputs[SS] = new RS(this.attributesKey, 4 * this.offsets[HS], 4 * this.rowStride, gS.strides[SS])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), SS.batchUploads.set(HS, this), HS.bY.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(SS) {
        const HS = this.packedBatch;
        return HS.renderSelf ? 0 === SS ? this.packedSource : HS.instances[SS - 1] : HS.instances[SS]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(SS, HS, gS, tS) {
        const bS = (HS.renderSelf ? 1 : 0) + HS.rows.length;
        if (this.frame = tS, this.count = bS, this.packedSource = SS, this.packedBatch = HS, 0 === bS) return;
        if (SS.getWorldMatrix(), 16 * bS > this.matrices.length) {
          let SS = this.matrices.length / 16;
          for (; SS < bS;) SS *= 2;
          this.matrices = new Float32Array(16 * SS), this.attributes &&= new Float32Array(SS * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let XS = 0;
        HS.renderSelf && this.packRow(XS++, SS, HS.row, gS);
        for (let xS = 0; xS < HS.rows.length; xS++) this.packRow(XS++, HS.instances[xS], HS.rows[xS], gS);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * bS), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, bS * this.rowStride)
      }
      packRow(SS, HS, gS, tS) {
        const bS = this.matrices;
        if (gS < 0) bS.set(HS.getWorldMatrix().m, 16 * SS);
        else
          for (let uS = 0; uS < 16; uS++) bS[16 * SS + uS] = tS[16 * gS + uS];
        const XS = this.attributes;
        if (!XS) return;
        const xS = HS.mY,
          NS = this.layout;
        for (let uS = 0; uS < NS.length; uS++) {
          var qS;
          const HS = null !== (qS = xS[NS[uS]]) && void 0 !== qS ? qS : 0,
            gS = SS * this.rowStride + this.offsets[uS];
          HS.toArray ? HS.toArray(XS, gS) : HS.copyToArray ? HS.copyToArray(XS, gS) : XS[gS] = HS
        }
      }
    }
    class RS {
      constructor(SS, HS, gS, tS) {
        let bS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = SS, this.byteOffset = HS, this.byteStride = gS, this.size = tS, this.instanced = bS, this.type = XS, this.normalized = xS
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
    const TS = "CANVAS_ALPHA_ONE",
      oS = `override ${TS}: bool = false;`,
      lS = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function mS(SS, HS, gS) {
      var tS;
      let bS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const XS = null !== (tS = HS._colorFormat) && void 0 !== tS ? tS : "bgra8unorm",
        xS = bS ? 15 : 0;
      return gS ? {
        ...SS,
        targets: [{
          format: XS,
          blend: {
            color: gS,
            alpha: lS
          },
          writeMask: xS
        }]
      } : {
        ...SS,
        constants: {
          ...SS.constants,
          [TS]: 1
        },
        targets: [{
          format: XS,
          writeMask: xS
        }]
      }
    }

    function eS(SS, HS) {
      SS._renderables.push(HS)
    }

    function rS(SS) {
      var HS, gS;
      return null !== (HS = null === (gS = SS._frameGraph) || void 0 === gS ? void 0 : gS._tasks) && void 0 !== HS ? HS : []
    }

    function SH(SS) {
      return SS._currentEncoder
    }

    function HH(SS) {
      return SS.createBindGroupLayout({
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
    const gH = "greater-equal",
      tH = 2e5,
      bH = 1e5,
      XH = new WeakMap;

    function xH(SS, HS) {
      let gS = XH.get(SS);
      if (!gS) {
        gS = {
          module: SS.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, XH.set(SS, gS)
      }
      const tS = `${HS._colorFormat}|${HS._depthStencilFormat}|${HS._sampleCount}`;
      let bS = gS.pipelines.get(tS);
      if (!bS) {
        var XS;
        const {
          module: xS
        } = gS;
        bS = SS.createRenderPipeline({
          label: `placeholder ${tS}`,
          layout: SS.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: xS,
            entryPoint: "v"
          },
          fragment: {
            module: xS,
            entryPoint: "f",
            targets: [{
              format: null !== (XS = HS._colorFormat) && void 0 !== XS ? XS : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: HS._depthStencilFormat ? {
            format: HS._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: HS._sampleCount
          }
        }), gS.pipelines.set(tS, bS)
      }
      return bS
    }

    function NH(SS, HS, gS) {
      const tS = HS.eye,
        bS = HS.viewMatrix;
      SS[0] = tS[0] + bS[2] * gS, SS[1] = tS[1] + bS[6] * gS, SS[2] = tS[2] + bS[10] * gS
    }
    var qH = gS(37977),
      uH = gS(41625),
      IH = gS(37216);
    const fH = Math.PI,
      kH = fH / 1.95,
      aH = [5e-4 / 94, 125e-7, 5e-4 / 18],
      KH = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((SS => {
        let [HS, gS] = SS;
        return .434 * fH * Math.pow(2 * fH / HS, 2) * gS
      }));

    function jH(SS, HS, gS) {
      const {
        up: tS,
        mieDirectionalG: bS
      } = SS, XS = 1 - nH(1 - Math.exp(HS[1] / 45e4), 0, 1), xS = SS.rayleigh - (1 - XS), NS = Math.hypot(HS[0], HS[1], HS[2]), qS = NS > 0 ? 1 / NS : 0, uS = gS.sunDir;
      for (let aS = 0; aS < 3; aS++) uS[aS] = HS[aS] * qS;
      const IS = uS[0] * tS[0] + uS[1] * tS[1] + uS[2] * tS[2],
        fS = 1e3 * Math.max(0, 1 - Math.exp(-(kH - Math.acos(nH(IS, -1, 1))) / 1.5));
      gS.sunE = fS;
      const kS = .2 * SS.turbidity * 1e-17 * SS.mieCoefficient;
      for (let aS = 0; aS < 3; aS++) {
        const SS = aH[aS] * xS,
          HS = KH[aS] * kS,
          tS = fS / (SS + HS);
        gS.inScatterR[aS] = SS * tS, gS.inScatterM[aS] = HS * tS, gS.extinctionBeta[aS] = 8400 * SS + 1250 * HS
      }
      return gS.sunsetMix = nH(Math.pow(1 - IS, 5), 0, 1), gS.sunDiscE = 19e3 * fS, gS.mieScale = (1 - bS * bS) / (4 * fH), gS.mieBase = 1 + bS * bS, gS.mieSlope = 2 * bS, gS
    }
    const GH = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const CH = 1 / function(SS) {
      const {
        A: HS,
        B: gS,
        C: tS,
        D: bS,
        E: XS,
        F: xS
      } = GH;
      return (SS * (HS * SS + tS * gS) + bS * XS) / (SS * (HS * SS + gS) + bS * xS) - XS / xS
    }(1e3);

    function nH(SS, HS, gS) {
      return Math.min(Math.max(SS, HS), gS)
    }
    const PH = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function QH(SS, HS) {
      const gS = new Map(HS),
        tS = [],
        bS = [],
        XS = () => 0 === bS.length || bS[bS.length - 1].active;
      let xS = null;
      const NS = () => {
        const SS = [...gS].filter((SS => {
            let [, HS] = SS;
            return !0 !== HS
          })),
          HS = SS.map((SS => {
            let [HS] = SS;
            return HS
          })).join("|");
        xS = SS.length ? new RegExp(`\\b(${HS})\\b`, "g") : null
      };
      NS();
      for (const qS of SS.split("\n")) {
        const SS = PH.exec(qS);
        if (!SS) {
          XS() && tS.push(xS ? DH(qS, xS, gS) : qS);
          continue
        }
        const HS = SS[1],
          uS = SS[2].trim();
        if ("ifdef" === HS || "ifndef" === HS || "if" === HS) {
          const SS = XS(),
            tS = "if" === HS ? wH(uS, gS) : gS.has(uS) === ("ifdef" === HS);
          bS.push({
            active: SS && tS,
            parentActive: SS,
            taken: tS
          })
        } else if ("elif" === HS || "else" === HS) {
          const SS = bS[bS.length - 1];
          if (!SS) throw new Error(`#${HS} without #if`);
          const tS = !SS.taken && ("else" === HS || wH(uS, gS));
          SS.active = SS.parentActive && tS, SS.taken = SS.taken || tS
        } else if ("endif" === HS) {
          if (!bS.pop()) throw new Error("#endif without #if")
        } else if (XS()) {
          const [SS, ...tS] = uS.split(/\s+/);
          "undef" === HS ? gS.delete(SS) : gS.set(SS, !tS.length || tS.join(" ")), NS()
        }
      }
      if (bS.length) throw new Error("Unterminated #if");
      return tS.join("\n")
    }

    function DH(SS, HS, gS) {
      return SS.replace(HS, (SS => {
        const HS = gS.get(SS);
        return "string" === typeof HS ? HS : SS
      }))
    }

    function wH(SS, HS) {
      var gS;
      const tS = null !== (gS = SS.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== gS ? gS : [];
      let bS = 0;
      const XS = () => tS[bS],
        xS = () => tS[bS++],
        NS = SS => {
          const gS = /^\d/.test(SS) ? SS : HS.get(SS);
          return "string" === typeof gS ? parseInt(gS) : Number.NaN
        },
        qS = () => {
          const SS = xS();
          if ("!" === SS) return !qS();
          if ("(" === SS) {
            const SS = IS();
            return xS(), SS
          }
          if ("defined" === SS) {
            const SS = "(" === XS();
            SS && xS();
            const gS = xS();
            return SS && xS(), HS.has(gS)
          }
          const gS = XS();
          if ("==" === gS || "!=" === gS || ">" === gS || "<" === gS || ">=" === gS || "<=" === gS) {
            xS();
            const HS = NS(SS),
              tS = NS(xS());
            if (Number.isNaN(HS) || Number.isNaN(tS)) return !1;
            switch (gS) {
              case "==":
                return HS === tS;
              case "!=":
                return HS !== tS;
              case ">":
                return HS > tS;
              case "<":
                return HS < tS;
              case ">=":
                return HS >= tS;
              default:
                return HS <= tS
            }
          }
          return HS.has(SS)
        },
        uS = () => {
          let SS = qS();
          for (;
            "&&" === XS();) {
            xS();
            const HS = qS();
            SS = SS && HS
          }
          return SS
        },
        IS = () => {
          let SS = uS();
          for (;
            "||" === XS();) {
            xS();
            const HS = uS();
            SS = SS || HS
          }
          return SS
        },
        fS = IS();
      if (bS !== tS.length) throw new Error(`Cannot evaluate #if ${SS}`);
      return fS
    }
    var hH = gS(37212),
      ZH = gS(37540),
      JH = gS(37549),
      OH = gS(40735),
      dH = gS(38771);
    const cH = 32,
      vH = [10, 3, 10],
      EH = [21, 7, 21],
      LH = EH[0] * EH[1] * EH[2],
      YH = 0,
      AH = 1,
      yH = 2,
      VH = 3,
      iH = 64,
      WH = 512,
      zH = 4 * LH,
      UH = 1536,
      pH = zH + LH * UH,
      sH = 1073741824,
      BH = pH + 1;

    function MH(SS, HS) {
      const gS = SS % HS;
      return gS < 0 ? gS + HS : gS
    }

    function FH(SS, HS, gS) {
      return tS = MH(SS, EH[0]), bS = MH(HS, EH[1]), XS = MH(gS, EH[2]), tS + EH[0] * (bS + EH[1] * XS);
      var tS, bS, XS
    }

    function RH(SS, HS, gS) {
      return SS + 8 * (HS + 8 * gS)
    }

    function TH(SS, HS, gS) {
      return SS + 4 * (HS + 4 * gS)
    }
    const oH = 65535,
      lH = 0,
      mH = 1,
      eH = 2,
      rH = 3;

    function Sg(SS) {
      return Math.ceil(SS * SS / 32)
    }
    const Hg = 8192,
      gg = 1 << 18,
      tg = 65536,
      bg = 294912,
      Xg = 128,
      xg = 4096,
      Ng = 16,
      qg = 16385,
      ug = 81921,
      Ig = 147457,
      fg = 4194304;
    const kg = [0, 0, 0],
      ag = [0, 0, 0];

    function Kg(SS, HS, gS, tS) {
      ! function(SS, HS, gS) {
        const [tS, bS, XS] = [SS[0], SS[1], SS[2]];
        let xS, NS, qS;
        Math.abs(bS) < .99 ? (xS = XS, NS = 0, qS = -tS) : (xS = -bS, NS = tS, qS = 0);
        const uS = Math.hypot(xS, NS, qS);
        HS[0] = xS / uS, HS[1] = NS / uS, HS[2] = qS / uS, gS[0] = bS * HS[2] - XS * HS[1], gS[1] = XS * HS[0] - tS * HS[2], gS[2] = tS * HS[1] - bS * HS[0]
      }(tS, kg, ag);
      const bS = 1 / 32;
      for (const [XS, xS] of [
          [0, kg],
          [4, ag]
        ]) {
        for (let gS = 0; gS < 3; gS++) SS[HS + XS + gS] = xS[gS] * bS;
        SS[HS + XS + 3] = -(xS[0] * gS[0] + xS[1] * gS[1] + xS[2] * gS[2]) * bS
      }
    }
    class jg {
      constructor() {
        this.words = new Uint32Array(Ig), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Qa(SS, HS) {
        this.parts = 0, this.refs = 0, this.view = SS, this.viewAt = HS;
        const gS = SS[HS + 1] * SS[HS + 6] - SS[HS + 2] * SS[HS + 5],
          tS = SS[HS + 2] * SS[HS + 4] - SS[HS] * SS[HS + 6],
          bS = SS[HS] * SS[HS + 5] - SS[HS + 1] * SS[HS + 4],
          XS = Math.hypot(gS, tS, bS) || 1;
        this.light[0] = gS / XS, this.light[1] = tS / XS, this.light[2] = bS / XS
      }
      add(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= xg || ! function(SS, HS, gS) {
            const tS = SS[HS],
              bS = SS[HS + 1],
              XS = SS[HS + 2],
              xS = SS[HS + 3],
              NS = SS[HS + 4],
              qS = SS[HS + 5],
              uS = SS[HS + 6],
              IS = SS[HS + 7],
              fS = SS[HS + 8],
              kS = SS[HS + 9],
              aS = SS[HS + 10],
              KS = SS[HS + 11],
              jS = SS[HS + 12],
              GS = SS[HS + 13],
              CS = SS[HS + 14],
              nS = SS[HS + 15],
              PS = tS * qS - bS * NS,
              QS = tS * uS - XS * NS,
              DS = tS * IS - xS * NS,
              wS = bS * uS - XS * qS,
              hS = bS * IS - xS * qS,
              ZS = XS * IS - xS * uS,
              JS = fS * GS - kS * jS,
              OS = fS * CS - aS * jS,
              dS = fS * nS - KS * jS,
              cS = kS * CS - aS * GS,
              vS = kS * nS - KS * GS,
              ES = aS * nS - KS * CS,
              LS = PS * ES - QS * vS + DS * cS + wS * dS - hS * OS + ZS * JS;
            if (!(Math.abs(LS) > 1e-12)) return !1;
            const YS = 1 / LS;
            return gS[0] = (qS * ES - uS * vS + IS * cS) * YS, gS[1] = (XS * vS - bS * ES - xS * cS) * YS, gS[2] = (GS * ZS - CS * hS + nS * wS) * YS, gS[3] = (aS * hS - kS * ZS - KS * wS) * YS, gS[4] = (uS * dS - NS * ES - IS * OS) * YS, gS[5] = (tS * ES - XS * dS + xS * OS) * YS, gS[6] = (CS * DS - jS * ZS - nS * QS) * YS, gS[7] = (fS * ZS - aS * DS + KS * QS) * YS, gS[8] = (NS * vS - qS * dS + IS * JS) * YS, gS[9] = (bS * dS - tS * vS - xS * JS) * YS, gS[10] = (jS * hS - GS * DS + nS * PS) * YS, gS[11] = (kS * DS - fS * hS - KS * PS) * YS, gS[12] = (qS * OS - NS * cS - uS * JS) * YS, gS[13] = (tS * cS - bS * OS + XS * JS) * YS, gS[14] = (GS * QS - jS * wS - CS * PS) * YS, gS[15] = (fS * wS - kS * QS + aS * PS) * YS, !0
          }(HS, gS, this.inverse)) return;
        const {
          view: tS,
          viewAt: bS
        } = this, XS = gS;
        let xS = 1 / 0,
          NS = 1 / 0,
          qS = -1 / 0,
          uS = -1 / 0,
          IS = -1 / 0;
        const [fS, kS, aS] = this.light;
        for (let DS = 0; DS < 8; DS++) {
          const gS = 1 & DS ? SS.hi[0] : SS.lo[0],
            KS = 2 & DS ? SS.hi[1] : SS.lo[1],
            jS = 4 & DS ? SS.hi[2] : SS.lo[2],
            GS = gS * HS[XS] + KS * HS[XS + 4] + jS * HS[XS + 8] + HS[XS + 12],
            CS = gS * HS[XS + 1] + KS * HS[XS + 5] + jS * HS[XS + 9] + HS[XS + 13],
            nS = gS * HS[XS + 2] + KS * HS[XS + 6] + jS * HS[XS + 10] + HS[XS + 14],
            PS = tS[bS] * GS + tS[bS + 1] * CS + tS[bS + 2] * nS + tS[bS + 3],
            QS = tS[bS + 4] * GS + tS[bS + 5] * CS + tS[bS + 6] * nS + tS[bS + 7];
          xS = Math.min(xS, PS), NS = Math.min(NS, QS), qS = Math.max(qS, PS), uS = Math.max(uS, QS), IS = Math.max(IS, fS * GS + kS * CS + aS * nS)
        }
        if (qS < -1 || uS < -1 || xS >= 1 || NS >= 1) return;
        const KS = this.parts++,
          jS = this.rects;
        jS[4 * KS] = Gg(xS), jS[4 * KS + 1] = Gg(NS), jS[4 * KS + 2] = Gg(qS), jS[4 * KS + 3] = Gg(uS);
        const GS = this.inverse,
          {
            cell: CS,
            dims: nS,
            lo: PS
          } = SS,
          QS = ug + KS * Ng;
        for (let DS = 0; DS < 3; DS++) this.floats[QS + 4 * DS] = GS[DS] / CS, this.floats[QS + 4 * DS + 1] = GS[4 + DS] / CS, this.floats[QS + 4 * DS + 2] = GS[8 + DS] / CS, this.floats[QS + 4 * DS + 3] = (GS[12 + DS] - PS[DS]) / CS;
        this.words[QS + 12] = SS.at, this.floats[QS + 13] = IS + .001 * (1 + Math.abs(IS)), this.words[QS + 14] = nS[0] | nS[1] << 8 | nS[2] << 16
      }
      finish() {
        const SS = Xg,
          {
            counts: HS,
            rects: gS,
            words: tS
          } = this;
        HS.fill(0);
        let bS = 0,
          XS = 0;
        for (; XS < this.parts; XS++) {
          const tS = 4 * XS,
            xS = (gS[tS + 2] - gS[tS] + 1) * (gS[tS + 3] - gS[tS + 1] + 1);
          if (bS + xS > 65536) break;
          bS += xS;
          for (let bS = gS[tS + 1]; bS <= gS[tS + 3]; bS++)
            for (let XS = gS[tS]; XS <= gS[tS + 2]; XS++) HS[bS * SS + XS]++
        }
        let xS = 0;
        for (let qS = 0; qS < 16384; qS++) tS[qS] = xS, xS += HS[qS], HS[qS] = tS[qS];
        tS[16384] = xS;
        for (let qS = 0; qS < XS; qS++) {
          const bS = 4 * qS;
          for (let XS = gS[bS + 1]; XS <= gS[bS + 3]; XS++)
            for (let xS = gS[bS]; xS <= gS[bS + 2]; xS++) tS[qg + HS[XS * SS + xS]++] = qS
        }
        const NS = this.floats;
        for (let qS = 0; qS < 16384; qS++) {
          const SS = qg + tS[qS],
            HS = SS + Math.min(tS[qS + 1] - tS[qS], 64);
          for (let gS = SS + 1; gS < HS; gS++) {
            const HS = tS[gS],
              bS = NS[81934 + HS * Ng];
            let XS = gS - 1;
            for (; XS >= SS && NS[81934 + tS[XS] * Ng] < bS; XS--) tS[XS + 1] = tS[XS];
            tS[XS + 1] = HS
          }
        }
        this.refs = bS
      }
    }

    function Gg(SS) {
      return Math.min(127, Math.max(0, Math.floor((.5 * SS + .5) * Xg)))
    }

    function Cg(SS, HS, gS, tS, bS) {
      for (let XS = 0; XS < 4; XS++)
        for (let xS = 0; xS < 4; xS++) bS[4 * XS + xS] = SS[HS + 4 * XS] * gS[tS + xS] + SS[HS + 4 * XS + 1] * gS[tS + 4 + xS] + SS[HS + 4 * XS + 2] * gS[tS + 8 + xS] + SS[HS + 4 * XS + 3] * gS[tS + 12 + xS]
    }

    function ng(SS, HS, gS, tS, bS) {
      const XS = SS[0] - HS,
        xS = SS[1] - gS,
        NS = SS[2] - tS,
        qS = SS[3] - HS,
        uS = SS[4] - gS,
        IS = SS[5] - tS,
        fS = SS[6] - HS,
        kS = SS[7] - gS,
        aS = SS[8] - tS;
      if (Math.min(XS, qS, fS) > bS || Math.max(XS, qS, fS) < -bS) return !1;
      if (Math.min(xS, uS, kS) > bS || Math.max(xS, uS, kS) < -bS) return !1;
      if (Math.min(NS, IS, aS) > bS || Math.max(NS, IS, aS) < -bS) return !1;
      const KS = qS - XS,
        jS = uS - xS,
        GS = IS - NS,
        CS = fS - qS,
        nS = kS - uS,
        PS = aS - IS,
        QS = jS * PS - GS * nS,
        DS = GS * CS - KS * PS,
        wS = KS * nS - jS * CS;
      if (Math.abs(QS * XS + DS * xS + wS * NS) > bS * (Math.abs(QS) + Math.abs(DS) + Math.abs(wS))) return !1;
      const hS = [KS, jS, GS, CS, nS, PS, XS - fS, xS - kS, NS - aS];
      for (let ZS = 0; ZS < 3; ZS++) {
        const SS = hS[3 * ZS],
          HS = hS[3 * ZS + 1],
          gS = hS[3 * ZS + 2];
        for (let tS = 0; tS < 3; tS++) {
          const KS = 0 === tS ? 0 : 1 === tS ? gS : -HS,
            jS = 0 === tS ? -gS : 1 === tS ? 0 : SS,
            GS = 0 === tS ? HS : 1 === tS ? -SS : 0,
            CS = KS * XS + jS * xS + GS * NS,
            nS = KS * qS + jS * uS + GS * IS,
            PS = KS * fS + jS * kS + GS * aS,
            QS = bS * (Math.abs(KS) + Math.abs(jS) + Math.abs(GS));
          if (Math.min(CS, nS, PS) > QS || Math.max(CS, nS, PS) < -QS) return !1
        }
      }
      return !0
    }
    const Pg = new Float32Array(1);
    new Uint32Array(Pg.buffer);
    var Qg = gS(38776);

    function Dg(SS) {
      const [HS, gS, tS] = Qg.o;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${SS.group}) @binding(${SS.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${HS-1}, ${gS-1}, ${tS-1});\n}\n`
    }

    function wg(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [bS, XS, xS] = EH, [NS, qS, uS] = vH, IS = Math.log2(cH), fS = tS ? "var<private> bloxdSpCrossed: bool;\n" : "", kS = tS ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${SS.group}) @binding(${SS.Lk}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${SS.group}) @binding(${SS.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${gS?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${fS}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${mH}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${eH}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${gS?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${rH}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${bS}, ${XS}, ${xS});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${bS} * (s.y + ${XS} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${NS}, ${qS}, ${uS}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${IS}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${VH}u) {\n\t\treturn named && state == ${yH}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${zH}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${pH}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${HS?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${HS?`\t\tif (exits && step > 0 && step % ${Jg} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${IS}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${YH}u || kind == ${AH}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${yH}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${zH}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${kS}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const hg = {
      group: 0,
      uniform: 0,
      Lk: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function Zg() {
      const SS = hg;
      return `${Dg(SS)}${wg(SS,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Qg.d}>,\n}\n@group(${SS.group}) @binding(${SS.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${SS.group}) @binding(${SS.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Qg.i})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Qg.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Qg.g}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Jg = 2;
    const Og = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function dg(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const tS = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${HS.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        bS = "trace" === gS || "lit" === gS,
        XS = "maskEdge" === gS ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        xS = bS ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${HS.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${HS.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===gS?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${XS};\n`;
      return `${tS}${SS.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${bS?function(){const[SS,HS,gS]=Qg.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${SS}.0, ${HS}.0, ${gS}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${xS}}\n`:""}${SS.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${HS.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${HS.renderOffset});\n}\n`:""}`
    }
    const cg = "bloxdSpOwnTexture";

    function vg(SS) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${SS.texture}) - 1u)))`
    }
    const Eg = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${qH.f.map((SS=>{let[HS,gS]=SS;return`\tbloxdSpOut.${HS} = (bloxdSpWord & ${gS}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Lg(SS) {
      return `bloxdSpFlags(${SS})`
    }
    const Yg = `${OH.i}.eyePosition`;

    function Ag(SS, HS, gS, tS, bS) {
      const XS = SS.indexOf(HS);
      if (XS < 0 || SS.indexOf(HS, XS + 1) >= 0) throw new Error(`Lite's ${bS} program changed at the shader pack ${tS} hook: ${XS<0?"no":"more than one"} anchor (lite/${bS}ShaderPack.ts)`);
      return SS.slice(0, XS) + gS + SS.slice(XS + HS.length)
    }

    function yg(SS) {
      return SS.sunShadow || SS.airShadow
    }

    function Vg(SS, HS) {
      return HS && yg(SS)
    }
    const ig = {
      group: OH.g,
      ...OH.s
    };

    function Wg(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!yg(SS)) return "";
      if (HS) {
        const HS = ig,
          bS = "trace" === gS || "lit" === gS;
        let XS = "";
        SS.sunShadow && (XS = bS ? `${wg(HS,!0,"lit"===gS)}${tS=HS,`@group(${tS.group}) @binding(${tS.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${tS.group}) @binding(${tS.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(SS, HS, gS) {
          const tS = `@group(${SS}) @binding(${HS}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return gS ? `${tS}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Og}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((SS=>`\t{\n\t\tlet o = vec2i(${SS});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : tS
        }(HS.group, OH.t, "maskEdge" === gS));
        const xS = {
          shadowDirection: `${OH.i}.shadowDirection`,
          renderOffset: `${OH.i}.renderOffset`,
          eyePosition: `${OH.i}.eyePosition`
        };
        return `${Dg(HS)}${XS}${function(SS){const[HS,gS,tS]=Qg.o;return`@group(${SS.group}) @binding(${SS.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${SS.group}) @binding(${SS.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${HS}.0, ${gS}.0, ${tS}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(HS)}${dg(SS,xS,gS)}`
      }
      var tS;
      return `${SS.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${SS.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function zg(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!HS) return "";
      const XS = (xS = "fragmentInputs.vPositionW", NS = SS.sunShadow ? {
        normal: gS,
        flags: tS
      } : null, `\n\tbloxdSpShadowPosition = ${xS};\n${NS?`\tbloxdSpShadowNormal = normalize(${NS.normal});\n\tbloxdSpShadowEmissive = (${NS.flags} & ${qH.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${NS.flags} & ${qH.i}u) != 0u;\n`:""}`);
      var xS, NS;
      return SS.sunShadow && ("mask" === bS || "maskEdge" === bS) ? `${XS}${qS="fragmentInputs.position",uS="maskEdge"===bS,`\n\tbloxdSpShadowPixel = vec2i(${qS}.xy);\n${uS?`\tbloxdSpShadowZ = ${qS}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${qS}.z), dpdy(${qS}.z));\n`:""}`}` : XS;
      var qS, uS
    }
    const Ug = "bloxdSpTextureRotation",
      pg = "bloxdSpTextureLayers",
      sg = `@group(${OH.g}) @binding(${OH.u}) var<storage, read> ${pg}: array<u32>;\n`;

    function Bg(SS) {
      return `\tvertexOutputs.vPackTexture = ${pg}[min(u32(${SS}), arrayLength(&${pg}) - 1u)];\n`
    }

    function Mg(SS) {
      return void 0 !== SS.uv
    }

    function Fg(SS) {
      if (!SS) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Mg(SS)) return function(SS) {
        const {
          texture: HS,
          cells: gS,
          layers: tS
        } = SS, bS = `textureDimensions(${HS}, bloxdSpLevel)`, XS = gS ? `max(vec2u(vec2f(${bS}) / ${gS}), vec2u(1u))` : bS, xS = gS ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${XS};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${gS}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${gS}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${HS}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${bS} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${XS};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${HS}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let NS;
        if (gS)
          if (1 === tS.length) NS = `\treturn bloxdSpOwnTexel(${tS[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const SS = tS.length - 1;
            NS = `\tvar bloxdSpColour = bloxdSpOwnTexel(${tS[SS]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let HS = SS - 1; HS >= 0; HS--) NS += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${tS[HS]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            NS += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else NS = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${SS.id?`var<private> ${cg}: u32;\n`:""}${xS}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${vg(SS)};\n\treturn ${XS};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${SS.id?cg:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${vg(SS)};\n${NS}}\n`
      }(SS);
      const HS = SS,
        gS = SS => {
          const gS = SS > 0 ? `bloxdSpLayer - ${HS.layers*SS}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${SS}, ${HS.sampler}, bloxdSpTurned, ${gS}, round(bloxdSpMipLevel));`
        };
      let tS = "";
      for (let XS = 0; XS < HS.count - 1; XS++) tS += `\tif (bloxdSpLayer < ${HS.layers*(XS+1)}u) {\n\t\t${gS(XS)}\n\t}\n`;
      const bS = HS.frame ? `${HS.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Ug}: u32;\n${sg}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Ug} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Ug} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Ug} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${bS}${tS}\t${gS(HS.count-1)}\n}\n`
    }

    function Rg(SS, HS, gS) {
      return !!SS.surface && "bloxdDefaultSurface" !== SS.surface && function(SS, HS) {
        return "liquid" === HS || !SS
      }(HS, gS)
    }

    function Tg(SS, HS) {
      return SS.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${HS.vertexLocalPosition}, ${Lg(HS.vertexFlags)});\n\t\tlet bloxdSpVertex = ${SS.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function og(SS, HS, gS, tS, bS) {
      if (!SS.surface) return "";
      const XS = (SS, HS) => `\n\tlet bloxdSpTexelUV = ${SS};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${HS}) - 1u));`;
      let xS = "",
        NS = "0u, 0u, vec2f(0.0), 0.0";
      const qS = tS && Mg(tS) ? tS : null,
        uS = tS && !Mg(tS) ? tS : null;
      if (qS) {
        xS = `${qS.id?`\n\tlet bloxdSpTexture = ${qS.id};\n\t${cg} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${qS.uv};${XS(function(SS,HS){var gS;return`${null!==(gS=SS.levelUv)&&void 0!==gS?gS:SS.cells?`${HS} / ${SS.cells}`:HS} * vec2f(textureDimensions(${SS.texture}))`}(qS,"bloxdSpUv"),qS.texture)}`, NS = (qS.id ? `${cg}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else uS && (xS = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Ug} = bloxdSpTexture >> 16u;${XS(`fragmentInputs.vMainUV1 * ${(0,hH.yb)(uS.width)}`,"textureAtlas0")}`, NS = `bloxdSpTexture & 0xffffu, ${Ug}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const IS = bS.overlayColour,
        fS = IS ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        kS = "bloxdDefaultSurface" !== SS.surface || IS ? `\n\tbaseColor = vec4f(${fS}, baseColor.a);` : "",
        aS = Rg(SS, HS, gS) ? `\n\t${bS.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${xS}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${bS.alpha}, ${bS.enchantTier}, ${bS.enchantColour}, ${bS.enchantSpeed}, ${null!==IS&&void 0!==IS?IS:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${bS.normal}, ${bS.localPosition}, ${Lg(bS.flags)}, ${NS});\n\tlet bloxdSpSurface = ${SS.surface}(bloxdSpSurfaceIn);${kS}${aS}\n`
    }
    const lg = "bloxdSpLightIn";

    function mg(SS, HS, gS, tS) {
      if (!SS.light) return "";
      const bS = HS ? `${hH.j}.rgb, ${hH.j}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${hH.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: XS,
          diffuse: xS,
          emissive: NS,
          ambient: qS,
          fogColour: uS,
          fogAlpha: IS,
          normal: fS
        } = tS;
      return `\tvar ${lg} = BloxdLightIn(vec3f(0.0), ${gS?XS:"0.0"}, ${xS}, ${NS}, ${qS}, ${bS}, ${uS}, ${IS}, fragmentInputs.vPositionW, ${fS}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${lg}.litColour = bloxdLitColour(bloxdSpSurface, ${lg});\n`
    }

    function eg(SS) {
      return SS.light ? `\n\t{\n\t\tlet bloxdSpLight = ${SS.light}(bloxdSpSurface, ${lg});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const rg = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      St = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      Ht = "\treturn color;\n}",
      gt = {
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
    const tt = Object.freeze({});

    function bt(SS) {
      var HS;
      return !(null === (HS = (0, dH.d)(SS)) || void 0 === HS || !HS.sceneDepth)
    }

    function Xt(SS) {
      const HS = (0, dH.d)(SS);
      return !!HS && Rg(HS.hooks, HS.strict, HS.program)
    }

    function xt(SS, HS, gS, tS) {
      return Ag(SS, HS, gS, tS, "terrain")
    }

    function Nt(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const XS = function(SS) {
          return (0, dH.c)(SS.packVariant, SS.liquid ? "liquid" : "terrain")
        }(SS),
        {
          hooks: xS
        } = XS,
        NS = Vg(XS, tS),
        qS = "edge" === bS ? "maskEdge" : "plain" === bS ? "mask" : "trace",
        uS = Tg(xS, gt);
      uS && (HS = xt(HS, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${uS}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const IS = "atlas" === SS.texture ? {
          count: SS.atlasCount,
          layers: SS.atlasLayers,
          width: SS.Zm,
          sampler: "atlasSampler",
          frame: SS.animated ? gS : null
        } : null,
        fS = `${XS.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${zg(XS,NS,gt.normal,gt.flags,qS)}${og(xS,XS.strict,XS.program,IS,gt)}`;
      fS && (HS = xt(HS, rg, `${rg.slice(0,-1)}${fS}`, "surface"));
      const kS = eg(xS);
      return kS && (HS = xt(HS, St, `${mg(xS,SS.lighting,SS.dirLightCount>0,gt)}${St}`, "light input"), HS = xt(HS, Ht, `${kS.slice(1)}${Ht}`, "light")), `${(0,OH.A)()}${XS.sceneDepth?`@group(${OH.g}) @binding(${OH.o}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Yg};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Wg(XS,NS,qS)}${Fg(IS)}${Eg}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${XS.code}${HS}`
    }
    const qt = wS.e.WGSL;

    function ut(SS) {
      return void 0 !== SS.packVariant
    }
    const It = {
        ztS: 0,
        UtS: 4,
        ptS: 8,
        stS: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      ft = It.aoLevels + 4,
      kt = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      Kt = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      jt = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      Gt = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Ct = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      nt = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      Pt = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      Qt = 0,
      Dt = 3,
      wt = 4,
      ht = 5,
      Zt = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${ZH.b}, ${ZH.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${ZH.b}, ${ZH.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      Jt = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((SS=>JH.e>>SS&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const Ot = {
      mf: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: SS => `animDataPerTex[${SS}]`
    };

    function dt(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ot;
      return `\n\tlet atlasIdxIn = ${SS};\n\tlet animTick = ${gS.mf};\n\tlet animTickStride = ${gS.stride};\n\tlet numAnimTextures = ${gS.count};\n\t${(0,hS.f)(wS.e.WGSL,gS.perTexture)}\n\t${HS}animLayer;\n`
    }

    function ct(SS) {
      const HS = (HS, gS) => {
        const tS = HS > 0 ? `fragmentInputs.texAtlasIndex - ${SS.atlasLayers.toFixed(1)} * ${HS.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${gS?"textureSampleLevel":"textureSample"}(textureAtlas${HS}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${tS}))${gS?", atlasLod":""})`
      };
      if (1 === SS.atlasCount) return `baseColor = ${HS(0,!1)};`;
      let gS = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,hH.yb)(SS.Zm)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let tS = 0; tS < SS.atlasCount; tS++) {
        const bS = SS.atlasLayers * (tS + 1) - .5;
        gS += `${tS>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,hH.yb)(bS)}) {\n\t\tbaseColor = ${HS(tS,!0)};\n\t}`
      }
      return gS
    }

    function vt(SS) {
      return `terrain-${SS.texture}${"atlas"===SS.texture?SS.atlasCount:""}${SS.animated?"-anim":""}${SS.alphaTest?"-test":""}${SS.lighting?"-lit":""}-dir${SS.dirLightCount}${SS.packed?"-packed":""}${ut(SS)?`-sp${SS.packVariant}`:""}${SS.liquid?"-liquid":""}${SS.resting?"-rest":""}`
    }

    function Et(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const tS = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const gS = "none" !== SS.texture,
          tS = "atlas" === SS.texture,
          bS = SS.dirLightCount > 0,
          XS = ut(SS);
        if (SS.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${SS.dirLightCount}`);
        let xS = 1,
          NS = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (tS) {
          SS.animated && (NS += `@group(2) @binding(${xS++}) var<storage, read> animDataPerTex: array<f32>;\n`), NS += `@group(2) @binding(${xS++}) var atlasSampler: sampler;\n`;
          for (let HS = 0; HS < SS.atlasCount; HS++) NS += `@group(2) @binding(${xS++}) var textureAtlas${HS}: texture_2d_array<f32>;\n`
        } else "single" === SS.texture && (NS += `@group(2) @binding(${xS++}) var diffuseSamplerSampler: sampler;\n`, NS += `@group(2) @binding(${xS++}) var diffuseSampler: texture_2d<f32>;\n`);
        const qS = function(SS) {
            const HS = Pt,
              gS = "none" !== SS.texture,
              tS = "atlas" === SS.texture,
              bS = ut(SS);
            return SS.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${gS?"uv: vec2f,":""}\n\t${tS?"texAtlasIndices: f32,":""}\n\t${SS.lighting?"aPackedLightLevels: f32,":""}\n\t${bS?"blockFlagWords: vec2u,":""}\n}\n${Zt}\n${Jt}\n${"single"===SS.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${gS?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===SS.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${tS?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${SS.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${bS?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${HS.position}) position: vec3f,\n\t@location(${HS.normal}) normal: vec4f,\n\t@location(${HS.color}) color: vec4f,\n\t${gS?`@location(${HS.uv}) uv: vec2f,`:""}\n\t${SS.lighting?`@location(${HS.packedLight}) aPackedLightLevels: f32,`:""}\n\t${bS?`@location(${HS.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(SS),
          uS = `\n${Gt}\n${Kt}\n${jt}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${NS}\n${oS}\n${qS.declarations}\nstruct Varyings {\n\t${"none"===HS?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${SS.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${bS?"@location(5) vTerrainLambert: f32,":""}\n\t${gS?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${tS?"@location(7) texAtlasIndex: f32,":""}\n\t${SS.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${XS?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${XS&&tS?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${SS.resting?"":(0,hH.u)(qt)}\n${nt}\n\n@vertex\nfn mainVertex(${qS.parameter}) -> Varyings {\n\t${qS.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${XS?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${qH.d.placed}u;`:""}\n\t${XS&&tS?Bg("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${SS.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${gS?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${tS?function(SS){return SS?dt("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(SS.animated):""}\n\t${"single"===SS.texture&&SS.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,hH.kb)(qt)}\n\t${(0,hH.Q)(qt,SS.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${SS.resting?"":Ct}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${tS?ct(SS):""}\n\t${"single"===SS.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${gS?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${SS.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${bS?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${TS}));\n\t${ut(SS)?(0,hH.ub)(wS.e.WGSL):(0,hH.ab)(qt)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          IS = new Set;
        SS.lighting && IS.add("BLOXD_LIGHTING");
        bS && IS.add("BLOXD_TERRAIN_DIRECTIONAL");
        return QH(uS, new Map([...IS].map((SS => [SS, !0]))))
      }(SS, gS);
      if (!ut(SS)) return tS;
      const bS = Nt(SS, tS, dt, HS, gS);
      return "none" === gS ? bS : `${bS}${function(SS){const HS="none"!==SS.texture&&SS.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${SS.resting?"":Ct}\n\t${SS.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${HS&&"atlas"===SS.texture?ct(SS):""}\n\t${HS&&"single"===SS.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${HS?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${qH.d.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(SS)}`
    }
    const Lt = new Map([
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

    function Yt(SS, HS) {
      const gS = new Map;
      let tS = 0;
      const bS = [],
        XS = [],
        xS = [];
      for (const uS of HS) {
        var NS, qS;
        const HS = null !== (NS = uS.type.trim().split(/\s+/).pop()) && void 0 !== NS ? NS : uS.type,
          IS = Lt.get(HS);
        if (!IS) throw new Error(`Lite: no uniform layout for ${uS.name}: ${uS.type}`);
        const fS = null !== (qS = uS.arraySize) && void 0 !== qS ? qS : 0,
          kS = fS ? 4 : IS.align;
        tS = Math.ceil(tS / kS) * kS;
        const aS = fS ? 4 * Math.ceil(IS.floats / 4) : IS.floats;
        if (gS.set(uS.name, {
            offset: tS,
            floats: IS.floats,
            arraySize: fS,
            stride: aS
          }), fS && IS.floats <= 2) {
          const HS = `${SS}_${xS.length}_strided`;
          XS.push(`struct ${HS} {\n\t@size(16) el: ${IS.wgsl},\n}`), xS.push(uS.name), bS.push(`\t@align(16) ${uS.name}: array<${HS}, ${fS}>,`)
        } else fS ? bS.push(`\t@align(16) ${uS.name}: array<${IS.wgsl}, ${fS}>,`) : bS.push(`\t${uS.name}: ${IS.wgsl},`);
        tS += fS ? aS * fS : IS.floats
      }
      return {
        slots: gS,
        floats: Math.max(4, 4 * Math.ceil(tS / 4)),
        wgsl: `${XS.join("\n")}\nstruct ${SS} {\n${bS.join("\n")}\n}\n`,
        stridedArrays: xS
      }
    }
    const At = [{
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
      yt = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      Vt = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function it(SS, HS) {
      return `#if defined(${SS}) && ${SS}DIRECTUV == 0\nvarying v${HS}UV: vec2f;\n#endif`
    }

    function Wt(SS, HS, gS) {
      return `#if defined(${SS}) && ${SS}DIRECTUV == 0\nif (uniforms.v${HS}Infos.x==0.)\n{vertexOutputs.v${HS}UV= (uniforms.${gS}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${HS}UV= (uniforms.${gS}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function zt(SS, HS, gS) {
      return `#ifdef ${SS}\n#if ${SS}DIRECTUV == 1\n#define v${HS}UV vMainUV1\n#elif ${SS}DIRECTUV == 2\n#define v${HS}UV vMainUV2\n#else\nvarying v${HS}UV: vec2f;\n#endif\nvar ${gS}SamplerSampler: sampler;\nvar ${gS}Sampler: texture_2d<f32>;\n#endif`
    }
    const Ut = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      pt = 256,
      st = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      Bt = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      Mt = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      Ft = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      Rt = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      Tt = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      ot = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      lt = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Bt}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${it("OPACITY","Opacity")}\n${it("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${ot}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${Mt}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${Wt("OPACITY","Opacity","opacity")}\n${Wt("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Ft}\n#define CUSTOM_VERTEX_MAIN_END\n${Rt}\n}\n`;
    const mt = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${zt("OPACITY","Opacity","opacity")}\n${zt("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${ot}\n${Tt}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((SS,HS)=>function(SS){const HS=`
    frame.lights[LITE_LIGHT$ {
        SS
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      SS
    }\
    nvar diffuse$ {
      SS
    }: vec4f = $ {
      HS
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      SS
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      HS
    }.vLightData, diffuse$ {
      SS
    }.rgb, $ {
      HS
    }.vLightSpecular.rgb, diffuse$ {
      SS
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(HS))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, et = /^([gimus]+)!/, rt = new Set;

    function Sb(SS) {
      rt.has(SS) || (rt.add(SS), console.warn(`Lite: no place for plugin code at ${SS} in the standard shader: it is left out`))
    }

    function Hb(SS, HS) {
      let gS = SS;
      const tS = new Map;
      for (const [XS, xS] of HS) {
        var bS;
        tS.set(XS, `${null!==(bS=tS.get(XS))&&void 0!==bS?bS:""}${xS}\n`)
      }
      for (const [XS, xS] of tS) {
        if (!XS.startsWith("!")) {
          const SS = `#define ${XS}`;
          if (!gS.includes(SS)) {
            Sb(XS);
            continue
          }
          gS = gS.replace(SS, (() => `\n${xS}\n${SS}`));
          continue
        }
        let SS = XS.substring(1),
          HS = "g";
        if (SS.startsWith("!")) HS = "", SS = SS.substring(1);
        else {
          const gS = et.exec(SS);
          gS && (HS = gS[1], SS = SS.substring(HS.length + 1))
        }
        const tS = new RegExp(SS, HS.includes("g") ? HS : `${HS}g`);
        let bS = tS.exec(gS);
        for (bS || Sb(XS); bS;) {
          const SS = bS,
            HS = xS.replace(/\$(\d+)/g, ((HS, gS) => Number(gS) < SS.length ? SS[Number(gS)] : ""));
          gS = gS.substring(0, SS.index) + HS + gS.substring(SS.index + SS[0].length), tS.lastIndex = SS.index + HS.length, bS = tS.exec(gS)
        }
      }
      return gS
    }
    const gb = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      tb = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      bb = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function Xb(SS) {
      const HS = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let gS = SS.replace(gb, ((SS, gS, tS, bS, XS, xS) => ("attribute" === gS ? HS.attributes.push({
        name: XS,
        type: xS
      }) : void 0 === gS ? HS.varyings.push({
        name: XS,
        type: xS,
        interpolation: Nb(xS, tS, bS)
      }) : HS.uniforms.push({
        name: XS,
        type: xb(xS)
      }), "")));
      return gS = gS.replace(tb, ((SS, gS) => (HS.samplers.add(gS), ""))), gS = gS.replace(bb, ((SS, gS, tS) => (HS.textures.push({
        name: gS,
        type: tS
      }), ""))), HS.body = gS, HS
    }

    function xb(SS) {
      const HS = SS.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        gS = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(HS);
      if (!gS) throw new Error(`Lite: unsupported uniform type ${SS}`);
      return gS
    }

    function Nb(SS, HS, gS) {
      return void 0 === HS && void 0 === gS ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(SS.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === HS ? "@interpolate(flat) " : `@interpolate(${null!==HS&&void 0!==HS?HS:"perspective"}, ${null!==gS&&void 0!==gS?gS:"center"}) `
    }

    function qb(SS) {
      return kb({
        defines: SS.defines,
        vertex: Hb(lt, SS.vertexCode),
        fragment: Hb(mt, SS.fragmentCode),
        members: [...At, ...SS.defines.has("OPACITY") ? yt : [], ...SS.defines.has("EMISSIVE") ? Vt : [], ...SS.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function ub(SS) {
      const HS = SS.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (HS === SS) throw new Error("Lite: fragment main has no return");
      return HS
    }
    const Ib = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Bt}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${Mt}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Ft}\n${Rt}\n}\n`,
      fb = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${Tt}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function kb(SS) {
      const HS = SS.defines,
        gS = Xb(QH(SS.vertex, HS)),
        tS = Xb(QH(SS.fragment, HS)),
        bS = new Map;
      for (const PS of [...gS.varyings, ...tS.varyings]) bS.has(PS.name) || bS.set(PS.name, PS);
      const XS = [...bS.values()].map(((SS, HS) => `\t@location(${HS}) ${SS.interpolation}${SS.name}: ${SS.type},`)),
        xS = [...SS.members];
      for (const PS of [...gS.uniforms, ...tS.uniforms]) xS.some((SS => SS.name === PS.name)) || xS.push(PS);
      const NS = Yt(SS.structName, xS),
        qS = [],
        uS = [];
      let IS = 1;
      const fS = new Set;
      for (const PS of [...gS.textures, ...tS.textures]) {
        if (fS.has(PS.name)) continue;
        fS.add(PS.name);
        const SS = `${PS.name}Sampler`,
          HS = IS++,
          gS = IS++,
          tS = PS.type.startsWith("texture_2d_array") ? "2d-array" : PS.type.startsWith("texture_cube") ? "cube" : "2d";
        qS.push({
          name: PS.name,
          binding: HS,
          samplerBinding: gS,
          dimension: tS
        }), uS.push(`@group(2) @binding(${HS}) var ${PS.name}: ${PS.type};`), uS.push(`@group(2) @binding(${gS}) var ${SS}: sampler;`)
      }
      for (const PS of [...gS.samplers, ...tS.samplers])
        if (!fS.has(PS.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${PS} has no texture`);
      const kS = [Gt, st, NS.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${SS.structName};`, ...uS].join("\n"),
        aS = gS.attributes,
        KS = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...gS.attributes.map(((SS, HS) => `\t@location(${HS}) ${SS.name}: ${SS.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        jS = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...XS, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        GS = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...tS.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...XS, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", oS, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${TS}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        CS = SS => {
          for (const HS of NS.stridedArrays) SS = SS.replace(new RegExp(`\\b${HS}\\s*\\[(.*?)\\]`, "g"), `${HS}[$1].el`);
          return SS
        };
      return {
        vertex: `${kS}\n${KS}\n${jS}\n${CS(gS.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${kS}\n${GS}\n${ub((nS=CS(tS.body),nS.includes("fragmentInputs.position")?nS.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):nS))}`,
        attributes: aS,
        material: NS,
        textures: qS
      };
      var nS
    }
    const ab = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      Kb = SS => ({
        name: SS,
        type: "vec3"
      }),
      jb = SS => ({
        name: SS,
        type: "float"
      }),
      Gb = Yt("EarthSkyUniforms", [Kb("viewFrom"), jb("exposureScale"), Kb("zenithOffset"), jb("fogOn"), Kb("up"), jb("ditherOn"), Kb("sun"), jb("turbidity"), Kb("tint"), jb("rayleigh"), Kb("sunDir"), jb("mieStrength"), Kb("inScatterR"), jb("mieFocus"), Kb("inScatterM"), jb("sunE"), Kb("extinctionBeta"), jb("sunsetMix"), jb("mieScale"), jb("mieBase"), jb("mieSlope"), jb("sunDiscE"), jb("exposure")]),
      Cb = `${Gt}\n${st}\n${Gb.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      nb = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${ab.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Pb = `\n${oS}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(GH).map((SS=>{let[HS,gS]=SS;return`const TONE_${HS}: f32 = ${gS};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${CH};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${TS}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var Qb = gS(37113);
    const Db = new Qb.VK,
      wb = new Qb.VK,
      hb = new Qb.Quaternion,
      Zb = new Float64Array(3),
      Jb = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Ob = new Float64Array(16);

    function db(SS, HS, gS) {
      const tS = gS.worldMatrix;
      var bS;
      SS.updateFloat3("viewFrom", tS[12], tS[13], tS[14]), SS.updateFloatsFrom("zenithOffset", HS.cameraOffset, 0, 3), SS.updateFloatsFrom("up", HS.up, 0, 3), HS.luminance > 0 && (SS.updateFloat("exposure", HS.luminance), SS.updateFloat("exposureScale", (bS = HS.luminance, Math.log2(2 / Math.pow(bS, 4))))), SS.updateFloat("turbidity", HS.turbidity), SS.updateFloat("rayleigh", HS.rayleigh), SS.updateFloat("mieStrength", HS.mieCoefficient), SS.updateFloat("mieFocus", HS.mieDirectionalG), SS.updateFloatsFrom("tint", HS.tint, 0, 3), SS.updateFloat("fogOn", HS.fog && gS.fogEnabled && 0 !== gS.fogMode ? 1 : 0), SS.updateFloat("ditherOn", HS.dithering ? 1 : 0);
      const XS = HS.sunPosition;
      if (Db.set(XS[0], XS[1], XS[2]), !HS.useSunPosition) {
        const SS = Math.PI * (HS.inclination - .5),
          gS = 2 * Math.PI * (HS.azimuth - .5);
        Db.set(HS.distance * Math.cos(gS) * Math.cos(SS), HS.distance * Math.sin(-SS), HS.distance * Math.sin(gS) * Math.cos(SS)), Qb.Quaternion.FromUnitVectorsToRef(Qb.VK.UpReadOnly, wb.set(HS.up[0], HS.up[1], HS.up[2]), hb), Db.rotateByQuaternionToRef(hb, Db)
      }
      SS.updateVector3("sun", Db), Zb[0] = Db.x, Zb[1] = Db.y, Zb[2] = Db.z;
      const xS = jH(HS, Zb, Jb);
      SS.updateFloatsFrom("sunDir", xS.sunDir, 0, 3), SS.updateFloat("sunE", xS.sunE), SS.updateFloatsFrom("inScatterR", xS.inScatterR, 0, 3), SS.updateFloatsFrom("inScatterM", xS.inScatterM, 0, 3), SS.updateFloatsFrom("extinctionBeta", xS.extinctionBeta, 0, 3), SS.updateFloat("sunsetMix", xS.sunsetMix), SS.updateFloat("sunDiscE", xS.sunDiscE), SS.updateFloat("mieScale", xS.mieScale), SS.updateFloat("mieBase", xS.mieBase), SS.updateFloat("mieSlope", xS.mieSlope)
    }

    function cb(SS, HS) {
      const gS = Ob;
      gS[0] = HS.far, gS[5] = HS.far, gS[10] = HS.far, gS[15] = 1;
      const tS = SS.infiniteDistance;
      for (let bS = 0; bS < 3; bS++) gS[12 + bS] = SS.position[bS] + (tS ? HS.worldMatrix[12 + bS] : 0);
      return Ob
    }
    var vb = gS(38724);

    function Eb(SS) {
      return Math.max(4, 4 * Math.ceil(SS / 4))
    }

    function Lb(SS, HS, gS, tS) {
      const bS = SS.createBuffer({
        label: tS,
        size: Eb(HS.byteLength),
        usage: gS,
        mappedAtCreation: !0
      });
      return new Uint8Array(bS.getMappedRange(), 0, HS.byteLength).set(new Uint8Array(HS.buffer, HS.byteOffset, HS.byteLength)), bS.unmap(), bS
    }

    function Yb(SS, HS) {
      return Math.floor(Math.log2(Math.max(SS, HS))) + 1
    }

    function Ab(SS, HS, gS, tS, bS, XS) {
      const xS = SS.createTexture({
          label: XS,
          size: {
            width: gS,
            height: tS,
            depthOrArrayLayers: bS
          },
          format: "rgba8unorm",
          mipLevelCount: Yb(gS, tS),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        NS = (HS, gS, tS, XS) => {
          SS.queue.writeTexture({
            texture: xS,
            mipLevel: gS
          }, HS, {
            bytesPerRow: 4 * tS,
            rowsPerImage: XS
          }, {
            width: tS,
            height: XS,
            depthOrArrayLayers: bS
          })
        };
      NS(HS, 0, gS, tS);
      let qS = 1;
      for (const uS of function*(SS, HS, gS, tS) {
          let bS = SS,
            XS = HS,
            xS = gS;
          for (; XS > 1 || xS > 1;) {
            const SS = Math.max(1, XS >> 1),
              HS = Math.max(1, xS >> 1),
              gS = new Uint8Array(SS * HS * tS * 4),
              NS = 4 * XS;
            let qS = 0;
            for (let uS = 0; uS < tS; uS++) {
              const tS = uS * NS * xS;
              for (let uS = 0; uS < HS; uS++) {
                const HS = tS + Math.min(2 * uS, xS - 1) * NS,
                  IS = tS + Math.min(2 * uS + 1, xS - 1) * NS;
                for (let tS = 0; tS < SS; tS++) {
                  const SS = 4 * Math.min(2 * tS, XS - 1),
                    xS = 4 * Math.min(2 * tS + 1, XS - 1);
                  for (let tS = 0; tS < 4; tS++) gS[qS++] = bS[HS + SS + tS] + bS[HS + xS + tS] + bS[IS + SS + tS] + bS[IS + xS + tS] + 2 >> 2
                }
              }
            }
            yield {
              data: gS,
              width: SS,
              height: HS
            }, bS = gS, XS = SS, xS = HS
          }
        }(HS, gS, tS, bS)) NS(uS.data, qS++, uS.width, uS.height);
      return xS
    }
    const yb = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function Vb(SS) {
      if (SS.startsWith("data:")) {
        const HS = SS.search(/[;,]/);
        return `data:${HS>5?SS.slice(5,HS):""} URL of ${SS.length} characters`
      }
      return SS.length > 80 ? `${SS.slice(0,80)}...` : SS
    }
    async function ib(SS) {
      const HS = await fetch(SS);
      if (!HS.ok) throw new Error(`${Vb(SS)}: ${HS.status} ${HS.statusText}`);
      return createImageBitmap(await HS.blob(), yb)
    }
    async function Wb(SS) {
      const HS = await ib(SS),
        gS = new OffscreenCanvas(HS.width, HS.height),
        tS = gS.getContext("2d", {
          willReadFrequently: !0
        });
      if (!tS) throw new Error("No 2D context to decode an image");
      tS.drawImage(HS, 0, 0);
      const {
        data: bS
      } = tS.getImageData(0, 0, HS.width, HS.height);
      return HS.close(), {
        pixels: new Uint8Array(bS.buffer, bS.byteOffset, bS.byteLength),
        width: gS.width,
        height: gS.height
      }
    }
    const zb = new WeakMap;

    function Ub(SS, HS, gS, tS) {
      var bS;
      const XS = null !== (bS = zb.get(SS)) && void 0 !== bS ? bS : new Map;
      zb.set(SS, XS);
      let xS = XS.get(HS);
      return xS || (xS = (async bS => {
        const XS = null !== (bS = function(SS, HS) {
          const gS = SS ? new Uint8Array(SS.buffer, SS.byteOffset, SS.byteLength) : null;
          return null !== gS && void 0 !== gS && gS.byteLength && HS && gS.byteLength % (HS * HS * 4) === 0 ? {
            pixels: gS,
            layerWidth: HS,
            layers: gS.byteLength / (HS * HS * 4)
          } : null
        }(gS, tS)) && void 0 !== bS ? bS : await async function(SS) {
          const {
            pixels: HS,
            width: gS
          } = await Wb(SS);
          return {
            pixels: HS,
            layerWidth: gS,
            layers: HS.byteLength / (gS * gS * 4)
          }
        }(HS), {
          layerWidth: xS,
          layers: NS
        } = XS;
        return {
          texture: Ab(SS, XS.pixels, xS, xS, NS, `atlas-${HS}`),
          layerWidth: xS,
          layers: NS
        }
      })(), XS.set(HS, xS), xS.catch((() => {
        XS.delete(HS)
      }))), xS
    }
    const pb = new Map([
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
      sb = new Map([
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

    function Bb(SS) {
      for (const HS of (0, vb.j)(SS))
        if (!sb.has((0, vb.h)(HS))) return !1;
      return !0
    }

    function Mb(SS) {
      const HS = sb.get(SS);
      if (!HS) return null;
      const [gS, tS, bS] = HS;
      return {
        srcFactor: pb.get(gS),
        dstFactor: pb.get(tS),
        operation: bS
      }
    }
    let Fb = null;

    function Rb(SS) {
      Fb = SS
    }

    function Tb(SS, HS, gS) {
      var tS;
      null === (tS = Fb) || void 0 === tS || tS(SS, HS, gS, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class ob {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(SS, HS, gS, tS, bS) {
        gS !== this.pipeline && (SS.setPipeline(gS), this.pipeline = gS), SS.setBindGroup(1, tS, [bS]);
        const XS = HS.material.bindGroup;
        XS !== this.materialGroup && (SS.setBindGroup(2, XS), this.materialGroup = XS);
        const xS = HS.program.packGroup;
        xS && xS !== this.packGroup && (SS.setBindGroup(OH.g, xS), this.packGroup = xS);
        const {
          vertexBuffers: NS,
          vertexOffsets: qS
        } = this;
        for (let uS = 0; uS < HS.vertexBuffers.length; uS++) NS[uS] === HS.vertexBuffers[uS] && qS[uS] === HS.vertexOffsets[uS] || (SS.setVertexBuffer(uS, HS.vertexBuffers[uS], HS.vertexOffsets[uS]), NS[uS] = HS.vertexBuffers[uS], qS[uS] = HS.vertexOffsets[uS]);
        HS.indexBuffer && HS.indexBuffer !== this.indexBuffer && (SS.setIndexBuffer(HS.indexBuffer, HS.indexFormat), this.indexBuffer = HS.indexBuffer)
      }
    }
    class lb {
      constructor(SS, HS, gS, tS) {
        this.modelMeshes = SS, this.l_ = HS, this.maker = gS, this.warnOnce = tS, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (SS, HS) => {
          (HS < -1 || HS > 1) && this.warnOnce(`group:${HS}`, `rendering group ${HS} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(SS) {
        this.collectGroup(SS, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(SS, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(SS, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.l_.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(mb), this.transparentDraws.sort(eb)
      }
      collectGroup(SS, HS, gS, tS, bS) {
        const XS = this.modelMeshes.group(HS),
          xS = this.l_.group(HS),
          NS = 0 === HS ? null === xS || void 0 === xS ? void 0 : xS.opaque : void 0;
        this.collectList(SS, null === XS || void 0 === XS ? void 0 : XS.opaque, NS || null === xS || void 0 === xS ? void 0 : xS.opaque, HS, !1, gS, bS), NS && (this.l_.drawn += this.maker.bundleDraws(SS, NS, HS)), this.collectList(SS, null === XS || void 0 === XS ? void 0 : XS.alphaTest, void 0, HS, !1, gS, bS), this.collectList(SS, null === XS || void 0 === XS ? void 0 : XS.transparent, null === xS || void 0 === xS ? void 0 : xS.transparent, HS, !0, tS, bS)
      }
      collectList(SS, HS, gS, tS, bS, XS, xS) {
        var NS;
        const qS = XS.length;
        HS && this.maker.pushDraws(SS, HS.units, HS.units.length, tS, bS, XS, HS.rows), gS && (this.l_.drawn += this.maker.pushDraws(SS, gS, gS.length, tS, bS, XS));
        const uS = bS ? null === (NS = this.modelMeshes.group(tS)) || void 0 === NS ? void 0 : NS.text : void 0;
        uS && this.maker.pushDraws(SS, uS.units, uS.units.length, tS, !0, XS, uS.rows), xS && rb(XS, qS)
      }
    }

    function mb(SS, HS) {
      return SS.program.id - HS.program.id || SS.material.owner.uniqueId - HS.material.owner.uniqueId
    }

    function eb(SS, HS) {
      return SS.material.owner.uniqueId - HS.material.owner.uniqueId
    }

    function rb(SS, HS) {
      for (let gS = HS + 1; gS < SS.length; gS++) {
        const tS = SS[gS];
        let bS = gS - 1;
        for (; bS >= HS && eb(SS[bS], tS) > 0; bS--) SS[bS + 1] = SS[bS];
        SS[bS + 1] = tS
      }
    }
    const SX = {};

    function HX(SS) {
      return SS.hasThinInstances ? "thin" : SS.BtS || SS._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function gX(SS, HS, gS) {
      return SS ? (gS._needUVs = !0, SS.optimizeUVAllocation && (0, dS.F)(SS.matrix) ? (gS[`${HS}DIRECTUV`] = SS.uvSet + 1, gS[`MAINUV${SS.uvSet+1}`] = !0) : gS[`${HS}DIRECTUV`] = 0, !0) : (gS[`${HS}DIRECTUV`] = 0, !1)
    }

    function tX(SS) {
      const HS = new Map;
      for (const gS in SS) {
        if (95 === gS.charCodeAt(0)) continue;
        const tS = SS[gS],
          bS = typeof tS;
        "number" === bS || "string" === bS ? HS.set(gS, String(tS)) : tS && "function" !== bS && HS.set(gS, !0)
      }
      return HS
    }

    function bX(SS) {
      const HS = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: gS
        }
        of SS.features)
        for (const SS in gS) HS[SS] = gS[SS];
      return HS
    }

    function XX(SS) {
      const HS = SS.parts.geometry;
      return null !== HS && void 0 !== HS && HS.live ? HS : null
    }

    function xX(SS) {
      var HS;
      return null !== (HS = XX(SS)) && void 0 !== HS ? HS : SX
    }
    class NX {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = SS, this.warnOnce = HS, this.programWithModel = gS, this.packFailed = tS, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(SS, HS, gS, tS, bS) {
        const XS = HS.owner;
        let xS = this.drawStates.get(HS);
        if (!xS) {
          const SS = HS.parts.materials[HS.range];
          if (!SS) return this.warnOnce("model", `${gS.name} on ${XS.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          xS = {
            defines: bX(SS),
            model: SS,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: bS,
            groupId: tS,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(HS, xS)
        }
        if (this.programCurrent(xS, HS, bS, tS)) return xS.program;
        const {
          model: NS
        } = xS, qS = xX(HS), uS = this.instanceLayout(XS, bS), IS = this.definesBits(XS);
        if (!this.prepareModelDefines(SS, XS, NS, xS.defines, tS, bS)) return null;
        xS.instancing = bS, xS.groupId = tS, xS.modelVersion = NS.version, xS.geometry = qS, xS.instanceLayout = uS, xS.definesBits = IS;
        const fS = function(SS) {
          let HS = "";
          for (const [gS, tS] of SS) HS += !0 === tS ? `${gS};` : `${gS}=${tS};`;
          return HS
        }(tX(xS.defines));
        return fS === xS.definesKey && xS.packVariant === this.modelPackVariant && xS.program && !this.packFailed(xS.program) || (xS.definesKey = fS, xS.packVariant = this.modelPackVariant, xS.program = this.programWithModel(NS, xS.defines, fS)), xS.program
      }
      programCurrent(SS, HS, gS, tS) {
        return null !== SS.program && !this.packFailed(SS.program) && SS.instancing === gS && SS.groupId === tS && this.definesHold(SS, HS, gS)
      }
      definesHold(SS, HS, gS) {
        return SS.modelVersion === SS.model.version && SS.geometry === xX(HS) && SS.instanceLayout === this.instanceLayout(HS.owner, gS) && SS.definesBits === this.definesBits(HS.owner) && SS.packVariant === this.modelPackVariant
      }
      modelPackKind(SS) {
        var HS;
        return 0 === this.modelPackVariant ? null : null !== (HS = (0, JS.v)(SS, ZS.i.name)) && void 0 !== HS && HS.active ? "placed" : SS.item ? "item" : SS.lifeform ? "lifeform" : SS.box ? "box" : null
      }
      instanceLayout(SS, HS) {
        var gS, tS, bS;
        return "thin" === HS ? null !== (bS = this.resources.h_.get(SS)) && void 0 !== bS ? bS : null : "instanced" === HS && null !== (gS = null === (tS = SS._userInstancedBuffersStorage) || void 0 === tS ? void 0 : tS.interleavedKinds) && void 0 !== gS ? gS : null
      }
      definesBits(SS) {
        const HS = this.view;
        return (SS.visibility < 1 ? 1 : 0) | (SS.hasVertexAlpha ? 2 : 0) | (SS.applyFog ? 4 : 0) | (SS.useVertexColors ? 8 : 0) | (SS.nonUniformScaling ? 16 : 0) | (HS.fogEnabled && 0 !== HS.fogMode ? 32 : 0) | (HS.lightsEnabled ? 64 : 0) | HS.lightCount << 7
      }
      prepareLightDefines(SS, HS, gS) {
        let tS = 0;
        if (this.view.lightsEnabled && !HS) {
          const HS = Math.min(gS, 4);
          for (; tS < this.view.lightCount && (SS[`LIGHT${tS}`] = !0, SS[`LITE_LIGHT${tS}_SLOT`] = tS, tS++, SS._needNormals = !0, tS !== HS););
        }
        for (let bS = tS; bS < 4; bS++) SS[`LIGHT${bS}`] = !1, SS[`LITE_LIGHT${bS}_SLOT`] = void 0
      }
      prepareModelDefines(SS, HS, gS, tS, bS, XS) {
        const {
          features: xS
        } = gS;
        tS._needNormals = !1, tS._needUVs = !1;
        const NS = this.view;
        this.prepareLightDefines(tS, gS.disableLighting, gS.maxSimultaneousLights), tS.MAINUV1 = !1, tS.MAINUV2 = !1;
        const qS = gS.diffuseTexture;
        qS ? (tS._needUVs = !0, tS.DIFFUSE = !0, qS.optimizeUVAllocation && (0, dS.F)(qS.matrix) ? (tS.DIFFUSEDIRECTUV = qS.uvSet + 1, tS[`MAINUV${qS.uvSet+1}`] = !0) : tS.DIFFUSEDIRECTUV = 0, qS.uvSet > 1 && this.warnOnce(`uvset:${gS.name}`, `${gS.name} samples UV set ${qS.uvSet+1}, which is not supported`)) : (tS.DIFFUSE = !1, tS.DIFFUSEDIRECTUV = 0);
        const uS = gS.opacityTexture,
          IS = gS.emissiveTexture;
        tS.OPACITY = gX(uS, "OPACITY", tS), tS.OPACITYRGB = null !== uS && uS.getAlphaFromRGB, tS.EMISSIVE = gX(IS, "EMISSIVE", tS), (uS && uS.uvSet > 1 || IS && IS.uvSet > 1) && this.warnOnce(`uvset:${gS.name}`, `${gS.name} samples a UV set past 2, which is not supported`);
        const fS = gS.reflectionTexture,
          kS = null !== fS;
        if (kS) {
          if (!this.resources.boundTexture(fS)) return !1;
          tS._needNormals = !0
        }
        tS.REFLECTION = kS, tS.REFLECTIONMAP_3D = kS, tS.REFLECTIONMAP_SKYBOX = kS, tS.REFLECTIONMAP_OPPOSITEZ = kS && (SS.useRightHandedSystem ? !fS.invertZ : fS.invertZ), tS.ROUGHNESS = kS && gS.roughness > 0, tS.REFLECTIONOVERALPHA = kS && gS.useReflectionOverAlpha, tS.LITE_REFLECTION_LUMINANCE = kS && "cube" === fS.source.kind && fS.source.luminance, (HS.skeleton || HS.morphTargetManager) && this.warnOnce(`skin:${HS.name}`, `${HS.name} has bones or morph targets, which are not supported`), tS.FOG = gS.fogEnabled && HS.applyFog && NS.fogEnabled && 0 !== NS.fogMode, tS.NONUNIFORMSCALING = HS.nonUniformScaling;
        const {
          visibility: aS,
          hasVertexAlpha: KS
        } = HS;
        tS.ALPHATEST = (0, JS.V)(gS, aS, KS), tS.ALPHAFROMDIFFUSE = (0, JS.lb)(gS), tS.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== gS.transparencyMode, tS.ALPHABLEND = null === gS.transparencyMode || (0, JS.T)(gS, aS, KS), tS.PREMULTIPLYALPHA = 7 === gS.alphaMode || 8 === gS.alphaMode, tS.EMISSIVEASILLUMINATION = gS.useEmissiveAsIllumination, tS.LINKEMISSIVEWITHDIFFUSE = gS.linkEmissiveWithDiffuse, tS.TWOSIDEDLIGHTING = !gS.backFaceCulling && gS.twoSidedLighting, tS.INSTANCES = "none" !== XS, tS.THIN_INSTANCES = "thin" === XS, tS.LITE_FRONT_LAYER = bS >= 1;
        for (const {
            feature: hS,
            state: ZS,
            active: JS
          }
          of xS) {
          var jS, GS;
          if (JS) null === (jS = (GS = (0, IH.e)(hS)).prepareDefinesBeforeAttributes) || void 0 === jS || jS.call(GS, ZS, tS, SS, HS)
        }
        this.modelPackKind(gS) && (tS._needNormals = !0), tS.NORMAL = tS._needNormals && HS.isVerticesDataPresent("normal"), tS.UV1 = tS._needUVs && HS.isVerticesDataPresent("uv"), tS.UV2 = tS._needUVs && HS.isVerticesDataPresent("uv2");
        const CS = HS.useVertexColors && HS.isVerticesDataPresent("color");
        tS.VERTEXCOLOR = CS, tS.VERTEXALPHA = HS.hasVertexAlpha && CS, tS.INSTANCESCOLOR = "none" !== XS && HS.isVerticesDataPresent("instanceColor");
        for (const {
            feature: hS,
            state: ZS,
            active: JS
          }
          of xS) {
          var nS, PS;
          if (JS) null === (nS = (PS = (0, IH.e)(hS)).prepareDefines) || void 0 === nS || nS.call(PS, ZS, tS, SS, HS, gS)
        }
        const QS = SS.AK();
        for (const {
            feature: hS,
            state: ZS,
            active: JS
          }
          of xS) {
          var DS, wS;
          if (JS && !1 === (null === (DS = (wS = (0, IH.e)(hS)).isReadyForSubMesh) || void 0 === DS ? void 0 : DS.call(wS, ZS, tS, SS, QS))) return !1
        }
        return !0
      }
    }

    function qX(SS, HS, gS) {
      return SS.codeVersion !== HS.version && function(SS, HS) {
        const gS = [],
          tS = [];
        for (const {
            feature: kS,
            state: aS,
            active: KS
          }
          of HS.features) {
          var bS, XS, xS, NS;
          if (KS) uX(null === (bS = (XS = (0, IH.e)(kS)).getCustomCode) || void 0 === bS ? void 0 : bS.call(XS, aS, "vertex", wS.e.WGSL), gS), uX(null === (xS = (NS = (0, IH.e)(kS)).getCustomCode) || void 0 === xS ? void 0 : xS.call(NS, aS, "fragment", wS.e.WGSL), tS)
        }
        const qS = [];
        for (const {
            feature: kS,
            state: aS
          }
          of HS.features) {
          var uS, IS;
          const SS = null === (uS = (IS = (0, IH.e)(kS)).getUniforms) || void 0 === uS ? void 0 : uS.call(IS, aS, wS.e.WGSL);
          for (const HS of null !== (fS = null === SS || void 0 === SS ? void 0 : SS.ubo) && void 0 !== fS ? fS : []) {
            var fS;
            HS.size && HS.type && qS.push({
              name: HS.name,
              type: HS.type,
              arraySize: HS.arraySize
            })
          }
        }
        SS.vertexCode = gS, SS.fragmentCode = tS, SS.pluginUniforms = qS, SS.codeKey = JSON.stringify([gS, tS, qS]), SS.codeVersion = HS.version
      }(SS, HS), `${gS}#${SS.codeKey}`
    }

    function uX(SS, HS) {
      if (SS)
        for (const gS in SS) SS[gS] && HS.push([gS, SS[gS]])
    }
    const IX = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class fX {
      constructor(SS) {
        this.warnOnce = SS, this.states = new Map
      }
      renderState(SS, HS, gS, tS) {
        var bS;
        let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          xS = null !== (bS = SS.sideOrientation) && void 0 !== bS ? bS : HS.sideOrientation;
        HS._getWorldMatrixDeterminant() < 0 && (xS = 0 === xS ? 1 : 0);
        const NS = "triangle-list" === XS,
          qS = gS ? SS.alphaMode : 0,
          uS = (!gS || (0 === qS || SS.forceDepthWrite)) && !SS.disableDepthWrite,
          IS = NS && SS.backFaceCulling ? SS.cullBackFaces ? "back" : "front" : "none",
          fS = NS && 0 !== xS ? "ccw" : "cw",
          kS = SS.depthFunction,
          aS = NS ? SS.zOffset : 0,
          KS = NS ? SS.zOffsetUnits : 0,
          jS = !SS.disableColorWrite;
        return tS && tS.alphaMode === qS && tS.depthWrite === uS && tS.depthFunction === kS && tS.cullMode === IS && tS.frontFace === fS && tS.zOffset === aS && tS.zOffsetUnits === KS && tS.colourWrite === jS && tS.topology === XS ? tS : this.stateFor(qS, uS, kS, IS, fS, aS, KS, jS, XS)
      }
      stateFor(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        const uS = `${SS}|${HS}|${gS}|${tS}|${bS}|${XS}|${xS}|${NS}|${qS}`;
        let IS = this.states.get(uS);
        if (!IS) {
          var fS;
          const kS = SS ? Mb(SS) : null;
          SS && !kS && this.warnOnce(`alpha:${SS}`, `alpha mode ${SS} is not supported`), IS = {
            key: uS,
            alphaMode: SS,
            depthFunction: gS,
            zOffset: XS,
            zOffsetUnits: xS,
            topology: qS,
            blend: kS,
            depthWrite: HS,
            depthCompare: gS && null !== (fS = IX.get(gS)) && void 0 !== fS ? fS : null,
            cullMode: tS,
            frontFace: bS,
            depthBias: -xS,
            depthBiasSlopeScale: -XS,
            colourWrite: NS
          }, this.states.set(uS, IS)
        }
        return IS
      }
    }
    var kX = gS(37457);

    function aX(SS) {
      if (!SS.frozen) return -1;
      let HS = SS.version;
      for (const {
          feature: gS,
          state: tS,
          active: bS
        }
        of SS.features) {
        if (!bS || !gS.bind) continue;
        const SS = (0, IH.e)(gS).uniformsVersion;
        if (!SS) return -1;
        HS += SS(tS)
      }
      return HS
    }
    class KX {
      constructor(SS, HS, gS) {
        this.slots = SS, this.data = HS, this.textures = gS, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(SS, HS) {
        this.write4(SS, HS, 0, 0, 0, 1)
      }
      updateFloat2(SS, HS, gS) {
        this.write4(SS, HS, gS, 0, 0, 2)
      }
      updateFloat3(SS, HS, gS, tS) {
        this.write4(SS, HS, gS, tS, 0, 3)
      }
      updateFloat4(SS, HS, gS, tS, bS) {
        this.write4(SS, HS, gS, tS, bS, 4)
      }
      updateVector3(SS, HS) {
        this.write4(SS, HS.x, HS.y, HS.z, 0, 3)
      }
      updateVector4(SS, HS) {
        this.write4(SS, HS.x, HS.y, HS.z, HS.w, 4)
      }
      updateColor3(SS, HS) {
        this.write4(SS, HS.r, HS.g, HS.b, 0, 3)
      }
      updateColor4(SS, HS, gS) {
        this.write4(SS, HS.r, HS.g, HS.b, gS, 4)
      }
      updateFloatsFrom(SS, HS, gS, tS) {
        const bS = this.slots.get(SS);
        if (!bS) return;
        const XS = this.data,
          xS = bS.offset;
        for (let NS = 0; NS < tS; NS++) XS[xS + NS] = HS[gS + NS]
      }
      updateFloat3TimesFloats(SS, HS, gS, tS) {
        const bS = this.slots.get(SS);
        if (!bS) return;
        const XS = this.data,
          xS = bS.offset;
        XS[xS] = HS[gS] * tS[0], XS[xS + 1] = HS[gS + 1] * tS[1], XS[xS + 2] = HS[gS + 2] * tS[2]
      }
      J7(SS, HS) {
        const gS = this.slots.get(SS);
        gS && this.data.set(HS.m, gS.offset)
      }
      updateMatrixFloats(SS, HS) {
        const gS = this.slots.get(SS);
        gS && this.data.set(HS, gS.offset)
      }
      updateFloatArray(SS, HS) {
        const gS = this.slots.get(SS);
        if (!gS) return;
        if (!gS.arraySize || gS.stride === gS.floats) return void this.data.set(HS, gS.offset);
        const tS = Math.min(HS.length, gS.floats * gS.arraySize);
        for (let bS = 0; bS < tS; bS++) this.data[gS.offset + Math.floor(bS / gS.floats) * gS.stride + bS % gS.floats] = HS[bS]
      }
      updateArray(SS, HS) {
        this.updateFloatArray(SS, HS)
      }
      setTexture(SS, HS) {
        this.textures.set(SS, HS), this.expected.delete(SS)
      }
      expectTexture(SS) {
        this.textures.set(SS, null), this.expected.add(SS)
      }
      write4(SS, HS, gS, tS, bS, XS) {
        const xS = this.slots.get(SS);
        if (!xS) return;
        const NS = this.data,
          qS = xS.offset;
        NS[qS] = HS, XS > 1 && (NS[qS + 1] = gS), XS > 2 && (NS[qS + 2] = tS), XS > 3 && (NS[qS + 3] = bS)
      }
    }

    function jX(SS, HS) {
      const gS = Ut,
        tS = kX.j,
        bS = SS.lights,
        XS = Math.min(SS.lightCount, 8);
      for (let xS = 0; xS < XS; xS++) {
        const SS = gS.lights + xS * gS.lightStride,
          XS = xS * kX.e;
        HS[SS] = bS[XS + tS.vector], HS[SS + 1] = bS[XS + tS.vector + 1], HS[SS + 2] = bS[XS + tS.vector + 2], HS[SS + 3] = bS[XS + tS.kind] === kX.i.directional ? 1 : 0, HS[SS + 4] = bS[XS + tS.diffuse], HS[SS + 5] = bS[XS + tS.diffuse + 1], HS[SS + 6] = bS[XS + tS.diffuse + 2], HS[SS + 7] = bS[XS + tS.range], HS[SS + 8] = bS[XS + tS.specular], HS[SS + 9] = bS[XS + tS.specular + 1], HS[SS + 10] = bS[XS + tS.specular + 2], HS[SS + 11] = bS[XS + tS.range]
      }
      HS[gS.fogInfos] = SS.fogMode, HS[gS.fogInfos + 1] = SS.fogStart, HS[gS.fogInfos + 2] = SS.fogEnd, HS[gS.fogInfos + 3] = SS.fogDensity, HS[gS.fogColour] = SS.fogColour[0], HS[gS.fogColour + 1] = SS.fogColour[1], HS[gS.fogColour + 2] = SS.fogColour[2], HS[gS.outputHeight] = SS.renderHeight, HS[gS.animTick] = SS.animTick, HS[gS.timeMs] = SS.timeMs
    }
    class GX {
      constructor(SS) {
        this.instancesOf = SS
      }
      refreshModelUniforms(SS, HS, gS, tS) {
        const bS = aX(gS);
        if (bS >= 0 && bS === HS.heldVersion && HS.textures.get("diffuseSampler") === gS.diffuseTexture && HS.textures.get("reflectionCubeSampler") === gS.reflectionTexture && HS.textures.get("opacitySampler") === gS.opacityTexture && HS.textures.get("emissiveSampler") === gS.emissiveTexture) return !0;
        if (bS < 0)
          for (const XS of this.instancesOf(gS)) XS.heldVersion = -1;
        return this.writeModelUniforms(SS, HS, gS, tS), HS.heldVersion = bS, !1
      }
      writeModelUniforms(SS, HS, gS, tS) {
        const {
          ubo: bS
        } = HS, XS = gS.diffuseTexture, xS = gS.diffuseColor;
        bS.updateFloat4("vDiffuseColor", xS[0], xS[1], xS[2], gS.alpha), XS && (bS.updateFloat2("vDiffuseInfos", XS.uvSet, XS.level), bS.updateMatrixFloats("diffuseMatrix", XS.matrix)), bS.updateFloat("alphaCutOff", gS.alphaCutOff), bS.updateFloatsFrom("vEmissiveColor", gS.emissiveColor, 0, 3), bS.updateFloat3TimesFloats("vAmbientColor", tS.ambientColour, 0, gS.ambientColor);
        const NS = gS.specularColor;
        bS.updateFloat4("vSpecularColor", NS[0], NS[1], NS[2], gS.specularPower), bS.setTexture("diffuseSampler", XS);
        const qS = gS.opacityTexture;
        qS && (bS.updateFloat2("vOpacityInfos", qS.uvSet, qS.level), bS.updateMatrixFloats("opacityMatrix", qS.matrix)), bS.setTexture("opacitySampler", qS);
        const uS = gS.emissiveTexture;
        uS && (bS.updateFloat2("vEmissiveInfos", uS.uvSet, uS.level), bS.updateMatrixFloats("emissiveMatrix", uS.matrix)), bS.setTexture("emissiveSampler", uS);
        const IS = gS.reflectionTexture;
        IS && bS.updateMatrixFloats("reflectionMatrix", IS.matrix), bS.updateFloat2("vReflectionInfos", IS ? IS.level * SS.iblIntensity : 0, gS.roughness), bS.setTexture("reflectionCubeSampler", IS);
        const fS = SS.AK();
        for (const {
            feature: KS,
            state: jS,
            active: GS
          }
          of gS.features) {
          var kS, aS;
          if (GS) null === (kS = (aS = (0, IH.e)(KS)).bind) || void 0 === kS || kS.call(aS, jS, bS, SS, fS)
        }
      }
    }

    function CX(SS) {
      const HS = SS.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(HS) ? "u32" : /i32|^vec\di$/.test(HS) ? "i32" : "f32"
    }

    function nX(SS, HS) {
      const gS = SS.getSize(),
        tS = CX(HS),
        bS = SS => 4 === gS ? `${SS}x4` : 2 === gS ? `${SS}x2` : null;
      if ("f32" === tS) {
        if (5126 === SS.type) return 1 === gS ? "float32" : gS >= 2 && gS <= 4 ? `float32x${gS}` : null;
        if (!SS.normalized) return null;
        switch (SS.type) {
          case 5121:
            return bS("unorm8");
          case 5120:
            return bS("snorm8");
          case 5123:
            return bS("unorm16");
          case 5122:
            return bS("snorm16")
        }
        return null
      }
      const XS = "u32" === tS ? "uint" : "sint";
      switch (SS.type) {
        case 5125:
        case 5124:
          return 1 === gS ? `${XS}32` : gS <= 4 ? `${XS}32x${gS}` : null;
        case 5121:
        case 5120:
          return bS(`${XS}8`);
        case 5123:
        case 5122:
          return bS(`${XS}16`)
      }
      return null
    }

    function PX(SS) {
      var HS;
      const gS = /(8|16|32)(?:x(\d))?$/.exec(SS);
      return gS ? Number(gS[1]) / 8 * Number(null !== (HS = gS[2]) && void 0 !== HS ? HS : 1) : 4
    }
    class QX {
      constructor(SS, HS, gS) {
        this.resources = SS, this.limits = HS, this.warnOnce = gS, this.layouts = new Map
      }
      resolveInputs(SS, HS, gS, tS) {
        const bS = [],
          XS = gS.program.attributes,
          xS = [];
        for (let IS = 0; IS < XS.length; IS++) {
          const gS = XS[IS],
            NS = gS.optional ? null : this.resources.vertexInput(SS, gS.name, tS);
          if (!NS) {
            const SS = CX(gS.type),
              HS = "u32" === SS ? "uint32x4" : "i32" === SS ? "sint32x4" : "float32x4";
            xS.push(null);
            const tS = bS.find((SS => null === SS.data));
            tS ? tS.attributes.push({
              shaderLocation: IS,
              offset: 0,
              format: HS
            }) : bS.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: IS,
                offset: 0,
                format: HS
              }]
            });
            continue
          }
          const qS = NS.getBuffer();
          xS.push(NS);
          const uS = nX(NS, gS.type);
          if (!uS) return this.warnOnce(`format:${HS}:${gS.name}`, `${HS}'s ${gS.name} (type ${NS.type}, size ${NS.getSize()}) has no WebGPU vertex format`), null;
          const fS = NS.getIsInstanced() ? "instance" : "vertex",
            kS = NS.byteStride,
            aS = PX(uS),
            KS = bS.find((SS => SS.data === qS && SS.stride === kS && SS.step === fS && NS.byteOffset >= SS.base && NS.byteOffset - SS.base + aS <= kS));
          KS ? KS.attributes.push({
            shaderLocation: IS,
            offset: NS.byteOffset - KS.base,
            format: uS
          }) : bS.push({
            data: qS,
            base: NS.byteOffset,
            stride: kS,
            step: fS,
            attributes: [{
              shaderLocation: IS,
              offset: 0,
              format: uS
            }]
          })
        }
        if (bS.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${HS}`, `${HS} needs ${bS.length} vertex buffers`), null;
        let NS = "";
        for (const IS of bS) {
          NS += `${IS.stride}${"instance"===IS.step?"i":"v"}`;
          for (const SS of IS.attributes) NS += `,${SS.shaderLocation}:${SS.offset}:${SS.format}`;
          NS += ";"
        }
        let qS = this.layouts.get(NS);
        qS || (qS = {
          key: NS,
          buffers: bS.map((SS => ({
            arrayStride: SS.stride,
            stepMode: SS.step,
            attributes: SS.attributes
          }))),
          instanceEnds: bS.map((SS => {
            let HS = -1;
            if ("instance" === SS.step)
              for (const gS of SS.attributes) HS = Math.max(HS, gS.offset + PX(gS.format));
            return HS
          }))
        }, this.layouts.set(NS, qS));
        const uS = bS.map((SS => SS.base));
        return {
          program: gS,
          sources: xS,
          layout: qS,
          slotData: bS.map((SS => SS.data)),
          r_: uS,
          buffers: [],
          offsets: uS,
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

    function DX(SS, HS, gS, tS) {
      const bS = HS.program.program.attributes;
      for (let XS = 0; XS < bS.length; XS++) {
        if ((bS[XS].optional ? null : gS.vertexInput(SS, bS[XS].name, tS)) !== HS.sources[XS]) return !1
      }
      return !0
    }
    const wX = 64;
    class hX {
      constructor(SS, HS, gS, tS) {
        this.device = SS, this.layout = HS, this.frameBuffer = gS, this.label = tS, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(SS) {
        if (SS * wX <= this.data.length) return !1;
        let HS = 2 * this.data.length;
        for (; SS * wX > HS;) HS *= 2;
        const gS = new Float32Array(HS);
        return gS.set(this.data), this.data = gS, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const bS = this.data,
          XS = SS * wX;
        let xS = bS[XS + 16] !== gS;
        for (let NS = 0; NS < 16 && !xS; NS++) xS = bS[XS + NS] !== HS[tS + NS];
        if (xS) {
          for (let SS = 0; SS < 16; SS++) bS[XS + SS] = HS[tS + SS];
          bS[XS + 16] = gS
        }
        return xS
      }
      upload(SS, HS) {
        this.device.queue.writeBuffer(this.buffer, SS * pt, this.data, SS * wX, (HS - SS) * wX)
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

    function ZX(SS) {
      return SS.gpu[dS.d.lite] ??= SS.materials.map(((HS, gS) => ({
        parts: SS,
        range: gS,
        owner: SS.owner
      })))
    }

    function JX(SS) {
      var HS, gS, tS;
      return null !== (HS = null !== (gS = null === (tS = SS.parts.materials[SS.range]) || void 0 === tS ? void 0 : tS.mirror) && void 0 !== gS ? gS : SS.owner.material) && void 0 !== HS ? HS : null
    }
    const OX = ["opaque", "alphaTest", "transparent", "text"];

    function dX(SS) {
      for (const HS of OX) SS[HS].units.length = 0, SS[HS].rows.length = 0
    }
    class cX {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, uH.d)("Lite: ")
      }
      attach(SS, HS) {
        this.model = SS, this.mirror = HS
      }
      get worlds() {
        return this.model.nodes.gk
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(SS) {
        return this.groups.get(SS)
      }
      forEachGroup(SS) {
        this.groups.forEach(SS)
      }
      forEachSelected(SS) {
        for (const [HS, gS] of this.groups)
          for (const tS of OX)
            for (const bS of gS[tS].units) SS(bS.owner, "text" === tS ? "transparent" : tS, HS)
      }
      select(SS, HS) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(dX);
        const {
          model: gS,
          mirror: tS
        } = this;
        if (!gS || !tS || !SS) return;
        this.rows.length < gS.nodes.hf && (this.rows = new Int32Array(gS.nodes.hf));
        const bS = this.rows,
          XS = gS.meshes;
        for (let NS = 0; NS < XS.looseCount; NS++) {
          const SS = XS.loose[NS],
            gS = tS.nodes[SS];
          gS && !gS.isBlocked && gS.isEnabled() && !gS.nf.hasAZeroComponent && XS.selects(SS, HS.frustum) && (this.activate(gS, SS), this.selectedCount++)
        }
        const xS = XS.selectTextPlanes(HS.frustum, bS);
        for (let NS = 0; NS < xS; NS++) {
          const HS = bS[NS],
            XS = tS.nodes[HS],
            xS = gS.meshes.parts[HS];
          if (!XS.isVisible || !(XS.visibility > 0) || 0 === (XS.layerMask & SS.layerMask) || !xS) continue;
          const qS = this.groupOf(gS.meshes.layer[HS]).text;
          for (const SS of ZX(xS)) qS.units.push(SS), qS.rows.push(HS);
          this.selectedCount++
        }
      }
      instanceBatch(SS) {
        const HS = this.batchOf(SS);
        return HS.dispatched || (HS.dispatched = HS.renderSelf = !0, HS.row = this.rowOf(SS)), HS
      }
      rowOf(SS) {
        return SS.row
      }
      activate(SS, HS) {
        if (!SS.qY) {
          const gS = SS;
          if (gS.BtS) {
            const SS = this.batchOf(gS);
            SS.dispatched = !0, SS.renderSelf = !0, SS.row = HS
          }
          return void this.dispatch(gS, HS, HS)
        }
        const gS = SS,
          tS = gS.MtS;
        if (tS._getWorldMatrixDeterminant() >= 0 !== gS._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${tS.name}`, `A mirrored InstancedMesh of ${tS.name} is not drawn yet`);
        const bS = this.batchOf(tS);
        bS.instances.push(gS), bS.rows.push(HS), bS.dispatched || (bS.dispatched = !0, this.dispatch(tS, HS, this.rowOf(tS)))
      }
      batchOf(SS) {
        let HS = this.batches.get(SS);
        return HS || (HS = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(SS, HS)), HS.frame !== this.frame && (HS.frame = this.frame, HS.dispatched = !1, HS.renderSelf = !1, HS.instances.length = 0, HS.rows.length = 0), HS
      }
      dispatch(SS, HS, gS) {
        const {
          layer: tS,
          parts: bS
        } = this.model.meshes;
        if (!bS[HS]) return;
        const XS = this.groupOf(tS[HS]),
          xS = SS;
        for (const NS of ZX(bS[HS])) {
          const SS = JX(NS);
          if (!SS) continue;
          const HS = SS.needAlphaBlendingForMesh(xS) ? XS.transparent : SS.needAlphaTestingForMesh(xS) ? XS.alphaTest : XS.opaque;
          HS.units.push(NS), HS.rows.push(gS)
        }
      }
      groupOf(SS) {
        let HS = this.groups.get(SS);
        return HS || (HS = {
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
        }, this.groups.set(SS, HS)), HS
      }
    }

    function vX(SS) {
      SS.opaque.length = 0, SS.transparent.length = 0
    }
    class EX {
      constructor() {
        this.Ku = new Map, this.enabled = [], this.groups = new Map, this.ia = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(SS) {
        if (this.Ku.has(SS)) return;
        const HS = {
          mesh: SS,
          observer: SS.onEffectiveEnabledStateChangedObservable.add((SS => {
            this.MJ(HS, SS)
          })),
          index: -1,
          steady: null
        };
        this.Ku.set(SS, HS), this.MJ(HS, SS.isEnabled())
      }
      remove(SS) {
        const HS = this.Ku.get(SS);
        HS && (HS.observer.remove(!0), this.MJ(HS, !1), this.Ku.delete(SS))
      }
      base(SS) {
        return this.Ku.get(SS)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Ku: this.Ku.size
        }
      }
      forEachSelected(SS) {
        for (const [HS, gS] of this.groups) {
          for (const tS of gS.opaque) SS(tS.owner, "opaque", HS);
          for (const tS of gS.transparent) SS(tS.owner, "transparent", HS)
        }
        for (const HS of this.ia) SS(HS.mesh, "opaque", 0)
      }
      group(SS) {
        return this.groups.get(SS)
      }
      forEachGroup(SS) {
        this.groups.forEach(SS)
      }
      select(SS, HS) {
        if (this.drawn = 0, this.selected = 0, this.ia.length = 0, this.groups.forEach(vX), !SS) return;
        const gS = this.enabled;
        for (let tS = 0; tS < gS.length; tS++) {
          const bS = gS[tS];
          if (bS.steady && HS(bS, SS)) {
            this.selected++, this.ia.push(bS);
            continue
          }
          const XS = bS.mesh;
          if (XS.isBlocked || XS.nf.hasAZeroComponent) continue;
          if (!XS.isVisible || XS.visibility <= 0 || 0 === (XS.layerMask & SS.layerMask)) continue;
          if (XS.BtS) {
            this.warned.has(XS.name) || (this.warned.add(XS.name), console.warn(`Lite: thin instance base ${XS.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: xS
          } = XS;
          if (!xS) continue;
          XS.computeWorldMatrix(), this.selected++;
          const NS = this.listsFor(XS.renderingGroupId);
          for (const SS of ZX(xS)) {
            const HS = JX(SS);
            HS && (HS.needAlphaBlendingForMesh(XS) ? NS.transparent.push(SS) : NS.opaque.push(SS))
          }
        }
      }
      MJ(SS, HS) {
        if (HS === SS.index >= 0) return;
        SS.steady = null;
        const gS = this.enabled;
        if (HS) SS.index = gS.length, gS.push(SS);
        else {
          const HS = gS.pop();
          HS !== SS && (gS[SS.index] = HS, HS.index = SS.index), SS.index = -1
        }
      }
      listsFor(SS) {
        let HS = this.groups.get(SS);
        return HS || (HS = {
          opaque: [],
          transparent: []
        }, this.groups.set(SS, HS)), HS
      }
    }
    var LX = gS(39624);
    class YX {
      constructor() {
        this.bundle = null, this.stale = !0, this.Ku = new Set
      }
    }
    class AX {
      constructor(SS, HS, gS) {
        this.device = SS, this.slots = HS, this.host = gS, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new YX, this.sE = new YX, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new ob, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = SS => {
          SS.seen !== this.frame && (SS.draw && (SS.draw = null, this.args[5 * SS.slot + 1] = 0, this.argsDirty = !0, this.sE.stale ||= SS.sE), this.frame - SS.seen > 120 && (this.records.delete(SS.unit), this.freeSlots.push(SS.slot), SS.recorded && (this.bundleOf(SS).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(SS) {
          var HS, gS;
          let tS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (HS = null === (gS = globalThis.navigator) || void 0 === gS ? void 0 : gS.userAgent) && void 0 !== HS ? HS : "";
          const bS = SS.adapterInfo;
          return "intel" === (null === bS || void 0 === bS ? void 0 : bS.vendor) && "gen-12lp" === bS.architecture && tS.includes("Windows")
        }(SS), (0, LX.A)(this.direct)
      }
      qD() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, LX.A)(this.directThisFrame)
      }
      add(SS, HS, gS, tS) {
        let bS = this.records.get(SS);
        return bS || (bS = this.createRecord(SS), this.records.set(SS, bS)), bS.recorded && VX(bS, HS) || (this.bundleOf(bS).stale = !0), this.place(bS, HS, gS, tS), bS
      }
      bundleOf(SS) {
        return SS.sE ? this.sE : this.main
      }
      addAgain(SS, HS, gS, tS) {
        SS.recorded || (this.bundleOf(SS).stale = !0), this.place(SS, HS, gS, tS)
      }
      place(SS, HS, gS, tS) {
        SS.seen = this.frame, SS.sE && null === SS.draw && (this.sE.stale = !0), SS.draw = HS, this.drawn++, gS && this.slots.write(SS.slot, gS, tS) && (this.slotsFrom = Math.min(this.slotsFrom, SS.slot), this.slotsTo = Math.max(this.slotsTo, SS.slot));
        const bS = this.args,
          XS = 5 * SS.slot;
        bS[XS] === HS.count && bS[XS + 1] === HS.instances && bS[XS + 2] === HS.first || (bS[XS] = HS.count, bS[XS + 1] = HS.instances, bS[XS + 2] = HS.first, this.argsDirty = !0, this.sE.stale ||= SS.sE)
      }
      uD() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(SS) {
        for (const HS of this.records.values()) HS.draw && HS.seen === this.frame && !HS.sE && SS(HS.draw, this.slots.data, HS.slot * pt / 4)
      }
      resourceDestroyed(SS) {
        this.main.stale ||= this.main.Ku.has(SS), this.sE.stale ||= this.sE.Ku.has(SS)
      }
      execute(SS, HS, gS) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(SS, HS, gS, "direct"), this.drawn;
        const tS = this.host.sceneGroup(HS);
        if (!tS) return this.main.bundle = null, this.sE.bundle = null, this.recordedSceneGroup = null, this.encode(SS, HS, gS, "direct"), this.drawn;
        this.recordedTarget === gS && this.recordedSceneGroup === tS || (this.recordedTarget = gS, this.recordedSceneGroup = tS, this.main.stale = !0, this.sE.stale = !0);
        const bS = this.main,
          XS = this.sE;
        let xS = !1;
        !bS.stale && bS.bundle || (bS.bundle = this.record(HS, gS, tS, "indirect"), xS = !0);
        const NS = (0, LX.j)();
        return (XS.stale || this.rangedEpoch !== NS) && (this.rangedEpoch = NS, XS.bundle = this.drawsRanged() ? this.record(HS, gS, tS, "sE") : this.noRangedBundle(), xS = !0), xS && (this.bundles = XS.bundle ? [bS.bundle, XS.bundle] : [bS.bundle]), SS.executeBundles(this.bundles), SS.setBindGroup(0, tS), this.drawn
      }
      record(SS, HS, gS, tS) {
        const bS = this.device.createRenderBundleEncoder({
          label: "sE" === tS ? "thin-bases-ranged" : "thin-bases",
          colorFormats: SS._colorFormat ? [SS._colorFormat] : [],
          depthStencilFormat: SS._depthStencilFormat,
          sampleCount: SS._sampleCount
        });
        return bS.setBindGroup(0, gS), this.encode(bS, SS, HS, tS), bS.finish()
      }
      noRangedBundle() {
        for (const SS of this.records.values()) SS.sE && (SS.recorded = !1);
        return this.sE.Ku.clear(), this.sE.stale = !1, null
      }
      drawsRanged() {
        for (const SS of this.records.values())
          if (SS.sE && SS.draw) return !0;
        return !1
      }
      encode(SS, HS, gS, tS) {
        const bS = [];
        for (const qS of this.records.values()) "direct" !== tS && qS.sE !== ("sE" === tS) || (qS.recorded = !1, qS.draw && bS.push(qS));
        bS.sort(iX);
        const XS = "direct" === tS ? null : "sE" === tS ? this.sE : this.main;
        null === XS || void 0 === XS || XS.Ku.clear(), this.binder.reset();
        let xS = !1;
        for (const qS of bS) {
          var NS;
          const bS = qS.draw,
            uS = this.host.pipelineFor(bS, HS, gS);
          if (!uS) {
            this.host.pipelineCompiling(bS, gS) ? xS = !0 : XS && this.keep(qS, bS, XS.Ku);
            continue
          }
          let IS;
          if (qS.sE && "indirect" !== tS) {
            const SS = qS.unit.owner;
            IS = "direct" === tS && (0, LX.r)(SS) || (0, LX.l)(SS) || void 0
          }
          if (XS && this.keep(qS, bS, XS.Ku), 0 === (null === (NS = IS) || void 0 === NS ? void 0 : NS.count)) continue;
          this.binder.bind(SS, bS, uS, this.slots.bindGroup, qS.slot * pt);
          const fS = 5 * qS.slot;
          if ("indirect" === tS) {
            bS.indexBuffer ? SS.drawIndexedIndirect(this.argsBuffer, 4 * fS) : SS.drawIndirect(this.argsBuffer, 4 * fS);
            continue
          }
          const kS = this.args;
          IS ? yX(SS, null !== bS.indexBuffer, kS, fS, IS) : bS.indexBuffer ? SS.drawIndexed(kS[fS], kS[fS + 1], kS[fS + 2], 0, 0) : SS.draw(kS[fS], kS[fS + 1], kS[fS + 2], 0)
        }
        XS && (XS.stale = xS)
      }
      keep(SS, HS, gS) {
        SS.recorded = !0, SS.pipelineKey = HS.pipelineKey, SS.materialGroup = HS.material.bindGroup, SS.vertexBuffers.length = 0, SS.vertexBuffers.push(...HS.vertexBuffers), SS.vertexOffsets = HS.vertexOffsets, SS.indexBuffer = HS.indexBuffer, SS.indexFormat = HS.indexFormat;
        for (const tS of HS.vertexBuffers) gS.add(tS);
        HS.indexBuffer && gS.add(HS.indexBuffer), gS.add(HS.material.buffer);
        for (const tS of HS.material.bound) tS && gS.add(tS)
      }
      createRecord(SS) {
        let HS = this.freeSlots.pop();
        return void 0 === HS && (HS = this.slotCount++, this.grow()), {
          unit: SS,
          slot: HS,
          sE: void 0 !== (0, LX.l)(SS.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.sE.stale = !0), 5 * this.slotCount > this.args.length) {
          const SS = new Uint32Array(2 * this.args.length);
          SS.set(this.args), this.args = SS, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function yX(SS, HS, gS, tS, bS) {
      const XS = gS[tS + 1],
        xS = bS.data;
      for (let NS = 0; NS < bS.count; NS++) {
        const bS = Math.min(xS[2 * NS], XS),
          qS = Math.min(xS[2 * NS + 1], XS - bS);
        0 !== qS && (HS ? SS.drawIndexed(gS[tS], qS, gS[tS + 2], 0, bS) : SS.draw(gS[tS], qS, gS[tS + 2], bS))
      }
    }

    function VX(SS, HS) {
      if (SS.pipelineKey !== HS.pipelineKey || SS.materialGroup !== HS.material.bindGroup || SS.indexBuffer !== HS.indexBuffer || SS.indexFormat !== HS.indexFormat || SS.vertexOffsets !== HS.vertexOffsets || SS.vertexBuffers.length !== HS.vertexBuffers.length) return !1;
      for (let gS = 0; gS < SS.vertexBuffers.length; gS++)
        if (SS.vertexBuffers[gS] !== HS.vertexBuffers[gS]) return !1;
      return !0
    }

    function iX(SS, HS) {
      return mb(SS.draw, HS.draw)
    }
    const WX = new WeakMap,
      zX = {
        depth: !1,
        sunShadow: !1
      };

    function UX(SS, HS) {
      let gS = WX.get(SS);
      gS || (gS = new Map, WX.set(SS, gS));
      const tS = `${HS.depth?"-depth":""}${HS.sunShadow?"-shadow":""}${HS.shadowMask?"-mask":""}`;
      let bS = gS.get(tS);
      if (!bS) {
        const XS = [{
          binding: OH.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: OH.h
          }
        }, {
          binding: OH.u,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        HS.depth && XS.push({
          binding: OH.o,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), HS.sunShadow && XS.push(... function() {
          const SS = GPUShaderStage.FRAGMENT,
            HS = OH.s;
          return [{
            binding: HS.uniform,
            visibility: SS,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: HS.Lk,
            visibility: SS,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: HS.special,
            visibility: SS,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: HS.volume,
            visibility: SS,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: HS.sampler,
            visibility: SS,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: HS.entities,
            visibility: SS,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: HS.entityGrids,
            visibility: SS,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), HS.shadowMask && XS.push({
          binding: OH.t,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), bS = SS.createBindGroupLayout({
          label: `${HS.depth?"terrain-":""}shader-pack-inputs${tS}`,
          entries: XS
        }), gS.set(tS, bS)
      }
      return bS
    }

    function pX(SS) {
      return UX(SS, zX)
    }

    function sX(SS, HS) {
      if (!HS) return !1;
      const gS = (0, dH.d)(SS);
      return !!gS && Vg(gS, HS)
    }

    function BX(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!ut(HS)) return [];
      return [UX(SS, {
        depth: bt(HS.packVariant),
        sunShadow: sX(HS.packVariant, gS),
        shadowMask: tS
      })]
    }
    class MX {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = SS, this.sunShadow = gS, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(OH.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = SS.createBuffer({
          label: "shader-pack-inputs",
          size: OH.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const tS = (0, OH.y)(HS);
        this.textures = SS.createBuffer({
          label: "shader-pack-textures",
          size: tS.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), SS.queue.writeBuffer(this.textures, 0, tS), this.bindGroup = SS.createBindGroup({
          label: "shader-pack-inputs",
          layout: pX(SS),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: OH.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: OH.u,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(SS, HS, gS) {
        (0, OH.C)(this.data, {
          seconds: SS.seconds(),
          lit: gS,
          renderOffset: SS.renderOffset(),
          Z6: SS.Z6(),
          eyePosition: HS,
          shadowDirection: SS.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const tS = HS ? this.sunShadow : null;
        if ((HS || gS) && !tS) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!SS && !tS) return this.bindGroup;
        (SS && SS !== this.depthView || gS && gS !== this.maskView) && (this.depthView = null !== SS && void 0 !== SS ? SS : this.depthView, this.maskView = null !== gS && void 0 !== gS ? gS : this.maskView, this.groups.clear());
        const bS = (SS ? 1 : 0) | (tS ? 2 : 0) | (gS ? 4 : 0);
        let XS = this.groups.get(bS);
        if (!XS) {
          const HS = this.entries();
          SS && HS.push({
            binding: OH.o,
            resource: SS
          }), tS && HS.push(...tS.entries()), gS && HS.push({
            binding: OH.t,
            resource: gS
          }), XS = this.device.createBindGroup({
            label: `${SS||gS?"terrain-":""}shader-pack-inputs${SS?"-depth":""}${tS?"-shadow":""}${gS?"-mask":""}`,
            layout: UX(this.device, {
              depth: !!SS,
              sunShadow: !!tS,
              shadowMask: !!gS
            }),
            entries: HS
          }), this.groups.set(bS, XS)
        }
        return XS
      }
      bind(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        SS.setBindGroup(OH.g, this.bindGroupFor(HS, gS, tS))
      }
    }

    function FX(SS, HS, gS) {
      if (SS.gpuVersion === HS.gpuBuffersVersion) return !0;
      let tS;
      do {
        if (tS = HS.gpuBuffersVersion, !RX(SS, HS, gS)) return !1
      } while (HS.gpuBuffersVersion !== tS);
      return SS.gpuVersion = tS, SS.fitInstances = 0, !0
    }

    function RX(SS, HS, gS) {
      let tS = null;
      for (let XS = 0; XS < SS.slotData.length; XS++) {
        var bS;
        const xS = SS.slotData[XS],
          NS = xS ? HS.gpuBuffer(xS) : gS;
        if (!NS) return !1;
        xS && SS.layout.instanceEnds[XS] < 0 && HS.cover(xS, Number.POSITIVE_INFINITY), SS.buffers[XS] = NS;
        const qS = SS.r_[XS] + (xS ? HS.gpuOffset(xS) : 0);
        qS !== (null !== (bS = tS) && void 0 !== bS ? bS : SS.offsets)[XS] && (tS ??= SS.offsets.slice(), tS[XS] = qS), SS.ends[XS] = xS ? HS.gpuEnd(xS) : NS.size
      }
      return tS && (SS.offsets = tS), !0
    }

    function TX(SS, HS, gS, tS) {
      if (HS <= SS.fitInstances) return null;
      const {
        layout: bS,
        ends: XS,
        offsets: xS,
        slotData: NS,
        r_: qS
      } = SS;
      let uS = !1;
      for (let IS = 0; IS < bS.buffers.length; IS++) {
        const SS = bS.instanceEnds[IS];
        if (SS < 0) continue;
        const tS = (HS - 1) * bS.buffers[IS].arrayStride + SS;
        if (XS[IS] - xS[IS] < tS) return {
          index: IS,
          needed: tS
        };
        const fS = NS[IS];
        fS && gS.cover(fS, qS[IS] + tS) && (uS = !0)
      }
      return uS && FX(SS, gS, tS), SS.fitInstances = HS, null
    }
    var oX = gS(37843),
      lX = gS(37876);
    const mX = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      eX = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      rX = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Sx = `((vertexInputs.aPackedLightLevels >> 16u) | ${qH.d.placed}u)`,
      Hx = "u32(vertexInputs.aShaderPackItem.x)",
      gx = `${qH.d.lifeform}u`;

    function tx(SS) {
      return "item" === SS.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const bx = "bloxdSpEnchant",
      Xx = "floor(finalWorld[3].xyz)";

    function xx(SS, HS, gS) {
      return "placed" === HS.kind && SS.reads[gS].includes("bloxdFragmentBlockPosition")
    }

    function Nx(SS, HS) {
      let [gS, tS] = SS;
      return gS === HS.point && tS === HS.code
    }

    function qx(SS, HS) {
      var gS, tS, bS;
      const XS = null === (gS = SS.find((SS => SS.texture))) || void 0 === gS ? void 0 : gS.texture,
        xS = null === (tS = SS.find((SS => SS.enchantTier))) || void 0 === tS ? void 0 : tS.enchantTier,
        NS = null === (bS = SS.find((SS => SS.overlay))) || void 0 === bS ? void 0 : bS.overlay,
        qS = NS ? HS.filter((SS => Nx(SS, NS))).length : 0;
      return NS && 1 === qS ? {
        texture: XS,
        overlay: NS,
        enchantTier: xS
      } : {
        texture: XS,
        enchantTier: xS
      }
    }

    function ux(SS) {
      if ("item" === SS.kind) {
        return {
          vertexFlags: `(${Hx} & 0xffffu)`,
          varying: "vPackItem",
          value: Hx,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return SS.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Sx,
        varying: "vPackFlags",
        value: Sx,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Ix(SS) {
      return "lifeform" === SS.kind ? gx : "0u"
    }

    function fx(SS) {
      return !!SS.BLOXD_PLUGIN_ENCHANTMENT
    }

    function kx(SS, HS) {
      const {
        enchantTier: gS
      } = HS;
      return gS && fx(HS.defines) && "lifeform" === HS.kind && nx(SS, "enchantTier") ? gS : null
    }

    function ax(SS, HS) {
      return fx(HS.defines) && nx(SS, "enchantSpeed")
    }

    function Kx(SS) {
      const {
        overlay: HS,
        defines: gS
      } = SS;
      if (!HS || !gS.DIFFUSE) return null;
      const tS = gS.VERTEXCOLOR || gS.INSTANCESCOLOR && gS.INSTANCES;
      return `vec4f(${HS.colour}.rgb * uniforms.vDiffuseInfos.y${tS?" * fragmentInputs.vColor.rgb":""}, ${HS.colour}.a)`
    }
    const jx = "fragmentInputs.vPackTexture";

    function Gx(SS) {
      const {
        atlas: HS,
        defines: gS,
        texture: tS
      } = SS;
      if (HS || !gS.DIFFUSE) return null;
      if (tS) return {
        texture: "diffuseSampler",
        ...tS
      };
      const bS = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===gS.DIFFUSEDIRECTUV?"vMainUV1":2===gS.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== SS.kind) return bS;
      if (!gS.BLOXD_PLUGIN_ANIMATED) return {
        ...bS,
        id: jx
      };
      const XS = wS.e.WGSL,
        xS = (0, wS.Gb)(XS, "uAnimStatesNum"),
        NS = (0, wS.eb)(XS, (0, oX.e)(XS), xS),
        qS = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${xS})`,
        layers: [NS],
        uv: `vec2f(${qS}.x, ${qS}.y * ${xS} - ${NS})`,
        levelUv: qS,
        id: jx
      }
    }

    function Cx(SS, HS) {
      return "box" === HS.kind && !!SS.hooks.surface && null !== Gx(HS)
    }

    function nx(SS, HS) {
      return SS.reads.fragment.includes(HS)
    }

    function Px(SS) {
      return !!SS.BLOXD_LIGHTING && !SS.BLOXD_UNLIT
    }

    function Qx(SS, HS, gS, tS) {
      const bS = SS.filter((SS => {
        let [gS, tS] = SS;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === gS && tS === HS
      }));
      if (1 !== bS.length) throw new Error(`A model program for shader packs has ${0===bS.length?"no":"more than one"} ${tS} code before fog (lite/modelShaderPack.ts)`);
      return SS.map((SS => SS === bS[0] ? [SS[0], gS] : SS))
    }

    function Dx(SS, HS, gS, tS) {
      const {
        hooks: bS
      } = SS, {
        kind: XS,
        defines: xS
      } = HS, NS = [...gS];
      var qS;
      HS.atlas && bS.surface && NS.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Bg("atlasIdxIn")]), "item" === XS && NS.push(["CUSTOM_VERTEX_DEFINITIONS", (0, wS.g)(wS.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Cx(SS, HS) && NS.push(["CUSTOM_VERTEX_DEFINITIONS", (0, wS.g)(wS.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (qS = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${pg}[min(u32(${qS}) - 1u, arrayLength(&${pg}) - 1u)], ${qS} > 0.5);\n`)]);
      const uS = ux(HS);
      uS && (bS.surface || bS.light) && NS.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${uS.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${uS.varying} = ${uS.value};`]);
      let IS = tS;
      if (xx(SS, HS, "fragment") && (NS.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Xx});`]), IS = [...IS, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), nx(SS, "localPosition") && NS.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${tx(HS)};`]), fx(xS) && bS.surface) {
        ax(SS, HS) && NS.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const gS = kx(SS, HS);
        gS && NS.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${gS});`]);
        const tS = (0, wS.ob)(wS.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        IS = [...Qx(IS, (0, lX.h)(wS.e.WGSL), tS, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, lX.e)(bx)]]
      }
      const {
        overlay: fS
      } = HS;
      fS && Kx(HS) && bS.surface && (IS = IS.filter((SS => !Nx(SS, fS))));
      const kS = bS.light ? function(SS) {
        return "placed" === SS.kind ? {
          name: "terrain",
          engine: (0, hH.ab)(wS.e.WGSL),
          pack: (0, hH.ub)(wS.e.WGSL)
        } : SS.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, hH.T)(wS.e.WGSL),
          pack: (0, hH.pb)(wS.e.WGSL)
        } : null
      }(HS) : null;
      if (kS && (IS = Qx(IS, kS.engine, kS.pack, `${kS.name} light`), "placed" !== XS && Px(xS))) {
        const SS = xS.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, wS.Gb)(wS.e.WGSL, "uEntityLightLevels") : (0, wS.Pb)(wS.e.WGSL, "aLightLevels");
        NS.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${hH.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, hH.qb)(wS.e.WGSL, SS)])
      }
      return {
        vertexCode: NS,
        fragmentCode: IS
      }
    }

    function wx(SS, HS, gS, tS) {
      return Ag(SS, HS, gS, tS, "model")
    }
    const hx = "\t@builtin(position) position: vec4f,\n";

    function Zx(SS, HS) {
      const gS = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(SS)[0];
      return `${gS}${HS}${SS.slice(gS.length)}`
    }

    function Jx(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: bS
      } = HS, XS = Vg(HS, tS), {
        kind: xS,
        defines: NS
      } = gS, qS = function(SS, HS) {
        var gS, tS, bS;
        const {
          defines: XS
        } = HS, xS = ux(HS), NS = !!XS.FOG, qS = fx(XS), uS = null !== (gS = null === xS || void 0 === xS ? void 0 : xS.enchantTier) && void 0 !== gS ? gS : kx(SS, HS) ? "fragmentInputs.vPackEnchantTier" : "0u", IS = "lifeform" === HS.kind && !XS.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (tS = null === xS || void 0 === xS ? void 0 : xS.vertexFlags) && void 0 !== tS ? tS : Ix(HS),
          vertexLocalPosition: tx(HS),
          flags: null !== (bS = null === xS || void 0 === xS ? void 0 : xS.flags) && void 0 !== bS ? bS : Ix(HS),
          normal: "normalW",
          alpha: IS ? "alpha * baseColor.a" : "alpha",
          alphaOut: IS ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: NS ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: NS ? "1.0 - fog" : "0.0",
          enchantTier: uS,
          enchantColour: qS ? `${bx}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: ax(SS, HS) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: nx(SS, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Kx(HS)
        }
      }(HS, gS), uS = SS.textures.filter((SS => /^textureAtlas\d+$/.test(SS.name))).length, IS = gS.atlas && uS > 0 ? {
        count: uS,
        layers: gS.atlas.layers,
        width: gS.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: SS.material.slots.has("uAnimDataPerTex") ? (HS, gS) => dt(HS, gS, function(SS) {
          const HS = SS.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            mf: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: SS => `uniforms.uAnimDataPerTex[${SS}]${HS}`
          }
        }(SS)) : null
      } : null, fS = "placed" === xS ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", kS = null !== IS && void 0 !== IS ? IS : Gx(gS), aS = function(SS, gS) {
        let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,OH.A)()}${Wg(HS,gS)}${tS}${Fg(SS)}${Eg}${fS}${HS.code}`
      };
      let {
        vertex: KS,
        fragment: jS
      } = SS;
      const GS = Tg(bS, qS);
      if (GS) {
        const SS = xx(HS, gS, "vertex") ? `\tbloxdSpCell = ${Xx};\n` : "";
        KS = wx(KS, mX, `${SS}${GS.slice(1)}${mX}`, "vertex")
      }
      const CS = `${zg(HS,XS,function(SS,HS){return HS.TWOSIDEDLIGHTING?SS:`select(-(${SS}), ${SS}, fragmentInputs.frontFacing)`}(qS.normal,NS),qS.flags)}${og(bS,HS.strict,HS.program,kS,qS)}`;
      CS && (jS = wx(jS, eX, `${CS.slice(1)}${eX}`, "surface")), XS && HS.sunShadow && !NS.TWOSIDEDLIGHTING && (jS = wx(jS, hx, `${hx}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const nS = eg(bS);
      if (nS) {
        const SS = mg(bS, Px(NS), !0, qS);
        jS = wx(jS, rX, `${SS}${nS.slice(1)}${rX}`, "light")
      }
      const PS = Cx(HS, gS) ? sg : "";
      return {
        ...SS,
        vertex: Zx(KS, aS(IS, !1, PS)),
        fragment: Zx(jS, aS(kS, XS))
      }
    }
    const Ox = {
      name: "earthSky",
      uniqueId: -1
    };
    class dx {
      constructor(SS) {
        this.resources = SS, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const SS of this.instances.values()) SS.released = !0, this.resources.destroyBuffer(SS.buffer);
        this.instances.clear()
      }
    }

    function cx(SS) {
      return SS.failed && null !== SS.packGroup
    }
    class vx {
      constructor(SS, HS, gS) {
        this.device = SS, this.resources = HS, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.l_ = new EX, this.modelMeshes = new cX, this.thinBundle = void 0, this.binder = new ob, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new GX((SS => this.modelSlot(SS).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, uH.d)("Lite: "), this.renderStates = new fX(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (SS, HS) => this.keepSteady(SS, HS), this.lists = new lb(this.modelMeshes, this.l_, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new NX(HS, this.warnOnce, ((SS, HS, gS) => this.programWithModel(SS, HS, gS)), cx), this.vertexLayouts = new QX(HS, SS.limits, this.warnOnce), this.sceneLayout = HH(SS), this.frameLayout = SS.createBindGroupLayout({
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
        }), this.frameBuffer = SS.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new hX(SS, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = SS.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new AX(SS, new hX(SS, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (SS, HS, gS) => this.pipelineFor(SS, HS, gS),
          pipelineCompiling: (SS, HS) => !SS.program.failed && !1 !== this.pipelines.get(`${SS.pipelineKey}|${HS}`),
          sceneGroup: SS => {
            const HS = gS(SS);
            return HS || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), HS
          }
        }), HS.onDestroy = SS => {
          this.thinBundle.resourceDestroyed(SS)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const bS = {
          order: SS,
          isTransparent: HS,
          _direct: !HS,
          bind: (SS, HS) => this.createBinding(bS, HS, gS, tS)
        };
        return bS
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(SS, HS, gS) {
        var tS;
        let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = HS, this.drawDefines.view = HS, this.thinBundle.qD(), this.writeFrameUniforms();
        const XS = null !== (tS = null === bS || void 0 === bS ? void 0 : bS.defineFor("model")) && void 0 !== tS ? tS : 0;
        this.drawDefines.modelPackVariant = XS, bS && 0 !== XS && (this.packInputs ??= new MX(this.device, bS.textureLayers(), this.sunShadow), this.packInputs.write(bS, HS.eye, bS.Wj())), this.lists.clear(), this.slotCount = 0;
        const xS = SS.activeCamera;
        this.l_.select(xS, this.keepSteadyBase), this.modelMeshes.select(xS, HS), gS && this.pushEarthSky(gS), this.lists.collect(SS), this.thinBundle.uD(), this.uploadMeshSlots()
      }
      pushDraws(SS, HS, gS, tS, bS, XS) {
        let xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const NS = XS.length;
        for (let qS = 0; qS < gS; qS++) {
          const gS = HS[qS];
          let NS = this.retainedDraw(SS, gS, tS, bS);
          if (void 0 === NS && (NS = this.drawFor(SS, gS, tS, bS), this.retain(gS, NS)), NS) {
            const SS = gS.owner,
              HS = xS ? xS[qS] : -1;
            NS.slotOffset = HS < 0 ? this.writeMeshSlot(SS.getWorldMatrix().m, SS.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[HS], 16 * HS), XS.push(NS)
          }
        }
        return XS.length - NS
      }
      bundleDraws(SS, HS, gS) {
        let tS = 0;
        for (const bS of HS) {
          let HS = this.retainedDraw(SS, bS, gS, !1);
          const XS = void 0 !== HS;
          if (void 0 === HS && (HS = this.drawFor(SS, bS, gS, !1), this.retain(bS, HS)), HS) {
            const SS = bS.owner,
              gS = this.thinBundle.add(bS, HS, SS.getWorldMatrix().m, SS.visibility);
            XS && this.steadyFrom(bS, HS, gS), tS++
          }
        }
        return tS
      }
      steadyFrom(SS, HS, gS) {
        const tS = SS.owner,
          bS = this.l_.base(tS),
          XS = tS.material,
          {
            drawState: xS,
            instance: NS
          } = HS.inputs.retained;
        if (!bS || !XS || 1 !== SS.parts.materials.length || JX(SS) !== XS) return;
        const qS = bS.steady ??= {
          unit: SS,
          material: XS,
          visibility: 1,
          draw: HS,
          record: gS,
          drawState: xS,
          instance: NS,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        qS.unit = SS, qS.material = XS, qS.visibility = tS.visibility, qS.draw = HS, qS.record = gS, qS.drawState = xS, qS.instance = NS, qS.bindGroup = NS.bindGroup, qS.gpuVersion = this.resources.gpuBuffersVersion, qS.fitInstances = HS.inputs.fitInstances, qS.worldFlag = tS.getWorldMatrix().updateFlag, qS.handedFrame = this.frame
      }
      keepSteady(SS, HS) {
        const gS = SS.steady;
        if (gS.handedFrame !== this.frame - 1 || (this.frame + gS.phase) % 8 === 0) return !1;
        const tS = SS.mesh,
          {
            unit: bS,
            draw: XS,
            instance: xS,
            drawState: NS
          } = gS,
          qS = tS.forcedInstanceCount || tS.O4;
        if (!tS.isVisible || tS.BtS || tS.visibility !== gS.visibility || 0 === (tS.layerMask & HS.layerMask) || tS.material !== gS.material || 0 !== tS.renderingGroupId || tS.hasVertexAlpha || !this.drawDefines.definesHold(NS, bS, NS.instancing) || gS.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(XS.inputs, bS, NS.instancing, XS.program) || XS.program.failed || xS.released || qS <= 0 || qS > gS.fitInstances) return !1;
        if (xS.frame !== this.frame && this.bindMaterial(xS, this.modelUniforms.refreshModelUniforms(tS.lL(), xS, xS.model, this.view)), !xS.bindable || xS.bindGroup !== gS.bindGroup) return !1;
        const uS = tS.computeWorldMatrix(),
          IS = uS.updateFlag !== gS.worldFlag;
        return gS.worldFlag = uS.updateFlag, XS.instances = qS, this.thinBundle.addAgain(gS.record, XS, IS ? uS.m : null, gS.visibility), gS.handedFrame = this.frame, this.l_.drawn++, !0
      }
      retainedDraw(SS, HS, gS, tS) {
        const bS = this.inputs.get(HS),
          XS = null === bS || void 0 === bS ? void 0 : bS.retained;
        if (!bS || !XS) return;
        const {
          drawState: xS,
          program: NS,
          instance: qS,
          instancing: uS
        } = XS, IS = HS.owner;
        if (HX(IS) !== uS) return;
        const fS = this.instanceCount(IS, uS);
        if (fS <= 0) return null;
        if (qS.released || NS.failed || xS.program !== NS || !this.drawDefines.programCurrent(xS, HS, uS, gS) || !this.inputsStamped(bS, HS, uS, NS) || IS.isUnIndexed !== XS.unIndexed || this.indexKey(HS) !== XS.indexData) return;
        if (XS.indexBuffer && XS.gpuVersion !== this.resources.gpuBuffersVersion) {
          const SS = this.resources.gpuBuffer(XS.indexData);
          if (!SS) return;
          XS.indexBuffer = SS, XS.gpuVersion = this.resources.gpuBuffersVersion
        }
        let kS = !1;
        if (qS.frame !== this.frame && (kS = this.modelUniforms.refreshModelUniforms(SS, qS, qS.model, this.view)), !this.bindMaterial(qS, kS) || !this.withGpuBuffers(bS) || !this.instanceBuffersFit(IS.name, bS, fS)) return null;
        const aS = this.makeDraw(NS, bS, this.renderStates.renderState(xS.model, IS, tS, bS.state), qS, fS);
        return this.setRange(aS, HS, XS.indexBuffer, XS.indexData), aS
      }
      retain(SS, HS) {
        const gS = this.drawDefines.drawStates.get(SS);
        if (!HS || !gS || gS.program !== HS.program) {
          const HS = this.inputs.get(SS);
          return void(HS && (HS.retained = null))
        }
        const tS = SS.owner,
          bS = gS.instancing,
          XS = this.indexKey(SS),
          xS = HS.inputs.retained;
        xS ? (xS.drawState = gS, xS.instancing = bS, xS.program = HS.program, xS.instance = HS.material, xS.indexData = XS, xS.unIndexed = tS.isUnIndexed, xS.indexBuffer = HS.indexBuffer, xS.gpuVersion = this.resources.gpuBuffersVersion) : HS.inputs.retained = {
          drawState: gS,
          instancing: bS,
          program: HS.program,
          instance: HS.material,
          indexData: XS,
          unIndexed: tS.isUnIndexed,
          indexBuffer: HS.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(SS, HS, gS, tS) {
        const bS = HS.owner,
          XS = JX(HS);
        if (!XS) return null;
        const xS = XS.getClassName();
        let NS = null;
        if (function(SS) {
            return "LinesMesh" === SS.getClassName()
          }(bS)) {
          if (! function(SS) {
              return "ShaderMaterial" === SS.getClassName() && "color" === SS.shaderPath
            }(XS)) return this.warnOnce(`lines:${xS}`, `A LinesMesh with a ${xS} is not drawn yet (${XS.name})`), null;
          NS = bS
        } else if ("StandardMaterial" !== xS && "LiteMaterial" !== xS) return this.warnOnce(`class:${xS}`, `${xS} is not drawn yet (${XS.name})`), null;
        const qS = HX(bS),
          uS = this.instanceCount(bS, qS);
        if (uS <= 0) return null;
        const IS = NS ? this.lineProgramFor(bS, gS, qS) : this.drawDefines.programFor(SS, HS, XS, gS, qS);
        if (!IS || IS.failed) return null;
        const fS = NS ? null : this.drawDefines.drawStates.get(HS).model,
          kS = fS ? this.modelInstance(fS, IS) : this.materialInstance(bS, IS);
        let aS = !1;
        if (kS.frame !== this.frame && (NS ? nS(kS.ubo, NS) : aS = this.modelUniforms.refreshModelUniforms(SS, kS, kS.model, this.view)), !this.bindMaterial(kS, aS)) return null;
        const KS = this.meshInputs(HS, IS, qS);
        if (!KS || !this.instanceBuffersFit(bS.name, KS, uS)) return null;
        const jS = this.indexKey(HS);
        let GS = null;
        if (jS && !bS.isUnIndexed && (GS = this.resources.gpuBuffer(jS), !GS)) return null;
        const CS = this.renderStates.renderState(null !== fS && void 0 !== fS ? fS : XS, bS, tS, KS.state, NS ? "line-list" : "triangle-list"),
          PS = this.makeDraw(IS, KS, CS, kS, uS);
        return this.setRange(PS, HS, GS, jS), PS
      }
      indexKey(SS) {
        const HS = XX(SS);
        return HS ? this.resources.modelIndex(HS) : null
      }
      setRange(SS, HS, gS, tS) {
        gS && (SS.indexBuffer = gS, SS.indexFormat = this.resources.indexFormat(tS));
        const bS = 4 * HS.range + (gS ? 0 : 2);
        SS.unit = HS, SS.first = HS.parts.HG[bS], SS.count = HS.parts.HG[bS + 1]
      }
      makeDraw(SS, HS, gS, tS, bS) {
        HS.state !== gS && (HS.state = gS, HS.pipelineKey = `${SS.id}|${HS.layout.key}|${gS.key}`, HS.pipeline = null);
        const XS = HS.draw ??= {
          program: SS,
          inputs: HS,
          pipelineKey: "",
          layout: HS.layout,
          state: gS,
          material: tS,
          slotOffset: 0,
          vertexBuffers: HS.buffers,
          vertexOffsets: HS.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: bS,
          unit: null
        };
        return XS.program = SS, XS.pipelineKey = HS.pipelineKey, XS.state = gS, XS.material = tS, XS.vertexOffsets = HS.offsets, XS.indexBuffer = null, XS.instances = bS, XS
      }
      instanceCount(SS, HS) {
        switch (HS) {
          case "thin":
            return SS.forcedInstanceCount || SS.O4;
          case "instanced":
            return this.prepareInstances(SS);
          case "none":
            return 1
        }
      }
      prepareInstances(SS) {
        const HS = function(SS, HS) {
          const gS = HS._userInstancedBuffersStorage,
            tS = SS.batchUploads.get(HS);
          if (tS) {
            var bS;
            if (tS.layout === (null !== (bS = null === gS || void 0 === gS ? void 0 : gS.interleavedKinds) && void 0 !== bS ? bS : null)) return tS;
            tS.release()
          }
          return new FS(SS, HS, gS)
        }(this.resources, SS);
        return HS.frame !== this.frame && HS.pack(SS, this.modelMeshes.instanceBatch(SS), this.modelMeshes.worlds, this.frame), HS.count
      }
      programWithModel(SS, HS, gS) {
        const tS = this.modelSlot(SS),
          bS = qX(tS, SS, gS),
          XS = this.drawDefines.modelPackKind(SS),
          xS = XS ? function(SS, HS, gS, tS) {
            const bS = (0, JS.v)(SS, hS.j.name),
              XS = [];
            for (const {
                feature: qS,
                state: uS,
                active: IS
              }
              of SS.features) {
              var xS, NS;
              const SS = IS ? null === (xS = (NS = (0, IH.e)(qS)).bK) || void 0 === xS ? void 0 : xS.call(NS, uS) : void 0;
              SS && XS.push(SS)
            }
            return {
              kind: HS,
              atlas: null !== bS && void 0 !== bS && bS.active ? (0, hS.e)(bS.state) : null,
              defines: gS,
              ...qx(XS, tS)
            }
          }(SS, XS, HS, tS.fragmentCode) : null;
        if (xS && function(SS) {
            const HS = SS.defines;
            return (null === SS.atlas || !!HS.DIFFUSE && 1 === HS.DIFFUSEDIRECTUV) && !!HS.NORMAL && !HS.REFLECTION && !HS.EMISSIVEASILLUMINATION && !HS.LINKEMISSIVEWITHDIFFUSE
          }(xS)) {
          const gS = this.modelPackProgram(SS, HS, `${bS}#${XS}#sp${this.drawDefines.modelPackVariant}`, tS, xS);
          if (gS && !gS.failed) return gS
        }
        const NS = this.programs.get(bS);
        if (NS || this.unbuildable.has(bS)) return null !== NS && void 0 !== NS ? NS : null;
        let qS;
        try {
          qS = qb({
            defines: tX(HS),
            vertexCode: tS.vertexCode,
            fragmentCode: tS.fragmentCode,
            pluginUniforms: tS.pluginUniforms
          })
        } catch (uS) {
          return this.unbuildable.add(bS), this.warnOnce(`build:${bS}`, `could not build a program for ${SS.name}: ${String(uS)}`), null
        }
        return this.createProgram(bS, qS, "standard")
      }
      modelPackProgram(SS, HS, gS, tS, bS) {
        const XS = this.programs.get(gS);
        if (XS || this.unbuildable.has(gS)) return null !== XS && void 0 !== XS ? XS : null;
        const xS = this.drawDefines.modelPackVariant;
        let NS;
        try {
          const SS = function(SS) {
              return (0, dH.c)(SS, "model")
            }(xS),
            gS = Dx(SS, bS, tS.vertexCode, tS.fragmentCode);
          NS = Jx(qb({
            defines: tX(HS),
            ...gS,
            pluginUniforms: tS.pluginUniforms
          }), SS, bS, !!this.sunShadow)
        } catch (IS) {
          return this.unbuildable.add(gS), this.warnOnce(`build:${gS}`, `could not build a shader pack program for ${SS.name}, which draws without the pack: ${String(IS)}`), null
        }
        const qS = sX(xS, !!this.sunShadow),
          uS = {
            group: this.packInputs.bindGroupFor(null, qS),
            layout: UX(this.device, {
              depth: !1,
              sunShadow: qS
            })
          };
        return this.createProgram(gS, NS, function(SS) {
          return `standard-sp${SS}`
        }(xS), uS)
      }
      lineProgramFor(SS, HS, gS) {
        const tS = CS(SS, gS, HS, this.view);
        let bS = this.linePrograms.get(tS);
        var XS;
        return bS || (bS = this.createProgram(`lines#${tS}`, (XS = function(SS) {
          const HS = new Map;
          for (let gS = 0; gS < uS.length; gS++) SS & 1 << gS && HS.set(uS[gS], !0);
          return HS
        }(tS), kb({
          defines: XS,
          vertex: Ib,
          fragment: fb,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(tS, bS)), bS
      }
      createProgram(SS, HS, gS) {
        var tS;
        let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const XS = this.nextProgramId++,
          xS = `${gS}-${XS}`,
          NS = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          qS = [{
            binding: 0,
            visibility: NS,
            buffer: {
              type: "uniform"
            }
          }];
        for (const fS of HS.textures) qS.push({
          binding: fS.binding,
          visibility: NS,
          texture: {
            viewDimension: fS.dimension
          }
        }), qS.push({
          binding: fS.samplerBinding,
          visibility: NS,
          sampler: {}
        });
        const uS = this.device.createBindGroupLayout({
            label: xS,
            entries: qS
          }),
          IS = {
            key: SS,
            id: XS,
            kind: gS,
            program: HS,
            vertex: this.device.createShaderModule({
              label: `${xS}-vertex`,
              code: HS.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${xS}-fragment`,
              code: HS.fragment
            }),
            materialLayout: uS,
            pipelineLayout: this.device.createPipelineLayout({
              label: xS,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, uS, ...bS ? [bS.layout] : []]
            }),
            packGroup: null !== (tS = null === bS || void 0 === bS ? void 0 : bS.group) && void 0 !== tS ? tS : null,
            failed: !1
          };
        return this.programs.set(SS, IS), IS
      }
      writeFrameUniforms() {
        const SS = this.frameUniforms;
        jX(this.view, SS), this.device.queue.writeBuffer(this.frameBuffer, 0, SS)
      }
      materialInstance(SS, HS) {
        let gS = this.materials.get(SS);
        if (!gS) {
          const HS = new Map;
          this.materials.set(SS, HS), SS.bY.addOnce((() => {
            for (const SS of HS.values()) SS.released = !0, this.resources.destroyBuffer(SS.buffer);
            this.materials.delete(SS)
          })), gS = HS
        }
        let tS = gS.get(HS.key);
        return tS || (tS = this.newMaterialInstance(SS, null, HS), gS.set(HS.key, tS)), tS
      }
      modelInstance(SS, HS) {
        const gS = this.modelSlot(SS);
        let tS = gS.instances.get(HS.key);
        return tS || (tS = this.newMaterialInstance(SS, SS, HS), gS.instances.set(HS.key, tS)), tS
      }
      modelSlot(SS) {
        let HS = SS.gpu[dS.d.lite];
        return HS || (HS = new dx(this.resources), SS.gpu[dS.d.lite] = HS), HS
      }
      newMaterialInstance(SS, HS, gS) {
        const tS = gS.program.material.floats,
          bS = new Float32Array(tS),
          XS = new Map;
        return {
          owner: SS,
          model: HS,
          program: gS,
          data: bS,
          uploaded: new Float32Array(tS).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${SS.name}-uniforms`,
            size: Math.max(16, 4 * tS),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: XS,
          ubo: new KX(gS.program.material.slots, bS, XS),
          bindGroup: null,
          bound: new Array(2 * gS.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(SS) {
        var HS;
        const gS = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: Cb + nb,
            fragment: Cb + Pb,
            attributes: [],
            material: Gb,
            textures: []
          }, "earthSky"),
          tS = this.earthSkyUniforms ??= this.newMaterialInstance(Ox, null, gS);
        this.earthSkyFrom !== SS && (this.earthSkyFrom = SS, tS.data.fill(0)), db(tS.ubo, SS, this.view);
        const bS = this.vertexInputs(gS, Ox, "earthSky", gS, null);
        if (gS.failed || !bS || !this.bindMaterial(tS, !1)) return;
        const XS = null !== (HS = bS.state) && void 0 !== HS ? HS : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          xS = this.makeDraw(gS, bS, XS, tS, 1);
        xS.count = ab.length;
        const NS = cb(SS, this.view);
        xS.slotOffset = this.writeMeshSlot(NS, 1), this.lists.skyDraws.push(xS)
      }
      uploadIfChanged(SS) {
        const {
          data: HS,
          uploaded: gS
        } = SS;
        for (let tS = 0; tS < HS.length; tS++)
          if (HS[tS] !== gS[tS]) return gS.set(HS), void this.device.queue.writeBuffer(SS.buffer, 0, HS)
      }
      bindMaterial(SS, HS) {
        return SS.frame !== this.frame && (SS.frame = this.frame, HS || this.uploadIfChanged(SS), SS.bindable = this.bindTextures(SS)), SS.bindable
      }
      bindTextures(SS) {
        const {
          program: HS,
          bound: gS
        } = SS, tS = HS.program.textures;
        let bS = !SS.bindGroup,
          XS = !0;
        for (let xS = 0; xS < tS.length; xS++) {
          const HS = SS.textures.get(tS[xS].name),
            NS = HS ? this.resources.boundTexture(HS) : null;
          NS ? gS[2 * xS] === NS.view && gS[2 * xS + 1] === NS.sampler || (gS[2 * xS] = NS.view, gS[2 * xS + 1] = NS.sampler, bS = !0) : (HS || SS.ubo.expected.has(tS[xS].name) || this.warnOnce(`texture:${SS.owner.name}:${tS[xS].name}`, `${SS.owner.name} has no ${tS[xS].name}`), XS = !1)
        }
        if (!XS) return bS && (SS.bindGroup = null), !1;
        if (bS) {
          const bS = [{
            binding: 0,
            resource: {
              buffer: SS.buffer
            }
          }];
          for (let SS = 0; SS < tS.length; SS++) bS.push({
            binding: tS[SS].binding,
            resource: gS[2 * SS]
          }), bS.push({
            binding: tS[SS].samplerBinding,
            resource: gS[2 * SS + 1]
          });
          SS.bindGroup = this.device.createBindGroup({
            label: `${SS.owner.name}-material`,
            layout: HS.materialLayout,
            entries: bS
          })
        }
        return !0
      }
      writeMeshSlot(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, SS, HS, gS), this.slotCount++ * pt
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(SS, HS, gS, tS, bS) {
        let XS = this.inputs.get(SS);
        if (!XS || XS.program !== tS || !DX(HS, XS, this.resources, bS)) {
          var xS;
          if (XS = null !== (xS = this.vertexLayouts.resolveInputs(HS, gS, tS, bS)) && void 0 !== xS ? xS : void 0, !XS) return null;
          this.inputs.set(SS, XS)
        }
        return this.withGpuBuffers(XS)
      }
      meshInputs(SS, HS, gS) {
        const tS = this.inputs.get(SS);
        if (tS && this.inputsStamped(tS, SS, gS, HS)) return this.withGpuBuffers(tS);
        const bS = SS.owner,
          XS = XX(SS),
          xS = this.vertexInputs(SS, bS, bS.name, HS, XS);
        return xS && (xS.geometry = xX(SS), xS.instanceLayout = this.drawDefines.instanceLayout(bS, gS)), xS
      }
      inputsStamped(SS, HS, gS, tS) {
        return function(SS, HS, gS, tS) {
          return SS.program === gS && SS.geometry === xX(HS) && SS.instanceLayout === tS
        }(SS, HS, tS, this.drawDefines.instanceLayout(HS.owner, gS))
      }
      withGpuBuffers(SS) {
        return FX(SS, this.resources, this.zeroBuffer) ? SS : null
      }
      instanceBuffersFit(SS, HS, gS) {
        const tS = TX(HS, gS, this.resources, this.zeroBuffer);
        if (tS) {
          const bS = HS.ends[tS.index] - HS.offsets[tS.index] + HS.r_[tS.index];
          return this.warnOnce(`overrun:${SS}`, `${SS} draws ${gS} instances from a ${bS}-byte buffer (${tS.needed} needed)`), !1
        }
        return !0
      }
      createBinding(SS, HS, gS, tS) {
        const bS = `${HS._colorFormat}|${HS._depthStencilFormat}|${HS._depthCompare}|${HS._sampleCount}`,
          XS = xH(this.device, HS);
        if (SS === this.skyLastRenderable) {
          let gS = null;
          return {
            renderable: SS,
            pipeline: XS,
            draw: SS => gS ? this.drawSky(SS, HS, bS, gS) : 0,
            update: SS => {
              gS = SS
            }
          }
        }
        return {
          renderable: SS,
          pipeline: XS,
          draw: SS => (tS ? tS.execute(SS, HS, bS) : 0) + this.drawList(SS, HS, bS, gS)
        }
      }
      drawSky(SS, HS, gS, tS) {
        const bS = this.lists.skyDraws,
          XS = bS.length > 0;
        if (XS) {
          var xS;
          const gS = (null !== (xS = HS._depthCompare) && void 0 !== xS ? xS : gH).startsWith("greater") ? 0 : 1;
          SS.setViewport(0, 0, tS.targetWidth, tS.targetHeight, gS, gS)
        }
        const NS = this.drawList(SS, HS, gS, bS);
        return XS && SS.setViewport(0, 0, tS.targetWidth, tS.targetHeight, 0, 1), NS
      }
      drawList(SS, HS, gS, tS) {
        let bS = 0;
        const XS = this.binder;
        XS.reset();
        for (const xS of tS) {
          const tS = this.pipelineFor(xS, HS, gS);
          tS && (XS.bind(SS, xS, tS, this.meshSlots.bindGroup, xS.slotOffset), xS.indexBuffer ? SS.drawIndexed(xS.count, xS.instances, xS.first, 0, 0) : SS.draw(xS.count, xS.instances, xS.first, 0), bS++)
        }
        return bS
      }
      pipelineFor(SS, HS, gS) {
        var tS, bS;
        if (SS.program.failed) return null;
        const XS = SS.inputs;
        if (XS.pipeline && XS.pipelineTarget === gS) return XS.pipeline;
        const xS = `${SS.pipelineKey}|${gS}`,
          NS = this.pipelines.get(xS);
        if (void 0 !== NS) return NS && (XS.pipeline = NS, XS.pipelineTarget = gS), NS || null;
        this.pipelines.set(xS, null);
        const {
          program: qS,
          layout: uS,
          state: IS
        } = SS, fS = {
          label: `standard-${qS.id}`,
          layout: qS.pipelineLayout,
          vertex: {
            module: qS.vertex,
            entryPoint: "main",
            buffers: uS.buffers
          },
          fragment: mS({
            module: qS.fragment,
            entryPoint: "main"
          }, HS, IS.blend, IS.colourWrite),
          depthStencil: HS._depthStencilFormat ? {
            format: HS._depthStencilFormat,
            depthCompare: null !== (tS = null !== (bS = IS.depthCompare) && void 0 !== bS ? bS : HS._depthCompare) && void 0 !== tS ? tS : gH,
            depthWriteEnabled: IS.depthWrite,
            depthBias: IS.depthBias,
            depthBiasSlopeScale: IS.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: HS._sampleCount
          },
          primitive: {
            topology: IS.topology,
            frontFace: IS.frontFace,
            cullMode: IS.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(fS).then((SS => {
          this.compiling--, this.pipelines.set(xS, SS)
        }), (SS => {
          this.compiling--, this.reportFailure(qS, xS, SS)
        })), null
      }
      forEachSunShadowCaster(SS) {
        const HS = this.caster,
          gS = (gS, tS, bS) => {
            const XS = gS.unit && function(SS) {
              const HS = SS.material.model;
              return null !== HS && (HS.lifeform || HS.item) && HS.castsSunShadow && "triangle-list" === SS.state.topology
            }(gS) ? XX(gS.unit) : null;
            if (!XS) return;
            const xS = gS.unit.owner;
            switch (HS.geometry = XS, HS.skip = xS.noSunShadowVertices, HS.indexed = null !== gS.indexBuffer, HS.first = gS.first, HS.count = gS.count, HS.gk = tS, HS.worldAt = bS, HS.instances = null, HS.instanceCount = 1, HS.thin = !1, HX(xS)) {
              case "thin": {
                const SS = xS._thinInstanceDataStorage.matrixData;
                if (!SS) return;
                HS.instances = SS, HS.instanceCount = Math.min(gS.instances, SS.length / 16), HS.thin = !0;
                break
              }
              case "instanced": {
                const SS = this.resources.batchUploads.get(xS);
                if (!SS || SS.frame !== this.frame || !this.writeBatchCasters(SS)) return;
                break
              }
            }
            SS(HS)
          };
        for (const tS of this.lists.opaqueDraws) gS(tS, this.meshSlots.data, tS.slotOffset / 4);
        this.thinBundle.forEachDrawn(gS)
      }
      writeBatchCasters(SS) {
        const {
          caster: HS
        } = this, gS = SS.packedMatrices, tS = SS.count;
        HS.instances = gS, HS.instanceCount = tS;
        let bS = -1;
        for (let XS = 0; XS < tS; XS++) {
          const HS = Ex(SS.packedRowMesh(XS));
          HS && bS < 0 ? (this.casterWorlds.length < 16 * tS && (this.casterWorlds = new Float32Array(gS.length)), this.casterWorlds.set(gS.subarray(0, 16 * XS)), bS = XS) : !HS && bS >= 0 && (this.casterWorlds.set(gS.subarray(16 * XS, 16 * XS + 16), 16 * bS), bS++)
        }
        return bS >= 0 && (HS.instances = this.casterWorlds, HS.instanceCount = bS), HS.instanceCount > 0
      }
      async reportFailure(SS, HS, gS) {
        const tS = [];
        let bS = !0;
        for (const [XS, xS] of [
            ["vertex", SS.vertex],
            ["fragment", SS.fragment]
          ]) {
          const SS = await xS.getCompilationInfo();
          for (const HS of SS.messages) bS &&= "error" !== HS.type, tS.push(`${XS}:${HS.lineNum}:${HS.linePos} ${HS.type}: ${HS.message}`)
        }
        if (bS && !SS.packGroup) return this.pipelines.set(HS, !1), console.error(`Lite: pipeline ${HS} failed`, gS), void Tb("mesh", SS.kind, gS);
        SS.failed || (SS.failed = !0, console.error(`Lite: program ${SS.id} failed`, gS, tS.join("\n"), {
          program: SS.program,
          key: SS.key
        }), Tb("mesh", SS.kind, gS, bS ? null : tS[0]))
      }
    }

    function Ex(SS) {
      var HS, gS;
      const tS = null === (HS = SS.mY) || void 0 === HS || null === (gS = HS.aShaderPackItem) || void 0 === gS ? void 0 : gS.x;
      return void 0 !== tS && 0 !== (tS & qH.i)
    }
    var Lx = gS(41703),
      Yx = gS(41709),
      Ax = gS(41711),
      yx = gS(41670);
    const Vx = [0, 3, 1, 4, 2, 5];

    function ix(SS, HS, gS, tS, bS) {
      const XS = gS[0].width;
      try {
        return bS ? function(SS, HS, gS) {
          const tS = (0, yx.e)(SS, gS, gS, 6);
          for (let bS = 0; bS < 6; bS++)(0, yx.h)(SS, tS, bS, HS[Vx[bS]], {
            invertY: !1
          });
          return tS.texture
        }(SS, gS, XS) : function(SS, HS, gS, tS) {
          const bS = SS.createTexture({
            label: "sink-cube",
            size: {
              width: gS,
              height: gS,
              depthOrArrayLayers: 6
            },
            format: tS,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let XS = 0; XS < 6; XS++) SS.queue.copyExternalImageToTexture({
            source: HS[Vx[XS]]
          }, {
            texture: bS,
            origin: {
              x: 0,
              y: 0,
              z: XS
            }
          }, {
            width: gS,
            height: gS
          });
          return bS
        }(HS, gS, XS, 1 === tS ? "r8unorm" : "rgba8unorm")
      } finally {
        Wx(gS)
      }
    }

    function Wx(SS) {
      for (const HS of null !== SS && void 0 !== SS ? SS : []) null === HS || void 0 === HS || HS.close()
    }
    async function zx(SS) {
      const HS = [],
        gS = [];
      if (await Promise.all(SS.map(((SS, tS) => (HS[tS] = null, SS.then((SS => {
          HS[tS] = SS
        }), (SS => {
          gS.push(SS)
        })))))), gS.length > 0) throw Wx(HS), gS[0];
      return HS
    }
    class Ux {
      constructor(SS) {
        this.hf = SS, this.starts = [], this.lengths = [], this.used = 0, SS > 0 && (this.starts.push(0), this.lengths.push(SS))
      }
      allocate(SS) {
        const {
          starts: HS,
          lengths: gS
        } = this;
        for (let tS = 0; tS < HS.length; tS++) {
          if (gS[tS] < SS) continue;
          const bS = HS[tS];
          return gS[tS] === SS ? (HS.splice(tS, 1), gS.splice(tS, 1)) : (HS[tS] += SS, gS[tS] -= SS), this.used += SS, bS
        }
        return -1
      }
      free(SS, HS) {
        this.used -= HS;
        const gS = Math.min(SS + HS, this.hf);
        gS > SS && this.release(SS, gS - SS)
      }
      grow(SS) {
        const HS = this.hf;
        this.hf = SS, this.release(HS, SS - HS)
      }
      truncate(SS) {
        const {
          starts: HS,
          lengths: gS
        } = this;
        for (let tS = HS.length - 1; tS >= 0 && HS[tS] + gS[tS] > SS; tS--) HS[tS] >= SS ? (HS.splice(tS, 1), gS.splice(tS, 1)) : gS[tS] = SS - HS[tS];
        this.hf = SS
      }
      release(SS, HS) {
        const {
          starts: gS,
          lengths: tS
        } = this;
        let bS = 0,
          XS = gS.length;
        for (; bS < XS;) {
          const HS = bS + XS >> 1;
          gS[HS] < SS ? bS = HS + 1 : XS = HS
        }
        const xS = bS,
          NS = xS > 0 && gS[xS - 1] + tS[xS - 1] === SS,
          qS = xS < gS.length && SS + HS === gS[xS];
        NS && qS ? (tS[xS - 1] += HS + tS[xS], gS.splice(xS, 1), tS.splice(xS, 1)) : NS ? tS[xS - 1] += HS : qS ? (gS[xS] = SS, tS[xS] += HS) : (gS.splice(xS, 0, SS), tS.splice(xS, 0, HS))
      }
    }
    const px = 256;
    class sx {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = SS, this.onReplaced = HS, this.mergeGap = gS, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.HG = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const bS = Math.max(px, Math.ceil(tS / px) * px);
        this.bytes = new Uint8Array(bS), this.words = new Uint32Array(this.bytes.buffer), this.HG = new Ux(bS / px)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(SS) {
        return Math.max(1, Math.ceil(SS / px)) * px
      }
      allocate(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SS;
        const tS = sx.slotBytes(SS),
          bS = tS / px;
        let XS = this.HG.allocate(bS);
        XS < 0 && (this.grow(this.HG.hf + bS), XS = this.HG.allocate(bS));
        const xS = XS * px;
        return this.growTo(xS + Math.max(gS, tS)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, xS, xS + tS), HS && this.bytes.set(new Uint8Array(HS.buffer, HS.byteOffset, Math.min(HS.byteLength, tS)), xS), this.markDirty(xS, xS + tS), xS
      }
      growTo(SS) {
        const HS = Math.ceil(SS / px);
        HS > this.HG.hf && this.grow(HS)
      }
      free(SS, HS) {
        this.freed.push(SS, HS)
      }
      write(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (tS <= 0) return;
        tS <= 1024 && 0 === (3 & (SS | gS | tS)) ? this.copyWords(SS >> 2, HS.buffer, gS >> 2, tS >> 2) : this.bytes.set(new Uint8Array(HS.buffer, gS, tS), SS);
        let XS = SS + tS;
        if (bS) {
          const HS = SS + 4 * Math.ceil(tS / 4);
          this.bytes.fill(0, XS, HS), XS = HS
        }
        this.markDirty(SS, XS)
      }
      copyWords(SS, HS, gS, tS) {
        let bS = this.sourceWords.get(HS);
        bS || (bS = new Uint32Array(HS, 0, HS.byteLength >> 2), this.sourceWords.set(HS, bS));
        const XS = this.words;
        for (let xS = 0; xS < tS; xS++) XS[SS + xS] = bS[gS + xS]
      }
      move(SS, HS, gS) {
        this.bytes.copyWithin(HS, SS, SS + gS), this.markDirty(HS, HS + gS)
      }
      flush() {
        for (const HS of this.retired) this.onReplaced(HS), HS.destroy();
        this.retired.length = 0;
        const SS = this.dirtyStarts.length;
        if (SS > 0) {
          const {
            dirtyStarts: HS,
            dirtyEnds: gS,
            order: tS
          } = this;
          tS.length = SS;
          for (let NS = 0; NS < SS; NS++) tS[NS] = NS;
          SS > 1 && tS.sort(((SS, gS) => HS[SS] - HS[gS]));
          const bS = this.mergeGap;
          let XS = HS[tS[0]],
            xS = gS[tS[0]];
          for (let NS = 1; NS < SS; NS++) {
            const SS = tS[NS];
            HS[SS] - xS <= bS ? xS = Math.max(xS, gS[SS]) : (this.send(XS, xS), XS = HS[SS], xS = gS[SS])
          }
          this.send(XS, xS), HS.length = 0, gS.length = 0
        }
        this.holding = !1
      }
      uD() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const SS = this.freed;
        for (let HS = 0; HS < SS.length; HS += 2) this.HG.free(SS[HS] / px, SS[HS + 1] / px);
        SS.length = 0
      }
      send(SS, HS) {
        this.device.queue.writeBuffer(this.gpu, SS, this.bytes.buffer, SS, HS - SS);
        for (const gS of this.replaced) {
          const tS = Math.min(HS, gS.size);
          tS > SS && this.device.queue.writeBuffer(gS, SS, this.bytes.buffer, SS, tS - SS)
        }
      }
      markDirty(SS, HS) {
        SS &= -4, HS = HS + 3 & -4, this.holding ? (this.dirtyStarts.push(SS), this.dirtyEnds.push(HS)) : this.send(SS, HS)
      }
      grow(SS) {
        const HS = this.HG.hf,
          gS = Math.max(2 * HS, SS),
          tS = new Uint8Array(gS * px);
        tS.set(this.bytes);
        const bS = this.gpu;
        this.gpu = this.createGpu(tS.byteLength), this.bytes = tS, this.words = new Uint32Array(tS.buffer), this.HG.grow(gS), bS && (this.replaced.push(bS), this.onReplaced(bS)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, HS * px)
      }
      createGpu(SS) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: SS,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Bx(SS) {
      return Array.isArray(SS) ? new Float32Array(SS) : SS
    }

    function Mx(SS, HS, gS, tS, bS) {
      const XS = Eb(bS),
        xS = Math.min(bS, tS.byteLength);
      if (XS === xS && tS.byteOffset % 4 === 0) return void SS.queue.writeBuffer(HS, gS, tS.buffer, tS.byteOffset, XS);
      const NS = new Uint8Array(XS);
      NS.set(new Uint8Array(tS.buffer, tS.byteOffset, xS)), SS.queue.writeBuffer(HS, gS, NS)
    }

    function Fx(SS, HS, gS) {
      const tS = "linear",
        bS = "nearest";
      let XS = bS,
        xS = bS,
        NS = "nearest",
        qS = !HS;
      switch (SS) {
        case 11:
          XS = tS, xS = tS;
          break;
        case 3:
          XS = tS, xS = tS, NS = HS ? "linear" : "nearest";
          break;
        case 8:
          NS = HS ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          xS = tS;
          break;
        case 6:
          xS = tS, NS = HS ? "linear" : "nearest";
          break;
        case 7:
          xS = tS, qS = !0;
          break;
        case 9:
          XS = tS;
          break;
        case 10:
          XS = tS, NS = HS ? "linear" : "nearest";
          break;
        case 2:
          XS = tS, xS = tS, gS > 1 ? (NS = "linear", qS = !1) : qS = !0;
          break;
        case 12:
          XS = tS, qS = !0;
          break;
        default:
          qS = !0
      }
      return gS > 1 && !qS ? {
        magFilter: tS,
        minFilter: tS,
        mipmapFilter: "linear",
        maxAnisotropy: gS
      } : {
        magFilter: XS,
        minFilter: xS,
        mipmapFilter: NS,
        ...qS ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Rx(SS) {
      return 0 === SS ? "clamp-to-edge" : 2 === SS ? "mirror-repeat" : "repeat"
    }
    class Tx {
      constructor(SS, HS) {
        let {
          vertexArena: gS = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = SS, this.device = HS, this.buffers = new WeakMap, this.h_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = gS ? new sx(HS, (SS => {
          var HS;
          null === (HS = this.onDestroy) || void 0 === HS || HS.call(this, SS), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var SS;
        null === (SS = this.arena) || void 0 === SS || SS.flush()
      }
      endUploadFrame() {
        var SS;
        null === (SS = this.arena) || void 0 === SS || SS.uD()
      }
      vertexBufferCreated(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gS ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(SS);
        const bS = Bx(HS);
        SS.hf = bS.byteLength, this.buffers.set(SS, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: gS && null !== this.arena,
          pending: bS,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: tS
        })
      }
      vertexBufferUpdated(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        const bS = this.buffers.get(SS);
        if (!bS) return;
        const XS = Bx(HS),
          xS = void 0 === tS ? XS.byteLength : Math.min(tS, XS.byteLength);
        this.update(bS, XS, gS, xS)
      }
      vertexBufferFloatsUpdated(SS, HS, gS, tS) {
        const bS = this.buffers.get(SS);
        if (!bS) return;
        const XS = gS * Float32Array.BYTES_PER_ELEMENT,
          xS = (tS - gS) * Float32Array.BYTES_PER_ELEMENT;
        bS.slot >= 0 && xS > 0 && XS + xS <= bS.size ? this.writeSlot(bS, XS, HS, HS.byteOffset + XS, xS, !1) : bS.gpu && xS > 0 && XS + xS <= bS.gpu.size ? this.device.queue.writeBuffer(bS.gpu, XS, HS.buffer, HS.byteOffset + XS, xS) : this.update(bS, HS.subarray(gS, tS), XS, xS)
      }
      indexBufferCreated(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(SS);
        const tS = function(SS) {
          if (SS instanceof Uint16Array || SS instanceof Uint32Array) return SS;
          for (let HS = 0; HS < SS.length; HS++)
            if (SS[HS] >= 65535) return new Uint32Array(SS);
          return new Uint16Array(SS)
        }(HS);
        SS.is32Bits = 4 === tS.BYTES_PER_ELEMENT, SS.hf = tS.byteLength, this.buffers.set(SS, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: tS,
          ownsPending: tS !== HS,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: gS
        })
      }
      bufferDeleted(SS) {
        const HS = this.buffers.get(SS);
        null !== HS && void 0 !== HS && HS.gpu ? (this.destroyBuffer(HS.gpu), this.gpuBuffersVersion++) : HS && HS.slot >= 0 && (this.arena.free(HS.slot, HS.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(SS)
      }
      update(SS, HS, gS, tS) {
        if (SS.slot >= 0) this.updateSlot(SS, HS, gS, tS);
        else if (SS.gpu) {
          if (gS + Eb(tS) > SS.gpu.size) {
            const HS = this.device.createBuffer({
                label: SS.label,
                size: Eb(Math.max(2 * SS.gpu.size, gS + tS)),
                usage: SS.usage | GPUBufferUsage.COPY_SRC
              }),
              bS = this.device.createCommandEncoder();
            bS.copyBufferToBuffer(SS.gpu, 0, HS, 0, SS.gpu.size), this.device.queue.submit([bS.finish()]), this.destroyBuffer(SS.gpu), this.gpuBuffersVersion++, SS.gpu = HS
          }
          Mx(this.device, SS.gpu, gS, HS, tS)
        } else {
          const XS = new Uint8Array(HS.buffer, HS.byteOffset, tS),
            xS = SS.pending;
          if (xS && SS.ownsPending && gS + tS <= xS.byteLength) new Uint8Array(xS.buffer, xS.byteOffset, xS.byteLength).set(XS, gS);
          else if (xS && 0 === gS && tS === xS.byteLength && HS.byteLength === tS) SS.pending = HS, SS.ownsPending = !1;
          else {
            var bS;
            const HS = new Uint8Array(Math.max(null !== (bS = null === xS || void 0 === xS ? void 0 : xS.byteLength) && void 0 !== bS ? bS : 0, gS + tS));
            xS && HS.set(new Uint8Array(xS.buffer, xS.byteOffset, xS.byteLength)), HS.set(XS, gS), SS.pending = HS, SS.ownsPending = !0
          }
        }
      }
      updateSlot(SS, HS, gS, tS) {
        const bS = this.arena;
        gS + Eb(tS) > SS.size && (SS.size = Eb(Math.max(2 * SS.size, gS + tS)), bS.growTo(SS.slot + SS.size), this.gpuBuffersVersion++), 0 === tS ? this.writeSlot(SS, gS, lx, 0, 4, !1) : this.writeSlot(SS, gS, HS, HS.byteOffset, tS, !0)
      }
      writeSlot(SS, HS, gS, tS, bS, XS) {
        const xS = HS + (XS ? Eb(bS) : bS);
        xS > SS.slotBytes && this.moveSlot(SS, xS), this.arena.write(SS.slot + HS, gS, tS, bS, XS)
      }
      moveSlot(SS, HS) {
        const gS = this.arena,
          tS = sx.slotBytes(Math.max(HS, Math.min(2 * SS.slotBytes, SS.size))),
          bS = gS.allocate(tS, null, SS.size);
        gS.move(SS.slot, bS, SS.slotBytes), gS.free(SS.slot, SS.slotBytes), SS.slot = bS, SS.slotBytes = tS, this.gpuBuffersVersion++
      }
      cover(SS, HS) {
        const gS = this.buffers.get(SS);
        if (!gS || gS.slot < 0) return !1;
        const tS = Math.min(HS, gS.size);
        return !(tS <= gS.slotBytes) && (this.moveSlot(gS, tS), !0)
      }
      destroyBuffer(SS) {
        var HS;
        null === (HS = this.onDestroy) || void 0 === HS || HS.call(this, SS), SS.destroy()
      }
      gpuBuffer(SS) {
        const HS = this.buffers.get(SS);
        if (!HS) return null;
        if (HS.slot >= 0) return this.arena.buffer;
        if (HS.arena && HS.pending) {
          const SS = HS.pending,
            gS = this.arena;
          return HS.size = Eb(SS.byteLength), HS.slotBytes = sx.slotBytes(function(SS) {
            const HS = new Uint8Array(SS.buffer, SS.byteOffset, SS.byteLength);
            let gS = HS.length;
            if (SS.byteOffset % 4 === 0) {
              for (; gS % 4 !== 0 && 0 === HS[gS - 1];) gS--;
              if (gS % 4 === 0) {
                const HS = new Uint32Array(SS.buffer, SS.byteOffset, gS / 4);
                let tS = HS.length;
                for (; tS > 0 && 0 === HS[tS - 1];) tS--;
                gS = 4 * tS
              }
            }
            for (; gS > 0 && 0 === HS[gS - 1];) gS--;
            return gS
          }(SS)), HS.slot = gS.allocate(HS.slotBytes, SS, HS.size), HS.pending = null, gS.buffer
        }
        if (!HS.gpu && HS.pending) {
          const SS = HS.pending;
          HS.gpu = this.device.createBuffer({
            label: HS.label,
            size: Eb(SS.byteLength),
            usage: HS.usage
          }), Mx(this.device, HS.gpu, 0, SS, SS.byteLength), HS.pending = null
        }
        return HS.gpu
      }
      gpuOffset(SS) {
        var HS, gS;
        const tS = null !== (HS = null === (gS = this.buffers.get(SS)) || void 0 === gS ? void 0 : gS.slot) && void 0 !== HS ? HS : -1;
        return tS < 0 ? 0 : tS
      }
      gpuEnd(SS) {
        var HS, gS;
        const tS = this.buffers.get(SS);
        return tS ? tS.slot >= 0 ? tS.slot + tS.size : null !== (HS = null === (gS = tS.gpu) || void 0 === gS ? void 0 : gS.size) && void 0 !== HS ? HS : 0 : 0
      }
      vertexInput(SS, HS, gS) {
        var tS, bS, XS, xS;
        return null !== (tS = null !== (bS = gS && this.modelInput(gS, HS)) && void 0 !== bS ? bS : null === (XS = null !== (xS = this.h_.get(SS)) && void 0 !== xS ? xS : this.batchUploads.get(SS)) || void 0 === XS ? void 0 : XS.inputs[HS]) && void 0 !== tS ? tS : null
      }
      modelInput(SS, HS) {
        const gS = this.geometrySlot(SS);
        let tS = gS.inputs.get(HS);
        if (void 0 === tS) {
          const bS = SS.vertexAttributes.find((SS => SS.kind === HS));
          tS = bS ? new RS(this.modelKey(gS, bS.data, !1), bS.offset, bS.stride, bS.components, !1, bS.glType, bS.isNormalized) : null, gS.inputs.set(HS, tS)
        }
        return tS
      }
      modelIndex(SS) {
        return SS.indexData && this.modelKey(this.geometrySlot(SS), SS.indexData, !0)
      }
      geometrySlot(SS) {
        let HS = SS.gpu[dS.d.lite];
        if (!HS) {
          const gS = new Map,
            tS = () => {
              for (const SS of gS.values()) this.bufferDeleted(SS)
            },
            bS = SS => {
              const HS = gS.get(SS);
              HS && this.vertexBufferUpdated(HS, SS)
            };
          HS = {
            keys: gS,
            inputs: new Map,
            release: tS,
            updated: bS
          }, SS.gpu[dS.d.lite] = HS
        }
        return HS
      }
      modelKey(SS, HS, gS) {
        let tS = SS.keys.get(HS);
        if (!tS) {
          if (gS) {
            const SS = {
              hf: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(SS, HS, "model-indices"), tS = SS
          } else tS = {
            hf: 0
          }, this.vertexBufferCreated(tS, HS, !1, "model-vertices");
          SS.keys.set(HS, tS)
        }
        return tS
      }
      indexFormat(SS) {
        return SS.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(SS, HS) {
        --SS.refs > 0 || (this.releaseTexture(SS), Wx(SS.images), null !== HS && this.textures.delete(HS))
      }
      load(SS, HS) {
        const gS = HS.decoded = async function(SS) {
          if ("cube" === SS.kind) return async function(SS) {
            if (6 !== SS.length) throw new Error(`${SS.length} files where six faces were expected`);
            const HS = await zx(SS.map((SS => ib(SS)))),
              gS = HS[0].width;
            return zx(HS.map((async SS => {
              if (SS.width === gS && SS.height === gS) return SS;
              try {
                return await createImageBitmap(SS, {
                  ...yb,
                  resizeWidth: gS,
                  resizeHeight: gS
                })
              } finally {
                SS.close()
              }
            })))
          }(SS.files);
          if ("data" === SS.kind && SS.data) return [await createImageBitmap(new Blob([SS.data]), yb)];
          return [await ib(ox(SS))]
        }(SS.source).then((SS => {
          0 === HS.refs ? Wx(SS) : HS.images = SS
        }));
        this.track(HS, ox(SS.source), gS, (() => {
          HS.wanted && !HS.failed && HS.refs > 0 && this.upload(SS, HS)
        }))
      }
      canvasUpdated(SS, HS, gS) {
        const {
          state: tS
        } = this.textureSlot(SS);
        tS.dynamicSource = {
          invertY: HS,
          premultiplied: gS
        }, tS.dynamic && this.pushDynamic(SS.source, tS)
      }
      async atlasArray(SS, HS, gS) {
        const tS = await Ub(this.device, SS, HS, gS);
        if (!this.atlasBindings.has(tS)) {
          const SS = (0, Lx.d)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(tS, {
            view: tS.texture.createView({
              dimension: "2d-array"
            }),
            sampler: SS
          })
        }
        return tS
      }
      boundTexture(SS) {
        const HS = this.atlasBindings.get(SS);
        if (HS) return HS;
        const gS = SS;
        if (gS.released) return null;
        const tS = this.textureSlot(gS, !0),
          {
            state: bS
          } = tS;
        if (!bS.view && (bS.wanted = !0, bS.loading || bS.failed || this.upload(gS, bS), !bS.view)) return null;
        const XS = this.chosenSampler(gS, tS),
          xS = tS.bound;
        return xS && xS.view === bS.view && xS.sampler === XS ? xS : (tS.bound = {
          view: bS.view,
          sampler: XS
        }, tS.bound)
      }
      textureLoaded(SS) {
        var HS, gS;
        return null !== (HS = null === (gS = SS.gpu[dS.d.lite]) || void 0 === gS ? void 0 : gS.state.decoded) && void 0 !== HS ? HS : null
      }
      textureFailed(SS) {
        var HS;
        return !0 === (null === (HS = SS.gpu[dS.d.lite]) || void 0 === HS ? void 0 : HS.state.failed)
      }
      chosenSampler(SS, HS) {
        const {
          samplingMode: gS,
          wrapU: tS,
          wrapV: bS
        } = SS.sampler, XS = HS.state.hasMips, xS = function(SS, HS) {
          const {
            bilinear: gS,
            trilinear: tS
          } = dS.h;
          return !HS && SS !== gS || 11 !== SS && SS !== tS && SS !== gS ? 1 : 4
        }(gS, XS), NS = HS.sampler;
        if (NS && NS.samplingMode === gS && NS.hasMips === XS && NS.anisotropy === xS && NS.wrapU === tS && NS.wrapV === bS) return NS.sampler;
        const qS = this.samplerFor(gS, XS, xS, tS, bS);
        return HS.sampler = {
          samplingMode: gS,
          hasMips: XS,
          anisotropy: xS,
          wrapU: tS,
          wrapV: bS,
          sampler: qS
        }, qS
      }
      releaseTexture(SS) {
        var HS, gS;
        SS.view && (null === (gS = this.onDestroy) || void 0 === gS || gS.call(this, SS.view));
        null === (HS = SS.destroy) || void 0 === HS || HS.call(SS)
      }
      textureSlot(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = SS.gpu[dS.d.lite];
        if (gS) return gS;
        const tS = function(SS) {
          let {
            source: HS,
            sampler: gS
          } = SS;
          return "canvas" === HS.kind ? null : `${HS.kind}|${ox(HS)}|${gS.noMipmap}|${gS.samplingMode}|${gS.invertY}`
        }(SS);
        let bS = null === tS ? void 0 : this.textures.get(tS);
        bS || (bS = {
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
        }, null !== tS && (this.textures.set(tS, bS), this.load(SS, bS), HS && this.firstBindDecodes++)), bS.refs++;
        const XS = bS,
          xS = {
            state: bS,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(XS, tS)
            }
          };
        return SS.gpu[dS.d.lite] = xS, xS
      }
      samplerFor(SS, HS, gS, tS, bS) {
        const XS = `${SS}|${HS}|${gS}|${tS}|${bS}`;
        let xS = this.samplers.get(XS);
        if (!xS) {
          const NS = {
            ...Fx(SS, HS, gS),
            addressModeU: Rx(tS),
            addressModeV: Rx(bS)
          };
          xS = (0, Lx.d)(this.engine, NS), this.samplers.set(XS, xS)
        }
        return xS
      }
      upload(SS, HS) {
        const {
          source: gS,
          sampler: tS
        } = SS;
        HS.hasMips = !tS.noMipmap, "canvas" === gS.kind ? this.createDynamic(gS, HS) : "cube" === gS.kind ? this.uploadCube(HS, gS.luminance) : this.uploadImage(HS, !0 === tS.invertY, gS.url)
      }
      uploadImage(SS, HS, gS) {
        const [tS] = SS.images;
        SS.images = null;
        const bS = (0, Yx.c)(this.engine, tS, {
          mipMaps: SS.hasMips,
          invertY: HS,
          srgb: !1
        }).then((HS => {
          tS.close(), 0 !== SS.refs ? (SS.view = HS.view, SS.destroy = HS.texture.destroy.bind(HS.texture)) : HS.texture.destroy()
        }));
        this.track(SS, gS, bS)
      }
      track(SS, HS, gS, tS) {
        SS.loading = !0, this.pending++, gS.catch((gS => {
          SS.failed = !0, console.warn(`Lite: could not load texture ${Vb(HS)}`, gS)
        })).finally((() => {
          SS.loading = !1, this.pending--, null === tS || void 0 === tS || tS()
        }))
      }
      uploadCube(SS, HS) {
        const gS = SS.images;
        SS.images = null;
        const tS = ix(this.engine, this.device, gS, (0, dS.u)(HS), SS.hasMips);
        SS.view = tS.createView({
          dimension: "cube"
        }), SS.destroy = () => {
          tS.destroy()
        }
      }
      createDynamic(SS, HS) {
        const {
          canvas: gS
        } = SS, tS = (0, Ax.e)(this.engine, Math.max(1, gS.width), Math.max(1, gS.height), {
          mipMaps: HS.hasMips,
          srgb: !1
        });
        HS.dynamic = tS, HS.view = tS.view, HS.destroy = () => {
          tS.texture.destroy()
        }, this.pushDynamic(SS, HS)
      }
      pushDynamic(SS, HS) {
        const gS = HS.dynamicSource,
          tS = HS.dynamic,
          {
            canvas: bS
          } = SS;
        if (gS && tS && 0 !== bS.width && 0 !== bS.height) return bS.width !== tS.width || bS.height !== tS.height ? (this.releaseTexture(HS), HS.dynamic = null, HS.view = null, void this.createDynamic(SS, HS)) : void(0, Ax.f)(this.engine, tS, bS, {
          invertY: gS.invertY,
          premultiplyAlpha: gS.premultiplied
        })
      }
    }

    function ox(SS) {
      return "cube" === SS.kind ? SS.rootUrl : "canvas" === SS.kind ? "canvas" : SS.url
    }
    const lx = new Uint8Array(4);

    function mx(SS) {
      const HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      SS._colorAttachment.storeOp = SS._targetSignature._sampleCount > 1 ? HS : "store";
      const gS = SS._renderPassDescriptor.depthStencilAttachment;
      gS && (gS.depthStoreOp = HS, gS.stencilStoreOp && (gS.stencilStoreOp = HS))
    }
    var ex = gS(37791),
      rx = gS(37849),
      SN = gS(37492),
      HN = gS(39629);
    const gN = new Float64Array([1, 1, 1]),
      tN = new Float64Array([0, 1, 0]),
      bN = new Float64Array(4),
      XN = new Float32Array(16),
      xN = new Float64Array(3),
      NN = new Float64Array(4);

    function qN(SS, HS, gS) {
      SS.fov = HS.fov, SS.near = HS.near, SS.far = HS.far, SS.renderWidth = gS.renderWidth, SS.renderHeight = gS.renderHeight, (0, SN.u)(HS.holderRotation, 0, bN, 0), (0, SN.d)(gN, 0, bN, 0, HS.holderPosition, 0, XN);
      const tS = HS.aT;
      xN[0] = tS[0], xN[1] = tS[1], xN[2] = tS[2] + 1;
      const bS = SS.viewMatrix;
      (0, SN.n)(tS, xN, tN, bS), (0, SN.j)(bS, 0, bS), (0, SN.o)(bS, XN, 0, bS), (0, SN.j)(bS, 0, bS);
      const XS = SS.worldMatrix;
      (0, SN.j)(bS, 0, XS), SS.eye[0] = XS[12], SS.eye[1] = XS[13], SS.eye[2] = XS[14], NN[0] = SS.fov, NN[1] = SS.renderWidth / SS.renderHeight, NN[2] = SS.near, NN[3] = SS.far, (0, SN.s)(NN, SS.projectionMatrix), (0, SN.o)(bS, SS.projectionMatrix, 0, SS.viewProjectionMatrix), (0, HN.e)(SS.viewProjectionMatrix, SS.frustum)
    }

    function uN(SS, HS) {
      let gS = SS.frustumPlanes;
      gS || (gS = SS.frustumPlanes = Array.from({
        length: 6
      }, (() => new ex.e(0, 0, 0, 0))));
      for (let tS = 0; tS < 6; tS++) {
        const SS = gS[tS].normal;
        SS._x = HS[4 * tS], SS._y = HS[4 * tS + 1], SS._z = HS[4 * tS + 2], SS._isDirty = !0, gS[tS].d = HS[4 * tS + 3]
      }
    }

    function IN(SS, HS) {
      const gS = HS.clearColor;
      SS.clearColour[0] = gS.r, SS.clearColour[1] = gS.g, SS.clearColour[2] = gS.b, SS.clearColour[3] = gS.a;
      const tS = HS.ambientColor;
      SS.ambientColour[0] = tS.r, SS.ambientColour[1] = tS.g, SS.ambientColour[2] = tS.b, SS.animationRatio = HS.animationRatio, SS.frameId = HS.frameId, SS.version++
    }

    function fN(SS) {
      const HS = SS.model.view;
      return HS.animTick = (0, rx.e)(), HS.timeMs = performance.now(), IN(HS, SS.Bj), SS.model.update(HS.frameId), HS
    }

    function kN(SS) {
      const HS = SS.Bj,
        {
          view: gS,
          qT: tS
        } = SS.model;
      return qN(gS, tS, HS.AK()), HS.onBeforeRenderObservable.notifyObservers(HS), uN(HS, gS.frustum), HS.onBeforeCameraRenderObservable.notifyObservers(HS.activeCamera), fN(SS)
    }
    var aN = gS(37451),
      KN = gS(37566),
      jN = gS(37835);

    function GN(SS) {
      var HS, gS;
      const tS = (0, JS.cb)(SS);
      if (!tS || tS.diffuseTexture && (0, jN.k)(SS)) return null;
      const bS = null === (HS = (0, JS.v)(tS, hS.j.name)) || void 0 === HS ? void 0 : HS.state,
        XS = null === (gS = (0, JS.v)(tS, oX.c.name)) || void 0 === gS ? void 0 : gS.state,
        xS = new Float32Array(16);
      return function(SS, HS, gS, tS) {
        var bS, XS;
        const xS = kt;
        tS.set(SS.diffuseColor, xS.diffuse), tS[xS.diffuse + 3] = SS.alpha, tS.set(SS.ambientColor, xS.ambientAndCutoff), tS[xS.ambientAndCutoff + 3] = SS.alphaCutOff, tS.set(SS.emissiveColor, xS.emissiveAndLevel), tS[xS.emissiveAndLevel + 3] = null !== (bS = null === (XS = SS.diffuseTexture) || void 0 === XS ? void 0 : XS.level) && void 0 !== bS ? bS : 1, null !== HS && void 0 !== HS && HS.animDataPerTex ? (tS[xS.anim + 1] = rx.c, tS[xS.anim + 2] = HS.animDataPerTex.length / 3 - 1) : gS && (tS[xS.anim + 1] = gS.numAnimStates, tS[xS.anim + 2] = gS.ticksPerAnimState)
      }(tS, bS, XS, xS), {
        model: tS,
        atlas: bS,
        texture: bS ? "atlas" : tS.diffuseTexture ? "single" : "none",
        animated: bS ? !!bS.animDataPerTex : !!XS,
        liquid: (0, jN.n)(SS),
        customRenderMat: (0, jN.k)(SS),
        uniformData: xS
      }
    }
    var CN = gS(3015);
    class nN {
      constructor(SS) {
        this.units = SS, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var SS;
        this.buffer.destroy(), null === (SS = this.twin) || void 0 === SS || SS.destroy()
      }
    }
    class PN {
      constructor(SS, HS) {
        this.arena = SS, this.HG = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.HG = new Ux(HS);
        const gS = new nN(HS);
        gS.buffer = this.createBuffer(gS, !1), this.backings.push(gS), this.refresh()
      }
      get hf() {
        return this.HG.hf
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
        let SS = 0;
        for (const HS of this.backings) SS += HS.units * (this.arena.unitBytes + (HS.twin ? this.arena.twinUnitBytes : 0));
        return SS
      }
      holds(SS) {
        return SS.start + SS.length <= this.usable
      }
      lost(SS) {
        return this.dropped || SS.start + SS.length > this.hf
      }
      write(SS, HS) {
        const {
          device: gS,
          unitBytes: tS
        } = this.arena;
        for (const bS of this.backings) {
          const XS = (bS.units - SS.start) * tS;
          XS > 0 && gS.queue.writeBuffer(bS.buffer, SS.start * tS, HS, 0, Math.min(HS.byteLength, XS))
        }
      }
      writeLight(SS, HS) {
        const {
          device: gS,
          twinUnitBytes: tS,
          verticesPerUnit: bS
        } = this.arena, {
          light: XS,
          count: xS
        } = this.arena.twinLight(HS, Math.min(HS.length, SS.length * bS));
        for (const NS of this.backings) {
          NS.twin || (NS.twin = this.createBuffer(NS, !0));
          const HS = (NS.units - SS.start) * bS;
          HS > 0 && gS.queue.writeBuffer(NS.twin, SS.start * tS, XS, 0, Math.min(xS, HS))
        }
      }
      grow(SS) {
        this.arena.assertNotDrawing();
        const {
          device: HS,
          unitBytes: gS,
          label: tS
        } = this.arena, bS = this.backings[this.backings.length - 1], XS = new nN(SS), xS = HS.createCommandEncoder({
          label: `${tS}-grow`
        });
        XS.buffer = this.createBuffer(XS, !1), xS.copyBufferToBuffer(bS.buffer, 0, XS.buffer, 0, bS.units * gS), bS.twin && (XS.twin = this.createBuffer(XS, !0), xS.copyBufferToBuffer(bS.twin, 0, XS.twin, 0, bS.units * this.arena.twinUnitBytes)), HS.queue.submit([xS.finish()]), this.backings.push(XS), this.HG.grow(SS)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const SS of this.backings) SS.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(SS, HS) {
        const {
          device: gS,
          unitBytes: tS,
          twinUnitBytes: bS,
          usage: XS,
          label: xS
        } = this.arena;
        gS.pushErrorScope("out-of-memory");
        const NS = gS.createBuffer({
          label: HS ? `${xS}-light` : xS,
          size: SS.units * (HS ? bS : tS),
          usage: (HS ? this.arena.twinUsage : XS) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, gS.popErrorScope().then((gS => {
          this.arena.awaitingVerdict--, this.settle(SS, HS, !gS, !0)
        }), (gS => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${xS} buffer, taken as failed: ${String(gS)}`), this.settle(SS, HS, !1, !1)
        })), NS
      }
      settle(SS, HS, gS, tS) {
        const bS = this.backings.indexOf(SS);
        if (!(this.dropped || bS < 0)) {
          if (!gS) {
            if (tS && this.arena.ranOutOfMemory(SS.units, SS.units * (HS ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === bS) return void this.drop();
            for (const SS of this.backings.splice(bS)) SS.destroy();
            return this.HG.truncate(this.backings[bS - 1].units), this.growable = !1, void this.promote()
          }
          HS ? SS.twinReady = !0 : (SS.bufferReady = !0, this.arena.allocatedBuffer(SS.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: SS
        } = this;
        let HS = 0;
        for (; HS + 1 < SS.length && SS[HS].ready && SS[HS + 1].ready;) HS++;
        for (const gS of SS.splice(0, HS)) gS.destroy();
        this.refresh()
      }
      refresh() {
        const SS = this.backings[0];
        this.buffer = SS.buffer, this.twin = SS.twinReady ? SS.twin : null, this.usable = !this.dropped && SS.bufferReady ? SS.units : 0
      }
    }
    class QN {
      constructor(SS, HS, gS, tS) {
        let {
          verticesPerUnit: bS = 1,
          twinUsage: XS = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = SS, this.unitBytes = HS, this.usage = gS, this.label = tS, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, uH.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), HS % 4 !== 0) throw new Error(`${tS}: ${HS}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = bS, this.twinUsage = XS, this.twinValueBytes = bS > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * bS
      }
      twinLight(SS, HS) {
        if (4 === this.twinValueBytes) return this.widened.length < HS && (this.widened = new Float32Array(Math.max(HS, 2 * this.widened.length))), this.widened.set(SS.subarray(0, HS)), {
          light: this.widened,
          count: HS
        };
        const gS = HS % this.verticesPerUnit;
        if (0 === gS) return {
          light: SS,
          count: HS
        };
        const tS = HS - gS + this.verticesPerUnit;
        return this.padded.length < tS && (this.padded = new Uint16Array(Math.max(tS, 2 * this.padded.length))), this.padded.set(SS.subarray(0, HS)), this.padded.fill(0, HS, tS), {
          light: this.padded,
          count: tS
        }
      }
      allocate(SS) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), SS > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const bS of this.pages) {
          const HS = bS.HG.allocate(SS);
          if (HS >= 0) return {
            page: bS,
            start: HS,
            length: SS
          }
        }
        const HS = this.pages[this.pages.length - 1];
        if (null !== HS && void 0 !== HS && HS.canGrow) {
          const gS = Math.min(this.ceiling, Math.max(2 * HS.hf, HS.hf + SS));
          if (gS - HS.hf >= SS) return HS.grow(gS), {
            page: HS,
            start: HS.HG.allocate(SS),
            length: SS
          }
        }
        HS && HS !== this.pages[0] && 0 === HS.HG.used && HS.drop();
        const gS = Math.floor(1048576 / this.unitBytes),
          tS = new PN(this, Math.max(SS, Math.min(this.ceiling, gS)));
        return this.pages.push(tS), {
          page: tS,
          start: tS.HG.allocate(SS),
          length: SS
        }
      }
      free(SS) {
        this.assertNotDrawing();
        const {
          page: HS
        } = SS;
        HS.HG.free(SS.start, SS.length), 0 === HS.HG.used && HS !== this.pages[0] && HS !== this.pages[this.pages.length - 1] && HS.drop()
      }
      remove(SS) {
        const HS = this.pages.indexOf(SS);
        HS >= 0 && this.pages.splice(HS, 1)
      }
      ranOutOfMemory(SS, HS) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${HS}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, SS), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, SS) / 2));
        const gS = performance.now();
        gS >= this.shortageUntil && (this.forgetFailedAt = gS + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = gS + 1e3)
      }
      allocatedBuffer(SS) {
        SS >= this.failed && (this.failed = 1 / 0);
        const HS = Math.min(2 * SS, Math.floor((SS + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, HS))
      }
      stats() {
        let SS = 0,
          HS = 0,
          gS = 0,
          tS = 0;
        for (const bS of this.pages) SS += bS.hf, HS += bS.HG.used, gS += bS.hasTwin ? bS.hf * this.twinUnitBytes : 0, tS += bS.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: SS * this.unitBytes,
          usedBytes: HS * this.unitBytes,
          twinBytes: gS,
          allocatedBytes: tS
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: SS,
          maxStorageBufferBindingSize: HS
        } = this.device.limits;
        let gS = Math.floor(Math.min(67108864, SS) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (gS = Math.min(gS, Math.floor(HS / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (gS = Math.min(gS, Math.floor(HS / this.twinUnitBytes))), gS
      }
    }
    const DN = 16383;

    function wN(SS, HS, gS, tS, bS) {
      let XS = 0;
      for (let xS = gS; xS < tS; xS += DN) SS.drawIndexed(6 * Math.min(DN, tS - xS), 1, 0, HS + 4 * xS, bS), XS++;
      return XS
    }
    class hN {
      constructor(SS, HS) {
        this.recordsGroup = HS, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const gS = ZH.f.strideWithoutAtlas;
        this.vertexArena = new QN(SS, gS, GPUBufferUsage.VERTEX, `terrain-vertices-${gS}`), this.quadArena = new QN(SS, KN.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const tS = (0, JH.f)(new Uint16Array(98298), DN);
        this.quadPattern = SS.createBuffer({
          label: "terrain-quad-pattern",
          size: tS.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), SS.queue.writeBuffer(this.quadPattern, 0, tS)
      }
      set(SS, HS) {
        const gS = HS.packedVertices,
          tS = gS ? this.quadArena.allocate(SS.faceCount) : this.vertexArena.allocate(SS.vertexCount);
        if (!tS) return !1;
        SS.vertices = tS;
        const bS = gS ? new Uint8Array(gS.buffer, gS.byteOffset, gS.byteLength) : new Uint8Array(HS.vertices);
        return tS.page.write(tS, bS), !0
      }
      setLight(SS, HS) {
        const {
          vertices: gS
        } = SS;
        gS && 0 !== HS.length && gS.page.live && (HS.length < SS.vertexCount ? gS.page.arena.warnOnce("shortLight", `a part's ${HS.length} light values are fewer than its ${SS.vertexCount} vertices, so its light is left as it was`) : (gS.page.writeLight(gS, HS), SS.lit = !0))
      }
      lightFullSky(SS, HS) {
        this.fullSky.length < HS && (this.fullSky = new Uint16Array(Math.max(HS, 4096)).fill(CN.i));
        for (const gS of SS) {
          const SS = gS.vertices;
          SS.page.live && (SS.page.writeLight(SS, this.fullSky), gS.lit = !0)
        }
      }
      backed(SS) {
        const {
          vertices: HS
        } = SS;
        return !!HS && HS.page.holds(HS)
      }
      lost(SS) {
        const {
          vertices: HS
        } = SS;
        return !!HS && HS.page.lost(HS)
      }
      release(SS) {
        SS.vertices && SS.vertices.page.arena.free(SS.vertices), SS.vertices = null, SS.lit = !1
      }
      setDrawing(SS) {
        this.forgetBound()
      }
      draw(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HS.faceCount;
        const XS = HS.vertices,
          xS = XS.page,
          NS = gS ? xS.twin : null;
        if (!xS.holds(XS) || gS && !NS) return 0;
        const {
          verticesPerUnit: qS
        } = xS.arena;
        let uS = XS.start * qS;
        this.boundPattern || (SS.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const IS = tS + bS;
        if (qS > 1) return xS.buffer === this.boundRecords && NS === this.boundRecordsLight || (SS.setBindGroup(1, this.recordsGroup(xS.buffer, NS)), this.boundRecords = xS.buffer, this.boundRecordsLight = NS), wN(SS, uS, tS, IS, HS.slot);
        xS.buffer !== this.boundVertices && (SS.setVertexBuffer(0, xS.buffer), this.boundVertices = xS.buffer), NS && NS !== this.boundLight && (SS.setVertexBuffer(1, NS), this.boundLight = NS);
        const fS = HS.faceCount;
        return IS <= fS ? wN(SS, uS, tS, IS, HS.slot) : wN(SS, uS, tS, fS, HS.slot) + wN(SS, uS, Math.max(tS, fS) - fS, IS - fS, HS.slot)
      }
      get buffersAwaitingVerdict() {
        let SS = 0;
        for (const HS of this.arenas()) SS += HS.awaitingVerdict;
        return SS
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class ZN {
      constructor(SS, HS, gS, tS) {
        this.device = SS, this.splitBefore = HS, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = SS.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const bS = SS.createShaderModule({
          label: "scene-depth-copy",
          code: (XS = gS._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${XS?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var XS;
        SS.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: bS,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: bS,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((SS => {
          this.pipeline = SS, this.building = !1
        }), (SS => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", SS)
        })), gS._executeWithTransmission = () => this.execute(gS, tS)
      }
      get compiling() {
        return this.building
      }
      setWanted(SS) {
        this.wanted = SS
      }
      setPlanes(SS, HS) {
        SS === this.near && HS === this.far || (this.near = SS, this.far = HS, this.unproject[0] = SS / (HS - SS), this.unproject[1] = HS * SS / (HS - SS), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var SS, HS;
        return null !== (SS = null === (HS = this.copy) || void 0 === HS ? void 0 : HS.view) && void 0 !== SS ? SS : null
      }
      execute(SS, HS) {
        var gS;
        null === (gS = this.retired) || void 0 === gS || gS.destroy(), this.retired = null;
        const tS = SH(HS),
          bS = SS._transparentBindings,
          XS = this.wanted && this.pipeline ? this.splitIndex(bS) : -1,
          xS = SS._colorAttachment,
          NS = xS.resolveTarget;
        XS >= 0 && (xS.resolveTarget = void 0, mx(SS, !0));
        let qS = tS.beginRenderPass(SS._renderPassDescriptor);
        qS.setBindGroup(0, SS._sceneBG);
        let uS = this.drawList(qS, HS, SS._opaqueBindings, 0, SS._opaqueBindings.length);
        if (uS += this.drawList(qS, HS, SS._directBindings, 0, SS._directBindings.length), uS += this.drawList(qS, HS, bS, 0, XS >= 0 ? XS : bS.length), qS.end(), XS < 0) return uS;
        mx(SS);
        const IS = SS._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: fS,
            stencilLoadOp: kS
          } = IS,
          aS = xS.loadOp;
        xS.resolveTarget = NS;
        try {
          this.copyDepth(tS, SS), xS.loadOp = "load", IS.depthLoadOp = "load", kS && (IS.stencilLoadOp = "load"), qS = tS.beginRenderPass(SS._renderPassDescriptor), qS.setBindGroup(0, SS._sceneBG), uS += this.drawList(qS, HS, bS, XS, bS.length), qS.end()
        } finally {
          xS.loadOp = aS, IS.depthLoadOp = fS, IS.stencilLoadOp = kS
        }
        return uS
      }
      splitIndex(SS) {
        for (let HS = 0; HS < SS.length; HS++)
          if (SS[HS].renderable === this.splitBefore) return HS;
        return -1
      }
      drawList(SS, HS, gS, tS, bS) {
        let XS = null,
          xS = 0;
        for (let NS = tS; NS < bS; NS++) {
          const tS = gS[NS],
            bS = tS.renderable.mesh;
          bS && !1 === bS.visible || (tS.pipeline !== XS && (SS.setPipeline(tS.pipeline), XS = tS.pipeline), xS += tS.draw(SS, HS))
        }
        return xS
      }
      copyDepth(SS, HS) {
        var gS, tS;
        const bS = (null !== (gS = HS._config.depth) && void 0 !== gS ? gS : HS._config.rt)._depthTexture,
          XS = (null === (tS = this.copy) || void 0 === tS ? void 0 : tS.source) === bS ? this.copy : this.remakeCopy(bS),
          xS = SS.beginRenderPass(XS.pass);
        xS.setPipeline(this.pipeline), xS.setBindGroup(0, XS.bindGroup), xS.draw(3), xS.end()
      }
      remakeCopy(SS) {
        var HS, gS;
        this.retired = null !== (HS = null === (gS = this.copy) || void 0 === gS ? void 0 : gS.texture) && void 0 !== HS ? HS : null;
        const tS = this.device.createTexture({
            label: "scene-depth",
            size: [SS.width, SS.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          bS = tS.createView(),
          XS = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: SS.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          xS = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: bS,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: SS,
          texture: tS,
          view: bS,
          bindGroup: XS,
          pass: xS
        }, this.copy
      }
    }
    const JN = "rgba8unorm";

    function ON(SS) {
      return SS ? 15 : 1
    }
    class dN {
      constructor(SS, HS, gS, tS) {
        this.device = SS, this.terrain = tS, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = HS._targetSignature._sampleCount > 1, this.cameraBuffer = SS.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = SS.createBindGroupLayout({
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
        const bS = SS.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = SS.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: bS,
          entries: []
        });
        const XS = SS.createShaderModule({
          label: "sun-shadow-mask",
          code: (xS = this.edge, `${(0,OH.A)()}${Wg({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${xS?Og:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${ON(xS)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${xS?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var xS;
        SS.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: SS.createPipelineLayout({
            bindGroupLayouts: [this.layout, bS, bS, UX(SS, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: XS,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: XS,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((SS => {
          this.pipeline = SS, this.building = !1
        }), (SS => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", SS)
        }));
        const NS = HS._executeWithTransmission;
        HS._executeWithTransmission = SS => this.execute(HS, gS, (() => NS ? NS(SS) : function(SS, HS) {
          const gS = SH(HS).beginRenderPass(SS._renderPassDescriptor);
          gS.setBindGroup(0, SS._sceneBG);
          let tS = cN(gS, HS, SS._opaqueBindings);
          return tS += cN(gS, HS, SS._directBindings), tS += cN(gS, HS, SS._transparentBindings), gS.end(), tS
        }(HS, gS)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var SS, HS;
        return null !== (SS = null === (HS = this.targets) || void 0 === HS ? void 0 : HS.maskView) && void 0 !== SS ? SS : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(SS) {
        ! function(SS, HS) {
          const gS = SS.worldMatrix,
            tS = SS.projectionMatrix,
            bS = 1 / tS[0],
            XS = 1 / tS[5],
            xS = SS.far * SS.near / (SS.far - SS.near);
          HS[0] = SS.eye[0], HS[1] = SS.eye[1], HS[2] = SS.eye[2], HS[3] = 2 ** -23 / xS, HS[4] = gS[0] * bS, HS[5] = gS[1] * bS, HS[6] = gS[2] * bS, HS[7] = xS, HS[8] = gS[4] * XS, HS[9] = gS[5] * XS, HS[10] = gS[6] * XS, HS[11] = SS.near / (SS.far - SS.near), HS[12] = gS[8], HS[13] = gS[9], HS[14] = gS[10], HS[15] = 0
        }(SS, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(SS, HS, gS) {
        if (this.retire(), !this.terrain.readsMask) return gS();
        const tS = this.targetsFor(SS),
          bS = SH(HS),
          XS = SS._renderPassDescriptor.depthStencilAttachment;
        this.edge || (tS.prepass.depthStencilAttachment.view = XS.view);
        const xS = this.terrain.drawPrepass(bS, tS.prepass, SS._sceneBG);
        if (0 === xS) return gS();
        if (this.trace(bS, tS), this.edge) return xS + 1 + gS();
        const {
          depthLoadOp: NS,
          stencilLoadOp: qS
        } = XS;
        XS.depthLoadOp = "load", qS && (XS.stencilLoadOp = "load");
        try {
          return xS + 1 + gS()
        } finally {
          XS.depthLoadOp = NS, XS.stencilLoadOp = qS
        }
      }
      trace(SS, HS) {
        const gS = this.terrain.sunShadowGroup(),
          tS = SS.beginRenderPass(HS.trace);
        this.pipeline && gS && (tS.setPipeline(this.pipeline), tS.setBindGroup(0, HS.bindGroup), tS.setBindGroup(1, this.empty), tS.setBindGroup(2, this.empty), tS.setBindGroup(3, gS), tS.draw(3)), tS.end()
      }
      retire() {
        const SS = this.retired;
        var HS;
        SS && (SS.mask.destroy(), SS.normals.destroy(), null === (HS = SS.depth) || void 0 === HS || HS.destroy(), this.retired = null)
      }
      targetsFor(SS) {
        var HS, gS;
        const tS = (null !== (HS = SS._config.depth) && void 0 !== HS ? HS : SS._config.rt)._depthTexture;
        return (null === (gS = this.targets) || void 0 === gS ? void 0 : gS.source) === tS ? this.targets : this.remake(SS, tS)
      }
      remake(SS, HS) {
        var gS;
        this.retired = this.targets;
        const tS = [HS.width, HS.height],
          bS = this.device.createTexture({
            label: "sun-shadow-mask",
            size: tS,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          XS = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: tS,
            format: JN,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          xS = null !== (gS = SS._targetSignature._depthStencilFormat) && void 0 !== gS ? gS : HS.format,
          NS = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: tS,
            format: xS,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          qS = SS._renderPassDescriptor.depthStencilAttachment,
          uS = xS.includes("stencil"),
          IS = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: XS.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: NS ? NS.createView() : qS.view,
              depthClearValue: qS.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...uS ? {
                stencilClearValue: qS.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          fS = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== NS && void 0 !== NS ? NS : HS).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: XS.createView()
            }]
          }),
          kS = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: bS.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [ON(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: HS,
          mask: bS,
          maskView: bS.createView(),
          normals: XS,
          depth: NS,
          bindGroup: fS,
          prepass: IS,
          trace: kS
        }, this.targets
      }
    }

    function cN(SS, HS, gS) {
      let tS = null,
        bS = 0;
      for (const XS of gS) {
        const gS = XS.renderable.mesh;
        gS && !1 === gS.visible || (XS.pipeline !== tS && (SS.setPipeline(XS.pipeline), tS = XS.pipeline), bS += XS.draw(SS, HS))
      }
      return bS
    }
    const vN = 6e4,
      EN = {
        status: "ok"
      },
      LN = {
        status: "skipped"
      };
    async function YN(SS, HS) {
      const {
        isCancelled: gS
      } = SS;
      if (gS()) return {
        status: "Hg"
      };
      const {
        target: tS
      } = HS;
      if (!tS) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const bS = [],
        XS = Promise.all(Array.from(new Set(SS.materials), (async gS => {
          bS.push(await async function(SS, HS, gS, tS) {
            const bS = {
              lighting: SS.lighting,
              dirLightCount: Math.min(SS.dirLightCount, 4),
              bK: SS.runtime
            };
            try {
              const XS = HS.material(tS);
              return XS && ut(HS.programKey(XS, !1, bS)) ? (await XS.ready, SS.isCancelled() ? EN : XS.bindGroupLayout ? await async function(SS, HS, gS, tS) {
                const {
                  device: bS
                } = SS;
                let XS, xS;
                bS.pushErrorScope("validation");
                try {
                  XS = SS.pipelineBuild(HS, gS, tS)
                } finally {
                  xS = bS.popErrorScope().catch((() => null))
                }
                const [NS, qS] = await Promise.all([xS, XS.built.then((() => null), (SS => null !== SS && void 0 !== SS ? SS : new Error("pipeline failed")))]);
                if (!NS && !qS) return EN;
                const uS = await AN(XS.module),
                  IS = uS.length > 0 ? uS.map((SS => `${XS.name} ${SS.lineNum}:${SS.linePos}: ${SS.message}`)).join("\n") : `${XS.name}: ${yN(null!==qS&&void 0!==qS?qS:NS)}`;
                return {
                  status: "failed",
                  material: HS.model.name,
                  message: IS
                }
              }(HS, XS, HS.programKey(XS, "none" !== XS.texture, bS), gS): (console.warn(`Shader pack: skipped the compile check for "${tS.name}", whose textures failed to load`), LN)) : EN
            } catch (XS) {
              return {
                status: "failed",
                material: tS.name,
                message: yN(XS)
              }
            }
          }(SS, HS, tS, gS))
        }))),
        xS = function(SS, HS) {
          let gS, tS, bS = !1;
          const XS = new Promise((XS => {
            var xS;
            gS = setTimeout((() => {
              XS("timeout")
            }), null !== (xS = HS.timeoutMs) && void 0 !== xS ? xS : vN), tS = setInterval((() => {
              HS.isCancelled() && XS("Hg")
            }), 50), SS.lost.then((() => {
              bS = !0, XS("lost")
            }))
          }));
          return {
            signal: XS,
            lost: () => bS,
            dispose: () => {
              clearTimeout(gS), clearInterval(tS)
            }
          }
        }(HS.device, SS);
      let NS;
      try {
        NS = await Promise.race([XS.then((() => "done")), xS.signal])
      } finally {
        xS.dispose()
      }
      if ("Hg" === NS || gS()) return {
        status: "Hg"
      };
      const qS = bS.find((SS => "failed" === SS.status));
      return qS && "lost" !== NS && !xS.lost() && await new Promise((SS => {
        setTimeout(SS, 0)
      })), "lost" === NS || xS.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : qS ? {
        status: "failed",
        failure: {
          material: qS.material,
          message: qS.message
        }
      } : "timeout" === NS ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(uS=SS.timeoutMs)&&void 0!==uS?uS:vN)/1e3} s`), {
        status: "skipped"
      }) : bS.some((SS => "skipped" === SS.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var uS
    }
    async function AN(SS) {
      if (!SS) return [];
      try {
        return (await SS.getCompilationInfo()).messages.filter((SS => "error" === SS.type))
      } catch {
        return []
      }
    }

    function yN(SS) {
      var HS;
      return null !== (HS = null === SS || void 0 === SS ? void 0 : SS.message) && void 0 !== HS ? HS : String(SS)
    }

    function VN(SS, HS, gS, tS) {
      ut(SS) ? AN(gS).then((SS => {
        const [gS] = SS;
        Tb("terrain", HS, tS, gS ? `${gS.lineNum}:${gS.linePos} error: ${gS.message}` : null)
      })) : Tb("terrain", HS, tS)
    }
    var iN = gS(37573),
      WN = gS(37586),
      zN = gS(37603),
      UN = gS(3004);

    function pN(SS, HS, gS, tS, bS) {
      const XS = Math.hypot(gS[0], gS[1], gS[2]);
      if (!(XS > 0)) return;
      const xS = [gS[0] / XS, gS[1] / XS, gS[2] / XS],
        NS = [Math.floor(HS[0]), Math.floor(HS[1]), Math.floor(HS[2])],
        qS = [0, 0, 0],
        uS = [1 / 0, 1 / 0, 1 / 0],
        IS = [1 / 0, 1 / 0, 1 / 0];
      for (let aS = 0; aS < 3; aS++) xS[aS] > 0 ? (qS[aS] = 1, uS[aS] = (NS[aS] + 1 - HS[aS]) / xS[aS], IS[aS] = 1 / xS[aS]) : xS[aS] < 0 && (qS[aS] = -1, uS[aS] = (NS[aS] - HS[aS]) / xS[aS], IS[aS] = -1 / xS[aS]);
      const {
        JK: fS
      } = SS;
      let kS = SS.zp(NS[0], NS[1], NS[2]);
      for (;;) {
        const HS = uS[0] < uS[1] ? uS[0] < uS[2] ? 0 : 2 : uS[1] < uS[2] ? 1 : 2;
        if (uS[HS] > tS) return;
        const gS = qS[HS] > 0 ? NS[HS] + 1 : NS[HS];
        NS[HS] += qS[HS], uS[HS] += IS[HS];
        const XS = SS.zp(NS[0], NS[1], NS[2]),
          xS = XS !== kS && !(SS.opaque[kS] && SS.opaque[XS]);
        if (xS) {
          const tS = [NS[0], NS[1], NS[2]];
          tS[HS] = gS;
          const XS = Math.floor(tS[0] / fS),
            xS = Math.floor(tS[1] / fS),
            qS = Math.floor(tS[2] / fS);
          !SS.isDrawn(XS, xS, qS) && SS.hasParts(XS, xS, qS) && bS.add(`${XS},${xS},${qS}`)
        }
        if (xS && SS.occluders[XS]) return;
        kS = XS
      }
    }

    function sN(SS, HS) {
      return SS.group - HS.group || SS.nearest - HS.nearest
    }
    class BN {
      constructor(SS, HS) {
        this.device = SS, this.WC = HS, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var SS;
        const HS = null !== (SS = this.free.pop()) && void 0 !== SS ? SS : this.next++;
        if (8 * HS >= this.data.length) {
          const SS = new Float32Array(2 * this.data.length);
          SS.set(this.data), this.data = SS, this.words = new Uint32Array(SS.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.WC()
        }
        return HS
      }
      release(SS) {
        this.free.push(SS)
      }
      set(SS, HS, gS, tS, bS) {
        const XS = 8 * SS + Qt;
        this.data[XS] = HS, this.data[XS + 1] = gS, this.data[XS + 2] = tS, this.setVisibility(SS, bS)
      }
      setVisibility(SS, HS) {
        this.data[8 * SS + Dt] = HS, this.markDirty(SS, SS)
      }
      setFaces(SS, HS, gS) {
        const tS = 8 * SS;
        this.words[tS + wt] = HS, this.words[tS + ht] = gS, this.markDirty(SS, SS)
      }
      markDirty(SS, HS) {
        this.dirtyMin = Math.min(this.dirtyMin, SS), this.dirtyMax = Math.max(this.dirtyMax, HS)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const MN = Pt,
      FN = !0;
    const RN = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: MN.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      TN = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class oN {
      constructor(SS) {
        this.device = SS, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(ft), this.dirLightUniforms = this.frameUniforms.subarray(It.dirLights, It.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, uH.d)(), this.faceGroups = !0, this.visibilityGraph = FN, this.visCull = FN, this.visCheck = !1, this.visCullMinDistance = zN.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new rN, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.bK = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new hN(SS, ((SS, HS) => this.recordsGroup(SS, HS))), this.slots = new BN(SS, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = HH(SS), this.frameLayout = SS.createBindGroupLayout({
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
        }), this.frameBuffer = SS.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = SS.createSampler({
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
          bind: (SS, HS) => this.createBinding(this.opaqueRenderable, HS, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (SS, HS) => this.createBinding(this.transparentRenderable, HS, !0)
        }
      }
      installSceneDepth(SS, HS) {
        this.sceneDepth = new ZN(this.device, this.transparentRenderable, SS, HS)
      }
      createFrameBindGroup() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== SS && void 0 !== SS ? SS : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== HS && void 0 !== HS ? HS : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(SS, HS) {
        const gS = null !== HS && void 0 !== HS ? HS : SS;
        let tS = this.recordsGroups.get(gS);
        return tS || (tS = this.createFrameBindGroup(SS, HS), this.recordsGroups.set(gS, tS)), tS
      }
      setChunkMesh(SS, HS, gS) {
        var tS;
        let bS = this.chunks.get(SS);
        bS ? this.geometry.release(bS) : (bS = {
          mesh: SS,
          slot: this.slots.allocate(),
          origin: [gS[0], gS[1], gS[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: SS.visibility,
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
        }, this.chunks.set(SS, bS), this.writeSlot(bS)), bS.material = SS.material ? this.materialFor(SS.material) : null, bS.packed = !!HS.packedVertices, bS.vertexCount = (0, KN.e)(HS), bS.faceCount = bS.vertexCount / 4;
        const XS = null !== (tS = HS.faceGroups) && void 0 !== tS ? tS : null;
        if (bS.faceGroups = XS, XS) {
          const SS = iN.s;
          bS.planePX = XS[SS], bS.planeNX = XS[SS + 1], bS.planePY = XS[SS + 2], bS.planeNY = XS[SS + 3], bS.planePZ = XS[SS + 4], bS.planeNZ = XS[SS + 5]
        }
        this.drawWhole(bS), 0 !== bS.faceCount && (this.geometry.set(bS, HS) ? (bS.packed && this.slots.setFaces(bS.slot, bS.vertices.start + bS.faceCount, bS.faceCount), HS.kK && this.setChunkMeshLight(SS, HS.kK)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${bS.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(SS, HS) {
        const gS = this.chunks.get(SS);
        gS && this.geometry.setLight(gS, HS)
      }
      drawStats() {
        let SS = this.transparent.length;
        for (const HS of this.opaqueBatches) SS += HS.meshes.length;
        return {
          drawn: SS,
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
      removeChunkMesh(SS) {
        const HS = this.chunks.get(SS);
        HS && (this.geometry.release(HS), this.slots.release(HS.slot), this.chunks.delete(SS))
      }
      remeshLost(SS, HS) {
        this.geometry.release(HS), HS.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** HS.lostRemeshes++);
        const gS = SS.gk,
          [tS, bS, XS] = gS.RtS(HS.origin[0], HS.origin[1], HS.origin[2]),
          xS = gS.Pj.Qj(tS, bS, XS);
        xS && (xS.Cj = !0, xS.wj = !0, gS.nj(xS, !1))
      }
      chooseFaceRanges(SS, HS, gS) {
        const tS = this.faceRanges;
        SS.faceMask = gS, SS.rangeCount = (0, WN.j)(HS, gS, tS), SS.first0 = tS[0], SS.count0 = tS[1], SS.first1 = tS[2], SS.count1 = tS[3]
      }
      drawWhole(SS) {
        SS.faceMask = -1, SS.faceEpoch = -1, SS.rangeCount = 1, SS.first0 = 0, SS.count0 = SS.faceCount
      }
      writeSlot(SS) {
        const [HS, gS, tS] = this.originOffset;
        this.slots.set(SS.slot, SS.origin[0] - HS, SS.origin[1] - gS, SS.origin[2] - tS, SS.visibility)
      }
      materialFor(SS) {
        const HS = this.materials.get(SS);
        if (HS) return HS;
        const gS = GN(SS);
        if (!gS) return this.warnOnce(`material:${SS.name}`, `Lite terrain cannot draw material "${SS.name}"; its chunks are skipped.`), null;
        const {
          model: tS,
          atlas: bS,
          texture: XS,
          animated: xS,
          uniformData: NS
        } = gS, qS = {
          id: this.materials.size,
          model: tS,
          texture: XS,
          animated: xS,
          uniformData: NS,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${SS.name}`,
            size: NS.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: gS.liquid,
          customRenderMat: gS.customRenderMat,
          atlasCount: 0,
          Zm: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(SS, qS), this.device.queue.writeBuffer(qS.uniformBuffer, 0, NS), qS.ready = this.createMaterialBindGroup(qS, bS).catch((HS => {
          console.error(`Lite terrain failed to load the textures of material "${SS.name}"`, HS)
        })), qS
      }
      materialLayout(SS) {
        const HS = function(SS) {
            const HS = ["uniforms"];
            if ("atlas" === SS.texture) {
              SS.animated && HS.push("animData"), HS.push("sampler");
              for (let gS = 0; gS < SS.atlasCount; gS++) HS.push("textureArray")
            } else "single" === SS.texture && HS.push("sampler", "texture");
            return HS
          }(SS),
          gS = HS.join(",");
        let tS = this.materialLayouts.get(gS);
        if (!tS) {
          const SS = GPUShaderStage.FRAGMENT;
          tS = this.device.createBindGroupLayout({
            label: `terrain-material-${gS}`,
            entries: HS.map(((HS, gS) => {
              switch (HS) {
                case "uniforms":
                  return {
                    binding: gS, visibility: GPUShaderStage.VERTEX | SS, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: gS, visibility: GPUShaderStage.VERTEX | SS, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: gS, visibility: SS, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: gS, visibility: SS, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: gS, visibility: SS, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(gS, tS)
        }
        return tS
      }
      async createMaterialBindGroup(SS, HS) {
        const gS = [{
          buffer: SS.uniformBuffer
        }];
        if (HS) {
          const {
            urls: tS,
            pixels: bS,
            layerWidth: XS
          } = HS.sources, xS = await Promise.all(tS.map(((SS, HS) => {
            var gS;
            return Ub(this.device, SS, null !== (gS = null === bS || void 0 === bS ? void 0 : bS[HS]) && void 0 !== gS ? gS : null, XS)
          })));
          SS.atlasCount = xS.length, SS.Zm = xS[0].layerWidth, SS.atlasLayers = xS[0].layers, HS.animDataPerTex && gS.push({
            buffer: Lb(this.device, Float32Array.from(HS.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), gS.push(this.sampler);
          for (const SS of xS) gS.push(SS.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === SS.texture) {
          const {
            url: HS
          } = SS.model.diffuseTexture.source, {
            pixels: tS,
            width: bS,
            height: XS
          } = await Wb(HS);
          gS.push(this.sampler), gS.push(Ab(this.device, tS, bS, XS, 1, `terrain-${HS}`).createView({
            dimension: "2d"
          }))
        }
        const tS = this.materialLayout(this.programKey(SS, !1));
        SS.bindGroupLayout = tS, SS.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${SS.model.name}`,
          layout: tS,
          entries: gS.map(((SS, HS) => ({
            binding: HS,
            resource: SS
          })))
        })
      }
      programKey(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const tS = gS ? gS.lighting : this.lighting,
          bS = gS ? gS.bK : this.bK,
          XS = {
            texture: SS.texture,
            atlasCount: SS.atlasCount,
            Zm: SS.Zm,
            atlasLayers: SS.atlasLayers,
            animated: SS.animated,
            alphaTest: SS.model.transparencyMode === JS.n.alphaTest,
            lighting: tS,
            dirLightCount: gS ? gS.dirLightCount : this.dirLightCount,
            packed: HS
          };
        if (!bS) return XS;
        const xS = this.shaderPackFields(SS, bS),
          NS = "atlas" === SS.texture && SS.model.transparencyMode === JS.n.opaque && Xt(xS.packVariant);
        return {
          ...XS,
          ...xS,
          alphaTest: XS.alphaTest || NS
        }
      }
      shaderPackFields(SS, HS) {
        const gS = this.packVariant(SS, HS);
        return void 0 === gS ? tt : {
          packVariant: gS,
          liquid: SS.liquid
        }
      }
      packVariant(SS, HS) {
        return SS.customRenderMat ? void 0 : function(SS, HS) {
          const gS = SS ? SS.defineFor(HS ? "liquid" : "terrain") : 0;
          return 0 === gS ? void 0 : gS
        }(HS, SS.liquid)
      }
      isBlended(SS) {
        return SS.model.transparencyMode === JS.n.alphaBlend
      }
      shaderModule(SS, HS) {
        let gS = this.modules.get(SS);
        return gS || (gS = this.device.createShaderModule({
          label: HS,
          code: SS
        }), this.modules.set(SS, gS)), gS
      }
      pipelineFor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!SS.bindGroupLayout) return null;
        if (!tS) return this.pipelineOf(SS, HS, gS);
        const bS = this.pipelineIdNow(SS, HS, !0, gS),
          XS = this.pipelines.get(bS);
        if (XS) return XS;
        const xS = this.pipelineOf(SS, HS, gS);
        return xS && void 0 === XS && this.startPipeline(bS, SS, {
          ...this.programKey(SS, HS),
          resting: tS
        }, gS), xS
      }
      pipelineOf(SS, HS, gS) {
        const tS = this.pipelineIdNow(SS, HS, !1, gS),
          bS = this.pipelines.get(tS);
        return void 0 !== bS ? bS : (this.startPipeline(tS, SS, this.programKey(SS, HS), gS), null)
      }
      pipelineIdNow(SS, HS, gS, tS) {
        const {
          lighting: bS,
          dirLightCount: XS
        } = this, {
          transparencyMode: xS,
          backFaceCulling: NS
        } = SS.model, qS = this.packVariant(SS, this.bK), uS = (HS ? 2 : 0) + (gS ? 1 : 0), IS = SS.pipelineIds[uS];
        if (null !== IS && IS.lighting === bS && IS.dirLightCount === XS && IS.packVariant === qS && IS.transparencyMode === xS && IS.cull === NS && IS.atlasCount === SS.atlasCount && IS.Zm === SS.Zm && IS.atlasLayers === SS.atlasLayers && IS.colorFormat === tS._colorFormat && IS.depthStencilFormat === tS._depthStencilFormat && IS.sampleCount === tS._sampleCount) return IS.id;
        const fS = this.programKey(SS, HS),
          kS = this.pipelineId(SS, gS ? {
            ...fS,
            resting: gS
          } : fS, tS);
        return SS.pipelineIds[uS] = {
          id: kS,
          lighting: bS,
          dirLightCount: XS,
          packVariant: qS,
          transparencyMode: xS,
          cull: NS,
          atlasCount: SS.atlasCount,
          Zm: SS.Zm,
          atlasLayers: SS.atlasLayers,
          colorFormat: tS._colorFormat,
          depthStencilFormat: tS._depthStencilFormat,
          sampleCount: tS._sampleCount
        }, kS
      }
      pipelineId(SS, HS, gS) {
        return lN(HS, this.isBlended(SS), SS.model.backFaceCulling, gS)
      }
      pipelineBuild(SS, HS, gS) {
        var tS;
        const bS = this.pipelineId(SS, HS, gS);
        return null !== (tS = this.builds.get(bS)) && void 0 !== tS ? tS : this.startPipeline(bS, SS, HS, gS)
      }
      startPipeline(SS, HS, gS, tS) {
        var bS;
        this.pipelines.set(SS, null);
        const XS = vt(gS),
          xS = this.isBlended(HS),
          NS = this.shadowMask && tS._depthStencilFormat ? function(SS, HS, gS, tS) {
            if (void 0 === SS.packVariant || SS.liquid || HS) return "none";
            const bS = (0, dH.d)(SS.packVariant);
            return null === bS || void 0 === bS || !bS.sunShadow || !Vg(bS, gS) || bS.discards || SS.alphaTest && Xt(SS.packVariant) ? "none" : tS ? "edge" : "plain"
          }(gS, xS, !!this.sunShadow, tS._sampleCount > 1) : "none";
        let qS;
        try {
          qS = Et(gS, !!this.sunShadow, NS)
        } catch (GS) {
          if (!ut(gS)) throw GS;
          return this.failedPackBuild(SS, gS, XS, GS)
        }
        const uS = this.shaderModule(qS, XS),
          IS = [];
        gS.packed || (IS.push(function(SS, HS) {
          const gS = [{
            shaderLocation: MN.position,
            offset: ZH.f.RS,
            format: "float32x3"
          }, {
            shaderLocation: MN.normal,
            offset: ZH.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: MN.color,
            offset: ZH.f.colorOffset,
            format: "unorm8x4"
          }];
          return SS && gS.push({
            shaderLocation: MN.uv,
            offset: ZH.f.uvOffset,
            format: "float32x2"
          }), HS && gS.push({
            shaderLocation: MN.blockFlagWords,
            offset: ZH.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: ZH.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: gS
          }
        }("none" !== gS.texture, ut(gS))), gS.lighting && IS.push(RN));
        const fS = HS.model.backFaceCulling,
          kS = {
            label: XS,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, HS.bindGroupLayout, ...BX(this.device, gS, !!this.sunShadow, "none" !== NS)]
            }),
            vertex: {
              module: uS,
              entryPoint: "mainVertex",
              buffers: IS
            },
            fragment: mS({
              module: uS,
              entryPoint: "mainFragment"
            }, tS, xS ? TN : null),
            depthStencil: tS._depthStencilFormat ? {
              format: tS._depthStencilFormat,
              depthCompare: null !== (bS = tS._depthCompare) && void 0 !== bS ? bS : gH,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: tS._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: fS ? "back" : "none"
            }
          },
          aS = gS.resting ? 0 : 1;
        this.compiling += aS;
        const KS = "none" === NS ? this.device.createRenderPipelineAsync(kS) : this.startMaskPipelines(uS, kS, "edge" === NS);
        KS.then((HS => {
          this.compiling -= aS, this.pipelines.set(SS, HS)
        }), (SS => {
          this.compiling -= aS, console.error(`Lite terrain pipeline ${XS} failed`, SS), VN(gS, XS, uS, SS)
        }));
        const jS = {
          name: XS,
          module: uS,
          built: KS
        };
        return this.builds.set(SS, jS), jS
      }
      startMaskPipelines(SS, HS, gS) {
        const tS = HS.depthStencil,
          bS = this.device.createRenderPipelineAsync(gS ? HS : {
            ...HS,
            depthStencil: {
              ...tS,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          XS = this.device.createRenderPipelineAsync({
            ...HS,
            label: `${HS.label}-prepass`,
            fragment: {
              module: SS,
              entryPoint: "prepassFragment",
              targets: [{
                format: JN
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([bS, XS]).then((SS => {
          let [HS, gS] = SS;
          return this.prepassOf.set(HS, gS), this.maskPipelines++, HS
        }))
      }
      failedPackBuild(SS, HS, gS, tS) {
        console.error(`Lite terrain pipeline ${gS} failed`, tS), VN(HS, gS, null, tS);
        const bS = Promise.reject(tS);
        bS.catch((() => {}));
        const XS = {
          name: gS,
          module: null,
          built: bS
        };
        return this.builds.set(SS, XS), XS
      }
      checkShaderPack(SS) {
        return YN(SS, {
          device: this.device,
          target: this.target,
          material: SS => this.materialFor(SS),
          programKey: (SS, HS, gS) => this.programKey(SS, HS, gS),
          pipelineBuild: (SS, HS, gS) => this.pipelineBuild(SS, HS, gS)
        })
      }
      createBinding(SS, HS, gS) {
        return this.target = HS, {
          renderable: SS,
          pipeline: xH(this.device, HS),
          draw: SS => {
            this.geometry.setDrawing(!0);
            try {
              return gS ? this.drawTransparent(SS, HS) : this.drawOpaque(SS, HS)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(SS, HS) {
        var gS, tS, bS, XS;
        const {
          qk: xS
        } = SS;
        this.lighting = SS.Wj;
        const NS = (0, aN.x)(HS);
        this.dirLightCount = Math.min(NS, 4), this.bK = null !== (gS = xS.bK) && void 0 !== gS ? gS : null, NS > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(SS, HS), this.animateMaterials(HS.animTick);
        const qS = xS.Zk,
          uS = qS[0] !== this.originOffset[0] || qS[1] !== this.originOffset[1] || qS[2] !== this.originOffset[2];
        uS && (this.originOffset[0] = qS[0], this.originOffset[1] = qS[1], this.originOffset[2] = qS[2]);
        const IS = HS.eye;
        this.eye[0] = IS[0], this.eye[1] = IS[1], this.eye[2] = IS[2], this.writeShaderPackInputs();
        const fS = HS.projectionMatrix,
          kS = 0 === fS[15];
        let aS = 0;
        (uS || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: KS
        } = this;
        NH(this.transparentRenderable._worldCenter, HS, bH), this.resetBatches(kS), this.transparent.length = 0, this.unlit.length = 0;
        const jS = xS.gk.XSS,
          GS = jS / 2 * Math.sqrt(3);
        let CS = 0;
        const nS = !!this.bK && bt(this.bK.defineFor("liquid"));
        let PS = !1;
        const QS = null !== (tS = null === (bS = xS.jD) || void 0 === bS ? void 0 : bS.visibility) && void 0 !== tS ? tS : null,
          DS = this.visCull && kS && 0 === this.compiling && null !== QS && xS.gk.XtS[0] >= this.visCullMinDistance ? this.target : null,
          wS = this.visPassable,
          hS = this.visCandidates,
          ZS = this.visCandidateBatches;
        wS.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let JS = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let OS = 0;
        const dS = (SS, gS) => {
          if (!gS) return this.transparent.push(SS), void(OS += 2 * SS.faceCount);
          if (null !== SS.faceGroups && gS.faceCull) {
            if (0 === aS && (aS = (0, WN.b)(fS, HS.renderWidth, HS.renderHeight), aS !== this.faceFocalPx && (this.faceFocalPx = aS, KS = ++this.faceEpoch)), SS.faceEpoch !== KS) {
              SS.faceEpoch = KS;
              const HS = Math.sqrt(SS.distance) + GS,
                gS = (0, WN.g)(SS.planePX, SS.planeNX, SS.planePY, SS.planeNY, SS.planePZ, SS.planeNZ, this.eye[0] - (SS.origin[0] - this.originOffset[0]), this.eye[1] - (SS.origin[1] - this.originOffset[1]), this.eye[2] - (SS.origin[2] - this.originOffset[2]), (0, WN.f)(HS, aS));
              gS !== SS.faceMask && this.chooseFaceRanges(SS, SS.faceGroups, gS)
            }
            if (0 === SS.rangeCount) return
          } else - 1 !== SS.faceMask && this.drawWhole(SS);
          gS.meshes.push(SS), OS += 2 * ((SS.rangeCount > 0 ? SS.count0 : 0) + (SS.rangeCount > 1 ? SS.count1 : 0))
        };
        for (const vS of this.chunks.values()) {
          uS && this.writeSlot(vS);
          const SS = vS.mesh.visibility;
          SS !== vS.visibility && (vS.visibility = SS, this.slots.setVisibility(vS.slot, SS));
          const {
            material: gS
          } = vS;
          this.geometry.lost(vS) && performance.now() >= vS.lostRetryAt && this.remeshLost(xS, vS);
          const tS = !(null === gS || void 0 === gS || !gS.bindGroup) && this.geometry.backed(vS),
            bS = tS && this.lighting && !vS.vertices.page.twin;
          if (DS && (Number.isNaN(vS.key) && (vS.ci = Math.floor(vS.origin[0] / jS), vS.cj = Math.floor(vS.origin[1] / jS), vS.ck = Math.floor(vS.origin[2] / jS), vS.key = (0, UN.g)(vS.ci, vS.cj, vS.ck)), (!tS || SS < 1 || bS || !this.batchDraws(gS, vS.packed, DS)) && this.visSeeThrough(vS, DS) && wS.add(vS.key)), !tS) continue;
          bS || (vS.lostRemeshes = 0);
          const XS = vS.origin[0] - this.originOffset[0],
            NS = vS.origin[1] - this.originOffset[1],
            qS = vS.origin[2] - this.originOffset[2];
          if (!(0, HN.c)(HS.frustum, XS, NS, qS, jS)) continue;
          const IS = XS + jS / 2 - this.eye[0],
            fS = NS + jS / 2 - this.eye[1],
            aS = qS + jS / 2 - this.eye[2];
          if (vS.distance = IS * IS + fS * fS + aS * aS, this.lighting && !vS.lit && (CS = Math.max(CS, vS.vertexCount), this.unlit.push(vS)), bS) continue;
          const KS = this.isBlended(gS) ? null : this.batchFor(gS, vS.packed, vS.vertices.page, 1 === SS, kS);
          DS ? (hS[JS] = vS, ZS[JS++] = KS) : dS(vS, KS)
        }
        const cS = DS ? this.sweepVisibility(SS, HS, QS) : null;
        null === (XS = (0, LX.t)(xS)) || void 0 === XS || XS.update(HS.frustum, this.originOffset, jS, cS);
        for (let vS = 0; vS < JS; vS++) {
          const SS = hS[vS];
          !cS || cS.isDrawn(SS.ci, SS.cj, SS.ck) ? dS(SS, ZS[vS]) : (this.visCulledParts++, this.visCulledTriangles += 2 * SS.faceCount)
        }
        for (const vS of this.transparent) PS ||= nS && vS.material.liquid && !vS.material.customRenderMat;
        this.submittedTriangles = OS, cS && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(SS, HS, cS)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(PS) : PS && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && CS > 0 && this.geometry.lightFullSky(this.unlit, CS);
        for (const vS of this.opaqueBatches) this.chunkSorter.sort(vS.meshes, 1) || vS.meshes.sort(mN);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(eN)
      }
      sweepVisibility(SS, HS, gS) {
        const {
          gk: tS
        } = SS.qk, bS = tS.XSS, XS = this.visPassable, xS = this.eye[0] + this.originOffset[0], NS = this.eye[1] + this.originOffset[1], qS = this.eye[2] + this.originOffset[2];
        if (!gS.eyeClear(xS, NS, qS, HS.near, HS.projectionMatrix, tS)) return null;
        const [uS, IS] = tS.XtS, fS = gS.update(xS, NS, qS, bS, uS, IS, XS);
        return this.visSweeps = gS.sweeps, fS ? gS : null
      }
      visSeeThrough(SS, HS) {
        const {
          material: gS
        } = SS;
        return (!gS || !this.isBlended(gS)) && (SS.mesh.visibility < 1 || !(null !== gS && void 0 !== gS && gS.bindGroup) || SS.faceCount > 0 && (!this.geometry.backed(SS) || this.lighting && !SS.vertices.page.twin) || !this.batchDraws(gS, SS.packed, HS))
      }
      batchDraws(SS, HS, gS) {
        var tS;
        const bS = HS ? 2 : 0;
        if (SS === this.visDrawsMaterial && function(SS, HS) {
            return 0 !== (SS & 1 << HS)
          }(this.visDrawsBits, bS)) return 0 !== (this.visDrawsBits & 2 << bS);
        let XS = null !== (tS = this.visBatchDraws.get(SS)) && void 0 !== tS ? tS : 0;
        if (!(XS & 1 << bS)) {
          XS |= 1 << bS | (!!SS.bindGroupLayout && this.canDraw(SS, HS) && !!this.pipelines.get(this.pipelineIdNow(SS, HS, !1, gS)) ? 2 << bS : 0), this.visBatchDraws.set(SS, XS)
        }
        return this.visDrawsMaterial = SS, this.visDrawsBits = XS, 0 !== (XS & 2 << bS)
      }
      runVisCheck(SS, HS, gS) {
        const {
          qk: tS
        } = SS, {
          gk: bS
        } = tS, XS = bS.XSS, xS = new Set;
        for (const aS of this.chunks.values()) xS.add(aS.key);
        const NS = Qb.Matrix.FromArray(HS.viewProjectionMatrix).invert(),
          [qS, uS, IS] = this.originOffset,
          fS = new Qb.VK,
          kS = function(SS, HS, gS, tS) {
            const bS = new Set;
            for (let XS = 0; XS < 27; XS++)
              for (let xS = 0; xS < 48; xS++) {
                const NS = gS((xS + .5) / 48 * 2 - 1, (XS + .5) / 27 * 2 - 1);
                pN(SS, HS, [NS[0] - HS[0], NS[1] - HS[1], NS[2] - HS[2]], tS, bS)
              }
            return bS
          }({
            zp: (SS, HS, gS) => bS.zp(SS, HS, gS),
            occluders: gS.occluders,
            opaque: gS.opaque,
            JK: XS,
            isDrawn: (SS, HS, tS) => gS.isDrawn(SS, HS, tS),
            hasParts: (SS, HS, gS) => xS.has((0, UN.g)(SS, HS, gS))
          }, [this.eye[0] + qS, this.eye[1] + uS, this.eye[2] + IS], ((SS, HS) => (Qb.VK.TransformCoordinatesFromFloatsToRef(SS, HS, .5, NS, fS), [fS.x + qS, fS.y + uS, fS.z + IS])), (bS.XtS[0] + 1) * XS);
        this.visViolations = kS.size;
        for (const aS of kS) this.warnOnce(`vis:${aS}`, `Lite terrain cave culling skipped chunk ${aS}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var SS;
        null !== (SS = this.bK) && void 0 !== SS && SS.isRunning() && (this.shaderPackInputs ??= new MX(this.device, this.bK.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.bK, this.eye, this.lighting))
      }
      bindShaderPackInputs(SS, HS, gS) {
        var tS, bS, XS, xS;
        let NS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qS = this.packVariant(HS, gS);
        if (void 0 === qS) return;
        this.shaderPackInputs || (this.shaderPackInputs = new MX(this.device, gS.textureLayers(), this.sunShadow), this.shaderPackInputs.write(gS, this.eye, this.lighting));
        const uS = bt(qS) ? null !== (tS = null === (bS = this.sceneDepth) || void 0 === bS ? void 0 : bS.view) && void 0 !== tS ? tS : this.standIn() : null,
          IS = NS ? null !== (XS = null === (xS = this.shadowMask) || void 0 === xS ? void 0 : xS.view) && void 0 !== XS ? XS : this.standIn() : null;
        this.shaderPackInputs.bind(SS, uS, sX(qS, !!this.sunShadow), IS)
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
        var SS, HS;
        return null !== (SS = null === (HS = this.shaderPackInputs) || void 0 === HS ? void 0 : HS.bindGroupFor(null, !0)) && void 0 !== SS ? SS : null
      }
      resetBatches(SS) {
        const HS = this.opaqueBatches;
        let gS = 0;
        for (const tS of HS) tS.meshes.length > 0 && (tS.meshes.length = 0, tS.faceCull = this.batchFaceCull(tS.material, SS), HS[gS++] = tS);
        HS.length = gS
      }
      orderBatches() {
        const SS = this.opaqueBatches;
        for (let HS = 0; HS < SS.length; HS++) {
          const gS = SS[HS];
          gS.group = HS;
          for (let tS = 0; tS < HS; tS++) {
            const HS = SS[tS];
            if (HS.material === gS.material && HS.packed === gS.packed) {
              gS.group = HS.group;
              break
            }
          }
          gS.nearest = gS.meshes.length > 0 ? gS.meshes[0].distance : 1 / 0
        }
        SS.sort(sN)
      }
      batchFor(SS, HS, gS, tS, bS) {
        for (const xS of this.opaqueBatches)
          if (xS.material === SS && xS.packed === HS && xS.page === gS && xS.resting === tS) return xS;
        const XS = {
          material: SS,
          packed: HS,
          page: gS,
          resting: tS,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(SS, bS)
        };
        return this.opaqueBatches.push(XS), XS
      }
      batchFaceCull(SS, HS) {
        return !(!HS || !(0, iN.y)(SS.model)) && (!this.bK || ! function(SS) {
          var HS;
          return !(null === (HS = (0, dH.d)(SS)) || void 0 === HS || !HS.movesVertices)
        }(this.packVariant(SS, this.bK)))
      }
      writeFrameUniforms(SS, HS) {
        const gS = this.frameUniforms,
          tS = It;
        if ((0, aN.y)(SS, gS), gS[tS.fogInfos] = HS.fogEnabled ? HS.fogMode : 0, gS[tS.fogInfos + 1] = HS.fogStart, gS[tS.fogInfos + 2] = HS.fogEnd, gS[tS.fogInfos + 3] = HS.fogDensity, gS.set(HS.fogColour, tS.fogColour), gS[tS.outputHeight] = HS.renderHeight, gS.set(HS.ambientColour, tS.sceneAmbient), (0, aN.w)(HS, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const HS = (0, KN.g)(SS.tj, SS.vK, SS.EK);
          for (let SS = 0; SS < 4; SS++) gS[tS.aoLevels + SS] = HS[SS] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, gS)
      }
      animateMaterials(SS) {
        const HS = kt.anim;
        for (const gS of this.materials.values()) gS.animated && (gS.uniformData[HS] = SS, this.device.queue.writeBuffer(gS.uniformBuffer, 4 * HS, gS.uniformData, HS, 1))
      }
      canDraw(SS, HS) {
        return !("atlas" === SS.texture && !HS) || (this.warnOnce(`stride:${SS.id}`, `Lite terrain: material "${SS.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(SS, HS) {
        let gS = 0;
        SS.setBindGroup(1, this.frameBindGroup);
        for (const tS of this.opaqueBatches) {
          if (!tS.meshes.length || !this.canDraw(tS.material, tS.packed)) continue;
          const bS = this.pipelineFor(tS.material, tS.packed, HS, tS.resting);
          bS && (SS.setPipeline(bS), SS.setBindGroup(2, tS.material.bindGroup), this.bK && this.bindShaderPackInputs(SS, tS.material, this.bK, this.prepassOf.has(bS)), gS += this.drawBatch(SS, tS))
        }
        return gS
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(SS, HS, gS) {
        const tS = this.target,
          bS = this.bK;
        if (!tS || !bS || 0 === this.maskPipelines) return 0;
        let XS = 0,
          xS = null;
        this.geometry.setDrawing(!0);
        try {
          for (const NS of this.opaqueBatches) {
            if (!NS.meshes.length || !this.canDraw(NS.material, NS.packed)) continue;
            const qS = this.pipelineFor(NS.material, NS.packed, tS, NS.resting),
              uS = qS && this.prepassOf.get(qS);
            uS && (xS || (xS = SS.beginRenderPass(HS), xS.setBindGroup(0, gS), xS.setBindGroup(1, this.frameBindGroup)), xS.setPipeline(uS), xS.setBindGroup(2, NS.material.bindGroup), this.bindShaderPackInputs(xS, NS.material, bS, !0), XS += this.drawBatch(xS, NS))
          }
        } finally {
          var NS;
          null === (NS = xS) || void 0 === NS || NS.end(), this.geometry.setDrawing(!1)
        }
        return XS
      }
      drawBatch(SS, HS) {
        let gS = 0;
        for (const tS of HS.meshes) {
          const {
            rangeCount: HS
          } = tS;
          HS > 0 && (gS += this.geometry.draw(SS, tS, this.lighting, tS.first0, tS.count0), HS > 1 && (gS += this.geometry.draw(SS, tS, this.lighting, tS.first1, tS.count1)))
        }
        return gS
      }
      drawTransparent(SS, HS) {
        let gS = 0,
          tS = null,
          bS = null;
        SS.setBindGroup(1, this.frameBindGroup);
        for (const XS of this.transparent) {
          const xS = XS.material;
          if (!this.canDraw(xS, XS.packed)) continue;
          const NS = this.pipelineFor(xS, XS.packed, HS);
          NS && (NS !== tS && (SS.setPipeline(NS), tS = NS, this.bK && this.bindShaderPackInputs(SS, xS, this.bK)), xS !== bS && (SS.setBindGroup(2, xS.bindGroup), bS = xS), gS += this.geometry.draw(SS, XS, this.lighting))
        }
        return gS
      }
    }

    function lN(SS, HS, gS, tS) {
      return `${vt(SS)}|${SS.atlasLayers}|${SS.Zm}|${HS}|${gS}|${tS._colorFormat}|${tS._depthStencilFormat}|${tS._sampleCount}`
    }

    function mN(SS, HS) {
      return SS.distance - HS.distance
    }

    function eN(SS, HS) {
      return HS.distance - SS.distance
    }
    class rN {
      constructor() {
        this.left = []
      }
      sort(SS, HS) {
        for (let gS = 0; gS < SS.length; gS++) {
          const HS = SS[gS].distance;
          if (HS - HS !== 0) return !1
        }
        return this.sortRange(SS, 0, SS.length, HS), !0
      }
      sortRange(SS, HS, gS, tS) {
        if (gS - HS <= 16) {
          for (let bS = HS + 1; bS < gS; bS++) {
            const gS = SS[bS],
              XS = tS * gS.distance;
            let xS = bS - 1;
            for (; xS >= HS && tS * SS[xS].distance > XS; xS--) SS[xS + 1] = SS[xS];
            SS[xS + 1] = gS
          }
          return
        }
        const bS = HS + gS >>> 1;
        if (this.sortRange(SS, HS, bS, tS), this.sortRange(SS, bS, gS, tS), tS * SS[bS - 1].distance <= tS * SS[bS].distance) return;
        const {
          left: XS
        } = this, xS = bS - HS;
        for (let IS = 0; IS < xS; IS++) XS[IS] = SS[HS + IS];
        let NS = 0,
          qS = bS,
          uS = HS;
        for (; NS < xS && qS < gS;) SS[uS++] = tS * SS[qS].distance < tS * XS[NS].distance ? SS[qS++] : XS[NS++];
        for (; NS < xS;) SS[uS++] = XS[NS++]
      }
    }
    const Sq = Math.ceil(102);

    function Hq(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HS;
      const XS = Math.min(HS, gS),
        xS = new Uint32Array(Sg(tS));
      for (let NS = 0; NS < tS; NS++) {
        const HS = Math.floor(NS * XS / tS),
          gS = Math.max(HS + 1, Math.floor((NS + 1) * XS / tS));
        for (let qS = 0; qS < tS; qS++) {
          const uS = Math.floor(qS * XS / tS),
            IS = Math.max(uS + 1, Math.floor((qS + 1) * XS / tS));
          let fS = 0;
          for (let tS = HS; tS < gS; tS++)
            for (let HS = uS; HS < IS; HS++) SS[tS * bS + HS] >= Sq && fS++;
          if (2 * fS >= (gS - HS) * (IS - uS)) {
            const SS = qS + tS * NS;
            xS[SS >>> 5] |= 1 << (31 & SS)
          }
        }
      }
      return xS
    }

    function gq(SS) {
      return Math.max(1, Math.min(16, SS))
    }
    class tq {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = SS, this.loadTexture = HS, this.warn = gS, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(SS, HS) {
        return (SS.fW !== this.builtVersion || this.blockCaster.length !== HS) && (this.build(SS, HS), !0)
      }
      build(SS, HS) {
        this.builtVersion = SS.fW;
        const gS = new Uint16Array(HS),
          tS = new Map;
        for (let bS = 1; bS < HS; bS++) {
          const HS = this.classify(SS, bS, tS);
          if (null === HS || HS === oH) {
            gS[bS] = null === HS ? 0 : oH;
            continue
          }
          let XS = this.byKey.get(HS.key);
          void 0 === XS && (XS = this.allocate(HS), this.byKey.set(HS.key, XS)), gS[bS] = XS
        }
        this.blockCaster = gS, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(SS, HS) {
        const gS = SS.q_[HS];
        if ("function" !== typeof gS) return gS;
        try {
          return gS()
        } catch (tS) {
          return this.warnOnce(`Sun shadows: no caster option for block ${HS}: ${tS instanceof Error?tS.message:String(tS)}`), null
        }
      }
      classify(SS, HS, gS) {
        const tS = this.option(SS, HS);
        if ("none" === tS) return null;
        if (tS && tS.planes.length > 0) {
          const SS = tS.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(SS)}`,
            planes: SS
          }
        }
        if (SS.ka[HS]) return null;
        const bS = SS.Ka[HS] ? SS.DW(HS) : null;
        if (bS && bS.length >= 6) {
          const SS = function(SS) {
            const HS = new Uint32Array(16);
            for (let gS = 0; gS + 6 <= SS.length; gS += 6) {
              const tS = [0, 1, 2].map((HS => Math.max(0, Math.ceil(8 * SS[gS + HS] - .5)))),
                bS = [0, 1, 2].map((HS => Math.min(7, Math.floor(8 * SS[gS + HS + 3] - .5))));
              for (let SS = tS[2]; SS <= bS[2]; SS++)
                for (let gS = tS[1]; gS <= bS[1]; gS++)
                  for (let XS = tS[0]; XS <= bS[0]; XS++) {
                    const tS = XS + 8 * (gS + 8 * SS);
                    HS[tS >>> 5] |= 1 << (31 & tS)
                  }
            }
            return HS
          }(bS);
          return function(SS) {
            return SS.every((SS => 4294967295 === SS))
          }(SS) ? oH : SS.every((SS => 0 === SS)) ? null : {
            kind: "shape",
            key: `shape:${SS.join(",")}`,
            mask: SS
          }
        }
        if (SS.ZZ[HS] || !SS.bj[HS]) return null;
        const XS = [0, 1, 2, 3, 4, 5].map((tS => {
          const bS = SS.Xj[6 * HS + tS];
          let XS = gS.get(bS);
          return void 0 === XS && (XS = function(SS) {
            if (!SS || SS.jj) return null;
            const {
              Qm: HS,
              Zm: gS,
              Km: tS
            } = SS;
            if (!HS || !gS || !(gS > 0) || void 0 === tS || !(tS >= 0)) return null;
            const bS = HS[0],
              XS = gS * gS * 4;
            if (!bS || bS.byteLength < XS) return null;
            const xS = Math.floor(bS.byteLength / XS),
              NS = HS[Math.floor(tS / xS)];
            if (!NS) return null;
            const qS = new Uint8Array(NS.buffer, NS.byteOffset, NS.byteLength),
              uS = tS % xS * XS;
            if (uS + XS > qS.length) return null;
            const IS = new Uint8Array(gS * gS);
            let fS = !1;
            for (let kS = 0; kS < IS.length; kS++) IS[kS] = qS[uS + 4 * kS + 3], fS ||= IS[kS] < Sq;
            return fS ? {
              alpha: IS,
              width: gS
            } : null
          }(SS.Kj(bS)), gS.set(bS, XS)), XS
        }));
        if (XS.every((SS => null === SS))) return oH;
        const xS = gq(Math.max(...XS.map((SS => {
            var HS;
            return null !== (HS = null === SS || void 0 === SS ? void 0 : SS.width) && void 0 !== HS ? HS : 1
          })))),
          NS = new Uint32Array(Sg(xS)).fill(4294967295),
          qS = XS.map((SS => null === SS ? NS : Hq(SS.alpha, SS.width, SS.width, xS)));
        return {
          kind: "cutout",
          key: `cutout:${xS}:${qS.map((SS=>SS.join(","))).join("|")}`,
          size: xS,
          faces: qS
        }
      }
      allocate(SS) {
        if (this.nextCaster >= Hg) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const HS = this.nextCaster++;
        if (this.writeCaster(HS, lH, 0, 0, 0), "shape" === SS.kind) {
          const gS = this.allocateMask(SS.mask.length);
          gS >= 0 && (this.sink(gS, SS.mask), this.writeCaster(HS, mH, gS, 0, 8))
        } else if ("cutout" === SS.kind) {
          const gS = Sg(SS.size),
            tS = this.allocateMask(6 * gS);
          if (tS >= 0) {
            const bS = new Uint32Array(6 * gS);
            SS.faces.forEach(((SS, HS) => {
              bS.set(SS, HS * gS)
            })), this.sink(tS, bS), this.writeCaster(HS, rH, tS, 0, SS.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(HS, SS.planes).finally((() => {
          this.planesLoading--
        })));
        return HS
      }
      async loadPlanes(SS, HS) {
        const gS = await Promise.all(HS.map((SS => this.texture(SS.texture))));
        if (gS.some((SS => null === SS))) return;
        const tS = gS,
          bS = gq(Math.max(...tS.map((SS => Math.min(SS.width, SS.height))))),
          XS = Sg(bS),
          xS = this.allocateMask(HS.length * (4 + XS));
        if (xS < 0) return;
        const NS = new Uint32Array(HS.length * (4 + XS)),
          qS = 4 * HS.length;
        HS.forEach(((SS, HS) => {
          const gS = xS + qS + HS * XS;
          NS.set(function(SS, HS) {
            const [gS, tS] = SS.tangent, bS = Math.hypot(gS, tS) || 1, XS = gS / bS, xS = tS / bS, NS = SS.centre[0] * xS - SS.centre[1] * XS, qS = new Uint32Array(4);
            return new Float32Array(qS.buffer, 0, 3).set([XS, xS, NS]), qS[3] = HS, qS
          }(SS, gS), 4 * HS), NS.set(Hq(tS[HS].alpha, tS[HS].width, tS[HS].height, bS), qS + HS * XS)
        })), this.sink(xS, NS), this.writeCaster(SS, eH, xS, HS.length, bS)
      }
      texture(SS) {
        let HS = this.textures.get(SS);
        return HS || (HS = this.loadTexture(SS).catch((HS => (this.warn(`Sun shadows: no mask for ${SS}: ${HS instanceof Error?HS.message:String(HS)}`), null))), this.textures.set(SS, HS)), HS
      }
      allocateMask(SS) {
        if (this.nextMaskWord + SS > gg) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const HS = 32768 + this.nextMaskWord;
        return this.nextMaskWord += SS, HS
      }
      writeCaster(SS, HS, gS, tS, bS) {
        this.sink(0 + 4 * SS, Uint32Array.of(HS, gS, tS, bS))
      }
      warnOnce(SS) {
        this.warned.has(SS) || (this.warned.add(SS), this.warn(SS))
      }
    }
    var bq = gS(2981);

    function Xq(SS) {
      return !SS.Cj && !SS.pw && !SS.TK
    }

    function xq() {
      return {
        bricks: new Uint32Array(UH),
        cells: new Uint16Array(32768),
        special: new Uint8Array(WH)
      }
    }
    class Nq {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = SS, this.writeVoxels = HS, this.writePool = gS, this.warn = tS, this.eyeChunk = null, this.slotChunk = new Array(LH).fill(null), this.slotVersion = new Float64Array(LH).fill(-1), this.slotPool = new Array(LH).fill(null), this.starved = new Uint8Array(LH), this.queue = [], this.queued = new Uint8Array(LH), this.queueSorted = !0, this.freePool = new Uint32Array(tg), this.freeCount = tg, this.casterTable = null, this.warnedPool = !1, this.scratch = xq(), this.victimScratch = xq(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * LH), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let bS = 0; bS < tg; bS++) this.freePool[bS] = 65535 - bS
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return tg - this.freeCount
      }
      chunkAdded(SS) {
        if (null === this.eyeChunk || !this.inRadius(SS.i, SS.j, SS.k)) return;
        const HS = FH(SS.i, SS.j, SS.k);
        this.slotChunk[HS] = SS, this.slotVersion[HS] = -1, this.enqueue(HS)
      }
      update(SS, HS, gS) {
        const tS = this.casters.blockCaster;
        if (tS !== this.casterTable) {
          this.casterTable = tS;
          for (let SS = 0; SS < LH; SS++) this.slotVersion[SS] = -1, this.slotChunk[SS] && this.enqueue(SS)
        }
        const bS = Math.floor(SS[0] / 32),
          XS = Math.floor(SS[1] / 32),
          xS = Math.floor(SS[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== bS || this.eyeChunk[1] !== XS || this.eyeChunk[2] !== xS) && (this.eyeChunk = [bS, XS, xS], this.follow(HS), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let NS = 0; NS < LH; NS++) {
          const SS = this.slotChunk[NS];
          SS && (SS.Ow || SS.mK !== this.slotVersion[NS]) && this.enqueue(NS)
        }
        this.drain(gS), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(SS, HS) {
        this.records.set(HS, 4 * SS), this.windowTopStale = !0, this.writeVoxels(4 * SS, HS)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const SS = this.records;
        let HS = -1 / 0;
        for (let tS = 0; tS < SS.length; tS += 4) {
          const gS = 255 & SS[tS + 3];
          gS !== yH && gS !== VH || !this.inRadius(SS[tS], SS[tS + 1], SS[tS + 2]) || (HS = Math.max(HS, SS[tS + 1] * cH + (SS[tS + 3] >>> 8)))
        }
        const gS = HS === -1 / 0 ? 1 : HS + sH;
        gS !== this.windowTop[0] && (this.windowTop[0] = gS, this.writeVoxels(pH, this.windowTop))
      }
      follow(SS) {
        const HS = this.eyeChunk,
          [gS, tS, bS] = vH;
        for (let xS = -bS; xS <= bS; xS++)
          for (let bS = -tS; bS <= tS; bS++)
            for (let tS = -gS; tS <= gS; tS++) {
              var XS;
              const gS = HS[0] + tS,
                NS = HS[1] + bS,
                qS = HS[2] + xS,
                uS = FH(gS, NS, qS),
                IS = this.slotChunk[uS];
              if (IS && !IS.Ow && IS.i === gS && IS.j === NS && IS.k === qS) continue;
              const fS = null !== (XS = SS(gS, NS, qS)) && void 0 !== XS ? XS : null;
              IS && (IS.i !== gS || IS.j !== NS || IS.k !== qS) && this.slotPool[uS] && (this.release(uS), this.record.fill(0), this.writeRecord(uS, this.record)), this.slotChunk[uS] = fS, this.slotVersion[uS] = -1, (fS || IS) && this.enqueue(uS)
            }
      }
      requeueStarved() {
        for (let SS = 0; SS < LH; SS++) this.starved[SS] && this.slotChunk[SS] && this.enqueue(SS)
      }
      enqueue(SS) {
        this.queued[SS] || (this.queued[SS] = 1, this.queue.push(SS), this.queueSorted = !1)
      }
      drain(SS) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const SS = new Map;
          for (const HS of this.queue) SS.set(HS, this.slotDistance(HS));
          this.queue.sort(((HS, gS) => SS.get(gS) - SS.get(HS))), this.queueSorted = !0
        }
        const HS = performance.now();
        let gS = 0;
        const tS = [];
        for (; this.queue.length > 0 && (0 === gS || performance.now() - HS < SS);) {
          const SS = this.queue.pop(),
            HS = this.slotChunk[SS];
          !HS || HS.Ow || Xq(HS) ? (this.queued[SS] = 0, this.encodeSlot(SS), gS++) : tS.push(SS)
        }
        for (let bS = tS.length - 1; bS >= 0; bS--) this.queue.push(tS[bS])
      }
      slotDistance(SS) {
        const HS = this.slotChunk[SS],
          gS = this.eyeChunk;
        return HS ? Math.max(Math.abs(HS.i - gS[0]), Math.abs(HS.j - gS[1]), Math.abs(HS.k - gS[2])) : 0
      }
      inRadius(SS, HS, gS) {
        const tS = this.eyeChunk,
          [bS, XS, xS] = vH;
        return Math.abs(SS - tS[0]) <= bS && Math.abs(HS - tS[1]) <= XS && Math.abs(gS - tS[2]) <= xS
      }
      release(SS) {
        const HS = this.slotPool[SS];
        if (HS) {
          for (let SS = HS.length - 1; SS >= 0; SS--) this.freePool[this.freeCount++] = HS[SS];
          this.slotPool[SS] = null
        }
      }
      encodeSlot(SS) {
        var HS, gS, tS, bS, XS;
        let xS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          NS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const qS = null !== (HS = null === (gS = this.slotPool[SS]) || void 0 === gS ? void 0 : gS.length) && void 0 !== HS ? HS : 0;
        this.release(SS), this.starved[SS] = 0;
        const uS = this.slotChunk[SS],
          IS = this.record;
        if (!uS || uS.Ow || !uS.Lk) return this.slotChunk[SS] = null, this.slotVersion[SS] = -1, IS.fill(0), this.writeRecord(SS, IS), void(qS > 0 && this.requeueStarved());
        this.slotVersion[SS] = uS.mK;
        const fS = this.encodeBricks(uS, SS, xS, NS);
        IS[0] = uS.i, IS[1] = uS.j, IS[2] = uS.k, IS[3] = fS, this.writeRecord(SS, IS), null === (tS = this.encoded) || void 0 === tS || tS.call(this, uS), NS && (null !== (bS = null === (XS = this.slotPool[SS]) || void 0 === XS ? void 0 : XS.length) && void 0 !== bS ? bS : 0) < qS && this.requeueStarved()
      }
      encodeBricks(SS, HS, gS, tS) {
        if (SS.KK) return AH;
        const bS = this.casters.blockCaster,
          {
            data: XS,
            stride: xS,
            offset: NS
          } = SS.Lk,
          [qS, uS, IS] = xS,
          fS = cH,
          {
            bricks: kS,
            cells: aS,
            special: KS
          } = gS;
        kS.fill(0), KS.fill(0);
        let jS = 0,
          GS = 0,
          CS = 0;
        for (let nS = 0; nS < fS; nS++) {
          const HS = nS >> 2,
            gS = 3 & nS,
            tS = SS.Ya[nS],
            xS = tS === bq.i ? -1 : tS < bS.length ? bS[tS] : 0;
          if (0 !== xS)
            for (let SS = 0; SS < fS; SS++) {
              const tS = SS >> 2,
                PS = 3 & SS;
              let QS = NS + SS * qS + nS * uS;
              for (let SS = 0; SS < fS; SS++, QS += IS) {
                let NS = xS;
                if (NS < 0) {
                  const SS = XS[QS];
                  if (NS = SS < bS.length ? bS[SS] : 0, 0 === NS) continue
                }
                const qS = RH(tS, HS, SS >> 2),
                  uS = TH(PS, gS, 3 & SS);
                kS[3 * qS + (uS >>> 5)] |= 1 << (31 & uS), aS[qS * iH + uS] = NS, jS++, CS = nS, NS === oH ? GS++ : KS[qS] = 1
              }
            }
        }
        return 0 === jS ? AH : 32768 === GS ? yH | CS << 8 : (this.writePoolEntries(HS, gS, tS), this.writeVoxels(zH + HS * UH, kS), VH | CS << 8)
      }
      writePoolEntries(SS, HS, gS) {
        const {
          bricks: tS,
          cells: bS,
          special: XS
        } = HS, xS = this.entry;
        let NS = 0;
        for (let IS = 0; IS < WH; IS++) NS += XS[IS];
        if (0 === NS) return;
        gS && this.freeCount < NS && this.evictBeyond(SS, NS);
        const qS = new Uint32Array(gS ? Math.min(NS, this.freeCount) : 0);
        let uS = 0;
        for (let IS = 0; IS < WH; IS++) {
          if (!XS[IS]) continue;
          const gS = 3 * IS;
          if (uS === qS.length) {
            this.dropSpecials(HS, IS), this.starved[SS] = 1;
            continue
          }
          const NS = this.freePool[--this.freeCount];
          qS[uS++] = NS;
          for (let SS = 0; SS < iH; SS++) {
            const HS = tS[gS + (SS >>> 5)] >>> (31 & SS) & 1 ? bS[IS * iH + SS] : 0;
            1 & SS ? xS[SS >> 1] |= HS << 16 : xS[SS >> 1] = HS
          }
          tS[gS + 2] = NS + 1, this.writePool(bg + 32 * NS, xS)
        }
        qS.length > 0 && (this.slotPool[SS] = qS)
      }
      evictBeyond(SS, HS) {
        const gS = this.slotDistance(SS),
          tS = [];
        for (let bS = 0; bS < LH; bS++) bS !== SS && this.slotPool[bS] && this.slotDistance(bS) > gS && tS.push(bS);
        tS.sort(((SS, HS) => this.slotDistance(HS) - this.slotDistance(SS)));
        for (const bS of tS) {
          if (this.freeCount >= HS) return;
          const SS = this.slotChunk[bS];
          SS && !SS.Ow && SS.Lk && (SS.mK === this.slotVersion[bS] || Xq(SS)) && this.encodeSlot(bS, this.victimScratch, !1)
        }
      }
      dropSpecials(SS, HS) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const gS = 3 * HS;
        for (let tS = 0; tS < iH; tS++) SS.cells[HS * iH + tS] !== oH && (SS.bricks[gS + (tS >>> 5)] &= ~(1 << (31 & tS)))
      }
    }
    var qq = gS(37505);
    class uq {
      constructor(SS) {
        this.device = SS, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new jg, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.gk = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = SS.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = SS.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(SS, HS, gS) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: tS
        } = this;
        tS.Qa(SS, HS), gS.forEachSunShadowCaster((SS => {
          this.add(SS)
        })), tS.finish();
        const bS = 0 === tS.parts;
        if (bS && this.uploadedEmpty) return;
        this.uploadedEmpty = bS;
        const {
          queue: XS
        } = this.device, {
          words: xS
        } = tS;
        XS.writeBuffer(this.frameBuffer, 0, xS, 0, 16385), tS.refs > 0 && XS.writeBuffer(this.frameBuffer, 65540, xS, qg, tS.refs), bS || XS.writeBuffer(this.frameBuffer, 327684, xS, ug, tS.parts * Ng)
      }
      add(SS) {
        const HS = this.gridFor(SS);
        if (!HS) return;
        const {
          frame: gS
        } = this, {
          gk: tS,
          worldAt: bS,
          instances: XS,
          instanceCount: xS,
          thin: NS
        } = SS;
        if (XS)
          for (let qS = 0; qS < xS; qS++) NS ? (Cg(XS, 16 * qS, tS, bS, this.gk), gS.add(HS, this.gk)) : gS.add(HS, XS, 16 * qS);
        else gS.add(HS, tS, bS)
      }
      gridFor(SS) {
        let {
          geometry: HS,
          indexed: gS,
          first: tS,
          count: bS,
          skip: XS
        } = SS, xS = this.grids.get(HS);
        xS || (xS = new Map, this.grids.set(HS, xS));
        const NS = `${gS?tS:-1-tS}:${bS}:${null!==XS&&void 0!==XS?XS:""}`;
        let qS = xS.get(NS);
        if (void 0 !== qS || this.gridsFull) return qS;
        const uS = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = uS + 2;
        else if (uS > this.bakeDeadline) return;
        return qS = this.bake(HS, gS, tS, bS, XS), void 0 !== qS && xS.set(NS, qS), qS
      }
      bake(SS, HS, gS, tS, bS) {
        const XS = SS.vertexAttributes.find((SS => "position" === SS.kind)),
          xS = XS ? function(SS, HS, gS, tS) {
            let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const XS = SS => HS ? HS[gS + SS] : gS + SS,
              xS = SS => null !== bS && [0, 1, 2].some((HS => {
                const gS = XS(SS + HS);
                return gS >= bS[0] && gS < bS[1]
              })),
              NS = [1 / 0, 1 / 0, 1 / 0],
              qS = [-1 / 0, -1 / 0, -1 / 0];
            for (let nS = 0; nS + 2 < tS; nS += 3)
              if (!xS(nS))
                for (let HS = 0; HS < 3; HS++) {
                  const gS = XS(nS + HS);
                  for (let HS = 0; HS < 3; HS++) NS[HS] = Math.min(NS[HS], SS[3 * gS + HS]), qS[HS] = Math.max(qS[HS], SS[3 * gS + HS])
                }
            const uS = Math.max(qS[0] - NS[0], qS[1] - NS[1], qS[2] - NS[2]);
            if (!(uS > 0)) return null;
            const IS = uS / 64,
              fS = [0, 0, 0],
              kS = [0, 0, 0],
              aS = [0, 0, 0];
            for (let nS = 0; nS < 3; nS++) fS[nS] = Math.min(65, Math.ceil((qS[nS] - NS[nS]) / IS) + 1), kS[nS] = NS[nS] - IS / 2, aS[nS] = kS[nS] + fS[nS] * IS;
            const KS = new Uint32Array(Math.ceil(fS[0] * fS[1] * fS[2] / 32)),
              jS = new Float64Array(9),
              GS = [0, 0, 0],
              CS = [0, 0, 0];
            for (let nS = 0; nS + 2 < tS; nS += 3)
              if (!xS(nS)) {
                for (let HS = 0; HS < 3; HS++) {
                  const gS = XS(nS + HS);
                  for (let tS = 0; tS < 3; tS++) jS[3 * HS + tS] = SS[3 * gS + tS]
                }
                for (let SS = 0; SS < 3; SS++) {
                  const HS = Math.min(jS[SS], jS[3 + SS], jS[6 + SS]),
                    gS = Math.max(jS[SS], jS[3 + SS], jS[6 + SS]);
                  GS[SS] = Math.max(0, Math.floor((HS - kS[SS]) / IS - 1e-6)), CS[SS] = Math.min(fS[SS] - 1, Math.floor((gS - kS[SS]) / IS + 1e-6))
                }
                for (let SS = GS[2]; SS <= CS[2]; SS++)
                  for (let HS = GS[1]; HS <= CS[1]; HS++)
                    for (let gS = GS[0]; gS <= CS[0]; gS++)
                      if (ng(jS, kS[0] + (gS + .5) * IS, kS[1] + (HS + .5) * IS, kS[2] + (SS + .5) * IS, IS / 2)) {
                        const tS = gS + fS[0] * (HS + fS[1] * SS);
                        KS[tS >>> 5] |= 1 << (31 & tS)
                      }
              } return {
              words: KS,
              lo: kS,
              hi: aS,
              cell: IS,
              dims: fS
            }
          }((0, qq.k)(XS, SS.vertexCount), HS ? SS.indexData : null, gS, tS, bS) : null;
        if (!xS) return null;
        const {
          words: NS,
          ...qS
        } = xS;
        if (this.gridTop + NS.length > fg) return void(this.gridsFull = !0);
        const uS = this.gridTop;
        return this.gridTop += NS.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * uS, NS), {
          ...qS,
          at: uS
        }
      }
    }
    const Iq = Math.cos(1 * Math.PI / 180);

    function fq(SS, HS) {
      return SS[0] * HS[0] + SS[1] * HS[1] + SS[2] * HS[2] < Iq
    }
    async function kq(SS) {
      const {
        pixels: HS,
        width: gS,
        height: tS
      } = await Wb(SS), bS = new Uint8Array(gS * tS);
      for (let XS = 0; XS < bS.length; XS++) bS[XS] = HS[4 * XS + 3];
      return {
        width: gS,
        height: tS,
        alpha: bS
      }
    }
    class aq {
      constructor(SS, HS) {
        this.device = SS, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Qg.m), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = SS.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = SS.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * BH,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = SS.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [gS, tS, bS] = Qg.o;
        this.volume = SS.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: gS,
            height: tS,
            depthOrArrayLayers: bS
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = SS.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = SS.createBuffer({
          label: "sun-shadow-volume-work",
          size: Qg.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = HS ? new uq(SS) : null, this.entityStandIn = HS ? null : SS.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var SS, HS;
        const gS = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || gS.push("Lite sun shadow volume pipeline compiling");
        const tS = null !== (SS = null === (HS = this.casters) || void 0 === HS ? void 0 : HS.planesLoading) && void 0 !== SS ? SS : 0;
        return tS > 0 && gS.push(`${tS} Lite sun shadow plane casters loading their textures`), gS
      }
      entries() {
        var SS, HS, gS, tS;
        const bS = OH.s;
        return [{
          binding: bS.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: bS.Lk,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: bS.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: bS.volume,
          resource: this.volumeView
        }, {
          binding: bS.sampler,
          resource: this.volumeSampler
        }, {
          binding: bS.entities,
          resource: {
            buffer: null !== (SS = null === (HS = this.entities) || void 0 === HS ? void 0 : HS.frameBuffer) && void 0 !== SS ? SS : this.entityStandIn
          }
        }, {
          binding: bS.entityGrids,
          resource: {
            buffer: null !== (gS = null === (tS = this.entities) || void 0 === tS ? void 0 : tS.gridBuffer) && void 0 !== gS ? gS : this.entityStandIn
          }
        }]
      }
      prepare(SS, HS, gS) {
        var tS;
        this.entitiesThisFrame = !1;
        const bS = null !== (tS = null === gS || void 0 === gS ? void 0 : gS.sunShadowReach()) && void 0 !== tS ? tS : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!gS || !bS.sunShadow && !bS.airShadow) return void(this.volumeHolds = null);
        if (SS.gk.XSS !== cH) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${SS.gk.XSS}; everything is lit.`)));
        const XS = this.start(SS);
        this.casters.update(SS.Ia, SS.Ia.Ka.length);
        const xS = SS.Zk;
        for (let kS = 0; kS < 3; kS++) this.eye[kS] = HS[kS] + xS[kS];
        const NS = (0, Qg.w)(this.eye);
        this.staleNear = NS;
        const qS = SS.gk.Pj;
        XS.update(this.eye, ((SS, HS, gS) => qS.Qj(SS, HS, gS)), 1);
        const uS = (0, Qg.r)(gS.Z6()),
          IS = XS.eyeChunk,
          fS = this.uniformInts;
        for (let kS = 0; kS < 3; kS++) fS[kS] = IS[kS], fS[4 + kS] = NS[kS];
        this.entitiesThisFrame = null !== this.entities && bS.sunShadow, this.entitiesThisFrame && Kg(this.uniformFloats, 8, HS, uS), null !== this.volumeHolds && (this.castersWritten || fq(uS, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(NS, uS, IS)
      }
      markStale(SS) {
        const HS = this.staleNear,
          gS = cH,
          tS = [SS.i * gS, SS.j * gS, SS.k * gS];
        for (let XS = 0; XS < 3; XS++)
          if (tS[XS] + gS <= HS[XS] - gS || tS[XS] >= HS[XS] + Qg.o[XS] + gS) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const bS = this.stale;
        for (let XS = 0; XS < bS.length; XS += 4)
          if (bS[XS] === SS.i && bS[XS + 1] === SS.j && bS[XS + 2] === SS.k) return void(bS[XS + 3] = this.swept);
        if (16 === bS.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        bS.push(SS.i, SS.j, SS.k, this.swept)
      }
      writeStale() {
        const SS = this.swept,
          HS = this.stale;
        this.staleAll && SS - this.staleAllSwept >= Qg.h && (this.staleAll = !1, HS.length = 0);
        let gS = 0;
        for (let bS = 0; bS < HS.length; bS += 4)
          if (SS - HS[bS + 3] < Qg.h) {
            for (let SS = 0; SS < 4; SS++) HS[gS + SS] = HS[bS + SS];
            gS += 4
          } HS.length = gS;
        const tS = this.uniformInts;
        tS[3] = this.staleAll ? 5 : gS / 4;
        for (let bS = 0; bS < 4; bS++)
          for (let SS = 0; SS < 3; SS++) tS[16 + 4 * bS + SS] = 4 * bS < gS ? HS[4 * bS + SS] * cH : 0
      }
      writeUniform() {
        const SS = this.uniformInts;
        let HS = this.uniformWritten;
        if (HS) {
          let gS = !0;
          for (let tS = 0; tS < SS.length && gS; tS++) gS = SS[tS] === HS[tS];
          if (gS) return
        }
        HS ??= this.uniformWritten = new Int32Array(SS.length), HS.set(SS), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(SS) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, SS)
      }
      computeVolume(SS, HS, gS) {
        const tS = this.buildVolumePass();
        if (!tS) return void(this.volumeHolds = null);
        const bS = (0, Qg.u)(this.volumeHolds, SS);
        this.volumeHolds = SS;
        const XS = 1 === bS.length && bS[0].size.every(((SS, HS) => SS === Qg.o[HS])),
          xS = this.sweptChunk,
          NS = this.sweptLight,
          qS = HS[0] !== NS[0] || HS[1] !== NS[1] || HS[2] !== NS[2],
          uS = gS[0] !== xS[0] || gS[1] !== xS[1] || gS[2] !== xS[2],
          IS = qS && fq(HS, NS);
        if ((XS || this.written || uS || IS) && (this.fastLeft = Qg.h), XS || this.written || qS || uS) {
          this.written = !1;
          for (let SS = 0; SS < 3; SS++) xS[SS] = gS[SS], NS[SS] = HS[SS];
          this.sweepLeft = XS ? 0 : Qg.h
        }
        if (XS ? this.swept += Qg.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, bS.push(...(0, Qg.x)(SS, this.slice)), this.slice = (this.slice + 1) % Qg.h, this.swept++), 0 === bS.length) return;
        const fS = (0, Qg.B)(this.workData, HS, bS);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const kS = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          aS = kS.beginComputePass({
            label: "sun-shadow-volume"
          });
        aS.setPipeline(tS.pipeline), aS.setBindGroup(hg.group, tS.bindGroup), aS.dispatchWorkgroups(Math.ceil(fS / Qg.i)), aS.end(), this.device.queue.submit([kS.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const SS = hg,
          HS = GPUShaderStage.COMPUTE,
          gS = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: SS.uniform,
              visibility: HS,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: SS.Lk,
              visibility: HS,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: SS.special,
              visibility: HS,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: SS.work,
              visibility: HS,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: SS.volume,
              visibility: HS,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          tS = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: gS,
            entries: [{
              binding: SS.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: SS.Lk,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: SS.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: SS.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: SS.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [gS]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: Zg()
            }),
            entryPoint: "main"
          }
        }).then((SS => {
          this.volumePass = {
            pipeline: SS,
            bindGroup: tS
          }
        }), (SS => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(SS)}`)
        })), null
      }
      start(SS) {
        if (this.window) return this.window;
        const HS = (SS, HS) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * SS, HS)
        };
        this.casters = new tq(((SS, gS) => {
          this.castersWritten = !0, HS(SS, gS)
        }), kq);
        const gS = new Nq(this.casters, ((SS, HS) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * SS, HS)
        }), HS);
        return gS.encoded = SS => {
          this.markStale(SS)
        }, SS.gk.on("chunkAdded", (SS => {
          gS.chunkAdded(SS)
        })), this.window = gS, gS
      }
    }
    var Kq = gS(38710),
      jq = gS(38712);
    const Gq = 0,
      Cq = 3,
      nq = 4,
      Pq = 5;

    function Qq(SS, HS, gS, tS) {
      SS.drawOffset(HS, tS + Gq), HS[tS + Cq] = SS.drawTime(), gS[tS + nq] = SS.ring.drawStart(), gS[tS + Pq] = SS.ring.drawCount()
    }
    const Dq = `\n${Gt}\n\nconst MAX_STOPS = ${jq.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${jq.b/4}>,\n\tcolor1: array<vec4f, ${jq.b}>,\n\tcolor2: array<vec4f, ${jq.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${jq.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${jq.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var wq = gS(41629);
    class hq {
      constructor(SS, HS, gS, tS) {
        this.device = SS, this.system = HS, this.frameIndex = gS, this.bindings = tS, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, wq.i)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (SS, HS) => {
          this.device.queue.writeBuffer(this.ring, SS * jq.f * 4, this.system.ring.records, SS * jq.f, (HS - SS) * jq.f)
        };
        const {
          name: bS
        } = HS;
        this.ring = SS.createBuffer({
          label: `particles-${bS}`,
          size: HS.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = SS.createBuffer({
          label: `particles-uniforms-${bS}`,
          size: 4 * jq.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(SS) {
        const HS = (0, wq.e)(this.system, this.uniformBits, SS);
        HS && (this.uniformBits = HS, this.device.queue.writeBuffer(this.uniforms, 0, HS))
      }
      bind() {
        const {
          system: SS
        } = this, HS = this.texture;
        (0, wq.n)(SS, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${SS.name}`,
          size: [jq.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * jq.k
        }, [jq.k, 1]));
        const gS = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === HS.view && this.boundSampler === HS.sampler && this.boundRamp === gS || (this.boundView = HS.view, this.boundSampler = HS.sampler, this.boundRamp = gS, this.bindGroup = this.device.createBindGroup({
          label: `particles-${SS.name}`,
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
            resource: HS.sampler
          }, {
            binding: 3,
            resource: HS.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: gS
          }]
        }))
      }
      destroy() {
        var SS;
        this.ring.destroy(), this.uniforms.destroy(), null === (SS = this.ramp) || void 0 === SS || SS.destroy()
      }
    }
    class Zq {
      constructor(SS, HS) {
        this.device = SS, this.resources = HS, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, uH.d)();
        const gS = SS.createBindGroupLayout({
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
        this.frameLayout = SS.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = SS.createPipelineLayout({
          bindGroupLayouts: [HH(SS), gS, this.frameLayout]
        }), this.module = SS.createShaderModule({
          label: "particles",
          code: Dq
        });
        const tS = SS.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        SS.queue.writeTexture({
          texture: tS
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: gS,
          rampSampler: SS.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: tS.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (HS, gS) => (this.bindTarget(gS), {
            renderable: this.renderable,
            pipeline: xH(SS, gS),
            draw: SS => gS === this.preparedTarget ? this.draw(SS) : 0
          })
        }
      }
      get TtS() {
        return this.systems.size
      }
      reset() {
        for (const SS of this.systems.keys()) SS.reset()
      }
      describePendingWork() {
        return (0, Kq.f)(this.systems.keys(), "Lite")
      }
      RY(SS, HS) {
        const gS = new Kq.c(SS, HS, this);
        return this.systems.set(gS, new hq(this.device, gS, this.allocateFrameIndex(), this.bindings)), gS
      }
      t5(SS, HS) {
        for (const gS of this.systems.keys()) gS.t5(SS, HS)
      }
      canDraw(SS) {
        const HS = this.systems.get(SS),
          gS = SS.texture ? this.resources.boundTexture(SS.texture) : null;
        if (!HS || !gS || !this.targetPipelines) return !1;
        if (HS.texture = gS, HS.pipelines.length = 0, !Bb(SS.blendMode)) return this.warnOnce(`blend:${SS.blendMode}`, `particle blend mode ${SS.blendMode} is not drawn (${SS.name})`), !0;
        const tS = (0, vb.j)(SS.blendMode);
        for (const bS of tS) {
          const SS = this.pipelineFor(bS);
          if (!1 === SS) return HS.pipelines.length = 0, !0;
          SS && HS.pipelines.push(SS)
        }
        return HS.pipelines.length === tS.length
      }
      disposeStopped(SS) {
        SS.dispose()
      }
      remove(SS) {
        const HS = this.systems.get(SS);
        HS && (this.systems.delete(SS), HS.destroy(), this.freeFrameIndices.push(HS.frameIndex))
      }
      prepare(SS) {
        const HS = SS.animationRatio || 1;
        NH(this.renderable._worldCenter, SS, tH), this.preparedTarget = this.target, this.draws.length = 0;
        let gS = 0;
        for (const tS of this.systems.values()) {
          const SS = tS.system;
          if (!SS.animateIfActive(HS)) continue;
          if (SS.ring.takeUploads(tS.upload), !SS.hasLiveParticles() || 0 === tS.pipelines.length) continue;
          tS.writeUniforms(this.warnOnce), tS.bind();
          const bS = 64 * tS.frameIndex;
          tS.count = SS.ring.drawCount(), Qq(SS, this.frameData, this.frameBits, bS), gS = Math.max(gS, bS + 64), this.draws.push(tS)
        }
        gS > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, gS)
      }
      draw(SS) {
        let HS = 0,
          gS = null;
        for (const tS of this.draws) {
          SS.setBindGroup(1, tS.bindGroup), SS.setBindGroup(2, this.frameBindGroup, [256 * tS.frameIndex]);
          for (const bS of tS.pipelines) bS !== gS && (SS.setPipeline(bS), gS = bS), SS.draw(4, tS.count), HS++
        }
        return HS
      }
      bindTarget(SS) {
        this.target = SS;
        const HS = `${SS._colorFormat}|${SS._depthStencilFormat}|${SS._depthCompare}|${SS._sampleCount}`;
        let gS = this.pipelines.get(HS);
        gS || (gS = new Map, this.pipelines.set(HS, gS)), this.targetPipelines = gS
      }
      pipelineFor(SS) {
        var HS;
        const gS = this.targetPipelines,
          tS = gS.get(SS);
        if (void 0 !== tS) return tS;
        gS.set(SS, null);
        const bS = this.target,
          XS = SS === vb.c,
          xS = null !== (HS = bS._depthCompare) && void 0 !== HS ? HS : gH;
        return this.device.createRenderPipelineAsync({
          label: `particles-${SS}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: mS({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: XS ? 1 : 0
            }
          }, bS, Mb((0, vb.h)(SS))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: bS._depthStencilFormat ? {
            format: bS._depthStencilFormat,
            depthCompare: xS,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: bS._sampleCount
          }
        }).then((HS => {
          gS.set(SS, HS)
        }), (HS => {
          gS.set(SS, !1), console.error("Lite particle pipeline failed", HS), Tb("particles", `blend-${SS}`, HS)
        })), null
      }
      allocateFrameIndex() {
        const SS = this.freeFrameIndices.pop();
        if (void 0 !== SS) return SS;
        const HS = this.nextFrameIndex++;
        if (64 * (HS + 1) > this.frameData.length) {
          const SS = new Float32Array(2 * this.frameData.length);
          SS.set(this.frameData), this.frameData = SS, this.frameBits = new Uint32Array(SS.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return HS
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
    class Jq {
      constructor(SS, HS, gS, tS, bS) {
        this.lite = SS, this.canvas = HS, this.info = gS, this.resources = bS, this.RgS = !1, this.needPOTTextures = !1, this.n_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = HS.width, this.renderHeight = HS.height, this.caps = {
          maxTextureSize: tS.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: tS.maxTextureArrayLayers
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
      setSize(SS, HS) {
        if (this.renderWidth === SS && this.renderHeight === HS) return !1;
        const gS = this.renderWidth,
          tS = this.renderHeight;
        this.renderWidth = SS, this.renderHeight = HS;
        try {
          (0, US.m)(this.lite, SS, HS)
        } catch (bS) {
          if (bS instanceof DOMException && "InvalidStateError" === bS.name) {
            this.renderWidth = gS, this.renderHeight = tS;
            try {
              (0, US.m)(this.lite, gS, tS)
            } catch {
              this.canvas.width = gS, this.canvas.height = tS
            }
            return console.warn("WebGPU could not allocate render targets for resize", SS, HS, bS.message), !1
          }
          throw bS
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
      qD() {
        const SS = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : SS - this.lastFrameTime, this.lastFrameTime = SS
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(SS, HS) {
        const gS = document.createElement("canvas");
        return gS.width = SS, gS.height = HS, gS
      }
      h_(SS, HS) {
        var gS;
        return null !== (gS = this.resources.h_.get(SS)) && void 0 !== gS ? gS : new MS(this.resources, SS, HS)
      }
      atlasArray(SS, HS, gS) {
        return this.resources.atlasArray(SS, HS, gS)
      }
    }
    class Oq {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(SS) {
        this.fov = SS.fov, this.nearPlane = SS.near, this.farPlane = SS.far;
        const HS = SS.worldMatrix;
        for (let gS = 0; gS < 16; gS++)
          if (this.worldMatrix[gS] !== HS[gS]) return this.worldMatrix.set(HS), void this.worldMatrixVersion++
      }
    }
    class dq {
      constructor(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
        let IS = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = SS, this.Bj = HS, this.sceneTask = gS, this.gpuDevice = tS, this.terrain = bS, this.meshes = XS, this.particles = xS, this.resources = NS, this.sunShadow = IS, this.cHS = void 0, this.backendName = "WebGPU (Lite)", this.l_ = void 0, this.modelMeshes = void 0, this.camera = new Oq, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new sS(tS.lost), this.deviceLost = this.refusals.deviceLost, this.cHS = new Jq(SS, qS, uS, tS.limits, NS), (0, dS.B)({
          Ku: SS => {
            LS(SS) && NS.textureSlot(SS)
          },
          loaded: SS => LS(SS) ? NS.textureLoaded(SS) : null,
          canvasUpdated: (SS, HS, gS) => {
            LS(SS) && NS.canvasUpdated(SS, HS, gS)
          }
        }), this.l_ = XS.l_, this.modelMeshes = XS.modelMeshes, HS.camera = this.camera
      }
      get castsEntitySunShadows() {
        var SS, HS;
        return null !== (SS = null === (HS = this.sunShadow) || void 0 === HS ? void 0 : HS.tracesEntities) && void 0 !== SS && SS
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(SS) {
        this.modelMeshes.attach(SS.model, SS.sceneMirror);
        const HS = SS.Bj;
        this.setClearColour(HS.clearColor.r, HS.clearColor.g, HS.clearColor.b), HS.draw = () => {
          this.drawFrame(SS, HS)
        }
      }
      render(SS) {
        if (!this.refusals.lost) {
          try {
            this.cHS.qD(), SS.Bj.render()
          } catch (HS) {
            throw this.refusals.frameFailed(HS), HS
          }
          this.refusals.frameDrawn()
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var SS, HS, gS, tS;
        const bS = [...this.particles.describePendingWork(), ...null !== (SS = null === (HS = this.sunShadow) || void 0 === HS ? void 0 : HS.describePendingWork()) && void 0 !== SS ? SS : []],
          XS = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (gS = this.terrain.sceneDepth) && void 0 !== gS && gS.compiling ? 1 : 0) + (null !== (tS = this.terrain.shadowMask) && void 0 !== tS && tS.compiling ? 1 : 0);
        XS > 0 && bS.push(`${XS} Lite pipelines compiling`);
        const xS = this.terrain.buffersAwaitingVerdict;
        xS > 0 && bS.push(`${xS} Lite terrain buffers awaiting their out-of-memory verdict`);
        const NS = this.resources.texturesLoading;
        return NS > 0 && bS.push(`${NS} Lite textures loading`), bS
      }
      prepareTexture(SS) {
        return null !== this.resources.boundTexture(SS) || this.resources.textureFailed(SS)
      }
      drawFrame(SS, HS) {
        var gS, tS, bS, XS, xS, NS;
        const qS = kN(SS);
        this.camera.copyFromView(qS), this.setClearColour(qS.clearColour[0], qS.clearColour[1], qS.clearColour[2]), null === (gS = this.sunShadow) || void 0 === gS || gS.prepare(SS.qk, qS.eye, null !== (tS = SS.qk.bK) && void 0 !== tS ? tS : null), this.terrain.prepare(SS, qS), null === (bS = this.terrain.sceneDepth) || void 0 === bS || bS.setPlanes(qS.near, qS.far), null === (XS = this.terrain.shadowMask) || void 0 === XS || XS.prepare(qS), mx(this.sceneTask), this.meshes.prepare(HS, qS, SS.model.earthSky, null !== (xS = SS.qk.bK) && void 0 !== xS ? xS : null), this.particles.prepare(qS);
        const uS = performance.now();
        this.resources.flushUploads(), null === (NS = this.sunShadow) || void 0 === NS || NS.traceEntities(this.meshes);
        try {
          (0, US.l)(this.engine, this.lastFrameTime > 0 ? uS - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = uS
      }
      setClearColour(SS, HS, gS) {
        const tS = this.Bj.clearColor;
        tS.r = SS, tS.g = HS, tS.b = gS, tS.a = 1
      }
    }
    const cq = "WebGPU device lost while Lite was starting";

    function vq(SS, HS) {
      return "object" === typeof SS && null !== SS ? Object.assign(SS, {
        startStep: HS
      }) : SS
    }
    async function Eq(SS, HS) {
      const gS = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!gS) throw vq(new Error("No WebGPU adapter"), "no_adapter");
      const tS = gS.info,
        bS = {
          vendor: (null === tS || void 0 === tS ? void 0 : tS.vendor) || "unknown vendor",
          renderer: (null === tS || void 0 === tS ? void 0 : tS.architecture) || "unknown renderer",
          version: (null === tS || void 0 === tS ? void 0 : tS.description) || "unknown version"
        },
        XS = function(SS) {
          const HS = {};
          for (const gS in SS.limits) {
            const tS = SS.limits[gS];
            "number" === typeof tS && (HS[gS] = tS)
          }
          return HS
        }(gS);
      let xS;
      SS.style.background = "black";
      try {
        xS = await (0, US.g)(SS, {
          msaaSamples: HS.qgS ? 4 : 1,
          requiredLimits: XS,
          alphaMode: "premultiplied"
        })
      } catch (IS) {
        throw vq(IS, "#47" === (null === (NS = IS) || void 0 === NS ? void 0 : NS.message) ? "no_adapter" : "device")
      }
      var NS;
      null !== HS.bufferSize && (0, US.m)(xS, HS.bufferSize.width, HS.bufferSize.height);
      const qS = function(SS) {
        return SS._device
      }(xS);
      let uS = null;
      qS.lost.then((SS => {
        uS = SS, console.error(`WebGPU device lost (${SS.reason}): ${SS.message}`)
      }));
      try {
        const gS = await async function(SS, HS, gS, tS, bS, XS) {
          const xS = (0, pS.b)(SS),
            NS = new Tx(SS, HS),
            qS = new oN(HS),
            uS = new vx(HS, NS, (SS => function(SS, HS) {
              for (const tS of rS(SS)) {
                var gS;
                if (tS._targetSignature === HS) return null !== (gS = tS._sceneBG) && void 0 !== gS ? gS : null
              }
              return null
            }(xS, SS))),
            IS = new Zq(HS, NS);
          for (const aS of function(SS, HS, gS) {
              return [HS.opaqueRenderable, SS.opaqueRenderable, SS.skyLastRenderable, gS.renderable, HS.transparentRenderable, SS.transparentRenderable, SS.frontRenderable]
            }(uS, qS, IS)) eS(xS, aS);
          const fS = function(SS) {
            for (const HS of rS(SS))
              if ("Bj" === HS.name) return HS;
            throw new Error("Lite: the scene has no render task named scene")
          }(xS);
          bS && qS.installSceneDepth(fS, SS);
          const kS = XS ? new aq(HS, XS.entities) : null;
          qS.sunShadow = kS, kS && null !== XS && void 0 !== XS && XS.entities && (qS.shadowMask = new dN(HS, fS, SS, qS));
          return uS.sunShadow = kS, await (0, pS.c)(xS), new dq(SS, xS, fS, HS, qS, uS, IS, NS, gS, tS, kS)
        }(xS, qS, SS, bS, HS.sceneDepth, HS.sunShadow);
        if (null !== uS) {
          const {
            reason: SS,
            message: HS
          } = uS;
          throw Object.assign(new Error(`${cq} (${SS}): ${HS}`), {
            fallbackReason: cq
          })
        }
        return gS
      } catch (IS) {
        throw qS.destroy(), null === uS ? IS : vq(IS, "device")
      }
    }
  },
  40735: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => aS,
      C: () => KS,
      c: () => bS,
      g: () => tS,
      h: () => kS,
      i: () => IS,
      k: () => GS,
      o: () => XS,
      s: () => NS,
      t: () => qS,
      u: () => xS,
      y: () => jS
    });
    const tS = 3,
      bS = 0,
      XS = 1,
      xS = 2,
      NS = {
        uniform: 3,
        Lk: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qS = 10,
      uS = "BloxdPackInputs",
      IS = "bloxdPackInputs",
      fS = [{
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
      kS = 80;

    function aS() {
      const SS = fS.map((SS => {
        let {
          name: HS,
          type: gS
        } = SS;
        return `    ${HS}: ${gS},\n`
      })).join("");
      return `struct ${uS} {\n${SS}}\n@group(${tS}) @binding(${bS}) var<uniform> ${IS}: ${uS};\n`
    }

    function KS(SS, HS) {
      const gS = new DataView(SS, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, kS),
        [tS, bS, XS, xS, NS, qS] = fS;
      gS.setFloat32(tS.offset, HS.seconds, !0), gS.setUint32(bS.offset, HS.lit ? 1 : 0, !0);
      for (let uS = 0; uS < 3; uS++) gS.setInt32(XS.offset + 4 * uS, HS.renderOffset[uS], !0), gS.setFloat32(xS.offset + 4 * uS, HS.Z6[uS], !0), gS.setFloat32(NS.offset + 4 * uS, HS.eyePosition[uS], !0), gS.setFloat32(qS.offset + 4 * uS, HS.shadowDirection[uS], !0)
    }

    function jS(SS) {
      const HS = new Uint32Array(Math.max(1, SS.length));
      return SS.forEach(((SS, gS) => {
        let {
          id: tS,
          rotation: bS
        } = SS;
        HS[gS] = 65535 & tS | (3 & bS) << 16
      })), HS
    }
    const GS = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);