export const id = 262;
export const ids = [262];
export const modules = {
  40916: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Cv,
      f: () => pv,
      j: () => gv,
      k: () => Nv
    });
    var hv = Pv(36745),
      Sv = Pv(38245),
      ev = Pv(38239);

    function gv(vv, zv, Pv, hv) {
      const Sv = ev.s;
      zv.fill(0), vv.gravity.toArray(zv, Sv.gravity), vv.colorDead.toArray(zv, Sv.colorDead), Pv[Sv.ramp] = vv.useRampGradients ? 1 : 0;
      const gv = vv.getColorGradients(),
        pv = Wv(vv, gv, "colour", hv);
      Pv[Sv.colorCount] = pv;
      for (let ev = 0; ev < pv; ev++) {
        var dv;
        const vv = gv[wv(gv, ev)];
        zv[Sv.colorPositions + ev] = vv.gradient, vv.color1.toArray(zv, Sv.color1 + 4 * ev), (null !== (dv = vv.color2) && void 0 !== dv ? dv : vv.color1).toArray(zv, Sv.color2 + 4 * ev)
      }
      const Nv = vv.getVelocityGradients(),
        lv = Wv(vv, Nv, "pC", hv);
      Pv[Sv.velocityCount] = lv;
      for (let ev = 0; ev < lv; ev++) cv(zv, Sv.pC + 4 * ev, Nv[wv(Nv, ev)]);
      const Tv = vv.useRampGradients ? vv.getColorRemapGradients() : null,
        av = Wv(vv, Tv, "colour remap", hv);
      Pv[Sv.remapCount] = av;
      for (let ev = 0; ev < av; ev++) cv(zv, Sv.remap + 4 * ev, Tv[wv(Tv, ev)])
    }

    function pv() {
      return {
        key: [],
        texels: new Uint8Array(4 * ev.i)
      }
    }
    const dv = [];

    function Nv(vv, zv) {
      return lv(vv, dv), !iv(dv, zv.key) && (zv.key.length = 0, zv.key.push(...dv), zv.key.length > 0 && function(vv, zv) {
        for (let Pv = 0; Pv < ev.i; Pv++) Sv.i.GetCurrentGradient(Pv / ev.i, vv, ((vv, zv, Pv) => {
          hv.Color3.LerpToRef(vv.color, zv.color, Pv, Tv)
        })), zv[4 * Pv] = 255 * Tv.r, zv[4 * Pv + 1] = 255 * Tv.g, zv[4 * Pv + 2] = 255 * Tv.b, zv[4 * Pv + 3] = 255
      }(vv.getRampGradients(), zv.texels), !0)
    }

    function lv(vv, zv) {
      zv.length = 0;
      const Pv = vv.useRampGradients ? vv.getRampGradients() : null;
      if (null !== Pv && void 0 !== Pv && Pv.length) {
        zv.push(Pv.length);
        for (const vv of Pv) zv.push(vv.gradient, vv.color.r, vv.color.g, vv.color.b)
      }
    }
    const Tv = new hv.Color3;

    function Wv(vv, zv, Pv, hv) {
      return zv ? zv.length > ev.c ? (hv(`particleStops:${Pv}`, `GPU particles use the first 2 and last ${ev.c-2} of more than ${ev.c} ${Pv} gradient stops (${vv.name})`), ev.c) : zv.length : 0
    }

    function wv(vv, zv) {
      return zv < 2 || vv.length <= ev.c ? zv : vv.length - ev.c + zv
    }
    const av = new Float32Array(ev.l),
      sv = new Uint32Array(av.buffer);

    function Cv(vv, zv, Pv) {
      return gv(vv, av, sv, Pv), zv && iv(sv, zv) ? null : sv.slice()
    }

    function iv(vv, zv) {
      if (vv.length !== zv.length) return !1;
      for (let Pv = 0; Pv < vv.length; Pv++)
        if (vv[Pv] !== zv[Pv]) return !1;
      return !0
    }

    function cv(vv, zv, Pv) {
      var hv;
      vv[zv] = Pv.gradient, vv[zv + 1] = Pv.factor1, vv[zv + 2] = null !== (hv = Pv.factor2) && void 0 !== hv ? hv : Pv.factor1
    }
  },
  40908: (vv, zv, Pv) => {
    function hv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const zv = new Set;
      return (Pv, hv) => {
        zv.has(Pv) || (zv.add(Pv), console.warn(vv + hv))
      }
    }
    Pv.d(zv, {
      d: () => hv
    })
  },
  40946: (vv, zv, Pv) => {
    Pv.d(zv, {
      createLiteRendererAsync: () => Vd,
      liteBabylonBackend: () => Av,
      setPipelineFailureHook: () => JS
    });
    var hv = Pv(36745),
      Sv = Pv(37100),
      ev = Pv(37428),
      gv = Pv(36697),
      pv = Pv(37433);
    class dv extends pv.c {
      constructor() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        super(...zv), this.color = new hv.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: zv[0].rD().getUniqueId(),
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
          needAlphaBlendingForMesh: vv => vv.visibility < 1 || vv.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Nv = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      lv = vv => 1 << Nv.indexOf(vv),
      Tv = lv("VERTEXCOLOR"),
      Wv = lv("INSTANCES"),
      wv = lv("THIN_INSTANCES"),
      av = lv("INSTANCESCOLOR"),
      sv = lv("FOG"),
      Cv = lv("LITE_FRONT_LAYER");

    function iv(vv, zv, Pv, hv) {
      let Sv = 0;
      return vv.isVerticesDataPresent("color") && (Sv |= Tv), "none" !== zv && (Sv |= Wv), "thin" === zv && (Sv |= wv, vv.isVerticesDataPresent("instanceColor") && (Sv |= av)), hv.fogEnabled && vv.applyFog && 0 !== hv.fogMode && (Sv |= sv), Pv >= 1 && (Sv |= Cv), Sv
    }

    function cv(vv, zv) {
      vv.updateColor4("color", zv.color, zv.alpha)
    }
    var Gv = Pv(37375),
      mv = Pv(36898),
      jv = Pv(36775),
      fv = Pv(36668),
      Fv = Pv(37349),
      Yv = Pv(37366),
      nv = Pv(36685),
      Ov = Pv(36693),
      Dv = Pv(36705);
    const Kv = fv.d.GLSL;
    class Vv {
      constructor(vv, zv) {
        this.name = vv, this.Is = zv, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.uD = {
          addOnce: vv => {
            this.disposers.push(vv)
          }
        }, this.uniqueId = zv.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      rD() {
        return this.Is
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
      needAlphaBlendingForMesh(vv) {
        return (0, nv.S)(this.model, vv.visibility, vv.hasVertexAlpha)
      }
      needAlphaTestingForMesh(vv) {
        return (0, nv.W)(this.model, vv.visibility, vv.hasVertexAlpha)
      }
      dispose() {
        (0, mv.k)(this);
        for (const vv of this.disposers.splice(0)) vv()
      }
      get model() {
        return (0, nv.bb)(this)
      }
    }
    const Uv = new WeakSet;

    function Rv(vv) {
      return Uv.has(vv)
    }

    function xv(vv) {
      Uv.add(vv)
    }
    const tv = {
      create: (vv, zv) => ((0, jv.m)(vv, new Vv(vv.name, zv)), Ov.d.defines()),
      write: () => {},
      addFeature: (vv, zv) => {
        const Pv = vv.mirror;
        zv.feature === Yv.i && zv.state.dirLightCount > 0 && (vv.disableLighting = !0, (0, nv.Z)(vv)), "BLOXD_LIGHTING" in zv.defines && (0, mv.j)(Pv), zv.feature === Fv.g && ((0, Gv.i)(zv.state, Kv), function(vv, zv) {
          const Pv = vv.rD().ma();
          zv.textures.forEach(((hv, Sv) => {
            setTimeout((() => {
              var ev, gv;
              const {
                url: pv
              } = hv.source;
              Pv.atlasArray(pv, null !== (ev = null === (gv = zv.sources.pixels) || void 0 === gv ? void 0 : gv[Sv]) && void 0 !== ev ? ev : null, zv.sources.layerWidth).then((Pv => {
                (0, Gv.d)(vv, zv, Sv, Pv, Pv.layerWidth, Pv.layers, Kv)
              })).catch((vv => {
                console.error(`Failed to build texture array for atlas ${Sv}`, vv)
              }))
            }))
          }))
        }(Pv, zv.state))
      },
      texture: (vv, zv, Pv) => {
        let {
          data: hv,
          sets: Sv
        } = Pv;
        var ev;
        (xv(vv), hv) && (vv.uvSet = null !== (ev = null === Sv || void 0 === Sv ? void 0 : Sv.coordinatesIndex) && void 0 !== ev ? ev : 0, (0, jv.T)(vv.matrix, null !== Sv && void 0 !== Sv ? Sv : {}))
      },
      cube: xv,
      canvas: (vv, zv, Pv) => {
        let {
          width: hv,
          height: Sv,
          mipmaps: ev,
          samplingMode: gv = Dv.i.trilinear,
          hasAlpha: pv = !1,
          wrap: dv = Dv.c.clamp
        } = Pv;
        const Nv = vv.ma().createCanvas(hv, Sv),
          lv = new Dv.m("2d", {
            kind: "canvas",
            width: hv,
            height: Sv,
            canvas: Nv
          }, {
            samplingMode: gv,
            wrapU: dv,
            wrapV: dv,
            noMipmap: !ev,
            invertY: !0
          });
        return lv.hasAlpha = pv, xv(lv), lv
      }
    };
    var qv = Pv(36918),
      Iv = Pv(36618);
    class Qv {
      constructor(vv, zv, Pv) {
        this.engine = vv, this.clearColor = zv, this.ambientColor = Pv, this.onBeforeRenderObservable = new Iv.c, this.onBeforeCameraRenderObservable = new Iv.c, this.onAfterRenderObservable = new Iv.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.mF = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      ma() {
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
      addPendingData(vv) {
        this.pending.push(vv)
      }
      removePendingData(vv) {
        const zv = this.pending.indexOf(vv); - 1 !== zv && this.pending.splice(zv, 1)
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

    function Zv() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const Av = {
      Gzv: Zv,
      BPv: (vv, zv) => {
        const Pv = new Qv(vv.engine, hv.d.FromArray(zv.clearColor), hv.Color3.FromArray(zv.ambientColor));
        (0, gv.c)(tv, Pv), vv.Is = Pv,
          function(vv, zv) {
            const Pv = Object.assign((0, qv.g)(vv, "camera"), {
              layerMask: 268435455
            });
            vv.model.nodes.setWorldSource(Pv.row, vv.model.view.worldMatrix), vv.camera = zv.activeCamera = Pv
          }(vv, Pv), (0, Sv.h)(vv, ((vv, zv, Pv) => (0, ev.j)(vv, zv, Pv, pv.c)))
      },
      LPv: () => {},
      setBabylonFog: () => {},
      EPv: Zv,
      rPv: () => {},
      linesFromArrays: (vv, zv, Pv) => (0, ev.j)(vv, zv, Pv, dv),
      Qs: () => {},
      bPv: Zv
    };
    var Lv = Pv(41010),
      Hv = Pv(41025);
    class Mv {
      constructor(vv) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const zv = new Promise((vv => {
          this.refused = vv
        }));
        this.deviceLost = Promise.race([vv, zv])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(vv) {
        (function(vv) {
          const {
            name: zv,
            message: Pv
          } = null !== vv && void 0 !== vv ? vv : {};
          return "InvalidStateError" === zv && "string" === typeof Pv && Pv.startsWith("GPUDevice.")
        })(vv) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: vv.message,
          framesRefused: !0
        }))
      }
    }
    class yv {
      constructor(vv) {
        this.resources = vv, this.matrixKey = {
          GT: 0
        }, this.attributesKey = {
          GT: 0
        }, this.inputs = Object.create(null);
        for (let zv = 0; zv < 4; zv++) this.inputs[`world${zv}`] = new Ev(this.matrixKey, 16 * zv, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(vv, zv) {
        this.resources.vertexBufferCreated(this.matrixKey, vv, !0), zv && this.resources.vertexBufferCreated(this.attributesKey, zv, !0)
      }
    }
    class Bv extends yv {
      constructor(vv, zv, Pv) {
        super(vv), this.mesh = zv, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const hv = this.inputs;
        let Sv = 0;
        for (const {
            size: gv
          }
          of Pv) Sv += gv;
        for (const {
            name: gv,
            offset: pv,
            size: dv,
            type: Nv
          }
          of Pv) hv[gv] = new Ev(this.attributesKey, 4 * pv, 4 * Sv, dv, !0, Nv);
        this.rowStride = Sv, vv.OE.set(zv, this);
        const ev = zv.isVerticesDataPresent;
        zv.isVerticesDataPresent = (vv, Pv) => vv in hv || ev.call(zv, vv, Pv)
      }
      attach(vv, zv) {
        this.matrices = vv, this.attributes = zv, this.bind(vv, zv), this.mirror(vv, vv.length, vv.length / 16)
      }
      Z2(vv) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, vv ? 64 * vv : void 0)
      }
      v_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(vv, zv) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * vv, 16 * zv)
      }
      attributeRows(vv, zv) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, vv * this.rowStride, zv * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(vv, zv, Pv) {
        const hv = this.mesh._thinInstanceDataStorage;
        hv.matrixData = vv, hv.matrixBufferSize = zv, hv.worldMatrices = null, hv.instancesCount = Pv
      }
    }
    class Jv extends yv {
      constructor(vv, zv, Pv) {
        var hv, Sv, ev, gv;
        super(vv), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (hv = null === Pv || void 0 === Pv ? void 0 : Pv.interleavedKinds) && void 0 !== hv ? hv : null, this.offsets = null !== (Sv = null === Pv || void 0 === Pv ? void 0 : Pv.interleavedOffsets) && void 0 !== Sv ? Sv : [], this.rowStride = null !== (ev = null === Pv || void 0 === Pv ? void 0 : Pv.interleavedRowStride) && void 0 !== ev ? ev : 0, null === (gv = this.layout) || void 0 === gv || gv.forEach(((vv, zv) => {
          this.inputs[vv] = new Ev(this.attributesKey, 4 * this.offsets[zv], 4 * this.rowStride, Pv.strides[vv])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), vv.batchUploads.set(zv, this), zv.uD.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(vv) {
        const zv = this.packedBatch;
        return zv.renderSelf ? 0 === vv ? this.packedSource : zv.instances[vv - 1] : zv.instances[vv]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(vv, zv, Pv, hv) {
        const Sv = (zv.renderSelf ? 1 : 0) + zv.rows.length;
        if (this.frame = hv, this.count = Sv, this.packedSource = vv, this.packedBatch = zv, 0 === Sv) return;
        if (vv.getWorldMatrix(), 16 * Sv > this.matrices.length) {
          let vv = this.matrices.length / 16;
          for (; vv < Sv;) vv *= 2;
          this.matrices = new Float32Array(16 * vv), this.attributes &&= new Float32Array(vv * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let ev = 0;
        zv.renderSelf && this.packRow(ev++, vv, zv.row, Pv);
        for (let gv = 0; gv < zv.rows.length; gv++) this.packRow(ev++, zv.instances[gv], zv.rows[gv], Pv);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Sv), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Sv * this.rowStride)
      }
      packRow(vv, zv, Pv, hv) {
        const Sv = this.matrices;
        if (Pv < 0) Sv.set(zv.getWorldMatrix().m, 16 * vv);
        else
          for (let Nv = 0; Nv < 16; Nv++) Sv[16 * vv + Nv] = hv[16 * Pv + Nv];
        const ev = this.attributes;
        if (!ev) return;
        const gv = zv.lV,
          pv = this.layout;
        for (let Nv = 0; Nv < pv.length; Nv++) {
          var dv;
          const zv = null !== (dv = gv[pv[Nv]]) && void 0 !== dv ? dv : 0,
            Pv = vv * this.rowStride + this.offsets[Nv];
          zv.toArray ? zv.toArray(ev, Pv) : zv.copyToArray ? zv.copyToArray(ev, Pv) : ev[Pv] = zv
        }
      }
    }
    class Ev {
      constructor(vv, zv, Pv, hv) {
        let Sv = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = vv, this.byteOffset = zv, this.byteStride = Pv, this.size = hv, this.instanced = Sv, this.type = ev, this.normalized = gv
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
    const ov = "CANVAS_ALPHA_ONE",
      bv = `override ${ov}: bool = false;`,
      rv = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function kv(vv, zv, Pv) {
      var hv;
      let Sv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ev = null !== (hv = zv._colorFormat) && void 0 !== hv ? hv : "bgra8unorm",
        gv = Sv ? 15 : 0;
      return Pv ? {
        ...vv,
        targets: [{
          format: ev,
          blend: {
            color: Pv,
            alpha: rv
          },
          writeMask: gv
        }]
      } : {
        ...vv,
        constants: {
          ...vv.constants,
          [ov]: 1
        },
        targets: [{
          format: ev,
          writeMask: gv
        }]
      }
    }

    function Xv(vv, zv) {
      vv._renderables.push(zv)
    }

    function uv(vv) {
      var zv, Pv;
      return null !== (zv = null === (Pv = vv._frameGraph) || void 0 === Pv ? void 0 : Pv._tasks) && void 0 !== zv ? zv : []
    }

    function vz(vv) {
      return vv._currentEncoder
    }

    function zz(vv) {
      return vv.createBindGroupLayout({
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
    const Pz = "greater-equal",
      hz = 2e5,
      Sz = 1e5,
      ez = new WeakMap;

    function gz(vv, zv) {
      let Pv = ez.get(vv);
      if (!Pv) {
        Pv = {
          module: vv.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, ez.set(vv, Pv)
      }
      const hv = `${zv._colorFormat}|${zv._depthStencilFormat}|${zv._sampleCount}`;
      let Sv = Pv.pipelines.get(hv);
      if (!Sv) {
        var ev;
        const {
          module: gv
        } = Pv;
        Sv = vv.createRenderPipeline({
          label: `placeholder ${hv}`,
          layout: vv.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: gv,
            entryPoint: "v"
          },
          fragment: {
            module: gv,
            entryPoint: "f",
            targets: [{
              format: null !== (ev = zv._colorFormat) && void 0 !== ev ? ev : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: zv._depthStencilFormat ? {
            format: zv._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: zv._sampleCount
          }
        }), Pv.pipelines.set(hv, Sv)
      }
      return Sv
    }

    function pz(vv, zv, Pv) {
      const hv = zv.eye,
        Sv = zv.viewMatrix;
      vv[0] = hv[0] + Sv[2] * Pv, vv[1] = hv[1] + Sv[6] * Pv, vv[2] = hv[2] + Sv[10] * Pv
    }
    var dz = Pv(37475),
      Nz = Pv(40908),
      lz = Pv(36681);
    const Tz = Math.PI,
      Wz = Tz / 1.95,
      wz = [5e-4 / 94, 125e-7, 5e-4 / 18],
      az = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((vv => {
        let [zv, Pv] = vv;
        return .434 * Tz * Math.pow(2 * Tz / zv, 2) * Pv
      }));

    function sz(vv, zv, Pv) {
      const {
        up: hv,
        mieDirectionalG: Sv
      } = vv, ev = 1 - cz(1 - Math.exp(zv[1] / 45e4), 0, 1), gv = vv.rayleigh - (1 - ev), pv = Math.hypot(zv[0], zv[1], zv[2]), dv = pv > 0 ? 1 / pv : 0, Nv = Pv.sunDir;
      for (let wv = 0; wv < 3; wv++) Nv[wv] = zv[wv] * dv;
      const lv = Nv[0] * hv[0] + Nv[1] * hv[1] + Nv[2] * hv[2],
        Tv = 1e3 * Math.max(0, 1 - Math.exp(-(Wz - Math.acos(cz(lv, -1, 1))) / 1.5));
      Pv.sunE = Tv;
      const Wv = .2 * vv.turbidity * 1e-17 * vv.mieCoefficient;
      for (let wv = 0; wv < 3; wv++) {
        const vv = wz[wv] * gv,
          zv = az[wv] * Wv,
          hv = Tv / (vv + zv);
        Pv.inScatterR[wv] = vv * hv, Pv.inScatterM[wv] = zv * hv, Pv.extinctionBeta[wv] = 8400 * vv + 1250 * zv
      }
      return Pv.sunsetMix = cz(Math.pow(1 - lv, 5), 0, 1), Pv.sunDiscE = 19e3 * Tv, Pv.mieScale = (1 - Sv * Sv) / (4 * Tz), Pv.mieBase = 1 + Sv * Sv, Pv.mieSlope = 2 * Sv, Pv
    }
    const Cz = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const iz = 1 / function(vv) {
      const {
        A: zv,
        B: Pv,
        C: hv,
        D: Sv,
        E: ev,
        F: gv
      } = Cz;
      return (vv * (zv * vv + hv * Pv) + Sv * ev) / (vv * (zv * vv + Pv) + Sv * gv) - ev / gv
    }(1e3);

    function cz(vv, zv, Pv) {
      return Math.min(Math.max(vv, zv), Pv)
    }
    const Gz = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function mz(vv, zv) {
      const Pv = new Map(zv),
        hv = [],
        Sv = [],
        ev = () => 0 === Sv.length || Sv[Sv.length - 1].active;
      let gv = null;
      const pv = () => {
        const vv = [...Pv].filter((vv => {
            let [, zv] = vv;
            return !0 !== zv
          })),
          zv = vv.map((vv => {
            let [zv] = vv;
            return zv
          })).join("|");
        gv = vv.length ? new RegExp(`\\b(${zv})\\b`, "g") : null
      };
      pv();
      for (const dv of vv.split("\n")) {
        const vv = Gz.exec(dv);
        if (!vv) {
          ev() && hv.push(gv ? jz(dv, gv, Pv) : dv);
          continue
        }
        const zv = vv[1],
          Nv = vv[2].trim();
        if ("ifdef" === zv || "ifndef" === zv || "if" === zv) {
          const vv = ev(),
            hv = "if" === zv ? fz(Nv, Pv) : Pv.has(Nv) === ("ifdef" === zv);
          Sv.push({
            active: vv && hv,
            parentActive: vv,
            taken: hv
          })
        } else if ("elif" === zv || "else" === zv) {
          const vv = Sv[Sv.length - 1];
          if (!vv) throw new Error(`#${zv} without #if`);
          const hv = !vv.taken && ("else" === zv || fz(Nv, Pv));
          vv.active = vv.parentActive && hv, vv.taken = vv.taken || hv
        } else if ("endif" === zv) {
          if (!Sv.pop()) throw new Error("#endif without #if")
        } else if (ev()) {
          const [vv, ...hv] = Nv.split(/\s+/);
          "undef" === zv ? Pv.delete(vv) : Pv.set(vv, !hv.length || hv.join(" ")), pv()
        }
      }
      if (Sv.length) throw new Error("Unterminated #if");
      return hv.join("\n")
    }

    function jz(vv, zv, Pv) {
      return vv.replace(zv, (vv => {
        const zv = Pv.get(vv);
        return "string" === typeof zv ? zv : vv
      }))
    }

    function fz(vv, zv) {
      var Pv;
      const hv = null !== (Pv = vv.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== Pv ? Pv : [];
      let Sv = 0;
      const ev = () => hv[Sv],
        gv = () => hv[Sv++],
        pv = vv => {
          const Pv = /^\d/.test(vv) ? vv : zv.get(vv);
          return "string" === typeof Pv ? parseInt(Pv) : Number.NaN
        },
        dv = () => {
          const vv = gv();
          if ("!" === vv) return !dv();
          if ("(" === vv) {
            const vv = lv();
            return gv(), vv
          }
          if ("defined" === vv) {
            const vv = "(" === ev();
            vv && gv();
            const Pv = gv();
            return vv && gv(), zv.has(Pv)
          }
          const Pv = ev();
          if ("==" === Pv || "!=" === Pv || ">" === Pv || "<" === Pv || ">=" === Pv || "<=" === Pv) {
            gv();
            const zv = pv(vv),
              hv = pv(gv());
            if (Number.isNaN(zv) || Number.isNaN(hv)) return !1;
            switch (Pv) {
              case "==":
                return zv === hv;
              case "!=":
                return zv !== hv;
              case ">":
                return zv > hv;
              case "<":
                return zv < hv;
              case ">=":
                return zv >= hv;
              default:
                return zv <= hv
            }
          }
          return zv.has(vv)
        },
        Nv = () => {
          let vv = dv();
          for (;
            "&&" === ev();) {
            gv();
            const zv = dv();
            vv = vv && zv
          }
          return vv
        },
        lv = () => {
          let vv = Nv();
          for (;
            "||" === ev();) {
            gv();
            const zv = Nv();
            vv = vv || zv
          }
          return vv
        },
        Tv = lv();
      if (Sv !== hv.length) throw new Error(`Cannot evaluate #if ${vv}`);
      return Tv
    }
    var Fz = Pv(36676),
      Yz = Pv(37013),
      nz = Pv(37022),
      Oz = Pv(40176),
      Dz = Pv(38288);
    const Kz = 32,
      Vz = [10, 3, 10],
      Uz = [21, 7, 21],
      Rz = Uz[0] * Uz[1] * Uz[2],
      xz = 0,
      tz = 1,
      qz = 2,
      Iz = 3,
      Qz = 64,
      Zz = 512,
      Az = 4 * Rz,
      Lz = 1536,
      Hz = Az + Rz * Lz,
      Mz = 1073741824,
      yz = Hz + 1;

    function Bz(vv, zv) {
      const Pv = vv % zv;
      return Pv < 0 ? Pv + zv : Pv
    }

    function Jz(vv, zv, Pv) {
      return hv = Bz(vv, Uz[0]), Sv = Bz(zv, Uz[1]), ev = Bz(Pv, Uz[2]), hv + Uz[0] * (Sv + Uz[1] * ev);
      var hv, Sv, ev
    }

    function Ez(vv, zv, Pv) {
      return vv + 8 * (zv + 8 * Pv)
    }

    function oz(vv, zv, Pv) {
      return vv + 4 * (zv + 4 * Pv)
    }
    const bz = 65535,
      rz = 0,
      kz = 1,
      Xz = 2,
      uz = 3;

    function vP(vv) {
      return Math.ceil(vv * vv / 32)
    }
    const zP = 8192,
      PP = 1 << 18,
      hP = 65536,
      SP = 294912,
      eP = 128,
      gP = 4096,
      pP = 16,
      dP = 16385,
      NP = 81921,
      lP = 147457,
      TP = 4194304;
    const WP = [0, 0, 0],
      wP = [0, 0, 0];

    function aP(vv, zv, Pv, hv) {
      ! function(vv, zv, Pv) {
        const [hv, Sv, ev] = [vv[0], vv[1], vv[2]];
        let gv, pv, dv;
        Math.abs(Sv) < .99 ? (gv = ev, pv = 0, dv = -hv) : (gv = -Sv, pv = hv, dv = 0);
        const Nv = Math.hypot(gv, pv, dv);
        zv[0] = gv / Nv, zv[1] = pv / Nv, zv[2] = dv / Nv, Pv[0] = Sv * zv[2] - ev * zv[1], Pv[1] = ev * zv[0] - hv * zv[2], Pv[2] = hv * zv[1] - Sv * zv[0]
      }(hv, WP, wP);
      const Sv = 1 / 32;
      for (const [ev, gv] of [
          [0, WP],
          [4, wP]
        ]) {
        for (let Pv = 0; Pv < 3; Pv++) vv[zv + ev + Pv] = gv[Pv] * Sv;
        vv[zv + ev + 3] = -(gv[0] * Pv[0] + gv[1] * Pv[1] + gv[2] * Pv[2]) * Sv
      }
    }
    class sP {
      constructor() {
        this.words = new Uint32Array(lP), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      dw(vv, zv) {
        this.parts = 0, this.refs = 0, this.view = vv, this.viewAt = zv;
        const Pv = vv[zv + 1] * vv[zv + 6] - vv[zv + 2] * vv[zv + 5],
          hv = vv[zv + 2] * vv[zv + 4] - vv[zv] * vv[zv + 6],
          Sv = vv[zv] * vv[zv + 5] - vv[zv + 1] * vv[zv + 4],
          ev = Math.hypot(Pv, hv, Sv) || 1;
        this.light[0] = Pv / ev, this.light[1] = hv / ev, this.light[2] = Sv / ev
      }
      add(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= gP || ! function(vv, zv, Pv) {
            const hv = vv[zv],
              Sv = vv[zv + 1],
              ev = vv[zv + 2],
              gv = vv[zv + 3],
              pv = vv[zv + 4],
              dv = vv[zv + 5],
              Nv = vv[zv + 6],
              lv = vv[zv + 7],
              Tv = vv[zv + 8],
              Wv = vv[zv + 9],
              wv = vv[zv + 10],
              av = vv[zv + 11],
              sv = vv[zv + 12],
              Cv = vv[zv + 13],
              iv = vv[zv + 14],
              cv = vv[zv + 15],
              Gv = hv * dv - Sv * pv,
              mv = hv * Nv - ev * pv,
              jv = hv * lv - gv * pv,
              fv = Sv * Nv - ev * dv,
              Fv = Sv * lv - gv * dv,
              Yv = ev * lv - gv * Nv,
              nv = Tv * Cv - Wv * sv,
              Ov = Tv * iv - wv * sv,
              Dv = Tv * cv - av * sv,
              Kv = Wv * iv - wv * Cv,
              Vv = Wv * cv - av * Cv,
              Uv = wv * cv - av * iv,
              Rv = Gv * Uv - mv * Vv + jv * Kv + fv * Dv - Fv * Ov + Yv * nv;
            if (!(Math.abs(Rv) > 1e-12)) return !1;
            const xv = 1 / Rv;
            return Pv[0] = (dv * Uv - Nv * Vv + lv * Kv) * xv, Pv[1] = (ev * Vv - Sv * Uv - gv * Kv) * xv, Pv[2] = (Cv * Yv - iv * Fv + cv * fv) * xv, Pv[3] = (wv * Fv - Wv * Yv - av * fv) * xv, Pv[4] = (Nv * Dv - pv * Uv - lv * Ov) * xv, Pv[5] = (hv * Uv - ev * Dv + gv * Ov) * xv, Pv[6] = (iv * jv - sv * Yv - cv * mv) * xv, Pv[7] = (Tv * Yv - wv * jv + av * mv) * xv, Pv[8] = (pv * Vv - dv * Dv + lv * nv) * xv, Pv[9] = (Sv * Dv - hv * Vv - gv * nv) * xv, Pv[10] = (sv * Fv - Cv * jv + cv * Gv) * xv, Pv[11] = (Wv * jv - Tv * Fv - av * Gv) * xv, Pv[12] = (dv * Ov - pv * Kv - Nv * nv) * xv, Pv[13] = (hv * Kv - Sv * Ov + ev * nv) * xv, Pv[14] = (Cv * mv - sv * fv - iv * Gv) * xv, Pv[15] = (Tv * fv - Wv * mv + wv * Gv) * xv, !0
          }(zv, Pv, this.inverse)) return;
        const {
          view: hv,
          viewAt: Sv
        } = this, ev = Pv;
        let gv = 1 / 0,
          pv = 1 / 0,
          dv = -1 / 0,
          Nv = -1 / 0,
          lv = -1 / 0;
        const [Tv, Wv, wv] = this.light;
        for (let jv = 0; jv < 8; jv++) {
          const Pv = 1 & jv ? vv.hi[0] : vv.lo[0],
            av = 2 & jv ? vv.hi[1] : vv.lo[1],
            sv = 4 & jv ? vv.hi[2] : vv.lo[2],
            Cv = Pv * zv[ev] + av * zv[ev + 4] + sv * zv[ev + 8] + zv[ev + 12],
            iv = Pv * zv[ev + 1] + av * zv[ev + 5] + sv * zv[ev + 9] + zv[ev + 13],
            cv = Pv * zv[ev + 2] + av * zv[ev + 6] + sv * zv[ev + 10] + zv[ev + 14],
            Gv = hv[Sv] * Cv + hv[Sv + 1] * iv + hv[Sv + 2] * cv + hv[Sv + 3],
            mv = hv[Sv + 4] * Cv + hv[Sv + 5] * iv + hv[Sv + 6] * cv + hv[Sv + 7];
          gv = Math.min(gv, Gv), pv = Math.min(pv, mv), dv = Math.max(dv, Gv), Nv = Math.max(Nv, mv), lv = Math.max(lv, Tv * Cv + Wv * iv + wv * cv)
        }
        if (dv < -1 || Nv < -1 || gv >= 1 || pv >= 1) return;
        const av = this.parts++,
          sv = this.rects;
        sv[4 * av] = CP(gv), sv[4 * av + 1] = CP(pv), sv[4 * av + 2] = CP(dv), sv[4 * av + 3] = CP(Nv);
        const Cv = this.inverse,
          {
            cell: iv,
            dims: cv,
            lo: Gv
          } = vv,
          mv = NP + av * pP;
        for (let jv = 0; jv < 3; jv++) this.floats[mv + 4 * jv] = Cv[jv] / iv, this.floats[mv + 4 * jv + 1] = Cv[4 + jv] / iv, this.floats[mv + 4 * jv + 2] = Cv[8 + jv] / iv, this.floats[mv + 4 * jv + 3] = (Cv[12 + jv] - Gv[jv]) / iv;
        this.words[mv + 12] = vv.at, this.floats[mv + 13] = lv + .001 * (1 + Math.abs(lv)), this.words[mv + 14] = cv[0] | cv[1] << 8 | cv[2] << 16
      }
      finish() {
        const vv = eP,
          {
            counts: zv,
            rects: Pv,
            words: hv
          } = this;
        zv.fill(0);
        let Sv = 0,
          ev = 0;
        for (; ev < this.parts; ev++) {
          const hv = 4 * ev,
            gv = (Pv[hv + 2] - Pv[hv] + 1) * (Pv[hv + 3] - Pv[hv + 1] + 1);
          if (Sv + gv > 65536) break;
          Sv += gv;
          for (let Sv = Pv[hv + 1]; Sv <= Pv[hv + 3]; Sv++)
            for (let ev = Pv[hv]; ev <= Pv[hv + 2]; ev++) zv[Sv * vv + ev]++
        }
        let gv = 0;
        for (let dv = 0; dv < 16384; dv++) hv[dv] = gv, gv += zv[dv], zv[dv] = hv[dv];
        hv[16384] = gv;
        for (let dv = 0; dv < ev; dv++) {
          const Sv = 4 * dv;
          for (let ev = Pv[Sv + 1]; ev <= Pv[Sv + 3]; ev++)
            for (let gv = Pv[Sv]; gv <= Pv[Sv + 2]; gv++) hv[dP + zv[ev * vv + gv]++] = dv
        }
        const pv = this.floats;
        for (let dv = 0; dv < 16384; dv++) {
          const vv = dP + hv[dv],
            zv = vv + Math.min(hv[dv + 1] - hv[dv], 64);
          for (let Pv = vv + 1; Pv < zv; Pv++) {
            const zv = hv[Pv],
              Sv = pv[81934 + zv * pP];
            let ev = Pv - 1;
            for (; ev >= vv && pv[81934 + hv[ev] * pP] < Sv; ev--) hv[ev + 1] = hv[ev];
            hv[ev + 1] = zv
          }
        }
        this.refs = Sv
      }
    }

    function CP(vv) {
      return Math.min(127, Math.max(0, Math.floor((.5 * vv + .5) * eP)))
    }

    function iP(vv, zv, Pv, hv, Sv) {
      for (let ev = 0; ev < 4; ev++)
        for (let gv = 0; gv < 4; gv++) Sv[4 * ev + gv] = vv[zv + 4 * ev] * Pv[hv + gv] + vv[zv + 4 * ev + 1] * Pv[hv + 4 + gv] + vv[zv + 4 * ev + 2] * Pv[hv + 8 + gv] + vv[zv + 4 * ev + 3] * Pv[hv + 12 + gv]
    }

    function cP(vv, zv, Pv, hv, Sv) {
      const ev = vv[0] - zv,
        gv = vv[1] - Pv,
        pv = vv[2] - hv,
        dv = vv[3] - zv,
        Nv = vv[4] - Pv,
        lv = vv[5] - hv,
        Tv = vv[6] - zv,
        Wv = vv[7] - Pv,
        wv = vv[8] - hv;
      if (Math.min(ev, dv, Tv) > Sv || Math.max(ev, dv, Tv) < -Sv) return !1;
      if (Math.min(gv, Nv, Wv) > Sv || Math.max(gv, Nv, Wv) < -Sv) return !1;
      if (Math.min(pv, lv, wv) > Sv || Math.max(pv, lv, wv) < -Sv) return !1;
      const av = dv - ev,
        sv = Nv - gv,
        Cv = lv - pv,
        iv = Tv - dv,
        cv = Wv - Nv,
        Gv = wv - lv,
        mv = sv * Gv - Cv * cv,
        jv = Cv * iv - av * Gv,
        fv = av * cv - sv * iv;
      if (Math.abs(mv * ev + jv * gv + fv * pv) > Sv * (Math.abs(mv) + Math.abs(jv) + Math.abs(fv))) return !1;
      const Fv = [av, sv, Cv, iv, cv, Gv, ev - Tv, gv - Wv, pv - wv];
      for (let Yv = 0; Yv < 3; Yv++) {
        const vv = Fv[3 * Yv],
          zv = Fv[3 * Yv + 1],
          Pv = Fv[3 * Yv + 2];
        for (let hv = 0; hv < 3; hv++) {
          const av = 0 === hv ? 0 : 1 === hv ? Pv : -zv,
            sv = 0 === hv ? -Pv : 1 === hv ? 0 : vv,
            Cv = 0 === hv ? zv : 1 === hv ? -vv : 0,
            iv = av * ev + sv * gv + Cv * pv,
            cv = av * dv + sv * Nv + Cv * lv,
            Gv = av * Tv + sv * Wv + Cv * wv,
            mv = Sv * (Math.abs(av) + Math.abs(sv) + Math.abs(Cv));
          if (Math.min(iv, cv, Gv) > mv || Math.max(iv, cv, Gv) < -mv) return !1
        }
      }
      return !0
    }
    const GP = new Float32Array(1);
    new Uint32Array(GP.buffer);
    var mP = Pv(38295);

    function jP(vv) {
      const [zv, Pv, hv] = mP.t;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${vv.group}) @binding(${vv.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${zv-1}, ${Pv-1}, ${hv-1});\n}\n`
    }

    function fP(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Sv, ev, gv] = Uz, [pv, dv, Nv] = Vz, lv = Math.log2(Kz), Tv = hv ? "var<private> bloxdSpCrossed: bool;\n" : "", Wv = hv ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${vv.group}) @binding(${vv.fW}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${vv.group}) @binding(${vv.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${Pv?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Tv}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${kz}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${Xz}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${Pv?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${uz}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Sv}, ${ev}, ${gv});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Sv} * (s.y + ${ev} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${pv}, ${dv}, ${Nv}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${lv}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Iz}u) {\n\t\treturn named && state == ${qz}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${Az}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Hz}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${zv?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${zv?`\t\tif (exits && step > 0 && step % ${nP} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${lv}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${xz}u || kind == ${tz}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${qz}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${Az}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Wv}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const FP = {
      group: 0,
      uniform: 0,
      fW: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function YP() {
      const vv = FP;
      return `${jP(vv)}${fP(vv,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${mP.c}>,\n}\n@group(${vv.group}) @binding(${vv.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${vv.group}) @binding(${vv.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${mP.n})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${mP.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${mP.f}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const nP = 2;
    const OP = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function DP(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const hv = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${zv.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Sv = "trace" === Pv || "lit" === Pv,
        ev = "maskEdge" === Pv ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        gv = Sv ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${zv.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${zv.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===Pv?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${ev};\n`;
      return `${hv}${vv.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Sv?function(){const[vv,zv,Pv]=mP.t;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${vv}.0, ${zv}.0, ${Pv}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${gv}}\n`:""}${vv.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${zv.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${zv.renderOffset});\n}\n`:""}`
    }
    const KP = "bloxdSpOwnTexture";

    function VP(vv) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${vv.texture}) - 1u)))`
    }
    const UP = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${dz.d.map((vv=>{let[zv,Pv]=vv;return`\tbloxdSpOut.${zv} = (bloxdSpWord & ${Pv}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function RP(vv) {
      return `bloxdSpFlags(${vv})`
    }
    const xP = `${Oz.j}.eyePosition`;

    function tP(vv, zv, Pv, hv, Sv) {
      const ev = vv.indexOf(zv);
      if (ev < 0 || vv.indexOf(zv, ev + 1) >= 0) throw new Error(`Lite's ${Sv} program changed at the shader pack ${hv} hook: ${ev<0?"no":"more than one"} anchor (lite/${Sv}ShaderPack.ts)`);
      return vv.slice(0, ev) + Pv + vv.slice(ev + zv.length)
    }

    function qP(vv) {
      return vv.sunShadow || vv.airShadow
    }

    function IP(vv, zv) {
      return zv && qP(vv)
    }
    const QP = {
      group: Oz.d,
      ...Oz.p
    };

    function ZP(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!qP(vv)) return "";
      if (zv) {
        const zv = QP,
          Sv = "trace" === Pv || "lit" === Pv;
        let ev = "";
        vv.sunShadow && (ev = Sv ? `${fP(zv,!0,"lit"===Pv)}${hv=zv,`@group(${hv.group}) @binding(${hv.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${hv.group}) @binding(${hv.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(vv, zv, Pv) {
          const hv = `@group(${vv}) @binding(${zv}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return Pv ? `${hv}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${OP}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((vv=>`\t{\n\t\tlet o = vec2i(${vv});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : hv
        }(zv.group, Oz.r, "maskEdge" === Pv));
        const gv = {
          shadowDirection: `${Oz.j}.shadowDirection`,
          renderOffset: `${Oz.j}.renderOffset`,
          eyePosition: `${Oz.j}.eyePosition`
        };
        return `${jP(zv)}${ev}${function(vv){const[zv,Pv,hv]=mP.t;return`@group(${vv.group}) @binding(${vv.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${vv.group}) @binding(${vv.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${zv}.0, ${Pv}.0, ${hv}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(zv)}${DP(vv,gv,Pv)}`
      }
      var hv;
      return `${vv.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${vv.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function AP(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!zv) return "";
      const ev = (gv = "fragmentInputs.vPositionW", pv = vv.sunShadow ? {
        normal: Pv,
        flags: hv
      } : null, `\n\tbloxdSpShadowPosition = ${gv};\n${pv?`\tbloxdSpShadowNormal = normalize(${pv.normal});\n\tbloxdSpShadowEmissive = (${pv.flags} & ${dz.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${pv.flags} & ${dz.e}u) != 0u;\n`:""}`);
      var gv, pv;
      return vv.sunShadow && ("mask" === Sv || "maskEdge" === Sv) ? `${ev}${dv="fragmentInputs.position",Nv="maskEdge"===Sv,`\n\tbloxdSpShadowPixel = vec2i(${dv}.xy);\n${Nv?`\tbloxdSpShadowZ = ${dv}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${dv}.z), dpdy(${dv}.z));\n`:""}`}` : ev;
      var dv, Nv
    }
    const LP = "bloxdSpTextureRotation",
      HP = "bloxdSpTextureLayers",
      MP = `@group(${Oz.d}) @binding(${Oz.s}) var<storage, read> ${HP}: array<u32>;\n`;

    function yP(vv) {
      return `\tvertexOutputs.vPackTexture = ${HP}[min(u32(${vv}), arrayLength(&${HP}) - 1u)];\n`
    }

    function BP(vv) {
      return void 0 !== vv.uv
    }

    function JP(vv) {
      if (!vv) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (BP(vv)) return function(vv) {
        const {
          texture: zv,
          cells: Pv,
          layers: hv
        } = vv, Sv = `textureDimensions(${zv}, bloxdSpLevel)`, ev = Pv ? `max(vec2u(vec2f(${Sv}) / ${Pv}), vec2u(1u))` : Sv, gv = Pv ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${ev};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${Pv}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${Pv}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${zv}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Sv} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${ev};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${zv}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let pv;
        if (Pv)
          if (1 === hv.length) pv = `\treturn bloxdSpOwnTexel(${hv[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const vv = hv.length - 1;
            pv = `\tvar bloxdSpColour = bloxdSpOwnTexel(${hv[vv]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let zv = vv - 1; zv >= 0; zv--) pv += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${hv[zv]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            pv += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else pv = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${vv.id?`var<private> ${KP}: u32;\n`:""}${gv}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${VP(vv)};\n\treturn ${ev};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${vv.id?KP:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${VP(vv)};\n${pv}}\n`
      }(vv);
      const zv = vv,
        Pv = vv => {
          const Pv = vv > 0 ? `bloxdSpLayer - ${zv.layers*vv}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${vv}, ${zv.sampler}, bloxdSpTurned, ${Pv}, round(bloxdSpMipLevel));`
        };
      let hv = "";
      for (let ev = 0; ev < zv.count - 1; ev++) hv += `\tif (bloxdSpLayer < ${zv.layers*(ev+1)}u) {\n\t\t${Pv(ev)}\n\t}\n`;
      const Sv = zv.frame ? `${zv.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${LP}: u32;\n${MP}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${LP} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${LP} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${LP} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Sv}${hv}\t${Pv(zv.count-1)}\n}\n`
    }

    function EP(vv, zv, Pv) {
      return !!vv.surface && "bloxdDefaultSurface" !== vv.surface && function(vv, zv) {
        return "liquid" === zv || !vv
      }(zv, Pv)
    }

    function oP(vv, zv) {
      return vv.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${zv.vertexLocalPosition}, ${RP(zv.vertexFlags)});\n\t\tlet bloxdSpVertex = ${vv.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function bP(vv, zv, Pv, hv, Sv) {
      if (!vv.surface) return "";
      const ev = (vv, zv) => `\n\tlet bloxdSpTexelUV = ${vv};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${zv}) - 1u));`;
      let gv = "",
        pv = "0u, 0u, vec2f(0.0), 0.0";
      const dv = hv && BP(hv) ? hv : null,
        Nv = hv && !BP(hv) ? hv : null;
      if (dv) {
        gv = `${dv.id?`\n\tlet bloxdSpTexture = ${dv.id};\n\t${KP} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${dv.uv};${ev(function(vv,zv){var Pv;return`${null!==(Pv=vv.levelUv)&&void 0!==Pv?Pv:vv.cells?`${zv} / ${vv.cells}`:zv} * vec2f(textureDimensions(${vv.texture}))`}(dv,"bloxdSpUv"),dv.texture)}`, pv = (dv.id ? `${KP}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Nv && (gv = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${LP} = bloxdSpTexture >> 16u;${ev(`fragmentInputs.vMainUV1 * ${(0,Fz.gb)(Nv.width)}`,"textureAtlas0")}`, pv = `bloxdSpTexture & 0xffffu, ${LP}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const lv = Sv.overlayColour,
        Tv = lv ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Wv = "bloxdDefaultSurface" !== vv.surface || lv ? `\n\tbaseColor = vec4f(${Tv}, baseColor.a);` : "",
        wv = EP(vv, zv, Pv) ? `\n\t${Sv.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${gv}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Sv.alpha}, ${Sv.enchantTier}, ${Sv.enchantColour}, ${Sv.enchantSpeed}, ${null!==lv&&void 0!==lv?lv:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Sv.normal}, ${Sv.localPosition}, ${RP(Sv.flags)}, ${pv});\n\tlet bloxdSpSurface = ${vv.surface}(bloxdSpSurfaceIn);${Wv}${wv}\n`
    }
    const rP = "bloxdSpLightIn";

    function kP(vv, zv, Pv, hv) {
      if (!vv.light) return "";
      const Sv = zv ? `${Fz.j}.rgb, ${Fz.j}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Fz.g}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: ev,
          diffuse: gv,
          emissive: pv,
          ambient: dv,
          fogColour: Nv,
          fogAlpha: lv,
          normal: Tv
        } = hv;
      return `\tvar ${rP} = BloxdLightIn(vec3f(0.0), ${Pv?ev:"0.0"}, ${gv}, ${pv}, ${dv}, ${Sv}, ${Nv}, ${lv}, fragmentInputs.vPositionW, ${Tv}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${rP}.litColour = bloxdLitColour(bloxdSpSurface, ${rP});\n`
    }

    function XP(vv) {
      return vv.light ? `\n\t{\n\t\tlet bloxdSpLight = ${vv.light}(bloxdSpSurface, ${rP});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const uP = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      vh = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      zh = "\treturn color;\n}",
      Ph = {
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
    const hh = Object.freeze({});

    function Sh(vv) {
      var zv;
      return !(null === (zv = (0, Dz.g)(vv)) || void 0 === zv || !zv.sceneDepth)
    }

    function eh(vv) {
      const zv = (0, Dz.g)(vv);
      return !!zv && EP(zv.hooks, zv.strict, zv.program)
    }

    function gh(vv, zv, Pv, hv) {
      return tP(vv, zv, Pv, hv, "terrain")
    }

    function ph(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const ev = function(vv) {
          return (0, Dz.c)(vv.packVariant, vv.liquid ? "liquid" : "terrain")
        }(vv),
        {
          hooks: gv
        } = ev,
        pv = IP(ev, hv),
        dv = "edge" === Sv ? "maskEdge" : "plain" === Sv ? "mask" : "trace",
        Nv = oP(gv, Ph);
      Nv && (zv = gh(zv, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Nv}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const lv = "atlas" === vv.texture ? {
          count: vv.atlasCount,
          layers: vv.atlasLayers,
          width: vv.gJ,
          sampler: "atlasSampler",
          frame: vv.animated ? Pv : null
        } : null,
        Tv = `${ev.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${AP(ev,pv,Ph.normal,Ph.flags,dv)}${bP(gv,ev.strict,ev.program,lv,Ph)}`;
      Tv && (zv = gh(zv, uP, `${uP.slice(0,-1)}${Tv}`, "surface"));
      const Wv = XP(gv);
      return Wv && (zv = gh(zv, vh, `${kP(gv,vv.lighting,vv.dirLightCount>0,Ph)}${vh}`, "light input"), zv = gh(zv, zh, `${Wv.slice(1)}${zh}`, "light")), `${(0,Oz.z)()}${ev.sceneDepth?`@group(${Oz.d}) @binding(${Oz.n}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${xP};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${ZP(ev,pv,dv)}${JP(lv)}${UP}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${ev.code}${zv}`
    }
    const dh = fv.d.WGSL;

    function Nh(vv) {
      return void 0 !== vv.packVariant
    }
    const lh = {
        kPv: 0,
        uPv: 4,
        vhv: 8,
        zhv: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Th = lh.aoLevels + 4,
      Wh = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      wh = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      ah = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      sh = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Ch = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      ih = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      ch = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      Gh = 0,
      mh = 3,
      jh = 4,
      fh = 5,
      Fh = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${Yz.d}, ${Yz.d}, corner == 0u || corner == 3u);\n\tlet dv = select(-${Yz.d}, ${Yz.d}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      Yh = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((vv=>nz.e>>vv&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const nh = {
      MT: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: vv => `animDataPerTex[${vv}]`
    };

    function Oh(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nh;
      return `\n\tlet atlasIdxIn = ${vv};\n\tlet animTick = ${Pv.MT};\n\tlet animTickStride = ${Pv.stride};\n\tlet numAnimTextures = ${Pv.count};\n\t${(0,Fv.c)(fv.d.WGSL,Pv.perTexture)}\n\t${zv}animLayer;\n`
    }

    function Dh(vv) {
      const zv = (zv, Pv) => {
        const hv = zv > 0 ? `fragmentInputs.texAtlasIndex - ${vv.atlasLayers.toFixed(1)} * ${zv.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${Pv?"textureSampleLevel":"textureSample"}(textureAtlas${zv}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${hv}))${Pv?", atlasLod":""})`
      };
      if (1 === vv.atlasCount) return `baseColor = ${zv(0,!1)};`;
      let Pv = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Fz.gb)(vv.gJ)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let hv = 0; hv < vv.atlasCount; hv++) {
        const Sv = vv.atlasLayers * (hv + 1) - .5;
        Pv += `${hv>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Fz.gb)(Sv)}) {\n\t\tbaseColor = ${zv(hv,!0)};\n\t}`
      }
      return Pv
    }

    function Kh(vv) {
      return `terrain-${vv.texture}${"atlas"===vv.texture?vv.atlasCount:""}${vv.animated?"-anim":""}${vv.alphaTest?"-test":""}${vv.lighting?"-lit":""}-dir${vv.dirLightCount}${vv.packed?"-packed":""}${Nh(vv)?`-sp${vv.packVariant}`:""}${vv.liquid?"-liquid":""}${vv.resting?"-rest":""}`
    }

    function Vh(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const hv = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const Pv = "none" !== vv.texture,
          hv = "atlas" === vv.texture,
          Sv = vv.dirLightCount > 0,
          ev = Nh(vv);
        if (vv.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${vv.dirLightCount}`);
        let gv = 1,
          pv = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (hv) {
          vv.animated && (pv += `@group(2) @binding(${gv++}) var<storage, read> animDataPerTex: array<f32>;\n`), pv += `@group(2) @binding(${gv++}) var atlasSampler: sampler;\n`;
          for (let zv = 0; zv < vv.atlasCount; zv++) pv += `@group(2) @binding(${gv++}) var textureAtlas${zv}: texture_2d_array<f32>;\n`
        } else "single" === vv.texture && (pv += `@group(2) @binding(${gv++}) var diffuseSamplerSampler: sampler;\n`, pv += `@group(2) @binding(${gv++}) var diffuseSampler: texture_2d<f32>;\n`);
        const dv = function(vv) {
            const zv = ch,
              Pv = "none" !== vv.texture,
              hv = "atlas" === vv.texture,
              Sv = Nh(vv);
            return vv.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${Pv?"uv: vec2f,":""}\n\t${hv?"texAtlasIndices: f32,":""}\n\t${vv.lighting?"aPackedLightLevels: f32,":""}\n\t${Sv?"blockFlagWords: vec2u,":""}\n}\n${Fh}\n${Yh}\n${"single"===vv.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${Pv?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===vv.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${hv?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${vv.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Sv?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${zv.position}) position: vec3f,\n\t@location(${zv.normal}) normal: vec4f,\n\t@location(${zv.color}) color: vec4f,\n\t${Pv?`@location(${zv.uv}) uv: vec2f,`:""}\n\t${vv.lighting?`@location(${zv.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Sv?`@location(${zv.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(vv),
          Nv = `\n${sh}\n${wh}\n${ah}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${pv}\n${bv}\n${dv.declarations}\nstruct Varyings {\n\t${"none"===zv?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${vv.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Sv?"@location(5) vTerrainLambert: f32,":""}\n\t${Pv?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${hv?"@location(7) texAtlasIndex: f32,":""}\n\t${vv.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${ev?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${ev&&hv?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${vv.resting?"":(0,Fz.q)(dh)}\n${ih}\n\n@vertex\nfn mainVertex(${dv.parameter}) -> Varyings {\n\t${dv.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${ev?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${dz.c.placed}u;`:""}\n\t${ev&&hv?yP("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${vv.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${Pv?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${hv?function(vv){return vv?Oh("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(vv.animated):""}\n\t${"single"===vv.texture&&vv.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Fz.X)(dh)}\n\t${(0,Fz.G)(dh,vv.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${vv.resting?"":Ch}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${hv?Dh(vv):""}\n\t${"single"===vv.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Pv?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${vv.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Sv?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${ov}));\n\t${Nh(vv)?(0,Fz.bb)(fv.d.WGSL):(0,Fz.P)(dh)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          lv = new Set;
        vv.lighting && lv.add("BLOXD_LIGHTING");
        Sv && lv.add("BLOXD_TERRAIN_DIRECTIONAL");
        return mz(Nv, new Map([...lv].map((vv => [vv, !0]))))
      }(vv, Pv);
      if (!Nh(vv)) return hv;
      const Sv = ph(vv, hv, Oh, zv, Pv);
      return "none" === Pv ? Sv : `${Sv}${function(vv){const zv="none"!==vv.texture&&vv.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${vv.resting?"":Ch}\n\t${vv.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${zv&&"atlas"===vv.texture?Dh(vv):""}\n\t${zv&&"single"===vv.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${zv?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${dz.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(vv)}`
    }
    const Uh = new Map([
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

    function Rh(vv, zv) {
      const Pv = new Map;
      let hv = 0;
      const Sv = [],
        ev = [],
        gv = [];
      for (const Nv of zv) {
        var pv, dv;
        const zv = null !== (pv = Nv.type.trim().split(/\s+/).pop()) && void 0 !== pv ? pv : Nv.type,
          lv = Uh.get(zv);
        if (!lv) throw new Error(`Lite: no uniform layout for ${Nv.name}: ${Nv.type}`);
        const Tv = null !== (dv = Nv.arraySize) && void 0 !== dv ? dv : 0,
          Wv = Tv ? 4 : lv.align;
        hv = Math.ceil(hv / Wv) * Wv;
        const wv = Tv ? 4 * Math.ceil(lv.floats / 4) : lv.floats;
        if (Pv.set(Nv.name, {
            offset: hv,
            floats: lv.floats,
            arraySize: Tv,
            stride: wv
          }), Tv && lv.floats <= 2) {
          const zv = `${vv}_${gv.length}_strided`;
          ev.push(`struct ${zv} {\n\t@size(16) el: ${lv.wgsl},\n}`), gv.push(Nv.name), Sv.push(`\t@align(16) ${Nv.name}: array<${zv}, ${Tv}>,`)
        } else Tv ? Sv.push(`\t@align(16) ${Nv.name}: array<${lv.wgsl}, ${Tv}>,`) : Sv.push(`\t${Nv.name}: ${lv.wgsl},`);
        hv += Tv ? wv * Tv : lv.floats
      }
      return {
        slots: Pv,
        floats: Math.max(4, 4 * Math.ceil(hv / 4)),
        wgsl: `${ev.join("\n")}\nstruct ${vv} {\n${Sv.join("\n")}\n}\n`,
        stridedArrays: gv
      }
    }
    const xh = [{
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
      th = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      qh = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function Ih(vv, zv) {
      return `#if defined(${vv}) && ${vv}DIRECTUV == 0\nvarying v${zv}UV: vec2f;\n#endif`
    }

    function Qh(vv, zv, Pv) {
      return `#if defined(${vv}) && ${vv}DIRECTUV == 0\nif (uniforms.v${zv}Infos.x==0.)\n{vertexOutputs.v${zv}UV= (uniforms.${Pv}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${zv}UV= (uniforms.${Pv}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Zh(vv, zv, Pv) {
      return `#ifdef ${vv}\n#if ${vv}DIRECTUV == 1\n#define v${zv}UV vMainUV1\n#elif ${vv}DIRECTUV == 2\n#define v${zv}UV vMainUV2\n#else\nvarying v${zv}UV: vec2f;\n#endif\nvar ${Pv}SamplerSampler: sampler;\nvar ${Pv}Sampler: texture_2d<f32>;\n#endif`
    }
    const Ah = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      Lh = 256,
      Hh = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      Mh = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      yh = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      Bh = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      Jh = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      Eh = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      oh = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      bh = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Mh}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${Ih("OPACITY","Opacity")}\n${Ih("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${oh}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${yh}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${Qh("OPACITY","Opacity","opacity")}\n${Qh("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Bh}\n#define CUSTOM_VERTEX_MAIN_END\n${Jh}\n}\n`;
    const rh = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Zh("OPACITY","Opacity","opacity")}\n${Zh("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${oh}\n${Eh}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((vv,zv)=>function(vv){const zv=`
    frame.lights[LITE_LIGHT$ {
        vv
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      vv
    }\
    nvar diffuse$ {
      vv
    }: vec4f = $ {
      zv
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      vv
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      zv
    }.vLightData, diffuse$ {
      vv
    }.rgb, $ {
      zv
    }.vLightSpecular.rgb, diffuse$ {
      vv
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(zv))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, kh = /^([gimus]+)!/, Xh = new Set;

    function uh(vv) {
      Xh.has(vv) || (Xh.add(vv), console.warn(`Lite: no place for plugin code at ${vv} in the standard shader: it is left out`))
    }

    function vS(vv, zv) {
      let Pv = vv;
      const hv = new Map;
      for (const [ev, gv] of zv) {
        var Sv;
        hv.set(ev, `${null!==(Sv=hv.get(ev))&&void 0!==Sv?Sv:""}${gv}\n`)
      }
      for (const [ev, gv] of hv) {
        if (!ev.startsWith("!")) {
          const vv = `#define ${ev}`;
          if (!Pv.includes(vv)) {
            uh(ev);
            continue
          }
          Pv = Pv.replace(vv, (() => `\n${gv}\n${vv}`));
          continue
        }
        let vv = ev.substring(1),
          zv = "g";
        if (vv.startsWith("!")) zv = "", vv = vv.substring(1);
        else {
          const Pv = kh.exec(vv);
          Pv && (zv = Pv[1], vv = vv.substring(zv.length + 1))
        }
        const hv = new RegExp(vv, zv.includes("g") ? zv : `${zv}g`);
        let Sv = hv.exec(Pv);
        for (Sv || uh(ev); Sv;) {
          const vv = Sv,
            zv = gv.replace(/\$(\d+)/g, ((zv, Pv) => Number(Pv) < vv.length ? vv[Number(Pv)] : ""));
          Pv = Pv.substring(0, vv.index) + zv + Pv.substring(vv.index + vv[0].length), hv.lastIndex = vv.index + zv.length, Sv = hv.exec(Pv)
        }
      }
      return Pv
    }
    const zS = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      PS = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      hS = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function SS(vv) {
      const zv = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let Pv = vv.replace(zS, ((vv, Pv, hv, Sv, ev, gv) => ("attribute" === Pv ? zv.attributes.push({
        name: ev,
        type: gv
      }) : void 0 === Pv ? zv.varyings.push({
        name: ev,
        type: gv,
        interpolation: gS(gv, hv, Sv)
      }) : zv.uniforms.push({
        name: ev,
        type: eS(gv)
      }), "")));
      return Pv = Pv.replace(PS, ((vv, Pv) => (zv.samplers.add(Pv), ""))), Pv = Pv.replace(hS, ((vv, Pv, hv) => (zv.textures.push({
        name: Pv,
        type: hv
      }), ""))), zv.body = Pv, zv
    }

    function eS(vv) {
      const zv = vv.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        Pv = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(zv);
      if (!Pv) throw new Error(`Lite: unsupported uniform type ${vv}`);
      return Pv
    }

    function gS(vv, zv, Pv) {
      return void 0 === zv && void 0 === Pv ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(vv.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === zv ? "@interpolate(flat) " : `@interpolate(${null!==zv&&void 0!==zv?zv:"perspective"}, ${null!==Pv&&void 0!==Pv?Pv:"center"}) `
    }

    function pS(vv) {
      return TS({
        defines: vv.defines,
        vertex: vS(bh, vv.vertexCode),
        fragment: vS(rh, vv.fragmentCode),
        members: [...xh, ...vv.defines.has("OPACITY") ? th : [], ...vv.defines.has("EMISSIVE") ? qh : [], ...vv.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function dS(vv) {
      const zv = vv.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (zv === vv) throw new Error("Lite: fragment main has no return");
      return zv
    }
    const NS = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Mh}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${yh}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Bh}\n${Jh}\n}\n`,
      lS = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${Eh}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function TS(vv) {
      const zv = vv.defines,
        Pv = SS(mz(vv.vertex, zv)),
        hv = SS(mz(vv.fragment, zv)),
        Sv = new Map;
      for (const Gv of [...Pv.varyings, ...hv.varyings]) Sv.has(Gv.name) || Sv.set(Gv.name, Gv);
      const ev = [...Sv.values()].map(((vv, zv) => `\t@location(${zv}) ${vv.interpolation}${vv.name}: ${vv.type},`)),
        gv = [...vv.members];
      for (const Gv of [...Pv.uniforms, ...hv.uniforms]) gv.some((vv => vv.name === Gv.name)) || gv.push(Gv);
      const pv = Rh(vv.structName, gv),
        dv = [],
        Nv = [];
      let lv = 1;
      const Tv = new Set;
      for (const Gv of [...Pv.textures, ...hv.textures]) {
        if (Tv.has(Gv.name)) continue;
        Tv.add(Gv.name);
        const vv = `${Gv.name}Sampler`,
          zv = lv++,
          Pv = lv++,
          hv = Gv.type.startsWith("texture_2d_array") ? "2d-array" : Gv.type.startsWith("texture_cube") ? "cube" : "2d";
        dv.push({
          name: Gv.name,
          binding: zv,
          samplerBinding: Pv,
          dimension: hv
        }), Nv.push(`@group(2) @binding(${zv}) var ${Gv.name}: ${Gv.type};`), Nv.push(`@group(2) @binding(${Pv}) var ${vv}: sampler;`)
      }
      for (const Gv of [...Pv.samplers, ...hv.samplers])
        if (!Tv.has(Gv.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Gv} has no texture`);
      const Wv = [sh, Hh, pv.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${vv.structName};`, ...Nv].join("\n"),
        wv = Pv.attributes,
        av = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...Pv.attributes.map(((vv, zv) => `\t@location(${zv}) ${vv.name}: ${vv.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        sv = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...ev, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        Cv = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...hv.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...ev, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", bv, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${ov}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        iv = vv => {
          for (const zv of pv.stridedArrays) vv = vv.replace(new RegExp(`\\b${zv}\\s*\\[(.*?)\\]`, "g"), `${zv}[$1].el`);
          return vv
        };
      return {
        vertex: `${Wv}\n${av}\n${sv}\n${iv(Pv.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Wv}\n${Cv}\n${dS((cv=iv(hv.body),cv.includes("fragmentInputs.position")?cv.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):cv))}`,
        attributes: wv,
        material: pv,
        textures: dv
      };
      var cv
    }
    const WS = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      wS = vv => ({
        name: vv,
        type: "vec3"
      }),
      aS = vv => ({
        name: vv,
        type: "float"
      }),
      sS = Rh("EarthSkyUniforms", [wS("viewFrom"), aS("exposureScale"), wS("zenithOffset"), aS("fogOn"), wS("up"), aS("ditherOn"), wS("sun"), aS("turbidity"), wS("tint"), aS("rayleigh"), wS("sunDir"), aS("mieStrength"), wS("inScatterR"), aS("mieFocus"), wS("inScatterM"), aS("sunE"), wS("extinctionBeta"), aS("sunsetMix"), aS("mieScale"), aS("mieBase"), aS("mieSlope"), aS("sunDiscE"), aS("exposure")]),
      CS = `${sh}\n${Hh}\n${sS.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      iS = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${WS.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      cS = `\n${bv}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Cz).map((vv=>{let[zv,Pv]=vv;return`const TONE_${zv}: f32 = ${Pv};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${iz};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${ov}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var GS = Pv(36591);
    const mS = new GS.fa,
      jS = new GS.fa,
      fS = new GS.Quaternion,
      FS = new Float64Array(3),
      YS = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      nS = new Float64Array(16);

    function OS(vv, zv, Pv) {
      const hv = Pv.worldMatrix;
      var Sv;
      vv.updateFloat3("viewFrom", hv[12], hv[13], hv[14]), vv.updateFloatsFrom("zenithOffset", zv.cameraOffset, 0, 3), vv.updateFloatsFrom("up", zv.up, 0, 3), zv.luminance > 0 && (vv.updateFloat("exposure", zv.luminance), vv.updateFloat("exposureScale", (Sv = zv.luminance, Math.log2(2 / Math.pow(Sv, 4))))), vv.updateFloat("turbidity", zv.turbidity), vv.updateFloat("rayleigh", zv.rayleigh), vv.updateFloat("mieStrength", zv.mieCoefficient), vv.updateFloat("mieFocus", zv.mieDirectionalG), vv.updateFloatsFrom("tint", zv.tint, 0, 3), vv.updateFloat("fogOn", zv.fog && Pv.fogEnabled && 0 !== Pv.fogMode ? 1 : 0), vv.updateFloat("ditherOn", zv.dithering ? 1 : 0);
      const ev = zv.sunPosition;
      if (mS.set(ev[0], ev[1], ev[2]), !zv.useSunPosition) {
        const vv = Math.PI * (zv.inclination - .5),
          Pv = 2 * Math.PI * (zv.azimuth - .5);
        mS.set(zv.distance * Math.cos(Pv) * Math.cos(vv), zv.distance * Math.sin(-vv), zv.distance * Math.sin(Pv) * Math.cos(vv)), GS.Quaternion.FromUnitVectorsToRef(GS.fa.UpReadOnly, jS.set(zv.up[0], zv.up[1], zv.up[2]), fS), mS.rotateByQuaternionToRef(fS, mS)
      }
      vv.updateVector3("sun", mS), FS[0] = mS.x, FS[1] = mS.y, FS[2] = mS.z;
      const gv = sz(zv, FS, YS);
      vv.updateFloatsFrom("sunDir", gv.sunDir, 0, 3), vv.updateFloat("sunE", gv.sunE), vv.updateFloatsFrom("inScatterR", gv.inScatterR, 0, 3), vv.updateFloatsFrom("inScatterM", gv.inScatterM, 0, 3), vv.updateFloatsFrom("extinctionBeta", gv.extinctionBeta, 0, 3), vv.updateFloat("sunsetMix", gv.sunsetMix), vv.updateFloat("sunDiscE", gv.sunDiscE), vv.updateFloat("mieScale", gv.mieScale), vv.updateFloat("mieBase", gv.mieBase), vv.updateFloat("mieSlope", gv.mieSlope)
    }

    function DS(vv, zv) {
      const Pv = nS;
      Pv[0] = zv.far, Pv[5] = zv.far, Pv[10] = zv.far, Pv[15] = 1;
      const hv = vv.infiniteDistance;
      for (let Sv = 0; Sv < 3; Sv++) Pv[12 + Sv] = vv.position[Sv] + (hv ? zv.worldMatrix[12 + Sv] : 0);
      return nS
    }
    var KS = Pv(38254);

    function VS(vv) {
      return Math.max(4, 4 * Math.ceil(vv / 4))
    }

    function US(vv, zv, Pv, hv) {
      const Sv = vv.createBuffer({
        label: hv,
        size: VS(zv.byteLength),
        usage: Pv,
        mappedAtCreation: !0
      });
      return new Uint8Array(Sv.getMappedRange(), 0, zv.byteLength).set(new Uint8Array(zv.buffer, zv.byteOffset, zv.byteLength)), Sv.unmap(), Sv
    }

    function RS(vv, zv) {
      return Math.floor(Math.log2(Math.max(vv, zv))) + 1
    }

    function xS(vv, zv, Pv, hv, Sv, ev) {
      const gv = vv.createTexture({
          label: ev,
          size: {
            width: Pv,
            height: hv,
            depthOrArrayLayers: Sv
          },
          format: "rgba8unorm",
          mipLevelCount: RS(Pv, hv),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        pv = (zv, Pv, hv, ev) => {
          vv.queue.writeTexture({
            texture: gv,
            mipLevel: Pv
          }, zv, {
            bytesPerRow: 4 * hv,
            rowsPerImage: ev
          }, {
            width: hv,
            height: ev,
            depthOrArrayLayers: Sv
          })
        };
      pv(zv, 0, Pv, hv);
      let dv = 1;
      for (const Nv of function*(vv, zv, Pv, hv) {
          let Sv = vv,
            ev = zv,
            gv = Pv;
          for (; ev > 1 || gv > 1;) {
            const vv = Math.max(1, ev >> 1),
              zv = Math.max(1, gv >> 1),
              Pv = new Uint8Array(vv * zv * hv * 4),
              pv = 4 * ev;
            let dv = 0;
            for (let Nv = 0; Nv < hv; Nv++) {
              const hv = Nv * pv * gv;
              for (let Nv = 0; Nv < zv; Nv++) {
                const zv = hv + Math.min(2 * Nv, gv - 1) * pv,
                  lv = hv + Math.min(2 * Nv + 1, gv - 1) * pv;
                for (let hv = 0; hv < vv; hv++) {
                  const vv = 4 * Math.min(2 * hv, ev - 1),
                    gv = 4 * Math.min(2 * hv + 1, ev - 1);
                  for (let hv = 0; hv < 4; hv++) Pv[dv++] = Sv[zv + vv + hv] + Sv[zv + gv + hv] + Sv[lv + vv + hv] + Sv[lv + gv + hv] + 2 >> 2
                }
              }
            }
            yield {
              data: Pv,
              width: vv,
              height: zv
            }, Sv = Pv, ev = vv, gv = zv
          }
        }(zv, Pv, hv, Sv)) pv(Nv.data, dv++, Nv.width, Nv.height);
      return gv
    }
    const tS = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function qS(vv) {
      if (vv.startsWith("data:")) {
        const zv = vv.search(/[;,]/);
        return `data:${zv>5?vv.slice(5,zv):""} URL of ${vv.length} characters`
      }
      return vv.length > 80 ? `${vv.slice(0,80)}...` : vv
    }
    async function IS(vv) {
      const zv = await fetch(vv);
      if (!zv.ok) throw new Error(`${qS(vv)}: ${zv.status} ${zv.statusText}`);
      return createImageBitmap(await zv.blob(), tS)
    }
    async function QS(vv) {
      const zv = await IS(vv),
        Pv = new OffscreenCanvas(zv.width, zv.height),
        hv = Pv.getContext("2d", {
          willReadFrequently: !0
        });
      if (!hv) throw new Error("No 2D context to decode an image");
      hv.drawImage(zv, 0, 0);
      const {
        data: Sv
      } = hv.getImageData(0, 0, zv.width, zv.height);
      return zv.close(), {
        pixels: new Uint8Array(Sv.buffer, Sv.byteOffset, Sv.byteLength),
        width: Pv.width,
        height: Pv.height
      }
    }
    const ZS = new WeakMap;

    function AS(vv, zv, Pv, hv) {
      var Sv;
      const ev = null !== (Sv = ZS.get(vv)) && void 0 !== Sv ? Sv : new Map;
      ZS.set(vv, ev);
      let gv = ev.get(zv);
      return gv || (gv = (async Sv => {
        const ev = null !== (Sv = function(vv, zv) {
          const Pv = vv ? new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength) : null;
          return null !== Pv && void 0 !== Pv && Pv.byteLength && zv && Pv.byteLength % (zv * zv * 4) === 0 ? {
            pixels: Pv,
            layerWidth: zv,
            layers: Pv.byteLength / (zv * zv * 4)
          } : null
        }(Pv, hv)) && void 0 !== Sv ? Sv : await async function(vv) {
          const {
            pixels: zv,
            width: Pv
          } = await QS(vv);
          return {
            pixels: zv,
            layerWidth: Pv,
            layers: zv.byteLength / (Pv * Pv * 4)
          }
        }(zv), {
          layerWidth: gv,
          layers: pv
        } = ev;
        return {
          texture: xS(vv, ev.pixels, gv, gv, pv, `atlas-${zv}`),
          layerWidth: gv,
          layers: pv
        }
      })(), ev.set(zv, gv), gv.catch((() => {
        ev.delete(zv)
      }))), gv
    }
    const LS = new Map([
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
      HS = new Map([
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

    function MS(vv) {
      for (const zv of (0, KS.i)(vv))
        if (!HS.has((0, KS.h)(zv))) return !1;
      return !0
    }

    function yS(vv) {
      const zv = HS.get(vv);
      if (!zv) return null;
      const [Pv, hv, Sv] = zv;
      return {
        srcFactor: LS.get(Pv),
        dstFactor: LS.get(hv),
        operation: Sv
      }
    }
    let BS = null;

    function JS(vv) {
      BS = vv
    }

    function ES(vv, zv, Pv) {
      var hv;
      null === (hv = BS) || void 0 === hv || hv(vv, zv, Pv, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class oS {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(vv, zv, Pv, hv, Sv) {
        Pv !== this.pipeline && (vv.setPipeline(Pv), this.pipeline = Pv), vv.setBindGroup(1, hv, [Sv]);
        const ev = zv.material.bindGroup;
        ev !== this.materialGroup && (vv.setBindGroup(2, ev), this.materialGroup = ev);
        const gv = zv.program.packGroup;
        gv && gv !== this.packGroup && (vv.setBindGroup(Oz.d, gv), this.packGroup = gv);
        const {
          vertexBuffers: pv,
          vertexOffsets: dv
        } = this;
        for (let Nv = 0; Nv < zv.vertexBuffers.length; Nv++) pv[Nv] === zv.vertexBuffers[Nv] && dv[Nv] === zv.vertexOffsets[Nv] || (vv.setVertexBuffer(Nv, zv.vertexBuffers[Nv], zv.vertexOffsets[Nv]), pv[Nv] = zv.vertexBuffers[Nv], dv[Nv] = zv.vertexOffsets[Nv]);
        zv.indexBuffer && zv.indexBuffer !== this.indexBuffer && (vv.setIndexBuffer(zv.indexBuffer, zv.indexFormat), this.indexBuffer = zv.indexBuffer)
      }
    }
    class bS {
      constructor(vv, zv, Pv, hv) {
        this.modelMeshes = vv, this.Vk = zv, this.maker = Pv, this.warnOnce = hv, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(vv) {
        this.collectGroup(vv, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(vv, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(vv, 1, this.frontDraws, this.frontDraws, !0);
        for (const zv of this.modelMeshes.groupIds())(zv < -1 || zv > 1) && this.warnOnce(`group:${zv}`, `rendering group ${zv} is not drawn`);
        for (const zv of this.Vk.groupIds())(zv < -1 || zv > 1) && this.warnOnce(`group:${zv}`, `rendering group ${zv} is not drawn`);
        this.opaqueDraws.sort(rS), this.transparentDraws.sort(kS)
      }
      collectGroup(vv, zv, Pv, hv, Sv) {
        const ev = this.modelMeshes.group(zv),
          gv = this.Vk.group(zv),
          pv = 0 === zv ? null === gv || void 0 === gv ? void 0 : gv.opaque : void 0;
        this.collectList(vv, null === ev || void 0 === ev ? void 0 : ev.opaque, pv || null === gv || void 0 === gv ? void 0 : gv.opaque, zv, !1, Pv, Sv), pv && (this.Vk.drawn += this.maker.bundleDraws(vv, pv, zv)), this.collectList(vv, null === ev || void 0 === ev ? void 0 : ev.alphaTest, void 0, zv, !1, Pv, Sv), this.collectList(vv, null === ev || void 0 === ev ? void 0 : ev.transparent, null === gv || void 0 === gv ? void 0 : gv.transparent, zv, !0, hv, Sv)
      }
      collectList(vv, zv, Pv, hv, Sv, ev, gv) {
        var pv;
        const dv = ev.length;
        zv && this.maker.pushDraws(vv, zv.units, zv.units.length, hv, Sv, ev, zv.rows), Pv && (this.Vk.drawn += this.maker.pushDraws(vv, Pv, Pv.length, hv, Sv, ev));
        const Nv = Sv ? null === (pv = this.modelMeshes.group(hv)) || void 0 === pv ? void 0 : pv.text : void 0;
        Nv && this.maker.pushDraws(vv, Nv.units, Nv.units.length, hv, !0, ev, Nv.rows), gv && XS(ev, dv)
      }
    }

    function rS(vv, zv) {
      return vv.program.id - zv.program.id || vv.material.owner.uniqueId - zv.material.owner.uniqueId
    }

    function kS(vv, zv) {
      return vv.material.owner.uniqueId - zv.material.owner.uniqueId
    }

    function XS(vv, zv) {
      for (let Pv = zv + 1; Pv < vv.length; Pv++) {
        const hv = vv[Pv];
        let Sv = Pv - 1;
        for (; Sv >= zv && kS(vv[Sv], hv) > 0; Sv--) vv[Sv + 1] = vv[Sv];
        vv[Sv + 1] = hv
      }
    }
    const uS = {};

    function ve(vv) {
      return vv.hasThinInstances ? "thin" : vv.Phv || vv._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function ze(vv, zv, Pv) {
      return vv ? (Pv._needUVs = !0, vv.optimizeUVAllocation && (0, Dv.I)(vv.matrix) ? (Pv[`${zv}DIRECTUV`] = vv.uvSet + 1, Pv[`MAINUV${vv.uvSet+1}`] = !0) : Pv[`${zv}DIRECTUV`] = 0, !0) : (Pv[`${zv}DIRECTUV`] = 0, !1)
    }

    function Pe(vv) {
      const zv = new Map;
      for (const Pv in vv) {
        if (95 === Pv.charCodeAt(0)) continue;
        const hv = vv[Pv],
          Sv = typeof hv;
        "number" === Sv || "string" === Sv ? zv.set(Pv, String(hv)) : hv && "function" !== Sv && zv.set(Pv, !0)
      }
      return zv
    }

    function he(vv) {
      const zv = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: Pv
        }
        of vv.features)
        for (const vv in Pv) zv[vv] = Pv[vv];
      return zv
    }

    function Se(vv) {
      const zv = vv.parts.geometry;
      return null !== zv && void 0 !== zv && zv.live ? zv : null
    }

    function ee(vv) {
      var zv;
      return null !== (zv = Se(vv)) && void 0 !== zv ? zv : uS
    }
    class ge {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = vv, this.warnOnce = zv, this.programWithModel = Pv, this.packFailed = hv, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(vv, zv, Pv, hv, Sv) {
        const ev = zv.owner;
        let gv = this.drawStates.get(zv);
        if (!gv) {
          const vv = zv.parts.materials[zv.range];
          if (!vv) return this.warnOnce("model", `${Pv.name} on ${ev.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          gv = {
            defines: he(vv),
            model: vv,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Sv,
            groupId: hv,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(zv, gv)
        }
        if (this.programCurrent(gv, zv, Sv, hv)) return gv.program;
        const {
          model: pv
        } = gv, dv = ee(zv), Nv = this.instanceLayout(ev, Sv), lv = this.definesBits(ev);
        if (!this.prepareModelDefines(vv, ev, pv, gv.defines, hv, Sv)) return null;
        gv.instancing = Sv, gv.groupId = hv, gv.modelVersion = pv.version, gv.geometry = dv, gv.instanceLayout = Nv, gv.definesBits = lv;
        const Tv = function(vv) {
          let zv = "";
          for (const [Pv, hv] of vv) zv += !0 === hv ? `${Pv};` : `${Pv}=${hv};`;
          return zv
        }(Pe(gv.defines));
        return Tv === gv.definesKey && gv.packVariant === this.modelPackVariant && gv.program && !this.packFailed(gv.program) || (gv.definesKey = Tv, gv.packVariant = this.modelPackVariant, gv.program = this.programWithModel(pv, gv.defines, Tv)), gv.program
      }
      programCurrent(vv, zv, Pv, hv) {
        return null !== vv.program && !this.packFailed(vv.program) && vv.instancing === Pv && vv.groupId === hv && this.definesHold(vv, zv, Pv)
      }
      definesHold(vv, zv, Pv) {
        return vv.modelVersion === vv.model.version && vv.geometry === ee(zv) && vv.instanceLayout === this.instanceLayout(zv.owner, Pv) && vv.definesBits === this.definesBits(zv.owner) && vv.packVariant === this.modelPackVariant
      }
      modelPackKind(vv) {
        var zv;
        return 0 === this.modelPackVariant ? null : null !== (zv = (0, nv.x)(vv, Yv.i.name)) && void 0 !== zv && zv.active ? "placed" : vv.item ? "item" : vv.lifeform ? "lifeform" : vv.box ? "box" : null
      }
      instanceLayout(vv, zv) {
        var Pv, hv, Sv;
        return "thin" === zv ? null !== (Sv = this.resources.OE.get(vv)) && void 0 !== Sv ? Sv : null : "instanced" === zv && null !== (Pv = null === (hv = vv._userInstancedBuffersStorage) || void 0 === hv ? void 0 : hv.interleavedKinds) && void 0 !== Pv ? Pv : null
      }
      definesBits(vv) {
        const zv = this.view;
        return (vv.visibility < 1 ? 1 : 0) | (vv.hasVertexAlpha ? 2 : 0) | (vv.applyFog ? 4 : 0) | (vv.useVertexColors ? 8 : 0) | (vv.nonUniformScaling ? 16 : 0) | (zv.fogEnabled && 0 !== zv.fogMode ? 32 : 0) | (zv.lightsEnabled ? 64 : 0) | zv.lightCount << 7
      }
      prepareLightDefines(vv, zv, Pv) {
        let hv = 0;
        if (this.view.lightsEnabled && !zv) {
          const zv = Math.min(Pv, 4);
          for (; hv < this.view.lightCount && (vv[`LIGHT${hv}`] = !0, vv[`LITE_LIGHT${hv}_SLOT`] = hv, hv++, vv._needNormals = !0, hv !== zv););
        }
        for (let Sv = hv; Sv < 4; Sv++) vv[`LIGHT${Sv}`] = !1, vv[`LITE_LIGHT${Sv}_SLOT`] = void 0
      }
      prepareModelDefines(vv, zv, Pv, hv, Sv, ev) {
        const {
          features: gv
        } = Pv;
        hv._needNormals = !1, hv._needUVs = !1;
        const pv = this.view;
        this.prepareLightDefines(hv, Pv.disableLighting, Pv.maxSimultaneousLights), hv.MAINUV1 = !1, hv.MAINUV2 = !1;
        const dv = Pv.diffuseTexture;
        dv ? (hv._needUVs = !0, hv.DIFFUSE = !0, dv.optimizeUVAllocation && (0, Dv.I)(dv.matrix) ? (hv.DIFFUSEDIRECTUV = dv.uvSet + 1, hv[`MAINUV${dv.uvSet+1}`] = !0) : hv.DIFFUSEDIRECTUV = 0, dv.uvSet > 1 && this.warnOnce(`uvset:${Pv.name}`, `${Pv.name} samples UV set ${dv.uvSet+1}, which is not supported`)) : (hv.DIFFUSE = !1, hv.DIFFUSEDIRECTUV = 0);
        const Nv = Pv.opacityTexture,
          lv = Pv.emissiveTexture;
        hv.OPACITY = ze(Nv, "OPACITY", hv), hv.OPACITYRGB = null !== Nv && Nv.getAlphaFromRGB, hv.EMISSIVE = ze(lv, "EMISSIVE", hv), (Nv && Nv.uvSet > 1 || lv && lv.uvSet > 1) && this.warnOnce(`uvset:${Pv.name}`, `${Pv.name} samples a UV set past 2, which is not supported`);
        const Tv = Pv.reflectionTexture,
          Wv = null !== Tv;
        if (Wv) {
          if (!this.resources.boundTexture(Tv)) return !1;
          hv._needNormals = !0
        }
        hv.REFLECTION = Wv, hv.REFLECTIONMAP_3D = Wv, hv.REFLECTIONMAP_SKYBOX = Wv, hv.REFLECTIONMAP_OPPOSITEZ = Wv && (vv.useRightHandedSystem ? !Tv.invertZ : Tv.invertZ), hv.ROUGHNESS = Wv && Pv.roughness > 0, hv.REFLECTIONOVERALPHA = Wv && Pv.useReflectionOverAlpha, hv.LITE_REFLECTION_LUMINANCE = Wv && "cube" === Tv.source.kind && Tv.source.luminance, (zv.skeleton || zv.morphTargetManager) && this.warnOnce(`skin:${zv.name}`, `${zv.name} has bones or morph targets, which are not supported`), hv.FOG = Pv.fogEnabled && zv.applyFog && pv.fogEnabled && 0 !== pv.fogMode, hv.NONUNIFORMSCALING = zv.nonUniformScaling;
        const {
          visibility: wv,
          hasVertexAlpha: av
        } = zv;
        hv.ALPHATEST = (0, nv.W)(Pv, wv, av), hv.ALPHAFROMDIFFUSE = (0, nv.hb)(Pv), hv.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== Pv.transparencyMode, hv.ALPHABLEND = null === Pv.transparencyMode || (0, nv.S)(Pv, wv, av), hv.PREMULTIPLYALPHA = 7 === Pv.alphaMode || 8 === Pv.alphaMode, hv.EMISSIVEASILLUMINATION = Pv.useEmissiveAsIllumination, hv.LINKEMISSIVEWITHDIFFUSE = Pv.linkEmissiveWithDiffuse, hv.TWOSIDEDLIGHTING = !Pv.backFaceCulling && Pv.twoSidedLighting, hv.INSTANCES = "none" !== ev, hv.THIN_INSTANCES = "thin" === ev, hv.LITE_FRONT_LAYER = Sv >= 1;
        for (const {
            feature: Fv,
            state: Yv,
            active: nv
          }
          of gv) {
          var sv, Cv;
          if (nv) null === (sv = (Cv = (0, lz.g)(Fv)).prepareDefinesBeforeAttributes) || void 0 === sv || sv.call(Cv, Yv, hv, vv, zv)
        }
        this.modelPackKind(Pv) && (hv._needNormals = !0), hv.NORMAL = hv._needNormals && zv.isVerticesDataPresent("normal"), hv.UV1 = hv._needUVs && zv.isVerticesDataPresent("uv"), hv.UV2 = hv._needUVs && zv.isVerticesDataPresent("uv2");
        const iv = zv.useVertexColors && zv.isVerticesDataPresent("color");
        hv.VERTEXCOLOR = iv, hv.VERTEXALPHA = zv.hasVertexAlpha && iv, hv.INSTANCESCOLOR = "none" !== ev && zv.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Fv,
            state: Yv,
            active: nv
          }
          of gv) {
          var cv, Gv;
          if (nv) null === (cv = (Gv = (0, lz.g)(Fv)).prepareDefines) || void 0 === cv || cv.call(Gv, Yv, hv, vv, zv, Pv)
        }
        const mv = vv.ma();
        for (const {
            feature: Fv,
            state: Yv,
            active: nv
          }
          of gv) {
          var jv, fv;
          if (nv && !1 === (null === (jv = (fv = (0, lz.g)(Fv)).isReadyForSubMesh) || void 0 === jv ? void 0 : jv.call(fv, Yv, hv, vv, mv))) return !1
        }
        return !0
      }
    }

    function pe(vv, zv, Pv) {
      return vv.codeVersion !== zv.version && function(vv, zv) {
        const Pv = [],
          hv = [];
        for (const {
            feature: Wv,
            state: wv,
            active: av
          }
          of zv.features) {
          var Sv, ev, gv, pv;
          if (av) de(null === (Sv = (ev = (0, lz.g)(Wv)).getCustomCode) || void 0 === Sv ? void 0 : Sv.call(ev, wv, "vertex", fv.d.WGSL), Pv), de(null === (gv = (pv = (0, lz.g)(Wv)).getCustomCode) || void 0 === gv ? void 0 : gv.call(pv, wv, "fragment", fv.d.WGSL), hv)
        }
        const dv = [];
        for (const {
            feature: Wv,
            state: wv
          }
          of zv.features) {
          var Nv, lv;
          const vv = null === (Nv = (lv = (0, lz.g)(Wv)).getUniforms) || void 0 === Nv ? void 0 : Nv.call(lv, wv, fv.d.WGSL);
          for (const zv of null !== (Tv = null === vv || void 0 === vv ? void 0 : vv.ubo) && void 0 !== Tv ? Tv : []) {
            var Tv;
            zv.size && zv.type && dv.push({
              name: zv.name,
              type: zv.type,
              arraySize: zv.arraySize
            })
          }
        }
        vv.vertexCode = Pv, vv.fragmentCode = hv, vv.pluginUniforms = dv, vv.codeKey = JSON.stringify([Pv, hv, dv]), vv.codeVersion = zv.version
      }(vv, zv), `${Pv}#${vv.codeKey}`
    }

    function de(vv, zv) {
      if (vv)
        for (const Pv in vv) vv[Pv] && zv.push([Pv, vv[Pv]])
    }
    const Ne = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class le {
      constructor(vv) {
        this.warnOnce = vv, this.states = new Map
      }
      renderState(vv, zv, Pv, hv) {
        var Sv;
        let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          gv = null !== (Sv = vv.sideOrientation) && void 0 !== Sv ? Sv : zv.sideOrientation;
        zv._getWorldMatrixDeterminant() < 0 && (gv = 0 === gv ? 1 : 0);
        const pv = "triangle-list" === ev,
          dv = Pv ? vv.alphaMode : 0,
          Nv = (!Pv || (0 === dv || vv.forceDepthWrite)) && !vv.disableDepthWrite,
          lv = pv && vv.backFaceCulling ? vv.cullBackFaces ? "back" : "front" : "none",
          Tv = pv && 0 !== gv ? "ccw" : "cw",
          Wv = vv.depthFunction,
          wv = pv ? vv.zOffset : 0,
          av = pv ? vv.zOffsetUnits : 0,
          sv = !vv.disableColorWrite;
        return hv && hv.alphaMode === dv && hv.depthWrite === Nv && hv.depthFunction === Wv && hv.cullMode === lv && hv.frontFace === Tv && hv.zOffset === wv && hv.zOffsetUnits === av && hv.colourWrite === sv && hv.topology === ev ? hv : this.stateFor(dv, Nv, Wv, lv, Tv, wv, av, sv, ev)
      }
      stateFor(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        const Nv = `${vv}|${zv}|${Pv}|${hv}|${Sv}|${ev}|${gv}|${pv}|${dv}`;
        let lv = this.states.get(Nv);
        if (!lv) {
          var Tv;
          const Wv = vv ? yS(vv) : null;
          vv && !Wv && this.warnOnce(`alpha:${vv}`, `alpha mode ${vv} is not supported`), lv = {
            key: Nv,
            alphaMode: vv,
            depthFunction: Pv,
            zOffset: ev,
            zOffsetUnits: gv,
            topology: dv,
            blend: Wv,
            depthWrite: zv,
            depthCompare: Pv && null !== (Tv = Ne.get(Pv)) && void 0 !== Tv ? Tv : null,
            cullMode: hv,
            frontFace: Sv,
            depthBias: -gv,
            depthBiasSlopeScale: -ev,
            colourWrite: pv
          }, this.states.set(Nv, lv)
        }
        return lv
      }
    }
    var Te = Pv(36902);

    function We(vv) {
      if (!vv.frozen) return -1;
      let zv = vv.version;
      for (const {
          feature: Pv,
          state: hv,
          active: Sv
        }
        of vv.features) {
        if (!Sv || !Pv.bind) continue;
        const vv = (0, lz.g)(Pv).uniformsVersion;
        if (!vv) return -1;
        zv += vv(hv)
      }
      return zv
    }
    class we {
      constructor(vv, zv, Pv) {
        this.slots = vv, this.data = zv, this.textures = Pv, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(vv, zv) {
        this.write4(vv, zv, 0, 0, 0, 1)
      }
      updateFloat2(vv, zv, Pv) {
        this.write4(vv, zv, Pv, 0, 0, 2)
      }
      updateFloat3(vv, zv, Pv, hv) {
        this.write4(vv, zv, Pv, hv, 0, 3)
      }
      updateFloat4(vv, zv, Pv, hv, Sv) {
        this.write4(vv, zv, Pv, hv, Sv, 4)
      }
      updateVector3(vv, zv) {
        this.write4(vv, zv.x, zv.y, zv.z, 0, 3)
      }
      updateVector4(vv, zv) {
        this.write4(vv, zv.x, zv.y, zv.z, zv.w, 4)
      }
      updateColor3(vv, zv) {
        this.write4(vv, zv.r, zv.g, zv.b, 0, 3)
      }
      updateColor4(vv, zv, Pv) {
        this.write4(vv, zv.r, zv.g, zv.b, Pv, 4)
      }
      updateFloatsFrom(vv, zv, Pv, hv) {
        const Sv = this.slots.get(vv);
        if (!Sv) return;
        const ev = this.data,
          gv = Sv.offset;
        for (let pv = 0; pv < hv; pv++) ev[gv + pv] = zv[Pv + pv]
      }
      updateFloat3TimesFloats(vv, zv, Pv, hv) {
        const Sv = this.slots.get(vv);
        if (!Sv) return;
        const ev = this.data,
          gv = Sv.offset;
        ev[gv] = zv[Pv] * hv[0], ev[gv + 1] = zv[Pv + 1] * hv[1], ev[gv + 2] = zv[Pv + 2] * hv[2]
      }
      Xu(vv, zv) {
        const Pv = this.slots.get(vv);
        Pv && this.data.set(zv.m, Pv.offset)
      }
      updateMatrixFloats(vv, zv) {
        const Pv = this.slots.get(vv);
        Pv && this.data.set(zv, Pv.offset)
      }
      updateFloatArray(vv, zv) {
        const Pv = this.slots.get(vv);
        if (!Pv) return;
        if (!Pv.arraySize || Pv.stride === Pv.floats) return void this.data.set(zv, Pv.offset);
        const hv = Math.min(zv.length, Pv.floats * Pv.arraySize);
        for (let Sv = 0; Sv < hv; Sv++) this.data[Pv.offset + Math.floor(Sv / Pv.floats) * Pv.stride + Sv % Pv.floats] = zv[Sv]
      }
      updateArray(vv, zv) {
        this.updateFloatArray(vv, zv)
      }
      setTexture(vv, zv) {
        this.textures.set(vv, zv), this.expected.delete(vv)
      }
      expectTexture(vv) {
        this.textures.set(vv, null), this.expected.add(vv)
      }
      write4(vv, zv, Pv, hv, Sv, ev) {
        const gv = this.slots.get(vv);
        if (!gv) return;
        const pv = this.data,
          dv = gv.offset;
        pv[dv] = zv, ev > 1 && (pv[dv + 1] = Pv), ev > 2 && (pv[dv + 2] = hv), ev > 3 && (pv[dv + 3] = Sv)
      }
    }

    function ae(vv, zv) {
      const Pv = Ah,
        hv = Te.l,
        Sv = vv.lights,
        ev = Math.min(vv.lightCount, 8);
      for (let gv = 0; gv < ev; gv++) {
        const vv = Pv.lights + gv * Pv.lightStride,
          ev = gv * Te.e;
        zv[vv] = Sv[ev + hv.vector], zv[vv + 1] = Sv[ev + hv.vector + 1], zv[vv + 2] = Sv[ev + hv.vector + 2], zv[vv + 3] = Sv[ev + hv.kind] === Te.h.directional ? 1 : 0, zv[vv + 4] = Sv[ev + hv.diffuse], zv[vv + 5] = Sv[ev + hv.diffuse + 1], zv[vv + 6] = Sv[ev + hv.diffuse + 2], zv[vv + 7] = Sv[ev + hv.range], zv[vv + 8] = Sv[ev + hv.specular], zv[vv + 9] = Sv[ev + hv.specular + 1], zv[vv + 10] = Sv[ev + hv.specular + 2], zv[vv + 11] = Sv[ev + hv.range]
      }
      zv[Pv.fogInfos] = vv.fogMode, zv[Pv.fogInfos + 1] = vv.fogStart, zv[Pv.fogInfos + 2] = vv.fogEnd, zv[Pv.fogInfos + 3] = vv.fogDensity, zv[Pv.fogColour] = vv.fogColour[0], zv[Pv.fogColour + 1] = vv.fogColour[1], zv[Pv.fogColour + 2] = vv.fogColour[2], zv[Pv.outputHeight] = vv.renderHeight, zv[Pv.animTick] = vv.animTick, zv[Pv.timeMs] = vv.timeMs
    }
    class se {
      constructor(vv) {
        this.instancesOf = vv
      }
      refreshModelUniforms(vv, zv, Pv, hv) {
        const Sv = We(Pv);
        if (Sv >= 0 && Sv === zv.heldVersion && zv.textures.get("diffuseSampler") === Pv.diffuseTexture && zv.textures.get("reflectionCubeSampler") === Pv.reflectionTexture && zv.textures.get("opacitySampler") === Pv.opacityTexture && zv.textures.get("emissiveSampler") === Pv.emissiveTexture) return !0;
        if (Sv < 0)
          for (const ev of this.instancesOf(Pv)) ev.heldVersion = -1;
        return this.writeModelUniforms(vv, zv, Pv, hv), zv.heldVersion = Sv, !1
      }
      writeModelUniforms(vv, zv, Pv, hv) {
        const {
          ubo: Sv
        } = zv, ev = Pv.diffuseTexture, gv = Pv.diffuseColor;
        Sv.updateFloat4("vDiffuseColor", gv[0], gv[1], gv[2], Pv.alpha), ev && (Sv.updateFloat2("vDiffuseInfos", ev.uvSet, ev.level), Sv.updateMatrixFloats("diffuseMatrix", ev.matrix)), Sv.updateFloat("alphaCutOff", Pv.alphaCutOff), Sv.updateFloatsFrom("vEmissiveColor", Pv.emissiveColor, 0, 3), Sv.updateFloat3TimesFloats("vAmbientColor", hv.ambientColour, 0, Pv.ambientColor);
        const pv = Pv.specularColor;
        Sv.updateFloat4("vSpecularColor", pv[0], pv[1], pv[2], Pv.specularPower), Sv.setTexture("diffuseSampler", ev);
        const dv = Pv.opacityTexture;
        dv && (Sv.updateFloat2("vOpacityInfos", dv.uvSet, dv.level), Sv.updateMatrixFloats("opacityMatrix", dv.matrix)), Sv.setTexture("opacitySampler", dv);
        const Nv = Pv.emissiveTexture;
        Nv && (Sv.updateFloat2("vEmissiveInfos", Nv.uvSet, Nv.level), Sv.updateMatrixFloats("emissiveMatrix", Nv.matrix)), Sv.setTexture("emissiveSampler", Nv);
        const lv = Pv.reflectionTexture;
        lv && Sv.updateMatrixFloats("reflectionMatrix", lv.matrix), Sv.updateFloat2("vReflectionInfos", lv ? lv.level * vv.iblIntensity : 0, Pv.roughness), Sv.setTexture("reflectionCubeSampler", lv);
        const Tv = vv.ma();
        for (const {
            feature: av,
            state: sv,
            active: Cv
          }
          of Pv.features) {
          var Wv, wv;
          if (Cv) null === (Wv = (wv = (0, lz.g)(av)).bind) || void 0 === Wv || Wv.call(wv, sv, Sv, vv, Tv)
        }
      }
    }

    function Ce(vv) {
      const zv = vv.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(zv) ? "u32" : /i32|^vec\di$/.test(zv) ? "i32" : "f32"
    }

    function ie(vv, zv) {
      const Pv = vv.getSize(),
        hv = Ce(zv),
        Sv = vv => 4 === Pv ? `${vv}x4` : 2 === Pv ? `${vv}x2` : null;
      if ("f32" === hv) {
        if (5126 === vv.type) return 1 === Pv ? "float32" : Pv >= 2 && Pv <= 4 ? `float32x${Pv}` : null;
        if (!vv.normalized) return null;
        switch (vv.type) {
          case 5121:
            return Sv("unorm8");
          case 5120:
            return Sv("snorm8");
          case 5123:
            return Sv("unorm16");
          case 5122:
            return Sv("snorm16")
        }
        return null
      }
      const ev = "u32" === hv ? "uint" : "sint";
      switch (vv.type) {
        case 5125:
        case 5124:
          return 1 === Pv ? `${ev}32` : Pv <= 4 ? `${ev}32x${Pv}` : null;
        case 5121:
        case 5120:
          return Sv(`${ev}8`);
        case 5123:
        case 5122:
          return Sv(`${ev}16`)
      }
      return null
    }

    function ce(vv) {
      var zv;
      const Pv = /(8|16|32)(?:x(\d))?$/.exec(vv);
      return Pv ? Number(Pv[1]) / 8 * Number(null !== (zv = Pv[2]) && void 0 !== zv ? zv : 1) : 4
    }
    class Ge {
      constructor(vv, zv, Pv) {
        this.resources = vv, this.limits = zv, this.warnOnce = Pv, this.layouts = new Map
      }
      resolveInputs(vv, zv, Pv, hv) {
        const Sv = [],
          ev = Pv.program.attributes,
          gv = [];
        for (let lv = 0; lv < ev.length; lv++) {
          const Pv = ev[lv],
            pv = Pv.optional ? null : this.resources.vertexInput(vv, Pv.name, hv);
          if (!pv) {
            const vv = Ce(Pv.type),
              zv = "u32" === vv ? "uint32x4" : "i32" === vv ? "sint32x4" : "float32x4";
            gv.push(null);
            const hv = Sv.find((vv => null === vv.data));
            hv ? hv.attributes.push({
              shaderLocation: lv,
              offset: 0,
              format: zv
            }) : Sv.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: lv,
                offset: 0,
                format: zv
              }]
            });
            continue
          }
          const dv = pv.getBuffer();
          gv.push(pv);
          const Nv = ie(pv, Pv.type);
          if (!Nv) return this.warnOnce(`format:${zv}:${Pv.name}`, `${zv}'s ${Pv.name} (type ${pv.type}, size ${pv.getSize()}) has no WebGPU vertex format`), null;
          const Tv = pv.getIsInstanced() ? "instance" : "vertex",
            Wv = pv.byteStride,
            wv = ce(Nv),
            av = Sv.find((vv => vv.data === dv && vv.stride === Wv && vv.step === Tv && pv.byteOffset >= vv.base && pv.byteOffset - vv.base + wv <= Wv));
          av ? av.attributes.push({
            shaderLocation: lv,
            offset: pv.byteOffset - av.base,
            format: Nv
          }) : Sv.push({
            data: dv,
            base: pv.byteOffset,
            stride: Wv,
            step: Tv,
            attributes: [{
              shaderLocation: lv,
              offset: 0,
              format: Nv
            }]
          })
        }
        if (Sv.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${zv}`, `${zv} needs ${Sv.length} vertex buffers`), null;
        let pv = "";
        for (const lv of Sv) {
          pv += `${lv.stride}${"instance"===lv.step?"i":"v"}`;
          for (const vv of lv.attributes) pv += `,${vv.shaderLocation}:${vv.offset}:${vv.format}`;
          pv += ";"
        }
        let dv = this.layouts.get(pv);
        dv || (dv = {
          key: pv,
          buffers: Sv.map((vv => ({
            arrayStride: vv.stride,
            stepMode: vv.step,
            attributes: vv.attributes
          }))),
          instanceEnds: Sv.map((vv => {
            let zv = -1;
            if ("instance" === vv.step)
              for (const Pv of vv.attributes) zv = Math.max(zv, Pv.offset + ce(Pv.format));
            return zv
          }))
        }, this.layouts.set(pv, dv));
        const Nv = Sv.map((vv => vv.base));
        return {
          program: Pv,
          sources: gv,
          layout: dv,
          slotData: Sv.map((vv => vv.data)),
          Lk: Nv,
          buffers: [],
          offsets: Nv,
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

    function me(vv, zv, Pv, hv) {
      const Sv = zv.program.program.attributes;
      for (let ev = 0; ev < Sv.length; ev++) {
        if ((Sv[ev].optional ? null : Pv.vertexInput(vv, Sv[ev].name, hv)) !== zv.sources[ev]) return !1
      }
      return !0
    }
    const je = 64;
    class fe {
      constructor(vv, zv, Pv, hv) {
        this.device = vv, this.layout = zv, this.frameBuffer = Pv, this.label = hv, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(vv) {
        if (vv * je <= this.data.length) return !1;
        let zv = 2 * this.data.length;
        for (; vv * je > zv;) zv *= 2;
        const Pv = new Float32Array(zv);
        return Pv.set(this.data), this.data = Pv, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Sv = this.data,
          ev = vv * je;
        let gv = Sv[ev + 16] !== Pv;
        for (let pv = 0; pv < 16 && !gv; pv++) gv = Sv[ev + pv] !== zv[hv + pv];
        if (gv) {
          for (let vv = 0; vv < 16; vv++) Sv[ev + vv] = zv[hv + vv];
          Sv[ev + 16] = Pv
        }
        return gv
      }
      upload(vv, zv) {
        this.device.queue.writeBuffer(this.buffer, vv * Lh, this.data, vv * je, (zv - vv) * je)
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

    function Fe(vv) {
      return vv.gpu[Dv.g.lite] ??= vv.materials.map(((zv, Pv) => ({
        parts: vv,
        range: Pv,
        owner: vv.owner
      })))
    }

    function Ye(vv) {
      var zv, Pv, hv;
      return null !== (zv = null !== (Pv = null === (hv = vv.parts.materials[vv.range]) || void 0 === hv ? void 0 : hv.mirror) && void 0 !== Pv ? Pv : vv.owner.material) && void 0 !== zv ? zv : null
    }
    const ne = ["opaque", "alphaTest", "transparent", "text"];
    class Oe {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Nz.d)("Lite: ")
      }
      attach(vv, zv) {
        this.model = vv, this.mirror = zv
      }
      get worlds() {
        return this.model.nodes.oT
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(vv) {
        return this.groups.get(vv)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(vv) {
        for (const [zv, Pv] of this.groups)
          for (const hv of ne)
            for (const Sv of Pv[hv].units) vv(Sv.owner, "text" === hv ? "transparent" : hv, zv)
      }
      select(vv, zv) {
        this.frame++, this.selectedCount = 0;
        for (const pv of this.groups.values())
          for (const vv of ne) pv[vv].units.length = 0, pv[vv].rows.length = 0;
        const {
          model: Pv,
          mirror: hv
        } = this;
        if (!Pv || !hv || !vv) return;
        this.rows.length < Pv.nodes.GT && (this.rows = new Int32Array(Pv.nodes.GT));
        const Sv = this.rows,
          ev = Pv.meshes;
        for (let pv = 0; pv < ev.looseCount; pv++) {
          const vv = ev.loose[pv],
            Pv = hv.nodes[vv];
          Pv && !Pv.isBlocked && Pv.isEnabled() && !Pv.pp.hasAZeroComponent && ev.selects(vv, zv.frustum) && (this.activate(Pv, vv), this.selectedCount++)
        }
        const gv = ev.selectTextPlanes(zv.frustum, Sv);
        for (let pv = 0; pv < gv; pv++) {
          const zv = Sv[pv],
            ev = hv.nodes[zv],
            gv = Pv.meshes.parts[zv];
          if (!ev.isVisible || !(ev.visibility > 0) || 0 === (ev.layerMask & vv.layerMask) || !gv) continue;
          const dv = this.groupOf(Pv.meshes.layer[zv]).text;
          for (const vv of Fe(gv)) dv.units.push(vv), dv.rows.push(zv);
          this.selectedCount++
        }
      }
      instanceBatch(vv) {
        const zv = this.batchOf(vv);
        return zv.dispatched || (zv.dispatched = zv.renderSelf = !0, zv.row = this.rowOf(vv)), zv
      }
      rowOf(vv) {
        return vv.row
      }
      activate(vv, zv) {
        if (!vv.zK) {
          const Pv = vv;
          if (Pv.Phv) {
            const vv = this.batchOf(Pv);
            vv.dispatched = !0, vv.renderSelf = !0, vv.row = zv
          }
          return void this.dispatch(Pv, zv, zv)
        }
        const Pv = vv,
          hv = Pv.hhv;
        if (hv._getWorldMatrixDeterminant() >= 0 !== Pv._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${hv.name}`, `A mirrored InstancedMesh of ${hv.name} is not drawn yet`);
        const Sv = this.batchOf(hv);
        Sv.instances.push(Pv), Sv.rows.push(zv), Sv.dispatched || (Sv.dispatched = !0, this.dispatch(hv, zv, this.rowOf(hv)))
      }
      batchOf(vv) {
        let zv = this.batches.get(vv);
        return zv || (zv = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(vv, zv)), zv.frame !== this.frame && (zv.frame = this.frame, zv.dispatched = !1, zv.renderSelf = !1, zv.instances.length = 0, zv.rows.length = 0), zv
      }
      dispatch(vv, zv, Pv) {
        const {
          layer: hv,
          parts: Sv
        } = this.model.meshes;
        if (!Sv[zv]) return;
        const ev = this.groupOf(hv[zv]),
          gv = vv;
        for (const pv of Fe(Sv[zv])) {
          const vv = Ye(pv);
          if (!vv) continue;
          const zv = vv.needAlphaBlendingForMesh(gv) ? ev.transparent : vv.needAlphaTestingForMesh(gv) ? ev.alphaTest : ev.opaque;
          zv.units.push(pv), zv.rows.push(Pv)
        }
      }
      groupOf(vv) {
        let zv = this.groups.get(vv);
        return zv || (zv = {
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
        }, this.groups.set(vv, zv)), zv
      }
    }
    class De {
      constructor() {
        this.Vp = new Map, this.enabled = [], this.groups = new Map, this.Yw = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(vv) {
        if (this.Vp.has(vv)) return;
        const zv = {
          mesh: vv,
          observer: vv.onEffectiveEnabledStateChangedObservable.add((vv => {
            this.uF(zv, vv)
          })),
          index: -1,
          steady: null
        };
        this.Vp.set(vv, zv), this.uF(zv, vv.isEnabled())
      }
      remove(vv) {
        const zv = this.Vp.get(vv);
        zv && (zv.observer.remove(!0), this.uF(zv, !1), this.Vp.delete(vv))
      }
      base(vv) {
        return this.Vp.get(vv)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Vp: this.Vp.size
        }
      }
      forEachSelected(vv) {
        for (const [zv, Pv] of this.groups) {
          for (const hv of Pv.opaque) vv(hv.owner, "opaque", zv);
          for (const hv of Pv.transparent) vv(hv.owner, "transparent", zv)
        }
        for (const zv of this.Yw) vv(zv.mesh, "opaque", 0)
      }
      group(vv) {
        return this.groups.get(vv)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(vv, zv) {
        this.drawn = 0, this.selected = 0, this.Yw.length = 0;
        for (const hv of this.groups.values()) hv.opaque.length = 0, hv.transparent.length = 0;
        if (!vv) return;
        const Pv = this.enabled;
        for (let hv = 0; hv < Pv.length; hv++) {
          const Sv = Pv[hv];
          if (Sv.steady && zv(Sv, vv)) {
            this.selected++, this.Yw.push(Sv);
            continue
          }
          const ev = Sv.mesh;
          if (ev.isBlocked || ev.pp.hasAZeroComponent) continue;
          if (!ev.isVisible || ev.visibility <= 0 || 0 === (ev.layerMask & vv.layerMask)) continue;
          if (ev.Phv) {
            this.warned.has(ev.name) || (this.warned.add(ev.name), console.warn(`Lite: thin instance base ${ev.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: gv
          } = ev;
          if (!gv) continue;
          ev.computeWorldMatrix(), this.selected++;
          const pv = this.listsFor(ev.renderingGroupId);
          for (const vv of Fe(gv)) {
            const zv = Ye(vv);
            zv && (zv.needAlphaBlendingForMesh(ev) ? pv.transparent.push(vv) : pv.opaque.push(vv))
          }
        }
      }
      uF(vv, zv) {
        if (zv === vv.index >= 0) return;
        vv.steady = null;
        const Pv = this.enabled;
        if (zv) vv.index = Pv.length, Pv.push(vv);
        else {
          const zv = Pv.pop();
          zv !== vv && (Pv[vv.index] = zv, zv.index = vv.index), vv.index = -1
        }
      }
      listsFor(vv) {
        let zv = this.groups.get(vv);
        return zv || (zv = {
          opaque: [],
          transparent: []
        }, this.groups.set(vv, zv)), zv
      }
    }
    var Ke = Pv(39035);
    class Ve {
      constructor() {
        this.bundle = null, this.stale = !0, this.Vp = new Set
      }
    }
    class Ue {
      constructor(vv, zv, Pv) {
        this.device = vv, this.slots = zv, this.host = Pv, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Ve, this.zD = new Ve, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new oS, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(vv) {
          var zv, Pv;
          let hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zv = null === (Pv = globalThis.navigator) || void 0 === Pv ? void 0 : Pv.userAgent) && void 0 !== zv ? zv : "";
          const Sv = vv.adapterInfo;
          return "intel" === (null === Sv || void 0 === Sv ? void 0 : Sv.vendor) && "gen-12lp" === Sv.architecture && hv.includes("Windows")
        }(vv), (0, Ke.D)(this.direct)
      }
      Qm() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Ke.D)(this.directThisFrame)
      }
      add(vv, zv, Pv, hv) {
        let Sv = this.records.get(vv);
        return Sv || (Sv = this.createRecord(vv), this.records.set(vv, Sv)), Sv.recorded && xe(Sv, zv) || (this.bundleOf(Sv).stale = !0), this.place(Sv, zv, Pv, hv), Sv
      }
      bundleOf(vv) {
        return vv.zD ? this.zD : this.main
      }
      addAgain(vv, zv, Pv, hv) {
        vv.recorded || (this.bundleOf(vv).stale = !0), this.place(vv, zv, Pv, hv)
      }
      place(vv, zv, Pv, hv) {
        vv.seen = this.frame, vv.zD && null === vv.draw && (this.zD.stale = !0), vv.draw = zv, this.drawn++, Pv && this.slots.write(vv.slot, Pv, hv) && (this.slotsFrom = Math.min(this.slotsFrom, vv.slot), this.slotsTo = Math.max(this.slotsTo, vv.slot));
        const Sv = this.args,
          ev = 5 * vv.slot;
        Sv[ev] === zv.count && Sv[ev + 1] === zv.instances && Sv[ev + 2] === zv.first || (Sv[ev] = zv.count, Sv[ev + 1] = zv.instances, Sv[ev + 2] = zv.first, this.argsDirty = !0, this.zD.stale ||= vv.zD)
      }
      Zm() {
        for (const vv of this.records.values()) vv.seen !== this.frame && (vv.draw && (vv.draw = null, this.args[5 * vv.slot + 1] = 0, this.argsDirty = !0, this.zD.stale ||= vv.zD), this.frame - vv.seen > 120 && (this.records.delete(vv.unit), this.freeSlots.push(vv.slot), vv.recorded && (this.bundleOf(vv).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(vv) {
        for (const zv of this.records.values()) zv.draw && zv.seen === this.frame && !zv.zD && vv(zv.draw, this.slots.data, zv.slot * Lh / 4)
      }
      resourceDestroyed(vv) {
        this.main.stale ||= this.main.Vp.has(vv), this.zD.stale ||= this.zD.Vp.has(vv)
      }
      execute(vv, zv, Pv) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(vv, zv, Pv, "direct"), this.drawn;
        const hv = this.host.sceneGroup(zv);
        if (!hv) return this.main.bundle = null, this.zD.bundle = null, this.recordedSceneGroup = null, this.encode(vv, zv, Pv, "direct"), this.drawn;
        this.recordedTarget === Pv && this.recordedSceneGroup === hv || (this.recordedTarget = Pv, this.recordedSceneGroup = hv, this.main.stale = !0, this.zD.stale = !0);
        const Sv = this.main,
          ev = this.zD;
        let gv = !1;
        !Sv.stale && Sv.bundle || (Sv.bundle = this.record(zv, Pv, hv, "indirect"), gv = !0);
        const pv = (0, Ke.l)();
        return (ev.stale || this.rangedEpoch !== pv) && (this.rangedEpoch = pv, ev.bundle = this.drawsRanged() ? this.record(zv, Pv, hv, "zD") : this.noRangedBundle(), gv = !0), gv && (this.bundles = ev.bundle ? [Sv.bundle, ev.bundle] : [Sv.bundle]), vv.executeBundles(this.bundles), vv.setBindGroup(0, hv), this.drawn
      }
      record(vv, zv, Pv, hv) {
        const Sv = this.device.createRenderBundleEncoder({
          label: "zD" === hv ? "thin-bases-ranged" : "thin-bases",
          colorFormats: vv._colorFormat ? [vv._colorFormat] : [],
          depthStencilFormat: vv._depthStencilFormat,
          sampleCount: vv._sampleCount
        });
        return Sv.setBindGroup(0, Pv), this.encode(Sv, vv, zv, hv), Sv.finish()
      }
      noRangedBundle() {
        for (const vv of this.records.values()) vv.zD && (vv.recorded = !1);
        return this.zD.Vp.clear(), this.zD.stale = !1, null
      }
      drawsRanged() {
        for (const vv of this.records.values())
          if (vv.zD && vv.draw) return !0;
        return !1
      }
      encode(vv, zv, Pv, hv) {
        const Sv = [];
        for (const dv of this.records.values()) "direct" !== hv && dv.zD !== ("zD" === hv) || (dv.recorded = !1, dv.draw && Sv.push(dv));
        Sv.sort(te);
        const ev = "direct" === hv ? null : "zD" === hv ? this.zD : this.main;
        null === ev || void 0 === ev || ev.Vp.clear(), this.binder.reset();
        let gv = !1;
        for (const dv of Sv) {
          var pv;
          const Sv = dv.draw,
            Nv = this.host.pipelineFor(Sv, zv, Pv);
          if (!Nv) {
            this.host.pipelineCompiling(Sv, Pv) ? gv = !0 : ev && this.keep(dv, Sv, ev.Vp);
            continue
          }
          let lv;
          if (dv.zD && "indirect" !== hv) {
            const vv = dv.unit.owner;
            lv = "direct" === hv && (0, Ke.r)(vv) || (0, Ke.m)(vv) || void 0
          }
          if (ev && this.keep(dv, Sv, ev.Vp), 0 === (null === (pv = lv) || void 0 === pv ? void 0 : pv.count)) continue;
          this.binder.bind(vv, Sv, Nv, this.slots.bindGroup, dv.slot * Lh);
          const Tv = 5 * dv.slot;
          if ("indirect" === hv) {
            Sv.indexBuffer ? vv.drawIndexedIndirect(this.argsBuffer, 4 * Tv) : vv.drawIndirect(this.argsBuffer, 4 * Tv);
            continue
          }
          const Wv = this.args;
          lv ? Re(vv, null !== Sv.indexBuffer, Wv, Tv, lv) : Sv.indexBuffer ? vv.drawIndexed(Wv[Tv], Wv[Tv + 1], Wv[Tv + 2], 0, 0) : vv.draw(Wv[Tv], Wv[Tv + 1], Wv[Tv + 2], 0)
        }
        ev && (ev.stale = gv)
      }
      keep(vv, zv, Pv) {
        vv.recorded = !0, vv.pipelineKey = zv.pipelineKey, vv.materialGroup = zv.material.bindGroup, vv.vertexBuffers.length = 0, vv.vertexBuffers.push(...zv.vertexBuffers), vv.vertexOffsets = zv.vertexOffsets, vv.indexBuffer = zv.indexBuffer, vv.indexFormat = zv.indexFormat;
        for (const hv of zv.vertexBuffers) Pv.add(hv);
        zv.indexBuffer && Pv.add(zv.indexBuffer), Pv.add(zv.material.buffer);
        for (const hv of zv.material.bound) hv && Pv.add(hv)
      }
      createRecord(vv) {
        let zv = this.freeSlots.pop();
        return void 0 === zv && (zv = this.slotCount++, this.grow()), {
          unit: vv,
          slot: zv,
          zD: void 0 !== (0, Ke.m)(vv.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.zD.stale = !0), 5 * this.slotCount > this.args.length) {
          const vv = new Uint32Array(2 * this.args.length);
          vv.set(this.args), this.args = vv, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function Re(vv, zv, Pv, hv, Sv) {
      const ev = Pv[hv + 1],
        gv = Sv.data;
      for (let pv = 0; pv < Sv.count; pv++) {
        const Sv = Math.min(gv[2 * pv], ev),
          dv = Math.min(gv[2 * pv + 1], ev - Sv);
        0 !== dv && (zv ? vv.drawIndexed(Pv[hv], dv, Pv[hv + 2], 0, Sv) : vv.draw(Pv[hv], dv, Pv[hv + 2], Sv))
      }
    }

    function xe(vv, zv) {
      if (vv.pipelineKey !== zv.pipelineKey || vv.materialGroup !== zv.material.bindGroup || vv.indexBuffer !== zv.indexBuffer || vv.indexFormat !== zv.indexFormat || vv.vertexOffsets !== zv.vertexOffsets || vv.vertexBuffers.length !== zv.vertexBuffers.length) return !1;
      for (let Pv = 0; Pv < vv.vertexBuffers.length; Pv++)
        if (vv.vertexBuffers[Pv] !== zv.vertexBuffers[Pv]) return !1;
      return !0
    }

    function te(vv, zv) {
      return rS(vv.draw, zv.draw)
    }
    const qe = new WeakMap,
      Ie = {
        depth: !1,
        sunShadow: !1
      };

    function Qe(vv, zv) {
      let Pv = qe.get(vv);
      Pv || (Pv = new Map, qe.set(vv, Pv));
      const hv = `${zv.depth?"-depth":""}${zv.sunShadow?"-shadow":""}${zv.shadowMask?"-mask":""}`;
      let Sv = Pv.get(hv);
      if (!Sv) {
        const ev = [{
          binding: Oz.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Oz.g
          }
        }, {
          binding: Oz.s,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        zv.depth && ev.push({
          binding: Oz.n,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), zv.sunShadow && ev.push(... function() {
          const vv = GPUShaderStage.FRAGMENT,
            zv = Oz.p;
          return [{
            binding: zv.uniform,
            visibility: vv,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: zv.fW,
            visibility: vv,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: zv.special,
            visibility: vv,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: zv.volume,
            visibility: vv,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: zv.sampler,
            visibility: vv,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: zv.entities,
            visibility: vv,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: zv.entityGrids,
            visibility: vv,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), zv.shadowMask && ev.push({
          binding: Oz.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Sv = vv.createBindGroupLayout({
          label: `${zv.depth?"terrain-":""}shader-pack-inputs${hv}`,
          entries: ev
        }), Pv.set(hv, Sv)
      }
      return Sv
    }

    function Ze(vv) {
      return Qe(vv, Ie)
    }

    function Ae(vv, zv) {
      if (!zv) return !1;
      const Pv = (0, Dz.g)(vv);
      return !!Pv && IP(Pv, zv)
    }

    function Le(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!Nh(zv)) return [];
      return [Qe(vv, {
        depth: Sh(zv.packVariant),
        sunShadow: Ae(zv.packVariant, Pv),
        shadowMask: hv
      })]
    }
    class He {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = vv, this.sunShadow = Pv, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Oz.g), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = vv.createBuffer({
          label: "shader-pack-inputs",
          size: Oz.g,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const hv = (0, Oz.v)(zv);
        this.textures = vv.createBuffer({
          label: "shader-pack-textures",
          size: hv.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), vv.queue.writeBuffer(this.textures, 0, hv), this.bindGroup = vv.createBindGroup({
          label: "shader-pack-inputs",
          layout: Ze(vv),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Oz.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Oz.s,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(vv, zv, Pv) {
        (0, Oz.C)(this.data, {
          seconds: vv.seconds(),
          lit: Pv,
          renderOffset: vv.renderOffset(),
          y_: vv.y_(),
          eyePosition: zv,
          shadowDirection: vv.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const hv = zv ? this.sunShadow : null;
        if ((zv || Pv) && !hv) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!vv && !hv) return this.bindGroup;
        (vv && vv !== this.depthView || Pv && Pv !== this.maskView) && (this.depthView = null !== vv && void 0 !== vv ? vv : this.depthView, this.maskView = null !== Pv && void 0 !== Pv ? Pv : this.maskView, this.groups.clear());
        const Sv = (vv ? 1 : 0) | (hv ? 2 : 0) | (Pv ? 4 : 0);
        let ev = this.groups.get(Sv);
        if (!ev) {
          const zv = this.entries();
          vv && zv.push({
            binding: Oz.n,
            resource: vv
          }), hv && zv.push(...hv.entries()), Pv && zv.push({
            binding: Oz.r,
            resource: Pv
          }), ev = this.device.createBindGroup({
            label: `${vv||Pv?"terrain-":""}shader-pack-inputs${vv?"-depth":""}${hv?"-shadow":""}${Pv?"-mask":""}`,
            layout: Qe(this.device, {
              depth: !!vv,
              sunShadow: !!hv,
              shadowMask: !!Pv
            }),
            entries: zv
          }), this.groups.set(Sv, ev)
        }
        return ev
      }
      bind(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        vv.setBindGroup(Oz.d, this.bindGroupFor(zv, Pv, hv))
      }
    }

    function Me(vv, zv, Pv) {
      if (vv.gpuVersion === zv.gpuBuffersVersion) return !0;
      let hv;
      do {
        if (hv = zv.gpuBuffersVersion, !ye(vv, zv, Pv)) return !1
      } while (zv.gpuBuffersVersion !== hv);
      return vv.gpuVersion = hv, vv.fitInstances = 0, !0
    }

    function ye(vv, zv, Pv) {
      let hv = null;
      for (let ev = 0; ev < vv.slotData.length; ev++) {
        var Sv;
        const gv = vv.slotData[ev],
          pv = gv ? zv.gpuBuffer(gv) : Pv;
        if (!pv) return !1;
        gv && vv.layout.instanceEnds[ev] < 0 && zv.cover(gv, Number.POSITIVE_INFINITY), vv.buffers[ev] = pv;
        const dv = vv.Lk[ev] + (gv ? zv.gpuOffset(gv) : 0);
        dv !== (null !== (Sv = hv) && void 0 !== Sv ? Sv : vv.offsets)[ev] && (hv ??= vv.offsets.slice(), hv[ev] = dv), vv.ends[ev] = gv ? zv.gpuEnd(gv) : pv.size
      }
      return hv && (vv.offsets = hv), !0
    }

    function Be(vv, zv, Pv, hv) {
      if (zv <= vv.fitInstances) return null;
      const {
        layout: Sv,
        ends: ev,
        offsets: gv,
        slotData: pv,
        Lk: dv
      } = vv;
      let Nv = !1;
      for (let lv = 0; lv < Sv.buffers.length; lv++) {
        const vv = Sv.instanceEnds[lv];
        if (vv < 0) continue;
        const hv = (zv - 1) * Sv.buffers[lv].arrayStride + vv;
        if (ev[lv] - gv[lv] < hv) return {
          index: lv,
          needed: hv
        };
        const Tv = pv[lv];
        Tv && Pv.cover(Tv, dv[lv] + hv) && (Nv = !0)
      }
      return Nv && Me(vv, Pv, hv), vv.fitInstances = zv, null
    }
    var Je = Pv(37341),
      Ee = Pv(37384);
    const oe = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      be = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      re = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      ke = `((vertexInputs.aPackedLightLevels >> 16u) | ${dz.c.placed}u)`,
      Xe = "u32(vertexInputs.aShaderPackItem.x)",
      ue = `${dz.c.lifeform}u`;

    function vg(vv) {
      return "item" === vv.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const zg = "bloxdSpEnchant",
      Pg = "floor(finalWorld[3].xyz)";

    function hg(vv, zv, Pv) {
      return "placed" === zv.kind && vv.reads[Pv].includes("bloxdFragmentBlockPosition")
    }

    function Sg(vv, zv) {
      let [Pv, hv] = vv;
      return Pv === zv.point && hv === zv.code
    }

    function eg(vv, zv) {
      var Pv, hv, Sv;
      const ev = null === (Pv = vv.find((vv => vv.texture))) || void 0 === Pv ? void 0 : Pv.texture,
        gv = null === (hv = vv.find((vv => vv.enchantTier))) || void 0 === hv ? void 0 : hv.enchantTier,
        pv = null === (Sv = vv.find((vv => vv.overlay))) || void 0 === Sv ? void 0 : Sv.overlay,
        dv = pv ? zv.filter((vv => Sg(vv, pv))).length : 0;
      return pv && 1 === dv ? {
        texture: ev,
        overlay: pv,
        enchantTier: gv
      } : {
        texture: ev,
        enchantTier: gv
      }
    }

    function gg(vv) {
      if ("item" === vv.kind) {
        return {
          vertexFlags: `(${Xe} & 0xffffu)`,
          varying: "vPackItem",
          value: Xe,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return vv.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: ke,
        varying: "vPackFlags",
        value: ke,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function pg(vv) {
      return "lifeform" === vv.kind ? ue : "0u"
    }

    function dg(vv) {
      return !!vv.BLOXD_PLUGIN_ENCHANTMENT
    }

    function Ng(vv, zv) {
      const {
        enchantTier: Pv
      } = zv;
      return Pv && dg(zv.defines) && "lifeform" === zv.kind && sg(vv, "enchantTier") ? Pv : null
    }

    function lg(vv, zv) {
      return dg(zv.defines) && sg(vv, "enchantSpeed")
    }

    function Tg(vv) {
      const {
        overlay: zv,
        defines: Pv
      } = vv;
      if (!zv || !Pv.DIFFUSE) return null;
      const hv = Pv.VERTEXCOLOR || Pv.INSTANCESCOLOR && Pv.INSTANCES;
      return `vec4f(${zv.colour}.rgb * uniforms.vDiffuseInfos.y${hv?" * fragmentInputs.vColor.rgb":""}, ${zv.colour}.a)`
    }
    const Wg = "fragmentInputs.vPackTexture";

    function wg(vv) {
      const {
        atlas: zv,
        defines: Pv,
        texture: hv
      } = vv;
      if (zv || !Pv.DIFFUSE) return null;
      if (hv) return {
        texture: "diffuseSampler",
        ...hv
      };
      const Sv = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===Pv.DIFFUSEDIRECTUV?"vMainUV1":2===Pv.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== vv.kind) return Sv;
      if (!Pv.BLOXD_PLUGIN_ANIMATED) return {
        ...Sv,
        id: Wg
      };
      const ev = fv.d.WGSL,
        gv = (0, fv.vb)(ev, "uAnimStatesNum"),
        pv = (0, fv.ab)(ev, (0, Je.g)(ev), gv),
        dv = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${gv})`,
        layers: [pv],
        uv: `vec2f(${dv}.x, ${dv}.y * ${gv} - ${pv})`,
        levelUv: dv,
        id: Wg
      }
    }

    function ag(vv, zv) {
      return "box" === zv.kind && !!vv.hooks.surface && null !== wg(zv)
    }

    function sg(vv, zv) {
      return vv.reads.fragment.includes(zv)
    }

    function Cg(vv) {
      return !!vv.BLOXD_LIGHTING && !vv.BLOXD_UNLIT
    }

    function ig(vv, zv, Pv, hv) {
      const Sv = vv.filter((vv => {
        let [Pv, hv] = vv;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === Pv && hv === zv
      }));
      if (1 !== Sv.length) throw new Error(`A model program for shader packs has ${0===Sv.length?"no":"more than one"} ${hv} code before fog (lite/modelShaderPack.ts)`);
      return vv.map((vv => vv === Sv[0] ? [vv[0], Pv] : vv))
    }

    function cg(vv, zv, Pv, hv) {
      const {
        hooks: Sv
      } = vv, {
        kind: ev,
        defines: gv
      } = zv, pv = [...Pv];
      var dv;
      zv.atlas && Sv.surface && pv.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", yP("atlasIdxIn")]), "item" === ev && pv.push(["CUSTOM_VERTEX_DEFINITIONS", (0, fv.g)(fv.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), ag(vv, zv) && pv.push(["CUSTOM_VERTEX_DEFINITIONS", (0, fv.g)(fv.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (dv = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${HP}[min(u32(${dv}) - 1u, arrayLength(&${HP}) - 1u)], ${dv} > 0.5);\n`)]);
      const Nv = gg(zv);
      Nv && (Sv.surface || Sv.light) && pv.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Nv.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Nv.varying} = ${Nv.value};`]);
      let lv = hv;
      if (hg(vv, zv, "fragment") && (pv.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Pg});`]), lv = [...lv, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), sg(vv, "localPosition") && pv.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${vg(zv)};`]), dg(gv) && Sv.surface) {
        lg(vv, zv) && pv.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const Pv = Ng(vv, zv);
        Pv && pv.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${Pv});`]);
        const hv = (0, fv.jb)(fv.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        lv = [...ig(lv, (0, Ee.h)(fv.d.WGSL), hv, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Ee.d)(zg)]]
      }
      const {
        overlay: Tv
      } = zv;
      Tv && Tg(zv) && Sv.surface && (lv = lv.filter((vv => !Sg(vv, Tv))));
      const Wv = Sv.light ? function(vv) {
        return "placed" === vv.kind ? {
          name: "terrain",
          engine: (0, Fz.P)(fv.d.WGSL),
          pack: (0, Fz.bb)(fv.d.WGSL)
        } : vv.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Fz.J)(fv.d.WGSL),
          pack: (0, Fz._)(fv.d.WGSL)
        } : null
      }(zv) : null;
      if (Wv && (lv = ig(lv, Wv.engine, Wv.pack, `${Wv.name} light`), "placed" !== ev && Cg(gv))) {
        const vv = gv.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, fv.vb)(fv.d.WGSL, "uEntityLightLevels") : (0, fv.Bb)(fv.d.WGSL, "aLightLevels");
        pv.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Fz.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Fz.ab)(fv.d.WGSL, vv)])
      }
      return {
        vertexCode: pv,
        fragmentCode: lv
      }
    }

    function Gg(vv, zv, Pv, hv) {
      return tP(vv, zv, Pv, hv, "model")
    }
    const mg = "\t@builtin(position) position: vec4f,\n";

    function jg(vv, zv) {
      const Pv = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(vv)[0];
      return `${Pv}${zv}${vv.slice(Pv.length)}`
    }

    function fg(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Sv
      } = zv, ev = IP(zv, hv), {
        kind: gv,
        defines: pv
      } = Pv, dv = function(vv, zv) {
        var Pv, hv, Sv;
        const {
          defines: ev
        } = zv, gv = gg(zv), pv = !!ev.FOG, dv = dg(ev), Nv = null !== (Pv = null === gv || void 0 === gv ? void 0 : gv.enchantTier) && void 0 !== Pv ? Pv : Ng(vv, zv) ? "fragmentInputs.vPackEnchantTier" : "0u", lv = "lifeform" === zv.kind && !ev.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (hv = null === gv || void 0 === gv ? void 0 : gv.vertexFlags) && void 0 !== hv ? hv : pg(zv),
          vertexLocalPosition: vg(zv),
          flags: null !== (Sv = null === gv || void 0 === gv ? void 0 : gv.flags) && void 0 !== Sv ? Sv : pg(zv),
          normal: "normalW",
          alpha: lv ? "alpha * baseColor.a" : "alpha",
          alphaOut: lv ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: pv ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: pv ? "1.0 - fog" : "0.0",
          enchantTier: Nv,
          enchantColour: dv ? `${zg}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: lg(vv, zv) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: sg(vv, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Tg(zv)
        }
      }(zv, Pv), Nv = vv.textures.filter((vv => /^textureAtlas\d+$/.test(vv.name))).length, lv = Pv.atlas && Nv > 0 ? {
        count: Nv,
        layers: Pv.atlas.layers,
        width: Pv.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: vv.material.slots.has("uAnimDataPerTex") ? (zv, Pv) => Oh(zv, Pv, function(vv) {
          const zv = vv.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            MT: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: vv => `uniforms.uAnimDataPerTex[${vv}]${zv}`
          }
        }(vv)) : null
      } : null, Tv = "placed" === gv ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Wv = null !== lv && void 0 !== lv ? lv : wg(Pv), wv = function(vv, Pv) {
        let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Oz.z)()}${ZP(zv,Pv)}${hv}${JP(vv)}${UP}${Tv}${zv.code}`
      };
      let {
        vertex: av,
        fragment: sv
      } = vv;
      const Cv = oP(Sv, dv);
      if (Cv) {
        const vv = hg(zv, Pv, "vertex") ? `\tbloxdSpCell = ${Pg};\n` : "";
        av = Gg(av, oe, `${vv}${Cv.slice(1)}${oe}`, "vertex")
      }
      const iv = `${AP(zv,ev,function(vv,zv){return zv.TWOSIDEDLIGHTING?vv:`select(-(${vv}), ${vv}, fragmentInputs.frontFacing)`}(dv.normal,pv),dv.flags)}${bP(Sv,zv.strict,zv.program,Wv,dv)}`;
      iv && (sv = Gg(sv, be, `${iv.slice(1)}${be}`, "surface")), ev && zv.sunShadow && !pv.TWOSIDEDLIGHTING && (sv = Gg(sv, mg, `${mg}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const cv = XP(Sv);
      if (cv) {
        const vv = kP(Sv, Cg(pv), !0, dv);
        sv = Gg(sv, re, `${vv}${cv.slice(1)}${re}`, "light")
      }
      const Gv = ag(zv, Pv) ? MP : "";
      return {
        ...vv,
        vertex: jg(av, wv(lv, !1, Gv)),
        fragment: jg(sv, wv(Wv, ev))
      }
    }
    const Fg = {
      name: "earthSky",
      uniqueId: -1
    };
    class Yg {
      constructor(vv) {
        this.resources = vv, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const vv of this.instances.values()) vv.released = !0, this.resources.destroyBuffer(vv.buffer);
        this.instances.clear()
      }
    }

    function ng(vv) {
      return vv.failed && null !== vv.packGroup
    }
    class Og {
      constructor(vv, zv, Pv) {
        this.device = vv, this.resources = zv, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Vk = new De, this.modelMeshes = new Oe, this.thinBundle = void 0, this.binder = new oS, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new se((vv => this.modelSlot(vv).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Nz.d)("Lite: "), this.renderStates = new le(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (vv, zv) => this.keepSteady(vv, zv), this.lists = new bS(this.modelMeshes, this.Vk, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new ge(zv, this.warnOnce, ((vv, zv, Pv) => this.programWithModel(vv, zv, Pv)), ng), this.vertexLayouts = new Ge(zv, vv.limits, this.warnOnce), this.sceneLayout = zz(vv), this.frameLayout = vv.createBindGroupLayout({
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
        }), this.frameBuffer = vv.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new fe(vv, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = vv.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Ue(vv, new fe(vv, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (vv, zv, Pv) => this.pipelineFor(vv, zv, Pv),
          pipelineCompiling: (vv, zv) => !vv.program.failed && !1 !== this.pipelines.get(`${vv.pipelineKey}|${zv}`),
          sceneGroup: vv => {
            const zv = Pv(vv);
            return zv || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), zv
          }
        }), zv.onDestroy = vv => {
          this.thinBundle.resourceDestroyed(vv)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Sv = {
          order: vv,
          isTransparent: zv,
          _direct: !zv,
          bind: (vv, zv) => this.createBinding(Sv, zv, Pv, hv)
        };
        return Sv
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(vv, zv, Pv) {
        var hv;
        let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = zv, this.drawDefines.view = zv, this.thinBundle.Qm(), this.writeFrameUniforms();
        const ev = null !== (hv = null === Sv || void 0 === Sv ? void 0 : Sv.defineFor("model")) && void 0 !== hv ? hv : 0;
        this.drawDefines.modelPackVariant = ev, Sv && 0 !== ev && (this.packInputs ??= new He(this.device, Sv.textureLayers(), this.sunShadow), this.packInputs.write(Sv, zv.eye, Sv.Vs())), this.lists.clear(), this.slotCount = 0;
        const gv = vv.activeCamera;
        this.Vk.select(gv, this.keepSteadyBase), this.modelMeshes.select(gv, zv), Pv && this.pushEarthSky(Pv), this.lists.collect(vv), this.thinBundle.Zm(), this.uploadMeshSlots()
      }
      pushDraws(vv, zv, Pv, hv, Sv, ev) {
        let gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const pv = ev.length;
        for (let dv = 0; dv < Pv; dv++) {
          const Pv = zv[dv];
          let pv = this.retainedDraw(vv, Pv, hv, Sv);
          if (void 0 === pv && (pv = this.drawFor(vv, Pv, hv, Sv), this.retain(Pv, pv)), pv) {
            const vv = Pv.owner,
              zv = gv ? gv[dv] : -1;
            pv.slotOffset = zv < 0 ? this.writeMeshSlot(vv.getWorldMatrix().m, vv.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[zv], 16 * zv), ev.push(pv)
          }
        }
        return ev.length - pv
      }
      bundleDraws(vv, zv, Pv) {
        let hv = 0;
        for (const Sv of zv) {
          let zv = this.retainedDraw(vv, Sv, Pv, !1);
          const ev = void 0 !== zv;
          if (void 0 === zv && (zv = this.drawFor(vv, Sv, Pv, !1), this.retain(Sv, zv)), zv) {
            const vv = Sv.owner,
              Pv = this.thinBundle.add(Sv, zv, vv.getWorldMatrix().m, vv.visibility);
            ev && this.steadyFrom(Sv, zv, Pv), hv++
          }
        }
        return hv
      }
      steadyFrom(vv, zv, Pv) {
        const hv = vv.owner,
          Sv = this.Vk.base(hv),
          ev = hv.material,
          {
            drawState: gv,
            instance: pv
          } = zv.inputs.retained;
        if (!Sv || !ev || 1 !== vv.parts.materials.length || Ye(vv) !== ev) return;
        const dv = Sv.steady ??= {
          unit: vv,
          material: ev,
          visibility: 1,
          draw: zv,
          record: Pv,
          drawState: gv,
          instance: pv,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        dv.unit = vv, dv.material = ev, dv.visibility = hv.visibility, dv.draw = zv, dv.record = Pv, dv.drawState = gv, dv.instance = pv, dv.bindGroup = pv.bindGroup, dv.gpuVersion = this.resources.gpuBuffersVersion, dv.fitInstances = zv.inputs.fitInstances, dv.worldFlag = hv.getWorldMatrix().updateFlag, dv.handedFrame = this.frame
      }
      keepSteady(vv, zv) {
        const Pv = vv.steady;
        if (Pv.handedFrame !== this.frame - 1 || (this.frame + Pv.phase) % 8 === 0) return !1;
        const hv = vv.mesh,
          {
            unit: Sv,
            draw: ev,
            instance: gv,
            drawState: pv
          } = Pv,
          dv = hv.forcedInstanceCount || hv.yX;
        if (!hv.isVisible || hv.Phv || hv.visibility !== Pv.visibility || 0 === (hv.layerMask & zv.layerMask) || hv.material !== Pv.material || 0 !== hv.renderingGroupId || hv.hasVertexAlpha || !this.drawDefines.definesHold(pv, Sv, pv.instancing) || Pv.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(ev.inputs, Sv, pv.instancing, ev.program) || ev.program.failed || gv.released || dv <= 0 || dv > Pv.fitInstances) return !1;
        if (gv.frame !== this.frame && this.bindMaterial(gv, this.modelUniforms.refreshModelUniforms(hv.rD(), gv, gv.model, this.view)), !gv.bindable || gv.bindGroup !== Pv.bindGroup) return !1;
        const Nv = hv.computeWorldMatrix(),
          lv = Nv.updateFlag !== Pv.worldFlag;
        return Pv.worldFlag = Nv.updateFlag, ev.instances = dv, this.thinBundle.addAgain(Pv.record, ev, lv ? Nv.m : null, Pv.visibility), Pv.handedFrame = this.frame, this.Vk.drawn++, !0
      }
      retainedDraw(vv, zv, Pv, hv) {
        const Sv = this.inputs.get(zv),
          ev = null === Sv || void 0 === Sv ? void 0 : Sv.retained;
        if (!Sv || !ev) return;
        const {
          drawState: gv,
          program: pv,
          instance: dv,
          instancing: Nv
        } = ev, lv = zv.owner;
        if (ve(lv) !== Nv) return;
        const Tv = this.instanceCount(lv, Nv);
        if (Tv <= 0) return null;
        if (dv.released || pv.failed || gv.program !== pv || !this.drawDefines.programCurrent(gv, zv, Nv, Pv) || !this.inputsStamped(Sv, zv, Nv, pv) || lv.isUnIndexed !== ev.unIndexed || this.indexKey(zv) !== ev.indexData) return;
        if (ev.indexBuffer && ev.gpuVersion !== this.resources.gpuBuffersVersion) {
          const vv = this.resources.gpuBuffer(ev.indexData);
          if (!vv) return;
          ev.indexBuffer = vv, ev.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Wv = !1;
        if (dv.frame !== this.frame && (Wv = this.modelUniforms.refreshModelUniforms(vv, dv, dv.model, this.view)), !this.bindMaterial(dv, Wv) || !this.withGpuBuffers(Sv) || !this.instanceBuffersFit(lv.name, Sv, Tv)) return null;
        const wv = this.makeDraw(pv, Sv, this.renderStates.renderState(gv.model, lv, hv, Sv.state), dv, Tv);
        return this.setRange(wv, zv, ev.indexBuffer, ev.indexData), wv
      }
      retain(vv, zv) {
        const Pv = this.drawDefines.drawStates.get(vv);
        if (!zv || !Pv || Pv.program !== zv.program) {
          const zv = this.inputs.get(vv);
          return void(zv && (zv.retained = null))
        }
        const hv = vv.owner,
          Sv = Pv.instancing,
          ev = this.indexKey(vv),
          gv = zv.inputs.retained;
        gv ? (gv.drawState = Pv, gv.instancing = Sv, gv.program = zv.program, gv.instance = zv.material, gv.indexData = ev, gv.unIndexed = hv.isUnIndexed, gv.indexBuffer = zv.indexBuffer, gv.gpuVersion = this.resources.gpuBuffersVersion) : zv.inputs.retained = {
          drawState: Pv,
          instancing: Sv,
          program: zv.program,
          instance: zv.material,
          indexData: ev,
          unIndexed: hv.isUnIndexed,
          indexBuffer: zv.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(vv, zv, Pv, hv) {
        const Sv = zv.owner,
          ev = Ye(zv);
        if (!ev) return null;
        const gv = ev.getClassName();
        let pv = null;
        if (function(vv) {
            return "LinesMesh" === vv.getClassName()
          }(Sv)) {
          if (! function(vv) {
              return "ShaderMaterial" === vv.getClassName() && "color" === vv.shaderPath
            }(ev)) return this.warnOnce(`lines:${gv}`, `A LinesMesh with a ${gv} is not drawn yet (${ev.name})`), null;
          pv = Sv
        } else if ("StandardMaterial" !== gv && "LiteMaterial" !== gv) return this.warnOnce(`class:${gv}`, `${gv} is not drawn yet (${ev.name})`), null;
        const dv = ve(Sv),
          Nv = this.instanceCount(Sv, dv);
        if (Nv <= 0) return null;
        const lv = pv ? this.lineProgramFor(Sv, Pv, dv) : this.drawDefines.programFor(vv, zv, ev, Pv, dv);
        if (!lv || lv.failed) return null;
        const Tv = pv ? null : this.drawDefines.drawStates.get(zv).model,
          Wv = Tv ? this.modelInstance(Tv, lv) : this.materialInstance(Sv, lv);
        let wv = !1;
        if (Wv.frame !== this.frame && (pv ? cv(Wv.ubo, pv) : wv = this.modelUniforms.refreshModelUniforms(vv, Wv, Wv.model, this.view)), !this.bindMaterial(Wv, wv)) return null;
        const av = this.meshInputs(zv, lv, dv);
        if (!av || !this.instanceBuffersFit(Sv.name, av, Nv)) return null;
        const sv = this.indexKey(zv);
        let Cv = null;
        if (sv && !Sv.isUnIndexed && (Cv = this.resources.gpuBuffer(sv), !Cv)) return null;
        const iv = this.renderStates.renderState(null !== Tv && void 0 !== Tv ? Tv : ev, Sv, hv, av.state, pv ? "line-list" : "triangle-list"),
          Gv = this.makeDraw(lv, av, iv, Wv, Nv);
        return this.setRange(Gv, zv, Cv, sv), Gv
      }
      indexKey(vv) {
        const zv = Se(vv);
        return zv ? this.resources.modelIndex(zv) : null
      }
      setRange(vv, zv, Pv, hv) {
        Pv && (vv.indexBuffer = Pv, vv.indexFormat = this.resources.indexFormat(hv));
        const Sv = 4 * zv.range + (Pv ? 0 : 2);
        vv.unit = zv, vv.first = zv.parts.PC[Sv], vv.count = zv.parts.PC[Sv + 1]
      }
      makeDraw(vv, zv, Pv, hv, Sv) {
        zv.state !== Pv && (zv.state = Pv, zv.pipelineKey = `${vv.id}|${zv.layout.key}|${Pv.key}`, zv.pipeline = null);
        const ev = zv.draw ??= {
          program: vv,
          inputs: zv,
          pipelineKey: "",
          layout: zv.layout,
          state: Pv,
          material: hv,
          slotOffset: 0,
          vertexBuffers: zv.buffers,
          vertexOffsets: zv.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Sv,
          unit: null
        };
        return ev.program = vv, ev.pipelineKey = zv.pipelineKey, ev.state = Pv, ev.material = hv, ev.vertexOffsets = zv.offsets, ev.indexBuffer = null, ev.instances = Sv, ev
      }
      instanceCount(vv, zv) {
        switch (zv) {
          case "thin":
            return vv.forcedInstanceCount || vv.yX;
          case "instanced":
            return this.prepareInstances(vv);
          case "none":
            return 1
        }
      }
      prepareInstances(vv) {
        const zv = function(vv, zv) {
          const Pv = zv._userInstancedBuffersStorage,
            hv = vv.batchUploads.get(zv);
          if (hv) {
            var Sv;
            if (hv.layout === (null !== (Sv = null === Pv || void 0 === Pv ? void 0 : Pv.interleavedKinds) && void 0 !== Sv ? Sv : null)) return hv;
            hv.release()
          }
          return new Jv(vv, zv, Pv)
        }(this.resources, vv);
        return zv.frame !== this.frame && zv.pack(vv, this.modelMeshes.instanceBatch(vv), this.modelMeshes.worlds, this.frame), zv.count
      }
      programWithModel(vv, zv, Pv) {
        const hv = this.modelSlot(vv),
          Sv = pe(hv, vv, Pv),
          ev = this.drawDefines.modelPackKind(vv),
          gv = ev ? function(vv, zv, Pv, hv) {
            const Sv = (0, nv.x)(vv, Fv.g.name),
              ev = [];
            for (const {
                feature: dv,
                state: Nv,
                active: lv
              }
              of vv.features) {
              var gv, pv;
              const vv = lv ? null === (gv = (pv = (0, lz.g)(dv)).Bw) || void 0 === gv ? void 0 : gv.call(pv, Nv) : void 0;
              vv && ev.push(vv)
            }
            return {
              kind: zv,
              atlas: null !== Sv && void 0 !== Sv && Sv.active ? (0, Fv.b)(Sv.state) : null,
              defines: Pv,
              ...eg(ev, hv)
            }
          }(vv, ev, zv, hv.fragmentCode) : null;
        if (gv && function(vv) {
            const zv = vv.defines;
            return (null === vv.atlas || !!zv.DIFFUSE && 1 === zv.DIFFUSEDIRECTUV) && !!zv.NORMAL && !zv.REFLECTION && !zv.EMISSIVEASILLUMINATION && !zv.LINKEMISSIVEWITHDIFFUSE
          }(gv)) {
          const Pv = this.modelPackProgram(vv, zv, `${Sv}#${ev}#sp${this.drawDefines.modelPackVariant}`, hv, gv);
          if (Pv && !Pv.failed) return Pv
        }
        const pv = this.programs.get(Sv);
        if (pv || this.unbuildable.has(Sv)) return null !== pv && void 0 !== pv ? pv : null;
        let dv;
        try {
          dv = pS({
            defines: Pe(zv),
            vertexCode: hv.vertexCode,
            fragmentCode: hv.fragmentCode,
            pluginUniforms: hv.pluginUniforms
          })
        } catch (Nv) {
          return this.unbuildable.add(Sv), this.warnOnce(`build:${Sv}`, `could not build a program for ${vv.name}: ${String(Nv)}`), null
        }
        return this.createProgram(Sv, dv, "standard")
      }
      modelPackProgram(vv, zv, Pv, hv, Sv) {
        const ev = this.programs.get(Pv);
        if (ev || this.unbuildable.has(Pv)) return null !== ev && void 0 !== ev ? ev : null;
        const gv = this.drawDefines.modelPackVariant;
        let pv;
        try {
          const vv = function(vv) {
              return (0, Dz.c)(vv, "model")
            }(gv),
            Pv = cg(vv, Sv, hv.vertexCode, hv.fragmentCode);
          pv = fg(pS({
            defines: Pe(zv),
            ...Pv,
            pluginUniforms: hv.pluginUniforms
          }), vv, Sv, !!this.sunShadow)
        } catch (lv) {
          return this.unbuildable.add(Pv), this.warnOnce(`build:${Pv}`, `could not build a shader pack program for ${vv.name}, which draws without the pack: ${String(lv)}`), null
        }
        const dv = Ae(gv, !!this.sunShadow),
          Nv = {
            group: this.packInputs.bindGroupFor(null, dv),
            layout: Qe(this.device, {
              depth: !1,
              sunShadow: dv
            })
          };
        return this.createProgram(Pv, pv, function(vv) {
          return `standard-sp${vv}`
        }(gv), Nv)
      }
      lineProgramFor(vv, zv, Pv) {
        const hv = iv(vv, Pv, zv, this.view);
        let Sv = this.linePrograms.get(hv);
        var ev;
        return Sv || (Sv = this.createProgram(`lines#${hv}`, (ev = function(vv) {
          const zv = new Map;
          for (let Pv = 0; Pv < Nv.length; Pv++) vv & 1 << Pv && zv.set(Nv[Pv], !0);
          return zv
        }(hv), TS({
          defines: ev,
          vertex: NS,
          fragment: lS,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(hv, Sv)), Sv
      }
      createProgram(vv, zv, Pv) {
        var hv;
        let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const ev = this.nextProgramId++,
          gv = `${Pv}-${ev}`,
          pv = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          dv = [{
            binding: 0,
            visibility: pv,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Tv of zv.textures) dv.push({
          binding: Tv.binding,
          visibility: pv,
          texture: {
            viewDimension: Tv.dimension
          }
        }), dv.push({
          binding: Tv.samplerBinding,
          visibility: pv,
          sampler: {}
        });
        const Nv = this.device.createBindGroupLayout({
            label: gv,
            entries: dv
          }),
          lv = {
            key: vv,
            id: ev,
            kind: Pv,
            program: zv,
            vertex: this.device.createShaderModule({
              label: `${gv}-vertex`,
              code: zv.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${gv}-fragment`,
              code: zv.fragment
            }),
            materialLayout: Nv,
            pipelineLayout: this.device.createPipelineLayout({
              label: gv,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Nv, ...Sv ? [Sv.layout] : []]
            }),
            packGroup: null !== (hv = null === Sv || void 0 === Sv ? void 0 : Sv.group) && void 0 !== hv ? hv : null,
            failed: !1
          };
        return this.programs.set(vv, lv), lv
      }
      writeFrameUniforms() {
        const vv = this.frameUniforms;
        ae(this.view, vv), this.device.queue.writeBuffer(this.frameBuffer, 0, vv)
      }
      materialInstance(vv, zv) {
        let Pv = this.materials.get(vv);
        if (!Pv) {
          const zv = new Map;
          this.materials.set(vv, zv), vv.uD.addOnce((() => {
            for (const vv of zv.values()) vv.released = !0, this.resources.destroyBuffer(vv.buffer);
            this.materials.delete(vv)
          })), Pv = zv
        }
        let hv = Pv.get(zv.key);
        return hv || (hv = this.newMaterialInstance(vv, null, zv), Pv.set(zv.key, hv)), hv
      }
      modelInstance(vv, zv) {
        const Pv = this.modelSlot(vv);
        let hv = Pv.instances.get(zv.key);
        return hv || (hv = this.newMaterialInstance(vv, vv, zv), Pv.instances.set(zv.key, hv)), hv
      }
      modelSlot(vv) {
        let zv = vv.gpu[Dv.g.lite];
        return zv || (zv = new Yg(this.resources), vv.gpu[Dv.g.lite] = zv), zv
      }
      newMaterialInstance(vv, zv, Pv) {
        const hv = Pv.program.material.floats,
          Sv = new Float32Array(hv),
          ev = new Map;
        return {
          owner: vv,
          model: zv,
          program: Pv,
          data: Sv,
          uploaded: new Float32Array(hv).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${vv.name}-uniforms`,
            size: Math.max(16, 4 * hv),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: ev,
          ubo: new we(Pv.program.material.slots, Sv, ev),
          bindGroup: null,
          bound: new Array(2 * Pv.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(vv) {
        var zv;
        const Pv = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: CS + iS,
            fragment: CS + cS,
            attributes: [],
            material: sS,
            textures: []
          }, "earthSky"),
          hv = this.earthSkyUniforms ??= this.newMaterialInstance(Fg, null, Pv);
        this.earthSkyFrom !== vv && (this.earthSkyFrom = vv, hv.data.fill(0)), OS(hv.ubo, vv, this.view);
        const Sv = this.vertexInputs(Pv, Fg, "earthSky", Pv, null);
        if (Pv.failed || !Sv || !this.bindMaterial(hv, !1)) return;
        const ev = null !== (zv = Sv.state) && void 0 !== zv ? zv : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          gv = this.makeDraw(Pv, Sv, ev, hv, 1);
        gv.count = WS.length;
        const pv = DS(vv, this.view);
        gv.slotOffset = this.writeMeshSlot(pv, 1), this.lists.skyDraws.push(gv)
      }
      uploadIfChanged(vv) {
        const {
          data: zv,
          uploaded: Pv
        } = vv;
        for (let hv = 0; hv < zv.length; hv++)
          if (zv[hv] !== Pv[hv]) return Pv.set(zv), void this.device.queue.writeBuffer(vv.buffer, 0, zv)
      }
      bindMaterial(vv, zv) {
        return vv.frame !== this.frame && (vv.frame = this.frame, zv || this.uploadIfChanged(vv), vv.bindable = this.bindTextures(vv)), vv.bindable
      }
      bindTextures(vv) {
        const {
          program: zv,
          bound: Pv
        } = vv, hv = zv.program.textures;
        let Sv = !vv.bindGroup,
          ev = !0;
        for (let gv = 0; gv < hv.length; gv++) {
          const zv = vv.textures.get(hv[gv].name),
            pv = zv ? this.resources.boundTexture(zv) : null;
          pv ? Pv[2 * gv] === pv.view && Pv[2 * gv + 1] === pv.sampler || (Pv[2 * gv] = pv.view, Pv[2 * gv + 1] = pv.sampler, Sv = !0) : (zv || vv.ubo.expected.has(hv[gv].name) || this.warnOnce(`texture:${vv.owner.name}:${hv[gv].name}`, `${vv.owner.name} has no ${hv[gv].name}`), ev = !1)
        }
        if (!ev) return Sv && (vv.bindGroup = null), !1;
        if (Sv) {
          const Sv = [{
            binding: 0,
            resource: {
              buffer: vv.buffer
            }
          }];
          for (let vv = 0; vv < hv.length; vv++) Sv.push({
            binding: hv[vv].binding,
            resource: Pv[2 * vv]
          }), Sv.push({
            binding: hv[vv].samplerBinding,
            resource: Pv[2 * vv + 1]
          });
          vv.bindGroup = this.device.createBindGroup({
            label: `${vv.owner.name}-material`,
            layout: zv.materialLayout,
            entries: Sv
          })
        }
        return !0
      }
      writeMeshSlot(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, vv, zv, Pv), this.slotCount++ * Lh
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(vv, zv, Pv, hv, Sv) {
        let ev = this.inputs.get(vv);
        if (!ev || ev.program !== hv || !me(zv, ev, this.resources, Sv)) {
          var gv;
          if (ev = null !== (gv = this.vertexLayouts.resolveInputs(zv, Pv, hv, Sv)) && void 0 !== gv ? gv : void 0, !ev) return null;
          this.inputs.set(vv, ev)
        }
        return this.withGpuBuffers(ev)
      }
      meshInputs(vv, zv, Pv) {
        const hv = this.inputs.get(vv);
        if (hv && this.inputsStamped(hv, vv, Pv, zv)) return this.withGpuBuffers(hv);
        const Sv = vv.owner,
          ev = Se(vv),
          gv = this.vertexInputs(vv, Sv, Sv.name, zv, ev);
        return gv && (gv.geometry = ee(vv), gv.instanceLayout = this.drawDefines.instanceLayout(Sv, Pv)), gv
      }
      inputsStamped(vv, zv, Pv, hv) {
        return function(vv, zv, Pv, hv) {
          return vv.program === Pv && vv.geometry === ee(zv) && vv.instanceLayout === hv
        }(vv, zv, hv, this.drawDefines.instanceLayout(zv.owner, Pv))
      }
      withGpuBuffers(vv) {
        return Me(vv, this.resources, this.zeroBuffer) ? vv : null
      }
      instanceBuffersFit(vv, zv, Pv) {
        const hv = Be(zv, Pv, this.resources, this.zeroBuffer);
        if (hv) {
          const Sv = zv.ends[hv.index] - zv.offsets[hv.index] + zv.Lk[hv.index];
          return this.warnOnce(`overrun:${vv}`, `${vv} draws ${Pv} instances from a ${Sv}-byte buffer (${hv.needed} needed)`), !1
        }
        return !0
      }
      createBinding(vv, zv, Pv, hv) {
        const Sv = `${zv._colorFormat}|${zv._depthStencilFormat}|${zv._depthCompare}|${zv._sampleCount}`,
          ev = gz(this.device, zv);
        if (vv === this.skyLastRenderable) {
          let Pv = null;
          return {
            renderable: vv,
            pipeline: ev,
            draw: vv => Pv ? this.drawSky(vv, zv, Sv, Pv) : 0,
            update: vv => {
              Pv = vv
            }
          }
        }
        return {
          renderable: vv,
          pipeline: ev,
          draw: vv => (hv ? hv.execute(vv, zv, Sv) : 0) + this.drawList(vv, zv, Sv, Pv)
        }
      }
      drawSky(vv, zv, Pv, hv) {
        const Sv = this.lists.skyDraws,
          ev = Sv.length > 0;
        if (ev) {
          var gv;
          const Pv = (null !== (gv = zv._depthCompare) && void 0 !== gv ? gv : Pz).startsWith("greater") ? 0 : 1;
          vv.setViewport(0, 0, hv.targetWidth, hv.targetHeight, Pv, Pv)
        }
        const pv = this.drawList(vv, zv, Pv, Sv);
        return ev && vv.setViewport(0, 0, hv.targetWidth, hv.targetHeight, 0, 1), pv
      }
      drawList(vv, zv, Pv, hv) {
        let Sv = 0;
        const ev = this.binder;
        ev.reset();
        for (const gv of hv) {
          const hv = this.pipelineFor(gv, zv, Pv);
          hv && (ev.bind(vv, gv, hv, this.meshSlots.bindGroup, gv.slotOffset), gv.indexBuffer ? vv.drawIndexed(gv.count, gv.instances, gv.first, 0, 0) : vv.draw(gv.count, gv.instances, gv.first, 0), Sv++)
        }
        return Sv
      }
      pipelineFor(vv, zv, Pv) {
        var hv, Sv;
        if (vv.program.failed) return null;
        const ev = vv.inputs;
        if (ev.pipeline && ev.pipelineTarget === Pv) return ev.pipeline;
        const gv = `${vv.pipelineKey}|${Pv}`,
          pv = this.pipelines.get(gv);
        if (void 0 !== pv) return pv && (ev.pipeline = pv, ev.pipelineTarget = Pv), pv || null;
        this.pipelines.set(gv, null);
        const {
          program: dv,
          layout: Nv,
          state: lv
        } = vv, Tv = {
          label: `standard-${dv.id}`,
          layout: dv.pipelineLayout,
          vertex: {
            module: dv.vertex,
            entryPoint: "main",
            buffers: Nv.buffers
          },
          fragment: kv({
            module: dv.fragment,
            entryPoint: "main"
          }, zv, lv.blend, lv.colourWrite),
          depthStencil: zv._depthStencilFormat ? {
            format: zv._depthStencilFormat,
            depthCompare: null !== (hv = null !== (Sv = lv.depthCompare) && void 0 !== Sv ? Sv : zv._depthCompare) && void 0 !== hv ? hv : Pz,
            depthWriteEnabled: lv.depthWrite,
            depthBias: lv.depthBias,
            depthBiasSlopeScale: lv.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: zv._sampleCount
          },
          primitive: {
            topology: lv.topology,
            frontFace: lv.frontFace,
            cullMode: lv.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Tv).then((vv => {
          this.compiling--, this.pipelines.set(gv, vv)
        }), (vv => {
          this.compiling--, this.reportFailure(dv, gv, vv)
        })), null
      }
      forEachSunShadowCaster(vv) {
        const zv = this.caster,
          Pv = (Pv, hv, Sv) => {
            const ev = Pv.unit && function(vv) {
              const zv = vv.material.model;
              return null !== zv && (zv.lifeform || zv.item) && zv.castsSunShadow && "triangle-list" === vv.state.topology
            }(Pv) ? Se(Pv.unit) : null;
            if (!ev) return;
            const gv = Pv.unit.owner;
            switch (zv.geometry = ev, zv.skip = gv.noSunShadowVertices, zv.indexed = null !== Pv.indexBuffer, zv.first = Pv.first, zv.count = Pv.count, zv.oT = hv, zv.worldAt = Sv, zv.instances = null, zv.instanceCount = 1, zv.thin = !1, ve(gv)) {
              case "thin": {
                const vv = gv._thinInstanceDataStorage.matrixData;
                if (!vv) return;
                zv.instances = vv, zv.instanceCount = Math.min(Pv.instances, vv.length / 16), zv.thin = !0;
                break
              }
              case "instanced": {
                const vv = this.resources.batchUploads.get(gv);
                if (!vv || vv.frame !== this.frame || !this.writeBatchCasters(vv)) return;
                break
              }
            }
            vv(zv)
          };
        for (const hv of this.lists.opaqueDraws) Pv(hv, this.meshSlots.data, hv.slotOffset / 4);
        this.thinBundle.forEachDrawn(Pv)
      }
      writeBatchCasters(vv) {
        const {
          caster: zv
        } = this, Pv = vv.packedMatrices, hv = vv.count;
        zv.instances = Pv, zv.instanceCount = hv;
        let Sv = -1;
        for (let ev = 0; ev < hv; ev++) {
          const zv = Dg(vv.packedRowMesh(ev));
          zv && Sv < 0 ? (this.casterWorlds.length < 16 * hv && (this.casterWorlds = new Float32Array(Pv.length)), this.casterWorlds.set(Pv.subarray(0, 16 * ev)), Sv = ev) : !zv && Sv >= 0 && (this.casterWorlds.set(Pv.subarray(16 * ev, 16 * ev + 16), 16 * Sv), Sv++)
        }
        return Sv >= 0 && (zv.instances = this.casterWorlds, zv.instanceCount = Sv), zv.instanceCount > 0
      }
      async reportFailure(vv, zv, Pv) {
        const hv = [];
        let Sv = !0;
        for (const [ev, gv] of [
            ["vertex", vv.vertex],
            ["fragment", vv.fragment]
          ]) {
          const vv = await gv.getCompilationInfo();
          for (const zv of vv.messages) Sv &&= "error" !== zv.type, hv.push(`${ev}:${zv.lineNum}:${zv.linePos} ${zv.type}: ${zv.message}`)
        }
        if (Sv && !vv.packGroup) return this.pipelines.set(zv, !1), console.error(`Lite: pipeline ${zv} failed`, Pv), void ES("mesh", vv.kind, Pv);
        vv.failed || (vv.failed = !0, console.error(`Lite: program ${vv.id} failed`, Pv, hv.join("\n"), {
          program: vv.program,
          key: vv.key
        }), ES("mesh", vv.kind, Pv, Sv ? null : hv[0]))
      }
    }

    function Dg(vv) {
      var zv, Pv;
      const hv = null === (zv = vv.lV) || void 0 === zv || null === (Pv = zv.aShaderPackItem) || void 0 === Pv ? void 0 : Pv.x;
      return void 0 !== hv && 0 !== (hv & dz.e)
    }
    var Kg = Pv(40993),
      Vg = Pv(40995),
      Ug = Pv(41004),
      Rg = Pv(40954);
    const xg = [0, 3, 1, 4, 2, 5];

    function tg(vv, zv, Pv, hv, Sv) {
      const ev = Pv[0].width;
      try {
        return Sv ? function(vv, zv, Pv) {
          const hv = (0, Rg.c)(vv, Pv, Pv, 6);
          for (let Sv = 0; Sv < 6; Sv++)(0, Rg.e)(vv, hv, Sv, zv[xg[Sv]], {
            invertY: !1
          });
          return hv.texture
        }(vv, Pv, ev) : function(vv, zv, Pv, hv) {
          const Sv = vv.createTexture({
            label: "sink-cube",
            size: {
              width: Pv,
              height: Pv,
              depthOrArrayLayers: 6
            },
            format: hv,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let ev = 0; ev < 6; ev++) vv.queue.copyExternalImageToTexture({
            source: zv[xg[ev]]
          }, {
            texture: Sv,
            origin: {
              x: 0,
              y: 0,
              z: ev
            }
          }, {
            width: Pv,
            height: Pv
          });
          return Sv
        }(zv, Pv, ev, 1 === hv ? "r8unorm" : "rgba8unorm")
      } finally {
        qg(Pv)
      }
    }

    function qg(vv) {
      for (const zv of null !== vv && void 0 !== vv ? vv : []) null === zv || void 0 === zv || zv.close()
    }
    async function Ig(vv) {
      const zv = [],
        Pv = [];
      if (await Promise.all(vv.map(((vv, hv) => (zv[hv] = null, vv.then((vv => {
          zv[hv] = vv
        }), (vv => {
          Pv.push(vv)
        })))))), Pv.length > 0) throw qg(zv), Pv[0];
      return zv
    }
    class Qg {
      constructor(vv) {
        this.GT = vv, this.starts = [], this.lengths = [], this.used = 0, vv > 0 && (this.starts.push(0), this.lengths.push(vv))
      }
      allocate(vv) {
        const {
          starts: zv,
          lengths: Pv
        } = this;
        for (let hv = 0; hv < zv.length; hv++) {
          if (Pv[hv] < vv) continue;
          const Sv = zv[hv];
          return Pv[hv] === vv ? (zv.splice(hv, 1), Pv.splice(hv, 1)) : (zv[hv] += vv, Pv[hv] -= vv), this.used += vv, Sv
        }
        return -1
      }
      free(vv, zv) {
        this.used -= zv;
        const Pv = Math.min(vv + zv, this.GT);
        Pv > vv && this.release(vv, Pv - vv)
      }
      grow(vv) {
        const zv = this.GT;
        this.GT = vv, this.release(zv, vv - zv)
      }
      truncate(vv) {
        const {
          starts: zv,
          lengths: Pv
        } = this;
        for (let hv = zv.length - 1; hv >= 0 && zv[hv] + Pv[hv] > vv; hv--) zv[hv] >= vv ? (zv.splice(hv, 1), Pv.splice(hv, 1)) : Pv[hv] = vv - zv[hv];
        this.GT = vv
      }
      release(vv, zv) {
        const {
          starts: Pv,
          lengths: hv
        } = this;
        let Sv = 0,
          ev = Pv.length;
        for (; Sv < ev;) {
          const zv = Sv + ev >> 1;
          Pv[zv] < vv ? Sv = zv + 1 : ev = zv
        }
        const gv = Sv,
          pv = gv > 0 && Pv[gv - 1] + hv[gv - 1] === vv,
          dv = gv < Pv.length && vv + zv === Pv[gv];
        pv && dv ? (hv[gv - 1] += zv + hv[gv], Pv.splice(gv, 1), hv.splice(gv, 1)) : pv ? hv[gv - 1] += zv : dv ? (Pv[gv] = vv, hv[gv] += zv) : (Pv.splice(gv, 0, vv), hv.splice(gv, 0, zv))
      }
    }
    const Zg = 256;
    class Ag {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = vv, this.onReplaced = zv, this.mergeGap = Pv, this.gpu = null, this.bytes = void 0, this.PC = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Sv = Math.max(Zg, Math.ceil(hv / Zg) * Zg);
        this.bytes = new Uint8Array(Sv), this.PC = new Qg(Sv / Zg)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(vv) {
        return Math.max(1, Math.ceil(vv / Zg)) * Zg
      }
      allocate(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vv;
        const hv = Ag.slotBytes(vv),
          Sv = hv / Zg;
        let ev = this.PC.allocate(Sv);
        ev < 0 && (this.grow(this.PC.GT + Sv), ev = this.PC.allocate(Sv));
        const gv = ev * Zg;
        return this.growTo(gv + Math.max(Pv, hv)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, gv, gv + hv), zv && this.bytes.set(new Uint8Array(zv.buffer, zv.byteOffset, Math.min(zv.byteLength, hv)), gv), this.markDirty(gv, gv + hv), gv
      }
      growTo(vv) {
        const zv = Math.ceil(vv / Zg);
        zv > this.PC.GT && this.grow(zv)
      }
      free(vv, zv) {
        this.freed.push(vv, zv)
      }
      write(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (hv <= 0) return;
        this.bytes.set(new Uint8Array(zv.buffer, Pv, hv), vv);
        let ev = vv + hv;
        if (Sv) {
          const zv = vv + 4 * Math.ceil(hv / 4);
          this.bytes.fill(0, ev, zv), ev = zv
        }
        this.markDirty(vv, ev)
      }
      move(vv, zv, Pv) {
        this.bytes.copyWithin(zv, vv, vv + Pv), this.markDirty(zv, zv + Pv)
      }
      flush() {
        for (const zv of this.retired) this.onReplaced(zv), zv.destroy();
        this.retired.length = 0;
        const vv = this.dirtyStarts.length;
        if (vv > 0) {
          const {
            dirtyStarts: zv,
            dirtyEnds: Pv,
            order: hv
          } = this;
          hv.length = vv;
          for (let pv = 0; pv < vv; pv++) hv[pv] = pv;
          vv > 1 && hv.sort(((vv, Pv) => zv[vv] - zv[Pv]));
          const Sv = this.mergeGap;
          let ev = zv[hv[0]],
            gv = Pv[hv[0]];
          for (let pv = 1; pv < vv; pv++) {
            const vv = hv[pv];
            zv[vv] - gv <= Sv ? gv = Math.max(gv, Pv[vv]) : (this.send(ev, gv), ev = zv[vv], gv = Pv[vv])
          }
          this.send(ev, gv), zv.length = 0, Pv.length = 0
        }
        this.holding = !1
      }
      Zm() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const vv = this.freed;
        for (let zv = 0; zv < vv.length; zv += 2) this.PC.free(vv[zv] / Zg, vv[zv + 1] / Zg);
        vv.length = 0
      }
      send(vv, zv) {
        this.device.queue.writeBuffer(this.gpu, vv, this.bytes.buffer, vv, zv - vv);
        for (const Pv of this.replaced) {
          const hv = Math.min(zv, Pv.size);
          hv > vv && this.device.queue.writeBuffer(Pv, vv, this.bytes.buffer, vv, hv - vv)
        }
      }
      markDirty(vv, zv) {
        vv &= -4, zv = zv + 3 & -4, this.holding ? (this.dirtyStarts.push(vv), this.dirtyEnds.push(zv)) : this.send(vv, zv)
      }
      grow(vv) {
        const zv = this.PC.GT,
          Pv = Math.max(2 * zv, vv),
          hv = new Uint8Array(Pv * Zg);
        hv.set(this.bytes);
        const Sv = this.gpu;
        this.gpu = this.createGpu(hv.byteLength), this.bytes = hv, this.PC.grow(Pv), Sv && (this.replaced.push(Sv), this.onReplaced(Sv)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, zv * Zg)
      }
      createGpu(vv) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: vv,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Lg(vv) {
      return Array.isArray(vv) ? new Float32Array(vv) : vv
    }

    function Hg(vv, zv, Pv, hv, Sv) {
      const ev = VS(Sv),
        gv = Math.min(Sv, hv.byteLength);
      if (ev === gv && hv.byteOffset % 4 === 0) return void vv.queue.writeBuffer(zv, Pv, hv.buffer, hv.byteOffset, ev);
      const pv = new Uint8Array(ev);
      pv.set(new Uint8Array(hv.buffer, hv.byteOffset, gv)), vv.queue.writeBuffer(zv, Pv, pv)
    }

    function Mg(vv, zv, Pv) {
      const hv = "linear",
        Sv = "nearest";
      let ev = Sv,
        gv = Sv,
        pv = "nearest",
        dv = !zv;
      switch (vv) {
        case 11:
          ev = hv, gv = hv;
          break;
        case 3:
          ev = hv, gv = hv, pv = zv ? "linear" : "nearest";
          break;
        case 8:
          pv = zv ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          gv = hv;
          break;
        case 6:
          gv = hv, pv = zv ? "linear" : "nearest";
          break;
        case 7:
          gv = hv, dv = !0;
          break;
        case 9:
          ev = hv;
          break;
        case 10:
          ev = hv, pv = zv ? "linear" : "nearest";
          break;
        case 2:
          ev = hv, gv = hv, Pv > 1 ? (pv = "linear", dv = !1) : dv = !0;
          break;
        case 12:
          ev = hv, dv = !0;
          break;
        default:
          dv = !0
      }
      return Pv > 1 && !dv ? {
        magFilter: hv,
        minFilter: hv,
        mipmapFilter: "linear",
        maxAnisotropy: Pv
      } : {
        magFilter: ev,
        minFilter: gv,
        mipmapFilter: pv,
        ...dv ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function yg(vv) {
      return 0 === vv ? "clamp-to-edge" : 2 === vv ? "mirror-repeat" : "repeat"
    }
    class Bg {
      constructor(vv, zv) {
        let {
          vertexArena: Pv = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = vv, this.device = zv, this.buffers = new WeakMap, this.OE = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = Pv ? new Ag(zv, (vv => {
          var zv;
          null === (zv = this.onDestroy) || void 0 === zv || zv.call(this, vv), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var vv;
        null === (vv = this.arena) || void 0 === vv || vv.flush()
      }
      endUploadFrame() {
        var vv;
        null === (vv = this.arena) || void 0 === vv || vv.Zm()
      }
      vertexBufferCreated(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pv ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(vv);
        const Sv = Lg(zv);
        vv.GT = Sv.byteLength, this.buffers.set(vv, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: Pv && null !== this.arena,
          pending: Sv,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: hv
        })
      }
      vertexBufferUpdated(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        const Sv = this.buffers.get(vv);
        if (!Sv) return;
        const ev = Lg(zv),
          gv = void 0 === hv ? ev.byteLength : Math.min(hv, ev.byteLength);
        this.update(Sv, ev, Pv, gv)
      }
      vertexBufferFloatsUpdated(vv, zv, Pv, hv) {
        const Sv = this.buffers.get(vv);
        if (!Sv) return;
        const ev = Pv * Float32Array.BYTES_PER_ELEMENT,
          gv = (hv - Pv) * Float32Array.BYTES_PER_ELEMENT;
        Sv.slot >= 0 && gv > 0 && ev + gv <= Sv.size ? this.writeSlot(Sv, ev, zv, zv.byteOffset + ev, gv, !1) : Sv.gpu && gv > 0 && ev + gv <= Sv.gpu.size ? this.device.queue.writeBuffer(Sv.gpu, ev, zv.buffer, zv.byteOffset + ev, gv) : this.update(Sv, zv.subarray(Pv, hv), ev, gv)
      }
      indexBufferCreated(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(vv);
        const hv = function(vv) {
          if (vv instanceof Uint16Array || vv instanceof Uint32Array) return vv;
          for (let zv = 0; zv < vv.length; zv++)
            if (vv[zv] >= 65535) return new Uint32Array(vv);
          return new Uint16Array(vv)
        }(zv);
        vv.is32Bits = 4 === hv.BYTES_PER_ELEMENT, vv.GT = hv.byteLength, this.buffers.set(vv, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: hv,
          ownsPending: hv !== zv,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Pv
        })
      }
      bufferDeleted(vv) {
        const zv = this.buffers.get(vv);
        null !== zv && void 0 !== zv && zv.gpu ? (this.destroyBuffer(zv.gpu), this.gpuBuffersVersion++) : zv && zv.slot >= 0 && (this.arena.free(zv.slot, zv.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(vv)
      }
      update(vv, zv, Pv, hv) {
        if (vv.slot >= 0) this.updateSlot(vv, zv, Pv, hv);
        else if (vv.gpu) {
          if (Pv + VS(hv) > vv.gpu.size) {
            const zv = this.device.createBuffer({
                label: vv.label,
                size: VS(Math.max(2 * vv.gpu.size, Pv + hv)),
                usage: vv.usage | GPUBufferUsage.COPY_SRC
              }),
              Sv = this.device.createCommandEncoder();
            Sv.copyBufferToBuffer(vv.gpu, 0, zv, 0, vv.gpu.size), this.device.queue.submit([Sv.finish()]), this.destroyBuffer(vv.gpu), this.gpuBuffersVersion++, vv.gpu = zv
          }
          Hg(this.device, vv.gpu, Pv, zv, hv)
        } else {
          const ev = new Uint8Array(zv.buffer, zv.byteOffset, hv),
            gv = vv.pending;
          if (gv && vv.ownsPending && Pv + hv <= gv.byteLength) new Uint8Array(gv.buffer, gv.byteOffset, gv.byteLength).set(ev, Pv);
          else if (gv && 0 === Pv && hv === gv.byteLength && zv.byteLength === hv) vv.pending = zv, vv.ownsPending = !1;
          else {
            var Sv;
            const zv = new Uint8Array(Math.max(null !== (Sv = null === gv || void 0 === gv ? void 0 : gv.byteLength) && void 0 !== Sv ? Sv : 0, Pv + hv));
            gv && zv.set(new Uint8Array(gv.buffer, gv.byteOffset, gv.byteLength)), zv.set(ev, Pv), vv.pending = zv, vv.ownsPending = !0
          }
        }
      }
      updateSlot(vv, zv, Pv, hv) {
        const Sv = this.arena;
        Pv + VS(hv) > vv.size && (vv.size = VS(Math.max(2 * vv.size, Pv + hv)), Sv.growTo(vv.slot + vv.size), this.gpuBuffersVersion++), 0 === hv ? this.writeSlot(vv, Pv, Eg, 0, 4, !1) : this.writeSlot(vv, Pv, zv, zv.byteOffset, hv, !0)
      }
      writeSlot(vv, zv, Pv, hv, Sv, ev) {
        const gv = zv + (ev ? VS(Sv) : Sv);
        gv > vv.slotBytes && this.moveSlot(vv, gv), this.arena.write(vv.slot + zv, Pv, hv, Sv, ev)
      }
      moveSlot(vv, zv) {
        const Pv = this.arena,
          hv = Ag.slotBytes(Math.max(zv, Math.min(2 * vv.slotBytes, vv.size))),
          Sv = Pv.allocate(hv, null, vv.size);
        Pv.move(vv.slot, Sv, vv.slotBytes), Pv.free(vv.slot, vv.slotBytes), vv.slot = Sv, vv.slotBytes = hv, this.gpuBuffersVersion++
      }
      cover(vv, zv) {
        const Pv = this.buffers.get(vv);
        if (!Pv || Pv.slot < 0) return !1;
        const hv = Math.min(zv, Pv.size);
        return !(hv <= Pv.slotBytes) && (this.moveSlot(Pv, hv), !0)
      }
      destroyBuffer(vv) {
        var zv;
        null === (zv = this.onDestroy) || void 0 === zv || zv.call(this, vv), vv.destroy()
      }
      gpuBuffer(vv) {
        const zv = this.buffers.get(vv);
        if (!zv) return null;
        if (zv.slot >= 0) return this.arena.buffer;
        if (zv.arena && zv.pending) {
          const vv = zv.pending,
            Pv = this.arena;
          return zv.size = VS(vv.byteLength), zv.slotBytes = Ag.slotBytes(function(vv) {
            const zv = new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength);
            let Pv = zv.length;
            if (vv.byteOffset % 4 === 0) {
              for (; Pv % 4 !== 0 && 0 === zv[Pv - 1];) Pv--;
              if (Pv % 4 === 0) {
                const zv = new Uint32Array(vv.buffer, vv.byteOffset, Pv / 4);
                let hv = zv.length;
                for (; hv > 0 && 0 === zv[hv - 1];) hv--;
                Pv = 4 * hv
              }
            }
            for (; Pv > 0 && 0 === zv[Pv - 1];) Pv--;
            return Pv
          }(vv)), zv.slot = Pv.allocate(zv.slotBytes, vv, zv.size), zv.pending = null, Pv.buffer
        }
        if (!zv.gpu && zv.pending) {
          const vv = zv.pending;
          zv.gpu = this.device.createBuffer({
            label: zv.label,
            size: VS(vv.byteLength),
            usage: zv.usage
          }), Hg(this.device, zv.gpu, 0, vv, vv.byteLength), zv.pending = null
        }
        return zv.gpu
      }
      gpuOffset(vv) {
        var zv, Pv;
        const hv = null !== (zv = null === (Pv = this.buffers.get(vv)) || void 0 === Pv ? void 0 : Pv.slot) && void 0 !== zv ? zv : -1;
        return hv < 0 ? 0 : hv
      }
      gpuEnd(vv) {
        var zv, Pv;
        const hv = this.buffers.get(vv);
        return hv ? hv.slot >= 0 ? hv.slot + hv.size : null !== (zv = null === (Pv = hv.gpu) || void 0 === Pv ? void 0 : Pv.size) && void 0 !== zv ? zv : 0 : 0
      }
      vertexInput(vv, zv, Pv) {
        var hv, Sv, ev, gv;
        return null !== (hv = null !== (Sv = Pv && this.modelInput(Pv, zv)) && void 0 !== Sv ? Sv : null === (ev = null !== (gv = this.OE.get(vv)) && void 0 !== gv ? gv : this.batchUploads.get(vv)) || void 0 === ev ? void 0 : ev.inputs[zv]) && void 0 !== hv ? hv : null
      }
      modelInput(vv, zv) {
        const Pv = this.geometrySlot(vv);
        let hv = Pv.inputs.get(zv);
        if (void 0 === hv) {
          const Sv = vv.vertexAttributes.find((vv => vv.kind === zv));
          hv = Sv ? new Ev(this.modelKey(Pv, Sv.data, !1), Sv.offset, Sv.stride, Sv.components, !1, Sv.glType, Sv.isNormalized) : null, Pv.inputs.set(zv, hv)
        }
        return hv
      }
      modelIndex(vv) {
        return vv.indexData && this.modelKey(this.geometrySlot(vv), vv.indexData, !0)
      }
      geometrySlot(vv) {
        let zv = vv.gpu[Dv.g.lite];
        if (!zv) {
          const Pv = new Map,
            hv = () => {
              for (const vv of Pv.values()) this.bufferDeleted(vv)
            },
            Sv = vv => {
              const zv = Pv.get(vv);
              zv && this.vertexBufferUpdated(zv, vv)
            };
          zv = {
            keys: Pv,
            inputs: new Map,
            release: hv,
            updated: Sv
          }, vv.gpu[Dv.g.lite] = zv
        }
        return zv
      }
      modelKey(vv, zv, Pv) {
        let hv = vv.keys.get(zv);
        if (!hv) {
          if (Pv) {
            const vv = {
              GT: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(vv, zv, "model-indices"), hv = vv
          } else hv = {
            GT: 0
          }, this.vertexBufferCreated(hv, zv, !1, "model-vertices");
          vv.keys.set(zv, hv)
        }
        return hv
      }
      indexFormat(vv) {
        return vv.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(vv, zv) {
        --vv.refs > 0 || (this.releaseTexture(vv), qg(vv.images), null !== zv && this.textures.delete(zv))
      }
      load(vv, zv) {
        const Pv = zv.decoded = async function(vv) {
          if ("cube" === vv.kind) return async function(vv) {
            if (6 !== vv.length) throw new Error(`${vv.length} files where six faces were expected`);
            const zv = await Ig(vv.map((vv => IS(vv)))),
              Pv = zv[0].width;
            return Ig(zv.map((async vv => {
              if (vv.width === Pv && vv.height === Pv) return vv;
              try {
                return await createImageBitmap(vv, {
                  ...tS,
                  resizeWidth: Pv,
                  resizeHeight: Pv
                })
              } finally {
                vv.close()
              }
            })))
          }(vv.files);
          if ("data" === vv.kind && vv.data) return [await createImageBitmap(new Blob([vv.data]), tS)];
          return [await IS(Jg(vv))]
        }(vv.source).then((vv => {
          0 === zv.refs ? qg(vv) : zv.images = vv
        }));
        this.track(zv, Jg(vv.source), Pv, (() => {
          zv.wanted && !zv.failed && zv.refs > 0 && this.upload(vv, zv)
        }))
      }
      canvasUpdated(vv, zv, Pv) {
        const {
          state: hv
        } = this.textureSlot(vv);
        hv.dynamicSource = {
          invertY: zv,
          premultiplied: Pv
        }, hv.dynamic && this.pushDynamic(vv.source, hv)
      }
      async atlasArray(vv, zv, Pv) {
        const hv = await AS(this.device, vv, zv, Pv);
        if (!this.atlasBindings.has(hv)) {
          const vv = (0, Kg.d)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(hv, {
            view: hv.texture.createView({
              dimension: "2d-array"
            }),
            sampler: vv
          })
        }
        return hv
      }
      boundTexture(vv) {
        const zv = this.atlasBindings.get(vv);
        if (zv) return zv;
        const Pv = vv;
        if (Pv.released) return null;
        const hv = this.textureSlot(Pv, !0),
          {
            state: Sv
          } = hv;
        if (!Sv.view && (Sv.wanted = !0, Sv.loading || Sv.failed || this.upload(Pv, Sv), !Sv.view)) return null;
        const ev = this.chosenSampler(Pv, hv),
          gv = hv.bound;
        return gv && gv.view === Sv.view && gv.sampler === ev ? gv : (hv.bound = {
          view: Sv.view,
          sampler: ev
        }, hv.bound)
      }
      textureLoaded(vv) {
        var zv, Pv;
        return null !== (zv = null === (Pv = vv.gpu[Dv.g.lite]) || void 0 === Pv ? void 0 : Pv.state.decoded) && void 0 !== zv ? zv : null
      }
      textureFailed(vv) {
        var zv;
        return !0 === (null === (zv = vv.gpu[Dv.g.lite]) || void 0 === zv ? void 0 : zv.state.failed)
      }
      chosenSampler(vv, zv) {
        const {
          samplingMode: Pv,
          wrapU: hv,
          wrapV: Sv
        } = vv.sampler, ev = zv.state.hasMips, gv = function(vv, zv) {
          const {
            bilinear: Pv,
            trilinear: hv
          } = Dv.i;
          return !zv && vv !== Pv || 11 !== vv && vv !== hv && vv !== Pv ? 1 : 4
        }(Pv, ev), pv = zv.sampler;
        if (pv && pv.samplingMode === Pv && pv.hasMips === ev && pv.anisotropy === gv && pv.wrapU === hv && pv.wrapV === Sv) return pv.sampler;
        const dv = this.samplerFor(Pv, ev, gv, hv, Sv);
        return zv.sampler = {
          samplingMode: Pv,
          hasMips: ev,
          anisotropy: gv,
          wrapU: hv,
          wrapV: Sv,
          sampler: dv
        }, dv
      }
      releaseTexture(vv) {
        var zv, Pv;
        vv.view && (null === (Pv = this.onDestroy) || void 0 === Pv || Pv.call(this, vv.view));
        null === (zv = vv.destroy) || void 0 === zv || zv.call(vv)
      }
      textureSlot(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = vv.gpu[Dv.g.lite];
        if (Pv) return Pv;
        const hv = function(vv) {
          let {
            source: zv,
            sampler: Pv
          } = vv;
          return "canvas" === zv.kind ? null : `${zv.kind}|${Jg(zv)}|${Pv.noMipmap}|${Pv.samplingMode}|${Pv.invertY}`
        }(vv);
        let Sv = null === hv ? void 0 : this.textures.get(hv);
        Sv || (Sv = {
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
        }, null !== hv && (this.textures.set(hv, Sv), this.load(vv, Sv), zv && this.firstBindDecodes++)), Sv.refs++;
        const ev = Sv,
          gv = {
            state: Sv,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(ev, hv)
            }
          };
        return vv.gpu[Dv.g.lite] = gv, gv
      }
      samplerFor(vv, zv, Pv, hv, Sv) {
        const ev = `${vv}|${zv}|${Pv}|${hv}|${Sv}`;
        let gv = this.samplers.get(ev);
        if (!gv) {
          const pv = {
            ...Mg(vv, zv, Pv),
            addressModeU: yg(hv),
            addressModeV: yg(Sv)
          };
          gv = (0, Kg.d)(this.engine, pv), this.samplers.set(ev, gv)
        }
        return gv
      }
      upload(vv, zv) {
        const {
          source: Pv,
          sampler: hv
        } = vv;
        zv.hasMips = !hv.noMipmap, "canvas" === Pv.kind ? this.createDynamic(Pv, zv) : "cube" === Pv.kind ? this.uploadCube(zv, Pv.luminance) : this.uploadImage(zv, !0 === hv.invertY, Pv.url)
      }
      uploadImage(vv, zv, Pv) {
        const [hv] = vv.images;
        vv.images = null;
        const Sv = (0, Vg.c)(this.engine, hv, {
          mipMaps: vv.hasMips,
          invertY: zv,
          srgb: !1
        }).then((zv => {
          hv.close(), 0 !== vv.refs ? (vv.view = zv.view, vv.destroy = zv.texture.destroy.bind(zv.texture)) : zv.texture.destroy()
        }));
        this.track(vv, Pv, Sv)
      }
      track(vv, zv, Pv, hv) {
        vv.loading = !0, this.pending++, Pv.catch((Pv => {
          vv.failed = !0, console.warn(`Lite: could not load texture ${qS(zv)}`, Pv)
        })).finally((() => {
          vv.loading = !1, this.pending--, null === hv || void 0 === hv || hv()
        }))
      }
      uploadCube(vv, zv) {
        const Pv = vv.images;
        vv.images = null;
        const hv = tg(this.engine, this.device, Pv, (0, Dv.v)(zv), vv.hasMips);
        vv.view = hv.createView({
          dimension: "cube"
        }), vv.destroy = () => {
          hv.destroy()
        }
      }
      createDynamic(vv, zv) {
        const {
          canvas: Pv
        } = vv, hv = (0, Ug.b)(this.engine, Math.max(1, Pv.width), Math.max(1, Pv.height), {
          mipMaps: zv.hasMips,
          srgb: !1
        });
        zv.dynamic = hv, zv.view = hv.view, zv.destroy = () => {
          hv.texture.destroy()
        }, this.pushDynamic(vv, zv)
      }
      pushDynamic(vv, zv) {
        const Pv = zv.dynamicSource,
          hv = zv.dynamic,
          {
            canvas: Sv
          } = vv;
        if (Pv && hv && 0 !== Sv.width && 0 !== Sv.height) return Sv.width !== hv.width || Sv.height !== hv.height ? (this.releaseTexture(zv), zv.dynamic = null, zv.view = null, void this.createDynamic(vv, zv)) : void(0, Ug.f)(this.engine, hv, Sv, {
          invertY: Pv.invertY,
          premultiplyAlpha: Pv.premultiplied
        })
      }
    }

    function Jg(vv) {
      return "cube" === vv.kind ? vv.rootUrl : "canvas" === vv.kind ? "canvas" : vv.url
    }
    const Eg = new Uint8Array(4);

    function og(vv) {
      const zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      vv._colorAttachment.storeOp = vv._targetSignature._sampleCount > 1 ? zv : "store";
      const Pv = vv._renderPassDescriptor.depthStencilAttachment;
      Pv && (Pv.depthStoreOp = zv, Pv.stencilStoreOp && (Pv.stencilStoreOp = zv))
    }
    var bg = Pv(37293),
      rg = Pv(37343),
      kg = Pv(36948),
      Xg = Pv(39043);
    const ug = new Float64Array([1, 1, 1]),
      vp = new Float64Array([0, 1, 0]),
      zp = new Float64Array(4),
      Pp = new Float32Array(16),
      hp = new Float64Array(3),
      Sp = new Float64Array(4);

    function ep(vv, zv, Pv) {
      vv.fov = zv.fov, vv.near = zv.near, vv.far = zv.far, vv.renderWidth = Pv.renderWidth, vv.renderHeight = Pv.renderHeight, (0, kg.o)(zv.holderRotation, 0, zp, 0), (0, kg.b)(ug, 0, zp, 0, zv.holderPosition, 0, Pp);
      const hv = zv.Gy;
      hp[0] = hv[0], hp[1] = hv[1], hp[2] = hv[2] + 1;
      const Sv = vv.viewMatrix;
      (0, kg.j)(hv, hp, vp, Sv), (0, kg.i)(Sv, 0, Sv), (0, kg.k)(Sv, Pp, 0, Sv), (0, kg.i)(Sv, 0, Sv);
      const ev = vv.worldMatrix;
      (0, kg.i)(Sv, 0, ev), vv.eye[0] = ev[12], vv.eye[1] = ev[13], vv.eye[2] = ev[14], Sp[0] = vv.fov, Sp[1] = vv.renderWidth / vv.renderHeight, Sp[2] = vv.near, Sp[3] = vv.far, (0, kg.l)(Sp, vv.projectionMatrix), (0, kg.k)(Sv, vv.projectionMatrix, 0, vv.viewProjectionMatrix), (0, Xg.f)(vv.viewProjectionMatrix, vv.frustum)
    }

    function gp(vv, zv) {
      let Pv = vv.frustumPlanes;
      Pv || (Pv = vv.frustumPlanes = Array.from({
        length: 6
      }, (() => new bg.b(0, 0, 0, 0))));
      for (let hv = 0; hv < 6; hv++) {
        const vv = Pv[hv].normal;
        vv._x = zv[4 * hv], vv._y = zv[4 * hv + 1], vv._z = zv[4 * hv + 2], vv._isDirty = !0, Pv[hv].d = zv[4 * hv + 3]
      }
    }

    function pp(vv, zv) {
      const Pv = zv.clearColor;
      vv.clearColour[0] = Pv.r, vv.clearColour[1] = Pv.g, vv.clearColour[2] = Pv.b, vv.clearColour[3] = Pv.a;
      const hv = zv.ambientColor;
      vv.ambientColour[0] = hv.r, vv.ambientColour[1] = hv.g, vv.ambientColour[2] = hv.b, vv.animationRatio = zv.animationRatio, vv.frameId = zv.frameId, vv.version++
    }

    function dp(vv) {
      const zv = vv.model.view;
      return zv.animTick = (0, rg.f)(), zv.timeMs = performance.now(), pp(zv, vv.Is), vv.model.update(zv.frameId), zv
    }

    function Np(vv) {
      const zv = vv.Is,
        {
          view: Pv,
          Wy: hv
        } = vv.model;
      return ep(Pv, hv, zv.ma()), zv.onBeforeRenderObservable.notifyObservers(zv), gp(zv, Pv.frustum), zv.onBeforeCameraRenderObservable.notifyObservers(zv.activeCamera), dp(vv)
    }
    var lp = Pv(36900),
      Tp = Pv(37039),
      Wp = Pv(37334);

    function wp(vv) {
      var zv, Pv;
      const hv = (0, nv.bb)(vv);
      if (!hv || hv.diffuseTexture && (0, Wp.g)(vv)) return null;
      const Sv = null === (zv = (0, nv.x)(hv, Fv.g.name)) || void 0 === zv ? void 0 : zv.state,
        ev = null === (Pv = (0, nv.x)(hv, Je.c.name)) || void 0 === Pv ? void 0 : Pv.state,
        gv = new Float32Array(16);
      return function(vv, zv, Pv, hv) {
        var Sv, ev;
        const gv = Wh;
        hv.set(vv.diffuseColor, gv.diffuse), hv[gv.diffuse + 3] = vv.alpha, hv.set(vv.ambientColor, gv.ambientAndCutoff), hv[gv.ambientAndCutoff + 3] = vv.alphaCutOff, hv.set(vv.emissiveColor, gv.emissiveAndLevel), hv[gv.emissiveAndLevel + 3] = null !== (Sv = null === (ev = vv.diffuseTexture) || void 0 === ev ? void 0 : ev.level) && void 0 !== Sv ? Sv : 1, null !== zv && void 0 !== zv && zv.animDataPerTex ? (hv[gv.anim + 1] = rg.b, hv[gv.anim + 2] = zv.animDataPerTex.length / 3 - 1) : Pv && (hv[gv.anim + 1] = Pv.numAnimStates, hv[gv.anim + 2] = Pv.ticksPerAnimState)
      }(hv, Sv, ev, gv), {
        model: hv,
        atlas: Sv,
        texture: Sv ? "atlas" : hv.diffuseTexture ? "single" : "none",
        animated: Sv ? !!Sv.animDataPerTex : !!ev,
        liquid: (0, Wp.h)(vv),
        customRenderMat: (0, Wp.g)(vv),
        uniformData: gv
      }
    }
    var ap = Pv(36892);
    class sp {
      constructor(vv) {
        this.units = vv, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var vv;
        this.buffer.destroy(), null === (vv = this.twin) || void 0 === vv || vv.destroy()
      }
    }
    class Cp {
      constructor(vv, zv) {
        this.arena = vv, this.PC = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.PC = new Qg(zv);
        const Pv = new sp(zv);
        Pv.buffer = this.createBuffer(Pv, !1), this.backings.push(Pv), this.refresh()
      }
      get GT() {
        return this.PC.GT
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
        let vv = 0;
        for (const zv of this.backings) vv += zv.units * (this.arena.unitBytes + (zv.twin ? this.arena.twinUnitBytes : 0));
        return vv
      }
      holds(vv) {
        return vv.start + vv.length <= this.usable
      }
      lost(vv) {
        return this.dropped || vv.start + vv.length > this.GT
      }
      write(vv, zv) {
        const {
          device: Pv,
          unitBytes: hv
        } = this.arena;
        for (const Sv of this.backings) {
          const ev = (Sv.units - vv.start) * hv;
          ev > 0 && Pv.queue.writeBuffer(Sv.buffer, vv.start * hv, zv, 0, Math.min(zv.byteLength, ev))
        }
      }
      writeLight(vv, zv) {
        const {
          device: Pv,
          twinUnitBytes: hv,
          verticesPerUnit: Sv
        } = this.arena, {
          light: ev,
          count: gv
        } = this.arena.twinLight(zv, Math.min(zv.length, vv.length * Sv));
        for (const pv of this.backings) {
          pv.twin || (pv.twin = this.createBuffer(pv, !0));
          const zv = (pv.units - vv.start) * Sv;
          zv > 0 && Pv.queue.writeBuffer(pv.twin, vv.start * hv, ev, 0, Math.min(gv, zv))
        }
      }
      grow(vv) {
        this.arena.assertNotDrawing();
        const {
          device: zv,
          unitBytes: Pv,
          label: hv
        } = this.arena, Sv = this.backings[this.backings.length - 1], ev = new sp(vv), gv = zv.createCommandEncoder({
          label: `${hv}-grow`
        });
        ev.buffer = this.createBuffer(ev, !1), gv.copyBufferToBuffer(Sv.buffer, 0, ev.buffer, 0, Sv.units * Pv), Sv.twin && (ev.twin = this.createBuffer(ev, !0), gv.copyBufferToBuffer(Sv.twin, 0, ev.twin, 0, Sv.units * this.arena.twinUnitBytes)), zv.queue.submit([gv.finish()]), this.backings.push(ev), this.PC.grow(vv)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const vv of this.backings) vv.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(vv, zv) {
        const {
          device: Pv,
          unitBytes: hv,
          twinUnitBytes: Sv,
          usage: ev,
          label: gv
        } = this.arena;
        Pv.pushErrorScope("out-of-memory");
        const pv = Pv.createBuffer({
          label: zv ? `${gv}-light` : gv,
          size: vv.units * (zv ? Sv : hv),
          usage: (zv ? this.arena.twinUsage : ev) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, Pv.popErrorScope().then((Pv => {
          this.arena.awaitingVerdict--, this.settle(vv, zv, !Pv, !0)
        }), (Pv => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${gv} buffer, taken as failed: ${String(Pv)}`), this.settle(vv, zv, !1, !1)
        })), pv
      }
      settle(vv, zv, Pv, hv) {
        const Sv = this.backings.indexOf(vv);
        if (!(this.dropped || Sv < 0)) {
          if (!Pv) {
            if (hv && this.arena.ranOutOfMemory(vv.units, vv.units * (zv ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Sv) return void this.drop();
            for (const vv of this.backings.splice(Sv)) vv.destroy();
            return this.PC.truncate(this.backings[Sv - 1].units), this.growable = !1, void this.promote()
          }
          zv ? vv.twinReady = !0 : (vv.bufferReady = !0, this.arena.allocatedBuffer(vv.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: vv
        } = this;
        let zv = 0;
        for (; zv + 1 < vv.length && vv[zv].ready && vv[zv + 1].ready;) zv++;
        for (const Pv of vv.splice(0, zv)) Pv.destroy();
        this.refresh()
      }
      refresh() {
        const vv = this.backings[0];
        this.buffer = vv.buffer, this.twin = vv.twinReady ? vv.twin : null, this.usable = !this.dropped && vv.bufferReady ? vv.units : 0
      }
    }
    class ip {
      constructor(vv, zv, Pv, hv) {
        let {
          verticesPerUnit: Sv = 1,
          twinUsage: ev = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = vv, this.unitBytes = zv, this.usage = Pv, this.label = hv, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Nz.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), zv % 4 !== 0) throw new Error(`${hv}: ${zv}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Sv, this.twinUsage = ev, this.twinValueBytes = Sv > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Sv
      }
      twinLight(vv, zv) {
        if (4 === this.twinValueBytes) return this.widened.length < zv && (this.widened = new Float32Array(Math.max(zv, 2 * this.widened.length))), this.widened.set(vv.subarray(0, zv)), {
          light: this.widened,
          count: zv
        };
        const Pv = zv % this.verticesPerUnit;
        if (0 === Pv) return {
          light: vv,
          count: zv
        };
        const hv = zv - Pv + this.verticesPerUnit;
        return this.padded.length < hv && (this.padded = new Uint16Array(Math.max(hv, 2 * this.padded.length))), this.padded.set(vv.subarray(0, zv)), this.padded.fill(0, zv, hv), {
          light: this.padded,
          count: hv
        }
      }
      allocate(vv) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), vv > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Sv of this.pages) {
          const zv = Sv.PC.allocate(vv);
          if (zv >= 0) return {
            page: Sv,
            start: zv,
            length: vv
          }
        }
        const zv = this.pages[this.pages.length - 1];
        if (null !== zv && void 0 !== zv && zv.canGrow) {
          const Pv = Math.min(this.ceiling, Math.max(2 * zv.GT, zv.GT + vv));
          if (Pv - zv.GT >= vv) return zv.grow(Pv), {
            page: zv,
            start: zv.PC.allocate(vv),
            length: vv
          }
        }
        zv && zv !== this.pages[0] && 0 === zv.PC.used && zv.drop();
        const Pv = Math.floor(1048576 / this.unitBytes),
          hv = new Cp(this, Math.max(vv, Math.min(this.ceiling, Pv)));
        return this.pages.push(hv), {
          page: hv,
          start: hv.PC.allocate(vv),
          length: vv
        }
      }
      free(vv) {
        this.assertNotDrawing();
        const {
          page: zv
        } = vv;
        zv.PC.free(vv.start, vv.length), 0 === zv.PC.used && zv !== this.pages[0] && zv !== this.pages[this.pages.length - 1] && zv.drop()
      }
      remove(vv) {
        const zv = this.pages.indexOf(vv);
        zv >= 0 && this.pages.splice(zv, 1)
      }
      ranOutOfMemory(vv, zv) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${zv}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, vv), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, vv) / 2));
        const Pv = performance.now();
        Pv >= this.shortageUntil && (this.forgetFailedAt = Pv + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = Pv + 1e3)
      }
      allocatedBuffer(vv) {
        vv >= this.failed && (this.failed = 1 / 0);
        const zv = Math.min(2 * vv, Math.floor((vv + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, zv))
      }
      stats() {
        let vv = 0,
          zv = 0,
          Pv = 0,
          hv = 0;
        for (const Sv of this.pages) vv += Sv.GT, zv += Sv.PC.used, Pv += Sv.hasTwin ? Sv.GT * this.twinUnitBytes : 0, hv += Sv.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: vv * this.unitBytes,
          usedBytes: zv * this.unitBytes,
          twinBytes: Pv,
          allocatedBytes: hv
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: vv,
          maxStorageBufferBindingSize: zv
        } = this.device.limits;
        let Pv = Math.floor(Math.min(67108864, vv) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (Pv = Math.min(Pv, Math.floor(zv / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (Pv = Math.min(Pv, Math.floor(zv / this.twinUnitBytes))), Pv
      }
    }
    const cp = 16383;

    function Gp(vv, zv, Pv, hv, Sv) {
      let ev = 0;
      for (let gv = Pv; gv < hv; gv += cp) vv.drawIndexed(6 * Math.min(cp, hv - gv), 1, 0, zv + 4 * gv, Sv), ev++;
      return ev
    }
    class mp {
      constructor(vv, zv) {
        this.recordsGroup = zv, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const Pv = Yz.e.strideWithoutAtlas;
        this.vertexArena = new ip(vv, Pv, GPUBufferUsage.VERTEX, `terrain-vertices-${Pv}`), this.quadArena = new ip(vv, Tp.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const hv = (0, nz.f)(new Uint16Array(98298), cp);
        this.quadPattern = vv.createBuffer({
          label: "terrain-quad-pattern",
          size: hv.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), vv.queue.writeBuffer(this.quadPattern, 0, hv)
      }
      set(vv, zv) {
        const Pv = zv.packedVertices,
          hv = Pv ? this.quadArena.allocate(vv.faceCount) : this.vertexArena.allocate(vv.vertexCount);
        if (!hv) return !1;
        vv.vertices = hv;
        const Sv = Pv ? new Uint8Array(Pv.buffer, Pv.byteOffset, Pv.byteLength) : new Uint8Array(zv.vertices);
        return hv.page.write(hv, Sv), !0
      }
      setLight(vv, zv) {
        const {
          vertices: Pv
        } = vv;
        Pv && 0 !== zv.length && Pv.page.live && (zv.length < vv.vertexCount ? Pv.page.arena.warnOnce("shortLight", `a part's ${zv.length} light values are fewer than its ${vv.vertexCount} vertices, so its light is left as it was`) : (Pv.page.writeLight(Pv, zv), vv.lit = !0))
      }
      lightFullSky(vv, zv) {
        this.fullSky.length < zv && (this.fullSky = new Uint16Array(Math.max(zv, 4096)).fill(ap.i));
        for (const Pv of vv) {
          const vv = Pv.vertices;
          vv.page.live && (vv.page.writeLight(vv, this.fullSky), Pv.lit = !0)
        }
      }
      backed(vv) {
        const {
          vertices: zv
        } = vv;
        return !!zv && zv.page.holds(zv)
      }
      lost(vv) {
        const {
          vertices: zv
        } = vv;
        return !!zv && zv.page.lost(zv)
      }
      release(vv) {
        vv.vertices && vv.vertices.page.arena.free(vv.vertices), vv.vertices = null, vv.lit = !1
      }
      setDrawing(vv) {
        this.forgetBound()
      }
      draw(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zv.faceCount;
        const ev = zv.vertices,
          gv = ev.page,
          pv = Pv ? gv.twin : null;
        if (!gv.holds(ev) || Pv && !pv) return 0;
        const {
          verticesPerUnit: dv
        } = gv.arena;
        let Nv = ev.start * dv;
        this.boundPattern || (vv.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const lv = hv + Sv;
        if (dv > 1) return gv.buffer === this.boundRecords && pv === this.boundRecordsLight || (vv.setBindGroup(1, this.recordsGroup(gv.buffer, pv)), this.boundRecords = gv.buffer, this.boundRecordsLight = pv), Gp(vv, Nv, hv, lv, zv.slot);
        gv.buffer !== this.boundVertices && (vv.setVertexBuffer(0, gv.buffer), this.boundVertices = gv.buffer), pv && pv !== this.boundLight && (vv.setVertexBuffer(1, pv), this.boundLight = pv);
        const Tv = zv.faceCount;
        return lv <= Tv ? Gp(vv, Nv, hv, lv, zv.slot) : Gp(vv, Nv, hv, Tv, zv.slot) + Gp(vv, Nv, Math.max(hv, Tv) - Tv, lv - Tv, zv.slot)
      }
      get buffersAwaitingVerdict() {
        let vv = 0;
        for (const zv of this.arenas()) vv += zv.awaitingVerdict;
        return vv
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class jp {
      constructor(vv, zv, Pv, hv) {
        this.device = vv, this.splitBefore = zv, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = vv.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Sv = vv.createShaderModule({
          label: "scene-depth-copy",
          code: (ev = Pv._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${ev?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var ev;
        vv.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Sv,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Sv,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((vv => {
          this.pipeline = vv, this.building = !1
        }), (vv => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", vv)
        })), Pv._executeWithTransmission = () => this.execute(Pv, hv)
      }
      get compiling() {
        return this.building
      }
      setWanted(vv) {
        this.wanted = vv
      }
      setPlanes(vv, zv) {
        vv === this.near && zv === this.far || (this.near = vv, this.far = zv, this.unproject[0] = vv / (zv - vv), this.unproject[1] = zv * vv / (zv - vv), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var vv, zv;
        return null !== (vv = null === (zv = this.copy) || void 0 === zv ? void 0 : zv.view) && void 0 !== vv ? vv : null
      }
      execute(vv, zv) {
        var Pv;
        null === (Pv = this.retired) || void 0 === Pv || Pv.destroy(), this.retired = null;
        const hv = vz(zv),
          Sv = vv._transparentBindings,
          ev = this.wanted && this.pipeline ? this.splitIndex(Sv) : -1,
          gv = vv._colorAttachment,
          pv = gv.resolveTarget;
        ev >= 0 && (gv.resolveTarget = void 0, og(vv, !0));
        let dv = hv.beginRenderPass(vv._renderPassDescriptor);
        dv.setBindGroup(0, vv._sceneBG);
        let Nv = this.drawList(dv, zv, vv._opaqueBindings, 0, vv._opaqueBindings.length);
        if (Nv += this.drawList(dv, zv, vv._directBindings, 0, vv._directBindings.length), Nv += this.drawList(dv, zv, Sv, 0, ev >= 0 ? ev : Sv.length), dv.end(), ev < 0) return Nv;
        og(vv);
        const lv = vv._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Tv,
            stencilLoadOp: Wv
          } = lv,
          wv = gv.loadOp;
        gv.resolveTarget = pv;
        try {
          this.copyDepth(hv, vv), gv.loadOp = "load", lv.depthLoadOp = "load", Wv && (lv.stencilLoadOp = "load"), dv = hv.beginRenderPass(vv._renderPassDescriptor), dv.setBindGroup(0, vv._sceneBG), Nv += this.drawList(dv, zv, Sv, ev, Sv.length), dv.end()
        } finally {
          gv.loadOp = wv, lv.depthLoadOp = Tv, lv.stencilLoadOp = Wv
        }
        return Nv
      }
      splitIndex(vv) {
        for (let zv = 0; zv < vv.length; zv++)
          if (vv[zv].renderable === this.splitBefore) return zv;
        return -1
      }
      drawList(vv, zv, Pv, hv, Sv) {
        let ev = null,
          gv = 0;
        for (let pv = hv; pv < Sv; pv++) {
          const hv = Pv[pv],
            Sv = hv.renderable.mesh;
          Sv && !1 === Sv.visible || (hv.pipeline !== ev && (vv.setPipeline(hv.pipeline), ev = hv.pipeline), gv += hv.draw(vv, zv))
        }
        return gv
      }
      copyDepth(vv, zv) {
        var Pv, hv;
        const Sv = (null !== (Pv = zv._config.depth) && void 0 !== Pv ? Pv : zv._config.rt)._depthTexture,
          ev = (null === (hv = this.copy) || void 0 === hv ? void 0 : hv.source) === Sv ? this.copy : this.remakeCopy(Sv),
          gv = vv.beginRenderPass(ev.pass);
        gv.setPipeline(this.pipeline), gv.setBindGroup(0, ev.bindGroup), gv.draw(3), gv.end()
      }
      remakeCopy(vv) {
        var zv, Pv;
        this.retired = null !== (zv = null === (Pv = this.copy) || void 0 === Pv ? void 0 : Pv.texture) && void 0 !== zv ? zv : null;
        const hv = this.device.createTexture({
            label: "scene-depth",
            size: [vv.width, vv.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Sv = hv.createView(),
          ev = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: vv.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          gv = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Sv,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: vv,
          texture: hv,
          view: Sv,
          bindGroup: ev,
          pass: gv
        }, this.copy
      }
    }
    const fp = "rgba8unorm";

    function Fp(vv) {
      return vv ? 15 : 1
    }
    class Yp {
      constructor(vv, zv, Pv, hv) {
        this.device = vv, this.terrain = hv, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = zv._targetSignature._sampleCount > 1, this.cameraBuffer = vv.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = vv.createBindGroupLayout({
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
        const Sv = vv.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = vv.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Sv,
          entries: []
        });
        const ev = vv.createShaderModule({
          label: "sun-shadow-mask",
          code: (gv = this.edge, `${(0,Oz.z)()}${ZP({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${gv?OP:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Fp(gv)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${gv?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var gv;
        vv.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: vv.createPipelineLayout({
            bindGroupLayouts: [this.layout, Sv, Sv, Qe(vv, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: ev,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: ev,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((vv => {
          this.pipeline = vv, this.building = !1
        }), (vv => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", vv)
        }));
        const pv = zv._executeWithTransmission;
        zv._executeWithTransmission = vv => this.execute(zv, Pv, (() => pv ? pv(vv) : function(vv, zv) {
          const Pv = vz(zv).beginRenderPass(vv._renderPassDescriptor);
          Pv.setBindGroup(0, vv._sceneBG);
          let hv = np(Pv, zv, vv._opaqueBindings);
          return hv += np(Pv, zv, vv._directBindings), hv += np(Pv, zv, vv._transparentBindings), Pv.end(), hv
        }(zv, Pv)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var vv, zv;
        return null !== (vv = null === (zv = this.targets) || void 0 === zv ? void 0 : zv.maskView) && void 0 !== vv ? vv : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(vv) {
        ! function(vv, zv) {
          const Pv = vv.worldMatrix,
            hv = vv.projectionMatrix,
            Sv = 1 / hv[0],
            ev = 1 / hv[5],
            gv = vv.far * vv.near / (vv.far - vv.near);
          zv[0] = vv.eye[0], zv[1] = vv.eye[1], zv[2] = vv.eye[2], zv[3] = 2 ** -23 / gv, zv[4] = Pv[0] * Sv, zv[5] = Pv[1] * Sv, zv[6] = Pv[2] * Sv, zv[7] = gv, zv[8] = Pv[4] * ev, zv[9] = Pv[5] * ev, zv[10] = Pv[6] * ev, zv[11] = vv.near / (vv.far - vv.near), zv[12] = Pv[8], zv[13] = Pv[9], zv[14] = Pv[10], zv[15] = 0
        }(vv, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(vv, zv, Pv) {
        if (this.retire(), !this.terrain.readsMask) return Pv();
        const hv = this.targetsFor(vv),
          Sv = vz(zv),
          ev = vv._renderPassDescriptor.depthStencilAttachment;
        this.edge || (hv.prepass.depthStencilAttachment.view = ev.view);
        const gv = this.terrain.drawPrepass(Sv, hv.prepass, vv._sceneBG);
        if (0 === gv) return Pv();
        if (this.trace(Sv, hv), this.edge) return gv + 1 + Pv();
        const {
          depthLoadOp: pv,
          stencilLoadOp: dv
        } = ev;
        ev.depthLoadOp = "load", dv && (ev.stencilLoadOp = "load");
        try {
          return gv + 1 + Pv()
        } finally {
          ev.depthLoadOp = pv, ev.stencilLoadOp = dv
        }
      }
      trace(vv, zv) {
        const Pv = this.terrain.sunShadowGroup(),
          hv = vv.beginRenderPass(zv.trace);
        this.pipeline && Pv && (hv.setPipeline(this.pipeline), hv.setBindGroup(0, zv.bindGroup), hv.setBindGroup(1, this.empty), hv.setBindGroup(2, this.empty), hv.setBindGroup(3, Pv), hv.draw(3)), hv.end()
      }
      retire() {
        const vv = this.retired;
        var zv;
        vv && (vv.mask.destroy(), vv.normals.destroy(), null === (zv = vv.depth) || void 0 === zv || zv.destroy(), this.retired = null)
      }
      targetsFor(vv) {
        var zv, Pv;
        const hv = (null !== (zv = vv._config.depth) && void 0 !== zv ? zv : vv._config.rt)._depthTexture;
        return (null === (Pv = this.targets) || void 0 === Pv ? void 0 : Pv.source) === hv ? this.targets : this.remake(vv, hv)
      }
      remake(vv, zv) {
        var Pv;
        this.retired = this.targets;
        const hv = [zv.width, zv.height],
          Sv = this.device.createTexture({
            label: "sun-shadow-mask",
            size: hv,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          ev = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: hv,
            format: fp,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          gv = null !== (Pv = vv._targetSignature._depthStencilFormat) && void 0 !== Pv ? Pv : zv.format,
          pv = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: hv,
            format: gv,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          dv = vv._renderPassDescriptor.depthStencilAttachment,
          Nv = gv.includes("stencil"),
          lv = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: ev.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: pv ? pv.createView() : dv.view,
              depthClearValue: dv.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Nv ? {
                stencilClearValue: dv.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Tv = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== pv && void 0 !== pv ? pv : zv).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: ev.createView()
            }]
          }),
          Wv = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Sv.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Fp(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: zv,
          mask: Sv,
          maskView: Sv.createView(),
          normals: ev,
          depth: pv,
          bindGroup: Tv,
          prepass: lv,
          trace: Wv
        }, this.targets
      }
    }

    function np(vv, zv, Pv) {
      let hv = null,
        Sv = 0;
      for (const ev of Pv) {
        const Pv = ev.renderable.mesh;
        Pv && !1 === Pv.visible || (ev.pipeline !== hv && (vv.setPipeline(ev.pipeline), hv = ev.pipeline), Sv += ev.draw(vv, zv))
      }
      return Sv
    }
    const Op = 6e4,
      Dp = {
        status: "ok"
      },
      Kp = {
        status: "skipped"
      };
    async function Vp(vv, zv) {
      const {
        isCancelled: Pv
      } = vv;
      if (Pv()) return {
        status: "ev"
      };
      const {
        target: hv
      } = zv;
      if (!hv) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Sv = [],
        ev = Promise.all(Array.from(new Set(vv.materials), (async Pv => {
          Sv.push(await async function(vv, zv, Pv, hv) {
            const Sv = {
              lighting: vv.lighting,
              dirLightCount: Math.min(vv.dirLightCount, 4),
              Bw: vv.runtime
            };
            try {
              const ev = zv.material(hv);
              return ev && Nh(zv.programKey(ev, !1, Sv)) ? (await ev.ready, vv.isCancelled() ? Dp : ev.bindGroupLayout ? await async function(vv, zv, Pv, hv) {
                const {
                  device: Sv
                } = vv;
                let ev, gv;
                Sv.pushErrorScope("validation");
                try {
                  ev = vv.pipelineBuild(zv, Pv, hv)
                } finally {
                  gv = Sv.popErrorScope().catch((() => null))
                }
                const [pv, dv] = await Promise.all([gv, ev.built.then((() => null), (vv => null !== vv && void 0 !== vv ? vv : new Error("pipeline failed")))]);
                if (!pv && !dv) return Dp;
                const Nv = await Up(ev.module),
                  lv = Nv.length > 0 ? Nv.map((vv => `${ev.name} ${vv.lineNum}:${vv.linePos}: ${vv.message}`)).join("\n") : `${ev.name}: ${Rp(null!==dv&&void 0!==dv?dv:pv)}`;
                return {
                  status: "failed",
                  material: zv.model.name,
                  message: lv
                }
              }(zv, ev, zv.programKey(ev, "none" !== ev.texture, Sv), Pv): (console.warn(`Shader pack: skipped the compile check for "${hv.name}", whose textures failed to load`), Kp)) : Dp
            } catch (ev) {
              return {
                status: "failed",
                material: hv.name,
                message: Rp(ev)
              }
            }
          }(vv, zv, hv, Pv))
        }))),
        gv = function(vv, zv) {
          let Pv, hv, Sv = !1;
          const ev = new Promise((ev => {
            var gv;
            Pv = setTimeout((() => {
              ev("timeout")
            }), null !== (gv = zv.timeoutMs) && void 0 !== gv ? gv : Op), hv = setInterval((() => {
              zv.isCancelled() && ev("ev")
            }), 50), vv.lost.then((() => {
              Sv = !0, ev("lost")
            }))
          }));
          return {
            signal: ev,
            lost: () => Sv,
            dispose: () => {
              clearTimeout(Pv), clearInterval(hv)
            }
          }
        }(zv.device, vv);
      let pv;
      try {
        pv = await Promise.race([ev.then((() => "done")), gv.signal])
      } finally {
        gv.dispose()
      }
      if ("ev" === pv || Pv()) return {
        status: "ev"
      };
      const dv = Sv.find((vv => "failed" === vv.status));
      return dv && "lost" !== pv && !gv.lost() && await new Promise((vv => {
        setTimeout(vv, 0)
      })), "lost" === pv || gv.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : dv ? {
        status: "failed",
        failure: {
          material: dv.material,
          message: dv.message
        }
      } : "timeout" === pv ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Nv=vv.timeoutMs)&&void 0!==Nv?Nv:Op)/1e3} s`), {
        status: "skipped"
      }) : Sv.some((vv => "skipped" === vv.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Nv
    }
    async function Up(vv) {
      if (!vv) return [];
      try {
        return (await vv.getCompilationInfo()).messages.filter((vv => "error" === vv.type))
      } catch {
        return []
      }
    }

    function Rp(vv) {
      var zv;
      return null !== (zv = null === vv || void 0 === vv ? void 0 : vv.message) && void 0 !== zv ? zv : String(vv)
    }

    function xp(vv, zv, Pv, hv) {
      Nh(vv) ? Up(Pv).then((vv => {
        const [Pv] = vv;
        ES("terrain", zv, hv, Pv ? `${Pv.lineNum}:${Pv.linePos} error: ${Pv.message}` : null)
      })) : ES("terrain", zv, hv)
    }
    var tp = Pv(37044),
      qp = Pv(37055),
      Ip = Pv(37067),
      Qp = Pv(36983);

    function Zp(vv, zv, Pv, hv, Sv) {
      const ev = Math.hypot(Pv[0], Pv[1], Pv[2]);
      if (!(ev > 0)) return;
      const gv = [Pv[0] / ev, Pv[1] / ev, Pv[2] / ev],
        pv = [Math.floor(zv[0]), Math.floor(zv[1]), Math.floor(zv[2])],
        dv = [0, 0, 0],
        Nv = [1 / 0, 1 / 0, 1 / 0],
        lv = [1 / 0, 1 / 0, 1 / 0];
      for (let wv = 0; wv < 3; wv++) gv[wv] > 0 ? (dv[wv] = 1, Nv[wv] = (pv[wv] + 1 - zv[wv]) / gv[wv], lv[wv] = 1 / gv[wv]) : gv[wv] < 0 && (dv[wv] = -1, Nv[wv] = (pv[wv] - zv[wv]) / gv[wv], lv[wv] = -1 / gv[wv]);
      const {
        aa: Tv
      } = vv;
      let Wv = vv.EQ(pv[0], pv[1], pv[2]);
      for (;;) {
        const zv = Nv[0] < Nv[1] ? Nv[0] < Nv[2] ? 0 : 2 : Nv[1] < Nv[2] ? 1 : 2;
        if (Nv[zv] > hv) return;
        const Pv = dv[zv] > 0 ? pv[zv] + 1 : pv[zv];
        pv[zv] += dv[zv], Nv[zv] += lv[zv];
        const ev = vv.EQ(pv[0], pv[1], pv[2]),
          gv = ev !== Wv && !(vv.opaque[Wv] && vv.opaque[ev]);
        if (gv) {
          const hv = [pv[0], pv[1], pv[2]];
          hv[zv] = Pv;
          const ev = Math.floor(hv[0] / Tv),
            gv = Math.floor(hv[1] / Tv),
            dv = Math.floor(hv[2] / Tv);
          !vv.isDrawn(ev, gv, dv) && vv.hasParts(ev, gv, dv) && Sv.add(`${ev},${gv},${dv}`)
        }
        if (gv && vv.occluders[ev]) return;
        Wv = ev
      }
    }

    function Ap(vv, zv) {
      return vv.group - zv.group || vv.nearest - zv.nearest
    }
    class Lp {
      constructor(vv, zv) {
        this.device = vv, this.mG = zv, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var vv;
        const zv = null !== (vv = this.free.pop()) && void 0 !== vv ? vv : this.next++;
        if (8 * zv >= this.data.length) {
          const vv = new Float32Array(2 * this.data.length);
          vv.set(this.data), this.data = vv, this.words = new Uint32Array(vv.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.mG()
        }
        return zv
      }
      release(vv) {
        this.free.push(vv)
      }
      set(vv, zv, Pv, hv, Sv) {
        const ev = 8 * vv + Gh;
        this.data[ev] = zv, this.data[ev + 1] = Pv, this.data[ev + 2] = hv, this.setVisibility(vv, Sv)
      }
      setVisibility(vv, zv) {
        this.data[8 * vv + mh] = zv, this.markDirty(vv, vv)
      }
      setFaces(vv, zv, Pv) {
        const hv = 8 * vv;
        this.words[hv + jh] = zv, this.words[hv + fh] = Pv, this.markDirty(vv, vv)
      }
      markDirty(vv, zv) {
        this.dirtyMin = Math.min(this.dirtyMin, vv), this.dirtyMax = Math.max(this.dirtyMax, zv)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Hp = ch,
      Mp = !0;
    const yp = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Hp.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Bp = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Jp {
      constructor(vv) {
        this.device = vv, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Th), this.dirLightUniforms = this.frameUniforms.subarray(lh.dirLights, lh.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Nz.d)(), this.faceGroups = !0, this.visibilityGraph = Mp, this.visCull = Mp, this.visCheck = !1, this.visCullMinDistance = Ip.g, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new rp, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Bw = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new mp(vv, ((vv, zv) => this.recordsGroup(vv, zv))), this.slots = new Lp(vv, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = zz(vv), this.frameLayout = vv.createBindGroupLayout({
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
        }), this.frameBuffer = vv.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = vv.createSampler({
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
          bind: (vv, zv) => this.createBinding(this.opaqueRenderable, zv, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (vv, zv) => this.createBinding(this.transparentRenderable, zv, !0)
        }
      }
      installSceneDepth(vv, zv) {
        this.sceneDepth = new jp(this.device, this.transparentRenderable, vv, zv)
      }
      createFrameBindGroup() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== vv && void 0 !== vv ? vv : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== zv && void 0 !== zv ? zv : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(vv, zv) {
        const Pv = null !== zv && void 0 !== zv ? zv : vv;
        let hv = this.recordsGroups.get(Pv);
        return hv || (hv = this.createFrameBindGroup(vv, zv), this.recordsGroups.set(Pv, hv)), hv
      }
      setChunkMesh(vv, zv, Pv) {
        var hv;
        let Sv = this.chunks.get(vv);
        Sv ? this.geometry.release(Sv) : (Sv = {
          mesh: vv,
          slot: this.slots.allocate(),
          origin: [Pv[0], Pv[1], Pv[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: vv.visibility,
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
        }, this.chunks.set(vv, Sv), this.writeSlot(Sv)), Sv.material = vv.material ? this.materialFor(vv.material) : null, Sv.packed = !!zv.packedVertices, Sv.vertexCount = (0, Tp.e)(zv), Sv.faceCount = Sv.vertexCount / 4;
        const ev = null !== (hv = zv.faceGroups) && void 0 !== hv ? hv : null;
        if (Sv.faceGroups = ev, ev) {
          const vv = tp.n;
          Sv.planePX = ev[vv], Sv.planeNX = ev[vv + 1], Sv.planePY = ev[vv + 2], Sv.planeNY = ev[vv + 3], Sv.planePZ = ev[vv + 4], Sv.planeNZ = ev[vv + 5]
        }
        this.drawWhole(Sv), 0 !== Sv.faceCount && (this.geometry.set(Sv, zv) ? (Sv.packed && this.slots.setFaces(Sv.slot, Sv.vertices.start + Sv.faceCount, Sv.faceCount), zv.uw && this.setChunkMeshLight(vv, zv.uw)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Sv.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(vv, zv) {
        const Pv = this.chunks.get(vv);
        Pv && this.geometry.setLight(Pv, zv)
      }
      drawStats() {
        let vv = this.transparent.length;
        for (const zv of this.opaqueBatches) vv += zv.meshes.length;
        return {
          drawn: vv,
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
      removeChunkMesh(vv) {
        const zv = this.chunks.get(vv);
        zv && (this.geometry.release(zv), this.slots.release(zv.slot), this.chunks.delete(vv))
      }
      remeshLost(vv, zv) {
        this.geometry.release(zv), zv.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** zv.lostRemeshes++);
        const Pv = vv.oT,
          [hv, Sv, ev] = Pv.ozv(zv.origin[0], zv.origin[1], zv.origin[2]),
          gv = Pv.Ns.ls(hv, Sv, ev);
        gv && (gv.gs = !0, gv.ss = !0, Pv.ds(gv, !1))
      }
      chooseFaceRanges(vv, zv, Pv) {
        const hv = this.faceRanges;
        vv.faceMask = Pv, vv.rangeCount = (0, qp.m)(zv, Pv, hv), vv.first0 = hv[0], vv.count0 = hv[1], vv.first1 = hv[2], vv.count1 = hv[3]
      }
      drawWhole(vv) {
        vv.faceMask = -1, vv.faceEpoch = -1, vv.rangeCount = 1, vv.first0 = 0, vv.count0 = vv.faceCount
      }
      writeSlot(vv) {
        const [zv, Pv, hv] = this.originOffset;
        this.slots.set(vv.slot, vv.origin[0] - zv, vv.origin[1] - Pv, vv.origin[2] - hv, vv.visibility)
      }
      materialFor(vv) {
        const zv = this.materials.get(vv);
        if (zv) return zv;
        const Pv = wp(vv);
        if (!Pv) return this.warnOnce(`material:${vv.name}`, `Lite terrain cannot draw material "${vv.name}"; its chunks are skipped.`), null;
        const {
          model: hv,
          atlas: Sv,
          texture: ev,
          animated: gv,
          uniformData: pv
        } = Pv, dv = {
          id: this.materials.size,
          model: hv,
          texture: ev,
          animated: gv,
          uniformData: pv,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${vv.name}`,
            size: pv.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: Pv.liquid,
          customRenderMat: Pv.customRenderMat,
          atlasCount: 0,
          gJ: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(vv, dv), this.device.queue.writeBuffer(dv.uniformBuffer, 0, pv), dv.ready = this.createMaterialBindGroup(dv, Sv).catch((zv => {
          console.error(`Lite terrain failed to load the textures of material "${vv.name}"`, zv)
        })), dv
      }
      materialLayout(vv) {
        const zv = function(vv) {
            const zv = ["uniforms"];
            if ("atlas" === vv.texture) {
              vv.animated && zv.push("animData"), zv.push("sampler");
              for (let Pv = 0; Pv < vv.atlasCount; Pv++) zv.push("textureArray")
            } else "single" === vv.texture && zv.push("sampler", "texture");
            return zv
          }(vv),
          Pv = zv.join(",");
        let hv = this.materialLayouts.get(Pv);
        if (!hv) {
          const vv = GPUShaderStage.FRAGMENT;
          hv = this.device.createBindGroupLayout({
            label: `terrain-material-${Pv}`,
            entries: zv.map(((zv, Pv) => {
              switch (zv) {
                case "uniforms":
                  return {
                    binding: Pv, visibility: GPUShaderStage.VERTEX | vv, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: Pv, visibility: GPUShaderStage.VERTEX | vv, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: Pv, visibility: vv, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: Pv, visibility: vv, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: Pv, visibility: vv, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(Pv, hv)
        }
        return hv
      }
      async createMaterialBindGroup(vv, zv) {
        const Pv = [{
          buffer: vv.uniformBuffer
        }];
        if (zv) {
          const {
            urls: hv,
            pixels: Sv,
            layerWidth: ev
          } = zv.sources, gv = await Promise.all(hv.map(((vv, zv) => {
            var Pv;
            return AS(this.device, vv, null !== (Pv = null === Sv || void 0 === Sv ? void 0 : Sv[zv]) && void 0 !== Pv ? Pv : null, ev)
          })));
          vv.atlasCount = gv.length, vv.gJ = gv[0].layerWidth, vv.atlasLayers = gv[0].layers, zv.animDataPerTex && Pv.push({
            buffer: US(this.device, Float32Array.from(zv.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), Pv.push(this.sampler);
          for (const vv of gv) Pv.push(vv.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === vv.texture) {
          const {
            url: zv
          } = vv.model.diffuseTexture.source, {
            pixels: hv,
            width: Sv,
            height: ev
          } = await QS(zv);
          Pv.push(this.sampler), Pv.push(xS(this.device, hv, Sv, ev, 1, `terrain-${zv}`).createView({
            dimension: "2d"
          }))
        }
        const hv = this.materialLayout(this.programKey(vv, !1));
        vv.bindGroupLayout = hv, vv.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${vv.model.name}`,
          layout: hv,
          entries: Pv.map(((vv, zv) => ({
            binding: zv,
            resource: vv
          })))
        })
      }
      programKey(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const hv = Pv ? Pv.lighting : this.lighting,
          Sv = Pv ? Pv.Bw : this.Bw,
          ev = {
            texture: vv.texture,
            atlasCount: vv.atlasCount,
            gJ: vv.gJ,
            atlasLayers: vv.atlasLayers,
            animated: vv.animated,
            alphaTest: vv.model.transparencyMode === nv.p.alphaTest,
            lighting: hv,
            dirLightCount: Pv ? Pv.dirLightCount : this.dirLightCount,
            packed: zv
          };
        if (!Sv) return ev;
        const gv = this.shaderPackFields(vv, Sv),
          pv = "atlas" === vv.texture && vv.model.transparencyMode === nv.p.opaque && eh(gv.packVariant);
        return {
          ...ev,
          ...gv,
          alphaTest: ev.alphaTest || pv
        }
      }
      shaderPackFields(vv, zv) {
        return vv.customRenderMat ? hh : function(vv, zv) {
          if (!vv) return hh;
          const Pv = vv.defineFor(zv ? "liquid" : "terrain");
          return 0 === Pv ? hh : {
            packVariant: Pv,
            liquid: zv
          }
        }(zv, vv.liquid)
      }
      isBlended(vv) {
        return vv.model.transparencyMode === nv.p.alphaBlend
      }
      shaderModule(vv, zv) {
        let Pv = this.modules.get(vv);
        return Pv || (Pv = this.device.createShaderModule({
          label: zv,
          code: vv
        }), this.modules.set(vv, Pv)), Pv
      }
      pipelineFor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!vv.bindGroupLayout) return null;
        const Sv = this.programKey(vv, zv);
        if (!hv) return this.pipelineOf(vv, Sv, Pv);
        const ev = {
            ...Sv,
            resting: hv
          },
          gv = this.pipelineId(vv, ev, Pv),
          pv = this.pipelines.get(gv);
        if (pv) return pv;
        const dv = this.pipelineOf(vv, Sv, Pv);
        return dv && void 0 === pv && this.startPipeline(gv, vv, ev, Pv), dv
      }
      pipelineOf(vv, zv, Pv) {
        const hv = this.pipelineId(vv, zv, Pv),
          Sv = this.pipelines.get(hv);
        return void 0 !== Sv ? Sv : (this.startPipeline(hv, vv, zv, Pv), null)
      }
      pipelineId(vv, zv, Pv) {
        return Ep(zv, this.isBlended(vv), vv.model.backFaceCulling, Pv)
      }
      pipelineBuild(vv, zv, Pv) {
        var hv;
        const Sv = this.pipelineId(vv, zv, Pv);
        return null !== (hv = this.builds.get(Sv)) && void 0 !== hv ? hv : this.startPipeline(Sv, vv, zv, Pv)
      }
      startPipeline(vv, zv, Pv, hv) {
        var Sv;
        this.pipelines.set(vv, null);
        const ev = Kh(Pv),
          gv = this.isBlended(zv),
          pv = this.shadowMask && hv._depthStencilFormat ? function(vv, zv, Pv, hv) {
            if (void 0 === vv.packVariant || vv.liquid || zv) return "none";
            const Sv = (0, Dz.g)(vv.packVariant);
            return null === Sv || void 0 === Sv || !Sv.sunShadow || !IP(Sv, Pv) || Sv.discards || vv.alphaTest && eh(vv.packVariant) ? "none" : hv ? "edge" : "plain"
          }(Pv, gv, !!this.sunShadow, hv._sampleCount > 1) : "none";
        let dv;
        try {
          dv = Vh(Pv, !!this.sunShadow, pv)
        } catch (Cv) {
          if (!Nh(Pv)) throw Cv;
          return this.failedPackBuild(vv, Pv, ev, Cv)
        }
        const Nv = this.shaderModule(dv, ev),
          lv = [];
        Pv.packed || (lv.push(function(vv, zv) {
          const Pv = [{
            shaderLocation: Hp.position,
            offset: Yz.e.QS,
            format: "float32x3"
          }, {
            shaderLocation: Hp.normal,
            offset: Yz.e.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Hp.color,
            offset: Yz.e.colorOffset,
            format: "unorm8x4"
          }];
          return vv && Pv.push({
            shaderLocation: Hp.uv,
            offset: Yz.e.uvOffset,
            format: "float32x2"
          }), zv && Pv.push({
            shaderLocation: Hp.blockFlagWords,
            offset: Yz.e.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: Yz.e.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: Pv
          }
        }("none" !== Pv.texture, Nh(Pv))), Pv.lighting && lv.push(yp));
        const Tv = zv.model.backFaceCulling,
          Wv = {
            label: ev,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, zv.bindGroupLayout, ...Le(this.device, Pv, !!this.sunShadow, "none" !== pv)]
            }),
            vertex: {
              module: Nv,
              entryPoint: "mainVertex",
              buffers: lv
            },
            fragment: kv({
              module: Nv,
              entryPoint: "mainFragment"
            }, hv, gv ? Bp : null),
            depthStencil: hv._depthStencilFormat ? {
              format: hv._depthStencilFormat,
              depthCompare: null !== (Sv = hv._depthCompare) && void 0 !== Sv ? Sv : Pz,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: hv._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Tv ? "back" : "none"
            }
          },
          wv = Pv.resting ? 0 : 1;
        this.compiling += wv;
        const av = "none" === pv ? this.device.createRenderPipelineAsync(Wv) : this.startMaskPipelines(Nv, Wv, "edge" === pv);
        av.then((zv => {
          this.compiling -= wv, this.pipelines.set(vv, zv)
        }), (vv => {
          this.compiling -= wv, console.error(`Lite terrain pipeline ${ev} failed`, vv), xp(Pv, ev, Nv, vv)
        }));
        const sv = {
          name: ev,
          module: Nv,
          built: av
        };
        return this.builds.set(vv, sv), sv
      }
      startMaskPipelines(vv, zv, Pv) {
        const hv = zv.depthStencil,
          Sv = this.device.createRenderPipelineAsync(Pv ? zv : {
            ...zv,
            depthStencil: {
              ...hv,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          ev = this.device.createRenderPipelineAsync({
            ...zv,
            label: `${zv.label}-prepass`,
            fragment: {
              module: vv,
              entryPoint: "prepassFragment",
              targets: [{
                format: fp
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Sv, ev]).then((vv => {
          let [zv, Pv] = vv;
          return this.prepassOf.set(zv, Pv), this.maskPipelines++, zv
        }))
      }
      failedPackBuild(vv, zv, Pv, hv) {
        console.error(`Lite terrain pipeline ${Pv} failed`, hv), xp(zv, Pv, null, hv);
        const Sv = Promise.reject(hv);
        Sv.catch((() => {}));
        const ev = {
          name: Pv,
          module: null,
          built: Sv
        };
        return this.builds.set(vv, ev), ev
      }
      checkShaderPack(vv) {
        return Vp(vv, {
          device: this.device,
          target: this.target,
          material: vv => this.materialFor(vv),
          programKey: (vv, zv, Pv) => this.programKey(vv, zv, Pv),
          pipelineBuild: (vv, zv, Pv) => this.pipelineBuild(vv, zv, Pv)
        })
      }
      createBinding(vv, zv, Pv) {
        return this.target = zv, {
          renderable: vv,
          pipeline: gz(this.device, zv),
          draw: vv => {
            this.geometry.setDrawing(!0);
            try {
              return Pv ? this.drawTransparent(vv, zv) : this.drawOpaque(vv, zv)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(vv, zv) {
        var Pv, hv, Sv, ev;
        const {
          vW: gv
        } = vv;
        this.lighting = vv.Vs;
        const pv = (0, lp.y)(zv);
        this.dirLightCount = Math.min(pv, 4), this.Bw = null !== (Pv = gv.Bw) && void 0 !== Pv ? Pv : null, pv > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(vv, zv), this.animateMaterials(zv.animTick);
        const dv = gv.iW,
          Nv = dv[0] !== this.originOffset[0] || dv[1] !== this.originOffset[1] || dv[2] !== this.originOffset[2];
        Nv && (this.originOffset[0] = dv[0], this.originOffset[1] = dv[1], this.originOffset[2] = dv[2]);
        const lv = zv.eye;
        this.eye[0] = lv[0], this.eye[1] = lv[1], this.eye[2] = lv[2], this.writeShaderPackInputs();
        const Tv = zv.projectionMatrix,
          Wv = 0 === Tv[15];
        let wv = 0;
        (Nv || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: av
        } = this;
        pz(this.transparentRenderable._worldCenter, zv, Sz), this.resetBatches(Wv), this.transparent.length = 0, this.unlit.length = 0;
        const sv = gv.oT.O4,
          Cv = sv / 2 * Math.sqrt(3);
        let iv = 0;
        const cv = !!this.Bw && Sh(this.Bw.defineFor("liquid"));
        let Gv = !1;
        const mv = null !== (hv = null === (Sv = gv.SF) || void 0 === Sv ? void 0 : Sv.visibility) && void 0 !== hv ? hv : null,
          jv = this.visCull && Wv && 0 === this.compiling && null !== mv && gv.oT.CPv[0] >= this.visCullMinDistance ? this.target : null,
          fv = this.visPassable,
          Fv = this.visCandidates,
          Yv = this.visCandidateBatches;
        fv.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let nv = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Ov = 0;
        const Dv = (vv, Pv) => {
          if (!Pv) return this.transparent.push(vv), void(Ov += 2 * vv.faceCount);
          if (null !== vv.faceGroups && Pv.faceCull) {
            if (0 === wv && (wv = (0, qp.e)(Tv, zv.renderWidth, zv.renderHeight), wv !== this.faceFocalPx && (this.faceFocalPx = wv, av = ++this.faceEpoch)), vv.faceEpoch !== av) {
              vv.faceEpoch = av;
              const zv = Math.sqrt(vv.distance) + Cv,
                Pv = (0, qp.h)(vv.planePX, vv.planeNX, vv.planePY, vv.planeNY, vv.planePZ, vv.planeNZ, this.eye[0] - (vv.origin[0] - this.originOffset[0]), this.eye[1] - (vv.origin[1] - this.originOffset[1]), this.eye[2] - (vv.origin[2] - this.originOffset[2]), (0, qp.f)(zv, wv));
              Pv !== vv.faceMask && this.chooseFaceRanges(vv, vv.faceGroups, Pv)
            }
            if (0 === vv.rangeCount) return
          } else - 1 !== vv.faceMask && this.drawWhole(vv);
          Pv.meshes.push(vv), Ov += 2 * ((vv.rangeCount > 0 ? vv.count0 : 0) + (vv.rangeCount > 1 ? vv.count1 : 0))
        };
        for (const Vv of this.chunks.values()) {
          Nv && this.writeSlot(Vv);
          const vv = Vv.mesh.visibility;
          vv !== Vv.visibility && (Vv.visibility = vv, this.slots.setVisibility(Vv.slot, vv));
          const {
            material: Pv
          } = Vv;
          this.geometry.lost(Vv) && performance.now() >= Vv.lostRetryAt && this.remeshLost(gv, Vv);
          const hv = !(null === Pv || void 0 === Pv || !Pv.bindGroup) && this.geometry.backed(Vv),
            Sv = hv && this.lighting && !Vv.vertices.page.twin;
          if (jv && (Number.isNaN(Vv.key) && (Vv.ci = Math.floor(Vv.origin[0] / sv), Vv.cj = Math.floor(Vv.origin[1] / sv), Vv.ck = Math.floor(Vv.origin[2] / sv), Vv.key = (0, Qp.h)(Vv.ci, Vv.cj, Vv.ck)), (!hv || vv < 1 || Sv || !this.batchDraws(Pv, Vv.packed, jv)) && this.visSeeThrough(Vv, jv) && fv.add(Vv.key)), !hv) continue;
          Sv || (Vv.lostRemeshes = 0);
          const ev = Vv.origin[0] - this.originOffset[0],
            pv = Vv.origin[1] - this.originOffset[1],
            dv = Vv.origin[2] - this.originOffset[2];
          if (!(0, Xg.e)(zv.frustum, ev, pv, dv, sv)) continue;
          const lv = ev + sv / 2 - this.eye[0],
            Tv = pv + sv / 2 - this.eye[1],
            wv = dv + sv / 2 - this.eye[2];
          if (Vv.distance = lv * lv + Tv * Tv + wv * wv, this.lighting && !Vv.lit && (iv = Math.max(iv, Vv.vertexCount), this.unlit.push(Vv)), Sv) continue;
          const av = this.isBlended(Pv) ? null : this.batchFor(Pv, Vv.packed, Vv.vertices.page, 1 === vv, Wv);
          jv ? (Fv[nv] = Vv, Yv[nv++] = av) : Dv(Vv, av)
        }
        const Kv = jv ? this.sweepVisibility(vv, zv, mv) : null;
        null === (ev = (0, Ke.t)(gv)) || void 0 === ev || ev.update(zv.frustum, this.originOffset, sv, Kv);
        for (let Vv = 0; Vv < nv; Vv++) {
          const vv = Fv[Vv];
          !Kv || Kv.isDrawn(vv.ci, vv.cj, vv.ck) ? Dv(vv, Yv[Vv]) : (this.visCulledParts++, this.visCulledTriangles += 2 * vv.faceCount)
        }
        for (const Vv of this.transparent) Gv ||= cv && Vv.material.liquid && !Vv.material.customRenderMat;
        this.submittedTriangles = Ov, Kv && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(vv, zv, Kv)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Gv) : Gv && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && iv > 0 && this.geometry.lightFullSky(this.unlit, iv);
        for (const Vv of this.opaqueBatches) this.chunkSorter.sort(Vv.meshes, 1) || Vv.meshes.sort(op);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(bp)
      }
      sweepVisibility(vv, zv, Pv) {
        const {
          oT: hv
        } = vv.vW, Sv = hv.O4, ev = this.visPassable, gv = this.eye[0] + this.originOffset[0], pv = this.eye[1] + this.originOffset[1], dv = this.eye[2] + this.originOffset[2];
        if (!Pv.eyeClear(gv, pv, dv, zv.near, zv.projectionMatrix, hv)) return null;
        const [Nv, lv] = hv.CPv, Tv = Pv.update(gv, pv, dv, Sv, Nv, lv, ev);
        return this.visSweeps = Pv.sweeps, Tv ? Pv : null
      }
      visSeeThrough(vv, zv) {
        const {
          material: Pv
        } = vv;
        return (!Pv || !this.isBlended(Pv)) && (vv.mesh.visibility < 1 || !(null !== Pv && void 0 !== Pv && Pv.bindGroup) || vv.faceCount > 0 && (!this.geometry.backed(vv) || this.lighting && !vv.vertices.page.twin) || !this.batchDraws(Pv, vv.packed, zv))
      }
      batchDraws(vv, zv, Pv) {
        var hv;
        const Sv = zv ? 2 : 0;
        if (vv === this.visDrawsMaterial && function(vv, zv) {
            return 0 !== (vv & 1 << zv)
          }(this.visDrawsBits, Sv)) return 0 !== (this.visDrawsBits & 2 << Sv);
        let ev = null !== (hv = this.visBatchDraws.get(vv)) && void 0 !== hv ? hv : 0;
        if (!(ev & 1 << Sv)) {
          ev |= 1 << Sv | (!!vv.bindGroupLayout && this.canDraw(vv, zv) && !!this.pipelines.get(this.pipelineId(vv, this.programKey(vv, zv), Pv)) ? 2 << Sv : 0), this.visBatchDraws.set(vv, ev)
        }
        return this.visDrawsMaterial = vv, this.visDrawsBits = ev, 0 !== (ev & 2 << Sv)
      }
      runVisCheck(vv, zv, Pv) {
        const {
          vW: hv
        } = vv, {
          oT: Sv
        } = hv, ev = Sv.O4, gv = new Set;
        for (const wv of this.chunks.values()) gv.add(wv.key);
        const pv = GS.Matrix.FromArray(zv.viewProjectionMatrix).invert(),
          [dv, Nv, lv] = this.originOffset,
          Tv = new GS.fa,
          Wv = function(vv, zv, Pv, hv) {
            const Sv = new Set;
            for (let ev = 0; ev < 27; ev++)
              for (let gv = 0; gv < 48; gv++) {
                const pv = Pv((gv + .5) / 48 * 2 - 1, (ev + .5) / 27 * 2 - 1);
                Zp(vv, zv, [pv[0] - zv[0], pv[1] - zv[1], pv[2] - zv[2]], hv, Sv)
              }
            return Sv
          }({
            EQ: (vv, zv, Pv) => Sv.EQ(vv, zv, Pv),
            occluders: Pv.occluders,
            opaque: Pv.opaque,
            aa: ev,
            isDrawn: (vv, zv, hv) => Pv.isDrawn(vv, zv, hv),
            hasParts: (vv, zv, Pv) => gv.has((0, Qp.h)(vv, zv, Pv))
          }, [this.eye[0] + dv, this.eye[1] + Nv, this.eye[2] + lv], ((vv, zv) => (GS.fa.TransformCoordinatesFromFloatsToRef(vv, zv, .5, pv, Tv), [Tv.x + dv, Tv.y + Nv, Tv.z + lv])), (Sv.CPv[0] + 1) * ev);
        this.visViolations = Wv.size;
        for (const wv of Wv) this.warnOnce(`vis:${wv}`, `Lite terrain cave culling skipped chunk ${wv}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var vv;
        null !== (vv = this.Bw) && void 0 !== vv && vv.isRunning() && (this.shaderPackInputs ??= new He(this.device, this.Bw.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Bw, this.eye, this.lighting))
      }
      bindShaderPackInputs(vv, zv, Pv) {
        var hv, Sv, ev, gv;
        let pv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: dv
        } = this.shaderPackFields(zv, Pv);
        if (void 0 === dv) return;
        this.shaderPackInputs || (this.shaderPackInputs = new He(this.device, Pv.textureLayers(), this.sunShadow), this.shaderPackInputs.write(Pv, this.eye, this.lighting));
        const Nv = Sh(dv) ? null !== (hv = null === (Sv = this.sceneDepth) || void 0 === Sv ? void 0 : Sv.view) && void 0 !== hv ? hv : this.standIn() : null,
          lv = pv ? null !== (ev = null === (gv = this.shadowMask) || void 0 === gv ? void 0 : gv.view) && void 0 !== ev ? ev : this.standIn() : null;
        this.shaderPackInputs.bind(vv, Nv, Ae(dv, !!this.sunShadow), lv)
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
        var vv, zv;
        return null !== (vv = null === (zv = this.shaderPackInputs) || void 0 === zv ? void 0 : zv.bindGroupFor(null, !0)) && void 0 !== vv ? vv : null
      }
      resetBatches(vv) {
        const zv = this.opaqueBatches;
        let Pv = 0;
        for (const hv of zv) hv.meshes.length > 0 && (hv.meshes.length = 0, hv.faceCull = this.batchFaceCull(hv.material, vv), zv[Pv++] = hv);
        zv.length = Pv
      }
      orderBatches() {
        const vv = this.opaqueBatches;
        for (let zv = 0; zv < vv.length; zv++) {
          const Pv = vv[zv];
          Pv.group = zv;
          for (let hv = 0; hv < zv; hv++) {
            const zv = vv[hv];
            if (zv.material === Pv.material && zv.packed === Pv.packed) {
              Pv.group = zv.group;
              break
            }
          }
          Pv.nearest = Pv.meshes.length > 0 ? Pv.meshes[0].distance : 1 / 0
        }
        vv.sort(Ap)
      }
      batchFor(vv, zv, Pv, hv, Sv) {
        for (const gv of this.opaqueBatches)
          if (gv.material === vv && gv.packed === zv && gv.page === Pv && gv.resting === hv) return gv;
        const ev = {
          material: vv,
          packed: zv,
          page: Pv,
          resting: hv,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(vv, Sv)
        };
        return this.opaqueBatches.push(ev), ev
      }
      batchFaceCull(vv, zv) {
        return !(!zv || !(0, tp.r)(vv.model)) && (!this.Bw || ! function(vv) {
          var zv;
          return !(null === (zv = (0, Dz.g)(vv)) || void 0 === zv || !zv.movesVertices)
        }(this.shaderPackFields(vv, this.Bw).packVariant))
      }
      writeFrameUniforms(vv, zv) {
        const Pv = this.frameUniforms,
          hv = lh;
        if ((0, lp.B)(vv, Pv), Pv[hv.fogInfos] = zv.fogEnabled ? zv.fogMode : 0, Pv[hv.fogInfos + 1] = zv.fogStart, Pv[hv.fogInfos + 2] = zv.fogEnd, Pv[hv.fogInfos + 3] = zv.fogDensity, Pv.set(zv.fogColour, hv.fogColour), Pv[hv.outputHeight] = zv.renderHeight, Pv.set(zv.ambientColour, hv.sceneAmbient), (0, lp.u)(zv, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const zv = (0, Tp.g)(vv.Ba, vv.ia, vv.ca);
          for (let vv = 0; vv < 4; vv++) Pv[hv.aoLevels + vv] = zv[vv] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, Pv)
      }
      animateMaterials(vv) {
        const zv = Wh.anim;
        for (const Pv of this.materials.values()) Pv.animated && (Pv.uniformData[zv] = vv, this.device.queue.writeBuffer(Pv.uniformBuffer, 4 * zv, Pv.uniformData, zv, 1))
      }
      canDraw(vv, zv) {
        return !("atlas" === vv.texture && !zv) || (this.warnOnce(`stride:${vv.id}`, `Lite terrain: material "${vv.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(vv, zv) {
        let Pv = 0;
        vv.setBindGroup(1, this.frameBindGroup);
        for (const hv of this.opaqueBatches) {
          if (!hv.meshes.length || !this.canDraw(hv.material, hv.packed)) continue;
          const Sv = this.pipelineFor(hv.material, hv.packed, zv, hv.resting);
          Sv && (vv.setPipeline(Sv), vv.setBindGroup(2, hv.material.bindGroup), this.Bw && this.bindShaderPackInputs(vv, hv.material, this.Bw, this.prepassOf.has(Sv)), Pv += this.drawBatch(vv, hv))
        }
        return Pv
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(vv, zv, Pv) {
        const hv = this.target,
          Sv = this.Bw;
        if (!hv || !Sv || 0 === this.maskPipelines) return 0;
        let ev = 0,
          gv = null;
        this.geometry.setDrawing(!0);
        try {
          for (const pv of this.opaqueBatches) {
            if (!pv.meshes.length || !this.canDraw(pv.material, pv.packed)) continue;
            const dv = this.pipelineFor(pv.material, pv.packed, hv, pv.resting),
              Nv = dv && this.prepassOf.get(dv);
            Nv && (gv || (gv = vv.beginRenderPass(zv), gv.setBindGroup(0, Pv), gv.setBindGroup(1, this.frameBindGroup)), gv.setPipeline(Nv), gv.setBindGroup(2, pv.material.bindGroup), this.bindShaderPackInputs(gv, pv.material, Sv, !0), ev += this.drawBatch(gv, pv))
          }
        } finally {
          var pv;
          null === (pv = gv) || void 0 === pv || pv.end(), this.geometry.setDrawing(!1)
        }
        return ev
      }
      drawBatch(vv, zv) {
        let Pv = 0;
        for (const hv of zv.meshes) {
          const {
            rangeCount: zv
          } = hv;
          zv > 0 && (Pv += this.geometry.draw(vv, hv, this.lighting, hv.first0, hv.count0), zv > 1 && (Pv += this.geometry.draw(vv, hv, this.lighting, hv.first1, hv.count1)))
        }
        return Pv
      }
      drawTransparent(vv, zv) {
        let Pv = 0,
          hv = null,
          Sv = null;
        vv.setBindGroup(1, this.frameBindGroup);
        for (const ev of this.transparent) {
          const gv = ev.material;
          if (!this.canDraw(gv, ev.packed)) continue;
          const pv = this.pipelineFor(gv, ev.packed, zv);
          pv && (pv !== hv && (vv.setPipeline(pv), hv = pv, this.Bw && this.bindShaderPackInputs(vv, gv, this.Bw)), gv !== Sv && (vv.setBindGroup(2, gv.bindGroup), Sv = gv), Pv += this.geometry.draw(vv, ev, this.lighting))
        }
        return Pv
      }
    }

    function Ep(vv, zv, Pv, hv) {
      return `${Kh(vv)}|${vv.atlasLayers}|${vv.gJ}|${zv}|${Pv}|${hv._colorFormat}|${hv._depthStencilFormat}|${hv._sampleCount}`
    }

    function op(vv, zv) {
      return vv.distance - zv.distance
    }

    function bp(vv, zv) {
      return zv.distance - vv.distance
    }
    class rp {
      constructor() {
        this.left = []
      }
      sort(vv, zv) {
        for (let Pv = 0; Pv < vv.length; Pv++) {
          const zv = vv[Pv].distance;
          if (zv - zv !== 0) return !1
        }
        return this.sortRange(vv, 0, vv.length, zv), !0
      }
      sortRange(vv, zv, Pv, hv) {
        if (Pv - zv <= 16) {
          for (let Sv = zv + 1; Sv < Pv; Sv++) {
            const Pv = vv[Sv],
              ev = hv * Pv.distance;
            let gv = Sv - 1;
            for (; gv >= zv && hv * vv[gv].distance > ev; gv--) vv[gv + 1] = vv[gv];
            vv[gv + 1] = Pv
          }
          return
        }
        const Sv = zv + Pv >>> 1;
        if (this.sortRange(vv, zv, Sv, hv), this.sortRange(vv, Sv, Pv, hv), hv * vv[Sv - 1].distance <= hv * vv[Sv].distance) return;
        const {
          left: ev
        } = this, gv = Sv - zv;
        for (let lv = 0; lv < gv; lv++) ev[lv] = vv[zv + lv];
        let pv = 0,
          dv = Sv,
          Nv = zv;
        for (; pv < gv && dv < Pv;) vv[Nv++] = hv * vv[dv].distance < hv * ev[pv].distance ? vv[dv++] : ev[pv++];
        for (; pv < gv;) vv[Nv++] = ev[pv++]
      }
    }
    const kp = Math.ceil(102);

    function Xp(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zv;
      const ev = Math.min(zv, Pv),
        gv = new Uint32Array(vP(hv));
      for (let pv = 0; pv < hv; pv++) {
        const zv = Math.floor(pv * ev / hv),
          Pv = Math.max(zv + 1, Math.floor((pv + 1) * ev / hv));
        for (let dv = 0; dv < hv; dv++) {
          const Nv = Math.floor(dv * ev / hv),
            lv = Math.max(Nv + 1, Math.floor((dv + 1) * ev / hv));
          let Tv = 0;
          for (let hv = zv; hv < Pv; hv++)
            for (let zv = Nv; zv < lv; zv++) vv[hv * Sv + zv] >= kp && Tv++;
          if (2 * Tv >= (Pv - zv) * (lv - Nv)) {
            const vv = dv + hv * pv;
            gv[vv >>> 5] |= 1 << (31 & vv)
          }
        }
      }
      return gv
    }

    function vd(vv) {
      return Math.max(1, Math.min(16, vv))
    }
    class zd {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = vv, this.loadTexture = zv, this.warn = Pv, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(vv, zv) {
        return (vv.xR !== this.builtVersion || this.blockCaster.length !== zv) && (this.build(vv, zv), !0)
      }
      build(vv, zv) {
        this.builtVersion = vv.xR;
        const Pv = new Uint16Array(zv),
          hv = new Map;
        for (let Sv = 1; Sv < zv; Sv++) {
          const zv = this.classify(vv, Sv, hv);
          if (null === zv || zv === bz) {
            Pv[Sv] = null === zv ? 0 : bz;
            continue
          }
          let ev = this.byKey.get(zv.key);
          void 0 === ev && (ev = this.allocate(zv), this.byKey.set(zv.key, ev)), Pv[Sv] = ev
        }
        this.blockCaster = Pv, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(vv, zv) {
        const Pv = vv.bJ[zv];
        if ("function" !== typeof Pv) return Pv;
        try {
          return Pv()
        } catch (hv) {
          return this.warnOnce(`Sun shadows: no caster option for block ${zv}: ${hv instanceof Error?hv.message:String(hv)}`), null
        }
      }
      classify(vv, zv, Pv) {
        const hv = this.option(vv, zv);
        if ("none" === hv) return null;
        if (hv && hv.planes.length > 0) {
          const vv = hv.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(vv)}`,
            planes: vv
          }
        }
        if (vv.uW[zv]) return null;
        const Sv = vv.Pw[zv] ? vv.JR(zv) : null;
        if (Sv && Sv.length >= 6) {
          const vv = function(vv) {
            const zv = new Uint32Array(16);
            for (let Pv = 0; Pv + 6 <= vv.length; Pv += 6) {
              const hv = [0, 1, 2].map((zv => Math.max(0, Math.ceil(8 * vv[Pv + zv] - .5)))),
                Sv = [0, 1, 2].map((zv => Math.min(7, Math.floor(8 * vv[Pv + zv + 3] - .5))));
              for (let vv = hv[2]; vv <= Sv[2]; vv++)
                for (let Pv = hv[1]; Pv <= Sv[1]; Pv++)
                  for (let ev = hv[0]; ev <= Sv[0]; ev++) {
                    const hv = ev + 8 * (Pv + 8 * vv);
                    zv[hv >>> 5] |= 1 << (31 & hv)
                  }
            }
            return zv
          }(Sv);
          return function(vv) {
            return vv.every((vv => 4294967295 === vv))
          }(vv) ? bz : vv.every((vv => 0 === vv)) ? null : {
            kind: "shape",
            key: `shape:${vv.join(",")}`,
            mask: vv
          }
        }
        if (vv.Bx[zv] || !vv.Ja[zv]) return null;
        const ev = [0, 1, 2, 3, 4, 5].map((hv => {
          const Sv = vv.Ea[6 * zv + hv];
          let ev = Pv.get(Sv);
          return void 0 === ev && (ev = function(vv) {
            if (!vv || vv.Ss) return null;
            const {
              eJ: zv,
              gJ: Pv,
              PJ: hv
            } = vv;
            if (!zv || !Pv || !(Pv > 0) || void 0 === hv || !(hv >= 0)) return null;
            const Sv = zv[0],
              ev = Pv * Pv * 4;
            if (!Sv || Sv.byteLength < ev) return null;
            const gv = Math.floor(Sv.byteLength / ev),
              pv = zv[Math.floor(hv / gv)];
            if (!pv) return null;
            const dv = new Uint8Array(pv.buffer, pv.byteOffset, pv.byteLength),
              Nv = hv % gv * ev;
            if (Nv + ev > dv.length) return null;
            const lv = new Uint8Array(Pv * Pv);
            let Tv = !1;
            for (let Wv = 0; Wv < lv.length; Wv++) lv[Wv] = dv[Nv + 4 * Wv + 3], Tv ||= lv[Wv] < kp;
            return Tv ? {
              alpha: lv,
              width: Pv
            } : null
          }(vv.hs(Sv)), Pv.set(Sv, ev)), ev
        }));
        if (ev.every((vv => null === vv))) return bz;
        const gv = vd(Math.max(...ev.map((vv => {
            var zv;
            return null !== (zv = null === vv || void 0 === vv ? void 0 : vv.width) && void 0 !== zv ? zv : 1
          })))),
          pv = new Uint32Array(vP(gv)).fill(4294967295),
          dv = ev.map((vv => null === vv ? pv : Xp(vv.alpha, vv.width, vv.width, gv)));
        return {
          kind: "cutout",
          key: `cutout:${gv}:${dv.map((vv=>vv.join(","))).join("|")}`,
          size: gv,
          faces: dv
        }
      }
      allocate(vv) {
        if (this.nextCaster >= zP) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const zv = this.nextCaster++;
        if (this.writeCaster(zv, rz, 0, 0, 0), "shape" === vv.kind) {
          const Pv = this.allocateMask(vv.mask.length);
          Pv >= 0 && (this.sink(Pv, vv.mask), this.writeCaster(zv, kz, Pv, 0, 8))
        } else if ("cutout" === vv.kind) {
          const Pv = vP(vv.size),
            hv = this.allocateMask(6 * Pv);
          if (hv >= 0) {
            const Sv = new Uint32Array(6 * Pv);
            vv.faces.forEach(((vv, zv) => {
              Sv.set(vv, zv * Pv)
            })), this.sink(hv, Sv), this.writeCaster(zv, uz, hv, 0, vv.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(zv, vv.planes).finally((() => {
          this.planesLoading--
        })));
        return zv
      }
      async loadPlanes(vv, zv) {
        const Pv = await Promise.all(zv.map((vv => this.texture(vv.texture))));
        if (Pv.some((vv => null === vv))) return;
        const hv = Pv,
          Sv = vd(Math.max(...hv.map((vv => Math.min(vv.width, vv.height))))),
          ev = vP(Sv),
          gv = this.allocateMask(zv.length * (4 + ev));
        if (gv < 0) return;
        const pv = new Uint32Array(zv.length * (4 + ev)),
          dv = 4 * zv.length;
        zv.forEach(((vv, zv) => {
          const Pv = gv + dv + zv * ev;
          pv.set(function(vv, zv) {
            const [Pv, hv] = vv.tangent, Sv = Math.hypot(Pv, hv) || 1, ev = Pv / Sv, gv = hv / Sv, pv = vv.centre[0] * gv - vv.centre[1] * ev, dv = new Uint32Array(4);
            return new Float32Array(dv.buffer, 0, 3).set([ev, gv, pv]), dv[3] = zv, dv
          }(vv, Pv), 4 * zv), pv.set(Xp(hv[zv].alpha, hv[zv].width, hv[zv].height, Sv), dv + zv * ev)
        })), this.sink(gv, pv), this.writeCaster(vv, Xz, gv, zv.length, Sv)
      }
      texture(vv) {
        let zv = this.textures.get(vv);
        return zv || (zv = this.loadTexture(vv).catch((zv => (this.warn(`Sun shadows: no mask for ${vv}: ${zv instanceof Error?zv.message:String(zv)}`), null))), this.textures.set(vv, zv)), zv
      }
      allocateMask(vv) {
        if (this.nextMaskWord + vv > PP) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const zv = 32768 + this.nextMaskWord;
        return this.nextMaskWord += vv, zv
      }
      writeCaster(vv, zv, Pv, hv, Sv) {
        this.sink(0 + 4 * vv, Uint32Array.of(zv, Pv, hv, Sv))
      }
      warnOnce(vv) {
        this.warned.has(vv) || (this.warned.add(vv), this.warn(vv))
      }
    }
    var Pd = Pv(37227);

    function hd(vv) {
      return !vv.gs && !vv.ehv && !vv.qa
    }

    function Sd() {
      return {
        bricks: new Uint32Array(Lz),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Zz)
      }
    }
    class ed {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = vv, this.writeVoxels = zv, this.writePool = Pv, this.warn = hv, this.eyeChunk = null, this.slotChunk = new Array(Rz).fill(null), this.slotVersion = new Float64Array(Rz).fill(-1), this.slotPool = new Array(Rz).fill(null), this.starved = new Uint8Array(Rz), this.queue = [], this.queued = new Uint8Array(Rz), this.queueSorted = !0, this.freePool = new Uint32Array(hP), this.freeCount = hP, this.casterTable = null, this.warnedPool = !1, this.scratch = Sd(), this.victimScratch = Sd(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Rz), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Sv = 0; Sv < hP; Sv++) this.freePool[Sv] = 65535 - Sv
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return hP - this.freeCount
      }
      chunkAdded(vv) {
        if (null === this.eyeChunk || !this.inRadius(vv.i, vv.j, vv.k)) return;
        const zv = Jz(vv.i, vv.j, vv.k);
        this.slotChunk[zv] = vv, this.slotVersion[zv] = -1, this.enqueue(zv)
      }
      update(vv, zv, Pv) {
        const hv = this.casters.blockCaster;
        if (hv !== this.casterTable) {
          this.casterTable = hv;
          for (let vv = 0; vv < Rz; vv++) this.slotVersion[vv] = -1, this.slotChunk[vv] && this.enqueue(vv)
        }
        const Sv = Math.floor(vv[0] / 32),
          ev = Math.floor(vv[1] / 32),
          gv = Math.floor(vv[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Sv || this.eyeChunk[1] !== ev || this.eyeChunk[2] !== gv) && (this.eyeChunk = [Sv, ev, gv], this.follow(zv), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let pv = 0; pv < Rz; pv++) {
          const vv = this.slotChunk[pv];
          vv && (vv.mzv || vv.Za !== this.slotVersion[pv]) && this.enqueue(pv)
        }
        this.drain(Pv), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(vv, zv) {
        this.records.set(zv, 4 * vv), this.windowTopStale = !0, this.writeVoxels(4 * vv, zv)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const vv = this.records;
        let zv = -1 / 0;
        for (let hv = 0; hv < vv.length; hv += 4) {
          const Pv = 255 & vv[hv + 3];
          Pv !== qz && Pv !== Iz || !this.inRadius(vv[hv], vv[hv + 1], vv[hv + 2]) || (zv = Math.max(zv, vv[hv + 1] * Kz + (vv[hv + 3] >>> 8)))
        }
        const Pv = zv === -1 / 0 ? 1 : zv + Mz;
        Pv !== this.windowTop[0] && (this.windowTop[0] = Pv, this.writeVoxels(Hz, this.windowTop))
      }
      follow(vv) {
        const zv = this.eyeChunk,
          [Pv, hv, Sv] = Vz;
        for (let gv = -Sv; gv <= Sv; gv++)
          for (let Sv = -hv; Sv <= hv; Sv++)
            for (let hv = -Pv; hv <= Pv; hv++) {
              var ev;
              const Pv = zv[0] + hv,
                pv = zv[1] + Sv,
                dv = zv[2] + gv,
                Nv = Jz(Pv, pv, dv),
                lv = this.slotChunk[Nv];
              if (lv && !lv.mzv && lv.i === Pv && lv.j === pv && lv.k === dv) continue;
              const Tv = null !== (ev = vv(Pv, pv, dv)) && void 0 !== ev ? ev : null;
              lv && (lv.i !== Pv || lv.j !== pv || lv.k !== dv) && this.slotPool[Nv] && (this.release(Nv), this.record.fill(0), this.writeRecord(Nv, this.record)), this.slotChunk[Nv] = Tv, this.slotVersion[Nv] = -1, (Tv || lv) && this.enqueue(Nv)
            }
      }
      requeueStarved() {
        for (let vv = 0; vv < Rz; vv++) this.starved[vv] && this.slotChunk[vv] && this.enqueue(vv)
      }
      enqueue(vv) {
        this.queued[vv] || (this.queued[vv] = 1, this.queue.push(vv), this.queueSorted = !1)
      }
      drain(vv) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const vv = new Map;
          for (const zv of this.queue) vv.set(zv, this.slotDistance(zv));
          this.queue.sort(((zv, Pv) => vv.get(Pv) - vv.get(zv))), this.queueSorted = !0
        }
        const zv = performance.now();
        let Pv = 0;
        const hv = [];
        for (; this.queue.length > 0 && (0 === Pv || performance.now() - zv < vv);) {
          const vv = this.queue.pop(),
            zv = this.slotChunk[vv];
          !zv || zv.mzv || hd(zv) ? (this.queued[vv] = 0, this.encodeSlot(vv), Pv++) : hv.push(vv)
        }
        for (let Sv = hv.length - 1; Sv >= 0; Sv--) this.queue.push(hv[Sv])
      }
      slotDistance(vv) {
        const zv = this.slotChunk[vv],
          Pv = this.eyeChunk;
        return zv ? Math.max(Math.abs(zv.i - Pv[0]), Math.abs(zv.j - Pv[1]), Math.abs(zv.k - Pv[2])) : 0
      }
      inRadius(vv, zv, Pv) {
        const hv = this.eyeChunk,
          [Sv, ev, gv] = Vz;
        return Math.abs(vv - hv[0]) <= Sv && Math.abs(zv - hv[1]) <= ev && Math.abs(Pv - hv[2]) <= gv
      }
      release(vv) {
        const zv = this.slotPool[vv];
        if (zv) {
          for (let vv = zv.length - 1; vv >= 0; vv--) this.freePool[this.freeCount++] = zv[vv];
          this.slotPool[vv] = null
        }
      }
      encodeSlot(vv) {
        var zv, Pv, hv, Sv, ev;
        let gv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const dv = null !== (zv = null === (Pv = this.slotPool[vv]) || void 0 === Pv ? void 0 : Pv.length) && void 0 !== zv ? zv : 0;
        this.release(vv), this.starved[vv] = 0;
        const Nv = this.slotChunk[vv],
          lv = this.record;
        if (!Nv || Nv.mzv || !Nv.fW) return this.slotChunk[vv] = null, this.slotVersion[vv] = -1, lv.fill(0), this.writeRecord(vv, lv), void(dv > 0 && this.requeueStarved());
        this.slotVersion[vv] = Nv.Za;
        const Tv = this.encodeBricks(Nv, vv, gv, pv);
        lv[0] = Nv.i, lv[1] = Nv.j, lv[2] = Nv.k, lv[3] = Tv, this.writeRecord(vv, lv), null === (hv = this.encoded) || void 0 === hv || hv.call(this, Nv), pv && (null !== (Sv = null === (ev = this.slotPool[vv]) || void 0 === ev ? void 0 : ev.length) && void 0 !== Sv ? Sv : 0) < dv && this.requeueStarved()
      }
      encodeBricks(vv, zv, Pv, hv) {
        if (vv.za) return tz;
        const Sv = this.casters.blockCaster,
          {
            data: ev,
            stride: gv,
            offset: pv
          } = vv.fW,
          [dv, Nv, lv] = gv,
          Tv = Kz,
          {
            bricks: Wv,
            cells: wv,
            special: av
          } = Pv;
        Wv.fill(0), av.fill(0);
        let sv = 0,
          Cv = 0,
          iv = 0;
        for (let cv = 0; cv < Tv; cv++) {
          const zv = cv >> 2,
            Pv = 3 & cv,
            hv = vv.mw[cv],
            gv = hv === Pd.g ? -1 : hv < Sv.length ? Sv[hv] : 0;
          if (0 !== gv)
            for (let vv = 0; vv < Tv; vv++) {
              const hv = vv >> 2,
                Gv = 3 & vv;
              let mv = pv + vv * dv + cv * Nv;
              for (let vv = 0; vv < Tv; vv++, mv += lv) {
                let pv = gv;
                if (pv < 0) {
                  const vv = ev[mv];
                  if (pv = vv < Sv.length ? Sv[vv] : 0, 0 === pv) continue
                }
                const dv = Ez(hv, zv, vv >> 2),
                  Nv = oz(Gv, Pv, 3 & vv);
                Wv[3 * dv + (Nv >>> 5)] |= 1 << (31 & Nv), wv[dv * Qz + Nv] = pv, sv++, iv = cv, pv === bz ? Cv++ : av[dv] = 1
              }
            }
        }
        return 0 === sv ? tz : 32768 === Cv ? qz | iv << 8 : (this.writePoolEntries(zv, Pv, hv), this.writeVoxels(Az + zv * Lz, Wv), Iz | iv << 8)
      }
      writePoolEntries(vv, zv, Pv) {
        const {
          bricks: hv,
          cells: Sv,
          special: ev
        } = zv, gv = this.entry;
        let pv = 0;
        for (let lv = 0; lv < Zz; lv++) pv += ev[lv];
        if (0 === pv) return;
        Pv && this.freeCount < pv && this.evictBeyond(vv, pv);
        const dv = new Uint32Array(Pv ? Math.min(pv, this.freeCount) : 0);
        let Nv = 0;
        for (let lv = 0; lv < Zz; lv++) {
          if (!ev[lv]) continue;
          const Pv = 3 * lv;
          if (Nv === dv.length) {
            this.dropSpecials(zv, lv), this.starved[vv] = 1;
            continue
          }
          const pv = this.freePool[--this.freeCount];
          dv[Nv++] = pv;
          for (let vv = 0; vv < Qz; vv++) {
            const zv = hv[Pv + (vv >>> 5)] >>> (31 & vv) & 1 ? Sv[lv * Qz + vv] : 0;
            1 & vv ? gv[vv >> 1] |= zv << 16 : gv[vv >> 1] = zv
          }
          hv[Pv + 2] = pv + 1, this.writePool(SP + 32 * pv, gv)
        }
        dv.length > 0 && (this.slotPool[vv] = dv)
      }
      evictBeyond(vv, zv) {
        const Pv = this.slotDistance(vv),
          hv = [];
        for (let Sv = 0; Sv < Rz; Sv++) Sv !== vv && this.slotPool[Sv] && this.slotDistance(Sv) > Pv && hv.push(Sv);
        hv.sort(((vv, zv) => this.slotDistance(zv) - this.slotDistance(vv)));
        for (const Sv of hv) {
          if (this.freeCount >= zv) return;
          const vv = this.slotChunk[Sv];
          vv && !vv.mzv && vv.fW && (vv.Za === this.slotVersion[Sv] || hd(vv)) && this.encodeSlot(Sv, this.victimScratch, !1)
        }
      }
      dropSpecials(vv, zv) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const Pv = 3 * zv;
        for (let hv = 0; hv < Qz; hv++) vv.cells[zv * Qz + hv] !== bz && (vv.bricks[Pv + (hv >>> 5)] &= ~(1 << (31 & hv)))
      }
    }
    var gd = Pv(36964);
    class pd {
      constructor(vv) {
        this.device = vv, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new sP, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.oT = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = vv.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = vv.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(vv, zv, Pv) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: hv
        } = this;
        hv.dw(vv, zv), Pv.forEachSunShadowCaster((vv => {
          this.add(vv)
        })), hv.finish();
        const Sv = 0 === hv.parts;
        if (Sv && this.uploadedEmpty) return;
        this.uploadedEmpty = Sv;
        const {
          queue: ev
        } = this.device, {
          words: gv
        } = hv;
        ev.writeBuffer(this.frameBuffer, 0, gv, 0, 16385), hv.refs > 0 && ev.writeBuffer(this.frameBuffer, 65540, gv, dP, hv.refs), Sv || ev.writeBuffer(this.frameBuffer, 327684, gv, NP, hv.parts * pP)
      }
      add(vv) {
        const zv = this.gridFor(vv);
        if (!zv) return;
        const {
          frame: Pv
        } = this, {
          oT: hv,
          worldAt: Sv,
          instances: ev,
          instanceCount: gv,
          thin: pv
        } = vv;
        if (ev)
          for (let dv = 0; dv < gv; dv++) pv ? (iP(ev, 16 * dv, hv, Sv, this.oT), Pv.add(zv, this.oT)) : Pv.add(zv, ev, 16 * dv);
        else Pv.add(zv, hv, Sv)
      }
      gridFor(vv) {
        let {
          geometry: zv,
          indexed: Pv,
          first: hv,
          count: Sv,
          skip: ev
        } = vv, gv = this.grids.get(zv);
        gv || (gv = new Map, this.grids.set(zv, gv));
        const pv = `${Pv?hv:-1-hv}:${Sv}:${null!==ev&&void 0!==ev?ev:""}`;
        let dv = gv.get(pv);
        if (void 0 !== dv || this.gridsFull) return dv;
        const Nv = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Nv + 2;
        else if (Nv > this.bakeDeadline) return;
        return dv = this.bake(zv, Pv, hv, Sv, ev), void 0 !== dv && gv.set(pv, dv), dv
      }
      bake(vv, zv, Pv, hv, Sv) {
        const ev = vv.vertexAttributes.find((vv => "position" === vv.kind)),
          gv = ev ? function(vv, zv, Pv, hv) {
            let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const ev = vv => zv ? zv[Pv + vv] : Pv + vv,
              gv = vv => null !== Sv && [0, 1, 2].some((zv => {
                const Pv = ev(vv + zv);
                return Pv >= Sv[0] && Pv < Sv[1]
              })),
              pv = [1 / 0, 1 / 0, 1 / 0],
              dv = [-1 / 0, -1 / 0, -1 / 0];
            for (let cv = 0; cv + 2 < hv; cv += 3)
              if (!gv(cv))
                for (let zv = 0; zv < 3; zv++) {
                  const Pv = ev(cv + zv);
                  for (let zv = 0; zv < 3; zv++) pv[zv] = Math.min(pv[zv], vv[3 * Pv + zv]), dv[zv] = Math.max(dv[zv], vv[3 * Pv + zv])
                }
            const Nv = Math.max(dv[0] - pv[0], dv[1] - pv[1], dv[2] - pv[2]);
            if (!(Nv > 0)) return null;
            const lv = Nv / 64,
              Tv = [0, 0, 0],
              Wv = [0, 0, 0],
              wv = [0, 0, 0];
            for (let cv = 0; cv < 3; cv++) Tv[cv] = Math.min(65, Math.ceil((dv[cv] - pv[cv]) / lv) + 1), Wv[cv] = pv[cv] - lv / 2, wv[cv] = Wv[cv] + Tv[cv] * lv;
            const av = new Uint32Array(Math.ceil(Tv[0] * Tv[1] * Tv[2] / 32)),
              sv = new Float64Array(9),
              Cv = [0, 0, 0],
              iv = [0, 0, 0];
            for (let cv = 0; cv + 2 < hv; cv += 3)
              if (!gv(cv)) {
                for (let zv = 0; zv < 3; zv++) {
                  const Pv = ev(cv + zv);
                  for (let hv = 0; hv < 3; hv++) sv[3 * zv + hv] = vv[3 * Pv + hv]
                }
                for (let vv = 0; vv < 3; vv++) {
                  const zv = Math.min(sv[vv], sv[3 + vv], sv[6 + vv]),
                    Pv = Math.max(sv[vv], sv[3 + vv], sv[6 + vv]);
                  Cv[vv] = Math.max(0, Math.floor((zv - Wv[vv]) / lv - 1e-6)), iv[vv] = Math.min(Tv[vv] - 1, Math.floor((Pv - Wv[vv]) / lv + 1e-6))
                }
                for (let vv = Cv[2]; vv <= iv[2]; vv++)
                  for (let zv = Cv[1]; zv <= iv[1]; zv++)
                    for (let Pv = Cv[0]; Pv <= iv[0]; Pv++)
                      if (cP(sv, Wv[0] + (Pv + .5) * lv, Wv[1] + (zv + .5) * lv, Wv[2] + (vv + .5) * lv, lv / 2)) {
                        const hv = Pv + Tv[0] * (zv + Tv[1] * vv);
                        av[hv >>> 5] |= 1 << (31 & hv)
                      }
              } return {
              words: av,
              lo: Wv,
              hi: wv,
              cell: lv,
              dims: Tv
            }
          }((0, gd.j)(ev, vv.vertexCount), zv ? vv.indexData : null, Pv, hv, Sv) : null;
        if (!gv) return null;
        const {
          words: pv,
          ...dv
        } = gv;
        if (this.gridTop + pv.length > TP) return void(this.gridsFull = !0);
        const Nv = this.gridTop;
        return this.gridTop += pv.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Nv, pv), {
          ...dv,
          at: Nv
        }
      }
    }
    const dd = Math.cos(1 * Math.PI / 180);

    function Nd(vv, zv) {
      return vv[0] * zv[0] + vv[1] * zv[1] + vv[2] * zv[2] < dd
    }
    async function ld(vv) {
      const {
        pixels: zv,
        width: Pv,
        height: hv
      } = await QS(vv), Sv = new Uint8Array(Pv * hv);
      for (let ev = 0; ev < Sv.length; ev++) Sv[ev] = zv[4 * ev + 3];
      return {
        width: Pv,
        height: hv,
        alpha: Sv
      }
    }
    class Td {
      constructor(vv, zv) {
        this.device = vv, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(mP.q), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = vv.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = vv.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * yz,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = vv.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [Pv, hv, Sv] = mP.t;
        this.volume = vv.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: Pv,
            height: hv,
            depthOrArrayLayers: Sv
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = vv.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = vv.createBuffer({
          label: "sun-shadow-volume-work",
          size: mP.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = zv ? new pd(vv) : null, this.entityStandIn = zv ? null : vv.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var vv, zv;
        const Pv = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || Pv.push("Lite sun shadow volume pipeline compiling");
        const hv = null !== (vv = null === (zv = this.casters) || void 0 === zv ? void 0 : zv.planesLoading) && void 0 !== vv ? vv : 0;
        return hv > 0 && Pv.push(`${hv} Lite sun shadow plane casters loading their textures`), Pv
      }
      entries() {
        var vv, zv, Pv, hv;
        const Sv = Oz.p;
        return [{
          binding: Sv.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Sv.fW,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Sv.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Sv.volume,
          resource: this.volumeView
        }, {
          binding: Sv.sampler,
          resource: this.volumeSampler
        }, {
          binding: Sv.entities,
          resource: {
            buffer: null !== (vv = null === (zv = this.entities) || void 0 === zv ? void 0 : zv.frameBuffer) && void 0 !== vv ? vv : this.entityStandIn
          }
        }, {
          binding: Sv.entityGrids,
          resource: {
            buffer: null !== (Pv = null === (hv = this.entities) || void 0 === hv ? void 0 : hv.gridBuffer) && void 0 !== Pv ? Pv : this.entityStandIn
          }
        }]
      }
      prepare(vv, zv, Pv) {
        var hv;
        this.entitiesThisFrame = !1;
        const Sv = null !== (hv = null === Pv || void 0 === Pv ? void 0 : Pv.sunShadowReach()) && void 0 !== hv ? hv : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!Pv || !Sv.sunShadow && !Sv.airShadow) return void(this.volumeHolds = null);
        if (vv.oT.O4 !== Kz) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${vv.oT.O4}; everything is lit.`)));
        const ev = this.start(vv);
        this.casters.update(vv.kW, vv.kW.Pw.length);
        const gv = vv.iW;
        for (let Wv = 0; Wv < 3; Wv++) this.eye[Wv] = zv[Wv] + gv[Wv];
        const pv = (0, mP.A)(this.eye);
        this.staleNear = pv;
        const dv = vv.oT.Ns;
        ev.update(this.eye, ((vv, zv, Pv) => dv.ls(vv, zv, Pv)), 1);
        const Nv = (0, mP.v)(Pv.y_()),
          lv = ev.eyeChunk,
          Tv = this.uniformInts;
        for (let Wv = 0; Wv < 3; Wv++) Tv[Wv] = lv[Wv], Tv[4 + Wv] = pv[Wv];
        this.entitiesThisFrame = null !== this.entities && Sv.sunShadow, this.entitiesThisFrame && aP(this.uniformFloats, 8, zv, Nv), null !== this.volumeHolds && (this.castersWritten || Nd(Nv, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(pv, Nv, lv)
      }
      markStale(vv) {
        const zv = this.staleNear,
          Pv = Kz,
          hv = [vv.i * Pv, vv.j * Pv, vv.k * Pv];
        for (let ev = 0; ev < 3; ev++)
          if (hv[ev] + Pv <= zv[ev] - Pv || hv[ev] >= zv[ev] + mP.t[ev] + Pv) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Sv = this.stale;
        for (let ev = 0; ev < Sv.length; ev += 4)
          if (Sv[ev] === vv.i && Sv[ev + 1] === vv.j && Sv[ev + 2] === vv.k) return void(Sv[ev + 3] = this.swept);
        if (16 === Sv.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Sv.push(vv.i, vv.j, vv.k, this.swept)
      }
      writeStale() {
        const vv = this.swept,
          zv = this.stale;
        this.staleAll && vv - this.staleAllSwept >= mP.j && (this.staleAll = !1, zv.length = 0);
        let Pv = 0;
        for (let Sv = 0; Sv < zv.length; Sv += 4)
          if (vv - zv[Sv + 3] < mP.j) {
            for (let vv = 0; vv < 4; vv++) zv[Pv + vv] = zv[Sv + vv];
            Pv += 4
          } zv.length = Pv;
        const hv = this.uniformInts;
        hv[3] = this.staleAll ? 5 : Pv / 4;
        for (let Sv = 0; Sv < 4; Sv++)
          for (let vv = 0; vv < 3; vv++) hv[16 + 4 * Sv + vv] = 4 * Sv < Pv ? zv[4 * Sv + vv] * Kz : 0
      }
      writeUniform() {
        const vv = this.uniformInts;
        let zv = this.uniformWritten;
        if (zv) {
          let Pv = !0;
          for (let hv = 0; hv < vv.length && Pv; hv++) Pv = vv[hv] === zv[hv];
          if (Pv) return
        }
        zv ??= this.uniformWritten = new Int32Array(vv.length), zv.set(vv), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(vv) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, vv)
      }
      computeVolume(vv, zv, Pv) {
        const hv = this.buildVolumePass();
        if (!hv) return void(this.volumeHolds = null);
        const Sv = (0, mP.x)(this.volumeHolds, vv);
        this.volumeHolds = vv;
        const ev = 1 === Sv.length && Sv[0].size.every(((vv, zv) => vv === mP.t[zv])),
          gv = this.sweptChunk,
          pv = this.sweptLight,
          dv = zv[0] !== pv[0] || zv[1] !== pv[1] || zv[2] !== pv[2],
          Nv = Pv[0] !== gv[0] || Pv[1] !== gv[1] || Pv[2] !== gv[2],
          lv = dv && Nd(zv, pv);
        if ((ev || this.written || Nv || lv) && (this.fastLeft = mP.j), ev || this.written || dv || Nv) {
          this.written = !1;
          for (let vv = 0; vv < 3; vv++) gv[vv] = Pv[vv], pv[vv] = zv[vv];
          this.sweepLeft = ev ? 0 : mP.j
        }
        if (ev ? this.swept += mP.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Sv.push(...(0, mP.E)(vv, this.slice)), this.slice = (this.slice + 1) % mP.j, this.swept++), 0 === Sv.length) return;
        const Tv = (0, mP.I)(this.workData, zv, Sv);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Wv = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          wv = Wv.beginComputePass({
            label: "sun-shadow-volume"
          });
        wv.setPipeline(hv.pipeline), wv.setBindGroup(FP.group, hv.bindGroup), wv.dispatchWorkgroups(Math.ceil(Tv / mP.n)), wv.end(), this.device.queue.submit([Wv.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const vv = FP,
          zv = GPUShaderStage.COMPUTE,
          Pv = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: vv.uniform,
              visibility: zv,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: vv.fW,
              visibility: zv,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: vv.special,
              visibility: zv,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: vv.work,
              visibility: zv,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: vv.volume,
              visibility: zv,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          hv = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: Pv,
            entries: [{
              binding: vv.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: vv.fW,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: vv.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: vv.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: vv.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [Pv]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: YP()
            }),
            entryPoint: "main"
          }
        }).then((vv => {
          this.volumePass = {
            pipeline: vv,
            bindGroup: hv
          }
        }), (vv => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(vv)}`)
        })), null
      }
      start(vv) {
        if (this.window) return this.window;
        const zv = (vv, zv) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * vv, zv)
        };
        this.casters = new zd(((vv, Pv) => {
          this.castersWritten = !0, zv(vv, Pv)
        }), ld);
        const Pv = new ed(this.casters, ((vv, zv) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * vv, zv)
        }), zv);
        return Pv.encoded = vv => {
          this.markStale(vv)
        }, vv.oT.on("chunkAdded", (vv => {
          Pv.chunkAdded(vv)
        })), this.window = Pv, Pv
      }
    }
    var Wd = Pv(38235),
      wd = Pv(38239);
    const ad = 0,
      sd = 3,
      Cd = 4,
      cd = 5;

    function Gd(vv, zv, Pv, hv) {
      vv.drawOffset(zv, hv + ad), zv[hv + sd] = vv.drawTime(), Pv[hv + Cd] = vv.ring.drawStart(), Pv[hv + cd] = vv.ring.drawCount()
    }
    const md = `\n${sh}\n\nconst MAX_STOPS = ${wd.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${wd.c/4}>,\n\tcolor1: array<vec4f, ${wd.c}>,\n\tcolor2: array<vec4f, ${wd.c}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${wd.c}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${wd.c}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var jd = Pv(40916);
    class fd {
      constructor(vv, zv, Pv, hv) {
        this.device = vv, this.system = zv, this.frameIndex = Pv, this.bindings = hv, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, jd.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (vv, zv) => {
          this.device.queue.writeBuffer(this.ring, vv * wd.d * 4, this.system.ring.records, vv * wd.d, (zv - vv) * wd.d)
        };
        const {
          name: Sv
        } = zv;
        this.ring = vv.createBuffer({
          label: `particles-${Sv}`,
          size: zv.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = vv.createBuffer({
          label: `particles-uniforms-${Sv}`,
          size: 4 * wd.l,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(vv) {
        const zv = (0, jd.c)(this.system, this.uniformBits, vv);
        zv && (this.uniformBits = zv, this.device.queue.writeBuffer(this.uniforms, 0, zv))
      }
      bind() {
        const {
          system: vv
        } = this, zv = this.texture;
        (0, jd.k)(vv, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${vv.name}`,
          size: [wd.i, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * wd.i
        }, [wd.i, 1]));
        const Pv = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === zv.view && this.boundSampler === zv.sampler && this.boundRamp === Pv || (this.boundView = zv.view, this.boundSampler = zv.sampler, this.boundRamp = Pv, this.bindGroup = this.device.createBindGroup({
          label: `particles-${vv.name}`,
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
            resource: zv.sampler
          }, {
            binding: 3,
            resource: zv.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: Pv
          }]
        }))
      }
      destroy() {
        var vv;
        this.ring.destroy(), this.uniforms.destroy(), null === (vv = this.ramp) || void 0 === vv || vv.destroy()
      }
    }
    class Fd {
      constructor(vv, zv) {
        this.device = vv, this.resources = zv, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Nz.d)();
        const Pv = vv.createBindGroupLayout({
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
        this.frameLayout = vv.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = vv.createPipelineLayout({
          bindGroupLayouts: [zz(vv), Pv, this.frameLayout]
        }), this.module = vv.createShaderModule({
          label: "particles",
          code: md
        });
        const hv = vv.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        vv.queue.writeTexture({
          texture: hv
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: Pv,
          rampSampler: vv.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: hv.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (zv, Pv) => (this.bindTarget(Pv), {
            renderable: this.renderable,
            pipeline: gz(vv, Pv),
            draw: vv => Pv === this.preparedTarget ? this.draw(vv) : 0
          })
        }
      }
      get ghv() {
        return this.systems.size
      }
      reset() {
        for (const vv of this.systems.keys()) vv.reset()
      }
      describePendingWork() {
        return (0, Wd.d)(this.systems.keys(), "Lite")
      }
      vV(vv, zv) {
        const Pv = new Wd.c(vv, zv, this);
        return this.systems.set(Pv, new fd(this.device, Pv, this.allocateFrameIndex(), this.bindings)), Pv
      }
      j_(vv, zv) {
        for (const Pv of this.systems.keys()) Pv.j_(vv, zv)
      }
      canDraw(vv) {
        const zv = this.systems.get(vv),
          Pv = vv.texture ? this.resources.boundTexture(vv.texture) : null;
        if (!zv || !Pv || !this.targetPipelines) return !1;
        if (zv.texture = Pv, zv.pipelines.length = 0, !MS(vv.blendMode)) return this.warnOnce(`blend:${vv.blendMode}`, `particle blend mode ${vv.blendMode} is not drawn (${vv.name})`), !0;
        const hv = (0, KS.i)(vv.blendMode);
        for (const Sv of hv) {
          const vv = this.pipelineFor(Sv);
          if (!1 === vv) return zv.pipelines.length = 0, !0;
          vv && zv.pipelines.push(vv)
        }
        return zv.pipelines.length === hv.length
      }
      disposeStopped(vv) {
        vv.dispose()
      }
      remove(vv) {
        const zv = this.systems.get(vv);
        zv && (this.systems.delete(vv), zv.destroy(), this.freeFrameIndices.push(zv.frameIndex))
      }
      prepare(vv) {
        const zv = vv.animationRatio || 1;
        pz(this.renderable._worldCenter, vv, hz), this.preparedTarget = this.target, this.draws.length = 0;
        let Pv = 0;
        for (const hv of this.systems.values()) {
          const vv = hv.system;
          if (!vv.animateIfActive(zv)) continue;
          if (vv.ring.takeUploads(hv.upload), !vv.hasLiveParticles() || 0 === hv.pipelines.length) continue;
          hv.writeUniforms(this.warnOnce), hv.bind();
          const Sv = 64 * hv.frameIndex;
          hv.count = vv.ring.drawCount(), Gd(vv, this.frameData, this.frameBits, Sv), Pv = Math.max(Pv, Sv + 64), this.draws.push(hv)
        }
        Pv > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, Pv)
      }
      draw(vv) {
        let zv = 0,
          Pv = null;
        for (const hv of this.draws) {
          vv.setBindGroup(1, hv.bindGroup), vv.setBindGroup(2, this.frameBindGroup, [256 * hv.frameIndex]);
          for (const Sv of hv.pipelines) Sv !== Pv && (vv.setPipeline(Sv), Pv = Sv), vv.draw(4, hv.count), zv++
        }
        return zv
      }
      bindTarget(vv) {
        this.target = vv;
        const zv = `${vv._colorFormat}|${vv._depthStencilFormat}|${vv._depthCompare}|${vv._sampleCount}`;
        let Pv = this.pipelines.get(zv);
        Pv || (Pv = new Map, this.pipelines.set(zv, Pv)), this.targetPipelines = Pv
      }
      pipelineFor(vv) {
        var zv;
        const Pv = this.targetPipelines,
          hv = Pv.get(vv);
        if (void 0 !== hv) return hv;
        Pv.set(vv, null);
        const Sv = this.target,
          ev = vv === KS.c,
          gv = null !== (zv = Sv._depthCompare) && void 0 !== zv ? zv : Pz;
        return this.device.createRenderPipelineAsync({
          label: `particles-${vv}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: kv({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: ev ? 1 : 0
            }
          }, Sv, yS((0, KS.h)(vv))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Sv._depthStencilFormat ? {
            format: Sv._depthStencilFormat,
            depthCompare: gv,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Sv._sampleCount
          }
        }).then((zv => {
          Pv.set(vv, zv)
        }), (zv => {
          Pv.set(vv, !1), console.error("Lite particle pipeline failed", zv), ES("particles", `blend-${vv}`, zv)
        })), null
      }
      allocateFrameIndex() {
        const vv = this.freeFrameIndices.pop();
        if (void 0 !== vv) return vv;
        const zv = this.nextFrameIndex++;
        if (64 * (zv + 1) > this.frameData.length) {
          const vv = new Float32Array(2 * this.frameData.length);
          vv.set(this.frameData), this.frameData = vv, this.frameBits = new Uint32Array(vv.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return zv
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
    class Yd {
      constructor(vv, zv, Pv, hv, Sv) {
        this.lite = vv, this.canvas = zv, this.info = Pv, this.resources = Sv, this.SPv = !1, this.needPOTTextures = !1, this.WE = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = zv.width, this.renderHeight = zv.height, this.caps = {
          maxTextureSize: hv.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: hv.maxTextureArrayLayers
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
      setSize(vv, zv) {
        if (this.renderWidth === vv && this.renderHeight === zv) return !1;
        const Pv = this.renderWidth,
          hv = this.renderHeight;
        this.renderWidth = vv, this.renderHeight = zv;
        try {
          (0, Lv.p)(this.lite, vv, zv)
        } catch (Sv) {
          if (Sv instanceof DOMException && "InvalidStateError" === Sv.name) {
            this.renderWidth = Pv, this.renderHeight = hv;
            try {
              (0, Lv.p)(this.lite, Pv, hv)
            } catch {
              this.canvas.width = Pv, this.canvas.height = hv
            }
            return console.warn("WebGPU could not allocate render targets for resize", vv, zv, Sv.message), !1
          }
          throw Sv
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
      Qm() {
        const vv = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : vv - this.lastFrameTime, this.lastFrameTime = vv
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(vv, zv) {
        const Pv = document.createElement("canvas");
        return Pv.width = vv, Pv.height = zv, Pv
      }
      OE(vv, zv) {
        var Pv;
        return null !== (Pv = this.resources.OE.get(vv)) && void 0 !== Pv ? Pv : new Bv(this.resources, vv, zv)
      }
      atlasArray(vv, zv, Pv) {
        return this.resources.atlasArray(vv, zv, Pv)
      }
    }
    class nd {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(vv) {
        this.fov = vv.fov, this.nearPlane = vv.near, this.farPlane = vv.far;
        const zv = vv.worldMatrix;
        for (let Pv = 0; Pv < 16; Pv++)
          if (this.worldMatrix[Pv] !== zv[Pv]) return this.worldMatrix.set(zv), void this.worldMatrixVersion++
      }
    }
    class Od {
      constructor(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
        let lv = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = vv, this.Is = zv, this.sceneTask = Pv, this.gpuDevice = hv, this.terrain = Sv, this.meshes = ev, this.particles = gv, this.resources = pv, this.sunShadow = lv, this.qvv = void 0, this.backendName = "WebGPU (Lite)", this.Vk = void 0, this.modelMeshes = void 0, this.camera = new nd, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new Mv(hv.lost), this.deviceLost = this.refusals.deviceLost, this.qvv = new Yd(vv, dv, Nv, hv.limits, pv), (0, Dv.H)({
          Vp: vv => {
            Rv(vv) && pv.textureSlot(vv)
          },
          loaded: vv => Rv(vv) ? pv.textureLoaded(vv) : null,
          canvasUpdated: (vv, zv, Pv) => {
            Rv(vv) && pv.canvasUpdated(vv, zv, Pv)
          }
        }), this.Vk = ev.Vk, this.modelMeshes = ev.modelMeshes, zv.camera = this.camera
      }
      get castsEntitySunShadows() {
        var vv, zv;
        return null !== (vv = null === (zv = this.sunShadow) || void 0 === zv ? void 0 : zv.tracesEntities) && void 0 !== vv && vv
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(vv) {
        this.modelMeshes.attach(vv.model, vv.sceneMirror);
        const zv = vv.Is;
        this.setClearColour(zv.clearColor.r, zv.clearColor.g, zv.clearColor.b), zv.draw = () => {
          this.drawFrame(vv, zv)
        }
      }
      render(vv) {
        try {
          this.qvv.Qm(), vv.Is.render()
        } catch (zv) {
          throw this.refusals.frameFailed(zv), zv
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var vv, zv, Pv, hv;
        const Sv = [...this.particles.describePendingWork(), ...null !== (vv = null === (zv = this.sunShadow) || void 0 === zv ? void 0 : zv.describePendingWork()) && void 0 !== vv ? vv : []],
          ev = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (Pv = this.terrain.sceneDepth) && void 0 !== Pv && Pv.compiling ? 1 : 0) + (null !== (hv = this.terrain.shadowMask) && void 0 !== hv && hv.compiling ? 1 : 0);
        ev > 0 && Sv.push(`${ev} Lite pipelines compiling`);
        const gv = this.terrain.buffersAwaitingVerdict;
        gv > 0 && Sv.push(`${gv} Lite terrain buffers awaiting their out-of-memory verdict`);
        const pv = this.resources.texturesLoading;
        return pv > 0 && Sv.push(`${pv} Lite textures loading`), Sv
      }
      prepareTexture(vv) {
        return null !== this.resources.boundTexture(vv) || this.resources.textureFailed(vv)
      }
      drawFrame(vv, zv) {
        var Pv, hv, Sv, ev, gv, pv;
        const dv = Np(vv);
        this.camera.copyFromView(dv), this.setClearColour(dv.clearColour[0], dv.clearColour[1], dv.clearColour[2]), null === (Pv = this.sunShadow) || void 0 === Pv || Pv.prepare(vv.vW, dv.eye, null !== (hv = vv.vW.Bw) && void 0 !== hv ? hv : null), this.terrain.prepare(vv, dv), null === (Sv = this.terrain.sceneDepth) || void 0 === Sv || Sv.setPlanes(dv.near, dv.far), null === (ev = this.terrain.shadowMask) || void 0 === ev || ev.prepare(dv), og(this.sceneTask), this.meshes.prepare(zv, dv, vv.model.earthSky, null !== (gv = vv.vW.Bw) && void 0 !== gv ? gv : null), this.particles.prepare(dv);
        const Nv = performance.now();
        this.resources.flushUploads(), null === (pv = this.sunShadow) || void 0 === pv || pv.traceEntities(this.meshes);
        try {
          (0, Lv.o)(this.engine, this.lastFrameTime > 0 ? Nv - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Nv
      }
      setClearColour(vv, zv, Pv) {
        const hv = this.Is.clearColor;
        hv.r = vv, hv.g = zv, hv.b = Pv, hv.a = 1
      }
    }
    const Dd = "WebGPU device lost while Lite was starting";

    function Kd(vv, zv) {
      return "object" === typeof vv && null !== vv ? Object.assign(vv, {
        startStep: zv
      }) : vv
    }
    async function Vd(vv, zv) {
      const Pv = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!Pv) throw Kd(new Error("No WebGPU adapter"), "no_adapter");
      const hv = Pv.info,
        Sv = {
          vendor: (null === hv || void 0 === hv ? void 0 : hv.vendor) || "unknown vendor",
          renderer: (null === hv || void 0 === hv ? void 0 : hv.architecture) || "unknown renderer",
          version: (null === hv || void 0 === hv ? void 0 : hv.description) || "unknown version"
        },
        ev = function(vv) {
          const zv = {};
          for (const Pv in vv.limits) {
            const hv = vv.limits[Pv];
            "number" === typeof hv && (zv[Pv] = hv)
          }
          return zv
        }(Pv);
      let gv;
      vv.style.background = "black";
      try {
        gv = await (0, Lv.i)(vv, {
          msaaSamples: zv.Czv ? 4 : 1,
          requiredLimits: ev,
          alphaMode: "premultiplied"
        })
      } catch (lv) {
        throw Kd(lv, "#47" === (null === (pv = lv) || void 0 === pv ? void 0 : pv.message) ? "no_adapter" : "device")
      }
      var pv;
      const dv = function(vv) {
        return vv._device
      }(gv);
      let Nv = null;
      dv.lost.then((vv => {
        Nv = vv, console.error(`WebGPU device lost (${vv.reason}): ${vv.message}`)
      }));
      try {
        const Pv = await async function(vv, zv, Pv, hv, Sv, ev) {
          const gv = (0, Hv.b)(vv),
            pv = new Bg(vv, zv),
            dv = new Jp(zv),
            Nv = new Og(zv, pv, (vv => function(vv, zv) {
              for (const hv of uv(vv)) {
                var Pv;
                if (hv._targetSignature === zv) return null !== (Pv = hv._sceneBG) && void 0 !== Pv ? Pv : null
              }
              return null
            }(gv, vv))),
            lv = new Fd(zv, pv);
          for (const wv of function(vv, zv, Pv) {
              return [zv.opaqueRenderable, vv.opaqueRenderable, vv.skyLastRenderable, Pv.renderable, zv.transparentRenderable, vv.transparentRenderable, vv.frontRenderable]
            }(Nv, dv, lv)) Xv(gv, wv);
          const Tv = function(vv) {
            for (const zv of uv(vv))
              if ("Is" === zv.name) return zv;
            throw new Error("Lite: the scene has no render task named scene")
          }(gv);
          Sv && dv.installSceneDepth(Tv, vv);
          const Wv = ev ? new Td(zv, ev.entities) : null;
          dv.sunShadow = Wv, Wv && null !== ev && void 0 !== ev && ev.entities && (dv.shadowMask = new Yp(zv, Tv, vv, dv));
          return Nv.sunShadow = Wv, await (0, Hv.e)(gv), new Od(vv, gv, Tv, zv, dv, Nv, lv, pv, Pv, hv, Wv)
        }(gv, dv, vv, Sv, zv.sceneDepth, zv.sunShadow);
        if (null !== Nv) {
          const {
            reason: vv,
            message: zv
          } = Nv;
          throw Object.assign(new Error(`${Dd} (${vv}): ${zv}`), {
            fallbackReason: Dd
          })
        }
        return Pv
      } catch (lv) {
        throw dv.destroy(), null === Nv ? lv : Kd(lv, "device")
      }
    }
  },
  40176: (vv, zv, Pv) => {
    Pv.d(zv, {
      C: () => av,
      b: () => Sv,
      d: () => hv,
      g: () => Wv,
      j: () => lv,
      k: () => Cv,
      n: () => ev,
      p: () => pv,
      r: () => dv,
      s: () => gv,
      v: () => sv,
      z: () => wv
    });
    const hv = 3,
      Sv = 0,
      ev = 1,
      gv = 2,
      pv = {
        uniform: 3,
        fW: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      dv = 10,
      Nv = "BloxdPackInputs",
      lv = "bloxdPackInputs",
      Tv = [{
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
      Wv = 80;

    function wv() {
      const vv = Tv.map((vv => {
        let {
          name: zv,
          type: Pv
        } = vv;
        return `    ${zv}: ${Pv},\n`
      })).join("");
      return `struct ${Nv} {\n${vv}}\n@group(${hv}) @binding(${Sv}) var<uniform> ${lv}: ${Nv};\n`
    }

    function av(vv, zv) {
      const Pv = new DataView(vv, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Wv),
        [hv, Sv, ev, gv, pv, dv] = Tv;
      Pv.setFloat32(hv.offset, zv.seconds, !0), Pv.setUint32(Sv.offset, zv.lit ? 1 : 0, !0);
      for (let Nv = 0; Nv < 3; Nv++) Pv.setInt32(ev.offset + 4 * Nv, zv.renderOffset[Nv], !0), Pv.setFloat32(gv.offset + 4 * Nv, zv.y_[Nv], !0), Pv.setFloat32(pv.offset + 4 * Nv, zv.eyePosition[Nv], !0), Pv.setFloat32(dv.offset + 4 * Nv, zv.shadowDirection[Nv], !0)
    }

    function sv(vv) {
      const zv = new Uint32Array(Math.max(1, vv.length));
      return vv.forEach(((vv, Pv) => {
        let {
          id: hv,
          rotation: Sv
        } = vv;
        zv[Pv] = 65535 & hv | (3 & Sv) << 16
      })), zv
    }
    const Cv = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);