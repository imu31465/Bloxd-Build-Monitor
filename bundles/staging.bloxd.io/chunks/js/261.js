export const id = 261;
export const ids = [261];
export const modules = {
  40729: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => gz,
      d: () => oz,
      g: () => Oz,
      j: () => Uz
    });
    var Fz = sz(36652),
      Wz = sz(38126),
      Xz = sz(38119);

    function Oz(zz, tz, sz, Fz) {
      const Wz = Xz.t;
      tz.fill(0), zz.gravity.toArray(tz, Wz.gravity), zz.colorDead.toArray(tz, Wz.colorDead), sz[Wz.ramp] = zz.useRampGradients ? 1 : 0;
      const Oz = zz.getColorGradients(),
        oz = Nz(zz, Oz, "colour", Fz);
      sz[Wz.colorCount] = oz;
      for (let Xz = 0; Xz < oz; Xz++) {
        var vz;
        const zz = Oz[bz(Oz, Xz)];
        tz[Wz.colorPositions + Xz] = zz.gradient, zz.color1.toArray(tz, Wz.color1 + 4 * Xz), (null !== (vz = zz.color2) && void 0 !== vz ? vz : zz.color1).toArray(tz, Wz.color2 + 4 * Xz)
      }
      const Uz = zz.getVelocityGradients(),
        Kz = Nz(zz, Uz, "hb", Fz);
      sz[Wz.velocityCount] = Kz;
      for (let Xz = 0; Xz < Kz; Xz++) Bz(tz, Wz.hb + 4 * Xz, Uz[bz(Uz, Xz)]);
      const uz = zz.useRampGradients ? zz.getColorRemapGradients() : null,
        wz = Nz(zz, uz, "colour remap", Fz);
      sz[Wz.remapCount] = wz;
      for (let Xz = 0; Xz < wz; Xz++) Bz(tz, Wz.remap + 4 * Xz, uz[bz(uz, Xz)])
    }

    function oz() {
      return {
        key: [],
        texels: new Uint8Array(4 * Xz.k)
      }
    }
    const vz = [];

    function Uz(zz, tz) {
      return Kz(zz, vz), !Hz(vz, tz.key) && (tz.key.length = 0, tz.key.push(...vz), tz.key.length > 0 && function(zz, tz) {
        for (let sz = 0; sz < Xz.k; sz++) Wz.o.GetCurrentGradient(sz / Xz.k, zz, ((zz, tz, sz) => {
          Fz.Color3.LerpToRef(zz.color, tz.color, sz, uz)
        })), tz[4 * sz] = 255 * uz.r, tz[4 * sz + 1] = 255 * uz.g, tz[4 * sz + 2] = 255 * uz.b, tz[4 * sz + 3] = 255
      }(zz.getRampGradients(), tz.texels), !0)
    }

    function Kz(zz, tz) {
      tz.length = 0;
      const sz = zz.useRampGradients ? zz.getRampGradients() : null;
      if (null !== sz && void 0 !== sz && sz.length) {
        tz.push(sz.length);
        for (const zz of sz) tz.push(zz.gradient, zz.color.r, zz.color.g, zz.color.b)
      }
    }
    const uz = new Fz.Color3;

    function Nz(zz, tz, sz, Fz) {
      return tz ? tz.length > Xz.b ? (Fz(`particleStops:${sz}`, `GPU particles use the first 2 and last ${Xz.b-2} of more than ${Xz.b} ${sz} gradient stops (${zz.name})`), Xz.b) : tz.length : 0
    }

    function bz(zz, tz) {
      return tz < 2 || zz.length <= Xz.b ? tz : zz.length - Xz.b + tz
    }
    const wz = new Float32Array(Xz.m),
      Dz = new Uint32Array(wz.buffer);

    function gz(zz, tz, sz) {
      return Oz(zz, wz, Dz, sz), tz && Hz(Dz, tz) ? null : Dz.slice()
    }

    function Hz(zz, tz) {
      if (zz.length !== tz.length) return !1;
      for (let sz = 0; sz < zz.length; sz++)
        if (zz[sz] !== tz[sz]) return !1;
      return !0
    }

    function Bz(zz, tz, sz) {
      var Fz;
      zz[tz] = sz.gradient, zz[tz + 1] = sz.factor1, zz[tz + 2] = null !== (Fz = sz.factor2) && void 0 !== Fz ? Fz : sz.factor1
    }
  },
  40726: (zz, tz, sz) => {
    function Fz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const tz = new Set;
      return (sz, Fz) => {
        tz.has(sz) || (tz.add(sz), console.warn(zz + Fz))
      }
    }
    sz.d(tz, {
      c: () => Fz
    })
  },
  40763: (zz, tz, sz) => {
    sz.d(tz, {
      createLiteRendererAsync: () => jv,
      liteBabylonBackend: () => Qz,
      setPipelineFailureHook: () => VW
    });
    var Fz = sz(36652),
      Wz = sz(36985),
      Xz = sz(37329),
      Oz = sz(36600),
      oz = sz(37335);
    class vz extends oz.b {
      constructor() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        super(...tz), this.color = new Fz.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: tz[0].aJ().getUniqueId(),
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
          needAlphaBlendingForMesh: zz => zz.visibility < 1 || zz.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Uz = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Kz = zz => 1 << Uz.indexOf(zz),
      uz = Kz("VERTEXCOLOR"),
      Nz = Kz("INSTANCES"),
      bz = Kz("THIN_INSTANCES"),
      wz = Kz("INSTANCESCOLOR"),
      Dz = Kz("FOG"),
      gz = Kz("LITE_FRONT_LAYER");

    function Hz(zz, tz, sz, Fz) {
      let Wz = 0;
      return zz.isVerticesDataPresent("color") && (Wz |= uz), "none" !== tz && (Wz |= Nz), "thin" === tz && (Wz |= bz, zz.isVerticesDataPresent("instanceColor") && (Wz |= wz)), Fz.fogEnabled && zz.applyFog && 0 !== Fz.fogMode && (Wz |= Dz), sz >= 1 && (Wz |= gz), Wz
    }

    function Bz(zz, tz) {
      zz.updateColor4("color", tz.color, tz.alpha)
    }
    var Pz = sz(37271),
      rz = sz(36800),
      Yz = sz(36682),
      xz = sz(36569),
      mz = sz(37257),
      Jz = sz(37268),
      Iz = sz(36590),
      Cz = sz(36592),
      ez = sz(36605);
    const Zz = xz.e.GLSL;
    class Gz {
      constructor(zz, tz) {
        this.name = zz, this.Kg = tz, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.qJ = {
          addOnce: zz => {
            this.disposers.push(zz)
          }
        }, this.uniqueId = tz.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      aJ() {
        return this.Kg
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
      needAlphaBlendingForMesh(zz) {
        return (0, Iz.U)(this.model, zz.visibility, zz.hasVertexAlpha)
      }
      needAlphaTestingForMesh(zz) {
        return (0, Iz.V)(this.model, zz.visibility, zz.hasVertexAlpha)
      }
      dispose() {
        (0, rz.k)(this);
        for (const zz of this.disposers.splice(0)) zz()
      }
      get model() {
        return (0, Iz.$)(this)
      }
    }
    const Tz = new WeakSet;

    function cz(zz) {
      return Tz.has(zz)
    }

    function jz(zz) {
      Tz.add(zz)
    }
    const Az = {
      create: (zz, tz) => ((0, Yz.m)(zz, new Gz(zz.name, tz)), Cz.c.defines()),
      write: () => {},
      addFeature: (zz, tz) => {
        const sz = zz.mirror;
        tz.feature === Jz.h && tz.state.dirLightCount > 0 && (zz.disableLighting = !0, (0, Iz.Z)(zz)), "BLOXD_LIGHTING" in tz.defines && (0, rz.i)(sz), tz.feature === mz.i && ((0, Pz.h)(tz.state, Zz), function(zz, tz) {
          const sz = zz.aJ().FD();
          tz.textures.forEach(((Fz, Wz) => {
            setTimeout((() => {
              var Xz, Oz;
              const {
                url: oz
              } = Fz.source;
              sz.atlasArray(oz, null !== (Xz = null === (Oz = tz.sources.pixels) || void 0 === Oz ? void 0 : Oz[Wz]) && void 0 !== Xz ? Xz : null, tz.sources.layerWidth).then((sz => {
                (0, Pz.d)(zz, tz, Wz, sz, sz.layerWidth, sz.layers, Zz)
              })).catch((zz => {
                console.error(`Failed to build texture array for atlas ${Wz}`, zz)
              }))
            }))
          }))
        }(sz, tz.state))
      },
      texture: (zz, tz, sz) => {
        let {
          data: Fz,
          sets: Wz
        } = sz;
        var Xz;
        (jz(zz), Fz) && (zz.uvSet = null !== (Xz = null === Wz || void 0 === Wz ? void 0 : Wz.coordinatesIndex) && void 0 !== Xz ? Xz : 0, (0, Yz.Z)(zz.matrix, null !== Wz && void 0 !== Wz ? Wz : {}))
      },
      cube: jz,
      canvas: (zz, tz, sz) => {
        let {
          width: Fz,
          height: Wz,
          mipmaps: Xz,
          samplingMode: Oz = ez.m.trilinear,
          hasAlpha: oz = !1,
          wrap: vz = ez.e.clamp
        } = sz;
        const Uz = zz.FD().createCanvas(Fz, Wz),
          Kz = new ez.o("2d", {
            kind: "canvas",
            width: Fz,
            height: Wz,
            canvas: Uz
          }, {
            samplingMode: Oz,
            wrapU: vz,
            wrapV: vz,
            noMipmap: !Xz,
            invertY: !0
          });
        return Kz.hasAlpha = oz, jz(Kz), Kz
      }
    };
    var yz = sz(36825),
      Mz = sz(36505);
    class dz {
      constructor(zz, tz, sz) {
        this.engine = zz, this.clearColor = tz, this.ambientColor = sz, this.onBeforeRenderObservable = new Mz.c, this.onBeforeCameraRenderObservable = new Mz.c, this.onAfterRenderObservable = new Mz.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.lY = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      FD() {
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
      addPendingData(zz) {
        this.pending.push(zz)
      }
      removePendingData(zz) {
        const tz = this.pending.indexOf(zz); - 1 !== tz && this.pending.splice(tz, 1)
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

    function hz() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const Qz = {
      mFz: hz,
      YFz: (zz, tz) => {
        const sz = new dz(zz.engine, Fz.c.FromArray(tz.clearColor), Fz.Color3.FromArray(tz.ambientColor));
        (0, Oz.b)(Az, sz), zz.Kg = sz,
          function(zz, tz) {
            const sz = Object.assign((0, yz.g)(zz, "camera"), {
              layerMask: 268435455
            });
            zz.model.nodes.setWorldSource(sz.row, zz.model.view.worldMatrix), zz.camera = tz.activeCamera = sz
          }(zz, sz), (0, Wz.i)(zz, ((zz, tz, sz) => (0, Xz.j)(zz, tz, sz, oz.b)))
      },
      HFz: () => {},
      setBabylonFog: () => {},
      JFz: hz,
      eFz: () => {},
      linesFromArrays: (zz, tz, sz) => (0, Xz.j)(zz, tz, sz, vz),
      ug: () => {},
      CFz: hz
    };
    var kz = sz(40816),
      iz = sz(40827);
    class Lz {
      constructor(zz) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const tz = new Promise((zz => {
          this.refused = zz
        }));
        this.deviceLost = Promise.race([zz, tz])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(zz) {
        (function(zz) {
          const {
            name: tz,
            message: sz
          } = null !== zz && void 0 !== zz ? zz : {};
          return "InvalidStateError" === tz && "string" === typeof sz && sz.startsWith("GPUDevice.")
        })(zz) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: zz.message,
          framesRefused: !0
        }))
      }
    }
    class lz {
      constructor(zz) {
        this.resources = zz, this.matrixKey = {
          au: 0
        }, this.attributesKey = {
          au: 0
        }, this.inputs = Object.create(null);
        for (let tz = 0; tz < 4; tz++) this.inputs[`world${tz}`] = new qz(this.matrixKey, 16 * tz, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(zz, tz) {
        this.resources.vertexBufferCreated(this.matrixKey, zz, !0), tz && this.resources.vertexBufferCreated(this.attributesKey, tz, !0)
      }
    }
    class nz extends lz {
      constructor(zz, tz, sz) {
        super(zz), this.mesh = tz, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Fz = this.inputs;
        let Wz = 0;
        for (const {
            size: Oz
          }
          of sz) Wz += Oz;
        for (const {
            name: Oz,
            offset: oz,
            size: vz,
            type: Uz
          }
          of sz) Fz[Oz] = new qz(this.attributesKey, 4 * oz, 4 * Wz, vz, !0, Uz);
        this.rowStride = Wz, zz.yE.set(tz, this);
        const Xz = tz.isVerticesDataPresent;
        tz.isVerticesDataPresent = (zz, sz) => zz in Fz || Xz.call(tz, zz, sz)
      }
      attach(zz, tz) {
        this.matrices = zz, this.attributes = tz, this.bind(zz, tz), this.mirror(zz, zz.length, zz.length / 16)
      }
      i5(zz) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, zz ? 64 * zz : void 0)
      }
      Z2() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(zz, tz) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * zz, 16 * tz)
      }
      attributeRows(zz, tz) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, zz * this.rowStride, tz * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(zz, tz, sz) {
        const Fz = this.mesh._thinInstanceDataStorage;
        Fz.matrixData = zz, Fz.matrixBufferSize = tz, Fz.worldMatrices = null, Fz.instancesCount = sz
      }
    }
    class az extends lz {
      constructor(zz, tz, sz) {
        var Fz, Wz, Xz, Oz;
        super(zz), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Fz = null === sz || void 0 === sz ? void 0 : sz.interleavedKinds) && void 0 !== Fz ? Fz : null, this.offsets = null !== (Wz = null === sz || void 0 === sz ? void 0 : sz.interleavedOffsets) && void 0 !== Wz ? Wz : [], this.rowStride = null !== (Xz = null === sz || void 0 === sz ? void 0 : sz.interleavedRowStride) && void 0 !== Xz ? Xz : 0, null === (Oz = this.layout) || void 0 === Oz || Oz.forEach(((zz, tz) => {
          this.inputs[zz] = new qz(this.attributesKey, 4 * this.offsets[tz], 4 * this.rowStride, sz.strides[zz])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), zz.batchUploads.set(tz, this), tz.qJ.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(zz) {
        const tz = this.packedBatch;
        return tz.renderSelf ? 0 === zz ? this.packedSource : tz.instances[zz - 1] : tz.instances[zz]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(zz, tz, sz, Fz) {
        const Wz = (tz.renderSelf ? 1 : 0) + tz.rows.length;
        if (this.frame = Fz, this.count = Wz, this.packedSource = zz, this.packedBatch = tz, 0 === Wz) return;
        if (zz.getWorldMatrix(), 16 * Wz > this.matrices.length) {
          let zz = this.matrices.length / 16;
          for (; zz < Wz;) zz *= 2;
          this.matrices = new Float32Array(16 * zz), this.attributes &&= new Float32Array(zz * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Xz = 0;
        tz.renderSelf && this.packRow(Xz++, zz, tz.row, sz);
        for (let Oz = 0; Oz < tz.rows.length; Oz++) this.packRow(Xz++, tz.instances[Oz], tz.rows[Oz], sz);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Wz), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Wz * this.rowStride)
      }
      packRow(zz, tz, sz, Fz) {
        const Wz = this.matrices;
        if (sz < 0) Wz.set(tz.getWorldMatrix().m, 16 * zz);
        else
          for (let Uz = 0; Uz < 16; Uz++) Wz[16 * zz + Uz] = Fz[16 * sz + Uz];
        const Xz = this.attributes;
        if (!Xz) return;
        const Oz = tz.uC,
          oz = this.layout;
        for (let Uz = 0; Uz < oz.length; Uz++) {
          var vz;
          const tz = null !== (vz = Oz[oz[Uz]]) && void 0 !== vz ? vz : 0,
            sz = zz * this.rowStride + this.offsets[Uz];
          tz.toArray ? tz.toArray(Xz, sz) : tz.copyToArray ? tz.copyToArray(Xz, sz) : Xz[sz] = tz
        }
      }
    }
    class qz {
      constructor(zz, tz, sz, Fz) {
        let Wz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = zz, this.byteOffset = tz, this.byteStride = sz, this.size = Fz, this.instanced = Wz, this.type = Xz, this.normalized = Oz
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
    const Sz = "CANVAS_ALPHA_ONE",
      Vz = `override ${Sz}: bool = false;`,
      Rz = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function pz(zz, tz, sz) {
      var Fz;
      let Wz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Xz = null !== (Fz = tz._colorFormat) && void 0 !== Fz ? Fz : "bgra8unorm",
        Oz = Wz ? 15 : 0;
      return sz ? {
        ...zz,
        targets: [{
          format: Xz,
          blend: {
            color: sz,
            alpha: Rz
          },
          writeMask: Oz
        }]
      } : {
        ...zz,
        constants: {
          ...zz.constants,
          [Sz]: 1
        },
        targets: [{
          format: Xz,
          writeMask: Oz
        }]
      }
    }

    function fz(zz, tz) {
      zz._renderables.push(tz)
    }

    function Ez(zz) {
      var tz, sz;
      return null !== (tz = null === (sz = zz._frameGraph) || void 0 === sz ? void 0 : sz._tasks) && void 0 !== tz ? tz : []
    }

    function zt(zz) {
      return zz._currentEncoder
    }

    function tt(zz) {
      return zz.createBindGroupLayout({
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
    const st = "greater-equal",
      Ft = 2e5,
      Wt = 1e5,
      Xt = new WeakMap;

    function Ot(zz, tz) {
      let sz = Xt.get(zz);
      if (!sz) {
        sz = {
          module: zz.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Xt.set(zz, sz)
      }
      const Fz = `${tz._colorFormat}|${tz._depthStencilFormat}|${tz._sampleCount}`;
      let Wz = sz.pipelines.get(Fz);
      if (!Wz) {
        var Xz;
        const {
          module: Oz
        } = sz;
        Wz = zz.createRenderPipeline({
          label: `placeholder ${Fz}`,
          layout: zz.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Oz,
            entryPoint: "v"
          },
          fragment: {
            module: Oz,
            entryPoint: "f",
            targets: [{
              format: null !== (Xz = tz._colorFormat) && void 0 !== Xz ? Xz : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: tz._depthStencilFormat ? {
            format: tz._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: tz._sampleCount
          }
        }), sz.pipelines.set(Fz, Wz)
      }
      return Wz
    }

    function ot(zz, tz, sz) {
      const Fz = tz.eye,
        Wz = tz.viewMatrix;
      zz[0] = Fz[0] + Wz[2] * sz, zz[1] = Fz[1] + Wz[6] * sz, zz[2] = Fz[2] + Wz[10] * sz
    }
    var vt = sz(37371),
      Ut = sz(40726),
      Kt = sz(36581);
    const ut = Math.PI,
      Nt = ut / 1.95,
      bt = [5e-4 / 94, 125e-7, 5e-4 / 18],
      wt = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((zz => {
        let [tz, sz] = zz;
        return .434 * ut * Math.pow(2 * ut / tz, 2) * sz
      }));

    function Dt(zz, tz, sz) {
      const {
        up: Fz,
        mieDirectionalG: Wz
      } = zz, Xz = 1 - Bt(1 - Math.exp(tz[1] / 45e4), 0, 1), Oz = zz.rayleigh - (1 - Xz), oz = Math.hypot(tz[0], tz[1], tz[2]), vz = oz > 0 ? 1 / oz : 0, Uz = sz.sunDir;
      for (let bz = 0; bz < 3; bz++) Uz[bz] = tz[bz] * vz;
      const Kz = Uz[0] * Fz[0] + Uz[1] * Fz[1] + Uz[2] * Fz[2],
        uz = 1e3 * Math.max(0, 1 - Math.exp(-(Nt - Math.acos(Bt(Kz, -1, 1))) / 1.5));
      sz.sunE = uz;
      const Nz = .2 * zz.turbidity * 1e-17 * zz.mieCoefficient;
      for (let bz = 0; bz < 3; bz++) {
        const zz = bt[bz] * Oz,
          tz = wt[bz] * Nz,
          Fz = uz / (zz + tz);
        sz.inScatterR[bz] = zz * Fz, sz.inScatterM[bz] = tz * Fz, sz.extinctionBeta[bz] = 8400 * zz + 1250 * tz
      }
      return sz.sunsetMix = Bt(Math.pow(1 - Kz, 5), 0, 1), sz.sunDiscE = 19e3 * uz, sz.mieScale = (1 - Wz * Wz) / (4 * ut), sz.mieBase = 1 + Wz * Wz, sz.mieSlope = 2 * Wz, sz
    }
    const gt = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const Ht = 1 / function(zz) {
      const {
        A: tz,
        B: sz,
        C: Fz,
        D: Wz,
        E: Xz,
        F: Oz
      } = gt;
      return (zz * (tz * zz + Fz * sz) + Wz * Xz) / (zz * (tz * zz + sz) + Wz * Oz) - Xz / Oz
    }(1e3);

    function Bt(zz, tz, sz) {
      return Math.min(Math.max(zz, tz), sz)
    }
    const Pt = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function rt(zz, tz) {
      const sz = new Map(tz),
        Fz = [],
        Wz = [],
        Xz = () => 0 === Wz.length || Wz[Wz.length - 1].active;
      let Oz = null;
      const oz = () => {
        const zz = [...sz].filter((zz => {
            let [, tz] = zz;
            return !0 !== tz
          })),
          tz = zz.map((zz => {
            let [tz] = zz;
            return tz
          })).join("|");
        Oz = zz.length ? new RegExp(`\\b(${tz})\\b`, "g") : null
      };
      oz();
      for (const vz of zz.split("\n")) {
        const zz = Pt.exec(vz);
        if (!zz) {
          Xz() && Fz.push(Oz ? Yt(vz, Oz, sz) : vz);
          continue
        }
        const tz = zz[1],
          Uz = zz[2].trim();
        if ("ifdef" === tz || "ifndef" === tz || "if" === tz) {
          const zz = Xz(),
            Fz = "if" === tz ? xt(Uz, sz) : sz.has(Uz) === ("ifdef" === tz);
          Wz.push({
            active: zz && Fz,
            parentActive: zz,
            taken: Fz
          })
        } else if ("elif" === tz || "else" === tz) {
          const zz = Wz[Wz.length - 1];
          if (!zz) throw new Error(`#${tz} without #if`);
          const Fz = !zz.taken && ("else" === tz || xt(Uz, sz));
          zz.active = zz.parentActive && Fz, zz.taken = zz.taken || Fz
        } else if ("endif" === tz) {
          if (!Wz.pop()) throw new Error("#endif without #if")
        } else if (Xz()) {
          const [zz, ...Fz] = Uz.split(/\s+/);
          "undef" === tz ? sz.delete(zz) : sz.set(zz, !Fz.length || Fz.join(" ")), oz()
        }
      }
      if (Wz.length) throw new Error("Unterminated #if");
      return Fz.join("\n")
    }

    function Yt(zz, tz, sz) {
      return zz.replace(tz, (zz => {
        const tz = sz.get(zz);
        return "string" === typeof tz ? tz : zz
      }))
    }

    function xt(zz, tz) {
      var sz;
      const Fz = null !== (sz = zz.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== sz ? sz : [];
      let Wz = 0;
      const Xz = () => Fz[Wz],
        Oz = () => Fz[Wz++],
        oz = zz => {
          const sz = /^\d/.test(zz) ? zz : tz.get(zz);
          return "string" === typeof sz ? parseInt(sz) : Number.NaN
        },
        vz = () => {
          const zz = Oz();
          if ("!" === zz) return !vz();
          if ("(" === zz) {
            const zz = Kz();
            return Oz(), zz
          }
          if ("defined" === zz) {
            const zz = "(" === Xz();
            zz && Oz();
            const sz = Oz();
            return zz && Oz(), tz.has(sz)
          }
          const sz = Xz();
          if ("==" === sz || "!=" === sz || ">" === sz || "<" === sz || ">=" === sz || "<=" === sz) {
            Oz();
            const tz = oz(zz),
              Fz = oz(Oz());
            if (Number.isNaN(tz) || Number.isNaN(Fz)) return !1;
            switch (sz) {
              case "==":
                return tz === Fz;
              case "!=":
                return tz !== Fz;
              case ">":
                return tz > Fz;
              case "<":
                return tz < Fz;
              case ">=":
                return tz >= Fz;
              default:
                return tz <= Fz
            }
          }
          return tz.has(zz)
        },
        Uz = () => {
          let zz = vz();
          for (;
            "&&" === Xz();) {
            Oz();
            const tz = vz();
            zz = zz && tz
          }
          return zz
        },
        Kz = () => {
          let zz = Uz();
          for (;
            "||" === Xz();) {
            Oz();
            const tz = Uz();
            zz = zz || tz
          }
          return zz
        },
        uz = Kz();
      if (Wz !== Fz.length) throw new Error(`Cannot evaluate #if ${zz}`);
      return uz
    }
    var mt = sz(36576),
      Jt = sz(36903),
      It = sz(36908),
      Ct = sz(39971),
      et = sz(38167);
    const Zt = 32,
      Gt = [10, 3, 10],
      Tt = [21, 7, 21],
      ct = Tt[0] * Tt[1] * Tt[2],
      jt = 0,
      At = 1,
      yt = 2,
      Mt = 3,
      dt = 64,
      ht = 512,
      Qt = 4 * ct,
      kt = 1536,
      it = Qt + ct * kt,
      Lt = 1073741824,
      lt = it + 1;

    function nt(zz, tz) {
      const sz = zz % tz;
      return sz < 0 ? sz + tz : sz
    }

    function qt(zz, tz, sz) {
      return Fz = nt(zz, Tt[0]), Wz = nt(tz, Tt[1]), Xz = nt(sz, Tt[2]), Fz + Tt[0] * (Wz + Tt[1] * Xz);
      var Fz, Wz, Xz
    }

    function St(zz, tz, sz) {
      return zz + 8 * (tz + 8 * sz)
    }

    function Vt(zz, tz, sz) {
      return zz + 4 * (tz + 4 * sz)
    }
    const Rt = 65535,
      pt = 0,
      ft = 1,
      Et = 2,
      zs = 3;

    function ts(zz) {
      return Math.ceil(zz * zz / 32)
    }
    const ss = 8192,
      Fs = 1 << 18,
      Ws = 65536,
      Xs = 294912,
      Os = 128,
      os = 4096,
      vs = 16,
      Us = 16385,
      Ks = 81921,
      us = 147457,
      Ns = 4194304;
    const bs = [0, 0, 0],
      ws = [0, 0, 0];

    function Ds(zz, tz, sz, Fz) {
      ! function(zz, tz, sz) {
        const [Fz, Wz, Xz] = [zz[0], zz[1], zz[2]];
        let Oz, oz, vz;
        Math.abs(Wz) < .99 ? (Oz = Xz, oz = 0, vz = -Fz) : (Oz = -Wz, oz = Fz, vz = 0);
        const Uz = Math.hypot(Oz, oz, vz);
        tz[0] = Oz / Uz, tz[1] = oz / Uz, tz[2] = vz / Uz, sz[0] = Wz * tz[2] - Xz * tz[1], sz[1] = Xz * tz[0] - Fz * tz[2], sz[2] = Fz * tz[1] - Wz * tz[0]
      }(Fz, bs, ws);
      const Wz = 1 / 32;
      for (const [Xz, Oz] of [
          [0, bs],
          [4, ws]
        ]) {
        for (let sz = 0; sz < 3; sz++) zz[tz + Xz + sz] = Oz[sz] * Wz;
        zz[tz + Xz + 3] = -(Oz[0] * sz[0] + Oz[1] * sz[1] + Oz[2] * sz[2]) * Wz
      }
    }
    class gs {
      constructor() {
        this.words = new Uint32Array(us), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      ib(zz, tz) {
        this.parts = 0, this.refs = 0, this.view = zz, this.viewAt = tz;
        const sz = zz[tz + 1] * zz[tz + 6] - zz[tz + 2] * zz[tz + 5],
          Fz = zz[tz + 2] * zz[tz + 4] - zz[tz] * zz[tz + 6],
          Wz = zz[tz] * zz[tz + 5] - zz[tz + 1] * zz[tz + 4],
          Xz = Math.hypot(sz, Fz, Wz) || 1;
        this.light[0] = sz / Xz, this.light[1] = Fz / Xz, this.light[2] = Wz / Xz
      }
      add(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= os || ! function(zz, tz, sz) {
            const Fz = zz[tz],
              Wz = zz[tz + 1],
              Xz = zz[tz + 2],
              Oz = zz[tz + 3],
              oz = zz[tz + 4],
              vz = zz[tz + 5],
              Uz = zz[tz + 6],
              Kz = zz[tz + 7],
              uz = zz[tz + 8],
              Nz = zz[tz + 9],
              bz = zz[tz + 10],
              wz = zz[tz + 11],
              Dz = zz[tz + 12],
              gz = zz[tz + 13],
              Hz = zz[tz + 14],
              Bz = zz[tz + 15],
              Pz = Fz * vz - Wz * oz,
              rz = Fz * Uz - Xz * oz,
              Yz = Fz * Kz - Oz * oz,
              xz = Wz * Uz - Xz * vz,
              mz = Wz * Kz - Oz * vz,
              Jz = Xz * Kz - Oz * Uz,
              Iz = uz * gz - Nz * Dz,
              Cz = uz * Hz - bz * Dz,
              ez = uz * Bz - wz * Dz,
              Zz = Nz * Hz - bz * gz,
              Gz = Nz * Bz - wz * gz,
              Tz = bz * Bz - wz * Hz,
              cz = Pz * Tz - rz * Gz + Yz * Zz + xz * ez - mz * Cz + Jz * Iz;
            if (!(Math.abs(cz) > 1e-12)) return !1;
            const jz = 1 / cz;
            return sz[0] = (vz * Tz - Uz * Gz + Kz * Zz) * jz, sz[1] = (Xz * Gz - Wz * Tz - Oz * Zz) * jz, sz[2] = (gz * Jz - Hz * mz + Bz * xz) * jz, sz[3] = (bz * mz - Nz * Jz - wz * xz) * jz, sz[4] = (Uz * ez - oz * Tz - Kz * Cz) * jz, sz[5] = (Fz * Tz - Xz * ez + Oz * Cz) * jz, sz[6] = (Hz * Yz - Dz * Jz - Bz * rz) * jz, sz[7] = (uz * Jz - bz * Yz + wz * rz) * jz, sz[8] = (oz * Gz - vz * ez + Kz * Iz) * jz, sz[9] = (Wz * ez - Fz * Gz - Oz * Iz) * jz, sz[10] = (Dz * mz - gz * Yz + Bz * Pz) * jz, sz[11] = (Nz * Yz - uz * mz - wz * Pz) * jz, sz[12] = (vz * Cz - oz * Zz - Uz * Iz) * jz, sz[13] = (Fz * Zz - Wz * Cz + Xz * Iz) * jz, sz[14] = (gz * rz - Dz * xz - Hz * Pz) * jz, sz[15] = (uz * xz - Nz * rz + bz * Pz) * jz, !0
          }(tz, sz, this.inverse)) return;
        const {
          view: Fz,
          viewAt: Wz
        } = this, Xz = sz;
        let Oz = 1 / 0,
          oz = 1 / 0,
          vz = -1 / 0,
          Uz = -1 / 0,
          Kz = -1 / 0;
        const [uz, Nz, bz] = this.light;
        for (let Yz = 0; Yz < 8; Yz++) {
          const sz = 1 & Yz ? zz.hi[0] : zz.lo[0],
            wz = 2 & Yz ? zz.hi[1] : zz.lo[1],
            Dz = 4 & Yz ? zz.hi[2] : zz.lo[2],
            gz = sz * tz[Xz] + wz * tz[Xz + 4] + Dz * tz[Xz + 8] + tz[Xz + 12],
            Hz = sz * tz[Xz + 1] + wz * tz[Xz + 5] + Dz * tz[Xz + 9] + tz[Xz + 13],
            Bz = sz * tz[Xz + 2] + wz * tz[Xz + 6] + Dz * tz[Xz + 10] + tz[Xz + 14],
            Pz = Fz[Wz] * gz + Fz[Wz + 1] * Hz + Fz[Wz + 2] * Bz + Fz[Wz + 3],
            rz = Fz[Wz + 4] * gz + Fz[Wz + 5] * Hz + Fz[Wz + 6] * Bz + Fz[Wz + 7];
          Oz = Math.min(Oz, Pz), oz = Math.min(oz, rz), vz = Math.max(vz, Pz), Uz = Math.max(Uz, rz), Kz = Math.max(Kz, uz * gz + Nz * Hz + bz * Bz)
        }
        if (vz < -1 || Uz < -1 || Oz >= 1 || oz >= 1) return;
        const wz = this.parts++,
          Dz = this.rects;
        Dz[4 * wz] = Hs(Oz), Dz[4 * wz + 1] = Hs(oz), Dz[4 * wz + 2] = Hs(vz), Dz[4 * wz + 3] = Hs(Uz);
        const gz = this.inverse,
          {
            cell: Hz,
            dims: Bz,
            lo: Pz
          } = zz,
          rz = Ks + wz * vs;
        for (let Yz = 0; Yz < 3; Yz++) this.floats[rz + 4 * Yz] = gz[Yz] / Hz, this.floats[rz + 4 * Yz + 1] = gz[4 + Yz] / Hz, this.floats[rz + 4 * Yz + 2] = gz[8 + Yz] / Hz, this.floats[rz + 4 * Yz + 3] = (gz[12 + Yz] - Pz[Yz]) / Hz;
        this.words[rz + 12] = zz.at, this.floats[rz + 13] = Kz + .001 * (1 + Math.abs(Kz)), this.words[rz + 14] = Bz[0] | Bz[1] << 8 | Bz[2] << 16
      }
      finish() {
        const zz = Os,
          {
            counts: tz,
            rects: sz,
            words: Fz
          } = this;
        tz.fill(0);
        let Wz = 0,
          Xz = 0;
        for (; Xz < this.parts; Xz++) {
          const Fz = 4 * Xz,
            Oz = (sz[Fz + 2] - sz[Fz] + 1) * (sz[Fz + 3] - sz[Fz + 1] + 1);
          if (Wz + Oz > 65536) break;
          Wz += Oz;
          for (let Wz = sz[Fz + 1]; Wz <= sz[Fz + 3]; Wz++)
            for (let Xz = sz[Fz]; Xz <= sz[Fz + 2]; Xz++) tz[Wz * zz + Xz]++
        }
        let Oz = 0;
        for (let vz = 0; vz < 16384; vz++) Fz[vz] = Oz, Oz += tz[vz], tz[vz] = Fz[vz];
        Fz[16384] = Oz;
        for (let vz = 0; vz < Xz; vz++) {
          const Wz = 4 * vz;
          for (let Xz = sz[Wz + 1]; Xz <= sz[Wz + 3]; Xz++)
            for (let Oz = sz[Wz]; Oz <= sz[Wz + 2]; Oz++) Fz[Us + tz[Xz * zz + Oz]++] = vz
        }
        const oz = this.floats;
        for (let vz = 0; vz < 16384; vz++) {
          const zz = Us + Fz[vz],
            tz = zz + Math.min(Fz[vz + 1] - Fz[vz], 64);
          for (let sz = zz + 1; sz < tz; sz++) {
            const tz = Fz[sz],
              Wz = oz[81934 + tz * vs];
            let Xz = sz - 1;
            for (; Xz >= zz && oz[81934 + Fz[Xz] * vs] < Wz; Xz--) Fz[Xz + 1] = Fz[Xz];
            Fz[Xz + 1] = tz
          }
        }
        this.refs = Wz
      }
    }

    function Hs(zz) {
      return Math.min(127, Math.max(0, Math.floor((.5 * zz + .5) * Os)))
    }

    function Bs(zz, tz, sz, Fz, Wz) {
      for (let Xz = 0; Xz < 4; Xz++)
        for (let Oz = 0; Oz < 4; Oz++) Wz[4 * Xz + Oz] = zz[tz + 4 * Xz] * sz[Fz + Oz] + zz[tz + 4 * Xz + 1] * sz[Fz + 4 + Oz] + zz[tz + 4 * Xz + 2] * sz[Fz + 8 + Oz] + zz[tz + 4 * Xz + 3] * sz[Fz + 12 + Oz]
    }

    function Ps(zz, tz, sz, Fz, Wz) {
      const Xz = zz[0] - tz,
        Oz = zz[1] - sz,
        oz = zz[2] - Fz,
        vz = zz[3] - tz,
        Uz = zz[4] - sz,
        Kz = zz[5] - Fz,
        uz = zz[6] - tz,
        Nz = zz[7] - sz,
        bz = zz[8] - Fz;
      if (Math.min(Xz, vz, uz) > Wz || Math.max(Xz, vz, uz) < -Wz) return !1;
      if (Math.min(Oz, Uz, Nz) > Wz || Math.max(Oz, Uz, Nz) < -Wz) return !1;
      if (Math.min(oz, Kz, bz) > Wz || Math.max(oz, Kz, bz) < -Wz) return !1;
      const wz = vz - Xz,
        Dz = Uz - Oz,
        gz = Kz - oz,
        Hz = uz - vz,
        Bz = Nz - Uz,
        Pz = bz - Kz,
        rz = Dz * Pz - gz * Bz,
        Yz = gz * Hz - wz * Pz,
        xz = wz * Bz - Dz * Hz;
      if (Math.abs(rz * Xz + Yz * Oz + xz * oz) > Wz * (Math.abs(rz) + Math.abs(Yz) + Math.abs(xz))) return !1;
      const mz = [wz, Dz, gz, Hz, Bz, Pz, Xz - uz, Oz - Nz, oz - bz];
      for (let Jz = 0; Jz < 3; Jz++) {
        const zz = mz[3 * Jz],
          tz = mz[3 * Jz + 1],
          sz = mz[3 * Jz + 2];
        for (let Fz = 0; Fz < 3; Fz++) {
          const wz = 0 === Fz ? 0 : 1 === Fz ? sz : -tz,
            Dz = 0 === Fz ? -sz : 1 === Fz ? 0 : zz,
            gz = 0 === Fz ? tz : 1 === Fz ? -zz : 0,
            Hz = wz * Xz + Dz * Oz + gz * oz,
            Bz = wz * vz + Dz * Uz + gz * Kz,
            Pz = wz * uz + Dz * Nz + gz * bz,
            rz = Wz * (Math.abs(wz) + Math.abs(Dz) + Math.abs(gz));
          if (Math.min(Hz, Bz, Pz) > rz || Math.max(Hz, Bz, Pz) < -rz) return !1
        }
      }
      return !0
    }
    const rs = new Float32Array(1);
    new Uint32Array(rs.buffer);
    var Ys = sz(38169);

    function xs(zz) {
      const [tz, sz, Fz] = Ys.u;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${zz.group}) @binding(${zz.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${tz-1}, ${sz-1}, ${Fz-1});\n}\n`
    }

    function ms(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Wz, Xz, Oz] = Tt, [oz, vz, Uz] = Gt, Kz = Math.log2(Zt), uz = Fz ? "var<private> bloxdSpCrossed: bool;\n" : "", Nz = Fz ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${zz.group}) @binding(${zz.RN}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${zz.group}) @binding(${zz.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${sz?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${uz}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${ft}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${Et}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${sz?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${zs}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Wz}, ${Xz}, ${Oz});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Wz} * (s.y + ${Xz} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${oz}, ${vz}, ${Uz}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Kz}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Mt}u) {\n\t\treturn named && state == ${yt}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${Qt}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${it}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${tz?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${tz?`\t\tif (exits && step > 0 && step % ${es} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Kz}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${jt}u || kind == ${At}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${yt}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${Qt}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Nz}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Is = {
      group: 0,
      uniform: 0,
      RN: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function Cs() {
      const zz = Is;
      return `${xs(zz)}${ms(zz,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Ys.d}>,\n}\n@group(${zz.group}) @binding(${zz.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${zz.group}) @binding(${zz.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Ys.o})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Ys.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Ys.g}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const es = 2;
    const Zs = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function Gs(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Fz = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${tz.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Wz = "trace" === sz || "lit" === sz,
        Xz = "maskEdge" === sz ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Oz = Wz ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${tz.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${tz.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===sz?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Xz};\n`;
      return `${Fz}${zz.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Wz?function(){const[zz,tz,sz]=Ys.u;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${zz}.0, ${tz}.0, ${sz}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Oz}}\n`:""}${zz.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${tz.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${tz.renderOffset});\n}\n`:""}`
    }
    const Ts = "bloxdSpOwnTexture";

    function cs(zz) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${zz.texture}) - 1u)))`
    }
    const As = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${vt.d.map((zz=>{let[tz,sz]=zz;return`\tbloxdSpOut.${tz} = (bloxdSpWord & ${sz}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function ys(zz) {
      return `bloxdSpFlags(${zz})`
    }
    const Ms = `${Ct.m}.eyePosition`;

    function ds(zz, tz, sz, Fz, Wz) {
      const Xz = zz.indexOf(tz);
      if (Xz < 0 || zz.indexOf(tz, Xz + 1) >= 0) throw new Error(`Lite's ${Wz} program changed at the shader pack ${Fz} hook: ${Xz<0?"no":"more than one"} anchor (lite/${Wz}ShaderPack.ts)`);
      return zz.slice(0, Xz) + sz + zz.slice(Xz + tz.length)
    }

    function hs(zz) {
      return zz.sunShadow || zz.airShadow
    }

    function Qs(zz, tz) {
      return tz && hs(zz)
    }
    const ks = {
      group: Ct.i,
      ...Ct.v
    };

    function is(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!hs(zz)) return "";
      if (tz) {
        const tz = ks,
          Wz = "trace" === sz || "lit" === sz;
        let Xz = "";
        zz.sunShadow && (Xz = Wz ? `${ms(tz,!0,"lit"===sz)}${Fz=tz,`@group(${Fz.group}) @binding(${Fz.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Fz.group}) @binding(${Fz.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(zz, tz, sz) {
          const Fz = `@group(${zz}) @binding(${tz}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return sz ? `${Fz}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Zs}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((zz=>`\t{\n\t\tlet o = vec2i(${zz});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Fz
        }(tz.group, Ct.x, "maskEdge" === sz));
        const Oz = {
          shadowDirection: `${Ct.m}.shadowDirection`,
          renderOffset: `${Ct.m}.renderOffset`,
          eyePosition: `${Ct.m}.eyePosition`
        };
        return `${xs(tz)}${Xz}${function(zz){const[tz,sz,Fz]=Ys.u;return`@group(${zz.group}) @binding(${zz.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${zz.group}) @binding(${zz.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${tz}.0, ${sz}.0, ${Fz}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(tz)}${Gs(zz,Oz,sz)}`
      }
      var Fz;
      return `${zz.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${zz.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Ls(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!tz) return "";
      const Xz = (Oz = "fragmentInputs.vPositionW", oz = zz.sunShadow ? {
        normal: sz,
        flags: Fz
      } : null, `\n\tbloxdSpShadowPosition = ${Oz};\n${oz?`\tbloxdSpShadowNormal = normalize(${oz.normal});\n\tbloxdSpShadowEmissive = (${oz.flags} & ${vt.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${oz.flags} & ${vt.g}u) != 0u;\n`:""}`);
      var Oz, oz;
      return zz.sunShadow && ("mask" === Wz || "maskEdge" === Wz) ? `${Xz}${vz="fragmentInputs.position",Uz="maskEdge"===Wz,`\n\tbloxdSpShadowPixel = vec2i(${vz}.xy);\n${Uz?`\tbloxdSpShadowZ = ${vz}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${vz}.z), dpdy(${vz}.z));\n`:""}`}` : Xz;
      var vz, Uz
    }
    const ls = "bloxdSpTextureRotation",
      ns = "bloxdSpTextureLayers",
      as = `@group(${Ct.i}) @binding(${Ct.B}) var<storage, read> ${ns}: array<u32>;\n`;

    function qs(zz) {
      return `\tvertexOutputs.vPackTexture = ${ns}[min(u32(${zz}), arrayLength(&${ns}) - 1u)];\n`
    }

    function Ss(zz) {
      return void 0 !== zz.uv
    }

    function Vs(zz) {
      if (!zz) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Ss(zz)) return function(zz) {
        const {
          texture: tz,
          cells: sz,
          layers: Fz
        } = zz, Wz = `textureDimensions(${tz}, bloxdSpLevel)`, Xz = sz ? `max(vec2u(vec2f(${Wz}) / ${sz}), vec2u(1u))` : Wz, Oz = sz ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Xz};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${sz}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${sz}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${tz}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Wz} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Xz};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${tz}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let oz;
        if (sz)
          if (1 === Fz.length) oz = `\treturn bloxdSpOwnTexel(${Fz[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const zz = Fz.length - 1;
            oz = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Fz[zz]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let tz = zz - 1; tz >= 0; tz--) oz += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Fz[tz]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            oz += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else oz = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${zz.id?`var<private> ${Ts}: u32;\n`:""}${Oz}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${cs(zz)};\n\treturn ${Xz};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${zz.id?Ts:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${cs(zz)};\n${oz}}\n`
      }(zz);
      const tz = zz,
        sz = zz => {
          const sz = zz > 0 ? `bloxdSpLayer - ${tz.layers*zz}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${zz}, ${tz.sampler}, bloxdSpTurned, ${sz}, round(bloxdSpMipLevel));`
        };
      let Fz = "";
      for (let Xz = 0; Xz < tz.count - 1; Xz++) Fz += `\tif (bloxdSpLayer < ${tz.layers*(Xz+1)}u) {\n\t\t${sz(Xz)}\n\t}\n`;
      const Wz = tz.frame ? `${tz.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${ls}: u32;\n${as}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${ls} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${ls} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${ls} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Wz}${Fz}\t${sz(tz.count-1)}\n}\n`
    }

    function Rs(zz, tz, sz) {
      return !!zz.surface && "bloxdDefaultSurface" !== zz.surface && function(zz, tz) {
        return "liquid" === tz || !zz
      }(tz, sz)
    }

    function ps(zz, tz) {
      return zz.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${tz.vertexLocalPosition}, ${ys(tz.vertexFlags)});\n\t\tlet bloxdSpVertex = ${zz.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function fs(zz, tz, sz, Fz, Wz) {
      if (!zz.surface) return "";
      const Xz = (zz, tz) => `\n\tlet bloxdSpTexelUV = ${zz};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${tz}) - 1u));`;
      let Oz = "",
        oz = "0u, 0u, vec2f(0.0), 0.0";
      const vz = Fz && Ss(Fz) ? Fz : null,
        Uz = Fz && !Ss(Fz) ? Fz : null;
      if (vz) {
        Oz = `${vz.id?`\n\tlet bloxdSpTexture = ${vz.id};\n\t${Ts} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${vz.uv};${Xz(function(zz,tz){var sz;return`${null!==(sz=zz.levelUv)&&void 0!==sz?sz:zz.cells?`${tz} / ${zz.cells}`:tz} * vec2f(textureDimensions(${zz.texture}))`}(vz,"bloxdSpUv"),vz.texture)}`, oz = (vz.id ? `${Ts}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Uz && (Oz = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${ls} = bloxdSpTexture >> 16u;${Xz(`fragmentInputs.vMainUV1 * ${(0,mt.ob)(Uz.width)}`,"textureAtlas0")}`, oz = `bloxdSpTexture & 0xffffu, ${ls}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Kz = Wz.overlayColour,
        uz = Kz ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Nz = "bloxdDefaultSurface" !== zz.surface || Kz ? `\n\tbaseColor = vec4f(${uz}, baseColor.a);` : "",
        bz = Rs(zz, tz, sz) ? `\n\t${Wz.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Oz}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Wz.alpha}, ${Wz.enchantTier}, ${Wz.enchantColour}, ${Wz.enchantSpeed}, ${null!==Kz&&void 0!==Kz?Kz:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Wz.normal}, ${Wz.localPosition}, ${ys(Wz.flags)}, ${oz});\n\tlet bloxdSpSurface = ${zz.surface}(bloxdSpSurfaceIn);${Nz}${bz}\n`
    }
    const Es = "bloxdSpLightIn";

    function zF(zz, tz, sz, Fz) {
      if (!zz.light) return "";
      const Wz = tz ? `${mt.n}.rgb, ${mt.n}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${mt.k}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Xz,
          diffuse: Oz,
          emissive: oz,
          ambient: vz,
          fogColour: Uz,
          fogAlpha: Kz,
          normal: uz
        } = Fz;
      return `\tvar ${Es} = BloxdLightIn(vec3f(0.0), ${sz?Xz:"0.0"}, ${Oz}, ${oz}, ${vz}, ${Wz}, ${Uz}, ${Kz}, fragmentInputs.vPositionW, ${uz}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Es}.litColour = bloxdLitColour(bloxdSpSurface, ${Es});\n`
    }

    function tF(zz) {
      return zz.light ? `\n\t{\n\t\tlet bloxdSpLight = ${zz.light}(bloxdSpSurface, ${Es});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const sF = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      FF = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      WF = "\treturn color;\n}",
      XF = {
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
    const OF = Object.freeze({});

    function oF(zz) {
      var tz;
      return !(null === (tz = (0, et.d)(zz)) || void 0 === tz || !tz.sceneDepth)
    }

    function vF(zz) {
      const tz = (0, et.d)(zz);
      return !!tz && Rs(tz.hooks, tz.strict, tz.program)
    }

    function UF(zz, tz, sz, Fz) {
      return ds(zz, tz, sz, Fz, "terrain")
    }

    function KF(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Xz = function(zz) {
          return (0, et.b)(zz.packVariant, zz.liquid ? "liquid" : "terrain")
        }(zz),
        {
          hooks: Oz
        } = Xz,
        oz = Qs(Xz, Fz),
        vz = "edge" === Wz ? "maskEdge" : "plain" === Wz ? "mask" : "trace",
        Uz = ps(Oz, XF);
      Uz && (tz = UF(tz, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Uz}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Kz = "atlas" === zz.texture ? {
          count: zz.atlasCount,
          layers: zz.atlasLayers,
          width: zz.fV,
          sampler: "atlasSampler",
          frame: zz.animated ? sz : null
        } : null,
        uz = `${Xz.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Ls(Xz,oz,XF.normal,XF.flags,vz)}${fs(Oz,Xz.strict,Xz.program,Kz,XF)}`;
      uz && (tz = UF(tz, sF, `${sF.slice(0,-1)}${uz}`, "surface"));
      const Nz = tF(Oz);
      return Nz && (tz = UF(tz, FF, `${zF(Oz,zz.lighting,zz.dirLightCount>0,XF)}${FF}`, "light input"), tz = UF(tz, WF, `${Nz.slice(1)}${WF}`, "light")), `${(0,Ct.F)()}${Xz.sceneDepth?`@group(${Ct.i}) @binding(${Ct.s}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Ms};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${is(Xz,oz,vz)}${Vs(Kz)}${As}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Xz.code}${tz}`
    }
    const uF = xz.e.WGSL;

    function NF(zz) {
      return void 0 !== zz.packVariant
    }
    const bF = {
        ZFz: 0,
        GFz: 4,
        TFz: 8,
        cFz: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      wF = bF.aoLevels + 4,
      DF = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      gF = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      HF = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      BF = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      PF = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      rF = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      YF = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      xF = 0,
      mF = 3,
      JF = 4,
      IF = 5,
      CF = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${Jt.b}, ${Jt.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${Jt.b}, ${Jt.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      eF = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((zz=>It.b>>zz&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const ZF = {
      wN: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: zz => `animDataPerTex[${zz}]`
    };

    function GF(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZF;
      return `\n\tlet atlasIdxIn = ${zz};\n\tlet animTick = ${sz.wN};\n\tlet animTickStride = ${sz.stride};\n\tlet numAnimTextures = ${sz.count};\n\t${(0,mz.g)(xz.e.WGSL,sz.perTexture)}\n\t${tz}animLayer;\n`
    }

    function TF(zz) {
      const tz = (tz, sz) => {
        const Fz = tz > 0 ? `fragmentInputs.texAtlasIndex - ${zz.atlasLayers.toFixed(1)} * ${tz.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${sz?"textureSampleLevel":"textureSample"}(textureAtlas${tz}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Fz}))${sz?", atlasLod":""})`
      };
      if (1 === zz.atlasCount) return `baseColor = ${tz(0,!1)};`;
      let sz = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,mt.ob)(zz.fV)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Fz = 0; Fz < zz.atlasCount; Fz++) {
        const Wz = zz.atlasLayers * (Fz + 1) - .5;
        sz += `${Fz>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,mt.ob)(Wz)}) {\n\t\tbaseColor = ${tz(Fz,!0)};\n\t}`
      }
      return sz
    }

    function cF(zz) {
      return `terrain-${zz.texture}${"atlas"===zz.texture?zz.atlasCount:""}${zz.animated?"-anim":""}${zz.alphaTest?"-test":""}${zz.lighting?"-lit":""}-dir${zz.dirLightCount}${zz.packed?"-packed":""}${NF(zz)?`-sp${zz.packVariant}`:""}${zz.liquid?"-liquid":""}${zz.resting?"-rest":""}`
    }

    function jF(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Fz = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const sz = "none" !== zz.texture,
          Fz = "atlas" === zz.texture,
          Wz = zz.dirLightCount > 0,
          Xz = NF(zz);
        if (zz.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${zz.dirLightCount}`);
        let Oz = 1,
          oz = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Fz) {
          zz.animated && (oz += `@group(2) @binding(${Oz++}) var<storage, read> animDataPerTex: array<f32>;\n`), oz += `@group(2) @binding(${Oz++}) var atlasSampler: sampler;\n`;
          for (let tz = 0; tz < zz.atlasCount; tz++) oz += `@group(2) @binding(${Oz++}) var textureAtlas${tz}: texture_2d_array<f32>;\n`
        } else "single" === zz.texture && (oz += `@group(2) @binding(${Oz++}) var diffuseSamplerSampler: sampler;\n`, oz += `@group(2) @binding(${Oz++}) var diffuseSampler: texture_2d<f32>;\n`);
        const vz = function(zz) {
            const tz = YF,
              sz = "none" !== zz.texture,
              Fz = "atlas" === zz.texture,
              Wz = NF(zz);
            return zz.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${sz?"uv: vec2f,":""}\n\t${Fz?"texAtlasIndices: f32,":""}\n\t${zz.lighting?"aPackedLightLevels: f32,":""}\n\t${Wz?"blockFlagWords: vec2u,":""}\n}\n${CF}\n${eF}\n${"single"===zz.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${sz?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===zz.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Fz?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${zz.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Wz?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${tz.position}) position: vec3f,\n\t@location(${tz.normal}) normal: vec4f,\n\t@location(${tz.color}) color: vec4f,\n\t${sz?`@location(${tz.uv}) uv: vec2f,`:""}\n\t${zz.lighting?`@location(${tz.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Wz?`@location(${tz.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(zz),
          Uz = `\n${BF}\n${gF}\n${HF}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${oz}\n${Vz}\n${vz.declarations}\nstruct Varyings {\n\t${"none"===tz?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${zz.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Wz?"@location(5) vTerrainLambert: f32,":""}\n\t${sz?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Fz?"@location(7) texAtlasIndex: f32,":""}\n\t${zz.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Xz?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Xz&&Fz?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${zz.resting?"":(0,mt.s)(uF)}\n${rF}\n\n@vertex\nfn mainVertex(${vz.parameter}) -> Varyings {\n\t${vz.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Xz?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${vt.c.placed}u;`:""}\n\t${Xz&&Fz?qs("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${zz.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${sz?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Fz?function(zz){return zz?GF("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(zz.animated):""}\n\t${"single"===zz.texture&&zz.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,mt.ab)(uF)}\n\t${(0,mt.F)(uF,zz.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${zz.resting?"":PF}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Fz?TF(zz):""}\n\t${"single"===zz.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${sz?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${zz.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Wz?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${Sz}));\n\t${NF(zz)?(0,mt.jb)(xz.e.WGSL):(0,mt.S)(uF)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Kz = new Set;
        zz.lighting && Kz.add("BLOXD_LIGHTING");
        Wz && Kz.add("BLOXD_TERRAIN_DIRECTIONAL");
        return rt(Uz, new Map([...Kz].map((zz => [zz, !0]))))
      }(zz, sz);
      if (!NF(zz)) return Fz;
      const Wz = KF(zz, Fz, GF, tz, sz);
      return "none" === sz ? Wz : `${Wz}${function(zz){const tz="none"!==zz.texture&&zz.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${zz.resting?"":PF}\n\t${zz.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${tz&&"atlas"===zz.texture?TF(zz):""}\n\t${tz&&"single"===zz.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${tz?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${vt.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(zz)}`
    }
    const AF = new Map([
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

    function yF(zz, tz) {
      const sz = new Map;
      let Fz = 0;
      const Wz = [],
        Xz = [],
        Oz = [];
      for (const Uz of tz) {
        var oz, vz;
        const tz = null !== (oz = Uz.type.trim().split(/\s+/).pop()) && void 0 !== oz ? oz : Uz.type,
          Kz = AF.get(tz);
        if (!Kz) throw new Error(`Lite: no uniform layout for ${Uz.name}: ${Uz.type}`);
        const uz = null !== (vz = Uz.arraySize) && void 0 !== vz ? vz : 0,
          Nz = uz ? 4 : Kz.align;
        Fz = Math.ceil(Fz / Nz) * Nz;
        const bz = uz ? 4 * Math.ceil(Kz.floats / 4) : Kz.floats;
        if (sz.set(Uz.name, {
            offset: Fz,
            floats: Kz.floats,
            arraySize: uz,
            stride: bz
          }), uz && Kz.floats <= 2) {
          const tz = `${zz}_${Oz.length}_strided`;
          Xz.push(`struct ${tz} {\n\t@size(16) el: ${Kz.wgsl},\n}`), Oz.push(Uz.name), Wz.push(`\t@align(16) ${Uz.name}: array<${tz}, ${uz}>,`)
        } else uz ? Wz.push(`\t@align(16) ${Uz.name}: array<${Kz.wgsl}, ${uz}>,`) : Wz.push(`\t${Uz.name}: ${Kz.wgsl},`);
        Fz += uz ? bz * uz : Kz.floats
      }
      return {
        slots: sz,
        floats: Math.max(4, 4 * Math.ceil(Fz / 4)),
        wgsl: `${Xz.join("\n")}\nstruct ${zz} {\n${Wz.join("\n")}\n}\n`,
        stridedArrays: Oz
      }
    }
    const MF = [{
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
      dF = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      hF = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function QF(zz, tz) {
      return `#if defined(${zz}) && ${zz}DIRECTUV == 0\nvarying v${tz}UV: vec2f;\n#endif`
    }

    function kF(zz, tz, sz) {
      return `#if defined(${zz}) && ${zz}DIRECTUV == 0\nif (uniforms.v${tz}Infos.x==0.)\n{vertexOutputs.v${tz}UV= (uniforms.${sz}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${tz}UV= (uniforms.${sz}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function iF(zz, tz, sz) {
      return `#ifdef ${zz}\n#if ${zz}DIRECTUV == 1\n#define v${tz}UV vMainUV1\n#elif ${zz}DIRECTUV == 2\n#define v${tz}UV vMainUV2\n#else\nvarying v${tz}UV: vec2f;\n#endif\nvar ${sz}SamplerSampler: sampler;\nvar ${sz}Sampler: texture_2d<f32>;\n#endif`
    }
    const LF = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      lF = 256,
      nF = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      aF = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      qF = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      SF = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      VF = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      RF = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      pF = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      fF = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${aF}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${QF("OPACITY","Opacity")}\n${QF("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${pF}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${qF}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${kF("OPACITY","Opacity","opacity")}\n${kF("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${SF}\n#define CUSTOM_VERTEX_MAIN_END\n${VF}\n}\n`;
    const EF = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${iF("OPACITY","Opacity","opacity")}\n${iF("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${pF}\n${RF}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((zz,tz)=>function(zz){const tz=`
    frame.lights[LITE_LIGHT$ {
        zz
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      zz
    }\
    nvar diffuse$ {
      zz
    }: vec4f = $ {
      tz
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      zz
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      tz
    }.vLightData, diffuse$ {
      zz
    }.rgb, $ {
      tz
    }.vLightSpecular.rgb, diffuse$ {
      zz
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(tz))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, zW = /^([gimus]+)!/, tW = new Set;

    function sW(zz) {
      tW.has(zz) || (tW.add(zz), console.warn(`Lite: no place for plugin code at ${zz} in the standard shader: it is left out`))
    }

    function FW(zz, tz) {
      let sz = zz;
      const Fz = new Map;
      for (const [Xz, Oz] of tz) {
        var Wz;
        Fz.set(Xz, `${null!==(Wz=Fz.get(Xz))&&void 0!==Wz?Wz:""}${Oz}\n`)
      }
      for (const [Xz, Oz] of Fz) {
        if (!Xz.startsWith("!")) {
          const zz = `#define ${Xz}`;
          if (!sz.includes(zz)) {
            sW(Xz);
            continue
          }
          sz = sz.replace(zz, (() => `\n${Oz}\n${zz}`));
          continue
        }
        let zz = Xz.substring(1),
          tz = "g";
        if (zz.startsWith("!")) tz = "", zz = zz.substring(1);
        else {
          const sz = zW.exec(zz);
          sz && (tz = sz[1], zz = zz.substring(tz.length + 1))
        }
        const Fz = new RegExp(zz, tz.includes("g") ? tz : `${tz}g`);
        let Wz = Fz.exec(sz);
        for (Wz || sW(Xz); Wz;) {
          const zz = Wz,
            tz = Oz.replace(/\$(\d+)/g, ((tz, sz) => Number(sz) < zz.length ? zz[Number(sz)] : ""));
          sz = sz.substring(0, zz.index) + tz + sz.substring(zz.index + zz[0].length), Fz.lastIndex = zz.index + tz.length, Wz = Fz.exec(sz)
        }
      }
      return sz
    }
    const WW = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      XW = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      OW = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function oW(zz) {
      const tz = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let sz = zz.replace(WW, ((zz, sz, Fz, Wz, Xz, Oz) => ("attribute" === sz ? tz.attributes.push({
        name: Xz,
        type: Oz
      }) : void 0 === sz ? tz.varyings.push({
        name: Xz,
        type: Oz,
        interpolation: UW(Oz, Fz, Wz)
      }) : tz.uniforms.push({
        name: Xz,
        type: vW(Oz)
      }), "")));
      return sz = sz.replace(XW, ((zz, sz) => (tz.samplers.add(sz), ""))), sz = sz.replace(OW, ((zz, sz, Fz) => (tz.textures.push({
        name: sz,
        type: Fz
      }), ""))), tz.body = sz, tz
    }

    function vW(zz) {
      const tz = zz.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        sz = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(tz);
      if (!sz) throw new Error(`Lite: unsupported uniform type ${zz}`);
      return sz
    }

    function UW(zz, tz, sz) {
      return void 0 === tz && void 0 === sz ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(zz.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === tz ? "@interpolate(flat) " : `@interpolate(${null!==tz&&void 0!==tz?tz:"perspective"}, ${null!==sz&&void 0!==sz?sz:"center"}) `
    }

    function KW(zz) {
      return wW({
        defines: zz.defines,
        vertex: FW(fF, zz.vertexCode),
        fragment: FW(EF, zz.fragmentCode),
        members: [...MF, ...zz.defines.has("OPACITY") ? dF : [], ...zz.defines.has("EMISSIVE") ? hF : [], ...zz.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function uW(zz) {
      const tz = zz.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (tz === zz) throw new Error("Lite: fragment main has no return");
      return tz
    }
    const NW = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${aF}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${qF}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${SF}\n${VF}\n}\n`,
      bW = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${RF}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function wW(zz) {
      const tz = zz.defines,
        sz = oW(rt(zz.vertex, tz)),
        Fz = oW(rt(zz.fragment, tz)),
        Wz = new Map;
      for (const Pz of [...sz.varyings, ...Fz.varyings]) Wz.has(Pz.name) || Wz.set(Pz.name, Pz);
      const Xz = [...Wz.values()].map(((zz, tz) => `\t@location(${tz}) ${zz.interpolation}${zz.name}: ${zz.type},`)),
        Oz = [...zz.members];
      for (const Pz of [...sz.uniforms, ...Fz.uniforms]) Oz.some((zz => zz.name === Pz.name)) || Oz.push(Pz);
      const oz = yF(zz.structName, Oz),
        vz = [],
        Uz = [];
      let Kz = 1;
      const uz = new Set;
      for (const Pz of [...sz.textures, ...Fz.textures]) {
        if (uz.has(Pz.name)) continue;
        uz.add(Pz.name);
        const zz = `${Pz.name}Sampler`,
          tz = Kz++,
          sz = Kz++,
          Fz = Pz.type.startsWith("texture_2d_array") ? "2d-array" : Pz.type.startsWith("texture_cube") ? "cube" : "2d";
        vz.push({
          name: Pz.name,
          binding: tz,
          samplerBinding: sz,
          dimension: Fz
        }), Uz.push(`@group(2) @binding(${tz}) var ${Pz.name}: ${Pz.type};`), Uz.push(`@group(2) @binding(${sz}) var ${zz}: sampler;`)
      }
      for (const Pz of [...sz.samplers, ...Fz.samplers])
        if (!uz.has(Pz.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Pz} has no texture`);
      const Nz = [BF, nF, oz.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${zz.structName};`, ...Uz].join("\n"),
        bz = sz.attributes,
        wz = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...sz.attributes.map(((zz, tz) => `\t@location(${tz}) ${zz.name}: ${zz.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Dz = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Xz, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        gz = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Fz.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Xz, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", Vz, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${Sz}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        Hz = zz => {
          for (const tz of oz.stridedArrays) zz = zz.replace(new RegExp(`\\b${tz}\\s*\\[(.*?)\\]`, "g"), `${tz}[$1].el`);
          return zz
        };
      return {
        vertex: `${Nz}\n${wz}\n${Dz}\n${Hz(sz.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Nz}\n${gz}\n${uW((Bz=Hz(Fz.body),Bz.includes("fragmentInputs.position")?Bz.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Bz))}`,
        attributes: bz,
        material: oz,
        textures: vz
      };
      var Bz
    }
    const DW = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      gW = zz => ({
        name: zz,
        type: "vec3"
      }),
      HW = zz => ({
        name: zz,
        type: "float"
      }),
      BW = yF("EarthSkyUniforms", [gW("viewFrom"), HW("exposureScale"), gW("zenithOffset"), HW("fogOn"), gW("up"), HW("ditherOn"), gW("sun"), HW("turbidity"), gW("tint"), HW("rayleigh"), gW("sunDir"), HW("mieStrength"), gW("inScatterR"), HW("mieFocus"), gW("inScatterM"), HW("sunE"), gW("extinctionBeta"), HW("sunsetMix"), HW("mieScale"), HW("mieBase"), HW("mieSlope"), HW("sunDiscE"), HW("exposure")]),
      PW = `${BF}\n${nF}\n${BW.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      rW = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${DW.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      YW = `\n${Vz}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(gt).map((zz=>{let[tz,sz]=zz;return`const TONE_${tz}: f32 = ${sz};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${Ht};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${Sz}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var xW = sz(36473);
    const mW = new xW.XD,
      JW = new xW.XD,
      IW = new xW.Quaternion,
      CW = new Float64Array(3),
      eW = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      ZW = new Float64Array(16);

    function GW(zz, tz, sz) {
      const Fz = sz.worldMatrix;
      var Wz;
      zz.updateFloat3("viewFrom", Fz[12], Fz[13], Fz[14]), zz.updateFloatsFrom("zenithOffset", tz.cameraOffset, 0, 3), zz.updateFloatsFrom("up", tz.up, 0, 3), tz.luminance > 0 && (zz.updateFloat("exposure", tz.luminance), zz.updateFloat("exposureScale", (Wz = tz.luminance, Math.log2(2 / Math.pow(Wz, 4))))), zz.updateFloat("turbidity", tz.turbidity), zz.updateFloat("rayleigh", tz.rayleigh), zz.updateFloat("mieStrength", tz.mieCoefficient), zz.updateFloat("mieFocus", tz.mieDirectionalG), zz.updateFloatsFrom("tint", tz.tint, 0, 3), zz.updateFloat("fogOn", tz.fog && sz.fogEnabled && 0 !== sz.fogMode ? 1 : 0), zz.updateFloat("ditherOn", tz.dithering ? 1 : 0);
      const Xz = tz.sunPosition;
      if (mW.set(Xz[0], Xz[1], Xz[2]), !tz.useSunPosition) {
        const zz = Math.PI * (tz.inclination - .5),
          sz = 2 * Math.PI * (tz.azimuth - .5);
        mW.set(tz.distance * Math.cos(sz) * Math.cos(zz), tz.distance * Math.sin(-zz), tz.distance * Math.sin(sz) * Math.cos(zz)), xW.Quaternion.FromUnitVectorsToRef(xW.XD.UpReadOnly, JW.set(tz.up[0], tz.up[1], tz.up[2]), IW), mW.rotateByQuaternionToRef(IW, mW)
      }
      zz.updateVector3("sun", mW), CW[0] = mW.x, CW[1] = mW.y, CW[2] = mW.z;
      const Oz = Dt(tz, CW, eW);
      zz.updateFloatsFrom("sunDir", Oz.sunDir, 0, 3), zz.updateFloat("sunE", Oz.sunE), zz.updateFloatsFrom("inScatterR", Oz.inScatterR, 0, 3), zz.updateFloatsFrom("inScatterM", Oz.inScatterM, 0, 3), zz.updateFloatsFrom("extinctionBeta", Oz.extinctionBeta, 0, 3), zz.updateFloat("sunsetMix", Oz.sunsetMix), zz.updateFloat("sunDiscE", Oz.sunDiscE), zz.updateFloat("mieScale", Oz.mieScale), zz.updateFloat("mieBase", Oz.mieBase), zz.updateFloat("mieSlope", Oz.mieSlope)
    }

    function TW(zz, tz) {
      const sz = ZW;
      sz[0] = tz.far, sz[5] = tz.far, sz[10] = tz.far, sz[15] = 1;
      const Fz = zz.infiniteDistance;
      for (let Wz = 0; Wz < 3; Wz++) sz[12 + Wz] = zz.position[Wz] + (Fz ? tz.worldMatrix[12 + Wz] : 0);
      return ZW
    }
    var cW = sz(38137);

    function jW(zz) {
      return Math.max(4, 4 * Math.ceil(zz / 4))
    }

    function AW(zz, tz, sz, Fz) {
      const Wz = zz.createBuffer({
        label: Fz,
        size: jW(tz.byteLength),
        usage: sz,
        mappedAtCreation: !0
      });
      return new Uint8Array(Wz.getMappedRange(), 0, tz.byteLength).set(new Uint8Array(tz.buffer, tz.byteOffset, tz.byteLength)), Wz.unmap(), Wz
    }

    function yW(zz, tz) {
      return Math.floor(Math.log2(Math.max(zz, tz))) + 1
    }

    function MW(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = zz.createTexture({
          label: Xz,
          size: {
            width: sz,
            height: Fz,
            depthOrArrayLayers: Wz
          },
          format: "rgba8unorm",
          mipLevelCount: yW(sz, Fz),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        oz = (tz, sz, Fz, Xz) => {
          zz.queue.writeTexture({
            texture: Oz,
            mipLevel: sz
          }, tz, {
            bytesPerRow: 4 * Fz,
            rowsPerImage: Xz
          }, {
            width: Fz,
            height: Xz,
            depthOrArrayLayers: Wz
          })
        };
      oz(tz, 0, sz, Fz);
      let vz = 1;
      for (const Uz of function*(zz, tz, sz, Fz) {
          let Wz = zz,
            Xz = tz,
            Oz = sz;
          for (; Xz > 1 || Oz > 1;) {
            const zz = Math.max(1, Xz >> 1),
              tz = Math.max(1, Oz >> 1),
              sz = new Uint8Array(zz * tz * Fz * 4),
              oz = 4 * Xz;
            let vz = 0;
            for (let Uz = 0; Uz < Fz; Uz++) {
              const Fz = Uz * oz * Oz;
              for (let Uz = 0; Uz < tz; Uz++) {
                const tz = Fz + Math.min(2 * Uz, Oz - 1) * oz,
                  Kz = Fz + Math.min(2 * Uz + 1, Oz - 1) * oz;
                for (let Fz = 0; Fz < zz; Fz++) {
                  const zz = 4 * Math.min(2 * Fz, Xz - 1),
                    Oz = 4 * Math.min(2 * Fz + 1, Xz - 1);
                  for (let Fz = 0; Fz < 4; Fz++) sz[vz++] = Wz[tz + zz + Fz] + Wz[tz + Oz + Fz] + Wz[Kz + zz + Fz] + Wz[Kz + Oz + Fz] + 2 >> 2
                }
              }
            }
            yield {
              data: sz,
              width: zz,
              height: tz
            }, Wz = sz, Xz = zz, Oz = tz
          }
        }(tz, sz, Fz, Wz)) oz(Uz.data, vz++, Uz.width, Uz.height);
      return Oz
    }
    const dW = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function hW(zz) {
      if (zz.startsWith("data:")) {
        const tz = zz.search(/[;,]/);
        return `data:${tz>5?zz.slice(5,tz):""} URL of ${zz.length} characters`
      }
      return zz.length > 80 ? `${zz.slice(0,80)}...` : zz
    }
    async function QW(zz) {
      const tz = await fetch(zz);
      if (!tz.ok) throw new Error(`${hW(zz)}: ${tz.status} ${tz.statusText}`);
      return createImageBitmap(await tz.blob(), dW)
    }
    async function kW(zz) {
      const tz = await QW(zz),
        sz = new OffscreenCanvas(tz.width, tz.height),
        Fz = sz.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Fz) throw new Error("No 2D context to decode an image");
      Fz.drawImage(tz, 0, 0);
      const {
        data: Wz
      } = Fz.getImageData(0, 0, tz.width, tz.height);
      return tz.close(), {
        pixels: new Uint8Array(Wz.buffer, Wz.byteOffset, Wz.byteLength),
        width: sz.width,
        height: sz.height
      }
    }
    const iW = new WeakMap;

    function LW(zz, tz, sz, Fz) {
      var Wz;
      const Xz = null !== (Wz = iW.get(zz)) && void 0 !== Wz ? Wz : new Map;
      iW.set(zz, Xz);
      let Oz = Xz.get(tz);
      return Oz || (Oz = (async Wz => {
        const Xz = null !== (Wz = function(zz, tz) {
          const sz = zz ? new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength) : null;
          return null !== sz && void 0 !== sz && sz.byteLength && tz && sz.byteLength % (tz * tz * 4) === 0 ? {
            pixels: sz,
            layerWidth: tz,
            layers: sz.byteLength / (tz * tz * 4)
          } : null
        }(sz, Fz)) && void 0 !== Wz ? Wz : await async function(zz) {
          const {
            pixels: tz,
            width: sz
          } = await kW(zz);
          return {
            pixels: tz,
            layerWidth: sz,
            layers: tz.byteLength / (sz * sz * 4)
          }
        }(tz), {
          layerWidth: Oz,
          layers: oz
        } = Xz;
        return {
          texture: MW(zz, Xz.pixels, Oz, Oz, oz, `atlas-${tz}`),
          layerWidth: Oz,
          layers: oz
        }
      })(), Xz.set(tz, Oz), Oz.catch((() => {
        Xz.delete(tz)
      }))), Oz
    }
    const lW = new Map([
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
      nW = new Map([
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

    function aW(zz) {
      for (const tz of (0, cW.l)(zz))
        if (!nW.has((0, cW.i)(tz))) return !1;
      return !0
    }

    function qW(zz) {
      const tz = nW.get(zz);
      if (!tz) return null;
      const [sz, Fz, Wz] = tz;
      return {
        srcFactor: lW.get(sz),
        dstFactor: lW.get(Fz),
        operation: Wz
      }
    }
    let SW = null;

    function VW(zz) {
      SW = zz
    }

    function RW(zz, tz, sz) {
      var Fz;
      null === (Fz = SW) || void 0 === Fz || Fz(zz, tz, sz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class pW {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(zz, tz, sz, Fz, Wz) {
        sz !== this.pipeline && (zz.setPipeline(sz), this.pipeline = sz), zz.setBindGroup(1, Fz, [Wz]);
        const Xz = tz.material.bindGroup;
        Xz !== this.materialGroup && (zz.setBindGroup(2, Xz), this.materialGroup = Xz);
        const Oz = tz.program.packGroup;
        Oz && Oz !== this.packGroup && (zz.setBindGroup(Ct.i, Oz), this.packGroup = Oz);
        const {
          vertexBuffers: oz,
          vertexOffsets: vz
        } = this;
        for (let Uz = 0; Uz < tz.vertexBuffers.length; Uz++) oz[Uz] === tz.vertexBuffers[Uz] && vz[Uz] === tz.vertexOffsets[Uz] || (zz.setVertexBuffer(Uz, tz.vertexBuffers[Uz], tz.vertexOffsets[Uz]), oz[Uz] = tz.vertexBuffers[Uz], vz[Uz] = tz.vertexOffsets[Uz]);
        tz.indexBuffer && tz.indexBuffer !== this.indexBuffer && (zz.setIndexBuffer(tz.indexBuffer, tz.indexFormat), this.indexBuffer = tz.indexBuffer)
      }
    }
    class fW {
      constructor(zz, tz, sz, Fz) {
        this.modelMeshes = zz, this.T6 = tz, this.maker = sz, this.warnOnce = Fz, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(zz) {
        this.collectGroup(zz, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(zz, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(zz, 1, this.frontDraws, this.frontDraws, !0);
        for (const tz of this.modelMeshes.groupIds())(tz < -1 || tz > 1) && this.warnOnce(`group:${tz}`, `rendering group ${tz} is not drawn`);
        for (const tz of this.T6.groupIds())(tz < -1 || tz > 1) && this.warnOnce(`group:${tz}`, `rendering group ${tz} is not drawn`);
        this.opaqueDraws.sort(EW), this.transparentDraws.sort(zX)
      }
      collectGroup(zz, tz, sz, Fz, Wz) {
        const Xz = this.modelMeshes.group(tz),
          Oz = this.T6.group(tz),
          oz = 0 === tz ? null === Oz || void 0 === Oz ? void 0 : Oz.opaque : void 0;
        this.collectList(zz, null === Xz || void 0 === Xz ? void 0 : Xz.opaque, oz || null === Oz || void 0 === Oz ? void 0 : Oz.opaque, tz, !1, sz, Wz), oz && (this.T6.drawn += this.maker.bundleDraws(zz, oz, tz)), this.collectList(zz, null === Xz || void 0 === Xz ? void 0 : Xz.alphaTest, void 0, tz, !1, sz, Wz), this.collectList(zz, null === Xz || void 0 === Xz ? void 0 : Xz.transparent, null === Oz || void 0 === Oz ? void 0 : Oz.transparent, tz, !0, Fz, Wz)
      }
      collectList(zz, tz, sz, Fz, Wz, Xz, Oz) {
        var oz;
        const vz = Xz.length;
        tz && this.maker.pushDraws(zz, tz.units, tz.units.length, Fz, Wz, Xz, tz.rows), sz && (this.T6.drawn += this.maker.pushDraws(zz, sz, sz.length, Fz, Wz, Xz));
        const Uz = Wz ? null === (oz = this.modelMeshes.group(Fz)) || void 0 === oz ? void 0 : oz.text : void 0;
        Uz && this.maker.pushDraws(zz, Uz.units, Uz.units.length, Fz, !0, Xz, Uz.rows), Oz && tX(Xz, vz)
      }
    }

    function EW(zz, tz) {
      return zz.program.id - tz.program.id || zz.material.owner.uniqueId - tz.material.owner.uniqueId
    }

    function zX(zz, tz) {
      return zz.material.owner.uniqueId - tz.material.owner.uniqueId
    }

    function tX(zz, tz) {
      for (let sz = tz + 1; sz < zz.length; sz++) {
        const Fz = zz[sz];
        let Wz = sz - 1;
        for (; Wz >= tz && zX(zz[Wz], Fz) > 0; Wz--) zz[Wz + 1] = zz[Wz];
        zz[Wz + 1] = Fz
      }
    }
    const sX = {};

    function FX(zz) {
      return zz.hasThinInstances ? "thin" : zz.jFz || zz._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function WX(zz, tz, sz) {
      return zz ? (sz._needUVs = !0, zz.optimizeUVAllocation && (0, ez.P)(zz.matrix) ? (sz[`${tz}DIRECTUV`] = zz.uvSet + 1, sz[`MAINUV${zz.uvSet+1}`] = !0) : sz[`${tz}DIRECTUV`] = 0, !0) : (sz[`${tz}DIRECTUV`] = 0, !1)
    }

    function XX(zz) {
      const tz = new Map;
      for (const sz in zz) {
        if (95 === sz.charCodeAt(0)) continue;
        const Fz = zz[sz],
          Wz = typeof Fz;
        "number" === Wz || "string" === Wz ? tz.set(sz, String(Fz)) : Fz && "function" !== Wz && tz.set(sz, !0)
      }
      return tz
    }

    function OX(zz) {
      const tz = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: sz
        }
        of zz.features)
        for (const zz in sz) tz[zz] = sz[zz];
      return tz
    }

    function oX(zz) {
      const tz = zz.parts.geometry;
      return null !== tz && void 0 !== tz && tz.live ? tz : null
    }

    function vX(zz) {
      var tz;
      return null !== (tz = oX(zz)) && void 0 !== tz ? tz : sX
    }
    class UX {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = zz, this.warnOnce = tz, this.programWithModel = sz, this.packFailed = Fz, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(zz, tz, sz, Fz, Wz) {
        const Xz = tz.owner;
        let Oz = this.drawStates.get(tz);
        if (!Oz) {
          const zz = tz.parts.materials[tz.range];
          if (!zz) return this.warnOnce("model", `${sz.name} on ${Xz.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Oz = {
            defines: OX(zz),
            model: zz,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Wz,
            groupId: Fz,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(tz, Oz)
        }
        if (this.programCurrent(Oz, tz, Wz, Fz)) return Oz.program;
        const {
          model: oz
        } = Oz, vz = vX(tz), Uz = this.instanceLayout(Xz, Wz), Kz = this.definesBits(Xz);
        if (!this.prepareModelDefines(zz, Xz, oz, Oz.defines, Fz, Wz)) return null;
        Oz.instancing = Wz, Oz.groupId = Fz, Oz.modelVersion = oz.version, Oz.geometry = vz, Oz.instanceLayout = Uz, Oz.definesBits = Kz;
        const uz = function(zz) {
          let tz = "";
          for (const [sz, Fz] of zz) tz += !0 === Fz ? `${sz};` : `${sz}=${Fz};`;
          return tz
        }(XX(Oz.defines));
        return uz === Oz.definesKey && Oz.packVariant === this.modelPackVariant && Oz.program && !this.packFailed(Oz.program) || (Oz.definesKey = uz, Oz.packVariant = this.modelPackVariant, Oz.program = this.programWithModel(oz, Oz.defines, uz)), Oz.program
      }
      programCurrent(zz, tz, sz, Fz) {
        return null !== zz.program && !this.packFailed(zz.program) && zz.instancing === sz && zz.groupId === Fz && this.definesHold(zz, tz, sz)
      }
      definesHold(zz, tz, sz) {
        return zz.modelVersion === zz.model.version && zz.geometry === vX(tz) && zz.instanceLayout === this.instanceLayout(tz.owner, sz) && zz.definesBits === this.definesBits(tz.owner) && zz.packVariant === this.modelPackVariant
      }
      modelPackKind(zz) {
        var tz;
        return 0 === this.modelPackVariant ? null : null !== (tz = (0, Iz.z)(zz, Jz.h.name)) && void 0 !== tz && tz.active ? "placed" : zz.item ? "item" : zz.lifeform ? "lifeform" : zz.box ? "box" : null
      }
      instanceLayout(zz, tz) {
        var sz, Fz, Wz;
        return "thin" === tz ? null !== (Wz = this.resources.yE.get(zz)) && void 0 !== Wz ? Wz : null : "instanced" === tz && null !== (sz = null === (Fz = zz._userInstancedBuffersStorage) || void 0 === Fz ? void 0 : Fz.interleavedKinds) && void 0 !== sz ? sz : null
      }
      definesBits(zz) {
        const tz = this.view;
        return (zz.visibility < 1 ? 1 : 0) | (zz.hasVertexAlpha ? 2 : 0) | (zz.applyFog ? 4 : 0) | (zz.useVertexColors ? 8 : 0) | (zz.nonUniformScaling ? 16 : 0) | (tz.fogEnabled && 0 !== tz.fogMode ? 32 : 0) | (tz.lightsEnabled ? 64 : 0) | tz.lightCount << 7
      }
      prepareLightDefines(zz, tz, sz) {
        let Fz = 0;
        if (this.view.lightsEnabled && !tz) {
          const tz = Math.min(sz, 4);
          for (; Fz < this.view.lightCount && (zz[`LIGHT${Fz}`] = !0, zz[`LITE_LIGHT${Fz}_SLOT`] = Fz, Fz++, zz._needNormals = !0, Fz !== tz););
        }
        for (let Wz = Fz; Wz < 4; Wz++) zz[`LIGHT${Wz}`] = !1, zz[`LITE_LIGHT${Wz}_SLOT`] = void 0
      }
      prepareModelDefines(zz, tz, sz, Fz, Wz, Xz) {
        const {
          features: Oz
        } = sz;
        Fz._needNormals = !1, Fz._needUVs = !1;
        const oz = this.view;
        this.prepareLightDefines(Fz, sz.disableLighting, sz.maxSimultaneousLights), Fz.MAINUV1 = !1, Fz.MAINUV2 = !1;
        const vz = sz.diffuseTexture;
        vz ? (Fz._needUVs = !0, Fz.DIFFUSE = !0, vz.optimizeUVAllocation && (0, ez.P)(vz.matrix) ? (Fz.DIFFUSEDIRECTUV = vz.uvSet + 1, Fz[`MAINUV${vz.uvSet+1}`] = !0) : Fz.DIFFUSEDIRECTUV = 0, vz.uvSet > 1 && this.warnOnce(`uvset:${sz.name}`, `${sz.name} samples UV set ${vz.uvSet+1}, which is not supported`)) : (Fz.DIFFUSE = !1, Fz.DIFFUSEDIRECTUV = 0);
        const Uz = sz.opacityTexture,
          Kz = sz.emissiveTexture;
        Fz.OPACITY = WX(Uz, "OPACITY", Fz), Fz.OPACITYRGB = null !== Uz && Uz.getAlphaFromRGB, Fz.EMISSIVE = WX(Kz, "EMISSIVE", Fz), (Uz && Uz.uvSet > 1 || Kz && Kz.uvSet > 1) && this.warnOnce(`uvset:${sz.name}`, `${sz.name} samples a UV set past 2, which is not supported`);
        const uz = sz.reflectionTexture,
          Nz = null !== uz;
        if (Nz) {
          if (!this.resources.boundTexture(uz)) return !1;
          Fz._needNormals = !0
        }
        Fz.REFLECTION = Nz, Fz.REFLECTIONMAP_3D = Nz, Fz.REFLECTIONMAP_SKYBOX = Nz, Fz.REFLECTIONMAP_OPPOSITEZ = Nz && (zz.useRightHandedSystem ? !uz.invertZ : uz.invertZ), Fz.ROUGHNESS = Nz && sz.roughness > 0, Fz.REFLECTIONOVERALPHA = Nz && sz.useReflectionOverAlpha, Fz.LITE_REFLECTION_LUMINANCE = Nz && "cube" === uz.source.kind && uz.source.luminance, (tz.skeleton || tz.morphTargetManager) && this.warnOnce(`skin:${tz.name}`, `${tz.name} has bones or morph targets, which are not supported`), Fz.FOG = sz.fogEnabled && tz.applyFog && oz.fogEnabled && 0 !== oz.fogMode, Fz.NONUNIFORMSCALING = tz.nonUniformScaling;
        const {
          visibility: bz,
          hasVertexAlpha: wz
        } = tz;
        Fz.ALPHATEST = (0, Iz.V)(sz, bz, wz), Fz.ALPHAFROMDIFFUSE = (0, Iz.ib)(sz), Fz.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== sz.transparencyMode, Fz.ALPHABLEND = null === sz.transparencyMode || (0, Iz.U)(sz, bz, wz), Fz.PREMULTIPLYALPHA = 7 === sz.alphaMode || 8 === sz.alphaMode, Fz.EMISSIVEASILLUMINATION = sz.useEmissiveAsIllumination, Fz.LINKEMISSIVEWITHDIFFUSE = sz.linkEmissiveWithDiffuse, Fz.TWOSIDEDLIGHTING = !sz.backFaceCulling && sz.twoSidedLighting, Fz.INSTANCES = "none" !== Xz, Fz.THIN_INSTANCES = "thin" === Xz, Fz.LITE_FRONT_LAYER = Wz >= 1;
        for (const {
            feature: mz,
            state: Jz,
            active: Iz
          }
          of Oz) {
          var Dz, gz;
          if (Iz) null === (Dz = (gz = (0, Kt.g)(mz)).prepareDefinesBeforeAttributes) || void 0 === Dz || Dz.call(gz, Jz, Fz, zz, tz)
        }
        this.modelPackKind(sz) && (Fz._needNormals = !0), Fz.NORMAL = Fz._needNormals && tz.isVerticesDataPresent("normal"), Fz.UV1 = Fz._needUVs && tz.isVerticesDataPresent("uv"), Fz.UV2 = Fz._needUVs && tz.isVerticesDataPresent("uv2");
        const Hz = tz.useVertexColors && tz.isVerticesDataPresent("color");
        Fz.VERTEXCOLOR = Hz, Fz.VERTEXALPHA = tz.hasVertexAlpha && Hz, Fz.INSTANCESCOLOR = "none" !== Xz && tz.isVerticesDataPresent("instanceColor");
        for (const {
            feature: mz,
            state: Jz,
            active: Iz
          }
          of Oz) {
          var Bz, Pz;
          if (Iz) null === (Bz = (Pz = (0, Kt.g)(mz)).prepareDefines) || void 0 === Bz || Bz.call(Pz, Jz, Fz, zz, tz, sz)
        }
        const rz = zz.FD();
        for (const {
            feature: mz,
            state: Jz,
            active: Iz
          }
          of Oz) {
          var Yz, xz;
          if (Iz && !1 === (null === (Yz = (xz = (0, Kt.g)(mz)).isReadyForSubMesh) || void 0 === Yz ? void 0 : Yz.call(xz, Jz, Fz, zz, rz))) return !1
        }
        return !0
      }
    }

    function KX(zz, tz, sz) {
      return zz.codeVersion !== tz.version && function(zz, tz) {
        const sz = [],
          Fz = [];
        for (const {
            feature: Nz,
            state: bz,
            active: wz
          }
          of tz.features) {
          var Wz, Xz, Oz, oz;
          if (wz) uX(null === (Wz = (Xz = (0, Kt.g)(Nz)).getCustomCode) || void 0 === Wz ? void 0 : Wz.call(Xz, bz, "vertex", xz.e.WGSL), sz), uX(null === (Oz = (oz = (0, Kt.g)(Nz)).getCustomCode) || void 0 === Oz ? void 0 : Oz.call(oz, bz, "fragment", xz.e.WGSL), Fz)
        }
        const vz = [];
        for (const {
            feature: Nz,
            state: bz
          }
          of tz.features) {
          var Uz, Kz;
          const zz = null === (Uz = (Kz = (0, Kt.g)(Nz)).getUniforms) || void 0 === Uz ? void 0 : Uz.call(Kz, bz, xz.e.WGSL);
          for (const tz of null !== (uz = null === zz || void 0 === zz ? void 0 : zz.ubo) && void 0 !== uz ? uz : []) {
            var uz;
            tz.size && tz.type && vz.push({
              name: tz.name,
              type: tz.type,
              arraySize: tz.arraySize
            })
          }
        }
        zz.vertexCode = sz, zz.fragmentCode = Fz, zz.pluginUniforms = vz, zz.codeKey = JSON.stringify([sz, Fz, vz]), zz.codeVersion = tz.version
      }(zz, tz), `${sz}#${zz.codeKey}`
    }

    function uX(zz, tz) {
      if (zz)
        for (const sz in zz) zz[sz] && tz.push([sz, zz[sz]])
    }
    const NX = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class bX {
      constructor(zz) {
        this.warnOnce = zz, this.states = new Map
      }
      renderState(zz, tz, sz, Fz) {
        var Wz;
        let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Oz = null !== (Wz = zz.sideOrientation) && void 0 !== Wz ? Wz : tz.sideOrientation;
        tz._getWorldMatrixDeterminant() < 0 && (Oz = 0 === Oz ? 1 : 0);
        const oz = "triangle-list" === Xz,
          vz = sz ? zz.alphaMode : 0,
          Uz = (!sz || (0 === vz || zz.forceDepthWrite)) && !zz.disableDepthWrite,
          Kz = oz && zz.backFaceCulling ? zz.cullBackFaces ? "back" : "front" : "none",
          uz = oz && 0 !== Oz ? "ccw" : "cw",
          Nz = zz.depthFunction,
          bz = oz ? zz.zOffset : 0,
          wz = oz ? zz.zOffsetUnits : 0,
          Dz = !zz.disableColorWrite;
        return Fz && Fz.alphaMode === vz && Fz.depthWrite === Uz && Fz.depthFunction === Nz && Fz.cullMode === Kz && Fz.frontFace === uz && Fz.zOffset === bz && Fz.zOffsetUnits === wz && Fz.colourWrite === Dz && Fz.topology === Xz ? Fz : this.stateFor(vz, Uz, Nz, Kz, uz, bz, wz, Dz, Xz)
      }
      stateFor(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        const Uz = `${zz}|${tz}|${sz}|${Fz}|${Wz}|${Xz}|${Oz}|${oz}|${vz}`;
        let Kz = this.states.get(Uz);
        if (!Kz) {
          var uz;
          const Nz = zz ? qW(zz) : null;
          zz && !Nz && this.warnOnce(`alpha:${zz}`, `alpha mode ${zz} is not supported`), Kz = {
            key: Uz,
            alphaMode: zz,
            depthFunction: sz,
            zOffset: Xz,
            zOffsetUnits: Oz,
            topology: vz,
            blend: Nz,
            depthWrite: tz,
            depthCompare: sz && null !== (uz = NX.get(sz)) && void 0 !== uz ? uz : null,
            cullMode: Fz,
            frontFace: Wz,
            depthBias: -Oz,
            depthBiasSlopeScale: -Xz,
            colourWrite: oz
          }, this.states.set(Uz, Kz)
        }
        return Kz
      }
    }
    var wX = sz(36816);

    function DX(zz) {
      if (!zz.frozen) return -1;
      let tz = zz.version;
      for (const {
          feature: sz,
          state: Fz,
          active: Wz
        }
        of zz.features) {
        if (!Wz || !sz.bind) continue;
        const zz = (0, Kt.g)(sz).uniformsVersion;
        if (!zz) return -1;
        tz += zz(Fz)
      }
      return tz
    }
    class gX {
      constructor(zz, tz, sz) {
        this.slots = zz, this.data = tz, this.textures = sz, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(zz, tz) {
        this.write4(zz, tz, 0, 0, 0, 1)
      }
      updateFloat2(zz, tz, sz) {
        this.write4(zz, tz, sz, 0, 0, 2)
      }
      updateFloat3(zz, tz, sz, Fz) {
        this.write4(zz, tz, sz, Fz, 0, 3)
      }
      updateFloat4(zz, tz, sz, Fz, Wz) {
        this.write4(zz, tz, sz, Fz, Wz, 4)
      }
      updateVector3(zz, tz) {
        this.write4(zz, tz.x, tz.y, tz.z, 0, 3)
      }
      updateVector4(zz, tz) {
        this.write4(zz, tz.x, tz.y, tz.z, tz.w, 4)
      }
      updateColor3(zz, tz) {
        this.write4(zz, tz.r, tz.g, tz.b, 0, 3)
      }
      updateColor4(zz, tz, sz) {
        this.write4(zz, tz.r, tz.g, tz.b, sz, 4)
      }
      updateFloatsFrom(zz, tz, sz, Fz) {
        const Wz = this.slots.get(zz);
        if (!Wz) return;
        const Xz = this.data,
          Oz = Wz.offset;
        for (let oz = 0; oz < Fz; oz++) Xz[Oz + oz] = tz[sz + oz]
      }
      updateFloat3TimesFloats(zz, tz, sz, Fz) {
        const Wz = this.slots.get(zz);
        if (!Wz) return;
        const Xz = this.data,
          Oz = Wz.offset;
        Xz[Oz] = tz[sz] * Fz[0], Xz[Oz + 1] = tz[sz + 1] * Fz[1], Xz[Oz + 2] = tz[sz + 2] * Fz[2]
      }
      y5(zz, tz) {
        const sz = this.slots.get(zz);
        sz && this.data.set(tz.m, sz.offset)
      }
      updateMatrixFloats(zz, tz) {
        const sz = this.slots.get(zz);
        sz && this.data.set(tz, sz.offset)
      }
      updateFloatArray(zz, tz) {
        const sz = this.slots.get(zz);
        if (!sz) return;
        if (!sz.arraySize || sz.stride === sz.floats) return void this.data.set(tz, sz.offset);
        const Fz = Math.min(tz.length, sz.floats * sz.arraySize);
        for (let Wz = 0; Wz < Fz; Wz++) this.data[sz.offset + Math.floor(Wz / sz.floats) * sz.stride + Wz % sz.floats] = tz[Wz]
      }
      updateArray(zz, tz) {
        this.updateFloatArray(zz, tz)
      }
      setTexture(zz, tz) {
        this.textures.set(zz, tz), this.expected.delete(zz)
      }
      expectTexture(zz) {
        this.textures.set(zz, null), this.expected.add(zz)
      }
      write4(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = this.slots.get(zz);
        if (!Oz) return;
        const oz = this.data,
          vz = Oz.offset;
        oz[vz] = tz, Xz > 1 && (oz[vz + 1] = sz), Xz > 2 && (oz[vz + 2] = Fz), Xz > 3 && (oz[vz + 3] = Wz)
      }
    }

    function HX(zz, tz) {
      const sz = LF,
        Fz = wX.h,
        Wz = zz.lights,
        Xz = Math.min(zz.lightCount, 8);
      for (let Oz = 0; Oz < Xz; Oz++) {
        const zz = sz.lights + Oz * sz.lightStride,
          Xz = Oz * wX.b;
        tz[zz] = Wz[Xz + Fz.vector], tz[zz + 1] = Wz[Xz + Fz.vector + 1], tz[zz + 2] = Wz[Xz + Fz.vector + 2], tz[zz + 3] = Wz[Xz + Fz.kind] === wX.f.directional ? 1 : 0, tz[zz + 4] = Wz[Xz + Fz.diffuse], tz[zz + 5] = Wz[Xz + Fz.diffuse + 1], tz[zz + 6] = Wz[Xz + Fz.diffuse + 2], tz[zz + 7] = Wz[Xz + Fz.range], tz[zz + 8] = Wz[Xz + Fz.specular], tz[zz + 9] = Wz[Xz + Fz.specular + 1], tz[zz + 10] = Wz[Xz + Fz.specular + 2], tz[zz + 11] = Wz[Xz + Fz.range]
      }
      tz[sz.fogInfos] = zz.fogMode, tz[sz.fogInfos + 1] = zz.fogStart, tz[sz.fogInfos + 2] = zz.fogEnd, tz[sz.fogInfos + 3] = zz.fogDensity, tz[sz.fogColour] = zz.fogColour[0], tz[sz.fogColour + 1] = zz.fogColour[1], tz[sz.fogColour + 2] = zz.fogColour[2], tz[sz.outputHeight] = zz.renderHeight, tz[sz.animTick] = zz.animTick, tz[sz.timeMs] = zz.timeMs
    }
    class BX {
      constructor(zz) {
        this.instancesOf = zz
      }
      refreshModelUniforms(zz, tz, sz, Fz) {
        const Wz = DX(sz);
        if (Wz >= 0 && Wz === tz.heldVersion && tz.textures.get("diffuseSampler") === sz.diffuseTexture && tz.textures.get("reflectionCubeSampler") === sz.reflectionTexture && tz.textures.get("opacitySampler") === sz.opacityTexture && tz.textures.get("emissiveSampler") === sz.emissiveTexture) return !0;
        if (Wz < 0)
          for (const Xz of this.instancesOf(sz)) Xz.heldVersion = -1;
        return this.writeModelUniforms(zz, tz, sz, Fz), tz.heldVersion = Wz, !1
      }
      writeModelUniforms(zz, tz, sz, Fz) {
        const {
          ubo: Wz
        } = tz, Xz = sz.diffuseTexture, Oz = sz.diffuseColor;
        Wz.updateFloat4("vDiffuseColor", Oz[0], Oz[1], Oz[2], sz.alpha), Xz && (Wz.updateFloat2("vDiffuseInfos", Xz.uvSet, Xz.level), Wz.updateMatrixFloats("diffuseMatrix", Xz.matrix)), Wz.updateFloat("alphaCutOff", sz.alphaCutOff), Wz.updateFloatsFrom("vEmissiveColor", sz.emissiveColor, 0, 3), Wz.updateFloat3TimesFloats("vAmbientColor", Fz.ambientColour, 0, sz.ambientColor);
        const oz = sz.specularColor;
        Wz.updateFloat4("vSpecularColor", oz[0], oz[1], oz[2], sz.specularPower), Wz.setTexture("diffuseSampler", Xz);
        const vz = sz.opacityTexture;
        vz && (Wz.updateFloat2("vOpacityInfos", vz.uvSet, vz.level), Wz.updateMatrixFloats("opacityMatrix", vz.matrix)), Wz.setTexture("opacitySampler", vz);
        const Uz = sz.emissiveTexture;
        Uz && (Wz.updateFloat2("vEmissiveInfos", Uz.uvSet, Uz.level), Wz.updateMatrixFloats("emissiveMatrix", Uz.matrix)), Wz.setTexture("emissiveSampler", Uz);
        const Kz = sz.reflectionTexture;
        Kz && Wz.updateMatrixFloats("reflectionMatrix", Kz.matrix), Wz.updateFloat2("vReflectionInfos", Kz ? Kz.level * zz.iblIntensity : 0, sz.roughness), Wz.setTexture("reflectionCubeSampler", Kz);
        const uz = zz.FD();
        for (const {
            feature: wz,
            state: Dz,
            active: gz
          }
          of sz.features) {
          var Nz, bz;
          if (gz) null === (Nz = (bz = (0, Kt.g)(wz)).bind) || void 0 === Nz || Nz.call(bz, Dz, Wz, zz, uz)
        }
      }
    }

    function PX(zz) {
      const tz = zz.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(tz) ? "u32" : /i32|^vec\di$/.test(tz) ? "i32" : "f32"
    }

    function rX(zz, tz) {
      const sz = zz.getSize(),
        Fz = PX(tz),
        Wz = zz => 4 === sz ? `${zz}x4` : 2 === sz ? `${zz}x2` : null;
      if ("f32" === Fz) {
        if (5126 === zz.type) return 1 === sz ? "float32" : sz >= 2 && sz <= 4 ? `float32x${sz}` : null;
        if (!zz.normalized) return null;
        switch (zz.type) {
          case 5121:
            return Wz("unorm8");
          case 5120:
            return Wz("snorm8");
          case 5123:
            return Wz("unorm16");
          case 5122:
            return Wz("snorm16")
        }
        return null
      }
      const Xz = "u32" === Fz ? "uint" : "sint";
      switch (zz.type) {
        case 5125:
        case 5124:
          return 1 === sz ? `${Xz}32` : sz <= 4 ? `${Xz}32x${sz}` : null;
        case 5121:
        case 5120:
          return Wz(`${Xz}8`);
        case 5123:
        case 5122:
          return Wz(`${Xz}16`)
      }
      return null
    }

    function YX(zz) {
      var tz;
      const sz = /(8|16|32)(?:x(\d))?$/.exec(zz);
      return sz ? Number(sz[1]) / 8 * Number(null !== (tz = sz[2]) && void 0 !== tz ? tz : 1) : 4
    }
    class xX {
      constructor(zz, tz, sz) {
        this.resources = zz, this.limits = tz, this.warnOnce = sz, this.layouts = new Map
      }
      resolveInputs(zz, tz, sz, Fz) {
        const Wz = [],
          Xz = sz.program.attributes,
          Oz = [];
        for (let Kz = 0; Kz < Xz.length; Kz++) {
          const sz = Xz[Kz],
            oz = sz.optional ? null : this.resources.vertexInput(zz, sz.name, Fz);
          if (!oz) {
            const zz = PX(sz.type),
              tz = "u32" === zz ? "uint32x4" : "i32" === zz ? "sint32x4" : "float32x4";
            Oz.push(null);
            const Fz = Wz.find((zz => null === zz.data));
            Fz ? Fz.attributes.push({
              shaderLocation: Kz,
              offset: 0,
              format: tz
            }) : Wz.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Kz,
                offset: 0,
                format: tz
              }]
            });
            continue
          }
          const vz = oz.getBuffer();
          Oz.push(oz);
          const Uz = rX(oz, sz.type);
          if (!Uz) return this.warnOnce(`format:${tz}:${sz.name}`, `${tz}'s ${sz.name} (type ${oz.type}, size ${oz.getSize()}) has no WebGPU vertex format`), null;
          const uz = oz.getIsInstanced() ? "instance" : "vertex",
            Nz = oz.byteStride,
            bz = YX(Uz),
            wz = Wz.find((zz => zz.data === vz && zz.stride === Nz && zz.step === uz && oz.byteOffset >= zz.base && oz.byteOffset - zz.base + bz <= Nz));
          wz ? wz.attributes.push({
            shaderLocation: Kz,
            offset: oz.byteOffset - wz.base,
            format: Uz
          }) : Wz.push({
            data: vz,
            base: oz.byteOffset,
            stride: Nz,
            step: uz,
            attributes: [{
              shaderLocation: Kz,
              offset: 0,
              format: Uz
            }]
          })
        }
        if (Wz.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${tz}`, `${tz} needs ${Wz.length} vertex buffers`), null;
        let oz = "";
        for (const Kz of Wz) {
          oz += `${Kz.stride}${"instance"===Kz.step?"i":"v"}`;
          for (const zz of Kz.attributes) oz += `,${zz.shaderLocation}:${zz.offset}:${zz.format}`;
          oz += ";"
        }
        let vz = this.layouts.get(oz);
        vz || (vz = {
          key: oz,
          buffers: Wz.map((zz => ({
            arrayStride: zz.stride,
            stepMode: zz.step,
            attributes: zz.attributes
          }))),
          instanceEnds: Wz.map((zz => {
            let tz = -1;
            if ("instance" === zz.step)
              for (const sz of zz.attributes) tz = Math.max(tz, sz.offset + YX(sz.format));
            return tz
          }))
        }, this.layouts.set(oz, vz));
        const Uz = Wz.map((zz => zz.base));
        return {
          program: sz,
          sources: Oz,
          layout: vz,
          slotData: Wz.map((zz => zz.data)),
          R6: Uz,
          buffers: [],
          offsets: Uz,
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

    function mX(zz, tz, sz, Fz) {
      const Wz = tz.program.program.attributes;
      for (let Xz = 0; Xz < Wz.length; Xz++) {
        if ((Wz[Xz].optional ? null : sz.vertexInput(zz, Wz[Xz].name, Fz)) !== tz.sources[Xz]) return !1
      }
      return !0
    }
    const JX = 64;
    class IX {
      constructor(zz, tz, sz, Fz) {
        this.device = zz, this.layout = tz, this.frameBuffer = sz, this.label = Fz, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(zz) {
        if (zz * JX <= this.data.length) return !1;
        let tz = 2 * this.data.length;
        for (; zz * JX > tz;) tz *= 2;
        const sz = new Float32Array(tz);
        return sz.set(this.data), this.data = sz, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wz = this.data,
          Xz = zz * JX;
        let Oz = Wz[Xz + 16] !== sz;
        for (let oz = 0; oz < 16 && !Oz; oz++) Oz = Wz[Xz + oz] !== tz[Fz + oz];
        if (Oz) {
          for (let zz = 0; zz < 16; zz++) Wz[Xz + zz] = tz[Fz + zz];
          Wz[Xz + 16] = sz
        }
        return Oz
      }
      upload(zz, tz) {
        this.device.queue.writeBuffer(this.buffer, zz * lF, this.data, zz * JX, (tz - zz) * JX)
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

    function CX(zz) {
      return zz.gpu[ez.i.lite] ??= zz.materials.map(((tz, sz) => ({
        parts: zz,
        range: sz,
        owner: zz.owner
      })))
    }

    function eX(zz) {
      var tz, sz, Fz;
      return null !== (tz = null !== (sz = null === (Fz = zz.parts.materials[zz.range]) || void 0 === Fz ? void 0 : Fz.mirror) && void 0 !== sz ? sz : zz.owner.material) && void 0 !== tz ? tz : null
    }
    const ZX = ["opaque", "alphaTest", "transparent", "text"];
    class GX {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Ut.c)("Lite: ")
      }
      attach(zz, tz) {
        this.model = zz, this.mirror = tz
      }
      get worlds() {
        return this.model.nodes.PN
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(zz) {
        return this.groups.get(zz)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(zz) {
        for (const [tz, sz] of this.groups)
          for (const Fz of ZX)
            for (const Wz of sz[Fz].units) zz(Wz.owner, "text" === Fz ? "transparent" : Fz, tz)
      }
      select(zz, tz) {
        this.frame++, this.selectedCount = 0;
        for (const oz of this.groups.values())
          for (const zz of ZX) oz[zz].units.length = 0, oz[zz].rows.length = 0;
        const {
          model: sz,
          mirror: Fz
        } = this;
        if (!sz || !Fz || !zz) return;
        this.rows.length < sz.nodes.au && (this.rows = new Int32Array(sz.nodes.au));
        const Wz = this.rows,
          Xz = sz.meshes;
        for (let oz = 0; oz < Xz.looseCount; oz++) {
          const zz = Xz.loose[oz],
            sz = Fz.nodes[zz];
          sz && !sz.isBlocked && sz.isEnabled() && !sz.nX.hasAZeroComponent && Xz.selects(zz, tz.frustum) && (this.activate(sz, zz), this.selectedCount++)
        }
        const Oz = Xz.selectTextPlanes(tz.frustum, Wz);
        for (let oz = 0; oz < Oz; oz++) {
          const tz = Wz[oz],
            Xz = Fz.nodes[tz],
            Oz = sz.meshes.parts[tz];
          if (!Xz.isVisible || !(Xz.visibility > 0) || 0 === (Xz.layerMask & zz.layerMask) || !Oz) continue;
          const vz = this.groupOf(sz.meshes.layer[tz]).text;
          for (const zz of CX(Oz)) vz.units.push(zz), vz.rows.push(tz);
          this.selectedCount++
        }
      }
      instanceBatch(zz) {
        const tz = this.batchOf(zz);
        return tz.dispatched || (tz.dispatched = tz.renderSelf = !0, tz.row = this.rowOf(zz)), tz
      }
      rowOf(zz) {
        return zz.row
      }
      activate(zz, tz) {
        if (!zz.VJ) {
          const sz = zz;
          if (sz.jFz) {
            const zz = this.batchOf(sz);
            zz.dispatched = !0, zz.renderSelf = !0, zz.row = tz
          }
          return void this.dispatch(sz, tz, tz)
        }
        const sz = zz,
          Fz = sz.AFz;
        if (Fz._getWorldMatrixDeterminant() >= 0 !== sz._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Fz.name}`, `A mirrored InstancedMesh of ${Fz.name} is not drawn yet`);
        const Wz = this.batchOf(Fz);
        Wz.instances.push(sz), Wz.rows.push(tz), Wz.dispatched || (Wz.dispatched = !0, this.dispatch(Fz, tz, this.rowOf(Fz)))
      }
      batchOf(zz) {
        let tz = this.batches.get(zz);
        return tz || (tz = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(zz, tz)), tz.frame !== this.frame && (tz.frame = this.frame, tz.dispatched = !1, tz.renderSelf = !1, tz.instances.length = 0, tz.rows.length = 0), tz
      }
      dispatch(zz, tz, sz) {
        const {
          layer: Fz,
          parts: Wz
        } = this.model.meshes;
        if (!Wz[tz]) return;
        const Xz = this.groupOf(Fz[tz]),
          Oz = zz;
        for (const oz of CX(Wz[tz])) {
          const zz = eX(oz);
          if (!zz) continue;
          const tz = zz.needAlphaBlendingForMesh(Oz) ? Xz.transparent : zz.needAlphaTestingForMesh(Oz) ? Xz.alphaTest : Xz.opaque;
          tz.units.push(oz), tz.rows.push(sz)
        }
      }
      groupOf(zz) {
        let tz = this.groups.get(zz);
        return tz || (tz = {
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
        }, this.groups.set(zz, tz)), tz
      }
    }
    class TX {
      constructor() {
        this.po = new Map, this.enabled = [], this.groups = new Map, this.Ow = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(zz) {
        if (this.po.has(zz)) return;
        const tz = {
          mesh: zz,
          observer: zz.onEffectiveEnabledStateChangedObservable.add((zz => {
            this.Xx(tz, zz)
          })),
          index: -1,
          steady: null
        };
        this.po.set(zz, tz), this.Xx(tz, zz.isEnabled())
      }
      remove(zz) {
        const tz = this.po.get(zz);
        tz && (tz.observer.remove(!0), this.Xx(tz, !1), this.po.delete(zz))
      }
      base(zz) {
        return this.po.get(zz)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          po: this.po.size
        }
      }
      forEachSelected(zz) {
        for (const [tz, sz] of this.groups) {
          for (const Fz of sz.opaque) zz(Fz.owner, "opaque", tz);
          for (const Fz of sz.transparent) zz(Fz.owner, "transparent", tz)
        }
        for (const tz of this.Ow) zz(tz.mesh, "opaque", 0)
      }
      group(zz) {
        return this.groups.get(zz)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(zz, tz) {
        this.drawn = 0, this.selected = 0, this.Ow.length = 0;
        for (const Fz of this.groups.values()) Fz.opaque.length = 0, Fz.transparent.length = 0;
        if (!zz) return;
        const sz = this.enabled;
        for (let Fz = 0; Fz < sz.length; Fz++) {
          const Wz = sz[Fz];
          if (Wz.steady && tz(Wz, zz)) {
            this.selected++, this.Ow.push(Wz);
            continue
          }
          const Xz = Wz.mesh;
          if (Xz.isBlocked || Xz.nX.hasAZeroComponent) continue;
          if (!Xz.isVisible || Xz.visibility <= 0 || 0 === (Xz.layerMask & zz.layerMask)) continue;
          if (Xz.jFz) {
            this.warned.has(Xz.name) || (this.warned.add(Xz.name), console.warn(`Lite: thin instance base ${Xz.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Oz
          } = Xz;
          if (!Oz) continue;
          Xz.computeWorldMatrix(), this.selected++;
          const oz = this.listsFor(Xz.renderingGroupId);
          for (const zz of CX(Oz)) {
            const tz = eX(zz);
            tz && (tz.needAlphaBlendingForMesh(Xz) ? oz.transparent.push(zz) : oz.opaque.push(zz))
          }
        }
      }
      Xx(zz, tz) {
        if (tz === zz.index >= 0) return;
        zz.steady = null;
        const sz = this.enabled;
        if (tz) zz.index = sz.length, sz.push(zz);
        else {
          const tz = sz.pop();
          tz !== zz && (sz[zz.index] = tz, tz.index = zz.index), zz.index = -1
        }
      }
      listsFor(zz) {
        let tz = this.groups.get(zz);
        return tz || (tz = {
          opaque: [],
          transparent: []
        }, this.groups.set(zz, tz)), tz
      }
    }
    var cX = sz(38914);
    class jX {
      constructor() {
        this.bundle = null, this.stale = !0, this.po = new Set
      }
    }
    class AX {
      constructor(zz, tz, sz) {
        this.device = zz, this.slots = tz, this.host = sz, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new jX, this.bJ = new jX, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new pW, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(zz) {
          var tz, sz;
          let Fz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (tz = null === (sz = globalThis.navigator) || void 0 === sz ? void 0 : sz.userAgent) && void 0 !== tz ? tz : "";
          const Wz = zz.adapterInfo;
          return "intel" === (null === Wz || void 0 === Wz ? void 0 : Wz.vendor) && "gen-12lp" === Wz.architecture && Fz.includes("Windows")
        }(zz), (0, cX.E)(this.direct)
      }
      bY() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, cX.E)(this.directThisFrame)
      }
      add(zz, tz, sz, Fz) {
        let Wz = this.records.get(zz);
        return Wz || (Wz = this.createRecord(zz), this.records.set(zz, Wz)), Wz.recorded && MX(Wz, tz) || (this.bundleOf(Wz).stale = !0), this.place(Wz, tz, sz, Fz), Wz
      }
      bundleOf(zz) {
        return zz.bJ ? this.bJ : this.main
      }
      addAgain(zz, tz, sz, Fz) {
        zz.recorded || (this.bundleOf(zz).stale = !0), this.place(zz, tz, sz, Fz)
      }
      place(zz, tz, sz, Fz) {
        zz.seen = this.frame, zz.bJ && null === zz.draw && (this.bJ.stale = !0), zz.draw = tz, this.drawn++, sz && this.slots.write(zz.slot, sz, Fz) && (this.slotsFrom = Math.min(this.slotsFrom, zz.slot), this.slotsTo = Math.max(this.slotsTo, zz.slot));
        const Wz = this.args,
          Xz = 5 * zz.slot;
        Wz[Xz] === tz.count && Wz[Xz + 1] === tz.instances && Wz[Xz + 2] === tz.first || (Wz[Xz] = tz.count, Wz[Xz + 1] = tz.instances, Wz[Xz + 2] = tz.first, this.argsDirty = !0, this.bJ.stale ||= zz.bJ)
      }
      rY() {
        for (const zz of this.records.values()) zz.seen !== this.frame && (zz.draw && (zz.draw = null, this.args[5 * zz.slot + 1] = 0, this.argsDirty = !0, this.bJ.stale ||= zz.bJ), this.frame - zz.seen > 120 && (this.records.delete(zz.unit), this.freeSlots.push(zz.slot), zz.recorded && (this.bundleOf(zz).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(zz) {
        for (const tz of this.records.values()) tz.draw && tz.seen === this.frame && !tz.bJ && zz(tz.draw, this.slots.data, tz.slot * lF / 4)
      }
      resourceDestroyed(zz) {
        this.main.stale ||= this.main.po.has(zz), this.bJ.stale ||= this.bJ.po.has(zz)
      }
      execute(zz, tz, sz) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(zz, tz, sz, "direct"), this.drawn;
        const Fz = this.host.sceneGroup(tz);
        if (!Fz) return this.main.bundle = null, this.bJ.bundle = null, this.recordedSceneGroup = null, this.encode(zz, tz, sz, "direct"), this.drawn;
        this.recordedTarget === sz && this.recordedSceneGroup === Fz || (this.recordedTarget = sz, this.recordedSceneGroup = Fz, this.main.stale = !0, this.bJ.stale = !0);
        const Wz = this.main,
          Xz = this.bJ;
        let Oz = !1;
        !Wz.stale && Wz.bundle || (Wz.bundle = this.record(tz, sz, Fz, "indirect"), Oz = !0);
        const oz = (0, cX.j)();
        return (Xz.stale || this.rangedEpoch !== oz) && (this.rangedEpoch = oz, Xz.bundle = this.drawsRanged() ? this.record(tz, sz, Fz, "bJ") : this.noRangedBundle(), Oz = !0), Oz && (this.bundles = Xz.bundle ? [Wz.bundle, Xz.bundle] : [Wz.bundle]), zz.executeBundles(this.bundles), zz.setBindGroup(0, Fz), this.drawn
      }
      record(zz, tz, sz, Fz) {
        const Wz = this.device.createRenderBundleEncoder({
          label: "bJ" === Fz ? "thin-bases-ranged" : "thin-bases",
          colorFormats: zz._colorFormat ? [zz._colorFormat] : [],
          depthStencilFormat: zz._depthStencilFormat,
          sampleCount: zz._sampleCount
        });
        return Wz.setBindGroup(0, sz), this.encode(Wz, zz, tz, Fz), Wz.finish()
      }
      noRangedBundle() {
        for (const zz of this.records.values()) zz.bJ && (zz.recorded = !1);
        return this.bJ.po.clear(), this.bJ.stale = !1, null
      }
      drawsRanged() {
        for (const zz of this.records.values())
          if (zz.bJ && zz.draw) return !0;
        return !1
      }
      encode(zz, tz, sz, Fz) {
        const Wz = [];
        for (const vz of this.records.values()) "direct" !== Fz && vz.bJ !== ("bJ" === Fz) || (vz.recorded = !1, vz.draw && Wz.push(vz));
        Wz.sort(dX);
        const Xz = "direct" === Fz ? null : "bJ" === Fz ? this.bJ : this.main;
        null === Xz || void 0 === Xz || Xz.po.clear(), this.binder.reset();
        let Oz = !1;
        for (const vz of Wz) {
          var oz;
          const Wz = vz.draw,
            Uz = this.host.pipelineFor(Wz, tz, sz);
          if (!Uz) {
            this.host.pipelineCompiling(Wz, sz) ? Oz = !0 : Xz && this.keep(vz, Wz, Xz.po);
            continue
          }
          let Kz;
          if (vz.bJ && "indirect" !== Fz) {
            const zz = vz.unit.owner;
            Kz = "direct" === Fz && (0, cX.v)(zz) || (0, cX.m)(zz) || void 0
          }
          if (Xz && this.keep(vz, Wz, Xz.po), 0 === (null === (oz = Kz) || void 0 === oz ? void 0 : oz.count)) continue;
          this.binder.bind(zz, Wz, Uz, this.slots.bindGroup, vz.slot * lF);
          const uz = 5 * vz.slot;
          if ("indirect" === Fz) {
            Wz.indexBuffer ? zz.drawIndexedIndirect(this.argsBuffer, 4 * uz) : zz.drawIndirect(this.argsBuffer, 4 * uz);
            continue
          }
          const Nz = this.args;
          Kz ? yX(zz, null !== Wz.indexBuffer, Nz, uz, Kz) : Wz.indexBuffer ? zz.drawIndexed(Nz[uz], Nz[uz + 1], Nz[uz + 2], 0, 0) : zz.draw(Nz[uz], Nz[uz + 1], Nz[uz + 2], 0)
        }
        Xz && (Xz.stale = Oz)
      }
      keep(zz, tz, sz) {
        zz.recorded = !0, zz.pipelineKey = tz.pipelineKey, zz.materialGroup = tz.material.bindGroup, zz.vertexBuffers.length = 0, zz.vertexBuffers.push(...tz.vertexBuffers), zz.vertexOffsets = tz.vertexOffsets, zz.indexBuffer = tz.indexBuffer, zz.indexFormat = tz.indexFormat;
        for (const Fz of tz.vertexBuffers) sz.add(Fz);
        tz.indexBuffer && sz.add(tz.indexBuffer), sz.add(tz.material.buffer);
        for (const Fz of tz.material.bound) Fz && sz.add(Fz)
      }
      createRecord(zz) {
        let tz = this.freeSlots.pop();
        return void 0 === tz && (tz = this.slotCount++, this.grow()), {
          unit: zz,
          slot: tz,
          bJ: void 0 !== (0, cX.m)(zz.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.bJ.stale = !0), 5 * this.slotCount > this.args.length) {
          const zz = new Uint32Array(2 * this.args.length);
          zz.set(this.args), this.args = zz, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function yX(zz, tz, sz, Fz, Wz) {
      const Xz = sz[Fz + 1],
        Oz = Wz.data;
      for (let oz = 0; oz < Wz.count; oz++) {
        const Wz = Math.min(Oz[2 * oz], Xz),
          vz = Math.min(Oz[2 * oz + 1], Xz - Wz);
        0 !== vz && (tz ? zz.drawIndexed(sz[Fz], vz, sz[Fz + 2], 0, Wz) : zz.draw(sz[Fz], vz, sz[Fz + 2], Wz))
      }
    }

    function MX(zz, tz) {
      if (zz.pipelineKey !== tz.pipelineKey || zz.materialGroup !== tz.material.bindGroup || zz.indexBuffer !== tz.indexBuffer || zz.indexFormat !== tz.indexFormat || zz.vertexOffsets !== tz.vertexOffsets || zz.vertexBuffers.length !== tz.vertexBuffers.length) return !1;
      for (let sz = 0; sz < zz.vertexBuffers.length; sz++)
        if (zz.vertexBuffers[sz] !== tz.vertexBuffers[sz]) return !1;
      return !0
    }

    function dX(zz, tz) {
      return EW(zz.draw, tz.draw)
    }
    const hX = new WeakMap,
      QX = {
        depth: !1,
        sunShadow: !1
      };

    function kX(zz, tz) {
      let sz = hX.get(zz);
      sz || (sz = new Map, hX.set(zz, sz));
      const Fz = `${tz.depth?"-depth":""}${tz.sunShadow?"-shadow":""}${tz.shadowMask?"-mask":""}`;
      let Wz = sz.get(Fz);
      if (!Wz) {
        const Xz = [{
          binding: Ct.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Ct.k
          }
        }, {
          binding: Ct.B,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        tz.depth && Xz.push({
          binding: Ct.s,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), tz.sunShadow && Xz.push(... function() {
          const zz = GPUShaderStage.FRAGMENT,
            tz = Ct.v;
          return [{
            binding: tz.uniform,
            visibility: zz,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: tz.RN,
            visibility: zz,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: tz.special,
            visibility: zz,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: tz.volume,
            visibility: zz,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: tz.sampler,
            visibility: zz,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: tz.entities,
            visibility: zz,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: tz.entityGrids,
            visibility: zz,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), tz.shadowMask && Xz.push({
          binding: Ct.x,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Wz = zz.createBindGroupLayout({
          label: `${tz.depth?"terrain-":""}shader-pack-inputs${Fz}`,
          entries: Xz
        }), sz.set(Fz, Wz)
      }
      return Wz
    }

    function iX(zz) {
      return kX(zz, QX)
    }

    function LX(zz, tz) {
      if (!tz) return !1;
      const sz = (0, et.d)(zz);
      return !!sz && Qs(sz, tz)
    }

    function lX(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!NF(tz)) return [];
      return [kX(zz, {
        depth: oF(tz.packVariant),
        sunShadow: LX(tz.packVariant, sz),
        shadowMask: Fz
      })]
    }
    class nX {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = zz, this.sunShadow = sz, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Ct.k), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = zz.createBuffer({
          label: "shader-pack-inputs",
          size: Ct.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Fz = (0, Ct.E)(tz);
        this.textures = zz.createBuffer({
          label: "shader-pack-textures",
          size: Fz.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), zz.queue.writeBuffer(this.textures, 0, Fz), this.bindGroup = zz.createBindGroup({
          label: "shader-pack-inputs",
          layout: iX(zz),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Ct.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Ct.B,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(zz, tz, sz) {
        (0, Ct.J)(this.data, {
          seconds: zz.seconds(),
          lit: sz,
          renderOffset: zz.renderOffset(),
          L_: zz.L_(),
          eyePosition: tz,
          shadowDirection: zz.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Fz = tz ? this.sunShadow : null;
        if ((tz || sz) && !Fz) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!zz && !Fz) return this.bindGroup;
        (zz && zz !== this.depthView || sz && sz !== this.maskView) && (this.depthView = null !== zz && void 0 !== zz ? zz : this.depthView, this.maskView = null !== sz && void 0 !== sz ? sz : this.maskView, this.groups.clear());
        const Wz = (zz ? 1 : 0) | (Fz ? 2 : 0) | (sz ? 4 : 0);
        let Xz = this.groups.get(Wz);
        if (!Xz) {
          const tz = this.entries();
          zz && tz.push({
            binding: Ct.s,
            resource: zz
          }), Fz && tz.push(...Fz.entries()), sz && tz.push({
            binding: Ct.x,
            resource: sz
          }), Xz = this.device.createBindGroup({
            label: `${zz||sz?"terrain-":""}shader-pack-inputs${zz?"-depth":""}${Fz?"-shadow":""}${sz?"-mask":""}`,
            layout: kX(this.device, {
              depth: !!zz,
              sunShadow: !!Fz,
              shadowMask: !!sz
            }),
            entries: tz
          }), this.groups.set(Wz, Xz)
        }
        return Xz
      }
      bind(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        zz.setBindGroup(Ct.i, this.bindGroupFor(tz, sz, Fz))
      }
    }

    function aX(zz, tz, sz) {
      if (zz.gpuVersion === tz.gpuBuffersVersion) return !0;
      let Fz;
      do {
        if (Fz = tz.gpuBuffersVersion, !qX(zz, tz, sz)) return !1
      } while (tz.gpuBuffersVersion !== Fz);
      return zz.gpuVersion = Fz, zz.fitInstances = 0, !0
    }

    function qX(zz, tz, sz) {
      let Fz = null;
      for (let Xz = 0; Xz < zz.slotData.length; Xz++) {
        var Wz;
        const Oz = zz.slotData[Xz],
          oz = Oz ? tz.gpuBuffer(Oz) : sz;
        if (!oz) return !1;
        Oz && zz.layout.instanceEnds[Xz] < 0 && tz.cover(Oz, Number.POSITIVE_INFINITY), zz.buffers[Xz] = oz;
        const vz = zz.R6[Xz] + (Oz ? tz.gpuOffset(Oz) : 0);
        vz !== (null !== (Wz = Fz) && void 0 !== Wz ? Wz : zz.offsets)[Xz] && (Fz ??= zz.offsets.slice(), Fz[Xz] = vz), zz.ends[Xz] = Oz ? tz.gpuEnd(Oz) : oz.size
      }
      return Fz && (zz.offsets = Fz), !0
    }

    function SX(zz, tz, sz, Fz) {
      if (tz <= zz.fitInstances) return null;
      const {
        layout: Wz,
        ends: Xz,
        offsets: Oz,
        slotData: oz,
        R6: vz
      } = zz;
      let Uz = !1;
      for (let Kz = 0; Kz < Wz.buffers.length; Kz++) {
        const zz = Wz.instanceEnds[Kz];
        if (zz < 0) continue;
        const Fz = (tz - 1) * Wz.buffers[Kz].arrayStride + zz;
        if (Xz[Kz] - Oz[Kz] < Fz) return {
          index: Kz,
          needed: Fz
        };
        const uz = oz[Kz];
        uz && sz.cover(uz, vz[Kz] + Fz) && (Uz = !0)
      }
      return Uz && aX(zz, sz, Fz), zz.fitInstances = tz, null
    }
    var VX = sz(37250),
      RX = sz(37277);
    const pX = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      fX = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      EX = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      zO = `((vertexInputs.aPackedLightLevels >> 16u) | ${vt.c.placed}u)`,
      tO = "u32(vertexInputs.aShaderPackItem.x)",
      sO = `${vt.c.lifeform}u`;

    function FO(zz) {
      return "item" === zz.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const WO = "bloxdSpEnchant",
      XO = "floor(finalWorld[3].xyz)";

    function OO(zz, tz, sz) {
      return "placed" === tz.kind && zz.reads[sz].includes("bloxdFragmentBlockPosition")
    }

    function oO(zz, tz) {
      let [sz, Fz] = zz;
      return sz === tz.point && Fz === tz.code
    }

    function vO(zz, tz) {
      var sz, Fz, Wz;
      const Xz = null === (sz = zz.find((zz => zz.texture))) || void 0 === sz ? void 0 : sz.texture,
        Oz = null === (Fz = zz.find((zz => zz.enchantTier))) || void 0 === Fz ? void 0 : Fz.enchantTier,
        oz = null === (Wz = zz.find((zz => zz.overlay))) || void 0 === Wz ? void 0 : Wz.overlay,
        vz = oz ? tz.filter((zz => oO(zz, oz))).length : 0;
      return oz && 1 === vz ? {
        texture: Xz,
        overlay: oz,
        enchantTier: Oz
      } : {
        texture: Xz,
        enchantTier: Oz
      }
    }

    function UO(zz) {
      if ("item" === zz.kind) {
        return {
          vertexFlags: `(${tO} & 0xffffu)`,
          varying: "vPackItem",
          value: tO,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return zz.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: zO,
        varying: "vPackFlags",
        value: zO,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function KO(zz) {
      return "lifeform" === zz.kind ? sO : "0u"
    }

    function uO(zz) {
      return !!zz.BLOXD_PLUGIN_ENCHANTMENT
    }

    function NO(zz, tz) {
      const {
        enchantTier: sz
      } = tz;
      return sz && uO(tz.defines) && "lifeform" === tz.kind && BO(zz, "enchantTier") ? sz : null
    }

    function bO(zz, tz) {
      return uO(tz.defines) && BO(zz, "enchantSpeed")
    }

    function wO(zz) {
      const {
        overlay: tz,
        defines: sz
      } = zz;
      if (!tz || !sz.DIFFUSE) return null;
      const Fz = sz.VERTEXCOLOR || sz.INSTANCESCOLOR && sz.INSTANCES;
      return `vec4f(${tz.colour}.rgb * uniforms.vDiffuseInfos.y${Fz?" * fragmentInputs.vColor.rgb":""}, ${tz.colour}.a)`
    }
    const DO = "fragmentInputs.vPackTexture";

    function gO(zz) {
      const {
        atlas: tz,
        defines: sz,
        texture: Fz
      } = zz;
      if (tz || !sz.DIFFUSE) return null;
      if (Fz) return {
        texture: "diffuseSampler",
        ...Fz
      };
      const Wz = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===sz.DIFFUSEDIRECTUV?"vMainUV1":2===sz.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== zz.kind) return Wz;
      if (!sz.BLOXD_PLUGIN_ANIMATED) return {
        ...Wz,
        id: DO
      };
      const Xz = xz.e.WGSL,
        Oz = (0, xz.Ab)(Xz, "uAnimStatesNum"),
        oz = (0, xz.fb)(Xz, (0, VX.h)(Xz), Oz),
        vz = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Oz})`,
        layers: [oz],
        uv: `vec2f(${vz}.x, ${vz}.y * ${Oz} - ${oz})`,
        levelUv: vz,
        id: DO
      }
    }

    function HO(zz, tz) {
      return "box" === tz.kind && !!zz.hooks.surface && null !== gO(tz)
    }

    function BO(zz, tz) {
      return zz.reads.fragment.includes(tz)
    }

    function PO(zz) {
      return !!zz.BLOXD_LIGHTING && !zz.BLOXD_UNLIT
    }

    function rO(zz, tz, sz, Fz) {
      const Wz = zz.filter((zz => {
        let [sz, Fz] = zz;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === sz && Fz === tz
      }));
      if (1 !== Wz.length) throw new Error(`A model program for shader packs has ${0===Wz.length?"no":"more than one"} ${Fz} code before fog (lite/modelShaderPack.ts)`);
      return zz.map((zz => zz === Wz[0] ? [zz[0], sz] : zz))
    }

    function YO(zz, tz, sz, Fz) {
      const {
        hooks: Wz
      } = zz, {
        kind: Xz,
        defines: Oz
      } = tz, oz = [...sz];
      var vz;
      tz.atlas && Wz.surface && oz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", qs("atlasIdxIn")]), "item" === Xz && oz.push(["CUSTOM_VERTEX_DEFINITIONS", (0, xz.f)(xz.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), HO(zz, tz) && oz.push(["CUSTOM_VERTEX_DEFINITIONS", (0, xz.f)(xz.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (vz = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${ns}[min(u32(${vz}) - 1u, arrayLength(&${ns}) - 1u)], ${vz} > 0.5);\n`)]);
      const Uz = UO(tz);
      Uz && (Wz.surface || Wz.light) && oz.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Uz.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Uz.varying} = ${Uz.value};`]);
      let Kz = Fz;
      if (OO(zz, tz, "fragment") && (oz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${XO});`]), Kz = [...Kz, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), BO(zz, "localPosition") && oz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${FO(tz)};`]), uO(Oz) && Wz.surface) {
        bO(zz, tz) && oz.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const sz = NO(zz, tz);
        sz && oz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${sz});`]);
        const Fz = (0, xz.pb)(xz.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Kz = [...rO(Kz, (0, RX.i)(xz.e.WGSL), Fz, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, RX.d)(WO)]]
      }
      const {
        overlay: uz
      } = tz;
      uz && wO(tz) && Wz.surface && (Kz = Kz.filter((zz => !oO(zz, uz))));
      const Nz = Wz.light ? function(zz) {
        return "placed" === zz.kind ? {
          name: "terrain",
          engine: (0, mt.S)(xz.e.WGSL),
          pack: (0, mt.jb)(xz.e.WGSL)
        } : zz.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, mt.J)(xz.e.WGSL),
          pack: (0, mt.eb)(xz.e.WGSL)
        } : null
      }(tz) : null;
      if (Nz && (Kz = rO(Kz, Nz.engine, Nz.pack, `${Nz.name} light`), "placed" !== Xz && PO(Oz))) {
        const zz = Oz.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, xz.Ab)(xz.e.WGSL, "uEntityLightLevels") : (0, xz.Gb)(xz.e.WGSL, "aLightLevels");
        oz.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${mt.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, mt.ib)(xz.e.WGSL, zz)])
      }
      return {
        vertexCode: oz,
        fragmentCode: Kz
      }
    }

    function xO(zz, tz, sz, Fz) {
      return ds(zz, tz, sz, Fz, "model")
    }
    const mO = "\t@builtin(position) position: vec4f,\n";

    function JO(zz, tz) {
      const sz = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(zz)[0];
      return `${sz}${tz}${zz.slice(sz.length)}`
    }

    function IO(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Wz
      } = tz, Xz = Qs(tz, Fz), {
        kind: Oz,
        defines: oz
      } = sz, vz = function(zz, tz) {
        var sz, Fz, Wz;
        const {
          defines: Xz
        } = tz, Oz = UO(tz), oz = !!Xz.FOG, vz = uO(Xz), Uz = null !== (sz = null === Oz || void 0 === Oz ? void 0 : Oz.enchantTier) && void 0 !== sz ? sz : NO(zz, tz) ? "fragmentInputs.vPackEnchantTier" : "0u", Kz = "lifeform" === tz.kind && !Xz.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Fz = null === Oz || void 0 === Oz ? void 0 : Oz.vertexFlags) && void 0 !== Fz ? Fz : KO(tz),
          vertexLocalPosition: FO(tz),
          flags: null !== (Wz = null === Oz || void 0 === Oz ? void 0 : Oz.flags) && void 0 !== Wz ? Wz : KO(tz),
          normal: "normalW",
          alpha: Kz ? "alpha * baseColor.a" : "alpha",
          alphaOut: Kz ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: oz ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: oz ? "1.0 - fog" : "0.0",
          enchantTier: Uz,
          enchantColour: vz ? `${WO}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: bO(zz, tz) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: BO(zz, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: wO(tz)
        }
      }(tz, sz), Uz = zz.textures.filter((zz => /^textureAtlas\d+$/.test(zz.name))).length, Kz = sz.atlas && Uz > 0 ? {
        count: Uz,
        layers: sz.atlas.layers,
        width: sz.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: zz.material.slots.has("uAnimDataPerTex") ? (tz, sz) => GF(tz, sz, function(zz) {
          const tz = zz.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            wN: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: zz => `uniforms.uAnimDataPerTex[${zz}]${tz}`
          }
        }(zz)) : null
      } : null, uz = "placed" === Oz ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Nz = null !== Kz && void 0 !== Kz ? Kz : gO(sz), bz = function(zz, sz) {
        let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Ct.F)()}${is(tz,sz)}${Fz}${Vs(zz)}${As}${uz}${tz.code}`
      };
      let {
        vertex: wz,
        fragment: Dz
      } = zz;
      const gz = ps(Wz, vz);
      if (gz) {
        const zz = OO(tz, sz, "vertex") ? `\tbloxdSpCell = ${XO};\n` : "";
        wz = xO(wz, pX, `${zz}${gz.slice(1)}${pX}`, "vertex")
      }
      const Hz = `${Ls(tz,Xz,function(zz,tz){return tz.TWOSIDEDLIGHTING?zz:`select(-(${zz}), ${zz}, fragmentInputs.frontFacing)`}(vz.normal,oz),vz.flags)}${fs(Wz,tz.strict,tz.program,Nz,vz)}`;
      Hz && (Dz = xO(Dz, fX, `${Hz.slice(1)}${fX}`, "surface")), Xz && tz.sunShadow && !oz.TWOSIDEDLIGHTING && (Dz = xO(Dz, mO, `${mO}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Bz = tF(Wz);
      if (Bz) {
        const zz = zF(Wz, PO(oz), !0, vz);
        Dz = xO(Dz, EX, `${zz}${Bz.slice(1)}${EX}`, "light")
      }
      const Pz = HO(tz, sz) ? as : "";
      return {
        ...zz,
        vertex: JO(wz, bz(Kz, !1, Pz)),
        fragment: JO(Dz, bz(Nz, Xz))
      }
    }
    const CO = {
      name: "earthSky",
      uniqueId: -1
    };
    class eO {
      constructor(zz) {
        this.resources = zz, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const zz of this.instances.values()) zz.released = !0, this.resources.destroyBuffer(zz.buffer);
        this.instances.clear()
      }
    }

    function ZO(zz) {
      return zz.failed && null !== zz.packGroup
    }
    class GO {
      constructor(zz, tz, sz) {
        this.device = zz, this.resources = tz, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.T6 = new TX, this.modelMeshes = new GX, this.thinBundle = void 0, this.binder = new pW, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new BX((zz => this.modelSlot(zz).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Ut.c)("Lite: "), this.renderStates = new bX(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (zz, tz) => this.keepSteady(zz, tz), this.lists = new fW(this.modelMeshes, this.T6, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new UX(tz, this.warnOnce, ((zz, tz, sz) => this.programWithModel(zz, tz, sz)), ZO), this.vertexLayouts = new xX(tz, zz.limits, this.warnOnce), this.sceneLayout = tt(zz), this.frameLayout = zz.createBindGroupLayout({
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
        }), this.frameBuffer = zz.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new IX(zz, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = zz.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new AX(zz, new IX(zz, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (zz, tz, sz) => this.pipelineFor(zz, tz, sz),
          pipelineCompiling: (zz, tz) => !zz.program.failed && !1 !== this.pipelines.get(`${zz.pipelineKey}|${tz}`),
          sceneGroup: zz => {
            const tz = sz(zz);
            return tz || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), tz
          }
        }), tz.onDestroy = zz => {
          this.thinBundle.resourceDestroyed(zz)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wz = {
          order: zz,
          isTransparent: tz,
          _direct: !tz,
          bind: (zz, tz) => this.createBinding(Wz, tz, sz, Fz)
        };
        return Wz
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(zz, tz, sz) {
        var Fz;
        let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = tz, this.drawDefines.view = tz, this.thinBundle.bY(), this.writeFrameUniforms();
        const Xz = null !== (Fz = null === Wz || void 0 === Wz ? void 0 : Wz.defineFor("model")) && void 0 !== Fz ? Fz : 0;
        this.drawDefines.modelPackVariant = Xz, Wz && 0 !== Xz && (this.packInputs ??= new nX(this.device, Wz.textureLayers(), this.sunShadow), this.packInputs.write(Wz, tz.eye, Wz.Xg())), this.lists.clear(), this.slotCount = 0;
        const Oz = zz.activeCamera;
        this.T6.select(Oz, this.keepSteadyBase), this.modelMeshes.select(Oz, tz), sz && this.pushEarthSky(sz), this.lists.collect(zz), this.thinBundle.rY(), this.uploadMeshSlots()
      }
      pushDraws(zz, tz, sz, Fz, Wz, Xz) {
        let Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const oz = Xz.length;
        for (let vz = 0; vz < sz; vz++) {
          const sz = tz[vz];
          let oz = this.retainedDraw(zz, sz, Fz, Wz);
          if (void 0 === oz && (oz = this.drawFor(zz, sz, Fz, Wz), this.retain(sz, oz)), oz) {
            const zz = sz.owner,
              tz = Oz ? Oz[vz] : -1;
            oz.slotOffset = tz < 0 ? this.writeMeshSlot(zz.getWorldMatrix().m, zz.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[tz], 16 * tz), Xz.push(oz)
          }
        }
        return Xz.length - oz
      }
      bundleDraws(zz, tz, sz) {
        let Fz = 0;
        for (const Wz of tz) {
          let tz = this.retainedDraw(zz, Wz, sz, !1);
          const Xz = void 0 !== tz;
          if (void 0 === tz && (tz = this.drawFor(zz, Wz, sz, !1), this.retain(Wz, tz)), tz) {
            const zz = Wz.owner,
              sz = this.thinBundle.add(Wz, tz, zz.getWorldMatrix().m, zz.visibility);
            Xz && this.steadyFrom(Wz, tz, sz), Fz++
          }
        }
        return Fz
      }
      steadyFrom(zz, tz, sz) {
        const Fz = zz.owner,
          Wz = this.T6.base(Fz),
          Xz = Fz.material,
          {
            drawState: Oz,
            instance: oz
          } = tz.inputs.retained;
        if (!Wz || !Xz || 1 !== zz.parts.materials.length || eX(zz) !== Xz) return;
        const vz = Wz.steady ??= {
          unit: zz,
          material: Xz,
          visibility: 1,
          draw: tz,
          record: sz,
          drawState: Oz,
          instance: oz,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        vz.unit = zz, vz.material = Xz, vz.visibility = Fz.visibility, vz.draw = tz, vz.record = sz, vz.drawState = Oz, vz.instance = oz, vz.bindGroup = oz.bindGroup, vz.gpuVersion = this.resources.gpuBuffersVersion, vz.fitInstances = tz.inputs.fitInstances, vz.worldFlag = Fz.getWorldMatrix().updateFlag, vz.handedFrame = this.frame
      }
      keepSteady(zz, tz) {
        const sz = zz.steady;
        if (sz.handedFrame !== this.frame - 1 || (this.frame + sz.phase) % 8 === 0) return !1;
        const Fz = zz.mesh,
          {
            unit: Wz,
            draw: Xz,
            instance: Oz,
            drawState: oz
          } = sz,
          vz = Fz.forcedInstanceCount || Fz.E1;
        if (!Fz.isVisible || Fz.jFz || Fz.visibility !== sz.visibility || 0 === (Fz.layerMask & tz.layerMask) || Fz.material !== sz.material || 0 !== Fz.renderingGroupId || Fz.hasVertexAlpha || !this.drawDefines.definesHold(oz, Wz, oz.instancing) || sz.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Xz.inputs, Wz, oz.instancing, Xz.program) || Xz.program.failed || Oz.released || vz <= 0 || vz > sz.fitInstances) return !1;
        if (Oz.frame !== this.frame && this.bindMaterial(Oz, this.modelUniforms.refreshModelUniforms(Fz.aJ(), Oz, Oz.model, this.view)), !Oz.bindable || Oz.bindGroup !== sz.bindGroup) return !1;
        const Uz = Fz.computeWorldMatrix(),
          Kz = Uz.updateFlag !== sz.worldFlag;
        return sz.worldFlag = Uz.updateFlag, Xz.instances = vz, this.thinBundle.addAgain(sz.record, Xz, Kz ? Uz.m : null, sz.visibility), sz.handedFrame = this.frame, this.T6.drawn++, !0
      }
      retainedDraw(zz, tz, sz, Fz) {
        const Wz = this.inputs.get(tz),
          Xz = null === Wz || void 0 === Wz ? void 0 : Wz.retained;
        if (!Wz || !Xz) return;
        const {
          drawState: Oz,
          program: oz,
          instance: vz,
          instancing: Uz
        } = Xz, Kz = tz.owner;
        if (FX(Kz) !== Uz) return;
        const uz = this.instanceCount(Kz, Uz);
        if (uz <= 0) return null;
        if (vz.released || oz.failed || Oz.program !== oz || !this.drawDefines.programCurrent(Oz, tz, Uz, sz) || !this.inputsStamped(Wz, tz, Uz, oz) || Kz.isUnIndexed !== Xz.unIndexed || this.indexKey(tz) !== Xz.indexData) return;
        if (Xz.indexBuffer && Xz.gpuVersion !== this.resources.gpuBuffersVersion) {
          const zz = this.resources.gpuBuffer(Xz.indexData);
          if (!zz) return;
          Xz.indexBuffer = zz, Xz.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Nz = !1;
        if (vz.frame !== this.frame && (Nz = this.modelUniforms.refreshModelUniforms(zz, vz, vz.model, this.view)), !this.bindMaterial(vz, Nz) || !this.withGpuBuffers(Wz) || !this.instanceBuffersFit(Kz.name, Wz, uz)) return null;
        const bz = this.makeDraw(oz, Wz, this.renderStates.renderState(Oz.model, Kz, Fz, Wz.state), vz, uz);
        return this.setRange(bz, tz, Xz.indexBuffer, Xz.indexData), bz
      }
      retain(zz, tz) {
        const sz = this.drawDefines.drawStates.get(zz);
        if (!tz || !sz || sz.program !== tz.program) {
          const tz = this.inputs.get(zz);
          return void(tz && (tz.retained = null))
        }
        const Fz = zz.owner,
          Wz = sz.instancing,
          Xz = this.indexKey(zz),
          Oz = tz.inputs.retained;
        Oz ? (Oz.drawState = sz, Oz.instancing = Wz, Oz.program = tz.program, Oz.instance = tz.material, Oz.indexData = Xz, Oz.unIndexed = Fz.isUnIndexed, Oz.indexBuffer = tz.indexBuffer, Oz.gpuVersion = this.resources.gpuBuffersVersion) : tz.inputs.retained = {
          drawState: sz,
          instancing: Wz,
          program: tz.program,
          instance: tz.material,
          indexData: Xz,
          unIndexed: Fz.isUnIndexed,
          indexBuffer: tz.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(zz, tz, sz, Fz) {
        const Wz = tz.owner,
          Xz = eX(tz);
        if (!Xz) return null;
        const Oz = Xz.getClassName();
        let oz = null;
        if (function(zz) {
            return "LinesMesh" === zz.getClassName()
          }(Wz)) {
          if (! function(zz) {
              return "ShaderMaterial" === zz.getClassName() && "color" === zz.shaderPath
            }(Xz)) return this.warnOnce(`lines:${Oz}`, `A LinesMesh with a ${Oz} is not drawn yet (${Xz.name})`), null;
          oz = Wz
        } else if ("StandardMaterial" !== Oz && "LiteMaterial" !== Oz) return this.warnOnce(`class:${Oz}`, `${Oz} is not drawn yet (${Xz.name})`), null;
        const vz = FX(Wz),
          Uz = this.instanceCount(Wz, vz);
        if (Uz <= 0) return null;
        const Kz = oz ? this.lineProgramFor(Wz, sz, vz) : this.drawDefines.programFor(zz, tz, Xz, sz, vz);
        if (!Kz || Kz.failed) return null;
        const uz = oz ? null : this.drawDefines.drawStates.get(tz).model,
          Nz = uz ? this.modelInstance(uz, Kz) : this.materialInstance(Wz, Kz);
        let bz = !1;
        if (Nz.frame !== this.frame && (oz ? Bz(Nz.ubo, oz) : bz = this.modelUniforms.refreshModelUniforms(zz, Nz, Nz.model, this.view)), !this.bindMaterial(Nz, bz)) return null;
        const wz = this.meshInputs(tz, Kz, vz);
        if (!wz || !this.instanceBuffersFit(Wz.name, wz, Uz)) return null;
        const Dz = this.indexKey(tz);
        let gz = null;
        if (Dz && !Wz.isUnIndexed && (gz = this.resources.gpuBuffer(Dz), !gz)) return null;
        const Hz = this.renderStates.renderState(null !== uz && void 0 !== uz ? uz : Xz, Wz, Fz, wz.state, oz ? "line-list" : "triangle-list"),
          Pz = this.makeDraw(Kz, wz, Hz, Nz, Uz);
        return this.setRange(Pz, tz, gz, Dz), Pz
      }
      indexKey(zz) {
        const tz = oX(zz);
        return tz ? this.resources.modelIndex(tz) : null
      }
      setRange(zz, tz, sz, Fz) {
        sz && (zz.indexBuffer = sz, zz.indexFormat = this.resources.indexFormat(Fz));
        const Wz = 4 * tz.range + (sz ? 0 : 2);
        zz.unit = tz, zz.first = tz.parts.du[Wz], zz.count = tz.parts.du[Wz + 1]
      }
      makeDraw(zz, tz, sz, Fz, Wz) {
        tz.state !== sz && (tz.state = sz, tz.pipelineKey = `${zz.id}|${tz.layout.key}|${sz.key}`, tz.pipeline = null);
        const Xz = tz.draw ??= {
          program: zz,
          inputs: tz,
          pipelineKey: "",
          layout: tz.layout,
          state: sz,
          material: Fz,
          slotOffset: 0,
          vertexBuffers: tz.buffers,
          vertexOffsets: tz.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Wz,
          unit: null
        };
        return Xz.program = zz, Xz.pipelineKey = tz.pipelineKey, Xz.state = sz, Xz.material = Fz, Xz.vertexOffsets = tz.offsets, Xz.indexBuffer = null, Xz.instances = Wz, Xz
      }
      instanceCount(zz, tz) {
        switch (tz) {
          case "thin":
            return zz.forcedInstanceCount || zz.E1;
          case "instanced":
            return this.prepareInstances(zz);
          case "none":
            return 1
        }
      }
      prepareInstances(zz) {
        const tz = function(zz, tz) {
          const sz = tz._userInstancedBuffersStorage,
            Fz = zz.batchUploads.get(tz);
          if (Fz) {
            var Wz;
            if (Fz.layout === (null !== (Wz = null === sz || void 0 === sz ? void 0 : sz.interleavedKinds) && void 0 !== Wz ? Wz : null)) return Fz;
            Fz.release()
          }
          return new az(zz, tz, sz)
        }(this.resources, zz);
        return tz.frame !== this.frame && tz.pack(zz, this.modelMeshes.instanceBatch(zz), this.modelMeshes.worlds, this.frame), tz.count
      }
      programWithModel(zz, tz, sz) {
        const Fz = this.modelSlot(zz),
          Wz = KX(Fz, zz, sz),
          Xz = this.drawDefines.modelPackKind(zz),
          Oz = Xz ? function(zz, tz, sz, Fz) {
            const Wz = (0, Iz.z)(zz, mz.i.name),
              Xz = [];
            for (const {
                feature: vz,
                state: Uz,
                active: Kz
              }
              of zz.features) {
              var Oz, oz;
              const zz = Kz ? null === (Oz = (oz = (0, Kt.g)(vz)).Cw) || void 0 === Oz ? void 0 : Oz.call(oz, Uz) : void 0;
              zz && Xz.push(zz)
            }
            return {
              kind: tz,
              atlas: null !== Wz && void 0 !== Wz && Wz.active ? (0, mz.c)(Wz.state) : null,
              defines: sz,
              ...vO(Xz, Fz)
            }
          }(zz, Xz, tz, Fz.fragmentCode) : null;
        if (Oz && function(zz) {
            const tz = zz.defines;
            return (null === zz.atlas || !!tz.DIFFUSE && 1 === tz.DIFFUSEDIRECTUV) && !!tz.NORMAL && !tz.REFLECTION && !tz.EMISSIVEASILLUMINATION && !tz.LINKEMISSIVEWITHDIFFUSE
          }(Oz)) {
          const sz = this.modelPackProgram(zz, tz, `${Wz}#${Xz}#sp${this.drawDefines.modelPackVariant}`, Fz, Oz);
          if (sz && !sz.failed) return sz
        }
        const oz = this.programs.get(Wz);
        if (oz || this.unbuildable.has(Wz)) return null !== oz && void 0 !== oz ? oz : null;
        let vz;
        try {
          vz = KW({
            defines: XX(tz),
            vertexCode: Fz.vertexCode,
            fragmentCode: Fz.fragmentCode,
            pluginUniforms: Fz.pluginUniforms
          })
        } catch (Uz) {
          return this.unbuildable.add(Wz), this.warnOnce(`build:${Wz}`, `could not build a program for ${zz.name}: ${String(Uz)}`), null
        }
        return this.createProgram(Wz, vz, "standard")
      }
      modelPackProgram(zz, tz, sz, Fz, Wz) {
        const Xz = this.programs.get(sz);
        if (Xz || this.unbuildable.has(sz)) return null !== Xz && void 0 !== Xz ? Xz : null;
        const Oz = this.drawDefines.modelPackVariant;
        let oz;
        try {
          const zz = function(zz) {
              return (0, et.b)(zz, "model")
            }(Oz),
            sz = YO(zz, Wz, Fz.vertexCode, Fz.fragmentCode);
          oz = IO(KW({
            defines: XX(tz),
            ...sz,
            pluginUniforms: Fz.pluginUniforms
          }), zz, Wz, !!this.sunShadow)
        } catch (Kz) {
          return this.unbuildable.add(sz), this.warnOnce(`build:${sz}`, `could not build a shader pack program for ${zz.name}, which draws without the pack: ${String(Kz)}`), null
        }
        const vz = LX(Oz, !!this.sunShadow),
          Uz = {
            group: this.packInputs.bindGroupFor(null, vz),
            layout: kX(this.device, {
              depth: !1,
              sunShadow: vz
            })
          };
        return this.createProgram(sz, oz, function(zz) {
          return `standard-sp${zz}`
        }(Oz), Uz)
      }
      lineProgramFor(zz, tz, sz) {
        const Fz = Hz(zz, sz, tz, this.view);
        let Wz = this.linePrograms.get(Fz);
        var Xz;
        return Wz || (Wz = this.createProgram(`lines#${Fz}`, (Xz = function(zz) {
          const tz = new Map;
          for (let sz = 0; sz < Uz.length; sz++) zz & 1 << sz && tz.set(Uz[sz], !0);
          return tz
        }(Fz), wW({
          defines: Xz,
          vertex: NW,
          fragment: bW,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Fz, Wz)), Wz
      }
      createProgram(zz, tz, sz) {
        var Fz;
        let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Xz = this.nextProgramId++,
          Oz = `${sz}-${Xz}`,
          oz = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          vz = [{
            binding: 0,
            visibility: oz,
            buffer: {
              type: "uniform"
            }
          }];
        for (const uz of tz.textures) vz.push({
          binding: uz.binding,
          visibility: oz,
          texture: {
            viewDimension: uz.dimension
          }
        }), vz.push({
          binding: uz.samplerBinding,
          visibility: oz,
          sampler: {}
        });
        const Uz = this.device.createBindGroupLayout({
            label: Oz,
            entries: vz
          }),
          Kz = {
            key: zz,
            id: Xz,
            kind: sz,
            program: tz,
            vertex: this.device.createShaderModule({
              label: `${Oz}-vertex`,
              code: tz.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Oz}-fragment`,
              code: tz.fragment
            }),
            materialLayout: Uz,
            pipelineLayout: this.device.createPipelineLayout({
              label: Oz,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Uz, ...Wz ? [Wz.layout] : []]
            }),
            packGroup: null !== (Fz = null === Wz || void 0 === Wz ? void 0 : Wz.group) && void 0 !== Fz ? Fz : null,
            failed: !1
          };
        return this.programs.set(zz, Kz), Kz
      }
      writeFrameUniforms() {
        const zz = this.frameUniforms;
        HX(this.view, zz), this.device.queue.writeBuffer(this.frameBuffer, 0, zz)
      }
      materialInstance(zz, tz) {
        let sz = this.materials.get(zz);
        if (!sz) {
          const tz = new Map;
          this.materials.set(zz, tz), zz.qJ.addOnce((() => {
            for (const zz of tz.values()) zz.released = !0, this.resources.destroyBuffer(zz.buffer);
            this.materials.delete(zz)
          })), sz = tz
        }
        let Fz = sz.get(tz.key);
        return Fz || (Fz = this.newMaterialInstance(zz, null, tz), sz.set(tz.key, Fz)), Fz
      }
      modelInstance(zz, tz) {
        const sz = this.modelSlot(zz);
        let Fz = sz.instances.get(tz.key);
        return Fz || (Fz = this.newMaterialInstance(zz, zz, tz), sz.instances.set(tz.key, Fz)), Fz
      }
      modelSlot(zz) {
        let tz = zz.gpu[ez.i.lite];
        return tz || (tz = new eO(this.resources), zz.gpu[ez.i.lite] = tz), tz
      }
      newMaterialInstance(zz, tz, sz) {
        const Fz = sz.program.material.floats,
          Wz = new Float32Array(Fz),
          Xz = new Map;
        return {
          owner: zz,
          model: tz,
          program: sz,
          data: Wz,
          uploaded: new Float32Array(Fz).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${zz.name}-uniforms`,
            size: Math.max(16, 4 * Fz),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Xz,
          ubo: new gX(sz.program.material.slots, Wz, Xz),
          bindGroup: null,
          bound: new Array(2 * sz.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(zz) {
        var tz;
        const sz = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: PW + rW,
            fragment: PW + YW,
            attributes: [],
            material: BW,
            textures: []
          }, "earthSky"),
          Fz = this.earthSkyUniforms ??= this.newMaterialInstance(CO, null, sz);
        this.earthSkyFrom !== zz && (this.earthSkyFrom = zz, Fz.data.fill(0)), GW(Fz.ubo, zz, this.view);
        const Wz = this.vertexInputs(sz, CO, "earthSky", sz, null);
        if (sz.failed || !Wz || !this.bindMaterial(Fz, !1)) return;
        const Xz = null !== (tz = Wz.state) && void 0 !== tz ? tz : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Oz = this.makeDraw(sz, Wz, Xz, Fz, 1);
        Oz.count = DW.length;
        const oz = TW(zz, this.view);
        Oz.slotOffset = this.writeMeshSlot(oz, 1), this.lists.skyDraws.push(Oz)
      }
      uploadIfChanged(zz) {
        const {
          data: tz,
          uploaded: sz
        } = zz;
        for (let Fz = 0; Fz < tz.length; Fz++)
          if (tz[Fz] !== sz[Fz]) return sz.set(tz), void this.device.queue.writeBuffer(zz.buffer, 0, tz)
      }
      bindMaterial(zz, tz) {
        return zz.frame !== this.frame && (zz.frame = this.frame, tz || this.uploadIfChanged(zz), zz.bindable = this.bindTextures(zz)), zz.bindable
      }
      bindTextures(zz) {
        const {
          program: tz,
          bound: sz
        } = zz, Fz = tz.program.textures;
        let Wz = !zz.bindGroup,
          Xz = !0;
        for (let Oz = 0; Oz < Fz.length; Oz++) {
          const tz = zz.textures.get(Fz[Oz].name),
            oz = tz ? this.resources.boundTexture(tz) : null;
          oz ? sz[2 * Oz] === oz.view && sz[2 * Oz + 1] === oz.sampler || (sz[2 * Oz] = oz.view, sz[2 * Oz + 1] = oz.sampler, Wz = !0) : (tz || zz.ubo.expected.has(Fz[Oz].name) || this.warnOnce(`texture:${zz.owner.name}:${Fz[Oz].name}`, `${zz.owner.name} has no ${Fz[Oz].name}`), Xz = !1)
        }
        if (!Xz) return Wz && (zz.bindGroup = null), !1;
        if (Wz) {
          const Wz = [{
            binding: 0,
            resource: {
              buffer: zz.buffer
            }
          }];
          for (let zz = 0; zz < Fz.length; zz++) Wz.push({
            binding: Fz[zz].binding,
            resource: sz[2 * zz]
          }), Wz.push({
            binding: Fz[zz].samplerBinding,
            resource: sz[2 * zz + 1]
          });
          zz.bindGroup = this.device.createBindGroup({
            label: `${zz.owner.name}-material`,
            layout: tz.materialLayout,
            entries: Wz
          })
        }
        return !0
      }
      writeMeshSlot(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, zz, tz, sz), this.slotCount++ * lF
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(zz, tz, sz, Fz, Wz) {
        let Xz = this.inputs.get(zz);
        if (!Xz || Xz.program !== Fz || !mX(tz, Xz, this.resources, Wz)) {
          var Oz;
          if (Xz = null !== (Oz = this.vertexLayouts.resolveInputs(tz, sz, Fz, Wz)) && void 0 !== Oz ? Oz : void 0, !Xz) return null;
          this.inputs.set(zz, Xz)
        }
        return this.withGpuBuffers(Xz)
      }
      meshInputs(zz, tz, sz) {
        const Fz = this.inputs.get(zz);
        if (Fz && this.inputsStamped(Fz, zz, sz, tz)) return this.withGpuBuffers(Fz);
        const Wz = zz.owner,
          Xz = oX(zz),
          Oz = this.vertexInputs(zz, Wz, Wz.name, tz, Xz);
        return Oz && (Oz.geometry = vX(zz), Oz.instanceLayout = this.drawDefines.instanceLayout(Wz, sz)), Oz
      }
      inputsStamped(zz, tz, sz, Fz) {
        return function(zz, tz, sz, Fz) {
          return zz.program === sz && zz.geometry === vX(tz) && zz.instanceLayout === Fz
        }(zz, tz, Fz, this.drawDefines.instanceLayout(tz.owner, sz))
      }
      withGpuBuffers(zz) {
        return aX(zz, this.resources, this.zeroBuffer) ? zz : null
      }
      instanceBuffersFit(zz, tz, sz) {
        const Fz = SX(tz, sz, this.resources, this.zeroBuffer);
        if (Fz) {
          const Wz = tz.ends[Fz.index] - tz.offsets[Fz.index] + tz.R6[Fz.index];
          return this.warnOnce(`overrun:${zz}`, `${zz} draws ${sz} instances from a ${Wz}-byte buffer (${Fz.needed} needed)`), !1
        }
        return !0
      }
      createBinding(zz, tz, sz, Fz) {
        const Wz = `${tz._colorFormat}|${tz._depthStencilFormat}|${tz._depthCompare}|${tz._sampleCount}`,
          Xz = Ot(this.device, tz);
        if (zz === this.skyLastRenderable) {
          let sz = null;
          return {
            renderable: zz,
            pipeline: Xz,
            draw: zz => sz ? this.drawSky(zz, tz, Wz, sz) : 0,
            update: zz => {
              sz = zz
            }
          }
        }
        return {
          renderable: zz,
          pipeline: Xz,
          draw: zz => (Fz ? Fz.execute(zz, tz, Wz) : 0) + this.drawList(zz, tz, Wz, sz)
        }
      }
      drawSky(zz, tz, sz, Fz) {
        const Wz = this.lists.skyDraws,
          Xz = Wz.length > 0;
        if (Xz) {
          var Oz;
          const sz = (null !== (Oz = tz._depthCompare) && void 0 !== Oz ? Oz : st).startsWith("greater") ? 0 : 1;
          zz.setViewport(0, 0, Fz.targetWidth, Fz.targetHeight, sz, sz)
        }
        const oz = this.drawList(zz, tz, sz, Wz);
        return Xz && zz.setViewport(0, 0, Fz.targetWidth, Fz.targetHeight, 0, 1), oz
      }
      drawList(zz, tz, sz, Fz) {
        let Wz = 0;
        const Xz = this.binder;
        Xz.reset();
        for (const Oz of Fz) {
          const Fz = this.pipelineFor(Oz, tz, sz);
          Fz && (Xz.bind(zz, Oz, Fz, this.meshSlots.bindGroup, Oz.slotOffset), Oz.indexBuffer ? zz.drawIndexed(Oz.count, Oz.instances, Oz.first, 0, 0) : zz.draw(Oz.count, Oz.instances, Oz.first, 0), Wz++)
        }
        return Wz
      }
      pipelineFor(zz, tz, sz) {
        var Fz, Wz;
        if (zz.program.failed) return null;
        const Xz = zz.inputs;
        if (Xz.pipeline && Xz.pipelineTarget === sz) return Xz.pipeline;
        const Oz = `${zz.pipelineKey}|${sz}`,
          oz = this.pipelines.get(Oz);
        if (void 0 !== oz) return oz && (Xz.pipeline = oz, Xz.pipelineTarget = sz), oz || null;
        this.pipelines.set(Oz, null);
        const {
          program: vz,
          layout: Uz,
          state: Kz
        } = zz, uz = {
          label: `standard-${vz.id}`,
          layout: vz.pipelineLayout,
          vertex: {
            module: vz.vertex,
            entryPoint: "main",
            buffers: Uz.buffers
          },
          fragment: pz({
            module: vz.fragment,
            entryPoint: "main"
          }, tz, Kz.blend, Kz.colourWrite),
          depthStencil: tz._depthStencilFormat ? {
            format: tz._depthStencilFormat,
            depthCompare: null !== (Fz = null !== (Wz = Kz.depthCompare) && void 0 !== Wz ? Wz : tz._depthCompare) && void 0 !== Fz ? Fz : st,
            depthWriteEnabled: Kz.depthWrite,
            depthBias: Kz.depthBias,
            depthBiasSlopeScale: Kz.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: tz._sampleCount
          },
          primitive: {
            topology: Kz.topology,
            frontFace: Kz.frontFace,
            cullMode: Kz.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(uz).then((zz => {
          this.compiling--, this.pipelines.set(Oz, zz)
        }), (zz => {
          this.compiling--, this.reportFailure(vz, Oz, zz)
        })), null
      }
      forEachSunShadowCaster(zz) {
        const tz = this.caster,
          sz = (sz, Fz, Wz) => {
            const Xz = sz.unit && function(zz) {
              const tz = zz.material.model;
              return null !== tz && (tz.lifeform || tz.item) && tz.castsSunShadow && "triangle-list" === zz.state.topology
            }(sz) ? oX(sz.unit) : null;
            if (!Xz) return;
            const Oz = sz.unit.owner;
            switch (tz.geometry = Xz, tz.skip = Oz.noSunShadowVertices, tz.indexed = null !== sz.indexBuffer, tz.first = sz.first, tz.count = sz.count, tz.PN = Fz, tz.worldAt = Wz, tz.instances = null, tz.instanceCount = 1, tz.thin = !1, FX(Oz)) {
              case "thin": {
                const zz = Oz._thinInstanceDataStorage.matrixData;
                if (!zz) return;
                tz.instances = zz, tz.instanceCount = Math.min(sz.instances, zz.length / 16), tz.thin = !0;
                break
              }
              case "instanced": {
                const zz = this.resources.batchUploads.get(Oz);
                if (!zz || zz.frame !== this.frame || !this.writeBatchCasters(zz)) return;
                break
              }
            }
            zz(tz)
          };
        for (const Fz of this.lists.opaqueDraws) sz(Fz, this.meshSlots.data, Fz.slotOffset / 4);
        this.thinBundle.forEachDrawn(sz)
      }
      writeBatchCasters(zz) {
        const {
          caster: tz
        } = this, sz = zz.packedMatrices, Fz = zz.count;
        tz.instances = sz, tz.instanceCount = Fz;
        let Wz = -1;
        for (let Xz = 0; Xz < Fz; Xz++) {
          const tz = TO(zz.packedRowMesh(Xz));
          tz && Wz < 0 ? (this.casterWorlds.length < 16 * Fz && (this.casterWorlds = new Float32Array(sz.length)), this.casterWorlds.set(sz.subarray(0, 16 * Xz)), Wz = Xz) : !tz && Wz >= 0 && (this.casterWorlds.set(sz.subarray(16 * Xz, 16 * Xz + 16), 16 * Wz), Wz++)
        }
        return Wz >= 0 && (tz.instances = this.casterWorlds, tz.instanceCount = Wz), tz.instanceCount > 0
      }
      async reportFailure(zz, tz, sz) {
        const Fz = [];
        let Wz = !0;
        for (const [Xz, Oz] of [
            ["vertex", zz.vertex],
            ["fragment", zz.fragment]
          ]) {
          const zz = await Oz.getCompilationInfo();
          for (const tz of zz.messages) Wz &&= "error" !== tz.type, Fz.push(`${Xz}:${tz.lineNum}:${tz.linePos} ${tz.type}: ${tz.message}`)
        }
        if (Wz && !zz.packGroup) return this.pipelines.set(tz, !1), console.error(`Lite: pipeline ${tz} failed`, sz), void RW("mesh", zz.kind, sz);
        zz.failed || (zz.failed = !0, console.error(`Lite: program ${zz.id} failed`, sz, Fz.join("\n"), {
          program: zz.program,
          key: zz.key
        }), RW("mesh", zz.kind, sz, Wz ? null : Fz[0]))
      }
    }

    function TO(zz) {
      var tz, sz;
      const Fz = null === (tz = zz.uC) || void 0 === tz || null === (sz = tz.aShaderPackItem) || void 0 === sz ? void 0 : sz.x;
      return void 0 !== Fz && 0 !== (Fz & vt.g)
    }
    var cO = sz(40803),
      jO = sz(40808),
      AO = sz(40811),
      yO = sz(40765);
    const MO = [0, 3, 1, 4, 2, 5];

    function dO(zz, tz, sz, Fz, Wz) {
      const Xz = sz[0].width;
      try {
        return Wz ? function(zz, tz, sz) {
          const Fz = (0, yO.e)(zz, sz, sz, 6);
          for (let Wz = 0; Wz < 6; Wz++)(0, yO.g)(zz, Fz, Wz, tz[MO[Wz]], {
            invertY: !1
          });
          return Fz.texture
        }(zz, sz, Xz) : function(zz, tz, sz, Fz) {
          const Wz = zz.createTexture({
            label: "sink-cube",
            size: {
              width: sz,
              height: sz,
              depthOrArrayLayers: 6
            },
            format: Fz,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Xz = 0; Xz < 6; Xz++) zz.queue.copyExternalImageToTexture({
            source: tz[MO[Xz]]
          }, {
            texture: Wz,
            origin: {
              x: 0,
              y: 0,
              z: Xz
            }
          }, {
            width: sz,
            height: sz
          });
          return Wz
        }(tz, sz, Xz, 1 === Fz ? "r8unorm" : "rgba8unorm")
      } finally {
        hO(sz)
      }
    }

    function hO(zz) {
      for (const tz of null !== zz && void 0 !== zz ? zz : []) null === tz || void 0 === tz || tz.close()
    }
    async function QO(zz) {
      const tz = [],
        sz = [];
      if (await Promise.all(zz.map(((zz, Fz) => (tz[Fz] = null, zz.then((zz => {
          tz[Fz] = zz
        }), (zz => {
          sz.push(zz)
        })))))), sz.length > 0) throw hO(tz), sz[0];
      return tz
    }
    class kO {
      constructor(zz) {
        this.au = zz, this.starts = [], this.lengths = [], this.used = 0, zz > 0 && (this.starts.push(0), this.lengths.push(zz))
      }
      allocate(zz) {
        const {
          starts: tz,
          lengths: sz
        } = this;
        for (let Fz = 0; Fz < tz.length; Fz++) {
          if (sz[Fz] < zz) continue;
          const Wz = tz[Fz];
          return sz[Fz] === zz ? (tz.splice(Fz, 1), sz.splice(Fz, 1)) : (tz[Fz] += zz, sz[Fz] -= zz), this.used += zz, Wz
        }
        return -1
      }
      free(zz, tz) {
        this.used -= tz;
        const sz = Math.min(zz + tz, this.au);
        sz > zz && this.release(zz, sz - zz)
      }
      grow(zz) {
        const tz = this.au;
        this.au = zz, this.release(tz, zz - tz)
      }
      truncate(zz) {
        const {
          starts: tz,
          lengths: sz
        } = this;
        for (let Fz = tz.length - 1; Fz >= 0 && tz[Fz] + sz[Fz] > zz; Fz--) tz[Fz] >= zz ? (tz.splice(Fz, 1), sz.splice(Fz, 1)) : sz[Fz] = zz - tz[Fz];
        this.au = zz
      }
      release(zz, tz) {
        const {
          starts: sz,
          lengths: Fz
        } = this;
        let Wz = 0,
          Xz = sz.length;
        for (; Wz < Xz;) {
          const tz = Wz + Xz >> 1;
          sz[tz] < zz ? Wz = tz + 1 : Xz = tz
        }
        const Oz = Wz,
          oz = Oz > 0 && sz[Oz - 1] + Fz[Oz - 1] === zz,
          vz = Oz < sz.length && zz + tz === sz[Oz];
        oz && vz ? (Fz[Oz - 1] += tz + Fz[Oz], sz.splice(Oz, 1), Fz.splice(Oz, 1)) : oz ? Fz[Oz - 1] += tz : vz ? (sz[Oz] = zz, Fz[Oz] += tz) : (sz.splice(Oz, 0, zz), Fz.splice(Oz, 0, tz))
      }
    }
    const iO = 256;
    class LO {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = zz, this.onReplaced = tz, this.mergeGap = sz, this.gpu = null, this.bytes = void 0, this.du = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Wz = Math.max(iO, Math.ceil(Fz / iO) * iO);
        this.bytes = new Uint8Array(Wz), this.du = new kO(Wz / iO)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(zz) {
        return Math.max(1, Math.ceil(zz / iO)) * iO
      }
      allocate(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz;
        const Fz = LO.slotBytes(zz),
          Wz = Fz / iO;
        let Xz = this.du.allocate(Wz);
        Xz < 0 && (this.grow(this.du.au + Wz), Xz = this.du.allocate(Wz));
        const Oz = Xz * iO;
        return this.growTo(Oz + Math.max(sz, Fz)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Oz, Oz + Fz), tz && this.bytes.set(new Uint8Array(tz.buffer, tz.byteOffset, Math.min(tz.byteLength, Fz)), Oz), this.markDirty(Oz, Oz + Fz), Oz
      }
      growTo(zz) {
        const tz = Math.ceil(zz / iO);
        tz > this.du.au && this.grow(tz)
      }
      free(zz, tz) {
        this.freed.push(zz, tz)
      }
      write(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Fz <= 0) return;
        this.bytes.set(new Uint8Array(tz.buffer, sz, Fz), zz);
        let Xz = zz + Fz;
        if (Wz) {
          const tz = zz + 4 * Math.ceil(Fz / 4);
          this.bytes.fill(0, Xz, tz), Xz = tz
        }
        this.markDirty(zz, Xz)
      }
      move(zz, tz, sz) {
        this.bytes.copyWithin(tz, zz, zz + sz), this.markDirty(tz, tz + sz)
      }
      flush() {
        for (const tz of this.retired) this.onReplaced(tz), tz.destroy();
        this.retired.length = 0;
        const zz = this.dirtyStarts.length;
        if (zz > 0) {
          const {
            dirtyStarts: tz,
            dirtyEnds: sz,
            order: Fz
          } = this;
          Fz.length = zz;
          for (let oz = 0; oz < zz; oz++) Fz[oz] = oz;
          zz > 1 && Fz.sort(((zz, sz) => tz[zz] - tz[sz]));
          const Wz = this.mergeGap;
          let Xz = tz[Fz[0]],
            Oz = sz[Fz[0]];
          for (let oz = 1; oz < zz; oz++) {
            const zz = Fz[oz];
            tz[zz] - Oz <= Wz ? Oz = Math.max(Oz, sz[zz]) : (this.send(Xz, Oz), Xz = tz[zz], Oz = sz[zz])
          }
          this.send(Xz, Oz), tz.length = 0, sz.length = 0
        }
        this.holding = !1
      }
      rY() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const zz = this.freed;
        for (let tz = 0; tz < zz.length; tz += 2) this.du.free(zz[tz] / iO, zz[tz + 1] / iO);
        zz.length = 0
      }
      send(zz, tz) {
        this.device.queue.writeBuffer(this.gpu, zz, this.bytes.buffer, zz, tz - zz);
        for (const sz of this.replaced) {
          const Fz = Math.min(tz, sz.size);
          Fz > zz && this.device.queue.writeBuffer(sz, zz, this.bytes.buffer, zz, Fz - zz)
        }
      }
      markDirty(zz, tz) {
        zz &= -4, tz = tz + 3 & -4, this.holding ? (this.dirtyStarts.push(zz), this.dirtyEnds.push(tz)) : this.send(zz, tz)
      }
      grow(zz) {
        const tz = this.du.au,
          sz = Math.max(2 * tz, zz),
          Fz = new Uint8Array(sz * iO);
        Fz.set(this.bytes);
        const Wz = this.gpu;
        this.gpu = this.createGpu(Fz.byteLength), this.bytes = Fz, this.du.grow(sz), Wz && (this.replaced.push(Wz), this.onReplaced(Wz)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, tz * iO)
      }
      createGpu(zz) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: zz,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function lO(zz) {
      return Array.isArray(zz) ? new Float32Array(zz) : zz
    }

    function nO(zz, tz, sz, Fz, Wz) {
      const Xz = jW(Wz),
        Oz = Math.min(Wz, Fz.byteLength);
      if (Xz === Oz && Fz.byteOffset % 4 === 0) return void zz.queue.writeBuffer(tz, sz, Fz.buffer, Fz.byteOffset, Xz);
      const oz = new Uint8Array(Xz);
      oz.set(new Uint8Array(Fz.buffer, Fz.byteOffset, Oz)), zz.queue.writeBuffer(tz, sz, oz)
    }

    function aO(zz, tz, sz) {
      const Fz = "linear",
        Wz = "nearest";
      let Xz = Wz,
        Oz = Wz,
        oz = "nearest",
        vz = !tz;
      switch (zz) {
        case 11:
          Xz = Fz, Oz = Fz;
          break;
        case 3:
          Xz = Fz, Oz = Fz, oz = tz ? "linear" : "nearest";
          break;
        case 8:
          oz = tz ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Oz = Fz;
          break;
        case 6:
          Oz = Fz, oz = tz ? "linear" : "nearest";
          break;
        case 7:
          Oz = Fz, vz = !0;
          break;
        case 9:
          Xz = Fz;
          break;
        case 10:
          Xz = Fz, oz = tz ? "linear" : "nearest";
          break;
        case 2:
          Xz = Fz, Oz = Fz, sz > 1 ? (oz = "linear", vz = !1) : vz = !0;
          break;
        case 12:
          Xz = Fz, vz = !0;
          break;
        default:
          vz = !0
      }
      return sz > 1 && !vz ? {
        magFilter: Fz,
        minFilter: Fz,
        mipmapFilter: "linear",
        maxAnisotropy: sz
      } : {
        magFilter: Xz,
        minFilter: Oz,
        mipmapFilter: oz,
        ...vz ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function qO(zz) {
      return 0 === zz ? "clamp-to-edge" : 2 === zz ? "mirror-repeat" : "repeat"
    }
    class SO {
      constructor(zz, tz) {
        let {
          vertexArena: sz = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = zz, this.device = tz, this.buffers = new WeakMap, this.yE = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = sz ? new LO(tz, (zz => {
          var tz;
          null === (tz = this.onDestroy) || void 0 === tz || tz.call(this, zz), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var zz;
        null === (zz = this.arena) || void 0 === zz || zz.flush()
      }
      endUploadFrame() {
        var zz;
        null === (zz = this.arena) || void 0 === zz || zz.rY()
      }
      vertexBufferCreated(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sz ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(zz);
        const Wz = lO(tz);
        zz.au = Wz.byteLength, this.buffers.set(zz, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: sz && null !== this.arena,
          pending: Wz,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Fz
        })
      }
      vertexBufferUpdated(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        const Wz = this.buffers.get(zz);
        if (!Wz) return;
        const Xz = lO(tz),
          Oz = void 0 === Fz ? Xz.byteLength : Math.min(Fz, Xz.byteLength);
        this.update(Wz, Xz, sz, Oz)
      }
      vertexBufferFloatsUpdated(zz, tz, sz, Fz) {
        const Wz = this.buffers.get(zz);
        if (!Wz) return;
        const Xz = sz * Float32Array.BYTES_PER_ELEMENT,
          Oz = (Fz - sz) * Float32Array.BYTES_PER_ELEMENT;
        Wz.slot >= 0 && Oz > 0 && Xz + Oz <= Wz.size ? this.writeSlot(Wz, Xz, tz, tz.byteOffset + Xz, Oz, !1) : Wz.gpu && Oz > 0 && Xz + Oz <= Wz.gpu.size ? this.device.queue.writeBuffer(Wz.gpu, Xz, tz.buffer, tz.byteOffset + Xz, Oz) : this.update(Wz, tz.subarray(sz, Fz), Xz, Oz)
      }
      indexBufferCreated(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(zz);
        const Fz = function(zz) {
          if (zz instanceof Uint16Array || zz instanceof Uint32Array) return zz;
          for (let tz = 0; tz < zz.length; tz++)
            if (zz[tz] >= 65535) return new Uint32Array(zz);
          return new Uint16Array(zz)
        }(tz);
        zz.is32Bits = 4 === Fz.BYTES_PER_ELEMENT, zz.au = Fz.byteLength, this.buffers.set(zz, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Fz,
          ownsPending: Fz !== tz,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: sz
        })
      }
      bufferDeleted(zz) {
        const tz = this.buffers.get(zz);
        null !== tz && void 0 !== tz && tz.gpu ? (this.destroyBuffer(tz.gpu), this.gpuBuffersVersion++) : tz && tz.slot >= 0 && (this.arena.free(tz.slot, tz.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(zz)
      }
      update(zz, tz, sz, Fz) {
        if (zz.slot >= 0) this.updateSlot(zz, tz, sz, Fz);
        else if (zz.gpu) {
          if (sz + jW(Fz) > zz.gpu.size) {
            const tz = this.device.createBuffer({
                label: zz.label,
                size: jW(Math.max(2 * zz.gpu.size, sz + Fz)),
                usage: zz.usage | GPUBufferUsage.COPY_SRC
              }),
              Wz = this.device.createCommandEncoder();
            Wz.copyBufferToBuffer(zz.gpu, 0, tz, 0, zz.gpu.size), this.device.queue.submit([Wz.finish()]), this.destroyBuffer(zz.gpu), this.gpuBuffersVersion++, zz.gpu = tz
          }
          nO(this.device, zz.gpu, sz, tz, Fz)
        } else {
          const Xz = new Uint8Array(tz.buffer, tz.byteOffset, Fz),
            Oz = zz.pending;
          if (Oz && zz.ownsPending && sz + Fz <= Oz.byteLength) new Uint8Array(Oz.buffer, Oz.byteOffset, Oz.byteLength).set(Xz, sz);
          else if (Oz && 0 === sz && Fz === Oz.byteLength && tz.byteLength === Fz) zz.pending = tz, zz.ownsPending = !1;
          else {
            var Wz;
            const tz = new Uint8Array(Math.max(null !== (Wz = null === Oz || void 0 === Oz ? void 0 : Oz.byteLength) && void 0 !== Wz ? Wz : 0, sz + Fz));
            Oz && tz.set(new Uint8Array(Oz.buffer, Oz.byteOffset, Oz.byteLength)), tz.set(Xz, sz), zz.pending = tz, zz.ownsPending = !0
          }
        }
      }
      updateSlot(zz, tz, sz, Fz) {
        const Wz = this.arena;
        sz + jW(Fz) > zz.size && (zz.size = jW(Math.max(2 * zz.size, sz + Fz)), Wz.growTo(zz.slot + zz.size), this.gpuBuffersVersion++), 0 === Fz ? this.writeSlot(zz, sz, RO, 0, 4, !1) : this.writeSlot(zz, sz, tz, tz.byteOffset, Fz, !0)
      }
      writeSlot(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = tz + (Xz ? jW(Wz) : Wz);
        Oz > zz.slotBytes && this.moveSlot(zz, Oz), this.arena.write(zz.slot + tz, sz, Fz, Wz, Xz)
      }
      moveSlot(zz, tz) {
        const sz = this.arena,
          Fz = LO.slotBytes(Math.max(tz, Math.min(2 * zz.slotBytes, zz.size))),
          Wz = sz.allocate(Fz, null, zz.size);
        sz.move(zz.slot, Wz, zz.slotBytes), sz.free(zz.slot, zz.slotBytes), zz.slot = Wz, zz.slotBytes = Fz, this.gpuBuffersVersion++
      }
      cover(zz, tz) {
        const sz = this.buffers.get(zz);
        if (!sz || sz.slot < 0) return !1;
        const Fz = Math.min(tz, sz.size);
        return !(Fz <= sz.slotBytes) && (this.moveSlot(sz, Fz), !0)
      }
      destroyBuffer(zz) {
        var tz;
        null === (tz = this.onDestroy) || void 0 === tz || tz.call(this, zz), zz.destroy()
      }
      gpuBuffer(zz) {
        const tz = this.buffers.get(zz);
        if (!tz) return null;
        if (tz.slot >= 0) return this.arena.buffer;
        if (tz.arena && tz.pending) {
          const zz = tz.pending,
            sz = this.arena;
          return tz.size = jW(zz.byteLength), tz.slotBytes = LO.slotBytes(function(zz) {
            const tz = new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength);
            let sz = tz.length;
            if (zz.byteOffset % 4 === 0) {
              for (; sz % 4 !== 0 && 0 === tz[sz - 1];) sz--;
              if (sz % 4 === 0) {
                const tz = new Uint32Array(zz.buffer, zz.byteOffset, sz / 4);
                let Fz = tz.length;
                for (; Fz > 0 && 0 === tz[Fz - 1];) Fz--;
                sz = 4 * Fz
              }
            }
            for (; sz > 0 && 0 === tz[sz - 1];) sz--;
            return sz
          }(zz)), tz.slot = sz.allocate(tz.slotBytes, zz, tz.size), tz.pending = null, sz.buffer
        }
        if (!tz.gpu && tz.pending) {
          const zz = tz.pending;
          tz.gpu = this.device.createBuffer({
            label: tz.label,
            size: jW(zz.byteLength),
            usage: tz.usage
          }), nO(this.device, tz.gpu, 0, zz, zz.byteLength), tz.pending = null
        }
        return tz.gpu
      }
      gpuOffset(zz) {
        var tz, sz;
        const Fz = null !== (tz = null === (sz = this.buffers.get(zz)) || void 0 === sz ? void 0 : sz.slot) && void 0 !== tz ? tz : -1;
        return Fz < 0 ? 0 : Fz
      }
      gpuEnd(zz) {
        var tz, sz;
        const Fz = this.buffers.get(zz);
        return Fz ? Fz.slot >= 0 ? Fz.slot + Fz.size : null !== (tz = null === (sz = Fz.gpu) || void 0 === sz ? void 0 : sz.size) && void 0 !== tz ? tz : 0 : 0
      }
      vertexInput(zz, tz, sz) {
        var Fz, Wz, Xz, Oz;
        return null !== (Fz = null !== (Wz = sz && this.modelInput(sz, tz)) && void 0 !== Wz ? Wz : null === (Xz = null !== (Oz = this.yE.get(zz)) && void 0 !== Oz ? Oz : this.batchUploads.get(zz)) || void 0 === Xz ? void 0 : Xz.inputs[tz]) && void 0 !== Fz ? Fz : null
      }
      modelInput(zz, tz) {
        const sz = this.geometrySlot(zz);
        let Fz = sz.inputs.get(tz);
        if (void 0 === Fz) {
          const Wz = zz.vertexAttributes.find((zz => zz.kind === tz));
          Fz = Wz ? new qz(this.modelKey(sz, Wz.data, !1), Wz.offset, Wz.stride, Wz.components, !1, Wz.glType, Wz.isNormalized) : null, sz.inputs.set(tz, Fz)
        }
        return Fz
      }
      modelIndex(zz) {
        return zz.indexData && this.modelKey(this.geometrySlot(zz), zz.indexData, !0)
      }
      geometrySlot(zz) {
        let tz = zz.gpu[ez.i.lite];
        if (!tz) {
          const sz = new Map,
            Fz = () => {
              for (const zz of sz.values()) this.bufferDeleted(zz)
            },
            Wz = zz => {
              const tz = sz.get(zz);
              tz && this.vertexBufferUpdated(tz, zz)
            };
          tz = {
            keys: sz,
            inputs: new Map,
            release: Fz,
            updated: Wz
          }, zz.gpu[ez.i.lite] = tz
        }
        return tz
      }
      modelKey(zz, tz, sz) {
        let Fz = zz.keys.get(tz);
        if (!Fz) {
          if (sz) {
            const zz = {
              au: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(zz, tz, "model-indices"), Fz = zz
          } else Fz = {
            au: 0
          }, this.vertexBufferCreated(Fz, tz, !1, "model-vertices");
          zz.keys.set(tz, Fz)
        }
        return Fz
      }
      indexFormat(zz) {
        return zz.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(zz, tz) {
        --zz.refs > 0 || (this.releaseTexture(zz), hO(zz.images), null !== tz && this.textures.delete(tz))
      }
      load(zz, tz) {
        const sz = tz.decoded = async function(zz) {
          if ("cube" === zz.kind) return async function(zz) {
            if (6 !== zz.length) throw new Error(`${zz.length} files where six faces were expected`);
            const tz = await QO(zz.map((zz => QW(zz)))),
              sz = tz[0].width;
            return QO(tz.map((async zz => {
              if (zz.width === sz && zz.height === sz) return zz;
              try {
                return await createImageBitmap(zz, {
                  ...dW,
                  resizeWidth: sz,
                  resizeHeight: sz
                })
              } finally {
                zz.close()
              }
            })))
          }(zz.files);
          if ("data" === zz.kind && zz.data) return [await createImageBitmap(new Blob([zz.data]), dW)];
          return [await QW(VO(zz))]
        }(zz.source).then((zz => {
          0 === tz.refs ? hO(zz) : tz.images = zz
        }));
        this.track(tz, VO(zz.source), sz, (() => {
          tz.wanted && !tz.failed && tz.refs > 0 && this.upload(zz, tz)
        }))
      }
      canvasUpdated(zz, tz, sz) {
        const {
          state: Fz
        } = this.textureSlot(zz);
        Fz.dynamicSource = {
          invertY: tz,
          premultiplied: sz
        }, Fz.dynamic && this.pushDynamic(zz.source, Fz)
      }
      async atlasArray(zz, tz, sz) {
        const Fz = await LW(this.device, zz, tz, sz);
        if (!this.atlasBindings.has(Fz)) {
          const zz = (0, cO.b)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Fz, {
            view: Fz.texture.createView({
              dimension: "2d-array"
            }),
            sampler: zz
          })
        }
        return Fz
      }
      boundTexture(zz) {
        const tz = this.atlasBindings.get(zz);
        if (tz) return tz;
        const sz = zz;
        if (sz.released) return null;
        const Fz = this.textureSlot(sz, !0),
          {
            state: Wz
          } = Fz;
        if (!Wz.view && (Wz.wanted = !0, Wz.loading || Wz.failed || this.upload(sz, Wz), !Wz.view)) return null;
        const Xz = this.chosenSampler(sz, Fz),
          Oz = Fz.bound;
        return Oz && Oz.view === Wz.view && Oz.sampler === Xz ? Oz : (Fz.bound = {
          view: Wz.view,
          sampler: Xz
        }, Fz.bound)
      }
      textureLoaded(zz) {
        var tz, sz;
        return null !== (tz = null === (sz = zz.gpu[ez.i.lite]) || void 0 === sz ? void 0 : sz.state.decoded) && void 0 !== tz ? tz : null
      }
      textureFailed(zz) {
        var tz;
        return !0 === (null === (tz = zz.gpu[ez.i.lite]) || void 0 === tz ? void 0 : tz.state.failed)
      }
      chosenSampler(zz, tz) {
        const {
          samplingMode: sz,
          wrapU: Fz,
          wrapV: Wz
        } = zz.sampler, Xz = tz.state.hasMips, Oz = function(zz, tz) {
          const {
            bilinear: sz,
            trilinear: Fz
          } = ez.m;
          return !tz && zz !== sz || 11 !== zz && zz !== Fz && zz !== sz ? 1 : 4
        }(sz, Xz), oz = tz.sampler;
        if (oz && oz.samplingMode === sz && oz.hasMips === Xz && oz.anisotropy === Oz && oz.wrapU === Fz && oz.wrapV === Wz) return oz.sampler;
        const vz = this.samplerFor(sz, Xz, Oz, Fz, Wz);
        return tz.sampler = {
          samplingMode: sz,
          hasMips: Xz,
          anisotropy: Oz,
          wrapU: Fz,
          wrapV: Wz,
          sampler: vz
        }, vz
      }
      releaseTexture(zz) {
        var tz, sz;
        zz.view && (null === (sz = this.onDestroy) || void 0 === sz || sz.call(this, zz.view));
        null === (tz = zz.destroy) || void 0 === tz || tz.call(zz)
      }
      textureSlot(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = zz.gpu[ez.i.lite];
        if (sz) return sz;
        const Fz = function(zz) {
          let {
            source: tz,
            sampler: sz
          } = zz;
          return "canvas" === tz.kind ? null : `${tz.kind}|${VO(tz)}|${sz.noMipmap}|${sz.samplingMode}|${sz.invertY}`
        }(zz);
        let Wz = null === Fz ? void 0 : this.textures.get(Fz);
        Wz || (Wz = {
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
        }, null !== Fz && (this.textures.set(Fz, Wz), this.load(zz, Wz), tz && this.firstBindDecodes++)), Wz.refs++;
        const Xz = Wz,
          Oz = {
            state: Wz,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(Xz, Fz)
            }
          };
        return zz.gpu[ez.i.lite] = Oz, Oz
      }
      samplerFor(zz, tz, sz, Fz, Wz) {
        const Xz = `${zz}|${tz}|${sz}|${Fz}|${Wz}`;
        let Oz = this.samplers.get(Xz);
        if (!Oz) {
          const oz = {
            ...aO(zz, tz, sz),
            addressModeU: qO(Fz),
            addressModeV: qO(Wz)
          };
          Oz = (0, cO.b)(this.engine, oz), this.samplers.set(Xz, Oz)
        }
        return Oz
      }
      upload(zz, tz) {
        const {
          source: sz,
          sampler: Fz
        } = zz;
        tz.hasMips = !Fz.noMipmap, "canvas" === sz.kind ? this.createDynamic(sz, tz) : "cube" === sz.kind ? this.uploadCube(tz, sz.luminance) : this.uploadImage(tz, !0 === Fz.invertY, sz.url)
      }
      uploadImage(zz, tz, sz) {
        const [Fz] = zz.images;
        zz.images = null;
        const Wz = (0, jO.c)(this.engine, Fz, {
          mipMaps: zz.hasMips,
          invertY: tz,
          srgb: !1
        }).then((tz => {
          Fz.close(), 0 !== zz.refs ? (zz.view = tz.view, zz.destroy = tz.texture.destroy.bind(tz.texture)) : tz.texture.destroy()
        }));
        this.track(zz, sz, Wz)
      }
      track(zz, tz, sz, Fz) {
        zz.loading = !0, this.pending++, sz.catch((sz => {
          zz.failed = !0, console.warn(`Lite: could not load texture ${hW(tz)}`, sz)
        })).finally((() => {
          zz.loading = !1, this.pending--, null === Fz || void 0 === Fz || Fz()
        }))
      }
      uploadCube(zz, tz) {
        const sz = zz.images;
        zz.images = null;
        const Fz = dO(this.engine, this.device, sz, (0, ez.E)(tz), zz.hasMips);
        zz.view = Fz.createView({
          dimension: "cube"
        }), zz.destroy = () => {
          Fz.destroy()
        }
      }
      createDynamic(zz, tz) {
        const {
          canvas: sz
        } = zz, Fz = (0, AO.b)(this.engine, Math.max(1, sz.width), Math.max(1, sz.height), {
          mipMaps: tz.hasMips,
          srgb: !1
        });
        tz.dynamic = Fz, tz.view = Fz.view, tz.destroy = () => {
          Fz.texture.destroy()
        }, this.pushDynamic(zz, tz)
      }
      pushDynamic(zz, tz) {
        const sz = tz.dynamicSource,
          Fz = tz.dynamic,
          {
            canvas: Wz
          } = zz;
        if (sz && Fz && 0 !== Wz.width && 0 !== Wz.height) return Wz.width !== Fz.width || Wz.height !== Fz.height ? (this.releaseTexture(tz), tz.dynamic = null, tz.view = null, void this.createDynamic(zz, tz)) : void(0, AO.d)(this.engine, Fz, Wz, {
          invertY: sz.invertY,
          premultiplyAlpha: sz.premultiplied
        })
      }
    }

    function VO(zz) {
      return "cube" === zz.kind ? zz.rootUrl : "canvas" === zz.kind ? "canvas" : zz.url
    }
    const RO = new Uint8Array(4);

    function pO(zz) {
      const tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      zz._colorAttachment.storeOp = zz._targetSignature._sampleCount > 1 ? tz : "store";
      const sz = zz._renderPassDescriptor.depthStencilAttachment;
      sz && (sz.depthStoreOp = tz, sz.stencilStoreOp && (sz.stencilStoreOp = tz))
    }
    var fO = sz(37199),
      EO = sz(37255),
      zo = sz(36850),
      to = sz(38920);
    const so = new Float64Array([1, 1, 1]),
      Fo = new Float64Array([0, 1, 0]),
      Wo = new Float64Array(4),
      Xo = new Float32Array(16),
      Oo = new Float64Array(3),
      oo = new Float64Array(4);

    function vo(zz, tz, sz) {
      zz.fov = tz.fov, zz.near = tz.near, zz.far = tz.far, zz.renderWidth = sz.renderWidth, zz.renderHeight = sz.renderHeight, (0, zo.p)(tz.holderRotation, 0, Wo, 0), (0, zo.e)(so, 0, Wo, 0, tz.holderPosition, 0, Xo);
      const Fz = tz.XV;
      Oo[0] = Fz[0], Oo[1] = Fz[1], Oo[2] = Fz[2] + 1;
      const Wz = zz.viewMatrix;
      (0, zo.i)(Fz, Oo, Fo, Wz), (0, zo.g)(Wz, 0, Wz), (0, zo.k)(Wz, Xo, 0, Wz), (0, zo.g)(Wz, 0, Wz);
      const Xz = zz.worldMatrix;
      (0, zo.g)(Wz, 0, Xz), zz.eye[0] = Xz[12], zz.eye[1] = Xz[13], zz.eye[2] = Xz[14], oo[0] = zz.fov, oo[1] = zz.renderWidth / zz.renderHeight, oo[2] = zz.near, oo[3] = zz.far, (0, zo.n)(oo, zz.projectionMatrix), (0, zo.k)(Wz, zz.projectionMatrix, 0, zz.viewProjectionMatrix), (0, to.f)(zz.viewProjectionMatrix, zz.frustum)
    }

    function Uo(zz, tz) {
      let sz = zz.frustumPlanes;
      sz || (sz = zz.frustumPlanes = Array.from({
        length: 6
      }, (() => new fO.c(0, 0, 0, 0))));
      for (let Fz = 0; Fz < 6; Fz++) {
        const zz = sz[Fz].normal;
        zz._x = tz[4 * Fz], zz._y = tz[4 * Fz + 1], zz._z = tz[4 * Fz + 2], zz._isDirty = !0, sz[Fz].d = tz[4 * Fz + 3]
      }
    }

    function Ko(zz, tz) {
      const sz = tz.clearColor;
      zz.clearColour[0] = sz.r, zz.clearColour[1] = sz.g, zz.clearColour[2] = sz.b, zz.clearColour[3] = sz.a;
      const Fz = tz.ambientColor;
      zz.ambientColour[0] = Fz.r, zz.ambientColour[1] = Fz.g, zz.ambientColour[2] = Fz.b, zz.animationRatio = tz.animationRatio, zz.frameId = tz.frameId, zz.version++
    }

    function uo(zz) {
      const tz = zz.model.view;
      return tz.animTick = (0, EO.d)(), tz.timeMs = performance.now(), Ko(tz, zz.Kg), zz.model.update(tz.frameId), tz
    }

    function No(zz) {
      const tz = zz.Kg,
        {
          view: sz,
          sV: Fz
        } = zz.model;
      return vo(sz, Fz, tz.FD()), tz.onBeforeRenderObservable.notifyObservers(tz), Uo(tz, sz.frustum), tz.onBeforeCameraRenderObservable.notifyObservers(tz.activeCamera), uo(zz)
    }
    var bo = sz(36809),
      wo = sz(36923),
      Do = sz(37245);

    function go(zz) {
      var tz, sz;
      const Fz = (0, Iz.$)(zz);
      if (!Fz || Fz.diffuseTexture && (0, Do.i)(zz)) return null;
      const Wz = null === (tz = (0, Iz.z)(Fz, mz.i.name)) || void 0 === tz ? void 0 : tz.state,
        Xz = null === (sz = (0, Iz.z)(Fz, VX.e.name)) || void 0 === sz ? void 0 : sz.state,
        Oz = new Float32Array(16);
      return function(zz, tz, sz, Fz) {
        var Wz, Xz;
        const Oz = DF;
        Fz.set(zz.diffuseColor, Oz.diffuse), Fz[Oz.diffuse + 3] = zz.alpha, Fz.set(zz.ambientColor, Oz.ambientAndCutoff), Fz[Oz.ambientAndCutoff + 3] = zz.alphaCutOff, Fz.set(zz.emissiveColor, Oz.emissiveAndLevel), Fz[Oz.emissiveAndLevel + 3] = null !== (Wz = null === (Xz = zz.diffuseTexture) || void 0 === Xz ? void 0 : Xz.level) && void 0 !== Wz ? Wz : 1, null !== tz && void 0 !== tz && tz.animDataPerTex ? (Fz[Oz.anim + 1] = EO.c, Fz[Oz.anim + 2] = tz.animDataPerTex.length / 3 - 1) : sz && (Fz[Oz.anim + 1] = sz.numAnimStates, Fz[Oz.anim + 2] = sz.ticksPerAnimState)
      }(Fz, Wz, Xz, Oz), {
        model: Fz,
        atlas: Wz,
        texture: Wz ? "atlas" : Fz.diffuseTexture ? "single" : "none",
        animated: Wz ? !!Wz.animDataPerTex : !!Xz,
        liquid: (0, Do.m)(zz),
        customRenderMat: (0, Do.i)(zz),
        uniformData: Oz
      }
    }
    var Ho = sz(36791);
    class Bo {
      constructor(zz) {
        this.units = zz, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var zz;
        this.buffer.destroy(), null === (zz = this.twin) || void 0 === zz || zz.destroy()
      }
    }
    class Po {
      constructor(zz, tz) {
        this.arena = zz, this.du = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.du = new kO(tz);
        const sz = new Bo(tz);
        sz.buffer = this.createBuffer(sz, !1), this.backings.push(sz), this.refresh()
      }
      get au() {
        return this.du.au
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
        let zz = 0;
        for (const tz of this.backings) zz += tz.units * (this.arena.unitBytes + (tz.twin ? this.arena.twinUnitBytes : 0));
        return zz
      }
      holds(zz) {
        return zz.start + zz.length <= this.usable
      }
      lost(zz) {
        return this.dropped || zz.start + zz.length > this.au
      }
      write(zz, tz) {
        const {
          device: sz,
          unitBytes: Fz
        } = this.arena;
        for (const Wz of this.backings) {
          const Xz = (Wz.units - zz.start) * Fz;
          Xz > 0 && sz.queue.writeBuffer(Wz.buffer, zz.start * Fz, tz, 0, Math.min(tz.byteLength, Xz))
        }
      }
      writeLight(zz, tz) {
        const {
          device: sz,
          twinUnitBytes: Fz,
          verticesPerUnit: Wz
        } = this.arena, {
          light: Xz,
          count: Oz
        } = this.arena.twinLight(tz, Math.min(tz.length, zz.length * Wz));
        for (const oz of this.backings) {
          oz.twin || (oz.twin = this.createBuffer(oz, !0));
          const tz = (oz.units - zz.start) * Wz;
          tz > 0 && sz.queue.writeBuffer(oz.twin, zz.start * Fz, Xz, 0, Math.min(Oz, tz))
        }
      }
      grow(zz) {
        this.arena.assertNotDrawing();
        const {
          device: tz,
          unitBytes: sz,
          label: Fz
        } = this.arena, Wz = this.backings[this.backings.length - 1], Xz = new Bo(zz), Oz = tz.createCommandEncoder({
          label: `${Fz}-grow`
        });
        Xz.buffer = this.createBuffer(Xz, !1), Oz.copyBufferToBuffer(Wz.buffer, 0, Xz.buffer, 0, Wz.units * sz), Wz.twin && (Xz.twin = this.createBuffer(Xz, !0), Oz.copyBufferToBuffer(Wz.twin, 0, Xz.twin, 0, Wz.units * this.arena.twinUnitBytes)), tz.queue.submit([Oz.finish()]), this.backings.push(Xz), this.du.grow(zz)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const zz of this.backings) zz.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(zz, tz) {
        const {
          device: sz,
          unitBytes: Fz,
          twinUnitBytes: Wz,
          usage: Xz,
          label: Oz
        } = this.arena;
        sz.pushErrorScope("out-of-memory");
        const oz = sz.createBuffer({
          label: tz ? `${Oz}-light` : Oz,
          size: zz.units * (tz ? Wz : Fz),
          usage: (tz ? this.arena.twinUsage : Xz) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, sz.popErrorScope().then((sz => {
          this.arena.awaitingVerdict--, this.settle(zz, tz, !sz, !0)
        }), (sz => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Oz} buffer, taken as failed: ${String(sz)}`), this.settle(zz, tz, !1, !1)
        })), oz
      }
      settle(zz, tz, sz, Fz) {
        const Wz = this.backings.indexOf(zz);
        if (!(this.dropped || Wz < 0)) {
          if (!sz) {
            if (Fz && this.arena.ranOutOfMemory(zz.units, zz.units * (tz ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Wz) return void this.drop();
            for (const zz of this.backings.splice(Wz)) zz.destroy();
            return this.du.truncate(this.backings[Wz - 1].units), this.growable = !1, void this.promote()
          }
          tz ? zz.twinReady = !0 : (zz.bufferReady = !0, this.arena.allocatedBuffer(zz.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: zz
        } = this;
        let tz = 0;
        for (; tz + 1 < zz.length && zz[tz].ready && zz[tz + 1].ready;) tz++;
        for (const sz of zz.splice(0, tz)) sz.destroy();
        this.refresh()
      }
      refresh() {
        const zz = this.backings[0];
        this.buffer = zz.buffer, this.twin = zz.twinReady ? zz.twin : null, this.usable = !this.dropped && zz.bufferReady ? zz.units : 0
      }
    }
    class ro {
      constructor(zz, tz, sz, Fz) {
        let {
          verticesPerUnit: Wz = 1,
          twinUsage: Xz = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = zz, this.unitBytes = tz, this.usage = sz, this.label = Fz, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Ut.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), tz % 4 !== 0) throw new Error(`${Fz}: ${tz}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Wz, this.twinUsage = Xz, this.twinValueBytes = Wz > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Wz
      }
      twinLight(zz, tz) {
        if (4 === this.twinValueBytes) return this.widened.length < tz && (this.widened = new Float32Array(Math.max(tz, 2 * this.widened.length))), this.widened.set(zz.subarray(0, tz)), {
          light: this.widened,
          count: tz
        };
        const sz = tz % this.verticesPerUnit;
        if (0 === sz) return {
          light: zz,
          count: tz
        };
        const Fz = tz - sz + this.verticesPerUnit;
        return this.padded.length < Fz && (this.padded = new Uint16Array(Math.max(Fz, 2 * this.padded.length))), this.padded.set(zz.subarray(0, tz)), this.padded.fill(0, tz, Fz), {
          light: this.padded,
          count: Fz
        }
      }
      allocate(zz) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), zz > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Wz of this.pages) {
          const tz = Wz.du.allocate(zz);
          if (tz >= 0) return {
            page: Wz,
            start: tz,
            length: zz
          }
        }
        const tz = this.pages[this.pages.length - 1];
        if (null !== tz && void 0 !== tz && tz.canGrow) {
          const sz = Math.min(this.ceiling, Math.max(2 * tz.au, tz.au + zz));
          if (sz - tz.au >= zz) return tz.grow(sz), {
            page: tz,
            start: tz.du.allocate(zz),
            length: zz
          }
        }
        tz && tz !== this.pages[0] && 0 === tz.du.used && tz.drop();
        const sz = Math.floor(1048576 / this.unitBytes),
          Fz = new Po(this, Math.max(zz, Math.min(this.ceiling, sz)));
        return this.pages.push(Fz), {
          page: Fz,
          start: Fz.du.allocate(zz),
          length: zz
        }
      }
      free(zz) {
        this.assertNotDrawing();
        const {
          page: tz
        } = zz;
        tz.du.free(zz.start, zz.length), 0 === tz.du.used && tz !== this.pages[0] && tz !== this.pages[this.pages.length - 1] && tz.drop()
      }
      remove(zz) {
        const tz = this.pages.indexOf(zz);
        tz >= 0 && this.pages.splice(tz, 1)
      }
      ranOutOfMemory(zz, tz) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${tz}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, zz), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, zz) / 2));
        const sz = performance.now();
        sz >= this.shortageUntil && (this.forgetFailedAt = sz + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = sz + 1e3)
      }
      allocatedBuffer(zz) {
        zz >= this.failed && (this.failed = 1 / 0);
        const tz = Math.min(2 * zz, Math.floor((zz + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, tz))
      }
      stats() {
        let zz = 0,
          tz = 0,
          sz = 0,
          Fz = 0;
        for (const Wz of this.pages) zz += Wz.au, tz += Wz.du.used, sz += Wz.hasTwin ? Wz.au * this.twinUnitBytes : 0, Fz += Wz.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: zz * this.unitBytes,
          usedBytes: tz * this.unitBytes,
          twinBytes: sz,
          allocatedBytes: Fz
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: zz,
          maxStorageBufferBindingSize: tz
        } = this.device.limits;
        let sz = Math.floor(Math.min(67108864, zz) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (sz = Math.min(sz, Math.floor(tz / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (sz = Math.min(sz, Math.floor(tz / this.twinUnitBytes))), sz
      }
    }
    const Yo = 16383;

    function xo(zz, tz, sz, Fz, Wz) {
      let Xz = 0;
      for (let Oz = sz; Oz < Fz; Oz += Yo) zz.drawIndexed(6 * Math.min(Yo, Fz - Oz), 1, 0, tz + 4 * Oz, Wz), Xz++;
      return Xz
    }
    class mo {
      constructor(zz, tz) {
        this.recordsGroup = tz, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const sz = Jt.d.strideWithoutAtlas;
        this.vertexArena = new ro(zz, sz, GPUBufferUsage.VERTEX, `terrain-vertices-${sz}`), this.quadArena = new ro(zz, wo.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Fz = (0, It.e)(new Uint16Array(98298), Yo);
        this.quadPattern = zz.createBuffer({
          label: "terrain-quad-pattern",
          size: Fz.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), zz.queue.writeBuffer(this.quadPattern, 0, Fz)
      }
      set(zz, tz) {
        const sz = tz.packedVertices,
          Fz = sz ? this.quadArena.allocate(zz.faceCount) : this.vertexArena.allocate(zz.vertexCount);
        if (!Fz) return !1;
        zz.vertices = Fz;
        const Wz = sz ? new Uint8Array(sz.buffer, sz.byteOffset, sz.byteLength) : new Uint8Array(tz.vertices);
        return Fz.page.write(Fz, Wz), !0
      }
      setLight(zz, tz) {
        const {
          vertices: sz
        } = zz;
        sz && 0 !== tz.length && sz.page.live && (tz.length < zz.vertexCount ? sz.page.arena.warnOnce("shortLight", `a part's ${tz.length} light values are fewer than its ${zz.vertexCount} vertices, so its light is left as it was`) : (sz.page.writeLight(sz, tz), zz.lit = !0))
      }
      lightFullSky(zz, tz) {
        this.fullSky.length < tz && (this.fullSky = new Uint16Array(Math.max(tz, 4096)).fill(Ho.g));
        for (const sz of zz) {
          const zz = sz.vertices;
          zz.page.live && (zz.page.writeLight(zz, this.fullSky), sz.lit = !0)
        }
      }
      backed(zz) {
        const {
          vertices: tz
        } = zz;
        return !!tz && tz.page.holds(tz)
      }
      lost(zz) {
        const {
          vertices: tz
        } = zz;
        return !!tz && tz.page.lost(tz)
      }
      release(zz) {
        zz.vertices && zz.vertices.page.arena.free(zz.vertices), zz.vertices = null, zz.lit = !1
      }
      setDrawing(zz) {
        this.forgetBound()
      }
      draw(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tz.faceCount;
        const Xz = tz.vertices,
          Oz = Xz.page,
          oz = sz ? Oz.twin : null;
        if (!Oz.holds(Xz) || sz && !oz) return 0;
        const {
          verticesPerUnit: vz
        } = Oz.arena;
        let Uz = Xz.start * vz;
        this.boundPattern || (zz.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Kz = Fz + Wz;
        if (vz > 1) return Oz.buffer === this.boundRecords && oz === this.boundRecordsLight || (zz.setBindGroup(1, this.recordsGroup(Oz.buffer, oz)), this.boundRecords = Oz.buffer, this.boundRecordsLight = oz), xo(zz, Uz, Fz, Kz, tz.slot);
        Oz.buffer !== this.boundVertices && (zz.setVertexBuffer(0, Oz.buffer), this.boundVertices = Oz.buffer), oz && oz !== this.boundLight && (zz.setVertexBuffer(1, oz), this.boundLight = oz);
        const uz = tz.faceCount;
        return Kz <= uz ? xo(zz, Uz, Fz, Kz, tz.slot) : xo(zz, Uz, Fz, uz, tz.slot) + xo(zz, Uz, Math.max(Fz, uz) - uz, Kz - uz, tz.slot)
      }
      get buffersAwaitingVerdict() {
        let zz = 0;
        for (const tz of this.arenas()) zz += tz.awaitingVerdict;
        return zz
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Jo {
      constructor(zz, tz, sz, Fz) {
        this.device = zz, this.splitBefore = tz, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = zz.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Wz = zz.createShaderModule({
          label: "scene-depth-copy",
          code: (Xz = sz._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Xz?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Xz;
        zz.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Wz,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Wz,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((zz => {
          this.pipeline = zz, this.building = !1
        }), (zz => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", zz)
        })), sz._executeWithTransmission = () => this.execute(sz, Fz)
      }
      get compiling() {
        return this.building
      }
      setWanted(zz) {
        this.wanted = zz
      }
      setPlanes(zz, tz) {
        zz === this.near && tz === this.far || (this.near = zz, this.far = tz, this.unproject[0] = zz / (tz - zz), this.unproject[1] = tz * zz / (tz - zz), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var zz, tz;
        return null !== (zz = null === (tz = this.copy) || void 0 === tz ? void 0 : tz.view) && void 0 !== zz ? zz : null
      }
      execute(zz, tz) {
        var sz;
        null === (sz = this.retired) || void 0 === sz || sz.destroy(), this.retired = null;
        const Fz = zt(tz),
          Wz = zz._transparentBindings,
          Xz = this.wanted && this.pipeline ? this.splitIndex(Wz) : -1,
          Oz = zz._colorAttachment,
          oz = Oz.resolveTarget;
        Xz >= 0 && (Oz.resolveTarget = void 0, pO(zz, !0));
        let vz = Fz.beginRenderPass(zz._renderPassDescriptor);
        vz.setBindGroup(0, zz._sceneBG);
        let Uz = this.drawList(vz, tz, zz._opaqueBindings, 0, zz._opaqueBindings.length);
        if (Uz += this.drawList(vz, tz, zz._directBindings, 0, zz._directBindings.length), Uz += this.drawList(vz, tz, Wz, 0, Xz >= 0 ? Xz : Wz.length), vz.end(), Xz < 0) return Uz;
        pO(zz);
        const Kz = zz._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: uz,
            stencilLoadOp: Nz
          } = Kz,
          bz = Oz.loadOp;
        Oz.resolveTarget = oz;
        try {
          this.copyDepth(Fz, zz), Oz.loadOp = "load", Kz.depthLoadOp = "load", Nz && (Kz.stencilLoadOp = "load"), vz = Fz.beginRenderPass(zz._renderPassDescriptor), vz.setBindGroup(0, zz._sceneBG), Uz += this.drawList(vz, tz, Wz, Xz, Wz.length), vz.end()
        } finally {
          Oz.loadOp = bz, Kz.depthLoadOp = uz, Kz.stencilLoadOp = Nz
        }
        return Uz
      }
      splitIndex(zz) {
        for (let tz = 0; tz < zz.length; tz++)
          if (zz[tz].renderable === this.splitBefore) return tz;
        return -1
      }
      drawList(zz, tz, sz, Fz, Wz) {
        let Xz = null,
          Oz = 0;
        for (let oz = Fz; oz < Wz; oz++) {
          const Fz = sz[oz],
            Wz = Fz.renderable.mesh;
          Wz && !1 === Wz.visible || (Fz.pipeline !== Xz && (zz.setPipeline(Fz.pipeline), Xz = Fz.pipeline), Oz += Fz.draw(zz, tz))
        }
        return Oz
      }
      copyDepth(zz, tz) {
        var sz, Fz;
        const Wz = (null !== (sz = tz._config.depth) && void 0 !== sz ? sz : tz._config.rt)._depthTexture,
          Xz = (null === (Fz = this.copy) || void 0 === Fz ? void 0 : Fz.source) === Wz ? this.copy : this.remakeCopy(Wz),
          Oz = zz.beginRenderPass(Xz.pass);
        Oz.setPipeline(this.pipeline), Oz.setBindGroup(0, Xz.bindGroup), Oz.draw(3), Oz.end()
      }
      remakeCopy(zz) {
        var tz, sz;
        this.retired = null !== (tz = null === (sz = this.copy) || void 0 === sz ? void 0 : sz.texture) && void 0 !== tz ? tz : null;
        const Fz = this.device.createTexture({
            label: "scene-depth",
            size: [zz.width, zz.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Wz = Fz.createView(),
          Xz = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: zz.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          Oz = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Wz,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: zz,
          texture: Fz,
          view: Wz,
          bindGroup: Xz,
          pass: Oz
        }, this.copy
      }
    }
    const Io = "rgba8unorm";

    function Co(zz) {
      return zz ? 15 : 1
    }
    class eo {
      constructor(zz, tz, sz, Fz) {
        this.device = zz, this.terrain = Fz, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = tz._targetSignature._sampleCount > 1, this.cameraBuffer = zz.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = zz.createBindGroupLayout({
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
        const Wz = zz.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = zz.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Wz,
          entries: []
        });
        const Xz = zz.createShaderModule({
          label: "sun-shadow-mask",
          code: (Oz = this.edge, `${(0,Ct.F)()}${is({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Oz?Zs:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Co(Oz)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Oz?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Oz;
        zz.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: zz.createPipelineLayout({
            bindGroupLayouts: [this.layout, Wz, Wz, kX(zz, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Xz,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Xz,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((zz => {
          this.pipeline = zz, this.building = !1
        }), (zz => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", zz)
        }));
        const oz = tz._executeWithTransmission;
        tz._executeWithTransmission = zz => this.execute(tz, sz, (() => oz ? oz(zz) : function(zz, tz) {
          const sz = zt(tz).beginRenderPass(zz._renderPassDescriptor);
          sz.setBindGroup(0, zz._sceneBG);
          let Fz = Zo(sz, tz, zz._opaqueBindings);
          return Fz += Zo(sz, tz, zz._directBindings), Fz += Zo(sz, tz, zz._transparentBindings), sz.end(), Fz
        }(tz, sz)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var zz, tz;
        return null !== (zz = null === (tz = this.targets) || void 0 === tz ? void 0 : tz.maskView) && void 0 !== zz ? zz : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(zz) {
        ! function(zz, tz) {
          const sz = zz.worldMatrix,
            Fz = zz.projectionMatrix,
            Wz = 1 / Fz[0],
            Xz = 1 / Fz[5],
            Oz = zz.far * zz.near / (zz.far - zz.near);
          tz[0] = zz.eye[0], tz[1] = zz.eye[1], tz[2] = zz.eye[2], tz[3] = 2 ** -23 / Oz, tz[4] = sz[0] * Wz, tz[5] = sz[1] * Wz, tz[6] = sz[2] * Wz, tz[7] = Oz, tz[8] = sz[4] * Xz, tz[9] = sz[5] * Xz, tz[10] = sz[6] * Xz, tz[11] = zz.near / (zz.far - zz.near), tz[12] = sz[8], tz[13] = sz[9], tz[14] = sz[10], tz[15] = 0
        }(zz, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(zz, tz, sz) {
        if (this.retire(), !this.terrain.readsMask) return sz();
        const Fz = this.targetsFor(zz),
          Wz = zt(tz),
          Xz = zz._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Fz.prepass.depthStencilAttachment.view = Xz.view);
        const Oz = this.terrain.drawPrepass(Wz, Fz.prepass, zz._sceneBG);
        if (0 === Oz) return sz();
        if (this.trace(Wz, Fz), this.edge) return Oz + 1 + sz();
        const {
          depthLoadOp: oz,
          stencilLoadOp: vz
        } = Xz;
        Xz.depthLoadOp = "load", vz && (Xz.stencilLoadOp = "load");
        try {
          return Oz + 1 + sz()
        } finally {
          Xz.depthLoadOp = oz, Xz.stencilLoadOp = vz
        }
      }
      trace(zz, tz) {
        const sz = this.terrain.sunShadowGroup(),
          Fz = zz.beginRenderPass(tz.trace);
        this.pipeline && sz && (Fz.setPipeline(this.pipeline), Fz.setBindGroup(0, tz.bindGroup), Fz.setBindGroup(1, this.empty), Fz.setBindGroup(2, this.empty), Fz.setBindGroup(3, sz), Fz.draw(3)), Fz.end()
      }
      retire() {
        const zz = this.retired;
        var tz;
        zz && (zz.mask.destroy(), zz.normals.destroy(), null === (tz = zz.depth) || void 0 === tz || tz.destroy(), this.retired = null)
      }
      targetsFor(zz) {
        var tz, sz;
        const Fz = (null !== (tz = zz._config.depth) && void 0 !== tz ? tz : zz._config.rt)._depthTexture;
        return (null === (sz = this.targets) || void 0 === sz ? void 0 : sz.source) === Fz ? this.targets : this.remake(zz, Fz)
      }
      remake(zz, tz) {
        var sz;
        this.retired = this.targets;
        const Fz = [tz.width, tz.height],
          Wz = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Fz,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Xz = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Fz,
            format: Io,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Oz = null !== (sz = zz._targetSignature._depthStencilFormat) && void 0 !== sz ? sz : tz.format,
          oz = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Fz,
            format: Oz,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          vz = zz._renderPassDescriptor.depthStencilAttachment,
          Uz = Oz.includes("stencil"),
          Kz = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Xz.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: oz ? oz.createView() : vz.view,
              depthClearValue: vz.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Uz ? {
                stencilClearValue: vz.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          uz = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== oz && void 0 !== oz ? oz : tz).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Xz.createView()
            }]
          }),
          Nz = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Wz.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Co(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: tz,
          mask: Wz,
          maskView: Wz.createView(),
          normals: Xz,
          depth: oz,
          bindGroup: uz,
          prepass: Kz,
          trace: Nz
        }, this.targets
      }
    }

    function Zo(zz, tz, sz) {
      let Fz = null,
        Wz = 0;
      for (const Xz of sz) {
        const sz = Xz.renderable.mesh;
        sz && !1 === sz.visible || (Xz.pipeline !== Fz && (zz.setPipeline(Xz.pipeline), Fz = Xz.pipeline), Wz += Xz.draw(zz, tz))
      }
      return Wz
    }
    const Go = 6e4,
      To = {
        status: "ok"
      },
      co = {
        status: "skipped"
      };
    async function jo(zz, tz) {
      const {
        isCancelled: sz
      } = zz;
      if (sz()) return {
        status: "ds"
      };
      const {
        target: Fz
      } = tz;
      if (!Fz) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Wz = [],
        Xz = Promise.all(Array.from(new Set(zz.materials), (async sz => {
          Wz.push(await async function(zz, tz, sz, Fz) {
            const Wz = {
              lighting: zz.lighting,
              dirLightCount: Math.min(zz.dirLightCount, 4),
              Cw: zz.runtime
            };
            try {
              const Xz = tz.material(Fz);
              return Xz && NF(tz.programKey(Xz, !1, Wz)) ? (await Xz.ready, zz.isCancelled() ? To : Xz.bindGroupLayout ? await async function(zz, tz, sz, Fz) {
                const {
                  device: Wz
                } = zz;
                let Xz, Oz;
                Wz.pushErrorScope("validation");
                try {
                  Xz = zz.pipelineBuild(tz, sz, Fz)
                } finally {
                  Oz = Wz.popErrorScope().catch((() => null))
                }
                const [oz, vz] = await Promise.all([Oz, Xz.built.then((() => null), (zz => null !== zz && void 0 !== zz ? zz : new Error("pipeline failed")))]);
                if (!oz && !vz) return To;
                const Uz = await Ao(Xz.module),
                  Kz = Uz.length > 0 ? Uz.map((zz => `${Xz.name} ${zz.lineNum}:${zz.linePos}: ${zz.message}`)).join("\n") : `${Xz.name}: ${yo(null!==vz&&void 0!==vz?vz:oz)}`;
                return {
                  status: "failed",
                  material: tz.model.name,
                  message: Kz
                }
              }(tz, Xz, tz.programKey(Xz, "none" !== Xz.texture, Wz), sz): (console.warn(`Shader pack: skipped the compile check for "${Fz.name}", whose textures failed to load`), co)) : To
            } catch (Xz) {
              return {
                status: "failed",
                material: Fz.name,
                message: yo(Xz)
              }
            }
          }(zz, tz, Fz, sz))
        }))),
        Oz = function(zz, tz) {
          let sz, Fz, Wz = !1;
          const Xz = new Promise((Xz => {
            var Oz;
            sz = setTimeout((() => {
              Xz("timeout")
            }), null !== (Oz = tz.timeoutMs) && void 0 !== Oz ? Oz : Go), Fz = setInterval((() => {
              tz.isCancelled() && Xz("ds")
            }), 50), zz.lost.then((() => {
              Wz = !0, Xz("lost")
            }))
          }));
          return {
            signal: Xz,
            lost: () => Wz,
            dispose: () => {
              clearTimeout(sz), clearInterval(Fz)
            }
          }
        }(tz.device, zz);
      let oz;
      try {
        oz = await Promise.race([Xz.then((() => "done")), Oz.signal])
      } finally {
        Oz.dispose()
      }
      if ("ds" === oz || sz()) return {
        status: "ds"
      };
      const vz = Wz.find((zz => "failed" === zz.status));
      return vz && "lost" !== oz && !Oz.lost() && await new Promise((zz => {
        setTimeout(zz, 0)
      })), "lost" === oz || Oz.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : vz ? {
        status: "failed",
        failure: {
          material: vz.material,
          message: vz.message
        }
      } : "timeout" === oz ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Uz=zz.timeoutMs)&&void 0!==Uz?Uz:Go)/1e3} s`), {
        status: "skipped"
      }) : Wz.some((zz => "skipped" === zz.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Uz
    }
    async function Ao(zz) {
      if (!zz) return [];
      try {
        return (await zz.getCompilationInfo()).messages.filter((zz => "error" === zz.type))
      } catch {
        return []
      }
    }

    function yo(zz) {
      var tz;
      return null !== (tz = null === zz || void 0 === zz ? void 0 : zz.message) && void 0 !== tz ? tz : String(zz)
    }

    function Mo(zz, tz, sz, Fz) {
      NF(zz) ? Ao(sz).then((zz => {
        const [sz] = zz;
        RW("terrain", tz, Fz, sz ? `${sz.lineNum}:${sz.linePos} error: ${sz.message}` : null)
      })) : RW("terrain", tz, Fz)
    }
    var ho = sz(36932),
      Qo = sz(36943),
      ko = sz(36949),
      io = sz(36879);

    function Lo(zz, tz, sz, Fz, Wz) {
      const Xz = Math.hypot(sz[0], sz[1], sz[2]);
      if (!(Xz > 0)) return;
      const Oz = [sz[0] / Xz, sz[1] / Xz, sz[2] / Xz],
        oz = [Math.floor(tz[0]), Math.floor(tz[1]), Math.floor(tz[2])],
        vz = [0, 0, 0],
        Uz = [1 / 0, 1 / 0, 1 / 0],
        Kz = [1 / 0, 1 / 0, 1 / 0];
      for (let bz = 0; bz < 3; bz++) Oz[bz] > 0 ? (vz[bz] = 1, Uz[bz] = (oz[bz] + 1 - tz[bz]) / Oz[bz], Kz[bz] = 1 / Oz[bz]) : Oz[bz] < 0 && (vz[bz] = -1, Uz[bz] = (oz[bz] - tz[bz]) / Oz[bz], Kz[bz] = -1 / Oz[bz]);
      const {
        pw: uz
      } = zz;
      let Nz = zz.Wk(oz[0], oz[1], oz[2]);
      for (;;) {
        const tz = Uz[0] < Uz[1] ? Uz[0] < Uz[2] ? 0 : 2 : Uz[1] < Uz[2] ? 1 : 2;
        if (Uz[tz] > Fz) return;
        const sz = vz[tz] > 0 ? oz[tz] + 1 : oz[tz];
        oz[tz] += vz[tz], Uz[tz] += Kz[tz];
        const Xz = zz.Wk(oz[0], oz[1], oz[2]),
          Oz = Xz !== Nz && !(zz.opaque[Nz] && zz.opaque[Xz]);
        if (Oz) {
          const Fz = [oz[0], oz[1], oz[2]];
          Fz[tz] = sz;
          const Xz = Math.floor(Fz[0] / uz),
            Oz = Math.floor(Fz[1] / uz),
            vz = Math.floor(Fz[2] / uz);
          !zz.isDrawn(Xz, Oz, vz) && zz.hasParts(Xz, Oz, vz) && Wz.add(`${Xz},${Oz},${vz}`)
        }
        if (Oz && zz.occluders[Xz]) return;
        Nz = Xz
      }
    }

    function no(zz, tz) {
      return zz.group - tz.group || zz.nearest - tz.nearest
    }
    class ao {
      constructor(zz, tz) {
        this.device = zz, this.YB = tz, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var zz;
        const tz = null !== (zz = this.free.pop()) && void 0 !== zz ? zz : this.next++;
        if (8 * tz >= this.data.length) {
          const zz = new Float32Array(2 * this.data.length);
          zz.set(this.data), this.data = zz, this.words = new Uint32Array(zz.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.YB()
        }
        return tz
      }
      release(zz) {
        this.free.push(zz)
      }
      set(zz, tz, sz, Fz, Wz) {
        const Xz = 8 * zz + xF;
        this.data[Xz] = tz, this.data[Xz + 1] = sz, this.data[Xz + 2] = Fz, this.setVisibility(zz, Wz)
      }
      setVisibility(zz, tz) {
        this.data[8 * zz + mF] = tz, this.markDirty(zz, zz)
      }
      setFaces(zz, tz, sz) {
        const Fz = 8 * zz;
        this.words[Fz + JF] = tz, this.words[Fz + IF] = sz, this.markDirty(zz, zz)
      }
      markDirty(zz, tz) {
        this.dirtyMin = Math.min(this.dirtyMin, zz), this.dirtyMax = Math.max(this.dirtyMax, tz)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const qo = YF,
      So = !0;
    const Vo = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: qo.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Ro = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class po {
      constructor(zz) {
        this.device = zz, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(wF), this.dirLightUniforms = this.frameUniforms.subarray(bF.dirLights, bF.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Ut.c)(), this.faceGroups = !0, this.visibilityGraph = So, this.visCull = So, this.visCheck = !1, this.visCullMinDistance = ko.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new tv, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Cw = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new mo(zz, ((zz, tz) => this.recordsGroup(zz, tz))), this.slots = new ao(zz, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = tt(zz), this.frameLayout = zz.createBindGroupLayout({
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
        }), this.frameBuffer = zz.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = zz.createSampler({
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
          bind: (zz, tz) => this.createBinding(this.opaqueRenderable, tz, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (zz, tz) => this.createBinding(this.transparentRenderable, tz, !0)
        }
      }
      installSceneDepth(zz, tz) {
        this.sceneDepth = new Jo(this.device, this.transparentRenderable, zz, tz)
      }
      createFrameBindGroup() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== zz && void 0 !== zz ? zz : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== tz && void 0 !== tz ? tz : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(zz, tz) {
        const sz = null !== tz && void 0 !== tz ? tz : zz;
        let Fz = this.recordsGroups.get(sz);
        return Fz || (Fz = this.createFrameBindGroup(zz, tz), this.recordsGroups.set(sz, Fz)), Fz
      }
      setChunkMesh(zz, tz, sz) {
        var Fz;
        let Wz = this.chunks.get(zz);
        Wz ? this.geometry.release(Wz) : (Wz = {
          mesh: zz,
          slot: this.slots.allocate(),
          origin: [sz[0], sz[1], sz[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: zz.visibility,
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
        }, this.chunks.set(zz, Wz), this.writeSlot(Wz)), Wz.material = zz.material ? this.materialFor(zz.material) : null, Wz.packed = !!tz.packedVertices, Wz.vertexCount = (0, wo.g)(tz), Wz.faceCount = Wz.vertexCount / 4;
        const Xz = null !== (Fz = tz.faceGroups) && void 0 !== Fz ? Fz : null;
        if (Wz.faceGroups = Xz, Xz) {
          const zz = ho.j;
          Wz.planePX = Xz[zz], Wz.planeNX = Xz[zz + 1], Wz.planePY = Xz[zz + 2], Wz.planeNY = Xz[zz + 3], Wz.planePZ = Xz[zz + 4], Wz.planeNZ = Xz[zz + 5]
        }
        this.drawWhole(Wz), 0 !== Wz.faceCount && (this.geometry.set(Wz, tz) ? (Wz.packed && this.slots.setFaces(Wz.slot, Wz.vertices.start + Wz.faceCount, Wz.faceCount), tz.Mw && this.setChunkMeshLight(zz, tz.Mw)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Wz.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(zz, tz) {
        const sz = this.chunks.get(zz);
        sz && this.geometry.setLight(sz, tz)
      }
      drawStats() {
        let zz = this.transparent.length;
        for (const tz of this.opaqueBatches) zz += tz.meshes.length;
        return {
          drawn: zz,
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
      removeChunkMesh(zz) {
        const tz = this.chunks.get(zz);
        tz && (this.geometry.release(tz), this.slots.release(tz.slot), this.chunks.delete(zz))
      }
      remeshLost(zz, tz) {
        this.geometry.release(tz), tz.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** tz.lostRemeshes++);
        const sz = zz.PN,
          [Fz, Wz, Xz] = sz.MFz(tz.origin[0], tz.origin[1], tz.origin[2]),
          Oz = sz.LD.lD(Fz, Wz, Xz);
        Oz && (Oz.kD = !0, Oz.VD = !0, sz.iD(Oz, !1))
      }
      chooseFaceRanges(zz, tz, sz) {
        const Fz = this.faceRanges;
        zz.faceMask = sz, zz.rangeCount = (0, Qo.n)(tz, sz, Fz), zz.first0 = Fz[0], zz.count0 = Fz[1], zz.first1 = Fz[2], zz.count1 = Fz[3]
      }
      drawWhole(zz) {
        zz.faceMask = -1, zz.faceEpoch = -1, zz.rangeCount = 1, zz.first0 = 0, zz.count0 = zz.faceCount
      }
      writeSlot(zz) {
        const [tz, sz, Fz] = this.originOffset;
        this.slots.set(zz.slot, zz.origin[0] - tz, zz.origin[1] - sz, zz.origin[2] - Fz, zz.visibility)
      }
      materialFor(zz) {
        const tz = this.materials.get(zz);
        if (tz) return tz;
        const sz = go(zz);
        if (!sz) return this.warnOnce(`material:${zz.name}`, `Lite terrain cannot draw material "${zz.name}"; its chunks are skipped.`), null;
        const {
          model: Fz,
          atlas: Wz,
          texture: Xz,
          animated: Oz,
          uniformData: oz
        } = sz, vz = {
          id: this.materials.size,
          model: Fz,
          texture: Xz,
          animated: Oz,
          uniformData: oz,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${zz.name}`,
            size: oz.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: sz.liquid,
          customRenderMat: sz.customRenderMat,
          atlasCount: 0,
          fV: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(zz, vz), this.device.queue.writeBuffer(vz.uniformBuffer, 0, oz), vz.ready = this.createMaterialBindGroup(vz, Wz).catch((tz => {
          console.error(`Lite terrain failed to load the textures of material "${zz.name}"`, tz)
        })), vz
      }
      materialLayout(zz) {
        const tz = function(zz) {
            const tz = ["uniforms"];
            if ("atlas" === zz.texture) {
              zz.animated && tz.push("animData"), tz.push("sampler");
              for (let sz = 0; sz < zz.atlasCount; sz++) tz.push("textureArray")
            } else "single" === zz.texture && tz.push("sampler", "texture");
            return tz
          }(zz),
          sz = tz.join(",");
        let Fz = this.materialLayouts.get(sz);
        if (!Fz) {
          const zz = GPUShaderStage.FRAGMENT;
          Fz = this.device.createBindGroupLayout({
            label: `terrain-material-${sz}`,
            entries: tz.map(((tz, sz) => {
              switch (tz) {
                case "uniforms":
                  return {
                    binding: sz, visibility: GPUShaderStage.VERTEX | zz, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: sz, visibility: GPUShaderStage.VERTEX | zz, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: sz, visibility: zz, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: sz, visibility: zz, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: sz, visibility: zz, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(sz, Fz)
        }
        return Fz
      }
      async createMaterialBindGroup(zz, tz) {
        const sz = [{
          buffer: zz.uniformBuffer
        }];
        if (tz) {
          const {
            urls: Fz,
            pixels: Wz,
            layerWidth: Xz
          } = tz.sources, Oz = await Promise.all(Fz.map(((zz, tz) => {
            var sz;
            return LW(this.device, zz, null !== (sz = null === Wz || void 0 === Wz ? void 0 : Wz[tz]) && void 0 !== sz ? sz : null, Xz)
          })));
          zz.atlasCount = Oz.length, zz.fV = Oz[0].layerWidth, zz.atlasLayers = Oz[0].layers, tz.animDataPerTex && sz.push({
            buffer: AW(this.device, Float32Array.from(tz.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), sz.push(this.sampler);
          for (const zz of Oz) sz.push(zz.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === zz.texture) {
          const {
            url: tz
          } = zz.model.diffuseTexture.source, {
            pixels: Fz,
            width: Wz,
            height: Xz
          } = await kW(tz);
          sz.push(this.sampler), sz.push(MW(this.device, Fz, Wz, Xz, 1, `terrain-${tz}`).createView({
            dimension: "2d"
          }))
        }
        const Fz = this.materialLayout(this.programKey(zz, !1));
        zz.bindGroupLayout = Fz, zz.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${zz.model.name}`,
          layout: Fz,
          entries: sz.map(((zz, tz) => ({
            binding: tz,
            resource: zz
          })))
        })
      }
      programKey(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Fz = sz ? sz.lighting : this.lighting,
          Wz = sz ? sz.Cw : this.Cw,
          Xz = {
            texture: zz.texture,
            atlasCount: zz.atlasCount,
            fV: zz.fV,
            atlasLayers: zz.atlasLayers,
            animated: zz.animated,
            alphaTest: zz.model.transparencyMode === Iz.q.alphaTest,
            lighting: Fz,
            dirLightCount: sz ? sz.dirLightCount : this.dirLightCount,
            packed: tz
          };
        if (!Wz) return Xz;
        const Oz = this.shaderPackFields(zz, Wz),
          oz = "atlas" === zz.texture && zz.model.transparencyMode === Iz.q.opaque && vF(Oz.packVariant);
        return {
          ...Xz,
          ...Oz,
          alphaTest: Xz.alphaTest || oz
        }
      }
      shaderPackFields(zz, tz) {
        return zz.customRenderMat ? OF : function(zz, tz) {
          if (!zz) return OF;
          const sz = zz.defineFor(tz ? "liquid" : "terrain");
          return 0 === sz ? OF : {
            packVariant: sz,
            liquid: tz
          }
        }(tz, zz.liquid)
      }
      isBlended(zz) {
        return zz.model.transparencyMode === Iz.q.alphaBlend
      }
      shaderModule(zz, tz) {
        let sz = this.modules.get(zz);
        return sz || (sz = this.device.createShaderModule({
          label: tz,
          code: zz
        }), this.modules.set(zz, sz)), sz
      }
      pipelineFor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!zz.bindGroupLayout) return null;
        const Wz = this.programKey(zz, tz);
        if (!Fz) return this.pipelineOf(zz, Wz, sz);
        const Xz = {
            ...Wz,
            resting: Fz
          },
          Oz = this.pipelineId(zz, Xz, sz),
          oz = this.pipelines.get(Oz);
        if (oz) return oz;
        const vz = this.pipelineOf(zz, Wz, sz);
        return vz && void 0 === oz && this.startPipeline(Oz, zz, Xz, sz), vz
      }
      pipelineOf(zz, tz, sz) {
        const Fz = this.pipelineId(zz, tz, sz),
          Wz = this.pipelines.get(Fz);
        return void 0 !== Wz ? Wz : (this.startPipeline(Fz, zz, tz, sz), null)
      }
      pipelineId(zz, tz, sz) {
        return fo(tz, this.isBlended(zz), zz.model.backFaceCulling, sz)
      }
      pipelineBuild(zz, tz, sz) {
        var Fz;
        const Wz = this.pipelineId(zz, tz, sz);
        return null !== (Fz = this.builds.get(Wz)) && void 0 !== Fz ? Fz : this.startPipeline(Wz, zz, tz, sz)
      }
      startPipeline(zz, tz, sz, Fz) {
        var Wz;
        this.pipelines.set(zz, null);
        const Xz = cF(sz),
          Oz = this.isBlended(tz),
          oz = this.shadowMask && Fz._depthStencilFormat ? function(zz, tz, sz, Fz) {
            if (void 0 === zz.packVariant || zz.liquid || tz) return "none";
            const Wz = (0, et.d)(zz.packVariant);
            return null === Wz || void 0 === Wz || !Wz.sunShadow || !Qs(Wz, sz) || Wz.discards || zz.alphaTest && vF(zz.packVariant) ? "none" : Fz ? "edge" : "plain"
          }(sz, Oz, !!this.sunShadow, Fz._sampleCount > 1) : "none";
        let vz;
        try {
          vz = jF(sz, !!this.sunShadow, oz)
        } catch (gz) {
          if (!NF(sz)) throw gz;
          return this.failedPackBuild(zz, sz, Xz, gz)
        }
        const Uz = this.shaderModule(vz, Xz),
          Kz = [];
        sz.packed || (Kz.push(function(zz, tz) {
          const sz = [{
            shaderLocation: qo.position,
            offset: Jt.d.rt,
            format: "float32x3"
          }, {
            shaderLocation: qo.normal,
            offset: Jt.d.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: qo.color,
            offset: Jt.d.colorOffset,
            format: "unorm8x4"
          }];
          return zz && sz.push({
            shaderLocation: qo.uv,
            offset: Jt.d.uvOffset,
            format: "float32x2"
          }), tz && sz.push({
            shaderLocation: qo.blockFlagWords,
            offset: Jt.d.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: Jt.d.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: sz
          }
        }("none" !== sz.texture, NF(sz))), sz.lighting && Kz.push(Vo));
        const uz = tz.model.backFaceCulling,
          Nz = {
            label: Xz,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, tz.bindGroupLayout, ...lX(this.device, sz, !!this.sunShadow, "none" !== oz)]
            }),
            vertex: {
              module: Uz,
              entryPoint: "mainVertex",
              buffers: Kz
            },
            fragment: pz({
              module: Uz,
              entryPoint: "mainFragment"
            }, Fz, Oz ? Ro : null),
            depthStencil: Fz._depthStencilFormat ? {
              format: Fz._depthStencilFormat,
              depthCompare: null !== (Wz = Fz._depthCompare) && void 0 !== Wz ? Wz : st,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Fz._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: uz ? "back" : "none"
            }
          },
          bz = sz.resting ? 0 : 1;
        this.compiling += bz;
        const wz = "none" === oz ? this.device.createRenderPipelineAsync(Nz) : this.startMaskPipelines(Uz, Nz, "edge" === oz);
        wz.then((tz => {
          this.compiling -= bz, this.pipelines.set(zz, tz)
        }), (zz => {
          this.compiling -= bz, console.error(`Lite terrain pipeline ${Xz} failed`, zz), Mo(sz, Xz, Uz, zz)
        }));
        const Dz = {
          name: Xz,
          module: Uz,
          built: wz
        };
        return this.builds.set(zz, Dz), Dz
      }
      startMaskPipelines(zz, tz, sz) {
        const Fz = tz.depthStencil,
          Wz = this.device.createRenderPipelineAsync(sz ? tz : {
            ...tz,
            depthStencil: {
              ...Fz,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Xz = this.device.createRenderPipelineAsync({
            ...tz,
            label: `${tz.label}-prepass`,
            fragment: {
              module: zz,
              entryPoint: "prepassFragment",
              targets: [{
                format: Io
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Wz, Xz]).then((zz => {
          let [tz, sz] = zz;
          return this.prepassOf.set(tz, sz), this.maskPipelines++, tz
        }))
      }
      failedPackBuild(zz, tz, sz, Fz) {
        console.error(`Lite terrain pipeline ${sz} failed`, Fz), Mo(tz, sz, null, Fz);
        const Wz = Promise.reject(Fz);
        Wz.catch((() => {}));
        const Xz = {
          name: sz,
          module: null,
          built: Wz
        };
        return this.builds.set(zz, Xz), Xz
      }
      checkShaderPack(zz) {
        return jo(zz, {
          device: this.device,
          target: this.target,
          material: zz => this.materialFor(zz),
          programKey: (zz, tz, sz) => this.programKey(zz, tz, sz),
          pipelineBuild: (zz, tz, sz) => this.pipelineBuild(zz, tz, sz)
        })
      }
      createBinding(zz, tz, sz) {
        return this.target = tz, {
          renderable: zz,
          pipeline: Ot(this.device, tz),
          draw: zz => {
            this.geometry.setDrawing(!0);
            try {
              return sz ? this.drawTransparent(zz, tz) : this.drawOpaque(zz, tz)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(zz, tz) {
        var sz, Fz, Wz, Xz;
        const {
          CN: Oz
        } = zz;
        this.lighting = zz.Xg;
        const oz = (0, bo.p)(tz);
        this.dirLightCount = Math.min(oz, 4), this.Cw = null !== (sz = Oz.Cw) && void 0 !== sz ? sz : null, oz > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(zz, tz), this.animateMaterials(tz.animTick);
        const vz = Oz.nN,
          Uz = vz[0] !== this.originOffset[0] || vz[1] !== this.originOffset[1] || vz[2] !== this.originOffset[2];
        Uz && (this.originOffset[0] = vz[0], this.originOffset[1] = vz[1], this.originOffset[2] = vz[2]);
        const Kz = tz.eye;
        this.eye[0] = Kz[0], this.eye[1] = Kz[1], this.eye[2] = Kz[2], this.writeShaderPackInputs();
        const uz = tz.projectionMatrix,
          Nz = 0 === uz[15];
        let bz = 0;
        (Uz || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: wz
        } = this;
        ot(this.transparentRenderable._worldCenter, tz, Wt), this.resetBatches(Nz), this.transparent.length = 0, this.unlit.length = 0;
        const Dz = Oz.PN.K9,
          gz = Dz / 2 * Math.sqrt(3);
        let Hz = 0;
        const Bz = !!this.Cw && oF(this.Cw.defineFor("liquid"));
        let Pz = !1;
        const rz = null !== (Fz = null === (Wz = Oz.AY) || void 0 === Wz ? void 0 : Wz.visibility) && void 0 !== Fz ? Fz : null,
          Yz = this.visCull && Nz && 0 === this.compiling && null !== rz && Oz.PN.Ssz[0] >= this.visCullMinDistance ? this.target : null,
          xz = this.visPassable,
          mz = this.visCandidates,
          Jz = this.visCandidateBatches;
        xz.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let Iz = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Cz = 0;
        const ez = (zz, sz) => {
          if (!sz) return this.transparent.push(zz), void(Cz += 2 * zz.faceCount);
          if (null !== zz.faceGroups && sz.faceCull) {
            if (0 === bz && (bz = (0, Qo.d)(uz, tz.renderWidth, tz.renderHeight), bz !== this.faceFocalPx && (this.faceFocalPx = bz, wz = ++this.faceEpoch)), zz.faceEpoch !== wz) {
              zz.faceEpoch = wz;
              const tz = Math.sqrt(zz.distance) + gz,
                sz = (0, Qo.j)(zz.planePX, zz.planeNX, zz.planePY, zz.planeNY, zz.planePZ, zz.planeNZ, this.eye[0] - (zz.origin[0] - this.originOffset[0]), this.eye[1] - (zz.origin[1] - this.originOffset[1]), this.eye[2] - (zz.origin[2] - this.originOffset[2]), (0, Qo.h)(tz, bz));
              sz !== zz.faceMask && this.chooseFaceRanges(zz, zz.faceGroups, sz)
            }
            if (0 === zz.rangeCount) return
          } else - 1 !== zz.faceMask && this.drawWhole(zz);
          sz.meshes.push(zz), Cz += 2 * ((zz.rangeCount > 0 ? zz.count0 : 0) + (zz.rangeCount > 1 ? zz.count1 : 0))
        };
        for (const Gz of this.chunks.values()) {
          Uz && this.writeSlot(Gz);
          const zz = Gz.mesh.visibility;
          zz !== Gz.visibility && (Gz.visibility = zz, this.slots.setVisibility(Gz.slot, zz));
          const {
            material: sz
          } = Gz;
          this.geometry.lost(Gz) && performance.now() >= Gz.lostRetryAt && this.remeshLost(Oz, Gz);
          const Fz = !(null === sz || void 0 === sz || !sz.bindGroup) && this.geometry.backed(Gz),
            Wz = Fz && this.lighting && !Gz.vertices.page.twin;
          if (Yz && (Number.isNaN(Gz.key) && (Gz.ci = Math.floor(Gz.origin[0] / Dz), Gz.cj = Math.floor(Gz.origin[1] / Dz), Gz.ck = Math.floor(Gz.origin[2] / Dz), Gz.key = (0, io.l)(Gz.ci, Gz.cj, Gz.ck)), (!Fz || zz < 1 || Wz || !this.batchDraws(sz, Gz.packed, Yz)) && this.visSeeThrough(Gz, Yz) && xz.add(Gz.key)), !Fz) continue;
          Wz || (Gz.lostRemeshes = 0);
          const Xz = Gz.origin[0] - this.originOffset[0],
            oz = Gz.origin[1] - this.originOffset[1],
            vz = Gz.origin[2] - this.originOffset[2];
          if (!(0, to.c)(tz.frustum, Xz, oz, vz, Dz)) continue;
          const Kz = Xz + Dz / 2 - this.eye[0],
            uz = oz + Dz / 2 - this.eye[1],
            bz = vz + Dz / 2 - this.eye[2];
          if (Gz.distance = Kz * Kz + uz * uz + bz * bz, this.lighting && !Gz.lit && (Hz = Math.max(Hz, Gz.vertexCount), this.unlit.push(Gz)), Wz) continue;
          const wz = this.isBlended(sz) ? null : this.batchFor(sz, Gz.packed, Gz.vertices.page, 1 === zz, Nz);
          Yz ? (mz[Iz] = Gz, Jz[Iz++] = wz) : ez(Gz, wz)
        }
        const Zz = Yz ? this.sweepVisibility(zz, tz, rz) : null;
        null === (Xz = (0, cX.x)(Oz)) || void 0 === Xz || Xz.update(tz.frustum, this.originOffset, Dz, Zz);
        for (let Gz = 0; Gz < Iz; Gz++) {
          const zz = mz[Gz];
          !Zz || Zz.isDrawn(zz.ci, zz.cj, zz.ck) ? ez(zz, Jz[Gz]) : (this.visCulledParts++, this.visCulledTriangles += 2 * zz.faceCount)
        }
        for (const Gz of this.transparent) Pz ||= Bz && Gz.material.liquid && !Gz.material.customRenderMat;
        this.submittedTriangles = Cz, Zz && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(zz, tz, Zz)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Pz) : Pz && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && Hz > 0 && this.geometry.lightFullSky(this.unlit, Hz);
        for (const Gz of this.opaqueBatches) this.chunkSorter.sort(Gz.meshes, 1) || Gz.meshes.sort(Eo);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(zv)
      }
      sweepVisibility(zz, tz, sz) {
        const {
          PN: Fz
        } = zz.CN, Wz = Fz.K9, Xz = this.visPassable, Oz = this.eye[0] + this.originOffset[0], oz = this.eye[1] + this.originOffset[1], vz = this.eye[2] + this.originOffset[2];
        if (!sz.eyeClear(Oz, oz, vz, tz.near, tz.projectionMatrix, Fz)) return null;
        const [Uz, Kz] = Fz.Ssz, uz = sz.update(Oz, oz, vz, Wz, Uz, Kz, Xz);
        return this.visSweeps = sz.sweeps, uz ? sz : null
      }
      visSeeThrough(zz, tz) {
        const {
          material: sz
        } = zz;
        return (!sz || !this.isBlended(sz)) && (zz.mesh.visibility < 1 || !(null !== sz && void 0 !== sz && sz.bindGroup) || zz.faceCount > 0 && (!this.geometry.backed(zz) || this.lighting && !zz.vertices.page.twin) || !this.batchDraws(sz, zz.packed, tz))
      }
      batchDraws(zz, tz, sz) {
        var Fz;
        const Wz = tz ? 2 : 0;
        if (zz === this.visDrawsMaterial && function(zz, tz) {
            return 0 !== (zz & 1 << tz)
          }(this.visDrawsBits, Wz)) return 0 !== (this.visDrawsBits & 2 << Wz);
        let Xz = null !== (Fz = this.visBatchDraws.get(zz)) && void 0 !== Fz ? Fz : 0;
        if (!(Xz & 1 << Wz)) {
          Xz |= 1 << Wz | (!!zz.bindGroupLayout && this.canDraw(zz, tz) && !!this.pipelines.get(this.pipelineId(zz, this.programKey(zz, tz), sz)) ? 2 << Wz : 0), this.visBatchDraws.set(zz, Xz)
        }
        return this.visDrawsMaterial = zz, this.visDrawsBits = Xz, 0 !== (Xz & 2 << Wz)
      }
      runVisCheck(zz, tz, sz) {
        const {
          CN: Fz
        } = zz, {
          PN: Wz
        } = Fz, Xz = Wz.K9, Oz = new Set;
        for (const bz of this.chunks.values()) Oz.add(bz.key);
        const oz = xW.Matrix.FromArray(tz.viewProjectionMatrix).invert(),
          [vz, Uz, Kz] = this.originOffset,
          uz = new xW.XD,
          Nz = function(zz, tz, sz, Fz) {
            const Wz = new Set;
            for (let Xz = 0; Xz < 27; Xz++)
              for (let Oz = 0; Oz < 48; Oz++) {
                const oz = sz((Oz + .5) / 48 * 2 - 1, (Xz + .5) / 27 * 2 - 1);
                Lo(zz, tz, [oz[0] - tz[0], oz[1] - tz[1], oz[2] - tz[2]], Fz, Wz)
              }
            return Wz
          }({
            Wk: (zz, tz, sz) => Wz.Wk(zz, tz, sz),
            occluders: sz.occluders,
            opaque: sz.opaque,
            pw: Xz,
            isDrawn: (zz, tz, Fz) => sz.isDrawn(zz, tz, Fz),
            hasParts: (zz, tz, sz) => Oz.has((0, io.l)(zz, tz, sz))
          }, [this.eye[0] + vz, this.eye[1] + Uz, this.eye[2] + Kz], ((zz, tz) => (xW.XD.TransformCoordinatesFromFloatsToRef(zz, tz, .5, oz, uz), [uz.x + vz, uz.y + Uz, uz.z + Kz])), (Wz.Ssz[0] + 1) * Xz);
        this.visViolations = Nz.size;
        for (const bz of Nz) this.warnOnce(`vis:${bz}`, `Lite terrain cave culling skipped chunk ${bz}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var zz;
        null !== (zz = this.Cw) && void 0 !== zz && zz.isRunning() && (this.shaderPackInputs ??= new nX(this.device, this.Cw.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Cw, this.eye, this.lighting))
      }
      bindShaderPackInputs(zz, tz, sz) {
        var Fz, Wz, Xz, Oz;
        let oz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: vz
        } = this.shaderPackFields(tz, sz);
        if (void 0 === vz) return;
        this.shaderPackInputs || (this.shaderPackInputs = new nX(this.device, sz.textureLayers(), this.sunShadow), this.shaderPackInputs.write(sz, this.eye, this.lighting));
        const Uz = oF(vz) ? null !== (Fz = null === (Wz = this.sceneDepth) || void 0 === Wz ? void 0 : Wz.view) && void 0 !== Fz ? Fz : this.standIn() : null,
          Kz = oz ? null !== (Xz = null === (Oz = this.shadowMask) || void 0 === Oz ? void 0 : Oz.view) && void 0 !== Xz ? Xz : this.standIn() : null;
        this.shaderPackInputs.bind(zz, Uz, LX(vz, !!this.sunShadow), Kz)
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
        var zz, tz;
        return null !== (zz = null === (tz = this.shaderPackInputs) || void 0 === tz ? void 0 : tz.bindGroupFor(null, !0)) && void 0 !== zz ? zz : null
      }
      resetBatches(zz) {
        const tz = this.opaqueBatches;
        let sz = 0;
        for (const Fz of tz) Fz.meshes.length > 0 && (Fz.meshes.length = 0, Fz.faceCull = this.batchFaceCull(Fz.material, zz), tz[sz++] = Fz);
        tz.length = sz
      }
      orderBatches() {
        const zz = this.opaqueBatches;
        for (let tz = 0; tz < zz.length; tz++) {
          const sz = zz[tz];
          sz.group = tz;
          for (let Fz = 0; Fz < tz; Fz++) {
            const tz = zz[Fz];
            if (tz.material === sz.material && tz.packed === sz.packed) {
              sz.group = tz.group;
              break
            }
          }
          sz.nearest = sz.meshes.length > 0 ? sz.meshes[0].distance : 1 / 0
        }
        zz.sort(no)
      }
      batchFor(zz, tz, sz, Fz, Wz) {
        for (const Oz of this.opaqueBatches)
          if (Oz.material === zz && Oz.packed === tz && Oz.page === sz && Oz.resting === Fz) return Oz;
        const Xz = {
          material: zz,
          packed: tz,
          page: sz,
          resting: Fz,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(zz, Wz)
        };
        return this.opaqueBatches.push(Xz), Xz
      }
      batchFaceCull(zz, tz) {
        return !(!tz || !(0, ho.m)(zz.model)) && (!this.Cw || ! function(zz) {
          var tz;
          return !(null === (tz = (0, et.d)(zz)) || void 0 === tz || !tz.movesVertices)
        }(this.shaderPackFields(zz, this.Cw).packVariant))
      }
      writeFrameUniforms(zz, tz) {
        const sz = this.frameUniforms,
          Fz = bF;
        if ((0, bo.t)(zz, sz), sz[Fz.fogInfos] = tz.fogEnabled ? tz.fogMode : 0, sz[Fz.fogInfos + 1] = tz.fogStart, sz[Fz.fogInfos + 2] = tz.fogEnd, sz[Fz.fogInfos + 3] = tz.fogDensity, sz.set(tz.fogColour, Fz.fogColour), sz[Fz.outputHeight] = tz.renderHeight, sz.set(tz.ambientColour, Fz.sceneAmbient), (0, bo.o)(tz, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const tz = (0, wo.i)(zz.CD, zz.zD, zz.tD);
          for (let zz = 0; zz < 4; zz++) sz[Fz.aoLevels + zz] = tz[zz] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, sz)
      }
      animateMaterials(zz) {
        const tz = DF.anim;
        for (const sz of this.materials.values()) sz.animated && (sz.uniformData[tz] = zz, this.device.queue.writeBuffer(sz.uniformBuffer, 4 * tz, sz.uniformData, tz, 1))
      }
      canDraw(zz, tz) {
        return !("atlas" === zz.texture && !tz) || (this.warnOnce(`stride:${zz.id}`, `Lite terrain: material "${zz.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(zz, tz) {
        let sz = 0;
        zz.setBindGroup(1, this.frameBindGroup);
        for (const Fz of this.opaqueBatches) {
          if (!Fz.meshes.length || !this.canDraw(Fz.material, Fz.packed)) continue;
          const Wz = this.pipelineFor(Fz.material, Fz.packed, tz, Fz.resting);
          Wz && (zz.setPipeline(Wz), zz.setBindGroup(2, Fz.material.bindGroup), this.Cw && this.bindShaderPackInputs(zz, Fz.material, this.Cw, this.prepassOf.has(Wz)), sz += this.drawBatch(zz, Fz))
        }
        return sz
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(zz, tz, sz) {
        const Fz = this.target,
          Wz = this.Cw;
        if (!Fz || !Wz || 0 === this.maskPipelines) return 0;
        let Xz = 0,
          Oz = null;
        this.geometry.setDrawing(!0);
        try {
          for (const oz of this.opaqueBatches) {
            if (!oz.meshes.length || !this.canDraw(oz.material, oz.packed)) continue;
            const vz = this.pipelineFor(oz.material, oz.packed, Fz, oz.resting),
              Uz = vz && this.prepassOf.get(vz);
            Uz && (Oz || (Oz = zz.beginRenderPass(tz), Oz.setBindGroup(0, sz), Oz.setBindGroup(1, this.frameBindGroup)), Oz.setPipeline(Uz), Oz.setBindGroup(2, oz.material.bindGroup), this.bindShaderPackInputs(Oz, oz.material, Wz, !0), Xz += this.drawBatch(Oz, oz))
          }
        } finally {
          var oz;
          null === (oz = Oz) || void 0 === oz || oz.end(), this.geometry.setDrawing(!1)
        }
        return Xz
      }
      drawBatch(zz, tz) {
        let sz = 0;
        for (const Fz of tz.meshes) {
          const {
            rangeCount: tz
          } = Fz;
          tz > 0 && (sz += this.geometry.draw(zz, Fz, this.lighting, Fz.first0, Fz.count0), tz > 1 && (sz += this.geometry.draw(zz, Fz, this.lighting, Fz.first1, Fz.count1)))
        }
        return sz
      }
      drawTransparent(zz, tz) {
        let sz = 0,
          Fz = null,
          Wz = null;
        zz.setBindGroup(1, this.frameBindGroup);
        for (const Xz of this.transparent) {
          const Oz = Xz.material;
          if (!this.canDraw(Oz, Xz.packed)) continue;
          const oz = this.pipelineFor(Oz, Xz.packed, tz);
          oz && (oz !== Fz && (zz.setPipeline(oz), Fz = oz, this.Cw && this.bindShaderPackInputs(zz, Oz, this.Cw)), Oz !== Wz && (zz.setBindGroup(2, Oz.bindGroup), Wz = Oz), sz += this.geometry.draw(zz, Xz, this.lighting))
        }
        return sz
      }
    }

    function fo(zz, tz, sz, Fz) {
      return `${cF(zz)}|${zz.atlasLayers}|${zz.fV}|${tz}|${sz}|${Fz._colorFormat}|${Fz._depthStencilFormat}|${Fz._sampleCount}`
    }

    function Eo(zz, tz) {
      return zz.distance - tz.distance
    }

    function zv(zz, tz) {
      return tz.distance - zz.distance
    }
    class tv {
      constructor() {
        this.left = []
      }
      sort(zz, tz) {
        for (let sz = 0; sz < zz.length; sz++) {
          const tz = zz[sz].distance;
          if (tz - tz !== 0) return !1
        }
        return this.sortRange(zz, 0, zz.length, tz), !0
      }
      sortRange(zz, tz, sz, Fz) {
        if (sz - tz <= 16) {
          for (let Wz = tz + 1; Wz < sz; Wz++) {
            const sz = zz[Wz],
              Xz = Fz * sz.distance;
            let Oz = Wz - 1;
            for (; Oz >= tz && Fz * zz[Oz].distance > Xz; Oz--) zz[Oz + 1] = zz[Oz];
            zz[Oz + 1] = sz
          }
          return
        }
        const Wz = tz + sz >>> 1;
        if (this.sortRange(zz, tz, Wz, Fz), this.sortRange(zz, Wz, sz, Fz), Fz * zz[Wz - 1].distance <= Fz * zz[Wz].distance) return;
        const {
          left: Xz
        } = this, Oz = Wz - tz;
        for (let Kz = 0; Kz < Oz; Kz++) Xz[Kz] = zz[tz + Kz];
        let oz = 0,
          vz = Wz,
          Uz = tz;
        for (; oz < Oz && vz < sz;) zz[Uz++] = Fz * zz[vz].distance < Fz * Xz[oz].distance ? zz[vz++] : Xz[oz++];
        for (; oz < Oz;) zz[Uz++] = Xz[oz++]
      }
    }
    const sv = Math.ceil(102);

    function Fv(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tz;
      const Xz = Math.min(tz, sz),
        Oz = new Uint32Array(ts(Fz));
      for (let oz = 0; oz < Fz; oz++) {
        const tz = Math.floor(oz * Xz / Fz),
          sz = Math.max(tz + 1, Math.floor((oz + 1) * Xz / Fz));
        for (let vz = 0; vz < Fz; vz++) {
          const Uz = Math.floor(vz * Xz / Fz),
            Kz = Math.max(Uz + 1, Math.floor((vz + 1) * Xz / Fz));
          let uz = 0;
          for (let Fz = tz; Fz < sz; Fz++)
            for (let tz = Uz; tz < Kz; tz++) zz[Fz * Wz + tz] >= sv && uz++;
          if (2 * uz >= (sz - tz) * (Kz - Uz)) {
            const zz = vz + Fz * oz;
            Oz[zz >>> 5] |= 1 << (31 & zz)
          }
        }
      }
      return Oz
    }

    function Wv(zz) {
      return Math.max(1, Math.min(16, zz))
    }
    class Xv {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = zz, this.loadTexture = tz, this.warn = sz, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(zz, tz) {
        return (zz.iG !== this.builtVersion || this.blockCaster.length !== tz) && (this.build(zz, tz), !0)
      }
      build(zz, tz) {
        this.builtVersion = zz.iG;
        const sz = new Uint16Array(tz),
          Fz = new Map;
        for (let Wz = 1; Wz < tz; Wz++) {
          const tz = this.classify(zz, Wz, Fz);
          if (null === tz || tz === Rt) {
            sz[Wz] = null === tz ? 0 : Rt;
            continue
          }
          let Xz = this.byKey.get(tz.key);
          void 0 === Xz && (Xz = this.allocate(tz), this.byKey.set(tz.key, Xz)), sz[Wz] = Xz
        }
        this.blockCaster = sz, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(zz, tz) {
        const sz = zz.sE[tz];
        if ("function" !== typeof sz) return sz;
        try {
          return sz()
        } catch (Fz) {
          return this.warnOnce(`Sun shadows: no caster option for block ${tz}: ${Fz instanceof Error?Fz.message:String(Fz)}`), null
        }
      }
      classify(zz, tz, sz) {
        const Fz = this.option(zz, tz);
        if ("none" === Fz) return null;
        if (Fz && Fz.planes.length > 0) {
          const zz = Fz.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(zz)}`,
            planes: zz
          }
        }
        if (zz.Tb[tz]) return null;
        const Wz = zz.jb[tz] ? zz.nG(tz) : null;
        if (Wz && Wz.length >= 6) {
          const zz = function(zz) {
            const tz = new Uint32Array(16);
            for (let sz = 0; sz + 6 <= zz.length; sz += 6) {
              const Fz = [0, 1, 2].map((tz => Math.max(0, Math.ceil(8 * zz[sz + tz] - .5)))),
                Wz = [0, 1, 2].map((tz => Math.min(7, Math.floor(8 * zz[sz + tz + 3] - .5))));
              for (let zz = Fz[2]; zz <= Wz[2]; zz++)
                for (let sz = Fz[1]; sz <= Wz[1]; sz++)
                  for (let Xz = Fz[0]; Xz <= Wz[0]; Xz++) {
                    const Fz = Xz + 8 * (sz + 8 * zz);
                    tz[Fz >>> 5] |= 1 << (31 & Fz)
                  }
            }
            return tz
          }(Wz);
          return function(zz) {
            return zz.every((zz => 4294967295 === zz))
          }(zz) ? Rt : zz.every((zz => 0 === zz)) ? null : {
            kind: "shape",
            key: `shape:${zz.join(",")}`,
            mask: zz
          }
        }
        if (zz.aT[tz] || !zz.eD[tz]) return null;
        const Xz = [0, 1, 2, 3, 4, 5].map((Fz => {
          const Wz = zz.ZD[6 * tz + Fz];
          let Xz = sz.get(Wz);
          return void 0 === Xz && (Xz = function(zz) {
            if (!zz || zz.hD) return null;
            const {
              RV: tz,
              fV: sz,
              VV: Fz
            } = zz;
            if (!tz || !sz || !(sz > 0) || void 0 === Fz || !(Fz >= 0)) return null;
            const Wz = tz[0],
              Xz = sz * sz * 4;
            if (!Wz || Wz.byteLength < Xz) return null;
            const Oz = Math.floor(Wz.byteLength / Xz),
              oz = tz[Math.floor(Fz / Oz)];
            if (!oz) return null;
            const vz = new Uint8Array(oz.buffer, oz.byteOffset, oz.byteLength),
              Uz = Fz % Oz * Xz;
            if (Uz + Xz > vz.length) return null;
            const Kz = new Uint8Array(sz * sz);
            let uz = !1;
            for (let Nz = 0; Nz < Kz.length; Nz++) Kz[Nz] = vz[Uz + 4 * Nz + 3], uz ||= Kz[Nz] < sv;
            return uz ? {
              alpha: Kz,
              width: sz
            } : null
          }(zz.dD(Wz)), sz.set(Wz, Xz)), Xz
        }));
        if (Xz.every((zz => null === zz))) return Rt;
        const Oz = Wv(Math.max(...Xz.map((zz => {
            var tz;
            return null !== (tz = null === zz || void 0 === zz ? void 0 : zz.width) && void 0 !== tz ? tz : 1
          })))),
          oz = new Uint32Array(ts(Oz)).fill(4294967295),
          vz = Xz.map((zz => null === zz ? oz : Fv(zz.alpha, zz.width, zz.width, Oz)));
        return {
          kind: "cutout",
          key: `cutout:${Oz}:${vz.map((zz=>zz.join(","))).join("|")}`,
          size: Oz,
          faces: vz
        }
      }
      allocate(zz) {
        if (this.nextCaster >= ss) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const tz = this.nextCaster++;
        if (this.writeCaster(tz, pt, 0, 0, 0), "shape" === zz.kind) {
          const sz = this.allocateMask(zz.mask.length);
          sz >= 0 && (this.sink(sz, zz.mask), this.writeCaster(tz, ft, sz, 0, 8))
        } else if ("cutout" === zz.kind) {
          const sz = ts(zz.size),
            Fz = this.allocateMask(6 * sz);
          if (Fz >= 0) {
            const Wz = new Uint32Array(6 * sz);
            zz.faces.forEach(((zz, tz) => {
              Wz.set(zz, tz * sz)
            })), this.sink(Fz, Wz), this.writeCaster(tz, zs, Fz, 0, zz.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(tz, zz.planes).finally((() => {
          this.planesLoading--
        })));
        return tz
      }
      async loadPlanes(zz, tz) {
        const sz = await Promise.all(tz.map((zz => this.texture(zz.texture))));
        if (sz.some((zz => null === zz))) return;
        const Fz = sz,
          Wz = Wv(Math.max(...Fz.map((zz => Math.min(zz.width, zz.height))))),
          Xz = ts(Wz),
          Oz = this.allocateMask(tz.length * (4 + Xz));
        if (Oz < 0) return;
        const oz = new Uint32Array(tz.length * (4 + Xz)),
          vz = 4 * tz.length;
        tz.forEach(((zz, tz) => {
          const sz = Oz + vz + tz * Xz;
          oz.set(function(zz, tz) {
            const [sz, Fz] = zz.tangent, Wz = Math.hypot(sz, Fz) || 1, Xz = sz / Wz, Oz = Fz / Wz, oz = zz.centre[0] * Oz - zz.centre[1] * Xz, vz = new Uint32Array(4);
            return new Float32Array(vz.buffer, 0, 3).set([Xz, Oz, oz]), vz[3] = tz, vz
          }(zz, sz), 4 * tz), oz.set(Fv(Fz[tz].alpha, Fz[tz].width, Fz[tz].height, Wz), vz + tz * Xz)
        })), this.sink(Oz, oz), this.writeCaster(zz, Et, Oz, tz.length, Wz)
      }
      texture(zz) {
        let tz = this.textures.get(zz);
        return tz || (tz = this.loadTexture(zz).catch((tz => (this.warn(`Sun shadows: no mask for ${zz}: ${tz instanceof Error?tz.message:String(tz)}`), null))), this.textures.set(zz, tz)), tz
      }
      allocateMask(zz) {
        if (this.nextMaskWord + zz > Fs) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const tz = 32768 + this.nextMaskWord;
        return this.nextMaskWord += zz, tz
      }
      writeCaster(zz, tz, sz, Fz, Wz) {
        this.sink(0 + 4 * zz, Uint32Array.of(tz, sz, Fz, Wz))
      }
      warnOnce(zz) {
        this.warned.has(zz) || (this.warned.add(zz), this.warn(zz))
      }
    }
    var Ov = sz(37125);

    function ov(zz) {
      return !zz.kD && !zz.dFz && !zz.gD
    }

    function vv() {
      return {
        bricks: new Uint32Array(kt),
        cells: new Uint16Array(32768),
        special: new Uint8Array(ht)
      }
    }
    class Uv {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = zz, this.writeVoxels = tz, this.writePool = sz, this.warn = Fz, this.eyeChunk = null, this.slotChunk = new Array(ct).fill(null), this.slotVersion = new Float64Array(ct).fill(-1), this.slotPool = new Array(ct).fill(null), this.starved = new Uint8Array(ct), this.queue = [], this.queued = new Uint8Array(ct), this.queueSorted = !0, this.freePool = new Uint32Array(Ws), this.freeCount = Ws, this.casterTable = null, this.warnedPool = !1, this.scratch = vv(), this.victimScratch = vv(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * ct), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Wz = 0; Wz < Ws; Wz++) this.freePool[Wz] = 65535 - Wz
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Ws - this.freeCount
      }
      chunkAdded(zz) {
        if (null === this.eyeChunk || !this.inRadius(zz.i, zz.j, zz.k)) return;
        const tz = qt(zz.i, zz.j, zz.k);
        this.slotChunk[tz] = zz, this.slotVersion[tz] = -1, this.enqueue(tz)
      }
      update(zz, tz, sz) {
        const Fz = this.casters.blockCaster;
        if (Fz !== this.casterTable) {
          this.casterTable = Fz;
          for (let zz = 0; zz < ct; zz++) this.slotVersion[zz] = -1, this.slotChunk[zz] && this.enqueue(zz)
        }
        const Wz = Math.floor(zz[0] / 32),
          Xz = Math.floor(zz[1] / 32),
          Oz = Math.floor(zz[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Wz || this.eyeChunk[1] !== Xz || this.eyeChunk[2] !== Oz) && (this.eyeChunk = [Wz, Xz, Oz], this.follow(tz), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let oz = 0; oz < ct; oz++) {
          const zz = this.slotChunk[oz];
          zz && (zz.zsz || zz.PD !== this.slotVersion[oz]) && this.enqueue(oz)
        }
        this.drain(sz), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(zz, tz) {
        this.records.set(tz, 4 * zz), this.windowTopStale = !0, this.writeVoxels(4 * zz, tz)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const zz = this.records;
        let tz = -1 / 0;
        for (let Fz = 0; Fz < zz.length; Fz += 4) {
          const sz = 255 & zz[Fz + 3];
          sz !== yt && sz !== Mt || !this.inRadius(zz[Fz], zz[Fz + 1], zz[Fz + 2]) || (tz = Math.max(tz, zz[Fz + 1] * Zt + (zz[Fz + 3] >>> 8)))
        }
        const sz = tz === -1 / 0 ? 1 : tz + Lt;
        sz !== this.windowTop[0] && (this.windowTop[0] = sz, this.writeVoxels(it, this.windowTop))
      }
      follow(zz) {
        const tz = this.eyeChunk,
          [sz, Fz, Wz] = Gt;
        for (let Oz = -Wz; Oz <= Wz; Oz++)
          for (let Wz = -Fz; Wz <= Fz; Wz++)
            for (let Fz = -sz; Fz <= sz; Fz++) {
              var Xz;
              const sz = tz[0] + Fz,
                oz = tz[1] + Wz,
                vz = tz[2] + Oz,
                Uz = qt(sz, oz, vz),
                Kz = this.slotChunk[Uz];
              if (Kz && !Kz.zsz && Kz.i === sz && Kz.j === oz && Kz.k === vz) continue;
              const uz = null !== (Xz = zz(sz, oz, vz)) && void 0 !== Xz ? Xz : null;
              Kz && (Kz.i !== sz || Kz.j !== oz || Kz.k !== vz) && this.slotPool[Uz] && (this.release(Uz), this.record.fill(0), this.writeRecord(Uz, this.record)), this.slotChunk[Uz] = uz, this.slotVersion[Uz] = -1, (uz || Kz) && this.enqueue(Uz)
            }
      }
      requeueStarved() {
        for (let zz = 0; zz < ct; zz++) this.starved[zz] && this.slotChunk[zz] && this.enqueue(zz)
      }
      enqueue(zz) {
        this.queued[zz] || (this.queued[zz] = 1, this.queue.push(zz), this.queueSorted = !1)
      }
      drain(zz) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const zz = new Map;
          for (const tz of this.queue) zz.set(tz, this.slotDistance(tz));
          this.queue.sort(((tz, sz) => zz.get(sz) - zz.get(tz))), this.queueSorted = !0
        }
        const tz = performance.now();
        let sz = 0;
        const Fz = [];
        for (; this.queue.length > 0 && (0 === sz || performance.now() - tz < zz);) {
          const zz = this.queue.pop(),
            tz = this.slotChunk[zz];
          !tz || tz.zsz || ov(tz) ? (this.queued[zz] = 0, this.encodeSlot(zz), sz++) : Fz.push(zz)
        }
        for (let Wz = Fz.length - 1; Wz >= 0; Wz--) this.queue.push(Fz[Wz])
      }
      slotDistance(zz) {
        const tz = this.slotChunk[zz],
          sz = this.eyeChunk;
        return tz ? Math.max(Math.abs(tz.i - sz[0]), Math.abs(tz.j - sz[1]), Math.abs(tz.k - sz[2])) : 0
      }
      inRadius(zz, tz, sz) {
        const Fz = this.eyeChunk,
          [Wz, Xz, Oz] = Gt;
        return Math.abs(zz - Fz[0]) <= Wz && Math.abs(tz - Fz[1]) <= Xz && Math.abs(sz - Fz[2]) <= Oz
      }
      release(zz) {
        const tz = this.slotPool[zz];
        if (tz) {
          for (let zz = tz.length - 1; zz >= 0; zz--) this.freePool[this.freeCount++] = tz[zz];
          this.slotPool[zz] = null
        }
      }
      encodeSlot(zz) {
        var tz, sz, Fz, Wz, Xz;
        let Oz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          oz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const vz = null !== (tz = null === (sz = this.slotPool[zz]) || void 0 === sz ? void 0 : sz.length) && void 0 !== tz ? tz : 0;
        this.release(zz), this.starved[zz] = 0;
        const Uz = this.slotChunk[zz],
          Kz = this.record;
        if (!Uz || Uz.zsz || !Uz.RN) return this.slotChunk[zz] = null, this.slotVersion[zz] = -1, Kz.fill(0), this.writeRecord(zz, Kz), void(vz > 0 && this.requeueStarved());
        this.slotVersion[zz] = Uz.PD;
        const uz = this.encodeBricks(Uz, zz, Oz, oz);
        Kz[0] = Uz.i, Kz[1] = Uz.j, Kz[2] = Uz.k, Kz[3] = uz, this.writeRecord(zz, Kz), null === (Fz = this.encoded) || void 0 === Fz || Fz.call(this, Uz), oz && (null !== (Wz = null === (Xz = this.slotPool[zz]) || void 0 === Xz ? void 0 : Xz.length) && void 0 !== Wz ? Wz : 0) < vz && this.requeueStarved()
      }
      encodeBricks(zz, tz, sz, Fz) {
        if (zz.Qw) return At;
        const Wz = this.casters.blockCaster,
          {
            data: Xz,
            stride: Oz,
            offset: oz
          } = zz.RN,
          [vz, Uz, Kz] = Oz,
          uz = Zt,
          {
            bricks: Nz,
            cells: bz,
            special: wz
          } = sz;
        Nz.fill(0), wz.fill(0);
        let Dz = 0,
          gz = 0,
          Hz = 0;
        for (let Bz = 0; Bz < uz; Bz++) {
          const tz = Bz >> 2,
            sz = 3 & Bz,
            Fz = zz.sw[Bz],
            Oz = Fz === Ov.g ? -1 : Fz < Wz.length ? Wz[Fz] : 0;
          if (0 !== Oz)
            for (let zz = 0; zz < uz; zz++) {
              const Fz = zz >> 2,
                Pz = 3 & zz;
              let rz = oz + zz * vz + Bz * Uz;
              for (let zz = 0; zz < uz; zz++, rz += Kz) {
                let oz = Oz;
                if (oz < 0) {
                  const zz = Xz[rz];
                  if (oz = zz < Wz.length ? Wz[zz] : 0, 0 === oz) continue
                }
                const vz = St(Fz, tz, zz >> 2),
                  Uz = Vt(Pz, sz, 3 & zz);
                Nz[3 * vz + (Uz >>> 5)] |= 1 << (31 & Uz), bz[vz * dt + Uz] = oz, Dz++, Hz = Bz, oz === Rt ? gz++ : wz[vz] = 1
              }
            }
        }
        return 0 === Dz ? At : 32768 === gz ? yt | Hz << 8 : (this.writePoolEntries(tz, sz, Fz), this.writeVoxels(Qt + tz * kt, Nz), Mt | Hz << 8)
      }
      writePoolEntries(zz, tz, sz) {
        const {
          bricks: Fz,
          cells: Wz,
          special: Xz
        } = tz, Oz = this.entry;
        let oz = 0;
        for (let Kz = 0; Kz < ht; Kz++) oz += Xz[Kz];
        if (0 === oz) return;
        sz && this.freeCount < oz && this.evictBeyond(zz, oz);
        const vz = new Uint32Array(sz ? Math.min(oz, this.freeCount) : 0);
        let Uz = 0;
        for (let Kz = 0; Kz < ht; Kz++) {
          if (!Xz[Kz]) continue;
          const sz = 3 * Kz;
          if (Uz === vz.length) {
            this.dropSpecials(tz, Kz), this.starved[zz] = 1;
            continue
          }
          const oz = this.freePool[--this.freeCount];
          vz[Uz++] = oz;
          for (let zz = 0; zz < dt; zz++) {
            const tz = Fz[sz + (zz >>> 5)] >>> (31 & zz) & 1 ? Wz[Kz * dt + zz] : 0;
            1 & zz ? Oz[zz >> 1] |= tz << 16 : Oz[zz >> 1] = tz
          }
          Fz[sz + 2] = oz + 1, this.writePool(Xs + 32 * oz, Oz)
        }
        vz.length > 0 && (this.slotPool[zz] = vz)
      }
      evictBeyond(zz, tz) {
        const sz = this.slotDistance(zz),
          Fz = [];
        for (let Wz = 0; Wz < ct; Wz++) Wz !== zz && this.slotPool[Wz] && this.slotDistance(Wz) > sz && Fz.push(Wz);
        Fz.sort(((zz, tz) => this.slotDistance(tz) - this.slotDistance(zz)));
        for (const Wz of Fz) {
          if (this.freeCount >= tz) return;
          const zz = this.slotChunk[Wz];
          zz && !zz.zsz && zz.RN && (zz.PD === this.slotVersion[Wz] || ov(zz)) && this.encodeSlot(Wz, this.victimScratch, !1)
        }
      }
      dropSpecials(zz, tz) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const sz = 3 * tz;
        for (let Fz = 0; Fz < dt; Fz++) zz.cells[tz * dt + Fz] !== Rt && (zz.bricks[sz + (Fz >>> 5)] &= ~(1 << (31 & Fz)))
      }
    }
    var Kv = sz(36860);
    class uv {
      constructor(zz) {
        this.device = zz, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new gs, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.PN = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = zz.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = zz.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(zz, tz, sz) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Fz
        } = this;
        Fz.ib(zz, tz), sz.forEachSunShadowCaster((zz => {
          this.add(zz)
        })), Fz.finish();
        const Wz = 0 === Fz.parts;
        if (Wz && this.uploadedEmpty) return;
        this.uploadedEmpty = Wz;
        const {
          queue: Xz
        } = this.device, {
          words: Oz
        } = Fz;
        Xz.writeBuffer(this.frameBuffer, 0, Oz, 0, 16385), Fz.refs > 0 && Xz.writeBuffer(this.frameBuffer, 65540, Oz, Us, Fz.refs), Wz || Xz.writeBuffer(this.frameBuffer, 327684, Oz, Ks, Fz.parts * vs)
      }
      add(zz) {
        const tz = this.gridFor(zz);
        if (!tz) return;
        const {
          frame: sz
        } = this, {
          PN: Fz,
          worldAt: Wz,
          instances: Xz,
          instanceCount: Oz,
          thin: oz
        } = zz;
        if (Xz)
          for (let vz = 0; vz < Oz; vz++) oz ? (Bs(Xz, 16 * vz, Fz, Wz, this.PN), sz.add(tz, this.PN)) : sz.add(tz, Xz, 16 * vz);
        else sz.add(tz, Fz, Wz)
      }
      gridFor(zz) {
        let {
          geometry: tz,
          indexed: sz,
          first: Fz,
          count: Wz,
          skip: Xz
        } = zz, Oz = this.grids.get(tz);
        Oz || (Oz = new Map, this.grids.set(tz, Oz));
        const oz = `${sz?Fz:-1-Fz}:${Wz}:${null!==Xz&&void 0!==Xz?Xz:""}`;
        let vz = Oz.get(oz);
        if (void 0 !== vz || this.gridsFull) return vz;
        const Uz = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Uz + 2;
        else if (Uz > this.bakeDeadline) return;
        return vz = this.bake(tz, sz, Fz, Wz, Xz), void 0 !== vz && Oz.set(oz, vz), vz
      }
      bake(zz, tz, sz, Fz, Wz) {
        const Xz = zz.vertexAttributes.find((zz => "position" === zz.kind)),
          Oz = Xz ? function(zz, tz, sz, Fz) {
            let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Xz = zz => tz ? tz[sz + zz] : sz + zz,
              Oz = zz => null !== Wz && [0, 1, 2].some((tz => {
                const sz = Xz(zz + tz);
                return sz >= Wz[0] && sz < Wz[1]
              })),
              oz = [1 / 0, 1 / 0, 1 / 0],
              vz = [-1 / 0, -1 / 0, -1 / 0];
            for (let Bz = 0; Bz + 2 < Fz; Bz += 3)
              if (!Oz(Bz))
                for (let tz = 0; tz < 3; tz++) {
                  const sz = Xz(Bz + tz);
                  for (let tz = 0; tz < 3; tz++) oz[tz] = Math.min(oz[tz], zz[3 * sz + tz]), vz[tz] = Math.max(vz[tz], zz[3 * sz + tz])
                }
            const Uz = Math.max(vz[0] - oz[0], vz[1] - oz[1], vz[2] - oz[2]);
            if (!(Uz > 0)) return null;
            const Kz = Uz / 64,
              uz = [0, 0, 0],
              Nz = [0, 0, 0],
              bz = [0, 0, 0];
            for (let Bz = 0; Bz < 3; Bz++) uz[Bz] = Math.min(65, Math.ceil((vz[Bz] - oz[Bz]) / Kz) + 1), Nz[Bz] = oz[Bz] - Kz / 2, bz[Bz] = Nz[Bz] + uz[Bz] * Kz;
            const wz = new Uint32Array(Math.ceil(uz[0] * uz[1] * uz[2] / 32)),
              Dz = new Float64Array(9),
              gz = [0, 0, 0],
              Hz = [0, 0, 0];
            for (let Bz = 0; Bz + 2 < Fz; Bz += 3)
              if (!Oz(Bz)) {
                for (let tz = 0; tz < 3; tz++) {
                  const sz = Xz(Bz + tz);
                  for (let Fz = 0; Fz < 3; Fz++) Dz[3 * tz + Fz] = zz[3 * sz + Fz]
                }
                for (let zz = 0; zz < 3; zz++) {
                  const tz = Math.min(Dz[zz], Dz[3 + zz], Dz[6 + zz]),
                    sz = Math.max(Dz[zz], Dz[3 + zz], Dz[6 + zz]);
                  gz[zz] = Math.max(0, Math.floor((tz - Nz[zz]) / Kz - 1e-6)), Hz[zz] = Math.min(uz[zz] - 1, Math.floor((sz - Nz[zz]) / Kz + 1e-6))
                }
                for (let zz = gz[2]; zz <= Hz[2]; zz++)
                  for (let tz = gz[1]; tz <= Hz[1]; tz++)
                    for (let sz = gz[0]; sz <= Hz[0]; sz++)
                      if (Ps(Dz, Nz[0] + (sz + .5) * Kz, Nz[1] + (tz + .5) * Kz, Nz[2] + (zz + .5) * Kz, Kz / 2)) {
                        const Fz = sz + uz[0] * (tz + uz[1] * zz);
                        wz[Fz >>> 5] |= 1 << (31 & Fz)
                      }
              } return {
              words: wz,
              lo: Nz,
              hi: bz,
              cell: Kz,
              dims: uz
            }
          }((0, Kv.k)(Xz, zz.vertexCount), tz ? zz.indexData : null, sz, Fz, Wz) : null;
        if (!Oz) return null;
        const {
          words: oz,
          ...vz
        } = Oz;
        if (this.gridTop + oz.length > Ns) return void(this.gridsFull = !0);
        const Uz = this.gridTop;
        return this.gridTop += oz.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Uz, oz), {
          ...vz,
          at: Uz
        }
      }
    }
    const Nv = Math.cos(1 * Math.PI / 180);

    function bv(zz, tz) {
      return zz[0] * tz[0] + zz[1] * tz[1] + zz[2] * tz[2] < Nv
    }
    async function wv(zz) {
      const {
        pixels: tz,
        width: sz,
        height: Fz
      } = await kW(zz), Wz = new Uint8Array(sz * Fz);
      for (let Xz = 0; Xz < Wz.length; Xz++) Wz[Xz] = tz[4 * Xz + 3];
      return {
        width: sz,
        height: Fz,
        alpha: Wz
      }
    }
    class Dv {
      constructor(zz, tz) {
        this.device = zz, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Ys.r), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = zz.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = zz.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * lt,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = zz.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [sz, Fz, Wz] = Ys.u;
        this.volume = zz.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: sz,
            height: Fz,
            depthOrArrayLayers: Wz
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = zz.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = zz.createBuffer({
          label: "sun-shadow-volume-work",
          size: Ys.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = tz ? new uv(zz) : null, this.entityStandIn = tz ? null : zz.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var zz, tz;
        const sz = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || sz.push("Lite sun shadow volume pipeline compiling");
        const Fz = null !== (zz = null === (tz = this.casters) || void 0 === tz ? void 0 : tz.planesLoading) && void 0 !== zz ? zz : 0;
        return Fz > 0 && sz.push(`${Fz} Lite sun shadow plane casters loading their textures`), sz
      }
      entries() {
        var zz, tz, sz, Fz;
        const Wz = Ct.v;
        return [{
          binding: Wz.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Wz.RN,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Wz.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Wz.volume,
          resource: this.volumeView
        }, {
          binding: Wz.sampler,
          resource: this.volumeSampler
        }, {
          binding: Wz.entities,
          resource: {
            buffer: null !== (zz = null === (tz = this.entities) || void 0 === tz ? void 0 : tz.frameBuffer) && void 0 !== zz ? zz : this.entityStandIn
          }
        }, {
          binding: Wz.entityGrids,
          resource: {
            buffer: null !== (sz = null === (Fz = this.entities) || void 0 === Fz ? void 0 : Fz.gridBuffer) && void 0 !== sz ? sz : this.entityStandIn
          }
        }]
      }
      prepare(zz, tz, sz) {
        var Fz;
        this.entitiesThisFrame = !1;
        const Wz = null !== (Fz = null === sz || void 0 === sz ? void 0 : sz.sunShadowReach()) && void 0 !== Fz ? Fz : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!sz || !Wz.sunShadow && !Wz.airShadow) return void(this.volumeHolds = null);
        if (zz.PN.K9 !== Zt) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${zz.PN.K9}; everything is lit.`)));
        const Xz = this.start(zz);
        this.casters.update(zz.Zb, zz.Zb.jb.length);
        const Oz = zz.nN;
        for (let Nz = 0; Nz < 3; Nz++) this.eye[Nz] = tz[Nz] + Oz[Nz];
        const oz = (0, Ys.D)(this.eye);
        this.staleNear = oz;
        const vz = zz.PN.LD;
        Xz.update(this.eye, ((zz, tz, sz) => vz.lD(zz, tz, sz)), 1);
        const Uz = (0, Ys.v)(sz.L_()),
          Kz = Xz.eyeChunk,
          uz = this.uniformInts;
        for (let Nz = 0; Nz < 3; Nz++) uz[Nz] = Kz[Nz], uz[4 + Nz] = oz[Nz];
        this.entitiesThisFrame = null !== this.entities && Wz.sunShadow, this.entitiesThisFrame && Ds(this.uniformFloats, 8, tz, Uz), null !== this.volumeHolds && (this.castersWritten || bv(Uz, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(oz, Uz, Kz)
      }
      markStale(zz) {
        const tz = this.staleNear,
          sz = Zt,
          Fz = [zz.i * sz, zz.j * sz, zz.k * sz];
        for (let Xz = 0; Xz < 3; Xz++)
          if (Fz[Xz] + sz <= tz[Xz] - sz || Fz[Xz] >= tz[Xz] + Ys.u[Xz] + sz) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Wz = this.stale;
        for (let Xz = 0; Xz < Wz.length; Xz += 4)
          if (Wz[Xz] === zz.i && Wz[Xz + 1] === zz.j && Wz[Xz + 2] === zz.k) return void(Wz[Xz + 3] = this.swept);
        if (16 === Wz.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Wz.push(zz.i, zz.j, zz.k, this.swept)
      }
      writeStale() {
        const zz = this.swept,
          tz = this.stale;
        this.staleAll && zz - this.staleAllSwept >= Ys.k && (this.staleAll = !1, tz.length = 0);
        let sz = 0;
        for (let Wz = 0; Wz < tz.length; Wz += 4)
          if (zz - tz[Wz + 3] < Ys.k) {
            for (let zz = 0; zz < 4; zz++) tz[sz + zz] = tz[Wz + zz];
            sz += 4
          } tz.length = sz;
        const Fz = this.uniformInts;
        Fz[3] = this.staleAll ? 5 : sz / 4;
        for (let Wz = 0; Wz < 4; Wz++)
          for (let zz = 0; zz < 3; zz++) Fz[16 + 4 * Wz + zz] = 4 * Wz < sz ? tz[4 * Wz + zz] * Zt : 0
      }
      writeUniform() {
        const zz = this.uniformInts;
        let tz = this.uniformWritten;
        if (tz) {
          let sz = !0;
          for (let Fz = 0; Fz < zz.length && sz; Fz++) sz = zz[Fz] === tz[Fz];
          if (sz) return
        }
        tz ??= this.uniformWritten = new Int32Array(zz.length), tz.set(zz), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(zz) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, zz)
      }
      computeVolume(zz, tz, sz) {
        const Fz = this.buildVolumePass();
        if (!Fz) return void(this.volumeHolds = null);
        const Wz = (0, Ys.z)(this.volumeHolds, zz);
        this.volumeHolds = zz;
        const Xz = 1 === Wz.length && Wz[0].size.every(((zz, tz) => zz === Ys.u[tz])),
          Oz = this.sweptChunk,
          oz = this.sweptLight,
          vz = tz[0] !== oz[0] || tz[1] !== oz[1] || tz[2] !== oz[2],
          Uz = sz[0] !== Oz[0] || sz[1] !== Oz[1] || sz[2] !== Oz[2],
          Kz = vz && bv(tz, oz);
        if ((Xz || this.written || Uz || Kz) && (this.fastLeft = Ys.k), Xz || this.written || vz || Uz) {
          this.written = !1;
          for (let zz = 0; zz < 3; zz++) Oz[zz] = sz[zz], oz[zz] = tz[zz];
          this.sweepLeft = Xz ? 0 : Ys.k
        }
        if (Xz ? this.swept += Ys.k : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Wz.push(...(0, Ys.E)(zz, this.slice)), this.slice = (this.slice + 1) % Ys.k, this.swept++), 0 === Wz.length) return;
        const uz = (0, Ys.I)(this.workData, tz, Wz);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Nz = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          bz = Nz.beginComputePass({
            label: "sun-shadow-volume"
          });
        bz.setPipeline(Fz.pipeline), bz.setBindGroup(Is.group, Fz.bindGroup), bz.dispatchWorkgroups(Math.ceil(uz / Ys.o)), bz.end(), this.device.queue.submit([Nz.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const zz = Is,
          tz = GPUShaderStage.COMPUTE,
          sz = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: zz.uniform,
              visibility: tz,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: zz.RN,
              visibility: tz,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: zz.special,
              visibility: tz,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: zz.work,
              visibility: tz,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: zz.volume,
              visibility: tz,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Fz = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: sz,
            entries: [{
              binding: zz.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: zz.RN,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: zz.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: zz.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: zz.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [sz]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: Cs()
            }),
            entryPoint: "main"
          }
        }).then((zz => {
          this.volumePass = {
            pipeline: zz,
            bindGroup: Fz
          }
        }), (zz => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(zz)}`)
        })), null
      }
      start(zz) {
        if (this.window) return this.window;
        const tz = (zz, tz) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * zz, tz)
        };
        this.casters = new Xv(((zz, sz) => {
          this.castersWritten = !0, tz(zz, sz)
        }), wv);
        const sz = new Uv(this.casters, ((zz, tz) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * zz, tz)
        }), tz);
        return sz.encoded = zz => {
          this.markStale(zz)
        }, zz.PN.on("chunkAdded", (zz => {
          sz.chunkAdded(zz)
        })), this.window = sz, sz
      }
    }
    var gv = sz(38112),
      Hv = sz(38119);
    const Bv = 0,
      Pv = 3,
      rv = 4,
      Yv = 5;

    function xv(zz, tz, sz, Fz) {
      zz.drawOffset(tz, Fz + Bv), tz[Fz + Pv] = zz.drawTime(), sz[Fz + rv] = zz.ring.drawStart(), sz[Fz + Yv] = zz.ring.drawCount()
    }
    const mv = `\n${BF}\n\nconst MAX_STOPS = ${Hv.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Hv.b/4}>,\n\tcolor1: array<vec4f, ${Hv.b}>,\n\tcolor2: array<vec4f, ${Hv.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Hv.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Hv.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var Jv = sz(40729);
    class Iv {
      constructor(zz, tz, sz, Fz) {
        this.device = zz, this.system = tz, this.frameIndex = sz, this.bindings = Fz, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Jv.d)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (zz, tz) => {
          this.device.queue.writeBuffer(this.ring, zz * Hv.f * 4, this.system.ring.records, zz * Hv.f, (tz - zz) * Hv.f)
        };
        const {
          name: Wz
        } = tz;
        this.ring = zz.createBuffer({
          label: `particles-${Wz}`,
          size: tz.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = zz.createBuffer({
          label: `particles-uniforms-${Wz}`,
          size: 4 * Hv.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(zz) {
        const tz = (0, Jv.c)(this.system, this.uniformBits, zz);
        tz && (this.uniformBits = tz, this.device.queue.writeBuffer(this.uniforms, 0, tz))
      }
      bind() {
        const {
          system: zz
        } = this, tz = this.texture;
        (0, Jv.j)(zz, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${zz.name}`,
          size: [Hv.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Hv.k
        }, [Hv.k, 1]));
        const sz = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === tz.view && this.boundSampler === tz.sampler && this.boundRamp === sz || (this.boundView = tz.view, this.boundSampler = tz.sampler, this.boundRamp = sz, this.bindGroup = this.device.createBindGroup({
          label: `particles-${zz.name}`,
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
            resource: tz.sampler
          }, {
            binding: 3,
            resource: tz.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: sz
          }]
        }))
      }
      destroy() {
        var zz;
        this.ring.destroy(), this.uniforms.destroy(), null === (zz = this.ramp) || void 0 === zz || zz.destroy()
      }
    }
    class Cv {
      constructor(zz, tz) {
        this.device = zz, this.resources = tz, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Ut.c)();
        const sz = zz.createBindGroupLayout({
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
        this.frameLayout = zz.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = zz.createPipelineLayout({
          bindGroupLayouts: [tt(zz), sz, this.frameLayout]
        }), this.module = zz.createShaderModule({
          label: "particles",
          code: mv
        });
        const Fz = zz.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        zz.queue.writeTexture({
          texture: Fz
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: sz,
          rampSampler: zz.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Fz.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (tz, sz) => (this.bindTarget(sz), {
            renderable: this.renderable,
            pipeline: Ot(zz, sz),
            draw: zz => sz === this.preparedTarget ? this.draw(zz) : 0
          })
        }
      }
      get hFz() {
        return this.systems.size
      }
      reset() {
        for (const zz of this.systems.keys()) zz.reset()
      }
      describePendingWork() {
        return (0, gv.g)(this.systems.keys(), "Lite")
      }
      tC(zz, tz) {
        const sz = new gv.e(zz, tz, this);
        return this.systems.set(sz, new Iv(this.device, sz, this.allocateFrameIndex(), this.bindings)), sz
      }
      x_(zz, tz) {
        for (const sz of this.systems.keys()) sz.x_(zz, tz)
      }
      canDraw(zz) {
        const tz = this.systems.get(zz),
          sz = zz.texture ? this.resources.boundTexture(zz.texture) : null;
        if (!tz || !sz || !this.targetPipelines) return !1;
        if (tz.texture = sz, tz.pipelines.length = 0, !aW(zz.blendMode)) return this.warnOnce(`blend:${zz.blendMode}`, `particle blend mode ${zz.blendMode} is not drawn (${zz.name})`), !0;
        const Fz = (0, cW.l)(zz.blendMode);
        for (const Wz of Fz) {
          const zz = this.pipelineFor(Wz);
          if (!1 === zz) return tz.pipelines.length = 0, !0;
          zz && tz.pipelines.push(zz)
        }
        return tz.pipelines.length === Fz.length
      }
      disposeStopped(zz) {
        zz.dispose()
      }
      remove(zz) {
        const tz = this.systems.get(zz);
        tz && (this.systems.delete(zz), tz.destroy(), this.freeFrameIndices.push(tz.frameIndex))
      }
      prepare(zz) {
        const tz = zz.animationRatio || 1;
        ot(this.renderable._worldCenter, zz, Ft), this.preparedTarget = this.target, this.draws.length = 0;
        let sz = 0;
        for (const Fz of this.systems.values()) {
          const zz = Fz.system;
          if (!zz.animateIfActive(tz)) continue;
          if (zz.ring.takeUploads(Fz.upload), !zz.hasLiveParticles() || 0 === Fz.pipelines.length) continue;
          Fz.writeUniforms(this.warnOnce), Fz.bind();
          const Wz = 64 * Fz.frameIndex;
          Fz.count = zz.ring.drawCount(), xv(zz, this.frameData, this.frameBits, Wz), sz = Math.max(sz, Wz + 64), this.draws.push(Fz)
        }
        sz > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, sz)
      }
      draw(zz) {
        let tz = 0,
          sz = null;
        for (const Fz of this.draws) {
          zz.setBindGroup(1, Fz.bindGroup), zz.setBindGroup(2, this.frameBindGroup, [256 * Fz.frameIndex]);
          for (const Wz of Fz.pipelines) Wz !== sz && (zz.setPipeline(Wz), sz = Wz), zz.draw(4, Fz.count), tz++
        }
        return tz
      }
      bindTarget(zz) {
        this.target = zz;
        const tz = `${zz._colorFormat}|${zz._depthStencilFormat}|${zz._depthCompare}|${zz._sampleCount}`;
        let sz = this.pipelines.get(tz);
        sz || (sz = new Map, this.pipelines.set(tz, sz)), this.targetPipelines = sz
      }
      pipelineFor(zz) {
        var tz;
        const sz = this.targetPipelines,
          Fz = sz.get(zz);
        if (void 0 !== Fz) return Fz;
        sz.set(zz, null);
        const Wz = this.target,
          Xz = zz === cW.e,
          Oz = null !== (tz = Wz._depthCompare) && void 0 !== tz ? tz : st;
        return this.device.createRenderPipelineAsync({
          label: `particles-${zz}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: pz({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Xz ? 1 : 0
            }
          }, Wz, qW((0, cW.i)(zz))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Wz._depthStencilFormat ? {
            format: Wz._depthStencilFormat,
            depthCompare: Oz,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Wz._sampleCount
          }
        }).then((tz => {
          sz.set(zz, tz)
        }), (tz => {
          sz.set(zz, !1), console.error("Lite particle pipeline failed", tz), RW("particles", `blend-${zz}`, tz)
        })), null
      }
      allocateFrameIndex() {
        const zz = this.freeFrameIndices.pop();
        if (void 0 !== zz) return zz;
        const tz = this.nextFrameIndex++;
        if (64 * (tz + 1) > this.frameData.length) {
          const zz = new Float32Array(2 * this.frameData.length);
          zz.set(this.frameData), this.frameData = zz, this.frameBits = new Uint32Array(zz.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return tz
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
    class ev {
      constructor(zz, tz, sz, Fz, Wz) {
        this.lite = zz, this.canvas = tz, this.info = sz, this.resources = Wz, this.ysz = !1, this.needPOTTextures = !1, this.uE = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = tz.width, this.renderHeight = tz.height, this.caps = {
          maxTextureSize: Fz.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Fz.maxTextureArrayLayers
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
      setSize(zz, tz) {
        if (this.renderWidth === zz && this.renderHeight === tz) return !1;
        const sz = this.renderWidth,
          Fz = this.renderHeight;
        this.renderWidth = zz, this.renderHeight = tz;
        try {
          (0, kz.n)(this.lite, zz, tz)
        } catch (Wz) {
          if (Wz instanceof DOMException && "InvalidStateError" === Wz.name) {
            this.renderWidth = sz, this.renderHeight = Fz;
            try {
              (0, kz.n)(this.lite, sz, Fz)
            } catch {
              this.canvas.width = sz, this.canvas.height = Fz
            }
            return console.warn("WebGPU could not allocate render targets for resize", zz, tz, Wz.message), !1
          }
          throw Wz
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
      bY() {
        const zz = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : zz - this.lastFrameTime, this.lastFrameTime = zz
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(zz, tz) {
        const sz = document.createElement("canvas");
        return sz.width = zz, sz.height = tz, sz
      }
      yE(zz, tz) {
        var sz;
        return null !== (sz = this.resources.yE.get(zz)) && void 0 !== sz ? sz : new nz(this.resources, zz, tz)
      }
      atlasArray(zz, tz, sz) {
        return this.resources.atlasArray(zz, tz, sz)
      }
    }
    class Zv {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(zz) {
        this.fov = zz.fov, this.nearPlane = zz.near, this.farPlane = zz.far;
        const tz = zz.worldMatrix;
        for (let sz = 0; sz < 16; sz++)
          if (this.worldMatrix[sz] !== tz[sz]) return this.worldMatrix.set(tz), void this.worldMatrixVersion++
      }
    }
    class Gv {
      constructor(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
        let Kz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = zz, this.Kg = tz, this.sceneTask = sz, this.gpuDevice = Fz, this.terrain = Wz, this.meshes = Xz, this.particles = Oz, this.resources = oz, this.sunShadow = Kz, this.gtz = void 0, this.backendName = "WebGPU (Lite)", this.T6 = void 0, this.modelMeshes = void 0, this.camera = new Zv, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new Lz(Fz.lost), this.deviceLost = this.refusals.deviceLost, this.gtz = new ev(zz, vz, Uz, Fz.limits, oz), (0, ez.L)({
          po: zz => {
            cz(zz) && oz.textureSlot(zz)
          },
          loaded: zz => cz(zz) ? oz.textureLoaded(zz) : null,
          canvasUpdated: (zz, tz, sz) => {
            cz(zz) && oz.canvasUpdated(zz, tz, sz)
          }
        }), this.T6 = Xz.T6, this.modelMeshes = Xz.modelMeshes, tz.camera = this.camera
      }
      get castsEntitySunShadows() {
        var zz, tz;
        return null !== (zz = null === (tz = this.sunShadow) || void 0 === tz ? void 0 : tz.tracesEntities) && void 0 !== zz && zz
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(zz) {
        this.modelMeshes.attach(zz.model, zz.sceneMirror);
        const tz = zz.Kg;
        this.setClearColour(tz.clearColor.r, tz.clearColor.g, tz.clearColor.b), tz.draw = () => {
          this.drawFrame(zz, tz)
        }
      }
      render(zz) {
        try {
          this.gtz.bY(), zz.Kg.render()
        } catch (tz) {
          throw this.refusals.frameFailed(tz), tz
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var zz, tz, sz, Fz;
        const Wz = [...this.particles.describePendingWork(), ...null !== (zz = null === (tz = this.sunShadow) || void 0 === tz ? void 0 : tz.describePendingWork()) && void 0 !== zz ? zz : []],
          Xz = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (sz = this.terrain.sceneDepth) && void 0 !== sz && sz.compiling ? 1 : 0) + (null !== (Fz = this.terrain.shadowMask) && void 0 !== Fz && Fz.compiling ? 1 : 0);
        Xz > 0 && Wz.push(`${Xz} Lite pipelines compiling`);
        const Oz = this.terrain.buffersAwaitingVerdict;
        Oz > 0 && Wz.push(`${Oz} Lite terrain buffers awaiting their out-of-memory verdict`);
        const oz = this.resources.texturesLoading;
        return oz > 0 && Wz.push(`${oz} Lite textures loading`), Wz
      }
      prepareTexture(zz) {
        return null !== this.resources.boundTexture(zz) || this.resources.textureFailed(zz)
      }
      drawFrame(zz, tz) {
        var sz, Fz, Wz, Xz, Oz, oz;
        const vz = No(zz);
        this.camera.copyFromView(vz), this.setClearColour(vz.clearColour[0], vz.clearColour[1], vz.clearColour[2]), null === (sz = this.sunShadow) || void 0 === sz || sz.prepare(zz.CN, vz.eye, null !== (Fz = zz.CN.Cw) && void 0 !== Fz ? Fz : null), this.terrain.prepare(zz, vz), null === (Wz = this.terrain.sceneDepth) || void 0 === Wz || Wz.setPlanes(vz.near, vz.far), null === (Xz = this.terrain.shadowMask) || void 0 === Xz || Xz.prepare(vz), pO(this.sceneTask), this.meshes.prepare(tz, vz, zz.model.earthSky, null !== (Oz = zz.CN.Cw) && void 0 !== Oz ? Oz : null), this.particles.prepare(vz);
        const Uz = performance.now();
        this.resources.flushUploads(), null === (oz = this.sunShadow) || void 0 === oz || oz.traceEntities(this.meshes);
        try {
          (0, kz.l)(this.engine, this.lastFrameTime > 0 ? Uz - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Uz
      }
      setClearColour(zz, tz, sz) {
        const Fz = this.Kg.clearColor;
        Fz.r = zz, Fz.g = tz, Fz.b = sz, Fz.a = 1
      }
    }
    const Tv = "WebGPU device lost while Lite was starting";

    function cv(zz, tz) {
      return "object" === typeof zz && null !== zz ? Object.assign(zz, {
        startStep: tz
      }) : zz
    }
    async function jv(zz, tz) {
      const sz = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!sz) throw cv(new Error("No WebGPU adapter"), "no_adapter");
      const Fz = sz.info,
        Wz = {
          vendor: (null === Fz || void 0 === Fz ? void 0 : Fz.vendor) || "unknown vendor",
          renderer: (null === Fz || void 0 === Fz ? void 0 : Fz.architecture) || "unknown renderer",
          version: (null === Fz || void 0 === Fz ? void 0 : Fz.description) || "unknown version"
        },
        Xz = function(zz) {
          const tz = {};
          for (const sz in zz.limits) {
            const Fz = zz.limits[sz];
            "number" === typeof Fz && (tz[sz] = Fz)
          }
          return tz
        }(sz);
      let Oz;
      zz.style.background = "black";
      try {
        Oz = await (0, kz.d)(zz, {
          msaaSamples: tz.ptz ? 4 : 1,
          requiredLimits: Xz,
          alphaMode: "premultiplied"
        })
      } catch (Kz) {
        throw cv(Kz, "#47" === (null === (oz = Kz) || void 0 === oz ? void 0 : oz.message) ? "no_adapter" : "device")
      }
      var oz;
      const vz = function(zz) {
        return zz._device
      }(Oz);
      let Uz = null;
      vz.lost.then((zz => {
        Uz = zz, console.error(`WebGPU device lost (${zz.reason}): ${zz.message}`)
      }));
      try {
        const sz = await async function(zz, tz, sz, Fz, Wz, Xz) {
          const Oz = (0, iz.d)(zz),
            oz = new SO(zz, tz),
            vz = new po(tz),
            Uz = new GO(tz, oz, (zz => function(zz, tz) {
              for (const Fz of Ez(zz)) {
                var sz;
                if (Fz._targetSignature === tz) return null !== (sz = Fz._sceneBG) && void 0 !== sz ? sz : null
              }
              return null
            }(Oz, zz))),
            Kz = new Cv(tz, oz);
          for (const bz of function(zz, tz, sz) {
              return [tz.opaqueRenderable, zz.opaqueRenderable, zz.skyLastRenderable, sz.renderable, tz.transparentRenderable, zz.transparentRenderable, zz.frontRenderable]
            }(Uz, vz, Kz)) fz(Oz, bz);
          const uz = function(zz) {
            for (const tz of Ez(zz))
              if ("Kg" === tz.name) return tz;
            throw new Error("Lite: the scene has no render task named scene")
          }(Oz);
          Wz && vz.installSceneDepth(uz, zz);
          const Nz = Xz ? new Dv(tz, Xz.entities) : null;
          vz.sunShadow = Nz, Nz && null !== Xz && void 0 !== Xz && Xz.entities && (vz.shadowMask = new eo(tz, uz, zz, vz));
          return Uz.sunShadow = Nz, await (0, iz.f)(Oz), new Gv(zz, Oz, uz, tz, vz, Uz, Kz, oz, sz, Fz, Nz)
        }(Oz, vz, zz, Wz, tz.sceneDepth, tz.sunShadow);
        if (null !== Uz) {
          const {
            reason: zz,
            message: tz
          } = Uz;
          throw Object.assign(new Error(`${Tv} (${zz}): ${tz}`), {
            fallbackReason: Tv
          })
        }
        return sz
      } catch (Kz) {
        throw vz.destroy(), null === Uz ? Kz : cv(Kz, "device")
      }
    }
  },
  39971: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Oz,
      E: () => Dz,
      F: () => bz,
      J: () => wz,
      e: () => Wz,
      i: () => Fz,
      k: () => Nz,
      m: () => Kz,
      q: () => gz,
      s: () => Xz,
      v: () => oz,
      x: () => vz
    });
    const Fz = 3,
      Wz = 0,
      Xz = 1,
      Oz = 2,
      oz = {
        uniform: 3,
        RN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      vz = 10,
      Uz = "BloxdPackInputs",
      Kz = "bloxdPackInputs",
      uz = [{
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
      Nz = 80;

    function bz() {
      const zz = uz.map((zz => {
        let {
          name: tz,
          type: sz
        } = zz;
        return `    ${tz}: ${sz},\n`
      })).join("");
      return `struct ${Uz} {\n${zz}}\n@group(${Fz}) @binding(${Wz}) var<uniform> ${Kz}: ${Uz};\n`
    }

    function wz(zz, tz) {
      const sz = new DataView(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Nz),
        [Fz, Wz, Xz, Oz, oz, vz] = uz;
      sz.setFloat32(Fz.offset, tz.seconds, !0), sz.setUint32(Wz.offset, tz.lit ? 1 : 0, !0);
      for (let Uz = 0; Uz < 3; Uz++) sz.setInt32(Xz.offset + 4 * Uz, tz.renderOffset[Uz], !0), sz.setFloat32(Oz.offset + 4 * Uz, tz.L_[Uz], !0), sz.setFloat32(oz.offset + 4 * Uz, tz.eyePosition[Uz], !0), sz.setFloat32(vz.offset + 4 * Uz, tz.shadowDirection[Uz], !0)
    }

    function Dz(zz) {
      const tz = new Uint32Array(Math.max(1, zz.length));
      return zz.forEach(((zz, sz) => {
        let {
          id: Fz,
          rotation: Wz
        } = zz;
        tz[sz] = 65535 & Fz | (3 & Wz) << 16
      })), tz
    }
    const gz = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);